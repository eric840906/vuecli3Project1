<template>
  <div>
    <transition name="page" mode="out-in">
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
