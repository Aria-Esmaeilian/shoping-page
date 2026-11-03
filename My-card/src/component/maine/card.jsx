import React from "react";
import Btn from "./btn";
import img from "../../assets/422070.jpg";

export default function Card() {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={img}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-2 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-600">
            ARTICLE
          </span>

          <span className="text-sm text-gray-400">5 min read</span>
        </div>

        <h2 className="mb-3 text-2xl font-black text-gray-900 transition duration-300 group-hover:text-amber-500">
          Batman
        </h2>

        <p className="mb-6 line-clamp-3 leading-7 text-gray-500">
          Batman was born in 1983, and in this article, I want to share some
          interesting information about him with you.
        </p>

        <Btn />
      </div>
    </div>
  );
}
