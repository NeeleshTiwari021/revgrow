import React from 'react'
import { FaFilter } from "react-icons/fa";
import { PiCheckerboardDuotone } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Tickets = () => {

  const data = [
    {
      "name": "Total Tickets",
      "data": "10"
    },
    {
      "name": "Closed Tickets",
      "data": "2"
    },
    {
      "name": "Open Tickets",
      "data": "3"
    },
    {
      "name": "Pending Tickets",
      "data": "5"
    },
    {
      "name": "Resolved Tickets",
      "data": "7"
    },
  ]

  return (
    <div className=' flex flex-col gap-4 mt-4 p-4'>
      <div className=' flex justify-between'>
        <h1 className=' text-3xl font-semibold'>Ticket</h1>
      </div>

      <div className=' flex flex-wrap justify-around items-center w-full bg-white py-2'>
        <p className=' text-xs font-medium cursor-pointer'>Duration: <span className=' text-gray-500 '>start date to end date</span></p>

        <div className="border-t py-2 px-4 flex gap-2 items-center">
          <p className=' text-xs font-medium'>Status:</p>
          <select className="border rounded px-2 text-xs">
            <option>Closed</option>
            <option>Open</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="relative search_block">
          <input type="text" className="w-full py-1 pl-10 pr-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div className=' flex gap-1 items-center text-gray-600 cursor-pointer'>
          <FaFilter />
          <p className='text-xs font-medium'>Filter</p>
        </div>
      </div>

      <div className=' grid grid-cols-5 gap-2'>
        {data.map((item) => (
          <div className=' flex gap-1 items-center justify-between p-2 bg-white rounded-md'>
            <div className=' flex flex-col gap-2'>
              <p className=' text-xs font-medium'>{item.name}</p>
              <p className=' text-lg font-medium text-sky-600'>{item.data}</p>
            </div>
            <PiCheckerboardDuotone className=' text-xl' />
          </div>
        ))}

      </div>

      <div className=' flex justify-end items-center gap-2'>
        <Link to="/create-tickets"><button className=' px-3 py-1 rounded-sm  bg-green-600 transition-all duration-300 text-white text-sm'>+ Create Ticket</button></Link>
        <Link to="/ticket-form"><button className=' px-3 py-1 rounded-sm border-2 border-green-600 text-green-600 hover:bg-green-600 text-sm transition-all duration-300 hover:text-white'>Ticket Form</button></Link>
        <Link to="#"><button className=' px-3 py-1 rounded-sm border-2 border-green-600 text-green-600 hover:bg-green-600 text-sm transition-all duration-300 hover:text-white'>Export</button></Link>
      </div>

      <div className='overflow_scroll_list overflow-scroll w-full backoffice_table'>
        <table className=" w-full">
          <thead>
            <tr className="bg-purple-200 sticky top-0">
              <th className="p-2 overflow_p text-center font-medium">Tickets #</th>
              <th className="p-2 overflow_p text-center font-medium">Ticket Subject</th>
              <th className="p-2 overflow_p text-center font-medium">Request Name</th>
              <th className="p-2 overflow_p text-center font-medium">Request On</th>
              <th className="p-2 overflow_p text-center font-medium">Others</th>
              <th className="p-2 overflow_p text-center font-medium">Status</th>
              <th className="p-2 overflow_p text-center font-medium">Action</th>
            </tr>
          </thead>
          <tbody className=' bg-white'>
            <tr>
              <td className="p-2 overflow_p text-center">name</td>
              <td className="p-2 overflow_p text-center">
                <div className=' flex flex-col'>
                  <p className=' text-sm'>Ramesh Chatergee Sir</p>
                  <p className=' bg-sky-500 text-xs w-fit text-white px-1'>New Response</p></div></td>
              <td className="p-2 overflow_p text-center">demo</td>
              <td className="p-2 overflow_p text-center">demo</td>
              <td className="p-2 overflow_p text-center">
                <button className=' px-6 py-1 rounded-lg bg-green-500 text-white'>Success</button>
              </td>
              <td className="p-2 overflow_p text-center">
                <select className="border rounded px-2 py-1">
                  <option>Closed</option>
                  <option>Open</option>
                  <option>Pending</option>
                </select></td>
              <td className="p-2 overflow_p text-center flex gap-2 justify-center">
                <LuPencil className=' font-semibold text-4xl cursor-pointer bg-yellow-500 text-white p-2 rounded-lg' />
                <RiDeleteBin6Line className='  font-semibold text-4xl cursor-pointer bg-red-500 text-white p-2 rounded-lg' />
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tickets
