// AI SEO Agency - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('.nav-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('active');
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Animate on scroll
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .case-card, .testimonial-card, .pricing-card, .industry-card, .blog-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Counter animation
  let countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    document.querySelectorAll('[data-count]').forEach(counter => {
      const target = parseInt(counter.dataset.count);
      const suffix = counter.dataset.suffix || '';
      const prefix = counter.dataset.prefix || '';
      const duration = 2000;
      const start = 0;
      const step = (target - start) / (duration / 16);
      let current = start;

      const update = () => {
        current += step;
        if (current < target) {
          counter.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
          requestAnimationFrame(update);
        } else {
          counter.textContent = prefix + target.toLocaleString() + suffix;
        }
      };
      update();
    });
  }

  const counterSection = document.querySelector('.hero-stats');
  if (counterSection) {
    const rect = counterSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(animateCounters, 300);
    }
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    }, { threshold: 0.1 });
    counterObserver.observe(counterSection);
    // Fallback: ensure counters animate after 3 seconds if still not triggered
    setTimeout(() => { animateCounters(); }, 3000);
    // Also trigger on scroll
    window.addEventListener('scroll', function scrollCheck() {
      const r = counterSection.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        animateCounters();
        window.removeEventListener('scroll', scrollCheck);
      }
    });
  }

  // Form validation (skip forms with custom onsubmit handlers)
  document.querySelectorAll('form').forEach(form => {
    if (form.getAttribute('onsubmit')) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Thank You! We\'ll Contact You Soon.';
        btn.style.background = '#00C853';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks) navLinks.classList.remove('active');
      }
    });
  });

  // WhatsApp floating button (all pages)
  if (!document.querySelector('.wa-float-btn')) {
    const waBtn = document.createElement('a');
    waBtn.href = 'https://wa.me/18009710199?text=Hi%20AI%20Growth%20Labs!%20I%27m%20interested%20in%20your%20SEO%20services.';
    waBtn.target = '_blank';
    waBtn.rel = 'noopener';
    waBtn.className = 'wa-float-btn';
    waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    waBtn.style.cssText = 'position:fixed;bottom:90px;right:24px;z-index:9999;background:#25D366;color:#fff;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.3);text-decoration:none;transition:transform 0.2s;';
    waBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
    waBtn.addEventListener('mouseover', function() { this.style.transform = 'scale(1.1)'; });
    waBtn.addEventListener('mouseout', function() { this.style.transform = 'scale(1)'; });
    document.body.appendChild(waBtn);
  }
});
