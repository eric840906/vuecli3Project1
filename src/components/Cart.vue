<template>
  <div>
    <div class="cartframe">
      <div class="cartcount" v-if="cartInfo.data.total!==0">
        <div class="cartcounter">{{ cartInfo.data.carts.length }}</div>
      </div>

      <div class="cartlist">
        <div class="scroll-menu">
          <table class="table shop-list">
            <thead>
              <th></th>
              <th>Products</th>
              <th width="60">Quantity</th>
              <th width="40">Price</th>
            </thead>
            <tbody>
              <tr v-for="item in cartInfo.data.carts" :key="item.id">
                <td class="align-middle text-center">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeItem(item.id)"
                  >
                    <font-awesome-icon :icon="['far', 'trash-alt']"/>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                </td>
                <td class="align-middle text-center">
                  {{ item.qty }}{{ item.product.unit }}
                </td>
                <td class="align-middle text-center">{{ item.final_total | currency}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td colspan="2" class="text-right">Total</td>
                <td class="text-right">{{ cartInfo.data.total | currency }}</td>
              </tr>
              <tr v-if="cartInfo.data.total != cartInfo.data.final_total">
                <td class="text-right text-success">Coupon Applied</td>
                <td colspan="2" class="text-right text-success">Final Price</td>
                <td class="text-right text-success">
                  {{ Math.round(cartInfo.data.final_total) | currency }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div
          class="input-group input-group-sm justify-content-center"
          style="margin:50px auto; width: 70%;"
        >
          <div class="d-flex">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Coupon Codes"
              v-model="coupon_code"
              style="flex:1;"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="applyCoupon"
              >
                Apply
              </button>
            </div>
          </div>

          <button
            class="pay-btn btn-shop text-decoration-none"
            @click.prevent="toPay"
            >&emsp;Checkout&emsp;</button
          >
        </div>
      </div>
      <a href="#" class="carttrigger">
        <font-awesome-icon class="carticon" v-if="!isloading" :icon="['fas', 'shopping-cart']"/>
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
      coupon_code: ''
    }
  },
  methods: {
    refreshCart () {
      this.$emit('refreshCart')
    },
    removeItem (id) {
      this.$emit('removeItem', id)
    },
    applyCoupon () {
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/coupon` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      this.$http.post(api, { data: coupon }).then(response => {
        vm.isLoading = true
        if (response.data.success) {
          vm.refreshCart()
          vm.isLoading = false
          this.$bus.$emit('message:push', 'Coupon code successfully applied', 'success')
        } else {
          vm.isLoading = false
          this.$bus.$emit('message:push', 'Cant\'t find coupon code', 'danger')
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
.mb-5 {
  margin-bottom: 5rem !important;
}

.scroll-menu {
  overflow-y: auto;
  height: 35vh;
}
.scroll-menu::-webkit-scrollbar {
  width: 1em;
  height: 1em;
}
.scroll-menu::-webkit-scrollbar-track {
  box-shadow: transparent;
}

.scroll-menu::-webkit-scrollbar-thumb {
  background-image: radial-gradient($legend-prize, transparent);
  outline: 1px solid $white;
  border-radius: 135px;
}

.cartcount {
  position: absolute;
  right: -6px;
  top: -8px;
  height: 23px;
  width: 23px;
  z-index: 10000;
  border: 1px solid $black;
  background-color: $black;
  border-radius: 25px;
  .cartcounter {
    color: $yellow;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.cartframe {
  border: 1px solid $black;
  border-radius: 153px;
  height: 50px;
  width: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 0px 0px 11px $cover;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 10;
  .carticon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: $black;
  }
.shop-list{
  margin: 30px auto;
  width:70%;
}

  &:hover {
    box-shadow: 0px 0px 11px $white;
    .carticon{
      color: $yellow;
    }
  }
}

.cartlist {
  background: $white;
  position: absolute;
  right: 0;
  bottom: 95px;
  width: 450px;
  display: none;
  box-shadow: 0 5px 12px 8px rgba(0, 0, 0, 0.5);
}

.pay-btn {
  width: 100%;
  margin-top: 20px;
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
}

@media (max-width: 425px) {
  .cartlist {
    right: -34px;
  }
}

@media (max-width: 320px) {
  .cartlist {
    width: 364px;
    right: -42px;
  }
  .shop-list{
    margin: 30px 13px;
  }
}
</style>
