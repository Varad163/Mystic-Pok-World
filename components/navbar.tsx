import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-[#FCF259] px-2 py-10 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo / Brand */}
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    PokéStore
                </Link>

                {/* Nav Links */}
                <div className="space-x-6 hidden md:flex">
                    <Link href="/" className="text-gray-700 hover:text-black font-medium">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-black font-medium">
                        About
                    </Link>
                    <Link href="/products" className="text-gray-700 hover:text-black font-medium">
                        Products
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon (optional for future expansion) */}
                <div className="md:hidden">
                    {/* You can add a hamburger icon or menu toggle here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
