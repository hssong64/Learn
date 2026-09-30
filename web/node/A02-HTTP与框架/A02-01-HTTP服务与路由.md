# A02-01 · HTTP 服务与路由框架

## 学习目标

- 会写 REST API
- 掌握中间件模型
- 会错误处理与状态码设计

## 一、原生 http

```javascript
import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ ok: true }));
});
server.listen(3000);
```

## 二、Express 风格

```javascript
import express from "express";

const app = express();
app.use(express.json());

app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await service.get(req.params.id);
    if (!user) return res.status(404).json({ error: "not found" });
    res.json(user);
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: "internal" });
});
```

## 三、中间件

```text
请求 → 日志 → 鉴权 → 路由 → 业务 → 响应
```

- `app.use` 顺序很重要
- 鉴权在业务前
- 静态资源单独挂载

## 四、REST 与状态码

| 场景 | 码 |
|------|----|
| 成功 | 200/201 |
| 参数错 | 400 |
| 未认证 | 401 |
| 无权限 | 403 |
| 不存在 | 404 |
| 服务错 | 500 |

## 五、校验

- 入参 schema 校验（zod）
- 出参字段最小化
- 不回显内部错误详情

## 动手练习

1. 用户 CRUD API
2. 全局错误中间件
3. 请求日志中间件

## 自测

1. 401 与 403？
2. 中间件顺序错误后果？
3. 为何要 schema 校验？
