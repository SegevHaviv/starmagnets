function activateSlideShow(slideShowElemnt, slideEntryElementClassName){
       let slides = document.querySelectorAll(slideEntryElementClassName),
       slideCount = slides.length,
       currentSlide = 0;
      
      slides[0].classList.add(`${slideEntryElementClassName}:active`);
    
    function moveToSlide(n) {
      slides[currentSlide].className = slideEntryElementClassName.substring(1);
      currentSlide = (n+slideCount)%slideCount;
      slides[currentSlide].className = `${slideEntryElementClassName.substring(1)}:active`;
    };
    
    function nextSlide(){
      moveToSlide(currentSlide+1);
    };
    function prevSlide(){
      moveToSlide(currentSlide-1);
    };
    const slideHandlers = {
      nextSlide: function(element)  {
        document.querySelector(element).addEventListener("click", nextSlide);
      },
      prevSlide: function(element)  {
        document.querySelector(element).addEventListener("click", prevSlide);
      }
    };
    
    moveToSlide(0)
      setInterval(function(){
        nextSlide();
      },2000);
    }


  // if (window.matchMedia("(max-width: 800px)").matches) {      //return boolean, check for using the mq in the page, if we use it'll return true and the loop will start
  // const slideshowLeft = document.querySelector(".slide-wrap-left");
  // activateSlideShow(slideshowLeft,'.slide-entry-left')
  // } else  { //if the page doesnt use mq because witdh is less than 800px like desktop or ipads the 
    const slideshowRight = document.querySelector(".slide-wrap-right");
    activateSlideShow(slideshowRight,'.slide-entry-right');
    const slideshowLeft = document.querySelector(".slide-wrap-left");
    activateSlideShow(slideshowLeft,'.slide-entry-left');
  // }