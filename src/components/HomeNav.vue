<template>
  <div style="font-family: 'Tangerine', cursive;">
    <header>
      <nav class="main-nav navbar navbar-expand-md navbar-dark fixed-top black" style="width: 100%;">
        <a
          class="navbar-brand"
          href="#"
          >Lächeln</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto top-links">
            <router-link class="nav-item nav-link" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/shoppage/shoppingmain"
              >Products</router-link
            >
            <router-link class="nav-item nav-link" to="/couponjackpot"
              >Coupons</router-link
            >
            <router-link class="nav-item nav-link" to="/storeinfo"
              >Store Info</router-link
            >
            <router-link class="nav-item nav-link" to="/contact"
              >Contact Us</router-link
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('.main-nav').addClass('top-nav')
      } else {
        $('.main-nav').removeClass('top-nav')
      }
    })
  }
}
</script>

<style lang="scss">
.top-links {
  font-size: 25px;
}
.navbar-brand {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 30px;
}

.black {
  background-color: black;
  transition: 0.5s;
}

.top-nav {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
