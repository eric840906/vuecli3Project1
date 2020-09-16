<template>
  <div>
    <Alert></Alert>
    <Navbar></Navbar>
    <main role="main">
      <section
        class="jumbotron text-center"
        style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1573991288363-aa2067bc6a73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80); background-size: cover; background-position: center;"
      >
        <div class="page-title">
          <h1
            style="color: cornsilk;"
          >
            Choose Your Favourites
          </h1>
          <br />
          <h1 class="lead"></h1>
        </div>
      </section>

      <div class="album pt-5 bg-light">
        <div class="container">
          <router-view></router-view>
        </div>
        <Footer></Footer>
        <GoTop></GoTop>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/HomeNav.vue'
import GoTop from '../components/GoTop.vue'
import Alert from '../components/Alert.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    GoTop,
    Alert,
    Footer
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
body {
  font-family: 'Berkshire Swash', cursive;
}

.border-right {
  border-right: 1px solid $black;
}

.card-footer {
  padding: 0;
}
.page-title {
  color: $black;
  padding: 96px 0;
  background-image: radial-gradient(#f0b3b3a8, #ffffff00);
}

.top-select {
  display: none;
  .top-select-item {
    .active {
      border: 1px solid $black;
    }
  }
}
</style>
