<template>
  <div>
    <div class="gotopframe" @click="goTop">
      <font-awesome-icon class="gotopicon" :icon="['fas', 'angle-double-up']"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
.gotopframe {
  z-index: 1000;
  border: 1px solid $black;
  background-color: $white;
  border-radius: 153px;
  height: 50px;
  width: 50px;
  position: fixed;
  left: 20px;
  bottom: 20px;
  box-shadow: 0px 0px 11px $black;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  .gotopicon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: $black;
  }

  &:hover {
    box-shadow: 0px 0px 11px $white;
    .gotopicon {
      color: $yellow;
    }
  }
}
</style>
