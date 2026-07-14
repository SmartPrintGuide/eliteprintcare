"use client";

import React, { useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
const printerImg = "/assets/printer.png";

const TopPicksGrid = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    // Take top 4 trending or latest products
    const safeProducts = Array.isArray(products) ? products : [];
    const displayProducts = safeProducts.slice(0, 4);

    const handleProductClick = (slug, id) => {
        router.push(`/product/${slug || id}`);
    };

    const handleAddToCartClick = (e) => {
        e.stopPropagation();
        router.push('/cart');
    };

    if (loading && (!products || products.length === 0)) return null;
    if (!loading && displayProducts.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            {/* Heading */}
            <div className="mb-12 text-center space-y-3">
                <h2 className="text-4xl font-bold text-[#2564E5] uppercase tracking-tighter">
                    Top Picks This Month
                </h2>
                <p className="text-gray-500 font-semibold uppercase text-[10px] tracking-[0.3em]">
                    Explore our most popular pieces that customers can't get enough of
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {displayProducts.map((product) => (
                    <div
                        key={product._id}
                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#2564E5] transition-colors duration-300 flex flex-col p-4"
                    >
                        {/* Image */}
                        <div
                            className="relative w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden"
                            onClick={() => handleProductClick(product.slug, product._id)}
                        >
                            <img
                                src={product.image ? (product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`) : printerImg}
                                alt={product.title}
                                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => e.target.src = printerImg}
                            />
                            {product.rating > 4 && (
                                <span className="absolute top-4 left-4 bg-[#2564E5] text-white text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                    Trending
                                </span>
                            )}
                        </div>

                        {/* Info */}
                        <div className="p-4 flex-1 flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="text-[10px] text-[#2564E5] font-semibold uppercase tracking-widest">
                                    {product.category?.name || 'Hardware'}
                                </h3>
                                <h2 className="text-sm font-semibold text-gray-800 mt-2 line-clamp-2 leading-tight min-h-[40px]">
                                    {product.title}
                                </h2>
                                <div className="mt-4 flex items-center gap-3">
                                    <p className="text-xl font-bold text-gray-900">
                                        ${product.price ? product.price.toFixed(2) : '0.00'}
                                    </p>
                                    {product.oldPrice > 0 && (
                                        <p className="text-xs text-gray-400 font-semibold line-through">
                                            ${product.oldPrice.toFixed(2)}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCartClick}
                                className="w-full bg-[#2564E5] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold uppercase text-[10px] tracking-widest active:scale-95"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopPicksGrid;
