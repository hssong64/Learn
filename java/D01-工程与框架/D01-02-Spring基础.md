# D01-02 · Spring 核心与 Boot 入门

## 学习目标

- 理解 IoC/DI、AOP
- 会写 Spring Boot Web 基础项目
- 能分层：Controller / Service / Repository

## 一、IoC 与 DI

```java
@Service
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo) { this.repo = repo; }
}
```

- 容器管理对象生命周期
- 构造器注入优先
- 面向接口编程

## 二、常用注解

| 注解 | 作用 |
|------|------|
| `@Component/@Service/@Repository/@Controller` | 注册 Bean |
| `@Autowired` | 注入（推荐构造器） |
| `@Configuration` `@Bean` | 配置类 |
| `@Value` / `@ConfigurationProperties` | 读配置 |
| `@Transactional` | 事务 |
| `@RestController` `@RequestMapping` | Web |

## 三、AOP 概念

- 切点 + 通知，横切关注点
- 典型：日志、鉴权、事务、缓存
- 注解驱动 `@Aspect`

## 四、Spring Boot Web

```java
@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/{id}")
    public User get(@PathVariable Long id) {
        return userService.get(id);
    }
}
```

约定：`application.yml`、内嵌 Tomcat、自动配置。

## 五、分层

```text
Controller：参数校验、协议
Service：业务与事务
Repository/Mapper：数据访问
DTO/VO：对外结构
```

## 六、开发清单

1. 参数校验 `@Valid`
2. 统一异常处理 `@RestControllerAdvice`
3. 日志切面
4. 接口文档 springdoc/Swagger
5. 环境配置 dev/test/prod

## 动手练习

1. 做用户增删改查 REST
2. 全局异常 + 统一响应体
3. 接口参数校验

## 自测

1. IoC 解决什么问题？
2. 为什么构造器注入更好？
3. Controller 该不该写 SQL？
