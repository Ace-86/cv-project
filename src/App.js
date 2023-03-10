import React, { Component } from "react";
// import * as React from 'react';
import Personal from "./component/genInfo";
import Experience from "./component/practicalExp";
// import Display from "./component/Form/Display";
// import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
// const Stack = createNativeStackNavigator()
class App extends Component {
  render() {
    return (<div>
          <h1>CV : Resume Creator</h1>
          <h3> Personal Information</h3>
          <Personal />
          <h3> Work Experience</h3>
          <Experience />
        
          </div>
    )
  }
}

export default App



