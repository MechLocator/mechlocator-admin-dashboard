import React from 'react';
import { GiSpanner, GiPin } from "react-icons/gi"
import { BiCloudUpload } from "react-icons/bi"
import { RxUpdate } from "react-icons/rx"
import Image from 'next/image';

const Users = () => {
  return (
    <div className='w-auto cursor-pointer hover:flex-grow h-auto font-extralight text-sm mt-3'>
      {/* Users Tally With Pagination */}
      <div className="w-fit m-2 font-semibold uppercase underline">
        <h4>Showing 1-20 of 200K</h4>
      </div>
      {/* individual user profile info in a container */}
      {/* Assign icons based on account type */}
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit
          p-1
          mb-3 
          border-gray-300 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Bolts & Nuts Garage</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          {/* <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div> */}
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <GiPin size={16} className='text-app-theme-green' />
            <h3>Ngong' Rd-Junction Mall</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit 
          p-1
          mb-3 
          border-gray-200 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Jason Bateman</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit 
          p-1
          mb-3 
          border-gray-200 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Jason Bateman</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit 
          p-1
          mb-3 
          border-gray-200 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Jason Bateman</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit 
          p-1
          mb-3 
          border-gray-200 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Jason Bateman</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit 
          p-1
          mb-3 
          border-gray-200 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Jason Bateman</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit
          p-1
          mb-3 
          border-gray-300 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Bolts & Nuts Garage</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          {/* <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div> */}
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <GiPin size={16} className='text-app-theme-green' />
            <h3>Ngong' Rd-Junction Mall</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit
          p-1
          mb-3 
          border-gray-300 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Bolts & Nuts Garage</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          {/* <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div> */}
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <GiPin size={16} className='text-app-theme-green' />
            <h3>Ngong' Rd-Junction Mall</h3>
          </div>
      </div>
      <div 
        className="
          flex 
          items-center 
          justify-around 
          w-full 
          h-fit
          p-1
          mb-3 
          border-gray-300 
          rounded-md 
          drop-shadow-lg 
          bg-white"
        >
          <Image 
            src="/passport-photo.jpg" 
            width={20} 
            height={20} 
            className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
          />
          <h3>Bolts & Nuts Garage</h3>
          <div>
            <GiSpanner size={10} className='text-app-theme-green'/>
          </div>
          {/* <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <BiCloudUpload size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div>
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <RxUpdate size={16} className='text-app-theme-green' />
            <h3>2023/14/07</h3>
          </div> */}
          <div className="flex items-center space-x-2 justify-evenly px-2 py-1">
            <GiPin size={16} className='text-app-theme-green' />
            <h3>Ngong' Rd-Junction Mall</h3>
          </div>
      </div>
    </div>
  )
}

export default Users
