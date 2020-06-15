function smoothScroll(target, duration) {
var target = document.querySelector(target);
var targetPosition = target.getBoundingClientRect().top; 
var startPosition = window.pageYOffset;
var distance = targetPosition - startPosition;
var startTime = null;

  function animationScroll(currentTime){
    if(startTime===null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration)  requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d){
    t /= d /2;
    if(t < 1) return c / 2 * t * t +b;
    t--;
    return -c / 2 *(t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animationScroll);
}
 
var downProductSection = document.querySelector('.down-section');
var downGallery = document.querySelector('.down-gallery');

downProductSection.addEventListener('click', function(){
  smoothScroll('.product-section', 1000);

});
downGallery.addEventListener('click', function(){
  smoothScroll('.gallery', 1000);
});