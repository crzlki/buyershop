(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8861e0f6"],{1251:function(t,s,e){"use strict";e.r(s);var a=e("5723"),i={name:"AccountSafe",data(){return{pwdStatus:""}},mounted(){this.getPwdStatus()},methods:{goModifyPwd(){this.$router.push({name:"ModifyPwd",query:{status:2}})},modifyPwd(){this.$router.push({name:"ModifyPwd",query:{status:1}})},getPwdStatus(){Object(a.c)().then(t=>{this.pwdStatus=t?"修改密码":"设置密码"})}}},e=(e("80c3"),e("2877")),e=Object(e.a)(i,function(){var t=this,s=t.$createElement,s=t._self._c||s;return s("div",{staticClass:"wrapper"},[s("card",{attrs:{_Title:"账户安全"}}),s("div",{staticClass:"safeList"},[s("Row",{staticClass:"safeItem"},[s("Col",{attrs:{span:2}},[s("Icon",{attrs:{size:"40",type:"md-key"}})],1),s("Col",{attrs:{span:16}},[s("div",{staticClass:"setDivItem"},[t._v("登录密码")]),s("div",{staticClass:"setDivItem theme"},[t._v("互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。")])]),s("Col",{attrs:{span:4}},[s("Button",{on:{click:t.modifyPwd}},[t._v("修改密码")])],1)],1)],1)],1)},[],!1,null,"3020d671",null);s.default=e.exports},7019:function(t,s,e){},"80c3":function(t,s,e){"use strict";e("7019")}}]);