import { createContext, useContext, useReducer, useState } from "react";
import { authReducerFn } from "./reducerFunctions/authReducerFn";

const AuthContext=createContext()

export const AuthProvider=({children})=>{

    // hook
    const [login,setLogin]=useState(false)

    const intialState={

        usersCredentials:[
            {userName:"sai",password:"sai"},
            {userName:"admin",password:"admin"}
           ]
    }

    const [state,dispatch]=useReducer(authReducerFn,intialState)
    authReducerFn(state,dispatch)



return <AuthContext.Provider value={{login,setLogin,authState:state,authDispatch:dispatch}}>
        {children}
        </AuthContext.Provider>

}

export const useAuth=()=>useContext(AuthContext)