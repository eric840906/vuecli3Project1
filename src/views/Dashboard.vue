<template>
  <div>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/management/Sidebar'
import Alert from '../components/Alert.vue'

export default {
  components: {
    Sidebar,
    Alert
  }
}
</script>
