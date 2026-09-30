# E01-02 · Burp Suite

## 学习目标

- 会用 Proxy 拦截、改包、重放
- 会用 Repeater/Intruder/Decoder/Comparer
- 形成以 Burp 为核心的 Web 测试工作流

## 一、核心组件

| 模块 | 用途 |
|------|------|
| Proxy | 浏览器流量抓取与拦截 |
| Repeater | 手工改包重放（最有用） |
| Intruder | 自动化爆破/fuzz（控制速率） |
| Decoder | 编解码（URL/Base64/HTML/Hex） |
| Comparer | 响应对比 |
| Logger/History | 流量检索 |
| Scanner（Pro） | 自动扫描；有误报需人工验证 |
| Extensions | 插件扩展 |

## 二、代理配置

1. Burp 默认 `127.0.0.1:8080`
2. 浏览器/系统代理指向 Burp
3. 安装 CA 证书以解 HTTPS
4. 练习完恢复系统代理与证书策略

**注意**：生产测试要走授权；证书安全与隐私敏感。

## 三、拦截与改包

- Intercept on/off
- 改参数、头、方法、路径
- 发送到 Repeater 反复试
- 对登录、越权、注入点优先改包

常见练习：
```http
GET /api/user?id=1  →  id=2（水平越权）
Cookie: role=user   →  role=admin（若客户端可控，通常应服务端存）
```

## 四、Repeater 工作流

1. 发现可疑请求 → Send to Repeater
2. 改 payload
3. 对比响应长度/状态/时间
4. 记录有效 payload 到笔记

这是**手工测试主战场**。

## 五、Intruder

| 攻击类型 | 用途 |
|----------|------|
| Sniper | 单点字典 |
| Battering ram | 同一 payload 多处 |
| Pitchfork | 多字典并行 |
| Cluster bomb | 笛卡尔积爆破 |

**纪律**：
- 授权范围内
- 线程调低、加延时
- 账号锁定策略风险
- 不要用大字典打生产

## 六、Decoder

- URL 编码/解码（`%3Cscript%3E`）
- Base64（JWT）
- HTML 实体
- Hash

## 七、常用快捷与技巧

- `Ctrl+R` 发到 Repeater
- 搜索 History 过滤 MIME/状态码
- 对比登录前后的 Cookie
- 用 Match/Replace 规则自动改 UA 等
- 项目文件保存，便于复盘与报告

## 八、与其他工具配合

```text
浏览器看业务 → Burp 改包验证 → SQLMap 对注入点自动化 → 报告模板
```

## 动手练习

1. 拦截并修改 DVWA 请求
2. Repeater 完成一次 XSS/SQLi 手工验证
3. Intruder 小字典爆破本地测试账号（测完清理）

## 自测

1. 为什么 Repeater 比 Scanner 更常用于逻辑漏洞？
2. 安装 Burp CA 的风险与注意点？
3. Intruder 线程过高可能造成什么？
