import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Education;

// A section to add your 
// educational experience 
// (school name, title of study, date of study)