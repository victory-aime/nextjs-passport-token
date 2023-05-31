import React from "react";
import HeaderConnected from "@/pages/components/Connected";
import Editprofile from "@/pages/components/Editprofile";
import MobileNavbar from "@/pages/components/MobilNavbar";

function page() {
    return (
        <main>
            <HeaderConnected />
            <Editprofile />
            <MobileNavbar />

        </main>


    );
}

export default page;
