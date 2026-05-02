import { useCart } from '../Context/CartContext';

interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface Props {
    product: ProductType;
}

const ProductCart = ({ product }: Props) => {
    // Generate mock data for Vietnamese context based on the provided props
    const priceVND = Math.round(product.price * 25000);
    // Use product ID to create a consistent mock discount percentage
    const discount = (product.id % 5) * 10 + 5; // e.g. 5%, 15%, 25%
    const oldPriceVND = Math.round(priceVND / (1 - discount / 100));

    // Mock rating data
    const rating = (product.id % 2 === 0) ? 5 : 4;
    const reviewCount = product.id * 3;

    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart({
            id: product.id,
            name: product.title,
            price: priceVND,
            quantity: 1,
            image: product.image
        });
        alert('Đã thêm sản phẩm vào giỏ hàng!');
    };

    return (
        <div className="border border-gray-200 rounded flex flex-col p-3 hover:shadow-md transition-shadow bg-white relative">
            {/* Image Area */}
            <div className="relative w-full aspect-square bg-white mb-3 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-2"
                />
                
                {/* Heart Icon */}
                <button className="absolute top-0 left-0 p-1.5 text-gray-400 hover:text-red-500 rounded-full transition-colors bg-white/50 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>

                {/* Cart Icon Button */}
                <button onClick={handleAddToCart} className="absolute bottom-1 left-1 bg-white border border-gray-200 text-gray-600 p-1.5 rounded shadow-sm hover:border-gray-300 transition-colors z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>

                {/* Compare Button */}
                <button className="absolute bottom-1 right-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium px-2 py-1.5 rounded shadow-sm hover:bg-gray-50 flex items-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    SO SÁNH
                </button>
            </div>

            {/* Info Area */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-gray-600 font-medium text-sm line-clamp-1 mb-1" title={product.title}>
                    {product.title}
                </h3>
                
                <div className="text-red-600 font-bold text-lg leading-tight mb-1">
                    {priceVND.toLocaleString('vi-VN')} đ
                </div>
                
                <div className="flex items-center mb-3">
                    <span className="text-gray-400 text-xs line-through mr-2">
                        {oldPriceVND.toLocaleString('vi-VN')} đ
                    </span>
                    <span className="bg-red-50 text-red-500 text-xs px-1 rounded font-medium">
                        {discount}%
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center text-xs mt-auto text-gray-500">
                    <span className="text-yellow-400 mr-1 text-sm">★</span>
                    <span className="font-medium mr-1 text-gray-600">{rating}</span>
                    <span>({reviewCount} đánh giá)</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;