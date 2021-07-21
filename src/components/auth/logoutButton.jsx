import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { toast} from "react-toastify"


export const LogoutButton=()=>{

    // hooks
    const {login,setLogin}=useAuth()
    const navigate=useNavigate()

    // custom function
    const logoutHandler=()=>{

        if(login){
            setLogin(false)
            localStorage.removeItem("login") 
            toast.info("you are logged out!",{position:toast.POSITION.BOTTOM_RIGHT})
            navigate("/")
        }
           
        else{
            console.log("already logged out")
            toast.error("error in logging out!",{position:toast.POSITION.BOTTOM_RIGHT})
        }
    
    }

    return (<>
    
    <div className="btn btn-sm primary-bg white-font" onClick={()=>logoutHandler()}>logout</div>
    </>)
}