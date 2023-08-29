import React from "react";
import logo from "../images/LOGO.png"

function Header() {
    return (
        <div className="flex justify-between mt-[4.5rem] mx-[120px]">
            <div>
                <img className="w-[8.959rem] h-7" src={logo} />
            </div>
            <div className="flex flew-row items-center w-64 h-[2.625rem] gap-2 ">
                <p className="w-[10.688ren] h-[1.063rem] font-normal text-sm text-[#606060]">
                    Already have an account?
                </p>
                {/* {
                buttonText === 'Sign in' ? (
                <Link to="/signin">
                    <button className="border-[1px] border-solid border-[#039bf0] text-[#039BF0] py-2 px-4 rounded text-sm font-bold">
                        {buttonText}
                    </button>
                </Link>
                ):(
                    <Link to="/">
                        <button className="border-[1px] border-solid border-[#039bf0] text-[#039BF0] py-2 px-4 rounded text-sm font-bold">
                            {buttonText}
                        </button>
                    </Link>
                )
            } */}
                <button className=" rounded border-[0.063rem] border-[#039BF0] font-bold text-sm py-2 px-3 text-[#039BF0]">
                    Sign in
                </button>
            </div>
        </div>
    )
}
export default Header