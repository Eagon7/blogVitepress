<script setup>
import { ref } from "vue";
import home from "./.vitepress/components/home.vue";
import githubCalendat from "./.vitepress/components/githubCalendar/index.vue";
import team from "./team/components/index.vue";
import randomTalo from "./Resume/components/random/randomTalo.vue";
import resume from "./Resume/components/resume/index.vue";

const talo = ref(false);
const taloVisible = () => {
  talo.value = true;
};
const closeTalo = () => {
  talo.value = false;
};
</script>

<template>
  <div>
    <home />
    <githubCalendat />
    <team />
    <randomTalo class="fixed z-50 right-5 top-1" @click="taloVisible" />
    <resume :talo="talo" @closeTalo="closeTalo" v-if="talo" />
  </div>
</template>

<style lang="scss">
@import "./index.scss";
@import "./.vitepress/theme/custom.scss";
@import "./public/font.scss";
</style>
