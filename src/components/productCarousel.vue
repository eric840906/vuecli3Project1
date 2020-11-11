<template>
  <div style="position:relative;">
    <a href="#" class="outer-product-control-left" @click.prevent='scrollLeft()'><font-awesome-icon :icon="['fas', 'chevron-left']" style="height: 100%;" /></a>
    <a href="#" class="outer-product-control-right" @click.prevent='scrollRight()'><font-awesome-icon :icon="['fas', 'chevron-right']" style="height: 100%;" /></a>
    <div class="product-cards">
      <div class="product-carousel">
        <div class="row">
          <div v-for="item in carouselInfo" :key="item.id" class="product-card">
            <img
              :src="item.imageUrl"
              class="card-img-top"
              alt=""
            />
            <h5 class="product-title">{{item.title}}</h5>
            <p class="card-text">
              {{item.description}}
            </p>
            <a class="product-links" href="#" @click="pageMove(item.id)">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size', 'carouselInfo', 'show'],
  data () {
    return {
      transitionName: ''
    }
  },
  methods: {
    carouselChange (change, transitionName) {
      this.$emit('changeCarousel', change)
      this.transitionName = transitionName
    },
    setShow (num) {
      this.$emit('showCarousel', num)
    },
    scrollLeft () {
      const scroll = this.$el.lastElementChild.scrollLeft - (this.$el.lastElementChild.offsetWidth)
      const width = this.$el.lastElementChild.offsetWidth
      const scrollTo = scroll === -width ? 30000 : scroll
      this.$el.lastElementChild.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    },
    scrollRight () {
      const singleLength = this.$el.lastElementChild.firstElementChild.firstElementChild.children[0].offsetWidth
      const cardsNumber = this.$el.lastElementChild.firstElementChild.firstElementChild.children.length
      const totalWidth = singleLength * cardsNumber
      const scroll = this.$el.lastElementChild.scrollLeft + (this.$el.lastElementChild.offsetWidth)
      const width = this.$el.lastElementChild.offsetWidth
      console.log('a=' + this.$el.lastElementChild.scrollLeft)
      console.log('b=' + this.$el.lastElementChild.offsetWidth)
      console.log('width=' + width + ',' + 'scroll=' + Math.ceil(scroll))
      console.log('totalwidth=' + totalWidth)
      const scrollTo = scroll + cardsNumber >= totalWidth ? -width : scroll
      this.$el.lastElementChild.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    },
    pageMove (id) {
      this.$emit('movePage', id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';

%control-arrow{
  font-size: 50px;
  color: #0000003d;
  opacity: 1;
  position: absolute;
  transition: 0.5s all;
  animation: arrow-flash infinite 1s;
}
.outer-product-control-left{
  @extend %control-arrow;
  top: -62px;
  right: 64px;
  @media (max-width: 425px) {
    left: 0;
  }
}
.outer-product-control-right{
  @extend %control-arrow;
  top: -62px;
  right: 0;
  @media (max-width: 425px) {
  }
}
.product-control-left{
  @extend %control-arrow;
  top: 0;
  left: 0;
}
.product-control-right{
  @extend %control-arrow;
  top: 0;
  right: 0;
}
@keyframes arrow-flash {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
  .product-carousel{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .row{
      flex-wrap: nowrap;
      width: 100%;
    }
  }
  .product-cards{
    overflow: hidden;
    position: relative;
    text-align: center;
    .product-card{
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 400px;
      flex: 0 0 32%;
      justify-content: space-between;
      margin: 0.68%;
      padding: 10px;
      border: 5px double $border-color;
      background-color: $lighter-background;
      color: $link-text;
      @media (max-width:425px) {
        border: none;
      }
    img{
      margin: 20px;
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
    .product-title{
      margin: 0.75rem;
    }
    .product-links{
      width: 100%;
      display: block;
      justify-content: space-around;
      background: $background;
      padding: 0 1.25rem;
      border: none;
      font-size: 16px;
      padding: 7px;
      color: lighten($background,65%);
      &:hover{
          color: $link-text-hover
        }
    }
    }
  }
  .indicators{
    display: flex;
    justify-content: center;
    .indicator{
      transition: 0.5s all;
      width: 10px;
      height: 10px;
      border-radius: 20px;
      background-color: darken($lighter-background, 12%);
      margin: 6px;
    }
    .active{
      background-color: $darker-text-color !important;
    }
  }
  .card-footer {
    font-size: xx-large;
    background: $yellow;
    a {
      color: $black;
      transition: ease-out 0.3s;
      &:hover {
        color: #e9d2b1;
      }
    }
  }
  .position {
    background-color: white;
    text-align: center;
    padding: 5px 8px;
    color: $black;
    width: 50%;
    border: 5px double $yellow;
    border-top: none;
    box-shadow: 0px -9px 0px 3px #ffffff;
  }
  @media (max-width: 425px) {
    .product-cards{
      overflow-x: auto;
      overflow-y: hidden;
      .product-carousel{
        flex-wrap: nowrap;
        justify-content: center;
        .product-card{
          max-width: 100%;
          flex: 0 0 100%;
          margin: 0;
        }
      }
    }
  }
</style>
