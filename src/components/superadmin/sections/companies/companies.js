import React from 'react'
import { FaFilter } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import Navbar from '../../commoncomponents/navbar';

const Companies = () => {
  return (
    <div className='main_block_superadmin p-4'>
      <Navbar />
      <div className=' flex flex-col gap-4 mt-4 p-4'>
        <div className=' flex justify-between'>
          <h1 className=' text-3xl font-semibold'>Companies</h1>

          <FaFilter className=' text-2xl text-green-500 cursor-pointer' />
        </div>

        <div className=' flex flex-wrap justify-evenly items-center gap-4'>
          <div className=' flex flex-col gap-4 p-3 rounded-xl bg-white shadow_card'>
            <div className=' flex justify-between items-center'>
              <button className=' px-3 rounded-lg bg-indigo-600 text-white'>
                Platinium
              </button>

              <CiMenuKebab />
            </div>

            <div className=' flex flex-col justify-center items-center'>
              <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className=' rounded-full h-16 w-16 object-cover' />

              <p className=' font-medium text-lg text-blue-400'>Rojodiya Infotech</p>
              <p className=' text-xs text-sky-900'>xyz@gmail.com</p>
              <p className=' text-sm'>2024-04-02 14:52:34</p>
            </div>

            <div className=' flex justify-between items-center'>
              <button className=' px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Upgrade Plan</button>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Admin Hub</button>
            </div>

            <div className=' flex justify-center items-center gap-2'>
              <div className=' flex gap-1'>
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
              </div>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Write a Review</button>
            </div>

            <div className='shadow_card p-2 rounded-lg flex justify-around items-center'>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>12</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>21</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>54</p>
            </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4 p-3 rounded-xl bg-white shadow_card'>
            <div className=' flex justify-between items-center'>
              <button className=' px-3 rounded-lg bg-indigo-600 text-white'>
                Platinium
              </button>

              <CiMenuKebab />
            </div>

            <div className=' flex flex-col justify-center items-center'>
              <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className=' rounded-full h-16 w-16 object-cover' />

              <p className=' font-medium text-lg text-blue-400'>Rojodiya Infotech</p>
              <p className=' text-xs text-sky-900'>xyz@gmail.com</p>
              <p className=' text-sm'>2024-04-02 14:52:34</p>
            </div>

            <div className=' flex justify-between items-center'>
              <button className=' px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Upgrade Plan</button>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Admin Hub</button>
            </div>

            <div className=' flex justify-center items-center gap-2'>
              <div className=' flex gap-1'>
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
              </div>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Write a Review</button>
            </div>

            <div className='shadow_card p-2 rounded-lg flex justify-around items-center'>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>12</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>21</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>54</p>
            </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4 p-3 rounded-xl bg-white shadow_card'>
            <div className=' flex justify-between items-center'>
              <button className=' px-3 rounded-lg bg-indigo-600 text-white'>
                Platinium
              </button>

              <CiMenuKebab />
            </div>

            <div className=' flex flex-col justify-center items-center'>
              <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className=' rounded-full h-16 w-16 object-cover' />

              <p className=' font-medium text-lg text-blue-400'>Rojodiya Infotech</p>
              <p className=' text-xs text-sky-900'>xyz@gmail.com</p>
              <p className=' text-sm'>2024-04-02 14:52:34</p>
            </div>

            <div className=' flex justify-between items-center'>
              <button className=' px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Upgrade Plan</button>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Admin Hub</button>
            </div>

            <div className=' flex justify-center items-center gap-2'>
              <div className=' flex gap-1'>
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
              </div>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Write a Review</button>
            </div>

            <div className='shadow_card p-2 rounded-lg flex justify-around items-center'>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>12</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>21</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>54</p>
            </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4 p-3 rounded-xl bg-white shadow_card'>
            <div className=' flex justify-between items-center'>
              <button className=' px-3 rounded-lg bg-indigo-600 text-white'>
                Platinium
              </button>

              <CiMenuKebab />
            </div>

            <div className=' flex flex-col justify-center items-center'>
              <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className=' rounded-full h-16 w-16 object-cover' />

              <p className=' font-medium text-lg text-blue-400'>Rojodiya Infotech</p>
              <p className=' text-xs text-sky-900'>xyz@gmail.com</p>
              <p className=' text-sm'>2024-04-02 14:52:34</p>
            </div>

            <div className=' flex justify-between items-center'>
              <button className=' px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Upgrade Plan</button>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Admin Hub</button>
            </div>

            <div className=' flex justify-center items-center gap-2'>
              <div className=' flex gap-1'>
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
              </div>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Write a Review</button>
            </div>

            <div className='shadow_card p-2 rounded-lg flex justify-around items-center'>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>12</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>21</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>54</p>
            </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4 p-3 rounded-xl bg-white shadow_card'>
            <div className=' flex justify-between items-center'>
              <button className=' px-3 rounded-lg bg-indigo-600 text-white'>
                Platinium
              </button>

              <CiMenuKebab />
            </div>

            <div className=' flex flex-col justify-center items-center'>
              <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className=' rounded-full h-16 w-16 object-cover' />

              <p className=' font-medium text-lg text-blue-400'>Rojodiya Infotech</p>
              <p className=' text-xs text-sky-900'>xyz@gmail.com</p>
              <p className=' text-sm'>2024-04-02 14:52:34</p>
            </div>

            <div className=' flex justify-between items-center'>
              <button className=' px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Upgrade Plan</button>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Admin Hub</button>
            </div>

            <div className=' flex justify-center items-center gap-2'>
              <div className=' flex gap-1'>
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
              </div>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Write a Review</button>
            </div>

            <div className='shadow_card p-2 rounded-lg flex justify-around items-center'>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>12</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>21</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>54</p>
            </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4 p-3 rounded-xl bg-white shadow_card'>
            <div className=' flex justify-between items-center'>
              <button className=' px-3 rounded-lg bg-indigo-600 text-white'>
                Platinium
              </button>

              <CiMenuKebab />
            </div>

            <div className=' flex flex-col justify-center items-center'>
              <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className=' rounded-full h-16 w-16 object-cover' />

              <p className=' font-medium text-lg text-blue-400'>Rojodiya Infotech</p>
              <p className=' text-xs text-sky-900'>xyz@gmail.com</p>
              <p className=' text-sm'>2024-04-02 14:52:34</p>
            </div>

            <div className=' flex justify-between items-center'>
              <button className=' px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Upgrade Plan</button>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Admin Hub</button>
            </div>

            <div className=' flex justify-center items-center gap-2'>
              <div className=' flex gap-1'>
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
                <FaStar className=' text-yellow-400 text-xl' />
              </div>

              <button className='px-3 py-1 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 transition-all duration-300 hover:text-white'>Write a Review</button>
            </div>

            <div className='shadow_card p-2 rounded-lg flex justify-around items-center'>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>12</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>21</p>
            </div>
            <div className=' flex gap-1'>
              <MdOutlinePersonOutline/>
              <p className=' text-xs'>54</p>
            </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Companies
