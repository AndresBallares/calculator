import React from 'react';
import './App.css';
import Keypad from './Components/Keypad';
import ResultComponent from './Components/ResultComponent';

class App extends React.Component {
    constructor () {
      super ();
      this.state = {
        result: 0,
        
    
      }
    }

    calculate = (userInput, operation) =>  {
      this.setState({result: 0});
  }



  render() {
    let {result} = this.state;

    return (
      <div className="App">
        <ResultComponent  />
        <Keypad perform={this.calculate} onClick={this.setState} />
      </div>
    );

  }
}

export default App;
