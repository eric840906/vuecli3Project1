<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <Banner :picture="bannerImg" :title="pageTitle"></Banner>
      <div class="album py-5">
        <div class="container">
          <div class="window-cards card-deck mb-3 text-center justify-content-center">
            <div class="card mb-4 shadow-sm" v-for="item in randomCoupons" :key="item.id">
              <div class="front face"></div>
              <div class="back">
                <div
                  class="card-header"
                  :class="{
                    'small-discount-title': item.discount <= 20,
                    'big-discount-title': item.discount >= 50,
                    'normal-discount-title':
                      item.discount < 50 && item.discount > 20
                  }"
                >
                  <h4 class="my-0 font-weight-normal">
                    {{ item.title }}
                  </h4>
                </div>
                <div
                  class="card-body"
                  :class="{
                    'small-discount-title': item.discount <= 20,
                    'big-discount-title': item.discount >= 50,
                    'normal-discount-title':
                      item.discount < 50 && item.discount > 20
                  }"
                >
                  <h1 class="card-title pricing-card-title">
                    {{ item.discount }}%off
                  </h1>
                  <h2>Coupon Code</h2>
                  <input
                    type="text"
                    class="code"
                    :value="item.code"
                    readonly="readonly"
                  />
                  <h3>Expiration:{{ item.due_date }}</h3>
                  <a
                    class="btn btn-lg notice-btn"
                    @click.prevent="copyCode"
                    >Copy</a
                  >
                  <router-link
                  class="btn btn-lg notice-btn"
                  to="/shoppingmain"
                  >Shopping</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="responsive-cards card-deck mb-3 text-center justify-content-center">
            <div id="carouselCards" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselCards" data-slide-to="0" class="active"></li>
                <li data-target="#carouselCards" data-slide-to="1"></li>
                <li data-target="#carouselCards" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="card mb-4 shadow-sm">
                    <div class="front face"></div>
                    <div class="back">
                      <div
                        class="card-header"
                        :class="{
                          'small-discount-title': randomCoupons[0].discount <= 20,
                          'big-discount-title': randomCoupons[0].discount >= 50,
                          'normal-discount-title':
                            randomCoupons[0].discount < 50 && randomCoupons[0].discount > 20
                        }"
                      >
                        <h4 class="my-0 font-weight-normal">
                          {{ randomCoupons[0].title }}
                        </h4>
                      </div>
                      <div
                        class="card-body"
                        :class="{
                          'small-discount-title': randomCoupons[0].discount <= 20,
                          'big-discount-title': randomCoupons[0].discount >= 50,
                          'normal-discount-title':
                            randomCoupons[0].discount < 50 && randomCoupons[0].discount > 20
                        }"
                      >
                        <h1 class="card-title pricing-card-title">
                          {{ randomCoupons[0].discount }}%off
                        </h1>
                        <h2>Coupon Code</h2>
                        <input
                          type="text"
                          class="code"
                          :value="randomCoupons[0].code"
                          readonly="readonly"
                        />
                        <h3>Expiration:{{ randomCoupons[0].due_date }}</h3>
                        <a
                          class="btn btn-lg notice-btn"
                          @click.prevent="copyCode"
                          >Copy</a
                        >
                        <router-link
                          class="btn btn-lg notice-btn"
                          to="/shoppingmain"
                          >Shopping</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card mb-4 shadow-sm">
                    <div class="front face"></div>
                    <div class="back">
                      <div
                        class="card-header"
                        :class="{
                          'small-discount-title': randomCoupons[1].discount <= 20,
                          'big-discount-title': randomCoupons[1].discount >= 50,
                          'normal-discount-title':
                            randomCoupons[1].discount < 50 && randomCoupons[1].discount > 20
                        }"
                      >
                        <h4 class="my-0 font-weight-normal">
                          {{ randomCoupons[1].title }}
                        </h4>
                      </div>
                      <div
                        class="card-body"
                        :class="{
                          'small-discount-title': randomCoupons[1].discount <= 20,
                          'big-discount-title': randomCoupons[1].discount >= 50,
                          'normal-discount-title':
                            randomCoupons[1].discount < 50 && randomCoupons[0].discount > 20
                        }"
                      >
                        <h1 class="card-title pricing-card-title">
                          {{ randomCoupons[1].discount }}%off
                        </h1>
                        <h2>Coupon Code</h2>
                        <input
                          type="text"
                          class="code"
                          :value="randomCoupons[1].code"
                          readonly="readonly"
                        />
                        <h3>Expiration:{{ randomCoupons[1].due_date }}</h3>
                        <a
                          class="btn btn-lg notice-btn"
                          @click.prevent="copyCode"
                          >Copy</a
                        >
                        <router-link
                          class="btn btn-lg notice-btn"
                          to="/shoppingmain"
                          >Shopping</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card mb-4 shadow-sm">
                    <div class="front face"></div>
                    <div class="back">
                      <div
                        class="card-header"
                        :class="{
                          'small-discount-title': randomCoupons[2].discount <= 20,
                          'big-discount-title': randomCoupons[2].discount >= 50,
                          'normal-discount-title':
                            randomCoupons[2].discount < 50 && randomCoupons[0].discount > 20
                        }"
                      >
                        <h4 class="my-0 font-weight-normal">
                          {{ randomCoupons[2].title }}
                        </h4>
                      </div>
                      <div
                        class="card-body"
                        :class="{
                          'small-discount-title': randomCoupons[2].discount <= 20,
                          'big-discount-title': randomCoupons[2].discount >= 50,
                          'normal-discount-title':
                            randomCoupons[2].discount < 50 && randomCoupons[2].discount > 20
                        }"
                      >
                        <h1 class="card-title pricing-card-title">
                          {{ randomCoupons[2].discount }}%off
                        </h1>
                        <h2>Coupon Code</h2>
                        <input
                          type="text"
                          class="code"
                          :value="randomCoupons[2].code"
                          readonly="readonly"
                        />
                        <h3>Expiration:{{ randomCoupons[2].due_date }}</h3>
                        <a
                          class="btn btn-lg notice-btn"
                          @click.prevent="copyCode"
                          >Copy</a
                        >
                        <router-link
                          class="btn btn-lg notice-btn"
                          to="/shoppingmain"
                          >Shopping</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal -->
    <div
      class="modal fade"
      id="start-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body start-modal text-center">
            <div class="lds-circle"><div></div></div>
            <h3 class="loading-text">Grab a Coupon!</h3>
            <h3 class="loading-text">Click to try your luck</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'
export default {
  components: {
    Alert,
    Banner
  },
  data () {
    return {
      bannerImg: {
        backgroundImage: "url('https://images.unsplash.com/photo-1577218546063-5e53e820851e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')"
      },
      pageTitle: 'Get the party started',
      coupons: [
        {
          due_date: '2020-09-06',
          code: 'FpNm9d49syE',
          discount: 30,
          title: 'Anniversary'
        },
        {
          due_date: '2020-08-31',
          code: 'Si7e98g1IqhY',
          discount: 20,
          title: 'Summer Time'
        },
        {
          due_date: '2020-08-02',
          code: 'yDh7e1sU5Kj',
          discount: 10,
          title: 'Summer Sale'
        },
        {
          due_date: '2020-08-31',
          code: 'GtyH8tAfl6k',
          discount: 5,
          title: 'Cool Down'
        },
        {
          due_date: '2020-12-31',
          code: 'ht37YWRtyrjU',
          discount: 50,
          title: 'Big Win'
        },
        {
          due_date: '2020-12-31',
          code: 'JGd5u0EjkA',
          discount: 30,
          title: 'Second Prize'
        },
        {
          due_date: '2020-12-31',
          code: 'fH1tK8pd6B',
          discount: 25,
          title: 'Third'
        }
      ],
      shuffleCoupons: '',
      comparisonA: '',
      comparisonB: '',
      randomCoupons: []
    }
  },
  methods: {
    randomSort (a, b) {
      const vm = this
      // 如果原陣列arr的length值等於1時，原陣列只有一個值，其鍵值為0
      // 同時將這個值push到新陣列newArr中
      // if(arr.length == 1) {
      // newArr.push(arr[0]);
      // return newArr; // 相當於遞迴退出
      // }
      // // 在原陣列length基礎上取出一個隨機數
      // let random = Math.ceil(Math.random() * arr.length) - 1;
      // // 將原陣列中的隨機一個值push到新陣列newArr中
      // newArr.push(arr[random]);
      // // 對應刪除原陣列arr的對應陣列項

      // return randomSort(arr, newArr);
      vm.shuffleCoupons = Math.random() > 0.5 ? -1 : 1
    },
    shuffleCoupon () {
      const vm = this
      vm.coupons.sort(function () {
        vm.comparisonA = Math.random()
        vm.comparisonB = Math.random()
        if (vm.comparisonA > vm.comparisonB) {
          return -1
        }
        if (vm.comparisonA < vm.comparisonB) {
          return 1
        }
        // a must be equal to b
        return 0
      })
    },
    getCoupon () {
      const vm = this
      for (let i = 0; i < 3; i++) {
        const a = parseInt(Math.random() * 7)
        vm.randomCoupons.push(vm.coupons[a])
      }
    },
    startDrawing () {
      $('.start-btn').fadeOut()
      $('.card-deck').fadeIn()
    },
    copyCode (e) {
      const couponCode = $(e.currentTarget)
        .closest('.card-body')
        .find('.code')
      couponCode.select()

      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'Coupon copied' : 'unsuccessful'
        this.$bus.$emit('message:push', msg, 'success')
      } catch (err) {
        this.$bus.$emit('message:push', 'connection fail', 'danger')
      }
    }
  },
  beforeDestroy () {
    this.$store.dispatch('updateLoading', true)
  },
  mounted () {
    this.$store.dispatch('updateLoading', false)
    const scroll = this.$el.children[1].children[1].firstChild.firstChild.offsetTop
    $('.card').click(function (e) {
      $(e.currentTarget).addClass('flip')
      $('.card').off()
    })
    $('#start-modal').modal('show')
    $('#start-modal').click(function () {
      window.scrollTo({
        top: scroll,
        behavior: 'smooth'
      })
    })
    $('body').click(function (e) {
      $('#start-modal').modal('hide')
    })
  },
  created () {
    this.shuffleCoupon()
    this.getCoupon()
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';

.start-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
}

.responsive-cards{
  display: none;
  .carousel-indicators{
    bottom: -28px;
    li{
      background-color: darken($lighter-background, 12%);
      width: 50px;
      height: 2px;
      border: none;
      &:nth-child(2){
        margin: 0 20px;
      }
    }
    .active{
      background-color: $darker-text-color;
    }
  }
}

@mixin flip($speed: 0.5s, $direction: "y") {
  position: relative;
  transform-style: preserve-3d;
  transition: transform $speed;
  &.flip {
    @if $direction == "x" {
      transform: rotateX(180deg);
    }
    @if $direction == "y" {
      transform: rotateY(180deg);
    }
    @if $direction == "z" {
      transform: rotateZ(180deg);
    }
    transition: transform $speed;
  }
  .face {
    // setup the face of the card to match the size of the card;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    backface-visibility: hidden;
    transform: translateZ(0.1px); // fix for safari.
  }
  .back {
    // flip the back
    @if $direction == "x" {
      transform: rotateX(180deg);
    }
    @if $direction == "y" {
      transform: rotateY(180deg);
    }
    @if $direction == "z" {
      transform: rotateZ(180deg);
    }
  }
}

.card {
  @include flip();
  height: 490px;
  cursor: pointer;
  display: inline-block;
  width: auto !important;
  background-color: $lighter-background;
  .front {
    background-position: center;
    background-image: url(https://i.pinimg.com/564x/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg);
    box-shadow: 0 8px 10px -4px #00000091;
  }
  .back{
      height: 100%;
      box-shadow: 0 8px 10px -4px #00000091;
  }
  .card-header{
    background-color: $background;
    color: lighten($background,65%);
  }
}

.slick-slide {
  margin: 0 10px;
}

//loading effect
.start-modal {
  background-color: $black;
  .loading-text {
    color: $white;
  }
}

.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: $white;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@media (max-width: 768px) {
  .responsive-cards{
    display: block;
  }
  .window-cards{
    display: none;
  }
}
@keyframes lds-circle {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}

//優惠css

.small-discount-title {
  color: $normal-prize;
}

.normal-discount-title {
  color: $epic-prize;
}

.big-discount-title {
  color: $legend-prize;
}

.code {
  text-align: center;
  border: none;
  background: none;
}
.btn {
  border: solid;
  color: $background;
  margin: 10% auto 0 auto;
  width: 100%;
  border-color: $background;
  transition: ease 0.3s;
  &:hover{
    color: $lighter-background;
    background-color: $background;
    border-color: transparent;
  }
}
</style>
