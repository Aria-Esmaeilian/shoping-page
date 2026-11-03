import React from "react";
import { Link } from "react-router-dom";

export default function Btn() {
  return (
    <Link
      to="/artc"
      className="mt-10 border w-40 p-2 flex items-center justify-center rounded-2xl cursor-pointer bg-amber-100"
    >
      Go to the article
    </Link>
  );
}
