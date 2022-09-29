import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@composables": path.resolve(__dirname, "./src/composables"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@plugins": path.resolve(__dirname, "./src/plugins"),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "./src/styles/_variables.sass",
    }),
  ],
});
