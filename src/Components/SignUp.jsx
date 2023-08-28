import React, { useState } from 'react'
import logo from "../images/LOGO.png"
import vector from "../images/Vector.png"
import attachment from "../images/attachment.png"
import Input from "./input";
import Button from './Button';

const Signup = () => {
    const [step, setStep] = useState(1)

    const [formHandler, setFormHandler] = useState({
        busName:"",
        email:"",
        password:"",
        tel:"",



    })



      
    // const [name, setName] = useState("")
    const handleNameChange= (e)=> {
        e.preventDefault() 
        const {name, value} = e.target
        setFormHandler((formHandler) => ({
            ...formHandler,
            [name]: value,
            
          }));
        
        // setFormHandler({...formHandler, [name]:value})
        console.log(formHandler.name)
        

    }
    const handleChange = (e) => {
        e.preventDefault() 
        const { name, value } = e.target
        setFormHandler((prevData) => ({
            ...prevData,
            [name]: value,
            
          }));
        
        // setFormHandler({...formHandler, [name]:value})
        console.log(formHandler)
    }
    //   const Signup = () => {
    //     const [step, setStep] = useState(1)
    //     const handleChange = () =>{

    //     }

    return (
        <>
            <div className="flex justify-between mt-[72px] mx-[120px]">
                <div>
                    <img className="w-[143.34px] h-[30px]" src={logo} />
                </div>
                <div className="flex flew-row items-center w-[258px] h-[42px] gap[8px] ">
                    <p className="w-[171px] h-[17px] font-normal text-sm text-[#606060]">
                        Already have an account?
                    </p>
                    <button className=" rounded border-[1px] border-[#039BF0] font-bold text-sm py-[8px] px-[12px] text-[#039BF0]">
                        Sign in
                    </button>
                </div>
            </div>

            <div className="w-[522px] mt-[122px] mx-auto bg-white shadow-[0 4px 10px 0 rgb(0 0 0/ 0.36%)] rounded-lg px-10 pt-6 pb-8 mb-4">
                <div >
                    <p className="w-[335px] h-8  font-medium text-2xl leading-7 text-[#039BF0]">Welcome to Xpress Rewards</p>
                    <p className="w-[442px] h-[18px] mt-0.5 font-sm text-xs text-[#606060]  ">Complete the form below to get started</p>
                </div>
                <hr className=" mt-5 text-center border-2 text-[#F5F6F8]" />

                <form className="bg-white shadow-[0 4px 10px 0 rgb(0 0 0/ 0.36%)] rounded-lg"
                // onClick={handleSubmit}
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
                                    // value="" 
                                    name="email" 
                                    onChange={handleChange} />
                                </div>
                                {/* business phone number */}
                                <div>
                                    <Input
                                     label="Business Phone Number" 
                                     type="tel" 
                                     value="" 
                                     name="tel" 
                                     onChange={handleChange} />
                                </div>
                                {/* business category */}
                                <div>
                                    <Input 
                                    label="Business Category" 
                                    type="text"
                                    value=""
                                    name="text" 
                                    onChange={handleChange} />
                                </div>
                                {/* account number */}
                                <div>
                                    <Input 
                                    label="Account Number" 
                                    type="tel" 
                                    value=""
                                    name="tel"
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
                                    value="" 
                                    name="text" 
                                    onChange={handleChange} className="w-[8rem]" />
                                    <Input 
                                    label="Street" 
                                    type="text" 
                                    value="" 
                                    name="text" 
                                    onChange={handleChange} className="w-[16rem]" />
                                </div>
                                {/* city and state*/}
                                <div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Input 
                                        label="City" 
                                        type="text" 
                                        value="" 
                                        name="text" 
                                        onChange={handleChange} />
                                        <div className="flex flex-col gap-1">
                                            <label className=" mt-3 block text-[#1A1619] text-sm font-medium" htmlFor="businessEmailAddress">
                                                State
                                            </label>
                                            <select name="dropdown" className="shadow appearance-none border border-[#CCCCCC] rounded-sm w-[200px] leading-tight focus:outline-none focus:shadow-outline" id="username" type="" placeholder="" >
                                                <option value=""></option>
                                                <option value=""></option>
                                                <option value=""></option>
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
                                            value="" 
                                            name="text" onChange={handleChange} />
                                        </div>
                                    </div>
                                    {/* Contact Phone Number */}
                                    <div>
                                        <Input 
                                        label="Contact Phone Number" 
                                        type="tel" 
                                        value="" 
                                        name="tel" 
                                        onChange={handleChange} />
                                    </div>
                                    {/* Contact Email Address */}
                                    <div>
                                        <Input 
                                        label="Contact Email Address" 
                                        type="email" 
                                        value="" 
                                        name="email" 
                                        onChange={handleChange} />
                                    </div>
                                    {/* password */}
                                    <div>
                                        <Input 
                                        label="Password" 
                                        type="password" 
                                        value="" 
                                        name="password" 
                                        onChange={handleChange} />
                                    </div>

                                </div>
                                {/* Confirm Password */}
                                <div className="mb-4"> <p className=" text-[#039BF0] text-sm font-medium  mt-5">Business Address</p>
                                </div>
                                <div>
                                    <Input 
                                    label="Password" 
                                    type="password" 
                                    value="" 
                                    name="password" 
                                    onChange={handleChange} />
                                </div>
                                <div>
                                    <Input 
                                    label="Password" 
                                    type="password" 
                                    value="" 
                                    name="password" 
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
            </div>
        </>
    )
}
export default Signup
