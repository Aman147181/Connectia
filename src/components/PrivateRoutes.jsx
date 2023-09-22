import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useThemeStore from '../context'
const PrivateRoutes = () => {
    let { loggedUser } = useThemeStore();
    console.log(loggedUser);
  return (
    <>
      {loggedUser ? <Outlet/> : <Navigate to="/login"/>}
    </>
  )
}

export default PrivateRoutes