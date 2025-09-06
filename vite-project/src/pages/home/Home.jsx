import React from "react";
import NavBar from "../../components/navbar/Index";
import ModelLayout from "../../layout/ModelLayout";
import { Link } from "react-router";
import { RiCopyrightFill } from "@remixicon/react";
export default function Home() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-900">
        <div class="md:w-1/2 space-y-6 max-h-full">
          <h2 class="text-4xl text-white font-extrabold leading-tight">
            Unleash Your Style
            <br />
            with FashionX
          </h2>
          <p class="text-lg text-stone-100">
            Trendy. Elegant. Bold. Redefine your wardrobe with the latest
            collections.
          </p>
          <Link to="/shop" class="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <ModelLayout />
        </div>
      </section>
      <section className="bg-gray-900 px-4">
        <div className="container  py-5 px-4">
          <div className="flex gap-1 items-center text-white">
            <RiCopyrightFill size={18} />
            <span className="text-sm">
              {new Date().getFullYear()} Clinicare. All rights reserved.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
