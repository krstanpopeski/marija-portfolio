$(window).scroll(function () {
  $(".top").css("opacity", 1 - $(window).scrollTop() / 500);
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the HTML content with the current year
document.querySelector('.currentYear').textContent = `© ${currentYear}. All Rights Reserved to Marija Popeska.`;

const activePage = window.location.pathname;
console.log(activePage)
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active')
  }
})