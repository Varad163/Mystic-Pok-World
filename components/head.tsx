"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import pikachu from "../images/pikachu.png";
import SmoothScrollWrapper from "./scrollwrapper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Head() {
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.from(textRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

      
        gsap.from(imageRef.current, {
            x: 200,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <SmoothScrollWrapper>
            <div className="min-h-screen w-full bg-[#FCF259] flex flex-col md:flex-row justify-between items-center p-8 md:p-16 rounded-xl">

                <div
                    className="max-w-xl text-center md:text-left space-y-6"
                    ref={textRef}
                >
                    <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                        A New Adventure Awaits!
                    </h1>
                    <p className="text-lg text-gray-700">
                        Step into the vibrant world of Pokémon — where legends are born,
                        dreams are chased, and every trainer begins their journey. Are you
                        ready to catch 'em all?
                    </p>
                    <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition">
                        Get Started
                    </button>
                </div>
                <div className="mt-10 md:mt-0" ref={imageRef}>
                    <Image
                        alt="pikachu"
                        src={pikachu}
                        width={400}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </SmoothScrollWrapper>
    );
}

export default Head;
