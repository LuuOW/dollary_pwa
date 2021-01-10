import React, { useState } from 'react';
import './App.css';
import { getDollar } from './API/getDollar';

const App = () => {

    const price = useState('');

    const calculate = async (e) => {
        if(e.key === 'Enter') {
            const priceIn = await getDollar()
            console.log(priceIn);
        }
    }

    return (
        <div className="App">
            <h1>Dollary</h1>
            <input
                type="text"
                className="inputPrice"
                placeholder="Ingrese el precio del producto..."
                onChange={(e) => price(e.target.value)}
                onKeyPress={calculate}
            />
        </div>
    );
}

export default App;