import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input
                    {...input}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </div>

        )
    }

    renderError({touched, error}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {

    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
    form: 'streamCreate',
    validate,
})(StreamCreate);