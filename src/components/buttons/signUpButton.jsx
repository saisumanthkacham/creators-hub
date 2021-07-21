import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export const SignUpButton=({name,pass})=>{

    // hooks
    const {setLogin,authDispatch}=useAuth()
    const navigate=useNavigate()

    // custom function
    const signUpHandler=(name,pass)=>{
        authDispatch({type:"SIGN-UP-USER",payLoad:{userName:name,password:pass}})
        setLogin(true)
        toast.success("you are signed in ",{position:toast.POSITION.BOTTOM_RIGHT})
        navigate("/")
    }

    return (<>
    
    <div className="btn btn-lg primary-bg white-font" onClick={()=>signUpHandler(name,pass)}>SignUp</div>
    
    
    </>)
}