//防抖动
export function debounce(func,delay=50) {
  let time = null;
  /* ...表示所有的参数*/
  return function (...args) {
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

//时间戳转换
export function dateFormate(date,format) {
  if(/(y+)/.test(format)){
    format = format.replace(RegExp.$1,(date.getFullYear()+ '').substr(4-RegExp.$1.length))
  }
  let o = {
    'M+':date.getMonth(),
    'D+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds(),
  }

  for(let i in o){
    if(new RegExp(`(${i})`).test(format)){
      let str = o[i] + ''
      format = format.replace(RegExp.$1,(RegExp.$1.length === 1)? str : padLeftZero(str))
    }
  }
  return format
}
function  padLeftZero(str){
  return ('00' + str).substr(str.length)
}
