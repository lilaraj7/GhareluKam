import React from 'react'
import Navbar from '../Component/Navbar'
import{Outlet}  from 'react-router-dom'
import './App.css';


const SharedLayout = () => {
  return (
    <>
    <header className="App-header">
    <Navbar/>
    </header>
    
    <Outlet/>
    </>
  )
}

export default SharedLayout