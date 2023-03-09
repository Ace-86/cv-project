// import React from "react";
// import Input from "../Utilities/input"

// const Personal = ({personalInfo, onChange}) => {
//     return (
//         <Section
//             title="Personal Information"
//             direction="column"
//         >
//         <Input
//             onChange={(e) => onChange(e)}
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={personalInfo.firstName}
//         />
//         <Input
//             onChange={(e) => onChange(e)}
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={personalInfo.lastName}
//         />   
//         <Input
//         onChange={(e) => onChange(e)}
//         type="text"
//         name="phone"
//         placeholder="Phone Number"
//         value={personalInfo.phone}
//         />
//         <Input
//         onChange={(e) => onChange(e)}
//         type="text"
//         name="email"
//         placeholder="Email"
//         value={personalInfo.email}
//         />
//         </Section>
//     )
// }
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setDisplayText(text);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Text: </label>
        <input type="text" value={text} onChange={e => handleChange(e)} />
        <button type="submit" onClick={handleSubmit}>
          Show
        </button>
        {displayText && <p>{displayText}</p>}
      </form>
    </>
  );
}
