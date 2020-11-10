<template>
    <div>
        <footer class="top-footer">
            <div class="container">
                <div class="row">
                  <h2 class="footer-logo" style="font-family: 'Tangerine', cursive;">Lächeln</h2>
                  <div class="social-box">
                    <a href="#"><font-awesome-icon class="social-item" :icon="['fab', 'twitter']" /></a>
                    <a href="#"><font-awesome-icon class="social-item" :icon="['fab', 'facebook-f']" /></a>
                    <a href="#"><font-awesome-icon class="social-item" :icon="['fab', 'google-plus-g']" /></a>
                    <a href="#"><font-awesome-icon class="social-item" :icon="['fab', 'github']" /></a>
                    <a href="#"><font-awesome-icon class="social-item" :icon="['fab', 'linkedin-in']" /></a>
                    <a href="#"><font-awesome-icon class="social-item" :icon="['fab', 'instagram']" /></a>
                  </div>
                  <div class="email-box"><a href="mailto: info@Lächeln.Icecream"><font-awesome-icon style="font-size: 14px; margin-right:0.5rem;" :icon="['far', 'envelope']" />info@Lächeln.Icecreram</a></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error id rerum totam quam tempora consectetur alias ipsum quisquam voluptates, illo rem voluptatibus architecto, earum harum! Quis repellat suscipit omnis?</p>
                  <form action="" class="subscription">
                    <input type="text" id="email" class="email-input" placeholder="Enter Your E-mail" v-model="email">
                    <button class="subscribe-btn" :disabled="!email" @click.prevent="toSubscribe">Subscribe</button>
                  </form>
                </div>
            </div>
        </footer>
        <div class="lower-footer">
          <div class="lower-text" style="font-size:16px">
          <small>&copy; <span>Lächeln</span>  - Only for Self learning purpose</small>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    toSubscribe () {
      const vm = this
      vm.$bus.$emit('message:push', 'Thanks for your subscription!', 'success')
      vm.email = ''
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';

footer{
  background-color: darken($lighter-background, 12%);
  color: $darker-text-color;
  padding-top: 60px;
  margin-top: 60px;
  text-align: center;
  *+*{
    margin-top: 20px;
  }
  a{
    color: darken($lighter-background, 62%);
    &:hover{
      color: darken($lighter-background, 32%);
    }
  }
}

.top-footer{
  .row{
    flex-direction: column;
    align-items: center;
    p{
      width: 85%;
    }
  }
}
.email-box{
  width: 100%;
}
.social-box{
  width: 100%;
  .social-item{
    font-size: 30px;
  }
  a+a{
    margin-left: 20px;
  }
}
.subscription{
  margin-bottom: 40px;
  width: 100%;
  .email-input{
    padding: 2px;
    border-width: thin;
    border-radius: 37px 0 0 37px;
    width: 35%;
  }
  .subscribe-btn{
    padding: 3px;
    font-size: 17px;
    color: $white;
    border:none;
    border-radius: 0 37px 37px 0;
    margin-left:-4px;
    width:13%;
    background-color: $background;
    &:hover{
      background-color: $link-text;
      color: lighten($link-text, 30%);
    }
  }
}
ul{
  line-height: 40px;
}

.footer-logo{
  font-size: 60px;
  width: 100%;
  margin: 0;
}
.lower-footer{
  background-color: $link-text;
  color: $lighter-background;
  padding: 10px 0;
  text-align: center;
}

@media (max-width: 768px){
  .subscription{
    .email-input{
      width: 50%;
    }
    .subscribe-btn{
      width: 26%;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px){
  .subscription{
    .email-input{
      padding: 1px;
    }
    .subscribe-btn{
      padding: 2px;
      font-size: 16px;
    }
  }
}

@media (max-width: 425px){
  .footer-item{
    &:nth-child(2){
      margin-top: 20px;
    }
  }
}
</style>
