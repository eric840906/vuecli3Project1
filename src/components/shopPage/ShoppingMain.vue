<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Banner :picture="bannerImg" :title="pageTitle"></Banner>
    <div class="container" style="padding-top: 60px;">
      <div class="d-flex flex-wrap">
        <nav class="top-select">
          <ul  class="select-nav">
            <li class="nav-item">
              <div class="top-select-item">
                <a
                  class="nav-link "
                  href="#"
                  @click.prevent="visibility = 'all'"
                  :class="{ active: visibility == 'all' }"
                >
                  All
                </a>
              </div>
            </li>
            <li class="nav-item">
              <div class="top-select-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="visibility = 'Popsicle'"
                  :class="{ active: visibility == 'Popsicle' }"
                >
                  Popsicle
                </a>
              </div>
            </li>
            <li class="nav-item">
              <div class="top-select-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="visibility = 'Ice Cream'"
                  :class="{ active: visibility == 'Ice Cream' }"
                >
                  Ice Cream
                </a>
              </div>
            </li>
            <li class="nav-item">
              <div class="top-select-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="visibility = 'High Class'"
                  :class="{ active: visibility == 'High Class' }"
                >
                  High Class
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-sm-2 d-md-block sidebar collapse"
          >
            <ul class="nav flex-column sticky-top">
              <li><h3 style="margin-bottom: 2rem;">Product List</h3></li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  @click.prevent="visibility = 'all'"
                  :class="{ active: visibility == 'all' }"
                >
                  All
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="visibility = 'Popsicle'"
                  :class="{ active: visibility == 'Popsicle' }"
                >
                  Popsicle
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="visibility = 'Ice Cream'"
                  :class="{ active: visibility == 'Ice Cream' }"
                >
                  Ice Cream
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="visibility = 'High Class'"
                  :class="{ active: visibility == 'High Class' }"
                >
                  High Class
                </a>
              </li>
            </ul>
          </nav>

          <div class="col-md-9 product-block">
            <div
              class="col-md-4 mb-4"
              v-for="item in filterProducts"
              :key="item.id"
              style="cursor:pointer;"
            >
              <div class="product-card">
                <div class="cover" @click="toProduct(item.id)">
                  <h5 style="transform: translateY(220%);">More Detail</h5>
                </div>
                <div class="shopping-buttons">
                    <button
                      :disabled='productStatus.loading == item.id'
                      type="button"
                      class="btn-shop lower-radius"
                      @click="addCart(item.id)"
                      style="font-size: 0.875rem;"
                    >
                      <font-awesome-icon
                        v-if="productStatus.loading !== item.id"
                        :icon="['fas', 'plus']"
                      />
                      <font-awesome-icon
                        class="fa-pulse"
                        v-else
                        :icon="['fas', 'spinner']"
                      />
                      Add to Cart
                    </button>
                  </div>
                <div
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
                <div class="card-body">
                  <span class="badge badge-product float-right">
                    <span style="position: absolute; top: -62px; transform: rotate(-46deg); left: 6px;">
                    {{ item.category }}
                    </span>
                  </span>
                  <h5 class="card-title">
                    <a href="#" class="text-dark">{{ item.title }}</a>
                  </h5>
                  <p class="card-text">{{ item.description }}</p>
                </div>
                <h5 class="price-tag">{{ item.price | currency }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cart
      :cartInfo="cartList"
      :isloading="productStatus.loading"
      @refreshCart="getCart"
      @removeItem="removeCart"
    ></Cart>
  </div>
</template>

<script>
import $ from 'jquery'
import Cart from '../Cart.vue'
import Banner from '../Banner.vue'

export default {
  components: {
    Cart,
    Banner
  },
  data () {
    return {
      bannerImg: {
        backgroundImage: "url('https://images.unsplash.com/photo-1573991288363-aa2067bc6a73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
      },
      pageTitle: 'Choose Your Favourites',
      products: [],
      product: {},
      productStatus: {
        loading: ''
      },
      cartList: {
        data: {
          carts: []
        } // 沒事先定義的話會跳錯誤說carts undefined(雖然還是抓得到資料啦)
      },
      coupon_code: '',
      visibility: 'all',
      isLoading: false,
      quantity: 0,
      duplicate: false,
      duplicateID: ''
    }
  },
  methods: {
    getProducts (page = 1) {
      // 參數直接寫page=1代表page預設值為1

      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/products` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.get(api).then(response => {
        vm.isLoading = false
        vm.products = response.data.products
      })
    },
    getProduct (id) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/product/${id}`
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          vm.product = response.data.product
          vm.productStatus.loading = ''
          vm.$router.push(`product/${vm.product.id}`)
        }
      })
    },
    getCart () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
      vm.$http.get(api).then(response => {
        vm.isLoading = false
        vm.cartList = response.data
      })
    },
    addCart (id, qty = 1) {
      const vm = this
      vm.productStatus.loading = id
      vm.cartList.data.carts.filter(function (item) {
        if (vm.productStatus.loading === item.product_id) {
          vm.duplicate = true
          vm.duplicateID = item.id
          vm.quantity = qty + item.qty
        }
      })
      if (vm.duplicate) {
        const del = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${vm.duplicateID}`
        const add = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
        const duplicateItem = {
          product_id: id,
          qty: vm.quantity
        }
        vm.$http.delete(del).then(response => {
          if (response.data.success) {
            return vm.$http.post(add, { data: duplicateItem })
          }
        }).then((item) => {
          vm.$bus.$emit('message:push', 'item added successfully', 'success')
          vm.getCart()
          vm.productStatus.loading = ''
          vm.duplicate = false
        })
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
        const cart = {
          product_id: id,
          qty
        }
        vm.$http.post(api, { data: cart }).then(response => {
          if (response.data.success) {
            $('#productModal').modal('hide')
            vm.productStatus.loading = ''
            vm.$bus.$emit('message:push', 'item added successfully', 'success')
            vm.getCart()
          } else {
            vm.$bus.$emit('message:push', 'connection fail', 'danger')
            vm.productStatus.loading = ''
          }
        })
      }
    },
    removeCart (id) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${id}`
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', 'item removed', 'danger')
          vm.getCart()
          vm.productStatus.loading = ''
        } else {
          vm.$bus.$emit('message:push', 'connection fail', 'danger')
          vm.productStatus.loading = ''
        }
      })
    },
    productFilter (value) {
      const vm = this
      vm.tempProducts = vm.products.filter(function (item, index, array) {
        return item.category === value
      })
    },
    toProduct (id) {
      console.log(id)
      const vm = this
      vm.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },

  computed: {
    filterProducts () {
      if (this.visibility === 'Popsicle') {
        const newFilter = []
        this.products.forEach(element => {
          if (element.category === 'Popsicle') {
            newFilter.push(element)
          }
        })
        return newFilter
      } else if (this.visibility === 'Ice Cream') {
        const newFilter = []
        this.products.forEach(element => {
          if (element.category === 'Ice Cream') {
            newFilter.push(element)
          }
        })
        return newFilter
      } else if (this.visibility === 'High Class') {
        const newFilter = []
        this.products.forEach(element => {
          if (element.category === 'High Class') {
            newFilter.push(element)
          }
        })
        return newFilter
      } else {
        return this.products
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/helpers/functionColors';
@import "@/assets/helpers/_variables";
.sidebar {
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0; /* Height of navbar */

  .nav-item{
    color: lighten($background, 65%);
    &:hover {
      background-color: lighten($background, 25%);
    }
    .nav-link{
      color: $link-text;
      &:hover{
        color: lighten($background, 65%);
      }
    }
    .active {
      background-color: $background;
    }
  }
}

.select-nav{
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a{
    color: $link-text;
  }
  .top-select-item {
    .active {
      background-color: $background;
      color: lighten($background, 65%);
    }
  }
}
.sticky-top{
    margin-top: -125px;
    padding-top: 125px;
}
.product-block{
  display: flex;
  flex-wrap: wrap;
}
.badge{
  padding: 0;
}
.badge-product{
  color: $lighter-background;
  position: absolute;
  border-color: #0f0f0fab transparent transparent transparent;
  border-style: solid solid solid solid;
  border-width: 90px 90px 0px 0px;
  top: 0;
  left: 0;
  border-radius: 0;
}

.lower-radius{
  border-radius: 0;
}

.product-card{
  background-color: darken($lighter-background, 5%);
  height: 100%;
  position: relative;
  box-shadow: 0px 16px 3px -11px rgba(0, 0, 0, 0.075);
  display: flex;
  flex-direction: column;
  .cover{
    text-align: center;
    display: none;
    position: absolute;
    width: 100%;
    height: 90%;
    background-color: $cover;
  }
  .shopping-buttons{
      display: none;
      width: 100%;
      position: absolute;
      justify-content: space-around;
      bottom: 0%;
      button{
        padding: 0.75rem 1.25rem;
        width: 100%;
      }
    }
  &:hover{
    .cover{
      display: block;
      transition: 0.5s all;
      h5{
        color: $lighter-background;
      }
    }
    .shopping-buttons{
      display: block;
    }
  }
}
.price-tag{
  margin: 0;
  padding: 5px 10px;
  font-size: 1.25rem;
  background-color: $background;
  color: $lighter-background;
}

.top-select {
  display: none;
  width: 100%;
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

@supports (position: sticky) {
  .sidebar-sticky {
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.sidebar .nav-item .nav-link.active {
  color: lighten($background, 65%); // for example
}

</style>
