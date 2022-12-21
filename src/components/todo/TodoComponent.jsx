import {React, Component} from 'react';
import moment from 'moment';

import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';

class TodoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: 1,
            description: 'ex',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
            isCompleted: false

        }
        
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
        console.log(`submit: ${values.targetDate}`)
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
                            validateOnBlur={false}>
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