# ng2-app-template

## 文档目录
* [开发环境准备](#开发环境必备)
* [添加模块](#添加新模块)

## 开发环境必备
1. 安装[node.js](http://nodejs.cn/download/)
2. node.js安装完成后，打开cmd,输入以下命令，设置淘宝npm镜像
    ```
        npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```
## 添加新模块
1. 在`YiChe.App.CmsWeb\Contents\angular2`下打开cmd，安装模块自动生成cli工具
    ```
        cnpm install -g ng2-app-template
    ```
2. 创建功能模块
    ```
        ng2template --module-name <module-name>  //<module-name>为需要创建的模块名称
    ```
