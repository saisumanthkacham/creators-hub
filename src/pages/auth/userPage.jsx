
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
export function User(){

    const{setLogin}= useAuth()
    const navigate=useNavigate()
  
    function logOutHandler(){
      setLogin(false)
      localStorage.setItem("login",JSON.stringify({login:false}))
      navigate("/")
    }

    return (<div className="user-page">
       
        <i class="fas fa-user-circle fa-6x primary-font"></i>
        <div className="user-text">
        hello admin <br />
        <div onClick={logOutHandler}  className="btn btn-sm primary-bg white-font">logout</div>
        </div>
       
    </div>)
}