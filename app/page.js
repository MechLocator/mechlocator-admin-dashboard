"use client"

import React from 'react';
import { FaDownload, FaUserAlt } from 'react-icons/fa';

import { HiMail } from "react-icons/hi"
import { IoChatbubbleSharp } from "react-icons/io5"
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import StackedChart from './components/StackedChart';
import Users from './components/Users';

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-evenly space-x-4 mt-6'>
        <div 
          className="
            flex
            w-fit 
            rounded-md 
            shadow-md 
            bg-white border 
            border-gray-100
              p-4
            "
        >
          {/* Icon & Downloads Flex Column */}
          <div className="flex flex-col items-start align-top justify-start mx-6">
            <FaDownload size={20} />
            <p className="text-sm font-light">Downloads</p>
          </div>
          {/* Quantity Container */}
          <div className="flex items-center align-middle justify-center">
            <p className="text-4xl font-semibold">4K</p>
          </div>
        </div>
        <div 
          className="
            flex
            w-fit 
            rounded-md 
            shadow-md 
            bg-white border 
            border-gray-100
              p-4
            "
        >
          {/* Icon & Users Flex Column */}
          <div className="flex flex-col items-start align-top justify-start mx-6">
            <FaUserAlt size={20} />
            <p className="text-sm font-light">Users</p>
          </div>
          {/* Quantity Container */}
          <div className="flex items-center align-middle justify-center">
            <p className="text-4xl font-semibold">34K</p>
          </div>
        </div>
        <div 
          className="
            flex
            w-fit 
            rounded-md 
            shadow-md 
            bg-white border 
            border-gray-100
              p-4
            "
        >
          {/* Icon & Reviews Flex Column */}
          <div className="flex flex-col items-start align-top justify-start mx-6">
            <IoChatbubbleSharp size={20} />
            <p className="text-sm font-light">Reviews</p>
          </div>
          {/* Quantity Container */}
          <div className="flex items-center align-middle justify-center">
            <p className="text-4xl font-semibold">35</p>
          </div>
        </div>
        <div 
          className="
            flex
            w-fit 
            rounded-md 
            shadow-md 
            bg-white border 
            border-gray-100
              p-4
            "
        >
          {/* Icon & Messages Flex Column */}
          <div className="flex flex-col items-start align-top justify-start mx-6">
            <HiMail size={20} />
            <p className="text-sm font-light">Messages</p>
          </div>
          {/* Quantity Container */}
          <div className="flex items-center align-middle justify-center">
            <p className="text-4xl font-semibold">200</p>
          </div>
        </div>
      </div>
      {/* Parent (Div 1) */}
      <div
        className='flex items-center justify-around mt-10 border-gray-50'
      >
        {/* Columns for Line Chart and Bar & Pie Charts */}
        <div className="flex flex-col h-screen border border-gray-50 w-3/5 mx-2 my-6">
          {/* Line Chart */}
          <div className="border h-2/3 my-4 pl-3 bg-white border-gray-200 drop-shadow-lg rounded-md">
            <LineChart />
          </div>
          {/* Bar & Pie Charts */}
          <div className="flex h-1/3 items-center justify-center space-x-2 mt-4 mb-4">
            {/* Bar Chart */}
            <div className="border h-fit w-full bg-white border-gray-100 drop-shadow-lg rounded-md">
              <BarChart />
            </div>
            {/* Pie Chart */}
            <div className="border h-fit w-full bg-white border-gray-100 shadow-lg rounded-md">
              <StackedChart />
            </div>
          </div>
        </div>
        <div className="h-screen border w-2/5 p-2 mx-2 my-2 bg-white border-gray-300 shadow-lg rounded-md">
          <Users />
        </div>
      </div>
    </>
    
  )
}

export default Home
