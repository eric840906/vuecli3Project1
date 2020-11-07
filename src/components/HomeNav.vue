<template>
  <div>
    <header>
      <nav class="main-nav navbar navbar-expand-md navbar-dark fixed-top bg-black" style="width: 100%;">
        <a
          class="logo"
          href="#"
          style="font-family: 'Tangerine', cursive"
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
        $('.main-nav').addClass('bg-trans-bl')
      } else {
        $('.main-nav').removeClass('bg-trans-bl')
      }
    })
  }
}
</script>

<style lang="scss">

.logo{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 30px;
  &:hover{
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
  }
}
.top-links {
  font-size: 18px;
}
.navbar-brand {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 30px;
}
.main-nav{
  height: 8vh;
  transition: 0.5s;
}

</style>
