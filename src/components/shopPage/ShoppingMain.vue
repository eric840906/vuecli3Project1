<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav
      class="navbar navbar-expand navbar-light bg-light top-select justify-content-center"
    >
      <ul class="navbar-nav">
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
        class="col-xl-3 col-sm-2 d-md-block bg-light sidebar collapse"
      >
        <div class="sidebar-sticky pt-3">
          <div style="height: 70px;"></div>
          <h3 style="margin-bottom: 2rem;">Product List</h3>
          <ul class="nav flex-column">
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
        </div>
      </nav>

      <div class="col-md-9 row">
        <div
          class="col-md-6 mb-4 col-lg-4"
          v-for="item in filterProducts"
          :key="item.id"
          style="height:390px"
        >
          <div class="card border-0 shadow-sm" style="height: 100%;">
            <div class="cover">
              <div class="shopping-buttons">
                <button
                  :disabled='productStatus.loading == item.id'
                  type="button"
                  class="btn btn-sm shop-btn border-right"
                  @click="getProduct(item.id)"
                >
                  <font-awesome-icon
                    v-if="productStatus.loading !== item.id"
                    :icon="['far', 'list-alt']"
                  />
                  <font-awesome-icon
                    class="fa-pulse"
                    v-else
                    :icon="['fas', 'spinner']"
                  />
                  View More
                </button>
                <button
                  :disabled='productStatus.loading == item.id'
                  type="button"
                  class="btn  btn-sm shop-btn"
                  @click="addCart(item.id)"
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
            </div>
            <div
              style="height: 150px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="card-body">
              <span class="badge badge-secondary float-right ml-2">{{
                item.category
              }}</span>
              <h5 class="card-title">
                <a href="#" class="text-dark">{{ item.title }}</a>
              </h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-footer d-flex">
              <div class="price-tag">{{ item.price | currency}} each</div>
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

export default {
  components: {
    Cart
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
      visibility: 'all',
      isLoading: false
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
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.get(api).then(response => {
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
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },

  computed: {
    filterProducts () {
      if (this.visibility === 'all') {
        return this.products
      } else if (this.visibility === 'Popsicle') {
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
      }
    }
  }
}
</script>

<style lang="scss">

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

.card{
  position: relative;
  .cover{
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000006b;
    .shopping-buttons{
      background-color: white;
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-around;
      bottom: 0%;
      button{
        flex: 1;
        padding: 10px 0 10px 0;
        &:hover{
        background-color: #ffdf76;
        }
      }
    }
  }
  &:hover{
    .cover{
      display: block;
      transition: 0.5s all;
    }
  }
}
.price-tag{
  margin: 5px 0;
  font-size: 1.25rem;
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
