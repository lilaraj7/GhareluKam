// import React, { useEffect, useState,useContext } from "react";
// import "./userprofile.css";
// import userimages2 from "../Assets/userimages2.png";
// import ProfileContext from "./Context/Profilecontext";

// import $ from "jquery";
// function Userprofile() {
//   const url = "https://testing.esnep.com/gharelukam/api/user-profile";
//   // const [updatepro, setUpdatepro] = useState({
//   //   UserID: "",
//   //   FirstName: "",
//   //   LastName: "",
//   //   Email: "",
//   //   Image: "",
//   //   ImageName: "",
//   //   Contact: "",
//   //   Address: "",
//   //   District: "",
//   //   Bio: "",
//   //   Latitude: "",
//   //   Longitude: "",
//   //   WorkStatus: 2,
//   // });
//   const {
//     firstname,
//     setFirstname,
//     lastname,
//     setLastname,
//     email,
//     setEmail,
//     contact,
//     setContact,
//     address,
//     setAddress,
//     district,
//     setDistrict,
//     long,
//     setLong,
//     lat,
//     setLat,
//     bio,
//     setBio,
//     uid,
//     setUid,
//     image,
//     setImage,
//   } = useContext(ProfileContext);

//   useEffect(() => {
//     $(".drop-menu").fadeOut();
//   }, []);

//   const newupdate = (e) => {
//     const update = { ...updatepro };
//     update[e.target.id] = e.target.value;
//     setUpdatepro(update);
//   };

//   const handleupdate = (e) => {
//     e.preventDefault();
//     console.log("clicked");
//     const dataForm = {
//       UserID: updatepro.UserID,
//       FirstName: updatepro.FirstName,
//       LastName: updatepro.LastName,
//       Email: updatepro.Email,
//       Image: "",
//       ImageName: "",
//       Contact: updatepro.Contact,
//       Address: updatepro.Address,
//       District: updatepro.District,
//       Bio: updatepro.Bio,
//       Latitude: updatepro.Latitude,
//       Longitude: updatepro.Longitude,
//       WorkStatus: 2,
//     };
//     const requestOption = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataForm),
//     };
//     fetch(url, requestOption).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp);
//       });
//     });
//   };

//   return (
//     <div className="container w-50">
//       <form>
//         <div className="pro-main">
//           <div className="pro-img">
//             <img src={userimages2} alt="" height="130px" width="130px" />
//           </div>
//           <div className="update-pro">
//             <button type="button" className="btn me-4 btn-light">
//               Change profile
//             </button>
//           </div>
//         </div>

//         <div className="row pe-0">
//           <div className="col-sm">
//             <label>First Name</label>
//             <input
//               type="text"
//               id="FirstName"
//               value={updatepro.FirstName}
//               className="form-control"
//               onChange={(e) => {
//                 newupdate(e);
//               }}
//             />
//           </div>
//           <div className="col-sm p-sm-0">
//             <label>Last Name</label>
//             <input
//               type="text"
//               id="LastName"
//               value={updatepro.LastName}
//               className="form-control"
//               onChange={(e) => {
//                 newupdate(e);
//               }}
//             />
//           </div>
//         </div>
//         <div className="mb-3 w-100">
//           <label for="Search" id="Search" className="form-label">
//             email
//           </label>
//           <input
//             type="email"
//             id="Email"
//             value={updatepro.Email}
//             className="form-control"
//             onChange={(e) => {
//               newupdate(e);
//             }}
//           />
//         </div>
//         <div className="mb-3">
//           <label for="Search" className="form-label">
//             Contact
//           </label>
//           <input
//             type="search"
//             id="Contact"
//             value={updatepro.Contact}
//             className="form-control"
//             onChange={(e) => {
//               newupdate(e);
//             }}
//           />
//         </div>
//         <div className="row pe-0">
//           <div className="col-sm">
//             <label>Address</label>
//             <input
//               type="text"
//               id="Address"
//               value={updatepro.Address}
//               className="form-control"
//               onChange={(e) => {
//                 newupdate(e);
//               }}
//             />
//           </div>
//           <div className="col-sm p-sm-0">
//             <label>Dsitrict</label>
//             <input
//               type="text"
//               id="District"
//               value={updatepro.District}
//               className="form-control"
//               onChange={(e) => {
//                 newupdate(e);
//               }}
//             />
//           </div>
//         </div>
//         <div className="row pe-0">
//           <div className="col-sm">
//             <label>Lattitude</label>
//             <input
//               type="number"
//               id="Latitude"
//               value={updatepro.Latitude}
//               className="form-control"
//               onChange={(e) => {
//                 newupdate(e);
//               }}
//             />
//           </div>
//           <div className="col-sm p-sm-0">
//             <label>Longitude</label>
//             <input
//               type="number"
//               id="Longitude"
//               value={updatepro.Longitude}
//               className="form-control"
//               onChange={(e) => {
//                 newupdate(e);
//               }}
//             />
//           </div>
//         </div>
//         <div className="row pt-1">
//           <label for="Search" className="form-label">
//             Bio
//           </label>
//           <textarea
//             class="form-control"
//             value={updatepro.Bio}
//             id="Bio"
//             rows="3"
//             onChange={(e) => {
//               newupdate(e);
//             }}
//           ></textarea>
//         </div>
//         <div className="row pt-1">
//           <button
//             type="submit"
//             onClick={(e) => handleupdate(e)}
//             className="btn me-4 btn-light"
//           >
//             Update profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Userprofile;
import React, { useEffect, useContext } from "react";
// import BaseUrlContext from "../contextApi/BaseUrlContext";
// // import ProfileContext from "./Context/Profilecontext";
import ProfileContext from "./Context/Profilecontext";

import { BiUserCircle } from "react-icons/bi";
import "./userprofile.css";

// import "./userupdate.css";

const  Userprofile = () => {
  // const { baseUrl } = useContext(BaseUrlContext);
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    contact,
    setContact,
    address,
    setAddress,
    district,
    setDistrict,
    long,
    setLong,
    lat,
    setLat,
    bio,
    setBio,
    uid,
    setUid,
    image,
    setImage,
  } = useContext(ProfileContext);
  useEffect(() => {
    fetch(`https://testing.esnep.com/gharelukam/api/user-profile`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserID: uid,
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Image: image,
        ImageName: "",
        Contact: contact,
        Address: address,
        District: 1,
        Bio: bio,
        Latitude: lat,
        Longitude: long,
        WorkStatus: 2,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("update called first time");
        console.log(res);
      })
      .catch((err) => console.log("error" + err));
  }, []);
  const updateHandled = () => {
    return fetch(`https://testing.esnep.com/gharelukam/api/user-profile`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserID: uid,
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Image: image,
        ImageName: "",
        Contact: contact,
        Address: address,
        District: 1,
        Bio: bio,
        Latitude: lat,
        Longitude: long,
        WorkStatus: 2,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("updated");
      })
      .catch((err) => console.log("error" + err));
  };
  return (
    <>
      <div className="container justify-content-center mainuserprofile">
        <h2 className="text-align-center">Edit Profile</h2>
        <div className="row justify-content-center userprofile">
          <BiUserCircle
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          />
          <input type="file" className="custom-file-input" 
           onChange={(e) => {
            setImage(e.target.value)}}
            value={image}/>
        </div>
        <div className="row">
          <div className="col-6 px-3">
            <label>Firstname</label>
            <input
              placeholder="FirstName"
              className="form-control"
              type="text"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              value={firstname}
            />
          </div>
          <div className="col-6 px-3">
            <label>Lastname</label>
            <input
              placeholder="LastName"
              className=" form-control"
              type="text"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              value={lastname}
            />
          </div>
        </div>
        <div className="row px-3 w-100">
          <label className="p-0 ">Email</label>
          <input
            placeholder="Email"
            className=" form-control"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="row px-3 w-100">
          <label className="p-0">Contact</label>
          <input
            placeholder="Contact"
            className=" form-control"
            type="number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            value={contact}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-6 px-3">
            <label>Address</label>
            <input
              placeholder="Address"
              className=" form-control"
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
            />
          </div>
          <div className="col-6 px-3">
            <label>District</label>
            <input
              placeholder="District"
              className=" form-control"
              type="text"
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              value={district}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 px-3">
            <label>Longitude</label>
            <input
              placeholder="Longitude"
              className=" form-control"
              type="number"
              onChange={(e) => {
                setLong(e.target.value);
              }}
              value={long}
            />
          </div>
          <div className="col-6 px-3">
            <label>Latitude</label>
            <input
              placeholder="Latitude"
              className=" form-control"
              type="number"
              onChange={(e) => {
                setLat(e.target.value);
              }}
              value={lat}
            />
          </div>
        </div>
        <div className="row my-2 px-3 w-100">
          <label>Bio</label>
          <textarea
            placeholder="Bio"
            row="6"
            className="form-control"
            onChange={(e) => {
              setBio(e.target.value);
            }}
            value={bio}
          ></textarea>
        </div>
        <div className="row my-2 px-3">
          <button className="btn btn-primary" onClick={updateHandled}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default  Userprofile;