import React from "react";
import logo from "../images/LOGO.png"
import verify from "../images/Vector (1).png"
import deals from "../images/Deals.png"
import transaction from "../images/Icon-Transactions.png"
import notification from "../images/Shape.png"
import profilePic from "../images/Profile-Picture.png"
import redDot from "../images/Red-dot.png"
import action from "../images/Icon-more.png"
import { users } from "./UserData";
import { UserStatus } from "./UserStatus";
import dropdown from "../images/chevron-down.png"
import Input from "./input";
import Table from "./Table"




const Dashboard = () => {
  return (
    <>
      <div className="flex">
        {/* left div */}
        <div className="w-[16rem] h-[60rem] bg-white">
          <img src={logo} alt="xpress-logo" className="mt-10 mx-[1.5rem] h-[1.875rem] w-[8.938rem] " />
          <div className=" border-l-4 border-l-[#039bf0] inline-flex  items-center gap-4 mx-6 mt-10 w-[10rem] h-[3rem] pr-0 bg-[#F2FAFF] rounded-lg ">
            <img src={verify} alt="" className="pl-8" />
            <p className="text-[#039BF0] text-sm ">Verifiers</p>
          </div>
          {/* deal */}
          <div className="inline-flex  items-center gap-4 mx-6 mt-5  w-[10rem] h-[3rem]">
            <img src={deals} alt="deals-icon" className="pl-8" />
            <p className="text-sm text-[#1A1619]">Deals</p>
          </div>
          <div className="inline-flex  items-center gap-4 mx-6 mt-5  w-[10rem] h-[3rem]">
            <img src={transaction} alt="transaction-icon" className="pl-8" />
            <p className="text-sm text-[#1A1619] ">Transaction</p>
          </div>
        </div>
        {/* right div */}
        <div className="w-[74rem] h-[5.5rem] bg-white px-10 ">
          <div className="flex justify-between bg-white h-[5.5rem]">
            <div className="  pt-7 flex  gap-3 ">
              <p className="text-[#1A1619] text-2xl font-bold">Verifiers</p>
              <p className="rounded-full bg-[#F2FAFF] text-[#039BF0] w-6 h-6">11</p>
            </div>
            <div className="flex pt-7 pb-7 items-center  ">
              <div className="relative ">
                <img src={notification} alt="notification-bell" className="w-5 h-6 mr-5 " />
                <img src={redDot} alt="" className="absolute top-1 right-5" />
              </div>
              <div className=" gap-2 inline-flex items-center ">
                <img src={profilePic} alt="profile-pic" />
                <img src={dropdown} alt="" className="" />
              </div>
            </div>
          </div>
          {/* all btn */}
          <div className="flex mt-14 justify-between ">
            <select id="countries" className="bg-white border-[#C4C4C4] border-solid border text-[#1A1619] text-sm rounded w-[13rem] h-[3rem] focus:ring-[#039BF0] focus:border-[#039BF0] block  placeholder-[#1A1A1A]">
              <option >All</option>
              <option value="">Active Verifiers</option>
              <option value="">Pending Verifiers</option>
              <option value="">Deactivated Verifiers</option>
            </select>
            {/* search btn */}
            <div>
              <form className="mr-[-10rem]" >
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-6 h-6 text-[#808080] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className=" pt-3 pl-11 pb-3.5 gap-20 pr-2 text-sm font-normal text-gray-900  border-2 border-solid border-[#EEE] rounded-lg bg-white focus:ring-[#039BF0] focus:border-[#039BF0]  dark:border-gray-600 placeholder-[#C4C4C4] dark:text-white dark:focus:ring-[#039BF0] dark:focus:border-[#039BF0]" placeholder="Name/Phone no/ Location" required />
                </div>
              </form>
            </div>
            <div className="inline-flex p-3 justify-center items-center gap-4 bg-[#039BF0] rounded w-[] h-12 ">
              <button className="inline-flex p-3 items-center justify-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Icon-add">
                    <path id="Vector" d="M12 5V19M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <p className="text-white font-normal text-sm w-[112px] ">Add New Verifier</p>
              </button>
            </div>
          </div>
          {/* table */}
          <Table/>
          {/* <table className="text-sm text-left bg-white mt-10 w-full  text-[#1A1619] font-normal ">
            <thead className="text-[#1A1619] font-bold text-sm  border-b-2 border-solid border-[#EBEFF2]">
              <tr>
                <th className="w-16 py-1 px-6 pb-3">
                  <Input type="checkbox" className=" text-blue-600 " />
                </th>
                <th className="px-3 py-3">First Name</th>
                <th className="px-3 py-3">Last Name</th>
                <th className="px-3 py-3">Phone Number</th>
                <th className="px-3 py-3">Partner</th>
                <th className="px-3 py-3">Location</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b-2 border-solid border-[#EBEFF2] text-[#1A1619] font-normal text-sm ">
                  <td className="w-16 py-1 px-6 pb-3"><Input type="checkbox"  className=" text-blue-600 "/></td>
                  <td className="px-3 py-3">{user.firstName}</td>
                  <td className="px-3 py-3">{user.lastName}</td>
                  <td className="px-3 py-3">{user.phoneNumber}</td>
                  <td className="px-3 py-3">{user.partner}</td>
                  <td className="px-3 py-3">{user.location}</td>
                  <td className=""><UserStatus status={user.status} /></td>
                  <td className="px-6 py-4">
                    <img src={action} alt="" />                               
                    </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {/* pagination */}
          <div className="inline-flex justify-between w-full bg-white">
              <div className="inline-flex " >
                <div className="   rounded h-16 py-6 px-6">
                  <p className="text-xs font-normal text-[#808080] w-[5.438rem] ">Rows per page</p>
                </div>
                <div className="py-4">
                  <select id="countries" className=" bg-white border-[#C4C4C4] border-solid border text-[#1A1619] text-xs rounded placeholder-[#1A1A1A]">
                    <option>1</option>
                     <option>2</option> 
                    <option>3</option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              {/* breadscrumb */}
              <div>
                <nav className="ml-[-13.125rem] py-6">
                  <ol class="list-reset flex">
                    <li>
                      <a
                        href="#"
                        class="mr-3 text-[#4A4A4A] font-normal text-xs transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                      >Previous</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="mr-3 text-[#039BF0] font-normal text-xs transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                      >1</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="mr-3 text-[#4A4A4A] font-normal text-xs transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                      >2</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="mr-3 text-[#039BF0] font-normal text-xs transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                      >Next</a
                      >
                    </li>
                  </ol>
                </nav>
              </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard
