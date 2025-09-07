import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/Index";
import ModelLayout from "../../layout/ModelLayout";
import { Link } from "react-router";
import { RiCopyrightFill } from "@remixicon/react";
import Footer from "../../components/Footer";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <section className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-400">
        <div className="md:w-1/2 space-y-6 max-h-full">
          <h2 className="text-4xl text-white font-extrabold leading-tight">
            Unleash Your Style
            <br />
            with FashionX
          </h2>
          <p className="text-lg text-stone-100">
            Trendy. Elegant. Bold. Redefine your home with the latest
            collections.
          </p>
          <Link
            to="/shop"
            className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <ModelLayout />
        </div>
      </section>
      <h2 className="text-2xl md:text-4xl text-white font-extrabold leading-tight text-center my-8">
        Featured Collections
      </h2>
      {loading ? (
         <div className="flex items-center justify-center  gap-1">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <h1 className="text-2xl font-bold text-white">Loading...</h1>
    </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="shadow-white rounded-2xl py-4 bg-gray-800"
            >
              <img
                src={product.image}
                className="mx-auto h-40"
                alt={product.title}
              />
              <h3 className="text-white text-center text-lg font-semibold p-4">
                {product.title}
              </h3>
              <p>
                <span className="text-2xl text-white font-bold px-4">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400 line-through px-2">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
