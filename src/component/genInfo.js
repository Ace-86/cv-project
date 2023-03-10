import React from "react";
    // import "./styles.css";
    class App extends React.Component {
      constructor(props) {
        super();
        this.state = {
          fName: "",
          lName: "",
          email: "",
          data: {}
        };
      }
    
      handleChange = (e, type) => {
        this.setState({ ...this.state, [type]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { fName, lName, email, phone } = this.state;
        this.setState({
          data: {
            fName,
            lName,
            email,
            phone
          }
        });
        console.log(this.state);
      };
      render() {

        return (
          <div className="App">
            <form onSubmit={this.handleSubmit}>
              
              <label>First Name</label>
              <input
                type="text"
                value={this.state.fName}
                onChange={(e) => {
                  this.handleChange(e, "fName");
                }}
                name="fName"
              />
        
              <br />
              
              <label>Last Name</label>
              <input
                type="text"
                value={this.state.lName}
                onChange={(e) => {
                  this.handleChange(e, "lName");
                }}
                name="lName"
              />
        
              <br />
             
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleChange(e, "email");
                }}
                name="email"
              />
        
              <br />

              <label>Phone</label>
              <input
                type="number"
                value={this.state.phone}
                onChange={(e) => {
                  this.handleChange(e, "phone");
                }}
                name="phone"
              />
        
              <br />
              
              <button type="submit">Submit</button>
            
            </form>
            
            <h2>First Name: {this.state.data.fName}</h2>
            
            <h2>Last Name: {this.state.data.lName}</h2>
            
            <h2>Email: {this.state.data.email}</h2>

            <h2>Phone #: {this.state.data.phone}</h2>
          
          </div>
        );
      }
    }
    
    export default App;











// A section to add 
// general information like 
// name, lName, phone number.