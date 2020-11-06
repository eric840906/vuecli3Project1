<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <div
        id="myCarousel"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner embed-responsive-21by9">
          <router-link
            to="/"
            class="carousel-item embed-responsive-item active"
            style="backgroundImage:url(https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position: bottom;"
          >
          <div class="banner-cover">
            <div class="container">
                <div class="carousel-caption">
                  <h1>Lächeln</h1>
                  <h3>Facts are irrelevant</h3>
                  <h3>What matters is what the consumer believes</h3>
                </div>
            </div>
          </div>
          </router-link>
          <router-link
            to="/shoppage/shoppingmain"
            class="carousel-item embed-responsive-item"
            style="backgroundImage:url(https://images.unsplash.com/photo-1560801530-34efebfecba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position: center;"
          >
          <div class="banner-cover">
            <div class="container">
              <div class="carousel-caption text-center">
                <h1 class="xs-left">Delicacies</h1>
                <h3>You can't buy happiness,</h3>
                <h3>but you can buy ice cream and that is pretty much the same thing</h3>
                <h2>View Products</h2>
              </div>
            </div>
          </div>
          </router-link>
          <router-link
            to="/couponjackpot"
            class="carousel-item embed-responsive-item"
            style="backgroundImage:url(https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1321&q=80); background-size: cover; background-position: bottom;"
          >
          <div class="banner-cover">
            <div class="container">
              <div class="carousel-caption">
                <h1>Event</h1>
                <h2>Life is like an ice cream, enjoy it before it melts</h2>
                <h2>Grab a coupon</h2>
              </div>
            </div>
          </div>
          </router-link>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <hr class="featurette-divider" />
      <div class="container marketing">
        <h2>Environment</h2>

        <div class="row featurette">
          <div class="col-md-4 mb-10">
            <img
              class="img-fluid"
              src="https://images.unsplash.com/photo-1577056922428-a511301a562d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
              alt=""
            />
          </div>
          <div class="col-md-4 row" style="padding: 0; margin: 0;">
            <div class="col-md-12 d-flex" style="margin-bottom: 10px;">
              <img
                class="img-fluid"
                src="https://images.unsplash.com/photo-1544739313-6fad02872377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
            <div class="col-md-12 d-flex mb-10">
              <img
                class="img-fluid"
                src="https://images.unsplash.com/photo-1570646982637-f6a903ca9e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4">
            <img
              class="img-fluid"
              src="https://images.unsplash.com/photo-1582926088856-99b2cd02ac13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr class="featurette-divider" />
      <section
        style="backgroundImage:url(https://images.unsplash.com/photo-1589880442905-546b351e81dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-attachment: fixed; padding: 160px 0px;background-position: center; background-repeat: no-repeat;"
      >
        <div class="container marketing concept" style="color:white;">
          <h1>Concept</h1>
          <div class="row featurette">
            <div class="col-md-7">
              <h2>
                If life is a bowl of dark ice cream, small moments we enjoyed
                are colorful sprinkles all over it.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <hr class="featurette-divider" />
      <section>
        <div class="container marketing">
          <h2>Hottest Product</h2>
          <div class="row featurette hottest">
            <div class="col-md-5">
              <img class="img-fluid" src="https://images.unsplash.com/photo-1485217939211-45a6241d40a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="">
            </div>
            <div class="col-md-7 hot-product-info">
              <h2>Vanilla Storm</h2>
              <h3>
                "Sometimes all you need is love... Oh wait! And ice cream, and chocolate to go along with it as nowadays love is anything but sweet."
              </h3>
              <router-link to="shoppage/product/-MCw7P4EHY5KYhZQFJnl" class="btn notice-btn"><font-awesome-icon class="moving-arrow-left" :icon="['fas', 'angle-double-left']"/>More Info<font-awesome-icon class="moving-arrow-right" :icon="['fas', 'angle-double-right']"/></router-link>
            </div>
          </div>
        </div>
      </section>

      <hr class="featurette-divider" />
      <div class="container marketing">
        <h2>Customer Comments</h2>
       <carousel :responsive="{ 0:  {items: 1, dots: false }, 600: { items: 3 } }" :nav="false" :autoplay="true" :loop="true" :rewind="true" v-if="UserComments.length>0">
          <div v-for="item in UserComments" :key="item.id">
            <div class="col-12 text-center">
              <img
                src="../assets/image/profile.png"
                class="user-image d-inline"
                style="width: 50%;"
              />
              <h2 class="grading">
                <font-awesome-icon
                  v-for="item in Number(item.data.grading)"
                  :key="item.id"
                  icon="star"
                />
              </h2>
              <h4 class="user-name">{{ item.data.name }}</h4>
              <p class="comments">{{ item.data.message }}</p>
            </div>
          </div>
        </carousel>
      </div>

      <hr class="featurette-divider" style="border:none" />
    </main>
  </div>
</template>

<script>
import $ from 'jquery'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Alert from '../components/Alert.vue'

export default {
  components: {
    Alert
  },
  data () {
    return {
      UserComments: [
        {
          data: {}
        }
      ],
      comparisonA: '',
      comparisonB: '',
      randomCarousel: []
    }
  },
  methods: {
    commentGet () {
      const vm = this
      const api = 'https://json-server-test999.herokuapp.com/posts'
      vm.$http.get(api).then(response => {
        vm.comparisonA = Math.random()
        vm.comparisonB = Math.random()
        vm.UserComments = response.data
        vm.shuffleCarousel()
        // vm.getNewCarousel()
      })
    },
    shuffleCarousel () {
      const vm = this
      vm.UserComments.sort(function () {
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
    getNewCarousel () {
      const vm = this
      if (vm.UserComments.length > 3) {
        for (let i = 0; i < 5; i++) {
          const a = parseInt(Math.random() * vm.UserComments.length)
          vm.randomCarousel.push(vm.UserComments[a])
          vm.UserComments.splice(a, 1)
        }
      } else {
        vm.randomCarousel = vm.UserComments
      }
    }
  },
  mounted () {
    $(window).scroll(function () {
      $('.concept').each(function (i) {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight()
        const bottomOfWindow = $(window).scrollTop() + $(window).height()

        /* If the object is completely visible in the window, fade it it */
        if (bottomOfWindow > bottomOfObject) {
          $(this).animate({ opacity: '1' }, 1500)
        }
      })
      $('.hottest').each(function (i) {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight()
        const bottomOfWindow = $(window).scrollTop() + $(window).height()

        /* If the object is completely visible in the window, fade it it */
        if (bottomOfWindow > bottomOfObject) {
          $(this).animate({ opacity: '1' }, 1500)
          $(this).addClass('hottest-move')
        }
      })
    })
  },
  beforeCreate () {
    $('#loadingModal').modal('hide')
  },
  created () {
    this.commentGet()
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
/* GLOBAL STYLES

-------------------------------------------------- */
/* Padding below the footer and lighter body text */
h1 {
  font-size: 3.5rem;
}
.mr-0 {
  margin: 0;
}

body {
  padding-top: 3rem;
  padding-bottom: 0;
  color: #5a5a5a;
}
.user-image {
  width: 140px;
  border-radius: 150px;
}
.concept {
  opacity: 0;
}
.hottest{
  opacity: 0;
}
.hottest-move{
  animation-fill-mode: forwards;
  animation: float 0.5s linear;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

.carousel-fade {
  .carousel-inner {
    .item {
      transition: 0.5s opacity;
    }

    .item,
    .active.left,
    .active.right {
      opacity: 0;
    }

    .active,
    .next.left,
    .prev.right {
      opacity: 1;
    }

    .next,
    .prev,
    .active.left,
    .active.right {
      left: 0;
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-control {
    z-index: 2;
  }
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
.grading {
  margin: 8px 0;
  color: $yellow;
  font-size: 25px;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

.homeImage {
  position: relative;
  width: 74%;
  padding: 60% 43%;
  background-position: center 60%;
  background-size: cover;
}

.banner-cover{
  position: absolute;
  background: radial-gradient(#000000ab, #0000004f);
  height: 100%;
  width: 100%;
  text-align: center;
  bottom: 0;
}

.responsive-mt{
  margin-top: 17%;
}

.hot-product-info{
  display: flex;
  flex-direction: column;
  .notice-btn{
    .moving-arrow-right{
      transform: translateX(33px);
      animation: color-change 0.5s infinite;
    }
    .moving-arrow-left{
      transform: translateX(-33px);
      animation: color-change 0.5s infinite;
    }
    &:hover{
      .moving-arrow-right{
      animation: arrow-shift-right 0.65s infinite;
      }
      .moving-arrow-left{
      animation: arrow-shift-left 0.65s infinite;
      }
    }
  }
  h3{
    margin-top: auto;
  }
  a{
    width: 100%;
    margin-top: auto;
  }
}
@keyframes color-change {
  0% {
    color: transparent;
  }
  50% {
    color: $red;
  }
  75% {
    color: $white;
  }
  100% {
    color: transparent;
  }
}

@keyframes arrow-shift-right {
  0% {
    transform: translateX(33px);
  }
  100% {
    transform: translateX(250px);
    color: transparent;
  }
}
@keyframes arrow-shift-left {
  0% {
    transform: translateX(-33px);
  }
  100% {
    transform: translateX(-250px);
    color: transparent;
  }
}
@keyframes float {
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

@media (min-width: 768px) {
  .carousel-inner {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;

    &::before {
      display: block;
      content: "";
    }

    .embed-responsive-item,
    iframe,
    embed,
    object,
    video {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
@media (max-width: 768px){
  .responsive-mt{
    margin-top: 41%;
  }
}

@media (max-width: 425px) {
  .mb-10 {
    margin-bottom: 10px;
  }
}
@media (max-width: 320px) {
  .xs-left{
    transform: translateX(-6%);
  }
}

@media (min-width: 1440px) {
  .carousel-caption{
    bottom: 10rem;
  }
}
</style>
