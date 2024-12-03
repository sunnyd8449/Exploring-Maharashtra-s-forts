// Select the track and buttons
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const images = Array.from(track.children);

// Set the current index of the carousel
let currentIndex = 0;

// Function to set the position of each image
const setSlidePosition = () => {
    const slideWidth = images[0].getBoundingClientRect().width;  // Get the width of the first image
    images.forEach((slide, index) => {
        slide.style.left = `${index * slideWidth}px`;  // Position each image side by side
    });
};

// Function to move to the correct slide
const moveToSlide = (currentIndex) => {
    const slideWidth = images[0].getBoundingClientRect().width;  // Get the width of the first image
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;  // Slide the carousel left/right
};

// Event listener for the "next" button
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {  // Check if we are not at the last image
        currentIndex++;  // Move to the next image
        moveToSlide(currentIndex);  // Update the slide position
    }
});

// Event listener for the "prev" button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {  // Check if we are not at the first image
        currentIndex--;  // Move to the previous image
        moveToSlide(currentIndex);  // Update the slide position
    }
});

// On window load, set the initial positions and move to the first slide
window.addEventListener('load', () => {
    setSlidePosition();  // Position the images side by side
    moveToSlide(currentIndex);  // Show the first image
});
