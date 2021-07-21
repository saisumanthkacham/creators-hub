import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router"
import { toast} from "react-toastify"


export const LoginButton=({name,pass})=>{

    // hooks
    const {setLogin,authState:{usersCredentials}}=useAuth()
    const navigate=useNavigate()

    // custom function
    const loginHandler=(name,pass,usersCredentials)=>{

        const user=usersCredentials.find(item=>item.userName===name)
        if(name===user?.userName && pass===user?.password){
            setLogin(true) 
            localStorage.setItem("login",JSON.stringify({login:true}))
            toast.success(`login success!!`,{position:"bottom-right",autoClose: 4000,})
            navigate("/")    
        }

        else
            {
                console.log("error in login")
                toast.error(`error in login!!`,{position:"bottom-right",autoClose: 4000,})
            }
    
    }

    return (<>
    
    <div className="btn btn-lg primary-bg white-font" onClick={()=>loginHandler(name,pass,usersCredentials)}>Login</div>
    
    </>)
}