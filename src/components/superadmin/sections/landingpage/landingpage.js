import React from 'react'
import Navbar from '../../commoncomponents/navbar'

const Landingpage = () => {
    return (
            <div className='flex flex-col gap-4 mt-4 p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl font-semibold'>Landing Page</h1>
                </div>

                <div className='p-4 rounded-xl bg-white flex flex-col gap-4'>

                    <div className=' flex flex-col justify-between items-end gap-2'>

                        <div className=' flex flex-col flex-1 w-full'>
                            <label className=' font-semibold text-xl'>Accept online payments and give customers more ways to play</label>
                            <textarea
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                                rows={4}
                            ></textarea>
                        </div>

                        <div className=' flex flex-col gap-3 mb-4 flex-1 w-full'>
                            <p className='text-lg font-roboto font-semibold'>Add Video</p>

                            <input type='file' id='biffile' className=' hidden' />
                            <label className='h-full w-full border border-dashed border-gray-400 rounded-xl flex justify-center items-center text-lg font-sans font-medium cursor-pointer overflow-hidden' htmlFor='biffile'>
                                +
                            </label>

                        </div>
                    </div>

                    <hr/>

                    <div className=' grid grid-cols-2 gap-4'>
                        <div className=' flex flex-col'>
                            <label className=' font-semibold'>Title text</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className=' font-semibold'>Footer text</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className=' font-semibold'>Offer</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className=' font-semibold'>Heading</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className=' font-semibold'>#URL</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                    </div>

                    <hr />

                    <div className=' flex justify-between items-start gap-2'>
                    <div className=' flex flex-col flex-1'>
                    <label className=' font-semibold'>Add Logo</label>
                        <input
                            type='file'
                            className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500 flex-1'
                        />
                        </div>

                        <div className=' flex flex-col flex-1'>
                            <label className=' font-semibold'>Discription</label>
                            <textarea
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                                rows={4}
                            ></textarea>
                        </div>

                    </div>

                    <button className=' px-8 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300'>Save Changes</button>

                </div>
            </div>
    )
}

export default Landingpage
