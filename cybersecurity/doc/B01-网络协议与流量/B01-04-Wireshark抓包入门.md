# B01-04 · Wireshark 抓包与流量分析入门

## 学习目标

- 会抓 HTTP/DNS/TCP 基础流量
- 能从包里提取 URL、Cookie、登录参数
- 用流量视角验证「数据到底发出去了什么」

## 一、为什么要会抓包

前端 DevTools 看到的是浏览器视角；Wireshark / tcpdump 能看到：

- 真实发出的字节（加密前后）
- 重传、延迟、RST
- 其他程序的流量
- 是否走了代理、是否有明文泄露

## 二、工具选择

| 场景 | 工具 |
|------|------|
| 图形化分析、教学 | Wireshark |
| 服务器/无头环境 | tcpdump |
| Web 应用层改包 | Burp Suite（下一阶段） |
| 移动端/系统全局 | Wireshark + 网卡混杂模式 |

## 三、Wireshark 基本操作

1. 选择正确的网卡开始捕获
2. 常用过滤器（BPF / 显示过滤器）：

```text
http
dns
tcp.port == 80
ip.addr == 192.168.56.10
http.request.method == "POST"
http.cookie contains "session"
tls.handshake
```

3. 右键 → Follow TCP Stream / Follow HTTP Stream，还原会话
4. 导出对象（HTTP）可导出传输的文件

## 四、分析清单（练习模板）

对一次登录抓包，回答：

1. 请求 URL 与方法？
2. 是否 HTTPS？明文里能看到哪些字段？
3. Cookie 名与属性（从 Set-Cookie）？
4. 是否携带 `Authorization`？
5. 响应状态码与是否重定向？
6. 有没有多发敏感字段（密码是否哈希后再传？通常是 HTTPS 明文在加密信道里）？

## 五、安全分析中的经典信号

| 信号 | 可能问题 |
|------|----------|
| HTTP 明文传密码/Token | 传输层机密性失效 |
| 证书告警 | 中间人 / 自签 / 过期 |
| DNS 查询异常域名 | 隧道、恶意软件 |
| 大量 401/403 同一 IP | 爆破/扫描 |
| 响应里出现 SQL/路径/堆栈 | 信息泄露 |

## 六、法律提醒

只抓 **你自己机器 / 你的靶场 / 明确授权的网络**。在公共 Wi-Fi 或公司网络混杂抓别人的包，可能违法。

## 动手练习

1. 虚拟机靶场 + 浏览器访问 DVWA，抓完整登录过程
2. 对比 HTTP 与 HTTPS 下 Cookie 是否可见
3. 用过滤器只显示 `http.request.uri contains "login"`

## 自测

1. HTTPS 流量在 Wireshark 里能看到哪些内容？
2. Follow Stream 对渗透测试有什么用？
3. 为什么公共网络抓包是高风险行为？
