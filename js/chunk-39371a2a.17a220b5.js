(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39371a2a"],{"01f7":function(t,a,s){},"53d7":function(t,a,s){"use strict";var e=s("01f7"),o=s.n(e);o.a},"82ae":function(t,a,s){},"88b7":function(t,a,s){"use strict";var e=s("8f4f"),o=s.n(e);o.a},"8f4f":function(t,a,s){},cd47:function(t,a,s){"use strict";var e=s("82ae"),o=s.n(e);o.a},cd56:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("transition",{attrs:{name:"page"}},[s("router-view")],1),s("Gotop"),s("Cart",{attrs:{cartInfo:t.cartList,isloading:t.isLoading}}),s("Footer")],1)},o=[],i=(s("99af"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"top-footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h2",{staticClass:"footer-logo",staticStyle:{"font-family":"'Tangerine', cursive"}},[t._v("Lächeln")]),s("div",{staticClass:"social-box"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-item",attrs:{icon:["fab","twitter"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-item",attrs:{icon:["fab","facebook-f"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-item",attrs:{icon:["fab","google-plus-g"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-item",attrs:{icon:["fab","github"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-item",attrs:{icon:["fab","linkedin-in"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-item",attrs:{icon:["fab","instagram"]}})],1)]),s("div",{staticClass:"email-box"},[s("a",{attrs:{href:"mailto: info@Lächeln.Icecream"}},[s("font-awesome-icon",{staticStyle:{"font-size":"14px","margin-right":"0.5rem"},attrs:{icon:["far","envelope"]}}),t._v("info@Lächeln.Icecreram")],1)]),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. In error id rerum totam quam tempora consectetur alias ipsum quisquam voluptates, illo rem voluptatibus architecto, earum harum! Quis repellat suscipit omnis?")]),s("form",{staticClass:"subscription",attrs:{action:""}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email-input",attrs:{type:"text",id:"email",placeholder:"Enter Your E-mail"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),s("button",{staticClass:"subscribe-btn",attrs:{disabled:!t.email},on:{click:function(a){return a.preventDefault(),t.toSubscribe(a)}}},[t._v("Subscribe")])])])])]),t._m(0)])}),n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lower-footer"},[s("div",{staticClass:"lower-text",staticStyle:{"font-size":"16px"}},[s("small",[t._v("© "),s("span",[t._v("Lächeln")]),t._v(" - Only for Self learning purpose")])])])}],c={data:function(){return{email:""}},methods:{toSubscribe:function(){var t=this;t.$bus.$emit("message:push","Thanks for your subscription!","success"),t.email=""}}},r=c,l=(s("53d7"),s("2877")),u=Object(l["a"])(r,i,n,!1,null,null,null),d=u.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"gotop-btn",on:{click:t.goTop}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","angle-double-up"]}})],1)])},f=[],m={methods:{goTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},h=m,v=(s("cd47"),Object(l["a"])(h,p,f,!1,null,null,null)),g=v.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"cartframe"},[0!==t.cartInfo.data.total?s("div",{staticClass:"cartcount"},[s("div",{staticClass:"cartcounter"},[t._v(t._s(t.cartInfo.data.carts.length))])]):t._e(),s("div",{staticClass:"cartlist"},[s("h5",{staticClass:"title"},[t._v("SHOPPING LIST")]),s("div",{staticClass:"scroll-menu"},[s("table",{staticClass:"shop-list"},[s("thead",[s("th",[t._v(t._s(t.tableHead.product))]),s("th",[t._v(t._s(t.tableHead.quantity))]),s("th",[t._v(t._s(t.tableHead.price))])]),s("tbody",t._l(t.cartInfo.data.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"list-item",attrs:{"data-head":t.tableHead.product}},[t._v(" "+t._s(a.product.title)+" ")]),s("td",{staticClass:"list-item",attrs:{"data-head":t.tableHead.quantity}},[t._v(" "+t._s(a.qty)+t._s(a.product.unit)+" ")]),s("td",{staticClass:"list-item",attrs:{"data-head":t.tableHead.price}},[t._v(t._s(t._f("currency")(a.final_total)))]),s("td",{staticClass:"delete-item"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeItem(a.id)}}},[s("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)])])})),0)])]),s("div",{staticClass:"list-bottom"},[s("div",{staticClass:"d-flex"},[s("p",{class:{"line-cross":t.cartInfo.data.total!=t.cartInfo.data.final_total}},[t._v("Total Price: "+t._s(t._f("currency")(t.cartInfo.data.total)))])]),t.cartInfo.data.total!=t.cartInfo.data.final_total?s("div",{staticClass:"applied-text"},[s("p",{staticClass:"text-right text-success"},[t._v("Coupon Applied !")]),s("p",{staticClass:"text-right text-success",attrs:{colspan:"2"}},[t._v("Final Price: "+t._s(t._f("currency")(Math.round(t.cartInfo.data.final_total))))])]):t._e(),s("div",{staticClass:"d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",staticStyle:{flex:"1","border-radius":"0.15rem 0 0 0.15rem"},attrs:{type:"text",placeholder:"Enter Coupon Codes"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"apply-btn",attrs:{type:"button"},on:{click:t.applyCoupon}},[t._v(" Apply ")])])]),s("button",{staticClass:"pay-btn",on:{click:function(a){return a.preventDefault(),t.toPay(a)}}},[t._v(" Checkout ")])])]),s("a",{staticClass:"carttrigger",attrs:{href:"#"}},[t.isloading?s("font-awesome-icon",{staticClass:"cartloading fa-pulse",attrs:{icon:["fas","spinner"]}}):s("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","shopping-cart"]}})],1)])])},b=[],_=s("1157"),$=s.n(_),y={props:["cartInfo","isloading"],data:function(){return{coupon_code:"",tableHead:{product:"Products",quantity:"Quantity",price:"Price"},productStatus:{loading:""}}},methods:{refreshCart:function(){this.$emit("refreshCart")},removeItem:function(t){var a=this,s=this;this.$store.dispatch("updateLoading",!0),s.productStatus.loading=t;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/cart/").concat(t);s.$http.delete(e).then((function(t){t.data.success?(s.$bus.$emit("message:push","item removed","danger"),a.$store.dispatch("getCart"),s.productStatus.loading="",a.$store.dispatch("updateLoading",!1)):(s.$bus.$emit("message:push","connection fail","danger"),s.productStatus.loading="",a.$store.dispatch("updateLoading",!1))}))},applyCoupon:function(){var t=this,a={code:t.coupon_code},s="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/coupon");t.$http.post(s,{data:a}).then((function(a){t.isLoading=!0,a.data.success?(t.refreshCart(),t.isLoading=!1,t.$bus.$emit("message:push","Coupon code successfully applied","success")):(t.isLoading=!1,t.$bus.$emit("message:push","Cant't find coupon code","danger"))}))},toPay:function(){var t=this;0===t.cartInfo.data.total?t.$bus.$emit("message:push","Cart is empty","danger"):t.$router.push("/paymentpage/paymentmake")}},mounted:function(){$()(".carttrigger").click((function(t){t.preventDefault()})),$()(".cartframe").click((function(t){t.preventDefault(),t.stopPropagation(),$()(".cartlist").addClass("show")})),$()("body").click((function(t){$()(".cartlist.show").removeClass("show")}))}},w=y,x=(s("88b7"),Object(l["a"])(w,C,b,!1,null,null,null)),L=x.exports,I={components:{Gotop:g,Footer:d,Cart:L},methods:{getCart:function(){this.$store.dispatch("getCart")},removeCart:function(t){var a=this,s=this;this.$store.dispatch("updateLoading",!0),s.productStatus.loading=t;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/cart/").concat(t);s.$http.delete(e).then((function(t){t.data.success?(s.$bus.$emit("message:push","item removed","danger"),s.getCart(),s.productStatus.loading="",a.$store.dispatch("updateLoading",!1)):(s.$bus.$emit("message:push","connection fail","danger"),s.productStatus.loading="",a.$store.dispatch("updateLoading",!1))}))}},computed:{isLoading:function(){return this.$store.state.isLoading},cartList:function(){return this.$store.state.cartList}},created:function(){this.getCart()}},k=I,S=Object(l["a"])(k,e,o,!1,null,null,null);a["default"]=S.exports}}]);
//# sourceMappingURL=chunk-39371a2a.17a220b5.js.map