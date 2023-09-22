import React, { useEffect, useState } from 'react';
import Post from './Post';
import { databases } from '../appwriteConfig';

const MainContent = () => {
  const [posts, setPosts] = useState([]); // Change 'post' to 'posts' to store an array of posts

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await databases.listDocuments(
        '650d707b926aa993a711',
        '650d7088029ec473d0ca',   
      );
      console.log(response); // Success
      setPosts(response.documents); // Update state with the fetched documents
    } catch (error) {
      console.error(error); // Failure
    }
  };
    
  return (
    <div className='py-20'>
  <div className=" bg-white dark:bg-slate-800 shadow-xl rounded-2xl mx-auto my-10 max-w-md md:max-w-2xl px-10 py-5">
    <textarea
      className="bg-gray-100 dark:bg-gray-700 w-full rounded-lg shadow border dark:text-slate-100 p-2"
      rows={5}
      placeholder="Speak your mind"
      defaultValue={""}
    />
    <div className="w-full flex flex-row flex-wrap mt-3">
      <div className="w-2/3">
      <button className='px-4 p-3 float-left bg-purple-600 rounded-full text-white font-semibold lg:text-lg text-sm hover:bg-purple-500 ' style={{ whiteSpace: 'nowrap' }} >Create Post</button>
      </div>
    </div>
  </div>

     {posts.map((post) => (
        <Post key={post.$id} post={post} />
      ))}
    </div>
  )
}
  
export default MainContent