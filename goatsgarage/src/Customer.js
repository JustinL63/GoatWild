import React, { Component } from 'react';
import Form from "./Form"


class Customer extends Component {
    render() {
        return (
          <div className="Customer">
            <header className="Customer-header">
            </header>
              
                <h1>Customer Information</h1>
                    <h2>{this.props.customerName}</h2>
                    <h2>{this.props.address}</h2>
                    <h2>{this.props.vinNumber}</h2>
                    <h2></h2>
    
            
          </div>
        );
      }
    }

export default Customer