import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

const Header = () => {
    const { getCartCount } = useCart();
    const count = getCartCount();
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-black tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300">
                                HẢI ANH PC
                            </span>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl px-4 md:px-8 hidden md:block">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 md:pl-6 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-3 py-2.5 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm shadow-inner"
                                placeholder="Tìm kiếm sản phẩm, linh kiện..."
                            />
                            <button className="absolute inset-y-1 right-1 px-4 md:px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 md:space-x-4">

                        {/* Search Icon (Mobile) */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                        {/* Login Button */}
                        <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full md:rounded-lg md:px-3 transition-all group">
                            <div className="relative p-1">
                                <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <span className="hidden md:block font-medium text-sm">Đăng nhập</span>
                        </button>

                        {/* Cart Button */}
                        <Link to="/cart" className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full md:rounded-lg md:px-3 transition-all group">
                            <div className="relative p-1">
                                <svg className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full shadow-sm">
                                    {count}
                                </span>
                            </div>
                            <span className="hidden md:block font-medium text-sm">Giỏ hàng</span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
