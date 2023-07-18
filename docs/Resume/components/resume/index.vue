<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";
import { onBeforeUpdate, getCurrentInstance, watch, ref, onMounted } from "vue";

const props = defineProps(["title", "num", "content", "talo"]);
const card = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
const emits = defineEmits(["closeTalo"]);
const animationEnd = () => {
  if (content.value === null) return;
  content.value.style.transform = "translateY(0)";
  content.value.style.opacity = "1";
};

onMounted(() => {
  console.log("mount");
  VanillaTilt.init(card.value as any, {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 1,
  });
});
</script>

<template>
  <div class="Ibasic fixed top-0 right-0 z-50 bg-black/75">
    <div
      class="container animate__animated animate__fadeInRight"
      @animationend="animationEnd"
    >
      <div class="card relative" ref="card">
        <div
          class="cursor-pointer absolute top-3 right-3 text-white z-50"
          @click="emits('closeTalo')"
        ></div>
        <div class="content duration-100" ref="content">
          <h2>{{ props.num || "*" }}</h2>
          <h3 class="h-3">{{ props.title || "Hi~" }}</h3>
          <p class="pt-5 font-bold" style="font-family: mFont">
            {{
              props.content ||
              "If I never see you again, I wish you good morning, good afternoon, and good night"
            }}
          </p>
          <a href="#" @click="emits('closeTalo')">close</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("http://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
}
.container .card {
  background-image: url(../../../public/talo.png);
  /* 相对定位 */
  position: relative;
  width: 280px;
  height: 400px;
  background-color: rgb(82, 81, 81) !important;
  margin: 30px;
  border-radius: 15px;
  /* 阴影 */
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  /* 溢出隐藏 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* 背景模糊 */
  backdrop-filter: blur(5px);
}
.container .card .content {
  padding: 20px;
  text-align: center;
  /* 默认下移+隐藏 */
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}
.h-3 {
  font-family: mFont;
}
.container .card:hover .content {
  /* 鼠标移入，上移+显示 */
  // transform: translateY(0);
  // opacity: 1;
}
.container .card .content h2 {
  position: absolute;
  top: -80px;
  right: 25px;
  font-size: 128px;
  color: rgba(255, 255, 255, 0.05);
}
.container .card .content h3 {
  font-size: 28px;
  color: #ffffff;
}
.container .card .content p {
  font-size: 16px;
  color: #fff;
  font-weight: 300;
  margin: 10px 0 15px 0;
}
.container .card .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
/* 这里要让玻璃效果更加逼真，需要用到一个JS库：vanilla-tilt.js */

@font-face {
  font-family: mFont;
  src: url("../docs/public/Lucida Handwriting Italic.ttf");
}

.Ibasic {
  @apply flex justify-center w-screen  h-screen;
}
.Ipicture {
  @apply rounded-full w-40 h-40 bg-red-300;
}
.Ititle {
  @apply bg-green-300 pt-9 pb-3 pl-11 flex;
  .I-TITLE-left {
    @apply bg-blue-400 p-8 flex;
  }
}
</style>
