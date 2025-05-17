import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext/ShopContext"; // Ensure ShopContext is correctly imported

const Home = () => {
  const { products, addToCart } = useContext(ShopContext);
  const [search, setSearch] = useState(""); // State for search input
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  // Handle change in the search input field
  const handleSearchChange = (e) => {
    setSearch(e.target.value);

    // Filter products based on search
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered); // Update filtered products
  };

  // Add product to the cart
  const handleClick = async (productId) => {
    try {
      await addToCart(productId);
    } catch (error) {
      console.log("Error on addToCart", error.message);
    }
  };

  return (
    <div className="bg-pink-100 w-full min-h-screen flex flex-col items-center px-4 py-8">
      <div className="flex w-full justify-center m-2">
        <h2 className="text-pink-800 text-4xl sm:text-5xl font-serif italic font-extrabold tracking-wide mb-6 text-center drop-shadow-sm">
          To the future of glossy skin...
        </h2>
      </div>
      {/* Search Bar */}
      <div className="flex justify-center mb-8 mt-4">
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleSearchChange}
          value={search}
          className="w-80 sm:w-96 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all ease-in-out duration-300 hover:shadow-lg hover:border-pink-400"
        />
      </div>

      <div className="mt-2 w-full flex justify-center">
        {/* products goes here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="m-2 p">
              <div className="bg-white p-4 rounded shadow-lg flex flex-col">
                <h2 className="text-pink-600 text-lg font-semibold">
                  {product.name}
                </h2>
                <img
                  src={product.productImage}
                  alt={product.name}
                  className="w-full h-[300px] object-cover bg-gray-200 rounded-md mt-4"
                />
                <p className="mt-4 text-gray-700">{product.description}</p>
                <p className="mt-2 text-xl font-bold text-gray-900">
                  Rs.{product.price}
                </p>
                <button
                  onClick={() => handleClick(product._id)}
                  className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
