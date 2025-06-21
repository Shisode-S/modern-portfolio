import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center text-white text-[30px]'>
        Ss
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-white text-[22px]'>
        <a
          href='mailto:shisodeswapnil2022@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Email'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/Shisode-S' // Update if your GitHub handle differs
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/swapnil-shisode-0b8638165/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
