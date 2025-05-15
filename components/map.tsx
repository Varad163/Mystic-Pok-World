import React from 'react';
import Image from 'next/image';
import mapp from '../images/Pokemon-Regions.avif';
import SmoothScrollWrapper from './scrollwrapper';

function MapSection() {
    return (
        <SmoothScrollWrapper>
        
         
        <div className="min-h-screen bg-[#E1F0DA] flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20 gap-10">

      
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Explore the Pokémon World
                </h2>
                <p className="text-xl md:text-2xl font-medium text-gray-700 italic leading-relaxed">
                    “A map of mysteries. A future of glory.”
                    <br />
                    <span className="not-italic font-normal text-lg text-gray-600">
                        Unlock hidden zones, explore the wild, and forge your legend in a world full of powerful creatures and ancient secrets. From Kanto to Paldea — your journey begins now.
                    </span>
                </p>
            </div>

            <div className="md:w-1/2 h-[50vh] relative rounded-lg shadow-lg overflow-hidden">
                <Image
                    src={mapp}
                    alt="Pokémon World Map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
        </div>
        </SmoothScrollWrapper>
    );
}

export default MapSection;
