# B01-02 · HTTP 与 HTTPS

## 学习目标

- 完整掌握请求/响应、方法、状态码、常用头
- 理解 Cookie / Session / Token 在链路中的位置
- 理解 TLS 解决了什么、没解决什么

## 一、HTTP 报文结构

```http
GET /api/user?id=1 HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Cookie: session=abc123
Authorization: Bearer eyJhbGciOi...
Accept: application/json

（请求体，POST/PUT 时）
```

```http
HTTP/1.1 200 OK
Set-Cookie: session=xyz; HttpOnly; Secure; SameSite=Lax
Content-Type: application/json
X-Frame-Options: DENY

{"id":1,"name":"demo"}
```

## 二、方法与语义

| 方法 | 语义 | 是否有副作用 | 安全注意 |
|------|------|--------------|----------|
| GET | 获取 | 应无 | 不要用 GET 改状态 |
| POST | 创建/提交 | 有 | 需 CSRF 防护（视场景） |
| PUT/PATCH | 更新 | 有 | 越权改资源常见 |
| DELETE | 删除 | 有 | 垂直/水平越权高发 |
| OPTIONS | 预检/能力探测 | 无 | CORS 预检 |
| TRACE/DEBUG | 调试 | — | 生产应关闭（XST 等） |

## 三、状态码速查

| 类 | 含义 | 例子 |
|----|------|------|
| 1xx | 信息 | 100 Continue |
| 2xx | 成功 | 200 OK、201 Created |
| 3xx | 重定向 | 301/302、304 Not Modified |
| 4xx | 客户端错误 | 400、401 未认证、403 无权限、404 |
| 5xx | 服务端错误 | 500 内部错误、502/503 网关/不可用 |

**安全含义**：401 vs 403 要分清；500 可能泄露堆栈；302 可能导致开放重定向。

## 四、安全相关响应头

| 头 | 作用 |
|----|------|
| `Set-Cookie: HttpOnly` | JS 读不到 Cookie，缓解 XSS 偷 Cookie |
| `Set-Cookie: Secure` | 仅 HTTPS 发送 |
| `SameSite=Lax/Strict/None` | 缓解 CSRF / 跨站发送 Cookie |
| `Content-Security-Policy` | 限制脚本/资源来源，XSS 纵深防御 |
| `X-Frame-Options` / `frame-ancestors` | 防点击劫持 |
| `X-Content-Type-Options: nosniff` | 防 MIME 嗅探 |
| `Strict-Transport-Security` | 强制 HTTPS |
| `Access-Control-Allow-Origin` | CORS 白名单，配错会跨域偷数据 |

## 五、Cookie / Session / Token

```text
登录成功
  → 服务端 Set-Cookie: session_id（或返回 JWT）
  → 浏览器后续请求自动带 Cookie
  → 服务端查 Session 或验签 Token
```

| 方案 | 存放 | 特点 | 风险 |
|------|------|------|------|
| Session | 服务端 + Cookie ID | 服务端可控、易失效 | 固定会话、CSRF |
| JWT | 客户端存 | 无状态、可扩展 | 难主动失效、密钥泄露、`alg:none` |
| localStorage | 浏览器 | 前端方便 | XSS 可直接读，风险高于 HttpOnly Cookie |

**前端原则**：能用 `HttpOnly` Cookie 就尽量不用 localStorage 放敏感 token。

## 六、HTTPS / TLS 速记

- **解决**：窃听、篡改、伪造服务器（证书）
- **不解决**：应用逻辑漏洞、XSS、SQL 注入、服务端越权
- 握手核心：证书校验 → 密钥协商 → 对称加密通信
- 证书错误不要「点继续」，中间人常从证书异常露出马脚

## 动手练习

1. DevTools Network 里找一条登录请求，标出 Cookie 与 Authorization
2. 用 `curl -v` 看响应头，检查安全头是否缺失
3. 对你的靶场开启/关闭 HSTS，观察行为差异

## 自测

1. 为什么 GET 不应有副作用？
2. `HttpOnly` 能防 CSRF 吗？
3. HTTPS 站点还有可能被 SQL 注入吗？
