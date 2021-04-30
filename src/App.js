import './App.css';
import React from 'react'
import { Button } from 'react-bootstrap';



class App extends React.Component {


  
  state = { valeur: 0, heure:0, min:0,seconde:0}

  handleChange = (event) => {
    this.setState ({
      value : Number(event.target.value)
    })
   }



  converTime = ()  =>{
 let valeur = this.state.value    
 
       this.setState({
        heure : Math.floor(valeur / 3600),
        min : Math.floor(valeur % 3600 / 60),
        seconde : Math.floor(valeur % 3600 % 60),
       })
  }

  run = () =>{
    if(this.state.seconde === 60){
      this.state.min ++
      this.state.seconde = 0
    }


   }
   


   startTime = () => {
    this.interval = setInterval(() => {
        let s = this.state.seconde;
        if (s === 60){
            this.state.min++ 
            this.state.seconde = 0 

        }
        if (this.state.min === 60){
            this.state.heure++
            this.state.min = 0 
        }

         this.setState({
             seconde : Number(this.state.seconde)+1,
         })
     },1000);
 }

stopTime = ()=>{
  clearInterval(this.interval)
}

resetTime = () =>{
  this.setState({
    heure : 0 ,
    min : 0 ,
    seconde : 0 ,
})
}

  render() {
    return (
      <div className="chrono">
        <center>
      <form className="formulaire" onSubmit={this.handleSubmit}>
        <label>
          <input className="inpute" type="text" value={this.state.value}  placeholder="Enter value" onChange={this.handleChange} />
          <pre>H: <span>{this.state.heure}</span> M: <span>{this.state.min}</span> s: <span>{this.state.seconde}</span></pre>
        </label>
      </form>
        <div className="bouton">
                <Button onClick={this.converTime}>Convert </Button>
                <Button onClick={this.startTime}>Start </Button>
                <Button onClick={this.stopTime}>Stop </Button>
                <Button onClick={this.resetTime}>Reset </Button>
        </div>
        </center>
      </div>
    );
  }
}



export default App;
