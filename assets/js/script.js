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

    // Tool links stagger
    gsap.from('.tool-link', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#tools',
            start: 'top 80%'
        }
    });

    // Features stagger
    gsap.from('.feature', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#features',
            start: 'top 80%'
        }
    });
});

// Calculator function
function calculate() {
    const input = document.getElementById('calc-input').value;
    try {
        const result = eval(input);
        document.getElementById('calc-result').textContent = '结果: ' + result;
    } catch (e) {
        document.getElementById('calc-result').textContent = '错误: 无效表达式';
    }
}

// Search function
function search() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query + ' 科技'), '_blank');
    }
}