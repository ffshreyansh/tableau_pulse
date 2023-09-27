
import React from 'react';
import Modal from 'react-modal';
const customStyle = {
  content: {
    width: '45%', // Adjust the width as needed
    // height: '80%', // Adjust the height as needed
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#e0e1ff',
    boxShadow: '10px 10px 29px -15px rgba(0,0,0,0.62)',
    WebkitBoxShadow: '10px 10px 29px -15px rgba(0,0,0,0.62)',
    MozBoxShadow: '10px 10px 29px -15px rgba(0,0,0,0.62)',
    display: 'flex',
    padding: 0,
    borderRadius: '30px'

  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: '20px', 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

  },
};

const PopupModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyle}
    >
        <span className='absolute right-6 top-2 cursor-pointer' onClick={closeModal}>×</span>

      <div style={customStyle.contentContainer} className=' font-inter justify-evenly'>
        <div style={customStyle.imageContainer}>
          <img src="/me.jpg" alt="Image" className=' grayscale' style={{ maxWidth: '100%' }} />
        </div>
        <div style={customStyle.textContainer}>
          <h2 className='text-5xl font-bold'>Hi, I am Shreyansh!</h2>
          <p className='text-sm'>Made this dashboard to showcase my frontend skills. You can check the original design credit <a href="https://dribbble.com/shots/22625844-AI-Data-Analytics-and-Visualisation-Dashboard-by-Syncrely" target='_blank'><em className='font-bold'>here</em></a></p>
          <div className='flex flex-col gap-2'>
          <button  className='bg-black w-full text-white h-10 rounded-xl'><a href="https://github.com/ffshreyansh" target='_blank'>Star me on Github</a></button>
          <button className=' bg-white border-black border-2 font-semibold w-full text-black h-10 rounded-xl'><a href="https://www.shreyanshkr.com" target='_blank'>Portfolio</a></button>

          {/* <button  className=' bg-slate-600 w-full text-white h-10 rounded-xl'>Close Modal</button> */}
          </div>
        </div> 
      </div>
    </Modal>
  );
};

export default PopupModal;
