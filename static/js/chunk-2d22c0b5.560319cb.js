(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22c0b5"],{f20c:function(e,t,s){"use strict";s.r(t);var a=s("e487"),r=s("5723"),o=s("ff66"),m={name:"Profile",data(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空"},{max:16,message:"用户昵称不能超过15个字符"}]},formItem:{},action:o.c+"/common/common/upload/file",accessToken:{}}},mounted(){this.formItem=JSON.parse(a.a.getItem("userInfo")),this.accessToken.accessToken=a.a.getItem("accessToken")},methods:{save(){this.$refs.form.validate(e=>{e&&(e={birthday:this.$options.filters.unixToDate(this.formItem.birthday/1e3,"yyyy-MM-dd"),face:this.formItem.face,nickName:this.formItem.nickName,sex:this.formItem.sex},Object(r.a)(e).then(e=>{e.success&&(this.$Message.success("修改个人资料成功"),a.a.setItem("userInfo",e.result))}))})},handleSuccess(e,t){this.$set(this.formItem,"face",e.result)}}},s=s("2877"),s=Object(s.a)(m,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"wrapper"},[e("card",{attrs:{_Title:"用户信息"}}),e("Form",{ref:"form",attrs:{model:t.formItem,rules:t.rules,"label-width":80}},[e("FormItem",{attrs:{label:"头像"}},[t.formItem.face?e("Avatar",{attrs:{src:t.formItem.face,size:"80"}}):e("Avatar",{attrs:{icon:"ios-person",size:"80"}}),e("Upload",{attrs:{"show-upload-list":!1,"on-success":t.handleSuccess,format:["jpg","jpeg","png"],action:t.action,headers:t.accessToken}},[e("Button",{staticClass:"mt_10"},[t._v("上传头像")])],1)],1),e("FormItem",{attrs:{label:"昵称",prop:"nickName"}},[e("Input",{staticClass:"wrapper-user-name",staticStyle:{width:"187px"},attrs:{placeholder:""},model:{value:t.formItem.nickName,callback:function(e){t.$set(t.formItem,"nickName",e)},expression:"formItem.nickName"}})],1),e("FormItem",{attrs:{label:"生日"}},[e("DatePicker",{attrs:{type:"date",placeholder:"选择您的生日"},model:{value:t.formItem.birthday,callback:function(e){t.$set(t.formItem,"birthday",e)},expression:"formItem.birthday"}})],1),e("FormItem",{attrs:{label:"性别"}},[e("RadioGroup",{attrs:{type:"button","button-style":"solid"},model:{value:t.formItem.sex,callback:function(e){t.$set(t.formItem,"sex",e)},expression:"formItem.sex"}},[e("Radio",{attrs:{label:1}},[t._v("男")]),e("Radio",{attrs:{label:0}},[t._v("女")])],1)],1),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确认修改")])],1)],1)],1)},[],!1,null,"bc1ea6dc",null);t.default=s.exports}}]);