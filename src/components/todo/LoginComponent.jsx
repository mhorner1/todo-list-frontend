import {React, Component} from 'react';
import AuthenticationService from './AuthenticationService.jsx';



class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: "Username",
            password: "Password",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (event) =>{
        this.setState(
            {[event.target.name]: event.target.value}
        )
        console.log(event.target.name)
    }

    loginClicked = () =>{
        if(this.state.username==="maxhorner" && this.state.password==="cheese"){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
           
        }else{
            this.setState({showSuccessMessage : false, hasLoginFailed : true});
        }
        this.forceUpdate();
    }



    render(){
        return(
            <div>
                <h1>Login</h1>
                <div  style={{width : "200px", marginBottom : "10px"}} className="container">
                    
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                        {/*this.state.showSuccessMessage && "Login Successful"*/}
                    
                    
                    <input style={{width : "175px"}}className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                   

                </div>
                <div style={{width : "200px", marginBottom:"10px"}} className="container">
                    <input style={{width : "175px"}} className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                <div  className="container">
                    <button type="submit" className="btn btn=s"onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
            
    }
}

export default LoginComponent;