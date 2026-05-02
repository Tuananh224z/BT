import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <a href="/" className="inline-block text-3xl font-black tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-300 hover:to-indigo-300 transition-all duration-300">
                                HẢI ANH PC
                            </span>
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Giải pháp công nghệ hàng đầu cho không gian làm việc và giải trí của bạn. Cam kết chất lượng và dịch vụ tận tâm.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-800 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-500">Danh Mục</h3>
                        <ul className="space-y-3 mt-4">
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Laptop / Máy tính xách tay</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">PC Gaming / Lắp ráp</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Linh kiện máy tính</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Màn hình / Phụ kiện</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Thiết bị mạng / Khác</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-500">Hỗ Trợ</h3>
                        <ul className="space-y-3 mt-4">
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Chính sách bảo hành</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Chính sách đổi trả</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Hướng dẫn mua hàng</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Phương thức thanh toán</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block text-sm">Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-500">Liên Hệ</h3>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-start space-x-3 text-sm group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="text-slate-400 group-hover:text-slate-300 transition-colors pt-1">123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">1900 1234 56</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">contact@techonepc.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} techonePC. All rights reserved.
                    </p>
                    <div className="flex space-x-4 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
                        <span>&middot;</span>
                        <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
