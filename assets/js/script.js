document.addEventListener('DOMContentLoaded', () => {
    // Hero animation
    gsap.from('.hero-content h1', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.cta-button', { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Skill cards stagger
    gsap.from('.skill-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%'
        }
    });

    // Project cards stagger
    gsap.from('.project-card', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%'
        }
    });
});