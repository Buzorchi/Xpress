import React from "react";
import logo from "../images/LOGO.png"
import Input from "./input";
// import Button from './Button';
// import Header from "./Header";

function Signin() {
    const handleChange = () => {

    }
    return (
        <>
            <div>
                <div className="flex justify-between mt-[72px] mx-[120px] mb-[10px]">
                    <div>
                        <img className="w-[143.34px] h-[30px]" src={logo} />
                    </div>
                    <div className="flex flew-row items-center w-[258px] h-[42px] gap[8px] ">
                        <p className="w-[171px] h-[17px] font-normal text-sm text-[#606060]">
                            New to Xpress Rewards?
                        </p>
                        <button className=" rounded border-[1px] border-[#039BF0] font-bold text-sm py-[8px] px-[12px] text-[#039BF0]">
                            Sign up
                        </button>
                    </div>
                    </div>
                    </div>

                    {/* <div className="pb-20"> */}
                    <div className="mx-auto w-[33rem] mt-[5rem] bg-white shadow-[0px 4px 10px 0px rgba(0, 0, 0, 0.06)] rounded-lg">
                        <div className="flex flex-col py-11 px-10">
                            <div className="border-b-[1px] pb-4 border-[#F5F6F8]">
                                <h1 className='text-[#039BF0] font-medium text-2xl'>Welcome Back!</h1>
                                <p className='text-[#606060] font-normal text-xs'>Sign in to your Xpress reward partner’s dashboard</p>
                            </div>
    
                                {/* <hr className=" mt-5 text-center border-2 text-[#F5F6F8]" /> */}
                            
                        </div>

                        <form action="" className="flex flex-col gap-5 mx-10 mt-[-25px] ">
                            {/* email */}
                            <div>
                                <Input label="Email" type="email" value="" onchange={handleChange} className= "h-[48px] w-[442px]" />
                            </div>
                            {/* password */}
                            <div>
                                <Input label= "Password" type="password" value="" onchange={handleChange} />
                            </div>
                            {/* forgot password */}
                            <div className="flex flex-row gap-4 items-center mt-4"  >
                                <p className="text-[#808080] font-medium text-sm">Forgot Password?
                                </p>
                                <a href="" className='text-[#039BF0]'>Reset it</a>
                            </div>
                            <div>
                    <button className="h-[48px] w-[442px]  rounded border-[1px] border-[#039BF0] bg-[#039BF0]  font-bold text-sm py-[8px] px-[12px] text-[#FFFFFF] mb-7"> Sign in</button> 
                </div>
                        </form>
                    </div>
                
        </>
     )
}

export default Signin