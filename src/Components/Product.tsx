const Product = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col relative overflow-hidden">
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80"
                alt="Đồng hồ test1"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 text-gray-400 p-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/70 backdrop-blur-sm rounded p-1.5 shadow-sm pointer-events-auto text-gray-600">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button className="bg-white/70 backdrop-blur-sm rounded p-1.5 shadow-sm pointer-events-auto text-gray-600">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10">
                <button className="p-2 rounded border bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 shadow-sm flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
                <button className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded shadow-sm tracking-wide">
                  + SO SÁNH
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-700 text-[15px] mb-1 truncate">
                Đồng hồ test1
              </h3>
              <div className="text-red-600 text-xl font-bold mb-1">
                1.900.000 đ
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400 line-through text-sm">
                  2.000.000 đ
                </span>
                <span className="bg-red-50 text-red-500 text-xs px-1.5 py-0.5 rounded font-medium">
                  5%
                </span>
              </div>
              <div className="flex items-center text-sm mt-auto">
                <span className="text-yellow-400 mr-1 text-base">★</span>
                <span className="text-gray-700 font-medium mr-1">4</span>
                <span className="text-gray-500">(5 đánh giá)</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col relative overflow-hidden">
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542496658-e32689368832?w=500&q=80"
                alt="Đồng hồ Fossil"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 text-gray-400 p-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10">
                <button className="p-2 rounded border bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 shadow-sm flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
                <button className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded shadow-sm tracking-wide">
                  + SO SÁNH
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-700 text-[15px] mb-1 truncate">
                Đồng hồ Fossil
              </h3>
              <div className="text-red-600 text-xl font-bold mb-1">
                500.000 đ
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400 line-through text-sm">
                  2.500.000 đ
                </span>
                <span className="bg-red-50 text-red-500 text-xs px-1.5 py-0.5 rounded font-medium">
                  80%
                </span>
              </div>
              <div className="flex items-center text-sm mt-auto">
                <span className="text-yellow-400 mr-1 text-base">★</span>
                <span className="text-gray-700 font-medium mr-1">5</span>
                <span className="text-gray-500">(6 đánh giá)</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col relative overflow-hidden">
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80"
                alt="Đồng Hồ Carnival 34mm"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 text-gray-400 p-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10">
                <button className="p-2 rounded border bg-red-600 border-red-600 text-white shadow-sm flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
                <button className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded shadow-sm tracking-wide">
                  + SO SÁNH
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-700 text-[15px] mb-1 truncate">
                Đồng Hồ Carnival 34mm
              </h3>
              <div className="text-red-600 text-xl font-bold mb-1">
                1.500.000 đ
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400 line-through text-sm">
                  5.000.000 đ
                </span>
                <span className="bg-red-50 text-red-500 text-xs px-1.5 py-0.5 rounded font-medium">
                  70%
                </span>
              </div>
              <div className="flex items-center text-sm mt-auto">
                <span className="text-yellow-400 mr-1 text-base">★</span>
                <span className="text-gray-700 font-medium mr-1">5</span>
                <span className="text-gray-500">(0 đánh giá)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
