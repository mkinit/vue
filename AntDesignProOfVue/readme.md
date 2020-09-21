# Ant Design Pro of Vue（Pro 3.0.0）指南
 - https://github.com/vueComponent/ant-design-vue-pro/releases/tag/v3
 - 默认为固定路由（非动态生成）

## 项目结构
- config
	- themePluginConfig.js      # 主题颜色方案
	- plugin.config.js          # 颜色切换插件配置
- public
	- logo.png                  # favicon icon
	- index.html                # Vue 入口模板
- src
	- api                       # Api ajax 等
	- assets                    # 本地静态资源
	- components                # 组件目录
	- config                    # 项目基础配置，包含路由，全局设置
		- defaultSettings.js    # 默认的配置信息，包括颜色方案、布局等
		- router.config.js      # 路由的配置（非动态路由在此添加菜单）
	- components                # 业务通用组件
	- core                      # 项目引导, 全局配置初始化，依赖包引入等
		- directives            # 自定义指令插件
			- action.js         # 权限指令 v-action
		- bootstrap.js          # 初始配置文件，从 localStorage 获取配置属性设置到状态管理器中。首次登录使用默认配置
		- icons.js              # 默认仪表盘的图标，在src/config/router.config.js删除相关引用或修改图标
		- lazy_use.js           # 各种插件和组件库的按需引用
		- use.js                # 各种插件和组件库的全量引用（默认没有引用该文件）
	- layouts                   # 基本的布局组件
		- BasicLayout.less      # 基本布局样式
		- BasicLayout.vue       # 页面基本布局
		- BlankLayout.vue       # 一个空的路由视图（默认不调用）
		- index.js              # 基本布局组件的统一入口
		- PageView.vue          # 无路由缓存的基本路由视图组件（默认不调用）
		- RouteView.vue         # 有路由缓存的基本路由视图组件（默认不调用）
		- UserLayout.vue        # 用户基本布局组件（登录、注册、注册结果）
	- locales                   # 国际化资源
		- lang                  # 语言目录
			- zh-CN.js          # 中文简体
			- en-US.js          # 英文
		- index.js              # 多语言设置入口
	- mock                      # 模拟数据，开发环境默认使用模拟数据
	- router                    # Vue-Router
		- generator-routers.js  # 动态路由（菜单）生成器（默认不调用）
		- index.js              # 路由入口
	- store                     # Vuex
		- modules               # 多模块状态管理目录
			- app.js            # 应用的状态管理模块，主要用于主题配色、布局的配置
			- async-router.js   # 动态路由的状态管理模块，请求动态路由数据后生成菜单（默认不调用）
			- permission.js     # 固定路由的状态管理模块，过滤无权限的路由后生成菜单
			- user.js           # 用户的状态管理模块，用户的信息
		- app-mixin.js          # 应用基本配置的计算属性混入
		- device-mixin.js       # 判断移动端的计算属性混入
		- getters.js            # 统一管理getters
		- i18n-mixin.js         # 当前语言变量（计算属性）和设置语言方法的混入
		- index.js              # 状态管理入口，使用固定路由还是动态路由在此更改
		- mutation-types.js     # 状态修改事件定义文件
	- utils                     # 工具库
		- helper
			- permission.js     # 权限动作列表 和 权限助手，用于判断模块的权限和动作权限（v-if="$auth('table.update')"）
		- axios.js              # axios的包装，以插件形式接收经过处理（请求/响应拦截）的axios实例
		- domUtil.js            # 设置文档标题的函数
		- filter.js             # 全局过滤器
		- permissions.js        # 动作列表的json字符串转JavaScript值函数
		- request.js            # axios请求/响应拦截
		- routeConvert.js       # 路由节点转换工具（默认无调用）
		- screenLog.js          # 输出到控制台的 antd pro 标志（可在src/core/bootstrap.js删除相关代码）
		- util.js               # 一些函数的包装
		- utils.less            # less 函数
	- views                     # 页面/模板目录
	- App.vue                   # Vue 模板入口
	- global.less               # 全局样式
	- main.js                   # Vue 入口 JS
	- permission.js             # 路由守卫（路由权限控制）
- tests                         # 测试工具

## 如何更换路由的图标
- 所有菜单图标：https://www.antdv.com/components/icon-cn/
- 复制图标名称填写到路由配置的meta.icon属性即可

## 如何关闭模拟数据
- 在 src/main.js 中注释掉 ```import './mock'``` 即可

## 如何修改服务器地址（关闭模拟数据后）

### 开发环境
- .env.development：VUE_APP_API_BASE_URL=后端API地址

### 生产环境
- .env：VUE_APP_API_BASE_URL=后端API地址

## 国际化

### 设置默认中文语言
- 在 src/core/bootstrap.js 中，将 en-US 改为 zh-CN

### 去除语言选择按钮
- src/components/GlobalHeader/RightContent.vue

