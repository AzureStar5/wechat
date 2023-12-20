// pages/prevention/prevention.js
var util = require('../../utils/util.js');  //--定时器控件--
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    setInter:'', 
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
  ////--定时器控件-- 
  //onShow: 小程序启动，或从后台进入前台显示时触发。
  onShow: function () {
    this.notification()  // 调用方法

  },

  notification: function () {
    var _this = this;
    //var time = time;
    var year=year;
    var month=month;
    var day=day;
    var hour=hour;
    var minute=minute;
    var second=second;
    var weekday=weekday;
    var timedate=timedate;
    var timetime=timetime;
    //var date=date;
    //var second=second;
    _this.setData({
    timedate:util.formatTimedate(new Date()),
    timetime:util.formatTimetime(new Date())
    })
    
    _this.data.setInter = setInterval(function () {
      _this.setData({
       //time: util.formatTime(new Date()),
       year: util.formatTimeyear(new Date()),
       month: util.formatTimemonth(new Date()),
       day: util.formatTimeday(new Date()),
       hour: util.formatTimehour(new Date()),
       minute: util.formatTimeminute(new Date()),
       second: util.formatTimesecond(new Date()),
       weekday: util.formatTimeweekday(new Date()),
       }); 
   }, 1000); 
       
    },
  observers:{
    
  },
  
  /*onShow() {
  
  },*/

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