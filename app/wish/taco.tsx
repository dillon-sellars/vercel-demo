"use client"

import Image from "next/image";
import React from "react";

const tacoImages = [
  "/taco1.png",
  "/taco2.png",
  "/taco3.png",
  "/taco4.png",
  "/taco5.png",
  "/taco6.jpg",
  "/taco7.jpg",
  "/taco8.jpg",
  "/taco9.jpg",
  "/taco0.png",
];

export default function Taco() {
  const [tacos, setTacos] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTacos((tacos) => {
        if (tacos.length === 100) {
          return [];
        } else {
          return [...tacos, tacoImages[Math.floor(Math.random() * 10)]];
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {tacos.map((taco) => (
        <div key={taco} className="relative w-16 h-16">
          <Image
            src={`${taco}`}
            alt="Taco"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}
