/*
 * @Author: rk
 * @Description:
 * @Date: 2024-08-06 14:49:09
 * @LastEditors: rk
 * @LastEditTime: 2024-08-06 15:07:50
 */
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

export default {
  input: "lib/main.js", // 输入文件
  output: [
    {
      file: "dist/cjs/index.cjs",
      format: "cjs", // 输出 CommonJS 格式
      exports: "named",
    },
    {
      file: "dist/esm/index.js",
      format: "esm", // 输出 ES Modules 格式
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // 帮助 Rollup 找到模块
    commonjs(), // 将 CommonJS 模块转换为 ES 模块
    terser(), // 压缩输出的代码
    // 使用 Babel 插件转换空值合并运算符
    babel({
      exclude: "node_modules/**", // 排除 node_modules 中的文件
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
    }),
  ],
};
