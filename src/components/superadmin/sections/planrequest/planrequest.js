import React from 'react'
import Navbar from '../../commoncomponents/navbar'

const Planrequest = () => {
    return (
            <div className=' flex flex-col gap-4 mt-4 p-4'>
                <div className=' flex justify-between'>
                    <h1 className=' text-3xl font-semibold'>Plan Request</h1>
                </div>

                <div className='p-4 rounded-xl bg-white flex flex-col gap-4'>
                <p className=' font-semibold text-lg'>No Manual Plan Request Found</p>
                </div>
            </div>
    )
}

export default Planrequest
