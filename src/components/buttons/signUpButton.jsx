import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { useVideo } from "../../contexts/videosContext"

export const SignUpButton=({name,pass})=>{

    // hooks
    const {setLogin,authDispatch}=useAuth()
    const navigate=useNavigate()
    const {videosDispatch}=useVideo()

    // custom function
    const signUpHandler=(name,pass)=>{
        authDispatch({type:"SIGN-UP-USER",payLoad:{userName:name,password:pass}})
        videosDispatch({type:"SET-USERS-USERNAME",payLoad:{name}})
        localStorage.setItem("user",JSON.stringify({login:true,userName:name}))
        setLogin(true)
        toast.success("you are signed in ",{position:toast.POSITION.BOTTOM_RIGHT})
        navigate("/")
    }

    return (<>
    
    <div className="btn btn-lg primary-bg white-font" onClick={()=>signUpHandler(name,pass)}>SignUp</div>
    
    
    </>)
}