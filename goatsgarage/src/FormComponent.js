import React from "react"

function FormComponent(props) {
    return (
        <main>
            <div>
                <form>
                    <input
                        name="customerName"
                        placeholder="Customer Name"
                        value={props.data.customerName}
                        onChange={props.handleChange} />
                    <br />
                    <input
                        name="address"
                        placeholder="Address"
                        value={props.data.address}
                        onChange={props.handleChange} />
                    <br />
                    <input
                        name="vinNumber"
                        placeholder="Vehicle VIN Number"
                        value={props.data.vinNumber}
                        onChange={props.handleChange} />
                    <br />
                    <input
                        name="serviceRequested"
                        placeholder="Service Requested"
                        value={props.data.serviceRequested}
                        onChange={props.handleChange} />
                    <br />

                    <button>Submit</button>

                </form>

                <hr />
                <h1>Customer Information:</h1>
                <p>Customer Name: {props.data.customerName}</p>
                <p></p>
                <p></p>
                <p></p>

            </div>
        </main>

    )
}




export default FormComponent