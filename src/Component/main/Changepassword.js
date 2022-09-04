import React,{useContext} from 'react'
import $ from "jquery";
import './changepass.css'


 const Changepassword = (props) => {
    const del = () => {
        $(".changepass").fadeOut(1000);
      };
  return (
    <>
    {props.changepass ?( 
    <div className="containeres justify-content-center changepass">
       <span className="p-h1-t"><h2 className="text-align-center">Change password</h2>
       <button className='btn newbtn' onClick={del}>X</button></span> 
       <div className="row flex-column">
          <div className="col-6 w-100 px-3">
            <label>Old password</label>
            <input
              className="form-control"
              type="text"
            
            />
          </div>
          <div className="col-6 w-100 px-3">
            <label>New Password</label>
            <input
              className=" form-control"
              type="text"
             
            />
          </div>
          <div className="col-6 w-100 px-3">
            <label>Confirm Password</label>
            <input
              className=" form-control"
              type="text"
             
            />
          </div>
        </div>
    </div>):(<></>)}
    
    </>
   
  )
}
export default Changepassword;