"use client"

import React from 'react'
import DownloadsPerPlatformLineChart from '../components/DownloadsPerPlatformLineChart';
import LatencyBarChart from '../components/LatencyBarChart';
import DataIOBarChart from '../components/DataIOBarChart';
import UserRegistrationChart from '../components/UserRegistrationChart';
import WeeklyIphoneDownloadsPie from '../components/WeeklyIphoneDownloadsPie';
import { FaServer } from 'react-icons/fa';
import WeeklyAndroidDownloadsPie from '../components/WeeklyAndroidDownloadsPie';

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-fit">
        <div className=' border-gray-100 drop-shadow-lg bg-white rounded-md w-1/2 m-2'>
          <DownloadsPerPlatformLineChart />
        </div>
        <div className=' border-gray-100 drop-shadow-lg bg-white rounded-md w-1/2 m-2'>
          <UserRegistrationChart />
        </div>
      </div>
      <div className="flex items-center justify-around space-x-3 w-full h-fit my-10">
        <div 
              className="
                flex
                items-center
                justify-center
                space-x-3
                w-fit
                h-fit
                rounded-md
                border
                border-gray-200 
                py-2
                px-4
                "
            >
              <div className="flex flex-col h-32 justify-start">
                {/* Download Icon & Description Container */}
                <div className="flex items-center justify-center space-x-2 gap-1 mb-2">
                  <FaServer size={20} />
                  <p className="text-sm text-gray-400">iPhone Downloads</p>
                </div>
              </div>
              <div>
                {/* DoghnurtChart */}
                <WeeklyIphoneDownloadsPie />
              </div>
        </div>
        <div 
              className="
                flex
                items-center
                justify-center
                space-x-3
                w-fit
                h-fit
                rounded-md
                border
                border-gray-200 
                py-2
                px-4
                "
            >
              <div className="flex flex-col h-32 justify-start">
                {/* Download Icon & Description Container */}
                <div className="flex items-center justify-center space-x-2 gap-1 mb-2">
                  <FaServer size={20} />
                  <p className="text-sm text-gray-400">Android Downloads</p>
                </div>
              </div>
              <div>
                {/* DoghnurtChart */}
                <WeeklyAndroidDownloadsPie />
              </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-fit">
          <div className=' border-gray-100 drop-shadow-lg bg-white rounded-md w-1/2 m-2'>
            <LatencyBarChart />
          </div>
          <div className=' border-gray-100 drop-shadow-lg bg-white rounded-md w-1/2 m-2'>
            <DataIOBarChart />
          </div>
        </div>
    </>  
  )
};

export default page
