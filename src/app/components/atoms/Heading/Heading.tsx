"use client";
import { useState, FC, useEffect } from "react";

export const Heading: FC = () => {
  const [x, setX] = useState("We are Videotools!");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setX((prevState) => {
        return prevState === "We are Videotools!"
          ? "Hello!"
          : "We are Videotools!";
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1 className="text-7xl">{x}</h1>;
};
