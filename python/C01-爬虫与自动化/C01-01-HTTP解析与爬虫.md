# C01-01 · HTTP、解析与爬虫入门

## 学习目标

- 会用 requests/httpx 发起请求
- 会解析 HTML/JSON
- 合规爬取并落地数据

## 一、请求

```python
import requests

r = requests.get(url, timeout=10, headers={"User-Agent": "learn-lab/0.1"})
r.raise_for_status()
print(r.status_code, r.headers.get("content-type"))
print(r.json())
```

- 必须 timeout
- 尊重 robots 与法律
- 不爬未授权/个人隐私数据

## 二、BeautifulSoup / 选择器

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, "html.parser")
for a in soup.select("a.link"):
    print(a.get("href"), a.get_text(strip=True))
```

前端经验：选择器与 DOM 结构你很熟。

## 三、JSON API 爬取

```python
data = r.json()
items = data["results"]
for it in items:
    print(it["id"], it["title"])
```

## 四、工程化

1. Session 复用连接
2. 限速与重试
3. 日志与断点
4. 输出 CSV/JSONL
5. 代理与 Cookie 合规

## 五、与安全学习的衔接

- 信息收集脚本
- 验证 PoC 的批量请求
- 报告数据整理  
（靶场/授权环境使用）

## 动手练习

1. 抓取公开文档目录并导出 CSV
2. 解析目标 HTML 里的所有 API 路径
3. 写重试与限速包装函数

## 自测

1. 为什么必须 timeout？
2. 如何避免把服务器打挂？
3. 爬虫与渗透测试边界？
