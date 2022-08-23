import React, { Fragment } from 'react'
import Navbar from '../Component/Navbar'
// import{Outlet}  from 'react-router-dom'
// import './App.css';



const SharedLayout = (props) => {
  return (
    <>
    {/* <header className="App-header">
    <Navbar/>
    </header>
    
    <Outlet/> */}

    <Fragment>
      <div>
        <Navbar/>
        {props.children}
      </div>
    </Fragment>
    </>
  )
}

export default SharedLayout