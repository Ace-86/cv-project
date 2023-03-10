import React from "react";
    class App extends React.Component {
      constructor(props) {
        super();
        this.state = {
          sName: "",
          degree: "",
          sDate: "",
          eDate: "",
          data: {}
        };
      }
    
      handleChange = (e, type) => {
        this.setState({ ...this.state, [type]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { sName, degree, sDate, eDate } = this.state;
        this.setState({
          data: {
            sName,
            degree,
            sDate,
            eDate
          }
        });
        console.log(this.state);
      };
      render() {

        return (
          <div className="App">
            <form onSubmit={this.handleSubmit}>
              
              <label>School Name</label>
              <input
                type="text"
                value={this.state.sName}
                onChange={(e) => {
                  this.handleChange(e, "sName");
                }}
                name="sName"
              />
        
              <br />
              
              <label>Degree</label>
              <input
                type="text"
                value={this.state.degree}
                onChange={(e) => {
                  this.handleChange(e, "degree");
                }}
                name="degree"
              />
        
              <br />
             
              <label>Start Date</label>
              <input
                type="sDate"
                value={this.state.sDate}
                onChange={(e) => {
                  this.handleChange(e, "sDate");
                }}
                name="sDate"
              />
        
              <br />

              <label>End Date</label>
              <input
                type="number"
                value={this.state.eDate}
                onChange={(e) => {
                  this.handleChange(e, "eDate");
                }}
                name="eDate"
              />
        
              <br />
              
              <button type="submit">Submit</button>
            
            </form>
            
            <h2>School Name: {this.state.data.sName}</h2>
            
            <h2>Degree: {this.state.data.degree}</h2>
            
            <h2>Start Date: {this.state.data.sDate}</h2>

            <h2>End Date: {this.state.data.eDate}</h2>
          
          </div>
        );
      }
    }
    
    export default App;

// A section to add your 
// educational experience 
// (school name, title of study, date of study)