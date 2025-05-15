import React from 'react';
import Image from 'next/image';
import battle from '../images/battle1.jpg';
import battle3 from '../images/battle3.jpeg';
import battle4 from '../images/battle4.jpg';
import SmoothScrollWrapper from './scrollwrapper';
function Battlezone() {
    return (
        <SmoothScrollWrapper>
        <div className="min-h-screen bg-[#F2F9FF] flex flex-col items-center justify-center px-6 py-12 space-y-16">
            {/* Page Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                Battle Zone
            </h1>

            {/* Section 1 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                <div className="max-w-2xl px-4 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                        "Lightning crackles, the crowd roars, and Pikachu lunges forward—this is not just a battle, it's an electric showdown!"
                    </p>
                </div>
                <Image
                    src={battle4}
                    alt="Pikachu Battle"
                    width={500}
                    height={500}
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
                    className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                />
                <div className="max-w-2xl px-4 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                        "As flames clash with torrents of water, rivals collide in a battle of destiny—Charizard and Blastoise show no mercy."
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                <div className="max-w-2xl px-4 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                        "In the heart of the battlefield, strategy meets instinct—trainers command, Pokémon respond, and legends are born."
                    </p>
                </div>
                <Image
                    src={battle3}
                    alt="Epic Pokémon Battle"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                />
            </div>
        </div>
        </SmoothScrollWrapper>
    );
}

export default Battlezone;
