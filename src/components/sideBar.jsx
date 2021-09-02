
import {NavLink} from "react-router-dom"

export const SideBar=({setSideBarDisplay})=>{
   
    return <div className="side-bar-wrapper">

    <div className="side-bar center-col">
    <div className="burger-btn" onClick={()=>{setSideBarDisplay(false)}}><i className="fas fa-times icon-sm saved-cd-wrong fa-1x " ></i></div> 
    <hr/>
    <NavLink to="/home"  className="btn btn-lg" activeClassName="active-btn bold">Home</NavLink>
    <NavLink to="/" end  activeClassName="active-btn bold" className="btn btn-lg">Explore</NavLink>
    <NavLink to="/history"  activeClassName="active-btn bold" className="btn btn-lg">History</NavLink>
    <hr/>
    <NavLink to="/playLists"  activeClassName="active-btn bold" className="btn btn-lg" >PlayLists</NavLink>
    <NavLink to="/saved"  activeClassName="active-btn bold" className="btn btn-lg">Saved</NavLink>
    <NavLink to="/liked"  activeClassName="active-btn bold" className="btn btn-lg">Liked</NavLink>
    <NavLink to="/about"  activeClassName="active-btn bold" className="btn btn-lg">About</NavLink>
    <hr/>
    </div>
   
    </div>
}