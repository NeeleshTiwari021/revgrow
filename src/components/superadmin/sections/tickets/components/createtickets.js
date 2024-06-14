// src/CreateTickets.jsx
import React, { useState } from 'react';

const CreateTickets = () => {
  const [requester, setRequester] = useState('client');

  return (
    <div className='flex flex-col gap-4 mt-4 p-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>Referral Programme</h1>
      </div>

      <div className='flex flex-wrap justify-between w-full bg-white p-6 rounded-lg shadow-lg'>
        <form className='w-full'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Requester</label>
            <div className='flex items-center gap-4'>
              <label className='mr-4'>
                <input
                  type='radio'
                  name='requester'
                  value='client'
                  checked={requester === 'client'}
                  onChange={() => setRequester('client')}
                  className='mr-2'
                />
                Client
              </label>
              <label>
                <input
                  type='radio'
                  name='requester'
                  value='employee'
                  checked={requester === 'employee'}
                  onChange={() => setRequester('employee')}
                  className='mr-2'
                />
                Employee
              </label>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2' htmlFor='project'>Requester Name</label>
              <select
                id='project'
                className='border rounded w-full py-2 px-3 text-gray-700'
                required
              >
                <option value=''>Requester Name</option>
                {/* Add options here */}
              </select>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2' htmlFor='agent'>Assign Group</label>
              <div className='flex'>
                <select
                  id='Requester Name'
                  className='border rounded-l w-full py-2 px-3 text-gray-700'
                  required
                >
                  <option value=''>Assign Group</option>
                  {/* Add options here */}
                </select>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-r'>Add</button>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2' htmlFor='agent'>Agent</label>
              <div className='flex'>
                <select
                  id='agent'
                  className='border rounded-l w-full py-2 px-3 text-gray-700'
                  required
                >
                  <option value=''>Select an agent</option>
                  {/* Add options here */}
                </select>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-r'>Add</button>
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2' htmlFor='project'>Project</label>
              <select
                id='project'
                className='border rounded w-full py-2 px-3 text-gray-700'
                required
              >
                <option value=''>Select a project</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='ticketSubject'>Ticket Subject</label>
            <input
              type='text'
              id='ticketSubject'
              className='border rounded w-full py-2 px-3 text-gray-700'
              placeholder='Ticket Subject'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='ticketDetails'>Ticket Details</label>
            <div className='border rounded w-full py-2 px-3 text-gray-700'>
              <div className='mb-2'>
                <button className='bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2'>Monthly</button>
              </div>
              <textarea
                id='ticketDetails'
                className='w-full h-24 border-none focus:ring-0'
                placeholder='Details'
                required
              ></textarea>
            </div>
          </div>

          <div className='mb-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Upload file</button>
          </div>
        </form>
      </div>

      
      <p className='text-3xl font-semibold'>Other Details</p>

      <div className='flex flex-wrap justify-between w-full bg-white p-6 rounded-lg shadow-lg'>
        <form className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2' htmlFor='agent'>Agent</label>
              <div className='flex'>
                <select
                  id='agent'
                  className='border rounded-l w-full py-2 px-3 text-gray-700'
                  required
                >
                  <option value=''>Select an agent</option>
                  {/* Add options here */}
                </select>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-r'>Add</button>
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2' htmlFor='project'>Project</label>
              <select
                id='project'
                className='border rounded w-full py-2 px-3 text-gray-700'
                required
              >
                <option value=''>Select a project</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='ticketSubject'>Ticket Subject</label>
            <input
              type='text'
              id='ticketSubject'
              className='border rounded w-full py-2 px-3 text-gray-700'
              placeholder='Ticket Subject'
              required
            />
          </div>

          <div className='mb-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Upload file</button>
          </div>
        </form>
      </div>

      <div className=' flex justify-end items-center gap-2'>
        <button className=' px-4 py-1 rounded-lg  bg-green-600 transition-all duration-300 text-white text-sm'>Save</button>
        <button className=' px-4 py-1 rounded-lg  bg-red-600 transition-all duration-300 text-white text-sm'>Cancel</button>
        </div>
    </div>
  );
};

export default CreateTickets;
