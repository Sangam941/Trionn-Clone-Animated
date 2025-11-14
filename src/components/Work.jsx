import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline()

    tl.fromTo(workRef.current.children,
    {
      x: 200,
      opacity:0,
    },
    {
      x:0,
      opacity:1,
      ease:"power3.out",
      stagger:0.2,
      scrollTrigger:{
        trigger:workRef.current,
        start:"top 70%",
        end:"top 40%",
        scrub:2,
      }
    }
  )

  tl.fromTo(".work .subTitle", {
    y: 60,
    opacity:0
  },
  {
    y:0,
    opacity:1,
    stagger:0.2,
    duration:1,
    ease: "power3.out",
    scrollTrigger:{
      trigger: ".work .subTitle",
      start:"top 80%",
      end:"top 50%",
      scrub:2
    }
  }
)

  }, [])

  return (
    <div className='work w-full min-h-[50vh] md:min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 pt-32 sm:pt-36 md:pt-44'>
      
      {/* Heading */}
      <div ref={workRef} className="heading uppercase text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[4rem] sm:leading-[6rem] md:leading-[7rem] lg:leading-[8rem] -tracking-[0.3rem] sm:-tracking-[0.5rem] md:-tracking-[0.7rem] lg:-tracking-[1rem] font-mono flex flex-col items-start w-full bg-gradient-to-l overflow-visible font-bold">
        <span className="inline-block bg-gradient-to-l from-gray-200 to-gray-300 bg-clip-text text-transparent">recent</span>
        <span className="inline-block bg-gradient-to-l from-gray-200 to-gray-300 bg-clip-text text-transparent">work</span>
      </div>

      {/* SubTitle */}
      <div className="subTitle flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 sm:pt-10 gap-4 sm:gap-0">
        <div className='text-lg sm:text-xl font-mono tracking-tight sm:tracking-tighter w-full sm:w-[40vw] md:w-[30vw]'>
          In the creative wilderness, clients find our work truly beloved.
        </div>

        <div className="btn px-4 sm:px-6 py-2 text-semibold border-2 border-green-200 rounded-full text-green-200">
          Explore work
        </div>
      </div>
    </div>
  )
}

export default Work
