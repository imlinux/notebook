#### 核心类

1. DBStore
    这个类主要保存未解释的字节块，使用rowId和byte[]与这个类的方法交互。
    所有的方法都是同步的。
    通过先记录transaction log是实现事物的acid，事物日志定期同步然后重新开始。
2. PageFile 
    这个类将文件封装为记录集合。每条记录有一个物理ID，为了提高速度，这些记录会被缓存。
    in-use列表存放脏记录，代表一个事物。
    
3. PageIo
    对ByteBuffer的封装，代表一个页面。

4. Storage
    通过pageId和ByteBuffer与此接口实现交互