function isString(target) {
  return 'string' === typeof target
}

function isObject(target) {
  return 'object' === typeof target
}

function isFunction(target) {
  return 'function' === typeof target
}

export default {
  isString,
  isObject,
  isFunction,
}
