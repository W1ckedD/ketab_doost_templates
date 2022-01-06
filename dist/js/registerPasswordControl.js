const emailInput = document.getElementsByName('email')[0];
const passwordInput = document.getElementsByName('password')[0];
const password2Input = document.getElementsByName('password2')[0];

emailInput.addEventListener('input', function (event) {
  console.log(event);
});
