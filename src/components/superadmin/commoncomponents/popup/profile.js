import React from 'react'
import { Link } from 'react-router-dom'

const ProfilePopup = () => {
  return (
    <div className='shadow_card absolute p-4 bg-white rounded-lg flex flex-col gap-2 w-36 top-24'>
      <Link to='/profile'><p className=' font-semibold cursor-pointer'>Profile</p></Link>
      <p className=' font-semibold cursor-pointer'>Logout</p>
    </div>
  )
}

export default ProfilePopup
