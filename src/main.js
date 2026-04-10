import './style.css'
import { gsap } from 'gsap'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <div class="hero">
      <h1 class="title">你好，我是小云云</h1>
      <p class="subtitle">这是我的自我介绍网站，欢迎来访。</p>
    </div>
    <div class="cards">
      <div class="card">
        <h2>关于我</h2>
        <p>我热爱设计与编程，喜欢把创意变成漂亮又流畅的页面。</p>
      </div>
      <div class="card">
        <h2>技能</h2>
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>GSAP 动画</li>
          <li>响应式页面设计</li>
        </ul>
      </div>
      <div class="card">
        <h2>联系</h2>
        <p>Email: example@example.com</p>
      </div>
    </div>
  </div>
`

gsap.set('.hero', { opacity: 0, y: 40 })
gsap.set('.title', { opacity: 0, y: 20 })
gsap.set('.subtitle', { opacity: 0, y: 20 })
gsap.set('.card', { opacity: 0, y: 40, scale: 0.96 })

const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } })

timeline
  .to('.hero', { opacity: 1, y: 0 })
  .to('.title', { opacity: 1, y: 0 }, '-=0.4')
  .to('.subtitle', { opacity: 1, y: 0 }, '-=0.5')
  .to('.card', { opacity: 1, y: 0, scale: 1, stagger: 0.15 }, '-=0.4')

const cards = document.querySelectorAll('.card')
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { y: -8, scale: 1.02, boxShadow: '0 20px 60px rgba(0,0,0,0.18)', duration: 0.35, ease: 'power3.out' })
  })
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { y: 0, scale: 1, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', duration: 0.35, ease: 'power3.out' })
  })
})
