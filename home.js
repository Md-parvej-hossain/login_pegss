//add mone to the accunt
document
  .getElementById('btn_add_mone')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const inputAddMone = document.getElementById('input_add_mone').value;

    const inputPinNumber = document.getElementById('input_pin_number').value;

    if (inputPinNumber === '1234') {
      const avalavaleBalance =
        document.getElementById('avalavale_balance').innerText;

      const valanc = parseFloat(avalavaleBalance);
      const number = parseFloat(inputAddMone);

      const nuwBalance = valanc + number;
      document.getElementById('avalavale_balance').innerText = nuwBalance;
    } else {
      alert('Faild to add Money ! Plase Try agine.');
    }
  });
