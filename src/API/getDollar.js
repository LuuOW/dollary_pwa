
const URL = 'https://api.exchangerate-api.com/v4/latest/USD';


export const getDollar = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const { rates } = data;
    var { ARS } = rates;
    ARS = JSON.parse(ARS);
    ARS = parseFloat(ARS);
    if (!isNaN(ARS)) {
        console.log('ARS IS A NUMBER¡¡¡');
    }
    return ARS;
} 