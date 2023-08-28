import React from "react";
import pending from "../images/Icon-Pending.png"
function Pending() {
    return (
        <>
            <div className=" justify-center w-[442px] h-[344px] rounded-lg bg-[#FFFFFF] shadow-[0 4px 10px 0 rgb(0 0 0/0.36%)] flex flex-col pt-10 ">
            <div>
                <img src={pending} alt="pending-icon" className="w-[68px] h-[68px]  ml-[187px]" />
            </div>
            <div>
                <p className="px-[165px] pt-4 font-medium text-2xl text-[#FF9900] text-center ">Pending</p>
            </div>
            <div>
                <p className="pl-[47px] pt-7 font-normal text-center text-[#1A1619] w-[349px] text-sm  ">Your registration is awaiting approval from our partnership team</p>
            </div>
            <div className="pt-10">
                <button className="bg-[#039BF0] w-[362px] h-[56px] mx-10 text-white focus:shadow-[0 2px 8px 0 rgba(0 0 0 /2.25%)       ">Done</button>
            </div>
            </div>
        </>
    )
}
export default Pending