// Language Component
import React from 'react';
import './popup.css';

const Language = ({ closePopup }) => {
  return (
    <>
    <div onClick={closePopup} className="modal-wrapper_Dashboard"></div>
    <div className='absolute flex flex-col gap-2 bg-white rounded-xl shadow_card message_block z-50'>
      <p className='px-12 py-2 hover:bg-slate-200 cursor-pointer'>Hindi</p>
      <p className='px-12 py-2 hover:bg-slate-200 cursor-pointer'>English</p>
      <p className='px-12 py-2 hover:bg-slate-200 cursor-pointer'>English</p>
      <p className='px-12 py-2 hover:bg-slate-200 cursor-pointer'>English</p>
      <p className='px-12 py-2 hover:bg-slate-200 cursor-pointer'>English</p>
      <p className='px-12 py-2 hover:bg-slate-200 cursor-pointer'>English</p>
      </div>
    </>
  );
}

export default Language;
