const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let index = 0;
const images = slidesContainer.querySelectorAll('img');

function updateSlider() {
  if (!slider || !slidesContainer || images.length === 0) return;
  const slideWidth = slider.offsetWidth;
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((dot, i) => {
    dot.classList.toggle('indicator-active', i === index);
  });
}

if (prev && next) {
  prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    updateSlider();
  });

  next.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    updateSlider();
  });
}

window.addEventListener('resize', updateSlider);

// Inicializar
updateSlider();