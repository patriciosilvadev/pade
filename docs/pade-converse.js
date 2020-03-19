var getCredentials = function()
{
    return null;
}

var ofmeet = (function(of)
{
    let room;

    const fpDiv = document.querySelector("pade-converse");

    if (fpDiv)
    {
        room = fpDiv.getAttribute("room");
    }

    if (!room) room = "lobby@conference." + location.hostname;

    ((window.gitter = {}).chat = {}).options = {room: room, activationElement: true};

    //-------------------------------------------------------
    //
    //  Gitter Sidecar v1.3.3
    //  https://sidecar.gitter.im/
    //
    //-------------------------------------------------------

    var sidecar = function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.p = "", e(0)
    }([function(t, e, r) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(4),
            i = n(o),
            u = r(14),
            a = n(u),
            c = r(31),
            s = n(c),
            l = function(t, e) {
                return t[e] || function() {
                    return t[e] = {}, t[e]
                }()
            },
            f = l(window, "gitter"),
            y = {
                Chat: s.default
            };
        (0, i.default)(f, y);
        var p = new a.default("gitter-sidecar-ready", {
            detail: y
        });
        if (document.dispatchEvent(p), !((f.chat || {}).options || {}).disableDefaultChat) {
            var b = l(f, "chat");
            b.defaultChat = new s.default(b.options || {})
        }
        e.default = y
    }, function(t, e, r) {
        "use strict";
        var n = r(17),
            o = r(16),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol(),
            u = Object.prototype.toString,
            a = function(t) {
                return "function" == typeof t && "[object Function]" === u.call(t)
            },
            c = function() {
                var t = {};
                try {
                    Object.defineProperty(t, "x", {
                        enumerable: !1,
                        value: t
                    });
                    for (var e in t) return !1;
                    return t.x === t
                } catch (t) {
                    return !1
                }
            },
            s = Object.defineProperty && c(),
            l = function(t, e, r, n) {
                (!(e in t) || a(n) && n()) && (s ? Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: r,
                    writable: !0
                }) : t[e] = r)
            },
            f = function(t, e) {
                var r = arguments.length > 2 ? arguments[2] : {},
                    u = n(e);
                i && (u = u.concat(Object.getOwnPropertySymbols(e))), o(u, function(n) {
                    l(t, n, e[n], r[n])
                })
            };
        f.supportsDescriptors = !!s, t.exports = f
    }, function(t, e, r) {
        var n = r(12);
        t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
    }, function(t, e) {
        "use strict";
        var r = Function.prototype.toString,
            n = /^\s*class /,
            o = function(t) {
                try {
                    var e = r.call(t),
                        o = e.replace(/\/\/.*\n/g, ""),
                        i = o.replace(/\/\*[.\s\S]*\*\//g, ""),
                        u = i.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return n.test(u)
                } catch (t) {
                    return !1
                }
            },
            i = function(t) {
                try {
                    return !o(t) && (r.call(t), !0)
                } catch (t) {
                    return !1
                }
            },
            u = Object.prototype.toString,
            a = "[object Function]",
            c = "[object GeneratorFunction]",
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        t.exports = function(t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (s) return i(t);
            if (o(t)) return !1;
            var e = u.call(t);
            return e === a || e === c
        }
    }, function(t, e) {
        /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
        "use strict";

        function r(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }

        function n() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                var n = Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                });
                if ("0123456789" !== n.join("")) return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    o[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (t) {
                return !1
            }
        }
        var o = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            u = Object.prototype.propertyIsEnumerable;
        t.exports = n() ? Object.assign : function(t, e) {
            for (var n, a, c = r(t), s = 1; s < arguments.length; s++) {
                n = Object(arguments[s]);
                for (var l in n) i.call(n, l) && (c[l] = n[l]);
                if (o) {
                    a = o(n);
                    for (var f = 0; f < a.length; f++) u.call(n, a[f]) && (c[a[f]] = n[a[f]])
                }
            }
            return c
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(6),
            o = r(1).supportsDescriptors; /*! https://mths.be/array-from v0.2.0 by @mathias */
        t.exports = function(t) {
            var e = o ? Object.defineProperty : function(t, e, r) {
                    t[e] = r.value
                },
                r = this;
            if (null === t || "undefined" == typeof t) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
            var i, u, a = n.ToObject(t);
            if ("undefined" != typeof arguments[1]) {
                if (i = arguments[1], !n.IsCallable(i)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");
                arguments.length > 2 && (u = arguments[2])
            }
            for (var c, s, l = n.ToLength(a.length), f = n.IsCallable(r) ? n.ToObject(new r(l)) : new Array(l), y = 0; y < l;) c = a[y], s = i ? "undefined" == typeof u ? i(c, y) : n.Call(i, u, [c, y]) : c, e(f, y, {
                configurable: !0,
                enumerable: !0,
                value: s,
                writable: !0
            }), y += 1;
            return f.length = l, f
        }
    }, function(t, e, r) {
        "use strict";
        t.exports = r(19)
    }, function(t, e) {
        var r = Number.isNaN || function(t) {
            return t !== t
        };
        t.exports = Number.isFinite || function(t) {
            return "number" == typeof t && !r(t) && t !== 1 / 0 && t !== -(1 / 0)
        }
    }, function(t, e) {
        t.exports = Number.isNaN || function(t) {
            return t !== t
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            var r = t % e;
            return Math.floor(r >= 0 ? r : r + e)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t >= 0 ? 1 : -1
        }
    }, function(t, e) {
        t.exports = function(t) {
            return null === t || "function" != typeof t && "object" != typeof t
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(27);
        t.exports = Function.prototype.bind || n
    }, function(t, e, r) {
        "use strict";
        var n = r(6),
            o = r(5),
            i = function(t) {
                try {
                    return t(), !0
                } catch (t) {
                    return !1
                }
            };
        t.exports = function() {
            var t = n.IsCallable(Array.from) && i(function() {
                Array.from({
                    length: -(1 / 0)
                })
            }) && !i(function() {
                Array.from([], void 0)
            });
            return t ? Array.from : o
        }
    }, function(t, e) {
        "use strict";

        function r(t, e) {
            var r = e.bubbles,
                n = void 0 !== r && r,
                o = e.cancelable,
                i = void 0 !== o && o,
                u = e.detail,
                a = void 0 === u ? void 0 : u,
                c = void 0;
            try {
                c = new window.CustomEvent(t, {
                    bubbles: n,
                    cancelable: i,
                    detail: a
                })
            } catch (e) {
                c = document.createEvent("CustomEvent"), c.initCustomEvent(t, n, i, a)
            }
            return c
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = r, r.prototype = window.Event.prototype
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r(5),
            i = r(13),
            u = r(29),
            a = function(t) {
                return o.apply(this || Array, arguments)
            };
        n(a, {
            getPolyfill: i,
            implementation: o,
            shim: u
        }), t.exports = a
    }, function(t, e) {
        var r = Object.prototype.hasOwnProperty,
            n = Object.prototype.toString;
        t.exports = function(t, e, o) {
            if ("[object Function]" !== n.call(e)) throw new TypeError("iterator must be a function");
            var i = t.length;
            if (i === +i)
                for (var u = 0; u < i; u++) e.call(o, t[u], u, t);
            else
                for (var a in t) r.call(t, a) && e.call(o, t[a], a, t)
        }
    }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            o = Object.prototype.toString,
            i = Array.prototype.slice,
            u = r(18),
            a = Object.prototype.propertyIsEnumerable,
            c = !a.call({
                toString: null
            }, "toString"),
            s = a.call(function() {}, "prototype"),
            l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            f = function(t) {
                var e = t.constructor;
                return e && e.prototype === t
            },
            y = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            p = function() {
                if ("undefined" == typeof window) return !1;
                for (var t in window) try {
                    if (!y["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                        f(window[t])
                    } catch (t) {
                        return !0
                    }
                } catch (t) {
                    return !0
                }
                return !1
            }(),
            b = function(t) {
                if ("undefined" == typeof window || !p) return f(t);
                try {
                    return f(t)
                } catch (t) {
                    return !1
                }
            },
            d = function(t) {
                var e = null !== t && "object" == typeof t,
                    r = "[object Function]" === o.call(t),
                    i = u(t),
                    a = e && "[object String]" === o.call(t),
                    f = [];
                if (!e && !r && !i) throw new TypeError("Object.keys called on a non-object");
                var y = s && r;
                if (a && t.length > 0 && !n.call(t, 0))
                    for (var p = 0; p < t.length; ++p) f.push(String(p));
                if (i && t.length > 0)
                    for (var d = 0; d < t.length; ++d) f.push(String(d));
                else
                    for (var h in t) y && "prototype" === h || !n.call(t, h) || f.push(String(h));
                if (c)
                    for (var M = b(t), g = 0; g < l.length; ++g) M && "constructor" === l[g] || !n.call(t, l[g]) || f.push(l[g]);
                return f
            };
        d.shim = function() {
            if (Object.keys) {
                var t = function() {
                    return 2 === (Object.keys(arguments) || "").length
                }(1, 2);
                if (!t) {
                    var e = Object.keys;
                    Object.keys = function(t) {
                        return e(u(t) ? i.call(t) : t)
                    }
                }
            } else Object.keys = d;
            return Object.keys || d
        }, t.exports = d
    }, function(t, e) {
        "use strict";
        var r = Object.prototype.toString;
        t.exports = function(t) {
            var e = r.call(t),
                n = "[object Arguments]" === e;
            return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(2),
            o = r(24),
            i = Object.prototype.toString,
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
            a = r(8),
            c = r(7),
            s = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
            l = r(21),
            f = r(10),
            y = r(9),
            p = r(22),
            b = parseInt,
            d = r(12),
            h = d.call(Function.call, Array.prototype.slice),
            M = d.call(Function.call, String.prototype.slice),
            g = d.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i),
            T = d.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i),
            w = d.call(Function.call, RegExp.prototype.exec),
            m = ["", "​", "￾"].join(""),
            j = new RegExp("[" + m + "]", "g"),
            v = d.call(Function.call, RegExp.prototype.test, j),
            N = /^[-+]0x[0-9a-f]+$/i,
            x = d.call(Function.call, RegExp.prototype.test, N),
            L = ["\t\n\v\f\r �  � �    ", "         　\u2028", "\u2029\ufeff"].join(""),
            E = new RegExp("(^[" + L + "]+)|([" + L + "]+$)", "g"),
            D = d.call(Function.call, String.prototype.replace),
            S = function(t) {
                return D(t, E, "")
            },
            O = r(20),
            I = r(28),
            z = l(l({}, O), {
                Call: function(t, e) {
                    var r = arguments.length > 2 ? arguments[2] : [];
                    if (!this.IsCallable(t)) throw new TypeError(t + " is not a function");
                    return t.apply(e, r)
                },
                ToPrimitive: o,
                ToNumber: function(t) {
                    var e = p(t) ? t : o(t, Number);
                    if ("symbol" == typeof e) throw new TypeError("Cannot convert a Symbol value to a number");
                    if ("string" == typeof e) {
                        if (g(e)) return this.ToNumber(b(M(e, 2), 2));
                        if (T(e)) return this.ToNumber(b(M(e, 2), 8));
                        if (v(e) || x(e)) return NaN;
                        var r = S(e);
                        if (r !== e) return this.ToNumber(r)
                    }
                    return Number(e)
                },
                ToInt16: function(t) {
                    var e = this.ToUint16(t);
                    return e >= 32768 ? e - 65536 : e
                },
                ToInt8: function(t) {
                    var e = this.ToUint8(t);
                    return e >= 128 ? e - 256 : e
                },
                ToUint8: function(t) {
                    var e = this.ToNumber(t);
                    if (a(e) || 0 === e || !c(e)) return 0;
                    var r = f(e) * Math.floor(Math.abs(e));
                    return y(r, 256)
                },
                ToUint8Clamp: function(t) {
                    var e = this.ToNumber(t);
                    if (a(e) || e <= 0) return 0;
                    if (e >= 255) return 255;
                    var r = Math.floor(t);
                    return r + .5 < e ? r + 1 : e < r + .5 ? r : r % 2 !== 0 ? r + 1 : r
                },
                ToString: function(t) {
                    if ("symbol" == typeof t) throw new TypeError("Cannot convert a Symbol value to a string");
                    return String(t)
                },
                ToObject: function(t) {
                    return this.RequireObjectCoercible(t), Object(t)
                },
                ToPropertyKey: function(t) {
                    var e = this.ToPrimitive(t, String);
                    return "symbol" == typeof e ? e : this.ToString(e)
                },
                ToLength: function(t) {
                    var e = this.ToInteger(t);
                    return e <= 0 ? 0 : e > s ? s : e
                },
                CanonicalNumericIndexString: function(t) {
                    if ("[object String]" !== i.call(t)) throw new TypeError("must be a string");
                    if ("-0" === t) return -0;
                    var e = this.ToNumber(t);
                    return this.SameValue(this.ToString(e), t) ? e : void 0
                },
                RequireObjectCoercible: O.CheckObjectCoercible,
                IsArray: Array.isArray || function(t) {
                    return "[object Array]" === i.call(t)
                },
                IsConstructor: function(t) {
                    return "function" == typeof t && !!t.prototype
                },
                IsExtensible: function(t) {
                    return !Object.preventExtensions || !p(t) && Object.isExtensible(t)
                },
                IsInteger: function(t) {
                    if ("number" != typeof t || a(t) || !c(t)) return !1;
                    var e = Math.abs(t);
                    return Math.floor(e) === e
                },
                IsPropertyKey: function(t) {
                    return "string" == typeof t || "symbol" == typeof t
                },
                IsRegExp: function(t) {
                    if (!t || "object" != typeof t) return !1;
                    if (u) {
                        var e = t[Symbol.match];
                        if ("undefined" != typeof e) return O.ToBoolean(e)
                    }
                    return I(t)
                },
                SameValueZero: function(t, e) {
                    return t === e || a(t) && a(e)
                },
                GetV: function(t, e) {
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var r = this.ToObject(t);
                    return r[e]
                },
                GetMethod: function(t, e) {
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var r = this.GetV(t, e);
                    if (null != r) {
                        if (!this.IsCallable(r)) throw new TypeError(e + "is not a function");
                        return r
                    }
                },
                Get: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    return t[e]
                },
                Type: function(t) {
                    return "symbol" == typeof t ? "Symbol" : O.Type(t)
                },
                SpeciesConstructor: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    var r = t.constructor;
                    if ("undefined" == typeof r) return e;
                    if ("Object" !== this.Type(r)) throw new TypeError("O.constructor is not an Object");
                    var n = u && Symbol.species ? r[Symbol.species] : void 0;
                    if (null == n) return e;
                    if (this.IsConstructor(n)) return n;
                    throw new TypeError("no constructor found")
                },
                CompletePropertyDescriptor: function(t) {
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return this.IsGenericDescriptor(t) || this.IsDataDescriptor(t) ? (n(t, "[[Value]]") || (t["[[Value]]"] = void 0), n(t, "[[Writable]]") || (t["[[Writable]]"] = !1)) : (n(t, "[[Get]]") || (t["[[Get]]"] = void 0), n(t, "[[Set]]") || (t["[[Set]]"] = void 0)), n(t, "[[Enumerable]]") || (t["[[Enumerable]]"] = !1), n(t, "[[Configurable]]") || (t["[[Configurable]]"] = !1), t
                },
                Set: function(t, e, r, n) {
                    if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    if ("Boolean" !== this.Type(n)) throw new TypeError("Throw must be a Boolean");
                    if (n) return t[e] = r, !0;
                    try {
                        t[e] = r
                    } catch (t) {
                        return !1
                    }
                },
                HasOwnProperty: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    return n(t, e)
                },
                HasProperty: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    return e in t
                },
                IsConcatSpreadable: function(t) {
                    if ("Object" !== this.Type(t)) return !1;
                    if (u && "symbol" == typeof Symbol.isConcatSpreadable) {
                        var e = this.Get(t, Symbol.isConcatSpreadable);
                        if ("undefined" != typeof e) return this.ToBoolean(e)
                    }
                    return this.IsArray(t)
                },
                Invoke: function(t, e) {
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    var r = h(arguments, 2),
                        n = this.GetV(t, e);
                    return this.Call(n, t, r)
                },
                CreateIterResultObject: function(t, e) {
                    if ("Boolean" !== this.Type(e)) throw new TypeError("Assertion failed: Type(done) is not Boolean");
                    return {
                        value: t,
                        done: e
                    }
                },
                RegExpExec: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("R must be an Object");
                    if ("String" !== this.Type(e)) throw new TypeError("S must be a String");
                    var r = this.Get(t, "exec");
                    if (this.IsCallable(r)) {
                        var n = this.Call(r, t, [e]);
                        if (null === n || "Object" === this.Type(n)) return n;
                        throw new TypeError('"exec" method must return `null` or an Object')
                    }
                    return w(t, e)
                },
                ArraySpeciesCreate: function(t, e) {
                    if (!this.IsInteger(e) || e < 0) throw new TypeError("Assertion failed: length must be an integer >= 0");
                    var r, n = 0 === e ? 0 : e,
                        o = this.IsArray(t);
                    if (o && (r = this.Get(t, "constructor"), "Object" === this.Type(r) && u && Symbol.species && (r = this.Get(r, Symbol.species), null === r && (r = void 0))), "undefined" == typeof r) return Array(n);
                    if (!this.IsConstructor(r)) throw new TypeError("C must be a constructor");
                    return new r(n)
                },
                CreateDataProperty: function(t, e, r) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var n = Object.getOwnPropertyDescriptor(t, e),
                        o = n || "function" != typeof Object.isExtensible || Object.isExtensible(t),
                        i = n && (!n.writable || !n.configurable);
                    if (i || !o) return !1;
                    var u = {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    };
                    return Object.defineProperty(t, e, u), !0
                },
                CreateDataPropertyOrThrow: function(t, e, r) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var n = this.CreateDataProperty(t, e, r);
                    if (!n) throw new TypeError("unable to create data property");
                    return n
                },
                AdvanceStringIndex: function(t, e, r) {
                    if ("String" !== this.Type(t)) throw new TypeError("Assertion failed: Type(S) is not String");
                    if (!this.IsInteger(e)) throw new TypeError("Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)");
                    if (e < 0 || e > s) throw new RangeError("Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)");
                    if ("Boolean" !== this.Type(r)) throw new TypeError("Assertion failed: Type(unicode) is not Boolean");
                    if (!r) return e + 1;
                    var n = t.length;
                    if (e + 1 >= n) return e + 1;
                    var o = t.charCodeAt(e);
                    if (o < 55296 || o > 56319) return e + 1;
                    var i = t.charCodeAt(e + 1);
                    return i < 56320 || i > 57343 ? e + 1 : e + 2
                }
            });
        delete z.CheckObjectCoercible, t.exports = z
    }, function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(7),
            i = r(10),
            u = r(9),
            a = r(3),
            c = r(23),
            s = r(2),
            l = {
                ToPrimitive: c,
                ToBoolean: function(t) {
                    return !!t
                },
                ToNumber: function(t) {
                    return Number(t)
                },
                ToInteger: function(t) {
                    var e = this.ToNumber(t);
                    return n(e) ? 0 : 0 !== e && o(e) ? i(e) * Math.floor(Math.abs(e)) : e
                },
                ToInt32: function(t) {
                    return this.ToNumber(t) >> 0
                },
                ToUint32: function(t) {
                    return this.ToNumber(t) >>> 0
                },
                ToUint16: function(t) {
                    var e = this.ToNumber(t);
                    if (n(e) || 0 === e || !o(e)) return 0;
                    var r = i(e) * Math.floor(Math.abs(e));
                    return u(r, 65536)
                },
                ToString: function(t) {
                    return String(t)
                },
                ToObject: function(t) {
                    return this.CheckObjectCoercible(t), Object(t)
                },
                CheckObjectCoercible: function(t, e) {
                    if (null == t) throw new TypeError(e || "Cannot call method on " + t);
                    return t
                },
                IsCallable: a,
                SameValue: function(t, e) {
                    return t === e ? 0 !== t || 1 / t === 1 / e : n(t) && n(e)
                },
                Type: function(t) {
                    return null === t ? "Null" : "undefined" == typeof t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
                },
                IsPropertyDescriptor: function(t) {
                    if ("Object" !== this.Type(t)) return !1;
                    var e = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    for (var r in t)
                        if (s(t, r) && !e[r]) return !1;
                    var n = s(t, "[[Value]]"),
                        o = s(t, "[[Get]]") || s(t, "[[Set]]");
                    if (n && o) throw new TypeError("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                },
                IsAccessorDescriptor: function(t) {
                    if ("undefined" == typeof t) return !1;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return !(!s(t, "[[Get]]") && !s(t, "[[Set]]"))
                },
                IsDataDescriptor: function(t) {
                    if ("undefined" == typeof t) return !1;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return !(!s(t, "[[Value]]") && !s(t, "[[Writable]]"))
                },
                IsGenericDescriptor: function(t) {
                    if ("undefined" == typeof t) return !1;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t)
                },
                FromPropertyDescriptor: function(t) {
                    if ("undefined" == typeof t) return t;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    if (this.IsDataDescriptor(t)) return {
                        value: t["[[Value]]"],
                        writable: !!t["[[Writable]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    if (this.IsAccessorDescriptor(t)) return {
                        get: t["[[Get]]"],
                        set: t["[[Set]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    throw new TypeError("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
                },
                ToPropertyDescriptor: function(t) {
                    if ("Object" !== this.Type(t)) throw new TypeError("ToPropertyDescriptor requires an object");
                    var e = {};
                    if (s(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), s(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), s(t, "value") && (e["[[Value]]"] = t.value), s(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), s(t, "get")) {
                        var r = t.get;
                        if ("undefined" != typeof r && !this.IsCallable(r)) throw new TypeError("getter must be a function");
                        e["[[Get]]"] = r
                    }
                    if (s(t, "set")) {
                        var n = t.set;
                        if ("undefined" != typeof n && !this.IsCallable(n)) throw new TypeError("setter must be a function");
                        e["[[Set]]"] = n
                    }
                    if ((s(e, "[[Get]]") || s(e, "[[Set]]")) && (s(e, "[[Value]]") || s(e, "[[Writable]]"))) throw new TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                    return e
                }
            };
        t.exports = l
    }, function(t, e) {
        var r = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            if (Object.assign) return Object.assign(t, e);
            for (var n in e) r.call(e, n) && (t[n] = e[n]);
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return null === t || "function" != typeof t && "object" != typeof t
        }
    }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.toString,
            o = r(11),
            i = r(3),
            u = {
                "[[DefaultValue]]": function(t, e) {
                    var r = e || ("[object Date]" === n.call(t) ? String : Number);
                    if (r === String || r === Number) {
                        var u, a, c = r === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                        for (a = 0; a < c.length; ++a)
                            if (i(t[c[a]]) && (u = t[c[a]](), o(u))) return u;
                        throw new TypeError("No default value")
                    }
                    throw new TypeError("invalid [[DefaultValue]] hint supplied")
                }
            };
        t.exports = function(t, e) {
            return o(t) ? t : u["[[DefaultValue]]"](t, e)
        }
    }, function(t, e, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
            o = r(11),
            i = r(3),
            u = r(25),
            a = r(26),
            c = function(t, e) {
                if ("undefined" == typeof t || null === t) throw new TypeError("Cannot call method on " + t);
                if ("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
                var r, n, u, a = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
                for (u = 0; u < a.length; ++u)
                    if (r = t[a[u]], i(r) && (n = r.call(t), o(n))) return n;
                throw new TypeError("No default value")
            },
            s = function(t, e) {
                var r = t[e];
                if (null !== r && "undefined" != typeof r) {
                    if (!i(r)) throw new TypeError(r + " returned for property " + e + " of object " + t + " is not a function");
                    return r
                }
            };
        t.exports = function(t, e) {
            if (o(t)) return t;
            var r = "default";
            arguments.length > 1 && (e === String ? r = "string" : e === Number && (r = "number"));
            var i;
            if (n && (Symbol.toPrimitive ? i = s(t, Symbol.toPrimitive) : a(t) && (i = Symbol.prototype.valueOf)), "undefined" != typeof i) {
                var l = i.call(t, r);
                if (o(l)) return l;
                throw new TypeError("unable to convert exotic object to primitive")
            }
            return "default" === r && (u(t) || a(t)) && (r = "string"), c(t, "default" === r ? "number" : r)
        }
    }, function(t, e) {
        "use strict";
        var r = Date.prototype.getDay,
            n = function(t) {
                try {
                    return r.call(t), !0
                } catch (t) {
                    return !1
                }
            },
            o = Object.prototype.toString,
            i = "[object Date]",
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        t.exports = function(t) {
            return "object" == typeof t && null !== t && (u ? n(t) : o.call(t) === i)
        }
    }, function(t, e) {
        "use strict";
        var r = Object.prototype.toString,
            n = "function" == typeof Symbol && "symbol" == typeof Symbol();
        if (n) {
            var o = Symbol.prototype.toString,
                i = /^Symbol\(.*\)$/,
                u = function(t) {
                    return "symbol" == typeof t.valueOf() && i.test(o.call(t))
                };
            t.exports = function(t) {
                if ("symbol" == typeof t) return !0;
                if ("[object Symbol]" !== r.call(t)) return !1;
                try {
                    return u(t)
                } catch (t) {
                    return !1
                }
            }
        } else t.exports = function(t) {
            return !1
        }
    }, function(t, e) {
        "use strict";
        var r = "Function.prototype.bind called on incompatible ",
            n = Array.prototype.slice,
            o = Object.prototype.toString,
            i = "[object Function]";
        t.exports = function(t) {
            var e = this;
            if ("function" != typeof e || o.call(e) !== i) throw new TypeError(r + e);
            for (var u, a = n.call(arguments, 1), c = function() {
                    if (this instanceof u) {
                        var r = e.apply(this, a.concat(n.call(arguments)));
                        return Object(r) === r ? r : this
                    }
                    return e.apply(t, a.concat(n.call(arguments)))
                }, s = Math.max(0, e.length - a.length), l = [], f = 0; f < s; f++) l.push("$" + f);
            if (u = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(c), e.prototype) {
                var y = function() {};
                y.prototype = e.prototype, u.prototype = new y, y.prototype = null
            }
            return u
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(2),
            o = RegExp.prototype.exec,
            i = Object.getOwnPropertyDescriptor,
            u = function(t) {
                try {
                    var e = t.lastIndex;
                    return t.lastIndex = 0, o.call(t), !0
                } catch (t) {
                    return !1
                } finally {
                    t.lastIndex = e
                }
            },
            a = Object.prototype.toString,
            c = "[object RegExp]",
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        t.exports = function(t) {
            if (!t || "object" != typeof t) return !1;
            if (!s) return a.call(t) === c;
            var e = i(t, "lastIndex"),
                r = e && n(e, "value");
            return !!r && u(t)
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r(13);
        t.exports = function() {
            var t = o();
            return n(Array, {
                from: t
            }, {
                from: function() {
                    return Array.from !== t
                }
            }), t
        }
    }, function(t, e) {
        "use strict";

        function r(t) {
            if ("function" == typeof Symbol) return Symbol(t);
            var e = Math.random().toString(36).substr(2, 8);
            return t + e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = r
    }, function(t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e
        }

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            a = r(15),
            c = r(4),
            s = o(c),
            l = (r(37), r(30)),
            f = o(l),
            y = r(14),
            p = o(y),
            b = r(33),
            d = o(b),
            h = r(35),
            M = o(h),
            g = r(32),
            T = n(g),
            w = r(34),
            m = o(w);
        Array.from || (0, a.shim)();
        var j = function(t) {
                if (t) {
                    var e = t.trim().toLowerCase();
                    if ("true" === e || "1" === e) return !0;
                    if ("false" === e || "0" === e) return !1
                }
                return t
            },
            v = function(t, e) {
                if (!e) return t;
                var r = {};
                return Object.keys(t).forEach(function(t) {
                    var n = "data-" + t;
                    if (e.hasAttribute(n)) {
                        var o = e.getAttribute(n);
                        r[t] = o
                    }
                }), (0, s.default)({}, t, r)
            },
            N = 32,
            x = 13,
            L = function(t, e) {
                t = (0, T.default)(t);
                var r = function(t) {
                    if ("click" === t.type || "keydown" === t.type && (t.keyCode === N || t.keyCode === x)) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        e.call.apply(e, [this, t].concat(n))
                    }
                };
                return T.on(t, "click keydown", r),
                    function() {
                        T.off(t, "click keydown", r)
                    }
            },
            E = function() {
                var t = new d.default,
                    e = t.createElement("style");
                return e.innerHTML = M.default, T.prependElementTo(e, (0, T.default)("head")[0]), t
            },
            D = function(t) {
                var e = new d.default,
                    r = t.targetElement;
                return r.forEach(function(r) {
                    var n = v(t, r);
                    if (n.room) {
                        var o = e.createElement("iframe");
                        o.setAttribute("frameborder", "0"), o.src = "" + t.host + "#converse/room?jid=" + n.room, r.appendChild(o), o.id = "pade-converse"
                    } else console.error("Gitter Sidecar: No room specified for targetElement", r)
                }), e
            },
            S = function(t) {
                var e = t.options,
                    r = new d.default;
                return e.targetElement.forEach(function(n) {
                    var o = r.createElement("div");
                    o.classList.add("gitter-chat-embed-action-bar"), n.insertBefore(o, n.firstChild);
                    var i = r.createElement("a");
                    i.classList.add("gitter-chat-embed-action-bar-item"), /*i.classList.add("gitter-chat-embed-action-bar-item-pop-out"),*/ i.setAttribute("aria-label", "Open Chat in Gitter.im"), i.setAttribute("href", "" + e.host), i.setAttribute("target", "_blank"), o.appendChild(i);
                    var u = r.createElement("button");
                    u.classList.add("gitter-chat-embed-action-bar-item"), u.classList.add("gitter-chat-embed-action-bar-item-collapse-chat"), u.setAttribute("aria-label", "Collapse Gitter Chat"), L(u, function(e) {
                        t.toggleChat(!1), e.preventDefault()
                    }), o.appendChild(u)
                }), r
            },
            O = document.body || document.documentElement,
            I = {
                room: void 0,
                targetElement: void 0,
                activationElement: void 0,
                showChatByDefault: !1,
                preload: !1,
                useStyles: !0,
                layout: "fixed",
                host: "inverse/index.html"
            },
            z = (0, f.default)("DEFAULTS"),
            A = (0, f.default)("OPTIONS"),
            C = (0, f.default)("ELEMENTSTORE"),
            k = (0, f.default)("EVENTHANDLESTORE"),
            U = (0, f.default)("INIT"),
            P = (0, f.default)("ISEMBEDDED"),
            _ = (0, f.default)("EMBEDCHATONCE"),
            Y = (0, f.default)("TOGGLETARGETELEMENTS"),
            Q = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t), this[C] = new d.default, this[k] = [], this[z] = (0, s.default)({}, I), this[A] = (0, s.default)({}, this[z], e), this[U]()
                }
                return u(t, [{
                    key: U,
                    value: function() {
                        var t = this,
                            e = this[A];
                        e.useStyles && this[C].add(E()), e.targetElement = (0, T.default)(e.targetElement || function() {
                            var e = t[C].createElement("aside");
                            return e.classList.add("gitter-chat-embed"), e.classList.add("is-collapsed"), O.appendChild(e), e
                        }()), e.targetElement.forEach(function(e) {
                            var r = t[C].createElement("div");
                            r.classList.add("gitter-chat-embed-loading-wrapper"), r.innerHTML = '\n        <div class="gitter-chat-embed-loading-indicator gitter-icon"></div>\n      ', e.insertBefore(r, e.firstChild)
                        }), S(this), e.preload && this.toggleChat(!1), e.showChatByDefault ? this.toggleChat(!0) : (void 0 === e.activationElement || e.activationElement === !0 ? e.activationElement = (0, T.default)(function() {
                            var r = t[C].createElement("a");
                            return r.href = "" + e.host, r.innerHTML = "Open Chat", r.classList.add("gitter-open-chat-button"), O.appendChild(r), r
                        }()) : e.activationElement && (e.activationElement = (0, T.default)(e.activationElement)), e.activationElement && (L(e.activationElement, function(e) {
                            t.toggleChat(!0), e.preventDefault()
                        }), e.targetElement.forEach(function(t) {
                            T.on(t, "gitter-chat-toggle", function(t) {
                                var r = t.detail.state;
                                e.activationElement.forEach(function(t) {
                                    T.toggleClass(t, "is-collapsed", r)
                                })
                            })
                        })));
                        var r = L((0, T.default)(".js-gitter-toggle-chat-button"), function(e) {
                            var r = j(e.target.getAttribute("data-gitter-toggle-chat-state"));
                            t.toggleChat(null !== r ? r : "toggle"), e.preventDefault()
                        });
                        this[k].push(r), e.targetElement.forEach(function(e) {
                            var r = new p.default("gitter-chat-started", {
                                detail: {
                                    chat: t
                                }
                            });
                            e.dispatchEvent(r)
                        });
                        var n = new p.default("gitter-sidecar-instance-started", {
                            detail: {
                                chat: this
                            }
                        });
                        document.dispatchEvent(n)
                    }
                }, {
                    key: _,
                    value: function() {
                        if (!this[P]) {
                            var t = this[A],
                                e = D(t);
                            this[C].add(e)
                        }
                        this[P] = !0
                    }
                }, {
                    key: Y,
                    value: function(t) {
                        var e = this[A];
                        e.targetElement || console.warn("Gitter Sidecar: No chat embed elements to toggle visibility on");
                        var r = e.targetElement;
                        r.forEach(function(e) {
                            "toggle" === t ? T.toggleClass(e, "is-collapsed") : T.toggleClass(e, "is-collapsed", !t);
                            var r = new p.default("gitter-chat-toggle", {
                                detail: {
                                    state: t
                                }
                            });
                            e.dispatchEvent(r)
                        })
                    }
                }, {
                    key: "toggleChat",
                    value: function(t) {
                        var e = this,
                            r = this[A];
                        if (t && !this[P]) {
                            var n = r.targetElement;
                            n.forEach(function(t) {
                                t.classList.add("is-loading")
                            }), setTimeout(function() {
                                e[_](), e[Y](t), n.forEach(function(t) {
                                    t.classList.remove("is-loading")
                                })
                            }, 300)
                        } else this[_](), this[Y](t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this[k].forEach(function(t) {
                            t()
                        }), this[C].destroy()
                    }
                }, {
                    key: "options",
                    get: function() {
                        return (0, m.default)(this[A])
                    }
                }]), t
            }();
        e.default = Q
    }, function(t, e) {
        "use strict";

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                return r
            }
            return Array.from(t)
        }

        function n(t, e) {
            return c(t).forEach(function() {
                e && e.apply(void 0, arguments)
            }), this
        }

        function o(t, e, r) {
            return e.split(/\s/).forEach(function(e) {
                n(t, function(t) {
                    t.addEventListener(e, r)
                })
            }), this
        }

        function i(t, e, r) {
            return e.split(/\s/).forEach(function(e) {
                n(t, function(t) {
                    t.removeEventListener(e, r)
                })
            }), this
        }

        function u(t, e) {
            var r = (e.children || [])[0];
            r ? e.insertBefore(t, r) : e.appendChild(t)
        }

        function a(t, e, r) {
            return void 0 !== r ? r ? t.classList.add(e) : t.classList.remove(e) : t.classList.toggle(e), r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.forEach = n, e.on = o, e.off = i, e.prependElementTo = u, e.toggleClass = a;
        var c = function() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e.reduce(function(t, e) {
                    return !e || void 0 === e.length || Array.isArray(e) || window && (!window || e instanceof window.constructor) || (e = Array.prototype.slice.call(e)), t.concat(e)
                }, [])
            },
            s = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var o = e;
                if ("string" == typeof e[0]) {
                    var i;
                    o = (i = document.querySelectorAll).call.apply(i, [document].concat(e))
                }
                return c.apply(void 0, r(o))
            },
            l = function() {
                return s.apply(void 0, arguments)
            };
        e.default = l
    }, function(t, e, r) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            u = r(4),
            a = (n(u), function(t) {
                t && t.parentElement.removeChild(t)
            }),
            c = function() {
                function t() {
                    o(this, t), this.elements = []
                }
                return i(t, [{
                    key: "createElement",
                    value: function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        var n = document.createElement.apply(document, e);
                        return this.add(n), n
                    }
                }, {
                    key: "add",
                    value: function() {
                        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        var o = [].concat(r).reduce(function(e, r) {
                            return r ? r instanceof t ? e.concat(r.elements) : e.concat(r) : e
                        }, []);
                        this.elements = this.elements.concat(o)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.elements.forEach(function(t) {
                            return a(t)
                        }), this.elements = []
                    }
                }]), t
            }();
        e.default = c
    }, function(t, e) {
        "use strict";

        function r(t) {
            var e = {};
            return Object.keys(t).forEach(function(r) {
                Object.defineProperty(e, r, {
                    value: t[r],
                    writable: !1,
                    configurable: !1
                })
            }), e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = r
    }, function(t, e, r) {
        e = t.exports = r(36)(), e.push([t.id, '.gitter-hidden{box-sizing:border-box;display:none}.gitter-icon{box-sizing:border-box;width:22px;height:22px;fill:currentColor}.gitter-chat-embed{box-sizing:border-box;z-index:100000;position:fixed;top:0;left:45%;bottom:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;background-color:#fff;border-left:1px solid #333;box-shadow:-12px 0 18px 0 rgba(50,50,50,.3);transition:transform .3s cubic-bezier(.16,.22,.22,1.7)}@context border-box{.gitter-chat-embed{box-sizing:border-box;background-color:#fff}}.gitter-chat-embed.is-collapsed:not(.is-loading){box-sizing:border-box;transform:translateX(110%)}.gitter-chat-embed:after{box-sizing:border-box;content:"";z-index:-1;position:absolute;top:0;left:100%;bottom:0;right:-100%;background-color:#fff}@context border-box{.gitter-chat-embed:after{box-sizing:border-box;background-color:#fff}}@media(max-width:1150px){.gitter-chat-embed{box-sizing:border-box;left:45%}}@media(max-width:944px){.gitter-chat-embed{box-sizing:border-box;left:10%}}@media(max-width:600px){.gitter-chat-embed{box-sizing:border-box;left:15%}}@media(max-width:500px){.gitter-chat-embed{box-sizing:border-box;left:0;border-left:none}}.gitter-chat-embed>iframe{box-sizing:border-box;-ms-flex:1;flex:1;width:100%;height:100%;border:0}.gitter-chat-embed-loading-wrapper{box-sizing:border-box;position:absolute;top:0;left:0;bottom:0;right:0;display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.is-loading .gitter-chat-embed-loading-wrapper{box-sizing:border-box;display:-ms-flexbox;display:flex}.gitter-chat-embed-loading-indicator{box-sizing:border-box;opacity:.75;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIGZpbGw9IiMzYTMxMzMiPjxwYXRoIGQ9Ik01MjYgMTM5NHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41cS01MiAwLTkwLTM4dC0zOC05MHEwLTUzIDM3LjUtOTAuNXQ5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptNDk4IDIwNnEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0tNzA0LTcwNHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0xMjAyIDQ5OHEwIDUyLTM4IDkwdC05MCAzOHEtNTMgMC05MC41LTM3LjV0LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS05NjQtOTk2cTAgNjYtNDcgMTEzdC0xMTMgNDctMTEzLTQ3LTQ3LTExMyA0Ny0xMTMgMTEzLTQ3IDExMyA0NyA0NyAxMTN6bTExNzAgNDk4cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS02NDAtNzA0cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTUzMCAyMDZxMCA5My02NiAxNTguNXQtMTU4IDY1LjVxLTkzIDAtMTU4LjUtNjUuNXQtNjUuNS0xNTguNXEwLTkyIDY1LjUtMTU4dDE1OC41LTY2cTkyIDAgMTU4IDY2dDY2IDE1OHoiLz48L3N2Zz4=);animation:spin 2s infinite linear}@keyframes spin{0%{box-sizing:border-box;transform:rotate(0deg)}to{box-sizing:border-box;transform:rotate(359.9deg)}}.gitter-chat-embed-action-bar{box-sizing:border-box;position:absolute;top:40px;left:0;width:80px;right:0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:.7em;/*background:linear-gradient(180deg,#fff 0,#fff 50%,hsla(0,0%,100%,0))*/}.gitter-chat-embed-action-bar-item{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:40px;padding-left:0;padding-right:0;opacity:.65;background:none;background-position:50%;background-repeat:no-repeat;background-size:22px 22px;border:0;outline:none;cursor:pointer;cursor:hand;transition:all .2s ease}.gitter-chat-embed-action-bar-item:focus,.gitter-chat-embed-action-bar-item:hover{box-sizing:border-box;opacity:1}.gitter-chat-embed-action-bar-item:active{box-sizing:border-box;-webkit-filter:hue-rotate(80deg) saturate(150);filter:hue-rotate(80deg) saturate(150)}.gitter-chat-embed-action-bar-item-pop-out{box-sizing:border-box;margin-right:-4px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTcxLjQyOSIgZmlsbD0iIzNhMzEzMyI+PHBhdGggZD0iTTE1Ny4xNDMsMTAzLjU3MXYzNS43MTRjMCw4Ljg1NC0zLjE0NCwxNi40MjYtOS40MzEsMjIuNzEzcy0xMy44NTgsOS40MzEtMjIuNzEyLDkuNDMxSDMyLjE0MyBjLTguODU0LDAtMTYuNDI1LTMuMTQ0LTIyLjcxMi05LjQzMVMwLDE0OC4xNCwwLDEzOS4yODVWNDYuNDI5YzAtOC44NTQsMy4xNDQtMTYuNDI1LDkuNDMxLTIyLjcxMiBjNi4yODctNi4yODcsMTMuODU4LTkuNDMxLDIyLjcxMi05LjQzMWg3OC41NzJjMS4wNDEsMCwxLjg5NiwwLjMzNSwyLjU2NiwxLjAwNGMwLjY3LDAuNjcsMS4wMDQsMS41MjUsMS4wMDQsMi41NjdWMjUgYzAsMS4wNDItMC4zMzQsMS44OTctMS4wMDQsMi41NjdjLTAuNjcsMC42Ny0xLjUyNSwxLjAwNC0yLjU2NiwxLjAwNEgzMi4xNDNjLTQuOTExLDAtOS4xMTUsMS43NDktMTIuNjEyLDUuMjQ2IHMtNS4yNDYsNy43MDEtNS4yNDYsMTIuNjEydjkyLjg1NmMwLDQuOTExLDEuNzQ5LDkuMTE1LDUuMjQ2LDEyLjYxMnM3LjcwMSw1LjI0NSwxMi42MTIsNS4yNDVIMTI1YzQuOTEsMCw5LjExNS0xLjc0OCwxMi42MTEtNS4yNDUgYzMuNDk3LTMuNDk3LDUuMjQ2LTcuNzAxLDUuMjQ2LTEyLjYxMnYtMzUuNzE0YzAtMS4wNDIsMC4zMzQtMS44OTcsMS4wMDQtMi41NjdjMC42Ny0wLjY2OSwxLjUyNS0xLjAwNCwyLjU2Ny0xLjAwNGg3LjE0MyBjMS4wNDIsMCwxLjg5NywwLjMzNSwyLjU2NywxLjAwNEMxNTYuODA5LDEwMS42NzQsMTU3LjE0MywxMDIuNTI5LDE1Ny4xNDMsMTAzLjU3MXogTTIwMCw3LjE0M3Y1Ny4xNDMgYzAsMS45MzUtMC43MDcsMy42MDktMi4xMjEsNS4wMjJjLTEuNDEzLDEuNDE0LTMuMDg4LDIuMTIxLTUuMDIxLDIuMTIxYy0xLjkzNSwwLTMuNjA5LTAuNzA3LTUuMDIyLTIuMTIxbC0xOS42NDQtMTkuNjQzIGwtNzIuNzY3LDcyLjc2OWMtMC43NDQsMC43NDQtMS42LDEuMTE1LTIuNTY3LDEuMTE1cy0xLjgyMy0wLjM3MS0yLjU2Ny0xLjExNUw3Ny41NjcsMTA5LjcxYy0wLjc0NC0wLjc0NC0xLjExNi0xLjYtMS4xMTYtMi41NjcgYzAtMC45NjcsMC4zNzItMS44MjIsMS4xMTYtMi41NjZsNzIuNzY4LTcyLjc2OGwtMTkuNjQ0LTE5LjY0M2MtMS40MTMtMS40MTQtMi4xMi0zLjA4OC0yLjEyLTUuMDIyYzAtMS45MzUsMC43MDctMy42MDksMi4xMi01LjAyMiBDMTMyLjEwNSwwLjcwNywxMzMuNzc5LDAsMTM1LjcxNSwwaDU3LjE0M2MxLjkzNCwwLDMuNjA4LDAuNzA3LDUuMDIxLDIuMTIxQzE5OS4yOTMsMy41MzQsMjAwLDUuMjA4LDIwMCw3LjE0M3oiLz48L3N2Zz4=)}.gitter-chat-embed-action-bar-item-collapse-chat{box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzEuNDI5IDE3MS40MjkiIGZpbGw9IiMzYTMxMzMiPjxwYXRoIGQ9Ik0xMjIuNDMzLDEwNi4xMzhsLTE2LjI5NSwxNi4yOTVjLTAuNzQ0LDAuNzQ0LTEuNiwxLjExNi0yLjU2NiwxLjExNmMtMC45NjgsMC0xLjgyMy0wLjM3Mi0yLjU2Ny0xLjExNmwtMTUuMjktMTUuMjkgbC0xNS4yOSwxNS4yOWMtMC43NDQsMC43NDQtMS42LDEuMTE2LTIuNTY3LDEuMTE2cy0xLjgyMy0wLjM3Mi0yLjU2Ny0xLjExNmwtMTYuMjk0LTE2LjI5NWMtMC43NDQtMC43NDQtMS4xMTYtMS42LTEuMTE2LTIuNTY2IGMwLTAuOTY4LDAuMzcyLTEuODIzLDEuMTE2LTIuNTY3bDE1LjI5LTE1LjI5bC0xNS4yOS0xNS4yOWMtMC43NDQtMC43NDQtMS4xMTYtMS42LTEuMTE2LTIuNTY3czAuMzcyLTEuODIzLDEuMTE2LTIuNTY3IEw2NS4yOSw0OC45OTZjMC43NDQtMC43NDQsMS42LTEuMTE2LDIuNTY3LTEuMTE2czEuODIzLDAuMzcyLDIuNTY3LDEuMTE2bDE1LjI5LDE1LjI5bDE1LjI5LTE1LjI5IGMwLjc0NC0wLjc0NCwxLjYtMS4xMTYsMi41NjctMS4xMTZjMC45NjcsMCwxLjgyMiwwLjM3MiwyLjU2NiwxLjExNmwxNi4yOTUsMTYuMjk0YzAuNzQ0LDAuNzQ0LDEuMTE2LDEuNiwxLjExNiwyLjU2NyBzLTAuMzcyLDEuODIzLTEuMTE2LDIuNTY3bC0xNS4yOSwxNS4yOWwxNS4yOSwxNS4yOWMwLjc0NCwwLjc0NCwxLjExNiwxLjYsMS4xMTYsMi41NjcgQzEyMy41NDksMTA0LjUzOSwxMjMuMTc3LDEwNS4zOTQsMTIyLjQzMywxMDYuMTM4eiBNMTQ2LjQyOSw4NS43MTRjMC0xMS4wMTItMi43MTctMjEuMTY4LTguMTQ4LTMwLjQ2OSBzLTEyLjc5Ny0xNi42NjctMjIuMDk4LTIyLjA5OFM5Ni43MjYsMjUsODUuNzE0LDI1cy0yMS4xNjgsMi43MTYtMzAuNDY5LDguMTQ3UzM4LjU3OSw0NS45NDUsMzMuMTQ3LDU1LjI0NlMyNSw3NC43MDMsMjUsODUuNzE0IHMyLjcxNiwyMS4xNjgsOC4xNDcsMzAuNDY5czEyLjc5NywxNi42NjYsMjIuMDk4LDIyLjA5OHMxOS40NTcsOC4xNDgsMzAuNDY5LDguMTQ4czIxLjE2OC0yLjcxNywzMC40NjktOC4xNDggczE2LjY2Ni0xMi43OTcsMjIuMDk4LTIyLjA5OFMxNDYuNDI5LDk2LjcyNiwxNDYuNDI5LDg1LjcxNHogTTE3MS40MjksODUuNzE0YzAsMTUuNTUxLTMuODMyLDI5Ljg5My0xMS40OTYsNDMuMDI0IGMtNy42NjQsMTMuMTMzLTE4LjA2MiwyMy41My0zMS4xOTQsMzEuMTk0Yy0xMy4xMzIsNy42NjQtMjcuNDc0LDExLjQ5Ni00My4wMjQsMTEuNDk2cy0yOS44OTItMy44MzItNDMuMDI0LTExLjQ5NiBjLTEzLjEzMy03LjY2NC0yMy41MzEtMTguMDYyLTMxLjE5NC0zMS4xOTRDMy44MzIsMTE1LjYwNywwLDEwMS4yNjUsMCw4NS43MTRTMy44MzIsNTUuODIyLDExLjQ5Niw0Mi42OSBjNy42NjQtMTMuMTMzLDE4LjA2Mi0yMy41MzEsMzEuMTk0LTMxLjE5NEM1NS44MjIsMy44MzIsNzAuMTY0LDAsODUuNzE0LDBzMjkuODkzLDMuODMyLDQzLjAyNCwxMS40OTYgYzEzLjEzMyw3LjY2NCwyMy41MywxOC4wNjIsMzEuMTk0LDMxLjE5NEMxNjcuNTk3LDU1LjgyMiwxNzEuNDI5LDcwLjE2NCwxNzEuNDI5LDg1LjcxNHoiLz48L3N2Zz4=)}.gitter-open-chat-button{z-index:100000;position:fixed;bottom:0;right:10px;padding:1em 3em;background-color:#E77051;border:0;border-top-left-radius:.5em;border-top-right-radius:.5em;font-family:sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;text-align:center;text-decoration:none;cursor:pointer;cursor:hand;transition:all .3s ease}.gitter-open-chat-button,.gitter-open-chat-button:visited{box-sizing:border-box;color:#fff}.gitter-open-chat-button:focus,.gitter-open-chat-button:hover{box-sizing:border-box;background-color:#E77051;color:#fff}.gitter-open-chat-button:focus{box-sizing:border-box;box-shadow:0 0 8px rgba(62,160,127,.6);outline:none}.gitter-open-chat-button:active{box-sizing:border-box;color:#eee}.gitter-open-chat-button.is-collapsed{box-sizing:border-box;transform:translateY(120%)}', ""]);
    }, function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var r = this[e];
                    r[2] ? t.push("@media " + r[2] + "{" + r[1] + "}") : t.push(r[1])
                }
                return t.join("")
            }, t.i = function(e, r) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (n[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var u = e[o];
                    "number" == typeof u[0] && n[u[0]] || (r && !u[2] ? u[2] = r : r && (u[2] = "(" + u[2] + ") and (" + r + ")"), t.push(u))
                }
            }, t
        }
    }, function(t, e, r) {
        (function(e, n) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   3.3.1
             */
            ! function(e, r) {
                t.exports = r()
            }(this, function() {
                "use strict";

                function t(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t
                }

                function o(t) {
                    return "function" == typeof t
                }

                function i(t) {
                    Z = t
                }

                function u(t) {
                    K = t
                }

                function a() {
                    return function() {
                        return e.nextTick(y)
                    }
                }

                function c() {
                    return function() {
                        W(y)
                    }
                }

                function s() {
                    var t = 0,
                        e = new J(y),
                        r = document.createTextNode("");
                    return e.observe(r, {
                            characterData: !0
                        }),
                        function() {
                            r.data = t = ++t % 2
                        }
                }

                function l() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = y,
                        function() {
                            return t.port2.postMessage(0)
                        }
                }

                function f() {
                    var t = setTimeout;
                    return function() {
                        return t(y, 1)
                    }
                }

                function y() {
                    for (var t = 0; t < V; t += 2) {
                        var e = rt[t],
                            r = rt[t + 1];
                        e(r), rt[t] = void 0, rt[t + 1] = void 0
                    }
                    V = 0
                }

                function p() {
                    try {
                        var t = r(39);
                        return W = t.runOnLoop || t.runOnContext, c()
                    } catch (t) {
                        return f()
                    }
                }

                function b(t, e) {
                    var r = arguments,
                        n = this,
                        o = new this.constructor(h);
                    void 0 === o[ot] && k(o);
                    var i = n._state;
                    return i ? ! function() {
                        var t = r[i - 1];
                        K(function() {
                            return z(i, o, t, n._result)
                        })
                    }() : D(n, o, t, e), o
                }

                function d(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e) return t;
                    var r = new e(h);
                    return N(r, t), r
                }

                function h() {}

                function M() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function g() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function T(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return ct.error = t, ct
                    }
                }

                function w(t, e, r, n) {
                    try {
                        t.call(e, r, n)
                    } catch (t) {
                        return t
                    }
                }

                function m(t, e, r) {
                    K(function(t) {
                        var n = !1,
                            o = w(r, e, function(r) {
                                n || (n = !0, e !== r ? N(t, r) : L(t, r))
                            }, function(e) {
                                n || (n = !0, E(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                        !n && o && (n = !0, E(t, o))
                    }, t)
                }

                function j(t, e) {
                    e._state === ut ? L(t, e._result) : e._state === at ? E(t, e._result) : D(e, void 0, function(e) {
                        return N(t, e)
                    }, function(e) {
                        return E(t, e)
                    })
                }

                function v(t, e, r) {
                    e.constructor === t.constructor && r === b && e.constructor.resolve === d ? j(t, e) : r === ct ? E(t, ct.error) : void 0 === r ? L(t, e) : o(r) ? m(t, e, r) : L(t, e)
                }

                function N(e, r) {
                    e === r ? E(e, M()) : t(r) ? v(e, r, T(r)) : L(e, r)
                }

                function x(t) {
                    t._onerror && t._onerror(t._result), S(t)
                }

                function L(t, e) {
                    t._state === it && (t._result = e, t._state = ut, 0 !== t._subscribers.length && K(S, t))
                }

                function E(t, e) {
                    t._state === it && (t._state = at, t._result = e, K(x, t))
                }

                function D(t, e, r, n) {
                    var o = t._subscribers,
                        i = o.length;
                    t._onerror = null, o[i] = e, o[i + ut] = r, o[i + at] = n, 0 === i && t._state && K(S, t)
                }

                function S(t) {
                    var e = t._subscribers,
                        r = t._state;
                    if (0 !== e.length) {
                        for (var n = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) n = e[u], o = e[u + r], n ? z(r, n, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function O() {
                    this.error = null
                }

                function I(t, e) {
                    try {
                        return t(e)
                    } catch (t) {
                        return st.error = t, st
                    }
                }

                function z(t, e, r, n) {
                    var i = o(r),
                        u = void 0,
                        a = void 0,
                        c = void 0,
                        s = void 0;
                    if (i) {
                        if (u = I(r, n), u === st ? (s = !0, a = u.error, u = null) : c = !0, e === u) return void E(e, g())
                    } else u = n, c = !0;
                    e._state !== it || (i && c ? N(e, u) : s ? E(e, a) : t === ut ? L(e, u) : t === at && E(e, u))
                }

                function A(t, e) {
                    try {
                        e(function(e) {
                            N(t, e)
                        }, function(e) {
                            E(t, e)
                        })
                    } catch (e) {
                        E(t, e)
                    }
                }

                function C() {
                    return lt++
                }

                function k(t) {
                    t[ot] = lt++, t._state = void 0, t._result = void 0, t._subscribers = []
                }

                function U(t, e) {
                    this._instanceConstructor = t, this.promise = new t(h), this.promise[ot] || k(this.promise), $(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && L(this.promise, this._result))) : E(this.promise, P())
                }

                function P() {
                    return new Error("Array Methods must be provided an Array")
                }

                function _(t) {
                    return new U(this, t).promise
                }

                function Y(t) {
                    var e = this;
                    return new e($(t) ? function(r, n) {
                        for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(r, n)
                    } : function(t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    })
                }

                function Q(t) {
                    var e = this,
                        r = new e(h);
                    return E(r, t), r
                }

                function G() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function B() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function H(t) {
                    this[ot] = C(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && G(), this instanceof H ? A(this, t) : B())
                }

                function F() {
                    var t = void 0;
                    if ("undefined" != typeof n) t = n;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    if (e) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(e.resolve())
                        } catch (t) {}
                        if ("[object Promise]" === r && !e.cast) return
                    }
                    t.Promise = H
                }
                var R = void 0;
                R = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var $ = R,
                    V = 0,
                    W = void 0,
                    Z = void 0,
                    K = function(t, e) {
                        rt[V] = t, rt[V + 1] = e, V += 2, 2 === V && (Z ? Z(y) : nt())
                    },
                    X = "undefined" != typeof window ? window : void 0,
                    q = X || {},
                    J = q.MutationObserver || q.WebKitMutationObserver,
                    tt = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                    et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    rt = new Array(1e3),
                    nt = void 0;
                nt = tt ? a() : J ? s() : et ? l() : void 0 === X ? p() : f();
                var ot = Math.random().toString(36).substring(16),
                    it = void 0,
                    ut = 1,
                    at = 2,
                    ct = new O,
                    st = new O,
                    lt = 0;
                return U.prototype._enumerate = function() {
                    for (var t = this.length, e = this._input, r = 0; this._state === it && r < t; r++) this._eachEntry(e[r], r)
                }, U.prototype._eachEntry = function(t, e) {
                    var r = this._instanceConstructor,
                        n = r.resolve;
                    if (n === d) {
                        var o = T(t);
                        if (o === b && t._state !== it) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                        else if (r === H) {
                            var i = new r(h);
                            v(i, t, o), this._willSettleAt(i, e)
                        } else this._willSettleAt(new r(function(e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(n(t), e)
                }, U.prototype._settledAt = function(t, e, r) {
                    var n = this.promise;
                    n._state === it && (this._remaining--, t === at ? E(n, r) : this._result[e] = r), 0 === this._remaining && L(n, this._result)
                }, U.prototype._willSettleAt = function(t, e) {
                    var r = this;
                    D(t, void 0, function(t) {
                        return r._settledAt(ut, e, t)
                    }, function(t) {
                        return r._settledAt(at, e, t)
                    })
                }, H.all = _, H.race = Y, H.resolve = d, H.reject = Q, H._setScheduler = i, H._setAsap = u, H._asap = K, H.prototype = {
                    constructor: H,
                    then: b,
                    catch: function(t) {
                        return this.then(null, t)
                    }
                }, F(), H.polyfill = F, H.Promise = H, H
            })
        }).call(e, r(38), function() {
            return this
        }())
    }, function(t, e) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (l === setTimeout) return setTimeout(t, 0);
            if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }

        function i(t) {
            if (f === clearTimeout) return clearTimeout(t);
            if ((f === n || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
            try {
                return f(t)
            } catch (e) {
                try {
                    return f.call(null, t)
                } catch (e) {
                    return f.call(this, t)
                }
            }
        }

        function u() {
            d && p && (d = !1, p.length ? b = p.concat(b) : h = -1, b.length && a())
        }

        function a() {
            if (!d) {
                var t = o(u);
                d = !0;
                for (var e = b.length; e;) {
                    for (p = b, b = []; ++h < e;) p && p[h].run();
                    h = -1, e = b.length
                }
                p = null, d = !1, i(t)
            }
        }

        function c(t, e) {
            this.fun = t, this.array = e
        }

        function s() {}
        var l, f, y = t.exports = {};
        ! function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                l = r
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                f = n
            }
        }();
        var p, b = [],
            d = !1,
            h = -1;
        y.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            b.push(new c(t, e)), 1 !== b.length || d || o(a)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, y.title = "browser", y.browser = !0, y.env = {}, y.argv = [], y.version = "", y.versions = {}, y.on = s, y.addListener = s, y.once = s, y.off = s, y.removeListener = s, y.removeAllListeners = s, y.emit = s, y.prependListener = s, y.prependOnceListener = s, y.listeners = function(t) {
            return []
        }, y.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, y.cwd = function() {
            return "/"
        }, y.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, y.umask = function() {
            return 0
        }
    }, function(t, e) {}]);


    return of;

}(ofmeet || {}));

