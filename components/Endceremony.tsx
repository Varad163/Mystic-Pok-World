import React from 'react';
import Image from 'next/image';
import blueball from '../images/blueball.jpg';

function Endceremony() {
    return (
        <div className="bg-[#C5D3E8] py-20 px-6 md:px-24 flex flex-col items-center text-center font-sans">
            {/* Pokéball Image */}
            <Image
                src={blueball}
                alt="Pokéball"
                width={180}
                height={180}
                className="mb-10 rounded-full shadow-lg"
                priority
            />

            {/* Text Content */}
            <div className="max-w-4xl space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Transform Into Your Pokémon Self!
                </h2>

                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                    Upload your photo and let AI work its magic. Become the Pokémon trainer or creature you’ve always dreamed of!
                </p>

                <p className="text-lg text-gray-700">
                    Ever wondered what you'd look like in the Pokémon world?
                    Here’s your chance to be part of the action in full animated glory.
                </p>

                <p className="text-lg text-gray-700">
                    Custom art, powered by AI. Styled by imagination.
                    Unique, bold, and totally you.
                </p>

                {/* Try It Button */}
                <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md">
                    Try It
                </button>

                {/* Quote */}
                <p className="mt-10 text-gray-700 text-lg italic">
                    “A picture is worth a thousand Pokécoins. Transform your memories into Pokémon magic!”
                </p>
                <p className="text-gray-600 font-semibold">--Varad</p>
            </div>
        </div>
    );
}

export default Endceremony;
