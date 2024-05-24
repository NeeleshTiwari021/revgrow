import React from 'react'
import Navbar from '../../commoncomponents/navbar'
import { LuUsers2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";
import { GoPersonAdd } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import { RiTodoLine } from "react-icons/ri";
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar, Doughnut, Line, PolarArea } from 'react-chartjs-2'
import './dashboard.css';

const Dashboard = () => {

    const data = [
        {
            "label": "ads",
            "value": 200
        },
        {
            "label": "subscription",
            "value": 100
        },
        {
            "label": "sponsership",
            "value": 150
        },
        {
            "label": "brand",
            "value": 175
        },
    ]

    return (
        <div class="p-4 main_block_superadmin">
            <Navbar />
            <div className=' flex flex-col gap-8 mt-4'>
                <h1 className=' text-3xl font-semibold'>Dashboard</h1>

                <div className=' grid grid-cols-3 gap-2 place-content-center'>
                    <div className='dashboard_cards flex justify-between items-center bg-orange-500 p-4 rounded-xl'>
                        <div className=' text-white'>
                            <p className=' text-3xl font-semibold'>17</p>
                            <p>Total User</p>
                        </div>
                        <div>
                            <LuUsers2 className=' text-5xl text-white' />
                        </div>
                    </div>

                    <div className='dashboard_cards flex justify-between items-center bg-orange-500 p-4 rounded-xl'>
                        <div className=' text-white'>
                            <p className=' text-3xl font-semibold'>17</p>
                            <p>Total User</p>
                        </div>
                        <div>
                            <FiShoppingCart className=' text-5xl text-white' />
                        </div>
                    </div>

                    <div className='dashboard_cards flex justify-between items-center bg-orange-500 p-4 rounded-xl'>
                        <div className=' text-white'>
                            <p className=' text-3xl font-semibold'>40</p>
                            <p>Total Order</p>
                        </div>
                        <div>
                            <TfiCup className=' text-5xl text-white' />
                        </div>
                    </div>

                    <div className='dashboard_cards flex justify-between items-center bg-orange-500 p-4 rounded-xl'>
                        <div className=' text-white'>
                            <p className=' text-3xl font-semibold'>4</p>
                            <p>Total Plans</p>
                        </div>
                        <div>
                            <GoPersonAdd className=' text-5xl text-white' />
                        </div>
                    </div>

                    <div className='dashboard_cards flex justify-between items-center bg-orange-500 p-4 rounded-xl'>
                        <div className=' text-white'>
                            <p className=' text-3xl font-semibold'>17</p>
                            <p>Total User</p>
                        </div>
                        <div>
                            <RiBillLine className=' text-5xl text-white' />
                        </div>
                    </div>

                    <div className='dashboard_cards flex justify-between items-center bg-orange-500 p-4 rounded-xl'>
                        <div className=' text-white'>
                            <p className=' text-3xl font-semibold'>17</p>
                            <p>About to Expire</p>
                        </div>
                        <div>
                            <RiTodoLine className=' text-5xl text-white' />
                        </div>
                    </div>


                </div>

                <div className=' flex flex-col gap-4 bg-white rounded-2xl p-3'>
                    <h1 className=' font-semibold text-2xl'>Recent Order</h1>

                    <Line
                    data={{
                        labels: data.map((item) => item.label),
                        datasets: [
                            {
                                label: "counts",
                                data: data.map((item) => item.value),
                                backgroundColor: ["#7A7AFF", "#ffdd33", "#ff9b2a", "#4e5fcc"],
                                borderColor: ["#7A7AFF"], // Line color
                                borderWidth: 2,
                            }
                        ],
                    }}
                    options={{
                        tension: 0.4,
                        plugins: {
                            legend: {
                                display: true,
                            },
                        },
                    }}
                />
                </div>

                <div className=' flex items-center gap-2 w-full'>
                    <div className='bg-white rounded-2xl p-3 flex flex-col gap-3'>
                    <h1 className=' font-semibold text-2xl'>Subscriptions</h1>
                    <Doughnut
                            data={{
                                labels: data.map((item) => item.label),
                                datasets: [
                                    {
                                        label: "counts",
                                        borderRadius: 5,
                                        data: data.map((item) => item.value),
                                        backgroundColor: ["#7A7AFF", "#ffdd33", "#ff9b2a", "#4e5fcc"],
                                    }
                                ],
                            }}
                            options={{
                                tension: 0.4,
                                plugins: {
                                    legend: {
                                        display: true,
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='bg-white rounded-2xl p-3 flex flex-col gap-3 w-full'>
                    <h1 className=' font-semibold text-2xl'>Monthly Orders</h1>
                    <Bar
                            data={{
                                labels: data.map((item) => item.label),
                                datasets: [
                                    {
                                        label: "counts",
                                        borderRadius: 5,
                                        data: data.map((item) => item.value),
                                        backgroundColor: ["#7A7AFF", "#ffdd33", "#ff9b2a", "#4e5fcc"],
                                    }
                                ],
                            }}
                            options={{
                                tension: 0.4,
                                plugins: {
                                    legend: {
                                        display: true,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Dashboard
