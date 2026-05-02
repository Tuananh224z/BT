import { useState, useEffect } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Product = () => {
  // Sử dụng useState để lưu trữ danh sách sản phẩm và trạng thái loading
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Sử dụng useEffect để gọi API khi component vừa được render
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Mảng rỗng [] giúp useEffect chỉ chạy 1 lần khi mount

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-lg text-gray-500 font-medium">Đang tải dữ liệu sản phẩm...</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col relative overflow-hidden group/card"
            >
              {/* ===== PHẦN ẢNH SẢN PHẨM ===== */}
              <div className="relative aspect-square bg-white p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* ICON TRÁI TIM */}
                <button className="absolute top-3 left-3 text-gray-300 p-1 hover:text-red-500 transition-colors z-10">
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
                </button>

                {/* NÚT GIỎ HÀNG VÀ SO SÁNH */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <button className="p-2 rounded border bg-white/95 backdrop-blur-sm border-gray-200 text-gray-700 shadow-sm flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
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
                  <button className="bg-white/95 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded shadow-sm tracking-wide hover:bg-gray-50 transition-colors">
                    + SO SÁNH
                  </button>
                </div>
              </div>

              {/* ===== PHẦN THÔNG TIN SẢN PHẨM ===== */}
              <div className="p-4 flex flex-col flex-grow border-t border-gray-50">
                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider truncate">
                  {product.category}
                </div>
                <h3 className="text-gray-800 text-[15px] font-medium mb-1 line-clamp-2 min-h-[44px]" title={product.title}>
                  {product.title}
                </h3>

                {/* Giả lập giá VNĐ từ USD */}
                <div className="text-red-600 text-xl font-bold mb-1 mt-1">
                  {(product.price * 25000).toLocaleString('vi-VN')} đ
                </div>

                {/* Giả lập giá gốc và % giảm */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-400 line-through text-sm">
                    {((product.price * 25000) * 1.2).toLocaleString('vi-VN')} đ
                  </span>
                  <span className="bg-red-50 text-red-500 text-[11px] px-1.5 py-0.5 rounded font-bold">
                    20%
                  </span>
                </div>

                {/* Đánh giá */}
                <div className="flex items-center text-sm mt-auto pt-2 border-t border-dashed border-gray-100">
                  <span className="text-yellow-400 mr-1 text-base">★</span>
                  <span className="text-gray-700 font-medium mr-1">4.5</span>
                  <span className="text-gray-400 text-xs">(120 đánh giá)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
