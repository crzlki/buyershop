(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-697fd6a8"],{"0b86":function(t,s,e){"use strict";e("3c0f")},"3c0f":function(t,s,e){},4104:function(t,s,e){},"850a":function(t,s,e){"use strict";e("4104")},f896:function(t,s,e){"use strict";e.r(s);var a=e("c40e"),o={name:"GoodsClassNav",data(){return{tabBar:{name:"",first:{},second:{}},showTagCount:5,multiple:!1,tagsContent:[{key:"品牌",more:!1,show:!0,values:[]}],multSelected:[],selectedItem:[],brandIds:[],params:{}}},computed:{cateList(){return this.$store.state.category||[]}},watch:{selectedItem:{handler(t){let e=[];this.params.brandId="",this.params.prop="",t.forEach(s=>{if("品牌"===s.type)this.params.brandId=this.brandIds.join("@");else{const t=s.name.split("、");t.forEach(t=>{e.push(s.type+"_"+t)})}}),this.params.prop=e.join("@"),this.getFilterList(this.params),this.$emit("getParams",this.params)},deep:!0},$route:{handler(t,s){var e;this.$route.query.categoryId?(e=this.$route.query.categoryId.split(","),Object.assign(this.params,this.$route.query),this.params.categoryId=e[e.length-1]):Object.assign(this.params,this.$route.query),this.getFilterList(this.params),this.getNav()},deep:!0}},methods:{getNav(){if(this.$route.query.categoryId)if(this.cateList.length){const s=this.$route.query.categoryId.split(",");var t;0<s.length&&(this.tabBar=this.cateList.filter(t=>t.id===s[0])[0]),1<s.length&&(t=this.tabBar.children.filter(t=>t.id===s[1])[0],this.$set(this.tabBar,"first",t)),2<s.length&&(t=this.tabBar.first.children.filter(t=>t.id===s[2])[0],this.$set(this.tabBar,"second",t))}else setTimeout(()=>{this.getNav()},500)},cateClick(t,s){switch(s){case 1:this.$router.push({path:"/goodsList",query:{categoryId:t.id}});break;case 2:this.$router.push({path:"/goodsList",query:{categoryId:[t.parentId,t.id].toString()}});break;case 3:this.$router.push({path:"/goodsList",query:{categoryId:[this.tabBar.id,t.parentId,t.id].toString()}})}},selectBrand(s,t){if(!1!==this.multiple){var e=this.multSelected.indexOf(s);-1<e?this.multSelected.splice(e,1):this.multSelected.push(s)}else if(this.selectedItem.push({type:this.tagsContent[t].key,name:s}),this.tagsContent[t].show=!1,0===t){let t=this.tagsContent[0].values;t.forEach(t=>{t.name===s&&this.brandIds.push(t.value)})}},cancelSelected(e,t){this.selectedItem.splice(t,1),this.tagsContent.forEach((t,s)=>{t.key===e.type&&(t.show=!0,t.more=!1)}),"品牌"===e.type&&(this.brandIds=[])},moreBrand(t){var s=!this.tagsContent[t].more;this.$set(this.tagsContent[t],"more",s)},multSelectBrand(t){this.$set(this.tagsContent[t],"more",!0),this.multiple=t},sure(t){if(this.selectedItem.push({type:this.tagsContent[t].key,name:this.multSelected.join("、")}),0===t){let t=this.tagsContent[0].values;t.forEach(t=>{this.multSelected.includes(t.name)&&this.brandIds.push(t.value)})}this.tagsContent[t].show=!1,this.cancel()},cancel(){this.multSelected=[],this.tagsContent[0].more=!1,this.multiple=!1},getFilterList(t){a.a(t).then(t=>{t.success&&(t=t.result,this.tagsContent=[{key:"品牌",more:!1,show:!0,values:[]}],this.tagsContent[0].values=t.brands,this.tagsContent=this.tagsContent.concat(t.paramOptions),this.tagsContent.forEach(t=>{this.$set(t,"show",!0),this.$set(t,"more",!1)}))})},moreOptions(){this.showTagCount=5===this.showTagCount?100:5}},mounted(){var t;this.$route.query.categoryId?(t=this.$route.query.categoryId.split(","),Object.assign(this.params,this.$route.query),this.params.categoryId=t[t.length-1]):Object.assign(this.params,this.$route.query),this.getFilterList(this.params),this.getNav()}},i=(e("850a"),e("2877")),o={name:"GoodsList",beforeRouteEnter(t,s,e){window.scrollTo(0,0),e()},data(){return{sortIndex:0,sortPriceIndex:!1,goodsTool:[{title:"综合",en:""},{title:"销量",en:"buyCount"},{title:"评论数",en:"commentNum"},{title:"新品",en:"releaseTime"}],goodsList:[],loading:!1,goodsListType:"",total:0,params:{pageNumber:0,pageSize:20,categoryId:""}}},watch:{$route(){var t=this.$route.query.keyword;t&&this.handleSearch(t),this.$route.query.categoryId&&(t=this.$route.query.categoryId.split(","),Object.assign(this.params,this.$route.query),this.params.categoryId=t[t.length-1]),this.$route.query.promotionType&&(this.params.promotionType=this.$route.query.promotionType),this.$route.query.promotionsId&&(this.params.promotionsId=this.$route.query.promotionsId),this.getGoodsList()}},methods:{handleSearch(t){this.params.keyword=t,this.params.pageNumber=0,this.getGoodsList()},orderBy(t,s){this.sortIndex=s,this.params.sort=t,this.params.order="desc","price"===t?(!this.sortPriceIndex||"desc"===this.sortPriceIndex?this.sortPriceIndex="asc":this.sortPriceIndex="desc",this.params.order=this.sortPriceIndex):this.sortPriceIndex=!1,this.getGoodsList()},goGoodsDetail(t,s){t=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:s}});window.open(t.href,"_blank")},changePageNum(t){this.params.pageNumber=t,this.getGoodsList()},changePageSize(t){this.params.pageNumber=1,this.params.pageSize=t,this.getGoodsList()},getGoodsList(){this.loading=!0,a.c(this.params).then(t=>{if(this.loading=!1,t.success){this.goodsList=t.result.content,this.total=t.result.totalElements;for(var s=0;s<this.goodsList.length;s++)this.goodsListType=this.goodsList[s]}}).catch(()=>{this.loading=!1})},getParams(t){Object.assign(this.params,t),this.getGoodsList()}},created(){var t;this.$route.query.categoryId?(t=this.$route.query.categoryId.split(","),Object.assign(this.params,this.$route.query),this.params.categoryId=t[t.length-1]):Object.assign(this.params,this.$route.query),this.getGoodsList()},components:{GoodsClassNav:Object(i.a)(o,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"item-class-show"},[o("div",{staticClass:"head-bar"},[a.$route.query.categoryId?[o("div",{on:{click:function(t){return a.cateClick(a.tabBar,1)}}},[a._v(a._s(a.tabBar.name))]),o("Icon",{attrs:{type:"ios-arrow-forward"}}),a.tabBar.first?o("div",{staticClass:"bar"},[a._v(" "+a._s(a.tabBar.first.name)+" "),o("Icon",{attrs:{type:"ios-arrow-down"}}),o("ul",a._l(a.tabBar.children,function(s){return o("li",{key:s.id,on:{click:function(t){return a.cateClick(s,2)}}},[a._v(" "+a._s(s.name)+" ")])}),0)],1):a._e(),a.tabBar.first?o("Icon",{attrs:{type:"ios-arrow-forward"}}):a._e(),a.tabBar.second?o("div",{staticClass:"bar"},[a._v(" "+a._s(a.tabBar.second.name)+" "),o("Icon",{attrs:{type:"ios-arrow-down"}}),o("ul",a._l(a.tabBar.first.children,function(s){return o("li",{key:s.id,on:{click:function(t){return a.cateClick(s,3)}}},[a._v(" "+a._s(s.name)+" ")])}),0)],1):a._e(),a.tabBar.second?o("Icon",{attrs:{type:"ios-arrow-forward"}}):a._e()]:[o("div",{staticStyle:{"font-size":"14px"}},[a._v("全部结果")]),o("Icon",{attrs:{type:"ios-arrow-forward"}}),o("div",{staticClass:"mr_10",staticStyle:{"font-weight":"bold"}},[a._v("“"+a._s(a.params.keyword)+"”")])],a._l(a.selectedItem,function(s,e){return o("a",{key:e,staticClass:"selected-item",attrs:{title:s.name},on:{click:function(t){return a.cancelSelected(s,e)}}},[o("span",[a._v(a._s(s.type)+"：")]),o("span",[a._v(a._s(s.name))]),o("Icon",{attrs:{type:"md-close"}})],1)})],2),o("div",{staticClass:"content"},[o("div",{directives:[{name:"show",rawName:"v-show",value:a.tagsContent[0].show&&a.tagsContent[0].values.length,expression:"tagsContent[0].show && tagsContent[0].values.length"}],staticClass:"brand"},[o("div",[o("strong",[a._v(a._s(a.tagsContent[0].key)+"：")])]),o("div",[o("ul",{class:{"show-more":a.tagsContent[0].more}},a._l(a.tagsContent[0].values,function(s,t){return o("li",{key:t,class:{"border-color":a.multSelected.includes(s)},on:{click:function(t){return a.selectBrand(s.name,0)}}},[o("img",{attrs:{src:s.url,alt:""}}),o("span",[a._v(a._s(s.name))]),o("div",{directives:[{name:"show",rawName:"v-show",value:a.multSelected.includes(s.name),expression:"multSelected.includes(item.name)"}],staticClass:"corner-icon"},[o("div"),o("Icon",{attrs:{type:"md-checkmark"}})],1)])}),0),o("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.multiple,expression:"multiple !== 0"}],staticClass:"btn"},[o("span",{on:{click:function(t){return a.moreBrand(0)}}},[a._v(a._s(a.tagsContent[0].more?"收起":"更多")),o("Icon",{attrs:{type:a.tagsContent[0].more?"ios-arrow-up":"ios-arrow-down"}})],1),o("span",{on:{click:function(t){return a.multSelectBrand(0)}}},[o("Icon",{attrs:{type:"md-add"}}),a._v("多选")],1)]),o("div",{directives:[{name:"show",rawName:"v-show",value:0===a.multiple,expression:"multiple === 0"}],staticClass:"multBtn"},[o("Button",{attrs:{type:"primary",size:"small",disabled:!a.multSelected.length},on:{click:function(t){return a.sure(0)}}},[a._v("确定")]),o("Button",{attrs:{size:"small"},on:{click:a.cancel}},[a._v("取消")])],1)])]),a._l(a.tagsContent,function(t,e){return[t.show&&0!==e?o("div",{directives:[{name:"show",rawName:"v-show",value:e<a.showTagCount,expression:"tagIndex < showTagCount"}],key:e,staticClass:"other"},[o("div",[o("strong",[a._v(a._s(t.key)+"：")])]),o("div",[o("ul",{directives:[{name:"show",rawName:"v-show",value:a.multiple!==e,expression:"multiple !== tagIndex"}],staticClass:"list",class:{"show-more":t.more}},a._l(t.values,function(s,t){return o("li",{key:t,staticClass:"item",on:{click:function(t){return a.selectBrand(s,e)}}},[a._v(" "+a._s(s)+" ")])}),0),o("CheckboxGroup",{directives:[{name:"show",rawName:"v-show",value:a.multiple===e,expression:"multiple === tagIndex"}],staticClass:"list",class:{"show-more":t.more},model:{value:a.multSelected,callback:function(t){a.multSelected=t},expression:"multSelected"}},a._l(t.values,function(t,s){return o("Checkbox",{key:s,staticClass:"item",attrs:{label:t}},[a._v(a._s(t))])}),1),o("div",{directives:[{name:"show",rawName:"v-show",value:a.multiple!==e,expression:"multiple !== tagIndex"}],staticClass:"btn"},[o("span",{directives:[{name:"show",rawName:"v-show",value:9<t.values.length,expression:"tag.values.length > 9"}],on:{click:function(t){return a.moreBrand(e)}}},[a._v(a._s(t.more?"收起":"更多")),o("Icon",{attrs:{type:t.more?"ios-arrow-up":"ios-arrow-down"}})],1),o("span",{on:{click:function(t){return a.multSelectBrand(e)}}},[o("Icon",{attrs:{type:"md-add"}}),a._v("多选")],1)]),o("div",{directives:[{name:"show",rawName:"v-show",value:a.multiple===e,expression:"multiple === tagIndex"}],staticClass:"multBtn"},[o("Button",{attrs:{type:"primary",size:"small",disabled:!a.multSelected.length},on:{click:function(t){return a.sure(e)}}},[a._v("确定")]),o("Button",{attrs:{size:"small"},on:{click:a.cancel}},[a._v("取消")])],1)],1)]):a._e()]}),4<a.tagsContent.length?o("div",{staticClass:"more-options",on:{click:a.moreOptions}},[a._v(a._s(5===a.showTagCount?"更多筛选项":"收起筛选项")),o("Icon",{attrs:{type:5===a.showTagCount?"ios-arrow-down":"ios-arrow-up"}})],1):a._e()],2)])},[],!1,null,"a9728dbe",null).exports}},e=(e("0b86"),Object(i.a)(o,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",[o("BaseHeader"),o("cateNav"),o("div",{staticClass:"container"},[o("GoodsClassNav",{on:{getParams:a.getParams}}),o("div",{staticClass:"goods-box"},[o("div",{staticClass:"goods-list-box"},[o("div",{staticClass:"goods-list-tool"},[o("ul",[a._l(a.goodsTool,function(s,e){return o("li",{key:e,on:{click:function(t){return a.orderBy(s.en,e)}}},[o("span",{class:{"goods-list-tool-active":e===a.sortIndex}},[a._v(a._s(s.title)+" "),o("Icon",{attrs:{type:"ios-arrow-round-down"}})],1)])}),o("li",{staticClass:"price-sort",on:{click:function(t){return a.orderBy("price",5,"up")}}},[o("span",{class:{"goods-list-tool-active":5===a.sortIndex}},[a._v(" 价格 "),o("div",[o("Icon",{class:{"price-color":"desc"==a.sortPriceIndex},attrs:{type:"md-arrow-dropup"}}),o("Icon",{class:{"price-color":"asc"==a.sortPriceIndex},attrs:{type:"md-arrow-dropdown"}})],1)])])],2)]),o("div",{staticClass:"goods-list"},[0===a.goodsList.length?o("empty"):a._l(a.goodsList,function(s,t){return o("div",{key:t,staticClass:"goods-show-info",on:{click:function(t){return a.goGoodsDetail(s.id,s.content.goodsId)}}},[o("div",{staticClass:"goods-show-img"},[o("img",{attrs:{width:"220",height:"220",src:s.content.thumbnail}})]),o("div",{staticClass:"goods-show-price"},[o("span",[o("span",{staticClass:"seckill-price text-danger"},[a._v(a._s(a._f("unitPrice")(s.content.price,"￥")))]),o("span",{staticClass:"right-price"},[a._v("+"+a._s(a._f("unitPrice")(s.content.price,"$")))]),o("TokenIcon",{staticStyle:{"margin-top":"-2px"}})],1)]),o("div",{staticClass:"goods-show-detail"},["WHOLESALE"===s.content.salesModel?o("Tag",{staticClass:"goods-show-tag",attrs:{color:"purple"}},[a._v(" 批发 ")]):a._e(),o("span",[a._v(a._s(s.content.goodsName))])],1),o("div",{staticClass:"goods-show-num"},[a._v(" 已有"),o("span",[a._v(a._s(s.content.commentNum||0))]),a._v("人评价 ")]),o("div",{staticClass:"goods-show-seller"},[o("span",{staticClass:"text-bottom",staticStyle:{color:"#e4393c"}},[a._v(a._s(s.content.storeName))])]),o("div",{staticClass:"goods-show-right"},[s.content.selfOperated?o("Tag",{staticClass:"goods-show-tag",attrs:{color:"red"}},[a._v(" 自营 ")]):a._e(),"VIRTUAL_GOODS"==s.content.goodsType?o("Tag",{staticClass:"goods-show-tag",attrs:{color:"blue"}},[a._v(" 虚拟 ")]):"PHYSICAL_GOODS"==s.content.goodsType?o("Tag",{staticClass:"goods-show-tag",attrs:{color:"blue"}},[a._v(" 实物 ")]):a._e()],1)])})],2)])]),o("div",{staticClass:"goods-page"},[o("Page",{attrs:{"show-total":"","show-sizer":"",total:a.total,"page-size":a.params.pageSize},on:{"on-change":a.changePageNum,"on-page-size-change":a.changePageSize}})],1)],1),a.loading?o("Spin",{attrs:{size:"large",fix:""}}):a._e(),o("BaseFooter")],1)},[],!1,null,"06c52d40",null));s.default=e.exports}}]);