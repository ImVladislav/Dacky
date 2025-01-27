"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [928],
  {
    578: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var t = i(5893),
        a = i(5675),
        o = i.n(a),
        l = i(7294),
        g = i(1474);
      function c(n) {
        var e;
        let {
            useSkeleton: i = !1,
            src: a,
            width: c,
            height: d,
            alt: r,
            className: p,
            imgClassName: s,
            blurClassName: _,
            ...m
          } = n,
          [u, f] = l.useState(i ? "loading" : "complete"),
          E =
            null !== (e = null == p ? void 0 : p.includes("w-")) &&
            void 0 !== e &&
            e;
        return (0, t.jsx)("figure", {
          style: E ? void 0 : { width: "".concat(c, "px") },
          className: p,
          children: (0, t.jsx)(o(), {
            className: (0, g.Z)(
              s,
              "loading" === u && (0, g.Z)("animate-pulse", _)
            ),
            src: a,
            width: c,
            height: d,
            alt: r,
            onLoadingComplete: () => f("complete"),
            ...m,
          }),
        });
      }
    },
    2553: function (n, e, i) {
      i.d(e, {
        Ey: function () {
          return _;
        },
        TK: function () {
          return f;
        },
        Ul: function () {
          return s;
        },
        XA: function () {
          return m;
        },
      });
      var t = i(2729),
        a = i(5893),
        o = i(7294),
        l = i(9521),
        g = i(578),
        c = i(6721);
      function d() {
        let n = (0, t._)([
          "\n  display: flex;\n  gap: 20px;\n  list-style: none;\n  padding-left: 0;\n  a {\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    /* opacity: 0.7; */\n    &:hover {\n      transform: translateY(-3px);\n      opacity: 1;\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function r() {
        let n = (0, t._)([
          "\n  background: radial-gradient(\n    50% 50% at 50% 50%,\n    #ffe600 0%,\n    rgba(19, 14, 2, 0) 100%\n  );\n  opacity: 0.4;\n  position: absolute;\n  width: 800px;\n  height: 800px;\n  filter: blur(100px);\n",
        ]);
        return (
          (r = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        let n = (0, t._)([
          '\n  position: absolute;\n  top: 20%;\n  left: 0;\n  .main {\n    position: relative;\n    z-index: 2;\n    &::after {\n      content: "";\n      background-color: ',
          ";\n      position: absolute;\n      width: 300px;\n      height: 300px;\n      inset: 0;\n      margin: auto;\n      z-index: -1;\n      filter: blur(100px);\n      opacity: 0.5;\n    }\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      let s = (n) => {
          let { src: e, style: i, className: t, name: l = "mock_icon" } = n,
            [g, d] = (0, o.useState)(c.BM[l]);
          return (
            (0, o.useEffect)(() => {
              e && d(e);
            }, [e]),
            (0, a.jsx)("img", {
              className: t,
              placeholder: "dackie",
              src: g,
              alt: "ico",
              loading: "lazy",
              width: "100%",
              height: "100%",
              style: { ...i },
            })
          );
        },
        _ = (n) => {
          let { idx: e = 1, style: i } = n;
          return (0, a.jsx)(g.Z, {
            src: "/img/landingpage/collections/".concat(e, ".webp"),
            alt: "collection_".concat(e),
            width: 200,
            height: 200,
            quality: 20,
            priority: !0,
            style: { borderRadius: 10, maxWidth: "max-content" },
          });
        },
        m = (n) => {
          let { width: e = 25, height: i = 25, style: t } = n;
          return (0, a.jsx)(u, {
            style: { ...t },
            children: c.Zd.map((n, t) =>
              (0, a.jsx)(
                "a",
                {
                  target: "_blank",
                  href: null == n ? void 0 : n.to,
                  rel: "noreferrer",
                  children: (0, a.jsx)(s, {
                    name: n.src,
                    style: { width: e, height: i },
                  }),
                },
                t
              )
            ),
          });
        },
        u = l.ZP.ul.withConfig({ componentId: "sc-370cf14d-0" })(d());
      l.ZP.div.withConfig({ componentId: "sc-370cf14d-1" })(r());
      let f = l.ZP.div.withConfig({ componentId: "sc-370cf14d-2" })(
        p(),
        c.k9.YELLOW
      );
    },
    8928: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return x;
        },
      });
      var t = i(2729),
        a = i(5893),
        o = i(7294),
        l = i(2828),
        g = i(6721),
        c = i(9521),
        d = i(2553),
        r = i(1664),
        p = i.n(r);
      function s() {
        let n = (0, t._)([
          "\n  display: flex;\n  justify-content: space-between;\n  padding: 50px 15px;\n  border-top: 2px solid ",
          ";\n  margin-top: 50px;\n  position: relative;\n  .flex-block {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 30px;\n    .block {\n      flex: 1;\n      .ant-image {\n        width: auto !important;\n      }\n      .dackie {\n        font-size: 52px;\n      }\n      &:last-child {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .email-wrapper {\n        padding-right: 30px;\n        position: relative;\n        cursor: pointer;\n        .input-overlay {\n          position: absolute;\n          bottom: 0;\n          input {\n            background-color: transparent;\n            border: none;\n            outline: none;\n            box-shadow: none;\n            color: white;\n            font-weight: 600;\n            font-size: 20px;\n          }\n        }\n      }\n      .copy-right {\n        font-size: 12px;\n      }\n      .text-link {\n        font-size: 2.2rem;\n        color: ",
          ";\n      }\n      .footer-text {\n        &:not(:last-child) {\n          margin-bottom: 5px;\n        }\n      }\n    }\n  }\n\n  .text-yellow {\n    color: ",
          ";\n  }\n  .mobile-flex {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 12px;\n  }\n  .text-logo {\n    font-size: 7rem;\n    text-transform: capitalize;\n    line-height: 0;\n    position: relative;\n    top: 16px;\n  }\n  .block-text-logo {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n  }\n\n  @media screen and (max-width: 1024px) {\n    padding: 15px;\n    .logo-order {\n      order: -1;\n    }\n    .flex-block {\n      flex-direction: column;\n      gap: 75px;\n    }\n    .block {\n      &:last-child {\n        order: 3;\n      }\n    }\n    .email-wrapper {\n      padding-right: unset !important;\n    }\n    .block-text-logo {\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 45px;\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      let _ = () => {
          let n = (0, l.J)(768),
            e = n ? 50 : 40;
          return (0, a.jsx)(m, {
            id: "footer",
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "flex-block",
                children: [
                  (0, a.jsx)("div", { className: "block" }),
                  (0, a.jsx)("div", {
                    className: "block logo-order",
                    children: (0, a.jsx)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 25,
                        cursor: "pointer",
                      },
                      children: (0, a.jsxs)(p(), {
                        className: "block-text-logo",
                        href: "/",
                        children: [
                          (0, a.jsx)(d.Ul, {
                            style: { maxWidth: n ? 100 : 255 },
                          }),
                          (0, a.jsx)("span", {
                            className: "duck-class text-logo",
                            children: "dackie",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "block",
                    children: (0, a.jsxs)("div", {
                      style: { textAlign: "right" },
                      children: [
                        (0, a.jsx)(d.XA, {
                          width: e,
                          height: e,
                          style: {
                            justifyContent: n ? "space-evenly" : "flex-end",
                            marginBottom: 10,
                          },
                        }),
                        (0, a.jsx)("div", {
                          className: n ? "mobile-flex" : "",
                          children: (0, a.jsx)("div", {
                            className: "footer-text copy-right",
                            children: "\xa9 2023 Dackie Labs LLC",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        m = c.ZP.div.withConfig({ componentId: "sc-38e00d0c-0" })(
          s(),
          g.k9.LAND,
          g.k9.YELLOW,
          g.k9.YELLOW
        );
      var u = function () {
        let [n, e] = (0, o.useState)(!1);
        function i() {
          window.pageYOffset > 300 ? e(!0) : e(!1);
        }
        return (
          (0, o.useEffect)(
            () => (
              window.addEventListener("scroll", i),
              () => window.removeEventListener("scroll", i)
            ),
            []
          ),
          (0, a.jsx)(a.Fragment, {
            children:
              n &&
              (0, a.jsx)("button", {
                className:
                  "fixed bottom-4 right-4 px-4 py-2  rounded-full bg-gray-500 text-white hover:bg-gray-700",
                onClick: function () {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                style: { zIndex: 1e3 },
                children: (0, a.jsx)(d.Ul, {
                  style: { width: 10, transform: "rotate(-90deg)" },
                  name: "mobile_menu_close",
                }),
              }),
          })
        );
      };
      function f() {
        let n = (0, t._)(["\n  position: relative;\n"]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, t._)([
          '\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  background-color: #1d1503;\n  background-size: cover;\n  overflow: hidden;\n  color: whitesmoke;\n  position: relative;\n  z-index: 2;\n  width: 100%;\n\n  &::after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n  }\n',
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function x(n) {
        let { children: e } = n;
        return (0, a.jsx)("div", {
          className: "z-0 flex flex-col items-center w-full h-full",
          children: (0, a.jsx)(k, {
            children: (0, a.jsxs)(h, {
              children: [e, (0, a.jsx)(_, {}), (0, a.jsx)(u, {})],
            }),
          }),
        });
      }
      let h = c.ZP.div.withConfig({ componentId: "sc-7b6d4bb-0" })(f()),
        k = c.ZP.div.withConfig({ componentId: "sc-7b6d4bb-1" })(E());
    },
    6721: function (n, e, i) {
      i.d(e, {
        BM: function () {
          return t;
        },
        Tl: function () {
          return a;
        },
        Zd: function () {
          return o;
        },
        k9: function () {
          return l;
        },
      }),
        i(3454).env.REACT_APP_CONTRACT_ADDRESS;
      let t = {
          dackie_big_gif: "/img/landingpage/DUCKIE_GIF.gif",
          dackie_landscape: "/img/landingpage/DUCKIE_3.gif",
          mock_icon: "/img/landingpage/PINK_DUCKIE_LOGO_PNG.png",
          dackie_icon_1: "/img/landingpage/DUCKIE_TOP_1.png",
          dackie_icon_2: "/img/landingpage/DUCKIE_TOP_2.png",
          dackie_icon_3: "/img/landingpage/DUCKIE_TOP_3.png",
          dackie_rotate: "/img/landingpage/DUCKIE_1_ROTATE.png",
          dackie_text: "/img/landingpage/TEXT_EVERYONE.png",
          dackie_text_description:
            "/img/landingpage/TEXT_DESCRIPTION_BENEFIT.png",
          dackie_1: "/img/landingpage/DUCKIE_1.png",
          dackie_2: "/img/landingpage/DUCKIE_2.png",
          dackie_4: "/img/landingpage/DUCKIE_4.png",
          dackie_5: "/img/landingpage/DUCKIE_5.png",
          dackie_6: "/img/landingpage/DUCKIE_6.png",
          dackie_7: "/img/landingpage/DUCKIE_7.png",
          dackie_8: "/img/landingpage/DUCKIE_8.png",
          dackie_team_1: "/img/landingpage/DUCKIE_TEAM_ANDRE.png",
          dackie_team_2: "/img/landingpage/DUCKIE_TEAM_KEY.png",
          dackie_team_3: "/img/landingpage/dustin.png",
          dackie_team_4: "/img/landingpage/erious.png",
          dackie_team_5: "/img/landingpage/kuroh.png",
          dackie_team_6: "/img/landingpage/chuckie.png",
          dackie_team_7: "/img/landingpage/DUCKIE_TEAM_JIMN.png",
          dackie_team_8: "",
          dackie_9: "/img/landingpage/DUCKIE_9.png",
          dackie_11: "/img/landingpage/DUCKIE_11.png",
          dackie_12: "/img/landingpage/DUCKIE_12.png",
          dackie_13: "/img/landingpage/DUCKIE_13.png",
          dackie_14: "/img/landingpage/DUCKIE_14.png",
          dackie_15: "/img/landingpage/DUCKIE_15.png",
          dackie_chat_box: "/img/landingpage/CHATBOX.png",
          dackie_every_one: "/img/landingpage/TEXT_DUCKIE_EVERYONE.png",
          dackie_text_dackier: "/img/landingpage/TEXT_DUCKIE_2.png",
          dackie_text_collection: "/img/landingpage/TEXT_DUCKIE_COLLECTION.png",
          dackie_text_community: "/img/landingpage/TEXT_DUCKIE_COMMUNITY.png",
          dackie_text_mobile_benefit:
            "/img/landingpage/TEXT_DUCKIE_BENEFIT_MOBILE.png",
          dackie_text_benefit: "/img/landingpage/TEXT_DUCKIE_BENEFIT.png",
          dackie_text_roadmap: "/img/landingpage/TEXT_DUCKIE_ROADMAP.png",
          dackie_text_team: "/img/landingpage/TEXT_DUCKIE_THETEAM.png",
          dackie_text_logo_footer_mobile:
            "/img/landingpage/TEXT_DUCKIE_FOOTER_LOGO_MOBILE.png",
          dackie_text_logo_footer:
            "/img/landingpage/TEXT_DUCKIE_FOOTER_LOGO.png",
          dackie_text_email_footer_mobile:
            "/img/landingpage/DUCKIE_EMAIL_TEMPLATE_MOBILE.png",
          dackie_text_email_footer:
            "/img/landingpage/DUCKIE_EMAIL_TEMPLATE.png",
          dackie_next: "/img/landingpage/DUCKIE_NEXT.png",
          duckie_egg: "/img/landingpage/DUCKIE_1_EGG.png",
          mobile_menu_open: "/img/landingpage/MOBILE_MENU.png",
          mobile_menu_close: "/img/landingpage/CLOSE.png",
          baner_text_1: "/img/landingpage/BANNER_TEXT_1.png",
          baner_text_2: "/img/landingpage/BANNER_TEXT_2.png",
          baner_text_3: "/img/landingpage/BANNER_TEXT_3.png",
          done_ok: "/img/landingpage/DONE_OK.png",
          dackie_link_quacklidation: "/img/validation/link_validation.webp",
          arrow_right: "/img/validation/ArrowRight.svg",
          validation_success: "/img/validation/validation_success.webp",
          validation_fail: "/img/validation/validation_fail.webp",
        },
        a = [
          { text: "dackier", href: "/dackity", idElement: "#dackity" },
          { text: "Dackity", href: "/about-us", idElement: "#about-us" },
          { text: "collection", href: "/collection", idElement: "#collection" },
          {
            text: "Team",
            href: "/team",
            idElement: "#team",
            src: "images/TEAM.svg",
          },
        ],
        o = [
          { to: "https://twitter.com/Dackie_Official", src: "dackie_icon_2" },
          { to: "https://discord.gg/dackieofficial", src: "dackie_icon_3" },
        ],
        l = {
          YELLOW: "#FFD600",
          PINKY: "#FF9393  ",
          YELLOW_LESS: "#FFEE96",
          SKY_LESS: "#BCD7FF",
          LAND: "#965624",
          YELLOW_LABEL: "#D98200",
          GREEN_LABEL: "#13A922",
          ORANGE_LABEL: "#FF9400",
        };
    },
    2828: function (n, e, i) {
      i.d(e, {
        J: function () {
          return o;
        },
      });
      var t = i(7294),
        a = i(2682);
      let o = function () {
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1024,
          [e, i] = (0, t.useState)(!1),
          { width: o } = (0, a.d)();
        return (
          (0, t.useEffect)(() => (o <= n ? i(!0) : i(!1), () => {}), [n, o]), e
        );
      };
    },
    2682: function (n, e, i) {
      i.d(e, {
        d: function () {
          return o;
        },
      });
      var t = i(7294);
      let a = () => {
          {
            let { innerWidth: n, innerHeight: e } = window;
            return { width: n, height: e };
          }
        },
        o = () => {
          let [n, e] = (0, t.useState)({ width: 0, height: 0 }),
            i = (0, t.useCallback)(() => e(a()), []);
          return l(void 0, "resize", i), n;
        },
        l = function (n, e, i) {
          let a =
            !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          (0, t.useEffect)(() => {
            let t = n || window;
            return (
              t.addEventListener(e, i),
              a && t.dispatchEvent(new Event(e)),
              () => t.removeEventListener(e, i)
            );
          }, [e, i, n, a]);
        };
    },
    1474: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var t = i(6010),
        a = i(7851);
      function o() {
        for (var n = arguments.length, e = Array(n), i = 0; i < n; i++)
          e[i] = arguments[i];
        return (0, a.m)((0, t.Z)(...e));
      }
    },
  },
]);
