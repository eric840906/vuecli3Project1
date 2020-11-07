<template>
  <div id="app">
     <Navbar></Navbar>
    <div style="padding-top: 8vh;"></div>
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
  transform: translateX(-400px);
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(400px);
}

.faderev-enter-active, .faderev-leave-active {
    transition: all 0.3s;
    transition-duration: .25s;
  }

.faderev-enter-active {
  transition-delay: .25s;
}
.faderev-enter{
  opacity: 0;
  transform: translateX(400px);
}
.faderev-leave-active {
  opacity: 0;
  transform: translateX(-400px);
}

.trans-enter-active, .trans-leave-active {
    transition: all 0.3s;
    transition-duration: .25s;
  }

.trans-enter-active {
  transition-delay: .15s;
}
.trans-enter{
  opacity: 0;
  transform: scale(2)
}
.trans-leave-active {
  opacity: 0;
  transform: scale(0)
}

.vanish-enter-active, .vanish-leave-active {
    transition: all 0.3s;
  }

.vanish-enter-active {
  transition-delay: 0.3s;
}
.vanish-enter{
  transform: rotate3d(0, 1, 0, 90deg);
  opacity: 0;
}
.vanish-leave-active {
  transform: rotate3d(0, 1, 0, 90deg);
  opacity: 0;
}

.flip-enter-active, .flip-leave-active{
    transition: all 0.3s;
  }
.flip-enter-active{
  transition-delay: 0.3s;
}
.flip-enter {
  transform: rotate3d(0, 1, 0, 90deg);
}
.flip-leave-active {
  transform: rotate3d(0, 1, 0, 90deg);
}
</style>
