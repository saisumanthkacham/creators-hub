
import { LogoutButton } from '../../components/auth/logoutButton';
import { useVideo } from '../../contexts/videosContext';

export function User(){

    const {videosState:{userName}}=useVideo()

    return (<div className="user-page">
        <br/>
        <i className="fas fa-user-circle fa-6x primary-font"></i>
        <div className="user-text">
          &nbsp; hello {userName?userName:"admin"}
          <LogoutButton/>
        </div>
       
    </div>)
}