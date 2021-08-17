import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
// import { useVideo } from "../../contexts/videosContext"
import { signUpUserInServerFn } from "../../apiCalls"

export const SignUpButton=({name,pass,email})=>{

    // hooks
    const {setLogin,authDispatch}=useAuth()
    const navigate=useNavigate()
    // const {videosDispatch}=useVideo()

    // custom function
    const signUpHandler=async(name,pass,email)=>{

        // authDispatch({type:"SIGN-UP-USER-LOCAL",payLoad:{userName:name,password:pass}})
        const id= await signUpUserInServerFn(name,pass,email)
        authDispatch({type:"SAVE-USER-DETAILS",payLoad:{name,id}})
        localStorage.setItem("user",JSON.stringify({login:true,userName:name,userId:id}))
        // videosDispatch({type:"SET-USERS-USERNAME",payLoad:{name}})
        setLogin(true)
        navigate("/")
    }

    return (<>
    
    <div className="btn btn-lg primary-bg white-font" onClick={()=>signUpHandler(name,pass,email)}>SignUp</div>
    
    
    </>)
}