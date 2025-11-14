import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Marquee = () => {
  const firstRow = useRef(null);
  const secondRow = useRef(null);

  useEffect(() => {
    gsap.to(".marquee .first .row1", {
      x: "-100%",
      duration: 7,
      repeat: -1,
      ease: "linear"
    });

    gsap.to(".marquee .second .row2", {
      x: "-100%",
      duration: 7,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="marquee w-full min-h-[60vh] overflow-hidden py-5 max-md:py-0 flex flex-col justify-center mt-20">
      <div className="w-full overflow-hidden whitespace-nowrap mb-4 flex flex-col">
        {/* FIRST ROW */}
        <div className='flex first whitespace-nowrap'>
          <span className='row1 text-[8rem] md:text-[10rem] lg:text-[12rem] uppercase leading-[6rem] md:leading-[8rem] lg:leading-[9rem] font-bold font-mono tracking-tighter mr-5'>
            wild ideas!-
          </span>
          <span className='row1 text-[8rem] md:text-[10rem] lg:text-[12rem] uppercase leading-[6rem] md:leading-[8rem] lg:leading-[9rem] font-bold font-mono tracking-tighter mr-5'>
            wild ideas!-
          </span>
          <span className='row1 text-[8rem] md:text-[10rem] lg:text-[12rem] uppercase leading-[6rem] md:leading-[8rem] lg:leading-[9rem] font-bold font-mono tracking-tighter mr-5'>
            wild ideas!-
          </span>
        </div>

        {/* SECOND ROW */}
        <div ref={secondRow} className='flex second whitespace-nowrap'>
          <span className='row2 text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase leading-[5rem] md:leading-[7rem] lg:leading-[8rem] font-bold font-mono tracking-tighter mr-5'>
            let's dive in!
          </span>
          <span className='row2 text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase leading-[5rem] md:leading-[7rem] lg:leading-[8rem] font-bold font-mono tracking-tighter mr-5'>
            let's dive in!
          </span>
          <span className='row2 text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase leading-[5rem] md:leading-[7rem] lg:leading-[8rem] font-bold font-mono tracking-tighter mr-5'>
            let's dive in!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
