import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    const textRef = useRef(null)
    const btnRef = useRef(null)
    const vdoRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo(textRef.current.children, {
            y: 150,
            opacity: 0,
        },
        {
            y:0,
            opacity:1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        }
    )

        tl.fromTo(btnRef.current.children,{
            y:50,
            opacity:0,
        },
        {
            y:0,
            opacity:1,
            duration:1,
            stagger: 0.2,
            ease: "power3.out"
        }
    
    )

    gsap.to(vdoRef.current,{
        borderRadius: "20px",
        y:400,
        height: "600px",
        width:"1100px",
        
        scrollTrigger:{
            trigger: vdoRef.current,
            start: "bottom 90%",
            end: "bottom 70%",
            scrub:2
        }
    })
    }, [])


    return (
        <div className='h-full w-full flex flex-col justify-between px-32 pt-32 pb-4 relative'>

            <div ref={textRef} className="text flex flex-col gap-10 items-center">
                <div className='heading uppercase text-[7rem] text-center leading-[5.2rem] -tracking-[0.8rem] font-mono flex flex-col items-center justify-center'>
                    <span>roar in the</span>
                    <span>digital wilderness.</span>
                </div>

                <div className='secondText uppercase text-md text-center font-[Montserrat]'>
                    <div>We roar with success, delivering the TRIONN<sup>®</sup></div>
                    <div>through versatile design, branding and the latest tech</div>
                    <div> development to companies.</div>
                </div>
            </div>

            <div ref={btnRef} className="btn flex justify-between">
                <button className='px-6 py-2 text-semibold border-2 border-green-200 rounded-full text-green-200'>Explore Work</button>


                <button className='px-6 py-2 text-semibold border-2 border-green-200 rounded-full text-green-200'>Get in touch</button>

            </div>
            <div ref={vdoRef} className="video rounded-full h-20 overflow-hidden border-2 w-32 absolute top-[95%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <video src="/video/intro-video.mp4" autoPlay loop muted playsInline></video>
            </div>

        </div>
    )
}

export default HeroSection
