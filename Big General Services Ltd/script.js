// New Menu Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navigation background control based on scroll position
function updateNavBackground() {
  const heroHeight = heroSection.offsetHeight;
  const scrollPosition = window.scrollY;
  
  // If we're in the hero section (home page)
  if (scrollPosition < heroHeight - 100) {
    header.classList.add('transparent');
    header.classList.remove('scrolled');
  } else {
    // If we've scrolled past the hero section
    header.classList.remove('transparent');
    header.classList.add('scrolled');
  }
}

// Listen for scroll events
window.addEventListener('scroll', updateNavBackground);

// Initial call to set the correct state on page load
updateNavBackground();

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Mobile video optimization
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function optimizeVideoForMobile() {
  const video = document.querySelector('.bg-video');
  if (video && isMobileDevice()) {
    // On mobile devices, we can pause the video to save bandwidth
    // Uncomment the next line if you want to pause the video on mobile
    // video.pause();
    
    // Alternatively, we can reduce the video quality by removing the source
    // This is a more aggressive approach for mobile optimization
    // if (window.innerWidth <= 768) {
    //   video.remove();
    // }
  }
}

// Run mobile optimization when the page loads
window.addEventListener('load', optimizeVideoForMobile);

// Also check on resize
window.addEventListener('resize', optimizeVideoForMobile);
