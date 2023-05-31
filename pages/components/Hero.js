import Image from "next/image";
import React from "react";

function Hero() {
    return (
        <section id="hero">
            <div className="px-8 lg:px-28 py-12 lg:py-0 h-screen flex items-center relative">
                <Image
                    src="/images/home-hero-bg.png"
                    alt="hero"
                    width={680}
                    height={870}
                    className="absolute inset-y-0 right-0 -z-10 hidden lg:inline-block"
                />
                <Image
                    src="/images/hero-big-car.png"
                    alt="hero"
                    width={700}
                    height={450}
                    className="absolute right-0 hidden lg:inline-block"
                />
                <div className="space-y-8 text-center lg:text-left md:max-w-lg">
                    <div className="font-bold space-y-2">

                        <h4 className="text-[2.0rem] leading-tight">
                            RENTAL OF <span className="text-blue-600 ">CARS</span> DELIVER TO YOUR HOME
                        </h4>
                    </div>
                    <div>
                        <p className="text-custom-grey text-xl">
                            We deliver and pick up your rental car at the address of your choice.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row text-white font-bold gap-6">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
