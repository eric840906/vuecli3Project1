import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CouponJackpot from '../views/CouponJackpot.vue'
import Storeinfo from '../views/Storeinfo.vue'
import Contact from '../views/Contact.vue'
import PaymentPage from '../views/PaymentPage.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 預防使用者因為輸入不存在的路徑跑到空白頁面
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shoppage',
    name: 'ShopPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopPage.vue'),
    children: [
      {
        path: 'shoppingmain',
        name: 'ShoppingMain',
        component: () => import('../components/shopPage/ShoppingMain.vue')
      },
      {
        path: 'product/:productId',
        name: 'ShopProduct',
        component: () => import('../components/shopPage/ShopProduct.vue')
      }
    ]
  },
  {
    path: '/couponjackpot',
    name: 'CouponJackpot',
    component: CouponJackpot
  },
  {
    path: '/storeinfo',
    name: 'Storeinfo',
    component: Storeinfo
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/paymentpage',
    name: 'PaymentPage',
    component: PaymentPage,
    children: [
      {
        path: 'paymentmake',
        name: 'PaymentMake',
        component: () => import('../components/payment/PaymentMake.vue')
      },
      {
        path: 'paymentconfirm/:orderId', // 要加上/:orderId動態帶入api抓來的訂單ID形成結帳頁面，少了冒號會因為網址被nav guard判斷不存在而跑回login
        name: 'PaymentConfirm',
        component: () => import('../components/payment/PaymentConfirm.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // 加入這段表示需要驗證才能進入的頁面
    children: [
      {
        path: 'products', // 子元件不用加斜線
        name: 'Products',
        component: () => import('../components/management/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../components/management/Coupon.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orderlist',
        name: 'OrderList',
        component: () => import('../components/management/OrderList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'commentmanage',
        name: 'CommentManage',
        component: () => import('../components/management/CommentManage.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
