import { NavLink } from "react-router-dom"

export const PageNotFound=()=>{

    return (<div className="empty-bin">  
                <br/>
                <h1 className="primary-font margin-zero">Error!!</h1>
                <p>Page Not Found</p>
                <NavLink to="/"  activeClassName="active-btn" className="btn" >Home</NavLink>
            </div>)
}