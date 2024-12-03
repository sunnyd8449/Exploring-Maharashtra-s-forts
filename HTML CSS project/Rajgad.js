const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const images = Array.from(track.children);

let currentIndex = 0;

// Set each image position
const setSlidePosition = () => {
    const slideWidth = images[0].getBoundingClientRect().width;  // Get the width of the first image
    images.forEach((slide, index) => {
        slide.style.left = `${index * slideWidth}px`;  // Set the left position of each image
    });
};

// Update carousel position
const moveToSlide = (currentIndex) => {
    const slideWidth = images[0].getBoundingClientRect().width;  // Get the width of the first image
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;  // Move the carousel to the right position
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

// On load
window.addEventListener('load', () => {
    setSlidePosition();
    moveToSlide(currentIndex);
});
