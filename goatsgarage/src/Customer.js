import React, { Component } from 'react';


class Customer extends Component {
    constructor() {
        super()
        this.state = {
            customerName:"",
            address:"",
            vinNumber:"",
            serviceRequested:[]
        }
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
                    

                </form>

            </div>
        )
    }
}

export default Customer