import React, { useEffect, useState } from 'react';
import Post from './Post';
import { databases } from '../appwriteConfig';
import { account } from '../appwriteConfig';
import { ID } from 'appwrite';

const MainContent = () => {
  const [postlists, setPostLists] = useState([]); // Change 'post' to 'posts' to store an array of posts
  const [postName, setPostName] = useState(''); 
  const [postContent, setPostContent] = useState(''); 
  const getUser = async () => {
    const currentAccount = await account.get();
    console.log(currentAccount);
    setPostName(currentAccount.name);
  }



  const createPost = async () => {
    // Ensure postContent and postName are strings within length limits
    const body = postContent.toString() // Limit the Body attribute to 500 characters
    const userName = postName.toString() // Limit the user_name attribute to 500 characters
    const postDate = new Date();
    console.log(postDate);
    const promise = await databases.createDocument(
      '650d707b926aa993a711',
      '650d7088029ec473d0ca',
      ID.unique(),
      {
        Body: body, // Use the sanitized body
        user_name: userName,
        date:postDate,
      }
    ).then(() => {
     getPostList();
    })
  
   
  };
  



  useEffect(() => {
    getPostList();
    getUser();
  }, []);

  const getPostList = async () => {
    try {
      const response = await databases.listDocuments(
        '650d707b926aa993a711',
        '650d7088029ec473d0ca',   
      );
      console.log(response); // Success
      setPostLists(response.documents); // Update state with the fetched documents
    } catch (error) {
      console.error(error); // Failure
    }
  };
    
  return (
    <div className='py-20'>
  <div className=" bg-white dark:bg-slate-700 shadow-xl rounded-3xl mx-auto my-10 max-w-xl md:max-w-4xl px-10 py-10">
    <textarea
      className="bg-gray-100 dark:bg-gray-700 w-full rounded-lg shadow border dark:text-slate-100 p-2"
      rows={5}
      placeholder="Speak your mind"
          defaultValue={""}
          onChange={(e)=>{setPostContent(e.target.value);}}
    />
    <div className="w-full flex flex-row flex-wrap mt-3">
      <div className="w-2/3">
      <button className='px-4 p-3 float-left bg-purple-600 rounded-full text-white font-semibold lg:text-lg text-sm hover:bg-purple-500 ' style={{ whiteSpace: 'nowrap' }} onClick={()=>createPost()} >Create Post</button>
      </div>
    </div>
  </div>

     {postlists.map((post) => (
        <Post key={post.$id} post={post} />
      ))}
    </div>
  )
}
  
export default MainContent