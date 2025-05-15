"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import battle from '../images/battle1.jpg';
import battle3 from '../images/battle3.jpeg';
import battle4 from '../images/battle4.jpg';
import SmoothScrollWrapper from './scrollwrapper';

gsap.registerPlugin(ScrollTrigger);

function Battlezone() {
    const image1Ref = useRef<HTMLImageElement>(null);
    const image2Ref = useRef<HTMLImageElement>(null);
    const image3Ref = useRef<HTMLImageElement>(null);

    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const text3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animate = (
            ref: React.RefObject<HTMLElement | HTMLImageElement>,
            animationProps: gsap.TweenVars
        ) => {
            if (!ref.current) return;
            gsap.from(ref.current, {
                ...animationProps,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        };

        // Animate images
        animate(image1Ref, { x: 200, opacity: 0, duration: 2, ease: "power3.out" });
        animate(image2Ref, { x: -200, opacity: 0, duration: 2, ease: "power3.out" });
        animate(image3Ref, { x: 200, opacity: 0, duration: 2, ease: "power3.out" });

        // Animate texts
        animate(text1Ref, { y: 50, opacity: 0, duration: 2, ease: "power3.out" });
        animate(text2Ref, { y: 50, opacity: 0, duration: 2, ease: "power3.out" });
        animate(text3Ref, { y: 50, opacity: 0, duration: 2, ease: "power3.out" });
    }, []);

    return (
        <SmoothScrollWrapper>
            <div className="min-h-screen bg-[#F2F9FF] flex flex-col items-center justify-center px-6 py-12 space-y-16">
                {/* Page Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Battle Zone
                </h1>

                {/* Section 1 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                    <div ref={text1Ref} className="max-w-2xl px-4 text-center md:text-left">
                        <p className="text-xl md:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                            "Lightning crackles, the crowd roars, and Pikachu lunges forward—this is not just a battle, it's an electric showdown!"
                        </p>
                    </div>
                    <Image
                        src={battle4}
                        alt="Pikachu Battle"
                        width={500}
                        height={500}
                        ref={image1Ref}
                        className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />
                </div>

                {/* Section 2 */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                    <Image
                        src={battle}
                        alt="Charizard vs Blastoise"
                        width={500}
                        height={500}
                        ref={image2Ref}
                        className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />
                    <div ref={text2Ref} className="max-w-2xl px-4 text-center md:text-left">
                        <p className="text-xl md:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                            "As flames clash with torrents of water, rivals collide in a battle of destiny—Charizard and Blastoise show no mercy."
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                    <div ref={text3Ref} className="max-w-2xl px-4 text-center md:text-left">
                        <p className="text-xl md:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                            "In the heart of the battlefield, strategy meets instinct—trainers command, Pokémon respond, and legends are born."
                        </p>
                    </div>
                    <Image
                        src={battle3}
                        alt="Epic Pokémon Battle"
                        width={500}
                        height={500}
                        ref={image3Ref}
                        className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />
                </div>
            </div>
        </SmoothScrollWrapper>
    );
}

export default Battlezone;
