<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <transition name="page">
      <router-view/>
    </transition>
    <Gotop></Gotop>
    <Cart
    :cartInfo="cartList"
    :isloading="isLoading"></Cart>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Gotop from '../components/GoTop.vue'
import Cart from '../components/Cart.vue'
export default {
  components: {
    Gotop,
    Footer,
    Cart
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    removeCart (id) {
      const vm = this
      this.$store.dispatch('updateLoading', true)
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${id}`
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', 'item removed', 'danger')
          vm.getCart()
          vm.productStatus.loading = ''
          this.$store.dispatch('updateLoading', false)
        } else {
          vm.$bus.$emit('message:push', 'connection fail', 'danger')
          vm.productStatus.loading = ''
          this.$store.dispatch('updateLoading', false)
        }
      })
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    cartList () {
      return this.$store.state.cartList
    }
  },
  created () {
    this.getCart()
  }
}
</script>
