<template>
  <div>
    <div class="container mt-100">
      <table class="table checkout-list">
        <thead>
          <th></th>
          <th>Products</th>
          <th width="80">Quantity</th>
          <th width="20" class="text-right">Price</th>
        </thead>
        <tbody>
          <tr v-for="item in cartList.data.carts" :key="item.id">
            <td class="align-middle">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCart(item.id)"
              >
                <font-awesome-icon :icon="['far', 'trash-alt']"/>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
            </td>
            <td class="align-middle text-center">{{ item.qty }}{{ item.product.unit }}</td>
            <td class="align-middle text-center">{{ item.final_total | currency }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td colspan="2" class="text-right">Total</td>
            <td class="text-right">{{ cartList.data.total | currency }}</td>
          </tr>

          <tr v-if="cartList.data.total != cartList.data.final_total">
            <td class="text-left text-success">Coupon Applied</td>
            <td colspan="2" class="text-right text-success">Final Price</td>
            <td class="text-right text-success">
              {{ Math.round(cartList.data.final_total) | currency }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="container">
      <div class="my-5 row justify-content-center">
        <form class="col-md-6" @submit.prevent="buildOrder">
          <div class="form-group">
            <label for="useremail">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              v-model="orderForm.user.email"
              placeholder="Enter e-mail"
              v-validate="'required|email'"
            />
            <span class="text-danger" v-if="errors.has('email')">
                {{ errors.first("email") }}
            </span>
          </div>

          <div class="form-group">
            <label for="username">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="username"
              v-model="orderForm.user.name"
              placeholder="Enter name"
              :class="{ 'is-invalid': errors.has('name') }"
              v-validate="'required'"
            />
            <span class="text-danger" v-if="errors.has('name')"
              >Please enter your name</span
            >
          </div>

          <div class="form-group">
            <label for="usertel">Phone</label>
            <input
              type="tel"
              class="form-control"
              id="usertel"
              v-model="orderForm.user.tel"
              placeholder="Enter phone number"
            />
          </div>

          <div class="form-group">
            <label for="useraddress">Address</label>
            <input
              type="text"
              class="form-control"
              name="address"
              id="useraddress"
              v-model="orderForm.user.address"
              placeholder="Enter address"
              v-validate="'required'"
            />
            <span class="text-danger" v-if="errors.has('address')"
              >Please enter your address</span
            >
          </div>

          <div class="form-group">
            <label for="comment">Message</label>
            <textarea
              name=""
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="orderForm.message"
            ></textarea>
          </div>
          <div class="row"></div>
          <!--Grid row-->

          <hr />

          <div class="d-block my-3">
            <label for="paymentMethod">Payment Options</label>
            <div class="custom-control custom-radio">
              <input
                id="method1"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                required
              />
              <label class="custom-control-label" for="method1"
                >Credit card</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                id="method2"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="method2"
                >Debit card</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                id="method3"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="method3">Paypal</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name</label>
              <input
                type="text"
                name="cardName"
                class="form-control"
                id="cc-name"
                placeholder=""
                :class="{ 'is-invalid': errors.has('cardName') }"
                v-validate="'required'"
              />
              <span class="text-danger" v-if="errors.has('cardName')"
                >Please enter your name</span
              >
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Card Number</label>
              <input
                type="text"
                name="credit_field"
                class="form-control"
                id="cc-number"
                placeholder=""
                :class="{ 'is-invalid': errors.has('credit_field') }"
                v-validate="'required'"
              />
              <span class="text-danger" v-if="errors.has('credit_field')"
                >Credit card number is required</span
              >
              <!-- <input type="text" name="credit_field" class="form-control" id="cc-number" placeholder="" :class="{'is-invalid': errors.has('credit_field')}" v-validate="'credit_card'" >
                    <span class="text-danger" v-if="errors.has('credit_field')">Credit card number is required</span> -->
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3 col-6">
              <label for="cc-expiration">Expiration</label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div class="col-md-3 mb-3 col-6">
              <label for="cc-expiration">CVC</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <div class="text-right">
            <button class="btn btn-danger" style="width:100%;">Order</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderForm: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cartList: {
        data: {}
      },
      coupon_code: ''
    }
  },
  methods: {
    buildOrder () {
      const vm = this
      vm.isLoading = true
      const order = vm.orderForm
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/order`
      // 這裡使用Veevalidate的api來驗證表單
      vm.$validator.validate().then(valid => {
        if (valid) {
          vm.$http.post(api, { data: order }).then(response => {
            vm.isLoading = false
            if (response.data.success) {
              vm.$router.push(`paymentconfirm/${response.data.orderId}`)
            }
          })
        } else {
          vm.$bus.$emit('message:push', 'please fill the form properly', 'danger')
        }
      })
      this.getCart()
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
    removeCart (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${id}`
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          this.getCart()
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scope>
.checkout-list{
  margin: 30px auto;
  width:50%
}

.mt-100 {
  margin-top: 100px;
}

@media (max-width: 320px) {
  .checkout-list{
  margin: 30px -31px;
  }
}
</style>
