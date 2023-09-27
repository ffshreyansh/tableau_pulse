"use client"
import React, { useState } from 'react';

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
                <div className='w-1/2 h-72 rounded-3xl bg-green p-6'>
                    <div className='flex items-center justify-between'>
                        <span className=' font-semibold text-xl'>Appliance Sales</span>
                        <span className='bg-dg text-white text-sm font-medium rounded-full px-2'>Unusual</span>
                    </div>
                    <span className='font-bold text-4xl'>1,675 units</span>
                    <div className='gp'>

                    </div>
                </div>
                <div className='w-1/4 h-72 rounded-3xl bg-green'></div>
                <div className='w-1/4 h-72 rounded-3xl bg-green'></div>
            </div>
        </div>
    );
};

export default ScreenTwo;
