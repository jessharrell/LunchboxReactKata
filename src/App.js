import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome OMG to React</h1>
                    <button onClick={this.handleClick}>FizzBuzz</button>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="fizzbuzz">{this.state.isToggleOn ? 'Fizz' : ''}</div>
                <div className="fizzbuzz">{this.state.isToggleOn ? 'Fuzz' : ''}</div>
            </div>
        );
    }
}

export default App;
