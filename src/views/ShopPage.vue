<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <Banner :picture="bannerImg" :title="pageTitle"></Banner>
      <div class="container" style="padding-top: 60px;">
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
      <!-- <section class="banner"
        :style="bannerImg">
        <div class="page-title">
          <h1>{{pageTitle}}</h1>
          <br />
          <h1 class="lead"></h1>
        </div>
      </section> -->
      <!-- <div class="album pt-5"> -->
        <!-- <div class="container"> -->
        <!-- </div> -->
        <GoTop></GoTop>
      <!-- </div> -->
    </main>
  </div>
</template>

<script>
import GoTop from '../components/GoTop.vue'
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    GoTop,
    Alert,
    Banner
  },
  data () {
    return {
      bannerImg: {
        backgroundImage: "url('https://images.unsplash.com/photo-1573991288363-aa2067bc6a73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
      },
      pageTitle: 'Choose Your Favourites'
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
.border-right {
  border-right: 1px solid $black;
}

.card-footer {
  padding: 0;
}
</style>
