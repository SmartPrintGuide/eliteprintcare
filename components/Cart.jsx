import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { removeFromCart, addToCart } from "../redux/actions/cartActions";
const printerImg = "/assets/printer.png";

const Cart = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [giftWrap, setGiftWrap] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const totalWithGift = subtotal + (giftWrap ? 10 : 0);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        router.push('/checkout');
    };

    return (
        <div className="w-full bg-white min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Header */}
                <section className="w-full bg-white border border-gray-200 rounded-xl p-8 md:p-12 mb-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-[#2564E5]">Shopping Cart</h1>
                        <p className="mt-4 text-sm font-medium text-gray-600">
                            You have <span className="text-[#2564E5] font-bold">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span> items in your cart
                        </p>
                    </div>
                </section>

                {cartItems.length === 0 ? (
                    <div className="bg-white border border-dashed border-gray-300 rounded-xl p-20 text-center flex flex-col items-center justify-center space-y-6">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-[#2564E5]">Your Cart is Empty</h2>
                            <p className="text-gray-600">Ready to start shopping? Explore our collection.</p>
                        </div>
                        <Link href="/" className="px-8 py-3 bg-[#2564E5] text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* LEFT : Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                <div className="hidden md:grid grid-cols-5 gap-4 p-6 bg-gray-50 text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    <span className="col-span-2">Product Details</span>
                                    <span className="text-center">Price</span>
                                    <span className="text-center">Quantity</span>
                                    <span className="text-right">Action</span>
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {cartItems.map((item) => (
                                        <div key={item.product} className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6 items-center hover:bg-gray-50 transition-colors">
                                            {/* Product */}
                                            <div className="col-span-1 md:col-span-2 flex gap-6 items-center">
                                                <div className="w-20 h-20 bg-white border border-gray-200 rounded-xl p-2 flex-shrink-0">
                                                    <img
                                                        src={item.image ? (item.image.startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`) : printerImg}
                                                        alt={item.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <Link href={`/product/${item.slug}`} className="text-sm font-semibold text-gray-900 hover:text-[#2564E5] transition-colors line-clamp-1">
                                                        {item.title}
                                                    </Link>
                                                    <p className="text-xs font-medium text-green-600">In Stock</p>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="text-center">
                                                <p className="text-lg font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Quantity */}
                                            <div className="flex justify-center">
                                                <div className="flex items-center border border-gray-300 rounded-xl bg-white overflow-hidden h-10">
                                                    <button 
                                                        onClick={() => dispatch(addToCart(item.product, Math.max(1, item.qty - 1)))}
                                                        className="px-3 hover:bg-gray-50 text-gray-600"
                                                    >-</button>
                                                    <span className="px-3 text-sm font-semibold text-gray-900">{item.qty}</span>
                                                    <button 
                                                        onClick={() => dispatch(addToCart(item.product, Math.min(item.countInStock, item.qty + 1)))}
                                                        className="px-3 hover:bg-gray-50 text-gray-600"
                                                    >+</button>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="text-right">
                                                <button 
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                    className="p-3 text-red-600 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT : Summary */}
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-8 h-fit lg:sticky lg:top-24">
                                <h3 className="text-2xl font-bold text-[#2564E5] mb-6">Order Summary</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                                        <span className="text-sm font-medium text-gray-700">Subtotal</span>
                                        <span className="text-gray-900 font-semibold">${subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center justify-between cursor-pointer" onClick={() => setGiftWrap(!giftWrap)}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${giftWrap ? 'bg-[#2564E5] border-[#2564E5]' : 'border-gray-300'}`}>
                                                {giftWrap && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">Gift Wrap</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">$10.00</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg font-bold text-gray-900">Total</span>
                                        <span className="text-3xl font-bold text-[#2564E5]">${totalWithGift.toFixed(2)}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 text-center">Taxes and shipping calculated at checkout</p>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <button 
                                        onClick={checkoutHandler}
                                        className="w-full bg-[#2564E5] text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
