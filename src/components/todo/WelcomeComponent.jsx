import {React, Component} from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component{

constructor(props){
    super(props);

    this.state = {
        welcomeMessage : ""
    }


    
}

retrieveWelcomeMessage = (pathvar) =>{
    HelloWorldService.executeHelloWorldPathService(pathvar)
    .then
    (
        response => 
        {
            this.setState({
            welcomeMessage : response.data.hw
            })
            console.log(response)
        }
    )
    .catch(e => console.log(e))
}

    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}! You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click below to get a customized welcome message.
                    <div>
                        <button style={{width:"400px"}}className="btn" onClick={() => this.retrieveWelcomeMessage(this.props.params.name)}>
                            Get Welcome Message
                        </button>
                    </div>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }
}

export default WelcomeComponent;