<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.description }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <!-- <div class="h5">2,800 元</div> -->
              <del class="h6">原價 {{ item.origin_price }} 元</del>
              <div class="h5">現在只要 {{ item.price }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="productStatus.loading == item.id"
              ></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addCart(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="productStatus.loading == item.id"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
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
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
          </div>
          <div class="d-flex justify-content-between align-items-baseline">
            <h4 v-if="!product.price">{{ product.origin_price }}</h4>
            <del class="h6" v-if="product.price"
              >原價{{ product.origin_price }}元</del
            >
            <h4 v-if="product.price">現在只要{{ product.price }}元</h4>
          </div>
          <select name="" class="form-control" v-model="product.num">
            <option v-for="item in 10" :value="item" :key="item"
              >選購{{ item }}{{ product.unit }}</option
            >
          </select>
          <div class="modal-footer">
            <div class="text-mute text-nowrap mr-3">
              小計{{ product.num * product.price }}元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addCart(product.id, product.num)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <table class="table" style="margin: 30px auto; width:70%">
      <thead>
        <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>價格</th>
      </thead>
      <tbody>
        <tr v-for="item in cartList.data.carts" :key="item.id">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCart(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">
              已套用優惠券
            </div>
          </td>
          <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
          <td class="align-middle text-right">{{ item.final_total }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">總計</td>
          <td class="text-right">{{ cartList.data.total }}</td>
        </tr>
        <tr v-if="cartList.data.total != cartList.data.final_total">
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="text-right text-success">
            {{ cartList.data.final_total }}
          </td>
        </tr>
      </tfoot>
    </table>
    <div
      class="input-group mb-3 input-group-sm"
      style="margin: auto; width: 70%;"
    >
      <input
        type="text"
        class="form-control"
        placeholder="請輸入優惠碼"
        v-model="coupon_code"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="applyCoupon"
        >
          套用優惠碼
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      products: [],
      product: {},
      productStatus: {
        loading: ""
      },
      cartList: {
        data: {} //沒事先訂義的話會跳錯誤說carts undefined(雖然還是抓得到資料啦)
      },
      coupon_code: ""
    };
  },
  methods: {
    getProducts(page = 1) {
      //參數直接寫page=1代表page預設值為1

      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/products`; //'https://vue-course-api.hexschool.io/api/eric840906/products'
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
      });
    },
    getProduct(id) {
      const vm = this;
      vm.productStatus.loading = id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/product/${id}`;
      this.$http.get(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.product = response.data.product;
          vm.productStatus.loading = "";
          $("#productModal").modal("show");
        }
      });
    },
    addCart(id, qty = 1) {
      const vm = this;
      vm.productStatus.loading = id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.productStatus.loading = "";
          this.getCart();
        } else {
          alert("加入失敗");
          vm.productStatus.loading = "";
        }
      });
    },
    getCart() {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart` //'https://vue-course-api.hexschool.io/api/eric840906/products'
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.cartList = response.data;
      });
    },
    removeCart(id) {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/cart/${id}`
      this.$http.delete(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          console.log("刪除成功");
          this.getCart();
        }
      });
    },
    applyCoupon() {
      const vm = this;
      const coupon = {
        code: vm.coupon_code
      };
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/coupon`; //'https://vue-course-api.hexschool.io/api/eric840906/products'
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response);
        vm.isLoading = true;
        if (response.data.success) {
          vm.getCart();
          vm.isLoading = false;
          this.$bus.$emit("message:push", "優惠碼套用成功", "success");
        } else {
          vm.isLoading = false;
          this.$bus.$emit("message:push", "查無優惠碼", "danger");
        }
      });
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>

<style lang="scss">
.row {
  margin-top: 4px;
}
</style>
