"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

type Props = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
};

const colors = [
  { name: "Olive", value: "#554B35" },
  { name: "Green", value: "#31534F" },
  { name: "Navy", value: "#30314F" },
];

const sizes = ["Small", "Medium", "Large", "X-Large"];

export default function ProductActions({
  id,
  title,
  price,
  originalPrice,
  discountPercentage,
  image,
}: Props) {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      originalPrice,
      discountPercentage,
      image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    setAdded(true);
  };

  return (
    <>
      <div className="py-5 border-b border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Select Colors</p>

        <div className="flex items-center gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              type="button"
              onClick={() => {
                setSelectedColor(color.value);
                setAdded(false);
              }}
              aria-label={color.name}
              style={{ backgroundColor: color.value }}
              className={`size-8 rounded-full flex items-center justify-center text-white ${
                selectedColor === color.value
                  ? "ring-2 ring-black ring-offset-2"
                  : ""
              }`}
            >
              {selectedColor === color.value && "✓"}
            </button>
          ))}
        </div>
      </div>

      <div className="py-5 border-b border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Choose Size</p>

        <div className="flex items-center gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => {
                setSelectedSize(size);
                setAdded(false);
              }}
              className={`rounded-full px-5 py-3 text-sm transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-gray-500 hover:bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-5">
        <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-5 py-3 w-[140px] shrink-0">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="text-xl"
          >
            −
          </button>

          <span className="text-sm">{quantity}</span>

          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="text-xl"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 bg-black text-white rounded-full py-3 text-sm hover:bg-gray-800 transition"
        >
          {added ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}
