const app = getApp()

Page({
  data: {
    workContact: [
      '上海西册网络科技有限公司',
      '+86 18616180536',
      'work@saze-tech.com',
      '上海市黄浦区九江路501号'
    ],
    hiddenSazelogo: true
  },
  onLoad: function () {

  },
  makeCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.workContact[1]
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