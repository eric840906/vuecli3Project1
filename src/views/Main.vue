<template>
  <div>
    <transition name="page">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
