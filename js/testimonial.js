const track = document.querySelector('.testimonial-track');
const slides = Array.from(track.children);

// Clone first and last
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Add clones
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll('.testimonial');
let index = 1;
const total = allSlides.length;
const slideWidth = 100; // in percent

track.style.transform = `translateX(-${index * slideWidth}%)`;

function moveToSlide(newIndex) {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${newIndex * slideWidth}%)`;
  index = newIndex;
}

// Handle wraparound after transition
track.addEventListener('transitionend', () => {
  if (index === total - 1) {
    // Jump from cloned first to real first
    track.style.transition = 'none';
    index = 1;
    track.style.transform = `translateX(-${index * slideWidth}%)`;
  } else if (index === 0) {
    // Jump from cloned last to real last
    track.style.transition = 'none';
    index = total - 2;
    track.style.transform = `translateX(-${index * slideWidth}%)`;
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (index < total - 1) {
    moveToSlide(index + 1);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (index > 0) {
    moveToSlide(index - 1);
  }
});
