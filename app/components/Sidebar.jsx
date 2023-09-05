"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import menus from '../lib/menus';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }
  return (
    <div className={`bg-app-theme-green min-h-screen ${sidebarOpen ? "w-40" : "w-16"} duration-500 text-white px-4`}>
        <div className="py-3 flex justify-end -mr-3">
            {
                sidebarOpen 
                    ? 
                        <RxCross1 
                            size={24}
                            onClick={toggleSidebar}
                            className=' 
                            text-green-600
                            bg-white
                            p-1
                            -mr-4
                            mt-25
                            rounded-full
                            border
                            border-gray-300
                            shadow-md
                            cursor-pointer'
                        />
                    :
                        <RxHamburgerMenu 
                            size={24} 
                            onClick={toggleSidebar}
                            className=' 
                            text-green-600
                            bg-white
                            p-1
                            -mr-4
                            mt-25
                            rounded-full
                            border
                            border-gray-300
                            shadow-md
                            cursor-pointer' 
                        />
                }
                
        </div>
        <div className="flex items-start">
            <Link href="/">
                <Image src="/Mechanic_Locator_logo.jpg" width={40} height={40} className='shadow-md border border-gray-50 rounded-full'/>
            </Link>
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
            {
                menus?.map((item,id) => (
                    <Link 
                        href={item?.link} 
                        key={id}
                        className='group flex items-center text-sm gap-3 font-medium p-2 hover:bg-white hover:text-app-theme-green rounded-md'
                    >
                        <div>
                            {React.createElement(item?.icon, { size: "20" })}
                        </div>
                        <h2 
                            style={{
                                transitionDelay: `${id + 3}00ms`
                            }}
                            className={`
                                whitespace-pre 
                                duration-500 
                                ${!sidebarOpen && 
                                    "opacity-0 translate-x-28 overflow-hidden"}
                            `}
                        >
                            {item?.title}
                        </h2>
                        <h2
                            className={`
                                    ${sidebarOpen && "hidden"}
                                    absolute
                                    z-50
                                    left-48
                                    bg-white
                                    text-app-theme-green
                                    font-semibold
                                    whitespace-pre
                                    rounded-md
                                    drop-shadow-lg
                                    px-0
                                    py-0
                                    w-0
                                    overflow-hidden
                                    group-hover:px-2
                                    group-hover:py-1
                                    group-hover:left-14
                                    group-hover:duration-300
                                    group-hover:w-fit
                            `}
                        >
                            {item?.title}
                        </h2>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar
