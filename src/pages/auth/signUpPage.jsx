import {useState} from "react"
import { SignUpButton } from "../../components/signUpButton"

export const SignUpPage=()=>{
              
// hooks
const[userName,setUserName]=useState("")
const[password,setPassword]=useState("")



    return (<div className="login-page">  
                <br/>
                <h1 className="primary-font margin-zero">Creators Hub</h1><br/>
                <input placeholder="username" className="login-input-box"  type="text" onChange={(e)=>setUserName(e.target.value)} /><br/>
                <input placeholder="new Password" className="login-input-box" type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <SignUpButton name={userName} pass={password}/>
                 
                 
    </div>)
}