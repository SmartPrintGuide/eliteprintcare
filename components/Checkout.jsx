"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { saveShippingAddress } from '../redux/actions/cartActions';
import axios from 'axios';
import { Loader2, ShieldCheck, Truck, CreditCard, ChevronRight, Lock } from 'lucide-react';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useRouter();

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const [province, setProvince] = useState(shippingAddress.state || '');
    const [phone, setPhone] = useState(shippingAddress.phone || '');

    const [step, setStep] = useState(1);
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [clover, setClover] = useState(null);
    const [paymentError, setPaymentError] = useState('');

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!userInfo || cartItems.length === 0) {
            navigate.push('/cart');
            return;
        }
        if (step !== 2) return;

        // Dynamically load Clover SDK only when needed
        const initClover = () => {
             setTimeout(() => {
                const numberEl = document.querySelector('#card-number');
                const dateEl = document.querySelector('#card-date');
                const cvvEl = document.querySelector('#card-cvv');
                const zipEl = document.querySelector('#card-postal-code');

                // Check if containers exist and are empty
                if (numberEl && !numberEl.hasChildNodes()) {
                     const cloverInstance = new window.Clover(process.env.NEXT_PUBLIC_CLOVER_PUBLIC_KEY);
                     const elements = cloverInstance.elements();
                     
                     const styles = { 
                         body: { 
                             fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', 
                             fontSize: '14px',
                             color: '#334155', // slate-700
                             fontWeight: '500', 
                             margin: '0',
                             padding: '0',
                             width: '100%'
                         },
                         input: {
                             padding: '0', 
                             margin: '0',
                             width: '100%'
                         },
                         'input::placeholder': {
                             color: '#94a3b8' // slate-400
                         }
                     };

                     const cardNumber = elements.create('CARD_NUMBER', { styles });
                     const cardDate = elements.create('CARD_DATE', { styles });
                     const cardCvv = elements.create('CARD_CVV', { styles });
                     const cardPostalCode = elements.create('CARD_POSTAL_CODE', { styles });

                     cardNumber.mount('#card-number');
                     cardDate.mount('#card-date');
                     cardCvv.mount('#card-cvv');
                     cardPostalCode.mount('#card-postal-code');

                     setClover(cloverInstance);
                }
             }, 100);
        };

        if (window.Clover) {
            initClover();
        } else {
            const script = document.createElement('script');
            script.src = 'https://checkout.clover.com/sdk.js';
            script.async = true;
            script.onload = initClover;
            document.body.appendChild(script);
        }
    }, [userInfo, cartItems, navigate, step]);

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-gray-600 text-lg font-medium">Loading checkout...</div>
            </div>
        );
    }

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const taxPrice = 0;
    const shippingPrice = 0;
    const totalPrice = subtotal + taxPrice + shippingPrice;

    const submitShippingHandler = async (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country, state: province, phone }));
        setStep(2);
    };

    // ✅ CLOVER PAYMENT
    const initPayment = async () => {
        try {
            setLoading(true);

            if (!clover) {
                setPaymentError('Payment system not initialized. Please refresh and try again.');
                setLoading(false);
                return;
            }

            const result = await clover.createToken();
            if (result.errors) {
                 setPaymentError('Card error: ' + Object.values(result.errors).join(', '));
                 setLoading(false);
                 return;
            }

            // 1. Create order
            const orderData = {
                orderItems: cartItems,
                shippingAddress: {
                    address,
                    city,
                    postalCode,
                    country,
                    phone,
                    state: province,
                    shippingMethod: 'Free Delivery',
                },
                paymentMethod: 'Clover',
                itemsPrice: subtotal,
                taxPrice,
                shippingPrice,
                totalPrice,
            };

            const { data: createdOrder } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/orders`,
                orderData,
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            // 2. Clover payment (backend)
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/orders/clover/pay`,
                {
                    amount: totalPrice,
                    orderId: createdOrder._id,
                    source: result.token,
                },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            navigate('/profile');

        } catch (error) {
            console.error(error);
            const msg =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                'Payment failed. Please check your card details and try again.';
            setPaymentError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-5xl mx-auto px-4">

                {/* Progress */}
                <div className="flex items-center justify-center mb-12 space-x-4">
                    {[1, 2].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                                step >= s ? 'bg-[#2564E5] text-white' : 'bg-white border-2 border-gray-300 text-gray-400'
                            }`}>
                                {s}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    {/* LEFT */}
                    <div className="lg:col-span-3">
                        {step === 1 ? (
                            <form onSubmit={submitShippingHandler} className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl">
                                <h2 className="text-2xl font-bold text-[#2564E5] mb-8 flex items-center gap-3">
                                    <Truck size={28} />
                                    Shipping Details
                                </h2>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Street Address</label>
                                        <input 
                                            value={address} 
                                            onChange={(e) => setAddress(e.target.value)} 
                                            required 
                                            placeholder="123 Main St" 
                                            className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none font-medium text-gray-900" 
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">City</label>
                                            <input 
                                                value={city} 
                                                onChange={(e) => setCity(e.target.value)} 
                                                required 
                                                placeholder="New York" 
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none font-medium text-gray-900" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">State / Province</label>
                                            <input 
                                                value={province} 
                                                onChange={(e) => setProvince(e.target.value)} 
                                                required
                                                placeholder="NY" 
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none font-medium text-gray-900" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Postal Code</label>
                                            <input 
                                                value={postalCode} 
                                                onChange={(e) => setPostalCode(e.target.value)} 
                                                required 
                                                placeholder="10001" 
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none font-medium text-gray-900" 
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Country</label>
                                            <input 
                                                value={country} 
                                                onChange={(e) => setCountry(e.target.value)} 
                                                required 
                                                placeholder="United States" 
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none font-medium text-gray-900" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                            <input 
                                                value={phone} 
                                                onChange={(e) => setPhone(e.target.value)} 
                                                required 
                                                placeholder="+1 (555) 000-0000" 
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none font-medium text-gray-900" 
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium">
                                    Free delivery is included on all orders. No shipping charges will be added at checkout.
                                </div>

                                <button type="submit" disabled={loading} className="w-full mt-8 bg-[#2564E5] text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-wait">
                                    {loading ? <Loader2 className="animate-spin" /> : <>Proceed to Payment <ChevronRight size={20} /></>}
                                </button>
                            </form>
                        ) : (
                            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl space-y-8">
                                {/* Payment Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <CreditCard size={28} className="text-[#2564E5]" />
                                        <h2 className="text-2xl font-bold text-[#2564E5]">Payment</h2>
                                    </div>
                                    <button onClick={() => setStep(1)} className="text-sm font-semibold text-gray-500 hover:text-gray-700 whitespace-nowrap">
                                        Edit Shipping
                                    </button>
                                </div>

                                {/* Order Summary */}
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-4 mb-6">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Order Summary</h4>
                                    <div className="divide-y divide-gray-200">
                                        {cartItems.map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-3 text-sm font-medium text-gray-700 gap-1">
                                                <span className="line-clamp-1">{item.title}</span>
                                                <span className="shrink-0">{item.qty} × ${item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Payment Section */}
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <label className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Pay with Card</label>
                                        <div className="flex gap-2">
                                            <div className="h-5 w-8 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-600">VISA</div>
                                            <div className="h-5 w-8 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-600">MC</div>
                                            <div className="h-5 w-8 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-600">AMEX</div>
                                        </div>
                                    </div>

                                    {/* Card Number */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider px-1">Card Number</label>
                                        <div className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-[#2564E5] focus-within:border-[#2564E5] transition">
                                            <div id="card-number" className="w-full h-5"></div>
                                        </div>
                                    </div>

                                    {/* Expiry, CVV, Zip - Responsive Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider px-1">Expiry</label>
                                            <div className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-[#2564E5] focus-within:border-[#2564E5] transition">
                                                <div id="card-date" className="w-full h-5"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider px-1">CVV</label>
                                            <div className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-[#2564E5] focus-within:border-[#2564E5] transition">
                                                <div id="card-cvv" className="w-full h-5"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider px-1">Zip Code</label>
                                            <div className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-[#2564E5] focus-within:border-[#2564E5] transition">
                                                <div id="card-postal-code" className="w-full h-5"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium px-1 mt-2">
                                        <Lock size={10} />
                                        <span>Instant Payment Processing. No OTP required for supported cards.</span>
                                    </div>
                                </div>

                                {paymentError && (
                                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
                                        {paymentError}
                                    </div>
                                )}

                                <button
                                    onClick={() => { setPaymentError(''); initPayment(); }}
                                    disabled={loading}
                                    className="w-full mt-6 bg-[#2564E5] text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? <Loader2 className="animate-spin" size={22} /> : <>Pay Now <ShieldCheck size={22} /></>}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2 bg-gray-50 border border-gray-200 p-8 rounded-xl h-fit">
                        <h3 className="text-xl font-bold text-[#2564E5] mb-6">Summary</h3>
                        <div className="space-y-4 text-gray-700 font-medium">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax:</span>
                                <span>${taxPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-green-600 font-semibold">
                                <span>Shipping:</span>
                                <span>Free Delivery</span>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-300" />
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg text-gray-900">Total:</span>
                            <span className="text-3xl font-bold text-[#2564E5]">${totalPrice.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-6 font-medium leading-relaxed">
                            Payments are securely processed via Clover (PCI-DSS compliant).
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
