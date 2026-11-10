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

type FiltersProps = {
  minPrice: number;
  maxPrice: number;
  query: string;
  sort: string;
  style: string;
};

export default function Filters({
  minPrice,
  maxPrice,
  query,
  sort,
  style,
}: FiltersProps) {
  const [selectedColor, setSelectedColor] = useState("#063AF5");
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <form
      action="/products"
      method="GET"
      className="w-[295px] shrink-0 border border-gray-200 rounded-3xl p-5"
    >
      <input type="hidden" name="q" value={query} />
      <input type="hidden" name="sort" value={sort} />
      <input type="hidden" name="page" value="1" />

      <div className="flex justify-between items-center pb-5 border-b border-gray-200">
        <h2 className="font-bold text-xl">Filters</h2>
        <span className="text-gray-500 text-xl">☷</span>
      </div>

      <details open className="py-5 border-b border-gray-200">
        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
          Price
          <span>⌃</span>
        </summary>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <label className="text-xs text-gray-500">
            Minimum
            <input
              type="number"
              name="minPrice"
              min="0"
              max="2000"
              defaultValue={minPrice}
              className="w-full border border-gray-200 rounded-lg p-2 mt-2 text-black outline-none"
            />
          </label>

          <label className="text-xs text-gray-500">
            Maximum
            <input
              type="number"
              name="maxPrice"
              min="0"
              max="2000"
              defaultValue={maxPrice}
              className="w-full border border-gray-200 rounded-lg p-2 mt-2 text-black outline-none"
            />
          </label>
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
          {["Casual", "Formal", "Party", "Gym"].map((item) => (
            <button
              key={item}
              type="submit"
              name="style"
              value={item}
              formAction="/products"
              className={`flex justify-between cursor-pointer hover:text-black ${
                style === item ? "text-black font-bold" : ""
              }`}
            >
              {item}
              <span>›</span>
            </button>
          ))}
        </div>
      </details>

      <button
        type="submit"
        name="style"
        value={style}
        className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition cursor-pointer"
      >
        Apply Filter
      </button>
    </form>
  );
}
