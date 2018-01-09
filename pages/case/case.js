const app = getApp()

Page({
  data: {
    swiper: {
      autoplay: false,
      duration: 300,
      circular: true,
      indicatorDots: true,
      indicatorActiveColor: '#fff'
    },
    imgUrls: [
      'http://p1al5uegh.bkt.clouddn.com/a.jpg',
      'http://p1al5uegh.bkt.clouddn.com/b.jpg'
    ],
    caseDesc: '',
    caseDescList: [
      '看几个小case...',
      '看几个小case...'
    ],
    hiddenSazelogo: true
  },
  onReady: function () {
    this.setData({ caseDesc: this.data.caseDescList[0] });
  },
  changeCaseDesc: function (e) {
    this.setData({ caseDesc: this.data.caseDescList[e.detail.current] });
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接   
      urls: this.data.imgUrls // 需要预览的图片http链接列表   
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