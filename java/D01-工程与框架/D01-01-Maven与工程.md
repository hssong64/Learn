# D01-01 · Maven 与工程化

## 学习目标

- 掌握坐标、依赖、生命周期
- 会多模块项目与冲突排查
- 理解仓库与私服概念

## 一、pom 基础

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>1.0.0</version>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
  </dependencies>
</project>
```

## 二、生命周期

```text
clean → validate → compile → test → package → verify → install → deploy
```

常用：`mvn clean test`、`mvn -DskipTests package`

## 三、依赖管理

- 范围：`compile`、`test`、`provided`、`runtime`
- 传递依赖可能冲突
- `mvn dependency:tree` 排查
- `<exclusions>` 排除

## 四、多模块

```text
parent
├── api
├── service
└── web
```

父 pom 统一版本（dependencyManagement）。

## 五、仓库

| 仓库 | 用途 |
|------|------|
| Central | 公共默认 |
| 私服 Nexus/Artifactory | 公司内部 |
| 本地 `~/.m2` | 缓存与安装 |

## 六、规范

- groupId 反写域名
- 一模块一职责
- 锁定插件版本
- CI 用 `mvn -B` 批处理模式

## 动手练习

1. 建多模块项目并互相依赖
2. 解决一次依赖冲突
3. 配置阿里云镜像（加速）

## 自测

1. `install` 与 `deploy` 区别？
2. 为什么要 dependencyManagement？
3. SNAPSHOT 何时不该用？
