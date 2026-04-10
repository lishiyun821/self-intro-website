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
    if (input.replace(/\s/g, '') === '114514+7891') {
        showHiddenSpace();
        return;
    }
    try {
        const result = eval(input);
        document.getElementById('calc-result').textContent = '结果: ' + result;
    } catch (e) {
        document.getElementById('calc-result').textContent = '错误: 无效表达式';
    }
}

function showHiddenSpace() {
    // 创建隐藏空间遮罩
    let hiddenDiv = document.getElementById('hidden-space');
    if (!hiddenDiv) {
        hiddenDiv = document.createElement('div');
        hiddenDiv.id = 'hidden-space';
        hiddenDiv.style.position = 'fixed';
        hiddenDiv.style.top = '0';
        hiddenDiv.style.left = '0';
        hiddenDiv.style.width = '100vw';
        hiddenDiv.style.height = '100vh';
        hiddenDiv.style.background = 'url(assets/images/hidden.jpg) center center / cover no-repeat';
        hiddenDiv.style.zIndex = '9999';
        hiddenDiv.style.display = 'flex';
        hiddenDiv.style.alignItems = 'center';
        hiddenDiv.style.justifyContent = 'center';
        hiddenDiv.innerHTML = '<h1 style="color:white;font-size:3rem;text-shadow:2px 2px 8px #000;">欢迎来到隐藏空间</h1><button id="close-hidden" style="position:absolute;top:30px;right:30px;font-size:1.5rem;padding:0.5rem 1rem;">关闭</button>';
        document.body.appendChild(hiddenDiv);
        document.getElementById('close-hidden').onclick = function() {
            hiddenDiv.remove();
        };
    }
}

// Search function
function search() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query + ' 科技'), '_blank');
    }
}