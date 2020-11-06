<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <Banner :picture="bannerImg" :title="pageTitle"></Banner>
      <div class="album py-5">
        <div class="container">
          <div class="staff-cards">
            <div class="staff-carousel">
              <div v-for="item in staffInfo" :key="item.name" class="staff-card">
                <h6 class="position">{{item.position}}</h6>
                <img
                  :src="item.profile"
                  class="card-img-top"
                  alt=""
                />
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">
                  {{item.intro}}
                </p>
                <div class="card-footer staff-links">
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
          <!-- <div id="carouselTeam" class="carousel slide" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1585418244931-4cb811b61092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    class="card-img-top"
                    alt=""
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <h5 class="card-title">B.H.Valdez</h5>
                      <h6 class="position ml-auto">CEO</h6>
                    </div>
                    <hr style="margin-top:0;" />
                    <p class="card-text">
                      A brand is no longer what we tell the consumer it is -- it
                      is what consumers tell each other it is
                    </p>
                  </div>
                  <div class="card-footer d-flex justify-content-around">
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'facebook']"
                    /></a>
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'twitter']"
                    /></a>
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    class="card-img-top"
                    alt=""
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <h5 class="card-title">M.L.Valencia</h5>
                      <h6 class="position ml-auto">COO</h6>
                    </div>
                    <hr style="margin-top:0;" />
                    <p class="card-text">
                      People often say that motivation doesn’t last. Well,
                      neither does bathing. That’s why we recommend it daily
                    </p>
                  </div>
                  <div class="card-footer d-flex justify-content-around">
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'facebook']"
                    /></a>
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'twitter']"
                    /></a>
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1551467302-8e70f83e8ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    class="card-img-top"
                    alt=""
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <h5 class="card-title">C.S.Cassidy</h5>
                      <h6 class="position ml-auto">CMO</h6>
                    </div>
                    <hr style="margin-top:0;" />
                    <p class="card-text">
                      If you are an artist, learn science. If you are a
                      scientist, cultivate art
                    </p>
                  </div>
                  <div class="card-footer d-flex justify-content-around">
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'facebook']"
                    /></a>
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'twitter']"
                    /></a>
                    <a href=""
                      ><font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselTeam"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselTeam"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div> -->
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
            <button class="btn submit-msg-btn" style="width:100%;">
              SEND
            </button>
          </form>
        </div>
      </div>
    </main>
    <Gotop></Gotop>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Gotop from '../components/GoTop.vue'
import Banner from '../components/Banner'
export default {
  components: {
    Alert,
    Gotop,
    Banner
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
      UserComments: {}
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
  .staff-carousel{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .staff-cards{
    text-align: center;
    .staff-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 285px;
    height: 60vh;
    flex: 0 0 25.333333%;
    padding: 5px;
    margin: 10px;
    border: 5px double $yellow;
    background-color: #e9d2b1;
    img{
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
    .staff-links{
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    }
  }
  .card-footer {
    font-size: xx-large;
    background: $black;
    a {
      color: $special-link;
      transition: ease-out 0.3s;
      &:hover {
        color: $white;
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
    margin-top: -9px;
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
          max-width: 300px;
          flex: 0 0 100%;
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
