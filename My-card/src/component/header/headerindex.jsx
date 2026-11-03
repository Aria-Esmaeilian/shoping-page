import React from "react";
import Maingeader from "./maingeader";

export default function Headerindex() {
  return (
    <div className="h-20 shadow-lg flex mb-3 items-center justify-between px-10 bg-amber-50">
      <Maingeader name="ARIA Website" lable="Choose your theme" about="About" />
    </div>
  );
}
