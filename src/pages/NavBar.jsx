import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthConsumer } from '../hooks/Auth'


const NavBar = () => {
  const [{auth}] = AuthConsumer()
  return (
   <>
    <nav>
        <NavLink className='navLink' to='/' >Home</NavLink>
        {auth && 
        <>
        <NavLink className='navLink' to='/dashboard' >Dashboard</NavLink>
        <NavLink className='navLink' to='/setting' >Settings</NavLink>
        </>
        }
        {auth?null:<NavLink className='navLink' to='/login' >Login</NavLink>}
    </nav>
    <Outlet/>
   </>
  )
}

export default NavBar
