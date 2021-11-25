//FIRST SETUP
let myCarousel = document.querySelector('#myCarousel')

let prev = document.createElement('a');
let next = document.createElement('a');
prev.innerHTML = '&#10094;';
next.innerHTML = '&#10095;';
prev.classList.add('prev');
next.classList.add('next');
myCarousel.appendChild(prev);
myCarousel.appendChild(next);

//ACTIONS FOR THE ARROWS
prev.addEventListener('click', function(e){ plusSlides(-1) });
next.addEventListener('click', function(e){ plusSlides(1) });

//FIRST TIME THE PAGE LOAD IT WILL SET UP TO SHOW THE FIRST SLIDER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var scroller = myCarousel.querySelector('.scroller');
  var slides = scroller.querySelectorAll('.mySlide');

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  scroller.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}