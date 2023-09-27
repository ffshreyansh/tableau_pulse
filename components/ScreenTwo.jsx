"use client"
import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const ScreenTwo = () => {
    const [selectedOption, setSelectedOption] = useState("Following");

    function select(option) {
        setSelectedOption(option);
    }

    return (
        <div className='mx-10 font-inter'>
            <div className='flex items-center justify-between  border-b-2'>
                <div className='flex items-center gap-6 cc '>
                    <span
                        className={selectedOption === "Following" ? 'font-semibold' : 'font-normal'}
                        onClick={() => select("Following")}
                    >
                        Following
                    </span>
                    <span
                        className={selectedOption === "ForYou" ? 'font-semibold' : 'font-normal'}
                        onClick={() => select("ForYou")}
                    >
                        For you
                    </span>
                    <span
                        className={selectedOption === "AllMetrics" ? 'font-semibold' : 'font-normal'}
                        onClick={() => select("AllMetrics")}
                    >
                        All metrics
                    </span>
                </div>
                <div>
                    <input
                        type="text"
                        className='p-2 w-80 h-14 outline-0 decoration-transparent'
                        name="search"
                        id="search"
                        placeholder='Search for metrics'
                    />
                </div>
            </div>
            <div className='flex items-center justify-evenly w-full gap-6 py-4'>
                <div className='w-1/2 h-96 rounded-3xl bg-green p-6 flex flex-col justify-evenly'>
                    <div className='flex items-center justify-between'>
                        <span className=' font-semibold text-xl'>Appliance Sales</span>
                        <span className='bg-ddg text-white text-sm font-medium rounded-full px-2'>Unusual</span>
                    </div>
                    <span className='font-bold text-4xl my-3'>{selectedOption === "Following" ? '1,675 units' : '1,200 units'}</span>
                    <div className='gp'>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#9dc3b4" strokeWidth={4} name=" " />
                                {/* You can add more lines with different data keys and colors if needed */}
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} name="Unique Visitors" /> */}
                            </LineChart>
                        </ResponsiveContainer>
                        <span className='flex items-center justify-between font-medium bg-dg py-2 px-4 rounded-xl'>17% above the normal range <span>›</span></span>
                    </div>
                </div>
                <div className='w-1/4 h-96 rounded-3xl bg-purple flex flex-col p-6 justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                            <span className=' font-semibold text-xl'>Revenue</span>
                            <span className='bg-ddp text-white text-sm font-medium rounded-full px-2'>Normal</span>
                        </div>
                        <span className='font-bold text-4xl my-3'>{selectedOption === "Following" ? '$10.7M' : '$20.7M'}</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='flex items-center justify-between py-2 px-4 rounded-xl bg-dp'>AI Summary<span>⁜</span></span>
                        <span className='flex items-center justify-between py-2 px-4 rounded-xl bg-black text-white'>Data Insights<span>※</span></span>
                    </div>
                </div>
                <div className='w-1/4 h-96 rounded-3xl bg-purple flex flex-col p-6 justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                            <span className=' font-semibold text-xl'>Campaign ROI</span>
                            <span className='bg-ddp text-white text-sm font-medium rounded-full px-2'>Normal</span>
                        </div>
                        <span className='font-bold text-4xl my-3'>{selectedOption === "Following" ? '379%' : '250%'}</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='flex items-center justify-between py-2 px-4 rounded-xl bg-dp'>AI Summary<span>⁜</span></span>
                        <span className='flex items-center justify-between py-2 px-4 rounded-xl bg-black text-white'>Data Insights<span>※</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenTwo;
