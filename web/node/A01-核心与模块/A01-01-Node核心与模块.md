# A01-01 · Node 核心与模块

## 学习目标

- 理解 Node 事件循环与非阻塞 IO
- 会用 ESM/CJS 与 npm
- 会文件、进程、环境变量

## 一、运行时

```text
V8 + libuv
单线程 JS + 线程池（IO）+ 事件循环
```

适合 IO 密集；CPU 密集要拆 worker。

## 二、模块

```javascript
// ESM（推荐）
import { readFile } from "node:fs/promises";
export function hi() { return "hi"; }

// CJS（遗留）
const fs = require("fs");
```

`package.json` 中 `"type": "module"` 启用 ESM。

## 三、常用内建

| 模块 | 用途 |
|------|------|
| `node:fs` | 文件 |
| `node:path` | 路径 |
| `node:http` | 服务 |
| `node:crypto` | 随机、哈希 |
| `node:process` | env、argv、exit |

## 四、环境与配置

```javascript
const port = Number(process.env.PORT || 3000);
```

- `.env` 不提交仓库
- 区分 dev/test/prod
- 配置校验（zod/joi）

## 五、脚本

```json
{
  "scripts": {
    "dev": "node --watch src/main.js",
    "test": "vitest run"
  }
}
```

## 动手练习

1. 用 fs 批量处理文件
2. 读取 env 并校验必填项
3. 对比同步/异步读文件性能

## 自测

1. 为何 IO 非阻塞？
2. ESM 与 CJS 差异？
3. 为什么不能把 .env 提交？
