/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './routes/AppRoutes'
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="bg-gray-900 min-h-screen w-full">
      <AppRoutes cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App
