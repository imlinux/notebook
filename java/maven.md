# maven

## 安装私有jar

有3种方法

1. `mvn install:install-file -Dfile=non-maven-proj.jar -DgroupId=some.group -DartifactId=non-maven-proj -Dversion=1 -Dpackaging=jar`
2. scope设置为system，然后设置systemPath
3. Create your own repository and deploy it there. This is a favorite method for companies with an intranet and need to be able to keep everyone in synch.   

   There is a Maven goal called deploy:deploy-file which is similar to the install:install-file goal \(read the plugin's goal page for more information\). [ 官方文档推荐的方法（同上） ](https://maven.apache.org/pom.html)

4. 修改java编译级别

   org.apache.maven.pluginsmaven-compiler-plugin3.11.71.7

## java,scala,maven混合项目

1. 安装scala插件
2. 安装m2eclipse-scala插件\(maven\)
3. 插入pom片段



   ```text
   <plugin>
    	<groupId>net.alchim31.maven</groupId>
    	<artifactId>scala-maven-plugin</artifactId>
    	<version>3.1.3</version>
    	<executions>
    		<execution>
    			<goals>
    				<goal>compile</goal>
    				<goal>testCompile</goal>
    			</goals>
    		</execution>
    	</executions>
    </plugin> 
   ```

4. eclipse可能会报错，在 window-&gt;preferences-&gt;maven-&gt;lifecyle mapping ,填入下列代码



   ```text
   <pluginExecution>
    	<pluginExecutionFilter>
    		<groupId>org.scala-tools</groupId>
    		<artifactId>maven-scala-plugin</artifactId>
    		<goals>
    			<goal>testCompile</goal>
    			<goal>add-source</goal>
    			<goal>compile</goal>
    		</goals>
    		<versionRange>[2.9.1,)</versionRange>
    	</pluginExecutionFilter>
    	<action>
    		<ignore />
    	</action>
    </pluginExecution>
   ```

## 备忘

1. mvn的子模块都会继承父模块的配置

