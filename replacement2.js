( () => {
    var e = {
        58288: (e, n, t) => {
            "use strict";
            var a = t(87363)
              , r = t.n(a);
            const s = ReactRouterDOM;
            t(75139);
            var i = t(73271)
              , o = t(53949)
              , c = (t(78599),
            t(74165))
              , l = t(15861)
              , u = t(70885)
              , d = t(7763)
              , _ = t(46541)
              , m = t(1677)
              , p = t(27173)
              , f = (t(92643),
            t(8786))
              , x = function() {
                var e, n, t = ((null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n ? void 0 : n.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === t || void 0 === t ? void 0 : t.language_code) || "en"] || "en_US";
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
            var k = t(1413);
            const j = "ComPaddingLayout_common-padding-layout__0gGbM";
            var N = t(45263)
              , C = function(e) {
                return function(n) {
                    return (0,
                    N.jsx)("div", {
                        className: j,
                        children: (0,
                        N.jsx)(e, (0,
                        k.Z)({}, n))
                    })
                }
            }
              , w = t(44925)
              , b = t(95640)
              , y = t.n(b)
              , Z = t(14300)
              , P = t(7562)
              , T = (t(96809),
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
              , R = function(e) {
                var n = e.children
                  , t = (0,
                a.useMemo)((function() {
                    var e, n, t = (null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n ? void 0 : n.initDataUnsafe) || {
                        user: {}
                    }, a = t.user, r = t.start_param;
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
                a.useState)(t)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                N.jsx)(B.Provider, {
                    value: s,
                    children: n
                })
            }
              , L = "/mini-app/racer"
              , A = "/mini-app/racer/referrals"
              , D = "/mini-app/racer/tasks"
              , F = "/mini-app/racer/tasks/partner"
              , U = "/mini-app/racer/leaderboard"
              , M = "/mini-app/racer/license"
              , G = "/mini-app/racer/license/grades"
              , W = "/mini-app/racer/license/airdrop"
              , V = t(83108)
              , H = t(76983)
              , Y = t(96833)
              , K = (t(14268),
            t(83295),
            t(29361),
            t(4860))
              , z = t(4422)
              , X = t(72202)
              , J = function(e, n) {
                e ? p.Z.success({
                    title: n || (0,
                    Z.O4)("ok_game_okxracer_success"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                }) : p.Z.error({
                    title: n || (0,
                    Z.O4)("ok_game_okxracer_failed"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , q = function(e) {
                var n = null === e || void 0 === e ? void 0 : e.error_message;
                J(!1, n || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , Q = t(60378);
            const $ = utils.ont;
            var ee = t.n($)
              , ne = function(e) {
                var n = (e || {}).data;
                return 0 === Number(n.code) && n ? Promise.resolve(n) : Promise.reject(n)
            }
              , te = function(e) {
                return function(n) {
                    if (!(0,
                    Q.y)()) {
                        var t = n || {}
                          , a = t.status
                          , r = t.data || {}
                          , s = r.msg
                          , i = r.code;
                        z.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), n)
                    }
                    return Promise.reject(n)
                }
            }
              , ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().get(n, t).then(ne, te(n)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }()
              , re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().getWithCache(n, t).then(ne, te(n)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }()
              , se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().post(n, t, a).then(ne, te(n)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t, a) {
                    return e.apply(this, arguments)
                }
            }()
              , ie = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().put(n, t, a).then(ne, te(n)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t, a) {
                    return e.apply(this, arguments)
                }
            }()
              , oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ee().delete(n, t).then(ne, te(n)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }()
              , ce = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a) {
                    var r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = new FormData,
                                Object.entries(null !== t && void 0 !== t ? t : {}).forEach((function(e) {
                                    var n = (0,
                                    u.Z)(e, 2)
                                      , t = n[0]
                                      , a = n[1];
                                    a instanceof Blob ? r.append(t, a) : r.append(t, String(a))
                                }
                                )),
                                e.abrupt("return", se(n, r, a));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t, a) {
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
            var ue = t(15671)
              , de = t(43144)
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
                    value: function(e, n) {
                        this.store.set(e, {
                            value: n,
                            timestamp: Date.now()
                        })
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        var n = this.store.get(e);
                        return n ? n.value : void 0
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
                    value: function(e, n) {
                        var t = this.store.get(e);
                        return !t || Date.now() - t.timestamp > n
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
            const me = _e.getInstance();
            function pe(e, n) {
                return function() {
                    var t = (0,
                    l.Z)((0,
                    c.Z)().mark((function t(a, r) {
                        var s;
                        return (0,
                        c.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (s = "cache_".concat(a, "_").concat(JSON.stringify(r)),
                                    !me.hasItem(s) || me.isItemExpired(s, n)) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", e(a, r, !0));
                                case 3:
                                    return t.abrupt("return", e(a, r, !1));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }
            function fe() {
                var e, n;
                return (null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n ? void 0 : n.initData) || ""
            }
            function xe(e, n, t) {
                return he.apply(this, arguments)
            }
            function he() {
                return (he = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a) {
                    var r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                le.get(n, (0,
                                k.Z)((0,
                                k.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": fe()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                me.setItem(t, r),
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
            function ve(e, n, t) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a) {
                    var r, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(n, "_").concat(JSON.stringify(t)),
                                !a || !me.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = me.getItem(r),
                                xe(n, r, t).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", xe(n, r, t));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ke(e, n, t, a) {
                return je.apply(this, arguments)
            }
            function je() {
                return (je = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a, r) {
                    var s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                le.post(n, t, (0,
                                k.Z)((0,
                                k.Z)({}, r || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": fe()
                                    }
                                }));
                            case 2:
                                return s = e.sent,
                                me.setItem(a, s),
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
            function Ne(e, n, t, a) {
                return Ce.apply(this, arguments)
            }
            function Ce() {
                return (Ce = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t, a, r) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(n, "_").concat(JSON.stringify(t)),
                                !me.hasItem(s) || !a) {
                                    e.next = 5;
                                    break
                                }
                                return i = me.getItem(s),
                                ke(n, t, s, r).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", ke(n, t, s, r));
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
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/info"), n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , ye = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/assess"), n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t) {
                    var a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(we, "/game/racer/invitee-list"), {
                                    params: n
                                }, t);
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
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }()
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    var t, a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = pe(ve, 1e4),
                                e.next = 4,
                                t("".concat(we, "/game/racer/leaderboard/friends"), {
                                    params: n
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
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Te = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    var t, a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = pe(ve, 3e5),
                                e.next = 4,
                                t("".concat(we, "/game/racer/leaderboard/global"), {
                                    params: n
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
                return function(n) {
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
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(we, "/game/racer/boosts"), {}, n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/boost"), n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(we, "/game/racer/group-tasks"), {}, n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Ie = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/task"), n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(we, "/game/racer/task-context"), n));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , Le = function(e) {
                return e[e.NotStarted = 0] = "NotStarted",
                e[e.InProgress = 1] = "InProgress",
                e[e.Ended = 2] = "Ended",
                e
            }({})
              , Ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var n, t, a, r, s, i = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = i.length > 0 && void 0 !== i[0] && i[0],
                                t = i.length > 1 && void 0 !== i[1] ? i[1] : {
                                    isRecheckBinding: !1
                                },
                                e.next = 4,
                                Ne("".concat(we, "/game/racer/account-binding"), t, n);
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
                    var n, t, a, r, s = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = s.length > 0 && void 0 !== s[0] && s[0],
                                e.next = 3,
                                ve("".concat(we, "/game/racer/campaigns"), {}, n);
                            case 3:
                                if (t = e.sent,
                                a = t.code,
                                r = t.data,
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
                    var n, t = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.length > 0 && void 0 !== t[0] && t[0],
                                e.abrupt("return", ve("".concat(we, "/game/racer/airdrop/tasks"), {}, n));
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
              , Ue = t(55528);
            function Me(e) {
                for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                    t[a - 1] = arguments[a];
                return function() {
                    for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, t.concat(a))
                }
            }
            var Ge = {
                Rewards: Me(Ae, !0),
                Friends: Me(Pe, {
                    pageNo: 1
                }),
                Boost: Me(Se, !0),
                Task: Me(Be, !0),
                Invitee: Me(Ze, {
                    pageNo: 1
                }, !0),
                Global: Me(Te, {
                    pageNo: 1
                })
            }
              , We = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Ve = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n) {
                    var t;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (0 !== n.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return t = n.shift(),
                                e.prev = 3,
                                e.next = 6,
                                new Promise((function(e) {
                                    var n = Math.floor(1e3 * Ue.k.mathRandom()) + 500;
                                    setTimeout(e, n)
                                }
                                ));
                            case 6:
                                t && Ge[t] && (a = Ge[t],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && z.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                Ve(n);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                        var a
                    }
                    ), e, null, [[3, 9]])
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }();
            function He() {
                Ve(We).catch((function(e) {
                    e instanceof Error && z.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
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
              , ze = function(e) {
                var n, t = e.children, r = (0,
                a.useState)(0), s = (0,
                u.Z)(r, 2), i = s[0], o = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], f = (0,
                a.useState)(0), x = (0,
                u.Z)(f, 2), h = x[0], v = x[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], C = k[1], w = (0,
                a.useState)(0), b = (0,
                u.Z)(w, 2), y = b[0], P = b[1], T = (0,
                a.useState)(0), O = (0,
                u.Z)(T, 2), S = O[0], E = O[1], B = (0,
                a.useState)(0), R = (0,
                u.Z)(B, 2), L = R[0], A = R[1], D = (0,
                a.useState)(""), F = (0,
                u.Z)(D, 2), U = F[0], M = F[1], G = (0,
                a.useState)({}), W = (0,
                u.Z)(G, 2), V = W[0], H = W[1], Y = (0,
                a.useState)(!0), q = (0,
                u.Z)(Y, 2), Q = q[0], $ = q[1], ee = I(), ne = ee.username, te = ee.startParam, ae = (0,
                a.useState)(""), re = (0,
                u.Z)(ae, 2), se = re[0], ie = re[1], oe = (0,
                a.useState)(!1), ce = (0,
                u.Z)(oe, 2), le = ce[0], ue = ce[1], de = (0,
                a.useState)(0), _e = (0,
                u.Z)(de, 2), me = _e[0], pe = _e[1], fe = (0,
                a.useState)(!1), xe = (0,
                u.Z)(fe, 2), he = xe[0], ve = xe[1], ge = (0,
                a.useState)(), ke = (0,
                u.Z)(ge, 2), je = ke[0], Ne = ke[1], Ce = (0,
                a.useState)(!1), we = (0,
                u.Z)(Ce, 2), ye = we[0], Ze = we[1], Pe = (0,
                a.useState)(!1), Te = (0,
                u.Z)(Pe, 2), Oe = Te[0], Se = Te[1], Ee = null !== (n = new K.Z((te || "").replace("_", "=")).get("linkCode")) && void 0 !== n ? n : "", Be = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var n, t;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                be({
                                    extUserName: ne,
                                    linkCode: Ee
                                });
                            case 3:
                                n = e.sent,
                                (t = n.data) && (o(Math.max(t.balancePoints, 0)),
                                p(Math.max(t.accumPoints, 0)),
                                v(t.basePoint),
                                C(t.autopilotPointsPerHour),
                                M(t.linkCode),
                                P(t.numChances),
                                A(t.secondToRefresh),
                                E(t.numChancesTotal),
                                ue(!t.isUnderRiskControl && t.isShowAutopilotGainedPoint),
                                Se(Boolean(t.context.isShowNewbieCredit)),
                                ve(t.isUnderRiskControl),
                                pe(t.autopilotPoints),
                                Ne({
                                    activityEndTime: t.context.activityEndTime,
                                    isShowActivityFlag: t.context.isShowActivityFlag && !t.isUnderRiskControl
                                }),
                                H(t.context),
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
                ))), [Ee, ne]);
                (0,
                a.useEffect)((function() {
                    Ze(Boolean(null === je || void 0 === je ? void 0 : je.isShowActivityFlag))
                }
                ), [null === je || void 0 === je ? void 0 : je.isShowActivityFlag]),
                (0,
                a.useEffect)((function() {
                    Be().then(He).catch((function(e) {
                        e instanceof Error && z.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [Be]),
                (0,
                a.useEffect)((function() {
                    var e = new X.Z(L);
                    return L > 0 ? (e.start(),
                    e.addEventListener(X.Z.Event.UPDATE, (function(e) {
                        ie("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(X.Z.Event.FINISH, (function() {
                        ie(""),
                        Be()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    ie("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [L, Be]),
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
                  , Re = (0,
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
                  , Le = (0,
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
                  , Ue = (0,
                a.useMemo)((function() {
                    return {
                        isLoading: Q,
                        points: i,
                        accumPoints: m,
                        numChances: y,
                        numChancesTotal: S,
                        countdownDisplay: se,
                        updateGameInfo: Ie,
                        linkCode: U,
                        updateGameInfoFromServer: Re,
                        isShowAutopilotGainedPoint: le,
                        autopilotPoints: me,
                        isShowNewbie: Oe,
                        hideNewbie: Ae,
                        hideAutopilotSheet: Le,
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
                ), [Q, i, m, y, S, se, Ie, U, Re, le, me, Le, Oe, Ae, he, De, je, ye, Fe, V, h, j]);
                return (0,
                N.jsx)(Ye.Provider, {
                    value: Ue,
                    children: t
                })
            }
              , Xe = t(56824);
            t(8911);
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
                N.jsx)(Xe.default, (0,
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
                var n = Xe.default.show((0,
                k.Z)((0,
                k.Z)({}, qe), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Je.topPadding
                    }),
                    onClose: function() {
                        n.destroy()
                    }
                }, e));
                return n
            };
            const en = "PrimaryButton_button__SJFHA"
              , nn = "PrimaryButton_buttonText__19AJ7";
            var tn = ["text", "className"]
              , an = function(e) {
                var n = e.text
                  , t = e.className
                  , a = (0,
                w.Z)(e, tn);
                return (0,
                N.jsx)(H.default, (0,
                k.Z)((0,
                k.Z)({
                    category: H.default.CATEGORY.fill,
                    type: H.default.TYPE.primary,
                    size: H.default.SIZE.lg,
                    className: y()(en, t),
                    contentClassName: nn
                }, a), {}, {
                    children: n
                }))
            }
              , rn = t(4942);
            const sn = "Timer_timer__j+KcR"
              , on = "Timer_show__GFyz+"
              , cn = "Timer_label__nxjo+"
              , ln = "Timer_separator__CFi1G"
              , un = "Timer_timerValue__CaRO2";
            var dn = function(e) {
                var n = e.endTime
                  , t = e.label
                  , r = (0,
                a.useRef)(new X.Z.Absolute(n,{
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
                    return e.start().addEventListener(X.Z.Event.UPDATE, (function(e) {
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
                    className: y()(sn, (0,
                    rn.Z)({}, on, o)),
                    children: [t && (0,
                    N.jsx)("span", {
                        className: cn,
                        children: t
                    }), Number(null === o || void 0 === o ? void 0 : o.day) > 0 && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("span", {
                            className: un,
                            children: null === o || void 0 === o ? void 0 : o.day
                        }), (0,
                        N.jsx)("span", {
                            className: ln,
                            children: ":"
                        })]
                    }), (0,
                    N.jsx)("span", {
                        className: un,
                        children: null === o || void 0 === o ? void 0 : o.hour
                    }), (0,
                    N.jsx)("span", {
                        className: ln,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: un,
                        children: null === o || void 0 === o ? void 0 : o.minute
                    }), (0,
                    N.jsx)("span", {
                        className: ln,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: un,
                        children: null === o || void 0 === o ? void 0 : o.second
                    })]
                })
            };
            const _n = "EventPopover_eventPopoverWrapper__65bP-"
              , mn = "EventPopover_eventPopover__B0CAq"
              , pn = "EventPopover_eventPopoverDesc__+lNFw"
              , fn = "EventPopover_eventPopoverBtn__BKIwS"
              , xn = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , hn = "EventPopover_eventPopoverArrow__M+sYF"
              , vn = "EventPopover_eventDetailsContainer__G1KfS"
              , gn = "EventPopover_title__Tie4q"
              , kn = "EventPopover_description__tVAy9"
              , jn = "EventPopover_disclaimer__jFZC3"
              , Nn = "EventPopover_continueBtn__S2Sj-"
              , Cn = "EventPopover_eventDetails__5xDB0"
              , wn = "EventPopover_eventImg__0yapf";
            var bn = function(e) {
                var n = e.children
                  , t = Ke()
                  , a = t.activity
                  , r = t.isShowActivityDetails
                  , s = t.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(V.Z, {
                        zIndex: 998,
                        layerClassName: _n,
                        popperClassName: mn,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: pn,
                        description: (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(H.default, {
                                className: fn,
                                type: H.default.TYPE.primary,
                                category: H.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                N.jsx)(P.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: xn
                                }),
                                iconType: H.default.ICON_POSITION.tailing,
                                children: (0,
                                Z.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            N.jsx)("svg", {
                                className: hn,
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
                        children: n
                    }), (0,
                    N.jsx)(Qe, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        N.jsxs)("div", {
                            className: vn,
                            children: [(0,
                            N.jsxs)("div", {
                                className: Cn,
                                children: [(0,
                                N.jsx)(Y.Z, {
                                    pictureClassName: wn,
                                    className: wn,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                N.jsx)("h2", {
                                    className: gn,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                N.jsx)("p", {
                                    className: kn,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                N.jsx)(dn, {
                                    endTime: i,
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                N.jsx)("p", {
                                    className: jn,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            N.jsx)(an, {
                                className: Nn,
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
            const yn = "Navbar_navbar__LF3-M"
              , Zn = "Navbar_link__qX0Sf"
              , Pn = "Navbar_active__TCbF8"
              , Tn = "Navbar_linkIcon__GtH54"
              , On = "Navbar_linkText__Szxi-"
              , Sn = "Navbar_newIndicator__IrNNw";
            var En = ["children", "className"]
              , Bn = ["iconName", "label", "onClick", "showNewIndicator"]
              , In = function(e) {
                var n = e.children
                  , t = e.className
                  , a = (0,
                w.Z)(e, En)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                N.jsx)(s.Link, {
                    className: t,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: n
                })
            }
              , Rn = function(e) {
                var n = e.iconName
                  , t = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , o = (0,
                w.Z)(e, Bn)
                  , c = (0,
                s.useRouteMatch)({
                    path: o.to,
                    exact: o.to === L
                });
                return (0,
                N.jsxs)(In, {
                    className: y()(Zn, c && Pn),
                    to: o.to,
                    onClick: a,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: n,
                        className: Tn
                    }), i && (0,
                    N.jsx)("span", {
                        className: Sn
                    }), (0,
                    N.jsx)("span", {
                        className: On,
                        children: t
                    })]
                })
            }
              , Ln = function() {
                var e = {
                    telegramid: I().uid
                };
                return (0,
                N.jsxs)("div", {
                    className: yn,
                    children: [(0,
                    N.jsx)(bn, {
                        children: (0,
                        N.jsx)(Rn, {
                            iconName: "okx-growth-home",
                            to: L,
                            label: (0,
                            Z.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    N.jsx)(Rn, {
                        iconName: "okx-growth-leaderboard",
                        to: U,
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
                    N.jsx)(Rn, {
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
                    N.jsx)(Rn, {
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
                    N.jsx)(Rn, {
                        iconName: "okx-growth-surprises",
                        to: M,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            };
            var An = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , Dn = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Fn = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({});
            function Un(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            const Mn = "RiskControl_title__h9Z0T";
            var Gn = function() {
                var e = Ke()
                  , n = e.isShowRiskControlSheet
                  , t = e.hideRiskControlSheet;
                return (0,
                N.jsx)(Qe, {
                    visible: n,
                    onClose: t,
                    children: (0,
                    N.jsx)("div", {
                        className: Mn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , Wn = t(8031)
              , Vn = new (function() {
                return (0,
                de.Z)((function e() {
                    var n = this;
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
                        n.connection.onSocketConnected((function() {
                            n.onConnected()
                        }
                        )),
                        n.connection.connect(),
                        n.addPageHideEvent()
                    }
                    ,
                    this.onConnected = function() {
                        n.connection.sendChannel(JSON.stringify(n.channelSubscribe)),
                        n.connection.setPushDataResolver(n.onResolve)
                    }
                    ,
                    this.onResolve = function(e) {
                        var t = e.arg
                          , a = e.data;
                        if (t.channel === n.channel && t.instId === n.instId) {
                            var r = ((null === a || void 0 === a ? void 0 : a[0]) || {}).last;
                            r && n.handleList.forEach((function(e) {
                                e(Number(r))
                            }
                            ))
                        }
                    }
                    ,
                    this.disconnect = function() {
                        n.connection.disconnect()
                    }
                    ,
                    this.addCallback = function(e) {
                        n.handleList.push(e)
                    }
                    ,
                    this.connection = new Wn.Z({
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
              , Hn = (0,
            a.createContext)(Vn)
              , Yn = function(e) {
                var n = e.children;
                return (0,
                N.jsx)(Hn.Provider, {
                    value: Vn,
                    children: n
                })
            }
              , Kn = (0,
            a.createContext)(null)
              , zn = function() {
                return (0,
                a.useContext)(Kn)
            }
              , Xn = function(e) {
                var n = e.children
                  , t = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(t, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useContext)(Hn);
                return (0,
                a.useEffect)((function() {
                    o.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                N.jsx)(Kn.Provider, {
                    value: s,
                    children: n
                })
            }
              , Jn = t(46430)
              , qn = "racer"
              , Qn = function() {
                var e;
                if (!(0,
                Q.y)())
                    return Jn.Z.getInstance(qn) || Jn.Z.init({
                        project: qn
                    }),
                    null !== (e = Jn.Z.getInstance(qn)) && void 0 !== e ? e : Jn.Z
            }
              , $n = "guessRecords_new";
            function et(e) {
                var n = Qn().get($n) || [];
                n.unshift(e),
                Qn().set($n, n.slice(0, 5))
            }
            var nt = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , tt = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: nt.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: nt.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , at = (0,
            a.createContext)(tt)
              , rt = function() {
                return (0,
                a.useContext)(at)
            }
              , st = function(e) {
                var n = e.children
                  , t = I().uid
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
                  , m = _[0]
                  , p = _[1]
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
                a.useState)(nt.NONE)
                  , b = (0,
                u.Z)(w, 2)
                  , y = b[0]
                  , P = b[1]
                  , T = zn()
                  , S = Ke().updateGameInfo
                  , E = (0,
                a.useRef)(nt.NONE)
                  , B = (0,
                a.useRef)(1)
                  , R = (0,
                a.useRef)(10)
                  , L = (0,
                a.useRef)(null)
                  , A = (0,
                a.useRef)(null)
                  , D = (0,
                a.useRef)(null)
                  , F = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var n, t, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = E.current === nt.UP ? 1 : 0,
                                e.next = 4,
                                ye({
                                    predict: n
                                });
                            case 4:
                                t = e.sent,
                                (a = t.data) && (C(a.won),
                                S({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                B.current = a.multiplier,
                                R.current = a.basePoint,
                                L.current = Number(a.changeRate),
                                A.current = a.prevPrice,
                                D.current = a.currentPrice,
                                et({
                                    curCombo: a.curCombo,
                                    won: a.won,
                                    predict: n,
                                    date: (new Date).valueOf()
                                })),
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                C(null),
                                L.current = null,
                                J(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = nt.NONE,
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
                        var n = 5;
                        p(n),
                        e = setInterval((function() {
                            p(n -= 1),
                            0 === n && (e && clearInterval(e),
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
                            P(T === h ? nt.NONE : e ? nt.UP : nt.DOWN)
                        } else
                            v(T)
                }
                ), [h, i, T]);
                var U = (0,
                a.useCallback)((function(e) {
                    C(null),
                    o(!0),
                    E.current = e,
                    L.current = null;
                    var n = {
                        telegramid: t
                    };
                    e === nt.UP && function() {
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
                    }(n),
                    e === nt.DOWN && function() {
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
                    }(n)
                }
                ), [])
                  , M = (0,
                a.useMemo)((function() {
                    return {
                        countdown: m,
                        onButtonClick: U,
                        result: j,
                        isPending: i,
                        currentTrend: y,
                        multiplier: B.current,
                        basePoints: R.current,
                        predict: E.current,
                        changeRate: L.current,
                        prevPrice: A.current,
                        currentPrice: D.current
                    }
                }
                ), [m, y, i, B, U, j]);
                return (0,
                N.jsx)(at.Provider, {
                    value: M,
                    children: n
                })
            };
            const it = "NewCampaigns_container__gO1Ko"
              , ot = "NewCampaigns_img__Or37G"
              , ct = "NewCampaigns_title__Lx+PB"
              , lt = "NewCampaigns_desc__U9VKz"
              , ut = "NewCampaigns_btn__xIIk1";
            var dt = function() {
                var e = (0,
                s.useHistory)()
                  , n = (0,
                s.useLocation)()
                  , t = !1
                  , a = function() {};
                return (0,
                N.jsxs)(Qe, {
                    visible: t,
                    onClose: a,
                    containerClassName: it,
                    children: [(0,
                    N.jsx)(Y.Z, {
                        pictureClassName: ot,
                        className: ot,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    N.jsx)("p", {
                        className: ct,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    N.jsx)("p", {
                        className: lt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    N.jsx)(an, {
                        className: ut,
                        onClick: function() {
                            e.push({
                                pathname: M,
                                hash: n.hash
                            })
                        },
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            }
              , _t = t(94595)
              , mt = t(96450)
              , pt = 2e3
              , ft = 500;
            function xt(e) {
                return (Math.abs(e) < 1e-4 ? mt.yx.ceilTruncate : mt.yx.floorTruncate)(e, 4)
            }
            const ht = "GuessResult_container__ECdpL"
              , vt = "GuessResult_title__fzYxg"
              , gt = "GuessResult_multiplier__yRHWm"
              , kt = "GuessResult_description__R2fup"
              , jt = "GuessResult_detailsIcon__ZE7Ry"
              , Nt = "GuessResult_changeRateContainer__a5-N7"
              , Ct = "GuessResult_label__+b5Nz"
              , wt = "GuessResult_changeRate__yhVz3"
              , bt = "GuessResult_up__5vYDR"
              , yt = "GuessResult_down__fa-oP"
              , Zt = "GuessResult_priceChange__xr6e8"
              , Pt = "GuessResult_price__Vk+bY";
            function Tt(e) {
                return (0,
                _t.xG)((0,
                _t.uf)(mt.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var Ot = function(e) {
                var n = e.className
                  , t = rt()
                  , r = t.result
                  , s = t.multiplier
                  , i = t.changeRate
                  , o = t.prevPrice
                  , c = t.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , m = d[1];
                return (0,
                a.useEffect)((function() {
                    var e, n;
                    if (null !== r) {
                        var t, a, s, i;
                        if (null !== (t = window) && void 0 !== t && null !== (a = t.Telegram) && void 0 !== a && a.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, r ? "success" : "error");
                        e = setTimeout((function() {
                            m(!0),
                            n = setTimeout((function() {
                                m(!1)
                            }
                            ), pt)
                        }
                        ), ft)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(n)
                    }
                }
                ), [r]),
                (0,
                N.jsx)(N.Fragment, {
                    children: _ && (0,
                    N.jsxs)("div", {
                        className: y()(n, ht),
                        children: [(0,
                        N.jsx)("p", {
                            className: gt,
                            children: r ? (0,
                            N.jsxs)("span", {
                                className: jt,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            N.jsx)("span", {
                                className: jt,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        N.jsx)("h2", {
                            className: vt,
                            children: (0,
                            Z.O4)(r ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        N.jsxs)("div", {
                            className: kt,
                            children: [null !== i && (0,
                            N.jsxs)("p", {
                                className: Nt,
                                children: [(0,
                                N.jsx)("span", {
                                    className: Ct,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                N.jsx)("span", {
                                    className: y()(wt, (0,
                                    rn.Z)((0,
                                    rn.Z)({}, bt, i > 0), yt, i < 0)),
                                    children: (0,
                                    _t.uf)(xt(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            N.jsx)("p", {
                                className: Zt,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    N.jsx)("span", {
                                        className: Pt,
                                        children: Tt(o)
                                    }),
                                    currentPrice: (0,
                                    N.jsx)("span", {
                                        className: Pt,
                                        children: Tt(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const St = "TncButton_termsAndConditions__MyIpV";
            var Et = function(e) {
                var n = e.className;
                return (0,
                N.jsx)("button", {
                    className: y()(St, n),
                    onClick: function() {
                        var e, n;
                        null === (e = window) || void 0 === e || null === (n = e.Telegram) || void 0 === n || n.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                })
            };
            const Bt = "AutoPilot_title__NJa0C"
              , It = "AutoPilot_button__Sg42v";
            var Rt = function() {
                var e = Ke()
                  , n = e.isShowAutopilotGainedPoint
                  , t = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                N.jsxs)(Qe, {
                    visible: n,
                    onClose: a,
                    children: [(0,
                    N.jsx)("div", {
                        className: Bt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            _t.uf)(t)
                        })
                    }), (0,
                    N.jsx)(an, {
                        className: It,
                        onClick: a,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const Lt = "BackgroundVideo_container__J5sO2"
              , At = "BackgroundVideo_muteButton__04Huj"
              , Dt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Ft = "BackgroundVideo_staticImage__EpRTb"
              , Ut = "BackgroundVideo_hide__ZXYN9";
            var Mt, Gt, Wt, Vt, Ht, Yt, Kt = "backgroundVideoSoundOn", zt = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Xt = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }], Jt = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }], qt = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(zt)
            }, Qt = function() {
                var e = rt().isPending
                  , n = (0,
                a.useRef)(null)
                  , t = (0,
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
                  , m = d[1]
                  , p = (0,
                a.useState)(!1)
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = Qn()
                  , g = (0,
                a.useState)((function() {
                    var e = v.get(Kt);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , C = j[0]
                  , w = j[1];
                (0,
                a.useEffect)((function() {
                    n.current && (e && (h(!1),
                    n.current.currentTime = 0,
                    n.current.play().then((function() {
                        c(!0)
                    }
                    )).catch((function() {
                        c(!1)
                    }
                    ))),
                    n.current.onended = function() {
                        var e;
                        h(!0),
                        null === (e = t.current) || void 0 === e || e.play().then((function() {
                            m(!0)
                        }
                        )).catch((function() {
                            m(!1)
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
                    className: Lt,
                    children: [(0,
                    N.jsx)(H.default, {
                        category: H.default.CATEGORY.fill,
                        type: H.default.TYPE.quaternary,
                        size: H.default.SIZE.md,
                        className: At,
                        strictCircle: !0,
                        onClick: function() {
                            w((function(e) {
                                return v.set(Kt, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: C ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Dt
                        })
                    }), (0,
                    N.jsx)(Y.Z, {
                        className: y()(Ft, (0,
                        rn.Z)({}, Ut, !b)),
                        src: "".concat(o.Z.cdnBaseUrl).concat(zt)
                    }), (0,
                    N.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, qt), {}, {
                        className: y()((0,
                        rn.Z)({}, Ut, !Z)),
                        ref: t,
                        loop: !0,
                        muted: !0,
                        children: Xt.map((function(e) {
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
                    k.Z)({}, qt), {}, {
                        className: y()((0,
                        rn.Z)({}, Ut, !T)),
                        ref: n,
                        muted: C,
                        children: Jt.map((function(e) {
                            return (0,
                            N.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }, $t = ["title", "titleId"];
            function ea() {
                return ea = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t)
                            ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }
                ,
                ea.apply(null, arguments)
            }
            function na(e, n) {
                var t = e.title
                  , r = e.titleId
                  , s = function(e, n) {
                    if (null == e)
                        return {};
                    var t, a, r = function(e, n) {
                        if (null == e)
                            return {};
                        var t = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (n.includes(a))
                                    continue;
                                t[a] = e[a]
                            }
                        return t
                    }(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            t = s[a],
                            n.includes(t) || {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                    return r
                }(e, $t);
                return a.createElement("svg", ea({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: n,
                    "aria-labelledby": r
                }, s), t ? a.createElement("title", {
                    id: r
                }, t) : null, Mt || (Mt = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Gt || (Gt = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Wt || (Wt = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Vt || (Vt = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Ht || (Ht = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Yt || (Yt = a.createElement("defs", null, a.createElement("filter", {
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
            var ta = a.forwardRef(na);
            t.p;
            var aa, ra, sa, ia, oa, ca, la = ["title", "titleId"];
            function ua() {
                return ua = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t)
                            ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }
                ,
                ua.apply(null, arguments)
            }
            function da(e, n) {
                var t = e.title
                  , r = e.titleId
                  , s = function(e, n) {
                    if (null == e)
                        return {};
                    var t, a, r = function(e, n) {
                        if (null == e)
                            return {};
                        var t = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (n.includes(a))
                                    continue;
                                t[a] = e[a]
                            }
                        return t
                    }(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            t = s[a],
                            n.includes(t) || {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                    return r
                }(e, la);
                return a.createElement("svg", ua({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: n,
                    "aria-labelledby": r
                }, s), t ? a.createElement("title", {
                    id: r
                }, t) : null, aa || (aa = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), ra || (ra = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), sa || (sa = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), ia || (ia = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), oa || (oa = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), ca || (ca = a.createElement("defs", null, a.createElement("filter", {
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
            var _a = a.forwardRef(da);
            t.p;
            const ma = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var pa, fa = function(e) {
                var n = e.className
                  , t = rt()
                  , r = t.onButtonClick
                  , s = t.isPending
                  , i = t.predict
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
                var m = function(e) {
                    var n, t, a;
                    s || d || (_(e === nt.UP ? nt.DOWN : nt.UP),
                    null !== (n = window) && void 0 !== n && null !== (t = n.Telegram) && void 0 !== t && null !== (a = t.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = o <= 0;
                return (0,
                N.jsxs)("div", {
                    className: n,
                    children: [(0,
                    N.jsx)("p", {
                        className: y()(ma.instructions, s && ma.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: ma.btnContainer,
                        children: [(0,
                        N.jsxs)("button", {
                            disabled: p || d === nt.UP,
                            onClick: function() {
                                return m(nt.UP)
                            },
                            type: "button",
                            className: y()(ma.btn, ma.upBtn, (0,
                            rn.Z)({}, ma.pressed, i === nt.UP)),
                            children: [(0,
                            N.jsx)(_a, {
                                className: y()(ma.btnGraphic, ma.upBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: ma.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: ma.arrow
                                })]
                            })]
                        }), (0,
                        N.jsxs)("button", {
                            disabled: p || d === nt.DOWN,
                            onClick: function() {
                                return m(nt.DOWN)
                            },
                            type: "button",
                            className: y()(ma.btn, ma.downBtn, (0,
                            rn.Z)({}, ma.pressed, i === nt.DOWN)),
                            children: [(0,
                            N.jsx)(ta, {
                                className: y()(ma.btnGraphic, ma.downBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: ma.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: ma.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, xa = ["title", "titleId"];
            function ha() {
                return ha = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t)
                            ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }
                ,
                ha.apply(null, arguments)
            }
            function va(e, n) {
                var t = e.title
                  , r = e.titleId
                  , s = function(e, n) {
                    if (null == e)
                        return {};
                    var t, a, r = function(e, n) {
                        if (null == e)
                            return {};
                        var t = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (n.includes(a))
                                    continue;
                                t[a] = e[a]
                            }
                        return t
                    }(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            t = s[a],
                            n.includes(t) || {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                    return r
                }(e, xa);
                return a.createElement("svg", ha({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: n,
                    "aria-labelledby": r
                }, s), t ? a.createElement("title", {
                    id: r
                }, t) : null, pa || (pa = a.createElement("g", {
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
            var ga = a.forwardRef(va);
            t.p;
            var ka = t(31301);
            t(27668);
            const ja = "FuelIndicator_fuelContainer__QIskL"
              , Na = "FuelIndicator_toTasksIcon__Y7exC"
              , Ca = "FuelIndicator_line__tWBfm"
              , wa = "FuelIndicator_description__EaUsa"
              , ba = "FuelIndicator_fuelIcon__I38Ss"
              , ya = "FuelIndicator_maxChances__OMSHl"
              , Za = "FuelIndicator_earnPtsMsg__PjtcT";
            var Pa, Ta, Oa = function(e) {
                var n = e.className
                  , t = Ke()
                  , a = t.numChances
                  , r = t.numChancesTotal;
                return (0,
                N.jsxs)("div", {
                    className: y()(n, ja),
                    children: [(0,
                    N.jsx)("span", {
                        className: ba,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    N.jsx)(ka.Z.Line, {
                        className: Ca,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r) : (0,
                    N.jsx)(In, {
                        to: D,
                        className: Za,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    N.jsxs)("p", {
                        className: wa,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        N.jsxs)(N.Fragment, {
                            children: ["/\xa0", (0,
                            N.jsx)("span", {
                                className: ya,
                                children: r
                            })]
                        })]
                    }), (0,
                    N.jsx)(In, {
                        to: D,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: Na
                        })
                    })]
                })
            }, Sa = ["title", "titleId"];
            function Ea() {
                return Ea = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t)
                            ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }
                ,
                Ea.apply(null, arguments)
            }
            function Ba(e, n) {
                var t = e.title
                  , r = e.titleId
                  , s = function(e, n) {
                    if (null == e)
                        return {};
                    var t, a, r = function(e, n) {
                        if (null == e)
                            return {};
                        var t = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (n.includes(a))
                                    continue;
                                t[a] = e[a]
                            }
                        return t
                    }(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < s.length; a++)
                            t = s[a],
                            n.includes(t) || {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                    return r
                }(e, Sa);
                return a.createElement("svg", Ea({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: n,
                    "aria-labelledby": r
                }, s), t ? a.createElement("title", {
                    id: r
                }, t) : null, Pa || (Pa = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Ta || (Ta = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var Ia = a.forwardRef(Ba);
            t.p;
            const Ra = "RefuelTimer_container__wtALO"
              , La = "RefuelTimer_description__sD+HM"
              , Aa = "RefuelTimer_timer__LL1+c";
            var Da = function(e) {
                var n = e.className
                  , t = Ke().countdownDisplay;
                return (0,
                N.jsxs)("div", {
                    className: y()(n, Ra),
                    children: [(0,
                    N.jsx)(Ia, {}), (0,
                    N.jsx)("p", {
                        className: La,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            N.jsx)("span", {
                                className: Aa,
                                children: t
                            })
                        })
                    })]
                })
            };
            const Fa = "CoinPrice_raceTrack__NZO2t"
              , Ua = "CoinPrice_run__f0UIF"
              , Ma = "CoinPrice_coinPriceContainer__YbeUE"
              , Ga = "CoinPrice_content__a-5Jl"
              , Wa = "CoinPrice_fuelIndicator__p+f1I"
              , Va = "CoinPrice_refuelTimer__tbWMw"
              , Ha = "CoinPrice_hide__bHhxJ"
              , Ya = "CoinPrice_label__yTNy0"
              , Ka = "CoinPrice_value__ZjRZz"
              , za = "CoinPrice_slotMachine__hUQKt"
              , Xa = "SlotMachine_row__a4TO0"
              , Ja = "SlotMachine_animate__-G4TR"
              , qa = "SlotMachine_column__aR0VE"
              , Qa = "SlotMachine_arrows__m1dhv"
              , $a = "SlotMachine_columnContainer__a76pd"
              , er = "SlotMachine_background__b9TMg"
              , nr = "SlotMachine_slot__jwCvC"
              , tr = "SlotMachine_staticColumn__O5zfB"
              , ar = "SlotMachine_sm__ZRCig"
              , rr = "SlotMachine_arrow__qOYmf"
              , sr = "SlotMachine_wentUp__z48TO"
              , ir = "SlotMachine_down__aYC8C"
              , or = "SlotMachine_stable__CDMLP"
              , cr = "SlotMachine_wentDown__1fYUS"
              , lr = "SlotMachine_up__IuiYV";
            var ur = function(e) {
                var n = e.animate
                  , t = e.result
                  , a = void 0 === t ? 0 : t
                  , r = e.columnStyle;
                return (0,
                N.jsxs)("div", {
                    className: $a,
                    children: [(0,
                    N.jsx)("div", {
                        className: er
                    }), (0,
                    N.jsxs)("div", {
                        className: qa,
                        style: r,
                        children: [(0,
                        N.jsx)("p", {
                            className: nr,
                            children: a
                        }), n && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)("p", {
                                className: nr,
                                children: "1"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "2"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "3"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "4"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "5"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "6"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "7"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "8"
                            }), (0,
                            N.jsx)("p", {
                                className: nr,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , dr = function() {
                var e = rt()
                  , n = e.changeRate
                  , t = e.isPending
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
                  , m = (0,
                a.useState)(!1)
                  , p = (0,
                u.Z)(m, 2)
                  , f = p[0]
                  , x = p[1];
                return (0,
                a.useEffect)((function() {
                    t && x(!0)
                }
                ), [t]),
                (0,
                a.useEffect)((function() {
                    var e;
                    null !== n ? (_(null === (e = n) ? null : e > 0 ? nt.UP : 0 === e ? nt.NONE : nt.DOWN),
                    o(String(Math.abs(Number(xt(n)))).split("").filter((function(e) {
                        return "." !== e
                    }
                    )).map((function(e) {
                        return parseInt(e, 10)
                    }
                    ))),
                    x(!1)) : _(null)
                }
                ), [n]),
                (0,
                N.jsxs)("div", {
                    className: y()(Xa, f && Ja),
                    children: [(0,
                    N.jsx)("div", {
                        className: $a,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(Qa, (0,
                            rn.Z)((0,
                            rn.Z)((0,
                            rn.Z)({}, sr, d === nt.UP), cr, d === nt.DOWN), or, d === nt.NONE)),
                            children: [(0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: y()(rr, lr)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: y()(rr, or)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: y()(rr, ir)
                            })]
                        })
                    }), (0,
                    N.jsx)(ur, {
                        animate: f,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: tr,
                        children: "."
                    }), (0,
                    N.jsx)(ur, {
                        animate: f,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(ur, {
                        animate: f,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    N.jsx)(ur, {
                        animate: f,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(ur, {
                        animate: f,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: y()(tr, ar),
                        children: "%"
                    })]
                })
            }
              , _r = function() {
                var e = zn()
                  , n = rt()
                  , t = n.isPending
                  , r = n.changeRate
                  , s = Ke().countdownDisplay
                  , i = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                a.useEffect)((function() {
                    t && l(!0)
                }
                ), [t]),
                (0,
                a.useEffect)((function() {
                    var e, n = function() {
                        e && clearTimeout(e)
                    };
                    return t || (null === r ? l(!1) : e = setTimeout((function() {
                        l(!1)
                    }
                    ), ft)),
                    n
                }
                ), [r, t]);
                var d = e ? "$".concat((0,
                _t.uf)(mt.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !t;
                return (0,
                N.jsxs)("div", {
                    className: Ma,
                    children: [(0,
                    N.jsx)(ga, {
                        className: y()(Fa, t && Ua)
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Ga, c && Ha),
                        children: [(0,
                        N.jsx)("p", {
                            className: Ya,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        N.jsx)("p", {
                            className: Ka,
                            children: d
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Ga, !c && Ha),
                        children: [(0,
                        N.jsxs)("p", {
                            className: Ya,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        N.jsx)("div", {
                            className: za,
                            children: (0,
                            N.jsx)(dr, {})
                        })]
                    }), (0,
                    N.jsx)(Oa, {
                        className: Wa
                    }), (0,
                    N.jsx)("div", {
                        className: y()(Va, !_ && Ha),
                        children: (0,
                        N.jsx)(Da, {})
                    })]
                })
            };
            const mr = "LandingPage_container__pU2cC"
              , pr = "LandingPage_resultOverlay__WSYZb"
              , fr = "LandingPage_disclaimer__pVRHC"
              , xr = "LandingPage_recordsBtnContainer__Anr4Y"
              , hr = "LandingPage_backgroundVideo__flTkH"
              , vr = "LandingPage_content__D0ZLW"
              , gr = "LandingPage_points__Ruq4j"
              , kr = "LandingPage_coinPrice__nJ0nj"
              , jr = "LandingPage_btnContainer__IEll8"
              , Nr = "LandingPage_termsAndConditions__MdClU";
            var Cr = t(71979);
            const wr = "NewbieWelcome_title__48Py5"
              , br = "NewbieWelcome_desc__q7GHz"
              , yr = "NewbieWelcome_button__im+B1"
              , Zr = "NewbieWelcome_pointsBox__gOjMh"
              , Pr = "NewbieWelcome_points__4t75l"
              , Tr = "NewbieWelcome_animation__tf9Dj";
            var Or = function() {
                var e = r().useRef(null)
                  , n = function() {
                    var e = o.Z.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                Cr.Z)((0,
                l.Z)((0,
                c.Z)().mark((function a() {
                    return (0,
                    c.Z)().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2,
                                t.e(5340).then(t.t.bind(t, 5340, 23));
                            case 2:
                                a.sent.loadAnimation({
                                    container: e.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !0,
                                    path: n()
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
                        className: Tr
                    })
                })
            }
              , Sr = function() {
                var e = Ke()
                  , n = e.hideNewbie
                  , t = e.isShowNewbie;
                return (0,
                N.jsxs)(Qe, {
                    visible: t,
                    onClose: n,
                    renderWindow: function(e) {
                        return (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(Or, {}), (0,
                            N.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    N.jsx)("div", {
                        className: Zr,
                        children: (0,
                        N.jsx)("img", {
                            src: "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: Pr
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: wr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    N.jsx)("div", {
                        className: br,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    N.jsx)(an, {
                        className: yr,
                        onClick: n,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , Er = t(22387);
            const Br = "UserPointCounter_pointCounter__-QAj8"
              , Ir = "UserPointCounter_hide__o4qTQ"
              , Rr = "UserPointCounter_points__d3HeG"
              , Lr = "UserPointCounter_title__B-gN-"
              , Ar = "UserPointCounter_countdown__Z7xGo"
              , Dr = "UserPointCounter_value__2a23E";
            var Fr = function() {
                var e = Ke().points
                  , n = (0,
                Er.Z)(e)
                  , t = rt()
                  , r = t.isPending
                  , s = t.countdown
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
                a.useCallback)((function(e, n, t) {
                    e <= n && (t((0,
                    _t.uf)(String(e))),
                    requestAnimationFrame((function() {
                        var a = function(e, n) {
                            var t = n - e;
                            return Math.max(1, Math.floor(t / 10))
                        }(e, n);
                        _(e + a, n, t)
                    }
                    )))
                }
                ), []);
                return (0,
                a.useEffect)((function() {
                    var t;
                    if (n === e)
                        return function() {}
                        ;
                    function a(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (t = i.current) || void 0 === t ? void 0 : t.innerText) || !n)
                        return _(0, e, a),
                        function() {}
                        ;
                    var r = setTimeout((function() {
                        _(n || 0, e, a)
                    }
                    ), 2500);
                    return function() {
                        clearTimeout(r)
                    }
                }
                ), [_, e, n]),
                (0,
                N.jsxs)("div", {
                    className: Br,
                    children: [(0,
                    N.jsxs)("p", {
                        className: y()(Lr, l && Ir),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    N.jsx)("p", {
                        ref: i,
                        className: y()(Rr, l && Ir),
                        children: "0"
                    }), (0,
                    N.jsxs)("p", {
                        className: y()(Ar, !l && Ir),
                        children: ["00:0", (0,
                        N.jsx)("span", {
                            className: Dr,
                            children: s
                        })]
                    })]
                })
            }
              , Ur = t(39136)
              , Mr = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = n.firstDigits
                  , a = void 0 === t ? 6 : t
                  , r = n.lastDigits
                  , s = void 0 === r ? 3 : r
                  , i = n.placeholder
                  , o = void 0 === i ? "..." : i;
                if (e && e.length > 20) {
                    var c = e.substring(0, a)
                      , l = e.substring(e.length - s, e.length);
                    return "".concat(c).concat(o).concat(l)
                }
                return e
            }
              , Gr = t(52008)
              , Wr = function(e, n) {
                var t, a = new Promise((function(a) {
                    e.setConnectRequestParameters({
                        state: "ready",
                        value: {
                            tonProof: n
                        }
                    }),
                    e.openModal(),
                    t = e.onModalStateChange(function() {
                        var n = (0,
                        l.Z)((0,
                        c.Z)().mark((function n(r) {
                            var s, i, o, l, u, d, _, m, p, f, x, h, v, g;
                            return (0,
                            c.Z)().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        "closed" === r.status && (s = null === e || void 0 === e ? void 0 : e.wallet,
                                        o = (i = s).account,
                                        l = o.address,
                                        u = o.publicKey,
                                        d = i.connectItems,
                                        _ = Gr.Address.parse(l),
                                        m = _.toString({
                                            urlSafe: !0,
                                            bounceable: !1,
                                            testOnly: !1
                                        }),
                                        p = d.tonProof,
                                        f = p.proof,
                                        x = f.signature,
                                        h = f.payload,
                                        v = f.domain,
                                        g = f.timestamp,
                                        a({
                                            tonAddress: m,
                                            publicKey: u,
                                            signature: x,
                                            msg: JSON.stringify({
                                                payload: h,
                                                domain: null === v || void 0 === v ? void 0 : v.value,
                                                timestamp: g
                                            })
                                        }),
                                        t && t());
                                    case 1:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        )));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }())
                }
                )), r = new Promise((function(e, n) {
                    var a = setTimeout((function() {
                        clearTimeout(a),
                        t && t(),
                        n(new Error("Promise timed out"))
                    }
                    ), 6e4)
                }
                ));
                return {
                    promise: Promise.race([a, r]),
                    unsubscribe: function() {
                        return t && t()
                    }
                }
            }
              , Vr = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(n, t) {
                    var a, r, s, i, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!n) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 1,
                                a = Wr(n, t),
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
                                e.t0 instanceof Error && z.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }();
            const Hr = "ViewWalletButton_button__WbNMO"
              , Yr = "ViewWalletButton_btnIcon__W5IFc";
            var Kr = function() {
                var e = Ke()
                  , n = e.context
                  , t = e.updateGameInfoFromServer
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
                        var a, r, l, d, _, m, p;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!n.tonAddress || !n.tonDeeplink) {
                                        e.next = 4;
                                        break
                                    }
                                    null === (a = window) || void 0 === a || null === (r = a.Telegram) || void 0 === r || r.WebApp.openLink(n.tonDeeplink),
                                    e.next = 26;
                                    break;
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    Vr(s, i);
                                case 7:
                                    if (!(l = e.sent)) {
                                        e.next = 19;
                                        break
                                    }
                                    return d = (0,
                                    u.Z)(l, 2),
                                    _ = d[0],
                                    m = d[1],
                                    o.current = m,
                                    p = {
                                        id: 9,
                                        taskContext: JSON.stringify((0,
                                        k.Z)({
                                            telegramId: i
                                        }, _))
                                    },
                                    e.next = 14,
                                    Ie(p);
                                case 14:
                                    return e.next = 16,
                                    Promise.allSettled([Se(), t()]);
                                case 16:
                                    J(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    e.next = 20;
                                    break;
                                case 19:
                                    throw new Error("signature failed");
                                case 20:
                                    e.next = 26;
                                    break;
                                case 22:
                                    e.prev = 22,
                                    e.t0 = e.catch(4),
                                    q(e.t0),
                                    console.error(e.t0);
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[4, 22]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , m = (0,
                Ur.Z)(_, {
                    wait: 500
                }).run;
                return (0,
                N.jsxs)("button", {
                    className: Hr,
                    type: "button",
                    onClick: m,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-wallet",
                        className: Yr
                    }), n.tonAddress ? Mr(n.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    Z.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , zr = function() {
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
                    className: mr,
                    children: [(0,
                    N.jsx)("div", {
                        className: xr,
                        children: (0,
                        N.jsx)(Kr, {})
                    }), (0,
                    N.jsx)("div", {
                        className: hr,
                        children: (0,
                        N.jsx)(Qt, {})
                    }), (0,
                    N.jsxs)("div", {
                        className: vr,
                        children: [(0,
                        N.jsx)("div", {
                            className: gr,
                            children: (0,
                            N.jsx)(Fr, {})
                        }), (0,
                        N.jsx)("div", {
                            className: kr,
                            children: (0,
                            N.jsx)(_r, {})
                        }), (0,
                        N.jsx)(fa, {
                            className: jr
                        })]
                    }), (0,
                    N.jsx)(Et, {
                        className: Nr
                    }), (0,
                    N.jsx)("p", {
                        className: fr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    N.jsx)(Ot, {
                        className: pr
                    }), (0,
                    N.jsx)(Rt, {}), (0,
                    N.jsx)(Sr, {}), (0,
                    N.jsx)(Gn, {}), (0,
                    N.jsx)(dt, {})]
                })
            }
              , Xr = function() {
                return (0,
                N.jsx)(st, {
                    children: (0,
                    N.jsx)(zr, {})
                })
            }
              , Jr = t(55861)
              , qr = (t(1016),
            t(58338));
            const Qr = "PageTitle_title__IQ7TT";
            var $r = function(e) {
                var n = e.html
                  , t = e.className;
                return (0,
                N.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        qr.dU)(n)
                    },
                    className: y()(Qr, t)
                })
            };
            const es = "LeaderBoard_container__0DJSO"
              , ns = "LeaderBoard_desc__MFxC+"
              , ts = "LeaderBoard_inviteList__mV9a7"
              , as = "LeaderBoard_tabActiveClassName__7Xv4B"
              , rs = "LeaderBoard_tabsContent__KCGtW"
              , ss = "LeaderBoard_recordButton__lXzAl"
              , is = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var os = function(e) {
                var n = e.className;
                return (0,
                N.jsx)("div", {
                    className: y()(is, n)
                })
            };
            const cs = "InviteButton_invite-btn__aAMio"
              , ls = "InviteButton_btn-a__At-wO"
              , us = "InviteButton_btn-container__sYDy5"
              , ds = "InviteButton_copyButton__znucI"
              , _s = "InviteButton_copyIcon__QZgE9";
            var ms = function(e) {
                var n = e.text
                  , t = void 0 === n ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : n
                  , a = e.className
                  , r = I().uid
                  , s = function(e) {
                    var n = new K.Z
                      , t = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(An.BOT_NAME, "/").concat(An.MINI_APP_NAME, "?startapp=").concat((n.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(t)
                    }
                }(Ke().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                N.jsxs)("div", {
                    className: y()(a, us),
                    children: [(0,
                    N.jsx)("a", {
                        className: ls,
                        href: i,
                        children: (0,
                        N.jsx)(an, {
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
                            className: cs,
                            text: t
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
                        className: ds,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-copy",
                            className: _s
                        })
                    })]
                })
            };
            const ps = "RankList_listItem__qJvXJ"
              , fs = "RankList_name__sxTWa"
              , xs = "RankList_mask__ldBi8"
              , hs = "RankList_hightLightRow__xYkeg"
              , vs = "RankList_listHeader__KVGnw"
              , gs = "RankList_rank__k2m5R"
              , ks = "RankList_icon__1-SRV"
              , js = "RankList_point__D5mVw"
              , Ns = "RankList_pointIcon__k80Wy"
              , Cs = "RankList_InviteButton__D6ute"
              , ws = "RankList_noFirendsNote__Ckkil"
              , bs = "RankList_under__MJ5We"
              , ys = "RankList_rankItemPlaceholder__z-upW"
              , Zs = "RankList_rank-name__YEqnc"
              , Ps = "RankList_rank-score__gtI+m";
            var Ts = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Os = 1
              , Ss = 2
              , Es = function(e) {
                var n = e.total;
                return (0,
                N.jsxs)("div", {
                    className: vs,
                    children: [(0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            _t.uf)(n)
                        })
                    }), (0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Bs = function() {
                return (0,
                N.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, n) {
                        return (0,
                        N.jsxs)("div", {
                            className: ys,
                            children: [(0,
                            N.jsx)(os, {
                                className: Zs
                            }), (0,
                            N.jsx)(os, {
                                className: Ps
                            })]
                        }, n)
                    }
                    ))
                })
            }
              , Is = function(e) {
                var n = e.item
                  , t = e.isHighlight;
                return (0,
                N.jsxs)("div", {
                    className: y()(ps, t && hs),
                    children: [(0,
                    N.jsx)("div", {
                        className: xs
                    }), n.rank <= 3 ? (0,
                    N.jsx)("span", {
                        className: y()(gs, ks),
                        children: Ts[n.rank]
                    }) : (0,
                    N.jsx)("span", {
                        className: gs,
                        children: n.rank > 100 ? "100+" : "#".concat(n.rank)
                    }), (0,
                    N.jsx)("div", {
                        className: fs,
                        children: n.extUserName
                    }), (0,
                    N.jsxs)("div", {
                        className: js,
                        children: [(0,
                        N.jsx)("span", {
                            className: Ns,
                            children: Ts[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            _t.uf)(n.totalPoints)
                        })]
                    })]
                })
            }
              , Rs = function(e) {
                var n = e.pageType
                  , t = void 0 === n ? Os : n
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
                  , m = _[0]
                  , p = _[1]
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
                    c.Z)().mark((function e(n) {
                        var a, r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        pageNo: n
                                    },
                                    t !== Os) {
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
                                    (r = e.t0) && r.rows && (p(r.rows),
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
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(), [t])
                  , b = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                a.useEffect)((function() {
                    w(1)
                }
                ), [w]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(Es, {
                        total: h
                    }), i ? (0,
                    N.jsx)(Bs, {}) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [b && (0,
                        N.jsx)(Is, {
                            item: j,
                            isHighlight: !0
                        }), m.map((function(e, n) {
                            return (0,
                            N.jsx)(Is, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(n))
                        }
                        ))]
                    }), (0,
                    N.jsx)("div", {
                        className: bs
                    }), t === Os && (0,
                    N.jsxs)(N.Fragment, {
                        children: [1 === m.length && (0,
                        N.jsx)("div", {
                            className: ws,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        N.jsx)(ms, {
                            className: Cs,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            };
            const Ls = "ViewRecordsButton_button__foNmQ"
              , As = "ViewRecordsButton_btnIcon__2U0Xs"
              , Ds = "ViewRecordsButton_title__XwRxi"
              , Fs = "ViewRecordsButton_container__KMBl3"
              , Us = "ViewRecordsButton_recordContainer__H0HG0"
              , Ms = "ViewRecordsButton_recordField__ntg1u"
              , Gs = "ViewRecordsButton_label__VInMo"
              , Ws = "ViewRecordsButton_value__YdAbG"
              , Vs = "ViewRecordsButton_trendIcon__OAhpt"
              , Hs = "ViewRecordsButton_up__lVPFv"
              , Ys = "ViewRecordsButton_down__z9X8U"
              , Ks = "ViewRecordsButton_timestamp__1KFJL"
              , zs = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , Xs = "ViewRecordsButton_description__2QLs8";
            var Js = function(e) {
                var n = e.label
                  , t = e.value;
                return (0,
                N.jsxs)("div", {
                    className: Ms,
                    children: [(0,
                    N.jsx)("p", {
                        className: Gs,
                        children: n
                    }), (0,
                    N.jsx)("div", {
                        className: Ws,
                        children: t
                    })]
                })
            }
              , qs = function() {
                return (0,
                N.jsxs)("button", {
                    className: Ls,
                    type: "button",
                    onClick: function() {
                        var e = Qn().get($n) || []
                          , n = (0,
                        N.jsx)(N.Fragment, {
                            children: e.length > 0 ? e.map((function(e) {
                                var n = 1 === e.predict
                                  , t = "ok_game_okxracer_moon"
                                  , a = Hs
                                  , r = "okx-growth-trending-up";
                                return n || (t = "ok_game_okxracer_doom",
                                a = Ys,
                                r = "okx-growth-trending-down"),
                                (0,
                                N.jsxs)("div", {
                                    className: Us,
                                    children: [(0,
                                    N.jsx)(Js, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_your_guess"),
                                        value: (0,
                                        N.jsxs)(N.Fragment, {
                                            children: [(0,
                                            Z.O4)(t), (0,
                                            N.jsx)(P.Z, {
                                                className: y()(Vs, a),
                                                iconName: r
                                            })]
                                        })
                                    }), (0,
                                    N.jsx)(Js, {
                                        label: "Result",
                                        value: (0,
                                        Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                    }), (0,
                                    N.jsx)(Js, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_consecutive_wins"),
                                        value: e.curCombo
                                    }), (0,
                                    N.jsx)("p", {
                                        className: Ks,
                                        children: (0,
                                        _t.o0)(new Date(e.date), {
                                            format: "yyyyMMMdhhmmss"
                                        })
                                    })]
                                }, e.date)
                            }
                            )) : (0,
                            N.jsxs)("div", {
                                className: zs,
                                children: [(0,
                                N.jsx)("p", {
                                    className: Ds,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_racing_record")
                                }), (0,
                                N.jsx)("p", {
                                    className: Xs,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_past_activity")
                                })]
                            })
                        });
                        $e({
                            title: (0,
                            N.jsx)("span", {
                                className: Ds,
                                children: (0,
                                Z.O4)("ok_game_okxracer_racing_records")
                            }),
                            titleCenter: !0,
                            containerClassName: Fs,
                            children: n
                        })
                    },
                    children: [(0,
                    Z.O4)("ok_game_okxracer_my_records"), (0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-chevrons",
                        className: As
                    })]
                })
            }
              , Qs = function() {
                return (0,
                N.jsxs)("div", {
                    className: es,
                    children: [(0,
                    N.jsx)($r, {
                        html: (0,
                        Z.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            Z.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: ns,
                        children: (0,
                        Z.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    N.jsx)("div", {
                        className: ss,
                        children: (0,
                        N.jsx)(qs, {})
                    }), (0,
                    N.jsxs)(Jr.Z, {
                        activeClassName: as,
                        noPadding: !0,
                        size: Jr.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        N.jsx)(Jr.Z.TabPane, {
                            tab: (0,
                            Z.O4)("ok_game_okxracer_friends2"),
                            id: Os,
                            className: rs,
                            children: (0,
                            N.jsx)("div", {
                                className: ts,
                                children: (0,
                                N.jsx)(Rs, {
                                    pageType: Os
                                })
                            })
                        }), (0,
                        N.jsx)(Jr.Z.TabPane, {
                            className: rs,
                            tab: (0,
                            Z.O4)("ok_game_okxracer_global"),
                            id: Ss,
                            children: (0,
                            N.jsx)("div", {
                                className: ts,
                                children: (0,
                                N.jsx)(Rs, {
                                    pageType: Ss
                                })
                            })
                        })]
                    })]
                })
            };
            const $s = "index_page__-xiuX"
              , ei = "index_entering__yddHy";
            var ni = function(e) {
                var n = e.children
                  , t = e.animationPath
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
                  , m = _[0]
                  , p = _[1]
                  , f = function() {
                    return p(ei),
                    setTimeout((function() {
                        p("")
                    }
                    ), 200)
                };
                return (0,
                a.useEffect)((function() {
                    var e = null;
                    return t ? t.includes(r.pathname) && (e = f()) : e = f(),
                    l(r),
                    function() {
                        e && clearTimeout(e)
                    }
                }
                ), [t, r]),
                (0,
                N.jsx)("div", {
                    className: y()($s, m),
                    children: (0,
                    N.jsx)(s.Switch, {
                        location: c,
                        children: n
                    })
                })
            }
              , ti = t(74914)
              , ai = t(59257);
            t(27235);
            const ri = "index_taskItemPlaceholder__6HYF9"
              , si = "index_task__wcySb";
            var ii = function() {
                return (0,
                N.jsx)(N.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, n) {
                        return (0,
                        N.jsx)("div", {
                            className: y()(ri),
                            children: (0,
                            N.jsx)(os, {
                                className: si
                            })
                        }, n)
                    }
                    ))
                })
            }
              , oi = function(e) {
                var n = e.selectedTask
                  , t = e.uid
                  , r = e.onClick
                  , s = e.children
                  , i = e.className
                  , o = e.loading
                  , _ = e.custom
                  , m = (0,
                d.useOKXTonConnectUI)()
                  , p = (0,
                u.Z)(m, 1)[0]
                  , f = (0,
                a.useRef)((function() {}
                ))
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var a, s, i, o;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Vr(p, t);
                                case 3:
                                    if (!(a = e.sent)) {
                                        e.next = 11;
                                        break
                                    }
                                    if (s = (0,
                                    u.Z)(a, 2),
                                    i = s[0],
                                    o = s[1],
                                    f.current = o,
                                    e.t0 = r,
                                    !e.t0) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 11,
                                    r(n, JSON.stringify((0,
                                    k.Z)({
                                        telegramId: t
                                    }, i)), i.tonAddress);
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13,
                                    e.t1 = e.catch(0),
                                    console.error(e.t1);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 13]])
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
              , ci = [Oe.WalletConnect]
              , li = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , ui = (0,
            a.createContext)({
                boosts: [],
                tasks: li,
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
              , di = function() {
                return (0,
                a.useContext)(ui)
            }
              , _i = function(e) {
                var n = e.children
                  , t = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(t, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(li)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)()
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = Ke().updateGameInfoFromServer
                  , g = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var n, t, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Se(!0), Be(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (n = a[0].value.data) && void 0 !== n ? n : []),
                                "fulfilled" === a[1].status && m(null !== (t = a[1].value.data) && void 0 !== t ? t : li);
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
                    c.Z)().mark((function e(n) {
                        var t;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Ee({
                                        id: n
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Se(), v()]);
                                case 5:
                                    return "fulfilled" === (t = e.sent)[0].status && i(t[0].value.data || []),
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
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n, t) {
                        var a, r, s, i, o, l, d, _;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = {
                                        id: n
                                    },
                                    t && (a.taskContext = t),
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
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : li,
                                    m(d),
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , C = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n, t) {
                        var a, r, s, i, o, l, d, _;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = {
                                        id: n
                                    },
                                    t && (a.taskContext = t),
                                    e.next = 5,
                                    Re(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Be(), v()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : li,
                                    m(d),
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , w = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n, t) {
                        var a;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = !1,
                                    n.state !== Dn.finished || !ci.includes(n.context.actionType)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    C(n.id, t);
                                case 4:
                                    a = e.sent;
                                case 5:
                                    if (n.state !== Dn.unfinished) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 8,
                                    j(n.id, t);
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
                    return function(n, t) {
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
                N.jsx)(ui.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: j,
                        partner: x,
                        setSelectedPartner: b,
                        upDateOrDoTask: w
                    },
                    children: n
                })
            };
            const mi = "WalletTask_sheet-container__bz-jm"
              , pi = "WalletTask_sheet-name__xuyl9"
              , fi = "WalletTask_sheet-desc__snmOq"
              , xi = "WalletTask_sheeLogo__LcXBr"
              , hi = "WalletTask_sheeLogoCheck__4qpgw"
              , vi = "WalletTask_sheetCopyBox__vbEpV"
              , gi = "WalletTask_sheetCopyIcon__shZrx"
              , ki = "WalletTask_btn__JBh79"
              , ji = "WalletTask_btn-txt__qnE8C";
            var Ni = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Ci = "/cdn/assets/imgs/249/014A8107B107466F.png"
              , wi = function(e) {
                var n = e.selectedTask
                  , t = e.uid
                  , s = e.onClick
                  , i = e.customDesc
                  , d = (0,
                a.useRef)((function() {}
                ))
                  , _ = r().useState(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1];
                (0,
                a.useEffect)((function() {
                    return (null === n || void 0 === n ? void 0 : n.state) === Dn.finished ? O.act({
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
                        var n = arguments;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (f(!0),
                                    e.prev = 1,
                                    e.t0 = s,
                                    !e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6,
                                    s.apply(void 0, n);
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t1 = e.catch(1),
                                    console.error(e.t1);
                                case 11:
                                    f(!1);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 8]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsx)(N.Fragment, {
                    children: (null === n || void 0 === n ? void 0 : n.state) === Dn.finished && n.context.actionType === Oe.WalletConnect ? (0,
                    N.jsxs)("div", {
                        className: mi,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Ci),
                            className: xi
                        }), (0,
                        N.jsx)("div", {
                            className: pi,
                            children: n.context.nameFinished
                        }), (0,
                        N.jsxs)("div", {
                            className: vi,
                            children: [(0,
                            N.jsx)("div", {
                                children: n.context.tonAddress
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", gi),
                                onClick: function() {
                                    try {
                                        (null === n || void 0 === n ? void 0 : n.context.actionType) === Oe.WalletConnect && (navigator.clipboard.writeText(null === n || void 0 === n ? void 0 : n.context.tonAddress),
                                        J(!0, (0,
                                        Z.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        J(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        N.jsx)(oi, {
                            selectedTask: n,
                            uid: t,
                            onClick: function() {
                                return x.apply(void 0, arguments)
                            },
                            className: ki,
                            loading: p,
                            children: (0,
                            N.jsx)("div", {
                                className: ji,
                                children: n.context.btnTextFinishedAndSwitch
                            })
                        })]
                    }) : (0,
                    N.jsxs)("div", {
                        className: mi,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Ni),
                            className: hi
                        }), (0,
                        N.jsx)("div", {
                            className: pi,
                            children: null === n || void 0 === n ? void 0 : n.context.name
                        }), (0,
                        N.jsx)("div", {
                            className: fi,
                            children: i || (null === n || void 0 === n ? void 0 : n.context.desc)
                        }), (0,
                        N.jsx)(oi, {
                            selectedTask: n,
                            uid: t,
                            onClick: function() {
                                return x.apply(void 0, arguments)
                            },
                            className: ki,
                            loading: p,
                            children: (0,
                            N.jsx)("div", {
                                className: ji,
                                children: null === n || void 0 === n ? void 0 : n.context.btnText
                            })
                        })]
                    })
                })
            };
            const bi = "WalletDepositTask_sheet-container__7+LUG"
              , yi = "WalletDepositTask_sheet-name__RuWrl"
              , Zi = "WalletDepositTask_sheet-desc__S5hoQ"
              , Pi = "WalletDepositTask_sheeLogo__VPRz9"
              , Ti = "WalletDepositTask_sheetCopyBox__FvPfk"
              , Oi = "WalletDepositTask_sheetCopyIcon__KeD4-"
              , Si = "WalletDepositTask_sheetCloseIcon__TBSXg"
              , Ei = "WalletDepositTask_btn__kCKz2"
              , Bi = "WalletDepositTask_depositBtn__TPPeH"
              , Ii = "WalletDepositTask_btn-txt__tvio1"
              , Ri = "WalletDepositTask_line__8r7ky";
            var Li = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Ai = function(e) {
                var n = e.selectedTask
                  , t = e.uid
                  , s = e.taskList
                  , i = e.onClick
                  , d = Ke().context
                  , _ = di().upDateOrDoTask
                  , m = r().useState("")
                  , p = (0,
                u.Z)(m, 2)
                  , f = p[0]
                  , x = p[1]
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
                        var n;
                        return (null === e || void 0 === e || null === (n = e.context) || void 0 === n ? void 0 : n.actionType) === Oe.WalletConnect
                    }
                    ))
                }
                ), [s])
                  , g = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n, t, a) {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    _(n, t);
                                case 2:
                                    e.sent && (x(a || ""),
                                    J(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(n, t, a) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsx)(N.Fragment, {
                    children: (null === v || void 0 === v ? void 0 : v.state) === Dn.unfinished && (null === n || void 0 === n ? void 0 : n.context.actionType) === Oe.WalletDepositConnect ? (0,
                    N.jsx)(wi, {
                        selectedTask: v,
                        onClick: function() {
                            var e = (0,
                            l.Z)((0,
                            c.Z)().mark((function e(n, t, a) {
                                return (0,
                                c.Z)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            g(n, t, a);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(n, t, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        customDesc: null === n || void 0 === n ? void 0 : n.context.walletDepositDesc,
                        uid: t
                    }) : (null === n || void 0 === n ? void 0 : n.context.actionType) === Oe.WalletDepositConnect && (0,
                    N.jsxs)("div", {
                        className: bi,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Li),
                            className: Pi
                        }), (0,
                        N.jsx)("div", {
                            className: yi,
                            children: null === n || void 0 === n ? void 0 : n.context.connectedTitle
                        }), (0,
                        N.jsx)("div", {
                            className: Zi,
                            children: null === n || void 0 === n ? void 0 : n.context.desc
                        }), (0,
                        N.jsxs)("div", {
                            className: Ti,
                            children: [(0,
                            N.jsx)("div", {
                                children: f
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", Oi),
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
                                className: Ri
                            }), (0,
                            N.jsx)(oi, {
                                selectedTask: v,
                                uid: t,
                                onClick: function() {
                                    var e = (0,
                                    l.Z)((0,
                                    c.Z)().mark((function e(n, t, a) {
                                        return (0,
                                        c.Z)().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    g(n, t, a);
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(n, t, a) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                custom: (0,
                                N.jsx)(P.Z, {
                                    className: y()("okds-close", Si)
                                })
                            })]
                        }), (0,
                        N.jsx)(H.default, {
                            category: H.default.CATEGORY.fill,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.lg,
                            className: Bi,
                            onClick: function() {
                                i(n)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Ii,
                                children: null === n || void 0 === n ? void 0 : n.context.verifyBtnText
                            })
                        }), (0,
                        N.jsx)(H.default, {
                            category: H.default.CATEGORY.outline,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.lg,
                            className: Ei,
                            onClick: function() {
                                var e, n;
                                null === (e = window) || void 0 === e || null === (n = e.Telegram) || void 0 === n || n.WebApp.openLink(d.tonDeeplink)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Ii,
                                children: null === n || void 0 === n ? void 0 : n.context.depositBtnText
                            })
                        })]
                    })
                })
            };
            const Di = "index_task-item__JdIYG"
              , Fi = "index_title__hYmAn"
              , Ui = "index_state__ddlCZ"
              , Mi = "index_item-left__BNG-l"
              , Gi = "index_item-right__V+4iT"
              , Wi = "index_icon__yk0cJ"
              , Vi = "index_done__h9mLm";
            var Hi = function(e) {
                var n = e.task
                  , t = e.onClick
                  , a = n.id
                  , r = n.points
                  , s = n.state
                  , i = n.context
                  , o = "";
                if (r) {
                    var c = (0,
                    _t.uf)(r, {
                        signDisplay: !0
                    })
                      , l = s === Dn.finished ? "\u2705" : "\ud83c\udfc1";
                    o = "".concat(l, " ").concat(c, " pts")
                }
                return (0,
                N.jsxs)("div", {
                    className: Di,
                    onClick: function() {
                        t(a)
                    },
                    children: [(0,
                    N.jsxs)("div", {
                        className: Mi,
                        children: [(0,
                        N.jsx)("div", {
                            className: Fi,
                            children: i.name
                        }), o && (0,
                        N.jsx)("div", {
                            className: Ui,
                            children: o
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: Gi,
                        children: s === Dn.finished ? (0,
                        N.jsx)("div", {
                            className: Vi,
                            children: (0,
                            Z.O4)("ok_game_okxracer_done")
                        }) : (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", Wi)
                        })
                    })]
                }, a)
            };
            const Yi = "index_container__LfQHA"
              , Ki = "index_sheet-container__7hIP5"
              , zi = "index_sheet-name__+hUn6"
              , Xi = "index_sheet-desc__Uh4Uk"
              , Ji = "index_btn__+6gr5";
            function qi(e) {
                var n = e.tasks
                  , t = e.className
                  , r = di().upDateOrDoTask
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , d = i[1]
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1]
                  , x = I().uid
                  , h = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n, t) {
                        var a, s, i, o, l;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!n) {
                                        e.next = 6;
                                        break
                                    }
                                    return n.context.actionType === Oe.OpenLink && n.context.redirectLink && ((a = n.context.redirectLink).startsWith("https://t.me") ? null === (s = window) || void 0 === s || null === (i = s.Telegram) || void 0 === i || i.WebApp.openTelegramLink(a) : null === (o = window) || void 0 === o || null === (l = o.Telegram) || void 0 === l || l.WebApp.openLink(a)),
                                    e.next = 4,
                                    r(n, t);
                                case 4:
                                    e.sent && J(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg"));
                                case 6:
                                    f(!1);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , v = (0,
                Ur.Z)((function(e) {
                    var t = (n || []).find((function(n) {
                        return (null === n || void 0 === n ? void 0 : n.id) === e
                    }
                    ));
                    if (t) {
                        var a = t.context.actionType
                          , r = t.state;
                        (null === t || void 0 === t ? void 0 : t.state) === Dn.finished && a !== Oe.WalletConnect && a !== Oe.OpenLink || (d(t),
                        f(!0),
                        a === Oe.WalletConnect && (r === Dn.finished ? O.act({
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
                Ur.Z)(h, {
                    wait: 500,
                    leading: !0
                }).run
                  , k = (0,
                rn.Z)((0,
                rn.Z)({}, Oe.WalletConnect, (function() {
                    return (0,
                    N.jsx)(wi, {
                        selectedTask: o,
                        onClick: function(e, n) {
                            return g(e, n)
                        },
                        uid: x
                    })
                }
                )), Oe.WalletDepositConnect, (function() {
                    return (0,
                    N.jsx)(Ai, {
                        selectedTask: o,
                        taskList: n,
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
                        className: y()(Yi, t),
                        children: n.length > 0 ? n.map((function(e) {
                            return (0,
                            N.jsx)(Hi, {
                                task: e,
                                onClick: v
                            }, e.id)
                        }
                        )) : (0,
                        N.jsx)(ii, {})
                    }), o && (0,
                    N.jsx)(Qe, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: function() {
                            d(void 0),
                            f(!1)
                        },
                        children: function() {
                            var e = k[o.context.actionType];
                            return e ? e() : function() {
                                var e = o.context
                                  , n = e.desc
                                  , t = e.btnText;
                                return (0,
                                N.jsxs)("div", {
                                    className: Ki,
                                    children: [(0,
                                    N.jsx)("div", {
                                        className: zi,
                                        children: e.name
                                    }), (0,
                                    N.jsx)("div", {
                                        className: Xi,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            qr.dU)(n)
                                        }
                                    }), (0,
                                    N.jsx)(an, {
                                        className: Ji,
                                        onClick: function() {
                                            return g(o)
                                        },
                                        text: t
                                    })]
                                })
                            }()
                        }()
                    })]
                })
            }
            var Qi = function() {
                var e = (0,
                s.useHistory)()
                  , n = e.replace
                  , t = e.goBack
                  , r = (0,
                s.useLocation)().hash;
                (0,
                a.useEffect)((function() {
                    var e, n, a;
                    return null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (a = n.BackButton) || void 0 === a || a.show().onClick(t),
                    function() {
                        var e, n, a;
                        null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (a = n.BackButton) || void 0 === a || a.hide().offClick(t)
                    }
                }
                ), [t, r, n])
            }
              , $i = (0,
            a.createContext)({
                airdrops: [],
                selectedAirdrop: null,
                loading: !1,
                onSelectAirdrop: function() {}
            })
              , eo = function() {
                return (0,
                a.useContext)($i)
            }
              , no = function(e) {
                var n = e.children
                  , t = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(t, 2)
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
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1];
                (0,
                a.useEffect)((function() {
                    f(!0),
                    Fe(!0).then((function(e) {
                        var n = e.data;
                        i(n || [])
                    }
                    )).catch((function(e) {
                        z.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.message), e)
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
                        loading: p,
                        onSelectAirdrop: x,
                        selectedAirdrop: l
                    }
                }
                ), [l, s, p]);
                return (0,
                N.jsx)($i.Provider, {
                    value: h,
                    children: n
                })
            };
            const to = {
                container: "index_container__Y851r",
                header: "index_header__4gppM",
                title: "index_title__b+GpQ",
                desc: "index_desc__pU2jR",
                surpriseTitle: "index_surpriseTitle__Uqc-L",
                tasks: "index_tasks__k8-lb",
                taskListHeader: "index_taskListHeader__0FpaY"
            };
            var ao = function() {
                var e = eo().selectedAirdrop
                  , n = (0,
                s.useHistory)().replace
                  , t = (0,
                s.useLocation)().hash;
                if (Qi(),
                (0,
                a.useEffect)((function() {
                    e || n(D + t)
                }
                ), [t, e, n]),
                !e)
                    return null;
                var r = e.tasks
                  , i = e.logo
                  , c = e.groupTitle
                  , l = e.groupDesc
                  , u = e.surprise;
                return (0,
                N.jsxs)("div", {
                    className: to.container,
                    children: [(0,
                    N.jsxs)("div", {
                        className: to.header,
                        children: [(0,
                        N.jsx)(ti.Z, {
                            size: ai.Z.sm,
                            className: to.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(i)
                        }), (0,
                        N.jsx)("h1", {
                            className: to.title,
                            children: c
                        })]
                    }), (0,
                    N.jsx)("p", {
                        className: to.desc,
                        children: l
                    }), (0,
                    N.jsx)("div", {
                        className: to.surpriseTitle,
                        children: (0,
                        Z.O4)("ok_game_okxracer_label_surprises_details")
                    }), (0,
                    N.jsx)("p", {
                        className: to.desc,
                        children: u
                    }), (0,
                    N.jsxs)("div", {
                        className: to.tasks,
                        children: [(0,
                        N.jsx)("div", {
                            className: to.taskListHeader,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_tasks")
                        }), (0,
                        N.jsx)(qi, {
                            tasks: r
                        })]
                    })]
                })
            };
            const ro = "index_airdropItem__pV1Az"
              , so = "index_content__ZtejP"
              , io = "index_airdropIcon__lZwMy"
              , oo = "index_airdropIconLoading__S1N9H"
              , co = "index_title__19JPa"
              , lo = "index_desc__ekknt"
              , uo = "index_arrow__Y8OCn"
              , _o = "index_airdropItemPlaceholder__bL5jl";
            var mo = function(e) {
                var n = e.airdrop
                  , t = e.onClick
                  , a = n.logo
                  , r = n.groupSubTitle
                  , s = n.groupTitle;
                return (0,
                N.jsxs)("div", {
                    className: ro,
                    onClick: function() {
                        t(n)
                    },
                    children: [(0,
                    N.jsxs)("div", {
                        className: so,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            className: io,
                            src: "".concat(o.Z.cdnBaseUrl).concat(a)
                        }), (0,
                        N.jsx)("div", {
                            className: co,
                            children: s
                        }), (0,
                        N.jsx)("div", {
                            className: lo,
                            children: r
                        })]
                    }), (0,
                    N.jsx)(P.Z, {
                        className: y()("okds-arrow-chevron-right-centered-sm", uo)
                    })]
                })
            }
              , po = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(ro, _o),
                    children: [(0,
                    N.jsx)(os, {
                        className: oo
                    }), (0,
                    N.jsx)(os, {
                        className: co
                    }), (0,
                    N.jsx)(os, {
                        className: lo
                    })]
                })
            }
              , fo = {
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
              , xo = (0,
            a.createContext)({
                accountBindingInfo: fo,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , ho = function() {
                return (0,
                a.useContext)(xo)
            }
              , vo = function(e) {
                var n = e.children
                  , t = (0,
                a.useState)(fo)
                  , r = (0,
                u.Z)(t, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = Boolean((null === s || void 0 === s ? void 0 : s.isConnectTelegram) && (null === s || void 0 === s ? void 0 : s.isKyc))
                  , f = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var n, t, a, r = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 1 ? r[1] : void 0,
                                t = {
                                    isRecheckBinding: r.length > 0 && void 0 !== r[0] && r[0]
                                },
                                e.next = 5,
                                Ae(n, t);
                            case 5:
                                return a = e.sent,
                                m(!1),
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
                        isCertified: p
                    }
                }
                ), [s, f, p, _]);
                return (0,
                N.jsx)(xo.Provider, {
                    value: x,
                    children: n
                })
            };
            const go = "index_offsetMarginContainer__2NtPr"
              , ko = "index_title__+65IJ"
              , jo = "index_count__F-PWh"
              , No = "index_airdropContainer__Gun3r"
              , Co = "index_paddingPlaceholder__X2M3o";
            var wo = function(e) {
                var n = e.showCertifyBottomSheet
                  , t = eo()
                  , a = t.airdrops
                  , r = t.onSelectAirdrop
                  , i = t.loading
                  , o = ho().isCertified
                  , c = (0,
                s.useHistory)()
                  , l = (0,
                s.useLocation)()
                  , u = function(e) {
                    o ? (r(e),
                    c.push({
                        pathname: W,
                        hash: l.hash
                    })) : n()
                }
                  , d = a.length;
                return i || 0 !== d ? (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("p", {
                        className: ko,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_label_airdrop_surprises"), "\xa0", (0,
                        N.jsxs)("span", {
                            className: jo,
                            children: ["(", d, ")"]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: y()((0,
                        rn.Z)({}, go, d > 1)),
                        children: (0,
                        N.jsxs)("div", {
                            className: No,
                            children: [i ? (0,
                            N.jsxs)(N.Fragment, {
                                children: [(0,
                                N.jsx)(po, {}), (0,
                                N.jsx)(po, {}), (0,
                                N.jsx)(po, {})]
                            }) : (0,
                            N.jsx)(N.Fragment, {
                                children: a.map((function(e) {
                                    return (0,
                                    N.jsx)(mo, {
                                        airdrop: e,
                                        onClick: u
                                    }, e.groupId)
                                }
                                ))
                            }), d > 1 ? (0,
                            N.jsx)("div", {
                                className: Co
                            }) : null]
                        })
                    })]
                }) : null
            }
              , bo = (0,
            a.createContext)({
                campaigns: [],
                loading: !1,
                openCampaignPage: function() {}
            })
              , yo = function(e) {
                var n = e.children
                  , t = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(t, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1];
                (0,
                a.useEffect)((function() {
                    m(!0);
                    var e = function() {
                        var e = (0,
                        l.Z)((0,
                        c.Z)().mark((function e() {
                            var n;
                            return (0,
                            c.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        De(!0);
                                    case 3:
                                        (n = e.sent) && i(n),
                                        e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7,
                                        e.t0 = e.catch(0);
                                    case 9:
                                        return e.prev = 9,
                                        m(!1),
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
                var p = function(e) {
                    var n, t;
                    null === (n = window) || void 0 === n || null === (t = n.Telegram) || void 0 === t || t.WebApp.openLink(e.webUrl)
                }
                  , f = (0,
                a.useMemo)((function() {
                    return {
                        campaigns: s,
                        loading: _,
                        openCampaignPage: p
                    }
                }
                ), [s, _]);
                return (0,
                N.jsx)(bo.Provider, {
                    value: f,
                    children: n
                })
            }
              , Zo = t(32267);
            t(82890);
            const Po = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , To = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var Oo = function(e) {
                var n = e.className;
                return (0,
                N.jsxs)("span", {
                    className: y()(Po, n),
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okds-clock",
                        className: To
                    }), (0,
                    Z.O4)("ok_game_okxracer_tag_phase421_ended")]
                })
            };
            const So = "CampaignCard_cardContainer__3yu81"
              , Eo = "CampaignCard_dateRange__hvYLA"
              , Bo = "CampaignCard_campaignEndedIndicator__6J91S"
              , Io = "CampaignCard_card__cYF8Y"
              , Ro = "CampaignCard_campaignImg__YpUgC"
              , Lo = "CampaignCard_round__MMyT5"
              , Ao = "CampaignCard_content__1ZjVu"
              , Do = "CampaignCard_name__mfl60"
              , Fo = "CampaignCard_desc__klZyx"
              , Uo = "CampaignCard_points__jIZar"
              , Mo = "CampaignCard_btn__v8gu9"
              , Go = "CampaignCard_btnContent__-5uC9";
            var Wo = function(e) {
                var n = e.campaign
                  , t = e.btnText
                  , a = e.onClick
                  , r = e.roundLogo
                  , s = void 0 === r || r
                  , i = n.logo
                  , c = n.title
                  , l = n.subTitle
                  , u = n.points;
                return (0,
                N.jsxs)("li", {
                    className: So,
                    children: [n.endDate && n.startDate ? n.status === Le.Ended ? (0,
                    N.jsx)(Oo, {
                        className: Bo
                    }) : (0,
                    N.jsxs)("span", {
                        className: Eo,
                        children: [(0,
                        _t.o0)(new Date(n.startDate)), "\xa0-\xa0", (0,
                        _t.o0)(new Date(n.endDate))]
                    }) : null, (0,
                    N.jsxs)("div", {
                        className: Io,
                        children: [(0,
                        N.jsx)(Y.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(i),
                            pictureClassName: Ro,
                            className: y()(Ro, (0,
                            rn.Z)({}, Lo, s))
                        }), (0,
                        N.jsxs)("div", {
                            className: Ao,
                            children: [(0,
                            N.jsx)("p", {
                                className: Do,
                                children: c
                            }), (0,
                            N.jsx)("p", {
                                className: Fo,
                                children: l
                            }), u && (0,
                            N.jsx)("p", {
                                className: Uo,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    _t.uf)(u))
                                })
                            }), (0,
                            N.jsx)(H.default, {
                                type: H.default.TYPE.default,
                                category: H.default.CATEGORY.outline,
                                size: H.default.SIZE.s,
                                className: Mo,
                                contentClassName: Go,
                                onClick: a,
                                children: t
                            })]
                        })]
                    })]
                })
            };
            const Vo = {
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
            var Ho = function(e) {
                var n = e.showCertifyBottomSheet
                  , t = ho().isCertified
                  , r = (0,
                a.useContext)(bo)
                  , s = r.campaigns
                  , i = r.loading
                  , o = r.openCampaignPage;
                var c = t ? (0,
                N.jsx)(Zo.Z.State, {
                    type: Zo.Z.State.TYPE.noRecord,
                    className: Vo.noCampaigns,
                    title: (0,
                    Z.O4)("ok_game_okxracer_title_phase421_no_campaigns"),
                    description: (0,
                    N.jsx)("p", {
                        className: Vo.desc,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase421_stay_tuned")
                    })
                }) : (0,
                N.jsx)(Wo, {
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
                    onClick: n
                })
                  , l = t || s.length > 0;
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("p", {
                        className: Vo.title,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", l && (0,
                        N.jsxs)("span", {
                            className: Vo.count,
                            children: ["(", s.length, ")"]
                        })]
                    }), i && (0,
                    N.jsx)("div", {
                        className: Vo.loaderContainer,
                        children: (0,
                        N.jsx)(ka.Z, {})
                    }), !i && 0 === s.length && c, (0,
                    N.jsx)("ul", {
                        className: Vo.list,
                        children: s.map((function(e) {
                            return (0,
                            N.jsx)(Wo, {
                                campaign: e,
                                btnText: (0,
                                Z.O4)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    t ? function(e) {
                                        $e({
                                            children: (0,
                                            N.jsxs)("div", {
                                                className: Vo.campaignBottomSheet,
                                                children: [e.status === Le.Ended ? (0,
                                                N.jsx)("span", {
                                                    className: Vo.dateRange,
                                                    children: (0,
                                                    N.jsx)(Oo, {
                                                        className: Vo.campaignEndedIndicator
                                                    })
                                                }) : (0,
                                                N.jsxs)("span", {
                                                    className: Vo.dateRange,
                                                    children: [(0,
                                                    _t.o0)(new Date(e.startDate)), "\xa0-\xa0", (0,
                                                    _t.o0)(new Date(e.endDate))]
                                                }), (0,
                                                N.jsx)("p", {
                                                    className: Vo.subTitle,
                                                    children: e.title
                                                }), (0,
                                                N.jsx)("p", {
                                                    className: Vo.desc,
                                                    children: e.description
                                                }), (0,
                                                N.jsx)("hr", {
                                                    className: Vo.divider
                                                }), (0,
                                                N.jsx)("p", {
                                                    className: Vo.points,
                                                    children: e.pointDescription
                                                }), (0,
                                                N.jsx)(an, {
                                                    className: Vo.button,
                                                    onClick: function() {
                                                        o(e)
                                                    },
                                                    text: (0,
                                                    Z.O4)("ok_game_okxracer_btn_phase421_go_campaign")
                                                })]
                                            })
                                        })
                                    }(e) : n()
                                }
                            }, e.startDate)
                        }
                        ))
                    }), !t && (0,
                    N.jsx)(Et, {
                        className: Vo.termsAndConditions
                    })]
                })
            }
              , Yo = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Ko = function(e) {
                var n, t;
                return Boolean(Number(null === (n = window) || void 0 === n || null === (t = n.localStorage) || void 0 === t ? void 0 : t.getItem(e)))
            };
            function zo(e) {
                var n = {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Yo.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_verify")
                }
                  , t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Yo.SIGNUP,
                    status: Ko(Yo.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Yo.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_connect")
                }, n];
                return e.isConnectTelegram ? [n] : t
            }
            var Xo = function(e) {
                var n = (0,
                a.useState)(zo(e))
                  , t = (0,
                u.Z)(n, 2)
                  , r = t[0]
                  , s = t[1]
                  , i = I().uid;
                (0,
                a.useEffect)((function() {
                    s(zo(e))
                }
                ), [e]);
                var o = (0,
                a.useCallback)((function(n) {
                    var t, a, o = r.find((function(e) {
                        return e.type === n
                    }
                    ));
                    if (o) {
                        switch (null === (t = window) || void 0 === t || null === (a = t.Telegram) || void 0 === a || a.WebApp.openLink(o.url),
                        n) {
                        case Yo.SIGNUP:
                        case Yo.INSTALL:
                            c = n,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(zo(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (n) {
                        case Yo.SIGNUP:
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
                        case Yo.INSTALL:
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
                        case Yo.CONNECT:
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
                        case Yo.KYC:
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
            const Jo = "CertifyBottomSheet_certifySteps__-zWCO"
              , qo = "CertifyBottomSheet_taskList__uK656"
              , Qo = "CertifyBottomSheet_task__iLWrC"
              , $o = "CertifyBottomSheet_details__YoXf3"
              , ec = "CertifyBottomSheet_title__X1Tnl"
              , nc = "CertifyBottomSheet_subTitle__EzVrR"
              , tc = "CertifyBottomSheet_btn__JLhoo"
              , ac = "CertifyBottomSheet_btnContent__wrzU-"
              , rc = "CertifyBottomSheet_verifyBtn__lYfYD";
            var sc = ["getAccountBindingInfo"]
              , ic = function(e) {
                var n = e.getAccountBindingInfo
                  , t = (0,
                w.Z)(e, sc)
                  , a = I().uid
                  , r = ho().accountBindingInfo
                  , s = Xo(r)
                  , i = s.list
                  , o = s.handleClick;
                return (0,
                N.jsx)(Qe, (0,
                k.Z)((0,
                k.Z)({}, t), {}, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: Jo,
                    children: (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("ul", {
                            className: qo,
                            children: i.map((function(e) {
                                return (0,
                                N.jsxs)("li", {
                                    className: Qo,
                                    children: [(0,
                                    N.jsxs)("div", {
                                        className: $o,
                                        children: [(0,
                                        N.jsx)("p", {
                                            className: ec,
                                            children: e.title
                                        }), (0,
                                        N.jsx)("p", {
                                            className: nc,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    N.jsx)(an, {
                                        text: e.btnText,
                                        size: H.default.SIZE.xs,
                                        className: tc,
                                        contentClassName: ac,
                                        onClick: function() {
                                            o(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        N.jsx)(an, {
                            className: rc,
                            onClick: function() {
                                n(!0),
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
              , oc = function() {
                var e = ho().accountBindingInfo || {}
                  , n = e.gradeCategories
                  , t = e.pointGradeName
                  , r = void 0 === t ? "" : t
                  , s = e.totalEarnedPoints
                  , i = void 0 === s ? 0 : s
                  , o = (0,
                a.useMemo)((function() {
                    return !n || n.length <= 0 ? 0 : n.findIndex((function(e) {
                        return e.pointGradeName == r
                    }
                    ))
                }
                ), [n, r]);
                return {
                    currentGradeIndex: o,
                    currentGrade: null === n || void 0 === n ? void 0 : n[o],
                    gradeCategories: n,
                    pointGradeName: r,
                    totalEarnedPoints: i
                }
            };
            const cc = {
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
            var lc = function() {
                var e = oc()
                  , n = e.currentGradeIndex
                  , t = e.currentGrade
                  , r = e.gradeCategories
                  , s = e.pointGradeName
                  , i = e.totalEarnedPoints
                  , c = (0,
                a.useState)(0)
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1]
                  , m = (0,
                a.useState)(!0)
                  , p = (0,
                u.Z)(m, 2)
                  , f = p[0]
                  , x = p[1];
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
                Qi(),
                (0,
                a.useEffect)((function() {
                    _(n)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    x(!0)
                }
                ), [d]);
                var h = (0,
                a.useMemo)((function() {
                    return !(!r || r.length <= 0) && (t && (null === t || void 0 === t ? void 0 : t.pointGradeName) === r[d].pointGradeName)
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
                  , C = n === r.length - 1;
                return (0,
                N.jsx)("div", {
                    className: cc.container,
                    children: (0,
                    N.jsx)("div", {
                        className: cc.cardBox,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(cc.content, f ? cc.fadeIn : cc.fadeOut),
                            children: [(0,
                            N.jsx)("div", {
                                className: cc.levelLogoBox,
                                children: (0,
                                N.jsx)("img", {
                                    src: null !== v && void 0 !== v && v.logo ? "".concat(o.Z.cdnBaseUrl).concat(null === v || void 0 === v ? void 0 : v.logo) : "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: y()(cc.levelLogo, n >= d ? cc.logoLight : cc.logoGrade)
                                })
                            }), 0 !== d && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-left-centered-md", cc.leftBtn, cc.switchBtn),
                                onClick: k
                            }), d !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-right-centered-md", cc.rightBtn, cc.switchBtn),
                                onClick: j
                            }), (0,
                            N.jsx)("div", {
                                className: cc.currentGrade,
                                children: h && (0,
                                Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            N.jsx)("div", {
                                className: cc.gradeTitle,
                                children: null === v || void 0 === v ? void 0 : v.pointGradeName
                            }), (0,
                            N.jsx)("div", {
                                className: cc.progressNum,
                                children: v ? h && C ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        _t.uf)(i)
                                    }), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : h ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        _t.uf)(i)
                                    }), " /", " ", (0,
                                    _t.uf)(v.upperBound), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                N.jsx)(N.Fragment, {
                                    children: v.upperBound ? (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        _t.uf)(v.lowerBound),
                                        top: (0,
                                        _t.uf)(v.upperBound)
                                    }) : (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        _t.uf)(v.lowerBound)
                                    })
                                }) : ""
                            }), h && !C && (0,
                            N.jsx)("div", {
                                className: cc.progressSlide,
                                children: (0,
                                N.jsx)("div", {
                                    className: cc.progress,
                                    style: {
                                        width: "".concat(i / (Number(null === v || void 0 === v ? void 0 : v.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const uc = "License_loader__4L8AA"
              , dc = "License_container__MxoNJ"
              , _c = "License_pageTitle__h+Yja"
              , mc = "License_verifiedUsers__q-uxi"
              , pc = "License_avatars__3HegJ"
              , fc = "License_usersCount__fkW5h";
            var xc = t(48006)
              , hc = t(40544);
            t(25801);
            const vc = "LicenseCard_licenseCard__+wyQA"
              , gc = "LicenseCard_certified__jm59h"
              , kc = "LicenseCard_header__LUvW7"
              , jc = "LicenseCard_title__rMFOB"
              , Nc = "LicenseCard_content__i2ESe"
              , Cc = "LicenseCard_innerCard__n57Gb"
              , wc = "LicenseCard_details__boiyi"
              , bc = "LicenseCard_label__JX11k"
              , yc = "LicenseCard_link__19+Q+"
              , Zc = "LicenseCard_linkIcon__oNENM"
              , Pc = "LicenseCard_points__MkLL5"
              , Tc = "LicenseCard_icon__b6JLr"
              , Oc = "LicenseCard_certifyBtn__Z6vHo"
              , Sc = "LicenseCard_infoPopoverDesc__Km8Og"
              , Ec = "LicenseCard_gradeImage__fd+PJ";
            var Bc = function() {
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
              , Ic = function(e) {
                var n = e.showCertifyBottomSheet
                  , t = (0,
                s.useLocation)()
                  , a = Ke().accumPoints
                  , r = ho()
                  , i = r.accountBindingInfo
                  , c = r.isCertified
                  , l = oc().currentGrade;
                return (0,
                N.jsxs)("section", {
                    className: y()(vc, (0,
                    rn.Z)({}, gc, c)),
                    children: [(0,
                    N.jsxs)("div", {
                        className: kc,
                        children: [(0,
                        N.jsx)(Bc, {}), (0,
                        N.jsx)("span", {
                            className: jc,
                            children: c ? (0,
                            Z.O4)("ok_game_okxracer_label_phase4_certified") : (0,
                            Z.O4)("ok_game_okxracer_label_phase4_uncertified")
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: Nc,
                        children: [(0,
                        N.jsxs)("div", {
                            className: Cc,
                            children: [(0,
                            N.jsxs)("div", {
                                className: wc,
                                children: [(0,
                                N.jsx)("p", {
                                    className: bc,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                                }), (0,
                                N.jsxs)(s.Link, {
                                    to: {
                                        pathname: G,
                                        hash: t.hash
                                    },
                                    className: yc,
                                    children: [(0,
                                    xc.T)(null === i || void 0 === i ? void 0 : i.pointGradeName), (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okds-arrow-chevron-right-centered-md",
                                        className: Zc
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: Pc,
                                    children: [(0,
                                    N.jsx)("span", {
                                        className: bc,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned")
                                    }), "\xa0", (0,
                                    _t.uf)(a), (0,
                                    N.jsx)(hc.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                        contentClassName: Sc,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: Tc
                                        })
                                    })]
                                })]
                            }), l && (0,
                            N.jsx)(Y.Z, {
                                pictureClassName: Ec,
                                className: Ec,
                                src: "".concat(o.Z.cdnBaseUrl, "/").concat(l.logo)
                            })]
                        }), !c && (0,
                        N.jsx)(an, {
                            className: Oc,
                            size: H.default.SIZE.md,
                            text: (0,
                            Z.O4)("ok_game_okxracer_btn_phase4_certify"),
                            onClick: n
                        })]
                    })]
                })
            }
              , Rc = function() {
                var e, n = I().uid, t = ho(), r = t.accountBindingInfo, s = t.isCertified, i = t.getAccountBindingInfo, d = t.isLoading, _ = (0,
                a.useState)(!1), m = (0,
                u.Z)(_, 2), p = m[0], f = m[1], x = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var n, t, a, r = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 0 && void 0 !== r[0] && r[0],
                                t = r.length > 1 ? r[1] : void 0,
                                e.prev = 2,
                                e.next = 5,
                                i(n, t);
                            case 5:
                                a = e.sent,
                                !n || null !== a && void 0 !== a && a.isKyc && a.isConnectTelegram || J(!1, (0,
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
                        telegramid: n
                    })
                }
                ), [n]),
                d)
                    return (0,
                    N.jsx)("div", {
                        className: uc,
                        children: (0,
                        N.jsx)(ka.Z, {})
                    });
                var h = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0
                  , v = function() {
                    f(!0)
                };
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("div", {
                        className: dc,
                        children: [!s && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)($r, {
                                className: _c,
                                html: (0,
                                Z.O4)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            N.jsxs)("div", {
                                className: mc,
                                children: [(0,
                                N.jsx)(Y.Z, {
                                    className: pc,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                N.jsx)("span", {
                                    className: fc,
                                    children: h > 0 ? (0,
                                    _t.uf)(h) : "--"
                                }), (0,
                                Z.O4)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        N.jsx)(Ic, {
                            showCertifyBottomSheet: v
                        }), (0,
                        N.jsx)(wo, {
                            showCertifyBottomSheet: v
                        }), (0,
                        N.jsx)(Ho, {
                            showCertifyBottomSheet: v
                        })]
                    }), (0,
                    N.jsx)(ic, {
                        visible: p,
                        onClose: function() {
                            f(!1)
                        },
                        getAccountBindingInfo: x
                    })]
                })
            }
              , Lc = function() {
                return (0,
                N.jsx)(vo, {
                    children: (0,
                    N.jsx)(yo, {
                        children: (0,
                        N.jsx)(no, {
                            children: (0,
                            N.jsxs)(ni, {
                                animationPath: [G],
                                children: [(0,
                                N.jsx)(s.Route, {
                                    path: M,
                                    component: Rc,
                                    exact: !0
                                }), (0,
                                N.jsx)(s.Route, {
                                    path: W,
                                    component: ao,
                                    exact: !0
                                }), (0,
                                N.jsx)(s.Route, {
                                    path: G,
                                    component: C(lc),
                                    exact: !0
                                })]
                            })
                        })
                    })
                })
            };
            const Ac = "QrCode_container__r4Fu7"
              , Dc = "QrCode_qrCode__16PWa"
              , Fc = "QrCode_title__+cibb"
              , Uc = "QrCode_message__eaOzW";
            var Mc = function() {
                return (0,
                N.jsxs)("div", {
                    className: Ac,
                    children: [(0,
                    N.jsx)(Y.Z, {
                        className: Dc,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    N.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            qr.dU)((0,
                            Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: Fc
                    }), (0,
                    N.jsx)("p", {
                        className: Uc,
                        children: (0,
                        Z.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            }
              , Gc = t(42982);
            const Wc = "PullupList_loading__+51Dh"
              , Vc = "PullupList_listLoadItem__XcvkH"
              , Hc = "PullupList_listLeft__4eGh6"
              , Yc = "PullupList_listRight__w7Ely"
              , Kc = "PullupList_listLoading__whJeg";
            var zc = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(Vc),
                    children: [(0,
                    N.jsx)(os, {
                        className: Hc
                    }), (0,
                    N.jsx)(os, {
                        className: Yc
                    })]
                })
            }
              , Xc = function() {
                return (0,
                N.jsx)("div", {
                    className: Kc,
                    children: Array(3).fill(null).map((function(e, n) {
                        return (0,
                        N.jsx)(zc, {}, n)
                    }
                    ))
                })
            }
              , Jc = function(e) {
                var n = e.loadData
                  , t = e.children
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
                  , m = _[0]
                  , p = _[1]
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
                        var t;
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
                                    return p(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    n(f.current.page, f.current.total);
                                case 6:
                                    (t = e.sent) && t.rows ? (f.current.page += 1,
                                    o((function(e) {
                                        return [].concat((0,
                                        Gc.Z)(e), (0,
                                        Gc.Z)(t.rows))
                                    }
                                    )),
                                    f.current.total = 0 === t.rows.length ? i.length : t.total) : f.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    f.current.stop = !0;
                                case 13:
                                    p(!1);
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
                Ur.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , w = function(e) {
                    e[0].isIntersecting && !m && !1 === f.current.stop && k(!g)
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
                ), [m]),
                (0,
                a.useEffect)((function() {
                    C()
                }
                ), [g]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [i.map((function(e, n) {
                        return t(e, n)
                    }
                    )), (0,
                    N.jsx)("div", {
                        className: Wc,
                        ref: x,
                        children: m && (0,
                        N.jsx)(Xc, {})
                    })]
                })
            };
            const qc = "InviteList_listItem__q4jhG"
              , Qc = "InviteList_name__LLQgt"
              , $c = "InviteList_point__kXtCn"
              , el = "InviteList_earnedPrice__4vAfw"
              , nl = "InviteList_pointNumber__v4P1H";
            var tl = function() {
                var e = (0,
                a.useState)(0)
                  , n = (0,
                u.Z)(e, 2)
                  , t = n[0]
                  , r = n[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n, t) {
                        var a, s, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = !1,
                                    1 === n && (a = !0),
                                    s = {
                                        pageNo: n
                                    },
                                    t && t >= 0 && (s.total = t),
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        className: el,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            N.jsx)("span", {
                                className: nl,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    _t.uf)(t)
                                })
                            })
                        })
                    }), (0,
                    N.jsx)(Jc, {
                        loadData: s,
                        children: function(e, n) {
                            return (0,
                            N.jsxs)("div", {
                                className: qc,
                                children: [(0,
                                N.jsx)("div", {
                                    className: Qc,
                                    children: e.extInviteeName
                                }), (0,
                                N.jsx)("div", {
                                    className: $c,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        _t.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(n))
                        }
                    })]
                })
            };
            const al = "ReferralsPage_container__V48m1"
              , rl = "ReferralsPage_inviteDetail__L1MhM"
              , sl = "ReferralsPage_detailItem__ujOp+"
              , il = "ReferralsPage_dot__zKW7L"
              , ol = "ReferralsPage_detailTitle__OE657"
              , cl = "ReferralsPage_detailInfo__YC+Y9"
              , ll = "ReferralsPage_inviteList__Jksx8";
            var ul = function() {
                var e = I().uid
                  , n = [{
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
                    className: al,
                    children: [(0,
                    N.jsx)($r, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    N.jsx)("div", {
                        className: rl,
                        children: n.map((function(e) {
                            return (0,
                            N.jsxs)("div", {
                                className: sl,
                                children: [(0,
                                N.jsx)("div", {
                                    className: il
                                }), (0,
                                N.jsx)("div", {
                                    className: ol,
                                    children: e.title
                                }), (0,
                                N.jsx)("div", {
                                    className: cl,
                                    children: e.detailInfo
                                })]
                            }, e.title)
                        }
                        ))
                    }), (0,
                    N.jsx)("div", {
                        className: ll,
                        children: (0,
                        N.jsx)(tl, {})
                    }), (0,
                    N.jsx)(ms, {})]
                })
            };
            const dl = {
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
            var _l = function() {
                var e = di().partner
                  , n = (0,
                s.useHistory)().replace
                  , t = (0,
                s.useLocation)().hash;
                if (Qi(),
                (0,
                a.useEffect)((function() {
                    e || n(D + t)
                }
                ), [t, e, n]),
                !e)
                    return null;
                var r = e.numCompletedTasks
                  , i = e.numTasks
                  , c = e.tasks
                  , l = e.logo
                  , u = e.groupName
                  , d = e.groupDesc
                  , _ = e.totalPoints
                  , m = e.participants;
                return (0,
                N.jsxs)("div", {
                    className: dl.container,
                    children: [(0,
                    N.jsxs)("div", {
                        className: dl.header,
                        children: [(0,
                        N.jsx)(ti.Z, {
                            size: ai.Z.sm,
                            className: dl.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(l)
                        }), (0,
                        N.jsx)("h1", {
                            className: dl.title,
                            children: u
                        })]
                    }), (0,
                    N.jsx)("p", {
                        className: dl.desc,
                        children: d
                    }), (0,
                    N.jsxs)("div", {
                        className: dl.status,
                        children: [(0,
                        N.jsxs)("div", {
                            className: dl.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: dl.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: dl.statusValue,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    _t.uf)(_, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: dl.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: dl.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            N.jsxs)("div", {
                                className: dl.statusValue,
                                children: [(0,
                                N.jsx)(P.Z, {
                                    className: y()("okx-growth-friends", dl.participantsIcon)
                                }), _t.ag.shortNumber(m, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: dl.tasks,
                        children: [(0,
                        N.jsxs)("div", {
                            className: dl.taskListHeader,
                            children: [(0,
                            N.jsx)("span", {
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            N.jsx)("span", {
                                className: dl.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(r, "/").concat(i)
                                    })
                                }
                            })]
                        }), (0,
                        N.jsx)(qi, {
                            tasks: c
                        })]
                    })]
                })
            };
            const ml = "index_backgroundWrapper__qN2sL"
              , pl = "index_topContainer__Oestq"
              , fl = "index_pointsContainer__uT3xm"
              , xl = "index_pointsNameBigger__vMdga"
              , hl = "index_pointsNameSmaller__RJqmJ"
              , vl = "index_pointsValue__wGe00"
              , gl = "index_availablePointsValue__n8yPm"
              , kl = "index_pointsDetails__nXNoJ"
              , jl = "index_infoIcon__FqneN";
            var Nl = function() {
                var e = Ke()
                  , n = e.points
                  , t = e.accumPoints
                  , a = e.basePoint
                  , r = e.autopilotPointsPerHour;
                return (0,
                N.jsx)("div", {
                    className: ml,
                    children: (0,
                    N.jsxs)("div", {
                        className: pl,
                        children: [(0,
                        N.jsxs)("div", {
                            className: fl,
                            children: [(0,
                            N.jsx)("div", {
                                className: xl,
                                children: (0,
                                Z.O4)("ok_game_okxracer_available_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: gl,
                                children: mt.yx.thousandFormat(n || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: fl,
                            children: [(0,
                            N.jsxs)("div", {
                                className: xl,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                N.jsx)(hc.Z, {
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: hc.Z.TYPES.neutral,
                                    children: (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okx-growth-information",
                                        className: jl
                                    })
                                })]
                            }), (0,
                            N.jsx)("div", {
                                className: vl,
                                children: mt.yx.thousandFormat(t || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: kl,
                            children: [(0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsx)("div", {
                                    className: hl,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase42_base_pts_win")
                                }), (0,
                                N.jsxs)("div", {
                                    className: vl,
                                    children: ["\ud83c\udfc1 ", mt.yx.thousandFormat(a || 0)]
                                })]
                            }), (0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsxs)("div", {
                                    className: hl,
                                    children: [(0,
                                    Z.O4)("ok_game_okxracer_text_phase42_hourly_autopts"), (0,
                                    N.jsx)(hc.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                        type: hc.Z.TYPES.neutral,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: jl
                                        })
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: vl,
                                    children: ["\ud83c\udfc1 ", mt.yx.thousandFormat(r || 0)]
                                })]
                            })]
                        })]
                    })
                })
            };
            const Cl = "Tag_tag__tkWly";
            var wl = function(e) {
                var n = e.text
                  , t = e.className;
                return (0,
                N.jsx)("span", {
                    className: y()(Cl, t),
                    children: n || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
              , bl = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === Fn.DailyBoost
            }
              , yl = function(e) {
                return "actionType"in e && e.actionType === Oe.UnLock
            }
              , Zl = function(e) {
                var n = e.pointCost
                  , t = e.curStage
                  , a = e.totalStage;
                return !bl(e) && t >= a ? "" : " \ud83c\udfc1 ".concat(0 == n ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                _t.uf)(-n, {
                    zeroSign: "-"
                }), " pts"))
            };
            const Pl = "index_sheet__FbHHx"
              , Tl = "index_sheet-icon__H2xCV"
              , Ol = "index_boostSheetTag__NbYFf"
              , Sl = "index_sheet-title__RInQ-"
              , El = "index_sheet-desc__W9myB"
              , Bl = "index_sheet-data__FALtV"
              , Il = "index_sheet-point__Xrsvs"
              , Rl = "index_sheet-lvl__f1+W-"
              , Ll = "index_lockBtnContainer__4DPO7"
              , Al = "index_btn__bxKiJ"
              , Dl = "index_boost-data-split-point__TaGIo";
            var Fl = function(e) {
                var n = e.boost
                  , t = e.onClick
                  , a = n
                  , r = a.context
                  , s = a.curStage
                  , i = a.totalStage
                  , c = a.isLocked
                  , l = r.logo
                  , u = r.name
                  , d = r.desc
                  , _ = r.btnText
                  , m = yl(r)
                  , p = !1
                  , f = d
                  , x = _;
                return m && (c ? (f = r.unlockDescription,
                x = r.unlockButtonText) : f = r.ruleDescription,
                s === i && (p = !0,
                x = r.activatedButtonText)),
                (0,
                N.jsxs)("div", {
                    className: Pl,
                    children: [(0,
                    N.jsx)(Y.Z, {
                        className: Tl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(l)
                    }), m && (0,
                    N.jsx)(wl, {
                        className: Ol
                    }), (0,
                    N.jsx)("div", {
                        className: Sl,
                        children: u
                    }), (0,
                    N.jsx)("div", {
                        className: El,
                        children: f
                    }), (0,
                    N.jsxs)("div", {
                        className: Bl,
                        children: [(0,
                        N.jsx)("span", {
                            className: Il,
                            children: Zl(n)
                        }), (bl(n) || s < i) && (0,
                        N.jsx)("span", {
                            className: Dl
                        }), (0,
                        N.jsx)("span", {
                            className: Rl,
                            children: bl(n) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), m && c ? (0,
                    N.jsx)(In, {
                        to: M,
                        className: Ll,
                        children: (0,
                        N.jsx)(an, {
                            text: x
                        })
                    }) : (0,
                    N.jsx)(an, {
                        onClick: function() {
                            t(n)
                        },
                        className: Al,
                        text: x,
                        disabled: p
                    })]
                })
            };
            const Ul = "index_boost-item__k6pnm"
              , Ml = "index_boost-icon__wH6Dh"
              , Gl = "index_boostIconLoading__PFCBM"
              , Wl = "index_boost-title__9R-Ry"
              , Vl = "index_newTag__tgIea"
              , Hl = "index_boost-data__+0cnG"
              , Yl = "index_boost-data-split-point__moT+k"
              , Kl = "index_boost-data-stage__8CAgC"
              , zl = "index_boostItemPlaceholder__NaUkk"
              , Xl = "index_locked__sM-YP"
              , Jl = "index_unlockIcon__whxqz"
              , ql = "index_unlockButton__C3EY5";
            var Ql = function(e) {
                var n = e.boost
                  , t = n.curStage
                  , a = n.totalStage
                  , r = n.isLocked
                  , s = n.context;
                if (yl(s)) {
                    if (r)
                        return (0,
                        N.jsx)("div", {
                            className: Hl,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (t === a)
                        return (0,
                        N.jsx)("div", {
                            className: Hl,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                N.jsxs)("div", {
                    className: Hl,
                    children: [(0,
                    N.jsx)("span", {
                        children: Zl(n)
                    }), (bl(n) || t < a) && (0,
                    N.jsx)("span", {
                        className: Yl
                    }), (0,
                    N.jsx)("span", {
                        className: Kl,
                        children: bl(n) ? "".concat(a - t, "/").concat(a) : "Lvl ".concat(t)
                    })]
                })
            }
              , $l = function(e) {
                var n = e.boost
                  , t = e.onClick
                  , a = n.id
                  , r = n.context
                  , s = n.isLocked
                  , i = r.name
                  , c = r.logo
                  , l = yl(r);
                return (0,
                N.jsxs)("div", {
                    className: Ul,
                    onClick: function() {
                        t(a)
                    },
                    children: [(0,
                    N.jsx)(Y.Z, {
                        className: Ml,
                        src: "".concat(o.Z.cdnBaseUrl).concat(c)
                    }), (0,
                    N.jsxs)("div", {
                        className: Wl,
                        children: [i, l && (0,
                        N.jsx)(wl, {
                            className: Vl
                        })]
                    }), (0,
                    N.jsx)(Ql, {
                        boost: n
                    }), s && (0,
                    N.jsxs)("div", {
                        className: Xl,
                        children: [(0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-lock", Jl)
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
                            className: ql,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, a)
            }
              , eu = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(Ul, zl),
                    children: [(0,
                    N.jsx)(os, {
                        className: Gl
                    }), (0,
                    N.jsx)(os, {
                        className: Wl
                    }), (0,
                    N.jsx)(os, {
                        className: Hl
                    })]
                })
            };
            const nu = "index_boost-item-container__SW62L"
              , tu = "index_boost-item-padding__IwiTB";
            var au = function(e) {
                var n = e.onClick
                  , t = di().boosts
                  , r = (0,
                a.useCallback)((function(e) {
                    var a = t.find((function(n) {
                        return n.id === e
                    }
                    ));
                    a && n(a)
                }
                ), [t, n]);
                return (0,
                N.jsxs)("div", {
                    className: nu,
                    children: [(0,
                    N.jsx)("div", {
                        className: tu
                    }), t.length > 0 ? (0,
                    N.jsx)(N.Fragment, {
                        children: t.map((function(e) {
                            return (0,
                            N.jsx)($l, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(eu, {}), (0,
                        N.jsx)(eu, {}), (0,
                        N.jsx)(eu, {})]
                    }), (0,
                    N.jsx)("div", {
                        className: tu
                    })]
                })
            };
            const ru = "index_boosts-title__WRC2M"
              , su = "index_boost-area__eFBHi"
              , iu = "index_container__H6hcL";
            var ou = function() {
                var e = di()
                  , n = e.boosts
                  , t = e.upgradeBoost
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
                  , m = _[0]
                  , p = _[1]
                  , f = Ke().points
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(n) {
                        var a, r, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = n.pointCost,
                                    r = n.curStage,
                                    s = n.totalStage,
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
                                    t(n.id);
                                case 11:
                                    e.sent && J(!0);
                                case 13:
                                    p(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , h = (0,
                a.useCallback)((function(e) {
                    p(!0),
                    o(e)
                }
                ), []);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("div", {
                        className: ru,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), (0,
                        N.jsx)("span", {
                            children: n.length > 0 ? " (".concat(n.length, ")") : ""
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: su,
                        children: (0,
                        N.jsxs)("div", {
                            className: iu,
                            children: [(0,
                            N.jsx)(au, {
                                onClick: h
                            }), (0,
                            N.jsx)(Qe, {
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                N.jsx)(Fl, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            };
            const cu = "index_partnerItem__S1dkf"
              , lu = "index_title__bRRMU"
              , uu = "index_points__WQSip"
              , du = "index_state__gi-nK"
              , _u = "index_logo__y4rK-"
              , mu = "index_item-left__ej9+1"
              , pu = "index_item-right__3KRWi"
              , fu = "index_dot__4bynu"
              , xu = "index_participantsIcon__-tYh0"
              , hu = "index_icon__gS69A";
            var vu = function(e) {
                var n = e.name
                  , t = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                N.jsxs)("div", {
                    className: cu,
                    children: [(0,
                    N.jsx)(ti.Z, {
                        size: ai.Z.sm,
                        className: _u,
                        src: "".concat(o.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    N.jsxs)("div", {
                        className: mu,
                        children: [(0,
                        N.jsx)("div", {
                            className: lu,
                            children: n
                        }), (0,
                        N.jsx)("div", {
                            className: uu,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                _t.uf)(t, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        N.jsxs)("div", {
                            className: du,
                            children: [(0,
                            N.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    qr.dU)((0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            N.jsx)("span", {
                                className: fu
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-friends", xu)
                            }), (0,
                            N.jsx)("em", {
                                children: _t.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: pu,
                        children: (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", hu)
                        })
                    })]
                })
            };
            const gu = "index_container__wKNP9";
            function ku(e) {
                var n = e.tasks
                  , t = e.className
                  , a = di().setSelectedPartner
                  , r = n.length > 0;
                return (0,
                N.jsx)("div", {
                    className: y()(gu, t),
                    children: r ? n.map((function(e) {
                        var n = e.groupName
                          , t = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , o = e.logo;
                        return (0,
                        N.jsx)(In, {
                            to: F,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            N.jsx)(vu, {
                                name: n,
                                logo: o,
                                totalPoints: s,
                                numCompletedTasks: r,
                                numTasks: t,
                                participants: i
                            })
                        }, n)
                    }
                    )) : (0,
                    N.jsx)(ii, {})
                })
            }
            const ju = "TaskArea_tabPane__irXs6"
              , Nu = "TaskArea_tabName__-BL2R"
              , Cu = "TaskArea_list__cqK4t";
            var wu = function(e) {
                var n = e.isPartner
                  , t = void 0 !== n && n
                  , a = e.count
                  , r = t ? (0,
                Z.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                Z.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                N.jsxs)("div", {
                    className: Nu,
                    children: [r, " ", (0,
                    N.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , bu = function() {
                var e = di().tasks
                  , n = e.taskGroups
                  , t = e.ungroupedTasks;
                return (0,
                N.jsx)(N.Fragment, {
                    children: (0,
                    N.jsxs)(Jr.Z.Underline, {
                        size: Jr.Z.SIZE.xl,
                        children: [(0,
                        N.jsx)(Jr.Z.TabPane, {
                            className: ju,
                            tab: (0,
                            N.jsx)(wu, {
                                isPartner: !0,
                                count: n.length
                            }),
                            id: "partner",
                            children: (0,
                            N.jsx)(ku, {
                                tasks: n,
                                className: Cu
                            })
                        }), (0,
                        N.jsx)(Jr.Z.TabPane, {
                            className: ju,
                            tab: (0,
                            N.jsx)(wu, {
                                count: t.length
                            }),
                            id: "own",
                            children: (0,
                            N.jsx)(qi, {
                                tasks: t,
                                className: Cu
                            })
                        })]
                    })
                })
            };
            const yu = "TaskPage_container__5KfIM"
              , Zu = "TaskPage_block__kt8oo"
              , Pu = "TaskPage_blockBoost__rwGOo";
            var Tu = function() {
                return (0,
                N.jsxs)("div", {
                    className: yu,
                    children: [(0,
                    N.jsx)("div", {
                        className: Zu,
                        children: (0,
                        N.jsx)(Nl, {})
                    }), (0,
                    N.jsx)("div", {
                        className: Pu,
                        children: (0,
                        N.jsx)(ou, {})
                    }), (0,
                    N.jsx)("div", {
                        className: Zu,
                        children: (0,
                        N.jsx)(bu, {})
                    })]
                })
            }
              , Ou = function() {
                return (0,
                N.jsx)(_i, {
                    children: (0,
                    N.jsxs)(s.Switch, {
                        children: [(0,
                        N.jsx)(s.Route, {
                            path: D,
                            component: Tu,
                            exact: !0
                        }), (0,
                        N.jsx)(s.Route, {
                            path: F,
                            component: _l,
                            exact: !0
                        })]
                    })
                })
            }
              , Su = function() {
                var e = (0,
                a.useState)()
                  , n = (0,
                u.Z)(e, 2)
                  , t = n[0]
                  , r = n[1]
                  , i = (0,
                a.useMemo)(x, [])
                  , f = o.Z.locale;
                (0,
                a.useMemo)((function() {
                    p.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var k = function() {
                    var e = I().uid;
                    return (0,
                    a.useEffect)((function() {
                        var e, n, t, a, r, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (n = e.Telegram) && void 0 !== n && n.WebApp && (null === (t = (a = window.Telegram.WebApp).ready) || void 0 === t || t.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                        null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d),
                        z.k.info("TG MINI APP OKX Racer version: ".concat(window.Telegram.WebApp.version, " "), {
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
                            var n;
                            return (0,
                            c.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        _.d)(i);
                                    case 2:
                                        n = e.sent,
                                        r(n);
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
                    N.jsx)(m.Z, {
                        localeData: t,
                        fetchConfig: i,
                        children: k ? (0,
                        N.jsx)(N.Fragment, {
                            children: (0,
                            N.jsx)(Yn, {
                                children: (0,
                                N.jsx)(ze, {
                                    children: (0,
                                    N.jsx)(Xn, {
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
                                                        path: L,
                                                        component: Xr,
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: U,
                                                        component: C(Qs),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: D,
                                                        component: Ou
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: A,
                                                        component: C(ul),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: M,
                                                        component: Lc
                                                    })]
                                                })
                                            }), (0,
                                            N.jsx)("div", {
                                                className: v,
                                                children: (0,
                                                N.jsx)(Ln, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        N.jsx)(Mc, {})
                    })
                })
            }
              , Eu = document.getElementById("root");
            if (Eu) {
                var Bu = (0,
                N.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    N.jsx)(R, {
                        children: (0,
                        N.jsx)(Su, {})
                    })
                });
                (0,
                i.createRoot)(Eu).render(Bu)
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
      , n = {};
    function t(a) {
        var r = n[a];
        if (void 0 !== r)
            return r.exports;
        var s = n[a] = {
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, t),
        s.exports
    }
    t.m = e,
    t.amdO = {},
    ( () => {
        var e = [];
        t.O = (n, a, r, s) => {
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,r,s] = e[u], o = !0, c = 0; c < a.length; c++)
                        (!1 & s || i >= s) && Object.keys(t.O).every((e => t.O[e](a[c]))) ? a.splice(c--, 1) : (o = !1,
                        s < i && (i = s));
                    if (o) {
                        e.splice(u--, 1);
                        var l = r();
                        void 0 !== l && (n = l)
                    }
                }
                return n
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [a, r, s]
        }
    }
    )(),
    t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {
            a: n
        }),
        n
    }
    ,
    ( () => {
        var e, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        t.t = function(a, r) {
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
            t.r(s);
            var i = {};
            e = e || [null, n({}), n([]), n(n)];
            for (var o = 2 & r && a; "object" == typeof o && !~e.indexOf(o); o = n(o))
                Object.getOwnPropertyNames(o).forEach((e => i[e] = () => a[e]));
            return i.default = () => a,
            t.d(s, i),
            s
        }
    }
    )(),
    t.d = (e, n) => {
        for (var a in n)
            t.o(n, a) && !t.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: n[a]
            })
    }
    ,
    t.f = {},
    t.e = e => Promise.all(Object.keys(t.f).reduce(( (n, a) => (t.f[a](e, n),
    n)), [])),
    t.u = e => "common/" + e + ".b0933464.js",
    t.miniCssF = e => {}
    ,
    t.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n),
    ( () => {
        var e = {}
          , n = "growth:";
        t.l = (a, r, s, i) => {
            if (e[a])
                e[a].push(r);
            else {
                var o, c;
                if (void 0 !== s)
                    for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                        var d = l[u];
                        if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == n + s) {
                            o = d;
                            break
                        }
                    }
                o || (c = !0,
                (o = document.createElement("script")).charset = "utf-8",
                o.timeout = 120,
                t.nc && o.setAttribute("nonce", t.nc),
                o.setAttribute("data-webpack", n + s),
                o.src = a),
                e[a] = [r];
                var _ = (n, t) => {
                    o.onerror = o.onload = null,
                    clearTimeout(m);
                    var r = e[a];
                    if (delete e[a],
                    o.parentNode && o.parentNode.removeChild(o),
                    r && r.forEach((e => e(t))),
                    n)
                        return n(t)
                }
                  , m = setTimeout(_.bind(null, void 0, {
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
    t.r = e => {
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
          , n = {};
        t.f.remotes = (a, r) => {
            t.o(e, a) && e[a].forEach((e => {
                var a = t.R;
                a || (a = []);
                var s = n[e];
                if (!(a.indexOf(s) >= 0)) {
                    if (a.push(s),
                    s.p)
                        return r.push(s.p);
                    var i = n => {
                        n || (n = new Error("Container missing")),
                        "string" === typeof n.message && (n.message += '\nwhile loading "' + s[1] + '" from ' + s[2]),
                        t.m[e] = () => {
                            throw n
                        }
                        ,
                        s.p = 0
                    }
                      , o = (e, n, t, a, o, c) => {
                        try {
                            var l = e(n, t);
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
                      , c = (e, n, t) => o(n.get, s[1], a, 0, l, t)
                      , l = n => {
                        s.p = 1,
                        t.m[e] = e => {
                            e.exports = n()
                        }
                    }
                    ;
                    o(t, s[2], 0, 0, ( (e, n, a) => e ? o(t.I, s[0], 0, e, c, a) : i()), 1)
                }
            }
            ))
        }
    }
    )(),
    ( () => {
        t.S = {};
        var e = {}
          , n = {};
        t.I = (a, r) => {
            r || (r = []);
            var s = n[a];
            if (s || (s = n[a] = {}),
            !(r.indexOf(s) >= 0)) {
                if (r.push(s),
                e[a])
                    return e[a];
                t.o(t.S, a) || (t.S[a] = {});
                t.S[a];
                var i = [];
                return i.length ? e[a] = Promise.all(i).then(( () => e[a] = 1)) : e[a] = 1
            }
        }
    }
    )(),
    ( () => {
        var e;
        t.g.importScripts && (e = t.g.location + "");
        var n = t.g.document;
        if (!e && n && (n.currentScript && (e = n.currentScript.src),
        !e)) {
            var a = n.getElementsByTagName("script");
            if (a.length)
                for (var r = a.length - 1; r > -1 && !e; )
                    e = a[r--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        t.p = e + "../"
    }
    )(),
    ( () => {
        try {
            if (t.miniCssF) {
                var e = t.miniCssF;
                t.miniCssF = function(n) {
                    var t = e(n);
                    if ("string" !== typeof t)
                        return t;
                    var a = window._okGlobal || window.okGlobal;
                    return a && a.isRTL && /\.css$/.test(t) ? t.replace(/\.css$/, ".rtl.css") : t
                }
            }
        } catch (n) {}
    }
    )(),
    ( () => {
        var e = {
            6554: 0,
            8536: 0,
            5145: 0
        };
        t.f.j = (n, a) => {
            var r = t.o(e, n) ? e[n] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (/^(5145|8536)$/.test(n))
                    e[n] = 0;
                else {
                    var s = new Promise(( (t, a) => r = e[n] = [t, a]));
                    a.push(r[2] = s);
                    var i = t.p + t.u(n)
                      , o = new Error;
                    t.l(i, (a => {
                        if (t.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0),
                        r)) {
                            var s = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            o.message = "Loading chunk " + n + " failed.\n(" + s + ": " + i + ")",
                            o.name = "ChunkLoadError",
                            o.type = s,
                            o.request = i,
                            r[1](o)
                        }
                    }
                    ), "chunk-" + n, n)
                }
        }
        ,
        t.O.j = n => 0 === e[n];
        var n = (n, a) => {
            var r, s, [i,o,c] = a, l = 0;
            if (i.some((n => 0 !== e[n]))) {
                for (r in o)
                    t.o(o, r) && (t.m[r] = o[r]);
                if (c)
                    var u = c(t)
            }
            for (n && n(a); l < i.length; l++)
                s = i[l],
                t.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return t.O(u)
        }
          , a = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        a.forEach(n.bind(null, 0)),
        a.push = n.bind(null, a.push.bind(a))
    }
    )();
    var a = t.O(void 0, [2695, 8536, 5145, 7524, 9334, 1076, 2418, 8283, 2582, 5861, 4757, 1912, 9590], ( () => t(58288)));
    a = t.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.fea274a1.js.map