(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/setting"],{"00ea":function(t,e,n){},"246c":function(t,e,n){"use strict";(function(t){n("03a2"),n("921b");o(n("66fd"));var e=o(n("358e"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"358e":function(t,e,n){"use strict";n.r(e);var o=n("654e"),a=n("ef85");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("ce02");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"dec7529a",null,!1,o["a"],s);e["default"]=r.exports},"654e":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},ce02:function(t,e,n){"use strict";var o=n("00ea"),a=n.n(o);a.a},da31:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("0e5d"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{flag:!1,updateType:2}},methods:{briefIntroduction:function(){t.navigateTo({url:"/pages/mine/briefIntroduction",animationType:"slide-in-right"})},loginOut:function(){var e=this,n=this;if(console.log(o(this.$store.state.userInfo," at pages\\mine\\setting.vue:39")),this.$store.state.userInfo&&!this.$store.state.userInfo.userId)return n.$store.commit("logout"),t.showToast({title:"退出成功",mask:!0}),void setTimeout(function(){t.hideToast(),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})},2e3);t.showModal({title:"确认退出？",content:"温馨提示：退出后会影响某些功能使用，确认退出？",showCancel:!0,cancelText:"取消",confirmText:"确定",success:function(o){o.confirm&&t.request({url:n.websiteUrl+"/api/user/logout?userId="+e.$store.state.userInfo.userId,method:"POST",header:{Authorization:e.$store.state.userInfo.token},success:function(e){200==e.data.code?(n.$store.commit("logout"),t.showToast({title:"退出成功",mask:!0}),setTimeout(function(){t.hideToast(),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})},2e3)):600==e.data.code?n.$store.commit("logout"):plus.nativeUI.toast(e.data.msg)},fail:function(){},complete:function(){}})}})},flagUpdate:function(){var e,n=this,a=plus.os.name.toUpperCase(),i=plus.runtime.appid;plus.runtime.getProperty(i,function(i){e=plus.storage.getItem("app-id"),console.log(o(e," at pages\\mine\\setting.vue:104")),e=e?e.replace(/\./g,""):i.versionCode,console.log(o(a,e," at pages\\mine\\setting.vue:110")),t.request({url:n.websiteUrl+"/sys/checkversion",method:"POST",data:{systemName:a,versionCode:e},success:function(t){var e=t.data;null==e.data?n.flag=!1:""==e.data.path&&""==e.data.versionWgtPath||(n.flag=!0)}})})},update:function(){a.default.update(this.websiteUrl,this.updateType)}},onShow:function(){},computed:{version:function(){return plus.storage.getItem("app-id")?plus.storage.getItem("app-id"):"1.0.0"}},onLoad:function(){this.flagUpdate()}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},ef85:function(t,e,n){"use strict";n.r(e);var o=n("da31"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a}},[["246c","common/runtime","common/vendor"]]]);