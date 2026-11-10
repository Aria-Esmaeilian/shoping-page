import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
};

type ProductsResponse = {
  products: Product[];
  total: number;
};

type ProductlistProps = {
  page: number;
};

const limit = 9;

export default async function Productlist({ page }: ProductlistProps) {
  "use cache";
  cacheLife("hours");

  const skip = (page - 1) * limit;

  try {
    const get = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );

    if (!get.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: ProductsResponse = await get.json();

    const totalPages = Math.ceil(data.total / limit);

    const oldPrice = (price: number, discount: number) => {
      return Math.round(price / (1 - discount / 100));
    };

    const getPages = () => {
      if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      if (page <= 3) {
        return [1, 2, 3, "...", totalPages];
      }

      if (page >= totalPages - 2) {
        return [1, "...", totalPages - 2, totalPages - 1, totalPages];
      }

      return [1, "...", page - 1, page, page + 1, "...", totalPages];
    };

    return (
      <>
        <div className="text-xs text-gray-500 mb-4">
          Showing {skip + 1}-{Math.min(skip + data.products.length, data.total)}{" "}
          of {data.total} Products
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {data.products.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="block min-w-0 cursor-pointer group rounded-3xl p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F0EEED] transition-all duration-300">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="font-bold text-base mt-3 mb-2 truncate">
                {item.title}
              </p>

              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-xl ${
                      index < Math.round(item.rating)
                        ? "text-[#FFC633]"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}

                <span className="text-xs text-gray-500 ml-1">
                  {item.rating.toFixed(1)}/5
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-xl">${item.price}</span>

                {item.discountPercentage > 0 && (
                  <>
                    <span className="text-gray-400 line-through text-lg">
                      ${oldPrice(item.price, item.discountPercentage)}
                    </span>

                    <span className="text-red-500 bg-red-100 rounded-full px-2 py-1 text-[10px]">
                      -{Math.round(item.discountPercentage)}%
                    </span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-10 pt-5 flex justify-between items-center text-sm">
          <Link
            href={`/products?page=${page - 1}`}
            aria-disabled={page === 1}
            className={`border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-100 ${
              page === 1 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            ← Previous
          </Link>

          <div className="flex items-center gap-1 text-gray-500">
            {getPages().map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href={typeof item === "number" ? `/products?page=${item}` : "#"}
                aria-disabled={item === "..."}
                className={`px-3 py-2 rounded-lg ${
                  item === page
                    ? "bg-gray-100 text-black"
                    : item === "..."
                      ? "pointer-events-none"
                      : "hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <Link
            href={`/products?page=${page + 1}`}
            aria-disabled={page === totalPages}
            className={`border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-100 ${
              page === totalPages ? "pointer-events-none opacity-40" : ""
            }`}
          >
            Next →
          </Link>
        </div>
      </>
    );
  } catch (error) {
    console.error("Product Error:", error);

    return <p>Failed to load products.</p>;
  }
}
