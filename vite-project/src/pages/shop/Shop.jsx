import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/Index";
import Footer from "../../components/Footer";
import { Link } from "react-router";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <>
      <NavBar />
      <h2 className="flex justify-center items-center text-2xl md:text-4xl text-white font-bold">
        Shop at FashionX
      </h2>
      {loading ? (
        <div className="flex pt-8 items-center justify-center gap-1">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <h1 className="text-2xl font-bold text-white">Loading...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="shadow-white rounded-2xl py-2 bg-gray-800"
            >
              <img src={product.image} className="mx-auto h-40" />
              <h3 className="text-white text-center text-lg font-semibold p-4">
                {product.title}
              </h3>
              <div className="flex justify-between items-center px-4">
                <div>
                  <p>
                    <span className="text-2xl text-white font-bold px-4">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-700 transition mt-4 mx-4">
                  Add to Cart
                </button>
              </div>
              <Link  to={`/shop/${product.id}`} className="flex justify-center items-center text-lg pt-2 text-sky-500 hover:text-sky-700 hover:text-2xl underline cursor-pointer">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
