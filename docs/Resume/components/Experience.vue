<script setup>
import "animate.css";
import { ref } from "vue";

const props = defineProps(["title", "time", "msg"]);
const a = ref("");
const click = () => {
  a.value = "animate__backInLeft";
};
</script>

<template>
  <div class="p-10 bg-blue-400">
    <!-- <p :class="a" class="animate__animated animate__backInLeft">123</p> -->
    <!-- <button @click="click">button</button> -->
    <!-- <div>
      <span class="font-medium text-xl">{{ props.title }}</span>
      <span class="font-normal">{{ props.time }}</span>
    </div>

    <div class="pt-4">
      <span class="">{{ props.msg }}</span>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.animate__animated.animate__backInLeft {
}
</style>
