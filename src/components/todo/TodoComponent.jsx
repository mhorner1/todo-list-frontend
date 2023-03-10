import {React, Component} from 'react';
import moment from 'moment';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';

class TodoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
            isCompleted: false

        }
        
    }

    componentDidMount(){
        console.log(`MOUNT ID ${this.props.params.id}`)
        if(this.props.params.id === "-1"){
            return
        }
        console.log("ccsacas")
        let username = AuthenticationService.getLoggedInUserName();
        let id = this.props.params.id
        TodoDataService.retrieveTodo(username, id)
        .then(response =>{
            //console.log(response)
            this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
                isCompleted: response.data.done
            })
        })
        .catch(e => console.log(e))
    }

    // if it returns errors as empty object, onSubmit is called
    // if errors has any data, onSubmit is not called
    validate = (values) =>{
        let errors = {}

        if(!values.description){
            errors.description = "Enter a description"
        }else if(values.description.length < 2){
            errors.description = "Description must be at least 2 character long"
        }

        if(!moment(values.targetDate).isValid){
            errors.targetDate = "Date not valid."
        }



        
        //console.log(values)
        return errors;
    }
    onSubmit = (values) =>{
        let username = AuthenticationService.getLoggedInUserName();
        let id = this.props.params.id
        let todo = {
            id : id,
            username: username,
            description : values.description,
            targetDate : values.targetDate,
            done: values.isCompleted
        }
        if(id === "-1"){
            //console.log(`submit: ${values.targetDate}`)
            TodoDataService.createTodo(username, todo)
            .then(() => this.props.navigate("/todos"))
            .catch(e => console.log(e))
        }else{
            //console.log(`submit: ${values.targetDate}`)
            TodoDataService.updateTodo(username,id, todo)
            .then(() => this.props.navigate("/todos"))
            .catch(e => console.log(e))
        }
        

    }

    render(){
        let {description, targetDate, isCompleted} = this.state;
        
        return(
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description, targetDate, isCompleted}}
                            onSubmit={this.onSubmit} 
                            validate={this.validate}
                            validateOnChange={false}
                            validateOnBlur={false}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label> Description </label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label> Target Date </label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label> Complete? </label>
                                        <Field className="form-control" type="checkbox" name="isCompleted"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                Todo Component with id = {this.props.params.id}
            </div>
        );
    }
}

export default TodoComponent;