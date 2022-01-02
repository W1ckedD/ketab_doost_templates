const btnToggle = document.querySelector('#btn-toggle');
const sidebar = document.querySelector('.sidebar');

btnToggle.addEventListener('click', function() {
  sidebar.classList.toggle('hidden');
});

sidebar.addEventListener('click', function() {
  sidebar.classList.add('hidden');
})