import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, input} from 'react-native';

// export default function App() {
  export default function Personal() {
const [state, setState] = useState({ fName: "", lName: "" });
        
const handleChange = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
        const [updated, setUpdated] = useState(state);
        
        const handleClick = (e) => {
        e.preventDefault();
          setUpdated(state)
          console.log('Hey')
       };
      

        return (
            <View>
        <input
            value={state.fName}
            type="text"
            onChange={handleChange}
            name="fName"
        />
        <input
            value={state.lName}
            type="text"
            onChange={handleChange}
            name="lName"
        />

        <h2> Message: {state.fName} </h2>
        <h1> Updated: {setUpdated.fName} </h1>
            
            <button
                title="Create"
                // style={styles.buttons}
                onClick = {handleClick}
                // onPress={() => navigation.navigate('ShowCV', userDetails)}
                > Create
                </button>
</View>

         )
    }
  












