import React, { useState } from 'react';
import tbl from '@/assets/tbl-01.svg';
import Image from 'next/image';

const Nav = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const imageSrc = hover ? '/bell-white.svg' : '/bell-solid.svg';

  return (
    <div className='font-inter'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex items-center justify-between px-10 py-4">
        <a href="/" className="font-dela"><Image src={tbl} alt="logo" width={180} /></a>

        <div className='flex items-center gap-4 '>
          <a href="" className='rounded-full w-10 h-10 border-2 flex items-center justify-center bell' onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <img width="16" height="16" src={imageSrc} alt="notification icon" />
          </a>
          <a href='' className='rounded-full w-10 h-10 overflow-hidden flex items-center justify-end'><Image className='w-10' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" width={20} height={20} alt='profile pic' /></a>
          <a href="" className='flex items-center gap-2 justify-center bg-black text-white w-24 h-10 px-3 py-2 rounded-2xl text-xs'>Menu
            <img width="15" height="15" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png" alt="menu--v6" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
