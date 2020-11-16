<template>
  <div>
    <div class="gotop-btn" @click="goTop">
      <font-awesome-icon class="icon" :icon="['fas', 'angle-double-up']"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/customBtn.scss';
.gotop-btn{
  @extend %fixed-btn;
  left: 10px;
}
</style>
