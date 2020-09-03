<template>
  <div>
    <Alert></Alert>
    <Navbar></Navbar>
    <main role="main">
      <section
        class="jumbotron text-center"
        style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1551806235-6692cbfc690b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position:center;"
      >
        <div class="page-title" style="margin-top:30px; color:white;">
          <h1 style="font-family: 'Tangerine', cursive; font-size: 4.5rem;">
            Contact Us
          </h1>
          <br />
          <p class="lead"></p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row overflow-auto flex-nowrap cards">
            <div class="col-md-4 row mr-auto ml-auto card-frame">
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
                  <a href=""><font-awesome-icon :icon="['fab', 'twitter']"/></a>
                  <a href=""
                    ><font-awesome-icon :icon="['fab', 'instagram']"
                  /></a>
                </div>
              </div>
            </div>

            <div class="col-md-4 row mr-auto ml-auto card-frame">
              <div class="card">
                <div class="picture">
                  <img
                    src="https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    class="card-img-top img-fluid"
                    alt=""
                  />
                </div>

                <div class="card-body">
                  <div class="d-flex">
                    <h5 class="card-title">M.L.Valencia</h5>
                    <h6 class="position ml-auto">COO</h6>
                  </div>
                  <hr style="margin-top:0;" />
                  <p class="card-text">
                    People often say that motivation doesn’t last. Well, neither
                    does bathing. That’s why we recommend it daily
                  </p>
                </div>
                <div class="card-footer d-flex justify-content-around">
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

            <div class="col-md-4 row mr-auto ml-auto card-frame">
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
                    If you are an artist, learn science. If you are a scientist,
                    cultivate art
                  </p>
                </div>
                <div class="card-footer d-flex justify-content-around">
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
          <div id="carouselTeam" class="carousel slide" data-ride="carousel" data-interval="false">
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
          </div>
        </div>
        <hr>
        <div class="container">
            <h3>Leave Your Messsage</h3>
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
      <Footer></Footer>
    </main>
    <Gotop></Gotop>
  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Navbar from '../components/HomeNav.vue'
import Gotop from '../components/GoTop.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Alert,
    Navbar,
    Gotop,
    Footer
  },
  data () {
    return {
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
            'Thanks for your comments, they will be displayed on homepage randomly!',
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
* {
  font-family: "cwTeXYen", sans-serif;
}

.jumbotron {
  height: 400px;
  margin-top: 22px;
  h1 {
    display: inline-block;
  }
}
.card-footer {
  font-size: xx-large;
  background: black;
  a {
    color: #777777;
    transition: ease-out 0.3s;
    &:hover {
      color: white;
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
  border: 1px solid black;
  border-radius: 7px;
  margin-bottom: 5px;
  padding: 5px 8px;
  background-color: black;
  color: #ffdb27;
}

@media (max-width: 425px) {
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

.top-notice-btn {
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: black;
  &:hover {
    color: #ffdf76;
    background-color: #00000075;
  }
}

.submit-msg-btn{
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: #ffdf76;
  background-color: #00000075;
  &:hover {
    background-color: black;
  }
}
</style>
