document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('currencyForm');
    const resultDiv = document.getElementById('result');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'MXN'];

    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrency.appendChild(optionTo);
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await response.json();

        const rate = data.rates[to];
        const convertedAmount = (amount * rate).toFixed(2);

        resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    });
});
