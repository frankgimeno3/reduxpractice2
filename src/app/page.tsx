"use client"


import { useSelector } from "react-redux";
import { RootState } from "../redux/store";  

import Image from "next/image";
import Componentone from "./componentone/Componentone";
import Componentwo from "./componentTwo/Componentwo";

export default function Home() {
   const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Contador: {counterValue}</h1>
      <Componentone />
      <Componentwo />
    </main>
  );
}
