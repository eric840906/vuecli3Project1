import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 預防使用者因為輸入不存在的路徑跑到空白頁面
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/shoppingmain',
        name: 'ShoppingMain',
        component: () => import(/* webpackChunkName: "group-shopping" */ '../components/shopPage/ShoppingMain.vue')
      },
      {
        path: '/product/:productId',
        name: 'ShopProduct',
        component: () => import(/* webpackChunkName: "group-shopping" */'../components/shopPage/ShopProduct.vue')
      },
      {
        path: '/couponjackpot',
        name: 'CouponJackpot',
        component: () => import(/* webpackChunkName: "group-coupon" */ '../views/CouponJackpot.vue')
      },
      {
        path: '/storeinfo',
        name: 'Storeinfo',
        component: () => import(/* webpackChunkName: "group-info" */'../views/Storeinfo.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "group-contact" */'../views/Contact.vue')
      },
      {
        path: '/paymentpage',
        name: 'PaymentPage',
        component: () => import(/* webpackChunkName: "group-payment" */ '../views/PaymentPage.vue'),
        children: [
          {
            path: 'paymentmake',
            name: 'PaymentMake',
            component: () => import(/* webpackChunkName: "group-payment" */ '../components/payment/PaymentMake.vue')
          },
          {
            path: 'paymentconfirm/:orderId', // 要加上/:orderId動態帶入api抓來的訂單ID形成結帳頁面，少了冒號會因為網址被nav guard判斷不存在而跑回login
            name: 'PaymentConfirm',
            component: () => import(/* webpackChunkName: "group-payment" */ '../components/payment/PaymentConfirm.vue')
          }
        ]
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
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
      },
      {
        path: 'customerorder', // 子元件不用加斜線
        name: 'CustomerOrder',
        component: () => import('../components/management/CustomerOrder.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'customercheckout', // 子元件不用加斜線
        name: 'CustomerCheckout',
        component: () => import('../components/management/CustomerCheckout.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
