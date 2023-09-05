"use client"

import React from 'react';
import { FaDownload, FaUserAlt } from 'react-icons/fa';
import WeeklyDownloadsPie from "../components/WeekDownloadsPie"
import MonthlyDownloadsPie from "../components/MonthlyDownloadsPie"
import UsersPie from "../components/UsersPie"
import DownloadsLineChart from "../components/DownloadsLineChart"
import UsersStackedChart from '../components/UsersStackedChart';
import ServerActivityChart from '../components/ServerActivityChart';
const Charts = () => {
  return (
    <>
      <div className='flex items-center justify-evenly space-x-4 mt-6'>
        <div 
            className="
              flex
              items-center
              justify-center
              space-x-3
              w-fit
              h-fit 
              rounded-md 
              drop-shadow-lg 
              bg-white border 
              border-gray-100
              py-2
              px-4
              "
          >
            <div className="flex flex-col h-32 justify-start">
              {/* Download Icon & Description Container */}
              <div className="flex items-center justify-center space-x-2 gap-1 mb-2">
                <FaDownload size={20} />
                <p className="text-sm text-gray-400">Weekly Downloads</p>
              </div>
              <h3 className="text-3xl font-semibold">2K</h3>
            </div>
            <div>
              {/* DoghnurtChart */}
              <WeeklyDownloadsPie />
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
              drop-shadow-lg 
              bg-white border 
              border-gray-100
              py-2
              px-4
              "
          >
            <div className="flex flex-col h-32 justify-start">
              {/* Download Icon & Description Container */}
              <div className="flex items-center justify-center space-x-2 gap-1 mb-2">
                <FaDownload size={20} />
                <p className="text-sm text-gray-400">Monthly Downloads</p>
              </div>
              <h3 className="text-3xl font-semibold">25K</h3>
            </div>
            <div>
              {/* DoghnurtChart */}
              <MonthlyDownloadsPie />
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
              drop-shadow-lg 
              bg-white border 
              border-gray-100
              py-2
              px-4
              "
          >
            <div className="flex flex-col h-32 justify-start">
              {/* Download Icon & Description Container */}
              <div className="flex items-center justify-center space-x-2 gap-1 mb-2">
                <FaUserAlt size={20} />
                <p className="text-sm text-gray-400">Users</p>
              </div>
              <h3 className="text-3xl font-semibold">12K</h3>
            </div>
            <div>
              {/* DoghnurtChart */}
              <UsersPie />
            </div>
        </div>
      </div>
      {/* Line Chart */}
      <div className="flex items-center justify-evenly space-x-4">
        <div className="w-1/2 h-fit border-gray-100 rounded-md bg-white drop-shadow-lg p-2 mt-6 mx-2">
          <DownloadsLineChart />
        </div>
        <div className="w-1/2 h-fit border-gray-100 rounded-md bg-white drop-shadow-lg p-2 mt-6 mr-4">
          <UsersStackedChart />
        </div>
      </div>
      <div className="w-2/3 h-fit flex items-center justify-center border-gray-100 rounded-md bg-white drop-shadow-lg px-2 mx-6 my-6">
          <ServerActivityChart />
      </div>
    </>
  )
}

export default Charts
