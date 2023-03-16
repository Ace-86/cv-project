import React from "react";
    class Education extends React.Component {
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


      clearInput = (e) => {
        this.setState({
          sName: "",
          degree: "",
          sDate: "",
          eDate: "",
      })
    }

    //mutates states directly: fix it so that state is cloned and updated through setState
    cleardata = () => {
      this.setState (
      { data: {
        sName: "",
        degree: "",
        sDate: "",
        eDate: ""  
      }}
    )
    }

    clearAll = (e) => {
      e.preventDefault();
      this.cleardata();
      this.clearInput();
      //mutates state directly: clone and copy through setState
    //   this.state = ({
    //     sName: "",
    //     degree: "",
    //     sDate: "",
    //     eDate: "",
    //     data: {}
    // });
    console.log(this.state);
    }


      render() {

        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
        
            <div className="leftcolumn">  
              <label>School Name</label>
              <input
                className="formInput"
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
                className="formInput"
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
                className="formInput"
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
                className="formInput"
                type="number"
                value={this.state.eDate}
                onChange={(e) => {
                  this.handleChange(e, "eDate");
                }}
                name="eDate"
              />
        
              <br />
             </div> 
              
              <button type="submit">Submit</button>
              <button onClick = {this.clearAll}>Clear All</button>
              <button onClick = {this.cleardata}>cleardata</button>
              
            </form>

            <div className= "rightcolumn">
           
            <h2>School Name: {this.state.data.sName}</h2>
            <h2>Degree: {this.state.data.degree}</h2>
            <h2>Start Date: {this.state.data.sDate}</h2>
            <h2>End Date: {this.state.data.eDate}</h2>

          </div>

          </div>
        );
      }
    }
    
    export default Education;
