import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { listProductDetails, listProducts } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const ProductDetails = ({ productSlug: propSlug }) => {
    const pathname = usePathname();
    const router = useRouter();
    const productSlug = propSlug || (pathname && decodeURIComponent(pathname.split('/')[2] || ''));
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState("overview");
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    const [showReviewLoginMessage, setShowReviewLoginMessage] = useState(false);
    const [showEligibilityMessage, setShowEligibilityMessage] = useState(false);
    const [canReview, setCanReview] = useState(false);

    const { loading, error, product } = useSelector((state) => state.productDetails);
    const { userInfo } = useSelector((state) => state.userLogin);
    const { products: relatedProducts } = useSelector((state) => state.productList);

    useEffect(() => {
        if (productSlug) {
            dispatch(listProductDetails(productSlug));
        }
    }, [dispatch, productSlug]);

    useEffect(() => {
        if (product?.category) {
            const categoryName = product.category.name || product.category;
            dispatch(listProducts("", categoryName, 1));
        }
    }, [dispatch, product]);

    useEffect(() => {
        const checkEligibility = async () => {
            if (userInfo && product?._id) {
                try {
                    const config = {
                        headers: { Authorization: `Bearer ${userInfo.token}` },
                    };
                    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
                    const { data } = await axios.get(
                        `${baseUrl}/orders/check-review-eligibility/${product._id}`,
                        config
                    );
                    setCanReview(data.canReview);
                } catch {
                    setCanReview(false);
                }
            }
        };
        checkEligibility();
    }, [userInfo, product]);

    const addToCartHandler = () => {
        if (!userInfo) {
            setShowLoginMessage(true);
            setTimeout(() => setShowLoginMessage(false), 3000);
            return;
        }
        dispatch(addToCart(product.slug || product._id, qty));
        router.push("/cart");
    };

    const buyNowHandler = () => {
        if (!userInfo) {
            setShowLoginMessage(true);
            setTimeout(() => setShowLoginMessage(false), 3000);
            return;
        }
        dispatch(addToCart(product.slug || product._id, qty));
        router.push("/cart?redirect=shipping");
    };

    const handleWriteReview = () => {
        if (!userInfo) {
            setShowReviewLoginMessage(true);
            setTimeout(() => setShowReviewLoginMessage(false), 3000);
            return;
        }
        if (!canReview) {
            setShowEligibilityMessage(true);
            setTimeout(() => setShowEligibilityMessage(false), 3000);
            return;
        }
        alert("Open review form here");
    };

    if (loading || !productSlug)
        return (
            <div className="min-h-[60vh] flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-[#2564E5] rounded-full animate-spin"></div>
            </div>
        );

    if (error)
        return (
            <div className="text-center py-20 text-red-500 font-bold">
                {error}
            </div>
        );

    if (!product || !product._id)
        return (
            <div className="text-center py-20 text-red-500 font-bold">
                Product Not Found
            </div>
        );

    const productImages =
        product?.images?.length > 0
            ? product.images.map((img) =>
                img.startsWith("http")
                    ? img
                    : `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "")}${img}`
            )
            : ["/printer.png"];

    return (
        <section className="bg-white py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">

                {/* PRODUCT SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start">

                    {/* LEFT IMAGES */}
                    <div>
                        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-8 h-[340px] sm:h-[420px] md:h-[560px] flex items-center justify-center relative">
                            {product.isNew && (
                                <span className="absolute top-4 left-4 bg-[#2564E5] text-white text-xs font-bold px-4 py-1 rounded-full z-10">NEW</span>
                            )}
                            <img
                                src={productImages[activeImage]}
                                alt={product.title}
                                className="w-full h-full object-contain rounded-xl transition-all duration-300"
                            />
                        </div>
                        <div className="relative">
                            <div
                                className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 overflow-x-auto"
                                style={{ maxWidth: '100%', paddingBottom: '8px', WebkitOverflowScrolling: 'touch' }}
                                ref={el => (window.thumbnailScroll = el)}
                            >
                                {productImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        onClick={() => setActiveImage(index)}
                                        className={`w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl cursor-pointer border-2 transition-all duration-200 ${activeImage === index ? "border-[#2564E5]" : "border-gray-200"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT INFO */}
                    <div className="space-y-5 sm:space-y-7">

                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            {product.brand && (
                                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{product.brand}</span>
                            )}
                            {Array.isArray(product.technology) && product.technology.length > 0 && (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-200">{product.technology.join(', ')}</span>
                            )}
                            {Array.isArray(product.usageCategory) && product.usageCategory.length > 0 && (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-200">{product.usageCategory.join(', ')}</span>
                            )}
                            {Array.isArray(product.allInOneType) && product.allInOneType.length > 0 && (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-200">{product.allInOneType.join(', ')}</span>
                            )}
                            {product.wireless && !(String(product.category?.name || product.category || '').trim().toLowerCase().includes('ink') || String(product.category?.name || product.category || '').trim().toLowerCase().includes('toner')) && (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-200">Wireless: {product.wireless}</span>
                            )}
                            {Array.isArray(product.mainFunction) && product.mainFunction.length > 0 && (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-200">{product.mainFunction.join(', ')}</span>
                            )}
                            {product.countInStock > 0 ? (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">In Stock</span>
                            ) : (
                                <span className="inline-block bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">Out of Stock</span>
                            )}
                        </div>
                        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#2564E5] leading-tight break-words max-w-full" style={{ wordBreak: 'break-word' }}>{product.title}</h1>
                        {product.shortDetails && (
                            <div className="mt-2 bg-white border border-gray-200 rounded-xl p-4 text-gray-700 text-base sm:text-lg font-medium">
                                {typeof product.shortDetails === 'string' ? product.shortDetails.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ') : product.shortDetails}
                            </div>
                        )}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">{product.description}</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                            <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#2564E5] bg-white px-4 sm:px-6 py-2 rounded-xl border border-gray-200">${product.price?.toFixed(2)}</span>
                            {product.oldPrice && product.oldPrice !== product.price && (
                                <span className="text-base sm:text-lg text-gray-400 line-through">${product.oldPrice?.toFixed(2)}</span>
                            )}
                        </div>
                        {product.countInStock > 0 && (
                            <div className="flex items-center gap-3 mt-2">
                                <span className="font-semibold text-gray-700">Qty:</span>
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 bg-gray-100 rounded-xl text-lg font-bold">-</button>
                                <span className="font-semibold text-[#2564E5]">{qty}</span>
                                <button onClick={() => setQty(Math.min(product.countInStock, qty + 1))} className="px-3 py-2 bg-gray-100 rounded-xl text-lg font-bold">+</button>
                            </div>
                        )}
                        {showLoginMessage && (
                            <div className="text-red-500 text-xs sm:text-sm font-semibold">Please login first</div>
                        )}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                            <button onClick={addToCartHandler} className="flex-1 bg-[#2564E5] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">Add to Cart</button>
                            <button onClick={buyNowHandler} className="flex-1 bg-white text-[#2564E5] border border-[#2564E5] py-3 rounded-xl font-semibold hover:bg-gray-50 transition text-lg">Buy Now</button>
                        </div>
                        {product.shortSpecification && (
                            <div className="mt-4 bg-white border border-gray-200 rounded-xl p-4 text-gray-700 text-xs sm:text-base font-medium">
                                {typeof product.shortSpecification === 'string' ? product.shortSpecification.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ') : product.shortSpecification}
                            </div>
                        )}
                    </div>
                </div>

                {/* TABS */}
                <div className="mt-20">
                    <div className="flex gap-10 border-b border-gray-200">
                        {["overview", "specifications", "reviews"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 font-semibold capitalize transition-all duration-200 ${activeTab === tab ? "text-[#2564E5] border-b-2 border-[#2564E5]" : "text-gray-500 hover:text-[#2564E5]"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="py-10">
                        {activeTab === "overview" && (
                            <div className="prose max-w-none prose-blue prose-lg" dangerouslySetInnerHTML={{ __html: product.overview || "<p>No overview available</p>" }} />
                        )}
                        {activeTab === "specifications" && (
                            <div className="prose max-w-none prose-blue prose-lg" dangerouslySetInnerHTML={{ __html: product.technicalSpecification || "<p>No specifications available</p>" }} />
                        )}
                        {activeTab === "reviews" && (
                            <div>
                                <button onClick={handleWriteReview} className="mb-6 px-6 py-3 bg-[#2564E5] text-white rounded-xl hover:bg-blue-700 transition">Write Review</button>
                                {showReviewLoginMessage && (
                                    <div className="text-red-500 text-sm font-semibold mb-4">Please login first</div>
                                )}
                                {showEligibilityMessage && (
                                    <div className="text-red-500 text-sm font-semibold mb-4">Please buy and receive item to write review</div>
                                )}
                                {product.reviews?.length > 0 ? (
                                    product.reviews.map((review, index) => (
                                        <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl mb-4">
                                            <strong className="text-[#2564E5]">{review.name}</strong>
                                            <p className="mt-2 text-gray-600">{review.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No reviews yet</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* RELATED PRODUCTS */}
                {relatedProducts?.length > 0 && (
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold text-[#2564E5] mb-10">Related Products</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {relatedProducts.filter((p) => p?._id !== product._id).slice(0, 4).map((item) => {
                                const firstImage = item?.images?.length > 0 ? (item.images[0].startsWith("http") ? item.images[0] : `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "")}${item.images[0]}`) : "/printer.png";
                                return (
                                    <Link key={item._id} href={`/product/${item.slug || item._id}`} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#2564E5] transition group">
                                        <img src={firstImage} alt={item.title} className="h-32 object-contain w-full mb-4 rounded-xl" />
                                        <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">{item.title}</h4>
                                        <p className="text-[#2564E5] font-bold mt-2">${item.price}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductDetails;
