import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { id: 1, image: "/images/card2_files/dribbble1.webp", title: "Card 1" },
  { id: 2, image: "/images/card2_files/dribbble2.webp", title: "Card 2" },
  { id: 3, image: "/images/card2_files/dribbble3.webp", title: "Card 3" },
  { id: 4, image: "/images/card2_files/dribbble4.webp", title: "Card 4" },
  { id: 5, image: "/images/card2_files/dribbble5.webp", title: "Card 5" },
  { id: 6, image: "/images/card2_files/dribbble6.webp", title: "Card 6" },
];

const Dribble = () => {
  const cardsRef = useRef([]);
  const textRef = useRef(null);

  const isMobile = window.innerWidth <= 760;
  const isDesktop = window.innerWidth >= 760;

  useEffect(() => {
    if (!isDesktop) return;
    if (isMobile) return;

    const rows = [
      cardsRef.current.slice(0, 2),
      cardsRef.current.slice(2, 4),
      cardsRef.current.slice(4, 6)
    ];

    rows.forEach((row, rIndex) => {
      gsap.to(row, {
        y: -40 * rIndex,
        x: (i) => i === 0 ? -120 * (3 - rIndex) : 120 * (3 - rIndex),
        rotation: (i) => i === 0 ? -40 : 40,
        scale: 0.95,
        zIndex: 30 + rIndex,
        scrollTrigger: {
          trigger: ".cards-section",
          start: 'top 50%',
          end: 'bottom 0%',
          scrub: 2
        }
      });
    });
  }, []);

  useEffect(() => {
    gsap.to(textRef.current, {
      y: -250,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top 20%",
        end: "top 20%",
        scrub: 2
      }
    });
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    if (isDesktop) return;

    cardsRef.current.forEach((card, index) => {
      const direction = index % 2 === 0 ? 300 : -300;
      if (!card) return;

      gsap.fromTo(
        card,
        { x: 0 },
        {
          x: direction,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: true
          }
        }
      );
    });
  }, []);

  return (
    <div className="cards-section overflow-x-hidden w-full px-5 lg:px-32 relative py-16">

      <div
        className={`cards-container relative grid gap-5
          grid-cols-1 
          lg:grid-cols-2
        `}
      >
        {cardsData.map((card, i) => (
          <div
            key={card.id}
            className="card relative rounded-3xl overflow-hidden bg-cover h-[260px] lg:h-[300px] z-50"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Center Text */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-center opacity-0
          w-[90%] max-w-[400px] lg:max-w-[500px] "
        >
          <div className="mb-5">
            <img
              src="/images/card2_files/dribbble.1a51ca99.webp"
              width="200px"
              className="mx-auto"
              alt="dribbble logo"
            />
          </div>

          <p className="text-lg lg:text-xl font-semibold">
            Like a lion's roar echoing through the jungle, a hint of our creative
            minds emerges.
          </p>

          <button className="tracking-normal px-10 py-4 mt-8 text-base border-2 border-green-200 rounded-full text-green-200">
            View Dribbble
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dribble;
