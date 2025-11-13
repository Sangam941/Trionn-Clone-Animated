import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        text1: "loftloom",
        text2: "UI Design, UX, Wireframe",
        image: "/images/image1.jpeg"
    },
    {
        text1: "imusic",
        text2: "Research, UX, UI Design",
        image: "/images/image2.jpeg",
        reverse: true
    },
    {
        text1: "technis",
        text2: "UX, UI Design, Development",
        image: "/images/image3.jpeg"
    }
]

const ProjectSection = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const sections = sectionRef.current.querySelectorAll(".project-row");

        sections.forEach((row) => {
            const text = row.querySelector(".text");
            const card = row.querySelector(".card");
            const isReversed = row.classList.contains("md:flex-row-reverse");

            // Animate text
            gsap.fromTo(text, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: row,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: 2,
                }
            });

            // Animate card
            gsap.fromTo(card, {
                rotate: isReversed ? -15 : 15,   
                x: isReversed ? -300 : 300,      
                opacity: 0
            }, {
                rotate: 0,
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: row,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: 2,
                }
            });

        })
    }, [])

    return (
        <div ref={sectionRef} className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col gap-16 py-10 overflow-x-hidden">
            {projects.map((project, index) => {
                return (
                    <div
                        key={index}
                        className={`project-row flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative ${project.reverse ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Text */}
                        <div className="text w-full md:w-[40%] flex flex-col items-start md:items-start z-10">
                            <h1 className='uppercase text-4xl sm:text-5xl md:text-7xl font-semibold -tracking-[0.2rem] sm:-tracking-[0.25rem] md:-tracking-[0.35rem]'>{project.text1}</h1>
                            <p className='text-md sm:text-lg md:text-xl pt-3'>{project.text2}</p>
                            <button className='px-6 sm:px-10 py-3 sm:py-4 mt-8 text-semibold border-2 border-green-200 rounded-full text-green-200'>View Project</button>
                        </div>

                        {/* Card */}
                        <div className="card w-full md:w-[620px] rounded-3xl border-2 overflow-hidden flex-shrink-0 ">
                            <img src={project.image} alt={project.text1} className="w-full h-auto object-cover" />
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ProjectSection
