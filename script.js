document.addEventListener('DOMContentLoaded', () => {
    
    // Custom Cursor Logic
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    const hoverTargets = document.querySelectorAll('.hover-target, a, button');

    if (window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows exactly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hover');
            });
            target.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hover');
            });
        });
    } else {
        // Disable custom cursor on mobile
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto';
        hoverTargets.forEach(t => t.style.cursor = 'pointer');
    }

    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-fade');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let isMenuOpen = false;

    mobileToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.add('active');
            mobileToggle.innerText = 'Close';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('active');
            mobileToggle.innerText = 'Menu';
            document.body.style.overflow = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.remove('active');
            mobileToggle.innerText = 'Menu';
            document.body.style.overflow = 'auto';
        });
    });
});
