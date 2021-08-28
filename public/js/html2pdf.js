/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/html2pdf/html2pdf.bundle.min.js":
/*!******************************************************!*\
  !*** ./resources/js/html2pdf/html2pdf.bundle.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * html2pdf.js v0.9.1
 * Copyright (c) 2018 Erik Koopmans
 * Released under the MIT License.
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
  }

  function e(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t;
  }

  function A(t, e) {
    return e = {
      exports: {}
    }, t(e, e.exports), e.exports;
  }

  var r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (A(function (e, A) {
    e.exports = function () {
      function e(t) {
        return "function" == typeof t;
      }

      function A() {
        var t = setTimeout;
        return function () {
          return t(n, 1);
        };
      }

      function n() {
        for (var t = 0; t < y; t += 2) {
          var e = H[t],
              A = H[t + 1];
          e(A), H[t] = void 0, H[t + 1] = void 0;
        }

        y = 0;
      }

      function i(t, e) {
        var A = this,
            r = new this.constructor(a);
        void 0 === r[S] && B(r);
        var n = A._state;

        if (n) {
          var i = arguments[n - 1];
          C(function () {
            return g(n, r, i, A._result);
          });
        } else f(A, r, t, e);

        return r;
      }

      function o(t) {
        if (t && "object" == _typeof(t) && t.constructor === this) return t;
        var e = new this(a);
        return l(e, t), e;
      }

      function a() {}

      function s(t) {
        try {
          return t.then;
        } catch (t) {
          return k.error = t, k;
        }
      }

      function c(t, A, r) {
        A.constructor === t.constructor && r === i && A.constructor.resolve === o ? function (t, e) {
          e._state === T ? h(t, e._result) : e._state === N ? d(t, e._result) : f(e, void 0, function (e) {
            return l(t, e);
          }, function (e) {
            return d(t, e);
          });
        }(t, A) : r === k ? (d(t, k.error), k.error = null) : void 0 === r ? h(t, A) : e(r) ? function (t, e, A) {
          C(function (t) {
            var r = !1,
                n = function (t, e, A, r) {
              try {
                t.call(e, A, r);
              } catch (t) {
                return t;
              }
            }(A, e, function (A) {
              r || (r = !0, e !== A ? l(t, A) : h(t, A));
            }, function (e) {
              r || (r = !0, d(t, e));
            }, t._label);

            !r && n && (r = !0, d(t, n));
          }, t);
        }(t, A, r) : h(t, A);
      }

      function l(t, e) {
        t === e ? d(t, new TypeError("You cannot resolve a promise with itself")) : !function (t) {
          var e = _typeof(t);

          return null !== t && ("object" === e || "function" === e);
        }(e) ? h(t, e) : c(t, e, s(e));
      }

      function u(t) {
        t._onerror && t._onerror(t._result), p(t);
      }

      function h(t, e) {
        t._state === _ && (t._result = e, t._state = T, 0 !== t._subscribers.length && C(p, t));
      }

      function d(t, e) {
        t._state === _ && (t._state = N, t._result = e, C(u, t));
      }

      function f(t, e, A, r) {
        var n = t._subscribers,
            i = n.length;
        t._onerror = null, n[i] = e, n[i + T] = A, n[i + N] = r, 0 === i && t._state && C(p, t);
      }

      function p(t) {
        var e = t._subscribers,
            A = t._state;

        if (0 !== e.length) {
          for (var r = void 0, n = void 0, i = t._result, o = 0; o < e.length; o += 3) {
            r = e[o], n = e[o + A], r ? g(A, r, n, i) : n(i);
          }

          t._subscribers.length = 0;
        }
      }

      function g(t, A, r, n) {
        var i = e(r),
            o = void 0,
            a = void 0,
            s = void 0,
            c = void 0;

        if (i) {
          if ((o = function (t, e) {
            try {
              return t(e);
            } catch (t) {
              return k.error = t, k;
            }
          }(r, n)) === k ? (c = !0, a = o.error, o.error = null) : s = !0, A === o) return void d(A, new TypeError("A promises callback cannot return that same promise."));
        } else o = n, s = !0;

        A._state !== _ || (i && s ? l(A, o) : c ? d(A, a) : t === T ? h(A, o) : t === N && d(A, o));
      }

      function B(t) {
        t[S] = O++, t._state = void 0, t._result = void 0, t._subscribers = [];
      }

      var w = void 0;
      w = Array.isArray ? Array.isArray : function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };

      var m = w,
          y = 0,
          v = void 0,
          Q = void 0,
          C = function C(t, e) {
        H[y] = t, H[y + 1] = e, 2 === (y += 2) && (Q ? Q(n) : I());
      };

      var U = "undefined" != typeof window ? window : void 0,
          b = U || {},
          F = b.MutationObserver || b.WebKitMutationObserver,
          E = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          x = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
      var H = new Array(1e3);
      var I = void 0;
      I = E ? function () {
        return process.nextTick(n);
      } : F ? function () {
        var t = 0,
            e = new F(n),
            A = document.createTextNode("");
        return e.observe(A, {
          characterData: !0
        }), function () {
          A.data = t = ++t % 2;
        };
      }() : x ? function () {
        var t = new MessageChannel();
        return t.port1.onmessage = n, function () {
          return t.port2.postMessage(0);
        };
      }() : void 0 === U && "function" == typeof t ? function () {
        try {
          var t = Function("return this")().require("vertx");

          return v = t.runOnLoop || t.runOnContext, function () {
            if (void 0 !== v) return function () {
              v(n);
            };
            return A();
          }();
        } catch (t) {
          return A();
        }
      }() : A();
      var S = Math.random().toString(36).substring(2);

      var _ = void 0,
          T = 1,
          N = 2,
          k = {
        error: null
      };

      var O = 0;

      var P = function () {
        function t(t, e) {
          this._instanceConstructor = t, this.promise = new t(a), this.promise[S] || B(this.promise), m(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? h(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && h(this.promise, this._result))) : d(this.promise, new Error("Array Methods must be provided an Array"));
        }

        return t.prototype._enumerate = function (t) {
          for (var e = 0; this._state === _ && e < t.length; e++) {
            this._eachEntry(t[e], e);
          }
        }, t.prototype._eachEntry = function (t, e) {
          var A = this._instanceConstructor,
              r = A.resolve;

          if (r === o) {
            var n = s(t);
            if (n === i && t._state !== _) this._settledAt(t._state, e, t._result);else if ("function" != typeof n) this._remaining--, this._result[e] = t;else if (A === D) {
              var l = new A(a);
              c(l, t, n), this._willSettleAt(l, e);
            } else this._willSettleAt(new A(function (e) {
              return e(t);
            }), e);
          } else this._willSettleAt(r(t), e);
        }, t.prototype._settledAt = function (t, e, A) {
          var r = this.promise;
          r._state === _ && (this._remaining--, t === N ? d(r, A) : this._result[e] = A), 0 === this._remaining && h(r, this._result);
        }, t.prototype._willSettleAt = function (t, e) {
          var A = this;
          f(t, void 0, function (t) {
            return A._settledAt(T, e, t);
          }, function (t) {
            return A._settledAt(N, e, t);
          });
        }, t;
      }();

      var D = function () {
        function t(e) {
          this[S] = O++, this._result = this._state = void 0, this._subscribers = [], a !== e && ("function" != typeof e && function () {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }(), this instanceof t ? function (t, e) {
            try {
              e(function (e) {
                l(t, e);
              }, function (e) {
                d(t, e);
              });
            } catch (e) {
              d(t, e);
            }
          }(this, e) : function () {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }());
        }

        return t.prototype["catch"] = function (t) {
          return this.then(null, t);
        }, t.prototype["finally"] = function (t) {
          var A = this.constructor;
          return e(t) ? this.then(function (e) {
            return A.resolve(t()).then(function () {
              return e;
            });
          }, function (e) {
            return A.resolve(t()).then(function () {
              throw e;
            });
          }) : this.then(t, t);
        }, t;
      }();

      D.prototype.then = i, D.all = function (t) {
        return new P(this, t).promise;
      }, D.race = function (t) {
        var e = this;
        return new e(m(t) ? function (A, r) {
          for (var n = t.length, i = 0; i < n; i++) {
            e.resolve(t[i]).then(A, r);
          }
        } : function (t, e) {
          return e(new TypeError("You must pass an array to race."));
        });
      }, D.resolve = o, D.reject = function (t) {
        var e = new this(a);
        return d(e, t), e;
      }, D._setScheduler = function (t) {
        Q = t;
      }, D._setAsap = function (t) {
        C = t;
      }, D._asap = C;
      return D.polyfill = function () {
        var t = void 0;
        if (void 0 !== r) t = r;else if ("undefined" != typeof self) t = self;else try {
          t = Function("return this")();
        } catch (t) {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;

        if (e) {
          var A = null;

          try {
            A = Object.prototype.toString.call(e.resolve());
          } catch (t) {}

          if ("[object Promise]" === A && !e.cast) return;
        }

        t.Promise = D;
      }, D.Promise = D, D;
    }();
  }).polyfill(), A(function (e, A) {
    e.exports = function () {
      function n(t) {
        var e = 0;
        if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++]) throw "Invalid GIF 87a/89a header.";
        var A = t[e++] | t[e++] << 8,
            r = t[e++] | t[e++] << 8,
            n = t[e++],
            o = n >> 7,
            a = 1 << 1 + (7 & n);
        t[e++], t[e++];
        var s = null;
        o && (s = e, e += 3 * a);
        var c = !0,
            l = [],
            u = 0,
            h = null,
            d = 0,
            f = null;

        for (this.width = A, this.height = r; c && e < t.length;) {
          switch (t[e++]) {
            case 33:
              switch (t[e++]) {
                case 255:
                  if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, f = t[e++] | t[e++] << 8, e++;else for (e += 12; 0 !== (b = t[e++]);) {
                    e += b;
                  }
                  break;

                case 249:
                  if (4 !== t[e++] || 0 !== t[e + 4]) throw "Invalid graphics extension block.";
                  var p = t[e++];
                  u = t[e++] | t[e++] << 8, h = t[e++], 0 == (1 & p) && (h = null), d = p >> 2 & 7, e++;
                  break;

                case 254:
                  for (; 0 !== (b = t[e++]);) {
                    e += b;
                  }

                  break;

                default:
                  throw "Unknown graphic control label: 0x" + t[e - 1].toString(16);
              }

              break;

            case 44:
              var g = t[e++] | t[e++] << 8,
                  B = t[e++] | t[e++] << 8,
                  w = t[e++] | t[e++] << 8,
                  m = t[e++] | t[e++] << 8,
                  y = t[e++],
                  v = y >> 6 & 1,
                  Q = s,
                  C = !1;
              y >> 7 && (C = !0, Q = e, e += 3 * (1 << 1 + (7 & y)));
              var U = e;

              for (e++;;) {
                var b;
                if (0 === (b = t[e++])) break;
                e += b;
              }

              l.push({
                x: g,
                y: B,
                width: w,
                height: m,
                has_local_palette: C,
                palette_offset: Q,
                data_offset: U,
                data_length: e - U,
                transparent_index: h,
                interlaced: !!v,
                delay: u,
                disposal: d
              });
              break;

            case 59:
              c = !1;
              break;

            default:
              throw "Unknown gif block: 0x" + t[e - 1].toString(16);
          }
        }

        this.numFrames = function () {
          return l.length;
        }, this.loopCount = function () {
          return f;
        }, this.frameInfo = function (t) {
          if (t < 0 || t >= l.length) throw "Frame index out of range.";
          return l[t];
        }, this.decodeAndBlitFrameBGRA = function (e, r) {
          var n = this.frameInfo(e),
              o = n.width * n.height,
              a = new Uint8Array(o);
          i(t, n.data_offset, a, o);
          var s = n.palette_offset,
              c = n.transparent_index;
          null === c && (c = 256);
          var l = n.width,
              u = A - l,
              h = l,
              d = 4 * (n.y * A + n.x),
              f = 4 * ((n.y + n.height) * A + n.x),
              p = d,
              g = 4 * u;
          !0 === n.interlaced && (g += 4 * (l + u) * 7);

          for (var B = 8, w = 0, m = a.length; w < m; ++w) {
            var y = a[w];
            if (0 === h && (h = l, f <= (p += g) && (g = u + 4 * (l + u) * (B - 1), p = d + (l + u) * (B << 1), B >>= 1)), y === c) p += 4;else {
              var v = t[s + 3 * y],
                  Q = t[s + 3 * y + 1],
                  C = t[s + 3 * y + 2];
              r[p++] = C, r[p++] = Q, r[p++] = v, r[p++] = 255;
            }
            --h;
          }
        }, this.decodeAndBlitFrameRGBA = function (e, r) {
          var n = this.frameInfo(e),
              o = n.width * n.height,
              a = new Uint8Array(o);
          i(t, n.data_offset, a, o);
          var s = n.palette_offset,
              c = n.transparent_index;
          null === c && (c = 256);
          var l = n.width,
              u = A - l,
              h = l,
              d = 4 * (n.y * A + n.x),
              f = 4 * ((n.y + n.height) * A + n.x),
              p = d,
              g = 4 * u;
          !0 === n.interlaced && (g += 4 * (l + u) * 7);

          for (var B = 8, w = 0, m = a.length; w < m; ++w) {
            var y = a[w];
            if (0 === h && (h = l, f <= (p += g) && (g = u + 4 * (l + u) * (B - 1), p = d + (l + u) * (B << 1), B >>= 1)), y === c) p += 4;else {
              var v = t[s + 3 * y],
                  Q = t[s + 3 * y + 1],
                  C = t[s + 3 * y + 2];
              r[p++] = v, r[p++] = Q, r[p++] = C, r[p++] = 255;
            }
            --h;
          }
        };
      }

      function i(t, e, A, r) {
        for (var n = t[e++], i = 1 << n, o = i + 1, a = o + 1, s = n + 1, c = (1 << s) - 1, l = 0, u = 0, h = 0, d = t[e++], f = new Int32Array(4096), p = null;;) {
          for (; l < 16 && 0 !== d;) {
            u |= t[e++] << l, l += 8, 1 === d ? d = t[e++] : --d;
          }

          if (l < s) break;
          var g = u & c;

          if (u >>= s, l -= s, g !== i) {
            if (g === o) break;

            for (var B = g < a ? g : p, w = 0, m = B; i < m;) {
              m = f[m] >> 8, ++w;
            }

            var y = m;
            if (r < h + w + (B !== g ? 1 : 0)) return void console.log("Warning, gif stream longer than expected.");
            A[h++] = y;
            var v = h += w;

            for (B !== g && (A[h++] = y), m = B; w--;) {
              m = f[m], A[--v] = 255 & m, m >>= 8;
            }

            null !== p && a < 4096 && (f[a++] = p << 8 | y, c + 1 <= a && s < 12 && (++s, c = c << 1 | 1)), p = g;
          } else a = o + 1, c = (1 << (s = n + 1)) - 1, p = null;
        }

        return h !== r && console.log("Warning, gif stream shorter than expected."), A;
      }

      function o(t) {
        function e(t, e) {
          for (var A = 0, r = 0, n = new Array(), i = 1; i <= 16; i++) {
            for (var o = 1; o <= t[i]; o++) {
              n[e[r]] = [], n[e[r]][0] = A, n[e[r]][1] = i, r++, A++;
            }

            A *= 2;
          }

          return n;
        }

        function A(t) {
          for (var e = t[0], A = t[1] - 1; 0 <= A;) {
            e & 1 << A && (Q |= 1 << C), A--, --C < 0 && (255 == Q ? (r(255), r(0)) : r(Q), C = 7, Q = 0);
          }
        }

        function r(t) {
          v.push(t);
        }

        function n(t) {
          r(t >> 8 & 255), r(255 & t);
        }

        function i(t, e, r, n, i) {
          for (var o, a = i[0], s = i[240], c = function (t, e) {
            var A,
                r,
                n,
                i,
                o,
                a,
                s,
                c,
                l,
                u,
                h = 0;

            for (l = 0; l < 8; ++l) {
              A = t[h], r = t[h + 1], n = t[h + 2], i = t[h + 3], o = t[h + 4], a = t[h + 5], s = t[h + 6];
              var d = A + (c = t[h + 7]),
                  f = A - c,
                  p = r + s,
                  g = r - s,
                  B = n + a,
                  w = n - a,
                  y = i + o,
                  v = i - o,
                  Q = d + y,
                  C = d - y,
                  U = p + B,
                  b = p - B;
              t[h] = Q + U, t[h + 4] = Q - U;
              var F = .707106781 * (b + C);
              t[h + 2] = C + F, t[h + 6] = C - F;

              var E = .382683433 * ((Q = v + w) - (b = g + f)),
                  x = .5411961 * Q + E,
                  H = 1.306562965 * b + E,
                  I = .707106781 * (U = w + g),
                  S = f + I,
                  _ = f - I;

              t[h + 5] = _ + x, t[h + 3] = _ - x, t[h + 1] = S + H, t[h + 7] = S - H, h += 8;
            }

            for (l = h = 0; l < 8; ++l) {
              A = t[h], r = t[h + 8], n = t[h + 16], i = t[h + 24], o = t[h + 32], a = t[h + 40], s = t[h + 48];
              var T = A + (c = t[h + 56]),
                  N = A - c,
                  k = r + s,
                  O = r - s,
                  P = n + a,
                  D = n - a,
                  L = i + o,
                  R = i - o,
                  M = T + L,
                  K = T - L,
                  z = k + P,
                  q = k - P;
              t[h] = M + z, t[h + 32] = M - z;
              var j = .707106781 * (q + K);
              t[h + 16] = K + j, t[h + 48] = K - j;
              var X = .382683433 * ((M = R + D) - (q = O + N)),
                  V = .5411961 * M + X,
                  G = 1.306562965 * q + X,
                  W = .707106781 * (z = D + O),
                  Y = N + W,
                  J = N - W;
              t[h + 40] = J + V, t[h + 24] = J - V, t[h + 8] = Y + G, t[h + 56] = Y - G, h++;
            }

            for (l = 0; l < 64; ++l) {
              u = t[l] * e[l], m[l] = 0 < u ? u + .5 | 0 : u - .5 | 0;
            }

            return m;
          }(t, e), l = 0; l < 64; ++l) {
            y[H[l]] = c[l];
          }

          var u = y[0] - r;
          r = y[0], 0 == u ? A(n[0]) : (A(n[w[o = 32767 + u]]), A(B[o]));

          for (var h = 63; 0 < h && 0 == y[h]; h--) {
            ;
          }

          if (0 == h) return A(a), r;

          for (var d, f = 1; f <= h;) {
            for (var p = f; 0 == y[f] && f <= h; ++f) {
              ;
            }

            var g = f - p;

            if (16 <= g) {
              d = g >> 4;

              for (var v = 1; v <= d; ++v) {
                A(s);
              }

              g &= 15;
            }

            o = 32767 + y[f], A(i[(g << 4) + w[o]]), A(B[o]), f++;
          }

          return 63 != h && A(a), r;
        }

        function o(t) {
          t <= 0 && (t = 1), 100 < t && (t = 100), u != t && (function (t) {
            for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], A = 0; A < 64; A++) {
              var r = h((e[A] * t + 50) / 100);
              r < 1 ? r = 1 : 255 < r && (r = 255), d[H[A]] = r;
            }

            for (var n = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], i = 0; i < 64; i++) {
              var o = h((n[i] * t + 50) / 100);
              o < 1 ? o = 1 : 255 < o && (o = 255), f[H[i]] = o;
            }

            for (var a = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], s = 0, c = 0; c < 8; c++) {
              for (var l = 0; l < 8; l++) {
                p[s] = 1 / (d[H[s]] * a[c] * a[l] * 8), g[s] = 1 / (f[H[s]] * a[c] * a[l] * 8), s++;
              }
            }
          }(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)), u = t);
        }

        var a,
            s,
            c,
            l,
            u,
            h = Math.floor,
            d = new Array(64),
            f = new Array(64),
            p = new Array(64),
            g = new Array(64),
            B = new Array(65535),
            w = new Array(65535),
            m = new Array(64),
            y = new Array(64),
            v = [],
            Q = 0,
            C = 7,
            U = new Array(64),
            b = new Array(64),
            F = new Array(64),
            E = new Array(256),
            x = new Array(2048),
            H = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
            I = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            _ = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
            T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
            N = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            O = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
            P = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
        this.encode = function (t, e) {
          var u, h;
          new Date().getTime(), e && o(e), v = new Array(), Q = 0, C = 7, n(65496), n(65504), n(16), r(74), r(70), r(73), r(70), r(0), r(1), r(1), r(0), n(1), n(1), r(0), r(0), function () {
            n(65499), n(132), r(0);

            for (var t = 0; t < 64; t++) {
              r(d[t]);
            }

            r(1);

            for (var e = 0; e < 64; e++) {
              r(f[e]);
            }
          }(), u = t.width, h = t.height, n(65472), n(17), r(8), n(h), n(u), r(3), r(1), r(17), r(0), r(2), r(17), r(1), r(3), r(17), r(1), function () {
            n(65476), n(418), r(0);

            for (var t = 0; t < 16; t++) {
              r(I[t + 1]);
            }

            for (var e = 0; e <= 11; e++) {
              r(S[e]);
            }

            r(16);

            for (var A = 0; A < 16; A++) {
              r(_[A + 1]);
            }

            for (var i = 0; i <= 161; i++) {
              r(T[i]);
            }

            r(1);

            for (var o = 0; o < 16; o++) {
              r(N[o + 1]);
            }

            for (var a = 0; a <= 11; a++) {
              r(k[a]);
            }

            r(17);

            for (var s = 0; s < 16; s++) {
              r(O[s + 1]);
            }

            for (var c = 0; c <= 161; c++) {
              r(P[c]);
            }
          }(), n(65498), n(12), r(3), r(1), r(0), r(2), r(17), r(3), r(17), r(0), r(63), r(0);
          var B = 0,
              w = 0,
              m = 0;
          Q = 0, C = 7, this.encode.displayName = "_encode_";

          for (var y, E, H, D, L, R, M, K, z, q = t.data, j = t.width, X = t.height, V = 4 * j, G = 0; G < X;) {
            for (y = 0; y < V;) {
              for (R = L = V * G + y, M = -1, z = K = 0; z < 64; z++) {
                R = L + (K = z >> 3) * V + (M = 4 * (7 & z)), X <= G + K && (R -= V * (G + 1 + K - X)), V <= y + M && (R -= y + M - V + 4), E = q[R++], H = q[R++], D = q[R++], U[z] = (x[E] + x[H + 256 >> 0] + x[D + 512 >> 0] >> 16) - 128, b[z] = (x[E + 768 >> 0] + x[H + 1024 >> 0] + x[D + 1280 >> 0] >> 16) - 128, F[z] = (x[E + 1280 >> 0] + x[H + 1536 >> 0] + x[D + 1792 >> 0] >> 16) - 128;
              }

              B = i(U, p, B, a, c), w = i(b, g, w, s, l), m = i(F, g, m, s, l), y += 32;
            }

            G += 8;
          }

          if (0 <= C) {
            var W = [];
            W[1] = C + 1, W[0] = (1 << C + 1) - 1, A(W);
          }

          return n(65497), new Uint8Array(v);
        }, new Date().getTime(), t || (t = 50), function () {
          for (var t = String.fromCharCode, e = 0; e < 256; e++) {
            E[e] = t(e);
          }
        }(), a = e(I, S), s = e(N, k), c = e(_, T), l = e(O, P), function () {
          for (var t = 1, e = 2, A = 1; A <= 15; A++) {
            for (var r = t; r < e; r++) {
              w[32767 + r] = A, B[32767 + r] = [], B[32767 + r][1] = A, B[32767 + r][0] = r;
            }

            for (var n = -(e - 1); n <= -t; n++) {
              w[32767 + n] = A, B[32767 + n] = [], B[32767 + n][1] = A, B[32767 + n][0] = e - 1 + n;
            }

            t <<= 1, e <<= 1;
          }
        }(), function () {
          for (var t = 0; t < 256; t++) {
            x[t] = 19595 * t, x[t + 256 >> 0] = 38470 * t, x[t + 512 >> 0] = 7471 * t + 32768, x[t + 768 >> 0] = -11059 * t, x[t + 1024 >> 0] = -21709 * t, x[t + 1280 >> 0] = 32768 * t + 8421375, x[t + 1536 >> 0] = -27439 * t, x[t + 1792 >> 0] = -5329 * t;
          }
        }(), o(t), new Date().getTime();
      }

      function a(t, e) {
        if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
        this.parseHeader(), this.parseBGR();
      }

      var s,
          c,
          l,
          u,
          h,
          d,
          f,
          p,
          g,
          B,
          w,
          m,
          y,
          v,
          Q,
          C,
          U,
          b,
          F,
          E,
          x,
          H,
          I,
          S,
          _,
          T,
          N,
          k,
          O,
          P,
          D,
          L,
          R,
          M,
          K,
          z,
          q,
          j,
          X,
          V,
          G,
          W,
          Y,
          J,
          Z,
          $,
          tt,
          et,
          At,
          rt,
          nt,
          it,
          ot,
          at = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      },
          st = function (t) {
        function A(e, i, o, a) {
          var s = {};
          "object" === (void 0 === e ? "undefined" : at(e)) && (e = (s = e).orientation, i = s.unit || i, o = s.format || o, a = s.compress || s.compressPdf || a), i = i || "mm", o = o || "a4", e = ("" + (e || "P")).toLowerCase(), ("" + o).toLowerCase();

          var c,
              l,
              u,
              h,
              d,
              f,
              p,
              g,
              B,
              w,
              m,
              y = !!a && "function" == typeof Uint8Array,
              v = s.textColor || "0 g",
              Q = s.drawColor || "0 G",
              C = s.fontSize || 16,
              U = s.charSpace || 0,
              b = s.R2L || !1,
              F = s.lineHeight || 1.15,
              E = s.lineWidth || .200025,
              x = "00000000000000000000000000000000",
              H = 2,
              I = !1,
              S = [],
              _ = {},
              T = {},
              N = 0,
              k = [],
              O = [],
              P = [],
              D = [],
              L = [],
              R = 0,
              M = 0,
              K = 0,
              z = {
            title: "",
            subject: "",
            author: "",
            keywords: "",
            creator: ""
          },
              q = {},
              j = new function (e) {
            var A = {};
            this.subscribe = function (t, e, r) {
              if ("function" != typeof e) return !1;
              A.hasOwnProperty(t) || (A[t] = {});
              var n = Math.random().toString(35);
              return A[t][n] = [e, !!r], n;
            }, this.unsubscribe = function (t) {
              for (var e in A) {
                if (A[e][t]) return delete A[e][t], !0;
              }

              return !1;
            }, this.publish = function (r) {
              if (A.hasOwnProperty(r)) {
                var n = Array.prototype.slice.call(arguments, 1),
                    i = [];

                for (var o in A[r]) {
                  var a = A[r][o];

                  try {
                    a[0].apply(e, n);
                  } catch (r) {
                    t.console && console.error("jsPDF PubSub Error", r.message, r);
                  }

                  a[1] && i.push(o);
                }

                i.length && i.forEach(this.unsubscribe);
              }
            };
          }(q),
              X = s.hotfixes || [],
              V = function V(t) {
            var e,
                A = t.ch1,
                r = t.ch2,
                n = t.ch3,
                i = t.ch4,
                o = (t.precision, "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"]);

            if ("string" == typeof A && "#" !== A.charAt(0)) {
              var a = new RGBColor(A);
              a.ok && (A = a.toHex());
            }

            if ("string" == typeof A && /^#[0-9A-Fa-f]{3}$/.test(A) && (A = "#" + A[1] + A[1] + A[2] + A[2] + A[3] + A[3]), "string" == typeof A && /^#[0-9A-Fa-f]{6}$/.test(A)) {
              var s = parseInt(A.substr(1), 16);
              A = s >> 16 & 255, r = s >> 8 & 255, n = 255 & s;
            }

            if (void 0 === r || void 0 === i && A === r && r === n) {
              if ("string" == typeof A) e = A + " " + o[0];else switch (t.precision) {
                case 2:
                  e = J(A / 255) + " " + o[0];
                  break;

                case 3:
                default:
                  e = Z(A / 255) + " " + o[0];
              }
            } else if (void 0 === i || "object" === (void 0 === i ? "undefined" : at(i))) {
              if ("string" == typeof A) e = [A, r, n, o[1]].join(" ");else switch (t.precision) {
                case 2:
                  e = [J(A / 255), J(r / 255), J(n / 255), o[1]].join(" ");
                  break;

                default:
                case 3:
                  e = [Z(A / 255), Z(r / 255), Z(n / 255), o[1]].join(" ");
              }
              i && 0 === i.a && (e = ["255", "255", "255", o[1]].join(" "));
            } else if ("string" == typeof A) e = [A, r, n, i, o[2]].join(" ");else switch (t.precision) {
              case 2:
                e = [J(A), J(r), J(n), J(i), o[2]].join(" ");
                break;

              case 3:
              default:
                e = [Z(A), Z(r), Z(n), Z(i), o[2]].join(" ");
            }
            return e;
          },
              G = function G(t) {
            var e = function e(t) {
              return ("0" + parseInt(t)).slice(-2);
            },
                A = t.getTimezoneOffset(),
                r = A < 0 ? "+" : "-",
                n = Math.floor(Math.abs(A / 60)),
                i = Math.abs(A % 60),
                o = [r, e(n), "'", e(i), "'"].join("");

            return ["D:", t.getFullYear(), e(t.getMonth() + 1), e(t.getDate()), e(t.getHours()), e(t.getMinutes()), e(t.getSeconds()), o].join("");
          },
              W = function W(t) {
            var e;
            return void 0 === (void 0 === t ? "undefined" : at(t)) && (t = new Date()), e = "object" === (void 0 === t ? "undefined" : at(t)) && "[object Date]" === Object.prototype.toString.call(t) ? G(t) : /^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t) ? t : G(new Date()), w = e;
          },
              Y = function Y(t) {
            return t = t || "12345678901234567890123456789012".split("").map(function () {
              return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
            }).join(""), x = t;
          },
              J = function J(t) {
            return t.toFixed(2);
          },
              Z = function Z(t) {
            return t.toFixed(3);
          },
              $ = function $(t) {
            t = "string" == typeof t ? t : t.toString(), I ? k[h].push(t) : (K += t.length + 1, D.push(t));
          },
              tt = function tt() {
            return S[++H] = K, $(H + " 0 obj"), H;
          },
              et = function et(t) {
            $("stream"), $(t), $("endstream");
          },
              At = function At() {
            !function () {
              for (var t in _) {
                _.hasOwnProperty(t) && (e = _[t], j.publish("putFont", {
                  font: e,
                  out: $,
                  newObject: tt
                }), !0 !== e.isAlreadyPutted && (e.objectNumber = tt(), $("<<"), $("/Type /Font"), $("/BaseFont /" + e.postScriptName), $("/Subtype /Type1"), "string" == typeof e.encoding && $("/Encoding /" + e.encoding), $("/FirstChar 32"), $("/LastChar 255"), $(">>"), $("endobj")));
              }

              var e;
            }(), j.publish("putResources"), S[2] = K, $("2 0 obj"), $("<<"), function () {
              for (var t in $("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), $("/Font <<"), _) {
                _.hasOwnProperty(t) && $("/" + t + " " + _[t].objectNumber + " 0 R");
              }

              $(">>"), $("/XObject <<"), j.publish("putXobjectDict"), $(">>");
            }(), $(">>"), $("endobj"), j.publish("postPutResources");
          },
              rt = function rt(t, e, A) {
            T.hasOwnProperty(e) || (T[e] = {}), T[e][A] = t;
          },
              nt = function nt(t, e, A, r) {
            var n = "F" + (Object.keys(_).length + 1).toString(10),
                i = _[n] = {
              id: n,
              postScriptName: t,
              fontName: e,
              fontStyle: A,
              encoding: r,
              metadata: {}
            };
            return rt(n, e, A), j.publish("addFont", i), n;
          },
              it = function it(t, e) {
            return function (t, e) {
              var A, r, n, i, o, a, s, l, u;

              if (n = (e = e || {}).sourceEncoding || "Unicode", o = e.outputEncoding, (e.autoencode || o) && _[c].metadata && _[c].metadata[n] && _[c].metadata[n].encoding && (i = _[c].metadata[n].encoding, !o && _[c].encoding && (o = _[c].encoding), !o && i.codePages && (o = i.codePages[0]), "string" == typeof o && (o = i[o]), o)) {
                for (s = !1, a = [], A = 0, r = t.length; A < r; A++) {
                  (l = o[t.charCodeAt(A)]) ? a.push(String.fromCharCode(l)) : a.push(t[A]), a[A].charCodeAt(0) >> 8 && (s = !0);
                }

                t = a.join("");
              }

              for (A = t.length; void 0 === s && 0 !== A;) {
                t.charCodeAt(A - 1) >> 8 && (s = !0), A--;
              }

              if (!s) return t;

              for (a = e.noBOM ? [] : [254, 255], A = 0, r = t.length; A < r; A++) {
                if ((u = (l = t.charCodeAt(A)) >> 8) >> 8) throw new Error("Character at position " + A + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                a.push(u), a.push(l - (u << 8));
              }

              return String.fromCharCode.apply(void 0, a);
            }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
          },
              ot = function ot() {
            (function (t, e) {
              var A = "string" == typeof e && e.toLowerCase();

              if ("string" == typeof t) {
                var r = t.toLowerCase();
                n.hasOwnProperty(r) && (t = n[r][0] / l, e = n[r][1] / l);
              }

              if (Array.isArray(t) && (e = t[1], t = t[0]), A) {
                switch (A.substr(0, 1)) {
                  case "l":
                    t < e && (A = "s");
                    break;

                  case "p":
                    e < t && (A = "s");
                }

                "s" === A && (u = t, t = e, e = u);
              }

              I = !0, k[++N] = [], P[N] = {
                width: Number(t) || d,
                height: Number(e) || f
              }, O[N] = {}, st(N);
            }).apply(this, arguments), $(J(E * l) + " w"), $(Q), 0 !== R && $(R + " J"), 0 !== M && $(M + " j"), j.publish("addPage", {
              pageNumber: N
            });
          },
              st = function st(t) {
            0 < t && t <= N && (d = P[h = t].width, f = P[t].height);
          },
              ct = function ct(t, e, A) {
            var r,
                n = void 0;
            return A = A || {}, t = void 0 !== t ? t : _[c].fontName, e = void 0 !== e ? e : _[c].fontStyle, r = t.toLowerCase(), void 0 !== T[r] && void 0 !== T[r][e] ? n = T[r][e] : void 0 !== T[t] && void 0 !== T[t][e] ? n = T[t][e] : !1 === A.disableWarning && console.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), n || A.noFallback || null == (n = T.times[e]) && (n = T.times.normal), n;
          },
              lt = function lt() {
            I = !1, H = 2, K = 0, D = [], S = [], L = [], j.publish("buildDocument"), $("%PDF-" + r), $("%ºß¬à"), function () {
              var e,
                  r,
                  n,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u,
                  h = [];

              for (s = t.adler32cs || A.API.adler32cs, y && void 0 === s && (y = !1), e = 1; e <= N; e++) {
                if (h.push(tt()), c = (d = P[e].width) * l, u = (f = P[e].height) * l, $("<</Type /Page"), $("/Parent 1 0 R"), $("/Resources 2 0 R"), $("/MediaBox [0 0 " + J(c) + " " + J(u) + "]"), j.publish("putPage", {
                  pageNumber: e,
                  page: k[e]
                }), $("/Contents " + (H + 1) + " 0 R"), $(">>"), $("endobj"), r = k[e].join("\n"), tt(), y) {
                  for (n = [], i = r.length; i--;) {
                    n[i] = r.charCodeAt(i);
                  }

                  a = s.from(r), (o = new Deflater(6)).append(new Uint8Array(n)), r = o.flush(), (n = new Uint8Array(r.length + 6)).set(new Uint8Array([120, 156])), n.set(r, 2), n.set(new Uint8Array([255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255]), r.length + 2), r = String.fromCharCode.apply(null, n), $("<</Length " + r.length + " /Filter [/FlateDecode]>>");
                } else $("<</Length " + r.length + ">>");

                et(r), $("endobj");
              }

              S[1] = K, $("1 0 obj"), $("<</Type /Pages");
              var p = "/Kids [";

              for (i = 0; i < N; i++) {
                p += h[i] + " 0 R ";
              }

              $(p + "]"), $("/Count " + N), $(">>"), $("endobj"), j.publish("postPutPages");
            }(), function () {
              j.publish("putAdditionalObjects");

              for (var t = 0; t < L.length; t++) {
                var e = L[t];
                S[e.objId] = K, $(e.objId + " 0 obj"), $(e.content), $("endobj");
              }

              H += L.length, j.publish("postPutAdditionalObjects");
            }(), At(), tt(), $("<<"), function () {
              for (var t in $("/Producer (jsPDF " + A.version + ")"), z) {
                z.hasOwnProperty(t) && z[t] && $("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + it(z[t]) + ")");
              }

              $("/CreationDate (" + w + ")");
            }(), $(">>"), $("endobj"), tt(), $("<<"), function () {
              switch ($("/Type /Catalog"), $("/Pages 1 0 R"), g || (g = "fullwidth"), g) {
                case "fullwidth":
                  $("/OpenAction [3 0 R /FitH null]");
                  break;

                case "fullheight":
                  $("/OpenAction [3 0 R /FitV null]");
                  break;

                case "fullpage":
                  $("/OpenAction [3 0 R /Fit]");
                  break;

                case "original":
                  $("/OpenAction [3 0 R /XYZ null null 1]");
                  break;

                default:
                  var t = "" + g;
                  "%" === t.substr(t.length - 1) && (g = parseInt(g) / 100), "number" == typeof g && $("/OpenAction [3 0 R /XYZ null null " + J(g) + "]");
              }

              switch (B || (B = "continuous"), B) {
                case "continuous":
                  $("/PageLayout /OneColumn");
                  break;

                case "single":
                  $("/PageLayout /SinglePage");
                  break;

                case "two":
                case "twoleft":
                  $("/PageLayout /TwoColumnLeft");
                  break;

                case "tworight":
                  $("/PageLayout /TwoColumnRight");
              }

              p && $("/PageMode /" + p), j.publish("putCatalog");
            }(), $(">>"), $("endobj");
            var e,
                n = K,
                i = "0000000000";

            for ($("xref"), $("0 " + (H + 1)), $(i + " 65535 f "), e = 1; e <= H; e++) {
              var o = S[e];
              $("function" == typeof o ? (i + S[e]()).slice(-10) + " 00000 n " : (i + S[e]).slice(-10) + " 00000 n ");
            }

            return $("trailer"), $("<<"), $("/Size " + (H + 1)), $("/Root " + H + " 0 R"), $("/Info " + (H - 1) + " 0 R"), $("/ID [ <" + x + "> <" + x + "> ]"), $(">>"), $("startxref"), $("" + n), $("%%EOF"), I = !0, D.join("\n");
          },
              ut = function ut(t) {
            var e = "S";
            return "F" === t ? e = "f" : "FD" === t || "DF" === t ? e = "B" : "f" !== t && "f*" !== t && "B" !== t && "B*" !== t || (e = t), e;
          },
              ht = function ht() {
            for (var t = lt(), e = t.length, A = new ArrayBuffer(e), r = new Uint8Array(A); e--;) {
              r[e] = t.charCodeAt(e);
            }

            return A;
          },
              dt = function dt() {
            return new Blob([ht()], {
              type: "application/pdf"
            });
          },
              ft = ((m = function m(e, A) {
            var r = "dataur" === ("" + e).substr(0, 6) ? "data:application/pdf;base64," + btoa(lt()) : 0;

            switch (e) {
              case void 0:
                return lt();

              case "save":
                if ("object" === ("undefined" == typeof navigator ? "undefined" : at(navigator)) && navigator.getUserMedia && (void 0 === t.URL || void 0 === t.URL.createObjectURL)) return q.output("dataurlnewwindow");
                bt(dt(), A), "function" == typeof bt.unload && t.setTimeout && setTimeout(bt.unload, 911);
                break;

              case "arraybuffer":
                return ht();

              case "blob":
                return dt();

              case "bloburi":
              case "bloburl":
                return t.URL && t.URL.createObjectURL(dt()) || void 0;

              case "datauristring":
              case "dataurlstring":
                return r;

              case "dataurlnewwindow":
                var n = t.open(r);
                if (n || "undefined" == typeof safari) return n;

              case "datauri":
              case "dataurl":
                return t.document.location.href = r;

              default:
                throw new Error('Output type "' + e + '" is not supported.');
            }
          }).foo = function () {
            try {
              return m.apply(this, arguments);
            } catch (r) {
              var e = r.stack || "";
              ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
              var A = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + r.message;
              if (!t.console) throw new Error(A);
              t.console.error(A, r), t.alert && alert(A);
            }
          }, (m.foo.bar = m).foo),
              pt = function pt(t) {
            return !0 === Array.isArray(X) && -1 < X.indexOf(t);
          };

          switch (i) {
            case "pt":
              l = 1;
              break;

            case "mm":
              l = 72 / 25.4;
              break;

            case "cm":
              l = 72 / 2.54;
              break;

            case "in":
              l = 72;
              break;

            case "px":
              l = 1 == pt("px_scaling") ? .75 : 96 / 72;
              break;

            case "pc":
            case "em":
              l = 12;
              break;

            case "ex":
              l = 6;
              break;

            default:
              throw "Invalid unit: " + i;
          }

          for (var gt in W(), Y(), q.internal = {
            pdfEscape: it,
            getStyle: ut,
            getFont: function getFont() {
              return _[ct.apply(q, arguments)];
            },
            getFontSize: function getFontSize() {
              return C;
            },
            getCharSpace: function getCharSpace() {
              return U;
            },
            getTextColor: function getTextColor() {
              var t = v.split(" ");

              if (2 === t.length && "g" === t[1]) {
                var e = parseFloat(t[0]);
                t = [e, e, e, "r"];
              }

              for (var A = "#", r = 0; r < 3; r++) {
                A += ("0" + Math.floor(255 * parseFloat(t[r])).toString(16)).slice(-2);
              }

              return A;
            },
            getLineHeight: function getLineHeight() {
              return C * F;
            },
            write: function write(t) {
              $(1 === arguments.length ? t : Array.prototype.join.call(arguments, " "));
            },
            getCoordinateString: function getCoordinateString(t) {
              return J(t * l);
            },
            getVerticalCoordinateString: function getVerticalCoordinateString(t) {
              return J((f - t) * l);
            },
            collections: {},
            newObject: tt,
            newAdditionalObject: function newAdditionalObject() {
              var t = 2 * k.length + 1,
                  e = {
                objId: t += L.length,
                content: ""
              };
              return L.push(e), e;
            },
            newObjectDeferred: function newObjectDeferred() {
              return S[++H] = function () {
                return K;
              }, H;
            },
            newObjectDeferredBegin: function newObjectDeferredBegin(t) {
              S[t] = K;
            },
            putStream: et,
            events: j,
            scaleFactor: l,
            pageSize: {
              getWidth: function getWidth() {
                return d;
              },
              getHeight: function getHeight() {
                return f;
              }
            },
            output: function output(t, e) {
              return ft(t, e);
            },
            getNumberOfPages: function getNumberOfPages() {
              return k.length - 1;
            },
            pages: k,
            out: $,
            f2: J,
            getPageInfo: function getPageInfo(t) {
              return {
                objId: 2 * (t - 1) + 3,
                pageNumber: t,
                pageContext: O[t]
              };
            },
            getCurrentPageInfo: function getCurrentPageInfo() {
              return {
                objId: 2 * (h - 1) + 3,
                pageNumber: h,
                pageContext: O[h]
              };
            },
            getPDFVersion: function getPDFVersion() {
              return r;
            },
            hasHotfix: pt
          }, q.addPage = function () {
            return ot.apply(this, arguments), this;
          }, q.setPage = function () {
            return st.apply(this, arguments), this;
          }, q.insertPage = function (t) {
            return this.addPage(), this.movePage(h, t), this;
          }, q.movePage = function (t, e) {
            if (e < t) {
              for (var A = k[t], r = P[t], n = O[t], i = t; e < i; i--) {
                k[i] = k[i - 1], P[i] = P[i - 1], O[i] = O[i - 1];
              }

              k[e] = A, P[e] = r, O[e] = n, this.setPage(e);
            } else if (t < e) {
              for (A = k[t], r = P[t], n = O[t], i = t; i < e; i++) {
                k[i] = k[i + 1], P[i] = P[i + 1], O[i] = O[i + 1];
              }

              k[e] = A, P[e] = r, O[e] = n, this.setPage(e);
            }

            return this;
          }, q.deletePage = function () {
            return function (t) {
              0 < t && t <= N && (k.splice(t, 1), P.splice(t, 1), --N < h && (h = N), this.setPage(h));
            }.apply(this, arguments), this;
          }, q.setCreationDate = function (t) {
            return W(t), this;
          }, q.getCreationDate = function (t) {
            return function (t) {
              var e = w;
              return "jsDate" === t && (e = function (t) {
                var e = parseInt(t.substr(2, 4), 10),
                    A = parseInt(t.substr(6, 2), 10) - 1,
                    r = parseInt(t.substr(8, 2), 10),
                    n = parseInt(t.substr(10, 2), 10),
                    i = parseInt(t.substr(12, 2), 10),
                    o = parseInt(t.substr(14, 2), 10);
                return parseInt(t.substr(16, 2), 10), parseInt(t.substr(20, 2), 10), new Date(e, A, r, n, i, o, 0);
              }(w)), e;
            }(t);
          }, q.setFileId = function (t) {
            return Y(t), this;
          }, q.getFileId = function () {
            return x;
          }, q.setDisplayMode = function (t, e, A) {
            if (g = t, B = e, -1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(p = A)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + A + '" is not recognized.');
            return this;
          }, q.text = function (t, e, A, r) {
            function n(t) {
              for (var e, A = t.concat(), r = [], n = A.length; n--;) {
                "string" == typeof (e = A.shift()) ? r.push(e) : "[object Array]" === Object.prototype.toString.call(t) && 1 === e.length ? r.push(e[0]) : r.push([e[0], e[1], e[2]]);
              }

              return r;
            }

            function i(t, e) {
              var A;
              if ("string" == typeof t) A = e(t)[0];else if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var r, n, i = t.concat(), o = [], a = i.length; a--;) {
                  "string" == typeof (r = i.shift()) ? o.push(e(r)[0]) : "[object Array]" === Object.prototype.toString.call(r) && "string" === r[0] && (n = e(r[0], r[1], r[2]), o.push([n[0], n[1], n[2]]));
                }

                A = o;
              }
              return A;
            }

            var o,
                a,
                s = "",
                l = F,
                u = this;
            "number" == typeof t && (a = A, A = e, e = t, t = a);
            var h = r,
                d = arguments[4],
                f = arguments[5];
            "object" === (void 0 === h ? "undefined" : at(h)) && null !== h || ("string" == typeof d && (f = d, d = null), "string" == typeof h && (f = h, h = null), "number" == typeof h && (d = h, h = null), r = {
              flags: h,
              angle: d,
              align: f
            });
            var p = !1,
                g = !0;
            if ("string" == typeof t) p = !0;else if ("[object Array]" === Object.prototype.toString.call(t)) {
              for (var B, w = t.concat(), m = [], y = w.length; y--;) {
                ("string" != typeof (B = w.shift()) || "[object Array]" === Object.prototype.toString.call(B) && "string" != typeof B[0]) && (g = !1);
              }

              p = g;
            }
            if (!1 === p) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
            var Q = _[c].encoding;
            "WinAnsiEncoding" !== Q && "StandardEncoding" !== Q || (t = i(t, function (t, e, A) {
              return [(n = t, n = n.split("\t").join(Array(r.TabLen || 9).join(" ")), it(n, h)), e, A];
              var n;
            })), "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]), 0 < (z = r.maxWidth || 0) && ("string" == typeof t ? t = u.splitTextToSize(t, z) : "[object Array]" === Object.prototype.toString.call(t) && (t = u.splitTextToSize(t.join(" "), z)));
            var E = {
              text: t,
              x: e,
              y: A,
              options: r,
              mutex: {
                pdfEscape: it,
                activeFontKey: c,
                fonts: _,
                activeFontSize: C
              }
            };
            j.publish("preProcessText", E), t = E.text, d = (r = E.options).angle;
            var x = u.internal.scaleFactor,
                H = (u.internal.pageSize.getHeight(), []);

            if (d) {
              d *= Math.PI / 180;

              var I = Math.cos(d),
                  S = Math.sin(d),
                  T = function T(t) {
                return t.toFixed(2);
              };

              H = [T(I), T(S), T(-1 * S), T(I)];
            }

            void 0 !== (K = r.charSpace) && (s += K + " Tc\n"), r.lang;
            var N = -1,
                k = r.renderingMode || r.stroke,
                O = u.internal.getCurrentPageInfo().pageContext;

            switch (k) {
              case 0:
              case !1:
              case "fill":
                N = 0;
                break;

              case 1:
              case !0:
              case "stroke":
                N = 1;
                break;

              case 2:
              case "fillThenStroke":
                N = 2;
                break;

              case 3:
              case "invisible":
                N = 3;
                break;

              case 4:
              case "fillAndAddForClipping":
                N = 4;
                break;

              case 5:
              case "strokeAndAddPathForClipping":
                N = 5;
                break;

              case 6:
              case "fillThenStrokeAndAddToPathForClipping":
                N = 6;
                break;

              case 7:
              case "addToPathForClipping":
                N = 7;
            }

            var P = O.usedRenderingMode || -1;
            -1 !== N ? s += N + " Tr\n" : -1 !== P && (s += "0 Tr\n"), -1 !== N && (O.usedRenderingMode = N), f = r.align || "left";
            var D = C * l,
                L = u.internal.pageSize.getHeight(),
                R = u.internal.pageSize.getWidth(),
                M = (x = u.internal.scaleFactor, _[c]),
                K = r.charSpace || U,
                z = r.maxWidth || 0,
                q = (h = {}, []);

            if ("[object Array]" === Object.prototype.toString.call(t)) {
              var X, V;
              m = n(t), "left" !== f && (V = m.map(function (t) {
                return u.getStringUnitWidth(t, {
                  font: M,
                  charSpace: K,
                  fontSize: C
                }) * C / x;
              }));
              Math.max.apply(Math, V);
              var G,
                  W = 0;

              if ("right" === f) {
                e -= V[0], t = [];
                var Y = 0;

                for (y = m.length; Y < y; Y++) {
                  V[Y], 0 === Y ? (G = e * x, X = (L - A) * x) : (G = (W - V[Y]) * x, X = -D), t.push([m[Y], G, X]), W = V[Y];
                }
              } else if ("center" === f) for (e -= V[0] / 2, t = [], Y = 0, y = m.length; Y < y; Y++) {
                V[Y], 0 === Y ? (G = e * x, X = (L - A) * x) : (G = (W - V[Y]) / 2 * x, X = -D), t.push([m[Y], G, X]), W = V[Y];
              } else if ("left" === f) for (t = [], Y = 0, y = m.length; Y < y; Y++) {
                X = 0 === Y ? (L - A) * x : -D, G = 0 === Y ? e * x : 0, t.push(m[Y]);
              } else {
                if ("justify" !== f) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');

                for (t = [], z = 0 !== z ? z : R, Y = 0, y = m.length; Y < y; Y++) {
                  X = 0 === Y ? (L - A) * x : -D, G = 0 === Y ? e * x : 0, Y < y - 1 && q.push(((z - V[Y]) / (m[Y].split(" ").length - 1) * x).toFixed(2)), t.push([m[Y], G, X]);
                }
              }
            }

            !0 === ("boolean" == typeof r.R2L ? r.R2L : b) && (t = i(t, function (t, e, A) {
              return [t.split("").reverse().join(""), e, A];
            })), E = {
              text: t,
              x: e,
              y: A,
              options: r,
              mutex: {
                pdfEscape: it,
                activeFontKey: c,
                fonts: _,
                activeFontSize: C
              }
            }, j.publish("postProcessText", E), t = E.text, o = E.mutex.isHex, m = n(t), t = [];
            var J,
                Z,
                tt,
                et = 0,
                At = (y = m.length, "");

            for (Y = 0; Y < y; Y++) {
              At = "", "[object Array]" !== Object.prototype.toString.call(m[Y]) ? (J = parseFloat(e * x).toFixed(2), Z = parseFloat((L - A) * x).toFixed(2), tt = (o ? "<" : "(") + m[Y] + (o ? ">" : ")")) : "[object Array]" === Object.prototype.toString.call(m[Y]) && (J = parseFloat(m[Y][1]).toFixed(2), Z = parseFloat(m[Y][2]).toFixed(2), tt = (o ? "<" : "(") + m[Y][0] + (o ? ">" : ")"), et = 1), void 0 !== q && void 0 !== q[Y] && (At = q[Y] + " Tw\n"), 0 !== H.length && 0 === Y ? t.push(At + H.join(" ") + " " + J + " " + Z + " Tm\n" + tt) : 1 === et || 0 === et && 0 === Y ? t.push(At + J + " " + Z + " Td\n" + tt) : t.push(At + tt);
            }

            t = 0 === et ? t.join(" Tj\nT* ") : t.join(" Tj\n"), t += " Tj\n";
            var rt = "BT\n/" + c + " " + C + " Tf\n" + (C * l).toFixed(2) + " TL\n" + v + "\n";
            return rt += s, rt += t, $(rt += "ET"), u;
          }, q.lstext = function (t, e, A, r) {
            console.warn("jsPDF.lstext is deprecated");

            for (var n = 0, i = t.length; n < i; n++, e += r) {
              this.text(t[n], e, A);
            }

            return this;
          }, q.line = function (t, e, A, r) {
            return this.lines([[A - t, r - e]], t, e);
          }, q.clip = function () {
            $("W"), $("S");
          }, q.clip_fixed = function (t) {
            $("evenodd" === t ? "W*" : "W"), $("n");
          }, q.lines = function (t, e, A, r, n, i) {
            var o, a, s, c, h, d, p, g, B, w, m;

            for ("number" == typeof t && (u = A, A = e, e = t, t = u), r = r || [1, 1], $(Z(e * l) + " " + Z((f - A) * l) + " m "), o = r[0], a = r[1], c = t.length, w = e, m = A, s = 0; s < c; s++) {
              2 === (h = t[s]).length ? (w = h[0] * o + w, m = h[1] * a + m, $(Z(w * l) + " " + Z((f - m) * l) + " l")) : (d = h[0] * o + w, p = h[1] * a + m, g = h[2] * o + w, B = h[3] * a + m, w = h[4] * o + w, m = h[5] * a + m, $(Z(d * l) + " " + Z((f - p) * l) + " " + Z(g * l) + " " + Z((f - B) * l) + " " + Z(w * l) + " " + Z((f - m) * l) + " c"));
            }

            return i && $(" h"), null !== n && $(ut(n)), this;
          }, q.rect = function (t, e, A, r, n) {
            return ut(n), $([J(t * l), J((f - e) * l), J(A * l), J(-r * l), "re"].join(" ")), null !== n && $(ut(n)), this;
          }, q.triangle = function (t, e, A, r, n, i, o) {
            return this.lines([[A - t, r - e], [n - A, i - r], [t - n, e - i]], t, e, [1, 1], o, !0), this;
          }, q.roundedRect = function (t, e, A, r, n, i, o) {
            var a = 4 / 3 * (Math.SQRT2 - 1);
            return this.lines([[A - 2 * n, 0], [n * a, 0, n, i - i * a, n, i], [0, r - 2 * i], [0, i * a, -n * a, i, -n, i], [2 * n - A, 0], [-n * a, 0, -n, -i * a, -n, -i], [0, 2 * i - r], [0, -i * a, n * a, -i, n, -i]], t + n, e, [1, 1], o), this;
          }, q.ellipse = function (t, e, A, r, n) {
            var i = 4 / 3 * (Math.SQRT2 - 1) * A,
                o = 4 / 3 * (Math.SQRT2 - 1) * r;
            return $([J((t + A) * l), J((f - e) * l), "m", J((t + A) * l), J((f - (e - o)) * l), J((t + i) * l), J((f - (e - r)) * l), J(t * l), J((f - (e - r)) * l), "c"].join(" ")), $([J((t - i) * l), J((f - (e - r)) * l), J((t - A) * l), J((f - (e - o)) * l), J((t - A) * l), J((f - e) * l), "c"].join(" ")), $([J((t - A) * l), J((f - (e + o)) * l), J((t - i) * l), J((f - (e + r)) * l), J(t * l), J((f - (e + r)) * l), "c"].join(" ")), $([J((t + i) * l), J((f - (e + r)) * l), J((t + A) * l), J((f - (e + o)) * l), J((t + A) * l), J((f - e) * l), "c"].join(" ")), null !== n && $(ut(n)), this;
          }, q.circle = function (t, e, A, r) {
            return this.ellipse(t, e, A, A, r);
          }, q.setProperties = function (t) {
            for (var e in z) {
              z.hasOwnProperty(e) && t[e] && (z[e] = t[e]);
            }

            return this;
          }, q.setFontSize = function (t) {
            return C = t, this;
          }, q.setFont = function (t, e) {
            return c = ct(t, e), this;
          }, q.setFontStyle = q.setFontType = function (t) {
            return c = ct(void 0, t), this;
          }, q.getFontList = function () {
            var t,
                e,
                A,
                r = {};

            for (t in T) {
              if (T.hasOwnProperty(t)) for (e in r[t] = A = [], T[t]) {
                T[t].hasOwnProperty(e) && A.push(e);
              }
            }

            return r;
          }, q.addFont = function (t, e, A, r) {
            nt(t, e, A, r = r || "Identity-H");
          }, q.setLineWidth = function (t) {
            return $((t * l).toFixed(2) + " w"), this;
          }, q.setDrawColor = function (t, e, A, r) {
            return $(V({
              ch1: t,
              ch2: e,
              ch3: A,
              ch4: r,
              pdfColorType: "draw",
              precision: 2
            })), this;
          }, q.setFillColor = function (t, e, A, r) {
            return $(V({
              ch1: t,
              ch2: e,
              ch3: A,
              ch4: r,
              pdfColorType: "fill",
              precision: 2
            })), this;
          }, q.setTextColor = function (t, e, A, r) {
            return v = V({
              ch1: t,
              ch2: e,
              ch3: A,
              ch4: r,
              pdfColorType: "text",
              precision: 3
            }), this;
          }, q.setCharSpace = function (t) {
            return U = t, this;
          }, q.setR2L = function (t) {
            return b = t, this;
          }, q.CapJoinStyles = {
            0: 0,
            butt: 0,
            but: 0,
            miter: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            bevel: 2
          }, q.setLineCap = function (t) {
            var e = this.CapJoinStyles[t];
            if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return $((R = e) + " J"), this;
          }, q.setLineJoin = function (t) {
            var e = this.CapJoinStyles[t];
            if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return $((M = e) + " j"), this;
          }, q.output = ft, q.save = function (t) {
            q.output("save", t);
          }, A.API) {
            A.API.hasOwnProperty(gt) && ("events" === gt && A.API.events.length ? function (t, e) {
              var A, r, n;

              for (n = e.length - 1; -1 !== n; n--) {
                A = e[n][0], r = e[n][1], t.subscribe.apply(t, [A].concat("function" == typeof r ? [r] : r));
              }
            }(j, A.API.events) : q[gt] = A.API[gt]);
          }

          return function () {
            for (var t = "helvetica", e = "times", A = "courier", r = "normal", n = "bold", i = "italic", o = "bolditalic", a = [["Helvetica", t, r, "WinAnsiEncoding"], ["Helvetica-Bold", t, n, "WinAnsiEncoding"], ["Helvetica-Oblique", t, i, "WinAnsiEncoding"], ["Helvetica-BoldOblique", t, o, "WinAnsiEncoding"], ["Courier", A, r, "WinAnsiEncoding"], ["Courier-Bold", A, n, "WinAnsiEncoding"], ["Courier-Oblique", A, i, "WinAnsiEncoding"], ["Courier-BoldOblique", A, o, "WinAnsiEncoding"], ["Times-Roman", e, r, "WinAnsiEncoding"], ["Times-Bold", e, n, "WinAnsiEncoding"], ["Times-Italic", e, i, "WinAnsiEncoding"], ["Times-BoldItalic", e, o, "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", r, null], ["Symbol", "symbol", r, null]], s = 0, c = a.length; s < c; s++) {
              var l = nt(a[s][0], a[s][1], a[s][2], a[s][3]),
                  u = a[s][0].split("-");
              rt(l, u[0], u[1] || "");
            }

            j.publish("addFonts", {
              fonts: _,
              dictionary: T
            });
          }(), c = "F1", ot(o, e), j.publish("initialized"), q;
        }

        var r = "1.3",
            n = {
          a0: [2383.94, 3370.39],
          a1: [1683.78, 2383.94],
          a2: [1190.55, 1683.78],
          a3: [841.89, 1190.55],
          a4: [595.28, 841.89],
          a5: [419.53, 595.28],
          a6: [297.64, 419.53],
          a7: [209.76, 297.64],
          a8: [147.4, 209.76],
          a9: [104.88, 147.4],
          a10: [73.7, 104.88],
          b0: [2834.65, 4008.19],
          b1: [2004.09, 2834.65],
          b2: [1417.32, 2004.09],
          b3: [1000.63, 1417.32],
          b4: [708.66, 1000.63],
          b5: [498.9, 708.66],
          b6: [354.33, 498.9],
          b7: [249.45, 354.33],
          b8: [175.75, 249.45],
          b9: [124.72, 175.75],
          b10: [87.87, 124.72],
          c0: [2599.37, 3676.54],
          c1: [1836.85, 2599.37],
          c2: [1298.27, 1836.85],
          c3: [918.43, 1298.27],
          c4: [649.13, 918.43],
          c5: [459.21, 649.13],
          c6: [323.15, 459.21],
          c7: [229.61, 323.15],
          c8: [161.57, 229.61],
          c9: [113.39, 161.57],
          c10: [79.37, 113.39],
          dl: [311.81, 623.62],
          letter: [612, 792],
          "government-letter": [576, 756],
          legal: [612, 1008],
          "junior-legal": [576, 360],
          ledger: [1224, 792],
          tabloid: [792, 1224],
          "credit-card": [153, 243]
        };
        return A.API = {
          events: []
        }, A.version = "0.0.0", e.exports ? (e.exports = A, e.exports.jsPDF = A) : t.jsPDF = A, A;
      }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")());

      !function (t, e) {
        var A,
            r,
            n = 1,
            i = function i(t, e) {
          t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
        },
            o = function o(t) {
          return t * (n / 1);
        },
            a = function a(t) {
          var e = new F(),
              A = R.internal.getHeight(t) || 0,
              r = R.internal.getWidth(t) || 0;
          return e.BBox = [0, 0, r.toFixed(2), A.toFixed(2)], e;
        },
            s = function s(t, e, A) {
          t = t || 0;
          var r = 1;
          return r <<= e - 1, 1 == (A = A || 1) ? t |= r : t &= ~r, t;
        },
            c = function c(t, e, A) {
          return A = A || 1.3, t = t || 0, 1 == e.readOnly && (t = s(t, 1)), 1 == e.required && (t = s(t, 2)), 1 == e.noExport && (t = s(t, 3)), 1 == e.multiline && (t = s(t, 13)), e.password && (t = s(t, 14)), e.noToggleToOff && (t = s(t, 15)), e.radio && (t = s(t, 16)), e.pushbutton && (t = s(t, 17)), e.combo && (t = s(t, 18)), e.edit && (t = s(t, 19)), e.sort && (t = s(t, 20)), e.fileSelect && 1.4 <= A && (t = s(t, 21)), e.multiSelect && 1.4 <= A && (t = s(t, 22)), e.doNotSpellCheck && 1.4 <= A && (t = s(t, 23)), 1 == e.doNotScroll && 1.4 <= A && (t = s(t, 24)), e.richText && 1.4 <= A && (t = s(t, 25)), t;
        },
            l = function l(t) {
          var e = t[0],
              A = t[1],
              n = t[2],
              i = t[3],
              a = {};
          return Array.isArray(e) ? (e[0] = o(e[0]), e[1] = o(e[1]), e[2] = o(e[2]), e[3] = o(e[3])) : (e = o(e), A = o(A), n = o(n), i = o(i)), a.lowerLeft_X = e || 0, a.lowerLeft_Y = o(r) - A - i || 0, a.upperRight_X = e + n || 0, a.upperRight_Y = o(r) - A || 0, [a.lowerLeft_X.toFixed(2), a.lowerLeft_Y.toFixed(2), a.upperRight_X.toFixed(2), a.upperRight_Y.toFixed(2)];
        },
            u = function u(t) {
          if (t.appearanceStreamContent) return t.appearanceStreamContent;

          if (t.V || t.DV) {
            var e = [],
                A = t.V || t.DV,
                r = h(t, A);
            e.push("/Tx BMC"), e.push("q"), e.push("/F1 " + r.fontSize.toFixed(2) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push("BT"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
            var n = new a(t);
            return n.stream = e.join("\n"), n;
          }
        },
            h = function h(t, e, A, r) {
          r = r || 12, A = A || "helvetica";
          var n = {
            text: "",
            fontSize: ""
          },
              i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
              o = r,
              a = R.internal.getHeight(t) || 0;
          a = a < 0 ? -a : a;
          var s = R.internal.getWidth(t) || 0;
          s = s < 0 ? -s : s;

          var c = function c(t, e, r) {
            if (t + 1 < i.length) {
              var n = e + " " + i[t + 1];
              return d(n, r + "px", A).width <= s - 4;
            }

            return !1;
          };

          o++;

          t: for (;;) {
            e = "";
            var l = d("3", --o + "px", A).height,
                u = t.multiline ? a - o : (a - l) / 2,
                h = -2,
                f = u += 2,
                p = 0,
                g = 0,
                B = 0;

            if (o <= 0) {
              o = 12, e = "(...) Tj\n", e += "% Width of Text: " + d(e, "1px").width + ", FieldWidth:" + s + "\n";
              break;
            }

            B = d(i[0] + " ", o + "px", A).width;
            var w = "",
                m = 0;

            for (var y in i) {
              w = " " == (w += i[y] + " ").substr(w.length - 1) ? w.substr(0, w.length - 1) : w;
              var v = parseInt(y);
              B = d(w + " ", o + "px", A).width;
              var Q = c(v, w, o),
                  C = y >= i.length - 1;

              if (!Q || C) {
                if (Q || C) {
                  if (C) g = v;else if (t.multiline && a < (l + 2) * (m + 2) + 2) continue t;
                } else {
                  if (!t.multiline) continue t;
                  if (a < (l + 2) * (m + 2) + 2) continue t;
                  g = v;
                }

                for (var U = "", b = p; b <= g; b++) {
                  U += i[b] + " ";
                }

                switch (U = " " == U.substr(U.length - 1) ? U.substr(0, U.length - 1) : U, B = d(U, o + "px", A).width, t.Q) {
                  case 2:
                    h = s - B - 2;
                    break;

                  case 1:
                    h = (s - B) / 2;
                    break;

                  case 0:
                  default:
                    h = 2;
                }

                e += h.toFixed(2) + " " + f.toFixed(2) + " Td\n", e += "(" + U + ") Tj\n", e += -h.toFixed(2) + " 0 Td\n", f = -(o + 2), B = 0, p = g + 1, m++, w = "";
              } else w += " ";
            }

            break;
          }

          return n.text = e, n.fontSize = o, n;
        },
            d = function d(t, e, r) {
          r = r || "helvetica";
          var n = A.internal.getFont(r),
              i = A.getStringUnitWidth(t, {
            font: n,
            fontSize: parseFloat(e),
            charSpace: 0
          }) * parseFloat(e);
          return {
            height: A.getStringUnitWidth("3", {
              font: n,
              fontSize: parseFloat(e),
              charSpace: 0
            }) * parseFloat(e) * 1.5,
            width: i
          };
        },
            f = {
          fields: [],
          xForms: [],
          acroFormDictionaryRoot: null,
          printedOut: !1,
          internal: null,
          isInitialized: !1
        },
            p = function p() {
          for (var t in A.internal.acroformPlugin.acroFormDictionaryRoot.Fields) {
            var e = A.internal.acroformPlugin.acroFormDictionaryRoot.Fields[t];
            e.hasAnnotation && B.call(A, e);
          }
        },
            g = function g(t) {
          A.internal.acroformPlugin.printedOut && (A.internal.acroformPlugin.printedOut = !1, A.internal.acroformPlugin.acroFormDictionaryRoot = null), A.internal.acroformPlugin.acroFormDictionaryRoot || Q.call(A), A.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t);
        },
            B = function B(t) {
          var e = {
            type: "reference",
            object: t
          };
          A.annotationPlugin.annotations[A.internal.getPageInfo(t.page).pageNumber].push(e);
        },
            w = function w() {
          void 0 !== A.internal.acroformPlugin.acroFormDictionaryRoot ? A.internal.write("/AcroForm " + A.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R") : console.log("Root missing...");
        },
            m = function m() {
          A.internal.events.unsubscribe(A.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete A.internal.acroformPlugin.acroFormDictionaryRoot._eventID, A.internal.acroformPlugin.printedOut = !0;
        },
            y = function y(t) {
          var e = !t;
          t || (A.internal.newObjectDeferredBegin(A.internal.acroformPlugin.acroFormDictionaryRoot.objId), A.internal.out(A.internal.acroformPlugin.acroFormDictionaryRoot.getString())), t = t || A.internal.acroformPlugin.acroFormDictionaryRoot.Kids;

          for (var r in t) {
            var n = t[r],
                i = n.Rect;
            n.Rect && (n.Rect = l.call(this, n.Rect)), A.internal.newObjectDeferredBegin(n.objId);
            var o = n.objId + " 0 obj\n<<\n";

            if ("object" === (void 0 === n ? "undefined" : at(n)) && "function" == typeof n.getContent && (o += n.getContent()), n.Rect = i, n.hasAppearanceStream && !n.appearanceStreamContent) {
              var a = u.call(this, n);
              o += "/AP << /N " + a + " >>\n", A.internal.acroformPlugin.xForms.push(a);
            }

            if (n.appearanceStreamContent) {
              for (var s in o += "/AP << ", n.appearanceStreamContent) {
                var c = n.appearanceStreamContent[s];
                if (o += "/" + s + " ", o += "<< ", 1 <= Object.keys(c).length || Array.isArray(c)) for (var r in c) {
                  var h;
                  "function" == typeof (h = c[r]) && (h = h.call(this, n)), o += "/" + r + " " + h + " ", 0 <= A.internal.acroformPlugin.xForms.indexOf(h) || A.internal.acroformPlugin.xForms.push(h);
                } else "function" == typeof (h = c) && (h = h.call(this, n)), o += "/" + r + " " + h + " \n", 0 <= A.internal.acroformPlugin.xForms.indexOf(h) || A.internal.acroformPlugin.xForms.push(h);
                o += " >>\n";
              }

              o += ">>\n";
            }

            o += ">>\nendobj\n", A.internal.out(o);
          }

          e && v.call(this, A.internal.acroformPlugin.xForms);
        },
            v = function v(t) {
          for (var e in t) {
            var r = e,
                n = t[e];
            A.internal.newObjectDeferredBegin(n && n.objId);
            var i = "";
            "object" === (void 0 === n ? "undefined" : at(n)) && "function" == typeof n.getString && (i = n.getString()), A.internal.out(i), delete t[r];
          }
        },
            Q = function Q() {
          if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || !1 === this.internal.acroformPlugin.isInitialized)) {
            if (A = this, x.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(f)), this.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
            n = A.internal.scaleFactor, r = A.internal.pageSize.getHeight(), A.internal.acroformPlugin.acroFormDictionaryRoot = new E(), A.internal.acroformPlugin.acroFormDictionaryRoot._eventID = A.internal.events.subscribe("postPutResources", m), A.internal.events.subscribe("buildDocument", p), A.internal.events.subscribe("putCatalog", w), A.internal.events.subscribe("postPutPages", y), A.internal.acroformPlugin.isInitialized = !0;
          }
        },
            C = function C(t) {
          if (Array.isArray(t)) {
            var e = " [";

            for (var A in t) {
              e += t[A].toString(), e += A < t.length - 1 ? " " : "";
            }

            return e += "]";
          }
        },
            U = function U(t) {
          return 0 !== (t = t || "").indexOf("(") && (t = "(" + t), ")" != t.substring(t.length - 1) && (t += ")"), t;
        },
            b = function b() {
          var t;
          Object.defineProperty(this, "objId", {
            get: function get() {
              return t || (t = A.internal.newObjectDeferred()), t || console.log("Couldn't create Object ID"), t;
            },
            configurable: !1
          });
        };

        b.prototype.toString = function () {
          return this.objId + " 0 R";
        }, b.prototype.getString = function () {
          var t = this.objId + " 0 obj\n<<";
          return t += this.getContent() + ">>\n", this.stream && (t += "stream\n", t += this.stream, t += "\nendstream\n"), t += "endobj\n";
        }, b.prototype.getContent = function () {
          var t = "";
          return t += function (t) {
            var e = "",
                A = Object.keys(t).filter(function (t) {
              return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1);
            });

            for (var r in A) {
              var n = A[r],
                  i = t[n];
              i && (Array.isArray(i) ? e += "/" + n + " " + C(i) + "\n" : e += i instanceof b ? "/" + n + " " + i.objId + " 0 R\n" : "/" + n + " " + i + "\n");
            }

            return e;
          }(this);
        };

        var F = function F() {
          var t;
          b.call(this), this.Type = "/XObject", this.Subtype = "/Form", this.FormType = 1, this.BBox, this.Matrix, this.Resources = "2 0 R", this.PieceInfo, Object.defineProperty(this, "Length", {
            enumerable: !0,
            get: function get() {
              return void 0 !== t ? t.length : 0;
            }
          }), Object.defineProperty(this, "stream", {
            enumerable: !1,
            set: function set(e) {
              t = e.trim();
            },
            get: function get() {
              return t || null;
            }
          });
        };

        i(F, b);

        var E = function E() {
          b.call(this);
          var t = [];
          Object.defineProperty(this, "Kids", {
            enumerable: !1,
            configurable: !0,
            get: function get() {
              return 0 < t.length ? t : void 0;
            }
          }), Object.defineProperty(this, "Fields", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return t;
            }
          }), this.DA;
        };

        i(E, b);

        var x = function t() {
          var e;
          b.call(this), Object.defineProperty(this, "Rect", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              if (e) return e;
            },
            set: function set(t) {
              e = t;
            }
          });
          var A,
              r,
              n,
              i,
              o = "";
          Object.defineProperty(this, "FT", {
            enumerable: !0,
            set: function set(t) {
              o = t;
            },
            get: function get() {
              return o;
            }
          }), Object.defineProperty(this, "T", {
            enumerable: !0,
            configurable: !1,
            set: function set(t) {
              A = t;
            },
            get: function get() {
              if (!A || A.length < 1) {
                if (this instanceof O) return;
                return "(FieldObject" + t.FieldNum++ + ")";
              }

              return "(" == A.substring(0, 1) && A.substring(A.length - 1) ? A : "(" + A + ")";
            }
          }), Object.defineProperty(this, "DA", {
            enumerable: !0,
            get: function get() {
              if (r) return "(" + r + ")";
            },
            set: function set(t) {
              r = t;
            }
          }), Object.defineProperty(this, "DV", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              if (n) return n;
            },
            set: function set(t) {
              n = t;
            }
          }), Object.defineProperty(this, "V", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              if (i) return i;
            },
            set: function set(t) {
              i = t;
            }
          }), Object.defineProperty(this, "Type", {
            enumerable: !0,
            get: function get() {
              return this.hasAnnotation ? "/Annot" : null;
            }
          }), Object.defineProperty(this, "Subtype", {
            enumerable: !0,
            get: function get() {
              return this.hasAnnotation ? "/Widget" : null;
            }
          }), this.BG, Object.defineProperty(this, "hasAnnotation", {
            enumerable: !1,
            get: function get() {
              return !!(this.Rect || this.BC || this.BG);
            }
          }), Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Object.defineProperty(this, "page", {
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
        };

        i(x, b);

        var H = function H() {
          x.call(this), this.FT = "/Ch", this.Opt = [], this.V = "()", this.TI = 0;
          var t = !1;
          Object.defineProperty(this, "combo", {
            enumerable: !1,
            get: function get() {
              return t;
            },
            set: function set(e) {
              t = e;
            }
          }), Object.defineProperty(this, "edit", {
            enumerable: !0,
            set: function set(t) {
              1 == t ? (this._edit = !0, this.combo = !0) : this._edit = !1;
            },
            get: function get() {
              return !!this._edit && this._edit;
            },
            configurable: !1
          }), this.hasAppearanceStream = !0;
        };

        i(H, x);

        var I = function I() {
          H.call(this), this.combo = !1;
        };

        i(I, H);

        var S = function S() {
          I.call(this), this.combo = !0;
        };

        i(S, I);

        var _ = function _() {
          S.call(this), this.edit = !0;
        };

        i(_, S);

        var T = function T() {
          x.call(this), this.FT = "/Btn";
        };

        i(T, x);

        var N = function N() {
          T.call(this);
          var t = !0;
          Object.defineProperty(this, "pushbutton", {
            enumerable: !1,
            get: function get() {
              return t;
            },
            set: function set(e) {
              t = e;
            }
          });
        };

        i(N, T);

        var k = function k() {
          T.call(this);
          var t = !0;
          Object.defineProperty(this, "radio", {
            enumerable: !1,
            get: function get() {
              return t;
            },
            set: function set(e) {
              t = e;
            }
          });
          var e,
              A = [];
          Object.defineProperty(this, "Kids", {
            enumerable: !0,
            get: function get() {
              if (0 < A.length) return A;
            }
          }), Object.defineProperty(this, "__Kids", {
            get: function get() {
              return A;
            }
          }), Object.defineProperty(this, "noToggleToOff", {
            enumerable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = t;
            }
          });
        };

        i(k, T);

        var O = function O(t, e) {
          x.call(this), this.Parent = t, this._AppearanceType = R.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(e), this.F = s(this.F, 3, 1), this.MK = this._AppearanceType.createMK(), this.AS = "/Off", this._Name = e;
        };

        i(O, x), k.prototype.setAppearance = function (t) {
          if ("createAppearanceStream" in t && "createMK" in t) for (var e in this.__Kids) {
            var A = this.__Kids[e];
            A.appearanceStreamContent = t.createAppearanceStream(A._Name), A.MK = t.createMK();
          } else console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
        }, k.prototype.createOption = function (e) {
          this.__Kids.length;
          var A = new O(this, e);
          return this.__Kids.push(A), t.addField(A), A;
        };

        var P = function P() {
          T.call(this), this.appearanceStreamContent = R.CheckBox.createAppearanceStream(), this.MK = R.CheckBox.createMK(), this.AS = "/On", this.V = "/On";
        };

        i(P, T);

        var D = function D() {
          var t, e;
          x.call(this), this.DA = R.createDefaultAppearanceStream(), this.F = 4, Object.defineProperty(this, "V", {
            get: function get() {
              return t ? U(t) : t;
            },
            enumerable: !0,
            set: function set(e) {
              t = e;
            }
          }), Object.defineProperty(this, "DV", {
            get: function get() {
              return e ? U(e) : e;
            },
            enumerable: !0,
            set: function set(t) {
              e = t;
            }
          });
          var A = !1;
          Object.defineProperty(this, "multiline", {
            enumerable: !1,
            get: function get() {
              return A;
            },
            set: function set(t) {
              A = t;
            }
          });
          var r = !1;
          Object.defineProperty(this, "fileSelect", {
            enumerable: !1,
            get: function get() {
              return r;
            },
            set: function set(t) {
              r = t;
            }
          });
          var n = !1;
          Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !1,
            get: function get() {
              return n;
            },
            set: function set(t) {
              n = t;
            }
          });
          var i = !1;
          Object.defineProperty(this, "doNotScroll", {
            enumerable: !1,
            get: function get() {
              return i;
            },
            set: function set(t) {
              i = t;
            }
          });
          var o = !1;
          Object.defineProperty(this, "MaxLen", {
            enumerable: !0,
            get: function get() {
              return o;
            },
            set: function set(t) {
              o = t;
            }
          }), Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !1,
            get: function get() {
              return this.V || this.DV;
            }
          });
        };

        i(D, x);

        var L = function L() {
          D.call(this);
          var t = !0;
          Object.defineProperty(this, "password", {
            enumerable: !1,
            get: function get() {
              return t;
            },
            set: function set(e) {
              t = e;
            }
          });
        };

        i(L, D);
        var R = {
          CheckBox: {
            createAppearanceStream: function createAppearanceStream() {
              return {
                N: {
                  On: R.CheckBox.YesNormal
                },
                D: {
                  On: R.CheckBox.YesPushDown,
                  Off: R.CheckBox.OffPushDown
                }
              };
            },
            createMK: function createMK() {
              return "<< /CA (3)>>";
            },
            YesPushDown: function YesPushDown(t) {
              var e = a(t),
                  r = [],
                  n = A.internal.getFont("zapfdingbats", "normal").id;
              t.Q = 1;
              var i = h(t, "3", "ZapfDingbats", 50);
              return r.push("0.749023 g"), r.push("0 0 " + R.internal.getWidth(t).toFixed(2) + " " + R.internal.getHeight(t).toFixed(2) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + n + " " + i.fontSize.toFixed(2) + " Tf 0 g"), r.push("BT"), r.push(i.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join("\n"), e;
            },
            YesNormal: function YesNormal(t) {
              var e = a(t),
                  r = A.internal.getFont("zapfdingbats", "normal").id,
                  n = [];
              t.Q = 1;
              var i = R.internal.getHeight(t),
                  o = R.internal.getWidth(t),
                  s = h(t, "3", "ZapfDingbats", .9 * i);
              return n.push("1 g"), n.push("0 0 " + o.toFixed(2) + " " + i.toFixed(2) + " re"), n.push("f"), n.push("q"), n.push("0 0 1 rg"), n.push("0 0 " + (o - 1).toFixed(2) + " " + (i - 1).toFixed(2) + " re"), n.push("W"), n.push("n"), n.push("0 g"), n.push("BT"), n.push("/" + r + " " + s.fontSize.toFixed(2) + " Tf 0 g"), n.push(s.text), n.push("ET"), n.push("Q"), e.stream = n.join("\n"), e;
            },
            OffPushDown: function OffPushDown(t) {
              var e = a(t),
                  A = [];
              return A.push("0.749023 g"), A.push("0 0 " + R.internal.getWidth(t).toFixed(2) + " " + R.internal.getHeight(t).toFixed(2) + " re"), A.push("f"), e.stream = A.join("\n"), e;
            }
          },
          RadioButton: {
            Circle: {
              createAppearanceStream: function createAppearanceStream(t) {
                var e = {
                  D: {
                    Off: R.RadioButton.Circle.OffPushDown
                  },
                  N: {}
                };
                return e.N[t] = R.RadioButton.Circle.YesNormal, e.D[t] = R.RadioButton.Circle.YesPushDown, e;
              },
              createMK: function createMK() {
                return "<< /CA (l)>>";
              },
              YesNormal: function YesNormal(t) {
                var e = a(t),
                    A = [],
                    r = R.internal.getWidth(t) <= R.internal.getHeight(t) ? R.internal.getWidth(t) / 4 : R.internal.getHeight(t) / 4;
                r *= .9;
                var n = R.internal.Bezier_C;
                return A.push("q"), A.push("1 0 0 1 " + R.internal.getWidth(t) / 2 + " " + R.internal.getHeight(t) / 2 + " cm"), A.push(r + " 0 m"), A.push(r + " " + r * n + " " + r * n + " " + r + " 0 " + r + " c"), A.push("-" + r * n + " " + r + " -" + r + " " + r * n + " -" + r + " 0 c"), A.push("-" + r + " -" + r * n + " -" + r * n + " -" + r + " 0 -" + r + " c"), A.push(r * n + " -" + r + " " + r + " -" + r * n + " " + r + " 0 c"), A.push("f"), A.push("Q"), e.stream = A.join("\n"), e;
              },
              YesPushDown: function YesPushDown(t) {
                var e = a(t),
                    A = [],
                    r = R.internal.getWidth(t) <= R.internal.getHeight(t) ? R.internal.getWidth(t) / 4 : R.internal.getHeight(t) / 4,
                    n = 2 * (r *= .9),
                    i = n * R.internal.Bezier_C,
                    o = r * R.internal.Bezier_C;
                return A.push("0.749023 g"), A.push("q"), A.push("1 0 0 1 " + (R.internal.getWidth(t) / 2).toFixed(2) + " " + (R.internal.getHeight(t) / 2).toFixed(2) + " cm"), A.push(n + " 0 m"), A.push(n + " " + i + " " + i + " " + n + " 0 " + n + " c"), A.push("-" + i + " " + n + " -" + n + " " + i + " -" + n + " 0 c"), A.push("-" + n + " -" + i + " -" + i + " -" + n + " 0 -" + n + " c"), A.push(i + " -" + n + " " + n + " -" + i + " " + n + " 0 c"), A.push("f"), A.push("Q"), A.push("0 g"), A.push("q"), A.push("1 0 0 1 " + (R.internal.getWidth(t) / 2).toFixed(2) + " " + (R.internal.getHeight(t) / 2).toFixed(2) + " cm"), A.push(r + " 0 m"), A.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), A.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), A.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), A.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), A.push("f"), A.push("Q"), e.stream = A.join("\n"), e;
              },
              OffPushDown: function OffPushDown(t) {
                var e = a(t),
                    A = [],
                    r = R.internal.getWidth(t) <= R.internal.getHeight(t) ? R.internal.getWidth(t) / 4 : R.internal.getHeight(t) / 4,
                    n = 2 * (r *= .9),
                    i = n * R.internal.Bezier_C;
                return A.push("0.749023 g"), A.push("q"), A.push("1 0 0 1 " + (R.internal.getWidth(t) / 2).toFixed(2) + " " + (R.internal.getHeight(t) / 2).toFixed(2) + " cm"), A.push(n + " 0 m"), A.push(n + " " + i + " " + i + " " + n + " 0 " + n + " c"), A.push("-" + i + " " + n + " -" + n + " " + i + " -" + n + " 0 c"), A.push("-" + n + " -" + i + " -" + i + " -" + n + " 0 -" + n + " c"), A.push(i + " -" + n + " " + n + " -" + i + " " + n + " 0 c"), A.push("f"), A.push("Q"), e.stream = A.join("\n"), e;
              }
            },
            Cross: {
              createAppearanceStream: function createAppearanceStream(t) {
                var e = {
                  D: {
                    Off: R.RadioButton.Cross.OffPushDown
                  },
                  N: {}
                };
                return e.N[t] = R.RadioButton.Cross.YesNormal, e.D[t] = R.RadioButton.Cross.YesPushDown, e;
              },
              createMK: function createMK() {
                return "<< /CA (8)>>";
              },
              YesNormal: function YesNormal(t) {
                var e = a(t),
                    A = [],
                    r = R.internal.calculateCross(t);
                return A.push("q"), A.push("1 1 " + (R.internal.getWidth(t) - 2).toFixed(2) + " " + (R.internal.getHeight(t) - 2).toFixed(2) + " re"), A.push("W"), A.push("n"), A.push(r.x1.x.toFixed(2) + " " + r.x1.y.toFixed(2) + " m"), A.push(r.x2.x.toFixed(2) + " " + r.x2.y.toFixed(2) + " l"), A.push(r.x4.x.toFixed(2) + " " + r.x4.y.toFixed(2) + " m"), A.push(r.x3.x.toFixed(2) + " " + r.x3.y.toFixed(2) + " l"), A.push("s"), A.push("Q"), e.stream = A.join("\n"), e;
              },
              YesPushDown: function YesPushDown(t) {
                var e = a(t),
                    A = R.internal.calculateCross(t),
                    r = [];
                return r.push("0.749023 g"), r.push("0 0 " + R.internal.getWidth(t).toFixed(2) + " " + R.internal.getHeight(t).toFixed(2) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + (R.internal.getWidth(t) - 2).toFixed(2) + " " + (R.internal.getHeight(t) - 2).toFixed(2) + " re"), r.push("W"), r.push("n"), r.push(A.x1.x.toFixed(2) + " " + A.x1.y.toFixed(2) + " m"), r.push(A.x2.x.toFixed(2) + " " + A.x2.y.toFixed(2) + " l"), r.push(A.x4.x.toFixed(2) + " " + A.x4.y.toFixed(2) + " m"), r.push(A.x3.x.toFixed(2) + " " + A.x3.y.toFixed(2) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e;
              },
              OffPushDown: function OffPushDown(t) {
                var e = a(t),
                    A = [];
                return A.push("0.749023 g"), A.push("0 0 " + R.internal.getWidth(t).toFixed(2) + " " + R.internal.getHeight(t).toFixed(2) + " re"), A.push("f"), e.stream = A.join("\n"), e;
              }
            }
          },
          createDefaultAppearanceStream: function createDefaultAppearanceStream(t) {
            return "/F1 0 Tf 0 g";
          }
        };
        R.internal = {
          Bezier_C: .551915024494,
          calculateCross: function calculateCross(t) {
            var e,
                A,
                r = R.internal.getWidth(t),
                n = R.internal.getHeight(t),
                i = (A = n) < (e = r) ? A : e;
            return {
              x1: {
                x: (r - i) / 2,
                y: (n - i) / 2 + i
              },
              x2: {
                x: (r - i) / 2 + i,
                y: (n - i) / 2
              },
              x3: {
                x: (r - i) / 2,
                y: (n - i) / 2
              },
              x4: {
                x: (r - i) / 2 + i,
                y: (n - i) / 2 + i
              }
            };
          }
        }, R.internal.getWidth = function (t) {
          var e = 0;
          return "object" === (void 0 === t ? "undefined" : at(t)) && (e = o(t.Rect[2])), e;
        }, R.internal.getHeight = function (t) {
          var e = 0;
          return "object" === (void 0 === t ? "undefined" : at(t)) && (e = o(t.Rect[3])), e;
        }, t.addField = function (t) {
          return Q.call(this), t instanceof D ? this.addTextField.call(this, t) : t instanceof H ? this.addChoiceField.call(this, t) : t instanceof T ? this.addButton.call(this, t) : t instanceof O ? g.call(this, t) : t && g.call(this, t), t.page = A.internal.getCurrentPageInfo().pageNumber, this;
        }, t.addButton = function (t) {
          Q.call(this);
          var e = t || new x();
          e.FT = "/Btn", e.Ff = c(e.Ff, t, A.internal.getPDFVersion()), g.call(this, e);
        }, t.addTextField = function (t) {
          Q.call(this);
          var e = t || new x();
          e.FT = "/Tx", e.Ff = c(e.Ff, t, A.internal.getPDFVersion()), g.call(this, e);
        }, t.addChoiceField = function (t) {
          Q.call(this);
          var e = t || new x();
          e.FT = "/Ch", e.Ff = c(e.Ff, t, A.internal.getPDFVersion()), g.call(this, e);
        }, "object" == (void 0 === e ? "undefined" : at(e)) && (e.ChoiceField = H, e.ListBox = I, e.ComboBox = S, e.EditBox = _, e.Button = T, e.PushButton = N, e.RadioButton = k, e.CheckBox = P, e.TextField = D, e.PasswordField = L, e.AcroForm = {
          Appearance: R
        }), t.AcroFormChoiceField = H, t.AcroFormListBox = I, t.AcroFormComboBox = S, t.AcroFormEditBox = _, t.AcroFormButton = T, t.AcroFormPushButton = N, t.AcroFormRadioButton = k, t.AcroFormCheckBox = P, t.AcroFormTextField = D, t.AcroFormPasswordField = L, t.AcroForm = {
          ChoiceField: H,
          ListBox: I,
          ComboBox: S,
          EditBox: _,
          Button: T,
          PushButton: N,
          RadioButton: k,
          CheckBox: P,
          TextField: D,
          PasswordField: L
        };
      }(st.API, "undefined" != typeof window && window || void 0 !== r && r), st.API.addHTML = function (t, e, A, r, n) {
        if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML) throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
        "number" != typeof e && (r = e, n = A), "function" == typeof r && (n = r, r = null), "function" != typeof n && (n = function n() {});
        var i = this.internal,
            o = i.scaleFactor,
            a = i.pageSize.getWidth(),
            s = i.pageSize.getHeight();
        if ((r = r || {}).onrendered = function (t) {
          e = parseInt(e) || 0, A = parseInt(A) || 0;
          var i = r.dim || {},
              c = Object.assign({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            useFor: "content"
          }, r.margin),
              l = i.h || Math.min(s, t.height / o),
              u = i.w || Math.min(a, t.width / o) - e,
              h = r.format || "JPEG",
              d = r.imageCompression || "SLOW";

          if (t.height > s - c.top - c.bottom && r.pagesplit) {
            var f = function f(t, e, A, n, i) {
              var o = document.createElement("canvas");
              o.height = i, o.width = n;
              var a = o.getContext("2d");
              return a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1, a.imageSmoothingEnabled = !1, a.fillStyle = r.backgroundColor || "#ffffff", a.fillRect(0, 0, n, i), a.drawImage(t, e, A, n, i, 0, 0, n, i), o;
            },
                p = function () {
              for (var r, i, l = 0, p = 0, g = {}, B = !1;;) {
                var w;
                if (p = 0, g.top = 0 !== l ? c.top : A, g.left = 0 !== l ? c.left : e, B = (a - c.left - c.right) * o < t.width, "content" === c.useFor ? 0 === l ? (r = Math.min((a - c.left) * o, t.width), i = Math.min((s - c.top) * o, t.height - l)) : (r = Math.min(a * o, t.width), i = Math.min(s * o, t.height - l), g.top = 0) : (r = Math.min((a - c.left - c.right) * o, t.width), i = Math.min((s - c.bottom - c.top) * o, t.height - l)), B) for (;;) {
                  "content" === c.useFor && (0 === p ? r = Math.min((a - c.left) * o, t.width) : (r = Math.min(a * o, t.width - p), g.left = 0));
                  var m = [w = f(t, p, l, r, i), g.left, g.top, w.width / o, w.height / o, h, null, d];
                  if (this.addImage.apply(this, m), (p += r) >= t.width) break;
                  this.addPage();
                } else m = [w = f(t, 0, l, r, i), g.left, g.top, w.width / o, w.height / o, h, null, d], this.addImage.apply(this, m);
                if ((l += i) >= t.height) break;
                this.addPage();
              }

              n(u, l, null, m);
            }.bind(this);

            if ("CANVAS" === t.nodeName) {
              var g = new Image();
              g.onload = p, g.src = t.toDataURL("image/png"), t = g;
            } else p();
          } else {
            var B = Math.random().toString(35),
                w = [t, e, A, u, l, h, B, d];
            this.addImage.apply(this, w), n(u, l, B, w);
          }
        }.bind(this), "undefined" != typeof html2canvas && !r.rstz) return html2canvas(t, r);

        if ("undefined" != typeof rasterizeHTML) {
          var c = "drawDocument";
          return "string" == typeof t && (c = /^http/.test(t) ? "drawURL" : "drawHTML"), r.width = r.width || a * o, rasterizeHTML[c](t, void 0, r).then(function (t) {
            r.onrendered(t.image);
          }, function (t) {
            n(null, t);
          });
        }

        return null;
      }, function (t) {
        var e = "addImage_",
            A = {
          PNG: [[137, 80, 78, 71]],
          TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]],
          JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]],
          JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
          GIF87a: [[71, 73, 70, 56, 55, 97]],
          GIF89a: [[71, 73, 70, 56, 57, 97]],
          BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]]
        };

        t.getImageFileTypeByImageData = function (t, e) {
          var r, n;
          e = e || "UNKNOWN";
          var i,
              o,
              a,
              s = "UNKNOWN";

          for (a in A) {
            for (i = A[a], r = 0; r < i.length; r += 1) {
              for (o = !0, n = 0; n < i[r].length; n += 1) {
                if (void 0 !== i[r][n] && i[r][n] !== t.charCodeAt(n)) {
                  o = !1;
                  break;
                }
              }

              if (!0 === o) {
                s = a;
                break;
              }
            }
          }

          return "UNKOWN" === s && "UNKNOWN" !== e && (console.warn('FileType of Image not recognized. Processing image as "' + e + '".'), s = e), s;
        };

        var r = function t(e) {
          var A = this.internal.newObject(),
              r = this.internal.write,
              n = this.internal.putStream;

          if (e.n = A, r("<</Type /XObject"), r("/Subtype /Image"), r("/Width " + e.w), r("/Height " + e.h), e.cs === this.color_spaces.INDEXED ? r("/ColorSpace [/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + ("smask" in e ? A + 2 : A + 1) + " 0 R]") : (r("/ColorSpace /" + e.cs), e.cs === this.color_spaces.DEVICE_CMYK && r("/Decode [1 0 1 0 1 0 1 0]")), r("/BitsPerComponent " + e.bpc), "f" in e && r("/Filter /" + e.f), "dp" in e && r("/DecodeParms <<" + e.dp + ">>"), "trns" in e && e.trns.constructor == Array) {
            for (var i = "", o = 0, a = e.trns.length; o < a; o++) {
              i += e.trns[o] + " " + e.trns[o] + " ";
            }

            r("/Mask [" + i + "]");
          }

          if ("smask" in e && r("/SMask " + (A + 1) + " 0 R"), r("/Length " + e.data.length + ">>"), n(e.data), r("endobj"), "smask" in e) {
            var s = "/Predictor " + e.p + " /Colors 1 /BitsPerComponent " + e.bpc + " /Columns " + e.w,
                c = {
              w: e.w,
              h: e.h,
              cs: "DeviceGray",
              bpc: e.bpc,
              dp: s,
              data: e.smask
            };
            "f" in e && (c.f = e.f), t.call(this, c);
          }

          e.cs === this.color_spaces.INDEXED && (this.internal.newObject(), r("<< /Length " + e.pal.length + ">>"), n(this.arrayBufferToBinaryString(new Uint8Array(e.pal))), r("endobj"));
        },
            n = function n() {
          var t = this.internal.collections[e + "images"];

          for (var A in t) {
            r.call(this, t[A]);
          }
        },
            i = function i() {
          var t,
              A = this.internal.collections[e + "images"],
              r = this.internal.write;

          for (var n in A) {
            r("/I" + (t = A[n]).i, t.n, "0", "R");
          }
        },
            o = function o(e) {
          return "function" == typeof t["process" + e.toUpperCase()];
        },
            a = function a(t) {
          return "object" === (void 0 === t ? "undefined" : at(t)) && 1 === t.nodeType;
        },
            s = function s(t, e) {
          if ("IMG" === t.nodeName && t.hasAttribute("src")) {
            var A = "" + t.getAttribute("src");
            if (0 === A.indexOf("data:image/")) return A;
            !e && /\.png(?:[?#].*)?$/i.test(A) && (e = "png");
          }

          if ("CANVAS" === t.nodeName) var r = t;else {
            (r = document.createElement("canvas")).width = t.clientWidth || t.width, r.height = t.clientHeight || t.height;
            var n = r.getContext("2d");
            if (!n) throw "addImage requires canvas to be supported by browser.";
            n.drawImage(t, 0, 0, r.width, r.height);
          }
          return r.toDataURL("png" == ("" + e).toLowerCase() ? "image/png" : "image/jpeg");
        },
            c = function c(t, e) {
          var A;
          if (e) for (var r in e) {
            if (t === e[r].alias) {
              A = e[r];
              break;
            }
          }
          return A;
        };

        t.color_spaces = {
          DEVICE_RGB: "DeviceRGB",
          DEVICE_GRAY: "DeviceGray",
          DEVICE_CMYK: "DeviceCMYK",
          CAL_GREY: "CalGray",
          CAL_RGB: "CalRGB",
          LAB: "Lab",
          ICC_BASED: "ICCBased",
          INDEXED: "Indexed",
          PATTERN: "Pattern",
          SEPARATION: "Separation",
          DEVICE_N: "DeviceN"
        }, t.decode = {
          DCT_DECODE: "DCTDecode",
          FLATE_DECODE: "FlateDecode",
          LZW_DECODE: "LZWDecode",
          JPX_DECODE: "JPXDecode",
          JBIG2_DECODE: "JBIG2Decode",
          ASCII85_DECODE: "ASCII85Decode",
          ASCII_HEX_DECODE: "ASCIIHexDecode",
          RUN_LENGTH_DECODE: "RunLengthDecode",
          CCITT_FAX_DECODE: "CCITTFaxDecode"
        }, t.image_compression = {
          NONE: "NONE",
          FAST: "FAST",
          MEDIUM: "MEDIUM",
          SLOW: "SLOW"
        }, t.sHashCode = function (t) {
          return t = t || "", Array.prototype.reduce && t.split("").reduce(function (t, e) {
            return (t = (t << 5) - t + e.charCodeAt(0)) & t;
          }, 0);
        }, t.isString = function (t) {
          return "string" == typeof t;
        }, t.validateStringAsBase64 = function (t) {
          var e = !0;
          return (t = t || "").length % 4 != 0 && (e = !1), !1 === /[A-Za-z0-9\/]+/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==/.test(t.substr(-2)) && (e = !1), e;
        }, t.extractInfoFromBase64DataURI = function (t) {
          return /^data:([\w]+?\/([\w]+?));base64,(.+)$/g.exec(t);
        }, t.supportsArrayBuffer = function () {
          return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
        }, t.isArrayBuffer = function (t) {
          return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer;
        }, t.isArrayBufferView = function (t) {
          return !!this.supportsArrayBuffer() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array);
        }, t.binaryStringToUint8Array = function (t) {
          for (var e = t.length, A = new Uint8Array(e), r = 0; r < e; r++) {
            A[r] = t.charCodeAt(r);
          }

          return A;
        }, t.arrayBufferToBinaryString = function (t) {
          if ("function" == typeof atob) return atob(this.arrayBufferToBase64(t));

          if ("function" == typeof TextDecoder) {
            var e = new TextDecoder("ascii");
            if ("ascii" === e.encoding) return e.decode(t);
          }

          for (var A = this.isArrayBuffer(t) ? t : new Uint8Array(t), r = 20480, n = "", i = Math.ceil(A.byteLength / r), o = 0; o < i; o++) {
            n += String.fromCharCode.apply(null, A.slice(o * r, o * r + r));
          }

          return n;
        }, t.arrayBufferToBase64 = function (t) {
          for (var e, A = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(t), i = n.byteLength, o = i % 3, a = i - o, s = 0; s < a; s += 3) {
            A += r[(16515072 & (e = n[s] << 16 | n[s + 1] << 8 | n[s + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
          }

          return 1 == o ? A += r[(252 & (e = n[a])) >> 2] + r[(3 & e) << 4] + "==" : 2 == o && (A += r[(64512 & (e = n[a] << 8 | n[a + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="), A;
        }, t.createImageInfo = function (t, e, A, r, n, i, o, a, s, c, l, u, h) {
          var d = {
            alias: a,
            w: e,
            h: A,
            cs: r,
            bpc: n,
            i: o,
            data: t
          };
          return i && (d.f = i), s && (d.dp = s), c && (d.trns = c), l && (d.pal = l), u && (d.smask = u), h && (d.p = h), d;
        }, t.addImage = function (A, r, l, u, h, d, f, p, g) {
          var B = "";

          if ("string" != typeof r) {
            var w = d;
            d = h, h = u, u = l, l = r, r = w;
          }

          if ("object" === (void 0 === A ? "undefined" : at(A)) && !a(A) && "imageData" in A) {
            var m = A;
            A = m.imageData, r = m.format || r, l = m.x || l || 0, u = m.y || u || 0, h = m.w || h, d = m.h || d, f = m.alias || f, p = m.compression || p, g = m.rotation || m.angle || g;
          }

          if (isNaN(l) || isNaN(u)) throw console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage");

          var y,
              v,
              Q,
              C,
              U,
              b,
              F,
              E = function () {
            var t = this.internal.collections[e + "images"];
            return t || (this.internal.collections[e + "images"] = t = {}, this.internal.events.subscribe("putResources", n), this.internal.events.subscribe("putXobjectDict", i)), t;
          }.call(this);

          if (!((y = c(A, E)) || (a(A) && (A = s(A, r)), (null == (F = f) || 0 === F.length) && (f = "string" == typeof (b = A) && t.sHashCode(b)), y = c(f, E)))) {
            if (this.isString(A) && ("" !== (B = this.convertStringToImageData(A)) ? A = B : void 0 !== (B = this.loadImageFile(A)) && (A = B)), r = this.getImageFileTypeByImageData(A, r), !o(r)) throw new Error("addImage does not support files of type '" + r + "', please ensure that a plugin for '" + r + "' support is added.");
            if (this.supportsArrayBuffer() && (A instanceof Uint8Array || (v = A, A = this.binaryStringToUint8Array(A))), !(y = this["process" + r.toUpperCase()](A, (U = 0, (C = E) && (U = Object.keys ? Object.keys(C).length : function (t) {
              var e = 0;

              for (var A in t) {
                t.hasOwnProperty(A) && e++;
              }

              return e;
            }(C)), U), f, ((Q = p) && "string" == typeof Q && (Q = Q.toUpperCase()), Q in t.image_compression ? Q : t.image_compression.NONE), v))) throw new Error("An unkwown error occurred whilst processing the image");
          }

          return function (t, e, A, r, n, i, o, a) {
            var s = function (t, e, A) {
              return t || e || (e = t = -96), t < 0 && (t = -1 * A.w * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * A.h * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * A.w / A.h), 0 === e && (e = t * A.h / A.w), [t, e];
            }.call(this, A, r, n),
                c = this.internal.getCoordinateString,
                l = this.internal.getVerticalCoordinateString;

            if (A = s[0], r = s[1], o[i] = n, a) {
              a *= Math.PI / 180;

              var u = Math.cos(a),
                  h = Math.sin(a),
                  d = function d(t) {
                return t.toFixed(4);
              },
                  f = [d(u), d(h), d(-1 * h), d(u), 0, 0, "cm"];
            }

            this.internal.write("q"), a ? (this.internal.write([1, "0", "0", 1, c(t), l(e + r), "cm"].join(" ")), this.internal.write(f.join(" ")), this.internal.write([c(A), "0", "0", c(r), "0", "0", "cm"].join(" "))) : this.internal.write([c(A), "0", "0", c(r), c(t), l(e + r), "cm"].join(" ")), this.internal.write("/I" + n.i + " Do"), this.internal.write("Q");
          }.call(this, l, u, h, d, y, y.i, E, g), this;
        }, t.convertStringToImageData = function (e) {
          var A,
              r = "";
          return this.isString(e) && (null !== (A = this.extractInfoFromBase64DataURI(e)) ? t.validateStringAsBase64(A[3]) && (r = atob(A[3])) : t.validateStringAsBase64(e) && (r = atob(e))), r;
        };

        var l = function l(t, e) {
          return t.subarray(e, e + 5);
        };

        t.processJPEG = function (t, e, A, r, n, i) {
          var o,
              a = this.decode.DCT_DECODE;
          if (!this.isString(t) && !this.isArrayBuffer(t) && !this.isArrayBufferView(t)) return null;
          if (this.isString(t) && (o = function (t) {
            var e;
            if (255 === !t.charCodeAt(0) || 216 === !t.charCodeAt(1) || 255 === !t.charCodeAt(2) || 224 === !t.charCodeAt(3) || !t.charCodeAt(6) === "J".charCodeAt(0) || !t.charCodeAt(7) === "F".charCodeAt(0) || !t.charCodeAt(8) === "I".charCodeAt(0) || !t.charCodeAt(9) === "F".charCodeAt(0) || 0 === !t.charCodeAt(10)) throw new Error("getJpegSize requires a binary string jpeg file");

            for (var A = 256 * t.charCodeAt(4) + t.charCodeAt(5), r = 4, n = t.length; r < n;) {
              if (r += A, 255 !== t.charCodeAt(r)) throw new Error("getJpegSize could not find the size of the image");
              if (192 === t.charCodeAt(r + 1) || 193 === t.charCodeAt(r + 1) || 194 === t.charCodeAt(r + 1) || 195 === t.charCodeAt(r + 1) || 196 === t.charCodeAt(r + 1) || 197 === t.charCodeAt(r + 1) || 198 === t.charCodeAt(r + 1) || 199 === t.charCodeAt(r + 1)) return e = 256 * t.charCodeAt(r + 5) + t.charCodeAt(r + 6), [256 * t.charCodeAt(r + 7) + t.charCodeAt(r + 8), e, t.charCodeAt(r + 9)];
              r += 2, A = 256 * t.charCodeAt(r) + t.charCodeAt(r + 1);
            }
          }(t)), this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t) && (o = function (t) {
            if (65496 != (t[0] << 8 | t[1])) throw new Error("Supplied data is not a JPEG");

            for (var e, A = t.length, r = (t[4] << 8) + t[5], n = 4; n < A;) {
              if (r = ((e = l(t, n += r))[2] << 8) + e[3], (192 === e[1] || 194 === e[1]) && 255 === e[0] && 7 < r) return {
                width: ((e = l(t, n + 5))[2] << 8) + e[3],
                height: (e[0] << 8) + e[1],
                numcomponents: e[4]
              };
              n += 2;
            }

            throw new Error("getJpegSizeFromBytes could not find the size of the image");
          }(t), t = n || this.arrayBufferToBinaryString(t)), void 0 === i) switch (o.numcomponents) {
            case 1:
              i = this.color_spaces.DEVICE_GRAY;
              break;

            case 4:
              i = this.color_spaces.DEVICE_CMYK;
              break;

            default:
            case 3:
              i = this.color_spaces.DEVICE_RGB;
          }
          return this.createImageInfo(t, o.width, o.height, i, 8, a, e, A);
        }, t.processJPG = function () {
          return this.processJPEG.apply(this, arguments);
        }, t.loadImageFile = function (t, e, A) {
          if (e = e || !0, A = A || function () {}, Object.prototype.toString.call("undefined" != typeof process ? process : 0), void 0 !== ("undefined" == typeof window ? "undefined" : at(window)) && "object" === ("undefined" == typeof location ? "undefined" : at(location)) && "http" === location.protocol.substr(0, 4)) return function (t, e, A) {
            var r = new XMLHttpRequest(),
                n = [],
                i = 0,
                o = function o(t) {
              var e = t.length,
                  A = String.fromCharCode;

              for (i = 0; i < e; i += 1) {
                n.push(A(255 & t.charCodeAt(i)));
              }

              return n.join("");
            };

            if (r.open("GET", t, !e), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (r.onload = function () {
              return o(this.responseText);
            }), r.send(null), 200 === r.status) return e ? o(r.responseText) : void 0;
            console.warn('Unable to load file "' + t + '"');
          }(t, e);
        }, t.getImageProperties = function (t) {
          var e,
              A,
              r = "";
          if (a(t) && (t = s(t)), this.isString(t) && ("" !== (r = this.convertStringToImageData(t)) ? t = r : void 0 !== (r = this.loadImageFile(t)) && (t = r)), A = this.getImageFileTypeByImageData(t), !o(A)) throw new Error("addImage does not support files of type '" + A + "', please ensure that a plugin for '" + A + "' support is added.");
          if (this.supportsArrayBuffer() && (t instanceof Uint8Array || (t = this.binaryStringToUint8Array(t))), !(e = this["process" + A.toUpperCase()](t))) throw new Error("An unkwown error occurred whilst processing the image");
          return {
            fileType: A,
            width: e.w,
            height: e.h,
            colorSpace: e.cs,
            compressionMode: e.f,
            bitsPerComponent: e.bpc
          };
        };
      }(st.API), s = st.API, c = {
        annotations: [],
        f2: function f2(t) {
          return t.toFixed(2);
        },
        notEmpty: function notEmpty(t) {
          if (void 0 !== t && "" != t) return !0;
        }
      }, st.API.annotationPlugin = c, st.API.events.push(["addPage", function (t) {
        this.annotationPlugin.annotations[t.pageNumber] = [];
      }]), s.events.push(["putPage", function (t) {
        for (var e = this.annotationPlugin.annotations[t.pageNumber], A = !1, r = 0; r < e.length && !A; r++) {
          switch ((s = e[r]).type) {
            case "link":
              if (c.notEmpty(s.options.url) || c.notEmpty(s.options.pageNumber)) {
                A = !0;
                break;
              }

            case "reference":
            case "text":
            case "freetext":
              A = !0;
          }
        }

        if (0 != A) {
          this.internal.write("/Annots [");
          var n = this.annotationPlugin.f2,
              i = this.internal.scaleFactor,
              o = this.internal.pageSize.getHeight(),
              a = this.internal.getPageInfo(t.pageNumber);

          for (r = 0; r < e.length; r++) {
            var s;

            switch ((s = e[r]).type) {
              case "reference":
                this.internal.write(" " + s.object.objId + " 0 R ");
                break;

              case "text":
                var l = this.internal.newAdditionalObject(),
                    u = this.internal.newAdditionalObject(),
                    h = s.title || "Note";
                B = "<</Type /Annot /Subtype /Text " + (f = "/Rect [" + n(s.bounds.x * i) + " " + n(o - (s.bounds.y + s.bounds.h) * i) + " " + n((s.bounds.x + s.bounds.w) * i) + " " + n((o - s.bounds.y) * i) + "] ") + "/Contents (" + s.contents + ")", B += " /Popup " + u.objId + " 0 R", B += " /P " + a.objId + " 0 R", B += " /T (" + h + ") >>", l.content = B;
                var d = l.objId + " 0 R";
                B = "<</Type /Annot /Subtype /Popup " + (f = "/Rect [" + n((s.bounds.x + 30) * i) + " " + n(o - (s.bounds.y + s.bounds.h) * i) + " " + n((s.bounds.x + s.bounds.w + 30) * i) + " " + n((o - s.bounds.y) * i) + "] ") + " /Parent " + d, s.open && (B += " /Open true"), B += " >>", u.content = B, this.internal.write(l.objId, "0 R", u.objId, "0 R");
                break;

              case "freetext":
                var f = "/Rect [" + n(s.bounds.x * i) + " " + n((o - s.bounds.y) * i) + " " + n(s.bounds.x + s.bounds.w * i) + " " + n(o - (s.bounds.y + s.bounds.h) * i) + "] ",
                    p = s.color || "#000000";
                B = "<</Type /Annot /Subtype /FreeText " + f + "/Contents (" + s.contents + ")", B += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + p + ")", B += " /Border [0 0 0]", B += " >>", this.internal.write(B);
                break;

              case "link":
                if (s.options.name) {
                  var g = this.annotations._nameMap[s.options.name];
                  s.options.pageNumber = g.page, s.options.top = g.y;
                } else s.options.top || (s.options.top = 0);

                f = "/Rect [" + n(s.x * i) + " " + n((o - s.y) * i) + " " + n((s.x + s.w) * i) + " " + n((o - (s.y + s.h)) * i) + "] ";
                var B = "";
                if (s.options.url) B = "<</Type /Annot /Subtype /Link " + f + "/Border [0 0 0] /A <</S /URI /URI (" + s.options.url + ") >>";else if (s.options.pageNumber) switch (B = "<</Type /Annot /Subtype /Link " + f + "/Border [0 0 0] /Dest [" + (t = this.internal.getPageInfo(s.options.pageNumber)).objId + " 0 R", s.options.magFactor = s.options.magFactor || "XYZ", s.options.magFactor) {
                  case "Fit":
                    B += " /Fit]";
                    break;

                  case "FitH":
                    B += " /FitH " + s.options.top + "]";
                    break;

                  case "FitV":
                    s.options.left = s.options.left || 0, B += " /FitV " + s.options.left + "]";
                    break;

                  case "XYZ":
                  default:
                    var w = n((o - s.options.top) * i);
                    s.options.left = s.options.left || 0, void 0 === s.options.zoom && (s.options.zoom = 0), B += " /XYZ " + s.options.left + " " + w + " " + s.options.zoom + "]";
                }
                "" != B && (B += " >>", this.internal.write(B));
            }
          }

          this.internal.write("]");
        }
      }]), s.createAnnotation = function (t) {
        switch (t.type) {
          case "link":
            this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
            break;

          case "text":
          case "freetext":
            this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t);
        }
      }, s.link = function (t, e, A, r, n) {
        this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({
          x: t,
          y: e,
          w: A,
          h: r,
          options: n,
          type: "link"
        });
      }, s.textWithLink = function (t, e, A, r) {
        var n = this.getTextWidth(t),
            i = this.internal.getLineHeight() / this.internal.scaleFactor;
        return this.text(t, e, A), A += .2 * i, this.link(e, A - i, n, i, r), n;
      }, s.getTextWidth = function (t) {
        var e = this.internal.getFontSize();
        return this.getStringUnitWidth(t) * e / this.internal.scaleFactor;
      }, s.getLineHeight = function () {
        return this.internal.getLineHeight();
      }, function (t) {
        function e(t) {
          return void 0 !== t && void 0 !== a[t.charCodeAt(0)];
        }

        function A(t) {
          return void 0 !== t && 0 <= h.indexOf(t.charCodeAt(0));
        }

        function r(t) {
          return void 0 !== t && 0 <= u.indexOf(t.charCodeAt(0));
        }

        function n(t) {
          return e(t) && 2 <= a[t.charCodeAt(0)].length;
        }

        function i(t, i, o, s) {
          return e(t) ? (s = s || {}, a = Object.assign(a, s), !n(t) || !e(i) && !e(o) || !e(o) && A(i) || A(t) && !e(i) || A(t) && r(i) || A(t) && A(i) ? (a = Object.assign(a, c), d) : e(l = t) && 4 == a[l.charCodeAt(0)].length && e(i) && !A(i) && e(o) && n(o) ? (a = Object.assign(a, c), g) : A(t) || !e(o) ? (a = Object.assign(a, c), f) : (a = Object.assign(a, c), p)) : -1;
          var l;
        }

        var o = Object.keys({
          ar: "Arabic (Standard)",
          "ar-DZ": "Arabic (Algeria)",
          "ar-BH": "Arabic (Bahrain)",
          "ar-EG": "Arabic (Egypt)",
          "ar-IQ": "Arabic (Iraq)",
          "ar-JO": "Arabic (Jordan)",
          "ar-KW": "Arabic (Kuwait)",
          "ar-LB": "Arabic (Lebanon)",
          "ar-LY": "Arabic (Libya)",
          "ar-MA": "Arabic (Morocco)",
          "ar-OM": "Arabic (Oman)",
          "ar-QA": "Arabic (Qatar)",
          "ar-SA": "Arabic (Saudi Arabia)",
          "ar-SY": "Arabic (Syria)",
          "ar-TN": "Arabic (Tunisia)",
          "ar-AE": "Arabic (U.A.E.)",
          "ar-YE": "Arabic (Yemen)",
          fa: "Persian",
          "fa-IR": "Persian/Iran",
          ur: "Urdu"
        }),
            a = {
          1569: [65152],
          1570: [65153, 65154, 65153, 65154],
          1571: [65155, 65156, 65155, 65156],
          1572: [65157, 65158],
          1573: [65159, 65160, 65159, 65160],
          1574: [65161, 65162, 65163, 65164],
          1575: [65165, 65166, 65165, 65166],
          1576: [65167, 65168, 65169, 65170],
          1577: [65171, 65172],
          1578: [65173, 65174, 65175, 65176],
          1579: [65177, 65178, 65179, 65180],
          1580: [65181, 65182, 65183, 65184],
          1581: [65185, 65186, 65187, 65188],
          1582: [65189, 65190, 65191, 65192],
          1583: [65193, 65194, 65193],
          1584: [65195, 65196, 65195],
          1585: [65197, 65198, 65197],
          1586: [65199, 65200, 65199],
          1587: [65201, 65202, 65203, 65204],
          1588: [65205, 65206, 65207, 65208],
          1589: [65209, 65210, 65211, 65212],
          1590: [65213, 65214, 65215, 65216],
          1591: [65217, 65218, 65219, 65220],
          1592: [65221, 65222, 65223, 65224],
          1593: [65225, 65226, 65227, 65228],
          1594: [65229, 65230, 65231, 65232],
          1601: [65233, 65234, 65235, 65236],
          1602: [65237, 65238, 65239, 65240],
          1603: [65241, 65242, 65243, 65244],
          1604: [65245, 65246, 65247, 65248],
          1605: [65249, 65250, 65251, 65252],
          1606: [65253, 65254, 65255, 65256],
          1607: [65257, 65258, 65259, 65260],
          1608: [65261, 65262, 65261],
          1609: [65263, 65264, 64488, 64489],
          1610: [65265, 65266, 65267, 65268],
          1649: [64336, 64337],
          1655: [64477],
          1657: [64358, 64359, 64360, 64361],
          1658: [64350, 64351, 64352, 64353],
          1659: [64338, 64339, 64340, 64341],
          1662: [64342, 64343, 64344, 64345],
          1663: [64354, 64355, 64356, 64357],
          1664: [64346, 64347, 64348, 64349],
          1667: [64374, 64375, 64376, 64377],
          1668: [64370, 64371, 64372, 64373],
          1670: [64378, 64379, 64380, 64381],
          1671: [64382, 64383, 64384, 64385],
          1672: [64392, 64393],
          1676: [64388, 64389],
          1677: [64386, 64387],
          1678: [64390, 64391],
          1681: [64396, 64397],
          1688: [64394, 64395, 64394],
          1700: [64362, 64363, 64364, 64365],
          1702: [64366, 64367, 64368, 64369],
          1705: [64398, 64399, 64400, 64401],
          1709: [64467, 64468, 64469, 64470],
          1711: [64402, 64403, 64404, 64405],
          1713: [64410, 64411, 64412, 64413],
          1715: [64406, 64407, 64408, 64409],
          1722: [64414, 64415],
          1723: [64416, 64417, 64418, 64419],
          1726: [64426, 64427, 64428, 64429],
          1728: [64420, 64421],
          1729: [64422, 64423, 64424, 64425],
          1733: [64480, 64481],
          1734: [64473, 64474],
          1735: [64471, 64472],
          1736: [64475, 64476],
          1737: [64482, 64483],
          1739: [64478, 64479],
          1740: [64508, 64509, 64510, 64511],
          1744: [64484, 64485, 64486, 64487],
          1746: [64430, 64431],
          1747: [64432, 64433]
        },
            s = {
          1570: [65269, 65270, 65269, 65270],
          1571: [65271, 65272, 65271, 65272],
          1573: [65273, 65274, 65273, 65274],
          1575: [65275, 65276, 65275, 65276]
        },
            c = {
          1570: [65153, 65154, 65153, 65154],
          1571: [65155, 65156, 65155, 65156],
          1573: [65159, 65160, 65159, 65160],
          1575: [65165, 65166, 65165, 65166]
        },
            l = {
          1612: 64606,
          1613: 64607,
          1614: 64608,
          1615: 64609,
          1616: 64610
        },
            u = [1570, 1571, 1573, 1575],
            h = [1569, 1570, 1571, 1572, 1573, 1575, 1577, 1583, 1584, 1585, 1586, 1608, 1688],
            d = 0,
            f = 1,
            p = 2,
            g = 3,
            B = t.processArabic = function (t, A) {
          t = t || "", A = A || !1;
          var n,
              o,
              u,
              h = "",
              d = 0,
              f = 0,
              p = "",
              g = "",
              B = "";

          for (d = 0; d < t.length; d += 1) {
            p = t[d], g = t[d - 1], B = t[d + 1], e(p) ? void 0 !== g && 1604 === g.charCodeAt(0) && r(p) ? (f = i(p, t[d - 2], t[d + 1], s), n = String.fromCharCode(s[p.charCodeAt(0)][f]), h = h.substr(0, h.length - 1) + n) : void 0 !== g && 1617 === g.charCodeAt(0) && void 0 !== (o = p) && void 0 !== l[o.charCodeAt(0)] ? (f = i(p, t[d - 2], t[d + 1], c), n = String.fromCharCode(l[p.charCodeAt(0)][f]), h = h.substr(0, h.length - 1) + n) : (f = i(p, g, B, c), h += String.fromCharCode(a[p.charCodeAt(0)][f])) : h += A ? {
              "(": ")",
              ")": "("
            }[u = p] || u : p;
          }

          return A ? h.split("").reverse().join("") : h;
        };

        t.events.push(["preProcessText", function (t) {
          var e = t.text,
              A = (t.x, t.y, t.options || {}),
              r = (t.mutex, A.lang),
              n = [];

          if (0 <= o.indexOf(r)) {
            if ("[object Array]" === Object.prototype.toString.call(e)) {
              var i = 0;

              for (n = [], i = 0; i < e.length; i += 1) {
                "[object Array]" === Object.prototype.toString.call(e[i]) ? n.push([B(e[i][0], !0), e[i][1], e[i][2]]) : n.push([B(e[i], !0)]);
              }

              t.text = n;
            } else t.text = B(e, !0);

            void 0 === A.charSpace && (t.options.charSpace = 0), !0 === A.R2L && (t.options.R2L = !1);
          }
        }]);
      }(st.API), st.API.autoPrint = function (t) {
        var e;

        switch ((t = t || {}).variant = t.variant || "non-conform", t.variant) {
          case "javascript":
            this.addJS("print({});");
            break;

          case "non-conform":
          default:
            this.internal.events.subscribe("postPutResources", function () {
              e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
            }), this.internal.events.subscribe("putCatalog", function () {
              this.internal.out("/OpenAction " + e + " 0 R");
            });
        }

        return this;
      }, (l = st.API).events.push(["initialized", function () {
        this.canvas.pdf = this;
      }]), l.canvas = {
        getContext: function getContext(t) {
          return (this.pdf.context2d._canvas = this).pdf.context2d;
        },
        childNodes: []
      }, Object.defineProperty(l.canvas, "width", {
        get: function get() {
          return this._width;
        },
        set: function set(t) {
          this._width = t, this.getContext("2d").pageWrapX = t + 1;
        }
      }), Object.defineProperty(l.canvas, "height", {
        get: function get() {
          return this._height;
        },
        set: function set(t) {
          this._height = t, this.getContext("2d").pageWrapY = t + 1;
        }
      }), u = st.API, g = {
        x: void 0,
        y: void 0,
        w: void 0,
        h: void 0,
        ln: void 0
      }, B = 1, w = function w(t, e, A, r, n) {
        g = {
          x: t,
          y: e,
          w: A,
          h: r,
          ln: n
        };
      }, m = function m() {
        return g;
      }, y = {
        left: 0,
        top: 0,
        bottom: 0
      }, u.setHeaderFunction = function (t) {
        p = t;
      }, u.getTextDimensions = function (t) {
        h = this.internal.getFont().fontName, d = this.table_font_size || this.internal.getFontSize(), f = this.internal.getFont().fontStyle;
        var e,
            A,
            r = 19.049976 / 25.4;
        (A = document.createElement("font")).id = "jsPDFCell";

        try {
          A.style.fontStyle = f;
        } catch (e) {
          A.style.fontWeight = f;
        }

        A.style.fontSize = d + "pt", A.style.fontFamily = h;

        try {
          A.textContent = t;
        } catch (e) {
          A.innerText = t;
        }

        return document.body.appendChild(A), e = {
          w: (A.offsetWidth + 1) * r,
          h: (A.offsetHeight + 1) * r
        }, document.body.removeChild(A), e;
      }, u.cellAddPage = function () {
        var t = this.margins || y;
        this.addPage(), w(t.left, t.top, void 0, void 0), B += 1;
      }, u.cellInitialize = function () {
        g = {
          x: void 0,
          y: void 0,
          w: void 0,
          h: void 0,
          ln: void 0
        }, B = 1;
      }, u.cell = function (t, e, A, r, n, i, o) {
        var a = m(),
            s = !1;
        if (void 0 !== a.ln) if (a.ln === i) t = a.x + a.w, e = a.y;else {
          var c = this.margins || y;
          a.y + a.h + r + 13 >= this.internal.pageSize.getHeight() - c.bottom && (this.cellAddPage(), s = !0, this.printHeaders && this.tableHeaderRow && this.printHeaderRow(i, !0)), e = m().y + m().h, s && (e = 23);
        }
        if (void 0 !== n[0]) if (this.printingHeaderRow ? this.rect(t, e, A, r, "FD") : this.rect(t, e, A, r), "right" === o) {
          n instanceof Array || (n = [n]);

          for (var l = 0; l < n.length; l++) {
            var u = n[l],
                h = this.getStringUnitWidth(u) * this.internal.getFontSize();
            this.text(u, t + A - h - 3, e + this.internal.getLineHeight() * (l + 1));
          }
        } else this.text(n, t + 3, e + this.internal.getLineHeight());
        return w(t, e, A, r, i), this;
      }, u.arrayMax = function (t, e) {
        var A,
            r,
            n,
            i = t[0];

        for (A = 0, r = t.length; A < r; A += 1) {
          n = t[A], e ? -1 === e(i, n) && (i = n) : i < n && (i = n);
        }

        return i;
      }, u.table = function (t, e, A, r, n) {
        if (!A) throw "No data for PDF table";
        var i,
            o,
            a,
            s,
            c,
            l,
            h,
            d,
            f,
            p,
            w = [],
            m = [],
            v = {},
            Q = {},
            C = [],
            U = [],
            b = !1,
            F = !0,
            E = 12,
            x = y;
        if (x.width = this.internal.pageSize.getWidth(), n && (!0 === n.autoSize && (b = !0), !1 === n.printHeaders && (F = !1), n.fontSize && (E = n.fontSize), n.css && void 0 !== n.css["font-size"] && (E = 16 * n.css["font-size"]), n.margins && (x = n.margins)), this.lnMod = 0, g = {
          x: void 0,
          y: void 0,
          w: void 0,
          h: void 0,
          ln: void 0
        }, B = 1, this.printHeaders = F, this.margins = x, this.setFontSize(E), this.table_font_size = E, null == r) w = Object.keys(A[0]);else if (r[0] && "string" != typeof r[0]) for (o = 0, a = r.length; o < a; o += 1) {
          i = r[o], w.push(i.name), m.push(i.prompt), Q[i.name] = i.width * (19.049976 / 25.4);
        } else w = r;
        if (b) for (p = function p(t) {
          return t[i];
        }, o = 0, a = w.length; o < a; o += 1) {
          for (v[i = w[o]] = A.map(p), C.push(this.getTextDimensions(m[o] || i).w), h = 0, s = (l = v[i]).length; h < s; h += 1) {
            c = l[h], C.push(this.getTextDimensions(c).w);
          }

          Q[i] = u.arrayMax(C), C = [];
        }

        if (F) {
          var H = this.calculateLineHeight(w, Q, m.length ? m : w);

          for (o = 0, a = w.length; o < a; o += 1) {
            i = w[o], U.push([t, e, Q[i], H, String(m.length ? m[o] : i)]);
          }

          this.setTableHeaderRow(U), this.printHeaderRow(1, !1);
        }

        for (o = 0, a = A.length; o < a; o += 1) {
          for (d = A[o], H = this.calculateLineHeight(w, Q, d), h = 0, f = w.length; h < f; h += 1) {
            i = w[h], this.cell(t, e, Q[i], H, d[i], o + 2, i.align);
          }
        }

        return this.lastCellPos = g, this.table_x = t, this.table_y = e, this;
      }, u.calculateLineHeight = function (t, e, A) {
        for (var r, n = 0, i = 0; i < t.length; i++) {
          A[r = t[i]] = this.splitTextToSize(String(A[r]), e[r] - 3);
          var o = this.internal.getLineHeight() * A[r].length + 3;
          n < o && (n = o);
        }

        return n;
      }, u.setTableHeaderRow = function (t) {
        this.tableHeaderRow = t;
      }, u.printHeaderRow = function (t, e) {
        if (!this.tableHeaderRow) throw "Property tableHeaderRow does not exist.";
        var A, r, n, i;

        if (this.printingHeaderRow = !0, void 0 !== p) {
          var o = p(this, B);
          w(o[0], o[1], o[2], o[3], -1);
        }

        this.setFontStyle("bold");
        var a = [];

        for (n = 0, i = this.tableHeaderRow.length; n < i; n += 1) {
          this.setFillColor(200, 200, 200), A = this.tableHeaderRow[n], e && (this.margins.top = 13, A[1] = this.margins && this.margins.top || 0, a.push(A)), r = [].concat(A), this.cell.apply(this, r.concat(t));
        }

        0 < a.length && this.setTableHeaderRow(a), this.setFontStyle("normal"), this.printingHeaderRow = !1;
      }, function (t) {
        function e() {
          this._isStrokeTransparent = !1, this._strokeOpacity = 1, this.strokeStyle = "#000000", this.fillStyle = "#000000", this._isFillTransparent = !1, this._fillOpacity = 1, this.font = "12pt times", this.textBaseline = "alphabetic", this.textAlign = "start", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this._transform = [1, 0, 0, 1, 0, 0], this.globalCompositeOperation = "normal", this.globalAlpha = 1, this._clip_path = [], this.ignoreClearRect = !1, this.copy = function (t) {
            this._isStrokeTransparent = t._isStrokeTransparent, this._strokeOpacity = t._strokeOpacity, this.strokeStyle = t.strokeStyle, this._isFillTransparent = t._isFillTransparent, this._fillOpacity = t._fillOpacity, this.fillStyle = t.fillStyle, this.font = t.font, this.lineWidth = t.lineWidth, this.lineJoin = t.lineJoin, this.lineCap = t.lineCap, this.textBaseline = t.textBaseline, this.textAlign = t.textAlign, this._fontSize = t._fontSize, this._transform = t._transform.slice(0), this.globalCompositeOperation = t.globalCompositeOperation, this.globalAlpha = t.globalAlpha, this._clip_path = t._clip_path.slice(0), this.ignoreClearRect = t.ignoreClearRect;
          };
        }

        t.events.push(["initialized", function () {
          ((this.context2d.pdf = this).context2d.internal.pdf = this).context2d.ctx = new e(), this.context2d.ctxStack = [], this.context2d.path = [];
        }]), t.context2d = {
          pageWrapXEnabled: !1,
          pageWrapYEnabled: !1,
          pageWrapX: 9999999,
          pageWrapY: 9999999,
          ctx: new e(),
          f2: function f2(t) {
            return t.toFixed(2);
          },
          fillRect: function fillRect(t, e, A, r) {
            if (!this._isFillTransparent()) {
              t = this._wrapX(t), e = this._wrapY(e);

              var n = this._matrix_map_rect(this.ctx._transform, {
                x: t,
                y: e,
                w: A,
                h: r
              });

              this.pdf.rect(n.x, n.y, n.w, n.h, "f");
            }
          },
          strokeRect: function strokeRect(t, e, A, r) {
            if (!this._isStrokeTransparent()) {
              t = this._wrapX(t), e = this._wrapY(e);

              var n = this._matrix_map_rect(this.ctx._transform, {
                x: t,
                y: e,
                w: A,
                h: r
              });

              this.pdf.rect(n.x, n.y, n.w, n.h, "s");
            }
          },
          clearRect: function clearRect(t, e, A, r) {
            if (!this.ctx.ignoreClearRect) {
              t = this._wrapX(t), e = this._wrapY(e);

              var n = this._matrix_map_rect(this.ctx._transform, {
                x: t,
                y: e,
                w: A,
                h: r
              });

              this.save(), this.setFillStyle("#ffffff"), this.pdf.rect(n.x, n.y, n.w, n.h, "f"), this.restore();
            }
          },
          save: function save() {
            this.ctx._fontSize = this.pdf.internal.getFontSize();
            var t = new e();
            t.copy(this.ctx), this.ctxStack.push(this.ctx), this.ctx = t;
          },
          restore: function restore() {
            this.ctx = this.ctxStack.pop(), this.setFillStyle(this.ctx.fillStyle), this.setStrokeStyle(this.ctx.strokeStyle), this.setFont(this.ctx.font), this.pdf.setFontSize(this.ctx._fontSize), this.setLineCap(this.ctx.lineCap), this.setLineWidth(this.ctx.lineWidth), this.setLineJoin(this.ctx.lineJoin);
          },
          rect: function rect(t, e, A, r) {
            this.moveTo(t, e), this.lineTo(t + A, e), this.lineTo(t + A, e + r), this.lineTo(t, e + r), this.lineTo(t, e), this.closePath();
          },
          beginPath: function beginPath() {
            this.path = [];
          },
          closePath: function closePath() {
            this.path.push({
              type: "close"
            });
          },
          _getRGBA: function _getRGBA(t) {
            var e,
                A,
                r,
                n,
                i = new RGBColor(t);
            if (!t) return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              style: t
            };
            if (this.internal.rxTransparent.test(t)) n = r = A = e = 0;else {
              var o = this.internal.rxRgb.exec(t);
              null != o ? (e = parseInt(o[1]), A = parseInt(o[2]), r = parseInt(o[3]), n = 1) : null != (o = this.internal.rxRgba.exec(t)) ? (e = parseInt(o[1]), A = parseInt(o[2]), r = parseInt(o[3]), n = parseFloat(o[4])) : (n = 1, "#" != t.charAt(0) && (t = i.ok ? i.toHex() : "#000000"), 4 === t.length ? (e = t.substring(1, 2), e += e, A = t.substring(2, 3), A += A, r = t.substring(3, 4), r += r) : (e = t.substring(1, 3), A = t.substring(3, 5), r = t.substring(5, 7)), e = parseInt(e, 16), A = parseInt(A, 16), r = parseInt(r, 16));
            }
            return {
              r: e,
              g: A,
              b: r,
              a: n,
              style: t
            };
          },
          setFillStyle: function setFillStyle(t) {
            var e = this._getRGBA(t);

            this.ctx.fillStyle = t, this.ctx._isFillTransparent = 0 === e.a, this.ctx._fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, {
              a: e.a
            }), this.pdf.setTextColor(e.r, e.g, e.b, {
              a: e.a
            });
          },
          setStrokeStyle: function setStrokeStyle(t) {
            var e = this._getRGBA(t);

            this.ctx.strokeStyle = e.style, this.ctx._isStrokeTransparent = 0 === e.a, this.ctx._strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
          },
          fillText: function fillText(t, e, A, r) {
            if (!this._isFillTransparent()) {
              e = this._wrapX(e), A = this._wrapY(A);

              var n = this._matrix_map_point(this.ctx._transform, [e, A]);

              e = n[0], A = n[1];

              var i = 57.2958 * this._matrix_rotation(this.ctx._transform);

              if (0 < this.ctx._clip_path.length) {
                var o;
                (o = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
                var a = this.path;
                this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(null, !0), this.ctx._clip_path = this.path, this.path = a;
              }

              var s = 1;

              try {
                s = this._matrix_decompose(this._getTransform()).scale[0];
              } catch (t) {
                console.warn(t);
              }

              if (s < .01) this.pdf.text(t, e, this._getBaseline(A), null, i);else {
                var c = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(c * s), this.pdf.text(t, e, this._getBaseline(A), null, i), this.pdf.setFontSize(c);
              }
              0 < this.ctx._clip_path.length && o.push("Q");
            }
          },
          strokeText: function strokeText(t, e, A, r) {
            if (!this._isStrokeTransparent()) {
              e = this._wrapX(e), A = this._wrapY(A);

              var n = this._matrix_map_point(this.ctx._transform, [e, A]);

              e = n[0], A = n[1];

              var i = 57.2958 * this._matrix_rotation(this.ctx._transform);

              if (0 < this.ctx._clip_path.length) {
                var o;
                (o = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
                var a = this.path;
                this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(null, !0), this.ctx._clip_path = this.path, this.path = a;
              }

              var s = 1;

              try {
                s = this._matrix_decompose(this._getTransform()).scale[0];
              } catch (t) {
                console.warn(t);
              }

              if (1 === s) this.pdf.text(t, e, this._getBaseline(A), {
                stroke: !0
              }, i);else {
                var c = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(c * s), this.pdf.text(t, e, this._getBaseline(A), {
                  stroke: !0
                }, i), this.pdf.setFontSize(c);
              }
              0 < this.ctx._clip_path.length && o.push("Q");
            }
          },
          setFont: function setFont(t) {
            if (this.ctx.font = t, null != (c = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/.exec(t))) {
              var e = c[1],
                  A = (c[2], c[3]),
                  r = c[4],
                  n = c[5],
                  i = c[6];
              r = "px" === n ? Math.floor(parseFloat(r)) : "em" === n ? Math.floor(parseFloat(r) * this.pdf.getFontSize()) : Math.floor(parseFloat(r)), this.pdf.setFontSize(r), "bold" === A || "700" === A ? this.pdf.setFontStyle("bold") : "italic" === e ? this.pdf.setFontStyle("italic") : this.pdf.setFontStyle("normal"), l = "bold" === A || "700" === A ? "italic" === e ? "bolditalic" : "bold" : "italic" === e ? "italic" : "normal";

              for (var o = i.toLowerCase().split(/\s*,\s*/), a = "Times", s = 0; s < o.length; s++) {
                if (void 0 !== this.pdf.internal.getFont(o[s], l, {
                  noFallback: !0,
                  disableWarning: !0
                })) {
                  a = o[s];
                  break;
                }

                if ("bolditalic" === l && void 0 !== this.pdf.internal.getFont(o[s], "bold", {
                  noFallback: !0,
                  disableWarning: !0
                })) a = o[s], l = "bold";else if (void 0 !== this.pdf.internal.getFont(o[s], "normal", {
                  noFallback: !0,
                  disableWarning: !0
                })) {
                  a = o[s], l = "normal";
                  break;
                }
              }

              this.pdf.setFont(a, l);
            } else {
              var c = /\s*(\d+)(pt|px|em)\s+([\w "]+)\s*([\w "]+)?/.exec(t);

              if (null != c) {
                var l,
                    u = c[1],
                    h = (c[2], c[3]);
                (l = c[4]) || (l = "normal"), u = "em" === n ? Math.floor(parseFloat(r) * this.pdf.getFontSize()) : Math.floor(parseFloat(u)), this.pdf.setFontSize(u), this.pdf.setFont(h, l);
              }
            }
          },
          setTextBaseline: function setTextBaseline(t) {
            this.ctx.textBaseline = t;
          },
          getTextBaseline: function getTextBaseline() {
            return this.ctx.textBaseline;
          },
          setTextAlign: function setTextAlign(t) {
            this.ctx.textAlign = t;
          },
          getTextAlign: function getTextAlign() {
            return this.ctx.textAlign;
          },
          setLineWidth: function setLineWidth(t) {
            this.ctx.lineWidth = t, this.pdf.setLineWidth(t);
          },
          setLineCap: function setLineCap(t) {
            this.ctx.lineCap = t, this.pdf.setLineCap(t);
          },
          setLineJoin: function setLineJoin(t) {
            this.ctx.lineJoin = t, this.pdf.setLineJoin(t);
          },
          moveTo: function moveTo(t, e) {
            t = this._wrapX(t), e = this._wrapY(e);

            var A = this._matrix_map_point(this.ctx._transform, [t, e]),
                r = {
              type: "mt",
              x: t = A[0],
              y: e = A[1]
            };

            this.path.push(r);
          },
          _wrapX: function _wrapX(t) {
            return this.pageWrapXEnabled ? t % this.pageWrapX : t;
          },
          _wrapY: function _wrapY(t) {
            return this.pageWrapYEnabled ? (this._gotoPage(this._page(t)), (t - this.lastBreak) % this.pageWrapY) : t;
          },
          transform: function transform(t, e, A, r, n, i) {
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, [t, e, A, r, n, i]);
          },
          setTransform: function setTransform(t, e, A, r, n, i) {
            this.ctx._transform = [t, e, A, r, n, i];
          },
          _getTransform: function _getTransform() {
            return this.ctx._transform;
          },
          lastBreak: 0,
          pageBreaks: [],
          _page: function _page(t) {
            if (this.pageWrapYEnabled) {
              for (var e = this.lastBreak = 0, A = 0, r = 0; r < this.pageBreaks.length; r++) {
                if (t >= this.pageBreaks[r]) {
                  e++, 0 === this.lastBreak && A++;
                  var n = this.pageBreaks[r] - this.lastBreak;
                  this.lastBreak = this.pageBreaks[r], A += Math.floor(n / this.pageWrapY);
                }
              }

              return 0 === this.lastBreak && (A += Math.floor(t / this.pageWrapY) + 1), A + e;
            }

            return this.pdf.internal.getCurrentPageInfo().pageNumber;
          },
          _gotoPage: function _gotoPage(t) {},
          lineTo: function lineTo(t, e) {
            t = this._wrapX(t), e = this._wrapY(e);

            var A = this._matrix_map_point(this.ctx._transform, [t, e]),
                r = {
              type: "lt",
              x: t = A[0],
              y: e = A[1]
            };

            this.path.push(r);
          },
          bezierCurveTo: function bezierCurveTo(t, e, A, r, n, i) {
            var o;
            t = this._wrapX(t), e = this._wrapY(e), A = this._wrapX(A), r = this._wrapY(r), n = this._wrapX(n), i = this._wrapY(i), n = (o = this._matrix_map_point(this.ctx._transform, [n, i]))[0], i = o[1];
            var a = {
              type: "bct",
              x1: t = (o = this._matrix_map_point(this.ctx._transform, [t, e]))[0],
              y1: e = o[1],
              x2: A = (o = this._matrix_map_point(this.ctx._transform, [A, r]))[0],
              y2: r = o[1],
              x: n,
              y: i
            };
            this.path.push(a);
          },
          quadraticCurveTo: function quadraticCurveTo(t, e, A, r) {
            var n;
            t = this._wrapX(t), e = this._wrapY(e), A = this._wrapX(A), r = this._wrapY(r), A = (n = this._matrix_map_point(this.ctx._transform, [A, r]))[0], r = n[1];
            var i = {
              type: "qct",
              x1: t = (n = this._matrix_map_point(this.ctx._transform, [t, e]))[0],
              y1: e = n[1],
              x: A,
              y: r
            };
            this.path.push(i);
          },
          arc: function arc(t, e, A, r, n, i) {
            if (t = this._wrapX(t), e = this._wrapY(e), !this._matrix_is_identity(this.ctx._transform)) {
              var o = this._matrix_map_point(this.ctx._transform, [t, e]);

              t = o[0], e = o[1];

              var a = this._matrix_map_point(this.ctx._transform, [0, 0]),
                  s = this._matrix_map_point(this.ctx._transform, [0, A]);

              A = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2));
            }

            var c = {
              type: "arc",
              x: t,
              y: e,
              radius: A,
              startAngle: r,
              endAngle: n,
              anticlockwise: i
            };
            this.path.push(c);
          },
          drawImage: function drawImage(t, e, A, r, n, i, o, a, s) {
            void 0 !== i && (e = i, A = o, r = a, n = s), e = this._wrapX(e), A = this._wrapY(A);

            var c,
                l = this._matrix_map_rect(this.ctx._transform, {
              x: e,
              y: A,
              w: r,
              h: n
            }),
                u = (this._matrix_map_rect(this.ctx._transform, {
              x: i,
              y: o,
              w: a,
              h: s
            }), /data:image\/(\w+).*/i.exec(t));

            c = null != u ? u[1] : "png", this.pdf.addImage(t, c, l.x, l.y, l.w, l.h);
          },
          _matrix_multiply: function _matrix_multiply(t, e) {
            var A = e[0],
                r = e[1],
                n = e[2],
                i = e[3],
                o = e[4],
                a = e[5],
                s = A * t[0] + r * t[2],
                c = n * t[0] + i * t[2],
                l = o * t[0] + a * t[2] + t[4];
            return r = A * t[1] + r * t[3], i = n * t[1] + i * t[3], a = o * t[1] + a * t[3] + t[5], [A = s, r, n = c, i, o = l, a];
          },
          _matrix_rotation: function _matrix_rotation(t) {
            return Math.atan2(t[2], t[0]);
          },
          _matrix_decompose: function _matrix_decompose(t) {
            var e = t[0],
                A = t[1],
                r = t[2],
                n = t[3],
                i = Math.sqrt(e * e + A * A),
                o = (e /= i) * r + (A /= i) * n;
            r -= e * o, n -= A * o;
            var a = Math.sqrt(r * r + n * n);
            return o /= a, e * (n /= a) < A * (r /= a) && (e = -e, A = -A, o = -o, i = -i), {
              scale: [i, 0, 0, a, 0, 0],
              translate: [1, 0, 0, 1, t[4], t[5]],
              rotate: [e, A, -A, e, 0, 0],
              skew: [1, 0, o, 1, 0, 0]
            };
          },
          _matrix_map_point: function _matrix_map_point(t, e) {
            var A = t[0],
                r = t[1],
                n = t[2],
                i = t[3],
                o = t[4],
                a = t[5],
                s = e[0],
                c = e[1];
            return [s * A + c * n + o, s * r + c * i + a];
          },
          _matrix_map_point_obj: function _matrix_map_point_obj(t, e) {
            var A = this._matrix_map_point(t, [e.x, e.y]);

            return {
              x: A[0],
              y: A[1]
            };
          },
          _matrix_map_rect: function _matrix_map_rect(t, e) {
            var A = this._matrix_map_point(t, [e.x, e.y]),
                r = this._matrix_map_point(t, [e.x + e.w, e.y + e.h]);

            return {
              x: A[0],
              y: A[1],
              w: r[0] - A[0],
              h: r[1] - A[1]
            };
          },
          _matrix_is_identity: function _matrix_is_identity(t) {
            return 1 == t[0] && 0 == t[1] && 0 == t[2] && 1 == t[3] && 0 == t[4] && 0 == t[5];
          },
          rotate: function rotate(t) {
            var e = [Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, e);
          },
          scale: function scale(t, e) {
            var A = [t, 0, 0, e, 0, 0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, A);
          },
          translate: function translate(t, e) {
            var A = [1, 0, 0, 1, t, e];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, A);
          },
          stroke: function stroke() {
            if (0 < this.ctx._clip_path.length) {
              var t;
              (t = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
              var e = this.path;
              this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._stroke(!0), this.ctx._clip_path = this.path, this.path = e, this._stroke(!1), t.push("Q");
            } else this._stroke(!1);
          },
          _stroke: function _stroke(t) {
            if (t || !this._isStrokeTransparent()) {
              for (var e = [], A = this.path, r = 0; r < A.length; r++) {
                var n = A[r];

                switch (n.type) {
                  case "mt":
                    e.push({
                      start: n,
                      deltas: [],
                      abs: []
                    });
                    break;

                  case "lt":
                    var i = [n.x - A[r - 1].x, n.y - A[r - 1].y];
                    e[e.length - 1].deltas.push(i), e[e.length - 1].abs.push(n);
                    break;

                  case "bct":
                    i = [n.x1 - A[r - 1].x, n.y1 - A[r - 1].y, n.x2 - A[r - 1].x, n.y2 - A[r - 1].y, n.x - A[r - 1].x, n.y - A[r - 1].y], e[e.length - 1].deltas.push(i);
                    break;

                  case "qct":
                    var o = A[r - 1].x + 2 / 3 * (n.x1 - A[r - 1].x),
                        a = A[r - 1].y + 2 / 3 * (n.y1 - A[r - 1].y),
                        s = n.x + 2 / 3 * (n.x1 - n.x),
                        c = n.y + 2 / 3 * (n.y1 - n.y),
                        l = n.x,
                        u = n.y;
                    i = [o - A[r - 1].x, a - A[r - 1].y, s - A[r - 1].x, c - A[r - 1].y, l - A[r - 1].x, u - A[r - 1].y], e[e.length - 1].deltas.push(i);
                    break;

                  case "arc":
                    0 == e.length && e.push({
                      start: {
                        x: 0,
                        y: 0
                      },
                      deltas: [],
                      abs: []
                    }), e[e.length - 1].arc = !0, Array.isArray(e[e.length - 1].abs) && e[e.length - 1].abs.push(n);
                }
              }

              for (r = 0; r < e.length; r++) {
                var h;
                if (h = r == e.length - 1 ? "s" : null, e[r].arc) for (var d = e[r].abs, f = 0; f < d.length; f++) {
                  var p = d[f],
                      g = 360 * p.startAngle / (2 * Math.PI),
                      B = 360 * p.endAngle / (2 * Math.PI),
                      w = p.x,
                      m = p.y;
                  this.internal.arc2(this, w, m, p.radius, g, B, p.anticlockwise, h, t);
                } else w = e[r].start.x, m = e[r].start.y, t ? (this.pdf.lines(e[r].deltas, w, m, null, null), this.pdf.clip_fixed()) : this.pdf.lines(e[r].deltas, w, m, null, h);
              }
            }
          },
          _isFillTransparent: function _isFillTransparent() {
            return this.ctx._isFillTransparent || 0 == this.globalAlpha;
          },
          _isStrokeTransparent: function _isStrokeTransparent() {
            return this.ctx._isStrokeTransparent || 0 == this.globalAlpha;
          },
          fill: function fill(t) {
            if (0 < this.ctx._clip_path.length) {
              var e;
              (e = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
              var A = this.path;
              this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(t, !0), this.ctx._clip_path = this.path, this.path = A, this._fill(t, !1), e.push("Q");
            } else this._fill(t, !1);
          },
          _fill: function _fill(t, e) {
            if (!this._isFillTransparent()) {
              var r,
                  n = "function" == typeof this.pdf.internal.newObject2;
              r = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage();
              var i = [],
                  o = window.outIntercept;
              if (n) switch (this.ctx.globalCompositeOperation) {
                case "normal":
                case "source-over":
                  break;

                case "destination-in":
                case "destination-out":
                  var a = this.pdf.internal.newStreamObject(),
                      s = this.pdf.internal.newObject2();
                  s.push("<</Type /ExtGState"), s.push("/SMask <</S /Alpha /G " + a.objId + " 0 R>>"), s.push(">>");
                  var c = "MASK" + s.objId;
                  this.pdf.internal.addGraphicsState(c, s.objId);
                  var l = "/" + c + " gs";
                  r.splice(0, 0, "q"), r.splice(1, 0, l), r.push("Q"), window.outIntercept = a;
                  break;

                default:
                  var u = "/" + this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];
                  u && this.pdf.internal.out(u + " gs");
              }
              var h = this.ctx.globalAlpha;

              if (this.ctx._fillOpacity < 1 && (h = this.ctx._fillOpacity), n) {
                var d = this.pdf.internal.newObject2();
                d.push("<</Type /ExtGState"), d.push("/CA " + h), d.push("/ca " + h), d.push(">>"), c = "GS_O_" + d.objId, this.pdf.internal.addGraphicsState(c, d.objId), this.pdf.internal.out("/" + c + " gs");
              }

              for (var f = this.path, p = 0; p < f.length; p++) {
                var g = f[p];

                switch (g.type) {
                  case "mt":
                    i.push({
                      start: g,
                      deltas: [],
                      abs: []
                    });
                    break;

                  case "lt":
                    var B = [g.x - f[p - 1].x, g.y - f[p - 1].y];
                    i[i.length - 1].deltas.push(B), i[i.length - 1].abs.push(g);
                    break;

                  case "bct":
                    B = [g.x1 - f[p - 1].x, g.y1 - f[p - 1].y, g.x2 - f[p - 1].x, g.y2 - f[p - 1].y, g.x - f[p - 1].x, g.y - f[p - 1].y], i[i.length - 1].deltas.push(B);
                    break;

                  case "qct":
                    var w = f[p - 1].x + 2 / 3 * (g.x1 - f[p - 1].x),
                        m = f[p - 1].y + 2 / 3 * (g.y1 - f[p - 1].y),
                        y = g.x + 2 / 3 * (g.x1 - g.x),
                        v = g.y + 2 / 3 * (g.y1 - g.y),
                        Q = g.x,
                        C = g.y;
                    B = [w - f[p - 1].x, m - f[p - 1].y, y - f[p - 1].x, v - f[p - 1].y, Q - f[p - 1].x, C - f[p - 1].y], i[i.length - 1].deltas.push(B);
                    break;

                  case "arc":
                    0 === i.length && i.push({
                      deltas: [],
                      abs: []
                    }), i[i.length - 1].arc = !0, Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(g);
                    break;

                  case "close":
                    i.push({
                      close: !0
                    });
                }
              }

              for (p = 0; p < i.length; p++) {
                var U;
                if (p == i.length - 1 ? (U = "f", "evenodd" === t && (U += "*")) : U = null, i[p].close) this.pdf.internal.out("h"), U && this.pdf.internal.out(U);else if (i[p].arc) {
                  i[p].start && this.internal.move2(this, i[p].start.x, i[p].start.y);

                  for (var b = i[p].abs, F = 0; F < b.length; F++) {
                    var E = b[F];

                    if (void 0 !== E.startAngle) {
                      var x = 360 * E.startAngle / (2 * Math.PI),
                          H = 360 * E.endAngle / (2 * Math.PI),
                          I = E.x,
                          S = E.y;
                      0 === F && this.internal.move2(this, I, S), this.internal.arc2(this, I, S, E.radius, x, H, E.anticlockwise, null, e), F === b.length - 1 && i[p].start && (I = i[p].start.x, S = i[p].start.y, this.internal.line2(A, I, S));
                    } else this.internal.line2(A, E.x, E.y);
                  }
                } else I = i[p].start.x, S = i[p].start.y, e ? (this.pdf.lines(i[p].deltas, I, S, null, null), this.pdf.clip_fixed()) : this.pdf.lines(i[p].deltas, I, S, null, U);
              }

              window.outIntercept = o;
            }
          },
          pushMask: function pushMask() {
            if ("function" == typeof this.pdf.internal.newObject2) {
              var t = this.pdf.internal.newStreamObject(),
                  e = this.pdf.internal.newObject2();
              e.push("<</Type /ExtGState"), e.push("/SMask <</S /Alpha /G " + t.objId + " 0 R>>"), e.push(">>");
              var A = "MASK" + e.objId;
              this.pdf.internal.addGraphicsState(A, e.objId);
              var r = "/" + A + " gs";
              this.pdf.internal.out(r);
            } else console.log("jsPDF v2 not enabled");
          },
          clip: function clip() {
            if (0 < this.ctx._clip_path.length) for (var t = 0; t < this.path.length; t++) {
              this.ctx._clip_path.push(this.path[t]);
            } else this.ctx._clip_path = this.path;
            this.path = [];
          },
          measureText: function measureText(t) {
            var e = this.pdf;
            return {
              getWidth: function getWidth() {
                var A = e.internal.getFontSize(),
                    r = e.getStringUnitWidth(t) * A / e.internal.scaleFactor;
                return r *= 1.3333;
              },

              get width() {
                return this.getWidth(t);
              }

            };
          },
          _getBaseline: function _getBaseline(t) {
            var e = parseInt(this.pdf.internal.getFontSize()),
                A = .25 * e;

            switch (this.ctx.textBaseline) {
              case "bottom":
                return t - A;

              case "top":
                return t + e;

              case "hanging":
                return t + e - A;

              case "middle":
                return t + e / 2 - A;

              case "ideographic":
                return t;

              case "alphabetic":
              default:
                return t;
            }
          }
        };
        var A = t.context2d;
        Object.defineProperty(A, "fillStyle", {
          set: function set(t) {
            this.setFillStyle(t);
          },
          get: function get() {
            return this.ctx.fillStyle;
          }
        }), Object.defineProperty(A, "strokeStyle", {
          set: function set(t) {
            this.setStrokeStyle(t);
          },
          get: function get() {
            return this.ctx.strokeStyle;
          }
        }), Object.defineProperty(A, "lineWidth", {
          set: function set(t) {
            this.setLineWidth(t);
          },
          get: function get() {
            return this.ctx.lineWidth;
          }
        }), Object.defineProperty(A, "lineCap", {
          set: function set(t) {
            this.setLineCap(t);
          },
          get: function get() {
            return this.ctx.lineCap;
          }
        }), Object.defineProperty(A, "lineJoin", {
          set: function set(t) {
            this.setLineJoin(t);
          },
          get: function get() {
            return this.ctx.lineJoin;
          }
        }), Object.defineProperty(A, "miterLimit", {
          set: function set(t) {
            this.ctx.miterLimit = t;
          },
          get: function get() {
            return this.ctx.miterLimit;
          }
        }), Object.defineProperty(A, "textBaseline", {
          set: function set(t) {
            this.setTextBaseline(t);
          },
          get: function get() {
            return this.getTextBaseline();
          }
        }), Object.defineProperty(A, "textAlign", {
          set: function set(t) {
            this.setTextAlign(t);
          },
          get: function get() {
            return this.getTextAlign();
          }
        }), Object.defineProperty(A, "font", {
          set: function set(t) {
            this.setFont(t);
          },
          get: function get() {
            return this.ctx.font;
          }
        }), Object.defineProperty(A, "globalCompositeOperation", {
          set: function set(t) {
            this.ctx.globalCompositeOperation = t;
          },
          get: function get() {
            return this.ctx.globalCompositeOperation;
          }
        }), Object.defineProperty(A, "globalAlpha", {
          set: function set(t) {
            this.ctx.globalAlpha = t;
          },
          get: function get() {
            return this.ctx.globalAlpha;
          }
        }), Object.defineProperty(A, "canvas", {
          get: function get() {
            return {
              parentNode: !1,
              style: !1
            };
          }
        }), Object.defineProperty(A, "ignoreClearRect", {
          set: function set(t) {
            this.ctx.ignoreClearRect = t;
          },
          get: function get() {
            return this.ctx.ignoreClearRect;
          }
        }), A.internal = {}, A.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/, A.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/, A.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/, A.internal.arc = function (t, e, A, r, n, i, o, a) {
          for (var s = this.pdf.internal.scaleFactor, c = this.pdf.internal.pageSize.getHeight(), l = this.pdf.internal.f2, u = n * (Math.PI / 180), h = i * (Math.PI / 180), d = this.createArc(r, u, h, o), f = 0; f < d.length; f++) {
            var p = d[f];
            0 === f ? this.pdf.internal.out([l((p.x1 + e) * s), l((c - (p.y1 + A)) * s), "m", l((p.x2 + e) * s), l((c - (p.y2 + A)) * s), l((p.x3 + e) * s), l((c - (p.y3 + A)) * s), l((p.x4 + e) * s), l((c - (p.y4 + A)) * s), "c"].join(" ")) : this.pdf.internal.out([l((p.x2 + e) * s), l((c - (p.y2 + A)) * s), l((p.x3 + e) * s), l((c - (p.y3 + A)) * s), l((p.x4 + e) * s), l((c - (p.y4 + A)) * s), "c"].join(" ")), t._lastPoint = {
              x: e,
              y: A
            };
          }

          null !== a && this.pdf.internal.out(this.pdf.internal.getStyle(a));
        }, A.internal.arc2 = function (t, e, A, r, n, i, o, a, s) {
          var c = e,
              l = A;
          s ? (this.arc(t, c, l, r, n, i, o, null), this.pdf.clip_fixed()) : this.arc(t, c, l, r, n, i, o, a);
        }, A.internal.move2 = function (t, e, A) {
          var r = this.pdf.internal.scaleFactor,
              n = this.pdf.internal.pageSize.getHeight(),
              i = this.pdf.internal.f2;
          this.pdf.internal.out([i(e * r), i((n - A) * r), "m"].join(" ")), t._lastPoint = {
            x: e,
            y: A
          };
        }, A.internal.line2 = function (t, e, A) {
          var r = this.pdf.internal.scaleFactor,
              n = this.pdf.internal.pageSize.getHeight(),
              i = this.pdf.internal.f2,
              o = {
            x: e,
            y: A
          };
          this.pdf.internal.out([i(o.x * r), i((n - o.y) * r), "l"].join(" ")), t._lastPoint = o;
        }, A.internal.createArc = function (t, e, A, r) {
          var n = 2 * Math.PI,
              i = Math.PI / 2,
              o = e;

          for ((o < n || n < o) && (o %= n), o < 0 && (o = n + o); A < e;) {
            e -= n;
          }

          var a = Math.abs(A - e);
          a < n && r && (a = n - a);

          for (var s = [], c = r ? -1 : 1, l = o; 1e-5 < a;) {
            var u = l + c * Math.min(a, i);
            s.push(this.createSmallArc(t, l, u)), a -= Math.abs(u - l), l = u;
          }

          return s;
        }, A.internal.getCurrentPage = function () {
          return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber];
        }, A.internal.createSmallArc = function (t, e, A) {
          var r = (A - e) / 2,
              n = t * Math.cos(r),
              i = t * Math.sin(r),
              o = n,
              a = -i,
              s = o * o + a * a,
              c = s + o * n + a * i,
              l = 4 / 3 * (Math.sqrt(2 * s * c) - c) / (o * i - a * n),
              u = o - l * a,
              h = a + l * o,
              d = u,
              f = -h,
              p = r + e,
              g = Math.cos(p),
              B = Math.sin(p);
          return {
            x1: t * Math.cos(e),
            y1: t * Math.sin(e),
            x2: u * g - h * B,
            y2: u * B + h * g,
            x3: d * g - f * B,
            y3: d * B + f * g,
            x4: t * Math.cos(A),
            y4: t * Math.sin(A)
          };
        };
      }(st.API, "undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()), function (t) {
        var e, _A, r, n, i, o, a, s, c, l, u, h, d, f, p, g, B, w, m, y;

        e = function () {
          function t() {}

          return function (e) {
            return t.prototype = e, new t();
          };
        }(), l = function l(t) {
          var e, A, r, n, i, o, a;

          for (A = 0, r = t.length, e = void 0, o = n = !1; !n && A !== r;) {
            (e = t[A] = t[A].trimLeft()) && (n = !0), A++;
          }

          for (A = r - 1; r && !o && -1 !== A;) {
            (e = t[A] = t[A].trimRight()) && (o = !0), A--;
          }

          for (i = /\s+$/g, a = !0, A = 0; A !== r;) {
            "\u2028" != t[A] && (e = t[A].replace(/\s+/g, " "), a && (e = e.trimLeft()), e && (a = i.test(e)), t[A] = e), A++;
          }

          return t;
        }, h = function h(t) {
          var e, A, n;

          for (e = void 0, A = (n = t.split(",")).shift(); !e && A;) {
            e = r[A.trim().toLowerCase()], A = n.shift();
          }

          return e;
        }, d = function d(t) {
          var e;
          return -1 < (t = "auto" === t ? "0px" : t).indexOf("em") && !isNaN(Number(t.replace("em", ""))) && (t = 18.719 * Number(t.replace("em", "")) + "px"), -1 < t.indexOf("pt") && !isNaN(Number(t.replace("pt", ""))) && (t = 1.333 * Number(t.replace("pt", "")) + "px"), (e = f[t]) ? e : void 0 !== (e = {
            "xx-small": 9,
            "x-small": 11,
            small: 13,
            medium: 16,
            large: 19,
            "x-large": 23,
            "xx-large": 28,
            auto: 0
          }[t]) ? f[t] = e / 16 : (e = parseFloat(t)) ? f[t] = e / 16 : (e = t.match(/([\d\.]+)(px)/), Array.isArray(e) && 3 === e.length ? f[t] = parseFloat(e[1]) / 16 : f[t] = 1);
        }, c = function c(t) {
          var e, A, r, c, l;
          return l = t, c = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(l, null) : l.currentStyle ? l.currentStyle : l.style, A = void 0, (e = {})["font-family"] = h((r = function r(t) {
            return t = t.replace(/-\D/g, function (t) {
              return t.charAt(1).toUpperCase();
            }), c[t];
          })("font-family")) || "times", e["font-style"] = n[r("font-style")] || "normal", e["text-align"] = i[r("text-align")] || "left", "bold" === (A = o[r("font-weight")] || "normal") && ("normal" === e["font-style"] ? e["font-style"] = A : e["font-style"] = A + e["font-style"]), e["font-size"] = d(r("font-size")) || 1, e["line-height"] = d(r("line-height")) || 1, e.display = "inline" === r("display") ? "inline" : "block", A = "block" === e.display, e["margin-top"] = A && d(r("margin-top")) || 0, e["margin-bottom"] = A && d(r("margin-bottom")) || 0, e["padding-top"] = A && d(r("padding-top")) || 0, e["padding-bottom"] = A && d(r("padding-bottom")) || 0, e["margin-left"] = A && d(r("margin-left")) || 0, e["margin-right"] = A && d(r("margin-right")) || 0, e["padding-left"] = A && d(r("padding-left")) || 0, e["padding-right"] = A && d(r("padding-right")) || 0, e["page-break-before"] = r("page-break-before") || "auto", e["float"] = a[r("cssFloat")] || "none", e.clear = s[r("clear")] || "none", e.color = r("color"), e;
        }, p = function p(t, e, A) {
          var r, n, i, o, a;
          if (i = !1, o = n = void 0, r = A["#" + t.id]) if ("function" == typeof r) i = r(t, e);else for (n = 0, o = r.length; !i && n !== o;) {
            i = r[n](t, e), n++;
          }
          if (r = A[t.nodeName], !i && r) if ("function" == typeof r) i = r(t, e);else for (n = 0, o = r.length; !i && n !== o;) {
            i = r[n](t, e), n++;
          }

          for (a = "string" == typeof t.className ? t.className.split(" ") : [], n = 0; n < a.length; n++) {
            if (r = A["." + a[n]], !i && r) if ("function" == typeof r) i = r(t, e);else for (n = 0, o = r.length; !i && n !== o;) {
              i = r[n](t, e), n++;
            }
          }

          return i;
        }, y = function y(t, e) {
          var A, r, n, i, o, a, s, c, l;

          for (A = [], r = [], n = 0, l = t.rows[0].cells.length, s = t.clientWidth; n < l;) {
            c = t.rows[0].cells[n], r[n] = {
              name: c.textContent.toLowerCase().replace(/\s+/g, ""),
              prompt: c.textContent.replace(/\r?\n/g, ""),
              width: c.clientWidth / s * e.pdf.internal.pageSize.getWidth()
            }, n++;
          }

          for (n = 1; n < t.rows.length;) {
            for (a = t.rows[n], o = {}, i = 0; i < a.cells.length;) {
              o[r[i].name] = a.cells[i].textContent.replace(/\r?\n/g, ""), i++;
            }

            A.push(o), n++;
          }

          return {
            rows: A,
            headers: r
          };
        };
        var v = {
          SCRIPT: 1,
          STYLE: 1,
          NOSCRIPT: 1,
          OBJECT: 1,
          EMBED: 1,
          SELECT: 1
        },
            Q = 1;
        _A = function A(t, r, n) {
          var i, o, a, s, l, u, h, d;

          for (o = t.childNodes, i = void 0, (l = "block" === (a = c(t)).display) && (r.setBlockBoundary(), r.setBlockStyle(a)), s = 0, u = o.length; s < u;) {
            if ("object" === (void 0 === (i = o[s]) ? "undefined" : at(i))) {
              if (r.executeWatchFunctions(i), 1 === i.nodeType && "HEADER" === i.nodeName) {
                var f = i,
                    B = r.pdf.margins_doc.top;
                r.pdf.internal.events.subscribe("addPage", function (t) {
                  r.y = B, _A(f, r, n), r.pdf.margins_doc.top = r.y + 10, r.y += 10;
                }, !1);
              }

              if (8 === i.nodeType && "#comment" === i.nodeName) ~i.textContent.indexOf("ADD_PAGE") && (r.pdf.addPage(), r.y = r.pdf.margins_doc.top);else if (1 !== i.nodeType || v[i.nodeName]) {
                if (3 === i.nodeType) {
                  var w = i.nodeValue;
                  if (i.nodeValue && "LI" === i.parentNode.nodeName) if ("OL" === i.parentNode.parentNode.nodeName) w = Q++ + ". " + w;else {
                    var m = a["font-size"],
                        C = (3 - .75 * m) * r.pdf.internal.scaleFactor,
                        U = .75 * m * r.pdf.internal.scaleFactor,
                        b = 1.74 * m / r.pdf.internal.scaleFactor;

                    d = function d(t, e) {
                      this.pdf.circle(t + C, e + U, b, "FD");
                    };
                  }
                  16 & i.ownerDocument.body.compareDocumentPosition(i) && r.addText(w, a);
                } else "string" == typeof i && r.addText(i, a);
              } else {
                var F;

                if ("IMG" === i.nodeName) {
                  var E = i.getAttribute("src");
                  F = g[r.pdf.sHashCode(E) || E];
                }

                if (F) {
                  r.pdf.internal.pageSize.getHeight() - r.pdf.margins_doc.bottom < r.y + i.height && r.y > r.pdf.margins_doc.top && (r.pdf.addPage(), r.y = r.pdf.margins_doc.top, r.executeWatchFunctions(i));

                  var x = c(i),
                      H = r.x,
                      I = 12 / r.pdf.internal.scaleFactor,
                      S = (x["margin-left"] + x["padding-left"]) * I,
                      _ = (x["margin-right"] + x["padding-right"]) * I,
                      T = (x["margin-top"] + x["padding-top"]) * I,
                      N = (x["margin-bottom"] + x["padding-bottom"]) * I;

                  void 0 !== x["float"] && "right" === x["float"] ? H += r.settings.width - i.width - _ : H += S, r.pdf.addImage(F, H, r.y + T, i.width, i.height), F = void 0, "right" === x["float"] || "left" === x["float"] ? (r.watchFunctions.push(function (t, e, A, n) {
                    return r.y >= e ? (r.x += t, r.settings.width += A, !0) : !!(n && 1 === n.nodeType && !v[n.nodeName] && r.x + n.width > r.pdf.margins_doc.left + r.pdf.margins_doc.width) && (r.x += t, r.y = e, r.settings.width += A, !0);
                  }.bind(this, "left" === x["float"] ? -i.width - S - _ : 0, r.y + i.height + T + N, i.width)), r.watchFunctions.push(function (t, e, A) {
                    return !(r.y < t && e === r.pdf.internal.getNumberOfPages()) || 1 === A.nodeType && "both" === c(A).clear && (r.y = t, !0);
                  }.bind(this, r.y + i.height, r.pdf.internal.getNumberOfPages())), r.settings.width -= i.width + S + _, "left" === x["float"] && (r.x += i.width + S + _)) : r.y += i.height + T + N;
                } else if ("TABLE" === i.nodeName) h = y(i, r), r.y += 10, r.pdf.table(r.x, r.y, h.rows, h.headers, {
                  autoSize: !1,
                  printHeaders: n.printHeaders,
                  margins: r.pdf.margins_doc,
                  css: c(i)
                }), r.y = r.pdf.lastCellPos.y + r.pdf.lastCellPos.h + 20;else if ("OL" === i.nodeName || "UL" === i.nodeName) Q = 1, p(i, r, n) || _A(i, r, n), r.y += 10;else if ("LI" === i.nodeName) {
                  var k = r.x;
                  r.x += 20 / r.pdf.internal.scaleFactor, r.y += 3, p(i, r, n) || _A(i, r, n), r.x = k;
                } else "BR" === i.nodeName ? (r.y += a["font-size"] * r.pdf.internal.scaleFactor, r.addText("\u2028", e(a))) : p(i, r, n) || _A(i, r, n);
              }
            }

            s++;
          }

          if (n.outY = r.y, l) return r.setBlockBoundary(d);
        }, g = {}, B = function B(t, e, A, r) {
          function n() {
            e.pdf.internal.events.publish("imagesLoaded"), r(o);
          }

          function i(t, A, r) {
            if (t) {
              var i = new Image();
              o = ++c, i.crossOrigin = "", i.onerror = i.onload = function () {
                if (i.complete && (0 === i.src.indexOf("data:image/") && (i.width = A || i.width || 0, i.height = r || i.height || 0), i.width + i.height)) {
                  var o = e.pdf.sHashCode(t) || t;
                  g[o] = g[o] || i;
                }

                --c || n();
              }, i.src = t;
            }
          }

          for (var o, a = t.getElementsByTagName("img"), s = a.length, c = 0; s--;) {
            i(a[s].getAttribute("src"), a[s].width, a[s].height);
          }

          return c || n();
        }, w = function w(t, e, r) {
          var n = t.getElementsByTagName("footer");

          if (0 < n.length) {
            n = n[0];
            var i = e.pdf.internal.write,
                o = e.y;
            e.pdf.internal.write = function () {}, _A(n, e, r);
            var a = Math.ceil(e.y - o) + 5;
            e.y = o, e.pdf.internal.write = i, e.pdf.margins_doc.bottom += a;

            for (var s = function s(t) {
              var i = void 0 !== t ? t.pageNumber : 1,
                  o = e.y;
              e.y = e.pdf.internal.pageSize.getHeight() - e.pdf.margins_doc.bottom, e.pdf.margins_doc.bottom -= a;

              for (var s = n.getElementsByTagName("span"), c = 0; c < s.length; ++c) {
                -1 < (" " + s[c].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") && (s[c].innerHTML = i), -1 < (" " + s[c].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && (s[c].innerHTML = "###jsPDFVarTotalPages###");
              }

              _A(n, e, r), e.pdf.margins_doc.bottom += a, e.y = o;
            }, c = n.getElementsByTagName("span"), l = 0; l < c.length; ++l) {
              -1 < (" " + c[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && e.pdf.internal.events.subscribe("htmlRenderingFinished", e.pdf.putTotalPages.bind(e.pdf, "###jsPDFVarTotalPages###"), !0);
            }

            e.pdf.internal.events.subscribe("addPage", s, !1), s(), v.FOOTER = 1;
          }
        }, m = function m(t, e, r, n, i, o) {
          if (!e) return !1;
          var a, s, c, l;
          "string" == typeof e || e.parentNode || (e = "" + e.innerHTML), "string" == typeof e && (a = e.replace(/<\/?script[^>]*?>/gi, ""), l = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0), (c = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", c.innerHTML = '<iframe style="height:1px;width:1px" name="' + l + '" />', document.body.appendChild(c), (s = window.frames[l]).document.open(), s.document.writeln(a), s.document.close(), e = s.document.body);
          var h,
              d = new u(t, r, n, i);
          return B.call(this, e, d, i.elementHandlers, function (t) {
            w(e, d, i.elementHandlers), _A(e, d, i.elementHandlers), d.pdf.internal.events.publish("htmlRenderingFinished"), h = d.dispose(), "function" == typeof o ? o(h) : t && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
          }), h || {
            x: d.x,
            y: d.y
          };
        }, (u = function u(t, e, A, r) {
          return this.pdf = t, this.x = e, this.y = A, this.settings = r, this.watchFunctions = [], this.init(), this;
        }).prototype.init = function () {
          return this.paragraph = {
            text: [],
            style: []
          }, this.pdf.internal.write("q");
        }, u.prototype.dispose = function () {
          return this.pdf.internal.write("Q"), {
            x: this.x,
            y: this.y,
            ready: !0
          };
        }, u.prototype.executeWatchFunctions = function (t) {
          var e = !1,
              A = [];

          if (0 < this.watchFunctions.length) {
            for (var r = 0; r < this.watchFunctions.length; ++r) {
              !0 === this.watchFunctions[r](t) ? e = !0 : A.push(this.watchFunctions[r]);
            }

            this.watchFunctions = A;
          }

          return e;
        }, u.prototype.splitFragmentsIntoLines = function (t, A) {
          var r, n, i, o, a, s, c, l, u, h, d, f, p, g;

          for (h = this.pdf.internal.scaleFactor, o = {}, s = c = l = g = a = i = u = n = void 0, f = [d = []], r = 0, p = this.settings.width; t.length;) {
            if (a = t.shift(), g = A.shift(), a) if ((i = o[(n = g["font-family"]) + (u = g["font-style"])]) || (i = this.pdf.internal.getFont(n, u).metadata.Unicode, o[n + u] = i), l = {
              widths: i.widths,
              kerning: i.kerning,
              fontSize: 12 * g["font-size"],
              textIndent: r
            }, c = this.pdf.getStringUnitWidth(a, l) * l.fontSize / h, "\u2028" == a) d = [], f.push(d);else if (p < r + c) {
              for (s = this.pdf.splitTextToSize(a, p, l), d.push([s.shift(), g]); s.length;) {
                d = [[s.shift(), g]], f.push(d);
              }

              r = this.pdf.getStringUnitWidth(d[0][0], l) * l.fontSize / h;
            } else d.push([a, g]), r += c;
          }

          if (void 0 !== g["text-align"] && ("center" === g["text-align"] || "right" === g["text-align"] || "justify" === g["text-align"])) for (var B = 0; B < f.length; ++B) {
            var w = this.pdf.getStringUnitWidth(f[B][0][0], l) * l.fontSize / h;
            0 < B && (f[B][0][1] = e(f[B][0][1]));
            var m = p - w;
            if ("right" === g["text-align"]) f[B][0][1]["margin-left"] = m;else if ("center" === g["text-align"]) f[B][0][1]["margin-left"] = m / 2;else if ("justify" === g["text-align"]) {
              var y = f[B][0][0].split(" ").length - 1;
              f[B][0][1]["word-spacing"] = m / y, B === f.length - 1 && (f[B][0][1]["word-spacing"] = 0);
            }
          }
          return f;
        }, u.prototype.RenderTextFragment = function (t, e) {
          var A, r;
          r = 0, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"), this.pdf.addPage(), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "BT", this.getPdfColor(e.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), r = Math.max(r, e["line-height"], e["font-size"]), this.pdf.internal.write(0, (-12 * r).toFixed(2), "Td")), A = this.pdf.internal.getFont(e["font-family"], e["font-style"]);
          var n = this.getPdfColor(e.color);
          n !== this.lastTextColor && (this.pdf.internal.write(n), this.lastTextColor = n), void 0 !== e["word-spacing"] && 0 < e["word-spacing"] && this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"), this.pdf.internal.write("/" + A.id, (12 * e["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t) + ") Tj"), void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw");
        }, u.prototype.getPdfColor = function (t) {
          var e,
              A,
              r,
              n = new RGBColor(t),
              i = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);

          if (null != i ? (e = parseInt(i[1]), A = parseInt(i[2]), r = parseInt(i[3])) : ("#" != t.charAt(0) && (t = n.ok ? n.toHex() : "#000000"), e = t.substring(1, 3), e = parseInt(e, 16), A = t.substring(3, 5), A = parseInt(A, 16), r = t.substring(5, 7), r = parseInt(r, 16)), "string" == typeof e && /^#[0-9A-Fa-f]{6}$/.test(e)) {
            var o = parseInt(e.substr(1), 16);
            e = o >> 16 & 255, A = o >> 8 & 255, r = 255 & o;
          }

          var a = this.f3;
          return 0 === e && 0 === A && 0 === r || void 0 === A ? a(e / 255) + " g" : [a(e / 255), a(A / 255), a(r / 255), "rg"].join(" ");
        }, u.prototype.f3 = function (t) {
          return t.toFixed(3);
        }, u.prototype.renderParagraph = function (t) {
          var e, A, r, n, i, o, a, s, c, u, h, d, f;

          if (r = l(this.paragraph.text), d = this.paragraph.style, e = this.paragraph.blockstyle, this.paragraph.priorblockstyle, this.paragraph = {
            text: [],
            style: [],
            blockstyle: {},
            priorblockstyle: e
          }, r.join("").trim()) {
            a = this.splitFragmentsIntoLines(r, d), s = o = void 0, A = 12 / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, h = (Math.max((e["margin-top"] || 0) - this.priorMarginBottom, 0) + (e["padding-top"] || 0)) * A, u = ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * A, this.priorMarginBottom = e["margin-bottom"] || 0, "always" === e["page-break-before"] && (this.pdf.addPage(), this.y = 0, h = ((e["margin-top"] || 0) + (e["padding-top"] || 0)) * A), c = this.pdf.internal.write, i = n = void 0, this.y += h, c("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");

            for (var p = 0; a.length;) {
              for (n = s = 0, i = (o = a.shift()).length; n !== i;) {
                o[n][0].trim() && (s = Math.max(s, o[n][1]["line-height"], o[n][1]["font-size"]), f = 7 * o[n][1]["font-size"]), n++;
              }

              var g = 0,
                  B = 0;

              for (void 0 !== o[0][1]["margin-left"] && 0 < o[0][1]["margin-left"] && (g = (B = this.pdf.internal.getCoordinateString(o[0][1]["margin-left"])) - p, p = B), c(g + Math.max(e["margin-left"] || 0, 0) * A, (-12 * s).toFixed(2), "Td"), n = 0, i = o.length; n !== i;) {
                o[n][0] && this.RenderTextFragment(o[n][0], o[n][1]), n++;
              }

              if (this.y += s * A, this.executeWatchFunctions(o[0][1]) && 0 < a.length) {
                var w = [],
                    m = [];
                a.forEach(function (t) {
                  for (var e = 0, A = t.length; e !== A;) {
                    t[e][0] && (w.push(t[e][0] + " "), m.push(t[e][1])), ++e;
                  }
                }), a = this.splitFragmentsIntoLines(l(w), m), c("ET", "Q"), c("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
              }
            }

            return t && "function" == typeof t && t.call(this, this.x - 9, this.y - f / 2), c("ET", "Q"), this.y += u;
          }
        }, u.prototype.setBlockBoundary = function (t) {
          return this.renderParagraph(t);
        }, u.prototype.setBlockStyle = function (t) {
          return this.paragraph.blockstyle = t;
        }, u.prototype.addText = function (t, e) {
          return this.paragraph.text.push(t), this.paragraph.style.push(e);
        }, r = {
          helvetica: "helvetica",
          "sans-serif": "helvetica",
          "times new roman": "times",
          serif: "times",
          times: "times",
          monospace: "courier",
          courier: "courier"
        }, o = {
          100: "normal",
          200: "normal",
          300: "normal",
          400: "normal",
          500: "bold",
          600: "bold",
          700: "bold",
          800: "bold",
          900: "bold",
          normal: "normal",
          bold: "bold",
          bolder: "bold",
          lighter: "normal"
        }, n = {
          normal: "normal",
          italic: "italic",
          oblique: "italic"
        }, i = {
          left: "left",
          right: "right",
          center: "center",
          justify: "justify"
        }, a = {
          none: "none",
          right: "right",
          left: "left"
        }, s = {
          none: "none",
          both: "both"
        }, f = {
          normal: 1
        }, t.fromHTML = function (t, e, A, r, n, i) {
          return this.margins_doc = i || {
            top: 0,
            bottom: 0
          }, r || (r = {}), r.elementHandlers || (r.elementHandlers = {}), m(this, t, isNaN(e) ? 4 : e, isNaN(A) ? 4 : A, r, n);
        };
      }(st.API), st.API.addJS = function (t) {
        return C = t, this.internal.events.subscribe("postPutResources", function (t) {
          v = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (v + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Q = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + C + ")"), this.internal.out(">>"), this.internal.out("endobj");
        }), this.internal.events.subscribe("putCatalog", function () {
          void 0 !== v && void 0 !== Q && this.internal.out("/Names <</JavaScript " + v + " 0 R>>");
        }), this;
      }, (U = st.API).events.push(["postPutResources", function () {
        var t = this,
            e = /^(\d+) 0 obj$/;
        if (0 < this.outline.root.children.length) for (var A = t.outline.render().split(/\r\n/), r = 0; r < A.length; r++) {
          var n = A[r],
              i = e.exec(n);

          if (null != i) {
            var o = i[1];
            t.internal.newObjectDeferredBegin(o);
          }

          t.internal.write(n);
        }

        if (this.outline.createNamedDestinations) {
          var a = this.internal.pages.length,
              s = [];

          for (r = 0; r < a; r++) {
            var c = t.internal.newObject();
            s.push(c);
            var l = t.internal.getPageInfo(r + 1);
            t.internal.write("<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj");
          }

          var u = t.internal.newObject();

          for (t.internal.write("<< /Names [ "), r = 0; r < s.length; r++) {
            t.internal.write("(page_" + (r + 1) + ")" + s[r] + " 0 R");
          }

          t.internal.write(" ] >>", "endobj"), t.internal.newObject(), t.internal.write("<< /Dests " + u + " 0 R"), t.internal.write(">>", "endobj");
        }
      }]), U.events.push(["putCatalog", function () {
        0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"));
      }]), U.events.push(["initialized", function () {
        var t = this;
        t.outline = {
          createNamedDestinations: !1,
          root: {
            children: []
          }
        }, t.outline.add = function (t, e, A) {
          var r = {
            title: e,
            options: A,
            children: []
          };
          return null == t && (t = this.root), t.children.push(r), r;
        }, t.outline.render = function () {
          return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
        }, t.outline.genIds_r = function (e) {
          e.id = t.internal.newObjectDeferred();

          for (var A = 0; A < e.children.length; A++) {
            this.genIds_r(e.children[A]);
          }
        }, t.outline.renderRoot = function (t) {
          this.objStart(t), this.line("/Type /Outlines"), 0 < t.children.length && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({
            count: 0
          }, t)), this.objEnd();
        }, t.outline.renderItems = function (e) {
          for (var A = 0; A < e.children.length; A++) {
            var r = e.children[A];
            this.objStart(r), this.line("/Title " + this.makeString(r.title)), this.line("/Parent " + this.makeRef(e)), 0 < A && this.line("/Prev " + this.makeRef(e.children[A - 1])), A < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[A + 1])), 0 < r.children.length && (this.line("/First " + this.makeRef(r.children[0])), this.line("/Last " + this.makeRef(r.children[r.children.length - 1])));
            var n = this.count = this.count_r({
              count: 0
            }, r);

            if (0 < n && this.line("/Count " + n), r.options && r.options.pageNumber) {
              var i = t.internal.getPageInfo(r.options.pageNumber);
              this.line("/Dest [" + i.objId + " 0 R /XYZ 0 " + this.ctx.pdf.internal.pageSize.getHeight() * this.ctx.pdf.internal.scaleFactor + " 0]");
            }

            this.objEnd();
          }

          for (A = 0; A < e.children.length; A++) {
            r = e.children[A], this.renderItems(r);
          }
        }, t.outline.line = function (t) {
          this.ctx.val += t + "\r\n";
        }, t.outline.makeRef = function (t) {
          return t.id + " 0 R";
        }, t.outline.makeString = function (e) {
          return "(" + t.internal.pdfEscape(e) + ")";
        }, t.outline.objStart = function (t) {
          this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
        }, t.outline.objEnd = function (t) {
          this.ctx.val += ">> \r\nendobj\r\n";
        }, t.outline.count_r = function (t, e) {
          for (var A = 0; A < e.children.length; A++) {
            t.count++, this.count_r(t, e.children[A]);
          }

          return t.count;
        };
      }]), b = st.API, F = function F() {
        var t = "function" == typeof Deflater;
        if (!t) throw new Error("requires deflate.js for compression");
        return t;
      }, E = function E(t, e, A, r) {
        var n = 5,
            i = T;

        switch (r) {
          case b.image_compression.FAST:
            n = 3, i = _;
            break;

          case b.image_compression.MEDIUM:
            n = 6, i = N;
            break;

          case b.image_compression.SLOW:
            n = 9, i = k;
        }

        t = I(t, e, A, i);
        var o = new Uint8Array(x(n)),
            a = H(t),
            s = new Deflater(n),
            c = s.append(t),
            l = s.flush(),
            u = o.length + c.length + l.length,
            h = new Uint8Array(u + 4);
        return h.set(o), h.set(c, o.length), h.set(l, o.length + c.length), h[u++] = a >>> 24 & 255, h[u++] = a >>> 16 & 255, h[u++] = a >>> 8 & 255, h[u++] = 255 & a, b.arrayBufferToBinaryString(h);
      }, x = function x(t, e) {
        var A = Math.LOG2E * Math.log(32768) - 8 << 4 | 8,
            r = A << 8;
        return r |= Math.min(3, (e - 1 & 255) >> 1) << 6, r |= 0, [A, 255 & (r += 31 - r % 31)];
      }, H = function H(t, e) {
        for (var A, r = 1, n = 0, i = t.length, o = 0; 0 < i;) {
          for (i -= A = e < i ? e : i; n += r += t[o++], --A;) {
            ;
          }

          r %= 65521, n %= 65521;
        }

        return (n << 16 | r) >>> 0;
      }, I = function I(t, e, A, r) {
        for (var n, i, o, a = t.length / e, s = new Uint8Array(t.length + a), c = P(), l = 0; l < a; l++) {
          if (o = l * e, n = t.subarray(o, o + e), r) s.set(r(n, A, i), o + l);else {
            for (var u = 0, h = c.length, d = []; u < h; u++) {
              d[u] = c[u](n, A, i);
            }

            var f = D(d.concat());
            s.set(d[f], o + l);
          }
          i = n;
        }

        return s;
      }, S = function S(t, e, A) {
        var r = Array.apply([], t);
        return r.unshift(0), r;
      }, _ = function _(t, e, A) {
        var r,
            n = [],
            i = 0,
            o = t.length;

        for (n[0] = 1; i < o; i++) {
          r = t[i - e] || 0, n[i + 1] = t[i] - r + 256 & 255;
        }

        return n;
      }, T = function T(t, e, A) {
        var r,
            n = [],
            i = 0,
            o = t.length;

        for (n[0] = 2; i < o; i++) {
          r = A && A[i] || 0, n[i + 1] = t[i] - r + 256 & 255;
        }

        return n;
      }, N = function N(t, e, A) {
        var r,
            n,
            i = [],
            o = 0,
            a = t.length;

        for (i[0] = 3; o < a; o++) {
          r = t[o - e] || 0, n = A && A[o] || 0, i[o + 1] = t[o] + 256 - (r + n >>> 1) & 255;
        }

        return i;
      }, k = function k(t, e, A) {
        var r,
            n,
            i,
            o,
            a = [],
            s = 0,
            c = t.length;

        for (a[0] = 4; s < c; s++) {
          r = t[s - e] || 0, n = A && A[s] || 0, i = A && A[s - e] || 0, o = O(r, n, i), a[s + 1] = t[s] - o + 256 & 255;
        }

        return a;
      }, O = function O(t, e, A) {
        var r = t + e - A,
            n = Math.abs(r - t),
            i = Math.abs(r - e),
            o = Math.abs(r - A);
        return n <= i && n <= o ? t : i <= o ? e : A;
      }, P = function P() {
        return [S, _, T, N, k];
      }, D = function D(t) {
        for (var e, A, r, n = 0, i = t.length; n < i;) {
          ((e = L(t[n].slice(1))) < A || !A) && (A = e, r = n), n++;
        }

        return r;
      }, L = function L(t) {
        for (var e = 0, A = t.length, r = 0; e < A;) {
          r += Math.abs(t[e++]);
        }

        return r;
      }, b.processPNG = function (t, e, A, r, n) {
        var i,
            o,
            a,
            s,
            c,
            l,
            u = this.color_spaces.DEVICE_RGB,
            h = this.decode.FLATE_DECODE,
            d = 8;

        if (this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t)) {
          if ("function" != typeof PNG || "function" != typeof Et) throw new Error("PNG support requires png.js and zlib.js");

          if (t = (i = new PNG(t)).imgData, d = i.bits, u = i.colorSpace, s = i.colors, -1 !== [4, 6].indexOf(i.colorType)) {
            if (8 === i.bits) for (var f, p = (H = 32 == i.pixelBitlength ? new Uint32Array(i.decodePixels().buffer) : 16 == i.pixelBitlength ? new Uint16Array(i.decodePixels().buffer) : new Uint8Array(i.decodePixels().buffer)).length, g = new Uint8Array(p * i.colors), B = new Uint8Array(p), w = i.pixelBitlength - i.bits, m = 0, y = 0; m < p; m++) {
              for (v = H[m], f = 0; f < w;) {
                g[y++] = v >>> f & 255, f += i.bits;
              }

              B[m] = v >>> f & 255;
            }

            if (16 === i.bits) {
              p = (H = new Uint32Array(i.decodePixels().buffer)).length, g = new Uint8Array(p * (32 / i.pixelBitlength) * i.colors), B = new Uint8Array(p * (32 / i.pixelBitlength));

              for (var v, Q = 1 < i.colors, C = y = m = 0; m < p;) {
                v = H[m++], g[y++] = v >>> 0 & 255, Q && (g[y++] = v >>> 16 & 255, v = H[m++], g[y++] = v >>> 0 & 255), B[C++] = v >>> 16 & 255;
              }

              d = 8;
            }

            r !== b.image_compression.NONE && F() ? (t = E(g, i.width * i.colors, i.colors, r), l = E(B, i.width, 1, r)) : (t = g, l = B, h = null);
          }

          if (3 === i.colorType && (u = this.color_spaces.INDEXED, c = i.palette, i.transparency.indexed)) {
            var U = i.transparency.indexed,
                x = 0;

            for (m = 0, p = U.length; m < p; ++m) {
              x += U[m];
            }

            if ((x /= 255) == p - 1 && -1 !== U.indexOf(0)) a = [U.indexOf(0)];else if (x !== p) {
              var H = i.decodePixels();

              for (B = new Uint8Array(H.length), m = 0, p = H.length; m < p; m++) {
                B[m] = U[H[m]];
              }

              l = E(B, i.width, 1);
            }
          }

          var I = function (t) {
            var e;

            switch (r) {
              case b.image_compression.FAST:
                e = 11;
                break;

              case b.image_compression.MEDIUM:
                e = 13;
                break;

              case b.image_compression.SLOW:
                e = 14;
                break;

              default:
                e = 12;
            }

            return e;
          }();

          return o = h === this.decode.FLATE_DECODE ? "/Predictor " + I + " /Colors " + s + " /BitsPerComponent " + d + " /Columns " + i.width : "/Colors " + s + " /BitsPerComponent " + d + " /Columns " + i.width, (this.isArrayBuffer(t) || this.isArrayBufferView(t)) && (t = this.arrayBufferToBinaryString(t)), (l && this.isArrayBuffer(l) || this.isArrayBufferView(l)) && (l = this.arrayBufferToBinaryString(l)), this.createImageInfo(t, i.width, i.height, u, d, h, e, A, o, a, c, l, I);
        }

        throw new Error("Unsupported PNG image data, try using JPEG instead.");
      }, (R = st.API).processGIF89A = function (t, e, A, r, i) {
        var a = new n(t),
            s = a.width,
            c = a.height,
            l = [];
        a.decodeAndBlitFrameRGBA(0, l);
        var u = {
          data: l,
          width: s,
          height: c
        },
            h = new o(100).encode(u, 100);
        return R.processJPEG.call(this, h, e, A, r);
      }, R.processGIF87A = R.processGIF89A, (M = st.API).processBMP = function (t, e, A, r, n) {
        var i = new a(t, !1),
            s = i.width,
            c = i.height,
            l = {
          data: i.getData(),
          width: s,
          height: c
        },
            u = new o(100).encode(l, 100);
        return M.processJPEG.call(this, u, e, A, r);
      }, st.API.setLanguage = function (t) {
        return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== {
          af: "Afrikaans",
          sq: "Albanian",
          ar: "Arabic (Standard)",
          "ar-DZ": "Arabic (Algeria)",
          "ar-BH": "Arabic (Bahrain)",
          "ar-EG": "Arabic (Egypt)",
          "ar-IQ": "Arabic (Iraq)",
          "ar-JO": "Arabic (Jordan)",
          "ar-KW": "Arabic (Kuwait)",
          "ar-LB": "Arabic (Lebanon)",
          "ar-LY": "Arabic (Libya)",
          "ar-MA": "Arabic (Morocco)",
          "ar-OM": "Arabic (Oman)",
          "ar-QA": "Arabic (Qatar)",
          "ar-SA": "Arabic (Saudi Arabia)",
          "ar-SY": "Arabic (Syria)",
          "ar-TN": "Arabic (Tunisia)",
          "ar-AE": "Arabic (U.A.E.)",
          "ar-YE": "Arabic (Yemen)",
          an: "Aragonese",
          hy: "Armenian",
          as: "Assamese",
          ast: "Asturian",
          az: "Azerbaijani",
          eu: "Basque",
          be: "Belarusian",
          bn: "Bengali",
          bs: "Bosnian",
          br: "Breton",
          bg: "Bulgarian",
          my: "Burmese",
          ca: "Catalan",
          ch: "Chamorro",
          ce: "Chechen",
          zh: "Chinese",
          "zh-HK": "Chinese (Hong Kong)",
          "zh-CN": "Chinese (PRC)",
          "zh-SG": "Chinese (Singapore)",
          "zh-TW": "Chinese (Taiwan)",
          cv: "Chuvash",
          co: "Corsican",
          cr: "Cree",
          hr: "Croatian",
          cs: "Czech",
          da: "Danish",
          nl: "Dutch (Standard)",
          "nl-BE": "Dutch (Belgian)",
          en: "English",
          "en-AU": "English (Australia)",
          "en-BZ": "English (Belize)",
          "en-CA": "English (Canada)",
          "en-IE": "English (Ireland)",
          "en-JM": "English (Jamaica)",
          "en-NZ": "English (New Zealand)",
          "en-PH": "English (Philippines)",
          "en-ZA": "English (South Africa)",
          "en-TT": "English (Trinidad & Tobago)",
          "en-GB": "English (United Kingdom)",
          "en-US": "English (United States)",
          "en-ZW": "English (Zimbabwe)",
          eo: "Esperanto",
          et: "Estonian",
          fo: "Faeroese",
          fj: "Fijian",
          fi: "Finnish",
          fr: "French (Standard)",
          "fr-BE": "French (Belgium)",
          "fr-CA": "French (Canada)",
          "fr-FR": "French (France)",
          "fr-LU": "French (Luxembourg)",
          "fr-MC": "French (Monaco)",
          "fr-CH": "French (Switzerland)",
          fy: "Frisian",
          fur: "Friulian",
          gd: "Gaelic (Scots)",
          "gd-IE": "Gaelic (Irish)",
          gl: "Galacian",
          ka: "Georgian",
          de: "German (Standard)",
          "de-AT": "German (Austria)",
          "de-DE": "German (Germany)",
          "de-LI": "German (Liechtenstein)",
          "de-LU": "German (Luxembourg)",
          "de-CH": "German (Switzerland)",
          el: "Greek",
          gu: "Gujurati",
          ht: "Haitian",
          he: "Hebrew",
          hi: "Hindi",
          hu: "Hungarian",
          is: "Icelandic",
          id: "Indonesian",
          iu: "Inuktitut",
          ga: "Irish",
          it: "Italian (Standard)",
          "it-CH": "Italian (Switzerland)",
          ja: "Japanese",
          kn: "Kannada",
          ks: "Kashmiri",
          kk: "Kazakh",
          km: "Khmer",
          ky: "Kirghiz",
          tlh: "Klingon",
          ko: "Korean",
          "ko-KP": "Korean (North Korea)",
          "ko-KR": "Korean (South Korea)",
          la: "Latin",
          lv: "Latvian",
          lt: "Lithuanian",
          lb: "Luxembourgish",
          mk: "FYRO Macedonian",
          ms: "Malay",
          ml: "Malayalam",
          mt: "Maltese",
          mi: "Maori",
          mr: "Marathi",
          mo: "Moldavian",
          nv: "Navajo",
          ng: "Ndonga",
          ne: "Nepali",
          no: "Norwegian",
          nb: "Norwegian (Bokmal)",
          nn: "Norwegian (Nynorsk)",
          oc: "Occitan",
          or: "Oriya",
          om: "Oromo",
          fa: "Persian",
          "fa-IR": "Persian/Iran",
          pl: "Polish",
          pt: "Portuguese",
          "pt-BR": "Portuguese (Brazil)",
          pa: "Punjabi",
          "pa-IN": "Punjabi (India)",
          "pa-PK": "Punjabi (Pakistan)",
          qu: "Quechua",
          rm: "Rhaeto-Romanic",
          ro: "Romanian",
          "ro-MO": "Romanian (Moldavia)",
          ru: "Russian",
          "ru-MO": "Russian (Moldavia)",
          sz: "Sami (Lappish)",
          sg: "Sango",
          sa: "Sanskrit",
          sc: "Sardinian",
          sd: "Sindhi",
          si: "Singhalese",
          sr: "Serbian",
          sk: "Slovak",
          sl: "Slovenian",
          so: "Somani",
          sb: "Sorbian",
          es: "Spanish",
          "es-AR": "Spanish (Argentina)",
          "es-BO": "Spanish (Bolivia)",
          "es-CL": "Spanish (Chile)",
          "es-CO": "Spanish (Colombia)",
          "es-CR": "Spanish (Costa Rica)",
          "es-DO": "Spanish (Dominican Republic)",
          "es-EC": "Spanish (Ecuador)",
          "es-SV": "Spanish (El Salvador)",
          "es-GT": "Spanish (Guatemala)",
          "es-HN": "Spanish (Honduras)",
          "es-MX": "Spanish (Mexico)",
          "es-NI": "Spanish (Nicaragua)",
          "es-PA": "Spanish (Panama)",
          "es-PY": "Spanish (Paraguay)",
          "es-PE": "Spanish (Peru)",
          "es-PR": "Spanish (Puerto Rico)",
          "es-ES": "Spanish (Spain)",
          "es-UY": "Spanish (Uruguay)",
          "es-VE": "Spanish (Venezuela)",
          sx: "Sutu",
          sw: "Swahili",
          sv: "Swedish",
          "sv-FI": "Swedish (Finland)",
          "sv-SV": "Swedish (Sweden)",
          ta: "Tamil",
          tt: "Tatar",
          te: "Teluga",
          th: "Thai",
          tig: "Tigre",
          ts: "Tsonga",
          tn: "Tswana",
          tr: "Turkish",
          tk: "Turkmen",
          uk: "Ukrainian",
          hsb: "Upper Sorbian",
          ur: "Urdu",
          ve: "Venda",
          vi: "Vietnamese",
          vo: "Volapuk",
          wa: "Walloon",
          cy: "Welsh",
          xh: "Xhosa",
          ji: "Yiddish",
          zu: "Zulu"
        }[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function () {
          this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
        }), this.internal.languageSettings.isSubscribed = !0)), this;
      }, K = st.API, z = K.getCharWidthsArray = function (t, e) {
        var A,
            r,
            n,
            i = (e = e || {}).font || this.internal.getFont(),
            o = e.fontSize || this.internal.getFontSize(),
            a = e.charSpace || this.internal.getCharSpace(),
            s = e.widths ? e.widths : i.metadata.Unicode.widths,
            c = s.fof ? s.fof : 1,
            l = e.kerning ? e.kerning : i.metadata.Unicode.kerning,
            u = l.fof ? l.fof : 1,
            h = 0,
            d = s[0] || c,
            f = [];

        for (A = 0, r = t.length; A < r; A++) {
          n = t.charCodeAt(A), "function" == typeof i.metadata.widthOfString ? f.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(n)) + a * (1e3 / o) || 0) / 1e3) : f.push((s[n] || d) / c + (l[n] && l[n][h] || 0) / u), h = n;
        }

        return f;
      }, q = K.getArraySum = function (t) {
        for (var e = t.length, A = 0; e;) {
          A += t[--e];
        }

        return A;
      }, j = K.getStringUnitWidth = function (t, e) {
        var A = (e = e || {}).fontSize || this.internal.getFontSize(),
            r = e.font || this.internal.getFont(),
            n = e.charSpace || this.internal.getCharSpace();
        return "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(t, A, n) / A : q(z.apply(this, arguments));
      }, X = function X(t, e, A, r) {
        for (var n = [], i = 0, o = t.length, a = 0; i !== o && a + e[i] < A;) {
          a += e[i], i++;
        }

        n.push(t.slice(0, i));
        var s = i;

        for (a = 0; i !== o;) {
          a + e[i] > r && (n.push(t.slice(s, i)), a = 0, s = i), a += e[i], i++;
        }

        return s !== i && n.push(t.slice(s, i)), n;
      }, V = function V(t, e, A) {
        A || (A = {});
        var r,
            n,
            i,
            o,
            a,
            s,
            c = [],
            l = [c],
            u = A.textIndent || 0,
            h = 0,
            d = 0,
            f = t.split(" "),
            p = z.apply(this, [" ", A])[0];

        if (s = -1 === A.lineIndent ? f[0].length + 2 : A.lineIndent || 0) {
          var g = Array(s).join(" "),
              B = [];
          f.map(function (t) {
            1 < (t = t.split(/\s*\n/)).length ? B = B.concat(t.map(function (t, e) {
              return (e && t.length ? "\n" : "") + t;
            })) : B.push(t[0]);
          }), f = B, s = j.apply(this, [g, A]);
        }

        for (i = 0, o = f.length; i < o; i++) {
          var w = 0;

          if (r = f[i], s && "\n" == r[0] && (r = r.substr(1), w = 1), n = z.apply(this, [r, A]), e < u + h + (d = q(n)) || w) {
            if (e < d) {
              for (a = X.apply(this, [r, n, e - (u + h), e]), c.push(a.shift()), c = [a.pop()]; a.length;) {
                l.push([a.shift()]);
              }

              d = q(n.slice(r.length - (c[0] ? c[0].length : 0)));
            } else c = [r];

            l.push(c), u = d + s, h = p;
          } else c.push(r), u += h + d, h = p;
        }

        if (s) var m = function m(t, e) {
          return (e ? g : "") + t.join(" ");
        };else m = function m(t) {
          return t.join(" ");
        };
        return l.map(m);
      }, K.splitTextToSize = function (t, e, A) {
        var r,
            n = (A = A || {}).fontSize || this.internal.getFontSize(),
            i = function (t) {
          if (t.widths && t.kerning) return {
            widths: t.widths,
            kerning: t.kerning
          };
          var e = this.internal.getFont(t.fontName, t.fontStyle),
              A = "Unicode";
          return e.metadata[A] ? {
            widths: e.metadata[A].widths || {
              0: 1
            },
            kerning: e.metadata[A].kerning || {}
          } : {
            font: e.metadata,
            fontSize: this.internal.getFontSize(),
            charSpace: this.internal.getCharSpace()
          };
        }.call(this, A);

        r = Array.isArray(t) ? t : t.split(/\r?\n/);
        var o = 1 * this.internal.scaleFactor * e / n;
        i.textIndent = A.textIndent ? 1 * A.textIndent * this.internal.scaleFactor / n : 0, i.lineIndent = A.lineIndent;
        var a,
            s,
            c = [];

        for (a = 0, s = r.length; a < s; a++) {
          c = c.concat(V.apply(this, [r[a], o, i]));
        }

        return c;
      }, G = st.API, Y = {
        codePages: ["WinAnsiEncoding"],
        WinAnsiEncoding: (W = function W(t) {
          for (var e = "klmnopqrstuvwxyz", A = {}, r = 0; r < e.length; r++) {
            A[e[r]] = "0123456789abcdef"[r];
          }

          var n,
              i,
              o,
              a,
              s,
              c = {},
              l = 1,
              u = c,
              h = [],
              d = "",
              f = "",
              p = t.length - 1;

          for (r = 1; r != p;) {
            s = t[r], r += 1, "'" == s ? i ? (a = i.join(""), i = n) : i = [] : i ? i.push(s) : "{" == s ? (h.push([u, a]), u = {}, a = n) : "}" == s ? ((o = h.pop())[0][o[1]] = u, a = n, u = o[0]) : "-" == s ? l = -1 : a === n ? A.hasOwnProperty(s) ? (d += A[s], a = parseInt(d, 16) * l, l = 1, d = "") : d += s : A.hasOwnProperty(s) ? (f += A[s], u[a] = parseInt(f, 16) * l, l = 1, a = n, f = "") : f += s;
          }

          return c;
        })("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
      }, J = {
        Unicode: {
          Courier: Y,
          "Courier-Bold": Y,
          "Courier-BoldOblique": Y,
          "Courier-Oblique": Y,
          Helvetica: Y,
          "Helvetica-Bold": Y,
          "Helvetica-BoldOblique": Y,
          "Helvetica-Oblique": Y,
          "Times-Roman": Y,
          "Times-Bold": Y,
          "Times-BoldItalic": Y,
          "Times-Italic": Y
        }
      }, Z = {
        Unicode: {
          "Courier-Oblique": W("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-BoldItalic": W("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
          "Helvetica-Bold": W("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
          Courier: W("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-BoldOblique": W("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Bold": W("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
          Symbol: W("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
          Helvetica: W("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
          "Helvetica-BoldOblique": W("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
          ZapfDingbats: W("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-Bold": W("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Italic": W("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
          "Times-Roman": W("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
          "Helvetica-Oblique": W("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
      }, G.events.push(["addFont", function (t) {
        var e,
            A,
            r,
            n = "Unicode";
        (e = Z[n][t.postScriptName]) && ((A = t.metadata[n] ? t.metadata[n] : t.metadata[n] = {}).widths = e.widths, A.kerning = e.kerning), (r = J[n][t.postScriptName]) && ((A = t.metadata[n] ? t.metadata[n] : t.metadata[n] = {}).encoding = r).codePages && r.codePages.length && (t.encoding = r.codePages[0]);
      }]), $ = st, "undefined" != typeof self && self || void 0 !== r && r || "undefined" != typeof window && window || Function("return this")(), $.API.events.push(["addFont", function (t) {
        $.API.existsFileInVFS(t.postScriptName) ? (t.metadata = $.API.TTFFont.open(t.postScriptName, t.fontName, $.API.getFileFromVFS(t.postScriptName), t.encoding), t.metadata.Unicode = t.metadata.Unicode || {
          encoding: {},
          kerning: {},
          widths: []
        }) : 14 < t.id.slice(1) && console.error("Font does not exist in FileInVFS, import fonts or remove declaration doc.addFont('" + t.postScriptName + "').");
      }]), (tt = st.API).addSvg = function (t, e, A, r, n) {
        function i(t) {
          for (var e = parseFloat(t[1]), A = parseFloat(t[2]), r = [], n = 3, i = t.length; n < i;) {
            "c" === t[n] ? (r.push([parseFloat(t[n + 1]), parseFloat(t[n + 2]), parseFloat(t[n + 3]), parseFloat(t[n + 4]), parseFloat(t[n + 5]), parseFloat(t[n + 6])]), n += 7) : "l" === t[n] ? (r.push([parseFloat(t[n + 1]), parseFloat(t[n + 2])]), n += 3) : n += 1;
          }

          return [e, A, r];
        }

        if (void 0 === e || void 0 === A) throw new Error("addSVG needs values for 'x' and 'y'");
        var o,
            a,
            s,
            c,
            l,
            u,
            h,
            d,
            f = (c = document, d = c.createElement("iframe"), l = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}", (h = (u = c).createElement("style")).type = "text/css", h.styleSheet ? h.styleSheet.cssText = l : h.appendChild(u.createTextNode(l)), u.getElementsByTagName("head")[0].appendChild(h), d.name = "childframe", d.setAttribute("width", 0), d.setAttribute("height", 0), d.setAttribute("frameborder", "0"), d.setAttribute("scrolling", "no"), d.setAttribute("seamless", "seamless"), d.setAttribute("class", "jsPDF_sillysvg_iframe"), c.body.appendChild(d), d),
            p = (o = t, (s = ((a = f).contentWindow || a.contentDocument).document).write(o), s.close(), s.getElementsByTagName("svg")[0]),
            g = [1, 1],
            B = parseFloat(p.getAttribute("width")),
            w = parseFloat(p.getAttribute("height"));
        B && w && (r && n ? g = [r / B, n / w] : r ? g = [r / B, r / B] : n && (g = [n / w, n / w]));
        var m,
            y,
            v,
            Q,
            C = p.childNodes;

        for (m = 0, y = C.length; m < y; m++) {
          (v = C[m]).tagName && "PATH" === v.tagName.toUpperCase() && ((Q = i(v.getAttribute("d").split(" ")))[0] = Q[0] * g[0] + e, Q[1] = Q[1] * g[1] + A, this.lines.call(this, Q[2], Q[0], Q[1], g));
        }

        return this;
      }, tt.addSVG = tt.addSvg, tt.addSvgAsImage = function (t, e, A, r, n, i, o, a) {
        if (isNaN(e) || isNaN(A)) throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
        if (isNaN(r) || isNaN(n)) throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
        var s = document.createElement("canvas");
        s.width = r, s.height = n;
        var c = s.getContext("2d");
        return c.fillStyle = "#fff", c.fillRect(0, 0, s.width, s.height), canvg(s, t, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0
        }), this.addImage(s.toDataURL("image/jpeg", 1), e, A, r, n, o, a), this;
      }, st.API.putTotalPages = function (t) {
        for (var e = new RegExp(t, "g"), A = 1; A <= this.internal.getNumberOfPages(); A++) {
          for (var r = 0; r < this.internal.pages[A].length; r++) {
            this.internal.pages[A][r] = this.internal.pages[A][r].replace(e, this.internal.getNumberOfPages());
          }
        }

        return this;
      }, st.API.viewerPreferences = function (t, e) {
        function A(t, e) {
          var A,
              r = !1;

          for (A = 0; A < t.length; A += 1) {
            t[A] === e && (r = !0);
          }

          return r;
        }

        var r;
        t = t || {}, e = e || !1;
        var n,
            i,
            o = {
          HideToolbar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          HideMenubar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          HideWindowUI: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          FitWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          CenterWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          DisplayDocTitle: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.4
          },
          NonFullScreenPageMode: {
            defaultValue: "UseNone",
            value: "UseNone",
            type: "name",
            explicitSet: !1,
            valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
            pdfVersion: 1.3
          },
          Direction: {
            defaultValue: "L2R",
            value: "L2R",
            type: "name",
            explicitSet: !1,
            valueSet: ["L2R", "R2L"],
            pdfVersion: 1.3
          },
          ViewArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          ViewClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          PrintArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          PrintClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          PrintScaling: {
            defaultValue: "AppDefault",
            value: "AppDefault",
            type: "name",
            explicitSet: !1,
            valueSet: ["AppDefault", "None"],
            pdfVersion: 1.6
          },
          Duplex: {
            defaultValue: "",
            value: "none",
            type: "name",
            explicitSet: !1,
            valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
            pdfVersion: 1.7
          },
          PickTrayByPDFSize: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.7
          },
          PrintPageRange: {
            defaultValue: "",
            value: "",
            type: "array",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
          },
          NumCopies: {
            defaultValue: 1,
            value: 1,
            type: "integer",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
          }
        },
            a = Object.keys(o),
            s = [],
            c = 0,
            l = 0,
            u = 0,
            h = !0;

        if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, "reset" === t || !0 === e) {
          var d = a.length;

          for (u = 0; u < d; u += 1) {
            r[a[u]].value = r[a[u]].defaultValue, r[a[u]].explicitSet = !1;
          }
        }

        if ("object" === (void 0 === t ? "undefined" : at(t))) for (n in t) {
          if (i = t[n], A(a, n) && void 0 !== i) {
            if ("boolean" === r[n].type && "boolean" == typeof i) r[n].value = i;else if ("name" === r[n].type && A(r[n].valueSet, i)) r[n].value = i;else if ("integer" === r[n].type && Number.isInteger(i)) r[n].value = i;else if ("array" === r[n].type) {
              for (c = 0; c < i.length; c += 1) {
                if (h = !0, 1 === i[c].length && "number" == typeof i[c][0]) s.push(String(i[c]));else if (1 < i[c].length) {
                  for (l = 0; l < i[c].length; l += 1) {
                    "number" != typeof i[c][l] && (h = !1);
                  }

                  !0 === h && s.push(String(i[c].join("-")));
                }
              }

              r[n].value = String(s);
            } else r[n].value = r[n].defaultValue;
            r[n].explicitSet = !0;
          }
        }
        return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function () {
          var t,
              e = [];

          for (t in r) {
            !0 === r[t].explicitSet && ("name" === r[t].type ? e.push("/" + t + " /" + r[t].value) : e.push("/" + t + " " + r[t].value));
          }

          0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>");
        }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = r, this;
      }, et = st.API, nt = rt = At = "", et.addMetadata = function (t, e) {
        return rt = e || "http://jspdf.default.namespaceuri/", At = t, this.internal.events.subscribe("postPutResources", function () {
          if (At) {
            var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + rt + '"><jspdf:metadata>',
                e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                A = unescape(encodeURIComponent(t)),
                r = unescape(encodeURIComponent(At)),
                n = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                i = unescape(encodeURIComponent("</x:xmpmeta>")),
                o = A.length + r.length + n.length + e.length + i.length;
            nt = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(e + A + r + n + i), this.internal.write("endstream"), this.internal.write("endobj");
          } else nt = "";
        }), this.internal.events.subscribe("putCatalog", function () {
          nt && this.internal.write("/Metadata " + nt + " 0 R");
        }), this;
      }, function (t, e) {
        var A = t.API,
            r = [0];
        A.events.push(["putFont", function (e) {
          !function (e, A, n) {
            if (e.metadata instanceof t.API.TTFFont && "Identity-H" === e.encoding) {
              for (var i = e.metadata.Unicode.widths, o = e.metadata.subset.encode(r), a = "", s = 0; s < o.length; s++) {
                a += String.fromCharCode(o[s]);
              }

              var c = n();
              A("<<"), A("/Length " + a.length), A("/Length1 " + a.length), A(">>"), A("stream"), A(a), A("endstream"), A("endobj");
              var l = n();
              A("<<"), A("/Type /FontDescriptor"), A("/FontName /" + e.fontName), A("/FontFile2 " + c + " 0 R"), A("/FontBBox " + t.API.PDFObject.convert(e.metadata.bbox)), A("/Flags " + e.metadata.flags), A("/StemV " + e.metadata.stemV), A("/ItalicAngle " + e.metadata.italicAngle), A("/Ascent " + e.metadata.ascender), A("/Descent " + e.metadata.decender), A("/CapHeight " + e.metadata.capHeight), A(">>"), A("endobj");
              var u = n();
              A("<<"), A("/Type /Font"), A("/BaseFont /" + e.fontName), A("/FontDescriptor " + l + " 0 R"), A("/W " + t.API.PDFObject.convert(i)), A("/CIDToGIDMap /Identity"), A("/DW 1000"), A("/Subtype /CIDFontType2"), A("/CIDSystemInfo"), A("<<"), A("/Supplement 0"), A("/Registry (Adobe)"), A("/Ordering (" + e.encoding + ")"), A(">>"), A(">>"), A("endobj"), e.objectNumber = n(), A("<<"), A("/Type /Font"), A("/Subtype /Type0"), A("/BaseFont /" + e.fontName), A("/Encoding /" + e.encoding), A("/DescendantFonts [" + u + " 0 R]"), A(">>"), A("endobj"), e.isAlreadyPutted = !0;
            }
          }(e.font, e.out, e.newObject);
        }]), A.events.push(["putFont", function (e) {
          !function (e, A, r) {
            if (e.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === e.encoding) {
              e.metadata.Unicode.widths;

              for (var n = e.metadata.rawData, i = "", o = 0; o < n.length; o++) {
                i += String.fromCharCode(n[o]);
              }

              var a = r();
              A("<<"), A("/Length " + i.length), A("/Length1 " + i.length), A(">>"), A("stream"), A(i), A("endstream"), A("endobj");
              var s = r();

              for (A("<<"), A("/Descent " + e.metadata.decender), A("/CapHeight " + e.metadata.capHeight), A("/StemV " + e.metadata.stemV), A("/Type /FontDescriptor"), A("/FontFile2 " + a + " 0 R"), A("/Flags 96"), A("/FontBBox " + t.API.PDFObject.convert(e.metadata.bbox)), A("/FontName /" + e.fontName), A("/ItalicAngle " + e.metadata.italicAngle), A("/Ascent " + e.metadata.ascender), A(">>"), A("endobj"), e.objectNumber = r(), o = 0; o < e.metadata.hmtx.widths.length; o++) {
                e.metadata.hmtx.widths[o] = parseInt(e.metadata.hmtx.widths[o] * (1e3 / e.metadata.head.unitsPerEm));
              }

              A("<</Subtype/TrueType/Type/Font/BaseFont/" + e.fontName + "/FontDescriptor " + s + " 0 R/Encoding/" + e.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(e.metadata.hmtx.widths) + ">>"), A("endobj"), e.isAlreadyPutted = !0;
            }
          }(e.font, e.out, e.newObject);
        }]);

        var n = function n(t) {
          var e,
              A,
              n = t.text || "",
              i = t.x,
              o = t.y,
              a = t.options || {},
              s = t.mutex || {},
              c = s.pdfEscape,
              l = s.activeFontKey,
              u = s.fonts,
              h = (s.activeFontSize, ""),
              d = 0,
              f = "",
              p = u[A = l].encoding;
          if ("Identity-H" !== u[A].encoding) return {
            text: n,
            x: i,
            y: o,
            options: a,
            mutex: s
          };

          for (f = n, A = l, "[object Array]" === Object.prototype.toString.call(n) && (f = n[0]), d = 0; d < f.length; d += 1) {
            u[A].metadata.hasOwnProperty("cmap") && (e = u[A].metadata.cmap.unicode.codeMap[f[d].charCodeAt(0)]), e ? h += f[d] : f[d].charCodeAt(0) < 256 && u[A].metadata.hasOwnProperty("Unicode") ? h += f[d] : h += "";
          }

          var g = "";
          return parseInt(A.slice(1)) < 14 || "WinAnsiEncoding" === p ? g = function (t) {
            for (var e = "", A = 0; A < t.length; A++) {
              e += "" + t.charCodeAt(A).toString(16);
            }

            return e;
          }(c(h, A)) : "Identity-H" === p && (g = function (t, e) {
            for (var A, n = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], o = [""], a = 0, s = t.length; a < s; ++a) {
              if (A = e.metadata.characterToGlyph(t.charCodeAt(a)), r.push(A), -1 == n.indexOf(A) && (n.push(A), n.push([parseInt(e.metadata.widthOfGlyph(A), 10)])), "0" == A) return o.join("");
              A = A.toString(16), o.push(i[4 - A.length], A);
            }

            return o.join("");
          }(h, u[A])), s.isHex = !0, {
            text: g,
            x: i,
            y: o,
            options: a,
            mutex: s
          };
        };

        A.events.push(["postProcessText", function (t) {
          var e = t.text || "",
              A = t.x,
              r = t.y,
              i = t.options,
              o = t.mutex,
              a = (i.lang, []),
              s = {
            text: e,
            x: A,
            y: r,
            options: i,
            mutex: o
          };

          if ("[object Array]" === Object.prototype.toString.call(e)) {
            var c = 0;

            for (c = 0; c < e.length; c += 1) {
              "[object Array]" === Object.prototype.toString.call(e[c]) && 3 === e[c].length ? a.push([n(Object.assign({}, s, {
                text: e[c][0]
              })).text, e[c][1], e[c][2]]) : a.push(n(Object.assign({}, s, {
                text: e[c]
              })).text);
            }

            t.text = a;
          } else t.text = n(Object.assign({}, s, {
            text: e
          })).text;
        }]);
      }(st, "undefined" != typeof self && self || void 0 !== r && r || "undefined" != typeof window && window || Function("return this")()), it = st.API, ot = {}, it.existsFileInVFS = function (t) {
        return ot.hasOwnProperty(t);
      }, it.addFileToVFS = function (t, e) {
        return ot[t] = e, this;
      }, it.getFileFromVFS = function (t) {
        return ot.hasOwnProperty(t) ? ot[t] : null;
      }, function (t) {
        if (t.URL = t.URL || t.webkitURL, t.Blob && t.URL) try {
          return new Blob();
        } catch (t) {}

        var e = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || function (t) {
          var e = function e(t) {
            return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1];
          },
              A = function A() {
            this.data = [];
          },
              r = function r(t, e, A) {
            this.data = t, this.size = t.length, this.type = e, this.encoding = A;
          },
              n = A.prototype,
              i = r.prototype,
              o = t.FileReaderSync,
              a = function a(t) {
            this.code = this[this.name = t];
          },
              s = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
              c = s.length,
              l = t.URL || t.webkitURL || t,
              u = l.createObjectURL,
              h = l.revokeObjectURL,
              d = l,
              f = t.btoa,
              p = t.atob,
              g = t.ArrayBuffer,
              B = t.Uint8Array,
              w = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;

          for (r.fake = i.fake = !0; c--;) {
            a.prototype[s[c]] = c + 1;
          }

          return l.createObjectURL || (d = t.URL = function (t) {
            var e,
                A = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            return A.href = t, "origin" in A || ("data:" === A.protocol.toLowerCase() ? A.origin = null : (e = t.match(w), A.origin = e && e[1])), A;
          }), d.createObjectURL = function (t) {
            var e,
                A = t.type;
            return null === A && (A = "application/octet-stream"), t instanceof r ? (e = "data:" + A, "base64" === t.encoding ? e + ";base64," + t.data : "URI" === t.encoding ? e + "," + decodeURIComponent(t.data) : f ? e + ";base64," + f(t.data) : e + "," + encodeURIComponent(t.data)) : u ? u.call(l, t) : void 0;
          }, d.revokeObjectURL = function (t) {
            "data:" !== t.substring(0, 5) && h && h.call(l, t);
          }, n.append = function (t) {
            var A = this.data;

            if (B && (t instanceof g || t instanceof B)) {
              for (var n = "", i = new B(t), s = 0, c = i.length; s < c; s++) {
                n += String.fromCharCode(i[s]);
              }

              A.push(n);
            } else if ("Blob" === e(t) || "File" === e(t)) {
              if (!o) throw new a("NOT_READABLE_ERR");
              var l = new o();
              A.push(l.readAsBinaryString(t));
            } else t instanceof r ? "base64" === t.encoding && p ? A.push(p(t.data)) : "URI" === t.encoding ? A.push(decodeURIComponent(t.data)) : "raw" === t.encoding && A.push(t.data) : ("string" != typeof t && (t += ""), A.push(unescape(encodeURIComponent(t))));
          }, n.getBlob = function (t) {
            return arguments.length || (t = null), new r(this.data.join(""), t, "raw");
          }, n.toString = function () {
            return "[object BlobBuilder]";
          }, i.slice = function (t, e, A) {
            var n = arguments.length;
            return n < 3 && (A = null), new r(this.data.slice(t, 1 < n ? e : this.data.length), A, this.encoding);
          }, i.toString = function () {
            return "[object Blob]";
          }, i.close = function () {
            this.size = 0, delete this.data;
          }, A;
        }(t);

        t.Blob = function (t, A) {
          var r = A && A.type || "",
              n = new e();
          if (t) for (var i = 0, o = t.length; i < o; i++) {
            Uint8Array && t[i] instanceof Uint8Array ? n.append(t[i].buffer) : n.append(t[i]);
          }
          var a = n.getBlob(r);
          return !a.slice && a.webkitSlice && (a.slice = a.webkitSlice), a;
        };

        var A = Object.getPrototypeOf || function (t) {
          return t.__proto__;
        };

        t.Blob.prototype = A(new t.Blob());
      }("undefined" != typeof self && self || "undefined" != typeof window && window || window.content || window);

      var ct,
          lt,
          ut,
          _ht,
          dt,
          ft,
          pt,
          gt,
          Bt,
          wt,
          mt,
          yt,
          vt,
          Qt,
          Ct,
          Ut,
          bt = bt || function (t) {
        if (!(void 0 === t || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
          var e = function e() {
            return t.URL || t.webkitURL || t;
          },
              A = t.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              r = ("download" in A),
              n = /constructor/i.test(t.HTMLElement) || t.safari,
              i = /CriOS\/[\d]+/.test(navigator.userAgent),
              o = function o(e) {
            (t.setImmediate || t.setTimeout)(function () {
              throw e;
            }, 0);
          },
              a = function a(t) {
            setTimeout(function () {
              "string" == typeof t ? e().revokeObjectURL(t) : t.remove();
            }, 4e4);
          },
              s = function s(t) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
              type: t.type
            }) : t;
          },
              c = function c(_c, l, u) {
            u || (_c = s(_c));

            var h,
                d = this,
                f = "application/octet-stream" === _c.type,
                p = function p() {
              !function (t, e, A) {
                for (var r = (e = [].concat(e)).length; r--;) {
                  var n = t["on" + e[r]];
                  if ("function" == typeof n) try {
                    n.call(t, t);
                  } catch (t) {
                    o(t);
                  }
                }
              }(d, "writestart progress write writeend".split(" "));
            };

            if (d.readyState = d.INIT, r) return h = e().createObjectURL(_c), void setTimeout(function () {
              var t, e;
              A.href = h, A.download = l, t = A, e = new MouseEvent("click"), t.dispatchEvent(e), p(), a(h), d.readyState = d.DONE;
            });
            !function () {
              if ((i || f && n) && t.FileReader) {
                var A = new FileReader();
                return A.onloadend = function () {
                  var e = i ? A.result : A.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  t.open(e, "_blank") || (t.location.href = e), e = void 0, d.readyState = d.DONE, p();
                }, A.readAsDataURL(_c), d.readyState = d.INIT;
              }

              h || (h = e().createObjectURL(_c)), f ? t.location.href = h : t.open(h, "_blank") || (t.location.href = h), d.readyState = d.DONE, p(), a(h);
            }();
          },
              l = c.prototype;

          return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, e, A) {
            return e = e || t.name || "download", A || (t = s(t)), navigator.msSaveOrOpenBlob(t, e);
          } : (l.abort = function () {}, l.readyState = l.INIT = 0, l.WRITING = 1, l.DONE = 2, l.error = l.onwritestart = l.onprogress = l.onwrite = l.onabort = l.onerror = l.onwriteend = null, function (t, e, A) {
            return new c(t, e || t.name || "download", A);
          });
        }
      }("undefined" != typeof self && self || "undefined" != typeof window && window || window.content);

      !!e.exports && (e.exports.saveAs = bt), st.API.adler32cs = (ft = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array, pt = null, gt = function () {
        if (!ft) return function () {
          return !1;
        };

        try {
          var t = {};
          "function" == typeof t.Buffer && (pt = t.Buffer);
        } catch (t) {}

        return function (t) {
          return t instanceof ArrayBuffer || null !== pt && t instanceof pt;
        };
      }(), Bt = null !== pt ? function (t) {
        return new pt(t, "utf8").toString("binary");
      } : function (t) {
        return unescape(encodeURIComponent(t));
      }, wt = 65521, mt = function mt(t, e) {
        for (var A = 65535 & t, r = t >>> 16, n = 0, i = e.length; n < i; n++) {
          A = (A + (255 & e.charCodeAt(n))) % wt, r = (r + A) % wt;
        }

        return (r << 16 | A) >>> 0;
      }, yt = function yt(t, e) {
        for (var A = 65535 & t, r = t >>> 16, n = 0, i = e.length; n < i; n++) {
          A = (A + e[n]) % wt, r = (r + A) % wt;
        }

        return (r << 16 | A) >>> 0;
      }, Qt = (vt = {}).Adler32 = (((dt = (_ht = function ht(t) {
        if (!(this instanceof _ht)) throw new TypeError("Constructor cannot called be as a function.");
        if (!isFinite(t = null == t ? 1 : +t)) throw new Error("First arguments needs to be a finite number.");
        this.checksum = t >>> 0;
      }).prototype = {}).constructor = _ht).from = ((ct = function ct(t) {
        if (!(this instanceof _ht)) throw new TypeError("Constructor cannot called be as a function.");
        if (null == t) throw new Error("First argument needs to be a string.");
        this.checksum = mt(1, t.toString());
      }).prototype = dt, ct), _ht.fromUtf8 = ((lt = function lt(t) {
        if (!(this instanceof _ht)) throw new TypeError("Constructor cannot called be as a function.");
        if (null == t) throw new Error("First argument needs to be a string.");
        var e = Bt(t.toString());
        this.checksum = mt(1, e);
      }).prototype = dt, lt), ft && (_ht.fromBuffer = ((ut = function ut(t) {
        if (!(this instanceof _ht)) throw new TypeError("Constructor cannot called be as a function.");
        if (!gt(t)) throw new Error("First argument needs to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return this.checksum = yt(1, e);
      }).prototype = dt, ut)), dt.update = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        return t = t.toString(), this.checksum = mt(this.checksum, t);
      }, dt.updateUtf8 = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        var e = Bt(t.toString());
        return this.checksum = mt(this.checksum, e);
      }, ft && (dt.updateBuffer = function (t) {
        if (!gt(t)) throw new Error("First argument needs to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return this.checksum = yt(this.checksum, e);
      }), dt.clone = function () {
        return new Qt(this.checksum);
      }, _ht), vt.from = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        return mt(1, t.toString());
      }, vt.fromUtf8 = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        var e = Bt(t.toString());
        return mt(1, e);
      }, ft && (vt.fromBuffer = function (t) {
        if (!gt(t)) throw new Error("First argument need to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return yt(1, e);
      }), vt);

      try {
        A.GifWriter = function (t, e, A, r) {
          function n(t) {
            var e = t.length;
            if (e < 2 || 256 < e || e & e - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
            return e;
          }

          var i = 0,
              o = void 0 === (r = void 0 === r ? {} : r).loop ? null : r.loop,
              a = void 0 === r.palette ? null : r.palette;
          if (e <= 0 || A <= 0 || 65535 < e || 65535 < A) throw "Width/Height invalid.";
          t[i++] = 71, t[i++] = 73, t[i++] = 70, t[i++] = 56, t[i++] = 57, t[i++] = 97;
          var s = 0,
              c = 0;

          if (null !== a) {
            for (var l = n(a); l >>= 1;) {
              ++s;
            }

            if (l = 1 << s, --s, void 0 !== r.background) {
              if (l <= (c = r.background)) throw "Background index out of range.";
              if (0 === c) throw "Background index explicitly passed as 0.";
            }
          }

          if (t[i++] = 255 & e, t[i++] = e >> 8 & 255, t[i++] = 255 & A, t[i++] = A >> 8 & 255, t[i++] = (null !== a ? 128 : 0) | s, t[i++] = c, t[i++] = 0, null !== a) for (var u = 0, h = a.length; u < h; ++u) {
            var d = a[u];
            t[i++] = d >> 16 & 255, t[i++] = d >> 8 & 255, t[i++] = 255 & d;
          }

          if (null !== o) {
            if (o < 0 || 65535 < o) throw "Loop count invalid.";
            t[i++] = 33, t[i++] = 255, t[i++] = 11, t[i++] = 78, t[i++] = 69, t[i++] = 84, t[i++] = 83, t[i++] = 67, t[i++] = 65, t[i++] = 80, t[i++] = 69, t[i++] = 50, t[i++] = 46, t[i++] = 48, t[i++] = 3, t[i++] = 1, t[i++] = 255 & o, t[i++] = o >> 8 & 255, t[i++] = 0;
          }

          var f = !1;
          this.addFrame = function (e, A, r, o, s, c) {
            if (!0 === f && (--i, f = !1), c = void 0 === c ? {} : c, e < 0 || A < 0 || 65535 < e || 65535 < A) throw "x/y invalid.";
            if (r <= 0 || o <= 0 || 65535 < r || 65535 < o) throw "Width/Height invalid.";
            if (s.length < r * o) throw "Not enough pixels for the frame size.";
            var l = !0,
                u = c.palette;
            if (null == u && (l = !1, u = a), null == u) throw "Must supply either a local or global palette.";

            for (var h = n(u), d = 0; h >>= 1;) {
              ++d;
            }

            h = 1 << d;
            var p = void 0 === c.delay ? 0 : c.delay,
                g = void 0 === c.disposal ? 0 : c.disposal;
            if (g < 0 || 3 < g) throw "Disposal out of range.";
            var B = !1,
                w = 0;
            if (void 0 !== c.transparent && null !== c.transparent && (B = !0, (w = c.transparent) < 0 || h <= w)) throw "Transparent color index.";
            if ((0 !== g || B || 0 !== p) && (t[i++] = 33, t[i++] = 249, t[i++] = 4, t[i++] = g << 2 | (!0 === B ? 1 : 0), t[i++] = 255 & p, t[i++] = p >> 8 & 255, t[i++] = w, t[i++] = 0), t[i++] = 44, t[i++] = 255 & e, t[i++] = e >> 8 & 255, t[i++] = 255 & A, t[i++] = A >> 8 & 255, t[i++] = 255 & r, t[i++] = r >> 8 & 255, t[i++] = 255 & o, t[i++] = o >> 8 & 255, t[i++] = !0 === l ? 128 | d - 1 : 0, !0 === l) for (var m = 0, y = u.length; m < y; ++m) {
              var v = u[m];
              t[i++] = v >> 16 & 255, t[i++] = v >> 8 & 255, t[i++] = 255 & v;
            }

            i = function (t, e, A, r) {
              function n(A) {
                for (; A <= h;) {
                  t[e++] = 255 & d, d >>= 8, h -= 8, e === o + 256 && (t[o] = 255, o = e++);
                }
              }

              function i(t) {
                d |= t << h, h += u, n(8);
              }

              t[e++] = A;
              var o = e++,
                  a = 1 << A,
                  s = a - 1,
                  c = a + 1,
                  l = c + 1,
                  u = A + 1,
                  h = 0,
                  d = 0,
                  f = r[0] & s,
                  p = {};
              i(a);

              for (var g = 1, B = r.length; g < B; ++g) {
                var w = r[g] & s,
                    m = f << 8 | w,
                    y = p[m];

                if (void 0 === y) {
                  for (d |= f << h, h += u; 8 <= h;) {
                    t[e++] = 255 & d, d >>= 8, h -= 8, e === o + 256 && (t[o] = 255, o = e++);
                  }

                  4096 === l ? (i(a), l = c + 1, u = A + 1, p = {}) : (1 << u <= l && ++u, p[m] = l++), f = w;
                } else f = y;
              }

              return i(f), i(c), n(1), o + 1 === e ? t[o] = 0 : (t[o] = e - o - 1, t[e++] = 0), e;
            }(t, i, d < 2 ? 2 : d, s);
          }, this.end = function () {
            return !1 === f && (t[i++] = 59, f = !0), i;
          };
        }, A.GifReader = n;
      } catch (s) {}

      try {
        e.exports = o;
      } catch (s) {}

      a.prototype.parseHeader = function () {
        if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
          var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
          this.palette = new Array(t);

          for (var e = 0; e < t; e++) {
            var A = this.datav.getUint8(this.pos++, !0),
                r = this.datav.getUint8(this.pos++, !0),
                n = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0);
            this.palette[e] = {
              red: n,
              green: r,
              blue: A,
              quad: i
            };
          }
        }

        this.height < 0 && (this.height *= -1, this.bottom_up = !1);
      }, a.prototype.parseBGR = function () {
        this.pos = this.offset;

        try {
          var t = "bit" + this.bitPP,
              e = this.width * this.height * 4;
          this.data = new Uint8Array(e), this[t]();
        } catch (t) {
          console.log("bit decode error:" + t);
        }
      }, a.prototype.bit1 = function () {
        var t = Math.ceil(this.width / 8),
            e = t % 4,
            A = 0 <= this.height ? this.height - 1 : -this.height;

        for (A = this.height - 1; 0 <= A; A--) {
          for (var r = this.bottom_up ? A : this.height - 1 - A, n = 0; n < t; n++) {
            for (var i = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 8 * n * 4, a = 0; a < 8 && 8 * n + a < this.width; a++) {
              var s = this.palette[i >> 7 - a & 1];
              this.data[o + 4 * a] = s.blue, this.data[o + 4 * a + 1] = s.green, this.data[o + 4 * a + 2] = s.red, this.data[o + 4 * a + 3] = 255;
            }
          }

          0 != e && (this.pos += 4 - e);
        }
      }, a.prototype.bit4 = function () {
        for (var t = Math.ceil(this.width / 2), e = t % 4, A = this.height - 1; 0 <= A; A--) {
          for (var r = this.bottom_up ? A : this.height - 1 - A, n = 0; n < t; n++) {
            var i = this.datav.getUint8(this.pos++, !0),
                o = r * this.width * 4 + 2 * n * 4,
                a = i >> 4,
                s = 15 & i,
                c = this.palette[a];
            if (this.data[o] = c.blue, this.data[o + 1] = c.green, this.data[o + 2] = c.red, this.data[o + 3] = 255, 2 * n + 1 >= this.width) break;
            c = this.palette[s], this.data[o + 4] = c.blue, this.data[o + 4 + 1] = c.green, this.data[o + 4 + 2] = c.red, this.data[o + 4 + 3] = 255;
          }

          0 != e && (this.pos += 4 - e);
        }
      }, a.prototype.bit8 = function () {
        for (var t = this.width % 4, e = this.height - 1; 0 <= e; e--) {
          for (var A = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
            var n = this.datav.getUint8(this.pos++, !0),
                i = A * this.width * 4 + 4 * r;

            if (n < this.palette.length) {
              var o = this.palette[n];
              this.data[i] = o.red, this.data[i + 1] = o.green, this.data[i + 2] = o.blue, this.data[i + 3] = 255;
            } else this.data[i] = 255, this.data[i + 1] = 255, this.data[i + 2] = 255, this.data[i + 3] = 255;
          }

          0 != t && (this.pos += 4 - t);
        }
      }, a.prototype.bit15 = function () {
        for (var t = this.width % 3, e = parseInt("11111", 2), A = this.height - 1; 0 <= A; A--) {
          for (var r = this.bottom_up ? A : this.height - 1 - A, n = 0; n < this.width; n++) {
            var i = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var o = (i & e) / e * 255 | 0,
                a = (i >> 5 & e) / e * 255 | 0,
                s = (i >> 10 & e) / e * 255 | 0,
                c = i >> 15 ? 255 : 0,
                l = r * this.width * 4 + 4 * n;
            this.data[l] = s, this.data[l + 1] = a, this.data[l + 2] = o, this.data[l + 3] = c;
          }

          this.pos += t;
        }
      }, a.prototype.bit16 = function () {
        for (var t = this.width % 3, e = parseInt("11111", 2), A = parseInt("111111", 2), r = this.height - 1; 0 <= r; r--) {
          for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
            var o = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var a = (o & e) / e * 255 | 0,
                s = (o >> 5 & A) / A * 255 | 0,
                c = (o >> 11) / e * 255 | 0,
                l = n * this.width * 4 + 4 * i;
            this.data[l] = c, this.data[l + 1] = s, this.data[l + 2] = a, this.data[l + 3] = 255;
          }

          this.pos += t;
        }
      }, a.prototype.bit24 = function () {
        for (var t = this.height - 1; 0 <= t; t--) {
          for (var e = this.bottom_up ? t : this.height - 1 - t, A = 0; A < this.width; A++) {
            var r = this.datav.getUint8(this.pos++, !0),
                n = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = e * this.width * 4 + 4 * A;
            this.data[o] = i, this.data[o + 1] = n, this.data[o + 2] = r, this.data[o + 3] = 255;
          }

          this.pos += this.width % 4;
        }
      }, a.prototype.bit32 = function () {
        for (var t = this.height - 1; 0 <= t; t--) {
          for (var e = this.bottom_up ? t : this.height - 1 - t, A = 0; A < this.width; A++) {
            var r = this.datav.getUint8(this.pos++, !0),
                n = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                a = e * this.width * 4 + 4 * A;
            this.data[a] = i, this.data[a + 1] = n, this.data[a + 2] = r, this.data[a + 3] = o;
          }
        }
      }, a.prototype.getData = function () {
        return this.data;
      };

      try {
        e.exports = function (t) {
          var e = new a(t);
          return {
            data: e.getData(),
            width: e.width,
            height: e.height
          };
        };
      } catch (s) {}

      !function (t) {
        function e() {
          function t(t, e) {
            for (var A = 0; A |= 1 & t, t >>>= 1, A <<= 1, 0 < --e;) {
              ;
            }

            return A >>> 1;
          }

          var e = this;

          e.build_tree = function (A) {
            var r,
                n,
                i,
                o = e.dyn_tree,
                c = e.stat_desc.static_tree,
                l = e.stat_desc.elems,
                u = -1;

            for (A.heap_len = 0, A.heap_max = s, r = 0; r < l; r++) {
              0 !== o[2 * r] ? (A.heap[++A.heap_len] = u = r, A.depth[r] = 0) : o[2 * r + 1] = 0;
            }

            for (; A.heap_len < 2;) {
              o[2 * (i = A.heap[++A.heap_len] = u < 2 ? ++u : 0)] = 1, A.depth[i] = 0, A.opt_len--, c && (A.static_len -= c[2 * i + 1]);
            }

            for (e.max_code = u, r = Math.floor(A.heap_len / 2); 1 <= r; r--) {
              A.pqdownheap(o, r);
            }

            for (i = l; r = A.heap[1], A.heap[1] = A.heap[A.heap_len--], A.pqdownheap(o, 1), n = A.heap[1], A.heap[--A.heap_max] = r, A.heap[--A.heap_max] = n, o[2 * i] = o[2 * r] + o[2 * n], A.depth[i] = Math.max(A.depth[r], A.depth[n]) + 1, o[2 * r + 1] = o[2 * n + 1] = i, A.heap[1] = i++, A.pqdownheap(o, 1), 2 <= A.heap_len;) {
              ;
            }

            A.heap[--A.heap_max] = A.heap[1], function (t) {
              var A,
                  r,
                  n,
                  i,
                  o,
                  c,
                  l = e.dyn_tree,
                  u = e.stat_desc.static_tree,
                  h = e.stat_desc.extra_bits,
                  d = e.stat_desc.extra_base,
                  f = e.stat_desc.max_length,
                  p = 0;

              for (i = 0; i <= a; i++) {
                t.bl_count[i] = 0;
              }

              for (l[2 * t.heap[t.heap_max] + 1] = 0, A = t.heap_max + 1; A < s; A++) {
                f < (i = l[2 * l[2 * (r = t.heap[A]) + 1] + 1] + 1) && (i = f, p++), l[2 * r + 1] = i, r > e.max_code || (t.bl_count[i]++, o = 0, d <= r && (o = h[r - d]), c = l[2 * r], t.opt_len += c * (i + o), u && (t.static_len += c * (u[2 * r + 1] + o)));
              }

              if (0 !== p) {
                do {
                  for (i = f - 1; 0 === t.bl_count[i];) {
                    i--;
                  }

                  t.bl_count[i]--, t.bl_count[i + 1] += 2, t.bl_count[f]--, p -= 2;
                } while (0 < p);

                for (i = f; 0 !== i; i--) {
                  for (r = t.bl_count[i]; 0 !== r;) {
                    (n = t.heap[--A]) > e.max_code || (l[2 * n + 1] != i && (t.opt_len += (i - l[2 * n + 1]) * l[2 * n], l[2 * n + 1] = i), r--);
                  }
                }
              }
            }(A), function (e, A, r) {
              var n,
                  i,
                  o,
                  s = [],
                  c = 0;

              for (n = 1; n <= a; n++) {
                s[n] = c = c + r[n - 1] << 1;
              }

              for (i = 0; i <= A; i++) {
                0 !== (o = e[2 * i + 1]) && (e[2 * i] = t(s[o]++, o));
              }
            }(o, e.max_code, A.bl_count);
          };
        }

        function A(t, e, A, r, n) {
          var i = this;
          i.static_tree = t, i.extra_bits = e, i.extra_base = A, i.elems = r, i.max_length = n;
        }

        function r(t, e, A, r, n) {
          var i = this;
          i.good_length = t, i.max_lazy = e, i.nice_length = A, i.max_chain = r, i.func = n;
        }

        function n(t, e, A, r) {
          var n = t[2 * e],
              i = t[2 * A];
          return n < i || n == i && r[e] <= r[A];
        }

        function i() {
          function t() {
            var t;

            for (t = 0; t < 286; t++) {
              Z[2 * t] = 0;
            }

            for (t = 0; t < 30; t++) {
              $[2 * t] = 0;
            }

            for (t = 0; t < 19; t++) {
              tt[2 * t] = 0;
            }

            Z[512] = 1, ct.opt_len = ct.static_len = 0, rt = it = 0;
          }

          function r(t, e) {
            var A,
                r,
                n = -1,
                i = t[1],
                o = 0,
                a = 7,
                s = 4;

            for (0 === i && (a = 138, s = 3), t[2 * (e + 1) + 1] = 65535, A = 0; A <= e; A++) {
              r = i, i = t[2 * (A + 1) + 1], ++o < a && r == i || (o < s ? tt[2 * r] += o : 0 !== r ? (r != n && tt[2 * r]++, tt[32]++) : o <= 10 ? tt[34]++ : tt[36]++, n = r, (o = 0) === i ? (a = 138, s = 3) : r == i ? (a = 6, s = 3) : (a = 7, s = 4));
            }
          }

          function i(t) {
            ct.pending_buf[ct.pending++] = t;
          }

          function o(t) {
            i(255 & t), i(t >>> 8 & 255);
          }

          function a(t, e) {
            var A,
                r = e;
            16 - r < st ? (o(at |= (A = t) << st & 65535), at = A >>> 16 - st, st += r - 16) : (at |= t << st & 65535, st += r);
          }

          function s(t, e) {
            var A = 2 * t;
            a(65535 & e[A], 65535 & e[A + 1]);
          }

          function c(t, e) {
            var A,
                r,
                n = -1,
                i = t[1],
                o = 0,
                c = 7,
                l = 4;

            for (0 === i && (c = 138, l = 3), A = 0; A <= e; A++) {
              if (r = i, i = t[2 * (A + 1) + 1], !(++o < c && r == i)) {
                if (o < l) for (; s(r, tt), 0 != --o;) {
                  ;
                } else 0 !== r ? (r != n && (s(r, tt), o--), s(16, tt), a(o - 3, 2)) : o <= 10 ? (s(17, tt), a(o - 3, 3)) : (s(18, tt), a(o - 11, 7));
                n = r, (o = 0) === i ? (c = 138, l = 3) : r == i ? (c = 6, l = 3) : (c = 7, l = 4);
              }
            }
          }

          function d() {
            16 == st ? (o(at), st = at = 0) : 8 <= st && (i(255 & at), at >>>= 8, st -= 8);
          }

          function f(t, A) {
            var r, n, i;

            if (ct.pending_buf[nt + 2 * rt] = t >>> 8 & 255, ct.pending_buf[nt + 2 * rt + 1] = 255 & t, ct.pending_buf[et + rt] = 255 & A, rt++, 0 === t ? Z[2 * A]++ : (it++, t--, Z[2 * (e._length_code[A] + 256 + 1)]++, $[2 * e.d_code(t)]++), 0 == (8191 & rt) && 2 < G) {
              for (r = 8 * rt, n = K - D, i = 0; i < 30; i++) {
                r += $[2 * i] * (5 + e.extra_dbits[i]);
              }

              if (r >>>= 3, it < Math.floor(rt / 2) && r < Math.floor(n / 2)) return !0;
            }

            return rt == At - 1;
          }

          function p(t, A) {
            var r,
                n,
                i,
                o,
                c = 0;
            if (0 !== rt) for (; r = ct.pending_buf[nt + 2 * c] << 8 & 65280 | 255 & ct.pending_buf[nt + 2 * c + 1], n = 255 & ct.pending_buf[et + c], c++, 0 === r ? s(n, t) : (s((i = e._length_code[n]) + 256 + 1, t), 0 !== (o = e.extra_lbits[i]) && a(n -= e.base_length[i], o), s(i = e.d_code(--r), A), 0 !== (o = e.extra_dbits[i]) && a(r -= e.base_dist[i], o)), c < rt;) {
              ;
            }
            s(256, t), ot = t[513];
          }

          function g() {
            8 < st ? o(at) : 0 < st && i(255 & at), st = at = 0;
          }

          function B(t, e, A) {
            var r, n;
            a(0 + (A ? 1 : 0), 3), r = t, n = e, g(), ot = 8, o(n), o(~n), ct.pending_buf.set(H.subarray(r, r + n), ct.pending), ct.pending += n;
          }

          function w(n) {
            (function (n, i, o) {
              var s,
                  l,
                  u = 0;
              0 < G ? (lt.build_tree(ct), ut.build_tree(ct), u = function () {
                var t;

                for (r(Z, lt.max_code), r($, ut.max_code), ht.build_tree(ct), t = 18; 3 <= t && 0 === tt[2 * e.bl_order[t] + 1]; t--) {
                  ;
                }

                return ct.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
              }(), s = ct.opt_len + 3 + 7 >>> 3, (l = ct.static_len + 3 + 7 >>> 3) <= s && (s = l)) : s = l = i + 5, i + 4 <= s && -1 != n ? B(n, i, o) : l == s ? (a(2 + (o ? 1 : 0), 3), p(A.static_ltree, A.static_dtree)) : (a(4 + (o ? 1 : 0), 3), function (t, A, r) {
                var n;

                for (a(t - 257, 5), a(A - 1, 5), a(r - 4, 4), n = 0; n < r; n++) {
                  a(tt[2 * e.bl_order[n] + 1], 3);
                }

                c(Z, t - 1), c($, A - 1);
              }(lt.max_code + 1, ut.max_code + 1, u + 1), p(Z, $)), t(), o && g();
            })(0 <= D ? D : -1, K - D, n), D = K, Q.flush_pending();
          }

          function m() {
            var t, e, A, r;

            do {
              if (0 == (r = I - q - K) && 0 === K && 0 === q) r = F;else if (-1 == r) r--;else if (F + F - h <= K) {
                for (H.set(H.subarray(F, F + F), 0), z -= F, K -= F, D -= F, A = t = N; e = 65535 & _[--A], _[A] = F <= e ? e - F : 0, 0 != --t;) {
                  ;
                }

                for (A = t = F; e = 65535 & S[--A], S[A] = F <= e ? e - F : 0, 0 != --t;) {
                  ;
                }

                r += F;
              }
              if (0 === Q.avail_in) return;
              t = Q.read_buf(H, K + q, r), 3 <= (q += t) && (T = ((T = 255 & H[K]) << P ^ 255 & H[K + 1]) & O);
            } while (q < h && 0 !== Q.avail_in);
          }

          function y(t) {
            var e,
                A,
                r = X,
                n = K,
                i = j,
                o = F - h < K ? K - (F - h) : 0,
                a = J,
                s = x,
                c = K + 258,
                l = H[n + i - 1],
                u = H[n + i];
            Y <= j && (r >>= 2), q < a && (a = q);

            do {
              if (H[(e = t) + i] == u && H[e + i - 1] == l && H[e] == H[n] && H[++e] == H[n + 1]) {
                n += 2, e++;

                do {} while (H[++n] == H[++e] && H[++n] == H[++e] && H[++n] == H[++e] && H[++n] == H[++e] && H[++n] == H[++e] && H[++n] == H[++e] && H[++n] == H[++e] && H[++n] == H[++e] && n < c);

                if (A = 258 - (c - n), n = c - 258, i < A) {
                  if (z = t, a <= (i = A)) break;
                  l = H[n + i - 1], u = H[n + i];
                }
              }
            } while ((t = 65535 & S[t & s]) > o && 0 != --r);

            return i <= q ? i : q;
          }

          function v(e) {
            return e.total_in = e.total_out = 0, e.msg = null, ct.pending = 0, ct.pending_out = 0, C = 113, b = 0, lt.dyn_tree = Z, lt.stat_desc = A.static_l_desc, ut.dyn_tree = $, ut.stat_desc = A.static_d_desc, ht.dyn_tree = tt, ht.stat_desc = A.static_bl_desc, st = at = 0, ot = 8, t(), function () {
              var t;

              for (I = 2 * F, t = _[N - 1] = 0; t < N - 1; t++) {
                _[t] = 0;
              }

              V = l[G].max_lazy, Y = l[G].good_length, J = l[G].nice_length, X = l[G].max_chain, L = j = 2, T = M = q = D = K = 0;
            }(), 0;
          }

          var Q,
              C,
              U,
              b,
              F,
              E,
              x,
              H,
              I,
              S,
              _,
              T,
              N,
              k,
              O,
              P,
              D,
              L,
              R,
              M,
              K,
              z,
              q,
              j,
              X,
              V,
              G,
              W,
              Y,
              J,
              Z,
              $,
              tt,
              et,
              At,
              rt,
              nt,
              it,
              ot,
              at,
              st,
              ct = this,
              lt = new e(),
              ut = new e(),
              ht = new e();

          ct.depth = [], ct.bl_count = [], ct.heap = [], Z = [], $ = [], tt = [], ct.pqdownheap = function (t, e) {
            for (var A = ct.heap, r = A[e], i = e << 1; i <= ct.heap_len && (i < ct.heap_len && n(t, A[i + 1], A[i], ct.depth) && i++, !n(t, r, A[i], ct.depth));) {
              A[e] = A[i], e = i, i <<= 1;
            }

            A[e] = r;
          }, ct.deflateInit = function (t, e, A, r, n, i) {
            return r || (r = 8), n || (n = 8), i || (i = 0), t.msg = null, -1 == e && (e = 6), n < 1 || 9 < n || 8 != r || A < 9 || 15 < A || e < 0 || 9 < e || i < 0 || 2 < i ? -2 : (t.dstate = ct, x = (F = 1 << (E = A)) - 1, O = (N = 1 << (k = n + 7)) - 1, P = Math.floor((k + 3 - 1) / 3), H = new Uint8Array(2 * F), S = [], _ = [], At = 1 << n + 6, ct.pending_buf = new Uint8Array(4 * At), U = 4 * At, nt = Math.floor(At / 2), et = 3 * At, G = e, W = i, v(t));
          }, ct.deflateEnd = function () {
            return 42 != C && 113 != C && 666 != C ? -2 : (ct.pending_buf = null, H = S = _ = null, ct.dstate = null, 113 == C ? -3 : 0);
          }, ct.deflateParams = function (t, e, A) {
            var r = 0;
            return -1 == e && (e = 6), e < 0 || 9 < e || A < 0 || 2 < A ? -2 : (l[G].func != l[e].func && 0 !== t.total_in && (r = t.deflate(1)), G != e && (V = l[G = e].max_lazy, Y = l[G].good_length, J = l[G].nice_length, X = l[G].max_chain), W = A, r);
          }, ct.deflateSetDictionary = function (t, e, A) {
            var r,
                n = A,
                i = 0;
            if (!e || 42 != C) return -2;
            if (n < 3) return 0;

            for (F - h < n && (i = A - (n = F - h)), H.set(e.subarray(i, i + n), 0), D = K = n, T = ((T = 255 & H[0]) << P ^ 255 & H[1]) & O, r = 0; r <= n - 3; r++) {
              T = (T << P ^ 255 & H[r + 2]) & O, S[r & x] = _[T], _[T] = r;
            }

            return 0;
          }, ct.deflate = function (t, e) {
            var r, n, o, c, p, g;
            if (4 < e || e < 0) return -2;
            if (!t.next_out || !t.next_in && 0 !== t.avail_in || 666 == C && 4 != e) return t.msg = u[4], -2;
            if (0 === t.avail_out) return t.msg = u[7], -5;

            if (Q = t, c = b, b = e, 42 == C && (n = 8 + (E - 8 << 4) << 8, 3 < (o = (G - 1 & 255) >> 1) && (o = 3), n |= o << 6, 0 !== K && (n |= 32), C = 113, i((g = n += 31 - n % 31) >> 8 & 255), i(255 & g)), 0 !== ct.pending) {
              if (Q.flush_pending(), 0 === Q.avail_out) return b = -1, 0;
            } else if (0 === Q.avail_in && e <= c && 4 != e) return Q.msg = u[7], -5;

            if (666 == C && 0 !== Q.avail_in) return t.msg = u[7], -5;

            if (0 !== Q.avail_in || 0 !== q || 0 != e && 666 != C) {
              switch (p = -1, l[G].func) {
                case 0:
                  p = function (t) {
                    var e,
                        A = 65535;

                    for (U - 5 < A && (A = U - 5);;) {
                      if (q <= 1) {
                        if (m(), 0 === q && 0 == t) return 0;
                        if (0 === q) break;
                      }

                      if (K += q, e = D + A, ((q = 0) === K || e <= K) && (q = K - e, K = e, w(!1), 0 === Q.avail_out)) return 0;
                      if (F - h <= K - D && (w(!1), 0 === Q.avail_out)) return 0;
                    }

                    return w(4 == t), 0 === Q.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1;
                  }(e);

                  break;

                case 1:
                  p = function (t) {
                    for (var e, A = 0;;) {
                      if (q < h) {
                        if (m(), q < h && 0 == t) return 0;
                        if (0 === q) break;
                      }

                      if (3 <= q && (T = (T << P ^ 255 & H[K + 2]) & O, A = 65535 & _[T], S[K & x] = _[T], _[T] = K), 0 !== A && (K - A & 65535) <= F - h && 2 != W && (L = y(A)), 3 <= L) {
                        if (e = f(K - z, L - 3), q -= L, L <= V && 3 <= q) {
                          for (L--; T = (T << P ^ 255 & H[++K + 2]) & O, A = 65535 & _[T], S[K & x] = _[T], _[T] = K, 0 != --L;) {
                            ;
                          }

                          K++;
                        } else K += L, L = 0, T = ((T = 255 & H[K]) << P ^ 255 & H[K + 1]) & O;
                      } else e = f(0, 255 & H[K]), q--, K++;
                      if (e && (w(!1), 0 === Q.avail_out)) return 0;
                    }

                    return w(4 == t), 0 === Q.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1;
                  }(e);

                  break;

                case 2:
                  p = function (t) {
                    for (var e, A, r = 0;;) {
                      if (q < h) {
                        if (m(), q < h && 0 == t) return 0;
                        if (0 === q) break;
                      }

                      if (3 <= q && (T = (T << P ^ 255 & H[K + 2]) & O, r = 65535 & _[T], S[K & x] = _[T], _[T] = K), j = L, R = z, L = 2, 0 !== r && j < V && (K - r & 65535) <= F - h && (2 != W && (L = y(r)), L <= 5 && (1 == W || 3 == L && 4096 < K - z) && (L = 2)), 3 <= j && L <= j) {
                        for (A = K + q - 3, e = f(K - 1 - R, j - 3), q -= j - 1, j -= 2; ++K <= A && (T = (T << P ^ 255 & H[K + 2]) & O, r = 65535 & _[T], S[K & x] = _[T], _[T] = K), 0 != --j;) {
                          ;
                        }

                        if (M = 0, L = 2, K++, e && (w(!1), 0 === Q.avail_out)) return 0;
                      } else if (0 !== M) {
                        if ((e = f(0, 255 & H[K - 1])) && w(!1), K++, q--, 0 === Q.avail_out) return 0;
                      } else M = 1, K++, q--;
                    }

                    return 0 !== M && (e = f(0, 255 & H[K - 1]), M = 0), w(4 == t), 0 === Q.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1;
                  }(e);

              }

              if (2 != p && 3 != p || (C = 666), 0 == p || 2 == p) return 0 === Q.avail_out && (b = -1), 0;

              if (1 == p) {
                if (1 == e) a(2, 3), s(256, A.static_ltree), d(), 1 + ot + 10 - st < 9 && (a(2, 3), s(256, A.static_ltree), d()), ot = 7;else if (B(0, 0, !1), 3 == e) for (r = 0; r < N; r++) {
                  _[r] = 0;
                }
                if (Q.flush_pending(), 0 === Q.avail_out) return b = -1, 0;
              }
            }

            return 4 != e ? 0 : 1;
          };
        }

        function o() {
          var t = this;
          t.next_in_index = 0, t.next_out_index = 0, t.avail_in = 0, t.total_in = 0, t.avail_out = 0, t.total_out = 0;
        }

        var a = 15,
            s = 573,
            c = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
        e._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], e.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], e.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], e.d_code = function (t) {
          return t < 256 ? c[t] : c[256 + (t >>> 7)];
        }, e.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], e.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], e.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], e.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], A.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], A.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], A.static_l_desc = new A(A.static_ltree, e.extra_lbits, 257, 286, a), A.static_d_desc = new A(A.static_dtree, e.extra_dbits, 0, 30, a), A.static_bl_desc = new A(null, e.extra_blbits, 0, 19, 7);
        var l = [new r(0, 0, 0, 0, 0), new r(4, 4, 8, 4, 1), new r(4, 5, 16, 8, 1), new r(4, 6, 32, 32, 1), new r(4, 4, 16, 16, 2), new r(8, 16, 32, 32, 2), new r(8, 16, 128, 128, 2), new r(8, 32, 128, 256, 2), new r(32, 128, 258, 1024, 2), new r(32, 258, 258, 4096, 2)],
            u = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
            h = 262;
        o.prototype = {
          deflateInit: function deflateInit(t, e) {
            return this.dstate = new i(), e || (e = a), this.dstate.deflateInit(this, t, e);
          },
          deflate: function deflate(t) {
            return this.dstate ? this.dstate.deflate(this, t) : -2;
          },
          deflateEnd: function deflateEnd() {
            if (!this.dstate) return -2;
            var t = this.dstate.deflateEnd();
            return this.dstate = null, t;
          },
          deflateParams: function deflateParams(t, e) {
            return this.dstate ? this.dstate.deflateParams(this, t, e) : -2;
          },
          deflateSetDictionary: function deflateSetDictionary(t, e) {
            return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2;
          },
          read_buf: function read_buf(t, e, A) {
            var r = this,
                n = r.avail_in;
            return A < n && (n = A), 0 === n ? 0 : (r.avail_in -= n, t.set(r.next_in.subarray(r.next_in_index, r.next_in_index + n), e), r.next_in_index += n, r.total_in += n, n);
          },
          flush_pending: function flush_pending() {
            var t = this,
                e = t.dstate.pending;
            e > t.avail_out && (e = t.avail_out), 0 !== e && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index), t.next_out_index += e, t.dstate.pending_out += e, t.total_out += e, t.avail_out -= e, t.dstate.pending -= e, 0 === t.dstate.pending && (t.dstate.pending_out = 0));
          }
        };
        var d = t.zip || t;

        d.Deflater = d._jzlib_Deflater = function (t) {
          var e = new o(),
              A = new Uint8Array(512),
              r = t ? t.level : -1;
          void 0 === r && (r = -1), e.deflateInit(r), e.next_out = A, this.append = function (t, r) {
            var n,
                i = [],
                o = 0,
                a = 0,
                s = 0;

            if (t.length) {
              e.next_in_index = 0, e.next_in = t, e.avail_in = t.length;

              do {
                if (e.next_out_index = 0, e.avail_out = 512, 0 != e.deflate(0)) throw new Error("deflating: " + e.msg);
                e.next_out_index && (512 == e.next_out_index ? i.push(new Uint8Array(A)) : i.push(new Uint8Array(A.subarray(0, e.next_out_index)))), s += e.next_out_index, r && 0 < e.next_in_index && e.next_in_index != o && (r(e.next_in_index), o = e.next_in_index);
              } while (0 < e.avail_in || 0 === e.avail_out);

              return n = new Uint8Array(s), i.forEach(function (t) {
                n.set(t, a), a += t.length;
              }), n;
            }
          }, this.flush = function () {
            var t,
                r,
                n = [],
                i = 0,
                o = 0;

            do {
              if (e.next_out_index = 0, e.avail_out = 512, 1 != (t = e.deflate(4)) && 0 != t) throw new Error("deflating: " + e.msg);
              0 < 512 - e.avail_out && n.push(new Uint8Array(A.subarray(0, e.next_out_index))), o += e.next_out_index;
            } while (0 < e.avail_in || 0 === e.avail_out);

            return e.deflateEnd(), r = new Uint8Array(o), n.forEach(function (t) {
              r.set(t, i), i += t.length;
            }), r;
          };
        };
      }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()), function (t) {
        function A(t) {
          var e;
          this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = (t = t.replace(/ /g, "")).toLowerCase();
          var r = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dodgerblue: "1e90ff",
            feldspar: "d19275",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslateblue: "8470ff",
            lightslategray: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            violetred: "d02090",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
          };

          for (var n in r) {
            t == n && (t = r[n]);
          }

          for (var i = [{
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function process(t) {
              return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
            }
          }, {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ["#00ff00", "336699"],
            process: function process(t) {
              return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
            }
          }, {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ["#fb0", "f0f"],
            process: function process(t) {
              return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
            }
          }], o = 0; o < i.length; o++) {
            var a = i[o].re,
                s = i[o].process,
                c = a.exec(t);
            c && (e = s(c), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
          }

          this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }, this.toHex = function () {
            var t = this.r.toString(16),
                e = this.g.toString(16),
                A = this.b.toString(16);
            return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == A.length && (A = "0" + A), "#" + t + e + A;
          }, this.getHelpXML = function () {
            for (var t = new Array(), e = 0; e < i.length; e++) {
              for (var n = i[e].example, o = 0; o < n.length; o++) {
                t[t.length] = n[o];
              }
            }

            for (var a in r) {
              t[t.length] = a;
            }

            var s = document.createElement("ul");

            for (s.setAttribute("id", "rgbcolor-examples"), e = 0; e < t.length; e++) {
              try {
                var c = document.createElement("li"),
                    l = new A(t[e]),
                    u = document.createElement("div");
                u.style.cssText = "margin: 3px; border: 1px solid black; background:" + l.toHex() + "; color:" + l.toHex(), u.appendChild(document.createTextNode("test"));
                var h = document.createTextNode(" " + t[e] + " -> " + l.toRGB() + " -> " + l.toHex());
                c.appendChild(u), c.appendChild(h), s.appendChild(c);
              } catch (t) {}
            }

            return s;
          };
        }

        e.exports && (e.exports = A), t.RGBColor = A;
      }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()), e.exports = function e(A, r, n) {
        function i(a, s) {
          if (!r[a]) {
            if (!A[a]) {
              var c = "function" == typeof t && t;
              if (!s && c) return c(a, !0);
              if (o) return o(a, !0);
              var l = new Error("Cannot find module '" + a + "'");
              throw l.code = "MODULE_NOT_FOUND", l;
            }

            var u = r[a] = {
              exports: {}
            };
            A[a][0].call(u.exports, function (t) {
              return i(A[a][1][t] || t);
            }, u, u.exports, e, A, r, n);
          }

          return r[a].exports;
        }

        for (var o = "function" == typeof t && t, a = 0; a < n.length; a++) {
          i(n[a]);
        }

        return i;
      }({
        1: [function (t, e, A) {
          (function (t) {
            !function (r) {
              function n(t) {
                throw RangeError(I[t]);
              }

              function i(t, e) {
                for (var A = t.length; A--;) {
                  t[A] = e(t[A]);
                }

                return t;
              }

              function o(t, e) {
                return i(t.split(H), e).join(".");
              }

              function a(t) {
                for (var e, A, r = [], n = 0, i = t.length; n < i;) {
                  55296 <= (e = t.charCodeAt(n++)) && e <= 56319 && n < i ? 56320 == (64512 & (A = t.charCodeAt(n++))) ? r.push(((1023 & e) << 10) + (1023 & A) + 65536) : (r.push(e), n--) : r.push(e);
                }

                return r;
              }

              function s(t) {
                return i(t, function (t) {
                  var e = "";
                  return 65535 < t && (e += T((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += T(t);
                }).join("");
              }

              function c(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
              }

              function l(t, e, A) {
                var r = 0;

                for (t = A ? _(t / C) : t >> 1, t += _(t / e); S * v >> 1 < t; r += m) {
                  t = _(t / S);
                }

                return _(r + (S + 1) * t / (t + Q));
              }

              function u(t) {
                var e,
                    A,
                    r,
                    i,
                    o,
                    a,
                    c,
                    u,
                    h,
                    d,
                    f,
                    p = [],
                    g = t.length,
                    B = 0,
                    Q = b,
                    C = U;

                for ((A = t.lastIndexOf(F)) < 0 && (A = 0), r = 0; r < A; ++r) {
                  128 <= t.charCodeAt(r) && n("not-basic"), p.push(t.charCodeAt(r));
                }

                for (i = 0 < A ? A + 1 : 0; i < g;) {
                  for (o = B, a = 1, c = m; g <= i && n("invalid-input"), f = t.charCodeAt(i++), (m <= (u = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : m) || u > _((w - B) / a)) && n("overflow"), B += u * a, !(u < (h = c <= C ? y : C + v <= c ? v : c - C)); c += m) {
                    a > _(w / (d = m - h)) && n("overflow"), a *= d;
                  }

                  C = l(B - o, e = p.length + 1, 0 == o), _(B / e) > w - Q && n("overflow"), Q += _(B / e), B %= e, p.splice(B++, 0, Q);
                }

                return s(p);
              }

              function h(t) {
                var e,
                    A,
                    r,
                    i,
                    o,
                    s,
                    u,
                    h,
                    d,
                    f,
                    p,
                    g,
                    B,
                    Q,
                    C,
                    E = [];

                for (g = (t = a(t)).length, e = b, o = U, s = A = 0; s < g; ++s) {
                  (p = t[s]) < 128 && E.push(T(p));
                }

                for (r = i = E.length, i && E.push(F); r < g;) {
                  for (u = w, s = 0; s < g; ++s) {
                    e <= (p = t[s]) && p < u && (u = p);
                  }

                  for (u - e > _((w - A) / (B = r + 1)) && n("overflow"), A += (u - e) * B, e = u, s = 0; s < g; ++s) {
                    if ((p = t[s]) < e && ++A > w && n("overflow"), p == e) {
                      for (h = A, d = m; !(h < (f = d <= o ? y : o + v <= d ? v : d - o)); d += m) {
                        C = h - f, Q = m - f, E.push(T(c(f + C % Q, 0))), h = _(C / Q);
                      }

                      E.push(T(c(h, 0))), o = l(A, B, r == i), A = 0, ++r;
                    }
                  }

                  ++A, ++e;
                }

                return E.join("");
              }

              var d = "object" == _typeof(A) && A,
                  f = "object" == _typeof(e) && e && e.exports == d && e,
                  p = "object" == _typeof(t) && t;
              p.global !== p && p.window !== p || (r = p);
              var g,
                  B,
                  w = 2147483647,
                  m = 36,
                  y = 1,
                  v = 26,
                  Q = 38,
                  C = 700,
                  U = 72,
                  b = 128,
                  F = "-",
                  E = /^xn--/,
                  x = /[^ -~]/,
                  H = /\x2E|\u3002|\uFF0E|\uFF61/g,
                  I = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              },
                  S = m - y,
                  _ = Math.floor,
                  T = String.fromCharCode;
              if (g = {
                version: "1.2.4",
                ucs2: {
                  decode: a,
                  encode: s
                },
                decode: u,
                encode: h,
                toASCII: function toASCII(t) {
                  return o(t, function (t) {
                    return x.test(t) ? "xn--" + h(t) : t;
                  });
                },
                toUnicode: function toUnicode(t) {
                  return o(t, function (t) {
                    return E.test(t) ? u(t.slice(4).toLowerCase()) : t;
                  });
                }
              }, d && !d.nodeType) {
                if (f) f.exports = g;else for (B in g) {
                  g.hasOwnProperty(B) && (d[B] = g[B]);
                }
              } else r.punycode = g;
            }(this);
          }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}],
        2: [function (t, e, A) {
          function r(t, e) {
            for (var A = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i;) {
              !0 !== e && 1 === i.nodeType && "SCRIPT" === i.nodeName || A.appendChild(r(i, e)), i = i.nextSibling;
            }

            return 1 === t.nodeType && (A._scrollTop = t.scrollTop, A._scrollLeft = t.scrollLeft, "CANVAS" === t.nodeName ? function (t, e) {
              try {
                e && (e.width = t.width, e.height = t.height, e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0));
              } catch (e) {
                n("Unable to copy canvas content from", t, e);
              }
            }(t, A) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (A.value = t.value)), A;
          }

          var n = t("./log");

          e.exports = function (t, e, A, n, i, o, a) {
            var s = r(t.documentElement, i.javascriptEnabled),
                c = e.createElement("iframe");
            return c.className = "html2canvas-container", c.style.visibility = "hidden", c.style.position = "fixed", c.style.left = "-10000px", c.style.top = "0px", c.style.border = "0", c.width = A, c.height = n, c.scrolling = "no", e.body.appendChild(c), new Promise(function (e) {
              var A,
                  r,
                  n,
                  l = c.contentWindow.document;
              c.contentWindow.onload = c.onload = function () {
                var t = setInterval(function () {
                  0 < l.body.childNodes.length && (function t(e) {
                    if (1 === e.nodeType) {
                      e.scrollTop = e._scrollTop, e.scrollLeft = e._scrollLeft;

                      for (var A = e.firstChild; A;) {
                        t(A), A = A.nextSibling;
                      }
                    }
                  }(l.documentElement), clearInterval(t), "view" === i.type && (c.contentWindow.scrollTo(o, a), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || c.contentWindow.scrollY === a && c.contentWindow.scrollX === o || (l.documentElement.style.top = -a + "px", l.documentElement.style.left = -o + "px", l.documentElement.style.position = "absolute")), e(c));
                }, 50);
              }, l.open(), l.write("<!DOCTYPE html><html></html>"), r = o, n = a, !(A = t).defaultView || r === A.defaultView.pageXOffset && n === A.defaultView.pageYOffset || A.defaultView.scrollTo(r, n), l.replaceChild(l.adoptNode(s), l.documentElement), l.close();
            });
          };
        }, {
          "./log": 13
        }],
        3: [function (t, e, A) {
          function r(t) {
            this.r = 0, this.g = 0, this.b = 0, this.a = null, this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t);
          }

          r.prototype.darken = function (t) {
            var e = 1 - t;
            return new r([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a]);
          }, r.prototype.isTransparent = function () {
            return 0 === this.a;
          }, r.prototype.isBlack = function () {
            return 0 === this.r && 0 === this.g && 0 === this.b;
          }, r.prototype.fromArray = function (t) {
            return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), 3 < t.length && (this.a = t[3])), Array.isArray(t);
          };
          var n = /^#([a-f0-9]{3})$/i;

          r.prototype.hex3 = function (t) {
            var e;
            return null !== (e = t.match(n)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)), null !== e;
          };

          var i = /^#([a-f0-9]{6})$/i;

          r.prototype.hex6 = function (t) {
            var e = null;
            return null !== (e = t.match(i)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)), null !== e;
          };

          var o = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

          r.prototype.rgb = function (t) {
            var e;
            return null !== (e = t.match(o)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])), null !== e;
          };

          var a = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
          r.prototype.rgba = function (t) {
            var e;
            return null !== (e = t.match(a)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])), null !== e;
          }, r.prototype.toString = function () {
            return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")";
          }, r.prototype.namedColor = function (t) {
            t = t.toLowerCase();
            var e = s[t];
            if (e) this.r = e[0], this.g = e[1], this.b = e[2];else if ("transparent" === t) return this.r = this.g = this.b = this.a = 0, !0;
            return !!e;
          }, r.prototype.isColor = !0;
          var s = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          };
          e.exports = r;
        }, {}],
        4: [function (t, e, A) {
          function r(t, e) {
            var A,
                r,
                i = B++;

            if ((e = e || {}).logging && (u.options.logging = !0, u.options.start = Date.now()), e.async = void 0 === e.async || e.async, e.allowTaint = void 0 !== e.allowTaint && e.allowTaint, e.removeContainer = void 0 === e.removeContainer || e.removeContainer, e.javascriptEnabled = void 0 !== e.javascriptEnabled && e.javascriptEnabled, e.imageTimeout = void 0 === e.imageTimeout ? 1e4 : e.imageTimeout, e.renderer = "function" == typeof e.renderer ? e.renderer : a, e.strict = !!e.strict, "string" == typeof t) {
              if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
              var o = null != e.width ? e.width : window.innerWidth,
                  s = null != e.height ? e.height : window.innerHeight;
              return f((A = t, r = document.createElement("a"), r.href = A, r.href = r.href, r), e.proxy, document, o, s, e).then(function (t) {
                return n(t.contentWindow.document.documentElement, t, e, o, s);
              });
            }

            var c,
                l,
                h,
                p,
                w,
                m = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
            return m.setAttribute(g + i, i), (c = m.ownerDocument, l = e, h = m.ownerDocument.defaultView.innerWidth, p = m.ownerDocument.defaultView.innerHeight, w = i, d(c, c, h, p, l, c.defaultView.pageXOffset, c.defaultView.pageYOffset).then(function (t) {
              u("Document cloned");
              var e = g + w,
                  A = "[" + e + "='" + w + "']";
              c.querySelector(A).removeAttribute(e);
              var r = t.contentWindow,
                  i = r.document.querySelector(A);
              return ("function" == typeof l.onclone ? Promise.resolve(l.onclone(r.document)) : Promise.resolve(!0)).then(function () {
                return n(i, t, l, h, p);
              });
            })).then(function (t) {
              return "function" == typeof e.onrendered && (u("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)), t;
            });
          }

          function n(t, e, A, r, n) {
            var a,
                l,
                h = e.contentWindow,
                d = new o(h.document),
                f = new s(A, d),
                g = p(t),
                B = "view" === A.type ? r : (a = h.document, Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth))),
                w = "view" === A.type ? n : (l = h.document, Math.max(Math.max(l.body.scrollHeight, l.documentElement.scrollHeight), Math.max(l.body.offsetHeight, l.documentElement.offsetHeight), Math.max(l.body.clientHeight, l.documentElement.clientHeight))),
                m = new A.renderer(B, w, f, A, document);
            return new c(t, m, d, f, A).ready.then(function () {
              var r, n;
              return u("Finished rendering"), r = "view" === A.type ? i(m.canvas, {
                width: m.canvas.width,
                height: m.canvas.height,
                top: 0,
                left: 0,
                x: 0,
                y: 0
              }) : t === h.document.body || t === h.document.documentElement || null != A.canvas ? m.canvas : i(m.canvas, {
                width: null != A.width ? A.width : g.width,
                height: null != A.height ? A.height : g.height,
                top: g.top,
                left: g.left,
                x: 0,
                y: 0
              }), n = e, A.removeContainer && (n.parentNode.removeChild(n), u("Cleaned up container")), r;
            });
          }

          function i(t, e) {
            var A = document.createElement("canvas"),
                r = Math.min(t.width - 1, Math.max(0, e.left)),
                n = Math.min(t.width, Math.max(1, e.left + e.width)),
                i = Math.min(t.height - 1, Math.max(0, e.top)),
                o = Math.min(t.height, Math.max(1, e.top + e.height));
            A.width = e.width, A.height = e.height;
            var a = n - r,
                s = o - i;
            return u("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", a, "height:", s), u("Resulting crop with width", e.width, "and height", e.height, "with x", r, "and y", i), A.getContext("2d").drawImage(t, r, i, a, s, e.x, e.y, a, s), A;
          }

          var o = t("./support"),
              a = t("./renderers/canvas"),
              s = t("./imageloader"),
              c = t("./nodeparser"),
              l = t("./nodecontainer"),
              u = t("./log"),
              h = t("./utils"),
              d = t("./clone"),
              f = t("./proxy").loadUrlDocument,
              p = h.getBounds,
              g = "data-html2canvas-node",
              B = 0;
          r.CanvasRenderer = a, r.NodeContainer = l, r.log = u, r.utils = h;
          var w = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function () {
            return Promise.reject("No canvas support");
          } : r;
          e.exports = w;
        }, {
          "./clone": 2,
          "./imageloader": 11,
          "./log": 13,
          "./nodecontainer": 14,
          "./nodeparser": 15,
          "./proxy": 16,
          "./renderers/canvas": 20,
          "./support": 22,
          "./utils": 26
        }],
        5: [function (t, e, A) {
          var r = t("./log"),
              n = t("./utils").smallImage;

          e.exports = function t(e) {
            if (this.src = e, r("DummyImageContainer for", e), !this.promise || !this.image) {
              r("Initiating DummyImageContainer"), t.prototype.image = new Image();
              var A = this.image;
              t.prototype.promise = new Promise(function (t, e) {
                A.onload = t, A.onerror = e, A.src = n(), !0 === A.complete && t(A);
              });
            }
          };
        }, {
          "./log": 13,
          "./utils": 26
        }],
        6: [function (t, e, A) {
          var r = t("./utils").smallImage;

          e.exports = function (t, e) {
            var A,
                n,
                i = document.createElement("div"),
                o = document.createElement("img"),
                a = document.createElement("span"),
                s = "Hidden Text";
            i.style.visibility = "hidden", i.style.fontFamily = t, i.style.fontSize = e, i.style.margin = 0, i.style.padding = 0, document.body.appendChild(i), o.src = r(), o.width = 1, o.height = 1, o.style.margin = 0, o.style.padding = 0, o.style.verticalAlign = "baseline", a.style.fontFamily = t, a.style.fontSize = e, a.style.margin = 0, a.style.padding = 0, a.appendChild(document.createTextNode(s)), i.appendChild(a), i.appendChild(o), A = o.offsetTop - a.offsetTop + 1, i.removeChild(a), i.appendChild(document.createTextNode(s)), i.style.lineHeight = "normal", o.style.verticalAlign = "super", n = o.offsetTop - i.offsetTop + 1, document.body.removeChild(i), this.baseline = A, this.lineWidth = 1, this.middle = n;
          };
        }, {
          "./utils": 26
        }],
        7: [function (t, e, A) {
          function r() {
            this.data = {};
          }

          var n = t("./font");
          r.prototype.getMetrics = function (t, e) {
            return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new n(t, e)), this.data[t + "-" + e];
          }, e.exports = r;
        }, {
          "./font": 6
        }],
        8: [function (t, e, A) {
          function r(e, A, r) {
            this.image = null, this.src = e;
            var i = this,
                o = n(e);
            this.promise = (A ? new Promise(function (t) {
              "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function () {
                t(e);
              } : t(e);
            }) : this.proxyLoad(r.proxy, o, r)).then(function (e) {
              return t("./core")(e.contentWindow.document.documentElement, {
                type: "view",
                width: e.width,
                height: e.height,
                proxy: r.proxy,
                javascriptEnabled: r.javascriptEnabled,
                removeContainer: r.removeContainer,
                allowTaint: r.allowTaint,
                imageTimeout: r.imageTimeout / 2
              });
            }).then(function (t) {
              return i.image = t;
            });
          }

          var n = t("./utils").getBounds,
              i = t("./proxy").loadUrlDocument;
          r.prototype.proxyLoad = function (t, e, A) {
            var r = this.src;
            return i(r.src, t, r.ownerDocument, e.width, e.height, A);
          }, e.exports = r;
        }, {
          "./core": 4,
          "./proxy": 16,
          "./utils": 26
        }],
        9: [function (t, e, A) {
          function r(t) {
            this.src = t.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0);
          }

          r.TYPES = {
            LINEAR: 1,
            RADIAL: 2
          }, r.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, e.exports = r;
        }, {}],
        10: [function (t, e, A) {
          e.exports = function (t, e) {
            this.src = t, this.image = new Image();
            var A = this;
            this.tainted = null, this.promise = new Promise(function (r, n) {
              A.image.onload = r, A.image.onerror = n, e && (A.image.crossOrigin = "anonymous"), A.image.src = t, !0 === A.image.complete && r(A.image);
            });
          };
        }, {}],
        11: [function (t, e, A) {
          function r(t, e) {
            this.link = null, this.options = t, this.support = e, this.origin = this.getOrigin(window.location.href);
          }

          var n = t("./log"),
              i = t("./imagecontainer"),
              o = t("./dummyimagecontainer"),
              a = t("./proxyimagecontainer"),
              s = t("./framecontainer"),
              c = t("./svgcontainer"),
              l = t("./svgnodecontainer"),
              u = t("./lineargradientcontainer"),
              h = t("./webkitgradientcontainer"),
              d = t("./utils").bind;
          r.prototype.findImages = function (t) {
            var e = [];
            return t.reduce(function (t, e) {
              switch (e.node.nodeName) {
                case "IMG":
                  return t.concat([{
                    args: [e.node.src],
                    method: "url"
                  }]);

                case "svg":
                case "IFRAME":
                  return t.concat([{
                    args: [e.node],
                    method: e.node.nodeName
                  }]);
              }

              return t;
            }, []).forEach(this.addImage(e, this.loadImage), this), e;
          }, r.prototype.findBackgroundImage = function (t, e) {
            return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t;
          }, r.prototype.addImage = function (t, e) {
            return function (A) {
              A.args.forEach(function (r) {
                this.imageExists(t, r) || (t.splice(0, 0, e.call(this, A)), n("Added image #" + t.length, "string" == typeof r ? r.substring(0, 100) : r));
              }, this);
            };
          }, r.prototype.hasImageBackground = function (t) {
            return "none" !== t.method;
          }, r.prototype.loadImage = function (t) {
            if ("url" === t.method) {
              var e = t.args[0];
              return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new i(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(e) || !0 === this.options.allowTaint || this.isSVG(e) ? new i(e, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new i(e, !0) : this.options.proxy ? new a(e, this.options.proxy) : new o(e) : new c(e);
            }

            return "linear-gradient" === t.method ? new u(t) : "gradient" === t.method ? new h(t) : "svg" === t.method ? new l(t.args[0], this.support.svg) : "IFRAME" === t.method ? new s(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new o(t);
          }, r.prototype.isSVG = function (t) {
            return "svg" === t.substring(t.length - 3).toLowerCase() || c.prototype.isInline(t);
          }, r.prototype.imageExists = function (t, e) {
            return t.some(function (t) {
              return t.src === e;
            });
          }, r.prototype.isSameOrigin = function (t) {
            return this.getOrigin(t) === this.origin;
          }, r.prototype.getOrigin = function (t) {
            var e = this.link || (this.link = document.createElement("a"));
            return e.href = t, e.href = e.href, e.protocol + e.hostname + e.port;
          }, r.prototype.getPromise = function (t) {
            return this.timeout(t, this.options.imageTimeout)["catch"](function () {
              return new o(t.src).promise.then(function (e) {
                t.image = e;
              });
            });
          }, r.prototype.get = function (t) {
            var e = null;
            return this.images.some(function (A) {
              return (e = A).src === t;
            }) ? e : null;
          }, r.prototype.fetch = function (t) {
            return this.images = t.reduce(d(this.findBackgroundImage, this), this.findImages(t)), this.images.forEach(function (t, e) {
              t.promise.then(function () {
                n("Succesfully loaded image #" + (e + 1), t);
              }, function (A) {
                n("Failed loading image #" + (e + 1), t, A);
              });
            }), this.ready = Promise.all(this.images.map(this.getPromise, this)), n("Finished searching images"), this;
          }, r.prototype.timeout = function (t, e) {
            var A,
                r = Promise.race([t.promise, new Promise(function (r, i) {
              A = setTimeout(function () {
                n("Timed out loading image", t), i(t);
              }, e);
            })]).then(function (t) {
              return clearTimeout(A), t;
            });
            return r["catch"](function () {
              clearTimeout(A);
            }), r;
          }, e.exports = r;
        }, {
          "./dummyimagecontainer": 5,
          "./framecontainer": 8,
          "./imagecontainer": 10,
          "./lineargradientcontainer": 12,
          "./log": 13,
          "./proxyimagecontainer": 17,
          "./svgcontainer": 23,
          "./svgnodecontainer": 24,
          "./utils": 26,
          "./webkitgradientcontainer": 27
        }],
        12: [function (t, e, A) {
          function r(t) {
            n.apply(this, arguments), this.type = n.TYPES.LINEAR;
            var e = r.REGEXP_DIRECTION.test(t.args[0]) || !n.REGEXP_COLORSTOP.test(t.args[0]);
            e ? t.args[0].split(/\s+/).reverse().forEach(function (t, e) {
              switch (t) {
                case "left":
                  this.x0 = 0, this.x1 = 1;
                  break;

                case "top":
                  this.y0 = 0, this.y1 = 1;
                  break;

                case "right":
                  this.x0 = 1, this.x1 = 0;
                  break;

                case "bottom":
                  this.y0 = 1, this.y1 = 0;
                  break;

                case "to":
                  var A = this.y0,
                      r = this.x0;
                  this.y0 = this.y1, this.x0 = this.x1, this.x1 = r, this.y1 = A;
                  break;

                case "center":
                  break;

                default:
                  var n = .01 * parseFloat(t, 10);
                  if (isNaN(n)) break;
                  0 === e ? (this.y0 = n, this.y1 = 1 - this.y0) : (this.x0 = n, this.x1 = 1 - this.x0);
              }
            }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = t.args.slice(e ? 1 : 0).map(function (t) {
              var e = t.match(n.REGEXP_COLORSTOP),
                  A = +e[2],
                  r = 0 === A ? "%" : e[3];
              return {
                color: new i(e[1]),
                stop: "%" === r ? A / 100 : null
              };
            }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function (t, e) {
              null === t.stop && this.colorStops.slice(e).some(function (A, r) {
                return null !== A.stop && (t.stop = (A.stop - this.colorStops[e - 1].stop) / (r + 1) + this.colorStops[e - 1].stop, !0);
              }, this);
            }, this);
          }

          var n = t("./gradientcontainer"),
              i = t("./color");
          r.prototype = Object.create(n.prototype), r.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, e.exports = r;
        }, {
          "./color": 3,
          "./gradientcontainer": 9
        }],
        13: [function (t, e, A) {
          var r = function r() {
            r.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - r.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
          };

          r.options = {
            logging: !1
          }, e.exports = r;
        }, {}],
        14: [function (t, e, A) {
          function r(t, e) {
            this.node = t, this.parent = e, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null;
          }

          function n(t) {
            return -1 !== t.toString().indexOf("%");
          }

          function i(t) {
            return t.replace("px", "");
          }

          function o(t) {
            return parseFloat(t);
          }

          var a = t("./color"),
              s = t("./utils"),
              c = s.getBounds,
              l = s.parseBackgrounds,
              u = s.offsetBounds;
          r.prototype.cloneTo = function (t) {
            t.visible = this.visible, t.borders = this.borders, t.bounds = this.bounds, t.clip = this.clip, t.backgroundClip = this.backgroundClip, t.computedStyles = this.computedStyles, t.styles = this.styles, t.backgroundImages = this.backgroundImages, t.opacity = this.opacity;
          }, r.prototype.getOpacity = function () {
            return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity;
          }, r.prototype.assignStack = function (t) {
            (this.stack = t).children.push(this);
          }, r.prototype.isElementVisible = function () {
            return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"));
          }, r.prototype.css = function (t) {
            return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[t] || (this.styles[t] = this.computedStyles[t]);
          }, r.prototype.prefixedCss = function (t) {
            var e = this.css(t);
            return void 0 === e && ["webkit", "moz", "ms", "o"].some(function (A) {
              return void 0 !== (e = this.css(A + t.substr(0, 1).toUpperCase() + t.substr(1)));
            }, this), void 0 === e ? null : e;
          }, r.prototype.computedStyle = function (t) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t);
          }, r.prototype.cssInt = function (t) {
            var e = parseInt(this.css(t), 10);
            return isNaN(e) ? 0 : e;
          }, r.prototype.color = function (t) {
            return this.colors[t] || (this.colors[t] = new a(this.css(t)));
          }, r.prototype.cssFloat = function (t) {
            var e = parseFloat(this.css(t));
            return isNaN(e) ? 0 : e;
          }, r.prototype.fontWeight = function () {
            var t = this.css("fontWeight");

            switch (parseInt(t, 10)) {
              case 401:
                t = "bold";
                break;

              case 400:
                t = "normal";
            }

            return t;
          }, r.prototype.parseClip = function () {
            var t = this.css("clip").match(this.CLIP);
            return t ? {
              top: parseInt(t[1], 10),
              right: parseInt(t[2], 10),
              bottom: parseInt(t[3], 10),
              left: parseInt(t[4], 10)
            } : null;
          }, r.prototype.parseBackgroundImages = function () {
            return this.backgroundImages || (this.backgroundImages = l(this.css("backgroundImage")));
          }, r.prototype.cssList = function (t, e) {
            var A = (this.css(t) || "").split(",");
            return 1 === (A = (A = A[e || 0] || A[0] || "auto").trim().split(" ")).length && (A = [A[0], n(A[0]) ? "auto" : A[0]]), A;
          }, r.prototype.parseBackgroundSize = function (t, e, A) {
            var r,
                i,
                o = this.cssList("backgroundSize", A);
            if (n(o[0])) r = t.width * parseFloat(o[0]) / 100;else {
              if (/contain|cover/.test(o[0])) {
                var a = t.width / t.height,
                    s = e.width / e.height;
                return a < s ^ "contain" === o[0] ? {
                  width: t.height * s,
                  height: t.height
                } : {
                  width: t.width,
                  height: t.width / s
                };
              }

              r = parseInt(o[0], 10);
            }
            return i = "auto" === o[0] && "auto" === o[1] ? e.height : "auto" === o[1] ? r / e.width * e.height : n(o[1]) ? t.height * parseFloat(o[1]) / 100 : parseInt(o[1], 10), "auto" === o[0] && (r = i / e.height * e.width), {
              width: r,
              height: i
            };
          }, r.prototype.parseBackgroundPosition = function (t, e, A, r) {
            var i,
                o,
                a = this.cssList("backgroundPosition", A);
            return i = n(a[0]) ? (t.width - (r || e).width) * (parseFloat(a[0]) / 100) : parseInt(a[0], 10), o = "auto" === a[1] ? i / e.width * e.height : n(a[1]) ? (t.height - (r || e).height) * parseFloat(a[1]) / 100 : parseInt(a[1], 10), "auto" === a[0] && (i = o / e.height * e.width), {
              left: i,
              top: o
            };
          }, r.prototype.parseBackgroundRepeat = function (t) {
            return this.cssList("backgroundRepeat", t)[0];
          }, r.prototype.parseTextShadows = function () {
            var t = this.css("textShadow"),
                e = [];
            if (t && "none" !== t) for (var A = t.match(this.TEXT_SHADOW_PROPERTY), r = 0; A && r < A.length; r++) {
              var n = A[r].match(this.TEXT_SHADOW_VALUES);
              e.push({
                color: new a(n[0]),
                offsetX: n[1] ? parseFloat(n[1].replace("px", "")) : 0,
                offsetY: n[2] ? parseFloat(n[2].replace("px", "")) : 0,
                blur: n[3] ? n[3].replace("px", "") : 0
              });
            }
            return e;
          }, r.prototype.parseTransform = function () {
            if (!this.transformData) if (this.hasTransform()) {
              var t = this.parseBounds(),
                  e = this.prefixedCss("transformOrigin").split(" ").map(i).map(o);
              e[0] += t.left, e[1] += t.top, this.transformData = {
                origin: e,
                matrix: this.parseTransformMatrix()
              };
            } else this.transformData = {
              origin: [0, 0],
              matrix: [1, 0, 0, 1, 0, 0]
            };
            return this.transformData;
          }, r.prototype.parseTransformMatrix = function () {
            if (!this.transformMatrix) {
              var t = this.prefixedCss("transform"),
                  e = t ? function (t) {
                if (t && "matrix" === t[1]) return t[2].split(",").map(function (t) {
                  return parseFloat(t.trim());
                });

                if (t && "matrix3d" === t[1]) {
                  var e = t[2].split(",").map(function (t) {
                    return parseFloat(t.trim());
                  });
                  return [e[0], e[1], e[4], e[5], e[12], e[13]];
                }
              }(t.match(this.MATRIX_PROPERTY)) : null;
              this.transformMatrix = e || [1, 0, 0, 1, 0, 0];
            }

            return this.transformMatrix;
          }, r.prototype.parseBounds = function () {
            return this.bounds || (this.bounds = this.hasTransform() ? u(this.node) : c(this.node));
          }, r.prototype.hasTransform = function () {
            return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform();
          }, r.prototype.getValue = function () {
            var t,
                e,
                A = this.node.value || "";
            return "SELECT" === this.node.tagName ? (t = this.node, A = (e = t.options[t.selectedIndex || 0]) && e.text || "") : "password" === this.node.type && (A = Array(A.length + 1).join("•")), 0 === A.length ? this.node.placeholder || "" : A;
          }, r.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, r.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, r.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, r.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, e.exports = r;
        }, {
          "./color": 3,
          "./utils": 26
        }],
        15: [function (t, e, A) {
          function r(t, e, A, r, n) {
            H("Starting NodeParser"), this.renderer = e, this.options = n, this.range = null, this.support = A, this.renderQueue = [], this.stack = new O(!0, 1, t.ownerDocument, null);
            var i = new S(t, null);

            if (n.background && e.rectangle(0, 0, e.width, e.height, new k(n.background)), t === t.ownerDocument.documentElement) {
              var o = new S(i.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
              e.rectangle(0, 0, e.width, e.height, o.color("backgroundColor"));
            }

            i.visibile = i.isElementVisible(), this.createPseudoHideStyles(t.ownerDocument), this.disableAnimations(t.ownerDocument), this.nodes = x([i].concat(this.getChildren(i)).filter(function (t) {
              return t.visible = t.isElementVisible();
            }).map(this.getPseudoElements, this)), this.fontMetrics = new N(), H("Fetched nodes, total:", this.nodes.length), H("Calculate overflow clips"), this.calculateOverflowClips(), H("Start fetching images"), this.images = r.fetch(this.nodes.filter(Q)), this.ready = this.images.ready.then(D(function () {
              return H("Images loaded, starting parsing"), H("Creating stacking contexts"), this.createStackingContexts(), H("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), H("Render queue created with " + this.renderQueue.length + " items"), new Promise(D(function (t) {
                n.async ? "function" == typeof n.async ? n.async.call(this, this.renderQueue, t) : 0 < this.renderQueue.length ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t());
              }, this));
            }, this));
          }

          function n(t) {
            return t.parent && t.parent.clip.length;
          }

          function i() {}

          function o(t, e, A, r) {
            return t.map(function (n, i) {
              if (0 < n.width) {
                var o = e.left,
                    a = e.top,
                    s = e.width,
                    c = e.height - t[2].width;

                switch (i) {
                  case 0:
                    c = t[0].width, n.args = l({
                      c1: [o, a],
                      c2: [o + s, a],
                      c3: [o + s - t[1].width, a + c],
                      c4: [o + t[3].width, a + c]
                    }, r[0], r[1], A.topLeftOuter, A.topLeftInner, A.topRightOuter, A.topRightInner);
                    break;

                  case 1:
                    o = e.left + e.width - t[1].width, s = t[1].width, n.args = l({
                      c1: [o + s, a],
                      c2: [o + s, a + c + t[2].width],
                      c3: [o, a + c],
                      c4: [o, a + t[0].width]
                    }, r[1], r[2], A.topRightOuter, A.topRightInner, A.bottomRightOuter, A.bottomRightInner);
                    break;

                  case 2:
                    a = a + e.height - t[2].width, c = t[2].width, n.args = l({
                      c1: [o + s, a + c],
                      c2: [o, a + c],
                      c3: [o + t[3].width, a],
                      c4: [o + s - t[3].width, a]
                    }, r[2], r[3], A.bottomRightOuter, A.bottomRightInner, A.bottomLeftOuter, A.bottomLeftInner);
                    break;

                  case 3:
                    s = t[3].width, n.args = l({
                      c1: [o, a + c + t[2].width],
                      c2: [o, a],
                      c3: [o + s, a + t[0].width],
                      c4: [o + s, a + c]
                    }, r[3], r[0], A.bottomLeftOuter, A.bottomLeftInner, A.topLeftOuter, A.topLeftInner);
                }
              }

              return n;
            });
          }

          function a(t, e, A, r) {
            var n = (Math.sqrt(2) - 1) / 3 * 4,
                i = A * n,
                o = r * n,
                a = t + A,
                s = e + r;
            return {
              topLeft: c({
                x: t,
                y: s
              }, {
                x: t,
                y: s - o
              }, {
                x: a - i,
                y: e
              }, {
                x: a,
                y: e
              }),
              topRight: c({
                x: t,
                y: e
              }, {
                x: t + i,
                y: e
              }, {
                x: a,
                y: s - o
              }, {
                x: a,
                y: s
              }),
              bottomRight: c({
                x: a,
                y: e
              }, {
                x: a,
                y: e + o
              }, {
                x: t + i,
                y: s
              }, {
                x: t,
                y: s
              }),
              bottomLeft: c({
                x: a,
                y: s
              }, {
                x: a - i,
                y: s
              }, {
                x: t,
                y: e + o
              }, {
                x: t,
                y: e
              })
            };
          }

          function s(t, e, A) {
            var r = t.left,
                n = t.top,
                i = t.width,
                o = t.height,
                s = e[0][0] < i / 2 ? e[0][0] : i / 2,
                c = e[0][1] < o / 2 ? e[0][1] : o / 2,
                l = e[1][0] < i / 2 ? e[1][0] : i / 2,
                u = e[1][1] < o / 2 ? e[1][1] : o / 2,
                h = e[2][0] < i / 2 ? e[2][0] : i / 2,
                d = e[2][1] < o / 2 ? e[2][1] : o / 2,
                f = e[3][0] < i / 2 ? e[3][0] : i / 2,
                p = e[3][1] < o / 2 ? e[3][1] : o / 2,
                g = i - l,
                B = o - d,
                w = i - h,
                m = o - p;
            return {
              topLeftOuter: a(r, n, s, c).topLeft.subdivide(.5),
              topLeftInner: a(r + A[3].width, n + A[0].width, Math.max(0, s - A[3].width), Math.max(0, c - A[0].width)).topLeft.subdivide(.5),
              topRightOuter: a(r + g, n, l, u).topRight.subdivide(.5),
              topRightInner: a(r + Math.min(g, i + A[3].width), n + A[0].width, g > i + A[3].width ? 0 : l - A[3].width, u - A[0].width).topRight.subdivide(.5),
              bottomRightOuter: a(r + w, n + B, h, d).bottomRight.subdivide(.5),
              bottomRightInner: a(r + Math.min(w, i - A[3].width), n + Math.min(B, o + A[0].width), Math.max(0, h - A[1].width), d - A[2].width).bottomRight.subdivide(.5),
              bottomLeftOuter: a(r, n + m, f, p).bottomLeft.subdivide(.5),
              bottomLeftInner: a(r + A[3].width, n + m, Math.max(0, f - A[3].width), p - A[2].width).bottomLeft.subdivide(.5)
            };
          }

          function c(t, e, A, r) {
            var n = function n(t, e, A) {
              return {
                x: t.x + (e.x - t.x) * A,
                y: t.y + (e.y - t.y) * A
              };
            };

            return {
              start: t,
              startControl: e,
              endControl: A,
              end: r,
              subdivide: function subdivide(i) {
                var o = n(t, e, i),
                    a = n(e, A, i),
                    s = n(A, r, i),
                    l = n(o, a, i),
                    u = n(a, s, i),
                    h = n(l, u, i);
                return [c(t, o, l, h), c(h, u, s, r)];
              },
              curveTo: function curveTo(t) {
                t.push(["bezierCurve", e.x, e.y, A.x, A.y, r.x, r.y]);
              },
              curveToReversed: function curveToReversed(r) {
                r.push(["bezierCurve", A.x, A.y, e.x, e.y, t.x, t.y]);
              }
            };
          }

          function l(t, e, A, r, n, i, o) {
            var a = [];
            return 0 < e[0] || 0 < e[1] ? (a.push(["line", r[1].start.x, r[1].start.y]), r[1].curveTo(a)) : a.push(["line", t.c1[0], t.c1[1]]), 0 < A[0] || 0 < A[1] ? (a.push(["line", i[0].start.x, i[0].start.y]), i[0].curveTo(a), a.push(["line", o[0].end.x, o[0].end.y]), o[0].curveToReversed(a)) : (a.push(["line", t.c2[0], t.c2[1]]), a.push(["line", t.c3[0], t.c3[1]])), 0 < e[0] || 0 < e[1] ? (a.push(["line", n[1].end.x, n[1].end.y]), n[1].curveToReversed(a)) : a.push(["line", t.c4[0], t.c4[1]]), a;
          }

          function u(t, e, A, r, n, i, o) {
            0 < e[0] || 0 < e[1] ? (t.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(t), r[1].curveTo(t)) : t.push(["line", i, o]), (0 < A[0] || 0 < A[1]) && t.push(["line", n[0].start.x, n[0].start.y]);
          }

          function h(t) {
            return t.cssInt("zIndex") < 0;
          }

          function d(t) {
            return 0 < t.cssInt("zIndex");
          }

          function f(t) {
            return 0 === t.cssInt("zIndex");
          }

          function p(t) {
            return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"));
          }

          function g(t) {
            return t instanceof O;
          }

          function B(t) {
            return 0 < t.node.data.trim().length;
          }

          function w(t) {
            return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE;
          }

          function m(t) {
            return "static" !== t.css("position");
          }

          function y(t) {
            return "none" !== t.css("float");
          }

          function v(t) {
            var e = this;
            return function () {
              return !t.apply(e, arguments);
            };
          }

          function Q(t) {
            return t.node.nodeType === Node.ELEMENT_NODE;
          }

          function C(t) {
            return !0 === t.isPseudoElement;
          }

          function U(t) {
            return t.node.nodeType === Node.TEXT_NODE;
          }

          function b(t) {
            return parseInt(t, 10);
          }

          function F(t) {
            return t.width;
          }

          function E(t) {
            return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName);
          }

          function x(t) {
            return [].concat.apply([], t);
          }

          var H = t("./log"),
              I = t("punycode"),
              S = t("./nodecontainer"),
              _ = t("./textcontainer"),
              T = t("./pseudoelementcontainer"),
              N = t("./fontmetrics"),
              k = t("./color"),
              O = t("./stackingcontext"),
              P = t("./utils"),
              D = P.bind,
              L = P.getBounds,
              R = P.parseBackgrounds,
              M = P.offsetBounds;

          r.prototype.calculateOverflowClips = function () {
            this.nodes.forEach(function (t) {
              if (Q(t)) {
                C(t) && t.appendToDOM(), t.borders = this.parseBorders(t);
                var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                    A = t.parseClip();
                A && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + A.left, t.bounds.top + A.top, A.right - A.left, A.bottom - A.top]]), t.clip = n(t) ? t.parent.clip.concat(e) : e, t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip, C(t) && t.cleanDOM();
              } else U(t) && (t.clip = n(t) ? t.parent.clip : []);

              C(t) || (t.bounds = null);
            }, this);
          }, r.prototype.asyncRenderer = function (t, e, A) {
            A = A || Date.now(), this.paint(t[this.renderIndex++]), t.length === this.renderIndex ? e() : A + 20 > Date.now() ? this.asyncRenderer(t, e, A) : setTimeout(D(function () {
              this.asyncRenderer(t, e);
            }, this), 0);
          }, r.prototype.createPseudoHideStyles = function (t) {
            this.createStyles(t, "." + T.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + T.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
          }, r.prototype.disableAnimations = function (t) {
            this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}");
          }, r.prototype.createStyles = function (t, e) {
            var A = t.createElement("style");
            A.innerHTML = e, t.body.appendChild(A);
          }, r.prototype.getPseudoElements = function (t) {
            var e = [[t]];

            if (t.node.nodeType === Node.ELEMENT_NODE) {
              var A = this.getPseudoElement(t, ":before"),
                  r = this.getPseudoElement(t, ":after");
              A && e.push(A), r && e.push(r);
            }

            return x(e);
          }, r.prototype.getPseudoElement = function (t, e) {
            var A = t.computedStyle(e);
            if (!A || !A.content || "none" === A.content || "-moz-alt-content" === A.content || "none" === A.display) return null;

            for (var r, n, i = (r = A.content, (n = r.substr(0, 1)) === r.substr(r.length - 1) && n.match(/'|"/) ? r.substr(1, r.length - 2) : r), o = "url" === i.substr(0, 3), a = document.createElement(o ? "img" : "html2canvaspseudoelement"), s = new T(a, t, e), c = A.length - 1; 0 <= c; c--) {
              var l = A.item(c).replace(/(\-[a-z])/g, function (t) {
                return t.toUpperCase().replace("-", "");
              });
              a.style[l] = A[l];
            }

            if (a.className = T.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + T.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, o) return a.src = R(i)[0].args[0], [s];
            var u = document.createTextNode(i);
            return a.appendChild(u), [s, new _(u, s)];
          }, r.prototype.getChildren = function (t) {
            return x([].filter.call(t.node.childNodes, w).map(function (e) {
              var A = [e.nodeType === Node.TEXT_NODE ? new _(e, t) : new S(e, t)].filter(E);
              return e.nodeType === Node.ELEMENT_NODE && A.length && "TEXTAREA" !== e.tagName ? A[0].isElementVisible() ? A.concat(this.getChildren(A[0])) : [] : A;
            }, this));
          }, r.prototype.newStackingContext = function (t, e) {
            var A = new O(e, t.getOpacity(), t.node, t.parent);
            t.cloneTo(A), (e ? A.getParentStack(this) : A.parent.stack).contexts.push(A), t.stack = A;
          }, r.prototype.createStackingContexts = function () {
            this.nodes.forEach(function (t) {
              var e, A;
              Q(t) && (this.isRootElement(t) || t.getOpacity() < 1 || (A = (e = t).css("position"), "auto" !== (-1 !== ["absolute", "relative", "fixed"].indexOf(A) ? e.css("zIndex") : "auto")) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : Q(t) && (m(t) && f(t) || -1 !== ["inline-block", "inline-table"].indexOf(t.css("display")) || y(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack);
            }, this);
          }, r.prototype.isBodyWithTransparentRoot = function (t) {
            return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent();
          }, r.prototype.isRootElement = function (t) {
            return null === t.parent;
          }, r.prototype.sortStackingContexts = function (t) {
            var e;
            t.contexts.sort((e = t.contexts.slice(0), function (t, A) {
              return t.cssInt("zIndex") + e.indexOf(t) / e.length - (A.cssInt("zIndex") + e.indexOf(A) / e.length);
            })), t.contexts.forEach(this.sortStackingContexts, this);
          }, r.prototype.parseTextBounds = function (t) {
            return function (e, A, r) {
              if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                if (this.support.rangeBounds && !t.parent.hasTransform()) {
                  var n = r.slice(0, A).join("").length;
                  return this.getRangeBounds(t.node, n, e.length);
                }

                if (t.node && "string" == typeof t.node.data) {
                  var i = t.node.splitText(e.length),
                      o = this.getWrapperBounds(t.node, t.parent.hasTransform());
                  return t.node = i, o;
                }
              } else this.support.rangeBounds && !t.parent.hasTransform() || (t.node = t.node.splitText(e.length));

              return {};
            };
          }, r.prototype.getWrapperBounds = function (t, e) {
            var A = t.ownerDocument.createElement("html2canvaswrapper"),
                r = t.parentNode,
                n = t.cloneNode(!0);
            A.appendChild(t.cloneNode(!0)), r.replaceChild(A, t);
            var i = e ? M(A) : L(A);
            return r.replaceChild(n, A), i;
          }, r.prototype.getRangeBounds = function (t, e, A) {
            var r = this.range || (this.range = t.ownerDocument.createRange());
            return r.setStart(t, e), r.setEnd(t, e + A), r.getBoundingClientRect();
          }, r.prototype.parse = function (t) {
            var e = t.contexts.filter(h),
                A = t.children.filter(Q),
                r = A.filter(v(y)),
                n = r.filter(v(m)).filter(v(p)),
                o = A.filter(v(m)).filter(y),
                a = r.filter(v(m)).filter(p),
                s = t.contexts.concat(r.filter(m)).filter(f),
                c = t.children.filter(U).filter(B),
                l = t.contexts.filter(d);
            e.concat(n).concat(o).concat(a).concat(s).concat(c).concat(l).forEach(function (t) {
              this.renderQueue.push(t), g(t) && (this.parse(t), this.renderQueue.push(new i()));
            }, this);
          }, r.prototype.paint = function (t) {
            try {
              t instanceof i ? this.renderer.ctx.restore() : U(t) ? (C(t.parent) && t.parent.appendToDOM(), this.paintText(t), C(t.parent) && t.parent.cleanDOM()) : this.paintNode(t);
            } catch (t) {
              if (H(t), this.options.strict) throw t;
            }
          }, r.prototype.paintNode = function (t) {
            g(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())), "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t);
          }, r.prototype.paintElement = function (t) {
            var e = t.parseBounds();
            this.renderer.clip(t.backgroundClip, function () {
              this.renderer.renderBackground(t, e, t.borders.borders.map(F));
            }, this), this.renderer.clip(t.clip, function () {
              this.renderer.renderBorders(t.borders.borders);
            }, this), this.renderer.clip(t.backgroundClip, function () {
              switch (t.node.nodeName) {
                case "svg":
                case "IFRAME":
                  var A = this.images.get(t.node);
                  A ? this.renderer.renderImage(t, e, t.borders, A) : H("Error loading <" + t.node.nodeName + ">", t.node);
                  break;

                case "IMG":
                  var r = this.images.get(t.node.src);
                  r ? this.renderer.renderImage(t, e, t.borders, r) : H("Error loading <img>", t.node.src);
                  break;

                case "CANVAS":
                  this.renderer.renderImage(t, e, t.borders, {
                    image: t.node
                  });
                  break;

                case "SELECT":
                case "INPUT":
                case "TEXTAREA":
                  this.paintFormValue(t);
              }
            }, this);
          }, r.prototype.paintCheckbox = function (t) {
            var e = t.parseBounds(),
                A = Math.min(e.width, e.height),
                r = {
              width: A - 1,
              height: A - 1,
              top: e.top,
              left: e.left
            },
                n = [3, 3],
                i = [n, n, n, n],
                a = [1, 1, 1, 1].map(function (t) {
              return {
                color: new k("#A5A5A5"),
                width: t
              };
            }),
                c = s(r, i, a);
            this.renderer.clip(t.backgroundClip, function () {
              this.renderer.rectangle(r.left + 1, r.top + 1, r.width - 2, r.height - 2, new k("#DEDEDE")), this.renderer.renderBorders(o(a, r, c, i)), t.node.checked && (this.renderer.font(new k("#424242"), "normal", "normal", "bold", A - 3 + "px", "arial"), this.renderer.text("✔", r.left + A / 6, r.top + A - 1));
            }, this);
          }, r.prototype.paintRadio = function (t) {
            var e = t.parseBounds(),
                A = Math.min(e.width, e.height) - 2;
            this.renderer.clip(t.backgroundClip, function () {
              this.renderer.circleStroke(e.left + 1, e.top + 1, A, new k("#DEDEDE"), 1, new k("#A5A5A5")), t.node.checked && this.renderer.circle(Math.ceil(e.left + A / 4) + 1, Math.ceil(e.top + A / 4) + 1, Math.floor(A / 2), new k("#424242"));
            }, this);
          }, r.prototype.paintFormValue = function (t) {
            var e = t.getValue();

            if (0 < e.length) {
              var A = t.node.ownerDocument,
                  r = A.createElement("html2canvaswrapper");
              ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"].forEach(function (e) {
                try {
                  r.style[e] = t.css(e);
                } catch (e) {
                  H("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
                }
              });
              var n = t.parseBounds();
              r.style.position = "fixed", r.style.left = n.left + "px", r.style.top = n.top + "px", r.textContent = e, A.body.appendChild(r), this.paintText(new _(r.firstChild, t)), A.body.removeChild(r);
            }
          }, r.prototype.paintText = function (t) {
            t.applyTextTransform();
            var e,
                A = I.ucs2.decode(t.node.data),
                r = this.options.letterRendering && !/^(normal|none|0px)$/.test(t.parent.css("letterSpacing")) || (e = t.node.data, /[^\u0000-\u00ff]/.test(e)) ? A.map(function (t) {
              return I.ucs2.encode([t]);
            }) : function (t) {
              for (var e, A = [], r = 0, n = !1; t.length;) {
                i = t[r], -1 !== [32, 13, 10, 9, 45].indexOf(i) === n ? ((e = t.splice(0, r)).length && A.push(I.ucs2.encode(e)), n = !n, r = 0) : r++, r >= t.length && (e = t.splice(0, r)).length && A.push(I.ucs2.encode(e));
              }

              var i;
              return A;
            }(A),
                n = t.parent.fontWeight(),
                i = t.parent.css("fontSize"),
                o = t.parent.css("fontFamily"),
                a = t.parent.parseTextShadows();
            this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), n, i, o), a.length ? this.renderer.fontShadow(a[0].color, a[0].offsetX, a[0].offsetY, a[0].blur) : this.renderer.clearShadow(), this.renderer.clip(t.parent.clip, function () {
              r.map(this.parseTextBounds(t), this).forEach(function (e, A) {
                e && !1 === /^\s*$/.test(r[A]) && (this.renderer.text(r[A], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(o, i)));
              }, this);
            }, this);
          }, r.prototype.renderTextDecoration = function (t, e, A) {
            switch (t.css("textDecoration").split(" ")[0]) {
              case "underline":
                this.renderer.rectangle(e.left, Math.round(e.top + A.baseline + A.lineWidth), e.width, 1, t.color("color"));
                break;

              case "overline":
                this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                break;

              case "line-through":
                this.renderer.rectangle(e.left, Math.ceil(e.top + A.middle + A.lineWidth), e.width, 1, t.color("color"));
            }
          };
          var K = {
            inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]
          };
          r.prototype.parseBorders = function (t) {
            var e,
                A = t.parseBounds(),
                r = (e = t, ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (t) {
              var A = e.css("border" + t + "Radius").split(" ");
              return A.length <= 1 && (A[1] = A[0]), A.map(b);
            })),
                n = ["Top", "Right", "Bottom", "Left"].map(function (e, A) {
              var r = t.css("border" + e + "Style"),
                  n = t.color("border" + e + "Color");
              "inset" === r && n.isBlack() && (n = new k([255, 255, 255, n.a]));
              var i = K[r] ? K[r][A] : null;
              return {
                width: t.cssInt("border" + e + "Width"),
                color: i ? n[i[0]](i[1]) : n,
                args: null
              };
            }),
                i = s(A, r, n);
            return {
              clip: this.parseBackgroundClip(t, i, n, r, A),
              borders: o(n, A, i, r)
            };
          }, r.prototype.parseBackgroundClip = function (t, e, A, r, n) {
            var i = [];

            switch (t.css("backgroundClip")) {
              case "content-box":
              case "padding-box":
                u(i, r[0], r[1], e.topLeftInner, e.topRightInner, n.left + A[3].width, n.top + A[0].width), u(i, r[1], r[2], e.topRightInner, e.bottomRightInner, n.left + n.width - A[1].width, n.top + A[0].width), u(i, r[2], r[3], e.bottomRightInner, e.bottomLeftInner, n.left + n.width - A[1].width, n.top + n.height - A[2].width), u(i, r[3], r[0], e.bottomLeftInner, e.topLeftInner, n.left + A[3].width, n.top + n.height - A[2].width);
                break;

              default:
                u(i, r[0], r[1], e.topLeftOuter, e.topRightOuter, n.left, n.top), u(i, r[1], r[2], e.topRightOuter, e.bottomRightOuter, n.left + n.width, n.top), u(i, r[2], r[3], e.bottomRightOuter, e.bottomLeftOuter, n.left + n.width, n.top + n.height), u(i, r[3], r[0], e.bottomLeftOuter, e.topLeftOuter, n.left, n.top + n.height);
            }

            return i;
          }, e.exports = r;
        }, {
          "./color": 3,
          "./fontmetrics": 7,
          "./log": 13,
          "./nodecontainer": 14,
          "./pseudoelementcontainer": 18,
          "./stackingcontext": 21,
          "./textcontainer": 25,
          "./utils": 26,
          punycode: 1
        }],
        16: [function (t, e, A) {
          function r(t, e, A) {
            var r = ("withCredentials" in new XMLHttpRequest());
            if (!e) return Promise.reject("No proxy configured");
            var s = i(r),
                c = o(e, t, s);
            return r ? a(c) : n(A, c, s).then(function (t) {
              return u(t.content);
            });
          }

          function n(t, e, A) {
            return new Promise(function (r, n) {
              var i = t.createElement("script"),
                  o = function o() {
                delete window.html2canvas.proxy[A], t.body.removeChild(i);
              };

              window.html2canvas.proxy[A] = function (t) {
                o(), r(t);
              }, i.src = e, i.onerror = function (t) {
                o(), n(t);
              }, t.body.appendChild(i);
            });
          }

          function i(t) {
            return t ? "" : "html2canvas_" + Date.now() + "_" + ++h + "_" + Math.round(1e5 * Math.random());
          }

          function o(t, e, A) {
            return t + "?url=" + encodeURIComponent(e) + (A.length ? "&callback=html2canvas.proxy." + A : "");
          }

          var a = t("./xhr"),
              s = t("./utils"),
              c = t("./log"),
              l = t("./clone"),
              u = s.decode64,
              h = 0;
          A.Proxy = r, A.ProxyURL = function (t, e, A) {
            var r = ("crossOrigin" in new Image()),
                a = i(r),
                s = o(e, t, a);
            return r ? Promise.resolve(s) : n(A, s, a).then(function (t) {
              return "data:" + t.type + ";base64," + t.content;
            });
          }, A.loadUrlDocument = function (t, e, A, n, i, o) {
            return new r(t, e, window.document).then((a = t, function (t) {
              var e,
                  A = new DOMParser();

              try {
                e = A.parseFromString(t, "text/html");
              } catch (A) {
                c("DOMParser not supported, falling back to createHTMLDocument"), e = document.implementation.createHTMLDocument("");

                try {
                  e.open(), e.write(t), e.close();
                } catch (A) {
                  c("createHTMLDocument write not supported, falling back to document.body.innerHTML"), e.body.innerHTML = t;
                }
              }

              var r = e.querySelector("base");

              if (!r || !r.href.host) {
                var n = e.createElement("base");
                n.href = a, e.head.insertBefore(n, e.head.firstChild);
              }

              return e;
            })).then(function (t) {
              return l(t, A, n, i, o, 0, 0);
            });
            var a;
          };
        }, {
          "./clone": 2,
          "./log": 13,
          "./utils": 26,
          "./xhr": 28
        }],
        17: [function (t, e, A) {
          var r = t("./proxy").ProxyURL;

          e.exports = function (t, e) {
            var A = document.createElement("a");
            A.href = t, t = A.href, this.src = t, this.image = new Image();
            var n = this;
            this.promise = new Promise(function (A, i) {
              n.image.crossOrigin = "Anonymous", n.image.onload = A, n.image.onerror = i, new r(t, e, document).then(function (t) {
                n.image.src = t;
              })["catch"](i);
            });
          };
        }, {
          "./proxy": 16
        }],
        18: [function (t, e, A) {
          function r(t, e, A) {
            n.call(this, t, e), this.isPseudoElement = !0, this.before = ":before" === A;
          }

          var n = t("./nodecontainer");
          r.prototype.cloneTo = function (t) {
            r.prototype.cloneTo.call(this, t), t.isPseudoElement = !0, t.before = this.before;
          }, (r.prototype = Object.create(n.prototype)).appendToDOM = function () {
            this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass();
          }, r.prototype.cleanDOM = function () {
            this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
          }, r.prototype.getHideClass = function () {
            return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
          }, r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", e.exports = r;
        }, {
          "./nodecontainer": 14
        }],
        19: [function (t, e, A) {
          function r(t, e, A, r, n) {
            this.width = t, this.height = e, this.images = A, this.options = r, this.document = n;
          }

          var n = t("./log");
          r.prototype.renderImage = function (t, e, A, r) {
            var n = t.cssInt("paddingLeft"),
                i = t.cssInt("paddingTop"),
                o = t.cssInt("paddingRight"),
                a = t.cssInt("paddingBottom"),
                s = A.borders,
                c = e.width - (s[1].width + s[3].width + n + o),
                l = e.height - (s[0].width + s[2].width + i + a);
            this.drawImage(r, 0, 0, r.image.width || c, r.image.height || l, e.left + n + s[3].width, e.top + i + s[0].width, c, l);
          }, r.prototype.renderBackground = function (t, e, A) {
            0 < e.height && 0 < e.width && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, A));
          }, r.prototype.renderBackgroundColor = function (t, e) {
            var A = t.color("backgroundColor");
            A.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, A);
          }, r.prototype.renderBorders = function (t) {
            t.forEach(this.renderBorder, this);
          }, r.prototype.renderBorder = function (t) {
            t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color);
          }, r.prototype.renderBackgroundImage = function (t, e, A) {
            t.parseBackgroundImages().reverse().forEach(function (r, i, o) {
              switch (r.method) {
                case "url":
                  var a = this.images.get(r.args[0]);
                  a ? this.renderBackgroundRepeating(t, e, a, o.length - (i + 1), A) : n("Error loading background-image", r.args[0]);
                  break;

                case "linear-gradient":
                case "gradient":
                  var s = this.images.get(r.value);
                  s ? this.renderBackgroundGradient(s, e, A) : n("Error loading background-image", r.args[0]);
                  break;

                case "none":
                  break;

                default:
                  n("Unknown background-image type", r.args[0]);
              }
            }, this);
          }, r.prototype.renderBackgroundRepeating = function (t, e, A, r, n) {
            var i = t.parseBackgroundSize(e, A.image, r),
                o = t.parseBackgroundPosition(e, A.image, r, i);

            switch (t.parseBackgroundRepeat(r)) {
              case "repeat-x":
              case "repeat no-repeat":
                this.backgroundRepeatShape(A, o, i, e, e.left + n[3], e.top + o.top + n[0], 99999, i.height, n);
                break;

              case "repeat-y":
              case "no-repeat repeat":
                this.backgroundRepeatShape(A, o, i, e, e.left + o.left + n[3], e.top + n[0], i.width, 99999, n);
                break;

              case "no-repeat":
                this.backgroundRepeatShape(A, o, i, e, e.left + o.left + n[3], e.top + o.top + n[0], i.width, i.height, n);
                break;

              default:
                this.renderBackgroundRepeat(A, o, i, {
                  top: e.top,
                  left: e.left
                }, n[3], n[0]);
            }
          }, e.exports = r;
        }, {
          "./log": 13
        }],
        20: [function (t, e, A) {
          function r(t, e) {
            i.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = t, this.canvas.height = e), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, a("Initialized CanvasRenderer with size", t, "x", e);
          }

          function n(t) {
            return 0 < t.length;
          }

          var i = t("../renderer"),
              o = t("../lineargradientcontainer"),
              a = t("../log");
          (r.prototype = Object.create(i.prototype)).setFillStyle = function (t) {
            return this.ctx.fillStyle = "object" == _typeof(t) && t.isColor ? t.toString() : t, this.ctx;
          }, r.prototype.rectangle = function (t, e, A, r, n) {
            this.setFillStyle(n).fillRect(t, e, A, r);
          }, r.prototype.circle = function (t, e, A, r) {
            this.setFillStyle(r), this.ctx.beginPath(), this.ctx.arc(t + A / 2, e + A / 2, A / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill();
          }, r.prototype.circleStroke = function (t, e, A, r, n, i) {
            this.circle(t, e, A, r), this.ctx.strokeStyle = i.toString(), this.ctx.stroke();
          }, r.prototype.drawShape = function (t, e) {
            this.shape(t), this.setFillStyle(e).fill();
          }, r.prototype.taints = function (t) {
            if (null === t.tainted) {
              this.taintCtx.drawImage(t.image, 0, 0);

              try {
                this.taintCtx.getImageData(0, 0, 1, 1), t.tainted = !1;
              } catch (e) {
                this.taintCtx = document.createElement("canvas").getContext("2d"), t.tainted = !0;
              }
            }

            return t.tainted;
          }, r.prototype.drawImage = function (t, e, A, r, n, i, o, a, s) {
            this.taints(t) && !this.options.allowTaint || this.ctx.drawImage(t.image, e, A, r, n, i, o, a, s);
          }, r.prototype.clip = function (t, e, A) {
            this.ctx.save(), t.filter(n).forEach(function (t) {
              this.shape(t).clip();
            }, this), e.call(A), this.ctx.restore();
          }, r.prototype.shape = function (t) {
            return this.ctx.beginPath(), t.forEach(function (t, e) {
              "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1));
            }, this), this.ctx.closePath(), this.ctx;
          }, r.prototype.font = function (t, e, A, r, n, i) {
            this.setFillStyle(t).font = [e, A, r, n, i].join(" ").split(",")[0];
          }, r.prototype.fontShadow = function (t, e, A, r) {
            this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", A).setVariable("shadowBlur", r);
          }, r.prototype.clearShadow = function () {
            this.setVariable("shadowColor", "rgba(0,0,0,0)");
          }, r.prototype.setOpacity = function (t) {
            this.ctx.globalAlpha = t;
          }, r.prototype.setTransform = function (t) {
            this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1]);
          }, r.prototype.setVariable = function (t, e) {
            return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this;
          }, r.prototype.text = function (t, e, A) {
            this.ctx.fillText(t, e, A);
          }, r.prototype.backgroundRepeatShape = function (t, e, A, r, n, i, o, a, s) {
            var c = [["line", Math.round(n), Math.round(i)], ["line", Math.round(n + o), Math.round(i)], ["line", Math.round(n + o), Math.round(a + i)], ["line", Math.round(n), Math.round(a + i)]];
            this.clip([c], function () {
              this.renderBackgroundRepeat(t, e, A, r, s[3], s[0]);
            }, this);
          }, r.prototype.renderBackgroundRepeat = function (t, e, A, r, n, i) {
            var o = Math.round(r.left + e.left + n),
                a = Math.round(r.top + e.top + i);
            this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, A), "repeat")), this.ctx.translate(o, a), this.ctx.fill(), this.ctx.translate(-o, -a);
          }, r.prototype.renderBackgroundGradient = function (t, e) {
            if (t instanceof o) {
              var A = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
              t.colorStops.forEach(function (t) {
                A.addColorStop(t.stop, t.color.toString());
              }), this.rectangle(e.left, e.top, e.width, e.height, A);
            }
          }, r.prototype.resizeImage = function (t, e) {
            var A = t.image;
            if (A.width === e.width && A.height === e.height) return A;
            var r = document.createElement("canvas");
            return r.width = e.width, r.height = e.height, r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e.width, e.height), r;
          }, e.exports = r;
        }, {
          "../lineargradientcontainer": 12,
          "../log": 13,
          "../renderer": 19
        }],
        21: [function (t, e, A) {
          function r(t, e, A, r) {
            n.call(this, A, r), this.ownStacking = t, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e;
          }

          var n = t("./nodecontainer");
          (r.prototype = Object.create(n.prototype)).getParentStack = function (t) {
            var e = this.parent ? this.parent.stack : null;
            return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack;
          }, e.exports = r;
        }, {
          "./nodecontainer": 14
        }],
        22: [function (t, e, A) {
          function r(t) {
            this.rangeBounds = this.testRangeBounds(t), this.cors = this.testCORS(), this.svg = this.testSVG();
          }

          r.prototype.testRangeBounds = function (t) {
            var e,
                A,
                r = !1;
            return t.createRange && (e = t.createRange()).getBoundingClientRect && ((A = t.createElement("boundtest")).style.height = "123px", A.style.display = "block", t.body.appendChild(A), e.selectNode(A), 123 === e.getBoundingClientRect().height && (r = !0), t.body.removeChild(A)), r;
          }, r.prototype.testCORS = function () {
            return void 0 !== new Image().crossOrigin;
          }, r.prototype.testSVG = function () {
            var t = new Image(),
                e = document.createElement("canvas"),
                A = e.getContext("2d");
            t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

            try {
              A.drawImage(t, 0, 0), e.toDataURL();
            } catch (t) {
              return !1;
            }

            return !0;
          }, e.exports = r;
        }, {}],
        23: [function (t, e, A) {
          function r(t) {
            this.src = t, this.image = null;
            var e = this;
            this.promise = this.hasFabric().then(function () {
              return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : n(t);
            }).then(function (t) {
              return new Promise(function (A) {
                window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, A));
              });
            });
          }

          var n = t("./xhr"),
              i = t("./utils").decode64;
          r.prototype.hasFabric = function () {
            return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"));
          }, r.prototype.inlineFormatting = function (t) {
            return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t);
          }, r.prototype.removeContentType = function (t) {
            return t.replace(/^data:image\/svg\+xml(;base64)?,/, "");
          }, r.prototype.isInline = function (t) {
            return /^data:image\/svg\+xml/i.test(t);
          }, r.prototype.createCanvas = function (t) {
            var e = this;
            return function (A, r) {
              var n = new window.html2canvas.svg.fabric.StaticCanvas("c");
              e.image = n.lowerCanvasEl, n.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(A, r)).renderAll(), t(n.lowerCanvasEl);
            };
          }, r.prototype.decode64 = function (t) {
            return "function" == typeof window.atob ? window.atob(t) : i(t);
          }, e.exports = r;
        }, {
          "./utils": 26,
          "./xhr": 28
        }],
        24: [function (t, e, A) {
          function r(t, e) {
            this.src = t, this.image = null;
            var A = this;
            this.promise = e ? new Promise(function (e, r) {
              A.image = new Image(), A.image.onload = e, A.image.onerror = r, A.image.src = "data:image/svg+xml," + new XMLSerializer().serializeToString(t), !0 === A.image.complete && e(A.image);
            }) : this.hasFabric().then(function () {
              return new Promise(function (e) {
                window.html2canvas.svg.fabric.parseSVGDocument(t, A.createCanvas.call(A, e));
              });
            });
          }

          var n = t("./svgcontainer");
          r.prototype = Object.create(n.prototype), e.exports = r;
        }, {
          "./svgcontainer": 23
        }],
        25: [function (t, e, A) {
          function r(t, e) {
            i.call(this, t, e);
          }

          function n(t, e, A) {
            if (0 < t.length) return e + A.toUpperCase();
          }

          var i = t("./nodecontainer");
          (r.prototype = Object.create(i.prototype)).applyTextTransform = function () {
            this.node.data = this.transform(this.parent.css("textTransform"));
          }, r.prototype.transform = function (t) {
            var e = this.node.data;

            switch (t) {
              case "lowercase":
                return e.toLowerCase();

              case "capitalize":
                return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, n);

              case "uppercase":
                return e.toUpperCase();

              default:
                return e;
            }
          }, e.exports = r;
        }, {
          "./nodecontainer": 14
        }],
        26: [function (t, e, A) {
          A.smallImage = function () {
            return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
          }, A.bind = function (t, e) {
            return function () {
              return t.apply(e, arguments);
            };
          }, A.decode64 = function (t) {
            var e,
                A,
                r,
                n,
                i,
                o,
                a,
                s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                c = t.length,
                l = "";

            for (e = 0; e < c; e += 4) {
              i = s.indexOf(t[e]) << 2 | (A = s.indexOf(t[e + 1])) >> 4, o = (15 & A) << 4 | (r = s.indexOf(t[e + 2])) >> 2, a = (3 & r) << 6 | (n = s.indexOf(t[e + 3])), l += 64 === r ? String.fromCharCode(i) : 64 === n || -1 === n ? String.fromCharCode(i, o) : String.fromCharCode(i, o, a);
            }

            return l;
          }, A.getBounds = function (t) {
            if (t.getBoundingClientRect) {
              var e = t.getBoundingClientRect(),
                  A = null == t.offsetWidth ? e.width : t.offsetWidth;
              return {
                top: e.top,
                bottom: e.bottom || e.top + e.height,
                right: e.left + A,
                left: e.left,
                width: A,
                height: null == t.offsetHeight ? e.height : t.offsetHeight
              };
            }

            return {};
          }, A.offsetBounds = function (t) {
            var e = t.offsetParent ? A.offsetBounds(t.offsetParent) : {
              top: 0,
              left: 0
            };
            return {
              top: t.offsetTop + e.top,
              bottom: t.offsetTop + t.offsetHeight + e.top,
              right: t.offsetLeft + e.left + t.offsetWidth,
              left: t.offsetLeft + e.left,
              width: t.offsetWidth,
              height: t.offsetHeight
            };
          }, A.parseBackgrounds = function (t) {
            var e,
                A,
                r,
                n,
                i,
                o,
                a,
                s = [],
                c = 0,
                l = 0,
                u = function u() {
              e && ('"' === A.substr(0, 1) && (A = A.substr(1, A.length - 2)), A && a.push(A), "-" === e.substr(0, 1) && 0 < (n = e.indexOf("-", 1) + 1) && (r = e.substr(0, n), e = e.substr(n)), s.push({
                prefix: r,
                method: e.toLowerCase(),
                value: i,
                args: a,
                image: null
              })), a = [], e = r = A = i = "";
            };

            return a = [], e = r = A = i = "", t.split("").forEach(function (t) {
              if (!(0 === c && -1 < " \r\n\t".indexOf(t))) {
                switch (t) {
                  case '"':
                    o ? o === t && (o = null) : o = t;
                    break;

                  case "(":
                    if (o) break;
                    if (0 === c) return c = 1, void (i += t);
                    l++;
                    break;

                  case ")":
                    if (o) break;

                    if (1 === c) {
                      if (0 === l) return c = 0, i += t, void u();
                      l--;
                    }

                    break;

                  case ",":
                    if (o) break;
                    if (0 === c) return void u();
                    if (1 === c && 0 === l && !e.match(/^url$/i)) return a.push(A), A = "", void (i += t);
                }

                i += t, 0 === c ? e += t : A += t;
              }
            }), u(), s;
          };
        }, {}],
        27: [function (t, e, A) {
          function r(t) {
            n.apply(this, arguments), this.type = "linear" === t.args[0] ? n.TYPES.LINEAR : n.TYPES.RADIAL;
          }

          var n = t("./gradientcontainer");
          r.prototype = Object.create(n.prototype), e.exports = r;
        }, {
          "./gradientcontainer": 9
        }],
        28: [function (t, e, A) {
          e.exports = function (t) {
            return new Promise(function (e, A) {
              var r = new XMLHttpRequest();
              r.open("GET", t), r.onload = function () {
                200 === r.status ? e(r.responseText) : A(new Error(r.statusText));
              }, r.onerror = function () {
                A(new Error("Network Error"));
              }, r.send();
            });
          };
        }, {}]
      }, {}, [4])(4), function (t) {
        var e = "+".charCodeAt(0),
            A = "/".charCodeAt(0),
            r = "0".charCodeAt(0),
            n = "a".charCodeAt(0),
            i = "A".charCodeAt(0),
            o = "-".charCodeAt(0),
            a = "_".charCodeAt(0),
            s = function s(t) {
          var s = t.charCodeAt(0);
          return s === e || s === o ? 62 : s === A || s === a ? 63 : s < r ? -1 : s < r + 10 ? s - r + 26 + 26 : s < i + 26 ? s - i : s < n + 26 ? s - n + 26 : void 0;
        };

        t.API.TTFFont = function () {
          function t(t, e, A) {
            var r;

            if (this.rawData = t, r = this.contents = new l(t), this.contents.pos = 4, "ttcf" === r.readString(4)) {
              if (!e) throw new Error("Must specify a font name for TTC files.");
              throw new Error("Font " + e + " not found in TTC file.");
            }

            r.pos = 0, this.parse(), this.subset = new H(this), this.registerTTF();
          }

          return t.open = function (e, A, r, n) {
            return new t(function (t) {
              function e(t) {
                a[l++] = t;
              }

              var A, r, n, i, o, a;
              if (0 < t.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var c = t.length;
              o = "=" === t.charAt(c - 2) ? 2 : "=" === t.charAt(c - 1) ? 1 : 0, a = new Uint8Array(3 * t.length / 4 - o), n = 0 < o ? t.length - 4 : t.length;
              var l = 0;

              for (r = A = 0; A < n; A += 4, r += 3) {
                e((16711680 & (i = s(t.charAt(A)) << 18 | s(t.charAt(A + 1)) << 12 | s(t.charAt(A + 2)) << 6 | s(t.charAt(A + 3)))) >> 16), e((65280 & i) >> 8), e(255 & i);
              }

              return 2 === o ? e(255 & (i = s(t.charAt(A)) << 2 | s(t.charAt(A + 1)) >> 4)) : 1 === o && (e((i = s(t.charAt(A)) << 10 | s(t.charAt(A + 1)) << 4 | s(t.charAt(A + 2)) >> 2) >> 8 & 255), e(255 & i)), a;
            }(r), A, n);
          }, t.prototype.parse = function () {
            return this.directory = new u(this.contents), this.head = new f(this), this.name = new v(this), this.cmap = new g(this), this.hhea = new B(this), this.maxp = new Q(this), this.hmtx = new C(this), this.post = new m(this), this.os2 = new w(this), this.loca = new x(this), this.glyf = new b(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
          }, t.prototype.registerTTF = function () {
            var t, e, A, r, n;
            if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function () {
              var e, A, r, n;

              for (n = [], e = 0, A = (r = this.bbox).length; e < A; e++) {
                t = r[e], n.push(Math.round(t * this.scaleFactor));
              }

              return n;
            }.call(this), this.stemV = 0, this.post.exists ? (A = 255 & (r = this.post.italic_angle), !0 & (e = r >> 16) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + A)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (n = this.familyClass) || 2 === n || 3 === n || 4 === n || 5 === n || 7 === n, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
          }, t.prototype.characterToGlyph = function (t) {
            var e;
            return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0;
          }, t.prototype.widthOfGlyph = function (t) {
            var e;
            return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e;
          }, t.prototype.widthOfString = function (t, e, A) {
            var r, n, i, o, a;

            for (n = o = i = 0, a = (t = "" + t).length; 0 <= a ? o < a : a < o; n = 0 <= a ? ++o : --o) {
              r = t.charCodeAt(n), i += this.widthOfGlyph(this.characterToGlyph(r)) + A * (1e3 / e) || 0;
            }

            return i * (e / 1e3);
          }, t.prototype.lineHeight = function (t, e) {
            var A;
            return null == e && (e = !1), A = e ? this.lineGap : 0, (this.ascender + A - this.decender) / 1e3 * t;
          }, t;
        }();

        var c,
            l = function () {
          function t(t) {
            this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length;
          }

          return t.prototype.readByte = function () {
            return this.data[this.pos++];
          }, t.prototype.writeByte = function (t) {
            return this.data[this.pos++] = t;
          }, t.prototype.readUInt32 = function () {
            return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
          }, t.prototype.writeUInt32 = function (t) {
            return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
          }, t.prototype.readInt32 = function () {
            var t;
            return 2147483648 <= (t = this.readUInt32()) ? t - 4294967296 : t;
          }, t.prototype.writeInt32 = function (t) {
            return t < 0 && (t += 4294967296), this.writeUInt32(t);
          }, t.prototype.readUInt16 = function () {
            return this.readByte() << 8 | this.readByte();
          }, t.prototype.writeUInt16 = function (t) {
            return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
          }, t.prototype.readInt16 = function () {
            var t;
            return 32768 <= (t = this.readUInt16()) ? t - 65536 : t;
          }, t.prototype.writeInt16 = function (t) {
            return t < 0 && (t += 65536), this.writeUInt16(t);
          }, t.prototype.readString = function (t) {
            var e, A, r;

            for (A = [], e = r = 0; 0 <= t ? r < t : t < r; e = 0 <= t ? ++r : --r) {
              A[e] = String.fromCharCode(this.readByte());
            }

            return A.join("");
          }, t.prototype.writeString = function (t) {
            var e, A, r, n;

            for (n = [], e = A = 0, r = t.length; 0 <= r ? A < r : r < A; e = 0 <= r ? ++A : --A) {
              n.push(this.writeByte(t.charCodeAt(e)));
            }

            return n;
          }, t.prototype.readShort = function () {
            return this.readInt16();
          }, t.prototype.writeShort = function (t) {
            return this.writeInt16(t);
          }, t.prototype.readLongLong = function () {
            var t, e, A, r, n, i, o, a;
            return t = this.readByte(), e = this.readByte(), A = this.readByte(), r = this.readByte(), n = this.readByte(), i = this.readByte(), o = this.readByte(), a = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ A) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ n) + 65536 * (255 ^ i) + 256 * (255 ^ o) + (255 ^ a) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * A + 4294967296 * r + 16777216 * n + 65536 * i + 256 * o + a;
          }, t.prototype.readInt = function () {
            return this.readInt32();
          }, t.prototype.writeInt = function (t) {
            return this.writeInt32(t);
          }, t.prototype.read = function (t) {
            var e, A;

            for (e = [], A = 0; 0 <= t ? A < t : t < A; 0 <= t ? ++A : --A) {
              e.push(this.readByte());
            }

            return e;
          }, t.prototype.write = function (t) {
            var e, A, r, n;

            for (n = [], A = 0, r = t.length; A < r; A++) {
              e = t[A], n.push(this.writeByte(e));
            }

            return n;
          }, t;
        }(),
            u = function () {
          function t(t) {
            var e, A, r;

            for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, A = 0, r = this.tableCount; 0 <= r ? A < r : r < A; 0 <= r ? ++A : --A) {
              e = {
                tag: t.readString(4),
                checksum: t.readInt(),
                offset: t.readInt(),
                length: t.readInt()
              }, this.tables[e.tag] = e;
            }
          }

          var e;
          return t.prototype.encode = function (t) {
            var A, r, n, i, o, a, s, c, u, h, d, f, p;

            for (p in d = Object.keys(t).length, a = Math.log(2), u = 16 * Math.floor(Math.log(d) / a), i = Math.floor(u / a), c = 16 * d - u, (r = new l()).writeInt(this.scalarType), r.writeShort(d), r.writeShort(u), r.writeShort(i), r.writeShort(c), n = 16 * d, s = r.pos + n, o = null, f = [], t) {
              for (h = t[p], r.writeString(p), r.writeInt(e(h)), r.writeInt(s), r.writeInt(h.length), f = f.concat(h), "head" === p && (o = s), s += h.length; s % 4;) {
                f.push(0), s++;
              }
            }

            return r.write(f), A = 2981146554 - e(r.data), r.pos = o + 8, r.writeUInt32(A), r.data;
          }, e = function e(t) {
            var e, A, r, n;

            for (t = U.call(t); t.length % 4;) {
              t.push(0);
            }

            for (A = new l(t), r = e = 0, n = t.length; r < n; r += 4) {
              e += A.readUInt32();
            }

            return 4294967295 & e;
          }, t;
        }(),
            h = {}.hasOwnProperty,
            d = function d(t, e) {
          function A() {
            this.constructor = t;
          }

          for (var r in e) {
            h.call(e, r) && (t[r] = e[r]);
          }

          return A.prototype = e.prototype, t.prototype = new A(), t.__super__ = e.prototype, t;
        };

        c = function () {
          function t(t) {
            var e;
            this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
          }

          return t.prototype.parse = function () {}, t.prototype.encode = function () {}, t.prototype.raw = function () {
            return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
          }, t;
        }();

        var f = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "head", e.prototype.parse = function (t) {
            return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort();
          }, e;
        }(),
            p = function () {
          function t(t, e) {
            var A, r, n, i, o, a, s, c, l, u, h, d, f, p, g, B, w, m;

            switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), l = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
              case 0:
                for (a = g = 0; g < 256; a = ++g) {
                  this.codeMap[a] = t.readByte();
                }

                break;

              case 4:
                for (h = t.readUInt16(), u = h / 2, t.pos += 6, n = function () {
                  var e, A;

                  for (A = [], a = e = 0; 0 <= u ? e < u : u < e; a = 0 <= u ? ++e : --e) {
                    A.push(t.readUInt16());
                  }

                  return A;
                }(), t.pos += 2, f = function () {
                  var e, A;

                  for (A = [], a = e = 0; 0 <= u ? e < u : u < e; a = 0 <= u ? ++e : --e) {
                    A.push(t.readUInt16());
                  }

                  return A;
                }(), s = function () {
                  var e, A;

                  for (A = [], a = e = 0; 0 <= u ? e < u : u < e; a = 0 <= u ? ++e : --e) {
                    A.push(t.readUInt16());
                  }

                  return A;
                }(), c = function () {
                  var e, A;

                  for (A = [], a = e = 0; 0 <= u ? e < u : u < e; a = 0 <= u ? ++e : --e) {
                    A.push(t.readUInt16());
                  }

                  return A;
                }(), r = (this.length - t.pos + this.offset) / 2, o = function () {
                  var e, A;

                  for (A = [], a = e = 0; 0 <= r ? e < r : r < e; a = 0 <= r ? ++e : --e) {
                    A.push(t.readUInt16());
                  }

                  return A;
                }(), a = B = 0, m = n.length; B < m; a = ++B) {
                  for (p = n[a], A = w = d = f[a]; d <= p ? w <= p : p <= w; A = d <= p ? ++w : --w) {
                    0 === c[a] ? i = A + s[a] : 0 !== (i = o[c[a] / 2 + (A - d) - (u - a)] || 0) && (i += s[a]), this.codeMap[A] = 65535 & i;
                  }
                }

            }

            t.pos = l;
          }

          return t.encode = function (t, e) {
            var A, r, n, i, o, a, s, c, u, h, d, f, p, g, B, w, m, y, v, Q, C, U, b, F, E, x, H, I, S, _, T, N, k, O, P, D, L, R, M, K, z, q, j, X, V, G;

            switch (I = new l(), i = Object.keys(t).sort(function (t, e) {
              return t - e;
            }), e) {
              case "macroman":
                for (p = 0, g = function () {
                  var t, e;

                  for (e = [], f = t = 0; t < 256; f = ++t) {
                    e.push(0);
                  }

                  return e;
                }(), w = {
                  0: 0
                }, n = {}, S = 0, k = i.length; S < k; S++) {
                  null == w[j = t[r = i[S]]] && (w[j] = ++p), n[r] = {
                    old: t[r],
                    "new": w[t[r]]
                  }, g[r] = w[t[r]];
                }

                return I.writeUInt16(1), I.writeUInt16(0), I.writeUInt32(12), I.writeUInt16(0), I.writeUInt16(262), I.writeUInt16(0), I.write(g), {
                  charMap: n,
                  subtable: I.data,
                  maxGlyphID: p + 1
                };

              case "unicode":
                for (x = [], u = [], w = {}, A = {}, B = s = null, _ = m = 0, O = i.length; _ < O; _++) {
                  null == w[v = t[r = i[_]]] && (w[v] = ++m), A[r] = {
                    old: v,
                    "new": w[v]
                  }, o = w[v] - r, null != B && o === s || (B && u.push(B), x.push(r), s = o), B = r;
                }

                for (B && u.push(B), u.push(65535), x.push(65535), F = 2 * (b = x.length), U = 2 * Math.pow(Math.log(b) / Math.LN2, 2), h = Math.log(U / 2) / Math.LN2, C = 2 * b - U, a = [], Q = [], d = [], f = T = 0, P = x.length; T < P; f = ++T) {
                  if (E = x[f], c = u[f], 65535 === E) {
                    a.push(0), Q.push(0);
                    break;
                  }

                  if (32768 <= E - (H = A[E]["new"])) for (a.push(0), Q.push(2 * (d.length + b - f)), r = N = E; E <= c ? N <= c : c <= N; r = E <= c ? ++N : --N) {
                    d.push(A[r]["new"]);
                  } else a.push(H - E), Q.push(0);
                }

                for (I.writeUInt16(3), I.writeUInt16(1), I.writeUInt32(12), I.writeUInt16(4), I.writeUInt16(16 + 8 * b + 2 * d.length), I.writeUInt16(0), I.writeUInt16(F), I.writeUInt16(U), I.writeUInt16(h), I.writeUInt16(C), z = 0, D = u.length; z < D; z++) {
                  r = u[z], I.writeUInt16(r);
                }

                for (I.writeUInt16(0), q = 0, L = x.length; q < L; q++) {
                  r = x[q], I.writeUInt16(r);
                }

                for (X = 0, R = a.length; X < R; X++) {
                  o = a[X], I.writeUInt16(o);
                }

                for (V = 0, M = Q.length; V < M; V++) {
                  y = Q[V], I.writeUInt16(y);
                }

                for (G = 0, K = d.length; G < K; G++) {
                  p = d[G], I.writeUInt16(p);
                }

                return {
                  charMap: A,
                  subtable: I.data,
                  maxGlyphID: m + 1
                };
            }
          }, t;
        }(),
            g = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "cmap", e.prototype.parse = function (t) {
            var e, A, r;

            for (t.pos = this.offset, this.version = t.readUInt16(), A = t.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= A ? r < A : A < r; 0 <= A ? ++r : --r) {
              e = new p(t, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e);
            }

            return !0;
          }, e.encode = function (t, e) {
            var A, r;
            return null == e && (e = "macroman"), A = p.encode(t, e), (r = new l()).writeUInt16(0), r.writeUInt16(1), A.table = r.data.concat(A.subtable), A;
          }, e;
        }(),
            B = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "hhea", e.prototype.parse = function (t) {
            return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16();
          }, e;
        }(),
            w = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "OS/2", e.prototype.parse = function (t) {
            if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = function () {
              var e, A;

              for (A = [], e = 0; e < 10; ++e) {
                A.push(t.readByte());
              }

              return A;
            }(), this.charRange = function () {
              var e, A;

              for (A = [], e = 0; e < 4; ++e) {
                A.push(t.readInt());
              }

              return A;
            }(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), 0 < this.version && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = function () {
              var e, A;

              for (A = [], e = 0; e < 2; ++e) {
                A.push(t.readInt());
              }

              return A;
            }(), 1 < this.version)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort();
          }, e;
        }(),
            m = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "post", e.prototype.parse = function (t) {
            var e, A, r, n;

            switch (t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format) {
              case 65536:
                break;

              case 131072:
                for (A = t.readUInt16(), this.glyphNameIndex = [], r = 0; 0 <= A ? r < A : A < r; 0 <= A ? ++r : --r) {
                  this.glyphNameIndex.push(t.readUInt16());
                }

                for (this.names = [], n = []; t.pos < this.offset + this.length;) {
                  e = t.readByte(), n.push(this.names.push(t.readString(e)));
                }

                return n;

              case 151552:
                return A = t.readUInt16(), this.offsets = t.read(A);

              case 196608:
                break;

              case 262144:
                return this.map = function () {
                  var e, A, r;

                  for (r = [], e = 0, A = this.file.maxp.numGlyphs; 0 <= A ? e < A : A < e; 0 <= A ? ++e : --e) {
                    r.push(t.readUInt32());
                  }

                  return r;
                }.call(this);
            }
          }, e;
        }(),
            y = function y(t, e) {
          this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
        },
            v = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "name", e.prototype.parse = function (t) {
            var e, A, r, n, i, o, a, s, c, l, u, h;

            for (t.pos = this.offset, t.readShort(), e = t.readShort(), o = t.readShort(), A = [], n = c = 0; 0 <= e ? c < e : e < c; n = 0 <= e ? ++c : --c) {
              A.push({
                platformID: t.readShort(),
                encodingID: t.readShort(),
                languageID: t.readShort(),
                nameID: t.readShort(),
                length: t.readShort(),
                offset: this.offset + o + t.readShort()
              });
            }

            for (a = {}, n = l = 0, u = A.length; l < u; n = ++l) {
              r = A[n], t.pos = r.offset, s = t.readString(r.length), i = new y(s, r), null == a[h = r.nameID] && (a[h] = []), a[r.nameID].push(i);
            }

            return this.strings = a, this.copyright = a[0], this.fontFamily = a[1], this.fontSubfamily = a[2], this.uniqueSubfamily = a[3], this.fontName = a[4], this.version = a[5], this.postscriptName = a[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, ""), this.trademark = a[7], this.manufacturer = a[8], this.designer = a[9], this.description = a[10], this.vendorUrl = a[11], this.designerUrl = a[12], this.license = a[13], this.licenseUrl = a[14], this.preferredFamily = a[15], this.preferredSubfamily = a[17], this.compatibleFull = a[18], this.sampleText = a[19];
          }, e;
        }(),
            Q = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "maxp", e.prototype.parse = function (t) {
            return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16();
          }, e;
        }(),
            C = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "hmtx", e.prototype.parse = function (t) {
            var e, A, r, n, i, o, a;

            for (t.pos = this.offset, this.metrics = [], n = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? n < o : o < n; 0 <= o ? ++n : --n) {
              this.metrics.push({
                advance: t.readUInt16(),
                lsb: t.readInt16()
              });
            }

            for (A = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function () {
              var e, r;

              for (r = [], e = 0; 0 <= A ? e < A : A < e; 0 <= A ? ++e : --e) {
                r.push(t.readInt16());
              }

              return r;
            }(), this.widths = function () {
              var t, e, A, n;

              for (n = [], t = 0, e = (A = this.metrics).length; t < e; t++) {
                r = A[t], n.push(r.advance);
              }

              return n;
            }.call(this), e = this.widths[this.widths.length - 1], a = [], i = 0; 0 <= A ? i < A : A < i; 0 <= A ? ++i : --i) {
              a.push(this.widths.push(e));
            }

            return a;
          }, e.prototype.forGlyph = function (t) {
            return t in this.metrics ? this.metrics[t] : {
              advance: this.metrics[this.metrics.length - 1].advance,
              lsb: this.leftSideBearings[t - this.metrics.length]
            };
          }, e;
        }(),
            U = [].slice,
            b = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "glyf", e.prototype.parse = function (t) {
            return this.cache = {};
          }, e.prototype.glyphFor = function (t) {
            var e, A, r, n, i, o, a, s, c, u;
            return (t = t) in this.cache ? this.cache[t] : (n = this.file.loca, e = this.file.contents, A = n.indexOf(t), 0 === (r = n.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + A, i = (o = new l(e.read(r))).readShort(), s = o.readShort(), u = o.readShort(), a = o.readShort(), c = o.readShort(), this.cache[t] = -1 === i ? new E(o, s, u, a, c) : new F(o, i, s, u, a, c), this.cache[t]));
          }, e.prototype.encode = function (t, e, A) {
            var r, n, i, o, a;

            for (i = [], n = [], o = 0, a = e.length; o < a; o++) {
              r = t[e[o]], n.push(i.length), r && (i = i.concat(r.encode(A)));
            }

            return n.push(i.length), {
              table: i,
              offsets: n
            };
          }, e;
        }(),
            F = function () {
          function t(t, e, A, r, n, i) {
            this.raw = t, this.numberOfContours = e, this.xMin = A, this.yMin = r, this.xMax = n, this.yMax = i, this.compound = !1;
          }

          return t.prototype.encode = function () {
            return this.raw.data;
          }, t;
        }(),
            E = function () {
          function t(t, e, A, r, n) {
            var i, o;

            for (this.raw = t, this.xMin = e, this.yMin = A, this.xMax = r, this.yMax = n, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], i = this.raw; o = i.readShort(), this.glyphOffsets.push(i.pos), this.glyphIDs.push(i.readShort()), 32 & o;) {
              i.pos += 1 & o ? 4 : 2, 128 & o ? i.pos += 8 : 64 & o ? i.pos += 4 : 8 & o && (i.pos += 2);
            }
          }

          return t.prototype.encode = function (t) {
            var e, A, r, n, i;

            for (A = new l(U.call(this.raw.data)), e = r = 0, n = (i = this.glyphIDs).length; r < n; e = ++r) {
              i[e], A.pos = this.glyphOffsets[e];
            }

            return A.data;
          }, t;
        }(),
            x = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return d(e, c), e.prototype.tag = "loca", e.prototype.parse = function (t) {
            var e;
            return t.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = 0 === e ? function () {
              var e, A, r;

              for (r = [], e = 0, A = this.length; e < A; e += 2) {
                r.push(2 * t.readUInt16());
              }

              return r;
            }.call(this) : function () {
              var e, A, r;

              for (r = [], e = 0, A = this.length; e < A; e += 4) {
                r.push(t.readUInt32());
              }

              return r;
            }.call(this);
          }, e.prototype.indexOf = function (t) {
            return this.offsets[t];
          }, e.prototype.lengthOf = function (t) {
            return this.offsets[t + 1] - this.offsets[t];
          }, e.prototype.encode = function (t, e) {
            for (var A = new Uint32Array(this.offsets.length), r = 0, n = 0, i = 0; i < A.length; ++i) {
              if (A[i] = r, n < e.length && e[n] == i) {
                ++n, A[i] = r;
                var o = this.offsets[i],
                    a = this.offsets[i + 1] - o;
                0 < a && (r += a);
              }
            }

            for (var s = new Array(4 * A.length), c = 0; c < A.length; ++c) {
              s[4 * c + 3] = 255 & A[c], s[4 * c + 2] = (65280 & A[c]) >> 8, s[4 * c + 1] = (16711680 & A[c]) >> 16, s[4 * c] = (4278190080 & A[c]) >> 24;
            }

            return s;
          }, e;
        }(),
            H = function () {
          function t(t) {
            this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
          }

          return t.prototype.generateCmap = function () {
            var t, e, A, r, n;

            for (e in r = this.font.cmap.tables[0].codeMap, t = {}, n = this.subset) {
              A = n[e], t[e] = r[A];
            }

            return t;
          }, t.prototype.glyphsFor = function (t) {
            var e, A, r, n, i, o, a;

            for (r = {}, i = 0, o = t.length; i < o; i++) {
              r[n = t[i]] = this.font.glyf.glyphFor(n);
            }

            for (n in e = [], r) {
              (null != (A = r[n]) ? A.compound : void 0) && e.push.apply(e, A.glyphIDs);
            }

            if (0 < e.length) for (n in a = this.glyphsFor(e)) {
              A = a[n], r[n] = A;
            }
            return r;
          }, t.prototype.encode = function (t) {
            var e, A, r, n, i, o, a, s, c, l, u, h, d, f, p;

            for (A in e = g.encode(this.generateCmap(), "unicode"), n = this.glyphsFor(t), u = {
              0: 0
            }, p = e.charMap) {
              u[(o = p[A]).old] = o["new"];
            }

            for (h in l = e.maxGlyphID, n) {
              h in u || (u[h] = l++);
            }

            return s = function (t) {
              var e, A;

              for (e in A = {}, t) {
                A[t[e]] = e;
              }

              return A;
            }(u), c = Object.keys(s).sort(function (t, e) {
              return t - e;
            }), d = function () {
              var t, e, A;

              for (A = [], t = 0, e = c.length; t < e; t++) {
                i = c[t], A.push(s[i]);
              }

              return A;
            }(), r = this.font.glyf.encode(n, d, u), a = this.font.loca.encode(r.offsets, d), f = {
              cmap: this.font.cmap.raw(),
              glyf: r.table,
              loca: a,
              hmtx: this.font.hmtx.raw(),
              hhea: this.font.hhea.raw(),
              maxp: this.font.maxp.raw(),
              post: this.font.post.raw(),
              name: this.font.name.raw(),
              head: this.font.head.raw()
            }, this.font.os2.exists && (f["OS/2"] = this.font.os2.raw()), this.font.directory.encode(f);
          }, t;
        }();

        t.API.PDFObject = function () {
          function t() {}

          var e;
          return e = function e(t, _e) {
            return (Array(_e + 1).join("0") + t).slice(-_e);
          }, t.convert = function (A) {
            var r, n, i, o;
            if (Array.isArray(A)) return "[" + function () {
              var e, n, i;

              for (i = [], e = 0, n = A.length; e < n; e++) {
                r = A[e], i.push(t.convert(r));
              }

              return i;
            }().join(" ") + "]";
            if ("string" == typeof A) return "/" + A;
            if (null != A ? A.isString : void 0) return "(" + A + ")";
            if (A instanceof Date) return "(D:" + e(A.getUTCFullYear(), 4) + e(A.getUTCMonth(), 2) + e(A.getUTCDate(), 2) + e(A.getUTCHours(), 2) + e(A.getUTCMinutes(), 2) + e(A.getUTCSeconds(), 2) + "Z)";

            if ("[object Object]" === {}.toString.call(A)) {
              for (n in i = ["<<"], A) {
                o = A[n], i.push("/" + n + " " + t.convert(o));
              }

              return i.push(">>"), i.join("\n");
            }

            return "" + A;
          }, t;
        }();
      }(st), Ct = "undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")(), Ut = function () {
        function t(t) {
          var e, A, r, n, i, o, a, s, c, l, u, h, d, f;

          for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
            switch (e = this.readUInt32(), c = function () {
              var t, e;

              for (e = [], t = 0; t < 4; ++t) {
                e.push(String.fromCharCode(this.data[this.pos++]));
              }

              return e;
            }.call(this).join("")) {
              case "IHDR":
                this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                break;

              case "acTL":
                this.animation = {
                  numFrames: this.readUInt32(),
                  numPlays: this.readUInt32() || 1 / 0,
                  frames: []
                };
                break;

              case "PLTE":
                this.palette = this.read(e);
                break;

              case "fcTL":
                o && this.animation.frames.push(o), this.pos += 4, o = {
                  width: this.readUInt32(),
                  height: this.readUInt32(),
                  xOffset: this.readUInt32(),
                  yOffset: this.readUInt32()
                }, i = this.readUInt16(), n = this.readUInt16() || 100, o.delay = 1e3 * i / n, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
                break;

              case "IDAT":
              case "fdAT":
                for ("fdAT" === c && (this.pos += 4, e -= 4), t = (null != o ? o.data : void 0) || this.imgData, h = 0; 0 <= e ? h < e : e < h; 0 <= e ? ++h : --h) {
                  t.push(this.data[this.pos++]);
                }

                break;

              case "tRNS":
                switch (this.transparency = {}, this.colorType) {
                  case 3:
                    if (r = this.palette.length / 3, this.transparency.indexed = this.read(e), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
                    if (0 < (l = r - this.transparency.indexed.length)) for (d = 0; 0 <= l ? d < l : l < d; 0 <= l ? ++d : --d) {
                      this.transparency.indexed.push(255);
                    }
                    break;

                  case 0:
                    this.transparency.grayscale = this.read(e)[0];
                    break;

                  case 2:
                    this.transparency.rgb = this.read(e);
                }

                break;

              case "tEXt":
                a = (u = this.read(e)).indexOf(0), s = String.fromCharCode.apply(String, u.slice(0, a)), this.text[s] = String.fromCharCode.apply(String, u.slice(a + 1));
                break;

              case "IEND":
                return o && this.animation.frames.push(o), this.colors = function () {
                  switch (this.colorType) {
                    case 0:
                    case 3:
                    case 4:
                      return 1;

                    case 2:
                    case 6:
                      return 3;
                  }
                }.call(this), this.hasAlphaChannel = 4 === (f = this.colorType) || 6 === f, A = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * A, this.colorSpace = function () {
                  switch (this.colors) {
                    case 1:
                      return "DeviceGray";

                    case 3:
                      return "DeviceRGB";
                  }
                }.call(this), void (this.imgData = new Uint8Array(this.imgData));

              default:
                this.pos += e;
            }

            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
          }
        }

        var e, A, r;
        t.load = function (e, A, r) {
          var n;
          return "function" == typeof A && (r = A), (n = new XMLHttpRequest()).open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function () {
            var e;
            return e = new t(new Uint8Array(n.response || n.mozResponseArrayBuffer)), "function" == typeof (null != A ? A.getContext : void 0) && e.render(A), "function" == typeof r ? r(e) : void 0;
          }, n.send(null);
        }, t.prototype.read = function (t) {
          var e, A;

          for (A = [], e = 0; 0 <= t ? e < t : t < e; 0 <= t ? ++e : --e) {
            A.push(this.data[this.pos++]);
          }

          return A;
        }, t.prototype.readUInt32 = function () {
          return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
        }, t.prototype.readUInt16 = function () {
          return this.data[this.pos++] << 8 | this.data[this.pos++];
        }, t.prototype.decodePixels = function (t) {
          function e(e, o, a, s) {
            var c,
                l,
                u,
                h,
                d,
                f,
                p,
                g,
                B,
                w,
                m,
                y,
                v,
                Q,
                C,
                U,
                b,
                F,
                E,
                x,
                H,
                I = Math.ceil((i.width - e) / a),
                S = Math.ceil((i.height - o) / s),
                _ = i.width == I && i.height == S;

            for (Q = A * I, y = _ ? r : new Uint8Array(Q * S), f = t.length, l = v = 0; v < S && n < f;) {
              switch (t[n++]) {
                case 0:
                  for (h = b = 0; b < Q; h = b += 1) {
                    y[l++] = t[n++];
                  }

                  break;

                case 1:
                  for (h = F = 0; F < Q; h = F += 1) {
                    c = t[n++], d = h < A ? 0 : y[l - A], y[l++] = (c + d) % 256;
                  }

                  break;

                case 2:
                  for (h = E = 0; E < Q; h = E += 1) {
                    c = t[n++], u = (h - h % A) / A, C = v && y[(v - 1) * Q + u * A + h % A], y[l++] = (C + c) % 256;
                  }

                  break;

                case 3:
                  for (h = x = 0; x < Q; h = x += 1) {
                    c = t[n++], u = (h - h % A) / A, d = h < A ? 0 : y[l - A], C = v && y[(v - 1) * Q + u * A + h % A], y[l++] = (c + Math.floor((d + C) / 2)) % 256;
                  }

                  break;

                case 4:
                  for (h = H = 0; H < Q; h = H += 1) {
                    c = t[n++], u = (h - h % A) / A, d = h < A ? 0 : y[l - A], 0 === v ? C = U = 0 : (C = y[(v - 1) * Q + u * A + h % A], U = u && y[(v - 1) * Q + (u - 1) * A + h % A]), p = d + C - U, g = Math.abs(p - d), w = Math.abs(p - C), m = Math.abs(p - U), B = g <= w && g <= m ? d : w <= m ? C : U, y[l++] = (c + B) % 256;
                  }

                  break;

                default:
                  throw new Error("Invalid filter algorithm: " + t[n - 1]);
              }

              if (!_) {
                var T = ((o + v * s) * i.width + e) * A,
                    N = v * Q;

                for (h = 0; h < I; h += 1) {
                  for (var k = 0; k < A; k += 1) {
                    r[T++] = y[N++];
                  }

                  T += (a - 1) * A;
                }
              }

              v++;
            }
          }

          var A = this.pixelBitlength / 8,
              r = new Uint8Array(this.width * this.height * A),
              n = 0,
              i = this;
          return null == t && (t = this.imgData), 0 === t.length ? new Uint8Array(0) : (t = (t = new Et(t)).getBytes(), 1 == i.interlaceMethod ? (e(0, 0, 8, 8), e(4, 0, 8, 8), e(0, 4, 4, 8), e(2, 0, 4, 4), e(0, 2, 2, 4), e(1, 0, 2, 2), e(0, 1, 1, 2)) : e(0, 0, 1, 1), r);
        }, t.prototype.decodePalette = function () {
          var t, e, A, r, n, i, o, a, s;

          for (A = this.palette, i = this.transparency.indexed || [], n = new Uint8Array((i.length || 0) + A.length), r = 0, A.length, e = o = t = 0, a = A.length; o < a; e = o += 3) {
            n[r++] = A[e], n[r++] = A[e + 1], n[r++] = A[e + 2], n[r++] = null != (s = i[t++]) ? s : 255;
          }

          return n;
        }, t.prototype.copyToImageData = function (t, e) {
          var A, r, n, i, o, a, s, c, l, u, h;
          if (r = this.colors, l = null, A = this.hasAlphaChannel, this.palette.length && (l = null != (h = this._decodedPalette) ? h : this._decodedPalette = this.decodePalette(), r = 4, A = !0), c = (n = t.data || t).length, o = l || e, i = a = 0, 1 === r) for (; i < c;) {
            s = l ? 4 * e[i / 4] : a, u = o[s++], n[i++] = u, n[i++] = u, n[i++] = u, n[i++] = A ? o[s++] : 255, a = s;
          } else for (; i < c;) {
            s = l ? 4 * e[i / 4] : a, n[i++] = o[s++], n[i++] = o[s++], n[i++] = o[s++], n[i++] = A ? o[s++] : 255, a = s;
          }
        }, t.prototype.decode = function () {
          var t;
          return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t;
        };

        try {
          A = Ct.document.createElement("canvas"), r = A.getContext("2d");
        } catch (t) {
          return -1;
        }

        return e = function e(t) {
          var e;
          return r.width = t.width, r.height = t.height, r.clearRect(0, 0, t.width, t.height), r.putImageData(t, 0, 0), (e = new Image()).src = A.toDataURL(), e;
        }, t.prototype.decodeFrames = function (t) {
          var A, r, n, i, o, a, s, c;

          if (this.animation) {
            for (c = [], r = o = 0, a = (s = this.animation.frames).length; o < a; r = ++o) {
              A = s[r], n = t.createImageData(A.width, A.height), i = this.decodePixels(new Uint8Array(A.data)), this.copyToImageData(n, i), A.imageData = n, c.push(A.image = e(n));
            }

            return c;
          }
        }, t.prototype.renderFrame = function (t, e) {
          var A, r, n;
          return A = (r = this.animation.frames)[e], n = r[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != n ? n.disposeOp : void 0) ? t.clearRect(n.xOffset, n.yOffset, n.width, n.height) : 2 === (null != n ? n.disposeOp : void 0) && t.putImageData(n.imageData, n.xOffset, n.yOffset), 0 === A.blendOp && t.clearRect(A.xOffset, A.yOffset, A.width, A.height), t.drawImage(A.image, A.xOffset, A.yOffset);
        }, t.prototype.animate = function (t) {
          var _e2,
              A,
              r,
              n,
              i,
              o,
              a = this;

          return A = 0, o = this.animation, n = o.numFrames, r = o.frames, i = o.numPlays, (_e2 = function e() {
            var o, s;
            if (o = A++ % n, s = r[o], a.renderFrame(t, o), 1 < n && A / n < i) return a.animation._timeout = setTimeout(_e2, s.delay);
          })();
        }, t.prototype.stopAnimation = function () {
          var t;
          return clearTimeout(null != (t = this.animation) ? t._timeout : void 0);
        }, t.prototype.render = function (t) {
          var e, A;
          return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (A = e.createImageData(this.width, this.height), this.copyToImageData(A, this.decodePixels()), e.putImageData(A, 0, 0));
        }, t;
      }(), Ct.PNG = Ut;

      var Ft = function () {
        function t() {
          this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null;
        }

        return t.prototype = {
          ensureBuffer: function ensureBuffer(t) {
            var e = this.buffer,
                A = e ? e.byteLength : 0;
            if (t < A) return e;

            for (var r = 512; r < t;) {
              r <<= 1;
            }

            for (var n = new Uint8Array(r), i = 0; i < A; ++i) {
              n[i] = e[i];
            }

            return this.buffer = n;
          },
          getByte: function getByte() {
            for (var t = this.pos; this.bufferLength <= t;) {
              if (this.eof) return null;
              this.readBlock();
            }

            return this.buffer[this.pos++];
          },
          getBytes: function getBytes(t) {
            var e = this.pos;

            if (t) {
              this.ensureBuffer(e + t);

              for (var A = e + t; !this.eof && this.bufferLength < A;) {
                this.readBlock();
              }

              var r = this.bufferLength;
              r < A && (A = r);
            } else {
              for (; !this.eof;) {
                this.readBlock();
              }

              A = this.bufferLength;
            }

            return this.pos = A, this.buffer.subarray(e, A);
          },
          lookChar: function lookChar() {
            for (var t = this.pos; this.bufferLength <= t;) {
              if (this.eof) return null;
              this.readBlock();
            }

            return String.fromCharCode(this.buffer[this.pos]);
          },
          getChar: function getChar() {
            for (var t = this.pos; this.bufferLength <= t;) {
              if (this.eof) return null;
              this.readBlock();
            }

            return String.fromCharCode(this.buffer[this.pos++]);
          },
          makeSubStream: function makeSubStream(t, e, A) {
            for (var r = t + e; this.bufferLength <= r && !this.eof;) {
              this.readBlock();
            }

            return new Stream(this.buffer, t, e, A);
          },
          skip: function skip(t) {
            t || (t = 1), this.pos += t;
          },
          reset: function reset() {
            this.pos = 0;
          }
        }, t;
      }(),
          Et = function () {
        function t(t) {
          throw new Error(t);
        }

        function e(e) {
          var A = 0,
              r = e[A++],
              n = e[A++];
          -1 != r && -1 != n || t("Invalid header in flate stream"), 8 != (15 & r) && t("Unknown compression method in flate stream"), ((r << 8) + n) % 31 != 0 && t("Bad FCHECK in flate stream"), 32 & n && t("FDICT bit set in flate stream"), this.bytes = e, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, Ft.call(this);
        }

        if ("undefined" != typeof Uint32Array) {
          var A = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
              r = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
              n = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
              i = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
              o = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
          return (e.prototype = Object.create(Ft.prototype)).getBits = function (e) {
            for (var A, r = this.codeSize, n = this.codeBuf, i = this.bytes, o = this.bytesPos; r < e;) {
              void 0 === (A = i[o++]) && t("Bad encoding in flate stream"), n |= A << r, r += 8;
            }

            return A = n & (1 << e) - 1, this.codeBuf = n >> e, this.codeSize = r -= e, this.bytesPos = o, A;
          }, e.prototype.getCode = function (e) {
            for (var A = e[0], r = e[1], n = this.codeSize, i = this.codeBuf, o = this.bytes, a = this.bytesPos; n < r;) {
              var s;
              void 0 === (s = o[a++]) && t("Bad encoding in flate stream"), i |= s << n, n += 8;
            }

            var c = A[i & (1 << r) - 1],
                l = c >> 16,
                u = 65535 & c;
            return (0 == n || n < l || 0 == l) && t("Bad encoding in flate stream"), this.codeBuf = i >> l, this.codeSize = n - l, this.bytesPos = a, u;
          }, e.prototype.generateHuffmanTable = function (t) {
            for (var e = t.length, A = 0, r = 0; r < e; ++r) {
              t[r] > A && (A = t[r]);
            }

            for (var n = 1 << A, i = new Uint32Array(n), o = 1, a = 0, s = 2; o <= A; ++o, a <<= 1, s <<= 1) {
              for (var c = 0; c < e; ++c) {
                if (t[c] == o) {
                  var l = 0,
                      u = a;

                  for (r = 0; r < o; ++r) {
                    l = l << 1 | 1 & u, u >>= 1;
                  }

                  for (r = l; r < n; r += s) {
                    i[r] = o << 16 | c;
                  }

                  ++a;
                }
              }
            }

            return [i, A];
          }, e.prototype.readBlock = function () {
            function e(t, e, A, r, n) {
              for (var i = t.getBits(A) + r; 0 < i--;) {
                e[f++] = n;
              }
            }

            var a = this.getBits(3);

            if (1 & a && (this.eof = !0), 0 != (a >>= 1)) {
              var s, c;
              if (1 == a) s = i, c = o;else if (2 == a) {
                for (var l = this.getBits(5) + 257, u = this.getBits(5) + 1, h = this.getBits(4) + 4, d = Array(A.length), f = 0; f < h;) {
                  d[A[f++]] = this.getBits(3);
                }

                for (var p = this.generateHuffmanTable(d), g = 0, B = (f = 0, l + u), w = new Array(B); f < B;) {
                  var m = this.getCode(p);
                  16 == m ? e(this, w, 2, 3, g) : 17 == m ? e(this, w, 3, 3, g = 0) : 18 == m ? e(this, w, 7, 11, g = 0) : w[f++] = g = m;
                }

                s = this.generateHuffmanTable(w.slice(0, l)), c = this.generateHuffmanTable(w.slice(l, B));
              } else t("Unknown block type in flate stream");

              for (var y = (_ = this.buffer) ? _.length : 0, v = this.bufferLength;;) {
                var Q = this.getCode(s);
                if (Q < 256) y <= v + 1 && (y = (_ = this.ensureBuffer(v + 1)).length), _[v++] = Q;else {
                  if (256 == Q) return void (this.bufferLength = v);
                  var C = (Q = r[Q -= 257]) >> 16;
                  0 < C && (C = this.getBits(C)), g = (65535 & Q) + C, Q = this.getCode(c), 0 < (C = (Q = n[Q]) >> 16) && (C = this.getBits(C));
                  var U = (65535 & Q) + C;
                  y <= v + g && (y = (_ = this.ensureBuffer(v + g)).length);

                  for (var b = 0; b < g; ++b, ++v) {
                    _[v] = _[v - U];
                  }
                }
              }
            } else {
              var F,
                  E = this.bytes,
                  x = this.bytesPos;
              void 0 === (F = E[x++]) && t("Bad block header in flate stream");
              var H = F;
              void 0 === (F = E[x++]) && t("Bad block header in flate stream"), H |= F << 8, void 0 === (F = E[x++]) && t("Bad block header in flate stream");
              var I = F;
              void 0 === (F = E[x++]) && t("Bad block header in flate stream"), (I |= F << 8) != (65535 & ~H) && t("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;

              var S = this.bufferLength,
                  _ = this.ensureBuffer(S + H),
                  T = S + H;

              this.bufferLength = T;

              for (var N = S; N < T; ++N) {
                if (void 0 === (F = E[x++])) {
                  this.eof = !0;
                  break;
                }

                _[N] = F;
              }

              this.bytesPos = x;
            }
          }, e;
        }
      }();

      return function (t) {
        if ("object" != _typeof(t.console)) {
          t.console = {};

          for (var e, A, r = t.console, n = function n() {}, i = ["memory"], o = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e = i.pop();) {
            r[e] || (r[e] = {});
          }

          for (; A = o.pop();) {
            r[A] || (r[A] = n);
          }
        }

        var a,
            s,
            c,
            l,
            u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        void 0 === t.btoa && (t.btoa = function (t) {
          var e,
              A,
              r,
              n,
              i,
              o = 0,
              a = 0,
              s = "",
              c = [];
          if (!t) return t;

          for (; e = (i = t.charCodeAt(o++) << 16 | t.charCodeAt(o++) << 8 | t.charCodeAt(o++)) >> 18 & 63, A = i >> 12 & 63, r = i >> 6 & 63, n = 63 & i, c[a++] = u.charAt(e) + u.charAt(A) + u.charAt(r) + u.charAt(n), o < t.length;) {
            ;
          }

          s = c.join("");
          var l = t.length % 3;
          return (l ? s.slice(0, l - 3) : s) + "===".slice(l || 3);
        }), void 0 === t.atob && (t.atob = function (t) {
          var e,
              A,
              r,
              n,
              i,
              o,
              a = 0,
              s = 0,
              c = [];
          if (!t) return t;

          for (t += ""; e = (o = u.indexOf(t.charAt(a++)) << 18 | u.indexOf(t.charAt(a++)) << 12 | (n = u.indexOf(t.charAt(a++))) << 6 | (i = u.indexOf(t.charAt(a++)))) >> 16 & 255, A = o >> 8 & 255, r = 255 & o, c[s++] = 64 == n ? String.fromCharCode(e) : 64 == i ? String.fromCharCode(e, A) : String.fromCharCode(e, A, r), a < t.length;) {
            ;
          }

          return c.join("");
        }), Array.prototype.map || (Array.prototype.map = function (t) {
          if (null == this || "function" != typeof t) throw new TypeError();

          for (var e = Object(this), A = e.length >>> 0, r = new Array(A), n = 1 < arguments.length ? arguments[1] : void 0, i = 0; i < A; i++) {
            i in e && (r[i] = t.call(n, e[i], i, e));
          }

          return r;
        }), Array.isArray || (Array.isArray = function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
          if (null == this || "function" != typeof t) throw new TypeError();

          for (var A = Object(this), r = A.length >>> 0, n = 0; n < r; n++) {
            n in A && t.call(e, A[n], n, A);
          }
        }), Object.keys || (Object.keys = (a = Object.prototype.hasOwnProperty, s = !{
          toString: null
        }.propertyIsEnumerable("toString"), l = (c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (t) {
          if ("object" != _typeof(t) && ("function" != typeof t || null === t)) throw new TypeError();
          var e,
              A,
              r = [];

          for (e in t) {
            a.call(t, e) && r.push(e);
          }

          if (s) for (A = 0; A < l; A++) {
            a.call(t, c[A]) && r.push(c[A]);
          }
          return r;
        })), "function" != typeof Object.assign && (Object.assign = function (t) {
          if (null == t) throw new TypeError("Cannot convert undefined or null to object");
          t = Object(t);

          for (var e = 1; e < arguments.length; e++) {
            var A = arguments[e];
            if (null != A) for (var r in A) {
              Object.prototype.hasOwnProperty.call(A, r) && (t[r] = A[r]);
            }
          }

          return t;
        }), String.prototype.trim || (String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        }), String.prototype.trimLeft || (String.prototype.trimLeft = function () {
          return this.replace(/^\s+/g, "");
        }), String.prototype.trimRight || (String.prototype.trimRight = function () {
          return this.replace(/\s+$/g, "");
        });
      }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()), st;
    }();
  })),
      i = (n.jsPDF, n.saveAs, n.GifWriter, n.GifReader, A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.PATH = {
      VECTOR: 0,
      BEZIER_CURVE: 1,
      CIRCLE: 2
    };
  }));
  e(i);
  i.PATH;
  var o = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        r = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        n = /^#([a-f0-9]{3})$/i,
        i = function i(t) {
      var e = t.match(n);
      return !!e && [parseInt(e[1][0] + e[1][0], 16), parseInt(e[1][1] + e[1][1], 16), parseInt(e[1][2] + e[1][2], 16), null];
    },
        o = /^#([a-f0-9]{6})$/i,
        a = function a(t) {
      var e = t.match(o);
      return !!e && [parseInt(e[1].substring(0, 2), 16), parseInt(e[1].substring(2, 4), 16), parseInt(e[1].substring(4, 6), 16), null];
    },
        s = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
        c = function c(t) {
      var e = t.match(s);
      return !!e && [Number(e[1]), Number(e[2]), Number(e[3]), null];
    },
        l = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
        u = function u(t) {
      var e = t.match(l);
      return !!(e && e.length > 4) && [Number(e[1]), Number(e[2]), Number(e[3]), Number(e[4])];
    },
        h = function h(t) {
      return [Math.min(t[0], 255), Math.min(t[1], 255), Math.min(t[2], 255), t.length > 3 ? t[3] : null];
    },
        d = function d(t) {
      var e = p[t.toLowerCase()];
      return e || !1;
    },
        f = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var r = Array.isArray(e) ? h(e) : i(e) || c(e) || u(e) || d(e) || a(e) || [0, 0, 0, null],
            n = A(r, 4),
            o = n[0],
            s = n[1],
            l = n[2],
            f = n[3];
        this.r = o, this.g = s, this.b = l, this.a = f;
      }

      return r(t, [{
        key: "isTransparent",
        value: function value() {
          return 0 === this.a;
        }
      }, {
        key: "toString",
        value: function value() {
          return null !== this.a && 1 !== this.a ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        }
      }]), t;
    }();

    e["default"] = f;
    var p = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, null],
      antiquewhite: [250, 235, 215, null],
      aqua: [0, 255, 255, null],
      aquamarine: [127, 255, 212, null],
      azure: [240, 255, 255, null],
      beige: [245, 245, 220, null],
      bisque: [255, 228, 196, null],
      black: [0, 0, 0, null],
      blanchedalmond: [255, 235, 205, null],
      blue: [0, 0, 255, null],
      blueviolet: [138, 43, 226, null],
      brown: [165, 42, 42, null],
      burlywood: [222, 184, 135, null],
      cadetblue: [95, 158, 160, null],
      chartreuse: [127, 255, 0, null],
      chocolate: [210, 105, 30, null],
      coral: [255, 127, 80, null],
      cornflowerblue: [100, 149, 237, null],
      cornsilk: [255, 248, 220, null],
      crimson: [220, 20, 60, null],
      cyan: [0, 255, 255, null],
      darkblue: [0, 0, 139, null],
      darkcyan: [0, 139, 139, null],
      darkgoldenrod: [184, 134, 11, null],
      darkgray: [169, 169, 169, null],
      darkgreen: [0, 100, 0, null],
      darkgrey: [169, 169, 169, null],
      darkkhaki: [189, 183, 107, null],
      darkmagenta: [139, 0, 139, null],
      darkolivegreen: [85, 107, 47, null],
      darkorange: [255, 140, 0, null],
      darkorchid: [153, 50, 204, null],
      darkred: [139, 0, 0, null],
      darksalmon: [233, 150, 122, null],
      darkseagreen: [143, 188, 143, null],
      darkslateblue: [72, 61, 139, null],
      darkslategray: [47, 79, 79, null],
      darkslategrey: [47, 79, 79, null],
      darkturquoise: [0, 206, 209, null],
      darkviolet: [148, 0, 211, null],
      deeppink: [255, 20, 147, null],
      deepskyblue: [0, 191, 255, null],
      dimgray: [105, 105, 105, null],
      dimgrey: [105, 105, 105, null],
      dodgerblue: [30, 144, 255, null],
      firebrick: [178, 34, 34, null],
      floralwhite: [255, 250, 240, null],
      forestgreen: [34, 139, 34, null],
      fuchsia: [255, 0, 255, null],
      gainsboro: [220, 220, 220, null],
      ghostwhite: [248, 248, 255, null],
      gold: [255, 215, 0, null],
      goldenrod: [218, 165, 32, null],
      gray: [128, 128, 128, null],
      green: [0, 128, 0, null],
      greenyellow: [173, 255, 47, null],
      grey: [128, 128, 128, null],
      honeydew: [240, 255, 240, null],
      hotpink: [255, 105, 180, null],
      indianred: [205, 92, 92, null],
      indigo: [75, 0, 130, null],
      ivory: [255, 255, 240, null],
      khaki: [240, 230, 140, null],
      lavender: [230, 230, 250, null],
      lavenderblush: [255, 240, 245, null],
      lawngreen: [124, 252, 0, null],
      lemonchiffon: [255, 250, 205, null],
      lightblue: [173, 216, 230, null],
      lightcoral: [240, 128, 128, null],
      lightcyan: [224, 255, 255, null],
      lightgoldenrodyellow: [250, 250, 210, null],
      lightgray: [211, 211, 211, null],
      lightgreen: [144, 238, 144, null],
      lightgrey: [211, 211, 211, null],
      lightpink: [255, 182, 193, null],
      lightsalmon: [255, 160, 122, null],
      lightseagreen: [32, 178, 170, null],
      lightskyblue: [135, 206, 250, null],
      lightslategray: [119, 136, 153, null],
      lightslategrey: [119, 136, 153, null],
      lightsteelblue: [176, 196, 222, null],
      lightyellow: [255, 255, 224, null],
      lime: [0, 255, 0, null],
      limegreen: [50, 205, 50, null],
      linen: [250, 240, 230, null],
      magenta: [255, 0, 255, null],
      maroon: [128, 0, 0, null],
      mediumaquamarine: [102, 205, 170, null],
      mediumblue: [0, 0, 205, null],
      mediumorchid: [186, 85, 211, null],
      mediumpurple: [147, 112, 219, null],
      mediumseagreen: [60, 179, 113, null],
      mediumslateblue: [123, 104, 238, null],
      mediumspringgreen: [0, 250, 154, null],
      mediumturquoise: [72, 209, 204, null],
      mediumvioletred: [199, 21, 133, null],
      midnightblue: [25, 25, 112, null],
      mintcream: [245, 255, 250, null],
      mistyrose: [255, 228, 225, null],
      moccasin: [255, 228, 181, null],
      navajowhite: [255, 222, 173, null],
      navy: [0, 0, 128, null],
      oldlace: [253, 245, 230, null],
      olive: [128, 128, 0, null],
      olivedrab: [107, 142, 35, null],
      orange: [255, 165, 0, null],
      orangered: [255, 69, 0, null],
      orchid: [218, 112, 214, null],
      palegoldenrod: [238, 232, 170, null],
      palegreen: [152, 251, 152, null],
      paleturquoise: [175, 238, 238, null],
      palevioletred: [219, 112, 147, null],
      papayawhip: [255, 239, 213, null],
      peachpuff: [255, 218, 185, null],
      peru: [205, 133, 63, null],
      pink: [255, 192, 203, null],
      plum: [221, 160, 221, null],
      powderblue: [176, 224, 230, null],
      purple: [128, 0, 128, null],
      rebeccapurple: [102, 51, 153, null],
      red: [255, 0, 0, null],
      rosybrown: [188, 143, 143, null],
      royalblue: [65, 105, 225, null],
      saddlebrown: [139, 69, 19, null],
      salmon: [250, 128, 114, null],
      sandybrown: [244, 164, 96, null],
      seagreen: [46, 139, 87, null],
      seashell: [255, 245, 238, null],
      sienna: [160, 82, 45, null],
      silver: [192, 192, 192, null],
      skyblue: [135, 206, 235, null],
      slateblue: [106, 90, 205, null],
      slategray: [112, 128, 144, null],
      slategrey: [112, 128, 144, null],
      snow: [255, 250, 250, null],
      springgreen: [0, 255, 127, null],
      steelblue: [70, 130, 180, null],
      tan: [210, 180, 140, null],
      teal: [0, 128, 128, null],
      thistle: [216, 191, 216, null],
      tomato: [255, 99, 71, null],
      turquoise: [64, 224, 208, null],
      violet: [238, 130, 238, null],
      wheat: [245, 222, 179, null],
      white: [255, 255, 255, null],
      whitesmoke: [245, 245, 245, null],
      yellow: [255, 255, 0, null],
      yellowgreen: [154, 205, 50, null]
    };
    e.TRANSPARENT = new f([0, 0, 0, 0]);
  });
  e(o);
  o.TRANSPARENT;
  var a = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseTextDecoration = e.TEXT_DECORATION_LINE = e.TEXT_DECORATION = e.TEXT_DECORATION_STYLE = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(o),
        r = e.TEXT_DECORATION_STYLE = {
      SOLID: 0,
      DOUBLE: 1,
      DOTTED: 2,
      DASHED: 3,
      WAVY: 4
    },
        n = e.TEXT_DECORATION = {
      NONE: null
    },
        i = e.TEXT_DECORATION_LINE = {
      UNDERLINE: 1,
      OVERLINE: 2,
      LINE_THROUGH: 3,
      BLINK: 4
    },
        a = function a(t) {
      switch (t) {
        case "underline":
          return i.UNDERLINE;

        case "overline":
          return i.OVERLINE;

        case "line-through":
          return i.LINE_THROUGH;
      }

      return i.BLINK;
    };

    e.parseTextDecoration = function (t) {
      var e = function (t) {
        return "none" === t ? null : t.split(" ").map(a);
      }(t.textDecorationLine ? t.textDecorationLine : t.textDecoration);

      if (null === e) return n.NONE;
      return {
        textDecorationLine: e,
        textDecorationColor: t.textDecorationColor ? new A["default"](t.textDecorationColor) : null,
        textDecorationStyle: function (t) {
          switch (t) {
            case "double":
              return r.DOUBLE;

            case "dotted":
              return r.DOTTED;

            case "dashed":
              return r.DASHED;

            case "wavy":
              return r.WAVY;
          }

          return r.SOLID;
        }(t.textDecorationStyle)
      };
    };
  });
  e(a);
  a.parseTextDecoration, a.TEXT_DECORATION_LINE, a.TEXT_DECORATION, a.TEXT_DECORATION_STYLE;
  var s = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = function r(t, e) {
      var A = Math.max.apply(null, t.colorStops.map(function (t) {
        return t.stop;
      })),
          r = 1 / Math.max(1, A);
      t.colorStops.forEach(function (t) {
        e.addColorStop(r * t.stop, t.color.toString());
      });
    },
        n = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.canvas = e || document.createElement("canvas");
      }

      return A(t, [{
        key: "render",
        value: function value(t) {
          this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = t.width + "px", this.canvas.style.height = t.height + "px", this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.ctx.textBaseline = "bottom", t.logger.log("Canvas renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + this.options.scale);
        }
      }, {
        key: "clip",
        value: function value(t, e) {
          var A = this;
          t.length && (this.ctx.save(), t.forEach(function (t) {
            A.path(t), A.ctx.clip();
          })), e(), t.length && this.ctx.restore();
        }
      }, {
        key: "drawImage",
        value: function value(t, e, A) {
          this.ctx.drawImage(t, e.left, e.top, e.width, e.height, A.left, A.top, A.width, A.height);
        }
      }, {
        key: "drawShape",
        value: function value(t, e) {
          this.path(t), this.ctx.fillStyle = e.toString(), this.ctx.fill();
        }
      }, {
        key: "fill",
        value: function value(t) {
          this.ctx.fillStyle = t.toString(), this.ctx.fill();
        }
      }, {
        key: "getTarget",
        value: function value() {
          return this.canvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), Promise.resolve(this.canvas);
        }
      }, {
        key: "path",
        value: function value(t) {
          var e = this;
          this.ctx.beginPath(), Array.isArray(t) ? t.forEach(function (t, A) {
            var r = t.type === i.PATH.VECTOR ? t : t.start;
            0 === A ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y), t.type === i.PATH.BEZIER_CURVE && e.ctx.bezierCurveTo(t.startControl.x, t.startControl.y, t.endControl.x, t.endControl.y, t.end.x, t.end.y);
          }) : this.ctx.arc(t.x + t.radius, t.y + t.radius, t.radius, 0, 2 * Math.PI, !0), this.ctx.closePath();
        }
      }, {
        key: "rectangle",
        value: function value(t, e, A, r, n) {
          this.ctx.fillStyle = n.toString(), this.ctx.fillRect(t, e, A, r);
        }
      }, {
        key: "renderLinearGradient",
        value: function value(t, e) {
          var A = this.ctx.createLinearGradient(t.left + e.direction.x1, t.top + e.direction.y1, t.left + e.direction.x0, t.top + e.direction.y0);
          r(e, A), this.ctx.fillStyle = A, this.ctx.fillRect(t.left, t.top, t.width, t.height);
        }
      }, {
        key: "renderRadialGradient",
        value: function value(t, e) {
          var A = this,
              n = t.left + e.center.x,
              i = t.top + e.center.y,
              o = this.ctx.createRadialGradient(n, i, 0, n, i, e.radius.x);
          if (o) if (r(e, o), this.ctx.fillStyle = o, e.radius.x !== e.radius.y) {
            var a = t.left + .5 * t.width,
                s = t.top + .5 * t.height,
                c = e.radius.y / e.radius.x,
                l = 1 / c;
            this.transform(a, s, [1, 0, 0, c, 0, 0], function () {
              return A.ctx.fillRect(t.left, l * (t.top - s) + s, t.width, t.height * l);
            });
          } else this.ctx.fillRect(t.left, t.top, t.width, t.height);
        }
      }, {
        key: "renderRepeat",
        value: function value(t, e, A, r, n) {
          this.path(t), this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(e, A), "repeat"), this.ctx.translate(r, n), this.ctx.fill(), this.ctx.translate(-r, -n);
        }
      }, {
        key: "renderTextNode",
        value: function value(t, e, A, r, n) {
          var i = this;
          this.ctx.font = [A.fontStyle, A.fontVariant, A.fontWeight, A.fontSize, A.fontFamily].join(" "), t.forEach(function (t) {
            if (i.ctx.fillStyle = e.toString(), n && t.text.trim().length ? n.slice(0).reverse().forEach(function (e) {
              i.ctx.shadowColor = e.color.toString(), i.ctx.shadowOffsetX = e.offsetX * i.options.scale, i.ctx.shadowOffsetY = e.offsetY * i.options.scale, i.ctx.shadowBlur = e.blur, i.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height);
            }) : i.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height), null !== r) {
              var o = r.textDecorationColor || e;
              r.textDecorationLine.forEach(function (e) {
                switch (e) {
                  case a.TEXT_DECORATION_LINE.UNDERLINE:
                    var r = i.options.fontMetrics.getMetrics(A).baseline;
                    i.rectangle(t.bounds.left, Math.round(t.bounds.top + r), t.bounds.width, 1, o);
                    break;

                  case a.TEXT_DECORATION_LINE.OVERLINE:
                    i.rectangle(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1, o);
                    break;

                  case a.TEXT_DECORATION_LINE.LINE_THROUGH:
                    var n = i.options.fontMetrics.getMetrics(A).middle;
                    i.rectangle(t.bounds.left, Math.ceil(t.bounds.top + n), t.bounds.width, 1, o);
                }
              });
            }
          });
        }
      }, {
        key: "resizeImage",
        value: function value(t, e) {
          if (t.width === e.width && t.height === e.height) return t;
          var A = this.canvas.ownerDocument.createElement("canvas");
          A.width = e.width, A.height = e.height;
          return A.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height), A;
        }
      }, {
        key: "setOpacity",
        value: function value(t) {
          this.ctx.globalAlpha = t;
        }
      }, {
        key: "transform",
        value: function value(t, e, A, r) {
          this.ctx.save(), this.ctx.translate(t, e), this.ctx.transform(A[0], A[1], A[2], A[3], A[4], A[5]), this.ctx.translate(-t, -e), r(), this.ctx.restore();
        }
      }]), t;
    }();

    e["default"] = n;
  });
  e(s);
  var c = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = function () {
      function t(e, A, r) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.enabled = "undefined" != typeof window && e, this.start = r || Date.now(), this.id = A;
      }

      return A(t, [{
        key: "child",
        value: function value(e) {
          return new t(this.enabled, e, this.start);
        }
      }, {
        key: "log",
        value: function value() {
          if (this.enabled && window.console && window.console.log) {
            for (var t = arguments.length, e = Array(t), A = 0; A < t; A++) {
              e[A] = arguments[A];
            }

            Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(e, 0)));
          }
        }
      }, {
        key: "error",
        value: function value() {
          if (this.enabled && window.console && window.console.error) {
            for (var t = arguments.length, e = Array(t), A = 0; A < t; A++) {
              e[A] = arguments[A];
            }

            Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(e, 0)));
          }
        }
      }]), t;
    }();

    e["default"] = r;
  });
  e(c);
  var l = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.contains = function (t, e) {
      return 0 != (t & e);
    }, e.distance = function (t, e) {
      return Math.sqrt(t * t + e * e);
    }, e.copyCSSStyles = function (t, e) {
      for (var A = t.length - 1; A >= 0; A--) {
        var r = t.item(A);
        "content" !== r && e.style.setProperty(r, t.getPropertyValue(r));
      }

      return e;
    }, e.SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  });
  e(l);
  l.contains, l.distance, l.copyCSSStyles, l.SMALL_IMAGE;
  var u = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0;

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = (function (t) {
      t && t.__esModule;
    }(G), e.LENGTH_TYPE = {
      PX: 0,
      PERCENTAGE: 1
    }),
        n = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.type = "%" === e.substr(e.length - 1) ? r.PERCENTAGE : r.PX;
        var A = parseFloat(e);
        this.value = isNaN(A) ? 0 : A;
      }

      return A(t, [{
        key: "isPercentage",
        value: function value() {
          return this.type === r.PERCENTAGE;
        }
      }, {
        key: "getAbsoluteValue",
        value: function value(t) {
          return this.isPercentage() ? t * (this.value / 100) : this.value;
        }
      }], [{
        key: "create",
        value: function value(e) {
          return new t(e);
        }
      }]), t;
    }();

    e["default"] = n;

    e.calculateLengthFromValueWithUnit = function (t, e, A) {
      switch (A) {
        case "px":
        case "%":
          return new n(e + A);

        case "em":
        case "rem":
          var r = new n(e);
          return r.value *= "em" === A ? parseFloat(t.style.font.fontSize) : function t(e) {
            var A = e.parent;
            return A ? t(A) : parseFloat(e.style.font.fontSize);
          }(t), r;

        default:
          return new n("0");
      }
    };
  });
  e(u);
  u.calculateLengthFromValueWithUnit, u.LENGTH_TYPE;
  var h = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e["default"] = function t(e, A) {
      !function (e, A) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this), this.width = e, this.height = A;
    };
  });
  e(h);
  var d = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e["default"] = function t(e, A) {
      !function (e, A) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this), this.type = i.PATH.VECTOR, this.x = e, this.y = A;
    };
  });
  e(d);
  var f = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(d),
        n = function n(t, e, A) {
      return new r["default"](t.x + (e.x - t.x) * A, t.y + (e.y - t.y) * A);
    },
        o = function () {
      function t(e, A, r, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.type = i.PATH.BEZIER_CURVE, this.start = e, this.startControl = A, this.endControl = r, this.end = n;
      }

      return A(t, [{
        key: "subdivide",
        value: function value(e, A) {
          var r = n(this.start, this.startControl, e),
              i = n(this.startControl, this.endControl, e),
              o = n(this.endControl, this.end, e),
              a = n(r, i, e),
              s = n(i, o, e),
              c = n(a, s, e);
          return A ? new t(this.start, r, a, c) : new t(c, s, o, this.end);
        }
      }, {
        key: "reverse",
        value: function value() {
          return new t(this.end, this.endControl, this.startControl, this.start);
        }
      }]), t;
    }();

    e["default"] = o;
  });
  e(f);
  var p = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseBoundCurves = e.calculatePaddingBoxPath = e.calculateBorderBoxPath = e.parsePathForBorder = e.parseDocumentSize = e.calculateContentBox = e.calculatePaddingBox = e.parseBounds = e.Bounds = void 0;

    var r = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        n = A(d),
        i = A(f),
        o = e.Bounds = function () {
      function t(e, A, r, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.left = e, this.top = A, this.width = r, this.height = n;
      }

      return r(t, null, [{
        key: "fromClientRect",
        value: function value(e, A, r) {
          return new t(e.left + A, e.top + r, e.width, e.height);
        }
      }]), t;
    }(),
        a = (e.parseBounds = function (t, e, A) {
      return o.fromClientRect(t.getBoundingClientRect(), e, A);
    }, e.calculatePaddingBox = function (t, e) {
      return new o(t.left + e[3].borderWidth, t.top + e[0].borderWidth, t.width - (e[1].borderWidth + e[3].borderWidth), t.height - (e[0].borderWidth + e[2].borderWidth));
    }, e.calculateContentBox = function (t, e, A) {
      var r = e[0].value,
          n = e[1].value,
          i = e[2].value,
          a = e[3].value;
      return new o(t.left + a + A[3].borderWidth, t.top + r + A[0].borderWidth, t.width - (A[1].borderWidth + A[3].borderWidth + a + n), t.height - (A[0].borderWidth + A[2].borderWidth + r + i));
    }, e.parseDocumentSize = function (t) {
      var e = t.body,
          A = t.documentElement;
      if (!e || !A) throw new Error("");
      var r = Math.max(Math.max(e.scrollWidth, A.scrollWidth), Math.max(e.offsetWidth, A.offsetWidth), Math.max(e.clientWidth, A.clientWidth)),
          n = Math.max(Math.max(e.scrollHeight, A.scrollHeight), Math.max(e.offsetHeight, A.offsetHeight), Math.max(e.clientHeight, A.clientHeight));
      return new o(0, 0, r, n);
    }, e.parsePathForBorder = function (t, e) {
      switch (e) {
        case 0:
          return a(t.topLeftOuter, t.topLeftInner, t.topRightOuter, t.topRightInner);

        case 1:
          return a(t.topRightOuter, t.topRightInner, t.bottomRightOuter, t.bottomRightInner);

        case 2:
          return a(t.bottomRightOuter, t.bottomRightInner, t.bottomLeftOuter, t.bottomLeftInner);

        case 3:
        default:
          return a(t.bottomLeftOuter, t.bottomLeftInner, t.topLeftOuter, t.topLeftInner);
      }
    }, function (t, e, A, r) {
      var n = [];
      return t instanceof i["default"] ? n.push(t.subdivide(.5, !1)) : n.push(t), A instanceof i["default"] ? n.push(A.subdivide(.5, !0)) : n.push(A), r instanceof i["default"] ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), e instanceof i["default"] ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n;
    }),
        s = (e.calculateBorderBoxPath = function (t) {
      return [t.topLeftOuter, t.topRightOuter, t.bottomRightOuter, t.bottomLeftOuter];
    }, e.calculatePaddingBoxPath = function (t) {
      return [t.topLeftInner, t.topRightInner, t.bottomRightInner, t.bottomLeftInner];
    }, e.parseBoundCurves = function (t, e, A) {
      var r = A[s.TOP_LEFT][0].getAbsoluteValue(t.width),
          i = A[s.TOP_LEFT][1].getAbsoluteValue(t.height),
          o = A[s.TOP_RIGHT][0].getAbsoluteValue(t.width),
          a = A[s.TOP_RIGHT][1].getAbsoluteValue(t.height),
          l = A[s.BOTTOM_RIGHT][0].getAbsoluteValue(t.width),
          u = A[s.BOTTOM_RIGHT][1].getAbsoluteValue(t.height),
          h = A[s.BOTTOM_LEFT][0].getAbsoluteValue(t.width),
          d = A[s.BOTTOM_LEFT][1].getAbsoluteValue(t.height),
          f = [];
      f.push((r + o) / t.width), f.push((h + l) / t.width), f.push((i + d) / t.height), f.push((a + u) / t.height);
      var p = Math.max.apply(Math, f);
      p > 1 && (r /= p, i /= p, o /= p, a /= p, l /= p, u /= p, h /= p, d /= p);
      var g = t.width - o,
          B = t.height - u,
          w = t.width - l,
          m = t.height - d;
      return {
        topLeftOuter: r > 0 || i > 0 ? c(t.left, t.top, r, i, s.TOP_LEFT) : new n["default"](t.left, t.top),
        topLeftInner: r > 0 || i > 0 ? c(t.left + e[3].borderWidth, t.top + e[0].borderWidth, Math.max(0, r - e[3].borderWidth), Math.max(0, i - e[0].borderWidth), s.TOP_LEFT) : new n["default"](t.left + e[3].borderWidth, t.top + e[0].borderWidth),
        topRightOuter: o > 0 || a > 0 ? c(t.left + g, t.top, o, a, s.TOP_RIGHT) : new n["default"](t.left + t.width, t.top),
        topRightInner: o > 0 || a > 0 ? c(t.left + Math.min(g, t.width + e[3].borderWidth), t.top + e[0].borderWidth, g > t.width + e[3].borderWidth ? 0 : o - e[3].borderWidth, a - e[0].borderWidth, s.TOP_RIGHT) : new n["default"](t.left + t.width - e[1].borderWidth, t.top + e[0].borderWidth),
        bottomRightOuter: l > 0 || u > 0 ? c(t.left + w, t.top + B, l, u, s.BOTTOM_RIGHT) : new n["default"](t.left + t.width, t.top + t.height),
        bottomRightInner: l > 0 || u > 0 ? c(t.left + Math.min(w, t.width - e[3].borderWidth), t.top + Math.min(B, t.height + e[0].borderWidth), Math.max(0, l - e[1].borderWidth), u - e[2].borderWidth, s.BOTTOM_RIGHT) : new n["default"](t.left + t.width - e[1].borderWidth, t.top + t.height - e[2].borderWidth),
        bottomLeftOuter: h > 0 || d > 0 ? c(t.left, t.top + m, h, d, s.BOTTOM_LEFT) : new n["default"](t.left, t.top + t.height),
        bottomLeftInner: h > 0 || d > 0 ? c(t.left + e[3].borderWidth, t.top + m, Math.max(0, h - e[3].borderWidth), d - e[2].borderWidth, s.BOTTOM_LEFT) : new n["default"](t.left + e[3].borderWidth, t.top + t.height - e[2].borderWidth)
      };
    }, {
      TOP_LEFT: 0,
      TOP_RIGHT: 1,
      BOTTOM_RIGHT: 2,
      BOTTOM_LEFT: 3
    }),
        c = function c(t, e, A, r, o) {
      var a = (Math.sqrt(2) - 1) / 3 * 4,
          c = A * a,
          l = r * a,
          u = t + A,
          h = e + r;

      switch (o) {
        case s.TOP_LEFT:
          return new i["default"](new n["default"](t, h), new n["default"](t, h - l), new n["default"](u - c, e), new n["default"](u, e));

        case s.TOP_RIGHT:
          return new i["default"](new n["default"](t, e), new n["default"](t + c, e), new n["default"](u, h - l), new n["default"](u, h));

        case s.BOTTOM_RIGHT:
          return new i["default"](new n["default"](u, e), new n["default"](u, e + l), new n["default"](t + c, h), new n["default"](t, h));

        case s.BOTTOM_LEFT:
        default:
          return new i["default"](new n["default"](u, h), new n["default"](u - c, h), new n["default"](t, e + l), new n["default"](t, e));
      }
    };
  });
  e(p);
  p.parseBoundCurves, p.calculatePaddingBoxPath, p.calculateBorderBoxPath, p.parsePathForBorder, p.parseDocumentSize, p.calculateContentBox, p.calculatePaddingBox, p.parseBounds, p.Bounds;
  var g = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parsePadding = e.PADDING_SIDES = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(u),
        r = (e.PADDING_SIDES = {
      TOP: 0,
      RIGHT: 1,
      BOTTOM: 2,
      LEFT: 3
    }, ["top", "right", "bottom", "left"]);

    e.parsePadding = function (t) {
      return r.map(function (e) {
        return new A["default"](t.getPropertyValue("padding-" + e));
      });
    };
  });
  e(g);
  g.parsePadding, g.PADDING_SIDES;
  var B = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseBackgroundImage = e.parseBackground = e.calculateBackgroundRepeatPath = e.calculateBackgroundPosition = e.calculateBackgroungPositioningArea = e.calculateBackgroungPaintingArea = e.calculateGradientBackgroundSize = e.calculateBackgroundSize = e.BACKGROUND_ORIGIN = e.BACKGROUND_CLIP = e.BACKGROUND_SIZE = e.BACKGROUND_REPEAT = void 0;

    var r = A(o),
        n = A(u),
        i = A(h),
        a = A(d),
        s = e.BACKGROUND_REPEAT = {
      REPEAT: 0,
      NO_REPEAT: 1,
      REPEAT_X: 2,
      REPEAT_Y: 3
    },
        c = e.BACKGROUND_SIZE = {
      AUTO: 0,
      CONTAIN: 1,
      COVER: 2,
      LENGTH: 3
    },
        l = e.BACKGROUND_CLIP = {
      BORDER_BOX: 0,
      PADDING_BOX: 1,
      CONTENT_BOX: 2
    },
        f = e.BACKGROUND_ORIGIN = l,
        B = function t(e) {
      switch (function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), e) {
        case "contain":
          this.size = c.CONTAIN;
          break;

        case "cover":
          this.size = c.COVER;
          break;

        case "auto":
          this.size = c.AUTO;
          break;

        default:
          this.value = new n["default"](e);
      }
    },
        w = (e.calculateBackgroundSize = function (t, e, A) {
      var r = 0,
          n = 0,
          o = t.size;

      if (o[0].size === c.CONTAIN || o[0].size === c.COVER) {
        var a = A.width / A.height,
            s = e.width / e.height;
        return a < s != (o[0].size === c.COVER) ? new i["default"](A.width, A.width / s) : new i["default"](A.height * s, A.height);
      }

      return o[0].value && (r = o[0].value.getAbsoluteValue(A.width)), o[0].size === c.AUTO && o[1].size === c.AUTO ? n = e.height : o[1].size === c.AUTO ? n = r / e.width * e.height : o[1].value && (n = o[1].value.getAbsoluteValue(A.height)), o[0].size === c.AUTO && (r = n / e.height * e.width), new i["default"](r, n);
    }, e.calculateGradientBackgroundSize = function (t, e) {
      var A = t.size,
          r = A[0].value ? A[0].value.getAbsoluteValue(e.width) : e.width,
          n = A[1].value ? A[1].value.getAbsoluteValue(e.height) : A[0].value ? r : e.height;
      return new i["default"](r, n);
    }, new B("auto")),
        m = (e.calculateBackgroungPaintingArea = function (t, e) {
      switch (e) {
        case l.BORDER_BOX:
          return (0, p.calculateBorderBoxPath)(t);

        case l.PADDING_BOX:
        default:
          return (0, p.calculatePaddingBoxPath)(t);
      }
    }, e.calculateBackgroungPositioningArea = function (t, e, A, r) {
      var n = (0, p.calculatePaddingBox)(e, r);

      switch (t) {
        case f.BORDER_BOX:
          return e;

        case f.CONTENT_BOX:
          var i = A[g.PADDING_SIDES.LEFT].getAbsoluteValue(e.width),
              o = A[g.PADDING_SIDES.RIGHT].getAbsoluteValue(e.width),
              a = A[g.PADDING_SIDES.TOP].getAbsoluteValue(e.width),
              s = A[g.PADDING_SIDES.BOTTOM].getAbsoluteValue(e.width);
          return new p.Bounds(n.left + i, n.top + a, n.width - i - o, n.height - a - s);

        case f.PADDING_BOX:
        default:
          return n;
      }
    }, e.calculateBackgroundPosition = function (t, e, A) {
      return new a["default"](t[0].getAbsoluteValue(A.width - e.width), t[1].getAbsoluteValue(A.height - e.height));
    }, e.calculateBackgroundRepeatPath = function (t, e, A, r, n) {
      switch (t.repeat) {
        case s.REPEAT_X:
          return [new a["default"](Math.round(n.left), Math.round(r.top + e.y)), new a["default"](Math.round(n.left + n.width), Math.round(r.top + e.y)), new a["default"](Math.round(n.left + n.width), Math.round(A.height + r.top + e.y)), new a["default"](Math.round(n.left), Math.round(A.height + r.top + e.y))];

        case s.REPEAT_Y:
          return [new a["default"](Math.round(r.left + e.x), Math.round(n.top)), new a["default"](Math.round(r.left + e.x + A.width), Math.round(n.top)), new a["default"](Math.round(r.left + e.x + A.width), Math.round(n.height + n.top)), new a["default"](Math.round(r.left + e.x), Math.round(n.height + n.top))];

        case s.NO_REPEAT:
          return [new a["default"](Math.round(r.left + e.x), Math.round(r.top + e.y)), new a["default"](Math.round(r.left + e.x + A.width), Math.round(r.top + e.y)), new a["default"](Math.round(r.left + e.x + A.width), Math.round(r.top + e.y + A.height)), new a["default"](Math.round(r.left + e.x), Math.round(r.top + e.y + A.height))];

        default:
          return [new a["default"](Math.round(n.left), Math.round(n.top)), new a["default"](Math.round(n.left + n.width), Math.round(n.top)), new a["default"](Math.round(n.left + n.width), Math.round(n.height + n.top)), new a["default"](Math.round(n.left), Math.round(n.height + n.top))];
      }
    }, e.parseBackground = function (t, e) {
      return {
        backgroundColor: new r["default"](t.backgroundColor),
        backgroundImage: v(t, e),
        backgroundClip: m(t.backgroundClip),
        backgroundOrigin: y(t.backgroundOrigin)
      };
    }, function (t) {
      switch (t) {
        case "padding-box":
          return l.PADDING_BOX;

        case "content-box":
          return l.CONTENT_BOX;
      }

      return l.BORDER_BOX;
    }),
        y = function y(t) {
      switch (t) {
        case "padding-box":
          return f.PADDING_BOX;

        case "content-box":
          return f.CONTENT_BOX;
      }

      return f.BORDER_BOX;
    },
        v = function v(t, e) {
      var A = U(t.backgroundImage).map(function (t) {
        if ("url" === t.method) {
          var A = e.loadImage(t.args[0]);
          t.args = A ? [A] : [];
        }

        return t;
      }),
          r = t.backgroundPosition.split(","),
          n = t.backgroundRepeat.split(","),
          i = t.backgroundSize.split(",");
      return A.map(function (t, e) {
        var A = (i[e] || "auto").trim().split(" ").map(Q),
            o = (r[e] || "auto").trim().split(" ").map(C);
        return {
          source: t,
          repeat: function (t) {
            switch (t.trim()) {
              case "no-repeat":
                return s.NO_REPEAT;

              case "repeat-x":
              case "repeat no-repeat":
                return s.REPEAT_X;

              case "repeat-y":
              case "no-repeat repeat":
                return s.REPEAT_Y;

              case "repeat":
                return s.REPEAT;
            }

            return s.REPEAT;
          }("string" == typeof n[e] ? n[e] : n[0]),
          size: A.length < 2 ? [A[0], w] : [A[0], A[1]],
          position: o.length < 2 ? [o[0], o[0]] : [o[0], o[1]]
        };
      });
    },
        Q = function Q(t) {
      return "auto" === t ? w : new B(t);
    },
        C = function C(t) {
      switch (t) {
        case "bottom":
        case "right":
          return new n["default"]("100%");

        case "left":
        case "top":
          return new n["default"]("0%");

        case "auto":
          return new n["default"]("0");
      }

      return new n["default"](t);
    },
        U = e.parseBackgroundImage = function (t) {
      var e = /^\s$/,
          A = [],
          r = [],
          n = "",
          i = null,
          o = "",
          a = 0,
          s = 0,
          c = function c() {
        var t = "";

        if (n) {
          '"' === o.substr(0, 1) && (o = o.substr(1, o.length - 2)), o && r.push(o.trim());
          var e = n.indexOf("-", 1) + 1;
          "-" === n.substr(0, 1) && e > 0 && (t = n.substr(0, e).toLowerCase(), n = n.substr(e)), "none" !== (n = n.toLowerCase()) && A.push({
            prefix: t,
            method: n,
            args: r
          });
        }

        r = [], n = o = "";
      };

      return t.split("").forEach(function (t) {
        if (0 !== a || !e.test(t)) {
          switch (t) {
            case '"':
              i ? i === t && (i = null) : i = t;
              break;

            case "(":
              if (i) break;
              if (0 === a) return void (a = 1);
              s++;
              break;

            case ")":
              if (i) break;

              if (1 === a) {
                if (0 === s) return a = 0, void c();
                s--;
              }

              break;

            case ",":
              if (i) break;
              if (0 === a) return void c();
              if (1 === a && 0 === s && !n.match(/^url$/i)) return r.push(o.trim()), void (o = "");
          }

          0 === a ? n += t : o += t;
        }
      }), c(), A;
    };
  });
  e(B);
  B.parseBackgroundImage, B.parseBackground, B.calculateBackgroundRepeatPath, B.calculateBackgroundPosition, B.calculateBackgroungPositioningArea, B.calculateBackgroungPaintingArea, B.calculateGradientBackgroundSize, B.calculateBackgroundSize, B.BACKGROUND_ORIGIN, B.BACKGROUND_CLIP, B.BACKGROUND_SIZE, B.BACKGROUND_REPEAT;
  var w = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(o),
        r = e.BORDER_STYLE = {
      NONE: 0,
      SOLID: 1
    },
        n = e.BORDER_SIDES = {
      TOP: 0,
      RIGHT: 1,
      BOTTOM: 2,
      LEFT: 3
    },
        i = Object.keys(n).map(function (t) {
      return t.toLowerCase();
    });

    e.parseBorder = function (t) {
      return i.map(function (e) {
        var n = new A["default"](t.getPropertyValue("border-" + e + "-color")),
            i = function (t) {
          switch (t) {
            case "none":
              return r.NONE;
          }

          return r.SOLID;
        }(t.getPropertyValue("border-" + e + "-style")),
            o = parseFloat(t.getPropertyValue("border-" + e + "-width"));

        return {
          borderColor: n,
          borderStyle: i,
          borderWidth: isNaN(o) ? 0 : o
        };
      });
    };
  });
  e(w);
  w.parseBorder, w.BORDER_SIDES, w.BORDER_STYLE;
  var m = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseBorderRadius = void 0;

    var A = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        r = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(u),
        n = ["top-left", "top-right", "bottom-right", "bottom-left"];

    e.parseBorderRadius = function (t) {
      return n.map(function (e) {
        var n = t.getPropertyValue("border-" + e + "-radius").split(" ").map(r["default"].create),
            i = A(n, 2),
            o = i[0],
            a = i[1];
        return void 0 === a ? [o, o] : [o, a];
      });
    };
  });
  e(m);
  m.parseBorderRadius;
  var y = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = e.DISPLAY = {
      NONE: 1,
      BLOCK: 2,
      INLINE: 4,
      RUN_IN: 8,
      FLOW: 16,
      FLOW_ROOT: 32,
      TABLE: 64,
      FLEX: 128,
      GRID: 256,
      RUBY: 512,
      SUBGRID: 1024,
      LIST_ITEM: 2048,
      TABLE_ROW_GROUP: 4096,
      TABLE_HEADER_GROUP: 8192,
      TABLE_FOOTER_GROUP: 16384,
      TABLE_ROW: 32768,
      TABLE_CELL: 65536,
      TABLE_COLUMN_GROUP: 1 << 17,
      TABLE_COLUMN: 1 << 18,
      TABLE_CAPTION: 1 << 19,
      RUBY_BASE: 1 << 20,
      RUBY_TEXT: 1 << 21,
      RUBY_BASE_CONTAINER: 1 << 22,
      RUBY_TEXT_CONTAINER: 1 << 23,
      CONTENTS: 1 << 24,
      INLINE_BLOCK: 1 << 25,
      INLINE_LIST_ITEM: 1 << 26,
      INLINE_TABLE: 1 << 27,
      INLINE_FLEX: 1 << 28,
      INLINE_GRID: 1 << 29
    },
        r = function r(t, e) {
      return t | function (t) {
        switch (t) {
          case "block":
            return A.BLOCK;

          case "inline":
            return A.INLINE;

          case "run-in":
            return A.RUN_IN;

          case "flow":
            return A.FLOW;

          case "flow-root":
            return A.FLOW_ROOT;

          case "table":
            return A.TABLE;

          case "flex":
            return A.FLEX;

          case "grid":
            return A.GRID;

          case "ruby":
            return A.RUBY;

          case "subgrid":
            return A.SUBGRID;

          case "list-item":
            return A.LIST_ITEM;

          case "table-row-group":
            return A.TABLE_ROW_GROUP;

          case "table-header-group":
            return A.TABLE_HEADER_GROUP;

          case "table-footer-group":
            return A.TABLE_FOOTER_GROUP;

          case "table-row":
            return A.TABLE_ROW;

          case "table-cell":
            return A.TABLE_CELL;

          case "table-column-group":
            return A.TABLE_COLUMN_GROUP;

          case "table-column":
            return A.TABLE_COLUMN;

          case "table-caption":
            return A.TABLE_CAPTION;

          case "ruby-base":
            return A.RUBY_BASE;

          case "ruby-text":
            return A.RUBY_TEXT;

          case "ruby-base-container":
            return A.RUBY_BASE_CONTAINER;

          case "ruby-text-container":
            return A.RUBY_TEXT_CONTAINER;

          case "contents":
            return A.CONTENTS;

          case "inline-block":
            return A.INLINE_BLOCK;

          case "inline-list-item":
            return A.INLINE_LIST_ITEM;

          case "inline-table":
            return A.INLINE_TABLE;

          case "inline-flex":
            return A.INLINE_FLEX;

          case "inline-grid":
            return A.INLINE_GRID;
        }

        return A.NONE;
      }(e);
    };

    e.parseDisplay = function (t) {
      return t.split(" ").reduce(r, 0);
    };
  });
  e(y);
  y.DISPLAY, y.parseDisplay;
  var v = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.FLOAT = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      INLINE_START: 3,
      INLINE_END: 4
    };

    e.parseCSSFloat = function (t) {
      switch (t) {
        case "left":
          return A.LEFT;

        case "right":
          return A.RIGHT;

        case "inline-start":
          return A.INLINE_START;

        case "inline-end":
          return A.INLINE_END;
      }

      return A.NONE;
    };
  });
  e(v);
  v.FLOAT, v.parseCSSFloat;
  var Q = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e.parseFont = function (t) {
      return {
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        fontStyle: t.fontStyle,
        fontVariant: t.fontVariant,
        fontWeight: function (t) {
          switch (t) {
            case "normal":
              return 400;

            case "bold":
              return 700;
          }

          var e = parseInt(t, 10);
          return isNaN(e) ? 400 : e;
        }(t.fontWeight)
      };
    };
  });
  e(Q);
  Q.parseFont;
  var C = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e.parseLetterSpacing = function (t) {
      if ("normal" === t) return 0;
      var e = parseFloat(t);
      return isNaN(e) ? 0 : e;
    };
  });
  e(C);
  C.parseLetterSpacing;
  var U = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.LINE_BREAK = {
      NORMAL: "normal",
      STRICT: "strict"
    };

    e.parseLineBreak = function (t) {
      switch (t) {
        case "strict":
          return A.STRICT;

        case "normal":
        default:
          return A.NORMAL;
      }
    };
  });
  e(U);
  U.LINE_BREAK, U.parseLineBreak;
  var b = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseListStyle = e.parseListStyleType = e.LIST_STYLE_TYPE = e.LIST_STYLE_POSITION = void 0;

    var A = e.LIST_STYLE_POSITION = {
      INSIDE: 0,
      OUTSIDE: 1
    },
        r = e.LIST_STYLE_TYPE = {
      NONE: -1,
      DISC: 0,
      CIRCLE: 1,
      SQUARE: 2,
      DECIMAL: 3,
      CJK_DECIMAL: 4,
      DECIMAL_LEADING_ZERO: 5,
      LOWER_ROMAN: 6,
      UPPER_ROMAN: 7,
      LOWER_GREEK: 8,
      LOWER_ALPHA: 9,
      UPPER_ALPHA: 10,
      ARABIC_INDIC: 11,
      ARMENIAN: 12,
      BENGALI: 13,
      CAMBODIAN: 14,
      CJK_EARTHLY_BRANCH: 15,
      CJK_HEAVENLY_STEM: 16,
      CJK_IDEOGRAPHIC: 17,
      DEVANAGARI: 18,
      ETHIOPIC_NUMERIC: 19,
      GEORGIAN: 20,
      GUJARATI: 21,
      GURMUKHI: 22,
      HEBREW: 22,
      HIRAGANA: 23,
      HIRAGANA_IROHA: 24,
      JAPANESE_FORMAL: 25,
      JAPANESE_INFORMAL: 26,
      KANNADA: 27,
      KATAKANA: 28,
      KATAKANA_IROHA: 29,
      KHMER: 30,
      KOREAN_HANGUL_FORMAL: 31,
      KOREAN_HANJA_FORMAL: 32,
      KOREAN_HANJA_INFORMAL: 33,
      LAO: 34,
      LOWER_ARMENIAN: 35,
      MALAYALAM: 36,
      MONGOLIAN: 37,
      MYANMAR: 38,
      ORIYA: 39,
      PERSIAN: 40,
      SIMP_CHINESE_FORMAL: 41,
      SIMP_CHINESE_INFORMAL: 42,
      TAMIL: 43,
      TELUGU: 44,
      THAI: 45,
      TIBETAN: 46,
      TRAD_CHINESE_FORMAL: 47,
      TRAD_CHINESE_INFORMAL: 48,
      UPPER_ARMENIAN: 49,
      DISCLOSURE_OPEN: 50,
      DISCLOSURE_CLOSED: 51
    },
        n = e.parseListStyleType = function (t) {
      switch (t) {
        case "disc":
          return r.DISC;

        case "circle":
          return r.CIRCLE;

        case "square":
          return r.SQUARE;

        case "decimal":
          return r.DECIMAL;

        case "cjk-decimal":
          return r.CJK_DECIMAL;

        case "decimal-leading-zero":
          return r.DECIMAL_LEADING_ZERO;

        case "lower-roman":
          return r.LOWER_ROMAN;

        case "upper-roman":
          return r.UPPER_ROMAN;

        case "lower-greek":
          return r.LOWER_GREEK;

        case "lower-alpha":
          return r.LOWER_ALPHA;

        case "upper-alpha":
          return r.UPPER_ALPHA;

        case "arabic-indic":
          return r.ARABIC_INDIC;

        case "armenian":
          return r.ARMENIAN;

        case "bengali":
          return r.BENGALI;

        case "cambodian":
          return r.CAMBODIAN;

        case "cjk-earthly-branch":
          return r.CJK_EARTHLY_BRANCH;

        case "cjk-heavenly-stem":
          return r.CJK_HEAVENLY_STEM;

        case "cjk-ideographic":
          return r.CJK_IDEOGRAPHIC;

        case "devanagari":
          return r.DEVANAGARI;

        case "ethiopic-numeric":
          return r.ETHIOPIC_NUMERIC;

        case "georgian":
          return r.GEORGIAN;

        case "gujarati":
          return r.GUJARATI;

        case "gurmukhi":
          return r.GURMUKHI;

        case "hebrew":
          return r.HEBREW;

        case "hiragana":
          return r.HIRAGANA;

        case "hiragana-iroha":
          return r.HIRAGANA_IROHA;

        case "japanese-formal":
          return r.JAPANESE_FORMAL;

        case "japanese-informal":
          return r.JAPANESE_INFORMAL;

        case "kannada":
          return r.KANNADA;

        case "katakana":
          return r.KATAKANA;

        case "katakana-iroha":
          return r.KATAKANA_IROHA;

        case "khmer":
          return r.KHMER;

        case "korean-hangul-formal":
          return r.KOREAN_HANGUL_FORMAL;

        case "korean-hanja-formal":
          return r.KOREAN_HANJA_FORMAL;

        case "korean-hanja-informal":
          return r.KOREAN_HANJA_INFORMAL;

        case "lao":
          return r.LAO;

        case "lower-armenian":
          return r.LOWER_ARMENIAN;

        case "malayalam":
          return r.MALAYALAM;

        case "mongolian":
          return r.MONGOLIAN;

        case "myanmar":
          return r.MYANMAR;

        case "oriya":
          return r.ORIYA;

        case "persian":
          return r.PERSIAN;

        case "simp-chinese-formal":
          return r.SIMP_CHINESE_FORMAL;

        case "simp-chinese-informal":
          return r.SIMP_CHINESE_INFORMAL;

        case "tamil":
          return r.TAMIL;

        case "telugu":
          return r.TELUGU;

        case "thai":
          return r.THAI;

        case "tibetan":
          return r.TIBETAN;

        case "trad-chinese-formal":
          return r.TRAD_CHINESE_FORMAL;

        case "trad-chinese-informal":
          return r.TRAD_CHINESE_INFORMAL;

        case "upper-armenian":
          return r.UPPER_ARMENIAN;

        case "disclosure-open":
          return r.DISCLOSURE_OPEN;

        case "disclosure-closed":
          return r.DISCLOSURE_CLOSED;

        case "none":
        default:
          return r.NONE;
      }
    },
        i = (e.parseListStyle = function (t) {
      var e = (0, B.parseBackgroundImage)(t.getPropertyValue("list-style-image"));
      return {
        listStyleType: n(t.getPropertyValue("list-style-type")),
        listStyleImage: e.length ? e[0] : null,
        listStylePosition: i(t.getPropertyValue("list-style-position"))
      };
    }, function (t) {
      switch (t) {
        case "inside":
          return A.INSIDE;

        case "outside":
        default:
          return A.OUTSIDE;
      }
    });
  });
  e(b);
  b.parseListStyle, b.parseListStyleType, b.LIST_STYLE_TYPE, b.LIST_STYLE_POSITION;
  var F = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseMargin = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(u),
        r = ["top", "right", "bottom", "left"];

    e.parseMargin = function (t) {
      return r.map(function (e) {
        return new A["default"](t.getPropertyValue("margin-" + e));
      });
    };
  });
  e(F);
  F.parseMargin;
  var E = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.OVERFLOW = {
      VISIBLE: 0,
      HIDDEN: 1,
      SCROLL: 2,
      AUTO: 3
    };

    e.parseOverflow = function (t) {
      switch (t) {
        case "hidden":
          return A.HIDDEN;

        case "scroll":
          return A.SCROLL;

        case "auto":
          return A.AUTO;

        case "visible":
        default:
          return A.VISIBLE;
      }
    };
  });
  e(E);
  E.OVERFLOW, E.parseOverflow;
  var x = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.OVERFLOW_WRAP = {
      NORMAL: 0,
      BREAK_WORD: 1
    };

    e.parseOverflowWrap = function (t) {
      switch (t) {
        case "break-word":
          return A.BREAK_WORD;

        case "normal":
        default:
          return A.NORMAL;
      }
    };
  });
  e(x);
  x.OVERFLOW_WRAP, x.parseOverflowWrap;
  var H = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.POSITION = {
      STATIC: 0,
      RELATIVE: 1,
      ABSOLUTE: 2,
      FIXED: 3,
      STICKY: 4
    };

    e.parsePosition = function (t) {
      switch (t) {
        case "relative":
          return A.RELATIVE;

        case "absolute":
          return A.ABSOLUTE;

        case "fixed":
          return A.FIXED;

        case "sticky":
          return A.STICKY;
      }

      return A.STATIC;
    };
  });
  e(H);
  H.POSITION, H.parsePosition;
  var I = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseTextShadow = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(o),
        r = /^([+-]|\d|\.)$/i;

    e.parseTextShadow = function (t) {
      if ("none" === t || "string" != typeof t) return null;

      for (var e = "", n = !1, i = [], o = [], a = 0, s = null, c = function c() {
        e.length && (n ? i.push(parseFloat(e)) : s = new A["default"](e)), n = !1, e = "";
      }, l = function l() {
        i.length && null !== s && o.push({
          color: s,
          offsetX: i[0] || 0,
          offsetY: i[1] || 0,
          blur: i[2] || 0
        }), i.splice(0, i.length), s = null;
      }, u = 0; u < t.length; u++) {
        var h = t[u];

        switch (h) {
          case "(":
            e += h, a++;
            break;

          case ")":
            e += h, a--;
            break;

          case ",":
            0 === a ? (c(), l()) : e += h;
            break;

          case " ":
            0 === a ? c() : e += h;
            break;

          default:
            0 === e.length && r.test(h) && (n = !0), e += h;
        }
      }

      return c(), l(), 0 === o.length ? null : o;
    };
  });
  e(I);
  I.parseTextShadow;
  var S = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.TEXT_TRANSFORM = {
      NONE: 0,
      LOWERCASE: 1,
      UPPERCASE: 2,
      CAPITALIZE: 3
    };

    e.parseTextTransform = function (t) {
      switch (t) {
        case "uppercase":
          return A.UPPERCASE;

        case "lowercase":
          return A.LOWERCASE;

        case "capitalize":
          return A.CAPITALIZE;
      }

      return A.NONE;
    };
  });
  e(S);
  S.TEXT_TRANSFORM, S.parseTextTransform;

  var _ = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseTransform = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(u),
        r = function r(t) {
      return parseFloat(t.trim());
    },
        n = /(matrix|matrix3d)\((.+)\)/,
        i = (e.parseTransform = function (t) {
      var e = o(t.transform || t.webkitTransform || t.mozTransform || t.msTransform || t.oTransform);
      return null === e ? null : {
        transform: e,
        transformOrigin: i(t.transformOrigin || t.webkitTransformOrigin || t.mozTransformOrigin || t.msTransformOrigin || t.oTransformOrigin)
      };
    }, function (t) {
      if ("string" != typeof t) {
        var e = new A["default"]("0");
        return [e, e];
      }

      var r = t.split(" ").map(A["default"].create);
      return [r[0], r[1]];
    }),
        o = function o(t) {
      if ("none" === t || "string" != typeof t) return null;
      var e = t.match(n);

      if (e) {
        if ("matrix" === e[1]) {
          var A = e[2].split(",").map(r);
          return [A[0], A[1], A[2], A[3], A[4], A[5]];
        }

        var i = e[2].split(",").map(r);
        return [i[0], i[1], i[4], i[5], i[12], i[13]];
      }

      return null;
    };
  });

  e(_);
  _.parseTransform;
  var T = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.VISIBILITY = {
      VISIBLE: 0,
      HIDDEN: 1,
      COLLAPSE: 2
    };

    e.parseVisibility = function (t) {
      switch (t) {
        case "hidden":
          return A.HIDDEN;

        case "collapse":
          return A.COLLAPSE;

        case "visible":
        default:
          return A.VISIBLE;
      }
    };
  });
  e(T);
  T.VISIBILITY, T.parseVisibility;
  var N = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = e.WORD_BREAK = {
      NORMAL: "normal",
      BREAK_ALL: "break-all",
      KEEP_ALL: "keep-all"
    };

    e.parseWordBreak = function (t) {
      switch (t) {
        case "break-all":
          return A.BREAK_ALL;

        case "keep-all":
          return A.KEEP_ALL;

        case "normal":
        default:
          return A.NORMAL;
      }
    };
  });
  e(N);
  N.WORD_BREAK, N.parseWordBreak;
  var k = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e.parseZIndex = function (t) {
      var e = "auto" === t;
      return {
        auto: e,
        order: e ? 0 : parseInt(t, 10)
      };
    };
  });
  e(k);
  k.parseZIndex;
  var O = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.element = e;
      }

      return A(t, [{
        key: "render",
        value: function value(t) {
          var e = this;
          this.options = t, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = Math.floor(t.width) * t.scale, this.canvas.height = Math.floor(t.height) * t.scale, this.canvas.style.width = t.width + "px", this.canvas.style.height = t.height + "px", t.logger.log("ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale);
          var A = n(Math.max(t.windowWidth, t.width) * t.scale, Math.max(t.windowHeight, t.height) * t.scale, t.scrollX * t.scale, t.scrollY * t.scale, this.element);
          return i(A).then(function (A) {
            return t.backgroundColor && (e.ctx.fillStyle = t.backgroundColor.toString(), e.ctx.fillRect(0, 0, t.width * t.scale, t.height * t.scale)), e.ctx.drawImage(A, -t.x * t.scale, -t.y * t.scale), e.canvas;
          });
        }
      }]), t;
    }();

    e["default"] = r;

    var n = e.createForeignObjectSVG = function (t, e, A, r, n) {
      var i = "http://www.w3.org/2000/svg",
          o = document.createElementNS(i, "svg"),
          a = document.createElementNS(i, "foreignObject");
      return o.setAttributeNS(null, "width", t), o.setAttributeNS(null, "height", e), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", A), a.setAttributeNS(null, "y", r), a.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(n), o;
    },
        i = e.loadSerializedSVG = function (t) {
      return new Promise(function (e, A) {
        var r = new Image();
        r.onload = function () {
          return e(r);
        }, r.onerror = A, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
      });
    };
  });
  e(O);
  O.createForeignObjectSVG, O.loadSerializedSVG;
  var P = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function A(t) {
      return 0 === t[0] && 255 === t[1] && 0 === t[2] && 255 === t[3];
    },
        r = {
      get SUPPORT_RANGE_BOUNDS() {
        var t = function (t) {
          if (t.createRange) {
            var e = t.createRange();

            if (e.getBoundingClientRect) {
              var A = t.createElement("boundtest");
              A.style.height = "123px", A.style.display = "block", t.body.appendChild(A), e.selectNode(A);
              var r = e.getBoundingClientRect(),
                  n = Math.round(r.height);
              if (t.body.removeChild(A), 123 === n) return !0;
            }
          }

          return !1;
        }(document);

        return Object.defineProperty(r, "SUPPORT_RANGE_BOUNDS", {
          value: t
        }), t;
      },

      get SUPPORT_SVG_DRAWING() {
        var t = function (t) {
          var e = new Image(),
              A = t.createElement("canvas"),
              r = A.getContext("2d");
          e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

          try {
            r.drawImage(e, 0, 0), A.toDataURL();
          } catch (t) {
            return !1;
          }

          return !0;
        }(document);

        return Object.defineProperty(r, "SUPPORT_SVG_DRAWING", {
          value: t
        }), t;
      },

      get SUPPORT_BASE64_DRAWING() {
        return function (t) {
          var e = function (t, e) {
            var A = new Image(),
                r = t.createElement("canvas"),
                n = r.getContext("2d");
            return new Promise(function (t) {
              A.src = e;

              var i = function i() {
                try {
                  n.drawImage(A, 0, 0), r.toDataURL();
                } catch (e) {
                  return t(!1);
                }

                return t(!0);
              };

              A.onload = i, A.onerror = function () {
                return t(!1);
              }, !0 === A.complete && setTimeout(function () {
                i();
              }, 500);
            });
          }(document, t);

          return Object.defineProperty(r, "SUPPORT_BASE64_DRAWING", {
            value: function value() {
              return e;
            }
          }), e;
        };
      },

      get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var t = "function" == typeof Array.from && "function" == typeof window.fetch ? function (t) {
          var e = t.createElement("canvas");
          e.width = 100, e.height = 100;
          var r = e.getContext("2d");
          r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, 100, 100);
          var n = new Image(),
              i = e.toDataURL();
          n.src = i;
          var o = (0, O.createForeignObjectSVG)(100, 100, 0, 0, n);
          return r.fillStyle = "red", r.fillRect(0, 0, 100, 100), (0, O.loadSerializedSVG)(o).then(function (e) {
            r.drawImage(e, 0, 0);
            var n = r.getImageData(0, 0, 100, 100).data;
            r.fillStyle = "red", r.fillRect(0, 0, 100, 100);
            var o = t.createElement("div");
            return o.style.backgroundImage = "url(" + i + ")", o.style.height = "100px", A(n) ? (0, O.loadSerializedSVG)((0, O.createForeignObjectSVG)(100, 100, 0, 0, o)) : Promise.reject(!1);
          }).then(function (t) {
            return r.drawImage(t, 0, 0), A(r.getImageData(0, 0, 100, 100).data);
          })["catch"](function (t) {
            return !1;
          });
        }(document) : Promise.resolve(!1);
        return Object.defineProperty(r, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: t
        }), t;
      },

      get SUPPORT_CORS_IMAGES() {
        var t = void 0 !== new Image().crossOrigin;
        return Object.defineProperty(r, "SUPPORT_CORS_IMAGES", {
          value: t
        }), t;
      },

      get SUPPORT_RESPONSE_TYPE() {
        var t = "string" == typeof new XMLHttpRequest().responseType;
        return Object.defineProperty(r, "SUPPORT_RESPONSE_TYPE", {
          value: t
        }), t;
      },

      get SUPPORT_CORS_XHR() {
        var t = ("withCredentials" in new XMLHttpRequest());
        return Object.defineProperty(r, "SUPPORT_CORS_XHR", {
          value: t
        }), t;
      }

    };

    e["default"] = r;
  });
  e(P);
  var D = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.toCodePoints = function (t) {
      for (var e = [], A = 0, r = t.length; A < r;) {
        var n = t.charCodeAt(A++);

        if (n >= 55296 && n <= 56319 && A < r) {
          var i = t.charCodeAt(A++);
          56320 == (64512 & i) ? e.push(((1023 & n) << 10) + (1023 & i) + 65536) : (e.push(n), A--);
        } else e.push(n);
      }

      return e;
    }, e.fromCodePoint = function () {
      if (String.fromCodePoint) return String.fromCodePoint.apply(String, arguments);
      var t = arguments.length;
      if (!t) return "";

      for (var e = [], A = -1, r = ""; ++A < t;) {
        var n = arguments.length <= A ? void 0 : arguments[A];
        n <= 65535 ? e.push(n) : (n -= 65536, e.push(55296 + (n >> 10), n % 1024 + 56320)), (A + 1 === t || e.length > 16384) && (r += String.fromCharCode.apply(String, e), e.length = 0);
      }

      return r;
    };

    for (var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), n = 0; n < A.length; n++) {
      r[A.charCodeAt(n)] = n;
    }

    e.decode = function (t) {
      var e = .75 * t.length,
          A = t.length,
          n = void 0,
          i = 0,
          o = void 0,
          a = void 0,
          s = void 0,
          c = void 0;
      "=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);
      var l = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(e) : new Array(e),
          u = Array.isArray(l) ? l : new Uint8Array(l);

      for (n = 0; n < A; n += 4) {
        o = r[t.charCodeAt(n)], a = r[t.charCodeAt(n + 1)], s = r[t.charCodeAt(n + 2)], c = r[t.charCodeAt(n + 3)], u[i++] = o << 2 | a >> 4, u[i++] = (15 & a) << 4 | s >> 2, u[i++] = (3 & s) << 6 | 63 & c;
      }

      return l;
    }, e.polyUint16Array = function (t) {
      for (var e = t.length, A = [], r = 0; r < e; r += 2) {
        A.push(t[r + 1] << 8 | t[r]);
      }

      return A;
    }, e.polyUint32Array = function (t) {
      for (var e = t.length, A = [], r = 0; r < e; r += 4) {
        A.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
      }

      return A;
    };
  });
  e(D);
  D.toCodePoints, D.fromCodePoint, D.decode, D.polyUint16Array, D.polyUint32Array;
  var L = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Trie = e.createTrieFromBase64 = e.UTRIE2_INDEX_2_MASK = e.UTRIE2_INDEX_2_BLOCK_LENGTH = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = e.UTRIE2_INDEX_1_OFFSET = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = e.UTRIE2_INDEX_2_BMP_LENGTH = e.UTRIE2_LSCP_INDEX_2_LENGTH = e.UTRIE2_DATA_MASK = e.UTRIE2_DATA_BLOCK_LENGTH = e.UTRIE2_LSCP_INDEX_2_OFFSET = e.UTRIE2_SHIFT_1_2 = e.UTRIE2_INDEX_SHIFT = e.UTRIE2_SHIFT_1 = e.UTRIE2_SHIFT_2 = void 0;

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = e.UTRIE2_SHIFT_2 = 5,
        n = e.UTRIE2_SHIFT_1 = 11,
        i = e.UTRIE2_INDEX_SHIFT = 2,
        o = e.UTRIE2_SHIFT_1_2 = n - r,
        a = e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> r,
        s = e.UTRIE2_DATA_BLOCK_LENGTH = 1 << r,
        c = e.UTRIE2_DATA_MASK = s - 1,
        l = e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> r,
        u = e.UTRIE2_INDEX_2_BMP_LENGTH = a + l,
        h = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = u,
        d = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32,
        f = e.UTRIE2_INDEX_1_OFFSET = h + d,
        p = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> n,
        g = e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << o,
        B = e.UTRIE2_INDEX_2_MASK = g - 1,
        w = (e.createTrieFromBase64 = function (t) {
      var e = (0, D.decode)(t),
          A = Array.isArray(e) ? (0, D.polyUint32Array)(e) : new Uint32Array(e),
          r = Array.isArray(e) ? (0, D.polyUint16Array)(e) : new Uint16Array(e),
          n = r.slice(12, A[4] / 2),
          i = 2 === A[5] ? r.slice((24 + A[4]) / 2) : A.slice(Math.ceil((24 + A[4]) / 4));
      return new w(A[0], A[1], A[2], A[3], n, i);
    }, e.Trie = function () {
      function t(e, A, r, n, i, o) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.initialValue = e, this.errorValue = A, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
      }

      return A(t, [{
        key: "get",
        value: function value(t) {
          var e = void 0;

          if (t >= 0) {
            if (t < 55296 || t > 56319 && t <= 65535) return e = this.index[t >> r], e = (e << i) + (t & c), this.data[e];
            if (t <= 65535) return e = this.index[a + (t - 55296 >> r)], e = (e << i) + (t & c), this.data[e];
            if (t < this.highStart) return e = f - p + (t >> n), e = this.index[e], e += t >> r & B, e = this.index[e], e = (e << i) + (t & c), this.data[e];
            if (t <= 1114111) return this.data[this.highValueIndex];
          }

          return this.errorValue;
        }
      }]), t;
    }());
  });
  e(L);
  L.Trie, L.createTrieFromBase64, L.UTRIE2_INDEX_2_MASK, L.UTRIE2_INDEX_2_BLOCK_LENGTH, L.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH, L.UTRIE2_INDEX_1_OFFSET, L.UTRIE2_UTF8_2B_INDEX_2_LENGTH, L.UTRIE2_UTF8_2B_INDEX_2_OFFSET, L.UTRIE2_INDEX_2_BMP_LENGTH, L.UTRIE2_LSCP_INDEX_2_LENGTH, L.UTRIE2_DATA_MASK, L.UTRIE2_DATA_BLOCK_LENGTH, L.UTRIE2_LSCP_INDEX_2_OFFSET, L.UTRIE2_SHIFT_1_2, L.UTRIE2_INDEX_SHIFT, L.UTRIE2_SHIFT_1, L.UTRIE2_SHIFT_2;
  var R = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.LineBreaker = e.inlineBreakOpportunities = e.lineBreakAtIndex = e.codePointsToCharacterClasses = e.UnicodeTrie = e.BREAK_ALLOWED = e.BREAK_NOT_ALLOWED = e.BREAK_MANDATORY = e.classes = e.LETTER_NUMBER_MODIFIER = void 0;

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        n = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"),
        i = e.LETTER_NUMBER_MODIFIER = 50,
        o = 10,
        a = 13,
        s = 15,
        c = 17,
        l = 18,
        u = 19,
        h = 20,
        d = 21,
        f = 22,
        p = 24,
        g = 25,
        B = 26,
        w = 27,
        m = 28,
        y = 30,
        v = 32,
        Q = 33,
        C = 34,
        U = 35,
        b = 37,
        F = 38,
        E = 39,
        x = 40,
        H = 42,
        I = (e.classes = {
      BK: 1,
      CR: 2,
      LF: 3,
      CM: 4,
      NL: 5,
      SG: 6,
      WJ: 7,
      ZW: 8,
      GL: 9,
      SP: o,
      ZWJ: 11,
      B2: 12,
      BA: a,
      BB: 14,
      HY: s,
      CB: 16,
      CL: c,
      CP: l,
      EX: u,
      IN: h,
      NS: d,
      OP: f,
      QU: 23,
      IS: p,
      NU: g,
      PO: B,
      PR: w,
      SY: m,
      AI: 29,
      AL: y,
      CJ: 31,
      EB: v,
      EM: Q,
      H2: C,
      H3: U,
      HL: 36,
      ID: b,
      JL: F,
      JV: E,
      JT: x,
      RI: 41,
      SA: H,
      XX: 43
    }, e.BREAK_MANDATORY = "!"),
        S = e.BREAK_NOT_ALLOWED = "×",
        _ = e.BREAK_ALLOWED = "÷",
        T = e.UnicodeTrie = (0, L.createTrieFromBase64)(n["default"]),
        N = [y, 36],
        k = [1, 2, 3, 5],
        O = [o, 8],
        P = [w, B],
        R = k.concat(O),
        M = [F, E, x, C, U],
        K = [s, a],
        z = e.codePointsToCharacterClasses = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "strict",
          A = [],
          r = [],
          n = [];
      return t.forEach(function (t, o) {
        var a = T.get(t);
        if (a > i ? (n.push(!0), a -= i) : n.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(t)) return r.push(o), A.push(16);

        if (4 === a || 11 === a) {
          if (0 === o) return r.push(o), A.push(y);
          var s = A[o - 1];
          return -1 === R.indexOf(s) ? (r.push(r[o - 1]), A.push(s)) : (r.push(o), A.push(y));
        }

        return r.push(o), 31 === a ? A.push("strict" === e ? d : b) : a === H ? A.push(y) : 29 === a ? A.push(y) : 43 === a ? t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141 ? A.push(b) : A.push(y) : void A.push(a);
      }), [r, A, n];
    },
        q = function q(t, e, A, r) {
      var n = r[A];
      if (Array.isArray(t) ? -1 !== t.indexOf(n) : t === n) for (var i = A; i <= r.length;) {
        var a = r[++i];
        if (a === e) return !0;
        if (a !== o) break;
      }
      if (n === o) for (var s = A; s > 0;) {
        var c = r[--s];
        if (Array.isArray(t) ? -1 !== t.indexOf(c) : t === c) for (var l = A; l <= r.length;) {
          var u = r[++l];
          if (u === e) return !0;
          if (u !== o) break;
        }
        if (c !== o) break;
      }
      return !1;
    },
        j = function j(t, e) {
      for (var A = t; A >= 0;) {
        var r = e[A];
        if (r !== o) return r;
        A--;
      }

      return 0;
    },
        X = function X(t, e, A, r, n) {
      if (0 === A[r]) return S;
      var i = r - 1;
      if (Array.isArray(n) && !0 === n[i]) return S;
      var y = i - 1,
          H = i + 1,
          D = e[i],
          L = y >= 0 ? e[y] : 0,
          R = e[H];
      if (2 === D && 3 === R) return S;
      if (-1 !== k.indexOf(D)) return I;
      if (-1 !== k.indexOf(R)) return S;
      if (-1 !== O.indexOf(R)) return S;
      if (8 === j(i, e)) return _;
      if (11 === T.get(t[i]) && (R === b || R === v || R === Q)) return S;
      if (7 === D || 7 === R) return S;
      if (9 === D) return S;
      if (-1 === [o, a, s].indexOf(D) && 9 === R) return S;
      if (-1 !== [c, l, u, p, m].indexOf(R)) return S;
      if (j(i, e) === f) return S;
      if (q(23, f, i, e)) return S;
      if (q([c, l], d, i, e)) return S;
      if (q(12, 12, i, e)) return S;
      if (D === o) return _;
      if (23 === D || 23 === R) return S;
      if (16 === R || 16 === D) return _;
      if (-1 !== [a, s, d].indexOf(R) || 14 === D) return S;
      if (36 === L && -1 !== K.indexOf(D)) return S;
      if (D === m && 36 === R) return S;
      if (R === h && -1 !== N.concat(h, u, g, b, v, Q).indexOf(D)) return S;
      if (-1 !== N.indexOf(R) && D === g || -1 !== N.indexOf(D) && R === g) return S;
      if (D === w && -1 !== [b, v, Q].indexOf(R) || -1 !== [b, v, Q].indexOf(D) && R === B) return S;
      if (-1 !== N.indexOf(D) && -1 !== P.indexOf(R) || -1 !== P.indexOf(D) && -1 !== N.indexOf(R)) return S;
      if (-1 !== [w, B].indexOf(D) && (R === g || -1 !== [f, s].indexOf(R) && e[H + 1] === g) || -1 !== [f, s].indexOf(D) && R === g || D === g && -1 !== [g, m, p].indexOf(R)) return S;
      if (-1 !== [g, m, p, c, l].indexOf(R)) for (var z = i; z >= 0;) {
        var X = e[z];
        if (X === g) return S;
        if (-1 === [m, p].indexOf(X)) break;
        z--;
      }
      if (-1 !== [w, B].indexOf(R)) for (var V = -1 !== [c, l].indexOf(D) ? y : i; V >= 0;) {
        var G = e[V];
        if (G === g) return S;
        if (-1 === [m, p].indexOf(G)) break;
        V--;
      }
      if (F === D && -1 !== [F, E, C, U].indexOf(R) || -1 !== [E, C].indexOf(D) && -1 !== [E, x].indexOf(R) || -1 !== [x, U].indexOf(D) && R === x) return S;
      if (-1 !== M.indexOf(D) && -1 !== [h, B].indexOf(R) || -1 !== M.indexOf(R) && D === w) return S;
      if (-1 !== N.indexOf(D) && -1 !== N.indexOf(R)) return S;
      if (D === p && -1 !== N.indexOf(R)) return S;
      if (-1 !== N.concat(g).indexOf(D) && R === f || -1 !== N.concat(g).indexOf(R) && D === l) return S;

      if (41 === D && 41 === R) {
        for (var W = A[i], Y = 1; W > 0 && (W--, 41 === e[W]);) {
          Y++;
        }

        if (Y % 2 != 0) return S;
      }

      return D === v && R === Q ? S : _;
    },
        V = (e.lineBreakAtIndex = function (t, e) {
      if (0 === e) return S;
      if (e >= t.length) return I;
      var A = z(t),
          n = r(A, 2),
          i = n[0],
          o = n[1];
      return X(t, o, i, e);
    }, function (t, e) {
      e || (e = {
        lineBreak: "normal",
        wordBreak: "normal"
      });
      var A = z(t, e.lineBreak),
          n = r(A, 3),
          i = n[0],
          o = n[1],
          a = n[2];
      "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (o = o.map(function (t) {
        return -1 !== [g, y, H].indexOf(t) ? b : t;
      }));
      return [i, o, "keep-all" === e.wordBreak ? a.map(function (e, A) {
        return e && t[A] >= 19968 && t[A] <= 40959;
      }) : null];
    }),
        G = (e.inlineBreakOpportunities = function (t, e) {
      var A = (0, D.toCodePoints)(t),
          n = S,
          i = V(A, e),
          o = r(i, 3),
          a = o[0],
          s = o[1],
          c = o[2];
      return A.forEach(function (t, e) {
        n += (0, D.fromCodePoint)(t) + (e >= A.length - 1 ? I : X(A, s, a, e + 1, c));
      }), n;
    }, function () {
      function t(e, A, r, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._codePoints = e, this.required = A === I, this.start = r, this.end = n;
      }

      return A(t, [{
        key: "slice",
        value: function value() {
          return D.fromCodePoint.apply(void 0, function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, A = Array(t.length); e < t.length; e++) {
                A[e] = t[e];
              }

              return A;
            }

            return Array.from(t);
          }(this._codePoints.slice(this.start, this.end)));
        }
      }]), t;
    }());

    e.LineBreaker = function (t, e) {
      var A = (0, D.toCodePoints)(t),
          n = V(A, e),
          i = r(n, 3),
          o = i[0],
          a = i[1],
          s = i[2],
          c = A.length,
          l = 0,
          u = 0;
      return {
        next: function next() {
          if (u >= c) return {
            done: !0
          };

          for (var t = S; u < c && (t = X(A, a, o, ++u, s)) === S;) {
            ;
          }

          if (t !== S || u === c) {
            var e = new G(A, t, l, u);
            return l = u, {
              value: e,
              done: !1
            };
          }

          return {
            done: !0
          };
        }
      };
    };
  });
  e(R);
  R.LineBreaker, R.inlineBreakOpportunities, R.lineBreakAtIndex, R.codePointsToCharacterClasses, R.UnicodeTrie, R.BREAK_ALLOWED, R.BREAK_NOT_ALLOWED, R.BREAK_MANDATORY, R.classes, R.LETTER_NUMBER_MODIFIER;
  var M = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "toCodePoints", {
      enumerable: !0,
      get: function get() {
        return D.toCodePoints;
      }
    }), Object.defineProperty(e, "fromCodePoint", {
      enumerable: !0,
      get: function get() {
        return D.fromCodePoint;
      }
    }), Object.defineProperty(e, "LineBreaker", {
      enumerable: !0,
      get: function get() {
        return R.LineBreaker;
      }
    });
  });
  e(M);
  var K = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.breakWords = e.fromCodePoint = e.toCodePoints = void 0, Object.defineProperty(e, "toCodePoints", {
      enumerable: !0,
      get: function get() {
        return M.toCodePoints;
      }
    }), Object.defineProperty(e, "fromCodePoint", {
      enumerable: !0,
      get: function get() {
        return M.fromCodePoint;
      }
    });
    (function (t) {
      t && t.__esModule;
    })(G), e.breakWords = function (t, e) {
      for (var A = (0, M.LineBreaker)(t, {
        lineBreak: e.style.lineBreak,
        wordBreak: e.style.overflowWrap === x.OVERFLOW_WRAP.BREAK_WORD ? "break-word" : e.style.wordBreak
      }), r = [], n = void 0; !(n = A.next()).done;) {
        r.push(n.value.slice());
      }

      return r;
    };
  });
  e(K);
  K.breakWords, K.fromCodePoint, K.toCodePoints;
  var z = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseTextBounds = e.TextBounds = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(P),
        r = e.TextBounds = function t(e, A) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.text = e, this.bounds = A;
    },
        n = (e.parseTextBounds = function (t, e, o) {
      for (var s = 0 !== e.style.letterSpacing ? (0, K.toCodePoints)(t).map(function (t) {
        return (0, K.fromCodePoint)(t);
      }) : (0, K.breakWords)(t, e), c = s.length, l = o.parentNode ? o.parentNode.ownerDocument.defaultView : null, u = l ? l.pageXOffset : 0, h = l ? l.pageYOffset : 0, d = [], f = 0, p = 0; p < c; p++) {
        var g = s[p];
        if (e.style.textDecoration !== a.TEXT_DECORATION.NONE || g.trim().length > 0) {
          if (A["default"].SUPPORT_RANGE_BOUNDS) d.push(new r(g, i(o, f, g.length, u, h)));else {
            var B = o.splitText(g.length);
            d.push(new r(g, n(o, u, h))), o = B;
          }
        } else A["default"].SUPPORT_RANGE_BOUNDS || (o = o.splitText(g.length));
        f += g.length;
      }

      return d;
    }, function (t, e, A) {
      var r = t.ownerDocument.createElement("html2canvaswrapper");
      r.appendChild(t.cloneNode(!0));
      var n = t.parentNode;

      if (n) {
        n.replaceChild(r, t);
        var i = (0, p.parseBounds)(r, e, A);
        return r.firstChild && n.replaceChild(r.firstChild, r), i;
      }

      return new p.Bounds(0, 0, 0, 0);
    }),
        i = function i(t, e, A, r, n) {
      var i = t.ownerDocument.createRange();
      return i.setStart(t, e), i.setEnd(t, e + A), p.Bounds.fromClientRect(i.getBoundingClientRect(), r, n);
    };
  });
  e(z);
  z.parseTextBounds, z.TextBounds;
  var q = A(function (t, e) {
    function A(t, e, A) {
      return t.length > 0 ? e + A.toUpperCase() : t;
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        n = function () {
      function t(e, A, r) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.text = e, this.parent = A, this.bounds = r;
      }

      return r(t, null, [{
        key: "fromTextNode",
        value: function value(e, A) {
          var r = o(e.data, A.style.textTransform);
          return new t(r, A, (0, z.parseTextBounds)(r, A, e));
        }
      }]), t;
    }();

    e["default"] = n;

    var i = /(^|\s|:|-|\(|\))([a-z])/g,
        o = function o(t, e) {
      switch (e) {
        case S.TEXT_TRANSFORM.LOWERCASE:
          return t.toLowerCase();

        case S.TEXT_TRANSFORM.CAPITALIZE:
          return t.replace(i, A);

        case S.TEXT_TRANSFORM.UPPERCASE:
          return t.toUpperCase();

        default:
          return t;
      }
    };
  });
  e(q);
  var j = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e["default"] = function t(e, A, r) {
      !function (e, A) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this), this.type = i.PATH.CIRCLE, this.x = e, this.y = A, this.radius = r;
    };
  });
  e(j);
  var X = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.reformatInputBounds = e.inlineSelectElement = e.inlineTextAreaElement = e.inlineInputElement = e.getInputBorderRadius = e.INPUT_BACKGROUND = e.INPUT_BORDERS = e.INPUT_COLOR = void 0;

    var r = A(q),
        n = A(j),
        i = A(d),
        a = A(o),
        s = A(u),
        c = (e.INPUT_COLOR = new a["default"]([42, 42, 42]), new a["default"]([165, 165, 165])),
        h = new a["default"]([222, 222, 222]),
        f = {
      borderWidth: 1,
      borderColor: c,
      borderStyle: w.BORDER_STYLE.SOLID
    },
        p = (e.INPUT_BORDERS = [f, f, f, f], e.INPUT_BACKGROUND = {
      backgroundColor: h,
      backgroundImage: [],
      backgroundClip: B.BACKGROUND_CLIP.PADDING_BOX,
      backgroundOrigin: B.BACKGROUND_ORIGIN.PADDING_BOX
    }, new s["default"]("50%")),
        g = [p, p],
        m = [g, g, g, g],
        y = new s["default"]("3px"),
        v = [y, y],
        Q = [v, v, v, v],
        C = (e.getInputBorderRadius = function (t) {
      return "radio" === t.type ? m : Q;
    }, e.inlineInputElement = function (t, e) {
      if ("radio" === t.type || "checkbox" === t.type) {
        if (t.checked) {
          var A = Math.min(e.bounds.width, e.bounds.height);
          e.childNodes.push("checkbox" === t.type ? [new i["default"](e.bounds.left + .39363 * A, e.bounds.top + .79 * A), new i["default"](e.bounds.left + .16 * A, e.bounds.top + .5549 * A), new i["default"](e.bounds.left + .27347 * A, e.bounds.top + .44071 * A), new i["default"](e.bounds.left + .39694 * A, e.bounds.top + .5649 * A), new i["default"](e.bounds.left + .72983 * A, e.bounds.top + .23 * A), new i["default"](e.bounds.left + .84 * A, e.bounds.top + .34085 * A), new i["default"](e.bounds.left + .39363 * A, e.bounds.top + .79 * A)] : new n["default"](e.bounds.left + A / 4, e.bounds.top + A / 4, A / 4));
        }
      } else C(U(t), t, e, !1);
    }, e.inlineTextAreaElement = function (t, e) {
      C(t.value, t, e, !0);
    }, e.inlineSelectElement = function (t, e) {
      var A = t.options[t.selectedIndex || 0];
      C(A ? A.text || "" : "", t, e, !1);
    }, e.reformatInputBounds = function (t) {
      return t.width > t.height ? (t.left += (t.width - t.height) / 2, t.width = t.height) : t.width < t.height && (t.top += (t.height - t.width) / 2, t.height = t.width), t;
    }, function (t, e, A, n) {
      var i = e.ownerDocument.body;

      if (t.length > 0 && i) {
        var o = e.ownerDocument.createElement("html2canvaswrapper");
        (0, l.copyCSSStyles)(e.ownerDocument.defaultView.getComputedStyle(e, null), o), o.style.position = "absolute", o.style.left = A.bounds.left + "px", o.style.top = A.bounds.top + "px", n || (o.style.whiteSpace = "nowrap");
        var a = e.ownerDocument.createTextNode(t);
        o.appendChild(a), i.appendChild(o), A.childNodes.push(r["default"].fromTextNode(a, A)), i.removeChild(o);
      }
    }),
        U = function U(t) {
      var e = "password" === t.type ? new Array(t.value.length + 1).join("•") : t.value;
      return 0 === e.length ? t.placeholder || "" : e;
    };
  });
  e(X);
  X.reformatInputBounds, X.inlineSelectElement, X.inlineTextAreaElement, X.inlineInputElement, X.getInputBorderRadius, X.INPUT_BACKGROUND, X.INPUT_BORDERS, X.INPUT_COLOR;
  var V = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.createCounterText = e.inlineListItemElement = e.getListOwner = void 0;

    var r = A(G),
        n = A(q),
        i = ["OL", "UL", "MENU"],
        o = (e.getListOwner = function (t) {
      var e = t.parent;
      if (!e) return null;

      do {
        if (-1 !== i.indexOf(e.tagName)) return e;
        e = e.parent;
      } while (e);

      return t.parent;
    }, e.inlineListItemElement = function (t, e, A) {
      var i = e.style.listStyle;

      if (i) {
        var o = t.ownerDocument.defaultView.getComputedStyle(t, null),
            a = t.ownerDocument.createElement("html2canvaswrapper");

        switch ((0, l.copyCSSStyles)(o, a), a.style.position = "absolute", a.style.bottom = "auto", a.style.display = "block", a.style.letterSpacing = "normal", i.listStylePosition) {
          case b.LIST_STYLE_POSITION.OUTSIDE:
            a.style.left = "auto", a.style.right = t.ownerDocument.defaultView.innerWidth - e.bounds.left - e.style.margin[1].getAbsoluteValue(e.bounds.width) + 7 + "px", a.style.textAlign = "right";
            break;

          case b.LIST_STYLE_POSITION.INSIDE:
            a.style.left = e.bounds.left - e.style.margin[3].getAbsoluteValue(e.bounds.width) + "px", a.style.right = "auto", a.style.textAlign = "left";
        }

        var s = void 0,
            c = e.style.margin[0].getAbsoluteValue(e.bounds.width),
            u = i.listStyleImage;
        if (u) {
          if ("url" === u.method) {
            var h = t.ownerDocument.createElement("img");
            h.src = u.args[0], a.style.top = e.bounds.top - c + "px", a.style.width = "auto", a.style.height = "auto", a.appendChild(h);
          } else {
            var d = .5 * parseFloat(e.style.font.fontSize);
            a.style.top = e.bounds.top - c + e.bounds.height - 1.5 * d + "px", a.style.width = d + "px", a.style.height = d + "px", a.style.backgroundImage = o.listStyleImage;
          }
        } else "number" == typeof e.listIndex && (s = t.ownerDocument.createTextNode(g(e.listIndex, i.listStyleType, !0)), a.appendChild(s), a.style.top = e.bounds.top - c + "px");
        var f = t.ownerDocument.body;
        f.appendChild(a), s ? (e.childNodes.push(n["default"].fromTextNode(s, e)), f.removeChild(a)) : e.childNodes.push(new r["default"](a, e, A, 0));
      }
    }, {
      integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    }),
        a = {
      integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
    },
        s = {
      integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
    },
        c = {
      integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
    },
        u = function u(t, e, A, r, n, i) {
      return t < e || t > A ? g(t, n, i.length > 0) : r.integers.reduce(function (e, A, n) {
        for (; t >= A;) {
          t -= A, e += r.values[n];
        }

        return e;
      }, "") + i;
    },
        h = function h(t, e, A, r) {
      var n = "";

      do {
        A || t--, n = r(t) + n, t /= e;
      } while (t * e >= e);

      return n;
    },
        d = function d(t, e, A, r, n) {
      var i = A - e + 1;
      return (t < 0 ? "-" : "") + (h(Math.abs(t), i, r, function (t) {
        return (0, K.fromCodePoint)(Math.floor(t % i) + e);
      }) + n);
    },
        f = function f(t, e) {
      var A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ". ",
          r = e.length;
      return h(Math.abs(t), r, !1, function (t) {
        return e[Math.floor(t % r)];
      }) + A;
    },
        p = function p(t, e, A, r, n, i) {
      if (t < -9999 || t > 9999) return g(t, b.LIST_STYLE_TYPE.CJK_DECIMAL, n.length > 0);
      var o = Math.abs(t),
          a = n;
      if (0 === o) return e[0] + a;

      for (var s = 0; o > 0 && s <= 4; s++) {
        var c = o % 10;
        0 === c && (0, l.contains)(i, 1) && "" !== a ? a = e[c] + a : c > 1 || 1 === c && 0 === s || 1 === c && 1 === s && (0, l.contains)(i, 2) || 1 === c && 1 === s && (0, l.contains)(i, 4) && t > 100 || 1 === c && s > 1 && (0, l.contains)(i, 8) ? a = e[c] + (s > 0 ? A[s - 1] : "") + a : 1 === c && s > 0 && (a = A[s - 1] + a), o = Math.floor(o / 10);
      }

      return (t < 0 ? r : "") + a;
    },
        g = e.createCounterText = function (t, e, A) {
      var r = A ? ". " : "",
          n = A ? "、" : "",
          i = A ? ", " : "";

      switch (e) {
        case b.LIST_STYLE_TYPE.DISC:
          return "•";

        case b.LIST_STYLE_TYPE.CIRCLE:
          return "◦";

        case b.LIST_STYLE_TYPE.SQUARE:
          return "◾";

        case b.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
          var l = d(t, 48, 57, !0, r);
          return l.length < 4 ? "0" + l : l;

        case b.LIST_STYLE_TYPE.CJK_DECIMAL:
          return f(t, "〇一二三四五六七八九", n);

        case b.LIST_STYLE_TYPE.LOWER_ROMAN:
          return u(t, 1, 3999, o, b.LIST_STYLE_TYPE.DECIMAL, r).toLowerCase();

        case b.LIST_STYLE_TYPE.UPPER_ROMAN:
          return u(t, 1, 3999, o, b.LIST_STYLE_TYPE.DECIMAL, r);

        case b.LIST_STYLE_TYPE.LOWER_GREEK:
          return d(t, 945, 969, !1, r);

        case b.LIST_STYLE_TYPE.LOWER_ALPHA:
          return d(t, 97, 122, !1, r);

        case b.LIST_STYLE_TYPE.UPPER_ALPHA:
          return d(t, 65, 90, !1, r);

        case b.LIST_STYLE_TYPE.ARABIC_INDIC:
          return d(t, 1632, 1641, !0, r);

        case b.LIST_STYLE_TYPE.ARMENIAN:
        case b.LIST_STYLE_TYPE.UPPER_ARMENIAN:
          return u(t, 1, 9999, a, b.LIST_STYLE_TYPE.DECIMAL, r);

        case b.LIST_STYLE_TYPE.LOWER_ARMENIAN:
          return u(t, 1, 9999, a, b.LIST_STYLE_TYPE.DECIMAL, r).toLowerCase();

        case b.LIST_STYLE_TYPE.BENGALI:
          return d(t, 2534, 2543, !0, r);

        case b.LIST_STYLE_TYPE.CAMBODIAN:
        case b.LIST_STYLE_TYPE.KHMER:
          return d(t, 6112, 6121, !0, r);

        case b.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
          return f(t, "子丑寅卯辰巳午未申酉戌亥", n);

        case b.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
          return f(t, "甲乙丙丁戊己庚辛壬癸", n);

        case b.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case b.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
          return p(t, "零一二三四五六七八九", "十百千萬", "負", n, 14);

        case b.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
          return p(t, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);

        case b.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
          return p(t, "零一二三四五六七八九", "十百千萬", "负", n, 14);

        case b.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
          return p(t, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);

        case b.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
          return p(t, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);

        case b.LIST_STYLE_TYPE.JAPANESE_FORMAL:
          return p(t, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);

        case b.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
          return p(t, "영일이삼사오육칠팔구", "십백천만", "마이너스 ", i, 7);

        case b.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
          return p(t, "零一二三四五六七八九", "十百千萬", "마이너스 ", i, 0);

        case b.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
          return p(t, "零壹貳參四五六七八九", "拾百千", "마이너스 ", i, 7);

        case b.LIST_STYLE_TYPE.DEVANAGARI:
          return d(t, 2406, 2415, !0, r);

        case b.LIST_STYLE_TYPE.GEORGIAN:
          return u(t, 1, 19999, c, b.LIST_STYLE_TYPE.DECIMAL, r);

        case b.LIST_STYLE_TYPE.GUJARATI:
          return d(t, 2790, 2799, !0, r);

        case b.LIST_STYLE_TYPE.GURMUKHI:
          return d(t, 2662, 2671, !0, r);

        case b.LIST_STYLE_TYPE.HEBREW:
          return u(t, 1, 10999, s, b.LIST_STYLE_TYPE.DECIMAL, r);

        case b.LIST_STYLE_TYPE.HIRAGANA:
          return f(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");

        case b.LIST_STYLE_TYPE.HIRAGANA_IROHA:
          return f(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");

        case b.LIST_STYLE_TYPE.KANNADA:
          return d(t, 3302, 3311, !0, r);

        case b.LIST_STYLE_TYPE.KATAKANA:
          return f(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);

        case b.LIST_STYLE_TYPE.KATAKANA_IROHA:
          return f(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);

        case b.LIST_STYLE_TYPE.LAO:
          return d(t, 3792, 3801, !0, r);

        case b.LIST_STYLE_TYPE.MONGOLIAN:
          return d(t, 6160, 6169, !0, r);

        case b.LIST_STYLE_TYPE.MYANMAR:
          return d(t, 4160, 4169, !0, r);

        case b.LIST_STYLE_TYPE.ORIYA:
          return d(t, 2918, 2927, !0, r);

        case b.LIST_STYLE_TYPE.PERSIAN:
          return d(t, 1776, 1785, !0, r);

        case b.LIST_STYLE_TYPE.TAMIL:
          return d(t, 3046, 3055, !0, r);

        case b.LIST_STYLE_TYPE.TELUGU:
          return d(t, 3174, 3183, !0, r);

        case b.LIST_STYLE_TYPE.THAI:
          return d(t, 3664, 3673, !0, r);

        case b.LIST_STYLE_TYPE.TIBETAN:
          return d(t, 3872, 3881, !0, r);

        case b.LIST_STYLE_TYPE.DECIMAL:
        default:
          return d(t, 48, 57, !0, r);
      }
    };
  });
  e(V);
  V.createCounterText, V.inlineListItemElement, V.getListOwner;
  var G = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(o),
        n = ["INPUT", "TEXTAREA", "SELECT"],
        i = function () {
      function t(e, A, i, o) {
        var c = this;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.parent = A, this.tagName = e.tagName, this.index = o, this.childNodes = [], this.listItems = [], "number" == typeof e.start && (this.listStart = e.start);
        var l = e.ownerDocument.defaultView,
            u = l.pageXOffset,
            h = l.pageYOffset,
            d = l.getComputedStyle(e, null),
            f = (0, y.parseDisplay)(d.display),
            O = "radio" === e.type || "checkbox" === e.type,
            P = (0, H.parsePosition)(d.position);

        if (this.style = {
          background: O ? X.INPUT_BACKGROUND : (0, B.parseBackground)(d, i),
          border: O ? X.INPUT_BORDERS : (0, w.parseBorder)(d),
          borderRadius: (e instanceof l.HTMLInputElement || e instanceof HTMLInputElement) && O ? (0, X.getInputBorderRadius)(e) : (0, m.parseBorderRadius)(d),
          color: O ? X.INPUT_COLOR : new r["default"](d.color),
          display: f,
          "float": (0, v.parseCSSFloat)(d["float"]),
          font: (0, Q.parseFont)(d),
          letterSpacing: (0, C.parseLetterSpacing)(d.letterSpacing),
          listStyle: f === y.DISPLAY.LIST_ITEM ? (0, b.parseListStyle)(d) : null,
          lineBreak: (0, U.parseLineBreak)(d.lineBreak),
          margin: (0, F.parseMargin)(d),
          opacity: parseFloat(d.opacity),
          overflow: -1 === n.indexOf(e.tagName) ? (0, E.parseOverflow)(d.overflow) : E.OVERFLOW.HIDDEN,
          overflowWrap: (0, x.parseOverflowWrap)(d.overflowWrap ? d.overflowWrap : d.wordWrap),
          padding: (0, g.parsePadding)(d),
          position: P,
          textDecoration: (0, a.parseTextDecoration)(d),
          textShadow: (0, I.parseTextShadow)(d.textShadow),
          textTransform: (0, S.parseTextTransform)(d.textTransform),
          transform: (0, _.parseTransform)(d),
          visibility: (0, T.parseVisibility)(d.visibility),
          wordBreak: (0, N.parseWordBreak)(d.wordBreak),
          zIndex: (0, k.parseZIndex)(P !== H.POSITION.STATIC ? d.zIndex : "auto")
        }, this.isTransformed() && (e.style.transform = "matrix(1,0,0,1,0,0)"), f === y.DISPLAY.LIST_ITEM) {
          var D = (0, V.getListOwner)(this);

          if (D) {
            var L = D.listItems.length;
            D.listItems.push(this), this.listIndex = e.hasAttribute("value") && "number" == typeof e.value ? e.value : 0 === L ? "number" == typeof D.listStart ? D.listStart : 1 : D.listItems[L - 1].listIndex + 1;
          }
        }

        "IMG" === e.tagName && e.addEventListener("load", function () {
          c.bounds = (0, p.parseBounds)(e, u, h), c.curvedBounds = (0, p.parseBoundCurves)(c.bounds, c.style.border, c.style.borderRadius);
        }), this.image = s(e, i), this.bounds = O ? (0, X.reformatInputBounds)((0, p.parseBounds)(e, u, h)) : (0, p.parseBounds)(e, u, h), this.curvedBounds = (0, p.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);
      }

      return A(t, [{
        key: "getClipPaths",
        value: function value() {
          var t = this.parent ? this.parent.getClipPaths() : [];
          return this.style.overflow !== E.OVERFLOW.VISIBLE ? t.concat([(0, p.calculatePaddingBoxPath)(this.curvedBounds)]) : t;
        }
      }, {
        key: "isInFlow",
        value: function value() {
          return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
      }, {
        key: "isVisible",
        value: function value() {
          return !(0, l.contains)(this.style.display, y.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === T.VISIBILITY.VISIBLE;
        }
      }, {
        key: "isAbsolutelyPositioned",
        value: function value() {
          return this.style.position !== H.POSITION.STATIC && this.style.position !== H.POSITION.RELATIVE;
        }
      }, {
        key: "isPositioned",
        value: function value() {
          return this.style.position !== H.POSITION.STATIC;
        }
      }, {
        key: "isFloating",
        value: function value() {
          return this.style["float"] !== v.FLOAT.NONE;
        }
      }, {
        key: "isRootElement",
        value: function value() {
          return null === this.parent;
        }
      }, {
        key: "isTransformed",
        value: function value() {
          return null !== this.style.transform;
        }
      }, {
        key: "isPositionedWithZIndex",
        value: function value() {
          return this.isPositioned() && !this.style.zIndex.auto;
        }
      }, {
        key: "isInlineLevel",
        value: function value() {
          return (0, l.contains)(this.style.display, y.DISPLAY.INLINE) || (0, l.contains)(this.style.display, y.DISPLAY.INLINE_BLOCK) || (0, l.contains)(this.style.display, y.DISPLAY.INLINE_FLEX) || (0, l.contains)(this.style.display, y.DISPLAY.INLINE_GRID) || (0, l.contains)(this.style.display, y.DISPLAY.INLINE_LIST_ITEM) || (0, l.contains)(this.style.display, y.DISPLAY.INLINE_TABLE);
        }
      }, {
        key: "isInlineBlockOrInlineTable",
        value: function value() {
          return (0, l.contains)(this.style.display, y.DISPLAY.INLINE_BLOCK) || (0, l.contains)(this.style.display, y.DISPLAY.INLINE_TABLE);
        }
      }]), t;
    }();

    e["default"] = i;

    var s = function s(t, e) {
      if (t instanceof t.ownerDocument.defaultView.SVGSVGElement || t instanceof SVGSVGElement) {
        var A = new XMLSerializer();
        return e.loadImage("data:image/svg+xml," + encodeURIComponent(A.serializeToString(t)));
      }

      switch (t.tagName) {
        case "IMG":
          var r = t;
          return e.loadImage(r.currentSrc || r.src);

        case "CANVAS":
          var n = t;
          return e.loadCanvas(n);

        case "IFRAME":
          var i = t.getAttribute("data-html2canvas-internal-iframe-key");
          if (i) return i;
      }

      return null;
    };
  });
  e(G);
  var W = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        r = (function (t) {
      t && t.__esModule;
    }(G), function () {
      function t(e, A, r) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.container = e, this.parent = A, this.contexts = [], this.children = [], this.treatAsRealStackingContext = r;
      }

      return A(t, [{
        key: "getOpacity",
        value: function value() {
          return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
      }, {
        key: "getRealParentStackingContext",
        value: function value() {
          return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
      }]), t;
    }());

    e["default"] = r;
  });
  e(W);
  var Y = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.NodeParser = void 0;

    var r = A(W),
        n = A(G),
        i = A(q),
        o = (e.NodeParser = function (t, e, A) {
      var i = 0,
          o = new n["default"](t, null, e, i++),
          s = new r["default"](o, null, !0);
      return a(t, o, s, e, i), s;
    }, ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"]),
        a = function t(e, A, a, l, u) {
      for (var h, d = e.firstChild; d; d = h) {
        h = d.nextSibling;
        var f = d.ownerDocument.defaultView;
        if (d instanceof f.Text || d instanceof Text || f.parent && d instanceof f.parent.Text) d.data.trim().length > 0 && A.childNodes.push(i["default"].fromTextNode(d, A));else if (d instanceof f.HTMLElement || d instanceof HTMLElement || f.parent && d instanceof f.parent.HTMLElement) {
          if (-1 === o.indexOf(d.nodeName)) {
            var p = new n["default"](d, A, l, u++);

            if (p.isVisible()) {
              "INPUT" === d.tagName ? (0, X.inlineInputElement)(d, p) : "TEXTAREA" === d.tagName ? (0, X.inlineTextAreaElement)(d, p) : "SELECT" === d.tagName ? (0, X.inlineSelectElement)(d, p) : p.style.listStyle && p.style.listStyle.listStyleType !== b.LIST_STYLE_TYPE.NONE && (0, V.inlineListItemElement)(d, p, l);
              var g = "TEXTAREA" !== d.tagName,
                  B = s(p, d);

              if (B || c(p)) {
                var w = B || p.isPositioned() ? a.getRealParentStackingContext() : a,
                    m = new r["default"](p, w, B);
                w.contexts.push(m), g && t(d, p, m, l, u);
              } else a.children.push(p), g && t(d, p, a, l, u);
            }
          }
        } else if (d instanceof f.SVGSVGElement || d instanceof SVGSVGElement || f.parent && d instanceof f.parent.SVGSVGElement) {
          var y = new n["default"](d, A, l, u++),
              v = s(y, d);

          if (v || c(y)) {
            var Q = v || y.isPositioned() ? a.getRealParentStackingContext() : a,
                C = new r["default"](y, Q, v);
            Q.contexts.push(C);
          } else a.children.push(y);
        }
      }
    },
        s = function s(t, e) {
      return t.isRootElement() || t.isPositionedWithZIndex() || t.style.opacity < 1 || t.isTransformed() || l(t, e);
    },
        c = function c(t) {
      return t.isPositioned() || t.isFloating();
    },
        l = function l(t, e) {
      return "BODY" === e.nodeName && t.parent instanceof n["default"] && t.parent.style.background.backgroundColor.isTransparent();
    };
  });
  e(Y);
  Y.NodeParser;
  var J = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.FontMetrics = void 0;

    var A = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }();

    e.FontMetrics = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._data = {}, this._document = e;
      }

      return A(t, [{
        key: "_parseMetrics",
        value: function value(t) {
          var e = this._document.createElement("div"),
              A = this._document.createElement("img"),
              r = this._document.createElement("span"),
              n = this._document.body;

          if (!n) throw new Error("");
          e.style.visibility = "hidden", e.style.fontFamily = t.fontFamily, e.style.fontSize = t.fontSize, e.style.margin = "0", e.style.padding = "0", n.appendChild(e), A.src = l.SMALL_IMAGE, A.width = 1, A.height = 1, A.style.margin = "0", A.style.padding = "0", A.style.verticalAlign = "baseline", r.style.fontFamily = t.fontFamily, r.style.fontSize = t.fontSize, r.style.margin = "0", r.style.padding = "0", r.appendChild(this._document.createTextNode("Hidden Text")), e.appendChild(r), e.appendChild(A);
          var i = A.offsetTop - r.offsetTop + 2;
          e.removeChild(r), e.appendChild(this._document.createTextNode("Hidden Text")), e.style.lineHeight = "normal", A.style.verticalAlign = "super";
          var o = A.offsetTop - e.offsetTop + 2;
          return n.removeChild(e), {
            baseline: i,
            middle: o
          };
        }
      }, {
        key: "getMetrics",
        value: function value(t) {
          var e = t.fontFamily + " " + t.fontSize;
          return void 0 === this._data[e] && (this._data[e] = this._parseMetrics(t)), this._data[e];
        }
      }]), t;
    }();
  });
  e(J);
  J.FontMetrics;
  var Z = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var A = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

    e.parseAngle = function (t) {
      var e = t.match(A);

      if (e) {
        var r = parseFloat(e[1]);

        switch (e[2].toLowerCase()) {
          case "deg":
            return Math.PI * r / 180;

          case "grad":
            return Math.PI / 200 * r;

          case "rad":
            return r;

          case "turn":
            return 2 * Math.PI * r;
        }
      }

      return null;
    };
  });
  e(Z);
  Z.parseAngle;
  var $ = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.transformWebkitRadialGradientArgs = e.parseGradient = e.RadialGradient = e.LinearGradient = e.RADIAL_GRADIENT_SHAPE = e.GRADIENT_TYPE = void 0;

    var n = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        i = (A(G), A(o)),
        a = A(u),
        s = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
        c = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
        h = /(px)|%|( 0)$/i,
        d = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
        f = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
        p = e.GRADIENT_TYPE = {
      LINEAR_GRADIENT: 0,
      RADIAL_GRADIENT: 1
    },
        g = e.RADIAL_GRADIENT_SHAPE = {
      CIRCLE: 0,
      ELLIPSE: 1
    },
        B = {
      left: new a["default"]("0%"),
      top: new a["default"]("0%"),
      center: new a["default"]("50%"),
      right: new a["default"]("100%"),
      bottom: new a["default"]("100%")
    },
        w = e.LinearGradient = function t(e, A) {
      r(this, t), this.type = p.LINEAR_GRADIENT, this.colorStops = e, this.direction = A;
    },
        m = e.RadialGradient = function t(e, A, n, i) {
      r(this, t), this.type = p.RADIAL_GRADIENT, this.colorStops = e, this.shape = A, this.center = n, this.radius = i;
    },
        y = (e.parseGradient = function (t, e, A) {
      var r = e.args,
          n = e.method,
          i = e.prefix;
      return "linear-gradient" === n ? v(r, A, !!i) : "gradient" === n && "linear" === r[0] ? v(["to bottom"].concat(I(r.slice(3))), A, !!i) : "radial-gradient" === n ? Q(t, "-webkit-" === i ? H(r) : r, A) : "gradient" === n && "radial" === r[0] ? Q(t, I(H(r.slice(1))), A) : void 0;
    }, function (t, e, A) {
      for (var r = [], n = e; n < t.length; n++) {
        var o = t[n],
            s = h.test(o),
            c = o.lastIndexOf(" "),
            l = new i["default"](s ? o.substring(0, c) : o),
            u = s ? new a["default"](o.substring(c + 1)) : n === e ? new a["default"]("0%") : n === t.length - 1 ? new a["default"]("100%") : null;
        r.push({
          color: l,
          stop: u
        });
      }

      for (var d = r.map(function (t) {
        var e = t.color,
            r = t.stop;
        return {
          color: e,
          stop: 0 === A ? 0 : r ? r.getAbsoluteValue(A) / A : null
        };
      }), f = d[0].stop, p = 0; p < d.length; p++) {
        if (null !== f) {
          var g = d[p].stop;

          if (null === g) {
            for (var B = p; null === d[B].stop;) {
              B++;
            }

            for (var w = B - p + 1, m = (d[B].stop - f) / w; p < B; p++) {
              f = d[p].stop = f + m;
            }
          } else f = g;
        }
      }

      return d;
    }),
        v = function v(t, e, A) {
      var r = (0, Z.parseAngle)(t[0]),
          n = s.test(t[0]),
          i = n || null !== r || c.test(t[0]),
          o = i ? null !== r ? C(A ? r - .5 * Math.PI : r, e) : n ? b(t[0], e) : F(t[0], e) : C(Math.PI, e),
          a = i ? 1 : 0,
          u = Math.min((0, l.distance)(Math.abs(o.x0) + Math.abs(o.x1), Math.abs(o.y0) + Math.abs(o.y1)), 2 * e.width, 2 * e.height);
      return new w(y(t, a, u), o);
    },
        Q = function Q(t, e, A) {
      var r = e[0].match(f),
          n = r && ("circle" === r[1] || void 0 !== r[3] && void 0 === r[5]) ? g.CIRCLE : g.ELLIPSE,
          i = {},
          o = {};
      r && (void 0 !== r[3] && (i.x = (0, u.calculateLengthFromValueWithUnit)(t, r[3], r[4]).getAbsoluteValue(A.width)), void 0 !== r[5] && (i.y = (0, u.calculateLengthFromValueWithUnit)(t, r[5], r[6]).getAbsoluteValue(A.height)), r[7] ? o.x = B[r[7].toLowerCase()] : void 0 !== r[8] && (o.x = (0, u.calculateLengthFromValueWithUnit)(t, r[8], r[9])), r[10] ? o.y = B[r[10].toLowerCase()] : void 0 !== r[11] && (o.y = (0, u.calculateLengthFromValueWithUnit)(t, r[11], r[12])));
      var a = {
        x: void 0 === o.x ? A.width / 2 : o.x.getAbsoluteValue(A.width),
        y: void 0 === o.y ? A.height / 2 : o.y.getAbsoluteValue(A.height)
      },
          s = x(r && r[2] || "farthest-corner", n, a, i, A);
      return new m(y(e, r ? 1 : 0, Math.min(s.x, s.y)), n, a, s);
    },
        C = function C(t, e) {
      var A = e.width,
          r = e.height,
          n = .5 * A,
          i = .5 * r,
          o = (Math.abs(A * Math.sin(t)) + Math.abs(r * Math.cos(t))) / 2,
          a = n + Math.sin(t) * o,
          s = i - Math.cos(t) * o;
      return {
        x0: a,
        x1: A - a,
        y0: s,
        y1: r - s
      };
    },
        U = function U(t) {
      return Math.acos(t.width / 2 / ((0, l.distance)(t.width, t.height) / 2));
    },
        b = function b(t, e) {
      switch (t) {
        case "bottom":
        case "to top":
          return C(0, e);

        case "left":
        case "to right":
          return C(Math.PI / 2, e);

        case "right":
        case "to left":
          return C(3 * Math.PI / 2, e);

        case "top right":
        case "right top":
        case "to bottom left":
        case "to left bottom":
          return C(Math.PI + U(e), e);

        case "top left":
        case "left top":
        case "to bottom right":
        case "to right bottom":
          return C(Math.PI - U(e), e);

        case "bottom left":
        case "left bottom":
        case "to top right":
        case "to right top":
          return C(U(e), e);

        case "bottom right":
        case "right bottom":
        case "to top left":
        case "to left top":
          return C(2 * Math.PI - U(e), e);

        case "top":
        case "to bottom":
        default:
          return C(Math.PI, e);
      }
    },
        F = function F(t, e) {
      var A = t.split(" ").map(parseFloat),
          r = n(A, 2),
          i = r[0],
          o = r[1],
          a = i / 100 * e.width / (o / 100 * e.height);
      return C(Math.atan(isNaN(a) ? 1 : a) + Math.PI / 2, e);
    },
        E = function E(t, e, A, r) {
      return [{
        x: 0,
        y: 0
      }, {
        x: 0,
        y: t.height
      }, {
        x: t.width,
        y: 0
      }, {
        x: t.width,
        y: t.height
      }].reduce(function (t, n) {
        var i = (0, l.distance)(e - n.x, A - n.y);
        return (r ? i < t.optimumDistance : i > t.optimumDistance) ? {
          optimumCorner: n,
          optimumDistance: i
        } : t;
      }, {
        optimumDistance: r ? 1 / 0 : -1 / 0,
        optimumCorner: null
      }).optimumCorner;
    },
        x = function x(t, e, A, r, n) {
      var i = A.x,
          o = A.y,
          a = 0,
          s = 0;

      switch (t) {
        case "closest-side":
          e === g.CIRCLE ? a = s = Math.min(Math.abs(i), Math.abs(i - n.width), Math.abs(o), Math.abs(o - n.height)) : e === g.ELLIPSE && (a = Math.min(Math.abs(i), Math.abs(i - n.width)), s = Math.min(Math.abs(o), Math.abs(o - n.height)));
          break;

        case "closest-corner":
          if (e === g.CIRCLE) a = s = Math.min((0, l.distance)(i, o), (0, l.distance)(i, o - n.height), (0, l.distance)(i - n.width, o), (0, l.distance)(i - n.width, o - n.height));else if (e === g.ELLIPSE) {
            var c = Math.min(Math.abs(o), Math.abs(o - n.height)) / Math.min(Math.abs(i), Math.abs(i - n.width)),
                u = E(n, i, o, !0);
            s = c * (a = (0, l.distance)(u.x - i, (u.y - o) / c));
          }
          break;

        case "farthest-side":
          e === g.CIRCLE ? a = s = Math.max(Math.abs(i), Math.abs(i - n.width), Math.abs(o), Math.abs(o - n.height)) : e === g.ELLIPSE && (a = Math.max(Math.abs(i), Math.abs(i - n.width)), s = Math.max(Math.abs(o), Math.abs(o - n.height)));
          break;

        case "farthest-corner":
          if (e === g.CIRCLE) a = s = Math.max((0, l.distance)(i, o), (0, l.distance)(i, o - n.height), (0, l.distance)(i - n.width, o), (0, l.distance)(i - n.width, o - n.height));else if (e === g.ELLIPSE) {
            var h = Math.max(Math.abs(o), Math.abs(o - n.height)) / Math.max(Math.abs(i), Math.abs(i - n.width)),
                d = E(n, i, o, !1);
            s = h * (a = (0, l.distance)(d.x - i, (d.y - o) / h));
          }
          break;

        default:
          a = r.x || 0, s = void 0 !== r.y ? r.y : a;
      }

      return {
        x: a,
        y: s
      };
    },
        H = e.transformWebkitRadialGradientArgs = function (t) {
      var e = "",
          A = "",
          r = "",
          n = "",
          i = 0,
          o = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
          a = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
          s = t[i].match(o);
      s && i++;
      var c = t[i].match(/^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i);
      c && (e = c[1] || "", "contain" === (r = c[2] || "") ? r = "closest-side" : "cover" === r && (r = "farthest-corner"), i++);
      var l = t[i].match(a);
      l && i++;
      var u = t[i].match(o);
      u && i++;
      var h = t[i].match(a);
      h && i++;
      var d = u || s;
      d && d[1] && (n = d[1] + (/^\d+$/.test(d[1]) ? "px" : ""), d[2] && (n += " " + d[2] + (/^\d+$/.test(d[2]) ? "px" : "")));
      var f = h || l;
      return f && (A = f[0], f[1] || (A += "px")), !n || e || A || r || (A = n, n = ""), n && (n = "at " + n), [[e, r, A, n].filter(function (t) {
        return !!t;
      }).join(" ")].concat(t.slice(i));
    },
        I = function I(t) {
      return t.map(function (t) {
        return t.match(d);
      }).map(function (e, A) {
        if (!e) return t[A];

        switch (e[1]) {
          case "from":
            return e[4] + " 0%";

          case "to":
            return e[4] + " 100%";

          case "color-stop":
            return "%" === e[3] ? e[4] + " " + e[2] : e[4] + " " + 100 * parseFloat(e[2]) + "%";
        }
      });
    };
  });
  e($);
  $.transformWebkitRadialGradientArgs, $.parseGradient, $.RadialGradient, $.LinearGradient, $.RADIAL_GRADIENT_SHAPE, $.GRADIENT_TYPE;
  var tt = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var A = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        r = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        n = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(q),
        i = function () {
      function t(e, A) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.target = e, this.options = A, e.render(A);
      }

      return r(t, [{
        key: "renderNode",
        value: function value(t) {
          t.isVisible() && (this.renderNodeBackgroundAndBorders(t), this.renderNodeContent(t));
        }
      }, {
        key: "renderNodeContent",
        value: function value(t) {
          var e = this,
              A = function A() {
            if (t.childNodes.length && t.childNodes.forEach(function (A) {
              if (A instanceof n["default"]) {
                var r = A.parent.style;
                e.target.renderTextNode(A.bounds, r.color, r.font, r.textDecoration, r.textShadow);
              } else e.target.drawShape(A, t.style.color);
            }), t.image) {
              var A = e.options.imageStore.get(t.image);

              if (A) {
                var r = (0, p.calculateContentBox)(t.bounds, t.style.padding, t.style.border),
                    i = "number" == typeof A.width && A.width > 0 ? A.width : r.width,
                    o = "number" == typeof A.height && A.height > 0 ? A.height : r.height;
                i > 0 && o > 0 && e.target.clip([(0, p.calculatePaddingBoxPath)(t.curvedBounds)], function () {
                  e.target.drawImage(A, new p.Bounds(0, 0, i, o), r);
                });
              }
            }
          },
              r = t.getClipPaths();

          r.length ? this.target.clip(r, A) : A();
        }
      }, {
        key: "renderNodeBackgroundAndBorders",
        value: function value(t) {
          var e = this,
              A = !t.style.background.backgroundColor.isTransparent() || t.style.background.backgroundImage.length,
              r = t.style.border.some(function (t) {
            return t.borderStyle !== w.BORDER_STYLE.NONE && !t.borderColor.isTransparent();
          }),
              n = function n() {
            var r = (0, B.calculateBackgroungPaintingArea)(t.curvedBounds, t.style.background.backgroundClip);
            A && e.target.clip([r], function () {
              t.style.background.backgroundColor.isTransparent() || e.target.fill(t.style.background.backgroundColor), e.renderBackgroundImage(t);
            }), t.style.border.forEach(function (A, r) {
              A.borderStyle === w.BORDER_STYLE.NONE || A.borderColor.isTransparent() || e.renderBorder(A, r, t.curvedBounds);
            });
          };

          if (A || r) {
            var i = t.parent ? t.parent.getClipPaths() : [];
            i.length ? this.target.clip(i, n) : n();
          }
        }
      }, {
        key: "renderBackgroundImage",
        value: function value(t) {
          var e = this;
          t.style.background.backgroundImage.slice(0).reverse().forEach(function (A) {
            "url" === A.source.method && A.source.args.length ? e.renderBackgroundRepeat(t, A) : /gradient/i.test(A.source.method) && e.renderBackgroundGradient(t, A);
          });
        }
      }, {
        key: "renderBackgroundRepeat",
        value: function value(t, e) {
          var A = this.options.imageStore.get(e.source.args[0]);

          if (A) {
            var r = (0, B.calculateBackgroungPositioningArea)(t.style.background.backgroundOrigin, t.bounds, t.style.padding, t.style.border),
                n = (0, B.calculateBackgroundSize)(e, A, r),
                i = (0, B.calculateBackgroundPosition)(e.position, n, r),
                o = (0, B.calculateBackgroundRepeatPath)(e, i, n, r, t.bounds),
                a = Math.round(r.left + i.x),
                s = Math.round(r.top + i.y);
            this.target.renderRepeat(o, A, n, a, s);
          }
        }
      }, {
        key: "renderBackgroundGradient",
        value: function value(t, e) {
          var A = (0, B.calculateBackgroungPositioningArea)(t.style.background.backgroundOrigin, t.bounds, t.style.padding, t.style.border),
              r = (0, B.calculateGradientBackgroundSize)(e, A),
              n = (0, B.calculateBackgroundPosition)(e.position, r, A),
              i = new p.Bounds(Math.round(A.left + n.x), Math.round(A.top + n.y), r.width, r.height),
              o = (0, $.parseGradient)(t, e.source, i);
          if (o) switch (o.type) {
            case $.GRADIENT_TYPE.LINEAR_GRADIENT:
              this.target.renderLinearGradient(i, o);
              break;

            case $.GRADIENT_TYPE.RADIAL_GRADIENT:
              this.target.renderRadialGradient(i, o);
          }
        }
      }, {
        key: "renderBorder",
        value: function value(t, e, A) {
          this.target.drawShape((0, p.parsePathForBorder)(A, e), t.borderColor);
        }
      }, {
        key: "renderStack",
        value: function value(t) {
          var e = this;

          if (t.container.isVisible()) {
            var A = t.getOpacity();
            A !== this._opacity && (this.target.setOpacity(t.getOpacity()), this._opacity = A);
            var r = t.container.style.transform;
            null !== r ? this.target.transform(t.container.bounds.left + r.transformOrigin[0].value, t.container.bounds.top + r.transformOrigin[1].value, r.transform, function () {
              return e.renderStackContent(t);
            }) : this.renderStackContent(t);
          }
        }
      }, {
        key: "renderStackContent",
        value: function value(t) {
          var e = a(t),
              r = A(e, 5),
              n = r[0],
              i = r[1],
              c = r[2],
              l = r[3],
              u = r[4],
              h = o(t),
              d = A(h, 2),
              f = d[0],
              p = d[1];
          this.renderNodeBackgroundAndBorders(t.container), n.sort(s).forEach(this.renderStack, this), this.renderNodeContent(t.container), p.forEach(this.renderNode, this), l.forEach(this.renderStack, this), u.forEach(this.renderStack, this), f.forEach(this.renderNode, this), i.forEach(this.renderStack, this), c.sort(s).forEach(this.renderStack, this);
        }
      }, {
        key: "render",
        value: function value(t) {
          this.options.backgroundColor && this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor), this.renderStack(t);
          return this.target.getTarget();
        }
      }]), t;
    }();

    e["default"] = i;

    var o = function o(t) {
      for (var e = [], A = [], r = t.children.length, n = 0; n < r; n++) {
        var i = t.children[n];
        i.isInlineLevel() ? e.push(i) : A.push(i);
      }

      return [e, A];
    },
        a = function a(t) {
      for (var e = [], A = [], r = [], n = [], i = [], o = t.contexts.length, a = 0; a < o; a++) {
        var s = t.contexts[a];
        s.container.isPositioned() || s.container.style.opacity < 1 || s.container.isTransformed() ? s.container.style.zIndex.order < 0 ? e.push(s) : s.container.style.zIndex.order > 0 ? r.push(s) : A.push(s) : s.container.isFloating() ? n.push(s) : i.push(s);
      }

      return [e, A, r, n, i];
    },
        s = function s(t, e) {
      return t.container.style.zIndex.order > e.container.style.zIndex.order ? 1 : t.container.style.zIndex.order < e.container.style.zIndex.order ? -1 : t.container.index > e.container.index ? 1 : -1;
    };
  });
  e(tt);
  var et = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Proxy = void 0;

    var A = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(P);

    e.Proxy = function (t, e) {
      if (!e.proxy) return Promise.reject(null);
      var r = e.proxy;
      return new Promise(function (n, i) {
        var o = A["default"].SUPPORT_CORS_XHR && A["default"].SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            a = A["default"].SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();

        if (a.onload = function () {
          if (a instanceof XMLHttpRequest) {
            if (200 === a.status) {
              if ("text" === o) n(a.response);else {
                var t = new FileReader();
                t.addEventListener("load", function () {
                  return n(t.result);
                }, !1), t.addEventListener("error", function (t) {
                  return i(t);
                }, !1), t.readAsDataURL(a.response);
              }
            } else i("");
          } else n(a.responseText);
        }, a.onerror = i, a.open("GET", r + "?url=" + encodeURIComponent(t) + "&responseType=" + o), "text" !== o && a instanceof XMLHttpRequest && (a.responseType = o), e.imageTimeout) {
          var s = e.imageTimeout;
          a.timeout = s, a.ontimeout = function () {
            return i("");
          };
        }

        a.send();
      });
    };
  });
  e(et);
  et.Proxy;
  var At = A(function (t, e) {
    function A(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ResourceStore = void 0;

    var r = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        n = function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }(P),
        i = function () {
      function t(e, r, n) {
        A(this, t), this.options = e, this._window = n, this.origin = this.getOrigin(n.location.href), this.cache = {}, this.logger = r, this._index = 0;
      }

      return r(t, [{
        key: "loadImage",
        value: function value(t) {
          var e = this;
          if (this.hasResourceInCache(t)) return t;
          if (h(t)) return this.cache[t] = f(t, this.options.imageTimeout || 0), t;

          if (!d(t) || n["default"].SUPPORT_SVG_DRAWING) {
            if (!0 === this.options.allowTaint || l(t) || this.isSameOrigin(t)) return this.addImage(t, t, !1);

            if (!this.isSameOrigin(t)) {
              if ("string" == typeof this.options.proxy) return this.cache[t] = (0, et.Proxy)(t, this.options).then(function (t) {
                return f(t, e.options.imageTimeout || 0);
              }), t;
              if (!0 === this.options.useCORS && n["default"].SUPPORT_CORS_IMAGES) return this.addImage(t, t, !0);
            }
          }
        }
      }, {
        key: "inlineImage",
        value: function value(t) {
          var e = this;
          return l(t) ? f(t, this.options.imageTimeout || 0) : this.hasResourceInCache(t) ? this.cache[t] : this.isSameOrigin(t) || "string" != typeof this.options.proxy ? this.xhrImage(t) : this.cache[t] = (0, et.Proxy)(t, this.options).then(function (t) {
            return f(t, e.options.imageTimeout || 0);
          });
        }
      }, {
        key: "xhrImage",
        value: function value(t) {
          var e = this;
          return this.cache[t] = new Promise(function (A, r) {
            var n = new XMLHttpRequest();

            if (n.onreadystatechange = function () {
              if (4 === n.readyState) if (200 !== n.status) r("Failed to fetch image " + t.substring(0, 256) + " with status code " + n.status);else {
                var e = new FileReader();
                e.addEventListener("load", function () {
                  var t = e.result;
                  A(t);
                }, !1), e.addEventListener("error", function (t) {
                  return r(t);
                }, !1), e.readAsDataURL(n.response);
              }
            }, n.responseType = "blob", e.options.imageTimeout) {
              var i = e.options.imageTimeout;
              n.timeout = i, n.ontimeout = function () {
                return r("");
              };
            }

            n.open("GET", t, !0), n.send();
          }).then(function (t) {
            return f(t, e.options.imageTimeout || 0);
          }), this.cache[t];
        }
      }, {
        key: "loadCanvas",
        value: function value(t) {
          var e = String(this._index++);
          return this.cache[e] = Promise.resolve(t), e;
        }
      }, {
        key: "hasResourceInCache",
        value: function value(t) {
          return void 0 !== this.cache[t];
        }
      }, {
        key: "addImage",
        value: function value(t, e, A) {
          var r = this,
              i = function i(t) {
            return new Promise(function (n, i) {
              var o = new Image();

              if (o.onload = function () {
                return n(o);
              }, t && !A || (o.crossOrigin = "anonymous"), o.onerror = i, o.src = e, !0 === o.complete && setTimeout(function () {
                n(o);
              }, 500), r.options.imageTimeout) {
                var a = r.options.imageTimeout;
                setTimeout(function () {
                  return i("");
                }, a);
              }
            });
          };

          return this.cache[t] = u(e) && !d(e) ? n["default"].SUPPORT_BASE64_DRAWING(e).then(i) : i(!0), t;
        }
      }, {
        key: "isSameOrigin",
        value: function value(t) {
          return this.getOrigin(t) === this.origin;
        }
      }, {
        key: "getOrigin",
        value: function value(t) {
          var e = this._link || (this._link = this._window.document.createElement("a"));

          return e.href = t, e.href = e.href, e.protocol + e.hostname + e.port;
        }
      }, {
        key: "ready",
        value: function value() {
          var t = this,
              e = Object.keys(this.cache),
              A = e.map(function (e) {
            return t.cache[e]["catch"](function (t) {
              return null;
            });
          });
          return Promise.all(A).then(function (t) {
            return new o(e, t);
          });
        }
      }]), t;
    }();

    e["default"] = i;

    var o = e.ResourceStore = function () {
      function t(e, r) {
        A(this, t), this._keys = e, this._resources = r;
      }

      return r(t, [{
        key: "get",
        value: function value(t) {
          var e = this._keys.indexOf(t);

          return -1 === e ? null : this._resources[e];
        }
      }]), t;
    }(),
        a = /^data:image\/svg\+xml/i,
        s = /^data:image\/.*;base64,/i,
        c = /^data:image\/.*/i,
        l = function l(t) {
      return c.test(t);
    },
        u = function u(t) {
      return s.test(t);
    },
        h = function h(t) {
      return "blob" === t.substr(0, 4);
    },
        d = function d(t) {
      return "svg" === t.substr(-3).toLowerCase() || a.test(t);
    },
        f = function f(t, e) {
      return new Promise(function (A, r) {
        var n = new Image();
        n.onload = function () {
          return A(n);
        }, n.onerror = r, n.src = t, !0 === n.complete && setTimeout(function () {
          A(n);
        }, 500), e && setTimeout(function () {
          return r("");
        }, e);
      });
    };
  });
  e(At);
  At.ResourceStore;
  var rt = A(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseContent = e.resolvePseudoContent = e.popCounters = e.parseCounterReset = e.TOKEN_TYPE = e.PSEUDO_CONTENT_ITEM_TYPE = void 0;

    var A = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        r = e.PSEUDO_CONTENT_ITEM_TYPE = {
      TEXT: 0,
      IMAGE: 1
    },
        n = e.TOKEN_TYPE = {
      STRING: 0,
      ATTRIBUTE: 1,
      URL: 2,
      COUNTER: 3,
      COUNTERS: 4,
      OPENQUOTE: 5,
      CLOSEQUOTE: 6
    },
        i = (e.parseCounterReset = function (t, e) {
      if (!t || !t.counterReset || "none" === t.counterReset) return [];

      for (var r = [], n = t.counterReset.split(/\s*,\s*/), i = n.length, o = 0; o < i; o++) {
        var a = n[o].split(/\s+/),
            s = A(a, 2),
            c = s[0],
            l = s[1];
        r.push(c);
        var u = e.counters[c];
        u || (u = e.counters[c] = []), u.push(parseInt(l || 0, 10));
      }

      return r;
    }, e.popCounters = function (t, e) {
      for (var A = t.length, r = 0; r < A; r++) {
        e.counters[t[r]].pop();
      }
    }, e.resolvePseudoContent = function (t, e, o) {
      if (!e || !e.content || "none" === e.content || "-moz-alt-content" === e.content || "none" === e.display) return null;
      var c = i(e.content),
          l = c.length,
          u = [],
          h = "",
          d = e.counterIncrement;

      if (d && "none" !== d) {
        var f = d.split(/\s+/),
            p = A(f, 2),
            g = p[0],
            B = p[1],
            w = o.counters[g];
        w && (w[w.length - 1] += void 0 === B ? 1 : parseInt(B, 10));
      }

      for (var m = 0; m < l; m++) {
        var y = c[m];

        switch (y.type) {
          case n.STRING:
            h += y.value || "";
            break;

          case n.ATTRIBUTE:
            t instanceof HTMLElement && y.value && (h += t.getAttribute(y.value) || "");
            break;

          case n.COUNTER:
            var v = o.counters[y.name || ""];
            v && (h += s([v[v.length - 1]], "", y.format));
            break;

          case n.COUNTERS:
            var Q = o.counters[y.name || ""];
            Q && (h += s(Q, y.glue, y.format));
            break;

          case n.OPENQUOTE:
            h += a(e, !0, o.quoteDepth), o.quoteDepth++;
            break;

          case n.CLOSEQUOTE:
            o.quoteDepth--, h += a(e, !1, o.quoteDepth);
            break;

          case n.URL:
            h && (u.push({
              type: r.TEXT,
              value: h
            }), h = ""), u.push({
              type: r.IMAGE,
              value: y.value || ""
            });
        }
      }

      return h && u.push({
        type: r.TEXT,
        value: h
      }), u;
    }, e.parseContent = function (t, e) {
      if (e && e[t]) return e[t];

      for (var A = [], r = t.length, i = !1, a = !1, s = !1, c = "", l = "", u = [], h = 0; h < r; h++) {
        var d = t.charAt(h);

        switch (d) {
          case "'":
          case '"':
            a ? c += d : (i = !i, s || i || (A.push({
              type: n.STRING,
              value: c
            }), c = ""));
            break;

          case "\\":
            a ? (c += d, a = !1) : a = !0;
            break;

          case "(":
            i ? c += d : (s = !0, l = c, c = "", u = []);
            break;

          case ")":
            if (i) c += d;else if (s) {
              switch (c && u.push(c), l) {
                case "attr":
                  u.length > 0 && A.push({
                    type: n.ATTRIBUTE,
                    value: u[0]
                  });
                  break;

                case "counter":
                  if (u.length > 0) {
                    var f = {
                      type: n.COUNTER,
                      name: u[0]
                    };
                    u.length > 1 && (f.format = u[1]), A.push(f);
                  }

                  break;

                case "counters":
                  if (u.length > 0) {
                    var p = {
                      type: n.COUNTERS,
                      name: u[0]
                    };
                    u.length > 1 && (p.glue = u[1]), u.length > 2 && (p.format = u[2]), A.push(p);
                  }

                  break;

                case "url":
                  u.length > 0 && A.push({
                    type: n.URL,
                    value: u[0]
                  });
              }

              s = !1, c = "";
            }
            break;

          case ",":
            i ? c += d : s && (u.push(c), c = "");
            break;

          case " ":
          case "\t":
            i ? c += d : c && (o(A, c), c = "");
            break;

          default:
            c += d;
        }

        "\\" !== d && (a = !1);
      }

      return c && o(A, c), e && (e[t] = A), A;
    }),
        o = function o(t, e) {
      switch (e) {
        case "open-quote":
          t.push({
            type: n.OPENQUOTE
          });
          break;

        case "close-quote":
          t.push({
            type: n.CLOSEQUOTE
          });
      }
    },
        a = function a(t, e, A) {
      var r = t.quotes ? t.quotes.split(/\s+/) : ["'\"'", "'\"'"],
          n = 2 * A;
      return n >= r.length && (n = r.length - 2), e || ++n, r[n].replace(/^["']|["']$/g, "");
    },
        s = function s(t, e, A) {
      for (var r = t.length, n = "", i = 0; i < r; i++) {
        i > 0 && (n += e || ""), n += (0, V.createCounterText)(t[i], (0, b.parseListStyleType)(A || "decimal"), !1);
      }

      return n;
    };
  });
  e(rt);
  rt.parseContent, rt.resolvePseudoContent, rt.popCounters, rt.parseCounterReset, rt.TOKEN_TYPE, rt.PSEUDO_CONTENT_ITEM_TYPE;
  var nt = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.cloneWindow = e.DocumentCloner = void 0;

    var r = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        n = function () {
      function t(t, e) {
        for (var A = 0; A < e.length; A++) {
          var r = e[A];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, A, r) {
        return A && t(e.prototype, A), r && t(e, r), e;
      };
    }(),
        i = A(At),
        o = A(s),
        a = e.DocumentCloner = function () {
      function t(e, A, r, n, o) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.referenceElement = e, this.scrolledElements = [], this.copyStyles = n, this.inlineImages = n, this.logger = r, this.options = A, this.renderer = o, this.resourceLoader = new i["default"](A, r, window), this.pseudoContentData = {
          counters: {},
          quoteDepth: 0
        }, this.documentElement = this.cloneNode(e.ownerDocument.documentElement);
      }

      return n(t, [{
        key: "inlineAllImages",
        value: function value(t) {
          var e = this;

          if (this.inlineImages && t) {
            var A = t.style;
            Promise.all((0, B.parseBackgroundImage)(A.backgroundImage).map(function (t) {
              return "url" === t.method ? e.resourceLoader.inlineImage(t.args[0]).then(function (t) {
                return t && "string" == typeof t.src ? 'url("' + t.src + '")' : "none";
              })["catch"](function (t) {}) : Promise.resolve("" + t.prefix + t.method + "(" + t.args.join(",") + ")");
            })).then(function (t) {
              t.length > 1 && (A.backgroundColor = ""), A.backgroundImage = t.join(",");
            }), t instanceof HTMLImageElement && this.resourceLoader.inlineImage(t.src).then(function (e) {
              if (e && t instanceof HTMLImageElement && t.parentNode) {
                var A = t.parentNode,
                    r = (0, l.copyCSSStyles)(t.style, e.cloneNode(!1));
                A.replaceChild(r, t);
              }
            })["catch"](function (t) {});
          }
        }
      }, {
        key: "inlineFonts",
        value: function value(t) {
          var e = this;
          return Promise.all(Array.from(t.styleSheets).map(function (e) {
            return e.href ? fetch(e.href).then(function (t) {
              return t.text();
            }).then(function (t) {
              return u(t, e.href);
            })["catch"](function (t) {
              return [];
            }) : c(e, t);
          })).then(function (t) {
            return t.reduce(function (t, e) {
              return t.concat(e);
            }, []);
          }).then(function (t) {
            return Promise.all(t.map(function (t) {
              return fetch(t.formats[0].src).then(function (t) {
                return t.blob();
              }).then(function (t) {
                return new Promise(function (e, A) {
                  var r = new FileReader();
                  r.onerror = A, r.onload = function () {
                    var t = r.result;
                    e(t);
                  }, r.readAsDataURL(t);
                });
              }).then(function (e) {
                return t.fontFace.setProperty("src", 'url("' + e + '")'), "@font-face {" + t.fontFace.cssText + " ";
              });
            }));
          }).then(function (A) {
            var r = t.createElement("style");
            r.textContent = A.join("\n"), e.documentElement.appendChild(r);
          });
        }
      }, {
        key: "createElementClone",
        value: function value(t) {
          var e = this;

          if (this.copyStyles && t instanceof HTMLCanvasElement) {
            var A = t.ownerDocument.createElement("img");

            try {
              return A.src = t.toDataURL(), A;
            } catch (t) {}
          }

          if (t instanceof HTMLIFrameElement) {
            var r = t.cloneNode(!1),
                n = C();
            r.setAttribute("data-html2canvas-internal-iframe-key", n);
            var i = (0, p.parseBounds)(t, 0, 0),
                a = i.width,
                s = i.height;
            return this.resourceLoader.cache[n] = b(t, this.options).then(function (t) {
              return e.renderer(t, {
                async: e.options.async,
                allowTaint: e.options.allowTaint,
                backgroundColor: "#ffffff",
                canvas: null,
                imageTimeout: e.options.imageTimeout,
                logging: e.options.logging,
                proxy: e.options.proxy,
                removeContainer: e.options.removeContainer,
                scale: e.options.scale,
                foreignObjectRendering: e.options.foreignObjectRendering,
                useCORS: e.options.useCORS,
                target: new o["default"](),
                width: a,
                height: s,
                x: 0,
                y: 0,
                windowWidth: t.ownerDocument.defaultView.innerWidth,
                windowHeight: t.ownerDocument.defaultView.innerHeight,
                scrollX: t.ownerDocument.defaultView.pageXOffset,
                scrollY: t.ownerDocument.defaultView.pageYOffset
              }, e.logger.child(n));
            }).then(function (e) {
              return new Promise(function (A, n) {
                var i = document.createElement("img");
                i.onload = function () {
                  return A(e);
                }, i.onerror = n, i.src = e.toDataURL(), r.parentNode && r.parentNode.replaceChild((0, l.copyCSSStyles)(t.ownerDocument.defaultView.getComputedStyle(t), i), r);
              });
            }), r;
          }

          if (t instanceof HTMLStyleElement && t.sheet && t.sheet.cssRules) {
            var c = [].slice.call(t.sheet.cssRules, 0).reduce(function (t, A) {
              try {
                return A && A.cssText ? t + A.cssText : t;
              } catch (r) {
                return e.logger.log("Unable to access cssText property", A.name), t;
              }
            }, ""),
                u = t.cloneNode(!1);
            return u.textContent = c, u;
          }

          return t.cloneNode(!1);
        }
      }, {
        key: "cloneNode",
        value: function value(t) {
          var e = t.nodeType === Node.TEXT_NODE ? document.createTextNode(t.nodeValue) : this.createElementClone(t),
              A = t.ownerDocument.defaultView,
              r = t instanceof A.HTMLElement ? A.getComputedStyle(t) : null,
              n = t instanceof A.HTMLElement ? A.getComputedStyle(t, ":before") : null,
              i = t instanceof A.HTMLElement ? A.getComputedStyle(t, ":after") : null;
          this.referenceElement === t && e instanceof A.HTMLElement && (this.clonedReferenceElement = e), e instanceof A.HTMLBodyElement && y(e);

          for (var o = (0, rt.parseCounterReset)(r, this.pseudoContentData), a = (0, rt.resolvePseudoContent)(t, n, this.pseudoContentData), s = t.firstChild; s; s = s.nextSibling) {
            s.nodeType === Node.ELEMENT_NODE && ("SCRIPT" === s.nodeName || s.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(s)) || this.copyStyles && "STYLE" === s.nodeName || e.appendChild(this.cloneNode(s));
          }

          var c = (0, rt.resolvePseudoContent)(t, i, this.pseudoContentData);
          if ((0, rt.popCounters)(o, this.pseudoContentData), t instanceof A.HTMLElement && e instanceof A.HTMLElement) switch (n && this.inlineAllImages(d(t, e, n, a, f)), i && this.inlineAllImages(d(t, e, i, c, g)), !r || !this.copyStyles || t instanceof HTMLIFrameElement || (0, l.copyCSSStyles)(r, e), this.inlineAllImages(e), 0 === t.scrollTop && 0 === t.scrollLeft || this.scrolledElements.push([e, t.scrollLeft, t.scrollTop]), t.nodeName) {
            case "CANVAS":
              this.copyStyles || h(t, e);
              break;

            case "TEXTAREA":
            case "SELECT":
              e.value = t.value;
          }
          return e;
        }
      }]), t;
    }(),
        c = function c(t, e) {
      return (t.cssRules ? Array.from(t.cssRules) : []).filter(function (t) {
        return t.type === CSSRule.FONT_FACE_RULE;
      }).map(function (t) {
        for (var A = (0, B.parseBackgroundImage)(t.style.getPropertyValue("src")), r = [], n = 0; n < A.length; n++) {
          if ("url" === A[n].method && A[n + 1] && "format" === A[n + 1].method) {
            var i = e.createElement("a");
            i.href = A[n].args[0], e.body && e.body.appendChild(i);
            var o = {
              src: i.href,
              format: A[n + 1].args[0]
            };
            r.push(o);
          }
        }

        return {
          formats: r.filter(function (t) {
            return /^woff/i.test(t.format);
          }),
          fontFace: t.style
        };
      }).filter(function (t) {
        return t.formats.length;
      });
    },
        u = function u(t, e) {
      var A = document.implementation.createHTMLDocument(""),
          r = document.createElement("base");
      r.href = e;
      var n = document.createElement("style");
      return n.textContent = t, A.head && A.head.appendChild(r), A.body && A.body.appendChild(n), n.sheet ? c(n.sheet, A) : [];
    },
        h = function h(t, e) {
      try {
        if (e) {
          e.width = t.width, e.height = t.height;
          var A = t.getContext("2d"),
              r = e.getContext("2d");
          A ? r.putImageData(A.getImageData(0, 0, t.width, t.height), 0, 0) : r.drawImage(t, 0, 0);
        }
      } catch (t) {}
    },
        d = function d(t, e, A, r, n) {
      if (A && A.content && "none" !== A.content && "-moz-alt-content" !== A.content && "none" !== A.display) {
        var i = e.ownerDocument.createElement("html2canvaspseudoelement");
        if ((0, l.copyCSSStyles)(A, i), r) for (var o = r.length, a = 0; a < o; a++) {
          var s = r[a];

          switch (s.type) {
            case rt.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
              var c = e.ownerDocument.createElement("img");
              c.src = (0, B.parseBackgroundImage)("url(" + s.value + ")")[0].args[0], c.style.opacity = "1", i.appendChild(c);
              break;

            case rt.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
              i.appendChild(e.ownerDocument.createTextNode(s.value));
          }
        }
        return i.className = w + " " + m, e.className += n === f ? " " + w : " " + m, n === f ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i;
      }
    },
        f = ":before",
        g = ":after",
        w = "___html2canvas___pseudoelement_before",
        m = "___html2canvas___pseudoelement_after",
        y = function y(t) {
      v(t, "." + w + f + '{\n    content: "" !important;\n    display: none !important;\n}\n         .' + m + g + '{\n    content: "" !important;\n    display: none !important;\n}');
    },
        v = function v(t, e) {
      var A = t.ownerDocument.createElement("style");
      A.innerHTML = e, t.appendChild(A);
    },
        Q = function Q(t) {
      var e = r(t, 3),
          A = e[0],
          n = e[1],
          i = e[2];
      A.scrollLeft = n, A.scrollTop = i;
    },
        C = function C() {
      return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16);
    },
        U = /^data:text\/(.+);(base64)?,(.*)$/i,
        b = function b(t, e) {
      try {
        return Promise.resolve(t.contentWindow.document.documentElement);
      } catch (A) {
        return e.proxy ? (0, et.Proxy)(t.src, e).then(function (t) {
          var e = t.match(U);
          return e ? "base64" === e[2] ? window.atob(decodeURIComponent(e[3])) : decodeURIComponent(e[3]) : Promise.reject();
        }).then(function (e) {
          return F(t.ownerDocument, (0, p.parseBounds)(t, 0, 0)).then(function (t) {
            var A = t.contentWindow.document;
            A.open(), A.write(e);
            var r = E(t).then(function () {
              return A.documentElement;
            });
            return A.close(), r;
          });
        }) : Promise.reject();
      }
    },
        F = function F(t, e) {
      var A = t.createElement("iframe");
      return A.className = "html2canvas-container", A.style.visibility = "hidden", A.style.position = "fixed", A.style.left = "-10000px", A.style.top = "0px", A.style.border = "0", A.width = e.width.toString(), A.height = e.height.toString(), A.scrolling = "no", A.setAttribute("data-html2canvas-ignore", "true"), t.body ? (t.body.appendChild(A), Promise.resolve(A)) : Promise.reject("");
    },
        E = function E(t) {
      var e = t.contentWindow,
          A = e.document;
      return new Promise(function (r, n) {
        e.onload = t.onload = A.onreadystatechange = function () {
          var e = setInterval(function () {
            A.body.childNodes.length > 0 && "complete" === A.readyState && (clearInterval(e), r(t));
          }, 50);
        };
      });
    },
        x = (e.cloneWindow = function (t, e, A, r, n, i) {
      var o = new a(A, r, n, !1, i),
          s = t.defaultView.pageXOffset,
          c = t.defaultView.pageYOffset;
      return F(t, e).then(function (n) {
        var i = n.contentWindow,
            a = i.document,
            l = E(n).then(function () {
          o.scrolledElements.forEach(Q), i.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === e.top && i.scrollX === e.left || (a.documentElement.style.top = -e.top + "px", a.documentElement.style.left = -e.left + "px", a.documentElement.style.position = "absolute");
          var A = Promise.resolve([n, o.clonedReferenceElement, o.resourceLoader]),
              s = r.onclone;
          return o.clonedReferenceElement instanceof i.HTMLElement || o.clonedReferenceElement instanceof t.defaultView.HTMLElement || o.clonedReferenceElement instanceof HTMLElement ? "function" == typeof s ? Promise.resolve().then(function () {
            return s(a);
          }).then(function () {
            return A;
          }) : A : Promise.reject("");
        });
        return a.open(), a.write(x(document.doctype) + "<html></html>"), function (t, e, A) {
          !t.defaultView || e === t.defaultView.pageXOffset && A === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, A);
        }(A.ownerDocument, s, c), a.replaceChild(a.adoptNode(o.documentElement), a.documentElement), a.close(), l;
      });
    }, function (t) {
      var e = "";
      return t && (e += "<!DOCTYPE ", t.name && (e += t.name), t.internalSubset && (e += t.internalSubset), t.publicId && (e += '"' + t.publicId + '"'), t.systemId && (e += '"' + t.systemId + '"'), e += ">"), e;
    });
  });
  e(nt);
  nt.cloneWindow, nt.DocumentCloner;
  var it = A(function (t, e) {
    function A(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.renderElement = void 0;

    var r = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var A = [],
              r = !0,
              n = !1,
              i = void 0;

          try {
            for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (A.push(o.value), !e || A.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !r && a["return"] && a["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return A;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        n = (A(c), A(tt)),
        i = A(O),
        a = A(P),
        s = A(o);

    e.renderElement = function t(e, A, c) {
      var l = e.ownerDocument,
          u = new p.Bounds(A.scrollX, A.scrollY, A.windowWidth, A.windowHeight),
          h = l.documentElement ? new s["default"](getComputedStyle(l.documentElement).backgroundColor) : o.TRANSPARENT,
          d = l.body ? new s["default"](getComputedStyle(l.body).backgroundColor) : o.TRANSPARENT,
          f = e === l.documentElement ? h.isTransparent() ? d.isTransparent() ? A.backgroundColor ? new s["default"](A.backgroundColor) : null : d : h : A.backgroundColor ? new s["default"](A.backgroundColor) : null;
      return (A.foreignObjectRendering ? a["default"].SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(!1)).then(function (a) {
        return a ? function (t) {
          return t.inlineFonts(l).then(function () {
            return t.resourceLoader.ready();
          }).then(function () {
            var r = new i["default"](t.documentElement),
                n = l.defaultView,
                o = n.pageXOffset,
                a = n.pageYOffset,
                s = "HTML" === e.tagName || "BODY" === e.tagName ? (0, p.parseDocumentSize)(l) : (0, p.parseBounds)(e, o, a),
                u = s.width,
                h = s.height,
                d = s.left,
                g = s.top;
            return r.render({
              backgroundColor: f,
              logger: c,
              scale: A.scale,
              x: "number" == typeof A.x ? A.x : d,
              y: "number" == typeof A.y ? A.y : g,
              width: "number" == typeof A.width ? A.width : Math.ceil(u),
              height: "number" == typeof A.height ? A.height : Math.ceil(h),
              windowWidth: A.windowWidth,
              windowHeight: A.windowHeight,
              scrollX: A.scrollX,
              scrollY: A.scrollY
            });
          });
        }(new nt.DocumentCloner(e, A, c, !0, t)) : (0, nt.cloneWindow)(l, u, e, A, c, t).then(function (t) {
          var e = r(t, 3),
              i = e[0],
              a = e[1],
              s = e[2],
              u = (0, Y.NodeParser)(a, s, c),
              h = a.ownerDocument;
          return f === u.container.style.background.backgroundColor && (u.container.style.background.backgroundColor = o.TRANSPARENT), s.ready().then(function (t) {
            var e = new J.FontMetrics(h),
                r = h.defaultView,
                o = r.pageXOffset,
                s = r.pageYOffset,
                d = "HTML" === a.tagName || "BODY" === a.tagName ? (0, p.parseDocumentSize)(l) : (0, p.parseBounds)(a, o, s),
                g = d.width,
                B = d.height,
                w = d.left,
                m = d.top,
                y = {
              backgroundColor: f,
              fontMetrics: e,
              imageStore: t,
              logger: c,
              scale: A.scale,
              x: "number" == typeof A.x ? A.x : w,
              y: "number" == typeof A.y ? A.y : m,
              width: "number" == typeof A.width ? A.width : Math.ceil(g),
              height: "number" == typeof A.height ? A.height : Math.ceil(B)
            };
            if (Array.isArray(A.target)) return Promise.all(A.target.map(function (t) {
              return new n["default"](t, y).render(u);
            }));
            var v = new n["default"](A.target, y).render(u);
            return !0 === A.removeContainer && i.parentNode && i.parentNode.removeChild(i), v;
          });
        });
      });
    };
  });
  e(it);
  it.renderElement;

  var ot = e(A(function (t) {
    function e(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var A = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var A = arguments[e];

        for (var r in A) {
          Object.prototype.hasOwnProperty.call(A, r) && (t[r] = A[r]);
        }
      }

      return t;
    },
        r = e(s),
        n = e(c),
        i = function i(t, e) {
      var i = e || {},
          o = new n["default"]("boolean" != typeof i.logging || i.logging);
      o.log("html2canvas $npm_package_version");
      var a = t.ownerDocument;
      if (!a) return Promise.reject("Provided element is not within a Document");
      var s = a.defaultView,
          c = {
        async: !0,
        allowTaint: !1,
        backgroundColor: "#ffffff",
        imageTimeout: 15e3,
        logging: !0,
        proxy: null,
        removeContainer: !0,
        foreignObjectRendering: !1,
        scale: s.devicePixelRatio || 1,
        target: new r["default"](i.canvas),
        useCORS: !1,
        windowWidth: s.innerWidth,
        windowHeight: s.innerHeight,
        scrollX: s.pageXOffset,
        scrollY: s.pageYOffset
      };
      return (0, it.renderElement)(t, A({}, c, i), o);
    };

    i.CanvasRenderer = r["default"], t.exports = i;
  })),
      at = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      st = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var A = arguments[e];

      for (var r in A) {
        Object.prototype.hasOwnProperty.call(A, r) && (t[r] = A[r]);
      }
    }

    return t;
  },
      ct = function ct(t) {
    var e = void 0 === t ? "undefined" : at(t);
    return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown";
  },
      lt = function lt(t, e) {
    var A = document.createElement(t);

    if (e.className && (A.className = e.className), e.innerHTML) {
      A.innerHTML = e.innerHTML;

      for (var r = A.getElementsByTagName("script"), n = r.length; n-- > 0; null) {
        r[n].parentNode.removeChild(r[n]);
      }
    }

    for (var i in e.style) {
      A.style[i] = e.style[i];
    }

    return A;
  },
      ut = function ut(t, e) {
    if ("number" === ct(t)) return 72 * t / 96 / e;
    var A = {};

    for (var r in t) {
      A[r] = 72 * t[r] / 96 / e;
    }

    return A;
  },
      ht = function ht(t, e) {
    return Math.floor(t * e / 72 * 96);
  },
      dt = function t(e) {
    var A = st(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
        r = t.convert(Promise.resolve(), A);
    return r = r.setProgress(1, t, 1, [t]), r = r.set(e);
  };

  (dt.prototype = Object.create(Promise.prototype)).constructor = dt, dt.convert = function (t, e) {
    return t.__proto__ = e || dt.prototype, t;
  }, dt.template = {
    prop: {
      src: null,
      container: null,
      overlay: null,
      canvas: null,
      img: null,
      pdf: null,
      pageSize: null
    },
    progress: {
      val: 0,
      state: null,
      n: 0,
      stack: []
    },
    opt: {
      filename: "file.pdf",
      margin: [0, 0, 0, 0],
      image: {
        type: "jpeg",
        quality: .95
      },
      enableLinks: !0,
      html2canvas: {},
      jsPDF: {}
    }
  }, dt.prototype.from = function (t, e) {
    return this.then(function () {
      switch (e = e || function (t) {
        switch (ct(t)) {
          case "string":
            return "string";

          case "element":
            return "canvas" === t.nodeName.toLowerCase ? "canvas" : "element";

          default:
            return "unknown";
        }
      }(t)) {
        case "string":
          return this.set({
            src: lt("div", {
              innerHTML: t
            })
          });

        case "element":
          return this.set({
            src: t
          });

        case "canvas":
          return this.set({
            canvas: t
          });

        case "img":
          return this.set({
            img: t
          });

        default:
          return this.error("Unknown source type.");
      }
    });
  }, dt.prototype.to = function (t) {
    switch (t) {
      case "container":
        return this.toContainer();

      case "canvas":
        return this.toCanvas();

      case "img":
        return this.toImg();

      case "pdf":
        return this.toPdf();

      default:
        return this.error("Invalid target.");
    }
  }, dt.prototype.toContainer = function () {
    return this.thenList([function () {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function () {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function () {
      var t = {
        position: "fixed",
        overflow: "hidden",
        zIndex: 1e3,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.8)"
      },
          e = {
        position: "absolute",
        width: this.prop.pageSize.inner.width + this.prop.pageSize.unit,
        left: 0,
        right: 0,
        top: 0,
        height: "auto",
        margin: "auto",
        backgroundColor: "white"
      };
      t.opacity = 0;

      var A = function t(e, A) {
        for (var r = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), n = e.firstChild; n; n = n.nextSibling) {
          !0 !== A && 1 === n.nodeType && "SCRIPT" === n.nodeName || r.appendChild(t(n, A));
        }

        return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (r.width = e.width, r.height = e.height, r.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (r.value = e.value), r.addEventListener("load", function () {
          r.scrollTop = e.scrollTop, r.scrollLeft = e.scrollLeft;
        }, !0)), r;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);

      this.prop.overlay = lt("div", {
        className: "html2pdf__overlay",
        style: t
      }), this.prop.container = lt("div", {
        className: "html2pdf__container",
        style: e
      }), this.prop.container.appendChild(A), this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay);
    });
  }, dt.prototype.toCanvas = function () {
    var t = [function () {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(t).then(function () {
      var t = st({}, this.opt.html2canvas);
      return delete t.onrendered, ot(this.prop.container, t);
    }).then(function (t) {
      (this.opt.html2canvas.onrendered || function () {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
    });
  }, dt.prototype.toImg = function () {
    return this.thenList([function () {
      return this.prop.canvas || this.toCanvas();
    }]).then(function () {
      var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = t;
    });
  }, dt.prototype.toPdf = function () {
    return this.thenList([function () {
      return this.prop.canvas || this.toCanvas();
    }]).then(function () {
      var t = this.prop.canvas,
          e = this.opt,
          A = (t.getContext("2d"), t.height),
          r = Math.floor(t.width * this.prop.pageSize.inner.ratio),
          i = Math.ceil(A / r),
          o = this.prop.pageSize.inner.height,
          a = document.createElement("canvas"),
          s = a.getContext("2d");
      a.width = t.width, a.height = r, this.prop.pdf = this.prop.pdf || new n(e.jsPDF);

      for (var c = 0; c < i; c++) {
        c === i - 1 && (a.height = A % r, o = a.height * this.prop.pageSize.inner.width / a.width);
        var l = a.width,
            u = a.height;
        s.fillStyle = "white", s.fillRect(0, 0, l, u), s.drawImage(t, 0, c * r, l, u, 0, 0, l, u), c && this.prop.pdf.addPage();
        var h = a.toDataURL("image/" + e.image.type, e.image.quality);
        this.prop.pdf.addImage(h, e.image.type, e.margin[1], e.margin[0], this.prop.pageSize.inner.width, o);
      }
    });
  }, dt.prototype.output = function (t, e, A) {
    return "img" === (A = A || "pdf").toLowerCase() || "image" === A.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e);
  }, dt.prototype.outputPdf = function (t, e) {
    return this.thenList([function () {
      return this.prop.pdf || this.toPdf();
    }]).then(function () {
      return this.prop.pdf.output(t, e);
    });
  }, dt.prototype.outputImg = function (t, e) {
    return this.thenList([function () {
      return this.prop.img || this.toImg();
    }]).then(function () {
      switch (t) {
        case void 0:
        case "img":
          return this.prop.img;

        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;

        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;

        default:
          throw 'Image output type "' + t + '" is not supported.';
      }
    });
  }, dt.prototype.save = function (t) {
    return this.thenList([function () {
      return this.prop.pdf || this.toPdf();
    }]).set(t ? {
      filename: t
    } : null).then(function () {
      this.prop.pdf.save(this.opt.filename);
    });
  }, dt.prototype.set = function (t) {
    if ("object" !== ct(t)) return this;
    var e = Object.keys(t || {}).map(function (e) {
      if (e in dt.template.prop) return function () {
        this.prop[e] = t[e];
      };

      switch (e) {
        case "margin":
          return this.setMargin.bind(this, t.margin);

        case "jsPDF":
          return function () {
            return this.opt.jsPDF = t.jsPDF, this.setPageSize();
          };

        case "pageSize":
          return this.setPageSize.bind(this, t.pageSize);

        default:
          return function () {
            this.opt[e] = t[e];
          };
      }
    }, this);
    return this.then(function () {
      return this.thenList(e);
    });
  }, dt.prototype.get = function (t, e) {
    return this.then(function () {
      var A = t in dt.template.prop ? this.prop[t] : this.opt[t];
      return e ? e(A) : A;
    });
  }, dt.prototype.setMargin = function (t) {
    return this.then(function () {
      switch (ct(t)) {
        case "number":
          t = [t, t, t, t];

        case "array":
          if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length) break;

        default:
          return this.error("Invalid margin array.");
      }

      this.opt.margin = t;
    }).then(this.setPageSize);
  }, dt.prototype.setPageSize = function (t) {
    return this.then(function () {
      (t = t || n.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
        width: t.width - this.opt.margin[1] - this.opt.margin[3],
        height: t.height - this.opt.margin[0] - this.opt.margin[2]
      }, t.inner.px = {
        width: ht(t.inner.width, t.k),
        height: ht(t.inner.height, t.k)
      }, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t;
    });
  }, dt.prototype.setProgress = function (t, e, A, r) {
    return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != A && (this.progress.n = A), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, dt.prototype.updateProgress = function (t, e, A, r) {
    return this.setProgress(t ? this.progress.val + t : null, e || null, A ? this.progress.n + A : null, r ? this.progress.stack.concat(r) : null);
  }, dt.prototype.then = function (t, e) {
    var A = this;
    return this.thenCore(t, e, function (t, e) {
      return A.updateProgress(null, null, 1, [t]), Promise.prototype.then.call(this, function (e) {
        return A.updateProgress(null, t), e;
      }).then(t, e).then(function (t) {
        return A.updateProgress(1), t;
      });
    });
  }, dt.prototype.thenCore = function (t, e, A) {
    A = A || Promise.prototype.then;
    t && (t = t.bind(this)), e && (e = e.bind(this));
    var r = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : dt.convert(st({}, this), Promise.prototype),
        n = A.call(r, t, e);
    return dt.convert(n, this.__proto__);
  }, dt.prototype.thenExternal = function (t, e) {
    return Promise.prototype.then.call(this, t, e);
  }, dt.prototype.thenList = function (t) {
    var e = this;
    return t.forEach(function (t) {
      e = e.thenCore(t);
    }), e;
  }, dt.prototype["catch"] = function (t) {
    t && (t = t.bind(this));
    var e = Promise.prototype["catch"].call(this, t);
    return dt.convert(e, this);
  }, dt.prototype.catchExternal = function (t) {
    return Promise.prototype["catch"].call(this, t);
  }, dt.prototype.error = function (t) {
    return this.then(function () {
      throw new Error(t);
    });
  }, dt.prototype.using = dt.prototype.set, dt.prototype.saveAs = dt.prototype.save, dt.prototype["export"] = dt.prototype.output, dt.prototype.run = dt.prototype.then, n.getPageSize = function (t, e, A) {
    if ("object" === (void 0 === t ? "undefined" : at(t))) {
      var r = t;
      t = r.orientation, e = r.unit || e, A = r.format || A;
    }

    e = e || "mm", A = A || "a4", t = ("" + (t || "P")).toLowerCase();
    var n = ("" + A).toLowerCase(),
        i = {
      a0: [2383.94, 3370.39],
      a1: [1683.78, 2383.94],
      a2: [1190.55, 1683.78],
      a3: [841.89, 1190.55],
      a4: [595.28, 841.89],
      a5: [419.53, 595.28],
      a6: [297.64, 419.53],
      a7: [209.76, 297.64],
      a8: [147.4, 209.76],
      a9: [104.88, 147.4],
      a10: [73.7, 104.88],
      b0: [2834.65, 4008.19],
      b1: [2004.09, 2834.65],
      b2: [1417.32, 2004.09],
      b3: [1000.63, 1417.32],
      b4: [708.66, 1000.63],
      b5: [498.9, 708.66],
      b6: [354.33, 498.9],
      b7: [249.45, 354.33],
      b8: [175.75, 249.45],
      b9: [124.72, 175.75],
      b10: [87.87, 124.72],
      c0: [2599.37, 3676.54],
      c1: [1836.85, 2599.37],
      c2: [1298.27, 1836.85],
      c3: [918.43, 1298.27],
      c4: [649.13, 918.43],
      c5: [459.21, 649.13],
      c6: [323.15, 459.21],
      c7: [229.61, 323.15],
      c8: [161.57, 229.61],
      c9: [113.39, 161.57],
      c10: [79.37, 113.39],
      dl: [311.81, 623.62],
      letter: [612, 792],
      "government-letter": [576, 756],
      legal: [612, 1008],
      "junior-legal": [576, 360],
      ledger: [1224, 792],
      tabloid: [792, 1224],
      "credit-card": [153, 243]
    };

    switch (e) {
      case "pt":
        o = 1;
        break;

      case "mm":
        o = 72 / 25.4;
        break;

      case "cm":
        o = 72 / 2.54;
        break;

      case "in":
        o = 72;
        break;

      case "px":
        o = .75;
        break;

      case "pc":
      case "em":
        o = 12;
        break;

      case "ex":
        var o = 6;
        break;

      default:
        throw "Invalid unit: " + e;
    }

    if (i.hasOwnProperty(n)) var a = i[n][1] / o,
        s = i[n][0] / o;else try {
      var a = A[1],
          s = A[0];
    } catch (t) {
      throw new Error("Invalid format: " + A);
    }

    if ("p" === t || "portrait" === t) {
      if (t = "p", s > a) {
        c = s;
        s = a, a = c;
      }
    } else {
      if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;

      if (t = "l", a > s) {
        var c = s;
        s = a, a = c;
      }
    }

    return {
      width: s,
      height: a,
      unit: e,
      k: o
    };
  };
  var ft = {
    toContainer: dt.prototype.toContainer
  };
  dt.template.opt.pagebreak = {
    mode: ["css", "legacy"],
    before: [],
    after: [],
    avoid: []
  }, dt.prototype.toContainer = function () {
    return ft.toContainer.call(this).then(function () {
      var t = this.prop.container,
          e = this.prop.pageSize.inner.px.height,
          A = [].concat(this.opt.pagebreak.mode),
          r = {
        avoidAll: -1 !== A.indexOf("avoid-all"),
        css: -1 !== A.indexOf("css"),
        legacy: -1 !== A.indexOf("legacy")
      },
          n = {},
          i = this;
      ["before", "after", "avoid"].forEach(function (e) {
        var A = r.avoidAll && "avoid" === e;
        n[e] = A ? [] : [].concat(i.opt.pagebreak[e] || []), n[e].length > 0 && (n[e] = Array.prototype.slice.call(t.querySelectorAll(n[e].join(", "))));
      });
      var o = t.querySelectorAll(".html2pdf__page-break");
      o = Array.prototype.slice.call(o);
      var a = t.querySelectorAll("*");
      Array.prototype.forEach.call(a, function (t) {
        var A = {
          before: !1,
          after: r.legacy && -1 !== o.indexOf(t),
          avoid: r.avoidAll
        };

        if (r.css) {
          var i = window.getComputedStyle(t),
              a = ["always", "page", "left", "right"];
          A = {
            before: A.before || -1 !== a.indexOf(i.breakBefore || i.pageBreakBefore),
            after: A.after || -1 !== a.indexOf(i.breakAfter || i.pageBreakAfter),
            avoid: A.avoid || -1 !== ["avoid", "avoid-page"].indexOf(i.breakInside || i.pageBreakInside)
          };
        }

        Object.keys(A).forEach(function (e) {
          A[e] = A[e] || -1 !== n[e].indexOf(t);
        });
        var s = t.getBoundingClientRect();

        if (A.avoid && !A.before) {
          var c = Math.floor(s.top / e),
              l = Math.floor(s.bottom / e),
              u = Math.abs(s.bottom - s.top) / e;
          l !== c && u <= 1 && (A.before = !0);
        }

        if (A.before) {
          h = lt("div", {
            style: {
              display: "block",
              height: e - s.top % e + "px"
            }
          });
          t.parentNode.insertBefore(h, t);
        }

        if (A.after) {
          var h = lt("div", {
            style: {
              display: "block",
              height: e - s.bottom % e + "px"
            }
          });
          t.parentNode.insertBefore(h, t.nextSibling);
        }
      });
    });
  };
  var pt = [],
      gt = {
    toContainer: dt.prototype.toContainer,
    toPdf: dt.prototype.toPdf
  };
  dt.prototype.toContainer = function () {
    return gt.toContainer.call(this).then(function () {
      if (this.opt.enableLinks) {
        var t = this.prop.container,
            e = t.querySelectorAll("a"),
            A = ut(t.getBoundingClientRect(), this.prop.pageSize.k);
        pt = [], Array.prototype.forEach.call(e, function (t) {
          for (var e = t.getClientRects(), r = 0; r < e.length; r++) {
            var n = ut(e[r], this.prop.pageSize.k);
            n.left -= A.left, n.top -= A.top;
            var i = Math.floor(n.top / this.prop.pageSize.inner.height) + 1,
                o = this.opt.margin[0] + n.top % this.prop.pageSize.inner.height,
                a = this.opt.margin[1] + n.left;
            pt.push({
              page: i,
              top: o,
              left: a,
              clientRect: n,
              link: t
            });
          }
        }, this);
      }
    });
  }, dt.prototype.toPdf = function () {
    return gt.toPdf.call(this).then(function () {
      if (this.opt.enableLinks) {
        pt.forEach(function (t) {
          this.prop.pdf.setPage(t.page), this.prop.pdf.link(t.left, t.top, t.clientRect.width, t.clientRect.height, {
            url: t.link.href
          });
        }, this);
        var t = this.prop.pdf.internal.getNumberOfPages();
        this.prop.pdf.setPage(t);
      }
    });
  };

  var Bt = function t(e, A) {
    var r = new t.Worker(A);
    return e ? r.from(e).save() : r;
  };

  return Bt.Worker = dt, Bt;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/html2pdf/html2pdf.js":
/*!*******************************************!*\
  !*** ./resources/js/html2pdf/html2pdf.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./html2pdf.bundle.min */ "./resources/js/html2pdf/html2pdf.bundle.min.js");

function generatePDF() {
  var element = document.getElementById("pdfWrapper");
  var targetElement = document.querySelector('#pdfWrapper .card__body');
  var divHeight = targetElement.offsetHeight;
  var divWidth = targetElement.offsetWidth; // Since the height is gotten in pixel, It has to be converted to mm.
  // Note that 1px = 0.264583333 mm
  // 15 is added to the height in order to prevent the page from trying to generate another page.
  // This give room for allowance on that single page.

  divHeight = divHeight * 0.264583333 + 15;
  divWidth = divWidth * 0.264583333;
  html2pdf().set({
    html2canvas: {
      scale: 5
    },
    jsPDF: {
      unit: 'mm',
      format: [divWidth, divHeight],
      orientation: 'portrait'
    },
    filename: 'Fundraising Teaser.pdf'
  }).from(element).save();
}

/***/ }),

/***/ 3:
/*!*************************************************!*\
  !*** multi ./resources/js/html2pdf/html2pdf.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\app_booking\resources\js\html2pdf\html2pdf.js */"./resources/js/html2pdf/html2pdf.js");


/***/ })

/******/ });