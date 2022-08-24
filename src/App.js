import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from "./Pages/Property";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import { LoginProvider } from "./Component/Context/Logincontext";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <LoginProvider>
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
            <Route path="Register" element={<Register />} />
            {/* <Route path="Login" element={<Login/>}/> */}
          </Routes>
        </div>
        {/* </Navbar> */}
        {/* </Route> */}
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
