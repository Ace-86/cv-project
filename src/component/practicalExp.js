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
        })
        console.log(this.state);
      };


      clearInput = (e) => {
        e.preventDefault();
        this.setState({
          
          cName: "",
          position: "",
          tasks: "",
          sdoe: "",
          edoe: ""
          
      })
      console.log(this.state);
    }

    // display = (e) => {
    //   e.preventDefault();
    //   this.setState (
    //   {state.data.cName: ""})
    //   console.log(this.state)
    // }


      render() {

        return (
          <div className="container">
            <form >

            <div className="leftcolumn"> 
              <label>Company Name</label>
              <input
                className="formInput"
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
                className="formInput"
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
                className="formInput"
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
                className="formInput"
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
                className="formInput"
                type="date"
                value={this.state.edoe}
                onChange={(e) => {
                  this.handleChange(e, "edoe");
                }}
                name="edoe"
              />
               <br />
               </div>
              
              <button 
              onClick={this.handleSubmit}
              type="submit">
                Submit
              </button>
              
              <button onClick= {
                  this.clearInput}> 
                  Clear
                  </button>


              <button 
              type="reset"
              onClick = {
                this.display}>
              erase
              </button>
            
            </form>

            <div className= "rightcolumn">
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
