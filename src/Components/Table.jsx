import React from 'react'
import box from "../images/Icon-rectangle.png"
import action from "../images/Icon-more.png"
// const Table = ({ firstName, lastName, phoneNumber, location, status, actions, partner }) 
const Table = () => {
    return (
        <>
            <div>

                <div className="w-[1120px]  bg-white mx-10 mt-32 rounded ">
                    <table className="w-full text-sm text-left    text-[#1A1619] font-normal self-stretch">
                        <thead className="text-[#1A1619] font-bold text-sm  border-b-2 border-solid border-[#EBEFF2]">
                            <tr>
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Partner
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#27A713]  ">
                                    Active
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#f90]">
                                    Awaiting approval
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#27A713]">
                                    Active
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#F00]">
                                    Deactivated
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#27A713]">

                                    Active
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#F90]">
                                    Awaiting approval
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#27A713]">
                                    Active
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#F00] ">
                                    Deactivated
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="px-6 py-4 text-[#F90]">
                                    Awaiting approval
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                            <tr class="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                                <th>
                                    <img src={box} alt="" className="px-5 py-1" />
                                </th>
                                <td className="px-6 py-4">
                                    Temitope
                                </td>
                                <td className="px-6 py-4">
                                    Adejumoke
                                </td>
                                <td className="px-6 py-4">
                                    +234800 000 0000
                                </td>
                                <td className="px-6 py-4">
                                    The Place
                                </td>
                                <td className="px-6 py-4">
                                    Festac
                                </td>
                                <td className="rounded-lg bg-[#27A713] bg-opacity-10 text-[#27A713] px-2 py-1 w-[42px] h-[17px]">
                                  <span className='bg-red-800 text-white px-3 py-1 rounded'>
                                    Active

                                  </span>
                                </td>
                                <td className="px-6 py-4">
                                    <img src={action} alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table
