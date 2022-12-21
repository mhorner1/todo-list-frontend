import {React, Component} from 'react';
import CounterButton from './CounterButton'
//import { PropTypes } from 'prop-types';
import './Counter.css';

class Counter extends Component{

    constructor(){
        super();
        
        this.state = {
            counter : 0
        };
        //this.increment = this.increment.bind(this);
        //don't need this binding if you make increment an "arrow function"
    }
    
    increment = (by) => {
        //console.log(`parent inc ${by}`)
        this.setState(
            (prevState) => {
            return {counter :  prevState.counter + by}
            }
        );
    }

    decrement = (by) => {
        this.setState(
            (prevState) =>{
                return {counter: prevState.counter - by}
            }
        );
    }

    reset = () =>{
        this.setState(
            {counter: 0}
        );
    }
    
    render(){
        return(
        <div className="Counter">
            <div className="ButtonRow">
                <CounterButton by={1} incrementMethod = {this.increment}/> 
                <CounterButton negative={true} by={1} incrementMethod = {this.decrement}/> 
            </div>
            <div className="ButtonRow">
                <CounterButton by={5} incrementMethod = {this.increment}/> 
                <CounterButton negative={true} by={5} incrementMethod = {this.decrement}/> 
            </div>
            <div className="ButtonRow">
                <CounterButton by={10} incrementMethod = {this.increment}/> 
                <CounterButton negative={true} by={10} incrementMethod = {this.decrement}/> 
            </div>
    
            <span className="count">{this.state.counter}</span>

            <div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        </div>
        );
    }
}



export default Counter;