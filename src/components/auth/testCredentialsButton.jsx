import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { logInUserInServerFn } from "../../apiCalls"



export const TestCredentialsButton= ({name,pass})=>{

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
        <div className="login-btn secondary-bg"
            onClick={()=>loginHandler(name,pass)}
            >
            <small>Login with test credentials</small>
        </div><br/>
    </>)
}