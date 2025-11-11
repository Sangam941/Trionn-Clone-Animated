import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

    const footerRef = useRef(null)
    const contactRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(".footer .time", {
            x: 200,
            opacity: 0,
        },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer",
                    start: "bottom 80%",
                    scrub: 2,
                },
            });

        gsap.fromTo(".footer .roar", {
            x: -300,
            opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer",
                    start: "bottom 80%",
                    scrub: 2,
                },
            }
        );
        gsap.fromTo(".footer .btn", {
            y: 50,
            opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                delay:1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer",
                    start: "bottom 80%",
                    scrub: 2,
                },
            }
        );

        const tl = gsap.timeline()

        tl.fromTo(contactRef.current.children, {
            y: 50,
            opacity: 0,
        },{
            y:0,
            opacity:1,
            stagger:1,
            duration:1,
            ease:"power3.out",
            scrollTrigger:{
                trigger: contactRef.current,
                start: "bottom 80%",
                scrub:2
            }
        })


    }, [])

    return (
        <div ref={footerRef} className="footer min-h-screen mt-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 lg:py-32">
                <div className="flex-1">
                    <h1 className="time text-7xl lg:text-9xl font-black leading-none tracking-tight mb-8">
                        TIME TO
                        <br />
                        <span className="roar block">ROAR!</span>
                    </h1>
                </div>

                <div className="btn flex-shrink-0 lg:ml-16">
                    <button className="bg-teal-300 text-gray-900 px-12 py-4 rounded-full text-lg font-semibold hover:bg-teal-400 transition-all hover:scale-105 shadow-lg hover:shadow-teal-300/50">
                        Let's talk!
                    </button>
                </div>
            </div>


            {/* Contact Section */}
            <div ref={contactRef} className="bottom-0 left-0 right-0 px-8 lg:px-16 pb-12">

                <div className="relative mb-12">
                    <div className="h-[1px] bg-gray-700"></div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="text-sm text-gray-400 mb-2">Email</div>
                        <a href="mailto:hello@trionn.com" className="text-xl font-light hover:text-teal-400 transition-colors">
                            hello@trionn.com
                        </a>
                    </div>

                    <div>
                        <div className="text-sm text-gray-400 mb-2">Call</div>
                        <a href="tel:+919824182099" className="text-xl font-light hover:text-teal-400 transition-colors">
                            +91 98241 82099
                        </a>
                    </div>

                    <div className="md:text-right">
                        <div className="text-sm text-gray-400 mb-2">Teams</div>
                        <button className="text-xl font-light hover:text-teal-400 transition-colors">
                            Talk to Trionn
                        </button>
                    </div>
                </div>

                <div className="relative mb-8">
                    <div className="h-px bg-gray-700"></div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pb-24">
                    <div className="text-gray-500 text-sm">©2025 TRIONN®</div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}