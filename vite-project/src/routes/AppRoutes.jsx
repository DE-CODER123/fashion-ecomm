import { Children, lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
const Home = lazy(() => import("../pages/home/Home.jsx"));
const Shop = lazy(() => import("../pages/shop/Shop.jsx"));
const Contact = lazy(() => import("../pages/contact/Contact.jsx"));
import LazyLoader from "../components/lazyLoader/LazyLoader.jsx";
import ShopDetail from "../pages/shop/ShopDetail.jsx";
import Cart from "../pages/cart/Cart.jsx";

export default function AppRoutes({ cartItems, setCartItems }) {
    
  const routes = [
    {
      index: true,
      element: (
        <Suspense fallback={<LazyLoader />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/shop",
      element: (
        <Suspense fallback={<LazyLoader />}>
          <Shop cartItems={cartItems} setCartItems={setCartItems}/>
        </Suspense>
      ),
    },
    {
  path: "/shop/:id",
  element: (
    <Suspense fallback={<LazyLoader />}>
      <ShopDetail cartItems={cartItems} setCartItems={setCartItems}/>
    </Suspense>
  ),
},
    {
      path: "/contact",
      element: (
        <Suspense fallback={<LazyLoader />}>
          <Contact />
        </Suspense>
      ),
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<LazyLoader />}>
          <Cart cartItems={cartItems} />
        </Suspense>
      ),
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
