module.exports = {
  title: "Eagon Home",
  lastUpdated: true, // 文章最后更新时间
  description: "https://github.com/Eagon7/Nest-base-drill",
  themeConfig: {
    // lang: "en-US",
    // carbonAds: {
    //   code: "https://www.shengchanli.online/?contributor=1509583688302624",
    //   placement: "your-carbon-placement",
    // },
    siteTitle: "Eagon Ellington-", //左上角的名字
    logo: "/prisma.jpg", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav: [
      //右上角的导航栏
      {
        text: "前端", //导航标签的名字
        items: [
          //这种格式是有下拉菜单的版本
          { text: "基础", link: "/articles/basic/index" }, //text代表每一项的名字，link是连接的位置
          { text: "vue", link: "/articles/vue/first/index" },
        ],
      },
      {
        text: "后端",
        items: [{ text: "NestJs", link: "/articles/nestjs/index" }],
      },
      {
        text: "算法",
        items: [
          { text: "前置知识", link: "/articles/algorithm/base/index" },
          {
            text: "算法积累笔记",
            link: "/articles/algorithm/accumulate/index",
          },
        ],
      },
      {
        text: "设计模式",
        link: "/articles/designModel/index",
      },
      {
        text: "Nannan~",
        items: [{ text: "我们的故事", link: "/nannan/story/index" }],
      },
    ],
    sidebar: {
      "/articles/vue/": [
        {
          text: "设计理念", //标签名字
          collapsible: true, //是不是可以动态展开
          collapsed: true, // collapsed收缩
          items: [
            {
              text: "发布订阅者模式", //标签名字
              link: "/articles/vue/first/model", //链接
            },
          ],
        },
      ],
      "/articles/algorithm/base/index": [
        {
          text: "复杂度",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "时间复杂度",
              link: "/articles/algorithm/base/time",
            },
          ],
        },
      ],
      "/articles/other2": [
        {
          text: "侧边栏1", // 标签名字
          collapsible: true, // 是不是可以动态展开
          collapsed: true, // 默认是不是展开
          items: [
            {
              text: "index", //标签名字
              // link: "/articles/other",         //链接
            },
          ],
        },
      ],
      "/nannan/story": [
        {
          text: "侧边栏1",
          // collapsible: true,
          collapsed: true,
          items: [
            {
              text: "index",
            },
          ],
        },
      ],
      "/articles/nestjs/index": [
        {
          text: "设计思想",
          // collapsible: true,
          collapsed: true,
          items: [
            {
              text: "IoC DI",
              link: "/articles/nestjs/IOCDI/index",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/eagon7" }], //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
  },
  // clientAppEnhanceFiles: [
  //   // 导入插件样式
  //   "./theme/styles/index.css",
  // ],
};
