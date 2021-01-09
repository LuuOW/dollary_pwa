import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        const URL = 'https://api.exchangerate-api.com/v4/latest/USD';
        const getDollar = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            const ARS = data.rates.ARS;
            console.log(ARS);
        }
        return (
            <div className="App">
                <h1>Hi</h1>
                <button onClick = {getDollar}>Get Dollar</button>
            </div>
        );
    }
}

export default App;