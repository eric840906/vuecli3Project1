(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-coupon"],{"159b":function(t,s,a){var o=a("da84"),n=a("fdbc"),i=a("17c2"),e=a("9112");for(var c in n){var r=o[c],d=r&&r.prototype;if(d&&d.forEach!==i)try{e(d,"forEach",i)}catch(l){d.forEach=i}}},"17c2":function(t,s,a){"use strict";var o=a("b727").forEach,n=a("a640"),i=a("ae40"),e=n("forEach"),c=i("forEach");t.exports=e&&c?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"2a51":function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Alert"),a("main",{attrs:{role:"main"}},[a("Banner",{attrs:{picture:t.bannerImg,title:t.pageTitle}}),a("div",{staticClass:"album py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"window-cards card-deck mb-3 text-center justify-content-center"},t._l(t.randomCoupons,(function(s){return a("div",{key:s.id,staticClass:"card mb-4 shadow-sm"},[a("div",{staticClass:"front face"}),a("div",{staticClass:"back"},[a("div",{staticClass:"card-header",class:{"small-discount-title":s.discount<=20,"big-discount-title":s.discount>=50,"normal-discount-title":s.discount<50&&s.discount>20}},[a("h4",{staticClass:"my-0 font-weight-normal"},[t._v(" "+t._s(s.title)+" ")])]),a("div",{staticClass:"card-body",class:{"small-discount-title":s.discount<=20,"big-discount-title":s.discount>=50,"normal-discount-title":s.discount<50&&s.discount>20}},[a("h1",{staticClass:"card-title pricing-card-title"},[t._v(" "+t._s(s.discount)+"%off ")]),a("h2",[t._v("Coupon Code")]),a("input",{staticClass:"code",attrs:{type:"text",readonly:"readonly"},domProps:{value:s.code}}),a("h3",[t._v("Expiration:"+t._s(s.due_date))]),a("a",{staticClass:"btn btn-lg notice-btn",on:{click:function(s){return s.preventDefault(),t.copyCode(s)}}},[t._v("Copy")]),a("router-link",{staticClass:"btn btn-lg notice-btn",attrs:{to:"/shoppingmain"}},[t._v("Shopping")])],1)])])})),0),a("div",{staticClass:"responsive-cards card-deck mb-3 text-center justify-content-center"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselCards","data-ride":"carousel"}},[t._m(0),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("div",{staticClass:"card mb-4 shadow-sm"},[a("div",{staticClass:"front face"}),a("div",{staticClass:"back"},[a("div",{staticClass:"card-header",class:{"small-discount-title":t.randomCoupons[0].discount<=20,"big-discount-title":t.randomCoupons[0].discount>=50,"normal-discount-title":t.randomCoupons[0].discount<50&&t.randomCoupons[0].discount>20}},[a("h4",{staticClass:"my-0 font-weight-normal"},[t._v(" "+t._s(t.randomCoupons[0].title)+" ")])]),a("div",{staticClass:"card-body",class:{"small-discount-title":t.randomCoupons[0].discount<=20,"big-discount-title":t.randomCoupons[0].discount>=50,"normal-discount-title":t.randomCoupons[0].discount<50&&t.randomCoupons[0].discount>20}},[a("h1",{staticClass:"card-title pricing-card-title"},[t._v(" "+t._s(t.randomCoupons[0].discount)+"%off ")]),a("h2",[t._v("Coupon Code")]),a("input",{staticClass:"code",attrs:{type:"text",readonly:"readonly"},domProps:{value:t.randomCoupons[0].code}}),a("h3",[t._v("Expiration:"+t._s(t.randomCoupons[0].due_date))]),a("a",{staticClass:"btn btn-lg notice-btn",on:{click:function(s){return s.preventDefault(),t.copyCode(s)}}},[t._v("Copy")]),a("router-link",{staticClass:"btn btn-lg notice-btn",attrs:{to:"/shoppingmain"}},[t._v("Shopping")])],1)])])]),a("div",{staticClass:"carousel-item"},[a("div",{staticClass:"card mb-4 shadow-sm"},[a("div",{staticClass:"front face"}),a("div",{staticClass:"back"},[a("div",{staticClass:"card-header",class:{"small-discount-title":t.randomCoupons[1].discount<=20,"big-discount-title":t.randomCoupons[1].discount>=50,"normal-discount-title":t.randomCoupons[1].discount<50&&t.randomCoupons[1].discount>20}},[a("h4",{staticClass:"my-0 font-weight-normal"},[t._v(" "+t._s(t.randomCoupons[1].title)+" ")])]),a("div",{staticClass:"card-body",class:{"small-discount-title":t.randomCoupons[1].discount<=20,"big-discount-title":t.randomCoupons[1].discount>=50,"normal-discount-title":t.randomCoupons[1].discount<50&&t.randomCoupons[0].discount>20}},[a("h1",{staticClass:"card-title pricing-card-title"},[t._v(" "+t._s(t.randomCoupons[1].discount)+"%off ")]),a("h2",[t._v("Coupon Code")]),a("input",{staticClass:"code",attrs:{type:"text",readonly:"readonly"},domProps:{value:t.randomCoupons[1].code}}),a("h3",[t._v("Expiration:"+t._s(t.randomCoupons[1].due_date))]),a("a",{staticClass:"btn btn-lg notice-btn",on:{click:function(s){return s.preventDefault(),t.copyCode(s)}}},[t._v("Copy")]),a("router-link",{staticClass:"btn btn-lg notice-btn",attrs:{to:"/shoppingmain"}},[t._v("Shopping")])],1)])])]),a("div",{staticClass:"carousel-item"},[a("div",{staticClass:"card mb-4 shadow-sm"},[a("div",{staticClass:"front face"}),a("div",{staticClass:"back"},[a("div",{staticClass:"card-header",class:{"small-discount-title":t.randomCoupons[2].discount<=20,"big-discount-title":t.randomCoupons[2].discount>=50,"normal-discount-title":t.randomCoupons[2].discount<50&&t.randomCoupons[0].discount>20}},[a("h4",{staticClass:"my-0 font-weight-normal"},[t._v(" "+t._s(t.randomCoupons[2].title)+" ")])]),a("div",{staticClass:"card-body",class:{"small-discount-title":t.randomCoupons[2].discount<=20,"big-discount-title":t.randomCoupons[2].discount>=50,"normal-discount-title":t.randomCoupons[2].discount<50&&t.randomCoupons[2].discount>20}},[a("h1",{staticClass:"card-title pricing-card-title"},[t._v(" "+t._s(t.randomCoupons[2].discount)+"%off ")]),a("h2",[t._v("Coupon Code")]),a("input",{staticClass:"code",attrs:{type:"text",readonly:"readonly"},domProps:{value:t.randomCoupons[2].code}}),a("h3",[t._v("Expiration:"+t._s(t.randomCoupons[2].due_date))]),a("a",{staticClass:"btn btn-lg notice-btn",on:{click:function(s){return s.preventDefault(),t.copyCode(s)}}},[t._v("Copy")]),a("router-link",{staticClass:"btn btn-lg notice-btn",attrs:{to:"/shoppingmain"}},[t._v("Shopping")])],1)])])])])])])])])],1),t._m(1)],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carouselCards","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#carouselCards","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#carouselCards","data-slide-to":"2"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal fade",attrs:{id:"start-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body start-modal text-center"},[a("div",{staticClass:"lds-circle"},[a("div")]),a("h3",{staticClass:"loading-text"},[t._v("Grab a Coupon!")]),a("h3",{staticClass:"loading-text"},[t._v("Click to try your luck")])])])])])}],i=(a("7db0"),a("1157")),e=a.n(i),c=a("98ab"),r=a("84af"),d={components:{Alert:c["a"],Banner:r["a"]},data:function(){return{bannerImg:{backgroundImage:"url('https://images.unsplash.com/photo-1577218546063-5e53e820851e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')"},pageTitle:"Get the party started",coupons:[{due_date:"2020-09-06",code:"FpNm9d49syE",discount:30,title:"Anniversary"},{due_date:"2020-08-31",code:"Si7e98g1IqhY",discount:20,title:"Summer Time"},{due_date:"2020-08-02",code:"yDh7e1sU5Kj",discount:10,title:"Summer Sale"},{due_date:"2020-08-31",code:"GtyH8tAfl6k",discount:5,title:"Cool Down"},{due_date:"2020-12-31",code:"ht37YWRtyrjU",discount:50,title:"Big Win"},{due_date:"2020-12-31",code:"JGd5u0EjkA",discount:30,title:"Second Prize"},{due_date:"2020-12-31",code:"fH1tK8pd6B",discount:25,title:"Third"}],shuffleCoupons:"",comparisonA:"",comparisonB:"",randomCoupons:[]}},methods:{randomSort:function(t,s){var a=this;a.shuffleCoupons=Math.random()>.5?-1:1},shuffleCoupon:function(){var t=this;t.coupons.sort((function(){return t.comparisonA=Math.random(),t.comparisonB=Math.random(),t.comparisonA>t.comparisonB?-1:t.comparisonA<t.comparisonB?1:0}))},getCoupon:function(){for(var t=this,s=0;s<3;s++){var a=parseInt(7*Math.random());t.randomCoupons.push(t.coupons[a])}},startDrawing:function(){e()(".start-btn").fadeOut(),e()(".card-deck").fadeIn()},copyCode:function(t){var s=e()(t.currentTarget).closest(".card-body").find(".code");s.select();try{var a=document.execCommand("copy"),o=a?"Coupon copied":"unsuccessful";this.$bus.$emit("message:push",o,"success")}catch(n){this.$bus.$emit("message:push","connection fail","danger")}}},beforeDestroy:function(){this.$store.dispatch("updateLoading",!0)},mounted:function(){this.$store.dispatch("updateLoading",!1);var t=this.$el.children[1].children[1].firstChild.firstChild.offsetTop;e()(".card").click((function(t){e()(t.currentTarget).addClass("flip"),e()(".card").off()})),e()("#start-modal").modal("show"),e()("#start-modal").click((function(){window.scrollTo({top:t,behavior:"smooth"})})),e()("body").click((function(t){e()("#start-modal").modal("hide")}))},created:function(){this.shuffleCoupon(),this.getCoupon()}},l=d,u=(a("347e"),a("2877")),p=Object(u["a"])(l,o,n,!1,null,"2c04893d",null);s["default"]=p.exports},"347e":function(t,s,a){"use strict";var o=a("e6a2"),n=a.n(o);n.a},4160:function(t,s,a){"use strict";var o=a("23e7"),n=a("17c2");o({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"7db0":function(t,s,a){"use strict";var o=a("23e7"),n=a("b727").find,i=a("44d2"),e=a("ae40"),c="find",r=!0,d=e(c);c in[]&&Array(1)[c]((function(){r=!1})),o({target:"Array",proto:!0,forced:r||!d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},"84af":function(t,s,a){"use strict";var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"banner",style:t.picture},[a("div",{staticClass:"page-title"},[a("h1",[t._v(t._s(t.title))]),a("br"),a("h1",{staticClass:"lead"})])])])},n=[],i={props:["picture","title"]},e=i,c=(a("f4e2"),a("2877")),r=Object(c["a"])(e,o,n,!1,null,null,null);s["a"]=r.exports},"98ab":function(t,s,a){"use strict";var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,o){return a("div",{key:o,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v(" "+t._s(s.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(o)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},n=[],i=(a("4160"),a("a434"),a("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,s){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:s,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var s=this;setTimeout((function(){s.messages.forEach((function(a,o){a.timestamp===t&&s.messages.splice(o,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(s){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(s,a)}))}}),e=i,c=(a("e5be"),a("2877")),r=Object(c["a"])(e,o,n,!1,null,null,null);s["a"]=r.exports},"99d0":function(t,s,a){},a434:function(t,s,a){"use strict";var o=a("23e7"),n=a("23cb"),i=a("a691"),e=a("50c4"),c=a("7b0b"),r=a("65f0"),d=a("8418"),l=a("1dde"),u=a("ae40"),p=l("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,C=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!p||!m},{splice:function(t,s){var a,o,l,u,p,m,b=c(this),g=e(b.length),_=n(t,g),y=arguments.length;if(0===y?a=o=0:1===y?(a=0,o=g-_):(a=y-2,o=C(f(i(s),0),g-_)),g+a-o>h)throw TypeError(v);for(l=r(b,o),u=0;u<o;u++)p=_+u,p in b&&d(l,u,b[p]);if(l.length=o,a<o){for(u=_;u<g-o;u++)p=u+o,m=u+a,p in b?b[m]=b[p]:delete b[m];for(u=g;u>g-o+a;u--)delete b[u-1]}else if(a>o)for(u=g-o;u>_;u--)p=u+o-1,m=u+a-1,p in b?b[m]=b[p]:delete b[m];for(u=0;u<a;u++)b[u+_]=arguments[u+2];return b.length=g-o+a,l}})},a640:function(t,s,a){"use strict";var o=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&o((function(){a.call(null,s||function(){throw 1},1)}))}},e5be:function(t,s,a){"use strict";var o=a("fffd"),n=a.n(o);n.a},e6a2:function(t,s,a){},f4e2:function(t,s,a){"use strict";var o=a("99d0"),n=a.n(o);n.a},fffd:function(t,s,a){}}]);
//# sourceMappingURL=group-coupon.7a84faab.js.map