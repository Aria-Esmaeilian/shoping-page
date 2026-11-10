import CustomerReviews from "@/components/CustomerReviews";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

function ProductSkeleton() {
  return (
    <div className="w-full max-w-7xl grid grid-cols-4 gap-5 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="w-full min-w-0">
          <div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4" />
          <div className="h-5 w-4/5 bg-gray-200 rounded mb-3" />
          <div className="h-4 w-2/5 bg-gray-200 rounded mb-3" />
          <div className="h-6 w-1/2 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative w-full">
        <Image
          src="/Bg/homebg.png"
          alt="Home Background"
          width={1440}
          height={663}
          quality={100}
          priority
          className="w-full h-auto"
        />

        <div className="absolute top-30 right-25 pointer-events-none">
          <Image src="/icons/star.svg" alt="Star" width={104} height={104} />
        </div>

        <div className="absolute top-1/2 right-[45%] pointer-events-none">
          <Image src="/icons/star.svg" alt="Star" width={56} height={56} />
        </div>

        <div className="absolute top-1/2 left-20 -translate-y-1/2 max-w-xl">
          <h1 className="font-[heavyFont] text-[64px] leading-tight text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="text-gray-600 mt-6 text-base leading-7">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link href="/products">
            <button className="mt-8 bg-black text-white rounded-full px-16 py-4 hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer">
              Shop Now
            </button>
          </Link>

          <div className="flex items-center gap-6 mt-16 w-146">
            <div>
              <p className="font-bold text-[48px] w-39">200+</p>
              <p className="text-gray-600">International Brands</p>
            </div>

            <div className="h-20 w-px bg-gray-300"></div>

            <div>
              <p className="font-bold text-[48px] w-39">2,000+</p>
              <p className="text-gray-600">High-Quality Products</p>
            </div>

            <div className="h-20 w-px bg-gray-300"></div>

            <div>
              <p className="font-bold text-[48px]">30,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-31 bg-black w-full flex justify-between items-center px-20">
        <Link href="/products?q=Versace">
          <Image
            src="/Bg/versace.png"
            alt="Versace"
            width={156}
            height={36}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/products?q=Zara">
          <Image
            src="/Bg/zara.png"
            alt="Zara"
            width={91}
            height={38}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/products?q=Gucci">
          <Image
            src="/Bg/gucci.png"
            alt="Gucci"
            width={166}
            height={33}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/products?q=Prada">
          <Image
            src="/Bg/prada.png"
            alt="Prada"
            width={194}
            height={32}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <Link href="/products?q=Calvin+Klein">
          <Image
            src="/Bg/calvin.png"
            alt="Calvin Klein"
            width={206}
            height={33}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
      </section>

      <section className="w-full flex flex-col justify-between items-center">
        <h2 className="font-[heavyFont] mt-19 mb-15 text-[48px] cursor-default">
          NEW ARRIVALS
        </h2>

        <Suspense fallback={<ProductSkeleton />}>
          <ProductCard skip={0} />
        </Suspense>

        <Link
          href="/products"
          className="w-55 h-13 border border-gray-300 mb-15 mt-9 rounded-3xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-gray-50 active:translate-y-0 active:scale-95 cursor-pointer"
        >
          View All
        </Link>

        <div className="w-full max-w-7xl border-b border-gray-300"></div>
      </section>

      <section className="w-full flex flex-col justify-between items-center">
        <h2 className="font-[heavyFont] mt-19 mb-15 text-[48px] cursor-default">
          TOP SELLING
        </h2>

        <Suspense fallback={<ProductSkeleton />}>
          <ProductCard skip={4} />
        </Suspense>

        <Link
          href="/products"
          className="w-55 h-13 border border-gray-300 mb-25 mt-9 rounded-3xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-gray-50 active:translate-y-0 active:scale-95 cursor-pointer"
        >
          View All
        </Link>
      </section>

      <section className="w-full max-w-[1239px] mx-auto bg-[#F0F0F0] rounded-[40px] px-15 py-16 mb-20">
        <h2 className="font-[heavyFont] text-[40px] text-center mb-12 cursor-default">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-11 gap-5">
          <Link
            href="/products?style=Casual"
            className="group col-span-4 h-[258px] relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.97]"
          >
            <p className="absolute top-6 left-8 z-10 text-[32px] font-medium">
              Casual
            </p>
            <Image
              src="/Bg/casual.png"
              alt="Casual Style"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          <Link
            href="/products?style=Formal"
            className="group col-span-7 h-[258px] relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.97]"
          >
            <p className="absolute top-6 left-8 z-10 text-[32px] font-medium">
              Formal
            </p>
            <Image
              src="/Bg/formal.png"
              alt="Formal Style"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          <Link
            href="/products?style=Party"
            className="group col-span-7 h-[258px] relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.97]"
          >
            <p className="absolute top-6 left-8 z-10 text-[32px] font-medium">
              Party
            </p>
            <Image
              src="/Bg/party.png"
              alt="Party Style"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          <Link
            href="/products?style=Gym"
            className="group col-span-4 h-[258px] relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.97]"
          >
            <p className="absolute top-6 left-8 z-10 text-[32px] font-medium">
              Gym
            </p>
            <Image
              src="/Bg/gym.png"
              alt="Gym Style"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
      </section>

      <CustomerReviews />
    </>
  );
}
