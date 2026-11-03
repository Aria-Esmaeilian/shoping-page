import React from "react";
import { Link } from "react-router-dom";

export default function Maingeader({ name, lable, about }) {
  return (
    <>
      <div className="flex items-center gap-8">
        <Link to="/" className="group">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
              <span className="text-white text-xl font-black">A</span>
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wider text-gray-900 group-hover:text-amber-500 transition duration-300">
                ARIA
              </h1>

              <p className="text-[10px] font-bold tracking-[0.35em] text-gray-500">
                WEBSITE
              </p>
            </div>
          </div>
        </Link>

        <a className="px-6 cursor-pointer font-medium text-gray-700 hover:text-amber-500 transition duration-300">
          {lable}
        </a>
      </div>

      <div>
        <Link
          to="/about"
          className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-amber-500 hover:scale-105 transition duration-300"
        >
          {about}
        </Link>
      </div>
    </>
  );
}
