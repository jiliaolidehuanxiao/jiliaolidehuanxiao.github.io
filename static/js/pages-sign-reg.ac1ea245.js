(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sign-reg"],{"08c1":function(e,t,n){var i=n("75cc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("3243eeb0",i,!0,{sourceMap:!1,shadowMode:!1})},"3a5b":function(e,t,n){"use strict";n.r(t);var i=n("5e00"),a=n("f8ff");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("ad68");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"1b887502",null,!1,i["a"],s);t["default"]=r.exports},"57e4":function(e,t,n){"use strict";n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=0,a=8;function o(e){return p(s(g(e),e.length*a))}function s(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,i=-271733879,a=-1732584194,o=271733878,s=0;s<e.length;s+=16){var c=n,h=i,g=a,p=o;n=r(n,i,a,o,e[s+0],7,-680876936),o=r(o,n,i,a,e[s+1],12,-389564586),a=r(a,o,n,i,e[s+2],17,606105819),i=r(i,a,o,n,e[s+3],22,-1044525330),n=r(n,i,a,o,e[s+4],7,-176418897),o=r(o,n,i,a,e[s+5],12,1200080426),a=r(a,o,n,i,e[s+6],17,-1473231341),i=r(i,a,o,n,e[s+7],22,-45705983),n=r(n,i,a,o,e[s+8],7,1770035416),o=r(o,n,i,a,e[s+9],12,-1958414417),a=r(a,o,n,i,e[s+10],17,-42063),i=r(i,a,o,n,e[s+11],22,-1990404162),n=r(n,i,a,o,e[s+12],7,1804603682),o=r(o,n,i,a,e[s+13],12,-40341101),a=r(a,o,n,i,e[s+14],17,-1502002290),i=r(i,a,o,n,e[s+15],22,1236535329),n=u(n,i,a,o,e[s+1],5,-165796510),o=u(o,n,i,a,e[s+6],9,-1069501632),a=u(a,o,n,i,e[s+11],14,643717713),i=u(i,a,o,n,e[s+0],20,-373897302),n=u(n,i,a,o,e[s+5],5,-701558691),o=u(o,n,i,a,e[s+10],9,38016083),a=u(a,o,n,i,e[s+15],14,-660478335),i=u(i,a,o,n,e[s+4],20,-405537848),n=u(n,i,a,o,e[s+9],5,568446438),o=u(o,n,i,a,e[s+14],9,-1019803690),a=u(a,o,n,i,e[s+3],14,-187363961),i=u(i,a,o,n,e[s+8],20,1163531501),n=u(n,i,a,o,e[s+13],5,-1444681467),o=u(o,n,i,a,e[s+2],9,-51403784),a=u(a,o,n,i,e[s+7],14,1735328473),i=u(i,a,o,n,e[s+12],20,-1926607734),n=l(n,i,a,o,e[s+5],4,-378558),o=l(o,n,i,a,e[s+8],11,-2022574463),a=l(a,o,n,i,e[s+11],16,1839030562),i=l(i,a,o,n,e[s+14],23,-35309556),n=l(n,i,a,o,e[s+1],4,-1530992060),o=l(o,n,i,a,e[s+4],11,1272893353),a=l(a,o,n,i,e[s+7],16,-155497632),i=l(i,a,o,n,e[s+10],23,-1094730640),n=l(n,i,a,o,e[s+13],4,681279174),o=l(o,n,i,a,e[s+0],11,-358537222),a=l(a,o,n,i,e[s+3],16,-722521979),i=l(i,a,o,n,e[s+6],23,76029189),n=l(n,i,a,o,e[s+9],4,-640364487),o=l(o,n,i,a,e[s+12],11,-421815835),a=l(a,o,n,i,e[s+15],16,530742520),i=l(i,a,o,n,e[s+2],23,-995338651),n=f(n,i,a,o,e[s+0],6,-198630844),o=f(o,n,i,a,e[s+7],10,1126891415),a=f(a,o,n,i,e[s+14],15,-1416354905),i=f(i,a,o,n,e[s+5],21,-57434055),n=f(n,i,a,o,e[s+12],6,1700485571),o=f(o,n,i,a,e[s+3],10,-1894986606),a=f(a,o,n,i,e[s+10],15,-1051523),i=f(i,a,o,n,e[s+1],21,-2054922799),n=f(n,i,a,o,e[s+8],6,1873313359),o=f(o,n,i,a,e[s+15],10,-30611744),a=f(a,o,n,i,e[s+6],15,-1560198380),i=f(i,a,o,n,e[s+13],21,1309151649),n=f(n,i,a,o,e[s+4],6,-145523070),o=f(o,n,i,a,e[s+11],10,-1120210379),a=f(a,o,n,i,e[s+2],15,718787259),i=f(i,a,o,n,e[s+9],21,-343485551),n=d(n,c),i=d(i,h),a=d(a,g),o=d(o,p)}return Array(n,i,a,o)}function c(e,t,n,i,a,o){return d(h(d(d(t,e),d(i,o)),a),n)}function r(e,t,n,i,a,o,s){return c(t&n|~t&i,e,t,a,o,s)}function u(e,t,n,i,a,o,s){return c(t&i|n&~i,e,t,a,o,s)}function l(e,t,n,i,a,o,s){return c(t^n^i,e,t,a,o,s)}function f(e,t,n,i,a,o,s){return c(n^(t|~i),e,t,a,o,s)}function d(e,t){var n=(65535&e)+(65535&t),i=(e>>16)+(t>>16)+(n>>16);return i<<16|65535&n}function h(e,t){return e<<t|e>>>32-t}function g(e){for(var t=Array(),n=(1<<a)-1,i=0;i<e.length*a;i+=a)t[i>>5]|=(e.charCodeAt(i/a)&n)<<i%32;return t}function p(e){for(var t=i?"0123456789ABCDEF":"0123456789abcdef",n="",a=0;a<4*e.length;a++)n+=t.charAt(e[a>>2]>>a%4*8+4&15)+t.charAt(e[a>>2]>>a%4*8&15);return n}var v={hex_md5:o};t.default=v},"5e00":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"phone"},[n("v-uni-view",{staticStyle:{width:"100upx"}},[e._v("手机号")]),n("v-uni-view",{staticClass:"phone_A"},[n("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入手机号",maxlength:"11"},model:{value:e.userPhone,callback:function(t){e.userPhone=t},expression:"userPhone"}})],1)],1),n("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"58upx"}},[n("v-uni-view",{staticStyle:{width:"100upx"}},[e._v("验证码")]),n("v-uni-view",{staticClass:"phone_A_S"},[n("v-uni-input",{staticClass:"input",attrs:{maxlength:"6",placeholder:"请输入验证码"},model:{value:e.checkCode,callback:function(t){e.checkCode=t},expression:"checkCode"}}),60==e.timecount?n("v-uni-view",{staticClass:"getcode",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.GetCheckCode.apply(void 0,arguments)}}},[e._v(e._s(e.checkcode_btn))]):n("v-uni-view",{staticClass:"getcode",staticStyle:{"background-color":"#666666"}},[e._v(e._s(e.checkcode_btn))])],1)],1),n("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"74upx"}},[n("v-uni-view",{staticStyle:{width:"100upx"}},[e._v("密码")]),n("v-uni-view",{staticClass:"phone_A"},[n("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入新密码"},model:{value:e.userPass,callback:function(t){e.userPass=t},expression:"userPass"}})],1)],1),n("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"58upx"}},[n("v-uni-view",{staticStyle:{width:"100upx"}}),n("v-uni-view",{staticClass:"phone_A"},[n("v-uni-input",{staticClass:"input",attrs:{placeholder:"请再次确认新密码"},model:{value:e.userPass_2,callback:function(t){e.userPass_2=t},expression:"userPass_2"}})],1)],1),n("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"36upx","margin-left":"90upx","margin-right":"24upx"}},[n("v-uni-view",{staticClass:"font_A"},[n("v-uni-text",{staticStyle:{color:"#F56C6C"}},[e._v("注:")]),e._v("密码需要填6-20位字符，可由英文字母、数字组成，不能含空格")],1)],1),n("v-uni-view",{staticStyle:{"padding-left":"30upx"}},[n("v-uni-checkbox",{staticClass:"blue",class:e.license?"checked":"",staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",checked:e.license},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.btnLicense.apply(void 0,arguments)}}}),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLicense.apply(void 0,arguments)}}},[e._v("阅读并同意注册协议")])],1),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goReg()}}},[e._v("确认")]),n("v-uni-view",{staticStyle:{"margin-top":"30px","margin-bottom":"40upx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goApp.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"btn",staticStyle:{width:"196px",margin:"auto",height:"36px","line-height":"36px","font-size":"14px"}},[e._v("下载APP")])],1)],1)},o=[]},"75cc":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-1b887502]{background:#fff}.uni-checkbox-input[data-v-1b887502]::before{display:block}.phone[data-v-1b887502]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-top:%?118?%;margin-left:%?24?%;margin-right:%?24?%;font-size:%?32?%;font-family:PingFang SC;font-weight:400;padding-bottom:%?18?%;color:#333;opacity:1}.phone_A[data-v-1b887502]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?52?%;border-bottom:%?1?% solid #f5f5f5}.phone_A_S[data-v-1b887502]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?52?%;border-bottom:%?1?% solid #f5f5f5}.input[data-v-1b887502]{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#333;opacity:1}.getcode[data-v-1b887502]{\n\t\t/* font-size: 28upx;\n\tfont-family: PingFang SC;\n\tfont-weight: 400;\n\tpadding-right: 22upx;\n\tcolor: #F04F43;\n\topacity: 1; */width:%?200?%;height:%?88?%;background:#f02f30;opacity:1;border-radius:%?8?%;line-height:%?88?%;text-align:center;font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#fff}.font_A[data-v-1b887502]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;margin-left:%?88?%;margin-right:%?24?%;color:#666;opacity:1}.btn[data-v-1b887502]{width:%?702?%;height:%?88?%;background:#f02f30;opacity:1;border-radius:%?8?%;line-height:%?88?%;text-align:center;font-size:%?36?%;font-family:PingFang SC;font-weight:400;margin-left:%?24?%;margin-right:%?24?%;margin-top:%?46?%;color:#fff;opacity:1}body.?%PAGE?%[data-v-1b887502]{background:#fff}",""]),e.exports=t},ad68:function(e,t,n){"use strict";var i=n("08c1"),a=n.n(i);a.a},c0f2:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ff19")),o=i(n("57e4")),s={data:function(){return{parentId:"",userPhone:"",userPass:"",checkCode:"",userPass_2:"",checkcode_btn:"获取验证码",timecount:60,license:!1}},onLoad:function(e){a.default.isEmpty(e.parentId)||(this.parentId=e.parentId),uni.removeStorageSync("token")},methods:{btnLicense:function(e){console.log(111),this.license=!this.license},goApp:function(){uni.navigateTo({url:"/pages/sign/download"})},goLicense:function(){uni.navigateTo({url:"/pages/sign/license"})},GetCheckCode:function(){var e=this;if(a.default.isEmpty(this.userPhone)||11!=e.userPhone.length)return uni.showModal({title:"信息提示",content:"请输入正确的手机号",showCancel:!1}),e.checkcode_btn="获取验证码",void(e.timecount=60);uni.showLoading({title:"请等待..."}),uni.request({url:e.ApiGateWay+"/sale/message/GetCheckCode?type=1&phone="+e.userPhone,method:"POST",success:function(t){uni.hideLoading(),a.default.CheckData(t)?e.GetCode():uni.showModal({title:"信息提示",content:t.data.errorMessage,showCancel:!1})},fail:function(){uni.hideLoading(),uni.showModal({title:"信息提示",content:"网络错误",showCancel:!1})}})},GetCode:function(){var e=this;0==this.timecount?(this.checkcode_btn="获取验证码",this.timecount=60):(e.checkcode_btn=e.timecount+"秒后重发",e.timecount--,setTimeout((function(){e.GetCode()}),1e3))},goReg:function(){var e=this;if(a.default.isEmpty(this.userPhone)||11!=this.userPhone.length)uni.showToast({title:"请输入正确的手机号",icon:"none"});else if(a.default.isEmpty(this.checkCode)||6!=this.checkCode.length)uni.showToast({title:"请输入6位验证码",icon:"none"});else if(a.default.isEmpty(this.userPass)||this.userPass.length<6)uni.showToast({title:"请输入6位或以上密码",icon:"none"});else if(this.userPass==this.userPass_2)if(this.license){var t=o.default.hex_md5(this.userPass),n={userPhone:e.userPhone,userPass:t,checkCode:e.checkCode,appId:e.appId,parentId:e.parentId};uni.request({url:e.ApiGateWay+"/sale/Member/Register",data:n,dataType:"json",method:"POST",success:function(e){a.default.CheckData(e)?uni.showModal({title:"信息提示",content:"注册成功,去登录",showCancel:!1,success:function(e){e.confirm&&uni.reLaunch({url:"/pages/sign/sign"})}}):uni.showModal({title:"出错了",content:e.data.errorMessage,showCancel:!1})}})}else uni.showToast({title:"请阅读并同意注册协议",icon:"none"});else uni.showToast({title:"两次密码输入不一致",icon:"none"})}}};t.default=s},f8ff:function(e,t,n){"use strict";n.r(t);var i=n("c0f2"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},ff19:function(e,t,n){"use strict";function i(e){return null==e||void 0==e||""==e}function a(e){for(var t=e.split("?")[1],n=t.split("&"),i={},a=0;a<n.length;a++){var o=n[a].split("=");i[o[0]]=o[1]}return i}function o(){var e=new Date,t="-",n=e.getMonth()+1,i=e.getDate();n>=1&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i);var a=e.getFullYear()+t+n+t+i;return a}function s(e){if(i(e))return"";var t=e.replace(/\//g,"-");t=t.replace("T"," ");var n=t.split(" ");return n[0]}function c(){var e=new Date,t="-",n=e.getMonth()+1,i=e.getDate();n>=1&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i);var a=e.getHours(),o=e.getMinutes(),s=e.getSeconds();a>=0&&a<=9&&(a="0"+a),o>=0&&o<=9&&(o="0"+o),s>=0&&s<=9&&(s="0"+s);var c=e.getFullYear()+t+n+t+i+" "+a+":"+o+":"+s;return c}function r(e,t){var n=new Date(e),i=new Date(t),a=n.getTime(),o=i.getTime(),s=(o-a)/1e3,c=parseInt(s/86400),r=s-24*c*60*60,u=parseInt(r/3600),l=s-24*c*60*60-60*u*60,f=parseInt(l/60),d={total:s,day:c,hour:u,min:f};return d}function u(e){var t=new Date(e),n=["周日","周一","周二","周三","周四","周五","周六"],i={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),week:t.getDay(),weekStr:n[t.getDay()],hour:t.getHours(),min:t.getMinutes(),sec:t.getSeconds()};return console.log(i),i}function l(e){var t;return 0==e.getDay()&&(t="周日"),1==e.getDay()&&(t="周一"),2==e.getDay()&&(t="周二"),3==e.getDay()&&(t="周三"),4==e.getDay()&&(t="周四"),5==e.getDay()&&(t="周五"),6==e.getDay()&&(t="周六"),t}function f(e){var t=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!t.test(e)}function d(e){return 200!=e.statusCode?(401==e.statusCode&&(uni.clearStorageSync("token"),uni.navigateTo({url:"/pages/sign/sign"})),!1):0==e.data.errorCode}n("e25e"),n("ac1f"),n("5319"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var h={isEmpty:i,CheckData:d,getWeek:l,getNowDate:o,getNowDateTime:c,dateCompare:r,formatDate:s,getDateJSON:u,validMoney:f,urlToJSON:a};t.default=h}}]);