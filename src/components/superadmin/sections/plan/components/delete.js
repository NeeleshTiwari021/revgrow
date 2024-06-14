import React from 'react'
import '../plan.css';

const Delete = ({closePopup}) => {
  return (
    <>
    <div onClick={closePopup} className="modal-wrapper_Dashboard"></div>
      <div className='absolute flex flex-col gap-4 p-4 rounded-lg bg-white shadow_card z-50 delete_popup'>
       <p className=' font-medium'>Do You Really Want to Delete this Plan Card</p>
       <div className=' flex items-center gap-2'>
          <button className=' w-full px-4 py-1 rounded-lg bg-red-600 text-white'>Delete</button>
          <button onClick={closePopup} className=' w-full px-4 py-1 rounded-lg bg-green-600 text-white'>Cancel</button>
        </div>
       </div>
    </>
  )
}

export default Delete
