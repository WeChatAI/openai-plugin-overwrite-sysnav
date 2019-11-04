//index.js
//获取应用实例
const app = getApp()
var plugin = requirePlugin("myPlugin"); 
Page({
  data: {
   guideList:[
     '北京天气',
     '图片回复',
     '你在干嘛'
   ]
  },
  onLoad: function () {
  },
  goOriginalPlugin:function(e) {
    wx.navigateTo({
      url: '../originalPlugin/originalPlugin'
    })
    plugin.setGuideList(this.data.guideList)
  },
  goRewriteComponent:function(e) {
    wx.navigateTo({
      url: '../rewriteComponent/rewriteComponent'
    })
    plugin.setGuideList(this.data.guideList)
  }
})
