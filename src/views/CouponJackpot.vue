<template>
  <div>
    <Alert></Alert>
    <Navbar></Navbar>
    <main role="main">
      <section
        class="jumbotron text-center"
        style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1577218546063-5e53e820851e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80); background-size: cover; background-position: center;"
      >
        <div class="page-title" style="margin-top:30px; color:white;">
          <h1 style="font-size: 4.5rem;">
            Get the party started
          </h1>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="window-cards card-deck mb-3 text-center justify-content-center">
            <div class="card mb-4 shadow-sm card-background" v-for="item in randomCoupons" :key="item.id">
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
                    class="btn btn-lg btn-block btn-outline-primary margin-auto"
                    @click.prevent="copyCode"
                    >Copy</a
                  >
                </div>

                <div class="card-footer">
                  <router-link
                    class="btn btn-lg btn-block btn-outline-primary margin-auto"
                    to="/shoppage/shoppingmain"
                    >Shopping</router-link
                  >
                </div>
              </div>
            </div>
            <!-- <VueSlickCarousel v-bind="settings">
              <div class="card mb-4 shadow-sm card-background" v-for="item in randomCoupons" :key="item.id">
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
                    <h2>優惠代碼</h2>
                    <input
                      type="text"
                      class="code"
                      :value="item.code"
                      readonly="readonly"
                    />
                    <h3>使用期限:{{ item.due_date }}</h3>
                    <a
                      class="btn btn-lg btn-block btn-outline-primary margin-auto"
                      @click.prevent="copyCode"
                      >複製優惠碼</a
                    >
                  </div>

                  <div class="card-footer">
                    <router-link
                      class="btn btn-lg btn-block btn-outline-primary margin-auto"
                      to="/shoppage/shoppingmain"
                      >前往購物區</router-link
                    >
                  </div>
                </div>
              </div>
            </VueSlickCarousel> -->
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
                  <div class="card mb-4 shadow-sm card-background">
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
                          class="btn btn-lg btn-block btn-outline-primary margin-auto"
                          @click.prevent="copyCode"
                          >Copy</a
                        >
                      </div>

                      <div class="card-footer">
                        <router-link
                          class="btn btn-lg btn-block btn-outline-primary margin-auto"
                          to="/shoppage/shoppingmain"
                          >Shopping</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card mb-4 shadow-sm card-background">
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
                          class="btn btn-lg btn-block btn-outline-primary margin-auto"
                          @click.prevent="copyCode"
                          >Copy</a
                        >
                      </div>

                      <div class="card-footer">
                        <router-link
                          class="btn btn-lg btn-block btn-outline-primary margin-auto"
                          to="/shoppage/shoppingmain"
                          >Shopping</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card mb-4 shadow-sm card-background">
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
                          class="btn btn-lg btn-block btn-outline-primary margin-auto"
                          @click.prevent="copyCode"
                          >Copy</a
                        >
                      </div>

                      <div class="card-footer">
                        <router-link
                          class="btn btn-lg btn-block btn-outline-primary margin-auto"
                          to="/shoppage/shoppingmain"
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

    <Footer></Footer>
  </div>
</template>

<script>
import $ from 'jquery'
import Navbar from '../components/HomeNav.vue'
import Footer from '../components/Footer.vue'
// import VueSlickCarousel from 'vue-slick-carousel'
import Alert from '../components/Alert.vue'
export default {
  components: {
    Navbar,
    Footer,
    // VueSlickCarousel,
    Alert
  },
  data () {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        speed: 300,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // 一次顯示1個
              slidesToScroll: 1 // 切換下一頁時移動1個
            }
          }
        ]
      },
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
  mounted () {
    $('.card').click(function (e) {
      $(e.currentTarget).addClass('flip')

      $('.card').off() // 翻一張牌之後停止對所有兄弟的監聽
    })
    $('#start-modal').modal('show')
    $('body').click(function (e) {
      $('#start-modal').modal('hide')
    })

    // $(".copybtn").click(function(e){
    //     e.preventDefault();
    //     $(e.currentTarget).closest('.code').document.execCommand('copy');
    // })
  },
  created () {
    this.shuffleCoupon()
    this.getCoupon()
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap);

.page-title{
   font-family: 'Tangerine', cursive;
}
.jumbotron {
  height: 400px;
  margin-top: 22px;
  h1 {
    display: inline-block;
  }
}

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
      background-color: #6dbcfe;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      border: none;
      &:nth-child(2){
        margin: 0 20px;
      }
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
  cursor: pointer;
  display: inline-block;
  width: auto !important;
  border-radius: 15px;
  font-family: "cwTeXYen", sans-serif;
}

.card-background {
  background: antiquewhite;
}

.front {
  background-position: center;
  background-image: url(https://i.pinimg.com/564x/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg);
}
.slick-slide {
  margin: 0 10px;
}

@media (min-width: 1024px) {
  .card {
    height: 490px;
  }
}

//loading effect
.start-modal {
  background-color: #000000;
  .loading-text {
    font-family: "cwTeXYen", sans-serif;
    color: white;
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
  background: #fff;
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
  color: #007bff;
}

.normal-discount-title {
  color: rgb(141, 141, 252);
}

.big-discount-title {
  color: #ff9a00;
}

.code {
  text-align: center;
  border: none;
  background: none;
}
.btn {
  width: 70%;
  &:hover {
    background-color: black;
    border: none;
    color: #ffdf76;
  }
}
.margin-auto {
  margin: 0 auto;
}
</style>
