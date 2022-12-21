import AuthenticationService from "./AuthenticationService";
import { Route, Navigate} from "react-router-dom";
import { Component } from "react";

class AuthenticatedRoute extends Component{

    render(){
        
            if(AuthenticationService.isUserLoggedIn()){
                return {...this.props.children};
            }else{
                return <Navigate to="/login"></Navigate>;
            }
        
    }
}

export default AuthenticatedRoute;