# Learn · 总索引

> 仓库根：`D:/SHS/Code/mimocode/Learn`
> 本文件抽象各学习目录（网络安全 / Java / Python / Web）**可复用规则**，是全部学习内容的入口。

---

## 一、仓库结构

| 路径 | 主题 | 说明 |
|------|------|------|
| `cybersecurity/` | 网络安全与渗透 | 完整体系：法律 → Web 安全 → 渗透 → 实战 |
| `java/` | Java 语言与后端 | 语法 → 面向对象 → 集合并发 → 框架 |
| `python/` | Python | 语法 → 标准库 → 爬虫/自动化 → 安全向 |
| `web/` | Web 前端与 Node | `html/` `css/` `js/` `node/` 四条支线 |
| `index.html` | 浏览器入口 | 可预览的可视化索引（打开即可导航） |
| `.gitignore` | 通用忽略 | 多语言 / IDE / 密钥 / 构建产物 |

---

## 二、可复用规则（从网络安全抽象，各目录通用）

### 1. 目录职责

| 子目录 | 职责 | 不要放 |
|--------|------|--------|
| `<主题>/` 根下 `index.md` | 该主题的索引与规则 | 大篇幅知识正文 |
| `doc/`（或直接模块文件夹） | 知识正文、大纲、细节 | 密钥、靶场数据 |
| `project/` | 可交付项目产出 | 随手草稿 |
| `memory/` | 操作与对话记忆 | 公开教程正文 |

### 2. 命名规则（阅读顺序）

- 前缀格式：`字母 + 两位数字`，例如 `A01-Test`
- **字母** = 模块章节（A → B → C …）
- **数字** = 模块内阅读顺序（`01`、`02`…）
- **文件夹** = 学习单元，如 `A01-安全导论`
- **文件** = 章内小节，在父级前缀后加小序号，如 `A01-01-法律与授权.md`
- 总大纲统一为 **`A00-学习大纲.md`**，作为该主题阅读起点
- 阅读顺序：字母与数字递增；跨主题按本索引「推荐路径」

### 3. 记忆归档（memory/）

1. 操作与对话**必须**写入 `memory/`，不得只留在对话里
2. 按月建子文件夹：`YYMMDD`（如 `260930`）
3. 月内按周建文件：`W01.md`、`W02.md`…
4. 示例：`memory/260930/W01.md`
5. 同周追加；跨周新建下一编号

### 4. 内容写作模板（单篇知识点）

```markdown
# <前缀> · 标题
## 学习目标
## 知识点
## 动手练习 / 与经验的关联
## 自测
```

### 5. 命名与纪律

- 中文标题、英文技术名词混写可保留
- 严禁提交：真实目标、未授权测试记录、密钥、客户数据
- 安全类练习仅限靶场与书面授权环境
- 每学完一节写入 `memory/` 对应周文件

### 6. Git 实践

- 仓库根 `.gitignore` 覆盖常用语言与 IDE
- 提交信息：`feat/fix/docs/chore: 一句话为什么`
- 依赖锁文件按项目决定是否提交

---

## 三、各主题入口

| 主题 | 入口 | 模块前缀 |
|------|------|----------|
| 网络安全 | [`cybersecurity/index.md`](cybersecurity/index.md) · [`cybersecurity/doc/A00-学习大纲.md`](cybersecurity/doc/A00-学习大纲.md) | A–G（A01 法律…G01 进阶） |
| Java | [`java/A00-学习大纲.md`](java/A00-学习大纲.md) | A–E |
| Python | [`python/A00-学习大纲.md`](python/A00-学习大纲.md) | A–E |
| Web · HTML | [`web/html/A00-学习大纲.md`](web/html/A00-学习大纲.md) | A–C |
| Web · CSS | [`web/css/A00-学习大纲.md`](web/css/A00-学习大纲.md) | A–C |
| Web · JS | [`web/js/A00-学习大纲.md`](web/js/A00-学习大纲.md) | A–E |
| Web · Node | [`web/node/A00-学习大纲.md`](web/node/A00-学习大纲.md) | A–E |

---

## 四、推荐学习路径（前端 2 年背景）

```text
1) web/html → web/css → web/js          （补底层，你的优势区）
2) web/node                              （工程化与全栈）
3) python                                 （脚本、自动化、安全工具）
4) cybersecurity                          （体系化安全，已在 doc/）
5) java                                   （企业后端 / 大厂栈）
```

安全与前端强相关时，优先穿插 `cybersecurity/doc/C01`、`C02`。

---

## 五、主题间规则映射

| 规则 | 网络安全 | Java | Python | Web |
|------|----------|------|--------|-----|
| 大纲 | `doc/A00-学习大纲.md` | `A00-…` | `A00-…` | 各子目录 `A00-…` |
| 命名 | `A01-标题` | `A01-标题` | `A01-标题` | `A01-标题` |
| 细节 | `A01-01-子标题.md` | 同左 | 同左 | 同左 |
| 记忆 | `cybersecurity/memory/` | `java/memory/` | `python/memory/` | `web/memory/` |
| 项目 | `cybersecurity/project/` | `java/project/` | `python/project/` | `web/project/` |

> 首次使用某主题时，在其根下建 `memory/`、`project/`（可缺省）；知识正文放模块文件夹。

---

## 六、当前归档

| 主题 | 状态 |
|------|------|
| cybersecurity | 完整：A00 + 38 篇（doc/） |
| java | A00 + A–E 模块细节 |
| python | A00 + A–E 模块细节 |
| web/html | A00 + A–C |
| web/css | A00 + A–C |
| web/js | A00 + A–E |
| web/node | A00 + A–E |
