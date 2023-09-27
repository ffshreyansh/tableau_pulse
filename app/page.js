"use client"
import Nav from '@/components/Nav'
import PopupModal from '@/components/PopupModal'
import ScreenOne from '@/components/ScreenOne'
import ScreenTwo from '@/components/ScreenTwo'
import React, {useState, useEffect} from 'react'

const page = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Use setTimeout to open the modal after 3 seconds
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 1000);

    // Clear the timer to prevent opening the modal if the user interacts with the page
    return () => clearTimeout(timer);
  }, []);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className='h-screen'>
      <PopupModal isOpen={isModalOpen} closeModal={closeModal} />
      <Nav/>
      <ScreenOne/>
      <ScreenTwo/>
    </div>
  )
}

export default page