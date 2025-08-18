import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Happy-LLM Learning",
  description: "Happy-LLM 学习",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Tasks",
        items: [
          { text: "Task01", link: "/task/task01" },
          { text: "Task02", link: "/task/task02" },
        ],
      },
    ],

    socialLinks: [],
  },
});
