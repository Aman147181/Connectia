import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faArrowRightFromBracket, faSearch  } from '@fortawesome/free-solid-svg-icons'
import useThemeStore from '../context'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
  const {darkTheme, logout} = useThemeStore();
  return (
    <div className={`mb-12 mt-0 flex w-screen space-x-10 custom_xl:space-x-0 fixed top-16 custom_xl:flex-col custom_xl:dark:bg-[#343336] custom_xl:rounded-3xl custom_xl:bg-white bg-[#f2f3f4] dark:bg-[#1f1b24] text-xl justify-center items-center  custom_xl:fixed custom_xl:left-10 custom_xl:top-32 custom_xl:w-[15%] custom_xl:text-center shadow-xl`} >
      <NavLink to='/'> <button className='p-5 '><FontAwesomeIcon className="hover:text-purple-500" icon={faHome} color={darkTheme?'white':'black'  } size='lg' /></button> </NavLink>
      <NavLink to='/profile'> <button className='p-5 '><FontAwesomeIcon className="hover:text-purple-500" icon={faUser} color={darkTheme ? 'white' : 'black'} size='lg' /></button></NavLink>
      <NavLink to='/search'> <button className='p-5 '><FontAwesomeIcon className="hover:text-purple-500" icon={faSearch} color={darkTheme?'white':'black'  } size='lg' /></button> </NavLink>
      <button className='sm:mb-2 p-4'><FontAwesomeIcon className="hover:text-purple-500" icon={faArrowRightFromBracket} color={darkTheme?'white':'black' } size='lg' onClick={()=>logout()}/></button>
    </div>
  )
}
export default Navbar