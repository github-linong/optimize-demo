# optimize-demo
optimize-demo。 项目优化实战

项目采用 lerna 、 yarn 、 webpack@4 、vue-cli@4

```bash
# node -v # v14.17.4

# npm -v  # 6.14.14

# yarn -v  # 1.22.11

# lerna -v # 4.0.0
```
## lerna

```bash
# 初始化 lerna
# npx lerna init

# 安装依赖
# lerna bootstrap

# 添加依赖
# lerna add
```


## packages 项目介绍
- crypto-js 项目组。这里被我发现是因为发现了好几个 bn.js
    - crypto-js@4.1.0 不支持 `import { MD5 } from 'crypto-js/md5.js';` 按需
    - crypto-js@4.1.1 支持 `import { MD5 } from 'crypto-js/md5.js';` 按需
- axios 项目组。 理解为使用对应版本的 axios。比如说统一的 request 处理、消息中心、配置中心等服务，内部依赖 axios。
    axios-1.js 为内部调用 axios。（想象中：无法被优化。但是并没有用，还是依赖 sideEffects ）
    axios-2.js 为内部不调用 axios。（想象中：可以被优化。 ）
    axios-3.js 为内部使用 ui 组件，自带错误提示功能。
- tree-shaking-demo1 中可以发现，还是依赖 sideEffects 项目才可以被摇树（axios-24 配置了 sideEffects 所以优化了， axios-23 没有配置 sideEffects 所有没有优化）。
- optimize-demo2 中可以发现，我们居然有 4 个 axios，他们有可能是不同功能点的功能（比如说你 API 请求的、全局消息推送的、上报反馈模块的），这个时候我们肯定是不需要这么多相同功能的 axios。
- ui-import-demo3 项目组，我们可以看使用 UI 库会引入的问题。比如说可以发现 ui 全量按需问题。    
    - ui-import-demo3 项目我们是直接使用了全量库。
    - ui-import-demo3-component 这个地方我们使用了按需引入。（如果项目打包你发现按需引入没有生效，这是因为没有正确配置 babel plugins component。）
    - 这里我们考虑一个场景，项目使用全量库，但是部分依赖使用的是按需，会怎么样？
- compressed 压缩测试组
    - a.js 可以看到是一个 4.6M 的 js 文件。使用 `tar -zcvf a.js.tar.gz a.js` 压缩，我们可以看到文件会变得非常小。（相同的内容压缩更高）
    - 图片测试组（图片大小（文件大小） vs 图片大小（图片宽高））
        png 纯色文件会非常小，比 jpg 小很多。
        bmp 纯色和多色文件大小一致。（100 * 100 * 3 = 29KB 左右）
        jpg 多色文件会比 png 小一些。
        - [一张图片仅1M左右，但可以直接让浏览器卡死、CPU拉满，想深入了解原因](https://segmentfault.com/q/1010000041337045?utm_source=sf-homepage)

- v-show vs v-if
- vue-cli 版本统一
- ui commonjs 打包问题

## 总结
### 分析手段
1. Chrome DevTools Lighthouse
2. Chrome DevTools Network
3. `yarn build --report`
4. Chrome DevTools Performance
### 解决方法
1. 消除相同依赖