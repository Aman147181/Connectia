import React from 'react'

const Navbar = () => {
    const navItems = ['home', 'profile', 'theme', 'logout'];
  return (
      <div className='flex flex-col text-xl justify-center items-center fixed left-10 top-32 bg-pink-50 w-[15%] text-center shadow-lg'>
        {navItems.map(el=><li key={el} className='w-full py-5 bg-inherit text-purple-950 list-none active:bg-blue-500'>{el}</li>)}   
    </div>
  )
}

export default Navbar