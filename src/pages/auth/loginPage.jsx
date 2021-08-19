import {useEffect, useState} from "react"
import { LoginButton,TestCredentialsButton} from "../../components/indexOfComponents"
import { useNavigate, NavLink, useLocation } from "react-router-dom"
import { useVideo } from "../../contexts/videosContext"
import { useAuth } from "../../contexts/authContext"
import { toast} from "react-toastify"
import { getIntialUserDataFromServerFn } from "../../apiCalls"


export const LoginPage=()=>{

    
    // hooks
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const {videosDispatch}= useVideo()
    const {state}=useLocation()
    const {setLogin,authDispatch}=useAuth()
    const navigate=useNavigate()


    useEffect(()=>{
            const response=JSON.parse(localStorage.getItem("user"))
            const name= response?.userName
            const id=response?.userId
            setLogin(response?.login&&response.login)
            authDispatch({type:"SAVE-USER-DETAILS",payLoad:{name,id}})
            response?.login&&toast.success(`Hey ${response?.userName},we logged you in sucessfully!!`,{position:"bottom-right"})
            response?.login&& getIntialUserDataFromServerFn(id,videosDispatch)
            navigate(state?.state?.previousPath ?state.previousPath :"/login")         
        },[])




    return (<div className="login-page">  
            
                <br/>
                <h1 className="primary-font margin-zero">Creators Hub</h1><br/>
                <input placeholder="username" className="login-input-box"  type="text" onChange={(e)=>setUserName(e.target.value)} /><br/>
                <input placeholder="Password" className="login-input-box" type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>

                <LoginButton name={userName} pass={password}   />
                <TestCredentialsButton name={"sibba"} pass={"sibbuu"} />
                <div className="center">
                    <small>Dont have an account?</small> &nbsp;&nbsp;&nbsp;
                    <small ><NavLink to="/signup"  activeClassName="active-btn" className=" primary-font" >Signup</NavLink></small>
                </div> <br/>
            
            </div>)
}