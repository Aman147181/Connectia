import React from 'react'
import useThemeStore from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const {  darkTheme ,toggleDarkTheme } = useThemeStore();
  return (
    
      <div className='flex fixed top-0 justify-between items-center w-screen h-[70px] bg-white dark:bg-[#343336]'>
          <div className='lg:mx-20 mx-5 font-dance text-5xl font-extrabold text-purple-600'>Connectia</div>
          <div className='w-full flex justify-start'>
            <input className='p-2 xl:w-6/12 lg:w-8/12 md:w-10/12 hidden md:block rounded-xl dark:bg-[#4b4a4d] focus:outline-none dark:placeholder:text-slate-300 placeholder:text-slate-600 placeholder:pl-5 pl-5 focus:bg-gray-200 focus:h-[42px] text-black bg-slate-100 ' placeholder='Search...'/>
          </div>
          <button className='mx-20'
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