import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3800/api');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log("Data ::", data);
                setProducts(data);  // Assuming the API returns an array of products
            } catch (error) {
                setError(error.message);  // Set error message if fetching fails
            } finally {
                setLoading(false);  // Loading is false after the fetch is complete
            }
        };

        fetchProducts();
    }, []);

    const handleViewAllClick = () => {
        setVisibleProducts(products.length);  // Show all products
    };

    if (loading) {
        return <div>Loading...</div>;  // Show loading message or spinner while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>;  
    }

    return (
        <>
            <div className=" mx-auto mt-10 w-[80%] flex justify-between items-center p-4 ">
                <h2 className="text-3xl font-semibold text-gray-800 ">BestSellers</h2>
                <div
                    onClick={handleViewAllClick}
                    className="text-gray-700 text-[11px] font-semibold cursor-pointer hover:text-blue-500"
                >
                    View All &gt;
                </div>
            </div>


            <div className="w-[80%] mx-auto p-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {products.slice(0, visibleProducts).map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            productName={product.productName}
                            price={product.price}
                            discountPercentage={product.discountPercentage}
                        />
                    ))}
                </div>
            </div>
        </>
    );


};
export default ProductSection;