"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Lock, Save, AlertCircle, CheckCircle2, Loader2, Package, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import { getUserDetails, updateUserProfile } from '../../redux/actions/userActions';
import { listMyOrders } from '../../redux/actions/orderActions';
import { USER_UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants';
import HelpSupport from './HelpSupport';

const ProfilePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [activeTab, setActiveTab] = useState('settings'); // 'settings' or 'orders'

    const dispatch = useDispatch();
    const router = useRouter();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success, loading: updateLoading } = userUpdateProfile;

    const profileUser = user || userInfo;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    useEffect(() => {
        if (!userInfo || !userInfo.token) {
            router.push('/');
            return;
        }

        if (userInfo.isAdmin) {
            router.push('/admin/dashboard');
            return;
        }

        if (!user || !user.firstName || success) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails('profile'));
            dispatch(listMyOrders());
        } else {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
        }
    }, [dispatch, router, userInfo, user, success]);

    const submitHandler = (e) => {
        e.preventDefault();
        setMessage(null);
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(updateUserProfile({ id: profileUser?._id, firstName, lastName, email, password }));
        }
    };

    return (
        <div className="min-h-screen bg-white pt-12 pb-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-72 flex-shrink-0 mb-8 md:mb-0">
                        <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-[#2564E5] rounded-full flex items-center justify-center mb-4 text-white">
                                <span className="text-3xl font-bold uppercase">{profileUser?.firstName?.charAt(0) || profileUser?.name?.charAt(0) || '?'}</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">{profileUser?.name || 'Loading...'}</h2>
                            <p className="text-gray-500 text-xs truncate max-w-full font-medium mb-2">{profileUser?.email || 'Loading...'}</p>
                            <div className="inline-flex items-center px-4 py-1 bg-gray-100 text-[#2564E5] text-xs font-bold rounded-full mb-4">
                                {profileUser?.isAdmin ? 'Administrator' : 'Customer'}
                            </div>
                            <div className="w-full flex flex-col gap-2 mt-4">
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`w-full py-2 rounded-xl text-base font-semibold transition-all ${activeTab === 'settings' ? 'bg-[#2564E5] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Profile Details
                                </button>
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className={`w-full py-2 rounded-xl text-base font-semibold transition-all ${activeTab === 'orders' ? 'bg-[#2564E5] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Order History
                                </button>
                                <button
                                    onClick={() => setActiveTab('help')}
                                    className={`w-full py-2 rounded-xl text-base font-semibold transition-all ${activeTab === 'help' ? 'bg-[#2564E5] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Help & Support
                                </button>
                            </div>
                            <div className="w-full flex justify-between mt-8 pt-6 border-t border-gray-200">
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-600 text-xs font-semibold flex items-center gap-1"><Package size={16} /> Orders</span>
                                    <span className="font-bold text-gray-900 text-lg">{orders?.length || 0}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-600 text-xs font-semibold flex items-center gap-1"><CreditCard size={16} /> Saved Cards</span>
                                    <span className="font-bold text-gray-900 text-lg">0</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        {activeTab === 'settings' ? (
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <div className="p-8 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#2564E5]">Personal Information</h2>
                                        <p className="text-gray-600 text-base mt-1 font-medium">Update your basic profile info and email</p>
                                    </div>
                                    <User className="text-[#2564E5]" size={36} />
                                </div>

                                <form onSubmit={submitHandler} className="p-8 space-y-8">
                                    {message && (
                                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {message}
                                        </div>
                                    )}
                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {error}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="p-3 bg-green-50 border border-green-200 text-green-600 text-sm rounded-lg flex items-center gap-2">
                                            <CheckCircle2 size={16} />
                                            Profile Updated Successfully
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">First Name</label>
                                            <input
                                                type="text"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none transition-all font-medium text-gray-900"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                            <input
                                                type="text"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none transition-all font-medium text-gray-900"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none transition-all font-medium text-gray-900"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">Security Settings</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">New Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none transition-all font-medium text-gray-900"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none transition-all font-medium text-gray-900"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading || updateLoading}
                                            className="inline-flex items-center gap-2 px-10 py-4 bg-[#2564E5] hover:bg-blue-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 text-lg"
                                        >
                                            {updateLoading || loading ? (
                                                <Loader2 className="animate-spin" size={24} />
                                            ) : (
                                                <>
                                                    <Save size={22} />
                                                    Save Changes
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : activeTab === 'orders' ? (
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <div className="p-8 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#2564E5]">Order History</h2>
                                        <p className="text-gray-600 text-base mt-1 font-medium">View and track all your previous purchases</p>
                                    </div>
                                    <Package className="text-[#2564E5]" size={36} />
                                </div>

                                <div className="p-8">
                                    {loadingOrders ? (
                                        <div className="flex flex-col items-center justify-center py-12">
                                            <Loader2 className="animate-spin text-[#2564E5] mb-4" size={40} />
                                            <p className="text-gray-500">Fetching your orders...</p>
                                        </div>
                                    ) : errorOrders ? (
                                        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-3">
                                            <AlertCircle size={20} />
                                            {errorOrders}
                                        </div>
                                    ) : orders && orders.length === 0 ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Package className="text-[#2564E5]" size={36} />
                                            </div>
                                            <h3 className="text-gray-900 font-bold text-xl">No orders found</h3>
                                            <p className="text-gray-500 mb-6 font-medium">Looks like you haven't placed any orders yet.</p>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#2564E5] text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-lg"
                                            >
                                                Start Shopping
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="pb-4 pt-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Order ID</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Date</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Total</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {orders && orders.map((order) => (
                                                        <tr key={order._id} className="group hover:bg-gray-50 transition-colors">
                                                            <td className="py-4 font-mono text-base text-gray-700">#{order._id.substring(18)}</td>
                                                            <td className="py-4">
                                                                <div className="flex items-center gap-2 text-gray-700 text-base">
                                                                    <Calendar size={16} />
                                                                    {new Date(order.createdAt).toLocaleDateString()}
                                                                </div>
                                                            </td>
                                                            <td className="py-4 font-bold text-gray-900 text-lg">${order.totalPrice.toFixed(2)}</td>
                                                            <td className="py-4">
                                                                {order.isPaid ? (
                                                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">Paid</span>
                                                                ) : (
                                                                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase">Failed</span>
                                                                )}
                                                            </td>
                                                            <td className="py-4 text-right">
                                                                <Link
                                                                    href={`/order/${order._id}`}
                                                                    className="inline-flex items-center gap-1 text-lg font-semibold text-[#2564E5] hover:text-blue-700 transition-colors"
                                                                >
                                                                    Details
                                                                    <ChevronRight size={18} />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : activeTab === 'help' ? (
                            <HelpSupport />
                        ) : null}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
