import React from "react";
import { RiCopyrightFill } from "@remixicon/react";

export default function Footer() {
  return (
    <section className="bg-gray-900 px-4">
      <div className="container py-5 px-4">
        <div className="flex gap-1 items-center text-white">
          <RiCopyrightFill size={18} />
          <span className="text-sm">
            {new Date().getFullYear()} FashionX. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
