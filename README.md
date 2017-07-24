## 正在开发中……

# ua-detect
browser or webview useragent detect

## 目标
面向国内前端技术人员，提供top 100的app ua 检测。不得不说有些app是不会提供的，如XX输入法等这些不会显示web页面的app。
欢迎大家踊跃贡献ua和帮忙测试。

## 使用
```shell
npm install ua-detect
```

```javascript
import { browser } from 'ua-detect';

console.log(browser);
```
获得类似如下结果
```javascript
{
  "isChrome": true,
  "version": "59.0.3071.115",
  "versionNumber": 59,
  "win": true,
  "isDesktop": true,
  "isWebkit": true,
  "name": "Chrome",
  "platform": "win"
}
```

## 如何提需求（如果不包含你想要的检测）
请提供完整的userAgent字符串并说明收录的理由。
理由举例：
- XX app是top 100 app
- XX系列app提供了公共的XX能力，他们的ua中有公共的XX特征
- XX app虽然不是top 100 app，但是它展示web页面的量达到xxx万

## 提bug
请提供完整的userAgent字符串并说明bug原因。

## 贡献代码
1. clone代码
2. coding
3. npm test
