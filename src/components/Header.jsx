import React from 'react'
import useThemeStore from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const {  darkTheme ,toggleDarkTheme } = useThemeStore();
  return (
    
      <div className='flex fixed top-0 justify-around lg:justify-between items-center w-screen z-10 h-[70px] bg-[rgb(242,243,244)] dark:bg-[#1f1b24]'>
          <div className='lg:mx-20 mx-5 font-dance text-6xl font-extrabold text-purple-600'>Connectia</div>
         
          <button className='lg:mx-20'
        onClick={() => {
          toggleDarkTheme();
        }}
      >
        {darkTheme ? (
          <FontAwesomeIcon icon={faSun} size="2xl" color="white" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="2xl" />
        )}
      </button>


    </div>
  )
}

export default Header