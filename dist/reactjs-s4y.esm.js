import React, { PureComponent } from 'react';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function getWindow(el) {
  return el.nodeType === 9 && el.defaultView;
}
function offset(el) {
  var doc = el == null ? void 0 : el.ownerDocument;
  var docElem = doc.documentElement;
  var win = getWindow(doc);
  var box = {
    top: 0,
    left: 0
  };
  if (!doc) {
    return {
      top: 0,
      left: 0
    };
  }
  if (typeof el.getBoundingClientRect !== typeof undefined) {
    box = el.getBoundingClientRect();
  }
  return {
    top: box.top + (win == null ? void 0 : win.pageYOffset) - docElem.clientTop,
    left: box.left + (win == null ? void 0 : win.pageXOffset) - docElem.clientLeft
  };
}
var Sticky = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Sticky, _PureComponent);
  function Sticky() {
    var _this;
    _this = _PureComponent.apply(this, arguments) || this;
    _this.state = {
      isEnableSticky: false,
      targetHeight: Infinity,
      innerPosition: 'static',
      containerMeasure: {},
      isLong: false,
      innerTop: 0
    };
    _this.getContainerSelectorFocus = function () {
      var containerSelectorFocus = _this.props.containerSelectorFocus;
      return _this.$container.closest(containerSelectorFocus);
    };
    _this.handleWindowResize = function () {
      var stickyEnableRange = _this.props.stickyEnableRange;
      var min = stickyEnableRange[0],
        max = stickyEnableRange[1];
      _this.setState({
        isEnableSticky: window.innerWidth >= min && window.innerWidth <= max
      });
    };
    _this.handleWindowScroll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var onChange, isEnableSticky, isSticky, $containerSelectorFocus, _window, windowHeight, innerHeight, containerMeasure, targetHeight;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            onChange = _this.props.onChange;
            isEnableSticky = _this.state.isEnableSticky;
            isSticky = _this.checkSticky();
            $containerSelectorFocus = _this.getContainerSelectorFocus();
            _window = window, windowHeight = _window.innerHeight;
            if (!(_this.$container && _this.$inner && isEnableSticky)) {
              _context.next = 14;
              break;
            }
            innerHeight = _this.$inner.clientHeight;
            containerMeasure = _this.$container.getBoundingClientRect();
            targetHeight = $containerSelectorFocus ? $containerSelectorFocus.clientHeight : Infinity;
            _context.next = 11;
            return _this.setState({
              containerMeasure: {
                top: containerMeasure.top,
                left: containerMeasure.left,
                width: containerMeasure.width,
                height: innerHeight
              },
              targetHeight: targetHeight,
              isLong: innerHeight > windowHeight
            });
          case 11:
            if (innerHeight > windowHeight) {
              _this.handleLong();
            } else {
              _this.handleShort();
            }
            if (_this.isPrevSticky !== isSticky) {
              onChange(isSticky);
            }
            _this.isPrevSticky = isSticky;
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    _this.checkWrapBottom = function () {
      var offsetTop = _this.props.offsetTop;
      var $containerSelectorFocus = _this.getContainerSelectorFocus();
      var _this$state = _this.state,
        containerMeasure = _this$state.containerMeasure,
        isLong = _this$state.isLong;
      var targetHeight = $containerSelectorFocus ? $containerSelectorFocus.clientHeight : Infinity;
      return (containerMeasure == null ? void 0 : containerMeasure.top) - (containerMeasure == null ? void 0 : containerMeasure.height) + (isLong ? (containerMeasure == null ? void 0 : containerMeasure.height) - window.innerHeight + offsetTop : 0) - offsetTop < targetHeight * -1 - (_this.getContainerSelectorFocusOffsetTop() - _this.getContainerOffsetTop());
    };
    _this.handleLong = function () {
      var _window2 = window,
        scrollY = _window2.scrollY;
      if (_this.prevScrollY > scrollY) {
        _this.handleLongScrollUp(scrollY);
      } else {
        _this.handleLongScrollDown(scrollY);
      }
      _this.prevScrollY = scrollY;
    };
    _this.getInnerTop = function () {
      var innerMeasure = _this.$inner.getBoundingClientRect();
      var innerTop = innerMeasure.top || -1;
      return innerTop;
    };
    _this.getInnerOffsetTop = function () {
      return offset(_this.$inner).top;
    };
    _this.getContainerOffsetTop = function () {
      return offset(_this.$container).top;
    };
    _this.getContainerSelectorFocusOffsetTop = function () {
      var $containerSelectorFocus = _this.getContainerSelectorFocus();
      return $containerSelectorFocus ? offset($containerSelectorFocus).top : 0;
    };
    _this.getContainerSelectorFocusOffsetBottom = function () {
      var $containerSelectorFocus = _this.getContainerSelectorFocus();
      return $containerSelectorFocus ? Math.trunc(offset($containerSelectorFocus).top + $containerSelectorFocus.clientHeight) : 0;
    };
    _this.getInnerPositionTop = function () {
      if (_this.$container && _this.$inner) {
        return _this.getInnerOffsetTop() - _this.getContainerOffsetTop();
      }
      return 0;
    };
    _this.handleLongScrollUp = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(scrollY) {
        var offsetTop, _this$state2, containerMeasure, innerPosition, isTop, innerTop;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              offsetTop = _this.props.offsetTop;
              _this$state2 = _this.state, containerMeasure = _this$state2.containerMeasure, innerPosition = _this$state2.innerPosition;
              isTop = containerMeasure.top > offsetTop;
              innerTop = _this.getInnerTop();
              if (!isTop) {
                _context2.next = 8;
                break;
              }
              _this.setState({
                innerPosition: 'static'
              });
              _context2.next = 12;
              break;
            case 8:
              if (!(containerMeasure.top <= innerTop && (innerPosition === 'fixedBottom' || innerPosition === 'absoluteBottom' && scrollY + window.innerHeight <= _this.getContainerSelectorFocusOffsetBottom()))) {
                _context2.next = 11;
                break;
              }
              _context2.next = 11;
              return _this.setState({
                innerPosition: 'absoluteCenter'
              });
            case 11:
              _this.setInnerPositionFixedTop();
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    _this.setInnerPositionFixedTop = function () {
      var offsetTop = _this.props.offsetTop;
      var innerPosition = _this.state.innerPosition;
      var innerTop = _this.getInnerTop();
      _this.setState({
        innerTop: _this.getInnerPositionTop()
      });
      if (innerTop >= offsetTop && innerPosition === 'absoluteCenter') {
        _this.setState({
          innerPosition: 'fixedTop'
        });
      }
    };
    _this.handleLongScrollDown = function (scrollY) {
      var _this$state3 = _this.state,
        containerMeasure = _this$state3.containerMeasure,
        innerPosition = _this$state3.innerPosition;
      var isBottom = Math.trunc(scrollY + window.innerHeight) >= Math.trunc(_this.getInnerOffsetTop() + containerMeasure.height);
      var isWrapBottom = _this.checkWrapBottom();
      if (innerPosition === 'fixedTop') {
        _this.setState({
          innerPosition: 'absoluteCenter'
        });
      }
      if (isWrapBottom) {
        _this.setState({
          innerPosition: 'absoluteBottom'
        });
      } else if (isBottom) {
        _this.setState({
          innerPosition: 'fixedBottom',
          innerTop: _this.getInnerPositionTop()
        });
      }
    };
    _this.getShortPosition = function (containerMeasure) {
      var offsetTop = _this.props.offsetTop;
      if (containerMeasure.top <= offsetTop) {
        if (_this.checkWrapBottom()) {
          return 'absoluteBottom';
        }
        return 'fixedTop';
      }
      return 'static';
    };
    _this.handleShort = function () {
      var containerMeasure = _this.state.containerMeasure;
      _this.setState({
        innerPosition: _this.getShortPosition(containerMeasure)
      });
    };
    _this.getInnerStyle = function () {
      var _this$props = _this.props,
        offsetTop = _this$props.offsetTop,
        zIndex = _this$props.zIndex;
      var _this$state4 = _this.state,
        targetHeight = _this$state4.targetHeight,
        innerPosition = _this$state4.innerPosition,
        containerMeasure = _this$state4.containerMeasure,
        isLong = _this$state4.isLong,
        innerTop = _this$state4.innerTop;
      var topForAbsoluteBottom = targetHeight - containerMeasure.height + (_this.getContainerSelectorFocusOffsetTop() - _this.getContainerOffsetTop());
      if (isLong) {
        switch (innerPosition) {
          case 'static':
            return {};
          case 'fixedTop':
            return {
              position: 'fixed',
              top: offsetTop,
              width: containerMeasure.width,
              zIndex: zIndex
            };
          case 'absoluteCenter':
            return {
              position: 'absolute',
              top: innerTop,
              width: containerMeasure.width,
              zIndex: zIndex
            };
          case 'absoluteBottom':
            return {
              position: 'absolute',
              top: topForAbsoluteBottom,
              width: containerMeasure.width,
              zIndex: zIndex
            };
          case 'fixedBottom':
            return {
              position: 'fixed',
              bottom: 0,
              width: containerMeasure.width,
              zIndex: zIndex
            };
          default:
            return {};
        }
      }
      switch (innerPosition) {
        case 'static':
          return {};
        case 'absoluteBottom':
          return {
            position: 'absolute',
            top: topForAbsoluteBottom,
            width: containerMeasure.width,
            zIndex: zIndex
          };
        case 'fixedTop':
          return {
            position: 'fixed',
            top: offsetTop,
            width: containerMeasure.width,
            zIndex: zIndex
          };
        default:
          return {};
      }
    };
    _this.getContainerStyle = function () {
      var _this$state5 = _this.state,
        innerPosition = _this$state5.innerPosition,
        containerMeasure = _this$state5.containerMeasure;
      if (innerPosition === 'static') {
        return {
          minHeight: containerMeasure.height
        };
      }
      return {
        position: 'relative',
        minHeight: containerMeasure.height
      };
    };
    _this.checkSticky = function () {
      var innerPosition = _this.state.innerPosition;
      return innerPosition.search(/fixedTop|fixedBottom/g) !== -1;
    };
    _this.setContainerRef = function (c) {
      _this.$container = c;
    };
    _this.setInnerRef = function (c) {
      _this.$inner = c;
    };
    _this.renderHackGetHeightWhenInnerContentMargin = function () {
      return React.createElement("div", {
        style: {
          fontSize: 0,
          visibility: 'hidden'
        }
      }, ".");
    };
    _this.renderChildren = function () {
      var children = _this.props.children;
      var isSticky = _this.checkSticky();
      return typeof children === 'function' ? children(isSticky) : children;
    };
    return _this;
  }
  var _proto = Sticky.prototype;
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
    window.removeEventListener('resize', this.handleWindowResize);
  };
  _proto.render = function render() {
    var isEnableSticky = this.state.isEnableSticky;
    var containerStyle = isEnableSticky ? this.getContainerStyle() : {};
    var innerStyle = isEnableSticky ? this.getInnerStyle() : {};
    return React.createElement("div", {
      ref: this.setContainerRef,
      style: containerStyle
    }, React.createElement("div", {
      ref: this.setInnerRef,
      style: innerStyle
    }, this.renderHackGetHeightWhenInnerContentMargin(), this.renderChildren(), this.renderHackGetHeightWhenInnerContentMargin()));
  };
  return Sticky;
}(PureComponent);
Sticky.defaultProps = {
  offsetTop: 0,
  containerSelectorFocus: 'body',
  zIndex: 10,
  stickyEnableRange: [0, Infinity],
  onChange: function onChange() {}
};

export default Sticky;
//# sourceMappingURL=reactjs-s4y.esm.js.map
