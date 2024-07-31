import React from 'react'
import Foodl from '/src/assets/icons/Foodl.svg'

export const Navbar = () => {
  return (
    <div className='w-full bg-orange-400 py-5 '>
        <div className='w-10/12 mx-auto flex justify-between items-center'>
            <img src={Foodl} alt="Foodl" />
            <div>
                <ul className='flex gap-16'>
                    <li className='font-bold text-lg text-black'><a href="">Home</a></li>
                    <li className='text-lg text-black'><a href="./components/Search/Search.jsx">Search</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar