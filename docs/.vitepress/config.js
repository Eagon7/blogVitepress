module.exports = {
  title: "Eagon Home",
  description: "https://github.com/Eagon7/Nest-base-drill",
  themeConfig: {
    // lang: "en-US",
    siteTitle: "Eagon", //左上角的
    logo: "/logo.jpg", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    nav: [
      //右上角的导航栏
      {
        text: "前端", //导航标签的名字
        items: [
          //这种格式是有下拉菜单的版本
          { text: "基础", link: "/articles/basic/index" }, //text代表每一项的名字，link是连接的位置
          { text: "first", link: "/articles/other/first/index" },
        ],
      },
      { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" }, //这种是没有下拉菜单的版本
      { text: "项目", link: "/intent/" },
      {
        text: "Nannan~",
        items: [{ text: "我们的故事", link: "/nannan/story/index" }],
      },
    ],
    sidebar: {
      "/articles/other": [
        {
          text: "侧边栏1", //标签名字
          collapsible: true, //是不是可以动态展开
          collapsed: true, //默认是不是展开
          items: [
            //孩子
            {
              text: "index", //标签名字
              // link: "/articles/other",         //链接
            },
          ],
        },
      ],
      "/articles/other2": [
        {
          text: "侧边栏1", //标签名字
          collapsible: true, //是不是可以动态展开
          collapsed: true, //默认是不是展开
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
    },
    socialLinks: [{ icon: "github", link: "https://github.com/eagon7" }], //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
  },
  // clientAppEnhanceFiles: [
  //   // 导入插件样式
  //   "./theme/styles/index.css",
  // ],
};
