/*
 * @Author: rk
 * @Description:
 * @Date: 2024-07-31 11:17:59
 * @LastEditors: rk
 * @LastEditTime: 2024-08-06 11:39:00
 */
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.js",
      name: "FastcodeTest",
      fileName: (format) => `fastcodeTest.${format}.js`,
      formats: ["es", "umd"],
    },
    // target: "es2015",
  },
});
