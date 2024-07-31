import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import plate from '/src/assets/images/plate.png'
import black from '/src/assets/images/black.png'
import './index.css'




export const App = () => {
  return (
    
    <div>
      <Navbar/>
      <div className='flex w-10/12 mx-auto justify-between items-center pt-24'>
        <div>
          <h2 className='font-bold text-black text-5xl max-w-md tracking-tight pb-8'>Find recipes for the ingredients you have on hand</h2>
          <button className='text-white font-medium text-2xl py-5 px-14 bg-black rounded-lg'>Search now</button>
        </div>
        <div>
          <img src={plate} className='max-w-xl' alt="plate with food" />
          <div className='absolute position -z-10 right-0'>
            <img src={black} alt="" />
          </div>
        </div>
      </div>
      
    
    </div>
  )
}

export default App