import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/Index';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useNavigate } from 'react-router';

export default function Cart
({ cartItems }) {

  const navigate = useNavigate()
  return (

    <>
    <NavBar/>
    {cartItems.length > 0 ? (
      <>
      <h2 className="text-center text-white font-bold text-2xl">
      Cart
     </h2>
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
    {cartItems.map((item) => (
     <> 
      <div key={item.id} className="shadow-white rounded-2xl  bg-gray-800">
      <div>
              <img
                src={item.image}
                className="mx-auto h-24 pt-2"
                alt={item.title}
              />
              <h3 className="text-white text-center text-sm p-4">
                {item.title}
              </h3>
              </div>
              <div>
     <p>
                <span className="text-2xl text-white font-bold px-4">
                  ${item.price}
                </span>
                <span className="text-sm text-gray-400 line-through px-2">
                  ${(item.price * 1.2).toFixed(2)}
                </span>
              </p>
</div>
      </div>
      </>
    ))}
  </div>
  <div className="flex justify-end px-4 py-4">
      <span className="text-white text-xl font-bold">
        Total: $
        {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </span>
    </div>
  </>
) : (
  <div className="flex justify-center flex-col gap-8 p-24">
  <p className="text-red-500 text-xl md:text-4xl font-bold text-center">No product available</p>
  <button className="text-white text-lg md:text-2xl font-bold outline bg-gray-500 hover:bg-gray-700 lg:w-64" onClick={() => navigate("/shop")}>
    Back to shop
  </button>
  </div>
)}

    </>
  )
}
