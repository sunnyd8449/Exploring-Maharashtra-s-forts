const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const images = Array.from(track.children);

let currentIndex = 0;

// Set the position of each image
const setSlidePosition = () => {
    const slideWidth = images[0].getBoundingClientRect().width;
    images.forEach((slide, index) => {
        slide.style.left = `${index * slideWidth}px`; 
    });
};

// Update carousel position
const moveToSlide = (currentIndex) => {
    const amountToMove = images[0].getBoundingClientRect().width * currentIndex;
    track.style.transform = `translateX(-${amountToMove}px)`; // Corrected the string formatting
};

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        moveToSlide(currentIndex);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(currentIndex);
    }
});

window.addEventListener('load', () => {
    setSlidePosition();
    moveToSlide(currentIndex);
});


