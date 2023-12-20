// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setInter:'',
  },
  scanQR:function(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log(JSON.stringify(res))
        if(res.result==="https://serv.tju.edu.cn/verifyqr/access?code=Yk0yemRFMTQwTTRUZmhiZmRNZVU2QjRBZE0yVGZZOTIxTWFUM2tleDNNOUQ3azZ6Nk5jQTg9YT02N2Rh"){
        wx.navigateTo({
          url: '/pages/enter/enter',
        })
        }
        else if(res.result==="https://serv.tju.edu.cn/verifyqr/access?code=Yk0yemRFMTQwTTRUZmhiZmRNZWs2QjRBZE0yVGZZOTIxTWFUM2tleDNNOUQ3azYxNk5jZzg9YT02N2Rh"){
        wx.navigateTo({
          url: '/pages/exit/exit',
        })
        }
        else if(res.result==="http://serv.tju.edu.cn/verifyqr/access?code=Yk0yemRFMTQwTTRUZmxiZmRNZVU2QjRBZE0yVGZZOTIxTWF6M0llejNOOUQ3VTY0Nk9jQTg9YT02N2Rh"){
          wx.navigateTo({
            url: '/pages/enterwest/enterwest',
          })
        }
        else if(res.result==="http://serv.tju.edu.cn/verifyqr/access?code=Yk0yemRFMTQwTTRUZmxiZmRNZWs2QjRBZE0yVGZZOTIxTWF6M0llejNOOUQ3WTZ3Nk5jUTg9YT02N2Rh"){
          wx.navigateTo({
            url: '/pages/exitwest/exitwest',
          })
        }
        else{
          wx.navigateTo({
            url: '/pages/enter/enter',
          })
        }
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