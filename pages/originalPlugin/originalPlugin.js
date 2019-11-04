//logs.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
var plugin = requirePlugin("myPlugin"); 
Page({
  data: {
  },
  onLoad: function (options) {
    plugin.init({
      appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
      navHeight: 0,
      success: () => {
        this.setData({
          flag: true
        })
      },
      fail: error => {}
    });
  },
  getQueryCallback: function (e) {
   
  },
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  back:function() {
    this.goBackHome()
  }
})
