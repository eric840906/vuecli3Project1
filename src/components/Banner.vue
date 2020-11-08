<template>
  <div>
    <section class="banner"
        :style="picture">
        <div class="page-title">
          <h1>{{title}}</h1>
          <br />
          <h1 class="lead"></h1>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  props: ['picture', 'title']
}
</script>

<style lang="scss">
@import 'src/assets/helpers/functionColors';
.banner{
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
}
.page-title {
  display: flex;
  flex: 0 0 100%;
  text-align: center;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #0000007d;
  color: $lighter-background;
}
</style>
