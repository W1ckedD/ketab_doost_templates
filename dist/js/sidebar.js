const btnOpen = document.querySelector('#btn-open');
const btnClose = document.querySelector('#btn-close');
const sidebar = document.querySelector('.sidebar');

btnOpen.addEventListener('click', function() {
  sidebar.classList.remove('hidden');
});

btnClose.addEventListener('click', function() {
  sidebar.classList.add('hidden');
});

sidebar.addEventListener('click', function() {
  sidebar.classList.add('hidden');
})