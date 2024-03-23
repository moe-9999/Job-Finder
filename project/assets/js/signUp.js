const hidePasswordBtn = document.getElementById('hidePassword');
const openEyeSVG = document.getElementById('openEye');
const closedEyeSVG = document.getElementById('closedEye');
const password = document.getElementById('password');

hidePasswordBtn.addEventListener('click', () => {
  if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text');
    closedEyeSVG.style.display = 'block';
    openEyeSVG.style.display = 'none';
  } else {
    password.setAttribute('type', 'password');
    closedEyeSVG.style.display = 'none';
    openEyeSVG.style.display = 'block';
  }
});
