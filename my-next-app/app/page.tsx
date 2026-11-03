import LikeButton from "./LikeButton/page";
import AddToCartButton from "./productslist/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-2xl">welcome to my next js</h1>
      <AddToCartButton />
      <LikeButton />
    </div>
  );
}
