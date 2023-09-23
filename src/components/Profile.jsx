import React, { useEffect, useState } from 'react';
import Post from './Post';
import { databases } from '../appwriteConfig';
import { account } from '../appwriteConfig';
const Profile = () => {
  const [postlists, setPostLists] = useState([]); 
  const [postName, setPostName] = useState(''); 
  const getUser = async () => {
    const currentAccount = await account.get();
    console.log(currentAccount);
    setPostName(currentAccount.name);
  }




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
  <div className='py-10'>
    {postlists.filter((el)=>{return el.user_name===postName}).map((post) => (
      <Post key={post.$id} post={post} />
    ))}
  </div>
  )
}

export default Profile