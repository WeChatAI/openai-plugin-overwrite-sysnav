//logs.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
var plugin = requirePlugin("myPlugin"); 
Page({
  data: {
  },
  onLoad: function (options) {
    plugin.init({
      appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
      // textToSpeech: true,
      // guideList: [],
      welcome: '请问需要什么帮助',
      // background: "#eee",
      // guideCardHeight: 40,
      // operateCardHeight: 145,
      // history: true,
      // historySize: 60,
      // navHeight: 0,
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
