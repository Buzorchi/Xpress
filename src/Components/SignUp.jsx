import React, { useState } from 'react'
import logo from "../images/LOGO.png"
import vector from "../images/Vector.png"
import attachment from "../images/attachment.png"
import Input from "./input";

const Signup = () => {
    const [step, setStep] = useState(1)

    const [formHandler, setFormHandler] = useState({
        busName: "",
        busEmail: "",
        busTel: "",
        busCat: "",
        acctNo: "",
        husNo: "",
        street: "",
        city: "",
        state: "",
        contName: "",
        contTel: "",
        contEmail: "",
        contAddress: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormHandler((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formHandler)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formHandler);
    };


    return (
        <>
            <div className="flex justify-between mt-[4.5rem] mx-[7.5rem]">
                <div>
                    <img className="w-[143.34px] h-[30px]" src={logo} />
                </div>
                <div className="flex flew-row items-center w-[16.125rem] h-[2.625rem] gap-2 ">
                    <p className="w-[10.688rem] h-[1.063rem] font-normal text-sm text-[#606060]">
                        Already have an account?
                    </p>
                    <button className=" rounded border-[1px] border-[#039BF0] font-bold text-sm py-2 px-3 text-[#039BF0]">
                        Sign in
                    </button>
                </div>
            </div>

            <div className="w-[32.625rem] mt-[7.625rem] mx-auto bg-white shadow-[0 4px 10px 0 rgb(0 0 0/ 0.36%)] rounded-lg px-10 pt-6 pb-8 mb-4">
                <div >z
                    <p className="w-[20.938rem] h-8  font-medium text-2xl leading-7 text-[#039BF0]">Welcome to Xpress Rewards</p>
                    <p className="w-[27.625rem] h-[1.125rem] mt-0.5 font-sm text-xs text-[#606060]  ">Complete the form below to get started</p>
                </div>
                <hr className=" mt-5 text-center border-2 text-[#F5F6F8]" />

                <form className="bg-white shadow-[0 4px 10px 0 rgb(0 0 0/ 0.36%)] rounded-lg"
                    onClick={handleSubmit}
                >


                    {
                        step === 1 && (
                            <>
                                <div className="mb-4">
                                    <p className=" text-[#039BF0] text-sm font-medium  mt-10">Business Information</p>
                                </div>
                                {/* business name */}
                                <div>
                                    <Input
                                        label="Business Name"
                                        type="text"
                                        value={formHandler.busName}
                                        name="busName"
                                        onChange={handleChange} />
                                </div>

                                {/* business email address */}
                                <div>
                                    <Input
                                        label="Business Email Address"
                                        type="email"
                                        value={formHandler.busEmail}
                                        name="busEmail"
                                        onChange={handleChange} />
                                </div>
                                {/* business phone number */}
                                <div>
                                    <Input
                                        label="Business Phone Number"
                                        type="tel"
                                        value={formHandler.busTel}
                                        name="busTel"
                                        onChange={handleChange} />
                                </div>
                                {/* business category */}
                                <div>
                                    <label className=" mt-3 block text-[#1A1619] text-sm font-medium" htmlFor="businessEmailAddress">
                                        Business Category
                                    </label>
                                    <select name="busCat" onChange={handleChange} className="shadow appearance-none border border-[#CCCCCC] rounded-sm w-full leading-tight focus:outline-none focus:shadow-outline" id="username" type="" placeholder=""  >
                                        <option value={formHandler.busCat}></option>
                                        <option value={formHandler.busCat}>Private</option>
                                        <option value={formHandler.busCat}>Corperate</option>
                                        <option value={formHandler.busCat}>Others</option>
                                    </select>
                                </div>
                                {/* account number */}
                                <div>
                                    <Input
                                        label="Account Number"
                                        type="tel"
                                        value={formHandler.acctNo}
                                        name="acctNo"
                                        onChange={handleChange} />
                                </div>
                                {/* image logo */}
                                <div className="flex flex-col gap-1 mt-3">
                                    <label htmlFor="" className="text-[#1A1619] font-medium text-sm">Image(Logo)</label>
                                    <div className="border-dashed border-[1px] border-[#ABA7AF] py-8 px-12 flex flex-col items-center gap-5">
                                        <img src={vector} alt="" className="w-10" />
                                        <span className="text-[#1A141F] font-normal text-xs">Drag here or click the button below to upload </span>
                                        <input type="file" id='files' className="hidden" />
                                        <label htmlFor="files" className="border-[1px] border-[#039BF0] bg-[#039BF0] py-1 px-3 text-white rounded">
                                            <img src={attachment} alt="" className="inline mr-3" />
                                            Choose file
                                        </label>
                                        <span className="text-[#4B3A5A] text-sm font-normal">Maximum upload size: 10MB (.jpg)</span>
                                    </div>
                                </div>
                                {/* next button */}
                                <div className="flex items-center gap-6 mt-10">
                                    <button className="bg-[#039BF0]  hover:bg-blue-400 text-white font-medium py-4 px-16 rounded focus:outline-none focus:shadow-[0 2px 8px 0 rgba(0 0 0 /2.25%)]" onClick={() => setStep(2)}>
                                        Next
                                    </button>
                                    <p className="inline-block align-baseline font-medium text-sm text-[#808080] hover:text-gray-300">
                                        Step 1 0f 2
                                    </p>
                                </div>
                            </>
                        )
                    }
                    {
                        step === 2 && (
                            <>
                                <div className="mb-4"> <p className=" text-[#039BF0] text-sm font-medium  mt-5">Business Address</p>
                                </div>

                                {/* house number and street */}
                                <div className="flex gap-3">
                                    <Input
                                        label="House Number"
                                        type="text"
                                        value={formHandler.husNo}
                                        name="husNo"
                                        onChange={handleChange} className="w-[8rem]" />
                                    <Input
                                        label="Street"
                                        type="text"
                                        value={formHandler.street}
                                        name="street"
                                        onChange={handleChange} className="w-[16rem]" />
                                </div>
                                {/* city and state*/}
                                <div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Input
                                            label="City"
                                            type="text"
                                            value={formHandler.city}
                                            name="city"
                                            onChange={handleChange} />
                                        <div className="flex flex-col gap-1">
                                            <label className=" mt-3 block text-[#1A1619] text-sm font-medium" htmlFor="businessEmailAddress">
                                                State
                                            </label>
                                            <select name="state" value={formHandler.state} onChange={handleChange} className="shadow appearance-none border border-[#CCCCCC] rounded-sm w-[215px] leading-tight focus:outline-none focus:shadow-outline" id="username" type="" placeholder="" >
                                                <option value={formHandler.street}></option>
                                                <option value={formHandler.street}>Lagos</option>
                                                <option value={formHandler.street}>Anambra</option>
                                                <option value={formHandler.street}>Kaduna</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* contact name */}
                                    <div className="mb-6">
                                        <p className=" text-[#039BF0] text-sm font-medium  mt-5">Contact Person Information</p>
                                        <div>
                                            <Input
                                                label="Contact Name"
                                                type="text"
                                                value={formHandler.contName}
                                                name="contName" onChange={handleChange} />
                                        </div>
                                    </div>
                                    {/* Contact Phone Number */}
                                    <div>
                                        <Input
                                            label="Contact Phone Number"
                                            type="tel"
                                            value={formHandler.contTel}
                                            name="contTel"
                                            onChange={handleChange} />
                                    </div>
                                    {/* Contact Email Address */}
                                    <div>
                                        <Input
                                            label="Contact Email Address"
                                            type="email"
                                            value={formHandler.contEmail}
                                            name="contEmail"
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                {/* password and Confirm Password */}
                                <div className="mb-4"> <p className=" text-[#039BF0] text-sm font-medium  mt-5">Password</p>
                                </div>
                                <div>
                                    <Input
                                        label="Password"
                                        type="password"
                                        value={formHandler.password}
                                        name="password"
                                        onChange={handleChange} />
                                </div>
                                <div>
                                    <Input
                                        label="Confirm Password"
                                        type="password"
                                        value={formHandler.confirmPassword}
                                        name="confirmPassword"
                                        onChange={handleChange} />
                                </div>
                                {/* submit */}
                                <div className="flex items-center gap-6 mt-10">
                                    <button className="bg-[#039BF0]  hover:bg-blue-400 text-white font-medium py-4 px-16 rounded focus:outline-none focus:shadow-[0 2px 8px 0 rgba(0 0 0 /2.25%)] ">
                                        Submit
                                    </button>
                                    <p className="inline-block align-baseline font-medium text-sm text-[#808080] hover:text-gray-300">
                                        Step 2 0f 2
                                    </p>
                                </div>
                            </>
                        )
                    }
                </form>
            </div >
        </>
    )
}
export default Signup
