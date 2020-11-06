<template>
  <div id="app">
     <Navbar></Navbar>
    <div style="padding-top: 6vh;"></div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/HomeNav.vue'
export default {
  components: {
    Navbar
  },
  created () {
  }
}

</script>
<style lang="scss">
@import "@/assets/all/all.scss";
* {
  font-family: 'Berkshire Swash', cursive;
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
    transition-duration: .25s;
  }

.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter{
  opacity: 0;
  transform: translateX(-200px);
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(200px);
}
</style>
