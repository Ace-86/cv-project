import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
            <li> Company Name</li>
            <li> Position Title</li>
            <ul> Job Task
                <l1>A</l1>
                <li>B</li>
                <li>C</li>
            </ul>
            <li> Date of Employment</li>
        </ul>
      </div>
    );
  }
}

export default Experience;















// A section to add practical 
// experience (company name, position
// title, main tasks of your jobs, 
// date from and until when you
//  worked for that company)
