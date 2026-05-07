# product-details · 移动端订单详情页

基于 **Vue 3 + TypeScript + Vite + Pinia + Vue Router** 的仿京东订单详情页 Demo。整页按移动端竖屏布局，最大宽度 450px 居中。通过 GitHub Actions 自动部署到 GitHub Pages。

## 技术栈

| 类别 | 选型 |
| --- | --- |
| 框架 | Vue 3.5（Composition API + `<script setup>`） |
| 语言 | TypeScript 6 |
| 构建 | Vite 8 |
| 状态管理 | Pinia 3 |
| 路由 | Vue Router 4（Hash 模式） |
| 部署 | GitHub Actions → GitHub Pages（`gh-pages` 分支） |

无 UI 组件库，所有 UI（图标 SVG、Toast、占位图）均原生手写。

## 启动

```bash
npm install
npm run dev      # 本地开发
npm run build    # 构建：vue-tsc 类型检查 + vite build
npm run preview  # 预览构建产物
```

部署：push 到 `master` 分支后由 [.github/workflows/deploy.yml](.github/workflows/deploy.yml) 自动构建并发布到 `gh-pages` 分支。

> Vite 配置了路径别名 `@ → src/`，所有源码通过 `@/...` 引用。

## 项目做了什么

把一个完整的"订单详情"页面，按视觉区块拆成 9 个独立组件，由一个 Pinia store 集中管理订单数据。Mock 层提供 3 套示例订单（毛巾 / 蓝牙耳机 / 零食礼包），通过路由参数 `:id` 切换演示。

## 项目结构

```
src/
├── main.ts                # 入口：挂载 router + Pinia
├── App.vue                # 根组件：<router-view /> + 全局 Toast
├── router/index.ts        # 路由表
├── views/
│   └── OrderDetail.vue    # 页面级组件，组装所有子组件
├── components/            # 9 个 UI 组件（见下方分工）
├── stores/order.ts        # 订单状态
├── composables/useToast.ts # 全局 Toast 调用 hook
├── utils/web/clipboard.ts # 剪贴板兼容工具
└── mocks/orderDetail.ts   # 示例订单数据 + 类型定义
```

## 路由

路由表在 [src/router/index.ts](src/router/index.ts)：

| 路径 | 说明 |
| --- | --- |
| `/order-detail/:id` | 订单详情页，`:id` 用来切换不同的 mock 订单（1/2/3） |
| 其他 | 一律重定向到 `/order-detail/1` |

采用 **Hash 模式**（`createWebHashHistory`），URL 形如 `xxx/#/order-detail/2`，对静态托管（GitHub Pages）友好，无需服务端做 fallback。

`OrderDetail.vue` 里通过 `useRoute().params.id` 读到路由参数，调用 `store.switchOrder()` 切换订单数据；非法 id 会用 Toast 提示并保留默认数据。

## 组件分工

页面装配顺序写在 `views/OrderDetail.vue`：

| 组件 | 职责 |
| --- | --- |
| `StatusBar.vue` | 顶部占位条，模拟手机系统状态栏 |
| `NavBar.vue` | 导航栏：返回 / 标题 / 更多 |
| `OrderStatus.vue` | 订单状态区：状态图标 + 取件码 |
| `AddressBar.vue` | 收货信息：收件人、脱敏手机号、地址 |
| `GoodsCard.vue` | 商品卡片：店铺、商品图、规格、数量、价格 |
| `PriceInfo.vue` | 价格明细：商品总额、优惠、运费、PLUS 省钱、实付款 |
| `OrderInfo.vue` | 订单信息：编号 + 复制、时间 / 支付 / 配送等（支持折叠展开） |
| `ServiceBar.vue` | 服务中心 4 宫格：保障 / 补贴 / PLUS / 售后 |
| `BottomActions.vue` | 底部"再次购买"按钮 |
| `Toast.vue` | 全局轻提示（挂在 body，支持 top/center/bottom） |

所有子组件通过 `useOrderStore()` 取数，组件之间不互相传 props，彻底解耦。

## 状态管理（`stores/order.ts`）

Pinia Composition API 风格 store：

- **state** — 当前展示的订单数据
- **getters** — 派生展示用文本（时间换行格式化、手机号脱敏、优惠/补贴文案拼接）
- **action** — `switchOrder(index)`：在 3 套 mock 数据间切换

## Toast 全局机制

采用 **"单例 ref + 注册"** 模式，避免组件层层挂载：`App.vue` 里全局只渲染一个 `<Toast />`，挂载时把实例注册进 `useToast` 模块；任意组件 `const { showToast } = useToast()` 即可调用。

## 商品图片处理

`GoodsCard.vue` 中：

- 数据来源 `store.orderDetail.goodsImage`（远端 URL）
- `<img>` 上绑 `@error` 处理图片加载失败：失败时切换显示一个**占位 SVG**（相框 + 山形图标 + "商品图"文字），**保证布局不抖动**
- 没有引入懒加载/骨架屏，后续要做可以加 `loading="lazy"` 或接入 `IntersectionObserver`

## 剪贴板复制

订单号复制逻辑抽到 [src/utils/web/clipboard.ts](src/utils/web/clipboard.ts)，做了双层兼容：

1. 优先 `navigator.clipboard.writeText`（现代浏览器）
2. 回退 `<textarea> + document.execCommand('copy')`（兼容 iOS WebView 和老版安卓）

## 数据 Mock

`src/mocks/orderDetail.ts` 导出 `OrderDetail` 类型 + 3 条示例数据，覆盖日用品、电子产品、食品三类典型订单。接入真实接口时，把 store 里的初始化逻辑改成 `fetch` 即可，组件层无需改动。
