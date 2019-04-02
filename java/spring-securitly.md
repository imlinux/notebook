
## 入口

EnableWebSecurity注解和AutoConfig

### spring配置类

WebSecurityConfiguration通过EnableWebSecurity自动导入，WebSecurityConfiguration最重要的字段WebSecurity  
WebSecurity通过builder设计模式实现，通过SecurityConfigurer来实现配置WebSecurity,最终通过调用build方法来实例化出Filter


### FilterChainProxy

### WebSecurityConfigurerAdapter默认的Filter

```securityContext()```将认证好的对象存在起来