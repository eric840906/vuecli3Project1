import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    products: [],
    category: [],
    cartList: {
      data: {
        carts: []
      }
    }
  },
  actions: {
    updateLoading (context, payload) {
      context.commit('LOADING', payload)
    },
    getProducts (context) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/products?` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      axios.get(api).then(response => {
        context.commit('GETPRODUCTS', response.data.products)
        context.commit('GETCATEGORY', new Set(response.data.products.map(item => item.category)))
        context.commit('LOADING', false)
      })
    },
    getCart (context) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
      axios.get(api).then(response => {
        context.commit('LOADING', false)
        context.commit('GETCART', response.data)
      })
    },
    addCart (context, payload) {
      context.commit('LOADING', true)
      let duplicate = false
      let quantity
      let duplicateID
      this.state.cartList.data.carts.filter(function (item) {
        if (payload.id === item.product_id) {
          duplicate = true
          duplicateID = item.id
          quantity = payload.qty + item.qty
        }
      })
      if (duplicate) {
        const del = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${duplicateID}`
        const add = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
        const duplicateItem = {
          product_id: payload.id,
          qty: quantity
        }
        axios.delete(del).then(response => {
          if (response.data.success) {
            return axios.post(add, { data: duplicateItem })
          }
        }).then(() => {
          this.dispatch('getCart')
          context.commit('LOADING', false)
          duplicate = false
        })
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
        const cart = {
          product_id: payload.id,
          qty: payload.qty
        }
        axios.post(api, { data: cart }).then(response => {
          if (response.data.success) {
            context.commit('LOADING', false)
            this.dispatch('getCart')
          } else {
            context.commit('LOADING', false)
          }
        })
      }
    }
    // getCategory (context) {
    //   context.commit('GETCATEGORY', new Set(this.state.products.map(item => item.category)))
    // }
  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    GETPRODUCTS (state, payload) {
      state.products = payload
    },
    GETCATEGORY (state, payload) {
      state.category = payload
    },
    GETCART (state, payload) {
      state.cartList = payload
    }
  }
})
