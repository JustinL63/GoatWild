import React, { Component } from 'react';


class Form extends Component {
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
                <form>
                    <input 
                        name="customerName" 
                        placeholder="Customer Name"
                        value={this.state.customerName} 
                        onChange={this.handleChange}/>
                    <br/>
                    <input 
                        name="address" 
                        placeholder="Address"
                        value={this.state.address} 
                        onChange={this.handleChange}/>
                    <br/>
                    <input 
                        name="vinNumber"
                        placeholder="Vehicle VIN Number" 
                        value={this.state.vinNumber} 
                        onChange={this.handleChange}/>
                    <br/>
                    <input 
                        name="serviceRequested" 
                        placeholder="Service Requested"
                        value={this.state.serviceRequested} 
                        onChange={this.handleChange}/>
                    <br/>
                    
                    <button>Submit</button>

                </form>
                   

            </div>
        )
    }
}

export default Form