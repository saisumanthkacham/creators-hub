import {useEffect, useState} from "react"
import { LoginButton } from "../../components/indexOfComponents"
import { useNavigate, NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"
import { toast} from "react-toastify"
import { useVideo } from "../../contexts/videosContext"

export const LoginPage=()=>{

    
    // hooks
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const {state}=useLocation()
    const {setLogin}=useAuth()
    const {videosDispatch}=useVideo()
    const navigate=useNavigate()


    useEffect(()=>{
            const response=JSON.parse(localStorage.getItem("user"))
            setLogin(response?.login&&response.login)
            videosDispatch({type:"SET-USERS-USERNAME",payLoad:{userName}})
            response?.login&&toast.success(`Hey ${response.userName},we logged you in sucessfully!!`,{position:"bottom-right"})
            navigate(state?.state?.previousPath ?state.previousPath :"/login")         
        },[])




    return (<div className="login-page">  
            
                <br/>
                <h1 className="primary-font margin-zero">Creators Hub</h1><br/>
                <input placeholder="username" className="login-input-box"  type="text" onChange={(e)=>setUserName(e.target.value)} /><br/>
                <input placeholder="Password" className="login-input-box" type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <LoginButton name={userName} pass={password} videosDispatch={videosDispatch}/>
                <div className="center">
                    <small>Dont have an account?</small> &nbsp;&nbsp;&nbsp;
                    <small ><NavLink to="/signup"  activeClassName="active-btn" className=" primary-font" >Signup</NavLink></small>
                </div> <br/>
            
            </div>)
}