import {useState} from "react"
import { SignUpButton } from "../../components/buttons/signUpButton"

export const SignUpPage=()=>{
              
    // hooks
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")



    return (<div className="login-page">  
                <br/>
                <h1 className="primary-font margin-zero">Creators Hub</h1><br/>
                <input placeholder="Username" className="login-input-box"  type="text" onChange={(e)=>setUserName(e.target.value)} /><br/>
                <input placeholder="New Password" className="login-input-box" type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <input placeholder="Email-Id" className="login-input-box" type="text" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <SignUpButton name={userName} pass={password} email={email}/>        
            </div>)
}