import { useAuth } from "../../contexts/authContext"
import { logInUserInServerFn } from "../../apiCalls"
import { useNavigate } from "react-router"


export const LoginButton=({name,pass})=>{

    // hooks
    const {setLogin,authDispatch}=useAuth()
    const navigate=useNavigate()
    

    // custom function
    const loginHandler=async(name,pass)=>{

        const{status,id}=await logInUserInServerFn(name,pass)
        if(status===200)
        {
            setLogin(true) 
            authDispatch({type:"SAVE-USER-DETAILS",payLoad:{name,id}})
            localStorage.setItem("user",JSON.stringify({login:true,userName:name,userId:id}))
            navigate("/")    
        }

        else
            {
                console.log("error in login")
            }
    
    }

    return (<>
    
    <div className="login-btn primary-bg white-font" onClick={()=>loginHandler(name,pass)}>Login</div>
    
    </>)
}