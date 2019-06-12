import React, { Component } from 'react';
import FormComponent from "./FormComponent"


class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            customerName: "",
            address: "",
            vinNumber: "",
            serviceRequested: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

    }

    handleChange(event) {

        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <div>
                <FormComponent
                    handleChange={this.handleChange}
                    data={this.state}
                />
            </div>
        )
    }
}

export default FormContainer