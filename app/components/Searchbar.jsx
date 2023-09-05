import Image from 'next/image';
import React from 'react';
import { BsSearch } from "react-icons/bs"
import { BiChevronDown } from "react-icons/bi"

const Searchbar = () => {
  return (
    <div className='flex justify-between border border-gray-100 w-full p-2 mt-2'>
      {/* Input & Search Button */}
      <div className='flex p-1 border border-gray-300 rounded-md ml-4'>
        <div>
          <input type="text" placeholder='Search Here...' className='focus:outline-none text-sm mr-1' />
        </div>
        <button className='px-2'>
          <BsSearch size={16} className='text-gray-800 bg-white' />
        </button>
      </div>
      {/* Avatar & Drawer Opener */}
      <div className='flex items-center justify-center mr-6'>
        <Image 
          src="/passport-photo.jpg"
          alt='User Profile' 
          width={20} 
          height={20} 
          className='block mx-auto sm:mx-0 sm:shrink-0 object-cover rounded-full h-[24px] w-[24px]' 
        />
        <BiChevronDown 
          size={16}
          className='text-gray-600 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Searchbar
