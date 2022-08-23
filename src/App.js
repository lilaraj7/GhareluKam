import React,{useState} from 'react';
import './App.css';
// import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Property from './Pages/Property';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Component/login/Login';
// import SharedLayout from './Pages/SharedLayout';
// import Navbar from '../Component/Navbar';

function App() {
  
  return (
    <BrowserRouter>
    {/* <header className="App-header">
    <Navbar/>
    </header> */}
    <div className='main-home'>
    <Routes>
   
      <Route path='/' element={<Login/>}/>
      {/* <Route path="gharelu" element={<SharedLayout/>}> */}
      {/* <Navbar> */}
      <Route path='home' element={<Home/>}/>
      <Route path='Property' element={<Property/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='Blogs' element={<Blogs/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Register' element={<Register/>}/>
      {/* </Navbar> */}
      {/* </Route> */}
    </Routes>
    </div>
    </BrowserRouter>



  );
}

export default App;
