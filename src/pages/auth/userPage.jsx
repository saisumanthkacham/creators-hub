
import { LogoutButton } from '../../components/auth/logoutButton';
import { useAuth } from '../../contexts/authContext';

export function User(){

    const {authState}=useAuth()

    return (<div className="user-page">
        <br/>
        <i className="fas fa-user-circle fa-6x primary-font"></i>
        <div className="user-text">
          &nbsp; hello {authState.userName?authState.userName:"admin"}
          <LogoutButton/>
        </div>
       
    </div>)
}