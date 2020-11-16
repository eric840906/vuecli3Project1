<template>
  <div>
    <div class="staff-cards" v-if="size > 425">
      <div class="staff-carousel">
        <div v-for="item in carouselInfo" :key="item.name" class="staff-card">
          <h6 class="position">{{item.position}}</h6>
          <img
            :src="item.profile"
            class="card-img-top"
            alt=""
          />
          <h5 class="staff-title">{{item.name}}</h5>
          <p class="card-text">
            {{item.intro}}
          </p>
          <div class="staff-links">
            <a href=""
              ><font-awesome-icon :icon="['fab', 'facebook']"
            /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'twitter']"/></a>
            <a href=""
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="staff-cards" v-else>
      <div class="staff-carousel">
        <a href="#" class="staff-control-left" @click.prevent='carouselChange(-1)'><font-awesome-icon :icon="['fas', 'chevron-left']" style="height: 100%;" /></a>
        <a href="#" class="staff-control-right" @click.prevent='carouselChange(+1)'><font-awesome-icon :icon="['fas', 'chevron-right']" style="height: 100%;" /></a>
        <transition name="flip">
          <div :key="carouselInfo[show].profile" class="staff-card">
              <h6 class="position">{{carouselInfo[show].position}}</h6>
              <img
                :src="carouselInfo[show].profile"
                class="card-img-top"
                alt=""
              />
              <h5 :key="carouselInfo[show].name" class="card-title">{{carouselInfo[show].name}}</h5>
              <p :key="carouselInfo[show].intro" class="card-text">
                {{carouselInfo[show].intro}}
              </p>
              <div :key="show" class="staff-links">
                <a href=""
                  ><font-awesome-icon :icon="['fab', 'facebook']"
                /></a>
                <a href=""><font-awesome-icon :icon="['fab', 'twitter']"/></a>
                <a href=""
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </div>
          </div>
        </transition>
      </div>
      <div class="indicators">
        <div class="indicator" v-for="num in carouselInfo.length" :key="num" :class="{'active': show===num-1}" @click.prevent="setShow(num-1)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size', 'carouselInfo', 'show'],
  methods: {
    carouselChange (change) {
      this.$emit('changeCarousel', change)
    },
    setShow (num) {
      this.$emit('showCarousel', num)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';

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

%control-arrow{
  font-size: 50px;
  color: #0000003d;
  opacity: 1;
  top: 0;
  position: absolute;
  transition: 0.5s all;
  animation: arrow-flash infinite 1s;
}
.staff-control-left{
  @extend %control-arrow;
  left: 0;
}
.staff-control-right{
  @extend %control-arrow;
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
  .staff-carousel{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .staff-cards{
    position: relative;
    text-align: center;
    .staff-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 285px;
    height: 60vh;
    flex: 0 0 25.333333%;
    margin: 10px;
    border: 5px double $yellow;
    background-color: $card-base;
    color: $card-background;
    img{
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
    .staff-title{
      margin: 0.75rem;
    }
    .staff-links{
      width: 100%;
      display: flex;
      justify-content: space-around;
      background: $card-footer-background;
      padding: 0 1.25rem;
      border: none;
      font-size: xx-large;
      a{
        color: $card-footer-link;
        &:hover{
          color: $card-footer-link-hover
        }
      }
    }
    }
  }
  .indicators{
    display: flex;
    justify-content: center;
    .indicator{
      transition: 0.5s all;
      width: 50px;
      height: 2px;
      background-color: darken($lighter-background, 12%);
      margin: 20px;
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
    background-color: $lighter-background;
    text-align: center;
    padding: 5px 8px;
    color: $black;
    width: 50%;
    border: 5px double $yellow;
    border-top: none;
    box-shadow: 0px -9px 0px 3px $lighter-background;
  }
  @media (max-width: 425px) {
    .staff-cards{
      overflow-x: auto;
      overflow-y: hidden;
      .staff-carousel{
        flex-wrap: nowrap;
        justify-content: space-between;
        .staff-card{
          max-width: 100%;
          flex: 0 0 100%;
          margin: 0;
        }
      }
    }
  }
</style>
