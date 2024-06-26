"use client"
import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBeer, faHome, faTimes } from '@fortawesome/free-solid-svg-icons'

const Page = () => {
    const [collapseShow, setCollapseShow] = useState("hidden");
    // const [isActive, setIsActive] = useState(false);
    // const [textColor, setTextColor] = useState("#344155")
    // const [bgColor, setBgColor] = useState("#fff")

    // const handleClick = () => {
    //     setTextColor("white")
    //     setBgColor("#1D293B")
    //     setIsActive(!isActive);
    // }
    return (
        <>
            <nav className='md:left-0 md:right-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap 
            md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between 
                w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-dark rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {/* Brand */}
                    <Link
                        href="/"
                        className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                        Admin MMI
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            {/* <NotificationDropdown /> */}
                        </li>
                        <li className="inline-block relative">
                            {/* <UserDropdown /> */}
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        href="/"
                                        className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm 
                                    uppercase font-bold p-4 px-0">
                                        Admin MMI
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-dark rounded border border-solid"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Admin Layout Pages
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none text-dark">
                            <li className="items-center hover:bg-gray-700 hover:text-white rounded-md active:bg-gray-700 active:text-white focus:outline-none focus:ring focus:ring-violet-300">
                                <Link href="/components/form" className='text-xs uppercase py-3 font-bold block'>
                                    <i className=' mr-2 text-sm text-blue-300'></i>Form Input
                                </Link>
                            </li>
                            <li className="items-center hover:bg-gray-700 hover:text-white rounded-md">
                                <Link href={"/components/table"} className='text-xs uppercase py-3 font-bold block'>
                                    <i className='fas fa-tv mr-2 text-sm text-blue-300'></i>Table
                                </Link>
                            </li>
                            <li className="items-center hover:bg-gray-700 hover:text-white rounded-md">
                                <Link href={"/components/map"} className='text-xs uppercase py-3 font-bold block'>
                                    <i className='fas fa-tv mr-2 text-sm text-blue-300'></i>Map
                                </Link>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* </ul> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Page;
