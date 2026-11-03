import React from "react";

export default function Line({ email, addres, reait }) {
  return (
    <div className=" w-full text-l font-bold flex flex-row justify-evenly pr-20">
      <p>email = {email}</p>
      <p>Address = {addres}</p>
      <p>rate = {reait}</p>
    </div>
  );
}
