<template>
  <div>
    <div class="cartframe">
      <div class="cartcount" v-if="cartInfo.data.total!==0">
        <div class="cartcounter">{{ cartInfo.data.carts.length }}</div>
      </div>
      <div class="cartlist">
        <h5>SHOPPING LIST</h5>
        <div class="scroll-menu">
          <table class="shop-list">
            <thead>
              <th>{{tableHead.product}}</th>
              <th>{{tableHead.quantity}}</th>
              <th>{{tableHead.price}}</th>
            </thead>
            <tbody>
              <tr v-for="item in cartInfo.data.carts" :key="item.id">
                <td class="list-item" :data-head="tableHead.product" >
                  {{ item.product.title }}
                </td>
                <td class="list-item" :data-head="tableHead.quantity">
                  {{ item.qty }}{{ item.product.unit }}
                </td>
                <td class="list-item" :data-head="tableHead.price">{{ item.final_total | currency }}</td>
                <td class="delete-item">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeItem(item.id)"
                  >
                    <font-awesome-icon :icon="['far', 'trash-alt']"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="list-bottom"
        >
          <div class="d-flex">
            <p :class="{'line-cross': cartInfo.data.total != cartInfo.data.final_total}">Total Price: {{ cartInfo.data.total | currency }}</p>
          </div>
          <div class="applied-text" v-if="cartInfo.data.total != cartInfo.data.final_total">
            <p class="text-right text-success">Coupon Applied !</p>
            <p colspan="2" class="text-right text-success">Final Price: {{ Math.round(cartInfo.data.final_total) | currency }}</p>
          </div>
          <div class="d-flex">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Coupon Codes"
              v-model="coupon_code"
              style="flex:1; border-radius: 0.15rem 0 0 0.15rem;"
            />
            <div class="input-group-append">
              <button
                class="apply-btn"
                type="button"
                @click="applyCoupon"
              >
                Apply
              </button>
            </div>
          </div>

          <button
            class="pay-btn"
            @click.prevent="toPay"
            >&emsp;Checkout&emsp;</button
          >
        </div>
      </div>
      <a href="#" class="carttrigger">
        <font-awesome-icon class="icon" v-if="!isloading" :icon="['fas', 'shopping-cart']"/>
        <font-awesome-icon class="cartloading fa-pulse" v-else :icon="['fas', 'spinner']"/>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  props: ['cartInfo', 'isloading'], // 用props將pagination資料帶入
  data () {
    return {
      coupon_code: '',
      tableHead: {
        product: 'Products',
        quantity: 'Quantity',
        price: 'Price'
      },
      productStatus: {
        loading: ''
      }
    }
  },
  methods: {
    refreshCart () {
      this.$emit('refreshCart')
    },
    removeItem (id) {
      const vm = this
      this.$store.dispatch('updateLoading', true)
      vm.productStatus.loading = id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${id}`
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', 'item removed', 'danger')
          this.$store.dispatch('getCart')
          vm.productStatus.loading = ''
          this.$store.dispatch('updateLoading', false)
        } else {
          vm.$bus.$emit('message:push', 'connection fail', 'danger')
          vm.productStatus.loading = ''
          this.$store.dispatch('updateLoading', false)
        }
      })
    },
    applyCoupon () {
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/coupon`
      vm.$http.post(api, { data: coupon }).then(response => {
        vm.isLoading = true
        if (response.data.success) {
          vm.refreshCart()
          vm.isLoading = false
          vm.$bus.$emit('message:push', 'Coupon code successfully applied', 'success')
        } else {
          vm.isLoading = false
          vm.$bus.$emit('message:push', 'Cant\'t find coupon code', 'danger')
        }
      })
    },
    toPay () {
      const vm = this
      if (vm.cartInfo.data.total === 0) {
        vm.$bus.$emit('message:push', 'Cart is empty', 'danger')
      } else {
        vm.$router.push('/paymentpage/paymentmake')
      }
    }
  },
  mounted () {
    $('.carttrigger').click(function (e) {
      e.preventDefault()
    })
    $('.cartframe').click(function (e) {
      e.preventDefault()
      e.stopPropagation()
      $('.cartlist').addClass('show')
    })
    $('body').click(function (e) {
      $('.cartlist.show').removeClass('show')
    })
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/customBtn';
.mb-5 {
  margin-bottom: 5rem !important;
}
.line-cross{
  text-decoration: line-through;
}
.applied-text{
  display: flex;
  justify-content: space-between;
}
.scroll-menu {
  overflow-y: auto;
  height: 35vh;
}
.scroll-menu::-webkit-scrollbar {
  width: 0.3em;
  height: 0em;
}
.scroll-menu::-webkit-scrollbar-track {
  box-shadow: transparent;
}

.scroll-menu::-webkit-scrollbar-thumb {
  background-image: radial-gradient(darken($lighter-background, 45%), transparent);
}

.cartcount {
  position: absolute;
  right: -6px;
  top: -8px;
  height: 23px;
  width: 23px;
  z-index: 10000;
  background-color: $background;
  border-radius: 25px;
  .cartcounter {
    color: $lighter-background;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-10%);
  }
}

.cartframe {
  @extend %fixed-btn;
  right: 10px;
.shop-list{
  margin: auto;
  width:70%;
  text-align: left;
    thead{
      display: none;
    }
    tr+tr{
      margin-top: 3px;
    }
    tr{
      display: block;
      &:nth-child(2n){
        background-color: $lighter-background;
      }
      &:nth-child(2n+1){
        background-color: darken($lighter-background, 5%);
      }
    }
    .list-item{
      display: block;
      padding-left: 5em;
      text-indent: -5em;
      &:before{
        text-align: right;
        padding-right: 5px;
        content: attr(data-head) ': ';
        display: inline-block;
        width: 5em;
      }
    }
    .delete-item{
      text-align: end;
      display: block;
    }
}
}
.list-bottom{
  margin: 10px auto;
  width: 70%;
}
.apply-btn{
  @extend %no-hover-btn;
  border-radius: 0 0.15rem 0.15rem 0;
}
.cartlist {
  background: $lighter-background;
  position: absolute;
  right: 0;
  bottom: 95px;
  width: 450px;
  display: none;
  text-align: center;
  box-shadow: 0 5px 12px 8px rgba(0, 0, 0, 0.5);
  @media (max-width: 425px) {
    right: -23px;
  }
  @media (max-width: 375px) {
    right: -44px;
  }
  @media (max-width: 320px) {
    right: -35px;
  }
}

.pay-btn {
  @extend %no-hover-btn;
  width: 100%;
  margin-top: 20px;
  border-radius: 0.15rem;
}

.show {
  display: block;
}

.cartloading {
  position: absolute;
  left: 11.5%;
  top: 10.5%;
  transform: translate(-50%, -50%);
  font-size: 37px;
  color: $background;
}

@media (max-width: 425px) {
  .cartlist {
    left: -32px;
  }
  .cartframe {
  left: 10px;
  }
}

@media (max-width: 320px) {
  .cartlist {
    width: 364px;
    left: -42px;
  }
}
</style>
