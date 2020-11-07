<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <div class="banner-container">
        <transition name="vanish">
          <router-link :key="banner[bannerShow].link" class="banner" :to="banner[bannerShow].link" :style="`backgroundImage: url(${screenSize > 425 ? banner[bannerShow].image: banner[bannerShow].rwdImage})`">
            <div class="banner-cover">
              <h1>{{banner[bannerShow].title}}</h1>
              <h2>{{banner[bannerShow].subTitle}}</h2>
            </div>
          </router-link>
        </transition>
        <div>
          <a href="#" class="banner-left" @click.prevent='bannerChange(-1)'><font-awesome-icon :icon="['fas', 'chevron-left']" style="height: 100%;" /></a>
          <a href="#" class="banner-right" @click.prevent='bannerChange(+1)'><font-awesome-icon :icon="['fas', 'chevron-right']" style="height: 100%;" /></a>
        </div>
      </div>
      <section>
        <div class="container welcome-sec">
          <h2 class="section-title">WELCOME TO Lächeln</h2>
          <div class="row">
            <div class="intro-block">
              <h3>1.</h3>
              <h4>Best Quality</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem eveniet enim? Omnis veniam eius vel obcaecati quo tempore harum enim nobis quas asperiores consectetur, esse fuga nostrum voluptatum alias?</p>
            </div>
            <div class="intro-block">
              <h3>2.</h3>
              <h4>Best Materials</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem eveniet enim? Omnis veniam eius vel obcaecati quo tempore harum enim nobis quas asperiores consectetur, esse fuga nostrum voluptatum alias?</p>
            </div>
            <div class="intro-block">
              <h3>3.</h3>
              <h4>Best Choice</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem eveniet enim? Omnis veniam eius vel obcaecati quo tempore harum enim nobis quas asperiores consectetur, esse fuga nostrum voluptatum alias?</p>
            </div>
          </div>
          <div class="row">
            <router-link v-for="item in picLinks" :key="item.title" class="pic-link" :to="item.link">
              <div class="pic-link-back" :style="{backgroundImage: `url(${item.background})`}">
                <div class="pic-link-cover">
                  <div class="origin-text">
                    <h3>{{item.title}}</h3>
                    <h3>{{item.subTitle}}</h3>
                  </div>
                  <h4>{{item.hoverText}}</h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
      <section
        style="backgroundImage:url(https://images.unsplash.com/photo-1589880442905-546b351e81dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-attachment: fixed; padding: 160px 0px;background-position: center; background-repeat: no-repeat;"
      >
        <div class="container concept">
          <h1>Concept</h1>
          <div class="row">
            <h2>
              If life is a bowl of dark ice cream, small moments we enjoyed
              are colorful sprinkles all over it.
            </h2>
            <router-link to="/contact" class="new-btn">Contact Us</router-link>
          </div>
        </div>
      </section>
      <section>
        <div class="container category">
          <h2 class="section-title">Category</h2>
          <div class="row">
            <div class="category-card">
              <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/eric840906%2F1595515582168.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P7GYQt4dqXjGLkedwMGjAKUDv2nl2PTlEtipGiPPWqT9ubAmcDDaLV9t0x1HPfLJQ6ymL4JAo7h0jDumaK3QzjNp1PNkQEnDQciUHkQFQ09%2FVql4WDSHYRzm2fl6HzEicYnlXtlQlqmIHheCU04dH5T7o0ObLx%2FgXdDfj8qITxhq9thcvcbXhed6%2BuzjDJ%2BihuU%2Fye4YtgqBs6rUU3Or2b5Gj8Rt9atdKhpu0oKe9ysgZCSFldcIcGRGKUH0T%2BCuJhXtOo6imU%2BHxjItfuSRBjdoMjuUPIP2g1kAy9Xuy2Is8dXZgGr3mz3%2FywwshXAfsfXJ5fex39lW3W9G7wmNcQ%3D%3D" alt="">
              <h2>High Class</h2>
              <p>
                Luxurious
              </p>
              <a href="#">view products</a>
            </div>
            <div class="category-card">
              <img class="img-fluid" src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=806&q=80" alt="">
              <h2>Popsicle</h2>
              <p>
                Elegant
              </p>
              <a href="#">view products</a>
            </div>
            <div class="category-card">
              <img class="img-fluid" src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
              <h2>Ice Cream</h2>
              <p>
                Nostalgic
              </p>
              <a href="#">view products</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="section-title">Hot Products</h2>
          <productCarousel :carouselInfo="products" :show="productShow" :size="screenSize" @changeCarousel="productChange" @showCarousel="setCarousel"></productCarousel>
        </div>
      </section>
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
import productCarousel from '../components/productCarousel.vue'

export default {
  components: {
    Alert,
    productCarousel
  },
  data () {
    return {
      banner: [
        {
          title: 'Lächeln',
          subTitle: 'Facts are irrelevant, what matters is what the consumer believes',
          link: '/',
          image: 'https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          rwdImage: 'https://images.unsplash.com/photo-1505976311692-e64b8bbd6cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
          title: 'Delicacies',
          subTitle: "You can't buy happiness, but you can buy ice cream and that is pretty much the same thing",
          link: '/shoppage/shoppingmain',
          image: 'https://images.unsplash.com/photo-1560801530-34efebfecba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          rwdImage: 'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
        },
        {
          title: 'Event',
          subTitle: 'Life is like an ice cream, enjoy it before it melts',
          link: '/couponjackpot',
          image: 'https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1321&q=80',
          rwdImage: 'https://images.unsplash.com/photo-1545623067-8d28f65cb806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        }
      ],
      bannerShow: 0,
      screenSize: undefined,
      UserComments: [
        {
          data: {}
        }
      ],
      comparisonA: '',
      comparisonB: '',
      randomCarousel: [],
      picLinks: [
        {
          background: 'https://images.unsplash.com/photo-1555990205-057f92006fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          link: '/shoppage/shoppingmain',
          title: 'Summer Sale!',
          subTitle: 'Up To 50% Off',
          hoverText: 'Go Shopping'
        },
        {
          background: 'https://images.unsplash.com/photo-1576579310188-eef1e26e417a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          link: '/couponjackpot',
          title: 'Event!',
          subTitle: 'Coupon Cards',
          hoverText: 'Draw a Coupon'
        }
      ],
      products: [],
      productShow: 0
    }
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_APIKEY}/products` // 'https://vue-course-api.hexschool.io/api/eric840906/products'
      vm.$http.get(api).then(response => {
        vm.isLoading = false
        vm.products = response.data.products
      })
    },
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
    },
    resizeHandler () {
      const vm = this
      vm.screenSize = window.screen.availWidth
    },
    bannerChange (change) {
      const vm = this
      vm.bannerShow = (vm.bannerShow + vm.banner.length + change) % vm.banner.length
    },
    productChange (change) {
      const vm = this
      vm.productShow = (vm.productShow + vm.products.length + change) % vm.products.length
    },
    setCarousel (num) {
      const vm = this
      vm.productShow = num
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
    window.setInterval(() => { this.bannerChange(+1) }, 5000)
  },
  beforeCreate () {
    $('#loadingModal').modal('hide')
  },
  created () {
    window.addEventListener('resize', this.resizeHandler)
    const vm = this
    vm.screenSize = window.screen.availWidth
    this.commentGet()
    this.getProducts()
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
// GLOBAL STYLES
$base: #e2baa8;
$background: darken($base, 50%);
$border-color: $base;
$lighter-background: lighten($base, 15%);
$link-text: darken($base, 60%);
$link-text-hover: lighten($base, 10%);
// --------------------------------------------------
/* Padding below the footer and lighter body text */
.row+.row{
  margin-top: 20px;
}
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
section{
  margin: 50px 0;
  .section-title{
    text-align: center;
  }
}
.concept {
  opacity: 0;
  text-align: center;
  color: $white;
  .row{
    justify-content: center;
  }
}
.new-btn{
  padding: 10px;
  border-radius: 2px;
  background-color: $lighter-background;
  color: $link-text;
  &:hover{
    background-color: $background;
    color: $link-text-hover;
  }
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

a.banner, a.banner.router-link-active{
  color: white;
}
%arrows{
  position: absolute;
  top: 0;
  font-size: 50px;
  height: 80%;
  color: #ffffff57;
}
.banner-container{
  position: relative;
  height: 92vh;
  .banner-left{
    @extend %arrows;
    left: 0;
  }
  .banner-right{
    @extend %arrows;
    right: 0;
  }
  a{
    color: white;
  }
}
.banner{
    height: 92vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    display: block;
}
.banner-cover{
  width: 100%;
  height: 100%;
  background-color: #00000052;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    text-align: center;
  }
}
.welcome-sec{
  .row{
    justify-content: space-between;
    &:last-child{
      justify-content: center;
      a+a{
        margin-left: 10px;
        @media (max-width: 425px) {
          margin:0;
        }
      }
    }
  }
}
.intro-block{
  display: flex;
  flex: 0 0 28%;
  flex-direction: column;
  text-align: center;
  @media (max-width:425px) {
    flex: 0 0 100%;
  }
}
.pic-link{
  display: block;
  height: 35vh;
  flex: 0 0 45%;
  min-width: 45%;
  overflow: hidden;
  @media (max-width:425px) {
    flex: 0 0 100%;
    margin: 20px;
  }
  &:hover{
    .pic-link-back{
      transform: scale(1.2);
    }
  }
  .pic-link-back{
    transition: 0.5s all;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    .pic-link-cover{
      position: relative;
      height: 100%;
      width: 100%;
      background-color: #00000099;
      .origin-text{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: all 0.5s;
        align-items: center;
        h3{
          color: white;
        }
      }
      h4{
        color: white;
        opacity: 0;
        top: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.5s all;
      }
      &:hover{
        .origin-text{
          opacity: 0;
        }
        h4{
          opacity: 1;
        }
      }
    }
  }
}
.category{
  .row{
    justify-content: space-between;
    @media (max-width: 425px) {
      justify-content: center;
      .category-card+.category-card{
        margin-top: 20px;
      }
    }
    .category-card{
      justify-content: space-between;
      border: 5px double $border-color;
      background-color: $lighter-background;
      color: $link-text;
      display: flex;
      flex: 0 0 28%;
      flex-direction: column;
      text-align: center;
      img{
        height: 285px;
      }
      a{
        width: 100%;
        padding: 10px;
        align-self: center;
        background-color: $background;
        color: lighten($background,65%);
        &:hover{
          color: $link-text-hover;
        }
      }
      @media (max-width:425px) {
        flex: 0 0 80%;
      }
    }
  }
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
