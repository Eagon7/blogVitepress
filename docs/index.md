---
layout: home

hero:
  name: Eagon
  text: stay in touch with the code
  tagline: Lorem ipsum...

  actions:
    - theme: brand
      text: Get Started
      link: /articles/basic/
    - theme: alt
      text: View on Resume
      link: /Resume/

---
<script setup>
import home from './.vitepress/components/home.vue'
import githubCalendat from './.vitepress/components/githubCalendar/index.vue'
import team from './team/components/index.vue'
</script>
<home />
<githubCalendat/>
<team/>

<style lang="scss">

@import './index.scss';
@import './.vitepress/theme/custom.scss';
@import './public/font.scss'
</style>
