import React from "react";


class Keypad extends React.Component  {
    constructor () {
        super ();
        this.state = {
            userInput: '',
            input: "",
            setCalc: "",
        }
    }

    print = () => {

        console.log(this.state)
    }
    handleInput = (event) => {
        this.setState({userInput: this.state.userInput + event.target.name})
        const {userInput, operation} = this.state

        //this.props.perform(userInput, operation)
    }

    reset = (event) => {
        this.setState({
            userInput: 0,
        })
    }

    plusMinus = (event) => {
        this.setState({userInput: this.state.userInput * -1})
    }

    backSpace = (event) => {
        this.setState({userInput: (this.state.userInput.slice(0, event.target.name - 1))})
    }

    ops = ["/", "*", "+", "-", "*"]



    // switch (operator) {
    //     case "/":
    //         calculate = string / string;
    //         break;
    //     case "+":
    //         calculate = string + string;
    //         break;
    //     case "X":
    //         calculate = string * string;
    //         break;
    //     case "-":
    //         calculate = string - string;
    //         break
    // }
    
    render(){
            this.print()
        return ( 
            <div className='container'>
                <div className="button">
                    <div id='values'
                    type='Number' 
                    value="" 
                    className="display" >{this.state.userInput || "0"}</div>  
                    
                    <button name="AC" className="btn light-gray" onClick={this.reset}  >AC</button>
                    <button name="+/-" className="btn light-gray"onClick={this.plusMinus} >+/-</button>
                    <button name="C" className="btn light-gray" onClick={this.backSpace}>C</button>
                    <button name="/" className="btn orange" >&divide;</button>
        
                    <button name="7" className="btn" onClick={this.handleInput}>7</button>
                    <button name="8" className="btn" onClick={this.handleInput}>8</button>
                    <button name="9" className="btn" onClick={this.handleInput}>9</button>
                    <button name="X" className="btn orange" >x</button>
        
                    <button name="4" className="btn" onClick={this.handleInput}>4</button>
                    <button name="5" className="btn" onClick={this.handleInput} >5</button>
                    <button name="6" className="btn" onClick={this.handleInput}> 6</button>
                    <button name="-" className="btn orange"  >-</button>
        
                    <button name="1" className="btn" onClick={this.handleInput}>1</button>
                    <button name="2" className="btn" onClick={this.handleInput}>2</button>
                    <button name="3" className="btn" onClick={this.handleInput}>3</button>
                    <button name="+" className="btn orange" >+</button>
        
                    <button name="0" className="btn zero" onClick={this.handleInput}>0</button>
                    <button name="." className="btn" onClick={this.handleInput}>.</button>
                    <button name="=" className="btn orange" >=</button>
                </div>
            </div>
        )

    }
}

export default Keypad;