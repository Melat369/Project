import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-secondaryPink'><strong>Job</strong>Search</h1>
      </div>
      <div className='menu flex  gap-8'>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>Jobs</li>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>Companies</li>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>About</li>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>Contact</li>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>Blogs</li>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>Login</li>
        <li className='menuLits text-[#6f6f6f] hover:text-secondaryPink'>Register</li>


      </div>
    </div>
  )
}

export default Navbar