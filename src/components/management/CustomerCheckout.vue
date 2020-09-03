<template>
  <div>
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payConfirm">
        <table class="table">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in orders.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ orders.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ orders.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ orders.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ orders.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ orders.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!orders.is_paid" class="text-danger">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <button class="btn btn-danger" v-if="orders.is_paid == false">
            確認付款去
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: "",
      orders: {
        products: {},
        user: {}
      }
    };
  },
  methods: {
    getOrder () {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/order/${vm.orderId}` //'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.get(api).then(response => {
        vm.orders = response.data.order
      })
    },
    payConfirm () {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/pay/${vm.orderId}`; //'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.post(api).then(response => {
        if (response.data.success) {
          this.getOrder();
        }
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId; //這裡的$router.params.orderId是對應到我們在index.js的customercheckout後面自訂義的動態orderId(就是訂單建立後給的ID)
    this.getOrder();
  }
};
</script>
