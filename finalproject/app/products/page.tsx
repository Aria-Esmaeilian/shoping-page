import Productlist from "@/components/productlist";
import Filters from "./Filters";
import Link from "next/link";
import { Suspense } from "react";
import SortSelect from "@/components/SortSelect";

type ProductsPageProps = {
  searchParams: Promise<{
    page?: string;
    q?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
    style?: string;
  }>;
};

async function ProductsContent({ searchParams }: ProductsPageProps) {
  const {
    page,
    q,
    sort,
    minPrice: minPriceParam,
    maxPrice: maxPriceParam,
    style,
  } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);
  const query = q?.trim() || "";
  const currentSort = sort || "popular";
  const minPrice = Math.max(0, Number(minPriceParam) || 0);
  const maxPrice = Math.min(2000, Number(maxPriceParam) || 2000);
  const currentStyle = style || "";

  return (
    <main className="w-full max-w-[1240px] mx-auto px-4 pb-20">
      <div className="border-t border-gray-200 py-5 text-sm text-gray-500 flex items-center gap-3">
        <Link href="/">Home</Link>
        <span>›</span>
        <span className="text-black">
          {query ? "Search Results" : "Casual"}
        </span>
      </div>

      <div className="flex gap-5 items-start">
        <Filters
          minPrice={minPrice}
          maxPrice={maxPrice}
          query={query}
          sort={currentSort}
          style={currentStyle}
        />

        <section className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
            <h1 className="font-[heavyFont] text-3xl">
              {query ? `Results for ${query}` : "Casual"}
            </h1>

            <SortSelect
              currentSort={currentSort}
              query={query}
              minPrice={minPrice}
              maxPrice={maxPrice}
              style={currentStyle}
            />
          </div>

          <Productlist
            page={currentPage}
            query={query}
            sort={currentSort}
            minPrice={minPrice}
            maxPrice={maxPrice}
            style={currentStyle}
          />
        </section>
      </div>
    </main>
  );
}

function ProductsSkeleton() {
  return (
    <main className="w-full max-w-[1240px] mx-auto px-4 pb-20">
      <div className="border-t border-gray-200 py-5 h-[61px]" />

      <div className="flex gap-5 items-start">
        <div className="w-[295px] shrink-0 h-[700px] rounded-2xl border border-gray-200 p-5 animate-pulse">
          <div className="h-6 w-28 bg-gray-200 rounded mb-8" />
          <div className="h-4 w-20 bg-gray-200 rounded mb-5" />
          <div className="h-2 w-full bg-gray-200 rounded mb-8" />
          <div className="h-4 w-24 bg-gray-200 rounded mb-5" />
          <div className="flex flex-wrap gap-3 mb-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-200" />
            ))}
          </div>
          <div className="h-4 w-20 bg-gray-200 rounded mb-5" />
          <div className="flex flex-wrap gap-2 mb-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-9 w-16 rounded-full bg-gray-200" />
            ))}
          </div>
          <div className="h-4 w-28 bg-gray-200 rounded mb-5" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 w-32 bg-gray-200 rounded" />
            ))}
          </div>
        </div>

        <section className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-5 animate-pulse">
            <div className="h-9 w-40 bg-gray-200 rounded" />
            <div className="h-10 w-36 bg-gray-200 rounded-full" />
          </div>

          <div className="grid grid-cols-3 gap-x-5 gap-y-9 min-h-[700px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="animate-pulse min-w-0">
                <div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4" />
                <div className="h-5 w-4/5 bg-gray-200 rounded mb-3" />
                <div className="h-4 w-2/5 bg-gray-200 rounded mb-3" />
                <div className="h-6 w-1/2 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default function Productslist({ searchParams }: ProductsPageProps) {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ProductsContent searchParams={searchParams} />
    </Suspense>
  );
}
