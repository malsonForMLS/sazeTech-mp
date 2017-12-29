Component({
  behaviors: [],
  properties: {
    isShow: {
      type: String,
      value: 'true'
    }
  },
  data: {
    logoTitle: 'SazeTech',
    logoRemark: '西册科技 触手可及'
  },
  ready: function () {
    console.log('sazelogo ready')
    this.readyTrigger()
  },
  methods: {
    readyTrigger: function () {
      var myEventDetail = { status: 'ready' }
      var myEventOption = { bubbles: false, capturePhase: false }
      this.triggerEvent('sazelogoready', myEventDetail, myEventOption)
    }
  }
})