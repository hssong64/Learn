const tracks = [
  {
    id: "cybersecurity",
    badge: "安全",
    title: "cybersecurity",
    desc: "从法律边界到 Web 漏洞、渗透流程与实战靶场。",
    items: ["A00 大纲", "A01 法律与概念", "B/C 网络与 Web 安全", "D/E 方法与工具", "F/G 实战进阶"],
    entry: "./cybersecurity/doc/A00-学习大纲.md",
  },
  {
    id: "java",
    badge: "后端",
    title: "java",
    desc: "语法 → OOP → 集合并发 → Maven/Spring → 项目。",
    items: ["A01/A02 语言与 OOP", "B01/B02 核心库", "C01 并发 JVM", "D01 工程框架", "E01 实战"],
    entry: "./java/A00-学习大纲.md",
  },
  {
    id: "python",
    badge: "脚本",
    title: "python",
    desc: "语法与标准库，爬虫自动化，安全向工具脚本。",
    items: ["A01/A02 语言", "B01/B02 工程", "C01 爬虫自动化", "D01 安全脚本", "E01 实战"],
    entry: "./python/A00-学习大纲.md",
  },
  {
    id: "web-html",
    badge: "Web",
    title: "web/html",
    desc: "语义结构、表单交互、无障碍与元信息。",
    items: ["A01 语义", "A02 表单", "B01 无障碍 SEO"],
    entry: "./web/html/A00-学习大纲.md",
  },
  {
    id: "web-css",
    badge: "Web",
    title: "web/css",
    desc: "Flex/Grid、响应式、变量与现代 CSS。",
    items: ["A01 布局", "A02 响应式", "B01 现代 CSS"],
    entry: "./web/css/A00-学习大纲.md",
  },
  {
    id: "web-js",
    badge: "Web",
    title: "web/js",
    desc: "语言底层、异步与模块、DOM、工程化与安全。",
    items: ["A01/A02 语言异步", "B01 DOM 浏览器", "C01 工程性能"],
    entry: "./web/js/A00-学习大纲.md",
  },
  {
    id: "web-node",
    badge: "Web",
    title: "web/node",
    desc: "HTTP 服务、工程分层、安全与部署。",
    items: ["A01/A02 核心与框架", "B01 工程数据", "C01 安全部署"],
    entry: "./web/node/A00-学习大纲.md",
  },
];

const tree = `Learn/
├── index.html / index.md / styles.css / app.js
├── .gitignore
├── cybersecurity/
│   ├── index.md
│   ├── doc/A00…G01（38 篇）
│   └── memory/260930/W01.md
├── java/
│   ├── A00-学习大纲.md
│   └── A01…E01 模块细节
├── python/
│   ├── A00-学习大纲.md
│   └── A01…E01 模块细节
└── web/
    ├── html/  (A00 + A01/B01)
    ├── css/   (A00 + A01/B01)
    ├── js/    (A00 + A01…C01)
    └── node/  (A00 + A01…C01)`;

function renderTracks() {
  const root = document.getElementById("trackList");
  if (!root) return;

  const frag = document.createDocumentFragment();
  for (const t of tracks) {
    const article = document.createElement("article");
    article.className = "track";
    article.innerHTML = `
      <span class="badge"></span>
      <h3></h3>
      <p></p>
      <ul></ul>
      <a class="entry"></a>
    `;
    article.querySelector(".badge").textContent = t.badge;
    article.querySelector("h3").textContent = t.title;
    article.querySelector("p").textContent = t.desc;

    const ul = article.querySelector("ul");
    for (const item of t.items) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }

    const a = article.querySelector("a.entry");
    a.href = t.entry;
    a.textContent = "打开大纲 →";
    frag.appendChild(article);
  }
  root.appendChild(frag);
}

function renderTree() {
  const el = document.getElementById("treeText");
  if (el) el.textContent = tree;
}

renderTracks();
renderTree();
