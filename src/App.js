import React, { Component } from "react";
import Education from "./component/education";
import GeneralInfo from "./component/genInfo";
import Experience from "./component/practicalExp";

class App extends Component {
  render() {
    return (<div>CV : Resume Creator
     
          <h1> YESS</h1>
          <GeneralInfo title="General Info" />
          <Education title="Education" />
          <Experience title="Work Experience" />
          </div>
    )
  }
}

export default App
