import React, { useState } from 'react';

function Twilio() {
  const [moduleSettings, setModuleSettings] = useState({
    module1: false,
    module2: false,
    module3: false,
    module4: false,
    module5: false,
    module6: false,
  });

  const handleToggle = (module) => {
    setModuleSettings((prevState) => ({
      ...prevState,
      [module]: !prevState[module],
    }));
  };

  return (
    <div className="shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4">
      <h1 className="font-medium text-lg">Twilio settings</h1>
      <div className=' flex gap-2'>
                <div className=' flex flex-col w-full'>
                    <label className='text-sm font-semibold'>Twilio SID</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className='text-sm font-semibold'>Twilio SID</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>

                <div className=' flex flex-col w-full'>
                    <label className=' text-sm font-semibold'>Twilio SID</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
            </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Module settings</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(moduleSettings).map((module, index) => (
          <div key={index} className="flex items-center justify-between border p-4">
            <span className="text-sm font-semibold">New Customer</span>
            <ToggleSwitch enabled={moduleSettings[module]} onToggle={() => handleToggle(module)} />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-green-500 text-white py-2 px-4 rounded">Save Changes</button>
      </div>
    </div>
  );
}

const ToggleSwitch = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-12 h-6 flex items-center rounded-full p-1 ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow-md transform ${enabled ? 'translate-x-6' : ''}`}
    ></div>
  </button>
);

export default Twilio;
