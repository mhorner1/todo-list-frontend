import {React, Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation';
import withParams from './WithParams';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import ListTodosComponent from './ListTodosComponent';
import AuthenticationService from './AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import Counter from '../counter/Counter';
import TodoComponent from './TodoComponent';
class TodoApp extends Component{

    
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const TodoComponentWithNavigationAndParams = withNavigation(withParams(TodoComponent));
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
        return(
            <div className = "TodoApp">
                
                
                <Router>
                    <HeaderComponentWithNavigation logged={AuthenticationService.isUserLoggedIn()}/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path ="/login" element={<LoginComponentWithNavigation/>}/>

                        <Route path ="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams/>
                            </AuthenticatedRoute>
                        }/>
                        
                        <Route path ="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponentWithNavigation/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path ="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path ="/todos/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponentWithNavigationAndParams/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path="/counter" element={<Counter/>}/>

                        <Route path ="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
                
                
            </div>
        );
    }
}


function ErrorComponent(){
    return <div>An error occurred. I don't know what to do.</div>
}



export default TodoApp;