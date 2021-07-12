import { useAuth } from "../contexts/authContext"
import { Navigate,Route } from "react-router"

export const PrivateRoute=({path,...props})=>{
    const {login}=useAuth()

    return login?<Route path={path} {...props} />:<Navigate state={{previousPath:path}} replace to="/login"/>
}    