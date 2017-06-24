// 扩展数组方法

/**
 * 返回数组中指定的一列
 * 类似PHP里的 array_column
 */
Array.prototype.column = function (column) {
    return this.map(v => v[column])
}

/**
 * 计算数组元素总和
 */
Array.prototype.sum = function () {
    return this.reduce((a, b) => (+a) + (+b))
}