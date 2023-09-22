import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { account } from "../appwriteConfig";
import useThemeStore from "../context";
const Login = () => {
  const { loggedUser,setLoggedUser} = useThemeStore();
  const navigate = useNavigate()
  const [user, setuser] = useState({
      email: "",
      password: ""
  })
  
  const loginUser = async(e) => {

      e.preventDefault()
      const promise = account.createEmailSession(user.email , user.password);

    promise.then(
      function (response) {
        console.log(response)
        setLoggedUser(response.userId);
        navigate('/');
      }, function (error) {
          console.log(error); // Failure
          setuser({
              email: "",
              password: ""
          })
      });
  }



  return (
    <div className="max-h-screen flex items-center justify-center bg-[rgb(248,248,246)] dark:bg-[#1f1b24]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={loginUser}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
            autoComplete="off" type="email" id='email' placeholder="name@gmail.com" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              autoComplete="off" id="password"  type="password" placeholder="Password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <button 
            type="submit"
            className="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <NavLink to='/register'  className="text-blue-700 hover:underline dark:text-blue-500">Create account</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
