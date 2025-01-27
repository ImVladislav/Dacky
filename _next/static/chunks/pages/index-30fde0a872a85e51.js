(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    2711: function (e) {
      e.exports = (function (e) {
        function n(i) {
          if (t[i]) return t[i].exports;
          var a = (t[i] = { exports: {}, id: i, loaded: !1 });
          return (
            e[i].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports
          );
        }
        var t = {};
        return (n.m = e), (n.c = t), (n.p = "dist/"), n(0);
      })([
        function (e, n, t) {
          "use strict";
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var a =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
              },
            o = (i(t(1)), t(6)),
            r = i(o),
            s = i(t(7)),
            l = i(t(8)),
            c = i(t(9)),
            d = i(t(10)),
            p = i(t(11)),
            u = i(t(14)),
            m = [],
            x = !1,
            f = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            h = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if ((e && (x = !0), x))
                return (m = (0, p.default)(m, f)), (0, d.default)(m, f.once), m;
            },
            g = function () {
              (m = (0, u.default)()), h();
            },
            b = function () {
              m.forEach(function (e, n) {
                e.node.removeAttribute("data-aos"),
                  e.node.removeAttribute("data-aos-easing"),
                  e.node.removeAttribute("data-aos-duration"),
                  e.node.removeAttribute("data-aos-delay");
              });
            };
          e.exports = {
            init: function (e) {
              (f = a(f, e)), (m = (0, u.default)());
              var n,
                t = document.all && !window.atob;
              return !0 === (n = f.disable) ||
                ("mobile" === n && c.default.mobile()) ||
                ("phone" === n && c.default.phone()) ||
                ("tablet" === n && c.default.tablet()) ||
                ("function" == typeof n && !0 === n()) ||
                t
                ? b()
                : (f.disableMutationObserver ||
                    l.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                    ),
                    (f.disableMutationObserver = !0)),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", f.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", f.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", f.delay),
                  "DOMContentLoaded" === f.startEvent &&
                  ["complete", "interactive"].indexOf(document.readyState) > -1
                    ? h(!0)
                    : "load" === f.startEvent
                    ? window.addEventListener(f.startEvent, function () {
                        h(!0);
                      })
                    : document.addEventListener(f.startEvent, function () {
                        h(!0);
                      }),
                  window.addEventListener(
                    "resize",
                    (0, s.default)(h, f.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    (0, s.default)(h, f.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "scroll",
                    (0, r.default)(function () {
                      (0, d.default)(m, f.once);
                    }, f.throttleDelay)
                  ),
                  f.disableMutationObserver || l.default.ready("[data-aos]", g),
                  m);
            },
            refresh: h,
            refreshHard: g,
          };
        },
        function (e, n) {},
        ,
        ,
        ,
        ,
        function (e, n) {
          (function (n) {
            "use strict";
            function t(e) {
              var n = void 0 === e ? "undefined" : a(e);
              return !!e && ("object" == n || "function" == n);
            }
            function i(e) {
              if ("number" == typeof e) return e;
              if (
                "symbol" == (void 0 === (n = e) ? "undefined" : a(n)) ||
                (n &&
                  "object" == (void 0 === n ? "undefined" : a(n)) &&
                  h.call(n) == s)
              )
                return r;
              if (t(e)) {
                var n,
                  i = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = t(i) ? i + "" : i;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              var o = d.test((e = e.replace(l, "")));
              return o || p.test(e)
                ? u(e.slice(2), o ? 2 : 8)
                : c.test(e)
                ? r
                : +e;
            }
            var a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              o = "Expected a function",
              r = NaN,
              s = "[object Symbol]",
              l = /^\s+|\s+$/g,
              c = /^[-+]0x[0-9a-f]+$/i,
              d = /^0b[01]+$/i,
              p = /^0o[0-7]+$/i,
              u = parseInt,
              m =
                "object" == (void 0 === n ? "undefined" : a(n)) &&
                n &&
                n.Object === Object &&
                n,
              x =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : a(self)) &&
                self &&
                self.Object === Object &&
                self,
              f = m || x || Function("return this")(),
              h = Object.prototype.toString,
              g = Math.max,
              b = Math.min,
              v = function () {
                return f.Date.now();
              };
            e.exports = function (e, n, a) {
              var r = !0,
                s = !0;
              if ("function" != typeof e) throw TypeError(o);
              return (
                t(a) &&
                  ((r = "leading" in a ? !!a.leading : r),
                  (s = "trailing" in a ? !!a.trailing : s)),
                (function (e, n, a) {
                  function r(n) {
                    var t = p,
                      i = u;
                    return (p = u = void 0), (w = n), (x = e.apply(i, t));
                  }
                  function s(e) {
                    var t = e - h,
                      i = e - w;
                    return void 0 === h || t >= n || t < 0 || (j && i >= m);
                  }
                  function l() {
                    var e,
                      t,
                      i,
                      a = v();
                    return s(a)
                      ? c(a)
                      : void (f = setTimeout(
                          l,
                          ((e = a - h),
                          (t = a - w),
                          (i = n - e),
                          j ? b(i, m - t) : i)
                        ));
                  }
                  function c(e) {
                    return (f = void 0), k && p ? r(e) : ((p = u = void 0), x);
                  }
                  function d() {
                    var e,
                      t = v(),
                      i = s(t);
                    if (((p = arguments), (u = this), (h = t), i)) {
                      if (void 0 === f)
                        return (
                          (w = e = h), (f = setTimeout(l, n)), y ? r(e) : x
                        );
                      if (j) return (f = setTimeout(l, n)), r(h);
                    }
                    return void 0 === f && (f = setTimeout(l, n)), x;
                  }
                  var p,
                    u,
                    m,
                    x,
                    f,
                    h,
                    w = 0,
                    y = !1,
                    j = !1,
                    k = !0;
                  if ("function" != typeof e) throw TypeError(o);
                  return (
                    (n = i(n) || 0),
                    t(a) &&
                      ((y = !!a.leading),
                      (m = (j = "maxWait" in a) ? g(i(a.maxWait) || 0, n) : m),
                      (k = "trailing" in a ? !!a.trailing : k)),
                    (d.cancel = function () {
                      void 0 !== f && clearTimeout(f),
                        (w = 0),
                        (p = h = u = f = void 0);
                    }),
                    (d.flush = function () {
                      return void 0 === f ? x : c(v());
                    }),
                    d
                  );
                })(e, n, { leading: r, maxWait: n, trailing: s })
              );
            };
          }).call(
            n,
            (function () {
              return this;
            })()
          );
        },
        function (e, n) {
          (function (n) {
            "use strict";
            function t(e) {
              var n = void 0 === e ? "undefined" : a(e);
              return !!e && ("object" == n || "function" == n);
            }
            function i(e) {
              if ("number" == typeof e) return e;
              if (
                "symbol" == (void 0 === (n = e) ? "undefined" : a(n)) ||
                (n &&
                  "object" == (void 0 === n ? "undefined" : a(n)) &&
                  f.call(n) == r)
              )
                return o;
              if (t(e)) {
                var n,
                  i = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = t(i) ? i + "" : i;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              var u = c.test((e = e.replace(s, "")));
              return u || d.test(e)
                ? p(e.slice(2), u ? 2 : 8)
                : l.test(e)
                ? o
                : +e;
            }
            var a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              o = NaN,
              r = "[object Symbol]",
              s = /^\s+|\s+$/g,
              l = /^[-+]0x[0-9a-f]+$/i,
              c = /^0b[01]+$/i,
              d = /^0o[0-7]+$/i,
              p = parseInt,
              u =
                "object" == (void 0 === n ? "undefined" : a(n)) &&
                n &&
                n.Object === Object &&
                n,
              m =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : a(self)) &&
                self &&
                self.Object === Object &&
                self,
              x = u || m || Function("return this")(),
              f = Object.prototype.toString,
              h = Math.max,
              g = Math.min,
              b = function () {
                return x.Date.now();
              };
            e.exports = function (e, n, a) {
              function o(n) {
                var t = d,
                  i = p;
                return (d = p = void 0), (v = n), (m = e.apply(i, t));
              }
              function r(e) {
                var t = e - f,
                  i = e - v;
                return void 0 === f || t >= n || t < 0 || (y && i >= u);
              }
              function s() {
                var e,
                  t,
                  i,
                  a = b();
                return r(a)
                  ? l(a)
                  : void (x = setTimeout(
                      s,
                      ((e = a - f),
                      (t = a - v),
                      (i = n - e),
                      y ? g(i, u - t) : i)
                    ));
              }
              function l(e) {
                return (x = void 0), j && d ? o(e) : ((d = p = void 0), m);
              }
              function c() {
                var e,
                  t = b(),
                  i = r(t);
                if (((d = arguments), (p = this), (f = t), i)) {
                  if (void 0 === x)
                    return (v = e = f), (x = setTimeout(s, n)), w ? o(e) : m;
                  if (y) return (x = setTimeout(s, n)), o(f);
                }
                return void 0 === x && (x = setTimeout(s, n)), m;
              }
              var d,
                p,
                u,
                m,
                x,
                f,
                v = 0,
                w = !1,
                y = !1,
                j = !0;
              if ("function" != typeof e)
                throw TypeError("Expected a function");
              return (
                (n = i(n) || 0),
                t(a) &&
                  ((w = !!a.leading),
                  (u = (y = "maxWait" in a) ? h(i(a.maxWait) || 0, n) : u),
                  (j = "trailing" in a ? !!a.trailing : j)),
                (c.cancel = function () {
                  void 0 !== x && clearTimeout(x),
                    (v = 0),
                    (d = f = p = x = void 0);
                }),
                (c.flush = function () {
                  return void 0 === x ? m : l(b());
                }),
                c
              );
            };
          }).call(
            n,
            (function () {
              return this;
            })()
          );
        },
        function (e, n) {
          "use strict";
          function t() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function i(e) {
            e &&
              e.forEach(function (e) {
                var n = Array.prototype.slice.call(e.addedNodes),
                  t = Array.prototype.slice.call(e.removedNodes);
                if (
                  (function e(n) {
                    var t = void 0,
                      i = void 0;
                    for (t = 0; t < n.length; t += 1)
                      if (
                        ((i = n[t]).dataset && i.dataset.aos) ||
                        (i.children && e(i.children))
                      )
                        return !0;
                    return !1;
                  })(n.concat(t))
                )
                  return a();
              });
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = function () {};
          n.default = {
            isSupported: function () {
              return !!t();
            },
            ready: function (e, n) {
              var o = window.document,
                r = new (t())(i);
              (a = n),
                r.observe(o.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          };
        },
        function (e, n) {
          "use strict";
          function t() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (function () {
              function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                  var i = n[t];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n;
              };
            })(),
            a =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            o =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = (function () {
              function e() {
                !(function (e, n) {
                  if (!(e instanceof n))
                    throw TypeError("Cannot call a class as a function");
                })(this, e);
              }
              return (
                i(e, [
                  {
                    key: "phone",
                    value: function () {
                      var e = t();
                      return !(!a.test(e) && !o.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "mobile",
                    value: function () {
                      var e = t();
                      return !(!r.test(e) && !s.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "tablet",
                    value: function () {
                      return this.mobile() && !this.phone();
                    },
                  },
                ]),
                e
              );
            })();
          n.default = new l();
        },
        function (e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var t = function (e, n, t) {
            var i = e.node.getAttribute("data-aos-once");
            n > e.position
              ? e.node.classList.add("aos-animate")
              : void 0 === i ||
                ("false" !== i && (t || "true" === i)) ||
                e.node.classList.remove("aos-animate");
          };
          n.default = function (e, n) {
            var i = window.pageYOffset,
              a = window.innerHeight;
            e.forEach(function (e, o) {
              t(e, a + i, n);
            });
          };
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i,
            a = (i = t(12)) && i.__esModule ? i : { default: i };
          n.default = function (e, n) {
            return (
              e.forEach(function (e, t) {
                e.node.classList.add("aos-init"),
                  (e.position = (0, a.default)(e.node, n.offset));
              }),
              e
            );
          };
        },
        function (e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i,
            a = (i = t(13)) && i.__esModule ? i : { default: i };
          n.default = function (e, n) {
            var t = 0,
              i = 0,
              o = window.innerHeight,
              r = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (r.offset && !isNaN(r.offset) && (i = parseInt(r.offset)),
              r.anchor &&
                document.querySelectorAll(r.anchor) &&
                (e = document.querySelectorAll(r.anchor)[0]),
              (t = (0, a.default)(e).top),
              r.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                t += e.offsetHeight / 2;
                break;
              case "bottom-bottom":
                t += e.offsetHeight;
                break;
              case "top-center":
                t += o / 2;
                break;
              case "bottom-center":
                t += o / 2 + e.offsetHeight;
                break;
              case "center-center":
                t += o / 2 + e.offsetHeight / 2;
                break;
              case "top-top":
                t += o;
                break;
              case "bottom-top":
                t += e.offsetHeight + o;
                break;
              case "center-top":
                t += e.offsetHeight / 2 + o;
            }
            return r.anchorPlacement || r.offset || isNaN(n) || (i = n), t + i;
          };
        },
        function (e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = function (e) {
              for (
                var n = 0, t = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (n += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (t += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: t, left: n };
            });
        },
        function (e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            });
        },
      ]);
    },
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(1786);
        },
      ]);
    },
    9816: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(2729),
        a = t(5893),
        o = t(7294),
        r = t(9521),
        s = t(1163),
        l = t(2828),
        c = t(1664),
        d = t.n(c),
        p = t(578),
        u = t(6721);
      let m = (e) => {
        let n = e.replace("#", ""),
          t = document.getElementById(n);
        t && t.scrollIntoView();
      };
      var x = t(2553);
      function f() {
        let e = (0, i._)([
          "\n  padding: 10px 15px;\n\n  .list,\n  .nav-menu {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    justify-content: space-between;\n    position: relative;\n    z-index: 100;\n  }\n\n  .nav-menu {\n    justify-content: flex-start;\n\n    .duck-class {\n      font-size: 28px;\n      text-transform: capitalize;\n    }\n  }\n\n  .item {\n    transition: all 0.3s ease-in-out;\n    padding: 4px 18px;\n    border: 1px solid transparent;\n    border-radius: 10px;\n    cursor: pointer;\n    height: 40px;\n    line-height: 35px;\n    width: max-content;\n\n    &:hover {\n      border: 1px solid ",
          ";\n      background-color: ",
          ";\n      box-shadow: 0px 4px 6px rgba(255, 214, 0, 0.4);\n    }\n  }\n\n  .active {\n    border: 1px solid ",
          ";\n    background-color: ",
          ";\n    box-shadow: 0px 4px 6px rgba(255, 214, 0, 0.4);\n    border-radius: 10px;\n    padding: 4px 18px;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 10px 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    padding: 15px;\n    z-index: 999;\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        let e = (0, i._)([
          "\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  pointer-events: none;\n\n  .mask-mobile {\n    position: absolute;\n    inset: 0;\n    z-index: 1000;\n    background: rgba(0, 0, 0, 0.45);\n    pointer-events: auto;\n  }\n\n  .menu-mobile-responsive-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    box-shadow: -6px 0 16px -8px #00000014, -9px 0 28px #0000000d,\n    -12px 0 48px 16px #00000008;\n    background-color: #1d1503;\n    transition: all 0.3s ease;\n    z-index: 1001;\n    pointer-events: all;\n  }\n\n  .top-header-menu-mobile-responsive {\n    padding: 12px 24px;\n    border-bottom: 1px solid rgba(249, 250, 250, 0.1);\n  }\n\n  .mobile-menu-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding: 24px;\n  }\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      let g = () => {
        let [e, n] = (0, o.useState)(9),
          [t, i] = (0, o.useState)(!1),
          r = (0, l.J)(1024),
          c = (0, o.useCallback)(() => {
            t ? i(!1) : i(!0);
          }, [t]);
        (0, o.useEffect)(
          () => (
            t
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "auto"),
            () => {
              document.body.style.overflow = "scroll";
            }
          ),
          [t]
        );
        let f = (e) => {
            m(e);
          },
          h = (0, s.useRouter)(),
          g = "/validation" === h.pathname,
          b = (t) =>
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "item duck-class",
                  children: (0, a.jsx)("a", {
                    href: "https://opensea.io/collection/deggkies-optimism",
                    target: "_blank",
                    children: (0, a.jsx)("span", { children: "Deggkies" }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "item duck-class",
                  children: (0, a.jsx)("a", {
                    href: "https://dackieswap.xyz",
                    target: "_blank",
                    children: (0, a.jsx)("span", { children: "DackieSwap" }),
                  }),
                }),
                u.Tl.map((i, r) =>
                  g
                    ? (0, a.jsx)(
                        o.Fragment,
                        {
                          children: (0, a.jsx)("div", {
                            className: "item duck-class",
                            children: (0, a.jsx)("a", {
                              href: "/".concat(
                                null == i ? void 0 : i.idElement
                              ),
                              target: "",
                              children: (0, a.jsx)("span", {
                                children: null == i ? void 0 : i.text,
                              }),
                            }),
                          }),
                        },
                        i.text
                      )
                    : (0, a.jsx)(
                        "div",
                        {
                          onClick: () => {
                            var e;
                            n(r),
                              f(null == i ? void 0 : i.idElement),
                              null === (e = t.cb) || void 0 === e || e.call(t);
                          },
                          className: "item ".concat(
                            e === r ? "active" : "",
                            " duck-class"
                          ),
                          children: (0, a.jsx)("span", {
                            children: null == i ? void 0 : i.text,
                          }),
                        },
                        i.text
                      )
                ),
              ],
            }),
          y = () =>
            (0, a.jsx)(x.Ul, {
              style: { width: 50 },
              name: "mobile_menu_open",
            });
        return (0, a.jsx)(v, {
          id: "header",
          className: "container",
          children: (0, a.jsxs)("nav", {
            className: "list",
            children: [
              (0, a.jsx)("div", {
                className: "logo",
                children: (0, a.jsx)(d(), {
                  href: "/",
                  children: (0, a.jsx)(p.Z, {
                    src: "/img/landingpage/PINK_DUCKIE_LOGO_PNG.png",
                    alt: "ico",
                    width: "90",
                    height: "90",
                    quality: 50,
                    priority: !0,
                    style: { maxWidth: r ? "50px" : "none" },
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "nav-menu",
                children: r
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("div", {
                          onClick: c,
                          children: (0, a.jsx)(y, {}),
                        }),
                        (0, a.jsxs)(w, {
                          children: [
                            t &&
                              (0, a.jsx)("div", { className: "mask-mobile" }),
                            (0, a.jsx)("div", {
                              className: "menu-mobile-responsive-content",
                              style: { width: t ? "90%" : "0" },
                              children:
                                t &&
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsxs)("div", {
                                      style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: 30,
                                      },
                                      className:
                                        "top-header-menu-mobile-responsive",
                                      children: [
                                        (0, a.jsx)("div", {
                                          onClick: () => i(!1),
                                          children: (0, a.jsx)(x.Ul, {
                                            style: { width: 50 },
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          onClick: c,
                                          children: (0, a.jsx)(x.Ul, {
                                            style: {
                                              transform: "rotate(180deg)",
                                            },
                                            name: "mobile_menu_close",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "mobile-menu-list",
                                      children: (0, a.jsx)(b, {
                                        cb: () => i(!1),
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      style: {
                                        position: "absolute",
                                        bottom: 20,
                                        left: 0,
                                        right: 0,
                                      },
                                      children: (0, a.jsx)(x.XA, {
                                        style: {
                                          justifyContent: "space-around",
                                        },
                                        width: 50,
                                        height: 50,
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, a.jsx)(o.Fragment, { children: (0, a.jsx)(b, {}) }),
              }),
            ],
          }),
        });
      };
      var b = g;
      let v = r.ZP.header.withConfig({ componentId: "sc-5a3a6fe-0" })(
          f(),
          u.k9.YELLOW,
          u.k9.LAND,
          u.k9.YELLOW,
          u.k9.LAND,
          u.k9.LAND
        ),
        w = r.ZP.div.withConfig({ componentId: "sc-5a3a6fe-1" })(h());
    },
    1786: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return ep;
          },
        });
      var i = t(5893),
        a = t(7294),
        o = t(2729),
        r = t(2711),
        s = t.n(r),
        l = t(9521);
      t(3497);
      var c = t(2828),
        d = t(2553);
      let p = () => {
        let e = (0, c.J)(1024),
          n = [
            { id: 1, imageSrc: "baner_text_1" },
            { id: 2, imageSrc: "baner_text_2" },
            { id: 3, imageSrc: "baner_text_3" },
          ],
          [t, o] = (0, a.useState)(0);
        return (
          (0, a.useEffect)(() => {
            let e = setInterval(() => {
              o(t === n.length - 1 ? 0 : t + 1);
            }, 1e3);
            return () => clearInterval(e);
          }, [t, n.length]),
          (0, i.jsxs)("div", {
            className: "carousel-container relative ",
            children: [
              (0, i.jsx)("h1", {
                className:
                  "duck-class lg:text-7xl text-5xl text-center whitespace-nowrap",
                children: "Quackome to",
              }),
              (0, i.jsx)("div", {
                className:
                  "carousel-slides  h-44 lg:h-60 overflow-hidden  w-full flex gap-2.5 flex-col lg:mt-6 mt-0",
                children: n.map((n, a) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: "carousel-slide pb-12 h-full "
                        .concat(a === t ? "active" : "", " ")
                        .concat(0 !== t || e ? "" : "pb-5"),
                      style: {
                        transform: "translateY(-".concat(100 * t, "%)"),
                        transition: "transform 0.5s ease-in-out",
                      },
                      children: (0, i.jsx)(d.Ul, {
                        name: n.imageSrc,
                        className: "w-full h-full object-cover",
                      }),
                    },
                    n.id
                  )
                ),
              }),
            ],
          })
        );
      };
      var u = t(9816);
      function m() {
        let e = (0, o._)([
          "\n  display: none;\n  position: absolute;\n  top: 50%;\n  right: ",
          ";\n  transition: all 0.3s ease-in-out;\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        let e = (0, o._)([
          "\n  padding-top: 20px;\n  position: relative;\n  overflow: hidden;\n  .wapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 50px;\n    margin-top: 50px;\n  }\n  .flex-1 {\n    flex: 1;\n    @media screen and (max-width: 1024px) {\n      flex: unset;\n      width: 100%;\n      text-align: center;\n    }\n  }\n  h3 {\n    font-size: 32px;\n  }\n  h2 {\n    font-size: 42px;\n    color: inherit;\n  }\n  p {\n    white-space: pre-wrap;\n    font-size: 28px;\n  }\n\n  .wrapp-on-hover {\n    position: relative;\n    cursor: pointer;\n    &:hover {\n      .chat-box {\n        display: flexbox;\n      }\n    }\n  }\n  .content {\n    position: relative;\n  }\n  .dackity-welcome {\n    max-width: 500px;\n    margin-bottom: 20px;\n  }\n  .to-the-moon {\n    position: absolute;\n    right: -20%;\n    top: 42%;\n    overflow: hidden;\n    .flex-to-the-moon {\n      display: flex;\n      gap: 5px;\n      align-items: center;\n      font-size: 14px;\n    }\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 5px 15px 0 15px;\n    .dackity-welcome {\n      max-width: 275px;\n      margin: 20px auto;\n    }\n    .to-the-moon {\n      position: relative;\n      padding: 10px 0;\n      z-index: 20;\n      left: 0;\n      right: 0;\n      display: flex;\n      justify-content: center;\n    }\n    p {\n      text-align: center;\n    }\n    .img-gif {\n      width: 100%;\n    }\n    .wapper {\n      margin-top: 85px;\n    }\n  }\n",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      let f = () => {
          let e = (0, c.J)(1024);
          return (0, i.jsxs)(g, {
            id: "home",
            children: [
              (0, i.jsx)(u.Z, {}),
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(d.TK, {
                    children: (0, i.jsx)("div", {
                      className: "main",
                      children: (0, i.jsx)(d.Ul, {
                        style: { maxWidth: 75 },
                        name: "dackie_rotate",
                      }),
                    }),
                  }),
                  (0, i.jsx)(d.TK, {
                    style: { right: 50, left: "unset", top: "-15%" },
                    children: (0, i.jsx)("div", { className: "main" }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "container wapper",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "content flex-1",
                        children: [
                          (0, i.jsx)("div", {
                            className: "dackity-welcome",
                            "data-aos": "fade-right",
                            children: (0, i.jsx)(p, {}),
                          }),
                        //   (0, i.jsx)("div", {
                        //     className: "to-the-moon",
                        //     children: (0, i.jsxs)("a", {
                        //       target: "_blank",
                        //       href: "https://base.org/",
                        //       rel: "noreferrer",
                        //       className: "flex-to-the-moon ".concat(
                        //         e ? "" : "slide-right"
                        //       ),
                        //       style: {
                        //         display: "flex",
                        //         gap: 5,
                        //         alignItems: "center",
                        //         fontSize: 14,
                        //       },
                        //       children: [
                        //         (0, i.jsx)("span", { children: "Build on" }),
                        //         (0, i.jsxs)("div", {
                        //           style: {
                        //             display: "flex",
                        //             gap: 5,
                        //             alignItems: "center",
                        //           },
                        //           children: [
                        //             (0, i.jsx)(d.Ul, {
                        //               style: { maxWidth: 65 },
                        //               name: "dackie_15",
                        //             }),
                        //             (0, i.jsx)(d.Ul, {
                        //               style: { maxWidth: 65 },
                        //               name: "dackie_14",
                        //             }),
                        //           ],
                        //         }),
                        //       ],
                        //     }),
                        //   }),
                          (0, i.jsx)("p", {
                            className: "duck-class",
                            children:
                              "Dackie is a dope meme digital arts that represents the chilled-out, don't-give-a-f*ck attitude of a lazy duck. With its lazy-ass eyes and smirking mouth, Dackie is a symbol of coolness but laziness in modern life.",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "img-gif flex-1",
                        children: (0, i.jsxs)("div", {
                          "data-aos": "fade-left",
                          className: "wrapp-on-hover",
                          children: [
                            (0, i.jsx)(d.Ul, {
                              style: { maxWidth: e ? 300 : "100%" },
                              name: "dackie_big_gif",
                            }),
                            (0, i.jsx)(h, {
                              right: e ? "100px" : "150px",
                              className: "chat-box",
                              children: (0, i.jsx)("div", {
                                "data-aos": "fade-right",
                                children: (0, i.jsx)(d.Ul, {
                                  name: "dackie_chat_box",
                                  style: { maxWidth: e ? 75 : 150 },
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(d.TK, {
                        style: {
                          top: "unset",
                          bottom: 0,
                          left: "10%",
                          filter: "blur(0.6px)",
                          opacity: ".6",
                          transform: "rotate(75deg)",
                        },
                        children: (0, i.jsx)("div", {
                          className: "main",
                          children: (0, i.jsx)(d.Ul, {
                            style: { maxWidth: 75 },
                            name: "dackie_rotate",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.TK, {
                    style: {
                      top: "unset",
                      bottom: "40px",
                      left: "unset",
                      filter: "blur(1px)",
                      opacity: ".6",
                      transform: "rotate(120deg)",
                      right: 0,
                    },
                    children: (0, i.jsx)("div", {
                      className: "main",
                      children: (0, i.jsx)(d.Ul, {
                        style: { maxWidth: 100 },
                        name: "dackie_rotate",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        h = l.ZP.div.withConfig({ componentId: "sc-fd30ec64-0" })(
          m(),
          (e) => e.right || "150px"
        ),
        g = l.ZP.section.withConfig({ componentId: "sc-fd30ec64-1" })(x());
      var b = t(6721);
      function v() {
        let e = (0, o._)([
          '\n  padding: 100px 0 25px 0;\n  position: relative;\n  z-index: 2;\n  overflow: hidden;\n  .list {\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n    flex-wrap: wrap;\n    .item {\n      flex: 1;\n      max-width: 310px;\n      width: 100%;\n    }\n    .img-wrapper {\n      border-radius: 10px;\n      text-align: center;\n    }\n    .text {\n      margin-top: 15px;\n      text-align: center;\n      white-space: pre-wrap;\n      font-size: 28px;\n    }\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(180deg, rgba(255, 230, 0, 0) 0%, #ffe600 100%);\n    z-index: -1;\n    opacity: 0.1;\n    left: 0;\n  }\n  .description {\n    padding: 54px 0 0 0;\n    .hight-light {\n      color: ',
          ";\n    }\n    .duck-class {\n      font-size: 28px;\n    }\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 60px 10px 15px;\n    .item {\n      flex: unset !important;\n    }\n  }\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      let w = () => {
          let e = (0, c.J)(768);
          return (0, i.jsx)(y, {
            children: (0, i.jsxs)("div", {
              className: "container",
              style: { textAlign: "center" },
              children: [
                (0, i.jsx)("div", {
                  style: {
                    display: "inline-block",
                    maxWidth: 992,
                    marginBottom: 50,
                  },
                  "data-aos": "fade-right",
                  children: (0, i.jsx)(d.Ul, {
                    name: e
                      ? "dackie_text_mobile_benefit"
                      : "dackie_text_benefit",
                  }),
                }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)("div", {
                    className: "list",
                    "data-aos": "fade-left",
                    children: j.map((e, n) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className: "item",
                          children: [
                            (0, i.jsx)("div", {
                              className: "img-wrapper",
                              style: {
                                backgroundColor:
                                  null == e ? void 0 : e.color_code,
                              },
                              children: (0, i.jsx)(d.Ul, {
                                style: { width: 275, margin: "0 auto" },
                                name: null == e ? void 0 : e.src,
                              }),
                            }),
                            (0, i.jsx)("p", {
                              className: "text duck-class",
                              children: null == e ? void 0 : e.text,
                            }),
                          ],
                        },
                        n
                      )
                    ),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "description",
                  children: (0, i.jsx)(d.Ul, {
                    style: { maxWidth: 768, margin: "0 auto" },
                    name: "dackie_text_description",
                  }),
                }),
              ],
            }),
          });
        },
        y = l.ZP.section.withConfig({ componentId: "sc-daa2e513-0" })(
          v(),
          b.k9.YELLOW
        ),
        j = [
          {
            text: "Receive recognition",
            src: "dackie_5",
            color_code: b.k9.PINKY,
          },
          {
            text: "Showcase your personal value",
            src: "dackie_6",
            color_code: b.k9.YELLOW_LESS,
          },
          {
            text: "Receive rewards",
            src: "dackie_7",
            color_code: b.k9.SKY_LESS,
          },
        ];
      function k() {
        let e = (0, o._)([
          "\n  .sub-content {\n    white-space: pre-wrap;\n    font-weight: 300;\n    font-size: 28px;\n    line-height: 32px;\n  }\n  .collection-slider {\n    margin-top: 100px;\n    transform: rotate(-10deg);\n  }\n  @media screen and (max-width: 768px) {\n    margin: 100px 0;\n    padding: 10px 15px;\n    .sub-content {\n      text-align: justify;\n    }\n  }\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        let e = (0, o._)([
          "\n  display: flex;\n  gap: 30px;\n  flex-wrap: nowrap;\n  margin-bottom: 30px;\n  position: relative;\n  left: -230px;\n  width: 100%;\n",
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      let N = () => {
          let e = (0, c.J)(768);
          return (0, i.jsxs)(z, {
            id: "collection",
            style: { margin: e ? "0 0 75px 0" : "0 0 200px 0" },
            children: [
              (0, i.jsxs)("div", {
                className: "container",
                "data-aos": "fade-up",
                children: [
                  (0, i.jsx)("div", {
                    style: {
                      display: "inline-block",
                      maxWidth: 768,
                      padding: e ? "40px 0 0px 0" : "60px 0 10px 0",
                    },
                    children: (0, i.jsx)(d.Ul, {
                      name: "dackie_text_collection",
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: "sub-content duck-class",
                    children: e
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            "Dackie is on a mission to build the premier Web",
                            " ",
                            (0, i.jsx)("span", {
                              className: "author-class-font",
                              children: "3.0",
                            }),
                            " brand together with our community. We're trying to make it the largest community-driven NFT collection out there, providing real-world value and benefits to the Dackie community and the wider crypto community.",
                          ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            "Dackie is on a mission to build the premier Web",
                            " ",
                            (0, i.jsx)("span", {
                              className: "author-class-font",
                              children: "3.0",
                            }),
                            " brand together with our community. We're trying ",
                            (0, i.jsx)("br", {}),
                            "to make it the largest community-driven NFT collection out there, providing real-world value and ",
                            (0, i.jsx)("br", {}),
                            "benefits to the Dackie community and the wider crypto community.",
                          ],
                        }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "collection-slider",
                children: (0, i.jsxs)("div", {
                  "data-aos": "fade-up-right",
                  children: [
                    (0, i.jsx)(O, {
                      className: "slide",
                      children: [...Array(50)].map((n, t) =>
                        (0, i.jsx)(
                          d.Ey,
                          { style: { width: e ? 100 : "200px" }, idx: t + 1 },
                          t
                        )
                      ),
                    }),
                    (0, i.jsx)(O, {
                      style: { left: "-345px" },
                      className: "slide_1",
                      children: [...Array(50)].map((n, t) =>
                        (0, i.jsx)(
                          d.Ey,
                          { style: { width: e ? 100 : "200px" }, idx: t + 50 },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        z = l.ZP.section.withConfig({ componentId: "sc-26074201-0" })(k()),
        O = l.ZP.div.withConfig({ componentId: "sc-26074201-1" })(_()),
        E = (e) =>
          (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 56,
            height: 36,
            fill: "none",
            ...e,
            children: [
              (0, i.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 3,
                d: "M49.291 15.086c-3.352 0-6.703-.186-10.052-.186-2.532 0-5.254-.41-7.762.186-2.084.494-4.387.373-6.499.373h-5.975c-3.152 0-6.273-.187-9.417-.187M50 18.307c-.804-.259-1.64-.951-2.42-1.461-1.25-.818-2.764-.4-4.058-.4-2.082 0-4.15.532-6.224.532-2.23 0-4.484.094-6.704.473-1.675.286-3.557 1.087-5.23.443-1.722-.664-3.392-1.253-5.15-1.432-3.069-.313-6.133-.28-9.21-.28M50 20.223c-3.03-.656-6.115-.56-9.155-.56-3.233 0-6.447.746-9.679.746h-6.4c-1.393 0-2.733.238-4.072-.747-.476-.35-.984-.3-1.473-.415-.83-.195-1.662-.394-2.494-.56-1.075-.215-1.914-.622-2.964-.187-1.353.56-2.806.229-4.177.229",
              }),
              (0, i.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 3,
                d: "M21.109 2.95c-1.939 2.026-4.179 3.83-5.692 6.132-1.522 2.315-3.26 4.358-5.105 6.485-.198.228-2.515 2.799-2.01 3.024 1.757.784 3.605 1.384 5.372 2.15 2.976 1.288 5.667 2.83 8.387 4.464 1.904 1.144 3.584 2.631 5.131 4.11.598.57 1.316 1.029 1.912 1.598.424.405.517.543-.15.543",
              }),
              (0, i.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 3,
                d: "M19.347 2c-1.29 0-2.676 1.464-3.362 2.277-.692.823-1.572 1.6-2.312 2.406-.877.956-1.646 1.946-2.241 3.047-1.211 2.24-2.264 4.552-3.77 6.628-.51.701-1.268 1.634-.926 2.504.343.873 1.552 1.852 2.224 2.564 1.334 1.415 2.48 3.053 3.993 4.336 1.312 1.113 2.871 2.172 4.402 3.054 1.521.877 2.804 1.932 4.216 2.911.771.535 1.617 1.097 2.543 1.388.395.124.568.513.996.513",
              }),
              (0, i.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 3,
                d: "M27.672 32.542c-.67 0-1.593-.906-2.081-1.252-1.322-.937-2.532-1.98-3.842-2.926-1.127-.814-2.316-1.546-3.433-2.368-1.157-.852-1.952-2.004-2.97-2.964a20.377 20.377 0 0 0-4.172-3.061c-1.665-.918-2.812-2.518-4.153-3.718-2.808-2.514.825-4.712 3.113-6.108 2.186-1.335 4.092-2.981 6.1-4.48.97-.723 1.916-1.404 3.024-1.968.384-.195.846-.265 1.05-.611",
              }),
            ],
          });
      function S() {
        let e = (0, o._)([
          "\n  position: relative;\n  width: 33.33%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        let e = (0, o._)([
          "\n  text-align: center;\n  cursor: pointer;\n  z-index: 2;\n  padding: 20px 0;\n  position: absolute;\n  bottom: 55px;\n  left: 0;\n  right: 0;\n  svg {\n    color: orange;\n  }\n  &:hover {\n    svg {\n      path {\n        color: orange;\n      }\n    }\n  }\n  @media screen and (max-width: 1024px) {\n    position: unset;\n  }\n",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        let e = (0, o._)([
          "\n  position: relative;\n  .carousel-container {\n    position: relative;\n    width: 100%;\n    height: 400px;\n  }\n\n  .carousel-slide {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n  }\n\n  .carousel-slide.active {\n    opacity: 1;\n  }\n\n  .carousel-controls {\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .carousel-controls-wrapper {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n  }\n  .prev-btn,\n  .next-btn {\n    cursor: pointer;\n  }\n\n  .prev-btn:focus,\n  .next-btn:focus {\n    outline: none;\n  }\n\n  .prev-btn:hover,\n  .next-btn:hover {\n    background-color: #4b5563;\n  }\n\n  .prev-btn {\n    margin-right: 10px;\n  }\n\n  .next-btn {\n    margin-left: 10px;\n  }\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      let P = [
          "Dackity is a decentralized community governed by both NFT and non-NFT users who use and evaluate the products created by Dackiers.",
          "Dackiers will be divided into different tiers in Dackity, with higher tier Dackiers having more votingpower.",
          "Each Dackier contributes to the functioning and growth of the community by providing their own value and receiving recognition from the Dackie community. This helps to develop the income and reputation of each Dackier.",
        ],
        W = (e) =>
          (0, i.jsx)(d.Ul, { style: { ...e.style }, name: "duckie_egg" }),
        I = () => (0, i.jsx)(E, {}),
        L = (e) => (0, i.jsx)(E, { style: { ...e.style } }),
        T = () => {
          let [e, n] = (0, a.useState)(0),
            t = () => {
              n(0 === e ? P.length - 1 : e - 1);
            },
            o = () => {
              n(e === P.length - 1 ? 0 : e + 1);
            };
          return (
            (0, a.useEffect)(() => {
              let t = setInterval(() => {
                n(e === P.length - 1 ? 0 : e + 1);
              }, 5e3);
              return () => clearInterval(t);
            }, [e]),
            (0, i.jsxs)(A, {
              children: [
                (0, i.jsx)("div", {
                  className: "carousel-container",
                  children: P.map((n, t) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "carousel-slide ".concat(
                          t === e ? "active" : ""
                        ),
                        children: (0, i.jsx)("p", {
                          className: "duck-class text-3xl",
                          children: n,
                        }),
                      },
                      t
                    )
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: "carousel-controls",
                  children: [
                    (0, i.jsx)(U, {
                      children: (0, i.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          gap: 20,
                          alignItems: "center",
                        },
                        children: [
                          (0, i.jsx)("div", {
                            onClick: t,
                            children: (0, i.jsx)(I, {}),
                          }),
                          (0, i.jsx)("div", {
                            onClick: o,
                            children: (0, i.jsx)(L, {
                              style: { transform: "rotate(180deg)" },
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "carousel-controls-wrapper",
                      children: P.map((t, a) =>
                        (0, i.jsx)(
                          M,
                          {
                            className:
                              "carousel-dot w-30 h-30 rounded-full transition-colors duration-300",
                            onClick: () => n(a),
                            children:
                              a === e
                                ? (0, i.jsx)(d.Ul, {
                                    style: { width: 65 },
                                    name: "dackie_1",
                                  })
                                : (0, i.jsx)(W, { style: { width: 20 } }),
                          },
                          a
                        )
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        M = l.ZP.div.withConfig({ componentId: "sc-a82af9ae-0" })(S()),
        U = l.ZP.div.withConfig({ componentId: "sc-a82af9ae-1" })(C()),
        A = l.ZP.div.withConfig({ componentId: "sc-a82af9ae-2" })(D());
      function Z() {
        let e = (0, o._)([
          '\n  padding: 0 0 100px 0;\n  position: relative;\n  .community-label {\n    display: inline-block;\n    margin-bottom: 50px;\n    max-width: 768px;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100px;\n    z-index: 1;\n    opacity: 0.1;\n    left: 0px;\n    top: -90px;\n    background: linear-gradient(\n      to top,\n      rgba(255, 230, 0, 0) 0%,\n      rgb(255, 230, 0) 100%\n    );\n  }\n  @media screen and (max-width: 768px) {\n    padding: 10px 15px;\n    .community-label {\n      margin-bottom: 25px;\n    }\n    .carousel-container {\n      height: auto;\n    }\n    .carousel-controls {\n      position: unset;\n      transform: unset;\n    }\n  }\n  @media screen and (max-width: 1024px) {\n    &::before {\n      top: 0;\n    }\n    .img-wrapper {\n      width: 100%;\n      img {\n        max-width: 100% !important;\n      }\n    }\n    .content {\n      max-width: 100% !important;\n      text-align: center;\n      padding: 0 30px;\n    }\n    .carousel-container {\n      height: 300px;\n    }\n  }\n',
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        let e = (0, o._)([
          "\n  display: flex;\n  padding: 12px;\n  gap: 20px;\n  height: 524px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  text-align: left;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  max-width: 1125px;\n  width: 100%;\n  margin: 0 auto;\n  .content {\n    padding: 75px 0 25px 0;\n    max-width: 312px;\n    width: 100%;\n    position: relative;\n    height: 100%;\n    text-align: center;\n\n    .slick-slider {\n      display: flex;\n      flex-direction: column;\n      height: 455px;\n    }\n    ul.slick-dots {\n      bottom: 0 !important;\n    }\n  }\n  .carousel-area {\n    height: 160px;\n    line-height: 160px;\n  }\n  .carousel-text {\n    font-size: 21px;\n    line-height: 28px;\n    font-weight: lighter;\n    color: white;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    height: 100%;\n    .content {\n      flex: unset;\n      padding: 0 15px;\n    }\n    .carousel-text {\n      font-size: 16px;\n    }\n  }\n  @media screen and (max-width: 1024px) {\n    height: 100%;\n  }\n",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      let F = () =>
          (0, i.jsxs)(K, {
            id: "about-us",
            children: [
              (0, i.jsx)(d.TK, {
                style: { top: "50%", left: "-250px" },
                children: (0, i.jsx)("div", { className: "main" }),
              }),
              (0, i.jsxs)("div", {
                className: "container",
                style: { textAlign: "center" },
                children: [
                  (0, i.jsx)("div", {
                    className: "community-label",
                    "data-aos": "fade-zoom-in-down",
                    children: (0, i.jsx)(d.Ul, {
                      name: "dackie_text_community",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsxs)(Y, {
                      "data-aos": "fade-up",
                      children: [
                        (0, i.jsx)("div", {
                          className: "img-wrapper",
                          children: (0, i.jsx)(d.Ul, {
                            style: {
                              objectFit: "contain",
                              borderRadius: 10,
                              maxWidth: 768,
                            },
                            name: "dackie_landscape",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "content ",
                          children: (0, i.jsx)(T, {}),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        K = l.ZP.section.withConfig({ componentId: "sc-bdb3631b-0" })(Z()),
        Y = l.ZP.div.withConfig({ componentId: "sc-bdb3631b-1" })(q());
      function H() {
        let e = (0, o._)([
          "\n  padding: 100px 0;\n  text-align: center;\n  position: relative;\n  .flex {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .img-wrapper {\n    width: 30px;\n    height: 30px;\n  }\n  .duckie-tag {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .tag-content {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n  }\n  .duckie-item {\n    border-radius: 8px;\n    padding: 10px 15px;\n    backdrop-filter: blur(2px);\n    background: rgba(255, 255, 255, 0.1);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    display: inline-block;\n    width: max-content;\n  }\n  .text {\n    white-space: pre-wrap;\n    text-align: left;\n    font-size: 24px;\n  }\n  .flex-item {\n    flex: 1;\n  }\n  .duckie-text {\n    max-width: 400px;\n    display: inline-block;\n    margin-bottom: 10px;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 20px 15px;\n    .flex-item {\n      flex: unset;\n    }\n    .duckie-text {\n      max-width: 275px;\n    }\n    .duckie-tag {\n      align-items: center;\n      .img-wrapper {\n        width: 75px;\n        height: auto;\n      }\n    }\n    .duckie-item {\n      padding: 10px;\n    }\n    .duckie-item {\n      width: 100%;\n    }\n  }\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      let J = () =>
          (0, i.jsxs)($, {
            id: "dackity",
            children: [
              (0, i.jsx)(d.TK, {
                style: { top: "100px", left: "-150px", opacity: "0.4" },
                children: (0, i.jsx)("div", { className: "main" }),
              }),
              (0, i.jsx)(d.TK, {
                style: { top: "50%", left: "unset", right: 0 },
                children: (0, i.jsx)("div", { className: "main" }),
              }),
              (0, i.jsxs)("div", {
                className: "container",
                children: [
                  (0, i.jsx)("div", {
                    style: { maxWidth: 768, margin: "auto" },
                    children: (0, i.jsx)(d.Ul, { name: "dackie_text" }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, i.jsx)("div", {
                        className: "duckie-img-wrapper flex-item zoom-animated",
                        "data-aos": "fade-right",
                        children: (0, i.jsx)(d.Ul, { name: "dackie_2" }),
                      }),
                      (0, i.jsx)("div", {
                        className: "flex-item",
                        "data-aos": "fade-left",
                        children: (0, i.jsx)("div", {
                          children: (0, i.jsxs)("div", {
                            className: "duckie-tag",
                            children: [
                              (0, i.jsx)("div", {
                                className: "duckie-text",
                                children: (0, i.jsx)(d.Ul, {
                                  name: "dackie_text_dackier",
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "duckie-item",
                                children: (0, i.jsxs)("div", {
                                  className: "tag-content",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "img-wrapper",
                                      children: (0, i.jsx)(d.Ul, {
                                        name: "dackie_1",
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      className: "text duck-class",
                                      children:
                                        "You are joining a high-quality NFT meme community",
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "duckie-item",
                                children: (0, i.jsxs)("div", {
                                  className: "tag-content",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "img-wrapper",
                                      children: (0, i.jsx)(d.Ul, {
                                        name: "dackie_1",
                                      }),
                                    }),
                                    (0, i.jsxs)("span", {
                                      className: "text duck-class",
                                      children: [
                                        "You are directly contributing to the development of ",
                                        (0, i.jsx)("br", {}),
                                        " ",
                                        "Web",
                                        (0, i.jsx)("span", {
                                          className: "author-class-font",
                                          children: "3",
                                        }),
                                        " and NFT",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "duckie-item",
                                children: (0, i.jsxs)("div", {
                                  className: "tag-content",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "img-wrapper",
                                      children: (0, i.jsx)(d.Ul, {
                                        name: "dackie_1",
                                      }),
                                    }),
                                    (0, i.jsxs)("span", {
                                      className: "text duck-class",
                                      children: [
                                        "You are a factor to help the project grow and seize ",
                                        (0, i.jsx)("br", {}),
                                        " ",
                                        "asset xxx opportunities",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        $ = l.ZP.section.withConfig({ componentId: "sc-ac72ae73-0" })(H());
      var B = t(2682);
      function R() {
        let e = (0, o._)([
          "\n  @media screen and (max-width: 768px) {\n    &:last-child {\n      margin-bottom: 40px;\n    }\n  }\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        let e = (0, o._)(["\n  width: 100%;\n  overflow: hidden;\n"]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        let e = (0, o._)([
          "\n  display: flex;\n  //justify-content: space-between;\n  align-items: center;\n  gap: 25px;\n  flex-wrap: wrap;\n  width: 100%;\n  z-index: 999;\n  position: relative;\n",
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        let e = (0, o._)([
          "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n",
        ]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        let e = (0, o._)([
          "\n  position: relative;\n  .egg-card {\n    position: absolute;\n    left: 0;\n    right: 0;\n    transition: all 0.3s ease;\n    z-index: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 0 10px;\n    bottom: 85px;\n  }\n  .egg-item {\n    z-index: 1;\n    transition: all 0.3s ease;\n    max-width: 355px;\n    width: 100%;\n    height: 100%;\n  }\n  .egg-wrapper {\n    cursor: pointer;\n    &:hover {\n      .egg-card {\n        bottom: 105px;\n      }\n    }\n  }\n  .eggs {\n    position: absolute;\n    bottom: 0;\n    z-index: 2;\n    left: 0;\n    right: 0;\n  }\n  .egg-bg-shadow {\n    position: absolute;\n    max-width: 210px;\n    width: 100%;\n    height: max-content;\n    bottom: 30px;\n    z-index: 2;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    overflow: hidden;\n    background-color: ",
          ";\n    border-radius: 40px;\n    h2 {\n      margin-bottom: 10px;\n    }\n    .title {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      height: 100%;\n      padding: 3px 10px;\n      font-size: 20px;\n    }\n    .title-label {\n      font-size: 36px;\n    }\n    .title-sub {\n      line-height: 15px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 15px;\n  }\n  @media screen and (max-width: 1024px) {\n    .egg-item {\n      img {\n        height: 100%;\n      }\n    }\n    .egg-bg-shadow {\n      height: 85px;\n    }\n  }\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      let ee = () => {
          let e = (0, c.J)(768),
            n = (0, c.J)(1280),
            t = e ? 290 : 360,
            { width: o } = (0, B.d)(),
            r = (0, a.useMemo)(
              () => (o > 1200 ? "23%" : o > 556 ? "40%" : "100%"),
              [o]
            );
          return (0, i.jsxs)(eo, {
            id: "team",
            children: [
              (0, i.jsxs)("div", {
                className: "container text-center z-10 ",
                children: [
                  (0, i.jsx)("div", {
                    style: {
                      display: "inline-block",
                      maxWidth: 992,
                      padding: "50px 0",
                    },
                    children: (0, i.jsx)(d.Ul, { name: "dackie_text_team" }),
                  }),
                  (0, i.jsx)("div", {
                    style: { padding: e ? "0 30px" : "0 50px" },
                    "data-aos": "fade-up",
                    children: (0, i.jsx)(ei, {
                      className: "list",
                      children: er.map((a, o) =>
                        (0, i.jsx)(
                          en,
                          {
                            style: {
                              width: r,
                              position: "relative",
                              height: e ? 300 : 350,
                              marginBottom: e ? "50px" : n ? "75px" : "auto",
                            },
                            children: (0, i.jsxs)(et, {
                              className: "egg-wrapper",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "egg-card",
                                  style: { height: e ? 235 : n ? 285 : 235 },
                                  children: (0, i.jsx)("div", {
                                    className: "egg-item",
                                    children: (0, i.jsx)(d.Ul, {
                                      style: {
                                        borderRadius: 25,
                                        maxWidth: t,
                                        width: "100%",
                                        margin: "0 auto",
                                        height: "100%",
                                      },
                                      name: null == a ? void 0 : a.src,
                                    }),
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "eggs",
                                  children: [
                                    (0, i.jsx)(d.Ul, {
                                      style: { zIndex: 2, height: "auto" },
                                      name: "dackie_9",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "egg-bg-shadow",
                                      children: (0, i.jsxs)("div", {
                                        className: "title duck-class",
                                        children: [
                                          (0, i.jsx)("span", {
                                            className: "title-label",
                                            children:
                                              null == a ? void 0 : a.title,
                                          }),
                                          (0, i.jsx)("span", {
                                            className: "title-sub",
                                            children:
                                              null == a ? void 0 : a.sub,
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          o
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(ea, {
                children: (0, i.jsx)(d.Ul, { name: "dackie_11" }),
              }),
            ],
          });
        },
        en = l.ZP.div.withConfig({ componentId: "sc-62cf244d-0" })(R()),
        et = l.ZP.div.withConfig({ componentId: "sc-62cf244d-1" })(X()),
        ei = l.ZP.div.withConfig({ componentId: "sc-62cf244d-2" })(G()),
        ea = l.ZP.div.withConfig({ componentId: "sc-62cf244d-3" })(Q()),
        eo = l.ZP.section.withConfig({ componentId: "sc-62cf244d-4" })(
          V(),
          b.k9.YELLOW_LABEL
        ),
        er = [
          {
            title: "Andrea",
            sub: (0, i.jsx)("span", { children: "Quackoder" }),
            src: "dackie_team_1",
            labelSrc: "the_team_1",
            from: "fade-up",
          },
          {
            title: "Key \uD83D\uDD11",
            sub: (0, i.jsx)("span", {
              children: "Risk wisely, seize opportunity in cryptocurrency.",
            }),
            src: "dackie_team_2",
            labelSrc: "dackie_team_2",
            from: "fade-up",
          },
          {
            title: "Dustin",
            sub: (0, i.jsx)("span", { children: "King of Automation" }),
            src: "dackie_team_3",
            labelSrc: "the_team_3",
            from: "fade-up",
          },
          {
            title: "Erious",
            sub: (0, i.jsx)("span", { children: "Voice of Dackity" }),
            src: "dackie_team_4",
            labelSrc: "the_team_4",
            from: "fade-up",
          },
          {
            title: "KuroH",
            sub: (0, i.jsx)("span", { children: "Code the Galaxy" }),
            src: "dackie_team_5",
            labelSrc: "the_team_5",
            from: "fade-up",
          },
          {
            title: "JimN",
            sub: (0, i.jsx)("span", { children: "Dackiesigner" }),
            src: "dackie_team_7",
            labelSrc: "the_team_7",
            from: "fade-up",
          },
          {
            title: "Chuckie",
            sub: (0, i.jsx)("span", { children: "Draw the World" }),
            src: "dackie_team_6",
            labelSrc: "the_team_6",
            from: "fade-up",
          },
        ];
      function es() {
        let e = (0, o._)(["\n  position: relative;\n"]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      let el = () => (
        (0, a.useEffect)(
          () => (
            s().init({
              disable: !1,
              duration: 500,
              offset: 20,
              disableMutationObserver: !0,
            }),
            () => s().refresh()
          ),
          []
        ),
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(f, {}),
            (0, i.jsx)(J, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(N, {}),
            (0, i.jsx)(ee, {}),
          ],
        })
      );
      l.ZP.div.withConfig({ componentId: "sc-23b78ff2-0" })(es());
      var ec = t(8928);
      let ed = () => (0, i.jsx)(ec.Z, { children: (0, i.jsx)(el, {}) });
      var ep = ed;
    },
    3497: function () {},
  },
  function (e) {
    e.O(0, [571, 237, 306, 928, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
