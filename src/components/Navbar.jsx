import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import useThemeStore from '../context'
const Navbar = () => {
  const {darkTheme} = useThemeStore();
  return (
    <div className=' mt-24 flex lg:flex-col dark:bg-slate-700 bg-gray-200 text-xl justify-center items-center md:fixed md:left-10 md:top-32 md:w-[15%] md:text-center shadow-lg'>
      <button className='p-5'><FontAwesomeIcon icon={faHome} color={darkTheme?'white':'black' } /></button> 
      <button className='p-5'><FontAwesomeIcon icon={faUser} color={darkTheme?'white':'black' }/></button>
<button className='px-5 p-3 mb-2 bg-black rounded-full text-slate-200 font-semibold lg:text-xl text-lg hover:bg-white hover:text-black 'style={{ whiteSpace: 'nowrap' }}>Create Post</button>
    </div>
  )
}
export default Navbar