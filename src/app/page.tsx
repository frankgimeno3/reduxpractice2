"use client"


import { useSelector } from "react-redux";
import { RootState } from "../redux/store";  

import Image from "next/image";
import Componentone from "./componentone/Componentone";
import Componentwo from "./componentTwo/Componentwo";
import { useEffect, useState } from "react";
import Componimpar from "./componimpar/componimpar";
import Componpar from "./componpar/componpar";

export default function Home() {
   const counterValue = useSelector((state: RootState) => state.counter.value);
   const [isPar, setIsPar] = useState("zero")
   useEffect(() => {
    if (counterValue % 2 === 0) {
      setIsPar("par");
    } else {
      setIsPar("impar");
    }
  }, [counterValue]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Contador: {counterValue}</h1>
      <Componentone />
      <Componentwo />
      {isPar === "par" && <Componpar />}
      {isPar === "impar" && <Componimpar />}
    </main>
  );
}
