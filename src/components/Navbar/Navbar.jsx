import React from 'react'
import Foodl from '/src/assets/icons/Foodl.svg'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-full bg-[#FF9F59]'>
        <div className='w-10/12 mx-auto pt-6  flex justify-between items-center'>
            <img src={Foodl} alt="Foodl" />
            <div>
                <ul className='flex gap-16'>
                    <li className='font-bold text-lg text-black'><a href="">Home</a></li>
                    <li className='text-lg text-black'><Link to='/Search'>Search</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar