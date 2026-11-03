import { useLike } from "./useLike";

function Counter() {
  const count = useLike((state) => state.count);
  const increase = useLike((state) => state.increase);

  return (
    <div className="flex gap-4">
      <button
        onClick={increase}
        className=" bg-red-400 hover:bg-red-500 active:bg-red-800 p-1 rounded-sm"
      >
        Clik
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
