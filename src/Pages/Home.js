import React, { useState } from "react";
import Main from "../Component/main/Main";
import "./home.css";
import Form from "../Component/form/Form";
import Form2 from "../Component/form/Form2";
// import Topslider from "../Component/main/Topslider";
// import Navbar from '../Component/Navbar';

function Home() {
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="main-home-container row">
        <aside className="main-side-form col-xl-4">
          {show ? (
            <Form change={handleChange} />
          ) : (
            <Form2 change={handleChange} />
          )}
        </aside>
        {/* <div className="main-home-slider">
          <Topslider/>
        </div> */}
        <div className="main-home-cards col-xl-8">
          <Main />
        </div>
      </div>
    </>
  );
}

export default Home;
