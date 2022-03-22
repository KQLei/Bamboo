// https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/index.js

/**
 *将日期格式化为string
 * @param {Object|string|number} time 日期对象|时间戳字符串|时间戳数字
 * @param {*} cFormat 默认为 '{y}-{m}-{d} {h}:{i}:{s}'，如需周信息，加上{a}即可
 * @returns {string|null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date = null
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      // support "1548221490638"
      if (/^[0-9]+$/.test(time)) {
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }

  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    if (key === 'a') {
      return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 *防抖
 * @param {Function} func 要触发的函数
 * @param {Number} wait 延迟触发毫秒数
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
