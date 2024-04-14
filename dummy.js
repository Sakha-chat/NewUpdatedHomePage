function change(item){
    const buttons = document.querySelectorAll('.btm-nav-icon');
    buttons.forEach(function(obj){
      obj.classList.remove("btm-nav-active");
    });
    item.classList.add("btm-nav-active");
  }


//   btm
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.custom-slider-track');
  let autoSlideInterval;
  const slide = () => {
      const slideWidth = track.querySelector('.custom-slider-card').offsetWidth;
      track.style.transform = `translateX(-${slideWidth}px)`;

      setTimeout(() => {
          const firstCard = track.querySelector('.custom-slider-card');
          track.appendChild(firstCard.cloneNode(true));
          track.removeChild(firstCard);
          track.style.transition = 'none';
          track.style.transform = 'translateX(0)';
          setTimeout(() => {
              track.style.transition = 'transform 0.5s ease';
          });
      }, 500);
  };

  autoSlideInterval = setInterval(slide, 3000); // Adjust time for slide speed

  track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  track.addEventListener('mouseleave', () => autoSlideInterval = setInterval(slide, 3000));
});
