import {React, Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment/moment';

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos:  [],
            message: ""
        }
    }

    //handle api calls in componentDidMount instead of constructor.
    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                //console.log(response)
                this.setState({
                    todos : response.data
                })
            }
        )
        .catch(e => console.log(e))
    }

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username,id)
        .then( response => {
            this.setState({
                message : "Successfully deleted todo"
            })
            this.refreshTodos();
        })
        .catch(e => console.log(e))
    }

    updateTodoClicked = (id) => {
        console.log('update')
        this.props.navigate(`/todos/${id}`)
    }

    render(){
        return(
            <div>
                <h1>Todo List</h1>
                {this.state.message.length > 0 && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>targetDate</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{moment(todo.targetDate).format('MM-DD-YYYY')}</td>
                                <td>{todo.done.toString()}</td>
                                <td><button className="btn btn-submit" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;