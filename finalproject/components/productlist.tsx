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
  category: string;
};

type ProductsResponse = {
  products: Product[];
  total: number;
};

type ProductlistProps = {
  page: number;
  query: string;
  sort: string;
  minPrice: number;
  maxPrice: number;
  style: string;
};

const limit = 9;

const styleCategories: Record<string, string[]> = {
  Casual: [
    "mens-shirts",
    "womens-dresses",
    "tops",
    "mens-shoes",
    "womens-shoes",
  ],
  Formal: ["mens-shirts", "womens-dresses", "mens-watches", "womens-jewellery"],
  Party: ["womens-dresses", "womens-jewellery", "womens-bags", "fragrances"],
  Gym: ["sports-accessories", "mens-shoes", "womens-shoes"],
};

export default async function Productlist({
  page,
  query,
  sort,
  minPrice,
  maxPrice,
  style,
}: ProductlistProps) {
  "use cache";
  cacheLife("hours");

  try {
    const endpoint = query
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=0`
      : "https://dummyjson.com/products?limit=0";

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: ProductsResponse = await response.json();

    const filteredProducts = data.products.filter((item) => {
      const discountedPrice = Math.round(
        item.price * (1 - item.discountPercentage / 100),
      );

      const matchesPrice =
        discountedPrice >= minPrice && discountedPrice <= maxPrice;

      const matchesStyle =
        !style || styleCategories[style]?.includes(item.category);

      return matchesPrice && matchesStyle;
    });

    const sortFunctions: Record<string, (a: Product, b: Product) => number> = {
      popular: (a, b) => b.rating - a.rating,
      newest: (a, b) => b.id - a.id,
      "price-low": (a, b) => {
        const priceA = a.price * (1 - a.discountPercentage / 100);
        const priceB = b.price * (1 - b.discountPercentage / 100);
        return priceA - priceB;
      },
      "price-high": (a, b) => {
        const priceA = a.price * (1 - a.discountPercentage / 100);
        const priceB = b.price * (1 - b.discountPercentage / 100);
        return priceB - priceA;
      },
    };

    filteredProducts.sort(sortFunctions[sort] || sortFunctions.popular);

    const total = filteredProducts.length;
    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.min(page, Math.max(totalPages, 1));
    const skip = (currentPage - 1) * limit;
    const products = filteredProducts.slice(skip, skip + limit);

    const getPages = () => {
      if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages];
      }

      if (currentPage >= totalPages - 2) {
        return [1, "...", totalPages - 2, totalPages - 1, totalPages];
      }

      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    };

    const getPageUrl = (pageNumber: number) => {
      const params = new URLSearchParams();

      if (query) params.set("q", query);
      if (pageNumber > 1) params.set("page", String(pageNumber));
      if (sort !== "popular") params.set("sort", sort);
      if (minPrice > 0) params.set("minPrice", String(minPrice));
      if (maxPrice < 2000) params.set("maxPrice", String(maxPrice));
      if (style) params.set("style", style);

      return `/products?${params.toString()}`;
    };

    if (products.length === 0) {
      return (
        <div className="py-20 text-center">
          <p className="text-xl font-bold mb-2">No products found</p>
          <p className="text-gray-500">Try changing your filters.</p>
        </div>
      );
    }

    return (
      <>
        <div className="text-xs text-gray-500 mb-4">
          Showing {skip + 1}-{Math.min(skip + products.length, total)} of{" "}
          {total} Products
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {products.map((item) => {
            const discountedPrice = Math.round(
              item.price * (1 - item.discountPercentage / 100),
            );

            return (
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
                  <span className="font-bold text-xl">${discountedPrice}</span>

                  {item.discountPercentage > 0 && (
                    <>
                      <span className="text-gray-400 line-through text-lg">
                        ${item.price}
                      </span>

                      <span className="text-red-500 bg-red-100 rounded-full px-2 py-1 text-[10px]">
                        -{Math.round(item.discountPercentage)}%
                      </span>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="border-t border-gray-200 mt-10 pt-5 flex justify-between items-center text-sm">
            <Link
              href={getPageUrl(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={`border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-100 ${
                currentPage === 1 ? "pointer-events-none opacity-40" : ""
              }`}
            >
              ← Previous
            </Link>

            <div className="flex items-center gap-1 text-gray-500">
              {getPages().map((item, index) => (
                <Link
                  key={`${item}-${index}`}
                  href={typeof item === "number" ? getPageUrl(item) : "#"}
                  aria-disabled={item === "..."}
                  className={`px-3 py-2 rounded-lg ${
                    item === currentPage
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
              href={getPageUrl(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={`border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-100 ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-40"
                  : ""
              }`}
            >
              Next →
            </Link>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error("Product Error:", error);
    return <p>Failed to load products.</p>;
  }
}
