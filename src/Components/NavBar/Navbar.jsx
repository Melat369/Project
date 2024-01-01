import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-primaryPink'><strong className='font-black'>Job</strong>Search</h1>
      </div>
      <div className='menu flex  gap-8'>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>Jobs</li>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>Companies</li>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>About</li>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>Contact</li>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>Blogs</li>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>Login</li>
        <li className='menuLits text-[#6f6f6f] hover:text-primaryPink'>Register</li>


      </div>
    </div>
  )
}

export default Navbar