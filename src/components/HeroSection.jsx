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
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            }
        )

        tl.fromTo(btnRef.current.children, {
            y: 50,
            opacity: 0,
        },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }

        )

        const isMobile = window.innerWidth <= 768;

        gsap.to(vdoRef.current, {
            borderRadius: "20px",
            y: isMobile ? 200 : 400,
            height: "40vw",
            width: "80vw",
            scrollTrigger: {
                trigger: vdoRef.current,
                start: "bottom 90%",
                end: "bottom 70%",
                scrub: 2,
            },
        });
    }, [])


    return (
        <div className="
            min-h-screen w-full flex flex-col justify-between max-md:justify-normal
            px-6 md:px-32 pt-32 pb-10 relative
        ">

            <div ref={textRef} className="flex flex-col gap-8 items-center text-center">
                <div className="
                    uppercase font-mono flex flex-col items-center justify-center
                    text-[2.5rem] leading-[2.2rem] tracking-tight
                    md:text-[7rem] md:leading-[5.2rem] md:-tracking-[0.8rem]
                ">
                    <span>roar in the</span>
                    <span>digital wilderness.</span>
                </div>

                <div className="uppercase text-xs md:text-md font-[Montserrat]">
                    <div>We roar with success, delivering the TRIONN<sup>®</sup></div>
                    <div>through versatile design, branding and the latest tech</div>
                    <div>development to companies.</div>
                </div>
            </div>


            <div ref={btnRef} className="flex justify-between gap-4 mt-6">
                <button className='px-6 py-2 border-2 border-green-200 rounded-full text-green-200'>
                    Explore Work
                </button>

                <button className='px-6 py-2 border-2 border-green-200 rounded-full text-green-200'>
                    Get in touch
                </button>
            </div>


            <div
                ref={vdoRef}
                className="
                    video rounded-full overflow-hidden absolute 
                    left-1/2 -translate-x-1/2 -translate-y-1/2
                    top-[95%]
                    h-24 w-24 md:h-32 md:w-32 -mt-10 max-md:top-[50%] 
                "
            >
                <video
                    src="/video/intro-video.mp4"
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover"
                ></video>
            </div>

        </div>
    )

}

export default HeroSection
