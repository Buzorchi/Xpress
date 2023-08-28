import React from "react";
import logo from "../images/LOGO.png"

function Header() {
    return (
        <div className="flex justify-between mt-[72px] mx-[120px]">
            <div>
                <img className="w-[143.34px] h-[30px]" src={logo} />
            </div>
            <div className="flex flew-row items-center w-[258px] h-[42px] gap[8px] ">
                <p className="w-[171px] h-[17px] font-normal text-sm text-[#606060]">
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
                <button className=" rounded border-[1px] border-[#039BF0] font-bold text-sm py-[8px] px-[12px] text-[#039BF0]">
                    Sign in
                </button>
            </div>
        </div>
    )
}
export default Header