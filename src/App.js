import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        var price;
        const URL = 'https://api.exchangerate-api.com/v4/latest/USD';
        const getDollar = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            const ARS = data.rates.ARS;
            price = JSON.parse(ARS);
            console.log(price);
        }
        getDollar();
        return (
            <div className="App">
                <h1>Hi</h1>
            </div>
        );
    }
}

export default App;