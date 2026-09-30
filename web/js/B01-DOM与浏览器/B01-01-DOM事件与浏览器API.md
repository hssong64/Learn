# B01-01 · DOM、事件与浏览器 API

## 学习目标

- 高效操作 DOM
- 理解事件模型与性能
- 会用存储、路由、观察者 API

## 一、DOM 操作

```javascript
const el = document.querySelector("#app");
el.textContent = user.name; // 比 innerHTML 安全
document.createDocumentFragment();
```

- 批量写、减少回流
- 事件委托

```javascript
list.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-id]");
  if (!btn) return;
  onSelect(btn.dataset.id);
});
```

## 二、事件模型

捕获 → 目标 → 冒泡；`preventDefault` / `stopPropagation` 要慎用。

## 三、存储

| API | 用途 | 风险 |
|-----|------|------|
| cookie | 会话、HttpOnly 更安全 | CSRF/XSS |
| localStorage | 非敏感偏好 | XSS 可读 |
| sessionStorage | 会话级 | 同上 |
| IndexedDB | 结构化大数据 | 复杂度高 |

敏感 token 优先 HttpOnly Cookie。

## 四、常用观察 API

- `IntersectionObserver`：懒加载、曝光
- `ResizeObserver`：布局测量
- `MutationObserver`：DOM 变更
- `matchMedia`：主题/断点

## 五、与安全

- `innerHTML`、`document.write` 是 XSS 汇点
- `postMessage` 校验 origin
- 见 `cybersecurity/doc/C01-03`

## 动手练习

1. 虚拟滚动或长列表优化
2. 事件委托实现行内操作
3. IntersectionObserver 图片懒加载

## 自测

1. 为何 textContent 更安全？
2. 事件委托条件？
3. localStorage 放 token 风险？
