! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["react-trumbowyg"] = t() : e["react-trumbowyg"] = t()
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
  }([function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(32),
      c = r(l),
      u = n(34),
      d = (r(u), n(33)),
      p = r(d),
      f = "trumbowyg-icons",
      h = function (e) {
        function t(e) {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return i(t, e), s(t, [{
          key: "componentWillMount",
          value: function () {}
        }, {
          key: "componentDidMount",
          value: function () {
            var e = this.props,
              t = e.id,
              n = e.buttons,
              r = e.semantic,
              o = e.resetCss,
              a = e.removeformatPasted,
              i = e.autogrow,
              s = e.data,
              l = e.disabled,
              c = e.onFocus,
              u = e.onBlur,
              d = e.onInit,
              h = e.onChange,
              m = e.onResize,
              y = e.onPaste,
              v = e.onOpenFullScreen,
              g = e.onCloseFullScreen,
              b = e.onClose,
              w = e.shouldUseSvgIcons,
              x = e.shouldInjectSvgIcons,
              C = e.svgIconsPath;
            x && 0 === $("#" + f).length && $("body").prepend('<div id="' + f + '">' + p.default+"</div>");
            var M = $("#" + t).trumbowyg({
              btns: n,
              semantic: r,
              resetCss: o,
              removeformatPasted: a,
              autogrow: i,
              svgPath: !!w && (x ? "" : C)
            });
            c && M.on("tbwfocus", c), u && M.on("tbwblur", u), d && M.on("tbwinit", d), h && M.on("tbwchange", h), m && M.on("tbwresize", m), y && M.on("tbwpaste", y), v && M.on("tbwopenfullscreen", v), g && M.on("tbwclosefullscreen", g), b && M.on("tbwclose", b), $("#" + t).trumbowyg("html", s), $("#" + t).trumbowyg(l === !0 ? "disable" : "enable")
          }
        }, {
          key: "componentWillReceiveProps",
          value: function (e) {}
        }, {
          key: "shouldComponentUpdate",
          value: function (e, t) {
            return e.data !== this.props.data || e.disabled !== this.props.disabled
          }
        }, {
          key: "componentWillUpdate",
          value: function (e, t) {}
        }, {
          key: "componentDidUpdate",
          value: function (e, t) {
            $("#" + this.props.id).trumbowyg("html", this.props.data), $("#" + this.props.id).trumbowyg(this.props.disabled === !0 ? "disable" : "enable")
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            $("#" + this.props.id).trumbowyg("destroy")
          }
        }, {
          key: "render",
          value: function () {
            return c.default.createElement("div", {
              id: "" + this.props.id,
              placeholder: this.props.placeholder
            })
          }
        }]), t
      }(l.Component);
    h.defaultProps = {
      buttons: [
        ["viewHTML"],
        ["formatting"], "btnGrp-semantic", ["superscript", "subscript"],
        ["link"],
        ["insertImage"], "btnGrp-justify", "btnGrp-lists", ["horizontalRule"],
        ["removeformat"],
        ["fullscreen"]
      ],
      semantic: !0,
      resetCss: !1,
      removeformatPasted: !1,
      autogrow: !1,
      disabled: !1,
      shouldUseSvgIcons: !0,
      shouldInjectSvgIcons: !0
    }, h.propTypes = {
      id: l.PropTypes.string.isRequired,
      data: l.PropTypes.string.isRequired,
      placeholder: l.PropTypes.string,
      buttons: l.PropTypes.array,
      semantic: l.PropTypes.bool,
      resetCss: l.PropTypes.bool,
      removeformatPasted: l.PropTypes.bool,
      autogrow: l.PropTypes.bool,
      disabled: l.PropTypes.bool,
      onFocus: l.PropTypes.func,
      onBlur: l.PropTypes.func,
      onInit: l.PropTypes.func,
      onChange: l.PropTypes.func,
      onResize: l.PropTypes.func,
      onPaste: l.PropTypes.func,
      onOpenFullScreen: l.PropTypes.func,
      onCloseFullScreen: l.PropTypes.func,
      onClose: l.PropTypes.func,
      shouldUseSvgIcons: l.PropTypes.bool.isRequired,
      svgIconsPath: l.PropTypes.string,
      shouldInjectSvgIcons: l.PropTypes.bool.isRequired
    };
    var m = h;
    t.default = m;
    (function () {
      "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(f, "trumbowygIconsId", "C:/Work/trumbowyg/src/react-trumbowyg.js"), __REACT_HOT_LOADER__.register(h, "Trumbowyg", "C:/Work/trumbowyg/src/react-trumbowyg.js"), __REACT_HOT_LOADER__.register(m, "default", "C:/Work/trumbowyg/src/react-trumbowyg.js"))
    })()
  }, function (e, t, n) {
    "use strict";
    var r = n(13),
      o = r;
    ! function () {
      var e = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var o = 0,
          a = "Warning: " + e.replace(/%s/g, function () {
            return n[o++]
          });
        "undefined" != typeof console && console.error(a);
        try {
          throw new Error(a)
        } catch (e) {}
      };
      o = function (t, n) {
        if (void 0 === n) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (0 !== n.indexOf("Failed Composite propType: ") && !t) {
          for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) o[a - 2] = arguments[a];
          e.apply(void 0, [n].concat(o))
        }
      }
    }(), e.exports = o
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (f.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning) return !1
      }
      return void 0 !== e.ref
    }

    function o(e) {
      if (f.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1
      }
      return void 0 !== e.key
    }

    function a(e, t) {
      var n = function () {
        s || (s = !0, d(!1, "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", t))
      };
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      })
    }

    function i(e, t) {
      var n = function () {
        l || (l = !0, d(!1, "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", t))
      };
      n.isReactWarning = !0, Object.defineProperty(e, "ref", {
        get: n,
        configurable: !0
      })
    }
    var s, l, c = n(6),
      u = n(5),
      d = n(1),
      p = n(11),
      f = Object.prototype.hasOwnProperty,
      h = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
      m = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      },
      y = function (e, t, n, r, o, a, i) {
        var s = {
          $$typeof: h,
          type: e,
          key: t,
          ref: n,
          props: i,
          _owner: a
        };
        s._store = {};
        var l = Array.isArray(i.children) ? i.children.slice(0) : i.children;
        return p ? (Object.defineProperty(s._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(s, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: r
        }), Object.defineProperty(s, "_shadowChildren", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.defineProperty(s, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        })) : (s._store.validated = !1, s._self = r, s._shadowChildren = l, s._source = o), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s
      };
    y.createElement = function (e, t, n) {
      var s, l = {},
        c = null,
        d = null,
        p = null,
        v = null;
      if (null != t) {
        r(t) && (d = t.ref), o(t) && (c = "" + t.key), p = void 0 === t.__self ? null : t.__self, v = void 0 === t.__source ? null : t.__source;
        for (s in t) f.call(t, s) && !m.hasOwnProperty(s) && (l[s] = t[s])
      }
      var g = arguments.length - 2;
      if (1 === g) l.children = n;
      else if (g > 1) {
        for (var b = Array(g), w = 0; w < g; w++) b[w] = arguments[w + 2];
        l.children = b
      }
      if (e && e.defaultProps) {
        var x = e.defaultProps;
        for (s in x) void 0 === l[s] && (l[s] = x[s])
      }
      if ((c || d) && ("undefined" == typeof l.$$typeof || l.$$typeof !== h)) {
        var C = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
        c && a(l, C), d && i(l, C)
      }
      return y(e, c, d, p, v, u.current, l)
    }, y.createFactory = function (e) {
      var t = y.createElement.bind(null, e);
      return t.type = e, t
    }, y.cloneAndReplaceKey = function (e, t) {
      var n = y(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
      return n
    }, y.cloneElement = function (e, t, n) {
      var a, i = c({}, e.props),
        s = e.key,
        l = e.ref,
        d = e._self,
        p = e._source,
        h = e._owner;
      if (null != t) {
        r(t) && (l = t.ref, h = u.current), o(t) && (s = "" + t.key);
        var v;
        e.type && e.type.defaultProps && (v = e.type.defaultProps);
        for (a in t) f.call(t, a) && !m.hasOwnProperty(a) && (void 0 === t[a] && void 0 !== v ? i[a] = v[a] : i[a] = t[a])
      }
      var g = arguments.length - 2;
      if (1 === g) i.children = n;
      else if (g > 1) {
        for (var b = Array(g), w = 0; w < g; w++) b[w] = arguments[w + 2];
        i.children = b
      }
      return y(e.type, s, l, d, p, h, i)
    }, y.isValidElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === h
    }, y.REACT_ELEMENT_TYPE = h, e.exports = y
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o, a, i, s) {
      if (void 0 === t) throw new Error("invariant requires an error message argument");
      if (!e) {
        var l;
        if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
          var c = [n, r, o, a, i, s],
            u = 0;
          l = new Error(t.replace(/%s/g, function () {
            return c[u++]
          })), l.name = "Invariant Violation"
        }
        throw l.framesToPop = 1, l
      }
    }
    e.exports = r
  }, function (e, t) {
    "use strict";

    function n(e) {
      for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      var o = new Error(n);
      throw o.name = "Invariant Violation", o.framesToPop = 1, o
    }
    e.exports = n
  }, function (e, t) {
    "use strict";
    var n = {
      current: null
    };
    e.exports = n
  }, function (e, t) {
    "use strict";

    function n(e) {
      if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e)
    }

    function r() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (e) {
          return t[e]
        });
        if ("0123456789" !== r.join("")) return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          o[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
      } catch (e) {
        return !1
      }
    }
    var o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable;
    e.exports = r() ? Object.assign : function (e, t) {
      for (var r, i, s = n(e), l = 1; l < arguments.length; l++) {
        r = Object(arguments[l]);
        for (var c in r) o.call(r, c) && (s[c] = r[c]);
        if (Object.getOwnPropertySymbols) {
          i = Object.getOwnPropertySymbols(r);
          for (var u = 0; u < i.length; u++) a.call(r, i[u]) && (s[i[u]] = r[i[u]])
        }
      }
      return s
    }
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      this.props = e, this.context = t, this.refs = i, this.updater = n || o
    }
    var o = (n(4), n(9)),
      a = n(11),
      i = n(14),
      s = n(3),
      l = n(1);
    r.prototype.isReactComponent = {}, r.prototype.setState = function (e, t) {
      "object" != typeof e && "function" != typeof e && null != e ? s(!1, "setState(...): takes an object of state variables to update or a function which returns an object of state variables.") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
    }, r.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
    };
    var c = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      },
      u = function (e, t) {
        a && Object.defineProperty(r.prototype, e, {
          get: function () {
            l(!1, "%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1])
          }
        })
      };
    for (var d in c) c.hasOwnProperty(d) && u(d, c[d]);
    e.exports = r
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = Function.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        r = RegExp("^" + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      try {
        var o = t.call(e);
        return r.test(o)
      } catch (e) {
        return !1
      }
    }

    function o(e) {
      return "." + e
    }

    function a(e) {
      return parseInt(e.substr(1), 10)
    }

    function i(e) {
      if (P) return v.get(e);
      var t = o(e);
      return b[t]
    }

    function s(e) {
      if (P) v.delete(e);
      else {
        var t = o(e);
        delete b[t]
      }
    }

    function l(e, t, n) {
      var r = {
        element: t,
        parentID: n,
        text: null,
        childIDs: [],
        isMounted: !1,
        updateCount: 0
      };
      if (P) v.set(e, r);
      else {
        var a = o(e);
        b[a] = r
      }
    }

    function c(e) {
      if (P) g.add(e);
      else {
        var t = o(e);
        w[t] = !0
      }
    }

    function u(e) {
      if (P) g.delete(e);
      else {
        var t = o(e);
        delete w[t]
      }
    }

    function d() {
      return P ? Array.from(v.keys()) : Object.keys(b).map(a)
    }

    function p() {
      return P ? Array.from(g.keys()) : Object.keys(w).map(a)
    }

    function f(e) {
      var t = i(e);
      if (t) {
        var n = t.childIDs;
        s(e), n.forEach(f)
      }
    }

    function h(e, t, n) {
      return "\n    in " + e + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "")
    }

    function m(e) {
      return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
    }

    function y(e) {
      var t, n = E.getDisplayName(e),
        r = E.getElement(e),
        o = E.getOwnerID(e);
      return o && (t = E.getDisplayName(o)), M(r, "ReactComponentTreeHook: Missing React element for debugID %s when building stack", e), h(n, r && r._source, t)
    }
    var v, g, b, w, x = (n(4), n(5)),
      C = n(3),
      M = n(1),
      P = "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys);
    P ? (v = new Map, g = new Set) : (b = {}, w = {});
    var k = [],
      E = {
        onSetChildren: function (e, t) {
          var n = i(e);
          n.childIDs = t;
          for (var r = 0; r < t.length; r++) {
            var o = t[r],
              a = i(o);
            a ? void 0 : C(!1, "Expected hook events to fire for the child before its parent includes it in onSetChildren()."), null == a.childIDs && "object" == typeof a.element && null != a.element ? C(!1, "Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().") : void 0, a.isMounted ? void 0 : C(!1, "Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren()."), null == a.parentID && (a.parentID = e), a.parentID !== e ? C(!1, "Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).", o, a.parentID, e) : void 0
          }
        },
        onBeforeMountComponent: function (e, t, n) {
          l(e, t, n)
        },
        onBeforeUpdateComponent: function (e, t) {
          var n = i(e);
          n && n.isMounted && (n.element = t)
        },
        onMountComponent: function (e) {
          var t = i(e);
          t.isMounted = !0;
          var n = 0 === t.parentID;
          n && c(e)
        },
        onUpdateComponent: function (e) {
          var t = i(e);
          t && t.isMounted && t.updateCount++
        },
        onUnmountComponent: function (e) {
          var t = i(e);
          if (t) {
            t.isMounted = !1;
            var n = 0 === t.parentID;
            n && u(e)
          }
          k.push(e)
        },
        purgeUnmountedComponents: function () {
          if (!E._preventPurging) {
            for (var e = 0; e < k.length; e++) {
              var t = k[e];
              f(t)
            }
            k.length = 0
          }
        },
        isMounted: function (e) {
          var t = i(e);
          return !!t && t.isMounted
        },
        getCurrentStackAddendum: function (e) {
          var t = "";
          if (e) {
            var n = e.type,
              r = "function" == typeof n ? n.displayName || n.name : n,
              o = e._owner;
            t += h(r || "Unknown", e._source, o && o.getName())
          }
          var a = x.current,
            i = a && a._debugID;
          return t += E.getStackAddendumByID(i)
        },
        getStackAddendumByID: function (e) {
          for (var t = ""; e;) t += y(e), e = E.getParentID(e);
          return t
        },
        getChildIDs: function (e) {
          var t = i(e);
          return t ? t.childIDs : []
        },
        getDisplayName: function (e) {
          var t = E.getElement(e);
          return t ? m(t) : null
        },
        getElement: function (e) {
          var t = i(e);
          return t ? t.element : null
        },
        getOwnerID: function (e) {
          var t = E.getElement(e);
          return t && t._owner ? t._owner._debugID : null
        },
        getParentID: function (e) {
          var t = i(e);
          return t ? t.parentID : null
        },
        getSource: function (e) {
          var t = i(e),
            n = t ? t.element : null,
            r = null != n ? n._source : null;
          return r
        },
        getText: function (e) {
          var t = E.getElement(e);
          return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
        },
        getUpdateCount: function (e) {
          var t = i(e);
          return t ? t.updateCount : 0
        },
        getRegisteredIDs: d,
        getRootIDs: p
      };
    e.exports = E
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = e.constructor;
      o(!1, "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.", t, t, n && (n.displayName || n.name) || "ReactClass")
    }
    var o = n(1),
      a = {
        isMounted: function (e) {
          return !1
        },
        enqueueCallback: function (e, t) {},
        enqueueForceUpdate: function (e) {
          r(e, "forceUpdate")
        },
        enqueueReplaceState: function (e, t) {
          r(e, "replaceState")
        },
        enqueueSetState: function (e, t) {
          r(e, "setState")
        }
      };
    e.exports = a
  }, function (e, t, n) {
    "use strict";
    var r = {};
    r = {
      prop: "prop",
      context: "context",
      childContext: "child context"
    }, e.exports = r
  }, function (e, t, n) {
    "use strict";
    var r = !1;
    try {
      Object.defineProperty({}, "x", {
        get: function () {}
      }), r = !0
    } catch (e) {}
    e.exports = r
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = e && (r && e[r] || e[o]);
      if ("function" == typeof t) return t
    }
    var r = "function" == typeof Symbol && Symbol.iterator,
      o = "@@iterator";
    e.exports = n
  }, function (e, t) {
    "use strict";

    function n(e) {
      return function () {
        return e
      }
    }
    var r = function () {};
    r.thatReturns = n, r.thatReturnsFalse = n(!1), r.thatReturnsTrue = n(!0), r.thatReturnsNull = n(null), r.thatReturnsThis = function () {
      return this
    }, r.thatReturnsArgument = function (e) {
      return e
    }, e.exports = r
  }, function (e, t, n) {
    "use strict";
    var r = {};
    Object.freeze(r), e.exports = r
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (l.current) {
        var e = l.current.getName();
        if (e) return " Check the render method of `" + e + "`."
      }
      return ""
    }

    function o(e) {
      var t = r();
      if (!t) {
        var n = "string" == typeof e ? e : e.displayName || e.name;
        n && (t = " Check the top-level render call using <" + n + ">.")
      }
      return t
    }

    function a(e, t) {
      if (e._store && !e._store.validated && null == e.key) {
        e._store.validated = !0;
        var n = y.uniqueKey || (y.uniqueKey = {}),
          r = o(t);
        if (!n[r]) {
          n[r] = !0;
          var a = "";
          e && e._owner && e._owner !== l.current && (a = " It was passed a child from " + e._owner.getName() + "."), m(!1, 'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s', r, a, c.getCurrentStackAddendum(e))
        }
      }
    }

    function i(e, t) {
      if ("object" == typeof e)
        if (Array.isArray(e))
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            u.isValidElement(r) && a(r, t)
          } else if (u.isValidElement(e)) e._store && (e._store.validated = !0);
          else if (e) {
        var o = h(e);
        if (o && o !== e.entries)
          for (var i, s = o.call(e); !(i = s.next()).done;) u.isValidElement(i.value) && a(i.value, t)
      }
    }

    function s(e) {
      var t = e.type;
      if ("function" == typeof t) {
        var n = t.displayName || t.name;
        t.propTypes && p(t.propTypes, e.props, d.prop, n, e, null), "function" == typeof t.getDefaultProps && m(t.getDefaultProps.isReactClassApproved, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
      }
    }
    var l = n(5),
      c = n(8),
      u = n(2),
      d = n(16),
      p = n(28),
      f = n(11),
      h = n(12),
      m = n(1),
      y = {},
      v = {
        createElement: function (e, t, n) {
          var o = "string" == typeof e || "function" == typeof e;
          o || m(!1, "React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).%s", r());
          var a = u.createElement.apply(this, arguments);
          if (null == a) return a;
          if (o)
            for (var l = 2; l < arguments.length; l++) i(arguments[l], e);
          return s(a), a
        },
        createFactory: function (e) {
          var t = v.createElement.bind(null, e);
          return t.type = e, f && Object.defineProperty(t, "type", {
            enumerable: !1,
            get: function () {
              return m(!1, "Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
                value: e
              }), e
            }
          }), t
        },
        cloneElement: function (e, t, n) {
          for (var r = u.cloneElement.apply(this, arguments), o = 2; o < arguments.length; o++) i(arguments[o], r.type);
          return s(r), r
        }
      };
    e.exports = v
  }, function (e, t, n) {
    "use strict";
    var r = n(18),
      o = r({
        prop: null,
        context: null,
        childContext: null
      });
    e.exports = o
  }, function (e, t) {
    "use strict";
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = n
  }, function (e, t, n) {
    "use strict";
    var r = n(3),
      o = function (e) {
        var t, n = {};
        e instanceof Object && !Array.isArray(e) ? void 0 : r(!1, "keyMirror(...): Argument must be an object.");
        for (t in e) e.hasOwnProperty(t) && (n[t] = t);
        return n
      };
    e.exports = o
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = /[=:]/g,
        n = {
          "=": "=0",
          ":": "=2"
        },
        r = ("" + e).replace(t, function (e) {
          return n[e]
        });
      return "$" + r
    }

    function r(e) {
      var t = /(=0|=2)/g,
        n = {
          "=0": "=",
          "=2": ":"
        },
        r = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
      return ("" + r).replace(t, function (e) {
        return n[e]
      })
    }
    var o = {
      escape: n,
      unescape: r
    };
    e.exports = o
  }, function (e, t, n) {
    "use strict";
    var r = (n(4), n(3)),
      o = function (e) {
        var t = this;
        if (t.instancePool.length) {
          var n = t.instancePool.pop();
          return t.call(n, e), n
        }
        return new t(e)
      },
      a = function (e, t) {
        var n = this;
        if (n.instancePool.length) {
          var r = n.instancePool.pop();
          return n.call(r, e, t), r
        }
        return new n(e, t)
      },
      i = function (e, t, n) {
        var r = this;
        if (r.instancePool.length) {
          var o = r.instancePool.pop();
          return r.call(o, e, t, n), o
        }
        return new r(e, t, n)
      },
      s = function (e, t, n, r) {
        var o = this;
        if (o.instancePool.length) {
          var a = o.instancePool.pop();
          return o.call(a, e, t, n, r), a
        }
        return new o(e, t, n, r)
      },
      l = function (e, t, n, r, o) {
        var a = this;
        if (a.instancePool.length) {
          var i = a.instancePool.pop();
          return a.call(i, e, t, n, r, o), i
        }
        return new a(e, t, n, r, o)
      },
      c = function (e) {
        var t = this;
        e instanceof t ? void 0 : r(!1, "Trying to release an instance into a pool of a different type."), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
      },
      u = 10,
      d = o,
      p = function (e, t) {
        var n = e;
        return n.instancePool = [], n.getPooled = t || d, n.poolSize || (n.poolSize = u), n.release = c, n
      },
      f = {
        addPoolingTo: p,
        oneArgumentPooler: o,
        twoArgumentPooler: a,
        threeArgumentPooler: i,
        fourArgumentPooler: s,
        fiveArgumentPooler: l
      };
    e.exports = f
  }, function (e, t, n) {
    "use strict";
    var r = n(6),
      o = n(22),
      a = n(7),
      i = n(26),
      s = n(23),
      l = n(24),
      c = n(2),
      u = n(25),
      d = n(27),
      p = n(29),
      f = n(1),
      h = c.createElement,
      m = c.createFactory,
      y = c.cloneElement,
      v = n(15);
    h = v.createElement, m = v.createFactory, y = v.cloneElement;
    var g = r,
      b = !1;
    g = function () {
      return f(b, "React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details."), b = !0, r.apply(null, arguments)
    };
    var w = {
      Children: {
        map: o.map,
        forEach: o.forEach,
        count: o.count,
        toArray: o.toArray,
        only: p
      },
      Component: a,
      PureComponent: i,
      createElement: h,
      cloneElement: y,
      isValidElement: c.isValidElement,
      PropTypes: u,
      createClass: s.createClass,
      createFactory: m,
      createMixin: function (e) {
        return e
      },
      DOM: l,
      version: d,
      __spread: g
    };
    e.exports = w
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return ("" + e).replace(w, "$&/")
    }

    function o(e, t) {
      this.func = e, this.context = t, this.count = 0
    }

    function a(e, t, n) {
      var r = e.func,
        o = e.context;
      r.call(o, t, e.count++)
    }

    function i(e, t, n) {
      if (null == e) return e;
      var r = o.getPooled(t, n);
      v(e, a, r), o.release(r)
    }

    function s(e, t, n, r) {
      this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0
    }

    function l(e, t, n) {
      var o = e.result,
        a = e.keyPrefix,
        i = e.func,
        s = e.context,
        l = i.call(s, t, e.count++);
      Array.isArray(l) ? c(l, o, n, y.thatReturnsArgument) : null != l && (m.isValidElement(l) && (l = m.cloneAndReplaceKey(l, a + (!l.key || t && t.key === l.key ? "" : r(l.key) + "/") + n)), o.push(l))
    }

    function c(e, t, n, o, a) {
      var i = "";
      null != n && (i = r(n) + "/");
      var c = s.getPooled(t, i, o, a);
      v(e, l, c), s.release(c)
    }

    function u(e, t, n) {
      if (null == e) return e;
      var r = [];
      return c(e, r, null, t, n), r
    }

    function d(e, t, n) {
      return null
    }

    function p(e, t) {
      return v(e, d, null)
    }

    function f(e) {
      var t = [];
      return c(e, t, null, y.thatReturnsArgument), t
    }
    var h = n(20),
      m = n(2),
      y = n(13),
      v = n(30),
      g = h.twoArgumentPooler,
      b = h.fourArgumentPooler,
      w = /\/+/g;
    o.prototype.destructor = function () {
      this.func = null, this.context = null, this.count = 0
    }, h.addPoolingTo(o, g), s.prototype.destructor = function () {
      this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
    }, h.addPoolingTo(s, b);
    var x = {
      forEach: i,
      map: u,
      mapIntoWithKeyPrefixInternal: c,
      count: p,
      toArray: f
    };
    e.exports = x
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      for (var r in t) t.hasOwnProperty(r) && C("function" == typeof t[r], "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", e.displayName || "ReactClass", y[n], r)
    }

    function o(e, t) {
      var n = E.hasOwnProperty(t) ? E[t] : null;
      R.hasOwnProperty(t) && (n !== P.OVERRIDE_BASE ? b(!1, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t) : void 0), e && (n !== P.DEFINE_MANY && n !== P.DEFINE_MANY_MERGED ? b(!1, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t) : void 0)
    }

    function a(e, t) {
      if (!t) {
        var n = typeof t,
          r = "object" === n && null !== t;
        return void C(r, "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.", e.displayName || "ReactClass", null === t ? null : n)
      }
      "function" == typeof t ? b(!1, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.") : void 0, h.isValidElement(t) ? b(!1, "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.") : void 0;
      var a = e.prototype,
        i = a.__reactAutoBindPairs;
      t.hasOwnProperty(M) && T.mixins(e, t.mixins);
      for (var s in t)
        if (t.hasOwnProperty(s) && s !== M) {
          var u = t[s],
            d = a.hasOwnProperty(s);
          if (o(d, s), T.hasOwnProperty(s)) T[s](e, u);
          else {
            var p = E.hasOwnProperty(s),
              f = "function" == typeof u,
              m = f && !p && !d && t.autobind !== !1;
            if (m) i.push(s, u), a[s] = u;
            else if (d) {
              var y = E[s];
              !p || y !== P.DEFINE_MANY_MERGED && y !== P.DEFINE_MANY ? b(!1, "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", y, s) : void 0, y === P.DEFINE_MANY_MERGED ? a[s] = l(a[s], u) : y === P.DEFINE_MANY && (a[s] = c(a[s], u))
            } else a[s] = u, "function" == typeof u && t.displayName && (a[s].displayName = t.displayName + "_" + s)
          }
        }
    }

    function i(e, t) {
      if (t)
        for (var n in t) {
          var r = t[n];
          if (t.hasOwnProperty(n)) {
            var o = n in T;
            o ? b(!1, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n) : void 0;
            var a = n in e;
            a ? b(!1, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n) : void 0, e[n] = r
          }
        }
    }

    function s(e, t) {
      e && t && "object" == typeof e && "object" == typeof t ? void 0 : b(!1, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
      for (var n in t) t.hasOwnProperty(n) && (void 0 !== e[n] ? b(!1, "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n) : void 0, e[n] = t[n]);
      return e
    }

    function l(e, t) {
      return function () {
        var n = e.apply(this, arguments),
          r = t.apply(this, arguments);
        if (null == n) return r;
        if (null == r) return n;
        var o = {};
        return s(o, n), s(o, r), o
      }
    }

    function c(e, t) {
      return function () {
        e.apply(this, arguments), t.apply(this, arguments)
      }
    }

    function u(e, t) {
      var n = t.bind(e);
      n.__reactBoundContext = e, n.__reactBoundMethod = t, n.__reactBoundArguments = null;
      var r = e.constructor.displayName,
        o = n.bind;
      return n.bind = function (a) {
        for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) s[l - 1] = arguments[l];
        if (a !== e && null !== a) C(!1, "bind(): React component methods may only be bound to the component instance. See %s", r);
        else if (!s.length) return C(!1, "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s", r), n;
        var c = o.apply(n, arguments);
        return c.__reactBoundContext = e, c.__reactBoundMethod = t, c.__reactBoundArguments = s, c
      }, n
    }

    function d(e) {
      for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
        var r = t[n],
          o = t[n + 1];
        e[r] = u(e, o)
      }
    }
    var p = (n(4), n(6)),
      f = n(7),
      h = n(2),
      m = n(16),
      y = n(10),
      v = n(9),
      g = n(14),
      b = n(3),
      w = n(18),
      x = n(31),
      C = n(1),
      M = x({
        mixins: null
      }),
      P = w({
        DEFINE_ONCE: null,
        DEFINE_MANY: null,
        OVERRIDE_BASE: null,
        DEFINE_MANY_MERGED: null
      }),
      k = [],
      E = {
        mixins: P.DEFINE_MANY,
        statics: P.DEFINE_MANY,
        propTypes: P.DEFINE_MANY,
        contextTypes: P.DEFINE_MANY,
        childContextTypes: P.DEFINE_MANY,
        getDefaultProps: P.DEFINE_MANY_MERGED,
        getInitialState: P.DEFINE_MANY_MERGED,
        getChildContext: P.DEFINE_MANY_MERGED,
        render: P.DEFINE_ONCE,
        componentWillMount: P.DEFINE_MANY,
        componentDidMount: P.DEFINE_MANY,
        componentWillReceiveProps: P.DEFINE_MANY,
        shouldComponentUpdate: P.DEFINE_ONCE,
        componentWillUpdate: P.DEFINE_MANY,
        componentDidUpdate: P.DEFINE_MANY,
        componentWillUnmount: P.DEFINE_MANY,
        updateComponent: P.OVERRIDE_BASE
      },
      T = {
        displayName: function (e, t) {
          e.displayName = t
        },
        mixins: function (e, t) {
          if (t)
            for (var n = 0; n < t.length; n++) a(e, t[n])
        },
        childContextTypes: function (e, t) {
          r(e, t, m.childContext), e.childContextTypes = p({}, e.childContextTypes, t)
        },
        contextTypes: function (e, t) {
          r(e, t, m.context), e.contextTypes = p({}, e.contextTypes, t)
        },
        getDefaultProps: function (e, t) {
          e.getDefaultProps ? e.getDefaultProps = l(e.getDefaultProps, t) : e.getDefaultProps = t
        },
        propTypes: function (e, t) {
          r(e, t, m.prop), e.propTypes = p({}, e.propTypes, t)
        },
        statics: function (e, t) {
          i(e, t)
        },
        autobind: function () {}
      },
      R = {
        replaceState: function (e, t) {
          this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState")
        },
        isMounted: function () {
          return this.updater.isMounted(this)
        }
      },
      _ = function () {};
    p(_.prototype, f.prototype, R);
    var z = {
      createClass: function (e) {
        var t = function (e, n, r) {
          C(this instanceof t, "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"), this.__reactAutoBindPairs.length && d(this), this.props = e, this.context = n, this.refs = g, this.updater = r || v, this.state = null;
          var o = this.getInitialState ? this.getInitialState() : null;
          void 0 === o && this.getInitialState._isMockFunction && (o = null), "object" != typeof o || Array.isArray(o) ? b(!1, "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent") : void 0, this.state = o
        };
        t.prototype = new _, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], k.forEach(a.bind(null, t)), a(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.getDefaultProps && (t.getDefaultProps.isReactClassApproved = {}), t.prototype.getInitialState && (t.prototype.getInitialState.isReactClassApproved = {}), t.prototype.render ? void 0 : b(!1, "createClass(...): Class specification must implement a `render` method."), C(!t.prototype.componentShouldUpdate, "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", e.displayName || "A component"), C(!t.prototype.componentWillRecieveProps, "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", e.displayName || "A component");
        for (var n in E) t.prototype[n] || (t.prototype[n] = null);
        return t
      },
      injection: {
        injectMixin: function (e) {
          k.push(e)
        }
      }
    };
    e.exports = z
  }, function (e, t, n) {
    "use strict";
    var r = n(2),
      o = r.createFactory,
      a = n(15);
    o = a.createFactory;
    var i = {
      a: o("a"),
      abbr: o("abbr"),
      address: o("address"),
      area: o("area"),
      article: o("article"),
      aside: o("aside"),
      audio: o("audio"),
      b: o("b"),
      base: o("base"),
      bdi: o("bdi"),
      bdo: o("bdo"),
      big: o("big"),
      blockquote: o("blockquote"),
      body: o("body"),
      br: o("br"),
      button: o("button"),
      canvas: o("canvas"),
      caption: o("caption"),
      cite: o("cite"),
      code: o("code"),
      col: o("col"),
      colgroup: o("colgroup"),
      data: o("data"),
      datalist: o("datalist"),
      dd: o("dd"),
      del: o("del"),
      details: o("details"),
      dfn: o("dfn"),
      dialog: o("dialog"),
      div: o("div"),
      dl: o("dl"),
      dt: o("dt"),
      em: o("em"),
      embed: o("embed"),
      fieldset: o("fieldset"),
      figcaption: o("figcaption"),
      figure: o("figure"),
      footer: o("footer"),
      form: o("form"),
      h1: o("h1"),
      h2: o("h2"),
      h3: o("h3"),
      h4: o("h4"),
      h5: o("h5"),
      h6: o("h6"),
      head: o("head"),
      header: o("header"),
      hgroup: o("hgroup"),
      hr: o("hr"),
      html: o("html"),
      i: o("i"),
      iframe: o("iframe"),
      img: o("img"),
      input: o("input"),
      ins: o("ins"),
      kbd: o("kbd"),
      keygen: o("keygen"),
      label: o("label"),
      legend: o("legend"),
      li: o("li"),
      link: o("link"),
      main: o("main"),
      map: o("map"),
      mark: o("mark"),
      menu: o("menu"),
      menuitem: o("menuitem"),
      meta: o("meta"),
      meter: o("meter"),
      nav: o("nav"),
      noscript: o("noscript"),
      object: o("object"),
      ol: o("ol"),
      optgroup: o("optgroup"),
      option: o("option"),
      output: o("output"),
      p: o("p"),
      param: o("param"),
      picture: o("picture"),
      pre: o("pre"),
      progress: o("progress"),
      q: o("q"),
      rp: o("rp"),
      rt: o("rt"),
      ruby: o("ruby"),
      s: o("s"),
      samp: o("samp"),
      script: o("script"),
      section: o("section"),
      select: o("select"),
      small: o("small"),
      source: o("source"),
      span: o("span"),
      strong: o("strong"),
      style: o("style"),
      sub: o("sub"),
      summary: o("summary"),
      sup: o("sup"),
      table: o("table"),
      tbody: o("tbody"),
      td: o("td"),
      textarea: o("textarea"),
      tfoot: o("tfoot"),
      th: o("th"),
      thead: o("thead"),
      time: o("time"),
      title: o("title"),
      tr: o("tr"),
      track: o("track"),
      u: o("u"),
      ul: o("ul"),
      var: o("var"),
      video: o("video"),
      wbr: o("wbr"),
      circle: o("circle"),
      clipPath: o("clipPath"),
      defs: o("defs"),
      ellipse: o("ellipse"),
      g: o("g"),
      image: o("image"),
      line: o("line"),
      linearGradient: o("linearGradient"),
      mask: o("mask"),
      path: o("path"),
      pattern: o("pattern"),
      polygon: o("polygon"),
      polyline: o("polyline"),
      radialGradient: o("radialGradient"),
      rect: o("rect"),
      stop: o("stop"),
      svg: o("svg"),
      text: o("text"),
      tspan: o("tspan")
    };
    e.exports = i
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    }

    function o(e) {
      this.message = e, this.stack = ""
    }

    function a(e) {
      function t(t, r, a, i, s, l, c) {
        if (i = i || T, l = l || a, c !== M && "undefined" != typeof console) {
          var u = i + ":" + a;
          n[u] || (E(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will not work in the next major version. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", l, i), n[u] = !0)
        }
        if (null == r[a]) {
          var d = C[s];
          return t ? new o("Required " + d + " `" + l + "` was not specified in " + ("`" + i + "`.")) : null
        }
        return e(r, a, i, s, l)
      }
      var n = {},
        r = t.bind(null, !1);
      return r.isRequired = t.bind(null, !0), r
    }

    function i(e) {
      function t(t, n, r, a, i, s) {
        var l = t[n],
          c = g(l);
        if (c !== e) {
          var u = C[a],
            d = b(l);
          return new o("Invalid " + u + " `" + i + "` of type " + ("`" + d + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."))
        }
        return null
      }
      return a(t)
    }

    function s() {
      return a(P.thatReturns(null))
    }

    function l(e) {
      function t(t, n, r, a, i) {
        if ("function" != typeof e) return new o("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
        var s = t[n];
        if (!Array.isArray(s)) {
          var l = C[a],
            c = g(s);
          return new o("Invalid " + l + " `" + i + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."))
        }
        for (var u = 0; u < s.length; u++) {
          var d = e(s, u, r, a, i + "[" + u + "]", M);
          if (d instanceof Error) return d
        }
        return null
      }
      return a(t)
    }

    function c() {
      function e(e, t, n, r, a) {
        var i = e[t];
        if (!x.isValidElement(i)) {
          var s = C[r],
            l = g(i);
          return new o("Invalid " + s + " `" + a + "` of type " + ("`" + l + "` supplied to `" + n + "`, expected a single ReactElement."))
        }
        return null
      }
      return a(e)
    }

    function u(e) {
      function t(t, n, r, a, i) {
        if (!(t[n] instanceof e)) {
          var s = C[a],
            l = e.name || T,
            c = w(t[n]);
          return new o("Invalid " + s + " `" + i + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("instance of `" + l + "`."))
        }
        return null
      }
      return a(t)
    }

    function d(e) {
      function t(t, n, a, i, s) {
        for (var l = t[n], c = 0; c < e.length; c++)
          if (r(l, e[c])) return null;
        var u = C[i],
          d = JSON.stringify(e);
        return new o("Invalid " + u + " `" + s + "` of value `" + l + "` " + ("supplied to `" + a + "`, expected one of " + d + "."))
      }
      return Array.isArray(e) ? a(t) : (E(!1, "Invalid argument supplied to oneOf, expected an instance of array."), P.thatReturnsNull)
    }

    function p(e) {
      function t(t, n, r, a, i) {
        if ("function" != typeof e) return new o("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
        var s = t[n],
          l = g(s);
        if ("object" !== l) {
          var c = C[a];
          return new o("Invalid " + c + " `" + i + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."))
        }
        for (var u in s)
          if (s.hasOwnProperty(u)) {
            var d = e(s, u, r, a, i + "." + u, M);
            if (d instanceof Error) return d
          }
        return null
      }
      return a(t)
    }

    function f(e) {
      function t(t, n, r, a, i) {
        for (var s = 0; s < e.length; s++) {
          var l = e[s];
          if (null == l(t, n, r, a, i, M)) return null
        }
        var c = C[a];
        return new o("Invalid " + c + " `" + i + "` supplied to " + ("`" + r + "`."))
      }
      return Array.isArray(e) ? a(t) : (E(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), P.thatReturnsNull)
    }

    function h() {
      function e(e, t, n, r, a) {
        if (!y(e[t])) {
          var i = C[r];
          return new o("Invalid " + i + " `" + a + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
        }
        return null
      }
      return a(e)
    }

    function m(e) {
      function t(t, n, r, a, i) {
        var s = t[n],
          l = g(s);
        if ("object" !== l) {
          var c = C[a];
          return new o("Invalid " + c + " `" + i + "` of type `" + l + "` " + ("supplied to `" + r + "`, expected `object`."))
        }
        for (var u in e) {
          var d = e[u];
          if (d) {
            var p = d(s, u, r, a, i + "." + u, M);
            if (p) return p
          }
        }
        return null
      }
      return a(t)
    }

    function y(e) {
      switch (typeof e) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !e;
      case "object":
        if (Array.isArray(e)) return e.every(y);
        if (null === e || x.isValidElement(e)) return !0;
        var t = k(e);
        if (!t) return !1;
        var n, r = t.call(e);
        if (t !== e.entries) {
          for (; !(n = r.next()).done;)
            if (!y(n.value)) return !1
        } else
          for (; !(n = r.next()).done;) {
            var o = n.value;
            if (o && !y(o[1])) return !1
          }
        return !0;
      default:
        return !1
      }
    }

    function v(e, t) {
      return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
    }

    function g(e) {
      var t = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : v(t, e) ? "symbol" : t
    }

    function b(e) {
      var t = g(e);
      if ("object" === t) {
        if (e instanceof Date) return "date";
        if (e instanceof RegExp) return "regexp"
      }
      return t
    }

    function w(e) {
      return e.constructor && e.constructor.name ? e.constructor.name : T
    }
    var x = n(2),
      C = n(10),
      M = n(17),
      P = n(13),
      k = n(12),
      E = n(1),
      T = "<<anonymous>>",
      R = {
        array: i("array"),
        bool: i("boolean"),
        func: i("function"),
        number: i("number"),
        object: i("object"),
        string: i("string"),
        symbol: i("symbol"),
        any: s(),
        arrayOf: l,
        element: c(),
        instanceOf: u,
        node: h(),
        objectOf: p,
        oneOf: d,
        oneOfType: f,
        shape: m
      };
    o.prototype = Error.prototype, e.exports = R
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      this.props = e, this.context = t, this.refs = l, this.updater = n || s
    }

    function o() {}
    var a = n(6),
      i = n(7),
      s = n(9),
      l = n(14);
    o.prototype = i.prototype, r.prototype = new o, r.prototype.constructor = r, a(r.prototype, i.prototype), r.prototype.isPureReactComponent = !0, e.exports = r
  }, function (e, t) {
    "use strict";
    e.exports = "15.3.2"
  }, function (e, t, n) {
    (function (t) {
      "use strict";

      function r(e, t, r, u, d, p) {
        for (var f in e)
          if (e.hasOwnProperty(f)) {
            var h;
            try {
              "function" != typeof e[f] ? s(!1, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", u || "React class", a[r], f) : void 0, h = e[f](t, f, u, r, null, i)
            } catch (e) {
              h = e
            }
            if (l(!h || h instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", a[r], f, typeof h), h instanceof Error && !(h.message in c)) {
              c[h.message] = !0;
              var m = "";
              o || (o = n(8)), null !== p ? m = o.getStackAddendumByID(p) : null !== d && (m = o.getCurrentStackAddendum(d)), l(!1, "Failed %s type: %s%s", r, h.message, m)
            }
          }
      }
      var o, a = (n(4), n(10)),
        i = n(17),
        s = n(3),
        l = n(1),
        c = {};
      e.exports = r
    }).call(t, n(35))
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return o.isValidElement(e) ? void 0 : a(!1, "React.Children.only expected to receive a single React element child."), e
    }
    var o = (n(4), n(2)),
      a = n(3);
    e.exports = r
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      return e && "object" == typeof e && null != e.key ? u.escape(e.key) : t.toString(36)
    }

    function o(e, t, n, a) {
      var m = typeof e;
      if ("undefined" !== m && "boolean" !== m || (e = null), null === e || "string" === m || "number" === m || s.isValidElement(e)) return n(a, e, "" === t ? p + r(e, 0) : t), 1;
      var y, v, g = 0,
        b = "" === t ? p : t + f;
      if (Array.isArray(e))
        for (var w = 0; w < e.length; w++) y = e[w], v = b + r(y, w), g += o(y, v, n, a);
      else {
        var x = l(e);
        if (x) {
          var C, M = x.call(e);
          if (x !== e.entries)
            for (var P = 0; !(C = M.next()).done;) y = C.value, v = b + r(y, P++), g += o(y, v, n, a);
          else {
            var k = "";
            if (i.current) {
              var E = i.current.getName();
              E && (k = " Check the render method of `" + E + "`.")
            }
            for (d(h, "Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s", k), h = !0; !(C = M.next()).done;) {
              var T = C.value;
              T && (y = T[1], v = b + u.escape(T[0]) + f + r(y, 0), g += o(y, v, n, a))
            }
          }
        } else if ("object" === m) {
          var R = "";
          if (R = " If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.", e._isReactElement && (R = " It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."), i.current) {
            var _ = i.current.getName();
            _ && (R += " Check the render method of `" + _ + "`.")
          }
          var z = String(e);
          c(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === z ? "object with keys {" + Object.keys(e).join(", ") + "}" : z, R)
        }
      }
      return g
    }

    function a(e, t, n) {
      return null == e ? 0 : o(e, "", t, n)
    }
    var i = (n(4), n(5)),
      s = n(2),
      l = n(12),
      c = n(3),
      u = n(19),
      d = n(1),
      p = ".",
      f = ":",
      h = !1;
    e.exports = a
  }, function (e, t) {
    "use strict";
    var n = function (e) {
      var t;
      for (t in e)
        if (e.hasOwnProperty(t)) return t;
      return null
    };
    e.exports = n
  }, function (e, t, n) {
    "use strict";
    e.exports = n(21)
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg"><symbol id="trumbowyg-blockquote" viewBox="0 0 72 72"><path d="M21.3 31.9h-.6c.8-1.2 1.9-2.2 3.4-3.2 2.1-1.4 5-2.7 9.2-3.3l-1.4-8.9c-4.7.7-8.5 2.1-11.7 4-2.4 1.4-4.3 3.1-5.8 4.9-2.3 2.7-3.7 5.7-4.5 8.5-.8 2.8-1 5.4-1 7.5 0 2.3.3 4 .4 4.8 0 .1.1.3.1.4 1.2 5.4 6.1 9.5 11.9 9.5 6.7 0 12.2-5.4 12.2-12.2s-5.5-12-12.2-12zM49.5 31.9h-.6c.8-1.2 1.9-2.2 3.4-3.2 2.1-1.4 5-2.7 9.2-3.3l-1.4-8.9c-4.7.7-8.5 2.1-11.7 4-2.4 1.4-4.3 3.1-5.8 4.9-2.3 2.7-3.7 5.7-4.5 8.5-.8 2.8-1 5.4-1 7.5 0 2.3.3 4 .4 4.8 0 .1.1.3.1.4 1.2 5.4 6.1 9.5 11.9 9.5 6.7 0 12.2-5.4 12.2-12.2s-5.5-12-12.2-12z"></path></symbol><symbol id="trumbowyg-bold" viewBox="0 0 72 72"><path d="M51.1 37.8c-1.1-1.4-2.5-2.5-4.2-3.3 1.2-.8 2.1-1.8 2.8-3 1-1.6 1.5-3.5 1.5-5.3 0-2-.6-4-1.7-5.8-1.1-1.8-2.8-3.2-4.8-4.1-2-.9-4.6-1.3-7.8-1.3h-16v42h16.3c2.6 0 4.8-.2 6.7-.7 1.9-.5 3.4-1.2 4.7-2.1 1.3-1 2.4-2.4 3.2-4.1.9-1.7 1.3-3.6 1.3-5.7.2-2.5-.5-4.7-2-6.6zM40.8 50.2c-.6.1-1.8.2-3.4.2h-9V38.5h8.3c2.5 0 4.4.2 5.6.6 1.2.4 2 1 2.7 2 .6.9 1 2 1 3.3 0 1.1-.2 2.1-.7 2.9-.5.9-1 1.5-1.7 1.9-.8.4-1.7.8-2.8 1zm2.6-20.4c-.5.7-1.3 1.3-2.5 1.6-.8.3-2.5.4-4.8.4h-7.7V21.6h7.1c1.4 0 2.6 0 3.6.1s1.7.2 2.2.4c1 .3 1.7.8 2.2 1.7.5.9.8 1.8.8 3-.1 1.3-.4 2.2-.9 3z"></path></symbol><symbol id="trumbowyg-close" viewBox="0 0 72 72"><path d="M57 20.5l-5.4-5.4-15.5 15.5-15.6-15.5-5.4 5.4L30.7 36 15.1 51.5l5.4 5.4 15.6-15.5 15.5 15.5 5.4-5.4L41.5 36z"></path></symbol><symbol id="trumbowyg-create-link" viewBox="0 0 72 72"><path d="M31.1 48.9l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9L15 50.4c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L11 41.8c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7c2.5-2.6 3.1-6.7 1.5-10l-5.9 5.9zM38.7 22.5l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2L42 38c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1c0 .1 0 .1 0 0z"></path><path d="M44.2 30.5c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.3-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.9 40.6c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM49.9 55.4h-8.5v-5h8.5v-8.9h5.2v8.9h8.5v5h-8.5v8.9h-5.2v-8.9z"></path></symbol><symbol id="trumbowyg-del" viewBox="0 0 72 72"><path d="M45.8 45c0 1-.3 1.9-.9 2.8-.6.9-1.6 1.6-3 2.1s-3.1.8-5 .8c-2.1 0-4-.4-5.7-1.1-1.7-.7-2.9-1.7-3.6-2.7-.8-1.1-1.3-2.6-1.5-4.5l-.1-.8-6.7.6v.9c.1 2.8.9 5.4 2.3 7.6 1.5 2.3 3.5 4 6.1 5.1 2.6 1.1 5.7 1.6 9.4 1.6 2.9 0 5.6-.5 8-1.6 2.4-1.1 4.3-2.7 5.6-4.7 1.3-2 2-4.2 2-6.5 0-1.6-.3-3.1-.9-4.5l-.2-.6H44c0 .1 1.8 2.3 1.8 5.5zM29 28.9c-.8-.8-1.2-1.7-1.2-2.9 0-.7.1-1.3.4-1.9.3-.6.7-1.1 1.4-1.6.6-.5 1.4-.9 2.5-1.1 1.1-.3 2.4-.4 3.9-.4 2.9 0 5 .6 6.3 1.7 1.3 1.1 2.1 2.7 2.4 5.1l.1.9 6.8-.5v-.9c-.1-2.5-.8-4.7-2.1-6.7s-3.2-3.5-5.6-4.5c-2.4-1-5.1-1.5-8.1-1.5-2.8 0-5.3.5-7.6 1.4-2.3 1-4.2 2.4-5.4 4.3-1.2 1.9-1.9 3.9-1.9 6.1 0 1.7.4 3.4 1.2 4.9l.3.5h11.8c-2.3-.9-3.9-1.7-5.2-2.9zm13.3-6.2zM22.7 20.3zM13 34.1h46.1v3.4H13z"></path></symbol><symbol id="trumbowyg-em" viewBox="0 0 72 72"><path d="M26 57l10.1-42h7.2L33.2 57H26z"></path></symbol><symbol id="trumbowyg-fullscreen" viewBox="0 0 72 72"><path d="M25.2 7.1H7.1v17.7l6.7-6.5 10.5 10.5 4.5-4.5-10.4-10.5zM47.2 7.1l6.5 6.7-10.5 10.5 4.5 4.5 10.5-10.4 6.7 6.8V7.1zM47.7 43.2l-4.5 4.5 10.4 10.5-6.8 6.7h18.1V47.2l-6.7 6.5zM24.3 43.2L13.8 53.6l-6.7-6.8v18.1h17.7l-6.5-6.7 10.5-10.5z"></path><path fill="currentColor" d="M10.7 28.8h18.1V11.2l-6.6 6.4L11.6 7.1l-4.5 4.5 10.5 10.5zM60.8 28.8l-6.4-6.6 10.5-10.6-4.5-4.5-10.5 10.5-6.7-6.9v18.1zM60.4 64.9l4.5-4.5-10.5-10.5 6.9-6.7H43.2v17.6l6.6-6.4zM11.6 64.9l10.5-10.5 6.7 6.9V43.2H11.1l6.5 6.6L7.1 60.4z"></path></symbol><symbol id="trumbowyg-h1" viewBox="0 0 72 72"><path d="M6.4 14.9h7.4v16.7h19.1V14.9h7.4V57h-7.4V38H13.8v19H6.4V14.9zM47.8 22.5c1.4 0 2.8-.1 4.1-.4 1.3-.2 2.5-.6 3.6-1.2 1.1-.5 2-1.3 2.8-2.1.8-.9 1.3-1.9 1.5-3.2h5.5v41.2h-7.4v-29H47.8v-5.3z"></path></symbol><symbol id="trumbowyg-h2" viewBox="0 0 72 72"><path d="M1.5 14.9h7.4v16.7H28V14.9h7.4V57H28V38H8.8v19H1.5V14.9zM70.2 56.9H42c0-3.4.9-6.4 2.5-9s3.8-4.8 6.6-6.7c1.3-1 2.7-1.9 4.2-2.9 1.5-.9 2.8-1.9 4-3 1.2-1.1 2.2-2.2 3-3.4.8-1.2 1.2-2.7 1.2-4.3 0-.7-.1-1.5-.3-2.4s-.5-1.6-1-2.4c-.5-.7-1.2-1.3-2.1-1.8-.9-.5-2.1-.7-3.5-.7-1.3 0-2.4.3-3.3.8s-1.6 1.3-2.1 2.2-.9 2-1.2 3.3c-.3 1.3-.4 2.6-.4 4.1h-6.7c0-2.3.3-4.4.9-6.3.6-1.9 1.5-3.6 2.7-5 1.2-1.4 2.7-2.5 4.4-3.3 1.7-.8 3.8-1.2 6.1-1.2 2.5 0 4.6.4 6.3 1.2 1.7.8 3.1 1.9 4.1 3.1 1 1.3 1.8 2.6 2.2 4.1.4 1.5.6 2.9.6 4.2 0 1.6-.3 3.1-.8 4.5-.5 1.3-1.2 2.6-2.1 3.7-.9 1.1-1.8 2.2-2.9 3.1-1.1.9-2.2 1.8-3.4 2.7-1.2.8-2.4 1.6-3.5 2.4-1.2.7-2.3 1.5-3.3 2.2-1 .7-1.9 1.5-2.6 2.3-.7.8-1.3 1.7-1.5 2.6h20.1v5.9z"></path></symbol><symbol id="trumbowyg-h3" viewBox="0 0 72 72"><path d="M1.4 14.5h7.4v16.7h19.1V14.5h7.4v42.1h-7.4v-19H8.8v19H1.4V14.5zM53.1 32.4c1.1 0 2.2 0 3.3-.2 1.1-.2 2.1-.5 2.9-1 .9-.5 1.6-1.2 2.1-2 .5-.9.8-1.9.8-3.2 0-1.8-.6-3.2-1.8-4.2-1.2-1.1-2.7-1.6-4.6-1.6-1.2 0-2.2.2-3.1.7-.9.5-1.6 1.1-2.2 1.9-.6.8-1 1.7-1.3 2.7-.3 1-.4 2-.4 3.1h-6.7c.1-2 .5-3.9 1.1-5.6.7-1.7 1.6-3.2 2.7-4.4s2.6-2.2 4.2-2.9c1.6-.7 3.5-1.1 5.6-1.1 1.6 0 3.2.2 4.7.7 1.6.5 2.9 1.2 4.2 2.1 1.2.9 2.2 2.1 3 3.4.7 1.4 1.1 3 1.1 4.8 0 2.1-.5 3.9-1.4 5.4-.9 1.6-2.4 2.7-4.4 3.4v.1c2.4.5 4.2 1.6 5.5 3.5 1.3 1.9 2 4.1 2 6.8 0 2-.4 3.7-1.2 5.3-.8 1.6-1.8 2.9-3.2 3.9-1.3 1.1-2.9 1.9-4.7 2.5-1.8.6-3.6.9-5.6.9-2.4 0-4.5-.3-6.3-1s-3.3-1.7-4.5-2.9c-1.2-1.3-2.1-2.8-2.7-4.5-.6-1.8-1-3.7-1-5.9h6.7c-.1 2.5.5 4.6 1.9 6.3 1.3 1.7 3.3 2.5 5.9 2.5 2.2 0 4.1-.6 5.6-1.9 1.5-1.3 2.3-3.1 2.3-5.4 0-1.6-.3-2.9-.9-3.8-.6-.9-1.5-1.7-2.5-2.2-1-.5-2.2-.8-3.4-.9-1.3-.1-2.6-.2-3.9-.1v-5.2z"></path></symbol><symbol id="trumbowyg-h4" viewBox="0 0 72 72"><path d="M1.5 14.9h7.4v16.7H28V14.9h7.4V57H28V38H8.9v19H1.5V14.9zM70.5 47.2h-5.3V57h-6.4v-9.8H41.2v-6.7l17.7-24.8h6.4v26.2h5.3v5.3zm-24.2-5.3h12.5V23.7h-.1L46.3 41.9z"></path></symbol><symbol id="trumbowyg-horizontal-rule" viewBox="0 0 72 72"><path d="M9.1 32h54v8h-54z"></path></symbol><symbol id="trumbowyg-insert-image" viewBox="0 0 72 72"><path d="M64 17v38H8V17h56m8-8H0v54h72V9z"></path><path d="M17.5 22C15 22 13 24 13 26.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM16 50h27L29.5 32zM36 36.2l8.9-8.5L60.2 50H45.9S35.6 35.9 36 36.2z"></path></symbol><symbol id="trumbowyg-italic" viewBox="0 0 72 72"><path d="M26 57l10.1-42h7.2L33.2 57H26z"></path></symbol><symbol id="trumbowyg-justify-center" viewBox="0 0 72 72"><path d="M9 14h54v8H9zM9 50h54v8H9zM18 32h36v8H18z"></path></symbol><symbol id="trumbowyg-justify-full" viewBox="0 0 72 72"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h54v8H9z"></path></symbol><symbol id="trumbowyg-justify-left" viewBox="0 0 72 72"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h36v8H9z"></path></symbol><symbol id="trumbowyg-justify-right" viewBox="0 0 72 72"><path d="M9 14h54v8H9zM9 50h54v8H9zM27 32h36v8H27z"></path></symbol><symbol id="trumbowyg-link" viewBox="0 0 72 72"><path d="M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z"></path><path d="M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2z"></path></symbol><symbol id="trumbowyg-ordered-list" viewBox="0 0 72 72"><path d="M27 14h36v8H27zM27 50h36v8H27zM27 32h36v8H27zM11.8 15.8V22h1.8v-7.8h-1.5l-2.1 1 .3 1.3zM12.1 38.5l.7-.6c1.1-1 2.1-2.1 2.1-3.4 0-1.4-1-2.4-2.7-2.4-1.1 0-2 .4-2.6.8l.5 1.3c.4-.3 1-.6 1.7-.6.9 0 1.3.5 1.3 1.1 0 .9-.9 1.8-2.6 3.3l-1 .9V40H15v-1.5h-2.9zM13.3 53.9c1-.4 1.4-1 1.4-1.8 0-1.1-.9-1.9-2.6-1.9-1 0-1.9.3-2.4.6l.4 1.3c.3-.2 1-.5 1.6-.5.8 0 1.2.3 1.2.8 0 .7-.8.9-1.4.9h-.7v1.3h.7c.8 0 1.6.3 1.6 1.1 0 .6-.5 1-1.4 1-.7 0-1.5-.3-1.8-.5l-.4 1.4c.5.3 1.3.6 2.3.6 2 0 3.2-1 3.2-2.4 0-1.1-.8-1.8-1.7-1.9z"></path></symbol><symbol id="trumbowyg-p" viewBox="0 0 72 72"><path d="M47.8 15.1H30.1c-4.7 0-8.5 3.7-8.5 8.4s3.7 8.4 8.4 8.4v25h7V19.8h3v37.1h4.1V19.8h3.7v-4.7z"></path></symbol><symbol id="trumbowyg-redo" viewBox="0 0 72 72"><path d="M10.8 51.2c0-5.1 2.1-9.7 5.4-13.1 3.3-3.3 8-5.4 13.1-5.4H46v-12L61.3 36 45.9 51.3V39.1H29.3c-3.3 0-6.4 1.3-8.5 3.5-2.2 2.2-3.5 5.2-3.5 8.5h-6.5z"></path></symbol><symbol id="trumbowyg-removeformat" viewBox="0 0 72 72"><path d="M58.2 54.6L52 48.5l3.6-3.6 6.1 6.1 6.4-6.4 3.8 3.8-6.4 6.4 6.1 6.1-3.6 3.6-6.1-6.1-6.4 6.4-3.7-3.8 6.4-6.4zM21.7 52.1H50V57H21.7zM18.8 15.2h34.1v6.4H39.5v24.2h-7.4V21.5H18.8v-6.3z"></path></symbol><symbol id="trumbowyg-strikethrough" viewBox="0 0 72 72"><path d="M45.8 45c0 1-.3 1.9-.9 2.8-.6.9-1.6 1.6-3 2.1s-3.1.8-5 .8c-2.1 0-4-.4-5.7-1.1-1.7-.7-2.9-1.7-3.6-2.7-.8-1.1-1.3-2.6-1.5-4.5l-.1-.8-6.7.6v.9c.1 2.8.9 5.4 2.3 7.6 1.5 2.3 3.5 4 6.1 5.1 2.6 1.1 5.7 1.6 9.4 1.6 2.9 0 5.6-.5 8-1.6 2.4-1.1 4.3-2.7 5.6-4.7 1.3-2 2-4.2 2-6.5 0-1.6-.3-3.1-.9-4.5l-.2-.6H44c0 .1 1.8 2.3 1.8 5.5zM29 28.9c-.8-.8-1.2-1.7-1.2-2.9 0-.7.1-1.3.4-1.9.3-.6.7-1.1 1.4-1.6.6-.5 1.4-.9 2.5-1.1 1.1-.3 2.4-.4 3.9-.4 2.9 0 5 .6 6.3 1.7 1.3 1.1 2.1 2.7 2.4 5.1l.1.9 6.8-.5v-.9c-.1-2.5-.8-4.7-2.1-6.7s-3.2-3.5-5.6-4.5c-2.4-1-5.1-1.5-8.1-1.5-2.8 0-5.3.5-7.6 1.4-2.3 1-4.2 2.4-5.4 4.3-1.2 1.9-1.9 3.9-1.9 6.1 0 1.7.4 3.4 1.2 4.9l.3.5h11.8c-2.3-.9-3.9-1.7-5.2-2.9zm13.3-6.2zM22.7 20.3zM13 34.1h46.1v3.4H13z"></path></symbol><symbol id="trumbowyg-fontsize" viewBox="0 0 24 24"><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"></path></symbol><symbol id="trumbowyg-strong" viewBox="0 0 72 72"><path d="M51.1 37.8c-1.1-1.4-2.5-2.5-4.2-3.3 1.2-.8 2.1-1.8 2.8-3 1-1.6 1.5-3.5 1.5-5.3 0-2-.6-4-1.7-5.8-1.1-1.8-2.8-3.2-4.8-4.1-2-.9-4.6-1.3-7.8-1.3h-16v42h16.3c2.6 0 4.8-.2 6.7-.7 1.9-.5 3.4-1.2 4.7-2.1 1.3-1 2.4-2.4 3.2-4.1.9-1.7 1.3-3.6 1.3-5.7.2-2.5-.5-4.7-2-6.6zM40.8 50.2c-.6.1-1.8.2-3.4.2h-9V38.5h8.3c2.5 0 4.4.2 5.6.6 1.2.4 2 1 2.7 2 .6.9 1 2 1 3.3 0 1.1-.2 2.1-.7 2.9-.5.9-1 1.5-1.7 1.9-.8.4-1.7.8-2.8 1zm2.6-20.4c-.5.7-1.3 1.3-2.5 1.6-.8.3-2.5.4-4.8.4h-7.7V21.6h7.1c1.4 0 2.6 0 3.6.1s1.7.2 2.2.4c1 .3 1.7.8 2.2 1.7.5.9.8 1.8.8 3-.1 1.3-.4 2.2-.9 3z"></path></symbol><symbol id="trumbowyg-subscript" viewBox="0 0 72 72"><path d="M32 15h7.8L56 57.1h-7.9L44.3 46H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1zM58.7 59.9c.6-1.4 2-2.8 4.1-4.4 1.9-1.3 3.1-2.3 3.7-2.9.8-.9 1.3-1.9 1.3-3 0-.9-.2-1.6-.7-2.2-.5-.6-1.2-.9-2.1-.9-1.2 0-2.1.5-2.5 1.4-.3.5-.4 1.4-.5 2.5h-4c.1-1.8.4-3.2 1-4.3 1.1-2.1 3-3.1 5.8-3.1 2.2 0 3.9.6 5.2 1.8 1.3 1.2 1.9 2.8 1.9 4.8 0 1.5-.5 2.9-1.4 4.1-.6.8-1.6 1.7-3 2.6L66 57.7c-1 .7-1.7 1.2-2.1 1.6-.4.3-.7.7-1 1.1H72V64H57.8c0-1.5.3-2.8.9-4.1z"></path></symbol><symbol id="trumbowyg-superscript" viewBox="0 0 72 72"><path d="M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1zM49.6 28.8c.5-1.1 1.6-2.3 3.4-3.6 1.5-1.1 2.5-1.9 3-2.4.7-.7 1-1.6 1-2.4 0-.7-.2-1.3-.6-1.8-.4-.5-1-.7-1.7-.7-1 0-1.7.4-2.1 1.1-.2.4-.3 1.1-.4 2.1H49c.1-1.5.3-2.6.8-3.5.9-1.7 2.5-2.6 4.8-2.6 1.8 0 3.2.5 4.3 1.5 1.1 1 1.6 2.3 1.6 4 0 1.3-.4 2.4-1.1 3.4-.5.7-1.3 1.4-2.4 2.2l-1.3 1c-.8.6-1.4 1-1.7 1.3-.3.3-.6.6-.8.9h7.4v3H48.8c0-1.3.3-2.4.8-3.5z"></path></symbol><symbol id="trumbowyg-table" viewBox="0 0 72 72"><path d="M25.686 51.38v-6.347q0-.462-.297-.76-.298-.297-.761-.297H14.04q-.463 0-.761.297-.298.298-.298.76v6.346q0 .463.298.76.298.298.76.298h10.589q.463 0 .76-.298.298-.297.298-.76zm0-12.692v-6.346q0-.463-.297-.76-.298-.298-.761-.298H14.04q-.463 0-.761.298-.298.297-.298.76v6.346q0 .462.298.76.298.297.76.297h10.589q.463 0 .76-.297.298-.298.298-.76zm16.94 12.691v-6.346q0-.462-.297-.76-.298-.297-.761-.297H30.98q-.463 0-.76.297-.299.298-.299.76v6.346q0 .463.298.76.298.298.761.298h10.588q.463 0 .76-.298.299-.297.299-.76zm-16.94-25.383v-6.345q0-.463-.297-.76-.298-.298-.761-.298H14.04q-.463 0-.761.297-.298.298-.298.76v6.346q0 .463.298.76.298.298.76.298h10.589q.463 0 .76-.298.298-.297.298-.76zm16.94 12.692v-6.346q0-.463-.297-.76-.298-.298-.761-.298H30.98q-.463 0-.76.298-.299.297-.299.76v6.346q0 .462.298.76.298.297.761.297h10.588q.463 0 .76-.297.299-.298.299-.76zm16.94 12.691v-6.346q0-.462-.297-.76-.298-.297-.76-.297H47.92q-.463 0-.76.297-.298.298-.298.76v6.346q0 .463.297.76.298.298.761.298h10.588q.463 0 .761-.298.298-.297.298-.76zm-16.94-25.383v-6.345q0-.463-.297-.76-.298-.298-.761-.298H30.98q-.463 0-.76.297-.299.298-.299.76v6.346q0 .463.298.76.298.298.761.298h10.588q.463 0 .76-.298.299-.297.299-.76zm16.94 12.692v-6.346q0-.463-.297-.76-.298-.298-.76-.298H47.92q-.463 0-.76.298-.298.297-.298.76v6.346q0 .462.297.76.298.297.761.297h10.588q.463 0 .761-.297.298-.298.298-.76zm0-12.692v-6.345q0-.463-.297-.76-.298-.298-.76-.298H47.92q-.463 0-.76.297-.298.298-.298.76v6.346q0 .463.297.76.298.298.761.298h10.588q.463 0 .761-.298.298-.297.298-.76zm4.236-10.576v35.96q0 2.18-1.555 3.734-1.555 1.553-3.739 1.553H14.04q-2.184 0-3.739-1.553-1.555-1.553-1.555-3.735V15.42q0-2.181 1.555-3.735 1.555-1.553 3.739-1.553h44.468q2.184 0 3.739 1.553 1.555 1.554 1.555 3.735z"></path></symbol><symbol id="trumbowyg-underline" viewBox="0 0 72 72"><path d="M36 35zM15.2 55.9h41.6V59H15.2zM21.1 13.9h6.4v21.2c0 1.2.1 2.5.2 3.7.1 1.3.5 2.4 1 3.4.6 1 1.4 1.8 2.6 2.5 1.1.6 2.7 1 4.8 1 2.1 0 3.7-.3 4.8-1 1.1-.6 2-1.5 2.6-2.5.6-1 .9-2.1 1-3.4.1-1.3.2-2.5.2-3.7V13.9H51v23.3c0 2.3-.4 4.4-1.1 6.1-.7 1.7-1.7 3.2-3 4.4-1.3 1.2-2.9 2-4.7 2.6-1.8.6-3.9.9-6.1.9-2.2 0-4.3-.3-6.1-.9-1.8-.6-3.4-1.5-4.7-2.6-1.3-1.2-2.3-2.6-3-4.4-.7-1.7-1.1-3.8-1.1-6.1V13.9z"></path></symbol><symbol id="trumbowyg-undo" viewBox="0 0 72 72"><path d="M61.2 51.2c0-5.1-2.1-9.7-5.4-13.1-3.3-3.3-8-5.4-13.1-5.4H26.1v-12L10.8 36l15.3 15.3V39.1h16.7c3.3 0 6.4 1.3 8.5 3.5 2.2 2.2 3.5 5.2 3.5 8.5h6.4z"></path></symbol><symbol id="trumbowyg-unlink" viewBox="0 0 72 72"><path d="M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z"></path><path d="M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM41.3 55.8v-5h22.2v5H41.3z"></path></symbol><symbol id="trumbowyg-unordered-list" viewBox="0 0 72 72"><path d="M27 14h36v8H27zM27 50h36v8H27zM9 50h9v8H9zM9 32h9v8H9zM9 14h9v8H9zM27 32h36v8H27z"></path></symbol><symbol id="trumbowyg-view-html" viewBox="0 0 72 72"><path fill="none" stroke="currentColor" stroke-width="8" stroke-miterlimit="10" d="M26.9 17.9L9 36.2 26.9 54M45 54l17.9-18.3L45 17.9"></path></symbol><symbol id="trumbowyg-base64" viewBox="0 0 72 72"><path d="M64 17v38H8V17h56m8-8H0v54h72V9z"></path><path d="M29.9 28.9c-.5-.5-1.1-.8-1.8-.8s-1.4.2-1.9.7c-.5.4-.9 1-1.2 1.6-.3.6-.5 1.3-.6 2.1-.1.7-.2 1.4-.2 1.9l.1.1c.6-.8 1.2-1.4 2-1.8.8-.4 1.7-.5 2.7-.5.9 0 1.8.2 2.6.6.8.4 1.6.9 2.2 1.5.6.6 1 1.3 1.2 2.2.3.8.4 1.6.4 2.5 0 1.1-.2 2.1-.5 3-.3.9-.8 1.7-1.5 2.4-.6.7-1.4 1.2-2.3 1.6-.9.4-1.9.6-3 .6-1.6 0-2.8-.3-3.9-.9-1-.6-1.8-1.4-2.5-2.4-.6-1-1-2.1-1.3-3.4-.2-1.3-.4-2.6-.4-3.9 0-1.3.1-2.6.4-3.8.3-1.3.8-2.4 1.4-3.5.7-1 1.5-1.9 2.5-2.5 1-.6 2.3-1 3.8-1 .9 0 1.7.1 2.5.4.8.3 1.4.6 2 1.1.6.5 1.1 1.1 1.4 1.8.4.7.6 1.5.7 2.5h-4c0-1-.3-1.6-.8-2.1zm-3.5 6.8c-.4.2-.8.5-1 .8-.3.4-.5.8-.6 1.2-.1.5-.2 1-.2 1.5s.1.9.2 1.4c.1.5.4.9.6 1.2.3.4.6.7 1 .9.4.2.9.3 1.4.3.5 0 1-.1 1.3-.3.4-.2.7-.5 1-.9.3-.4.5-.8.6-1.2.1-.5.2-.9.2-1.4 0-.5-.1-1-.2-1.4-.1-.5-.3-.9-.6-1.2-.3-.4-.6-.7-1-.9-.4-.2-.9-.3-1.4-.3-.4 0-.9.1-1.3.3zM36.3 41.3v-3.8l9-12.1H49v12.4h2.7v3.5H49v4.8h-4v-4.8h-8.7zM45 30.7l-5.3 7.2h5.4l-.1-7.2z"></path></symbol><symbol id="trumbowyg-back-color" viewBox="0 0 72 72"><path d="M36.5 22.3l-6.3 18.1H43l-6.3-18.1z"></path><path d="M9 8.9v54.2h54.1V8.9H9zm39.9 48.2L45 46H28.2l-3.9 11.1h-7.6L32.8 15h7.8l16.2 42.1h-7.9z"></path></symbol><symbol id="trumbowyg-fore-color" viewBox="0 0 72 72"><path d="M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1z"></path></symbol><symbol id="trumbowyg-emoji" viewBox="0 0 72 72"><path d="M36.05 9C21.09 9 8.949 21.141 8.949 36.101c0 14.96 12.141 27.101 27.101 27.101 14.96 0 27.101-12.141 27.101-27.101S51.01 9 36.05 9zm9.757 15.095c2.651 0 4.418 1.767 4.418 4.418s-1.767 4.418-4.418 4.418-4.418-1.767-4.418-4.418 1.767-4.418 4.418-4.418zm-19.479 0c2.651 0 4.418 1.767 4.418 4.418s-1.767 4.418-4.418 4.418-4.418-1.767-4.418-4.418 1.767-4.418 4.418-4.418zm9.722 30.436c-14.093 0-16.261-13.009-16.261-13.009h32.522S50.143 54.531 36.05 54.531z"></path></symbol><symbol id="trumbowyg-insert-audio" viewBox="0 0 8 8"><path d="M3.344 0L2 2H0v4h2l1.344 2H4V0h-.656zM5 1v1c.152 0 .313.026.469.063H5.5c.86.215 1.5.995 1.5 1.938a1.99 1.99 0 0 1-2 2.001v1a2.988 2.988 0 0 0 3-3 2.988 2.988 0 0 0-3-3zm0 2v2l.25-.031C5.683 4.851 6 4.462 6 4c0-.446-.325-.819-.75-.938v-.031h-.031L5 3z"></path></symbol><symbol id="trumbowyg-noembed" viewBox="0 0 72 72"><path d="M31.5 33.6V25l11 11-11 11v-8.8z"></path><path d="M64 17v38H8V17h56m8-8H0v54h72V9z"></path></symbol><symbol id="trumbowyg-preformatted" viewBox="0 0 72 72"><path d="M10.3 33.5c.4 0 .9-.1 1.5-.2s1.2-.3 1.8-.7c.6-.3 1.1-.8 1.5-1.3.4-.5.6-1.3.6-2.1V17.1c0-1.4.3-2.6.8-3.6s1.2-1.9 2-2.5c.8-.7 1.6-1.2 2.5-1.5.9-.3 1.6-.5 2.2-.5h5.3v5.3h-3.2c-.7 0-1.3.1-1.8.4-.4.3-.8.6-1 1-.2.4-.4.9-.4 1.3-.1.5-.1.9-.1 1.4v11.4c0 1.2-.2 2.1-.7 2.9-.5.8-1 1.4-1.7 1.8-.6.4-1.3.8-2 1-.7.2-1.3.3-1.7.4v.1c.5 0 1 .1 1.7.3.7.2 1.3.5 2 .9.6.5 1.2 1.1 1.7 1.9.5.8.7 2 .7 3.4v11.1c0 .4 0 .9.1 1.4.1.5.2.9.4 1.3s.6.7 1 1c.4.3 1 .4 1.8.4h3.2V63h-5.3c-.6 0-1.4-.2-2.2-.5-.9-.3-1.7-.8-2.5-1.5s-1.4-1.5-2-2.5c-.5-1-.8-2.2-.8-3.6V43.5c0-.9-.2-1.7-.6-2.3-.4-.6-.9-1.1-1.5-1.5-.6-.4-1.2-.6-1.8-.7-.6-.1-1.1-.2-1.5-.2v-5.3zM61.8 38.7c-.4 0-1 .1-1.6.2-.6.1-1.2.4-1.8.7-.6.3-1.1.7-1.5 1.3-.4.5-.6 1.3-.6 2.1v12.1c0 1.4-.3 2.6-.8 3.6s-1.2 1.9-2 2.5c-.8.7-1.6 1.2-2.5 1.5-.9.3-1.6.5-2.2.5h-5.3v-5.3h3.2c.7 0 1.3-.1 1.8-.4.4-.3.8-.6 1-1 .2-.4.4-.9.4-1.3.1-.5.1-.9.1-1.4V42.3c0-1.2.2-2.1.7-2.9.5-.8 1-1.4 1.7-1.8.6-.4 1.3-.8 2-1 .7-.2 1.3-.3 1.7-.4v-.1c-.5 0-1-.1-1.7-.3-.7-.2-1.3-.5-2-.9-.6-.4-1.2-1.1-1.7-1.9-.5-.8-.7-2-.7-3.4V18.5c0-.4 0-.9-.1-1.4-.1-.5-.2-.9-.4-1.3s-.6-.7-1-1c-.4-.3-1-.4-1.8-.4h-3.2V9.1h5.3c.6 0 1.4.2 2.2.5.9.3 1.7.8 2.5 1.5s1.4 1.5 2 2.5c.5 1 .8 2.2.8 3.6v11.6c0 .9.2 1.7.6 2.3.4.6.9 1.1 1.5 1.5.6.4 1.2.6 1.8.7.6.1 1.2.2 1.6.2v5.2z"></path></symbol><symbol id="trumbowyg-upload" viewBox="0 0 72 72"><path d="M64 27v28H8V27H0v36h72V27h-8z"></path><path d="M32.1 6.7h8v33.6h-8z"></path><path d="M48 35.9L36 49.6 24 36h24z"></path></symbol></svg>'
  }, function (e, t) {
    /**
     * Trumbowyg v2.3.0 - A lightweight WYSIWYG editor
     * Trumbowyg core file
     * ------------------------
     * @link http://alex-d.github.io/Trumbowyg
     * @license MIT
     * @author Alexandre Demode (Alex-D)
     *         Twitter : @AlexandreDemode
     *         Website : alex-d.fr
     */
    jQuery.trumbowyg = {
        langs: {
          en: {
            viewHTML: "View HTML",
            undo: "Undo",
            redo: "Redo",
            formatting: "Formatting",
            p: "Paragraph",
            blockquote: "Quote",
            code: "Code",
            header: "Header",
            bold: "Bold",
            italic: "Italic",
            strikethrough: "Stroke",
            underline: "Underline",
            strong: "Strong",
            em: "Emphasis",
            del: "Deleted",
            superscript: "Superscript",
            subscript: "Subscript",
            unorderedList: "Unordered list",
            orderedList: "Ordered list",
            insertImage: "Insert Image",
            link: "Link",
            createLink: "Insert link",
            unlink: "Remove link",
            justifyLeft: "Align Left",
            justifyCenter: "Align Center",
            justifyRight: "Align Right",
            justifyFull: "Align Justify",
            horizontalRule: "Insert horizontal rule",
            removeformat: "Remove format",
            fullscreen: "Fullscreen",
            close: "Close",
            submit: "Confirm",
            reset: "Cancel",
            required: "Required",
            description: "Description",
            title: "Title",
            text: "Text",
            target: "Target"
          }
        },
        plugins: {},
        svgPath: null
      },
      function (e, t, n, r) {
        "use strict";
        r.fn.trumbowyg = function (e, t) {
          var n = "trumbowyg";
          if (e === Object(e) || !e) return this.each(function () {
            r(this).data(n) || r(this).data(n, new o(this, e))
          });
          if (1 === this.length) try {
            var a = r(this).data(n);
            switch (e) {
            case "execCmd":
              return a.execCmd(t.cmd, t.param, t.forceCss);
            case "openModal":
              return a.openModal(t.title, t.content);
            case "closeModal":
              return a.closeModal();
            case "openModalInsert":
              return a.openModalInsert(t.title, t.fields, t.callback);
            case "saveRange":
              return a.saveRange();
            case "getRange":
              return a.range;
            case "getRangeText":
              return a.getRangeText();
            case "restoreRange":
              return a.restoreRange();
            case "enable":
              return a.toggleDisable(!1);
            case "disable":
              return a.toggleDisable(!0);
            case "destroy":
              return a.destroy();
            case "empty":
              return a.empty();
            case "html":
              return a.html(t)
            }
          } catch (e) {}
          return !1
        };
        var o = function (e, o) {
          var a = this,
            i = "trumbowyg-icons";
          a.doc = e.ownerDocument || n, a.$ta = r(e), a.$c = r(e), o = o || {}, null != o.lang || null != r.trumbowyg.langs[o.lang] ? a.lang = r.extend(!0, {}, r.trumbowyg.langs.en, r.trumbowyg.langs[o.lang]) : a.lang = r.trumbowyg.langs.en;
          var s = null != r.trumbowyg.svgPath ? r.trumbowyg.svgPath : o.svgPath;
          if (a.hasSvg = s !== !1, a.svgPath = a.doc.querySelector("base") ? t.location.href.split("#")[0] : "", 0 === r("#" + i, a.doc).length && s !== !1) {
            if (null == s) try {
              throw new Error
            } catch (e) {
              var l = e.stack.split("\n");
              for (var c in l)
                if (l[c].match(/http[s]?:\/\//)) {
                  s = l[Number(c)].match(/((http[s]?:\/\/.+\/)([^\/]+\.js))(\?.*)?:/)[1].split("/"), s.pop(), s = s.join("/") + "/ui/icons.svg";
                  break
                }
            }
            var u = a.doc.createElement("div");
            u.id = i, a.doc.body.insertBefore(u, a.doc.body.childNodes[0]), r.ajax({
              async: !0,
              type: "GET",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              dataType: "xml",
              url: s,
              data: null,
              beforeSend: null,
              complete: null,
              success: function (e) {
                u.innerHTML = (new XMLSerializer).serializeToString(e.documentElement)
              }
            })
          }
          var d = a.lang.header,
            p = function () {
              return (t.chrome || t.Intl && Intl.v8BreakIterator) && "CSS" in t
            };
          a.btnsDef = {
            viewHTML: {
              fn: "toggle"
            },
            undo: {
              isSupported: p,
              key: "Z"
            },
            redo: {
              isSupported: p,
              key: "Y"
            },
            p: {
              fn: "formatBlock"
            },
            blockquote: {
              fn: "formatBlock"
            },
            h1: {
              fn: "formatBlock",
              title: d + " 1"
            },
            h2: {
              fn: "formatBlock",
              title: d + " 2"
            },
            h3: {
              fn: "formatBlock",
              title: d + " 3"
            },
            h4: {
              fn: "formatBlock",
              title: d + " 4"
            },
            subscript: {
              tag: "sub"
            },
            superscript: {
              tag: "sup"
            },
            bold: {
              key: "B",
              tag: "b"
            },
            italic: {
              key: "I",
              tag: "i"
            },
            underline: {
              tag: "u"
            },
            strikethrough: {
              tag: "strike"
            },
            strong: {
              fn: "bold",
              key: "B"
            },
            em: {
              fn: "italic",
              key: "I"
            },
            del: {
              fn: "strikethrough"
            },
            createLink: {
              key: "K",
              tag: "a"
            },
            unlink: {},
            insertImage: {},
            justifyLeft: {
              tag: "left",
              forceCss: !0
            },
            justifyCenter: {
              tag: "center",
              forceCss: !0
            },
            justifyRight: {
              tag: "right",
              forceCss: !0
            },
            justifyFull: {
              tag: "justify",
              forceCss: !0
            },
            unorderedList: {
              fn: "insertUnorderedList",
              tag: "ul"
            },
            orderedList: {
              fn: "insertOrderedList",
              tag: "ol"
            },
            horizontalRule: {
              fn: "insertHorizontalRule"
            },
            removeformat: {},
            fullscreen: {
              class: "trumbowyg-not-disable"
            },
            close: {
              fn: "destroy",
              class: "trumbowyg-not-disable"
            },
            formatting: {
              dropdown: ["p", "blockquote", "h1", "h2", "h3", "h4"],
              ico: "p"
            },
            link: {
              dropdown: ["createLink", "unlink"]
            }
          }, a.o = r.extend(!0, {}, {
            lang: "en",
            fixedBtnPane: !1,
            fixedFullWidth: !1,
            autogrow: !1,
            prefix: "trumbowyg-",
            semantic: !0,
            resetCss: !1,
            removeformatPasted: !1,
            tagsToRemove: [],
            btnsGrps: {
              design: ["bold", "italic", "underline", "strikethrough"],
              semantic: ["strong", "em", "del"],
              justify: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
              lists: ["unorderedList", "orderedList"]
            },
            btns: [
              ["viewHTML"],
              ["undo", "redo"],
              ["formatting"], "btnGrp-semantic", ["superscript", "subscript"],
              ["link"],
              ["insertImage"], "btnGrp-justify", "btnGrp-lists", ["horizontalRule"],
              ["removeformat"],
              ["fullscreen"]
            ],
            btnsDef: {},
            inlineElementsSelector: "a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",
            pasteHandlers: [],
            imgDblClickHandler: function () {
              var e = r(this),
                t = e.attr("src"),
                n = "(Base64)";
              return 0 === t.indexOf("data:image") && (t = n), a.openModalInsert(a.lang.insertImage, {
                url: {
                  label: "URL",
                  value: t,
                  required: !0
                },
                alt: {
                  label: a.lang.description,
                  value: e.attr("alt")
                }
              }, function (t) {
                return t.src !== n && e.attr({
                  src: t.src
                }), e.attr({
                  alt: t.alt
                }), !0
              }), !1
            },
            plugins: {}
          }, o), a.disabled = a.o.disabled || "TEXTAREA" === e.nodeName && e.disabled, o.btns ? a.o.btns = o.btns : a.o.semantic || (a.o.btns[4] = "btnGrp-design"), r.each(a.o.btnsDef, function (e, t) {
            a.addBtnDef(e, t)
          }), a.keys = [], a.tagToButton = {}, a.tagHandlers = [], a.pasteHandlers = [].concat(a.o.pasteHandlers), a.init()
        };
        o.prototype = {
          init: function () {
            var e = this;
            e.height = e.$ta.height(), e.initPlugins();
            try {
              e.doc.execCommand("enableObjectResizing", !1, !1)
            } catch (e) {}
            e.doc.execCommand("defaultParagraphSeparator", !1, "p"), e.buildEditor(), e.buildBtnPane(), e.fixedBtnPaneEvents(), e.buildOverlay(), setTimeout(function () {
              e.disabled && e.toggleDisable(!0), e.$c.trigger("tbwinit")
            })
          },
          addBtnDef: function (e, t) {
            this.btnsDef[e] = t
          },
          buildEditor: function () {
            var e = this,
              n = e.o.prefix,
              o = "";
            e.$box = r("<div/>", {
              class: n + "box " + n + "editor-visible " + n + e.o.lang + " trumbowyg"
            }), e.isTextarea = e.$ta.is("textarea"), e.isTextarea ? (o = e.$ta.val(), e.$ed = r("<div/>"), e.$box.insertAfter(e.$ta).append(e.$ed, e.$ta)) : (e.$ed = e.$ta, o = e.$ed.html(), e.$ta = r("<textarea/>", {
              name: e.$ta.attr("id"),
              height: e.height
            }).val(o), e.$box.insertAfter(e.$ed).append(e.$ta, e.$ed), e.syncCode()), e.$ta.addClass(n + "textarea").attr("tabindex", -1), e.$ed.addClass(n + "editor").attr({
              contenteditable: !0,
              dir: e.lang._dir || "ltr"
            }).html(o), e.o.tabindex && e.$ed.attr("tabindex", e.o.tabindex), e.$c.is("[placeholder]") && e.$ed.attr("placeholder", e.$c.attr("placeholder")), e.o.resetCss && e.$ed.addClass(n + "reset-css"), e.o.autogrow || e.$ta.add(e.$ed).css({
              height: e.height
            }), e.semanticCode();
            var a, i = !1,
              s = !1;
            e.$ed.on("dblclick", "img", e.o.imgDblClickHandler).on("keydown", function (t) {
              if (s = 229 === t.which, t.ctrlKey) {
                i = !0;
                var n = e.keys[String.fromCharCode(t.which).toUpperCase()];
                try {
                  return e.execCmd(n.fn, n.param), !1
                } catch (e) {}
              }
            }).on("keyup input", function (t) {
              t.which >= 37 && t.which <= 40 || (!t.ctrlKey || 89 !== t.which && 90 !== t.which ? i || 17 === t.which || s || (e.semanticCode(!1, 13 === t.which), e.$c.trigger("tbwchange")) : e.$c.trigger("tbwchange"), setTimeout(function () {
                i = !1
              }, 200))
            }).on("mouseup keydown keyup", function () {
              clearTimeout(a), a = setTimeout(function () {
                e.updateButtonPaneStatus()
              }, 50)
            }).on("focus blur", function (t) {
              e.$c.trigger("tbw" + t.type), "blur" === t.type && r("." + n + "active-button", e.$btnPane).removeClass(n + "active-button " + n + "active")
            }).on("cut", function () {
              setTimeout(function () {
                e.semanticCode(!1, !0), e.$c.trigger("tbwchange")
              }, 0)
            }).on("paste", function (n) {
              if (e.o.removeformatPasted) {
                n.preventDefault();
                try {
                  var o = t.clipboardData.getData("Text");
                  try {
                    e.doc.selection.createRange().pasteHTML(o)
                  } catch (t) {
                    e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(o))
                  }
                } catch (t) {
                  e.execCmd("insertText", (n.originalEvent || n).clipboardData.getData("text/plain"))
                }
              }
              r.each(e.pasteHandlers, function (e, t) {
                t(n)
              }), setTimeout(function () {
                e.semanticCode(!1, !0), e.$c.trigger("tbwpaste", n)
              }, 0)
            }), e.$ta.on("keyup paste", function () {
              e.$c.trigger("tbwchange")
            }), e.$box.on("keydown", function (t) {
              if (27 === t.which && 1 === r("." + n + "modal-box", e.$box).length) return e.closeModal(), !1
            })
          },
          buildBtnPane: function () {
            var e = this,
              t = e.o.prefix,
              n = e.$btnPane = r("<div/>", {
                class: t + "button-pane"
              });
            r.each(e.o.btns, function (o, a) {
              try {
                var i = a.split("btnGrp-");
                null != i[1] && (a = e.o.btnsGrps[i[1]])
              } catch (e) {}
              r.isArray(a) || (a = [a]);
              var s = r("<div/>", {
                class: t + "button-group " + (a.indexOf("fullscreen") >= 0 ? t + "right" : "")
              });
              r.each(a, function (t, n) {
                try {
                  var r;
                  e.isSupportedBtn(n) && (r = e.buildBtn(n)), s.append(r)
                } catch (e) {}
              }), n.append(s)
            }), e.$box.prepend(n)
          },
          buildBtn: function (e) {
            var t = this,
              n = t.o.prefix,
              o = t.btnsDef[e],
              a = o.dropdown,
              i = null == o.hasIcon || o.hasIcon,
              s = t.lang[e] || e,
              l = r("<button/>", {
                type: "button",
                class: n + e + "-button " + (o.class || "") + (i ? "" : " " + n + "textual-button"),
                html: t.hasSvg && i ? '<svg><use xlink:href="' + t.svgPath + "#" + n + (o.ico || e).replace(/([A-Z]+)/g, "-$1").toLowerCase() + '"/></svg>' : o.text || o.title || t.lang[e] || e,
                title: (o.title || o.text || s) + (o.key ? " (Ctrl + " + o.key + ")" : ""),
                tabindex: -1,
                mousedown: function () {
                  return a && !r("." + e + "-" + n + "dropdown", t.$box).is(":hidden") || r("body", t.doc).trigger("mousedown"), !(t.$btnPane.hasClass(n + "disable") && !r(this).hasClass(n + "active") && !r(this).hasClass(n + "not-disable")) && (t.execCmd(!!a && "dropdown" || o.fn || e, o.param || e, o.forceCss || !1), !1)
                }
              });
            if (a) {
              l.addClass(n + "open-dropdown");
              var c = n + "dropdown",
                u = r("<div/>", {
                  class: c + "-" + e + " " + c + " " + n + "fixed-top",
                  "data-dropdown": e
                });
              r.each(a, function (e, n) {
                t.btnsDef[n] && t.isSupportedBtn(n) && u.append(t.buildSubBtn(n))
              }), t.$box.append(u.hide())
            } else o.key && (t.keys[o.key] = {
              fn: o.fn || e,
              param: o.param || e
            });
            return a || (t.tagToButton[(o.tag || e).toLowerCase()] = e), l
          },
          buildSubBtn: function (e) {
            var t = this,
              n = t.o.prefix,
              o = t.btnsDef[e],
              a = null == o.hasIcon || o.hasIcon;
            return o.key && (t.keys[o.key] = {
              fn: o.fn || e,
              param: o.param || e
            }), t.tagToButton[(o.tag || e).toLowerCase()] = e, r("<button/>", {
              type: "button",
              class: n + e + "-dropdown-button" + (o.ico ? " " + n + o.ico + "-button" : ""),
              html: t.hasSvg && a ? '<svg><use xlink:href="' + t.svgPath + "#" + n + (o.ico || e).replace(/([A-Z]+)/g, "-$1").toLowerCase() + '"/></svg>' + (o.text || o.title || t.lang[e] || e) : o.text || o.title || t.lang[e] || e,
              title: o.key ? " (Ctrl + " + o.key + ")" : null,
              style: o.style || null,
              mousedown: function () {
                return r("body", t.doc).trigger("mousedown"), t.execCmd(o.fn || e, o.param || e, o.forceCss || !1), !1
              }
            })
          },
          isSupportedBtn: function (e) {
            try {
              return this.btnsDef[e].isSupported()
            } catch (e) {}
            return !0
          },
          buildOverlay: function () {
            var e = this;
            return e.$overlay = r("<div/>", {
              class: e.o.prefix + "overlay"
            }).css({
              top: e.$btnPane.outerHeight(),
              height: e.$ed.outerHeight() + 1 + "px"
            }).appendTo(e.$box), e.$overlay
          },
          showOverlay: function () {
            var e = this;
            r(t).trigger("scroll"), e.$overlay.fadeIn(200), e.$box.addClass(e.o.prefix + "box-blur")
          },
          hideOverlay: function () {
            var e = this;
            e.$overlay.fadeOut(50), e.$box.removeClass(e.o.prefix + "box-blur")
          },
          fixedBtnPaneEvents: function () {
            var e = this,
              n = e.o.fixedFullWidth,
              o = e.$box;
            e.o.fixedBtnPane && (e.isFixed = !1, r(t).on("scroll resize", function () {
              if (o) {
                e.syncCode();
                var a = r(t).scrollTop(),
                  i = o.offset().top + 1,
                  s = e.$btnPane,
                  l = s.outerHeight() - 2;
                a - i > 0 && a - i - e.height < 0 ? (e.isFixed || (e.isFixed = !0, s.css({
                  position: "fixed",
                  top: 0,
                  left: n ? "0" : "auto",
                  zIndex: 7
                }), r([e.$ta, e.$ed]).css({
                  marginTop: s.height()
                })), s.css({
                  width: n ? "100%" : o.width() - 1 + "px"
                }), r("." + e.o.prefix + "fixed-top", o).css({
                  position: n ? "fixed" : "absolute",
                  top: n ? l : l + (a - i) + "px",
                  zIndex: 15
                })) : e.isFixed && (e.isFixed = !1, s.removeAttr("style"), r([e.$ta, e.$ed]).css({
                  marginTop: 0
                }), r("." + e.o.prefix + "fixed-top", o).css({
                  position: "absolute",
                  top: l
                }))
              }
            }))
          },
          toggleDisable: function (e) {
            var t = this,
              n = t.o.prefix;
            t.disabled = e, e ? t.$ta.attr("disabled", !0) : t.$ta.removeAttr("disabled"), t.$box.toggleClass(n + "disabled", e), t.$ed.attr("contenteditable", !e)
          },
          destroy: function () {
            var e = this,
              t = e.o.prefix,
              n = e.height;
            e.isTextarea ? e.$box.after(e.$ta.css({
              height: n
            }).val(e.html()).removeClass(t + "textarea").show()) : e.$box.after(e.$ed.css({
              height: n
            }).removeClass(t + "editor").removeAttr("contenteditable").html(e.html()).show()), e.$ed.off("dblclick", "img"), e.destroyPlugins(), e.$box.remove(), e.$c.removeData("trumbowyg"), r("body").removeClass(t + "body-fullscreen"), e.$c.trigger("tbwclose")
          },
          empty: function () {
            this.$ta.val(""), this.syncCode(!0)
          },
          toggle: function () {
            var e = this,
              t = e.o.prefix;
            e.semanticCode(!1, !0), setTimeout(function () {
              e.doc.activeElement.blur(), e.$box.toggleClass(t + "editor-hidden " + t + "editor-visible"), e.$btnPane.toggleClass(t + "disable"), r("." + t + "viewHTML-button", e.$btnPane).toggleClass(t + "active"), e.$box.hasClass(t + "editor-visible") ? e.$ta.attr("tabindex", -1) : e.$ta.removeAttr("tabindex")
            }, 0)
          },
          dropdown: function (e) {
            var n = this,
              o = n.doc,
              a = n.o.prefix,
              i = r("[data-dropdown=" + e + "]", n.$box),
              s = r("." + a + e + "-button", n.$btnPane),
              l = i.is(":hidden");
            if (r("body", o).trigger("mousedown"), l) {
              var c = s.offset().left;
              s.addClass(a + "active"), i.css({
                position: "absolute",
                top: s.offset().top - n.$btnPane.offset().top + s.outerHeight(),
                left: n.o.fixedFullWidth && n.isFixed ? c + "px" : c - n.$btnPane.offset().left + "px"
              }).show(), r(t).trigger("scroll"), r("body", o).on("mousedown", function () {
                r("." + a + "dropdown", o).hide(), r("." + a + "active", o).removeClass(a + "active"), r("body", o).off("mousedown")
              })
            }
          },
          html: function (e) {
            var t = this;
            return null != e ? (t.$ta.val(e), t.syncCode(!0), t) : t.$ta.val()
          },
          syncTextarea: function () {
            var e = this;
            e.$ta.val(e.$ed.text().trim().length > 0 || e.$ed.find("hr,img,embed,iframe,input").length > 0 ? e.$ed.html() : "")
          },
          syncCode: function (e) {
            var t = this;
            !e && t.$ed.is(":visible") ? t.syncTextarea() : t.$ed.html(t.$ta.val()), t.o.autogrow && (t.height = t.$ed.height(), t.height !== t.$ta.css("height") && (t.$ta.css({
              height: t.height
            }), t.$c.trigger("tbwresize")))
          },
          semanticCode: function (e, t) {
            var n = this;
            if (n.saveRange(), n.syncCode(e), r(n.o.tagsToRemove.join(","), n.$ed).remove(), n.o.semantic) {
              if (n.semanticTag("b", "strong"), n.semanticTag("i", "em"), t) {
                var o = n.o.inlineElementsSelector,
                  a = ":not(" + o + ")";
                n.$ed.contents().filter(function () {
                  return 3 === this.nodeType && this.nodeValue.trim().length > 0
                }).wrap("<span data-tbw/>");
                var i = function (e) {
                  if (0 !== e.length) {
                    var t = e.nextUntil(a).addBack().wrapAll("<p/>").parent(),
                      n = t.nextAll(o).first();
                    t.next("br").remove(), i(n)
                  }
                };
                i(n.$ed.children(o).first()), n.semanticTag("div", "p", !0), n.$ed.find("p").filter(function () {
                  return (!n.range || this !== n.range.startContainer) && (0 === r(this).text().trim().length && 0 === r(this).children().not("br,span").length)
                }).contents().unwrap(), r("[data-tbw]", n.$ed).contents().unwrap(), n.$ed.find("p:empty").remove()
              }
              n.restoreRange(), n.syncTextarea()
            }
          },
          semanticTag: function (e, t, n) {
            r(e, this.$ed).each(function () {
              var e = r(this);
              e.wrap("<" + t + "/>"), n && r.each(e.prop("attributes"), function () {
                e.parent().attr(this.name, this.value)
              }), e.contents().unwrap()
            })
          },
          createLink: function () {
            for (var e, t, n, o = this, a = o.doc.getSelection(), i = a.focusNode;
              ["A", "DIV"].indexOf(i.nodeName) < 0;) i = i.parentNode;
            if (i && "A" === i.nodeName) {
              var s = r(i);
              e = s.attr("href"), t = s.attr("title"), n = s.attr("target");
              var l = o.doc.createRange();
              l.selectNode(i), a.addRange(l)
            }
            o.saveRange(), o.openModalInsert(o.lang.createLink, {
              url: {
                label: "URL",
                required: !0,
                value: e
              },
              title: {
                label: o.lang.title,
                value: t
              },
              text: {
                label: o.lang.text,
                value: o.getRangeText()
              },
              target: {
                label: o.lang.target,
                value: n
              }
            }, function (e) {
              var t = r(['<a href="', e.url, '">', e.text, "</a>"].join(""));
              return e.title.length > 0 && t.attr("title", e.title), e.target.length > 0 && t.attr("target", e.target), o.range.deleteContents(), o.range.insertNode(t[0]), !0
            })
          },
          unlink: function () {
            var e = this,
              t = e.doc.getSelection(),
              n = t.focusNode;
            if (t.isCollapsed) {
              for (;
                ["A", "DIV"].indexOf(n.nodeName) < 0;) n = n.parentNode;
              if (n && "A" === n.nodeName) {
                var r = e.doc.createRange();
                r.selectNode(n), t.addRange(r)
              }
            }
            e.execCmd("unlink", void 0, void 0, !0)
          },
          insertImage: function () {
            var e = this;
            e.saveRange(), e.openModalInsert(e.lang.insertImage, {
              url: {
                label: "URL",
                required: !0
              },
              alt: {
                label: e.lang.description,
                value: e.getRangeText()
              }
            }, function (t) {
              return e.execCmd("insertImage", t.url), r('img[src="' + t.url + '"]:not([alt])', e.$box).attr("alt", t.alt), !0
            })
          },
          fullscreen: function () {
            var e, n = this,
              o = n.o.prefix,
              a = o + "fullscreen";
            n.$box.toggleClass(a), e = n.$box.hasClass(a), r("body").toggleClass(o + "body-fullscreen", e), r(t).trigger("scroll"), n.$c.trigger("tbw" + (e ? "open" : "close") + "fullscreen")
          },
          execCmd: function (t, n, r, o) {
            var a = this;
            o = !!o || "", "dropdown" !== t && a.$ed.focus();
            try {
              a.doc.execCommand("styleWithCSS", !1, r || !1)
            } catch (e) {}
            try {
              a[t + o](n)
            } catch (r) {
              try {
                t(n)
              } catch (r) {
                "insertHorizontalRule" === t ? n = void 0 : "formatBlock" !== t || e.userAgent.indexOf("MSIE") === -1 && e.appVersion.indexOf("Trident/") === -1 || (n = "<" + n + ">"), a.doc.execCommand(t, !1, n), a.syncCode(), a.semanticCode(!1, !0)
              }
              "dropdown" !== t && (a.updateButtonPaneStatus(), a.$c.trigger("tbwchange"))
            }
          },
          openModal: function (e, n) {
            var o = this,
              a = o.o.prefix;
            if (r("." + a + "modal-box", o.$box).length > 0) return !1;
            o.saveRange(), o.showOverlay(), o.$btnPane.addClass(a + "disable");
            var i = r("<div/>", {
              class: a + "modal " + a + "fixed-top"
            }).css({
              top: o.$btnPane.height()
            }).appendTo(o.$box);
            o.$overlay.one("click", function () {
              return i.trigger("tbwcancel"), !1
            });
            var s = r("<form/>", {
                action: "",
                html: n
              }).on("submit", function () {
                return i.trigger("tbwconfirm"), !1
              }).on("reset", function () {
                return i.trigger("tbwcancel"), !1
              }),
              l = r("<div/>", {
                class: a + "modal-box",
                html: s
              }).css({
                top: "-" + o.$btnPane.outerHeight() + "px",
                opacity: 0
              }).appendTo(i).animate({
                top: 0,
                opacity: 1
              }, 100);
            return r("<span/>", {
              text: e,
              class: a + "modal-title"
            }).prependTo(l), i.height(l.outerHeight() + 10), r("input:first", l).focus(), o.buildModalBtn("submit", l), o.buildModalBtn("reset", l), r(t).trigger("scroll"), i
          },
          buildModalBtn: function (e, t) {
            var n = this,
              o = n.o.prefix;
            return r("<button/>", {
              class: o + "modal-button " + o + "modal-" + e,
              type: e,
              text: n.lang[e] || e
            }).appendTo(r("form", t))
          },
          closeModal: function () {
            var e = this,
              t = e.o.prefix;
            e.$btnPane.removeClass(t + "disable"), e.$overlay.off();
            var n = r("." + t + "modal-box", e.$box);
            n.animate({
              top: "-" + n.height()
            }, 100, function () {
              n.parent().remove(), e.hideOverlay()
            }), e.restoreRange()
          },
          openModalInsert: function (e, t, n) {
            var o = this,
              a = o.o.prefix,
              i = o.lang,
              s = "",
              l = "tbwconfirm";
            return r.each(t, function (e, t) {
              var n = t.label,
                r = t.name || e,
                o = t.attributes || {},
                l = Object.keys(o).map(function (e) {
                  return e + '="' + o[e] + '"'
                }).join(" ");
              s += '<label><input type="' + (t.type || "text") + '" name="' + r + '" value="' + (t.value || "").replace(/"/g, "&quot;") + '"' + l + '><span class="' + a + 'input-infos"><span>' + (n ? i[n] ? i[n] : n : i[e] ? i[e] : e) + "</span></span></label>"
            }), o.openModal(e, s).on(l, function () {
              var e = r("form", r(this)),
                a = !0,
                i = {};
              r.each(t, function (t, n) {
                var s = r('input[name="' + t + '"]', e),
                  l = s.attr("type");
                "checkbox" === l.toLowerCase() ? i[t] = s.is(":checked") : i[t] = r.trim(s.val()), n.required && "" === i[t] ? (a = !1, o.addErrorOnModalField(s, o.lang.required)) : n.pattern && !n.pattern.test(i[t]) && (a = !1, o.addErrorOnModalField(s, n.patternError))
              }), a && (o.restoreRange(), n(i, t) && (o.syncCode(), o.$c.trigger("tbwchange"), o.closeModal(), r(this).off(l)))
            }).one("tbwcancel", function () {
              r(this).off(l), o.closeModal()
            })
          },
          addErrorOnModalField: function (e, t) {
            var n = this.o.prefix,
              o = e.parent();
            e.on("change keyup", function () {
              o.removeClass(n + "input-error")
            }), o.addClass(n + "input-error").find("input+span").append(r("<span/>", {
              class: n + "msg-error",
              text: t
            }))
          },
          saveRange: function () {
            var e = this,
              t = e.doc.getSelection();
            if (e.range = null, t.rangeCount) {
              var n, r = e.range = t.getRangeAt(0),
                o = e.doc.createRange();
              o.selectNodeContents(e.$ed[0]), o.setEnd(r.startContainer, r.startOffset), n = (o + "").length, e.metaRange = {
                start: n,
                end: n + (r + "").length
              }
            }
          },
          restoreRange: function () {
            var e, t = this,
              n = t.metaRange,
              r = t.range,
              o = t.doc.getSelection();
            if (r) {
              if (n && n.start !== n.end) {
                var a, i = 0,
                  s = [t.$ed[0]],
                  l = !1,
                  c = !1;
                for (e = t.doc.createRange(); !c && (a = s.pop());)
                  if (3 === a.nodeType) {
                    var u = i + a.length;
                    !l && n.start >= i && n.start <= u && (e.setStart(a, n.start - i), l = !0), l && n.end >= i && n.end <= u && (e.setEnd(a, n.end - i), c = !0), i = u
                  } else
                    for (var d = a.childNodes, p = d.length; p > 0;) p -= 1, s.push(d[p])
              }
              o.removeAllRanges(), o.addRange(e || r)
            }
          },
          getRangeText: function () {
            return this.range + ""
          },
          updateButtonPaneStatus: function () {
            var e = this,
              t = e.o.prefix,
              n = e.getTagsRecursive(e.doc.getSelection().focusNode),
              o = t + "active-button " + t + "active";
            r("." + t + "active-button", e.$btnPane).removeClass(o), r.each(n, function (n, a) {
              var i = e.tagToButton[a.toLowerCase()],
                s = r("." + t + i + "-button", e.$btnPane);
              if (s.length > 0) s.addClass(o);
              else try {
                s = r("." + t + "dropdown ." + t + i + "-dropdown-button", e.$box);
                var l = s.parent().data("dropdown");
                r("." + t + l + "-button", e.$box).addClass(o)
              } catch (e) {}
            })
          },
          getTagsRecursive: function (e, t) {
            var n = this;
            if (t = t || [], !e) return t;
            e = e.parentNode;
            var o = e.tagName;
            return "DIV" === o ? t : ("P" === o && "" !== e.style.textAlign && t.push(e.style.textAlign), r.each(n.tagHandlers, function (r, o) {
              t = t.concat(o(e, n))
            }), t.push(o), n.getTagsRecursive(e, t))
          },
          initPlugins: function () {
            var e = this;
            e.loadedPlugins = [], r.each(r.trumbowyg.plugins, function (t, n) {
              n.shouldInit && !n.shouldInit(e) || (n.init(e), n.tagHandler && e.tagHandlers.push(n.tagHandler), e.loadedPlugins.push(n))
            })
          },
          destroyPlugins: function () {
            r.each(this.loadedPlugins, function (e, t) {
              t.destroy && t.destroy()
            })
          }
        }
      }(navigator, window, document, jQuery)
  }, function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
      if (u === setTimeout) return setTimeout(e, 0);
      if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
      try {
        return u(e, 0)
      } catch (t) {
        try {
          return u.call(null, e, 0)
        } catch (t) {
          return u.call(this, e, 0)
        }
      }
    }

    function a(e) {
      if (d === clearTimeout) return clearTimeout(e);
      if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
      try {
        return d(e)
      } catch (t) {
        try {
          return d.call(null, e)
        } catch (t) {
          return d.call(this, e)
        }
      }
    }

    function i() {
      m && f && (m = !1, f.length ? h = f.concat(h) : y = -1, h.length && s())
    }

    function s() {
      if (!m) {
        var e = o(i);
        m = !0;
        for (var t = h.length; t;) {
          for (f = h, h = []; ++y < t;) f && f[y].run();
          y = -1, t = h.length
        }
        f = null, m = !1, a(e)
      }
    }

    function l(e, t) {
      this.fun = e, this.array = t
    }

    function c() {}
    var u, d, p = e.exports = {};
    ! function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n
      } catch (e) {
        u = n
      }
      try {
        d = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (e) {
        d = r
      }
    }();
    var f, h = [],
      m = !1,
      y = -1;
    p.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      h.push(new l(e, t)), 1 !== h.length || m || o(s)
    }, l.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, p.cwd = function () {
      return "/"
    }, p.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, p.umask = function () {
      return 0
    }
  }])
});
//# sourceMappingURL=react-trumbowyg.js.map
