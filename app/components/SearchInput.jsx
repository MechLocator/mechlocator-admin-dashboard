import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = ({type}) => {
  return (
    <div className='flex items-center justify-end p-1 border border-gray-300 rounded-md ml-4 w-fit'>
        <div>
          <input type="text" placeholder={`Search ${type}...`} className='focus:outline-none text-sm mr-1' />
        </div>
        <button className='px-2'>
          <BsSearch size={16} className='text-gray-800 bg-white' />
        </button>
    </div>
  )
}

export default SearchInput
