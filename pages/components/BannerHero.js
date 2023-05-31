import React from "react";
import Image from "next/image";

function BannerHero({ htmlId, page }) {
    return (
        <section id={htmlId}>
            <div className="h-96 relative flex items-center py-8 px-8 lg:px-28">
                <Image
                    src="/images/banner-hero-bg.png"
                    alt="Banner Hero Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <div className="absolute inset-0 bg-white/90" />
                <div className="z-10 space-y-2">
                    <div>
                        <h1 className="font-bold text-4xl">{page}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerHero;