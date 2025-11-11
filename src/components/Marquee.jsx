import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Marquee = () => {
    const firstRow = useRef(null)
    const secondRow = useRef(null)

    useEffect(() => {
        gsap.to(".marquee .first .row1",{
            transform: 'translateX(-100%)',
            duration: 7,
            repeat: -1,
            ease : "linear"
        })

        gsap.to(".marquee .second .row2",{
            transform: 'translateX(-100%)',
            duration: 7,
            repeat: -1,
            ease : "linear"
        })
    }, [])
    


    return (
        <div className="marquee w-full min-h-screen overflow-hidden py-5 flex flex-col justify-center mt-44">
            <div className="w-full overflow-hidden whitespace-nowrap mb-4 text-[12rem] uppercase leading-[9rem] font-bold font-mono tracking-tighter flex flex-col">
                <div className='flex first whitespace-nowrap'>
                    <span className='row1'>wild ideas!-</span>
                    <span className='row1'>wild ideas!-</span>
                    <span className='row1'>wild ideas!-</span>
                    <span className='row1'>wild ideas!-</span>
                </div>
                <div ref={secondRow} className='flex second whitespace-nowrap'>
                    <span className='row2'>let's dive in!</span>
                    <span className='row2'>let's dive in!</span>
                    <span className='row2'>let's dive in!</span>
                    <span className='row2'>let's dive in!</span>
                </div>
            </div>
        </div>
    )
}

export default Marquee
