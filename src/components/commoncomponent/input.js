import React from 'react';

const Input = ({ id, label, type = 'text', ...props }) => {
  return (
    <div className='mb-4 w-full'>
      <label className='block text-gray-700 text-base font-medium mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className='border rounded w-full py-2 px-3 text-gray-700'
        {...props}
      />
    </div>
  );
};

export default Input;
