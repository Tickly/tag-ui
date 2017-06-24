import accounting from 'accounting'
import moment from 'moment'


const formatter = {
  format,

  currency: asCurrency,
  date: asDate,
  time: asTime,
  text: asText,
}


function format(value, format) {
  return this[format](value);
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

function asPercent(value) {
  return value + '%'
}

function asText(value) {
  return value
}


export default formatter
