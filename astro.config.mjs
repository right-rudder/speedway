import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.speedwayft.com/",
  integrations: [
    tailwind(),
    partytown(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes("/admin") && !page.includes("/draft"),
      customPages: [
        "https://www.speedwayft.com/fast-track-program",
        "https://www.speedwayft.com/contact",
        "https://www.speedwayft.com/about",
      ],
      serialize: (item) => {
        if (item.url.includes("/fast-track-program")) {
          item.priority = 0.9;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
    react(),
  ],
  redirects: {
    "/fast-track": "/fast-track-program",
  },
});
