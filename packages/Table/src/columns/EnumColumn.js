import DataColumn from './DataColumn'

export default class EnumColumn extends DataColumn {
  constructor(options) {
    super(options)

    this.enum = options.enum || {}
  }

  getDataCellValue ({ row }) {
    let value = row[this.attribute]

    if (typeof value === typeof true) value = +value

    if (this.enum.hasOwnProperty(value))
      return this.enum[value]

    return value
  }
}