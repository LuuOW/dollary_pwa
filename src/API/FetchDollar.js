
const URL = 'https://api.exchangerate-api.com/v4/latest/USD';

async function FetchDollar() {
    const response = await fetch(URL);
    const data = await response.json();
    const value = data.rates.ARS;
    console.log(value);
}
FetchDollar();

export default FetchDollar;



