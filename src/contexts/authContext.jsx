import { createContext, useContext, useReducer, useState } from "react";
import { authReducerFn } from "./reducerFunctions/authReducerFn";

const AuthContext=createContext()

export const AuthProvider=({children})=>{

    //custom hook
    const [login,setLogin]=useState(false)
    const usersCredentials={}
          
    const [state,dispatch]=useReducer(authReducerFn,usersCredentials)
    authReducerFn(state,dispatch)


return <AuthContext.Provider value={{login,setLogin,authState:state,authDispatch:dispatch}}>
        {children}
        </AuthContext.Provider>

}

export const useAuth=()=>useContext(AuthContext)