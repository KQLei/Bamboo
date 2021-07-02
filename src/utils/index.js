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
      if ((/^[0-9]+$/).test(time)) {
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
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
