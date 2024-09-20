document
  .getElementById('btn_cash_out')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const inputCashOut = document.getElementById('input_cash_out').value;
    console.log(inputCashOut);
    const inputCashOutPinNumber = document.getElementById(
      'input_cash_out_pin_number'
    ).value;
    console.log(inputCashOutPinNumber);
    if (inputCashOutPinNumber === '1234') {
      const avalavaleBalance =
        document.getElementById('avalavale_balance').innerText;
      const valanc = parseFloat(avalavaleBalance);
      const number = parseFloat(inputCashOut);

      const nuwBalance = valanc - number;
      document.getElementById('avalavale_balance').innerText = nuwBalance;
    } else {
      alert('Faild to Cash Out ! Plase Try agine.');
    }
  });
