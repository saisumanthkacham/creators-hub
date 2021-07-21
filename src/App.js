
import './index.css'
import "./ecom.css"
import {useState} from "react"
import { Routes,Route } from 'react-router-dom';
import {Home,History,PlayLists,PlayList,Saved,VideoPlayer,
        LikedVideos,Channel,LoginPage,SignUpPage,User,
        PageNotFound,Explore,About} from "./pages/indexOfPages.jsx"
import {NavLink,useNavigate} from "react-router-dom"
import { useAuth } from './contexts/authContext';
import {PrivateRoute,SideBar} from "./components/indexOfComponents"
import {ToastContainer} from "react-toastify"


function App() {

  const navigate=useNavigate()
  const {login} = useAuth()
  const [sideBarDisplay,setSideBarDisplay]=useState(false)



return (<div className="App">
    {sideBarDisplay&& <SideBar setSideBarDisplay={setSideBarDisplay}/>}

    <div className={sideBarDisplay?"App-blur":"App"}>

        <nav className="nav">

          <div className="logo-wrapper">
            <div className="burger-btn-nav" onClick={()=>{setSideBarDisplay(true)}}><i className="fas fa-bars fa-2x " ></i></div> 
            <div className="white-font nav-logo" onClick={()=>{navigate("/")}}>Creators Hub</div>
          </div>

          <div className="nav-search-wrapper">
            <input className="input-box nav-search-bar" placeholder=" Search "/>
            <i class="fas fa-search  white-font"></i>
          </div>

          <div className="nav-li">
            {login 
                  ? <div><NavLink to="/user"  activeClassName="active-btn" className="btn" ><i className="fas fa-user text-sm "></i></NavLink></div>
                  : <div><NavLink to="/login"  activeClassName="active-btn" className="btn" >Login</NavLink>
                         <NavLink to="/signup"  activeClassName="active-btn" className="btn" >SignUp</NavLink>
                    </div>}
          </div>
     
        </nav>

      
   
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/channel/:name" element={<Channel/>}/>
          <PrivateRoute path="/video/:id" element={<VideoPlayer/>}/>
          <PrivateRoute path="/liked" element={<LikedVideos/>}/>
          <PrivateRoute path="/history" element={<History/>}/>
          <PrivateRoute path="/playLists" element={<PlayLists/>}/>
          <PrivateRoute path="/playLists/:name" element={<PlayList/>}/>
          <PrivateRoute path="/saved" element={<Saved/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<PageNotFound text={"page Not Found"}/>} />
        </Routes>
    </div>



    <ToastContainer/>

  </div>
  );
}

export default App;
