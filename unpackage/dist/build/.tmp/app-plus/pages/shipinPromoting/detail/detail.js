(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shipinPromoting/detail/detail"],{"2c12":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("d206"));function o(t){return t&&t.__esModule?t:{default:t}}var s,u,l,r,c,d=function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"f77a"))},f=function(){return a.e("components/share/share").then(a.bind(null,"9e5d"))},h=[],p={data:function(){return{cancelShow:!1,showMaskValue:!1,btnArray:"",btnIndex:0,showUpload:!1,checkValue:!0,detailData:[],upperLimit:0,isLimit:!1,upPic:"",upPicList:"",type:""}},methods:{play:function(){this.showMaskValue=!this.showMaskValue,console.log(t(this.showSwiperValue," at pages\\shipinPromoting\\detail\\detail.vue:82"))},close:function(){this.showMaskValue=!this.showMaskValue},closeAlert:function(){this.cancelShow=!1},getTask:function(e){this.$store.state.isLogin?(console.log(t(this.$store.state.userInfo.status," at pages\\shipinPromoting\\detail\\detail.vue:99")),this.$store.state.userInfo.inviteGroupId>=this.detailData.taskLevel?(console.log(t(this.btnIndex," at pages\\shipinPromoting\\detail\\detail.vue:102")),1==this.btnIndex?(console.log(t(this.btnIndex," at pages\\shipinPromoting\\detail\\detail.vue:105")),console.log(t(u," at pages\\shipinPromoting\\detail\\detail.vue:106")),console.log(t(this.$store.state.isLogin," at pages\\shipinPromoting\\detail\\detail.vue:107")),s=this,i.request({url:this.websiteUrl+"/api/task/recieve",method:"GET",header:{Authorization:r},data:{esaid:u,userId:l},success:function(e){console.log(t(e,11111111111," at pages\\shipinPromoting\\detail\\detail.vue:120")),601==e.data.code?(i.showToast({title:"请去审核账户！",mask:!0}),i.redirectTo({url:"/pages/mine/auditPage",animationType:"slide-in-right",animationDuration:300})):705==e.data.code?(plus.nativeUI.toast(e.data.msg),s.btnIndex=2):200==e.data.code&&(s.showUpload=!0,i.showToast({title:"领取成功",mask:!0}),s.btnArray="提交审核",s.btnIndex=2)}})):2==this.btnIndex&&(console.log(t("点击了提交审核"," at pages\\shipinPromoting\\detail\\detail.vue:155")),this.submitAudit())):plus.nativeUI.toast("请领取匹配自己账户等级的任务!!!")):(this.cancelShow=!0,console.log(t("未登录"," at pages\\shipinPromoting\\detail\\detail.vue:165")))},copy:function(){var t=this.detailData.esaDescribe1;i.setClipboardData({data:this.strFormat(t),success:function(){i.showToast({title:"复制成功",mask:!0}),setTimeout(function(){i.hideToast()},2e3)}})},strFormat:function(t){return t.replace(/<br\s*\/?>/gi,"\r\n")},hidePopup:function(){this.type=""},share:function(){this.type="bottom_share"},successShare:function(){i.showToast({title:"分享成功！！！",mask:!0})},failShare:function(){i.showToast({title:"分享失败！！！",mask:!0})},saveVideo:function(){var t=this.detailData["url"];i.downloadFile({url:t,success:function(t){i.saveVideoToPhotosAlbum({filePath:t.tempFilePath,success:function(){i.showToast({title:"保存成功",duration:2e3,mask:!0}),setTimeout(function(){i.hideToast()},2e3)},fail:function(t){i.showToast({title:"保存失败",icon:"none",duration:2e3,mask:!0}),setTimeout(function(){i.hideToast()},2e3)}})},fail:function(){i.showToast({title:"下载失败",icon:"none",duration:2e3,mask:!0}),setTimeout(function(){i.hideToast()},2e3)}})},upload:function(){var t=this;i.chooseImage({success:function(e){var a=e.tempFilePaths;i.uploadFile({url:t.websiteUrl+"/api/file/uploadFile",filePath:a[0],name:"file",header:{Authorization:r},success:function(t){i.showToast({title:"上传成功",mask:!0}),s.upPic=JSON.parse(t.data).imgurl,h.push(s.upPic),s.checkValue=!1}})}})},submitAudit:function(){0==h.length?plus.nativeUI.toast("请上传需要审核的照片！！！"):i.request({url:this.websiteUrl+"/api/comnet/audit",method:"POST",header:{Authorization:r},data:{extendId:c,imgList:h},success:function(e){console.log(t(e.data," at pages\\shipinPromoting\\detail\\detail.vue:323")),i.showToast({title:"提交审核成功",mask:!0}),s.showUpload=!0,s.checkValue=!1,1==e.data.status&&(s.btnArray=e.data.statusStr,s.btnIndex=3)}})}},components:{hFormAlert:n.default,uniPopup:d,sharePage:f},onLoad:function(e){l=this.$store.state.userInfo.userId,r=this.$store.state.userInfo.token,s=this,u=e.esaId,this.$store.state.isLogin?(console.log(t("已经登录"," at pages\\shipinPromoting\\detail\\detail.vue:353")),i.request({url:this.websiteUrl+"/api/comnet/info/"+u,method:"GET",data:{userId:l},success:function(e){s.detailData=e.data.data,c=s.detailData.extendInfoId,console.log(t(s.detailData," at pages\\shipinPromoting\\detail\\detail.vue:364")),s.upperLimit=s.detailData.esaUsedCount,s.upperLimit>=s.detailData.esaTotalCount?(s.isLimit=!0,s.btnArray="任务已达上限"):(-1==s.detailData.status&&(s.btnIndex=1,s.btnArray="领取任务"),0==s.detailData.status&&(s.btnIndex=2,s.btnArray=s.detailData.statusStr,s.showUpload=!0),1==s.detailData.status&&(s.btnIndex=3,s.btnArray=s.detailData.statusStr,s.showUpload=!0,s.checkValue=!1,s.upPicList=s.detailData.imgs[0].image),2==s.detailData.status&&(s.btnArray=s.detailData.statusStr,s.showUpload=!1,s.checkValue=!0,s.detailData.status,s.btnIndex=1,s.btnArray="领取任务"),3==s.detailData.status&&(s.btnArray=s.detailData.statusStr,s.showUpload=!0,s.checkValue=!1))}})):(console.log(t("未登录"," at pages\\shipinPromoting\\detail\\detail.vue:431")),i.request({url:this.websiteUrl+"/api/comnet/info/"+u,method:"GET",success:function(e){s.detailData=e.data.data,console.log(t(s.detailData," at pages\\shipinPromoting\\detail\\detail.vue:437")),s.upperLimit=s.detailData.esaUsedCount,s.upperLimit>=s.detailData.esaTotalCount?(s.isLimit=!0,s.btnArray="任务已达上限"):-1==s.detailData.status&&(s.btnIndex=1,s.btnArray="领取任务")}}))},onShow:function(){}};e.default=p}).call(this,a("0de9")["default"],a("6e42")["default"])},"32b4":function(t,e,a){},4595:function(t,e,a){"use strict";a.r(e);var i=a("2c12"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},5568:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},"5a83":function(t,e,a){"use strict";a.r(e);var i=a("d48f"),n=a("4595");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("f2ff");var s,u=a("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"1454e25a",null,!1,i["a"],s);e["default"]=l.exports},b016:function(t,e,a){"use strict";a.r(e);var i=a("ea76"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},c4d3:function(t,e,a){},cc92:function(t,e,a){"use strict";(function(t){a("03a2"),a("921b");i(a("66fd"));var e=i(a("5a83"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},d206:function(t,e,a){"use strict";a.r(e);var i=a("5568"),n=a("b016");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("fc4e");var s,u=a("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"210b6dec",null,!1,i["a"],s);e["default"]=l.exports},d48f:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},ea76:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:{type:String,default:"网赚登录"}},data:function(){return{maskValue:!0,inviteCode:""}},onLoad:function(){var e=this;t.getStorage({key:"openinstallInfo",success:function(t){console.log(a("ok"," at components\\h-form-alert\\h-form-alert.vue:37")),e.inviteCode=JSON.parse(JSON.parse(t.data).bindData).inviteCode}})},methods:{closeMask:function(){this.$emit("closeEvent")},weixinlogin:function(){var e=this;t.login({provider:"weixin",success:function(a){t.getUserInfo({provider:"weixin",success:function(t){e.toWeixinLogin(a,t)}})}})},toWeixinLogin:function(e,a){var i=this,n={openid:e.authResult.openid,nickname:a.userInfo.nickName,headimgurl:a.userInfo.avatarUrl,accessToken:e.authResult.access_token,refreshToken:e.authResult.refresh_token,inviteCode:i.inviteCode};t.request({url:this.websiteUrl+"/api/user/weixin",method:"POST",data:n,success:function(e){200==e.data.code?(i.$store.commit("login",e.data.user),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})):plus.nativeUI.toast(e.data.msg)},fail:function(){},complete:function(){}})},iphonelogin:function(){t.navigateTo({url:"/pages/mine/login",animationType:"slide-in-right"})}}};e.default=i}).call(this,a("6e42")["default"],a("0de9")["default"])},f2ff:function(t,e,a){"use strict";var i=a("32b4"),n=a.n(i);n.a},fc4e:function(t,e,a){"use strict";var i=a("c4d3"),n=a.n(i);n.a}},[["cc92","common/runtime","common/vendor"]]]);