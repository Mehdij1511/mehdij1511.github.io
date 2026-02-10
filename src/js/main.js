// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close hamburger menu if open
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.querySelector('.nav-links');
            if (hamburger && navLinks && hamburger.getAttribute('aria-expanded') === 'true') {
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            }
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            hamburger.setAttribute('aria-expanded', 'false');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
}

// Scroll animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cinematic smooth scroll stage removed

// Welcome overlay animation
const welcomeOverlay = document.getElementById('welcome-overlay');
if (welcomeOverlay) {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('welcome-active');
    window.addEventListener('load', () => {
        setTimeout(() => {
            welcomeOverlay.classList.add('hide');
            document.body.style.overflow = '';
            document.body.classList.remove('welcome-active');
            document.body.classList.add('welcome-complete');
        }, 1900);
    });

    welcomeOverlay.addEventListener('animationend', (event) => {
        if (event.target === welcomeOverlay) {
            welcomeOverlay.remove();
        }
    });
}

// Navbar progress bar
const navProgress = document.querySelector('.nav-progress');
const progressSections = Array.from(document.querySelectorAll('section'));

function updateNavProgress() {
    if (!navProgress || progressSections.length === 0) {
        return;
    }

    const start = progressSections[0].offsetTop;
    const lastSection = progressSections[progressSections.length - 1];
    const end = lastSection.offsetTop + lastSection.offsetHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const total = Math.max(end - start, 1);
    const progress = Math.min(Math.max((scrollPosition - start) / total, 0), 1);

    navProgress.style.setProperty('--progress', `${(progress * 100).toFixed(2)}%`);
}

window.addEventListener('scroll', updateNavProgress, { passive: true });
window.addEventListener('resize', updateNavProgress);
updateNavProgress();

// Cinematic scroll parallax
const heroImage = document.querySelector('.hero-image');
const heroContent = document.querySelector('.hero-content');
const heroSignature = document.querySelector('.signature');
let parallaxTicking = false;

function updateParallax() {
    if (prefersReducedMotion.matches) {
        return;
    }

    const scrollY = window.scrollY;
    const isMobile = window.innerWidth < 768;

    if (heroContent) {
        heroContent.classList.add('scroll-parallax');
        const contentOffset = Math.min(scrollY * 0.08, 80);
        heroContent.style.transform = `translate3d(0, ${contentOffset}px, 0)`;
    }

    if (heroSignature) {
        heroSignature.classList.add('scroll-parallax');
        const signatureOffset = Math.min(scrollY * 0.12, 120);
        heroSignature.style.transform = `translate3d(0, ${signatureOffset}px, 0)`;
    }

    if (heroImage) {
        heroImage.classList.add('scroll-parallax');
        if (isMobile) {
            heroImage.style.transform = '';
        } else {
            const imageOffset = Math.min(scrollY * 0.14, 140);
            heroImage.style.transform = `translate3d(0, calc(-50% + ${imageOffset}px), 0)`;
        }
    }
}

function onParallaxScroll() {
    if (parallaxTicking) {
        return;
    }

    parallaxTicking = true;
    window.requestAnimationFrame(() => {
        updateParallax();
        parallaxTicking = false;
    });
}

if (!prefersReducedMotion.matches) {
    window.addEventListener('scroll', onParallaxScroll, { passive: true });
    window.addEventListener('resize', updateParallax);
    updateParallax();
}
