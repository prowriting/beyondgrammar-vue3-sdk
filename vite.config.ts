import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import {resolve} from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@prowriting/vue2-sdk",
      formats: ["es"],
      fileName: (format) => `pwa-vue2-sdk.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})


