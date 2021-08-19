import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { useVideo } from "../../contexts/videosContext"
import { signUpUserInServerFn } from "../../apiCalls"

export const SignUpButton=({name,pass,email})=>{

    // hooks
    const {setLogin,authDispatch}=useAuth()
    const navigate=useNavigate()
    const {videosDispatch}=useVideo()

    // custom function
    const signUpHandler=async(name,pass,email)=>{
        
        const response= await signUpUserInServerFn(name,pass,email)
        console.log("response after sign in func line 17 ", response)
        const id=response?.data?._id
        if(response?.status===201){
            videosDispatch({type:"SET-NEW-USER-ENVIRONMENT"})   
            authDispatch({type:"SAVE-USER-DETAILS",payLoad:{name,id}})
            localStorage.setItem("user",JSON.stringify({login:true,userName:name,userId:id}))
            setLogin(true)
            navigate("/")
        }
       
    }

    return (<>
    
    <div className="btn btn-lg primary-bg white-font" onClick={()=>signUpHandler(name,pass,email)}>SignUp</div>
    
    
    </>)
}