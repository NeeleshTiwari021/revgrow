import React from 'react';

const TextArea = ({ id, label, ...props }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 font-medium mb-2' htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className='w-full h-24 border-2 focus:ring-1'
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
