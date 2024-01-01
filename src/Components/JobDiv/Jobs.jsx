import React from 'react'
import { BiTimeFive } from "react-icons/bi";

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        <div className='group grpup/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-primaryPink shadow-lg shadow-shadowColor hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h3 className='text-[16px] font-normal text-slate- group-hover:text-white'>Web Developer</h3>
            <span className='flex items-center text-[#ccc] gap-1 text-sm'>
              <BiTimeFive />Name
            </span>
          </span>
        </div>
      </div>
  

    </div>
  )
}

export default Jobs