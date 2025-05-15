"use client";

import React, { useEffect, useRef } from "react";
import SmoothScrollWrapper from "./scrollwrapper";
import gsap from "gsap";

function Selection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        requestAnimationFrame(() => {
            const totalWidth = container.scrollWidth;

            // Clone only once
            container.innerHTML += container.innerHTML;

            gsap.to(container, {
                x: `-=${totalWidth / 2}`,
                duration: 20,
                ease: "linear",
                repeat: -1,
            });
        });
    }, []);

    return (
        <SmoothScrollWrapper>
            <div className="min-h-screen bg-[#F2F9FF] flex flex-col items-center justify-center p-10 rounded-lg overflow-hidden">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Choose Your Champions.
                </h2>
                <p className="max-w-xl text-center text-lg text-gray-700 mb-12 leading-relaxed px-4">
                    Every legend starts with a single step — and a powerful team. Select your Pokémon and prepare to make history.
                </p>

                <div className="relative w-full overflow-hidden">
                    <div
                        ref={containerRef}
                        className="flex flex-row items-center gap-16 whitespace-nowrap px-4"
                    >
                        {[
                            {
                                name: "Pikachu",
                                url: "https://pokemondb.net/pokedex/pikachu",
                                img: "https://img.pokemondb.net/sprites/home/normal/pikachu-original-cap.png",
                            },
                            {
                                name: "Charmander",
                                url: "https://pokemondb.net/pokedex/charmander",
                                img: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
                            },
                            {
                                name: "Squirtle",
                                url: "https://pokemondb.net/pokedex/squirtle",
                                img: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
                            },
                            {
                                name: "Bulbasaur",
                                url: "https://pokemondb.net/pokedex/bulbasaur",
                                img: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
                            },
                        ].map((poke, index) => (
                            <a
                                key={index}
                                href={poke.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={poke.name}
                            >
                                <img
                                    src={poke.img}
                                    alt={poke.name}
                                    className="w-48 h-48 object-contain hover:scale-110 transition-transform"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </SmoothScrollWrapper>
    );
}

export default Selection;
