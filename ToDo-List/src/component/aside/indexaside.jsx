import React from "react";

export default function Indexaside({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: "Home", color: "bg-red-300" },
    { name: "School", color: "bg-orange-300" },
    { name: "Shopping list", color: "bg-sky-300" },
  ];

  return (
    <aside className="min-h-screen w-64 shrink-0 border-r border-gray-100 bg-white px-6 py-8">
      <div className="mb-12 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
          T
        </div>
        <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
      </div>

      <div className="mb-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>

        <button
          onClick={() => setSelectedCategory("All")}
          className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${
            selectedCategory === "All"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <span className="text-lg">▦</span>
          All tasks
        </button>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Categories
        </p>

        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                selectedCategory === category.name
                  ? "bg-gray-100 font-semibold text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${category.color}`} />
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
