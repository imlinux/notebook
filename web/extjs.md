+++
author = ""
date = "2016-05-20T16:16:01+08:00"
description = ""
tags = []
title = "extjs"

+++

### Ext 核心

##### Element

1. Ext.Element,extjs的核心，是html元素的封装，用来操作html元素，每个组件上都有getEl方法来访问代表该组件的Element  
2. 使用Ext.get(id) ,获得Element实例并进行操作
2. Element.dom 属性可以获得html元素


##### Template

##### XTemplate


### Ext 核心UI组件

1. Ext.Component,所有UI组件的父类。
2. Container是Component的子类，
3. 组件生命周期
4. id vs itemId

### 布局
1. Ext.layout.*
2. 分为，容器布局和组件布局两类，组件布局一般不需要关心，一般指定容器布局
3. column 可以指定宽度百分比，数值，但是高度需要组件自己来设置，所以不适合高度对齐
4. hbox,vbox 相比column更灵活，可以实现高度对齐，和其它很多对齐方案,可以使用vbox宽度对齐，让后在vbox里面嵌入hbox实现高度对齐.

#### hbox
1. 需要设置子组件的宽度

#### 表单

1. form.load() 需要服务端返回的json格式

		{
			success:true,
			msg:'',
			data:{
				form_field:value //和表单对应的键值对
			
			}
		
		
		}

2. form.submit()的回调函数需要服务端返回的json格式

		{
			success:false,
			msg:'',
			errors:{  //服务端验证表单失败后的提示信息
			    form_field:msg //form_field对应表单的字段名，msg对应错误提示，
			}
	
		}
		
		或者
		{
			success:true,
			mag:''
		}




#### store
1. Model.phantom在服务端不存在，在本地存在。即store.add()没有向远程同步