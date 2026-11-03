"use client";

import { useState } from "react";

type mamamia = boolean;

export default function LikeButton() {
  const [like, setlike] = useState<mamamia>(false);

  return (
    <button
      className="bg-amber-950 rounded-sm py-2 px-4 active:bg-amber-800 mt-4"
      onClick={() => setlike(!like)}
    >
      {like ? "Liked ❤️" : "Like 🤍"}
    </button>
  );
}
