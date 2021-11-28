//FIRST SETUP
const
  myCarousel = document.querySelector('#myCarousel'),
  scroller = myCarousel.querySelector('.scroller'),
  slides = scroller.querySelectorAll('.mySlide');

let 
  slideIndex = 1,
  dots = [],
  prev = document.createElement('a'),
  next = document.createElement('a');


// ARROWS CONFIG
prev.innerHTML = '&#10094;';
next.innerHTML = '&#10095;';
prev.classList.add('prev');
next.classList.add('next');
prev.addEventListener('click', function(e){ showSlides(slideIndex -= 1) });
next.addEventListener('click', function(e){ showSlides(slideIndex += 1) });


//MAIN FUNCTIONS
function createDots (slidesNum){
  //create the dots
  for(i=1; i <= slidesNum; i++){
    let dot = document.createElement('button');
    dot.setAttribute('type', 'button');
    dot.setAttribute('data-key', i);
    dot.classList.add('dot');

    dots.push(dot);
    myCarousel.querySelector('.dot-container').appendChild(dot);
  }

  //the first dot active
  dots[0].classList.add('active');

  //create a on click function to change the slide
  dots.map(function(dot){
    dot.addEventListener('click', (e) => {
      let key = dot.getAttribute('data-key');
      showSlides(slideIndex = key);
    })
  })
}

function showSlides(n) {
  //prevent trying to reach a slide that does not exist
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //handle dots
  myCarousel.querySelector('.dot-container').querySelector('.dot.active').classList.remove('active');
  dots.map(function(dot){
    if(dot.getAttribute('data-key') == slideIndex){
      dot.classList.add('active')
    }
  })

  //handle the actual carousel
  scroller.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}


//FIRST TIME THE PAGE LOAD IT WILL SET UP TO SHOW THE FIRST SLIDER
myCarousel.appendChild(prev);
myCarousel.appendChild(next);
createDots(slides.length)
showSlides(slideIndex);