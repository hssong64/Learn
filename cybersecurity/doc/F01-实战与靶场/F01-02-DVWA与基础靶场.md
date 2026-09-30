# F01-02 · DVWA 与基础靶场练习路径

## 学习目标

- 按难度系统刷完 DVWA 主要模块
- 每个模块形成「原理—利用—修复」闭环笔记
- 为综合靶场打基础

## 一、DVWA 模块练习表

| 模块 | 对应知识点 | 最低目标 |
|------|------------|----------|
| Brute Force | 认证、爆破 | Low/High 思路 |
| Command Injection | 命令注入 | 理解过滤绕过 |
| CSRF | 跨站请求 | Token 与 SameSite |
| File Inclusion | LFI/RFI | 读文件、日志 |
| File Upload | 上传 | WebShell 靶场内 |
| Insecure CAPTCHA | 验证码逻辑 | 流程绕过 |
| SQL Injection | SQLi | 手工联合/盲注 |
| SQL Injection (Blind) | 盲注 | 布尔/时间 |
| Weak Session IDs | 会话 | 可预测性 |
| XSS (DOM/Reflected/Stored) | XSS | 三类各一例 |
| CSP Bypass | CSP | 理解策略 |
| JavaScript | 前端校验 | 绕过客户端校验 |

## 二、难度递进方法

```text
Low：看代码，理解漏洞
Medium：看过滤，思考绕过
High：更严格过滤，仍可能有逻辑问题
Impossible：学习正确修复写法
```

**必做**：每个模块至少看一遍 Impossible 的安全代码，对比自己写法。

## 三、SQL 注入示例路径（Less 风格）

1. `'` 观察报错
2. `--+` 注释闭合
3. `ORDER BY` 列数
4. `UNION SELECT` 找回显
5. `information_schema` 爆表
6. 盲注用 `SLEEP`/真假

## 四、XSS 示例路径

1. 输入 `<script>alert(1)</script>` 看是否弹
2. 换事件标签绕过简单过滤
3. 存储型看是否影响其他用户
4. 修复：输出编码 + CSP + HttpOnly

## 五、笔记模板（每模块一节）

```markdown
## 漏洞名
- 原理
- 代码位置/关键函数
- 利用步骤
- 绕过点
- 正确修复
- 我的疑问
```

## 六、练习纪律

- 只打本地/授权靶场
- 不把 payload 发到真实站点
- 每完成模块写笔记，不要只收藏 payload
- 用 Git 管理你的学习笔记（本仓库 doc/ 即可）

## 七、完成标准

- [ ] DVWA 主要模块 Low/High 思路可复述
- [ ] Impossible 修复要点能说出
- [ ] 至少 3 篇「原理+修复」笔记
- [ ] 能不用工具、纯手工打完一个 SQLi + 一个 XSS

## 动手练习

1. 按表刷 DVWA 并计时
2. 选 2 个模块写完整笔记
3. 给 Impossible 版本做代码走读

## 自测

1. High 难度仍可能有什么问题？
2. 为什么必须看 Impossible 修复？
3. 手工与 SQLMap 学习阶段如何分配？
