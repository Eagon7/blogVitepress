---
layout: home

hero:
  name: Eagon
  text: stay in touch with the code
  tagline: Lorem ipsum...

  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress

---
<script setup>
import home from './.vitepress/components/home.vue'
</script>

<home />

<style lang="scss">
@import './index.scss';
@import './.vitepress/theme/custom.scss';
</style>
