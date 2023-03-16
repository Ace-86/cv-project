import React, { Component } from "react";
import Personal from "./component/genInfo";
import Experience from "./component/practicalExp";
import Education from "./component/education";

class App extends Component {
  render() {
    return (<div>
          <h1>CV : Resume Creator</h1>
          <h3> Personal Information</h3>
          <Personal />
          <h3> Work Experience</h3>
          <Experience />
          <h3> Education</h3>
          <Education />

        
          </div>
    )
  }
}

export default App



