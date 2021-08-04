import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"



export const TestCredentialsButton=({name,pass,videosDispatch})=>{

    // hooks
    const {setLogin,authState:{usersCredentials}}=useAuth()
    const navigate=useNavigate()
  
    // custom function
    const loginHandler=(name,pass,usersCredentials)=>{

        const user=usersCredentials.find(item=>item.userName===name)
        if(name===user?.userName && pass===user?.password){
            setLogin(true) 
            localStorage.setItem("user",JSON.stringify({login:true,userName:name}))
            videosDispatch({type:"SET-USERS-USERNAME",payLoad:{name}})
            toast.success(`Hey ${name},you logged in succesfully!!`,{position:"bottom-right"})
            navigate("/")    
        }

        else
            {
                console.log("error in login")
                toast.error(`error in login!!`,{position:"bottom-right"})
            }
    
    }

    return (<>
        <div className="login-btn secondary-bg"
            onClick={()=>loginHandler(name,pass,usersCredentials)}
            >
            <small>Login with test credentials</small>
        </div><br/>
    </>)
}