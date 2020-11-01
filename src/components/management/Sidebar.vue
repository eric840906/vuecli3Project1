<template>
  <div>
    <nav id="sidebarMenu" class="d-md-block bg-light sidebar collapse">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>管理員</span>
        <a
          class="d-flex align-items-center text-muted"
          href="#"
          aria-label="Add a new report"
        >
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products"
            ><i class="fas fa-box-open"></i>產品列表</router-link
          >
        </li>
      </ul>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orderlist"
            ><i class="fas fa-clipboard-list"></i>訂單列表</router-link
          >
        </li>
      </ul>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupon"
            ><i class="fas fa-ticket-alt"></i>優惠券</router-link
          >
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>模擬功能</span>
        <a
          class="d-flex align-items-center text-muted"
          href="#"
          aria-label="Add a new report"
        >
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/customerorder"
            ><i class="fas fa-cart-plus"></i>模擬訂單</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/customercheckout"
            ><i class="fas fa-cart-plus"></i>模擬結帳</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/commentmanage"
            ><i class="fas fa-cart-plus"></i>留言管理</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>
