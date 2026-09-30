# C02-01 · OWASP Top 10 总览

## 学习目标

- 建立 Web 漏洞分类地图
- 知道 OWASP Top 10 与 WSTG 的用途
- 为后续每个专题定学习锚点

## 一、OWASP Top 10（2021，考试/面试常提）

| 编号 | 类别 | 一句话 | 你的专题 |
|------|------|--------|----------|
| A01 | Broken Access Control | 权限控制失效（越权） | C02-05 |
| A02 | Cryptographic Failures | 加密/保护不当 | A01-03 / B01-02 |
| A03 | Injection | 注入（SQL、命令、XSS 也在广义） | C02-02/03 |
| A04 | Insecure Design | 不安全设计/业务逻辑 | C02-08 |
| A05 | Security Misconfiguration | 安全配置错误 | B02-03 |
| A06 | Vulnerable and Outdated Components | 老旧组件 | E01-03 / G01 |
| A07 | Identification and Authentication Failures | 身份认证失败 | C02-05 |
| A08 | Software and Data Integrity Failures | 完整性失败（反序列化、CI） | C02-07 |
| A09 | Security Logging and Monitoring Failures | 日志监控不足 | D01-05 |
| A10 | Server-Side Request Forgery | SSRF | C02-04 |

> XSS 在 2021 里并入 Injection 等类别讨论；学习时仍要单独吃透。

## 二、三大顶层心智模型

```text
1. 注入类：数据被当代码/命令执行
2. 越权类：身份对了，权限算错/没算
3. 设计类：流程本身可被绕过（改价、重放、平行）
```

## 三、学习顺序建议（不要按 Top10 顺序）

```text
配置错误与信息泄露（好建立信心）
  → XSS
    → SQL 注入
      → CSRF / 会话
        → 文件上传
          → 越权/逻辑
            → SSRF、XXE、反序列化
```

原因：从「看得到」到「要构造」，难度递进。

## 四、WSTG（Web Security Testing Guide）怎么用

OWASP WSTG 是**测试清单**：
- 信息收集
- 配置与部署管理
- 身份管理
- 授权
- 会话管理
- 输入验证
- 错误处理
- 密码学
- 业务逻辑
- 客户端

**用法**：做靶场/项目时按 WSTG 章节逐项勾，避免只会打点不会系统测。

## 五、漏洞证明与评级（概念）

| 项 | 说明 |
|----|------|
| 复现步骤 | 别人能按步骤跑通 |
| 影响 | 能造成什么（读数据/接管/宕机） |
| 影响面 | 用户数、数据敏感度、是否连锁 |
| 修复建议 | 具体可落地 |
| 常用参考 | CVSS 评分、业务定级 |

## 六、常见误区

1. 扫描器没有 = 没有漏洞（错）
2. 能弹窗 = 高危（要看上下文与影响）
3. 有 WAF = 免疫（错）
4. 只测 SQLi/XSS，不测越权和逻辑（错，业务漏洞常更高价值）
5. 报告只贴截图不写影响（推不动修复）

## 动手练习

1. 把 Top 10 用自己的话写成 10 张便签
2. 对 DVWA 菜单映射到 Top 10 分类
3. 选一个你做过的项目，按 WSTG 列「可能没测过的 5 项」

## 自测

1. A01 和 A07 的区别？
2. 为什么逻辑漏洞重要却经常漏测？
3. WSTG 和 Top 10 的分工？
