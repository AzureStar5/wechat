// logs.js 登录页面
var util = require('../../utils/util.js');  //--定时器控件--
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setInter:'', 
  },
  scanplaceQR:function(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log(JSON.stringify(res))
        wx.navigateTo({
          url: '/pages/prevention/prevention',
        })
      }
    })
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.notification()  // 调用方法
  },

  notification: function () {
    var _this = this;
   
    var weekday=weekday;
    var timedate=timedate;
    var timetime=timetime;
   
    _this.data.setInter = setInterval(function () {
      _this.setData({
        timedate:util.formatTimedate(new Date()),
        timetime:util.formatTimetime(new Date()),
        weekday:util.formatTimeweekday(new Date()),
       }); 
   }, 1000); 
       
    },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
