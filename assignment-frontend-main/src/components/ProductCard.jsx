// 
const ProductCard = ({ image, productName, price, discountPercentage }) => {
    const discountedPrice = price - (price * discountPercentage / 100);
    return (
        <>

            <div className="relative bg-white rounded-lg overflow-hidden">
                <div className="absolute rounded-lg  bg-red-500 text-white text-xs font-semibold px-3 py-1">
                   <span className="bg-custom-red text-custom-white px-2 py-1 rounded-full">Save {discountPercentage} % Off</span> 
                </div>
                <img
                    src={image}
                    alt={productName}
                    className=" w-[300px] h-56 rounded-lg object-cover mb-4"
                />

                {/* Product Details */}
                <div className="px-4 ">
                    <h3 className="text-center text-[12px] font-semibold text-gray-800">{productName}</h3>
                    <div className="flex items-center justify-center gap-2 mt-2 ">
                        <p className="text-[13px] text-red-700 text-custom-red font-semibold ">₹ {discountedPrice}</p>
                        <p className="text-[13px] text-gray-500 line-through">₹{price}</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img
                            src={image}
                            alt={productName}
                            className=" mt-2 w-[36px] h-[36px] object-cover mb-4 border-[1px] border-black"
                        /><img
                        src="https://img.freepik.com/free-photo/vintage-leather-briefcase-blue_155003-735.jpg?ga=GA1.1.1363914927.1727019548&semt=ais_hybrid"
                        alt={productName}
                        className="rounded-sm mt-2 w-[38px] h-[38px] object-cover mb-4 "
                    />
                    </div>


                </div>
            </div>
        </>

    );
};



export default ProductCard;
