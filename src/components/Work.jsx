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
    <div className='work w-full h-screen flex flex-col px-32 pt-44'>
      <div ref={workRef} className="heading uppercase text-[11rem] leading-[8rem] -tracking-[1rem] font-mono flex flex-col items-start w-full bg-gradient-to-l overflow-visible font-bold">
        <span className="inline-block bg-gradient-to-l from-gray-200 to-gray-300 bg-clip-text text-transparent">recent</span>
        <span className="inline-block bg-gradient-to-l from-gray-200 to-gray-300 bg-clip-text text-transparent">work</span>
      </div>

      <div className="subTitle flex items-center justify-between pt-10">
        <div className='text-xl font-mono tracking-tighter w-[20vw]'>In the crative wilderness, clients find out work truly beloved.</div>

        <div className="btn px-6 py-2 text-semibold border-2 border-green-200 rounded-full text-green-200">
          Explore work
        </div>
      </div>
    </div>
  )
}

export default Work
