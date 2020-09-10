<template>
    <div style="font-family: 'Tangerine', cursive;">
        <footer class="pt-4 pt-md-5" style="background-color: #f5f5f5;">
            <div class="container">
                <div class="row">
                    <div class="footer-item text-muted col-md-5 store-info">
                        <div class="footer-logo">Lächeln</div>
                        <p style="margin: 20px 0">Exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure</p>
                        <div><a class="text-muted" href="mailto: info@Lächeln.Icecreram"><font-awesome-icon style="font-size: 14px; margin-right:0.5rem;" :icon="['far', 'envelope']" />info@Lächeln.Icecreram</a></div>
                    </div>
                    <div class="ml-auto footer-item col-md-7">
                        <h3>Sign Up Newsletter</h3>
                        <ul class="list-unstyled">
                        <div>
                            <form action="" style="margin: 40px 0" class="subscription">
                                <input type="text" id="email" class="email-input" placeholder="Enter Your E-mail" v-model="email">
                                <button class="subscribe-btn" :disabled="!email" @click.prevent="toSubscribe">Subscribe</button>
                            </form>
                        </div>
                        <h3>Follow Us</h3>
                          <div>
                            <a href="" class="text-muted"><font-awesome-icon class="social-item" :icon="['fab', 'twitter']" /></a>
                            <a href="" class="text-muted"><font-awesome-icon class="social-item" :icon="['fab', 'facebook-f']" /></a>
                            <a href="" class="text-muted"><font-awesome-icon class="social-item" :icon="['fab', 'google-plus-g']" /></a>
                            <a href="" class="text-muted"><font-awesome-icon class="social-item" :icon="['fab', 'github']" /></a>
                            <a href="" class="text-muted"><font-awesome-icon class="social-item" :icon="['fab', 'linkedin-in']" /></a>
                            <a href="" class="text-muted"><font-awesome-icon class="social-item" :icon="['fab', 'instagram']" /></a>
                          </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div>
            <div class="container" style="margin-top: 10px;">
                <div class="row justify-content-center" style="font-size:25px">
                <small class="d-block mb-3 text-muted">&copy; <span style="color: black;">Lächeln</span>  - Only for Self learning purpose</small>
                </div>
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

<style lang="scss" scope>
    .support-item{
        display: flex;
        .support-description{
            margin-left: 20px;
            .desc-title{
                font-weight: bolder;
                margin: 0;
            }
            .desc-para{
                font-size: 14px;
            }
        }
        .support-icon{
                font-size: 40px;
                color: #838182;
        }
    }
    .footer-item{
        &:nth-child(1){
            flex-basis: 200px;
            flex-grow: 3;
            text-align: left;
        }
        &:nth-child(2){
            text-align: right;
        }
    }
    .social-item{
        margin-left: 10px;
        font-size: 20px;
    }
    .mb-25{
        margin-bottom: 25px;
    }
    .subscription{
        .email-input{
            border-width: thin;
            border-radius: 37px 0 0 37px;
            width: 35%;
        }
        .subscribe-btn{
        padding-bottom: 3px;
        font-size: 20px;
        background-color: #696969;
        color: white;
        border:none;
        border-radius: 0 37px 37px 0;
        margin-left:-4px;
        width:13%;
        }
    }
    ul{
        line-height: 40px;
    }
    .store-info{
        font-size: 25px;
        .footer-logo{
            font-size: 40px;
        }
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
</style>
