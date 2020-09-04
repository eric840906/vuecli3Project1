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
        <select name="" class="form-control" v-model="product.quantity">
          <option v-for="item in 10" :value="item" :key="item"
            >{{ item }}{{ product.unit }}</option
          >
        </select>
        <br />
        <h5>
          Total: {{ (product.origin_price * product.quantity) | currency }}
        </h5>
        <br />
        <h5>Description</h5>
        <p>{{ product.description }}</p>

        <button
          :disabled='productStatus.loading == product.id'
          class="addCart-btn"
          @click="addCart(product.id, product.quantity)"
        >
          Add to Cart
        </button>
      </div>
      <div class="col-md-8 .container-fluid">
        <img :src="product.imageUrl" alt="" class="img-fluid" />
      </div>
    </div>
    <div class="productsCarousel">
      <h5>Other Products</h5>
        <carousel :responsive="{0:{items:1, dots:false},600:{items:3}}" :nav="false" :autoplay="true" :loop="false" :rewind="true" v-if="products.length>0">
          <template slot="prev"><font-awesome-icon class="prev" :icon="['fas', 'chevron-left']" style="height: 100%;" /></template>
            <div v-for="item in products" :key="item.id">
              <div
                  style="height: 250px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              <div class="cover">
                <a class="btn" @click="toProduct(item.id)">view</a>
              </div>
            </div>
          <template slot="next"><font-awesome-icon class="next" :icon="['fas', 'chevron-right']" style="height: 100%;" /></template>
        </carousel>
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
      produtId: '',
      product: {},
      products: {},
      productStatus: {
        loading: ''
      },
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
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
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
    }
  },
  created () {
    this.productId = this.$route.params.productId // 這裡的$router.params.orderId是對應到我們在index.js的customercheckout後面自訂義的動態orderId(就是訂單建立後給的ID)
    this.getProduct()
    this.getProducts()
    this.getCart()
  }
}
</script>

<style lang="scss">
.image-frame{
  height: 200px;
  width: 200px;
  margin-left:auto; margin-right:auto;
}
.addCart-btn {
  margin: 70px 0;
  width: 100%;
  border-style: none;
  transition: 0.3s all;

  &:hover {
    background-color: #ffdf76;
    color: #292929;
  }
  &:focus {
    background-color: #292929;
    color: #ffdf76;
  }
}
.productsCarousel{
  position: relative;
  .prev{
    cursor: pointer;
    position: absolute;
    z-index: 7;
    top: 4%;
    left: -1%;
  }
  .next{
    cursor: pointer;
    position: absolute;
    z-index: 7;
    top: 4%;
    right: -1%;
  }
}

.owl-item{
  position: relative;
  padding: 0px 10px;
  .cover{
    left: 0;
    top: 0;
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000006b;
    .btn{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 42%;
      background-color: #f6fbffbf;
    }
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
