<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import "animate.css";

const circle: Ref<HTMLElement | null> = ref(null);

onMounted(() => {});
</script>

<template>
  <div>
    <div
      ref="circle"
      class="cursor-pointer animate__animated animate__pulse duration-100 animate__infinite bg-gradient-to-r from-indigo-300 w-14 h-14 rounded-full flex justify-center items-center"
    >
      <div>✨</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breathing-effect {
  animation: breathing 3s ease-in-out infinite;
}
</style>
