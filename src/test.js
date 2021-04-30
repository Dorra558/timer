import './App.css';
import React from 'react'
import { Button } from 'react-bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
 
      const sec = Number(this.state.value, 10); // convert value to number if it's string
      let hours   = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
      let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
      // add 0 if value < 10; Example: 2 => 02
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
     this.state.value = hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
   
   let res = 'The value on HMS is ' + this.state.value
   return res
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a value:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <Button type="submit" value="Submit">Envoyer </Button> */}
        <p>{this.handleSubmit()}</p>
      </form>
    );
  }
}



export default App;
