document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    const heroContent = document.getElementById('hero-content');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            heroContent.classList.add('loaded');
        }, 1000);
    });
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('data-scroll');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animation for sections
    const scrollElements = document.querySelectorAll('.section-header, .feature, .work, .testimonial');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Delayed animation for staggered elements
    const staggeredElements = document.querySelectorAll('[data-delay]');
    
    staggeredElements.forEach((el) => {
        el.style.transitionDelay = el.getAttribute('data-delay') + 'ms';
    });
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Handle initial animations after page load
    setTimeout(() => {
        handleScrollAnimation();
    }, 1500);
    
    // Newsletter form validation
    const emailInput = document.getElementById('newsletter-email');
    const subscribeBtn = document.getElementById('subscribe-btn');
    
    subscribeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (email === '') {
            alert('Please enter your email address.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulated form submission
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    // Featured works hover effect
    const works = document.querySelectorAll('.work');
    
    works.forEach(function(work) {
        work.addEventListener('mouseenter', function() {
            this.querySelector('.work-image img').style.transform = 'scale(1.1)';
        });
        
        work.addEventListener('mouseleave', function() {
            this.querySelector('.work-image img').style.transform = 'scale(1)';
        });
    });
    
    // Testimonial slider (if there were multiple testimonials)
    // For now, we'll just add a fade-in effect
    const testimonial = document.getElementById('testimonial');
    
    setTimeout(function() {
        if (elementInView(testimonial, 80)) {
            testimonial.classList.add('visible');
        }
    }, 2000);
});