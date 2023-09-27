import React from 'react';

const ScreenOne = () => {
  return (
    <div className='flex items-center flex-row h-64 p-10 font-inter'>
      <div className='w-1/2 h-64'>
        <span className='text-4xl font-medium'>Hey, Caroline!</span> <br />
        <span className='text-4xl font-medium'>Here's today's pulse.</span><br />
        <p className=' font-semibold mt-6 leading-7'>
            <span className='p-1 rounded-lg bg-green'>Appliance Sales</span> is seeing an usual spike, while <span className='p-1 rounded-lg bg-purple'>Branch Revenue</span> and <span className='p-1 rounded-lg bg-purple'>Campaign ROI</span><br />
             are steadily increasing. Of the 12 metrics you are following, 1 is unusual.
        </p>
        <div className='mt-6 flex h-14 font-medium'>
            <p className='bg-green w-28 rounded-full flex items-center justify-center'>Unusual </p><p className='bg-green rounded-full  w-14 flex items-center justify-center dd'> <span className='bg-dg rounded-full px-4 py-2'>1</span></p>
            <p className='bg-purple  w-40 rounded-full flex items-center justify-between pl-6 pr-1 ml-8'>Active <span className='bg-dp rounded-full px-4 py-3'>12</span></p>
        </div>
      </div>
      <div className='w-1/2 h-64 rounded-3xl relative' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596468138838-0f34c2d0773b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60)' }}>
            <span className=' font-semibold glassmorphic absolute bottom-8 left-4 flex items-center gap-8 cursor-pointer'>AI Data Visualization
            <img width="20" height="20" className=' rotate-90' src="https://img.icons8.com/ios/50/000000/up-left-arrow.png" alt="up-left-arrow"/>
            </span>

      </div>
    </div>
  );
}

export default ScreenOne;
