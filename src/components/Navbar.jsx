import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faArrowRightFromBracket, faSearch  } from '@fortawesome/free-solid-svg-icons'
import useThemeStore from '../context'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
  const {darkTheme, isLoggedIn} = useThemeStore();
  return (
    <div className={`mb-12 mt-0 flex w-screen fixed top-16 md:flex-col md:dark:bg-[#343336] md:rounded-3xl md:bg-white bg-inherit text-xl justify-center items-center  md:fixed md:left-10 md:top-32 md:w-[15%] md:text-center shadow-xl`} >
      <NavLink to='/'> <button className='p-5 '><FontAwesomeIcon className="hover:text-purple-500" icon={faHome} color={darkTheme?'white':'black'  } size='lg' /></button> </NavLink>
      <NavLink to='/profile'> <button className='p-5 '><FontAwesomeIcon className="hover:text-purple-500" icon={faUser} color={darkTheme ? 'white' : 'black'} size='lg' /></button></NavLink>
      <NavLink to='/search'> <button className='p-5 '><FontAwesomeIcon className="hover:text-purple-500" icon={faSearch} color={darkTheme?'white':'black'  } size='lg' /></button> </NavLink>
      <button className='px-4 p-3  bg-purple-600 rounded-full text-white font-semibold lg:text-lg text-sm hover:bg-purple-500 ' style={{ whiteSpace: 'nowrap' }} >Create Post</button>
      <button className='sm:mb-2 p-4'><FontAwesomeIcon className="hover:text-purple-500" icon={faArrowRightFromBracket} color={darkTheme?'white':'black' } size='lg'/></button>
    </div>
  )
}
export default Navbar