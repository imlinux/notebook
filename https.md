
### 证书

证书是一个包含公钥、订阅人相关信息以及证书颁发者数字签名的数字文件,也就是一个让  
我们可以交换、存储和使用公钥的壳。因此,证书成为了整个PKI体系的基础组成元素。


### 证书规范

1. X.509

### 证书格式

1. .cer
2. .pem
3. .p7b
4. .p12


### 数字签名公式

Signature = RSA(sha256(Data), IssuerPrivateKey)




### pks12转换为pem

证书和私钥存放到同一个pem中 `openssl pkcs12 -in path.p12 -out newfile.pem`  


证书和pem分别放到单独的pem文件中  
`openssl pkcs12 -in path.p12 -out newfile.crt.pem -clcerts -nokeys`  
`openssl pkcs12 -in path.p12 -out newfile.key.pem -nocerts -nodes`


### curl测试


curl -k --cert client.pem --key key.pem https://www.xxxx.com

curl -k --cert all.pem  https://www.xxxx.com

