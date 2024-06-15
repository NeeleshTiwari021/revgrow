import React from 'react'
import Sidebar from '../sidebar'
import Storage from '../rightsection.js/storage/storage'

const StoragePage = () => {
  return (
            <div className='flex flex-col gap-4 mt-4 p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl font-semibold'>Settings</h1>
                </div>

                <div className=' flex gap-4 settings_blocks'>
                    <Sidebar/>
                    <Storage/>
                </div>

    </div>
  )
}

export default StoragePage
