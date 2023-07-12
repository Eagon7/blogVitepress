<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from "vitepress/theme";

const coreMembers = [
  {
    avatar:
      "https://avatars.githubusercontent.com/u/114565953?s=400&u=49658cb415cf735888f74312f53412cfcd2e282b&v=4",
    name: "Eagon",
    // title: "刚入行的小白",
    links: [
      { icon: "github", link: "https://github.com/Eagon7" },
      { icon: "twitter", link: "" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/84073969?v=4",
    name: "冯凯超",
    // title: "http-typedi开源库作者",
    links: [
      { icon: "github", link: "https://fkc-alt.github.io/http-typedi/" },
      { icon: "twitter", link: "" },
    ],
  },

  {
    avatar: "https://avatars.githubusercontent.com/u/100754700?v=4",
    name: "左右",
    // title: "前端基石",
    links: [
      { icon: "github", link: "https://github.com/chen-d-yu" },
      { icon: "twitter", link: "" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/71485393?v=4",
    name: "LvJiaLei",
    title: "",
    links: [
      { icon: "github", link: "https://github.com/LvJiaLei666" },
      { icon: "twitter", link: "" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/47848731?v=4",
    name: "陈以诚🌰",
    title: "",
    links: [
      { icon: "github", link: "https://github.com/CnJingx" },
      { icon: "twitter", link: "" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/108822168?v=4",
    name: "木守",
    title: "",
    links: [
      { icon: "github", link: "https://github.com/taylorqqq" },
      { icon: "twitter", link: "" },
    ],
  },
];
const partners = [
  {
    avatar: "https://avatars.githubusercontent.com/u/37678684?v=4",
    name: "谭和",
    title: "",
    links: [
      { icon: "github", link: "https://github.com/Hongleilibs" },
      { icon: "twitter", link: "" },
    ],
  },
  // {
  //   avatar: "https://avatars.githubusercontent.com/u/108128626?v=4",
  //   name: "LibraCodeKingHyj",
  //   title: "",
  //   links: [
  //     { icon: "github", link: "https://github.com/LibraCodeKingHyj" },
  //     { icon: "twitter", link: "" },
  //   ],
  // },
  // https://github.com/LibraCodeKingHyj
];
</script>

<template>
  <div>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title>Our Team✨</template>
        <template #lead>HprismaD</template>
      </VPTeamPageTitle>
      <VPTeamMembers size="medium" :members="coreMembers" />
      <VPTeamPageSection>
        <template #title>后盾人</template>
        <template #lead>🪐感谢陪伴</template>
        <template #members>
          <VPTeamMembers size="small" :members="partners" />
        </template>
      </VPTeamPageSection>
    </VPTeamPage>
  </div>
</template>

<style></style>
