import { createContext, useContext, useReducer } from "react";
import { dataReducerFn } from "./reducerFunctions/dataReducerFn";

const DataContext=createContext()


export const DataProvider=({children})=>{
    const intialState={
         videosData:[]
    }
    
    const [state,dispatch]=useReducer(dataReducerFn,intialState)
    dataReducerFn(state,dispatch)


    return (

        <DataContext.Provider value={{dataState:state,dataDispatch:dispatch}}>
            {children}
        </DataContext.Provider>
    )
}


export const useData=()=>useContext(DataContext)