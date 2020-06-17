

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


const slideshow = document.querySelector(".slide-wrap-left");
activateSlideShow(slideshow,'.slide-entry-left')

const slideshowRight = document.querySelector(".slide-wrap-right");
activateSlideShow(slideshowRight,'.slide-entry-right')