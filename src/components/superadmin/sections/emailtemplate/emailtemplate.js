import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const Emailtemplate = () => {

    const [emailContent, setEmailContent] = useState('');

    const handleEmailChange = (content) => {
        setEmailContent(content);
    };

    return (
        <div className='flex flex-col gap-4 mt-4 p-4'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-semibold'>New User</h1>

                <div className=' flex gap-2'>
                    <button className=' px-6 py-2 border-2 rounded-lg border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300'>New Template</button>

                    <select className='border-2 border-blue-600 text-white rounded-lg px-2 py-1 bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700'>
                        <option>Template new user</option>
                        <option>Item</option>
                        <option>Price</option>
                        <option>Quantity</option>
                        <option>Discount</option>
                    </select>

                </div>
            </div>

            <div className='p-4 rounded-xl bg-white flex flex-col gap-8'>
                <p className=' text-xl font-semibold'>Place Holder</p>

                <div className=' p-4 border-2 rounded-lg flex flex-wrap gap-8 justify-evenly'>
                    <p className=' font-semibold'>App Name: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>Company Name: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>App Url: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>Email: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>Password: <span className=' text-green-400'>app_name</span></p>
                </div>

                <div className=' flex gap-4 w-full'>
                    <div className=' flex flex-col w-full'>
                        <label className=' font-semibold'>Title text</label>
                        <input
                            type='text'
                            className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className=' flex flex-col w-full'>
                        <label className=' font-semibold'>Footer text</label>
                        <input
                            type='text'
                            className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                </div>
                <div>
                    <h2 className=' font-semibold mb-2'>Email Message</h2>
                    <ReactQuill
                        value={emailContent}
                        onChange={handleEmailChange}
                        modules={{
                            toolbar: [
                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                ['bold', 'italic', 'underline'],
                                ['link', 'image'],
                                ['clean']
                            ],
                        }}
                        formats={[
                            'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'link', 'image'
                        ]}
                        className='bg-white border rounded-lg p-2'
                        style={{ minHeight: '200px' }}
                        theme="snow"
                    />
                </div>

                <div className=' flex justify-end items-center gap-2'>
                        <button className=' px-6 py-2 rounded-lg  bg-green-600 transition-all duration-300 text-white text-sm'>Save Changes</button>
                    </div>
            </div>
        </div>
    )
}

export default Emailtemplate
