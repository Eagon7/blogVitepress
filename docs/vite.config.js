import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";

//default options
var searchOptions = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};

export default defineConfig({
  plugins: [SearchPlugin(searchOptions)],
});
