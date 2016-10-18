//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  onLoad: function () {
    console.log('onLoad')
    
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
