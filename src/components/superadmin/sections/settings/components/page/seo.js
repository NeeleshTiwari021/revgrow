import React from 'react'
import Sidebar from '../sidebar'
import Seo from '../rightsection.js/seo'

const SeoPage = () => {
  return (
            <div className='flex flex-col gap-4 mt-4 p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl font-semibold'>Settings</h1>
                </div>

                <div className=' flex gap-4 settings_block'>
                    <Sidebar/>
                    <Seo/>
                </div>

    </div>
  )
}

export default SeoPage
