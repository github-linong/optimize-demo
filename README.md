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
    axios-1 为内部调用 axios。（无法被优化）
    axios-2 为内部不调用 axios。（可以被优化）

## 总结
### 分析手段
1. `yarn build --report`
### 解决方法
1. 消除相同依赖