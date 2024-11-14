(()=>{
    var e = {
        35354: (e,t,n)=>{
            "use strict";
            var a = n(87363)
              , r = n.n(a);
            const s = ReactRouterDOM;
            n(75139);
            var i = n(73271)
              , c = n(53949)
              , o = (n(78599),
            n(74165))
              , l = n(15861)
              , u = n(93324)
              , d = n(7763)
              , _ = n(46541)
              , m = n(1677)
              , p = n(27173)
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
            }
              , h = n(1413)
              , v = n(42982)
              , g = n(14300)
              , k = n(94595)
              , j = n(48006)
              , C = n(7562)
              , N = n(74914)
              , b = n(76983)
              , w = (n(96809),
            n(29361),
            n(27235),
            n(95640))
              , Z = n.n(w);
            const y = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var T = n(45263)
              , P = function(e) {
                var t = e.className;
                return (0,
                T.jsx)("div", {
                    className: Z()(y, t)
                })
            }
              , O = n(44925)
              , S = {
                act: function() {}
            };
            "undefined" !== typeof window && (S = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var E, I, B = S, L = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                B.act({
                    action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                    anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                    params: {
                        telegramid: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }, R = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).source;
                B.act({
                    action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    params: {
                        source: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }, A = {
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
                upgrades: "/mini-app/racer/upgrades"
            }, D = ["title", "titleId"];
            function F() {
                return F = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                F.apply(null, arguments)
            }
            function M(e, t) {
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
                }(e, D);
                return a.createElement("svg", F({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, E || (E = a.createElement("path", {
                    d: "M0.203125 0.847946H3.21169L6.39055 10.6497L9.6451 0.847946H12.578L8.09351 14.0935H4.70651L0.203125 0.847946Z",
                    fill: "currentColor"
                })), I || (I = a.createElement("path", {
                    d: "M14.6885 19.2332C11.3204 19.2332 9.22009 17.4545 9.20117 14.7675H11.9827C12.0773 16.0921 13.0991 16.9815 14.7263 16.9815C16.0319 16.9815 16.997 16.4138 16.997 15.3731C16.997 14.2566 15.9184 14.0296 13.7046 13.5944C11.4718 13.1592 9.50392 12.459 9.50392 9.77207C9.50392 7.4257 11.4529 5.76054 14.4425 5.76054C17.5646 5.76054 19.5514 7.38786 19.5892 9.92344H16.8077C16.6753 8.80703 15.8427 8.03122 14.4425 8.03122C13.2315 8.03122 12.3611 8.54212 12.3611 9.56392C12.3611 10.6425 13.4018 10.8696 15.5967 11.2858C17.8674 11.7021 19.8541 12.4212 19.8541 15.0514C19.8541 17.5302 17.7917 19.2332 14.6885 19.2332Z",
                    fill: "currentColor"
                })))
            }
            var U = a.forwardRef(M);
            n.p;
            var G = n(4860);
            var W = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , V = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , H = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , K = function(e) {
                return e[e.RACER = 0] = "RACER",
                e[e.CAR = 1] = "CAR",
                e[e.TEAM = 2] = "TEAM",
                e
            }({})
              , Y = "lastConnectWalletType"
              , z = function() {
                return "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/247/149F6DE872696960.jpeg")
            }
              , X = function(e) {
                return e.TgWallet = "OKX Mini Wallet",
                e.OkxApp = "OKX Wallet",
                e
            }({})
              , q = function(e, t) {
                var n = (0,
                g.O4)("ok_game_okxracer_invitation_message")
                  , a = "https://t.me/".concat(W.BOT_NAME, "/").concat(W.MINI_APP_NAME)
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
              , J = {
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
              , Q = (0,
            a.createContext)(J)
              , $ = function() {
                return (0,
                a.useContext)(Q)
            }
              , ee = function(e) {
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
                            var t, n, a = new G.Z((e || "").replaceAll("__", "&").replaceAll("_", "="));
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
                    return J
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                T.jsx)(Q.Provider, {
                    value: s,
                    children: t
                })
            }
              , te = n(83108)
              , ne = n(96833)
              , ae = (n(14268),
            n(83295),
            n(4422))
              , re = n(72202)
              , se = function(e, t) {
                e ? p.Z.success({
                    title: t || (0,
                    g.O4)("ok_game_okxracer_success"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                }) : p.Z.error({
                    title: t || (0,
                    g.O4)("ok_game_okxracer_failed"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , ie = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                se(!1, t || (0,
                g.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , ce = n(60378);
            const oe = utils.ont;
            var le = n.n(oe)
              , ue = function(e) {
                var t = (e || {}).data;
                return t && 0 === Number(t.code) ? Promise.resolve(t) : Promise.reject(t)
            }
              , de = function(e) {
                return function(t) {
                    if (!(0,
                    ce.y)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        ae.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                    }
                    return Promise.reject(t)
                }
            }
              , _e = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", le().get(t, n).then(ue, de(t)));
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
              , me = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", le().getWithCache(t, n).then(ue, de(t)));
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
              , pe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", le().post(t, n, a).then(ue, de(t)));
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
              , fe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", le().put(t, n, a).then(ue, de(t)));
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
              , xe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", le().delete(t, n).then(ue, de(t)));
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
              , he = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    o.Z)().wrap((function(e) {
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
                                e.abrupt("return", pe(t, r, a));
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
            const ve = {
                get: _e,
                getWithCache: me,
                post: pe,
                put: fe,
                postForm: he,
                delete: xe
            };
            var ge = n(15671)
              , ke = n(43144)
              , je = function() {
                function e() {
                    (0,
                    ge.Z)(this, e),
                    this.store = void 0,
                    this.store = new Map
                }
                return (0,
                ke.Z)(e, [{
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
            je.instance = void 0;
            const Ce = je.getInstance();
            function Ne(e, t) {
                return function() {
                    var n = (0,
                    l.Z)((0,
                    o.Z)().mark((function n(a, r) {
                        var s;
                        return (0,
                        o.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (s = "cache_".concat(a, "_").concat(JSON.stringify(r)),
                                    !Ce.hasItem(s) || Ce.isItemExpired(s, t)) {
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
            function be() {
                var e, t;
                return (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initData) || ""
            }
            function we(e, t, n) {
                return Ze.apply(this, arguments)
            }
            function Ze() {
                return (Ze = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ve.get(t, (0,
                                h.Z)((0,
                                h.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": be()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                Ce.setItem(n, r),
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
            function ye(e, t, n) {
                return Te.apply(this, arguments)
            }
            function Te() {
                return (Te = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !Ce.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = Ce.getItem(r),
                                we(t, r, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", we(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Pe(e, t, n) {
                return Oe.apply(this, arguments)
            }
            function Oe() {
                return (Oe = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve.post(t, n, (0,
                                h.Z)((0,
                                h.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": be()
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
            var Se = "/priapi/v1/affiliate"
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/info"), t));
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
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/assess"), t));
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
                o.Z)().mark((function e(t, n) {
                    var a, r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ye("".concat(Se, "/game/racer/invitee-list"), {
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
              , Le = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = Ne(ye, 1e4),
                                e.next = 4,
                                n("".concat(Se, "/game/racer/leaderboard/friends"), {
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
                                ie(e.t0),
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
              , Re = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = Ne(ye, 3e5),
                                e.next = 4,
                                n("".concat(Se, "/game/racer/leaderboard/global"), {
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
                                ie(e.t0),
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
              , Ae = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e[e.ConnectEVMChain = 6] = "ConnectEVMChain",
                e
            }({})
              , De = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ye("".concat(Se, "/game/racer/boosts"), {}, t));
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
              , Fe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/boost"), t));
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
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ye("".concat(Se, "/game/racer/group-tasks"), {}, t));
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
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/task"), t));
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
              , Ge = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/task-context"), t));
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
              , Ve = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, a, r, s = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] ? s[0] : {
                                    isRecheckBinding: !1
                                },
                                e.next = 3,
                                Pe("".concat(Se, "/game/racer/account-binding"), t);
                            case 3:
                                if (n = e.sent,
                                a = n.code,
                                r = n.data,
                                0 !== a || !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", (0,
                                h.Z)((0,
                                h.Z)({}, r), {}, {
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
              , He = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, a, r, s = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                e.next = 3,
                                ye("".concat(Se, "/game/racer/campaigns"), {}, t);
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
              , Ke = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", ye("".concat(Se, "/game/racer/airdrop/tasks"), {}, t));
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
              , Ye = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.abrupt("return", ye("".concat(Se, "/game/racer/match/teams/info"), {}, t));
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
              , ze = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/match/teams/join"), {
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
              , Xe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Pe("".concat(Se, "/game/racer/match/teams/leave"), {
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
              , qe = n(55528);
            function Je(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var Qe = {
                Friends: Je(Le, {
                    pageNo: 1
                }),
                Boost: Je(De, !0),
                Task: Je(Me, !0),
                Invitee: Je(Be, {
                    pageNo: 1
                }, !0),
                Global: Je(Re, {
                    pageNo: 1
                }),
                Teams: Je(Ye, !0)
            }
              , $e = ["Friends", "Boost", "Task", "Invitee", "Global", "Teams"]
              , et = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var n;
                    return (0,
                    o.Z)().wrap((function(e) {
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
                                    var t = Math.floor(1e3 * qe.k.mathRandom()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                n && Qe[n] && (a = Qe[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && ae.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                et(t);
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
            function tt() {
                et($e).catch((function(e) {
                    e instanceof Error && ae.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var nt = (0,
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
              , at = function() {
                return (0,
                a.useContext)(nt)
            }
              , rt = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(0)
                  , r = (0,
                u.Z)(n, 2)
                  , i = r[0]
                  , c = r[1]
                  , d = (0,
                a.useState)(0)
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
                  , k = (0,
                a.useState)(0)
                  , j = (0,
                u.Z)(k, 2)
                  , C = j[0]
                  , N = j[1]
                  , b = (0,
                a.useState)(0)
                  , w = (0,
                u.Z)(b, 2)
                  , Z = w[0]
                  , y = w[1]
                  , P = (0,
                a.useState)(0)
                  , O = (0,
                u.Z)(P, 2)
                  , S = O[0]
                  , E = O[1]
                  , I = (0,
                a.useState)(0)
                  , B = (0,
                u.Z)(I, 2)
                  , L = B[0]
                  , R = B[1]
                  , D = (0,
                a.useState)("")
                  , F = (0,
                u.Z)(D, 2)
                  , M = F[0]
                  , U = F[1]
                  , G = (0,
                a.useState)({})
                  , W = (0,
                u.Z)(G, 2)
                  , V = W[0]
                  , H = W[1]
                  , K = (0,
                a.useState)(!0)
                  , Y = (0,
                u.Z)(K, 2)
                  , z = Y[0]
                  , X = Y[1]
                  , q = $()
                  , J = q.username
                  , Q = q.startParam
                  , ee = (0,
                a.useState)("")
                  , te = (0,
                u.Z)(ee, 2)
                  , ne = te[0]
                  , ie = te[1]
                  , ce = (0,
                a.useState)(!1)
                  , oe = (0,
                u.Z)(ce, 2)
                  , le = oe[0]
                  , ue = oe[1]
                  , de = (0,
                a.useState)(0)
                  , _e = (0,
                u.Z)(de, 2)
                  , me = _e[0]
                  , pe = _e[1]
                  , fe = (0,
                a.useState)(!1)
                  , xe = (0,
                u.Z)(fe, 2)
                  , he = xe[0]
                  , ve = xe[1]
                  , ge = (0,
                a.useState)()
                  , ke = (0,
                u.Z)(ge, 2)
                  , je = ke[0]
                  , Ce = ke[1]
                  , Ne = (0,
                a.useState)(!1)
                  , be = (0,
                u.Z)(Ne, 2)
                  , we = be[0]
                  , Ze = be[1]
                  , ye = (0,
                a.useState)(!1)
                  , Te = (0,
                u.Z)(ye, 2)
                  , Pe = Te[0]
                  , Oe = Te[1]
                  , Se = Q.linkCode
                  , Ie = Q.teamId
                  , Be = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                Ee({
                                    extUserName: J,
                                    linkCode: Se
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (c(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                v(n.basePoint),
                                N(n.autopilotPointsPerHour),
                                U(n.linkCode),
                                y(n.numChances),
                                R(n.secondToRefresh),
                                E(n.numChancesTotal),
                                ue(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                Oe(Boolean(n.context.isShowNewbieCredit)),
                                ve(n.isUnderRiskControl),
                                pe(n.autopilotPoints),
                                Ce({
                                    activityEndTime: n.context.activityEndTime,
                                    isShowActivityFlag: n.context.isShowActivityFlag && !n.isUnderRiskControl
                                }),
                                H(n.context),
                                X(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                se(!1, (0,
                                g.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [Se, J]);
                (0,
                a.useEffect)((function() {
                    Ze(Boolean(null === je || void 0 === je ? void 0 : je.isShowActivityFlag))
                }
                ), [null === je || void 0 === je ? void 0 : je.isShowActivityFlag]);
                var Le = (0,
                s.useHistory)()
                  , Re = (0,
                s.useLocation)();
                (0,
                a.useEffect)((function() {
                    Ie && Le.push({
                        pathname: A.teamDetail.replace(":id", Ie),
                        hash: Re.hash
                    })
                }
                ), []),
                (0,
                a.useEffect)((function() {
                    Be().then(tt).catch((function(e) {
                        e instanceof Error && ae.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [Be]),
                (0,
                a.useEffect)((function() {
                    var e = new re.Z(L);
                    return L > 0 ? (e.start(),
                    e.addEventListener(re.Z.Event.UPDATE, (function(e) {
                        ie("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(re.Z.Event.FINISH, (function() {
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
                var Ae = (0,
                a.useCallback)((function(e) {
                    c(Math.max(e.points, 0)),
                    y(e.numChances),
                    R(e.secondToRefresh)
                }
                ), [])
                  , De = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                  , Fe = (0,
                a.useCallback)((function() {
                    ue(!1)
                }
                ), [])
                  , Me = (0,
                a.useCallback)((function() {
                    Oe(!1)
                }
                ), [])
                  , Ue = (0,
                a.useCallback)((function() {
                    ve(!1)
                }
                ), [])
                  , Ge = (0,
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
                        isLoading: z,
                        points: i,
                        accumPoints: m,
                        numChances: Z,
                        numChancesTotal: S,
                        countdownDisplay: ne,
                        updateGameInfo: Ae,
                        linkCode: M,
                        updateGameInfoFromServer: De,
                        isShowAutopilotGainedPoint: le,
                        autopilotPoints: me,
                        isShowNewbie: Pe,
                        hideNewbie: Me,
                        hideAutopilotSheet: Fe,
                        isShowRiskControlSheet: he,
                        hideRiskControlSheet: Ue,
                        activity: je,
                        isShowActivityDetails: we,
                        toggleActivityDetailsBottomSheet: Ge,
                        context: V,
                        basePoint: h,
                        autopilotPointsPerHour: C
                    }
                }
                ), [z, i, m, Z, S, ne, Ae, M, De, le, me, Fe, Pe, Me, he, Ue, je, we, Ge, V, h, C]);
                return (0,
                T.jsx)(nt.Provider, {
                    value: We,
                    children: t
                })
            }
              , st = n(56824);
            n(8911);
            const it = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var ct = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: it.closeBtn,
                closeIconClassName: it.closeIcon
            }
              , ot = function(e) {
                return (0,
                T.jsx)(st.default, (0,
                h.Z)((0,
                h.Z)({}, ct), {}, {
                    topContent: e.title ? void 0 : (0,
                    T.jsx)("div", {
                        className: it.topPadding
                    }),
                    zIndex: 999
                }, e))
            };
            const lt = "PrimaryButton_button__SJFHA"
              , ut = "PrimaryButton_buttonText__19AJ7";
            var dt = ["text", "className"]
              , _t = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                O.Z)(e, dt);
                return (0,
                T.jsx)(b.default, (0,
                h.Z)((0,
                h.Z)({
                    category: b.default.CATEGORY.fill,
                    type: b.default.TYPE.primary,
                    size: b.default.SIZE.lg,
                    className: Z()(lt, n),
                    contentClassName: ut
                }, a), {}, {
                    children: t
                }))
            }
              , mt = n(4942);
            const pt = "Timer_timer__j+KcR"
              , ft = "Timer_show__GFyz+"
              , xt = "Timer_label__nxjo+"
              , ht = "Timer_separator__CFi1G"
              , vt = "Timer_timerValue__CaRO2";
            var gt = function(e) {
                var t = e.endTime
                  , n = e.label
                  , r = (0,
                a.useRef)(new re.Z.Absolute(t,{
                    interval: 1
                }))
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , c = i[0]
                  , o = i[1];
                return (0,
                a.useEffect)((function() {
                    var e = r.current;
                    return e.start().addEventListener(re.Z.Event.UPDATE, (function(e) {
                        o(e)
                    }
                    )),
                    function() {
                        e.end()
                    }
                }
                ), []),
                (0,
                T.jsxs)("div", {
                    className: Z()(pt, (0,
                    mt.Z)({}, ft, c)),
                    children: [n && (0,
                    T.jsx)("span", {
                        className: xt,
                        children: n
                    }), Number(null === c || void 0 === c ? void 0 : c.day) > 0 && (0,
                    T.jsxs)(T.Fragment, {
                        children: [(0,
                        T.jsx)("span", {
                            className: vt,
                            children: null === c || void 0 === c ? void 0 : c.day
                        }), (0,
                        T.jsx)("span", {
                            className: ht,
                            children: ":"
                        })]
                    }), (0,
                    T.jsx)("span", {
                        className: vt,
                        children: null === c || void 0 === c ? void 0 : c.hour
                    }), (0,
                    T.jsx)("span", {
                        className: ht,
                        children: ":"
                    }), (0,
                    T.jsx)("span", {
                        className: vt,
                        children: null === c || void 0 === c ? void 0 : c.minute
                    }), (0,
                    T.jsx)("span", {
                        className: ht,
                        children: ":"
                    }), (0,
                    T.jsx)("span", {
                        className: vt,
                        children: null === c || void 0 === c ? void 0 : c.second
                    })]
                })
            };
            const kt = "EventPopover_eventPopoverWrapper__65bP-"
              , jt = "EventPopover_eventPopover__B0CAq"
              , Ct = "EventPopover_eventPopoverDesc__+lNFw"
              , Nt = "EventPopover_eventPopoverBtn__BKIwS"
              , bt = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , wt = "EventPopover_eventPopoverArrow__M+sYF"
              , Zt = "EventPopover_eventDetailsContainer__G1KfS"
              , yt = "EventPopover_title__Tie4q"
              , Tt = "EventPopover_description__tVAy9"
              , Pt = "EventPopover_disclaimer__jFZC3"
              , Ot = "EventPopover_continueBtn__S2Sj-"
              , St = "EventPopover_eventDetails__5xDB0"
              , Et = "EventPopover_eventImg__0yapf";
            var It = function(e) {
                var t = e.children
                  , n = at()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsx)(te.Z, {
                        zIndex: 998,
                        layerClassName: kt,
                        popperClassName: jt,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: Ct,
                        description: (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)(b.default, {
                                className: Nt,
                                type: b.default.TYPE.primary,
                                category: b.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                T.jsx)(C.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: bt
                                }),
                                iconType: b.default.ICON_POSITION.tailing,
                                children: (0,
                                g.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            T.jsx)("svg", {
                                className: wt,
                                width: "8",
                                height: "4",
                                viewBox: "0 0 8 4",
                                fill: "none",
                                children: (0,
                                T.jsx)("path", {
                                    d: "M4 4L8 0L0 0L4 4Z",
                                    fill: "#2F302D"
                                })
                            })]
                        }),
                        children: t
                    }), (0,
                    T.jsx)(ot, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        T.jsxs)("div", {
                            className: Zt,
                            children: [(0,
                            T.jsxs)("div", {
                                className: St,
                                children: [(0,
                                T.jsx)(ne.Z, {
                                    pictureClassName: Et,
                                    className: Et,
                                    src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                T.jsx)("h2", {
                                    className: yt,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                T.jsx)("p", {
                                    className: Tt,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                T.jsx)(gt, {
                                    endTime: i,
                                    label: (0,
                                    g.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                T.jsx)("p", {
                                    className: Pt,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            T.jsx)(_t, {
                                className: Ot,
                                onClick: function() {
                                    s()
                                },
                                text: (0,
                                g.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            };
            const Bt = "Navbar_navbar__LF3-M"
              , Lt = "Navbar_link__qX0Sf"
              , Rt = "Navbar_active__TCbF8"
              , At = "Navbar_linkIcon__GtH54"
              , Dt = "Navbar_linkText__Szxi-"
              , Ft = "Navbar_newIndicator__IrNNw"
              , Mt = "Navbar_teamLink__f6QDM"
              , Ut = "Navbar_borderBox__qrzy1"
              , Gt = "Navbar_container__KynEL";
            var Wt = ["children", "className"]
              , Vt = ["iconName", "label", "onClick", "showNewIndicator"]
              , Ht = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                O.Z)(e, Wt)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                T.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , Kt = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , c = (0,
                O.Z)(e, Vt)
                  , o = (0,
                s.useRouteMatch)({
                    path: c.to,
                    exact: c.to === A.home
                });
                return (0,
                T.jsxs)(Ht, {
                    className: Z()(Lt, o && Rt),
                    to: c.to,
                    onClick: a,
                    children: [(0,
                    T.jsx)(C.Z, {
                        iconName: t,
                        className: At
                    }), i && (0,
                    T.jsx)("span", {
                        className: Ft
                    }), (0,
                    T.jsx)("span", {
                        className: Dt,
                        children: n
                    })]
                })
            }
              , Yt = function() {
                var e = (0,
                s.useRouteMatch)({
                    path: A.teamRace
                });
                return (0,
                T.jsxs)(Ht, {
                    className: Z()(Lt, Mt, e && Rt),
                    to: A.teamRace,
                    children: [(0,
                    T.jsx)("div", {
                        className: Ut,
                        children: (0,
                        T.jsx)("div", {
                            className: Gt,
                            children: (0,
                            T.jsx)(U, {
                                className: At
                            })
                        })
                    }), (0,
                    T.jsx)("span", {
                        className: Dt,
                        children: (0,
                        g.O4)("ok_game_okxracer_nav_team_race")
                    })]
                })
            }
              , zt = function() {
                var e = {
                    telegramid: $().uid
                };
                return (0,
                T.jsxs)("div", {
                    className: Bt,
                    children: [(0,
                    T.jsx)(It, {
                        children: (0,
                        T.jsx)(Kt, {
                            iconName: "okx-growth-home",
                            to: A.home,
                            label: (0,
                            g.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    T.jsx)(Kt, {
                        iconName: "okx-growth-leaderboard",
                        to: A.leaderboard,
                        label: (0,
                        g.O4)("ok_game_okxracer_leaderboard"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                B.act({
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
                    T.jsx)(Yt, {}), (0,
                    T.jsx)(Kt, {
                        iconName: "okx-growth-task-new",
                        to: A.tasks,
                        label: (0,
                        g.O4)("ok_game_okxracer_tasks"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                B.act({
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
                    T.jsx)(Kt, {
                        iconName: "okx-growth-surprises",
                        to: A.license,
                        label: (0,
                        g.O4)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            }
              , Xt = function() {
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
                        pathname: A.home,
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
            }
              , qt = {
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
              , Jt = (0,
            a.createContext)({
                accountBindingInfo: qt,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , Qt = function() {
                return (0,
                a.useContext)(Jt)
            }
              , $t = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(qt)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = Boolean((null === s || void 0 === s ? void 0 : s.isConnectTelegram) && (null === s || void 0 === s ? void 0 : s.isKyc))
                  , f = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, a = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    isRecheckBinding: a.length > 0 && void 0 !== a[0] && a[0]
                                },
                                e.next = 4,
                                Ve(t);
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
                    f()
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
                T.jsx)(Jt.Provider, {
                    value: x,
                    children: t
                })
            }
              , en = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , tn = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function nn(e) {
                var t = {
                    title: (0,
                    g.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    g.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: en.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink,
                    btnText: (0,
                    g.O4)("ok_game_okxracer_btn_phase4_verify")
                }
                  , n = [{
                    title: (0,
                    g.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    g.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: en.SIGNUP,
                    status: tn(en.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    g.O4)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    g.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    g.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: en.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    g.O4)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var an = function(e) {
                var t = (0,
                a.useState)(nn(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = $().uid;
                (0,
                a.useEffect)((function() {
                    s(nn(e))
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
                        case en.SIGNUP:
                        case en.INSTALL:
                            o = t,
                            window.localStorage && window.localStorage.setItem(o, "1"),
                            s(nn(e))
                        }
                        var o, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case en.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                B.act({
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
                        case en.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                B.act({
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
                        case en.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                B.act({
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
                        case en.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                B.act({
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
            const rn = "CertifyBottomSheet_certifySteps__-zWCO"
              , sn = "CertifyBottomSheet_taskList__uK656"
              , cn = "CertifyBottomSheet_task__iLWrC"
              , on = "CertifyBottomSheet_details__YoXf3"
              , ln = "CertifyBottomSheet_title__X1Tnl"
              , un = "CertifyBottomSheet_subTitle__EzVrR"
              , dn = "CertifyBottomSheet_btn__JLhoo"
              , _n = "CertifyBottomSheet_btnContent__wrzU-"
              , mn = "CertifyBottomSheet_verifyBtn__lYfYD";
            var pn = ["handleVerified"]
              , fn = function(e) {
                var t = e.handleVerified
                  , n = (0,
                O.Z)(e, pn)
                  , a = $().uid
                  , r = Qt()
                  , s = r.accountBindingInfo
                  , i = r.getAccountBindingInfo
                  , c = an(s)
                  , u = c.list
                  , d = c.handleClick
                  , _ = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var n;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    i(!0);
                                case 3:
                                    null !== (n = e.sent) && void 0 !== n && n.isKyc && n.isConnectTelegram ? null === t || void 0 === t || t() : se(!1, (0,
                                    g.O4)("ok_game_okxracer_verify_failed_msg")),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_error_high_traffic"));
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
                T.jsx)(ot, (0,
                h.Z)((0,
                h.Z)({}, n), {}, {
                    title: (0,
                    g.O4)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: rn,
                    children: (0,
                    T.jsxs)(T.Fragment, {
                        children: [(0,
                        T.jsx)("ul", {
                            className: sn,
                            children: u.map((function(e) {
                                return (0,
                                T.jsxs)("li", {
                                    className: cn,
                                    children: [(0,
                                    T.jsxs)("div", {
                                        className: on,
                                        children: [(0,
                                        T.jsx)("p", {
                                            className: ln,
                                            children: e.title
                                        }), (0,
                                        T.jsx)("p", {
                                            className: un,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    T.jsx)(_t, {
                                        text: e.btnText,
                                        size: b.default.SIZE.xs,
                                        className: dn,
                                        contentClassName: _n,
                                        onClick: function() {
                                            d(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        T.jsx)(_t, {
                            className: mn,
                            onClick: (0,
                            l.Z)((0,
                            o.Z)().mark((function e() {
                                return (0,
                                o.Z)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return L({
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
                            g.O4)("ok_game_okxracer_surprises_verify")
                        })]
                    })
                }))
            }
              , xn = (0,
            a.createContext)({
                currentTeam: null,
                teams: [],
                isLoading: !0,
                teamBenefits: null,
                isEligibleClaim: !1,
                getTeams: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                }()
            })
              , hn = function() {
                return (0,
                a.useContext)(xn)
            }
              , vn = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(null)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)(!1)
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = (0,
                a.useState)(null)
                  , g = (0,
                u.Z)(v, 2)
                  , k = g[0]
                  , j = g[1]
                  , C = (0,
                a.useState)(!0)
                  , N = (0,
                u.Z)(C, 2)
                  , b = N[0]
                  , w = N[1]
                  , Z = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return w(!0),
                                e.prev = 1,
                                e.next = 4,
                                Ye();
                            case 4:
                                t = e.sent,
                                (n = t.data) && (i(n.teams),
                                m(n.userTeam),
                                h(n.isEligibleClaim),
                                j(n.teamContext));
                            case 7:
                                return e.prev = 7,
                                w(!1),
                                e.finish(7);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, , 7, 10]])
                }
                ))), [])
                  , y = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    ze(t);
                                case 2:
                                    return e.prev = 2,
                                    e.next = 5,
                                    Z();
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
                }(), [Z])
                  , P = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Xe(t);
                                case 2:
                                    return e.prev = 2,
                                    e.next = 5,
                                    Z();
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
                }(), [Z]);
                (0,
                a.useEffect)((function() {
                    Z()
                }
                ), [Z]);
                var O = (0,
                a.useMemo)((function() {
                    return {
                        currentTeam: _,
                        teams: s,
                        isEligibleClaim: x,
                        teamBenefits: k,
                        isLoading: b,
                        getTeams: Z,
                        joinTeam: y,
                        leaveTeam: P
                    }
                }
                ), [_, Z, x, b, y, P, k, s]);
                return (0,
                T.jsx)(xn.Provider, {
                    value: O,
                    children: t
                })
            };
            const gn = "LeaveTeamBottomSheet_container__AvVcB"
              , kn = "LeaveTeamBottomSheet_title__gMzba"
              , jn = "LeaveTeamBottomSheet_desc__cl4EX"
              , Cn = "LeaveTeamBottomSheet_btn__Nn5Ag"
              , Nn = "LeaveTeamBottomSheet_btnContent__CsCwu";
            var bn = function(e) {
                var t = hn()
                  , n = t.currentTeam
                  , r = t.leaveTeam
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.Z)(s, 2)
                  , c = i[0]
                  , d = i[1]
                  , _ = function() {
                    var t = (0,
                    l.Z)((0,
                    o.Z)().mark((function t() {
                        var a;
                        return (0,
                        o.Z)().wrap((function(t) {
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
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_toast_you_have_successfully_left", {
                                        teamName: n.teamInfoContext.teamName
                                    })),
                                    null === (a = e.onClose) || void 0 === a || a.call(e),
                                    t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(3),
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_error_high_traffic"));
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
                T.jsx)(ot, (0,
                h.Z)((0,
                h.Z)({}, e), {}, {
                    children: (0,
                    T.jsxs)("div", {
                        className: gn,
                        children: [(0,
                        T.jsx)("h2", {
                            className: kn,
                            children: (0,
                            g.O4)("ok_game_okxracer_title_are_you_sure", {
                                teamName: null === n || void 0 === n ? void 0 : n.teamInfoContext.teamName
                            })
                        }), (0,
                        T.jsx)("p", {
                            className: jn,
                            children: (0,
                            g.O4)("ok_game_okxracer_come_back_to_rejoin")
                        }), (0,
                        T.jsx)(b.default, {
                            className: Cn,
                            contentClassName: Nn,
                            size: b.default.SIZE.lg,
                            type: b.default.TYPE.primary,
                            htmlType: "button",
                            onClick: _,
                            loading: c,
                            children: (0,
                            g.O4)("ok_game_okxracer_btn_leave_team")
                        }), (0,
                        T.jsx)(b.default, {
                            className: Cn,
                            contentClassName: Nn,
                            category: b.default.CATEGORY.outline,
                            size: b.default.SIZE.lg,
                            htmlType: "button",
                            onClick: e.onClose,
                            children: (0,
                            g.O4)("commonall_text_btn_cancel")
                        })]
                    })
                }))
            };
            function wn(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            const Zn = "TeamDetail_banner__3rZlg"
              , yn = "TeamDetail_linkButton__dur+b"
              , Tn = "TeamDetail_avatar__7nx+g"
              , Pn = "TeamDetail_name__3MNHb"
              , On = "TeamDetail_linkIcon__yXhDG"
              , Sn = "TeamDetail_desc__-y49w"
              , En = "TeamDetail_textPlaceholder__MSh-q"
              , In = "TeamDetail_divider__caEc+"
              , Bn = "TeamDetail_fields__IVJYO"
              , Ln = "TeamDetail_field__UJRM8"
              , Rn = "TeamDetail_label__wfHBi"
              , An = "TeamDetail_value__muhSZ"
              , Dn = "TeamDetail_btnContainer__Exmdz"
              , Fn = "TeamDetail_btnContent__uKzwD"
              , Mn = "TeamDetail_leaveTeamBtn__fc7Tb";
            var Un = function() {
                var e = at().linkCode
                  , t = hn()
                  , n = t.teams
                  , r = t.isLoading
                  , i = t.joinTeam
                  , d = t.teamBenefits
                  , _ = t.getTeams
                  , m = t.currentTeam
                  , p = Qt().isCertified
                  , f = (0,
                s.useParams)().id
                  , x = q(e, f).shareUrl
                  , w = (0,
                a.useState)(!1)
                  , Z = (0,
                u.Z)(w, 2)
                  , y = Z[0]
                  , O = Z[1]
                  , S = (0,
                a.useState)(!1)
                  , E = (0,
                u.Z)(S, 2)
                  , I = E[0]
                  , B = E[1]
                  , L = (0,
                a.useState)(!1)
                  , R = (0,
                u.Z)(L, 2)
                  , D = R[0]
                  , F = R[1]
                  , M = (0,
                a.useMemo)((function() {
                    return n.find((function(e) {
                        return e.teamId === Number(f)
                    }
                    ))
                }
                ), [f, n]);
                if ((0,
                a.useEffect)((function() {
                    _()
                }
                ), [_]),
                Xt(),
                !M && !r)
                    return (0,
                    T.jsx)(s.Redirect, {
                        to: A.teamRace
                    });
                (0,
                g.O4)("ok_game_okxracer_label_total_team_points"),
                (0,
                s.generatePath)(A.teamMembers, {
                    id: 1
                }),
                (0,
                k.uf)((null === M || void 0 === M ? void 0 : M.totalPoints) || 0),
                C.Z;
                var U = {
                    key: "teamBenefitDesc",
                    label: (0,
                    g.O4)("ok_game_okxracer_label_benefits"),
                    value: (0,
                    j.T)(null === d || void 0 === d ? void 0 : d.teamBenefitDesc)
                }
                  , G = M ? [{
                    key: "teamRank",
                    label: (0,
                    g.O4)("ok_game_okxracer_label_team_rank"),
                    value: "#".concat((0,
                    k.uf)(M.teamRank || 0))
                }].concat((0,
                v.Z)([]), [{
                    key: "teamNumMembers",
                    label: (0,
                    g.O4)("ok_game_okxracer_label_total_racers"),
                    value: "".concat((0,
                    k.uf)(M.teamNumMembers), "/").concat((0,
                    k.uf)(M.teamNumMemberCap))
                }], (0,
                v.Z)(M.isCurrentTeam ? [U] : [])) : []
                  , W = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    if (M) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return O(!0),
                                    e.prev = 6,
                                    e.next = 9,
                                    i(M.teamId);
                                case 9:
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_toast_you_have_successfully_joined", {
                                        teamName: M.teamInfoContext.teamName
                                    })),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(6),
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_error_high_traffic"));
                                case 15:
                                    return e.prev = 15,
                                    O(!1),
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
                }()
                  , V = r && !M
                  , H = !(null !== M && void 0 !== M && M.isCurrentTeam) && !m;
                return (0,
                T.jsxs)("div", {
                    className: Zn,
                    children: [V ? (0,
                    T.jsx)(P, {
                        className: Tn
                    }) : (0,
                    T.jsx)(N.Z, (0,
                    h.Z)((0,
                    h.Z)({}, null !== M && void 0 !== M && M.teamInfoContext.teamAvatar ? {
                        src: "".concat(c.Z.cdnBaseUrl).concat(M.teamInfoContext.teamAvatar)
                    } : {}), {}, {
                        alt: null === M || void 0 === M ? void 0 : M.teamInfoContext.teamName,
                        className: Tn
                    })), (0,
                    T.jsx)("div", {
                        className: Pn,
                        children: V ? (0,
                        T.jsx)(P, {
                            className: En
                        }) : (0,
                        T.jsxs)(T.Fragment, {
                            children: [null === M || void 0 === M ? void 0 : M.teamInfoContext.teamName, (null === M || void 0 === M ? void 0 : M.teamInfoContext.teamLink) && (0,
                            T.jsx)(b.default, {
                                className: yn,
                                type: b.default.TYPE.tertiary,
                                category: b.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: function() {
                                    M && function(e) {
                                        var t, n;
                                        null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e)
                                    }(M.teamInfoContext.teamLink)
                                },
                                children: (0,
                                T.jsx)(C.Z, {
                                    iconName: "okds-open-link",
                                    className: On
                                })
                            })]
                        })
                    }), (0,
                    T.jsx)("div", {
                        className: Sn,
                        children: V ? (0,
                        T.jsx)(P, {
                            className: En
                        }) : (0,
                        T.jsx)(T.Fragment, {
                            children: null === M || void 0 === M ? void 0 : M.teamInfoContext.teamDesc
                        })
                    }), (0,
                    T.jsx)("hr", {
                        className: In
                    }), (0,
                    T.jsxs)("ul", {
                        className: Bn,
                        children: [V && (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)(P, {
                                className: En
                            }), (0,
                            T.jsx)(P, {
                                className: En
                            }), (0,
                            T.jsx)(P, {
                                className: En
                            })]
                        }), !V && G.map((function(e) {
                            var t = e.label
                              , n = e.value
                              , a = e.key;
                            return (0,
                            T.jsxs)("li", {
                                className: Ln,
                                children: [(0,
                                T.jsx)("span", {
                                    className: Rn,
                                    children: t
                                }), (0,
                                T.jsx)("span", {
                                    className: An,
                                    children: n
                                })]
                            }, a)
                        }
                        ))]
                    }), !V && (0,
                    T.jsxs)("div", {
                        className: Dn,
                        children: [(null === M || void 0 === M ? void 0 : M.isCurrentTeam) && (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)(b.default, {
                                contentClassName: Fn,
                                size: b.default.SIZE.lg,
                                type: b.default.TYPE.primary,
                                htmlType: "button",
                                href: x,
                                children: (0,
                                g.O4)("ok_game_okxracer_btn_invite")
                            }), (0,
                            T.jsx)(b.default, {
                                className: Mn,
                                contentClassName: Fn,
                                category: b.default.CATEGORY.outline,
                                size: b.default.SIZE.lg,
                                htmlType: "button",
                                onClick: function() {
                                    F(!0)
                                },
                                children: (0,
                                g.O4)("ok_game_okxracer_btn_leave_team")
                            })]
                        }), H && (0,
                        T.jsx)(b.default, {
                            type: b.default.TYPE.primary,
                            size: b.default.SIZE.lg,
                            contentClassName: Fn,
                            onClick: W,
                            loading: y,
                            children: (0,
                            g.O4)("ok_game_okxracer_btn_join_now")
                        })]
                    }), (0,
                    T.jsx)(fn, {
                        visible: I,
                        onClose: function() {
                            B(!1)
                        },
                        handleVerified: function() {
                            B(!1)
                        }
                    }), (0,
                    T.jsx)(bn, {
                        visible: D,
                        onClose: function() {
                            F(!1)
                        }
                    })]
                })
            }
              , Gn = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            };
            function Wn(e) {
                return e <= 3
            }
            const Vn = "TeamListItem_teamListItem__jlC3n"
              , Hn = "TeamListItem_teamRank__sfdv+"
              , Kn = "TeamListItem_emoji__dCwPS"
              , Yn = "TeamListItem_avatar__gxfNS"
              , zn = "TeamListItem_teamName__gG78O"
              , Xn = "TeamListItem_teamPoints__jr8Wv"
              , qn = "TeamListItem_currentTeam__dwSkF";
            var Jn = function(e) {
                var t = e.teamRank
                  , n = e.teamInfoContext
                  , a = n.teamAvatar
                  , r = n.teamName
                  , s = e.totalPoints
                  , i = e.isCurrentTeam
                  , o = e.highlightCurrentTeam
                  , l = void 0 === o || o
                  , u = Wn(t);
                return (0,
                T.jsxs)("div", {
                    className: Z()(Vn, (0,
                    mt.Z)({}, qn, l && i)),
                    children: [(0,
                    T.jsx)("span", {
                        className: Z()(Hn, (0,
                        mt.Z)({}, Kn, u)),
                        children: u ? Gn[t] : "#".concat((0,
                        k.uf)(t))
                    }), (0,
                    T.jsx)(N.Z, {
                        className: Yn,
                        size: N.Z.SIZE.sm,
                        alt: r,
                        src: "".concat(c.Z.cdnBaseUrl).concat(a)
                    }), (0,
                    T.jsx)("span", {
                        className: zn,
                        children: (0,
                        j.T)(r)
                    }), (0,
                    T.jsx)("span", {
                        className: Xn,
                        children: (0,
                        k.uf)(s)
                    })]
                })
            };
            const Qn = "TeamList_listHeaders__QcPJe"
              , $n = "TeamList_list__hbILW"
              , ea = "TeamList_listPlaceholder__nEDhA";
            var ta = function() {
                var e = hn()
                  , t = e.teams
                  , n = e.currentTeam
                  , r = e.getTeams;
                return (0,
                a.useEffect)((function() {
                    r()
                }
                ), [r]),
                (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)("p", {
                        className: Qn,
                        children: [(0,
                        T.jsx)("span", {
                            children: (0,
                            g.O4)("ok_game_okxracer_label_leaderboard_teams_number", {
                                num: (0,
                                k.uf)(t.length)
                            })
                        }), (0,
                        T.jsx)("span", {
                            children: (0,
                            g.O4)("ok_game_okxracer_new_racers")
                        })]
                    }), (0,
                    T.jsxs)("ul", {
                        className: $n,
                        children: [n && (0,
                        T.jsx)("li", {
                            children: (0,
                            T.jsx)(Ht, {
                                to: (0,
                                s.generatePath)(A.teamDetail, {
                                    id: n.teamId
                                }),
                                children: (0,
                                T.jsx)(Jn, (0,
                                h.Z)({}, n))
                            })
                        }), t.map((function(e) {
                            return e.isCurrentTeam ? null : (0,
                            T.jsx)("li", {
                                children: (0,
                                T.jsx)(Ht, {
                                    to: (0,
                                    s.generatePath)(A.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    T.jsx)(Jn, (0,
                                    h.Z)({}, e))
                                })
                            }, e.teamId)
                        }
                        )), 0 === t.length && (0,
                        T.jsx)(T.Fragment, {
                            children: Array.from({
                                length: 3
                            }).map((function(e, t) {
                                return (0,
                                T.jsx)("li", {
                                    children: (0,
                                    T.jsx)(P, {
                                        className: ea
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const na = "TeamList_title__2Q2ap";
            var aa = function() {
                return Xt(),
                (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsx)("h2", {
                        className: na,
                        children: (0,
                        g.O4)("ok_game_okxracer_leaderboard_top_teams")
                    }), (0,
                    T.jsx)(ta, {})]
                })
            }
              , ra = n(58338);
            const sa = "PageTitle_title__IQ7TT";
            var ia = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                T.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        ra.dU)(t)
                    },
                    className: Z()(sa, n)
                })
            };
            const ca = "RulesBottomSheet_container__NlHHH"
              , oa = "RulesBottomSheet_rule__5HG6Z"
              , la = "RulesBottomSheet_bullet__fYKP5"
              , ua = "RulesBottomSheet_textContainer__Miyg+"
              , da = "RulesBottomSheet_title__PJ-Lg"
              , _a = "RulesBottomSheet_desc__vheUi";
            var ma = function(e) {
                var t = [{
                    title: (0,
                    g.O4)("ok_game_okxracer_bttmsheet_header_rules_join"),
                    desc: (0,
                    g.O4)("ok_game_okxracer_bttmsheet_desc_rules_join")
                }, {
                    title: (0,
                    g.O4)("ok_game_okxracer_bttmsheet_header_rules_climb"),
                    desc: (0,
                    g.O4)("ok_game_okxracer_bttmsheet_desc_rules_climb", {
                        num: 5e3
                    })
                }];
                return (0,
                T.jsx)(ot, (0,
                h.Z)((0,
                h.Z)({}, e), {}, {
                    title: (0,
                    g.O4)("ok_game_okxracer_tag_rules"),
                    titleCenter: !0,
                    children: (0,
                    T.jsx)("ul", {
                        className: ca,
                        children: t.map((function(e) {
                            var t = e.title
                              , n = e.desc;
                            return (0,
                            T.jsxs)("li", {
                                className: oa,
                                children: [(0,
                                T.jsx)("span", {
                                    className: la
                                }), (0,
                                T.jsxs)("div", {
                                    className: ua,
                                    children: [(0,
                                    T.jsx)("p", {
                                        className: da,
                                        children: t
                                    }), (0,
                                    T.jsx)("p", {
                                        className: _a,
                                        children: n
                                    })]
                                })]
                            }, t)
                        }
                        ))
                    })
                }))
            };
            const pa = "TeamCard_teamCard__lUFQ3"
              , fa = "TeamCard_header__Amp+p"
              , xa = "TeamCard_avatar__aE9y-"
              , ha = "TeamCard_teamName__ycan7"
              , va = "TeamCard_chevron__kzh7j"
              , ga = "TeamCard_content__3FBKT"
              , ka = "TeamCard_teamInfoField__sZNuy"
              , ja = "TeamCard_label__al-xY"
              , Ca = "TeamCard_value__ORmag"
              , Na = "TeamCard_divider__XjdlD"
              , ba = "TeamCard_leaderTeamPoints__-aWse"
              , wa = "TeamCard_text__A0e85"
              , Za = "TeamCard_btnContent__hlQU4";
            var ya = function(e) {
                var t = e.team
                  , n = e.className
                  , r = hn()
                  , i = r.isEligibleClaim
                  , d = r.teamBenefits
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1]
                  , x = 1 === t.teamRank
                  , h = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return f(!0),
                                    e.prev = 1,
                                    e.next = 4,
                                    Ue({
                                        id: Number(null === d || void 0 === d ? void 0 : d.rankRewardTaskId)
                                    });
                                case 4:
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_toast_you_have_successfully_claimed")),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_error_high_traffic"));
                                case 10:
                                    return e.prev = 10,
                                    f(!1),
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
                T.jsxs)("div", {
                    className: Z()(n, pa),
                    children: [(0,
                    T.jsxs)(Ht, {
                        to: (0,
                        s.generatePath)(A.teamDetail, {
                            id: t.teamId
                        }),
                        className: fa,
                        children: [(0,
                        T.jsx)(N.Z, {
                            src: "".concat(c.Z.cdnBaseUrl).concat(t.teamInfoContext.teamAvatar),
                            alt: t.teamInfoContext.teamName,
                            className: xa,
                            size: N.Z.SIZE.sm
                        }), (0,
                        T.jsx)("p", {
                            className: ha,
                            children: (0,
                            j.T)(t.teamInfoContext.teamName)
                        }), (0,
                        T.jsx)(C.Z, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: va
                        })]
                    }), (0,
                    T.jsxs)("div", {
                        className: ga,
                        children: [(0,
                        T.jsxs)("div", {
                            className: ka,
                            children: [(0,
                            T.jsx)("p", {
                                className: ja,
                                children: (0,
                                g.O4)("ok_game_okxracer_todays_ranking")
                            }), (0,
                            T.jsxs)("p", {
                                className: Ca,
                                children: ["#", (0,
                                k.uf)(t.teamRank)]
                            })]
                        }), (0,
                        T.jsxs)("div", {
                            className: ka,
                            children: [(0,
                            T.jsx)("p", {
                                className: ja,
                                children: (0,
                                g.O4)("ok_game_okxracer_new_racers")
                            }), (0,
                            T.jsx)("p", {
                                className: Ca,
                                children: (0,
                                k.uf)(t.totalPoints)
                            })]
                        })]
                    }), x && (0,
                    T.jsxs)(T.Fragment, {
                        children: [(0,
                        T.jsx)("hr", {
                            className: Na
                        }), (0,
                        T.jsxs)("section", {
                            className: ba,
                            children: [(0,
                            T.jsxs)("p", {
                                className: wa,
                                children: ["\ud83c\udfc1\xa0", (0,
                                g.O4)("ok_game_okxracer_desc_pts_for_team", {
                                    num: (0,
                                    k.uf)(5e3)
                                })]
                            }), (0,
                            T.jsx)(b.default, {
                                contentClassName: Za,
                                type: i ? b.default.TYPE.primary : b.default.TYPE.gray,
                                size: b.default.SIZE.s,
                                onClick: h,
                                disabled: !i,
                                loading: p,
                                children: i ? (0,
                                g.O4)("ok_game_okxracer_btn_claim_pts") : (0,
                                g.O4)("ok_game_okxracer_btn_claimed_pts")
                            })]
                        })]
                    })]
                })
            };
            const Ta = "TeamList_teamListLink__EMea8"
              , Pa = "TeamList_icon__Dhul7"
              , Oa = "TeamList_teamList__w-ZJo"
              , Sa = "TeamList_listPlaceholder__p9xfs";
            var Ea = function() {
                var e = hn().teams.slice(0, 3);
                return (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)(Ht, {
                        className: Ta,
                        to: A.teamList,
                        children: [(0,
                        g.O4)("ok_game_okxracer_leaderboard_top_teams"), (0,
                        T.jsx)(C.Z, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: Pa
                        })]
                    }), (0,
                    T.jsxs)("ul", {
                        className: Oa,
                        children: [e.map((function(e) {
                            return (0,
                            T.jsx)("li", {
                                children: (0,
                                T.jsx)(Ht, {
                                    to: (0,
                                    s.generatePath)(A.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    T.jsx)(Jn, (0,
                                    h.Z)((0,
                                    h.Z)({}, e), {}, {
                                        highlightCurrentTeam: !1
                                    }))
                                })
                            }, e.teamId)
                        }
                        )), 0 === e.length && (0,
                        T.jsx)(T.Fragment, {
                            children: Array.from({
                                length: 3
                            }).map((function(e, t) {
                                return (0,
                                T.jsx)("li", {
                                    children: (0,
                                    T.jsx)(P, {
                                        className: Sa
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const Ia = "TeamsPage_banner__kJ07n"
              , Ba = "TeamsPage_rulesBtn__kbf-e"
              , La = "TeamsPage_upgradesLink__ks2+R"
              , Ra = "TeamsPage_icon__RIsDk"
              , Aa = "TeamsPage_pageTitle__5jH4j"
              , Da = "TeamsPage_video__gEbdZ"
              , Fa = "TeamsPage_joinTeamBtn__QZ2+Q"
              , Ma = "TeamsPage_subtitle__UxY6O"
              , Ua = "TeamsPage_teamCard__h6zcj";
            var Ga = [{
                src: "/cdn/assets/files/2410/3ECD604AAAD66923.mp4",
                type: "video/mp4"
            }, {
                src: "/cdn/assets/files/2410/31AAF553D96E7302.webm",
                type: "video/webm"
            }]
              , Wa = function() {
                var e = Qt().isCertified
                  , t = hn()
                  , n = t.currentTeam
                  , r = t.getTeams
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , l = i[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1];
                (0,
                a.useEffect)((function() {
                    r()
                }
                ), [r]);
                return (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)("div", {
                        className: Ia,
                        children: [(0,
                        T.jsxs)(Ht, {
                            to: A.upgrades,
                            className: La,
                            children: [(0,
                            T.jsx)(C.Z, {
                                iconName: "okx-growth-upgrades",
                                className: Ra
                            }), (0,
                            g.O4)("ok_game_okxracer_nav_upgrades")]
                        }), (0,
                        T.jsxs)("button", {
                            className: Ba,
                            type: "button",
                            onClick: function() {
                                p(!0)
                            },
                            children: [(0,
                            T.jsx)(C.Z, {
                                iconName: "okds-question-mark-circle",
                                className: Ra
                            }), (0,
                            g.O4)("ok_game_okxracer_tag_rules")]
                        }), (0,
                        T.jsx)("video", {
                            className: Da,
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            controls: !1,
                            preload: "auto",
                            poster: "".concat(c.Z.cdnBaseUrl).concat("/cdn/assets/imgs/2410/EB79DD3F2B0CFDF2.png"),
                            children: Ga.map((function(e) {
                                return (0,
                                T.jsx)("source", {
                                    src: "".concat(c.Z.cdnBaseUrl).concat(e.src),
                                    type: e.type
                                }, e.src)
                            }
                            ))
                        }), (0,
                        T.jsx)(ia, {
                            className: Aa,
                            html: e && n ? (0,
                            g.O4)("ok_game_okxracer_tips_race_with_the_best") : (0,
                            g.O4)("ok_game_okxracer_winning_team")
                        }), !n && (0,
                        T.jsx)(T.Fragment, {
                            children: e ? (0,
                            T.jsxs)(T.Fragment, {
                                children: [(0,
                                T.jsx)("p", {
                                    className: Ma,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_text_join_or_create_team")
                                }), (0,
                                T.jsx)(Ht, {
                                    to: A.teamList,
                                    children: (0,
                                    T.jsx)(_t, {
                                        className: Fa,
                                        text: (0,
                                        g.O4)("ok_game_okxracer_btn_join_a_team"),
                                        size: b.default.SIZE.sm
                                    })
                                })]
                            }) : (0,
                            T.jsxs)(T.Fragment, {
                                children: [(0,
                                T.jsx)("p", {
                                    className: Ma,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_get_certified_battle")
                                }), (0,
                                T.jsx)(_t, {
                                    className: Fa,
                                    text: (0,
                                    g.O4)("ok_game_okxracer_btn_get_certified"),
                                    size: b.default.SIZE.sm,
                                    onClick: function() {
                                        l(!0)
                                    }
                                })]
                            })
                        })]
                    }), n && (0,
                    T.jsx)(ya, {
                        team: n,
                        className: Ua
                    }), (0,
                    T.jsx)(Ea, {}), (0,
                    T.jsx)(fn, {
                        visible: o,
                        onClose: function() {
                            l(!1)
                        },
                        handleVerified: function() {
                            l(!1)
                        }
                    }), (0,
                    T.jsx)(ma, {
                        visible: m,
                        onClose: function() {
                            p(!1)
                        }
                    })]
                })
            }
              , Va = (0,
            a.createContext)({
                campaigns: [],
                loading: !1,
                openCampaignPage: function() {}
            })
              , Ha = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1];
                (0,
                a.useEffect)((function() {
                    m(!0);
                    var e = function() {
                        var e = (0,
                        l.Z)((0,
                        o.Z)().mark((function e() {
                            var t;
                            return (0,
                            o.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        He(!0);
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
                var p = function(e) {
                    var t, n;
                    null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e.webUrl)
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
                T.jsx)(Va.Provider, {
                    value: f,
                    children: t
                })
            };
            const Ka = "App_container__p+0qT"
              , Ya = "App_footer__NGiBl"
              , za = "App_content__Jjurs"
              , Xa = "ComPaddingLayout_common-padding-layout__0gGbM";
            var qa = function(e) {
                return function(t) {
                    return (0,
                    T.jsx)("div", {
                        className: Xa,
                        children: (0,
                        T.jsx)(e, (0,
                        h.Z)({}, t))
                    })
                }
            };
            const Ja = "RiskControl_title__h9Z0T";
            var Qa = function() {
                var e = at()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                T.jsx)(ot, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    T.jsx)("div", {
                        className: Ja,
                        children: (0,
                        g.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , $a = n(8031)
              , er = new (function() {
                return (0,
                ke.Z)((function e() {
                    var t = this;
                    (0,
                    ge.Z)(this, e),
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
                    this.connection = new $a.Z({
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
              , tr = (0,
            a.createContext)(er)
              , nr = function(e) {
                var t = e.children;
                return (0,
                T.jsx)(tr.Provider, {
                    value: er,
                    children: t
                })
            }
              , ar = (0,
            a.createContext)(null)
              , rr = function() {
                return (0,
                a.useContext)(ar)
            }
              , sr = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useContext)(tr);
                return (0,
                a.useEffect)((function() {
                    c.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [c]),
                (0,
                T.jsx)(ar.Provider, {
                    value: s,
                    children: t
                })
            }
              , ir = n(46430)
              , cr = "racer"
              , or = function() {
                var e;
                if (!(0,
                ce.y)())
                    return ir.Z.getInstance(cr) || ir.Z.init({
                        project: cr
                    }),
                    null !== (e = ir.Z.getInstance(cr)) && void 0 !== e ? e : ir.Z
            }
              , lr = "guessRecords_new";
            function ur(e) {
                var t = or().get(lr) || [];
                t.unshift(e),
                or().set(lr, t.slice(0, 5))
            }
            var dr = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , _r = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: dr.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: dr.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , mr = (0,
            a.createContext)(_r)
              , pr = function() {
                return (0,
                a.useContext)(mr)
            }
              , fr = function(e) {
                var t = e.children
                  , n = $().uid
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
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
                  , k = (0,
                a.useState)(null)
                  , j = (0,
                u.Z)(k, 2)
                  , C = j[0]
                  , N = j[1]
                  , b = (0,
                a.useState)(dr.NONE)
                  , w = (0,
                u.Z)(b, 2)
                  , Z = w[0]
                  , y = w[1]
                  , P = rr()
                  , O = at().updateGameInfo
                  , S = (0,
                a.useRef)(dr.NONE)
                  , E = (0,
                a.useRef)(1)
                  , I = (0,
                a.useRef)(10)
                  , L = (0,
                a.useRef)(null)
                  , R = (0,
                a.useRef)(null)
                  , A = (0,
                a.useRef)(null)
                  , D = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = S.current === dr.UP ? 1 : 0,
                                e.next = 4,
                                Ie({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (N(a.won),
                                O({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                E.current = a.multiplier,
                                I.current = a.basePoint,
                                L.current = Number(a.changeRate),
                                R.current = a.prevPrice,
                                A.current = a.currentPrice,
                                ur({
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
                                N(null),
                                L.current = null,
                                se(!1, (0,
                                g.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                S.current = dr.NONE,
                                c(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [O]);
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
                        if (h) {
                            var e = P > h;
                            y(P === h ? dr.NONE : e ? dr.UP : dr.DOWN)
                        } else
                            v(P)
                }
                ), [h, i, P]);
                var F = (0,
                a.useCallback)((function(e) {
                    N(null),
                    c(!0),
                    S.current = e,
                    L.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === dr.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        B.act({
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
                    e === dr.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        B.act({
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
                  , M = (0,
                a.useMemo)((function() {
                    return {
                        countdown: m,
                        onButtonClick: F,
                        result: C,
                        isPending: i,
                        currentTrend: Z,
                        multiplier: E.current,
                        basePoints: I.current,
                        predict: S.current,
                        changeRate: L.current,
                        prevPrice: R.current,
                        currentPrice: A.current
                    }
                }
                ), [m, Z, i, E, F, C]);
                return (0,
                T.jsx)(mr.Provider, {
                    value: M,
                    children: t
                })
            };
            const xr = "ClaimTeamPointsBottomSheet_container__1wnim"
              , hr = "ClaimTeamPointsBottomSheet_graphic__5TzK4"
              , vr = "ClaimTeamPointsBottomSheet_title__NsQhi"
              , gr = "ClaimTeamPointsBottomSheet_desc__RAIVt"
              , kr = "ClaimTeamPointsBottomSheet_btn__pC8CP"
              , jr = "ClaimTeamPointsBottomSheet_btnContent__ze-Xt";
            var Cr = function() {
                var e = hn()
                  , t = e.isEligibleClaim
                  , n = e.isLoading
                  , r = e.teamBenefits
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.Z)(s, 2)
                  , d = i[0]
                  , _ = i[1];
                (0,
                a.useEffect)((function() {
                    n || _(t)
                }
                ), [t, n]);
                var m = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    Ue({
                                        id: Number(null === r || void 0 === r ? void 0 : r.rankRewardTaskId)
                                    });
                                case 5:
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_toast_you_have_successfully_claimed")),
                                    _(!1),
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(2),
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_error_high_traffic"));
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
                T.jsx)(ot, {
                    visible: d,
                    onClose: function() {
                        _(!1)
                    },
                    children: (0,
                    T.jsxs)("div", {
                        className: xr,
                        children: [(0,
                        T.jsx)(ne.Z, {
                            className: hr,
                            src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/2410/3F84F994EA1D6F77.svg")
                        }), (0,
                        T.jsx)("h2", {
                            className: vr,
                            children: (0,
                            g.O4)("ok_game_okxracer_bttmsheet_header_great_job")
                        }), (0,
                        T.jsx)("p", {
                            className: gr,
                            children: (0,
                            g.O4)("ok_game_okxracer_bttmsheet_desc_great_job")
                        }), (0,
                        T.jsx)(b.default, {
                            className: kr,
                            contentClassName: jr,
                            size: b.default.SIZE.lg,
                            type: b.default.TYPE.primary,
                            htmlType: "button",
                            onClick: m,
                            children: (0,
                            g.O4)("ok_game_okxracer_btn_claim_pts")
                        })]
                    })
                })
            };
            const Nr = "NewCampaigns_container__gO1Ko"
              , br = "NewCampaigns_img__Or37G"
              , wr = "NewCampaigns_title__Lx+PB"
              , Zr = "NewCampaigns_desc__U9VKz"
              , yr = "NewCampaigns_btn__xIIk1";
            var Tr = function() {
                var e = (0,
                s.useHistory)()
                  , t = (0,
                s.useLocation)()
                  , n = !1
                  , a = function() {};
                return (0,
                T.jsxs)(ot, {
                    visible: n,
                    onClose: a,
                    containerClassName: Nr,
                    children: [(0,
                    T.jsx)(ne.Z, {
                        pictureClassName: br,
                        className: br,
                        src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    T.jsx)("p", {
                        className: wr,
                        children: (0,
                        g.O4)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    T.jsx)("p", {
                        className: Zr,
                        children: (0,
                        g.O4)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    T.jsx)(_t, {
                        className: yr,
                        onClick: function() {
                            e.push({
                                pathname: A.license,
                                hash: t.hash
                            })
                        },
                        text: (0,
                        g.O4)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            }
              , Pr = n(96450)
              , Or = 2e3
              , Sr = 500
              , Er = "\ud83c\udfc1";
            function Ir(e) {
                return (Math.abs(e) < 1e-4 ? Pr.yx.ceilTruncate : Pr.yx.floorTruncate)(e, 4)
            }
            const Br = "GuessResult_container__ECdpL"
              , Lr = "GuessResult_title__fzYxg"
              , Rr = "GuessResult_multiplier__yRHWm"
              , Ar = "GuessResult_description__R2fup"
              , Dr = "GuessResult_detailsIcon__ZE7Ry"
              , Fr = "GuessResult_changeRateContainer__a5-N7"
              , Mr = "GuessResult_label__+b5Nz"
              , Ur = "GuessResult_changeRate__yhVz3"
              , Gr = "GuessResult_up__5vYDR"
              , Wr = "GuessResult_down__fa-oP"
              , Vr = "GuessResult_priceChange__xr6e8"
              , Hr = "GuessResult_price__Vk+bY";
            function Kr(e) {
                return (0,
                k.xG)((0,
                k.uf)(Pr.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var Yr = function(e) {
                var t = e.className
                  , n = pr()
                  , r = n.result
                  , s = n.multiplier
                  , i = n.changeRate
                  , c = n.prevPrice
                  , o = n.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
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
                            ), Or)
                        }
                        ), Sr)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [r]),
                (0,
                T.jsx)(T.Fragment, {
                    children: _ && (0,
                    T.jsxs)("div", {
                        className: Z()(t, Br),
                        children: [(0,
                        T.jsx)("p", {
                            className: Rr,
                            children: r ? (0,
                            T.jsxs)("span", {
                                className: Dr,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            T.jsx)("span", {
                                className: Dr,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        T.jsx)("h2", {
                            className: Lr,
                            children: (0,
                            g.O4)(r ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        T.jsxs)("div", {
                            className: Ar,
                            children: [null !== i && (0,
                            T.jsxs)("p", {
                                className: Fr,
                                children: [(0,
                                T.jsx)("span", {
                                    className: Mr,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                T.jsx)("span", {
                                    className: Z()(Ur, (0,
                                    mt.Z)((0,
                                    mt.Z)({}, Gr, i > 0), Wr, i < 0)),
                                    children: (0,
                                    k.uf)(Ir(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && o && (0,
                            T.jsx)("p", {
                                className: Vr,
                                children: (0,
                                g.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    T.jsx)("span", {
                                        className: Hr,
                                        children: Kr(c)
                                    }),
                                    currentPrice: (0,
                                    T.jsx)("span", {
                                        className: Hr,
                                        children: Kr(o)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const zr = "TncButton_termsAndConditions__MyIpV";
            var Xr = function(e) {
                var t = e.className;
                return (0,
                T.jsx)("button", {
                    className: Z()(zr, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    g.O4)("ok_game_okxracer_tnc")
                })
            };
            const qr = "AutoPilot_title__NJa0C"
              , Jr = "AutoPilot_button__Sg42v";
            var Qr = function() {
                var e = at()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                T.jsxs)(ot, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    T.jsx)("div", {
                        className: qr,
                        children: (0,
                        g.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            k.uf)(n)
                        })
                    }), (0,
                    T.jsx)(_t, {
                        className: Jr,
                        onClick: a,
                        text: (0,
                        g.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const $r = "BackgroundVideo_container__J5sO2"
              , es = "BackgroundVideo_muteButton__04Huj"
              , ts = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , ns = "BackgroundVideo_staticImage__EpRTb"
              , as = "BackgroundVideo_video__XEWIJ"
              , rs = "BackgroundVideo_hide__ZXYN9";
            var ss, is, cs, os, ls, us, ds = "backgroundVideoSoundOn", _s = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", ms = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }], ps = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }], fs = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.Z.cdnBaseUrl).concat(_s)
            }, xs = function() {
                var e = pr().isPending
                  , t = (0,
                a.useRef)(null)
                  , n = (0,
                a.useRef)(null)
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
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
                  , v = f[1]
                  , g = or()
                  , k = (0,
                a.useState)((function() {
                    var e = g.get(ds);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(k, 2)
                  , N = j[0]
                  , w = j[1];
                (0,
                a.useEffect)((function() {
                    t.current && (e && (v(!1),
                    t.current.currentTime = 0,
                    t.current.play().then((function() {
                        o(!0)
                    }
                    )).catch((function() {
                        o(!1)
                    }
                    ))),
                    t.current.onended = function() {
                        var e;
                        v(!0),
                        null === (e = n.current) || void 0 === e || e.play().then((function() {
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
                var y = !i && !_
                  , P = i && x && _
                  , O = i && (!x || !_);
                return (0,
                T.jsxs)("div", {
                    className: $r,
                    children: [(0,
                    T.jsx)(b.default, {
                        category: b.default.CATEGORY.fill,
                        type: b.default.TYPE.quaternary,
                        size: b.default.SIZE.md,
                        className: es,
                        strictCircle: !0,
                        onClick: function() {
                            w((function(e) {
                                return g.set(ds, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        T.jsx)(C.Z, {
                            iconName: N ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: ts
                        })
                    }), (0,
                    T.jsx)(ne.Z, {
                        className: Z()(ns, (0,
                        mt.Z)({}, rs, !y)),
                        src: "".concat(c.Z.cdnBaseUrl).concat(_s)
                    }), (0,
                    T.jsx)("video", (0,
                    h.Z)((0,
                    h.Z)({}, fs), {}, {
                        className: Z()(as, (0,
                        mt.Z)({}, rs, !P)),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: ms.map((function(e) {
                            return (0,
                            T.jsx)("source", {
                                src: "".concat(c.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    })), (0,
                    T.jsx)("video", (0,
                    h.Z)((0,
                    h.Z)({}, fs), {}, {
                        className: Z()((0,
                        mt.Z)({}, rs, !O)),
                        ref: t,
                        muted: N,
                        children: ps.map((function(e) {
                            return (0,
                            T.jsx)("source", {
                                src: "".concat(c.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }, hs = ["title", "titleId"];
            function vs() {
                return vs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                vs.apply(null, arguments)
            }
            function gs(e, t) {
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
                }(e, hs);
                return a.createElement("svg", vs({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ss || (ss = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), is || (is = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), cs || (cs = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), os || (os = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), ls || (ls = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), us || (us = a.createElement("defs", null, a.createElement("filter", {
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
            var ks = a.forwardRef(gs);
            n.p;
            var js, Cs, Ns, bs, ws, Zs, ys = ["title", "titleId"];
            function Ts() {
                return Ts = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Ts.apply(null, arguments)
            }
            function Ps(e, t) {
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
                }(e, ys);
                return a.createElement("svg", Ts({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, js || (js = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), Cs || (Cs = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Ns || (Ns = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), bs || (bs = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), ws || (ws = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), Zs || (Zs = a.createElement("defs", null, a.createElement("filter", {
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
            var Os = a.forwardRef(Ps);
            n.p;
            const Ss = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var Es, Is = function(e) {
                var t = e.className
                  , n = pr()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , c = at().numChances
                  , o = (0,
                a.useState)()
                  , l = (0,
                u.Z)(o, 2)
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
                    s || d || (_(e === dr.UP ? dr.DOWN : dr.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = c <= 0;
                return (0,
                T.jsxs)("div", {
                    className: t,
                    children: [(0,
                    T.jsx)("p", {
                        className: Z()(Ss.instructions, s && Ss.hide),
                        children: (0,
                        g.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    T.jsxs)("div", {
                        className: Ss.btnContainer,
                        children: [(0,
                        T.jsxs)("button", {
                            disabled: p || d === dr.UP,
                            onClick: function() {
                                return m(dr.UP)
                            },
                            type: "button",
                            className: Z()(Ss.btn, Ss.upBtn, (0,
                            mt.Z)({}, Ss.pressed, i === dr.UP)),
                            children: [(0,
                            T.jsx)(Os, {
                                className: Z()(Ss.btnGraphic, Ss.upBtnGraphic)
                            }), (0,
                            T.jsxs)("span", {
                                className: Ss.btnText,
                                children: [(0,
                                g.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                T.jsx)(C.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: Ss.arrow
                                })]
                            })]
                        }), (0,
                        T.jsxs)("button", {
                            disabled: p || d === dr.DOWN,
                            onClick: function() {
                                return m(dr.DOWN)
                            },
                            type: "button",
                            className: Z()(Ss.btn, Ss.downBtn, (0,
                            mt.Z)({}, Ss.pressed, i === dr.DOWN)),
                            children: [(0,
                            T.jsx)(ks, {
                                className: Z()(Ss.btnGraphic, Ss.downBtnGraphic)
                            }), (0,
                            T.jsxs)("span", {
                                className: Ss.btnText,
                                children: [(0,
                                g.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                T.jsx)(C.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: Ss.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, Bs = ["title", "titleId"];
            function Ls() {
                return Ls = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Ls.apply(null, arguments)
            }
            function Rs(e, t) {
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
                }(e, Bs);
                return a.createElement("svg", Ls({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Es || (Es = a.createElement("g", {
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
            var As = a.forwardRef(Rs);
            n.p;
            var Ds = n(31301);
            n(27668);
            const Fs = "FuelIndicator_fuelContainer__QIskL"
              , Ms = "FuelIndicator_line__tWBfm"
              , Us = "FuelIndicator_description__EaUsa"
              , Gs = "FuelIndicator_fuelIcon__I38Ss"
              , Ws = "FuelIndicator_maxChances__OMSHl";
            var Vs, Hs, Ks = function(e) {
                var t = e.className
                  , n = at()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                T.jsxs)("div", {
                    className: Z()(t, Fs),
                    children: [(0,
                    T.jsx)("span", {
                        className: Gs,
                        children: "\u26fd\ufe0f"
                    }), (0,
                    T.jsx)(Ds.Z.Line, {
                        className: Ms,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r), (0,
                    T.jsxs)("p", {
                        className: Us,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        T.jsxs)(T.Fragment, {
                            children: ["/\xa0", (0,
                            T.jsx)("span", {
                                className: Ws,
                                children: r
                            })]
                        })]
                    })]
                })
            }, Ys = ["title", "titleId"];
            function zs() {
                return zs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                zs.apply(null, arguments)
            }
            function Xs(e, t) {
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
                }(e, Ys);
                return a.createElement("svg", zs({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Vs || (Vs = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Hs || (Hs = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var qs = a.forwardRef(Xs);
            n.p;
            const Js = "RefuelTimer_container__wtALO"
              , Qs = "RefuelTimer_graphic__naxi3"
              , $s = "RefuelTimer_countdown__THIa3"
              , ei = "RefuelTimer_description__sD+HM"
              , ti = "RefuelTimer_timer__LL1+c"
              , ni = "RefuelTimer_square__3Hum0"
              , ai = "RefuelTimer_upgradesLink__-+8Sr";
            var ri = function(e) {
                var t = e.className
                  , n = at().countdownDisplay;
                return (0,
                T.jsxs)("div", {
                    className: Z()(t, Js),
                    children: [(0,
                    T.jsx)(qs, {
                        className: Qs,
                        preserveAspectRatio: "none"
                    }), (0,
                    T.jsxs)("p", {
                        className: ei,
                        children: [n && (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)("span", {
                                className: $s,
                                children: (0,
                                g.Lg)("ok_game_okxracer_nx_refill_time", {
                                    countDown: (0,
                                    T.jsxs)("span", {
                                        className: ti,
                                        children: ["\xa0", n]
                                    })
                                })
                            }), (0,
                            T.jsx)("span", {
                                className: ni
                            })]
                        }), (0,
                        T.jsxs)(Ht, {
                            to: A.upgrades,
                            className: ai,
                            children: [!n && (0,
                            T.jsx)(C.Z, {
                                iconName: "okx-growth-upgrades"
                            }), (0,
                            g.O4)("ok_game_okxracer_nav_upgrades"), (0,
                            T.jsx)(C.Z, {
                                iconName: "okx-growth-chevrons-right"
                            })]
                        })]
                    })]
                })
            };
            const si = "CoinPrice_raceTrack__NZO2t"
              , ii = "CoinPrice_run__f0UIF"
              , ci = "CoinPrice_coinPriceContainer__YbeUE"
              , oi = "CoinPrice_content__a-5Jl"
              , li = "CoinPrice_fuelIndicator__p+f1I"
              , ui = "CoinPrice_refuelTimer__tbWMw"
              , di = "CoinPrice_hide__bHhxJ"
              , _i = "CoinPrice_label__yTNy0"
              , mi = "CoinPrice_value__ZjRZz"
              , pi = "CoinPrice_slotMachine__hUQKt"
              , fi = "SlotMachine_row__a4TO0"
              , xi = "SlotMachine_animate__-G4TR"
              , hi = "SlotMachine_column__aR0VE"
              , vi = "SlotMachine_arrows__m1dhv"
              , gi = "SlotMachine_columnContainer__a76pd"
              , ki = "SlotMachine_background__b9TMg"
              , ji = "SlotMachine_slot__jwCvC"
              , Ci = "SlotMachine_staticColumn__O5zfB"
              , Ni = "SlotMachine_sm__ZRCig"
              , bi = "SlotMachine_arrow__qOYmf"
              , wi = "SlotMachine_wentUp__z48TO"
              , Zi = "SlotMachine_down__aYC8C"
              , yi = "SlotMachine_stable__CDMLP"
              , Ti = "SlotMachine_wentDown__1fYUS"
              , Pi = "SlotMachine_up__IuiYV";
            var Oi = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                T.jsxs)("div", {
                    className: gi,
                    children: [(0,
                    T.jsx)("div", {
                        className: ki
                    }), (0,
                    T.jsxs)("div", {
                        className: hi,
                        style: r,
                        children: [(0,
                        T.jsx)("p", {
                            className: ji,
                            children: a
                        }), t && (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)("p", {
                                className: ji,
                                children: "1"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "2"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "3"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "4"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "5"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "6"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "7"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "8"
                            }), (0,
                            T.jsx)("p", {
                                className: ji,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , Si = function() {
                var e = pr()
                  , t = e.changeRate
                  , n = e.isPending
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , o = (0,
                a.useState)(null)
                  , l = (0,
                u.Z)(o, 2)
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
                    n && x(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? dr.UP : 0 === e ? dr.NONE : dr.DOWN),
                    c(String(Math.abs(Number(Ir(t)))).split("").filter((function(e) {
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
                T.jsxs)("div", {
                    className: Z()(fi, f && xi),
                    children: [(0,
                    T.jsx)("div", {
                        className: gi,
                        children: (0,
                        T.jsxs)("div", {
                            className: Z()(vi, (0,
                            mt.Z)((0,
                            mt.Z)((0,
                            mt.Z)({}, wi, d === dr.UP), Ti, d === dr.DOWN), yi, d === dr.NONE)),
                            children: [(0,
                            T.jsx)(C.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: Z()(bi, Pi)
                            }), (0,
                            T.jsx)(C.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: Z()(bi, yi)
                            }), (0,
                            T.jsx)(C.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: Z()(bi, Zi)
                            })]
                        })
                    }), (0,
                    T.jsx)(Oi, {
                        animate: f,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    T.jsx)("span", {
                        className: Ci,
                        children: "."
                    }), (0,
                    T.jsx)(Oi, {
                        animate: f,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    T.jsx)(Oi, {
                        animate: f,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    T.jsx)(Oi, {
                        animate: f,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    T.jsx)(Oi, {
                        animate: f,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    T.jsx)("span", {
                        className: Z()(Ci, Ni),
                        children: "%"
                    })]
                })
            }
              , Ei = function() {
                var e = rr()
                  , t = pr()
                  , n = t.isPending
                  , r = t.changeRate
                  , s = (0,
                a.useState)(!1)
                  , i = (0,
                u.Z)(s, 2)
                  , c = i[0]
                  , o = i[1];
                (0,
                a.useEffect)((function() {
                    n && o(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    var e, t = function() {
                        e && clearTimeout(e)
                    };
                    return n || (null === r ? o(!1) : e = setTimeout((function() {
                        o(!1)
                    }
                    ), Sr)),
                    t
                }
                ), [r, n]);
                var l = e ? "$".concat((0,
                k.uf)(Pr.yx.truncate(e, 1, !0))) : "--";
                return (0,
                T.jsxs)("div", {
                    className: ci,
                    children: [(0,
                    T.jsx)(As, {
                        className: Z()(si, n && ii)
                    }), (0,
                    T.jsxs)("div", {
                        className: Z()(oi, c && di),
                        children: [(0,
                        T.jsx)("p", {
                            className: _i,
                            children: (0,
                            g.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        T.jsx)("p", {
                            className: mi,
                            children: l
                        })]
                    }), (0,
                    T.jsxs)("div", {
                        className: Z()(oi, !c && di),
                        children: [(0,
                        T.jsxs)("p", {
                            className: _i,
                            children: [(0,
                            g.O4)("ok_game_okxracer_btc_price"), " ", l]
                        }), (0,
                        T.jsx)("div", {
                            className: pi,
                            children: (0,
                            T.jsx)(Si, {})
                        })]
                    }), (0,
                    T.jsx)(Ks, {
                        className: li
                    }), (0,
                    T.jsx)("div", {
                        className: Z()(ui, n && di),
                        children: (0,
                        T.jsx)(ri, {})
                    })]
                })
            };
            const Ii = "LandingPage_container__pU2cC"
              , Bi = "LandingPage_resultOverlay__WSYZb"
              , Li = "LandingPage_disclaimer__pVRHC"
              , Ri = "LandingPage_recordsBtnContainer__Anr4Y"
              , Ai = "LandingPage_backgroundVideo__flTkH"
              , Di = "LandingPage_content__D0ZLW"
              , Fi = "LandingPage_points__Ruq4j"
              , Mi = "LandingPage_coinPrice__nJ0nj"
              , Ui = "LandingPage_btnContainer__IEll8"
              , Gi = "LandingPage_termsAndConditions__MdClU";
            var Wi = n(71979);
            const Vi = "NewbieWelcome_title__48Py5"
              , Hi = "NewbieWelcome_desc__q7GHz"
              , Ki = "NewbieWelcome_button__im+B1"
              , Yi = "NewbieWelcome_pointsBox__gOjMh"
              , zi = "NewbieWelcome_points__4t75l"
              , Xi = "NewbieWelcome_animation__tf9Dj";
            var qi = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = c.Z.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                Wi.Z)((0,
                l.Z)((0,
                o.Z)().mark((function a() {
                    return (0,
                    o.Z)().wrap((function(a) {
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
                T.jsx)(T.Fragment, {
                    children: (0,
                    T.jsx)("div", {
                        ref: e,
                        className: Xi
                    })
                })
            }
              , Ji = function() {
                var e = at()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                T.jsxs)(ot, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)(qi, {}), (0,
                            T.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    T.jsx)("div", {
                        className: Yi,
                        children: (0,
                        T.jsx)("img", {
                            src: "".concat(c.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: zi
                        })
                    }), (0,
                    T.jsx)("div", {
                        className: Vi,
                        children: (0,
                        g.O4)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    T.jsx)("div", {
                        className: Hi,
                        children: (0,
                        g.O4)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    T.jsx)(_t, {
                        className: Ki,
                        onClick: t,
                        text: (0,
                        g.O4)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , Qi = n(22387);
            const $i = "UserPointCounter_pointCounter__-QAj8"
              , ec = "UserPointCounter_hide__o4qTQ"
              , tc = "UserPointCounter_points__d3HeG"
              , nc = "UserPointCounter_title__B-gN-"
              , ac = "UserPointCounter_countdown__Z7xGo"
              , rc = "UserPointCounter_value__2a23E";
            var sc = function() {
                var e = at().points
                  , t = (0,
                Qi.Z)(e)
                  , n = pr()
                  , r = n.isPending
                  , s = n.countdown
                  , i = (0,
                a.useRef)(null)
                  , c = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(c, 2)
                  , l = o[0]
                  , d = o[1];
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
                    k.uf)(String(e))),
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
                T.jsxs)("div", {
                    className: $i,
                    children: [(0,
                    T.jsxs)("p", {
                        className: Z()(nc, l && ec),
                        children: ["\ud83c\udfc6 ", (0,
                        g.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    T.jsx)("p", {
                        ref: i,
                        className: Z()(tc, l && ec),
                        children: "0"
                    }), (0,
                    T.jsxs)("p", {
                        className: Z()(ac, !l && ec),
                        children: ["00:0", (0,
                        T.jsx)("span", {
                            className: rc,
                            children: s
                        })]
                    })]
                })
            }
              , ic = n(39136)
              , cc = n(52008);
            function oc(e) {
                return !!e && "proof"in e
            }
            var lc = function(e, t) {
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
                        o.Z)().mark((function t(r) {
                            var s, i, c, l, u, d, _, m, p, f, x, h, v, g;
                            return (0,
                            o.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        s = null === e || void 0 === e ? void 0 : e.wallet,
                                        r && s && (i = s.account,
                                        c = i.address,
                                        l = i.publicKey,
                                        u = s.connectItems,
                                        d = s.device.appName,
                                        oc(_ = null === u || void 0 === u ? void 0 : u.tonProof) && (m = _.proof,
                                        p = m.signature,
                                        f = m.payload,
                                        x = m.domain,
                                        h = m.timestamp,
                                        v = cc.Address.parse(c),
                                        g = v.toString({
                                            urlSafe: !0,
                                            bounceable: !1,
                                            testOnly: !1
                                        }),
                                        e.connected && e.disconnect(),
                                        a({
                                            tonAddress: g,
                                            publicKey: l,
                                            signature: p,
                                            appName: d,
                                            msg: JSON.stringify({
                                                payload: f,
                                                domain: null === x || void 0 === x ? void 0 : x.value,
                                                timestamp: h
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
              , uc = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    var a, r, s, i, c;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 1,
                                a = lc(t, n),
                                r = a.promise,
                                s = a.unsubscribe,
                                e.next = 5,
                                r;
                            case 5:
                                return i = e.sent,
                                c = s,
                                s(),
                                R({
                                    source: "app"
                                }),
                                e.abrupt("return", [i, c]);
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && ae.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
              , dc = function(e) {
                var t = (0,
                d.useOKXTonConnectUI)()
                  , n = (0,
                u.Z)(t, 1)[0]
                  , r = $().uid
                  , s = (0,
                a.useRef)((function() {}
                ))
                  , i = function() {
                    var t = (0,
                    l.Z)((0,
                    o.Z)().mark((function t() {
                        var a, i, c, l, d;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    uc(n, r);
                                case 3:
                                    if (!(a = t.sent)) {
                                        t.next = 12;
                                        break
                                    }
                                    return i = (0,
                                    u.Z)(a, 2),
                                    c = i[0],
                                    l = i[1],
                                    s.current = l,
                                    d = JSON.stringify((0,
                                    h.Z)({
                                        telegramId: r
                                    }, c)),
                                    t.next = 10,
                                    e(d, c.tonAddress);
                                case 10:
                                    t.sent && null !== c && void 0 !== c && c.appName && or().set(Y, null === c || void 0 === c ? void 0 : c.appName);
                                case 12:
                                    t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14,
                                    t.t0 = t.catch(0),
                                    ae.k.error("TON connectWallet failed", t.t0);
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
              , _c = function(e) {
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
            const mc = "ViewWalletButton_button__WbNMO"
              , pc = "ViewWalletButton_btnIcon__W5IFc";
            var fc = function() {
                var e = at()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , a = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Ue({
                                        id: 9,
                                        taskContext: t
                                    });
                                case 3:
                                    return se(!0, (0,
                                    g.O4)("ok_game_okxracer_task_completion_msg")),
                                    e.abrupt("return", !0);
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e.catch(0),
                                    ie(e.t0),
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
                  , r = dc(a).connectWallet
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var a, s, i, c, l, u;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.tonAddress) {
                                        e.next = 7;
                                        break
                                    }
                                    c = or(),
                                    l = c.get(Y),
                                    (u = l === X.TgWallet ? "https://t.me/OKX_WALLET_BOT/start" : t.tonDeeplink || "") && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i || i.openLink(u)),
                                    e.next = 11;
                                    break;
                                case 7:
                                    return e.next = 9,
                                    r();
                                case 9:
                                    return e.next = 11,
                                    Promise.allSettled([Me(), n()]);
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
                ic.Z)(s, {
                    wait: 500,
                    leading: !0
                }).run;
                return (0,
                T.jsxs)("button", {
                    className: mc,
                    type: "button",
                    onClick: i,
                    children: [(0,
                    T.jsx)(C.Z, {
                        iconName: "okx-growth-wallet",
                        className: pc
                    }), t.tonAddress ? _c(t.tonAddress || "") : (0,
                    g.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , xc = function() {
                var e = $().uid;
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        B.act({
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
                T.jsxs)("div", {
                    className: Ii,
                    children: [(0,
                    T.jsx)("div", {
                        className: Ri,
                        children: (0,
                        T.jsx)(fc, {})
                    }), (0,
                    T.jsx)("div", {
                        className: Ai,
                        children: (0,
                        T.jsx)(xs, {})
                    }), (0,
                    T.jsxs)("div", {
                        className: Di,
                        children: [(0,
                        T.jsx)("div", {
                            className: Fi,
                            children: (0,
                            T.jsx)(sc, {})
                        }), (0,
                        T.jsx)("div", {
                            className: Mi,
                            children: (0,
                            T.jsx)(Ei, {})
                        }), (0,
                        T.jsx)(Is, {
                            className: Ui
                        })]
                    }), (0,
                    T.jsx)(Xr, {
                        className: Gi
                    }), (0,
                    T.jsx)("p", {
                        className: Li,
                        children: (0,
                        g.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    T.jsx)(Yr, {
                        className: Bi
                    }), (0,
                    T.jsx)(Qr, {}), (0,
                    T.jsx)(Ji, {}), (0,
                    T.jsx)(Qa, {}), (0,
                    T.jsx)(Tr, {}), (0,
                    T.jsx)(Cr, {})]
                })
            }
              , hc = function() {
                return (0,
                T.jsx)(fr, {
                    children: (0,
                    T.jsx)(xc, {})
                })
            }
              , vc = n(55861);
            n(1016);
            const gc = "InviteBanner_bannerContainer__30zHC"
              , kc = "InviteBanner_bannerIcon__U6pI0"
              , jc = "InviteBanner_text__3Q8mq"
              , Cc = "InviteBanner_rightIcon__2Ly1W";
            var Nc = function(e) {
                var t = e.className;
                return (0,
                T.jsxs)(Ht, {
                    className: Z()(gc, t),
                    to: A.referrals,
                    children: [(0,
                    T.jsx)(C.Z, {
                        iconName: "okx-growth-friends",
                        className: kc
                    }), (0,
                    T.jsx)("div", {
                        className: jc,
                        children: (0,
                        g.O4)("ok_game_okxracer_select_season_two_invite_friends")
                    }), (0,
                    T.jsx)(C.Z, {
                        iconName: "okx-growth-chevrons-right",
                        className: Cc
                    })]
                })
            };
            const bc = "LeaderBoard_container__0DJSO"
              , wc = "LeaderBoard_inviteBanner__sql+w"
              , Zc = "LeaderBoard_pageTitle__vTUSh"
              , yc = "LeaderBoard_desc__MFxC+"
              , Tc = "LeaderBoard_inviteList__mV9a7"
              , Pc = "LeaderBoard_tabActiveClassName__7Xv4B"
              , Oc = "LeaderBoard_tabsContent__KCGtW"
              , Sc = "InviteButton_inviteBtn__gLbFB"
              , Ec = "InviteButton_btnA__+dJqi"
              , Ic = "InviteButton_btnContainer__lg4rV"
              , Bc = "InviteButton_copyButton__znucI"
              , Lc = "InviteButton_copyIcon__QZgE9";
            var Rc = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                g.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = $().uid
                  , s = at().linkCode
                  , i = q(s)
                  , c = i.shareUrl
                  , o = i.appUrl;
                return (0,
                T.jsxs)("div", {
                    className: Z()(a, Ic),
                    children: [(0,
                    T.jsx)("a", {
                        className: Ec,
                        href: c,
                        children: (0,
                        T.jsx)(_t, {
                            onClick: function() {
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    B.act({
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
                            className: Sc,
                            text: n
                        })
                    }), (0,
                    T.jsx)(b.default, {
                        strictCircle: !0,
                        category: b.default.CATEGORY.fill,
                        type: b.default.TYPE.primary,
                        size: b.default.SIZE.lg,
                        onClick: function() {
                            try {
                                navigator.clipboard.writeText(o),
                                se(!0, (0,
                                g.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                se(!1, "Copy Invite URL failed")
                            }
                        },
                        className: Bc,
                        children: (0,
                        T.jsx)(C.Z, {
                            iconName: "okx-growth-copy",
                            className: Lc
                        })
                    })]
                })
            };
            const Ac = "RankList_listItem__qJvXJ"
              , Dc = "RankList_name__sxTWa"
              , Fc = "RankList_mask__ldBi8"
              , Mc = "RankList_hightLightRow__xYkeg"
              , Uc = "RankList_rank__k2m5R"
              , Gc = "RankList_point__D5mVw"
              , Wc = "RankList_listHeader__KVGnw"
              , Vc = "RankList_icon__1-SRV"
              , Hc = "RankList_pointIcon__k80Wy"
              , Kc = "RankList_InviteButton__D6ute"
              , Yc = "RankList_noFirendsNote__Ckkil"
              , zc = "RankList_under__MJ5We"
              , Xc = "RankList_rankItemPlaceholder__z-upW"
              , qc = "RankList_rank-name__YEqnc"
              , Jc = "RankList_rank-score__gtI+m";
            var Qc = 1
              , $c = 2
              , eo = 3
              , to = function(e) {
                var t = e.total;
                return (0,
                T.jsxs)("div", {
                    className: Wc,
                    children: [(0,
                    T.jsx)("span", {
                        children: (0,
                        g.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            k.uf)(t)
                        })
                    }), (0,
                    T.jsx)("span", {
                        children: (0,
                        g.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , no = function() {
                return (0,
                T.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        T.jsxs)("div", {
                            className: Xc,
                            children: [(0,
                            T.jsx)(P, {
                                className: qc
                            }), (0,
                            T.jsx)(P, {
                                className: Jc
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , ao = function(e) {
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                T.jsxs)("div", {
                    className: Z()(Ac, n && Mc),
                    children: [(0,
                    T.jsx)("div", {
                        className: Fc
                    }), Wn(t.rank) ? (0,
                    T.jsx)("span", {
                        className: Z()(Uc, Vc),
                        children: Gn[t.rank]
                    }) : (0,
                    T.jsx)("span", {
                        className: Uc,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    T.jsx)("div", {
                        className: Dc,
                        children: t.extUserName
                    }), (0,
                    T.jsxs)("div", {
                        className: Gc,
                        children: [(0,
                        T.jsx)("span", {
                            className: Hc,
                            children: Gn[4]
                        }), (0,
                        g.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            k.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , ro = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? Qc : t
                  , r = (0,
                a.useState)(!0)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
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
                  , k = (0,
                a.useState)()
                  , j = (0,
                u.Z)(k, 2)
                  , C = j[0]
                  , N = j[1]
                  , b = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var a, r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        pageNo: t
                                    },
                                    n !== Qc) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Le(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Re(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (r = e.t0) && r.rows && (p(r.rows),
                                    v(r.total),
                                    N(r.userRanking)),
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t1 = e.catch(0),
                                    e.t1;
                                case 18:
                                    c(!1);
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
                  , w = C && ((null === C || void 0 === C ? void 0 : C.rank) > 3 || -1 === (null === C || void 0 === C ? void 0 : C.rank));
                return (0,
                a.useEffect)((function() {
                    b(1)
                }
                ), [b]),
                (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsx)(to, {
                        total: h
                    }), i ? (0,
                    T.jsx)(no, {}) : (0,
                    T.jsxs)(T.Fragment, {
                        children: [w && (0,
                        T.jsx)(ao, {
                            item: C,
                            isHighlight: !0
                        }), m.map((function(e, t) {
                            return (0,
                            T.jsx)(ao, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    T.jsx)("div", {
                        className: zc
                    }), n === Qc && (0,
                    T.jsxs)(T.Fragment, {
                        children: [1 === m.length && (0,
                        T.jsx)("div", {
                            className: Yc,
                            children: (0,
                            g.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        T.jsx)(Rc, {
                            className: Kc,
                            text: (0,
                            g.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , so = function() {
                return (0,
                T.jsxs)("div", {
                    className: bc,
                    children: [(0,
                    T.jsx)(Nc, {
                        className: wc
                    }), (0,
                    T.jsx)(ia, {
                        className: Zc,
                        html: (0,
                        g.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            g.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    T.jsx)("div", {
                        className: yc,
                        children: (0,
                        g.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    T.jsxs)(vc.Z, {
                        activeClassName: Pc,
                        noPadding: !0,
                        size: vc.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        T.jsx)(vc.Z.TabPane, {
                            className: Oc,
                            tab: (0,
                            g.O4)("ok_game_okxracer_tab_teams"),
                            id: eo,
                            children: (0,
                            T.jsx)("div", {
                                className: Tc,
                                children: (0,
                                T.jsx)(ta, {})
                            })
                        }), (0,
                        T.jsx)(vc.Z.TabPane, {
                            className: Oc,
                            tab: (0,
                            g.O4)("ok_game_okxracer_tab_global"),
                            id: $c,
                            children: (0,
                            T.jsx)("div", {
                                className: Tc,
                                children: (0,
                                T.jsx)(ro, {
                                    pageType: $c
                                })
                            })
                        }), (0,
                        T.jsx)(vc.Z.TabPane, {
                            tab: (0,
                            g.O4)("ok_game_okxracer_tab_friends"),
                            id: Qc,
                            className: Oc,
                            children: (0,
                            T.jsx)("div", {
                                className: Tc,
                                children: (0,
                                T.jsx)(ro, {
                                    pageType: Qc
                                })
                            })
                        })]
                    })]
                })
            };
            const io = "index_page__-xiuX"
              , co = "index_entering__yddHy";
            var oo = function(e) {
                var t = e.children
                  , n = e.animationPath
                  , r = (0,
                s.useLocation)()
                  , i = (0,
                a.useState)(r)
                  , c = (0,
                u.Z)(i, 2)
                  , o = c[0]
                  , l = c[1]
                  , d = (0,
                a.useState)("")
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = function() {
                    return p(co),
                    setTimeout((function() {
                        p("")
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
                T.jsx)("div", {
                    className: Z()(io, m),
                    children: (0,
                    T.jsx)(s.Switch, {
                        location: o,
                        children: t
                    })
                })
            }
              , lo = n(59257);
            const uo = "index_sheetContainer__VPbba"
              , _o = "index_logo__iAzol"
              , mo = "index_sheetName__X3wgl"
              , po = "index_sheetDesc__BGlZJ"
              , fo = "index_btn__jg8QD"
              , xo = "index_secondaryBtn__1oeGV"
              , ho = "index_btnText__ox2Nh";
            var vo = function(e) {
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
                u.Z)(m, 2)
                  , f = p[0]
                  , x = p[1]
                  , h = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return x(!0),
                                    e.next = 3,
                                    s();
                                case 3:
                                    x(!1);
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
                T.jsxs)("div", {
                    className: uo,
                    children: [i && (0,
                    T.jsx)(ne.Z, {
                        src: "".concat(c.Z.cdnBaseUrl).concat(i),
                        className: _o
                    }), (0,
                    T.jsx)("div", {
                        className: mo,
                        children: t
                    }), (0,
                    T.jsx)("div", {
                        className: po,
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            ra.dU)(n)
                        }
                    }), d, (0,
                    T.jsx)(_t, {
                        className: fo,
                        loading: f,
                        onClick: h,
                        text: r
                    }), _ && (0,
                    T.jsx)(b.default, {
                        category: b.default.CATEGORY.outline,
                        type: b.default.TYPE.primary,
                        size: b.default.SIZE.lg,
                        className: xo,
                        onClick: _.onClick,
                        children: (0,
                        T.jsx)("div", {
                            className: ho,
                            children: _.text
                        })
                    })]
                })
            }
              , go = function(e) {
                var t = e.task
                  , n = e.doTask
                  , a = t.context
                  , r = a.desc
                  , s = a.name
                  , i = a.btnText
                  , c = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                T.jsx)(vo, {
                    name: s,
                    desc: r,
                    btnText: i,
                    onPrimaryBtnClick: c
                })
            }
              , ko = n(69027);
            const jo = "index_copyBox__6n5nL"
              , Co = "index_icon__BHdDG"
              , No = "index_line__dTaE5";
            var bo = function(e) {
                var t = e.text
                  , n = e.showClose
                  , a = e.onClose
                  , r = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    navigator.clipboard.writeText(t || "");
                                case 3:
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_copied_url")),
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6,
                                    e.t0 = e.catch(0),
                                    se(!1, "Copy Invite URL failed");
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
                T.jsxs)("div", {
                    className: jo,
                    children: [(0,
                    T.jsx)("div", {
                        children: t
                    }), (0,
                    T.jsx)(C.Z, {
                        className: Z()("okx-growth-copy", Co),
                        onClick: r
                    }), s && (0,
                    T.jsxs)(T.Fragment, {
                        children: [(0,
                        T.jsx)("span", {
                            className: No
                        }), (0,
                        T.jsx)(C.Z, {
                            className: Z()("okds-close", Co),
                            onClick: a
                        })]
                    })]
                })
            }
              , wo = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Zo = "/cdn/assets/imgs/249/014A8107B107466F.png"
              , yo = [Ae.WalletConnect, Ae.ConnectEVMChain, Ae.OpenLink];
            var To = [Ae.WalletConnect, Ae.ConnectEVMChain];
            function Po(e) {
                if (e.state === V.unfinished)
                    return !0;
                var t = e.context.actionType;
                return To.includes(t)
            }
            var Oo = function(e) {
                var t = e.doTask
                  , n = e.task
                  , r = dc(function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(a) {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                    (null === n || void 0 === n ? void 0 : n.state) === V.finished ? B.act({
                        action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }) : B.act({
                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), [null === n || void 0 === n ? void 0 : n.state]),
                n.context.actionType !== Ae.WalletConnect)
                    return null;
                var i = n.context
                  , c = i.nameFinished
                  , u = i.tonAddress
                  , d = i.btnText
                  , _ = i.btnTextFinishedAndSwitch
                  , m = i.name
                  , p = i.desc;
                return (null === n || void 0 === n ? void 0 : n.state) === V.finished ? (0,
                T.jsx)(vo, {
                    name: c,
                    desc: "",
                    btnText: _,
                    logo: Zo,
                    onPrimaryBtnClick: s,
                    children: (0,
                    T.jsx)(bo, {
                        text: u
                    })
                }) : (0,
                T.jsx)(vo, {
                    name: m,
                    desc: p,
                    btnText: d,
                    logo: wo,
                    onPrimaryBtnClick: s
                })
            }
              , So = (0,
            mt.Z)((0,
            mt.Z)((0,
            mt.Z)((0,
            mt.Z)((0,
            mt.Z)({}, Ae.Normal, go), Ae.OpenLink, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== Ae.OpenLink)
                    return null;
                var a = n.context
                  , r = a.desc
                  , s = a.name
                  , i = a.btnText
                  , c = a.redirectLink
                  , u = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var a, r, s, i;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                T.jsx)(vo, {
                    name: s,
                    btnText: i,
                    desc: r,
                    onPrimaryBtnClick: u
                })
            }
            )), Ae.WalletConnect, Oo), Ae.WalletDepositConnect, (function(e) {
                var t = e.task
                  , n = e.doTask
                  , s = e.walletConnectTask
                  , i = at().context
                  , c = r().useState("")
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1];
                (0,
                a.useEffect)((function() {
                    m(i.tonAddress || "")
                }
                ), [i.tonAddress]);
                var p = dc(function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t, a) {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_task_completion_msg"))),
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
                  , f = p.connectWallet;
                if (t.context.actionType !== Ae.WalletDepositConnect)
                    return null;
                var x = t.context
                  , h = x.verifyBtnText
                  , v = x.connectedTitle
                  , k = x.desc
                  , j = x.depositBtnText
                  , C = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                T.jsx)(vo, {
                    logo: Zo,
                    name: v,
                    desc: k,
                    btnText: h,
                    onPrimaryBtnClick: C,
                    secondaryBtn: {
                        text: j,
                        onClick: function() {
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(i.tonDeeplink)
                        }
                    },
                    children: (0,
                    T.jsx)(bo, {
                        text: _,
                        showClose: Boolean(s),
                        onClose: f
                    })
                })
            }
            )), Ae.ConnectEVMChain, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== Ae.ConnectEVMChain)
                    return null;
                var a = n.context
                  , r = a.chain
                  , s = a.name
                  , i = a.btnText
                  , u = a.desc
                  , d = a.logo
                  , _ = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var a, s;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    ko.OKXUniversalConnectUI.init({
                                        dappMetaData: {
                                            icon: z(),
                                            name: "OKX Racer"
                                        },
                                        actionsConfiguration: {
                                            returnStrategy: "tg://resolve"
                                        },
                                        language: c.Z.locale,
                                        uiPreferences: {
                                            theme: ko.THEME.DARK
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
                T.jsx)(vo, {
                    name: s,
                    desc: u,
                    btnText: i,
                    logo: d,
                    onPrimaryBtnClick: _
                })
            }
            ))
              , Eo = function(e) {
                var t = e.task
                  , n = e.doTask
                  , a = e.walletConnectTask;
                if (!t)
                    return null;
                var r = t.context.actionType
                  , s = So[r] || go;
                return r === Ae.WalletDepositConnect && (null === a || void 0 === a ? void 0 : a.state) === V.unfinished && (s = Oo),
                (0,
                T.jsx)(s, {
                    task: t,
                    doTask: n,
                    walletConnectTask: a
                })
            };
            const Io = "index_taskItemPlaceholder__hIgHw"
              , Bo = "index_task__Y6X8h";
            var Lo = function() {
                return (0,
                T.jsx)(T.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        T.jsx)("div", {
                            className: Z()(Io),
                            children: (0,
                            T.jsx)(P, {
                                className: Bo
                            })
                        }, t)
                    }
                    ))
                })
            };
            const Ro = "index_taskItem__GMhr8"
              , Ao = "index_title__Sfa26"
              , Do = "index_state__XRt4D"
              , Fo = "index_itemLeft__XevRg"
              , Mo = "index_itemRight__Xjk6R"
              , Uo = "index_icon__ByKLw"
              , Go = "index_done__m2rDm";
            var Wo = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context
                  , c = "";
                if (r) {
                    var o = (0,
                    k.uf)(r, {
                        signDisplay: !0
                    })
                      , l = s === V.finished ? "\u2705" : "\ud83c\udfc1";
                    c = "".concat(l, " ").concat(o, " pts")
                }
                return (0,
                T.jsxs)("div", {
                    className: Ro,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    T.jsxs)("div", {
                        className: Fo,
                        children: [(0,
                        T.jsx)("div", {
                            className: Ao,
                            children: i.name
                        }), c && (0,
                        T.jsx)("div", {
                            className: Do,
                            children: c
                        })]
                    }), (0,
                    T.jsx)("div", {
                        className: Mo,
                        children: s === V.finished ? (0,
                        T.jsx)("div", {
                            className: Go,
                            children: (0,
                            g.O4)("ok_game_okxracer_done")
                        }) : (0,
                        T.jsx)(C.Z, {
                            className: Z()("okx-growth-chevrons-right", Uo)
                        })
                    })]
                }, a)
            };
            const Vo = "index_container__ZnSx5";
            function Ho(e) {
                var t = e.tasks
                  , n = e.className
                  , r = e.executeTaskCallback
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , c = i[0]
                  , d = i[1]
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1]
                  , x = function() {
                    d(void 0),
                    f(!1)
                }
                  , h = function(e) {
                    if (e && function(e) {
                        if (e.state === V.unfinished)
                            return !0;
                        var t = e.context.actionType;
                        return yo.includes(t)
                    }(e)) {
                        var t = e.context.actionType
                          , n = e.state;
                        d(e),
                        f(!0),
                        t === Ae.WalletConnect && (n === V.finished ? B.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : B.act({
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
                    l.Z)((0,
                    o.Z)().mark((function e(t, n) {
                        var a;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (Po(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    return x(),
                                    e.abrupt("return", !0);
                                case 3:
                                    if (a = {
                                        id: t.id,
                                        taskContext: n
                                    },
                                    e.prev = 4,
                                    t.state !== V.unfinished) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8,
                                    Ue(a);
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12,
                                    Ge(a);
                                case 12:
                                    return r && r(t),
                                    se(!0, (0,
                                    g.O4)("ok_game_okxracer_task_completion_msg")),
                                    x(),
                                    e.abrupt("return", !0);
                                case 18:
                                    return e.prev = 18,
                                    e.t0 = e.catch(4),
                                    ie(e.t0),
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
                  , k = (0,
                a.useMemo)((function() {
                    return t.find((function(e) {
                        var t;
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === Ae.WalletConnect
                    }
                    ))
                }
                ), [t]);
                return (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsx)("div", {
                        className: Z()(Vo, n),
                        children: t.length > 0 ? t.map((function(e) {
                            return (0,
                            T.jsx)(Wo, {
                                task: e,
                                onClick: h
                            }, e.id)
                        }
                        )) : (0,
                        T.jsx)(Lo, {})
                    }), c && (0,
                    T.jsx)(ot, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: x,
                        children: (0,
                        T.jsx)(Eo, {
                            doTask: v,
                            task: c,
                            walletConnectTask: k
                        })
                    })]
                })
            }
            var Ko = (0,
            a.createContext)({
                airdrops: [],
                selectedAirdrop: null,
                loading: !1,
                onSelectAirdrop: function() {}
            })
              , Yo = function() {
                return (0,
                a.useContext)(Ko)
            }
              , zo = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(null)
                  , o = (0,
                u.Z)(c, 2)
                  , l = o[0]
                  , d = o[1]
                  , _ = (0,
                a.useState)(!0)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1];
                (0,
                a.useEffect)((function() {
                    f(!0),
                    Ke(!0).then((function(e) {
                        var t = e.data;
                        i(t || [])
                    }
                    )).catch((function(e) {
                        ae.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.message), e)
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
                T.jsx)(Ko.Provider, {
                    value: h,
                    children: t
                })
            };
            const Xo = {
                container: "index_container__Y851r",
                header: "index_header__4gppM",
                title: "index_title__b+GpQ",
                desc: "index_desc__pU2jR",
                surpriseTitle: "index_surpriseTitle__Uqc-L",
                tasks: "index_tasks__k8-lb",
                taskListHeader: "index_taskListHeader__0FpaY"
            };
            var qo = function() {
                var e = Yo().selectedAirdrop
                  , t = (0,
                s.useHistory)().replace
                  , n = (0,
                s.useLocation)().hash;
                if (Xt(),
                (0,
                a.useEffect)((function() {
                    e || t(A.tasks + n)
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
                T.jsxs)("div", {
                    className: Xo.container,
                    children: [(0,
                    T.jsxs)("div", {
                        className: Xo.header,
                        children: [(0,
                        T.jsx)(N.Z, {
                            size: lo.Z.sm,
                            className: Xo.logo,
                            src: "".concat(c.Z.cdnBaseUrl).concat(i)
                        }), (0,
                        T.jsx)("h1", {
                            className: Xo.title,
                            children: o
                        })]
                    }), (0,
                    T.jsx)("p", {
                        className: Xo.desc,
                        children: l
                    }), (0,
                    T.jsx)("div", {
                        className: Xo.surpriseTitle,
                        children: (0,
                        g.O4)("ok_game_okxracer_label_surprises_details")
                    }), (0,
                    T.jsx)("p", {
                        className: Xo.desc,
                        children: u
                    }), (0,
                    T.jsxs)("div", {
                        className: Xo.tasks,
                        children: [(0,
                        T.jsx)("div", {
                            className: Xo.taskListHeader,
                            children: (0,
                            g.O4)("ok_game_okxracer_text_phase3_tasks")
                        }), (0,
                        T.jsx)(Ho, {
                            tasks: r
                        })]
                    })]
                })
            };
            const Jo = "index_airdropItem__pV1Az"
              , Qo = "index_content__ZtejP"
              , $o = "index_airdropIcon__lZwMy"
              , el = "index_airdropIconLoading__S1N9H"
              , tl = "index_title__19JPa"
              , nl = "index_desc__ekknt"
              , al = "index_arrow__Y8OCn"
              , rl = "index_airdropItemPlaceholder__bL5jl";
            var sl = function(e) {
                var t = e.airdrop
                  , n = e.onClick
                  , a = t.logo
                  , r = t.groupSubTitle
                  , s = t.groupTitle;
                return (0,
                T.jsxs)("div", {
                    className: Jo,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    T.jsxs)("div", {
                        className: Qo,
                        children: [(0,
                        T.jsx)(ne.Z, {
                            className: $o,
                            src: "".concat(c.Z.cdnBaseUrl).concat(a)
                        }), (0,
                        T.jsx)("div", {
                            className: tl,
                            children: s
                        }), (0,
                        T.jsx)("div", {
                            className: nl,
                            children: r
                        })]
                    }), (0,
                    T.jsx)(C.Z, {
                        className: Z()("okds-arrow-chevron-right-centered-sm", al)
                    })]
                })
            }
              , il = function() {
                return (0,
                T.jsxs)("div", {
                    className: Z()(Jo, rl),
                    children: [(0,
                    T.jsx)(P, {
                        className: el
                    }), (0,
                    T.jsx)(P, {
                        className: tl
                    }), (0,
                    T.jsx)(P, {
                        className: nl
                    })]
                })
            };
            const cl = "index_offsetMarginContainer__2NtPr"
              , ol = "index_title__+65IJ"
              , ll = "index_count__F-PWh"
              , ul = "index_airdropContainer__Gun3r"
              , dl = "index_paddingPlaceholder__X2M3o";
            var _l = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = Yo()
                  , a = n.airdrops
                  , r = n.onSelectAirdrop
                  , i = n.loading
                  , c = Qt().isCertified
                  , o = (0,
                s.useHistory)()
                  , l = (0,
                s.useLocation)()
                  , u = function(e) {
                    c ? (r(e),
                    o.push({
                        pathname: A.airdrop,
                        hash: l.hash
                    })) : t()
                }
                  , d = a.length;
                return i || 0 !== d ? (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)("p", {
                        className: ol,
                        children: [(0,
                        g.O4)("ok_game_okxracer_label_airdrop_surprises"), "\xa0", (0,
                        T.jsxs)("span", {
                            className: ll,
                            children: ["(", d, ")"]
                        })]
                    }), (0,
                    T.jsx)("div", {
                        className: Z()((0,
                        mt.Z)({}, cl, d > 1)),
                        children: (0,
                        T.jsxs)("div", {
                            className: ul,
                            children: [i ? (0,
                            T.jsxs)(T.Fragment, {
                                children: [(0,
                                T.jsx)(il, {}), (0,
                                T.jsx)(il, {}), (0,
                                T.jsx)(il, {})]
                            }) : (0,
                            T.jsx)(T.Fragment, {
                                children: a.map((function(e) {
                                    return (0,
                                    T.jsx)(sl, {
                                        airdrop: e,
                                        onClick: u
                                    }, e.groupId)
                                }
                                ))
                            }), d > 1 ? (0,
                            T.jsx)("div", {
                                className: dl
                            }) : null]
                        })
                    })]
                }) : null
            }
              , ml = n(32267);
            n(82890);
            const pl = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , fl = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var xl = function(e) {
                var t = e.className;
                return (0,
                T.jsxs)("span", {
                    className: Z()(pl, t),
                    children: [(0,
                    T.jsx)(C.Z, {
                        iconName: "okds-clock",
                        className: fl
                    }), (0,
                    g.O4)("ok_game_okxracer_tag_phase421_ended")]
                })
            };
            const hl = "CampaignCard_cardContainer__3yu81"
              , vl = "CampaignCard_dateRange__hvYLA"
              , gl = "CampaignCard_campaignEndedIndicator__6J91S"
              , kl = "CampaignCard_card__cYF8Y"
              , jl = "CampaignCard_campaignImg__YpUgC"
              , Cl = "CampaignCard_round__MMyT5"
              , Nl = "CampaignCard_content__1ZjVu"
              , bl = "CampaignCard_name__mfl60"
              , wl = "CampaignCard_desc__klZyx"
              , Zl = "CampaignCard_points__jIZar"
              , yl = "CampaignCard_btn__v8gu9"
              , Tl = "CampaignCard_btnContent__-5uC9";
            var Pl = function(e) {
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
                T.jsxs)("li", {
                    className: hl,
                    children: [t.endDate && t.startDate ? t.status === We.Ended ? (0,
                    T.jsx)(xl, {
                        className: gl
                    }) : (0,
                    T.jsxs)("span", {
                        className: vl,
                        children: [(0,
                        k.o0)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        k.o0)(new Date(t.endDate))]
                    }) : null, (0,
                    T.jsxs)("div", {
                        className: kl,
                        children: [(0,
                        T.jsx)(ne.Z, {
                            src: "".concat(c.Z.cdnBaseUrl).concat(i),
                            pictureClassName: jl,
                            className: Z()(jl, (0,
                            mt.Z)({}, Cl, s))
                        }), (0,
                        T.jsxs)("div", {
                            className: Nl,
                            children: [(0,
                            T.jsx)("p", {
                                className: bl,
                                children: o
                            }), (0,
                            T.jsx)("p", {
                                className: wl,
                                children: l
                            }), u && (0,
                            T.jsx)("p", {
                                className: Zl,
                                children: (0,
                                g.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    k.uf)(u))
                                })
                            }), (0,
                            T.jsx)(b.default, {
                                type: b.default.TYPE.default,
                                category: b.default.CATEGORY.outline,
                                size: b.default.SIZE.s,
                                className: yl,
                                contentClassName: Tl,
                                onClick: a,
                                children: n
                            })]
                        })]
                    })]
                })
            };
            const Ol = {
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
            var Sl = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = Qt().isCertified
                  , r = (0,
                a.useContext)(Va)
                  , s = r.campaigns
                  , i = r.loading
                  , c = r.openCampaignPage;
                function o(e) {
                    !function(e) {
                        var t = st.default.show((0,
                        h.Z)((0,
                        h.Z)({}, ct), {}, {
                            topContent: e.title ? void 0 : (0,
                            T.jsx)("div", {
                                className: it.topPadding
                            }),
                            onClose: function() {
                                t.destroy()
                            }
                        }, e))
                    }({
                        children: (0,
                        T.jsxs)("div", {
                            className: Ol.campaignBottomSheet,
                            children: [e.status === We.Ended ? (0,
                            T.jsx)("span", {
                                className: Ol.dateRange,
                                children: (0,
                                T.jsx)(xl, {
                                    className: Ol.campaignEndedIndicator
                                })
                            }) : (0,
                            T.jsxs)("span", {
                                className: Ol.dateRange,
                                children: [(0,
                                k.o0)(new Date(e.startDate)), "\xa0-\xa0", (0,
                                k.o0)(new Date(e.endDate))]
                            }), (0,
                            T.jsx)("p", {
                                className: Ol.subTitle,
                                children: e.title
                            }), (0,
                            T.jsx)("p", {
                                className: Ol.desc,
                                children: e.description
                            }), (0,
                            T.jsx)("hr", {
                                className: Ol.divider
                            }), (0,
                            T.jsx)("p", {
                                className: Ol.points,
                                children: e.pointDescription
                            }), (0,
                            T.jsx)(_t, {
                                className: Ol.button,
                                onClick: function() {
                                    c(e)
                                },
                                text: (0,
                                g.O4)("ok_game_okxracer_btn_phase421_go_campaign")
                            })]
                        })
                    })
                }
                var l = n ? (0,
                T.jsx)(ml.Z.State, {
                    type: ml.Z.State.TYPE.noRecord,
                    className: Ol.noCampaigns,
                    title: (0,
                    g.O4)("ok_game_okxracer_title_phase421_no_campaigns"),
                    description: (0,
                    T.jsx)("p", {
                        className: Ol.desc,
                        children: (0,
                        g.O4)("ok_game_okxracer_text_phase421_stay_tuned")
                    })
                }) : (0,
                T.jsx)(Pl, {
                    roundLogo: !1,
                    campaign: {
                        logo: "/cdn/assets/imgs/249/D290EBECC9921075.png",
                        title: (0,
                        g.O4)("ok_game_okxracer_title_phase421_exciting_camp"),
                        subTitle: (0,
                        g.O4)("ok_game_okxracer_text_phase421_verify_identity")
                    },
                    btnText: (0,
                    g.O4)("ok_game_okxracer_btn_phase421_verify"),
                    onClick: t
                })
                  , u = n || s.length > 0;
                return (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)("p", {
                        className: Ol.title,
                        children: [(0,
                        g.O4)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", u && (0,
                        T.jsxs)("span", {
                            className: Ol.count,
                            children: ["(", s.length, ")"]
                        })]
                    }), i && (0,
                    T.jsx)("div", {
                        className: Ol.loaderContainer,
                        children: (0,
                        T.jsx)(Ds.Z, {})
                    }), !i && 0 === s.length && l, (0,
                    T.jsx)("ul", {
                        className: Ol.list,
                        children: s.map((function(e) {
                            return (0,
                            T.jsx)(Pl, {
                                campaign: e,
                                btnText: (0,
                                g.O4)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    n ? o(e) : t()
                                }
                            }, e.startDate)
                        }
                        ))
                    }), !n && (0,
                    T.jsx)(Xr, {
                        className: Ol.termsAndConditions
                    })]
                })
            }
              , El = function() {
                var e = Qt().accountBindingInfo || {}
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
            const Il = {
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
            var Bl = function() {
                var e = El()
                  , t = e.currentGradeIndex
                  , n = e.currentGrade
                  , r = e.gradeCategories
                  , s = e.pointGradeName
                  , i = e.totalEarnedPoints
                  , o = (0,
                a.useState)(0)
                  , l = (0,
                u.Z)(o, 2)
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
                            return "".concat(c.Z.cdnBaseUrl).concat(null === e || void 0 === e ? void 0 : e.logo)
                        }
                        ));
                        e.forEach((function(e) {
                            (new Image).src = e
                        }
                        ))
                    }
                }
                ), [r]),
                Xt(),
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
                  , j = function(e) {
                    x(!1),
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
                  , b = (0,
                a.useCallback)((function() {
                    var e = d;
                    e !== (null === r || void 0 === r ? void 0 : r.length) - 1 && e++,
                    j(e)
                }
                ), [r, d])
                  , w = t === r.length - 1;
                return (0,
                T.jsx)("div", {
                    className: Il.container,
                    children: (0,
                    T.jsx)("div", {
                        className: Il.cardBox,
                        children: (0,
                        T.jsxs)("div", {
                            className: Z()(Il.content, f ? Il.fadeIn : Il.fadeOut),
                            children: [(0,
                            T.jsx)("div", {
                                className: Il.levelLogoBox,
                                children: (0,
                                T.jsx)("img", {
                                    src: null !== v && void 0 !== v && v.logo ? "".concat(c.Z.cdnBaseUrl).concat(null === v || void 0 === v ? void 0 : v.logo) : "".concat(c.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: Z()(Il.levelLogo, t >= d ? Il.logoLight : Il.logoGrade)
                                })
                            }), 0 !== d && (0,
                            T.jsx)(C.Z, {
                                className: Z()("okds-arrow-chevron-left-centered-md", Il.leftBtn, Il.switchBtn),
                                onClick: N
                            }), d !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            T.jsx)(C.Z, {
                                className: Z()("okds-arrow-chevron-right-centered-md", Il.rightBtn, Il.switchBtn),
                                onClick: b
                            }), (0,
                            T.jsx)("div", {
                                className: Il.currentGrade,
                                children: h && (0,
                                g.O4)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            T.jsx)("div", {
                                className: Il.gradeTitle,
                                children: null === v || void 0 === v ? void 0 : v.pointGradeName
                            }), (0,
                            T.jsx)("div", {
                                className: Il.progressNum,
                                children: v ? h && w ? (0,
                                T.jsxs)(T.Fragment, {
                                    children: [(0,
                                    T.jsx)("span", {
                                        children: (0,
                                        k.uf)(i)
                                    }), "\xa0", (0,
                                    g.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : h ? (0,
                                T.jsxs)(T.Fragment, {
                                    children: [(0,
                                    T.jsx)("span", {
                                        children: (0,
                                        k.uf)(i)
                                    }), " /", " ", (0,
                                    k.uf)(v.upperBound), "\xa0", (0,
                                    g.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                T.jsx)(T.Fragment, {
                                    children: v.upperBound ? (0,
                                    g.O4)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        k.uf)(v.lowerBound),
                                        top: (0,
                                        k.uf)(v.upperBound)
                                    }) : (0,
                                    g.O4)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        k.uf)(v.lowerBound)
                                    })
                                }) : ""
                            }), h && !w && (0,
                            T.jsx)("div", {
                                className: Il.progressSlide,
                                children: (0,
                                T.jsx)("div", {
                                    className: Il.progress,
                                    style: {
                                        width: "".concat(i / (Number(null === v || void 0 === v ? void 0 : v.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const Ll = "License_loader__4L8AA"
              , Rl = "License_container__MxoNJ"
              , Al = "License_pageTitle__h+Yja"
              , Dl = "License_verifiedUsers__q-uxi"
              , Fl = "License_avatars__3HegJ"
              , Ml = "License_usersCount__fkW5h";
            var Ul = n(40544);
            n(25801);
            const Gl = "NeonBox_container__0efrL"
              , Wl = "NeonBox_certified__dDOGg"
              , Vl = "NeonBox_backgroundWrapper__dblpl"
              , Hl = "NeonBox_content__T1f+D"
              , Kl = "NeonBox_header__jMjn9";
            var Yl = function(e) {
                var t = e.children
                  , n = e.isCertified
                  , a = void 0 === n || n
                  , r = e.header;
                return (0,
                T.jsxs)("div", {
                    className: Z()(Gl, a && Wl),
                    children: [r && (0,
                    T.jsx)("div", {
                        className: Kl,
                        children: r
                    }), (0,
                    T.jsx)("div", {
                        className: Z()(Vl),
                        children: (0,
                        T.jsx)("div", {
                            className: Hl,
                            children: t
                        })
                    })]
                })
            };
            const zl = "LicenseCard_licenseCard__+wyQA"
              , Xl = "LicenseCard_header__LUvW7"
              , ql = "LicenseCard_title__rMFOB"
              , Jl = "LicenseCard_content__i2ESe"
              , Ql = "LicenseCard_innerCard__n57Gb"
              , $l = "LicenseCard_details__boiyi"
              , eu = "LicenseCard_label__JX11k"
              , tu = "LicenseCard_link__19+Q+"
              , nu = "LicenseCard_linkIcon__oNENM"
              , au = "LicenseCard_points__MkLL5"
              , ru = "LicenseCard_icon__b6JLr"
              , su = "LicenseCard_certifyBtn__Z6vHo"
              , iu = "LicenseCard_infoPopoverDesc__Km8Og"
              , cu = "LicenseCard_gradeImage__fd+PJ";
            var ou = function() {
                return (0,
                T.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: (0,
                    T.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.97777 2.5H2.35555C2.15919 2.5 2 2.65919 2 2.85555V7.47777C2 7.67413 2.15919 7.83332 2.35555 7.83332H6.97777C7.17413 7.83332 7.33332 7.67413 7.33332 7.47777V2.85555C7.33332 2.65919 7.17413 2.5 6.97777 2.5ZM12.3134 7.83334H7.69118C7.49482 7.83334 7.33563 7.99253 7.33563 8.18889V12.8111C7.33563 13.0075 7.49482 13.1667 7.69118 13.1667H12.3134C12.5098 13.1667 12.6689 13.0075 12.6689 12.8111V8.18889C12.6689 7.99253 12.5098 7.83334 12.3134 7.83334ZM13.0222 2.5H17.6444C17.8408 2.5 18 2.65919 18 2.85555V7.47777C18 7.67413 17.8408 7.83332 17.6444 7.83332H13.0222C12.8259 7.83332 12.6667 7.67413 12.6667 7.47777V2.85555C12.6667 2.65919 12.8259 2.5 13.0222 2.5ZM6.97777 13.1667H2.35555C2.15919 13.1667 2 13.3259 2 13.5222V18.1444C2 18.3408 2.15919 18.5 2.35555 18.5H6.97777C7.17413 18.5 7.33332 18.3408 7.33332 18.1444V13.5222C7.33332 13.3259 7.17413 13.1667 6.97777 13.1667ZM13.0222 13.1667H17.6444C17.8408 13.1667 18 13.3259 18 13.5222V18.1444C18 18.3408 17.8408 18.5 17.6444 18.5H13.0222C12.8259 18.5 12.6667 18.3408 12.6667 18.1444V13.5222C12.6667 13.3259 12.8259 13.1667 13.0222 13.1667Z",
                        fill: "#121212"
                    })
                })
            }
              , lu = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = at().accumPoints
                  , a = Qt()
                  , r = a.accountBindingInfo
                  , s = a.isCertified
                  , i = El().currentGrade;
                return (0,
                T.jsx)("section", {
                    className: zl,
                    children: (0,
                    T.jsx)(Yl, {
                        isCertified: s,
                        header: (0,
                        T.jsxs)("div", {
                            className: Xl,
                            children: [(0,
                            T.jsx)(ou, {}), (0,
                            T.jsx)("span", {
                                className: ql,
                                children: s ? (0,
                                g.O4)("ok_game_okxracer_label_phase4_certified") : (0,
                                g.O4)("ok_game_okxracer_label_phase4_uncertified")
                            })]
                        }),
                        children: (0,
                        T.jsxs)("div", {
                            className: Jl,
                            children: [(0,
                            T.jsxs)("div", {
                                className: Ql,
                                children: [(0,
                                T.jsxs)("div", {
                                    className: $l,
                                    children: [(0,
                                    T.jsx)("p", {
                                        className: eu,
                                        children: (0,
                                        g.O4)("ok_game_okxracer_title_phase4_racer_grade")
                                    }), (0,
                                    T.jsxs)(Ht, {
                                        to: A.licenseGrades,
                                        className: tu,
                                        children: [(0,
                                        j.T)(null === r || void 0 === r ? void 0 : r.pointGradeName), (0,
                                        T.jsx)(C.Z, {
                                            iconName: "okds-arrow-chevron-right-centered-md",
                                            className: nu
                                        })]
                                    }), (0,
                                    T.jsxs)("div", {
                                        className: au,
                                        children: [(0,
                                        T.jsx)("span", {
                                            className: eu,
                                            children: (0,
                                            g.O4)("ok_game_okxracer_text_phase3_total_pts_earned")
                                        }), "\xa0", (0,
                                        k.uf)(n), (0,
                                        T.jsx)(Ul.Z, {
                                            title: (0,
                                            g.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                            contentClassName: iu,
                                            children: (0,
                                            T.jsx)(C.Z, {
                                                iconName: "okx-growth-information",
                                                className: ru
                                            })
                                        })]
                                    })]
                                }), i && (0,
                                T.jsx)(ne.Z, {
                                    pictureClassName: cu,
                                    className: cu,
                                    src: "".concat(c.Z.cdnBaseUrl, "/").concat(i.logo)
                                })]
                            }), !s && (0,
                            T.jsx)(_t, {
                                className: su,
                                size: b.default.SIZE.md,
                                text: (0,
                                g.O4)("ok_game_okxracer_btn_phase4_certify"),
                                onClick: t
                            })]
                        })
                    })
                })
            }
              , uu = function() {
                var e, t = $().uid, n = Qt(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, d = n.isLoading, _ = (0,
                a.useState)(!1), m = (0,
                u.Z)(_, 2), p = m[0], f = m[1], x = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                                se(!1, (0,
                                g.O4)("ok_game_okxracer_error_high_traffic"));
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
                        B.act({
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
                    T.jsx)("div", {
                        className: Ll,
                        children: (0,
                        T.jsx)(Ds.Z, {})
                    });
                var h = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0
                  , v = function() {
                    f(!0)
                };
                return (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)("div", {
                        className: Rl,
                        children: [!s && (0,
                        T.jsxs)(T.Fragment, {
                            children: [(0,
                            T.jsx)(ia, {
                                className: Al,
                                html: (0,
                                g.O4)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            T.jsxs)("div", {
                                className: Dl,
                                children: [(0,
                                T.jsx)(ne.Z, {
                                    className: Fl,
                                    src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                T.jsx)("span", {
                                    className: Ml,
                                    children: h > 0 ? (0,
                                    k.uf)(h) : "--"
                                }), (0,
                                g.O4)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        T.jsx)(lu, {
                            showCertifyBottomSheet: v
                        }), (0,
                        T.jsx)(_l, {
                            showCertifyBottomSheet: v
                        }), (0,
                        T.jsx)(Sl, {
                            showCertifyBottomSheet: v
                        })]
                    }), (0,
                    T.jsx)(fn, {
                        visible: p,
                        onClose: function() {
                            f(!1)
                        },
                        handleVerified: function() {
                            f(!1)
                        }
                    })]
                })
            }
              , du = function() {
                return (0,
                T.jsx)(zo, {
                    children: (0,
                    T.jsxs)(oo, {
                        animationPath: [A.licenseGrades],
                        children: [(0,
                        T.jsx)(s.Route, {
                            path: A.license,
                            component: uu,
                            exact: !0
                        }), (0,
                        T.jsx)(s.Route, {
                            path: A.airdrop,
                            component: qo,
                            exact: !0
                        }), (0,
                        T.jsx)(s.Route, {
                            path: A.licenseGrades,
                            component: qa(Bl),
                            exact: !0
                        })]
                    })
                })
            };
            const _u = "QrCode_container__r4Fu7"
              , mu = "QrCode_qrCode__16PWa"
              , pu = "QrCode_title__+cibb"
              , fu = "QrCode_message__eaOzW";
            var xu = function() {
                return (0,
                T.jsxs)("div", {
                    className: _u,
                    children: [(0,
                    T.jsx)(ne.Z, {
                        className: mu,
                        src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    T.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            ra.dU)((0,
                            g.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: pu
                    }), (0,
                    T.jsx)("p", {
                        className: fu,
                        children: (0,
                        g.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            };
            const hu = "PullupList_loading__+51Dh"
              , vu = "PullupList_listLoadItem__XcvkH"
              , gu = "PullupList_listLeft__4eGh6"
              , ku = "PullupList_listRight__w7Ely"
              , ju = "PullupList_listLoading__whJeg";
            var Cu = function() {
                return (0,
                T.jsxs)("div", {
                    className: Z()(vu),
                    children: [(0,
                    T.jsx)(P, {
                        className: gu
                    }), (0,
                    T.jsx)(P, {
                        className: ku
                    })]
                })
            }
              , Nu = function() {
                return (0,
                T.jsx)("div", {
                    className: ju,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        T.jsx)(Cu, {}, t)
                    }
                    ))
                })
            }
              , bu = function(e) {
                var t = e.loadData
                  , n = e.children
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
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
                  , g = (0,
                u.Z)(h, 2)
                  , k = g[0]
                  , j = g[1]
                  , C = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var n;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    t(f.current.page, f.current.total);
                                case 6:
                                    (n = e.sent) && n.rows ? (f.current.page += 1,
                                    c((function(e) {
                                        return [].concat((0,
                                        v.Z)(e), (0,
                                        v.Z)(n.rows))
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
                ic.Z)(C, {
                    wait: 500,
                    leading: !0
                }).run
                  , b = function(e) {
                    e[0].isIntersecting && !m && !1 === f.current.stop && j(!k)
                };
                return (0,
                a.useEffect)((function() {
                    var e = new IntersectionObserver(b,{
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
                    N()
                }
                ), [k]),
                (0,
                T.jsxs)(T.Fragment, {
                    children: [i.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    T.jsx)("div", {
                        className: hu,
                        ref: x,
                        children: m && (0,
                        T.jsx)(Nu, {})
                    })]
                })
            };
            const wu = "InviteList_listItem__q4jhG"
              , Zu = "InviteList_name__LLQgt"
              , yu = "InviteList_point__kXtCn"
              , Tu = "InviteList_earnedPrice__4vAfw"
              , Pu = "InviteList_pointNumber__v4P1H";
            var Ou = function() {
                var e = (0,
                a.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t, n) {
                        var a, s, i;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    Be(s, a);
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
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsx)("div", {
                        className: Tu,
                        children: (0,
                        g.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            T.jsx)("span", {
                                className: Pu,
                                children: (0,
                                g.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    k.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    T.jsx)(bu, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            T.jsxs)("div", {
                                className: wu,
                                children: [(0,
                                T.jsx)("div", {
                                    className: Zu,
                                    children: e.extInviteeName
                                }), (0,
                                T.jsx)("div", {
                                    className: yu,
                                    children: (0,
                                    g.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        k.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const Su = "ReferralsPage_container__V48m1"
              , Eu = "ReferralsPage_inviteDetail__L1MhM"
              , Iu = "ReferralsPage_detailItem__ujOp+"
              , Bu = "ReferralsPage_dot__zKW7L"
              , Lu = "ReferralsPage_detailTitle__OE657"
              , Ru = "ReferralsPage_detailInfo__YC+Y9"
              , Au = "ReferralsPage_inviteList__Jksx8";
            var Du = function() {
                var e = $().uid;
                return Xt(),
                (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        B.act({
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
                T.jsxs)("div", {
                    className: Su,
                    children: [(0,
                    T.jsx)(ia, {
                        html: "".concat((0,
                        g.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        g.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    T.jsx)("div", {
                        className: Eu,
                        children: (0,
                        T.jsxs)("div", {
                            className: Iu,
                            children: [(0,
                            T.jsx)("div", {
                                className: Bu
                            }), (0,
                            T.jsx)("div", {
                                className: Lu,
                                children: (0,
                                g.O4)("ok_game_okxracer_refer_your_friends")
                            }), (0,
                            T.jsx)("div", {
                                className: Ru,
                                children: (0,
                                g.O4)("ok_game_okxracer_refer_rewards")
                            })]
                        })
                    }), (0,
                    T.jsx)("div", {
                        className: Au,
                        children: (0,
                        T.jsx)(Ou, {})
                    }), (0,
                    T.jsx)(Rc, {})]
                })
            }
              , Fu = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , Mu = (0,
            a.createContext)({
                boosts: [],
                tasks: Fu,
                upgradeBoost: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                executeTaskSuccessCallback: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
              , Uu = function() {
                return (0,
                a.useContext)(Mu)
            }
              , Gu = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(Fu)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)()
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = at().updateGameInfoFromServer
                  , g = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([De(!0), Me(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && m(null !== (n = a[1].value.data) && void 0 !== n ? n : Fu);
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
                    o.Z)().mark((function e(t) {
                        var n;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Fe({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([De(), v()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ie(e.t0);
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
                }();
                (0,
                a.useEffect)((function() {
                    g()
                }
                ), [g]);
                var j = (0,
                a.useCallback)((function(e) {
                    h(e)
                }
                ), [])
                  , C = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, a, r, s, i, c;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Me(), v()]);
                            case 2:
                                t = e.sent,
                                n = (0,
                                u.Z)(t, 1),
                                a = n[0],
                                "fulfilled" === a.status && (i = null !== (r = null === (s = a.value) || void 0 === s ? void 0 : s.data) && void 0 !== r ? r : Fu,
                                m(i),
                                x && (c = i.taskGroups.find((function(e) {
                                    return e.groupName === x.groupName
                                }
                                ))) && h(c));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [x, v]);
                return (0,
                T.jsx)(Mu.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        executeTaskSuccessCallback: C,
                        partner: x,
                        setSelectedPartner: j
                    },
                    children: t
                })
            };
            const Wu = {
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
            var Vu = function() {
                var e = Uu()
                  , t = e.partner
                  , n = e.executeTaskSuccessCallback
                  , r = (0,
                s.useHistory)().replace
                  , i = (0,
                s.useLocation)().hash;
                if (Xt(),
                (0,
                a.useEffect)((function() {
                    t || r(A.tasks + i)
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
                  , f = t.participants;
                return (0,
                T.jsxs)("div", {
                    className: Wu.container,
                    children: [(0,
                    T.jsxs)("div", {
                        className: Wu.header,
                        children: [(0,
                        T.jsx)(N.Z, {
                            size: lo.Z.sm,
                            className: Wu.logo,
                            src: "".concat(c.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        T.jsx)("h1", {
                            className: Wu.title,
                            children: _
                        })]
                    }), (0,
                    T.jsx)("p", {
                        className: Wu.desc,
                        children: m
                    }), (0,
                    T.jsxs)("div", {
                        className: Wu.status,
                        children: [(0,
                        T.jsxs)("div", {
                            className: Wu.statusItem,
                            children: [(0,
                            T.jsx)("div", {
                                className: Wu.statusTitle,
                                children: (0,
                                g.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            T.jsx)("div", {
                                className: Wu.statusValue,
                                children: (0,
                                g.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    k.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        T.jsxs)("div", {
                            className: Wu.statusItem,
                            children: [(0,
                            T.jsx)("div", {
                                className: Wu.statusTitle,
                                children: (0,
                                g.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            T.jsxs)("div", {
                                className: Wu.statusValue,
                                children: [(0,
                                T.jsx)(C.Z, {
                                    className: Z()("okx-growth-friends", Wu.participantsIcon)
                                }), k.ag.shortNumber(f, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    T.jsxs)("div", {
                        className: Wu.tasks,
                        children: [(0,
                        T.jsxs)("div", {
                            className: Wu.taskListHeader,
                            children: [(0,
                            T.jsx)("span", {
                                children: (0,
                                g.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            T.jsx)("span", {
                                className: Wu.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    g.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(o, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        T.jsx)(Ho, {
                            tasks: u,
                            executeTaskCallback: n
                        })]
                    })]
                })
            };
            const Hu = "index_partnerItem__S1dkf"
              , Ku = "index_title__bRRMU"
              , Yu = "index_points__WQSip"
              , zu = "index_state__gi-nK"
              , Xu = "index_logo__y4rK-"
              , qu = "index_item-left__ej9+1"
              , Ju = "index_item-right__3KRWi"
              , Qu = "index_dot__4bynu"
              , $u = "index_participantsIcon__-tYh0"
              , ed = "index_icon__gS69A";
            var td = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                T.jsxs)("div", {
                    className: Hu,
                    children: [(0,
                    T.jsx)(N.Z, {
                        size: lo.Z.sm,
                        className: Xu,
                        src: "".concat(c.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    T.jsxs)("div", {
                        className: qu,
                        children: [(0,
                        T.jsx)("div", {
                            className: Ku,
                            children: t
                        }), (0,
                        T.jsx)("div", {
                            className: Yu,
                            children: (0,
                            g.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                k.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        T.jsxs)("div", {
                            className: zu,
                            children: [(0,
                            T.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    ra.dU)((0,
                                    g.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            T.jsx)("span", {
                                className: Qu
                            }), (0,
                            T.jsx)(C.Z, {
                                className: Z()("okx-growth-friends", $u)
                            }), (0,
                            T.jsx)("em", {
                                children: k.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    T.jsx)("div", {
                        className: Ju,
                        children: (0,
                        T.jsx)(C.Z, {
                            className: Z()("okx-growth-chevrons-right", ed)
                        })
                    })]
                })
            };
            const nd = "index_container__wKNP9";
            function ad(e) {
                var t = e.tasks
                  , n = e.className
                  , a = Uu().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                T.jsx)("div", {
                    className: Z()(nd, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , c = e.logo;
                        return (0,
                        T.jsx)(Ht, {
                            to: A.partner,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            T.jsx)(td, {
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
                    T.jsx)(Lo, {})
                })
            }
            const rd = "TaskArea_tabPane__irXs6"
              , sd = "TaskArea_tabName__-BL2R"
              , id = "TaskArea_list__cqK4t";
            var cd = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                g.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                g.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                T.jsxs)("div", {
                    className: sd,
                    children: [r, " ", (0,
                    T.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , od = function() {
                var e = Uu()
                  , t = e.tasks
                  , n = e.executeTaskSuccessCallback
                  , a = t.taskGroups
                  , r = t.ungroupedTasks;
                return (0,
                T.jsx)(T.Fragment, {
                    children: (0,
                    T.jsxs)(vc.Z.Underline, {
                        size: vc.Z.SIZE.xl,
                        children: [(0,
                        T.jsx)(vc.Z.TabPane, {
                            className: rd,
                            tab: (0,
                            T.jsx)(cd, {
                                isPartner: !0,
                                count: a.length
                            }),
                            id: "partner",
                            children: (0,
                            T.jsx)(ad, {
                                tasks: a,
                                className: id
                            })
                        }), (0,
                        T.jsx)(vc.Z.TabPane, {
                            className: rd,
                            tab: (0,
                            T.jsx)(cd, {
                                count: r.length
                            }),
                            id: "own",
                            children: (0,
                            T.jsx)(Ho, {
                                tasks: r,
                                className: id,
                                executeTaskCallback: n
                            })
                        })]
                    })
                })
            };
            const ld = "TaskPage_container__5KfIM"
              , ud = "TaskPage_block__kt8oo"
              , dd = "TaskPage_pointsContainer__+vQ2y"
              , _d = "TaskPage_points__+UHeE"
              , md = "TaskPage_label__-ivvS";
            var pd = function() {
                var e = at().accumPoints;
                return (0,
                T.jsxs)("div", {
                    className: ld,
                    children: [(0,
                    T.jsxs)("div", {
                        className: Z()(ud, dd),
                        children: [(0,
                        T.jsx)("p", {
                            className: _d,
                            children: (0,
                            k.uf)(e)
                        }), (0,
                        T.jsxs)("div", {
                            className: md,
                            children: [(0,
                            g.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                            T.jsx)(Ul.Z, {
                                title: (0,
                                g.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                children: (0,
                                T.jsx)(C.Z, {
                                    iconName: "okds-information-circle"
                                })
                            })]
                        })]
                    }), (0,
                    T.jsx)("div", {
                        className: ud,
                        children: (0,
                        T.jsx)(od, {})
                    })]
                })
            }
              , fd = function() {
                return (0,
                T.jsx)(Gu, {
                    children: (0,
                    T.jsxs)(s.Switch, {
                        children: [(0,
                        T.jsx)(s.Route, {
                            path: A.tasks,
                            component: pd,
                            exact: !0
                        }), (0,
                        T.jsx)(s.Route, {
                            path: A.partner,
                            component: Vu,
                            exact: !0
                        })]
                    })
                })
            }
              , xd = (0,
            a.createContext)({
                boosts: [],
                upgradeBoost: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                activeTabId: K.RACER
            })
              , hd = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(K.RACER)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = at().updateGameInfoFromServer
                  , f = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, n;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                De(!0);
                            case 3:
                                t = e.sent,
                                n = t.data,
                                i(null !== n && void 0 !== n ? n : []),
                                e.next = 10;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [])
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var n, a, r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Fe({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([De(), p()]);
                                case 5:
                                    return n = e.sent,
                                    a = (0,
                                    u.Z)(n, 1),
                                    "fulfilled" === (r = a[0]).status && i(r.value.data || []),
                                    e.abrupt("return", !0);
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    ie(e.t0);
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
                    f()
                }
                ), [f]),
                (0,
                T.jsx)(xd.Provider, {
                    value: {
                        boosts: s,
                        upgradeBoost: x,
                        onChangeTab: function(e) {
                            m(e)
                        },
                        activeTabId: _
                    },
                    children: t
                })
            }
              , vd = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === H.DailyBoost
            }
              , gd = function(e) {
                return "actionType"in e && e.actionType === Ae.UnLock
            }
              , kd = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !vd(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                g.O4)("ok_game_okxracer_free") : "".concat((0,
                k.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const jd = "index_mainContainer__G1QC-"
              , Cd = "index_sheetIcon__cdTfT"
              , Nd = "index_sheetTitle__BnrED"
              , bd = "index_sheetDesc__DtfoF"
              , wd = "index_maxLevelText__esnYu"
              , Zd = "index_levelArrowRight__MPbSr"
              , yd = "index_sheetLowerContentContainer__doUtU"
              , Td = "index_pointCostText__GT5Jc"
              , Pd = "index_sheetLvlTextContainer__UWjtN"
              , Od = "index_btmBtn__6S1L3"
              , Sd = "index_boostDataSplitPoint__IpW+U";
            var Ed = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.context
                  , r = t.curStage
                  , s = t.totalStage
                  , i = t.isLocked
                  , o = a.logo
                  , l = a.name
                  , u = gd(a)
                  , d = vd(t)
                  , _ = r === s
                  , m = function(e) {
                    var t = e.context
                      , n = gd(t)
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
                  , f = m.displayBtnText
                  , x = m.btnDisabled
                  , h = _ && !d && !u;
                return (0,
                T.jsxs)("div", {
                    className: jd,
                    children: [(0,
                    T.jsx)(ne.Z, {
                        className: Cd,
                        src: "".concat(c.Z.cdnBaseUrl).concat(o)
                    }), (0,
                    T.jsx)("div", {
                        className: Nd,
                        children: l
                    }), (0,
                    T.jsx)("div", {
                        className: bd,
                        children: p
                    }), h && (0,
                    T.jsx)("div", {
                        className: wd,
                        children: (0,
                        g.O4)("ok_game_okxracer_bttmsheet_title_out_of_upgrades")
                    }), !u && (0,
                    T.jsxs)("div", {
                        className: yd,
                        children: [(0,
                        T.jsx)("span", {
                            className: Td,
                            children: kd(t)
                        }), (d || r < s) && (0,
                        T.jsx)("span", {
                            className: Sd
                        }), (0,
                        T.jsx)("span", {
                            className: Pd,
                            children: d ? "".concat(s - r, "/").concat(s) : (0,
                            T.jsxs)(T.Fragment, {
                                children: [(0,
                                T.jsx)("span", {
                                    children: (0,
                                    g.O4)("ok_game_okxracer_lvl_num", {
                                        num: (0,
                                        k.uf)(r)
                                    })
                                }), !_ && (0,
                                T.jsxs)(T.Fragment, {
                                    children: [(0,
                                    T.jsx)(C.Z, {
                                        iconName: "okds-arrow-pointer-right-xs",
                                        className: Zd
                                    }), (0,
                                    T.jsx)("span", {
                                        children: r + 1
                                    })]
                                })]
                            })
                        })]
                    }), u && i ? (0,
                    T.jsx)(Ht, {
                        to: A.license,
                        className: Od,
                        children: (0,
                        T.jsx)(_t, {
                            text: f
                        })
                    }) : (0,
                    T.jsx)(_t, {
                        className: Od,
                        onClick: function() {
                            n(t)
                        },
                        text: f,
                        disabled: x
                    })]
                })
            };
            const Id = {
                item: "index_item__WVCYh",
                boostIcon: "index_boostIcon__b-AgD",
                boostIconLoading: "index_boostIconLoading__xKi+G",
                lockedImg: "index_lockedImg__hcZKX",
                boostTitle: "index_boostTitle__3O4LG",
                boostData: "index_boostData__8p7IB",
                pointCost: "index_pointCost__kbrVo",
                boostDataStage: "index_boostDataStage__Cq2Wk",
                boostDataSplitPoint: "index_boostDataSplitPoint__srkQ2",
                locked: "index_locked__kzoiq",
                filterLayer: "index_filterLayer__K66jH",
                unlockIcon: "index_unlockIcon__bxDY1",
                unlockButton: "index_unlockButton__AmCd5"
            };
            var Bd = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context
                  , i = n === a;
                if (gd(s)) {
                    if (r)
                        return (0,
                        T.jsx)("div", {
                            className: Id.boostData,
                            children: (0,
                            g.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (i)
                        return (0,
                        T.jsx)("div", {
                            className: Id.boostData,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                T.jsxs)("div", {
                    className: Id.boostData,
                    children: [(0,
                    T.jsx)("span", {
                        className: Id.pointCost,
                        children: kd(t)
                    }), (vd(t) || n < a) && (0,
                    T.jsx)("span", {
                        className: Id.boostDataSplitPoint
                    }), (0,
                    T.jsx)("span", {
                        className: Id.boostDataStage,
                        children: vd(t) ? "".concat(a - n, "/").concat(a) : (0,
                        g.O4)("ok_game_okxracer_lvl_num", {
                            num: n
                        })
                    })]
                })
            }
              , Ld = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , o = r.logo;
                return (0,
                T.jsxs)("div", {
                    className: Id.item,
                    onClick: function() {
                        n(a)
                    },
                    children: [s && (0,
                    T.jsxs)("div", {
                        className: Id.locked,
                        children: [(0,
                        T.jsx)("div", {
                            className: Id.filterLayer
                        }), (0,
                        T.jsx)(C.Z, {
                            className: Z()("okx-growth-lock", Id.unlockIcon)
                        }), (0,
                        T.jsx)(ne.Z, {
                            className: Z()(Id.boostIcon, Id.lockedImg),
                            src: "".concat(c.Z.cdnBaseUrl).concat(o)
                        })]
                    }), !s && (0,
                    T.jsx)(ne.Z, {
                        className: Id.boostIcon,
                        src: "".concat(c.Z.cdnBaseUrl).concat(o)
                    }), (0,
                    T.jsxs)("div", {
                        className: Id.content,
                        children: [(0,
                        T.jsx)("div", {
                            className: Id.boostTitle,
                            children: i
                        }), (0,
                        T.jsx)(Bd, {
                            boost: t
                        })]
                    })]
                }, a)
            };
            const Rd = "index_taskItemPlaceholder__oZw1l"
              , Ad = "index_task__FcEoo";
            var Dd = function() {
                return (0,
                T.jsx)(T.Fragment, {
                    children: Array.from({
                        length: 4
                    }).map((function(e, t) {
                        return (0,
                        T.jsx)("div", {
                            className: Rd,
                            children: (0,
                            T.jsx)(P, {
                                className: Ad
                            })
                        }, t)
                    }
                    ))
                })
            };
            const Fd = "index_listContainer__tebx+";
            var Md = function(e) {
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
                T.jsx)("div", {
                    className: Fd,
                    children: t.length > 0 ? (0,
                    T.jsx)(T.Fragment, {
                        children: t.map((function(e) {
                            return (0,
                            T.jsx)(Ld, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    T.jsx)(Dd, {})
                })
            };
            const Ud = "index_boostArea__EDFLN"
              , Gd = "index_container__4iPvb";
            var Wd = function(e) {
                var t = e.boosts
                  , n = e.upgradeBoost
                  , r = (0,
                a.useState)()
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = at().points
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var a, r, s;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(f - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    se(!1, (0,
                                    g.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && se(!0);
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
                  , h = (0,
                a.useCallback)((function(e) {
                    p(!0),
                    c(e)
                }
                ), []);
                return (0,
                T.jsx)(T.Fragment, {
                    children: (0,
                    T.jsx)("div", {
                        className: Ud,
                        children: (0,
                        T.jsxs)("div", {
                            className: Gd,
                            children: [(0,
                            T.jsx)(Md, {
                                boosts: t,
                                onClick: h
                            }), (0,
                            T.jsx)(ot, {
                                noContentPadding: !0,
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                T.jsx)(Ed, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })
                })
            };
            const Vd = "PointsCard_pointsContainer__n4L96"
              , Hd = "PointsCard_pointsNameBigger__1Jh4o"
              , Kd = "PointsCard_pointsNameSmaller__9mb7i"
              , Yd = "PointsCard_pointsValue__qFFcW"
              , zd = "PointsCard_availablePointsValue__jngSf"
              , Xd = "PointsCard_pointsDetails__qk6eJ"
              , qd = "PointsCard_infoIcon__9W3Z-";
            var Jd = function() {
                var e = at()
                  , t = e.points
                  , n = e.autopilotPointsPerHour
                  , a = e.basePoint;
                return (0,
                T.jsxs)(Yl, {
                    children: [(0,
                    T.jsxs)("div", {
                        className: Vd,
                        children: [(0,
                        T.jsx)("div", {
                            className: Hd,
                            children: (0,
                            g.O4)("ok_game_okxracer_available_pts")
                        }), (0,
                        T.jsx)("div", {
                            className: zd,
                            children: Pr.yx.thousandFormat(t || 0)
                        })]
                    }), (0,
                    T.jsxs)("div", {
                        className: Xd,
                        children: [(0,
                        T.jsxs)("div", {
                            children: [(0,
                            T.jsxs)("div", {
                                className: Kd,
                                children: [(0,
                                g.O4)("ok_game_okxracer_tag_autodriving_points"), (0,
                                T.jsx)(Ul.Z, {
                                    title: (0,
                                    g.O4)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                    type: Ul.Z.TYPES.neutral,
                                    children: (0,
                                    T.jsx)(C.Z, {
                                        iconName: "okx-growth-information",
                                        className: qd
                                    })
                                })]
                            }), (0,
                            T.jsxs)("div", {
                                className: Yd,
                                children: [Er, "\xa0", "".concat(Pr.yx.thousandFormat(n || 0), "/hr")]
                            })]
                        }), (0,
                        T.jsxs)("div", {
                            children: [(0,
                            T.jsx)("div", {
                                className: Kd,
                                children: (0,
                                g.O4)("ok_game_okxracer_tag_base_points")
                            }), (0,
                            T.jsxs)("div", {
                                className: Yd,
                                children: [Er, "\xa0", Pr.yx.thousandFormat(a || 0)]
                            })]
                        }), false]
                    })]
                })
            };
            const Qd = "UpgradesPage_container__H43Ax"
              , $d = "UpgradesPage_cardContainer__AsZoD"
              , e_ = "UpgradesPage_block__QlGao";
            var t_ = function() {
                var e = (0,
                a.useContext)(xd)
                  , t = e.boosts
                  , n = e.upgradeBoost;
                e.onChangeTab,
                e.activeTabId;
                Xt();
                (0,
                g.O4)("ok_game_okxracer_racer_upgrades"),
                K.RACER,
                (0,
                g.O4)("ok_game_okxracer_race_car_upgrades"),
                K.CAR,
                (0,
                g.O4)("ok_game_okxracer_team_ops_upgrades"),
                K.TEAM;
                return (0,
                T.jsxs)("div", {
                    className: Qd,
                    children: [(0,
                    T.jsx)("div", {
                        className: $d,
                        children: (0,
                        T.jsx)(Jd, {})
                    }), (0,
                    T.jsxs)("div", {
                        className: e_,
                        children: [false, (0,
                        T.jsx)(Wd, {
                            boosts: t,
                            upgradeBoost: n
                        })]
                    })]
                })
            }
              , n_ = function() {
                return (0,
                T.jsx)(hd, {
                    children: (0,
                    T.jsx)(t_, {})
                })
            }
              , a_ = function() {
                var e = (0,
                a.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , i = (0,
                a.useMemo)(x, [])
                  , f = c.Z.locale;
                (0,
                a.useMemo)((function() {
                    p.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var h = function() {
                    var e = $().uid;
                    return (0,
                    a.useEffect)((function() {
                        var e, t, n, a, r, s, i, c, o, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (a = window.Telegram.WebApp).ready) || void 0 === n || n.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (c = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(c, "#0D0D0D"),
                        null === (o = (l = window.Telegram.WebApp).expand) || void 0 === o || o.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d),
                        ae.k.info("TG MINI APP OKX Racer version: ".concat(window.Telegram.WebApp.version, " "), {
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
                        o.Z)().mark((function e() {
                            var t;
                            return (0,
                            o.Z)().wrap((function(e) {
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
                T.jsx)("main", {
                    className: Ka,
                    children: (0,
                    T.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: h ? (0,
                        T.jsx)(T.Fragment, {
                            children: (0,
                            T.jsx)(vn, {
                                children: (0,
                                T.jsx)($t, {
                                    children: (0,
                                    T.jsx)(nr, {
                                        children: (0,
                                        T.jsx)(rt, {
                                            children: (0,
                                            T.jsx)(sr, {
                                                children: (0,
                                                T.jsx)(d.OKXTonConnectUIProvider, {
                                                    uiPreferences: {
                                                        theme: d.THEME.DARK
                                                    },
                                                    dappMetaData: {
                                                        name: "OKX Racer",
                                                        icon: z()
                                                    },
                                                    restoreConnection: !0,
                                                    language: f,
                                                    actionsConfiguration: {
                                                        returnStrategy: "tg://resolve"
                                                    },
                                                    children: (0,
                                                    T.jsxs)(s.Switch, {
                                                        children: [(0,
                                                        T.jsx)(s.Route, {
                                                            path: A.teamDetail,
                                                            component: qa(Un)
                                                        }), (0,
                                                        T.jsx)(s.Route, {
                                                            path: A.teamList,
                                                            exact: !0,
                                                            component: qa(aa)
                                                        }), (0,
                                                        T.jsx)(s.Route, {
                                                            path: A.referrals,
                                                            component: qa(Du),
                                                            exact: !0
                                                        }), (0,
                                                        T.jsx)(s.Route, {
                                                            path: A.upgrades,
                                                            component: qa(n_)
                                                        }), (0,
                                                        T.jsxs)(s.Route, {
                                                            path: A.home,
                                                            children: [(0,
                                                            T.jsx)("article", {
                                                                className: za,
                                                                children: (0,
                                                                T.jsxs)(s.Switch, {
                                                                    children: [(0,
                                                                    T.jsx)(s.Route, {
                                                                        path: A.home,
                                                                        component: hc,
                                                                        exact: !0
                                                                    }), (0,
                                                                    T.jsx)(s.Route, {
                                                                        path: A.leaderboard,
                                                                        component: qa(so),
                                                                        exact: !0
                                                                    }), (0,
                                                                    T.jsx)(s.Route, {
                                                                        path: A.tasks,
                                                                        component: fd
                                                                    }), (0,
                                                                    T.jsx)(s.Route, {
                                                                        path: A.license,
                                                                        children: (0,
                                                                        T.jsx)(Ha, {
                                                                            children: (0,
                                                                            T.jsx)(du, {})
                                                                        })
                                                                    }), (0,
                                                                    T.jsx)(s.Route, {
                                                                        path: A.teamRace,
                                                                        component: qa(Wa)
                                                                    })]
                                                                })
                                                            }), (0,
                                                            T.jsx)("footer", {
                                                                className: Ya,
                                                                children: (0,
                                                                T.jsx)(zt, {})
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        T.jsx)(xu, {})
                    })
                })
            }
              , r_ = document.getElementById("root");
            if (r_) {
                var s_ = (0,
                T.jsx)(s.BrowserRouter, {
                    basename: c.Z.langPath,
                    children: (0,
                    T.jsx)(ee, {
                        children: (0,
                        T.jsx)(a_, {})
                    })
                });
                (0,
                i.createRoot)(r_).render(s_)
            }
        }
        ,
        87363: e=>{
            "use strict";
            e.exports = React
        }
        ,
        61533: e=>{
            "use strict";
            e.exports = ReactDOM
        }
        ,
        40506: ()=>{}
        ,
        35883: ()=>{}
        ,
        42480: ()=>{}
        ,
        88924: ()=>{}
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
    (()=>{
        var e = [];
        n.O = (t,a,r,s)=>{
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,r,s] = e[u], c = !0, o = 0; o < a.length; o++)
                        (!1 & s || i >= s) && Object.keys(n.O).every((e=>n.O[e](a[o]))) ? a.splice(o--, 1) : (c = !1,
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
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    (()=>{
        var e, t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__;
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
                Object.getOwnPropertyNames(c).forEach((e=>i[e] = ()=>a[e]));
            return i.default = ()=>a,
            n.d(s, i),
            s
        }
    }
    )(),
    n.d = (e,t)=>{
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    n.f = {},
    n.e = e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e, t),
    t)), [])),
    n.u = e=>"common/" + e + ".b0933464.js",
    n.miniCssF = e=>{}
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
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e = {}
          , t = "growth:";
        n.l = (a,r,s,i)=>{
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
                var _ = (t,n)=>{
                    c.onerror = c.onload = null,
                    clearTimeout(m);
                    var r = e[a];
                    if (delete e[a],
                    c.parentNode && c.parentNode.removeChild(c),
                    r && r.forEach((e=>e(n))),
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
    n.r = e=>{
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e = {}
          , t = {};
        n.f.remotes = (a,r)=>{
            n.o(e, a) && e[a].forEach((e=>{
                var a = n.R;
                a || (a = []);
                var s = t[e];
                if (!(a.indexOf(s) >= 0)) {
                    if (a.push(s),
                    s.p)
                        return r.push(s.p);
                    var i = t=>{
                        t || (t = new Error("Container missing")),
                        "string" === typeof t.message && (t.message += '\nwhile loading "' + s[1] + '" from ' + s[2]),
                        n.m[e] = ()=>{
                            throw t
                        }
                        ,
                        s.p = 0
                    }
                      , c = (e,t,n,a,c,o)=>{
                        try {
                            var l = e(t, n);
                            if (!l || !l.then)
                                return c(l, a, o);
                            var u = l.then((e=>c(e, a)), i);
                            if (!o)
                                return u;
                            r.push(s.p = u)
                        } catch (d) {
                            i(d)
                        }
                    }
                      , o = (e,t,n)=>c(t.get, s[1], a, 0, l, n)
                      , l = t=>{
                        s.p = 1,
                        n.m[e] = e=>{
                            e.exports = t()
                        }
                    }
                    ;
                    c(n, s[2], 0, 0, ((e,t,a)=>e ? c(n.I, s[0], 0, e, o, a) : i()), 1)
                }
            }
            ))
        }
    }
    )(),
    (()=>{
        n.S = {};
        var e = {}
          , t = {};
        n.I = (a,r)=>{
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
                return i.length ? e[a] = Promise.all(i).then((()=>e[a] = 1)) : e[a] = 1
            }
        }
    }
    )(),
    (()=>{
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
    (()=>{
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
    (()=>{
        var e = {
            6554: 0,
            8536: 0,
            5145: 0
        };
        n.f.j = (t,a)=>{
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (/^(5145|8536)$/.test(t))
                    e[t] = 0;
                else {
                    var s = new Promise(((n,a)=>r = e[t] = [n, a]));
                    a.push(r[2] = s);
                    var i = n.p + n.u(t)
                      , c = new Error;
                    n.l(i, (a=>{
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
        n.O.j = t=>0 === e[t];
        var t = (t,a)=>{
            var r, s, [i,c,o] = a, l = 0;
            if (i.some((t=>0 !== e[t]))) {
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
    var a = n.O(void 0, [4013, 4347, 8536, 5145, 1765, 9334, 8145, 2418, 8283, 2582, 4253, 5861, 7216, 1328, 2949], (()=>n(35354)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.70e4dda0.js.map
