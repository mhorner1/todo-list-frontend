import {React, Component} from 'react';
import { PropTypes } from 'prop-types';


class CounterButton extends Component{
    //define the initial state in a constructor
    constructor(){
        super();
        
        this.state = {
            counter : 0
        };
        //this.increment = this.increment.bind(this);
        //don't need this binding if you make increment an "arrow function"
    }
    
    increment = () => {
        // want to call Counter increment()
        this.props.incrementMethod(this.props.by)
     }

    render(){
        if (this.props.negative){
            return(
                <div className="counter">
                    <button onClick={() => this.props.incrementMethod(this.props.by)}>- {this.props.by}</button>
                </div>
            );
        }
    
        return(
                <div className="counter">
                    <button onClick={() => this.props.incrementMethod(this.props.by)}>+ {this.props.by}</button>
                </div>
        );
        
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}


export default CounterButton;