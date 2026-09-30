# A02-01 · 异步、Promise 与模块

## 学习目标

- 掌握事件循环与异步模式
- 会写可取消/可重试的请求逻辑
- 会用 ESM 模块组织代码

## 一、事件循环（简化）

```text
同步代码 → 微任务（Promise.then/queueMicrotask）→ 渲染 → 宏任务（setTimeout/IO）
```

`async/await` 是 Promise 语法糖。

## 二、Promise

```javascript
async function load(id) {
  try {
    const res = await fetch(`/api/${id}`);
    if (!res.ok) throw new Error("bad");
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
}
```

## 三、并发控制

```javascript
const [a, b] = await Promise.all([fetchA(), fetchB()]);
const first = await Promise.race([fetchA(), timeout(3000)]);
const all = await Promise.allSettled([a, b]);
```

## 四、模块

```javascript
// math.js
export function add(a, b) { return a + b; }
// app.js
import { add } from "./math.js";
```

- 默认导出与命名导出
- 循环依赖要避免
- 动态 `import()` 做代码分割

## 五、取消与超时

```javascript
const ac = new AbortController();
setTimeout(() => ac.abort(), 5000);
await fetch(url, { signal: ac.signal });
```

## 动手练习

1. 带超时与重试的 fetch 封装
2. 串行处理 10 个任务（限制并发 3）
3. 用动态 import 懒加载组件

## 自测

1. 微任务与宏任务顺序？
2. `Promise.all` 与 `allSettled`？
3. 何时需要 AbortController？
