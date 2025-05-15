import Image from "next/image";
import pikachu from "../images/pikachu.png";
import React from "react";

function Head() {
    return (
        <div className="min-h-screen w-full bg-[#FCF259] flex flex-col md:flex-row justify-between items-center p-8 md:p-16 rounded-xl">

            {/* Text Content */}
            <div className="max-w-xl text-center md:text-left space-y-6">
                <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                    A New Adventure Awaits!
                </h1>
                <p className="text-lg text-gray-700">
                    Step into the vibrant world of Pokémon — where legends are born, dreams are chased,
                    and every trainer begins their journey. Are you ready to catch 'em all?
                </p>
                <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition">
                    Get Started
                </button>
            </div>

            {/* Pikachu Image */}
            <div className="mt-10 md:mt-0">
                <Image
                    alt="pikachu"
                    src={pikachu}
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
}

export default Head;
