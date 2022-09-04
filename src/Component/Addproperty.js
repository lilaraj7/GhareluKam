import React, { useContext } from "react";
import $ from "jquery";

// import Addpropertycontext from "./Context/Addpropertycntext";
import "./property.css";
const Addproperty = (props) => {
  //   const { addproperty } = useContext(Addpropertycontext);
  //   console.log(addproperty);
  const cut = () => {
    $(".property").fadeOut(1000);
  };
  return (
    <>
      {props.addproperty ? (
        <div className="container w-50 justify-content-center property">
                   <span className="p-h1-t"><h2 className="text-align-center">Add Property</h2>
                   <button className='btn newbtn' onClick={cut}>X</button></span> 

          <form>
            <div className="row">
              <div className="col-12  px-3">
                <label>Title</label>
                <input className="form-control w-100" />
              </div>
            </div>
            <div className="row my-2 px-3">
              <label>Description</label>
              <textarea row="8" className="form-control w-100"></textarea>
            </div>
            <div className="row justify-content-center">
              <div className="col-3 px-3">
                <label>Address</label>
                <input className=" form-control" type="text" />
              </div>
              <div className="col-3 px-3">
                <label>City</label>
                <input className=" form-control" type="text" />
              </div>
              <div className="col-3 px-3">
                <label>State</label>
                <input
                  placeholder="Select Province"
                  className=" form-control"
                  type="text"
                />
              </div>
              <div className="col-3 px-3">
                <label>Dsitrict</label>
                <input
                  className=" form-control"
                  placeholder="Select District"
                  type="text"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 px-3">
                <label>Price</label>
                <input
                  placeholder="Address"
                  className=" form-control"
                  type="text"
                />
              </div>
              <div className="col-6 px-3">
                <label>Price per*</label>
                <input
                  placeholder="District"
                  className=" form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 px-3">
                <label>Area</label>
                <input
                  placeholder="Address"
                  className=" form-control"
                  type="text"
                />
              </div>
              <div className="col-6 px-3">
                <label>Area per*</label>
                <input
                  placeholder="District"
                  className=" form-control"
                  type="text"
                />
              </div>
            </div>
            <label>Category</label>
            <div>
              <button type="button" className="btn me-4 btn-light">
                House
              </button>
              <button type="button" className="btn me-4 btn-light">
                Land
              </button>
              <button type="button" className="btn me-4 btn-light">
                Flats
              </button>
              <button type="button" className="btn me-4 btn-light">
                Office
              </button>
              <button type="button" className="btn me-4 btn-light">
                Shops
              </button>
              <button type="button" className="btn me-4 btn-light">
                Appartment
              </button>
            </div>
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <label>Purposes</label>
                  <div className="col-6 px-3 d-flex">
                    <button type="button" className="btn me-4 btn-light">
                      Rent
                    </button>
                    <button type="button" className="btn me-4 btn-light">
                      Sale
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-7">
                <div className="row">
                  <label>Types</label>
                  <div className="col-6 px-3 d-flex">
                    <button type="button" className="btn me-4 btn-light">
                      Residental
                    </button>
                    <button type="button" className="btn me-4 btn-light">
                      Commercial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 px-3">
                <label>Images</label>
                <input type="file" className="custom-file-input" />
              </div>
            </div>
            <div className="row my-2 px-3">
              <button className="btn btn-primary">Add Property</button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Addproperty;
