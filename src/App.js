
import './index.css'
import "./ecom.css"
import { Routes,Route } from 'react-router-dom';
import {Home,History,PlayList,Saved,VideoPlayer,LikedVideos} from "./pages/indexOfPages.jsx"
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
          <NavLink to="/playList"  activeClassName="active-btn" className="btn bold" >playLists</NavLink>&nbsp;
          <NavLink to="/liked"  activeClassName="active-btn" className="btn bold" >Liked</NavLink>&nbsp;
        </div>
        <div>
          <NavLink to="/history"      activeClassName="active-btn" className="btn" ><i className="fas fa-history"></i></NavLink>&nbsp;
          <NavLink to="/saved"  activeClassName="active-btn" className="btn" ><i className="far fa-bookmark"></i></NavLink>
          <NavLink to="/video"  activeClassName="active-btn" className="btn" ><i className="fas fa-user text-sm "></i></NavLink>
          
          
        </div>
      </nav>


   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/playList" element={<PlayList/>}/>
      <Route path="/saved" element={<Saved/>}/>
      <Route path="/video/:id" element={<VideoPlayer/>}/>
      <Route path="/liked" element={<LikedVideos/>}/>
    </Routes>
 

    </div>
  );
}

export default App;
