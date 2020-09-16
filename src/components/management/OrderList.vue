<template>
  <div>
    <table class="table mt-4">
      <thead>
        <th width="120">購買時間</th>
        <th width="80">email</th>
        <th class="text-right">購買品項</th>
        <th width="120" class="text-right">應付金額</th>
        <th width="120">是否付款</th>
        <th width="80"></th>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.create_at }}</td>
          <td>{{ item.user.email }}</td>
          <td class="text-right">
            <div v-for="item in item.products" :key="item.id">
              {{ item.product.title }}{{ item.product.num }}{{ item.product.unit }}
            </div>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-danger">未付款</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(item)"
            >
              修改訂單
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pageInfo="pagination" @pageChange="getOrderList"></Pagination>

    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <div class="form-row">
                  <div class="form-group col">
                    <label for="title">優惠名稱</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="輸入優惠名稱"
                    />
                  </div>
                  <div class="form-group col">
                    <label for="category">折扣</label>
                    <input
                      type="number"
                      class="form-control"
                      id="category"
                      placeholder="輸入折扣(%off)"
                    />
                  </div>
                  <div class="form-group col">
                    <label for="price">使用期限</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="yyyy-mm-dd"
                    />
                  </div>
                  <div class="form-group col">
                    <label for="price">優惠代碼</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="輸入優惠代碼"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="editList()">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from './Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      orderId: '',
      orders: {
        products: {},
        user: {
          email: ''
        }
      },
      pagination: {},
      tempOrder: {}
    }
  },
  methods: {
    getOrderList (page = 1) {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/orders?page=${page}` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.get(api).then(response => {
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
        vm.isLoading = false
      })
    },
    editList (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/order/${id}` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.put(api, { data: vm.tempOrder }).then(response => {
        vm.temporder = response.data
      })
    },
    openModal (item) {
      this.tempOrder = Object.assign({}, item)
      $('#orderModal').modal('show')
    }
  },
  created () {
    this.getOrderList()
  }
}
</script>
