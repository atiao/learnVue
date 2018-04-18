### 一、创建vue项目

* 前提：node环境，cnpm镜像

1. 安装Vue-Cli：    npm i -g vue-cli

2. 初始化项目： vue init webpack XXX（你想要项目的名字）

3. 一路回车

4. 安装依赖：cnpm install

5. 运行项目：npm run dev

### 二、结构目录一览表

1. 整个项目目录结构
<img src="proImgs/1.png">

2. build目录结构
<img src="proImgs/build.png">

3. build目录结构(环境变量)
<img src="proImgs/config.png">

4. 
* index.html:只有一个空的根节点，src/main.js 下实例将挂载到#app节点下，内容被vue组件替换。
* src/App.vue:项目主组件。
* src/main.js:入口文件，初始化vue实例并使用需要的插件。
* router/index.js:定义路由。

5. build文件夹详解
* build.js，作用：run build的入口配置文件，用于生产环境
<img src="proImgs/build2.png">

* check-versions.js 作用：node，npm版本号

* utils.js 作用：处理css-loader和vue-style-loader

* webpack.base.conf.js 作用：cssloadeer构建配置

6.package.json
package.json中最重要的属性是name和version两个属性，这两个属性是必须要有的，否则模块就无法被安装，这两个属性一起形成了一个npm模块的唯一标识符。

7.config详解
<img src="proImgs/config2.png">