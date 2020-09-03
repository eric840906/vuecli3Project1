import Vue from 'vue'
Vue.prototype.$bus = new Vue() // 將event bus直接掛在原形下，讓所有物件都能夠使用
