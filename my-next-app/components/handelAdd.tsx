"use client";

import { useState } from "react";
import { customers } from "@/app/costomers/costinfo";

export default function HandelAdd(itemee: number) {
  const [profile, setprofile] = useState([]);

  const newItem = customers.find((item) => item.id === itemee);
  if (newItem) {
    setprofile([...profile, newItem]);
  }
}
