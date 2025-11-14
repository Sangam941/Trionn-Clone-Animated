import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JungleTrek = () => {
  const headingsRef = useRef([]);

  useEffect(() => {
    headingsRef.current.forEach((el, i) => {
      const fromX = i % 2 === 0 ? 300 : -300; // even: from right, odd: from left
      gsap.fromTo(
        el,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });
  }, []);

  const headings = ["join", "our", "jungle", "trek"];

  return (
    <div className="w-full min-h-screen max-md:py-0 max-md:min-h-[50%] flex flex-col justify-center items-center text-white px-4 py-20">
      {headings.map((text, index) => (
        <h1
          key={index}
          ref={(el) => (headingsRef.current[index] = el)}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase text-center leading-[0.9] md:leading-[0.75] lg:leading-[0.7] my-2"
        >
          {text}
        </h1>
      ))}
    </div>
  );
};

export default JungleTrek;
