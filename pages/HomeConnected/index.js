import {TogglersProvider} from "@/pages/context/togglers";
import {InputValueProvider} from "@/pages/context/inputValue";
import {CurrentValueProvider} from "@/pages/context/currentValue";
import HeaderConnected from "@/pages/components/Connected";
import MobileNavConnected from "@/pages/components/MobileNavConnected";
import Hero from "@/pages/components/Hero";
import Booking from "@/pages/components/Booking";
import BookingModal from "@/pages/components/BookingModal";
import QuickEasy from "@/pages/components/QuickEasy";
import ChooseUs from "@/pages/components/ChooseUs";
import Footer from "@/pages/components/Footer";
import ToTop from "@/pages/components/ToTop";
import RentalFleet from "@/pages/components/RentalFleet";


function page() {
    return (
        <main>
            <TogglersProvider>
                <InputValueProvider>
                    <CurrentValueProvider>
                        <HeaderConnected/>
                        <MobileNavConnected/>
                        <Hero/>
                        <ToTop/>
                        <Booking/>
                        <BookingModal/>
                        <QuickEasy/>
                        <RentalFleet/>
                        <ChooseUs/>
                        <Footer/>
                    </CurrentValueProvider>
                </InputValueProvider>
            </TogglersProvider>
        </main>


    );
}

export default page;