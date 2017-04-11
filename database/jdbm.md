#### 核心类

1. DBStore
    这个类主要保存未解释的字节块，使用rowId和byte\[\]与这个类的方法交互。
    所有的方法都是同步的。
    通过先记录transaction log是实现事物的acid，事物日志定期同步然后重新开始。
2. PageFile  
    这个类将文件封装为记录集合。每个页面有一个物理ID，为了提高速度，这些记录会被缓存。  
    带有事物功能  
    get方法接受pageId，返回PageIo

3. PageIo  
    对ByteBuffer的封装，代表一个页面。

4. Storage  
    通过pageId和ByteBuffer与此接口实现交互

5. PageManager  
   使用PageFile实例来管理页面,使用链表的方式来组织页面，0号页面用来保存元数据  
   **头的结构**

   | 位置 | 值 | 固定记录长度 |
   | :--- | :--- | :--- |
   | FILE\_HEADER\_O\_MAGIC（0） | Magic.FILE\_HEADER（0x1350） | Magic.SZ\_LONG |
   |  |  | Magic.SZ\_LONG |
   |  |  | Magic.SZ\_LONG |
   |  |  | Magic.SZ\_LONG |
   |  |  | Magic.SZ\_LONG |



