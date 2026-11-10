import Image from "next/image";
import { cacheLife } from "next/cache";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  discountPercentage: number;
  images: string[];
};

type ProductsResponse = {
  products: Product[];
};

type ProductCardProps = {
  skip: number;
};

export default async function ProductCard({ skip }: ProductCardProps) {
  "use cache";
  cacheLife("hours");

  try {
    const get = await fetch(
      `https://dummyjson.com/products?limit=4&skip=${skip}`,
    );

    if (!get.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: ProductsResponse = await get.json();

    const oldPrice = (price: number, discount: number) => {
      return Math.round(price / (1 - discount / 100));
    };

    return (
      <div className="flex flex-wrap gap-5">
        {data.products.map((item) => (
          <div
            key={item.id}
            className="w-74 rounded-3xl cursor-pointer p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="w-full h-[296px] rounded-3xl bg-[#F0F0F0] overflow-hidden">
              <Image
                src={item.images[0]}
                alt={item.title}
                width={296}
                height={296}
                className="w-full h-full object-contain rounded-3xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="font-bold mt-5 mb-3 text-[20px] truncate">
              {item.title}
            </p>

            <div className="flex items-center gap-1 mb-3">
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

              <span className="text-sm ml-1">{item.rating.toFixed(1)}/5</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[20px] font-bold">${item.price}</span>

              {item.discountPercentage > 0 && (
                <>
                  <span className="text-[20px] font-bold text-gray-400 line-through">
                    ${oldPrice(item.price, item.discountPercentage)}
                  </span>

                  <span className="text-red-500 bg-red-100 rounded-full px-3 py-1 text-xs">
                    -{Math.round(item.discountPercentage)}%
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Product Error:", error);

    return <p>Failed to load products. Please try again later.</p>;
  }
}
