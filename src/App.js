
import './index.css'
import "./ecom.css"
import { Routes,Route } from 'react-router-dom';
import {Home,History,PlayList,Saved,Video} from "./pages/indexOfPages.jsx"
import {NavLink,useNavigate} from "react-router-dom"
function App() {
  const navigate=useNavigate()
  

  return (
    <div className="App">
   
    {/* navbar */}
    <nav className="nav">
        
        <div className="white-font nav-logo" onClick={()=>{navigate("/")}}>Creators Hub</div>
        <div >
          <NavLink to="/"  end     activeClassName="active-btn" className="btn bold" >Home</NavLink>&nbsp;
          <NavLink to="/saved"  activeClassName="active-btn" className="btn bold" >saved</NavLink>&nbsp;
         
        </div>
        <div>
          <NavLink to="/cart"      activeClassName="active-btn" className="btn" ><i className="fas fa-shopping-cart text-sm"></i></NavLink>&nbsp;
          <NavLink to="/wishList"  activeClassName="active-btn" className="btn" ><i className="fas fa-heart text-sm"></i></NavLink>
          <NavLink to="/user"  activeClassName="active-btn" className="btn" ><i className="fas fa-user text-sm "></i></NavLink>
          
          
        </div>
      </nav>

     

    
 


   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/playList" element={<PlayList/>}/>
      <Route path="/saved" element={<Saved/>}/>
      <Route path="/video" element={<Video/>}/>
    </Routes>
 

    </div>
  );
}

export default App;
