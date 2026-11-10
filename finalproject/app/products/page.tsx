import Productlist from "@/components/productlist";
import Filters from "./Filters";
import Link from "next/link";

export default async function Productslist({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  return (
    <main className="w-full max-w-[1240px] mx-auto px-4 pb-20">
      <div className="border-t border-gray-200 py-5 text-sm text-gray-500 flex items-center gap-3">
        <Link href="/">
          <span>Home</span>
        </Link>
        <span>›</span>
        <span className="text-black">Casual</span>
      </div>

      <div className="flex gap-5 items-start">
        <Filters />

        <section className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
            <h1 className="font-[heavyFont] text-3xl cursor-default">Casual</h1>
            <label className="flex items-center gap-1 text-xs text-gray-500">
              Sort by:
              <select className="text-black outline-none cursor-pointer bg-white">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </label>
          </div>

          <Productlist page={currentPage} />
        </section>
      </div>
    </main>
  );
}
