// src/Formpopup.js
import React, { useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Input from '../../../../commoncomponent/input';
import TextArea from '../../../../commoncomponent/textArea';

const Formpopup = ({closePopup}) => {
  const [selectedOption, setSelectedOption] = useState('monthly');
  const [permission, setPermission] = useState(false);
  const [features, setFeatures] = useState([{ id: Date.now(), value: '' }]); // Initialize with one feature


  const handlePermission = () => {
    setPermission(!permission);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFeatureChange = (id, event) => {
    const newFeatures = features.map((feature) => {
      if (feature.id === id) {
        return { ...feature, value: event.target.value };
      }
      return feature;
    });
    setFeatures(newFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, { id: Date.now(), value: '' }]);
  };

  const removeFeature = (id) => {
    setFeatures(features.filter((feature) => feature.id !== id));
  };

  return (
    <>
    <div onClick={closePopup} className="modal-wrapper_Dashboard"></div>
      
      
      <div className='absolute flex flex-col gap-4 rounded-lg bg-gray-200 shadow_card form_popup z-50 delete_popup'>
      <div className=' p-4 bg-white'>
        <p className=' text-lg font-medium'>Add Plan Card</p>
      </div>
      <div className=' p-4'>
        <Input id='label-name' label='Label Name' required />
        <Input id='card-title' label='Card Title' required />
        <TextArea id='card-description' label='Card Description' required />

        <div>
          <div className="flex items-center justify-between gap-4">
            <p className='text-gray-700 text-base font-medium'>Card Pricing</p>
            <div className='flex items-center justify-center gap-2'>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="monthly"
                  name="subscription"
                  value="monthly"
                  checked={selectedOption === 'monthly'}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="monthly" className="ml-2 text-sm font-medium text-gray-900">
                  Monthly
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="yearly"
                  name="subscription"
                  value="yearly"
                  checked={selectedOption === 'yearly'}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="yearly" className="ml-2 text-sm font-medium text-gray-900">
                  Yearly
                </label>
              </div>
            </div>
          </div>
          <Input id='pricing' label='' placeholder='$0.0' required />
        </div>

        <div className='flex justify-evenly items-center gap-4'>
          <p className='text-gray-700 text-lg font-medium'>Taxes</p>
          <Input id='tax-name' label='Tax Name' required />
          <Input id='rate' label='Rate %' required />
        </div>

        <TextArea id='short-description' label='Short Description' required />
        <Input id='button-name' label='Button Name' required />
        <Input id='feature-title' label='Feature Title' required />

        <div className='flex flex-col gap-2'>
          <p className='text-gray-700 text-lg font-medium'>Feature Listing</p>
          <div className='p-2 border border-gray-400 rounded-lg'>
            {features.map((feature) => (
              <div key={feature.id} className='flex justify-center items-center gap-2'>
                <Input
                  id={`feature-${feature.id}`}
                  required
                  value={feature.value}
                  onChange={(e) => handleFeatureChange(feature.id, e)}
                />
                <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer mb-2' onClick={() => removeFeature(feature.id)} />
              </div>
            ))}
            <FaCirclePlus className='text-green-500 text-4xl cursor-pointer' onClick={addFeature} />
          </div>
        </div>

        <div className='flex justify-evenly items-center gap-4'>
          <Input id='Title' label='Footer Title' required />
          <Input id='Link' label='Footer Link' required />
        </div>

        <button onClick={handlePermission} className=' w-fit px-4 py-1 rounded-lg bg-green-600 text-white'>+ Add Permission</button>

        {permission && (
          <div className=' flex flex-col gap-4'>
            <div className=' flex justify-between items-center gap-2'>
              <button className=' w-full px-4 py-1 rounded-lg bg-green-600 text-white'>Accounting</button>
              <button className=' w-full px-4 py-1 rounded-lg bg-green-600 text-white'>POS</button>
              <button className=' w-full px-4 py-1 rounded-lg bg-green-600 text-white'>Ecommerece</button>
            </div>

            <div>
              <div className='flex justify-evenly items-center gap-4'>
                <Input id='Title' label='Maximum Users' required />
                <Input id='Link' label='Maximum Customers' required />
              </div>
              <div className='flex justify-evenly items-center gap-4'>
                <Input id='Title' label='Maximum Vendors' required />
                <Input id='Link' label='Maximum Clients' required />
              </div>
              <div className='flex justify-evenly items-center gap-4'>
                <Input id='Title' label='Storage Limit' required />
                <Input id='Link' label='Maximum Limit' required />
              </div>

            </div>
          </div>
          
        )}
        
        <div className=' flex items-center gap-2 mt-2'>
          <button className=' w-full px-4 py-1 rounded-lg bg-green-600 text-white'>Submit</button>
          <button onClick={closePopup} className=' w-full px-4 py-1 rounded-lg bg-red-600 text-white'>Cancel</button>
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Formpopup;
