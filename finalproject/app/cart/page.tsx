"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, loaded } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.originalPrice * item.quantity,
    0,
  );

  const discount = cart.reduce(
    (total, item) => total + (item.originalPrice - item.price) * item.quantity,
    0,
  );

  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  if (!loaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-gray-500">Loading your cart...</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-[heavyFont] text-4xl">YOUR CART</h1>

        {cart.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 border border-red-200 hover:bg-red-50 rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <div className="border border-gray-200 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white rounded-full px-8 py-3 hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-5">
          <div className="border border-gray-200 rounded-3xl p-5 md:p-6">
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                >
                  <Link
                    href={`/product/${item.id}`}
                    className="relative size-28 md:size-32 shrink-0 rounded-2xl overflow-hidden bg-[#F0F0F0]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="128px"
                      className="object-contain p-2"
                    />
                  </Link>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          href={`/product/${item.id}`}
                          className="font-bold text-base md:text-lg line-clamp-2 hover:text-gray-500"
                        >
                          {item.title}
                        </Link>

                        <p className="text-sm mt-2">
                          Size:{" "}
                          <span className="text-gray-500">{item.size}</span>
                        </p>

                        <div className="flex items-center gap-2 text-sm mt-1">
                          <span>Color:</span>
                          <span
                            className="size-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id, item.size, item.color)
                        }
                        aria-label={`Remove ${item.title}`}
                        className="text-red-500 hover:text-red-700 text-xl self-start"
                      >
                        🗑
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-xl">${item.price}</span>

                        {item.discountPercentage > 0 && (
                          <>
                            <span className="text-gray-400 line-through">
                              ${item.originalPrice}
                            </span>
                            <span className="text-red-500 text-xs">
                              -{Math.round(item.discountPercentage)}%
                            </span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-4 bg-[#F0F0F0] rounded-full px-4 py-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity - 1,
                            )
                          }
                          className="text-lg"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span className="font-medium text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity + 1,
                            )
                          }
                          className="text-lg"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-3xl p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Discount</span>
              <span className="font-bold text-red-500">
                -${discount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mb-5">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-bold">${deliveryFee.toFixed(2)}</span>
            </div>

            <div className="border-t border-gray-200 pt-5 flex justify-between mb-6">
              <span className="text-lg font-medium">Total</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>

            <button
              type="button"
              className="w-full bg-black text-white rounded-full py-4 hover:bg-gray-800 transition"
            >
              Go to Checkout →
            </button>

            <Link
              href="/products"
              className="block text-center text-sm text-gray-500 hover:text-black mt-5"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
