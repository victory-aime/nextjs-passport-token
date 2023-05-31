import React from "react";
import Header from "../components/Header";
import { TogglersProvider } from "../context/togglers";
import Models from "../components/Models";
import Footer from "../components/Footer";
import BannerHero from "@/pages/components/BannerHero";
import ToTop from "@/pages/components/ToTop";

function page() {
    return (
        <TogglersProvider>
            <main>
                <Header />
                <BannerHero htmlId="models-hero" page="Vehicle Models" />
                <ToTop />
                <Models />
                <Footer />
            </main>
        </TogglersProvider>
    );
}

export default page;
