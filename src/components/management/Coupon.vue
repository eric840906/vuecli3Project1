<template>
  <div>
    <div class="text-right mt-4">
      <button
        class="btn btn-outline-success btn-sm"
        type="button"
        @click="openModal('isNew')"
      >
        建立優惠券
      </button>
    </div>
    <table class="table" style="margin: 30px auto; width:70%">
      <thead>
        <th></th>
        <th>名稱</th>
        <th>折扣</th>
        <th>啟用</th>
        <th>優惠代碼</th>
        <th class="text-right">期限</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteCoupon(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.title }}
          </td>
          <td class="align-middle">{{ item.percent }}%off</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td class="align-middle">{{ item.code }}</td>
          <td class="align-middle text-right">{{ item.due_date }}</td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal('isEdit', item)"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pageInfo="pagination" @pageChange="getCoupon"></Pagination>

    <div
      class="modal fade"
      id="couponModal"
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
                      v-model="tempCoupon.title"
                    />
                  </div>
                  <div class="form-group col">
                    <label for="category">折扣</label>
                    <input
                      type="number"
                      class="form-control"
                      id="category"
                      placeholder="輸入折扣(%off)"
                      v-model="tempCoupon.percent"
                    />
                  </div>
                  <div class="form-group col">
                    <label for="price">使用期限</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="yyyy-mm-dd"
                      v-model="tempCoupon.due_date"
                    />
                  </div>
                  <div class="form-group col">
                    <label for="price">優惠代碼</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="輸入優惠代碼"
                      v-model="tempCoupon.code"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempCoupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
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
            <button type="button" class="btn btn-primary" @click="addCoupon">
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
      coupons: [],
      tempCoupon: {},
      isNew: false,
      pagination: {}
    }
  },
  methods: {
    getCoupon (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/admin/coupons?page=${page}`
      vm.$http.get(api).then(response => {
        vm.coupons = response.data.coupons
        vm.pagination = response.data.pagination
      })
    },
    addCoupon () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/admin/coupon`
      let httpMedthod = 'post'
      vm.due_date = new Date(vm.due_date).getTime()
      if (!vm.isNew) {
        httpMedthod = 'put'
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/admin/coupon/${vm.tempCoupon.id}`
        // 把vm.tempCoupon包起來加一個data屬性符合目標api的資料格式才不會出錯
        vm.$http[httpMedthod](api, {
          data: vm.tempCoupon
        }).then(response => {})
      }
      vm.$http[httpMedthod](api, { data: vm.tempCoupon }).then(response => {
        if (response.data.success) {
          $('#couponModal').modal('hide')
          vm.getCoupon()
        } else {
          $('#couponModal').modal('hide')
          vm.getCoupon()
          vm.$bus.$emit('message:push', '新增失敗', 'danger')
        }
      })
    },
    deleteCoupon (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/admin/coupon/${id}`
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.getCoupon()
          $('#delProductModal').modal('hide')
        }
      })
    },
    openModal (status, item) {
      switch (status) {
        case 'isNew':
          this.tempCoupon = {}
          this.isNew = true
          $('#couponModal').modal('show')
          break
        case 'isEdit':
          this.tempCoupon = Object.assign({}, item)
          $('#couponModal').modal('show')
          break
      }
    }
  },
  created () {
    this.getCoupon()
  }
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
