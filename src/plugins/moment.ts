/**
 * @Author 
 * @Description 
 * @Create who[when]
 * @Revise what --who[when]
 */
// @ts-nocheck
 import moment from "moment";
 import "moment/locale/zh-cn";
 
 moment.locale("zh-cn");

const DEFAULT_DATE_FORMATTER = 'YYYY-MM-DD HH:mm:ss'

// 根据HH:mm:ss设定本地时间
export class Moment {
  // 标准化 
  // 1. 当formatter存在，time 可以通过formatter设定本地具体时间，如HH:mm:ss；
  // 2. 当formatter不存在，time 默认取当前时间，若值缺少时区，则默认为本地时区；
  // 3. unit可以为years, months, days, hours, minutes, seconds, 表示时间差。
  static normalize(time, formatter, num = 0, unit = 'hours') {
    return typeof num == 'number' ? moment(time, formatter).subtract(num, unit) : moment(time, formatter)
  }
  // 格式化
  static format(moment, formatter = DEFAULT_DATE_FORMATTER) {
    switch (formatter) {
      case 'unix':
        return moment.unix()
      case 'fromNow':
        return moment.fromNow()
      case formatter:
        return moment.format(formatter)
      default:
        return moment.format(DEFAULT_DATE_FORMATTER)
    }
  }
  // 本地化
  static local(utc, formatter = DEFAULT_DATE_FORMATTER) {
    return moment(utc).format(formatter)
  }
}

 
 export default moment