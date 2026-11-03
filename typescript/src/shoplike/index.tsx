import { useLiked } from "./like";

export default function Index() {
  const {
    like,
    allProducts,
    addToWishlist,
    removeFromWashlist,
    washlist,
    clearAllWashlist,
    getWishlistCount,
    islike,
  } = useLiked();

  //   const like = liked((state) => state.like);
  //   const islike = liked((state) => state.islike);
  //   const allProducts = liked((state) => state.allProducts);
  //   const addToWishlist = liked((state) => state.addToWishlist);
  //   const removeFromWashlist = liked((state) => state.removeFromWashlist);
  //   const washlist = liked((state) => state.washlist);
  //   const clearAllWashlist = liked((state) => state.clearAllWashlist);
  //   const getWishlistCount = liked((state) => state.getWishlistCount);

  return (
    <div className="flex gap-8">
      <div className="flex  flex-col gap-8">
        <button
          className=" bg-red-400 hover:bg-red-500 active:bg-red-800 p-1 rounded-sm"
          onClick={islike}
        >
          Toggle Like
        </button>

        <p>{like ? "liked ❤️" : "not liked 🤍"}</p>
      </div>

      <div className="flex flex-col gap-8  border p-2">
        <div className="flex flex-row gap-8">
          {allProducts.map((item) => {
            return (
              <div className="flex flex-col items-center" key={item.id}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button
                  className=" bg-red-400 hover:bg-red-500 active:bg-red-800 p-1 rounded-sm"
                  onClick={() => addToWishlist(item)}
                >
                  Add to Wishlist
                </button>
              </div>
            );
          })}
        </div>
        <button
          className=" bg-red-400 hover:bg-red-500 active:bg-red-800 p-1 rounded-sm"
          onClick={clearAllWashlist}
        >
          Clear All
        </button>
      </div>
      <p className=" bg-red-400  h-min p-2 rounded-sm mr-14 font-bold">
        Products: {getWishlistCount()}
      </p>

      <div className="flex gap-8">
        {washlist.map((item) => {
          return (
            <div
              className="border p-2 flex flex-col items-center"
              key={item.id}
            >
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button
                className=" bg-red-400 hover:bg-red-500 active:bg-red-800 p-1 rounded-sm"
                onClick={() => removeFromWashlist(item.id)}
              >
                Remove From Wishlist
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
