import accounting from 'accounting'
import moment from 'moment'
import Type from '@/utils/type'


const formatter = {
  format,

  text: asText,

  date: asDate,
  time: asTime,
  percent: asPercent,
  currency: asCurrency,
}

// 重点函数，别的地方只需调用这一个函数即可
// formatter.format(value,format)
function format(value, format) {
  let fn, params;



  if (Type.isArray(format)) {
    if (format.length === 0) {
      throw new Error('format 数组必须包含一个元素')
    }
    console.log(JSON.stringify(format));
    fn = format[0];
    format[0] = value;
    params = format;
  } else {
    fn = format;
    params = [value];
  }
  if (!this[fn]) {

    console.log(fn, value, format)
  }

  return this[fn].apply(null, params);
}




function asText(value) {
  return value
}

function asDate(value) {
  return moment(value).format('Y-MM-DD')
}

function asTime(value) {
  return moment(value).format('HH:mm:ss')
}

function asCurrency(value) {
  return accounting.formatMoney(value, '￥ ')
}

function asPercent(value, decimals = 0) {
  value *= 100;
  return value.toFixed(decimals) + '%'
}


export default formatter
