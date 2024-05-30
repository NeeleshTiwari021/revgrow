import React from 'react'
import Navbar from '../../commoncomponents/navbar'
import Transaction from './sections/transaction'
import Payout from './sections/payout'

const Referral = () => {
  return (
    <div className=' flex flex-col gap-4 mt-4 p-4'>
        <div className=' flex justify-between'>
            <h1 className=' text-3xl font-semibold'>Referral Programme</h1>
        </div>

        <div className=' flex flex-wrap justify-between w-full bg-white'>
            <div className=' p-2 hover:bg-green-500 hover:text-white transition-all duration-300 text-xl font-semibold  w-1/3 flex justify-center cursor-pointer'>Transition</div>
            <div className=' p-2 hover:bg-green-500 hover:text-white transition-all duration-300 text-xl font-semibold w-1/3 flex justify-center cursor-pointer'>Payout Request</div>
            <div className=' p-2 hover:bg-green-500 hover:text-white transition-all duration-300 text-xl font-semibold w-1/3 flex justify-center cursor-pointer'>Settings</div>
        </div>

        <Transaction/>
        <Payout/>

      </div>
  )
}

export default Referral
