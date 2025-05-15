import React from "react";
import Image from "next/image";
import ev from "../images/ev.png";
import SmoothScrollWrapper from "./scrollwrapper";

function About() {
    return (
        <SmoothScrollWrapper>
        <div className="min-h-screen w-full bg-[#FAF1E6] flex flex-col md:flex-row justify-between items-center px-8 py-16 md:py-24 rounded-xl">

            {/* Image Section */}
            <div className="mb-8 md:mb-0 md:mr-12">
                <Image
                    alt="Eevee"
                    src={ev}
                    width={500}
                    height={500}
                    className="rounded-xl shadow-xl"
                />
            </div>

            <div className="max-w-xl text-center md:text-left space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                    Built for Fans, By Fans.
                </h2>
                <p className="text-lg text-gray-700">
                    Powered by modern web technologies like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, this
                    frontend project showcases what happens when web development meets
                    nostalgia.
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
