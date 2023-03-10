import React from "react";
import "../styles/style.css"
    class App extends React.Component {
      constructor(props) {
        super();
        this.state = {
          cName: "",
          position: "",
          tasks: "",
          sdoe: "",
          edoe: "",
          data: {}
        };
      }
    
      handleChange = (e, type) => {
        this.setState({ ...this.state, [type]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { cName, position, tasks, sdoe, edoe } = this.state;
        this.setState({
          data: {
            cName,
            position,
            tasks,
            sdoe,
            edoe
          }
        });
        console.log(this.state);
      };
      render() {

        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              
              <label>Company Name</label>
              <input
                type="text"
                value={this.state.cName}
                onChange={(e) => {
                  this.handleChange(e, "cName");
                }}
                name="cName"
              />
        
              <br />
              
              <label>Position Title</label>
              <input
                type="text"
                value={this.state.position}
                onChange={(e) => {
                  this.handleChange(e, "position");
                }}
                name="position"
              />
        
              <br />
             
              <label>Job Task</label>
              <input
                type="tasks"
                value={this.state.tasks}
                onChange={(e) => {
                  this.handleChange(e, "tasks");
                }}
                name="tasks"
              />
        
              <br />

              <label>Start Date</label>
              <input
                type="date"
                value={this.state.sdoe}
                onChange={(e) => {
                  this.handleChange(e, "sdoe");
                }}
                name="sdoe"
              />
        
              <br />


              <label>End Date</label>
              <input
                type="date"
                value={this.state.edoe}
                onChange={(e) => {
                  this.handleChange(e, "edoe");
                }}
                name="edoe"
              />
               <br />

              <button type="submit">Submit</button>
            
            </form>
            <div className= "rightColumn">
            <h2>Company Name: {this.state.data.cName}</h2>
            
            <h2> Position Title: {this.state.data.position}</h2>
            
            <h2>Job Tasks: {this.state.data.tasks}</h2>

            <h2>Start date of employment: {this.state.data.sdoe}</h2>

            <h2>End date of employment: {this.state.data.edoe}</h2>
            </div>
          </div>
        );
      }
    }
    
    export default App;
