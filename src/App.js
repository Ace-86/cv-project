import React, { Component } from "react";
// import * as React from 'react';
import ResumeForm from "./component/Form/cvForm";
// import Display from "./component/Form/Display";
// import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
// const Stack = createNativeStackNavigator()
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



