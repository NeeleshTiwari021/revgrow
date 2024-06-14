import React from 'react'

const Filter = () => {
  return (
    <div className=' filter_option flex justify-around items-center gap-2'>
      <input
        type='text'
        id='name'
        className='border rounded w-full py-2 px-3 text-gray-700'
        placeholder='name'
        required
      />

      <input
        type='text'
        id='email'
        className='border rounded w-full py-2 px-3 text-gray-700'
        placeholder='email'
        required
      />

      <input
        type='text'
        id='phone'
        className='border rounded w-full py-2 px-3 text-gray-700'
        placeholder='phone'
        required
      />

      <input
        type='date'
        id=''
        className='border rounded w-full py-2 px-3 text-gray-700'
        required
      />

      <input
        type='text'
        id='disable'
        className='border rounded w-full py-2 px-3 text-gray-700'
        placeholder='disable'
        required
      />
    </div>
  )
}

export default Filter
