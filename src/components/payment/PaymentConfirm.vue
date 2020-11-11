<template>
  <div>
    <div class="comfirm-list">
      <form class="col-md-6" @submit.prevent="payConfirm">
        <table class="shop-list">
          <h5>Your Shopping List</h5>
          <thead>
            <th>{{tableHead.product}}</th>
            <th>{{tableHead.quantity}}</th>
            <th>{{tableHead.price}}</th>
          </thead>
          <tbody>
            <tr v-for="item in orders.products" :key="item.id">
              <td class="list-item" :data-head="tableHead.product" >
                {{ item.product.title }}
              </td>
              <td class="list-item" :data-head="tableHead.quantity">
                {{ item.qty }}{{ item.product.unit }}
              </td>
              <td class="list-item" :data-head="tableHead.price">{{ item.final_total | currency }}</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex">
          <h5 class="price-tag text-success">Price: {{ Math.round(orders.total) | currency }}</h5>
        </div>
        <div class="user-info">
          <div>
            <h5>Email: </h5> <p>{{ orders.user.email }}</p>
          </div>
          <div>
            <h5>Name: </h5>
            <p>{{orders.user.name}}</p>
          </div>
          <div>
            <h5>Phone number: </h5>
            <p>{{orders.user.tel}}</p>
          </div>
          <div>
            <h5>Billing Address: </h5>
            <p>{{orders.user.address}}</p>
          </div>
          <div>
            <span v-if="!orders.is_paid" class="text-danger">Not Complete</span>
            <span v-else class="text-success">Completed</span>
          </div>
        </div>
        <!-- <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ orders.user.email }}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{{ orders.user.name }}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{{ orders.user.tel }}</td>
            </tr>
            <tr>
              <th>Billing Address</th>
              <td>{{ orders.user.address }}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>
                <span v-if="!orders.is_paid" class="text-danger">Not Complete</span>
                <span v-else class="text-success">Completed</span>
              </td>
            </tr>
          </tbody>
        </table> -->
        <div class="text-right">
          <button class="comfirm-btn" v-if="orders.is_paid == false">
            Payment Confirm
          </button>
        </div>
      </form>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="loadingModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body loading-modal text-center">
            <div class="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h3 class="loading-text">{{ loadingMessage }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      tableHead: {
        product: 'Products',
        quantity: 'Quantity',
        price: 'Price'
      },
      orderId: '',
      orders: {
        products: {},
        user: {}
      },
      loadingMessage: ''
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/order/${vm.orderId}` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.get(api).then(response => {
        vm.orders = response.data.order
      })
    },
    payConfirm () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/pay/${vm.orderId}`// 'https://vue-course-api.hexschool.io/api/eric840906/products'
      $('#loadingModal').modal('show')
      vm.loadingMessage = 'Sending Order'
      vm.$http.post(api).then(response => {
        if (response.data.success) {
          vm.loadingMessage = 'Payment comfirmed, back to homepage'
          setTimeout(() => $('#loadingModal').modal('hide'), 1000)
          vm.getOrder()
          setTimeout(() => vm.$router.push('/'), 2000)
        } else {
          vm.loadingMessage = 'Connection fail'
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId // 這裡的$router.params.orderId是對應到我們在index.js的customercheckout後面自定義的動態orderId(就是訂單建立後給的ID)
    this.getOrder()
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/customBtn';

.mt-100 {
  margin-top: 100px;
}
.price-tag{
  width: 100%;
  text-align: end;
}
.comfirm-btn{
  @extend %no-hover-btn;
  border-radius: 0.15rem;
  padding: 5px;
}
.comfirm-list{
  display: flex;
  justify-content: center;
}
.shop-list{
  width: 100%;
  text-align: left;
  margin-top: 15px;
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
}

//loading effect
.loading-modal {
  background-color: $black;
  .loading-text {
    font-family: 'Berkshire Swash', cursive;
    color: $white;
  }
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: $white;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: $white;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
