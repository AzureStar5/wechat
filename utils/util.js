/*const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}*/
const formatTimeyear = date => {
  const year = date.getFullYear()
  return [year].map(formatNumber)
}
const formatTimemonth = date => {
  const month = date.getMonth() + 1
  return [month].map(formatNumber)
}
const formatTimeday = date => {
  const day = date.getDate()
  return [day].map(formatNumber)
}
const formatTimehour = date => {
  const hour = date.getHours()
  return [hour].map(formatNumber)
}
const formatTimeminute = date => {
  const minute = date.getMinutes()
  return [minute].map(formatNumber)
}
const formatTimesecond = date => {
  const second = date.getSeconds()
  return [second].map(formatNumber)
}
const formatTimemillisecond = date => {
  const millisecond = parseInt(date.getMilliseconds()/100)
  return millisecond
}
const formatTimeweekday = date =>{
  const currentDate=date.getDay()
  var weekday=["周日","周一","周二","周三","周四","周五","周六"]
  return weekday[currentDate]
}

const formatTimedate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${[year]}-${[month]}-${[day]}`
}
const formatTimetime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second=date.getSeconds()
  return `${[hour, minute,second].map(formatNumber).join(':')}`
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTimeyear,
  formatTimemonth,
  formatTimeday,
  formatTimehour,
  formatTimeminute,
  formatTimesecond,
  formatTimemillisecond,
  formatTimeweekday,
  formatTimedate,
  formatTimetime,
}
