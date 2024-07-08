"use strict";
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })
    (e)
} ! function(n) {
    var r = {};
    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return n[e].call(t.exports, t, t.exports, o),
        t.loaded = !0,
        t.exports
    }
    o.m = n,
    o.c = r,
    o.p = "",
    o(0)
} (
[function(e, t, f) {
    (function(e) {
        f(2).polyfill();
        var t, n, r = f(3),
        o = {
            string: "env",

        default:
            {
                env: e.env.NODE_ENV || "development"
            }
        },
        i = (r(e.argv.slice(2), o), "/douga_mv/common/renewal/parts"),
        s = {
            PRD: /^https:\/\/(www|wws)\.tv-asahi\.co\.jp/,
            PRD_PRE: /^https:\/\/p(www|wws)\.tv-asahi\.co\.jp/,
            STG: /^https:\/\/st-(www|wws)\.tvasahi\.jp/,
            STG_PRE: /^https:\/\/st-p(www|wws)\.tvasahi\.jp/
        },
        a = {
            PRD: "https://douga.tv-asahi.co.jp",
            PRD_PRE: "https://pdouga.tv-asahi.co.jp",
            STG: "https://st-douga.tvasahi.jp",
            STG_PRE: "https://st-pdouga.tvasahi.jp"
        },
        c = a[Object.keys(s).find(function(e) {
            if (window.location.href.match(s[e])) return e
        }) || "DEV"] || a.PRD,
        u = f(4);
        (function() {
            var e, t = document.getElementById("renewalHeader");
            null != t && (t.style.display = "none", (e = document.createElement("link")).rel = "stylesheet", e.href = i + "/css/header.min.css", document.head.appendChild(e), u.get("/douga_mv/common/renewal/parts/header.html").then(function(e) {
                document.getElementById("renewalHeader").innerHTML = e.data,
                function() {
                    var t = document.querySelectorAll(".openDdm"),
                    r = "open",
                    o = function() {
                        for (var e = 0; e < t.length; e++) t[e].classList.remove(r),
                        t[e].nextElementSibling.classList.remove(r)
                    },
                    e = function(e) {
                        e.preventDefault();
                        var t, n = e.target.classList.contains(r);
                        return o(),
                        n || (
                        (t = e.target).classList.add(r), t.nextElementSibling.classList.add(r)),
                        !1
                    };
                    if (t.length) for (var n = 0; n < t.length; n++) t[n].addEventListener("click", e);
                    window.addEventListener("click", function(e) {
                        for (var t = e.target; t;) {
                            if (t.classList && t.classList.contains("openDdm")) return;
                            t = t.parentNode
                        }
                        o()
                    }),
                    document.querySelector(".c-headMenu-search-link").addEventListener("click", function(e) {
                        e.preventDefault();
                        var t = document.querySelector(".c-searchInputHead");
                        return t.classList.toggle(r),
                        !1
                    }),
                    document.querySelector(".c-searchInputHead-cont-btnSearch").addEventListener("click", function(e) {
                        var t = e.target.nextElementSibling.value;
                        location.href = "".concat(c, "/search?keyword=").concat(t)
                    }),
                    document.querySelector(".c-searchInputHead-cont").querySelector('input[type="text"]').addEventListener("keypress", function(e) {
                        var t = e.keyCode || e.charCode || 0,
                        n = e.target.value;
                        13 == t && (location.href = "".concat(c, "/search?keyword=").concat(n))
                    }),
                    document.querySelector(".c-searchInputHead-cont-btnClose").addEventListener("click", function(e) {
                        document.querySelector(".c-searchInputHead").classList.remove("open")
                    })
                } ()
            }).then(function() {
                t.removeAttribute("style")
            }).
            catch(function(e) {
                console.error(e)
            }))
        })
        (),
        null != (n = document.getElementById("renewalFooter")) && (
        (t = document.createElement("link")).rel = "stylesheet", t.href = i + "/css/footer.min.css", document.head.appendChild(t), u.get("/douga_mv/common/renewal/parts/footer.html").then(function(e) {
            document.getElementById("renewalFooter").innerHTML = e.data
        }).then(function() {
            n.removeAttribute("style")
        }).
        catch(function(e) {
            console.error(e)
        }))
    }).call(t, f(1))
},
function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if (
        (n === i || !n) && setTimeout) return n = setTimeout,
        setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch(e) {
            try {
                return n.call(null, t, 0)
            } catch(e) {
                return n.call(this, t, 0)
            }
        }
    } ! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch(e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch(e) {
            r = s
        }
    } ();
    var c, u = [],
    f = !1,
    l = -1;
    function p() {
        f && c && (f = !1, c.length ? u = c.concat(u) : l = -1, u.length && h())
    }
    function h() {
        if (!f) {
            var e = a(p);
            f = !0;
            for (var t = u.length; t;) {
                for (c = u, u = []; ++l < t;) c && c[l].run();
                l = -1,
                t = u.length
            }
            c = null,
            f = !1,
            function(t) {
                if (r === clearTimeout) return clearTimeout(t);
                if (
                (r === s || !r) && clearTimeout) return r = clearTimeout,
                clearTimeout(t);
                try {
                    r(t)
                } catch(e) {
                    try {
                        return r.call(null, t)
                    } catch(e) {
                        return r.call(this, t)
                    }
                }
            } (e)
        }
    }
    function d(e, t) {
        this.fun = e,
        this.array = t
    }
    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new d(e, t)),
        1 !== u.length || f || a(h)
    },
    d.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = m,
    o.addListener = m,
    o.once = m,
    o.off = m,
    o.removeListener = m,
    o.removeAllListeners = m,
    o.emit = m,
    o.prependListener = m,
    o.prependOnceListener = m,
    o.listeners = function(e) {
        return []
    },
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    },
    o.cwd = function() {
        return "/"
    },
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    },
    o.umask = function() {
        return 0
    }
},
function(t, e, n) {
    (function(U, H) {
        var e;
        e = function() {
            function c(e) {
                return "function" == typeof e
            }
            var n = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            r = 0,
            t = void 0,
            o = void 0,
            a = function(e, t) {
                p[r] = e,
                p[r + 1] = t,
                2 === (r += 2) && (o ? o(h) : g())
            };
            var e = "undefined" != typeof window ? window : void 0,
            i = e || {},
            s = i.MutationObserver || i.WebKitMutationObserver,
            u = "undefined" == typeof self && void 0 !== U && "[object process]" === {}.toString.call(U),
            f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
            function l() {
                var e = setTimeout;
                return function() {
                    return e(h, 1)
                }
            }
            var p = new Array(1e3);
            function h() {
                for (var e = 0; e < r; e += 2) {
                    (0, p[e])
                    (p[e + 1]),
                    p[e] = void 0,
                    p[e + 1] = void 0
                }
                r = 0
            }
            var d, m, v, y, g = void 0;
            function b(e, t) {
                var n = this,
                r = new this.constructor(_);
                void 0 === r[x] && B(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    a(function() {
                        return L(o, r, i, n._result)
                    })
                } else N(n, r, e, t);
                return r
            }
            function w(e) {
                if (e && "object" === _typeof(e) && e.constructor === this) return e;
                var t = new this(_);
                return A(t, e),
                t
            }
            g = u ? function() {
                return U.nextTick(h)
            } : s ? (m = 0, v = new s(h), y = document.createTextNode(""), v.observe(y, {
                characterData: !0
            }), function() {
                y.data = m = ++m % 2
            }) : f ? (
            (d = new MessageChannel).port1.onmessage = h, function() {
                return d.port2.postMessage(0)
            }) : void 0 === e ? function() {
                try {
                    var e = Function("return this")
                    ().require("vertx");
                    return void 0 !== (t = e.runOnLoop || e.runOnContext) ? function() {
                        t(h)
                    } : l()
                } catch(e) {
                    return l()
                }
            } () : l();
            var x = Math.random().toString(36).substring(2);
            function _() {}
            var E = void 0,
            j = 1,
            S = 2;
            function k(e, t, n) {
                var r, o, i, s;
                t.constructor === e.constructor && n === b && t.constructor.resolve === w ? (i = e, (s = t)._state === j ? O(i, s._result) : s._state === S ? C(i, s._result) : N(s, void 0, function(e) {
                    return A(i, e)
                },
                function(e) {
                    return C(i, e)
                })) : void 0 === n ? O(e, t) : c(n) ? (r = t, o = n, a(function(t) {
                    var n = !1,
                    e = function(e, t, n, r) {
                        try {
                            e.call(t, n, r)
                        } catch(e) {
                            return e
                        }
                    } (o, r, function(e) {
                        n || (n = !0, r !== e ? A(t, e) : O(t, e))
                    },
                    function(e) {
                        n || (n = !0, C(t, e))
                    },
                    t._label); ! n && e && (n = !0, C(t, e))
                },
                e)) : O(e, t)
            }
            function A(t, e) {
                if (t === e) C(t, new TypeError("You cannot resolve a promise with itself"));
                else
                if (o = _typeof(r = e), null === r || "object" !== o && "function" !== o) O(t, e);
                else {
                    var n = void 0;
                    try {
                        n = e.then
                    } catch(e) {
                        return void C(t, e)
                    }
                    k(t, e, n)
                }
                var r, o
            }
            function T(e) {
                e._onerror && e._onerror(e._result),
                P(e)
            }
            function O(e, t) {
                e._state === E && (e._result = t, e._state = j, 0 !== e._subscribers.length && a(P, e))
            }
            function C(e, t) {
                e._state === E && (e._state = S, e._result = t, a(T, e))
            }
            function N(e, t, n, r) {
                var o = e._subscribers,
                i = o.length;
                e._onerror = null,
                o[i] = t,
                o[i + j] = n,
                o[i + S] = r,
                0 === i && e._state && a(P, e)
            }
            function P(e) {
                var t = e._subscribers,
                n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s],
                    o = t[s + n],
                    r ? L(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }
            function L(e, t, n, r) {
                var o = c(n),
                i = void 0,
                s = void 0,
                a = !0;
                if (o) {
                    try {
                        i = n(r)
                    } catch(e) {
                        a = !1,
                        s = e
                    }
                    if (t === i) return void C(t, new TypeError("A promises callback cannot return that same promise."))
                } else i = r;
                t._state !== E || (o && a ? A(t, i) : !1 === a ? C(t, s) : e === j ? O(t, i) : e === S && C(t, i))
            }
            var R = 0;
            function B(e) {
                e[x] = R++,
                e._state = void 0,
                e._result = void 0,
                e._subscribers = []
            }
            var q = function() {
                function e(e, t) {
                    this._instanceConstructor = e,
                    this.promise = new e(_),
                    this.promise[x] || B(this.promise),
                    n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && O(this.promise, this._result))) : C(this.promise, new Error("Array Methods must be provided an Array"))
                }
                return e.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === E && t < e.length; t++) this._eachEntry(e[t], t)
                },
                e.prototype._eachEntry = function(t, e) {
                    var n = this._instanceConstructor,
                    r = n.resolve;
                    if (r === w) {
                        var o = void 0,
                        i = void 0,
                        s = !1;
                        try {
                            o = t.then
                        } catch(e) {
                            s = !0,
                            i = e
                        }
                        if (o === b && t._state !== E) this._settledAt(t._state, e, t._result);
                        else
                        if ("function" != typeof o) this._remaining--,
                        this._result[e] = t;
                        else
                        if (n === D) {
                            var a = new n(_);
                            s ? C(a, i) : k(a, t, o),
                            this._willSettleAt(a, e)
                        } else this._willSettleAt(new n(function(e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(r(t), e)
                },
                e.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === E && (this._remaining--, e === S ? C(r, n) : this._result[t] = n),
                    0 === this._remaining && O(r, this._result)
                },
                e.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    N(e, void 0, function(e) {
                        return n._settledAt(j, t, e)
                    },
                    function(e) {
                        return n._settledAt(S, t, e)
                    })
                },
                e
            } ();
            var D = function() {
                function t(e) {
                    this[x] = R++,
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    _ !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    } (), this instanceof t ? function(t, e) {
                        try {
                            e(function(e) {
                                A(t, e)
                            },
                            function(e) {
                                C(t, e)
                            })
                        } catch(e) {
                            C(t, e)
                        }
                    } (this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    } ())
                }
                return t.prototype.
                catch = function(e) {
                    return this.then(null, e)
                },
                t.prototype.
                finally = function(t) {
                    var n = this.constructor;
                    return c(t) ? this.then(function(e) {
                        return n.resolve(t()).then(function() {
                            return e
                        })
                    },
                    function(e) {
                        return n.resolve(t()).then(function() {
                            throw e
                        })
                    }) : this.then(t, t)
                },
                t
            } ();
            return D.prototype.then = b,
            D.all = function(e) {
                return new q(this, e).promise
            },
            D.race = function(o) {
                var i = this;
                return n(o) ? new i(function(e, t) {
                    for (var n = o.length, r = 0; r < n; r++) i.resolve(o[r]).then(e, t)
                }) : new i(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            },
            D.resolve = w,
            D.reject = function(e) {
                var t = new this(_);
                return C(t, e),
                t
            },
            D._setScheduler = function(e) {
                o = e
            },
            D._setAsap = function(e) {
                a = e
            },
            D._asap = a,
            D.polyfill = function() {
                var e = void 0;
                if (void 0 !== H) e = H;
                else
                if ("undefined" != typeof self) e = self;
                else
                try {
                    e = Function("return this")
                    ()
                } catch(e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch(e) {}
                    if ("[object Promise]" === n && !t.cast) return
                }
                e.Promise = D
            },
            D.Promise = D
        },
        t.exports = e()
    }).call(e, n(1), function() {
        return this
    } ())
},
function(e, t) {
    function b(e) {
        return "number" == typeof e || ( !! /^0x[0-9a-f]+$/i.test(e) || /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))
    }
    e.exports = function(e, t) {
        t || (t = {});
        var s = {
            bools: {},
            strings: {},
            unknownFn: null
        };
        "function" == typeof t.unknown && (s.unknownFn = t.unknown),
        "boolean" == typeof t.boolean && t.boolean ? s.allBools = !0 : [].concat(t.boolean).filter(Boolean).forEach(function(e) {
            s.bools[e] = !0
        });
        var a = {};
        Object.keys(t.alias || {}).forEach(function(e) {
            a[e] = [].concat(t.alias[e]),
            a[e].forEach(function(t) {
                a[t] = [e].concat(a[e].filter(function(e) {
                    return t !== e
                }))
            })
        }),
        [].concat(t.string).filter(Boolean).forEach(function(e) {
            s.strings[e] = !0,
            a[e] && (s.strings[a[e]] = !0)
        });
        var o = t.
    default || {},
        c = {
            _:
            []
        };
        Object.keys(s.bools).forEach(function(e) {
            r(e, void 0 !== o[e] && o[e])
        });
        var n = [];
        function r(e, t, n) {
            if (!n || !s.unknownFn || (r = e, o = n, s.allBools && /^--[^=]+$/.test(o) || s.strings[r] || s.bools[r] || a[r]) || !1 !== s.unknownFn(n)) {
                var r, o, i = !s.strings[e] && b(t) ? Number(t) : t;
                u(c, e.split("."), i),
                (a[e] || []).forEach(function(e) {
                    u(c, e.split("."), i)
                })
            }
        }
        function u(e, t, n) {
            for (var r = e, o = 0; o < t.length - 1; o++) {
                if ("__proto__" === (i = t[o])) return;
                void 0 === r[i] && (r[i] = {}),
                r[i] !== Object.prototype && r[i] !== Number.prototype && r[i] !== String.prototype || (r[i] = {}),
                r[i] === Array.prototype && (r[i] = []),
                r = r[i]
            }
            var i;
            "__proto__" !== (i = t[t.length - 1]) && (r !== Object.prototype && r !== Number.prototype && r !== String.prototype || (r = {}), r === Array.prototype && (r = []), void 0 === r[i] || s.bools[i] || "boolean" == typeof r[i] ? r[i] = n : Array.isArray(r[i]) ? r[i].push(n) : r[i] = [r[i], n])
        }
        function i(e) {
            return a[e].some(function(e) {
                return s.bools[e]
            })
        } - 1 !== e.indexOf("--") && (n = e.slice(e.indexOf("--") + 1), e = e.slice(0, e.indexOf("--")));
        for (var f = 0; f < e.length; f++) {
            var l = e[f];
            if (/^--.+=/.test(l)) {
                var p = l.match(/^--([^=]+)=([\s\S]*)$/),
                h = p[1],
                d = p[2];
                s.bools[h] && (d = "false" !== d),
                r(h, d, l)
            } else
            if (/^--no-.+/.test(l)) {
                r(h = l.match(/^--no-(.+)/)
                [1], !1, l)
            } else
            if (/^--.+/.test(l)) {
                h = l.match(/^--(.+)/)
                [1];
                void 0 === (g = e[f + 1]) || /^-/.test(g) || s.bools[h] || s.allBools || a[h] && i(h) ? /^(true|false)$/.test(g) ? (r(h, "true" === g, l), f++) : r(h, !s.strings[h] || "", l) : (r(h, g, l), f++)
            } else
            if (/^-[^-]+/.test(l)) {
                for (var m = l.slice(1, -1).split(""), v = !1, y = 0; y < m.length; y++) {
                    var g;
                    if ("-" !== (g = l.slice(y + 2))) {
                        if (/[A-Za-z]/.test(m[y]) && /=/.test(g)) {
                            r(m[y], g.split("=")
                            [1], l),
                            v = !0;
                            break
                        }
                        if (/[A-Za-z]/.test(m[y]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(g)) {
                            r(m[y], g, l),
                            v = !0;
                            break
                        }
                        if (m[y + 1] && m[y + 1].match(/\W/)) {
                            r(m[y], l.slice(y + 2), l),
                            v = !0;
                            break
                        }
                        r(m[y], !s.strings[m[y]] || "", l)
                    } else r(m[y], g, l)
                }
                h = l.slice(-1)
                [0];
                v || "-" === h || (!e[f + 1] || /^(-|--)[^-]/.test(e[f + 1]) || s.bools[h] || a[h] && i(h) ? e[f + 1] && /^(true|false)$/.test(e[f + 1]) ? (r(h, "true" === e[f + 1], l), f++) : r(h, !s.strings[h] || "", l) : (r(h, e[f + 1], l), f++))
            } else
            if (s.unknownFn && !1 === s.unknownFn(l) || c._.push(s.strings._ || !b(l) ? l : Number(l)), t.stopEarly) {
                c._.push.apply(c._, e.slice(f + 1));
                break
            }
        }
        return Object.keys(o).forEach(function(t) {
            var e, n, r;
            e = c,
            n = t.split("."),
            r = e,
            n.slice(0, -1).forEach(function(e) {
                r = r[e] || {}
            }),
            n[n.length - 1] in  r || (u(c, t.split("."), o[t]), (a[t] || []).forEach(function(e) {
                u(c, e.split("."), o[t])
            }))
        }),
        t["--"] ? (c["--"] = new Array, n.forEach(function(e) {
            c["--"].push(e)
        })) : n.forEach(function(e) {
            c._.push(e)
        }),
        c
    }
},
function(e, t, n) {
    e.exports = n(5)
},
function(e, t, n) {
    var r = n(6),
    o = n(7),
    i = n(8),
    s = n(26);
    function a(e) {
        var t = new i(e),
        n = o(i.prototype.request, t);
        return r.extend(n, i.prototype, t),
        r.extend(n, t),
        n
    }
    var c = a(n(13));
    c.Axios = i,
    c.create = function(e) {
        return a(s(c.defaults, e))
    },
    c.Cancel = n(29),
    c.CancelToken = n(30),
    c.isCancel = n(25),
    c.all = function(e) {
        return Promise.all(e)
    },
    c.spread = n(31),
    c.isAxiosError = n(32),
    e.exports = c,
    e.exports.
default = c
},
function(e, t, n) {
    var o = n(7),
    r = Object.prototype.toString;
    function i(e) {
        return "[object Array]" === r.call(e)
    }
    function s(e) {
        return void 0 === e
    }
    function a(e) {
        return null !== e && "object" === _typeof(e)
    }
    function c(e) {
        if ("[object Object]" !== r.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }
    function u(e) {
        return "[object Function]" === r.call(e)
    }
    function f(e, t) {
        if (null != e) if ("object" !== _typeof(e) && (e = [e]), i(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
        for (var o in  e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    e.exports = {
        isArray:
        i,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === r.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: a,
        isPlainObject: c,
        isUndefined: s,
        isDate: function(e) {
            return "[object Date]" === r.call(e)
        },
        isFile: function(e) {
            return "[object File]" === r.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === r.call(e)
        },
        isFunction: u,
        isStream: function(e) {
            return a(e) && u(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: f,
        merge: function n() {
            var r = {};
            function e(e, t) {
                c(r[t]) && c(e) ? r[t] = n(r[t], e) : c(e) ? r[t] = n({},
                e) : i(e) ? r[t] = e.slice() : r[t] = e
            }
            for (var t = 0, o = arguments.length; t < o; t++) f(arguments[t], e);
            return r
        },
        extend: function(n, e, r) {
            return f(e, function(e, t) {
                n[t] = r && "function" == typeof e ? o(e, r) : e
            }),
            n
        },
        trim: function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        },
        stripBOM: function(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e
        }
    }
},
function(e, t) {
    e.exports = function(n, r) {
        return function() {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
            return n.apply(r, e)
        }
    }
},
function(e, t, n) {
    var r = n(6),
    o = n(9),
    i = n(10),
    f = n(11),
    l = n(26),
    p = n(27),
    h = p.validators;
    function s(e) {
        this.defaults = e,
        this.interceptors = {
            request: new i,
            response: new i
        }
    }
    s.prototype.request = function(t) {
        "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {},
        (t = l(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
        var e = t.transitional;
        void 0 !== e && p.assertOptions(e, {
            silentJSONParsing: h.transitional(h.boolean, "1.0.0"),
            forcedJSONParsing: h.transitional(h.boolean, "1.0.0"),
            clarifyTimeoutError: h.transitional(h.boolean, "1.0.0")
        },
        !1);
        var n = [],
        r = !0;
        this.interceptors.request.forEach(function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (r = r && e.synchronous, n.unshift(e.fulfilled, e.rejected))
        });
        var o, i = [];
        if (this.interceptors.response.forEach(function(e) {
            i.push(e.fulfilled, e.rejected)
        }), !r) {
            var s = [f, void 0];
            for (Array.prototype.unshift.apply(s, n), s = s.concat(i), o = Promise.resolve(t); s.length;) o = o.then(s.shift(), s.shift());
            return o
        }
        for (var a = t; n.length;) {
            var c = n.shift(),
            u = n.shift();
            try {
                a = c(a)
            } catch(e) {
                u(e);
                break
            }
        }
        try {
            o = f(a)
        } catch(e) {
            return Promise.reject(e)
        }
        for (; i.length;) o = o.then(i.shift(), i.shift());
        return o
    },
    s.prototype.getUri = function(e) {
        return e = l(this.defaults, e),
        o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    },
    r.forEach(
    ["delete", "get", "head", "options"], function(n) {
        s.prototype[n] = function(e, t) {
            return this.request(l(t || {},
            {
                method: n,
                url: e,
                data: (t || {}).data
            }))
        }
    }),
    r.forEach(
    ["post", "put", "patch"], function(r) {
        s.prototype[r] = function(e, t, n) {
            return this.request(l(n || {},
            {
                method: r,
                url: e,
                data: t
            }))
        }
    }),
    e.exports = s
},
function(e, t, n) {
    var s = n(6);
    function a(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var r;
        if (n) r = n(t);
        else
        if (s.isURLSearchParams(t)) r = t.toString();
        else {
            var o = [];
            s.forEach(t, function(e, t) {
                null != e && (s.isArray(e) ? t += "[]" : e = [e], s.forEach(e, function(e) {
                    s.isDate(e) ? e = e.toISOString() : s.isObject(e) && (e = JSON.stringify(e)),
                    o.push(a(t) + "=" + a(e))
                }))
            }),
            r = o.join("&")
        }
        if (r) {
            var i = e.indexOf("#"); - 1 !== i && (e = e.slice(0, i)),
            e += (-1 === e.indexOf("?") ? "?" : "&") + r
        }
        return e
    }
},
function(e, t, n) {
    var r = n(6);
    function o() {
        this.handlers = []
    }
    o.prototype.use = function(e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
    },
    o.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    },
    o.prototype.forEach = function(t) {
        r.forEach(this.handlers, function(e) {
            null !== e && t(e)
        })
    },
    e.exports = o
},
function(e, t, n) {
    var r = n(6),
    o = n(12),
    i = n(25),
    s = n(13);
    function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(t) {
        return a(t),
        t.headers = t.headers || {},
        t.data = o.call(t, t.data, t.headers, t.transformRequest),
        t.headers = r.merge(t.headers.common || {},
        t.headers[t.method] || {},
        t.headers),
        r.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
            delete t.headers[e]
        }),
        (t.adapter || s.adapter)
        (t).then(function(e) {
            return a(t),
            e.data = o.call(t, e.data, e.headers, t.transformResponse),
            e
        },
        function(e) {
            return i(e) || (a(t), e && e.response && (e.response.data = o.call(t, e.response.data, e.response.headers, t.transformResponse))),
            Promise.reject(e)
        })
    }
},
function(e, t, n) {
    var o = n(6),
    i = n(13);
    e.exports = function(t, n, e) {
        var r = this || i;
        return o.forEach(e, function(e) {
            t = e.call(r, t, n)
        }),
        t
    }
},
function(c, e, u) {
    (function(e) {
        var i = u(6),
        n = u(14),
        s = u(15),
        t = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function r(e, t) { ! i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var o, a = {
            transitional: {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            },
            adapter: ("undefined" != typeof XMLHttpRequest ? o = u(16) : void 0 !== e && "[object process]" === Object.prototype.toString.call(e) && (o = u(16)), o),
            transformRequest: [function(e, t) {
                return n(t, "Accept"),
                n(t, "Content-Type"),
                i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) || t && "application/json" === t["Content-Type"] ? (r(t, "application/json"), function(e, t, n) {
                    if (i.isString(e)) try {
                        return (t || JSON.parse)
                        (e),
                        i.trim(e)
                    } catch(e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (n || JSON.stringify)
                    (e)
                } (e)) : e
            }],
            transformResponse: [function(e) {
                var t = this.transitional,
                n = t && t.silentJSONParsing,
                r = t && t.forcedJSONParsing,
                o = !n && "json" === this.responseType;
                if (o || r && i.isString(e) && e.length) try {
                    return JSON.parse(e)
                } catch(e) {
                    if (o) {
                        if ("SyntaxError" === e.name) throw s(e, this, "E_JSON_PARSE");
                        throw e
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) {
                return 200 <= e && e < 300
            }
        };
        a.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        i.forEach(
        ["delete", "get", "head"], function(e) {
            a.headers[e] = {}
        }),
        i.forEach(
        ["post", "put", "patch"], function(e) {
            a.headers[e] = i.merge(t)
        }),
        c.exports = a
    }).call(e, u(1))
},
function(e, t, n) {
    var o = n(6);
    e.exports = function(n, r) {
        o.forEach(n, function(e, t) {
            t !== r && t.toUpperCase() === r.toUpperCase() && (n[r] = e, delete n[t])
        })
    }
},
function(e, t) {
    e.exports = function(e, t, n, r, o) {
        return e.config = t,
        n && (e.code = n),
        e.request = r,
        e.response = o,
        e.isAxiosError = !0,
        e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        },
        e
    }
},
function(e, t, n) {
    var p = n(6),
    h = n(17),
    d = n(19),
    m = n(9),
    v = n(20),
    y = n(23),
    g = n(24),
    b = n(18);
    e.exports = function(l) {
        return new Promise(function(n, r) {
            var o = l.data,
            i = l.headers,
            s = l.responseType;
            p.isFormData(o) && delete i["Content-Type"];
            var a = new XMLHttpRequest;
            if (l.auth) {
                var e = l.auth.username || "",
                t = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
                i.Authorization = "Basic " + btoa(e + ":" + t)
            }
            var c = v(l.baseURL, l.url);
            function u() {
                if (a) {
                    var e = "getAllResponseHeaders" in  a ? y(a.getAllResponseHeaders()) : null,
                    t = {
                        data: s && "text" !== s && "json" !== s ? a.response : a.responseText,
                        status: a.status,
                        statusText: a.statusText,
                        headers: e,
                        config: l,
                        request: a
                    };
                    h(n, r, t),
                    a = null
                }
            }
            if (a.open(l.method.toUpperCase(), m(c, l.params, l.paramsSerializer), !0), a.timeout = l.timeout, "onloadend" in  a ? a.onloadend = u : a.onreadystatechange = function() {
                a && 4 === a.readyState && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:")) && setTimeout(u)
            },
            a.onabort = function() {
                a && (r(b("Request aborted", l, "ECONNABORTED", a)), a = null)
            },
            a.onerror = function() {
                r(b("Network Error", l, null, a)),
                a = null
            },
            a.ontimeout = function() {
                var e = "timeout of " + l.timeout + "ms exceeded";
                l.timeoutErrorMessage && (e = l.timeoutErrorMessage),
                r(b(e, l, l.transitional && l.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", a)),
                a = null
            },
            p.isStandardBrowserEnv()) {
                var f = (l.withCredentials || g(c)) && l.xsrfCookieName ? d.read(l.xsrfCookieName) : void 0;
                f && (i[l.xsrfHeaderName] = f)
            }
            "setRequestHeader" in  a && p.forEach(i, function(e, t) {
                void 0 === o && "content-type" === t.toLowerCase() ? delete i[t] : a.setRequestHeader(t, e)
            }),
            p.isUndefined(l.withCredentials) || (a.withCredentials = !!l.withCredentials),
            s && "json" !== s && (a.responseType = l.responseType),
            "function" == typeof l.onDownloadProgress && a.addEventListener("progress", l.onDownloadProgress),
            "function" == typeof l.onUploadProgress && a.upload && a.upload.addEventListener("progress", l.onUploadProgress),
            l.cancelToken && l.cancelToken.promise.then(function(e) {
                a && (a.abort(), r(e), a = null)
            }),
            o || (o = null),
            a.send(o)
        })
    }
},
function(e, t, n) {
    var o = n(18);
    e.exports = function(e, t, n) {
        var r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(o("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
},
function(e, t, n) {
    var s = n(15);
    e.exports = function(e, t, n, r, o) {
        var i = new Error(e);
        return s(i, t, n, r, o)
    }
},
function(e, t, n) {
    var a = n(6);
    e.exports = a.isStandardBrowserEnv() ? {
        write: function(e, t, n, r, o, i) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
            a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            a.isString(r) && s.push("path=" + r),
            a.isString(o) && s.push("domain=" + o),
            !0 === i && s.push("secure"),
            document.cookie = s.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
},
function(e, t, n) {
    var r = n(21),
    o = n(22);
    e.exports = function(e, t) {
        return e && !r(t) ? o(e, t) : t
    }
},
function(e, t) {
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
},
function(e, t) {
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
},
function(e, t, n) {
    var i = n(6),
    s = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, r, o = {};
        return e && i.forEach(e.split("\n"), function(e) {
            if (r = e.indexOf(":"), t = i.trim(e.substr(0, r)).toLowerCase(), n = i.trim(e.substr(r + 1)), t) {
                if (o[t] && 0 <= s.indexOf(t)) return;
                o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat(
                [n]) : o[t] ? o[t] + ", " + n : n
            }
        }),
        o
    }
},
function(e, t, n) {
    var s = n(6);
    e.exports = s.isStandardBrowserEnv() ? function() {
        var n, r = /(msie|trident)/i.test(navigator.userAgent),
        o = document.createElement("a");
        function i(e) {
            var t = e;
            return r && (o.setAttribute("href", t), t = o.href),
            o.setAttribute("href", t),
            {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            }
        }
        return n = i(window.location.href),
        function(e) {
            var t = s.isString(e) ? i(e) : e;
            return t.protocol === n.protocol && t.host === n.host
        }
    } () : function() {
        return !0
    }
},
function(e, t) {
    e.exports = function(e) {
        return ! (!e || !e.__CANCEL__)
    }
},
function(e, t, n) {
    var l = n(6);
    e.exports = function(t, n) {
        n = n || {};
        var r = {},
        e = ["url", "method", "data"],
        o = ["headers", "auth", "proxy", "params"],
        i = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
        s = ["validateStatus"];
        function a(e, t) {
            return l.isPlainObject(e) && l.isPlainObject(t) ? l.merge(e, t) : l.isPlainObject(t) ? l.merge({},
            t) : l.isArray(t) ? t.slice() : t
        }
        function c(e) {
            l.isUndefined(n[e]) ? l.isUndefined(t[e]) || (r[e] = a(void 0, t[e])) : r[e] = a(t[e], n[e])
        }
        l.forEach(e, function(e) {
            l.isUndefined(n[e]) || (r[e] = a(void 0, n[e]))
        }),
        l.forEach(o, c),
        l.forEach(i, function(e) {
            l.isUndefined(n[e]) ? l.isUndefined(t[e]) || (r[e] = a(void 0, t[e])) : r[e] = a(void 0, n[e])
        }),
        l.forEach(s, function(e) {
            e in  n ? r[e] = a(t[e], n[e]) : e in  t && (r[e] = a(void 0, t[e]))
        });
        var u = e.concat(o).concat(i).concat(s),
        f = Object.keys(t).concat(Object.keys(n)).filter(function(e) {
            return -1 === u.indexOf(e)
        });
        return l.forEach(f, c),
        r
    }
},
function(e, t, n) {
    var a = n(28),
    r = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, n) {
        r[t] = function(e) {
            return _typeof(e) === t || "a" + (n < 1 ? "n " : " ") + t
        }
    });
    var c = {},
    i = a.version.split(".");
    function u(e, t) {
        for (var n = t ? t.split(".") : i, r = e.split("."), o = 0; o < 3; o++) {
            if (n[o] > r[o]) return !0;
            if (n[o] < r[o]) return !1
        }
        return !1
    }
    r.transitional = function(r, o, n) {
        var i = o && u(o);
        function s(e, t) {
            return "[Axios v" + a.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return function(e, t, n) {
            if (!1 === r) throw new Error(s(t, " has been removed in " + o));
            return i && !c[t] && (c[t] = !0, console.warn(s(t, " has been deprecated since v" + o + " and will be removed in the near future"))),
            !r || r(e, t, n)
        }
    },
    e.exports = {
        isOlderVersion: u,
        assertOptions: function(e, t, n) {
            if ("object" !== _typeof(e)) throw new TypeError("options must be an object");
            for (var r = Object.keys(e), o = r.length; 0 < o--;) {
                var i = r[o],
                s = t[i];
                if (s) {
                    var a = e[i],
                    c = void 0 === a || s(a, i, e);
                    if (!0 !== c) throw new TypeError("option " + i + " must be " + c)
                } else
                if (!0 !== n) throw Error("Unknown option " + i)
            }
        },
        validators: r
    }
},
function(e, t) {
    e.exports = {
        _from: "axios@^0.21.1",
        _id: "axios@0.21.4",
        _inBundle: !1,
        _integrity: "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
            type: "range",
            registry: !0,
            raw: "axios@^0.21.1",
            name: "axios",
            escapedName: "axios",
            rawSpec: "^0.21.1",
            saveSpec: null,
            fetchSpec: "^0.21.1"
        },
        _requiredBy: ["#DEV:/", "/localtunnel"],
        _resolved: "https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",
        _shasum: "c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",
        _spec: "axios@^0.21.1",
        _where: "/Users/k-shindo/Repositories/tva-douga/renewal_header_footer",
        author: {
            name: "Matt Zabriskie"
        },
        browser: {
            "./lib/adapters/http.js": "./lib/adapters/xhr.js"
        },
        bugs: {
            url: "https://github.com/axios/axios/issues"
        },
        bundleDependencies: !1,
        bundlesize: [{
            path: "./dist/axios.min.js",
            threshold: "5kB"
        }],
        dependencies: {
            "follow-redirects": "^1.14.0"
        },
        deprecated: !1,
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
            coveralls: "^3.0.0",
            "es6-promise": "^4.2.4",
            grunt: "^1.3.0",
            "grunt-banner": "^0.6.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-clean": "^1.1.0",
            "grunt-contrib-watch": "^1.0.0",
            "grunt-eslint": "^23.0.0",
            "grunt-karma": "^4.0.0",
            "grunt-mocha-test": "^0.13.3",
            "grunt-ts": "^6.0.0-beta.19",
            "grunt-webpack": "^4.0.2",
            "istanbul-instrumenter-loader": "^1.0.0",
            "jasmine-core": "^2.4.1",
            karma: "^6.3.2",
            "karma-chrome-launcher": "^3.1.0",
            "karma-firefox-launcher": "^2.1.0",
            "karma-jasmine": "^1.1.1",
            "karma-jasmine-ajax": "^0.1.13",
            "karma-safari-launcher": "^1.0.0",
            "karma-sauce-launcher": "^4.3.6",
            "karma-sinon": "^1.0.5",
            "karma-sourcemap-loader": "^0.3.8",
            "karma-webpack": "^4.0.2",
            "load-grunt-tasks": "^3.5.2",
            minimist: "^1.2.0",
            mocha: "^8.2.1",
            sinon: "^4.5.0",
            "terser-webpack-plugin": "^4.2.3",
            typescript: "^4.0.5",
            "url-search-params": "^0.10.0",
            webpack: "^4.44.2",
            "webpack-dev-server": "^3.11.0"
        },
        homepage: "https://axios-http.com",
        jsdelivr: "dist/axios.min.js",
        keywords: ["xhr", "http", "ajax", "promise", "node"],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {
            type: "git",
            url: "git+https://github.com/axios/axios.git"
        },
        scripts: {
            build: "NODE_ENV=production grunt build",
            coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
            examples: "node ./examples/server.js",
            fix: "eslint --fix lib/**/*.js",
            postversion: "git push && git push --tags",
            preversion: "npm test",
            start: "node ./sandbox/server.js",
            test: "grunt test",
            version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        unpkg: "dist/axios.min.js",
        version: "0.21.4"
    }
},
function(e, t) {
    function n(e) {
        this.message = e
    }
    n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message: "")
    },
    n.prototype.__CANCEL__ = !0,
    e.exports = n
},
function(e, t, n) {
    var r = n(29);
    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        })
    }
    o.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    },
    o.source = function() {
        var t;
        return {
            token: new o(function(e) {
                t = e
            }),
            cancel: t
        }
    },
    e.exports = o
},
function(e, t) {
    e.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
},
function(e, t) {
    e.exports = function(e) {
        return "object" === _typeof(e) && !0 === e.isAxiosError
    }
}]);