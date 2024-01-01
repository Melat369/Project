import React from 'react'
import img1 from "../../Assets/acccountability.png";
import img2 from "../../Assets/creativity.jpg";
import img3 from "../../Assets/teamwork.jpg";

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] '>
      <h1 className='text-slate-700 text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className='singleGrid rounded-[10px] hover:bg-[#CCD7E0] p-[1.5rem]'>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#CCD7E0] h-[40px] w-[40px] flex items-center justify-center" >
                <img src={img1} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-slate-700 text-[18px]'>Accountability</span>
          </div>
          <p className='text-[14px] text-slate-700 opacity-[0.7] py-[1rem] font-semibold'>
            Providing reliable and accessible job opportunities for all is what we stand for.
          </p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#FDFBCD] p-[1.5rem]'>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#FDFBCD] h-[40px] w-[40px] flex items-center justify-center" >
                <img src={img2} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-slate-700 text-[18px]'>Accountability</span>
          </div>
          <p className='text-[14px] text-slate-700 opacity-[0.7] py-[1rem] font-semibold'>
            Providing reliable and accessible job opportunities for all is what we stand for.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#FBDCDC] p-[1.5rem]'>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#FBDCDC] h-[40px] w-[40px] flex items-center justify-center" >
                <img src={img3} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-slate-700 text-[18px]'>Accountability</span>
          </div>
          <p className='text-[14px] text-slate-700 opacity-[0.7] py-[1rem] font-semibold'>
            Providing reliable and accessible job opportunities for all is what we stand for.
          </p>
        </div>
         
      </div>
    </div>
  )
}

export default Value