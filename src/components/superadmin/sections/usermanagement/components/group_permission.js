import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Filter from '../../../commoncomponents/filter';

const Group_permission = () => {

  const [filter, setFilter] = useState(false);

  const showFilter = () => {
      setFilter(!filter);
  }


  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newCheckedItems = {};
    if (newSelectAll) {
      for (let i = 0; i < 1; i++) {
        newCheckedItems[i] = true; // Assuming there's only one row for demonstration. Adjust according to your data.
      }
    }
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='flex flex-col gap-4'>

      <div className='p-4 rounded-xl bg-white flex flex-col gap-4'>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <FaFilter onClick={showFilter} className='text-2xl text-green-500 cursor-pointer' />
            <input type="text" className="w-fit py-1 pl-10 pr-4 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          </div>

          <div className='flex gap-2 items-center'>
            <FaFilePdf className='text-2xl text-red-500 cursor-pointer' />
            <BsFileEarmarkPdfFill className='text-2xl text-green-600 cursor-pointer' />
            <LuPrinter className='text-2xl text-gray-500 cursor-pointer' />
          </div>
        </div>

        {filter && (<Filter/>)}

        <div className='overflow-scroll w-full backoffice_table'>
          <table className="w-full">
            <thead>
              <tr className="bg-purple-200 sticky top-0">
                <th className="p-2 overflow_p text-center font-medium">
                  <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                </th>
                <th className="p-2 overflow_p text-center font-medium">Role</th>
                <th className="p-2 overflow_p text-center font-medium">Description</th>
                <th className="p-2 overflow_p text-center font-medium">Status</th>
                <th className="p-2 overflow_p text-center font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {[0].map((id) => ( // Assuming there's only one row for demonstration. Adjust according to your data.
                <tr key={id}>
                  <td className="p-2 overflow_p text-center">
                    <input type="checkbox" checked={checkedItems[id] || false} onChange={() => handleCheckboxChange(id)} />
                  </td>
                  <td className="p-2 overflow_p text-center">name</td>
                  <td className="p-2 overflow_p text-center">demo</td>
                  <td className="p-2 overflow_p text-center">
                    <button className='px-6 py-1 rounded-lg bg-green-500 text-white'>Success</button>
                  </td>
                  <td className="p-2 overflow_p text-center flex gap-2 justify-center">
                    <LuPencil className='font-semibold text-4xl cursor-pointer bg-yellow-500 text-white p-2 rounded-lg' />
                    <RiDeleteBin6Line className='font-semibold text-4xl cursor-pointer bg-red-500 text-white p-2 rounded-lg' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Group_permission;
