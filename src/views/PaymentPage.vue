<template>
  <div>
    <Alert></Alert>
    <Banner :picture="bannerImg" :title="pageTitle"></Banner>
    <main role="main" class="col-md-12">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    Alert,
    Banner
  },
  data () {
    return {
      bannerImg: {
        backgroundImage: "url('https://images.unsplash.com/photo-1519358349916-caa235110a80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
      },
      pageTitle: 'Enjoy'
    }
  }
}
</script>

<style lang="scss" scope>
</style>
