import React, { Component } from "react";
// import Education from "./component/education";
// import GeneralInfo from "./component/genInfo";
// import Experience from "./component/practicalExp";
import ResumeForm from "./component/Form/cvForm";
class App extends Component {
  render() {
    return (<div>
          <h1>CV : Resume Creator</h1>
          <ResumeForm />
          </div>
    )
  }
}

export default App
