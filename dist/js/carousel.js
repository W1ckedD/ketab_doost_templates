const carouselTrack = document.querySelector('.carousel-track');
const carouselNav = document.querySelector('.carousel-nav');
const slides = document.querySelectorAll('.carousel-slide');
const width = slides[0].getBoundingClientRect().width;
const nextBtn = document.querySelector('.carousel-btn-right');
const prevBtn = document.querySelector('.carousel-btn-left');

let current = 0;

let interval;

// Next and Previous Buttons
nextBtn.addEventListener('click', () => {
  goNext();
  clearInterval(interval);
  interval = setInterval(goNext, 6000);
});
prevBtn.addEventListener('click', () => {
  goPrevious();
  clearInterval(interval);
  interval = setInterval(goNext, 6000);
});

// Create Carousel Nav Items
slides.forEach((slide, index) => {
  slide.style.left = `${index * width}px`;
  const li = document.createElement('li');

  li.addEventListener('click', () => {
    current = index;
    if (current === index) {
      li.classList.add('current');
    }

    navigate(current);
    clearInterval(interval);
    interval = setInterval(goNext, 6000);
  });
  carouselNav.appendChild(li);
});

const carouselNavItems = document.querySelectorAll('.carousel-nav li');

// navigate the first time the screen loads
navigate(current);

function navigate(index) {
  carouselNavItems.forEach((item, i) => {
    item.classList.remove('current');
    if (current === i) {
      item.classList.add('current');
    }
  });
  carouselTrack.style.transform = `translateX(-${width * index}px)`;
}

function goNext() {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  navigate(current);
}

function goPrevious() {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  navigate(current);
}

// go next every 6 seconds
interval = setInterval(goNext, 6000);
