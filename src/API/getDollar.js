//import axios from "axios";

var ARS;
const URL = 'https://api.exchangerate-api.com/v4/latest/USD';

export const getDollar = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const price = data.rates.ARS;
    ARS = JSON.parse(price);
    parseFloat(ARS)
    return ARS;
} 