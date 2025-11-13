import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {

    const visionRef = useRef(null)
    const btnRef = useRef(null)

    useEffect(() => {
      gsap.fromTo(".vision .who", {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 2,
          invalidateOnRefresh: false,
        },
      });

      gsap.fromTo(".vision .weare", {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 2,
          invalidateOnRefresh: false,
        },
      });

      const tl = gsap.timeline()
      tl.fromTo(".vision .para1", {
        y:150,
        opacity:0,
      },{
        y:0,
        opacity:1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
          trigger:".vision .para1",
          start:"top 80%",
          scrub: true
        }
      })
      tl.fromTo(".vision .para2", {
        y:150,
        opacity:0,
      },{
        y:0,
        opacity:1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
          trigger:".vision .para2",
          start:"top 80%",
          scrub: true
        }
      })
      tl.fromTo(btnRef.current, {
        y:150,
        opacity:0,
      },{
        y:0,
        opacity:1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
          trigger:btnRef.current,
          start:"top 80%",
          scrub: true
        }
      })
    }, [])
    
    return (
        <div ref={visionRef} className="vision w-full px-4 sm:px-8 md:px-16 lg:px-32 py-32 sm:py-48 md:py-64">
            
            {/* Heading */}
            <div className="first w-full md:w-2/3">
                <div className="heading uppercase font-semibold text-6xl sm:text-8xl md:text-[12rem] leading-[4rem] sm:leading-[6rem] md:leading-[9rem] -tracking-[0.2rem] sm:-tracking-[0.5rem] md:-tracking-[1rem]">
                    <div className='who'>who</div>
                    <div className='weare'>we are</div>
                </div>

                <div className="para1 text-2xl sm:text-3xl md:text-5xl mt-8 sm:mt-12 md:mt-20 leading-snug md:leading-tight">
                    <p>
                        As an award-winning agency
                        within the digital jungle, TRIONN
                        ® transcends aesthetics, crafting
                        your vision into a legacy that
                        endures.
                    </p>
                </div>
            </div>

            {/* Second paragraph & button */}
            <div className="second w-full md:w-1/2 mt-8 sm:mt-10 md:mt-10 relative md:-right-1/2">
                <div className="para2 text-lg sm:text-xl md:text-2xl py-4 leading-relaxed md:leading-snug">
                    We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.
                </div>

                <button ref={btnRef} className='px-6 sm:px-10 py-3 sm:py-4 mt-6 sm:mt-12 text-semibold border-2 border-green-200 rounded-full text-green-200'>
                    About us
                </button>
            </div>
        </div>
    )
}

export default Vision
