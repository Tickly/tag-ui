import accounting from 'accounting'
import moment from 'moment'


const formatter = {
  currency: asCurrency,
  date: asDate,
  time: asTime,

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


export default formatter
