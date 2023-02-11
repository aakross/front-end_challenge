import { useState } from "react";
import cilhouse from '../images/cil_house.svg'

function Header() {

    return (
        <>

            <div className="w-full md:h-full bg-[#FD9255] flex justify-between md:px-80">
                <div className="py-10 md:py-2 cursor-pointer">
                    <img src={cilhouse} alt="" className="w-10 md:w-full md:h-[5rem]" />
                </div>
                <div className="text-white uppercase text-md flex py-10 justify-between ">
                    <div className="px-2 md:px-5 cursor-pointer"> How we work</div>
                    <div  className="px-2 md:px-5 cursor-pointer"> Services</div>
                    <div  className="px-2 md:px-5 cursor-pointer"> Free quote</div>
                    <div  className="px-2 md:px-5 cursor-pointer"> Contac</div>
                </div>

            </div>

        </>
    )
}
export default Header;