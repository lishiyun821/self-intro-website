import './style.css'
import { gsap } from 'gsap'

document.querySelector('#app').innerHTML = `
  <div class="intro">
    <h1 class="name">你好，我是小云云！</h1>
    <p class="description">欢迎来到我的自我介绍网站。这里是关于我的故事和兴趣。</p>
    <div class="sections">
      <section class="about">
        <h2>关于我</h2>
        <p>我热爱编程和设计，喜欢创造有趣的东西。</p>
      </section>
      <section class="skills">
        <h2>技能</h2>
        <ul>
          <li>HTML/CSS/JS</li>
          <li>React/Vue</li>
          <li>Python</li>
        </ul>
      </section>
      <section class="contact">
        <h2>联系我</h2>
        <p>Email: example@example.com</p>
      </section>
    </div>
  </div>
`

// GSAP Animations
const tl = gsap.timeline()

// Set initial states
gsap.set('.intro', { opacity: 0, y: 50 })
gsap.set('.name', { opacity: 0, y: 30, scale: 0.8 })
gsap.set('.description', { opacity: 0, y: 20 })
gsap.set('.sections section', { opacity: 0, x: -100, rotationY: 15 })
gsap.set('.sections h2', { opacity: 0, x: -30 })
gsap.set('.sections p, .sections li', { opacity: 0, x: 30 })

// Animate sequence
tl.to('.intro', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
  .to('.name', { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }, '-=0.5')
  .to('.description', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
  .to('.sections section', { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: 'power2.out', stagger: 0.2 }, '-=0.5')
  .to('.sections h2', { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, '-=0.8')
  .to('.sections p, .sections li', { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }, '-=0.6')

// Hover animations
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('mouseenter', () => {
    gsap.to(section, { y: -10, scale: 1.05, duration: 0.3, ease: 'power2.out' })
  })
  section.addEventListener('mouseleave', () => {
    gsap.to(section, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' })
  })
})

document.querySelectorAll('li').forEach(li => {
  li.addEventListener('mouseenter', () => {
    gsap.to(li, { x: 10, duration: 0.2, ease: 'power2.out' })
  })
  li.addEventListener('mouseleave', () => {
    gsap.to(li, { x: 0, duration: 0.2, ease: 'power2.out' })
  })
})