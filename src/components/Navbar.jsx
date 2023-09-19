import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faArrowRightFromBracket  } from '@fortawesome/free-solid-svg-icons'
import useThemeStore from '../context'
const Navbar = () => {
  const {darkTheme} = useThemeStore();
  return (
    <div className=' mb-12 mt-0 flex md:flex-col dark:bg-[#343336] md:rounded-3xl md:bg-white bg-white text-xl justify-center items-center md:fixed md:left-10 md:top-32 md:w-[15%] md:text-center shadow-lg'>
      <button className='p-5'><FontAwesomeIcon icon={faHome} color={darkTheme?'white':'black' } /></button> 
      <button className='p-5'><FontAwesomeIcon icon={faUser} color={darkTheme?'white':'black' }/></button>
      <button className='px-4 p-3  bg-purple-600 rounded-full text-white font-semibold lg:text-lg text-sm hover:bg-purple-500 ' style={{ whiteSpace: 'nowrap' }}>Create Post</button>
      <button className='sm:mb-2 p-4'><FontAwesomeIcon icon={faArrowRightFromBracket} color={darkTheme?'white':'black' } /></button>
    </div>
  )
}
export default Navbar