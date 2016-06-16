function isFunction(fn) {
  return typeof fn === 'function'
}

function Class() {
}

Class.extend = function(protoProps) {
  var parent = this, _super = parent.prototype, child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function() {
      parent.apply(this, arguments);
    };
  }

  var prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  for (var name in protoProps) {
    prototype[name] = isFunction(protoProps[name]) && isFunction(_super[name]) && /\b_super\b/.test(protoProps[name])
      ? (function(name, fn) {
      return function() {
        var tmp = this._super;
        this._super = _super[name];
        var ret = fn.apply(this, arguments);
        this._super = tmp;

        return ret;
      }
    })(name, protoProps[name]) : protoProps[name];
  }

  child.prototype = prototype;
  child.extend = Class.extend;

  return child;
};

module.exports = Class;
