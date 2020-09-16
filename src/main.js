// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'leaflet/dist/leaflet.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faMapMarkerAlt, faChevronLeft, faStar, faChevronRight, faAngleDoubleUp, faShoppingCart, faSpinner, faPlus, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { faListAlt, faEnvelope, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faInstagram, faFacebookF, faGooglePlusG, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap' // 引入以使用bootstrap提供的功能
import './bus.js'
import Slick from 'vue-slick'
import VueSlickCarousel from 'vue-slick-carousel'
import carousel from 'vue-owl-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VeeValidate from 'vee-validate'
import currencyFilter from './filters/currency.js'
import { Icon } from 'leaflet'
import App from './App.vue'
import router from './router'

library.add(faMobileAlt, faStar, faMapMarkerAlt, faFacebook, faTwitter, faInstagram,
  faChevronLeft, faChevronRight, faAngleDoubleUp, faShoppingCart, faSpinner, faListAlt,
  faPlus, faEnvelope, faFacebookF, faGooglePlusG, faYoutube, faLinkedinIn, faGithub, faTrashAlt,
  faAngleDoubleRight, faAngleDoubleLeft)

axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.component('Carousel', carousel)
Vue.component('Slick', Slick)
Vue.component('VueSlickCarousel', VueSlickCarousel)
Vue.component('Loading', Loading)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)
Vue.component('l-icon', LIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.filter('currency', currencyFilter)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate, {
  events: 'input|blur'
})
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// 路由守衛，更換頁面時觸發(同頁面重新整理無法觸發)，通常當作登入驗證
router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next)
  if (to.meta.requiresAuth) { // 判斷頁面是否需要驗證
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check` // 用API抓使用者資料確認登入權限
    // 原來的this.$http.get(api)只能在元件使用，若要在.js裡面抓api資料的話要用axios.post(api)
    axios.post(api).then((response) => {
      if (!response.data.success) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    })
  } else { // 不需要驗證的話直接通過
    next()
  }
})
