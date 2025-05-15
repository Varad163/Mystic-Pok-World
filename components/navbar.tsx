import Link from "next/link";
import Image from "next/image";
import React from "react";
import pokeball from "../public/pokeball.svg"; 

const Navbar = () => {
    return (
        <nav className="bg-[#FCF259] px-4 py-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src={pokeball}
                        alt="Pokéball"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                    />
                    <span className="text-3xl font-extrabold tracking-wide text-gray-900 hover:text-black transition duration-200">
                        Poké<span className="text-red-600">Venture</span>
                    </span>
                </Link>

                <div className="space-x-8 hidden md:flex">
                    {["Home", "About", "Products", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                            className="text-lg font-semibold text-gray-800 hover:text-red-600 transition duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                 
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
