import React from "react";
import "./form.css";
import { BiArrowBack } from "react-icons/bi";


function Form(props) {

  return (
    <form>
      <div className="row">
        <h1>Find best home services for your home</h1>
        <div>
          <label>Purposes</label>
          <button type="button" className="btn btn-light">
            All
          </button>
          <button type="button" className="btn btn-light">
            Sale
          </button>
        </div>
        <div>
          <div className="mb-3">
            <label for="Search" className="form-label">
              Search
            </label>
            <input
              type="search"
              className="form-control"
            
            />
          </div>
        </div>
        <div className="row pe-0">
          <div className="col-sm">
            <label>Address</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm p-sm-0">
            <label>City</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row pe-0">
          <div className="col-sm">
            <label>State</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm p-sm-0">
            <label>Dsitrict</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row pe-0">
          <div className="col-sm">
            <label>Min Price</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-sm p-sm-0">
            <label>Max Price</label>
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="row pe-0">
          <div className="col-sm">
            <label>Min Area</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-sm p-sm-0">
            <label>Max Area</label>
            <input type="number" className="form-control" />
          </div>
        </div>
        <label>Purposes</label>
        <div>
          
          <button type="button" className="btn btn-light">
            All
          </button>
          <button type="button" className="btn btn-light">
            House
          </button>
          <button type="button" className="btn btn-light">
            Land
          </button>
          <button type="button" className="btn btn-light">
            Flats
          </button>
          <button type="button" className="btn btn-light">
            Appartment
          </button>
          <button type="button" className="btn btn-light">
            Shops
          </button>
          <button type="button" className="btn btn-light">
            Office
          </button>
        </div>
        <div className='search-below'>
           <div className='arrowback' onClick={props.change}>
              <BiArrowBack/>
              Search home Service
          </div>
              <div className="se-btn">
              <button type="button" className="btn btn-primary">Search</button>
              </div>
              </div>
      </div>
    </form>
  );
}

export default Form;
