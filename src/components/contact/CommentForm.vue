<template>
  <div>
    <Alert></Alert>
    <Navbar></Navbar>
    <main role="main">
      <section
        class="jumbotron text-center"
        style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80); background-size: cover; background-position: center;"
      >
        <div class="blink" style="padding: 96px 0;">
          <h1 style="font-family: 'Tangerine', cursive; font-size: 4.5rem;">
            Leave Your Comment
          </h1>
          <br />
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
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
                  placeholder="請輸入 Email"
                  v-validate="'required|email'"
                />
              </div>

              <div class="form-group" style="margin-left:20px;">
                <label for="username">暱稱</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="username"
                  v-model="UserComments.name"
                  placeholder="輸入姓名"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="grading">評價</label>
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
              <label for="comment">留言</label>
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
            <button class="btn top-notice-btn" style="width:100%;">
              送出留言
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "./HomeNav";
import Alert from "./Alert";
import Footer from "./Footer";
export default {
  components: {
    Navbar,
    Alert,
    Footer
  },
  data() {
    return {
      UserComments: {}
    };
  },
  methods: {
    commentPost() {
      const vm = this;
      let api = "https://json-server-test999.herokuapp.com/posts";
      this.$http.post(api, { data: vm.UserComments }).then(response => {
        if (response) {
          console.log("上傳成功");
          this.$bus.$emit(
            "message:push",
            "謝謝你的評價，之後可以在首頁看到喔!",
            "success"
          );
          setTimeout(() => vm.$router.push("/"), 2500);
        }
      });
    },
    commentGet() {
      const vm = this;
      let api = "https://json-server-test999.herokuapp.com/posts";
      this.$http.get(api).then(response => {
        console.log(response);
      });
    }
  },
  created() {
    this.commentGet();
  }
};
</script>

<style lang="scss" scope>
body {
  font-family: "cwTeXYen", sans-serif;
}

.jumbotron {
  height: 400px;
  margin-top: 22px;
  h1 {
    display: inline-block;
  }
}

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
.blink {
  animation: color-change 5s infinite;
}

@keyframes color-change {
  0% {
    color: black;
  }
  50% {
    color: wheat;
  }
  75% {
    color: white;
  }
  100% {
    color: transparent;
  }
}
</style>
