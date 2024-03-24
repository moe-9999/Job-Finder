// Initialize AOS after setting the attributes
document.addEventListener('DOMContentLoaded', () => {
  const navLinkEls = document.querySelectorAll('.nav__link');
  const windowPathName = window.location.pathname;

  navLinkEls.forEach((navLinkEl) => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if (
      windowPathName === navLinkPathname ||
      (windowPathName === '/index.html' && navLinkPathname === '/')
    ) {
      navLinkEl.classList.add('active');
    }
  });

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

  // ANIMATE ON SCROLL JS

  const reviewWrapperEls = document.querySelectorAll('.review-wrapper');

  reviewWrapperEls.forEach((e) => {
    e.setAttribute('data-aos', 'reviewWrapperEl');
  });

  AOS.init();

  //FORM

  const form = document.querySelector('form');
  const inputs = document.querySelectorAll(':is(input, textarea)');

  form.addEventListener('click', (event) => {
    inputs.forEach((input) => {
      input.classList.add('invalid');
    });
  });

  //MENU BTN

  const menuBtn = document.querySelectorAll('.menu_btn');
  const mobileNav = document.querySelector('.mobile_nav');
  const mobileNavLinks = document.querySelectorAll(
    '.mobile_nav .container .mobile_nav-ul li > a'
  );

  menuBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'grid';
        document.body.style.overflow = 'hidden';
      } else {
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
      mobileNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileNav.style.display = 'none';
          document.body.style.overflow = 'auto';
        });
      });
      console.log('clicked');
    });
  });
});
