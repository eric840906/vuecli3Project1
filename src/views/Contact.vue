<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <Banner :picture="bannerImg" :title="pageTitle"></Banner>
      <div class="album py-5">
        <div class="container">
          <staffCarousel :size="screenSize" :carouselInfo="staffInfo" :show="cardShow" @changeCarousel='staffChange' @showCarousel='setCarousel'></staffCarousel>
        </div>
        <hr>
        <div class="container">
            <h3>Feedback</h3>
          <form @submit.prevent="commentPost">
            <div class="d-flex">
              <div class="form-group">
                <label for="useremail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="useremail"
                  v-model="UserComments.email"
                  placeholder="Enter e-mail"
                  v-validate="'required|email'"
                  required
                />
              </div>

              <div class="form-group" style="margin-left:20px;">
                <label for="username">Nickname</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="username"
                  v-model="UserComments.name"
                  placeholder="Enter nickname"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="grading" style="margin-right:1%">Rating</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="grading"
                  id="inlineRadio1"
                  value="1"
                  v-model="UserComments.grading"
                  required
                />
                <label class="form-check-label mr-10" for="inlineRadio1"
                  >1</label
                >
                <input
                  class="form-check-input"
                  type="radio"
                  name="grading"
                  id="inlineRadio2"
                  value="2"
                  v-model="UserComments.grading"
                />
                <label class="form-check-label mr-10" for="inlineRadio2"
                  >2</label
                >
                <input
                  class="form-check-input"
                  type="radio"
                  name="grading"
                  id="inlineRadio3"
                  value="3"
                  v-model="UserComments.grading"
                />
                <label class="form-check-label mr-10" for="inlineRadio3"
                  >3</label
                >
                <input
                  class="form-check-input"
                  type="radio"
                  name="grading"
                  id="inlineRadio4"
                  value="4"
                  v-model="UserComments.grading"
                />
                <label class="form-check-label mr-10" for="inlineRadio4"
                  >4</label
                >
                <input
                  class="form-check-input"
                  type="radio"
                  name="grading"
                  id="inlineRadio5"
                  value="5"
                  v-model="UserComments.grading"
                />
                <label class="form-check-label mr-10" for="inlineRadio5"
                  >5</label
                >
              </div>
            </div>

            <div class="form-group">
              <label for="comment">Comments</label>
              <textarea
                name=""
                id="comment"
                class="form-control"
                cols="30"
                rows="10"
                v-model="UserComments.message"
                required
              ></textarea>
            </div>
            <button class="btn-msg" style="width:100%;">
              SEND
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner.vue'
import staffCarousel from '../components/staffCarousel.vue'
export default {
  components: {
    Alert,
    Banner,
    staffCarousel
  },
  data () {
    return {
      bannerImg: {
        backgroundImage: "url('https://images.unsplash.com/photo-1551806235-6692cbfc690b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
      },
      pageTitle: 'Contact Us',
      staffInfo: [
        {
          name: 'B.H.Valdez',
          profile: 'https://images.unsplash.com/photo-1604152087112-5b1acd817c87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          position: 'CEO',
          intro: 'A brand is no longer what we tell the consumer it is -- it is what consumers tell each other it is'
        },
        {
          name: 'M.L.Valencia',
          profile: 'https://images.unsplash.com/photo-1556664154-dc98b1d795e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          position: 'COO',
          intro: 'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily'
        },
        {
          name: 'C.S.Cassidy',
          profile: 'https://images.unsplash.com/photo-1597236957537-fae1335cde2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          position: 'CMO',
          intro: 'If you are an artist, learn science. If you are a scientist, cultivate art'
        }
      ],
      UserComments: {},
      screenSize: undefined,
      cardShow: 0
    }
  },
  methods: {
    commentPost () {
      const vm = this
      const api = 'https://json-server-test999.herokuapp.com/posts'
      vm.$http.post(api, { data: vm.UserComments }).then(response => {
        if (response) {
          vm.$bus.$emit(
            'message:push',
            'Thanks for your comment, it will be displayed on homepage randomly!',
            'success'
          )
          setTimeout(() => vm.$router.push('/'), 2500)
        }
      })
    },
    resizeHandler () {
      const vm = this
      vm.screenSize = window.screen.availWidth
    },
    staffChange (change) {
      const vm = this
      vm.cardShow = (vm.cardShow + vm.staffInfo.length + change) % vm.staffInfo.length
    },
    setCarousel (num) {
      const vm = this
      vm.cardShow = num
    }
  },
  created () {
    window.addEventListener('resize', this.resizeHandler)
    const vm = this
    vm.screenSize = window.screen.availWidth
  },
  mounted () {
    this.$store.dispatch('updateLoading', false)
  },
  beforeDestroy () {
    this.$store.dispatch('updateLoading', true)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';
@import 'src/assets/helpers/customBtn';

$card-base: #ddc2a9;
$card-background: darken($card-base, 50%);
$card-footer-background: darken($card-base, 10%);
$card-footer-link: darken($card-base, 60%);
$card-footer-link-hover: lighten($card-base, 10%);

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
.btn-msg{
  @extend %no-hover-btn;
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
      background-color: #fee6c2;
      margin: 20px;
    }
    .active{
      background-color: #ffa64c !important;
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

  #left-arrow {
    display: none;
    position: absolute;
    top: 85%;
    left: 0%;
    z-index: 99999999999999999;
  }

  #right-arrow {
    display: none;
    position: absolute;
    top: 85%;
    right: 0%;
    z-index: 99999999999999999;
  }
  #carouselTeam {
    display: none;
    position: absolute;
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
    .card-frame {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .cards {
      display: none;
      position: absolute;
    }
    #left-arrow,
    #right-arrow {
      display: block;
    }
    #carouselTeam {
      display: block;
      position: relative;
    }
  }

  // 留言區css
  .mr-10 {
    margin-right: 10px;
  }
  .submit-msg-btn{
    &:hover{
      color: $yellow;
    }
  }
</style>
