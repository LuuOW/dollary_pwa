import React, { useState } from 'react';
import './App.css';
import { getDollar } from './API/getDollar';

const App = () => {

    const ARS = getDollar()
    
    const [price, setPrice] = useState('');

    var prodPrice = ARS*price;

    const calculate = (e) => {
        if(e.key === 'Enter') {
            console.log(ARS);
            console.log(price);
            console.log(prodPrice);
        }
    }

    return (
        <div className="App">
            <h1>Dollary</h1>
            <input
                type="number"
                className="calculate"
                placeholder="Ingrese el precio del producto..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onKeyPress={calculate}
            />
        </div>
    );
}

export default App;