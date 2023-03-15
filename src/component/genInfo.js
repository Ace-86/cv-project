import React from "react";
    // import "./styles.css";
    class App extends React.Component {
      constructor(props) {
        super();
        this.state = {
          fName: "",
          lName: "",
          email: "",
          phone: "",
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


      clearInput = (e) => {
        this.setState({
          fName: "",
          lName: "",
          email: "",
          phone: "",
      })
    }

    display = () => {
      {this.state.data.fName = ""}
      {this.state.data.lName = ""}
      {this.state.data.email = ""}
      {this.state.data.phone = ""}
    }

    clearAll = (e) => {
      e.preventDefault();
      this.clearInput();
      this.display();
      this.state = ({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        data: {}
    });
      console.log(this.state)
    }
      
      render() {

        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div className="leftcolumn">
              <label>First Name</label>
              <input
                className="formInput"
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
                className="formInput"
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
                className="formInput"
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
                className="formInput"
                type="number"
                value={this.state.phone}
                onChange={(e) => {
                  this.handleChange(e, "phone");
                }}
                name="phone"
              />        
              <br />
            </div>

            <button type="submit">Submit</button>
            <button onClick = {this.clearAll}> Clear All</button>

          </form>
            <div className= "rightcolumn">
              <h2>First Name: {this.state.data.fName}</h2>
              <h2>Last Name: {this.state.data.lName}</h2>
              <h2>Email: {this.state.data.email}</h2>
              <h2>Phone #: {this.state.data.phone}</h2>
          </div>

          </div>
        );
      }
    }
    
    export default App;








