import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { account } from '../appwriteConfig';
import { ID } from 'appwrite';
const Register = () => {

  const naviate = useNavigate(); 
  const [user, setuser] = useState({
      name: "",
      email: "",
      password: ""
  })

  const signupUser = async(e) => {
      e.preventDefault()

      // signup
      const promise = account.create(
          ID.unique(),
          user.email,
          user.password,
          user.name
      )

      promise.then(
          function(response) {
              console.log(response);
              naviate('/login') 
          }, 
          function(error){
              console.log(error);
          }
      )
  }

  return (
    <section className="bg-gray-50 dark:bg-[#1f1b24]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={signupUser}>
            <div>
            <label
              htmlFor="rname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text" id='rname' value={user.name} onChange={(e) => setuser({...user, name: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="remail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
             type="email"  id='remail' value={user.email}  onChange={(e) => setuser({...user, email: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              required=""
            />
              </div>
          <div>
            <label
              htmlFor="rpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password" id='rpassword' placeholder="Password" value={user.password} onChange={(e) => setuser({...user, password: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <NavLink to='/login'  className="text-blue-700 hover:underline dark:text-blue-500">Login here</NavLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Register