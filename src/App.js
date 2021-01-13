import React, { useState } from 'react';
import './App.css';
//import { getDollar } from './API/getDollar';

const App = () => {

    var finalPrice;

    var dollar = 84;

    var isChecked = false;


    var dig = false;
    var cur = false;
    var phys = false;


    var totaldigTax;
    var totalfsTax;
    var totalffTax;
    var totalcurTax;



    const [price, setPrice] = useState('');

    const isOn = (e) => {
        if (isChecked === false) {
            isChecked = true;
            dollar = 1;
            console.log('Modo pesos activado');
        } else {
            console.log('Modo pesos desactivado');
            dollar = 84;
            isChecked = false;
        } 
    }

    const digOn = (e) => {
        if (dig === false) {
            dig = true;
            console.log('Dig calculate');
        }
    }

    const physOn = (e) => {
        if (phys === false) {
            phys = true;
            console.log('Physical calculate');
        } 
    }

    const curOn = (e) => {
        if (cur === false) {
            cur = true;
            console.log('Currency calculate');
        } 
    }


    const calcNow = () => {

        //calcValue = true;

        const prodPrice = price * dollar;

        var imp30 = prodPrice*3/10;
        const imp35 = prodPrice*35/100;
        const imp21 = prodPrice*21/100;
        const cin50 = prodPrice-50;
        const imp50 = cin50*5/10;

        if (dig === true) {
            imp30 = prodPrice*8/100;
        }


        const ffTax = imp21 + imp30 + imp35 + imp50;
        totalffTax = ffTax + prodPrice;

        const digTax = imp21 + imp30 + imp35;
        totaldigTax = digTax + prodPrice;

        const fsTax = imp30 + imp21 + imp35;
        totalfsTax = fsTax + prodPrice;

        const curTax = imp30 + imp35;
        totalcurTax = curTax + prodPrice;
    }

    const calculate = (e) => {

        if (e.key === 'Enter') {
            calcNow();
        }

        if (dig === true) {
            finalPrice = totaldigTax;
        }

        if (phys === true) {
            if (price <= 50) {
                finalPrice = totalfsTax;
            } else {
                finalPrice = totalffTax;
            }
        }

        if (cur === true) {
            finalPrice = totalcurTax;
        }

        console.log(finalPrice);
    }

    const calculateNow = (e) => {
        if (price === '') {
            console.log('Please, enter a price');
        } else {

            calcNow();

            if (dig === true) {
                finalPrice = totaldigTax;
            }
            
            if (phys === true) {
                if (price <= 50) {
                    finalPrice = totalfsTax;
                } else {
                    finalPrice = totalffTax;
                }
            }

            if (cur === true) {
                finalPrice = totalcurTax;
            }

        }
        
    }





    //var calcValue = false;




    return (
        <div className="App">
            <h1>Dollary</h1>
            <p>Switch to Pesos</p>
            <label className="switch">
                <input id="switch" type="checkbox" defaultChecked={false} onChange={isOn}/>
                <span className="slider round"></span>
            </label>
            <form>
                <input type="radio" name="choice" value="digital" defaultChecked={false} onClick={digOn}/>Digital
                <input type="radio" name="choice" value="physical" defaultChecked={false} onClick={physOn}/>Fisico
                <input type="radio" name="choice" value="currency" defaultChecked={false} onClick={curOn}/>Divisa
            </form>
            <input
                type="number"
                className="calculate"
                placeholder="Ingrese el precio del producto..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onKeyPress={calculate}
            />
            <button className="calcBtn" id="calcBtn" type="submit" onClick={calculateNow}>Calcular</button>
        </div>
    );
}

export default App;