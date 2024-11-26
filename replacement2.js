(()=>{
    var e = {
        84467: (e,t,n)=>{
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
              , v = n(4942)
              , g = n(42982)
              , k = n(95640)
              , j = n.n(k)
              , C = n(14300)
              , N = n(94595)
              , b = n(48006)
              , w = n(7562)
              , Z = n(74914)
              , y = n(76983)
              , T = (n(96809),
            n(29361),
            n(27235),
            n(56824));
            n(8911);
            const P = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var O = n(45263)
              , S = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: P.closeBtn,
                closeIconClassName: P.closeIcon
            }
              , E = function(e) {
                return (0,
                O.jsx)(T.default, (0,
                h.Z)((0,
                h.Z)({}, S), {}, {
                    topContent: e.title ? void 0 : (0,
                    O.jsx)("div", {
                        className: P.topPadding
                    }),
                    zIndex: 999
                }, e))
            }
              , I = function(e) {
                var t = T.default.show((0,
                h.Z)((0,
                h.Z)({}, S), {}, {
                    topContent: e.title ? void 0 : (0,
                    O.jsx)("div", {
                        className: P.topPadding
                    }),
                    onClose: function() {
                        t.destroy()
                    }
                }, e));
                return t
            }
              , B = n(44925);
            const L = "PrimaryButton_button__SJFHA"
              , R = "PrimaryButton_buttonText__19AJ7";
            var A = ["text", "className"]
              , D = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                B.Z)(e, A);
                return (0,
                O.jsx)(y.default, (0,
                h.Z)((0,
                h.Z)({
                    category: y.default.CATEGORY.fill,
                    type: y.default.TYPE.primary,
                    size: y.default.SIZE.lg,
                    className: j()(L, n),
                    contentClassName: R
                }, a), {}, {
                    children: t
                }))
            };
            const F = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , M = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var U = function(e) {
                var t = e.className;
                return (0,
                O.jsxs)("span", {
                    className: j()(F, t),
                    children: [(0,
                    O.jsx)(w.Z, {
                        iconName: "okds-clock",
                        className: M
                    }), (0,
                    C.O4)("ok_game_okxracer_tag_phase421_ended")]
                })
            }
              , G = function(e, t) {
                e ? p.Z.success({
                    title: t || (0,
                    C.O4)("ok_game_okxracer_success"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                }) : p.Z.error({
                    title: t || (0,
                    C.O4)("ok_game_okxracer_failed"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , W = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                G(!1, t || (0,
                C.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , V = n(60378)
              , H = n(4422);
            const K = utils.ont;
            var Y = n.n(K)
              , z = function(e) {
                var t = (e || {}).data;
                return t && 0 === Number(t.code) ? Promise.resolve(t) : Promise.reject(t)
            }
              , X = function(e) {
                return function(t) {
                    if (!(0,
                    V.y)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        H.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                    }
                    return Promise.reject(t)
                }
            }
              , J = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Y().get(t, n).then(z, X(t)));
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
              , q = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Y().getWithCache(t, n).then(z, X(t)));
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
              , Q = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Y().post(t, n, a).then(z, X(t)));
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
              , $ = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Y().put(t, n, a).then(z, X(t)));
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
              , ee = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Y().delete(t, n).then(z, X(t)));
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
              , te = function() {
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
                                e.abrupt("return", Q(t, r, a));
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
            const ne = {
                get: J,
                getWithCache: q,
                post: Q,
                put: $,
                postForm: te,
                delete: ee
            };
            var ae = n(15671)
              , re = n(43144)
              , se = function() {
                function e() {
                    (0,
                    ae.Z)(this, e),
                    this.store = void 0,
                    this.store = new Map
                }
                return (0,
                re.Z)(e, [{
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
            se.instance = void 0;
            const ie = se.getInstance();
            function ce(e, t) {
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
                                    !ie.hasItem(s) || ie.isItemExpired(s, t)) {
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
            function oe() {
                var e, t;
                return (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initData) || ""
            }
            function le(e, t, n) {
                return ue.apply(this, arguments)
            }
            function ue() {
                return (ue = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ne.get(t, (0,
                                h.Z)((0,
                                h.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": oe()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                ie.setItem(n, r),
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
            function de(e, t, n) {
                return _e.apply(this, arguments)
            }
            function _e() {
                return (_e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !ie.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = ie.getItem(r),
                                le(t, r, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", le(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function me(e, t, n) {
                return pe.apply(this, arguments)
            }
            function pe() {
                return (pe = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, n, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ne.post(t, n, (0,
                                h.Z)((0,
                                h.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": oe()
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
            var fe = "/priapi/v1/affiliate"
              , xe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/info"), t));
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
              , he = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/assess"), t));
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
              , ve = function() {
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
                                de("".concat(fe, "/game/racer/invitee-list"), {
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
              , ge = function() {
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
                                n = ce(de, 1e4),
                                e.next = 4,
                                n("".concat(fe, "/game/racer/leaderboard/friends"), {
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
                                W(e.t0),
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
              , ke = function() {
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
                                n = ce(de, 3e5),
                                e.next = 4,
                                n("".concat(fe, "/game/racer/leaderboard/global"), {
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
                                W(e.t0),
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
              , je = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e[e.ConnectEVMChain = 6] = "ConnectEVMChain",
                e
            }({})
              , Ce = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de("".concat(fe, "/game/racer/boosts"), {}, t));
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
              , Ne = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/boost"), t));
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
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de("".concat(fe, "/game/racer/group-tasks"), {}, t));
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
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/task"), t));
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
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/task-context"), t));
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
              , ye = function(e) {
                return e[e.NotStarted = 0] = "NotStarted",
                e[e.InProgress = 1] = "InProgress",
                e[e.Ended = 2] = "Ended",
                e
            }({})
              , Te = function() {
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
                                me("".concat(fe, "/game/racer/account-binding"), t);
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
              , Pe = function() {
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
                                de("".concat(fe, "/game/racer/campaigns"), {}, t);
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
              , Oe = function() {
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
                                e.abrupt("return", de("".concat(fe, "/game/racer/airdrop/tasks"), {}, t));
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
              , Se = function() {
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
                                e.abrupt("return", de("".concat(fe, "/game/racer/match/teams/info"), {}, t));
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
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/match/teams/join"), {
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
              , Ie = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", me("".concat(fe, "/game/racer/match/teams/leave"), {
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
            }();
            function Be(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            function Le(e) {
                var t, n;
                null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e)
            }
            const Re = "CampaignBottomSheet_campaignBottomSheet__OKpEt"
              , Ae = "CampaignBottomSheet_dateRange__t5AOU"
              , De = "CampaignBottomSheet_subTitle__aG7oj"
              , Fe = "CampaignBottomSheet_desc__TyIyt"
              , Me = "CampaignBottomSheet_divider__C+SIy"
              , Ue = "CampaignBottomSheet_points__OXkAw"
              , Ge = "CampaignBottomSheet_button__vdHpR";
            var We = function(e) {
                var t = e.campaign;
                return (0,
                O.jsxs)("div", {
                    className: Re,
                    children: [t.status === ye.Ended ? (0,
                    O.jsx)("span", {
                        className: Ae,
                        children: (0,
                        O.jsx)(U, {})
                    }) : (0,
                    O.jsxs)("span", {
                        className: Ae,
                        children: [(0,
                        N.o0)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        N.o0)(new Date(t.endDate))]
                    }), (0,
                    O.jsx)("p", {
                        className: De,
                        children: t.title
                    }), (0,
                    O.jsx)("p", {
                        className: Fe,
                        children: t.description
                    }), (0,
                    O.jsx)("hr", {
                        className: Me
                    }), (0,
                    O.jsx)("p", {
                        className: Ue,
                        children: t.pointDescription
                    }), (0,
                    O.jsx)(D, {
                        className: Ge,
                        onClick: function() {
                            Le(t.webUrl)
                        },
                        text: (0,
                        C.O4)("ok_game_okxracer_btn_phase421_go_campaign")
                    })]
                })
            };
            const Ve = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var He = function(e) {
                var t = e.className;
                return (0,
                O.jsx)("div", {
                    className: j()(Ve, t)
                })
            }
              , Ke = {
                act: function() {}
            };
            "undefined" !== typeof window && (Ke = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var Ye, ze, Xe = Ke, Je = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                Xe.act({
                    action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                    anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                    params: {
                        telegramid: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }, qe = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).source;
                Xe.act({
                    action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    params: {
                        source: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }, Qe = {
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
            }, $e = ["title", "titleId"];
            function et() {
                return et = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                et.apply(null, arguments)
            }
            function tt(e, t) {
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
                }(e, $e);
                return a.createElement("svg", et({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Ye || (Ye = a.createElement("path", {
                    d: "M0.203125 0.847946H3.21169L6.39055 10.6497L9.6451 0.847946H12.578L8.09351 14.0935H4.70651L0.203125 0.847946Z",
                    fill: "currentColor"
                })), ze || (ze = a.createElement("path", {
                    d: "M14.6885 19.2332C11.3204 19.2332 9.22009 17.4545 9.20117 14.7675H11.9827C12.0773 16.0921 13.0991 16.9815 14.7263 16.9815C16.0319 16.9815 16.997 16.4138 16.997 15.3731C16.997 14.2566 15.9184 14.0296 13.7046 13.5944C11.4718 13.1592 9.50392 12.459 9.50392 9.77207C9.50392 7.4257 11.4529 5.76054 14.4425 5.76054C17.5646 5.76054 19.5514 7.38786 19.5892 9.92344H16.8077C16.6753 8.80703 15.8427 8.03122 14.4425 8.03122C13.2315 8.03122 12.3611 8.54212 12.3611 9.56392C12.3611 10.6425 13.4018 10.8696 15.5967 11.2858C17.8674 11.7021 19.8541 12.4212 19.8541 15.0514C19.8541 17.5302 17.7917 19.2332 14.6885 19.2332Z",
                    fill: "currentColor"
                })))
            }
            var nt = a.forwardRef(tt);
            n.p;
            var at = n(4860);
            var rt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , st = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , it = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , ct = function(e) {
                return e[e.RACER = 0] = "RACER",
                e[e.CAR = 1] = "CAR",
                e[e.TEAM = 2] = "TEAM",
                e
            }({})
              , ot = "lastConnectWalletType"
              , lt = function() {
                return "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/247/149F6DE872696960.jpeg")
            }
              , ut = function(e) {
                return e.TgWallet = "OKX Mini Wallet",
                e.OkxApp = "OKX Wallet",
                e
            }({})
              , dt = function(e, t) {
                var n = (0,
                C.O4)("ok_game_okxracer_invitation_message")
                  , a = "https://t.me/".concat(rt.BOT_NAME, "/").concat(rt.MINI_APP_NAME)
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
              , _t = {
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
              , mt = (0,
            a.createContext)(_t)
              , pt = function() {
                return (0,
                a.useContext)(mt)
            }
              , ft = function(e) {
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
                            var t, n, a = new at.Z((e || "").replaceAll("__", "&").replaceAll("_", "="));
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
                    return _t
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                O.jsx)(mt.Provider, {
                    value: s,
                    children: t
                })
            }
              , xt = n(83108)
              , ht = n(96833)
              , vt = (n(14268),
            n(83295),
            n(72202))
              , gt = n(55528);
            function kt(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var jt = {
                Friends: kt(ge, {
                    pageNo: 1
                }),
                Boost: kt(Ce, !0),
                Task: kt(be, !0),
                Invitee: kt(ve, {
                    pageNo: 1
                }, !0),
                Global: kt(ke, {
                    pageNo: 1
                }),
                Teams: kt(Se, !0)
            }
              , Ct = ["Friends", "Boost", "Task", "Invitee", "Global", "Teams"]
              , Nt = function() {
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
                                    var t = Math.floor(1e3 * gt.k.mathRandom()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                n && jt[n] && (a = jt[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && H.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                Nt(t);
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
            function bt() {
                Nt(Ct).catch((function(e) {
                    e instanceof Error && H.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var wt = (0,
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
              , Zt = function() {
                return (0,
                a.useContext)(wt)
            }
              , yt = function(e) {
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
                  , g = (0,
                a.useState)(0)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , N = k[1]
                  , b = (0,
                a.useState)(0)
                  , w = (0,
                u.Z)(b, 2)
                  , Z = w[0]
                  , y = w[1]
                  , T = (0,
                a.useState)(0)
                  , P = (0,
                u.Z)(T, 2)
                  , S = P[0]
                  , E = P[1]
                  , I = (0,
                a.useState)(0)
                  , B = (0,
                u.Z)(I, 2)
                  , L = B[0]
                  , R = B[1]
                  , A = (0,
                a.useState)("")
                  , D = (0,
                u.Z)(A, 2)
                  , F = D[0]
                  , M = D[1]
                  , U = (0,
                a.useState)({})
                  , W = (0,
                u.Z)(U, 2)
                  , V = W[0]
                  , K = W[1]
                  , Y = (0,
                a.useState)(!0)
                  , z = (0,
                u.Z)(Y, 2)
                  , X = z[0]
                  , J = z[1]
                  , q = pt()
                  , Q = q.username
                  , $ = q.startParam
                  , ee = (0,
                a.useState)("")
                  , te = (0,
                u.Z)(ee, 2)
                  , ne = te[0]
                  , ae = te[1]
                  , re = (0,
                a.useState)(!1)
                  , se = (0,
                u.Z)(re, 2)
                  , ie = se[0]
                  , ce = se[1]
                  , oe = (0,
                a.useState)(0)
                  , le = (0,
                u.Z)(oe, 2)
                  , ue = le[0]
                  , de = le[1]
                  , _e = (0,
                a.useState)(!1)
                  , me = (0,
                u.Z)(_e, 2)
                  , pe = me[0]
                  , fe = me[1]
                  , he = (0,
                a.useState)()
                  , ve = (0,
                u.Z)(he, 2)
                  , ge = ve[0]
                  , ke = ve[1]
                  , je = (0,
                a.useState)(!1)
                  , Ce = (0,
                u.Z)(je, 2)
                  , Ne = Ce[0]
                  , be = Ce[1]
                  , we = (0,
                a.useState)(!1)
                  , Ze = (0,
                u.Z)(we, 2)
                  , ye = Ze[0]
                  , Te = Ze[1]
                  , Pe = $.linkCode
                  , Oe = $.teamId
                  , Se = (0,
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
                                xe({
                                    extUserName: Q,
                                    linkCode: Pe
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (c(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                v(n.basePoint),
                                N(n.autopilotPointsPerHour),
                                M(n.linkCode),
                                y(n.numChances),
                                R(n.secondToRefresh),
                                E(n.numChancesTotal),
                                ce(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                Te(Boolean(n.context.isShowNewbieCredit)),
                                fe(n.isUnderRiskControl),
                                de(n.autopilotPoints),
                                ke({
                                    activityEndTime: n.context.activityEndTime,
                                    isShowActivityFlag: n.context.isShowActivityFlag && !n.isUnderRiskControl
                                }),
                                K(n.context),
                                J(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                G(!1, (0,
                                C.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [Pe, Q]);
                (0,
                a.useEffect)((function() {
                    be(Boolean(null === ge || void 0 === ge ? void 0 : ge.isShowActivityFlag))
                }
                ), [null === ge || void 0 === ge ? void 0 : ge.isShowActivityFlag]);
                var Ee = (0,
                s.useHistory)()
                  , Ie = (0,
                s.useLocation)();
                (0,
                a.useEffect)((function() {
                    Oe && Ee.push({
                        pathname: Qe.teamDetail.replace(":id", Oe),
                        hash: Ie.hash
                    })
                }
                ), []),
                (0,
                a.useEffect)((function() {
                    Se().then(bt).catch((function(e) {
                        e instanceof Error && H.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [Se]),
                (0,
                a.useEffect)((function() {
                    var e = new vt.Z(L);
                    return L > 0 ? (e.start(),
                    e.addEventListener(vt.Z.Event.UPDATE, (function(e) {
                        ae("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(vt.Z.Event.FINISH, (function() {
                        ae(""),
                        Se()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    ae("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [L, Se]),
                (0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || Se()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [Se]);
                var Be = (0,
                a.useCallback)((function(e) {
                    c(Math.max(e.points, 0)),
                    y(e.numChances),
                    R(e.secondToRefresh)
                }
                ), [])
                  , Le = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Se();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [Se])
                  , Re = (0,
                a.useCallback)((function() {
                    ce(!1)
                }
                ), [])
                  , Ae = (0,
                a.useCallback)((function() {
                    Te(!1)
                }
                ), [])
                  , De = (0,
                a.useCallback)((function() {
                    fe(!1)
                }
                ), [])
                  , Fe = (0,
                a.useCallback)((function() {
                    be((function(e) {
                        return !e
                    }
                    ))
                }
                ), [])
                  , Me = (0,
                a.useMemo)((function() {
                    return {
                        isLoading: X,
                        points: i,
                        accumPoints: m,
                        numChances: Z,
                        numChancesTotal: S,
                        countdownDisplay: ne,
                        updateGameInfo: Be,
                        linkCode: F,
                        updateGameInfoFromServer: Le,
                        isShowAutopilotGainedPoint: ie,
                        autopilotPoints: ue,
                        isShowNewbie: ye,
                        hideNewbie: Ae,
                        hideAutopilotSheet: Re,
                        isShowRiskControlSheet: pe,
                        hideRiskControlSheet: De,
                        activity: ge,
                        isShowActivityDetails: Ne,
                        toggleActivityDetailsBottomSheet: Fe,
                        context: V,
                        basePoint: h,
                        autopilotPointsPerHour: j
                    }
                }
                ), [X, i, m, Z, S, ne, Be, F, Le, ie, ue, Re, ye, Ae, pe, De, ge, Ne, Fe, V, h, j]);
                return (0,
                O.jsx)(wt.Provider, {
                    value: Me,
                    children: t
                })
            };
            const Tt = "Timer_timer__j+KcR"
              , Pt = "Timer_show__GFyz+"
              , Ot = "Timer_label__nxjo+"
              , St = "Timer_separator__CFi1G"
              , Et = "Timer_timerValue__CaRO2";
            var It = function(e) {
                var t = e.endTime
                  , n = e.label
                  , r = (0,
                a.useRef)(new vt.Z.Absolute(t,{
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
                    return e.start().addEventListener(vt.Z.Event.UPDATE, (function(e) {
                        o(e)
                    }
                    )),
                    function() {
                        e.end()
                    }
                }
                ), []),
                (0,
                O.jsxs)("div", {
                    className: j()(Tt, (0,
                    v.Z)({}, Pt, c)),
                    children: [n && (0,
                    O.jsx)("span", {
                        className: Ot,
                        children: n
                    }), Number(null === c || void 0 === c ? void 0 : c.day) > 0 && (0,
                    O.jsxs)(O.Fragment, {
                        children: [(0,
                        O.jsx)("span", {
                            className: Et,
                            children: null === c || void 0 === c ? void 0 : c.day
                        }), (0,
                        O.jsx)("span", {
                            className: St,
                            children: ":"
                        })]
                    }), (0,
                    O.jsx)("span", {
                        className: Et,
                        children: null === c || void 0 === c ? void 0 : c.hour
                    }), (0,
                    O.jsx)("span", {
                        className: St,
                        children: ":"
                    }), (0,
                    O.jsx)("span", {
                        className: Et,
                        children: null === c || void 0 === c ? void 0 : c.minute
                    }), (0,
                    O.jsx)("span", {
                        className: St,
                        children: ":"
                    }), (0,
                    O.jsx)("span", {
                        className: Et,
                        children: null === c || void 0 === c ? void 0 : c.second
                    })]
                })
            };
            const Bt = "EventPopover_eventPopoverWrapper__65bP-"
              , Lt = "EventPopover_eventPopover__B0CAq"
              , Rt = "EventPopover_eventPopoverDesc__+lNFw"
              , At = "EventPopover_eventPopoverBtn__BKIwS"
              , Dt = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , Ft = "EventPopover_eventPopoverArrow__M+sYF"
              , Mt = "EventPopover_eventDetailsContainer__G1KfS"
              , Ut = "EventPopover_title__Tie4q"
              , Gt = "EventPopover_description__tVAy9"
              , Wt = "EventPopover_disclaimer__jFZC3"
              , Vt = "EventPopover_continueBtn__S2Sj-"
              , Ht = "EventPopover_eventDetails__5xDB0"
              , Kt = "EventPopover_eventImg__0yapf";
            var Yt = function(e) {
                var t = e.children
                  , n = Zt()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsx)(xt.Z, {
                        zIndex: 998,
                        layerClassName: Bt,
                        popperClassName: Lt,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: Rt,
                        description: (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)(y.default, {
                                className: At,
                                type: y.default.TYPE.primary,
                                category: y.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                O.jsx)(w.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: Dt
                                }),
                                iconType: y.default.ICON_POSITION.tailing,
                                children: (0,
                                C.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            O.jsx)("svg", {
                                className: Ft,
                                width: "8",
                                height: "4",
                                viewBox: "0 0 8 4",
                                fill: "none",
                                children: (0,
                                O.jsx)("path", {
                                    d: "M4 4L8 0L0 0L4 4Z",
                                    fill: "#2F302D"
                                })
                            })]
                        }),
                        children: t
                    }), (0,
                    O.jsx)(E, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        O.jsxs)("div", {
                            className: Mt,
                            children: [(0,
                            O.jsxs)("div", {
                                className: Ht,
                                children: [(0,
                                O.jsx)(ht.Z, {
                                    pictureClassName: Kt,
                                    className: Kt,
                                    src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                O.jsx)("h2", {
                                    className: Ut,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                O.jsx)("p", {
                                    className: Gt,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                O.jsx)(It, {
                                    endTime: i,
                                    label: (0,
                                    C.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                O.jsx)("p", {
                                    className: Wt,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            O.jsx)(D, {
                                className: Vt,
                                onClick: function() {
                                    s()
                                },
                                text: (0,
                                C.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            };
            const zt = "Navbar_navbar__LF3-M"
              , Xt = "Navbar_link__qX0Sf"
              , Jt = "Navbar_active__TCbF8"
              , qt = "Navbar_linkIcon__GtH54"
              , Qt = "Navbar_linkText__Szxi-"
              , $t = "Navbar_newIndicator__IrNNw"
              , en = "Navbar_teamLink__f6QDM"
              , tn = "Navbar_borderBox__qrzy1"
              , nn = "Navbar_container__KynEL";
            var an = ["children", "className"]
              , rn = ["iconName", "label", "onClick", "showNewIndicator"]
              , sn = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                B.Z)(e, an)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                O.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , cn = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , c = (0,
                B.Z)(e, rn)
                  , o = (0,
                s.useRouteMatch)({
                    path: c.to,
                    exact: c.to === Qe.home
                });
                return (0,
                O.jsxs)(sn, {
                    className: j()(Xt, o && Jt),
                    to: c.to,
                    onClick: a,
                    children: [(0,
                    O.jsx)(w.Z, {
                        iconName: t,
                        className: qt
                    }), i && (0,
                    O.jsx)("span", {
                        className: $t
                    }), (0,
                    O.jsx)("span", {
                        className: Qt,
                        children: n
                    })]
                })
            }
              , on = function() {
                var e = (0,
                s.useRouteMatch)({
                    path: Qe.teamRace
                });
                return (0,
                O.jsxs)(sn, {
                    className: j()(Xt, en, e && Jt),
                    to: Qe.teamRace,
                    children: [(0,
                    O.jsx)("div", {
                        className: tn,
                        children: (0,
                        O.jsx)("div", {
                            className: nn,
                            children: (0,
                            O.jsx)(nt, {
                                className: qt
                            })
                        })
                    }), (0,
                    O.jsx)("span", {
                        className: Qt,
                        children: (0,
                        C.O4)("ok_game_okxracer_tab_teams")
                    })]
                })
            }
              , ln = function() {
                var e = {
                    telegramid: pt().uid
                };
                return (0,
                O.jsxs)("div", {
                    className: zt,
                    children: [(0,
                    O.jsx)(Yt, {
                        children: (0,
                        O.jsx)(cn, {
                            iconName: "okx-growth-home",
                            to: Qe.home,
                            label: (0,
                            C.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    O.jsx)(cn, {
                        iconName: "okx-growth-leaderboard",
                        to: Qe.leaderboard,
                        label: (0,
                        C.O4)("ok_game_okxracer_leaderboard"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                Xe.act({
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
                    O.jsx)(on, {}), (0,
                    O.jsx)(cn, {
                        iconName: "okx-growth-task-new",
                        to: Qe.tasks,
                        label: (0,
                        C.O4)("ok_game_okxracer_tasks"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                Xe.act({
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
                    O.jsx)(cn, {
                        iconName: "okx-growth-surprises",
                        to: Qe.license,
                        label: (0,
                        C.O4)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            };
            const un = "NeonDivider_divider__QK3DO";
            var dn = function(e) {
                var t = e.className;
                return (0,
                O.jsx)("hr", {
                    className: j()(un, t)
                })
            }
              , _n = function() {
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
                        pathname: Qe.home,
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
            const mn = "CampaignCard_cardContainer__3yu81"
              , pn = "CampaignCard_dateRange__hvYLA"
              , fn = "CampaignCard_campaignEndedIndicator__6J91S"
              , xn = "CampaignCard_card__cYF8Y"
              , hn = "CampaignCard_campaignImg__YpUgC"
              , vn = "CampaignCard_round__MMyT5"
              , gn = "CampaignCard_content__1ZjVu"
              , kn = "CampaignCard_name__mfl60"
              , jn = "CampaignCard_desc__klZyx"
              , Cn = "CampaignCard_points__jIZar"
              , Nn = "CampaignCard_btn__v8gu9"
              , bn = "CampaignCard_btnContent__-5uC9";
            var wn = function(e) {
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
                O.jsxs)("li", {
                    className: mn,
                    children: [t.endDate && t.startDate ? t.status === ye.Ended ? (0,
                    O.jsx)(U, {
                        className: fn
                    }) : (0,
                    O.jsxs)("span", {
                        className: pn,
                        children: [(0,
                        N.o0)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        N.o0)(new Date(t.endDate))]
                    }) : null, (0,
                    O.jsxs)("div", {
                        className: xn,
                        children: [(0,
                        O.jsx)(ht.Z, {
                            src: "".concat(c.Z.cdnBaseUrl).concat(i),
                            pictureClassName: hn,
                            className: j()(hn, (0,
                            v.Z)({}, vn, s))
                        }), (0,
                        O.jsxs)("div", {
                            className: gn,
                            children: [(0,
                            O.jsx)("p", {
                                className: kn,
                                children: o
                            }), (0,
                            O.jsx)("p", {
                                className: jn,
                                children: l
                            }), !!u && u > 0 && (0,
                            O.jsx)("p", {
                                className: Cn,
                                children: (0,
                                C.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    N.uf)(u))
                                })
                            }), (0,
                            O.jsx)(y.default, {
                                type: y.default.TYPE.default,
                                category: y.default.CATEGORY.outline,
                                size: y.default.SIZE.s,
                                className: Nn,
                                contentClassName: bn,
                                onClick: a,
                                children: n
                            })]
                        })]
                    })]
                })
            }
              , Zn = {
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
              , yn = (0,
            a.createContext)({
                accountBindingInfo: Zn,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , Tn = function() {
                return (0,
                a.useContext)(yn)
            }
              , Pn = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(Zn)
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
                                Te(t);
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
                O.jsx)(yn.Provider, {
                    value: x,
                    children: t
                })
            }
              , On = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Sn = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function En(e) {
                var t = {
                    title: (0,
                    C.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    C.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: On.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink,
                    btnText: (0,
                    C.O4)("ok_game_okxracer_btn_phase4_verify")
                }
                  , n = [{
                    title: (0,
                    C.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    C.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: On.SIGNUP,
                    status: Sn(On.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    C.O4)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    C.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    C.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: On.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    C.O4)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var In = function(e) {
                var t = (0,
                a.useState)(En(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = pt().uid;
                (0,
                a.useEffect)((function() {
                    s(En(e))
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
                        case On.SIGNUP:
                        case On.INSTALL:
                            o = t,
                            window.localStorage && window.localStorage.setItem(o, "1"),
                            s(En(e))
                        }
                        var o, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case On.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                Xe.act({
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
                        case On.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                Xe.act({
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
                        case On.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                Xe.act({
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
                        case On.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                Xe.act({
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
            const Bn = "CertifyBottomSheet_certifySteps__-zWCO"
              , Ln = "CertifyBottomSheet_taskList__uK656"
              , Rn = "CertifyBottomSheet_task__iLWrC"
              , An = "CertifyBottomSheet_details__YoXf3"
              , Dn = "CertifyBottomSheet_title__X1Tnl"
              , Fn = "CertifyBottomSheet_subTitle__EzVrR"
              , Mn = "CertifyBottomSheet_btn__JLhoo"
              , Un = "CertifyBottomSheet_btnContent__wrzU-"
              , Gn = "CertifyBottomSheet_verifyBtn__lYfYD";
            var Wn = ["handleVerified"]
              , Vn = function(e) {
                var t = e.handleVerified
                  , n = (0,
                B.Z)(e, Wn)
                  , a = pt().uid
                  , r = Tn()
                  , s = r.accountBindingInfo
                  , i = r.getAccountBindingInfo
                  , c = In(s)
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
                                    null !== (n = e.sent) && void 0 !== n && n.isKyc && n.isConnectTelegram ? null === t || void 0 === t || t() : G(!1, (0,
                                    C.O4)("ok_game_okxracer_verify_failed_msg")),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_error_high_traffic"));
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
                O.jsx)(E, (0,
                h.Z)((0,
                h.Z)({}, n), {}, {
                    title: (0,
                    C.O4)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: Bn,
                    children: (0,
                    O.jsxs)(O.Fragment, {
                        children: [(0,
                        O.jsx)("ul", {
                            className: Ln,
                            children: u.map((function(e) {
                                return (0,
                                O.jsxs)("li", {
                                    className: Rn,
                                    children: [(0,
                                    O.jsxs)("div", {
                                        className: An,
                                        children: [(0,
                                        O.jsx)("p", {
                                            className: Dn,
                                            children: e.title
                                        }), (0,
                                        O.jsx)("p", {
                                            className: Fn,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    O.jsx)(D, {
                                        text: e.btnText,
                                        size: y.default.SIZE.xs,
                                        className: Mn,
                                        contentClassName: Un,
                                        onClick: function() {
                                            d(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        O.jsx)(D, {
                            className: Gn,
                            onClick: (0,
                            l.Z)((0,
                            o.Z)().mark((function e() {
                                return (0,
                                o.Z)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return Je({
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
                            C.O4)("ok_game_okxracer_surprises_verify")
                        })]
                    })
                }))
            }
              , Hn = (0,
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
              , Kn = function() {
                return (0,
                a.useContext)(Hn)
            }
              , Yn = function(e) {
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
                                Se();
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
                                    Ee(t);
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
                  , T = (0,
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
                                    Ie(t);
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
                var P = (0,
                a.useMemo)((function() {
                    return {
                        currentTeam: _,
                        teams: s,
                        isEligibleClaim: x,
                        teamBenefits: k,
                        isLoading: b,
                        getTeams: Z,
                        joinTeam: y,
                        leaveTeam: T
                    }
                }
                ), [_, Z, x, b, y, T, k, s]);
                return (0,
                O.jsx)(Hn.Provider, {
                    value: P,
                    children: t
                })
            };
            const zn = "LeaveTeamBottomSheet_container__AvVcB"
              , Xn = "LeaveTeamBottomSheet_title__gMzba"
              , Jn = "LeaveTeamBottomSheet_desc__cl4EX"
              , qn = "LeaveTeamBottomSheet_btn__Nn5Ag"
              , Qn = "LeaveTeamBottomSheet_btnContent__CsCwu";
            var $n = function(e) {
                var t = Kn()
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
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_toast_you_have_successfully_left", {
                                        teamName: n.teamInfoContext.teamName
                                    })),
                                    null === (a = e.onClose) || void 0 === a || a.call(e),
                                    t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(3),
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_error_high_traffic"));
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
                O.jsx)(E, (0,
                h.Z)((0,
                h.Z)({}, e), {}, {
                    children: (0,
                    O.jsxs)("div", {
                        className: zn,
                        children: [(0,
                        O.jsx)("h2", {
                            className: Xn,
                            children: (0,
                            C.O4)("ok_game_okxracer_title_are_you_sure", {
                                teamName: null === n || void 0 === n ? void 0 : n.teamInfoContext.teamName
                            })
                        }), (0,
                        O.jsx)("p", {
                            className: Jn,
                            children: (0,
                            C.O4)("ok_game_okxracer_come_back_to_rejoin")
                        }), (0,
                        O.jsx)(y.default, {
                            className: qn,
                            contentClassName: Qn,
                            size: y.default.SIZE.lg,
                            type: y.default.TYPE.primary,
                            htmlType: "button",
                            onClick: _,
                            loading: c,
                            children: (0,
                            C.O4)("ok_game_okxracer_btn_leave_team")
                        }), (0,
                        O.jsx)(y.default, {
                            className: qn,
                            contentClassName: Qn,
                            category: y.default.CATEGORY.outline,
                            size: y.default.SIZE.lg,
                            htmlType: "button",
                            onClick: e.onClose,
                            children: (0,
                            C.O4)("commonall_text_btn_cancel")
                        })]
                    })
                }))
            };
            const ea = "TeamDetail_container__Q+6aB"
              , ta = "TeamDetail_currentTeam__AYGL3"
              , na = "TeamDetail_banner__3rZlg"
              , aa = "TeamDetail_linkButton__dur+b"
              , ra = "TeamDetail_avatar__7nx+g"
              , sa = "TeamDetail_name__3MNHb"
              , ia = "TeamDetail_linkIcon__yXhDG"
              , ca = "TeamDetail_desc__-y49w"
              , oa = "TeamDetail_textPlaceholder__MSh-q"
              , la = "TeamDetail_divider__caEc+"
              , ua = "TeamDetail_fields__IVJYO"
              , da = "TeamDetail_field__UJRM8"
              , _a = "TeamDetail_label__wfHBi"
              , ma = "TeamDetail_value__muhSZ"
              , pa = "TeamDetail_btnContainer__Exmdz"
              , fa = "TeamDetail_btnContent__uKzwD"
              , xa = "TeamDetail_leaveTeamBtn__fc7Tb"
              , ha = "TeamDetail_title__OsFAU"
              , va = "TeamDetail_count__5lWAk"
              , ga = "TeamDetail_campaignList__BNfdO";
            var ka = function() {
                var e = Zt().linkCode
                  , t = Kn()
                  , n = t.teams
                  , r = t.isLoading
                  , i = t.joinTeam
                  , d = t.teamBenefits
                  , _ = t.getTeams
                  , m = t.currentTeam
                  , p = Tn().isCertified
                  , f = (0,
                s.useParams)().id
                  , x = dt(e, f).shareUrl
                  , k = (0,
                a.useState)(!1)
                  , T = (0,
                u.Z)(k, 2)
                  , P = T[0]
                  , S = T[1]
                  , E = (0,
                a.useState)(!1)
                  , B = (0,
                u.Z)(E, 2)
                  , L = B[0]
                  , R = B[1]
                  , A = (0,
                a.useState)(!1)
                  , D = (0,
                u.Z)(A, 2)
                  , F = D[0]
                  , M = D[1]
                  , U = (0,
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
                _n(),
                !U && !r)
                    return (0,
                    O.jsx)(s.Redirect, {
                        to: Qe.teamRace
                    });
                (0,
                C.O4)("ok_game_okxracer_label_total_team_points"),
                (0,
                s.generatePath)(Qe.teamMembers, {
                    id: 1
                }),
                (0,
                N.uf)((null === U || void 0 === U ? void 0 : U.totalPoints) || 0),
                w.Z;
                var W = {
                    key: "teamBenefitDesc",
                    label: (0,
                    C.O4)("ok_game_okxracer_label_benefits"),
                    value: (0,
                    b.T)(null === d || void 0 === d ? void 0 : d.teamBenefitDesc)
                }
                  , V = U ? [{
                    key: "teamRank",
                    label: (0,
                    C.O4)("ok_game_okxracer_label_team_rank"),
                    value: "#".concat((0,
                    N.uf)(U.teamRank || 0))
                }].concat((0,
                g.Z)([]), [{
                    key: "teamNumMembers",
                    label: (0,
                    C.O4)("ok_game_okxracer_label_total_racers"),
                    value: "".concat((0,
                    N.uf)(U.teamNumMembers), "/").concat((0,
                    N.uf)(U.teamNumMemberCap))
                }], (0,
                g.Z)(U.isCurrentTeam ? [W] : [])) : []
                  , H = function() {
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
                                    return R(!0),
                                    e.abrupt("return");
                                case 3:
                                    if (U) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return S(!0),
                                    e.prev = 6,
                                    e.next = 9,
                                    i(U.teamId);
                                case 9:
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_toast_you_have_successfully_joined", {
                                        teamName: U.teamInfoContext.teamName
                                    })),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(6),
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_error_high_traffic"));
                                case 15:
                                    return e.prev = 15,
                                    S(!1),
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
                var K = r && !U
                  , Y = !(null !== U && void 0 !== U && U.isCurrentTeam) && !m
                  , z = (null === U || void 0 === U ? void 0 : U.campaigns) || [];
                return (0,
                O.jsxs)("div", {
                    className: j()(ea, (0,
                    v.Z)({}, ta, null === U || void 0 === U ? void 0 : U.isCurrentTeam)),
                    children: [(0,
                    O.jsxs)("div", {
                        className: na,
                        children: [K ? (0,
                        O.jsx)(He, {
                            className: ra
                        }) : (0,
                        O.jsx)(Z.Z, (0,
                        h.Z)((0,
                        h.Z)({}, null !== U && void 0 !== U && U.teamInfoContext.teamAvatar ? {
                            src: "".concat(c.Z.cdnBaseUrl).concat(U.teamInfoContext.teamAvatar)
                        } : {}), {}, {
                            alt: null === U || void 0 === U ? void 0 : U.teamInfoContext.teamName,
                            className: ra
                        })), (0,
                        O.jsx)("div", {
                            className: sa,
                            children: K ? (0,
                            O.jsx)(He, {
                                className: oa
                            }) : (0,
                            O.jsxs)(O.Fragment, {
                                children: [null === U || void 0 === U ? void 0 : U.teamInfoContext.teamName, (null === U || void 0 === U ? void 0 : U.teamInfoContext.teamLink) && (0,
                                O.jsx)(y.default, {
                                    className: aa,
                                    type: y.default.TYPE.tertiary,
                                    category: y.default.CATEGORY.text,
                                    htmlType: "button",
                                    onClick: function() {
                                        U && Le(U.teamInfoContext.teamLink)
                                    },
                                    children: (0,
                                    O.jsx)(w.Z, {
                                        iconName: "okds-open-link",
                                        className: ia
                                    })
                                })]
                            })
                        }), (0,
                        O.jsx)("div", {
                            className: ca,
                            children: K ? (0,
                            O.jsx)(He, {
                                className: oa
                            }) : (0,
                            O.jsx)(O.Fragment, {
                                children: null === U || void 0 === U ? void 0 : U.teamInfoContext.teamDesc
                            })
                        })]
                    }), (0,
                    O.jsx)(dn, {
                        className: la
                    }), (0,
                    O.jsxs)("ul", {
                        className: ua,
                        children: [K && (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)(He, {
                                className: oa
                            }), (0,
                            O.jsx)(He, {
                                className: oa
                            }), (0,
                            O.jsx)(He, {
                                className: oa
                            })]
                        }), !K && V.map((function(e) {
                            var t = e.label
                              , n = e.value
                              , a = e.key;
                            return (0,
                            O.jsxs)("li", {
                                className: da,
                                children: [(0,
                                O.jsx)("span", {
                                    className: _a,
                                    children: t
                                }), (0,
                                O.jsx)("span", {
                                    className: ma,
                                    children: n
                                })]
                            }, a)
                        }
                        ))]
                    }), z.length > 0 && (0,
                    O.jsxs)(O.Fragment, {
                        children: [(0,
                        O.jsxs)("p", {
                            className: ha,
                            children: [(0,
                            C.O4)("ok_game_okxracer_mid_textarea_label_team_exclusive_campaigns"), "\xa0", (0,
                            O.jsxs)("span", {
                                className: va,
                                children: ["(", z.length, ")"]
                            })]
                        }), (0,
                        O.jsx)("ul", {
                            className: ga,
                            children: z.map((function(e) {
                                return (0,
                                O.jsx)(wn, {
                                    campaign: e,
                                    btnText: (0,
                                    C.O4)("ok_game_okxracer_btn_phase421_view_campaign"),
                                    onClick: function() {
                                        p ? function(e) {
                                            I({
                                                children: (0,
                                                O.jsx)(We, {
                                                    campaign: e
                                                })
                                            })
                                        }(e) : R(!0)
                                    }
                                }, e.title)
                            }
                            ))
                        })]
                    }), !K && (0,
                    O.jsxs)("div", {
                        className: pa,
                        children: [(null === U || void 0 === U ? void 0 : U.isCurrentTeam) && (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)(y.default, {
                                contentClassName: fa,
                                size: y.default.SIZE.lg,
                                type: y.default.TYPE.primary,
                                htmlType: "button",
                                href: x,
                                children: (0,
                                C.O4)("ok_game_okxracer_btn_invite")
                            }), (0,
                            O.jsx)(y.default, {
                                className: xa,
                                contentClassName: fa,
                                category: y.default.CATEGORY.outline,
                                size: y.default.SIZE.lg,
                                htmlType: "button",
                                onClick: function() {
                                    M(!0)
                                },
                                children: (0,
                                C.O4)("ok_game_okxracer_btn_leave_team")
                            })]
                        }), Y && (0,
                        O.jsx)(y.default, {
                            type: y.default.TYPE.primary,
                            size: y.default.SIZE.lg,
                            contentClassName: fa,
                            onClick: H,
                            loading: P,
                            children: (0,
                            C.O4)("ok_game_okxracer_btn_join_now")
                        })]
                    }), (0,
                    O.jsx)(Vn, {
                        visible: L,
                        onClose: function() {
                            R(!1)
                        },
                        handleVerified: function() {
                            R(!1)
                        }
                    }), (0,
                    O.jsx)($n, {
                        visible: F,
                        onClose: function() {
                            M(!1)
                        }
                    })]
                })
            }
              , ja = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            };
            function Ca(e) {
                return e <= 3
            }
            const Na = "TeamListItem_teamListItem__jlC3n"
              , ba = "TeamListItem_teamRank__sfdv+"
              , wa = "TeamListItem_emoji__dCwPS"
              , Za = "TeamListItem_avatar__gxfNS"
              , ya = "TeamListItem_teamName__gG78O"
              , Ta = "TeamListItem_teamPoints__jr8Wv"
              , Pa = "TeamListItem_currentTeam__dwSkF";
            var Oa = function(e) {
                var t = e.teamRank
                  , n = e.teamInfoContext
                  , a = n.teamAvatar
                  , r = n.teamName
                  , s = e.totalPoints
                  , i = e.isCurrentTeam
                  , o = e.highlightCurrentTeam
                  , l = void 0 === o || o
                  , u = Ca(t);
                return (0,
                O.jsxs)("div", {
                    className: j()(Na, (0,
                    v.Z)({}, Pa, l && i)),
                    children: [(0,
                    O.jsx)("span", {
                        className: j()(ba, (0,
                        v.Z)({}, wa, u)),
                        children: u ? ja[t] : "#".concat((0,
                        N.uf)(t))
                    }), (0,
                    O.jsx)(Z.Z, {
                        className: Za,
                        size: Z.Z.SIZE.sm,
                        alt: r,
                        src: "".concat(c.Z.cdnBaseUrl).concat(a)
                    }), (0,
                    O.jsx)("span", {
                        className: ya,
                        children: (0,
                        b.T)(r)
                    }), (0,
                    O.jsx)("span", {
                        className: Ta,
                        children: (0,
                        N.uf)(s)
                    })]
                })
            };
            const Sa = "TeamList_listHeaders__QcPJe"
              , Ea = "TeamList_list__hbILW"
              , Ia = "TeamList_listPlaceholder__nEDhA";
            var Ba = function() {
                var e = Kn()
                  , t = e.teams
                  , n = e.currentTeam
                  , r = e.getTeams;
                return (0,
                a.useEffect)((function() {
                    r()
                }
                ), [r]),
                (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsxs)("p", {
                        className: Sa,
                        children: [(0,
                        O.jsx)("span", {
                            children: (0,
                            C.O4)("ok_game_okxracer_label_leaderboard_teams_number", {
                                num: (0,
                                N.uf)(t.length)
                            })
                        }), (0,
                        O.jsx)("span", {
                            children: (0,
                            C.O4)("ok_game_okxracer_new_racers")
                        })]
                    }), (0,
                    O.jsxs)("ul", {
                        className: Ea,
                        children: [n && (0,
                        O.jsx)("li", {
                            children: (0,
                            O.jsx)(sn, {
                                to: (0,
                                s.generatePath)(Qe.teamDetail, {
                                    id: n.teamId
                                }),
                                children: (0,
                                O.jsx)(Oa, (0,
                                h.Z)({}, n))
                            })
                        }), t.map((function(e) {
                            return e.isCurrentTeam ? null : (0,
                            O.jsx)("li", {
                                children: (0,
                                O.jsx)(sn, {
                                    to: (0,
                                    s.generatePath)(Qe.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    O.jsx)(Oa, (0,
                                    h.Z)({}, e))
                                })
                            }, e.teamId)
                        }
                        )), 0 === t.length && (0,
                        O.jsx)(O.Fragment, {
                            children: Array.from({
                                length: 3
                            }).map((function(e, t) {
                                return (0,
                                O.jsx)("li", {
                                    children: (0,
                                    O.jsx)(He, {
                                        className: Ia
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const La = "TeamList_title__2Q2ap";
            var Ra = function() {
                return _n(),
                (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsx)("h2", {
                        className: La,
                        children: (0,
                        C.O4)("ok_game_okxracer_leaderboard_top_teams")
                    }), (0,
                    O.jsx)(Ba, {})]
                })
            }
              , Aa = n(58338);
            const Da = "PageTitle_title__IQ7TT";
            var Fa = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                O.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Aa.dU)(t)
                    },
                    className: j()(Da, n)
                })
            };
            const Ma = "RulesBottomSheet_container__NlHHH"
              , Ua = "RulesBottomSheet_rule__5HG6Z"
              , Ga = "RulesBottomSheet_bullet__fYKP5"
              , Wa = "RulesBottomSheet_textContainer__Miyg+"
              , Va = "RulesBottomSheet_title__PJ-Lg"
              , Ha = "RulesBottomSheet_desc__vheUi";
            var Ka = function(e) {
                var t = [{
                    title: (0,
                    C.O4)("ok_game_okxracer_bttmsheet_header_rules_join"),
                    desc: (0,
                    C.O4)("ok_game_okxracer_bttmsheet_desc_rules_join")
                }, {
                    title: (0,
                    C.O4)("ok_game_okxracer_bttmsheet_header_rules_climb"),
                    desc: (0,
                    C.O4)("ok_game_okxracer_bttmsheet_desc_rules_climb", {
                        num: 5e3
                    })
                }];
                return (0,
                O.jsx)(E, (0,
                h.Z)((0,
                h.Z)({}, e), {}, {
                    title: (0,
                    C.O4)("ok_game_okxracer_tag_rules"),
                    titleCenter: !0,
                    children: (0,
                    O.jsx)("ul", {
                        className: Ma,
                        children: t.map((function(e) {
                            var t = e.title
                              , n = e.desc;
                            return (0,
                            O.jsxs)("li", {
                                className: Ua,
                                children: [(0,
                                O.jsx)("span", {
                                    className: Ga
                                }), (0,
                                O.jsxs)("div", {
                                    className: Wa,
                                    children: [(0,
                                    O.jsx)("p", {
                                        className: Va,
                                        children: t
                                    }), (0,
                                    O.jsx)("p", {
                                        className: Ha,
                                        children: n
                                    })]
                                })]
                            }, t)
                        }
                        ))
                    })
                }))
            };
            const Ya = "TeamCard_teamCard__lUFQ3"
              , za = "TeamCard_header__Amp+p"
              , Xa = "TeamCard_avatar__aE9y-"
              , Ja = "TeamCard_teamName__ycan7"
              , qa = "TeamCard_chevron__kzh7j"
              , Qa = "TeamCard_content__3FBKT"
              , $a = "TeamCard_teamInfoField__sZNuy"
              , er = "TeamCard_label__al-xY"
              , tr = "TeamCard_value__ORmag"
              , nr = "TeamCard_divider__XjdlD"
              , ar = "TeamCard_leaderTeamPoints__-aWse"
              , rr = "TeamCard_text__A0e85"
              , sr = "TeamCard_btnContent__hlQU4";
            var ir = function(e) {
                var t = e.team
                  , n = e.className
                  , r = Kn()
                  , i = r.isEligibleClaim
                  , d = r.teamBenefits
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1]
                  , x = function() {
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
                                    we({
                                        id: Number(null === d || void 0 === d ? void 0 : d.rankRewardTaskId)
                                    });
                                case 4:
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_toast_you_have_successfully_claimed")),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_error_high_traffic"));
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
                O.jsxs)("div", {
                    className: j()(n, Ya),
                    children: [(0,
                    O.jsxs)(sn, {
                        to: (0,
                        s.generatePath)(Qe.teamDetail, {
                            id: t.teamId
                        }),
                        className: za,
                        children: [(0,
                        O.jsx)(Z.Z, {
                            src: "".concat(c.Z.cdnBaseUrl).concat(t.teamInfoContext.teamAvatar),
                            alt: t.teamInfoContext.teamName,
                            className: Xa,
                            size: Z.Z.SIZE.sm
                        }), (0,
                        O.jsx)("p", {
                            className: Ja,
                            children: (0,
                            b.T)(t.teamInfoContext.teamName)
                        }), (0,
                        O.jsx)(w.Z, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: qa
                        })]
                    }), (0,
                    O.jsxs)("div", {
                        className: Qa,
                        children: [(0,
                        O.jsxs)("div", {
                            className: $a,
                            children: [(0,
                            O.jsx)("p", {
                                className: er,
                                children: (0,
                                C.O4)("ok_game_okxracer_todays_ranking")
                            }), (0,
                            O.jsxs)("p", {
                                className: tr,
                                children: ["#", (0,
                                N.uf)(t.teamRank)]
                            })]
                        }), (0,
                        O.jsxs)("div", {
                            className: $a,
                            children: [(0,
                            O.jsx)("p", {
                                className: er,
                                children: (0,
                                C.O4)("ok_game_okxracer_new_racers")
                            }), (0,
                            O.jsx)("p", {
                                className: tr,
                                children: (0,
                                N.uf)(t.totalPoints)
                            })]
                        })]
                    }), i && (0,
                    O.jsxs)(O.Fragment, {
                        children: [(0,
                        O.jsx)("hr", {
                            className: nr
                        }), (0,
                        O.jsxs)("section", {
                            className: ar,
                            children: [(0,
                            O.jsxs)("p", {
                                className: rr,
                                children: ["\ud83c\udfc1\xa0", (0,
                                C.O4)("ok_game_okxracer_desc_pts_for_team", {
                                    num: (0,
                                    N.uf)(5e3)
                                })]
                            }), (0,
                            O.jsx)(y.default, {
                                contentClassName: sr,
                                type: i ? y.default.TYPE.primary : y.default.TYPE.gray,
                                size: y.default.SIZE.s,
                                onClick: x,
                                disabled: !i,
                                loading: p,
                                children: (0,
                                C.O4)("ok_game_okxracer_btn_claim_pts")
                            })]
                        })]
                    })]
                })
            };
            const cr = "TeamList_teamListLink__EMea8"
              , or = "TeamList_icon__Dhul7"
              , lr = "TeamList_teamList__w-ZJo"
              , ur = "TeamList_listPlaceholder__p9xfs";
            var dr = function() {
                var e = Kn().teams.slice(0, 3);
                return (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsxs)(sn, {
                        className: cr,
                        to: Qe.teamList,
                        children: [(0,
                        C.O4)("ok_game_okxracer_leaderboard_top_teams"), (0,
                        O.jsx)(w.Z, {
                            iconName: "okds-arrow-chevron-right-centered-sm",
                            className: or
                        })]
                    }), (0,
                    O.jsxs)("ul", {
                        className: lr,
                        children: [e.map((function(e) {
                            return (0,
                            O.jsx)("li", {
                                children: (0,
                                O.jsx)(sn, {
                                    to: (0,
                                    s.generatePath)(Qe.teamDetail, {
                                        id: e.teamId
                                    }),
                                    children: (0,
                                    O.jsx)(Oa, (0,
                                    h.Z)((0,
                                    h.Z)({}, e), {}, {
                                        highlightCurrentTeam: !1
                                    }))
                                })
                            }, e.teamId)
                        }
                        )), 0 === e.length && (0,
                        O.jsx)(O.Fragment, {
                            children: Array.from({
                                length: 3
                            }).map((function(e, t) {
                                return (0,
                                O.jsx)("li", {
                                    children: (0,
                                    O.jsx)(He, {
                                        className: ur
                                    })
                                }, t)
                            }
                            ))
                        })]
                    })]
                })
            };
            const _r = "TeamsPage_banner__kJ07n"
              , mr = "TeamsPage_rulesBtn__kbf-e"
              , pr = "TeamsPage_upgradesLink__ks2+R"
              , fr = "TeamsPage_icon__RIsDk"
              , xr = "TeamsPage_pageTitle__5jH4j"
              , hr = "TeamsPage_video__gEbdZ"
              , vr = "TeamsPage_joinTeamBtn__QZ2+Q"
              , gr = "TeamsPage_subtitle__UxY6O"
              , kr = "TeamsPage_teamCard__h6zcj";
            var jr = [{
                src: "/cdn/assets/files/2410/3ECD604AAAD66923.mp4",
                type: "video/mp4"
            }, {
                src: "/cdn/assets/files/2410/31AAF553D96E7302.webm",
                type: "video/webm"
            }]
              , Cr = function() {
                var e = Tn().isCertified
                  , t = Kn()
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
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsxs)("div", {
                        className: _r,
                        children: [(0,
                        O.jsxs)(sn, {
                            to: Qe.upgrades,
                            className: pr,
                            children: [(0,
                            O.jsx)(w.Z, {
                                iconName: "okx-growth-upgrades",
                                className: fr
                            }), (0,
                            C.O4)("ok_game_okxracer_nav_upgrades")]
                        }), (0,
                        O.jsxs)("button", {
                            className: mr,
                            type: "button",
                            onClick: function() {
                                p(!0)
                            },
                            children: [(0,
                            O.jsx)(w.Z, {
                                iconName: "okds-question-mark-circle",
                                className: fr
                            }), (0,
                            C.O4)("ok_game_okxracer_tag_rules")]
                        }), (0,
                        O.jsx)("video", {
                            className: hr,
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            controls: !1,
                            preload: "auto",
                            poster: "".concat(c.Z.cdnBaseUrl).concat("/cdn/assets/imgs/2410/EB79DD3F2B0CFDF2.png"),
                            children: jr.map((function(e) {
                                return (0,
                                O.jsx)("source", {
                                    src: "".concat(c.Z.cdnBaseUrl).concat(e.src),
                                    type: e.type
                                }, e.src)
                            }
                            ))
                        }), (0,
                        O.jsx)(Fa, {
                            className: xr,
                            html: e && n ? (0,
                            C.O4)("ok_game_okxracer_tips_race_with_the_best") : (0,
                            C.O4)("ok_game_okxracer_winning_team")
                        }), !n && (0,
                        O.jsx)(O.Fragment, {
                            children: e ? (0,
                            O.jsxs)(O.Fragment, {
                                children: [(0,
                                O.jsx)("p", {
                                    className: gr,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_text_join_or_create_team")
                                }), (0,
                                O.jsx)(sn, {
                                    to: Qe.teamList,
                                    children: (0,
                                    O.jsx)(D, {
                                        className: vr,
                                        text: (0,
                                        C.O4)("ok_game_okxracer_btn_join_a_team"),
                                        size: y.default.SIZE.sm
                                    })
                                })]
                            }) : (0,
                            O.jsxs)(O.Fragment, {
                                children: [(0,
                                O.jsx)("p", {
                                    className: gr,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_get_certified_battle")
                                }), (0,
                                O.jsx)(D, {
                                    className: vr,
                                    text: (0,
                                    C.O4)("ok_game_okxracer_btn_get_certified"),
                                    size: y.default.SIZE.sm,
                                    onClick: function() {
                                        l(!0)
                                    }
                                })]
                            })
                        })]
                    }), n && (0,
                    O.jsx)(ir, {
                        team: n,
                        className: kr
                    }), (0,
                    O.jsx)(dr, {}), (0,
                    O.jsx)(Vn, {
                        visible: o,
                        onClose: function() {
                            l(!1)
                        },
                        handleVerified: function() {
                            l(!1)
                        }
                    }), (0,
                    O.jsx)(Ka, {
                        visible: m,
                        onClose: function() {
                            p(!1)
                        }
                    })]
                })
            }
              , Nr = (0,
            a.createContext)({
                campaigns: [],
                loading: !1
            })
              , br = function(e) {
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
                                        Pe(!0);
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
                O.jsx)(Nr.Provider, {
                    value: p,
                    children: t
                })
            };
            const wr = "App_container__p+0qT"
              , Zr = "App_footer__NGiBl"
              , yr = "App_content__Jjurs"
              , Tr = "App_gradientBackground__rNgmD"
              , Pr = "ComPaddingLayout_commonPaddingLayout__FJ+ET";
            var Or = function(e, t) {
                return function(n) {
                    return (0,
                    O.jsx)("div", {
                        className: j()(Pr, t),
                        children: (0,
                        O.jsx)(e, (0,
                        h.Z)({}, n))
                    })
                }
            };
            const Sr = "RiskControl_title__h9Z0T";
            var Er = function() {
                var e = Zt()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                O.jsx)(E, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    O.jsx)("div", {
                        className: Sr,
                        children: (0,
                        C.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , Ir = n(8031)
              , Br = new (function() {
                return (0,
                re.Z)((function e() {
                    var t = this;
                    (0,
                    ae.Z)(this, e),
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
                    this.connection = new Ir.Z({
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
              , Lr = (0,
            a.createContext)(Br)
              , Rr = function(e) {
                var t = e.children;
                return (0,
                O.jsx)(Lr.Provider, {
                    value: Br,
                    children: t
                })
            }
              , Ar = (0,
            a.createContext)(null)
              , Dr = function() {
                return (0,
                a.useContext)(Ar)
            }
              , Fr = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useContext)(Lr);
                return (0,
                a.useEffect)((function() {
                    c.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [c]),
                (0,
                O.jsx)(Ar.Provider, {
                    value: s,
                    children: t
                })
            }
              , Mr = n(46430)
              , Ur = "racer"
              , Gr = function() {
                var e;
                if (!(0,
                V.y)())
                    return Mr.Z.getInstance(Ur) || Mr.Z.init({
                        project: Ur
                    }),
                    null !== (e = Mr.Z.getInstance(Ur)) && void 0 !== e ? e : Mr.Z
            }
              , Wr = "guessRecords_new";
            function Vr(e) {
                var t = Gr().get(Wr) || [];
                t.unshift(e),
                Gr().set(Wr, t.slice(0, 5))
            }
            var Hr = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Kr = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: Hr.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Hr.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Yr = (0,
            a.createContext)(Kr)
              , zr = function() {
                return (0,
                a.useContext)(Yr)
            }
              , Xr = function(e) {
                var t = e.children
                  , n = pt().uid
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
                  , g = (0,
                a.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , N = k[1]
                  , b = (0,
                a.useState)(Hr.NONE)
                  , w = (0,
                u.Z)(b, 2)
                  , Z = w[0]
                  , y = w[1]
                  , T = Dr()
                  , P = Zt().updateGameInfo
                  , S = (0,
                a.useRef)(Hr.NONE)
                  , E = (0,
                a.useRef)(1)
                  , I = (0,
                a.useRef)(10)
                  , B = (0,
                a.useRef)(null)
                  , L = (0,
                a.useRef)(null)
                  , R = (0,
                a.useRef)(null)
                  , A = (0,
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
                                t = S.current === Hr.UP ? 1 : 0,
                                e.next = 4,
                                he({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (N(a.won),
                                P({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                E.current = a.multiplier,
                                I.current = a.basePoint,
                                B.current = Number(a.changeRate),
                                L.current = a.prevPrice,
                                R.current = a.currentPrice,
                                Vr({
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
                                B.current = null,
                                G(!1, (0,
                                C.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                S.current = Hr.NONE,
                                c(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [P]);
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
                            A())
                        }
                        ), 1e3)
                    }
                    return function() {
                        e && clearTimeout(e)
                    }
                }
                ), [A, i]),
                (0,
                a.useEffect)((function() {
                    if (i && T)
                        if (h) {
                            var e = T > h;
                            y(T === h ? Hr.NONE : e ? Hr.UP : Hr.DOWN)
                        } else
                            v(T)
                }
                ), [h, i, T]);
                var D = (0,
                a.useCallback)((function(e) {
                    N(null),
                    c(!0),
                    S.current = e,
                    B.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === Hr.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        Xe.act({
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
                    e === Hr.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        Xe.act({
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
                  , F = (0,
                a.useMemo)((function() {
                    return {
                        countdown: m,
                        onButtonClick: D,
                        result: j,
                        isPending: i,
                        currentTrend: Z,
                        multiplier: E.current,
                        basePoints: I.current,
                        predict: S.current,
                        changeRate: B.current,
                        prevPrice: L.current,
                        currentPrice: R.current
                    }
                }
                ), [m, Z, i, E, D, j]);
                return (0,
                O.jsx)(Yr.Provider, {
                    value: F,
                    children: t
                })
            };
            const Jr = "ClaimTeamPointsBottomSheet_container__1wnim"
              , qr = "ClaimTeamPointsBottomSheet_graphic__5TzK4"
              , Qr = "ClaimTeamPointsBottomSheet_title__NsQhi"
              , $r = "ClaimTeamPointsBottomSheet_desc__RAIVt"
              , es = "ClaimTeamPointsBottomSheet_btn__pC8CP"
              , ts = "ClaimTeamPointsBottomSheet_btnContent__ze-Xt";
            var ns = function() {
                var e = Kn()
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
                                    we({
                                        id: Number(null === r || void 0 === r ? void 0 : r.rankRewardTaskId)
                                    });
                                case 5:
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_toast_you_have_successfully_claimed")),
                                    _(!1),
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(2),
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_error_high_traffic"));
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
                O.jsx)(E, {
                    visible: d,
                    onClose: function() {
                        _(!1)
                    },
                    children: (0,
                    O.jsxs)("div", {
                        className: Jr,
                        children: [(0,
                        O.jsx)(ht.Z, {
                            className: qr,
                            src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/2410/3F84F994EA1D6F77.svg")
                        }), (0,
                        O.jsx)("h2", {
                            className: Qr,
                            children: (0,
                            C.O4)("ok_game_okxracer_bttmsheet_header_great_job")
                        }), (0,
                        O.jsx)("p", {
                            className: $r,
                            children: (0,
                            C.O4)("ok_game_okxracer_bttmsheet_desc_great_job")
                        }), (0,
                        O.jsx)(y.default, {
                            className: es,
                            contentClassName: ts,
                            size: y.default.SIZE.lg,
                            type: y.default.TYPE.primary,
                            htmlType: "button",
                            onClick: m,
                            children: (0,
                            C.O4)("ok_game_okxracer_btn_claim_pts")
                        })]
                    })
                })
            };
            const as = "NewCampaigns_container__gO1Ko"
              , rs = "NewCampaigns_img__Or37G"
              , ss = "NewCampaigns_title__Lx+PB"
              , is = "NewCampaigns_desc__U9VKz"
              , cs = "NewCampaigns_btn__xIIk1";
            var os = function() {
                var e = (0,
                s.useHistory)()
                  , t = (0,
                s.useLocation)()
                  , n = !1
                  , a = function() {};
                return (0,
                O.jsxs)(E, {
                    visible: n,
                    onClose: a,
                    containerClassName: as,
                    children: [(0,
                    O.jsx)(ht.Z, {
                        pictureClassName: rs,
                        className: rs,
                        src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    O.jsx)("p", {
                        className: ss,
                        children: (0,
                        C.O4)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    O.jsx)("p", {
                        className: is,
                        children: (0,
                        C.O4)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    O.jsx)(D, {
                        className: cs,
                        onClick: function() {
                            e.push({
                                pathname: Qe.license,
                                hash: t.hash
                            })
                        },
                        text: (0,
                        C.O4)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            }
              , ls = n(96450)
              , us = 2e3
              , ds = 500
              , _s = "\ud83c\udfc1";
            function ms(e) {
                return (Math.abs(e) < 1e-4 ? ls.yx.ceilTruncate : ls.yx.floorTruncate)(e, 4)
            }
            const ps = "GuessResult_container__ECdpL"
              , fs = "GuessResult_title__fzYxg"
              , xs = "GuessResult_multiplier__yRHWm"
              , hs = "GuessResult_description__R2fup"
              , vs = "GuessResult_detailsIcon__ZE7Ry"
              , gs = "GuessResult_changeRateContainer__a5-N7"
              , ks = "GuessResult_label__+b5Nz"
              , js = "GuessResult_changeRate__yhVz3"
              , Cs = "GuessResult_up__5vYDR"
              , Ns = "GuessResult_down__fa-oP"
              , bs = "GuessResult_priceChange__xr6e8"
              , ws = "GuessResult_price__Vk+bY";
            function Zs(e) {
                return (0,
                N.xG)((0,
                N.uf)(ls.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var ys = function(e) {
                var t = e.className
                  , n = zr()
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
                            ), us)
                        }
                        ), ds)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [r]),
                (0,
                O.jsx)(O.Fragment, {
                    children: _ && (0,
                    O.jsxs)("div", {
                        className: j()(t, ps),
                        children: [(0,
                        O.jsx)("p", {
                            className: xs,
                            children: r ? (0,
                            O.jsxs)("span", {
                                className: vs,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            O.jsx)("span", {
                                className: vs,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        O.jsx)("h2", {
                            className: fs,
                            children: (0,
                            C.O4)(r ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        O.jsxs)("div", {
                            className: hs,
                            children: [null !== i && (0,
                            O.jsxs)("p", {
                                className: gs,
                                children: [(0,
                                O.jsx)("span", {
                                    className: ks,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                O.jsx)("span", {
                                    className: j()(js, (0,
                                    v.Z)((0,
                                    v.Z)({}, Cs, i > 0), Ns, i < 0)),
                                    children: (0,
                                    N.uf)(ms(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && o && (0,
                            O.jsx)("p", {
                                className: bs,
                                children: (0,
                                C.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    O.jsx)("span", {
                                        className: ws,
                                        children: Zs(c)
                                    }),
                                    currentPrice: (0,
                                    O.jsx)("span", {
                                        className: ws,
                                        children: Zs(o)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const Ts = "TncButton_termsAndConditions__MyIpV";
            var Ps = function(e) {
                var t = e.className;
                return (0,
                O.jsx)("button", {
                    className: j()(Ts, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    C.O4)("ok_game_okxracer_tnc")
                })
            };
            const Os = "AutoPilot_title__NJa0C"
              , Ss = "AutoPilot_button__Sg42v";
            var Es = function() {
                var e = Zt()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                O.jsxs)(E, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    O.jsx)("div", {
                        className: Os,
                        children: (0,
                        C.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            N.uf)(n)
                        })
                    }), (0,
                    O.jsx)(D, {
                        className: Ss,
                        onClick: a,
                        text: (0,
                        C.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const Is = "BackgroundVideo_container__J5sO2"
              , Bs = "BackgroundVideo_muteButton__04Huj"
              , Ls = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Rs = "BackgroundVideo_staticImage__EpRTb"
              , As = "BackgroundVideo_video__XEWIJ"
              , Ds = "BackgroundVideo_hide__ZXYN9";
            var Fs, Ms, Us, Gs, Ws, Vs, Hs = "backgroundVideoSoundOn", Ks = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Ys = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }], zs = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }], Xs = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.Z.cdnBaseUrl).concat(Ks)
            }, Js = function() {
                var e = zr().isPending
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
                  , g = f[1]
                  , k = Gr()
                  , C = (0,
                a.useState)((function() {
                    var e = k.get(Hs);
                    return Boolean(!e)
                }
                ))
                  , N = (0,
                u.Z)(C, 2)
                  , b = N[0]
                  , Z = N[1];
                (0,
                a.useEffect)((function() {
                    t.current && (e && (g(!1),
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
                        g(!0),
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
                var T = !i && !_
                  , P = i && x && _
                  , S = i && (!x || !_);
                return (0,
                O.jsxs)("div", {
                    className: Is,
                    children: [(0,
                    O.jsx)(y.default, {
                        category: y.default.CATEGORY.fill,
                        type: y.default.TYPE.quaternary,
                        size: y.default.SIZE.md,
                        className: Bs,
                        strictCircle: !0,
                        onClick: function() {
                            Z((function(e) {
                                return k.set(Hs, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        O.jsx)(w.Z, {
                            iconName: b ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Ls
                        })
                    }), (0,
                    O.jsx)(ht.Z, {
                        className: j()(Rs, (0,
                        v.Z)({}, Ds, !T)),
                        src: "".concat(c.Z.cdnBaseUrl).concat(Ks)
                    }), (0,
                    O.jsx)("video", (0,
                    h.Z)((0,
                    h.Z)({}, Xs), {}, {
                        className: j()(As, (0,
                        v.Z)({}, Ds, !P)),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: Ys.map((function(e) {
                            return (0,
                            O.jsx)("source", {
                                src: "".concat(c.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    })), (0,
                    O.jsx)("video", (0,
                    h.Z)((0,
                    h.Z)({}, Xs), {}, {
                        className: j()((0,
                        v.Z)({}, Ds, !S)),
                        ref: t,
                        muted: b,
                        children: zs.map((function(e) {
                            return (0,
                            O.jsx)("source", {
                                src: "".concat(c.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }, qs = ["title", "titleId"];
            function Qs() {
                return Qs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Qs.apply(null, arguments)
            }
            function $s(e, t) {
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
                }(e, qs);
                return a.createElement("svg", Qs({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Fs || (Fs = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Ms || (Ms = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Us || (Us = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Gs || (Gs = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Ws || (Ws = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Vs || (Vs = a.createElement("defs", null, a.createElement("filter", {
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
            var ei = a.forwardRef($s);
            n.p;
            var ti, ni, ai, ri, si, ii, ci = ["title", "titleId"];
            function oi() {
                return oi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                oi.apply(null, arguments)
            }
            function li(e, t) {
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
                }(e, ci);
                return a.createElement("svg", oi({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ti || (ti = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), ni || (ni = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), ai || (ai = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), ri || (ri = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), si || (si = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), ii || (ii = a.createElement("defs", null, a.createElement("filter", {
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
            var ui = a.forwardRef(li);
            n.p;
            const di = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var _i, mi = function(e) {
                var t = e.className
                  , n = zr()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , c = Zt().numChances
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
                    s || d || (_(e === Hr.UP ? Hr.DOWN : Hr.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = c <= 0;
                return (0,
                O.jsxs)("div", {
                    className: t,
                    children: [(0,
                    O.jsx)("p", {
                        className: j()(di.instructions, s && di.hide),
                        children: (0,
                        C.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    O.jsxs)("div", {
                        className: di.btnContainer,
                        children: [(0,
                        O.jsxs)("button", {
                            disabled: p || d === Hr.UP,
                            onClick: function() {
                                return m(Hr.UP)
                            },
                            type: "button",
                            className: j()(di.btn, di.upBtn, (0,
                            v.Z)({}, di.pressed, i === Hr.UP)),
                            children: [(0,
                            O.jsx)(ui, {
                                className: j()(di.btnGraphic, di.upBtnGraphic)
                            }), (0,
                            O.jsxs)("span", {
                                className: di.btnText,
                                children: [(0,
                                C.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                O.jsx)(w.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: di.arrow
                                })]
                            })]
                        }), (0,
                        O.jsxs)("button", {
                            disabled: p || d === Hr.DOWN,
                            onClick: function() {
                                return m(Hr.DOWN)
                            },
                            type: "button",
                            className: j()(di.btn, di.downBtn, (0,
                            v.Z)({}, di.pressed, i === Hr.DOWN)),
                            children: [(0,
                            O.jsx)(ei, {
                                className: j()(di.btnGraphic, di.downBtnGraphic)
                            }), (0,
                            O.jsxs)("span", {
                                className: di.btnText,
                                children: [(0,
                                C.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                O.jsx)(w.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: di.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, pi = ["title", "titleId"];
            function fi() {
                return fi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                fi.apply(null, arguments)
            }
            function xi(e, t) {
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
                }(e, pi);
                return a.createElement("svg", fi({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, _i || (_i = a.createElement("g", {
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
            var hi = a.forwardRef(xi);
            n.p;
            var vi = n(31301);
            n(27668);
            const gi = "FuelIndicator_fuelContainer__QIskL"
              , ki = "FuelIndicator_line__tWBfm"
              , ji = "FuelIndicator_description__EaUsa"
              , Ci = "FuelIndicator_fuelIcon__I38Ss"
              , Ni = "FuelIndicator_maxChances__OMSHl";
            var bi, wi, Zi = function(e) {
                var t = e.className
                  , n = Zt()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                O.jsxs)("div", {
                    className: j()(t, gi),
                    children: [(0,
                    O.jsx)("span", {
                        className: Ci,
                        children: "\u26fd\ufe0f"
                    }), (0,
                    O.jsx)(vi.Z.Line, {
                        className: ki,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r), (0,
                    O.jsxs)("p", {
                        className: ji,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        O.jsxs)(O.Fragment, {
                            children: ["/\xa0", (0,
                            O.jsx)("span", {
                                className: Ni,
                                children: r
                            })]
                        })]
                    })]
                })
            }, yi = ["title", "titleId"];
            function Ti() {
                return Ti = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Ti.apply(null, arguments)
            }
            function Pi(e, t) {
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
                }(e, yi);
                return a.createElement("svg", Ti({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, bi || (bi = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), wi || (wi = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var Oi = a.forwardRef(Pi);
            n.p;
            const Si = "RefuelTimer_container__wtALO"
              , Ei = "RefuelTimer_graphic__naxi3"
              , Ii = "RefuelTimer_countdown__THIa3"
              , Bi = "RefuelTimer_description__sD+HM"
              , Li = "RefuelTimer_timer__LL1+c"
              , Ri = "RefuelTimer_square__3Hum0"
              , Ai = "RefuelTimer_upgradesLink__-+8Sr";
            var Di = function(e) {
                var t = e.className
                  , n = Zt().countdownDisplay;
                return (0,
                O.jsxs)("div", {
                    className: j()(t, Si),
                    children: [(0,
                    O.jsx)(Oi, {
                        className: Ei,
                        preserveAspectRatio: "none"
                    }), (0,
                    O.jsxs)("p", {
                        className: Bi,
                        children: [n && (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)("span", {
                                className: Ii,
                                children: (0,
                                C.Lg)("ok_game_okxracer_nx_refill_time", {
                                    countDown: (0,
                                    O.jsxs)("span", {
                                        className: Li,
                                        children: ["\xa0", n]
                                    })
                                })
                            }), (0,
                            O.jsx)("span", {
                                className: Ri
                            })]
                        }), (0,
                        O.jsxs)(sn, {
                            to: Qe.upgrades,
                            className: Ai,
                            children: [!n && (0,
                            O.jsx)(w.Z, {
                                iconName: "okx-growth-upgrades"
                            }), (0,
                            C.O4)("ok_game_okxracer_nav_upgrades"), (0,
                            O.jsx)(w.Z, {
                                iconName: "okx-growth-chevrons-right"
                            })]
                        })]
                    })]
                })
            };
            const Fi = "CoinPrice_raceTrack__NZO2t"
              , Mi = "CoinPrice_run__f0UIF"
              , Ui = "CoinPrice_coinPriceContainer__YbeUE"
              , Gi = "CoinPrice_content__a-5Jl"
              , Wi = "CoinPrice_fuelIndicator__p+f1I"
              , Vi = "CoinPrice_refuelTimer__tbWMw"
              , Hi = "CoinPrice_hide__bHhxJ"
              , Ki = "CoinPrice_label__yTNy0"
              , Yi = "CoinPrice_value__ZjRZz"
              , zi = "CoinPrice_slotMachine__hUQKt"
              , Xi = "SlotMachine_row__a4TO0"
              , Ji = "SlotMachine_animate__-G4TR"
              , qi = "SlotMachine_column__aR0VE"
              , Qi = "SlotMachine_arrows__m1dhv"
              , $i = "SlotMachine_columnContainer__a76pd"
              , ec = "SlotMachine_background__b9TMg"
              , tc = "SlotMachine_slot__jwCvC"
              , nc = "SlotMachine_staticColumn__O5zfB"
              , ac = "SlotMachine_sm__ZRCig"
              , rc = "SlotMachine_arrow__qOYmf"
              , sc = "SlotMachine_wentUp__z48TO"
              , ic = "SlotMachine_down__aYC8C"
              , cc = "SlotMachine_stable__CDMLP"
              , oc = "SlotMachine_wentDown__1fYUS"
              , lc = "SlotMachine_up__IuiYV";
            var uc = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                O.jsxs)("div", {
                    className: $i,
                    children: [(0,
                    O.jsx)("div", {
                        className: ec
                    }), (0,
                    O.jsxs)("div", {
                        className: qi,
                        style: r,
                        children: [(0,
                        O.jsx)("p", {
                            className: tc,
                            children: a
                        }), t && (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)("p", {
                                className: tc,
                                children: "1"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "2"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "3"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "4"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "5"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "6"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "7"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "8"
                            }), (0,
                            O.jsx)("p", {
                                className: tc,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , dc = function() {
                var e = zr()
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
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? Hr.UP : 0 === e ? Hr.NONE : Hr.DOWN),
                    c(String(Math.abs(Number(ms(t)))).split("").filter((function(e) {
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
                O.jsxs)("div", {
                    className: j()(Xi, f && Ji),
                    children: [(0,
                    O.jsx)("div", {
                        className: $i,
                        children: (0,
                        O.jsxs)("div", {
                            className: j()(Qi, (0,
                            v.Z)((0,
                            v.Z)((0,
                            v.Z)({}, sc, d === Hr.UP), oc, d === Hr.DOWN), cc, d === Hr.NONE)),
                            children: [(0,
                            O.jsx)(w.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: j()(rc, lc)
                            }), (0,
                            O.jsx)(w.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: j()(rc, cc)
                            }), (0,
                            O.jsx)(w.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: j()(rc, ic)
                            })]
                        })
                    }), (0,
                    O.jsx)(uc, {
                        animate: f,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    O.jsx)("span", {
                        className: nc,
                        children: "."
                    }), (0,
                    O.jsx)(uc, {
                        animate: f,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    O.jsx)(uc, {
                        animate: f,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    O.jsx)(uc, {
                        animate: f,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    O.jsx)(uc, {
                        animate: f,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    O.jsx)("span", {
                        className: j()(nc, ac),
                        children: "%"
                    })]
                })
            }
              , _c = function() {
                var e = Dr()
                  , t = zr()
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
                    ), ds)),
                    t
                }
                ), [r, n]);
                var l = e ? "$".concat((0,
                N.uf)(ls.yx.truncate(e, 1, !0))) : "--";
                return (0,
                O.jsxs)("div", {
                    className: Ui,
                    children: [(0,
                    O.jsx)(hi, {
                        className: j()(Fi, n && Mi)
                    }), (0,
                    O.jsxs)("div", {
                        className: j()(Gi, c && Hi),
                        children: [(0,
                        O.jsx)("p", {
                            className: Ki,
                            children: (0,
                            C.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        O.jsx)("p", {
                            className: Yi,
                            children: l
                        })]
                    }), (0,
                    O.jsxs)("div", {
                        className: j()(Gi, !c && Hi),
                        children: [(0,
                        O.jsxs)("p", {
                            className: Ki,
                            children: [(0,
                            C.O4)("ok_game_okxracer_btc_price"), " ", l]
                        }), (0,
                        O.jsx)("div", {
                            className: zi,
                            children: (0,
                            O.jsx)(dc, {})
                        })]
                    }), (0,
                    O.jsx)(Zi, {
                        className: Wi
                    }), (0,
                    O.jsx)("div", {
                        className: j()(Vi, n && Hi),
                        children: (0,
                        O.jsx)(Di, {})
                    })]
                })
            };
            const mc = "LandingPage_container__pU2cC"
              , pc = "LandingPage_resultOverlay__WSYZb"
              , fc = "LandingPage_disclaimer__pVRHC"
              , xc = "LandingPage_recordsBtnContainer__Anr4Y"
              , hc = "LandingPage_backgroundVideo__flTkH"
              , vc = "LandingPage_content__D0ZLW"
              , gc = "LandingPage_points__Ruq4j"
              , kc = "LandingPage_coinPrice__nJ0nj"
              , jc = "LandingPage_btnContainer__IEll8"
              , Cc = "LandingPage_termsAndConditions__MdClU";
            var Nc = n(71979);
            const bc = "NewbieWelcome_title__48Py5"
              , wc = "NewbieWelcome_desc__q7GHz"
              , Zc = "NewbieWelcome_button__im+B1"
              , yc = "NewbieWelcome_pointsBox__gOjMh"
              , Tc = "NewbieWelcome_points__4t75l"
              , Pc = "NewbieWelcome_animation__tf9Dj";
            var Oc = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = c.Z.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                Nc.Z)((0,
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
                O.jsx)(O.Fragment, {
                    children: (0,
                    O.jsx)("div", {
                        ref: e,
                        className: Pc
                    })
                })
            }
              , Sc = function() {
                var e = Zt()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                O.jsxs)(E, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)(Oc, {}), (0,
                            O.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    O.jsx)("div", {
                        className: yc,
                        children: (0,
                        O.jsx)("img", {
                            src: "".concat(c.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: Tc
                        })
                    }), (0,
                    O.jsx)("div", {
                        className: bc,
                        children: (0,
                        C.O4)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    O.jsx)("div", {
                        className: wc,
                        children: (0,
                        C.O4)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    O.jsx)(D, {
                        className: Zc,
                        onClick: t,
                        text: (0,
                        C.O4)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , Ec = n(22387);
            const Ic = "UserPointCounter_pointCounter__-QAj8"
              , Bc = "UserPointCounter_hide__o4qTQ"
              , Lc = "UserPointCounter_points__d3HeG"
              , Rc = "UserPointCounter_title__B-gN-"
              , Ac = "UserPointCounter_countdown__Z7xGo"
              , Dc = "UserPointCounter_value__2a23E";
            var Fc = function() {
                var e = Zt().points
                  , t = (0,
                Ec.Z)(e)
                  , n = zr()
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
                    N.uf)(String(e))),
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
                O.jsxs)("div", {
                    className: Ic,
                    children: [(0,
                    O.jsxs)("p", {
                        className: j()(Rc, l && Bc),
                        children: ["\ud83c\udfc6 ", (0,
                        C.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    O.jsx)("p", {
                        ref: i,
                        className: j()(Lc, l && Bc),
                        children: "0"
                    }), (0,
                    O.jsxs)("p", {
                        className: j()(Ac, !l && Bc),
                        children: ["00:0", (0,
                        O.jsx)("span", {
                            className: Dc,
                            children: s
                        })]
                    })]
                })
            }
              , Mc = n(39136)
              , Uc = n(52008);
            function Gc(e) {
                return !!e && "proof"in e
            }
            var Wc = function(e, t) {
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
                                        Gc(_ = null === u || void 0 === u ? void 0 : u.tonProof) && (m = _.proof,
                                        p = m.signature,
                                        f = m.payload,
                                        x = m.domain,
                                        h = m.timestamp,
                                        v = Uc.Address.parse(c),
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
              , Vc = function() {
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
                                a = Wc(t, n),
                                r = a.promise,
                                s = a.unsubscribe,
                                e.next = 5,
                                r;
                            case 5:
                                return i = e.sent,
                                c = s,
                                s(),
                                qe({
                                    source: "app"
                                }),
                                e.abrupt("return", [i, c]);
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && H.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
              , Hc = function(e) {
                var t = (0,
                d.useOKXTonConnectUI)()
                  , n = (0,
                u.Z)(t, 1)[0]
                  , r = pt().uid
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
                                    Vc(n, r);
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
                                    t.sent && null !== c && void 0 !== c && c.appName && Gr().set(ot, null === c || void 0 === c ? void 0 : c.appName);
                                case 12:
                                    t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14,
                                    t.t0 = t.catch(0),
                                    H.k.error("TON connectWallet failed", t.t0);
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
              , Kc = function(e) {
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
            const Yc = "ViewWalletButton_button__WbNMO"
              , zc = "ViewWalletButton_btnIcon__W5IFc";
            var Xc = function() {
                var e = Zt()
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
                                    we({
                                        id: 9,
                                        taskContext: t
                                    });
                                case 3:
                                    return G(!0, (0,
                                    C.O4)("ok_game_okxracer_task_completion_msg")),
                                    e.abrupt("return", !0);
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e.catch(0),
                                    W(e.t0),
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
                  , r = Hc(a).connectWallet
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
                                    c = Gr(),
                                    l = c.get(ot),
                                    (u = l === ut.TgWallet ? "https://t.me/OKX_WALLET_BOT/start" : t.tonDeeplink || "") && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i || i.openLink(u)),
                                    e.next = 11;
                                    break;
                                case 7:
                                    return e.next = 9,
                                    r();
                                case 9:
                                    return e.next = 11,
                                    Promise.allSettled([be(), n()]);
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
                Mc.Z)(s, {
                    wait: 500,
                    leading: !0
                }).run;
                return (0,
                O.jsxs)("button", {
                    className: Yc,
                    type: "button",
                    onClick: i,
                    children: [(0,
                    O.jsx)(w.Z, {
                        iconName: "okx-growth-wallet",
                        className: zc
                    }), t.tonAddress ? Kc(t.tonAddress || "") : (0,
                    C.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Jc = function() {
                var e = pt().uid;
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        Xe.act({
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
                O.jsxs)("div", {
                    className: mc,
                    children: [(0,
                    O.jsx)("div", {
                        className: xc,
                        children: (0,
                        O.jsx)(Xc, {})
                    }), (0,
                    O.jsx)("div", {
                        className: hc,
                        children: (0,
                        O.jsx)(Js, {})
                    }), (0,
                    O.jsxs)("div", {
                        className: vc,
                        children: [(0,
                        O.jsx)("div", {
                            className: gc,
                            children: (0,
                            O.jsx)(Fc, {})
                        }), (0,
                        O.jsx)("div", {
                            className: kc,
                            children: (0,
                            O.jsx)(_c, {})
                        }), (0,
                        O.jsx)(mi, {
                            className: jc
                        })]
                    }), (0,
                    O.jsx)(Ps, {
                        className: Cc
                    }), (0,
                    O.jsx)("p", {
                        className: fc,
                        children: (0,
                        C.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    O.jsx)(ys, {
                        className: pc
                    }), (0,
                    O.jsx)(Es, {}), (0,
                    O.jsx)(Sc, {}), (0,
                    O.jsx)(Er, {}), (0,
                    O.jsx)(os, {}), (0,
                    O.jsx)(ns, {})]
                })
            }
              , qc = function() {
                return (0,
                O.jsx)(Xr, {
                    children: (0,
                    O.jsx)(Jc, {})
                })
            }
              , Qc = n(55861);
            n(1016);
            const $c = "InviteBanner_bannerContainer__30zHC"
              , eo = "InviteBanner_bannerIcon__U6pI0"
              , to = "InviteBanner_text__3Q8mq"
              , no = "InviteBanner_rightIcon__2Ly1W";
            var ao = function(e) {
                var t = e.className;
                return (0,
                O.jsxs)(sn, {
                    className: j()($c, t),
                    to: Qe.referrals,
                    children: [(0,
                    O.jsx)(w.Z, {
                        iconName: "okx-growth-friends",
                        className: eo
                    }), (0,
                    O.jsx)("div", {
                        className: to,
                        children: (0,
                        C.O4)("ok_game_okxracer_select_season_two_invite_friends")
                    }), (0,
                    O.jsx)(w.Z, {
                        iconName: "okx-growth-chevrons-right",
                        className: no
                    })]
                })
            };
            const ro = "LeaderBoard_container__0DJSO"
              , so = "LeaderBoard_inviteBanner__sql+w"
              , io = "LeaderBoard_pageTitle__vTUSh"
              , co = "LeaderBoard_desc__MFxC+"
              , oo = "LeaderBoard_inviteList__mV9a7"
              , lo = "LeaderBoard_tabActiveClassName__7Xv4B"
              , uo = "LeaderBoard_tabsContent__KCGtW"
              , _o = "InviteButton_inviteBtn__gLbFB"
              , mo = "InviteButton_btnA__+dJqi"
              , po = "InviteButton_btnContainer__lg4rV"
              , fo = "InviteButton_copyButton__znucI"
              , xo = "InviteButton_copyIcon__QZgE9";
            var ho = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                C.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = pt().uid
                  , s = Zt().linkCode
                  , i = dt(s)
                  , c = i.shareUrl
                  , o = i.appUrl;
                return (0,
                O.jsxs)("div", {
                    className: j()(a, po),
                    children: [(0,
                    O.jsx)("a", {
                        className: mo,
                        href: c,
                        children: (0,
                        O.jsx)(D, {
                            onClick: function() {
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    Xe.act({
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
                            className: _o,
                            text: n
                        })
                    }), (0,
                    O.jsx)(y.default, {
                        strictCircle: !0,
                        category: y.default.CATEGORY.fill,
                        type: y.default.TYPE.primary,
                        size: y.default.SIZE.lg,
                        onClick: function() {
                            try {
                                navigator.clipboard.writeText(o),
                                G(!0, (0,
                                C.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                G(!1, "Copy Invite URL failed")
                            }
                        },
                        className: fo,
                        children: (0,
                        O.jsx)(w.Z, {
                            iconName: "okx-growth-copy",
                            className: xo
                        })
                    })]
                })
            };
            const vo = "RankList_listItem__qJvXJ"
              , go = "RankList_name__sxTWa"
              , ko = "RankList_mask__ldBi8"
              , jo = "RankList_hightLightRow__xYkeg"
              , Co = "RankList_rank__k2m5R"
              , No = "RankList_point__D5mVw"
              , bo = "RankList_listHeader__KVGnw"
              , wo = "RankList_icon__1-SRV"
              , Zo = "RankList_pointIcon__k80Wy"
              , yo = "RankList_InviteButton__D6ute"
              , To = "RankList_noFirendsNote__Ckkil"
              , Po = "RankList_under__MJ5We"
              , Oo = "RankList_rankItemPlaceholder__z-upW"
              , So = "RankList_rank-name__YEqnc"
              , Eo = "RankList_rank-score__gtI+m";
            var Io = 1
              , Bo = 2
              , Lo = 3
              , Ro = function(e) {
                var t = e.total;
                return (0,
                O.jsxs)("div", {
                    className: bo,
                    children: [(0,
                    O.jsx)("span", {
                        children: (0,
                        C.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            N.uf)(t)
                        })
                    }), (0,
                    O.jsx)("span", {
                        children: (0,
                        C.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Ao = function() {
                return (0,
                O.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        O.jsxs)("div", {
                            className: Oo,
                            children: [(0,
                            O.jsx)(He, {
                                className: So
                            }), (0,
                            O.jsx)(He, {
                                className: Eo
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , Do = function(e) {
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                O.jsxs)("div", {
                    className: j()(vo, n && jo),
                    children: [(0,
                    O.jsx)("div", {
                        className: ko
                    }), Ca(t.rank) ? (0,
                    O.jsx)("span", {
                        className: j()(Co, wo),
                        children: ja[t.rank]
                    }) : (0,
                    O.jsx)("span", {
                        className: Co,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    O.jsx)("div", {
                        className: go,
                        children: t.extUserName
                    }), (0,
                    O.jsxs)("div", {
                        className: No,
                        children: [(0,
                        O.jsx)("span", {
                            className: Zo,
                            children: ja[4]
                        }), (0,
                        C.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            N.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Fo = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? Io : t
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
                  , g = (0,
                a.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , N = k[1]
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
                                    n !== Io) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    ge(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    ke(a);
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
                  , w = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                a.useEffect)((function() {
                    b(1)
                }
                ), [b]),
                (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsx)(Ro, {
                        total: h
                    }), i ? (0,
                    O.jsx)(Ao, {}) : (0,
                    O.jsxs)(O.Fragment, {
                        children: [w && (0,
                        O.jsx)(Do, {
                            item: j,
                            isHighlight: !0
                        }), m.map((function(e, t) {
                            return (0,
                            O.jsx)(Do, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    O.jsx)("div", {
                        className: Po
                    }), n === Io && (0,
                    O.jsxs)(O.Fragment, {
                        children: [1 === m.length && (0,
                        O.jsx)("div", {
                            className: To,
                            children: (0,
                            C.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        O.jsx)(ho, {
                            className: yo,
                            text: (0,
                            C.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Mo = function() {
                return (0,
                O.jsxs)("div", {
                    className: ro,
                    children: [(0,
                    O.jsx)(ao, {
                        className: so
                    }), (0,
                    O.jsx)(Fa, {
                        className: io,
                        html: (0,
                        C.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            C.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    O.jsx)("div", {
                        className: co,
                        children: (0,
                        C.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    O.jsxs)(Qc.Z, {
                        activeClassName: lo,
                        noPadding: !0,
                        size: Qc.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        O.jsx)(Qc.Z.TabPane, {
                            className: uo,
                            tab: (0,
                            C.O4)("ok_game_okxracer_tab_teams"),
                            id: Lo,
                            children: (0,
                            O.jsx)("div", {
                                className: oo,
                                children: (0,
                                O.jsx)(Ba, {})
                            })
                        }), (0,
                        O.jsx)(Qc.Z.TabPane, {
                            className: uo,
                            tab: (0,
                            C.O4)("ok_game_okxracer_tab_global"),
                            id: Bo,
                            children: (0,
                            O.jsx)("div", {
                                className: oo,
                                children: (0,
                                O.jsx)(Fo, {
                                    pageType: Bo
                                })
                            })
                        }), (0,
                        O.jsx)(Qc.Z.TabPane, {
                            tab: (0,
                            C.O4)("ok_game_okxracer_tab_friends"),
                            id: Io,
                            className: uo,
                            children: (0,
                            O.jsx)("div", {
                                className: oo,
                                children: (0,
                                O.jsx)(Fo, {
                                    pageType: Io
                                })
                            })
                        })]
                    })]
                })
            };
            const Uo = "index_page__-xiuX"
              , Go = "index_entering__yddHy";
            var Wo = function(e) {
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
                    return p(Go),
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
                O.jsx)("div", {
                    className: j()(Uo, m),
                    children: (0,
                    O.jsx)(s.Switch, {
                        location: o,
                        children: t
                    })
                })
            }
              , Vo = n(59257);
            const Ho = "index_sheetContainer__VPbba"
              , Ko = "index_logo__iAzol"
              , Yo = "index_sheetName__X3wgl"
              , zo = "index_sheetDesc__BGlZJ"
              , Xo = "index_btn__jg8QD"
              , Jo = "index_secondaryBtn__1oeGV"
              , qo = "index_btnText__ox2Nh";
            var Qo = function(e) {
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
                O.jsxs)("div", {
                    className: Ho,
                    children: [i && (0,
                    O.jsx)(ht.Z, {
                        src: "".concat(c.Z.cdnBaseUrl).concat(i),
                        className: Ko
                    }), (0,
                    O.jsx)("div", {
                        className: Yo,
                        children: t
                    }), (0,
                    O.jsx)("div", {
                        className: zo,
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            Aa.dU)(n)
                        }
                    }), d, (0,
                    O.jsx)(D, {
                        className: Xo,
                        loading: f,
                        onClick: h,
                        text: r
                    }), _ && (0,
                    O.jsx)(y.default, {
                        category: y.default.CATEGORY.outline,
                        type: y.default.TYPE.primary,
                        size: y.default.SIZE.lg,
                        className: Jo,
                        onClick: _.onClick,
                        children: (0,
                        O.jsx)("div", {
                            className: qo,
                            children: _.text
                        })
                    })]
                })
            }
              , $o = function(e) {
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
                O.jsx)(Qo, {
                    name: s,
                    desc: r,
                    btnText: i,
                    onPrimaryBtnClick: c
                })
            }
              , el = n(69027);
            const tl = "index_copyBox__6n5nL"
              , nl = "index_icon__BHdDG"
              , al = "index_line__dTaE5";
            var rl = function(e) {
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
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_copied_url")),
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6,
                                    e.t0 = e.catch(0),
                                    G(!1, "Copy Invite URL failed");
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
                O.jsxs)("div", {
                    className: tl,
                    children: [(0,
                    O.jsx)("div", {
                        children: t
                    }), (0,
                    O.jsx)(w.Z, {
                        className: j()("okx-growth-copy", nl),
                        onClick: r
                    }), s && (0,
                    O.jsxs)(O.Fragment, {
                        children: [(0,
                        O.jsx)("span", {
                            className: al
                        }), (0,
                        O.jsx)(w.Z, {
                            className: j()("okds-close", nl),
                            onClick: a
                        })]
                    })]
                })
            }
              , sl = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , il = "/cdn/assets/imgs/249/014A8107B107466F.png"
              , cl = [je.WalletConnect, je.ConnectEVMChain, je.OpenLink];
            var ol = [je.WalletConnect, je.ConnectEVMChain];
            function ll(e) {
                if (e.state === st.unfinished)
                    return !0;
                var t = e.context.actionType;
                return ol.includes(t)
            }
            var ul = function(e) {
                var t = e.doTask
                  , n = e.task
                  , r = Hc(function() {
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
                    (null === n || void 0 === n ? void 0 : n.state) === st.finished ? Xe.act({
                        action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }) : Xe.act({
                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), [null === n || void 0 === n ? void 0 : n.state]),
                n.context.actionType !== je.WalletConnect)
                    return null;
                var i = n.context
                  , c = i.nameFinished
                  , u = i.tonAddress
                  , d = i.btnText
                  , _ = i.btnTextFinishedAndSwitch
                  , m = i.name
                  , p = i.desc;
                return (null === n || void 0 === n ? void 0 : n.state) === st.finished ? (0,
                O.jsx)(Qo, {
                    name: c,
                    desc: "",
                    btnText: _,
                    logo: il,
                    onPrimaryBtnClick: s,
                    children: (0,
                    O.jsx)(rl, {
                        text: u
                    })
                }) : (0,
                O.jsx)(Qo, {
                    name: m,
                    desc: p,
                    btnText: d,
                    logo: sl,
                    onPrimaryBtnClick: s
                })
            }
              , dl = (0,
            v.Z)((0,
            v.Z)((0,
            v.Z)((0,
            v.Z)((0,
            v.Z)({}, je.Normal, $o), je.OpenLink, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== je.OpenLink)
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
                O.jsx)(Qo, {
                    name: s,
                    btnText: i,
                    desc: r,
                    onPrimaryBtnClick: u
                })
            }
            )), je.WalletConnect, ul), je.WalletDepositConnect, (function(e) {
                var t = e.task
                  , n = e.doTask
                  , s = e.walletConnectTask
                  , i = Zt().context
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
                var p = Hc(function() {
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
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_task_completion_msg"))),
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
                if (t.context.actionType !== je.WalletDepositConnect)
                    return null;
                var x = t.context
                  , h = x.verifyBtnText
                  , v = x.connectedTitle
                  , g = x.desc
                  , k = x.depositBtnText
                  , j = function() {
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
                O.jsx)(Qo, {
                    logo: il,
                    name: v,
                    desc: g,
                    btnText: h,
                    onPrimaryBtnClick: j,
                    secondaryBtn: {
                        text: k,
                        onClick: function() {
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(i.tonDeeplink)
                        }
                    },
                    children: (0,
                    O.jsx)(rl, {
                        text: _,
                        showClose: Boolean(s),
                        onClose: f
                    })
                })
            }
            )), je.ConnectEVMChain, (function(e) {
                var t = e.doTask
                  , n = e.task;
                if (n.context.actionType !== je.ConnectEVMChain)
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
                                    el.OKXUniversalConnectUI.init({
                                        dappMetaData: {
                                            icon: lt(),
                                            name: "OKX Racer"
                                        },
                                        actionsConfiguration: {
                                            returnStrategy: "tg://resolve"
                                        },
                                        language: c.Z.locale,
                                        uiPreferences: {
                                            theme: el.THEME.DARK
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
                O.jsx)(Qo, {
                    name: s,
                    desc: u,
                    btnText: i,
                    logo: d,
                    onPrimaryBtnClick: _
                })
            }
            ))
              , _l = function(e) {
                var t = e.task
                  , n = e.doTask
                  , a = e.walletConnectTask;
                if (!t)
                    return null;
                var r = t.context.actionType
                  , s = dl[r] || $o;
                return r === je.WalletDepositConnect && (null === a || void 0 === a ? void 0 : a.state) === st.unfinished && (s = ul),
                (0,
                O.jsx)(s, {
                    task: t,
                    doTask: n,
                    walletConnectTask: a
                })
            };
            const ml = "index_taskItemPlaceholder__hIgHw"
              , pl = "index_task__Y6X8h";
            var fl = function() {
                return (0,
                O.jsx)(O.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        O.jsx)("div", {
                            className: j()(ml),
                            children: (0,
                            O.jsx)(He, {
                                className: pl
                            })
                        }, t)
                    }
                    ))
                })
            };
            const xl = "index_taskItem__GMhr8"
              , hl = "index_title__Sfa26"
              , vl = "index_state__XRt4D"
              , gl = "index_itemLeft__XevRg"
              , kl = "index_itemRight__Xjk6R"
              , jl = "index_icon__ByKLw"
              , Cl = "index_done__m2rDm";
            var Nl = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context
                  , c = "";
                if (r) {
                    var o = (0,
                    N.uf)(r, {
                        signDisplay: !0
                    })
                      , l = s === st.finished ? "\u2705" : "\ud83c\udfc1";
                    c = "".concat(l, " ").concat(o, " pts")
                }
                return (0,
                O.jsxs)("div", {
                    className: xl,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    O.jsxs)("div", {
                        className: gl,
                        children: [(0,
                        O.jsx)("div", {
                            className: hl,
                            children: i.name
                        }), c && (0,
                        O.jsx)("div", {
                            className: vl,
                            children: c
                        })]
                    }), (0,
                    O.jsx)("div", {
                        className: kl,
                        children: s === st.finished ? (0,
                        O.jsx)("div", {
                            className: Cl,
                            children: (0,
                            C.O4)("ok_game_okxracer_done")
                        }) : (0,
                        O.jsx)(w.Z, {
                            className: j()("okx-growth-chevrons-right", jl)
                        })
                    })]
                }, a)
            };
            const bl = "index_container__ZnSx5";
            function wl(e) {
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
                        if (e.state === st.unfinished)
                            return !0;
                        var t = e.context.actionType;
                        return cl.includes(t)
                    }(e)) {
                        var t = e.context.actionType
                          , n = e.state;
                        d(e),
                        f(!0),
                        t === je.WalletConnect && (n === st.finished ? Xe.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : Xe.act({
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
                                    if (ll(t)) {
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
                                    t.state !== st.unfinished) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8,
                                    we(a);
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12,
                                    Ze(a);
                                case 12:
                                    return r && r(t),
                                    G(!0, (0,
                                    C.O4)("ok_game_okxracer_task_completion_msg")),
                                    x(),
                                    e.abrupt("return", !0);
                                case 18:
                                    return e.prev = 18,
                                    e.t0 = e.catch(4),
                                    W(e.t0),
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
                  , g = (0,
                a.useMemo)((function() {
                    return t.find((function(e) {
                        var t;
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === je.WalletConnect
                    }
                    ))
                }
                ), [t]);
                return (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsx)("div", {
                        className: j()(bl, n),
                        children: t.length > 0 ? t.map((function(e) {
                            return (0,
                            O.jsx)(Nl, {
                                task: e,
                                onClick: h
                            }, e.id)
                        }
                        )) : (0,
                        O.jsx)(fl, {})
                    }), c && (0,
                    O.jsx)(E, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: x,
                        children: (0,
                        O.jsx)(_l, {
                            doTask: v,
                            task: c,
                            walletConnectTask: g
                        })
                    })]
                })
            }
            var Zl = (0,
            a.createContext)({
                airdrops: [],
                selectedAirdrop: null,
                loading: !1,
                onSelectAirdrop: function() {}
            })
              , yl = function() {
                return (0,
                a.useContext)(Zl)
            }
              , Tl = function(e) {
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
                    Oe(!0).then((function(e) {
                        var t = e.data;
                        i(t || [])
                    }
                    )).catch((function(e) {
                        H.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.message), e)
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
                O.jsx)(Zl.Provider, {
                    value: h,
                    children: t
                })
            };
            const Pl = {
                container: "index_container__Y851r",
                header: "index_header__4gppM",
                title: "index_title__b+GpQ",
                desc: "index_desc__pU2jR",
                surpriseTitle: "index_surpriseTitle__Uqc-L",
                tasks: "index_tasks__k8-lb",
                taskListHeader: "index_taskListHeader__0FpaY"
            };
            var Ol = function() {
                var e = yl().selectedAirdrop
                  , t = (0,
                s.useHistory)().replace
                  , n = (0,
                s.useLocation)().hash;
                if (_n(),
                (0,
                a.useEffect)((function() {
                    e || t(Qe.tasks + n)
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
                O.jsxs)("div", {
                    className: Pl.container,
                    children: [(0,
                    O.jsxs)("div", {
                        className: Pl.header,
                        children: [(0,
                        O.jsx)(Z.Z, {
                            size: Vo.Z.sm,
                            className: Pl.logo,
                            src: "".concat(c.Z.cdnBaseUrl).concat(i)
                        }), (0,
                        O.jsx)("h1", {
                            className: Pl.title,
                            children: o
                        })]
                    }), (0,
                    O.jsx)("p", {
                        className: Pl.desc,
                        children: l
                    }), (0,
                    O.jsx)("div", {
                        className: Pl.surpriseTitle,
                        children: (0,
                        C.O4)("ok_game_okxracer_label_surprises_details")
                    }), (0,
                    O.jsx)("p", {
                        className: Pl.desc,
                        children: u
                    }), (0,
                    O.jsxs)("div", {
                        className: Pl.tasks,
                        children: [(0,
                        O.jsx)("div", {
                            className: Pl.taskListHeader,
                            children: (0,
                            C.O4)("ok_game_okxracer_text_phase3_tasks")
                        }), (0,
                        O.jsx)(wl, {
                            tasks: r
                        })]
                    })]
                })
            };
            const Sl = "index_airdropItem__pV1Az"
              , El = "index_content__ZtejP"
              , Il = "index_airdropIcon__lZwMy"
              , Bl = "index_airdropIconLoading__S1N9H"
              , Ll = "index_title__19JPa"
              , Rl = "index_desc__ekknt"
              , Al = "index_arrow__Y8OCn"
              , Dl = "index_airdropItemPlaceholder__bL5jl";
            var Fl = function(e) {
                var t = e.airdrop
                  , n = e.onClick
                  , a = t.logo
                  , r = t.groupSubTitle
                  , s = t.groupTitle;
                return (0,
                O.jsxs)("div", {
                    className: Sl,
                    onClick: function() {
                        n(t)
                    },
                    children: [(0,
                    O.jsxs)("div", {
                        className: El,
                        children: [(0,
                        O.jsx)(ht.Z, {
                            className: Il,
                            src: "".concat(c.Z.cdnBaseUrl).concat(a)
                        }), (0,
                        O.jsx)("div", {
                            className: Ll,
                            children: s
                        }), (0,
                        O.jsx)("div", {
                            className: Rl,
                            children: r
                        })]
                    }), (0,
                    O.jsx)(w.Z, {
                        className: j()("okds-arrow-chevron-right-centered-sm", Al)
                    })]
                })
            }
              , Ml = function() {
                return (0,
                O.jsxs)("div", {
                    className: j()(Sl, Dl),
                    children: [(0,
                    O.jsx)(He, {
                        className: Bl
                    }), (0,
                    O.jsx)(He, {
                        className: Ll
                    }), (0,
                    O.jsx)(He, {
                        className: Rl
                    })]
                })
            };
            const Ul = "index_offsetMarginContainer__2NtPr"
              , Gl = "index_title__+65IJ"
              , Wl = "index_count__F-PWh"
              , Vl = "index_airdropContainer__Gun3r"
              , Hl = "index_paddingPlaceholder__X2M3o";
            var Kl = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = yl()
                  , a = n.airdrops
                  , r = n.onSelectAirdrop
                  , i = n.loading
                  , c = Tn().isCertified
                  , o = (0,
                s.useHistory)()
                  , l = (0,
                s.useLocation)()
                  , u = function(e) {
                    c ? (r(e),
                    o.push({
                        pathname: Qe.airdrop,
                        hash: l.hash
                    })) : t()
                }
                  , d = a.length;
                return i || 0 !== d ? (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsxs)("p", {
                        className: Gl,
                        children: [(0,
                        C.O4)("ok_game_okxracer_label_airdrop_surprises"), "\xa0", (0,
                        O.jsxs)("span", {
                            className: Wl,
                            children: ["(", d, ")"]
                        })]
                    }), (0,
                    O.jsx)("div", {
                        className: j()((0,
                        v.Z)({}, Ul, d > 1)),
                        children: (0,
                        O.jsxs)("div", {
                            className: Vl,
                            children: [i ? (0,
                            O.jsxs)(O.Fragment, {
                                children: [(0,
                                O.jsx)(Ml, {}), (0,
                                O.jsx)(Ml, {}), (0,
                                O.jsx)(Ml, {})]
                            }) : (0,
                            O.jsx)(O.Fragment, {
                                children: a.map((function(e) {
                                    return (0,
                                    O.jsx)(Fl, {
                                        airdrop: e,
                                        onClick: u
                                    }, e.groupId)
                                }
                                ))
                            }), d > 1 ? (0,
                            O.jsx)("div", {
                                className: Hl
                            }) : null]
                        })
                    })]
                }) : null
            }
              , Yl = n(32267);
            n(82890);
            const zl = "Campaigns_title__a2IwB"
              , Xl = "Campaigns_count__LxNZj"
              , Jl = "Campaigns_loaderContainer__tSglx"
              , ql = "Campaigns_list__y6Ye0"
              , Ql = "Campaigns_noCampaigns__faP1c"
              , $l = "Campaigns_desc__q+hH9"
              , eu = "Campaigns_termsAndConditions__RfsOE";
            var tu = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = Tn().isCertified
                  , r = (0,
                a.useContext)(Nr)
                  , s = r.campaigns
                  , i = r.loading;
                var c = n ? (0,
                O.jsx)(Yl.Z.State, {
                    type: Yl.Z.State.TYPE.noRecord,
                    className: Ql,
                    title: (0,
                    C.O4)("ok_game_okxracer_title_phase421_no_campaigns"),
                    description: (0,
                    O.jsx)("p", {
                        className: $l,
                        children: (0,
                        C.O4)("ok_game_okxracer_text_phase421_stay_tuned")
                    })
                }) : (0,
                O.jsx)(wn, {
                    roundLogo: !1,
                    campaign: {
                        logo: "/cdn/assets/imgs/249/D290EBECC9921075.png",
                        title: (0,
                        C.O4)("ok_game_okxracer_title_phase421_exciting_camp"),
                        subTitle: (0,
                        C.O4)("ok_game_okxracer_text_phase421_verify_identity")
                    },
                    btnText: (0,
                    C.O4)("ok_game_okxracer_btn_phase421_verify"),
                    onClick: t
                })
                  , o = n || s.length > 0;
                return (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsxs)("p", {
                        className: zl,
                        children: [(0,
                        C.O4)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", o && (0,
                        O.jsxs)("span", {
                            className: Xl,
                            children: ["(", s.length, ")"]
                        })]
                    }), i && (0,
                    O.jsx)("div", {
                        className: Jl,
                        children: (0,
                        O.jsx)(vi.Z, {})
                    }), !i && 0 === s.length && c, (0,
                    O.jsx)("ul", {
                        className: ql,
                        children: s.map((function(e) {
                            return (0,
                            O.jsx)(wn, {
                                campaign: e,
                                btnText: (0,
                                C.O4)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    n ? function(e) {
                                        I({
                                            children: (0,
                                            O.jsx)(We, {
                                                campaign: e
                                            })
                                        })
                                    }(e) : t()
                                }
                            }, e.startDate)
                        }
                        ))
                    }), !n && (0,
                    O.jsx)(Ps, {
                        className: eu
                    })]
                })
            }
              , nu = function() {
                var e = Tn().accountBindingInfo || {}
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
            const au = {
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
            var ru = function() {
                var e = nu()
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
                _n(),
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
                  , b = (0,
                a.useCallback)((function() {
                    var e = d;
                    e !== (null === r || void 0 === r ? void 0 : r.length) - 1 && e++,
                    g(e)
                }
                ), [r, d])
                  , Z = t === r.length - 1;
                return (0,
                O.jsx)("div", {
                    className: au.container,
                    children: (0,
                    O.jsx)("div", {
                        className: au.cardBox,
                        children: (0,
                        O.jsxs)("div", {
                            className: j()(au.content, f ? au.fadeIn : au.fadeOut),
                            children: [(0,
                            O.jsx)("div", {
                                className: au.levelLogoBox,
                                children: (0,
                                O.jsx)("img", {
                                    src: null !== v && void 0 !== v && v.logo ? "".concat(c.Z.cdnBaseUrl).concat(null === v || void 0 === v ? void 0 : v.logo) : "".concat(c.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: j()(au.levelLogo, t >= d ? au.logoLight : au.logoGrade)
                                })
                            }), 0 !== d && (0,
                            O.jsx)(w.Z, {
                                className: j()("okds-arrow-chevron-left-centered-md", au.leftBtn, au.switchBtn),
                                onClick: k
                            }), d !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            O.jsx)(w.Z, {
                                className: j()("okds-arrow-chevron-right-centered-md", au.rightBtn, au.switchBtn),
                                onClick: b
                            }), (0,
                            O.jsx)("div", {
                                className: au.currentGrade,
                                children: h && (0,
                                C.O4)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            O.jsx)("div", {
                                className: au.gradeTitle,
                                children: null === v || void 0 === v ? void 0 : v.pointGradeName
                            }), (0,
                            O.jsx)("div", {
                                className: au.progressNum,
                                children: v ? h && Z ? (0,
                                O.jsxs)(O.Fragment, {
                                    children: [(0,
                                    O.jsx)("span", {
                                        children: (0,
                                        N.uf)(i)
                                    }), "\xa0", (0,
                                    C.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : h ? (0,
                                O.jsxs)(O.Fragment, {
                                    children: [(0,
                                    O.jsx)("span", {
                                        children: (0,
                                        N.uf)(i)
                                    }), " /", " ", (0,
                                    N.uf)(v.upperBound), "\xa0", (0,
                                    C.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                O.jsx)(O.Fragment, {
                                    children: v.upperBound ? (0,
                                    C.O4)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        N.uf)(v.lowerBound),
                                        top: (0,
                                        N.uf)(v.upperBound)
                                    }) : (0,
                                    C.O4)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        N.uf)(v.lowerBound)
                                    })
                                }) : ""
                            }), h && !Z && (0,
                            O.jsx)("div", {
                                className: au.progressSlide,
                                children: (0,
                                O.jsx)("div", {
                                    className: au.progress,
                                    style: {
                                        width: "".concat(i / (Number(null === v || void 0 === v ? void 0 : v.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const su = "License_loader__4L8AA"
              , iu = "License_container__MxoNJ"
              , cu = "License_pageTitle__h+Yja"
              , ou = "License_verifiedUsers__q-uxi"
              , lu = "License_avatars__3HegJ"
              , uu = "License_usersCount__fkW5h";
            var du = n(40544);
            n(25801);
            const _u = "NeonBox_container__0efrL"
              , mu = "NeonBox_certified__dDOGg"
              , pu = "NeonBox_backgroundWrapper__dblpl"
              , fu = "NeonBox_content__T1f+D"
              , xu = "NeonBox_header__jMjn9";
            var hu = function(e) {
                var t = e.children
                  , n = e.isCertified
                  , a = void 0 === n || n
                  , r = e.header;
                return (0,
                O.jsxs)("div", {
                    className: j()(_u, a && mu),
                    children: [r && (0,
                    O.jsx)("div", {
                        className: xu,
                        children: r
                    }), (0,
                    O.jsx)("div", {
                        className: j()(pu),
                        children: (0,
                        O.jsx)("div", {
                            className: fu,
                            children: t
                        })
                    })]
                })
            };
            const vu = "LicenseCard_licenseCard__+wyQA"
              , gu = "LicenseCard_header__LUvW7"
              , ku = "LicenseCard_title__rMFOB"
              , ju = "LicenseCard_content__i2ESe"
              , Cu = "LicenseCard_innerCard__n57Gb"
              , Nu = "LicenseCard_details__boiyi"
              , bu = "LicenseCard_label__JX11k"
              , wu = "LicenseCard_link__19+Q+"
              , Zu = "LicenseCard_linkIcon__oNENM"
              , yu = "LicenseCard_points__MkLL5"
              , Tu = "LicenseCard_icon__b6JLr"
              , Pu = "LicenseCard_certifyBtn__Z6vHo"
              , Ou = "LicenseCard_infoPopoverDesc__Km8Og"
              , Su = "LicenseCard_gradeImage__fd+PJ";
            var Eu = function() {
                return (0,
                O.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: (0,
                    O.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.97777 2.5H2.35555C2.15919 2.5 2 2.65919 2 2.85555V7.47777C2 7.67413 2.15919 7.83332 2.35555 7.83332H6.97777C7.17413 7.83332 7.33332 7.67413 7.33332 7.47777V2.85555C7.33332 2.65919 7.17413 2.5 6.97777 2.5ZM12.3134 7.83334H7.69118C7.49482 7.83334 7.33563 7.99253 7.33563 8.18889V12.8111C7.33563 13.0075 7.49482 13.1667 7.69118 13.1667H12.3134C12.5098 13.1667 12.6689 13.0075 12.6689 12.8111V8.18889C12.6689 7.99253 12.5098 7.83334 12.3134 7.83334ZM13.0222 2.5H17.6444C17.8408 2.5 18 2.65919 18 2.85555V7.47777C18 7.67413 17.8408 7.83332 17.6444 7.83332H13.0222C12.8259 7.83332 12.6667 7.67413 12.6667 7.47777V2.85555C12.6667 2.65919 12.8259 2.5 13.0222 2.5ZM6.97777 13.1667H2.35555C2.15919 13.1667 2 13.3259 2 13.5222V18.1444C2 18.3408 2.15919 18.5 2.35555 18.5H6.97777C7.17413 18.5 7.33332 18.3408 7.33332 18.1444V13.5222C7.33332 13.3259 7.17413 13.1667 6.97777 13.1667ZM13.0222 13.1667H17.6444C17.8408 13.1667 18 13.3259 18 13.5222V18.1444C18 18.3408 17.8408 18.5 17.6444 18.5H13.0222C12.8259 18.5 12.6667 18.3408 12.6667 18.1444V13.5222C12.6667 13.3259 12.8259 13.1667 13.0222 13.1667Z",
                        fill: "#121212"
                    })
                })
            }
              , Iu = function(e) {
                var t = e.showCertifyBottomSheet
                  , n = Zt().accumPoints
                  , a = Tn()
                  , r = a.accountBindingInfo
                  , s = a.isCertified
                  , i = nu().currentGrade;
                return (0,
                O.jsx)("section", {
                    className: vu,
                    children: (0,
                    O.jsx)(hu, {
                        isCertified: s,
                        header: (0,
                        O.jsxs)("div", {
                            className: gu,
                            children: [(0,
                            O.jsx)(Eu, {}), (0,
                            O.jsx)("span", {
                                className: ku,
                                children: s ? (0,
                                C.O4)("ok_game_okxracer_label_phase4_certified") : (0,
                                C.O4)("ok_game_okxracer_label_phase4_uncertified")
                            })]
                        }),
                        children: (0,
                        O.jsxs)("div", {
                            className: ju,
                            children: [(0,
                            O.jsxs)("div", {
                                className: Cu,
                                children: [(0,
                                O.jsxs)("div", {
                                    className: Nu,
                                    children: [(0,
                                    O.jsx)("p", {
                                        className: bu,
                                        children: (0,
                                        C.O4)("ok_game_okxracer_title_phase4_racer_grade")
                                    }), (0,
                                    O.jsxs)(sn, {
                                        to: Qe.licenseGrades,
                                        className: wu,
                                        children: [(0,
                                        b.T)(null === r || void 0 === r ? void 0 : r.pointGradeName), (0,
                                        O.jsx)(w.Z, {
                                            iconName: "okds-arrow-chevron-right-centered-md",
                                            className: Zu
                                        })]
                                    }), (0,
                                    O.jsxs)("div", {
                                        className: yu,
                                        children: [(0,
                                        O.jsx)("span", {
                                            className: bu,
                                            children: (0,
                                            C.O4)("ok_game_okxracer_text_phase3_total_pts_earned")
                                        }), "\xa0", (0,
                                        N.uf)(n), (0,
                                        O.jsx)(du.Z, {
                                            title: (0,
                                            C.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                            contentClassName: Ou,
                                            children: (0,
                                            O.jsx)(w.Z, {
                                                iconName: "okx-growth-information",
                                                className: Tu
                                            })
                                        })]
                                    })]
                                }), i && (0,
                                O.jsx)(ht.Z, {
                                    pictureClassName: Su,
                                    className: Su,
                                    src: "".concat(c.Z.cdnBaseUrl, "/").concat(i.logo)
                                })]
                            }), !s && (0,
                            O.jsx)(D, {
                                className: Pu,
                                size: y.default.SIZE.md,
                                text: (0,
                                C.O4)("ok_game_okxracer_btn_phase4_certify"),
                                onClick: t
                            })]
                        })
                    })
                })
            }
              , Bu = function() {
                var e, t = pt().uid, n = Tn(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, d = n.isLoading, _ = (0,
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
                                G(!1, (0,
                                C.O4)("ok_game_okxracer_error_high_traffic"));
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
                        Xe.act({
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
                    O.jsx)("div", {
                        className: su,
                        children: (0,
                        O.jsx)(vi.Z, {})
                    });
                var h = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0
                  , v = function() {
                    f(!0)
                };
                return (0,
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsxs)("div", {
                        className: iu,
                        children: [!s && (0,
                        O.jsxs)(O.Fragment, {
                            children: [(0,
                            O.jsx)(Fa, {
                                className: cu,
                                html: (0,
                                C.O4)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            O.jsxs)("div", {
                                className: ou,
                                children: [(0,
                                O.jsx)(ht.Z, {
                                    className: lu,
                                    src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                O.jsx)("span", {
                                    className: uu,
                                    children: h > 0 ? (0,
                                    N.uf)(h) : "--"
                                }), (0,
                                C.O4)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        O.jsx)(Iu, {
                            showCertifyBottomSheet: v
                        }), (0,
                        O.jsx)(Kl, {
                            showCertifyBottomSheet: v
                        }), (0,
                        O.jsx)(tu, {
                            showCertifyBottomSheet: v
                        })]
                    }), (0,
                    O.jsx)(Vn, {
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
              , Lu = function() {
                return (0,
                O.jsx)(Tl, {
                    children: (0,
                    O.jsxs)(Wo, {
                        animationPath: [Qe.licenseGrades],
                        children: [(0,
                        O.jsx)(s.Route, {
                            path: Qe.license,
                            component: Bu,
                            exact: !0
                        }), (0,
                        O.jsx)(s.Route, {
                            path: Qe.airdrop,
                            component: Ol,
                            exact: !0
                        }), (0,
                        O.jsx)(s.Route, {
                            path: Qe.licenseGrades,
                            component: Or(ru),
                            exact: !0
                        })]
                    })
                })
            };
            const Ru = "QrCode_container__r4Fu7"
              , Au = "QrCode_qrCode__16PWa"
              , Du = "QrCode_title__+cibb"
              , Fu = "QrCode_message__eaOzW";
            var Mu = function() {
                return (0,
                O.jsxs)("div", {
                    className: Ru,
                    children: [(0,
                    O.jsx)(ht.Z, {
                        className: Au,
                        src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    O.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            Aa.dU)((0,
                            C.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: Du
                    }), (0,
                    O.jsx)("p", {
                        className: Fu,
                        children: (0,
                        C.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            };
            const Uu = "PullupList_loading__+51Dh"
              , Gu = "PullupList_listLoadItem__XcvkH"
              , Wu = "PullupList_listLeft__4eGh6"
              , Vu = "PullupList_listRight__w7Ely"
              , Hu = "PullupList_listLoading__whJeg";
            var Ku = function() {
                return (0,
                O.jsxs)("div", {
                    className: j()(Gu),
                    children: [(0,
                    O.jsx)(He, {
                        className: Wu
                    }), (0,
                    O.jsx)(He, {
                        className: Vu
                    })]
                })
            }
              , Yu = function() {
                return (0,
                O.jsx)("div", {
                    className: Hu,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        O.jsx)(Ku, {}, t)
                    }
                    ))
                })
            }
              , zu = function(e) {
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
                  , v = (0,
                u.Z)(h, 2)
                  , k = v[0]
                  , j = v[1]
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
                                        g.Z)(e), (0,
                                        g.Z)(n.rows))
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
                Mc.Z)(C, {
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
                O.jsxs)(O.Fragment, {
                    children: [i.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    O.jsx)("div", {
                        className: Uu,
                        ref: x,
                        children: m && (0,
                        O.jsx)(Yu, {})
                    })]
                })
            };
            const Xu = "InviteList_listItem__q4jhG"
              , Ju = "InviteList_name__LLQgt"
              , qu = "InviteList_point__kXtCn"
              , Qu = "InviteList_earnedPrice__4vAfw"
              , $u = "InviteList_pointNumber__v4P1H";
            var ed = function() {
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
                                    ve(s, a);
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
                O.jsxs)(O.Fragment, {
                    children: [(0,
                    O.jsx)("div", {
                        className: Qu,
                        children: (0,
                        C.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            O.jsx)("span", {
                                className: $u,
                                children: (0,
                                C.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    N.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    O.jsx)(zu, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            O.jsxs)("div", {
                                className: Xu,
                                children: [(0,
                                O.jsx)("div", {
                                    className: Ju,
                                    children: e.extInviteeName
                                }), (0,
                                O.jsx)("div", {
                                    className: qu,
                                    children: (0,
                                    C.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        N.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const td = "ReferralsPage_container__V48m1"
              , nd = "ReferralsPage_inviteDetail__L1MhM"
              , ad = "ReferralsPage_detailItem__ujOp+"
              , rd = "ReferralsPage_dot__zKW7L"
              , sd = "ReferralsPage_detailTitle__OE657"
              , id = "ReferralsPage_detailInfo__YC+Y9"
              , cd = "ReferralsPage_inviteList__Jksx8";
            var od = function() {
                var e = pt().uid;
                return _n(),
                (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        Xe.act({
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
                O.jsxs)("div", {
                    className: td,
                    children: [(0,
                    O.jsx)(Fa, {
                        html: "".concat((0,
                        C.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        C.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    O.jsx)("div", {
                        className: nd,
                        children: (0,
                        O.jsxs)("div", {
                            className: ad,
                            children: [(0,
                            O.jsx)("div", {
                                className: rd
                            }), (0,
                            O.jsx)("div", {
                                className: sd,
                                children: (0,
                                C.O4)("ok_game_okxracer_refer_your_friends")
                            }), (0,
                            O.jsx)("div", {
                                className: id,
                                children: (0,
                                C.O4)("ok_game_okxracer_refer_rewards")
                            })]
                        })
                    }), (0,
                    O.jsx)("div", {
                        className: cd,
                        children: (0,
                        O.jsx)(ed, {})
                    }), (0,
                    O.jsx)(ho, {})]
                })
            }
              , ld = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , ud = (0,
            a.createContext)({
                boosts: [],
                tasks: ld,
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
              , dd = function() {
                return (0,
                a.useContext)(ud)
            }
              , _d = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(ld)
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
                  , v = Zt().updateGameInfoFromServer
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
                                Promise.allSettled([Ce(!0), be(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && m(null !== (n = a[1].value.data) && void 0 !== n ? n : ld);
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
                                    Ne({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Ce(), v()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    W(e.t0);
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
                                Promise.allSettled([be(), v()]);
                            case 2:
                                t = e.sent,
                                n = (0,
                                u.Z)(t, 1),
                                a = n[0],
                                "fulfilled" === a.status && (i = null !== (r = null === (s = a.value) || void 0 === s ? void 0 : s.data) && void 0 !== r ? r : ld,
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
                O.jsx)(ud.Provider, {
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
            const md = {
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
            var pd = function() {
                var e = dd()
                  , t = e.partner
                  , n = e.executeTaskSuccessCallback
                  , r = (0,
                s.useHistory)().replace
                  , i = (0,
                s.useLocation)().hash;
                if (_n(),
                (0,
                a.useEffect)((function() {
                    t || r(Qe.tasks + i)
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
                O.jsxs)("div", {
                    className: md.container,
                    children: [(0,
                    O.jsxs)("div", {
                        className: md.header,
                        children: [(0,
                        O.jsx)(Z.Z, {
                            size: Vo.Z.sm,
                            className: md.logo,
                            src: "".concat(c.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        O.jsx)("h1", {
                            className: md.title,
                            children: _
                        })]
                    }), (0,
                    O.jsx)("p", {
                        className: md.desc,
                        children: m
                    }), (0,
                    O.jsxs)("div", {
                        className: md.status,
                        children: [(0,
                        O.jsxs)("div", {
                            className: md.statusItem,
                            children: [(0,
                            O.jsx)("div", {
                                className: md.statusTitle,
                                children: (0,
                                C.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            O.jsx)("div", {
                                className: md.statusValue,
                                children: (0,
                                C.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    N.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        O.jsxs)("div", {
                            className: md.statusItem,
                            children: [(0,
                            O.jsx)("div", {
                                className: md.statusTitle,
                                children: (0,
                                C.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            O.jsxs)("div", {
                                className: md.statusValue,
                                children: [(0,
                                O.jsx)(w.Z, {
                                    className: j()("okx-growth-friends", md.participantsIcon)
                                }), N.ag.shortNumber(f, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    O.jsxs)("div", {
                        className: md.tasks,
                        children: [(0,
                        O.jsxs)("div", {
                            className: md.taskListHeader,
                            children: [(0,
                            O.jsx)("span", {
                                children: (0,
                                C.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            O.jsx)("span", {
                                className: md.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    C.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(o, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        O.jsx)(wl, {
                            tasks: u,
                            executeTaskCallback: n
                        })]
                    })]
                })
            };
            const fd = "index_partnerItem__S1dkf"
              , xd = "index_title__bRRMU"
              , hd = "index_points__WQSip"
              , vd = "index_state__gi-nK"
              , gd = "index_logo__y4rK-"
              , kd = "index_item-left__ej9+1"
              , jd = "index_item-right__3KRWi"
              , Cd = "index_dot__4bynu"
              , Nd = "index_participantsIcon__-tYh0"
              , bd = "index_icon__gS69A";
            var wd = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                O.jsxs)("div", {
                    className: fd,
                    children: [(0,
                    O.jsx)(Z.Z, {
                        size: Vo.Z.sm,
                        className: gd,
                        src: "".concat(c.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    O.jsxs)("div", {
                        className: kd,
                        children: [(0,
                        O.jsx)("div", {
                            className: xd,
                            children: t
                        }), (0,
                        O.jsx)("div", {
                            className: hd,
                            children: (0,
                            C.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                N.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        O.jsxs)("div", {
                            className: vd,
                            children: [(0,
                            O.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Aa.dU)((0,
                                    C.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            O.jsx)("span", {
                                className: Cd
                            }), (0,
                            O.jsx)(w.Z, {
                                className: j()("okx-growth-friends", Nd)
                            }), (0,
                            O.jsx)("em", {
                                children: N.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    O.jsx)("div", {
                        className: jd,
                        children: (0,
                        O.jsx)(w.Z, {
                            className: j()("okx-growth-chevrons-right", bd)
                        })
                    })]
                })
            };
            const Zd = "index_container__wKNP9";
            function yd(e) {
                var t = e.tasks
                  , n = e.className
                  , a = dd().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                O.jsx)("div", {
                    className: j()(Zd, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , c = e.logo;
                        return (0,
                        O.jsx)(sn, {
                            to: Qe.partner,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            O.jsx)(wd, {
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
                    O.jsx)(fl, {})
                })
            }
            const Td = "TaskArea_tabPane__irXs6"
              , Pd = "TaskArea_tabName__-BL2R"
              , Od = "TaskArea_list__cqK4t";
            var Sd = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                C.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                C.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                O.jsxs)("div", {
                    className: Pd,
                    children: [r, " ", (0,
                    O.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , Ed = function() {
                var e = dd()
                  , t = e.tasks
                  , n = e.executeTaskSuccessCallback
                  , a = t.taskGroups
                  , r = t.ungroupedTasks;
                return (0,
                O.jsx)(O.Fragment, {
                    children: (0,
                    O.jsxs)(Qc.Z.Underline, {
                        size: Qc.Z.SIZE.xl,
                        children: [(0,
                        O.jsx)(Qc.Z.TabPane, {
                            className: Td,
                            tab: (0,
                            O.jsx)(Sd, {
                                isPartner: !0,
                                count: a.length
                            }),
                            id: "partner",
                            children: (0,
                            O.jsx)(yd, {
                                tasks: a,
                                className: Od
                            })
                        }), (0,
                        O.jsx)(Qc.Z.TabPane, {
                            className: Td,
                            tab: (0,
                            O.jsx)(Sd, {
                                count: r.length
                            }),
                            id: "own",
                            children: (0,
                            O.jsx)(wl, {
                                tasks: r,
                                className: Od,
                                executeTaskCallback: n
                            })
                        })]
                    })
                })
            };
            const Id = "TaskPage_container__5KfIM"
              , Bd = "TaskPage_block__kt8oo"
              , Ld = "TaskPage_pointsContainer__+vQ2y"
              , Rd = "TaskPage_points__+UHeE"
              , Ad = "TaskPage_label__-ivvS";
            var Dd = function() {
                var e = Zt().accumPoints;
                return (0,
                O.jsxs)("div", {
                    className: Id,
                    children: [(0,
                    O.jsxs)("div", {
                        className: j()(Bd, Ld),
                        children: [(0,
                        O.jsx)("p", {
                            className: Rd,
                            children: (0,
                            N.uf)(e)
                        }), (0,
                        O.jsxs)("div", {
                            className: Ad,
                            children: [(0,
                            C.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                            O.jsx)(du.Z, {
                                title: (0,
                                C.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                children: (0,
                                O.jsx)(w.Z, {
                                    iconName: "okds-information-circle"
                                })
                            })]
                        })]
                    }), (0,
                    O.jsx)("div", {
                        className: Bd,
                        children: (0,
                        O.jsx)(Ed, {})
                    })]
                })
            }
              , Fd = function() {
                return (0,
                O.jsx)(_d, {
                    children: (0,
                    O.jsxs)(s.Switch, {
                        children: [(0,
                        O.jsx)(s.Route, {
                            path: Qe.tasks,
                            component: Dd,
                            exact: !0
                        }), (0,
                        O.jsx)(s.Route, {
                            path: Qe.partner,
                            component: pd,
                            exact: !0
                        })]
                    })
                })
            }
              , Md = (0,
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
                activeTabId: ct.RACER
            })
              , Ud = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , c = (0,
                a.useState)(ct.RACER)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = Zt().updateGameInfoFromServer
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
                                Ce(!0);
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
                                    Ne({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Ce(), p()]);
                                case 5:
                                    return n = e.sent,
                                    a = (0,
                                    u.Z)(n, 1),
                                    "fulfilled" === (r = a[0]).status && i(r.value.data || []),
                                    e.abrupt("return", !0);
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    W(e.t0);
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
                O.jsx)(Md.Provider, {
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
              , Gd = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === it.DailyBoost
            }
              , Wd = function(e) {
                return "actionType"in e && e.actionType === je.UnLock
            }
              , Vd = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !Gd(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                C.O4)("ok_game_okxracer_free") : "".concat((0,
                N.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const Hd = "index_mainContainer__G1QC-"
              , Kd = "index_sheetIcon__cdTfT"
              , Yd = "index_sheetTitle__BnrED"
              , zd = "index_sheetDesc__DtfoF"
              , Xd = "index_maxLevelText__esnYu"
              , Jd = "index_levelArrowRight__MPbSr"
              , qd = "index_sheetLowerContentContainer__doUtU"
              , Qd = "index_pointCostText__GT5Jc"
              , $d = "index_sheetLvlTextContainer__UWjtN"
              , e_ = "index_btmBtn__6S1L3"
              , t_ = "index_boostDataSplitPoint__IpW+U";
            var n_ = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.context
                  , r = t.curStage
                  , s = t.totalStage
                  , i = t.isLocked
                  , o = a.logo
                  , l = a.name
                  , u = Wd(a)
                  , d = Gd(t)
                  , _ = r === s
                  , m = function(e) {
                    var t = e.context
                      , n = Wd(t)
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
                O.jsxs)("div", {
                    className: Hd,
                    children: [(0,
                    O.jsx)(ht.Z, {
                        className: Kd,
                        src: "".concat(c.Z.cdnBaseUrl).concat(o)
                    }), (0,
                    O.jsx)("div", {
                        className: Yd,
                        children: l
                    }), (0,
                    O.jsx)("div", {
                        className: zd,
                        children: p
                    }), h && (0,
                    O.jsx)("div", {
                        className: Xd,
                        children: (0,
                        C.O4)("ok_game_okxracer_bttmsheet_title_out_of_upgrades")
                    }), !u && (0,
                    O.jsxs)("div", {
                        className: qd,
                        children: [(0,
                        O.jsx)("span", {
                            className: Qd,
                            children: Vd(t)
                        }), (d || r < s) && (0,
                        O.jsx)("span", {
                            className: t_
                        }), (0,
                        O.jsx)("span", {
                            className: $d,
                            children: d ? "".concat(s - r, "/").concat(s) : (0,
                            O.jsxs)(O.Fragment, {
                                children: [(0,
                                O.jsx)("span", {
                                    children: (0,
                                    C.O4)("ok_game_okxracer_lvl_num", {
                                        num: (0,
                                        N.uf)(r)
                                    })
                                }), !_ && (0,
                                O.jsxs)(O.Fragment, {
                                    children: [(0,
                                    O.jsx)(w.Z, {
                                        iconName: "okds-arrow-pointer-right-xs",
                                        className: Jd
                                    }), (0,
                                    O.jsx)("span", {
                                        children: r + 1
                                    })]
                                })]
                            })
                        })]
                    }), u && i ? (0,
                    O.jsx)(sn, {
                        to: Qe.license,
                        className: e_,
                        children: (0,
                        O.jsx)(D, {
                            text: f
                        })
                    }) : (0,
                    O.jsx)(D, {
                        className: e_,
                        onClick: function() {
                            n(t)
                        },
                        text: f,
                        disabled: x
                    })]
                })
            };
            const a_ = {
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
            var r_ = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context
                  , i = n === a;
                if (Wd(s)) {
                    if (r)
                        return (0,
                        O.jsx)("div", {
                            className: a_.boostData,
                            children: (0,
                            C.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (i)
                        return (0,
                        O.jsx)("div", {
                            className: a_.boostData,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                O.jsxs)("div", {
                    className: a_.boostData,
                    children: [(0,
                    O.jsx)("span", {
                        className: a_.pointCost,
                        children: Vd(t)
                    }), (Gd(t) || n < a) && (0,
                    O.jsx)("span", {
                        className: a_.boostDataSplitPoint
                    }), (0,
                    O.jsx)("span", {
                        className: a_.boostDataStage,
                        children: Gd(t) ? "".concat(a - n, "/").concat(a) : (0,
                        C.O4)("ok_game_okxracer_lvl_num", {
                            num: n
                        })
                    })]
                })
            }
              , s_ = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , o = r.logo;
                return (0,
                O.jsxs)("div", {
                    className: a_.item,
                    onClick: function() {
                        n(a)
                    },
                    children: [s && (0,
                    O.jsxs)("div", {
                        className: a_.locked,
                        children: [(0,
                        O.jsx)("div", {
                            className: a_.filterLayer
                        }), (0,
                        O.jsx)(w.Z, {
                            className: j()("okx-growth-lock", a_.unlockIcon)
                        }), (0,
                        O.jsx)(ht.Z, {
                            className: j()(a_.boostIcon, a_.lockedImg),
                            src: "".concat(c.Z.cdnBaseUrl).concat(o)
                        })]
                    }), !s && (0,
                    O.jsx)(ht.Z, {
                        className: a_.boostIcon,
                        src: "".concat(c.Z.cdnBaseUrl).concat(o)
                    }), (0,
                    O.jsxs)("div", {
                        className: a_.content,
                        children: [(0,
                        O.jsx)("div", {
                            className: a_.boostTitle,
                            children: i
                        }), (0,
                        O.jsx)(r_, {
                            boost: t
                        })]
                    })]
                }, a)
            };
            const i_ = "index_taskItemPlaceholder__oZw1l"
              , c_ = "index_task__FcEoo";
            var o_ = function() {
                return (0,
                O.jsx)(O.Fragment, {
                    children: Array.from({
                        length: 4
                    }).map((function(e, t) {
                        return (0,
                        O.jsx)("div", {
                            className: i_,
                            children: (0,
                            O.jsx)(He, {
                                className: c_
                            })
                        }, t)
                    }
                    ))
                })
            };
            const l_ = "index_listContainer__tebx+";
            var u_ = function(e) {
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
                O.jsx)("div", {
                    className: l_,
                    children: t.length > 0 ? (0,
                    O.jsx)(O.Fragment, {
                        children: t.map((function(e) {
                            return (0,
                            O.jsx)(s_, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    O.jsx)(o_, {})
                })
            };
            const d_ = "index_boostArea__EDFLN"
              , __ = "index_container__4iPvb";
            var m_ = function(e) {
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
                  , f = Zt().points
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
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(f - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    G(!1, (0,
                                    C.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && G(!0);
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
                O.jsx)(O.Fragment, {
                    children: (0,
                    O.jsx)("div", {
                        className: d_,
                        children: (0,
                        O.jsxs)("div", {
                            className: __,
                            children: [(0,
                            O.jsx)(u_, {
                                boosts: t,
                                onClick: h
                            }), (0,
                            O.jsx)(E, {
                                noContentPadding: !0,
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                O.jsx)(n_, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })
                })
            };
            const p_ = "PointsCard_pointsContainer__n4L96"
              , f_ = "PointsCard_pointsNameBigger__1Jh4o"
              , x_ = "PointsCard_pointsNameSmaller__9mb7i"
              , h_ = "PointsCard_pointsValue__qFFcW"
              , v_ = "PointsCard_availablePointsValue__jngSf"
              , g_ = "PointsCard_pointsDetails__qk6eJ"
              , k_ = "PointsCard_infoIcon__9W3Z-";
            var j_ = function() {
                var e = Zt()
                  , t = e.points
                  , n = e.autopilotPointsPerHour
                  , a = e.basePoint;
                return (0,
                O.jsxs)(hu, {
                    children: [(0,
                    O.jsxs)("div", {
                        className: p_,
                        children: [(0,
                        O.jsx)("div", {
                            className: f_,
                            children: (0,
                            C.O4)("ok_game_okxracer_available_pts")
                        }), (0,
                        O.jsx)("div", {
                            className: v_,
                            children: ls.yx.thousandFormat(t || 0)
                        })]
                    }), (0,
                    O.jsxs)("div", {
                        className: g_,
                        children: [(0,
                        O.jsxs)("div", {
                            children: [(0,
                            O.jsxs)("div", {
                                className: x_,
                                children: [(0,
                                C.O4)("ok_game_okxracer_tag_autodriving_points"), (0,
                                O.jsx)(du.Z, {
                                    title: (0,
                                    C.O4)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                    type: du.Z.TYPES.neutral,
                                    children: (0,
                                    O.jsx)(w.Z, {
                                        iconName: "okx-growth-information",
                                        className: k_
                                    })
                                })]
                            }), (0,
                            O.jsxs)("div", {
                                className: h_,
                                children: [_s, "\xa0", "".concat(ls.yx.thousandFormat(n || 0), "/hr")]
                            })]
                        }), (0,
                        O.jsxs)("div", {
                            children: [(0,
                            O.jsx)("div", {
                                className: x_,
                                children: (0,
                                C.O4)("ok_game_okxracer_tag_base_points")
                            }), (0,
                            O.jsxs)("div", {
                                className: h_,
                                children: [_s, "\xa0", ls.yx.thousandFormat(a || 0)]
                            })]
                        }), false]
                    })]
                })
            };
            const C_ = "UpgradesPage_container__H43Ax"
              , N_ = "UpgradesPage_cardContainer__AsZoD"
              , b_ = "UpgradesPage_block__QlGao";
            var w_ = function() {
                var e = (0,
                a.useContext)(Md)
                  , t = e.boosts
                  , n = e.upgradeBoost;
                e.onChangeTab,
                e.activeTabId;
                _n();
                (0,
                C.O4)("ok_game_okxracer_racer_upgrades"),
                ct.RACER,
                (0,
                C.O4)("ok_game_okxracer_race_car_upgrades"),
                ct.CAR,
                (0,
                C.O4)("ok_game_okxracer_team_ops_upgrades"),
                ct.TEAM;
                return (0,
                O.jsxs)("div", {
                    className: C_,
                    children: [(0,
                    O.jsx)("div", {
                        className: N_,
                        children: (0,
                        O.jsx)(j_, {})
                    }), (0,
                    O.jsxs)("div", {
                        className: b_,
                        children: [false, (0,
                        O.jsx)(m_, {
                            boosts: t,
                            upgradeBoost: n
                        })]
                    })]
                })
            }
              , Z_ = function() {
                return (0,
                O.jsx)(Ud, {
                    children: (0,
                    O.jsx)(w_, {})
                })
            }
              , y_ = function() {
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
                    var e = pt().uid;
                    return (0,
                    a.useEffect)((function() {
                        var e, t, n, a, r, s, i, c, o, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (a = window.Telegram.WebApp).ready) || void 0 === n || n.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (c = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(c, "#0D0D0D"),
                        null === (o = (l = window.Telegram.WebApp).expand) || void 0 === o || o.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d),
                        H.k.info("TG MINI APP OKX Racer version: ".concat(window.Telegram.WebApp.version, " "), {
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
                O.jsx)("main", {
                    className: wr,
                    children: (0,
                    O.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: h ? (0,
                        O.jsx)(O.Fragment, {
                            children: (0,
                            O.jsx)(Yn, {
                                children: (0,
                                O.jsx)(Pn, {
                                    children: (0,
                                    O.jsx)(Rr, {
                                        children: (0,
                                        O.jsx)(yt, {
                                            children: (0,
                                            O.jsx)(Fr, {
                                                children: (0,
                                                O.jsx)(d.OKXTonConnectUIProvider, {
                                                    uiPreferences: {
                                                        theme: d.THEME.DARK
                                                    },
                                                    dappMetaData: {
                                                        name: "OKX Racer",
                                                        icon: lt()
                                                    },
                                                    restoreConnection: !0,
                                                    language: f,
                                                    actionsConfiguration: {
                                                        returnStrategy: "tg://resolve"
                                                    },
                                                    children: (0,
                                                    O.jsxs)(s.Switch, {
                                                        children: [(0,
                                                        O.jsx)(s.Route, {
                                                            path: Qe.teamDetail,
                                                            component: Or(ka, Tr)
                                                        }), (0,
                                                        O.jsx)(s.Route, {
                                                            path: Qe.teamList,
                                                            exact: !0,
                                                            component: Or(Ra, Tr)
                                                        }), (0,
                                                        O.jsx)(s.Route, {
                                                            path: Qe.referrals,
                                                            component: Or(od),
                                                            exact: !0
                                                        }), (0,
                                                        O.jsx)(s.Route, {
                                                            path: Qe.upgrades,
                                                            component: Or(Z_)
                                                        }), (0,
                                                        O.jsxs)(s.Route, {
                                                            path: Qe.home,
                                                            children: [(0,
                                                            O.jsx)("article", {
                                                                className: yr,
                                                                children: (0,
                                                                O.jsxs)(s.Switch, {
                                                                    children: [(0,
                                                                    O.jsx)(s.Route, {
                                                                        path: Qe.home,
                                                                        component: qc,
                                                                        exact: !0
                                                                    }), (0,
                                                                    O.jsx)(s.Route, {
                                                                        path: Qe.leaderboard,
                                                                        component: Or(Mo),
                                                                        exact: !0
                                                                    }), (0,
                                                                    O.jsx)(s.Route, {
                                                                        path: Qe.tasks,
                                                                        component: Fd
                                                                    }), (0,
                                                                    O.jsx)(s.Route, {
                                                                        path: Qe.license,
                                                                        children: (0,
                                                                        O.jsx)(br, {
                                                                            children: (0,
                                                                            O.jsx)(Lu, {})
                                                                        })
                                                                    }), (0,
                                                                    O.jsx)(s.Route, {
                                                                        path: Qe.teamRace,
                                                                        component: Or(Cr)
                                                                    })]
                                                                })
                                                            }), (0,
                                                            O.jsx)("footer", {
                                                                className: Zr,
                                                                children: (0,
                                                                O.jsx)(ln, {})
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
                        O.jsx)(Mu, {})
                    })
                })
            }
              , T_ = document.getElementById("root");
            if (T_) {
                var P_ = (0,
                O.jsx)(s.BrowserRouter, {
                    basename: c.Z.langPath,
                    children: (0,
                    O.jsx)(ft, {
                        children: (0,
                        O.jsx)(y_, {})
                    })
                });
                (0,
                i.createRoot)(T_).render(P_)
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
    var a = n.O(void 0, [4013, 4347, 8536, 5145, 1765, 9334, 8145, 2418, 8283, 2582, 6570, 5861, 7216, 1328, 6358], (()=>n(84467)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.eae6885c.js.map
