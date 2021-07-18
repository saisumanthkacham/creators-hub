import { NavLink } from "react-router-dom"

export const PageNotFound=({text})=>{

    return (<div className="empty-bin">  
                <br/>
                <h1 className="primary-font margin-zero">Error!!</h1>
                <p>{text}</p>
                <NavLink to="/"  className="btn primary-bg white-font" >Home</NavLink>
            </div>)
}