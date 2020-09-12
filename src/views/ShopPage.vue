<template>
  <div>
    <Alert></Alert>
    <Navbar></Navbar>
    <main role="main">
      <section
        class="jumbotron text-center"
        style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1573991288363-aa2067bc6a73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80); background-size: cover; background-position: center;"
      >
        <div class="page-title">
          <h1
            style="font-family: 'Tangerine', cursive; font-size: 4.5rem; color: cornsilk;"
          >
            Choose Your Favourites
          </h1>
          <br />
          <h1 class="lead"></h1>
        </div>
      </section>

      <div class="album pt-5 bg-light">
        <div class="container">
          <router-view></router-view>
        </div>
        <Footer></Footer>
        <GoTop></GoTop>
      </div>
    </main>
  </div>
</template>

<script>
import $ from 'jquery'
import Navbar from '../components/HomeNav.vue'
import GoTop from '../components/GoTop.vue'
import Alert from '../components/Alert.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    GoTop,
    Alert,
    Footer
  },
  data () {
    return {
      products: [],
      product: {},
      productStatus: {
        loading: ''
      },
      cartList: {
        data: {
          carts: []
        } // 沒事先訂義的話會跳錯誤說carts undefined(雖然還是抓得到資料啦)
      },
      coupon_code: '',
      visibility: 'all'
    }
  },
  methods: {
    getProducts (page = 1) {
      // 參數直接寫page=1代表page預設值為1
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/products` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      this.$http.get(api).then(response => {
        vm.isLoading = false
        vm.products = response.data.products
      })
    },
    getProduct (id) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/product/${id}`
      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.product = response.data.product
          vm.productStatus.loading = ''
          vm.$router.push(`/${vm.product.id}`)
        }
      })
    },
    getCart () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      this.$http.get(api).then(response => {
        vm.isLoading = false
        vm.cartList = response.data
      })
    },
    addCart (id, qty = 1) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(api, { data: cart }).then(response => {
        if (response.data.success) {
          $('#productModal').modal('hide')
          vm.productStatus.loading = ''
          this.$bus.$emit('message:push', '加入成功', 'success')
          this.getCart()
        } else {
          alert('加入失敗')
          vm.productStatus.loading = ''
        }
      })
    },
    removeCart (id) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${id}`
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          this.getCart()
          vm.productStatus.loading = ''
        } else {
          vm.productStatus.loading = ''
        }
      })
    },
    productFilter (value) {
      const vm = this
      vm.tempProducts = vm.products.filter(function (item, index, array) {
        return item.category === value
      })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
body {
  font-family: "cwTeXYen", sans-serif;
}

.border-right {
  border-right: 1px solid $black;
}

.card-footer {
  padding: 0;
}
.page-title {
  color: $black;
  padding: 96px 0;
  background-image: radial-gradient(#f0b3b3a8, #ffffff00);
}

.top-select {
  display: none;
  .top-select-item {
    .active {
      border: 1px solid $black;
    }
  }
}
</style>
