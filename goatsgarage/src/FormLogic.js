import React, { Component } from 'react';


class FormLogic extends Component {
    constructor() {
        super()
        this.state = {
            customerName:"",
            address:"",
            vinNumber:"",
            serviceRequested:[]
        }
            this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value

        })

    }

    render() {
        return (
            <div>
            <FormLogic 
                handleChange={this.handleChange}
                data={this.state}
            />
        </div>
        )
    }
}

export default FormLogic