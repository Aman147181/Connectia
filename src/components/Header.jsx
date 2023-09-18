import React from 'react'

const Header = () => {
  return (
      <div className='flex fixed top-0 justify-between items-center w-screen h-[70px] bg-blue-400'>
          <div className='ml-5 font-dance text-5xl font-bold text-purple-950'>Connectia</div>
          <div className='w-9/12 flex justify-center'>
            <input className='h-10 w-7/12 rounded-full bg-slate-50 focus:outline-none placeholder:text-gray-600 placeholder:pl-5 pl-5 focus:bg-gray-50 focus:h-[42px] text-black ' placeholder='Search...'/>
          </div>
<button className='p-2 px-5 mr-5 bg-black rounded-full text-slate-200 font-semibold text-xl hover:bg-white hover:text-black'>Create Post</button>
    </div>
  )
}

export default Header