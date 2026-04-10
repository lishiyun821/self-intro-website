document.documentElement.classList.add('js');

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const filterButtons = document.querySelectorAll('.filter-button');
const projectList = document.getElementById('projectList');
const cardActions = document.querySelectorAll('.card-action');
const scrollTopButton = document.getElementById('scrollTopButton');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalActionButton = document.getElementById('modalActionButton');
const aboutContact = document.getElementById('aboutContact');
const aboutProjects = document.getElementById('aboutProjects');
const techTrend = document.getElementById('techTrend');
const currentYear = document.getElementById('currentYear');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal-card').forEach((card) => observer.observe(card));

const savedTheme = localStorage.getItem('techCreatorTheme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function updateThemeButton(isLight) {
  themeToggle.textContent = isLight ? '☀️' : '🌙';
}

if (savedTheme === 'light') {
  body.classList.add('light-mode');
  updateThemeButton(true);
} else if (savedTheme === 'dark') {
  updateThemeButton(false);
} else {
  if (!prefersDark) {
    body.classList.add('light-mode');
    updateThemeButton(true);
  }
}

themeToggle.addEventListener('click', () => {
  const isLight = body.classList.toggle('light-mode');
  updateThemeButton(isLight);
  localStorage.setItem('techCreatorTheme', isLight ? 'light' : 'dark');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    const cards = projectList.querySelectorAll('.project-card');

    cards.forEach((card) => {
      const category = card.dataset.category;
      const isVisible = filter === 'all' || category === filter;
      card.style.display = isVisible ? 'grid' : 'none';
    });
  });
});

function openModal(title, detail, url) {
  modalTitle.textContent = title;
  modalContent.textContent = detail;
  modalActionButton.dataset.url = url || '';
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  modalActionButton.dataset.url = '';
}

cardActions.forEach((button) => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    const detail = button.dataset.detail;
    const url = button.dataset.url;
    openModal(title, detail, url);
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

modalActionButton.addEventListener('click', () => {
  const url = modalActionButton.dataset.url;
  if (url && url.startsWith('#')) {
    document.querySelector(url).scrollIntoView({ behavior: 'smooth' });
  } else if (url && url.startsWith('mailto:')) {
    window.location.href = url;
  } else if (url) {
    window.open(url, '_blank');
  }
  closeModal();
});

if (aboutContact) {
  aboutContact.addEventListener('click', () => {
    alert('我的邮件：xyyxyy0824@qq.com');
  });
}

if (aboutProjects) {
  aboutProjects.addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});

const headerLinks = document.querySelectorAll('.hero-nav a');
headerLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 360) {
    scrollTopButton.classList.add('visible');
  } else {
    scrollTopButton.classList.remove('visible');
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (techTrend) {
  let trendValue = 78;
  techTrend.textContent = `${trendValue}%`;
  setInterval(() => {
    trendValue = 68 + Math.floor(Math.random() * 25);
    techTrend.textContent = `${trendValue}%`;
  }, 4200);
}
