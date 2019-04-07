vue2.x学习记录

我安装的node.js版本号10.15.3 (includes npm 6.4.1)



--（1）配置 全局和缓存目录
npm config set prefix "D:\wqsoftware\nodejs\wq_node_global"
npm config set cache "D:\wqsoftware\nodejs\wq_node_cache"

后面如果删除了nodejs重装，缓了个安装目录，运行npm命令时报错，想要恢复下这个配置的默认值，怎么办呢？

解决办法：
删除C:\Users\Administrator.npmrc这个文件。
如果.npmrc不在这个目录下，就全局搜一下啦。


D:\wqsoftware\nodejs\node_modules\npm -----》npmrc文件，将默认值
prefix=${APPDATA}\npm
改成
prefix=D:\wqsoftware\nodejs\wq_node_global



相关参考：
https://www.cnblogs.com/fisheleven/p/6775380.html?utm_source=itdadao&utm_medium=referral

https://blog.csdn.net/u014540814/article/details/78777961


vue 常用命令

如果需要下载时，将npm替换成cnpm比较快一点。


如果是环境运行相关的操作，则直接使用npm
本地运行
npm start/run dev;
构建发布 如果是tomcat下面，如下操作：
需要修改build/webpack.prod.conf.js配置文件  publicPath:'/wq_vuecli_demo'
npm run build;
npm -g install serve;
serve dist
cnpm install vue-resource --save

消息订阅发布组件
npm install --save pubsub-js

调用后端 在vue1.x会需要vue-resource插件
cnpm install vue-resource --save
在vue2.x 使用axios插件
cnpm install axios --save

移动端mint-ui组件
npm install --save mint-ui
按需引入
cnpm install babel-plugin-component 
然后需要修改.babelrc文件  
添加按需打包的配置


参考文档
http://mint-ui.github.io/docs/#/zh-cn2/quickstart


下载vue-router
npm install vue-router --save


复制项目命名wqvuexdemo 注意不要拷贝.idea 和 node_modules
重新npm install 即可。
