console.log('Started request...');

const fetchPromise = fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log('Received response:', response);

    const jsonPromise = response.json();

    jsonPromise.then(({ USDBRL }) => {
        console.log('Response is transformed into an object:', USDBRL);
        const resultado = USDBRL.high;
        const resultadoFormatado = parseFloat(resultado).toFixed(2);
        console.log(resultadoFormatado)

    });
});
