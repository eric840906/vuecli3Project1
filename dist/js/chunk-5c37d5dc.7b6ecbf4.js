(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c37d5dc"],{"11a5":function(t,e,a){"use strict";var o=a("e4d4"),n=a.n(o);n.a},4186:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pageInfo.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.pageShift(t.pageInfo.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pageInfo.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pageInfo.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.pageShift(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pageInfo.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.pageShift(t.pageInfo.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},n=[],s={props:["pageInfo"],methods:{pageShift:function(t){this.$emit("pageChange",t),console.log(t)}}},i=s,l=a("2877"),c=Object(l["a"])(i,o,n,!1,null,null,null);e["a"]=c.exports},"99af":function(t,e,a){"use strict";var o=a("23e7"),n=a("d039"),s=a("e8b5"),i=a("861d"),l=a("7b0b"),c=a("50c4"),r=a("8418"),p=a("65f0"),d=a("1dde"),u=a("b622"),m=a("2d00"),f=u("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",C=m>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),b=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},_=!C||!g;o({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,o,n,s,i=l(this),d=p(i,0),u=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?i:arguments[e],b(s)){if(n=c(s.length),u+n>v)throw TypeError(h);for(a=0;a<n;a++,u++)a in s&&r(d,u,s[a])}else{if(u>=v)throw TypeError(h);r(d,u++,s)}return d.length=u,d}})},a852:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-outline-success btn-sm",attrs:{type:"button"},on:{click:function(e){return t.openModal("isNew")}}},[t._v(" 建立優惠券 ")])]),a("table",{staticClass:"table",staticStyle:{margin:"30px auto",width:"70%"}},[t._m(0),a("tbody",t._l(t.coupons,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.deleteCoupon(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.title)+" ")]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.percent)+"%off")]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",{staticClass:"text-danger"},[t._v("未啟用")])]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.code))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.due_date))]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("isEdit",e)}}},[t._v(" 編輯 ")])])])})),0)]),a("Pagination",{attrs:{pageInfo:t.pagination},on:{pageChange:t.getCoupon}}),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"title"}},[t._v("優惠名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"輸入優惠名稱"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"category"}},[t._v("折扣")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"category",placeholder:"輸入折扣(%off)"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"price"}},[t._v("使用期限")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"yyyy-mm-dd"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"price"}},[t._v("優惠代碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"輸入優惠代碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,n=o.checked?1:0;if(Array.isArray(a)){var s=null,i=t._i(a,s);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([s])):i>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",n)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v(" 確認 ")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th"),a("th",[t._v("名稱")]),a("th",[t._v("折扣")]),a("th",[t._v("啟用")]),a("th",[t._v("優惠代碼")]),a("th",{staticClass:"text-right"},[t._v("期限")]),a("th")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增優惠")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(a("99af"),a("1157")),i=a.n(s),l=a("4186"),c={components:{Pagination:l["a"]},data:function(){return{coupons:[],tempCoupon:{},isNew:!1,pagination:{}}},methods:{getCoupon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/admin/coupons?page=").concat(t);e.$http.get(a).then((function(t){e.coupons=t.data.coupons,e.pagination=t.data.pagination}))},addCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/admin/coupon"),a="post";t.due_date=new Date(t.due_date).getTime(),t.isNew||(a="put",e="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/admin/coupon/").concat(t.tempCoupon.id),t.$http[a](e,{data:t.tempCoupon}).then((function(t){}))),t.$http[a](e,{data:t.tempCoupon}).then((function(e){e.data.success?(i()("#couponModal").modal("hide"),t.getCoupon()):(i()("#couponModal").modal("hide"),t.getCoupon(),alert("新增失敗"))}))},deleteCoupon:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("eric840906","/admin/coupon/").concat(t);e.$http.delete(a).then((function(t){t.data.success&&(e.getCoupon(),i()("#delProductModal").modal("hide"))}))},openModal:function(t,e){switch(t){case"isNew":this.tempCoupon={},this.isNew=!0,i()("#couponModal").modal("show");break;case"isEdit":this.tempCoupon=Object.assign({},e),i()("#couponModal").modal("show");break}}},created:function(){this.getCoupon()}},r=c,p=(a("11a5"),a("2877")),d=Object(p["a"])(r,o,n,!1,null,null,null);e["default"]=d.exports},e4d4:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5c37d5dc.7b6ecbf4.js.map