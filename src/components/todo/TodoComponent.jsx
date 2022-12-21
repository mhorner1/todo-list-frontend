import {React, Component} from 'react';
import moment from 'moment';

import { Formik, Form, Field } from 'formik';

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

    render(){
        return(
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label> Description </label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label> Target Date </label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
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