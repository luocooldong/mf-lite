# mf-lite

🎉 优雅且实用的基于 **Webpack Module Federation** 的微前端解决方案。

[在线 DEMO](https://mf-lite-quick-start-base-app.vercel.app/) | [文档](https://ph3xmz5sya.feishu.cn/docs/doccnGEPiy8D3DJTZw6S05QJW4f)

## 介绍

**mf-lite** 是一个基于 **Webpack Module Federation** 的微前端解决方案，提供以下内容：

- 一个通过命令行快速创建基座应用或者微前端应用的**脚手架**（CLI）。[![npm Version](https://img.shields.io/npm/v/@attachments/assets.svg)](https://www.npmjs.com/package/@attachments/assets)

- 一个基于 node.js、方便独立开发微应用的 HTTP **请求代理工具**（proxy）。[![npm Version](https://img.shields.io/npm/v/@attachments/proxy.svg)](https://www.npmjs.com/package/@attachments/proxy)
- 一个核心工具库 [![npm Version](https://img.shields.io/npm/v/@attachments/module-federation-toolkits.svg)](https://www.npmjs.com/package/@attachments/module-federation-toolkits)，它可以：
    - 让微前端架构下的的**库共享**(share library)、甚至**模块共享**(share module)成为可能。
    - 自动生成、处理 webpack 的配置项目，减少用户心智负担。
    - 子应用支持自动生成**远程模块的类型定义**，从而无缝衔接 typescript。
- 一个专为微前端架构设计的**国际化库**（可选，需要额外引入）。

对于用户来说，唯一需要做的就是拉取模板、然后加上一些配置，剩下的和平常的开发流程别无二致。
  
## 特性

📦 **开箱即用**：你只需要执行几行命令即可拉取相应的模板代码并把项目跑起来，包括基座应用和微前端应用。对使用者来说无需处理 webpack、babel 的任何配置。

🔨 **独立开发与部署**：基于提供的**代理工具**，微应用开发者在单独开发微应用时，无需启动基座或者其它微应用，做到真正的**独立开发**、**独立部署**，同时开发时的 HMR（热更新）能力仍然支持。

🚀 **易于使用**：生成的项目遵循**最小可开发原则**，只保留微前端相关的核心依赖，其它第三方库的选型（如 ui 组件库、状态管理库）交由开发者全权管理，如果用户需要自定义内部配置也非常容易。

## 使用文档

[查看文档](https://ph3xmz5sya.feishu.cn/docs/doccnGEPiy8D3DJTZw6S05QJW4f)

## License

MIT [@yuzhanglong](https://github.com/yuzhanglong)
