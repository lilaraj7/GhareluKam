import{createContext,useState} from 'react'
const Logincontext = createContext(); 
export function LoginProvider(props){
    const [islogged,setIslogged]=useState(false)
    const [profilename,setProfileName]=useState();

return(
<Logincontext.Provider
 value=
 {{islogged,profilename,setIslogged,setProfileName}}
>
   {props.children}
</Logincontext.Provider>
)
}
export default Logincontext;