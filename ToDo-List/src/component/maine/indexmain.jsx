import React from "react";
import Card from "./card";

export default function Indexmain({ selectedCategory }) {
  return (
    <main className="flex-1 bg-[#f5f5f5] p-6">
      <Card selectedCategory={selectedCategory} />
    </main>
  );
}
