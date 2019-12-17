## 入口

hotspot/src/share/tools/launcher或者jdk/src/share/bin

## jvm需要实现的接口

```cpp
typedef jint (JNICALL *CreateJavaVM_t)(JavaVM **pvm, void **env, void *args);
typedef jint (JNICALL *GetDefaultJavaVMInitArgs_t)(void *args);
typedef jint (JNICALL *GetCreatedJavaVMs_t)(JavaVM **vmBuf, jsize bufLen, jsize *nVMs);

```

## java工具核心流程

### 加载jvm

LoadJavaVM(const char *jvmpath, InvocationFunctions *ifn)获取InvocationFunctions对象  
函数定义在jdk/src/solaris/bin/java_md_soliuux.c, LoadJavaVM函数使用dlopen系统调用来加载libjvm.so  
获取共享库中的JNI_CreateJavaVM, JNI_GetDefaultJavaVMInitArgs, JNI_GetCreatedJavaVMs这三个函数  

InvocationFunctions定义: 
```cpp
typedef struct {
    CreateJavaVM_t CreateJavaVM;
    GetDefaultJavaVMInitArgs_t GetDefaultJavaVMInitArgs;
    GetCreatedJavaVMs_t GetCreatedJavaVMs;
} InvocationFunctions;
```

### 启动jvm

jdk/src/solaris/bin/java_md_soliuux.c
```cpp
int
JVMInit(InvocationFunctions* ifn, jlong threadStackSize,
        int argc, char **argv,
        int mode, char *what, int ret)
{
    ShowSplashScreen();
    return ContinueInNewThread(ifn, threadStackSize, argc, argv, mode, what, ret);
}
```

jdk/src/share/bin/java.c
```cpp

int
ContinueInNewThread(InvocationFunctions* ifn, jlong threadStackSize,
                    int argc, char **argv,
                    int mode, char *what, int ret)
{

    /*
     * If user doesn't specify stack size, check if VM has a preference.
     * Note that HotSpot no longer supports JNI_VERSION_1_1 but it will
     * return its default stack size through the init args structure.
     */
    if (threadStackSize == 0) {
      struct JDK1_1InitArgs args1_1;
      memset((void*)&args1_1, 0, sizeof(args1_1));
      args1_1.version = JNI_VERSION_1_1;
      ifn->GetDefaultJavaVMInitArgs(&args1_1);  /* ignore return value */
      if (args1_1.javaStackSize > 0) {
         threadStackSize = args1_1.javaStackSize;
      }
    }

    { /* Create a new thread to create JVM and invoke main method */
      JavaMainArgs args;
      int rslt;

      args.argc = argc;
      args.argv = argv;
      args.mode = mode;
      args.what = what;
      args.ifn = *ifn;

      rslt = ContinueInNewThread0(JavaMain, threadStackSize, (void*)&args);
      /* If the caller has deemed there is an error we
       * simply return that, otherwise we return the value of
       * the callee
       */
      return (ret != 0) ? ret : rslt;
    }
}

```

启动jvm的核心入口`JavaMain(void *args)`函数.源代码路径:jdk/src/share/bin/java.c

#### JavaMain调用InvocationFunctions流程

1. 调用CreateJavaVM函数获得JavaVM指针和JNIEnv指针
2. 使用JNIEnv加载主类, 参见jdk/src/share/bin/java.c中的LoadMainClass函数
3. 调用JNIEnv.CallStaticVoidMethod启动主类

# 字节码

### [jvm指令集（jvm bytecode instruction set）](https://en.wikipedia.org/wiki/Java_bytecode_instruction_listings)

