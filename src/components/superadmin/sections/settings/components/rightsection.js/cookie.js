import React from 'react';

const CookieSettings = () => {
  return (
    <div className='shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4'>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Cookie Settings</h2>
        
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <span className="mr-2">Enable Cookie</span>
            <input type="checkbox" className="toggle-checkbox" checked />
          </label>
          <label className="flex items-center">
            <span className="mr-2">Strictly necessary Cookies</span>
            <input type="checkbox" className="toggle-checkbox" checked />
          </label>
        </div>

        <div className="flex justify-between items-center mb-4 gap-2">
        <div className=" w-full">
          <label className="block text-gray-700">Cookie Title</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" defaultValue="We use cookies!" />
        </div>

        <div className=" w-full">
          <label className="block text-gray-700">Strictly Cookie Title</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" defaultValue="Strictly necessary cookies" />
        </div>
        </div>

        <div className="flex justify-between items-center mb-4 gap-2">
        <div className=" w-full">
          <label className="block text-gray-700">Cookies Descriptions</label>
          <textarea className="mt-1 block w-full border rounded py-2 px-3" rows="4">cookies to ensure its proper operation</textarea>
        </div>

        <div className=" w-full">
          <label className="block text-gray-700">Strictly cookie Title</label>
          <textarea className="mt-1 block w-full border rounded py-2 px-3" rows="4">ensure its proper operation</textarea>
        </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contact Us Descriptions</label>
          <textarea className="mt-1 block w-full border rounded py-2 px-3" rows="2">For any queries in relation to our policy on cookies and your choices,</textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contact Us Url</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" defaultValue="#" />
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Contact Us Descriptions</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default CookieSettings;
