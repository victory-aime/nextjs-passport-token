import Link from "next/link";
import React from "react";
/*import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline';*/

function Footer() {
    return (
        <section id="footer">
            <div className="bg-white px-8 lg:px-32 py-16 text-center grid grid-cols-1 lg:grid-cols-2 lg:text-left gap-60">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <a className="font-bold text-2xl">AUTO<span className="text-blue-600">MOBELITE</span></a>
                        <p className="text-custom-grey">
                            We offer a wide range of vehicles for all your driving needs. We
                            have the perfect car to meet your needs.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="tel:123456789" className="flex items-center justify-center lg:justify-start gap-2 hover:text-blue-600 transition-all duration-300 ease-linear">
                                    {/*<span><Phone /></span>*/}
                                    <span className="font-semibold">(123)-456-789</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:carrental@gmail.com" className="flex items-center justify-center lg:justify-start gap-2 hover:text-blue-600 transition-all duration-300 ease-linear">
                                    {/*<span><EmailOutline /></span>*/}
                                    <span className="font-semibold">automobelite@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="font-bold text-2xl">COMPANIES</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="#top" className="hover:text-blue-600 transition-all duration-300 ease-linear">
                                Sousse
                            </a>
                        </li>
                        <li>
                            <a href="#top" className="hover:text-blue-600 transition-all duration-300 ease-linear">
                                Carrière
                            </a>
                        </li>
                        <li>
                            <a href="#top" className="hover:text-blue-600 transition-all duration-300 ease-linear">
                                Blogue
                            </a>
                        </li>
                        <li>
                            <a href="#top" className="hover:text-blue-600 transition-all duration-300 ease-linear">
                                How we work
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
