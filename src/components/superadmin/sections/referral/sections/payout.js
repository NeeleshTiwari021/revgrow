import React from 'react'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Payout = () => {
  return (
    <div className='p-4 rounded-xl bg-white flex flex-col gap-4'>
      <div className='overflow_scroll_list overflow-scroll w-full backoffice_table'>
                    <table className=" w-full">
                        <thead>
                            <tr className="bg-purple-200 sticky top-0">
                                <th className="p-2 overflow_p text-center font-medium">#</th>
                                <th className="p-2 overflow_p text-center font-medium">COMPANY NAME</th>
                                <th className="p-2 overflow_p text-center font-medium">Request Date</th>
                                <th className="p-2 overflow_p text-center font-medium">Request Amount</th>
                                <th className="p-2 overflow_p text-center font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td className="p-2 overflow_p text-center">1</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 text-center flex items-center justify-center gap-2">
                                    <TiTick className=' p-2 text-white bg-green-500 text-3xl rounded-lg cursor-pointer'/>
                                    <RxCross2 className=' p-2 text-white bg-red-500 text-3xl rounded-lg cursor-pointer'/>
                                    </td>
                                    
                                </tr>

                        </tbody>
                    </table>
                </div>
                </div>
                
  )
}

export default Payout
