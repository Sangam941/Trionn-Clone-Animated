import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'


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

    useEffect(() => {
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
                    trigger: ".cards-container",
                    start: 'top 10%',
                    end: `bottom 0%`,
                    scrub: 2
                }
            });
        });


    }, []);

    useEffect(() => {
      
        gsap.to(textRef.current, {
            y:-250,
            opacity:1,
            duration: 1,
            scrollTrigger:{
                trigger: textRef.current,
                start: "bottom 80%",
                end: "bottom 10%",
                scrub:2
            }
        })

    }, [])
    


    return (
        <div className="cards-section w-full px-32 relative">
            <div className="cards-container relative grid grid-cols-2 gap-5">
                {cardsData.map((card, i) => (
                    <div
                        className="card relative rounded-3xl overflow-hidden z-10 bg-cover h-[300px]"
                        key={card.id}

                        ref={(el) => (cardsRef.current[i] = el)}
                    >
                        <img src={card.image} alt={card.title} />
                    </div>
                ))}

                <div className="bg-transparent p-5 text-3xl w-1/3 font-semibold center-text flex  flex-col items-center gap-10 font-sans tracking-tighter text-center absolute top-[50%] opacity-0 left-[50%] -translate-x-[50%] -translate-y-[50%]" ref={textRef}>
                    <div className="dribble bg-transparent">
                        <img src="/images/card2_files/dribbble.1a51ca99.webp" width={`200px`} alt="this is image" />
                    </div>
                    <p className='bg-transparent'>
                        Like a lion's roar echoing through the jungle, a hint of our creative
                        minds emerges.
                    </p>
                    <button className='tracking-normal px-10 py-4 mt-8 text-base border-2 border-green-200 rounded-full text-green-200'>View Dribbble</button>

                </div>
            </div>

        </div>
    )
}

export default Dribble
