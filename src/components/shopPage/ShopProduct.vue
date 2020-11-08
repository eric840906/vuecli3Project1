<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <router-link to="/shoppage/shoppingmain" style="margin: 20px 0; display: inline-block;"><font-awesome-icon :icon="['fas', 'chevron-left']" /> Back to Products</router-link>
    <div class="row flex-xs-column-reverse">
      <div class="col-md-4 md-mt-20">
        <h3>{{ product.title }}</h3>
        <h4 style="text-align:end;">
          List Price: {{ product.origin_price | currency }}
        </h4>
        <h5>Quantity</h5>
        <select name="" class="form-control" v-model="quantity">
          <option v-for="item in 10" :value="item" :key="item"
            >{{ item }}{{ product.unit }}</option
          >
        </select>
        <br />
        <h5 v-if="quantity">
          Total: {{ (quantity * product.price) | currency }}
        </h5>
        <br />
        <h5>Description</h5>
        <p>{{ product.description }}</p>

        <button
          :disabled='productStatus.loading == product.id || !quantity'
          class="addCart-btn btn-shop"
          @click="addCart(product.id, quantity)"
        >
          Add to Cart
        </button>
      </div>
      <div class="col-md-8 .container-fluid">
        <img :src="product.imageUrl" alt="" class="img-fluid" />
      </div>
    </div>
    <section>
      <div class="container">
        <h5>Other Products</h5>
        <productCarousel :carouselInfo="products" :show="productShow" :size="screenSize" @changeCarousel="productChange" @showCarousel="setCarousel"></productCarousel>
      </div>
        <!-- <carousel :responsive="{ 0: { items:1, dots:false }, 600: { items:3 } }" :nav="false" :autoplay="true" :loop="false" :rewind="true" v-if="products.length>0">
          <template slot="prev"><font-awesome-icon class="prev" :icon="['fas', 'chevron-left']" style="height: 100%;" /></template>
            <div v-for="item in products" :key="item.id">
              <div
                  style="height: 250px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              <div class="cover" @click="toProduct(item.id)">
                <div style="color:white; transform: translateY(450%);">View Product</div>
              </div>
            </div>
          <template slot="next"><font-awesome-icon class="next" :icon="['fas', 'chevron-right']" style="height: 100%;" /></template>
        </carousel> -->
    </section>
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
import productCarousel from '../productCarousel.vue'

export default {
  components: {
    Cart,
    productCarousel
  },
  data () {
    return {
      produtId: '',
      product: {},
      products: [],
      productStatus: {
        loading: ''
      },
      quantity: 1,
      cartList: {
        data: {
          carts: []
        }
      },
      coupon_code: '',
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 4
      },
      isLoading: false,
      productShow: 0,
      screenSize: undefined
    }
  },
  methods: {
    getProducts (page = 1) {
      // 參數直接寫page=1代表page預設值為1
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/products`
      vm.$http.get(api).then(response => {
        vm.isLoading = false
        vm.products = response.data.products
      })
    },
    getProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/product/${vm.productId}`
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          vm.product = response.data.product
          vm.productStatus.loading = ''
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
        vm.$http.delete(del).then(() => {
          return vm.$http.post(add, { data: duplicateItem })
        }).then((item) => {
          vm.$bus.$emit('message:push', 'item added successfully', 'success')
          vm.getCart()
          vm.productStatus.loading = ''
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
      vm.quantity = 1
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
    toProduct (id) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/product/${id}`
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          vm.product = response.data.product
          vm.productStatus.loading = ''
          vm.$router.push(`${vm.product.id}`)
        }
      })
    },
    resizeHandler () {
      const vm = this
      vm.screenSize = window.screen.availWidth
    },
    productChange (change) {
      const vm = this
      vm.productShow = (vm.productShow + vm.products.length + change) % vm.products.length
    },
    setCarousel (num) {
      const vm = this
      vm.productShow = num
    }
  },
  created () {
    window.addEventListener('resize', this.resizeHandler)
    this.productId = this.$route.params.productId // 這裡的$router.params.orderId是對應到我們在index.js的customercheckout後面自定義的動態orderId(就是訂單建立後給的ID)
    this.getProduct()
    this.getProducts()
    this.getCart()
    this.resizeHandler()
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
.image-frame{
  height: 200px;
  width: 200px;
  margin:0 auto;
}
.addCart-btn {
  margin: 70px 0;
  width: 100%;
  border-style: none;
  border: 1px solid;
}

.owl-item{
  position: relative;
  padding: 0px 10px;
  .cover{
    text-align: center;
    left: 0;
    top: 0;
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $cover;
    cursor: pointer;
  }
  &:hover{
    .cover{
      display: block;
      transition: 0.5s all;
    }
  }
}
@media (max-width: 425px) {
  .md-mt-20 {
    margin-top: 20px;
  }
  .flex-xs-column-reverse {
    flex-direction: column-reverse;
  }
}
</style>
