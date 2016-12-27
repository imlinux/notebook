### 接口

1. BeanFactory获取bean实例
2. BeanDefinitionRegistry定义bean
3. ListableBeanFactory可以查询bean可以认为是BeanDefinitionRegistry的扩充

**注：bean的访问和定义是通过两个接口来描述的，**BeanFactory只定义访问bean实例的方法，BeanDefinitionRegistry描述bean的定义。**BeanFactory根据BeanDefinitionRegistry的描述来构建bean实例。**通常BeanFactory的实现都会实现**BeanDefinitionRegistry**

