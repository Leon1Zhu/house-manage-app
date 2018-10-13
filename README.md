# house-manage-app

> house-manage

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 目录结构

```
static
├──build & config // 主要存放构建相关的配置文件
├──src // 代码文件目录
│   ├── api // 主要存放项目接口请求部分
│   ├── assets // 存放一些页面中使用的静态资源
│   ├── components // 组件目录，主要存放一些通用的组件
│   ├── interceptor // 切面编程封装
│   ├── router // vue-router目录
│   ├── store // store vuex目录
│   ├── styles // css文件目录，这里推荐将css文件脱离.vue文件，单独写
│   ├── views // 界面目录，主要存放项目的界面代码
│   ├── App.vue // 界面主入口
│   └── main.js // 工程主入口
├──.postcssrc.js // postcss配置文件
├──index.html // 单页面主页
└──package.json // 项目依赖包等配置文件

```

