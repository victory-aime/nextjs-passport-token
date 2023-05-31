import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useTogglersContext } from "../context/togglers";
function Header() {
    const { setMobileNavbar } = useTogglersContext();

    return (
        <section id="top header">
            <header className="absolute top-6 inset-x-6 lg:inset-x-28 flex items-center justify-between z-50">
                <div className="text-2xl">
                    <a href={'/'}>
                        AUTO<span className="text-blue-600">MOBELITE</span>
                    </a>
                </div>
                <div className="hidden lg:flex items-center gap-4 font-medium">
                    <button className="hover:text-blue-600 transition-all duration-300 ease-linear">
                        <a href="/authentification/login">
                            Sign In
                        </a>
                    </button>
                    <button className="bg-blue-600 py-3 px-7 text-white   rounded">
                        <a href="/authentification/register">Register</a>
                    </button>

                </div>
                <div className="lg:hidden">
                    <button
                        className="text-3xl transition-all duration-300 ease-linear hover:text-custom-blue"
                        onClick={() => setMobileNavbar(true)}
                    >
                        <AiOutlineMenu />
                    </button>
                </div>
            </header>
        </section>
    );
}

export default Header;
