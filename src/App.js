import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from "./Pages/Property";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
// import Register from "./Pages/Register";
import { LoginProvider } from "./Component/Context/Logincontext";
import { ProfileProvider } from "./Component/Context/Profilecontext";
import { Addpropertyprovider } from "./Component/Context/Addpropertycntext";


import Navbar from "./Component/Navbar";
import Userprofile from "./Component/Userprofile";
import Addproperty from "./Component/Addproperty";
function App() {
  return (
    <LoginProvider>
            <ProfileProvider>
              <Addpropertyprovider>
            <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="main-home">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="Property" element={<Property />} />
            <Route path="Services" element={<Services />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="Contact" element={<Contact />} />
            {/* <Route path="Register" element={<Register />} /> */}
            <Route path="Userprofile" element={<Userprofile/>}/>
            <Route path="Addproperty" element={<Addproperty/>}/>

          </Routes>
        </div>
        
        
      </BrowserRouter>
      </Addpropertyprovider>
            </ProfileProvider>

      
    </LoginProvider>
  );
}

export default App;
