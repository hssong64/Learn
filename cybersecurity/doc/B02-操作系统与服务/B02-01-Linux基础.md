# B02-01 · Linux 基础（安全向）

## 学习目标

- 会用命令行做排查、信息收集、权限判断
- 理解用户/组/权限位、进程、网络配置
- 为 WebShell 后渗透、CTF、靶场打底

## 一、目录与导航

```text
/           根
/etc        配置
/var/log    日志
/home       用户家目录
/tmp        临时（常是攻击者落脚点）
/root       root 家目录
/opt        第三方软件
```

```bash
pwd && ls -la
cd /var/log && tail -n 100 auth.log
```

## 二、文件权限

```bash
ls -la
# -rwxr-xr-x  user group
chmod 755 file
chmod +x script.sh
chown user:group file
```

| 位 | 含义 |
|----|------|
| r=4 | 读 |
| w=2 | 写 |
| x=1 | 执行 |
| u/g/o | 属主/组/其他 |

**安全点**：`777` 危险；`/etc/passwd` 可读、`/etc/shadow` 需 root；SUID 程序可提权。

```bash
find / -perm -4000 2>/dev/null   # 查 SUID
```

## 三、用户与提权入口

```bash
whoami && id
sudo -l
cat /etc/passwd
grep -v nologin /etc/passwd
```

常见提权线索（概念）：
- sudo 配置过宽
- SUID/SGID 二进制
- 定时任务（cron）写权限
- 可写脚本/PATH 劫持
- 内核漏洞、Docker 逃逸（进阶）

## 四、网络与进程

```bash
ip a
ss -tulnp
ps aux | grep -i nginx
top / htop
netstat -tulnp
```

## 五、日志

| 文件/目录 | 内容 |
|-----------|------|
| `/var/log/auth.log` 或 `secure` | 登录、sudo |
| `/var/log/syslog` / `messages` | 系统 |
| Web 访问/错误日志 | 路径因发行版与部署而异 |
| `history` | 命令历史（清理与否都是痕迹） |

## 六、常用排查组合拳

```bash
uname -a
cat /etc/os-release
id && sudo -l
ss -tulnp
ls -la /tmp /var/tmp
crontab -l
find / -name "*.log" 2>/dev/null | head
```

## 动手练习（在自己的虚拟机）

1. 创建用户并设置权限，观察 `chmod` 变化
2. 找出系统里一个 SUID 程序并解释风险
3. 用 `ss` 找到 SSH 端口对应的进程

## 自测

1. `chmod 777` 为什么危险？
2. `sudo -l` 在渗透里有什么用？
3. WebShell 之后为什么要看 `ss` 与定时任务？
