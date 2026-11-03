"use client";

import { useState } from "react";
import { customers } from "../costomers/costinfo";
import Product from "@/components/Product";
import HandelAdd from "@/components/handelAdd";

export default function AddToCartButton() {
  const [count, setcount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setcount(count + 1)}
        className="bg-amber-950 rounded-sm py-2 px-4 active:bg-amber-800 mt-4"
      >
        add to {count}
      </button>
      <div className="flex gap-8 p-2 my-4">
        {customers.map((item) => (
          <div key={item.id}>
            <Product id={item.id} title={item.title} price={item.price} />
            <button onClick={() => HandelAdd(item.id)}>Add To Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}
