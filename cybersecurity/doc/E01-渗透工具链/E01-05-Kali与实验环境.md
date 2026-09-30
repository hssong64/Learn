# E01-05 · Kali 与实验环境

## 学习目标

- 搭建隔离、可快照的实验环境
- 熟悉 Kali 常用工具入口
- 形成「实验环境与日常开发/生产隔离」的习惯

## 一、环境架构建议

```text
宿主机（你的电脑）
  ├─ 虚拟机 A：Kali / Parrot（攻击机）
  ├─ 虚拟机 B：靶场（DVWA / Metasploitable / 靶场应用）
  └─ 虚拟机 C：可选 Windows / 域环境（进阶）
       ↑
    Host-Only / 内部网络（与公司/家庭生产网隔离）
```

**重要**：不要把靶场桥接到不受控网络；不要对生产做实验。

## 二、虚拟化选择

| 工具 | 系统 | 特点 |
|------|------|------|
| VirtualBox | Win/mac/Linux | 免费、够用 |
| VMware | Win | 稳定、快照方便 |
| UTM | macOS | Apple Silicon 常用 |
| WSL2 | Windows | 适合工具，不适合复杂网络拓扑 |

## 三、Kali 里常见工具映射

| 类别 | 工具 |
|------|------|
| 信息收集 | nmap、dig、whatweb、gobuster |
| Web | burpsuite、sqlmap、ffuf、nikto |
| 漏洞利用 | metasploit（授权靶场） |
| 密码 | hashcat、john（合法场景） |
| 网络 | wireshark、tcpdump、responder（进阶） |
| 辅助 | searchsploit、msfvenom（进阶） |

> Kali 只是工具箱；**方法论在 D 模块**。

## 四、靶场清单（由浅入深）

| 靶场 | 用途 |
|------|------|
| DVWA | Web 漏洞全系列难度档 |
| SQLi-labs | SQL 注入专项 |
| Upload-labs | 上传专项 |
| Pikachu / WebGoat | 教学 |
| VulnHub 镜像 | 综合主机 |
| HackTheBox / TryHackMe | 在线综合 |
| PortSwigger Web Academy | 免费高质量 Web 实验 |

## 五、快照与备份

1. 装好系统先打快照 `clean`
2. 每完成一个专题打快照
3. 被打穿/环境脏了回滚
4. 靶场数据与报告分开存放

## 六、网络实验注意

| 做 | 不做 |
|----|------|
| Host-Only/内网互联 | 扫邻居家路由器 |
| 固定 IP 做实验记录 | 在公司生产网开扫描器 |
| 实验完关机 | 留着恶意样本外挂共享目录 |

## 七、日常开发机安全

- 分系统用户/虚拟机做攻防实验
- 密码管理器，不复用弱口令
- 开启磁盘加密（敏感客户数据）
- 公司电脑遵守公司安全政策

## 动手练习

1. 装好 Kali + DVWA，host-only 互通
2. 打 `clean` 快照并写恢复步骤
3. 列出你机器上工具版本清单（便于复现）

## 自测

1. 为什么靶场要与生产网隔离？
2. 快照在渗透练习中的价值？
3. Kali 装一堆工具就等于会渗透吗？
