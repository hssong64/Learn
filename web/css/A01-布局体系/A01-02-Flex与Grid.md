# A01-02 · Flex 与 Grid 布局

## 学习目标

- 熟练 Flex 一维布局
- 会用 Grid 做页面骨架
- 能在 DevTools 调试对齐问题

## 一、Flex

```css
.nav {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
.spacer { flex: 1; }
.item { flex: 0 0 auto; }
```

主轴 `justify-content`，交叉轴 `align-items`。

## 二、Grid

```css
.layout {
  display: grid;
  grid-template-columns: 240px 1fr 240px;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}
.span-2 { grid-column: span 2; }
@media (max-width: 800px) {
  .layout { grid-template-columns: 1fr; }
}
```

## 三、对比

| | Flex | Grid |
|--|------|------|
| 维度 | 主要一维 | 二维 |
| 内容驱动 | 强 | 可强 |
| 页面骨架 | 可用 | 首选 |
| 组件内布局 | 首选 | 可用 |

## 四、对齐速查

- 水平垂直居中：`display:grid; place-items:center`
- 等高卡片：Grid/Flex 拉伸
- 固定底栏：`min-height: 100dvh; grid-template-rows: auto 1fr auto`

## 动手练习

1. 实现圣杯/双栏布局
2. 卡片响应式 Grid
3. 用 DevTools 调 gap 与对齐

## 自测

1. `fr` 含义？
2. `gap` 与 margin 哪个更合适？
3. 何时 Flex 优于 Grid？
