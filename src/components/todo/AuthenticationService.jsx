

class AuthenticationService{

    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        console.log("auth service")
        //this.forceUpdate();
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
        console.log("logout")
        
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return false;
        }
        return true;
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return null;
        }
        return user;
    }
}

export default new AuthenticationService();