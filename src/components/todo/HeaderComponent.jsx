import {React, Component} from 'react';
import AuthenticationService from './AuthenticationService.jsx';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component{
    

    

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn);
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="wwww.youtube.com" className="navbar-brand">Maxwebsitelink</a>
                    </div>
                    <ul className="navbar-nav">
                        <li>
                            { isUserLoggedIn && <Link className="nav-link" to="/welcome/maxhorner">Home</Link>}
                        </li>

                        <li>
                            { isUserLoggedIn && <Link className="nav-link" to="/todos">Todo List</Link>}
                        </li>

                        <li>
                            {<Link className="nav-link" to="/counter">Counter</Link>}
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li>
                            { !isUserLoggedIn && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li>
                            { isUserLoggedIn && <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link>}
                        </li>
                    </ul>

                </nav>
            </header>
        );
    }
}

export default HeaderComponent;