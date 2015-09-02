
# reactUI

base on amazeui-react &amp;&amp; react-ui

基于 amazeui-react 修改，结合 react-ui 以及 yahoo-purecss 样式调整。

进度：

- 先会使用，熟练使用，并能改进地使用 20150930
- 进行拆分，融入 pure 基础样式，使之更轻量化 201510
- 结合模块细分思想，把 样式和 UI 组件结合，最小粒度的引入开发项目 201510-11
- 使用主题扩展增强各种功能

# Amaze UI React

[Amaze UI][amazeui] components build with React.

基于 [Amaze UI][amazeui] 和 React.js 封装的 Web 组件库。

[![Bower version](https://img.shields.io/bower/v/amazeui-react.svg?style=flat-square)](https://github.com/amazeui/amazeui-react)
[![NPM version](https://img.shields.io/npm/v/amazeui-react.svg?style=flat-square)](https://www.npmjs.com/package/amazeui-react)
[![Build Status](https://img.shields.io/travis/amazeui/amazeui-react.svg?style=flat-square)](https://travis-ci.org/amazeui/amazeui-react)
[![Dependency Status](https://img.shields.io/david/amazeui/amazeui-react.svg?style=flat-square)](https://david-dm.org/amazeui/amazeui-react)
[![devDependency Status](https://img.shields.io/david/dev/amazeui/amazeui-react.svg?style=flat-square)](https://david-dm.org/amazeui/amazeui-react#info=devDependencies)

**规范及工具**：

- [React 编码规范](https://github.com/Minwe/style-guide/blob/master/React.js.md)
- [React JetBrains 编辑器 Live Templates](https://github.com/Minwe/jetbrains-react)

## 开发及构建

### 目录结构

```
├── package.json
├── dist          # 构建目录
├── docs          # 文档及测试示例
├── src           # 组件源文件（JSX）
└── utils
```

### 开发及文档

```
gulp dev
```

### 构建

```
gulp build
```

[amazeui]: https://github.com/allmobilize/amazeui
