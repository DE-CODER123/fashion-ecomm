import React from "react";

export default function LazyLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-1 bg-gray-900">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <h1 className="text-2xl font-bold text-white">Logo</h1>
    </div>
  );
}
