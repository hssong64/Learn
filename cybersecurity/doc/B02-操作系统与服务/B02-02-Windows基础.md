# B02-02 · Windows 基础与攻击面

## 学习目标

- 理解 Windows 用户、组、UAC、服务
- 知道常见高危端口与配置问题
- 为内网渗透与提权阶段做知识储备

## 一、基础概念

| 概念 | 说明 |
|------|------|
| 本地用户 / 组 | `lusrmgr.msc`、`net user` |
| 域 Domain | 集中账号与策略（AD） |
| 管理员 / SYSTEM | 高权限；SYSTEM 常高于管理员 |
| UAC | 提权前的确认机制，可被绕过（进阶） |
| 服务 Service | 以特定账户运行的常驻程序 |

```powershell
whoami
whoami /priv
net user
net localgroup administrators
systeminfo
```

## 二、目录与敏感文件

```text
C:\Windows\System32
C:\Users\<name>\
C:\Program Files
%APPDATA% / %TEMP%
注册表 HKLM / HKCU
```

常见敏感点：
- 浏览器保存的密码
- 明文配置文件（Web.config、备份）
- 共享目录
- 服务可执行路径是否可写

## 三、网络与远程

| 端口 | 服务 | 风险 |
|------|------|------|
| 135 | RPC | 远程管理接口 |
| 139/445 | NetBIOS/SMB | 横向、历史高危漏洞 |
| 3389 | RDP | 爆破、暴露公网 |
| 5985/5986 | WinRM | 远程管理 |

```powershell
netstat -ano
ipconfig /all
```

## 四、日志与痕迹

- 事件查看器：安全、系统、应用
- 4624 登录成功、4625 失败、4720 创建用户等（事件 ID 逐步记）
- PowerShell 脚本块日志（若开启）

## 五、常见攻击面（先建立地图）

1. **弱口令与爆破**：RDP、SMB、应用后台
2. **未打补丁**：经典远程漏洞（学习原理，不要对未授权系统用）
3. **配置错误**：服务可写、计划任务、AlwaysInstallElevated
4. **凭据泄露**：配置文件、历史、回收站、明文
5. **域渗透**（进阶）：Kerberoasting、AS-REP、委派等

## 六、安全加固要点（防守视角）

- 关闭无用端口与服务
- 强口令 + 账户锁定策略
- 最小权限，少用管理员日常办公
- 及时补丁与杀软/EDR
- RDP 不裸奔公网（跳板/VPN/限制来源）

## 动手练习

1. 在 Windows 虚拟机里用 `systeminfo` 记录版本与补丁概况
2. 用 `net localgroup administrators` 查看管理员组
3. 从防守角度列 10 条你司 Windows 服务器可检查项

## 自测

1. 为什么 3389 直接暴露在公网是高风险？
2. 服务可执行文件可写会导致什么？
3. 普通用户日常用管理员账户有什么问题？
