import React, { useState } from 'react';
import './App.css';
import { getDollar } from './API/getDollar';

const App = () => {

    getDollar();



    const [price, setPrice] = useState('');

    const calculate = (e) => {
        if(e.key === 'Enter') {
            calcNow();
        }
    }

    const calcNow = () => {

        const prodPrice = price * getDollar()
        console.log(prodPrice);
        var imp30 = prodPrice * 3 / 10
        const imp35 = prodPrice * 35 / 100
        const imp21 = prodPrice * 21 / 100
        const cin50 = prodPrice - 50
        const imp50 = cin50 * 5 / 10

        if (document.getElementById('switch') === true) {
            imp30 = prodPrice * 8 / 100
        }

        const ffTax = imp21 + imp30 + imp35 + imp50
        const totalffTax = ffTax + prodPrice

        const digTax = imp21 + imp30 + imp35
        const totaldigTax = digTax + prodPrice

        const fsTax = imp30 + imp21 + imp35
        const totalfsTax = fsTax + prodPrice

        const curTax = imp30 + imp35
        const totalcurTax = curTax + prodPrice
    }

    return (
        <div className="App">
            <h1>Dollary</h1>
            <p>Switch to Pesos</p>
            <label className="switch">
                <input id="switch" type="checkbox" defaultChecked={false} />
                <span className="slider round"></span>
            </label>
            <form>
                <input type="radio" name="choice" value="digital" defaultChecked={false} />Digital
                <input type="radio" name="choice" value="physical" defaultChecked={false} />Fisico
                <input type="radio" name="choice" value="currency" defaultChecked={false} />Divisa
            </form>
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