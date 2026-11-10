"use client";

type SortSelectProps = {
  currentSort: string;
  query: string;
  minPrice: number;
  maxPrice: number;
  style: string;
};

export default function SortSelect({
  currentSort,
  query,
  minPrice,
  maxPrice,
  style,
}: SortSelectProps) {
  return (
    <form
      action="/products"
      method="GET"
      className="flex items-center gap-2 text-xs text-gray-500"
    >
      {query && <input type="hidden" name="q" value={query} />}

      <input type="hidden" name="page" value="1" />

      {minPrice > 0 && <input type="hidden" name="minPrice" value={minPrice} />}

      {maxPrice < 2000 && (
        <input type="hidden" name="maxPrice" value={maxPrice} />
      )}

      {style && <input type="hidden" name="style" value={style} />}

      <label htmlFor="sort">Sort by:</label>

      <select
        id="sort"
        name="sort"
        value={currentSort}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="text-black outline-none cursor-pointer bg-white"
      >
        <option value="popular">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </form>
  );
}
