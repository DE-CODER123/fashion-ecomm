import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
const Home = lazy(() => import("../pages/home/Home.jsx"));
const Shop = lazy(() => import("../pages/shop/Shop.jsx"));
const Contact = lazy(() => import("../pages/contact/Contact.jsx"));
import LazyLoader from "../components/lazyLoader/LazyLoader.jsx";

export default function AppRoutes() {
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
          <Shop />
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
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
