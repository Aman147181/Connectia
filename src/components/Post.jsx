import React from 'react'

const Post = ({ post }) => {
  return (
    <>
  <div className="flex bg-white dark:bg-slate-800 shadow-xl rounded-2xl mx-auto my-10 max-w-md md:max-w-2xl px-10 py-5">
    {/*horizantil margin is just for display*/}
    <div className="flex items-start px-4 py-6">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100 -mt-1">
                { post.user_name}{" "}
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{(post.date)} </p>
        <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">
          {post.Body}
        </p>
        <div className="mt-4 flex items-center">
          <div className="flex text-gray-700 dark:text-gray-300 text-sm mr-3">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className='dark:text-gray-300'>12</span>
          </div>
          <div className="flex text-gray-700 dark:text-gray-300 text-sm mr-8">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span className='dark:text-gray-300'>8</span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Post