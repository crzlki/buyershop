(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7c0e778e"],{1214:function(t,e,n){"use strict";n("4e62")},"4e62":function(t,e,n){},6402:function(t,e,n){"use strict";var r=n("ff66"),i=n("e487");var s={props:{verifyType:{defalut:"LOGIN",type:String}},data(){return{show:!1,type:"LOGIN",data:{backImage:"",slidingImage:"",originalHeight:150,originalWidth:300,sliderWidth:60,sliderHeight:60},distance:0,flag:!1,downX:0,bgColor:"#04ad11",verifyText:"拖动滑块解锁"}},methods:{mouseDown(t){this.downX=t.clientX,this.flag=!0},mouseMove(t){this.flag&&((t=t.clientX-this.downX)>this.data.originalWidth-43?this.distance=this.data.originalWidth-43:this.distance=t<0?0:t)},mouseUp(){if(!this.flag)return!1;this.flag=!1;var t={verificationEnums:this.type,xPos:this.distance};t=t,Object(r.d)({url:r.c+"/common/common/slider/"+t.verificationEnums,method:r.a.POST,needToken:!1,params:t,headers:{uuid:i.a.getItem("uuid")}}).then(t=>{if(t.success)if(t.result)this.bgColor="green",this.verifyText="解锁成功",this.$emit("change",{status:!0,distance:this.distance});else{this.bgColor="red",this.verifyText="解锁失败";let t=this;setTimeout(()=>{t.init()},1e3),this.$emit("change",{status:!1,distance:this.distance})}else this.init()}).catch(()=>{this.init()})},init(){var t;this.flag=!1,this.downX=0,this.distance=0,this.bgColor="#04ad11",this.verifyText="拖动滑块解锁",t=this.type,Object(r.d)({url:r.c+"/common/common/slider/"+t,method:r.a.GET,needToken:!1,headers:{uuid:i.a.getItem("uuid")}}).then(t=>{t.result?(this.data=t.result,this.show=!0):this.$Message.warning("请求失败请重试！")})}},watch:{verifyType:{immediate:!0,handler:function(t){this.type=t}}}},n=(n("1214"),n("2877")),n=Object(n.a)(s,function(){var t=this,e=t.$createElement,e=t._self._c||e;return t.show?e("div",{staticClass:"verify-content",on:{mousemove:t.mouseMove,mouseup:t.mouseUp,click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"imgBox",style:{width:t.data.originalWidth+"px",height:t.data.originalHeight+"px"}},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.data.backImage,alt:""}}),e("img",{staticClass:"slider",style:{left:t.distance+"px",top:t.data.randomY+"px"},attrs:{src:t.data.slidingImage,width:t.data.sliderWidth,height:t.data.sliderHeight,alt:""}}),e("Icon",{staticClass:"refresh",attrs:{type:"md-refresh"},on:{click:t.init}})],1),e("div",{staticClass:"handle",style:{width:t.data.originalWidth+"px"}},[e("span",{staticClass:"bgcolor",style:{width:t.distance+"px",background:t.bgColor}}),e("span",{staticClass:"swiper",style:{left:t.distance+"px"},on:{mousedown:t.mouseDown}},[e("Icon",{attrs:{type:"md-arrow-round-forward"}})],1),e("span",{staticClass:"text"},[t._v(t._s(t.verifyText))])])]):t._e()},[],!1,null,"b63eba40",null);e.a=n.exports},"7ded":function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"h",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"k",function(){return u}),n.d(e,"d",function(){return d}),n.d(e,"j",function(){return c}),n.d(e,"i",function(){return l}),n.d(e,"f",function(){return h}),n.d(e,"b",function(){return f}),n.d(e,"g",function(){return m});var r=n("ff66");function i(t){return Object(r.d)({url:"/buyer/passport/member/register",method:r.a.POST,needToken:!1,data:t})}function s(t){return Object(r.d)({url:"/buyer/passport/member/userLogin",method:r.a.POST,needToken:!1,data:t,headers:{clientType:"PC"}})}function a(t){return Object(r.d)({url:"/buyer/passport/member/smsLogin",method:r.a.POST,needToken:!1,data:t,headers:{clientType:"PC"}})}function o(t){return Object(r.d)({url:"/buyer/passport/member",method:r.a.GET,needToken:!0,params:t})}function u(t){window.open(r.b+"/buyer/passport/connect/connect/login/web/"+t,"blank")}function d(t){return Object(r.d)({url:"/buyer/passport/connect/connect/result?state="+t,method:r.a.GET,needToken:!1})}function c(t){return Object(r.d)({url:"/buyer/passport/connect/connect/callback/wallet/"+t,method:r.a.GET,needToken:!1,"Access-Control-Allow-Origin":!0})}function l(t){return Object(r.d)({url:"/buyer/passport/member/resetByMobile",method:r.a.POST,needToken:!1,params:t})}function h(t){return Object(r.d)({url:"/buyer/passport/member/resetPassword",method:r.a.POST,needToken:!1,params:t})}function f(t){return Object(r.d)({url:"/buyer/passport/member/pc_session",method:r.a.POST,needToken:!1,params:t})}function m(t,e){return Object(r.d)({url:"/buyer/passport/member/session_login/"+t,method:r.a.POST,needToken:!1,params:e})}},"7dfd":function(t,e,n){"use strict";n.r(e),n.d(e,"mobile",function(){return r}),n.d(e,"email",function(){return i}),n.d(e,"password",function(){return s}),n.d(e,"integer",function(){return a}),n.d(e,"Integer",function(){return o}),n.d(e,"money",function(){return u}),n.d(e,"TINumber",function(){return d}),n.d(e,"IDCard",function(){return c}),n.d(e,"userName",function(){return l}),n.d(e,"URL",function(){return h}),n.d(e,"TEL",function(){return f}),n.d(e,"licenseNum",function(){return m});const r=/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/,i=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,s=/^[@A-Za-z0-9!#$%^&*.~,]{6,20}$/,a=/^[1-9]\d*$/,o=/^[0-9]\d*$/,u=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,d=/^((\d{6}[0-9A-Z]{9})|([0-9A-Za-z]{2}\d{6}[0-9A-Za-z]{10,12}))$/,c=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,l=/[A-Za-z0-9_\-\u4e00-\u9fa5]$/,h=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,f=/0\d{2,3}-\d{7,8}/,m=/(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/},be72:function(t,e){function c(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function o(t,e,n,r,i,s){return c((e=c(c(e,t),c(r,s)))<<i|e>>>32-i,n)}function l(t,e,n,r,i,s,a){return o(e&n|~e&r,t,e,i,s,a)}function h(t,e,n,r,i,s,a){return o(e&r|n&~r,t,e,i,s,a)}function f(t,e,n,r,i,s,a){return o(e^n^r,t,e,i,s,a)}function m(t,e,n,r,i,s,a){return o(n^(e|~r),t,e,i,s,a)}t.exports={md5:function(t){for(var e=function(t){for(var e=1732584193,n=-271733879,r=-1732584194,i=271733878,s=0;s<t.length;s+=16){var a=e,o=n,u=r,d=i,e=l(e,n,r,i,t[s+0],7,-680876936),i=l(i,e,n,r,t[s+1],12,-389564586),r=l(r,i,e,n,t[s+2],17,606105819),n=l(n,r,i,e,t[s+3],22,-1044525330);e=l(e,n,r,i,t[s+4],7,-176418897),i=l(i,e,n,r,t[s+5],12,1200080426),r=l(r,i,e,n,t[s+6],17,-1473231341),n=l(n,r,i,e,t[s+7],22,-45705983),e=l(e,n,r,i,t[s+8],7,1770035416),i=l(i,e,n,r,t[s+9],12,-1958414417),r=l(r,i,e,n,t[s+10],17,-42063),n=l(n,r,i,e,t[s+11],22,-1990404162),e=l(e,n,r,i,t[s+12],7,1804603682),i=l(i,e,n,r,t[s+13],12,-40341101),r=l(r,i,e,n,t[s+14],17,-1502002290),e=h(e,n=l(n,r,i,e,t[s+15],22,1236535329),r,i,t[s+1],5,-165796510),i=h(i,e,n,r,t[s+6],9,-1069501632),r=h(r,i,e,n,t[s+11],14,643717713),n=h(n,r,i,e,t[s+0],20,-373897302),e=h(e,n,r,i,t[s+5],5,-701558691),i=h(i,e,n,r,t[s+10],9,38016083),r=h(r,i,e,n,t[s+15],14,-660478335),n=h(n,r,i,e,t[s+4],20,-405537848),e=h(e,n,r,i,t[s+9],5,568446438),i=h(i,e,n,r,t[s+14],9,-1019803690),r=h(r,i,e,n,t[s+3],14,-187363961),n=h(n,r,i,e,t[s+8],20,1163531501),e=h(e,n,r,i,t[s+13],5,-1444681467),i=h(i,e,n,r,t[s+2],9,-51403784),r=h(r,i,e,n,t[s+7],14,1735328473),e=f(e,n=h(n,r,i,e,t[s+12],20,-1926607734),r,i,t[s+5],4,-378558),i=f(i,e,n,r,t[s+8],11,-2022574463),r=f(r,i,e,n,t[s+11],16,1839030562),n=f(n,r,i,e,t[s+14],23,-35309556),e=f(e,n,r,i,t[s+1],4,-1530992060),i=f(i,e,n,r,t[s+4],11,1272893353),r=f(r,i,e,n,t[s+7],16,-155497632),n=f(n,r,i,e,t[s+10],23,-1094730640),e=f(e,n,r,i,t[s+13],4,681279174),i=f(i,e,n,r,t[s+0],11,-358537222),r=f(r,i,e,n,t[s+3],16,-722521979),n=f(n,r,i,e,t[s+6],23,76029189),e=f(e,n,r,i,t[s+9],4,-640364487),i=f(i,e,n,r,t[s+12],11,-421815835),r=f(r,i,e,n,t[s+15],16,530742520),e=m(e,n=f(n,r,i,e,t[s+2],23,-995338651),r,i,t[s+0],6,-198630844),i=m(i,e,n,r,t[s+7],10,1126891415),r=m(r,i,e,n,t[s+14],15,-1416354905),n=m(n,r,i,e,t[s+5],21,-57434055),e=m(e,n,r,i,t[s+12],6,1700485571),i=m(i,e,n,r,t[s+3],10,-1894986606),r=m(r,i,e,n,t[s+10],15,-1051523),n=m(n,r,i,e,t[s+1],21,-2054922799),e=m(e,n,r,i,t[s+8],6,1873313359),i=m(i,e,n,r,t[s+15],10,-30611744),r=m(r,i,e,n,t[s+6],15,-1560198380),n=m(n,r,i,e,t[s+13],21,1309151649),e=m(e,n,r,i,t[s+4],6,-145523070),i=m(i,e,n,r,t[s+11],10,-1120210379),r=m(r,i,e,n,t[s+2],15,718787259),n=m(n,r,i,e,t[s+9],21,-343485551),e=c(e,a),n=c(n,o),r=c(r,u),i=c(i,d)}return[e,n,r,i]}(function(t){for(var e=1+(t.length+8>>6),n=new Array(16*e),r=0;r<16*e;r++)n[r]=0;for(r=0;r<t.length;r++)n[r>>2]|=(255&t.charCodeAt(r))<<r%4*8;return n[r>>2]|=128<<r%4*8,n[16*e-2]=8*t.length,n}(t)),n="0123456789abcdef",r="",i=0;i<4*e.length;i++)r+=n.charAt(e[i>>2]>>i%4*8+4&15)+n.charAt(e[i>>2]>>i%4*8&15);return r}}}}]);