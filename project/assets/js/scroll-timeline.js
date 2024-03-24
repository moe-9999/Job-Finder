const scrollTracker = document.querySelector('.scroll-timeline');
const header = document.getElementById('header');
let lastScrollTop = 0;

// Function to handle scroll event
function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Show/hide header based on scroll direction
  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Add scroll event listener to the window
window.addEventListener('scroll', handleScroll);

// Check if scroll tracker exists and animate it
if (scrollTracker) {
  const scrollTrackerTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
  });

  scrollTracker.animate(
    {
      transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
      duration: 1000,
      timeline: scrollTrackerTimeline,
    }
  );
}
