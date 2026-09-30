# C02-04 · CSRF 与 SSRF

## 学习目标

- 分清 CSRF（借用户身份发请求）与 SSRF（借服务器身份发请求）
- 会验证与修复两类问题
- 理解与浏览器/网络架构的关系

## 一、CSRF（跨站请求伪造）

### 原理

用户已登录 `bank.com`，在 `evil.com` 被诱导触发对 `bank.com` 的请求；浏览器**自动带上 Cookie**，服务端以为是用户本人。

```html
<!-- evil.com 页面 -->
<form action="https://bank.com/transfer" method="POST" id="f">
  <input name="to" value="attacker" />
  <input name="amount" value="10000" />
</form>
<script>document.getElementById('f').submit()</script>
```

### 条件

1. 有状态认证（Cookie）
2. 请求可被第三方站点发起
3. 服务端只靠 Cookie 判身份、无额外校验

### 防御

| 方法 | 说明 |
|------|------|
| **Anti-CSRF Token** | 表单/头里放不可预测 token，服务端校验 |
| **SameSite Cookie** | `Lax/Strict`，现代浏览器强助力 |
| 关键操作二次验证 | 密码、验证码、短信 |
| 自定义头 | 如 `X-Requested-With`（配合 CORS 不放行） |
| 避免 GET 改状态 | |

**验证**：从第三方域提交请求，看是否成功；检查 Token/SameSite。

## 二、SSRF（服务端请求伪造）

### 原理

应用根据用户输入**在服务器端发起请求**，攻击者指向内网/云元数据/本地文件。

```text
用户提交 url=http://127.0.0.1:8080/admin
  → 服务器去请求
  → 访问到仅内网可达的服务
```

### 典型目标

| 目标 | 危害 |
|------|------|
| `127.0.0.1` / 内网 IP | 绕过边界打内网 |
| 云元数据 `169.254.169.254` | 偷临时凭据（云上高危） |
| Redis/MySQL 等 | 未授权利用 |
| 文件协议 `file://` | 读本地文件（若支持） |
| 出网 DNS/HTTP | 外带、协作平台探测 |

### 绕过技巧（原理）

- 十进制/十六进制 IP、`[::1]`、十进制 IPv6
- `@`、重定向后跳内网
- 短链、DNS rebinding
- 协议走私：`gopher://`、`dict://`（视组件）

### 防御

1. URL 白名单（协议、域名、端口）
2. 解析后校验最终 IP（防 DNS rebinding：请求时二次解析）
3. 禁止内网段与元数据地址
4. 禁用危险协议
5. 出网代理隔离、最小网络权限

## 三、CSRF vs SSRF 一句话对比

| | CSRF | SSRF |
|--|------|------|
| 谁发请求 | 受害者浏览器 | 目标服务器 |
| 身份 | 用户 Cookie | 服务器网络位置 |
| 危害方向 | 改用户数据 | 打内网/云/文件 |
| 核心修复 | Token + SameSite | 白名单 + 网络隔离 |

## 四、练习

1. DVWA CSRF；本地 demo：无 Token 被跨站提交
2. PortSwigger SSRF labs（实验环境）
3. 画图：CSRF 的三方关系（用户站、恶意站、浏览器）

## 自测

1. SameSite=Lax 是否能 100% 防 CSRF？
2. 为什么 SSRF 打云元数据很危险？
3. 只过滤 `127.0.0.1` 字符串够不够？
