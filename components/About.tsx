"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ev from "../images/ev.png";
import SmoothScrollWrapper from "./scrollwrapper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (imageRef.current && textRef.current) {
            gsap.from(imageRef.current, {
                x: -200,
                opacity: 0,
                duration: 2.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            gsap.from(textRef.current, {
                x: 200,
                opacity: 0,
                duration: 2.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        }
    }, []);

    return (
        <SmoothScrollWrapper>
            <div className="min-h-screen w-full bg-[#FAF1E6] flex flex-col md:flex-row justify-between items-center px-8 py-16 md:py-24 rounded-xl">

                {/* Image Section */}
                <div ref={imageRef} className="mb-8 md:mb-0 md:mr-12">
                    <Image
                        alt="Eevee"
                        src={ev}
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl"
                    />
                </div>

                {/* Text Section */}
                <div
                    ref={textRef}
                    className="max-w-xl text-center md:text-left space-y-6"
                >
                    <h2 className="text-4xl font-bold text-gray-800">
                        Built for Fans, By Fans.
                    </h2>
                    <p className="text-lg text-gray-700">
                        Powered by modern web technologies like <strong>Next.js</strong> and{" "}
                        <strong>Tailwind CSS</strong>, this frontend project showcases what
                        happens when web development meets nostalgia.
                    </p>
                    <p className="text-lg text-gray-700">
                        It’s an animated experience that celebrates the spirit of Pokémon
                        while pushing frontend creativity forward.
                    </p>
                    <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition">
                        Explore the World
                    </button>
                </div>
            </div>
        </SmoothScrollWrapper>
    );
}

export default About;
