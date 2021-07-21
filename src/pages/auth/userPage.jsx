
import { LogoutButton } from '../../components/auth/logoutButton';

export function User(){


    return (<div className="user-page">
        <br/>
        <i class="fas fa-user-circle fa-6x primary-font"></i>
        <div className="user-text">
          hello admin
          <LogoutButton/>
        </div>
       
    </div>)
}