
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import NavBar from '../../components/navbar/Index';
import Footer from '../../components/Footer';

export default function ShopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError('Product not found.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[60vh] py-8">
        <button
          onClick={() => navigate("/shop")}
          className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          &larr; Back
        </button>
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-2 py-12">
            <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <h1 className="text-2xl font-bold text-white">Loading...</h1>
          </div>
        ) : error ? (
          <div className="text-red-400 text-xl font-semibold py-8">{error}</div>
        ) : product ? (
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
            <img src={product.image} alt={product.title} className="h-64 w-64 object-contain rounded mb-6 md:mb-0 md:mr-8 bg-white p-4" />
            <div className="flex-1">
              <h2 className="text-3xl text-white font-bold mb-4">{product.title}</h2>
              <p className="text-stone-200 mb-4">{product.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl text-white font-bold">${product.price}</span>
                <span className="text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
              </div>
              <button className="bg-gray-500 text-white px-6 py-3 rounded w-full hover:bg-gray-700 transition mt-2">
                Add to Cart
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <Footer/>
    </>
  );
}

