// sesre : form submit reloding the pafe

document
  .getElementById('button_login')
  .addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Logine Button Click');
    const phoneNumber = document.getElementById('phone_number').value;

    const pinDigit = document.getElementById('pin_digit').value;
    console.log(phoneNumber, pinDigit);
    if (phoneNumber === '5' && pinDigit === '1234') {
      console.log('You are Log In');
      window.location.href = '/home.html';
    } else {
      alert('Wrong phone or Pin');
    }
  });
