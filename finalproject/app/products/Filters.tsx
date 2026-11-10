"use client";

import { useState } from "react";

const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

export default function Filters() {
  const [selectedColor, setSelectedColor] = useState("#063AF5");
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <aside className="w-[295px] shrink-0 border border-gray-200 rounded-3xl p-5">
      <div className="flex justify-between items-center pb-5 border-b border-gray-200">
        <h2 className="font-bold text-xl">Filters</h2>
        <span className="text-gray-500 text-xl">☷</span>
      </div>

      <details open className="py-5 border-b border-gray-200">
        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
          Price
          <span>⌃</span>
        </summary>

        <div className="mt-6">
          <input
            type="range"
            min="50"
            max="200"
            defaultValue="150"
            className="w-full accent-black cursor-pointer"
          />

          <div className="flex justify-between mt-3 text-sm font-medium">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>
      </details>

      <details open className="py-5 border-b border-gray-200">
        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
          Colors
          <span>⌃</span>
        </summary>

        <div className="grid grid-cols-5 gap-4 mt-5">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              aria-label={`Select ${color}`}
              className={`size-9 rounded-full border border-black/10 flex items-center justify-center cursor-pointer transition ${
                selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""
              }`}
            >
              {selectedColor === color && (
                <span
                  className={
                    color === "#FFFFFF" || color === "#F5DD06"
                      ? "text-black"
                      : "text-white"
                  }
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </details>

      <details open className="py-5 border-b border-gray-200">
        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
          Size
          <span>⌃</span>
        </summary>

        <div className="flex flex-wrap gap-2 mt-5">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full text-sm cursor-pointer transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-gray-500 hover:bg-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </details>

      <details open className="py-5">
        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
          Dress Style
          <span>⌃</span>
        </summary>

        <div className="flex flex-col gap-4 mt-5 text-sm text-gray-500">
          <p className="flex justify-between cursor-pointer">
            Casual <span>›</span>
          </p>
          <p className="flex justify-between cursor-pointer">
            Formal <span>›</span>
          </p>
          <p className="flex justify-between cursor-pointer">
            Party <span>›</span>
          </p>
          <p className="flex justify-between cursor-pointer">
            Gym <span>›</span>
          </p>
        </div>
      </details>

      <button
        type="button"
        className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition cursor-pointer"
      >
        Apply Filter
      </button>
    </aside>
  );
}
