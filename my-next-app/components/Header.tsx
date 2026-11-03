import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex gap-4 py-4 px-6 bg-black">
        <Link
          className="bg-amber-950 rounded-sm py-2 px-4 active:bg-amber-800"
          href="/about"
        >
          About
        </Link>
        <Link
          className="bg-amber-950 rounded-sm py-2 px-4 active:bg-amber-800"
          href="/pruduct"
        >
          product
        </Link>
      </div>
    </header>
  );
}
