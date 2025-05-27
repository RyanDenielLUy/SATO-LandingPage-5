// Scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-section').forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});

// Trigger scroll event once on load
window.dispatchEvent(new Event('scroll'));
