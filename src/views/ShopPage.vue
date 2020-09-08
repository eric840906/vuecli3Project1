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
@import url(https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap);
body {
  font-family: "cwTeXYen", sans-serif;
}

.jumbotron {
  height: 400px;
  margin-top: 22px;
  h1 {
    display: inline-block;
  }
}
.border-right {
  border-right: 1px solid black;
}

.badge-secondary {
  background-color: #292929;
  color: #ffdf76;
}

.card-footer {
  padding: 0;
  .shop-btn {
    width: 50%;
    border: none;
    border-radius: 0;
    transition: 0.3s;
    &:hover {
      background-color: #292929;
      color: #ffdf76;
    }
  }
}
.page-title {
  color: black;
  padding: 96px 0;
  background-image: radial-gradient(#f0b3b3a8, #ffffff00);
}

.top-select {
  display: none;
  .top-select-item {
    .active {
      border: 1px solid black;
    }
  }
}

.sidebar .nav-item .nav-link.active {
  color: #ffdf76; // for example
}
.sidebar {
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);

  .nav-item {
    color: #ffdf76;
    &:hover {
      background-color: #ffdf76;
    }
    .active {
      background-color: #292929;
      .nav-link a {
        color: #ffdf76;
      }
    }
  }
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
  .top-select {
    display: block;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
