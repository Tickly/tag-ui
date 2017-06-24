function isString(target) {
  return 'string' === typeof target
}

function isObject(target) {
  return 'object' === typeof target
}

function isFunction(target) {
  return 'function' === typeof target
}

function isArray(target) {
  return Array.isArray(target);
}

export default {
  isString,
  isObject,
  isFunction,
  isArray,
}
