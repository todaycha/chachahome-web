// ChaChahome - Main JS

// 이미 로그인된 사용자는 /app으로 바로 이동
fetch('/auth/session', { credentials: 'same-origin' })
  .then(function (res) {
    if (res.ok) window.location.replace('/app/');
  })
  .catch(function () {});

(function () {
  'use strict';

  // Mobile menu toggle
  var menuBtn = document.getElementById('mobileMenuBtn');
  var navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Navbar scroll effect
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = navbar ? navbar.offsetHeight : 0;
        var targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });
})();
