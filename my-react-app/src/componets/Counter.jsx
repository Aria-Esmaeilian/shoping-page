import { useState, useEffect } from "react";

export default function Conter() {
  const [age, setage] = useState(20);

  return (
    <div className="m-10 border border-amber-400 p-10 flex flex-col items-center justify-center">
      <h1 className="font-bold text-center text-2xl">{age}</h1>
      <div className="mt-10">
        <button
          className="w-10 h-10 bg-amber-200 mr-4 border border-amber-300 rounded-lg text-black text-2xl"
          onClick={() => {
            setage(age + 1);
          }}
        >
          +
        </button>
        <button
          className="w-10 h-10  bg-amber-200 mr-4 border border-amber-300 rounded-lg text-black "
          onClick={() => {
            setage(20);
          }}
        >
          Reset
        </button>
        <button
          className="w-10 h-10  bg-amber-200 mr-4 border border-amber-300 rounded-lg text-black text-2xl"
          onClick={() => {
            setage(age - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
