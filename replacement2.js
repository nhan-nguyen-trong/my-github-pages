( () => {
    var e = {
        41772: (e, t, n) => {
            "use strict";
            var a = n(41594)
              , r = n.n(a);
            const s = ReactRouterDOM;
            n(29068);
            var i = n(86619)
              , c = n(84854)
              , o = (n(79480),
            n(90675))
              , l = n(10467)
              , u = n(80296)
              , d = n(5007)
              , _ = n(44985)
              , m = n(79736)
              , p = n(3296)
              , x = (n(49825),
            n(99149))
              , h = function() {
                var e, t, n = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === n || void 0 === n ? void 0 : n.language_code) || "en"] || "en_US";
                return x.A.set("locale", a),
                window._okGlobal && (window._okGlobal.locale = a),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: a
                }
            }
              , f = n(64467)
              , v = n(83573)
              , k = n.n(v)
              , g = n(4536)
              , j = n(105)
              , N = n(89111)
              , A = (n(64365),
            n(62674),
            n(56609))
              , b = n(20376)
              , C = (n(99559),
            n(11694),
            n(89379))
              , w = n(71615)
              , y = (n(58704),
            {
                act: function() {}
            });
            "undefined" !== typeof window && (y = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var T = y
              , P = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                T.act({
                    action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                    anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                    params: {
                        telegramid: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , S = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).source;
                T.act({
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
              , B = n(69434)
              , I = n(59127)
              , W = n(37818);
            var E = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , R = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , L = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , O = "racer"
              , D = "car"
              , F = "team"
              , U = "lastConnectWalletType"
              , V = function() {
                return "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/247/149F6DE872696960.jpeg")
            }
              , G = function(e) {
                return e.TgWallet = "OKX Mini Wallet",
                e.OkxApp = "OKX Wallet",
                e
            }({})
              , M = function(e, t) {
                var n = (0,
                g.kW)("ok_game_okxracer_invitation_message")
                  , a = "https://t.me/".concat(E.BOT_NAME, "/").concat(E.MINI_APP_NAME)
                  , r = function(e, t) {
                    var n = "linkCode_".concat(e);
                    return t && (n += "__teamId_".concat(t)),
                    n
                }(e, t)
                  , s = "".concat(a, "?startapp=").concat(r);
                return {
                    appUrl: s,
                    shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(s), "&text=").concat(n)
                }
            }
              , Z = n(65983)
              , H = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: {
                    linkCode: "",
                    teamId: ""
                },
                gameId: 1,
                tgUsername: ""
            }
              , Y = (0,
            a.createContext)(H)
              , z = function() {
                return (0,
                a.useContext)(Y)
            }
              , K = function(e) {
                var t = e.children
                  , n = (0,
                a.useMemo)((function() {
                    var e, t, n = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, a = n.user, r = n.start_param;
                    if (a) {
                        var s = a.id
                          , i = a.username
                          , c = a.first_name
                          , o = a.last_name
                          , l = i;
                        if (c || o) {
                            var u = c && o ? " " : "";
                            l = "".concat(c).concat(u).concat(o)
                        }
                        var d = function(e) {
                            var t, n, a = new W.A((e || "").replaceAll("__", "&").replaceAll("_", "="));
                            return {
                                linkCode: null !== (t = a.get("linkCode")) && void 0 !== t ? t : "",
                                teamId: null !== (n = a.get("teamId")) && void 0 !== n ? n : ""
                            }
                        }(r);
                        return {
                            uid: null === s || void 0 === s ? void 0 : s.toString(),
                            username: l,
                            lastName: o,
                            firstName: c,
                            startParam: d,
                            gameId: 1,
                            tgUsername: i
                        }
                    }
                    return H
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.A)(r, 1)[0];
                return (0,
                Z.jsx)(Y.Provider, {
                    value: s,
                    children: t
                })
            }
              , X = function(e, t, n) {
                return e ? p.A.success((0,
                C.A)((0,
                C.A)({}, n), {}, {
                    title: t || (0,
                    g.kW)("ok_game_okxracer_success"),
                    placement: p.A.DIRECTION.topRight,
                    showClose: !1
                })) : p.A.error((0,
                C.A)((0,
                C.A)({}, n), {}, {
                    title: t || (0,
                    g.kW)("ok_game_okxracer_failed"),
                    placement: p.A.DIRECTION.topRight,
                    showClose: !1
                }))
            }
              , q = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                X(!1, t || (0,
                g.kW)("ok_game_okxracer_error_high_traffic"))
            }
              , J = n(99692);
            const Q = utils.ont;
            var $ = n.n(Q)
              , ee = function(e) {
                var t = (e || {}).data;
                return t && 0 === Number(t.code) ? Promise.resolve(t) : Promise.reject(t)
            }
              , te = function(e) {
                return function(t) {
                    if (!(0,
                    J.f)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        B.v.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                    }
                    return Promise.reject(t)
                }
            }
              , ne = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().get(t, n).then(ee, te(t)));
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
              , ae = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().getWithCache(t, n).then(ee, te(t)));
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
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().post(t, n, a).then(ee, te(t)));
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
              , se = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().put(t, n, a).then(ee, te(t)));
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
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().delete(t, n).then(ee, te(t)));
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
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = new FormData,
                                Object.entries(null !== n && void 0 !== n ? n : {}).forEach((function(e) {
                                    var t = (0,
                                    u.A)(e, 2)
                                      , n = t[0]
                                      , a = t[1];
                                    a instanceof Blob ? r.append(n, a) : r.append(n, String(a))
                                }
                                )),
                                e.abrupt("return", re(t, r, a));
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
            const oe = {
                get: ne,
                getWithCache: ae,
                post: re,
                put: se,
                postForm: ce,
                delete: ie
            };
            var le = n(23029)
              , ue = n(92901)
              , de = function() {
                function e() {
                    (0,
                    le.A)(this, e),
                    this.store = void 0,
                    this.store = new Map
                }
                return (0,
                ue.A)(e, [{
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
            de.instance = void 0;
            const _e = de.getInstance();
            function me(e, t) {
                return function() {
                    var n = (0,
                    l.A)((0,
                    o.A)().mark((function n(a, r) {
                        var s;
                        return (0,
                        o.A)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (s = "cache_".concat(a, "_").concat(JSON.stringify(r)),
                                    !_e.hasItem(s) || _e.isItemExpired(s, t)) {
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
            function pe() {
                var e, t;
                return (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initData) || ""
            }
            function xe(e, t, n) {
                return he.apply(this, arguments)
            }
            function he() {
                return (he = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                oe.get(t, (0,
                                C.A)((0,
                                C.A)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": pe()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                _e.setItem(n, r),
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
            function fe(e, t, n) {
                return ve.apply(this, arguments)
            }
            function ve() {
                return (ve = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !_e.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = _e.getItem(r),
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
            function ke(e, t, n) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe.post(t, n, (0,
                                C.A)((0,
                                C.A)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": pe()
                                    }
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var je = "/priapi/v1/affiliate"
              , Ne = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/info"), t));
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
              , Ae = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/assess"), t));
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
              , be = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    var a, r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                fe("".concat(je, "/game/racer/invitee-list"), {
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
                                e.abrupt("return", null);
                            case 13:
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
              , Ce = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(fe, 1e4),
                                e.next = 4,
                                n("".concat(je, "/game/racer/leaderboard/friends"), {
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
              , we = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(fe, 3e5),
                                e.next = 4,
                                n("".concat(je, "/game/racer/leaderboard/global"), {
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
              , ye = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e[e.ConnectEVMChain = 6] = "ConnectEVMChain",
                e
            }({})
              , Te = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(je, "/game/racer/group-boosts"), {}, t));
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
              , Pe = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/boost"), t));
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
              , Se = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(je, "/game/racer/group-tasks"), {}, t));
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
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/task"), t));
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
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/task-context"), t));
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
              , We = function(e) {
                return e[e.NotStarted = 0] = "NotStarted",
                e[e.InProgress = 1] = "InProgress",
                e[e.Ended = 2] = "Ended",
                e
            }({})
              , Ee = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n, a, r, s = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] ? s[0] : {
                                    isRecheckBinding: !1
                                },
                                e.next = 3,
                                ke("".concat(je, "/game/racer/account-binding"), t);
                            case 3:
                                if (n = e.sent,
                                a = n.code,
                                r = n.data,
                                0 !== a || !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", (0,
                                C.A)((0,
                                C.A)({}, r), {}, {
                                    isConnectTelegram: 1 === r.tgBindingStatus,
                                    isKyc: 1 === r.kycVerifyStatus,
                                    joinedDate: Number(r.joinedDate)
                                }));
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
              , Re = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n, a, r, s = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                e.next = 3,
                                fe("".concat(je, "/game/racer/campaigns"), {}, t);
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
              , Le = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", fe("".concat(je, "/game/racer/airdrop/tasks"), {}, t));
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
              , Oe = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", fe("".concat(je, "/game/racer/match/teams/info"), {}, t));
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
              , De = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", fe("".concat(je, "/game/racer/match/info"), {}, t));
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
              , Fe = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/match/teams/join"), {
                                    teamId: t
                                }));
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
              , Ue = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(je, "/game/racer/match/teams/leave"), {
                                    teamId: t
                                }));
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
              , Ve = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return fe("".concat(je, "/game/racer/opponents"), {
                    params: {
                        teamId: e
                    }
                }, t)
            }
              , Ge = {
                home: "/mini-app/racer",
                referrals: "/mini-app/racer/referrals",
                tasks: "/mini-app/racer/tasks",
                partner: "/mini-app/racer/tasks/partner",
                leaderboard: "/mini-app/racer/leaderboard",
                license: "/mini-app/racer/license",
                licenseGrades: "/mini-app/racer/license/grades",
                airdrop: "/mini-app/racer/license/airdrop",
                teamRace: "/mini-app/racer/team-race",
                teamList: "/mini-app/racer/teams",
                teamDetail: "/mini-app/racer/teams/:id",
                teamMembers: "/mini-app/racer/teams/:id/members",
                upgrades: "/mini-app/racer/upgrades",
                battleTeams: "/mini-app/racer/battle-teams",
                battleTeamMembers: "/mini-app/racer/battle-teams/:id/members",
                battle: "/mini-app/racer/battle"
            }
              , Me = n(63129);
            function Ze(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var He = {
                Friends: Ze(Ce, {
                    pageNo: 1
                }),
                Boost: Ze(Te, !0),
                Task: Ze(Se, !0),
                Invitee: Ze(be, {
                    pageNo: 1
                }, !0),
                Global: Ze(we, {
                    pageNo: 1
                }),
                Teams: Ze(Oe, !0)
            }
              , Ye = ["Friends", "Boost", "Task", "Invitee", "Global", "Teams"]
              , ze = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    var n;
                    return (0,
                    o.A)().wrap((function(e) {
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
                                    var t = Math.floor(1e3 * Me.o.mathRandom()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                n && He[n] && (a = He[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && B.v.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                ze(t);
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
            function Ke() {
                ze(Ye).catch((function(e) {
                    e instanceof Error && B.v.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Xe = (0,
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
              , qe = function() {
                return (0,
                a.useContext)(Xe)
            }
              , Je = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(0)
                  , r = (0,
                u.A)(n, 2)
                  , i = r[0]
                  , c = r[1]
                  , d = (0,
                a.useState)(0)
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , x = (0,
                a.useState)(0)
                  , h = (0,
                u.A)(x, 2)
                  , f = h[0]
                  , v = h[1]
                  , k = (0,
                a.useState)(0)
                  , j = (0,
                u.A)(k, 2)
                  , N = j[0]
                  , A = j[1]
                  , b = (0,
                a.useState)(0)
                  , C = (0,
                u.A)(b, 2)
                  , w = C[0]
                  , y = C[1]
                  , T = (0,
                a.useState)(0)
                  , P = (0,
                u.A)(T, 2)
                  , S = P[0]
                  , W = P[1]
                  , E = (0,
                a.useState)(0)
                  , R = (0,
                u.A)(E, 2)
                  , L = R[0]
                  , O = R[1]
                  , D = (0,
                a.useState)("")
                  , F = (0,
                u.A)(D, 2)
                  , U = F[0]
                  , V = F[1]
                  , G = (0,
                a.useState)({})
                  , M = (0,
                u.A)(G, 2)
                  , H = M[0]
                  , Y = M[1]
                  , K = (0,
                a.useState)(!0)
                  , q = (0,
                u.A)(K, 2)
                  , J = q[0]
                  , Q = q[1]
                  , $ = z()
                  , ee = $.username
                  , te = $.startParam
                  , ne = (0,
                a.useState)("")
                  , ae = (0,
                u.A)(ne, 2)
                  , re = ae[0]
                  , se = ae[1]
                  , ie = (0,
                a.useState)(!1)
                  , ce = (0,
                u.A)(ie, 2)
                  , oe = ce[0]
                  , le = ce[1]
                  , ue = (0,
                a.useState)(0)
                  , de = (0,
                u.A)(ue, 2)
                  , _e = de[0]
                  , me = de[1]
                  , pe = (0,
                a.useState)(!1)
                  , xe = (0,
                u.A)(pe, 2)
                  , he = xe[0]
                  , fe = xe[1]
                  , ve = (0,
                a.useState)()
                  , ke = (0,
                u.A)(ve, 2)
                  , ge = ke[0]
                  , je = ke[1]
                  , Ae = (0,
                a.useState)(!1)
                  , be = (0,
                u.A)(Ae, 2)
                  , Ce = be[0]
                  , we = be[1]
                  , ye = (0,
                a.useState)(!1)
                  , Te = (0,
                u.A)(ye, 2)
                  , Pe = Te[0]
                  , Se = Te[1]
                  , Be = te.linkCode
                  , Ie = te.teamId
                  , We = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                Ne({
                                    extUserName: ee,
                                    linkCode: Be
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (c(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                v(n.basePoint),
                                A(n.autopilotPointsPerHour),
                                V(n.linkCode),
                                y(n.numChances),
                                O(n.secondToRefresh),
                                W(n.numChancesTotal),
                                le(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                Se(Boolean(n.context.isShowNewbieCredit)),
                                fe(n.isUnderRiskControl),
                                me(n.autopilotPoints),
                                je({
                                    activityEndTime: n.context.activityEndTime,
                                    isShowActivityFlag: n.context.isShowActivityFlag && !n.isUnderRiskControl
                                }),
                                Y(n.context),
                                Q(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                X(!1, (0,
                                g.kW)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [Be, ee]);
                (0,
                a.useEffect)((function() {
                    we(Boolean(null === ge || void 0 === ge ? void 0 : ge.isShowActivityFlag))
                }
                ), [null === ge || void 0 === ge ? void 0 : ge.isShowActivityFlag]);
                var Ee = (0,
                s.useHistory)()
                  , Re = (0,
                s.useLocation)();
                (0,
                a.useEffect)((function() {
                    Ie && Ee.push({
                        pathname: Ge.teamDetail.replace(":id", Ie),
                        hash: Re.hash
                    })
                }
                ), []),
                (0,
                a.useEffect)((function() {
                    We().then(Ke).catch((function(e) {
                        e instanceof Error && B.v.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [We]),
                (0,
                a.useEffect)((function() {
                    var e = new I.A(L);
                    return L > 0 ? (e.start(),
                    e.addEventListener(I.A.Event.UPDATE, (function(e) {
                        se("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(I.A.Event.FINISH, (function() {
                        se(""),
                        We()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    se("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [L, We]),
                (0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || We()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [We]);
                var Le = (0,
                a.useCallback)((function(e) {
                    c(Math.max(e.points, 0)),
                    y(e.numChances),
                    O(e.secondToRefresh)
                }
                ), [])
                  , Oe = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                We();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [We])
                  , De = (0,
                a.useCallback)((function() {
                    le(!1)
                }
                ), [])
                  , Fe = (0,
                a.useCallback)((function() {
                    Se(!1)
                }
                ), [])
                  , Ue = (0,
                a.useCallback)((function() {
                    fe(!1)
                }
                ), [])
                  , Ve = (0,
                a.useCallback)((function() {
                    we((function(e) {
                        return !e
                    }
                    ))
                }
                ), [])
                  , Me = (0,
                a.useMemo)((function() {
                    return {
                        isLoading: J,
                        points: i,
                        accumPoints: m,
                        numChances: w,
                        numChancesTotal: S,
                        countdownDisplay: re,
                        updateGameInfo: Le,
                        linkCode: U,
                        updateGameInfoFromServer: Oe,
                        isShowAutopilotGainedPoint: oe,
                        autopilotPoints: _e,
                        isShowNewbie: Pe,
                        hideNewbie: Fe,
                        hideAutopilotSheet: De,
                        isShowRiskControlSheet: he,
                        hideRiskControlSheet: Ue,
                        activity: ge,
                        isShowActivityDetails: Ce,
                        toggleActivityDetailsBottomSheet: Ve,
                        context: H,
                        basePoint: f,
                        autopilotPointsPerHour: N
                    }
                }
                ), [J, i, m, w, S, re, Le, U, Oe, oe, _e, De, Pe, Fe, he, Ue, ge, Ce, Ve, H, f, N]);
                return (0,
                Z.jsx)(Xe.Provider, {
                    value: Me,
                    children: t
                })
            }
              , Qe = n(10954)
              , $e = new (function() {
                return (0,
                ue.A)((function e() {
                    var t = this;
                    (0,
                    le.A)(this, e),
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
                    this.connection = new Qe.A({
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
              , et = (0,
            a.createContext)($e)
              , tt = function(e) {
                var t = e.children;
                return (0,
                Z.jsx)(et.Provider, {
                    value: $e,
                    children: t
                })
            }
              , nt = (0,
            a.createContext)(null)
              , at = function() {
                return (0,
                a.useContext)(nt)
            }
              , rt = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useContext)(et);
                return (0,
                a.useEffect)((function() {
                    c.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [c]),
                (0,
                Z.jsx)(nt.Provider, {
                    value: s,
                    children: t
                })
            }
              , st = n(63010)
              , it = "racer"
              , ct = function() {
                var e;
                if (!(0,
                J.f)())
                    return st.A.getInstance(it) || st.A.init({
                        project: it
                    }),
                    null !== (e = st.A.getInstance(it)) && void 0 !== e ? e : st.A
            }
              , ot = "guessRecords_new";
            function lt(e) {
                var t = ct().get(ot) || [];
                t.unshift(e),
                ct().set(ot, t.slice(0, 5))
            }
            var ut = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , dt = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: ut.NONE,
                multiplier: 1,
                basePoints: 10,
                wonPoints: 10,
                predict: ut.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , _t = (0,
            a.createContext)(dt)
              , mt = function() {
                return (0,
                a.useContext)(_t)
            }
              , pt = function(e) {
                var t = e.children
                  , n = z().uid
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.A)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(5)
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , x = (0,
                a.useState)(null)
                  , h = (0,
                u.A)(x, 2)
                  , f = h[0]
                  , v = h[1]
                  , k = (0,
                a.useState)(null)
                  , j = (0,
                u.A)(k, 2)
                  , N = j[0]
                  , A = j[1]
                  , b = (0,
                a.useState)(ut.NONE)
                  , C = (0,
                u.A)(b, 2)
                  , w = C[0]
                  , y = C[1]
                  , P = at()
                  , S = qe().updateGameInfo
                  , B = (0,
                a.useRef)(ut.NONE)
                  , I = (0,
                a.useRef)(1)
                  , W = (0,
                a.useRef)(10)
                  , E = (0,
                a.useRef)(10)
                  , R = (0,
                a.useRef)(null)
                  , L = (0,
                a.useRef)(null)
                  , O = (0,
                a.useRef)(null)
                  , D = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n, a;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = B.current === ut.UP ? 1 : 0,
                                e.next = 4,
                                Ae({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (A(a.won),
                                S({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                I.current = a.multiplier,
                                W.current = a.basePoint,
                                E.current = a.wonPoint,
                                R.current = Number(a.changeRate),
                                L.current = a.prevPrice,
                                O.current = a.currentPrice,
                                lt({
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
                                A(null),
                                R.current = null,
                                X(!1, (0,
                                g.kW)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                B.current = ut.NONE,
                                c(!1),
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
                        p(t),
                        e = setInterval((function() {
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            v(null),
                            D())
                        }
                        ), 1e3)
                    }
                    return function() {
                        e && clearTimeout(e)
                    }
                }
                ), [D, i]),
                (0,
                a.useEffect)((function() {
                    if (i && P)
                        if (f) {
                            var e = P > f;
                            y(P === f ? ut.NONE : e ? ut.UP : ut.DOWN)
                        } else
                            v(P)
                }
                ), [f, i, P]);
                var F = (0,
                a.useCallback)((function(e) {
                    A(null),
                    c(!0),
                    B.current = e,
                    R.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === ut.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
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
                    e === ut.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
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
                ), [n])
                  , U = (0,
                a.useMemo)((function() {
                    return {
                        countdown: m,
                        onButtonClick: F,
                        result: N,
                        isPending: i,
                        currentTrend: w,
                        multiplier: I.current,
                        basePoints: W.current,
                        wonPoints: E.current,
                        predict: B.current,
                        changeRate: R.current,
                        prevPrice: L.current,
                        currentPrice: O.current
                    }
                }
                ), [m, w, i, I, F, N]);
                return (0,
                Z.jsx)(_t.Provider, {
                    value: U,
                    children: t
                })
            };
            const xt = "BackgroundVideo_staticImage__UuLtJ"
              , ht = "BackgroundVideo_video__ucncy"
              , ft = "BackgroundVideo_hide__hjiji";
            var vt = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png"
              , kt = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }]
              , gt = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }]
              , jt = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.A.cdnBaseUrl).concat(vt)
            }
              , Nt = function(e) {
                var t = e.muted
                  , n = mt().isPending
                  , r = (0,
                a.useRef)(null)
                  , s = (0,
                a.useRef)(null)
                  , i = (0,
                a.useState)(!1)
                  , o = (0,
                u.A)(i, 2)
                  , l = o[0]
                  , d = o[1]
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.A)(_, 2)
                  , p = m[0]
                  , x = m[1]
                  , h = (0,
                a.useState)(!1)
                  , v = (0,
                u.A)(h, 2)
                  , g = v[0]
                  , j = v[1];
                (0,
                a.useEffect)((function() {
                    r.current && (n && (j(!1),
                    r.current.currentTime = 0,
                    r.current.play().then((function() {
                        d(!0)
                    }
                    )).catch((function() {
                        d(!1)
                    }
                    ))),
                    r.current.onended = function() {
                        var e;
                        j(!0),
                        null === (e = s.current) || void 0 === e || e.play().then((function() {
                            x(!0)
                        }
                        )).catch((function() {
                            x(!1)
                        }
                        ))
                    }
                    )
                }
                ), [n]);
                var N = !l && !p
                  , A = l && g && p
                  , b = l && (!g || !p);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)(w.A, {
                        className: k()(xt, (0,
                        f.A)({}, ft, !N)),
                        src: "".concat(c.A.cdnBaseUrl).concat(vt)
                    }), (0,
                    Z.jsx)("video", (0,
                    C.A)((0,
                    C.A)({}, jt), {}, {
                        className: k()(ht, (0,
                        f.A)({}, ft, !A)),
                        ref: s,
                        loop: !0,
                        muted: !0,
                        children: kt.map((function(e) {
                            return (0,
                            Z.jsx)("source", {
                                src: "".concat(c.A.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    })), (0,
                    Z.jsx)("video", (0,
                    C.A)((0,
                    C.A)({}, jt), {}, {
                        className: k()((0,
                        f.A)({}, ft, !b)),
                        ref: r,
                        muted: t,
                        children: gt.map((function(e) {
                            return (0,
                            Z.jsx)("source", {
                                src: "".concat(c.A.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }
              , At = 2e3
              , bt = 500
              , Ct = "\ud83c\udfc1"
              , wt = "\ud83d\udee1\ufe0f"
              , yt = "\u2694\ufe0f"
              , Tt = "/cdn/assets/imgs/2412/E3873481ECAC30A3.svg";
            const Pt = "ButtonContainer_instructions__M6jR8"
              , St = "ButtonContainer_hide__3sPag"
              , Bt = "ButtonContainer_btnContainer__gg3An"
              , It = "ButtonContainer_btn__qj2Yv"
              , Wt = "ButtonContainer_pressed__dTgH5"
              , Et = "ButtonContainer_up__MF+PR"
              , Rt = "ButtonContainer_down__PqrYX"
              , Lt = "ButtonContainer_arrow__6fnZb";
            var Ot, Dt, Ft = function(e) {
                var t = e.style
                  , n = mt()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , c = qe().numChances
                  , o = (0,
                a.useState)()
                  , l = (0,
                u.A)(o, 2)
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
                    var t, n, a;
                    s || d || (_(e === ut.UP ? ut.DOWN : ut.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = c <= 0;
                return (0,
                Z.jsxs)("div", {
                    style: t,
                    children: [(0,
                    Z.jsx)("p", {
                        className: k()(Pt, s && St),
                        children: (0,
                        g.kW)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    Z.jsxs)("div", {
                        className: Bt,
                        children: [(0,
                        Z.jsxs)("button", {
                            disabled: p || d === ut.UP,
                            onClick: function() {
                                return m(ut.UP)
                            },
                            type: "button",
                            className: k()(It, Et, (0,
                            f.A)({}, Wt, i === ut.UP)),
                            children: [(0,
                            Z.jsx)(b.A, {
                                iconName: "okx-growth-up-new",
                                className: Lt
                            }), (0,
                            g.kW)("ok_game_okxracer_prompt_price_up")]
                        }), (0,
                        Z.jsxs)("button", {
                            disabled: p || d === ut.DOWN,
                            onClick: function() {
                                return m(ut.DOWN)
                            },
                            type: "button",
                            className: k()(It, Rt, (0,
                            f.A)({}, Wt, i === ut.DOWN)),
                            children: [(0,
                            Z.jsx)(b.A, {
                                iconName: "okx-growth-down-new",
                                className: Lt
                            }), (0,
                            g.kW)("ok_game_okxracer_prompt_price_down")]
                        })]
                    })]
                })
            }, Ut = n(44977), Vt = n(14636), Gt = n(53986), Mt = ["title", "titleId"];
            function Zt() {
                return Zt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Zt.apply(null, arguments)
            }
            function Ht(e, t) {
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
                }(e, Mt);
                return a.createElement("svg", Zt({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Ot || (Ot = a.createElement("path", {
                    d: "M0.203125 0.847946H3.21169L6.39055 10.6497L9.6451 0.847946H12.578L8.09351 14.0935H4.70651L0.203125 0.847946Z",
                    fill: "currentColor"
                })), Dt || (Dt = a.createElement("path", {
                    d: "M14.6885 19.2332C11.3204 19.2332 9.22009 17.4545 9.20117 14.7675H11.9827C12.0773 16.0921 13.0991 16.9815 14.7263 16.9815C16.0319 16.9815 16.997 16.4138 16.997 15.3731C16.997 14.2566 15.9184 14.0296 13.7046 13.5944C11.4718 13.1592 9.50392 12.459 9.50392 9.77207C9.50392 7.4257 11.4529 5.76054 14.4425 5.76054C17.5646 5.76054 19.5514 7.38786 19.5892 9.92344H16.8077C16.6753 8.80703 15.8427 8.03122 14.4425 8.03122C13.2315 8.03122 12.3611 8.54212 12.3611 9.56392C12.3611 10.6425 13.4018 10.8696 15.5967 11.2858C17.8674 11.7021 19.8541 12.4212 19.8541 15.0514C19.8541 17.5302 17.7917 19.2332 14.6885 19.2332Z",
                    fill: "currentColor"
                })))
            }
            var Yt = a.forwardRef(Ht);
            n.p;
            var zt = n(41022)
              , Kt = (n(60611),
            n(44273));
            n(26202);
            const Xt = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var qt = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Xt.closeBtn,
                closeIconClassName: Xt.closeIcon
            }
              , Jt = function(e) {
                return (0,
                Z.jsx)(Kt.default, (0,
                C.A)((0,
                C.A)({}, qt), {}, {
                    topContent: e.title ? void 0 : (0,
                    Z.jsx)("div", {
                        className: Xt.topPadding
                    }),
                    zIndex: 999
                }, e))
            }
              , Qt = function(e) {
                var t = Kt.default.show((0,
                C.A)((0,
                C.A)({}, qt), {}, {
                    topContent: e.title ? void 0 : (0,
                    Z.jsx)("div", {
                        className: Xt.topPadding
                    }),
                    onClose: function() {
                        t.destroy()
                    }
                }, e));
                return t
            };
            const $t = "PrimaryButton_button__SJFHA"
              , en = "PrimaryButton_buttonText__19AJ7";
            var tn = ["text", "className"]
              , nn = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                Gt.A)(e, tn);
                return (0,
                Z.jsx)(A.default, (0,
                C.A)((0,
                C.A)({
                    category: A.default.CATEGORY.fill,
                    type: A.default.TYPE.primary,
                    size: A.default.SIZE.lg,
                    className: k()($t, n),
                    contentClassName: en
                }, a), {}, {
                    children: t
                }))
            };
            const an = "Timer_timer__j+KcR"
              , rn = "Timer_show__GFyz+"
              , sn = "Timer_label__nxjo+"
              , cn = "Timer_separator__CFi1G"
              , on = "Timer_timerValue__CaRO2";
            var ln = function(e) {
                var t = e.endTime
                  , n = e.label
                  , r = (0,
                a.useRef)(new I.A.Absolute(t,{
                    interval: 1
                }))
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.A)(s, 2)
                  , c = i[0]
                  , o = i[1];
                return (0,
                a.useEffect)((function() {
                    var e = r.current;
                    return e.start().addEventListener(I.A.Event.UPDATE, (function(e) {
                        o(e)
                    }
                    )),
                    function() {
                        e.end()
                    }
                }
                ), []),
                (0,
                Z.jsxs)("div", {
                    className: k()(an, (0,
                    f.A)({}, rn, c)),
                    children: [n && (0,
                    Z.jsx)("span", {
                        className: sn,
                        children: n
                    }), Number(null === c || void 0 === c ? void 0 : c.day) > 0 && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("span", {
                            className: on,
                            children: null === c || void 0 === c ? void 0 : c.day
                        }), (0,
                        Z.jsx)("span", {
                            className: cn,
                            children: ":"
                        })]
                    }), (0,
                    Z.jsx)("span", {
                        className: on,
                        children: null === c || void 0 === c ? void 0 : c.hour
                    }), (0,
                    Z.jsx)("span", {
                        className: cn,
                        children: ":"
                    }), (0,
                    Z.jsx)("span", {
                        className: on,
                        children: null === c || void 0 === c ? void 0 : c.minute
                    }), (0,
                    Z.jsx)("span", {
                        className: cn,
                        children: ":"
                    }), (0,
                    Z.jsx)("span", {
                        className: on,
                        children: null === c || void 0 === c ? void 0 : c.second
                    })]
                })
            };
            const un = "EventPopover_eventPopoverWrapper__65bP-"
              , dn = "EventPopover_eventPopover__B0CAq"
              , _n = "EventPopover_eventPopoverDesc__+lNFw"
              , mn = "EventPopover_eventPopoverBtn__BKIwS"
              , pn = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , xn = "EventPopover_eventPopoverArrow__M+sYF"
              , hn = "EventPopover_eventDetailsContainer__G1KfS"
              , fn = "EventPopover_title__Tie4q"
              , vn = "EventPopover_description__tVAy9"
              , kn = "EventPopover_disclaimer__jFZC3"
              , gn = "EventPopover_continueBtn__S2Sj-"
              , jn = "EventPopover_eventDetails__5xDB0"
              , Nn = "EventPopover_eventImg__0yapf";
            var An = function(e) {
                var t = e.children
                  , n = qe()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)(zt.A, {
                        zIndex: 998,
                        layerClassName: un,
                        popperClassName: dn,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: _n,
                        description: (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(A.default, {
                                className: mn,
                                type: A.default.TYPE.primary,
                                category: A.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                Z.jsx)(b.A, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: pn
                                }),
                                iconType: A.default.ICON_POSITION.tailing,
                                children: (0,
                                g.kW)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            Z.jsx)("svg", {
                                className: xn,
                                width: "8",
                                height: "4",
                                viewBox: "0 0 8 4",
                                fill: "none",
                                children: (0,
                                Z.jsx)("path", {
                                    d: "M4 4L8 0L0 0L4 4Z",
                                    fill: "#2F302D"
                                })
                            })]
                        }),
                        children: t
                    }), (0,
                    Z.jsx)(Jt, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        Z.jsxs)("div", {
                            className: hn,
                            children: [(0,
                            Z.jsxs)("div", {
                                className: jn,
                                children: [(0,
                                Z.jsx)(w.A, {
                                    pictureClassName: Nn,
                                    className: Nn,
                                    src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                Z.jsx)("h2", {
                                    className: fn,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                Z.jsx)("p", {
                                    className: vn,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                Z.jsx)(ln, {
                                    endTime: i,
                                    label: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                Z.jsx)("p", {
                                    className: kn,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            Z.jsx)(nn, {
                                className: gn,
                                onClick: function() {
                                    s()
                                },
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            };
            const bn = "Navbar_navbar__LF3-M"
              , Cn = "Navbar_link__qX0Sf"
              , wn = "Navbar_active__TCbF8"
              , yn = "Navbar_linkIcon__GtH54"
              , Tn = "Navbar_linkText__Szxi-"
              , Pn = "Navbar_newIndicator__IrNNw"
              , Sn = "Navbar_teamLink__f6QDM"
              , Bn = "Navbar_borderBox__qrzy1"
              , In = "Navbar_container__KynEL";
            var Wn = ["children", "className"]
              , En = ["iconName", "label", "onClick", "showNewIndicator"]
              , Rn = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                Gt.A)(e, Wn)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                Z.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , Ln = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , c = (0,
                Gt.A)(e, En)
                  , o = (0,
                s.useRouteMatch)({
                    path: c.to,
                    exact: c.to === Ge.home
                });
                return (0,
                Z.jsxs)(Rn, {
                    className: k()(Cn, o && wn),
                    to: c.to,
                    onClick: a,
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: t,
                        className: yn
                    }), i && (0,
                    Z.jsx)("span", {
                        className: Pn
                    }), (0,
                    Z.jsx)("span", {
                        className: Tn,
                        children: n
                    })]
                })
            }
              , On = function() {
                var e = (0,
                s.useRouteMatch)({
                    path: Ge.teamRace
                });
                return (0,
                Z.jsxs)(Rn, {
                    className: k()(Cn, Sn, e && wn),
                    to: Ge.teamRace,
                    children: [(0,
                    Z.jsx)("div", {
                        className: Bn,
                        children: (0,
                        Z.jsx)("div", {
                            className: In,
                            children: (0,
                            Z.jsx)(Yt, {
                                className: yn
                            })
                        })
                    }), (0,
                    Z.jsx)("span", {
                        className: Tn,
                        children: (0,
                        g.kW)("ok_game_okxracer_tab_teams")
                    })]
                })
            }
              , Dn = function() {
                var e = {
                    telegramid: z().uid
                };
                return (0,
                Z.jsxs)("nav", {
                    className: bn,
                    children: [(0,
                    Z.jsx)(An, {
                        children: (0,
                        Z.jsx)(Ln, {
                            iconName: "okx-growth-home",
                            to: Ge.home,
                            label: (0,
                            g.kW)("ok_game_okxracer_home")
                        })
                    }), (0,
                    Z.jsx)(Ln, {
                        iconName: "okx-growth-leaderboard",
                        to: Ge.leaderboard,
                        label: (0,
                        g.kW)("ok_game_okxracer_leaderboard"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
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
                    Z.jsx)(On, {}), (0,
                    Z.jsx)(Ln, {
                        iconName: "okx-growth-task-new",
                        to: Ge.tasks,
                        label: (0,
                        g.kW)("ok_game_okxracer_tasks"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
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
                    Z.jsx)(Ln, {
                        iconName: "okx-growth-surprises",
                        to: Ge.license,
                        label: (0,
                        g.kW)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            };
            const Fn = "RefuelTimer_container__cqcvg"
              , Un = "RefuelTimer_description__ekV6H"
              , Vn = "RefuelTimer_countdown__arVcO"
              , Gn = "RefuelTimer_timer__d-KfJ"
              , Mn = "RefuelTimer_square__tf6kF"
              , Zn = "RefuelTimer_upgradesLink__djl5r"
              , Hn = "RefuelTimer_hide__8ItGA";
            var Yn, zn = function(e) {
                var t = e.className
                  , n = e.showUpgrades
                  , a = void 0 === n || n
                  , r = qe().countdownDisplay;
                return (0,
                Z.jsx)("div", {
                    className: k()(t, Fn, (0,
                    f.A)({}, Hn, !r && !a)),
                    children: (0,
                    Z.jsxs)("p", {
                        className: Un,
                        children: [r && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)("span", {
                                className: Vn,
                                children: (0,
                                g.Vp)("ok_game_okxracer_nx_refill_time", {
                                    countDown: (0,
                                    Z.jsxs)("span", {
                                        className: Gn,
                                        children: ["\xa0", r]
                                    })
                                })
                            }), a && (0,
                            Z.jsx)("span", {
                                className: Mn
                            })]
                        }), a && (0,
                        Z.jsxs)(Rn, {
                            to: Ge.upgrades,
                            className: Zn,
                            children: [!r && (0,
                            Z.jsx)(b.A, {
                                iconName: "okx-growth-upgrades"
                            }), (0,
                            g.kW)("ok_game_okxracer_nav_upgrades"), (0,
                            Z.jsx)(b.A, {
                                iconName: "okx-growth-chevrons-right"
                            })]
                        })]
                    })
                })
            }, Kn = ["title", "titleId"];
            function Xn() {
                return Xn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Xn.apply(null, arguments)
            }
            function qn(e, t) {
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
                }(e, Kn);
                return a.createElement("svg", Xn({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Yn || (Yn = a.createElement("g", {
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
            var Jn = a.forwardRef(qn);
            n.p;
            var Qn = n(5485);
            n(8653);
            const $n = "FuelIndicator_fuelContainer__Pgx04"
              , ea = "FuelIndicator_line__wHfpC"
              , ta = "FuelIndicator_description__7OoNR"
              , na = "FuelIndicator_fuelIcon__UND6Y"
              , aa = "FuelIndicator_maxChances__DFhp2";
            var ra = function(e) {
                var t = e.className
                  , n = qe()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                Z.jsxs)("div", {
                    className: k()(t, $n),
                    children: [(0,
                    Z.jsx)("span", {
                        className: na,
                        children: "\u26fd\ufe0f"
                    }), (0,
                    Z.jsx)(Qn.A.Line, {
                        className: ea,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r), (0,
                    Z.jsxs)("p", {
                        className: ta,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: ["/\xa0", (0,
                            Z.jsx)("span", {
                                className: aa,
                                children: r
                            })]
                        })]
                    })]
                })
            };
            const sa = "CoinPrice_raceTrack__VGN58"
              , ia = "CoinPrice_run__3doXi"
              , ca = "CoinPrice_coinPriceContainer__52NRe"
              , oa = "CoinPrice_content__ucR5w"
              , la = "CoinPrice_fuelIndicator__q2PVS"
              , ua = "CoinPrice_refuelTimer__jlruk"
              , da = "CoinPrice_hide__aRbk4"
              , _a = "CoinPrice_label__xAjUS"
              , ma = "CoinPrice_value__IgHRV"
              , pa = "CoinPrice_slotMachine__7KR-o";
            function xa(e) {
                return (Math.abs(e) < 1e-4 ? Vt._u.ceilTruncate : Vt._u.floorTruncate)(e, 4)
            }
            const ha = "SlotMachine_row__PUR54"
              , fa = "SlotMachine_animate__ApX0l"
              , va = "SlotMachine_column__r2YRj"
              , ka = "SlotMachine_arrows__58P0s"
              , ga = "SlotMachine_columnContainer__ZCIlv"
              , ja = "SlotMachine_background__djzFS"
              , Na = "SlotMachine_slot__lr-ST"
              , Aa = "SlotMachine_staticColumn__LoOST"
              , ba = "SlotMachine_sm__QUnyw"
              , Ca = "SlotMachine_arrow__20R44"
              , wa = "SlotMachine_wentUp__h05Ms"
              , ya = "SlotMachine_down__9RjGw"
              , Ta = "SlotMachine_stable__5Lllg"
              , Pa = "SlotMachine_wentDown__sWswA"
              , Sa = "SlotMachine_up__Ae8lR";
            var Ba = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                Z.jsxs)("div", {
                    className: ga,
                    children: [(0,
                    Z.jsx)("div", {
                        className: ja
                    }), (0,
                    Z.jsxs)("div", {
                        className: va,
                        style: r,
                        children: [(0,
                        Z.jsx)("p", {
                            className: Na,
                            children: a
                        }), t && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "1"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "2"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "3"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "4"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "5"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "6"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "7"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "8"
                            }), (0,
                            Z.jsx)("p", {
                                className: Na,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , Ia = function() {
                var e = mt()
                  , t = e.changeRate
                  , n = e.isPending
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.A)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , o = (0,
                a.useState)(null)
                  , l = (0,
                u.A)(o, 2)
                  , d = l[0]
                  , _ = l[1]
                  , m = (0,
                a.useState)(!1)
                  , p = (0,
                u.A)(m, 2)
                  , x = p[0]
                  , h = p[1];
                return (0,
                a.useEffect)((function() {
                    n && h(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? ut.UP : 0 === e ? ut.NONE : ut.DOWN),
                    c(String(Math.abs(Number(xa(t)))).split("").filter((function(e) {
                        return "." !== e
                    }
                    )).map((function(e) {
                        return parseInt(e, 10)
                    }
                    ))),
                    h(!1)) : _(null)
                }
                ), [t]),
                (0,
                Z.jsxs)("div", {
                    className: k()(ha, x && fa),
                    children: [(0,
                    Z.jsx)("div", {
                        className: ga,
                        children: (0,
                        Z.jsxs)("div", {
                            className: k()(ka, (0,
                            f.A)((0,
                            f.A)((0,
                            f.A)({}, wa, d === ut.UP), Pa, d === ut.DOWN), Ta, d === ut.NONE)),
                            children: [(0,
                            Z.jsx)(b.A, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: k()(Ca, Sa)
                            }), (0,
                            Z.jsx)(b.A, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: k()(Ca, Ta)
                            }), (0,
                            Z.jsx)(b.A, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: k()(Ca, ya)
                            })]
                        })
                    }), (0,
                    Z.jsx)(Ba, {
                        animate: x,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    Z.jsx)("span", {
                        className: Aa,
                        children: "."
                    }), (0,
                    Z.jsx)(Ba, {
                        animate: x,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    Z.jsx)(Ba, {
                        animate: x,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    Z.jsx)(Ba, {
                        animate: x,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    Z.jsx)(Ba, {
                        animate: x,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    Z.jsx)("span", {
                        className: k()(Aa, ba),
                        children: "%"
                    })]
                })
            }
              , Wa = function(e) {
                var t = e.showUpgrades
                  , n = at()
                  , r = mt()
                  , s = r.isPending
                  , i = r.changeRate
                  , c = (0,
                a.useState)(!1)
                  , o = (0,
                u.A)(c, 2)
                  , l = o[0]
                  , d = o[1];
                (0,
                a.useEffect)((function() {
                    s && d(!0)
                }
                ), [s]),
                (0,
                a.useEffect)((function() {
                    var e, t = function() {
                        e && clearTimeout(e)
                    };
                    return s || (null === i ? d(!1) : e = setTimeout((function() {
                        d(!1)
                    }
                    ), bt)),
                    t
                }
                ), [i, s]);
                var _ = n ? "$".concat((0,
                Ut.ZV)(Vt._u.truncate(n, 1, !0))) : "--";
                return (0,
                Z.jsxs)("div", {
                    className: ca,
                    children: [(0,
                    Z.jsx)(Jn, {
                        className: k()(sa, s && ia)
                    }), (0,
                    Z.jsxs)("div", {
                        className: k()(oa, l && da),
                        children: [(0,
                        Z.jsx)("p", {
                            className: _a,
                            children: (0,
                            g.kW)("ok_game_okxracer_btc_price")
                        }), (0,
                        Z.jsx)("p", {
                            className: ma,
                            children: _
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: k()(oa, !l && da),
                        children: [(0,
                        Z.jsxs)("p", {
                            className: _a,
                            children: [(0,
                            g.kW)("ok_game_okxracer_btc_price"), " ", _]
                        }), (0,
                        Z.jsx)("div", {
                            className: pa,
                            children: (0,
                            Z.jsx)(Ia, {})
                        })]
                    }), (0,
                    Z.jsx)(ra, {
                        className: la
                    }), (0,
                    Z.jsx)("div", {
                        className: k()(ua, s && da),
                        children: (0,
                        Z.jsx)(zn, {
                            showUpgrades: t
                        })
                    })]
                })
            };
            const Ea = "GameCountdown_countdown__eQ6VX"
              , Ra = "GameCountdown_value__CVdxH";
            var La = function(e) {
                var t = e.className
                  , n = mt().countdown
                  , a = void 0 === n ? 5 : n;
                return (0,
                Z.jsxs)("p", {
                    className: k()(t, Ea),
                    children: ["00:0", (0,
                    Z.jsx)("span", {
                        className: Ra,
                        children: a
                    })]
                })
            };
            const Oa = "GuessResult_container__ECdpL"
              , Da = "GuessResult_content__IEuHN"
              , Fa = "GuessResult_title__fzYxg"
              , Ua = "GuessResult_description__R2fup"
              , Va = "GuessResult_stripes__t9gib"
              , Ga = "GuessResult_changeRateContainer__a5-N7"
              , Ma = "GuessResult_changeRate__yhVz3"
              , Za = "GuessResult_up__5vYDR"
              , Ha = "GuessResult_down__fa-oP"
              , Ya = "GuessResult_priceChange__xr6e8"
              , za = "GuessResult_price__Vk+bY";
            function Ka(e) {
                return (0,
                Ut.vv)((0,
                Ut.ZV)(Vt._u.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var Xa = function(e) {
                var t = e.className
                  , n = mt()
                  , r = n.result
                  , s = n.changeRate
                  , i = n.prevPrice
                  , o = n.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.A)(l, 2)
                  , _ = d[0]
                  , m = d[1];
                return (0,
                a.useEffect)((function() {
                    var e, t;
                    if (null !== r) {
                        var n, a, s, i;
                        if (null !== (n = window) && void 0 !== n && null !== (a = n.Telegram) && void 0 !== a && a.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, r ? "success" : "error");
                        e = setTimeout((function() {
                            m(!0),
                            t = setTimeout((function() {
                                m(!1)
                            }
                            ), At)
                        }
                        ), bt)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [r]),
                (0,
                Z.jsx)(Z.Fragment, {
                    children: _ && (0,
                    Z.jsxs)("div", {
                        className: k()(t, Oa),
                        children: [(0,
                        Z.jsx)(w.A, {
                            pictureClassName: Va,
                            className: Va,
                            src: "".concat(c.A.cdnBaseUrl).concat(Tt)
                        }), (0,
                        Z.jsxs)("div", {
                            className: Da,
                            children: [(0,
                            Z.jsx)("h2", {
                                className: Fa,
                                children: (0,
                                g.kW)(r ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                            }), (0,
                            Z.jsxs)("div", {
                                className: Ua,
                                children: [null !== s && (0,
                                Z.jsxs)("p", {
                                    className: Ga,
                                    children: [(0,
                                    g.kW)("ok_game_okxracer_btc_price"), (0,
                                    Z.jsx)("span", {
                                        className: k()(Ma, (0,
                                        f.A)((0,
                                        f.A)({}, Za, s > 0), Ha, s < 0)),
                                        children: (0,
                                        Ut.ZV)(xa(s), {
                                            style: "percent",
                                            signDisplay: !0
                                        })
                                    })]
                                }), i && o && (0,
                                Z.jsx)("p", {
                                    className: Ya,
                                    children: (0,
                                    g.Vp)("ok_game_okxracer_price_change", {
                                        previousPrice: (0,
                                        Z.jsx)("span", {
                                            className: za,
                                            children: Ka(i)
                                        }),
                                        currentPrice: (0,
                                        Z.jsx)("span", {
                                            className: za,
                                            children: Ka(o)
                                        })
                                    })
                                })]
                            })]
                        }), (0,
                        Z.jsx)(w.A, {
                            pictureClassName: Va,
                            className: Va,
                            src: "".concat(c.A.cdnBaseUrl).concat(Tt)
                        })]
                    })
                })
            };
            const qa = "Game_container__ZY3UI"
              , Ja = "Game_muteButton__3NpST"
              , Qa = "Game_headerWrapper__KN7Hs"
              , $a = "Game_coinPriceContainer__UEaiS"
              , er = "Game_backgroundVideo__FGmkD"
              , tr = "Game_muteButtonIcon__-YOFW"
              , nr = "Game_hide__WvlMd"
              , ar = "Game_headerContent__y9QYB"
              , rr = "Game_countdown__hQ5+r"
              , sr = "Game_resultOverlay__WVvD2";
            var ir = "backgroundVideoSoundOn"
              , cr = function(e) {
                var t = e.header
                  , n = e.headerWrapperClassName
                  , r = e.btnContainerMarginTop
                  , s = void 0 === r ? 30 : r
                  , i = e.showUpgrades
                  , c = ct()
                  , o = mt().isPending
                  , l = (0,
                a.useState)((function() {
                    var e = c.get(ir);
                    return Boolean(!e)
                }
                ))
                  , d = (0,
                u.A)(l, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)(!1)
                  , x = (0,
                u.A)(p, 2)
                  , h = x[0]
                  , f = x[1];
                return (0,
                a.useEffect)((function() {
                    var e;
                    return o ? f(!0) : e = setTimeout((function() {
                        f(!1)
                    }
                    ), 2500),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [o]),
                (0,
                Z.jsxs)("div", {
                    className: qa,
                    children: [(0,
                    Z.jsx)(A.default, {
                        category: A.default.CATEGORY.fill,
                        type: A.default.TYPE.quaternary,
                        size: A.default.SIZE.md,
                        className: Ja,
                        strictCircle: !0,
                        onClick: function() {
                            m((function(e) {
                                return c.set(ir, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        Z.jsx)(b.A, {
                            iconName: _ ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: tr
                        })
                    }), (0,
                    Z.jsxs)("div", {
                        className: k()(n, Qa),
                        children: [(0,
                        Z.jsx)("div", {
                            className: k()(ar, h && nr),
                            children: t
                        }), (0,
                        Z.jsx)(La, {
                            className: k()(rr, !h && nr)
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: $a,
                        children: [(0,
                        Z.jsx)("div", {
                            className: er,
                            children: (0,
                            Z.jsx)(Nt, {
                                muted: _
                            })
                        }), (0,
                        Z.jsx)(Wa, {
                            showUpgrades: i
                        })]
                    }), (0,
                    Z.jsx)(Ft, {
                        style: {
                            marginTop: s
                        }
                    }), (0,
                    Z.jsx)(Xa, {
                        className: sr
                    })]
                })
            };
            const or = "BattleProgressBar_container__zOm1x"
              , lr = "BattleProgressBar_progress__S8Llm"
              , ur = "BattleProgressBar_bar__aiwsB"
              , dr = "BattleProgressBar_notFull__HaKwq"
              , _r = "BattleProgressBar_countdown__xivBA";
            var mr = function(e) {
                var t = e.points
                  , n = e.defensePoints
                  , r = e.countDown
                  , s = e.onFinish
                  , i = (0,
                a.useRef)()
                  , c = (0,
                a.useState)({
                    minute: "01",
                    second: "00",
                    day: "00",
                    hour: "00",
                    total: 0
                })
                  , o = (0,
                u.A)(c, 2)
                  , l = o[0]
                  , d = o[1];
                (0,
                a.useEffect)((function() {
                    if (!r || r < Date.now())
                        return function() {}
                        ;
                    i.current = new I.A.Absolute(r,{
                        interval: 1
                    });
                    var e = i.current
                      , t = e.start()
                      , n = function(e) {
                        d(e)
                    };
                    return t.addEventListener(I.A.Event.UPDATE, n),
                    t.addEventListener(I.A.Event.FINISH, n),
                    t.addEventListener(I.A.Event.FINISH, s),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [r, s]);
                var _ = function(e, t) {
                    return e > t ? "100%" : "".concat(e / t * 50, "%")
                }(t, n);
                return (0,
                Z.jsxs)("div", {
                    className: or,
                    children: [(0,
                    Z.jsx)("div", {
                        className: lr,
                        children: (0,
                        Z.jsx)("div", {
                            className: k()(ur, (0,
                            f.A)({}, dr, "100%" !== _)),
                            style: {
                                width: _
                            }
                        })
                    }), (0,
                    Z.jsxs)("span", {
                        className: _r,
                        children: [l.minute, ":", l.second]
                    })]
                })
            }
              , pr = n(32843)
              , xr = {
                updateSelectedOpponentTeam: function() {},
                updateSelectedOpponent: function() {},
                startMatch: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
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
                accumulatedPoints: 0,
                incrementPoints: function() {},
                settleMatch: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
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
                countDown: 0,
                result: void 0
            }
              , hr = (0,
            a.createContext)(xr)
              , fr = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(void 0)
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(void 0)
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)(0)
                  , x = (0,
                u.A)(p, 2)
                  , h = x[0]
                  , f = x[1]
                  , v = (0,
                a.useState)(0)
                  , k = (0,
                u.A)(v, 2)
                  , g = k[0]
                  , j = k[1]
                  , N = (0,
                a.useState)(void 0)
                  , A = (0,
                u.A)(N, 2)
                  , b = A[0]
                  , C = A[1]
                  , w = (0,
                a.useCallback)((function(e) {
                    j((function(t) {
                        return t + e
                    }
                    ))
                }
                ), [])
                  , y = function(e) {
                    i(e)
                }
                  , T = function(e) {
                    m(e)
                };
                (0,
                a.useEffect)((function() {
                    m(void 0)
                }
                ), [s]),
                (0,
                a.useEffect)((function() {
                    f(0),
                    j(0),
                    C(void 0)
                }
                ), [_]);
                var P = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (_) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                a = _.extUserId,
                                ke("".concat(je, "/game/racer/match/start"), {
                                    opponentExtUserId: a
                                });
                            case 4:
                                t = e.sent,
                                null !== (n = t.data) && void 0 !== n && n.countdown && f(n.countdown);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                        var a
                    }
                    ), e)
                }
                ))), [_])
                  , S = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (_) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                a = _.extUserId,
                                ke("".concat(je, "/game/racer/match/settle"), {
                                    opponentExtUserId: a
                                });
                            case 4:
                                t = e.sent,
                                (n = t.data) && C(n);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                        var a
                    }
                    ), e)
                }
                ))), [_])
                  , B = (0,
                a.useMemo)((function() {
                    return {
                        selectedOpponentTeam: s,
                        updateSelectedOpponentTeam: y,
                        selectedOpponent: _,
                        updateSelectedOpponent: T,
                        startMatch: P,
                        settleMatch: S,
                        accumulatedPoints: g,
                        incrementPoints: w,
                        countDown: h,
                        result: b
                    }
                }
                ), [g, h, w, b, _, s, S, P]);
                return (0,
                Z.jsx)(hr.Provider, {
                    value: B,
                    children: t
                })
            }
              , vr = function() {
                return (0,
                a.useContext)(hr)
            };
            const kr = "BattleResult_container__b3JU0"
              , gr = "BattleResult_content__LNmkd"
              , jr = "BattleResult_stripes__TNj7H"
              , Nr = "BattleResult_title__9JSTl"
              , Ar = "BattleResult_wonPoints__ed03z"
              , br = "BattleResult_numChances__VXpt4"
              , Cr = "BattleResult_btnContainer__itreV"
              , wr = "BattleResult_btn__y4LWs";
            var yr = function() {
                var e = vr().result;
                return e ? (0,
                Z.jsxs)("div", {
                    className: kr,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: gr,
                        children: [(0,
                        Z.jsx)(w.A, {
                            pictureClassName: jr,
                            className: jr,
                            src: "".concat(c.A.cdnBaseUrl).concat(Tt)
                        }), (0,
                        Z.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                pr.YW)(e.won ? (0,
                                g.kW)("ok_game_okxracer_header_revved_to_victory") : (0,
                                g.kW)("ok_game_okxracer_header_burn_some_rubber"))
                            },
                            className: Nr
                        }), e.won && (0,
                        Z.jsxs)("p", {
                            className: Ar,
                            children: [Ct, " +", (0,
                            Ut.ZV)(e.wonPoints)]
                        }), (0,
                        Z.jsx)("p", {
                            className: br,
                            children: (0,
                            g.kW)("ok_game_okxracer_num_chances_left", {
                                num: (0,
                                Ut.ZV)(e.numChances)
                            })
                        }), (0,
                        Z.jsx)(w.A, {
                            pictureClassName: jr,
                            className: jr,
                            src: "".concat(c.A.cdnBaseUrl).concat(Tt)
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: Cr,
                        children: [e.numChances > 0 ? (0,
                        Z.jsx)(Rn, {
                            to: Ge.battleTeams,
                            children: (0,
                            Z.jsx)(nn, {
                                className: wr,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_battle_again")
                            })
                        }) : (0,
                        Z.jsx)(Rn, {
                            to: Ge.home,
                            children: (0,
                            Z.jsx)(nn, {
                                className: wr,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_race_no_chances_left")
                            })
                        }), (0,
                        Z.jsx)(Rn, {
                            to: Ge.teamRace,
                            children: (0,
                            Z.jsx)(A.default, {
                                className: wr,
                                size: A.default.SIZE.xl,
                                block: !0,
                                children: (0,
                                g.kW)("ok_game_okxracer_btn_go_back_to_team")
                            })
                        })]
                    })]
                }) : null
            };
            const Tr = "RacerInfo_container__9Ky5m"
              , Pr = "RacerInfo_avatar__MkU70"
              , Sr = "RacerInfo_pointsLabel__M7cPq"
              , Br = "RacerInfo_pointsValue__0RtzL";
            var Ir = function(e) {
                var t = e.avatarUrl
                  , n = e.label
                  , a = e.pointsLabel
                  , r = e.icon
                  , s = e.points
                  , i = e.className;
                return (0,
                Z.jsxs)("div", {
                    className: k()(Tr, i),
                    children: [(0,
                    Z.jsx)(w.A, {
                        src: t,
                        className: Pr,
                        alt: "Avatar"
                    }), n, (0,
                    Z.jsx)("span", {
                        className: Sr,
                        children: a
                    }), (0,
                    Z.jsxs)("span", {
                        className: Br,
                        children: [r, " ", s]
                    })]
                })
            }
              , Wr = n(44939);
            const Er = "TransitionAnimation_overlay__-TqX3"
              , Rr = "TransitionAnimation_textContainer__+5jmQ"
              , Lr = "TransitionAnimation_opponent__vVXDa"
              , Or = "TransitionAnimation_label__m2D5r"
              , Dr = "TransitionAnimation_name__P6mOg"
              , Fr = JSON.parse('{"v":"5.6.6","fr":60,"ip":0,"op":181,"w":750,"h":1624,"nm":"VS_R5","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"NULLCONTROL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[375.573,857.801,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.502,0.502,0.19],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[0.274,0.274,0]},"t":150,"s":[100,100,100]},{"t":165,"s":[293,293,100]}],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"V","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.19],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[100]},{"t":165,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[-387.53,25.68,0],"to":[0,0,0],"ti":[0,0,0]},{"t":10,"s":[10.47,25.68,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-16.128,-33.6],[-31.392,-33.6],[-8.544,33.6],[8.64,33.6],[31.392,-33.6],[16.512,-33.6],[0,16.128]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.737254917622,1,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"VS","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"S","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.19],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[100]},{"t":165,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[479.53,74.32,0],"to":[0,0,0],"ti":[0,0,0]},{"t":10,"s":[89.53,74.32,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-17.088,0],[0,12.576],[11.52,2.112],[0,5.472],[-6.144,0],[-0.672,-5.664],[0,0],[15.84,0],[0,-11.904],[-11.328,-2.208],[0,-5.664],[6.624,0],[0.48,6.72]],"o":[[0.096,13.632],[15.744,0],[0,-13.344],[-11.136,-2.112],[0,-5.184],[7.104,0],[0,0],[-0.192,-12.864],[-15.168,0],[0,13.632],[11.232,2.208],[0,5.28],[-8.256,0],[0,0]],"v":[[-27.024,11.52],[0.816,34.176],[27.024,12.96],[5.424,-6.144],[-10.992,-14.88],[-0.432,-22.656],[11.568,-13.056],[25.68,-13.056],[-0.432,-34.176],[-25.488,-13.824],[-4.176,5.568],[12.528,14.592],[1.008,22.752],[-12.912,11.52]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"VS","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"Vector7.png","cl":"png","parent":2,"refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[80]},{"t":157,"s":[2]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-203.042,11.519,0],"ix":2},"a":{"a":0,"k":[137,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":150,"op":181,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"Vector7179(Stroke)2.png","cl":"png","parent":3,"refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[80]},{"t":157,"s":[2]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[202.897,-37.122,0],"ix":2},"a":{"a":0,"k":[132,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":150,"op":181,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"Vector7.png","cl":"png","parent":2,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-203.042,11.519,0],"ix":2},"a":{"a":0,"k":[137,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"Vector7179(Stroke)2.png","cl":"png","parent":3,"refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[202.897,-37.122,0],"ix":2},"a":{"a":0,"k":[132,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"ramp7","parent":12,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[437.099,648.27,0],"ix":2},"a":{"a":0,"k":[226.329,-91.397,0],"ix":1},"s":{"a":0,"k":[-100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[89,-203],[6.459,-200.879],[6.411,-21.666],[88.952,-23.787]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":45,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"Rectangle65085575","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"image.png","cl":"png","parent":12,"refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[301.537,551.517,0],"ix":2},"a":{"a":0,"k":[155,155.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"ramp6","parent":13,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[298.465,227.165,0],"ix":2},"a":{"a":0,"k":[-338.319,169.626,0],"ix":1},"s":{"a":0,"k":[-100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-30.324,93.84],[-88.823,93.808],[-88.96,265.331],[-30.461,265.363]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":45,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"Rectangle65085575","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"imageb.png","cl":"png","parent":13,"refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[404.882,309.923,0],"ix":2},"a":{"a":0,"k":[155,155,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"Group2007672973_2.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.45],"y":[0.995]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[1093]},{"i":{"x":[0.835],"y":[0.689]},"o":{"x":[0.178],"y":[0.249]},"t":10,"s":[333]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.437],"y":[0.007]},"t":153,"s":[269]},{"t":165,"s":[-383]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.453],"y":[1.002]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-266]},{"i":{"x":[0.659],"y":[0.606]},"o":{"x":[0.337],"y":[0.392]},"t":10,"s":[488]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.452],"y":[0]},"t":153,"s":[548]},{"t":165,"s":[1200]}],"ix":4}},"a":{"a":0,"k":[357,414,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"Group2007672968_2.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.5],"y":[0.996]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-310]},{"i":{"x":[0.829],"y":[0.929]},"o":{"x":[0.212],"y":[0.288]},"t":10,"s":[414]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.565],"y":[0.002]},"t":153,"s":[479]},{"t":165,"s":[1077]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.484],"y":[0.996]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[1892]},{"i":{"x":[0.831],"y":[0.844]},"o":{"x":[0.191],"y":[0.226]},"t":10,"s":[1182]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.545],"y":[0.004]},"t":153,"s":[1121]},{"t":165,"s":[537]}],"ix":4}},"a":{"a":0,"k":[356,430.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0}],"markers":[]}');
            var Ur = function(e) {
                var t = e.avatar
                  , s = e.opponentAvatar
                  , i = e.opponentName
                  , d = e.onComplete
                  , _ = c.A.cdnBaseUrl
                  , m = r().useRef(null)
                  , p = r().useState(!0)
                  , x = (0,
                u.A)(p, 2)
                  , h = x[0]
                  , f = x[1]
                  , v = (0,
                a.useMemo)((function() {
                    return (0,
                    C.A)((0,
                    C.A)({}, Fr), {}, {
                        assets: [{
                            id: "image_0",
                            w: 274,
                            h: 12,
                            u: "",
                            p: "".concat(_, "/cdn/assets/imgs/2412/2402580F25E28208.png"),
                            e: 1
                        }, {
                            id: "image_1",
                            w: 264,
                            h: 12,
                            u: "",
                            p: "".concat(_, "/cdn/assets/imgs/2412/BF0CC27C9341077B.png"),
                            e: 1
                        }, {
                            id: "image_4",
                            w: 714,
                            h: 828,
                            u: "",
                            p: "".concat(_, "/cdn/assets/imgs/2412/F7F3EC122C70BDCA.png"),
                            e: 1
                        }, {
                            id: "image_5",
                            w: 712,
                            h: 861,
                            u: "",
                            p: "".concat(_, "/cdn/assets/imgs/2412/5661500936C968B1.png"),
                            e: 1
                        }, {
                            id: "image_2",
                            w: 310,
                            h: 311,
                            u: "",
                            p: t,
                            e: 1
                        }, {
                            id: "image_3",
                            w: 310,
                            h: 311,
                            u: "",
                            p: s,
                            e: 1
                        }]
                    })
                }
                ), [t, _, s]);
                return (0,
                a.useEffect)((function() {
                    var e, t = function() {
                        var t = (0,
                        l.A)((0,
                        o.A)().mark((function t() {
                            var a;
                            return (0,
                            o.A)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (m.current) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.next = 4,
                                        n.e(8218).then(n.t.bind(n, 28218, 23));
                                    case 4:
                                        a = t.sent.default,
                                        (e = a.loadAnimation({
                                            container: m.current,
                                            renderer: "svg",
                                            loop: !1,
                                            autoplay: !0,
                                            animationData: v,
                                            rendererSettings: {
                                                preserveAspectRatio: "xMidYMid slice"
                                            }
                                        })).addEventListener("complete", (function() {
                                            f(!1),
                                            null === d || void 0 === d || d()
                                        }
                                        ));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    return t(),
                    function() {
                        var t;
                        null === (t = e) || void 0 === t || t.destroy()
                    }
                }
                ), [v, d]),
                h ? (0,
                Z.jsxs)("div", {
                    ref: m,
                    className: Er,
                    children: [(0,
                    Z.jsxs)("span", {
                        className: Rr,
                        children: [(0,
                        Z.jsx)("p", {
                            className: Or,
                            children: (0,
                            g.kW)("ok_game_okxracer_challenge_racer")
                        }), (0,
                        Z.jsx)("p", {
                            className: Dr,
                            children: (0,
                            g.kW)("ok_game_okxracer_poster_title_you_battle")
                        })]
                    }), (0,
                    Z.jsxs)("span", {
                        className: k()(Rr, Lr),
                        children: [(0,
                        Z.jsx)("p", {
                            className: Or,
                            children: (0,
                            g.kW)("ok_game_okxracer_defense_racer")
                        }), (0,
                        Z.jsx)("p", {
                            className: Dr,
                            children: (0,
                            Wr.z)(i)
                        })]
                    })]
                }) : null
            }
              , Vr = (0,
            a.createContext)({
                currentTeam: null,
                teams: [],
                isLoading: !0,
                teamBenefits: null,
                isEligibleClaim: !1,
                getTeams: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
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
                joinTeam: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
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
                leaveTeam: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
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
                matchInfo: null
            })
              , Gr = function() {
                return (0,
                a.useContext)(Vr)
            }
              , Mr = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(null)
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)(null)
                  , x = (0,
                u.A)(p, 2)
                  , h = x[0]
                  , f = x[1]
                  , v = (0,
                a.useState)(!1)
                  , k = (0,
                u.A)(v, 2)
                  , g = k[0]
                  , j = k[1]
                  , N = (0,
                a.useState)(null)
                  , A = (0,
                u.A)(N, 2)
                  , b = A[0]
                  , C = A[1]
                  , w = (0,
                a.useState)(!0)
                  , y = (0,
                u.A)(w, 2)
                  , T = y[0]
                  , P = y[1]
                  , S = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return P(!0),
                                e.prev = 1,
                                e.next = 4,
                                Oe();
                            case 4:
                                t = e.sent,
                                (n = t.data) && (i(n.teams),
                                m(n.userTeam),
                                j(n.isEligibleClaim),
                                C(n.teamContext));
                            case 7:
                                return e.prev = 7,
                                P(!1),
                                e.finish(7);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, , 7, 10]])
                }
                ))), [])
                  , B = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Fe(t);
                                case 2:
                                    return e.prev = 2,
                                    e.next = 5,
                                    S();
                                case 5:
                                    e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(2);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 7]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [S])
                  , I = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Ue(t);
                                case 2:
                                    return e.prev = 2,
                                    e.next = 5,
                                    S();
                                case 5:
                                    e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(2);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 7]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [S]);
                (0,
                a.useEffect)((function() {
                    S()
                }
                ), [S]),
                (0,
                a.useEffect)((function() {
                    var e = function() {
                        var e = (0,
                        l.A)((0,
                        o.A)().mark((function e() {
                            var t;
                            return (0,
                            o.A)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        De();
                                    case 2:
                                        (t = e.sent).data && f(t.data);
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
                    _ && e()
                }
                ), [_]);
                var W = (0,
                a.useMemo)((function() {
                    return {
                        currentTeam: _,
                        teams: s,
                        isEligibleClaim: g,
                        teamBenefits: b,
                        isLoading: T,
                        getTeams: S,
                        joinTeam: B,
                        leaveTeam: I,
                        matchInfo: h
                    }
                }
                ), [_, S, g, T, B, I, h, b, s]);
                return (0,
                Z.jsx)(Vr.Provider, {
                    value: W,
                    children: t
                })
            };
            const Zr = "Battle_gameHeaderWrapper__Ppb1Q"
              , Hr = "Battle_header__jOWc6"
              , Yr = "Battle_racerLabel__KbnO9"
              , zr = "Battle_defense__agq9W"
              , Kr = "Battle_lost__gMcm9";
            var Xr = function() {
                var e = vr()
                  , t = e.selectedOpponent
                  , n = e.selectedOpponentTeam
                  , r = e.accumulatedPoints
                  , i = e.incrementPoints
                  , u = e.startMatch
                  , d = e.countDown
                  , _ = e.settleMatch
                  , m = Gr().currentTeam
                  , p = mt()
                  , x = p.result
                  , h = p.wonPoints
                  , v = (0,
                s.useHistory)();
                (0,
                a.useEffect)((function() {
                    x && i(h)
                }
                ), [i, x, h]);
                var A = (0,
                a.useCallback)((function() {
                    X(!1, (0,
                    g.kW)("ok_game_okxracer_top_notification_something_went_wrong"), {
                        desc: (0,
                        g.kW)("ok_game_okxracer_top_notification_redirection_info"),
                        onClose: function() {
                            v.replace(Ge.teamRace)
                        }
                    })
                }
                ), [v])
                  , b = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                u();
                            case 3:
                                e.next = 8;
                                break;
                            case 5:
                                e.prev = 5,
                                e.t0 = e.catch(0),
                                A();
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 5]])
                }
                ))), [A, u])
                  , C = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                _();
                            case 3:
                                e.next = 8;
                                break;
                            case 5:
                                e.prev = 5,
                                e.t0 = e.catch(0),
                                A();
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 5]])
                }
                ))), [A, _]);
                if (!t || !n || !m)
                    return (0,
                    Z.jsx)(s.Redirect, {
                        to: Ge.teamRace
                    });
                var w = m.teamInfoContext
                  , y = w.teamBattleAvatar
                  , T = w.teamAvatar
                  , P = n.teamInfoContext
                  , S = P.teamBattleAvatar
                  , B = P.teamAvatar;
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)(cr, {
                        header: (0,
                        Z.jsxs)("header", {
                            className: Hr,
                            children: [(0,
                            Z.jsx)(Ir, {
                                avatarUrl: "".concat(c.A.cdnBaseUrl).concat(T),
                                label: (0,
                                Z.jsx)(j.A, {
                                    className: Yr,
                                    size: N.A.SIZE.sm,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_challenge_racer")
                                }),
                                pointsLabel: (0,
                                g.kW)("ok_game_okxracer_label_my_points"),
                                icon: yt,
                                points: r
                            }), (0,
                            Z.jsx)(mr, {
                                points: r,
                                defensePoints: t.defensePoint,
                                countDown: d,
                                onFinish: C
                            }), (0,
                            Z.jsx)(Ir, {
                                className: k()((0,
                                f.A)({}, Kr, r > t.defensePoint)),
                                avatarUrl: "".concat(c.A.cdnBaseUrl).concat(B),
                                label: (0,
                                Z.jsx)("span", {
                                    className: k()(Yr, zr),
                                    children: (0,
                                    g.kW)("ok_game_okxracer_defense_racer")
                                }),
                                pointsLabel: (0,
                                g.kW)("ok_game_okxracer_label_defenses_points"),
                                icon: wt,
                                points: t.defensePoint
                            })]
                        }),
                        headerWrapperClassName: Zr,
                        btnContainerMarginTop: 16,
                        showUpgrades: !1
                    }), (0,
                    Z.jsx)(Ur, {
                        avatar: "".concat(c.A.cdnBaseUrl).concat(y || T),
                        opponentAvatar: "".concat(c.A.cdnBaseUrl).concat(S || B),
                        opponentName: t.userName,
                        onComplete: b
                    }), (0,
                    Z.jsx)(yr, {})]
                })
            }
              , qr = n(45458)
              , Jr = n(57208)
              , Qr = n(59092);
            n(39053),
            n(23631);
            const $r = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , es = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var ts = function(e) {
                var t = e.className;
                return (0,
                Z.jsxs)("span", {
                    className: k()($r, t),
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: "okds-clock",
                        className: es
                    }), (0,
                    g.kW)("ok_game_okxracer_tag_phase421_ended")]
                })
            };
            function ns(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            function as(e) {
                var t, n;
                null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e)
            }
            const rs = "CampaignBottomSheet_campaignBottomSheet__OKpEt"
              , ss = "CampaignBottomSheet_dateRange__t5AOU"
              , is = "CampaignBottomSheet_subTitle__aG7oj"
              , cs = "CampaignBottomSheet_desc__TyIyt"
              , os = "CampaignBottomSheet_divider__C+SIy"
              , ls = "CampaignBottomSheet_points__OXkAw"
              , us = "CampaignBottomSheet_button__vdHpR";
            var ds = function(e) {
                var t = e.campaign;
                return (0,
                Z.jsxs)("div", {
                    className: rs,
                    children: [t.status === We.Ended ? (0,
                    Z.jsx)("span", {
                        className: ss,
                        children: (0,
                        Z.jsx)(ts, {})
                    }) : (0,
                    Z.jsxs)("span", {
                        className: ss,
                        children: [(0,
                        Ut.r6)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        Ut.r6)(new Date(t.endDate))]
                    }), (0,
                    Z.jsx)("p", {
                        className: is,
                        children: t.title
                    }), (0,
                    Z.jsx)("p", {
                        className: cs,
                        children: t.description
                    }), (0,
                    Z.jsx)("hr", {
                        className: os
                    }), (0,
                    Z.jsx)("p", {
                        className: ls,
                        children: t.pointDescription
                    }), (0,
                    Z.jsx)(nn, {
                        className: us,
                        onClick: function() {
                            as(t.webUrl)
                        },
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_phase421_go_campaign")
                    })]
                })
            };
            const _s = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var ms = function(e) {
                var t = e.className;
                return (0,
                Z.jsx)("div", {
                    className: k()(_s, t)
                })
            };
            const ps = "NeonDivider_divider__QK3DO";
            var xs = function(e) {
                var t = e.className;
                return (0,
                Z.jsx)("hr", {
                    className: k()(ps, t)
                })
            }
              , hs = function() {
                var e = (0,
                s.useHistory)()
                  , t = e.replace
                  , n = e.goBack
                  , r = e.length
                  , i = (0,
                s.useLocation)().hash
                  , c = (0,
                a.useCallback)((function() {
                    1 === r ? t({
                        pathname: Ge.home,
                        hash: i
                    }) : n()
                }
                ), [n, i, r, t]);
                (0,
                a.useEffect)((function() {
                    var e, t, n;
                    return null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BackButton) || void 0 === n || n.show().onClick(c),
                    function() {
                        var e, t, n;
                        null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BackButton) || void 0 === n || n.hide().offClick(c)
                    }
                }
                ), [c, i, t])
            };
            const fs = "CampaignCard_cardContainer__3yu81"
              , vs = "CampaignCard_dateRange__hvYLA"
              , ks = "CampaignCard_campaignEndedIndicator__6J91S"
              , gs = "CampaignCard_card__cYF8Y"
              , js = "CampaignCard_campaignImg__YpUgC"
              , Ns = "CampaignCard_round__MMyT5"
              , As = "CampaignCard_content__1ZjVu"
              , bs = "CampaignCard_name__mfl60"
              , Cs = "CampaignCard_desc__klZyx"
              , ws = "CampaignCard_points__jIZar"
              , ys = "CampaignCard_btn__v8gu9"
              , Ts = "CampaignCard_btnContent__-5uC9";
            var Ps = function(e) {
                var t = e.campaign
                  , n = e.btnText
                  , a = e.onClick
                  , r = e.roundLogo
                  , s = void 0 === r || r
                  , i = t.logo
                  , o = t.title
                  , l = t.subTitle
                  , u = t.points;
                return (0,
                Z.jsxs)("li", {
                    className: fs,
                    children: [t.endDate && t.startDate ? t.status === We.Ended ? (0,
                    Z.jsx)(ts, {
                        className: ks
                    }) : (0,
                    Z.jsxs)("span", {
                        className: vs,
                        children: [(0,
                        Ut.r6)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        Ut.r6)(new Date(t.endDate))]
                    }) : null, (0,
                    Z.jsxs)("div", {
                        className: gs,
                        children: [(0,
                        Z.jsx)(w.A, {
                            src: "".concat(c.A.cdnBaseUrl).concat(i),
                            pictureClassName: js,
                            className: k()(js, (0,
                            f.A)({}, Ns, s))
                        }), (0,
                        Z.jsxs)("div", {
                            className: As,
                            children: [(0,
                            Z.jsx)("p", {
                                className: bs,
                                children: o
                            }), (0,
                            Z.jsx)("p", {
                                className: Cs,
                                children: l
                            }), !!u && u > 0 && (0,
                            Z.jsx)("p", {
                                className: ws,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    Ut.ZV)(u))
                                })
                            }), (0,
                            Z.jsx)(A.default, {
                                type: A.default.TYPE.default,
                                category: A.default.CATEGORY.outline,
                                size: A.default.SIZE.s,
                                className: ys,
                                contentClassName: Ts,
                                onClick: a,
                                children: n
                            })]
                        })]
                    })]
                })
            }
              , Ss = {
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
              , Bs = (0,
            a.createContext)({
                accountBindingInfo: Ss,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , Is = function() {
                return (0,
                a.useContext)(Bs)
            }
              , Ws = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(Ss)
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(!0)
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = Boolean((null === s || void 0 === s ? void 0 : s.isConnectTelegram) && (null === s || void 0 === s ? void 0 : s.isKyc))
                  , x = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n, a = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    isRecheckBinding: a.length > 0 && void 0 !== a[0] && a[0]
                                },
                                e.next = 4,
                                Ee(t);
                            case 4:
                                return n = e.sent,
                                m(!1),
                                n && i(n),
                                e.abrupt("return", n);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), []);
                (0,
                a.useEffect)((function() {
                    x()
                }
                ), [x]);
                var h = (0,
                a.useMemo)((function() {
                    return {
                        accountBindingInfo: s,
                        isLoading: _,
                        getAccountBindingInfo: x,
                        isCertified: p
                    }
                }
                ), [s, x, p, _]);
                return (0,
                Z.jsx)(Bs.Provider, {
                    value: h,
                    children: t
                })
            }
              , Es = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Rs = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function Ls(e) {
                var t = {
                    title: (0,
                    g.kW)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    g.kW)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Es.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink,
                    btnText: (0,
                    g.kW)("ok_game_okxracer_btn_phase4_verify")
                }
                  , n = [{
                    title: (0,
                    g.kW)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    g.kW)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Es.SIGNUP,
                    status: Rs(Es.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    g.kW)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    g.kW)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    g.kW)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Es.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    g.kW)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var Os = function(e) {
                var t = (0,
                a.useState)(Ls(e))
                  , n = (0,
                u.A)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = z().uid;
                (0,
                a.useEffect)((function() {
                    s(Ls(e))
                }
                ), [e]);
                var c = (0,
                a.useCallback)((function(t) {
                    var n, a, c = r.find((function(e) {
                        return e.type === t
                    }
                    ));
                    if (c) {
                        switch (null === (n = window) || void 0 === n || null === (a = n.Telegram) || void 0 === a || a.WebApp.openLink(c.url),
                        t) {
                        case Es.SIGNUP:
                        case Es.INSTALL:
                            o = t,
                            window.localStorage && window.localStorage.setItem(o, "1"),
                            s(Ls(e))
                        }
                        var o, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case Es.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
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
                        case Es.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
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
                        case Es.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
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
                        case Es.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
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
                ), [r, e, i]);
                return {
                    list: r,
                    handleClick: c
                }
            };
            const Ds = "CertifyBottomSheet_certifySteps__-zWCO"
              , Fs = "CertifyBottomSheet_taskList__uK656"
              , Us = "CertifyBottomSheet_task__iLWrC"
              , Vs = "CertifyBottomSheet_details__YoXf3"
              , Gs = "CertifyBottomSheet_title__X1Tnl"
              , Ms = "CertifyBottomSheet_subTitle__EzVrR"
              , Zs = "CertifyBottomSheet_btn__JLhoo"
              , Hs = "CertifyBottomSheet_btnContent__wrzU-"
              , Ys = "CertifyBottomSheet_verifyBtn__lYfYD";
            var zs = ["handleVerified"]
              , Ks = function(e) {
                var t = e.handleVerified
                  , n = (0,
                Gt.A)(e, zs)
                  , a = z().uid
                  , r = Is()
                  , s = r.accountBindingInfo
                  , i = r.getAccountBindingInfo
                  , c = Os(s)
                  , u = c.list
                  , d = c.handleClick
                  , _ = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        var n;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    i(!0);
                                case 3:
                                    null !== (n = e.sent) && void 0 !== n && n.isKyc && n.isConnectTelegram ? null === t || void 0 === t || t() : X(!1, (0,
                                    g.kW)("ok_game_okxracer_verify_failed_msg")),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_error_high_traffic"));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                Z.jsx)(Jt, (0,
                C.A)((0,
                C.A)({}, n), {}, {
                    title: (0,
                    g.kW)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: Ds,
                    children: (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("ul", {
                            className: Fs,
                            children: u.map((function(e) {
                                return (0,
                                Z.jsxs)("li", {
                                    className: Us,
                                    children: [(0,
                                    Z.jsxs)("div", {
                                        className: Vs,
                                        children: [(0,
                                        Z.jsx)("p", {
                                            className: Gs,
                                            children: e.title
                                        }), (0,
                                        Z.jsx)("p", {
                                            className: Ms,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    Z.jsx)(nn, {
                                        text: e.btnText,
                                        size: A.default.SIZE.xs,
                                        className: Zs,
                                        contentClassName: Hs,
                                        onClick: function() {
                                            d(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        Z.jsx)(nn, {
                            className: Ys,
                            onClick: (0,
                            l.A)((0,
                            o.A)().mark((function e() {
                                return (0,
                                o.A)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return P({
                                                telegramid: a
                                            }),
                                            e.next = 3,
                                            _();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))),
                            text: (0,
                            g.kW)("ok_game_okxracer_surprises_verify")
                        })]
                    })
                }))
            };
            const Xs = "LeaveTeamBottomSheet_container__AvVcB"
              , qs = "LeaveTeamBottomSheet_title__gMzba"
              , Js = "LeaveTeamBottomSheet_desc__cl4EX"
              , Qs = "LeaveTeamBottomSheet_btn__Nn5Ag"
              , $s = "LeaveTeamBottomSheet_btnContent__CsCwu";
            var ei = function(e) {
                var t = Gr()
                  , n = t.currentTeam
                  , r = t.leaveTeam
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.A)(s, 2)
                  , c = i[0]
                  , d = i[1]
                  , _ = function() {
                    var t = (0,
                    l.A)((0,
                    o.A)().mark((function t() {
                        var a;
                        return (0,
                        o.A)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return d(!0),
                                    t.prev = 3,
                                    t.next = 6,
                                    r(n.teamId);
                                case 6:
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_toast_you_have_successfully_left", {
                                        teamName: n.teamInfoContext.teamName
                                    })),
                                    null === (a = e.onClose) || void 0 === a || a.call(e),
                                    t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(3),
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_error_high_traffic"));
                                case 13:
                                    return t.prev = 13,
                                    d(!1),
                                    t.finish(13);
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[3, 10, 13, 16]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                Z.jsx)(Jt, (0,
                C.A)((0,
                C.A)({}, e), {}, {
                    children: (0,
                    Z.jsxs)("div", {
                        className: Xs,
                        children: [(0,
                        Z.jsx)("h2", {
                            className: qs,
                            children: (0,
                            g.kW)("ok_game_okxracer_title_are_you_sure", {
                                teamName: null === n || void 0 === n ? void 0 : n.teamInfoContext.teamName
                            })
                        }), (0,
                        Z.jsx)("p", {
                            className: Js,
                            children: (0,
                            g.kW)("ok_game_okxracer_come_back_to_rejoin")
                        }), (0,
                        Z.jsx)(A.default, {
                            className: Qs,
                            contentClassName: $s,
                            size: A.default.SIZE.lg,
                            type: A.default.TYPE.primary,
                            htmlType: "button",
                            onClick: _,
                            loading: c,
                            children: (0,
                            g.kW)("ok_game_okxracer_btn_leave_team")
                        }), (0,
                        Z.jsx)(A.default, {
                            className: Qs,
                            contentClassName: $s,
                            category: A.default.CATEGORY.outline,
                            size: A.default.SIZE.lg,
                            htmlType: "button",
                            onClick: e.onClose,
                            children: (0,
                            g.kW)("commonall_text_btn_cancel")
                        })]
                    })
                }))
            };
            const ti = "TeamDetail_container__Q+6aB"
              , ni = "TeamDetail_currentTeam__AYGL3"
              , ai = "TeamDetail_banner__3rZlg"
              , ri = "TeamDetail_linkButton__dur+b"
              , si = "TeamDetail_avatar__7nx+g"
              , ii = "TeamDetail_name__3MNHb"
              , ci = "TeamDetail_linkIcon__yXhDG"
              , oi = "TeamDetail_desc__-y49w"
              , li = "TeamDetail_textPlaceholder__MSh-q"
              , ui = "TeamDetail_divider__caEc+"
              , di = "TeamDetail_fields__IVJYO"
              , _i = "TeamDetail_field__UJRM8"
              , mi = "TeamDetail_label__wfHBi"
              , pi = "TeamDetail_value__muhSZ"
              , xi = "TeamDetail_btnContainer__Exmdz"
              , hi = "TeamDetail_btnContent__uKzwD"
              , fi = "TeamDetail_leaveTeamBtn__fc7Tb"
              , vi = "TeamDetail_title__OsFAU"
              , ki = "TeamDetail_count__5lWAk"
              , gi = "TeamDetail_campaignList__BNfdO"
              , ji = "TeamDetail_teamBenefitTooltipIcon__7OHcv"
              , Ni = "TeamDetail_teamBenefitsCard__DVb-G"
              , Ai = "TeamDetail_autoDrivingIcon__dFSTC"
              , bi = "TeamDetail_text__moSUy";
            var Ci = function(e) {
                e.teamId;
                var t = e.children;
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: t
                })
            }
              , wi = function() {
                var e = qe().linkCode
                  , t = Gr()
                  , n = t.teams
                  , r = t.isLoading
                  , i = t.joinTeam
                  , d = t.teamBenefits
                  , _ = t.getTeams
                  , m = t.currentTeam
                  , p = Is().isCertified
                  , x = (0,
                s.useParams)().id
                  , h = M(e, x).shareUrl
                  , v = (0,
                a.useState)(!1)
                  , j = (0,
                u.A)(v, 2)
                  , N = j[0]
                  , y = j[1]
                  , T = (0,
                a.useState)(!1)
                  , P = (0,
                u.A)(T, 2)
                  , S = P[0]
                  , B = P[1]
                  , I = (0,
                a.useState)(!1)
                  , W = (0,
                u.A)(I, 2)
                  , E = W[0]
                  , R = W[1]
                  , L = (0,
                a.useMemo)((function() {
                    return n.find((function(e) {
                        return e.teamId === Number(x)
                    }
                    ))
                }
                ), [x, n]);
                if ((0,
                a.useEffect)((function() {
                    _()
                }
                ), [_]),
                hs(),
                !L && !r)
                    return (0,
                    Z.jsx)(s.Redirect, {
                        to: Ge.teamRace
                    });
                var O = {
                    key: "teamBenefitDesc",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_benefits"),
                    value: (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Wr.z)(null === d || void 0 === d ? void 0 : d.teamBenefitDesc), (null === L || void 0 === L ? void 0 : L.isCurrentTeam) && (0,
                        Z.jsx)(Jr.A, {
                            title: (0,
                            g.kW)("ok_game_okxracer_mid_tooltips_earn_extra_autodriving"),
                            children: (0,
                            Z.jsx)(b.A, {
                                iconName: "okds-information-circle",
                                className: ji
                            })
                        })]
                    })
                }
                  , D = L ? [{
                    key: "teamRank",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_team_rank"),
                    value: "#".concat((0,
                    Ut.ZV)(L.teamRank || 0))
                }, {
                    key: "totalPoints",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_total_team_points"),
                    value: (0,
                    Z.jsx)(Ci, {
                        teamId: L.teamId,
                        children: (0,
                        Ut.ZV)((null === L || void 0 === L ? void 0 : L.totalPoints) || 0)
                    })
                }, {
                    key: "teamNumMembers",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_total_racers"),
                    value: "".concat((0,
                    Ut.ZV)(L.teamNumMembers), "/").concat((0,
                    Ut.ZV)(L.teamNumMemberCap))
                }].concat((0,
                qr.A)(L.isCurrentTeam ? [O] : [])) : []
                  , F = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (p) {
                                        e.next = 3;
                                        break
                                    }
                                    return B(!0),
                                    e.abrupt("return");
                                case 3:
                                    if (L) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return y(!0),
                                    e.prev = 6,
                                    e.next = 9,
                                    i(L.teamId);
                                case 9:
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_toast_you_have_successfully_joined", {
                                        teamName: L.teamInfoContext.teamName
                                    })),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(6),
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_error_high_traffic"));
                                case 15:
                                    return e.prev = 15,
                                    y(!1),
                                    e.finish(15);
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[6, 12, 15, 18]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                var U = r && !L
                  , V = !(null !== L && void 0 !== L && L.isCurrentTeam) && !m
                  , G = (null === L || void 0 === L ? void 0 : L.campaigns) || [];
                return (0,
                Z.jsxs)("div", {
                    className: k()(ti, (0,
                    f.A)({}, ni, null === L || void 0 === L ? void 0 : L.isCurrentTeam)),
                    children: [(0,
                    Z.jsxs)("div", {
                        className: ai,
                        children: [U ? (0,
                        Z.jsx)(ms, {
                            className: si
                        }) : (0,
                        Z.jsx)(Qr.A, (0,
                        C.A)((0,
                        C.A)({}, null !== L && void 0 !== L && L.teamInfoContext.teamAvatar ? {
                            src: "".concat(c.A.cdnBaseUrl).concat(L.teamInfoContext.teamAvatar)
                        } : {}), {}, {
                            alt: null === L || void 0 === L ? void 0 : L.teamInfoContext.teamName,
                            className: si
                        })), (0,
                        Z.jsx)("div", {
                            className: ii,
                            children: U ? (0,
                            Z.jsx)(ms, {
                                className: li
                            }) : (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [null === L || void 0 === L ? void 0 : L.teamInfoContext.teamName, (null === L || void 0 === L ? void 0 : L.teamInfoContext.teamLink) && (0,
                                Z.jsx)(A.default, {
                                    className: ri,
                                    type: A.default.TYPE.tertiary,
                                    category: A.default.CATEGORY.text,
                                    htmlType: "button",
                                    onClick: function() {
                                        L && as(L.teamInfoContext.teamLink)
                                    },
                                    children: (0,
                                    Z.jsx)(b.A, {
                                        iconName: "okds-open-link",
                                        className: ci
                                    })
                                })]
                            })
                        }), (0,
                        Z.jsx)("div", {
                            className: oi,
                            children: U ? (0,
                            Z.jsx)(ms, {
                                className: li
                            }) : (0,
                            Z.jsx)(Z.Fragment, {
                                children: null === L || void 0 === L ? void 0 : L.teamInfoContext.teamDesc
                            })
                        })]
                    }), (0,
                    Z.jsx)(xs, {
                        className: ui
                    }), (0,
                    Z.jsxs)("ul", {
                        className: di,
                        children: [U && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(ms, {
                                className: li
                            }), (0,
                            Z.jsx)(ms, {
                                className: li
                            }), (0,
                            Z.jsx)(ms, {
                                className: li
                            })]
                        }), !U && D.map((function(e) {
                            var t = e.label
                              , n = e.value
                              , a = e.key;
                            return (0,
                            Z.jsxs)("li", {
                                className: _i,
                                children: [(0,
                                Z.jsx)("span", {
                                    className: mi,
                                    children: t
                                }), (0,
                                Z.jsx)("span", {
                                    className: pi,
                                    children: n
                                })]
                            }, a)
                        }
                        ))]
                    }), G.length > 0 && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsxs)("p", {
                            className: vi,
                            children: [(0,
                            g.kW)("ok_game_okxracer_mid_textarea_label_team_exclusive_campaigns"), "\xa0", (0,
                            Z.jsxs)("span", {
                                className: ki,
                                children: ["(", G.length, ")"]
                            })]
                        }), (0,
                        Z.jsx)("ul", {
                            className: gi,
                            children: G.map((function(e) {
                                return (0,
                                Z.jsx)(Ps, {
                                    campaign: e,
                                    btnText: (0,
                                    g.kW)("ok_game_okxracer_btn_phase421_view_campaign"),
                                    onClick: function() {
                                        p ? function(e) {
                                            Qt({
                                                children: (0,
                                                Z.jsx)(ds, {
                                                    campaign: e
                                                })
                                            })
                                        }(e) : B(!0)
                                    }
                                }, e.title)
                            }
                            ))
                        })]
                    }), !U && (0,
                    Z.jsxs)("div", {
                        className: xi,
                        children: [!m && !(null !== L && void 0 !== L && L.isCurrentTeam) && (0,
                        Z.jsxs)("div", {
                            className: Ni,
                            children: [(0,
                            Z.jsx)(w.A, {
                                className: Ai,
                                src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/2412/29521E8617DBF911.svg")
                            }), (0,
                            Z.jsx)("span", {
                                className: bi,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    pr.YW)((0,
                                    g.kW)("ok_game_okxracer_footer_cell_select_earn_auto_join_team", {
                                        teamName: null === L || void 0 === L ? void 0 : L.teamInfoContext.teamName
                                    }))
                                }
                            })]
                        }), (null === L || void 0 === L ? void 0 : L.isCurrentTeam) && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(A.default, {
                                contentClassName: hi,
                                size: A.default.SIZE.lg,
                                type: A.default.TYPE.primary,
                                htmlType: "button",
                                href: h,
                                children: (0,
                                g.kW)("ok_game_okxracer_btn_invite")
                            }), (0,
                            Z.jsx)(A.default, {
                                className: fi,
                                contentClassName: hi,
                                category: A.default.CATEGORY.outline,
                                size: A.default.SIZE.lg,
                                htmlType: "button",
                                onClick: function() {
                                    R(!0)
                                },
                                children: (0,
                                g.kW)("ok_game_okxracer_btn_leave_team")
                            })]
                        }), V && (0,
                        Z.jsx)(A.default, {
                            type: A.default.TYPE.primary,
                            size: A.default.SIZE.lg,
                            contentClassName: hi,
                            onClick: F,
                            loading: N,
                            children: (0,
                            g.kW)("ok_game_okxracer_btn_join_now")
                        })]
                    }), (0,
                    Z.jsx)(Ks, {
                        visible: S,
                        onClose: function() {
                            B(!1)
                        },
                        handleVerified: function() {
                            B(!1)
                        }
                    }), (0,
                    Z.jsx)(ei, {
                        visible: E,
                        onClose: function() {
                            R(!1)
                        }
                    })]
                })
            }
              , yi = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            };
            function Ti(e) {
                return e <= 3
            }
            const Pi = "TeamListItem_teamListItem__jlC3n"
              , Si = "TeamListItem_teamRank__sfdv+"
              , Bi = "TeamListItem_emoji__dCwPS"
              , Ii = "TeamListItem_avatar__gxfNS"
              , Wi = "TeamListItem_teamName__gG78O"
              , Ei = "TeamListItem_teamPoints__jr8Wv"
              , Ri = "TeamListItem_currentTeam__dwSkF";
            var Li = function(e) {
                var t = e.teamRank
                  , n = e.teamInfoContext
                  , a = n.teamAvatar
                  , r = n.teamName
                  , s = e.totalPoints
                  , i = e.isCurrentTeam
                  , o = e.highlightCurrentTeam
                  , l = void 0 === o || o
                  , u = Ti(t);
                return (0,
                Z.jsxs)("div", {
                    className: k()(Pi, (0,
                    f.A)({}, Ri, l && i)),
                    children: [(0,
                    Z.jsx)("span", {
                        className: k()(Si, (0,
                        f.A)({}, Bi, u)),
                        children: u ? yi[t] : "#".concat((0,
                        Ut.ZV)(t))
                    }), (0,
                    Z.jsx)(Qr.A, {
                        className: Ii,
                        size: Qr.A.SIZE.sm,
                        alt: r,
                        src: "".concat(c.A.cdnBaseUrl).concat(a)
                    }), (0,
                    Z.jsx)("span", {
                        className: Wi,
                        children: (0,
                        Wr.z)(r)
                    }), (0,
                    Z.jsx)("span", {
                        className: Ei,
                        children: (0,
                        Ut.ZV)(s)
                    })]
                })
            };
            const Oi = "TeamList_listHeaders__QcPJe"
              , Di = "TeamList_list__hbILW"
              , Fi = "TeamList_listPlaceholder__nEDhA";
            var Ui = function() {
                var e = Gr()
                  , t = e.teams
                  , n = e.currentTeam
                  , r = e.getTeams;
                return (0,
                a.useEffect)((function() {
                    r()
                }
                ), [r]),
                (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("p", {
                        className: Oi,
                        children: [(0,
                        Z.jsx)("span", {
                            children: (0,
                            g.kW)("ok_game_okxracer_label_leaderboard_teams_number", {
                                num: (0,
                                Ut.ZV)(t.length)
                            })
                        }), (0,
                        Z.jsx)("span", {
                            children: (0,
                            g.kW)("ok_game_okxracer_total_points")
                        })]
                    }), (0,
                    Z.jsxs)("ul", {
                        className: Di,
                        children: [n && (0,
                        Z.jsx)("li", {
                            children: (0,
                            Z.jsx)(Rn, {
                                to: (0,
                                s.generatePath)(Ge.teamDetail, {
                                    id: n.teamId
                                }),
                                children: (0,
                                Z.jsx)(Li, (0,
                                C.A)({}, n))
                            })
                        }), t.map((function(e) {
                            return e.isCurrentTeam ? null : (0,
                            Z.jsx)("li", {
                                children: (0,
                                Z.jsx)(Rn, {
                                    to: (0,
                                    s.generatePath)(Ge.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    Z.jsx)(Li, (0,
                                    C.A)({}, e))
                                })
                            }, e.teamId)
                        }
                        )), 0 === t.length && (0,
                        Z.jsx)(Z.Fragment, {
                            children: Array.from({
                                length: 3
                            }).map((function(e, t) {
                                return (0,
                                Z.jsx)("li", {
                                    children: (0,
                                    Z.jsx)(ms, {
                                        className: Fi
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const Vi = "TeamList_title__2Q2ap";
            var Gi = function() {
                return hs(),
                (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)("h2", {
                        className: Vi,
                        children: (0,
                        g.kW)("ok_game_okxracer_leaderboard_top_teams")
                    }), (0,
                    Z.jsx)(Ui, {})]
                })
            };
            const Mi = "BattleRecordsBottomSheet_loaderContainer__3yJL8"
              , Zi = "BattleRecordsBottomSheet_title__8fd3n"
              , Hi = "BattleRecordsBottomSheet_container__-I9RG"
              , Yi = "BattleRecordsBottomSheet_recordContainer__7Q+n0"
              , zi = "BattleRecordsBottomSheet_recordField__+O+7R"
              , Ki = "BattleRecordsBottomSheet_label__GOnLC"
              , Xi = "BattleRecordsBottomSheet_teamName__oZa+n"
              , qi = "BattleRecordsBottomSheet_value__xN2Dj"
              , Ji = "BattleRecordsBottomSheet_timestamp__-1E1J"
              , Qi = "BattleRecordsBottomSheet_emptyMessageContainer__li81c"
              , $i = "BattleRecordsBottomSheet_description__VBt-r";
            var ec = function(e) {
                var t = e.label
                  , n = e.value;
                return (0,
                Z.jsxs)("div", {
                    className: zi,
                    children: [t, (0,
                    Z.jsx)("p", {
                        className: qi,
                        children: n
                    })]
                })
            }
              , tc = function(e) {
                var t = (0,
                a.useState)([])
                  , n = (0,
                u.A)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = (0,
                a.useState)(!1)
                  , c = (0,
                u.A)(i, 2)
                  , d = c[0]
                  , _ = c[1];
                (0,
                a.useEffect)((function() {
                    if (e.visible) {
                        var t = function() {
                            var e = (0,
                            l.A)((0,
                            o.A)().mark((function e() {
                                var t, n;
                                return (0,
                                o.A)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return _(!0),
                                            e.prev = 1,
                                            e.next = 4,
                                            a = !1,
                                            fe("".concat(je, "/game/racer/match/records"), {
                                                params: {
                                                    pageNo: 1,
                                                    pageSize: 5
                                                }
                                            }, a);
                                        case 4:
                                            t = e.sent,
                                            null !== (n = t.data) && void 0 !== n && n.rows && s(n.rows),
                                            e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9,
                                            e.t0 = e.catch(1),
                                            X(!1, (0,
                                            g.kW)("ok_game_okxracer_error_high_traffic"));
                                        case 12:
                                            return e.prev = 12,
                                            _(!1),
                                            e.finish(12);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                        }
                                    var a
                                }
                                ), e, null, [[1, 9, 12, 15]])
                            }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        t()
                    }
                }
                ), [e.visible]);
                return (0,
                Z.jsx)(Jt, (0,
                C.A)((0,
                C.A)({}, e), {}, {
                    title: (0,
                    Z.jsx)("span", {
                        className: Zi,
                        children: (0,
                        g.kW)("ok_game_okxracer_header_battle_history")
                    }),
                    titleCenter: !0,
                    containerClassName: Hi,
                    children: d ? (0,
                    Z.jsx)("div", {
                        className: Mi,
                        children: (0,
                        Z.jsx)(Qn.A, {})
                    }) : r.length > 0 ? r.map((function(e) {
                        var t = function(e) {
                            return e.isChallenger ? e.won ? (0,
                            g.kW)("ok_game_okxracer_challenge_win") : (0,
                            g.kW)("ok_game_okxracer_chellenge_miss") : e.won ? (0,
                            g.kW)("ok_game_okxracer_defence_successful") : (0,
                            g.kW)("ok_game_okxracer_defense_unsuccessful")
                        }(e);
                        return (0,
                        Z.jsxs)("div", {
                            className: Yi,
                            children: [(0,
                            Z.jsx)(ec, {
                                label: (0,
                                Z.jsx)("p", {
                                    className: Xi,
                                    children: (0,
                                    Wr.z)(e.opponentTeamName)
                                }),
                                value: (0,
                                Wr.z)(e.opponentExtUserName)
                            }), (0,
                            Z.jsx)(ec, {
                                label: (0,
                                Z.jsx)("p", {
                                    className: Ki,
                                    children: e.isChallenger ? (0,
                                    g.kW)("ok_game_okxracer_label_challenge") : (0,
                                    g.kW)("ok_game_okxracer_label_defense")
                                }),
                                value: t
                            }), (0,
                            Z.jsx)(ec, {
                                label: (0,
                                Z.jsx)("p", {
                                    className: Ki,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_label_points")
                                }),
                                value: e.points ? (0,
                                Ut.ZV)(e.points, {
                                    signDisplay: !0
                                }) : "--"
                            }), (0,
                            Z.jsx)("p", {
                                className: Ji,
                                children: (0,
                                Ut.r6)(new Date(e.createdTime), {
                                    format: "yyyyMMMdhhmmss"
                                })
                            })]
                        }, e.createdTime)
                    }
                    )) : (0,
                    Z.jsxs)("div", {
                        className: Qi,
                        children: [(0,
                        Z.jsx)("p", {
                            className: Zi,
                            children: (0,
                            g.kW)("ok_game_okxracer_emptystate_title_no_battles_yet")
                        }), (0,
                        Z.jsx)("p", {
                            className: $i,
                            children: (0,
                            g.kW)("ok_game_okxracer_emptystate_desc_view_history_here")
                        })]
                    })
                }))
            };
            const nc = "PageTitle_title__IQ7TT";
            var ac = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                Z.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        pr.YW)(t)
                    },
                    className: k()(nc, n)
                })
            };
            const rc = "BackgroundVideo_staticImage__8nJGy"
              , sc = "BackgroundVideo_hide__u0OBx";
            var ic = [{
                src: "/cdn/assets/files/2412/88F486E0BC64CCBD.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/2412/24E663A2B8BB8A03.mp4",
                type: "video/mp4"
            }]
              , cc = [{
                src: "/cdn/assets/files/2412/9E6560A797A4886C.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/2412/057C5A5619B14BEC.mp4",
                type: "video/mp4"
            }]
              , oc = "/cdn/assets/imgs/2410/EB79DD3F2B0CFDF2.png"
              , lc = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.A.cdnBaseUrl).concat(oc),
                muted: !0
            }
              , uc = function(e) {
                var t = e.className
                  , n = (0,
                a.useRef)(null)
                  , r = (0,
                a.useRef)(null)
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.A)(s, 2)
                  , o = i[0]
                  , l = i[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1];
                (0,
                a.useEffect)((function() {
                    r.current && (r.current.play().then((function() {
                        p(!0)
                    }
                    )).catch((function() {
                        p(!1)
                    }
                    )),
                    r.current.onended = function() {
                        var e;
                        null === (e = n.current) || void 0 === e || e.play().then((function() {
                            l(!0)
                        }
                        )).catch((function() {
                            l(!1)
                        }
                        ))
                    }
                    )
                }
                ), []);
                var x = !o && !m
                  , h = m && !o
                  , v = o;
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)(w.A, {
                        className: k()(rc, (0,
                        f.A)({}, sc, !x)),
                        src: "".concat(c.A.cdnBaseUrl).concat(oc)
                    }), (0,
                    Z.jsx)("video", (0,
                    C.A)((0,
                    C.A)({}, lc), {}, {
                        ref: r,
                        className: k()(t, (0,
                        f.A)({}, sc, !h)),
                        children: ic.map((function(e) {
                            return (0,
                            Z.jsx)("source", {
                                src: "".concat(c.A.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    })), (0,
                    Z.jsx)("video", (0,
                    C.A)((0,
                    C.A)({}, lc), {}, {
                        ref: n,
                        loop: !0,
                        className: k()(t, (0,
                        f.A)({}, sc, !v)),
                        children: cc.map((function(e) {
                            return (0,
                            Z.jsx)("source", {
                                src: "".concat(c.A.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            };
            const dc = "RulesBottomSheet_container__NlHHH"
              , _c = "RulesBottomSheet_rule__5HG6Z"
              , mc = "RulesBottomSheet_bullet__fYKP5"
              , pc = "RulesBottomSheet_textContainer__Miyg+"
              , xc = "RulesBottomSheet_title__PJ-Lg"
              , hc = "RulesBottomSheet_desc__vheUi";
            var fc = function(e) {
                var t = [{
                    title: (0,
                    g.kW)("ok_game_okxracer_rule_one_header", {
                        num: (0,
                        Ut.ZV)(5)
                    }),
                    desc: (0,
                    g.kW)("ok_game_okxracer_rule_one_desc", {
                        num: (0,
                        Ut.ZV)(5)
                    })
                }, {
                    title: (0,
                    g.kW)("ok_game_okxracer_rule_two_header"),
                    desc: (0,
                    g.kW)("ok_game_okxracer_rule_two_desc")
                }, {
                    title: (0,
                    g.kW)("ok_game_okxracer_rule_three_header"),
                    desc: (0,
                    g.kW)("ok_game_okxracer_rule_three_desc")
                }];
                return (0,
                Z.jsx)(Jt, (0,
                C.A)((0,
                C.A)({}, e), {}, {
                    title: (0,
                    g.kW)("ok_game_okxracer_battle_rules"),
                    titleCenter: !0,
                    children: (0,
                    Z.jsx)("ul", {
                        className: dc,
                        children: t.map((function(e) {
                            var t = e.title
                              , n = e.desc;
                            return (0,
                            Z.jsxs)("li", {
                                className: _c,
                                children: [(0,
                                Z.jsx)("span", {
                                    className: mc
                                }), (0,
                                Z.jsxs)("div", {
                                    className: pc,
                                    children: [(0,
                                    Z.jsx)("p", {
                                        className: xc,
                                        children: t
                                    }), (0,
                                    Z.jsx)("p", {
                                        className: hc,
                                        children: n
                                    })]
                                })]
                            }, t)
                        }
                        ))
                    })
                }))
            };
            const vc = "TeamCard_teamCard__lUFQ3"
              , kc = "TeamCard_header__Amp+p"
              , gc = "TeamCard_avatar__aE9y-"
              , jc = "TeamCard_teamName__ycan7"
              , Nc = "TeamCard_chevron__kzh7j"
              , Ac = "TeamCard_content__3FBKT"
              , bc = "TeamCard_teamInfoField__sZNuy"
              , Cc = "TeamCard_label__al-xY"
              , wc = "TeamCard_value__ORmag"
              , yc = "TeamCard_divider__XjdlD"
              , Tc = "TeamCard_leaderTeamPoints__-aWse"
              , Pc = "TeamCard_text__A0e85"
              , Sc = "TeamCard_btnContent__hlQU4";
            var Bc = function(e) {
                var t = e.team
                  , n = e.className
                  , r = Gr()
                  , i = r.isEligibleClaim
                  , d = r.teamBenefits
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.A)(_, 2)
                  , p = m[0]
                  , x = m[1]
                  , h = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return x(!0),
                                    e.prev = 1,
                                    e.next = 4,
                                    Be({
                                        id: Number(null === d || void 0 === d ? void 0 : d.rankRewardTaskId)
                                    });
                                case 4:
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_toast_you_have_successfully_claimed")),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_error_high_traffic"));
                                case 10:
                                    return e.prev = 10,
                                    x(!1),
                                    e.finish(10);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 7, 10, 13]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                Z.jsxs)("div", {
                    className: k()(n, vc),
                    children: [(0,
                    Z.jsxs)(Rn, {
                        to: (0,
                        s.generatePath)(Ge.teamDetail, {
                            id: t.teamId
                        }),
                        className: kc,
                        children: [(0,
                        Z.jsx)(Qr.A, {
                            src: "".concat(c.A.cdnBaseUrl).concat(t.teamInfoContext.teamAvatar),
                            alt: t.teamInfoContext.teamName,
                            className: gc,
                            size: Qr.A.SIZE.sm
                        }), (0,
                        Z.jsx)("p", {
                            className: jc,
                            children: (0,
                            Wr.z)(t.teamInfoContext.teamName)
                        }), (0,
                        Z.jsx)(b.A, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: Nc
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: Ac,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: bc,
                            children: [(0,
                            Z.jsx)("p", {
                                className: Cc,
                                children: (0,
                                g.kW)("ok_game_okxracer_todays_ranking")
                            }), (0,
                            Z.jsxs)("p", {
                                className: wc,
                                children: ["#", (0,
                                Ut.ZV)(t.teamRank)]
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            className: bc,
                            children: [(0,
                            Z.jsx)("p", {
                                className: Cc,
                                children: (0,
                                g.kW)("ok_game_okxracer_total_points")
                            }), (0,
                            Z.jsx)("p", {
                                className: wc,
                                children: (0,
                                Ut.ZV)(t.totalPoints)
                            })]
                        })]
                    }), i && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("hr", {
                            className: yc
                        }), (0,
                        Z.jsxs)("section", {
                            className: Tc,
                            children: [(0,
                            Z.jsxs)("p", {
                                className: Pc,
                                children: ["\ud83c\udfc1\xa0", (0,
                                g.kW)("ok_game_okxracer_desc_pts_for_team", {
                                    num: (0,
                                    Ut.ZV)(5e3)
                                })]
                            }), (0,
                            Z.jsx)(A.default, {
                                contentClassName: Sc,
                                type: i ? A.default.TYPE.primary : A.default.TYPE.gray,
                                size: A.default.SIZE.s,
                                onClick: h,
                                disabled: !i,
                                loading: p,
                                children: (0,
                                g.kW)("ok_game_okxracer_btn_claim_pts")
                            })]
                        })]
                    })]
                })
            };
            const Ic = "TeamList_teamListLink__EMea8"
              , Wc = "TeamList_icon__Dhul7"
              , Ec = "TeamList_teamList__w-ZJo"
              , Rc = "TeamList_listPlaceholder__p9xfs";
            var Lc = function() {
                var e = Gr().teams.slice(0, 3);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)(Rn, {
                        className: Ic,
                        to: Ge.teamList,
                        children: [(0,
                        g.kW)("ok_game_okxracer_leaderboard_top_teams"), (0,
                        Z.jsx)(b.A, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: Wc
                        })]
                    }), (0,
                    Z.jsxs)("ul", {
                        className: Ec,
                        children: [e.map((function(e) {
                            return (0,
                            Z.jsx)("li", {
                                children: (0,
                                Z.jsx)(Rn, {
                                    to: (0,
                                    s.generatePath)(Ge.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    Z.jsx)(Li, (0,
                                    C.A)((0,
                                    C.A)({}, e), {}, {
                                        highlightCurrentTeam: !1
                                    }))
                                })
                            }, e.teamId)
                        }
                        )), 0 === e.length && (0,
                        Z.jsx)(Z.Fragment, {
                            children: Array.from({
                                length: 3
                            }).map((function(e, t) {
                                return (0,
                                Z.jsx)("li", {
                                    children: (0,
                                    Z.jsx)(ms, {
                                        className: Rc
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const Oc = "TeamsPage_banner__kJ07n"
              , Dc = "TeamsPage_videoContainer__4MFJt"
              , Fc = "TeamsPage_btnContainer__RVCJA"
              , Uc = "TeamsPage_upgradesLink__ks2+R"
              , Vc = "TeamsPage_btn__yCBjf"
              , Gc = "TeamsPage_icon__RIsDk"
              , Mc = "TeamsPage_pageTitle__5jH4j"
              , Zc = "TeamsPage_joinTeamBtn__QZ2+Q"
              , Hc = "TeamsPage_startRacingBtn__ga9uF"
              , Yc = "TeamsPage_subtitle__UxY6O"
              , zc = "TeamsPage_teamCard__h6zcj"
              , Kc = "TeamsPage_numChances__EYqAB";
            var Xc = function() {
                var e = Is().isCertified
                  , t = Gr()
                  , n = t.currentTeam
                  , r = t.getTeams
                  , i = t.matchInfo
                  , c = (0,
                s.useHistory)()
                  , o = (0,
                a.useState)(!1)
                  , l = (0,
                u.A)(o, 2)
                  , d = l[0]
                  , _ = l[1]
                  , m = (0,
                a.useState)(!1)
                  , p = (0,
                u.A)(m, 2)
                  , x = p[0]
                  , h = p[1]
                  , f = (0,
                a.useState)(!1)
                  , v = (0,
                u.A)(f, 2)
                  , k = v[0]
                  , j = v[1];
                (0,
                a.useEffect)((function() {
                    r()
                }
                ), [r]);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("div", {
                        className: Oc,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: Dc,
                            children: [(0,
                            Z.jsxs)(Rn, {
                                to: Ge.upgrades,
                                className: Uc,
                                children: [(0,
                                Z.jsx)(b.A, {
                                    iconName: "okx-growth-upgrades",
                                    className: Gc
                                }), (0,
                                g.kW)("ok_game_okxracer_nav_upgrades")]
                            }), (0,
                            Z.jsxs)("div", {
                                className: Fc,
                                children: [(0,
                                Z.jsx)("button", {
                                    className: Vc,
                                    type: "button",
                                    onClick: function() {
                                        j(!0)
                                    },
                                    children: (0,
                                    g.kW)("ok_game_okxracer_header_battle_history")
                                }), (0,
                                Z.jsxs)("button", {
                                    className: Vc,
                                    type: "button",
                                    onClick: function() {
                                        h(!0)
                                    },
                                    children: [(0,
                                    Z.jsx)(b.A, {
                                        iconName: "okds-question-mark-circle",
                                        className: Gc
                                    }), (0,
                                    g.kW)("ok_game_okxracer_tag_rules")]
                                })]
                            }), (0,
                            Z.jsx)(uc, {})]
                        }), (0,
                        Z.jsx)(ac, {
                            className: Mc,
                            html: e && n ? (0,
                            g.kW)("ok_game_okxracer_tips_race_with_the_best") : (0,
                            g.kW)("ok_game_okxracer_winning_team")
                        }), !n && (0,
                        Z.jsx)(Z.Fragment, {
                            children: e ? (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)("p", {
                                    className: Yc,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_join_or_create_team")
                                }), (0,
                                Z.jsx)(Rn, {
                                    to: Ge.teamList,
                                    children: (0,
                                    Z.jsx)(nn, {
                                        className: Zc,
                                        text: (0,
                                        g.kW)("ok_game_okxracer_btn_join_a_team"),
                                        size: A.default.SIZE.sm
                                    })
                                })]
                            }) : (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)("p", {
                                    className: Yc,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_get_certified_battle")
                                }), (0,
                                Z.jsx)(nn, {
                                    className: Zc,
                                    text: (0,
                                    g.kW)("ok_game_okxracer_btn_get_certified"),
                                    size: A.default.SIZE.sm,
                                    onClick: function() {
                                        _(!0)
                                    }
                                })]
                            })
                        }), n && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)("p", {
                                className: Kc,
                                children: (0,
                                g.kW)("ok_game_okxracer_num_chances_left", {
                                    num: (0,
                                    Ut.ZV)((null === i || void 0 === i ? void 0 : i.numChances) || 0)
                                })
                            }), (0,
                            Z.jsx)(nn, {
                                className: Hc,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_start_a_battle"),
                                size: A.default.SIZE.sm,
                                disabled: 0 === (null === i || void 0 === i ? void 0 : i.numChances),
                                onClick: function() {
                                    c.push(Ge.battleTeams)
                                }
                            })]
                        })]
                    }), n && (0,
                    Z.jsx)(Bc, {
                        team: n,
                        className: zc
                    }), (0,
                    Z.jsx)(Lc, {}), (0,
                    Z.jsx)(Ks, {
                        visible: d,
                        onClose: function() {
                            _(!1)
                        },
                        handleVerified: function() {
                            _(!1)
                        }
                    }), (0,
                    Z.jsx)(fc, {
                        visible: x,
                        onClose: function() {
                            h(!1)
                        }
                    }), (0,
                    Z.jsx)(tc, {
                        visible: k,
                        onClose: function() {
                            j(!1)
                        }
                    })]
                })
            }
              , qc = (0,
            a.createContext)({
                campaigns: [],
                loading: !1
            })
              , Jc = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(!0)
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1];
                (0,
                a.useEffect)((function() {
                    m(!0);
                    var e = function() {
                        var e = (0,
                        l.A)((0,
                        o.A)().mark((function e() {
                            var t;
                            return (0,
                            o.A)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        Re(!0);
                                    case 3:
                                        (t = e.sent) && i(t),
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
                var p = (0,
                a.useMemo)((function() {
                    return {
                        campaigns: s,
                        loading: _
                    }
                }
                ), [s, _]);
                return (0,
                Z.jsx)(qc.Provider, {
                    value: p,
                    children: t
                })
            };
            const Qc = "App_container__p+0qT"
              , $c = "App_footer__NGiBl"
              , eo = "App_content__Jjurs"
              , to = "App_gradientBackground__rNgmD"
              , no = "ComPaddingLayout_commonPaddingLayout__FJ+ET";
            var ao = function(e, t) {
                return function(n) {
                    return (0,
                    Z.jsx)("div", {
                        className: k()(no, t),
                        children: (0,
                        Z.jsx)(e, (0,
                        C.A)({}, n))
                    })
                }
            };
            const ro = "BattleOpponents_container__i56Es"
              , so = "BattleOpponents_banner__LPuPn"
              , io = "BattleOpponents_header__a-qDC"
              , co = "BattleOpponents_bodyText__dl3PG"
              , oo = "BattleOpponents_listHeader__kYuBD"
              , lo = "BattleOpponents_username__q7RQ+"
              , uo = "BattleOpponents_basePointContainer__dO7Wc"
              , _o = "BattleOpponents_basePointLabel__7yd74"
              , mo = "BattleOpponents_basePoint__iyGnv"
              , po = "BattleOpponents_unclaimedPoints__zVRGA"
              , xo = "BattleOpponents_defensePoint__-NZT9"
              , ho = "BattleOpponents_list__jMVFc"
              , fo = "BattleOpponents_listItemBtn__HoP7N"
              , vo = "BattleOpponents_leftContent__NfhVu"
              , ko = "BattleOpponents_listItem__z2Ac3"
              , go = "BattleOpponents_active__kK8lZ"
              , jo = "BattleOpponents_btnContainer__9sgl3"
              , No = "BattleOpponents_btn__1J6Tn"
              , Ao = "BattleOpponents_btnContent__LneTC"
              , bo = "BattleOpponents_loadingPlaceholder__+iWWN";
            var Co = function() {
                hs();
                var e = Gr()
                  , t = e.currentTeam
                  , n = e.matchInfo
                  , r = (0,
                a.useState)(!0)
                  , i = (0,
                u.A)(r, 2)
                  , d = i[0]
                  , _ = i[1]
                  , m = z().username
                  , p = vr()
                  , x = p.selectedOpponent
                  , h = p.updateSelectedOpponent
                  , f = p.selectedOpponentTeam
                  , v = (0,
                a.useState)([])
                  , j = (0,
                u.A)(v, 2)
                  , N = j[0]
                  , A = j[1]
                  , b = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        var n, a, r;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return _(!0),
                                    e.prev = 1,
                                    e.next = 4,
                                    Ve(t);
                                case 4:
                                    a = e.sent,
                                    r = a.data,
                                    A(null !== (n = null === r || void 0 === r ? void 0 : r.opponents) && void 0 !== n ? n : []);
                                case 7:
                                    return e.prev = 7,
                                    _(!1),
                                    e.finish(7);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, , 7, 10]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [])
                  , C = (0,
                s.useParams)().id;
                return (0,
                a.useEffect)((function() {
                    C && b(Number(C))
                }
                ), [b, C]),
                (t || d) && f ? t && n ? (0,
                Z.jsxs)("div", {
                    className: ro,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: so,
                        children: [(0,
                        Z.jsx)(Qr.A, {
                            src: "".concat(c.A.cdnBaseUrl).concat(t.teamInfoContext.teamAvatar)
                        }), (0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsx)("div", {
                                className: lo,
                                children: m
                            }), (0,
                            Z.jsxs)("div", {
                                className: uo,
                                children: [(0,
                                Z.jsx)("span", {
                                    className: _o,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_phase42_base_pts_win")
                                }), (0,
                                Z.jsx)("span", {
                                    className: mo,
                                    children: "".concat(Ct, " ").concat((0,
                                    Ut.ZV)(n.basePoint))
                                })]
                            })]
                        })]
                    }), (0,
                    Z.jsx)("h2", {
                        className: io,
                        children: (0,
                        g.kW)("ok_game_okxracer_select_header_step_two_choose_racer", {
                            teamName: f.teamInfoContext.teamName
                        })
                    }), (0,
                    Z.jsx)("p", {
                        className: co,
                        children: (0,
                        g.kW)("ok_game_okxracer_score_higher_than_defendant")
                    }), (0,
                    Z.jsxs)("div", {
                        className: oo,
                        children: [(0,
                        Z.jsx)("span", {
                            children: (0,
                            g.kW)("ok_game_okxracer_tag_defense_points")
                        }), (0,
                        Z.jsx)("span", {
                            children: (0,
                            g.kW)("ok_game_okxracer_label_unclaimed_pts")
                        })]
                    }), (0,
                    Z.jsxs)("ul", {
                        className: ho,
                        children: [d && (0,
                        Z.jsx)(Z.Fragment, {
                            children: Array.from({
                                length: 5
                            }).map((function(e, t) {
                                return (0,
                                Z.jsx)("li", {
                                    children: (0,
                                    Z.jsx)(ms, {
                                        className: bo
                                    })
                                }, t)
                            }
                            ))
                        }), N.map((function(e) {
                            return (0,
                            Z.jsx)("li", {
                                className: k()(ko, (null === x || void 0 === x ? void 0 : x.extUserId) === e.extUserId && go),
                                children: (0,
                                Z.jsxs)("button", {
                                    type: "button",
                                    className: fo,
                                    onClick: function() {
                                        h(e)
                                    },
                                    children: [(0,
                                    Z.jsxs)("div", {
                                        className: vo,
                                        children: [(0,
                                        Z.jsx)("span", {
                                            className: lo,
                                            children: e.userName
                                        }), (0,
                                        Z.jsx)("span", {
                                            className: xo,
                                            children: "".concat(wt, " ").concat((0,
                                            Ut.ZV)(e.defensePoint))
                                        })]
                                    }), (0,
                                    Z.jsx)("div", {
                                        className: po,
                                        children: (0,
                                        Ut.ZV)(e.unclaimedAutopilotPoints)
                                    })]
                                })
                            }, e.extUserId)
                        }
                        ))]
                    }), (0,
                    Z.jsx)("div", {
                        className: jo,
                        children: (0,
                        Z.jsx)(Rn, {
                            to: Ge.battle,
                            className: No,
                            children: (0,
                            Z.jsx)(nn, {
                                className: No,
                                contentClassName: Ao,
                                disabled: !x,
                                text: (0,
                                g.kW)("commonall_button_text_start")
                            })
                        })
                    })]
                }) : null : (0,
                Z.jsx)(s.Redirect, {
                    to: Ge.battleTeams
                })
            };
            const wo = "BattleTeams_container__BM1pO"
              , yo = "BattleTeams_header__Kf0bD"
              , To = "BattleTeams_list__l6BPF"
              , Po = "BattleTeams_listItem__0-Ylj"
              , So = "BattleTeams_active__rdlnk"
              , Bo = "BattleTeams_listBtn__Qrgiq"
              , Io = "BattleTeams_label__h44r1"
              , Wo = "BattleTeams_btnContainer__Ucy5D"
              , Eo = "BattleTeams_btn__vG1rz"
              , Ro = "BattleTeams_btnContent__lIste";
            var Lo = function() {
                hs();
                var e = Gr().teams
                  , t = vr()
                  , n = t.selectedOpponentTeam
                  , r = t.updateSelectedOpponentTeam
                  , i = t.updateSelectedOpponent
                  , o = e.filter((function(e) {
                    return !e.isCurrentTeam
                }
                ));
                return (0,
                a.useEffect)((function() {
                    i(void 0)
                }
                ), [i]),
                (0,
                Z.jsxs)("div", {
                    className: wo,
                    children: [(0,
                    Z.jsx)("div", {
                        className: yo,
                        children: (0,
                        g.kW)("ok_game_okxracer_header_step_once_choose_team")
                    }), (0,
                    Z.jsx)("ul", {
                        className: To,
                        children: o.map((function(e) {
                            return (0,
                            Z.jsx)("li", {
                                className: k()(Po, (null === n || void 0 === n ? void 0 : n.teamId) === e.teamId && So),
                                children: (0,
                                Z.jsxs)("button", {
                                    type: "button",
                                    className: Bo,
                                    onClick: function() {
                                        r(e)
                                    },
                                    children: [(0,
                                    Z.jsx)(Qr.A, {
                                        src: "".concat(c.A.cdnBaseUrl).concat(e.teamInfoContext.teamAvatar),
                                        size: Qr.A.SIZE.lg
                                    }), (0,
                                    Z.jsx)("div", {
                                        className: Io,
                                        children: e.teamInfoContext.teamName
                                    })]
                                })
                            }, e.teamId)
                        }
                        ))
                    }), (0,
                    Z.jsx)(Rn, {
                        to: n ? (0,
                        s.generatePath)(Ge.battleTeamMembers, {
                            id: n.teamId
                        }) : {},
                        className: Wo,
                        children: (0,
                        Z.jsx)(nn, {
                            className: Eo,
                            contentClassName: Ro,
                            disabled: !n,
                            text: (0,
                            g.kW)("commonall_button_text_next")
                        })
                    })]
                })
            };
            const Oo = "RiskControl_title__h9Z0T";
            var Do = function() {
                var e = qe()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                Z.jsx)(Jt, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    Z.jsx)("div", {
                        className: Oo,
                        children: (0,
                        g.kW)("ok_game_okxracer_risk_control")
                    })
                })
            };
            const Fo = "ClaimTeamPointsBottomSheet_container__1wnim"
              , Uo = "ClaimTeamPointsBottomSheet_graphic__5TzK4"
              , Vo = "ClaimTeamPointsBottomSheet_title__NsQhi"
              , Go = "ClaimTeamPointsBottomSheet_desc__RAIVt"
              , Mo = "ClaimTeamPointsBottomSheet_btn__pC8CP"
              , Zo = "ClaimTeamPointsBottomSheet_btnContent__ze-Xt";
            var Ho = function() {
                var e = Gr()
                  , t = e.isEligibleClaim
                  , n = e.isLoading
                  , r = e.teamBenefits
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.A)(s, 2)
                  , d = i[0]
                  , _ = i[1];
                (0,
                a.useEffect)((function() {
                    n || _(t)
                }
                ), [t, n]);
                var m = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 2,
                                    e.next = 5,
                                    Be({
                                        id: Number(null === r || void 0 === r ? void 0 : r.rankRewardTaskId)
                                    });
                                case 5:
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_toast_you_have_successfully_claimed")),
                                    _(!1),
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(2),
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_error_high_traffic"));
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 9]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                Z.jsx)(Jt, {
                    visible: d,
                    onClose: function() {
                        _(!1)
                    },
                    children: (0,
                    Z.jsxs)("div", {
                        className: Fo,
                        children: [(0,
                        Z.jsx)(w.A, {
                            className: Uo,
                            src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/2410/3F84F994EA1D6F77.svg")
                        }), (0,
                        Z.jsx)("h2", {
                            className: Vo,
                            children: (0,
                            g.kW)("ok_game_okxracer_bttmsheet_header_great_job")
                        }), (0,
                        Z.jsx)("p", {
                            className: Go,
                            children: (0,
                            g.kW)("ok_game_okxracer_bttmsheet_desc_great_job")
                        }), (0,
                        Z.jsx)(A.default, {
                            className: Mo,
                            contentClassName: Zo,
                            size: A.default.SIZE.lg,
                            type: A.default.TYPE.primary,
                            htmlType: "button",
                            onClick: m,
                            children: (0,
                            g.kW)("ok_game_okxracer_btn_claim_pts")
                        })]
                    })
                })
            };
            const Yo = "NewCampaigns_container__gO1Ko"
              , zo = "NewCampaigns_img__Or37G"
              , Ko = "NewCampaigns_title__Lx+PB"
              , Xo = "NewCampaigns_desc__U9VKz"
              , qo = "NewCampaigns_btn__xIIk1";
            var Jo = function() {
                var e = (0,
                s.useHistory)()
                  , t = (0,
                s.useLocation)()
                  , n = !1
                  , a = function() {};
                return (0,
                Z.jsxs)(Jt, {
                    visible: n,
                    onClose: a,
                    containerClassName: Yo,
                    children: [(0,
                    Z.jsx)(w.A, {
                        pictureClassName: zo,
                        className: zo,
                        src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    Z.jsx)("p", {
                        className: Ko,
                        children: (0,
                        g.kW)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    Z.jsx)("p", {
                        className: Xo,
                        children: (0,
                        g.kW)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    Z.jsx)(nn, {
                        className: qo,
                        onClick: function() {
                            e.push({
                                pathname: Ge.license,
                                hash: t.hash
                            })
                        },
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            };
            const Qo = "TncButton_termsAndConditions__MyIpV";
            var $o = function(e) {
                var t = e.className;
                return (0,
                Z.jsx)("button", {
                    className: k()(Qo, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    g.kW)("ok_game_okxracer_tnc")
                })
            };
            const el = "AutoPilot_title__NJa0C"
              , tl = "AutoPilot_button__Sg42v";
            var nl = function() {
                var e = qe()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                Z.jsxs)(Jt, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    Z.jsx)("div", {
                        className: el,
                        children: (0,
                        g.kW)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            Ut.ZV)(n)
                        })
                    }), (0,
                    Z.jsx)(nn, {
                        className: tl,
                        onClick: a,
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const al = "LandingPage_container__pU2cC"
              , rl = "LandingPage_disclaimer__pVRHC"
              , sl = "LandingPage_recordsBtnContainer__Anr4Y"
              , il = "LandingPage_content__D0ZLW"
              , cl = "LandingPage_gameHeaderWrapper__NeR1g"
              , ol = "LandingPage_termsAndConditions__MdClU";
            var ll = n(3531);
            const ul = "NewbieWelcome_title__48Py5"
              , dl = "NewbieWelcome_desc__q7GHz"
              , _l = "NewbieWelcome_button__im+B1"
              , ml = "NewbieWelcome_pointsBox__gOjMh"
              , pl = "NewbieWelcome_points__4t75l"
              , xl = "NewbieWelcome_animation__tf9Dj";
            var hl = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = c.A.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                ll.A)((0,
                l.A)((0,
                o.A)().mark((function a() {
                    return (0,
                    o.A)().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                if (e.current) {
                                    a.next = 2;
                                    break
                                }
                                return a.abrupt("return");
                            case 2:
                                return a.next = 4,
                                n.e(8218).then(n.t.bind(n, 28218, 23));
                            case 4:
                                a.sent.default.loadAnimation({
                                    container: e.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !0,
                                    path: t()
                                });
                            case 6:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                ))), []),
                (0,
                Z.jsx)(Z.Fragment, {
                    children: (0,
                    Z.jsx)("div", {
                        ref: e,
                        className: xl
                    })
                })
            }
              , fl = function() {
                var e = qe()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                Z.jsxs)(Jt, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(hl, {}), (0,
                            Z.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    Z.jsx)("div", {
                        className: ml,
                        children: (0,
                        Z.jsx)("img", {
                            src: "".concat(c.A.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: pl
                        })
                    }), (0,
                    Z.jsx)("div", {
                        className: ul,
                        children: (0,
                        g.kW)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    Z.jsx)("div", {
                        className: dl,
                        children: (0,
                        g.kW)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    Z.jsx)(nn, {
                        className: _l,
                        onClick: t,
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , vl = n(77903);
            const kl = "UserPointCounter_pointCounter__-QAj8"
              , gl = "UserPointCounter_points__d3HeG"
              , jl = "UserPointCounter_title__B-gN-";
            var Nl = function() {
                var e = qe().points
                  , t = (0,
                vl.A)(e)
                  , n = (0,
                a.useRef)(null)
                  , r = (0,
                a.useCallback)((function(e, t, n) {
                    e <= t && (n((0,
                    Ut.ZV)(String(e))),
                    requestAnimationFrame((function() {
                        var a = function(e, t) {
                            var n = t - e;
                            return Math.max(1, Math.floor(n / 10))
                        }(e, t);
                        r(e + a, t, n)
                    }
                    )))
                }
                ), []);
                return (0,
                a.useEffect)((function() {
                    var a;
                    if (t === e)
                        return function() {}
                        ;
                    function s(e) {
                        n.current && (n.current.innerText = e)
                    }
                    if ("0" === (null === (a = n.current) || void 0 === a ? void 0 : a.innerText) || !t)
                        return r(0, e, s),
                        function() {}
                        ;
                    var i = setTimeout((function() {
                        r(t || 0, e, s)
                    }
                    ), 2500);
                    return function() {
                        clearTimeout(i)
                    }
                }
                ), [r, e, t]),
                (0,
                Z.jsxs)("div", {
                    className: kl,
                    children: [(0,
                    Z.jsxs)("p", {
                        className: jl,
                        children: ["\ud83c\udfc6 ", (0,
                        g.kW)("ok_game_okxracer_available_pts")]
                    }), (0,
                    Z.jsx)("p", {
                        ref: n,
                        className: gl,
                        children: "0"
                    })]
                })
            }
              , Al = n(94735)
              , bl = n(32964);
            function Cl(e) {
                return !!e && "proof"in e
            }
            var wl = function(e, t) {
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
                        l.A)((0,
                        o.A)().mark((function t(r) {
                            var s, i, c, l, u, d, _, m, p, x, h, f, v, k;
                            return (0,
                            o.A)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        s = null === e || void 0 === e ? void 0 : e.wallet,
                                        r && s && (i = s.account,
                                        c = i.address,
                                        l = i.publicKey,
                                        u = s.connectItems,
                                        d = s.device.appName,
                                        Cl(_ = null === u || void 0 === u ? void 0 : u.tonProof) && (m = _.proof,
                                        p = m.signature,
                                        x = m.payload,
                                        h = m.domain,
                                        f = m.timestamp,
                                        v = bl.Address.parse(c),
                                        k = v.toString({
                                            urlSafe: !0,
                                            bounceable: !1,
                                            testOnly: !1
                                        }),
                                        e.connected && e.disconnect(),
                                        a({
                                            tonAddress: k,
                                            publicKey: l,
                                            signature: p,
                                            appName: d,
                                            msg: JSON.stringify({
                                                payload: x,
                                                domain: null === h || void 0 === h ? void 0 : h.value,
                                                timestamp: f
                                            })
                                        }),
                                        n && n()));
                                    case 2:
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
              , yl = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    var a, r, s, i, c;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 1,
                                a = wl(t, n),
                                r = a.promise,
                                s = a.unsubscribe,
                                e.next = 5,
                                r;
                            case 5:
                                return i = e.sent,
                                c = s,
                                s(),
                                S({
                                    source: "app"
                                }),
                                e.abrupt("return", [i, c]);
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && B.v.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
            }()
              , Tl = function(e) {
                var t = (0,
                d.useOKXTonConnectUI)()
                  , n = (0,
                u.A)(t, 1)[0]
                  , r = z().uid
                  , s = (0,
                a.useRef)((function() {}
                ))
                  , i = function() {
                    var t = (0,
                    l.A)((0,
                    o.A)().mark((function t() {
                        var a, i, c, l, d;
                        return (0,
                        o.A)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    yl(n, r);
                                case 3:
                                    if (!(a = t.sent)) {
                                        t.next = 12;
                                        break
                                    }
                                    return i = (0,
                                    u.A)(a, 2),
                                    c = i[0],
                                    l = i[1],
                                    s.current = l,
                                    d = JSON.stringify((0,
                                    C.A)({
                                        telegramId: r
                                    }, c)),
                                    t.next = 10,
                                    e(d, c.tonAddress);
                                case 10:
                                    t.sent && null !== c && void 0 !== c && c.appName && ct().set(U, null === c || void 0 === c ? void 0 : c.appName);
                                case 12:
                                    t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14,
                                    t.t0 = t.catch(0),
                                    B.v.error("TON connectWallet failed", t.t0);
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 14]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                a.useEffect)((function() {
                    return function() {
                        s.current && s.current()
                    }
                }
                ), []),
                {
                    connectWallet: i
                }
            }
              , Pl = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.firstDigits
                  , a = void 0 === n ? 6 : n
                  , r = t.lastDigits
                  , s = void 0 === r ? 4 : r
                  , i = t.placeholder
                  , c = void 0 === i ? "***" : i;
                if (e && e.length > 20) {
                    var o = e.substring(0, a)
                      , l = e.substring(e.length - s, e.length);
                    return "".concat(o).concat(c).concat(l)
                }
                return e
            };
            const Sl = "ViewWalletButton_button__WbNMO"
              , Bl = "ViewWalletButton_btnIcon__W5IFc";
            var Il = function() {
                var e = qe()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , a = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Be({
                                        id: 9,
                                        taskContext: t
                                    });
                                case 3:
                                    return X(!0, (0,
                                    g.kW)("ok_game_okxracer_task_completion_msg")),
                                    e.abrupt("return", !0);
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e.catch(0),
                                    q(e.t0),
                                    e.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , r = Tl(a).connectWallet
                  , s = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        var a, s, i, c, l, u;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.tonAddress) {
                                        e.next = 7;
                                        break
                                    }
                                    c = ct(),
                                    l = c.get(U),
                                    (u = l === G.TgWallet ? "https://t.me/OKX_WALLET_BOT/start" : t.tonDeeplink || "") && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i || i.openLink(u)),
                                    e.next = 11;
                                    break;
                                case 7:
                                    return e.next = 9,
                                    r();
                                case 9:
                                    return e.next = 11,
                                    Promise.allSettled([Se(), n()]);
                                case 11:
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
                  , i = (0,
                Al.A)(s, {
                    wait: 500,
                    leading: !0
                }).run;
                return (0,
                Z.jsxs)("button", {
                    className: Sl,
                    type: "button",
                    onClick: i,
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: "okx-growth-wallet",
                        className: Bl
                    }), t.tonAddress ? Pl(t.tonAddress || "") : (0,
                    g.kW)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Wl = function() {
                var e = z().uid;
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
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
                ), [e]),
                (0,
                Z.jsxs)("div", {
                    className: al,
                    children: [(0,
                    Z.jsx)("div", {
                        className: sl,
                        children: (0,
                        Z.jsx)(Il, {})
                    }), (0,
                    Z.jsx)("div", {
                        className: il,
                        children: (0,
                        Z.jsx)(cr, {
                            header: (0,
                            Z.jsx)(Nl, {}),
                            headerWrapperClassName: cl
                        })
                    }), (0,
                    Z.jsx)($o, {
                        className: ol
                    }), (0,
                    Z.jsx)("p", {
                        className: rl,
                        children: (0,
                        g.kW)("ok_game_okxracer_disclaimer")
                    }), (0,
                    Z.jsx)(nl, {}), (0,
                    Z.jsx)(fl, {}), (0,
                    Z.jsx)(Do, {}), (0,
                    Z.jsx)(Jo, {}), (0,
                    Z.jsx)(Ho, {})]
                })
            }
              , El = function() {
                return (0,
                Z.jsx)(pt, {
                    children: (0,
                    Z.jsx)(Wl, {})
                })
            }
              , Rl = n(59465);
            n(48558);
            const Ll = "InviteBanner_bannerContainer__30zHC"
              , Ol = "InviteBanner_bannerIcon__U6pI0"
              , Dl = "InviteBanner_text__3Q8mq"
              , Fl = "InviteBanner_rightIcon__2Ly1W";
            var Ul = function(e) {
                var t = e.className;
                return (0,
                Z.jsxs)(Rn, {
                    className: k()(Ll, t),
                    to: Ge.referrals,
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: "okx-growth-friends",
                        className: Ol
                    }), (0,
                    Z.jsx)("div", {
                        className: Dl,
                        children: (0,
                        g.kW)("ok_game_okxracer_select_season_two_invite_friends")
                    }), (0,
                    Z.jsx)(b.A, {
                        iconName: "okx-growth-chevrons-right",
                        className: Fl
                    })]
                })
            };
            const Vl = "LeaderBoard_container__0DJSO"
              , Gl = "LeaderBoard_inviteBanner__sql+w"
              , Ml = "LeaderBoard_pageTitle__vTUSh"
              , Zl = "LeaderBoard_desc__MFxC+"
              , Hl = "LeaderBoard_inviteList__mV9a7"
              , Yl = "LeaderBoard_tabActiveClassName__7Xv4B"
              , zl = "LeaderBoard_tabsContent__KCGtW"
              , Kl = "RankListItem_listItem__zYe9u"
              , Xl = "RankListItem_name__i3zq8"
              , ql = "RankListItem_mask__97bB7"
              , Jl = "RankListItem_hightLightRow__6VE4b"
              , Ql = "RankListItem_rank__-ky1f"
              , $l = "RankListItem_point__7uHSt"
              , eu = "RankListItem_icon__-N6Za"
              , tu = "RankListItem_pointIcon__mAEQj";
            var nu = function(e) {
                var t = e.extUserName
                  , n = e.totalPoints
                  , a = e.rank
                  , r = e.isHighlight
                  , s = e.showPointEmoji
                  , i = void 0 === s || s;
                return (0,
                Z.jsxs)("li", {
                    className: k()(Kl, r && Jl),
                    children: [(0,
                    Z.jsx)("div", {
                        className: ql
                    }), Ti(a) ? (0,
                    Z.jsx)("span", {
                        className: k()(Ql, eu),
                        children: yi[a]
                    }) : (0,
                    Z.jsx)("span", {
                        className: Ql,
                        children: a > 100 ? "100+" : "#".concat(a)
                    }), (0,
                    Z.jsx)("div", {
                        className: Xl,
                        children: t
                    }), (0,
                    Z.jsxs)("div", {
                        className: $l,
                        children: [i && (0,
                        Z.jsx)("span", {
                            className: tu,
                            children: yi[4]
                        }), (0,
                        g.kW)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            Ut.ZV)(n)
                        })]
                    })]
                })
            };
            const au = "InviteButton_inviteBtn__gLbFB"
              , ru = "InviteButton_btnA__+dJqi"
              , su = "InviteButton_btnContainer__lg4rV"
              , iu = "InviteButton_copyButton__znucI"
              , cu = "InviteButton_copyIcon__QZgE9";
            var ou = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                g.kW)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = z().uid
                  , s = qe().linkCode
                  , i = M(s)
                  , c = i.shareUrl
                  , o = i.appUrl;
                return (0,
                Z.jsxs)("div", {
                    className: k()(a, su),
                    children: [(0,
                    Z.jsx)("a", {
                        className: ru,
                        href: c,
                        children: (0,
                        Z.jsx)(nn, {
                            onClick: function() {
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    T.act({
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
                            className: au,
                            text: n
                        })
                    }), (0,
                    Z.jsx)(A.default, {
                        strictCircle: !0,
                        category: A.default.CATEGORY.fill,
                        type: A.default.TYPE.primary,
                        size: A.default.SIZE.lg,
                        onClick: function() {
                            try {
                                navigator.clipboard.writeText(o),
                                X(!0, (0,
                                g.kW)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                X(!1, "Copy Invite URL failed")
                            }
                        },
                        className: iu,
                        children: (0,
                        Z.jsx)(b.A, {
                            iconName: "okx-growth-copy",
                            className: cu
                        })
                    })]
                })
            };
            const lu = "RankList_listHeader__KVGnw"
              , uu = "RankList_InviteButton__D6ute"
              , du = "RankList_noFirendsNote__Ckkil"
              , _u = "RankList_under__MJ5We"
              , mu = "RankList_rankItemPlaceholder__z-upW"
              , pu = "RankList_rankName__eM52K"
              , xu = "RankList_rankScore__GY5ah";
            var hu = 1
              , fu = 2
              , vu = 3
              , ku = function(e) {
                var t = e.total;
                return (0,
                Z.jsxs)("div", {
                    className: lu,
                    children: [(0,
                    Z.jsx)("span", {
                        children: (0,
                        g.kW)("ok_game_okxracer_racers_num", {
                            num: (0,
                            Ut.ZV)(t)
                        })
                    }), (0,
                    Z.jsx)("span", {
                        children: (0,
                        g.kW)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , gu = function() {
                return (0,
                Z.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        Z.jsxs)("div", {
                            className: mu,
                            children: [(0,
                            Z.jsx)(ms, {
                                className: pu
                            }), (0,
                            Z.jsx)(ms, {
                                className: xu
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , ju = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? hu : t
                  , r = (0,
                a.useState)(!0)
                  , s = (0,
                u.A)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)([])
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , x = (0,
                a.useState)(0)
                  , h = (0,
                u.A)(x, 2)
                  , f = h[0]
                  , v = h[1]
                  , k = (0,
                a.useState)()
                  , j = (0,
                u.A)(k, 2)
                  , N = j[0]
                  , A = j[1]
                  , b = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        var a, r;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        pageNo: t
                                    },
                                    n !== hu) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Ce(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    we(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (r = e.t0) && r.rows && (p(r.rows),
                                    v(r.total),
                                    A(r.userRanking)),
                                    e.next = 17;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t1 = e.catch(0);
                                case 17:
                                    c(!1);
                                case 18:
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
                  , w = N && ((null === N || void 0 === N ? void 0 : N.rank) > 3 || -1 === (null === N || void 0 === N ? void 0 : N.rank));
                return (0,
                a.useEffect)((function() {
                    b(1)
                }
                ), [b]),
                (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)(ku, {
                        total: f
                    }), i ? (0,
                    Z.jsx)(gu, {}) : (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [w && (0,
                        Z.jsx)(nu, (0,
                        C.A)((0,
                        C.A)({}, N), {}, {
                            isHighlight: !0
                        })), m.map((function(e, t) {
                            return (0,
                            Z.jsx)(nu, (0,
                            C.A)({}, e), "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    Z.jsx)("div", {
                        className: _u
                    }), n === hu && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [1 === m.length && (0,
                        Z.jsx)("div", {
                            className: du,
                            children: (0,
                            g.kW)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        Z.jsx)(ou, {
                            className: uu,
                            text: (0,
                            g.kW)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Nu = function() {
                return (0,
                Z.jsxs)("div", {
                    className: Vl,
                    children: [(0,
                    Z.jsx)(Ul, {
                        className: Gl
                    }), (0,
                    Z.jsx)(ac, {
                        className: Ml,
                        html: (0,
                        g.kW)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            g.kW)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    Z.jsx)("div", {
                        className: Zl,
                        children: (0,
                        g.kW)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    Z.jsxs)(Rl.A, {
                        activeClassName: Yl,
                        noPadding: !0,
                        size: Rl.A.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        Z.jsx)(Rl.A.TabPane, {
                            className: zl,
                            tab: (0,
                            g.kW)("ok_game_okxracer_tab_teams"),
                            id: vu,
                            children: (0,
                            Z.jsx)("div", {
                                className: Hl,
                                children: (0,
                                Z.jsx)(Ui, {})
                            })
                        }), (0,
                        Z.jsx)(Rl.A.TabPane, {
                            className: zl,
                            tab: (0,
                            g.kW)("ok_game_okxracer_tab_global"),
                            id: fu,
                            children: (0,
                            Z.jsx)("div", {
                                className: Hl,
                                children: (0,
                                Z.jsx)(ju, {
                                    pageType: fu
                                })
                            })
                        }), (0,
                        Z.jsx)(Rl.A.TabPane, {
                            tab: (0,
                            g.kW)("ok_game_okxracer_tab_friends"),
                            id: hu,
                            className: zl,
                            children: (0,
                            Z.jsx)("div", {
                                className: Hl,
                                children: (0,
                                Z.jsx)(ju, {
                                    pageType: hu
                                })
                            })
                        })]
                    })]
                })
            };
            const Au = "index_page__-xiuX"
              , bu = "index_entering__yddHy";
            var Cu = function(e) {
                var t = e.children
                  , n = e.animationPath
                  , r = (0,
                s.useLocation)()
                  , i = (0,
                a.useState)(r)
                  , c = (0,
                u.A)(i, 2)
                  , o = c[0]
                  , l = c[1]
                  , d = (0,
                a.useState)("")
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , x = function() {
                    return p(bu),
                    setTimeout((function() {
                        p("")
                    }
                    ), 200)
                };
                return (0,
                a.useEffect)((function() {
                    var e = null;
                    return n ? n.includes(r.pathname) && (e = x()) : e = x(),
                    l(r),
                    function() {
                        e && clearTimeout(e)
                    }
                }
                ), [n, r]),
                (0,
                Z.jsx)("div", {
                    className: k()(Au, m),
                    children: (0,
                    Z.jsx)(s.Switch, {
                        location: o,
                        children: t
                    })
                })
            }
              , wu = n(26612);
            const yu = "index_sheetContainer__VPbba"
              , Tu = "index_logo__iAzol"
              , Pu = "index_sheetName__X3wgl"
              , Su = "index_sheetDesc__BGlZJ"
              , Bu = "index_btn__jg8QD"
              , Iu = "index_secondaryBtn__1oeGV"
              , Wu = "index_btnText__ox2Nh";
            var Eu = function(e) {
                var t = e.name
                  , n = e.desc
                  , r = e.btnText
                  , s = e.onPrimaryBtnClick
                  , i = e.logo
                  , d = e.children
                  , _ = e.secondaryBtn
                  , m = (0,
                a.useState)(!1)
                  , p = (0,
                u.A)(m, 2)
                  , x = p[0]
                  , h = p[1]
                  , f = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return h(!0),
                                    e.next = 3,
                                    s();
                                case 3:
                                    h(!1);
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
                return (0,
                Z.jsxs)("div", {
                    className: yu,
                    children: [i && (0,
                    Z.jsx)(w.A, {
                        src: "".concat(c.A.cdnBaseUrl).concat(i),
                        className: Tu
                    }), (0,
                    Z.jsx)("div", {
                        className: Pu,
                        children: t
                    }), (0,
                    Z.jsx)("div", {
                        className: Su,
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            pr.YW)(n)
                        }
                    }), d, (0,
                    Z.jsx)(nn, {
                        className: Bu,
                        loading: x,
                        onClick: f,
                        text: r
                    }), _ && (0,
                    Z.jsx)(A.default, {
                        category: A.default.CATEGORY.outline,
                        type: A.default.TYPE.primary,
                        size: A.default.SIZE.lg,
                        className: Iu,
                        onClick: _.onClick,
                        children: (0,
                        Z.jsx)("div", {
                            className: Wu,
                            children: _.text
                        })
                    })]
                })
            }
              , Ru = function(e) {
                var t = e.task
                  , n = e.doTask
                  , a = t.context
                  , r = a.desc
                  , s = a.name
                  , i = a.btnText
                  , c = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n(t);
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
                }();
                return (0,
                Z.jsx)(Eu, {
                    name: s,
                    desc: r,
                    btnText: i,
                    onPrimaryBtnClick: c
                })
            }
              , Lu = n(32384);
            const Ou = "index_copyBox__6n5nL"
              , Du = "index_icon__BHdDG"
              , Fu = "index_line__dTaE5";
            var Uu = function(e) {
                var t = e.text
                  , n = e.showClose
                  , a = e.onClose
                  , r = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    navigator.clipboard.writeText(t || "");
                                case 3:
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_copied_url")),
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6,
                                    e.t0 = e.catch(0),
                                    X(!1, "Copy Invite URL failed");
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , s = n && a;
                return (0,
                Z.jsxs)("div", {
                    className: Ou,
                    children: [(0,
                    Z.jsx)("div", {
                        children: t
                    }), (0,
                    Z.jsx)(b.A, {
                        className: k()("okx-growth-copy", Du),
                        onClick: r,
                        a11yText: ""
                    }), s && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("span", {
                            className: Fu
                        }), (0,
                        Z.jsx)(b.A, {
                            className: k()("okds-close", Du),
                            onClick: a,
                            a11yText: ""
                        })]
                    })]
                })
            }
              , Vu = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Gu = "/cdn/assets/imgs/249/014A8107B107466F.png"
              , Mu = [ye.WalletConnect, ye.ConnectEVMChain, ye.OpenLink];
            var Zu = [ye.WalletConnect, ye.ConnectEVMChain];
            function Hu(e) {
                if (e.state === R.unfinished)
                    return !0;
                var t = e.context.actionType;
                return Zu.includes(t)
            }
            var Yu = function(e) {
                var t = e.doTask
                  , n = e.task
                  , r = Tl(function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(a) {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t(n, a));
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
                }())
                  , s = r.connectWallet;
                if ((0,
                a.useEffect)((function() {
                    (null === n || void 0 === n ? void 0 : n.state) === R.finished ? T.act({
                        action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }) : T.act({
                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), [null === n || void 0 === n ? void 0 : n.state]),
                n.context.actionType !== ye.WalletConnect)
                    return null;
                var i = n.context
                  , c = i.nameFinished
                  , u = i.tonAddress
                  , d = i.btnText
                  , _ = i.btnTextFinishedAndSwitch
                  , m = i.name
                  , p = i.desc;
                return (null === n || void 0 === n ? void 0 : n.state) === R.finished ? (0,
                Z.jsx)(Eu, {
                    name: c,
                    desc: "",
                    btnText: _,
                    logo: Gu,
                    onPrimaryBtnClick: s,
                    children: (0,
                    Z.jsx)(Uu, {
                        text: u
                    })
                }) : (0,
                Z.jsx)(Eu, {
                    name: m,
                    desc: p,
                    btnText: d,
                    logo: Vu,
                    onPrimaryBtnClick: s
                })
            }
              , zu = (0,
            f.A)((0,
            f.A)((0,
            f.A)((0,
            f.A)((0,
            f.A)({}, ye.Normal, Ru), ye.OpenLink, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== ye.OpenLink)
                    return null;
                var a = n.context
                  , r = a.desc
                  , s = a.name
                  , i = a.btnText
                  , c = a.redirectLink
                  , u = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        var a, r, s, i;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return c && (c.startsWith("https://t.me") ? null === (a = window) || void 0 === a || null === (r = a.Telegram) || void 0 === r || r.WebApp.openTelegramLink(c) : null === (s = window) || void 0 === s || null === (i = s.Telegram) || void 0 === i || i.WebApp.openLink(c)),
                                    e.next = 3,
                                    t(n);
                                case 3:
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
                return (0,
                Z.jsx)(Eu, {
                    name: s,
                    btnText: i,
                    desc: r,
                    onPrimaryBtnClick: u
                })
            }
            )), ye.WalletConnect, Yu), ye.WalletDepositConnect, (function(e) {
                var t = e.task
                  , n = e.doTask
                  , s = e.walletConnectTask
                  , i = qe().context
                  , c = r().useState("")
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1];
                (0,
                a.useEffect)((function() {
                    m(i.tonAddress || "")
                }
                ), [i.tonAddress]);
                var p = Tl(function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t, a) {
                        var r;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (s) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return e.next = 4,
                                    n(s, t);
                                case 4:
                                    return (r = e.sent) && (m(a || ""),
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_task_completion_msg"))),
                                    e.abrupt("return", r);
                                case 7:
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
                }())
                  , x = p.connectWallet;
                if (t.context.actionType !== ye.WalletDepositConnect)
                    return null;
                var h = t.context
                  , f = h.verifyBtnText
                  , v = h.connectedTitle
                  , k = h.desc
                  , j = h.depositBtnText
                  , N = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n(t);
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
                }();
                return (0,
                Z.jsx)(Eu, {
                    logo: Gu,
                    name: v,
                    desc: k,
                    btnText: f,
                    onPrimaryBtnClick: N,
                    secondaryBtn: {
                        text: j,
                        onClick: function() {
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(i.tonDeeplink)
                        }
                    },
                    children: (0,
                    Z.jsx)(Uu, {
                        text: _,
                        showClose: Boolean(s),
                        onClose: x
                    })
                })
            }
            )), ye.ConnectEVMChain, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== ye.ConnectEVMChain)
                    return null;
                var a = n.context
                  , r = a.chain
                  , s = a.name
                  , i = a.btnText
                  , u = a.desc
                  , d = a.logo
                  , _ = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        var a, s;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Lu.OKXUniversalConnectUI.init({
                                        dappMetaData: {
                                            icon: V(),
                                            name: "OKX Racer"
                                        },
                                        actionsConfiguration: {
                                            returnStrategy: "tg://resolve"
                                        },
                                        language: c.A.locale,
                                        uiPreferences: {
                                            theme: Lu.THEME.DARK
                                        }
                                    });
                                case 2:
                                    return a = e.sent,
                                    e.next = 5,
                                    a.openModal({
                                        namespaces: {
                                            eip155: {
                                                chains: [r],
                                                defaultChain: r
                                            }
                                        }
                                    });
                                case 5:
                                    return e.next = 7,
                                    a.request({
                                        method: "eth_requestAccounts"
                                    });
                                case 7:
                                    return s = e.sent,
                                    e.next = 10,
                                    t(n, (null === s || void 0 === s ? void 0 : s[0]) || "");
                                case 10:
                                    if (!a.connected()) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13,
                                    a.disconnect();
                                case 13:
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
                return (0,
                Z.jsx)(Eu, {
                    name: s,
                    desc: u,
                    btnText: i,
                    logo: d,
                    onPrimaryBtnClick: _
                })
            }
            ))
              , Ku = function(e) {
                var t = e.task
                  , n = e.doTask
                  , a = e.walletConnectTask;
                if (!t)
                    return null;
                var r = t.context.actionType
                  , s = zu[r] || Ru;
                return r === ye.WalletDepositConnect && (null === a || void 0 === a ? void 0 : a.state) === R.unfinished && (s = Yu),
                (0,
                Z.jsx)(s, {
                    task: t,
                    doTask: n,
                    walletConnectTask: a
                })
            };
            const Xu = "index_taskItemPlaceholder__hIgHw"
              , qu = "index_task__Y6X8h";
            var Ju = function() {
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        Z.jsx)("div", {
                            className: k()(Xu),
                            children: (0,
                            Z.jsx)(ms, {
                                className: qu
                            })
                        }, t)
                    }
                    ))
                })
            };
            const Qu = "index_taskItem__GMhr8"
              , $u = "index_title__Sfa26"
              , ed = "index_state__XRt4D"
              , td = "index_itemLeft__XevRg"
              , nd = "index_itemRight__Xjk6R"
              , ad = "index_icon__ByKLw"
              , rd = "index_done__m2rDm";
            var sd = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context
                  , c = "";
                if (r) {
                    var o = (0,
                    Ut.ZV)(r, {
                        signDisplay: !0
                    })
                      , l = s === R.finished ? "\u2705" : "\ud83c\udfc1";
                    c = "".concat(l, " ").concat(o, " pts")
                }
                return (0,
                Z.jsxs)("button", {
                    type: "button",
                    "aria-label": "",
                    className: Qu,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    Z.jsxs)("div", {
                        className: td,
                        children: [(0,
                        Z.jsx)("div", {
                            className: $u,
                            children: i.name
                        }), c && (0,
                        Z.jsx)("div", {
                            className: ed,
                            children: c
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: nd,
                        children: s === R.finished ? (0,
                        Z.jsx)("div", {
                            className: rd,
                            children: (0,
                            g.kW)("ok_game_okxracer_done")
                        }) : (0,
                        Z.jsx)(b.A, {
                            className: k()("okx-growth-chevrons-right", ad)
                        })
                    })]
                }, a)
            };
            const id = "index_container__ZnSx5";
            function cd(e) {
                var t = e.tasks
                  , n = e.className
                  , r = e.executeTaskCallback
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.A)(s, 2)
                  , c = i[0]
                  , d = i[1]
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.A)(_, 2)
                  , p = m[0]
                  , x = m[1]
                  , h = function() {
                    d(void 0),
                    x(!1)
                }
                  , f = function(e) {
                    if (e && function(e) {
                        if (e.state === R.unfinished)
                            return !0;
                        var t = e.context.actionType;
                        return Mu.includes(t)
                    }(e)) {
                        var t = e.context.actionType
                          , n = e.state;
                        d(e),
                        x(!0),
                        t === ye.WalletConnect && (n === R.finished ? T.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : T.act({
                            action: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }))
                    }
                }
                  , v = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t, n) {
                        var a;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (Hu(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    return h(),
                                    e.abrupt("return", !0);
                                case 3:
                                    if (a = {
                                        id: t.id,
                                        taskContext: n
                                    },
                                    e.prev = 4,
                                    t.state !== R.unfinished) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8,
                                    Be(a);
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12,
                                    Ie(a);
                                case 12:
                                    return r && r(t),
                                    X(!0, (0,
                                    g.kW)("ok_game_okxracer_task_completion_msg")),
                                    h(),
                                    e.abrupt("return", !0);
                                case 18:
                                    return e.prev = 18,
                                    e.t0 = e.catch(4),
                                    q(e.t0),
                                    e.abrupt("return", !1);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[4, 18]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , j = (0,
                a.useMemo)((function() {
                    return t.find((function(e) {
                        var t;
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === ye.WalletConnect
                    }
                    ))
                }
                ), [t]);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)("div", {
                        className: k()(id, n),
                        children: t.length > 0 ? t.map((function(e) {
                            return (0,
                            Z.jsx)(sd, {
                                task: e,
                                onClick: f
                            }, e.id)
                        }
                        )) : (0,
                        Z.jsx)(Ju, {})
                    }), c && (0,
                    Z.jsx)(Jt, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: h,
                        children: (0,
                        Z.jsx)(Ku, {
                            doTask: v,
                            task: c,
                            walletConnectTask: j
                        })
                    })]
                })
            }
            var od = (0,
            a.createContext)({
                airdrops: [],
                selectedAirdrop: null,
                loading: !1,
                onSelectAirdrop: function() {}
            })
              , ld = function() {
                return (0,
                a.useContext)(od)
            }
              , ud = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(null)
                  , o = (0,
                u.A)(c, 2)
                  , l = o[0]
                  , d = o[1]
                  , _ = (0,
                a.useState)(!0)
                  , m = (0,
                u.A)(_, 2)
                  , p = m[0]
                  , x = m[1];
                (0,
                a.useEffect)((function() {
                    x(!0),
                    Le(!0).then((function(e) {
                        var t = e.data;
                        i(t || [])
                    }
                    )).catch((function(e) {
                        B.v.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.message), e)
                    }
                    )).finally((function() {
                        x(!1)
                    }
                    ))
                }
                ), []);
                var h = function(e) {
                    d(e)
                }
                  , f = (0,
                a.useMemo)((function() {
                    return {
                        airdrops: s,
                        loading: p,
                        onSelectAirdrop: h,
                        selectedAirdrop: l
                    }
                }
                ), [l, s, p]);
                return (0,
                Z.jsx)(od.Provider, {
                    value: f,
                    children: t
                })
            };
            const dd = {
                container: "index_container__Y851r",
                header: "index_header__4gppM",
                title: "index_title__b+GpQ",
                desc: "index_desc__pU2jR",
                surpriseTitle: "index_surpriseTitle__Uqc-L",
                tasks: "index_tasks__k8-lb",
                taskListHeader: "index_taskListHeader__0FpaY"
            };
            var _d = function() {
                var e = ld().selectedAirdrop
                  , t = (0,
                s.useHistory)().replace
                  , n = (0,
                s.useLocation)().hash;
                if (hs(),
                (0,
                a.useEffect)((function() {
                    e || t(Ge.tasks + n)
                }
                ), [n, e, t]),
                !e)
                    return null;
                var r = e.tasks
                  , i = e.logo
                  , o = e.groupTitle
                  , l = e.groupDesc
                  , u = e.surprise;
                return (0,
                Z.jsxs)("div", {
                    className: dd.container,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: dd.header,
                        children: [(0,
                        Z.jsx)(Qr.A, {
                            size: wu.A.sm,
                            className: dd.logo,
                            src: "".concat(c.A.cdnBaseUrl).concat(i)
                        }), (0,
                        Z.jsx)("h1", {
                            className: dd.title,
                            children: o
                        })]
                    }), (0,
                    Z.jsx)("p", {
                        className: dd.desc,
                        children: l
                    }), (0,
                    Z.jsx)("div", {
                        className: dd.surpriseTitle,
                        children: (0,
                        g.kW)("ok_game_okxracer_label_surprises_details")
                    }), (0,
                    Z.jsx)("p", {
                        className: dd.desc,
                        children: u
                    }), (0,
                    Z.jsxs)("div", {
                        className: dd.tasks,
                        children: [(0,
                        Z.jsx)("div", {
                            className: dd.taskListHeader,
                            children: (0,
                            g.kW)("ok_game_okxracer_text_phase3_tasks")
                        }), (0,
                        Z.jsx)(cd, {
                            tasks: r
                        })]
                    })]
                })
            };
            const md = "index_airdropItem__pV1Az"
              , pd = "index_content__ZtejP"
              , xd = "index_airdropIcon__lZwMy"
              , hd = "index_airdropIconLoading__S1N9H"
              , fd = "index_title__19JPa"
              , vd = "index_desc__ekknt"
              , kd = "index_arrow__Y8OCn"
              , gd = "index_airdropItemPlaceholder__bL5jl";
            var jd = function(e) {
                var t = e.airdrop
                  , n = e.onClick
                  , a = t.logo
                  , r = t.groupSubTitle
                  , s = t.groupTitle;
                return (0,
                Z.jsxs)("button", {
                    type: "button",
                    "aria-label": "",
                    className: md,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    Z.jsxs)("div", {
                        className: pd,
                        children: [(0,
                        Z.jsx)(w.A, {
                            className: xd,
                            src: "".concat(c.A.cdnBaseUrl).concat(a)
                        }), (0,
                        Z.jsx)("div", {
                            className: fd,
                            children: s
                        }), (0,
                        Z.jsx)("div", {
                            className: vd,
                            children: r
                        })]
                    }), (0,
                    Z.jsx)(b.A, {
                        className: k()("okds-arrow-chevron-right-centered-sm", kd)
                    })]
                })
            }
              , Nd = function() {
                return (0,
                Z.jsxs)("div", {
                    className: k()(md, gd),
                    children: [(0,
                    Z.jsx)(ms, {
                        className: hd
                    }), (0,
                    Z.jsx)(ms, {
                        className: fd
                    }), (0,
                    Z.jsx)(ms, {
                        className: vd
                    })]
                })
            };
            const Ad = "index_offsetMarginContainer__2NtPr"
              , bd = "index_title__+65IJ"
              , Cd = "index_count__F-PWh"
              , wd = "index_airdropContainer__Gun3r"
              , yd = "index_paddingPlaceholder__X2M3o";
            var Td = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = ld()
                  , a = n.airdrops
                  , r = n.onSelectAirdrop
                  , i = n.loading
                  , c = Is().isCertified
                  , o = (0,
                s.useHistory)()
                  , l = (0,
                s.useLocation)()
                  , u = function(e) {
                    c ? (r(e),
                    o.push({
                        pathname: Ge.airdrop,
                        hash: l.hash
                    })) : t()
                }
                  , d = a.length;
                return i || 0 !== d ? (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("p", {
                        className: bd,
                        children: [(0,
                        g.kW)("ok_game_okxracer_label_airdrop_surprises"), "\xa0", (0,
                        Z.jsxs)("span", {
                            className: Cd,
                            children: ["(", d, ")"]
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: k()((0,
                        f.A)({}, Ad, d > 1)),
                        children: (0,
                        Z.jsxs)("div", {
                            className: wd,
                            children: [i ? (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)(Nd, {}), (0,
                                Z.jsx)(Nd, {}), (0,
                                Z.jsx)(Nd, {})]
                            }) : (0,
                            Z.jsx)(Z.Fragment, {
                                children: a.map((function(e) {
                                    return (0,
                                    Z.jsx)(jd, {
                                        airdrop: e,
                                        onClick: u
                                    }, e.groupId)
                                }
                                ))
                            }), d > 1 ? (0,
                            Z.jsx)("div", {
                                className: yd
                            }) : null]
                        })
                    })]
                }) : null
            }
              , Pd = n(3314);
            n(18279);
            const Sd = "Campaigns_title__a2IwB"
              , Bd = "Campaigns_count__LxNZj"
              , Id = "Campaigns_loaderContainer__tSglx"
              , Wd = "Campaigns_list__y6Ye0"
              , Ed = "Campaigns_noCampaigns__faP1c"
              , Rd = "Campaigns_desc__q+hH9"
              , Ld = "Campaigns_termsAndConditions__RfsOE";
            var Od = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = Is().isCertified
                  , r = (0,
                a.useContext)(qc)
                  , s = r.campaigns
                  , i = r.loading;
                var c = n ? (0,
                Z.jsx)(Pd.A.State, {
                    type: Pd.A.State.TYPE.noRecord,
                    className: Ed,
                    title: (0,
                    g.kW)("ok_game_okxracer_title_phase421_no_campaigns"),
                    description: (0,
                    Z.jsx)("p", {
                        className: Rd,
                        children: (0,
                        g.kW)("ok_game_okxracer_text_phase421_stay_tuned")
                    })
                }) : (0,
                Z.jsx)(Ps, {
                    roundLogo: !1,
                    campaign: {
                        logo: "/cdn/assets/imgs/249/D290EBECC9921075.png",
                        title: (0,
                        g.kW)("ok_game_okxracer_title_phase421_exciting_camp"),
                        subTitle: (0,
                        g.kW)("ok_game_okxracer_text_phase421_verify_identity")
                    },
                    btnText: (0,
                    g.kW)("ok_game_okxracer_btn_phase421_verify"),
                    onClick: t
                })
                  , o = n || s.length > 0;
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("p", {
                        className: Sd,
                        children: [(0,
                        g.kW)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", o && (0,
                        Z.jsxs)("span", {
                            className: Bd,
                            children: ["(", s.length, ")"]
                        })]
                    }), i && (0,
                    Z.jsx)("div", {
                        className: Id,
                        children: (0,
                        Z.jsx)(Qn.A, {})
                    }), !i && 0 === s.length && c, (0,
                    Z.jsx)("ul", {
                        className: Wd,
                        children: s.map((function(e) {
                            return (0,
                            Z.jsx)(Ps, {
                                campaign: e,
                                btnText: (0,
                                g.kW)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    n ? function(e) {
                                        Qt({
                                            children: (0,
                                            Z.jsx)(ds, {
                                                campaign: e
                                            })
                                        })
                                    }(e) : t()
                                }
                            }, e.startDate)
                        }
                        ))
                    }), !n && (0,
                    Z.jsx)($o, {
                        className: Ld
                    })]
                })
            }
              , Dd = function() {
                var e = Is().accountBindingInfo || {}
                  , t = e.gradeCategories
                  , n = e.pointGradeName
                  , r = void 0 === n ? "" : n
                  , s = e.totalEarnedPoints
                  , i = void 0 === s ? 0 : s
                  , c = (0,
                a.useMemo)((function() {
                    return !t || t.length <= 0 ? 0 : t.findIndex((function(e) {
                        return e.pointGradeName == r
                    }
                    ))
                }
                ), [t, r]);
                return {
                    currentGradeIndex: c,
                    currentGrade: null === t || void 0 === t ? void 0 : t[c],
                    gradeCategories: t,
                    pointGradeName: r,
                    totalEarnedPoints: i
                }
            };
            const Fd = {
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
            var Ud = function() {
                var e = Dd()
                  , t = e.currentGradeIndex
                  , n = e.currentGrade
                  , r = e.gradeCategories
                  , s = e.pointGradeName
                  , i = e.totalEarnedPoints
                  , o = (0,
                a.useState)(0)
                  , l = (0,
                u.A)(o, 2)
                  , d = l[0]
                  , _ = l[1]
                  , m = (0,
                a.useState)(!0)
                  , p = (0,
                u.A)(m, 2)
                  , x = p[0]
                  , h = p[1];
                (0,
                a.useEffect)((function() {
                    if (r && !(r.length <= 0)) {
                        var e = r.map((function(e) {
                            return "".concat(c.A.cdnBaseUrl).concat(null === e || void 0 === e ? void 0 : e.logo)
                        }
                        ));
                        e.forEach((function(e) {
                            (new Image).src = e
                        }
                        ))
                    }
                }
                ), [r]),
                hs(),
                (0,
                a.useEffect)((function() {
                    _(t)
                }
                ), [t]),
                (0,
                a.useEffect)((function() {
                    h(!0)
                }
                ), [d]);
                var f = (0,
                a.useMemo)((function() {
                    return !(!r || r.length <= 0) && (n && (null === n || void 0 === n ? void 0 : n.pointGradeName) === r[d].pointGradeName)
                }
                ), [r, s, d])
                  , v = (0,
                a.useMemo)((function() {
                    return r ? r[d] : null
                }
                ), [d, r])
                  , j = function(e) {
                    h(!1),
                    setTimeout((function() {
                        return _(e)
                    }
                    ), 300)
                }
                  , N = (0,
                a.useCallback)((function() {
                    var e = d;
                    0 !== e && e--,
                    j(e)
                }
                ), [r, d])
                  , A = (0,
                a.useCallback)((function() {
                    var e = d;
                    e !== (null === r || void 0 === r ? void 0 : r.length) - 1 && e++,
                    j(e)
                }
                ), [r, d])
                  , C = t === r.length - 1;
                return (0,
                Z.jsx)("div", {
                    className: Fd.container,
                    children: (0,
                    Z.jsx)("div", {
                        className: Fd.cardBox,
                        children: (0,
                        Z.jsxs)("div", {
                            className: k()(Fd.content, x ? Fd.fadeIn : Fd.fadeOut),
                            children: [(0,
                            Z.jsx)("div", {
                                className: Fd.levelLogoBox,
                                children: (0,
                                Z.jsx)("img", {
                                    src: null !== v && void 0 !== v && v.logo ? "".concat(c.A.cdnBaseUrl).concat(null === v || void 0 === v ? void 0 : v.logo) : "".concat(c.A.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: k()(Fd.levelLogo, t >= d ? Fd.logoLight : Fd.logoGrade)
                                })
                            }), 0 !== d && (0,
                            Z.jsx)(b.A, {
                                className: k()("okds-arrow-chevron-left-centered-md", Fd.leftBtn, Fd.switchBtn),
                                onClick: N,
                                a11yText: ""
                            }), d !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            Z.jsx)(b.A, {
                                className: k()("okds-arrow-chevron-right-centered-md", Fd.rightBtn, Fd.switchBtn),
                                onClick: A,
                                a11yText: ""
                            }), (0,
                            Z.jsx)("div", {
                                className: Fd.currentGrade,
                                children: f && (0,
                                g.kW)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            Z.jsx)("div", {
                                className: Fd.gradeTitle,
                                children: null === v || void 0 === v ? void 0 : v.pointGradeName
                            }), (0,
                            Z.jsx)("div", {
                                className: Fd.progressNum,
                                children: v ? f && C ? (0,
                                Z.jsxs)(Z.Fragment, {
                                    children: [(0,
                                    Z.jsx)("span", {
                                        children: (0,
                                        Ut.ZV)(i)
                                    }), "\xa0", (0,
                                    g.kW)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : f ? (0,
                                Z.jsxs)(Z.Fragment, {
                                    children: [(0,
                                    Z.jsx)("span", {
                                        children: (0,
                                        Ut.ZV)(i)
                                    }), " /", " ", (0,
                                    Ut.ZV)(v.upperBound), "\xa0", (0,
                                    g.kW)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                Z.jsx)(Z.Fragment, {
                                    children: v.upperBound ? (0,
                                    g.kW)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        Ut.ZV)(v.lowerBound),
                                        top: (0,
                                        Ut.ZV)(v.upperBound)
                                    }) : (0,
                                    g.kW)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        Ut.ZV)(v.lowerBound)
                                    })
                                }) : ""
                            }), f && !C && (0,
                            Z.jsx)("div", {
                                className: Fd.progressSlide,
                                children: (0,
                                Z.jsx)("div", {
                                    className: Fd.progress,
                                    style: {
                                        width: "".concat(i / (Number(null === v || void 0 === v ? void 0 : v.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const Vd = "License_loader__4L8AA"
              , Gd = "License_container__MxoNJ"
              , Md = "License_pageTitle__h+Yja"
              , Zd = "License_verifiedUsers__q-uxi"
              , Hd = "License_avatars__3HegJ"
              , Yd = "License_usersCount__fkW5h"
              , zd = "NeonBox_container__0efrL"
              , Kd = "NeonBox_certified__dDOGg"
              , Xd = "NeonBox_backgroundWrapper__dblpl"
              , qd = "NeonBox_content__T1f+D"
              , Jd = "NeonBox_header__jMjn9";
            var Qd = function(e) {
                var t = e.children
                  , n = e.isCertified
                  , a = void 0 === n || n
                  , r = e.header;
                return (0,
                Z.jsxs)("div", {
                    className: k()(zd, a && Kd),
                    children: [r && (0,
                    Z.jsx)("div", {
                        className: Jd,
                        children: r
                    }), (0,
                    Z.jsx)("div", {
                        className: k()(Xd),
                        children: (0,
                        Z.jsx)("div", {
                            className: qd,
                            children: t
                        })
                    })]
                })
            };
            const $d = "LicenseCard_licenseCard__+wyQA"
              , e_ = "LicenseCard_header__LUvW7"
              , t_ = "LicenseCard_title__rMFOB"
              , n_ = "LicenseCard_content__i2ESe"
              , a_ = "LicenseCard_innerCard__n57Gb"
              , r_ = "LicenseCard_details__boiyi"
              , s_ = "LicenseCard_label__JX11k"
              , i_ = "LicenseCard_link__19+Q+"
              , c_ = "LicenseCard_linkIcon__oNENM"
              , o_ = "LicenseCard_points__MkLL5"
              , l_ = "LicenseCard_icon__b6JLr"
              , u_ = "LicenseCard_certifyBtn__Z6vHo"
              , d_ = "LicenseCard_infoPopoverDesc__Km8Og"
              , __ = "LicenseCard_gradeImage__fd+PJ";
            var m_ = function() {
                return (0,
                Z.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: (0,
                    Z.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.97777 2.5H2.35555C2.15919 2.5 2 2.65919 2 2.85555V7.47777C2 7.67413 2.15919 7.83332 2.35555 7.83332H6.97777C7.17413 7.83332 7.33332 7.67413 7.33332 7.47777V2.85555C7.33332 2.65919 7.17413 2.5 6.97777 2.5ZM12.3134 7.83334H7.69118C7.49482 7.83334 7.33563 7.99253 7.33563 8.18889V12.8111C7.33563 13.0075 7.49482 13.1667 7.69118 13.1667H12.3134C12.5098 13.1667 12.6689 13.0075 12.6689 12.8111V8.18889C12.6689 7.99253 12.5098 7.83334 12.3134 7.83334ZM13.0222 2.5H17.6444C17.8408 2.5 18 2.65919 18 2.85555V7.47777C18 7.67413 17.8408 7.83332 17.6444 7.83332H13.0222C12.8259 7.83332 12.6667 7.67413 12.6667 7.47777V2.85555C12.6667 2.65919 12.8259 2.5 13.0222 2.5ZM6.97777 13.1667H2.35555C2.15919 13.1667 2 13.3259 2 13.5222V18.1444C2 18.3408 2.15919 18.5 2.35555 18.5H6.97777C7.17413 18.5 7.33332 18.3408 7.33332 18.1444V13.5222C7.33332 13.3259 7.17413 13.1667 6.97777 13.1667ZM13.0222 13.1667H17.6444C17.8408 13.1667 18 13.3259 18 13.5222V18.1444C18 18.3408 17.8408 18.5 17.6444 18.5H13.0222C12.8259 18.5 12.6667 18.3408 12.6667 18.1444V13.5222C12.6667 13.3259 12.8259 13.1667 13.0222 13.1667Z",
                        fill: "#121212"
                    })
                })
            }
              , p_ = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = qe().accumPoints
                  , a = Is()
                  , r = a.accountBindingInfo
                  , s = a.isCertified
                  , i = Dd().currentGrade;
                return (0,
                Z.jsx)("section", {
                    className: $d,
                    children: (0,
                    Z.jsx)(Qd, {
                        isCertified: s,
                        header: (0,
                        Z.jsxs)("div", {
                            className: e_,
                            children: [(0,
                            Z.jsx)(m_, {}), (0,
                            Z.jsx)("span", {
                                className: t_,
                                children: s ? (0,
                                g.kW)("ok_game_okxracer_label_phase4_certified") : (0,
                                g.kW)("ok_game_okxracer_label_phase4_uncertified")
                            })]
                        }),
                        children: (0,
                        Z.jsxs)("div", {
                            className: n_,
                            children: [(0,
                            Z.jsxs)("div", {
                                className: a_,
                                children: [(0,
                                Z.jsxs)("div", {
                                    className: r_,
                                    children: [(0,
                                    Z.jsx)("p", {
                                        className: s_,
                                        children: (0,
                                        g.kW)("ok_game_okxracer_title_phase4_racer_grade")
                                    }), (0,
                                    Z.jsxs)(Rn, {
                                        to: Ge.licenseGrades,
                                        className: i_,
                                        children: [(0,
                                        Wr.z)(null === r || void 0 === r ? void 0 : r.pointGradeName), (0,
                                        Z.jsx)(b.A, {
                                            iconName: "okds-arrow-chevron-right-centered-md",
                                            className: c_
                                        })]
                                    }), (0,
                                    Z.jsxs)("div", {
                                        className: o_,
                                        children: [(0,
                                        Z.jsx)("span", {
                                            className: s_,
                                            children: (0,
                                            g.kW)("ok_game_okxracer_text_phase3_total_pts_earned")
                                        }), "\xa0", (0,
                                        Ut.ZV)(n), (0,
                                        Z.jsx)(Jr.A, {
                                            title: (0,
                                            g.kW)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                            contentClassName: d_,
                                            children: (0,
                                            Z.jsx)(b.A, {
                                                iconName: "okx-growth-information",
                                                className: l_
                                            })
                                        })]
                                    })]
                                }), i && (0,
                                Z.jsx)(w.A, {
                                    pictureClassName: __,
                                    className: __,
                                    src: "".concat(c.A.cdnBaseUrl, "/").concat(i.logo)
                                })]
                            }), !s && (0,
                            Z.jsx)(nn, {
                                className: u_,
                                size: A.default.SIZE.md,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_phase4_certify"),
                                onClick: t
                            })]
                        })
                    })
                })
            }
              , x_ = function() {
                var e, t = z().uid, n = Is(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, d = n.isLoading, _ = (0,
                a.useState)(!1), m = (0,
                u.A)(_, 2), p = m[0], x = m[1], h = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                i(!1);
                            case 3:
                                e.next = 8;
                                break;
                            case 5:
                                e.prev = 5,
                                e.t0 = e.catch(0),
                                X(!1, (0,
                                g.kW)("ok_game_okxracer_error_high_traffic"));
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 5]])
                }
                ))), [i]);
                if ((0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || h()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [h]),
                (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
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
                    Z.jsx)("div", {
                        className: Vd,
                        children: (0,
                        Z.jsx)(Qn.A, {})
                    });
                var f = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0
                  , v = function() {
                    x(!0)
                };
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("div", {
                        className: Gd,
                        children: [!s && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(ac, {
                                className: Md,
                                html: (0,
                                g.kW)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            Z.jsxs)("div", {
                                className: Zd,
                                children: [(0,
                                Z.jsx)(w.A, {
                                    className: Hd,
                                    src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                Z.jsx)("span", {
                                    className: Yd,
                                    children: f > 0 ? (0,
                                    Ut.ZV)(f) : "--"
                                }), (0,
                                g.kW)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        Z.jsx)(p_, {
                            showCertifyBottomSheet: v
                        }), (0,
                        Z.jsx)(Td, {
                            showCertifyBottomSheet: v
                        }), (0,
                        Z.jsx)(Od, {
                            showCertifyBottomSheet: v
                        })]
                    }), (0,
                    Z.jsx)(Ks, {
                        visible: p,
                        onClose: function() {
                            x(!1)
                        },
                        handleVerified: function() {
                            x(!1)
                        }
                    })]
                })
            }
              , h_ = function() {
                return (0,
                Z.jsx)(ud, {
                    children: (0,
                    Z.jsxs)(Cu, {
                        animationPath: [Ge.licenseGrades],
                        children: [(0,
                        Z.jsx)(s.Route, {
                            path: Ge.license,
                            component: x_,
                            exact: !0
                        }), (0,
                        Z.jsx)(s.Route, {
                            path: Ge.airdrop,
                            component: _d,
                            exact: !0
                        }), (0,
                        Z.jsx)(s.Route, {
                            path: Ge.licenseGrades,
                            component: ao(Ud),
                            exact: !0
                        })]
                    })
                })
            };
            const f_ = "QrCode_container__r4Fu7"
              , v_ = "QrCode_qrCode__16PWa"
              , k_ = "QrCode_title__+cibb"
              , g_ = "QrCode_message__eaOzW";
            var j_ = function() {
                return (0,
                Z.jsxs)("div", {
                    className: f_,
                    children: [(0,
                    Z.jsx)(w.A, {
                        className: v_,
                        src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    Z.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            pr.YW)((0,
                            g.kW)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: k_
                    }), (0,
                    Z.jsx)("p", {
                        className: g_,
                        children: (0,
                        g.kW)("ok_game_okxracer_browser_msg")
                    })]
                })
            };
            const N_ = "PullupList_loading__+51Dh"
              , A_ = "PullupList_listLoadItem__XcvkH"
              , b_ = "PullupList_listLeft__4eGh6"
              , C_ = "PullupList_listRight__w7Ely"
              , w_ = "PullupList_listLoading__whJeg";
            var y_ = function() {
                return (0,
                Z.jsxs)("div", {
                    className: k()(A_),
                    children: [(0,
                    Z.jsx)(ms, {
                        className: b_
                    }), (0,
                    Z.jsx)(ms, {
                        className: C_
                    })]
                })
            }
              , T_ = function() {
                return (0,
                Z.jsx)("div", {
                    className: w_,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        Z.jsx)(y_, {}, t)
                    }
                    ))
                })
            }
              , P_ = function(e) {
                var t = e.loadData
                  , n = e.children
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.A)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!0)
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , x = (0,
                a.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , h = (0,
                a.useRef)(null)
                  , f = (0,
                a.useState)(!1)
                  , v = (0,
                u.A)(f, 2)
                  , k = v[0]
                  , g = v[1]
                  , j = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        var n;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (-1 === x.current.total || !(i.length >= x.current.total || !0 === x.current.stop)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return p(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    t(x.current.page, x.current.total);
                                case 6:
                                    (n = e.sent) && n.rows ? (x.current.page += 1,
                                    c((function(e) {
                                        return [].concat((0,
                                        qr.A)(e), (0,
                                        qr.A)(n.rows))
                                    }
                                    )),
                                    x.current.total = 0 === n.rows.length ? i.length : n.total) : x.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    x.current.stop = !0;
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
                  , N = (0,
                Al.A)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , A = function(e) {
                    e[0].isIntersecting && !m && !1 === x.current.stop && g(!k)
                };
                return (0,
                a.useEffect)((function() {
                    var e = new IntersectionObserver(A,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return h.current && e.observe(h.current),
                    function() {
                        h.current && e.unobserve(h.current)
                    }
                }
                ), [m]),
                (0,
                a.useEffect)((function() {
                    N()
                }
                ), [k]),
                (0,
                Z.jsxs)(Z.Fragment, {
                    children: [i.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    Z.jsx)("div", {
                        className: N_,
                        ref: h,
                        children: m && (0,
                        Z.jsx)(T_, {})
                    })]
                })
            };
            const S_ = "InviteList_listItem__q4jhG"
              , B_ = "InviteList_name__LLQgt"
              , I_ = "InviteList_point__kXtCn"
              , W_ = "InviteList_earnedPrice__4vAfw"
              , E_ = "InviteList_pointNumber__v4P1H";
            var R_ = function() {
                var e = (0,
                a.useState)(0)
                  , t = (0,
                u.A)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , s = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t, n) {
                        var a, s, i;
                        return (0,
                        o.A)().wrap((function(e) {
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
                                    be(s, a);
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
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)("div", {
                        className: W_,
                        children: (0,
                        g.Vp)("ok_game_okxracer_refer_points", {
                            points: (0,
                            Z.jsx)("span", {
                                className: E_,
                                children: (0,
                                g.kW)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    Ut.ZV)(n)
                                })
                            })
                        })
                    }), (0,
                    Z.jsx)(P_, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            Z.jsxs)("div", {
                                className: S_,
                                children: [(0,
                                Z.jsx)("div", {
                                    className: B_,
                                    children: e.extInviteeName
                                }), (0,
                                Z.jsx)("div", {
                                    className: I_,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        Ut.ZV)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const L_ = "ReferralsPage_container__V48m1"
              , O_ = "ReferralsPage_inviteDetail__L1MhM"
              , D_ = "ReferralsPage_detailItem__ujOp+"
              , F_ = "ReferralsPage_dot__zKW7L"
              , U_ = "ReferralsPage_detailTitle__OE657"
              , V_ = "ReferralsPage_detailInfo__YC+Y9"
              , G_ = "ReferralsPage_inviteList__Jksx8";
            var M_ = function() {
                var e = z().uid;
                return hs(),
                (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
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
                ), [e]),
                (0,
                Z.jsxs)("div", {
                    className: L_,
                    children: [(0,
                    Z.jsx)(ac, {
                        html: "".concat((0,
                        g.kW)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        g.kW)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    Z.jsx)("div", {
                        className: O_,
                        children: (0,
                        Z.jsxs)("div", {
                            className: D_,
                            children: [(0,
                            Z.jsx)("div", {
                                className: F_
                            }), (0,
                            Z.jsx)("div", {
                                className: U_,
                                children: (0,
                                g.kW)("ok_game_okxracer_refer_your_friends")
                            }), (0,
                            Z.jsx)("div", {
                                className: V_,
                                children: (0,
                                g.kW)("ok_game_okxracer_refer_rewards")
                            })]
                        })
                    }), (0,
                    Z.jsx)("div", {
                        className: G_,
                        children: (0,
                        Z.jsx)(R_, {})
                    }), (0,
                    Z.jsx)(ou, {})]
                })
            }
              , Z_ = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , H_ = (0,
            a.createContext)({
                tasks: Z_,
                executeTaskSuccessCallback: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
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
              , Y_ = function() {
                return (0,
                a.useContext)(H_)
            }
              , z_ = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(Z_)
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)()
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = qe().updateGameInfoFromServer
                  , x = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Se(!0);
                            case 2:
                                n = e.sent,
                                i(null !== (t = n.data) && void 0 !== t ? t : Z_);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), []);
                (0,
                a.useEffect)((function() {
                    x()
                }
                ), [x]);
                var h = (0,
                a.useCallback)((function(e) {
                    m(e)
                }
                ), [])
                  , f = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n, a, r, s, c, l;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Se(), p()]);
                            case 2:
                                t = e.sent,
                                n = (0,
                                u.A)(t, 1),
                                a = n[0],
                                "fulfilled" === a.status && (c = null !== (r = null === (s = a.value) || void 0 === s ? void 0 : s.data) && void 0 !== r ? r : Z_,
                                i(c),
                                _ && (l = c.taskGroups.find((function(e) {
                                    return e.groupName === _.groupName
                                }
                                ))) && m(l));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [_, p]);
                return (0,
                Z.jsx)(H_.Provider, {
                    value: {
                        tasks: s,
                        executeTaskSuccessCallback: f,
                        partner: _,
                        setSelectedPartner: h
                    },
                    children: t
                })
            };
            const K_ = {
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
            var X_ = function() {
                var e = Y_()
                  , t = e.partner
                  , n = e.executeTaskSuccessCallback
                  , r = (0,
                s.useHistory)().replace
                  , i = (0,
                s.useLocation)().hash;
                if (hs(),
                (0,
                a.useEffect)((function() {
                    t || r(Ge.tasks + i)
                }
                ), [i, t, r]),
                !t)
                    return null;
                var o = t.numCompletedTasks
                  , l = t.numTasks
                  , u = t.tasks
                  , d = t.logo
                  , _ = t.groupName
                  , m = t.groupDesc
                  , p = t.totalPoints
                  , x = t.participants;
                return (0,
                Z.jsxs)("div", {
                    className: K_.container,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: K_.header,
                        children: [(0,
                        Z.jsx)(Qr.A, {
                            size: wu.A.sm,
                            className: K_.logo,
                            src: "".concat(c.A.cdnBaseUrl).concat(d)
                        }), (0,
                        Z.jsx)("h1", {
                            className: K_.title,
                            children: _
                        })]
                    }), (0,
                    Z.jsx)("p", {
                        className: K_.desc,
                        children: m
                    }), (0,
                    Z.jsxs)("div", {
                        className: K_.status,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: K_.statusItem,
                            children: [(0,
                            Z.jsx)("div", {
                                className: K_.statusTitle,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            Z.jsx)("div", {
                                className: K_.statusValue,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    Ut.ZV)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            className: K_.statusItem,
                            children: [(0,
                            Z.jsx)("div", {
                                className: K_.statusTitle,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            Z.jsxs)("div", {
                                className: K_.statusValue,
                                children: [(0,
                                Z.jsx)(b.A, {
                                    className: k()("okx-growth-friends", K_.participantsIcon)
                                }), Ut.Ru.shortNumber(x, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: K_.tasks,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: K_.taskListHeader,
                            children: [(0,
                            Z.jsx)("span", {
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            Z.jsx)("span", {
                                className: K_.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(o, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        Z.jsx)(cd, {
                            tasks: u,
                            executeTaskCallback: n
                        })]
                    })]
                })
            };
            const q_ = "index_partnerItem__S1dkf"
              , J_ = "index_title__bRRMU"
              , Q_ = "index_points__WQSip"
              , $_ = "index_state__gi-nK"
              , em = "index_logo__y4rK-"
              , tm = "index_item-left__ej9+1"
              , nm = "index_item-right__3KRWi"
              , am = "index_dot__4bynu"
              , rm = "index_participantsIcon__-tYh0"
              , sm = "index_icon__gS69A";
            var im = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                Z.jsxs)("div", {
                    className: q_,
                    children: [(0,
                    Z.jsx)(Qr.A, {
                        size: wu.A.sm,
                        className: em,
                        src: "".concat(c.A.cdnBaseUrl).concat(i)
                    }), (0,
                    Z.jsxs)("div", {
                        className: tm,
                        children: [(0,
                        Z.jsx)("div", {
                            className: J_,
                            children: t
                        }), (0,
                        Z.jsx)("div", {
                            className: Q_,
                            children: (0,
                            g.kW)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                Ut.ZV)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        Z.jsxs)("div", {
                            className: $_,
                            children: [(0,
                            Z.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    pr.YW)((0,
                                    g.kW)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            Z.jsx)("span", {
                                className: am
                            }), (0,
                            Z.jsx)(b.A, {
                                className: k()("okx-growth-friends", rm)
                            }), (0,
                            Z.jsx)("em", {
                                children: Ut.Ru.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: nm,
                        children: (0,
                        Z.jsx)(b.A, {
                            className: k()("okx-growth-chevrons-right", sm)
                        })
                    })]
                })
            };
            const cm = "index_container__wKNP9";
            function om(e) {
                var t = e.tasks
                  , n = e.className
                  , a = Y_().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                Z.jsx)("div", {
                    className: k()(cm, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , c = e.logo;
                        return (0,
                        Z.jsx)(Rn, {
                            to: Ge.partner,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            Z.jsx)(im, {
                                name: t,
                                logo: c,
                                totalPoints: s,
                                numCompletedTasks: r,
                                numTasks: n,
                                participants: i
                            })
                        }, t)
                    }
                    )) : (0,
                    Z.jsx)(Ju, {})
                })
            }
            const lm = "TaskArea_tabPane__irXs6"
              , um = "TaskArea_tabName__-BL2R"
              , dm = "TaskArea_list__cqK4t";
            var _m = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                g.kW)("ok_game_okxracer_tab_partner_tasks") : (0,
                g.kW)("ok_game_okxracer_tab_my_tasks");
                return (0,
                Z.jsxs)("div", {
                    className: um,
                    children: [r, " ", (0,
                    Z.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , mm = function() {
                var e = Y_()
                  , t = e.tasks
                  , n = e.executeTaskSuccessCallback
                  , a = t.taskGroups
                  , r = t.ungroupedTasks;
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: (0,
                    Z.jsxs)(Rl.A.Underline, {
                        size: Rl.A.SIZE.xl,
                        children: [(0,
                        Z.jsx)(Rl.A.TabPane, {
                            className: lm,
                            tab: (0,
                            Z.jsx)(_m, {
                                isPartner: !0,
                                count: a.length
                            }),
                            id: "partner",
                            children: (0,
                            Z.jsx)(om, {
                                tasks: a,
                                className: dm
                            })
                        }), (0,
                        Z.jsx)(Rl.A.TabPane, {
                            className: lm,
                            tab: (0,
                            Z.jsx)(_m, {
                                count: r.length
                            }),
                            id: "own",
                            children: (0,
                            Z.jsx)(cd, {
                                tasks: r,
                                className: dm,
                                executeTaskCallback: n
                            })
                        })]
                    })
                })
            };
            const pm = "TaskPage_container__5KfIM"
              , xm = "TaskPage_block__kt8oo"
              , hm = "TaskPage_pointsContainer__+vQ2y"
              , fm = "TaskPage_points__+UHeE"
              , vm = "TaskPage_label__-ivvS";
            var km = function() {
                var e = qe().accumPoints;
                return (0,
                Z.jsxs)("div", {
                    className: pm,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: k()(xm, hm),
                        children: [(0,
                        Z.jsx)("p", {
                            className: fm,
                            children: (0,
                            Ut.ZV)(e)
                        }), (0,
                        Z.jsxs)("div", {
                            className: vm,
                            children: [(0,
                            g.kW)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                            Z.jsx)(Jr.A, {
                                title: (0,
                                g.kW)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                children: (0,
                                Z.jsx)(b.A, {
                                    iconName: "okds-information-circle"
                                })
                            })]
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: xm,
                        children: (0,
                        Z.jsx)(mm, {})
                    })]
                })
            }
              , gm = function() {
                return (0,
                Z.jsx)(z_, {
                    children: (0,
                    Z.jsxs)(s.Switch, {
                        children: [(0,
                        Z.jsx)(s.Route, {
                            path: Ge.tasks,
                            component: km,
                            exact: !0
                        }), (0,
                        Z.jsx)(s.Route, {
                            path: Ge.partner,
                            component: X_,
                            exact: !0
                        })]
                    })
                })
            };
            const jm = "TotalTeamPoints_container__w4h5U"
              , Nm = "TotalTeamPoints_header__ilpK1"
              , Am = "TotalTeamPoints_listHeader__ewYPw";
            var bm = []
              , Cm = function() {
                hs();
                var e = {
                    extUserName: "188888.x ",
                    rank: 102,
                    totalPoints: 319189225
                }
                  , t = e && (e.rank > 3 || -1 === e.rank);
                return (0,
                Z.jsxs)("div", {
                    className: jm,
                    children: [(0,
                    Z.jsx)("h2", {
                        className: Nm,
                        children: (0,
                        g.kW)("ok_game_okxracer_label_total_team_points")
                    }), (0,
                    Z.jsxs)("p", {
                        className: Am,
                        children: [(0,
                        Z.jsx)("div", {
                            children: (0,
                            g.kW)("ok_game_okxracer_racers_num", {
                                num: (0,
                                Ut.ZV)(bm.length || 0)
                            })
                        }), (0,
                        Z.jsx)("div", {
                            children: (0,
                            g.kW)("ok_game_okxracer_label_total_pts_contributed")
                        })]
                    }), (0,
                    Z.jsxs)("ul", {
                        children: [t && (0,
                        Z.jsx)(nu, (0,
                        C.A)((0,
                        C.A)({}, e), {}, {
                            isHighlight: !0,
                            showPointEmoji: !1
                        })), bm.map((function(e) {
                            return (0,
                            Z.jsx)(nu, (0,
                            C.A)((0,
                            C.A)({}, e), {}, {
                                showPointEmoji: !1
                            }))
                        }
                        ))]
                    })]
                })
            }
              , wm = O
              , ym = (0,
            a.createContext)({
                boosts: [],
                upgradeBoost: function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e() {
                        return (0,
                        o.A)().wrap((function(e) {
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
                onChangeTab: function() {},
                activeTabId: O,
                boostGroups: {}
            })
              , Tm = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)({})
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(O)
                  , d = (0,
                u.A)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)([])
                  , x = (0,
                u.A)(p, 2)
                  , h = x[0]
                  , f = x[1]
                  , v = qe().updateGameInfoFromServer
                  , k = (0,
                a.useCallback)((0,
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n, a, r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                Te(!0);
                            case 3:
                                n = e.sent,
                                a = n.data,
                                r = null === a || void 0 === a ? void 0 : a.boostGroups,
                                i(r || {}),
                                f(null !== (t = null === r || void 0 === r ? void 0 : r[wm]) && void 0 !== t ? t : []),
                                e.next = 12;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(0);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 10]])
                }
                ))), [])
                  , g = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        var n, a, r, s, c, l;
                        return (0,
                        o.A)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Pe({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Te(), v()]);
                                case 5:
                                    return n = e.sent,
                                    a = (0,
                                    u.A)(n, 1),
                                    "fulfilled" === (r = a[0]).status && (l = null === (s = r.value.data) || void 0 === s ? void 0 : s.boostGroups,
                                    i(l || {}),
                                    f(null !== (c = null === l || void 0 === l ? void 0 : l[_]) && void 0 !== c ? c : [])),
                                    e.abrupt("return", !0);
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    q(e.t0);
                                case 15:
                                    return e.abrupt("return", !1);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 12]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                a.useEffect)((function() {
                    k()
                }
                ), [k]),
                (0,
                Z.jsx)(ym.Provider, {
                    value: {
                        boosts: h,
                        upgradeBoost: g,
                        onChangeTab: function(e) {
                            var t;
                            m(e),
                            f(null !== (t = null === s || void 0 === s ? void 0 : s[e]) && void 0 !== t ? t : [])
                        },
                        activeTabId: _,
                        boostGroups: s
                    },
                    children: t
                })
            }
              , Pm = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === L.DailyBoost
            }
              , Sm = function(e) {
                return "actionType"in e && e.actionType === ye.UnLock
            }
              , Bm = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !Pm(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                g.kW)("ok_game_okxracer_free") : "".concat((0,
                Ut.ZV)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const Im = "index_mainContainer__G1QC-"
              , Wm = "index_sheetIcon__cdTfT"
              , Em = "index_sheetTitle__BnrED"
              , Rm = "index_sheetDesc__DtfoF"
              , Lm = "index_maxLevelText__esnYu"
              , Om = "index_levelArrowRight__MPbSr"
              , Dm = "index_sheetLowerContentContainer__doUtU"
              , Fm = "index_pointCostText__GT5Jc"
              , Um = "index_sheetLvlTextContainer__UWjtN"
              , Vm = "index_btmBtn__6S1L3"
              , Gm = "index_boostDataSplitPoint__IpW+U";
            var Mm = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.context
                  , r = t.curStage
                  , s = t.totalStage
                  , i = t.isLocked
                  , o = a.logo
                  , l = a.name
                  , u = Sm(a)
                  , d = Pm(t)
                  , _ = r === s
                  , m = function(e) {
                    var t = e.context
                      , n = Sm(t)
                      , a = !1
                      , r = t.desc
                      , s = t.btnText;
                    return n && (e.isLocked ? (r = t.unlockDescription,
                    s = t.unlockButtonText) : r = t.ruleDescription,
                    e.curStage === e.totalStage && (a = !0,
                    s = t.activatedButtonText)),
                    {
                        displayDescription: r,
                        displayBtnText: s,
                        btnDisabled: a
                    }
                }(t)
                  , p = m.displayDescription
                  , x = m.displayBtnText
                  , h = m.btnDisabled
                  , f = _ && !d && !u;
                return (0,
                Z.jsxs)("div", {
                    className: Im,
                    children: [(0,
                    Z.jsx)(w.A, {
                        className: Wm,
                        src: "".concat(c.A.cdnBaseUrl).concat(o)
                    }), (0,
                    Z.jsx)("div", {
                        className: Em,
                        children: l
                    }), (0,
                    Z.jsx)("div", {
                        className: Rm,
                        children: p
                    }), f && (0,
                    Z.jsx)("div", {
                        className: Lm,
                        children: (0,
                        g.kW)("ok_game_okxracer_bttmsheet_title_out_of_upgrades")
                    }), !u && (0,
                    Z.jsxs)("div", {
                        className: Dm,
                        children: [(0,
                        Z.jsx)("span", {
                            className: Fm,
                            children: Bm(t)
                        }), (d || r < s) && (0,
                        Z.jsx)("span", {
                            className: Gm
                        }), (0,
                        Z.jsx)("span", {
                            className: Um,
                            children: d ? "".concat(s - r, "/").concat(s) : (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)("span", {
                                    children: (0,
                                    g.kW)("ok_game_okxracer_lvl_num", {
                                        num: (0,
                                        Ut.ZV)(r)
                                    })
                                }), !_ && (0,
                                Z.jsxs)(Z.Fragment, {
                                    children: [(0,
                                    Z.jsx)(b.A, {
                                        iconName: "okds-arrow-pointer-right-xs",
                                        className: Om
                                    }), (0,
                                    Z.jsx)("span", {
                                        children: r + 1
                                    })]
                                })]
                            })
                        })]
                    }), u && i ? (0,
                    Z.jsx)(Rn, {
                        to: Ge.license,
                        className: Vm,
                        children: (0,
                        Z.jsx)(nn, {
                            text: x
                        })
                    }) : (0,
                    Z.jsx)(nn, {
                        className: Vm,
                        onClick: function() {
                            n(t)
                        },
                        text: x,
                        disabled: h
                    })]
                })
            };
            const Zm = "index_item__WVCYh"
              , Hm = "index_boostIcon__b-AgD"
              , Ym = "index_lockedImg__hcZKX"
              , zm = "index_boostTitle__3O4LG"
              , Km = "index_boostData__8p7IB"
              , Xm = "index_pointCost__kbrVo"
              , qm = "index_boostDataStage__Cq2Wk"
              , Jm = "index_boostDataSplitPoint__srkQ2"
              , Qm = "index_locked__kzoiq"
              , $m = "index_filterLayer__K66jH"
              , ep = "index_unlockIcon__bxDY1";
            var tp = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context
                  , i = n === a;
                if (Sm(s)) {
                    if (r)
                        return (0,
                        Z.jsx)("div", {
                            className: Km,
                            children: (0,
                            g.kW)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (i)
                        return (0,
                        Z.jsx)("div", {
                            className: Km,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                Z.jsxs)("div", {
                    className: Km,
                    children: [(0,
                    Z.jsx)("span", {
                        className: Xm,
                        children: Bm(t)
                    }), (Pm(t) || n < a) && (0,
                    Z.jsx)("span", {
                        className: Jm
                    }), (0,
                    Z.jsx)("span", {
                        className: qm,
                        children: Pm(t) ? "".concat(a - n, "/").concat(a) : (0,
                        g.kW)("ok_game_okxracer_lvl_num", {
                            num: n
                        })
                    })]
                })
            }
              , np = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , o = r.logo;
                return (0,
                Z.jsxs)("button", {
                    type: "button",
                    "aria-label": "",
                    className: Zm,
                    onClick: function() {
                        n(a)
                    },
                    children: [s && (0,
                    Z.jsxs)("div", {
                        className: Qm,
                        children: [(0,
                        Z.jsx)("div", {
                            className: $m
                        }), (0,
                        Z.jsx)(b.A, {
                            className: k()("okx-growth-lock", ep)
                        }), (0,
                        Z.jsx)(w.A, {
                            className: k()(Hm, Ym),
                            src: "".concat(c.A.cdnBaseUrl).concat(o)
                        })]
                    }), !s && (0,
                    Z.jsx)(w.A, {
                        className: Hm,
                        src: "".concat(c.A.cdnBaseUrl).concat(o)
                    }), (0,
                    Z.jsxs)("div", {
                        children: [(0,
                        Z.jsx)("div", {
                            className: zm,
                            children: i
                        }), (0,
                        Z.jsx)(tp, {
                            boost: t
                        })]
                    })]
                }, a)
            };
            const ap = "index_taskItemPlaceholder__oZw1l"
              , rp = "index_task__FcEoo";
            var sp = function() {
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: Array.from({
                        length: 4
                    }).map((function(e, t) {
                        return (0,
                        Z.jsx)("div", {
                            className: ap,
                            children: (0,
                            Z.jsx)(ms, {
                                className: rp
                            })
                        }, t)
                    }
                    ))
                })
            };
            const ip = "index_listContainer__tebx+";
            var cp = function(e) {
                var t = e.boosts
                  , n = e.onClick
                  , r = (0,
                a.useCallback)((function(e) {
                    var a = t.find((function(t) {
                        return t.id === e
                    }
                    ));
                    a && n(a)
                }
                ), [t, n]);
                return (0,
                Z.jsx)("div", {
                    className: ip,
                    children: t.length > 0 ? (0,
                    Z.jsx)(Z.Fragment, {
                        children: t.map((function(e) {
                            return (0,
                            Z.jsx)(np, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    Z.jsx)(sp, {})
                })
            };
            const op = "BoostArea_boostArea__gZTfx"
              , lp = "BoostArea_container__EZWGV";
            var up = function(e) {
                var t = e.boosts
                  , n = e.upgradeBoost
                  , r = (0,
                a.useState)()
                  , s = (0,
                u.A)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.A)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , x = qe().points
                  , h = function() {
                    var e = (0,
                    l.A)((0,
                    o.A)().mark((function e(t) {
                        var a, r, s;
                        return (0,
                        o.A)().wrap((function(e) {
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
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(x - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    X(!1, (0,
                                    g.kW)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && X(!0);
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
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , f = (0,
                a.useCallback)((function(e) {
                    p(!0),
                    c(e)
                }
                ), []);
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: (0,
                    Z.jsx)("div", {
                        className: op,
                        children: (0,
                        Z.jsxs)("div", {
                            className: lp,
                            children: [(0,
                            Z.jsx)(cp, {
                                boosts: t,
                                onClick: f
                            }), (0,
                            Z.jsx)(Jt, {
                                noContentPadding: !0,
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                Z.jsx)(Mm, {
                                    boost: i,
                                    onClick: h
                                })
                            })]
                        })
                    })
                })
            };
            const dp = "PointsCard_pointsContainer__n4L96"
              , _p = "PointsCard_pointsNameBigger__1Jh4o"
              , mp = "PointsCard_pointsNameSmaller__9mb7i"
              , pp = "PointsCard_pointsValue__qFFcW"
              , xp = "PointsCard_availablePointsValue__jngSf"
              , hp = "PointsCard_pointsDetails__qk6eJ"
              , fp = "PointsCard_infoIcon__9W3Z-";
            var vp = function() {
                var e = qe()
                  , t = e.points
                  , n = e.autopilotPointsPerHour
                  , a = e.basePoint
                  , r = Gr().matchInfo;
                return (0,
                Z.jsxs)(Qd, {
                    children: [(0,
                    Z.jsxs)("div", {
                        className: dp,
                        children: [(0,
                        Z.jsx)("div", {
                            className: _p,
                            children: (0,
                            g.kW)("ok_game_okxracer_available_pts")
                        }), (0,
                        Z.jsx)("div", {
                            className: xp,
                            children: Vt._u.thousandFormat(t || 0)
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: hp,
                        children: [(0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsxs)("div", {
                                className: mp,
                                children: [(0,
                                g.kW)("ok_game_okxracer_tag_autodriving_points"), (0,
                                Z.jsx)(Jr.A, {
                                    title: (0,
                                    g.kW)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                    type: Jr.A.TYPES.neutral,
                                    children: (0,
                                    Z.jsx)(b.A, {
                                        iconName: "okx-growth-information",
                                        className: fp
                                    })
                                })]
                            }), (0,
                            Z.jsxs)("div", {
                                className: pp,
                                children: [Ct, "\xa0", "".concat(Vt._u.thousandFormat(n || 0), "/hr")]
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsx)("div", {
                                className: mp,
                                children: (0,
                                g.kW)("ok_game_okxracer_tag_base_points")
                            }), (0,
                            Z.jsxs)("div", {
                                className: pp,
                                children: [Ct, "\xa0", Vt._u.thousandFormat(a || 0)]
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsx)("div", {
                                className: mp,
                                children: (0,
                                g.kW)("ok_game_okxracer_tag_defense_points")
                            }), (0,
                            Z.jsxs)("div", {
                                className: pp,
                                children: [wt, "\xa0", Vt._u.thousandFormat((null === r || void 0 === r ? void 0 : r.defensePoint) || 0)]
                            })]
                        })]
                    })]
                })
            };
            const kp = "UpgradesPage_container__H43Ax"
              , gp = "UpgradesPage_cardContainer__AsZoD"
              , jp = "UpgradesPage_block__QlGao"
              , Np = "UpgradesPage_tabList__LgJTP"
              , Ap = "UpgradesPage_activeTab__s2ued"
              , bp = "UpgradesPage_tabPane__nE21p"
              , Cp = "UpgradesPage_tabName__GnRMI";
            var wp = function() {
                var e = (0,
                a.useContext)(ym)
                  , t = e.boosts
                  , n = e.upgradeBoost
                  , r = e.onChangeTab
                  , s = e.activeTabId
                  , i = e.boostGroups;
                hs();
                var c = (0,
                a.useMemo)((function() {
                    return [{
                        title: (0,
                        g.kW)("ok_game_okxracer_racer_upgrades"),
                        key: O
                    }, {
                        title: (0,
                        g.kW)("ok_game_okxracer_race_car_upgrades"),
                        key: D
                    }, {
                        title: (0,
                        g.kW)("ok_game_okxracer_team_ops_upgrades"),
                        key: F
                    }]
                }
                ), []).filter((function(e) {
                    var t;
                    return Boolean(null === i || void 0 === i || null === (t = i[e.key]) || void 0 === t ? void 0 : t.length)
                }
                ));
                return (0,
                Z.jsxs)("div", {
                    className: kp,
                    children: [(0,
                    Z.jsx)("div", {
                        className: gp,
                        children: (0,
                        Z.jsx)(vp, {})
                    }), (0,
                    Z.jsxs)("div", {
                        className: jp,
                        children: [(0,
                        Z.jsx)(Rl.A.Underline, {
                            size: Rl.A.SIZE.xl,
                            headerClassName: Np,
                            activeClassName: Ap,
                            activeId: s,
                            children: c.map((function(e) {
                                var t = e.title
                                  , n = e.key;
                                return (0,
                                Z.jsx)(Rl.A.TabPane, {
                                    className: bp,
                                    tab: (0,
                                    Z.jsx)("div", {
                                        className: Cp,
                                        children: t
                                    }),
                                    id: n,
                                    onClick: function() {
                                        r(n)
                                    }
                                }, n)
                            }
                            ))
                        }), (0,
                        Z.jsx)(up, {
                            boosts: t,
                            upgradeBoost: n
                        })]
                    })]
                })
            }
              , yp = function() {
                return (0,
                Z.jsx)(Tm, {
                    children: (0,
                    Z.jsx)(wp, {})
                })
            }
              , Tp = function() {
                var e = (0,
                a.useState)()
                  , t = (0,
                u.A)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , i = (0,
                a.useMemo)(h, [])
                  , x = c.A.locale;
                (0,
                a.useMemo)((function() {
                    p.A.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var f = function() {
                    var e = z().uid;
                    return (0,
                    a.useEffect)((function() {
                        var e, t, n, a, r, s, i, c, o, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (a = window.Telegram.WebApp).ready) || void 0 === n || n.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (c = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(c, "#0D0D0D"),
                        null === (o = (l = window.Telegram.WebApp).expand) || void 0 === o || o.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d),
                        B.v.info("TG MINI APP OKX Racer version: ".concat(window.Telegram.WebApp.version, " "), {
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
                        l.A)((0,
                        o.A)().mark((function e() {
                            var t;
                            return (0,
                            o.A)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        _.V)(i);
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
                Z.jsx)("main", {
                    className: Qc,
                    children: (0,
                    Z.jsx)(m.A, {
                        localeData: n,
                        fetchConfig: i,
                        children: f ? (0,
                        Z.jsx)(Z.Fragment, {
                            children: (0,
                            Z.jsx)(Mr, {
                                children: (0,
                                Z.jsx)(Ws, {
                                    children: (0,
                                    Z.jsx)(tt, {
                                        children: (0,
                                        Z.jsx)(Je, {
                                            children: (0,
                                            Z.jsx)(rt, {
                                                children: (0,
                                                Z.jsx)(fr, {
                                                    children: (0,
                                                    Z.jsx)(d.OKXTonConnectUIProvider, {
                                                        uiPreferences: {
                                                            theme: d.THEME.DARK
                                                        },
                                                        dappMetaData: {
                                                            name: "OKX Racer",
                                                            icon: V()
                                                        },
                                                        restoreConnection: !0,
                                                        language: x,
                                                        actionsConfiguration: {
                                                            returnStrategy: "tg://resolve"
                                                        },
                                                        children: (0,
                                                        Z.jsxs)(s.Switch, {
                                                            children: [(0,
                                                            Z.jsx)(s.Route, {
                                                                path: Ge.teamDetail,
                                                                children: (0,
                                                                Z.jsxs)(s.Switch, {
                                                                    children: [(0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: Ge.teamMembers,
                                                                        component: ao(Cm, to)
                                                                    }), (0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: Ge.teamDetail,
                                                                        component: ao(wi, to)
                                                                    })]
                                                                })
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: Ge.teamList,
                                                                exact: !0,
                                                                component: ao(Gi, to)
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: Ge.referrals,
                                                                component: ao(M_),
                                                                exact: !0
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: Ge.upgrades,
                                                                component: ao(yp)
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: Ge.battleTeams,
                                                                children: (0,
                                                                Z.jsxs)(s.Switch, {
                                                                    children: [(0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: Ge.battleTeamMembers,
                                                                        component: ao(Co)
                                                                    }), (0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: Ge.battleTeams,
                                                                        component: ao(Lo)
                                                                    })]
                                                                })
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: Ge.battle,
                                                                exact: !0,
                                                                children: (0,
                                                                Z.jsx)(pt, {
                                                                    children: (0,
                                                                    Z.jsx)(Xr, {})
                                                                })
                                                            }), (0,
                                                            Z.jsxs)(s.Route, {
                                                                path: Ge.home,
                                                                children: [(0,
                                                                Z.jsx)("article", {
                                                                    className: eo,
                                                                    children: (0,
                                                                    Z.jsxs)(s.Switch, {
                                                                        children: [(0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: Ge.home,
                                                                            component: El,
                                                                            exact: !0
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: Ge.leaderboard,
                                                                            component: ao(Nu),
                                                                            exact: !0
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: Ge.tasks,
                                                                            component: gm
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: Ge.license,
                                                                            children: (0,
                                                                            Z.jsx)(Jc, {
                                                                                children: (0,
                                                                                Z.jsx)(h_, {})
                                                                            })
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: Ge.teamRace,
                                                                            component: ao(Xc)
                                                                        })]
                                                                    })
                                                                }), (0,
                                                                Z.jsx)("footer", {
                                                                    className: $c,
                                                                    children: (0,
                                                                    Z.jsx)(Dn, {})
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        Z.jsx)(j_, {})
                    })
                })
            }
              , Pp = document.getElementById("root");
            if (Pp) {
                var Sp = (0,
                Z.jsx)(s.BrowserRouter, {
                    basename: c.A.langPath,
                    children: (0,
                    Z.jsx)(K, {
                        children: (0,
                        Z.jsx)(Tp, {})
                    })
                });
                (0,
                i.createRoot)(Pp).render(Sp)
            }
        }
        ,
        41594: e => {
            "use strict";
            e.exports = React
        }
        ,
        75206: e => {
            "use strict";
            e.exports = ReactDOM
        }
        ,
        51985: () => {}
        ,
        99432: () => {}
        ,
        50477: () => {}
        ,
        66443: () => {}
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
                    for (var [a,r,s] = e[u], c = !0, o = 0; o < a.length; o++)
                        (!1 & s || i >= s) && Object.keys(n.O).every((e => n.O[e](a[o]))) ? a.splice(o--, 1) : (c = !1,
                        s < i && (i = s));
                    if (c) {
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
            for (var c = 2 & r && a; "object" == typeof c && !~e.indexOf(c); c = t(c))
                Object.getOwnPropertyNames(c).forEach((e => i[e] = () => a[e]));
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
    n.u = e => "common/" + e + ".37fc10ac.js",
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
                var c, o;
                if (void 0 !== s)
                    for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                        var d = l[u];
                        if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == t + s) {
                            c = d;
                            break
                        }
                    }
                c || (o = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                n.nc && c.setAttribute("nonce", n.nc),
                c.setAttribute("data-webpack", t + s),
                c.src = a),
                e[a] = [r];
                var _ = (t, n) => {
                    c.onerror = c.onload = null,
                    clearTimeout(m);
                    var r = e[a];
                    if (delete e[a],
                    c.parentNode && c.parentNode.removeChild(c),
                    r && r.forEach((e => e(n))),
                    t)
                        return t(n)
                }
                  , m = setTimeout(_.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = _.bind(null, c.onerror),
                c.onload = _.bind(null, c.onload),
                o && document.head.appendChild(c)
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
                      , c = (e, t, n, a, c, o) => {
                        try {
                            var l = e(t, n);
                            if (!l || !l.then)
                                return c(l, a, o);
                            var u = l.then((e => c(e, a)), i);
                            if (!o)
                                return u;
                            r.push(s.p = u)
                        } catch (d) {
                            i(d)
                        }
                    }
                      , o = (e, t, n) => c(t.get, s[1], a, 0, l, n)
                      , l = t => {
                        s.p = 1,
                        n.m[e] = e => {
                            e.exports = t()
                        }
                    }
                    ;
                    c(n, s[2], 0, 0, ( (e, t, a) => e ? c(n.I, s[0], 0, e, o, a) : i()), 1)
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
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src),
        !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
                for (var r = a.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); )
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
            1392: 0,
            7195: 0,
            3305: 0,
            4173: 0
        };
        n.f.j = (t, a) => {
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (/^(3305|4173|7195)$/.test(t))
                    e[t] = 0;
                else {
                    var s = new Promise(( (n, a) => r = e[t] = [n, a]));
                    a.push(r[2] = s);
                    var i = n.p + n.u(t)
                      , c = new Error;
                    n.l(i, (a => {
                        if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var s = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")",
                            c.name = "ChunkLoadError",
                            c.type = s,
                            c.request = i,
                            r[1](c)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        n.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var r, s, [i,c,o] = a, l = 0;
            if (i.some((t => 0 !== e[t]))) {
                for (r in c)
                    n.o(c, r) && (n.m[r] = c[r]);
                if (o)
                    var u = o(n)
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
    var a = n.O(void 0, [6219, 7195, 3305, 8276, 5796, 5503, 4340, 3599, 1406, 9465, 3192, 2300, 4173, 2529], ( () => n(41772)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.90d01fe2.js.map
