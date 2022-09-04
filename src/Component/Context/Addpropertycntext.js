import { createContext, useState } from "react";
const Addpropertycontext = createContext();
export function Addpropertyprovider(props) {
  const [addproperty, setAddproperty] = useState(false);
  const [updateprofile,setUpdateprofile]=useState(false);
  const [changepass,setChangepass]=useState(false)
  return (
    <Addpropertycontext.Provider value={{ addproperty, setAddproperty,updateprofile,setUpdateprofile,changepass,setChangepass }}>
      {props.children}
    </Addpropertycontext.Provider>
  );
}
export default Addpropertycontext;
