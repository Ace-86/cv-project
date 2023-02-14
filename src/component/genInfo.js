
import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul> 
            <li>Name</li> 
            <li>Email</li> 
            <li>Phone</li> 

        </ul>
      </div>
    );
  }
}

export default GeneralInfo;












// A section to add 
// general information like 
// name, email, phone number.