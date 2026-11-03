import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1>This is Product Page</h1>
      <Link
        className="bg-amber-950 rounded-sm py-2 px-4 active:bg-amber-800 mt-4"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
