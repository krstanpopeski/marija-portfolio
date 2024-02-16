$(window).scroll(function () {
  $(".top").css("opacity", 1 - $(window).scrollTop() / 500);
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the HTML content with the current year
document.querySelector('.currentYear').textContent = `© ${currentYear}. All Rights Reserved to Marija Popeska.`;

const fullscreenableContainers = document.querySelectorAll('.fullscreen-container');

// Function to toggle fullscreen mode
function toggleFullscreen(element) {
  element.classList.toggle('fullscreen');
}

// Add click event listener to each fullscreenable container
fullscreenableContainers.forEach(function (container) {
  container.addEventListener('click', function () {
    toggleFullscreen(this);
  });
});