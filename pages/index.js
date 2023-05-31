import Header from "@/pages/components/Header";
import ChooseUs from "@/pages/components/ChooseUs";
import Footer from "@/pages/components/Footer";
import Hero from "@/pages/components/Hero";
import QuickEasy from "@/pages/components/QuickEasy";
import RentalFleet from "@/pages/components/RentalFleet";
import {CurrentValueProvider} from "@/pages/context/currentValue";
import {TogglersProvider} from "@/pages/context/togglers";
import {InputValueProvider} from "@/pages/context/inputValue";
import Booking from "@/pages/components/Booking";
import BookingModal from "@/pages/components/BookingModal";
import ToTop from "@/pages/components/ToTop";
import MobileNavbar from "@/pages/components/MobilNavbar";


export default function Home() {
    return (
        <TogglersProvider>
            <InputValueProvider>
                <CurrentValueProvider>
                    <main>
                        <Header/>
                        <MobileNavbar />
                        <Hero/>
                        <Booking/>
                        <BookingModal/>
                        <ToTop />
                        <QuickEasy/>
                        <RentalFleet/>
                        <ChooseUs/>
                        <Footer/>
                    </main>
                </CurrentValueProvider>
            </InputValueProvider>
        </TogglersProvider>
    )
}
