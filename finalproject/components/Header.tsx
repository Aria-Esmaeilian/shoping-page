"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <div className="w-full h-28 bg-white text-black flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 h-12 flex items-center justify-between gap-6">
        <Link href="/">
          <p className="shrink-0 font-[heavyFont] text-3xl leading-none">
            SHOP.CO
          </p>
        </Link>

        <div className="flex shrink-0 text-base gap-5">
          <Link href="/products">
            <button className="hover:text-gray-400 transition-colors duration-200 cursor-pointer">
              Shop
            </button>
          </Link>

          <Link href="/products">
            <button className="hover:text-gray-400 transition-colors duration-200 cursor-pointer">
              On Sale
            </button>
          </Link>

          <Link href="/products">
            <button className="hover:text-gray-400 transition-colors duration-200 cursor-pointer">
              New Arrivals
            </button>
          </Link>

          <Link href="/products">
            <button className="hover:text-gray-400 transition-colors duration-200 cursor-pointer">
              Brands
            </button>
          </Link>
        </div>

        <form
          action="/products"
          method="GET"
          className="flex items-center gap-3 flex-1 max-w-xl relative"
        >
          <Image
            src="/icons/search.svg"
            alt="Search"
            width={24}
            height={24}
            className="size-6 absolute left-3 pointer-events-none"
          />

          <input
            type="search"
            name="q"
            placeholder="Search for products"
            className="w-full h-12 px-12 bg-gray-100 rounded-full outline-none focus:bg-white focus:ring-2 focus:ring-gray-200 transition-all duration-200"
          />

          <button type="submit" className="hidden">
            Search
          </button>
        </form>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/cart"
            aria-label={`Shopping cart with ${totalItems} items`}
            className="relative"
          >
            <Image
              src="/icons/card.svg"
              alt="Cart"
              width={24}
              height={24}
              className="size-6 cursor-pointer hover:scale-110 transition-transform duration-200"
            />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          <Image
            src="/icons/user.svg"
            alt="User"
            width={24}
            height={24}
            className="size-6 cursor-pointer hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
}
