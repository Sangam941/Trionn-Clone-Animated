import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {

    const visionRef = useRef(null)

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
      }
    );

      // WE ARE (left → right)
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

    }, [])
    
    return (
        <div ref={visionRef} className="vision w-full min-h-[60%] px-32 py-64">

            <div className="first w-2/3">
                <div className="heading uppercase font-semibold text-[12rem] -tracking-[1rem] leading-[9rem]">
                    <div className='who'>who</div>
                    <div className='weare'>we are</div>
                </div>
                <div className="para1 text-5xl mt-20 leading-tight">
                    <p>As an award-winning agency
                        within the digital jungle, TRIONN
                        ® transcends aesthetics, crafting
                        your vision into a legacy that
                        endures.</p>
                </div>
            </div>

            <div className="second relative -right-1/2 w-1/2 mt-10">
                <div className="para2 text-2xl py-4">
                    We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.
                </div>

                <button className='px-10 py-4 mt-12 text-semibold border-2 border-green-200 rounded-full text-green-200'>About us</button>
            </div>
        </div>
    )
}

export default Vision
