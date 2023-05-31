import React, { useEffect } from "react";
import { useTogglersContext } from "../context/togglers";
import Link from "next/link";

function MobileNavConnected() {
    const { mobileNavbar, setMobileNavbar } = useTogglersContext();
    useEffect(() => {
        document.body.style.overflowY = mobileNavbar ? "hidden" : "auto";
    }, [mobileNavbar]);
    return (
        <section id="mobile-navbar">
            <div className={`fixed inset-y-0 right-0 bg-white ${
                mobileNavbar ? "left-0" : "left-[150%]"
            } z-50 transition-all duration-300 ease-linear p-8 flex items-center justify-center flex-col`}>
                <button className="text-3xl absolute top-10 right-10 hover:text-blue-600 transition-all duration-300 ease-linear"
                        onClick={() => setMobileNavbar(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                        <path d="m15.707,9.707l-2.293,2.293,2.293,2.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm8.293,2.293c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/>
                    </svg>
                </button>
                <ul className="flex flex-col items-center gap-8 font-medium text-2xl">
                    <button className="py-3 px-5 text-black shadow-blue-500 hover:shadow--bottom-hov transition-all duration-300 ease-linear rounded">
                        <Link href="/Editprofile">Edit Profile</Link>
                    </button>
                    <button className="py-3 px-5 text-black shadow-blue-500 hover:shadow--bottom-hov transition-all duration-300 ease-linear rounded">
                        <Link href="/ManageReservations">Manage Reserversations</Link>
                    </button>
                    <button className="text-3xl transition-all duration-300 ease-linear hover:text-custom-orange"
                            onClick={() => setMobileNavbar(true)}>
                    </button>
                    <button className="bg-blue-600 py-3 px-5 text-white shadow-blue-500 hover:shadow--bottom-hov transition-all duration-300 ease-linear rounded">
                        <Link href="/#">Logout</Link>
                    </button>

                </ul>
            </div>
        </section>
    );

}

export default MobileNavConnected;

