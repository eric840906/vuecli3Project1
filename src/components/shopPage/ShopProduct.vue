<template>
  <div>
    <div class="container" style="padding-top:60px">
      <router-link to="/shoppingmain" class="bread-crumb"><font-awesome-icon :icon="['fas', 'chevron-left']" /> Back to Products</router-link>
      <section>
        <div class="container product">
          <div class="row">
            <div class="product-info col-md-4">
              <h4>{{ product.title }}</h4>
              <h5 class="price">List Price: {{ product.origin_price | currency }}</h5>
              <h5>Quantity</h5>
              <select name="" class="form-control quantity" v-model="quantity">
                <option v-for="item in 10" :value="item" :key="item"
                  >{{ item }}{{ product.unit }}</option
                >
              </select>
              <h5 v-if="quantity" class="price">
                Total: {{ (quantity * product.price) | currency }}
              </h5>
              <br />
              <h5>Description</h5>
              <p>{{ product.description }}</p>
              <a
                :disabled='productStatus.loading == product.id || !quantity'
                class="add-btn new-btn"
                @click="addCart(product.id, quantity)"
              >
                Add to Cart
              </a>
            </div>
            <img :src="product.imageUrl" alt="" class="col-md-8 product-img">
          </div>
        </div>
      </section>
      <section>
        <div class="container other-products">
          <h4 class="section-title">Other Products</h4>
          <productCarousel :carouselInfo="carouselArr" :show="productShow" :size="screenSize" @changeCarousel="productChange" @showCarousel="setCarousel" @movePage="toProduct"></productCarousel>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import productCarousel from '../productCarousel.vue'

export default {
  components: {
    productCarousel
  },
  data () {
    return {
      produtId: '',
      product: {},
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
      productShow: 0,
      screenSize: undefined,
      otherProducts: []
    }
  },
  methods: {
    getProducts (page = 1) {
      this.$store.dispatch('getProducts')
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
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`
      vm.$http.get(api).then(response => {
        this.$store.dispatch('updateLoading', false)
        vm.cartList = response.data
      })
    },
    addCart (id, qty = 1) {
      const payload = { id: id, qty: qty }
      this.$store.dispatch('addCart', payload)
    },
    toProduct (id) {
      const vm = this
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/product/${id}`
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          vm.product = response.data.product
          vm.productStatus.loading = ''
          vm.$router.push(`/product/${vm.product.id}`)
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
    },
    test () {
      location.reload()
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
  computed: {
    products () {
      return this.$store.state.products
    },
    carouselArr () {
      return this.products.filter((item) => item.id !== this.$route.params.productId)
    }
  },
  beforeDestroy () {
    this.$store.dispatch('updateLoading', true)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';

section+section{
  margin-top: 60px;
}
.bread-crumb{
  color: $link-text;
  &:hover{
    color: $link-text-hover;
  }
}
.product{
  .product-info{
    @media (max-width:425px) {
      margin-top: 20px;
      order: 2;
    }
  }
  .product-img{
    height: 70vh;
    @media (max-width:425px) {
      height: 35vh;
      order: 1;
    }
  }
  .price{
  text-align: end;
  }
  .quantity{
    width: 50%;
  }
  .add-btn{
    width: 100%;
    text-align: center;
  }
}

.section-title{
  text-align: center;
}
</style>
