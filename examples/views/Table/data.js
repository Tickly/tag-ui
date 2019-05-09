class User {
  constructor(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }
  }
  get isAdult () {
    return this.age >= 18
  }
}

export default [
  new User({
    date: '2016-05-02 12:08:34',
    name: '令狐冲',
    address: '上海市普陀区金沙江路 1518 弄',
    age: 25,
    money: 1000000,
  }),
  new User({
    date: '2016-05-04 09:09:09',
    name: '赵云',
    address: '上海市普陀区金沙江路 1517 弄',
    age: 31,
    money: 842934,
  }),
  new User({
    date: '2016-05-01 00:00:00',
    name: '狙击手',
    address: '上海市普陀区金沙江路 1519 弄',
    age: 28,
    money: 492883,
  }),
  new User({
    date: '2016-05-03 10:30:00',
    name: '我是警察',
    address: '上海市普陀区金沙江路 1516 弄',
    age: 27,
    money: 10000001,
  })
]
