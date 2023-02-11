import { useState } from "react";
import cilhouse from '../images/cil_house.svg'
import facebook from '../images/facebook.svg'
import gorjeo from '../images/gorjeo.svg'
import instagram from '../images/instagram.svg'
import whats from '../images/WhatsApp_logo_1.png'
function Footer() {
    return (
        <>
            <div className="w-90 md:w-full h-30 md:h-66 bg-[#FD9255] relative bottom-0">
                <div className="flex justify-between px-2 md:px-10 md:px-60 mt-10">
                    <div className="">
                        <img src={cilhouse} alt="" className="w-12 h-12 md:w-[5rem] md:h-[5rem]" />
                        <div className="text-white text-sm md:w-44">It is a long established fact that a reader will be distracted by the readable content of a page whenthers. </div>
                        <div className="flex justify-between py-4">
                            <img src={gorjeo} alt="" className="w-10  h-8" />
                            <img src={facebook} alt="" className="w-10  h-8" />
                            <img src={instagram} alt="" className="w-10  h-8" />
                        </div>
                    </div>

                    <div className="text-white">
                        <div className="text-sm md:text-2xl">About Us</div>
                        <div>About</div>
                        <div>Privacy & Policy</div>
                        <div>Terms & Conditions</div>
                    </div>

                    <div className="text-white">
                        <div className="text-sm md:text-2xl">Navigate</div>
                        <div>How we work</div>
                        <div>Services</div>
                        <div>Faq</div>
                        <div>Contac</div>
                        <div>Free Quote</div>
                    </div>

                    <div className="text-white">
                        <div className="text-sm md:text-2xl">Contact Us</div>
                        <div>Ricardo Margain 444</div>
                        <div>Call +55 81 1234 5678</div>
                        <div>Email: info@challenge.com</div>
                        <div className="flex justify-between py-4">
                            <img src={whats} alt="" className="w-18 h-6 md:w-full md:h-12" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer;