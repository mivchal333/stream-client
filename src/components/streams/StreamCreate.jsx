import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {
    renderInput({input, label}) {
        return (
            <div className="field">
                <label>{label}</label>
                <input
                    {...input}
                    className=""
                />
            </div>

        )
    }

    onSubmit = (event) => {

    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>);
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "Invalid title!"
    }
    if (!formValues.description) {
        errors.description = "Invalid description!"
    }
    return errors;
}
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);