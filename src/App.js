import React, { useState } from 'react';
import './App.css';
//import { getDollar } from './API/getDollar';

const App = () => {

    var finalPrice;

    //API call from the exchange rate API.


    const URL = 'https://api.exchangerate-api.com/v4/latest/USD';

    var dollar;
    var oneOb;

    const getDollar = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        const { rates } = data;
        var { ARS } = rates;
        ARS = JSON.parse(ARS);
        dollar = parseFloat(ARS);
        oneOb = dollar;
        var output = 'Dolar oficial: ' + dollar.toFixed(2);
        document.getElementById('dolarOficial').innerHTML = output;
    }

    getDollar();

    //Declaring some variables...


    const [isChecked, setChecked] = useState(false);

    const [radio, setRadio] = useState('');


    var totaldigTax;
    var totalfsTax;
    var totalffTax;
    var totalcurTax;

    const [price, setPrice] = useState('');

    //Event handlers for the buttons and the switch...


    //Calculating the taxes using the API call return data...

    const calcNow = () => {

        const prodPrice = price * oneOb;

        var imp30 = prodPrice * 3 / 10;
        const imp35 = prodPrice * 35 / 100;
        const imp21 = prodPrice * 21 / 100;
        const cin50 = prodPrice - 50;
        const imp50 = cin50 * 5 / 10;

        if ("dig" === radio) {
            imp30 = prodPrice * 8 / 100;
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


    //Event handling for the calculate Btn...

    const calculate = (e) => {

        if (e.key === 'Enter') {
            if (price === '') {
                alert('Porfavor introduce el precio del producto');

            } else if ('dig' !== radio && 'cur' !== radio && 'phys' !== radio) {
                alert('Porfavor selecciona el tipo de producto...');

            } else {
                if (isChecked === true) {
                    oneOb = 1;
                    document.getElementById('curRadio').disabled = true;
                } else {
                    oneOb = dollar;
                    document.getElementById('curRadio').disabled = false;
                }

                calcNow();


                if ("dig" === radio) {
                    finalPrice = totaldigTax;
                }

                if ("phys" === radio) {
                    if (price <= 50) {
                        finalPrice = totalfsTax;
                    } else {
                        finalPrice = totalffTax;
                    }
                }

                if ("cur" === radio) {
                    finalPrice = totalcurTax;
                }

                finalPrice = finalPrice.toFixed(2);
                var output = 'El precio total a pagar es: ' + finalPrice;
                document.getElementById("result").innerHTML = output;
                setPrice('');
            }
        }
    }



    const calculateNow = () => {

        if (price === '') {
            alert('Porfavor introduce el precio del producto');

        } else if ('dig' !== radio && 'cur' !== radio && 'phys' !== radio) {
            alert('Porfavor selecciona el tipo de producto...');

        } else {
            if (isChecked === true) {
                oneOb = 1;
                document.getElementById('curRadio').disabled = true;
            } else {
                oneOb = dollar;
                document.getElementById('curRadio').disabled = false;
            }

            calcNow();


            if ("dig" === radio) {
                finalPrice = totaldigTax;
            }

            if ("phys" === radio) {
                if (price <= 50) {
                    finalPrice = totalfsTax;
                } else {
                    finalPrice = totalffTax;
                }
            }

            if ("cur" === radio) {
                finalPrice = totalcurTax;
            }

            finalPrice = finalPrice.toFixed(2);
            var output = 'El precio total a pagar es: ' + finalPrice;
            document.getElementById("result").innerHTML = output;
            setPrice('');
        }

    }



    return (
        <div className="App">
            <h1 className="title">Dollary</h1>
            <p id="dolarOficial"></p>
            <p>Switch to Pesos is: {isChecked ? "Activated" : "Deactivated"}</p>
            <label className="switch">
                <input id="switch" type="checkbox" checked={isChecked} onChange={(e) => { setChecked(e.target.checked) }} />
                <span className="slider round"></span>
            </label>
            <p>Seleccione el tipo de producto: </p>
            <form>
                <div className="radioBtns">
                    <input type="radio" id="digRadio" name="choice" checked={radio === "dig"} value="dig" onChange={(e) => { setRadio(e.target.value) }} />
                    <label>Digital</label>

                    <input type="radio" id="physRadio" name="choice" checked={radio === "phys"} value="phys" onChange={(e) => { setRadio(e.target.value) }} />
                    <label>Fisico</label>


                    <input type="radio" id="curRadio" name="choice" checked={radio === "cur"} value="cur" onChange={(e) => { setRadio(e.target.value) }} />
                    <label>Divisa</label>
                </div>
            </form>
            <label className="calcSector">
                <input type="number" className="calculate" placeholder="Ingrese el precio del producto..." value={price} onChange={(e) => setPrice(e.target.value)} onKeyPress={calculate} />
                <button className="calcBtn" id="calcBtn" type="submit" onClick={calculateNow}>Calcular</button>
                <p id="result"></p>
            </label>
        </div>
    );
}

export default App;