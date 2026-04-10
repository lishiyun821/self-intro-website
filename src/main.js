import './style.css'

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