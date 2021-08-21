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
            localStorage.removeItem("user") 
            toast.info("you are logged out!",{position:"bottom-right",autoClose:2000})
            navigate("/")
        }
           
        else{
            console.log("already logged out")
            toast.error("error in logging out!",{position:"bottom-right"})
        }
    
    }


    return (<>
    
    <div className="btn btn-sm primary-bg white-font" onClick={()=>logoutHandler()}>logout</div>
    </>)
}