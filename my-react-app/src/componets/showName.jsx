import { useState } from "react";

export default function Showname() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <h1>{name}</h1>}
      <input
        className="bg-amber-50 text-black p-2 m-4"
        type={show ? "text" : "password"}
        value={name}
        onChange={(item) => setName(item.target.value)}
      />
      <button
        className="border p-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}
