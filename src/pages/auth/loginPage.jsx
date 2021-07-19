import {useEffect, useState} from "react"
import { LoginButton } from "../../components/indexOfComponents"
import { useNavigate, NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"

export const LoginPage=()=>{
              
// hooks
const[userName,setUserName]=useState("")
const[password,setPassword]=useState("")
const {state}=useLocation()
const {setLogin}=useAuth()
const navigate=useNavigate()

useEffect(()=>{
            const response=JSON.parse(localStorage.getItem("login"))
            setLogin(response?.login&&response.login)
            navigate(state?.state?.path?state.previousPath:"/")
},[])


    return (<div className="login-page">  
                <br/>
                <h1 className="primary-font margin-zero">Creators Hub</h1><br/>
                <input placeholder="username" className="login-input-box"  type="text" onChange={(e)=>setUserName(e.target.value)} /><br/>
                <input placeholder="Password" className="login-input-box" type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
               <LoginButton name={userName} pass={password} state={state}/>
               <div className="center">
                    <small>Forgot password?</small> &nbsp;&nbsp;&nbsp;
                    <small ><NavLink to="/signup"  activeClassName="active-btn" className=" primary-font" >Signup</NavLink></small>
                </div> <br/>
                 
    </div>)
}