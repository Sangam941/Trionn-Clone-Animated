import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, number: "50+", description: "Awards & Recognition", bg : "orange" },
  { id: 2, number: "900+", description: "Project Completed" ,bg: "zinc"},
  { id: 3, number: "20+", description: "Creative Mind" , bg:"gray"},
  { id: 4, number: "20+", description: "Years of Experience" , bg:"yellow"}
];

export default function StatsCards() {
  const sectionRef = useRef(null);

  const handleHover = (e,bg)=>{
    gsap.to(e.target, {
        backgroundColor: bg,
        duration:0.7,
        ease: "power3.out"
    })

    
  }
  const handleLeave = (e,bg)=>{
    gsap.to(e.target, {
        backgroundColor: "",
        duration:0.7,
        ease: "power3.out"
    })
  }

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".card");

    const tl = gsap.timeline();


    cards.forEach((card, index) => {
      const fromRotation = index % 2 === 0 ? -20 : 20;
      const fromX = index % 2 === 0 ? -180 : 180;

      tl.fromTo(
        card,
        { rotate: fromRotation, x: fromX, opacity: 0 },
        {
          rotate: 0, x: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
              start: "bottom 80%",
              end: "bottom 40%",
              scrub:2
          }
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="px-32 w-full min-h-[60vh] grid grid-cols-2 gap-6"
    >
      {stats.map((card, index) => {
        const shift = card.id % 2 === 0 ? "translate-y-[200px]" : "";
        return (
          <div
            key={index}
            onMouseEnter={(e)=>{handleHover(e,card.bg)}}
            onMouseLeave={(e)=>{handleLeave(e,card.bg)}}
            className={`card mb-5 flex flex-col justify-between rounded-3xl py-5 px-16 border-2 bg-zinc-800 ${shift}`}
          >
            <div onMouseEnter={(e)=>{handleHover(e,card.bg)}}
            onMouseLeave={(e)=>{handleLeave(e,card.bg)}} className="number text-[8rem] bg-transparent">{card.number}</div>
            <div onMouseEnter={(e)=>{handleHover(e,card.bg)}}
            onMouseLeave={(e)=>{handleLeave(e,card.bg)}} className="desc text-[3rem] text-end bg-transparent pb-10">
              {card.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}
