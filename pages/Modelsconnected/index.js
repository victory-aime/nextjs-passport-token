import {TogglersProvider} from "@/pages/context/togglers";
import BannerHero from "@/pages/components/BannerHero";
import Modelsconnected from "@/pages/components/ModelsConnected";
import Footer from "@/pages/components/Footer";
import ToTop from "@/pages/components/ToTop";
import MobileNavConnected from "@/pages/components/MobileNavConnected";
import HeaderConnected from "@/pages/components/Connected";


function page() {
    return (
        <TogglersProvider>
            <main>
                <HeaderConnected />
                <MobileNavConnected />
                <BannerHero htmlId="models-hero" page="Vehicle Models" />
                <ToTop />
                <Modelsconnected />
                <Footer />
            </main>
        </TogglersProvider>
    );
}

export default page;
