document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const slideWidth = slides[0].offsetWidth;
    let currentPosition = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(${-currentPosition}px)`;
    }

    function slideNext() {
        if (currentPosition < slideWidth * (slides.length - 1)) {
            currentPosition += slideWidth;
        } else {
            currentPosition = 0;
        }
        updateSliderPosition();
    }

    function slidePrev() {
        if (currentPosition > 0) {
            currentPosition -= slideWidth;
        } else {
            currentPosition = slideWidth * (slides.length - 1);
        }
        updateSliderPosition();
    }

    nextButton.addEventListener('click', slideNext);
    prevButton.addEventListener('click', slidePrev);

    setInterval(slideNext, 5000);
});