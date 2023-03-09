// import * as React from 'react';
// import { useState } from 'react';
// import { Text, View, StyleSheet, TextInput, Button, input} from 'react-native';

// // export default function App() {
//   export default function Personal() {
// const [state, setState] = useState({ fName: "", lName: "" });
// const [updated, setUpdated] = useState(state);
        
// const handleChange = (e) => {
//             const { name, value } = e.target;
//             setState(prevState => ({
//                 ...prevState,
//                 [name]: value
//             }));
//         };
        
//         const handleClick = (e) => {
//         e.preventDefault();
//           setState(state)
//           console.log('Hey')
      
//        };
      

//         return (
//             <View>
               
//         <input
//             value={state.fName}
//             type="text"
//             onChange={handleChange}
//             name="fName"
//         />
//         <input
//             value={state.lName}
//             type="text"
//             onChange={handleChange}
//             name="lName"
//         />

//         <h2> Message: {state.fName} </h2>
//         <h1> Updated: {setUpdated.fName} </h1>
            
//             <Button
//                 title="Create"
//                 // type="submit"
//                 // style={styles.buttons}
//                 onClick = {handleClick}
//                 // onPress={() => navigation.navigate('ShowCV', userDetails)}
//                 > Create
//                 </Button>
// </View>

//          )
//     }
import { useState } from 'react';
// import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([
    { fname: '',
     lname: '',
    education: '',
    address: '',
    age: null,
    submitted: false
}
  ])

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
 }

 const addFields = () => {
    let newfield = { fname: '', lname: '' }
    setInputFields([...inputFields, newfield])
}

const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
}

const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
}

  return (
    <div className="App">
      <form onSubmit = {submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>

              <input
                name='fname'
                placeholder='First Name'
                value={input.fname}
                onChange={event => handleFormChange(index, event)}
              />
              <br />
              <input
                name='lname'
                placeholder='Last Name'
                value={input.lname}
                onChange={event => handleFormChange(index, event)}
              />
              <br />
              <input
                name='education'
                placeholder='Education'
                value={input.education}
                onChange={event => handleFormChange(index, event)}
              />
              <br />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
        <button onClick={addFields}>Add More..</button>
        <button onClick={submit}>Submit</button>
      </form>
{/* //    <h1> Updated: {inputFields} </h1> */}
      <h2>  {inputFields[0].fname} </h2>
    </div>
  );
}

export default App;