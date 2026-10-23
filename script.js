/* ==========================================================================
   MARKET MINT MEDIA — Modern Digital Growth Studio
   Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // 3. Scroll Reveal Animation using IntersectionObserver
  const revealElements = document.querySelectorAll(
    '.section-header, .manifesto-card, .service-card, .portfolio-card, .instagram-post-card, .founder-card, .process-step, .metric-card, .testimonial-card'
  );

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${ (index % 4) * 0.08 }s`;
    revealObserver.observe(el);
  });

  // 4. Contact Form Submission Handling
  const contactForm = document.getElementById('agencyContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      
      btn.disabled = true;
      btn.innerHTML = `SENDING...`;

      setTimeout(() => {
        btn.style.backgroundColor = '#69D6A3';
        btn.style.color = '#123B2B';
        btn.innerHTML = `✓ ENQUIRY SENT SUCCESSFULLY`;

        contactForm.reset();

        setTimeout(() => {
          btn.disabled = false;
          btn.style.backgroundColor = '';
          btn.style.color = '';
          btn.innerHTML = originalText;
        }, 4000);
      }, 1000);
    });
  }

  // 5. Infinite Marquee Duplicate Track for Seamless Loop
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack) {
    const clone = marqueeTrack.cloneNode(true);
    marqueeTrack.parentElement.appendChild(clone);
  }
});
