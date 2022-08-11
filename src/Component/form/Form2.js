import React,{useState} from "react";
import "./form2.css";
import { BiArrowBack } from "react-icons/bi";
import { Prev } from "react-bootstrap/esm/PageItem";


const Form2 = (props) => {
  const [viewform2,setViewform2]=useState({
    search:"",
    service:"",
    address:"",
    district:""
})
const handleChange =(e) =>{
  const {name,value}= e.target;
  setViewform2(()=>{
    return{...Prev,[name]:value}
  })
}

const handleSubmit =(e)=>{
  e.PreventDefult();
  console.log(viewform2)
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <h1>Find best home services for your home</h1>
        <div className="mb-3">
          <label for="Search"  className="form-label">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            name="search"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="Search" className="form-label">
            Service
          </label>
          <input
            type="search"
            className="form-control"
            name="service"
            onChange={handleChange}
          />
        </div>
        <div className="row pe-0">
          <div className="col-sm">
            <label>Address</label>
            <input type="text" className="form-control" name="address" onChange={handleChange}/>
          </div>
          <div className="col-sm p-sm-0">
            <label>Dsitrict</label>
            <input type="text" className="form-control" name="district" onChange={handleChange} />
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChange}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Verified Only
          </label>
        </div>
        <div className="search-below">
          <div className="arrowback" onClick={props.change}>
            <BiArrowBack />
            Search home Service
          </div>
          <div className="se-btn">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form2;
