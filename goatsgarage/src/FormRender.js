import React from "react"
import FormLogic from "./FormLogic"

function FormRender(props) {
    return(

        <div>
        <form>
            <input 
                name="customerName" 
                placeholder="Customer Name"
                value={props.data.customerName} 
                onChange={this.handleChange}/>
            <br/>
            <input 
                name="address" 
                placeholder="Address"
                value={props.data.address} 
                onChange={this.handleChange}/>
            <br/>
            <input 
                name="vinNumber"
                placeholder="Vehicle VIN Number" 
                value={props.data.vinNumber} 
                onChange={this.handleChange}/>
            <br/>
            <input 
                name="serviceRequested" 
                placeholder="Service Requested"
                value={props.data.serviceRequested} 
                onChange={this.handleChange}/>
            <br/>
            
            <button>Submit</button>

        </form>
           

    </div>

        
    )
}




export default FormRender