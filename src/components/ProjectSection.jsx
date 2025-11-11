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
            const isReversed = row.classList.contains("flex-row-reverse");

            gsap.fromTo(text, {
                y: 100
            },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: text,
                        start: "top 90%",
                        end: "top 50%",
                        scrub: 2,
                    }
                }
            )

            gsap.fromTo(card, {
                rotate: isReversed ? -15 : 15,
                x: isReversed ? -250 : 250,
            }, {
                rotate: 0,
                x: 0,
                scrollTrigger: {
                    trigger: text,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: 2,
                }
            }
            )

        })
    }, [])


    return (
        <div ref={sectionRef} className='w-full min-h-[60%] px-32 flex flex-col gap-5 py-5'>
            {projects.map((project, index) => {
                return <div className={`project-row flex items-center justify-between ${project.reverse ? "flex-row-reverse" : ""}`}>
                    <div className="text">
                        <h1 className='uppercase text-7xl font-semibold -tracking-[0.35rem]'>{project.text1}</h1>
                        <p className='text-xl pt-3'>{project.text2}</p>
                        <button className='px-10 py-4 mt-12 text-semibold border-2 border-green-200 rounded-full text-green-200'>View Project</button>
                    </div>

                    <div className="card w-[620px] rounded-3xl object-cover border-2 overflow-hidden">
                        <img src={project.image} alt="this is image" />
                    </div>
                </div>
            })}

        </div>
    )
}

export default ProjectSection
