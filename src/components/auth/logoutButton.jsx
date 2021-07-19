import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"


export const LogoutButton=()=>{

    // hooks
    const {login,setLogin}=useAuth()
    const navigate=useNavigate()

    // custom function
    const logoutHandler=()=>{

        if(login){
            setLogin(false)
            localStorage.removeItem("login")
            navigate("/")}

        else{console.log("already logged out")}
    
    }

    return (<>
    
    <div className="btn btn-lg" onClick={()=>logoutHandler()}>logout</div>
    
    
    </>)
}