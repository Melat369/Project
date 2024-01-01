import React from 'react'
//importiny icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";


const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-slate-100 rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-grayish-700'>
          <div className='flex gap-2 items-center'>
            <AiOutlineSearch  className="text-[25px] icon"/> 
          <input type="text" className='bg-transparent text-primaryPink focus:outline-none w-[100%]' placeholder='Search Job Here' />
          <AiOutlineCloseCircle className='text-[30px] text-primaryPink text-slate-400 hover:text-slate-600 icon'  />

          </div>

          <div className='flex gap-2 items-center'>
            <AiOutlineHome  className="text-[25px] icon"/> 
          <input type="text" className='bg-transparent text-primaryPink focus:outline-none w-[100%]' placeholder='Search By Company' />
          <AiOutlineCloseCircle className='text-[30px] text-primaryPink text-slate-400 hover:text-slate-600 icon'  />

          </div>

          <div className='flex gap-2 items-center'>
            <GrLocation  className="text-[25px] icon"/> 
          <input type="text" className='bg-transparent text-primaryPink focus:outline-none w-[100%]' placeholder='Search By Location' />
          <AiOutlineCloseCircle className='text-[30px] text-primaryPink text-slate-400 hover:text-slate-600 icon'  />

          </div>

          <button type="reset" className='bg-primaryPink h-full py-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-500'>Search</button>
        </div>
      </form>
<div className='flex gap-10 text-center'>
      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-start gap-2'>
          <label htmlFor="relevance" className='text-slate-500 font-semibold'>Sort By:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start With</option>
            <option value="">Contains</option>

          </select>
        </div>
      </div>

      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-start gap-2'>
          <label htmlFor="type" className='text-slate-500 font-semibold'>By Type:</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-Time</option>
            <option value="">Part-Time</option>
            <option value="">Remote</option>

          </select>
        </div>
      </div>

      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-start gap-2'>
          <label htmlFor="level" className='text-slate-500 font-semibold'>By Level:</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>

          </select>
        </div>
        <span className='text-slate-600 cursor-pointer'>Clear All</span>
      </div>
      </div>
    </div>
  )
}

export default Search 