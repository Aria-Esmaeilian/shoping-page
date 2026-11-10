import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  category: string;
  brand?: string;
  stock: number;
  reviews?: {
    rating: number;
    comment: string;
    reviewerName: string;
  }[];
};

async function getProduct(id: number): Promise<Product | null> {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId < 1) {
    notFound();
  }

  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  const discountedPrice = Math.round(
    product.price * (1 - product.discountPercentage / 100),
  );

  const productImages = product.images?.length
    ? product.images.slice(0, 3)
    : [product.thumbnail];

  return (
    <main className="w-full max-w-[1240px] mx-auto px-4 pb-20">
      <div className="border-t border-gray-200 py-5 text-sm text-gray-500 flex items-center gap-3">
        <Link href="/">
          <span>Home</span>
        </Link>
        <span>›</span>
        <Link href="/products">
          <span>Shop</span>
        </Link>
        <span>›</span>
        <Link href="/products">
          <span className="capitalize">{product.category}</span>
        </Link>
        <span>›</span>
        <span className="text-black cursor-pointer">{product.title}</span>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <ProductGallery images={productImages} title={product.title} />

        <div className="flex flex-col min-w-0">
          <h1 className="font-[heavyFont] text-3xl sm:text-4xl uppercase leading-tight mb-3">
            {product.title}
          </h1>

          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-2xl ${
                  index < Math.round(product.rating)
                    ? "text-[#FFC633]"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}

            <span className="text-sm text-gray-600 ml-2">
              {product.rating.toFixed(1)}/5
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="font-bold text-3xl">${discountedPrice}</span>

            {product.discountPercentage > 0 && (
              <>
                <span className="text-gray-400 line-through text-2xl font-bold">
                  ${product.price}
                </span>

                <span className="text-red-500 bg-red-100 rounded-full px-3 py-1 text-sm">
                  -{Math.round(product.discountPercentage)}%
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 leading-6 pb-5 border-b border-gray-200">
            {product.description}
          </p>

          <ProductActions
            id={product.id}
            title={product.title}
            price={discountedPrice}
            originalPrice={product.price}
            discountPercentage={product.discountPercentage}
            image={productImages[0]}
          />

          <div className="border-t border-gray-200 mt-5 py-5 flex flex-col gap-3 text-sm">
            <p>
              <span className="text-gray-500">Category: </span>
              {product.category}
            </p>

            <p>
              <span className="text-gray-500">Brand: </span>
              {product.brand || "Unknown"}
            </p>

            <p>
              <span className="text-gray-500">Available Stock: </span>
              {product.stock}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="grid grid-cols-3 border-b border-gray-200">
          <div className="text-center py-4 text-sm sm:text-base text-gray-500">
            Product Details
          </div>

          <div className="text-center py-4 text-sm sm:text-base text-black border-b-2 border-black">
            Rating & Reviews
          </div>

          <div className="text-center py-4 text-sm sm:text-base text-gray-500">
            FAQs
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mt-5 flex-wrap">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg sm:text-xl">All Reviews</h2>

            <span className="text-xs text-gray-500">
              ({product.reviews?.length ?? 0})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="size-10 rounded-full bg-[#F0F0F0] flex items-center justify-center"
            >
              <span className="text-xl">☷</span>
            </button>

            <button
              type="button"
              className="rounded-full bg-[#F0F0F0] px-5 py-3 text-xs"
            >
              Latest ﹀
            </button>

            <button
              type="button"
              className="rounded-full bg-black text-white px-6 py-3 text-xs"
            >
              Write a Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {product.reviews?.slice(0, 4).map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={
                      starIndex < review.rating
                        ? "text-[#FFC633]"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="font-bold mb-2">{review.reviewerName}</p>

              <p className="text-sm text-gray-500 leading-6">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
