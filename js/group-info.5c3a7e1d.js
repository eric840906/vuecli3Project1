(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-info"],{"159b":function(t,a,e){var i=e("da84"),n=e("fdbc"),o=e("17c2"),s=e("9112");for(var r in n){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,a,e){"use strict";var i=e("b727").forEach,n=e("a640"),o=e("ae40"),s=n("forEach"),r=o("forEach");t.exports=s&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,e){"use strict";var i=e("23e7"),n=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"570b":function(t,a,e){},7357:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Alert"),e("main",{attrs:{role:"main"}},[e("Banner",{attrs:{picture:t.bannerImg,title:t.pageTitle}}),e("div",{staticClass:"album py-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 info-list"},[e("div",{staticClass:"rwd-info-scroll"},t._l(t.data,(function(a){return e("div",{key:a.id,staticClass:"col-12"},[e("div",{staticClass:"info"},[e("h5",{staticClass:"info-title"},[t._v(t._s(a.name))]),e("div",{staticClass:"info-text"},[e("p",[e("font-awesome-icon",{attrs:{icon:"mobile-alt"}}),e("a",{attrs:{href:"tel:"+a.tel}},[t._v(" "+t._s(a.tel))])],1),e("p",[e("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" "+t._s(a.address)+" ")],1),e("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.Navigation(a.local[0],a.local[1])}}},[t._v("Navigation ")])])])])})),0)]),e("div",{staticClass:"col-md-8 d-flex flex-column"},[e("div",{staticClass:"map"},[e("l-map",{ref:"myMap",staticStyle:{height:"50vh"},attrs:{zoom:t.zoom,center:t.center,options:t.options}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),e("l-marker",{ref:"location",attrs:{"lat-lng":t.center}},[e("l-popup",[t._v(" 你的位置 ")])],1),t._l(t.data,(function(a){return e("l-marker",{key:a.id,attrs:{"lat-lng":a.local}},[e("l-icon",{attrs:{"icon-url":"夢時代購物中心"===a.name?t.icon.type.gold:t.icon.type.black,"shadow-url":t.icon.shadowUrl,"icon-size":t.icon.iconSize,"icon-anchor":t.icon.iconAnchor,"popup-anchor":t.icon.popupAnchor,"shadow-size":t.icon.shadowSize}}),e("l-popup",[t._v(" "+t._s(a.name)+" ")])],1)}))],2)],1)])])])])],1)],1)},n=[],o=e("2699"),s=e("a40a"),r=e("4e2b"),c=e("98ab"),l=e("84af"),u={components:{LMap:o["a"],LTileLayer:s["a"],LMarker:r["a"],Alert:c["a"],Banner:l["a"]},data:function(){return{bannerImg:{backgroundImage:"url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80')"},pageTitle:"Information",data:[{id:1,name:"Taoyuan HQ",local:[24.990031,121.313311],tel:"03-999-8888",address:"No. 2, Changshou St., Taoyuan Dist., Taoyuan City 330"},{id:2,name:"Taipei 101 Flagship Store",local:[25.034034,121.564571],tel:"02-9999-8888",address:"No. 7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City, 110"},{id:3,name:"Kaohsiung Branch Store",local:[22.66982,120.302265],tel:"07-111-2345",address:"No. 777, Boai 2nd Road, Zuoying District, Kaohsiung City, 813"},{id:4,name:"Zhongli Branch Store",local:[24.962541,121.223647],tel:"03-111-2222",address:"No. 357, Yuanhua Rd., Zhongli Dist., Taoyuan City, 320"}],zoom:13,center:[24.990031,121.313311],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',options:{zoomControl:!1},icon:{type:{black:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",gold:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png"},shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}}},methods:{Navigation:function(t,a){var e=this;e.$refs.myMap.mapObject.flyTo([t,a],18)}},beforeDestroy:function(){this.$store.dispatch("updateLoading",!0)},mounted:function(){var t=this;this.$nextTick((function(){t.$store.dispatch("updateLoading",!1),navigator.geolocation.getCurrentPosition((function(a){var e=a.coords;t.center=[e.latitude,e.longitude],t.$refs.location.mapObject.openPopup()}))}))}},f=u,d=(e("ca82"),e("2877")),p=Object(d["a"])(f,i,n,!1,null,"e74af522",null);a["default"]=p.exports},"84af":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"banner",style:t.picture},[e("div",{staticClass:"page-title"},[e("h1",[t._v(t._s(t.title))]),e("br"),e("h1",{staticClass:"lead"})])])])},n=[],o={props:["picture","title"]},s=o,r=(e("f4e2"),e("2877")),c=Object(r["a"])(s,i,n,!1,null,null,null);a["a"]=c.exports},"98ab":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,i){return e("div",{key:i,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(i)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},n=[],o=(e("4160"),e("a434"),e("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(e,i){e.timestamp===t&&a.messages.splice(i,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,e)}))}}),s=o,r=(e("e5be"),e("2877")),c=Object(r["a"])(s,i,n,!1,null,null,null);a["a"]=c.exports},"99d0":function(t,a,e){},a434:function(t,a,e){"use strict";var i=e("23e7"),n=e("23cb"),o=e("a691"),s=e("50c4"),r=e("7b0b"),c=e("65f0"),l=e("8418"),u=e("1dde"),f=e("ae40"),d=u("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,a){var e,i,u,f,d,p,b=r(this),y=s(b.length),C=n(t,y),w=arguments.length;if(0===w?e=i=0:1===w?(e=0,i=y-C):(e=w-2,i=m(h(o(a),0),y-C)),y+e-i>g)throw TypeError(v);for(u=c(b,i),f=0;f<i;f++)d=C+f,d in b&&l(u,f,b[d]);if(u.length=i,e<i){for(f=C;f<y-i;f++)d=f+i,p=f+e,d in b?b[p]=b[d]:delete b[p];for(f=y;f>y-i+e;f--)delete b[f-1]}else if(e>i)for(f=y-i;f>C;f--)d=f+i-1,p=f+e-1,d in b?b[p]=b[d]:delete b[p];for(f=0;f<e;f++)b[f+C]=arguments[f+2];return b.length=y-i+e,u}})},a640:function(t,a,e){"use strict";var i=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&i((function(){e.call(null,a||function(){throw 1},1)}))}},ca82:function(t,a,e){"use strict";var i=e("570b"),n=e.n(i);n.a},e5be:function(t,a,e){"use strict";var i=e("fffd"),n=e.n(i);n.a},f4e2:function(t,a,e){"use strict";var i=e("99d0"),n=e.n(i);n.a},fffd:function(t,a,e){}}]);
//# sourceMappingURL=group-info.5c3a7e1d.js.map