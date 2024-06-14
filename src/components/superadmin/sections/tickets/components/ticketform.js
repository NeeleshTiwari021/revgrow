import React from 'react'

const Ticketform = () => {
    return (
        <div className=' flex justify-center items-start gap-4 mt-4 p-4'>
            <div className='overflow_scroll_list overflow-scroll w-full backoffice_table flex-1'>
                <table className=" w-full">
                    <thead>
                        <tr className="bg-white sticky top-0">
                            <th className="p-2 overflow_p text-center font-medium text-xs">#</th>
                            <th className="p-2 overflow_p text-center font-medium text-xs">Feild</th>
                            <th className="p-2 overflow_p text-center font-medium text-xs">Status</th>
                        </tr>
                    </thead>
                    <tbody className=' bg-white'>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Name</td>
                            <td className="p-2 overflow_p text-center text-xs">--</td>
                        </tr>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Email</td>
                            <td className="p-2 overflow_p text-center text-xs">--</td>
                        </tr>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Ticket Subject</td>
                            <td className="p-2 overflow_p text-center text-xs">--</td>
                        </tr>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Ticket Description</td>
                            <td className="p-2 overflow_p text-center text-xs">demo</td>
                        </tr>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Type</td>
                            <td className="p-2 overflow_p text-center text-xs">demo</td>
                        </tr>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Priority</td>
                            <td className="p-2 overflow_p text-center text-xs">demo</td>
                        </tr>
                        <tr>
                            <td className="p-2 overflow_p text-center text-xs">#</td>
                            <td className="p-2 overflow_p text-center text-xs">Assigned Group</td>
                            <td className="p-2 overflow_p text-center text-xs">--</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className=' flex-1 flex-col gap-2 bg-white p-3'>
                <p className=' text-lg font-medium text-gray-700 mb-4'>Preview</p>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Name'>Name</label>
                        <input
                            type='text'
                            id='Name'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Email'>Email</label>
                        <input
                            type='text'
                            id='Email'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='ticketSubject'>Ticket Subject</label>
                        <input
                            type='text'
                            id='ticketSubject'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='ticketDescription'>Ticket Description</label>
                        <input
                            type='text'
                            id='ticketDescription'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Type'>Type</label>
                        <input
                            type='text'
                            id='Type'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Priority'>Priority</label>
                        <input
                            type='text'
                            id='Priority'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Assign'>Assign Group</label>
                        <input
                            type='text'
                            id='Assign'
                            className='border rounded w-full py-2 px-3 text-gray-700'
                            required
                        />
                    </div>

                    <div className=' flex justify-start items-center gap-2'>
                        <button className=' px-4 py-1 rounded-lg  bg-green-600 transition-all duration-300 text-white text-sm'>Save</button>
                        <button className=' px-4 py-1 rounded-lg  bg-red-600 transition-all duration-300 text-white text-sm'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Ticketform
