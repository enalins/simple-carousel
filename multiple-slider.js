const sliderInit = (sliderContainer) => {
  let scroller = sliderContainer.querySelector('.listScroller');
  let slides = scroller.querySelector('.listItem');
  let prev = sliderContainer.querySelector('.prev');
  let next = sliderContainer.querySelector('.next');

  let slideIndex = 1;

  function showSlides(n) {
    //prevent trying to reach a slide that does not exist
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
  
    //handle the actual carousel
    scroller.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  }

  prev.addEventListener('click', function(e){ showSlides(slideIndex -= 1) })
  next.addEventListener('click', function(e){ showSlides(slideIndex += 1) })
}

const lists = document.querySelectorAll('.listContainer');

for(let i=0; i < lists.length; i++){
  sliderInit(lists[i])
}