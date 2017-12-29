//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: 'http://p1al5uegh.bkt.clouddn.com/miniProgramVideo.mp4',
    poster: 'http://p1al5uegh.bkt.clouddn.com/miniProgramVideoCover.png',
    duration: 151,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hiddenSazelogo: true
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showSazeLogo: function (e) {
    this.setData({ hiddenSazelogo: false })
  },
  sazelogoready: function (e) {
    console.log(e.detail)
  },
  onShareAppMessage: function () {
    return {
      title: '西册科技',
      path: 'pages/index/index'
    }
  }
})
