import React from 'react'

const ProcessingFee = () => {
    return (
        <div className=' flex flex-col gap-4'>
            <div className=' grid grid-cols-2 gap-3'>
                <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Heading 1'>Heading 1</label>
                    <input
                        type='text'
                        id='Heading 1'
                        className='border rounded w-full py-2 px-3 text-gray-700'
                        required
                    />
                </div>

                <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Video'># Video URL</label>
                    <input
                        type='text'
                        id='Video'
                        className='border rounded w-full py-2 px-3 text-gray-700'
                        required
                    />
                </div>

                <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-xs font-medium mb-2' htmlFor='Heading 2'>Heading 2</label>
                    <input
                        type='text'
                        id='Heading 2'
                        className='border rounded w-full py-2 px-3 text-gray-700'
                        required
                    />
                </div>
            </div>

            <div className='processing_fee_block bg-white p-8 rounded-lg flex justify-around items-start gap-2'>
            <p className='flex-1 font-medium'>In Person</p>

            <div className='flex-1 flex flex-col gap-1'>
            <p className=' font-medium'>Processesing Rate</p>
            <p className=' font-medium text-2xl text-sky-600 cursor-pointer'>2.6% + 10 cents</p>
            <p className=' text-gray-500 text-sm'>Per Transaction</p>
            </div>

            <div className='flex-1 flex flex-col gap-2'>
            <p className=' font-semibold'>Processesing Method</p>
            <p className=' text-gray-500 text-sm'>When the customers gets swipe his card then the payment gets complete and the user gets ite own subscription to make more value products using these</p>
            </div>
            </div>

            <div className='processing_fee_block bg-white p-8 rounded-lg flex justify-around items-start gap-2'>
            <p className=' flex-1 font-medium'>In Person</p>

            <div className=' flex-1 flex flex-col gap-1'>
            <p className=' font-medium'>Processesing Rate</p>
            <p className=' font-semibold text-2xl text-sky-600 cursor-pointer'>2.6% + 10 cents</p>
            <p className=' text-gray-500 text-sm'>Per Transaction</p>
            </div>

            <div className=' flex-1 flex flex-col gap-2'>
            <p className=' font-medium'>Processesing Method</p>
            <p className=' text-gray-500 text-sm'>When the customers gets swipe his card then the payment gets complete and the user gets ite own subscription to make more value products using these</p>
            </div>
            </div>
        </div>
    )
}

export default ProcessingFee
