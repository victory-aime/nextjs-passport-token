import React, {useState} from "react";
import {useTogglersContext} from "@/pages/context/togglers";



function HeaderConnected() {
    const {setMobileNavbar} = useTogglersContext();

    //const { logout } = useAuthContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        // logout();
        // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée

    };

    return (
        <section id="top header">
            <header className="absolute top-6 inset-x-6 lg:inset-x-28 flex items-center justify-between z-50">
                <div className="text-2xl">
                    <a href='/HomeConnected'>
                        AUTO<span className="text-blue-600">MOBELITE</span>
                    </a>
                </div>
                <div className="hidden lg:flex items-center gap-4 font-medium relative">
                    <button
                        onClick={toggleDropdown}
                        className="hover:text-blue-600 transition-all duration-600 ease-linear"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30">
                            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
                            <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute top-full right-0 bg-white rounded-md shadow-md py-2 mt-2">
                            <li>
                                <a href="/Editprofile" className="block px-4 py-2 hover:bg-gray-200">
                                    Edit Profile
                                </a>
                            </li>
                            <li>

                                <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">
                                    <a href="#">
                                        Logout
                                    </a>
                                </button>
                            </li>
                            <li>
                                <a href="/ManageReservations" className="block px-4 py-2 hover:bg-gray-200">
                                    Manage Reservations
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="lg:hidden">
                    <button className="text-3xl transition-all duration-300 ease-linear hover:text-custom-orange" onClick={() => setMobileNavbar(true)}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>
        </section>
    );
}

export default HeaderConnected;
