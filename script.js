document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. MOBILE MENU TOGGLE
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-item');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    // Close menu when clicking links
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  // ==========================================
  // 2. THEME TOGGLE & DARK MODE
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'system') {
      const systemTheme = getSystemTheme();
      metaColorScheme.content = 'light dark';
    } else {
      metaColorScheme.content = theme;
    }
  }
  // Initial load
  let savedTheme = localStorage.getItem('color-scheme') || 'system';
  applyTheme(savedTheme);
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      let newTheme;

      if (currentTheme === 'system') {
        newTheme = getSystemTheme() === 'dark' ? 'light' : 'dark';
      } else {
        newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      }

      localStorage.setItem('color-scheme', newTheme);
      applyTheme(newTheme);
    });
  }
  // Listen for OS preference adjustments at runtime
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const currentSaved = localStorage.getItem('color-scheme');
    if (!currentSaved || currentSaved === 'system') {
      applyTheme('system');
    }
  });
  // ==========================================
  // 3. PROJECT FILTERING SYSTEM
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Manage active classes
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const filterValue = button.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          // Show matching cards with animated transition
          card.style.display = 'flex';
          // Force layout reflow
          void card.offsetWidth;
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        } else {
          // Hide non-matching cards
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';
          // Delay display setting to allow fade-out transitions
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
  // ==========================================
  // 4. PROGRESSIVE SCROLL ANIMATION FALLBACK
  // ==========================================
  const hasScrollDrivenAnimations = CSS.supports(
    '(animation-timeline: view()) and (animation-range: entry)',
  );

  if (!hasScrollDrivenAnimations) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once animated, we don't need to observe it again
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => {
      scrollObserver.observe(el);
    });
  }
  // ==========================================
  // 5. CONTACT FORM VALIDATION & SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formToast = document.getElementById('form-toast');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous error messages
      const errors = contactForm.querySelectorAll('.error-msg');
      errors.forEach((err) => (err.textContent = ''));

      const inputs = contactForm.querySelectorAll('input, textarea');
      inputs.forEach((input) => input.classList.remove('invalid'));
      // Validate inputs
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      let isValid = true;
      // Name Validation
      if (!nameInput.value.trim()) {
        showError('name', 'Name is required');
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
      }
      // Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        showError('email', 'Email is required');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
      }
      // Message Validation
      if (!messageInput.value.trim()) {
        showError('message', 'Message is required');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
      }
      if (!isValid) return;
      // Mock Submission Action
      setSubmittingState(true);
      setTimeout(() => {
        setSubmittingState(false);
        showToast('success', 'Message sent successfully! I will get back to you soon.');
        contactForm.reset();
      }, 1500);
    });
    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorSpan = document.getElementById(`${fieldId}-error`);
      if (field && errorSpan) {
        field.classList.add('invalid');
        errorSpan.textContent = message;
      }
    }
    function setSubmittingState(isSubmitting) {
      if (isSubmitting) {
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
      } else {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';
        submitBtn.style.opacity = '1';
      }
    }
    function showToast(type, message) {
      formToast.className = `form-toast ${type}`;
      formToast.textContent = message;
      formToast.setAttribute('aria-hidden', 'false');

      setTimeout(() => {
        formToast.style.opacity = '0';
        formToast.style.transform = 'translateY(5px)';
        setTimeout(() => {
          formToast.className = 'form-toast';
          formToast.style.opacity = '';
          formToast.style.transform = '';
          formToast.setAttribute('aria-hidden', 'true');
        }, 300);
      }, 5000);
    }
  }
  // ==========================================
  // 6. SCROLL HIGHLIGHT NAVIGATION LINKS
  // ==========================================
  const sections = document.querySelectorAll('section[id]');

  function highlightNavigation() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // Offset for sticky header
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', highlightNavigation);
  highlightNavigation(); // Initial highlight on load
});
