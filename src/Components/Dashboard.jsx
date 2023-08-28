import React from "react";
import logo from "../images/LOGO.png"
import verify from "../images/Vector (1).png"
import deals from "../images/Deals.png"
import transaction from "../images/Icon-Transactions.png"
import notification from "../images/Shape.png"
import profilePic from "../images/Profile-Picture.png"
import redDot from "../images/Red-dot.png"
import Table from "./table";
import dropdown from "../images/chevron-down.png"





const Dashboard = () => {
  return (
    <>
      <div className="flex w-[1140px] h-[960px] bg-[#F5F6F8]">

        {/* left div */}
        <div className="w-[256px]  bg-white shadow-[0px 4px 10px 0px rgba(0, 0, 0, 0.06)]" >
          <div className="pt-10  mx-[56px] ">
            <img src={logo} alt="xpress-logo" className="w-[143.34px] h-[30px]" />
          </div>
          {/* verify */}
          <div className=" border-l-4 border-l-[#039bf0] inline-flex  items-center gap-4 mx-6 mt-10 w-[208px] h-[48px] bg-[#F2FAFF] rounded-lg ">
            {/* <hr className="w-1 h-12 bg-[#039BF0] "/> */}
            <img src={verify} alt="" className="pl-8" />
            <p className="text-[#039BF0] text-sm ">Verifiers</p>
          </div>
          {/* deal */}
          <div className="inline-flex  items-center gap-4 mx-6 mt-5 w-[208px] h-[48px]">
            <img src={deals} alt="deals-icon" className="pl-8" />
            <p className="text-sm text-[#1A1619]">Deals</p>
          </div>
          <div className="inline-flex  items-center gap-4 mx-6 mt-5 w-[208px] h-[48px]">
            <img src={transaction} alt="transaction-icon" className="pl-8" />
            <p className="text-sm text-[#1A1619] ">Transaction</p>
          </div>
        </div>
        {/* right div */}
        <div>
          {/* header */}
          <div className="bg-white h-[88px] ">
            <div className="flex justify-between mr-[65px] ">
              <div className="w-[133px] h-[29px] px-9 pt-7 flex  gap-3 ">
                <p className="text-[#1A1619] text-2xl font-bold">Verifiers</p>
                <p className="rounded-full bg-[#F2FAFF] text-[#039BF0] w-[24px] h-[24px]">11</p>
              </div>
              <div className="flex pt-7 items-center  ">
                <div className="relative ">
                  <img src={notification} alt="notification-bell" className="w-[21px] h-[25px] mr-5 " />
                  <img src={redDot} alt="" className="absolute top-1 right-5" />
                </div>
                <div className=" gap-2 inline-flex items-center mr-[-40px]">
                  <img src={profilePic} alt="profile-pic" />
                  <img src={dropdown} alt="" className="w-6 h-6 " />
                </div>
              </div>
            </div>
            {/* all */}
            <div className="flex mt-14 justify-between">
              <select id="countries" className="bg-white px-5 py-2.5 ml-10 border-[#C4C4C4] border-solid border text-[#1A1619] text-sm rounded w-[212px] h-[48px] focus:ring-[#039BF0] focus:border-[#039BF0] block  placeholder-[#1A1A1A]">
                <option >All</option>
                <option value="">Active Verifiers</option>
                <option value="">Pending Verifiers</option>
                <option value="">Deactivated Verifiers</option>
              </select>
              {/* search btn */}
              <div>
                <form className="" >
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative w-60 h-12 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-6 h-6 text-[#808080] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="default-search" className=" pt-3 pl-11 pb-3.5 gap-20 pr-2 text-sm font-normal text-gray-900  border-2 border-solid border-[#EEE] rounded-lg bg-white focus:ring-[#039BF0] focus:border-[#039BF0]  dark:border-gray-600 placeholder-[#C4C4C4] dark:text-white dark:focus:ring-[#039BF0] dark:focus:border-[#039BF0]" placeholder="Name/Phone no/ Location" required />
                  </div>
                </form>

              </div>
              {/* add btn */}
              <div className="inline-flex p-3 justify-center items-center gap-4 bg-[#039BF0] rounded w-[168px] h-[48px] ml-[-450px] mr-10 ">
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
          </div>
          {/* table head*/}
          <div>
            <Table />
            <div className="inline-flex justify-between">
              <div className="inline-flex" >
                <div className="w-[1120px]  bg-white mx-10 rounded h-[65px] py-6 px-6">
                  <p className="text-xs font-normal text-[#808080] w-[87px] ">Rows per page</p>
                </div>
                <div className="py-4">
                  <select id="countries" className=" p ml-[-1040px] bg-white border-[#C4C4C4] border-solid border text-[#1A1619] text-xs rounded w-[89px]   placeholder-[#1A1A1A]">
                    <option>10</option>
                    {/* <option value=""></option>
                    <option value=""></option>
                    <option value=""></option> */}
                  </select>
                </div>
              </div>
              {/* breadscrumb */}
              <div>
                <nav className="ml-[-210px] py-6">
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
      </div>
    </>
  )
}

export default Dashboard
