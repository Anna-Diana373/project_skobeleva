
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
  
    setTimeout(() => {
      preloader.remove();
    }, 500);
  });
  document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header');
  var headerHeight = header.offsetHeight + 40;
  document.body.style.paddingTop = headerHeight + 'px';
});
