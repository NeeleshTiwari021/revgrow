import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";
import Filter from '../../commoncomponents/filter';

const Order = () => {

    const [filter, setFilter] = useState(false);

    const showFilter = () => {
        setFilter(!filter);
    }


    return (
            <div className=' flex flex-col gap-4 mt-4 p-4'>
                <div className=' flex justify-between'>
                    <h1 className=' text-3xl font-semibold'>Order</h1>
                </div>

                <div className='p-4 rounded-xl bg-white flex flex-col gap-4'>

                <div className=' flex justify-between '>
                <div className=' flex gap-2 items-center'>

                <FaFilter onClick={showFilter} className=' text-2xl text-green-500 cursor-pointer' />
                <input type="text" class="w-fit py-1 pl-10 pr-4 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />

                </div>

                <div className=' flex gap-2 items-center'>
                    <FaFilePdf className=' text-2xl text-red-500 cursor-pointer'/>
                    <BsFileEarmarkPdfFill className=' text-2xl text-green-600 cursor-pointer'/>
                    <LuPrinter className=' text-2xl text-gray-500 cursor-pointer'/>
                </div>
                </div>

                {filter && (<Filter/>)}

                <div className='overflow_scroll_list overflow-scroll w-full backoffice_table'>
                    <table className=" w-full">
                        <thead>
                            <tr className="bg-purple-200 sticky top-0">
                                <th className="p-2 overflow_p text-center font-medium">Order Id</th>
                                <th className="p-2 overflow_p text-center font-medium">Name</th>
                                <th className="p-2 overflow_p text-center font-medium">Plan Name</th>
                                <th className="p-2 overflow_p text-center font-medium">Price</th>
                                <th className="p-2 overflow_p text-center font-medium">Status</th>
                                <th className="p-2 overflow_p text-center font-medium">Payment Type</th>
                                <th className="p-2 overflow_p text-center font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td className="p-2 overflow_p text-center">name</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">
                                        <button className=' px-6 py-1 rounded-lg bg-green-500 text-white'>Success</button>
                                    </td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                </tr>

                        </tbody>
                    </table>
                </div>

                <div className='navigation_bar w-full flex justify-start items-center gap-4 py-4'>
                    <div className=' flex items-center gap-2'>
                        <button className="lg:block border border-gray-400 hover:bg-gray-300 transition-all duration-300 px-4 py-1 rounded-sm">
                            Prev
                        </button>
                        <p className=' py-1 px-3 rounded-md'>1</p>
                        <button className="lg:block border border-gray-400 hover:bg-gray-300 px-4 py-1 rounded-sm transition-all duration-300">
                            Next
                        </button>
                    </div>
                    <div className=' flex gap-1 items-center justify-center'>
                        <p className=' text-sm'>Rows per page: </p>
                        <select
                            name="rows"
                            className="appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="rows"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <p className=' text-sm'>Total No Of Pages: 10 </p>
                    </div>
                </div>

                </div>
            </div>
    )
}

export default Order
