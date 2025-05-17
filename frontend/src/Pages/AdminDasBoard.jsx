import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext/ShopContext";

const AdminDasBoard = () => {
  const { products } = useContext(ShopContext);

  const handleEdit = (product) => {
    console.log("Edit clicked:", product);
    // Redirect to edit page or open modal here
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
    // Trigger API call to delete and refresh list
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Admin Dashboard
        </h2>

        {/* Products Table */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Products
          </h3>
          <div className="overflow-x-auto bg-white p-6 shadow-lg rounded-lg">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  <th className="py-3 px-4 border-b">Product Name</th>
                  <th className="py-3 px-4 border-b">Price</th>
                  <th className="py-3 px-4 border-b">Description</th>
                  <th className="py-3 px-4 border-b">Category</th>
                  <th className="py-3 px-4 border-b">Product Image</th>
                  <th className="py-3 px-4 border-b">Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{product.name}</td>
                    <td className="py-3 px-4 border-b">{product.price}</td>
                    <td className="py-3 px-4 border-b">
                      {product.description}
                    </td>
                    <td className="py-3 px-4 border-b">
                      {product.category.name}
                    </td>
                    <td className="py-3 px-4 border-b">
                      <img
                        src={product.productImage}
                        alt={product.name}
                        className="w-16 h-16 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </td>
                    <td className="py-3 px-4 border-b">{product.stock}</td>
                    <td className="py-3 px-4 border-b space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDasBoard;
