import React from 'react'

const Transaction = () => {
  return (
    <div className='p-4 rounded-xl bg-white flex flex-col gap-4'>
      <div className='overflow_scroll_list overflow-scroll w-full backoffice_table'>
                    <table className=" w-full">
                        <thead>
                            <tr className="bg-purple-200 sticky top-0">
                                <th className="p-2 overflow_p text-center font-medium">#</th>
                                <th className="p-2 overflow_p text-center font-medium">COMPANY NAME</th>
                                <th className="p-2 overflow_p text-center font-medium">REFERRAL COMPANY NAME</th>
                                <th className="p-2 overflow_p text-center font-medium">PLAN NAME</th>
                                <th className="p-2 overflow_p text-center font-medium">PLAN PRICE</th>
                                <th className="p-2 overflow_p text-center font-medium">COMMISSION (%)</th>
                                <th className="p-2 overflow_p text-center font-medium">COMMISSION AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td className="p-2 overflow_p text-center">1</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    <td className="p-2 overflow_p text-center">demo</td>
                                    
                                </tr>

                        </tbody>
                    </table>
                </div>
                </div>
                
  )
}

export default Transaction
