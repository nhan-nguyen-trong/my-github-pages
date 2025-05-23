( () => {
    var e = {
        61895: (e, t, n) => {
            "use strict";
            var a = n(41594)
              , r = n.n(a);
            const s = ReactRouterDOM;
            n(29068);
            var i = n(75206)
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
              , A = (n(86746),
            n(62674),
            n(56609))
              , b = n(20376)
              , C = (n(99559),
            n(11694),
            n(89379))
              , w = n(71615)
              , y = (n(58704),
            {
                act: function(e) {
                    console.error("[monitor.js][act][".concat(null === e || void 0 === e ? void 0 : e.action, "] monitor not init yet "))
                },
                triggerReportDuration: function() {}
            });
            if ("undefined" !== typeof window)
                try {
                    y = window.utils.monitor.newInstance({
                        product: "growth_tools",
                        commonParams: {}
                    })
                } catch (Pp) {
                    console.error("[monitor.js][newInstance] monitor error", Pp)
                }
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
              , Z = n(19919)
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
              , ee = B.v
              , te = {
                project: {
                    id: 16,
                    token: "a602240cd7b14006850cf55b82b1f367"
                }
            }
              , ne = (0,
            C.A)((0,
            C.A)({}, B.v), {}, {
                error: function(e, t) {
                    ee.error(e, (0,
                    C.A)((0,
                    C.A)({}, t), {}, {
                        customConfig: te
                    }))
                },
                warn: function(e, t) {
                    ee.warn(e, (0,
                    C.A)((0,
                    C.A)({}, t), {}, {
                        customConfig: te
                    }))
                }
            })
              , ae = function(e) {
                var t = (e || {}).data;
                return t && 0 === Number(t.code) ? Promise.resolve(t) : Promise.reject(t)
            }
              , re = function(e) {
                return function(t) {
                    if (!(0,
                    J.f)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        ne.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                    }
                    return Promise.reject(t)
                }
            }
              , se = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().get(t, n).then(ae, re(t)));
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
              , ie = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().getWithCache(t, n).then(ae, re(t)));
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
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().post(t, n, a).then(ae, re(t)));
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
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().put(t, n, a).then(ae, re(t)));
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
              , le = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t, n) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().delete(t, n).then(ae, re(t)));
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
              , ue = function() {
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
                                e.abrupt("return", ce(t, r, a));
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
            const de = {
                get: se,
                getWithCache: ie,
                post: ce,
                put: oe,
                postForm: ue,
                delete: le
            };
            var _e = n(23029)
              , me = n(92901)
              , pe = function() {
                function e() {
                    (0,
                    _e.A)(this, e),
                    this.store = void 0,
                    this.store = new Map
                }
                return (0,
                me.A)(e, [{
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
            pe.instance = void 0;
            const xe = pe.getInstance();
            function he(e, t) {
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
                                    !xe.hasItem(s) || xe.isItemExpired(s, t)) {
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
            function ve(e, t, n) {
                return ke.apply(this, arguments)
            }
            function ke() {
                return (ke = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                de.get(t, (0,
                                C.A)((0,
                                C.A)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": fe()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                xe.setItem(n, r),
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
            function ge(e, t, n) {
                return je.apply(this, arguments)
            }
            function je() {
                return (je = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !xe.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = xe.getItem(r),
                                ve(t, r, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", ve(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Ne(e, t, n) {
                return Ae.apply(this, arguments)
            }
            function Ae() {
                return (Ae = (0,
                l.A)((0,
                o.A)().mark((function e(t, n, a) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de.post(t, n, (0,
                                C.A)((0,
                                C.A)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": fe()
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
            var be = "/priapi/v1/affiliate"
              , Ce = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/info"), t));
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
              , we = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/assess"), t));
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
                                ge("".concat(be, "/game/racer/invitee-list"), {
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
              , Te = function() {
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
                                n = he(ge, 1e4),
                                e.next = 4,
                                n("".concat(be, "/game/racer/leaderboard/friends"), {
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
              , Pe = function() {
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
                                n = he(ge, 3e5),
                                e.next = 4,
                                n("".concat(be, "/game/racer/leaderboard/global"), {
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
              , Se = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e[e.ConnectEVMChain = 6] = "ConnectEVMChain",
                e
            }({})
              , Be = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ge("".concat(be, "/game/racer/group-boosts"), {}, t));
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
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/boost"), t));
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
              , We = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ge("".concat(be, "/game/racer/group-tasks"), {}, t));
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
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/task"), t));
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
              , Re = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/task-context"), t));
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
              , Le = function(e) {
                return e[e.NotStarted = 0] = "NotStarted",
                e[e.InProgress = 1] = "InProgress",
                e[e.Ended = 2] = "Ended",
                e
            }({})
              , Oe = function() {
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
                                Ne("".concat(be, "/game/racer/account-binding"), t);
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
              , De = function() {
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
                                ge("".concat(be, "/game/racer/campaigns"), {}, t);
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
                l.A)((0,
                o.A)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", ge("".concat(be, "/game/racer/airdrop/tasks"), {}, t));
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
              , Ue = function() {
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
                                e.abrupt("return", ge("".concat(be, "/game/racer/match/teams/info"), {}, t));
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
              , Ve = function() {
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
                                e.abrupt("return", ge("".concat(be, "/game/racer/match/info"), {}, t));
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
              , Ge = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/match/teams/join"), {
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
              , Me = function() {
                var e = (0,
                l.A)((0,
                o.A)().mark((function e(t) {
                    return (0,
                    o.A)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(be, "/game/racer/match/teams/leave"), {
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
              , Ze = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return ge("".concat(be, "/game/racer/opponents"), {
                    params: {
                        teamId: e
                    }
                }, t)
            }
              , He = {
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
                upgrades: "/mini-app/racer/upgrades",
                battleTeams: "/mini-app/racer/battle-teams",
                battleTeamMembers: "/mini-app/racer/battle-teams/:id/members",
                battle: "/mini-app/racer/battle"
            }
              , Ye = n(63129);
            function ze(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var Ke = {
                Friends: ze(Te, {
                    pageNo: 1
                }),
                Boost: ze(Be, !0),
                Task: ze(We, !0),
                Invitee: ze(ye, {
                    pageNo: 1
                }, !0),
                Global: ze(Pe, {
                    pageNo: 1
                }),
                Teams: ze(Ue, !0)
            }
              , Xe = ["Friends", "Boost", "Task", "Invitee", "Global", "Teams"]
              , qe = function() {
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
                                    var t = Math.floor(1e3 * Ye.o.mathRandom()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                n && Ke[n] && (a = Ke[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && B.v.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                qe(t);
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
            function Je() {
                qe(Xe).catch((function(e) {
                    e instanceof Error && B.v.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Qe = (0,
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
              , $e = function() {
                return (0,
                a.useContext)(Qe)
            }
              , et = function(e) {
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
                  , Ne = (0,
                a.useState)(!1)
                  , Ae = (0,
                u.A)(Ne, 2)
                  , be = Ae[0]
                  , we = Ae[1]
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
                                Ce({
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
                        pathname: He.teamDetail.replace(":id", Ie),
                        hash: Re.hash
                    })
                }
                ), []),
                (0,
                a.useEffect)((function() {
                    We().then(Je).catch((function(e) {
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
                  , Ge = (0,
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
                        isShowActivityDetails: be,
                        toggleActivityDetailsBottomSheet: Ve,
                        context: H,
                        basePoint: f,
                        autopilotPointsPerHour: N
                    }
                }
                ), [J, i, m, w, S, re, Le, U, Oe, oe, _e, De, Pe, Fe, he, Ue, ge, be, Ve, H, f, N]);
                return (0,
                Z.jsx)(Qe.Provider, {
                    value: Ge,
                    children: t
                })
            }
              , tt = n(10954)
              , nt = new (function() {
                return (0,
                me.A)((function e() {
                    var t = this;
                    (0,
                    _e.A)(this, e),
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
                    this.connection = new tt.A({
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
              , at = (0,
            a.createContext)(nt)
              , rt = function(e) {
                var t = e.children;
                return (0,
                Z.jsx)(at.Provider, {
                    value: nt,
                    children: t
                })
            }
              , st = (0,
            a.createContext)(null)
              , it = function() {
                return (0,
                a.useContext)(st)
            }
              , ct = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.A)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useContext)(at);
                return (0,
                a.useEffect)((function() {
                    c.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [c]),
                (0,
                Z.jsx)(st.Provider, {
                    value: s,
                    children: t
                })
            }
              , ot = n(63010)
              , lt = "racer"
              , ut = function() {
                var e;
                if (!(0,
                J.f)())
                    return ot.A.getInstance(lt) || ot.A.init({
                        project: lt
                    }),
                    null !== (e = ot.A.getInstance(lt)) && void 0 !== e ? e : ot.A
            }
              , dt = "guessRecords_new";
            function _t(e) {
                var t = ut().get(dt) || [];
                t.unshift(e),
                ut().set(dt, t.slice(0, 5))
            }
            var mt = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , pt = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: mt.NONE,
                multiplier: 1,
                basePoints: 10,
                wonPoints: 10,
                predict: mt.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , xt = (0,
            a.createContext)(pt)
              , ht = function() {
                return (0,
                a.useContext)(xt)
            }
              , ft = function(e) {
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
                a.useState)(mt.NONE)
                  , C = (0,
                u.A)(b, 2)
                  , w = C[0]
                  , y = C[1]
                  , P = it()
                  , S = $e().updateGameInfo
                  , B = (0,
                a.useRef)(mt.NONE)
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
                                t = B.current === mt.UP ? 1 : 0,
                                e.next = 4,
                                we({
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
                                _t({
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
                                B.current = mt.NONE,
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
                            y(P === f ? mt.NONE : e ? mt.UP : mt.DOWN)
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
                    e === mt.UP && function() {
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
                    e === mt.DOWN && function() {
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
                Z.jsx)(xt.Provider, {
                    value: U,
                    children: t
                })
            };
            const vt = "BackgroundVideo_staticImage__UuLtJ"
              , kt = "BackgroundVideo_video__ucncy"
              , gt = "BackgroundVideo_hide__hjiji";
            var jt = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png"
              , Nt = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }]
              , At = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }]
              , bt = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.A.cdnBaseUrl).concat(jt)
            }
              , Ct = function(e) {
                var t = e.muted
                  , n = ht().isPending
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
                        className: k()(vt, (0,
                        f.A)({}, gt, !N)),
                        src: "".concat(c.A.cdnBaseUrl).concat(jt)
                    }), (0,
                    Z.jsx)("video", (0,
                    C.A)((0,
                    C.A)({}, bt), {}, {
                        className: k()(kt, (0,
                        f.A)({}, gt, !A)),
                        ref: s,
                        loop: !0,
                        muted: !0,
                        children: Nt.map((function(e) {
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
                    C.A)({}, bt), {}, {
                        className: k()((0,
                        f.A)({}, gt, !b)),
                        ref: r,
                        muted: t,
                        children: At.map((function(e) {
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
              , wt = n(47915)
              , yt = (n(64298),
            2e3)
              , Tt = 500
              , Pt = "\ud83c\udfc1"
              , St = "\ud83d\udee1\ufe0f"
              , Bt = "\u2694\ufe0f"
              , It = "/cdn/assets/imgs/2412/E3873481ECAC30A3.svg";
            const Wt = "ButtonContainer_instructions__M6jR8"
              , Et = "ButtonContainer_hide__3sPag"
              , Rt = "ButtonContainer_btnContainer__gg3An"
              , Lt = "ButtonContainer_btn__qj2Yv"
              , Ot = "ButtonContainer_pressed__dTgH5"
              , Dt = "ButtonContainer_up__MF+PR"
              , Ft = "ButtonContainer_down__PqrYX"
              , Ut = "ButtonContainer_arrow__6fnZb";
            var Vt, Gt, Mt = function(e) {
                var t = e.style
                  , n = ht()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , c = $e().numChances
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
                    s || d || (_(e === mt.UP ? mt.DOWN : mt.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = c <= 0;
                return (0,
                Z.jsxs)("div", {
                    style: t,
                    children: [(0,
                    Z.jsx)("p", {
                        className: k()(Wt, s && Et),
                        children: (0,
                        g.kW)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    Z.jsxs)("div", {
                        className: Rt,
                        children: [(0,
                        Z.jsxs)(wt.A, {
                            disabled: p || d === mt.UP,
                            onClick: function() {
                                return m(mt.UP)
                            },
                            className: k()(Lt, Dt, (0,
                            f.A)({}, Ot, i === mt.UP)),
                            children: [(0,
                            Z.jsx)(b.A, {
                                iconName: "okx-growth-up-new",
                                className: Ut
                            }), (0,
                            g.kW)("ok_game_okxracer_prompt_price_up")]
                        }), (0,
                        Z.jsxs)(wt.A, {
                            disabled: p || d === mt.DOWN,
                            onClick: function() {
                                return m(mt.DOWN)
                            },
                            className: k()(Lt, Ft, (0,
                            f.A)({}, Ot, i === mt.DOWN)),
                            children: [(0,
                            Z.jsx)(b.A, {
                                iconName: "okx-growth-down-new",
                                className: Ut
                            }), (0,
                            g.kW)("ok_game_okxracer_prompt_price_down")]
                        })]
                    })]
                })
            }, Zt = n(4962), Ht = n(14636), Yt = n(53986), zt = ["title", "titleId"];
            function Kt() {
                return Kt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Kt.apply(null, arguments)
            }
            function Xt(e, t) {
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
                }(e, zt);
                return a.createElement("svg", Kt({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Vt || (Vt = a.createElement("path", {
                    d: "M0.203125 0.847946H3.21169L6.39055 10.6497L9.6451 0.847946H12.578L8.09351 14.0935H4.70651L0.203125 0.847946Z",
                    fill: "currentColor"
                })), Gt || (Gt = a.createElement("path", {
                    d: "M14.6885 19.2332C11.3204 19.2332 9.22009 17.4545 9.20117 14.7675H11.9827C12.0773 16.0921 13.0991 16.9815 14.7263 16.9815C16.0319 16.9815 16.997 16.4138 16.997 15.3731C16.997 14.2566 15.9184 14.0296 13.7046 13.5944C11.4718 13.1592 9.50392 12.459 9.50392 9.77207C9.50392 7.4257 11.4529 5.76054 14.4425 5.76054C17.5646 5.76054 19.5514 7.38786 19.5892 9.92344H16.8077C16.6753 8.80703 15.8427 8.03122 14.4425 8.03122C13.2315 8.03122 12.3611 8.54212 12.3611 9.56392C12.3611 10.6425 13.4018 10.8696 15.5967 11.2858C17.8674 11.7021 19.8541 12.4212 19.8541 15.0514C19.8541 17.5302 17.7917 19.2332 14.6885 19.2332Z",
                    fill: "currentColor"
                })))
            }
            var qt = a.forwardRef(Xt);
            n.p;
            var Jt = n(41022)
              , Qt = (n(60611),
            n(44273));
            n(26202);
            const $t = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var en = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: $t.closeBtn,
                closeIconClassName: $t.closeIcon
            }
              , tn = function(e) {
                return (0,
                Z.jsx)(Qt.default, (0,
                C.A)((0,
                C.A)({}, en), {}, {
                    topContent: e.title ? void 0 : (0,
                    Z.jsx)("div", {
                        className: $t.topPadding
                    }),
                    zIndex: 999
                }, e))
            }
              , nn = function(e) {
                var t = Qt.default.show((0,
                C.A)((0,
                C.A)({}, en), {}, {
                    topContent: e.title ? void 0 : (0,
                    Z.jsx)("div", {
                        className: $t.topPadding
                    }),
                    onClose: function() {
                        t.destroy()
                    }
                }, e));
                return t
            };
            const an = "PrimaryButton_button__SJFHA"
              , rn = "PrimaryButton_buttonText__19AJ7";
            var sn = ["text", "className"]
              , cn = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                Yt.A)(e, sn);
                return (0,
                Z.jsx)(A.default, (0,
                C.A)((0,
                C.A)({
                    category: A.default.CATEGORY.fill,
                    type: A.default.TYPE.primary,
                    size: A.default.SIZE.lg,
                    className: k()(an, n),
                    contentClassName: rn
                }, a), {}, {
                    children: t
                }))
            };
            const on = "Timer_timer__j+KcR"
              , ln = "Timer_show__GFyz+"
              , un = "Timer_label__nxjo+"
              , dn = "Timer_separator__CFi1G"
              , _n = "Timer_timerValue__CaRO2";
            var mn = function(e) {
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
                    className: k()(on, (0,
                    f.A)({}, ln, c)),
                    children: [n && (0,
                    Z.jsx)("span", {
                        className: un,
                        children: n
                    }), Number(null === c || void 0 === c ? void 0 : c.day) > 0 && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("span", {
                            className: _n,
                            children: null === c || void 0 === c ? void 0 : c.day
                        }), (0,
                        Z.jsx)("span", {
                            className: dn,
                            children: ":"
                        })]
                    }), (0,
                    Z.jsx)("span", {
                        className: _n,
                        children: null === c || void 0 === c ? void 0 : c.hour
                    }), (0,
                    Z.jsx)("span", {
                        className: dn,
                        children: ":"
                    }), (0,
                    Z.jsx)("span", {
                        className: _n,
                        children: null === c || void 0 === c ? void 0 : c.minute
                    }), (0,
                    Z.jsx)("span", {
                        className: dn,
                        children: ":"
                    }), (0,
                    Z.jsx)("span", {
                        className: _n,
                        children: null === c || void 0 === c ? void 0 : c.second
                    })]
                })
            };
            const pn = "EventPopover_eventPopoverWrapper__65bP-"
              , xn = "EventPopover_eventPopover__B0CAq"
              , hn = "EventPopover_eventPopoverDesc__+lNFw"
              , fn = "EventPopover_eventPopoverBtn__BKIwS"
              , vn = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , kn = "EventPopover_eventPopoverArrow__M+sYF"
              , gn = "EventPopover_eventDetailsContainer__G1KfS"
              , jn = "EventPopover_title__Tie4q"
              , Nn = "EventPopover_description__tVAy9"
              , An = "EventPopover_disclaimer__jFZC3"
              , bn = "EventPopover_continueBtn__S2Sj-"
              , Cn = "EventPopover_eventDetails__5xDB0"
              , wn = "EventPopover_eventImg__0yapf";
            var yn = function(e) {
                var t = e.children
                  , n = $e()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)(Jt.A, {
                        zIndex: 998,
                        layerClassName: pn,
                        popperClassName: xn,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: hn,
                        description: (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(A.default, {
                                className: fn,
                                type: A.default.TYPE.primary,
                                category: A.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                Z.jsx)(b.A, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: vn
                                }),
                                iconType: A.default.ICON_POSITION.tailing,
                                children: (0,
                                g.kW)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            Z.jsx)("svg", {
                                className: kn,
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
                    Z.jsx)(tn, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        Z.jsxs)("div", {
                            className: gn,
                            children: [(0,
                            Z.jsxs)("div", {
                                className: Cn,
                                children: [(0,
                                Z.jsx)(w.A, {
                                    pictureClassName: wn,
                                    className: wn,
                                    src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                Z.jsx)("h2", {
                                    className: jn,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                Z.jsx)("p", {
                                    className: Nn,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                Z.jsx)(mn, {
                                    endTime: i,
                                    label: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                Z.jsx)("p", {
                                    className: An,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            Z.jsx)(cn, {
                                className: bn,
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
            const Tn = "Navbar_navbar__LF3-M"
              , Pn = "Navbar_link__qX0Sf"
              , Sn = "Navbar_active__TCbF8"
              , Bn = "Navbar_linkIcon__GtH54"
              , In = "Navbar_linkText__Szxi-"
              , Wn = "Navbar_newIndicator__IrNNw"
              , En = "Navbar_teamLink__f6QDM"
              , Rn = "Navbar_borderBox__qrzy1"
              , Ln = "Navbar_container__KynEL";
            var On = ["children", "className"]
              , Dn = ["iconName", "label", "onClick", "showNewIndicator"]
              , Fn = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                Yt.A)(e, On)
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
              , Un = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , c = (0,
                Yt.A)(e, Dn)
                  , o = (0,
                s.useRouteMatch)({
                    path: c.to,
                    exact: c.to === He.home
                });
                return (0,
                Z.jsxs)(Fn, {
                    className: k()(Pn, o && Sn),
                    to: c.to,
                    onClick: a,
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: t,
                        className: Bn
                    }), i && (0,
                    Z.jsx)("span", {
                        className: Wn
                    }), (0,
                    Z.jsx)("span", {
                        className: In,
                        children: n
                    })]
                })
            }
              , Vn = function() {
                var e = (0,
                s.useRouteMatch)({
                    path: He.teamRace
                });
                return (0,
                Z.jsxs)(Fn, {
                    className: k()(Pn, En, e && Sn),
                    to: He.teamRace,
                    children: [(0,
                    Z.jsx)("div", {
                        className: Rn,
                        children: (0,
                        Z.jsx)("div", {
                            className: Ln,
                            children: (0,
                            Z.jsx)(qt, {
                                className: Bn
                            })
                        })
                    }), (0,
                    Z.jsx)("span", {
                        className: In,
                        children: (0,
                        g.kW)("ok_game_okxracer_tab_teams")
                    })]
                })
            }
              , Gn = function() {
                var e = {
                    telegramid: z().uid
                };
                return (0,
                Z.jsxs)("nav", {
                    className: Tn,
                    children: [(0,
                    Z.jsx)(yn, {
                        children: (0,
                        Z.jsx)(Un, {
                            iconName: "okx-growth-home",
                            to: He.home,
                            label: (0,
                            g.kW)("ok_game_okxracer_home")
                        })
                    }), (0,
                    Z.jsx)(Un, {
                        iconName: "okx-growth-leaderboard",
                        to: He.leaderboard,
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
                    Z.jsx)(Vn, {}), (0,
                    Z.jsx)(Un, {
                        iconName: "okx-growth-task-new",
                        to: He.tasks,
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
                    Z.jsx)(Un, {
                        iconName: "okx-growth-surprises",
                        to: He.license,
                        label: (0,
                        g.kW)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            };
            const Mn = "RefuelTimer_container__cqcvg"
              , Zn = "RefuelTimer_description__ekV6H"
              , Hn = "RefuelTimer_countdown__arVcO"
              , Yn = "RefuelTimer_timer__d-KfJ"
              , zn = "RefuelTimer_square__tf6kF"
              , Kn = "RefuelTimer_upgradesLink__djl5r"
              , Xn = "RefuelTimer_hide__8ItGA";
            var qn, Jn = function(e) {
                var t = e.className
                  , n = e.showUpgrades
                  , a = void 0 === n || n
                  , r = $e().countdownDisplay;
                return (0,
                Z.jsx)("div", {
                    className: k()(t, Mn, (0,
                    f.A)({}, Xn, !r && !a)),
                    children: (0,
                    Z.jsxs)("p", {
                        className: Zn,
                        children: [r && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)("span", {
                                className: Hn,
                                children: (0,
                                g.Vp)("ok_game_okxracer_nx_refill_time", {
                                    countDown: (0,
                                    Z.jsxs)("span", {
                                        className: Yn,
                                        children: ["\xa0", r]
                                    })
                                })
                            }), a && (0,
                            Z.jsx)("span", {
                                className: zn
                            })]
                        }), a && (0,
                        Z.jsxs)(Fn, {
                            to: He.upgrades,
                            className: Kn,
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
            }, Qn = ["title", "titleId"];
            function $n() {
                return $n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                $n.apply(null, arguments)
            }
            function ea(e, t) {
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
                }(e, Qn);
                return a.createElement("svg", $n({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, qn || (qn = a.createElement("g", {
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
            var ta = a.forwardRef(ea);
            n.p;
            var na = n(5485);
            n(8653);
            const aa = "FuelIndicator_fuelContainer__Pgx04"
              , ra = "FuelIndicator_line__wHfpC"
              , sa = "FuelIndicator_description__7OoNR"
              , ia = "FuelIndicator_fuelIcon__UND6Y"
              , ca = "FuelIndicator_maxChances__DFhp2";
            var oa = function(e) {
                var t = e.className
                  , n = $e()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                Z.jsxs)("div", {
                    className: k()(t, aa),
                    children: [(0,
                    Z.jsx)("span", {
                        className: ia,
                        children: "\u26fd\ufe0f"
                    }), (0,
                    Z.jsx)(na.A.Line, {
                        className: ra,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r), (0,
                    Z.jsxs)("p", {
                        className: sa,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: ["/\xa0", (0,
                            Z.jsx)("span", {
                                className: ca,
                                children: r
                            })]
                        })]
                    })]
                })
            };
            const la = "CoinPrice_raceTrack__VGN58"
              , ua = "CoinPrice_run__3doXi"
              , da = "CoinPrice_coinPriceContainer__52NRe"
              , _a = "CoinPrice_content__ucR5w"
              , ma = "CoinPrice_fuelIndicator__q2PVS"
              , pa = "CoinPrice_refuelTimer__jlruk"
              , xa = "CoinPrice_hide__aRbk4"
              , ha = "CoinPrice_label__xAjUS"
              , fa = "CoinPrice_value__IgHRV"
              , va = "CoinPrice_slotMachine__7KR-o";
            function ka(e) {
                return (Math.abs(e) < 1e-4 ? Ht._u.ceilTruncate : Ht._u.floorTruncate)(e, 4)
            }
            const ga = "SlotMachine_row__PUR54"
              , ja = "SlotMachine_animate__ApX0l"
              , Na = "SlotMachine_column__r2YRj"
              , Aa = "SlotMachine_arrows__58P0s"
              , ba = "SlotMachine_columnContainer__ZCIlv"
              , Ca = "SlotMachine_background__djzFS"
              , wa = "SlotMachine_slot__lr-ST"
              , ya = "SlotMachine_staticColumn__LoOST"
              , Ta = "SlotMachine_sm__QUnyw"
              , Pa = "SlotMachine_arrow__20R44"
              , Sa = "SlotMachine_wentUp__h05Ms"
              , Ba = "SlotMachine_down__9RjGw"
              , Ia = "SlotMachine_stable__5Lllg"
              , Wa = "SlotMachine_wentDown__sWswA"
              , Ea = "SlotMachine_up__Ae8lR";
            var Ra = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                Z.jsxs)("div", {
                    className: ba,
                    children: [(0,
                    Z.jsx)("div", {
                        className: Ca
                    }), (0,
                    Z.jsxs)("div", {
                        className: Na,
                        style: r,
                        children: [(0,
                        Z.jsx)("p", {
                            className: wa,
                            children: a
                        }), t && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "1"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "2"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "3"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "4"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "5"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "6"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "7"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "8"
                            }), (0,
                            Z.jsx)("p", {
                                className: wa,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , La = function() {
                var e = ht()
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
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? mt.UP : 0 === e ? mt.NONE : mt.DOWN),
                    c(String(Math.abs(Number(ka(t)))).split("").filter((function(e) {
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
                    className: k()(ga, x && ja),
                    children: [(0,
                    Z.jsx)("div", {
                        className: ba,
                        children: (0,
                        Z.jsxs)("div", {
                            className: k()(Aa, (0,
                            f.A)((0,
                            f.A)((0,
                            f.A)({}, Sa, d === mt.UP), Wa, d === mt.DOWN), Ia, d === mt.NONE)),
                            children: [(0,
                            Z.jsx)(b.A, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: k()(Pa, Ea)
                            }), (0,
                            Z.jsx)(b.A, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: k()(Pa, Ia)
                            }), (0,
                            Z.jsx)(b.A, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: k()(Pa, Ba)
                            })]
                        })
                    }), (0,
                    Z.jsx)(Ra, {
                        animate: x,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    Z.jsx)("span", {
                        className: ya,
                        children: "."
                    }), (0,
                    Z.jsx)(Ra, {
                        animate: x,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    Z.jsx)(Ra, {
                        animate: x,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    Z.jsx)(Ra, {
                        animate: x,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    Z.jsx)(Ra, {
                        animate: x,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    Z.jsx)("span", {
                        className: k()(ya, Ta),
                        children: "%"
                    })]
                })
            }
              , Oa = function(e) {
                var t = e.showUpgrades
                  , n = it()
                  , r = ht()
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
                    return s ? function() {}
                    : (null === i ? d(!1) : e = setTimeout((function() {
                        d(!1)
                    }
                    ), Tt),
                    function() {
                        e && clearTimeout(e)
                    }
                    );
                    var e
                }
                ), [i, s]);
                var _ = n ? "$".concat((0,
                Zt.ZV)(Ht._u.truncate(n, 1, !0))) : "--";
                return (0,
                Z.jsxs)("div", {
                    className: da,
                    children: [(0,
                    Z.jsx)(ta, {
                        className: k()(la, s && ua)
                    }), (0,
                    Z.jsxs)("div", {
                        className: k()(_a, l && xa),
                        children: [(0,
                        Z.jsx)("p", {
                            className: ha,
                            children: (0,
                            g.kW)("ok_game_okxracer_btc_price")
                        }), (0,
                        Z.jsx)("p", {
                            className: fa,
                            children: _
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: k()(_a, !l && xa),
                        children: [(0,
                        Z.jsxs)("p", {
                            className: ha,
                            children: [(0,
                            g.kW)("ok_game_okxracer_btc_price"), " ", _]
                        }), (0,
                        Z.jsx)("div", {
                            className: va,
                            children: (0,
                            Z.jsx)(La, {})
                        })]
                    }), (0,
                    Z.jsx)(oa, {
                        className: ma
                    }), (0,
                    Z.jsx)("div", {
                        className: k()(pa, s && xa),
                        children: (0,
                        Z.jsx)(Jn, {
                            showUpgrades: t
                        })
                    })]
                })
            };
            const Da = "GameCountdown_countdown__eQ6VX"
              , Fa = "GameCountdown_value__CVdxH";
            var Ua = function(e) {
                var t = e.className
                  , n = ht().countdown
                  , a = void 0 === n ? 5 : n;
                return (0,
                Z.jsxs)("p", {
                    className: k()(t, Da),
                    children: ["00:0", (0,
                    Z.jsx)("span", {
                        className: Fa,
                        children: a
                    })]
                })
            };
            const Va = "GuessResult_container__ECdpL"
              , Ga = "GuessResult_content__IEuHN"
              , Ma = "GuessResult_title__fzYxg"
              , Za = "GuessResult_description__R2fup"
              , Ha = "GuessResult_stripes__t9gib"
              , Ya = "GuessResult_changeRateContainer__a5-N7"
              , za = "GuessResult_changeRate__yhVz3"
              , Ka = "GuessResult_up__5vYDR"
              , Xa = "GuessResult_down__fa-oP"
              , qa = "GuessResult_priceChange__xr6e8"
              , Ja = "GuessResult_price__Vk+bY";
            function Qa(e) {
                return (0,
                Zt.vv)((0,
                Zt.ZV)(Ht._u.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var $a = function(e) {
                var t = e.className
                  , n = ht()
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
                            ), yt)
                        }
                        ), Tt)
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
                        className: k()(t, Va),
                        children: [(0,
                        Z.jsx)(w.A, {
                            pictureClassName: Ha,
                            className: Ha,
                            src: "".concat(c.A.cdnBaseUrl).concat(It)
                        }), (0,
                        Z.jsxs)("div", {
                            className: Ga,
                            children: [(0,
                            Z.jsx)("h2", {
                                className: Ma,
                                children: (0,
                                g.kW)(r ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                            }), (0,
                            Z.jsxs)("div", {
                                className: Za,
                                children: [null !== s && (0,
                                Z.jsxs)("p", {
                                    className: Ya,
                                    children: [(0,
                                    g.kW)("ok_game_okxracer_btc_price"), (0,
                                    Z.jsx)("span", {
                                        className: k()(za, (0,
                                        f.A)((0,
                                        f.A)({}, Ka, s > 0), Xa, s < 0)),
                                        children: (0,
                                        Zt.ZV)(ka(s), {
                                            style: "percent",
                                            signDisplay: !0
                                        })
                                    })]
                                }), i && o && (0,
                                Z.jsx)("p", {
                                    className: qa,
                                    children: (0,
                                    g.Vp)("ok_game_okxracer_price_change", {
                                        previousPrice: (0,
                                        Z.jsx)("span", {
                                            className: Ja,
                                            children: Qa(i)
                                        }),
                                        currentPrice: (0,
                                        Z.jsx)("span", {
                                            className: Ja,
                                            children: Qa(o)
                                        })
                                    })
                                })]
                            })]
                        }), (0,
                        Z.jsx)(w.A, {
                            pictureClassName: Ha,
                            className: Ha,
                            src: "".concat(c.A.cdnBaseUrl).concat(It)
                        })]
                    })
                })
            };
            const er = "Game_container__ZY3UI"
              , tr = "Game_muteButton__3NpST"
              , nr = "Game_headerWrapper__KN7Hs"
              , ar = "Game_coinPriceContainer__UEaiS"
              , rr = "Game_backgroundVideo__FGmkD"
              , sr = "Game_muteButtonIcon__-YOFW"
              , ir = "Game_hide__WvlMd"
              , cr = "Game_headerContent__y9QYB"
              , or = "Game_countdown__hQ5+r"
              , lr = "Game_resultOverlay__WVvD2";
            var ur = "backgroundVideoSoundOn"
              , dr = function(e) {
                var t = e.header
                  , n = e.headerWrapperClassName
                  , r = e.btnContainerMarginTop
                  , s = void 0 === r ? 30 : r
                  , i = e.showUpgrades
                  , c = ut()
                  , o = ht().isPending
                  , l = (0,
                a.useState)((function() {
                    var e = c.get(ur);
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
                    className: er,
                    children: [(0,
                    Z.jsx)(A.default, {
                        category: A.default.CATEGORY.fill,
                        type: A.default.TYPE.quaternary,
                        size: A.default.SIZE.md,
                        className: tr,
                        strictCircle: !0,
                        onClick: function() {
                            m((function(e) {
                                return c.set(ur, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        Z.jsx)(b.A, {
                            iconName: _ ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: sr
                        })
                    }), (0,
                    Z.jsxs)("div", {
                        className: k()(n, nr),
                        children: [(0,
                        Z.jsx)("div", {
                            className: k()(cr, h && ir),
                            children: t
                        }), (0,
                        Z.jsx)(Ua, {
                            className: k()(or, !h && ir)
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: ar,
                        children: [(0,
                        Z.jsx)("div", {
                            className: rr,
                            children: (0,
                            Z.jsx)(Ct, {
                                muted: _
                            })
                        }), (0,
                        Z.jsx)(Oa, {
                            showUpgrades: i
                        })]
                    }), (0,
                    Z.jsx)(Mt, {
                        style: {
                            marginTop: s
                        }
                    }), (0,
                    Z.jsx)($a, {
                        className: lr
                    })]
                })
            };
            const _r = "BattleProgressBar_container__zOm1x"
              , mr = "BattleProgressBar_progress__S8Llm"
              , pr = "BattleProgressBar_bar__aiwsB"
              , xr = "BattleProgressBar_notFull__HaKwq"
              , hr = "BattleProgressBar_countdown__xivBA";
            var fr = function(e) {
                var t = e.points
                  , n = e.defensePoints
                  , r = e.countDown
                  , s = e.onFinish
                  , i = (0,
                a.useRef)(void 0)
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
                    className: _r,
                    children: [(0,
                    Z.jsx)("div", {
                        className: mr,
                        children: (0,
                        Z.jsx)("div", {
                            className: k()(pr, (0,
                            f.A)({}, xr, "100%" !== _)),
                            style: {
                                width: _
                            }
                        })
                    }), (0,
                    Z.jsxs)("span", {
                        className: hr,
                        children: [l.minute, ":", l.second]
                    })]
                })
            }
              , vr = n(32843)
              , kr = {
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
              , gr = (0,
            a.createContext)(kr)
              , jr = function(e) {
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
                                Ne("".concat(be, "/game/racer/match/start"), {
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
                                Ne("".concat(be, "/game/racer/match/settle"), {
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
                Z.jsx)(gr.Provider, {
                    value: B,
                    children: t
                })
            }
              , Nr = function() {
                return (0,
                a.useContext)(gr)
            };
            const Ar = "BattleResult_container__b3JU0"
              , br = "BattleResult_content__LNmkd"
              , Cr = "BattleResult_stripes__TNj7H"
              , wr = "BattleResult_title__9JSTl"
              , yr = "BattleResult_wonPoints__ed03z"
              , Tr = "BattleResult_numChances__VXpt4"
              , Pr = "BattleResult_btnContainer__itreV"
              , Sr = "BattleResult_btn__y4LWs";
            var Br = function() {
                var e = Nr().result;
                return e ? (0,
                Z.jsxs)("div", {
                    className: Ar,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: br,
                        children: [(0,
                        Z.jsx)(w.A, {
                            pictureClassName: Cr,
                            className: Cr,
                            src: "".concat(c.A.cdnBaseUrl).concat(It)
                        }), (0,
                        Z.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                vr.YW)(e.won ? (0,
                                g.kW)("ok_game_okxracer_header_revved_to_victory") : (0,
                                g.kW)("ok_game_okxracer_header_burn_some_rubber"))
                            },
                            className: wr
                        }), e.won && (0,
                        Z.jsxs)("p", {
                            className: yr,
                            children: [Pt, " +", (0,
                            Zt.ZV)(e.wonPoints)]
                        }), (0,
                        Z.jsx)("p", {
                            className: Tr,
                            children: (0,
                            g.kW)("ok_game_okxracer_num_chances_left", {
                                num: (0,
                                Zt.ZV)(e.numChances)
                            })
                        }), (0,
                        Z.jsx)(w.A, {
                            pictureClassName: Cr,
                            className: Cr,
                            src: "".concat(c.A.cdnBaseUrl).concat(It)
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: Pr,
                        children: [e.numChances > 0 ? (0,
                        Z.jsx)(Fn, {
                            to: He.battleTeams,
                            children: (0,
                            Z.jsx)(cn, {
                                className: Sr,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_battle_again")
                            })
                        }) : (0,
                        Z.jsx)(Fn, {
                            to: He.home,
                            children: (0,
                            Z.jsx)(cn, {
                                className: Sr,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_race_no_chances_left")
                            })
                        }), (0,
                        Z.jsx)(Fn, {
                            to: He.teamRace,
                            children: (0,
                            Z.jsx)(A.default, {
                                className: Sr,
                                size: A.default.SIZE.xl,
                                block: !0,
                                children: (0,
                                g.kW)("ok_game_okxracer_btn_go_back_to_team")
                            })
                        })]
                    })]
                }) : null
            };
            const Ir = "RacerInfo_container__9Ky5m"
              , Wr = "RacerInfo_avatar__MkU70"
              , Er = "RacerInfo_pointsLabel__M7cPq"
              , Rr = "RacerInfo_pointsValue__0RtzL";
            var Lr = function(e) {
                var t = e.avatarUrl
                  , n = e.label
                  , a = e.pointsLabel
                  , r = e.icon
                  , s = e.points
                  , i = e.className;
                return (0,
                Z.jsxs)("div", {
                    className: k()(Ir, i),
                    children: [(0,
                    Z.jsx)(w.A, {
                        src: t,
                        className: Wr,
                        alt: ""
                    }), n, (0,
                    Z.jsx)("span", {
                        className: Er,
                        children: a
                    }), (0,
                    Z.jsxs)("span", {
                        className: Rr,
                        children: [r, " ", s]
                    })]
                })
            }
              , Or = n(44939);
            const Dr = "TransitionAnimation_overlay__-TqX3"
              , Fr = "TransitionAnimation_textContainer__+5jmQ"
              , Ur = "TransitionAnimation_opponent__vVXDa"
              , Vr = "TransitionAnimation_label__m2D5r"
              , Gr = "TransitionAnimation_name__P6mOg"
              , Mr = JSON.parse('{"v":"5.6.6","fr":60,"ip":0,"op":181,"w":750,"h":1624,"nm":"VS_R5","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"NULLCONTROL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[375.573,857.801,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.502,0.502,0.19],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[0.274,0.274,0]},"t":150,"s":[100,100,100]},{"t":165,"s":[293,293,100]}],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"V","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.19],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[100]},{"t":165,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[-387.53,25.68,0],"to":[0,0,0],"ti":[0,0,0]},{"t":10,"s":[10.47,25.68,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-16.128,-33.6],[-31.392,-33.6],[-8.544,33.6],[8.64,33.6],[31.392,-33.6],[16.512,-33.6],[0,16.128]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.737254917622,1,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"VS","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"S","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.19],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[100]},{"t":165,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[479.53,74.32,0],"to":[0,0,0],"ti":[0,0,0]},{"t":10,"s":[89.53,74.32,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-17.088,0],[0,12.576],[11.52,2.112],[0,5.472],[-6.144,0],[-0.672,-5.664],[0,0],[15.84,0],[0,-11.904],[-11.328,-2.208],[0,-5.664],[6.624,0],[0.48,6.72]],"o":[[0.096,13.632],[15.744,0],[0,-13.344],[-11.136,-2.112],[0,-5.184],[7.104,0],[0,0],[-0.192,-12.864],[-15.168,0],[0,13.632],[11.232,2.208],[0,5.28],[-8.256,0],[0,0]],"v":[[-27.024,11.52],[0.816,34.176],[27.024,12.96],[5.424,-6.144],[-10.992,-14.88],[-0.432,-22.656],[11.568,-13.056],[25.68,-13.056],[-0.432,-34.176],[-25.488,-13.824],[-4.176,5.568],[12.528,14.592],[1.008,22.752],[-12.912,11.52]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"VS","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"Vector7.png","cl":"png","parent":2,"refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[80]},{"t":157,"s":[2]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-203.042,11.519,0],"ix":2},"a":{"a":0,"k":[137,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":150,"op":181,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"Vector7179(Stroke)2.png","cl":"png","parent":3,"refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[80]},{"t":157,"s":[2]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[202.897,-37.122,0],"ix":2},"a":{"a":0,"k":[132,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":150,"op":181,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"Vector7.png","cl":"png","parent":2,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-203.042,11.519,0],"ix":2},"a":{"a":0,"k":[137,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"Vector7179(Stroke)2.png","cl":"png","parent":3,"refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[202.897,-37.122,0],"ix":2},"a":{"a":0,"k":[132,6,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"ramp7","parent":12,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[437.099,648.27,0],"ix":2},"a":{"a":0,"k":[226.329,-91.397,0],"ix":1},"s":{"a":0,"k":[-100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[89,-203],[6.459,-200.879],[6.411,-21.666],[88.952,-23.787]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":45,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"Rectangle65085575","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"image.png","cl":"png","parent":12,"refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[301.537,551.517,0],"ix":2},"a":{"a":0,"k":[155,155.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"ramp6","parent":13,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[298.465,227.165,0],"ix":2},"a":{"a":0,"k":[-338.319,169.626,0],"ix":1},"s":{"a":0,"k":[-100,-100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-30.324,93.84],[-88.823,93.808],[-88.96,265.331],[-30.461,265.363]],"c":true},"ix":2},"nm":"\u8def\u5f841","mn":"ADBEVectorShape-Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u51451","mn":"ADBEVectorGraphic-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":45,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"Rectangle65085575","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBEVectorGroup","hd":false}],"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"imageb.png","cl":"png","parent":13,"refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-360,"ix":10},"p":{"a":0,"k":[404.882,309.923,0],"ix":2},"a":{"a":0,"k":[155,155,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"Group2007672973_2.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.45],"y":[0.995]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[1093]},{"i":{"x":[0.835],"y":[0.689]},"o":{"x":[0.178],"y":[0.249]},"t":10,"s":[333]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.437],"y":[0.007]},"t":153,"s":[269]},{"t":165,"s":[-383]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.453],"y":[1.002]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-266]},{"i":{"x":[0.659],"y":[0.606]},"o":{"x":[0.337],"y":[0.392]},"t":10,"s":[488]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.452],"y":[0]},"t":153,"s":[548]},{"t":165,"s":[1200]}],"ix":4}},"a":{"a":0,"k":[357,414,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"Group2007672968_2.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.5],"y":[0.996]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-310]},{"i":{"x":[0.829],"y":[0.929]},"o":{"x":[0.212],"y":[0.288]},"t":10,"s":[414]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.565],"y":[0.002]},"t":153,"s":[479]},{"t":165,"s":[1077]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.484],"y":[0.996]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[1892]},{"i":{"x":[0.831],"y":[0.844]},"o":{"x":[0.191],"y":[0.226]},"t":10,"s":[1182]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.545],"y":[0.004]},"t":153,"s":[1121]},{"t":165,"s":[537]}],"ix":4}},"a":{"a":0,"k":[356,430.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":181,"st":0,"bm":0}],"markers":[]}');
            var Zr = function(e) {
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
                    C.A)({}, Mr), {}, {
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
                    className: Dr,
                    children: [(0,
                    Z.jsxs)("span", {
                        className: Fr,
                        children: [(0,
                        Z.jsx)("p", {
                            className: Vr,
                            children: (0,
                            g.kW)("ok_game_okxracer_challenge_racer")
                        }), (0,
                        Z.jsx)("p", {
                            className: Gr,
                            children: (0,
                            g.kW)("ok_game_okxracer_poster_title_you_battle")
                        })]
                    }), (0,
                    Z.jsxs)("span", {
                        className: k()(Fr, Ur),
                        children: [(0,
                        Z.jsx)("p", {
                            className: Vr,
                            children: (0,
                            g.kW)("ok_game_okxracer_defense_racer")
                        }), (0,
                        Z.jsx)("p", {
                            className: Gr,
                            children: (0,
                            Or.z)(i)
                        })]
                    })]
                }) : null
            }
              , Hr = (0,
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
              , Yr = function() {
                return (0,
                a.useContext)(Hr)
            }
              , zr = function(e) {
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
                                Ue();
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
                                    Ge(t);
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
                                    Me(t);
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
                                        Ve();
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
                Z.jsx)(Hr.Provider, {
                    value: W,
                    children: t
                })
            };
            const Kr = "Battle_gameHeaderWrapper__Ppb1Q"
              , Xr = "Battle_header__jOWc6"
              , qr = "Battle_racerLabel__KbnO9"
              , Jr = "Battle_defense__agq9W"
              , Qr = "Battle_lost__gMcm9";
            var $r = function() {
                var e = Nr()
                  , t = e.selectedOpponent
                  , n = e.selectedOpponentTeam
                  , r = e.accumulatedPoints
                  , i = e.incrementPoints
                  , u = e.startMatch
                  , d = e.countDown
                  , _ = e.settleMatch
                  , m = Yr().currentTeam
                  , p = ht()
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
                            v.replace(He.teamRace)
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
                        to: He.teamRace
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
                    Z.jsx)(dr, {
                        header: (0,
                        Z.jsxs)("header", {
                            className: Xr,
                            children: [(0,
                            Z.jsx)(Lr, {
                                avatarUrl: "".concat(c.A.cdnBaseUrl).concat(T),
                                label: (0,
                                Z.jsx)(j.A, {
                                    className: qr,
                                    size: N.A.SIZE.sm,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_challenge_racer")
                                }),
                                pointsLabel: (0,
                                g.kW)("ok_game_okxracer_label_my_points"),
                                icon: Bt,
                                points: r
                            }), (0,
                            Z.jsx)(fr, {
                                points: r,
                                defensePoints: t.defensePoint,
                                countDown: d,
                                onFinish: C
                            }), (0,
                            Z.jsx)(Lr, {
                                className: k()((0,
                                f.A)({}, Qr, r > t.defensePoint)),
                                avatarUrl: "".concat(c.A.cdnBaseUrl).concat(B),
                                label: (0,
                                Z.jsx)("span", {
                                    className: k()(qr, Jr),
                                    children: (0,
                                    g.kW)("ok_game_okxracer_defense_racer")
                                }),
                                pointsLabel: (0,
                                g.kW)("ok_game_okxracer_label_defenses_points"),
                                icon: St,
                                points: t.defensePoint
                            })]
                        }),
                        headerWrapperClassName: Kr,
                        btnContainerMarginTop: 16,
                        showUpgrades: !1
                    }), (0,
                    Z.jsx)(Zr, {
                        avatar: "".concat(c.A.cdnBaseUrl).concat(y || T),
                        opponentAvatar: "".concat(c.A.cdnBaseUrl).concat(S || B),
                        opponentName: t.userName,
                        onComplete: b
                    }), (0,
                    Z.jsx)(Br, {})]
                })
            }
              , es = n(45458)
              , ts = n(57208)
              , ns = n(59092);
            n(39053),
            n(23631);
            const as = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , rs = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var ss = function(e) {
                var t = e.className;
                return (0,
                Z.jsxs)("span", {
                    className: k()(as, t),
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: "okds-clock",
                        className: rs
                    }), (0,
                    g.kW)("ok_game_okxracer_tag_phase421_ended")]
                })
            };
            function is(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            function cs(e) {
                var t, n;
                null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e)
            }
            const os = "CampaignBottomSheet_campaignBottomSheet__OKpEt"
              , ls = "CampaignBottomSheet_dateRange__t5AOU"
              , us = "CampaignBottomSheet_subTitle__aG7oj"
              , ds = "CampaignBottomSheet_desc__TyIyt"
              , _s = "CampaignBottomSheet_divider__C+SIy"
              , ms = "CampaignBottomSheet_points__OXkAw"
              , ps = "CampaignBottomSheet_button__vdHpR";
            var xs = function(e) {
                var t = e.campaign;
                return (0,
                Z.jsxs)("div", {
                    className: os,
                    children: [t.status === Le.Ended ? (0,
                    Z.jsx)("span", {
                        className: ls,
                        children: (0,
                        Z.jsx)(ss, {})
                    }) : (0,
                    Z.jsxs)("span", {
                        className: ls,
                        children: [(0,
                        Zt.r6)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        Zt.r6)(new Date(t.endDate))]
                    }), (0,
                    Z.jsx)("p", {
                        className: us,
                        children: t.title
                    }), (0,
                    Z.jsx)("p", {
                        className: ds,
                        children: t.description
                    }), (0,
                    Z.jsx)("hr", {
                        className: _s
                    }), (0,
                    Z.jsx)("p", {
                        className: ms,
                        children: t.pointDescription
                    }), (0,
                    Z.jsx)(cn, {
                        className: ps,
                        onClick: function() {
                            cs(t.webUrl)
                        },
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_phase421_go_campaign")
                    })]
                })
            };
            const hs = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var fs = function(e) {
                var t = e.className;
                return (0,
                Z.jsx)("div", {
                    className: k()(hs, t)
                })
            };
            const vs = "NeonDivider_divider__QK3DO";
            var ks = function(e) {
                var t = e.className;
                return (0,
                Z.jsx)("hr", {
                    className: k()(vs, t)
                })
            }
              , gs = function() {
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
                        pathname: He.home,
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
            const js = "CampaignCard_cardContainer__3yu81"
              , Ns = "CampaignCard_dateRange__hvYLA"
              , As = "CampaignCard_campaignEndedIndicator__6J91S"
              , bs = "CampaignCard_card__cYF8Y"
              , Cs = "CampaignCard_campaignImg__YpUgC"
              , ws = "CampaignCard_round__MMyT5"
              , ys = "CampaignCard_content__1ZjVu"
              , Ts = "CampaignCard_name__mfl60"
              , Ps = "CampaignCard_desc__klZyx"
              , Ss = "CampaignCard_points__jIZar"
              , Bs = "CampaignCard_btn__v8gu9"
              , Is = "CampaignCard_btnContent__-5uC9";
            var Ws = function(e) {
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
                    className: js,
                    children: [t.endDate && t.startDate ? t.status === Le.Ended ? (0,
                    Z.jsx)(ss, {
                        className: As
                    }) : (0,
                    Z.jsxs)("span", {
                        className: Ns,
                        children: [(0,
                        Zt.r6)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        Zt.r6)(new Date(t.endDate))]
                    }) : null, (0,
                    Z.jsxs)("div", {
                        className: bs,
                        children: [(0,
                        Z.jsx)(w.A, {
                            src: "".concat(c.A.cdnBaseUrl).concat(i),
                            pictureClassName: Cs,
                            className: k()(Cs, (0,
                            f.A)({}, ws, s))
                        }), (0,
                        Z.jsxs)("div", {
                            className: ys,
                            children: [(0,
                            Z.jsx)("p", {
                                className: Ts,
                                children: o
                            }), (0,
                            Z.jsx)("p", {
                                className: Ps,
                                children: l
                            }), !!u && u > 0 && (0,
                            Z.jsx)("p", {
                                className: Ss,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    Zt.ZV)(u))
                                })
                            }), (0,
                            Z.jsx)(A.default, {
                                type: A.default.TYPE.default,
                                category: A.default.CATEGORY.outline,
                                size: A.default.SIZE.s,
                                className: Bs,
                                contentClassName: Is,
                                onClick: a,
                                children: n
                            })]
                        })]
                    })]
                })
            }
              , Es = {
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
              , Rs = (0,
            a.createContext)({
                accountBindingInfo: Es,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , Ls = function() {
                return (0,
                a.useContext)(Rs)
            }
              , Os = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(Es)
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
                                Oe(t);
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
                Z.jsx)(Rs.Provider, {
                    value: h,
                    children: t
                })
            }
              , Ds = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Fs = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function Us(e) {
                var t = {
                    title: (0,
                    g.kW)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    g.kW)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Ds.KYC,
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
                    type: Ds.SIGNUP,
                    status: Fs(Ds.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    g.kW)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    g.kW)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    g.kW)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Ds.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    g.kW)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var Vs = function(e) {
                var t = (0,
                a.useState)(Us(e))
                  , n = (0,
                u.A)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = z().uid;
                (0,
                a.useEffect)((function() {
                    s(Us(e))
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
                        case Ds.SIGNUP:
                        case Ds.INSTALL:
                            o = t,
                            window.localStorage && window.localStorage.setItem(o, "1"),
                            s(Us(e))
                        }
                        var o, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case Ds.SIGNUP:
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
                        case Ds.INSTALL:
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
                        case Ds.CONNECT:
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
                        case Ds.KYC:
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
            const Gs = "CertifyBottomSheet_certifySteps__-zWCO"
              , Ms = "CertifyBottomSheet_taskList__uK656"
              , Zs = "CertifyBottomSheet_task__iLWrC"
              , Hs = "CertifyBottomSheet_details__YoXf3"
              , Ys = "CertifyBottomSheet_title__X1Tnl"
              , zs = "CertifyBottomSheet_subTitle__EzVrR"
              , Ks = "CertifyBottomSheet_btn__JLhoo"
              , Xs = "CertifyBottomSheet_btnContent__wrzU-"
              , qs = "CertifyBottomSheet_verifyBtn__lYfYD";
            var Js = ["handleVerified"]
              , Qs = function(e) {
                var t = e.handleVerified
                  , n = (0,
                Yt.A)(e, Js)
                  , a = z().uid
                  , r = Ls()
                  , s = r.accountBindingInfo
                  , i = r.getAccountBindingInfo
                  , c = Vs(s)
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
                Z.jsx)(tn, (0,
                C.A)((0,
                C.A)({}, n), {}, {
                    title: (0,
                    g.kW)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: Gs,
                    children: (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("ul", {
                            className: Ms,
                            children: u.map((function(e) {
                                return (0,
                                Z.jsxs)("li", {
                                    className: Zs,
                                    children: [(0,
                                    Z.jsxs)("div", {
                                        className: Hs,
                                        children: [(0,
                                        Z.jsx)("p", {
                                            className: Ys,
                                            children: e.title
                                        }), (0,
                                        Z.jsx)("p", {
                                            className: zs,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    Z.jsx)(cn, {
                                        text: e.btnText,
                                        size: A.default.SIZE.xs,
                                        className: Ks,
                                        contentClassName: Xs,
                                        onClick: function() {
                                            d(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        Z.jsx)(cn, {
                            className: qs,
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
            const $s = "LeaveTeamBottomSheet_container__AvVcB"
              , ei = "LeaveTeamBottomSheet_title__gMzba"
              , ti = "LeaveTeamBottomSheet_desc__cl4EX"
              , ni = "LeaveTeamBottomSheet_btn__Nn5Ag"
              , ai = "LeaveTeamBottomSheet_btnContent__CsCwu";
            var ri = function(e) {
                var t = Yr()
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
                Z.jsx)(tn, (0,
                C.A)((0,
                C.A)({}, e), {}, {
                    children: (0,
                    Z.jsxs)("div", {
                        className: $s,
                        children: [(0,
                        Z.jsx)("h2", {
                            className: ei,
                            children: (0,
                            g.kW)("ok_game_okxracer_title_are_you_sure", {
                                teamName: null === n || void 0 === n ? void 0 : n.teamInfoContext.teamName
                            })
                        }), (0,
                        Z.jsx)("p", {
                            className: ti,
                            children: (0,
                            g.kW)("ok_game_okxracer_come_back_to_rejoin")
                        }), (0,
                        Z.jsx)(A.default, {
                            className: ni,
                            contentClassName: ai,
                            size: A.default.SIZE.lg,
                            type: A.default.TYPE.primary,
                            htmlType: "button",
                            onClick: _,
                            loading: c,
                            children: (0,
                            g.kW)("ok_game_okxracer_btn_leave_team")
                        }), (0,
                        Z.jsx)(A.default, {
                            className: ni,
                            contentClassName: ai,
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
            const si = "TeamDetail_container__Q+6aB"
              , ii = "TeamDetail_currentTeam__AYGL3"
              , ci = "TeamDetail_banner__3rZlg"
              , oi = "TeamDetail_linkButton__dur+b"
              , li = "TeamDetail_avatar__7nx+g"
              , ui = "TeamDetail_name__3MNHb"
              , di = "TeamDetail_linkIcon__yXhDG"
              , _i = "TeamDetail_desc__-y49w"
              , mi = "TeamDetail_textPlaceholder__MSh-q"
              , pi = "TeamDetail_divider__caEc+"
              , xi = "TeamDetail_fields__IVJYO"
              , hi = "TeamDetail_field__UJRM8"
              , fi = "TeamDetail_label__wfHBi"
              , vi = "TeamDetail_value__muhSZ"
              , ki = "TeamDetail_btnContainer__Exmdz"
              , gi = "TeamDetail_btnContent__uKzwD"
              , ji = "TeamDetail_leaveTeamBtn__fc7Tb"
              , Ni = "TeamDetail_title__OsFAU"
              , Ai = "TeamDetail_count__5lWAk"
              , bi = "TeamDetail_campaignList__BNfdO"
              , Ci = "TeamDetail_teamBenefitTooltipIcon__7OHcv"
              , wi = "TeamDetail_teamBenefitsCard__DVb-G"
              , yi = "TeamDetail_autoDrivingIcon__dFSTC"
              , Ti = "TeamDetail_text__moSUy";
            var Pi = function() {
                var e = $e().linkCode
                  , t = Yr()
                  , n = t.teams
                  , r = t.isLoading
                  , i = t.joinTeam
                  , d = t.teamBenefits
                  , _ = t.getTeams
                  , m = t.currentTeam
                  , p = Ls().isCertified
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
                gs(),
                !L && !r)
                    return (0,
                    Z.jsx)(s.Redirect, {
                        to: He.teamRace
                    });
                var O = {
                    key: "teamBenefitDesc",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_benefits"),
                    value: (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Or.z)(null === d || void 0 === d ? void 0 : d.teamBenefitDesc), (null === L || void 0 === L ? void 0 : L.isCurrentTeam) && (0,
                        Z.jsx)(ts.A, {
                            title: (0,
                            g.kW)("ok_game_okxracer_mid_tooltips_earn_extra_autodriving"),
                            children: (0,
                            Z.jsx)(b.A, {
                                iconName: "okds-information-circle",
                                className: Ci
                            })
                        })]
                    })
                }
                  , D = L ? [{
                    key: "teamRank",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_team_rank"),
                    value: "#".concat((0,
                    Zt.ZV)(L.teamRank || 0))
                }, {
                    key: "totalPoints",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_total_team_points"),
                    value: (0,
                    Zt.ZV)((null === L || void 0 === L ? void 0 : L.totalPoints) || 0)
                }, {
                    key: "teamNumMembers",
                    label: (0,
                    g.kW)("ok_game_okxracer_label_total_racers"),
                    value: "".concat((0,
                    Zt.ZV)(L.teamNumMembers), "/").concat((0,
                    Zt.ZV)(L.teamNumMemberCap))
                }].concat((0,
                es.A)(L.isCurrentTeam ? [O] : [])) : []
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
                  , G = (null === L || void 0 === L ? void 0 : L.campaigns) || []
                  , H = null !== L && void 0 !== L && L.teamInfoContext.teamAvatar ? {
                    src: "".concat(c.A.cdnBaseUrl).concat(L.teamInfoContext.teamAvatar)
                } : {};
                return (0,
                Z.jsxs)("div", {
                    className: k()(si, (0,
                    f.A)({}, ii, null === L || void 0 === L ? void 0 : L.isCurrentTeam)),
                    children: [(0,
                    Z.jsxs)("div", {
                        className: ci,
                        children: [U ? (0,
                        Z.jsx)(fs, {
                            className: li
                        }) : (0,
                        Z.jsx)(ns.A, (0,
                        C.A)((0,
                        C.A)({}, H), {}, {
                            alt: null === L || void 0 === L ? void 0 : L.teamInfoContext.teamName,
                            className: li
                        })), (0,
                        Z.jsx)("div", {
                            className: ui,
                            children: U ? (0,
                            Z.jsx)(fs, {
                                className: mi
                            }) : (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [null === L || void 0 === L ? void 0 : L.teamInfoContext.teamName, (null === L || void 0 === L ? void 0 : L.teamInfoContext.teamLink) && (0,
                                Z.jsx)(A.default, {
                                    className: oi,
                                    type: A.default.TYPE.tertiary,
                                    category: A.default.CATEGORY.text,
                                    htmlType: "button",
                                    onClick: function() {
                                        L && cs(L.teamInfoContext.teamLink)
                                    },
                                    children: (0,
                                    Z.jsx)(b.A, {
                                        iconName: "okds-open-link",
                                        className: di
                                    })
                                })]
                            })
                        }), (0,
                        Z.jsx)("div", {
                            className: _i,
                            children: U ? (0,
                            Z.jsx)(fs, {
                                className: mi
                            }) : (0,
                            Z.jsx)(Z.Fragment, {
                                children: null === L || void 0 === L ? void 0 : L.teamInfoContext.teamDesc
                            })
                        })]
                    }), (0,
                    Z.jsx)(ks, {
                        className: pi
                    }), (0,
                    Z.jsxs)("ul", {
                        className: xi,
                        children: [U && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(fs, {
                                className: mi
                            }), (0,
                            Z.jsx)(fs, {
                                className: mi
                            }), (0,
                            Z.jsx)(fs, {
                                className: mi
                            })]
                        }), !U && D.map((function(e) {
                            var t = e.label
                              , n = e.value
                              , a = e.key;
                            return (0,
                            Z.jsxs)("li", {
                                className: hi,
                                children: [(0,
                                Z.jsx)("span", {
                                    className: fi,
                                    children: t
                                }), (0,
                                Z.jsx)("span", {
                                    className: vi,
                                    children: n
                                })]
                            }, a)
                        }
                        ))]
                    }), G.length > 0 && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsxs)("p", {
                            className: Ni,
                            children: [(0,
                            g.kW)("ok_game_okxracer_mid_textarea_label_team_exclusive_campaigns"), "\xa0", (0,
                            Z.jsxs)("span", {
                                className: Ai,
                                children: ["(", G.length, ")"]
                            })]
                        }), (0,
                        Z.jsx)("ul", {
                            className: bi,
                            children: G.map((function(e) {
                                return (0,
                                Z.jsx)(Ws, {
                                    campaign: e,
                                    btnText: (0,
                                    g.kW)("ok_game_okxracer_btn_phase421_view_campaign"),
                                    onClick: function() {
                                        p ? function(e) {
                                            nn({
                                                children: (0,
                                                Z.jsx)(xs, {
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
                        className: ki,
                        children: [!m && !(null !== L && void 0 !== L && L.isCurrentTeam) && (0,
                        Z.jsxs)("div", {
                            className: wi,
                            children: [(0,
                            Z.jsx)(w.A, {
                                className: yi,
                                src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/2412/29521E8617DBF911.svg")
                            }), (0,
                            Z.jsx)("span", {
                                className: Ti,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    vr.YW)((0,
                                    g.kW)("ok_game_okxracer_footer_cell_select_earn_auto_join_team", {
                                        teamName: null === L || void 0 === L ? void 0 : L.teamInfoContext.teamName
                                    }))
                                }
                            })]
                        }), (null === L || void 0 === L ? void 0 : L.isCurrentTeam) && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(A.default, {
                                contentClassName: gi,
                                size: A.default.SIZE.lg,
                                type: A.default.TYPE.primary,
                                htmlType: "button",
                                href: h,
                                children: (0,
                                g.kW)("ok_game_okxracer_btn_invite")
                            }), (0,
                            Z.jsx)(A.default, {
                                className: ji,
                                contentClassName: gi,
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
                            contentClassName: gi,
                            onClick: F,
                            loading: N,
                            children: (0,
                            g.kW)("ok_game_okxracer_btn_join_now")
                        })]
                    }), (0,
                    Z.jsx)(Qs, {
                        visible: S,
                        onClose: function() {
                            B(!1)
                        },
                        handleVerified: function() {
                            B(!1)
                        }
                    }), (0,
                    Z.jsx)(ri, {
                        visible: E,
                        onClose: function() {
                            R(!1)
                        }
                    })]
                })
            }
              , Si = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            };
            function Bi(e) {
                return e <= 3
            }
            const Ii = "TeamListItem_teamListItem__jlC3n"
              , Wi = "TeamListItem_teamRank__sfdv+"
              , Ei = "TeamListItem_emoji__dCwPS"
              , Ri = "TeamListItem_avatar__gxfNS"
              , Li = "TeamListItem_teamName__gG78O"
              , Oi = "TeamListItem_teamPoints__jr8Wv"
              , Di = "TeamListItem_currentTeam__dwSkF";
            var Fi = function(e) {
                var t = e.teamRank
                  , n = e.teamInfoContext
                  , a = n.teamAvatar
                  , r = n.teamName
                  , s = e.totalPoints
                  , i = e.isCurrentTeam
                  , o = e.highlightCurrentTeam
                  , l = void 0 === o || o
                  , u = Bi(t);
                return (0,
                Z.jsxs)("div", {
                    className: k()(Ii, (0,
                    f.A)({}, Di, l && i)),
                    children: [(0,
                    Z.jsx)("span", {
                        className: k()(Wi, (0,
                        f.A)({}, Ei, u)),
                        children: u ? Si[t] : "#".concat((0,
                        Zt.ZV)(t))
                    }), (0,
                    Z.jsx)(ns.A, {
                        className: Ri,
                        size: ns.A.SIZE.sm,
                        alt: r,
                        src: "".concat(c.A.cdnBaseUrl).concat(a)
                    }), (0,
                    Z.jsx)("span", {
                        className: Li,
                        children: (0,
                        Or.z)(r)
                    }), (0,
                    Z.jsx)("span", {
                        className: Oi,
                        children: (0,
                        Zt.ZV)(s)
                    })]
                })
            };
            const Ui = "TeamList_listHeaders__QcPJe"
              , Vi = "TeamList_list__hbILW"
              , Gi = "TeamList_listPlaceholder__nEDhA";
            var Mi = function() {
                var e = Yr()
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
                        className: Ui,
                        children: [(0,
                        Z.jsx)("span", {
                            children: (0,
                            g.kW)("ok_game_okxracer_label_leaderboard_teams_number", {
                                num: (0,
                                Zt.ZV)(t.length)
                            })
                        }), (0,
                        Z.jsx)("span", {
                            children: (0,
                            g.kW)("ok_game_okxracer_total_points")
                        })]
                    }), (0,
                    Z.jsxs)("ul", {
                        className: Vi,
                        children: [n && (0,
                        Z.jsx)("li", {
                            children: (0,
                            Z.jsx)(Fn, {
                                to: (0,
                                s.generatePath)(He.teamDetail, {
                                    id: n.teamId
                                }),
                                children: (0,
                                Z.jsx)(Fi, (0,
                                C.A)({}, n))
                            })
                        }), t.map((function(e) {
                            return e.isCurrentTeam ? null : (0,
                            Z.jsx)("li", {
                                children: (0,
                                Z.jsx)(Fn, {
                                    to: (0,
                                    s.generatePath)(He.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    Z.jsx)(Fi, (0,
                                    C.A)({}, e))
                                })
                            }, e.teamId)
                        }
                        )), 0 === t.length && (0,
                        Z.jsx)(Z.Fragment, {
                            children: Array.from({
                                length: 3
                            }, (function(e, t) {
                                return (0,
                                Z.jsx)("li", {
                                    children: (0,
                                    Z.jsx)(fs, {
                                        className: Gi
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const Zi = "TeamList_title__2Q2ap";
            var Hi = function() {
                return gs(),
                (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)("h2", {
                        className: Zi,
                        children: (0,
                        g.kW)("ok_game_okxracer_leaderboard_top_teams")
                    }), (0,
                    Z.jsx)(Mi, {})]
                })
            };
            const Yi = "BattleRecordsBottomSheet_loaderContainer__3yJL8"
              , zi = "BattleRecordsBottomSheet_title__8fd3n"
              , Ki = "BattleRecordsBottomSheet_container__-I9RG"
              , Xi = "BattleRecordsBottomSheet_recordContainer__7Q+n0"
              , qi = "BattleRecordsBottomSheet_recordField__+O+7R"
              , Ji = "BattleRecordsBottomSheet_label__GOnLC"
              , Qi = "BattleRecordsBottomSheet_teamName__oZa+n"
              , $i = "BattleRecordsBottomSheet_value__xN2Dj"
              , ec = "BattleRecordsBottomSheet_timestamp__-1E1J"
              , tc = "BattleRecordsBottomSheet_emptyMessageContainer__li81c"
              , nc = "BattleRecordsBottomSheet_description__VBt-r";
            var ac = function(e) {
                var t = e.label
                  , n = e.value;
                return (0,
                Z.jsxs)("div", {
                    className: qi,
                    children: [t, (0,
                    Z.jsx)("p", {
                        className: $i,
                        children: n
                    })]
                })
            }
              , rc = function(e) {
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
                                            ge("".concat(be, "/game/racer/match/records"), {
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
                Z.jsx)(tn, (0,
                C.A)((0,
                C.A)({}, e), {}, {
                    title: (0,
                    Z.jsx)("span", {
                        className: zi,
                        children: (0,
                        g.kW)("ok_game_okxracer_header_battle_history")
                    }),
                    titleCenter: !0,
                    containerClassName: Ki,
                    children: d ? (0,
                    Z.jsx)("div", {
                        className: Yi,
                        children: (0,
                        Z.jsx)(na.A, {})
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
                            className: Xi,
                            children: [(0,
                            Z.jsx)(ac, {
                                label: (0,
                                Z.jsx)("p", {
                                    className: Qi,
                                    children: (0,
                                    Or.z)(e.opponentTeamName)
                                }),
                                value: (0,
                                Or.z)(e.opponentExtUserName)
                            }), (0,
                            Z.jsx)(ac, {
                                label: (0,
                                Z.jsx)("p", {
                                    className: Ji,
                                    children: e.isChallenger ? (0,
                                    g.kW)("ok_game_okxracer_label_challenge") : (0,
                                    g.kW)("ok_game_okxracer_label_defense")
                                }),
                                value: t
                            }), (0,
                            Z.jsx)(ac, {
                                label: (0,
                                Z.jsx)("p", {
                                    className: Ji,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_label_points")
                                }),
                                value: e.points ? (0,
                                Zt.ZV)(e.points, {
                                    signDisplay: !0
                                }) : "--"
                            }), (0,
                            Z.jsx)("p", {
                                className: ec,
                                children: (0,
                                Zt.r6)(new Date(e.createdTime), {
                                    format: "yyyyMMMdhhmmss"
                                })
                            })]
                        }, e.createdTime)
                    }
                    )) : (0,
                    Z.jsxs)("div", {
                        className: tc,
                        children: [(0,
                        Z.jsx)("p", {
                            className: zi,
                            children: (0,
                            g.kW)("ok_game_okxracer_emptystate_title_no_battles_yet")
                        }), (0,
                        Z.jsx)("p", {
                            className: nc,
                            children: (0,
                            g.kW)("ok_game_okxracer_emptystate_desc_view_history_here")
                        })]
                    })
                }))
            };
            const sc = "PageTitle_title__IQ7TT";
            var ic = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                Z.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        vr.YW)(t)
                    },
                    className: k()(sc, n)
                })
            };
            const cc = "BackgroundVideo_staticImage__8nJGy"
              , oc = "BackgroundVideo_hide__u0OBx";
            var lc = [{
                src: "/cdn/assets/files/2412/88F486E0BC64CCBD.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/2412/24E663A2B8BB8A03.mp4",
                type: "video/mp4"
            }]
              , uc = [{
                src: "/cdn/assets/files/2412/9E6560A797A4886C.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/2412/057C5A5619B14BEC.mp4",
                type: "video/mp4"
            }]
              , dc = "/cdn/assets/imgs/2410/EB79DD3F2B0CFDF2.png"
              , _c = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.A.cdnBaseUrl).concat(dc),
                muted: !0
            }
              , mc = function(e) {
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
                        className: k()(cc, (0,
                        f.A)({}, oc, !x)),
                        src: "".concat(c.A.cdnBaseUrl).concat(dc)
                    }), (0,
                    Z.jsx)("video", (0,
                    C.A)((0,
                    C.A)({}, _c), {}, {
                        ref: r,
                        className: k()(t, (0,
                        f.A)({}, oc, !h)),
                        children: lc.map((function(e) {
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
                    C.A)({}, _c), {}, {
                        ref: n,
                        loop: !0,
                        className: k()(t, (0,
                        f.A)({}, oc, !v)),
                        children: uc.map((function(e) {
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
            const pc = "RulesBottomSheet_container__NlHHH"
              , xc = "RulesBottomSheet_rule__5HG6Z"
              , hc = "RulesBottomSheet_bullet__fYKP5"
              , fc = "RulesBottomSheet_textContainer__Miyg+"
              , vc = "RulesBottomSheet_title__PJ-Lg"
              , kc = "RulesBottomSheet_desc__vheUi";
            var gc = function(e) {
                var t = [{
                    title: (0,
                    g.kW)("ok_game_okxracer_rule_one_header", {
                        num: (0,
                        Zt.ZV)(5)
                    }),
                    desc: (0,
                    g.kW)("ok_game_okxracer_rule_one_desc", {
                        num: (0,
                        Zt.ZV)(5)
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
                Z.jsx)(tn, (0,
                C.A)((0,
                C.A)({}, e), {}, {
                    title: (0,
                    g.kW)("ok_game_okxracer_battle_rules"),
                    titleCenter: !0,
                    children: (0,
                    Z.jsx)("ul", {
                        className: pc,
                        children: t.map((function(e) {
                            var t = e.title
                              , n = e.desc;
                            return (0,
                            Z.jsxs)("li", {
                                className: xc,
                                children: [(0,
                                Z.jsx)("span", {
                                    className: hc
                                }), (0,
                                Z.jsxs)("div", {
                                    className: fc,
                                    children: [(0,
                                    Z.jsx)("p", {
                                        className: vc,
                                        children: t
                                    }), (0,
                                    Z.jsx)("p", {
                                        className: kc,
                                        children: n
                                    })]
                                })]
                            }, t)
                        }
                        ))
                    })
                }))
            };
            const jc = "TeamCard_teamCard__lUFQ3"
              , Nc = "TeamCard_header__Amp+p"
              , Ac = "TeamCard_avatar__aE9y-"
              , bc = "TeamCard_teamName__ycan7"
              , Cc = "TeamCard_chevron__kzh7j"
              , wc = "TeamCard_content__3FBKT"
              , yc = "TeamCard_teamInfoField__sZNuy"
              , Tc = "TeamCard_label__al-xY"
              , Pc = "TeamCard_value__ORmag"
              , Sc = "TeamCard_divider__XjdlD"
              , Bc = "TeamCard_leaderTeamPoints__-aWse"
              , Ic = "TeamCard_text__A0e85"
              , Wc = "TeamCard_btnContent__hlQU4";
            var Ec = function(e) {
                var t = e.team
                  , n = e.className
                  , r = Yr()
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
                                    Ee({
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
                    className: k()(n, jc),
                    children: [(0,
                    Z.jsxs)(Fn, {
                        to: (0,
                        s.generatePath)(He.teamDetail, {
                            id: t.teamId
                        }),
                        className: Nc,
                        children: [(0,
                        Z.jsx)(ns.A, {
                            src: "".concat(c.A.cdnBaseUrl).concat(t.teamInfoContext.teamAvatar),
                            alt: t.teamInfoContext.teamName,
                            className: Ac,
                            size: ns.A.SIZE.sm
                        }), (0,
                        Z.jsx)("p", {
                            className: bc,
                            children: (0,
                            Or.z)(t.teamInfoContext.teamName)
                        }), (0,
                        Z.jsx)(b.A, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: Cc
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: wc,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: yc,
                            children: [(0,
                            Z.jsx)("p", {
                                className: Tc,
                                children: (0,
                                g.kW)("ok_game_okxracer_todays_ranking")
                            }), (0,
                            Z.jsxs)("p", {
                                className: Pc,
                                children: ["#", (0,
                                Zt.ZV)(t.teamRank)]
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            className: yc,
                            children: [(0,
                            Z.jsx)("p", {
                                className: Tc,
                                children: (0,
                                g.kW)("ok_game_okxracer_total_points")
                            }), (0,
                            Z.jsx)("p", {
                                className: Pc,
                                children: (0,
                                Zt.ZV)(t.totalPoints)
                            })]
                        })]
                    }), i && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("hr", {
                            className: Sc
                        }), (0,
                        Z.jsxs)("section", {
                            className: Bc,
                            children: [(0,
                            Z.jsxs)("p", {
                                className: Ic,
                                children: ["\ud83c\udfc1\xa0", (0,
                                g.kW)("ok_game_okxracer_desc_pts_for_team", {
                                    num: (0,
                                    Zt.ZV)(5e3)
                                })]
                            }), (0,
                            Z.jsx)(A.default, {
                                contentClassName: Wc,
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
            const Rc = "TeamList_teamListLink__EMea8"
              , Lc = "TeamList_icon__Dhul7"
              , Oc = "TeamList_teamList__w-ZJo"
              , Dc = "TeamList_listPlaceholder__p9xfs";
            var Fc = function() {
                var e = Yr().teams.slice(0, 3);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)(Fn, {
                        className: Rc,
                        to: He.teamList,
                        children: [(0,
                        g.kW)("ok_game_okxracer_leaderboard_top_teams"), (0,
                        Z.jsx)(b.A, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: Lc
                        })]
                    }), (0,
                    Z.jsxs)("ul", {
                        className: Oc,
                        children: [e.map((function(e) {
                            return (0,
                            Z.jsx)("li", {
                                children: (0,
                                Z.jsx)(Fn, {
                                    to: (0,
                                    s.generatePath)(He.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    Z.jsx)(Fi, (0,
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
                            }, (function(e, t) {
                                return (0,
                                Z.jsx)("li", {
                                    children: (0,
                                    Z.jsx)(fs, {
                                        className: Dc
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const Uc = "TeamsPage_banner__kJ07n"
              , Vc = "TeamsPage_videoContainer__4MFJt"
              , Gc = "TeamsPage_btnContainer__RVCJA"
              , Mc = "TeamsPage_upgradesLink__ks2+R"
              , Zc = "TeamsPage_btn__yCBjf"
              , Hc = "TeamsPage_icon__RIsDk"
              , Yc = "TeamsPage_pageTitle__5jH4j"
              , zc = "TeamsPage_joinTeamBtn__QZ2+Q"
              , Kc = "TeamsPage_startRacingBtn__ga9uF"
              , Xc = "TeamsPage_subtitle__UxY6O"
              , qc = "TeamsPage_teamCard__h6zcj"
              , Jc = "TeamsPage_numChances__EYqAB";
            var Qc = function() {
                var e = Ls().isCertified
                  , t = Yr()
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
                        className: Uc,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: Vc,
                            children: [(0,
                            Z.jsxs)(Fn, {
                                to: He.upgrades,
                                className: Mc,
                                children: [(0,
                                Z.jsx)(b.A, {
                                    iconName: "okx-growth-upgrades",
                                    className: Hc
                                }), (0,
                                g.kW)("ok_game_okxracer_nav_upgrades")]
                            }), (0,
                            Z.jsxs)("div", {
                                className: Gc,
                                children: [(0,
                                Z.jsx)(wt.A, {
                                    className: Zc,
                                    onClick: function() {
                                        j(!0)
                                    },
                                    children: (0,
                                    g.kW)("ok_game_okxracer_header_battle_history")
                                }), (0,
                                Z.jsxs)(wt.A, {
                                    className: Zc,
                                    onClick: function() {
                                        h(!0)
                                    },
                                    children: [(0,
                                    Z.jsx)(b.A, {
                                        iconName: "okds-question-mark-circle",
                                        className: Hc
                                    }), (0,
                                    g.kW)("ok_game_okxracer_tag_rules")]
                                })]
                            }), (0,
                            Z.jsx)(mc, {})]
                        }), (0,
                        Z.jsx)(ic, {
                            className: Yc,
                            html: e && n ? (0,
                            g.kW)("ok_game_okxracer_tips_race_with_the_best") : (0,
                            g.kW)("ok_game_okxracer_winning_team")
                        }), !n && (0,
                        Z.jsx)(Z.Fragment, {
                            children: e ? (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)("p", {
                                    className: Xc,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_join_or_create_team")
                                }), (0,
                                Z.jsx)(Fn, {
                                    to: He.teamList,
                                    children: (0,
                                    Z.jsx)(cn, {
                                        className: zc,
                                        text: (0,
                                        g.kW)("ok_game_okxracer_btn_join_a_team"),
                                        size: A.default.SIZE.sm
                                    })
                                })]
                            }) : (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)("p", {
                                    className: Xc,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_get_certified_battle")
                                }), (0,
                                Z.jsx)(cn, {
                                    className: zc,
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
                                className: Jc,
                                children: (0,
                                g.kW)("ok_game_okxracer_num_chances_left", {
                                    num: (0,
                                    Zt.ZV)((null === i || void 0 === i ? void 0 : i.numChances) || 0)
                                })
                            }), (0,
                            Z.jsx)(cn, {
                                className: Kc,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_start_a_battle"),
                                size: A.default.SIZE.sm,
                                disabled: 0 === (null === i || void 0 === i ? void 0 : i.numChances),
                                onClick: function() {
                                    c.push(He.battleTeams)
                                }
                            })]
                        })]
                    }), n && (0,
                    Z.jsx)(Ec, {
                        team: n,
                        className: qc
                    }), (0,
                    Z.jsx)(Fc, {}), (0,
                    Z.jsx)(Qs, {
                        visible: d,
                        onClose: function() {
                            _(!1)
                        },
                        handleVerified: function() {
                            _(!1)
                        }
                    }), (0,
                    Z.jsx)(gc, {
                        visible: x,
                        onClose: function() {
                            h(!1)
                        }
                    }), (0,
                    Z.jsx)(rc, {
                        visible: k,
                        onClose: function() {
                            j(!1)
                        }
                    })]
                })
            }
              , $c = (0,
            a.createContext)({
                campaigns: [],
                loading: !1
            })
              , eo = function(e) {
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
                Z.jsx)($c.Provider, {
                    value: p,
                    children: t
                })
            };
            const to = "App_container__p+0qT"
              , no = "App_footer__NGiBl"
              , ao = "App_content__Jjurs"
              , ro = "App_gradientBackground__rNgmD"
              , so = "ComPaddingLayout_commonPaddingLayout__FJ+ET";
            var io = function(e, t) {
                return function(n) {
                    return (0,
                    Z.jsx)("div", {
                        className: k()(so, t),
                        children: (0,
                        Z.jsx)(e, (0,
                        C.A)({}, n))
                    })
                }
            };
            const co = "BattleOpponents_container__i56Es"
              , oo = "BattleOpponents_banner__LPuPn"
              , lo = "BattleOpponents_header__a-qDC"
              , uo = "BattleOpponents_bodyText__dl3PG"
              , _o = "BattleOpponents_listHeader__kYuBD"
              , mo = "BattleOpponents_username__q7RQ+"
              , po = "BattleOpponents_basePointContainer__dO7Wc"
              , xo = "BattleOpponents_basePointLabel__7yd74"
              , ho = "BattleOpponents_basePoint__iyGnv"
              , fo = "BattleOpponents_unclaimedPoints__zVRGA"
              , vo = "BattleOpponents_defensePoint__-NZT9"
              , ko = "BattleOpponents_list__jMVFc"
              , go = "BattleOpponents_listItemBtn__HoP7N"
              , jo = "BattleOpponents_leftContent__NfhVu"
              , No = "BattleOpponents_listItem__z2Ac3"
              , Ao = "BattleOpponents_active__kK8lZ"
              , bo = "BattleOpponents_btnContainer__9sgl3"
              , Co = "BattleOpponents_btn__1J6Tn"
              , wo = "BattleOpponents_btnContent__LneTC"
              , yo = "BattleOpponents_loadingPlaceholder__+iWWN";
            var To = function() {
                gs();
                var e = Yr()
                  , t = e.currentTeam
                  , n = e.matchInfo
                  , r = (0,
                a.useState)(!0)
                  , i = (0,
                u.A)(r, 2)
                  , d = i[0]
                  , _ = i[1]
                  , m = z().username
                  , p = Nr()
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
                                    Ze(t);
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
                    className: co,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: oo,
                        children: [(0,
                        Z.jsx)(ns.A, {
                            src: "".concat(c.A.cdnBaseUrl).concat(t.teamInfoContext.teamAvatar)
                        }), (0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsx)("div", {
                                className: mo,
                                children: m
                            }), (0,
                            Z.jsxs)("div", {
                                className: po,
                                children: [(0,
                                Z.jsx)("span", {
                                    className: xo,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_text_phase42_base_pts_win")
                                }), (0,
                                Z.jsx)("span", {
                                    className: ho,
                                    children: "".concat(Pt, " ").concat((0,
                                    Zt.ZV)(n.basePoint))
                                })]
                            })]
                        })]
                    }), (0,
                    Z.jsx)("h2", {
                        className: lo,
                        children: (0,
                        g.kW)("ok_game_okxracer_select_header_step_two_choose_racer", {
                            teamName: f.teamInfoContext.teamName
                        })
                    }), (0,
                    Z.jsx)("p", {
                        className: uo,
                        children: (0,
                        g.kW)("ok_game_okxracer_score_higher_than_defendant")
                    }), (0,
                    Z.jsxs)("div", {
                        className: _o,
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
                        className: ko,
                        children: [d && (0,
                        Z.jsx)(Z.Fragment, {
                            children: Array.from({
                                length: 5
                            }, (function(e, t) {
                                return (0,
                                Z.jsx)("li", {
                                    children: (0,
                                    Z.jsx)(fs, {
                                        className: yo
                                    })
                                }, t)
                            }
                            ))
                        }), N.map((function(e) {
                            return (0,
                            Z.jsx)("li", {
                                className: k()(No, (null === x || void 0 === x ? void 0 : x.extUserId) === e.extUserId && Ao),
                                children: (0,
                                Z.jsxs)(wt.A, {
                                    className: go,
                                    "aria-label": "",
                                    onClick: function() {
                                        h(e)
                                    },
                                    children: [(0,
                                    Z.jsxs)("div", {
                                        className: jo,
                                        children: [(0,
                                        Z.jsx)("span", {
                                            className: mo,
                                            children: e.userName
                                        }), (0,
                                        Z.jsx)("span", {
                                            className: vo,
                                            children: "".concat(St, " ").concat((0,
                                            Zt.ZV)(e.defensePoint))
                                        })]
                                    }), (0,
                                    Z.jsx)("div", {
                                        className: fo,
                                        children: (0,
                                        Zt.ZV)(e.unclaimedAutopilotPoints)
                                    })]
                                })
                            }, e.extUserId)
                        }
                        ))]
                    }), (0,
                    Z.jsx)("div", {
                        className: bo,
                        children: (0,
                        Z.jsx)(Fn, {
                            to: He.battle,
                            className: Co,
                            children: (0,
                            Z.jsx)(cn, {
                                className: Co,
                                contentClassName: wo,
                                disabled: !x,
                                text: (0,
                                g.kW)("commonall_button_text_start")
                            })
                        })
                    })]
                }) : null : (0,
                Z.jsx)(s.Redirect, {
                    to: He.battleTeams
                })
            };
            const Po = "BattleTeams_container__BM1pO"
              , So = "BattleTeams_header__Kf0bD"
              , Bo = "BattleTeams_list__l6BPF"
              , Io = "BattleTeams_listItem__0-Ylj"
              , Wo = "BattleTeams_active__rdlnk"
              , Eo = "BattleTeams_listBtn__Qrgiq"
              , Ro = "BattleTeams_label__h44r1"
              , Lo = "BattleTeams_btnContainer__Ucy5D"
              , Oo = "BattleTeams_btn__vG1rz"
              , Do = "BattleTeams_btnContent__lIste";
            var Fo = function() {
                gs();
                var e = Yr().teams
                  , t = Nr()
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
                    className: Po,
                    children: [(0,
                    Z.jsx)("div", {
                        className: So,
                        children: (0,
                        g.kW)("ok_game_okxracer_header_step_once_choose_team")
                    }), (0,
                    Z.jsx)("ul", {
                        className: Bo,
                        children: o.map((function(e) {
                            return (0,
                            Z.jsx)("li", {
                                className: k()(Io, (null === n || void 0 === n ? void 0 : n.teamId) === e.teamId && Wo),
                                children: (0,
                                Z.jsxs)(wt.A, {
                                    className: Eo,
                                    "aria-label": "",
                                    onClick: function() {
                                        r(e)
                                    },
                                    children: [(0,
                                    Z.jsx)(ns.A, {
                                        src: "".concat(c.A.cdnBaseUrl).concat(e.teamInfoContext.teamAvatar),
                                        size: ns.A.SIZE.lg
                                    }), (0,
                                    Z.jsx)("div", {
                                        className: Ro,
                                        children: e.teamInfoContext.teamName
                                    })]
                                })
                            }, e.teamId)
                        }
                        ))
                    }), (0,
                    Z.jsx)(Fn, {
                        to: n ? (0,
                        s.generatePath)(He.battleTeamMembers, {
                            id: n.teamId
                        }) : {},
                        className: Lo,
                        children: (0,
                        Z.jsx)(cn, {
                            className: Oo,
                            contentClassName: Do,
                            disabled: !n,
                            text: (0,
                            g.kW)("commonall_button_text_next")
                        })
                    })]
                })
            };
            const Uo = "RiskControl_title__h9Z0T";
            var Vo = function() {
                var e = $e()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                Z.jsx)(tn, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    Z.jsx)("div", {
                        className: Uo,
                        children: (0,
                        g.kW)("ok_game_okxracer_risk_control")
                    })
                })
            };
            const Go = "ClaimTeamPointsBottomSheet_container__1wnim"
              , Mo = "ClaimTeamPointsBottomSheet_graphic__5TzK4"
              , Zo = "ClaimTeamPointsBottomSheet_title__NsQhi"
              , Ho = "ClaimTeamPointsBottomSheet_desc__RAIVt"
              , Yo = "ClaimTeamPointsBottomSheet_btn__pC8CP"
              , zo = "ClaimTeamPointsBottomSheet_btnContent__ze-Xt";
            var Ko = function() {
                var e = Yr()
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
                                    Ee({
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
                Z.jsx)(tn, {
                    visible: d,
                    onClose: function() {
                        _(!1)
                    },
                    children: (0,
                    Z.jsxs)("div", {
                        className: Go,
                        children: [(0,
                        Z.jsx)(w.A, {
                            className: Mo,
                            src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/2410/3F84F994EA1D6F77.svg")
                        }), (0,
                        Z.jsx)("h2", {
                            className: Zo,
                            children: (0,
                            g.kW)("ok_game_okxracer_bttmsheet_header_great_job")
                        }), (0,
                        Z.jsx)("p", {
                            className: Ho,
                            children: (0,
                            g.kW)("ok_game_okxracer_bttmsheet_desc_great_job")
                        }), (0,
                        Z.jsx)(A.default, {
                            className: Yo,
                            contentClassName: zo,
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
            const Xo = "NewCampaigns_container__gO1Ko"
              , qo = "NewCampaigns_img__Or37G"
              , Jo = "NewCampaigns_title__Lx+PB"
              , Qo = "NewCampaigns_desc__U9VKz"
              , $o = "NewCampaigns_btn__xIIk1";
            var el = function() {
                var e = (0,
                s.useHistory)()
                  , t = (0,
                s.useLocation)()
                  , n = !1
                  , a = function() {};
                return (0,
                Z.jsxs)(tn, {
                    visible: n,
                    onClose: a,
                    containerClassName: Xo,
                    children: [(0,
                    Z.jsx)(w.A, {
                        pictureClassName: qo,
                        className: qo,
                        src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    Z.jsx)("p", {
                        className: Jo,
                        children: (0,
                        g.kW)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    Z.jsx)("p", {
                        className: Qo,
                        children: (0,
                        g.kW)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    Z.jsx)(cn, {
                        className: $o,
                        onClick: function() {
                            e.push({
                                pathname: He.license,
                                hash: t.hash
                            })
                        },
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            };
            const tl = "TncButton_termsAndConditions__MyIpV";
            var nl = function(e) {
                var t = e.className;
                return (0,
                Z.jsx)(wt.A, {
                    className: k()(tl, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    children: (0,
                    g.kW)("ok_game_okxracer_tnc")
                })
            };
            const al = "AutoPilot_title__NJa0C"
              , rl = "AutoPilot_button__Sg42v";
            var sl = function() {
                var e = $e()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                Z.jsxs)(tn, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    Z.jsx)("div", {
                        className: al,
                        children: (0,
                        g.kW)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            Zt.ZV)(n)
                        })
                    }), (0,
                    Z.jsx)(cn, {
                        className: rl,
                        onClick: a,
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const il = "LandingPage_container__pU2cC"
              , cl = "LandingPage_disclaimer__pVRHC"
              , ol = "LandingPage_recordsBtnContainer__Anr4Y"
              , ll = "LandingPage_content__D0ZLW"
              , ul = "LandingPage_gameHeaderWrapper__NeR1g"
              , dl = "LandingPage_termsAndConditions__MdClU";
            var _l = n(3531);
            const ml = "NewbieWelcome_title__48Py5"
              , pl = "NewbieWelcome_desc__q7GHz"
              , xl = "NewbieWelcome_button__im+B1"
              , hl = "NewbieWelcome_pointsBox__gOjMh"
              , fl = "NewbieWelcome_points__4t75l"
              , vl = "NewbieWelcome_animation__tf9Dj";
            var kl = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = c.A.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                _l.A)((0,
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
                Z.jsx)("div", {
                    ref: e,
                    className: vl
                })
            }
              , gl = function() {
                var e = $e()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                Z.jsxs)(tn, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(kl, {}), (0,
                            Z.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    Z.jsx)("div", {
                        className: hl,
                        children: (0,
                        Z.jsx)("img", {
                            src: "".concat(c.A.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "",
                            className: fl
                        })
                    }), (0,
                    Z.jsx)("div", {
                        className: ml,
                        children: (0,
                        g.kW)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    Z.jsx)("div", {
                        className: pl,
                        children: (0,
                        g.kW)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    Z.jsx)(cn, {
                        className: xl,
                        onClick: t,
                        text: (0,
                        g.kW)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , jl = n(77903);
            const Nl = "UserPointCounter_pointCounter__-QAj8"
              , Al = "UserPointCounter_points__d3HeG"
              , bl = "UserPointCounter_title__B-gN-";
            var Cl = function() {
                var e = $e().points
                  , t = (0,
                jl.A)(e)
                  , n = (0,
                a.useRef)(null)
                  , r = (0,
                a.useCallback)((function(e, t, n) {
                    e <= t && (n((0,
                    Zt.ZV)(String(e))),
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
                        n.current && (n.current.innerText = (0,
                        vr.YW)(e))
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
                    className: Nl,
                    children: [(0,
                    Z.jsxs)("p", {
                        className: bl,
                        children: ["\ud83c\udfc6 ", (0,
                        g.kW)("ok_game_okxracer_available_pts")]
                    }), (0,
                    Z.jsx)("p", {
                        ref: n,
                        className: Al,
                        children: "0"
                    })]
                })
            }
              , wl = n(94735)
              , yl = n(32964);
            function Tl(e) {
                return !!e && "proof"in e
            }
            var Pl = function(e, t) {
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
                                        Tl(_ = null === u || void 0 === u ? void 0 : u.tonProof) && (m = _.proof,
                                        p = m.signature,
                                        x = m.payload,
                                        h = m.domain,
                                        f = m.timestamp,
                                        v = yl.Address.parse(c),
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
              , Sl = function() {
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
                                a = Pl(t, n),
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
              , Bl = function(e) {
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
                                    Sl(n, r);
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
                                    t.sent && null !== c && void 0 !== c && c.appName && ut().set(U, null === c || void 0 === c ? void 0 : c.appName);
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
              , Il = function(e) {
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
            const Wl = "ViewWalletButton_button__WbNMO"
              , El = "ViewWalletButton_btnIcon__W5IFc";
            var Rl = function() {
                var e = $e()
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
                                    Ee({
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
                  , r = Bl(a).connectWallet
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
                                    c = ut(),
                                    l = c.get(U),
                                    (u = l === G.TgWallet ? "https://t.me/OKX_WALLET_BOT/start" : t.tonDeeplink || "") && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i || i.openLink(u)),
                                    e.next = 11;
                                    break;
                                case 7:
                                    return e.next = 9,
                                    r();
                                case 9:
                                    return e.next = 11,
                                    Promise.allSettled([We(), n()]);
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
                wl.A)(s, {
                    wait: 500,
                    leading: !0
                }).run;
                return (0,
                Z.jsxs)(wt.A, {
                    className: Wl,
                    onClick: i,
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: "okx-growth-wallet",
                        className: El
                    }), t.tonAddress ? Il(t.tonAddress || "") : (0,
                    g.kW)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Ll = function() {
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
                    className: il,
                    children: [(0,
                    Z.jsx)("div", {
                        className: ol,
                        children: (0,
                        Z.jsx)(Rl, {})
                    }), (0,
                    Z.jsx)("div", {
                        className: ll,
                        children: (0,
                        Z.jsx)(dr, {
                            header: (0,
                            Z.jsx)(Cl, {}),
                            headerWrapperClassName: ul
                        })
                    }), (0,
                    Z.jsx)(nl, {
                        className: dl
                    }), (0,
                    Z.jsx)("p", {
                        className: cl,
                        children: (0,
                        g.kW)("ok_game_okxracer_disclaimer")
                    }), (0,
                    Z.jsx)(sl, {}), (0,
                    Z.jsx)(gl, {}), (0,
                    Z.jsx)(Vo, {}), (0,
                    Z.jsx)(el, {}), (0,
                    Z.jsx)(Ko, {})]
                })
            }
              , Ol = function() {
                return (0,
                Z.jsx)(ft, {
                    children: (0,
                    Z.jsx)(Ll, {})
                })
            }
              , Dl = n(3901);
            n(48558);
            const Fl = "InviteBanner_bannerContainer__30zHC"
              , Ul = "InviteBanner_bannerIcon__U6pI0"
              , Vl = "InviteBanner_text__3Q8mq"
              , Gl = "InviteBanner_rightIcon__2Ly1W";
            var Ml = function(e) {
                var t = e.className;
                return (0,
                Z.jsxs)(Fn, {
                    className: k()(Fl, t),
                    to: He.referrals,
                    children: [(0,
                    Z.jsx)(b.A, {
                        iconName: "okx-growth-friends",
                        className: Ul
                    }), (0,
                    Z.jsx)("div", {
                        className: Vl,
                        children: (0,
                        g.kW)("ok_game_okxracer_select_season_two_invite_friends")
                    }), (0,
                    Z.jsx)(b.A, {
                        iconName: "okx-growth-chevrons-right",
                        className: Gl
                    })]
                })
            };
            const Zl = "LeaderBoard_container__0DJSO"
              , Hl = "LeaderBoard_inviteBanner__sql+w"
              , Yl = "LeaderBoard_pageTitle__vTUSh"
              , zl = "LeaderBoard_desc__MFxC+"
              , Kl = "LeaderBoard_inviteList__mV9a7"
              , Xl = "LeaderBoard_tabActiveClassName__7Xv4B"
              , ql = "LeaderBoard_tabsContent__KCGtW"
              , Jl = "RankListItem_listItem__zYe9u"
              , Ql = "RankListItem_name__i3zq8"
              , $l = "RankListItem_mask__97bB7"
              , eu = "RankListItem_hightLightRow__6VE4b"
              , tu = "RankListItem_rank__-ky1f"
              , nu = "RankListItem_point__7uHSt"
              , au = "RankListItem_icon__-N6Za"
              , ru = "RankListItem_pointIcon__mAEQj";
            var su = function(e) {
                var t = e.extUserName
                  , n = e.totalPoints
                  , a = e.rank
                  , r = e.isHighlight
                  , s = e.showPointEmoji
                  , i = void 0 === s || s;
                return (0,
                Z.jsxs)("li", {
                    className: k()(Jl, r && eu),
                    children: [(0,
                    Z.jsx)("div", {
                        className: $l
                    }), Bi(a) ? (0,
                    Z.jsx)("span", {
                        className: k()(tu, au),
                        children: Si[a]
                    }) : (0,
                    Z.jsx)("span", {
                        className: tu,
                        children: a > 100 ? "100+" : "#".concat(a)
                    }), (0,
                    Z.jsx)("div", {
                        className: Ql,
                        children: t
                    }), (0,
                    Z.jsxs)("div", {
                        className: nu,
                        children: [i && (0,
                        Z.jsx)("span", {
                            className: ru,
                            children: Si[4]
                        }), (0,
                        g.kW)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            Zt.ZV)(n)
                        })]
                    })]
                })
            };
            const iu = "InviteButton_inviteBtn__gLbFB"
              , cu = "InviteButton_btnA__+dJqi"
              , ou = "InviteButton_btnContainer__lg4rV"
              , lu = "InviteButton_copyButton__znucI"
              , uu = "InviteButton_copyIcon__QZgE9";
            var du = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                g.kW)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = z().uid
                  , s = $e().linkCode
                  , i = M(s)
                  , c = i.shareUrl
                  , o = i.appUrl;
                return (0,
                Z.jsxs)("div", {
                    className: k()(a, ou),
                    children: [(0,
                    Z.jsx)("a", {
                        className: cu,
                        href: c,
                        children: (0,
                        Z.jsx)(cn, {
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
                            className: iu,
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
                        className: lu,
                        children: (0,
                        Z.jsx)(b.A, {
                            iconName: "okx-growth-copy",
                            className: uu
                        })
                    })]
                })
            };
            const _u = "RankList_listHeader__KVGnw"
              , mu = "RankList_InviteButton__D6ute"
              , pu = "RankList_noFirendsNote__Ckkil"
              , xu = "RankList_under__MJ5We"
              , hu = "RankList_rankItemPlaceholder__z-upW"
              , fu = "RankList_rankName__eM52K"
              , vu = "RankList_rankScore__GY5ah";
            var ku = 1
              , gu = 2
              , ju = 3
              , Nu = function(e) {
                var t = e.total;
                return (0,
                Z.jsxs)("div", {
                    className: _u,
                    children: [(0,
                    Z.jsx)("span", {
                        children: (0,
                        g.kW)("ok_game_okxracer_racers_num", {
                            num: (0,
                            Zt.ZV)(t)
                        })
                    }), (0,
                    Z.jsx)("span", {
                        children: (0,
                        g.kW)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Au = function() {
                return (0,
                Z.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        Z.jsxs)("div", {
                            className: hu,
                            children: [(0,
                            Z.jsx)(fs, {
                                className: fu
                            }), (0,
                            Z.jsx)(fs, {
                                className: vu
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , bu = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? ku : t
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
                                    n !== ku) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Te(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Pe(a);
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
                    Z.jsx)(Nu, {
                        total: f
                    }), i ? (0,
                    Z.jsx)(Au, {}) : (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [w && (0,
                        Z.jsx)(su, (0,
                        C.A)((0,
                        C.A)({}, N), {}, {
                            isHighlight: !0
                        })), m.map((function(e, t) {
                            return (0,
                            Z.jsx)(su, (0,
                            C.A)({}, e), "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    Z.jsx)("div", {
                        className: xu
                    }), n === ku && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [1 === m.length && (0,
                        Z.jsx)("div", {
                            className: pu,
                            children: (0,
                            g.kW)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        Z.jsx)(du, {
                            className: mu,
                            text: (0,
                            g.kW)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Cu = function() {
                return (0,
                Z.jsxs)("div", {
                    className: Zl,
                    children: [(0,
                    Z.jsx)(Ml, {
                        className: Hl
                    }), (0,
                    Z.jsx)(ic, {
                        className: Yl,
                        html: (0,
                        g.kW)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            g.kW)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    Z.jsx)("div", {
                        className: zl,
                        children: (0,
                        g.kW)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    Z.jsxs)(Dl.A, {
                        activeClassName: Xl,
                        noPadding: !0,
                        size: Dl.A.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        Z.jsx)(Dl.A.TabPane, {
                            className: ql,
                            tab: (0,
                            g.kW)("ok_game_okxracer_tab_teams"),
                            id: ju,
                            children: (0,
                            Z.jsx)("div", {
                                className: Kl,
                                children: (0,
                                Z.jsx)(Mi, {})
                            })
                        }), (0,
                        Z.jsx)(Dl.A.TabPane, {
                            className: ql,
                            tab: (0,
                            g.kW)("ok_game_okxracer_tab_global"),
                            id: gu,
                            children: (0,
                            Z.jsx)("div", {
                                className: Kl,
                                children: (0,
                                Z.jsx)(bu, {
                                    pageType: gu
                                })
                            })
                        }), (0,
                        Z.jsx)(Dl.A.TabPane, {
                            tab: (0,
                            g.kW)("ok_game_okxracer_tab_friends"),
                            id: ku,
                            className: ql,
                            children: (0,
                            Z.jsx)("div", {
                                className: Kl,
                                children: (0,
                                Z.jsx)(bu, {
                                    pageType: ku
                                })
                            })
                        })]
                    })]
                })
            };
            const wu = "index_page__-xiuX"
              , yu = "index_entering__yddHy";
            var Tu = function(e) {
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
                    return p(yu),
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
                    className: k()(wu, m),
                    children: (0,
                    Z.jsx)(s.Switch, {
                        location: o,
                        children: t
                    })
                })
            }
              , Pu = n(26612);
            const Su = "index_sheetContainer__VPbba"
              , Bu = "index_logo__iAzol"
              , Iu = "index_sheetName__X3wgl"
              , Wu = "index_sheetDesc__BGlZJ"
              , Eu = "index_btn__jg8QD"
              , Ru = "index_secondaryBtn__1oeGV"
              , Lu = "index_btnText__ox2Nh";
            var Ou = function(e) {
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
                    className: Su,
                    children: [i && (0,
                    Z.jsx)(w.A, {
                        src: "".concat(c.A.cdnBaseUrl).concat(i),
                        className: Bu
                    }), (0,
                    Z.jsx)("div", {
                        className: Iu,
                        children: t
                    }), (0,
                    Z.jsx)("div", {
                        className: Wu,
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            vr.YW)(n)
                        }
                    }), d, (0,
                    Z.jsx)(cn, {
                        className: Eu,
                        loading: x,
                        onClick: f,
                        text: r
                    }), _ && (0,
                    Z.jsx)(A.default, {
                        category: A.default.CATEGORY.outline,
                        type: A.default.TYPE.primary,
                        size: A.default.SIZE.lg,
                        className: Ru,
                        onClick: _.onClick,
                        children: (0,
                        Z.jsx)("div", {
                            className: Lu,
                            children: _.text
                        })
                    })]
                })
            }
              , Du = function(e) {
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
                Z.jsx)(Ou, {
                    name: s,
                    desc: r,
                    btnText: i,
                    onPrimaryBtnClick: c
                })
            }
              , Fu = n(76932);
            const Uu = "index_copyBox__6n5nL"
              , Vu = "index_icon__BHdDG"
              , Gu = "index_line__dTaE5";
            var Mu = function(e) {
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
                    className: Uu,
                    children: [(0,
                    Z.jsx)("div", {
                        children: t
                    }), (0,
                    Z.jsx)(b.A, {
                        className: k()("okx-growth-copy", Vu),
                        onClick: r,
                        a11yText: ""
                    }), s && (0,
                    Z.jsxs)(Z.Fragment, {
                        children: [(0,
                        Z.jsx)("span", {
                            className: Gu
                        }), (0,
                        Z.jsx)(b.A, {
                            className: k()("okds-close", Vu),
                            onClick: a,
                            a11yText: ""
                        })]
                    })]
                })
            }
              , Zu = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Hu = "/cdn/assets/imgs/249/014A8107B107466F.png"
              , Yu = [Se.WalletConnect, Se.ConnectEVMChain, Se.OpenLink];
            var zu = [Se.WalletConnect, Se.ConnectEVMChain];
            function Ku(e) {
                if (e.state === R.unfinished)
                    return !0;
                var t = e.context.actionType;
                return zu.includes(t)
            }
            var Xu = function(e) {
                var t = e.doTask
                  , n = e.task
                  , r = Bl(function() {
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
                n.context.actionType !== Se.WalletConnect)
                    return null;
                var i = n.context
                  , c = i.nameFinished
                  , u = i.tonAddress
                  , d = i.btnText
                  , _ = i.btnTextFinishedAndSwitch
                  , m = i.name
                  , p = i.desc;
                return (null === n || void 0 === n ? void 0 : n.state) === R.finished ? (0,
                Z.jsx)(Ou, {
                    name: c,
                    desc: "",
                    btnText: _,
                    logo: Hu,
                    onPrimaryBtnClick: s,
                    children: (0,
                    Z.jsx)(Mu, {
                        text: u
                    })
                }) : (0,
                Z.jsx)(Ou, {
                    name: m,
                    desc: p,
                    btnText: d,
                    logo: Zu,
                    onPrimaryBtnClick: s
                })
            }
              , qu = (0,
            f.A)((0,
            f.A)((0,
            f.A)((0,
            f.A)((0,
            f.A)({}, Se.Normal, Du), Se.OpenLink, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== Se.OpenLink)
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
                Z.jsx)(Ou, {
                    name: s,
                    btnText: i,
                    desc: r,
                    onPrimaryBtnClick: u
                })
            }
            )), Se.WalletConnect, Xu), Se.WalletDepositConnect, (function(e) {
                var t = e.task
                  , n = e.doTask
                  , s = e.walletConnectTask
                  , i = $e().context
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
                var p = Bl(function() {
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
                if (t.context.actionType !== Se.WalletDepositConnect)
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
                Z.jsx)(Ou, {
                    logo: Hu,
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
                    Z.jsx)(Mu, {
                        text: _,
                        showClose: Boolean(s),
                        onClose: x
                    })
                })
            }
            )), Se.ConnectEVMChain, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== Se.ConnectEVMChain)
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
                                    Fu.OKXUniversalConnectUI.init({
                                        dappMetaData: {
                                            icon: V(),
                                            name: "OKX Racer"
                                        },
                                        actionsConfiguration: {
                                            returnStrategy: "tg://resolve"
                                        },
                                        language: c.A.locale,
                                        uiPreferences: {
                                            theme: Fu.THEME.DARK
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
                Z.jsx)(Ou, {
                    name: s,
                    desc: u,
                    btnText: i,
                    logo: d,
                    onPrimaryBtnClick: _
                })
            }
            ))
              , Ju = function(e) {
                var t = e.task
                  , n = e.doTask
                  , a = e.walletConnectTask;
                if (!t)
                    return null;
                var r = t.context.actionType
                  , s = qu[r] || Du;
                return r === Se.WalletDepositConnect && (null === a || void 0 === a ? void 0 : a.state) === R.unfinished && (s = Xu),
                (0,
                Z.jsx)(s, {
                    task: t,
                    doTask: n,
                    walletConnectTask: a
                })
            };
            const Qu = "index_taskItemPlaceholder__hIgHw"
              , $u = "index_task__Y6X8h";
            var ed = function() {
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        Z.jsx)("div", {
                            className: k()(Qu),
                            children: (0,
                            Z.jsx)(fs, {
                                className: $u
                            })
                        }, t)
                    }
                    ))
                })
            };
            const td = "index_taskItem__GMhr8"
              , nd = "index_title__Sfa26"
              , ad = "index_state__XRt4D"
              , rd = "index_itemLeft__XevRg"
              , sd = "index_itemRight__Xjk6R"
              , id = "index_icon__ByKLw"
              , cd = "index_done__m2rDm";
            var od = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context
                  , c = "";
                if (r) {
                    var o = (0,
                    Zt.ZV)(r, {
                        signDisplay: !0
                    })
                      , l = s === R.finished ? "\u2705" : "\ud83c\udfc1";
                    c = "".concat(l, " ").concat(o, " pts")
                }
                return (0,
                Z.jsxs)(wt.A, {
                    className: td,
                    "aria-label": "",
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    Z.jsxs)("div", {
                        className: rd,
                        children: [(0,
                        Z.jsx)("div", {
                            className: nd,
                            children: i.name
                        }), c && (0,
                        Z.jsx)("div", {
                            className: ad,
                            children: c
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: sd,
                        children: s === R.finished ? (0,
                        Z.jsx)("div", {
                            className: cd,
                            children: (0,
                            g.kW)("ok_game_okxracer_done")
                        }) : (0,
                        Z.jsx)(b.A, {
                            className: k()("okx-growth-chevrons-right", id)
                        })
                    })]
                }, a)
            };
            const ld = "index_container__ZnSx5";
            function ud(e) {
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
                        return Yu.includes(t)
                    }(e)) {
                        var t = e.context.actionType
                          , n = e.state;
                        d(e),
                        x(!0),
                        t === Se.WalletConnect && (n === R.finished ? T.act({
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
                                    if (Ku(t)) {
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
                                    Ee(a);
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12,
                                    Re(a);
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
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === Se.WalletConnect
                    }
                    ))
                }
                ), [t]);
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsx)("div", {
                        className: k()(ld, n),
                        children: t.length > 0 ? t.map((function(e) {
                            return (0,
                            Z.jsx)(od, {
                                task: e,
                                onClick: f
                            }, e.id)
                        }
                        )) : (0,
                        Z.jsx)(ed, {})
                    }), c && (0,
                    Z.jsx)(tn, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: h,
                        children: (0,
                        Z.jsx)(Ju, {
                            doTask: v,
                            task: c,
                            walletConnectTask: j
                        })
                    })]
                })
            }
            var dd = (0,
            a.createContext)({
                airdrops: [],
                selectedAirdrop: null,
                loading: !1,
                onSelectAirdrop: function() {}
            })
              , _d = function() {
                return (0,
                a.useContext)(dd)
            }
              , md = function(e) {
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
                    Fe(!0).then((function(e) {
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
                Z.jsx)(dd.Provider, {
                    value: f,
                    children: t
                })
            };
            const pd = {
                container: "index_container__Y851r",
                header: "index_header__4gppM",
                title: "index_title__b+GpQ",
                desc: "index_desc__pU2jR",
                surpriseTitle: "index_surpriseTitle__Uqc-L",
                tasks: "index_tasks__k8-lb",
                taskListHeader: "index_taskListHeader__0FpaY"
            };
            var xd = function() {
                var e = _d().selectedAirdrop
                  , t = (0,
                s.useHistory)().replace
                  , n = (0,
                s.useLocation)().hash;
                if (gs(),
                (0,
                a.useEffect)((function() {
                    e || t(He.tasks + n)
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
                    className: pd.container,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: pd.header,
                        children: [(0,
                        Z.jsx)(ns.A, {
                            size: Pu.A.sm,
                            className: pd.logo,
                            src: "".concat(c.A.cdnBaseUrl).concat(i)
                        }), (0,
                        Z.jsx)("h1", {
                            className: pd.title,
                            children: o
                        })]
                    }), (0,
                    Z.jsx)("p", {
                        className: pd.desc,
                        children: l
                    }), (0,
                    Z.jsx)("div", {
                        className: pd.surpriseTitle,
                        children: (0,
                        g.kW)("ok_game_okxracer_label_surprises_details")
                    }), (0,
                    Z.jsx)("p", {
                        className: pd.desc,
                        children: u
                    }), (0,
                    Z.jsxs)("div", {
                        className: pd.tasks,
                        children: [(0,
                        Z.jsx)("div", {
                            className: pd.taskListHeader,
                            children: (0,
                            g.kW)("ok_game_okxracer_text_phase3_tasks")
                        }), (0,
                        Z.jsx)(ud, {
                            tasks: r
                        })]
                    })]
                })
            };
            const hd = "index_airdropItem__pV1Az"
              , fd = "index_content__ZtejP"
              , vd = "index_airdropIcon__lZwMy"
              , kd = "index_airdropIconLoading__S1N9H"
              , gd = "index_title__19JPa"
              , jd = "index_desc__ekknt"
              , Nd = "index_arrow__Y8OCn"
              , Ad = "index_airdropItemPlaceholder__bL5jl";
            var bd = function(e) {
                var t = e.airdrop
                  , n = e.onClick
                  , a = t.logo
                  , r = t.groupSubTitle
                  , s = t.groupTitle;
                return (0,
                Z.jsxs)(wt.A, {
                    "aria-label": "",
                    className: hd,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    Z.jsxs)("div", {
                        className: fd,
                        children: [(0,
                        Z.jsx)(w.A, {
                            className: vd,
                            src: "".concat(c.A.cdnBaseUrl).concat(a)
                        }), (0,
                        Z.jsx)("div", {
                            className: gd,
                            children: s
                        }), (0,
                        Z.jsx)("div", {
                            className: jd,
                            children: r
                        })]
                    }), (0,
                    Z.jsx)(b.A, {
                        className: k()("okds-arrow-chevron-right-centered-sm", Nd)
                    })]
                })
            }
              , Cd = function() {
                return (0,
                Z.jsxs)("div", {
                    className: k()(hd, Ad),
                    children: [(0,
                    Z.jsx)(fs, {
                        className: kd
                    }), (0,
                    Z.jsx)(fs, {
                        className: gd
                    }), (0,
                    Z.jsx)(fs, {
                        className: jd
                    })]
                })
            };
            const wd = "index_offsetMarginContainer__2NtPr"
              , yd = "index_title__+65IJ"
              , Td = "index_count__F-PWh"
              , Pd = "index_airdropContainer__Gun3r"
              , Sd = "index_paddingPlaceholder__X2M3o";
            var Bd = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = _d()
                  , a = n.airdrops
                  , r = n.onSelectAirdrop
                  , i = n.loading
                  , c = Ls().isCertified
                  , o = (0,
                s.useHistory)()
                  , l = (0,
                s.useLocation)()
                  , u = function(e) {
                    c ? (r(e),
                    o.push({
                        pathname: He.airdrop,
                        hash: l.hash
                    })) : t()
                }
                  , d = a.length;
                return i || 0 !== d ? (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("p", {
                        className: yd,
                        children: [(0,
                        g.kW)("ok_game_okxracer_label_airdrop_surprises"), "\xa0", (0,
                        Z.jsxs)("span", {
                            className: Td,
                            children: ["(", d, ")"]
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: k()((0,
                        f.A)({}, wd, d > 1)),
                        children: (0,
                        Z.jsxs)("div", {
                            className: Pd,
                            children: [i ? (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)(Cd, {}), (0,
                                Z.jsx)(Cd, {}), (0,
                                Z.jsx)(Cd, {})]
                            }) : (0,
                            Z.jsx)(Z.Fragment, {
                                children: a.map((function(e) {
                                    return (0,
                                    Z.jsx)(bd, {
                                        airdrop: e,
                                        onClick: u
                                    }, e.groupId)
                                }
                                ))
                            }), d > 1 ? (0,
                            Z.jsx)("div", {
                                className: Sd
                            }) : null]
                        })
                    })]
                }) : null
            }
              , Id = n(98640);
            n(18279);
            const Wd = "Campaigns_title__a2IwB"
              , Ed = "Campaigns_count__LxNZj"
              , Rd = "Campaigns_loaderContainer__tSglx"
              , Ld = "Campaigns_list__y6Ye0"
              , Od = "Campaigns_noCampaigns__faP1c"
              , Dd = "Campaigns_desc__q+hH9"
              , Fd = "Campaigns_termsAndConditions__RfsOE";
            var Ud = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = Ls().isCertified
                  , r = (0,
                a.useContext)($c)
                  , s = r.campaigns
                  , i = r.loading;
                var c = n ? (0,
                Z.jsx)(Id.A.State, {
                    type: Id.A.State.TYPE.noRecord,
                    className: Od,
                    title: (0,
                    g.kW)("ok_game_okxracer_title_phase421_no_campaigns"),
                    description: (0,
                    Z.jsx)("p", {
                        className: Dd,
                        children: (0,
                        g.kW)("ok_game_okxracer_text_phase421_stay_tuned")
                    })
                }) : (0,
                Z.jsx)(Ws, {
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
                        className: Wd,
                        children: [(0,
                        g.kW)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", o && (0,
                        Z.jsxs)("span", {
                            className: Ed,
                            children: ["(", s.length, ")"]
                        })]
                    }), i && (0,
                    Z.jsx)("div", {
                        className: Rd,
                        children: (0,
                        Z.jsx)(na.A, {})
                    }), !i && 0 === s.length && c, (0,
                    Z.jsx)("ul", {
                        className: Ld,
                        children: s.map((function(e) {
                            return (0,
                            Z.jsx)(Ws, {
                                campaign: e,
                                btnText: (0,
                                g.kW)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    n ? function(e) {
                                        nn({
                                            children: (0,
                                            Z.jsx)(xs, {
                                                campaign: e
                                            })
                                        })
                                    }(e) : t()
                                }
                            }, e.startDate)
                        }
                        ))
                    }), !n && (0,
                    Z.jsx)(nl, {
                        className: Fd
                    })]
                })
            }
              , Vd = function() {
                var e = Ls().accountBindingInfo || {}
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
            const Gd = {
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
            var Md = function() {
                var e = Vd()
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
                gs(),
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
                    className: Gd.container,
                    children: (0,
                    Z.jsx)("div", {
                        className: Gd.cardBox,
                        children: (0,
                        Z.jsxs)("div", {
                            className: k()(Gd.content, x ? Gd.fadeIn : Gd.fadeOut),
                            children: [(0,
                            Z.jsx)("div", {
                                className: Gd.levelLogoBox,
                                children: (0,
                                Z.jsx)("img", {
                                    src: null !== v && void 0 !== v && v.logo ? "".concat(c.A.cdnBaseUrl).concat(null === v || void 0 === v ? void 0 : v.logo) : "".concat(c.A.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "",
                                    className: k()(Gd.levelLogo, t >= d ? Gd.logoLight : Gd.logoGrade)
                                })
                            }), 0 !== d && (0,
                            Z.jsx)(b.A, {
                                className: k()("okds-arrow-chevron-left-centered-md", Gd.leftBtn, Gd.switchBtn),
                                onClick: N,
                                a11yText: ""
                            }), d !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            Z.jsx)(b.A, {
                                className: k()("okds-arrow-chevron-right-centered-md", Gd.rightBtn, Gd.switchBtn),
                                onClick: A,
                                a11yText: ""
                            }), (0,
                            Z.jsx)("div", {
                                className: Gd.currentGrade,
                                children: f && (0,
                                g.kW)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            Z.jsx)("div", {
                                className: Gd.gradeTitle,
                                children: null === v || void 0 === v ? void 0 : v.pointGradeName
                            }), (0,
                            Z.jsx)("div", {
                                className: Gd.progressNum,
                                children: v ? f && C ? (0,
                                Z.jsxs)(Z.Fragment, {
                                    children: [(0,
                                    Z.jsx)("span", {
                                        children: (0,
                                        Zt.ZV)(i)
                                    }), "\xa0", (0,
                                    g.kW)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : f ? (0,
                                Z.jsxs)(Z.Fragment, {
                                    children: [(0,
                                    Z.jsx)("span", {
                                        children: (0,
                                        Zt.ZV)(i)
                                    }), " /", " ", (0,
                                    Zt.ZV)(v.upperBound), "\xa0", (0,
                                    g.kW)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                Z.jsx)(Z.Fragment, {
                                    children: v.upperBound ? (0,
                                    g.kW)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        Zt.ZV)(v.lowerBound),
                                        top: (0,
                                        Zt.ZV)(v.upperBound)
                                    }) : (0,
                                    g.kW)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        Zt.ZV)(v.lowerBound)
                                    })
                                }) : ""
                            }), f && !C && (0,
                            Z.jsx)("div", {
                                className: Gd.progressSlide,
                                children: (0,
                                Z.jsx)("div", {
                                    className: Gd.progress,
                                    style: {
                                        width: "".concat(i / (Number(null === v || void 0 === v ? void 0 : v.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const Zd = "License_loader__4L8AA"
              , Hd = "License_container__MxoNJ"
              , Yd = "License_pageTitle__h+Yja"
              , zd = "License_verifiedUsers__q-uxi"
              , Kd = "License_avatars__3HegJ"
              , Xd = "License_usersCount__fkW5h"
              , qd = "NeonBox_container__0efrL"
              , Jd = "NeonBox_certified__dDOGg"
              , Qd = "NeonBox_backgroundWrapper__dblpl"
              , $d = "NeonBox_content__T1f+D"
              , e_ = "NeonBox_header__jMjn9";
            var t_ = function(e) {
                var t = e.children
                  , n = e.isCertified
                  , a = void 0 === n || n
                  , r = e.header;
                return (0,
                Z.jsxs)("div", {
                    className: k()(qd, a && Jd),
                    children: [r && (0,
                    Z.jsx)("div", {
                        className: e_,
                        children: r
                    }), (0,
                    Z.jsx)("div", {
                        className: k()(Qd),
                        children: (0,
                        Z.jsx)("div", {
                            className: $d,
                            children: t
                        })
                    })]
                })
            };
            const n_ = "LicenseCard_licenseCard__+wyQA"
              , a_ = "LicenseCard_header__LUvW7"
              , r_ = "LicenseCard_title__rMFOB"
              , s_ = "LicenseCard_content__i2ESe"
              , i_ = "LicenseCard_innerCard__n57Gb"
              , c_ = "LicenseCard_details__boiyi"
              , o_ = "LicenseCard_label__JX11k"
              , l_ = "LicenseCard_link__19+Q+"
              , u_ = "LicenseCard_linkIcon__oNENM"
              , d_ = "LicenseCard_points__MkLL5"
              , __ = "LicenseCard_icon__b6JLr"
              , m_ = "LicenseCard_certifyBtn__Z6vHo"
              , p_ = "LicenseCard_infoPopoverDesc__Km8Og"
              , x_ = "LicenseCard_gradeImage__fd+PJ";
            var h_ = function() {
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
              , f_ = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = $e().accumPoints
                  , a = Ls()
                  , r = a.accountBindingInfo
                  , s = a.isCertified
                  , i = Vd().currentGrade;
                return (0,
                Z.jsx)("section", {
                    className: n_,
                    children: (0,
                    Z.jsx)(t_, {
                        isCertified: s,
                        header: (0,
                        Z.jsxs)("div", {
                            className: a_,
                            children: [(0,
                            Z.jsx)(h_, {}), (0,
                            Z.jsx)("span", {
                                className: r_,
                                children: s ? (0,
                                g.kW)("ok_game_okxracer_label_phase4_certified") : (0,
                                g.kW)("ok_game_okxracer_label_phase4_uncertified")
                            })]
                        }),
                        children: (0,
                        Z.jsxs)("div", {
                            className: s_,
                            children: [(0,
                            Z.jsxs)("div", {
                                className: i_,
                                children: [(0,
                                Z.jsxs)("div", {
                                    className: c_,
                                    children: [(0,
                                    Z.jsx)("p", {
                                        className: o_,
                                        children: (0,
                                        g.kW)("ok_game_okxracer_title_phase4_racer_grade")
                                    }), (0,
                                    Z.jsxs)(Fn, {
                                        to: He.licenseGrades,
                                        className: l_,
                                        children: [(0,
                                        Or.z)(null === r || void 0 === r ? void 0 : r.pointGradeName), (0,
                                        Z.jsx)(b.A, {
                                            iconName: "okds-arrow-chevron-right-centered-md",
                                            className: u_
                                        })]
                                    }), (0,
                                    Z.jsxs)("div", {
                                        className: d_,
                                        children: [(0,
                                        Z.jsx)("span", {
                                            className: o_,
                                            children: (0,
                                            g.kW)("ok_game_okxracer_text_phase3_total_pts_earned")
                                        }), "\xa0", (0,
                                        Zt.ZV)(n), (0,
                                        Z.jsx)(ts.A, {
                                            title: (0,
                                            g.kW)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                            contentClassName: p_,
                                            children: (0,
                                            Z.jsx)(b.A, {
                                                iconName: "okx-growth-information",
                                                className: __
                                            })
                                        })]
                                    })]
                                }), i && (0,
                                Z.jsx)(w.A, {
                                    pictureClassName: x_,
                                    className: x_,
                                    src: "".concat(c.A.cdnBaseUrl, "/").concat(i.logo)
                                })]
                            }), !s && (0,
                            Z.jsx)(cn, {
                                className: m_,
                                size: A.default.SIZE.md,
                                text: (0,
                                g.kW)("ok_game_okxracer_btn_phase4_certify"),
                                onClick: t
                            })]
                        })
                    })
                })
            }
              , v_ = function() {
                var e, t = z().uid, n = Ls(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, d = n.isLoading, _ = (0,
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
                        className: Zd,
                        children: (0,
                        Z.jsx)(na.A, {})
                    });
                var f = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0
                  , v = function() {
                    x(!0)
                };
                return (0,
                Z.jsxs)(Z.Fragment, {
                    children: [(0,
                    Z.jsxs)("div", {
                        className: Hd,
                        children: [!s && (0,
                        Z.jsxs)(Z.Fragment, {
                            children: [(0,
                            Z.jsx)(ic, {
                                className: Yd,
                                html: (0,
                                g.kW)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            Z.jsxs)("div", {
                                className: zd,
                                children: [(0,
                                Z.jsx)(w.A, {
                                    className: Kd,
                                    src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                Z.jsx)("span", {
                                    className: Xd,
                                    children: f > 0 ? (0,
                                    Zt.ZV)(f) : "--"
                                }), (0,
                                g.kW)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        Z.jsx)(f_, {
                            showCertifyBottomSheet: v
                        }), (0,
                        Z.jsx)(Bd, {
                            showCertifyBottomSheet: v
                        }), (0,
                        Z.jsx)(Ud, {
                            showCertifyBottomSheet: v
                        })]
                    }), (0,
                    Z.jsx)(Qs, {
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
              , k_ = function() {
                return (0,
                Z.jsx)(md, {
                    children: (0,
                    Z.jsxs)(Tu, {
                        animationPath: [He.licenseGrades],
                        children: [(0,
                        Z.jsx)(s.Route, {
                            path: He.license,
                            component: v_,
                            exact: !0
                        }), (0,
                        Z.jsx)(s.Route, {
                            path: He.airdrop,
                            component: xd,
                            exact: !0
                        }), (0,
                        Z.jsx)(s.Route, {
                            path: He.licenseGrades,
                            component: io(Md),
                            exact: !0
                        })]
                    })
                })
            };
            const g_ = "QrCode_container__r4Fu7"
              , j_ = "QrCode_qrCode__16PWa"
              , N_ = "QrCode_title__+cibb"
              , A_ = "QrCode_message__eaOzW";
            var b_ = function() {
                return (0,
                Z.jsxs)("div", {
                    className: g_,
                    children: [(0,
                    Z.jsx)(w.A, {
                        className: j_,
                        src: "".concat(c.A.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    Z.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            vr.YW)((0,
                            g.kW)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: N_
                    }), (0,
                    Z.jsx)("p", {
                        className: A_,
                        children: (0,
                        g.kW)("ok_game_okxracer_browser_msg")
                    })]
                })
            };
            const C_ = "PullupList_loading__+51Dh"
              , w_ = "PullupList_listLoadItem__XcvkH"
              , y_ = "PullupList_listLeft__4eGh6"
              , T_ = "PullupList_listRight__w7Ely"
              , P_ = "PullupList_listLoading__whJeg";
            var S_ = function() {
                return (0,
                Z.jsxs)("div", {
                    className: k()(w_),
                    children: [(0,
                    Z.jsx)(fs, {
                        className: y_
                    }), (0,
                    Z.jsx)(fs, {
                        className: T_
                    })]
                })
            }
              , B_ = function() {
                return (0,
                Z.jsx)("div", {
                    className: P_,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        Z.jsx)(S_, {}, t)
                    }
                    ))
                })
            }
              , I_ = function(e) {
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
                                        es.A)(e), (0,
                                        es.A)(n.rows))
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
                wl.A)(j, {
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
                        className: C_,
                        ref: h,
                        children: m && (0,
                        Z.jsx)(B_, {})
                    })]
                })
            };
            const W_ = "InviteList_listItem__q4jhG"
              , E_ = "InviteList_name__LLQgt"
              , R_ = "InviteList_point__kXtCn"
              , L_ = "InviteList_earnedPrice__4vAfw"
              , O_ = "InviteList_pointNumber__v4P1H";
            var D_ = function() {
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
                                    ye(s, a);
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
                        className: L_,
                        children: (0,
                        g.Vp)("ok_game_okxracer_refer_points", {
                            points: (0,
                            Z.jsx)("span", {
                                className: O_,
                                children: (0,
                                g.kW)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    Zt.ZV)(n)
                                })
                            })
                        })
                    }), (0,
                    Z.jsx)(I_, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            Z.jsxs)("div", {
                                className: W_,
                                children: [(0,
                                Z.jsx)("div", {
                                    className: E_,
                                    children: e.extInviteeName
                                }), (0,
                                Z.jsx)("div", {
                                    className: R_,
                                    children: (0,
                                    g.kW)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        Zt.ZV)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const F_ = "ReferralsPage_container__V48m1"
              , U_ = "ReferralsPage_inviteDetail__L1MhM"
              , V_ = "ReferralsPage_detailItem__ujOp+"
              , G_ = "ReferralsPage_dot__zKW7L"
              , M_ = "ReferralsPage_detailTitle__OE657"
              , Z_ = "ReferralsPage_detailInfo__YC+Y9"
              , H_ = "ReferralsPage_inviteList__Jksx8";
            var Y_ = function() {
                var e = z().uid;
                return gs(),
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
                    className: F_,
                    children: [(0,
                    Z.jsx)(ic, {
                        html: "".concat((0,
                        g.kW)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        g.kW)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    Z.jsx)("div", {
                        className: U_,
                        children: (0,
                        Z.jsxs)("div", {
                            className: V_,
                            children: [(0,
                            Z.jsx)("div", {
                                className: G_
                            }), (0,
                            Z.jsx)("div", {
                                className: M_,
                                children: (0,
                                g.kW)("ok_game_okxracer_refer_your_friends")
                            }), (0,
                            Z.jsx)("div", {
                                className: Z_,
                                children: (0,
                                g.kW)("ok_game_okxracer_refer_rewards")
                            })]
                        })
                    }), (0,
                    Z.jsx)("div", {
                        className: H_,
                        children: (0,
                        Z.jsx)(D_, {})
                    }), (0,
                    Z.jsx)(du, {})]
                })
            }
              , z_ = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , K_ = (0,
            a.createContext)({
                tasks: z_,
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
              , X_ = function() {
                return (0,
                a.useContext)(K_)
            }
              , q_ = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(z_)
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
                  , p = $e().updateGameInfoFromServer
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
                                We(!0);
                            case 2:
                                n = e.sent,
                                i(null !== (t = n.data) && void 0 !== t ? t : z_);
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
                                Promise.allSettled([We(), p()]);
                            case 2:
                                t = e.sent,
                                n = (0,
                                u.A)(t, 1),
                                a = n[0],
                                "fulfilled" === a.status && (c = null !== (r = null === (s = a.value) || void 0 === s ? void 0 : s.data) && void 0 !== r ? r : z_,
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
                ))), [_, p])
                  , v = (0,
                a.useMemo)((function() {
                    return {
                        tasks: s,
                        executeTaskSuccessCallback: f,
                        partner: _,
                        setSelectedPartner: h
                    }
                }
                ), [f, _, h, s]);
                return (0,
                Z.jsx)(K_.Provider, {
                    value: v,
                    children: t
                })
            };
            const J_ = {
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
            var Q_ = function() {
                var e = X_()
                  , t = e.partner
                  , n = e.executeTaskSuccessCallback
                  , r = (0,
                s.useHistory)().replace
                  , i = (0,
                s.useLocation)().hash;
                if (gs(),
                (0,
                a.useEffect)((function() {
                    t || r(He.tasks + i)
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
                    className: J_.container,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: J_.header,
                        children: [(0,
                        Z.jsx)(ns.A, {
                            size: Pu.A.sm,
                            className: J_.logo,
                            src: "".concat(c.A.cdnBaseUrl).concat(d)
                        }), (0,
                        Z.jsx)("h1", {
                            className: J_.title,
                            children: _
                        })]
                    }), (0,
                    Z.jsx)("p", {
                        className: J_.desc,
                        children: m
                    }), (0,
                    Z.jsxs)("div", {
                        className: J_.status,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: J_.statusItem,
                            children: [(0,
                            Z.jsx)("div", {
                                className: J_.statusTitle,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            Z.jsx)("div", {
                                className: J_.statusValue,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    Zt.ZV)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            className: J_.statusItem,
                            children: [(0,
                            Z.jsx)("div", {
                                className: J_.statusTitle,
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            Z.jsxs)("div", {
                                className: J_.statusValue,
                                children: [(0,
                                Z.jsx)(b.A, {
                                    className: k()("okx-growth-friends", J_.participantsIcon)
                                }), Zt.Ru.shortNumber(x, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: J_.tasks,
                        children: [(0,
                        Z.jsxs)("div", {
                            className: J_.taskListHeader,
                            children: [(0,
                            Z.jsx)("span", {
                                children: (0,
                                g.kW)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            Z.jsx)("span", {
                                className: J_.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    vr.YW)((0,
                                    g.kW)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(o, "/").concat(l)
                                    }))
                                }
                            })]
                        }), (0,
                        Z.jsx)(ud, {
                            tasks: u,
                            executeTaskCallback: n
                        })]
                    })]
                })
            };
            const $_ = "index_partnerItem__S1dkf"
              , em = "index_title__bRRMU"
              , tm = "index_points__WQSip"
              , nm = "index_state__gi-nK"
              , am = "index_logo__y4rK-"
              , rm = "index_item-left__ej9+1"
              , sm = "index_item-right__3KRWi"
              , im = "index_dot__4bynu"
              , cm = "index_participantsIcon__-tYh0"
              , om = "index_icon__gS69A";
            var lm = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                Z.jsxs)("div", {
                    className: $_,
                    children: [(0,
                    Z.jsx)(ns.A, {
                        size: Pu.A.sm,
                        className: am,
                        src: "".concat(c.A.cdnBaseUrl).concat(i)
                    }), (0,
                    Z.jsxs)("div", {
                        className: rm,
                        children: [(0,
                        Z.jsx)("div", {
                            className: em,
                            children: t
                        }), (0,
                        Z.jsx)("div", {
                            className: tm,
                            children: (0,
                            g.kW)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                Zt.ZV)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        Z.jsxs)("div", {
                            className: nm,
                            children: [(0,
                            Z.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    vr.YW)((0,
                                    g.kW)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            Z.jsx)("span", {
                                className: im
                            }), (0,
                            Z.jsx)(b.A, {
                                className: k()("okx-growth-friends", cm)
                            }), (0,
                            Z.jsx)("em", {
                                children: Zt.Ru.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    Z.jsx)("div", {
                        className: sm,
                        children: (0,
                        Z.jsx)(b.A, {
                            className: k()("okx-growth-chevrons-right", om)
                        })
                    })]
                })
            };
            const um = "index_container__wKNP9";
            function dm(e) {
                var t = e.tasks
                  , n = e.className
                  , a = X_().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                Z.jsx)("div", {
                    className: k()(um, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , c = e.logo;
                        return (0,
                        Z.jsx)(Fn, {
                            to: He.partner,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            Z.jsx)(lm, {
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
                    Z.jsx)(ed, {})
                })
            }
            const _m = "TaskArea_tabPane__irXs6"
              , mm = "TaskArea_tabName__-BL2R"
              , pm = "TaskArea_list__cqK4t";
            var xm = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                g.kW)("ok_game_okxracer_tab_partner_tasks") : (0,
                g.kW)("ok_game_okxracer_tab_my_tasks");
                return (0,
                Z.jsxs)("div", {
                    className: mm,
                    children: [r, " ", (0,
                    Z.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , hm = function() {
                var e = X_()
                  , t = e.tasks
                  , n = e.executeTaskSuccessCallback
                  , a = t.taskGroups
                  , r = t.ungroupedTasks;
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: (0,
                    Z.jsxs)(Dl.A.Underline, {
                        size: Dl.A.SIZE.xl,
                        children: [(0,
                        Z.jsx)(Dl.A.TabPane, {
                            className: _m,
                            tab: (0,
                            Z.jsx)(xm, {
                                isPartner: !0,
                                count: a.length
                            }),
                            id: "partner",
                            children: (0,
                            Z.jsx)(dm, {
                                tasks: a,
                                className: pm
                            })
                        }), (0,
                        Z.jsx)(Dl.A.TabPane, {
                            className: _m,
                            tab: (0,
                            Z.jsx)(xm, {
                                count: r.length
                            }),
                            id: "own",
                            children: (0,
                            Z.jsx)(ud, {
                                tasks: r,
                                className: pm,
                                executeTaskCallback: n
                            })
                        })]
                    })
                })
            };
            const fm = "TaskPage_container__5KfIM"
              , vm = "TaskPage_block__kt8oo"
              , km = "TaskPage_pointsContainer__+vQ2y"
              , gm = "TaskPage_points__+UHeE"
              , jm = "TaskPage_label__-ivvS";
            var Nm = function() {
                var e = $e().accumPoints;
                return (0,
                Z.jsxs)("div", {
                    className: fm,
                    children: [(0,
                    Z.jsxs)("div", {
                        className: k()(vm, km),
                        children: [(0,
                        Z.jsx)("p", {
                            className: gm,
                            children: (0,
                            Zt.ZV)(e)
                        }), (0,
                        Z.jsxs)("div", {
                            className: jm,
                            children: [(0,
                            g.kW)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                            Z.jsx)(ts.A, {
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
                        className: vm,
                        children: (0,
                        Z.jsx)(hm, {})
                    })]
                })
            }
              , Am = function() {
                return (0,
                Z.jsx)(q_, {
                    children: (0,
                    Z.jsxs)(s.Switch, {
                        children: [(0,
                        Z.jsx)(s.Route, {
                            path: He.tasks,
                            component: Nm,
                            exact: !0
                        }), (0,
                        Z.jsx)(s.Route, {
                            path: He.partner,
                            component: Q_,
                            exact: !0
                        })]
                    })
                })
            }
              , bm = O
              , Cm = (0,
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
              , wm = function(e) {
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
                  , v = $e().updateGameInfoFromServer
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
                                Be(!0);
                            case 3:
                                n = e.sent,
                                a = n.data,
                                r = null === a || void 0 === a ? void 0 : a.boostGroups,
                                i(r || {}),
                                f(null !== (t = null === r || void 0 === r ? void 0 : r[bm]) && void 0 !== t ? t : []),
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
                  , g = (0,
                a.useCallback)(function() {
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
                                    Ie({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Be(), v()]);
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
                }(), [_, v])
                  , j = (0,
                a.useCallback)((function(e) {
                    var t;
                    m(e),
                    f(null !== (t = null === s || void 0 === s ? void 0 : s[e]) && void 0 !== t ? t : [])
                }
                ), [s]);
                (0,
                a.useEffect)((function() {
                    k()
                }
                ), [k]);
                var N = (0,
                a.useMemo)((function() {
                    return {
                        boosts: h,
                        upgradeBoost: g,
                        onChangeTab: j,
                        activeTabId: _,
                        boostGroups: s
                    }
                }
                ), [_, s, h, j, g]);
                return (0,
                Z.jsx)(Cm.Provider, {
                    value: N,
                    children: t
                })
            }
              , ym = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === L.DailyBoost
            }
              , Tm = function(e) {
                return "actionType"in e && e.actionType === Se.UnLock
            }
              , Pm = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !ym(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                g.kW)("ok_game_okxracer_free") : "".concat((0,
                Zt.ZV)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const Sm = "index_mainContainer__G1QC-"
              , Bm = "index_sheetIcon__cdTfT"
              , Im = "index_sheetTitle__BnrED"
              , Wm = "index_sheetDesc__DtfoF"
              , Em = "index_maxLevelText__esnYu"
              , Rm = "index_levelArrowRight__MPbSr"
              , Lm = "index_sheetLowerContentContainer__doUtU"
              , Om = "index_pointCostText__GT5Jc"
              , Dm = "index_sheetLvlTextContainer__UWjtN"
              , Fm = "index_btmBtn__6S1L3"
              , Um = "index_boostDataSplitPoint__IpW+U";
            var Vm = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.context
                  , r = t.curStage
                  , s = t.totalStage
                  , i = t.isLocked
                  , o = a.logo
                  , l = a.name
                  , u = Tm(a)
                  , d = ym(t)
                  , _ = r === s
                  , m = function(e) {
                    var t = e.context
                      , n = Tm(t)
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
                    className: Sm,
                    children: [(0,
                    Z.jsx)(w.A, {
                        className: Bm,
                        src: "".concat(c.A.cdnBaseUrl).concat(o)
                    }), (0,
                    Z.jsx)("div", {
                        className: Im,
                        children: l
                    }), (0,
                    Z.jsx)("div", {
                        className: Wm,
                        children: p
                    }), f && (0,
                    Z.jsx)("div", {
                        className: Em,
                        children: (0,
                        g.kW)("ok_game_okxracer_bttmsheet_title_out_of_upgrades")
                    }), !u && (0,
                    Z.jsxs)("div", {
                        className: Lm,
                        children: [(0,
                        Z.jsx)("span", {
                            className: Om,
                            children: Pm(t)
                        }), (d || r < s) && (0,
                        Z.jsx)("span", {
                            className: Um
                        }), (0,
                        Z.jsx)("span", {
                            className: Dm,
                            children: d ? "".concat(s - r, "/").concat(s) : (0,
                            Z.jsxs)(Z.Fragment, {
                                children: [(0,
                                Z.jsx)("span", {
                                    children: (0,
                                    g.kW)("ok_game_okxracer_lvl_num", {
                                        num: (0,
                                        Zt.ZV)(r)
                                    })
                                }), !_ && (0,
                                Z.jsxs)(Z.Fragment, {
                                    children: [(0,
                                    Z.jsx)(b.A, {
                                        iconName: "okds-arrow-pointer-right-xs",
                                        className: Rm
                                    }), (0,
                                    Z.jsx)("span", {
                                        children: r + 1
                                    })]
                                })]
                            })
                        })]
                    }), u && i ? (0,
                    Z.jsx)(Fn, {
                        to: He.license,
                        className: Fm,
                        children: (0,
                        Z.jsx)(cn, {
                            text: x
                        })
                    }) : (0,
                    Z.jsx)(cn, {
                        className: Fm,
                        onClick: function() {
                            n(t)
                        },
                        text: x,
                        disabled: h
                    })]
                })
            };
            const Gm = "index_item__WVCYh"
              , Mm = "index_boostIcon__b-AgD"
              , Zm = "index_lockedImg__hcZKX"
              , Hm = "index_boostTitle__3O4LG"
              , Ym = "index_boostData__8p7IB"
              , zm = "index_pointCost__kbrVo"
              , Km = "index_boostDataStage__Cq2Wk"
              , Xm = "index_boostDataSplitPoint__srkQ2"
              , qm = "index_locked__kzoiq"
              , Jm = "index_filterLayer__K66jH"
              , Qm = "index_unlockIcon__bxDY1";
            var $m = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context
                  , i = n === a;
                if (Tm(s)) {
                    if (r)
                        return (0,
                        Z.jsx)("div", {
                            className: Ym,
                            children: (0,
                            g.kW)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (i)
                        return (0,
                        Z.jsx)("div", {
                            className: Ym,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                Z.jsxs)("div", {
                    className: Ym,
                    children: [(0,
                    Z.jsx)("span", {
                        className: zm,
                        children: Pm(t)
                    }), (ym(t) || n < a) && (0,
                    Z.jsx)("span", {
                        className: Xm
                    }), (0,
                    Z.jsx)("span", {
                        className: Km,
                        children: ym(t) ? "".concat(a - n, "/").concat(a) : (0,
                        g.kW)("ok_game_okxracer_lvl_num", {
                            num: n
                        })
                    })]
                })
            }
              , ep = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , o = r.logo;
                return (0,
                Z.jsxs)(wt.A, {
                    className: Gm,
                    "aria-label": "",
                    onClick: function() {
                        n(a)
                    },
                    children: [s && (0,
                    Z.jsxs)("div", {
                        className: qm,
                        children: [(0,
                        Z.jsx)("div", {
                            className: Jm
                        }), (0,
                        Z.jsx)(b.A, {
                            className: k()("okx-growth-lock", Qm)
                        }), (0,
                        Z.jsx)(w.A, {
                            className: k()(Mm, Zm),
                            src: "".concat(c.A.cdnBaseUrl).concat(o)
                        })]
                    }), !s && (0,
                    Z.jsx)(w.A, {
                        className: Mm,
                        src: "".concat(c.A.cdnBaseUrl).concat(o)
                    }), (0,
                    Z.jsxs)("div", {
                        children: [(0,
                        Z.jsx)("div", {
                            className: Hm,
                            children: i
                        }), (0,
                        Z.jsx)($m, {
                            boost: t
                        })]
                    })]
                }, a)
            };
            const tp = "index_taskItemPlaceholder__oZw1l"
              , np = "index_task__FcEoo";
            var ap = function() {
                return (0,
                Z.jsx)(Z.Fragment, {
                    children: Array.from({
                        length: 4
                    }).map((function(e, t) {
                        return (0,
                        Z.jsx)("div", {
                            className: tp,
                            children: (0,
                            Z.jsx)(fs, {
                                className: np
                            })
                        }, t)
                    }
                    ))
                })
            };
            const rp = "index_listContainer__tebx+";
            var sp = function(e) {
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
                    className: rp,
                    children: t.length > 0 ? (0,
                    Z.jsx)(Z.Fragment, {
                        children: t.map((function(e) {
                            return (0,
                            Z.jsx)(ep, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    Z.jsx)(ap, {})
                })
            };
            const ip = "BoostArea_boostArea__gZTfx"
              , cp = "BoostArea_container__EZWGV";
            var op = function(e) {
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
                  , x = $e().points
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
                        className: ip,
                        children: (0,
                        Z.jsxs)("div", {
                            className: cp,
                            children: [(0,
                            Z.jsx)(sp, {
                                boosts: t,
                                onClick: f
                            }), (0,
                            Z.jsx)(tn, {
                                noContentPadding: !0,
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                Z.jsx)(Vm, {
                                    boost: i,
                                    onClick: h
                                })
                            })]
                        })
                    })
                })
            };
            const lp = "PointsCard_pointsContainer__n4L96"
              , up = "PointsCard_pointsNameBigger__1Jh4o"
              , dp = "PointsCard_pointsNameSmaller__9mb7i"
              , _p = "PointsCard_pointsValue__qFFcW"
              , mp = "PointsCard_availablePointsValue__jngSf"
              , pp = "PointsCard_pointsDetails__qk6eJ"
              , xp = "PointsCard_infoIcon__9W3Z-";
            var hp = function() {
                var e = $e()
                  , t = e.points
                  , n = e.autopilotPointsPerHour
                  , a = e.basePoint
                  , r = Yr().matchInfo;
                return (0,
                Z.jsxs)(t_, {
                    children: [(0,
                    Z.jsxs)("div", {
                        className: lp,
                        children: [(0,
                        Z.jsx)("div", {
                            className: up,
                            children: (0,
                            g.kW)("ok_game_okxracer_available_pts")
                        }), (0,
                        Z.jsx)("div", {
                            className: mp,
                            children: Ht._u.thousandFormat(t || 0)
                        })]
                    }), (0,
                    Z.jsxs)("div", {
                        className: pp,
                        children: [(0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsxs)("div", {
                                className: dp,
                                children: [(0,
                                g.kW)("ok_game_okxracer_tag_autodriving_points"), (0,
                                Z.jsx)(ts.A, {
                                    title: (0,
                                    g.kW)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                    type: ts.A.TYPES.neutral,
                                    children: (0,
                                    Z.jsx)(b.A, {
                                        iconName: "okx-growth-information",
                                        className: xp
                                    })
                                })]
                            }), (0,
                            Z.jsxs)("div", {
                                className: _p,
                                children: [Pt, "\xa0", "".concat(Ht._u.thousandFormat(n || 0), "/hr")]
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsx)("div", {
                                className: dp,
                                children: (0,
                                g.kW)("ok_game_okxracer_tag_base_points")
                            }), (0,
                            Z.jsxs)("div", {
                                className: _p,
                                children: [Pt, "\xa0", Ht._u.thousandFormat(a || 0)]
                            })]
                        }), (0,
                        Z.jsxs)("div", {
                            children: [(0,
                            Z.jsx)("div", {
                                className: dp,
                                children: (0,
                                g.kW)("ok_game_okxracer_tag_defense_points")
                            }), (0,
                            Z.jsxs)("div", {
                                className: _p,
                                children: [St, "\xa0", Ht._u.thousandFormat((null === r || void 0 === r ? void 0 : r.defensePoint) || 0)]
                            })]
                        })]
                    })]
                })
            };
            const fp = "UpgradesPage_container__H43Ax"
              , vp = "UpgradesPage_cardContainer__AsZoD"
              , kp = "UpgradesPage_block__QlGao"
              , gp = "UpgradesPage_tabList__LgJTP"
              , jp = "UpgradesPage_activeTab__s2ued"
              , Np = "UpgradesPage_tabPane__nE21p"
              , Ap = "UpgradesPage_tabName__GnRMI";
            var bp = function() {
                var e = (0,
                a.useContext)(Cm)
                  , t = e.boosts
                  , n = e.upgradeBoost
                  , r = e.onChangeTab
                  , s = e.activeTabId
                  , i = e.boostGroups;
                gs();
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
                    className: fp,
                    children: [(0,
                    Z.jsx)("div", {
                        className: vp,
                        children: (0,
                        Z.jsx)(hp, {})
                    }), (0,
                    Z.jsxs)("div", {
                        className: kp,
                        children: [(0,
                        Z.jsx)(Dl.A.Underline, {
                            size: Dl.A.SIZE.xl,
                            headerClassName: gp,
                            activeClassName: jp,
                            activeId: s,
                            children: c.map((function(e) {
                                var t = e.title
                                  , n = e.key;
                                return (0,
                                Z.jsx)(Dl.A.TabPane, {
                                    className: Np,
                                    tab: (0,
                                    Z.jsx)("div", {
                                        className: Ap,
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
                        Z.jsx)(op, {
                            boosts: t,
                            upgradeBoost: n
                        })]
                    })]
                })
            }
              , Cp = function() {
                return (0,
                Z.jsx)(wm, {
                    children: (0,
                    Z.jsx)(bp, {})
                })
            }
              , wp = function() {
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
                    className: to,
                    children: (0,
                    Z.jsx)(m.A, {
                        localeData: n,
                        fetchConfig: i,
                        children: f ? (0,
                        Z.jsx)(Z.Fragment, {
                            children: (0,
                            Z.jsx)(zr, {
                                children: (0,
                                Z.jsx)(Os, {
                                    children: (0,
                                    Z.jsx)(rt, {
                                        children: (0,
                                        Z.jsx)(et, {
                                            children: (0,
                                            Z.jsx)(ct, {
                                                children: (0,
                                                Z.jsx)(jr, {
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
                                                                path: He.teamDetail,
                                                                children: (0,
                                                                Z.jsx)(s.Switch, {
                                                                    children: (0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: He.teamDetail,
                                                                        component: io(Pi, ro)
                                                                    })
                                                                })
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: He.teamList,
                                                                exact: !0,
                                                                component: io(Hi, ro)
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: He.referrals,
                                                                component: io(Y_),
                                                                exact: !0
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: He.upgrades,
                                                                component: io(Cp)
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: He.battleTeams,
                                                                children: (0,
                                                                Z.jsxs)(s.Switch, {
                                                                    children: [(0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: He.battleTeamMembers,
                                                                        component: io(To)
                                                                    }), (0,
                                                                    Z.jsx)(s.Route, {
                                                                        path: He.battleTeams,
                                                                        component: io(Fo)
                                                                    })]
                                                                })
                                                            }), (0,
                                                            Z.jsx)(s.Route, {
                                                                path: He.battle,
                                                                exact: !0,
                                                                children: (0,
                                                                Z.jsx)(ft, {
                                                                    children: (0,
                                                                    Z.jsx)($r, {})
                                                                })
                                                            }), (0,
                                                            Z.jsxs)(s.Route, {
                                                                path: He.home,
                                                                children: [(0,
                                                                Z.jsx)("article", {
                                                                    className: ao,
                                                                    children: (0,
                                                                    Z.jsxs)(s.Switch, {
                                                                        children: [(0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: He.home,
                                                                            component: Ol,
                                                                            exact: !0
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: He.leaderboard,
                                                                            component: io(Cu),
                                                                            exact: !0
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: He.tasks,
                                                                            component: Am
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: He.license,
                                                                            children: (0,
                                                                            Z.jsx)(eo, {
                                                                                children: (0,
                                                                                Z.jsx)(k_, {})
                                                                            })
                                                                        }), (0,
                                                                        Z.jsx)(s.Route, {
                                                                            path: He.teamRace,
                                                                            component: io(Qc)
                                                                        })]
                                                                    })
                                                                }), (0,
                                                                Z.jsx)("footer", {
                                                                    className: no,
                                                                    children: (0,
                                                                    Z.jsx)(Gn, {})
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
                        Z.jsx)(b_, {})
                    })
                })
            }
              , yp = document.getElementById("root");
            if (yp) {
                var Tp = (0,
                Z.jsx)(s.BrowserRouter, {
                    basename: c.A.langPath,
                    children: (0,
                    Z.jsx)(K, {
                        children: (0,
                        Z.jsx)(wp, {})
                    })
                });
                (0,
                i.createRoot)(yp).render(Tp)
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
        19919: e => {
            "use strict";
            e.exports = ReactJSX
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
                    var a = window._okGlobal || window.okGlobal
                      , r = a && a.isRTL;
                    return __INIT_STATE__ && __INIT_STATE__.appContext && (r = __INIT_STATE__.appContext.enableRTL && r),
                    r && /\.css$/.test(n) ? n.replace(/\.css$/, ".rtl.css") : n
                }
            }
        } catch (t) {}
    }
    )(),
    ( () => {
        var e = {
            1392: 0,
            8337: 0,
            644: 0,
            8939: 0
        };
        n.f.j = (t, a) => {
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (/^(644|8337|8939)$/.test(t))
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
    var a = n.O(void 0, [6185, 874, 8337, 644, 8939, 4647, 9776, 8276, 9795, 6163, 924, 9138, 3901, 9993, 6004, 6942], ( () => n(61895)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.0a7bfbe7.js.map
