( () => {
    var e = {
        58288: (e, t, n) => {
            "use strict";
            var a = n(87363)
              , r = n.n(a);
            const s = ReactRouterDOM;
            n(75139);
            var i = n(73271)
              , o = n(53949)
              , c = (n(78599),
            n(74165))
              , l = n(15861)
              , u = n(70885)
              , d = n(7763)
              , _ = n(46541)
              , p = n(1677)
              , m = n(27173)
              , f = (n(92643),
            n(8786))
              , x = function() {
                var e, t, n = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === n || void 0 === n ? void 0 : n.language_code) || "en"] || "en_US";
                return f.Z.set("locale", a),
                window._okGlobal && (window._okGlobal.locale = a),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: a
                }
            };
            const h = "App_container__p+0qT"
              , v = "App_navbar__zvxzr"
              , g = "App_content__Jjurs";
            var k = n(1413);
            const j = "ComPaddingLayout_common-padding-layout__0gGbM";
            var N = n(45263)
              , C = function(e) {
                return function(t) {
                    return (0,
                    N.jsx)("div", {
                        className: j,
                        children: (0,
                        N.jsx)(e, (0,
                        k.Z)({}, t))
                    })
                }
            }
              , w = n(44925)
              , b = n(95640)
              , y = n.n(b)
              , Z = n(14300)
              , P = n(7562)
              , T = (n(96809),
            {
                act: function() {}
            });
            "undefined" !== typeof window && (T = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var O = T
              , S = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).source;
                O.act({
                    action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    params: {
                        source: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , E = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1,
                tgUsername: ""
            }
              , B = (0,
            a.createContext)(E)
              , I = function() {
                return (0,
                a.useContext)(B)
            }
              , L = function(e) {
                var t = e.children
                  , n = (0,
                a.useMemo)((function() {
                    var e, t, n = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, a = n.user, r = n.start_param;
                    if (a) {
                        var s = a.id
                          , i = a.username
                          , o = a.first_name
                          , c = a.last_name
                          , l = i;
                        if (o || c) {
                            var u = o && c ? " " : "";
                            l = "".concat(o).concat(u).concat(c)
                        }
                        return {
                            uid: null === s || void 0 === s ? void 0 : s.toString(),
                            username: l,
                            lastName: c,
                            firstName: o,
                            startParam: r,
                            gameId: 1,
                            tgUsername: i
                        }
                    }
                    return E
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                N.jsx)(B.Provider, {
                    value: s,
                    children: t
                })
            }
              , R = "/mini-app/racer"
              , A = "/mini-app/racer/referrals"
              , D = "/mini-app/racer/tasks"
              , F = "/mini-app/racer/tasks/partner"
              , W = "/mini-app/racer/leaderboard"
              , U = "/mini-app/racer/license"
              , M = "/mini-app/racer/license/grades"
              , G = "/mini-app/racer/license/airdrop"
              , V = n(83108)
              , H = n(76983)
              , Y = n(96833)
              , K = (n(14268),
            n(83295),
            n(29361),
            n(4860))
              , X = n(4422)
              , z = n(72202)
              , J = function(e, t) {
                e ? m.Z.success({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_success"),
                    placement: m.Z.DIRECTION.topRight,
                    showClose: !1
                }) : m.Z.error({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_failed"),
                    placement: m.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , q = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                J(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , Q = n(60378);
            const $ = utils.ont;
            var ee = n.n($)
              , te = function(e) {
                var t = (e || {}).data;
                return t && 0 === Number(t.code) ? Promise.resolve(t) : Promise.reject(t)
            }
              , ne = function(e) {
                return function(t) {
                    if (!(0,
                    Q.y)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        X.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                    }
                    return Promise.reject(t)
                }
            }
              , ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().get(t, n).then(te, ne(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().getWithCache(t, n).then(te, ne(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().post(t, n, a).then(te, ne(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }()
              , ie = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().put(t, n, a).then(te, ne(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }()
              , oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().delete(t, n).then(te, ne(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , ce = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = new FormData,
                                Object.entries(null !== n && void 0 !== n ? n : {}).forEach((function(e) {
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , n = t[0]
                                      , a = t[1];
                                    a instanceof Blob ? r.append(n, a) : r.append(n, String(a))
                                }
                                )),
                                e.abrupt("return", se(t, r, a));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }();
            const le = {
                get: ae,
                getWithCache: re,
                post: se,
                put: ie,
                postForm: ce,
                delete: oe
            };
            var ue = n(15671)
              , de = n(43144)
              , _e = function() {
                function e() {
                    (0,
                    ue.Z)(this, e),
                    this.store = void 0,
                    this.store = new Map
                }
                return (0,
                de.Z)(e, [{
                    key: "setItem",
                    value: function(e, t) {
                        this.store.set(e, {
                            value: t,
                            timestamp: Date.now()
                        })
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        var t = this.store.get(e);
                        return t ? t.value : void 0
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        this.store.delete(e)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.store.clear()
                    }
                }, {
                    key: "hasItem",
                    value: function(e) {
                        return this.store.has(e)
                    }
                }, {
                    key: "isItemExpired",
                    value: function(e, t) {
                        var n = this.store.get(e);
                        return !n || Date.now() - n.timestamp > t
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return e.instance || (e.instance = new e),
                        e.instance
                    }
                }])
            }();
            _e.instance = void 0;
            const pe = _e.getInstance();
            function me(e, t) {
                return function() {
                    var n = (0,
                    l.Z)((0,
                    c.Z)().mark((function n(a, r) {
                        var s;
                        return (0,
                        c.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (s = "cache_".concat(a, "_").concat(JSON.stringify(r)),
                                    !pe.hasItem(s) || pe.isItemExpired(s, t)) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return", e(a, r, !0));
                                case 3:
                                    return n.abrupt("return", e(a, r, !1));
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }()
            }
            function fe() {
                var e, t;
                return (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initData) || ""
            }
            function xe(e, t, n) {
                return he.apply(this, arguments)
            }
            function he() {
                return (he = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                le.get(t, (0,
                                k.Z)((0,
                                k.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": fe()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                pe.setItem(n, r),
                                e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ve(e, t, n) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !pe.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = pe.getItem(r),
                                xe(t, r, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", xe(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ke(e, t, n, a) {
                return je.apply(this, arguments)
            }
            function je() {
                return (je = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                le.post(t, n, (0,
                                k.Z)((0,
                                k.Z)({}, r || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": fe()
                                    }
                                }));
                            case 2:
                                return s = e.sent,
                                pe.setItem(a, s),
                                e.abrupt("return", s);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Ne(e, t, n, a) {
                return Ce.apply(this, arguments)
            }
            function Ce() {
                return (Ce = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !pe.hasItem(s) || !a) {
                                    e.next = 5;
                                    break
                                }
                                return i = pe.getItem(s),
                                ke(t, n, s, r).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", ke(t, n, s, r));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var we = "/priapi/v1/affiliate"
              , be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/info"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , ye = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/assess"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    var a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(we, "/game/racer/invitee-list"), {
                                    params: t
                                }, n);
                            case 3:
                                if (a = e.sent,
                                !(r = a.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                e.t0,
                                e.abrupt("return", null);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 10]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(ve, 1e4),
                                e.next = 4,
                                n("".concat(we, "/game/racer/leaderboard/friends"), {
                                    params: t
                                });
                            case 4:
                                if (a = e.sent,
                                !(r = a.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 8:
                                return e.abrupt("return", null);
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(0),
                                q(e.t0),
                                e.abrupt("return", null);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Te = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(ve, 3e5),
                                e.next = 4,
                                n("".concat(we, "/game/racer/leaderboard/global"), {
                                    params: t
                                });
                            case 4:
                                if (a = e.sent,
                                !(r = a.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 8:
                                return e.abrupt("return", null);
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(0),
                                q(e.t0),
                                e.abrupt("return", null);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Oe = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e
            }({})
              , Se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(we, "/game/racer/boosts"), {}, t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/boost"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(we, "/game/racer/group-tasks"), {}, t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ie = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/task"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Le = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/task-context"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Re = function(e) {
                return e[e.NotStarted = 0] = "NotStarted",
                e[e.InProgress = 1] = "InProgress",
                e[e.Ended = 2] = "Ended",
                e
            }({})
              , Ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r, s, i = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 0 && void 0 !== i[0] && i[0],
                                n = i.length > 1 && void 0 !== i[1] ? i[1] : {
                                    isRecheckBinding: !1
                                },
                                e.next = 4,
                                Ne("".concat(we, "/game/racer/account-binding"), n, t);
                            case 4:
                                if (a = e.sent,
                                r = a.code,
                                s = a.data,
                                0 !== r || !s) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", (0,
                                k.Z)((0,
                                k.Z)({}, s), {}, {
                                    isConnectTelegram: 1 === s.tgBindingStatus,
                                    isKyc: 1 === s.kycVerifyStatus,
                                    joinedDate: Number(s.joinedDate)
                                }));
                            case 9:
                                return e.abrupt("return", null);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , De = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r, s = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                e.next = 3,
                                ve("".concat(we, "/game/racer/campaigns"), {}, t);
                            case 3:
                                if (n = e.sent,
                                a = n.code,
                                r = n.data,
                                0 !== a || !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 8:
                                return e.abrupt("return", null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , Fe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", ve("".concat(we, "/game/racer/airdrop/tasks"), {}, t));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , We = n(55528);
            function Ue(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var Me = {
                Rewards: Ue(Ae, !0),
                Friends: Ue(Pe, {
                    pageNo: 1
                }),
                Boost: Ue(Se, !0),
                Task: Ue(Be, !0),
                Invitee: Ue(Ze, {
                    pageNo: 1
                }, !0),
                Global: Ue(Te, {
                    pageNo: 1
                })
            }
              , Ge = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Ve = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (0 !== t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t.shift(),
                                e.prev = 3,
                                e.next = 6,
                                new Promise((function(e) {
                                    var t = Math.floor(1e3 * We.k.mathRandom()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                n && Me[n] && (a = Me[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && X.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                Ve(t);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                        var a
                    }
                    ), e, null, [[3, 9]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function He() {
                Ve(Ge).catch((function(e) {
                    e instanceof Error && X.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Ye = (0,
            a.createContext)({
                points: 0,
                accumPoints: 0,
                numChances: 0,
                numChancesTotal: 0,
                countdownDisplay: "",
                isLoading: !0,
                linkCode: "",
                updateGameInfo: function() {},
                updateGameInfoFromServer: function() {},
                isShowAutopilotGainedPoint: !1,
                isShowRiskControlSheet: !0,
                autopilotPoints: 0,
                hideRiskControlSheet: function() {},
                hideAutopilotSheet: function() {},
                isShowActivityDetails: !1,
                toggleActivityDetailsBottomSheet: function() {},
                hideNewbie: function() {},
                context: {},
                isShowNewbie: !1,
                basePoint: 0,
                autopilotPointsPerHour: 0
            })
              , Ke = function() {
                return (0,
                a.useContext)(Ye)
            }
              , Xe = function(e) {
                var t, n = e.children, r = (0,
                a.useState)(0), s = (0,
                u.Z)(r, 2), i = s[0], o = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), p = _[0], m = _[1], f = (0,
                a.useState)(0), x = (0,
                u.Z)(f, 2), h = x[0], v = x[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], C = k[1], w = (0,
                a.useState)(0), b = (0,
                u.Z)(w, 2), y = b[0], P = b[1], T = (0,
                a.useState)(0), O = (0,
                u.Z)(T, 2), S = O[0], E = O[1], B = (0,
                a.useState)(0), L = (0,
                u.Z)(B, 2), R = L[0], A = L[1], D = (0,
                a.useState)(""), F = (0,
                u.Z)(D, 2), W = F[0], U = F[1], M = (0,
                a.useState)({}), G = (0,
                u.Z)(M, 2), V = G[0], H = G[1], Y = (0,
                a.useState)(!0), q = (0,
                u.Z)(Y, 2), Q = q[0], $ = q[1], ee = I(), te = ee.username, ne = ee.startParam, ae = (0,
                a.useState)(""), re = (0,
                u.Z)(ae, 2), se = re[0], ie = re[1], oe = (0,
                a.useState)(!1), ce = (0,
                u.Z)(oe, 2), le = ce[0], ue = ce[1], de = (0,
                a.useState)(0), _e = (0,
                u.Z)(de, 2), pe = _e[0], me = _e[1], fe = (0,
                a.useState)(!1), xe = (0,
                u.Z)(fe, 2), he = xe[0], ve = xe[1], ge = (0,
                a.useState)(), ke = (0,
                u.Z)(ge, 2), je = ke[0], Ne = ke[1], Ce = (0,
                a.useState)(!1), we = (0,
                u.Z)(Ce, 2), ye = we[0], Ze = we[1], Pe = (0,
                a.useState)(!1), Te = (0,
                u.Z)(Pe, 2), Oe = Te[0], Se = Te[1], Ee = null !== (t = new K.Z((ne || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", Be = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                be({
                                    extUserName: te,
                                    linkCode: Ee
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (o(Math.max(n.balancePoints, 0)),
                                m(Math.max(n.accumPoints, 0)),
                                v(n.basePoint),
                                C(n.autopilotPointsPerHour),
                                U(n.linkCode),
                                P(n.numChances),
                                A(n.secondToRefresh),
                                E(n.numChancesTotal),
                                ue(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                Se(Boolean(n.context.isShowNewbieCredit)),
                                ve(n.isUnderRiskControl),
                                me(n.autopilotPoints),
                                Ne({
                                    activityEndTime: n.context.activityEndTime,
                                    isShowActivityFlag: n.context.isShowActivityFlag && !n.isUnderRiskControl
                                }),
                                H(n.context),
                                $(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                J(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [Ee, te]);
                (0,
                a.useEffect)((function() {
                    Ze(Boolean(null === je || void 0 === je ? void 0 : je.isShowActivityFlag))
                }
                ), [null === je || void 0 === je ? void 0 : je.isShowActivityFlag]),
                (0,
                a.useEffect)((function() {
                    Be().then(He).catch((function(e) {
                        e instanceof Error && X.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [Be]),
                (0,
                a.useEffect)((function() {
                    var e = new z.Z(R);
                    return R > 0 ? (e.start(),
                    e.addEventListener(z.Z.Event.UPDATE, (function(e) {
                        ie("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(z.Z.Event.FINISH, (function() {
                        ie(""),
                        Be()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    ie("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [R, Be]),
                (0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || Be()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [Be]);
                var Ie = (0,
                a.useCallback)((function(e) {
                    o(Math.max(e.points, 0)),
                    P(e.numChances),
                    A(e.secondToRefresh)
                }
                ), [])
                  , Le = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Be();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [Be])
                  , Re = (0,
                a.useCallback)((function() {
                    ue(!1)
                }
                ), [])
                  , Ae = (0,
                a.useCallback)((function() {
                    Se(!1)
                }
                ), [])
                  , De = (0,
                a.useCallback)((function() {
                    ve(!1)
                }
                ), [])
                  , Fe = (0,
                a.useCallback)((function() {
                    Ze((function(e) {
                        return !e
                    }
                    ))
                }
                ), [])
                  , We = (0,
                a.useMemo)((function() {
                    return {
                        isLoading: Q,
                        points: i,
                        accumPoints: p,
                        numChances: y,
                        numChancesTotal: S,
                        countdownDisplay: se,
                        updateGameInfo: Ie,
                        linkCode: W,
                        updateGameInfoFromServer: Le,
                        isShowAutopilotGainedPoint: le,
                        autopilotPoints: pe,
                        isShowNewbie: Oe,
                        hideNewbie: Ae,
                        hideAutopilotSheet: Re,
                        isShowRiskControlSheet: he,
                        hideRiskControlSheet: De,
                        activity: je,
                        isShowActivityDetails: ye,
                        toggleActivityDetailsBottomSheet: Fe,
                        context: V,
                        basePoint: h,
                        autopilotPointsPerHour: j
                    }
                }
                ), [Q, i, p, y, S, se, Ie, W, Le, le, pe, Re, Oe, Ae, he, De, je, ye, Fe, V, h, j]);
                return (0,
                N.jsx)(Ye.Provider, {
                    value: We,
                    children: n
                })
            }
              , ze = n(56824);
            n(8911);
            const Je = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var qe = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Je.closeBtn,
                closeIconClassName: Je.closeIcon
            }
              , Qe = function(e) {
                return (0,
                N.jsx)(ze.default, (0,
                k.Z)((0,
                k.Z)({}, qe), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Je.topPadding
                    }),
                    zIndex: 999
                }, e))
            }
              , $e = function(e) {
                var t = ze.default.show((0,
                k.Z)((0,
                k.Z)({}, qe), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Je.topPadding
                    }),
                    onClose: function() {
                        t.destroy()
                    }
                }, e));
                return t
            };
            const et = "PrimaryButton_button__SJFHA"
              , tt = "PrimaryButton_buttonText__19AJ7";
            var nt = ["text", "className"]
              , at = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                w.Z)(e, nt);
                return (0,
                N.jsx)(H.default, (0,
                k.Z)((0,
                k.Z)({
                    category: H.default.CATEGORY.fill,
                    type: H.default.TYPE.primary,
                    size: H.default.SIZE.lg,
                    className: y()(et, n),
                    contentClassName: tt
                }, a), {}, {
                    children: t
                }))
            }
              , rt = n(4942);
            const st = "Timer_timer__j+KcR"
              , it = "Timer_show__GFyz+"
              , ot = "Timer_label__nxjo+"
              , ct = "Timer_separator__CFi1G"
              , lt = "Timer_timerValue__CaRO2";
            var ut = function(e) {
                var t = e.endTime
                  , n = e.label
                  , r = (0,
                a.useRef)(new z.Z.Absolute(t,{
                    interval: 1
                }))
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , c = i[1];
                return (0,
                a.useEffect)((function() {
                    var e = r.current;
                    return e.start().addEventListener(z.Z.Event.UPDATE, (function(e) {
                        c(e)
                    }
                    )),
                    function() {
                        e.end()
                    }
                }
                ), []),
                (0,
                N.jsxs)("div", {
                    className: y()(st, (0,
                    rt.Z)({}, it, o)),
                    children: [n && (0,
                    N.jsx)("span", {
                        className: ot,
                        children: n
                    }), Number(null === o || void 0 === o ? void 0 : o.day) > 0 && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("span", {
                            className: lt,
                            children: null === o || void 0 === o ? void 0 : o.day
                        }), (0,
                        N.jsx)("span", {
                            className: ct,
                            children: ":"
                        })]
                    }), (0,
                    N.jsx)("span", {
                        className: lt,
                        children: null === o || void 0 === o ? void 0 : o.hour
                    }), (0,
                    N.jsx)("span", {
                        className: ct,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: lt,
                        children: null === o || void 0 === o ? void 0 : o.minute
                    }), (0,
                    N.jsx)("span", {
                        className: ct,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: lt,
                        children: null === o || void 0 === o ? void 0 : o.second
                    })]
                })
            };
            const dt = "EventPopover_eventPopoverWrapper__65bP-"
              , _t = "EventPopover_eventPopover__B0CAq"
              , pt = "EventPopover_eventPopoverDesc__+lNFw"
              , mt = "EventPopover_eventPopoverBtn__BKIwS"
              , ft = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , xt = "EventPopover_eventPopoverArrow__M+sYF"
              , ht = "EventPopover_eventDetailsContainer__G1KfS"
              , vt = "EventPopover_title__Tie4q"
              , gt = "EventPopover_description__tVAy9"
              , kt = "EventPopover_disclaimer__jFZC3"
              , jt = "EventPopover_continueBtn__S2Sj-"
              , Nt = "EventPopover_eventDetails__5xDB0"
              , Ct = "EventPopover_eventImg__0yapf";
            var wt = function(e) {
                var t = e.children
                  , n = Ke()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(V.Z, {
                        zIndex: 998,
                        layerClassName: dt,
                        popperClassName: _t,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: pt,
                        description: (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(H.default, {
                                className: mt,
                                type: H.default.TYPE.primary,
                                category: H.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                N.jsx)(P.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: ft
                                }),
                                iconType: H.default.ICON_POSITION.tailing,
                                children: (0,
                                Z.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            N.jsx)("svg", {
                                className: xt,
                                width: "8",
                                height: "4",
                                viewBox: "0 0 8 4",
                                fill: "none",
                                children: (0,
                                N.jsx)("path", {
                                    d: "M4 4L8 0L0 0L4 4Z",
                                    fill: "#2F302D"
                                })
                            })]
                        }),
                        children: t
                    }), (0,
                    N.jsx)(Qe, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        N.jsxs)("div", {
                            className: ht,
                            children: [(0,
                            N.jsxs)("div", {
                                className: Nt,
                                children: [(0,
                                N.jsx)(Y.Z, {
                                    pictureClassName: Ct,
                                    className: Ct,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                N.jsx)("h2", {
                                    className: vt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                N.jsx)("p", {
                                    className: gt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                N.jsx)(ut, {
                                    endTime: i,
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                N.jsx)("p", {
                                    className: kt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            N.jsx)(at, {
                                className: jt,
                                onClick: function() {
                                    s()
                                },
                                text: (0,
                                Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            };
            const bt = "Navbar_navbar__LF3-M"
              , yt = "Navbar_link__qX0Sf"
              , Zt = "Navbar_active__TCbF8"
              , Pt = "Navbar_linkIcon__GtH54"
              , Tt = "Navbar_linkText__Szxi-"
              , Ot = "Navbar_newIndicator__IrNNw";
            var St = ["children", "className"]
              , Et = ["iconName", "label", "onClick", "showNewIndicator"]
              , Bt = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                w.Z)(e, St)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                N.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , It = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , o = (0,
                w.Z)(e, Et)
                  , c = (0,
                s.useRouteMatch)({
                    path: o.to,
                    exact: o.to === R
                });
                return (0,
                N.jsxs)(Bt, {
                    className: y()(yt, c && Zt),
                    to: o.to,
                    onClick: a,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: t,
                        className: Pt
                    }), i && (0,
                    N.jsx)("span", {
                        className: Ot
                    }), (0,
                    N.jsx)("span", {
                        className: Tt,
                        children: n
                    })]
                })
            }
              , Lt = function() {
                var e = {
                    telegramid: I().uid
                };
                return (0,
                N.jsxs)("div", {
                    className: bt,
                    children: [(0,
                    N.jsx)(wt, {
                        children: (0,
                        N.jsx)(It, {
                            iconName: "okx-growth-home",
                            to: R,
                            label: (0,
                            Z.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    N.jsx)(It, {
                        iconName: "okx-growth-leaderboard",
                        to: W,
                        label: (0,
                        Z.O4)("ok_game_okxracer_leaderboard"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                                    anchor: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(e)
                        }
                    }), (0,
                    N.jsx)(It, {
                        iconName: "okx-growth-task",
                        to: D,
                        label: (0,
                        Z.O4)("ok_game_okxracer_tasks"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OkxRacerLandingPage_NavigationBar_Task_Click",
                                    anchor: "OkxRacerLandingPage_NavigationBar_Task_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(e)
                        }
                    }), (0,
                    N.jsx)(It, {
                        iconName: "okx-growth-friends",
                        to: A,
                        label: (0,
                        Z.O4)("ok_game_okxracer_friends"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                                    anchor: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(e)
                        }
                    }), (0,
                    N.jsx)(It, {
                        iconName: "okx-growth-surprises",
                        to: U,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            };
            var Rt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , At = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Dt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , Ft = "lastConnectWalletType"
              , Wt = function(e) {
                return e.TgWallet = "OKX Mini Wallet",
                e.OkxApp = "OKX Wallet",
                e
            }({});
            function Ut(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            const Mt = "RiskControl_title__h9Z0T";
            var Gt = function() {
                var e = Ke()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                N.jsx)(Qe, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    N.jsx)("div", {
                        className: Mt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , Vt = n(8031)
              , Ht = new (function() {
                return (0,
                de.Z)((function e() {
                    var t = this;
                    (0,
                    ue.Z)(this, e),
                    this.instId = "BTC-USDT",
                    this.channel = "tickers",
                    this.channelSubscribe = {
                        op: "subscribe",
                        args: [{
                            channel: this.channel,
                            instId: this.instId
                        }]
                    },
                    this.handleList = [],
                    this.connection = void 0,
                    this.initConnect = function() {
                        t.connection.onSocketConnected((function() {
                            t.onConnected()
                        }
                        )),
                        t.connection.connect(),
                        t.addPageHideEvent()
                    }
                    ,
                    this.onConnected = function() {
                        t.connection.sendChannel(JSON.stringify(t.channelSubscribe)),
                        t.connection.setPushDataResolver(t.onResolve)
                    }
                    ,
                    this.onResolve = function(e) {
                        var n = e.arg
                          , a = e.data;
                        if (n.channel === t.channel && n.instId === t.instId) {
                            var r = ((null === a || void 0 === a ? void 0 : a[0]) || {}).last;
                            r && t.handleList.forEach((function(e) {
                                e(Number(r))
                            }
                            ))
                        }
                    }
                    ,
                    this.disconnect = function() {
                        t.connection.disconnect()
                    }
                    ,
                    this.addCallback = function(e) {
                        t.handleList.push(e)
                    }
                    ,
                    this.connection = new Vt.Z({
                        connectUrl: "wss://wspri.okx.com:8443/ws/v5/ipublic"
                    }),
                    this.initConnect()
                }
                ), [{
                    key: "addPageHideEvent",
                    value: function() {
                        var e = this;
                        window.addEventListener("visibilitychange", (function() {
                            document.hidden ? e.disconnect() : (e.connection.onSocketConnected(e.onConnected),
                            e.connection.connect())
                        }
                        ))
                    }
                }])
            }())
              , Yt = (0,
            a.createContext)(Ht)
              , Kt = function(e) {
                var t = e.children;
                return (0,
                N.jsx)(Yt.Provider, {
                    value: Ht,
                    children: t
                })
            }
              , Xt = (0,
            a.createContext)(null)
              , zt = function() {
                return (0,
                a.useContext)(Xt)
            }
              , Jt = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useContext)(Yt);
                return (0,
                a.useEffect)((function() {
                    o.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                N.jsx)(Xt.Provider, {
                    value: s,
                    children: t
                })
            }
              , qt = n(46430)
              , Qt = "racer"
              , $t = function() {
                var e;
                if (!(0,
                Q.y)())
                    return qt.Z.getInstance(Qt) || qt.Z.init({
                        project: Qt
                    }),
                    null !== (e = qt.Z.getInstance(Qt)) && void 0 !== e ? e : qt.Z
            }
              , en = "guessRecords_new";
            function tn(e) {
                var t = $t().get(en) || [];
                t.unshift(e),
                $t().set(en, t.slice(0, 5))
            }
            var nn = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , an = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: nn.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: nn.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , rn = (0,
            a.createContext)(an)
              , sn = function() {
                return (0,
                a.useContext)(rn)
            }
              , on = function(e) {
                var t = e.children
                  , n = I().uid
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)(5)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , f = (0,
                a.useState)(null)
                  , x = (0,
                u.Z)(f, 2)
                  , h = x[0]
                  , v = x[1]
                  , g = (0,
                a.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , C = k[1]
                  , w = (0,
                a.useState)(nn.NONE)
                  , b = (0,
                u.Z)(w, 2)
                  , y = b[0]
                  , P = b[1]
                  , T = zt()
                  , S = Ke().updateGameInfo
                  , E = (0,
                a.useRef)(nn.NONE)
                  , B = (0,
                a.useRef)(1)
                  , L = (0,
                a.useRef)(10)
                  , R = (0,
                a.useRef)(null)
                  , A = (0,
                a.useRef)(null)
                  , D = (0,
                a.useRef)(null)
                  , F = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = E.current === nn.UP ? 1 : 0,
                                e.next = 4,
                                ye({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (C(a.won),
                                S({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                B.current = a.multiplier,
                                L.current = a.basePoint,
                                R.current = Number(a.changeRate),
                                A.current = a.prevPrice,
                                D.current = a.currentPrice,
                                tn({
                                    curCombo: a.curCombo,
                                    won: a.won,
                                    predict: t,
                                    date: (new Date).valueOf()
                                })),
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                C(null),
                                R.current = null,
                                J(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = nn.NONE,
                                o(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [S]);
                (0,
                a.useEffect)((function() {
                    var e = null;
                    if (i) {
                        var t = 5;
                        m(t),
                        e = setInterval((function() {
                            m(t -= 1),
                            0 === t && (e && clearInterval(e),
                            v(null),
                            F())
                        }
                        ), 1e3)
                    }
                    return function() {
                        e && clearTimeout(e)
                    }
                }
                ), [F, i]),
                (0,
                a.useEffect)((function() {
                    if (i && T)
                        if (h) {
                            var e = T > h;
                            P(T === h ? nn.NONE : e ? nn.UP : nn.DOWN)
                        } else
                            v(T)
                }
                ), [h, i, T]);
                var W = (0,
                a.useCallback)((function(e) {
                    C(null),
                    o(!0),
                    E.current = e,
                    R.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === nn.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        O.act({
                            action: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                            anchor: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }(t),
                    e === nn.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        O.act({
                            action: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                            anchor: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }(t)
                }
                ), [])
                  , U = (0,
                a.useMemo)((function() {
                    return {
                        countdown: p,
                        onButtonClick: W,
                        result: j,
                        isPending: i,
                        currentTrend: y,
                        multiplier: B.current,
                        basePoints: L.current,
                        predict: E.current,
                        changeRate: R.current,
                        prevPrice: A.current,
                        currentPrice: D.current
                    }
                }
                ), [p, y, i, B, W, j]);
                return (0,
                N.jsx)(rn.Provider, {
                    value: U,
                    children: t
                })
            };
            const cn = "NewCampaigns_container__gO1Ko"
              , ln = "NewCampaigns_img__Or37G"
              , un = "NewCampaigns_title__Lx+PB"
              , dn = "NewCampaigns_desc__U9VKz"
              , _n = "NewCampaigns_btn__xIIk1";
            var pn = function() {
                var e = (0,
                s.useHistory)()
                  , t = (0,
                s.useLocation)()
                  , n = !1
                  , a = function() {};
                return (0,
                N.jsxs)(Qe, {
                    visible: n,
                    onClose: a,
                    containerClassName: cn,
                    children: [(0,
                    N.jsx)(Y.Z, {
                        pictureClassName: ln,
                        className: ln,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    N.jsx)("p", {
                        className: un,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    N.jsx)("p", {
                        className: dn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    N.jsx)(at, {
                        className: _n,
                        onClick: function() {
                            e.push({
                                pathname: U,
                                hash: t.hash
                            })
                        },
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            }
              , mn = n(94595)
              , fn = n(96450)
              , xn = 2e3
              , hn = 500;
            function vn(e) {
                return (Math.abs(e) < 1e-4 ? fn.yx.ceilTruncate : fn.yx.floorTruncate)(e, 4)
            }
            const gn = "GuessResult_container__ECdpL"
              , kn = "GuessResult_title__fzYxg"
              , jn = "GuessResult_multiplier__yRHWm"
              , Nn = "GuessResult_description__R2fup"
              , Cn = "GuessResult_detailsIcon__ZE7Ry"
              , wn = "GuessResult_changeRateContainer__a5-N7"
              , bn = "GuessResult_label__+b5Nz"
              , yn = "GuessResult_changeRate__yhVz3"
              , Zn = "GuessResult_up__5vYDR"
              , Pn = "GuessResult_down__fa-oP"
              , Tn = "GuessResult_priceChange__xr6e8"
              , On = "GuessResult_price__Vk+bY";
            function Sn(e) {
                return (0,
                mn.xG)((0,
                mn.uf)(fn.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var En = function(e) {
                var t = e.className
                  , n = sn()
                  , r = n.result
                  , s = n.multiplier
                  , i = n.changeRate
                  , o = n.prevPrice
                  , c = n.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , p = d[1];
                return (0,
                a.useEffect)((function() {
                    var e, t;
                    if (null !== r) {
                        var n, a, s, i;
                        if (null !== (n = window) && void 0 !== n && null !== (a = n.Telegram) && void 0 !== a && a.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, r ? "success" : "error");
                        e = setTimeout((function() {
                            p(!0),
                            t = setTimeout((function() {
                                p(!1)
                            }
                            ), xn)
                        }
                        ), hn)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [r]),
                (0,
                N.jsx)(N.Fragment, {
                    children: _ && (0,
                    N.jsxs)("div", {
                        className: y()(t, gn),
                        children: [(0,
                        N.jsx)("p", {
                            className: jn,
                            children: r ? (0,
                            N.jsxs)("span", {
                                className: Cn,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            N.jsx)("span", {
                                className: Cn,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        N.jsx)("h2", {
                            className: kn,
                            children: (0,
                            Z.O4)(r ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        N.jsxs)("div", {
                            className: Nn,
                            children: [null !== i && (0,
                            N.jsxs)("p", {
                                className: wn,
                                children: [(0,
                                N.jsx)("span", {
                                    className: bn,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                N.jsx)("span", {
                                    className: y()(yn, (0,
                                    rt.Z)((0,
                                    rt.Z)({}, Zn, i > 0), Pn, i < 0)),
                                    children: (0,
                                    mn.uf)(vn(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            N.jsx)("p", {
                                className: Tn,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    N.jsx)("span", {
                                        className: On,
                                        children: Sn(o)
                                    }),
                                    currentPrice: (0,
                                    N.jsx)("span", {
                                        className: On,
                                        children: Sn(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const Bn = "TncButton_termsAndConditions__MyIpV";
            var In = function(e) {
                var t = e.className;
                return (0,
                N.jsx)("button", {
                    className: y()(Bn, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                })
            };
            const Ln = "AutoPilot_title__NJa0C"
              , Rn = "AutoPilot_button__Sg42v";
            var An = function() {
                var e = Ke()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                N.jsxs)(Qe, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    N.jsx)("div", {
                        className: Ln,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            mn.uf)(n)
                        })
                    }), (0,
                    N.jsx)(at, {
                        className: Rn,
                        onClick: a,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const Dn = "BackgroundVideo_container__J5sO2"
              , Fn = "BackgroundVideo_muteButton__04Huj"
              , Wn = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Un = "BackgroundVideo_staticImage__EpRTb"
              , Mn = "BackgroundVideo_hide__ZXYN9";
            var Gn, Vn, Hn, Yn, Kn, Xn, zn = "backgroundVideoSoundOn", Jn = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", qn = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }], Qn = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }], $n = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Jn)
            }, ea = function() {
                var e = sn().isPending
                  , t = (0,
                a.useRef)(null)
                  , n = (0,
                a.useRef)(null)
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)(!1)
                  , f = (0,
                u.Z)(m, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = $t()
                  , g = (0,
                a.useState)((function() {
                    var e = v.get(zn);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , C = j[0]
                  , w = j[1];
                (0,
                a.useEffect)((function() {
                    t.current && (e && (h(!1),
                    t.current.currentTime = 0,
                    t.current.play().then((function() {
                        c(!0)
                    }
                    )).catch((function() {
                        c(!1)
                    }
                    ))),
                    t.current.onended = function() {
                        var e;
                        h(!0),
                        null === (e = n.current) || void 0 === e || e.play().then((function() {
                            p(!0)
                        }
                        )).catch((function() {
                            p(!1)
                        }
                        ))
                    }
                    )
                }
                ), [e]);
                var b = !i && !_
                  , Z = i && x && _
                  , T = i && (!x || !_);
                return (0,
                N.jsxs)("div", {
                    className: Dn,
                    children: [(0,
                    N.jsx)(H.default, {
                        category: H.default.CATEGORY.fill,
                        type: H.default.TYPE.quaternary,
                        size: H.default.SIZE.md,
                        className: Fn,
                        strictCircle: !0,
                        onClick: function() {
                            w((function(e) {
                                return v.set(zn, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: C ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Wn
                        })
                    }), (0,
                    N.jsx)(Y.Z, {
                        className: y()(Un, (0,
                        rt.Z)({}, Mn, !b)),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Jn)
                    }), (0,
                    N.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, $n), {}, {
                        className: y()((0,
                        rt.Z)({}, Mn, !Z)),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: qn.map((function(e) {
                            return (0,
                            N.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    })), (0,
                    N.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, $n), {}, {
                        className: y()((0,
                        rt.Z)({}, Mn, !T)),
                        ref: t,
                        muted: C,
                        children: Qn.map((function(e) {
                            return (0,
                            N.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }, ta = ["title", "titleId"];
            function na() {
                return na = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                na.apply(null, arguments)
            }
            function aa(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = function(e, t) {
                        if (null == e)
                            return {};
                        var n = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.includes(a))
                                    continue;
                                n[a] = e[a]
                            }
                        return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            n = s[a],
                            t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }(e, ta);
                return a.createElement("svg", na({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Gn || (Gn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Vn || (Vn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Hn || (Hn = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Yn || (Yn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Kn || (Kn = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Xn || (Xn = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_i_738_19404",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", {
                    dy: 2
                }), a.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19404"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19404",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#F5384F"
                }), a.createElement("stop", {
                    offset: .48,
                    stopColor: "#F87989"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#F5384F"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19552",
                    x1: 62.6289,
                    y1: 48.4995,
                    x2: 62.6289,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#F5384F"
                }), a.createElement("stop", {
                    offset: .995,
                    stopColor: "#A60014"
                })))))
            }
            var ra = a.forwardRef(aa);
            n.p;
            var sa, ia, oa, ca, la, ua, da = ["title", "titleId"];
            function _a() {
                return _a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                _a.apply(null, arguments)
            }
            function pa(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = function(e, t) {
                        if (null == e)
                            return {};
                        var n = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.includes(a))
                                    continue;
                                n[a] = e[a]
                            }
                        return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            n = s[a],
                            t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }(e, da);
                return a.createElement("svg", _a({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, sa || (sa = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), ia || (ia = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), oa || (oa = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), ca || (ca = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), la || (la = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), ua || (ua = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_i_738_19392",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", {
                    dy: 2
                }), a.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19392"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19392",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#54EA90",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .48,
                    stopColor: "#54E88F"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#53E68E",
                    stopOpacity: 0
                })), a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint0_linear_738_19488",
                    x1: 72.4467,
                    y1: 48.4995,
                    x2: 72.4467,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#00BC4B"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#01933B"
                }))))))
            }
            var ma = a.forwardRef(pa);
            n.p;
            const fa = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var xa, ha = function(e) {
                var t = e.className
                  , n = sn()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , o = Ke().numChances
                  , c = (0,
                a.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1];
                (0,
                a.useEffect)((function() {
                    var e;
                    return s || (e = setTimeout((function() {
                        _(void 0)
                    }
                    ), 2500)),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [s]);
                var p = function(e) {
                    var t, n, a;
                    s || d || (_(e === nn.UP ? nn.DOWN : nn.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , m = o <= 0;
                return (0,
                N.jsxs)("div", {
                    className: t,
                    children: [(0,
                    N.jsx)("p", {
                        className: y()(fa.instructions, s && fa.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: fa.btnContainer,
                        children: [(0,
                        N.jsxs)("button", {
                            disabled: m || d === nn.UP,
                            onClick: function() {
                                return p(nn.UP)
                            },
                            type: "button",
                            className: y()(fa.btn, fa.upBtn, (0,
                            rt.Z)({}, fa.pressed, i === nn.UP)),
                            children: [(0,
                            N.jsx)(ma, {
                                className: y()(fa.btnGraphic, fa.upBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: fa.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: fa.arrow
                                })]
                            })]
                        }), (0,
                        N.jsxs)("button", {
                            disabled: m || d === nn.DOWN,
                            onClick: function() {
                                return p(nn.DOWN)
                            },
                            type: "button",
                            className: y()(fa.btn, fa.downBtn, (0,
                            rt.Z)({}, fa.pressed, i === nn.DOWN)),
                            children: [(0,
                            N.jsx)(ra, {
                                className: y()(fa.btnGraphic, fa.downBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: fa.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: fa.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, va = ["title", "titleId"];
            function ga() {
                return ga = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                ga.apply(null, arguments)
            }
            function ka(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = function(e, t) {
                        if (null == e)
                            return {};
                        var n = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.includes(a))
                                    continue;
                                n[a] = e[a]
                            }
                        return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            n = s[a],
                            t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }(e, va);
                return a.createElement("svg", ga({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, xa || (xa = a.createElement("g", {
                    transform: "translate(24 12)"
                }, a.createElement("rect", {
                    className: "track",
                    x: 2.5,
                    y: 2.5,
                    width: 322,
                    height: 155,
                    rx: 77.5,
                    fill: "#030303",
                    stroke: "#909090",
                    strokeWidth: 5
                }), a.createElement("path", {
                    d: "M81.4976 21.5C82.326 21.5 82.9976 20.8284 82.9976 20C82.9976 19.1716 82.326 18.5 81.4976 18.5V21.5ZM81.4976 138.5C49.1889 138.5 22.9976 112.309 22.9976 80H19.9976C19.9976 113.966 47.532 141.5 81.4976 141.5V138.5ZM22.9976 80C22.9976 47.6913 49.1889 21.5 81.4976 21.5V18.5C47.532 18.5 19.9976 46.0345 19.9976 80H22.9976Z",
                    fill: "url(#paint1_linear_263_6211)"
                }), a.createElement("path", {
                    d: "M247 138.5C246.172 138.5 245.5 139.172 245.5 140C245.5 140.828 246.172 141.5 247 141.5L247 138.5ZM247 21.5C279.309 21.5 305.5 47.6913 305.5 80L308.5 80C308.5 46.0345 280.966 18.5 247 18.5L247 21.5ZM305.5 80C305.5 112.309 279.309 138.5 247 138.5L247 141.5C280.966 141.5 308.5 113.966 308.5 80L305.5 80Z",
                    fill: "url(#paint2_linear_263_6211)"
                }), a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint1_linear_263_6211",
                    x1: 51.4976,
                    y1: 20,
                    x2: 51.4976,
                    y2: 140,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                })), a.createElement("linearGradient", {
                    id: "paint2_linear_263_6211",
                    x1: 277,
                    y1: 140,
                    x2: 277,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                }))))))
            }
            var ja = a.forwardRef(ka);
            n.p;
            var Na = n(31301);
            n(27668);
            const Ca = "FuelIndicator_fuelContainer__QIskL"
              , wa = "FuelIndicator_toTasksIcon__Y7exC"
              , ba = "FuelIndicator_line__tWBfm"
              , ya = "FuelIndicator_description__EaUsa"
              , Za = "FuelIndicator_fuelIcon__I38Ss"
              , Pa = "FuelIndicator_maxChances__OMSHl"
              , Ta = "FuelIndicator_earnPtsMsg__PjtcT";
            var Oa, Sa, Ea = function(e) {
                var t = e.className
                  , n = Ke()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                N.jsxs)("div", {
                    className: y()(t, Ca),
                    children: [(0,
                    N.jsx)("span", {
                        className: Za,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    N.jsx)(Na.Z.Line, {
                        className: ba,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r) : (0,
                    N.jsx)(Bt, {
                        to: D,
                        className: Ta,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    N.jsxs)("p", {
                        className: ya,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        N.jsxs)(N.Fragment, {
                            children: ["/\xa0", (0,
                            N.jsx)("span", {
                                className: Pa,
                                children: r
                            })]
                        })]
                    }), (0,
                    N.jsx)(Bt, {
                        to: D,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: wa
                        })
                    })]
                })
            }, Ba = ["title", "titleId"];
            function Ia() {
                return Ia = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Ia.apply(null, arguments)
            }
            function La(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = function(e, t) {
                        if (null == e)
                            return {};
                        var n = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.includes(a))
                                    continue;
                                n[a] = e[a]
                            }
                        return n
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            n = s[a],
                            t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }(e, Ba);
                return a.createElement("svg", Ia({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Oa || (Oa = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Sa || (Sa = a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint0_linear_563_49992",
                    x1: 84,
                    y1: 28.5652,
                    x2: 84,
                    y2: 5.44528e-7,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", null), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#909090"
                })))))
            }
            var Ra = a.forwardRef(La);
            n.p;
            const Aa = "RefuelTimer_container__wtALO"
              , Da = "RefuelTimer_description__sD+HM"
              , Fa = "RefuelTimer_timer__LL1+c";
            var Wa = function(e) {
                var t = e.className
                  , n = Ke().countdownDisplay;
                return (0,
                N.jsxs)("div", {
                    className: y()(t, Aa),
                    children: [(0,
                    N.jsx)(Ra, {}), (0,
                    N.jsx)("p", {
                        className: Da,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            N.jsx)("span", {
                                className: Fa,
                                children: n
                            })
                        })
                    })]
                })
            };
            const Ua = "CoinPrice_raceTrack__NZO2t"
              , Ma = "CoinPrice_run__f0UIF"
              , Ga = "CoinPrice_coinPriceContainer__YbeUE"
              , Va = "CoinPrice_content__a-5Jl"
              , Ha = "CoinPrice_fuelIndicator__p+f1I"
              , Ya = "CoinPrice_refuelTimer__tbWMw"
              , Ka = "CoinPrice_hide__bHhxJ"
              , Xa = "CoinPrice_label__yTNy0"
              , za = "CoinPrice_value__ZjRZz"
              , Ja = "CoinPrice_slotMachine__hUQKt"
              , qa = "SlotMachine_row__a4TO0"
              , Qa = "SlotMachine_animate__-G4TR"
              , $a = "SlotMachine_column__aR0VE"
              , er = "SlotMachine_arrows__m1dhv"
              , tr = "SlotMachine_columnContainer__a76pd"
              , nr = "SlotMachine_background__b9TMg"
              , ar = "SlotMachine_slot__jwCvC"
              , rr = "SlotMachine_staticColumn__O5zfB"
              , sr = "SlotMachine_sm__ZRCig"
              , ir = "SlotMachine_arrow__qOYmf"
              , or = "SlotMachine_wentUp__z48TO"
              , cr = "SlotMachine_down__aYC8C"
              , lr = "SlotMachine_stable__CDMLP"
              , ur = "SlotMachine_wentDown__1fYUS"
              , dr = "SlotMachine_up__IuiYV";
            var _r = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                N.jsxs)("div", {
                    className: tr,
                    children: [(0,
                    N.jsx)("div", {
                        className: nr
                    }), (0,
                    N.jsxs)("div", {
                        className: $a,
                        style: r,
                        children: [(0,
                        N.jsx)("p", {
                            className: ar,
                            children: a
                        }), t && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)("p", {
                                className: ar,
                                children: "1"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "2"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "3"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "4"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "5"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "6"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "7"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "8"
                            }), (0,
                            N.jsx)("p", {
                                className: ar,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , pr = function() {
                var e = sn()
                  , t = e.changeRate
                  , n = e.isPending
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , c = (0,
                a.useState)(null)
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1]
                  , p = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(p, 2)
                  , f = m[0]
                  , x = m[1];
                return (0,
                a.useEffect)((function() {
                    n && x(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? nn.UP : 0 === e ? nn.NONE : nn.DOWN),
                    o(String(Math.abs(Number(vn(t)))).split("").filter((function(e) {
                        return "." !== e
                    }
                    )).map((function(e) {
                        return parseInt(e, 10)
                    }
                    ))),
                    x(!1)) : _(null)
                }
                ), [t]),
                (0,
                N.jsxs)("div", {
                    className: y()(qa, f && Qa),
                    children: [(0,
                    N.jsx)("div", {
                        className: tr,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(er, (0,
                            rt.Z)((0,
                            rt.Z)((0,
                            rt.Z)({}, or, d === nn.UP), ur, d === nn.DOWN), lr, d === nn.NONE)),
                            children: [(0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: y()(ir, dr)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: y()(ir, lr)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: y()(ir, cr)
                            })]
                        })
                    }), (0,
                    N.jsx)(_r, {
                        animate: f,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: rr,
                        children: "."
                    }), (0,
                    N.jsx)(_r, {
                        animate: f,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(_r, {
                        animate: f,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    N.jsx)(_r, {
                        animate: f,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(_r, {
                        animate: f,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: y()(rr, sr),
                        children: "%"
                    })]
                })
            }
              , mr = function() {
                var e = zt()
                  , t = sn()
                  , n = t.isPending
                  , r = t.changeRate
                  , s = Ke().countdownDisplay
                  , i = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                a.useEffect)((function() {
                    n && l(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    var e, t = function() {
                        e && clearTimeout(e)
                    };
                    return n || (null === r ? l(!1) : e = setTimeout((function() {
                        l(!1)
                    }
                    ), hn)),
                    t
                }
                ), [r, n]);
                var d = e ? "$".concat((0,
                mn.uf)(fn.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !n;
                return (0,
                N.jsxs)("div", {
                    className: Ga,
                    children: [(0,
                    N.jsx)(ja, {
                        className: y()(Ua, n && Ma)
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Va, c && Ka),
                        children: [(0,
                        N.jsx)("p", {
                            className: Xa,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        N.jsx)("p", {
                            className: za,
                            children: d
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Va, !c && Ka),
                        children: [(0,
                        N.jsxs)("p", {
                            className: Xa,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        N.jsx)("div", {
                            className: Ja,
                            children: (0,
                            N.jsx)(pr, {})
                        })]
                    }), (0,
                    N.jsx)(Ea, {
                        className: Ha
                    }), (0,
                    N.jsx)("div", {
                        className: y()(Ya, !_ && Ka),
                        children: (0,
                        N.jsx)(Wa, {})
                    })]
                })
            };
            const fr = "LandingPage_container__pU2cC"
              , xr = "LandingPage_resultOverlay__WSYZb"
              , hr = "LandingPage_disclaimer__pVRHC"
              , vr = "LandingPage_recordsBtnContainer__Anr4Y"
              , gr = "LandingPage_backgroundVideo__flTkH"
              , kr = "LandingPage_content__D0ZLW"
              , jr = "LandingPage_points__Ruq4j"
              , Nr = "LandingPage_coinPrice__nJ0nj"
              , Cr = "LandingPage_btnContainer__IEll8"
              , wr = "LandingPage_termsAndConditions__MdClU";
            var br = n(71979);
            const yr = "NewbieWelcome_title__48Py5"
              , Zr = "NewbieWelcome_desc__q7GHz"
              , Pr = "NewbieWelcome_button__im+B1"
              , Tr = "NewbieWelcome_pointsBox__gOjMh"
              , Or = "NewbieWelcome_points__4t75l"
              , Sr = "NewbieWelcome_animation__tf9Dj";
            var Er = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = o.Z.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                br.Z)((0,
                l.Z)((0,
                c.Z)().mark((function a() {
                    return (0,
                    c.Z)().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2,
                                n.e(5340).then(n.t.bind(n, 5340, 23));
                            case 2:
                                a.sent.loadAnimation({
                                    container: e.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !0,
                                    path: t()
                                });
                            case 4:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                ))), []),
                (0,
                N.jsx)(N.Fragment, {
                    children: (0,
                    N.jsx)("div", {
                        ref: e,
                        className: Sr
                    })
                })
            }
              , Br = function() {
                var e = Ke()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                N.jsxs)(Qe, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(Er, {}), (0,
                            N.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    N.jsx)("div", {
                        className: Tr,
                        children: (0,
                        N.jsx)("img", {
                            src: "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: Or
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: yr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    N.jsx)("div", {
                        className: Zr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    N.jsx)(at, {
                        className: Pr,
                        onClick: t,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , Ir = n(22387);
            const Lr = "UserPointCounter_pointCounter__-QAj8"
              , Rr = "UserPointCounter_hide__o4qTQ"
              , Ar = "UserPointCounter_points__d3HeG"
              , Dr = "UserPointCounter_title__B-gN-"
              , Fr = "UserPointCounter_countdown__Z7xGo"
              , Wr = "UserPointCounter_value__2a23E";
            var Ur = function() {
                var e = Ke().points
                  , t = (0,
                Ir.Z)(e)
                  , n = sn()
                  , r = n.isPending
                  , s = n.countdown
                  , i = (0,
                a.useRef)(null)
                  , o = (0,
                a.useState)(!1)
                  , c = (0,
                u.Z)(o, 2)
                  , l = c[0]
                  , d = c[1];
                (0,
                a.useEffect)((function() {
                    var e;
                    return r ? d(!0) : e = setTimeout((function() {
                        d(!1)
                    }
                    ), 2500),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [r]);
                var _ = (0,
                a.useCallback)((function(e, t, n) {
                    e <= t && (n((0,
                    mn.uf)(String(e))),
                    requestAnimationFrame((function() {
                        var a = function(e, t) {
                            var n = t - e;
                            return Math.max(1, Math.floor(n / 10))
                        }(e, t);
                        _(e + a, t, n)
                    }
                    )))
                }
                ), []);
                return (0,
                a.useEffect)((function() {
                    var n;
                    if (t === e)
                        return function() {}
                        ;
                    function a(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (n = i.current) || void 0 === n ? void 0 : n.innerText) || !t)
                        return _(0, e, a),
                        function() {}
                        ;
                    var r = setTimeout((function() {
                        _(t || 0, e, a)
                    }
                    ), 2500);
                    return function() {
                        clearTimeout(r)
                    }
                }
                ), [_, e, t]),
                (0,
                N.jsxs)("div", {
                    className: Lr,
                    children: [(0,
                    N.jsxs)("p", {
                        className: y()(Dr, l && Rr),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    N.jsx)("p", {
                        ref: i,
                        className: y()(Ar, l && Rr),
                        children: "0"
                    }), (0,
                    N.jsxs)("p", {
                        className: y()(Fr, !l && Rr),
                        children: ["00:0", (0,
                        N.jsx)("span", {
                            className: Wr,
                            children: s
                        })]
                    })]
                })
            }
              , Mr = n(39136)
              , Gr = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.firstDigits
                  , a = void 0 === n ? 6 : n
                  , r = t.lastDigits
                  , s = void 0 === r ? 3 : r
                  , i = t.placeholder
                  , o = void 0 === i ? "..." : i;
                if (e && e.length > 20) {
                    var c = e.substring(0, a)
                      , l = e.substring(e.length - s, e.length);
                    return "".concat(c).concat(o).concat(l)
                }
                return e
            }
              , Vr = n(52008)
              , Hr = function(e, t) {
                var n, a = new Promise((function(a) {
                    e.setConnectRequestParameters({
                        state: "ready",
                        value: {
                            tonProof: t
                        }
                    }),
                    e.openModal(),
                    n = e.onStatusChange(function() {
                        var t = (0,
                        l.Z)((0,
                        c.Z)().mark((function t(r) {
                            var s, i, o, l, u, d, _, p, m, f, x, h, v, g, k;
                            return (0,
                            c.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        r && (s = null === e || void 0 === e ? void 0 : e.wallet,
                                        o = (i = s).account,
                                        l = o.address,
                                        u = o.publicKey,
                                        d = i.connectItems,
                                        _ = i.device.appName,
                                        p = Vr.Address.parse(l),
                                        m = p.toString({
                                            urlSafe: !0,
                                            bounceable: !1,
                                            testOnly: !1
                                        }),
                                        f = d.tonProof,
                                        x = f.proof,
                                        h = x.signature,
                                        v = x.payload,
                                        g = x.domain,
                                        k = x.timestamp,
                                        a({
                                            tonAddress: m,
                                            publicKey: u,
                                            signature: h,
                                            appName: _,
                                            msg: JSON.stringify({
                                                payload: v,
                                                domain: null === g || void 0 === g ? void 0 : g.value,
                                                timestamp: k
                                            })
                                        }),
                                        n && n());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                )), r = new Promise((function(e, t) {
                    var a = setTimeout((function() {
                        clearTimeout(a),
                        n && n(),
                        t(new Error("Promise timed out"))
                    }
                    ), 6e4)
                }
                ));
                return {
                    promise: Promise.race([a, r]),
                    unsubscribe: function() {
                        return n && n()
                    }
                }
            }
              , Yr = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    var a, r, s, i, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 1,
                                a = Hr(t, n),
                                r = a.promise,
                                s = a.unsubscribe,
                                e.next = 5,
                                r;
                            case 5:
                                return i = e.sent,
                                o = s,
                                s(),
                                S({
                                    source: "app"
                                }),
                                e.abrupt("return", [i, o]);
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && X.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
                                    e: e.t0
                                });
                            case 15:
                                return e.abrupt("return", null);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 12]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
            const Kr = "ViewWalletButton_button__WbNMO"
              , Xr = "ViewWalletButton_btnIcon__W5IFc";
            var zr = function() {
                var e = Ke()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , r = (0,
                d.useOKXTonConnectUI)()
                  , s = (0,
                u.Z)(r, 1)[0]
                  , i = I().uid
                  , o = (0,
                a.useRef)((function() {}
                ));
                (0,
                a.useEffect)((function() {
                    return function() {
                        o.current && o.current()
                    }
                }
                ), []);
                var _ = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var a, r, l, d, _, p, m, f, x, h, v, g, j, N;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.tonAddress) {
                                        e.next = 7;
                                        break
                                    }
                                    d = $t(),
                                    _ = d.get(Ft),
                                    (p = _ === Wt.TgWallet ? "https://t.me/OKX_WALLET_BOT/start" : t.tonDeeplink || "") && (null === (a = window) || void 0 === a || null === (r = a.Telegram) || void 0 === r || null === (l = r.WebApp) || void 0 === l || l.openLink(p)),
                                    e.next = 32;
                                    break;
                                case 7:
                                    return e.prev = 7,
                                    e.next = 10,
                                    Yr(s, i);
                                case 10:
                                    if (!(m = e.sent)) {
                                        e.next = 25;
                                        break
                                    }
                                    return x = (0,
                                    u.Z)(m, 2),
                                    h = x[0],
                                    v = x[1],
                                    o.current = v,
                                    g = {
                                        id: 9,
                                        taskContext: JSON.stringify((0,
                                        k.Z)({
                                            telegramId: i
                                        }, h))
                                    },
                                    e.next = 17,
                                    Ie(g);
                                case 17:
                                    return e.next = 19,
                                    Promise.allSettled([Se(), n()]);
                                case 19:
                                    j = (null === (f = m[0]) || void 0 === f ? void 0 : f.appName) || "",
                                    N = $t(),
                                    j && N.set(Ft, j),
                                    J(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    e.next = 26;
                                    break;
                                case 25:
                                    throw new Error("signature failed");
                                case 26:
                                    e.next = 32;
                                    break;
                                case 28:
                                    e.prev = 28,
                                    e.t0 = e.catch(7),
                                    q(e.t0),
                                    console.error(e.t0);
                                case 32:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[7, 28]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , p = (0,
                Mr.Z)(_, {
                    wait: 500
                }).run;
                return (0,
                N.jsxs)("button", {
                    className: Kr,
                    type: "button",
                    onClick: p,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-wallet",
                        className: Xr
                    }), t.tonAddress ? Gr(t.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    Z.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Jr = function() {
                var e = I().uid;
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        O.act({
                            action: "OkxRacerLandingPage_Page_FullPage_View",
                            anchor: "OkxRacerLandingPage_Page_FullPage_View",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }({
                        telegramid: e
                    })
                }
                ), []),
                (0,
                N.jsxs)("div", {
                    className: fr,
                    children: [(0,
                    N.jsx)("div", {
                        className: vr,
                        children: (0,
                        N.jsx)(zr, {})
                    }), (0,
                    N.jsx)("div", {
                        className: gr,
                        children: (0,
                        N.jsx)(ea, {})
                    }), (0,
                    N.jsxs)("div", {
                        className: kr,
                        children: [(0,
                        N.jsx)("div", {
                            className: jr,
                            children: (0,
                            N.jsx)(Ur, {})
                        }), (0,
                        N.jsx)("div", {
                            className: Nr,
                            children: (0,
                            N.jsx)(mr, {})
                        }), (0,
                        N.jsx)(ha, {
                            className: Cr
                        })]
                    }), (0,
                    N.jsx)(In, {
                        className: wr
                    }), (0,
                    N.jsx)("p", {
                        className: hr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    N.jsx)(En, {
                        className: xr
                    }), (0,
                    N.jsx)(An, {}), (0,
                    N.jsx)(Br, {}), (0,
                    N.jsx)(Gt, {}), (0,
                    N.jsx)(pn, {})]
                })
            }
              , qr = function() {
                return (0,
                N.jsx)(on, {
                    children: (0,
                    N.jsx)(Jr, {})
                })
            }
              , Qr = n(55861)
              , $r = (n(1016),
            n(58338));
            const es = "PageTitle_title__IQ7TT";
            var ts = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                N.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        $r.dU)(t)
                    },
                    className: y()(es, n)
                })
            };
            const ns = "LeaderBoard_container__0DJSO"
              , as = "LeaderBoard_desc__MFxC+"
              , rs = "LeaderBoard_inviteList__mV9a7"
              , ss = "LeaderBoard_tabActiveClassName__7Xv4B"
              , is = "LeaderBoard_tabsContent__KCGtW"
              , os = "LeaderBoard_recordButton__lXzAl"
              , cs = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var ls = function(e) {
                var t = e.className;
                return (0,
                N.jsx)("div", {
                    className: y()(cs, t)
                })
            };
            const us = "InviteButton_invite-btn__aAMio"
              , ds = "InviteButton_btn-a__At-wO"
              , _s = "InviteButton_btn-container__sYDy5"
              , ps = "InviteButton_copyButton__znucI"
              , ms = "InviteButton_copyIcon__QZgE9";
            var fs = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = I().uid
                  , s = function(e) {
                    var t = new K.Z
                      , n = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(Rt.BOT_NAME, "/").concat(Rt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(n)
                    }
                }(Ke().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                N.jsxs)("div", {
                    className: y()(a, _s),
                    children: [(0,
                    N.jsx)("a", {
                        className: ds,
                        href: i,
                        children: (0,
                        N.jsx)(at, {
                            onClick: function() {
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    O.act({
                                        action: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                        anchor: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                        params: {
                                            telegramid: e
                                        },
                                        actionType: "",
                                        elementType: "",
                                        ampProject: "okx"
                                    })
                                }({
                                    telegramid: r
                                })
                            },
                            className: us,
                            text: n
                        })
                    }), (0,
                    N.jsx)(H.default, {
                        strictCircle: !0,
                        category: H.default.CATEGORY.fill,
                        type: H.default.TYPE.primary,
                        size: H.default.SIZE.lg,
                        onClick: function() {
                            try {
                                navigator.clipboard.writeText(o),
                                J(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                J(!1, "Copy Invite URL failed")
                            }
                        },
                        className: ps,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-copy",
                            className: ms
                        })
                    })]
                })
            };
            const xs = "RankList_listItem__qJvXJ"
              , hs = "RankList_name__sxTWa"
              , vs = "RankList_mask__ldBi8"
              , gs = "RankList_hightLightRow__xYkeg"
              , ks = "RankList_listHeader__KVGnw"
              , js = "RankList_rank__k2m5R"
              , Ns = "RankList_icon__1-SRV"
              , Cs = "RankList_point__D5mVw"
              , ws = "RankList_pointIcon__k80Wy"
              , bs = "RankList_InviteButton__D6ute"
              , ys = "RankList_noFirendsNote__Ckkil"
              , Zs = "RankList_under__MJ5We"
              , Ps = "RankList_rankItemPlaceholder__z-upW"
              , Ts = "RankList_rank-name__YEqnc"
              , Os = "RankList_rank-score__gtI+m";
            var Ss = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Es = 1
              , Bs = 2
              , Is = function(e) {
                var t = e.total;
                return (0,
                N.jsxs)("div", {
                    className: ks,
                    children: [(0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            mn.uf)(t)
                        })
                    }), (0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Ls = function() {
                return (0,
                N.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        N.jsxs)("div", {
                            className: Ps,
                            children: [(0,
                            N.jsx)(ls, {
                                className: Ts
                            }), (0,
                            N.jsx)(ls, {
                                className: Os
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , Rs = function(e) {
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                N.jsxs)("div", {
                    className: y()(xs, n && gs),
                    children: [(0,
                    N.jsx)("div", {
                        className: vs
                    }), t.rank <= 3 ? (0,
                    N.jsx)("span", {
                        className: y()(js, Ns),
                        children: Ss[t.rank]
                    }) : (0,
                    N.jsx)("span", {
                        className: js,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    N.jsx)("div", {
                        className: hs,
                        children: t.extUserName
                    }), (0,
                    N.jsxs)("div", {
                        className: Cs,
                        children: [(0,
                        N.jsx)("span", {
                            className: ws,
                            children: Ss[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            mn.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , As = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? Es : t
                  , r = (0,
                a.useState)(!0)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)([])
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , f = (0,
                a.useState)(0)
                  , x = (0,
                u.Z)(f, 2)
                  , h = x[0]
                  , v = x[1]
                  , g = (0,
                a.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , C = k[1]
                  , w = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var a, r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        pageNo: t
                                    },
                                    n !== Es) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Pe(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Te(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (r = e.t0) && r.rows && (m(r.rows),
                                    v(r.total),
                                    C(r.userRanking)),
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t1 = e.catch(0),
                                    e.t1;
                                case 18:
                                    o(!1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 15]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [n])
                  , b = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                a.useEffect)((function() {
                    w(1)
                }
                ), [w]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(Is, {
                        total: h
                    }), i ? (0,
                    N.jsx)(Ls, {}) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [b && (0,
                        N.jsx)(Rs, {
                            item: j,
                            isHighlight: !0
                        }), p.map((function(e, t) {
                            return (0,
                            N.jsx)(Rs, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    N.jsx)("div", {
                        className: Zs
                    }), n === Es && (0,
                    N.jsxs)(N.Fragment, {
                        children: [1 === p.length && (0,
                        N.jsx)("div", {
                            className: ys,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === p.length && (0,
                        N.jsx)(fs, {
                            className: bs,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            };
            const Ds = "ViewRecordsButton_button__foNmQ"
              , Fs = "ViewRecordsButton_btnIcon__2U0Xs"
              , Ws = "ViewRecordsButton_title__XwRxi"
              , Us = "ViewRecordsButton_container__KMBl3"
              , Ms = "ViewRecordsButton_recordContainer__H0HG0"
              , Gs = "ViewRecordsButton_recordField__ntg1u"
              , Vs = "ViewRecordsButton_label__VInMo"
              , Hs = "ViewRecordsButton_value__YdAbG"
              , Ys = "ViewRecordsButton_trendIcon__OAhpt"
              , Ks = "ViewRecordsButton_up__lVPFv"
              , Xs = "ViewRecordsButton_down__z9X8U"
              , zs = "ViewRecordsButton_timestamp__1KFJL"
              , Js = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , qs = "ViewRecordsButton_description__2QLs8";
            var Qs = function(e) {
                var t = e.label
                  , n = e.value;
                return (0,
                N.jsxs)("div", {
                    className: Gs,
                    children: [(0,
                    N.jsx)("p", {
                        className: Vs,
                        children: t
                    }), (0,
                    N.jsx)("div", {
                        className: Hs,
                        children: n
                    })]
                })
            }
              , $s = function() {
                return (0,
                N.jsxs)("button", {
                    className: Ds,
                    type: "button",
                    onClick: function() {
                        var e = $t().get(en) || []
                          , t = (0,
                        N.jsx)(N.Fragment, {
                            children: e.length > 0 ? e.map((function(e) {
                                var t = 1 === e.predict
                                  , n = "ok_game_okxracer_moon"
                                  , a = Ks
                                  , r = "okx-growth-trending-up";
                                return t || (n = "ok_game_okxracer_doom",
                                a = Xs,
                                r = "okx-growth-trending-down"),
                                (0,
                                N.jsxs)("div", {
                                    className: Ms,
                                    children: [(0,
                                    N.jsx)(Qs, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_your_guess"),
                                        value: (0,
                                        N.jsxs)(N.Fragment, {
                                            children: [(0,
                                            Z.O4)(n), (0,
                                            N.jsx)(P.Z, {
                                                className: y()(Ys, a),
                                                iconName: r
                                            })]
                                        })
                                    }), (0,
                                    N.jsx)(Qs, {
                                        label: "Result",
                                        value: (0,
                                        Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                    }), (0,
                                    N.jsx)(Qs, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_consecutive_wins"),
                                        value: e.curCombo
                                    }), (0,
                                    N.jsx)("p", {
                                        className: zs,
                                        children: (0,
                                        mn.o0)(new Date(e.date), {
                                            format: "yyyyMMMdhhmmss"
                                        })
                                    })]
                                }, e.date)
                            }
                            )) : (0,
                            N.jsxs)("div", {
                                className: Js,
                                children: [(0,
                                N.jsx)("p", {
                                    className: Ws,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_racing_record")
                                }), (0,
                                N.jsx)("p", {
                                    className: qs,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_past_activity")
                                })]
                            })
                        });
                        $e({
                            title: (0,
                            N.jsx)("span", {
                                className: Ws,
                                children: (0,
                                Z.O4)("ok_game_okxracer_racing_records")
                            }),
                            titleCenter: !0,
                            containerClassName: Us,
                            children: t
                        })
                    },
                    children: [(0,
                    Z.O4)("ok_game_okxracer_my_records"), (0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-chevrons",
                        className: Fs
                    })]
                })
            }
              , ei = function() {
                return (0,
                N.jsxs)("div", {
                    className: ns,
                    children: [(0,
                    N.jsx)(ts, {
                        html: (0,
                        Z.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            Z.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: as,
                        children: (0,
                        Z.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    N.jsx)("div", {
                        className: os,
                        children: (0,
                        N.jsx)($s, {})
                    }), (0,
                    N.jsxs)(Qr.Z, {
                        activeClassName: ss,
                        noPadding: !0,
                        size: Qr.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        N.jsx)(Qr.Z.TabPane, {
                            tab: (0,
                            Z.O4)("ok_game_okxracer_friends2"),
                            id: Es,
                            className: is,
                            children: (0,
                            N.jsx)("div", {
                                className: rs,
                                children: (0,
                                N.jsx)(As, {
                                    pageType: Es
                                })
                            })
                        }), (0,
                        N.jsx)(Qr.Z.TabPane, {
                            className: is,
                            tab: (0,
                            Z.O4)("ok_game_okxracer_global"),
                            id: Bs,
                            children: (0,
                            N.jsx)("div", {
                                className: rs,
                                children: (0,
                                N.jsx)(As, {
                                    pageType: Bs
                                })
                            })
                        })]
                    })]
                })
            };
            const ti = "index_page__-xiuX"
              , ni = "index_entering__yddHy";
            var ai = function(e) {
                var t = e.children
                  , n = e.animationPath
                  , r = (0,
                s.useLocation)()
                  , i = (0,
                a.useState)(r)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1]
                  , d = (0,
                a.useState)("")
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , f = function() {
                    return m(ni),
                    setTimeout((function() {
                        m("")
                    }
                    ), 200)
                };
                return (0,
                a.useEffect)((function() {
                    var e = null;
                    return n ? n.includes(r.pathname) && (e = f()) : e = f(),
                    l(r),
                    function() {
                        e && clearTimeout(e)
                    }
                }
                ), [n, r]),
                (0,
                N.jsx)("div", {
                    className: y()(ti, p),
                    children: (0,
                    N.jsx)(s.Switch, {
                        location: c,
                        children: t
                    })
                })
            }
              , ri = n(74914)
              , si = n(59257);
            n(27235);
            const ii = "index_taskItemPlaceholder__6HYF9"
              , oi = "index_task__wcySb";
            var ci = function() {
                return (0,
                N.jsx)(N.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        N.jsx)("div", {
                            className: y()(ii),
                            children: (0,
                            N.jsx)(ls, {
                                className: oi
                            })
                        }, t)
                    }
                    ))
                })
            }
              , li = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , r = e.onClick
                  , s = e.children
                  , i = e.className
                  , o = e.loading
                  , _ = e.custom
                  , p = (0,
                d.useOKXTonConnectUI)()
                  , m = (0,
                u.Z)(p, 1)[0]
                  , f = (0,
                a.useRef)((function() {}
                ))
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var a, s, i, o, l, d;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Yr(m, n);
                                case 3:
                                    if (!(a = e.sent)) {
                                        e.next = 14;
                                        break
                                    }
                                    if (s = (0,
                                    u.Z)(a, 2),
                                    i = s[0],
                                    o = s[1],
                                    f.current = o,
                                    e.t0 = r,
                                    !e.t0) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 11,
                                    r(t, JSON.stringify((0,
                                    k.Z)({
                                        telegramId: n
                                    }, i)), i.tonAddress);
                                case 11:
                                    e.t0 = e.sent;
                                case 12:
                                    e.t0 && (l = (null === i || void 0 === i ? void 0 : i.appName) || "",
                                    d = $t(),
                                    l && d.set(Ft, l));
                                case 14:
                                    e.next = 19;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t1 = e.catch(0),
                                    console.error(e.t1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 16]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsx)(N.Fragment, {
                    children: _ ? (0,
                    N.jsx)("div", {
                        onClick: x,
                        children: _
                    }) : (0,
                    N.jsx)(H.default, {
                        category: H.default.CATEGORY.fill,
                        type: H.default.TYPE.primary,
                        size: H.default.SIZE.lg,
                        className: i,
                        loading: o,
                        onClick: x,
                        children: s
                    })
                })
            }
              , ui = [Oe.WalletConnect]
              , di = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , _i = (0,
            a.createContext)({
                boosts: [],
                tasks: di,
                upgradeBoost: function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                doTask: function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                upDateOrDoTask: function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                partner: void 0,
                setSelectedPartner: function() {}
            })
              , pi = function() {
                return (0,
                a.useContext)(_i)
            }
              , mi = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(di)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)()
                  , f = (0,
                u.Z)(m, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = Ke().updateGameInfoFromServer
                  , g = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Se(!0), Be(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && p(null !== (n = a[1].value.data) && void 0 !== n ? n : di);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [])
                  , k = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var n;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Ee({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Se(), v()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    q(e.t0);
                                case 13:
                                    return e.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 10]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, r, s, i, o, l, d, _;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = {
                                        id: t
                                    },
                                    n && (a.taskContext = n),
                                    e.next = 5,
                                    Ie(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Be(), v()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : di,
                                    p(d),
                                    x && (_ = d.taskGroups.find((function(e) {
                                        return e.groupName === x.groupName
                                    }
                                    ))) && h(_)),
                                    e.abrupt("return", !0);
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(0),
                                    q(e.t0);
                                case 18:
                                    return e.abrupt("return", !1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 15]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , C = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, r, s, i, o, l, d, _;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = {
                                        id: t
                                    },
                                    n && (a.taskContext = n),
                                    e.next = 5,
                                    Le(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Be(), v()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : di,
                                    p(d),
                                    x && (_ = d.taskGroups.find((function(e) {
                                        return e.groupName === x.groupName
                                    }
                                    ))) && h(_)),
                                    e.abrupt("return", !0);
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(0),
                                    q(e.t0);
                                case 18:
                                    return e.abrupt("return", !1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 15]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , w = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = !1,
                                    t.state !== At.finished || !ui.includes(t.context.actionType)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    C(t.id, n);
                                case 4:
                                    a = e.sent;
                                case 5:
                                    if (t.state !== At.unfinished) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 8,
                                    j(t.id, n);
                                case 8:
                                    a = e.sent;
                                case 9:
                                    return e.abrupt("return", a);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                (0,
                a.useEffect)((function() {
                    g()
                }
                ), [g]);
                var b = (0,
                a.useCallback)((function(e) {
                    h(e)
                }
                ), []);
                return (0,
                N.jsx)(_i.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: j,
                        partner: x,
                        setSelectedPartner: b,
                        upDateOrDoTask: w
                    },
                    children: t
                })
            };
            const fi = "WalletTask_sheet-container__bz-jm"
              , xi = "WalletTask_sheet-name__xuyl9"
              , hi = "WalletTask_sheet-desc__snmOq"
              , vi = "WalletTask_sheeLogo__LcXBr"
              , gi = "WalletTask_sheeLogoCheck__4qpgw"
              , ki = "WalletTask_sheetCopyBox__vbEpV"
              , ji = "WalletTask_sheetCopyIcon__shZrx"
              , Ni = "WalletTask_btn__JBh79"
              , Ci = "WalletTask_btn-txt__qnE8C";
            var wi = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , bi = "/cdn/assets/imgs/249/014A8107B107466F.png"
              , yi = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , s = e.onClick
                  , i = e.customDesc
                  , d = (0,
                a.useRef)((function() {}
                ))
                  , _ = r().useState(!1)
                  , p = (0,
                u.Z)(_, 2)
                  , m = p[0]
                  , f = p[1];
                (0,
                a.useEffect)((function() {
                    return (null === t || void 0 === t ? void 0 : t.state) === At.finished ? O.act({
                        action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }) : O.act({
                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }),
                    function() {
                        d.current && d.current()
                    }
                }
                ), []);
                var x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var t, n = arguments;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = !1,
                                    f(!0),
                                    e.prev = 2,
                                    e.t0 = s,
                                    !e.t0) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7,
                                    s.apply(void 0, n);
                                case 7:
                                    e.t0 = e.sent;
                                case 8:
                                    t = e.t0,
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t1 = e.catch(2),
                                    console.error(e.t1);
                                case 14:
                                    return f(!1),
                                    e.abrupt("return", t);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 11]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsx)(N.Fragment, {
                    children: (null === t || void 0 === t ? void 0 : t.state) === At.finished && t.context.actionType === Oe.WalletConnect ? (0,
                    N.jsxs)("div", {
                        className: fi,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(bi),
                            className: vi
                        }), (0,
                        N.jsx)("div", {
                            className: xi,
                            children: t.context.nameFinished
                        }), (0,
                        N.jsxs)("div", {
                            className: ki,
                            children: [(0,
                            N.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", ji),
                                onClick: function() {
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === Oe.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
                                        J(!0, (0,
                                        Z.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        J(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        N.jsx)(li, {
                            selectedTask: t,
                            uid: n,
                            onClick: function() {
                                return x.apply(void 0, arguments)
                            },
                            className: Ni,
                            loading: m,
                            children: (0,
                            N.jsx)("div", {
                                className: Ci,
                                children: t.context.btnTextFinishedAndSwitch
                            })
                        })]
                    }) : (0,
                    N.jsxs)("div", {
                        className: fi,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(wi),
                            className: gi
                        }), (0,
                        N.jsx)("div", {
                            className: xi,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        N.jsx)("div", {
                            className: hi,
                            children: i || (null === t || void 0 === t ? void 0 : t.context.desc)
                        }), (0,
                        N.jsx)(li, {
                            selectedTask: t,
                            uid: n,
                            onClick: function() {
                                return x.apply(void 0, arguments)
                            },
                            className: Ni,
                            loading: m,
                            children: (0,
                            N.jsx)("div", {
                                className: Ci,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })
                })
            };
            const Zi = "WalletDepositTask_sheet-container__7+LUG"
              , Pi = "WalletDepositTask_sheet-name__RuWrl"
              , Ti = "WalletDepositTask_sheet-desc__S5hoQ"
              , Oi = "WalletDepositTask_sheeLogo__VPRz9"
              , Si = "WalletDepositTask_sheetCopyBox__FvPfk"
              , Ei = "WalletDepositTask_sheetCopyIcon__KeD4-"
              , Bi = "WalletDepositTask_sheetCloseIcon__TBSXg"
              , Ii = "WalletDepositTask_btn__kCKz2"
              , Li = "WalletDepositTask_depositBtn__TPPeH"
              , Ri = "WalletDepositTask_btn-txt__tvio1"
              , Ai = "WalletDepositTask_line__8r7ky";
            var Di = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Fi = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , s = e.taskList
                  , i = e.onClick
                  , d = Ke().context
                  , _ = pi().upDateOrDoTask
                  , p = r().useState("")
                  , m = (0,
                u.Z)(p, 2)
                  , f = m[0]
                  , x = m[1]
                  , h = (0,
                a.useRef)((function() {}
                ));
                (0,
                a.useEffect)((function() {
                    return x(d.tonAddress || ""),
                    function() {
                        h.current && h.current()
                    }
                }
                ), []);
                var v = (0,
                a.useMemo)((function() {
                    return s.find((function(e) {
                        var t;
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === Oe.WalletConnect
                    }
                    ))
                }
                ), [s])
                  , g = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n, a) {
                        var r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    _(t, n);
                                case 2:
                                    return (r = e.sent) && (x(a || ""),
                                    J(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg"))),
                                    e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsx)(N.Fragment, {
                    children: (null === v || void 0 === v ? void 0 : v.state) === At.unfinished && (null === t || void 0 === t ? void 0 : t.context.actionType) === Oe.WalletDepositConnect ? (0,
                    N.jsx)(yi, {
                        selectedTask: v,
                        onClick: function() {
                            var e = (0,
                            l.Z)((0,
                            c.Z)().mark((function e(t, n, a) {
                                return (0,
                                c.Z)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", g(t, n, a));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        customDesc: null === t || void 0 === t ? void 0 : t.context.walletDepositDesc,
                        uid: n
                    }) : (null === t || void 0 === t ? void 0 : t.context.actionType) === Oe.WalletDepositConnect && (0,
                    N.jsxs)("div", {
                        className: Zi,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Di),
                            className: Oi
                        }), (0,
                        N.jsx)("div", {
                            className: Pi,
                            children: null === t || void 0 === t ? void 0 : t.context.connectedTitle
                        }), (0,
                        N.jsx)("div", {
                            className: Ti,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        N.jsxs)("div", {
                            className: Si,
                            children: [(0,
                            N.jsx)("div", {
                                children: f
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", Ei),
                                onClick: function() {
                                    try {
                                        navigator.clipboard.writeText(f || ""),
                                        J(!0, (0,
                                        Z.O4)("ok_game_okxracer_copied_url"))
                                    } catch (e) {
                                        J(!1, "Copy Invite URL failed")
                                    }
                                }
                            }), (0,
                            N.jsx)("span", {
                                className: Ai
                            }), (0,
                            N.jsx)(li, {
                                selectedTask: v,
                                uid: n,
                                onClick: function() {
                                    var e = (0,
                                    l.Z)((0,
                                    c.Z)().mark((function e(t, n, a) {
                                        return (0,
                                        c.Z)().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.abrupt("return", g(t, n, a));
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, n, a) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                custom: (0,
                                N.jsx)(P.Z, {
                                    className: y()("okds-close", Bi)
                                })
                            })]
                        }), (0,
                        N.jsx)(H.default, {
                            category: H.default.CATEGORY.fill,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.lg,
                            className: Li,
                            onClick: function() {
                                i(t)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Ri,
                                children: null === t || void 0 === t ? void 0 : t.context.verifyBtnText
                            })
                        }), (0,
                        N.jsx)(H.default, {
                            category: H.default.CATEGORY.outline,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.lg,
                            className: Ii,
                            onClick: function() {
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(d.tonDeeplink)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Ri,
                                children: null === t || void 0 === t ? void 0 : t.context.depositBtnText
                            })
                        })]
                    })
                })
            };
            const Wi = "index_task-item__JdIYG"
              , Ui = "index_title__hYmAn"
              , Mi = "index_state__ddlCZ"
              , Gi = "index_item-left__BNG-l"
              , Vi = "index_item-right__V+4iT"
              , Hi = "index_icon__yk0cJ"
              , Yi = "index_done__h9mLm";
            var Ki = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context
                  , o = "";
                if (r) {
                    var c = (0,
                    mn.uf)(r, {
                        signDisplay: !0
                    })
                      , l = s === At.finished ? "\u2705" : "\ud83c\udfc1";
                    o = "".concat(l, " ").concat(c, " pts")
                }
                return (0,
                N.jsxs)("div", {
                    className: Wi,
                    onClick: function() {
                        n(a)
                    },
                    children: [(0,
                    N.jsxs)("div", {
                        className: Gi,
                        children: [(0,
                        N.jsx)("div", {
                            className: Ui,
                            children: i.name
                        }), o && (0,
                        N.jsx)("div", {
                            className: Mi,
                            children: o
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: Vi,
                        children: s === At.finished ? (0,
                        N.jsx)("div", {
                            className: Yi,
                            children: (0,
                            Z.O4)("ok_game_okxracer_done")
                        }) : (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", Hi)
                        })
                    })]
                }, a)
            };
            const Xi = "index_container__LfQHA"
              , zi = "index_sheet-container__7hIP5"
              , Ji = "index_sheet-name__+hUn6"
              , qi = "index_sheet-desc__Uh4Uk"
              , Qi = "index_btn__+6gr5";
            function $i(e) {
                var t = e.tasks
                  , n = e.className
                  , r = pi().upDateOrDoTask
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , d = i[1]
                  , _ = (0,
                a.useState)(!1)
                  , p = (0,
                u.Z)(_, 2)
                  , m = p[0]
                  , f = p[1]
                  , x = I().uid
                  , h = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, s, i, o, l, u;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = !1,
                                    !t) {
                                        e.next = 7;
                                        break
                                    }
                                    return t.context.actionType === Oe.OpenLink && t.context.redirectLink && ((s = t.context.redirectLink).startsWith("https://t.me") ? null === (i = window) || void 0 === i || null === (o = i.Telegram) || void 0 === o || o.WebApp.openTelegramLink(s) : null === (l = window) || void 0 === l || null === (u = l.Telegram) || void 0 === u || u.WebApp.openLink(s)),
                                    e.next = 5,
                                    r(t, n);
                                case 5:
                                    (a = e.sent) && J(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg"));
                                case 7:
                                    return f(!1),
                                    e.abrupt("return", a);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , v = (0,
                Mr.Z)((function(e) {
                    var n = (t || []).find((function(t) {
                        return (null === t || void 0 === t ? void 0 : t.id) === e
                    }
                    ));
                    if (n) {
                        var a = n.context.actionType
                          , r = n.state;
                        (null === n || void 0 === n ? void 0 : n.state) === At.finished && a !== Oe.WalletConnect && a !== Oe.OpenLink || (d(n),
                        f(!0),
                        a === Oe.WalletConnect && (r === At.finished ? O.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : O.act({
                            action: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })))
                    }
                }
                ), {
                    wait: 500,
                    leading: !0
                }).run
                  , g = (0,
                Mr.Z)(h, {
                    wait: 500,
                    leading: !0
                }).run
                  , k = (0,
                rt.Z)((0,
                rt.Z)({}, Oe.WalletConnect, (function() {
                    return (0,
                    N.jsx)(yi, {
                        selectedTask: o,
                        onClick: function(e, t) {
                            return g(e, t)
                        },
                        uid: x
                    })
                }
                )), Oe.WalletDepositConnect, (function() {
                    return (0,
                    N.jsx)(Fi, {
                        selectedTask: o,
                        taskList: t,
                        onClick: function(e) {
                            return g(e)
                        },
                        uid: x
                    })
                }
                ));
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        className: y()(Xi, n),
                        children: t.length > 0 ? t.map((function(e) {
                            return (0,
                            N.jsx)(Ki, {
                                task: e,
                                onClick: v
                            }, e.id)
                        }
                        )) : (0,
                        N.jsx)(ci, {})
                    }), o && (0,
                    N.jsx)(Qe, {
                        noContentPadding: !0,
                        visible: m,
                        onClose: function() {
                            d(void 0),
                            f(!1)
                        },
                        children: function() {
                            var e = k[o.context.actionType];
                            return e ? e() : function() {
                                var e = o.context
                                  , t = e.desc
                                  , n = e.btnText;
                                return (0,
                                N.jsxs)("div", {
                                    className: zi,
                                    children: [(0,
                                    N.jsx)("div", {
                                        className: Ji,
                                        children: e.name
                                    }), (0,
                                    N.jsx)("div", {
                                        className: qi,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            $r.dU)(t)
                                        }
                                    }), (0,
                                    N.jsx)(at, {
                                        className: Qi,
                                        onClick: function() {
                                            return g(o)
                                        },
                                        text: n
                                    })]
                                })
                            }()
                        }()
                    })]
                })
            }
            var eo = function() {
                var e = (0,
                s.useHistory)()
                  , t = e.replace
                  , n = e.goBack
                  , r = (0,
                s.useLocation)().hash;
                (0,
                a.useEffect)((function() {
                    var e, t, a;
                    return null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (a = t.BackButton) || void 0 === a || a.show().onClick(n),
                    function() {
                        var e, t, a;
                        null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (a = t.BackButton) || void 0 === a || a.hide().offClick(n)
                    }
                }
                ), [n, r, t])
            }
              , to = (0,
            a.createContext)({
                airdrops: [],
                selectedAirdrop: null,
                loading: !1,
                onSelectAirdrop: function() {}
            })
              , no = function() {
                return (0,
                a.useContext)(to)
            }
              , ao = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(null)
                  , c = (0,
                u.Z)(o, 2)
                  , l = c[0]
                  , d = c[1]
                  , _ = (0,
                a.useState)(!0)
                  , p = (0,
                u.Z)(_, 2)
                  , m = p[0]
                  , f = p[1];
                (0,
                a.useEffect)((function() {
                    f(!0),
                    Fe(!0).then((function(e) {
                        var t = e.data;
                        i(t || [])
                    }
                    )).catch((function(e) {
                        X.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.message), e)
                    }
                    )).finally((function() {
                        f(!1)
                    }
                    ))
                }
                ), []);
                var x = function(e) {
                    d(e)
                }
                  , h = (0,
                a.useMemo)((function() {
                    return {
                        airdrops: s,
                        loading: m,
                        onSelectAirdrop: x,
                        selectedAirdrop: l
                    }
                }
                ), [l, s, m]);
                return (0,
                N.jsx)(to.Provider, {
                    value: h,
                    children: t
                })
            };
            const ro = {
                container: "index_container__Y851r",
                header: "index_header__4gppM",
                title: "index_title__b+GpQ",
                desc: "index_desc__pU2jR",
                surpriseTitle: "index_surpriseTitle__Uqc-L",
                tasks: "index_tasks__k8-lb",
                taskListHeader: "index_taskListHeader__0FpaY"
            };
            var so = function() {
                var e = no().selectedAirdrop
                  , t = (0,
                s.useHistory)().replace
                  , n = (0,
                s.useLocation)().hash;
                if (eo(),
                (0,
                a.useEffect)((function() {
                    e || t(D + n)
                }
                ), [n, e, t]),
                !e)
                    return null;
                var r = e.tasks
                  , i = e.logo
                  , c = e.groupTitle
                  , l = e.groupDesc
                  , u = e.surprise;
                return (0,
                N.jsxs)("div", {
                    className: ro.container,
                    children: [(0,
                    N.jsxs)("div", {
                        className: ro.header,
                        children: [(0,
                        N.jsx)(ri.Z, {
                            size: si.Z.sm,
                            className: ro.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(i)
                        }), (0,
                        N.jsx)("h1", {
                            className: ro.title,
                            children: c
                        })]
                    }), (0,
                    N.jsx)("p", {
                        className: ro.desc,
                        children: l
                    }), (0,
                    N.jsx)("div", {
                        className: ro.surpriseTitle,
                        children: (0,
                        Z.O4)("ok_game_okxracer_label_surprises_details")
                    }), (0,
                    N.jsx)("p", {
                        className: ro.desc,
                        children: u
                    }), (0,
                    N.jsxs)("div", {
                        className: ro.tasks,
                        children: [(0,
                        N.jsx)("div", {
                            className: ro.taskListHeader,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_tasks")
                        }), (0,
                        N.jsx)($i, {
                            tasks: r
                        })]
                    })]
                })
            };
            const io = "index_airdropItem__pV1Az"
              , oo = "index_content__ZtejP"
              , co = "index_airdropIcon__lZwMy"
              , lo = "index_airdropIconLoading__S1N9H"
              , uo = "index_title__19JPa"
              , _o = "index_desc__ekknt"
              , po = "index_arrow__Y8OCn"
              , mo = "index_airdropItemPlaceholder__bL5jl";
            var fo = function(e) {
                var t = e.airdrop
                  , n = e.onClick
                  , a = t.logo
                  , r = t.groupSubTitle
                  , s = t.groupTitle;
                return (0,
                N.jsxs)("div", {
                    className: io,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    N.jsxs)("div", {
                        className: oo,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            className: co,
                            src: "".concat(o.Z.cdnBaseUrl).concat(a)
                        }), (0,
                        N.jsx)("div", {
                            className: uo,
                            children: s
                        }), (0,
                        N.jsx)("div", {
                            className: _o,
                            children: r
                        })]
                    }), (0,
                    N.jsx)(P.Z, {
                        className: y()("okds-arrow-chevron-right-centered-sm", po)
                    })]
                })
            }
              , xo = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(io, mo),
                    children: [(0,
                    N.jsx)(ls, {
                        className: lo
                    }), (0,
                    N.jsx)(ls, {
                        className: uo
                    }), (0,
                    N.jsx)(ls, {
                        className: _o
                    })]
                })
            }
              , ho = {
                signupLink: "/join",
                downloadLink: "/download?redirectAppStore=true",
                bindTgLink: "https://www.okx.com/ul/3h87sZ",
                verifyKycLink: "https://www.okx.com/ul/3W2uzP",
                totalVerifiedCount: 0,
                isConnectTelegram: !1,
                isKyc: !1,
                joinedDate: 0,
                gradeCategories: [],
                pointGradeName: "",
                totalEarnedPoints: 0
            }
              , vo = (0,
            a.createContext)({
                accountBindingInfo: ho,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , go = function() {
                return (0,
                a.useContext)(vo)
            }
              , ko = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(ho)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = Boolean((null === s || void 0 === s ? void 0 : s.isConnectTelegram) && (null === s || void 0 === s ? void 0 : s.isKyc))
                  , f = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 1 ? r[1] : void 0,
                                n = {
                                    isRecheckBinding: r.length > 0 && void 0 !== r[0] && r[0]
                                },
                                e.next = 5,
                                Ae(t, n);
                            case 5:
                                return a = e.sent,
                                p(!1),
                                a && i(a),
                                e.abrupt("return", a);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), []);
                (0,
                a.useEffect)((function() {
                    f(!1, !0)
                }
                ), [f]);
                var x = (0,
                a.useMemo)((function() {
                    return {
                        accountBindingInfo: s,
                        isLoading: _,
                        getAccountBindingInfo: f,
                        isCertified: m
                    }
                }
                ), [s, f, m, _]);
                return (0,
                N.jsx)(vo.Provider, {
                    value: x,
                    children: t
                })
            };
            const jo = "index_offsetMarginContainer__2NtPr"
              , No = "index_title__+65IJ"
              , Co = "index_count__F-PWh"
              , wo = "index_airdropContainer__Gun3r"
              , bo = "index_paddingPlaceholder__X2M3o";
            var yo = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = no()
                  , a = n.airdrops
                  , r = n.onSelectAirdrop
                  , i = n.loading
                  , o = go().isCertified
                  , c = (0,
                s.useHistory)()
                  , l = (0,
                s.useLocation)()
                  , u = function(e) {
                    o ? (r(e),
                    c.push({
                        pathname: G,
                        hash: l.hash
                    })) : t()
                }
                  , d = a.length;
                return i || 0 !== d ? (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("p", {
                        className: No,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_label_airdrop_surprises"), "\xa0", (0,
                        N.jsxs)("span", {
                            className: Co,
                            children: ["(", d, ")"]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: y()((0,
                        rt.Z)({}, jo, d > 1)),
                        children: (0,
                        N.jsxs)("div", {
                            className: wo,
                            children: [i ? (0,
                            N.jsxs)(N.Fragment, {
                                children: [(0,
                                N.jsx)(xo, {}), (0,
                                N.jsx)(xo, {}), (0,
                                N.jsx)(xo, {})]
                            }) : (0,
                            N.jsx)(N.Fragment, {
                                children: a.map((function(e) {
                                    return (0,
                                    N.jsx)(fo, {
                                        airdrop: e,
                                        onClick: u
                                    }, e.groupId)
                                }
                                ))
                            }), d > 1 ? (0,
                            N.jsx)("div", {
                                className: bo
                            }) : null]
                        })
                    })]
                }) : null
            }
              , Zo = (0,
            a.createContext)({
                campaigns: [],
                loading: !1,
                openCampaignPage: function() {}
            })
              , Po = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , p = d[1];
                (0,
                a.useEffect)((function() {
                    p(!0);
                    var e = function() {
                        var e = (0,
                        l.Z)((0,
                        c.Z)().mark((function e() {
                            var t;
                            return (0,
                            c.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        De(!0);
                                    case 3:
                                        (t = e.sent) && i(t),
                                        e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7,
                                        e.t0 = e.catch(0);
                                    case 9:
                                        return e.prev = 9,
                                        p(!1),
                                        e.finish(9);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 7, 9, 12]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }
                ), []);
                var m = function(e) {
                    var t, n;
                    null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e.webUrl)
                }
                  , f = (0,
                a.useMemo)((function() {
                    return {
                        campaigns: s,
                        loading: _,
                        openCampaignPage: m
                    }
                }
                ), [s, _]);
                return (0,
                N.jsx)(Zo.Provider, {
                    value: f,
                    children: t
                })
            }
              , To = n(32267);
            n(82890);
            const Oo = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , So = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var Eo = function(e) {
                var t = e.className;
                return (0,
                N.jsxs)("span", {
                    className: y()(Oo, t),
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okds-clock",
                        className: So
                    }), (0,
                    Z.O4)("ok_game_okxracer_tag_phase421_ended")]
                })
            };
            const Bo = "CampaignCard_cardContainer__3yu81"
              , Io = "CampaignCard_dateRange__hvYLA"
              , Lo = "CampaignCard_campaignEndedIndicator__6J91S"
              , Ro = "CampaignCard_card__cYF8Y"
              , Ao = "CampaignCard_campaignImg__YpUgC"
              , Do = "CampaignCard_round__MMyT5"
              , Fo = "CampaignCard_content__1ZjVu"
              , Wo = "CampaignCard_name__mfl60"
              , Uo = "CampaignCard_desc__klZyx"
              , Mo = "CampaignCard_points__jIZar"
              , Go = "CampaignCard_btn__v8gu9"
              , Vo = "CampaignCard_btnContent__-5uC9";
            var Ho = function(e) {
                var t = e.campaign
                  , n = e.btnText
                  , a = e.onClick
                  , r = e.roundLogo
                  , s = void 0 === r || r
                  , i = t.logo
                  , c = t.title
                  , l = t.subTitle
                  , u = t.points;
                return (0,
                N.jsxs)("li", {
                    className: Bo,
                    children: [t.endDate && t.startDate ? t.status === Re.Ended ? (0,
                    N.jsx)(Eo, {
                        className: Lo
                    }) : (0,
                    N.jsxs)("span", {
                        className: Io,
                        children: [(0,
                        mn.o0)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        mn.o0)(new Date(t.endDate))]
                    }) : null, (0,
                    N.jsxs)("div", {
                        className: Ro,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(i),
                            pictureClassName: Ao,
                            className: y()(Ao, (0,
                            rt.Z)({}, Do, s))
                        }), (0,
                        N.jsxs)("div", {
                            className: Fo,
                            children: [(0,
                            N.jsx)("p", {
                                className: Wo,
                                children: c
                            }), (0,
                            N.jsx)("p", {
                                className: Uo,
                                children: l
                            }), u && (0,
                            N.jsx)("p", {
                                className: Mo,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    mn.uf)(u))
                                })
                            }), (0,
                            N.jsx)(H.default, {
                                type: H.default.TYPE.default,
                                category: H.default.CATEGORY.outline,
                                size: H.default.SIZE.s,
                                className: Go,
                                contentClassName: Vo,
                                onClick: a,
                                children: n
                            })]
                        })]
                    })]
                })
            };
            const Yo = {
                description: "Campaigns_description__Q6-cw",
                title: "Campaigns_title__a2IwB",
                count: "Campaigns_count__LxNZj",
                loaderContainer: "Campaigns_loaderContainer__tSglx",
                list: "Campaigns_list__y6Ye0",
                noCampaigns: "Campaigns_noCampaigns__faP1c",
                desc: "Campaigns_desc__q+hH9",
                campaignBottomSheet: "Campaigns_campaignBottomSheet__fMNLC",
                dateRange: "Campaigns_dateRange__AqH5L",
                subTitle: "Campaigns_subTitle__HyltI",
                divider: "Campaigns_divider__QdOyR",
                points: "Campaigns_points__Vrw3k",
                button: "Campaigns_button__nWE3x",
                termsAndConditions: "Campaigns_termsAndConditions__RfsOE"
            };
            var Ko = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = go().isCertified
                  , r = (0,
                a.useContext)(Zo)
                  , s = r.campaigns
                  , i = r.loading
                  , o = r.openCampaignPage;
                var c = n ? (0,
                N.jsx)(To.Z.State, {
                    type: To.Z.State.TYPE.noRecord,
                    className: Yo.noCampaigns,
                    title: (0,
                    Z.O4)("ok_game_okxracer_title_phase421_no_campaigns"),
                    description: (0,
                    N.jsx)("p", {
                        className: Yo.desc,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase421_stay_tuned")
                    })
                }) : (0,
                N.jsx)(Ho, {
                    roundLogo: !1,
                    campaign: {
                        logo: "/cdn/assets/imgs/249/D290EBECC9921075.png",
                        title: (0,
                        Z.O4)("ok_game_okxracer_title_phase421_exciting_camp"),
                        subTitle: (0,
                        Z.O4)("ok_game_okxracer_text_phase421_verify_identity")
                    },
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase421_verify"),
                    onClick: t
                })
                  , l = n || s.length > 0;
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("p", {
                        className: Yo.title,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", l && (0,
                        N.jsxs)("span", {
                            className: Yo.count,
                            children: ["(", s.length, ")"]
                        })]
                    }), i && (0,
                    N.jsx)("div", {
                        className: Yo.loaderContainer,
                        children: (0,
                        N.jsx)(Na.Z, {})
                    }), !i && 0 === s.length && c, (0,
                    N.jsx)("ul", {
                        className: Yo.list,
                        children: s.map((function(e) {
                            return (0,
                            N.jsx)(Ho, {
                                campaign: e,
                                btnText: (0,
                                Z.O4)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    n ? function(e) {
                                        $e({
                                            children: (0,
                                            N.jsxs)("div", {
                                                className: Yo.campaignBottomSheet,
                                                children: [e.status === Re.Ended ? (0,
                                                N.jsx)("span", {
                                                    className: Yo.dateRange,
                                                    children: (0,
                                                    N.jsx)(Eo, {
                                                        className: Yo.campaignEndedIndicator
                                                    })
                                                }) : (0,
                                                N.jsxs)("span", {
                                                    className: Yo.dateRange,
                                                    children: [(0,
                                                    mn.o0)(new Date(e.startDate)), "\xa0-\xa0", (0,
                                                    mn.o0)(new Date(e.endDate))]
                                                }), (0,
                                                N.jsx)("p", {
                                                    className: Yo.subTitle,
                                                    children: e.title
                                                }), (0,
                                                N.jsx)("p", {
                                                    className: Yo.desc,
                                                    children: e.description
                                                }), (0,
                                                N.jsx)("hr", {
                                                    className: Yo.divider
                                                }), (0,
                                                N.jsx)("p", {
                                                    className: Yo.points,
                                                    children: e.pointDescription
                                                }), (0,
                                                N.jsx)(at, {
                                                    className: Yo.button,
                                                    onClick: function() {
                                                        o(e)
                                                    },
                                                    text: (0,
                                                    Z.O4)("ok_game_okxracer_btn_phase421_go_campaign")
                                                })]
                                            })
                                        })
                                    }(e) : t()
                                }
                            }, e.startDate)
                        }
                        ))
                    }), !n && (0,
                    N.jsx)(In, {
                        className: Yo.termsAndConditions
                    })]
                })
            }
              , Xo = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , zo = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function Jo(e) {
                var t = {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Xo.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_verify")
                }
                  , n = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Xo.SIGNUP,
                    status: zo(Xo.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Xo.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var qo = function(e) {
                var t = (0,
                a.useState)(Jo(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = I().uid;
                (0,
                a.useEffect)((function() {
                    s(Jo(e))
                }
                ), [e]);
                var o = (0,
                a.useCallback)((function(t) {
                    var n, a, o = r.find((function(e) {
                        return e.type === t
                    }
                    ));
                    if (o) {
                        switch (null === (n = window) || void 0 === n || null === (a = n.Telegram) || void 0 === a || a.WebApp.openLink(o.url),
                        t) {
                        case Xo.SIGNUP:
                        case Xo.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(Jo(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case Xo.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OKXRacerSurprisesPage_Page_Signup_View",
                                    anchor: "OKXRacerSurprisesPage_Page_Signup_View",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l);
                            break;
                        case Xo.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                    anchor: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l);
                            break;
                        case Xo.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                    anchor: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l);
                            break;
                        case Xo.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                O.act({
                                    action: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                    anchor: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l)
                        }
                    }
                }
                ), [r, e]);
                return {
                    list: r,
                    handleClick: o
                }
            };
            const Qo = "CertifyBottomSheet_certifySteps__-zWCO"
              , $o = "CertifyBottomSheet_taskList__uK656"
              , ec = "CertifyBottomSheet_task__iLWrC"
              , tc = "CertifyBottomSheet_details__YoXf3"
              , nc = "CertifyBottomSheet_title__X1Tnl"
              , ac = "CertifyBottomSheet_subTitle__EzVrR"
              , rc = "CertifyBottomSheet_btn__JLhoo"
              , sc = "CertifyBottomSheet_btnContent__wrzU-"
              , ic = "CertifyBottomSheet_verifyBtn__lYfYD";
            var oc = ["getAccountBindingInfo"]
              , cc = function(e) {
                var t = e.getAccountBindingInfo
                  , n = (0,
                w.Z)(e, oc)
                  , a = I().uid
                  , r = go().accountBindingInfo
                  , s = qo(r)
                  , i = s.list
                  , o = s.handleClick;
                return (0,
                N.jsx)(Qe, (0,
                k.Z)((0,
                k.Z)({}, n), {}, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: Qo,
                    children: (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("ul", {
                            className: $o,
                            children: i.map((function(e) {
                                return (0,
                                N.jsxs)("li", {
                                    className: ec,
                                    children: [(0,
                                    N.jsxs)("div", {
                                        className: tc,
                                        children: [(0,
                                        N.jsx)("p", {
                                            className: nc,
                                            children: e.title
                                        }), (0,
                                        N.jsx)("p", {
                                            className: ac,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    N.jsx)(at, {
                                        text: e.btnText,
                                        size: H.default.SIZE.xs,
                                        className: rc,
                                        contentClassName: sc,
                                        onClick: function() {
                                            o(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        N.jsx)(at, {
                            className: ic,
                            onClick: function() {
                                t(!0),
                                function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    O.act({
                                        action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                                        anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                                        params: {
                                            telegramid: e
                                        },
                                        actionType: "",
                                        elementType: "",
                                        ampProject: "okx"
                                    })
                                }({
                                    telegramid: a
                                })
                            },
                            text: (0,
                            Z.O4)("ok_game_okxracer_surprises_verify")
                        })]
                    })
                }))
            }
              , lc = function() {
                var e = go().accountBindingInfo || {}
                  , t = e.gradeCategories
                  , n = e.pointGradeName
                  , r = void 0 === n ? "" : n
                  , s = e.totalEarnedPoints
                  , i = void 0 === s ? 0 : s
                  , o = (0,
                a.useMemo)((function() {
                    return !t || t.length <= 0 ? 0 : t.findIndex((function(e) {
                        return e.pointGradeName == r
                    }
                    ))
                }
                ), [t, r]);
                return {
                    currentGradeIndex: o,
                    currentGrade: null === t || void 0 === t ? void 0 : t[o],
                    gradeCategories: t,
                    pointGradeName: r,
                    totalEarnedPoints: i
                }
            };
            const uc = {
                container: "Grades_container__d1oD4",
                cardBox: "Grades_cardBox__Z4YxU",
                content: "Grades_content__7jPV6",
                levelLogoBox: "Grades_levelLogoBox__6C4-+",
                levelLogo: "Grades_levelLogo__tIzPj",
                logoGrade: "Grades_logoGrade__IwsIy",
                switchBtn: "Grades_switchBtn__dYdo9",
                leftBtn: "Grades_leftBtn__exu0N",
                rightBtn: "Grades_rightBtn__0NWwR",
                currentGrade: "Grades_currentGrade__b0mob",
                gradeTitle: "Grades_gradeTitle__BC-VS",
                progressNum: "Grades_progressNum__wvm2X",
                progressSlide: "Grades_progressSlide__s3h-u",
                progress: "Grades_progress__WuMkb",
                "fade-in": "Grades_fade-in__itExd",
                fadeIn: "Grades_fade-in__itExd",
                "fade-out": "Grades_fade-out__L3IX9",
                fadeOut: "Grades_fade-out__L3IX9"
            };
            var dc = function() {
                var e = lc()
                  , t = e.currentGradeIndex
                  , n = e.currentGrade
                  , r = e.gradeCategories
                  , s = e.pointGradeName
                  , i = e.totalEarnedPoints
                  , c = (0,
                a.useState)(0)
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1]
                  , p = (0,
                a.useState)(!0)
                  , m = (0,
                u.Z)(p, 2)
                  , f = m[0]
                  , x = m[1];
                (0,
                a.useEffect)((function() {
                    if (r && !(r.length <= 0)) {
                        var e = r.map((function(e) {
                            return "".concat(o.Z.cdnBaseUrl).concat(null === e || void 0 === e ? void 0 : e.logo)
                        }
                        ));
                        e.forEach((function(e) {
                            (new Image).src = e
                        }
                        ))
                    }
                }
                ), [r]),
                eo(),
                (0,
                a.useEffect)((function() {
                    _(t)
                }
                ), [t]),
                (0,
                a.useEffect)((function() {
                    x(!0)
                }
                ), [d]);
                var h = (0,
                a.useMemo)((function() {
                    return !(!r || r.length <= 0) && (n && (null === n || void 0 === n ? void 0 : n.pointGradeName) === r[d].pointGradeName)
                }
                ), [r, s, d])
                  , v = (0,
                a.useMemo)((function() {
                    return r ? r[d] : null
                }
                ), [d, r])
                  , g = function(e) {
                    x(!1),
                    setTimeout((function() {
                        return _(e)
                    }
                    ), 300)
                }
                  , k = (0,
                a.useCallback)((function() {
                    var e = d;
                    0 !== e && e--,
                    g(e)
                }
                ), [r, d])
                  , j = (0,
                a.useCallback)((function() {
                    var e = d;
                    e !== (null === r || void 0 === r ? void 0 : r.length) - 1 && e++,
                    g(e)
                }
                ), [r, d])
                  , C = t === r.length - 1;
                return (0,
                N.jsx)("div", {
                    className: uc.container,
                    children: (0,
                    N.jsx)("div", {
                        className: uc.cardBox,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(uc.content, f ? uc.fadeIn : uc.fadeOut),
                            children: [(0,
                            N.jsx)("div", {
                                className: uc.levelLogoBox,
                                children: (0,
                                N.jsx)("img", {
                                    src: null !== v && void 0 !== v && v.logo ? "".concat(o.Z.cdnBaseUrl).concat(null === v || void 0 === v ? void 0 : v.logo) : "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: y()(uc.levelLogo, t >= d ? uc.logoLight : uc.logoGrade)
                                })
                            }), 0 !== d && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-left-centered-md", uc.leftBtn, uc.switchBtn),
                                onClick: k
                            }), d !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-right-centered-md", uc.rightBtn, uc.switchBtn),
                                onClick: j
                            }), (0,
                            N.jsx)("div", {
                                className: uc.currentGrade,
                                children: h && (0,
                                Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            N.jsx)("div", {
                                className: uc.gradeTitle,
                                children: null === v || void 0 === v ? void 0 : v.pointGradeName
                            }), (0,
                            N.jsx)("div", {
                                className: uc.progressNum,
                                children: v ? h && C ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        mn.uf)(i)
                                    }), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : h ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        mn.uf)(i)
                                    }), " /", " ", (0,
                                    mn.uf)(v.upperBound), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                N.jsx)(N.Fragment, {
                                    children: v.upperBound ? (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        mn.uf)(v.lowerBound),
                                        top: (0,
                                        mn.uf)(v.upperBound)
                                    }) : (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        mn.uf)(v.lowerBound)
                                    })
                                }) : ""
                            }), h && !C && (0,
                            N.jsx)("div", {
                                className: uc.progressSlide,
                                children: (0,
                                N.jsx)("div", {
                                    className: uc.progress,
                                    style: {
                                        width: "".concat(i / (Number(null === v || void 0 === v ? void 0 : v.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const _c = "License_loader__4L8AA"
              , pc = "License_container__MxoNJ"
              , mc = "License_pageTitle__h+Yja"
              , fc = "License_verifiedUsers__q-uxi"
              , xc = "License_avatars__3HegJ"
              , hc = "License_usersCount__fkW5h";
            var vc = n(48006)
              , gc = n(40544);
            n(25801);
            const kc = "LicenseCard_licenseCard__+wyQA"
              , jc = "LicenseCard_certified__jm59h"
              , Nc = "LicenseCard_header__LUvW7"
              , Cc = "LicenseCard_title__rMFOB"
              , wc = "LicenseCard_content__i2ESe"
              , bc = "LicenseCard_innerCard__n57Gb"
              , yc = "LicenseCard_details__boiyi"
              , Zc = "LicenseCard_label__JX11k"
              , Pc = "LicenseCard_link__19+Q+"
              , Tc = "LicenseCard_linkIcon__oNENM"
              , Oc = "LicenseCard_points__MkLL5"
              , Sc = "LicenseCard_icon__b6JLr"
              , Ec = "LicenseCard_certifyBtn__Z6vHo"
              , Bc = "LicenseCard_infoPopoverDesc__Km8Og"
              , Ic = "LicenseCard_gradeImage__fd+PJ";
            var Lc = function() {
                return (0,
                N.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: (0,
                    N.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.97777 2.5H2.35555C2.15919 2.5 2 2.65919 2 2.85555V7.47777C2 7.67413 2.15919 7.83332 2.35555 7.83332H6.97777C7.17413 7.83332 7.33332 7.67413 7.33332 7.47777V2.85555C7.33332 2.65919 7.17413 2.5 6.97777 2.5ZM12.3134 7.83334H7.69118C7.49482 7.83334 7.33563 7.99253 7.33563 8.18889V12.8111C7.33563 13.0075 7.49482 13.1667 7.69118 13.1667H12.3134C12.5098 13.1667 12.6689 13.0075 12.6689 12.8111V8.18889C12.6689 7.99253 12.5098 7.83334 12.3134 7.83334ZM13.0222 2.5H17.6444C17.8408 2.5 18 2.65919 18 2.85555V7.47777C18 7.67413 17.8408 7.83332 17.6444 7.83332H13.0222C12.8259 7.83332 12.6667 7.67413 12.6667 7.47777V2.85555C12.6667 2.65919 12.8259 2.5 13.0222 2.5ZM6.97777 13.1667H2.35555C2.15919 13.1667 2 13.3259 2 13.5222V18.1444C2 18.3408 2.15919 18.5 2.35555 18.5H6.97777C7.17413 18.5 7.33332 18.3408 7.33332 18.1444V13.5222C7.33332 13.3259 7.17413 13.1667 6.97777 13.1667ZM13.0222 13.1667H17.6444C17.8408 13.1667 18 13.3259 18 13.5222V18.1444C18 18.3408 17.8408 18.5 17.6444 18.5H13.0222C12.8259 18.5 12.6667 18.3408 12.6667 18.1444V13.5222C12.6667 13.3259 12.8259 13.1667 13.0222 13.1667Z",
                        fill: "#121212"
                    })
                })
            }
              , Rc = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = (0,
                s.useLocation)()
                  , a = Ke().accumPoints
                  , r = go()
                  , i = r.accountBindingInfo
                  , c = r.isCertified
                  , l = lc().currentGrade;
                return (0,
                N.jsxs)("section", {
                    className: y()(kc, (0,
                    rt.Z)({}, jc, c)),
                    children: [(0,
                    N.jsxs)("div", {
                        className: Nc,
                        children: [(0,
                        N.jsx)(Lc, {}), (0,
                        N.jsx)("span", {
                            className: Cc,
                            children: c ? (0,
                            Z.O4)("ok_game_okxracer_label_phase4_certified") : (0,
                            Z.O4)("ok_game_okxracer_label_phase4_uncertified")
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: wc,
                        children: [(0,
                        N.jsxs)("div", {
                            className: bc,
                            children: [(0,
                            N.jsxs)("div", {
                                className: yc,
                                children: [(0,
                                N.jsx)("p", {
                                    className: Zc,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                                }), (0,
                                N.jsxs)(s.Link, {
                                    to: {
                                        pathname: M,
                                        hash: n.hash
                                    },
                                    className: Pc,
                                    children: [(0,
                                    vc.T)(null === i || void 0 === i ? void 0 : i.pointGradeName), (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okds-arrow-chevron-right-centered-md",
                                        className: Tc
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: Oc,
                                    children: [(0,
                                    N.jsx)("span", {
                                        className: Zc,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned")
                                    }), "\xa0", (0,
                                    mn.uf)(a), (0,
                                    N.jsx)(gc.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                        contentClassName: Bc,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: Sc
                                        })
                                    })]
                                })]
                            }), l && (0,
                            N.jsx)(Y.Z, {
                                pictureClassName: Ic,
                                className: Ic,
                                src: "".concat(o.Z.cdnBaseUrl, "/").concat(l.logo)
                            })]
                        }), !c && (0,
                        N.jsx)(at, {
                            className: Ec,
                            size: H.default.SIZE.md,
                            text: (0,
                            Z.O4)("ok_game_okxracer_btn_phase4_certify"),
                            onClick: t
                        })]
                    })]
                })
            }
              , Ac = function() {
                var e, t = I().uid, n = go(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, d = n.isLoading, _ = (0,
                a.useState)(!1), p = (0,
                u.Z)(_, 2), m = p[0], f = p[1], x = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 0 && void 0 !== r[0] && r[0],
                                n = r.length > 1 ? r[1] : void 0,
                                e.prev = 2,
                                e.next = 5,
                                i(t, n);
                            case 5:
                                a = e.sent,
                                !t || null !== a && void 0 !== a && a.isKyc && a.isConnectTelegram || J(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(2),
                                J(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 9]])
                }
                ))), [i]);
                if ((0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || x()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [x]),
                (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        O.act({
                            action: "OKXRacerSurprisesPage_Page_FullPage_View",
                            anchor: "OKXRacerSurprisesPage_Page_FullPage_View",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }({
                        telegramid: t
                    })
                }
                ), [t]),
                d)
                    return (0,
                    N.jsx)("div", {
                        className: _c,
                        children: (0,
                        N.jsx)(Na.Z, {})
                    });
                var h = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0
                  , v = function() {
                    f(!0)
                };
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("div", {
                        className: pc,
                        children: [!s && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(ts, {
                                className: mc,
                                html: (0,
                                Z.O4)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            N.jsxs)("div", {
                                className: fc,
                                children: [(0,
                                N.jsx)(Y.Z, {
                                    className: xc,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                N.jsx)("span", {
                                    className: hc,
                                    children: h > 0 ? (0,
                                    mn.uf)(h) : "--"
                                }), (0,
                                Z.O4)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        N.jsx)(Rc, {
                            showCertifyBottomSheet: v
                        }), (0,
                        N.jsx)(yo, {
                            showCertifyBottomSheet: v
                        }), (0,
                        N.jsx)(Ko, {
                            showCertifyBottomSheet: v
                        })]
                    }), (0,
                    N.jsx)(cc, {
                        visible: m,
                        onClose: function() {
                            f(!1)
                        },
                        getAccountBindingInfo: x
                    })]
                })
            }
              , Dc = function() {
                return (0,
                N.jsx)(ko, {
                    children: (0,
                    N.jsx)(Po, {
                        children: (0,
                        N.jsx)(ao, {
                            children: (0,
                            N.jsxs)(ai, {
                                animationPath: [M],
                                children: [(0,
                                N.jsx)(s.Route, {
                                    path: U,
                                    component: Ac,
                                    exact: !0
                                }), (0,
                                N.jsx)(s.Route, {
                                    path: G,
                                    component: so,
                                    exact: !0
                                }), (0,
                                N.jsx)(s.Route, {
                                    path: M,
                                    component: C(dc),
                                    exact: !0
                                })]
                            })
                        })
                    })
                })
            };
            const Fc = "QrCode_container__r4Fu7"
              , Wc = "QrCode_qrCode__16PWa"
              , Uc = "QrCode_title__+cibb"
              , Mc = "QrCode_message__eaOzW";
            var Gc = function() {
                return (0,
                N.jsxs)("div", {
                    className: Fc,
                    children: [(0,
                    N.jsx)(Y.Z, {
                        className: Wc,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    N.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            $r.dU)((0,
                            Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: Uc
                    }), (0,
                    N.jsx)("p", {
                        className: Mc,
                        children: (0,
                        Z.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            }
              , Vc = n(42982);
            const Hc = "PullupList_loading__+51Dh"
              , Yc = "PullupList_listLoadItem__XcvkH"
              , Kc = "PullupList_listLeft__4eGh6"
              , Xc = "PullupList_listRight__w7Ely"
              , zc = "PullupList_listLoading__whJeg";
            var Jc = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(Yc),
                    children: [(0,
                    N.jsx)(ls, {
                        className: Kc
                    }), (0,
                    N.jsx)(ls, {
                        className: Xc
                    })]
                })
            }
              , qc = function() {
                return (0,
                N.jsx)("div", {
                    className: zc,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        N.jsx)(Jc, {}, t)
                    }
                    ))
                })
            }
              , Qc = function(e) {
                var t = e.loadData
                  , n = e.children
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , f = (0,
                a.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , x = (0,
                a.useRef)(null)
                  , h = (0,
                a.useState)(!1)
                  , v = (0,
                u.Z)(h, 2)
                  , g = v[0]
                  , k = v[1]
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var n;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (-1 === f.current.total || !(i.length >= f.current.total || !0 === f.current.stop)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return m(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    t(f.current.page, f.current.total);
                                case 6:
                                    (n = e.sent) && n.rows ? (f.current.page += 1,
                                    o((function(e) {
                                        return [].concat((0,
                                        Vc.Z)(e), (0,
                                        Vc.Z)(n.rows))
                                    }
                                    )),
                                    f.current.total = 0 === n.rows.length ? i.length : n.total) : f.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    f.current.stop = !0;
                                case 13:
                                    m(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 10]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , C = (0,
                Mr.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , w = function(e) {
                    e[0].isIntersecting && !p && !1 === f.current.stop && k(!g)
                };
                return (0,
                a.useEffect)((function() {
                    var e = new IntersectionObserver(w,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return x.current && e.observe(x.current),
                    function() {
                        x.current && e.unobserve(x.current)
                    }
                }
                ), [p]),
                (0,
                a.useEffect)((function() {
                    C()
                }
                ), [g]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [i.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    N.jsx)("div", {
                        className: Hc,
                        ref: x,
                        children: p && (0,
                        N.jsx)(qc, {})
                    })]
                })
            };
            const $c = "InviteList_listItem__q4jhG"
              , el = "InviteList_name__LLQgt"
              , tl = "InviteList_point__kXtCn"
              , nl = "InviteList_earnedPrice__4vAfw"
              , al = "InviteList_pointNumber__v4P1H";
            var rl = function() {
                var e = (0,
                a.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, s, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = !1,
                                    1 === t && (a = !0),
                                    s = {
                                        pageNo: t
                                    },
                                    n && n >= 0 && (s.total = n),
                                    e.next = 6,
                                    Ze(s, a);
                                case 6:
                                    return (i = e.sent) && r(i.accumPoints),
                                    e.abrupt("return", i);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        className: nl,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            N.jsx)("span", {
                                className: al,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    mn.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    N.jsx)(Qc, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            N.jsxs)("div", {
                                className: $c,
                                children: [(0,
                                N.jsx)("div", {
                                    className: el,
                                    children: e.extInviteeName
                                }), (0,
                                N.jsx)("div", {
                                    className: tl,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        mn.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const sl = "ReferralsPage_container__V48m1"
              , il = "ReferralsPage_inviteDetail__L1MhM"
              , ol = "ReferralsPage_detailItem__ujOp+"
              , cl = "ReferralsPage_dot__zKW7L"
              , ll = "ReferralsPage_detailTitle__OE657"
              , ul = "ReferralsPage_detailInfo__YC+Y9"
              , dl = "ReferralsPage_inviteList__Jksx8";
            var _l = function() {
                var e = I().uid
                  , t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_refer_your_friends"),
                    detailInfo: (0,
                    Z.O4)("ok_game_okxracer_refer_rewards")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_get_bonus"),
                    detailInfo: (0,
                    Z.O4)("ok_game_okxracer_refer_hint")
                }];
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        O.act({
                            action: "OkxRacerFriendsPage_Page_FullPage_View",
                            anchor: "OkxRacerFriendsPage_Page_FullPage_View",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }({
                        telegramid: e
                    })
                }
                ), []),
                (0,
                N.jsxs)("div", {
                    className: sl,
                    children: [(0,
                    N.jsx)(ts, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    N.jsx)("div", {
                        className: il,
                        children: t.map((function(e) {
                            return (0,
                            N.jsxs)("div", {
                                className: ol,
                                children: [(0,
                                N.jsx)("div", {
                                    className: cl
                                }), (0,
                                N.jsx)("div", {
                                    className: ll,
                                    children: e.title
                                }), (0,
                                N.jsx)("div", {
                                    className: ul,
                                    children: e.detailInfo
                                })]
                            }, e.title)
                        }
                        ))
                    }), (0,
                    N.jsx)("div", {
                        className: dl,
                        children: (0,
                        N.jsx)(rl, {})
                    }), (0,
                    N.jsx)(fs, {})]
                })
            };
            const pl = {
                container: "index_container__UavVq",
                header: "index_header__EKw6T",
                title: "index_title__J0Uw8",
                desc: "index_desc__C1bRh",
                status: "index_status__OIu7d",
                statusItem: "index_statusItem__Zhqk0",
                statusTitle: "index_statusTitle__42PdE",
                statusValue: "index_statusValue__bd5su",
                participantsIcon: "index_participantsIcon__BdqnP",
                tasks: "index_tasks__ctCRX",
                taskListHeader: "index_taskListHeader__ofYyy",
                taskCount: "index_taskCount__YgRaW"
            };
            var ml = function() {
                var e = pi().partner
                  , t = (0,
                s.useHistory)().replace
                  , n = (0,
                s.useLocation)().hash;
                if (eo(),
                (0,
                a.useEffect)((function() {
                    e || t(D + n)
                }
                ), [n, e, t]),
                !e)
                    return null;
                var r = e.numCompletedTasks
                  , i = e.numTasks
                  , c = e.tasks
                  , l = e.logo
                  , u = e.groupName
                  , d = e.groupDesc
                  , _ = e.totalPoints
                  , p = e.participants;
                return (0,
                N.jsxs)("div", {
                    className: pl.container,
                    children: [(0,
                    N.jsxs)("div", {
                        className: pl.header,
                        children: [(0,
                        N.jsx)(ri.Z, {
                            size: si.Z.sm,
                            className: pl.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(l)
                        }), (0,
                        N.jsx)("h1", {
                            className: pl.title,
                            children: u
                        })]
                    }), (0,
                    N.jsx)("p", {
                        className: pl.desc,
                        children: d
                    }), (0,
                    N.jsxs)("div", {
                        className: pl.status,
                        children: [(0,
                        N.jsxs)("div", {
                            className: pl.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: pl.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: pl.statusValue,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    mn.uf)(_, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: pl.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: pl.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            N.jsxs)("div", {
                                className: pl.statusValue,
                                children: [(0,
                                N.jsx)(P.Z, {
                                    className: y()("okx-growth-friends", pl.participantsIcon)
                                }), mn.ag.shortNumber(p, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: pl.tasks,
                        children: [(0,
                        N.jsxs)("div", {
                            className: pl.taskListHeader,
                            children: [(0,
                            N.jsx)("span", {
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            N.jsx)("span", {
                                className: pl.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(r, "/").concat(i)
                                    })
                                }
                            })]
                        }), (0,
                        N.jsx)($i, {
                            tasks: c
                        })]
                    })]
                })
            };
            const fl = "index_backgroundWrapper__qN2sL"
              , xl = "index_topContainer__Oestq"
              , hl = "index_pointsContainer__uT3xm"
              , vl = "index_pointsNameBigger__vMdga"
              , gl = "index_pointsNameSmaller__RJqmJ"
              , kl = "index_pointsValue__wGe00"
              , jl = "index_availablePointsValue__n8yPm"
              , Nl = "index_pointsDetails__nXNoJ"
              , Cl = "index_infoIcon__FqneN";
            var wl = function() {
                var e = Ke()
                  , t = e.points
                  , n = e.accumPoints
                  , a = e.basePoint
                  , r = e.autopilotPointsPerHour;
                return (0,
                N.jsx)("div", {
                    className: fl,
                    children: (0,
                    N.jsxs)("div", {
                        className: xl,
                        children: [(0,
                        N.jsxs)("div", {
                            className: hl,
                            children: [(0,
                            N.jsx)("div", {
                                className: vl,
                                children: (0,
                                Z.O4)("ok_game_okxracer_available_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: jl,
                                children: fn.yx.thousandFormat(t || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: hl,
                            children: [(0,
                            N.jsxs)("div", {
                                className: vl,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                N.jsx)(gc.Z, {
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: gc.Z.TYPES.neutral,
                                    children: (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okx-growth-information",
                                        className: Cl
                                    })
                                })]
                            }), (0,
                            N.jsx)("div", {
                                className: kl,
                                children: fn.yx.thousandFormat(n || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: Nl,
                            children: [(0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsx)("div", {
                                    className: gl,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase42_base_pts_win")
                                }), (0,
                                N.jsxs)("div", {
                                    className: kl,
                                    children: ["\ud83c\udfc1 ", fn.yx.thousandFormat(a || 0)]
                                })]
                            }), (0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsxs)("div", {
                                    className: gl,
                                    children: [(0,
                                    Z.O4)("ok_game_okxracer_text_phase42_hourly_autopts"), (0,
                                    N.jsx)(gc.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                        type: gc.Z.TYPES.neutral,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: Cl
                                        })
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: kl,
                                    children: ["\ud83c\udfc1 ", fn.yx.thousandFormat(r || 0)]
                                })]
                            })]
                        })]
                    })
                })
            };
            const bl = "Tag_tag__tkWly";
            var yl = function(e) {
                var t = e.text
                  , n = e.className;
                return (0,
                N.jsx)("span", {
                    className: y()(bl, n),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
              , Zl = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === Dt.DailyBoost
            }
              , Pl = function(e) {
                return "actionType"in e && e.actionType === Oe.UnLock
            }
              , Tl = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !Zl(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                mn.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const Ol = "index_sheet__FbHHx"
              , Sl = "index_sheet-icon__H2xCV"
              , El = "index_boostSheetTag__NbYFf"
              , Bl = "index_sheet-title__RInQ-"
              , Il = "index_sheet-desc__W9myB"
              , Ll = "index_sheet-data__FALtV"
              , Rl = "index_sheet-point__Xrsvs"
              , Al = "index_sheet-lvl__f1+W-"
              , Dl = "index_lockBtnContainer__4DPO7"
              , Fl = "index_btn__bxKiJ"
              , Wl = "index_boost-data-split-point__TaGIo";
            var Ul = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t
                  , r = a.context
                  , s = a.curStage
                  , i = a.totalStage
                  , c = a.isLocked
                  , l = r.logo
                  , u = r.name
                  , d = r.desc
                  , _ = r.btnText
                  , p = Pl(r)
                  , m = !1
                  , f = d
                  , x = _;
                return p && (c ? (f = r.unlockDescription,
                x = r.unlockButtonText) : f = r.ruleDescription,
                s === i && (m = !0,
                x = r.activatedButtonText)),
                (0,
                N.jsxs)("div", {
                    className: Ol,
                    children: [(0,
                    N.jsx)(Y.Z, {
                        className: Sl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(l)
                    }), p && (0,
                    N.jsx)(yl, {
                        className: El
                    }), (0,
                    N.jsx)("div", {
                        className: Bl,
                        children: u
                    }), (0,
                    N.jsx)("div", {
                        className: Il,
                        children: f
                    }), (0,
                    N.jsxs)("div", {
                        className: Ll,
                        children: [(0,
                        N.jsx)("span", {
                            className: Rl,
                            children: Tl(t)
                        }), (Zl(t) || s < i) && (0,
                        N.jsx)("span", {
                            className: Wl
                        }), (0,
                        N.jsx)("span", {
                            className: Al,
                            children: Zl(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), p && c ? (0,
                    N.jsx)(Bt, {
                        to: U,
                        className: Dl,
                        children: (0,
                        N.jsx)(at, {
                            text: x
                        })
                    }) : (0,
                    N.jsx)(at, {
                        onClick: function() {
                            n(t)
                        },
                        className: Fl,
                        text: x,
                        disabled: m
                    })]
                })
            };
            const Ml = "index_boost-item__k6pnm"
              , Gl = "index_boost-icon__wH6Dh"
              , Vl = "index_boostIconLoading__PFCBM"
              , Hl = "index_boost-title__9R-Ry"
              , Yl = "index_newTag__tgIea"
              , Kl = "index_boost-data__+0cnG"
              , Xl = "index_boost-data-split-point__moT+k"
              , zl = "index_boost-data-stage__8CAgC"
              , Jl = "index_boostItemPlaceholder__NaUkk"
              , ql = "index_locked__sM-YP"
              , Ql = "index_unlockIcon__whxqz"
              , $l = "index_unlockButton__C3EY5";
            var eu = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context;
                if (Pl(s)) {
                    if (r)
                        return (0,
                        N.jsx)("div", {
                            className: Kl,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === a)
                        return (0,
                        N.jsx)("div", {
                            className: Kl,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                N.jsxs)("div", {
                    className: Kl,
                    children: [(0,
                    N.jsx)("span", {
                        children: Tl(t)
                    }), (Zl(t) || n < a) && (0,
                    N.jsx)("span", {
                        className: Xl
                    }), (0,
                    N.jsx)("span", {
                        className: zl,
                        children: Zl(t) ? "".concat(a - n, "/").concat(a) : "Lvl ".concat(n)
                    })]
                })
            }
              , tu = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , c = r.logo
                  , l = Pl(r);
                return (0,
                N.jsxs)("div", {
                    className: Ml,
                    onClick: function() {
                        n(a)
                    },
                    children: [(0,
                    N.jsx)(Y.Z, {
                        className: Gl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(c)
                    }), (0,
                    N.jsxs)("div", {
                        className: Hl,
                        children: [i, l && (0,
                        N.jsx)(yl, {
                            className: Yl
                        })]
                    }), (0,
                    N.jsx)(eu, {
                        boost: t
                    }), s && (0,
                    N.jsxs)("div", {
                        className: ql,
                        children: [(0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-lock", Ql)
                        }), (0,
                        N.jsx)(H.default, {
                            category: H.default.CATEGORY.text,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: H.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: $l,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, a)
            }
              , nu = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(Ml, Jl),
                    children: [(0,
                    N.jsx)(ls, {
                        className: Vl
                    }), (0,
                    N.jsx)(ls, {
                        className: Hl
                    }), (0,
                    N.jsx)(ls, {
                        className: Kl
                    })]
                })
            };
            const au = "index_boost-item-container__SW62L"
              , ru = "index_boost-item-padding__IwiTB";
            var su = function(e) {
                var t = e.onClick
                  , n = pi().boosts
                  , r = (0,
                a.useCallback)((function(e) {
                    var a = n.find((function(t) {
                        return t.id === e
                    }
                    ));
                    a && t(a)
                }
                ), [n, t]);
                return (0,
                N.jsxs)("div", {
                    className: au,
                    children: [(0,
                    N.jsx)("div", {
                        className: ru
                    }), n.length > 0 ? (0,
                    N.jsx)(N.Fragment, {
                        children: n.map((function(e) {
                            return (0,
                            N.jsx)(tu, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(nu, {}), (0,
                        N.jsx)(nu, {}), (0,
                        N.jsx)(nu, {})]
                    }), (0,
                    N.jsx)("div", {
                        className: ru
                    })]
                })
            };
            const iu = "index_boosts-title__WRC2M"
              , ou = "index_boost-area__eFBHi"
              , cu = "index_container__H6hcL";
            var lu = function() {
                var e = pi()
                  , t = e.boosts
                  , n = e.upgradeBoost
                  , r = (0,
                a.useState)()
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , f = Ke().points
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var a, r, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.pointCost,
                                    r = t.curStage,
                                    s = t.totalStage,
                                    !(Number(s) <= Number(r))) {
                                        e.next = 5;
                                        break
                                    }
                                    J(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(f - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    J(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && J(!0);
                                case 13:
                                    m(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , h = (0,
                a.useCallback)((function(e) {
                    m(!0),
                    o(e)
                }
                ), []);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("div", {
                        className: iu,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), (0,
                        N.jsx)("span", {
                            children: t.length > 0 ? " (".concat(t.length, ")") : ""
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: ou,
                        children: (0,
                        N.jsxs)("div", {
                            className: cu,
                            children: [(0,
                            N.jsx)(su, {
                                onClick: h
                            }), (0,
                            N.jsx)(Qe, {
                                visible: p,
                                onClose: function() {
                                    m(!1)
                                },
                                children: i && (0,
                                N.jsx)(Ul, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            };
            const uu = "index_partnerItem__S1dkf"
              , du = "index_title__bRRMU"
              , _u = "index_points__WQSip"
              , pu = "index_state__gi-nK"
              , mu = "index_logo__y4rK-"
              , fu = "index_item-left__ej9+1"
              , xu = "index_item-right__3KRWi"
              , hu = "index_dot__4bynu"
              , vu = "index_participantsIcon__-tYh0"
              , gu = "index_icon__gS69A";
            var ku = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                N.jsxs)("div", {
                    className: uu,
                    children: [(0,
                    N.jsx)(ri.Z, {
                        size: si.Z.sm,
                        className: mu,
                        src: "".concat(o.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    N.jsxs)("div", {
                        className: fu,
                        children: [(0,
                        N.jsx)("div", {
                            className: du,
                            children: t
                        }), (0,
                        N.jsx)("div", {
                            className: _u,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                mn.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        N.jsxs)("div", {
                            className: pu,
                            children: [(0,
                            N.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    $r.dU)((0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            N.jsx)("span", {
                                className: hu
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-friends", vu)
                            }), (0,
                            N.jsx)("em", {
                                children: mn.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: xu,
                        children: (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", gu)
                        })
                    })]
                })
            };
            const ju = "index_container__wKNP9";
            function Nu(e) {
                var t = e.tasks
                  , n = e.className
                  , a = pi().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                N.jsx)("div", {
                    className: y()(ju, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , o = e.logo;
                        return (0,
                        N.jsx)(Bt, {
                            to: F,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            N.jsx)(ku, {
                                name: t,
                                logo: o,
                                totalPoints: s,
                                numCompletedTasks: r,
                                numTasks: n,
                                participants: i
                            })
                        }, t)
                    }
                    )) : (0,
                    N.jsx)(ci, {})
                })
            }
            const Cu = "TaskArea_tabPane__irXs6"
              , wu = "TaskArea_tabName__-BL2R"
              , bu = "TaskArea_list__cqK4t";
            var yu = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                Z.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                Z.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                N.jsxs)("div", {
                    className: wu,
                    children: [r, " ", (0,
                    N.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , Zu = function() {
                var e = pi().tasks
                  , t = e.taskGroups
                  , n = e.ungroupedTasks;
                return (0,
                N.jsx)(N.Fragment, {
                    children: (0,
                    N.jsxs)(Qr.Z.Underline, {
                        size: Qr.Z.SIZE.xl,
                        children: [(0,
                        N.jsx)(Qr.Z.TabPane, {
                            className: Cu,
                            tab: (0,
                            N.jsx)(yu, {
                                isPartner: !0,
                                count: t.length
                            }),
                            id: "partner",
                            children: (0,
                            N.jsx)(Nu, {
                                tasks: t,
                                className: bu
                            })
                        }), (0,
                        N.jsx)(Qr.Z.TabPane, {
                            className: Cu,
                            tab: (0,
                            N.jsx)(yu, {
                                count: n.length
                            }),
                            id: "own",
                            children: (0,
                            N.jsx)($i, {
                                tasks: n,
                                className: bu
                            })
                        })]
                    })
                })
            };
            const Pu = "TaskPage_container__5KfIM"
              , Tu = "TaskPage_block__kt8oo"
              , Ou = "TaskPage_blockBoost__rwGOo";
            var Su = function() {
                return (0,
                N.jsxs)("div", {
                    className: Pu,
                    children: [(0,
                    N.jsx)("div", {
                        className: Tu,
                        children: (0,
                        N.jsx)(wl, {})
                    }), (0,
                    N.jsx)("div", {
                        className: Ou,
                        children: (0,
                        N.jsx)(lu, {})
                    }), (0,
                    N.jsx)("div", {
                        className: Tu,
                        children: (0,
                        N.jsx)(Zu, {})
                    })]
                })
            }
              , Eu = function() {
                return (0,
                N.jsx)(mi, {
                    children: (0,
                    N.jsxs)(s.Switch, {
                        children: [(0,
                        N.jsx)(s.Route, {
                            path: D,
                            component: Su,
                            exact: !0
                        }), (0,
                        N.jsx)(s.Route, {
                            path: F,
                            component: ml,
                            exact: !0
                        })]
                    })
                })
            }
              , Bu = function() {
                var e = (0,
                a.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , i = (0,
                a.useMemo)(x, [])
                  , f = o.Z.locale;
                (0,
                a.useMemo)((function() {
                    m.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var k = function() {
                    var e = I().uid;
                    return (0,
                    a.useEffect)((function() {
                        var e, t, n, a, r, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (a = window.Telegram.WebApp).ready) || void 0 === n || n.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                        null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d),
                        X.k.info("TG MINI APP OKX Racer version: ".concat(window.Telegram.WebApp.version, " "), {
                            version: window.Telegram.WebApp.version
                        })),
                        document.addEventListener("contextmenu", (function(e) {
                            return e.preventDefault()
                        }
                        ))
                    }
                    ), []),
                    {
                        isAllowToLoadApp: true
                    }
                }().isAllowToLoadApp;
                return (0,
                a.useEffect)((function() {
                    var e = function() {
                        var e = (0,
                        l.Z)((0,
                        c.Z)().mark((function e() {
                            var t;
                            return (0,
                            c.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        _.d)(i);
                                    case 2:
                                        t = e.sent,
                                        r(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }
                ), [i]),
                (0,
                N.jsx)("article", {
                    className: h,
                    children: (0,
                    N.jsx)(p.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: k ? (0,
                        N.jsx)(N.Fragment, {
                            children: (0,
                            N.jsx)(Kt, {
                                children: (0,
                                N.jsx)(Xe, {
                                    children: (0,
                                    N.jsx)(Jt, {
                                        children: (0,
                                        N.jsxs)(d.OKXTonConnectUIProvider, {
                                            uiPreferences: {
                                                theme: d.THEME.DARK
                                            },
                                            dappMetaData: {
                                                name: "OKX Racer",
                                                icon: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/149F6DE872696960.jpeg")
                                            },
                                            restoreConnection: !0,
                                            language: f,
                                            actionsConfiguration: {
                                                returnStrategy: "tg://resolve"
                                            },
                                            children: [(0,
                                            N.jsx)("main", {
                                                className: g,
                                                children: (0,
                                                N.jsxs)(s.Switch, {
                                                    children: [(0,
                                                    N.jsx)(s.Route, {
                                                        path: R,
                                                        component: qr,
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: W,
                                                        component: C(ei),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: D,
                                                        component: Eu
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: A,
                                                        component: C(_l),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: U,
                                                        component: Dc
                                                    })]
                                                })
                                            }), (0,
                                            N.jsx)("div", {
                                                className: v,
                                                children: (0,
                                                N.jsx)(Lt, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        N.jsx)(Gc, {})
                    })
                })
            }
              , Iu = document.getElementById("root");
            if (Iu) {
                var Lu = (0,
                N.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    N.jsx)(L, {
                        children: (0,
                        N.jsx)(Bu, {})
                    })
                });
                (0,
                i.createRoot)(Iu).render(Lu)
            }
        }
        ,
        87363: e => {
            "use strict";
            e.exports = React
        }
        ,
        61533: e => {
            "use strict";
            e.exports = ReactDOM
        }
        ,
        59605: () => {}
        ,
        35883: () => {}
        ,
        42480: () => {}
        ,
        88924: () => {}
    }
      , t = {};
    function n(a) {
        var r = t[a];
        if (void 0 !== r)
            return r.exports;
        var s = t[a] = {
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n),
        s.exports
    }
    n.m = e,
    n.amdO = {},
    ( () => {
        var e = [];
        n.O = (t, a, r, s) => {
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,r,s] = e[u], o = !0, c = 0; c < a.length; c++)
                        (!1 & s || i >= s) && Object.keys(n.O).every((e => n.O[e](a[c]))) ? a.splice(c--, 1) : (o = !1,
                        s < i && (i = s));
                    if (o) {
                        e.splice(u--, 1);
                        var l = r();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [a, r, s]
        }
    }
    )(),
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    ( () => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(a, r) {
            if (1 & r && (a = this(a)),
            8 & r)
                return a;
            if ("object" === typeof a && a) {
                if (4 & r && a.__esModule)
                    return a;
                if (16 & r && "function" === typeof a.then)
                    return a
            }
            var s = Object.create(null);
            n.r(s);
            var i = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var o = 2 & r && a; "object" == typeof o && !~e.indexOf(o); o = t(o))
                Object.getOwnPropertyNames(o).forEach((e => i[e] = () => a[e]));
            return i.default = () => a,
            n.d(s, i),
            s
        }
    }
    )(),
    n.d = (e, t) => {
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    n.f = {},
    n.e = e => Promise.all(Object.keys(n.f).reduce(( (t, a) => (n.f[a](e, t),
    t)), [])),
    n.u = e => "common/" + e + ".b0933464.js",
    n.miniCssF = e => {}
    ,
    n.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        var e = {}
          , t = "growth:";
        n.l = (a, r, s, i) => {
            if (e[a])
                e[a].push(r);
            else {
                var o, c;
                if (void 0 !== s)
                    for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                        var d = l[u];
                        if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == t + s) {
                            o = d;
                            break
                        }
                    }
                o || (c = !0,
                (o = document.createElement("script")).charset = "utf-8",
                o.timeout = 120,
                n.nc && o.setAttribute("nonce", n.nc),
                o.setAttribute("data-webpack", t + s),
                o.src = a),
                e[a] = [r];
                var _ = (t, n) => {
                    o.onerror = o.onload = null,
                    clearTimeout(p);
                    var r = e[a];
                    if (delete e[a],
                    o.parentNode && o.parentNode.removeChild(o),
                    r && r.forEach((e => e(n))),
                    t)
                        return t(n)
                }
                  , p = setTimeout(_.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
                o.onerror = _.bind(null, o.onerror),
                o.onload = _.bind(null, o.onload),
                c && document.head.appendChild(o)
            }
        }
    }
    )(),
    n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e = {}
          , t = {};
        n.f.remotes = (a, r) => {
            n.o(e, a) && e[a].forEach((e => {
                var a = n.R;
                a || (a = []);
                var s = t[e];
                if (!(a.indexOf(s) >= 0)) {
                    if (a.push(s),
                    s.p)
                        return r.push(s.p);
                    var i = t => {
                        t || (t = new Error("Container missing")),
                        "string" === typeof t.message && (t.message += '\nwhile loading "' + s[1] + '" from ' + s[2]),
                        n.m[e] = () => {
                            throw t
                        }
                        ,
                        s.p = 0
                    }
                      , o = (e, t, n, a, o, c) => {
                        try {
                            var l = e(t, n);
                            if (!l || !l.then)
                                return o(l, a, c);
                            var u = l.then((e => o(e, a)), i);
                            if (!c)
                                return u;
                            r.push(s.p = u)
                        } catch (d) {
                            i(d)
                        }
                    }
                      , c = (e, t, n) => o(t.get, s[1], a, 0, l, n)
                      , l = t => {
                        s.p = 1,
                        n.m[e] = e => {
                            e.exports = t()
                        }
                    }
                    ;
                    o(n, s[2], 0, 0, ( (e, t, a) => e ? o(n.I, s[0], 0, e, c, a) : i()), 1)
                }
            }
            ))
        }
    }
    )(),
    ( () => {
        n.S = {};
        var e = {}
          , t = {};
        n.I = (a, r) => {
            r || (r = []);
            var s = t[a];
            if (s || (s = t[a] = {}),
            !(r.indexOf(s) >= 0)) {
                if (r.push(s),
                e[a])
                    return e[a];
                n.o(n.S, a) || (n.S[a] = {});
                n.S[a];
                var i = [];
                return i.length ? e[a] = Promise.all(i).then(( () => e[a] = 1)) : e[a] = 1
            }
        }
    }
    )(),
    ( () => {
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
                for (var r = a.length - 1; r > -1 && !e; )
                    e = a[r--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        n.p = e + "../"
    }
    )(),
    ( () => {
        try {
            if (n.miniCssF) {
                var e = n.miniCssF;
                n.miniCssF = function(t) {
                    var n = e(t);
                    if ("string" !== typeof n)
                        return n;
                    var a = window._okGlobal || window.okGlobal;
                    return a && a.isRTL && /\.css$/.test(n) ? n.replace(/\.css$/, ".rtl.css") : n
                }
            }
        } catch (t) {}
    }
    )(),
    ( () => {
        var e = {
            6554: 0,
            8536: 0,
            5145: 0
        };
        n.f.j = (t, a) => {
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (/^(5145|8536)$/.test(t))
                    e[t] = 0;
                else {
                    var s = new Promise(( (n, a) => r = e[t] = [n, a]));
                    a.push(r[2] = s);
                    var i = n.p + n.u(t)
                      , o = new Error;
                    n.l(i, (a => {
                        if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var s = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")",
                            o.name = "ChunkLoadError",
                            o.type = s,
                            o.request = i,
                            r[1](o)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        n.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var r, s, [i,o,c] = a, l = 0;
            if (i.some((t => 0 !== e[t]))) {
                for (r in o)
                    n.o(o, r) && (n.m[r] = o[r]);
                if (c)
                    var u = c(n)
            }
            for (t && t(a); l < i.length; l++)
                s = i[l],
                n.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return n.O(u)
        }
          , a = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var a = n.O(void 0, [2695, 8536, 5145, 7524, 9334, 1076, 2418, 8283, 2582, 5861, 4757, 1912, 9590], ( () => n(58288)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.82e12537.js.map
