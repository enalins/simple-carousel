// SLIDER OPTIONS
const options = {
  dots: true,
  autoplay: {
    play: false,
    time: 3 //seconds
  },
  arrows: true,
  drag: false
}

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
if(options.arrows){
  prev.innerHTML = '&#10094;';
  next.innerHTML = '&#10095;';
  prev.classList.add('prev');
  next.classList.add('next');
  prev.addEventListener('click', function(e){ showSlides(slideIndex -= 1) });
  next.addEventListener('click', function(e){ showSlides(slideIndex += 1) });
  
  myCarousel.appendChild(prev);
  myCarousel.appendChild(next);
}


//DOTS CONFIG
if(options.dots){
  let dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container')
  myCarousel.appendChild(dotContainer);

  function createDots (slidesNum){
    //create the dots
    for(i=1; i <= slidesNum; i++){
      let dot = document.createElement('button');
      dot.setAttribute('type', 'button');
      dot.setAttribute('data-key', i);
      dot.classList.add('dot');
  
      dots.push(dot);
      dotContainer.appendChild(dot);
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

  createDots(slides.length)
} 


//SLIDES CONFIG
function showSlides(n) {
  //prevent trying to reach a slide that does not exist
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  if(options.dots){
    //handle dots
    myCarousel.querySelector('.dot-container').querySelector('.dot.active').classList.remove('active');
    dots.map(function(dot){
      if(dot.getAttribute('data-key') == slideIndex){
        dot.classList.add('active')
      }
    })
  }

  //handle the actual carousel
  scroller.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}
showSlides(slideIndex);


//SLIDES AUTOPLAY
if(options.autoplay.play){
  window.onload = () => {
    function autoplay(){
      showSlides(slideIndex += 1);

      setTimeout(() => {
        autoplay()
      }, options.autoplay.time * 1000);
    }

    setTimeout(() => {
      autoplay()
    }, options.autoplay.time * 1000);
  }
}