<template>
  <div>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-md-4 mr-sm-auto mt-100"
        >
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'

export default {
  components: {
    Alert
  }
}
</script>

<style lang="scss" scope>
</style>
