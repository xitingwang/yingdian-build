/**
 * App.js v2.1.2
 * Instant mobile web app creation
 * Copyright (c) 2012 Kik Interactive, http://kik.com
 * Released under the MIT license
 *
 * iScroll v4.1.6
 * Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under the MIT license
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Swapper = function(f, d) {
    function e(h, i, c, b) { e._swapper(h, i, c, b) }
    if (f && f.fn) {
        f.extend(f.fn, {
            swapper: function(g, c, b) {
                g = f(g)[0];
                this.forEach(function(h) { e._swapper(h, g, c, b) });
                return this
            }
        })
    }
    if (d && d.fn) {
        d.fn.swapper = function(g, c, b) {
            g = d(g)[0];
            this.each(function() { e._swapper(this, g, c, b) });
            return this
        }
    }
    return e
}(window.Zepto, window.jQuery);
Swapper._os = function(i, k) {
    var l, h, g;
    if (g = /\bCPU.*OS (\d+(_\d+)?)/i.exec(i)) {
        l = "ios";
        h = g[1].replace("_", ".")
    } else {
        if (g = /\bAndroid (\d+(\.\d+)?)/.exec(i)) {
            l = "android";
            h = g[1]
        }
    }
    var j = { name: l, version: h && k(h) };
    j[l] = true;
    return j
}(navigator.userAgent, parseFloat);
Swapper._isNode = function(d, c) { return function(b) { if (!b) { return false } try { return (b instanceof d) || (b instanceof c) } catch (e) {} if (typeof b !== "object") { return false } if (typeof b.nodeType !== "number") { return false } if (typeof b.nodeName !== "string") { return false } return true } }(Node, HTMLElement);
Swapper._isInDOM = function(b) { return function(e, d) { if (!d && !b(e)) { throw TypeError("element must be a DOM node, got " + e) } while (e = e.parentNode) { if (e === document) { return true } } return false } }(Swapper._isNode);
Swapper._insertBefore = function() { return function(d, c) { c.parentNode.insertBefore(d, c) } }();
Swapper._insertAfter = function() { return function(e, f) { var d = f.parentNode; if (d.lastchild === f) { d.appendChild(e) } else { d.insertBefore(e, f.nextSibling) } } }();
Swapper._removeNode = function() { return function(b) { if (b.parentNode) { b.parentNode.removeChild(b) } } }();
Swapper._setTransform = function() {
    return function(c, d) {
        c.style["-webkit-transform"] = d;
        c.style["-moz-transform"] = d;
        c.style["-ms-transform"] = d;
        c.style["-o-transform"] = d;
        c.style.transform = d
    }
}();
Swapper._setTransition = function() {
    return function(d, c) {
        if (c) {
            d.style["-webkit-transition"] = "-webkit-" + c;
            d.style["-moz-transition"] = "-moz-" + c;
            d.style["-ms-transition"] = "-ms-" + c;
            d.style["-o-transition"] = "-o-" + c;
            d.style.transition = c
        } else {
            d.style["-webkit-transition"] = "";
            d.style["-moz-transition"] = "";
            d.style["-ms-transition"] = "";
            d.style["-o-transition"] = "";
            d.style.transition = ""
        }
    }
}();
Swapper._getStyles = function(b) { return function(g, f) { var e; if (f) { e = g.style } else { e = b.defaultView.getComputedStyle(g, null) } return { "-webkit-transition": e["-webkit-transition"], "-moz-transition": e["-moz-transition"], "-ms-transition": e["-ms-transition"], "-o-transition": e["-o-transition"], transition: e.transition, display: e.display, opacity: e.opacity, top: e.top, left: e.left, height: e.height, width: e.width, position: e.position } } }(document);
Swapper._easings = { linear: "linear", ease: "ease", "ease-in": "ease-in", "ease-out": "ease-out", "ease-in-out": "ease-in-out", "step-start": "step-start", "step-end": "step-end" };
Swapper._transitions = { fade: [{ fade: true }, { fade: true }], "fade-on": [{ fade: true }, {}], "fade-off": [{}, { fade: true }, true], "scale-in": [{ transform: "scale(0.01)" }, {}], "scale-out": [{}, { transform: "scale(0.01)" }, true], "rotate-left": [{ transform: "rotateY(-180deg) perspective(360px)", fade: true }, { transform: "rotateY( 180deg) perspective(360px)", fade: true }], "rotate-right": [{ transform: "rotateY( 180deg) perspective(360px)", fade: true }, { transform: "rotateY(-180deg) perspective(360px)", fade: true }], "cube-left": [{ transform: "translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)" }, { transform: "translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)" }], "cube-right": [{ transform: "translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)" }, { transform: "translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)" }], "swap-left": [{ transform: "translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)" }, { transform: "translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)" }], "swap-right": [{ transform: "translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)" }, { transform: "translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)" }], "explode-in": [{ fade: true, transform: "scale(1.25)" }, {}], "explode-out": [{}, { fade: true, transform: "scale(1.25)" }, true], "implode-in": [{}, { fade: true, transform: "scale(0.60)" }, true], "implode-out": [{ fade: true, transform: "scale(0.80)" }, {}], "slide-left": [{ transform: "translate3d( 100%,0,0)" }, { transform: "translate3d(-100%,0,0)" }], "slide-right": [{ transform: "translate3d(-100%,0,0)" }, { transform: "translate3d( 100%,0,0)" }], "slide-up": [{ transform: "translate3d(0, 100%,0)" }, { transform: "translate3d(0,-100%,0)" }], "slide-down": [{ transform: "translate3d(0,-100%,0)" }, { transform: "translate3d(0, 100%,0)" }], "slideon-left": [{ transform: "translate3d(-100%,0,0)" }, {}], "slideoff-left": [{}, { transform: "translate3d(-100%,0,0)" }, true], "slideon-right": [{ transform: "translate3d(100%,0,0)" }, {}], "slideoff-right": [{}, { transform: "translate3d(100%,0,0)" }, true], "slideon-up": [{ transform: "translate3d(0,-100%,0)" }, {}], "slideoff-up": [{}, { transform: "translate3d(0,-100%,0)" }, true], "slideon-down": [{ transform: "translate3d(0,100%,0)" }, {}], "slideoff-down": [{}, { transform: "translate3d(0,100%,0)" }, true], "slideon-left-ios": [{ transform: "translate3d(100%,0,0)" }, { transform: "translate3d(-30%,0,0)" }], "slideoff-right-ios": [{ transform: "translate3d(-30%,0,0)" }, { transform: "translate3d(100%,0,0)" }, true], "glideon-right": [{ transform: "translate3d(110%,0,0)" }, { transform: "translate3d(-20%,0,0)" }], "glideoff-right": [{ transform: "translate3d(-20%,0,0)" }, { transform: "translate3d(110%,0,0)" }, true], "glideon-left": [{ transform: "translate3d(-110%,0,0)" }, { transform: "translate3d(20%,0,0)" }], "glideoff-left": [{ transform: "translate3d(20%,0,0)" }, { transform: "translate3d(-110%,0,0)" }, true], "glideon-down": [{ transform: "translate3d(0,110%,0)" }, { transform: "translate3d(0,-20%,0)" }], "glideoff-down": [{ transform: "translate3d(0,-20%,0)" }, { transform: "translate3d(0,110%,0)" }, true], "glideon-up": [{ transform: "translate3d(0,-110%,0)" }, { transform: "translate3d(0,20%,0)" }], "glideoff-up": [{ transform: "translate3d(0,20%,0)" }, { transform: "translate3d(0,-110%,0)" }, true] };
Swapper._validate = function(j, i, k) {
    return { element: l, options: g, callback: h };

    function l(b) { if (!j(b)) { throw TypeError("element must be a DOM node, got " + b) } }

    function g(b) {
        switch (typeof b) {
            case "string":
                b = { transition: b };
                break;
            case "undefined":
                b = {};
                break;
            case "object":
                break;
            default:
                throw TypeError("options must be an object if defined, got " + b)
        }
        switch (typeof b.transition) {
            case "string":
                if (!(b.transition in i) && (b.transition !== "instant")) { throw TypeError(b.transition + " is not a valid transition") }
                break;
            case "undefined":
                break;
            default:
                throw TypeError("transition must be a string if defined, got " + b.transition)
        }
        switch (typeof b.duration) {
            case "number":
                if (b.duration < 0) { throw TypeError("duration must be a non-negative integer, got " + b.duration) }
                break;
            case "undefined":
                break;
            default:
                throw TypeError("duration must be a number if defined, got " + b.duration)
        }
        switch (typeof b.easing) {
            case "string":
                if (!(b.easing in k) && (b.easing.substr(0, 13) !== "cubic-bezier(")) { throw TypeError(b.easing + " is not a valid easing") }
                break;
            case "undefined":
                break;
            default:
                throw TypeError("easing must be a string if defined, got " + b.easing)
        }
        return b
    }

    function h(b) {
        switch (typeof b) {
            case "undefined":
                b = function() {};
                break;
            case "function":
                break;
            default:
                throw TypeError("callback must be a function if defined, got " + b)
        }
        return b
    }
}(Swapper._isNode, Swapper._transitions, Swapper._easings);
Swapper._swapper = function(Z, I, ae, af, U, H, ad, ac, aa, O, Y, S, X, N) {
    var aj = "translate3d(0,0,0) scale(1)",
        M = "fade",
        F = "ease-in-out";
    var T = (Z.ios && (Math.floor(Z.version) === 5));

    function Q(d, e, c, b) {
        S.element(d);
        S.element(e);
        if (typeof c === "function") {
            b = c;
            c = {}
        }
        c = S.options(c);
        b = S.callback(b);
        if (d._swapper) { throw Error("elem1 is currently being swapped") } else { if (e._swapper) { throw Error("elem2 is currently being swapped") } }
        if (!ae(d, true)) { throw Error("elem1 must be in the DOM to be swapped") }
        d._swapper = true;
        e._swapper = true;
        H(e);
        V(d, e, c, function() {
            d._swapper = false;
            e._swapper = false;
            b()
        })
    }

    function V(c, d, b, e) {
        if (b.transition === "instant") {
            U(d, c);
            H(c);
            e();
            return
        }
        var f = O[b.transition || M],
            g = b.easing || F,
            h = b.duration || 300;
        if (g.substr(0, 13) !== "cubic-bezier(") { g = Y[g] }
        U(d, c);
        var i = aa(c),
            j = aa(d),
            k = aa(c, true),
            l = aa(d, true);
        P(c, d, i, j);
        if (f[2]) { af(d, c) }
        d.style.opacity = "0";
        K(c, d);
        setTimeout(function() {
            d.style.opacity = j.opacity;
            ai(c, d, f);
            setTimeout(function() {
                W(c, d, h, g);
                setTimeout(function() {
                    G(c, d, f);
                    R(c, d, i, j, f, h, function() {
                        H(c);
                        L(c, d, h, g);
                        setTimeout(function() {
                            J(c, d, k, l, f);
                            ag(c, d, k, l);
                            setTimeout(function() {
                                ah(c, d, k, l);
                                e()
                            }, 0)
                        }, 0)
                    })
                }, 0)
            }, 0)
        }, 0)
    }

    function P(e, f, c, d) {
        var b = e.getBoundingClientRect();
        if (c.display !== "none") {
            if (T) { f.style.position = "absolute" } else { f.style.position = "fixed" }
            f.style.top = b.top + "px";
            f.style.left = b.left + "px"
        }
        f.style.height = d.height || c.height;
        f.style.width = d.width || c.width
    }

    function ag(d, e, b, c) {
        e.style.position = c.position;
        e.style.top = c.top;
        e.style.left = c.left;
        e.style.height = c.height;
        e.style.width = c.width
    }

    function ai(c, d, b) {
        ad(c, aj);
        ad(d, b[0].transform || aj);
        if (b[0].fade) { d.style.opacity = "0" }
        if (b[1].fade) { c.style.opacity = "1" }
    }

    function G(c, d, b) {
        ad(c, b[1].transform || aj);
        ad(d, aj);
        if (b[0].fade) { d.style.opacity = "1" }
        if (b[1].fade) { c.style.opacity = "0" }
    }

    function J(e, f, c, d, b) {
        ad(e, "");
        ad(f, "");
        if (b[0].fade) { f.style.opacity = d.opacity }
        if (b[1].fade) { e.style.opacity = c.opacity }
    }

    function W(e, f, d, b) {
        var c = "transform " + (d / 1000) + "s " + b + ",opacity " + (d / 1000) + "s " + b;
        ac(e, c);
        ac(f, c)
    }

    function L(d, e, c, b) {
        ac(d, "");
        ac(e, "")
    }

    function K(b, c) {
        ac(b, "");
        ac(c, "")
    }

    function ah(d, e, b, c) {
        d.style["-webkit-transition"] = b["-webkit-transition"];
        d.style["-moz-transition"] = b["-moz-transition"];
        d.style["-ms-transition"] = b["-ms-transition"];
        d.style["-o-transition"] = b["-o-transition"];
        d.style.transition = b.transition;
        e.style["-webkit-transition"] = c["-webkit-transition"];
        e.style["-moz-transition"] = c["-moz-transition"];
        e.style["-ms-transition"] = c["-ms-transition"];
        e.style["-o-transition"] = c["-o-transition"];
        e.style.transition = c.transition
    }

    function ab(c, b) { if (c.display === "none") { return false } if (b.fade) { return true } if (!b.transform) { return false } else { if (b.transform === aj) { return false } else { return true } } }

    function R(b, e, k, m, h, j, f) {
        var l;
        if (ab(m, h[0])) {
            l = e;
            c()
        } else {
            if (ab(k, h[1])) {
                l = b;
                c()
            } else { setTimeout(g, j) }
        }

        function c() {
            l.addEventListener("webkitTransitionEnd", g, false);
            l.addEventListener("transitionend", g, false);
            l.addEventListener("oTransitionEnd", g, false);
            l.addEventListener("otransitionend", g, false);
            l.addEventListener("MSTransitionEnd", g, false);
            l.addEventListener("transitionend", g, false)
        }

        function d() {
            l.removeEventListener("webkitTransitionEnd", g);
            l.removeEventListener("transitionend", g);
            l.removeEventListener("oTransitionEnd", g);
            l.removeEventListener("otransitionend", g);
            l.removeEventListener("MSTransitionEnd", g);
            l.removeEventListener("transitionend", g)
        }
        var i = false;

        function g(n) {
            if (i || (n && n.target && (n.target !== l))) { return }
            i = true;
            if (l) { d() }
            f()
        }
    }
    return Q
}(Swapper._os, Swapper._isNode, Swapper._isInDOM, Swapper._insertBefore, Swapper._insertAfter, Swapper._removeNode, Swapper._setTransform, Swapper._setTransition, Swapper._getStyles, Swapper._transitions, Swapper._easings, Swapper._validate, window, document);
var Clickable = function(f, d) {
    function e() { e._enableClicking.apply(this, arguments) }
    e.touchable = function() { return e._os.touchable };
    e.sticky = function() { e._enableStickyClick.apply(this, arguments) };
    if (d && d.fn) {
        d.fn.clickable = function(b) { this.each(function() { e._enableClicking(this, b) }); return this };
        d.fn.stickyClick = function(b) { this.each(function() { e._enableStickyClick(this, b) }); return this }
    }
    if (f && f.fn) { f.extend(f.fn, { clickable: function(b) { this.forEach(function(c) { e._enableClicking(c, b) }); return this }, stickyClick: function(b) { this.forEach(function(c) { e._enableStickyClick(c, b) }); return this } }) }
    return e
}(window.Zepto, window.jQuery);
Clickable._os = function(i, k) {
    var l, h, g;
    if (g = /\bCPU.*OS (\d+(_\d+)?)/i.exec(i)) {
        l = "ios";
        h = g[1].replace("_", ".")
    } else {
        if (g = /\bAndroid (\d+(\.\d+)?)/.exec(i)) {
            l = "android";
            h = g[1]
        }
    }
    var j = { name: l, version: h && k(h), touchable: !!l };
    j[l] = true;
    return j
}(navigator.userAgent, parseFloat);
Clickable._trimString = function(d) { var c = /^\s+|\s+$/g; return function(b) { return d(b).replace(c, "") } }(String);
Clickable._isDOMNode = function(d, c) { return function(b) { if (!b) { return false } try { return (b instanceof d) || (b instanceof c) } catch (e) {} if (typeof b !== "object") { return false } if (typeof b.nodeType !== "number") { return false } if (typeof b.nodeName !== "string") { return false } return true } }(Node, HTMLElement);
Clickable._isInDOM = function() { return function(b) { while (b = b.parentNode) { if (b === document) { return true } } return false } }();
Clickable._bindEvents = function() { return function(f, d) { for (var e in d) { if (f.addEventListener) { f.addEventListener(e, d[e], false) } else { if (f.attachEvent) { f.attachEvent("on" + e, d[e]) } } } } }();
Clickable._unbindEvents = function() { return function(f, d) { for (var e in d) { if (f.removeEventListener) { f.removeEventListener(e, d[e]) } } } }();
Clickable._addClass = function() { return function(c, d) { c.className += " " + d } }();
Clickable._removeClass = function(b) { return function(e, d) { e.className = b(e.className.replace(new RegExp("\\b" + d + "\\b"), "")) } }(Clickable._trimString);
Clickable._enableClicking = function(y, r, F, A, D, v, s) {
    var x = "active",
        t = "data-clickable-class",
        z = 40;
    var q = false,
        u = !!y.ios;

    function E(f, c) {
        if (!r(f)) { throw TypeError("element " + f + " must be a DOM element") }
        if (f._clickable) { return }
        f._clickable = true;
        switch (typeof c) {
            case "undefined":
                c = x;
                break;
            case "string":
                break;
            default:
                throw TypeError("active class " + c + " must be a string")
        }
        var S = false,
            Z = false,
            o, R, j, h, V;
        f.setAttribute(t, c);
        f.style["-webkit-tap-highlight-color"] = "rgba(255,255,255,0)";
        p();
        return;

        function e(H, G) {
            S = true;
            j = +new Date();
            o = H;
            R = G;
            h = w(f);
            if (h) {
                V = h.scrollTop;
                h.addEventListener("scroll", aa, true)
            }
        }

        function l() {
            if (h) { h.removeEventListener("scroll", aa) }
            h = null;
            V = null;
            o = null;
            R = null;
            S = false
        }

        function aa() { Y() }

        function b() { return S }

        function T() { v(f, c) }

        function X() { s(f, c) }

        function p() { A(f, { click: k }); if (!y.touchable) { A(f, { mousedown: W, mousemove: U, mouseout: U, mouseup: g }); return } if (y.ios) { A(f, { DOMNodeInsertedIntoDocument: d, DOMNodeRemovedFromDocument: i }); if (F(f)) { d() } } else { d() } }

        function d() { A(f, { touchstart: n, touchmove: m, touchcancel: Y, touchend: Q }) }

        function i() { D(f, { touchstart: n, touchmove: m, touchcancel: Y, touchend: Q }) }

        function k(G) {
            G = G || window.event;
            if (!f.disabled && Z) {
                Z = false;
                setTimeout(function() { q = false }, 0)
            } else {
                if (G.stopImmediatePropagation) { G.stopImmediatePropagation() }
                G.preventDefault();
                G.stopPropagation();
                G.cancelBubble = true;
                G.returnValue = false;
                return false
            }
        }

        function W(G) {
            Z = false;
            if (f.disabled || !B(G.target, f)) {
                G.preventDefault();
                l();
                return
            }
            e(G.clientX, G.clientY);
            T()
        }

        function U(G) {
            G.preventDefault();
            l();
            Z = false;
            X()
        }

        function g(G) {
            if (f.disabled) {
                G.preventDefault();
                l();
                Z = false;
                return
            }
            if (!b()) {
                G.preventDefault();
                Z = false
            } else { Z = true }
            l();
            X()
        }

        function n(H) {
            Z = false;
            if (q || f.disabled || (H.touches.length !== 1) || !B(H.target, f)) { l(); return }
            q = true;
            var G = H.changedTouches[0];
            e(G.clientX, G.clientY);
            if (h) { if (h._isScrolling || (V < 0) || (h.scrollHeight < V)) { l(); return } }
            var G = j;
            setTimeout(function() { if (b() && (G === j)) { T() } }, z)
        }

        function Y(G) {
            Z = false;
            l();
            if (G) { q = false }
            if (f.disabled) { return }
            X()
        }

        function m(G) { var H = document.elementFromPoint(G.touches[0].pageX, G.touches[0].pageY); if (f !== H) { Y(G) } }

        function Q(H) {
            var L = b(),
                K = h,
                J = V,
                M = o,
                G = R;
            Y();
            if (!L || f.disabled) { q = false; return }
            if (K) { if (K._isScrolling || (K.scrollTop !== J)) { return } }
            if (!H.stopImmediatePropagation) { Z = true; return }
            var I = +new Date() - j;
            if (I > z) {
                Z = true;
                C(f, M, G)
            } else {
                T();
                setTimeout(function() {
                    X();
                    Z = true;
                    C(f, M, G)
                }, 1)
            }
        }
    }

    function B(b, c) { do { if (b === c) { return true } else { if (b._clickable) { return false } } } while (b = b.parentNode); return false }

    function C(c, e, b) {
        var d = document.createEvent("MouseEvents");
        d.initMouseEvent("click", true, true, window, 1, e || 0, b || 0, e || 0, b || 0, false, false, false, false, 0, null);
        c.dispatchEvent(d)
    }

    function w(b) { if (!y.ios || (y.version < 5)) { return } while (b = b.parentNode) { if (b._scrollable) { if (b._iScroll) { return } return b } } }
    return E
}(Clickable._os, Clickable._isDOMNode, Clickable._isInDOM, Clickable._bindEvents, Clickable._unbindEvents, Clickable._addClass, Clickable._removeClass);
Clickable._enableStickyClick = function(h, l, i) {
    var k = "data-clickable-class";

    function j(b, c, d) {
        if (!l(b)) { throw TypeError("button must be a DOM element, got " + b) }
        switch (typeof c) {
            case "string":
                break;
            case "function":
                d = c;
                c = undefined;
                break;
            default:
                throw TypeError("button active class must be a string if defined, got " + c)
        }
        if (typeof d !== "function") { throw TypeError("sticky click handler must be a function, got " + d) }
        i(b, c);
        b.addEventListener("click", g(b, d), false)
    }

    function g(c, d) {
        var b = false,
            e = c.getAttribute(k);
        return function() {
            if (b) { return }
            b = true;
            var p = false,
                q;
            c.disabled = true;
            c.className += " " + e;
            try { q = d.call(c, f) } catch (o) {
                if (window.console && window.console.error) { if ((typeof o === "object") && o.stack) { window.console.error(o.stack) } else { window.console.error(o + "") } }
                f()
            }
            if (q === false) { f() }

            function f() {
                if (p) { return }
                p = true;
                b = false;
                if (c.disabled) {
                    c.disabled = false;
                    c.className = h(c.className.replace(new RegExp("\\b" + e + "\\b", "g"), ""))
                }
            }
        }
    }
    return j
}(Clickable._trimString, Clickable._isDOMNode, Clickable._enableClicking);
var iScroll = function(u, f) {
    function C(b) {
        if ("" === v) { return b }
        b = b.charAt(0).toUpperCase() + b.substr(1);
        return v + b
    }
    var t = Math,
        s = f.createElement("div").style,
        v;
    a: {
        for (var z = ["t", "webkitT", "MozT", "msT", "OT"], h, j = 0, x = z.length; j < x; j++) { if (h = z[j] + "ransform", h in s) { v = z[j].substr(0, z[j].length - 1); break a } }
        v = !1
    }
    var y = v ? "-" + v.toLowerCase() + "-" : "",
        B = C("transform"),
        D = C("transitionProperty"),
        K = C("transitionDuration"),
        G = C("transformOrigin"),
        I = C("transitionTimingFunction"),
        A = C("transitionDelay"),
        E = /android/gi.test(navigator.appVersion),
        l = /iphone|ipad/gi.test(navigator.appVersion),
        z = /hp-tablet/gi.test(navigator.appVersion),
        m = C("perspective") in s,
        w = "ontouchstart" in u && !z,
        o = !!v,
        J = C("transition") in s,
        F = "onorientationchange" in u ? "orientationchange" : "resize",
        M = w ? "touchstart" : "mousedown",
        n = w ? "touchmove" : "mousemove",
        p = w ? "touchend" : "mouseup",
        q = w ? "touchcancel" : "mouseup",
        N = "Moz" == v ? "DOMMouseScroll" : "mousewheel",
        O;
    O = !1 === v ? !1 : { "": "transitionend", webkit: "webkitTransitionEnd", Moz: "transitionend", O: "oTransitionEnd", ms: "MSTransitionEnd" }[v];
    var L = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame || function(b) { return setTimeout(b, 1) },
        r = u.cancelRequestAnimationFrame || u.webkitCancelAnimationFrame || u.webkitCancelRequestAnimationFrame || u.mozCancelRequestAnimationFrame || u.oCancelRequestAnimationFrame || u.msCancelRequestAnimationFrame || clearTimeout,
        H = m ? " translateZ(0)" : "",
        z = function(e, d) {
            var b = this,
                c;
            b.wrapper = "object" == typeof e ? e : f.getElementById(e);
            b.wrapper.style.overflow = "hidden";
            b.scroller = b.wrapper.children[0];
            b.options = { hScroll: !0, vScroll: !0, x: 0, y: 0, bounce: !0, bounceLock: !1, momentum: !0, lockDirection: !0, useTransform: !0, useTransition: !1, topOffset: 0, checkDOMChanges: !1, handleClick: !0, hScrollbar: !0, vScrollbar: !0, fixedScrollbar: E, hideScrollbar: l, fadeScrollbar: l && m, scrollbarClass: "", zoom: !1, zoomMin: 1, zoomMax: 4, doubleTapZoom: 2, wheelAction: "scroll", snap: !1, snapThreshold: 1, onRefresh: null, onBeforeScrollStart: function(g) { g.preventDefault() }, onScrollStart: null, onBeforeScrollMove: null, onScrollMove: null, onBeforeScrollEnd: null, onScrollEnd: null, onTouchEnd: null, onDestroy: null, onZoomStart: null, onZoom: null, onZoomEnd: null };
            for (c in d) { b.options[c] = d[c] }
            b.x = b.options.x;
            b.y = b.options.y;
            b.options.useTransform = o && b.options.useTransform;
            b.options.hScrollbar = b.options.hScroll && b.options.hScrollbar;
            b.options.vScrollbar = b.options.vScroll && b.options.vScrollbar;
            b.options.zoom = b.options.useTransform && b.options.zoom;
            b.options.useTransition = J && b.options.useTransition;
            b.options.zoom && E && (H = "");
            b.scroller.style[D] = b.options.useTransform ? y + "transform" : "top left";
            b.scroller.style[K] = "0";
            b.scroller.style[G] = "0 0";
            b.options.useTransition && (b.scroller.style[I] = "cubic-bezier(0.33,0.66,0.66,1)");
            b.options.useTransform ? b.scroller.style[B] = "translate(" + b.x + "px," + b.y + "px)" + H : b.scroller.style.cssText += ";position:absolute;top:" + b.y + "px;left:" + b.x + "px";
            b.options.useTransition && (b.options.fixedScrollbar = !0);
            b.refresh();
            b._bind(F, u);
            b._bind(M);
            w || (b._bind("mouseout", b.wrapper), "none" != b.options.wheelAction && b._bind(N));
            b.options.checkDOMChanges && (b.checkDOMTime = setInterval(function() { b._checkDOMChanges() }, 500))
        };
    z.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        currPageX: 0,
        currPageY: 0,
        pagesX: [],
        pagesY: [],
        aniTime: null,
        wheelZoomCount: 0,
        handleEvent: function(b) {
            switch (b.type) {
                case M:
                    if (!w && 0 !== b.button) { break }
                    this._start(b);
                    break;
                case n:
                    this._move(b);
                    break;
                case p:
                case q:
                    this._end(b);
                    break;
                case F:
                    this._resize();
                    break;
                case N:
                    this._wheel(b);
                    break;
                case "mouseout":
                    this._mouseout(b);
                    break;
                case O:
                    this._transitionEnd(b)
            }
        },
        _checkDOMChanges: function() {!this.moved && (!this.zoomed && !(this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) && this.refresh() },
        _scrollbar: function(c) {
            var b;
            this[c + "Scrollbar"] ? (this[c + "ScrollbarWrapper"] || (b = f.createElement("div"), this.options.scrollbarClass ? b.className = this.options.scrollbarClass + c.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == c ? "height:7px;bottom:1px;left:2px;right:" + (this.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (this.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + y + "transition-property:opacity;" + y + "transition-duration:" + (this.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.hideScrollbar ? "0" : "1"), this.wrapper.appendChild(b), this[c + "ScrollbarWrapper"] = b, b = f.createElement("div"), this.options.scrollbarClass || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + y + "background-clip:padding-box;" + y + "box-sizing:border-box;" + ("h" == c ? "height:100%" : "width:100%") + ";" + y + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + y + "transition-property:" + y + "transform;" + y + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + y + "transition-duration:0;" + y + "transform: translate(0,0)" + H, this.options.useTransition && (b.style.cssText += ";" + y + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[c + "ScrollbarWrapper"].appendChild(b), this[c + "ScrollbarIndicator"] = b), "h" == c ? (this.hScrollbarSize = this.hScrollbarWrapper.clientWidth, this.hScrollbarIndicatorSize = t.max(t.round(this.hScrollbarSize * this.hScrollbarSize / this.scrollerW), 8), this.hScrollbarIndicator.style.width = this.hScrollbarIndicatorSize + "px", this.hScrollbarMaxScroll = this.hScrollbarSize - this.hScrollbarIndicatorSize, this.hScrollbarProp = this.hScrollbarMaxScroll / this.maxScrollX) : (this.vScrollbarSize = this.vScrollbarWrapper.clientHeight, this.vScrollbarIndicatorSize = t.max(t.round(this.vScrollbarSize * this.vScrollbarSize / this.scrollerH), 8), this.vScrollbarIndicator.style.height = this.vScrollbarIndicatorSize + "px", this.vScrollbarMaxScroll = this.vScrollbarSize - this.vScrollbarIndicatorSize, this.vScrollbarProp = this.vScrollbarMaxScroll / this.maxScrollY), this._scrollbarPos(c, !0)) : this[c + "ScrollbarWrapper"] && (o && (this[c + "ScrollbarIndicator"].style[B] = ""), this[c + "ScrollbarWrapper"].parentNode.removeChild(this[c + "ScrollbarWrapper"]), this[c + "ScrollbarWrapper"] = null, this[c + "ScrollbarIndicator"] = null)
        },
        _resize: function() {
            var b = this;
            setTimeout(function() { b.refresh() }, E ? 200 : 0)
        },
        _pos: function(c, b) { this.zoomed || (c = this.hScroll ? c : 0, b = this.vScroll ? b : 0, this.options.useTransform ? this.scroller.style[B] = "translate(" + c + "px," + b + "px) scale(" + this.scale + ")" + H : (c = t.round(c), b = t.round(b), this.scroller.style.left = c + "px", this.scroller.style.top = b + "px"), this.x = c, this.y = b, this._scrollbarPos("h"), this._scrollbarPos("v")) },
        _scrollbarPos: function(d, c) {
            var b = "h" == d ? this.x : this.y;
            this[d + "Scrollbar"] && (b *= this[d + "ScrollbarProp"], 0 > b ? (this.options.fixedScrollbar || (b = this[d + "ScrollbarIndicatorSize"] + t.round(3 * b), 8 > b && (b = 8), this[d + "ScrollbarIndicator"].style["h" == d ? "width" : "height"] = b + "px"), b = 0) : b > this[d + "ScrollbarMaxScroll"] && (this.options.fixedScrollbar ? b = this[d + "ScrollbarMaxScroll"] : (b = this[d + "ScrollbarIndicatorSize"] - t.round(3 * (b - this[d + "ScrollbarMaxScroll"])), 8 > b && (b = 8), this[d + "ScrollbarIndicator"].style["h" == d ? "width" : "height"] = b + "px", b = this[d + "ScrollbarMaxScroll"] + (this[d + "ScrollbarIndicatorSize"] - b))), this[d + "ScrollbarWrapper"].style[A] = "0", this[d + "ScrollbarWrapper"].style.opacity = c && this.options.hideScrollbar ? "0" : "1", this[d + "ScrollbarIndicator"].style[B] = "translate(" + ("h" == d ? b + "px,0)" : "0," + b + "px)") + H)
        },
        _start: function(e) {
            var d = w ? e.touches[0] : e,
                b, c;
            if (this.enabled) {
                this.options.onBeforeScrollStart && this.options.onBeforeScrollStart.call(this, e);
                (this.options.useTransition || this.options.zoom) && this._transitionTime(0);
                this.zoomed = this.animating = this.moved = !1;
                this.dirY = this.dirX = this.absDistY = this.absDistX = this.distY = this.distX = 0;
                this.options.zoom && (w && 1 < e.touches.length) && (c = t.abs(e.touches[0].pageX - e.touches[1].pageX), b = t.abs(e.touches[0].pageY - e.touches[1].pageY), this.touchesDistStart = t.sqrt(c * c + b * b), this.originX = t.abs(e.touches[0].pageX + e.touches[1].pageX - 2 * this.wrapperOffsetLeft) / 2 - this.x, this.originY = t.abs(e.touches[0].pageY + e.touches[1].pageY - 2 * this.wrapperOffsetTop) / 2 - this.y, this.options.onZoomStart && this.options.onZoomStart.call(this, e));
                if (this.options.momentum && (this.options.useTransform ? (b = getComputedStyle(this.scroller, null)[B].replace(/[^0-9\-.,]/g, "").split(","), c = 1 * b[4], b = 1 * b[5]) : (c = 1 * getComputedStyle(this.scroller, null).left.replace(/[^0-9-]/g, ""), b = 1 * getComputedStyle(this.scroller, null).top.replace(/[^0-9-]/g, "")), c != this.x || b != this.y)) { this.options.useTransition ? this._unbind(O) : r(this.aniTime), this.steps = [], this._pos(c, b) }
                this.absStartX = this.x;
                this.absStartY = this.y;
                this.startX = this.x;
                this.startY = this.y;
                this.pointX = d.pageX;
                this.pointY = d.pageY;
                this.startTime = e.timeStamp || Date.now();
                this.options.onScrollStart && this.options.onScrollStart.call(this, e);
                this._bind(n);
                this._bind(p);
                this._bind(q)
            }
        },
        _move: function(g) {
            var e = w ? g.touches[0] : g,
                i = e.pageX - this.pointX,
                k = e.pageY - this.pointY,
                b = this.x + i,
                c = this.y + k,
                d = g.timeStamp || Date.now();
            this.options.onBeforeScrollMove && this.options.onBeforeScrollMove.call(this, g);
            if (this.options.zoom && w && 1 < g.touches.length) { b = t.abs(g.touches[0].pageX - g.touches[1].pageX), c = t.abs(g.touches[0].pageY - g.touches[1].pageY), this.touchesDist = t.sqrt(b * b + c * c), this.zoomed = !0, e = 1 / this.touchesDistStart * this.touchesDist * this.scale, e < this.options.zoomMin ? e = 0.5 * this.options.zoomMin * Math.pow(2, e / this.options.zoomMin) : e > this.options.zoomMax && (e = 2 * this.options.zoomMax * Math.pow(0.5, this.options.zoomMax / e)), this.lastScale = e / this.scale, b = this.originX - this.originX * this.lastScale + this.x, c = this.originY - this.originY * this.lastScale + this.y, this.scroller.style[B] = "translate(" + b + "px," + c + "px) scale(" + e + ")" + H, this.options.onZoom && this.options.onZoom.call(this, g) } else {
                this.pointX = e.pageX;
                this.pointY = e.pageY;
                if (0 < b || b < this.maxScrollX) { b = this.options.bounce ? this.x + i / 2 : 0 <= b || 0 <= this.maxScrollX ? 0 : this.maxScrollX }
                if (c > this.minScrollY || c < this.maxScrollY) { c = this.options.bounce ? this.y + k / 2 : c >= this.minScrollY || 0 <= this.maxScrollY ? this.minScrollY : this.maxScrollY }
                this.distX += i;
                this.distY += k;
                this.absDistX = t.abs(this.distX);
                this.absDistY = t.abs(this.distY);
                6 > this.absDistX && 6 > this.absDistY || (this.options.lockDirection && (this.absDistX > this.absDistY + 5 ? (c = this.y, k = 0) : this.absDistY > this.absDistX + 5 && (b = this.x, i = 0)), this.moved = !0, this._pos(b, c), this.dirX = 0 < i ? -1 : 0 > i ? 1 : 0, this.dirY = 0 < k ? -1 : 0 > k ? 1 : 0, 300 < d - this.startTime && (this.startTime = d, this.startX = this.x, this.startY = this.y), this.options.onScrollMove && this.options.onScrollMove.call(this, g))
            }
        },
        _end: function(R) {
            if (!(w && 0 !== R.touches.length)) {
                var Q = this,
                    b = w ? R.changedTouches[0] : R,
                    c, d, e = { dist: 0, time: 0 },
                    i = { dist: 0, time: 0 },
                    g = (R.timeStamp || Date.now()) - Q.startTime,
                    P = Q.x,
                    k = Q.y;
                Q._unbind(n);
                Q._unbind(p);
                Q._unbind(q);
                Q.options.onBeforeScrollEnd && Q.options.onBeforeScrollEnd.call(Q, R);
                if (Q.zoomed) { P = Q.scale * Q.lastScale, P = Math.max(Q.options.zoomMin, P), P = Math.min(Q.options.zoomMax, P), Q.lastScale = P / Q.scale, Q.scale = P, Q.x = Q.originX - Q.originX * Q.lastScale + Q.x, Q.y = Q.originY - Q.originY * Q.lastScale + Q.y, Q.scroller.style[K] = "200ms", Q.scroller.style[B] = "translate(" + Q.x + "px," + Q.y + "px) scale(" + Q.scale + ")" + H, Q.zoomed = !1, Q.refresh(), Q.options.onZoomEnd && Q.options.onZoomEnd.call(Q, R) } else {
                    if (Q.moved) {
                        if (300 > g && Q.options.momentum) {
                            e = P ? Q._momentum(P - Q.startX, g, -Q.x, Q.scrollerW - Q.wrapperW + Q.x, Q.options.bounce ? Q.wrapperW : 0) : e;
                            i = k ? Q._momentum(k - Q.startY, g, -Q.y, 0 > Q.maxScrollY ? Q.scrollerH - Q.wrapperH + Q.y - Q.minScrollY : 0, Q.options.bounce ? Q.wrapperH : 0) : i;
                            P = Q.x + e.dist;
                            k = Q.y + i.dist;
                            if (0 < Q.x && 0 < P || Q.x < Q.maxScrollX && P < Q.maxScrollX) { e = { dist: 0, time: 0 } }
                            if (Q.y > Q.minScrollY && k > Q.minScrollY || Q.y < Q.maxScrollY && k < Q.maxScrollY) { i = { dist: 0, time: 0 } }
                        }
                        e.dist || i.dist ? (e = t.max(t.max(e.time, i.time), 10), Q.options.snap && (i = P - Q.absStartX, g = k - Q.absStartY, t.abs(i) < Q.options.snapThreshold && t.abs(g) < Q.options.snapThreshold ? Q.scrollTo(Q.absStartX, Q.absStartY, 200) : (i = Q._snap(P, k), P = i.x, k = i.y, e = t.max(i.time, e))), Q.scrollTo(t.round(P), t.round(k), e)) : Q.options.snap ? (i = P - Q.absStartX, g = k - Q.absStartY, t.abs(i) < Q.options.snapThreshold && t.abs(g) < Q.options.snapThreshold ? Q.scrollTo(Q.absStartX, Q.absStartY, 200) : (i = Q._snap(Q.x, Q.y), (i.x != Q.x || i.y != Q.y) && Q.scrollTo(i.x, i.y, i.time))) : Q._resetPos(200)
                    } else { w && (Q.doubleTapTimer && Q.options.zoom ? (clearTimeout(Q.doubleTapTimer), Q.doubleTapTimer = null, Q.options.onZoomStart && Q.options.onZoomStart.call(Q, R), Q.zoom(Q.pointX, Q.pointY, 1 == Q.scale ? Q.options.doubleTapZoom : 1), Q.options.onZoomEnd && setTimeout(function() { Q.options.onZoomEnd.call(Q, R) }, 200)) : this.options.handleClick && (Q.doubleTapTimer = setTimeout(function() { Q.doubleTapTimer = null; for (c = b.target; 1 != c.nodeType;) { c = c.parentNode } "SELECT" != c.tagName && ("INPUT" != c.tagName && "TEXTAREA" != c.tagName) && (d = f.createEvent("MouseEvents"), d.initMouseEvent("click", !0, !0, R.view, 1, b.screenX, b.screenY, b.clientX, b.clientY, R.ctrlKey, R.altKey, R.shiftKey, R.metaKey, 0, null), d._fake = !0, c.dispatchEvent(d)) }, Q.options.zoom ? 250 : 0))), Q._resetPos(200) }
                    Q.options.onTouchEnd && Q.options.onTouchEnd.call(Q, R)
                }
            }
        },
        _resetPos: function(d) {
            var c = 0 <= this.x ? 0 : this.x < this.maxScrollX ? this.maxScrollX : this.x,
                b = this.y >= this.minScrollY || 0 < this.maxScrollY ? this.minScrollY : this.y < this.maxScrollY ? this.maxScrollY : this.y;
            if (c == this.x && b == this.y) { if (this.moved && (this.moved = !1, this.options.onScrollEnd && this.options.onScrollEnd.call(this)), this.hScrollbar && this.options.hideScrollbar && ("webkit" == v && (this.hScrollbarWrapper.style[A] = "300ms"), this.hScrollbarWrapper.style.opacity = "0"), this.vScrollbar && this.options.hideScrollbar) { "webkit" == v && (this.vScrollbarWrapper.style[A] = "300ms"), this.vScrollbarWrapper.style.opacity = "0" } } else { this.scrollTo(c, b, d || 0) }
        },
        _wheel: function(e) {
            var d = this,
                b, c;
            if ("wheelDeltaX" in e) { b = e.wheelDeltaX / 12, c = e.wheelDeltaY / 12 } else { if ("wheelDelta" in e) { b = c = e.wheelDelta / 12 } else { if ("detail" in e) { b = c = 3 * -e.detail } else { return } } }
            if ("zoom" == d.options.wheelAction) { if (c = d.scale * Math.pow(2, 1 / 3 * (c ? c / Math.abs(c) : 0)), c < d.options.zoomMin && (c = d.options.zoomMin), c > d.options.zoomMax && (c = d.options.zoomMax), c != d.scale) {!d.wheelZoomCount && d.options.onZoomStart && d.options.onZoomStart.call(d, e), d.wheelZoomCount++, d.zoom(e.pageX, e.pageY, c, 400), setTimeout(function() { d.wheelZoomCount--;!d.wheelZoomCount && d.options.onZoomEnd && d.options.onZoomEnd.call(d, e) }, 400) } } else { b = d.x + b, c = d.y + c, 0 < b ? b = 0 : b < d.maxScrollX && (b = d.maxScrollX), c > d.minScrollY ? c = d.minScrollY : c < d.maxScrollY && (c = d.maxScrollY), 0 > d.maxScrollY && d.scrollTo(b, c, 0) }
        },
        _mouseout: function(c) {
            var b = c.relatedTarget;
            if (b) { for (; b = b.parentNode;) { if (b == this.wrapper) { return } } }
            this._end(c)
        },
        _transitionEnd: function(b) { b.target == this.scroller && (this._unbind(O), this._startAni()) },
        _startAni: function() {
            var g = this,
                e = g.x,
                i = g.y,
                k = Date.now(),
                b, c, d;
            g.animating || (g.steps.length ? (b = g.steps.shift(), b.x == e && b.y == i && (b.time = 0), g.animating = !0, g.moved = !0, g.options.useTransition) ? (g._transitionTime(b.time), g._pos(b.x, b.y), g.animating = !1, b.time ? g._bind(O) : g._resetPos(0)) : (d = function() {
                var P = Date.now(),
                    Q;
                if (P >= k + b.time) {
                    g._pos(b.x, b.y);
                    g.animating = false;
                    g.options.onAnimationEnd && g.options.onAnimationEnd.call(g);
                    g._startAni()
                } else {
                    P = (P - k) / b.time - 1;
                    c = t.sqrt(1 - P * P);
                    P = (b.x - e) * c + e;
                    Q = (b.y - i) * c + i;
                    g._pos(P, Q);
                    if (g.animating) { g.aniTime = L(d) }
                }
            }, d()) : g._resetPos(400))
        },
        _transitionTime: function(b) {
            b += "ms";
            this.scroller.style[K] = b;
            this.hScrollbar && (this.hScrollbarIndicator.style[K] = b);
            this.vScrollbar && (this.vScrollbarIndicator.style[K] = b)
        },
        _momentum: function(g, e, i, b, c) {
            var e = t.abs(g) / e,
                d = e * e / 0.0012;
            0 < g && d > i ? (i += c / (6 / (0.0006 * (d / e))), e = e * i / d, d = i) : 0 > g && d > b && (b += c / (6 / (0.0006 * (d / e))), e = e * b / d, d = b);
            return { dist: d * (0 > g ? -1 : 1), time: t.round(e / 0.0006) }
        },
        _offset: function(d) {
            for (var c = -d.offsetLeft, b = -d.offsetTop; d = d.offsetParent;) { c -= d.offsetLeft, b -= d.offsetTop }
            d != this.wrapper && (c *= this.scale, b *= this.scale);
            return { left: c, top: b }
        },
        _snap: function(g, e) {
            var b, c, d;
            d = this.pagesX.length - 1;
            b = 0;
            for (c = this.pagesX.length; b < c; b++) { if (g >= this.pagesX[b]) { d = b; break } }
            d == this.currPageX && (0 < d && 0 > this.dirX) && d--;
            g = this.pagesX[d];
            c = (c = t.abs(g - this.pagesX[this.currPageX])) ? 500 * (t.abs(this.x - g) / c) : 0;
            this.currPageX = d;
            d = this.pagesY.length - 1;
            for (b = 0; b < d; b++) { if (e >= this.pagesY[b]) { d = b; break } }
            d == this.currPageY && (0 < d && 0 > this.dirY) && d--;
            e = this.pagesY[d];
            b = (b = t.abs(e - this.pagesY[this.currPageY])) ? 500 * (t.abs(this.y - e) / b) : 0;
            this.currPageY = d;
            d = t.round(t.max(c, b)) || 200;
            return { x: g, y: e, time: d }
        },
        _bind: function(d, c, b) {
            (c || this.scroller).addEventListener(d, this, !!b)
        },
        _unbind: function(d, c, b) {
            (c || this.scroller).removeEventListener(d, this, !!b)
        },
        destroy: function() {
            this.scroller.style[B] = "";
            this.vScrollbar = this.hScrollbar = !1;
            this._scrollbar("h");
            this._scrollbar("v");
            this._unbind(F, u);
            this._unbind(M);
            this._unbind(n);
            this._unbind(p);
            this._unbind(q);
            this.options.hasTouch || (this._unbind("mouseout", this.wrapper), this._unbind(N));
            this.options.useTransition && this._unbind(O);
            this.options.checkDOMChanges && clearInterval(this.checkDOMTime);
            this.options.onDestroy && this.options.onDestroy.call(this)
        },
        refresh: function() {
            var e, d, b, c = 0;
            d = 0;
            this.scale < this.options.zoomMin && (this.scale = this.options.zoomMin);
            this.wrapperW = this.wrapper.clientWidth || 1;
            this.wrapperH = this.wrapper.clientHeight || 1;
            this.minScrollY = -this.options.topOffset || 0;
            this.scrollerW = t.round(this.scroller.offsetWidth * this.scale);
            this.scrollerH = t.round((this.scroller.offsetHeight + this.minScrollY) * this.scale);
            this.maxScrollX = this.wrapperW - this.scrollerW;
            this.maxScrollY = this.wrapperH - this.scrollerH + this.minScrollY;
            this.dirY = this.dirX = 0;
            this.options.onRefresh && this.options.onRefresh.call(this);
            this.hScroll = this.options.hScroll && 0 > this.maxScrollX;
            this.vScroll = this.options.vScroll && (!this.options.bounceLock && !this.hScroll || this.scrollerH > this.wrapperH);
            this.hScrollbar = this.hScroll && this.options.hScrollbar;
            this.vScrollbar = this.vScroll && this.options.vScrollbar && this.scrollerH > this.wrapperH;
            e = this._offset(this.wrapper);
            this.wrapperOffsetLeft = -e.left;
            this.wrapperOffsetTop = -e.top;
            if ("string" == typeof this.options.snap) {
                this.pagesX = [];
                this.pagesY = [];
                b = this.scroller.querySelectorAll(this.options.snap);
                e = 0;
                for (d = b.length; e < d; e++) { c = this._offset(b[e]), c.left += this.wrapperOffsetLeft, c.top += this.wrapperOffsetTop, this.pagesX[e] = c.left < this.maxScrollX ? this.maxScrollX : c.left * this.scale, this.pagesY[e] = c.top < this.maxScrollY ? this.maxScrollY : c.top * this.scale }
            } else {
                if (this.options.snap) {
                    for (this.pagesX = []; c >= this.maxScrollX;) { this.pagesX[d] = c, c -= this.wrapperW, d++ }
                    this.maxScrollX % this.wrapperW && (this.pagesX[this.pagesX.length] = this.maxScrollX - this.pagesX[this.pagesX.length - 1] + this.pagesX[this.pagesX.length - 1]);
                    d = c = 0;
                    for (this.pagesY = []; c >= this.maxScrollY;) { this.pagesY[d] = c, c -= this.wrapperH, d++ }
                    this.maxScrollY % this.wrapperH && (this.pagesY[this.pagesY.length] = this.maxScrollY - this.pagesY[this.pagesY.length - 1] + this.pagesY[this.pagesY.length - 1])
                }
            }
            this._scrollbar("h");
            this._scrollbar("v");
            this.zoomed || (this.scroller.style[K] = "0", this._resetPos(200))
        },
        scrollTo: function(g, e, b, c) {
            var d = g;
            this.stop();
            d.length || (d = [{ x: g, y: e, time: b, relative: c }]);
            g = 0;
            for (e = d.length; g < e; g++) { d[g].relative && (d[g].x = this.x - d[g].x, d[g].y = this.y - d[g].y), this.steps.push({ x: d[g].x, y: d[g].y, time: d[g].time || 0 }) }
            this._startAni()
        },
        scrollToElement: function(d, c) { var b; if (d = d.nodeType ? d : this.scroller.querySelector(d)) { b = this._offset(d), b.left += this.wrapperOffsetLeft, b.top += this.wrapperOffsetTop, b.left = 0 < b.left ? 0 : b.left < this.maxScrollX ? this.maxScrollX : b.left, b.top = b.top > this.minScrollY ? this.minScrollY : b.top < this.maxScrollY ? this.maxScrollY : b.top, c = void 0 === c ? t.max(2 * t.abs(b.left), 2 * t.abs(b.top)) : c, this.scrollTo(b.left, b.top, c) } },
        scrollToPage: function(d, c, b) {
            b = void 0 === b ? 400 : b;
            this.options.onScrollStart && this.options.onScrollStart.call(this);
            if (this.options.snap) { d = "next" == d ? this.currPageX + 1 : "prev" == d ? this.currPageX - 1 : d, c = "next" == c ? this.currPageY + 1 : "prev" == c ? this.currPageY - 1 : c, d = 0 > d ? 0 : d > this.pagesX.length - 1 ? this.pagesX.length - 1 : d, c = 0 > c ? 0 : c > this.pagesY.length - 1 ? this.pagesY.length - 1 : c, this.currPageX = d, this.currPageY = c, d = this.pagesX[d], c = this.pagesY[c] } else { if (d *= -this.wrapperW, c *= -this.wrapperH, d < this.maxScrollX && (d = this.maxScrollX), c < this.maxScrollY) { c = this.maxScrollY } }
            this.scrollTo(d, c, b)
        },
        disable: function() {
            this.stop();
            this._resetPos(0);
            this.enabled = !1;
            this._unbind(n);
            this._unbind(p);
            this._unbind(q)
        },
        enable: function() { this.enabled = !0 },
        stop: function() {
            this.options.useTransition ? this._unbind(O) : r(this.aniTime);
            this.steps = [];
            this.animating = this.moved = !1
        },
        zoom: function(g, e, b, c) {
            var d = b / this.scale;
            this.options.useTransform && (this.zoomed = !0, c = void 0 === c ? 200 : c, g = g - this.wrapperOffsetLeft - this.x, e = e - this.wrapperOffsetTop - this.y, this.x = g - g * d + this.x, this.y = e - e * d + this.y, this.scale = b, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.maxScrollX ? this.maxScrollX : this.x, this.y = this.y > this.minScrollY ? this.minScrollY : this.y < this.maxScrollY ? this.maxScrollY : this.y, this.scroller.style[K] = c + "ms", this.scroller.style[B] = "translate(" + this.x + "px," + this.y + "px) scale(" + b + ")" + H, this.zoomed = !1)
        },
        isReady: function() { return !this.moved && !this.zoomed && !this.animating }
    };
    s = null;
    return z
}(window, document);
var Scrollable = function(j, k) {
    function i() { i._enableScrolling.apply(this, arguments) }
    i.node = function() { return i._getScrollableNode.apply(this, arguments) };
    i.infinite = function() { return i._enableInfiniteScrolling.apply(this, arguments) };
    if (j && j.fn) {
        j.extend(j.fn, {
            scrollable: function(b) { this.forEach(function(c) { i._enableScrolling(c, b) }); return this },
            scrollableNode: function() { return j(this.map(function() { return i._getScrollableNode(this) })) },
            scrollableInfinite: function(c, b) {
                var d;
                this.forEach(function(e) { var f = i._enableInfiniteScrolling(e, c, b); if (!d) { d = f } });
                return d
            }
        });
        var n = j.fn.scrollTop,
            l = j.fn.scrollLeft;
        j.fn.scrollTop = function(b) {
            if (typeof b === "undefined") {
                var d = this[0],
                    c = i._isDOMNode(d);
                if (c && d._scrollTop) { return d._scrollTop() } else { if (n) { return n.apply(this, arguments) } else { if (c) { return d.scrollTop } else { return null } } }
            }
            this.forEach(function(f) { var e = i._isDOMNode(f); if (e && f._scrollTop) { f._scrollTop(b) } else { if (n) { n.call(j(f), b) } else { if (e) { f.scrollTop = b } } } });
            return this
        };
        j.fn.scrollLeft = function(b) {
            if (typeof b === "undefined") {
                var d = this[0],
                    c = i._isDOMNode(d);
                if (c && d._scrollLeft) { return d._scrollLeft() } else { if (n) { return l.apply(this, arguments) } else { if (c) { return d.scrollLeft } else { return null } } }
            }
            this.forEach(function(f) { var e = i._isDOMNode(f); if (e && f._scrollLeft) { f._scrollLeft(b) } else { if (l) { l.call(j(f), b) } else { if (e) { f.scrollLeft = b } } } });
            return this
        }
    }
    if (k && k.fn) {
        k.fn.scrollable = function(b) { this.each(function() { i._enableScrolling(this, b) }); return this };
        k.fn.scrollableNode = function() { return k(this.map(function() { return i._getScrollableNode(this) })) };
        k.fn.scrollableInfinite = function(c, b) {
            var d;
            this.each(function() { var e = i._enableInfiniteScrolling(this, c, b); if (!d) { d = e } });
            return d
        };
        var o = k.fn.scrollTop,
            m = k.fn.scrollLeft;
        k.fn.scrollTop = function(b) {
            if (typeof b === "undefined") { var c = this[0]; if (i._isDOMNode(c) && c._scrollTop) { return c._scrollTop() } else { return o.apply(this, arguments) } }
            this.each(function() { if (i._isDOMNode(this) && this._scrollTop) { this._scrollTop(b) } else { o.call(k(this), b) } });
            return this
        };
        k.fn.scrollLeft = function(b) {
            if (typeof b === "undefined") { var c = this[0]; if (i._isDOMNode(c) && c._scrollLeft) { return c._scrollLeft() } else { return m.apply(this, arguments) } }
            this.each(function() { if (i._isDOMNode(this) && this._scrollLeft) { this._scrollLeft(b) } else { m.call(k(this), b) } });
            return this
        }
    }
    return i
}(window.Zepto, window.jQuery);
Scrollable._os = function(i, k) {
    var l, h, m;
    if (m = /\bCPU.*OS (\d+(_\d+)?)/i.exec(i)) {
        l = "ios";
        h = m[1].replace("_", ".")
    } else {
        if (m = /\bAndroid (\d+(\.\d+)?)/.exec(i)) {
            l = "android";
            h = m[1]
        }
    }
    var j = { name: l, version: h && k(h), mobile: !!l };
    j[l] = true;
    return j
}(navigator.userAgent, parseFloat);
Scrollable._isArray = function(c) { return function(b) { if (c) { return c(b) } else { return Object.prototype.toString.call(b) !== "[object Array]" } } }(Array.isArray);
Scrollable._isDOMNode = function(d, e) { return function(b) { if (!b) { return false } try { return (b instanceof d) || (b instanceof e) } catch (c) {} if (typeof b !== "object") { return false } if (typeof b.nodeType !== "number") { return false } if (typeof b.nodeName !== "string") { return false } return true } }(Node, HTMLElement);
Scrollable._isjQueryElem = function(c) { if (typeof c !== "object" || c === null) { return false } else { return (c.val && c.addClass && c.css && c.html && c.show) } };
Scrollable._findInArray = function(c) { return function(j, h, b) { if (c) { return c.call(j, h, b) } for (var i = b || 0, k = j.length; i < k; i++) { if ((i in j) && (j[i] === h)) { return i } } return -1 } }(Array.prototype.indexOf);
Scrollable._forEachInArray = function(c) { return function(j, b, i) { if (c) { return c.call(j, b, i) } for (var h = 0, k = j.length; h < k; h++) { if (h in j) { b.call(i, j[h], h, j) } } } }(Array.prototype.forEach);
Scrollable._onReady = function(q, p, k) {
    var l = [],
        m = false;
    o(n);
    return function(b) { if (m) { b() } else { l.push(b) } };

    function n() {
        if (m) { return }
        m = true;
        k(l, function(b) { setTimeout(b, 0) })
    }

    function j(b) {
        try { q.documentElement.doScroll("left") } catch (c) { setTimeout(function() { j(b) }, 1); return }
        b()
    }

    function o(b) {
        if (q.readyState === "complete") { setTimeout(b, 0); return }
        if (q.addEventListener) {
            q.addEventListener("DOMContentLoaded", b, false);
            p.addEventListener("load", b, false)
        } else {
            if (q.attachEvent) {
                q.attachEvent("onreadystatechange", b);
                p.attachEvent("onload", b);
                var d = false;
                try { d = (p.frameElement === null) } catch (c) {}
                if (q.documentElement.doScroll && d) { setTimeout(function() { j(b) }, 0) }
            }
        }
    }
}(document, window, Scrollable._forEachInArray);
Scrollable._scrollWatcher = function(d) {
    return e;

    function e(t) {
        var s = false,
            x = false,
            q = t.scrollTop;
        t.addEventListener("touchstart", u);
        t.addEventListener("touchmove", y);
        t.addEventListener("touchcancel", v);
        t.addEventListener("touchend", b);
        t.addEventListener("scroll", r);
        c();
        t._resetScrolling = w;
        return;

        function c() { t._isScrolling = (x || s) }

        function w() {
            x = false;
            s = false;
            c()
        }

        function p(f, g, h) {
            if ((f.touches.length <= g) && ((typeof h === "undefined") || (f.changedTouches.length <= h))) { return false }
            f.preventDefault();
            w();
            return true
        }

        function u(f) {
            if (p(f, 1)) { return }
            w()
        }

        function y(f) {
            if (p(f, 1)) { return }
            s = true;
            q = t.scrollTop;
            c()
        }

        function v(f) {
            if (p(f, 0, 1)) { return }
            w()
        }

        function b(g) {
            if (p(g, 0, 1)) { return }
            var f;
            if (s) {
                f = Math.abs(t.scrollTop - q);
                if (f > 5) { x = true }
                s = false;
                c()
            }
        }

        function r() { if (!s && x) { w() } }
    }
}(Scrollable._os);
Scrollable._enableScrolling = function(C, t, x, D, E, s, v, u) {
    var y = z();
    return r;

    function z() { if ((C.ios && (C.version >= 5)) || (C.android && (C.version >= 4))) { return true } else { return false } }

    function r(b, c) {
        if (!t(b)) { throw b + " is not a DOM element" }
        if (b._scrollable) { return }
        b._scrollable = true;
        var d;
        b._scrollTop = function(f, e) {
            if (typeof f === "undefined") { return d ? Math.max(parseInt(-d.y), 0) : b.scrollTop }
            if (!d && (!C.mobile || y)) {
                b.scrollTop = f;
                e && e();
                return
            }
            x(function() {
                d.scrollTo(d.x, Math.min(-f, 0), 1);
                e && e()
            })
        };
        b._scrollLeft = function(e) {
            if (typeof e === "undefined") { return d ? Math.max(parseInt(-d.x), 0) : b.scrollLeft }
            if (!d && (!C.mobile || y)) { b.scrollLeft = e; return }
            x(function() { d.scrollTo(Math.min(-e, 0), d.y, 1) })
        };
        b.style.overflow = "scroll";
        b.style.overflowX = "hidden";
        if (!c) { if (!C.mobile) { return } if (y) { b.style["-webkit-overflow-scrolling"] = "touch"; if (C.ios) { E(b) } return } }
        F(b, function(e) { d = e })
    }

    function F(c, b) {
        c._iScroll = true;
        w(c);
        var d = B(c);
        x(function() {
            var e = new s(c, {
                checkDOMChanges: true,
                useTransform: true,
                useTransition: true,
                hScrollbar: false,
                vScrollbar: false,
                bounce: !!C.ios,
                onScrollMove: d,
                onBeforeScrollEnd: d,
                onScrollEnd: function() {
                    c._iScrolling = false;
                    d()
                },
                onBeforeScrollStart: A,
                onScrollStart: function() { c._iScrolling = true }
            });
            c._iScroll = e;
            b(e)
        })
    }

    function w(c) {
        var b = u.createElement("div"),
            d = Array.prototype.slice.call(c.childNodes || []);
        D(d, function(e) {
            var f = c.removeChild(e);
            b.appendChild(f)
        });
        c.appendChild(b);
        c.style.position = "relative";
        b.style["min-height"] = "100%";
        b.style["min-width"] = "100%"
    }

    function B(c) {
        var d, b;
        return function() {
            var e = c._scrollTop(),
                f = c._scrollLeft();
            if ((e === d) && (f === b)) { return }
            d = e;
            b = f;
            G(c)
        }
    }

    function G(b) {
        if (b.dispatchEvent) {
            var c = u.createEvent("MouseEvents");
            c.initMouseEvent("scroll", false, false, v, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            b.dispatchEvent(c)
        }
    }

    function A(b) { var c = b.target; while (c.nodeType !== 1) { c = c.parentNode } if ((c.tagName !== "SELECT") && (c.tagName !== "INPUT") && (c.tagName !== "TEXTAREA")) { b.preventDefault() } }
}(Scrollable._os, Scrollable._isDOMNode, Scrollable._onReady, Scrollable._forEachInArray, Scrollable._scrollWatcher, iScroll, window, document);
Scrollable._getScrollableNode = function(c) { return function(b) { if (c(b) && b._iScroll) { return b.childNodes[0] } else { return b } } }(Scrollable._isDOMNode);
Scrollable._enableInfiniteScrolling = function(v, q, w, u, t, p, y, o) {
    var x = 320;
    return s;

    function s(f, R, e) {
        if (w(f)) { if (f.length) { var n = f.length - 1; for (var m = 0; m < n; m++) { s(f[m], R, e) } return s(f[n], R, e) } else { return } }
        if (!q(f)) { throw f + " is not a DOM element" }
        if (!e && typeof R === "function") {
            e = R;
            R = {}
        }
        if (e) {
            if (R.downGenerator) { throw Error("Two downGenerator functions specified") }
            R.downGenerator = e
        }
        if ((typeof R !== "object") || (R === null)) { throw TypeError("options must be an object if defined, got " + R) }
        if (!R.downGenerator && !R.upGenerator) { throw Error("No generators specified. What are you even scrolling?") }
        if (typeof R.autoStart === "undefined") { R.autoStart = true }
        if (R.downGenerator && typeof R.downGenerator !== "function") { throw "downGenerator " + downGenerator + " is not a function" }
        if (R.upGenerator && typeof R.upGenerator !== "function") { throw "upGenerator " + upGenerator + " is not a function" }
        if (R.scroller && !q(R.scroller)) { throw TypeError("options.scroller must be a DOM node, got " + R.scroller) }
        var h = R.scroller || A(f),
            L = R.loading,
            M = R.triggerRadius,
            g = false,
            c = !R.upGenerator,
            k = !R.downGenerator,
            Q = false,
            b = false,
            P, d, i;
        if (w(h)) { h = h[0] }
        if (w(L)) { L = L[0] }
        if (L === null) { L = undefined }
        if (typeof L !== "undefined") { if (R.downGenerator) { P = z([L])[0]; if (R.downGenerator) { d = P.cloneNode(true) } } else { d = z([L])[0] } }
        if (M === null) { M = undefined }
        switch (typeof M) {
            case "undefined":
                M = x;
            case "number":
                break;
            default:
                throw TypeError("trigger radius must be a number if defined, got " + M)
        }
        if (!h) {
            p(f);
            h = f
        }
        if (P) { y(f).appendChild(P) }
        N();
        if (R.autoStart) { T() }
        return { layout: T, forceLayout: j, enable: N, disable: l, destroy: S };

        function N() {
            if (g) { return }
            if (Q) { throw Error("cannot enable infinite scroller that has been destroyed") }
            g = true;
            h.addEventListener("scroll", T, false)
        }

        function l() {
            if (!g) { return }
            g = false;
            h.removeEventListener("scroll", T)
        }

        function T() {
            if (!g || b || Q) { return }
            var C = U(h, M);
            if (!C) { return }
            var B = (C === "up");
            if (B && (f._isScrolling || f._iScrolling)) {
                if (i) { clearTimeout(i) }
                i = setTimeout(function() { T() }, 100);
                return
            }
            b = true;
            O(B, function(D) { b = false; if (D) { T() } else { S(B) } })
        }

        function j(B) {
            if (!g || Q || b) { return }
            b = true;
            if (typeof B === "undefined") { B = !R.downGenerator }
            O(B, function(C) { b = false; if (C) { T() } else { S(B) } })
        }

        function O(E, C) {
            var D = E ? R.upGenerator : R.downGenerator;
            var B = D(G);
            if (typeof B !== "undefined") { G(B) }

            function G(Z, I) {
                if (Q || (c && E) || (k && !E)) { return }
                var ab = E ? d : P;
                var aa = Z && Z.length && !I;
                if (Z) {
                    if (!u(Z) && !w(Z)) { Z = [Z] }
                    Z = z(Z);
                    var H = y(f);
                    var J = h.scrollHeight;
                    t(Z, function(V) { F(H, V) });
                    if (ab) { F(H, ab) }
                    var K = h.scrollHeight;
                    if (E) {
                        var ac = K - J;
                        h._scrollTop(h._scrollTop() + ac, function() {
                            if (!!v.ios && !h._iScroll) { r(Z) }
                            C(aa)
                        })
                    } else { C(aa) }
                } else { C(aa) }
            }

            function F(H, I) { if (E) { H.insertBefore(I, H.firstChild) } else { H.appendChild(I) } }
        }

        function S(B) {
            if (Q) { return }
            if (B) { c = true; if (d && d.parentNode) { d.parentNode.removeChild(d) } } else { k = true; if (P && P.parentNode) { P.parentNode.removeChild(P) } }
            Q = (k || !R.downGenerator) && (c || !R.upGenerator);
            if (Q) { l() }
        }

        function U(G, B) {
            var D = G;
            while (D !== document.documentElement) { if (D.parentNode) { D = D.parentNode } else { return false } }
            var F = G.clientHeight,
                C = (G._scrollTop ? G._scrollTop() : G.scrollTop),
                E = G.scrollHeight;
            if (!k && E - C - F <= B) { return "down" } else { if (!c && C < B) { return "up" } else { return false } }
        }
    }

    function A(b) {
        do {
            if (b._scrollable) { return b }
            b = b.parentNode
        } while (b)
    }

    function z(c) {
        var b = [];
        t(c, function(e) {
            switch (typeof e) {
                case "undefined":
                    return;
                case "string":
                    var d = document.createElement("div");
                    d.innerHTML = e;
                    if (d.childNodes) { t(z(d.childNodes), function(f) { b.push(f) }) }
                    return;
                case "object":
                    if (e === null) { return } else { if (q(e)) { b.push(e); return } else { if (w(e)) { t(e, function(f) { b.push(f) }); return } } }
                default:
                    throw TypeError("expected an element, got " + e)
            }
        });
        return b
    }

    function r(b) {
        t(b, function(c) {
            var d = c.style.webkitTransform;
            c.style.webkitTransform = "translate3d(0,0,0)";
            setTimeout(function() { c.style.webkitTransform = d }, 0)
        })
    }
}(Scrollable._os, Scrollable._isDOMNode, Scrollable._isjQueryElem, Scrollable._isArray, Scrollable._forEachInArray, Scrollable._enableScrolling, Scrollable._getScrollableNode, window.jQuery);
window.App = function(c) {
    var d = { noConflict: b };
    return d;

    function b() { if (window.App === d) { window.App = c } return d }
}(window.App);
App._Utils = function(m, o, d) {
    var n = function(w) {
        var u = /([^&=]+)=([^&]+)/g,
            s = /\+/g;
        var r = {},
            q, t, v;
        if (w) {
            w = w.replace(s, "%20");
            while ((q = u.exec(w))) {
                t = decodeURIComponent(q[1]);
                v = decodeURIComponent(q[2]);
                r[t] = v
            }
        }
        return r
    }(m.location.href.split("?")[1]);
    var f = function(v) {
        var t = false,
            s, q, r;
        if (n._app_platform === "android") {
            t = true;
            s = "android";
            q = "4.4"
        } else {
            if (n._app_platform === "ios") {
                t = true;
                s = "ios";
                q = "7.0"
            } else {
                if (r = /\bCPU.*OS (\d+(_\d+)?)/i.exec(v)) {
                    s = "ios";
                    q = r[1].replace("_", ".")
                } else {
                    if (r = /\bAndroid (\d+(\.\d+)?)/.exec(v)) {
                        s = "android";
                        q = r[1]
                    }
                }
            }
        }
        var u = { faked: t, name: s, versionString: q, version: q && parseFloat(q) };
        u[s] = true;
        if (u.ios) { o.body.className += " app-ios app-ios-" + parseInt(q) } else { if (u.android) { o.body.className += " app-android app-android-" + parseInt(q) } }
        if (u.faked || !u.ios) { o.body.className += " app-no-scrollbar" }
        return u
    }(navigator.userAgent);
    var l = function(q) { if (q) { return function(r, t, s) { return q.call(r, t, s) } } else { return function(s, v, t) { for (var u = 0, r = s.length; u < r; u++) { if (u in s) { v.call(t, s[u], u, s) } } } } }(Array.prototype.forEach);

    function j(q) { if (Array.isArray) { return Array.isArray(q) } else { return Object.prototype.toString.call(q) !== "[object Array]" } }

    function p(r) { if (!r) { return false } try { return (r instanceof Node) || (r instanceof HTMLElement) } catch (q) {} if (typeof r !== "object") { return false } if (typeof r.nodeType !== "number") { return false } if (typeof r.nodeName !== "string") { return false } return true }

    function c(q) { if (typeof q !== "object" || q === null) { return false } else { return (q.val && q.addClass && q.css && q.html && q.show) } }

    function k(r) {
        if (o.readyState === "complete") { setTimeout(function() { r() }, 0); return }
        m.addEventListener("load", q, false);

        function q() {
            m.removeEventListener("load", q);
            setTimeout(function() { r() }, 0)
        }
    }

    function h(r, q) {
        r.style["-webkit-transform"] = q;
        r.style["-moz-transform"] = q;
        r.style["-ms-transform"] = q;
        r.style["-o-transform"] = q;
        r.style.transform = q
    }

    function e(q, r) {
        if (r) {
            q.style["-webkit-transition"] = "-webkit-" + r;
            q.style["-moz-transition"] = "-moz-" + r;
            q.style["-ms-transition"] = "-ms-" + r;
            q.style["-o-transition"] = "-o-" + r;
            q.style.transition = r
        } else {
            q.style["-webkit-transition"] = "";
            q.style["-moz-transition"] = "";
            q.style["-ms-transition"] = "";
            q.style["-o-transition"] = "";
            q.style.transition = ""
        }
    }

    function i(r, s) { var q; if (s) { q = r.style } else { q = o.defaultView.getComputedStyle(r, null) } return { display: q.display, opacity: q.opacity, paddingRight: q.paddingRight, paddingLeft: q.paddingLeft, marginRight: q.marginRight, marginLeft: q.marginLeft, borderRightWidth: q.borderRightWidth, borderLeftWidth: q.borderLeftWidth, top: q.top, left: q.left, height: q.height, width: q.width, position: q.position } }

    function g(r) { var q = i(r); return (q.display !== "none" && q.opacity !== "0") }

    function b(u, t, x, w) {
        if (typeof u.length !== "number") { u = [u] }
        var s = u.map(function(y) { return y.elem.style.opacity });
        q(function() { v(function() { r(function() { w() }) }) });

        function q(y) {
            l(u, function(z) { if (typeof z.transitionStart !== "undefined") { h(z.elem, z.transitionStart) } if (typeof z.opacityStart !== "undefined") { z.elem.style.opacity = z.opacityStart + "" } });
            setTimeout(function() {
                l(u, function(B) {
                    var z = B.easing || x,
                        A = "transform " + (t / 1000) + "s " + z + ", opacity " + (t / 1000) + "s " + z;
                    e(B.elem, A)
                });
                setTimeout(y, 0)
            }, 0)
        }

        function v(B) {
            l(u, function(C) { if (typeof C.transitionEnd !== "undefined") { h(C.elem, C.transitionEnd) } if (typeof C.opacityEnd !== "undefined") { C.elem.style.opacity = C.opacityEnd + "" } });
            var A = u[u.length - 1];
            A.elem.addEventListener("webkitTransitionEnd", z, false);
            A.elem.addEventListener("transitionend", z, false);
            A.elem.addEventListener("onTransitionEnd", z, false);
            A.elem.addEventListener("ontransitionend", z, false);
            A.elem.addEventListener("MSTransitionEnd", z, false);
            A.elem.addEventListener("transitionend", z, false);
            var y = false;

            function z(C) {
                if (y || (C.target !== A.elem)) { return }
                y = true;
                l(u, function(D) {
                    A.elem.removeEventListener("webkitTransitionEnd", z);
                    A.elem.removeEventListener("transitionend", z);
                    A.elem.removeEventListener("onTransitionEnd", z);
                    A.elem.removeEventListener("ontransitionend", z);
                    A.elem.removeEventListener("MSTransitionEnd", z);
                    A.elem.removeEventListener("transitionend", z)
                });
                B()
            }
        }

        function r(y) {
            l(u, function(z) { e(z.elem, "") });
            setTimeout(function() {
                l(u, function(A, z) {
                    h(A.elem, "");
                    A.elem.style.opacity = s[z]
                });
                y()
            }, 0)
        }
    }
    d.platform = f.name;
    d.platformVersion = f.version;
    return { query: n, os: f, ready: k, forEach: l, isArray: j, isNode: p, isjQueryElem: c, setTransform: h, setTransition: e, animate: b, getStyles: i, isVisible: g }
}(window, document, App);
App._Events = function(g) {
    var b = "__appjsCustomEventing";
    var e = c();
    return { init: f, fire: d };

    function c() {
        try {
            var j = document.createElement("div"),
                h = document.createEvent("CustomEvent");
            h.initEvent("fooBarFace", false, true);
            j.dispatchEvent(h);
            return true
        } catch (i) { return false }
    }

    function f(k, l) {
        if (e) { return }
        if (k[b]) { g.forEach(l, k[b].addEventType); return }
        k[b] = { fire: h, addEventType: i, addEventListener: k.addEventListener, removeEventListener: k.removeEventListener };
        var j = {};
        g.forEach(l, function(m) { j[m] = [] });

        function i(m) {
            if (l.indexOf(m) !== -1) { return }
            l.push(m);
            j[m] = []
        }

        function h(n) {
            if (l.indexOf(n) === -1) { return false }
            var o = false,
                m = { preventDefault: function() { o = true } };
            g.forEach(j[n], function(p) { setTimeout(function() { if (p.call(k, m) === false) { o = true } }, 0) });
            return !o
        }
        k.addEventListener = function(m, n) { if (l.indexOf(m) === -1) { k[b].addEventListener.apply(this, arguments); return } var o = j[m]; if (o.indexOf(n) === -1) { o.push(n) } };
        k.removeEventListener = function(n, o) {
            if (l.indexOf(n) === -1) { k[b].removeEventListener.apply(this, arguments); return }
            var p = j[n],
                m = p.indexOf(o);
            if (m !== -1) { p.splice(m, 1) }
        }
    }

    function d(j, i) {
        if (j[b]) { return j[b].fire(i) } else {
            var h = document.createEvent("CustomEvent");
            h.initEvent(i, false, true);
            return j.dispatchEvent(h)
        }
    }
}(App._Utils);
App._Metrics = function(f, e) {
    var b = false;
    e.enableGoogleAnalytics = function() { g() };
    return { watchPage: c };

    function g() { b = true }

    function d(h, i) { if (!b) { return } var j = "/" + h; if (typeof i !== "undefined") { j += "/" + i } if (typeof f.ga === "function") { f.ga("send", "pageview", j); return } if (!f._gaq) { f._gaq = [] } if (typeof f._gaq.push === "function") { f._gaq.push(["_trackPageview", j]) } }

    function c(k, i, h) {
        var j;
        if ((typeof h === "object") && (typeof h.id !== "undefined")) { j = h.id + "" }
        k.addEventListener("appShow", function() { d(i, j) }, false)
    }
}(window, App);
App._Dialog = function(f, j, m, d, e) {
    var g = "app-dialog-visible";
    var i, l;
    d.dialog = function(o, q) {
        if ((typeof o !== "object") || (o === null)) { throw TypeError("dialog options must be an object, got " + o) }
        switch (typeof o.dark) {
            case "undefined":
            case "boolean":
                break;
            default:
                throw TypeError("dialog dark mode must a boolean if defined, got " + o.dark)
        }
        switch (typeof o.title) {
            case "undefined":
            case "string":
                break;
            default:
                throw TypeError("dialog title must be a string if defined, got " + o.title)
        }
        switch (typeof o.text) {
            case "undefined":
            case "string":
                break;
            default:
                if (!e.isNode(o.text)) { throw TypeError("dialog text must be a string if defined, got " + o.text) }
        }
        for (var p in o) {
            if ((p !== "dark") && (p !== "rawText") && (p !== "text")) {
                switch (typeof o[p]) {
                    case "undefined":
                    case "string":
                        break;
                    default:
                        throw TypeError("dialog button (" + p + ") must be a string if defined, got " + o[p])
                }
            }
        }
        switch (typeof q) {
            case "undefined":
                q = function() {};
            case "function":
                break;
            default:
                throw TypeError("callback must be a function if defined, got " + q)
        }
        return k(o, q)
    };
    d.dialog.close = function(o) { return c(o || false) };
    d.dialog.status = function() { return h() };
    return d.dialog;

    function n(w, u) {
        var r = j.createElement("div");
        r.className += " app-dialog-container";
        if (e.os.ios && (e.os.version <= 5)) { r.className += " ios5" }
        if (!e.os.android || (e.os.version >= 4)) { r.addEventListener("touchstart", function(y) { if (y.target === r) { y.preventDefault() } }, false) }
        if (w.cancelButton) { r.addEventListener("touchstart", function(y) { if (y.target === r) { c() } }, false) }
        var q = j.createElement("div");
        q.className = "app-dialog";
        if (w.dark) { q.className += " dark" }
        r.appendChild(q);
        if (w.title) {
            var s = j.createElement("div");
            s.className = "title";
            s.textContent = w.title;
            q.appendChild(s)
        }
        if (w.text || w.rawText) {
            var v = j.createElement("div");
            v.className = "text";
            if (e.isNode(w.text)) { v.appendChild(w.text) } else { if (w.rawText) { v.innerHTML = w.rawText } else { v.textContent = w.text } }
            q.appendChild(v)
        }
        var ps = j.createElement('div');
        ps.className = "actions";
        q.appendChild(ps);
        for (var t in w) {
            if (w[t] && (t.substr(t.length - 6) === "Button") && (t !== "okButton") && (t !== "cancelButton")) {
                var x = t.substr(0, t.length - 6);
                p = j.createElement("div");
                p.className = "button";
                p.setAttribute("data-button", x);
                p.textContent = w[t];
                m(p);
                p.addEventListener("click", o, false);
                ps.appendChild(p)
            }
        }
        if (w.cancelButton) {
            var p = j.createElement("div");
            p.className = "button cancel";
            p.setAttribute("data-button", "cancel");
            p.textContent = w.cancelButton;
            m(p);
            p.addEventListener("click", o, false);
            ps.appendChild(p)
        }
        if (w.okButton) {
            var p = j.createElement("div");
            p.className = "button ok";
            p.setAttribute("data-button", "ok");
            p.textContent = w.okButton;
            m(p);
            p.addEventListener("click", o, false);
            ps.appendChild(p)
        }

        function o() {
            var y = this.getAttribute("data-button");
            if (y === "cancel") { y = false }
            u(y)
        }
        return r
    }

    function k(q, u, s) {
        if (l && !s) { l.push([q, u]); return }
        l = l || [];
        var t = false,
            r = n(q, p),
            o = r.firstChild;
        i = p;
        if (e.os.ios) { r.className += " fancy" }
        j.body.appendChild(r);
        setTimeout(function() {
            r.className += " enabled";
            j.body.className += " " + g
        }, 50);

        function p(v) {
            if (t) { return }
            t = true;
            if ((typeof v !== "string") && !q.cancelButton) { t = false; return true }
            i = null;
            r.className = r.className.replace(/\benabled\b/g, "");
            j.body.className = j.body.className.replace(new RegExp("\\b" + g + "\\b", "g"), "");
            setTimeout(function() {
                b();
                u(v)
            }, 0);
            setTimeout(function() { try { r.parentNode.removeChild(r) } catch (w) {} }, 600);
            return true
        }
    }

    function c(o) { if (i) { return i(o || false) } }

    function h() { return !!i }

    function b() {
        if (!l) { return }
        if (!l.length) { l = null; return }
        var o = l.shift();
        o.push(true);
        k.apply(f, o)
    }
}(window, document, Clickable, App, App._Utils);
App._Form = function(e, b, d, f) {
    d.form = function(g, h) {
        if (f.isjQueryElem(g)) { g.each(function() { d.form(this, h) }); return }
        if (!f.isNode(g)) { throw TypeError("form must be a DOM node, got " + g) }
        if (typeof h !== "function") { throw TypeError("callback must be a function, got " + h) }
        c(g, h)
    };
    return {};

    function c(j, m) {
        var l = (j.nodeName === "FORM"),
            h = false,
            i;
        if (l) {
            var k = b.createElement("input");
            k.style.display = "none";
            k.type = "submit";
            j.appendChild(k);
            j.addEventListener("submit", function(n) {
                n.preventDefault();
                g()
            }, false);
            i = j.querySelectorAll(".app-submit")
        } else { i = [j] }
        f.forEach(i, function(n) {
            if (n.nodeName === "TEXTAREA") { isText = true } else {
                if (n.nodeName !== "INPUT") { isText = false } else {
                    switch ((n.type || "").toLowerCase()) {
                        case "button":
                        case "submit":
                        case "reset":
                        case "hidden":
                            isText = false;
                            break;
                        default:
                            isText = true;
                            break
                    }
                }
            }
            if (isText) {
                n.addEventListener("keydown", function(o) {
                    if (o.which === 13) {
                        o.preventDefault();
                        g()
                    }
                }, false)
            } else {
                n.addEventListener("click", function(o) {
                    o.preventDefault();
                    g()
                }, false)
            }
        });

        function g() {
            if (h) { return }
            h = true;
            j.disabled = true;
            var p = {},
                o = l ? j.querySelectorAll("[name]") : [j],
                n = false;
            if (l) { f.forEach(j.querySelectorAll("[name]"), function(q) { p[q.name] = q.value }) } else { p.value = j.value; if (j.name) { p[j.name] = j.value } }
            f.forEach(o, function(q) { q.disabled = true; if (q.blur) { q.blur() } });
            if (l && j.blur) { j.blur() }
            m.call(this, p, function() {
                if (n) { return }
                n = true;
                f.forEach(o, function(q) { q.disabled = false });
                h = false;
                j.disabled = false
            })
        }
    }
}(window, document, App, App._Utils);
App._Scroll = function(d, c, m) {
    var p = { APP_CONTENT: "app-content", APP_SCROLLABLE: "app-scrollable", APP_SCROLLHACK: "app-scrollhack", NO_SCROLL: "data-no-scroll", SCROLLABLE: "data-scrollable", LAST_SCROLL: "data-last-scroll", SCROLL_STYLE: "data-scroll-style", TOUCH_SCROLL: "-webkit-overflow-scrolling" },
        h = "__appjsPageManager";
    c.infiniteScroll = function(v, t, w) { if (m.isjQueryElem(v)) { if (v.length) { var s = v.length - 1; for (var u = 0; u < s; u++) { c.infiniteScroll(v[u], t, w) } return c.infiniteScroll(v[s], t, w) } else { return } } if (!m.isNode(v)) { throw TypeError("infinite scroll container must be a DOM node, got " + v) } return i(v, t, w) };
    return { setup: l, disable: o, saveScrollPosition: f, saveScrollStyle: j, restoreScrollPosition: g, restoreScrollStyle: b };

    function l(s) {
        m.forEach(s.querySelectorAll("." + p.APP_CONTENT), function(t) { if (t.getAttribute(p.NO_SCROLL) === null) { q(t) } });
        m.forEach(s.querySelectorAll("[" + p.SCROLLABLE + "]"), function(t) { q(t) })
    }

    function q(t) {
        var s = !!window.APP_FORCE_ISCROLL;
        d(t, s);
        t.className += " " + p.APP_SCROLLABLE;
        if (!s && m.os.ios && m.os.version < 6) { t.className += " " + p.APP_SCROLLHACK }
    }

    function o(s) { m.forEach(s.querySelectorAll("*"), function(t) { t.style[p.TOUCH_SCROLL] = "" }) }

    function n(t) { var s = []; if (t) { m.forEach(t.querySelectorAll("." + p.APP_SCROLLABLE), function(u) { if (u._scrollable) { s.push(u) } }) } return s }

    function f(s) {
        m.forEach(n(s), function(t) {
            if (t._iScroll) { return }
            var u = t._scrollTop();
            t.setAttribute(p.LAST_SCROLL, u + "")
        })
    }

    function j(s) {
        m.forEach(n(s), function(u) {
            if (u._iScroll) { return }
            var t = u.style[p.TOUCH_SCROLL] || "";
            u.style[p.TOUCH_SCROLL] = "";
            u.setAttribute(p.SCROLL_STYLE, t)
        })
    }

    function g(s, t) { m.forEach(n(s), function(u) { if (u._iScroll) { return } var v = parseInt(u.getAttribute(p.LAST_SCROLL)); if (v) { if (!t) { setTimeout(function() { u._scrollTop(v) }, 0) } else { u._scrollTop(v) } } }) }

    function b(s) {
        m.forEach(n(s), function(u) { if (u._iScroll) { return } var t = u.getAttribute(p.SCROLL_STYLE) || ""; if (t) { u.style[p.TOUCH_SCROLL] = t } });
        g(s, true)
    }

    function i(w, v, y) {
        var x = e(w),
            u = r(x);
        if (!x || !u) { throw Error("could not find parent app-page") }
        if (!v) { v = {} }
        if (typeof v.autoStart !== "boolean") { v.autoStart = false }
        if (typeof v.scroller === "undefined") { v.scroller = k(w) }
        var s = d.infinite(w, v, y),
            t = false;
        m.ready(function() {
            if (!t) {
                s.enable();
                s.forceLayout();
                s.disable()
            }
        });
        u.ready(function() {
            t = true;
            try { s.enable() } catch (z) { return }
            s.layout();
            x.addEventListener("appShow", function() { s.layout() });
            x.addEventListener("appDestroy", function() { s.destroy() })
        });
        return s
    }

    function e(t) {
        var s = t;
        do { if (/\bapp\-page\b/.test(s.className)) { return s } } while (s = s.parentNode)
    }

    function k(t) {
        var s = t;
        do { if (/\bapp\-content\b/.test(s.className)) { return s } } while (s = s.parentNode)
    }

    function r(s) { if (s) { return s[h] } }
}(Scrollable, App, App._Utils);
(function(k, d, i) {
    var g = {};
    if (d.platform === "ios" && d.platformVersion >= 5 && !i.os.faked && (typeof kik !== "object" || kik === null || !kik.enabled)) { h() }
    return;

    function h() {
        k.addEventListener("touchstart", function(m) { var l = c(m); if (l && !l._iScroll) { if ((l.scrollHeight - l.clientHeight > 1) && ((l.scrollTop <= 0) || (l.scrollTop + l.clientHeight >= l.scrollHeight))) { e(m) } } });
        k.addEventListener("touchmove", function(m) {
            var l = c(m);
            if (!l) { m.preventDefault() } else {
                if (l._iScroll) { m.preventDefault() } else {
                    if (m.changedTouches) {
                        if (m.changedTouches.length === 1) { b(m) }
                        j(m)
                    }
                }
            }
        });
        k.addEventListener("touchcancel", function(l) { f(l) });
        k.addEventListener("touchend", function(l) { f(l) })
    }

    function c(m) { var l = m.target; if (l) { do { if (l._scrollable) { break } } while (l = l.parentNode) } return l }

    function b(o) {
        var n = c(o),
            p = o.changedTouches[0],
            m = g[p.identifier],
            l = p.pageY;
        if (n && typeof m !== "undefined") { if (n.scrollTop <= 0) { if (m > l) { delete g[p.identifier] } else { o.preventDefault() } } else { if (n.scrollTop + n.clientHeight >= n.scrollHeight) { if (m < l) { delete g[p.identifier] } else { o.preventDefault() } } else { delete g[p.identifier] } } }
    }

    function e(o) { if (o.changedTouches) { for (var n = 0, m = o.changedTouches.length; n < m; n++) { g[o.changedTouches[n].identifier] = o.changedTouches[n].pageY } } }

    function j(o) { if (o.changedTouches) { for (var n = 0, m = o.changedTouches.length; n < m; n++) { if (o.changedTouches[n].identifier in g) { g[o.changedTouches[n].identifier] = o.changedTouches[n].pageY } } } }

    function f(p) { if (p.changedTouches) { for (var n = 0, m = p.changedTouches.length; n < m; n++) { delete g[p.changedTouches[n].identifier] } } if (p.touches) { var o = []; for (var n = 0, m = p.touches.length; n < m; n++) { o.push(p.touches[n].identifier + "") } for (var q in g) { if (o.indexOf(q) === -1) { delete g[q] } } } }
})(document, App, App._Utils);
App._Pages = function(J, e, n, Q, G, H, R, D, p) {
    var x = "data-page",
        r = "app-page",
        l = "app-loaded",
        O = "app-ios-statusbar",
        i = "__appjsFlushReadyQueue",
        F = "__appjsPageManager",
        b = { SHOW: "show", HIDE: "hide", BACK: "back", FORWARD: "forward", BEFORE_BACK: "beforeBack", READY: "ready", DESTROY: "destroy", LAYOUT: "layout", ONLINE: "online", OFFLINE: "offline" };
    var v = false,
        C = !!J.APP_FORCE_ISCROLL,
        c = {},
        u = {},
        s = {},
        N = false;
    h();
    if (J.APP_ENABLE_IOS_STATUSBAR) { T() }
    G.add = function(U, V) {
        if (typeof U !== "string") {
            V = U;
            U = undefined
        }
        if (!H.isNode(V)) { throw TypeError("page template node must be a DOM node, got " + V) }
        q(V, U)
    };
    G.controller = function(U, V, W) {
        if (typeof U !== "string") { throw TypeError("page name must be a string, got " + U) }
        if (typeof V !== "function") { throw TypeError("page controller must be a function, got " + V) }
        switch (typeof W) {
            case "undefined":
                W = function() {};
                break;
            case "function":
                break;
            default:
                throw TypeError("page cleanup handler must be a function, got " + W)
        }
        if (V) { I(U, V) }
        if (W) { w(U, W) }
    };
    G.populator = G.controller;
    G.generate = function(U, V) {
        if (typeof U !== "string") { throw TypeError("page name must be a string, got " + U) }
        switch (typeof V) {
            case "undefined":
                V = {};
                break;
            case "object":
                break;
            default:
                throw TypeError("page arguments must be an object if defined, got " + V)
        }
        return L(U, V)
    };
    G.destroy = function(U) { if (!H.isNode(U)) { throw TypeError("page node must be a DOM node, got " + U) } return g(U) };
    G._layout = z;
    G._enableIOSStatusBar = T;
    return { EVENTS: b, has: M, createManager: y, startGeneration: d, finishGeneration: m, fire: B, startDestruction: A, finishDestruction: k, fixContent: f, populateBackButton: o };

    function t() {
        if (v) { return }
        v = true;
        var V = e.getElementsByClassName(r);
        for (var U = V.length; U--;) { q(V[U]) }
        e.body.className += " " + l
    }

    function q(V, U) {
        if (!U) { U = V.getAttribute(x) }
        if (!U) { throw TypeError("page name was not specified") }
        V.setAttribute(x, U);
        if (V.parentNode) { V.parentNode.removeChild(V) }
        c[U] = V.cloneNode(true)
    }

    function M(U) { t(); return (U in c) }

    function S(U) { if (!M(U)) { throw TypeError(U + " is not a known page") } return c[U].cloneNode(true) }

    function I(U, V) { u[U] = V }

    function w(U, V) { s[U] = V }

    function K(U, X, Y, W) {
        var V = u[U];
        if (!V) { return }
        for (var Z in V) { X[Z] = V[Z] }
        for (var Z in V.prototype) { X[Z] = V.prototype[Z] }
        X.page = Y;
        X.args = W;
        V.call(X, Y, W)
    }

    function j(U, W, Y, V) {
        var X = s[U];
        if (X) { X.call(W, Y, V) }
        B(W, Y, b.DESTROY)
    }

    function y(W) {
        var U = { restored: W, showing: false, online: navigator.onLine };
        var V = [];
        U.ready = function(X) { if (typeof X !== "function") { throw TypeError("ready must be called with a function, got " + X) } if (V) { V.push(X) } else { X.call(U) } };
        U[i] = function() {
            H.ready(function() {
                if (!V) { return }
                var X = V.slice();
                V = null;
                if (H.isNode(U.page)) { B(U, U.page, b.READY) }
                H.forEach(X, function(Y) { Y.call(U) })
            })
        };
        return U
    }

    function L(U, W) {
        var V = {},
            X = d(U, V, W);
        m(U, V, X, W);
        return X
    }

    function g(V) {
        var U = V.getAttribute(x);
        A(U, {}, V, {});
        k(U, {}, V, {})
    }

    function d(U, X, W) {
        var Y = S(U);
        var Z = [];
        for (var V in b) { Z.push(E(b[V])) }
        R.init(Y, Z);
        D.watchPage(Y, U, W);
        Y[F] = X;
        f(Y);
        H.forEach(Y.querySelectorAll(".app-button"), function(aa) {
            if (aa.getAttribute("data-no-click") !== null) { return }
            n(aa);
            aa.addEventListener("click", function() {
                var ai = aa.getAttribute("data-target"),
                    ae = aa.getAttribute("data-target-args"),
                    ab = (aa.getAttribute("data-back") !== null),
                    ah = (aa.getAttribute("data-manual-back") !== null),
                    ac;
                try { ac = JSON.parse(ae) } catch (ag) {}
                if ((typeof ac !== "object") || (ac === null)) { ac = {} }
                if (!ab && !ai) { return }
                if (ab && ah) { return }
                var af = aa.getAttribute("data-clickable-class");
                if (af) {
                    aa.disabled = true;
                    aa.classList.add(af)
                }
                if (ab) { G.back(ad) } else { if (ai) { G.load(ai, ac, {}, ad) } }

                function ad() {
                    if (af) {
                        aa.disabled = false;
                        aa.classList.remove(af)
                    }
                }
            }, false)
        });
        K(U, X, Y, W);
        Y.addEventListener(E(b.SHOW), function() { setTimeout(function() { if (typeof X[i] === "function") { X[i]() } }, 0) }, false);
        return Y
    }

    function B(V, X, W) {
        var U = E(W),
            Y = P(W),
            Z = true;
        if (!R.fire(X, U)) { Z = false }
        if (typeof V[Y] === "function") { if (V[Y]() === false) { Z = false } }
        return Z
    }

    function E(U) { return "app" + U[0].toUpperCase() + U.slice(1) }

    function P(U) { return "on" + U[0].toUpperCase() + U.slice(1) }

    function m(U, W, X, V) { p.setup(X) }

    function A(U, W, X, V) {
        if (!H.os.ios || H.os.version < 6) { p.disable(X) }
        if (typeof W.reply === "function") {
            W._appNoBack = true;
            W.reply()
        }
    }

    function k(U, W, X, V) { j(U, W, X, V) }

    function h() {
        J.addEventListener("orientationchange", z);
        J.addEventListener("resize", z);
        J.addEventListener("load", z);
        setTimeout(z, 0);
        J.addEventListener("online", function() {
            if (G._Stack) {
                H.forEach(G._Stack.get(), function(U) {
                    U[2].online = true;
                    B(U[2], U[3], b.ONLINE)
                })
            }
        }, false);
        J.addEventListener("offline", function() {
            if (G._Stack) {
                H.forEach(G._Stack.get(), function(U) {
                    U[2].online = false;
                    B(U[2], U[3], b.OFFLINE)
                })
            }
        }, false)
    }

    function z() {
        f();
        var U;
        if (G._Stack) { U = G._Stack.getCurrent() }
        if (U) { B(U[2], U[3], b.LAYOUT) }
        setTimeout(f, 0);
        setTimeout(f, 10);
        setTimeout(f, 100)
    }

    function f(Z) {
        if (!Z) { if (G._Navigation) { Z = G._Navigation.getCurrentNode() } if (!Z) { return } }
        var W = Z.querySelector(".app-topbar"),
            X = Z.querySelector(".app-content"),
            U = J.innerHeight;
        if (!X) { return }
        if (!W) { X.style.height = U + "px"; return }
        var Y = e.defaultView.getComputedStyle(W, null),
            V = H.os.android ? 48 : 44;
        if (Y.height) {
            V = (parseInt(Y.height) || 0);
            if ((Y.boxSizing || Y.webkitBoxSizing) !== "border-box") {
                V += (parseInt(Y.paddingBottom) || 0) + (parseInt(Y.paddingTop) || 0);
                V += (parseInt(Y.borderBottomWidth) || 0) + (parseInt(Y.borderTopWidth) || 0)
            }
        }
        X.style.height = (U - V) + "px"
    }

    function o(Y, Z) {
        if (!Z) { return }
        var W = Y.querySelector(".app-topbar .left.app-button"),
            V = Z.querySelector(".app-topbar .app-title");
        if (!W || !V || (W.getAttribute("data-autotitle") === null)) { return }
        var U = V.textContent,
            X = W.textContent;
        if (!U || X) { return }
        if (U.length > 13) { U = U.substr(0, 12) + ".." }
        W.textContent = U
    }

    function T() {
        if (N) { return }
        N = true;
        e.body.className += " " + O;
        H.ready(function() { setTimeout(z, 6) })
    }
}(window, document, Clickable, Scrollable, App, App._Utils, App._Events, App._Metrics, App._Scroll);
App._Stack = function(k, o, q, c, x, r) {
    var e = "__APP_JS_STACK__" + k.location.pathname,
        i = "__APP_JS_TIME__" + k.location.pathname;
    var j = [];
    q.getStack = function() { return b() };
    q.getPage = function(y) {
        var z = j.length - 1;
        switch (typeof y) {
            case "undefined":
                y = z;
                break;
            case "number":
                if (Math.abs(y) > z) { throw TypeError("absolute index cannot be greater than stack size, got " + y) }
                if (y < 0) { y = z + y }
                break;
            default:
                throw TypeError("page index must be a number if defined, got " + y)
        }
        return g(y)
    };
    q.removeFromStack = function(A, z) {
        var y = j.length - 1;
        switch (typeof A) {
            case "undefined":
                A = 0;
                break;
            case "number":
                if (Math.abs(A) > y) { throw TypeError("absolute start index cannot be greater than stack size, got " + A) }
                if (A < 0) { A = y + A }
                break;
            default:
                throw TypeError("start index must be a number if defined, got " + A)
        }
        switch (typeof z) {
            case "undefined":
                z = y;
                break;
            case "number":
                if (Math.abs(z) > y) { throw TypeError("absolute end index cannot be greater than stack size, got " + z) }
                if (z < 0) { z = y + z }
                break;
            default:
                throw TypeError("end index must be a number if defined, got " + z)
        }
        if (A > z) { throw TypeError("start index cannot be greater than end index") }
        l(A, z)
    };
    q.addToStack = function(z, y) {
        var A = j.length - 1;
        switch (typeof z) {
            case "undefined":
                z = 0;
                break;
            case "number":
                if (Math.abs(z) > A) { throw TypeError("absolute index cannot be greater than stack size, got " + z) }
                if (z < 0) { z = A + z }
                break;
            default:
                throw TypeError("index must be a number if defined, got " + z)
        }
        if (!c.isArray(y)) { throw TypeError("added pages must be an array, got " + y) }
        y = y.slice();
        c.forEach(y, function(C, B) {
            if (typeof C === "string") { C = [C, {}] } else { if (c.isArray(C)) { C = C.slice() } else { throw TypeError("page description must be an array (page name, arguments), got " + C) } }
            if (typeof C[0] !== "string") { throw TypeError("page name must be a string, got " + C[0]) }
            switch (typeof C[1]) {
                case "undefined":
                    C[1] = {};
                case "object":
                    break;
                default:
                    throw TypeError("page arguments must be an object if defined, got " + C[1])
            }
            switch (typeof C[2]) {
                case "undefined":
                    C[2] = {};
                case "object":
                    break;
                default:
                    throw TypeError("page options must be an object if defined, got " + C[2])
            }
            y[B] = C
        });
        w(z, y)
    };
    q.saveStack = function() { n() };
    q.destroyStack = function() { s() };
    q.restore = m();
    return { get: b, getCurrent: t, getPage: g, pop: v, push: h, size: d, save: n, destroy: s };

    function n() {
        try {
            var z = [];
            for (var A = 0, y = j.length; A < y; A++) {
                if (j[A][4].restorable === false) { break }
                z.push([j[A][0], j[A][3], j[A][2]])
            }
            localStorage[e] = JSON.stringify(z);
            localStorage[i] = +new Date() + ""
        } catch (B) {}
    }

    function s() {
        delete localStorage[e];
        delete localStorage[i]
    }

    function b() { return j.slice().map(f) }

    function d() { return j.length }

    function t() { var y = j[j.length - 1]; if (y) { return f(y) } }

    function v() { var y = j.pop(); if (y) { return f(y) } }

    function h(y) { j.push([y[0], y[3], y[4], y[1], y[2]]) }

    function g(y) { var z = j[y]; if (z) { return z[1] } }

    function f(A) { var y = {}; for (var z in A[3]) { y[z] = A[3][z] } return [A[0], y, A[4], A[1], A[2]] }

    function u(z, y) {
        var A = j.splice(z, y - z);
        c.forEach(A, function(B) {
            r.startDestruction(B[0], B[4], B[1], B[3]);
            r.finishDestruction(B[0], B[4], B[1], B[3])
        })
    }

    function l(z, y) {
        q._Navigation.enqueue(function(A) {
            u(z, y);
            A()
        })
    }

    function p(z, y, A) {
        var C = [],
            B;
        c.forEach(y, function(E) {
            var D = r.createManager(true),
                F = r.startGeneration(E[0], D, E[1]);
            if (!E[2].transition && D.transition) { E[2].transition = D.transition }
            r.populateBackButton(F, B);
            r.finishGeneration(E[0], D, F, E[1]);
            x.saveScrollPosition(F);
            x.saveScrollStyle(F);
            C.push([E[0], F, E[2], E[1], D]);
            B = F
        });
        C.unshift(0);
        C.unshift(z);
        Array.prototype.splice.apply(j, C)
    }

    function w(z, y) {
        q._Navigation.enqueue(function(A) {
            p(z, y);
            A()
        })
    }

    function m(z) {
        var y, B;
        try {
            y = JSON.parse(localStorage[e]);
            storedTime = parseInt(localStorage[i]);
            B = y.pop()
        } catch (A) { return }
        if (!B) { return }
        return function(C, E) {
            switch (typeof C) {
                case "function":
                    E = C;
                case "undefined":
                    C = {};
                case "object":
                    if (C !== null) { break }
                default:
                    throw TypeError("restore options must be an object if defined, got " + C)
            }
            switch (typeof E) {
                case "undefined":
                    E = function() {};
                case "function":
                    break;
                default:
                    throw TypeError("restore callback must be a function if defined, got " + E)
            }
            if (+new Date() - storedTime >= C.maxAge) { throw TypeError("restore content is too old") }
            if (!r.has(B[0])) { throw TypeError(B[0] + " is not a known page") }
            c.forEach(y, function(F) { if (!r.has(F[0])) { throw TypeError(F[0] + " is not a known page") } });
            try { p(0, y, true) } catch (D) { u(0, j.length); throw Error("failed to restore stack") }
            n();
            try { q.load(B[0], B[1], B[2], E) } catch (D) { u(0, j.length); throw Error("failed to restore stack") }
        }
    }
}(window, document, App, App._Utils, App._Scroll, App._Pages);
App._Transitions = function(n, w, A, x, e, D, y, t) {
    var c = "app-transition",
        h = "slide-left",
        z = "implode-out",
        f = "fade-on",
        u = "instant",
        v = { instant: "instant", fade: "fade", "fade-on": "fade-off", "fade-off": "fade-on", "scale-in": "scale-out", "scale-out": "scale-in", "rotate-left": "rotate-right", "rotate-right": "rotate-left", "cube-left": "cube-right", "cube-right": "cube-left", "swap-left": "swap-right", "swap-right": "swap-left", "explode-in": "explode-out", "explode-out": "explode-in", "implode-in": "implode-out", "implode-out": "implode-in", "slide-left": "slide-right", "slide-right": "slide-left", "slide-up": "slide-down", "slide-down": "slide-up", "slideon-left": "slideoff-left", "slideon-right": "slideoff-right", "slideon-up": "slideoff-up", "slideon-down": "slideoff-down", "slideoff-left": "slideon-left", "slideoff-right": "slideon-right", "slideoff-up": "slideon-up", "slideoff-down": "slideon-down", "slideon-left-ios": "slideoff-right-ios", "glideon-right": "glideoff-right", "glideoff-right": "slideon-right", "glideon-left": "glideoff-left", "glideoff-left": "slideon-left", "glideon-down": "glideoff-down", "glideoff-down": "slideon-down", "glideon-up": "glideoff-up", "glideoff-up": "slideon-up" },
        b = 10;
    var o = false,
        m, q, d;
    if (e.os.ios) { k(h) } else { if (e.os.android) { if (e.os.version >= 4) { k(z) } else { if ((e.os.version < 2.3) || /LT15a/i.test(navigator.userAgent)) { k(u) } else { k(f) } } } }
    r();
    x.setDefaultTransition = function(F) {
        if (typeof F === "object") {
            switch (e.os.name) {
                case "android":
                    if ((e.os.version < 4) && F.androidFallback) { F = F.androidFallback } else { F = F.android }
                    break;
                case "ios":
                    if ((e.os.version < 5) && F.iosFallback) { F = F.iosFallback } else { F = F.ios }
                    break;
                default:
                    F = F.fallback;
                    break
            }
            if (!F) { return }
        }
        if (typeof F !== "string") { throw TypeError("transition must be a string if defined, got " + F) }
        if (!(F in v)) { throw TypeError("invalid transition type, got " + F) }
        k(F)
    };
    x.getDefaultTransition = function() { return m };
    x.getReverseTransition = function() { return q };
    x.enableDragTransition = function() { j() };
    return { REVERSE_TRANSITION: v, run: i, enableDrag: p, disableDrag: l };

    function k(F) {
        m = F;
        q = v[m]
    }

    function g(F) { if (!e.os.ios) { return false } else { if (F === "slide-left") { return true } else { if (F === "slide-right") { return true } else { return false } } } }

    function i(K, J, H, L, G) {
        if (!H.transition) { H.transition = (G ? q : m) }
        var F = (e.os.ios && (e.os.version >= 7) && { "slideon-down": 1, "slideoff-down": 1 }[H.transition]);
        if (!H.duration) { if (!e.os.ios) { H.duration = 270 } else { if (e.os.version < 7) { H.duration = 325 } else { if (F) { H.duration = 475 } else { H.duration = 425 } } } }
        if (!H.easing && F) { H.easing = "cubic-bezier(0.4,0.6,0.05,1)" }
        if (e.os.ios && !H.easing && (H.transition === "slideon-left-ios" || H.transition === "slideoff-right-ios")) { if (e.os.version < 7) { H.easing = "ease-in-out" } else { H.easing = "cubic-bezier(0.4,0.6,0.2,1)" } }
        w.body.className += " " + c;
        if (H.transition === "instant") { A(K, J, H, function() { setTimeout(I, 0) }) } else { if (g(H.transition)) { s(K, J, H, I) } else { A(K, J, H, I) } }

        function I() {
            w.body.className = w.body.className.replace(new RegExp("\\b" + c + "\\b"), "");
            L()
        }
    }

    function s(I, H, O, N) {
        var K = (O.transition === "slide-left"),
            F = K ? H : I,
            L = B(H, I, K);
        if (!L) { A(I, H, O, N); return }
        var M = F.style.position,
            J = F.style.zIndex,
            G = F.style.background;
        F.style.position = "fixed";
        F.style.zIndex = "4000";
        F.style.background = "none";
        if (K) { I.parentNode.insertBefore(H, I) } else { if (I.nextSibling) { I.parentNode.insertBefore(H, I.nextSibling) } else { I.parentNode.appendChild(H) } }
        if (x._Pages) {
            x._Pages.fixContent(I);
            x._Pages.fixContent(H)
        }
        if (e.os.version < 7) { O.easing = "ease-in-out" } else { O.easing = "cubic-bezier(0.4,0.6,0.2,1)" }
        e.animate(L, O.duration, O.easing, function() {
            I.parentNode.removeChild(I);
            F.style.position = M;
            F.style.zIndex = J;
            F.style.background = G;
            N()
        })
    }

    function B(J, L, O) {
        var H = L.querySelector(".app-topbar"),
            P = L.querySelector(".app-topbar .app-title"),
            G = L.querySelector(".app-topbar .left.app-button"),
            M = L.querySelector(".app-content"),
            I = J.querySelector(".app-topbar"),
            F = J.querySelector(".app-topbar .app-title"),
            Q = J.querySelector(".app-topbar .left.app-button"),
            K = J.querySelector(".app-content"),
            N = [];
        if (!H || !I || !M || !K || !e.isVisible(H) || !e.isVisible(I)) { return }
        if (G && (G.getAttribute("data-noslide") !== null)) { G = undefined }
        if (Q && (Q.getAttribute("data-noslide") !== null)) { Q = undefined }
        if (O) { N.push({ opacityStart: 0, opacityEnd: 1, elem: I }) } else { N.push({ opacityStart: 1, opacityEnd: 0, elem: H }) }
        if (P) { N.push({ transitionStart: "translate3d(0,0,0)", transitionEnd: "translate3d(" + C(Q, O) + "px,0,0)", elem: P }) }
        if (F) { N.push({ transitionStart: "translate3d(" + C(G, !O) + "px,0,0)", transitionEnd: "translate3d(0,0,0)", elem: F }) }
        if (e.os.version >= 5) { if (G) { N.push({ transitionStart: "translate3d(0,0,0)", transitionEnd: "translate3d(" + E(G, Q, !O) + "px,0,0)", elem: G }) } if (Q) { N.push({ transitionStart: "translate3d(" + E(Q, G, O) + "px,0,0)", transitionEnd: "translate3d(0,0,0)", elem: Q }) } }
        if (e.os.version < 7) { N.push({ transitionStart: "translate3d(0,0,0)", transitionEnd: "translate3d(" + (O ? -100 : 100) + "%,0,0)", elem: M }, { transitionStart: "translate3d(" + (O ? 100 : -100) + "%,0,0)", transitionEnd: "translate3d(0,0,0)", elem: K }) } else { N.push({ transitionStart: "translate3d(0,0,0)", transitionEnd: "translate3d(" + (O ? -30 : 100) + "%,0,0)", elem: M }, { transitionStart: "translate3d(" + (O ? 100 : -30) + "%,0,0)", transitionEnd: "translate3d(0,0,0)", elem: K }) }
        return N
    }

    function E(I, H, G) {
        var J = I.textContent.length * (e.os.version < 7 ? 10 : 12),
            F = H ? (H.textContent.length * 15) : 0;
        if (!G) { return (F - n.innerWidth) / 2 } else { return (n.innerWidth - J) / 2 }
    }

    function C(F, G) { var H = 0; if (F && (e.os.version >= 5)) { H = F.textContent.length * (e.os.version < 7 ? 10 : 12) } if (!G) { return (n.innerWidth / 2) } else { return (H - n.innerWidth) / 2 } }

    function j() { o = true }

    function r() { var H = w.querySelectorAll("meta"); for (var G = 0, F = H.length; G < F; G++) { if ((H[G].name === "app-drag-transition") && (H[G].content === "true")) { j(); return } } }

    function p() {
        if (!o || !e.os.ios || (e.os.version < 7)) { return }
        var R = t.get().slice(-2),
            J = R[0],
            aa = R[1],
            L, ac, N, U, af;
        if (!J || !aa) { return }
        var I = aa[3],
            Q = aa[3].querySelector(".app-topbar"),
            Z = aa[3].querySelector(".app-topbar .app-title"),
            H = aa[3].querySelector(".app-topbar .left.app-button"),
            ab = aa[3].querySelector(".app-content"),
            W = J[3],
            M = J[3].querySelector(".app-topbar"),
            ae = J[3].querySelector(".app-topbar .app-title"),
            V = J[3].querySelector(".app-topbar .left.app-button"),
            T = J[3].querySelector(".app-content");
        if (!I || !Q || !ab || !W || !M || !T) { return }
        var ah = ["slide-left", "slideon-left-ios"];
        if ((ah.indexOf(aa[4].transition) === -1) && (aa[4].transition || ah.indexOf(m) === -1)) { return } else { if ((aa[4].transition === "slide-left") || (!aa[4].transition && "slide-left" === m)) { af = true } }
        var S = aa[3].style.position,
            O = aa[3].style.zIndex,
            Y = aa[3].style.background;
        aa[3].style.position = "fixed";
        aa[3].style.zIndex = "4000";
        aa[3].style.background = "none";
        if (aa[3].nextSibling) { aa[3].parentNode.insertBefore(J[3], aa[3].nextSibling) } else { aa[3].parentNode.appendChild(J[3]) }
        y.fixContent(W);
        D.restoreScrollPosition(W);
        n.addEventListener("touchstart", F, false);
        n.addEventListener("touchmove", ad, false);
        n.addEventListener("touchcancel", X, false);
        n.addEventListener("touchend", X, false);
        var ag = false;
        d = function() {
            K();
            G()
        };

        function K() {
            n.removeEventListener("touchstart", F);
            n.removeEventListener("touchmove", ad);
            n.removeEventListener("touchcancel", X);
            n.removeEventListener("touchend", X)
        }

        function G() {
            aa[3].style.position = S;
            aa[3].style.zIndex = O;
            aa[3].style.background = Y;
            if (J[3].parentNode) { J[3].parentNode.removeChild(J[3]) }
        }

        function F(ai) {
            if (L || N || U) { return }
            var aj = (ai.touches && ai.touches[0]);
            if (!aj || (aj.pageX > b)) { return }
            if (!y.fire(aa[2], aa[3], y.EVENTS.BEFORE_BACK)) { return }
            ai.preventDefault();
            x._Navigation.enqueue(function(ak) { N = ak }, true);
            w.body.className += " " + c;
            L = ac = { x: aj.pageX, y: aj.pageY };
            Q.style.webkitTransition = "all 0s linear";
            if (Z) { Z.style.webkitTransition = "all 0s linear" }
            if (H) { H.style.webkitTransition = "all 0s linear" }
            ab.style.webkitTransition = "all 0s linear";
            M.style.webkitTransition = "all 0s linear";
            if (ae) { ae.style.webkitTransition = "all 0s linear" }
            if (V) { V.style.webkitTransition = "all 0s linear" }
            T.style.webkitTransition = "all 0s linear"
        }

        function ad(aj) {
            if (L && aj.touches && aj.touches[0] && !U) {
                if (ac) { ag = (ac.x < aj.touches[0].pageX) }
                ac = { x: aj.touches[0].pageX, y: aj.touches[0].pageY };
                var ai = Math.min(Math.max(0, (ac.x - L.x) / n.innerWidth), 1);
                P(ai)
            }
        }

        function X(al) {
            if (!L || !N || U) { return }
            K();
            ac = (al.touches && al.touches[0]) || ac;
            var ak = 0;
            if (ac) { progress = (ac.x - L.x) / n.innerWidth }
            var ai = ((progress < 0.1 && !ag) || (0.9 < progress && ag));
            if (!ai) {
                Q.style.webkitTransitionDuration = "0.15s";
                if (Z) { Z.style.webkitTransitionDuration = "0.15s" }
                if (H) { H.style.webkitTransitionDuration = "0.15s" }
                ab.style.webkitTransitionDuration = "0.15s";
                M.style.webkitTransitionDuration = "0.15s";
                if (ae) { ae.style.webkitTransitionDuration = "0.15s" }
                if (V) { V.style.webkitTransitionDuration = "0.15s" }
                T.style.webkitTransitionDuration = "0.15s"
            }
            if (ag) {
                y.fire(aa[2], aa[3], y.EVENTS.BACK);
                P(1)
            } else { P(0) }
            L = ac = null;
            if (!ai) { aa[3].addEventListener("webkitTransitionEnd", aj, false) } else { aj() }

            function aj() {
                aa[3].removeEventListener("webkitTransitionEnd", aj);
                if (ag) { if (aa[3].parentNode) { aa[3].parentNode.removeChild(aa[3]) } } else { if (J[3].parentNode) { J[3].parentNode.removeChild(J[3]) } }
                aa[3].style.position = S;
                aa[3].style.zIndex = O;
                aa[3].style.background = Y;
                Q.style.webkitTransition = "";
                Q.style.webkitTransform = "";
                if (Z) {
                    Z.style.webkitTransition = "";
                    Z.style.webkitTransform = ""
                }
                if (H) {
                    H.style.webkitTransition = "";
                    H.style.webkitTransform = ""
                }
                ab.style.webkitTransition = "";
                ab.style.webkitTransform = "";
                M.style.webkitTransition = "";
                M.style.webkitTransform = "";
                if (ae) {
                    ae.style.webkitTransition = "";
                    ae.style.webkitTransform = ""
                }
                if (V) {
                    V.style.webkitTransition = "";
                    V.style.webkitTransform = ""
                }
                T.style.webkitTransition = "";
                T.style.webkitTransform = "";
                w.body.className = w.body.className.replace(new RegExp("\\b" + c + "\\b"), "");
                if (ag) {
                    y.startDestruction(aa[0], aa[2], aa[3], aa[1]);
                    y.fixContent(W);
                    D.restoreScrollStyle(W);
                    aa[2].showing = false;
                    y.fire(aa[2], aa[3], y.EVENTS.HIDE);
                    J[2].showing = true;
                    y.fire(J[2], W, y.EVENTS.SHOW);
                    y.finishDestruction(aa[0], aa[2], aa[3], aa[1]);
                    t.pop();
                    x._Navigation.update()
                }
                d = null;
                N()
            }
        }

        function P(ai) {
            if (af) { Q.style.opacity = 1 - ai; if (Z) { Z.style.webkitTransform = "translate3d(" + (ai * n.innerWidth / 2) + "px,0,0)" } if (H) { H.style.webkitTransform = "translate3d(" + (ai * (n.innerWidth - H.textContent.length * 12) / 2) + "px,0,0)" } if (ae) { ae.style.webkitTransform = "translate3d(" + ((1 - ai) * (n.innerWidth - H.textContent.length * 12) / -2) + "px,0,0)" } if (V) { V.style.webkitTransform = "translate3d(" + ((1 - ai) * -150) + "%,0,0)" } } else {
                Q.style.webkitTransform = "translate3d(" + (ai * 100) + "%,0,0)";
                M.style.webkitTransform = "translate3d(" + ((1 - ai) * -30) + "%,0,0)"
            }
            ab.style.webkitTransform = "translate3d(" + (ai * 100) + "%,0,0)";
            T.style.webkitTransform = "translate3d(" + ((1 - ai) * -30) + "%,0,0)"
        }
    }

    function l() {
        if (d) {
            d();
            d = null
        }
    }
}(window, document, Swapper, App, App._Utils, App._Scroll, App._Pages, App._Stack);
App._Navigation = function(i, l, o, g, u, p, k, d) {
    var n = [],
        f = false,
        m, e;
    o.current = function() { return m };
    o.load = function(v, x, w, y) {
        if (typeof v !== "string") { throw TypeError("page name must be a string, got " + v) }
        switch (typeof x) {
            case "function":
                w = x;
                x = {};
            case "string":
                y = w;
                w = x;
            case "undefined":
                x = {};
            case "object":
                break;
            default:
                throw TypeError("page arguments must be an object if defined, got " + x)
        }
        switch (typeof w) {
            case "function":
                y = w;
            case "undefined":
                w = {};
            case "object":
                break;
            case "string":
                w = { transition: w };
                break;
            default:
                throw TypeError("options must be an object if defined, got " + w)
        }
        switch (typeof y) {
            case "undefined":
                y = function() {};
            case "function":
                break;
            default:
                throw TypeError("callback must be a function if defined, got " + y)
        }
        return h(v, x, w, y)
    };
    o.back = function(v, w) {
        switch (typeof v) {
            case "function":
                w = v;
            case "undefined":
                v = undefined;
            case "string":
                break;
            default:
                throw TypeError("pageName must be a string if defined, got " + v)
        }
        switch (typeof w) {
            case "undefined":
                w = function() {};
            case "function":
                break;
            default:
                throw TypeError("callback must be a function if defined, got " + w)
        }
        return c(v, w)
    };
    o.pick = function(v, y, x, w, z) {
        if (typeof v !== "string") { throw TypeError("page name must be a string, got " + v) }
        switch (typeof y) {
            case "function":
                x = y;
                y = {};
            case "string":
                z = w;
                w = x;
                x = y;
            case "undefined":
                y = {};
            case "object":
                break;
            default:
                throw TypeError("page arguments must be an object if defined, got " + y)
        }
        switch (typeof x) {
            case "function":
                z = w;
                w = x;
            case "undefined":
                x = {};
            case "object":
                break;
            case "string":
                x = { transition: x };
                break;
            default:
                throw TypeError("options must be an object if defined, got " + x)
        }
        if (typeof w !== "function") { throw TypeError("callback must be a function, got " + w) }
        switch (typeof z) {
            case "undefined":
                z = w;
                w = function() {};
            case "function":
                break;
            default:
                throw TypeError("callback must be a function, got " + z)
        }
        return q(v, y, x, w, z)
    };
    return { getCurrentNode: s, update: t, enqueue: r };

    function r(w, v) {
        if (f) { n.push(w); return false }
        f = true;
        if (!v) { d.disableDrag() }
        w(function() {
            k.save();
            f = false;
            if (!b()) { d.enableDrag() }
        });
        return true
    }

    function b() { if (n.length) { r(n.shift()); return true } else { return false } }

    function s() { return e }

    function t() {
        var v = k.getCurrent();
        m = v[0];
        e = v[3]
    }

    function h(v, x, w, z, y) {
        r(function(B) {
            var E = e,
                I = p.createManager(false);
            if (y) { y(I) }
            var F = p.startGeneration(v, I, x),
                K = k.getCurrent(),
                G = K && K[3],
                C = K && K[2];
            if (!w.transition && I.transition) { w.transition = I.transition }
            p.populateBackButton(F, E || G);
            if (!m) {
                o.restore = null;
                l.body.appendChild(F);
                p.fire(I, F, p.EVENTS.LAYOUT);
                D();
                H()
            } else {
                u.saveScrollPosition(e);
                var A = {};
                for (var J in w) { A[J] = w[J] }
                j(function(L) {
                    d.run(e, F, A, function() {
                        p.fixContent(F);
                        L();
                        H()
                    });
                    p.fire(I, F, p.EVENTS.LAYOUT)
                });
                D()
            }

            function D() {
                m = v;
                e = F;
                k.push([v, x, I, F, w]);
                if (E && C) { p.fire(C, E, p.EVENTS.FORWARD) }
            }

            function H() {
                u.saveScrollStyle(E);
                p.finishGeneration(v, I, F, x);
                B();
                z();
                if (E && C) {
                    C.showing = false;
                    p.fire(C, E, p.EVENTS.HIDE)
                }
                I.showing = true;
                p.fire(I, F, p.EVENTS.SHOW)
            }
        });
        if (!p.has(v)) { return false }
    }

    function c(C, B) {
        if (g.status() && g.close() && !C) { B(); return }
        var w = k.get().map(function(D) { return D[0] });
        if (!w.length) { throw Error(C + " is not currently in the stack, cannot go back to it") }
        if (C) { var x = -1; for (var y = w.length - 1; y >= 0; y--) { if (w[y] === C) { x = y; break } } if (x === -1) { throw Error(C + " is not currently in the stack, cannot go back to it") } if (x !== w.length - 2) { o.removeFromStack(x + 1) } }
        var A = w.length,
            z = false;
        var v = r(function(K) {
            if (k.size() < 2) { K(); return }
            var J = k.getCurrent();
            if (!p.fire(J[2], J[3], p.EVENTS.BEFORE_BACK)) {
                z = true;
                K();
                return
            } else { k.pop() }
            var H = k.getCurrent(),
                D = H[0],
                G = H[3],
                E = J[4];
            p.fire(J[2], J[3], p.EVENTS.BACK);
            p.fixContent(G);
            p.startDestruction(J[0], J[2], J[3], J[1]);
            u.restoreScrollPosition(G);
            var I = {};
            for (var F in E) { if (F === "transition") { I[F] = d.REVERSE_TRANSITION[E[F]] || E[F] } else { I[F] = E[F] } }
            j(function(L) {
                d.run(e, G, I, function() {
                    p.fixContent(G);
                    u.restoreScrollStyle(G);
                    L();
                    J[2].showing = false;
                    p.fire(J[2], J[3], p.EVENTS.HIDE);
                    H[2].showing = true;
                    p.fire(H[2], G, p.EVENTS.SHOW);
                    setTimeout(function() {
                        p.finishDestruction(J[0], J[2], J[3], J[1]);
                        K();
                        B()
                    }, 0)
                }, true);
                p.fixContent(G);
                p.fire(H[2], G, p.EVENTS.LAYOUT)
            });
            m = D;
            e = G
        });
        if (z || (v && (A < 2))) { return false }
    }

    function q(v, y, x, w, A) {
        var z = false;
        h(v, y, x, w, function(B) {
            B.restorable = false;
            B.reply = function() {
                if (!z) {
                    z = true;
                    if (!B._appNoBack) { c(undefined, function() {}) }
                    A.apply(o, arguments)
                }
            }
        })
    }

    function j(v) {
        var x = false;
        var w = l.createElement("div");
        w.className = "app-clickblocker";
        l.body.appendChild(w);
        w.addEventListener("touchstart", function(y) { y.preventDefault() }, false);
        v(function() {
            if (x) { return }
            x = true;
            l.body.removeChild(w)
        })
    }
}(window, document, App, App._Dialog, App._Scroll, App._Pages, App._Stack, App._Transitions);;
/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function A(a){return v.call(a)=="[object Function]"}function B(a){return a instanceof Object}function C(b){var c,d;if(v.call(b)!=="[object Object]")return!1;d=A(b.constructor)&&b.constructor.prototype;if(!d||!hasOwnProperty.call(d,"isPrototypeOf"))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return typeof a.length=="number"}function F(b){return b.filter(function(b){return b!==a&&b!==null})}function G(a){return a.length>0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(a){return a in i?i[a]:i[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function J(a,b){return typeof b=="number"&&!k[H(a)]?b+"px":b}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?a==1?e.firstChild:a==2?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes)O(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=[1,3,8,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},x,y,z=g.createElement("div");return w.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&&z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&&(d=l.test(b)&&RegExp.$1),d in q||(d="*");var e=q[d];return e.innerHTML=""+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(!b)return w.Z();if(A(b))return c(g).ready(b);if(w.isZ(b))return b;var e;if(D(b))e=F(b);else if(C(b))e=[c.extend({},b)],b=null;else if(m.indexOf(b.nodeType)>=0||b===window)e=[b],b=null;else if(l.test(b))e=w.fragment(b.trim(),RegExp.$1),b=null;else{if(d!==a)return c(d).find(b);e=w.qsa(g,b)}return w.Z(e,b)},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&&(c[b]=d[b])}),c},w.qsa=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&&a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,d=[],e,f;if(E(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length>0&&w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):E(b)&&A(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!B(a)?a:c(a)},find:function(a){var b;return this.length==1?b=w.qsa(this[0],a):b=this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){var d=this[0];while(d&&!w.matches(d,a))d=d!==b&&d!==g&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0)return b.push(a),a});return L(b,a)},parent:function(a){return L(y(this.pluck("parentNode")),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),j(this,"").getPropertyValue("display")=="none"&&(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?this.css("display")=="none":b)?this.show():this.hide()},prev:function(){return c(this.pluck("previousElementSibling"))},next:function(){return c(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(B(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,M(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+H(b),c);return d!==null?d:a},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&typeof c=="string")return this.length==0?a:this[0].style[x(c)]||j(this[0],"").getPropertyValue(c);var e="";for(b in c)typeof c[b]=="string"&&c[b]==""?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+":"+J(b,c[b])+";";return typeof c=="string"&&(d==""?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+":"+J(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length<1?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return this.className="";d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a)," ")}),this.className=d.trim()})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window["inner"+f]:this[0]==g?g.documentElement["offset"+f]:(e=this.offset())&&e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(a.length<1)return this;var d=this.length,e=d>1,f=b<2;return this.each(function(c,g){for(var h=0;h<a.length;h++){var i=a[f?a.length-h-1:h];O(i,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&window.eval.call(window,a.innerHTML)}),e&&c<d-1&&(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){b=h(b);if(b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||g.test(a.ns))&&(!d||f(a.fn)===f(d))&&(!e||a.sel==e)})}function h(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function i(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&&i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&&a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||"",d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:k,remove:l},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=f(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){var e=!1;if(c=="blur"||c=="focus")a.iswebkit?c=c=="blur"?"focusout":c=="focus"?"focusin":c:e=!0;return this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);if(f)return e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return c==undefined||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return c==undefined||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return typeof b=="string"&&(b=a.Event(b)),q(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p(typeof b=="string"?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0)}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function l(a){return a.toLowerCase()}function m(a){return d?d+a:l(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+l(a)+"-",d=e,!1}),k[c+"transition-property"]=k[c+"transition-duration"]=k[c+"transition-timing-function"]=k[c+"animation-name"]=k[c+"animation-duration"]="",a.fx={off:d===b&&i.style.transitionProperty===b,cssPrefix:c,transitionEnd:m("TransitionEnd"),animationEnd:m("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,i={},l,m=this,n,o=a.fx.transitionEnd;e===b&&(e=.4),a.fx.off&&(e=0);if(typeof d=="string")i[c+"animation-name"]=d,i[c+"animation-duration"]=e+"s",o=a.fx.animationEnd;else{for(l in d)j.test(l)?(h||(h=[]),h.push(l+"("+d[l]+")")):i[l]=d[l];h&&(i[c+"transform"]=h.join(" ")),!a.fx.off&&typeof d=="object"&&(i[c+"transition-property"]=Object.keys(d).join(", "),i[c+"transition-duration"]=e+"s",i[c+"transition-timing-function"]=f||"linear")}return n=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(o,arguments.callee)}a(this).css(k),g&&g.call(this)},e>0&&this.bind(o,n),setTimeout(function(){m.css(i),e<=0&&setTimeout(function(){m.each(function(){n.call(this)})},0)},0),this},i=null}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){isObject(a.data)&&(a.data=$.param(a.data)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function serialize(a,b,c,d){var e=$.isArray(b);$.each(b,function(b,f){d&&(b=c?d:d+"["+(e?"":b)+"]"),!d&&e?a.add(f.name,f.value):(c?$.isArray(f):isObject(f))?serialize(a,f,c,b):a.add(b,f)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){$(c).remove(),b in window&&(window[b]=empty),ajaxComplete("abort",e,a)},e={abort:d},f;return a.error&&(c.onerror=function(){e.abort(),a.error()}),window[b]=function(d){clearTimeout(f),$(c).remove(),delete window[b],ajaxSuccess(d,e,a)},serializeData(a),c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(f=setTimeout(function(){e.abort(),ajaxComplete("timeout",e,a)},a.timeout)),e},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,"error",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b){return $.ajax({url:a,success:b})},$.post=function(a,b,c,d){return $.isFunction(b)&&(d=d||c,c=b,b=null),$.ajax({type:"POST",url:a,data:b,success:c,dataType:d})},$.getJSON=function(a,b){return $.ajax({url:a,success:b,dataType:"json"})},$.fn.load=function(a,b){if(!this.length)return this;var c=this,d=a.split(/\s/),e;return d.length>1&&(a=d[0],e=d[1]),$.get(a,function(a){c.html(e?$(document.createElement("div")).html(a.replace(rscript,"")).find(e).html():a),b&&b.call(c)}),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function h(){g=null,b.last&&(b.el.trigger("longTap"),b={})}function i(){g&&clearTimeout(g),g=null}var b={},c,f=750,g;a(document).ready(function(){var j,k;a(document.body).bind("touchstart",function(e){j=Date.now(),k=j-(b.last||j),b.el=a(d(e.touches[0].target)),c&&clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,k>0&&k<=250&&(b.isDoubleTap=!0),b.last=j,g=setTimeout(h,f)}).bind("touchmove",function(a){i(),b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind("touchend",function(a){i(),b.isDoubleTap?(b.el.trigger("doubleTap"),b={}):b.x2&&Math.abs(b.x1-b.x2)>30||b.y2&&Math.abs(b.y1-b.y2)>30?(b.el.trigger("swipe")&&b.el.trigger("swipe"+e(b.x1,b.x2,b.y1,b.y2)),b={}):"last"in b&&(b.el.trigger("tap"),c=setTimeout(function(){c=null,b.el.trigger("singleTap"),b={}},250))}).bind("touchcancel",function(){c&&clearTimeout(c),g&&clearTimeout(g),g=c=null,b={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);;
//__inline('zepto/ajax.js');
//__inline('zepto/touch.js');
//__inline('zepto/selector.js');
//__inline('zepto/event.js');
// Zepto.cookie plugin
// 
// Copyright (c) 2010, 2012 
// @author Klaus Hartl (stilbuero.de)
// @author Daniel Lacy (daniellacy.com)
// 
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
;(function($){
    $.extend($.fn, {
        cookie : function (key, value, options) {
            var days, time, result, decode

            // A key and value were given. Set cookie.
            if (arguments.length > 1 && String(value) !== "[object Object]") {
                // Enforce object
                options = $.extend({}, options)

                if (value === null || value === undefined) options.expires = -1

                if (typeof options.expires === 'number') {
                    days = (options.expires * 24 * 60 * 60 * 1000)
                    time = options.expires = new Date()

                    time.setTime(time.getTime() + days)
                }

                value = String(value)

                return (document.cookie = [
                    encodeURIComponent(key), '=',
                    options.raw ? value : encodeURIComponent(value),
                    options.expires ? '; expires=' + options.expires.toUTCString() : '',
                    options.path ? '; path=' + options.path : '',
                    options.domain ? '; domain=' + options.domain : '',
                    options.secure ? '; secure' : ''
                ].join(''))
            }

            // Key and possibly options given, get cookie
            options = value || {}

            decode = options.raw ? function (s) { return s } : decodeURIComponent

            return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null
        }

    })
})(Zepto)
;
//     Zepto.js
//     (c) 2010, 2011 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

(function($) {
    function detect(ua) {
        var os = (this.os = {}),
            browser = (this.browser = {}),
            webkit = ua.match(/WebKit\/([\d.]+)/),
            wechat = ua.match(/MicroMessenger\/([\d.]+)/),
            android = ua.match(/(Android)\s+([\d.]+)/),
            ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            touchpad = webos && ua.match(/TouchPad/),
            blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);

        if (webkit) browser.version = webkit[1];
        browser.webkit = !!webkit;

        os.pc = true;
        if (android) os.android = true, os.version = android[2], os.pc = false;
        if (iphone) os.ios = true, os.version = iphone[2].replace(/_/g, '.'), os.iphone = true, os.pc = false;
        if (ipad) os.ios = true, os.version = ipad[2].replace(/_/g, '.'), os.ipad = true, os.pc = false;
        if (webos) os.webos = true, os.version = webos[2], os.pc = false;
        if (touchpad) os.touchpad = true, os.pc = false;
        if (wechat) os.wechat = true, os.pc = false;
        if (blackberry) os.blackberry = true, os.version = blackberry[2], os.pc = false;
    }

    // ### $.os
    //
    // Object containing information about browser platform
    //
    // *Example:*
    //
    //     $.os.ios      // => true if running on Apple iOS
    //     $.os.android  // => true if running on Android
    //     $.os.webos    // => true if running on HP/Palm WebOS
    //     $.os.touchpad // => true if running on a HP TouchPad
    //     $.os.version  // => string with a version number, e.g.
    //                         "4.0", "3.1.1", "2.1", etc.
    //     $.os.iphone   // => true if running on iPhone
    //     $.os.ipad     // => true if running on iPad
    //     $.os.blackberry // => true if running on BlackBerry
    //
    // ### $.browser
    //
    // *Example:*
    //
    //     $.browser.webkit  // => true if the browser is WebKit-based
    //     $.browser.version // => WebKit version string
    detect.call($, navigator.userAgent);

    // make available to unit tests
    $.__detect = detect;

})(Zepto);;
; + function($) {
    var common = function() {
        $('body').append('<div id="global-tips"></div>');
    };

    if ($.os.pc) {
        if (window.parent === window.self) {
            //pc
        }
    }

    $.ajaxSettings.beforeSend = function(xhr) {
        // see https://github.com/madrobby/zepto/issues/274
        xhr.withCredentials = true; // TODO(elsigh): Do this in zepto w/ xhrFields.
    };
    $.extend(common.prototype, {
        alert: function(text, fn) {
            App.dialog({
                text: text || '接口出错',
                okButton: '确定'
            }, function(tryAgain) {
                if (tryAgain) {
                    // try again
                    fn && fn();
                }
            });
        },
        event: {
            tap: $.os.pc ? 'click' : 'tap',
            touchstart: $.os.pc ? 'mousedown' : 'touchstart',
            touchmove: $.os.pc ? 'mousemove' : 'touchmove',
            touchend: $.os.pc ? 'mouseup' : 'touchend'
        },
        confirm: function(text, fn) {
            App.dialog({
                text: text,
                okButton: '确定',
                cancelButton: '取消'
            }, function(tryAgain) {
                if (tryAgain) {
                    // try again
                    fn && fn();
                }
            });
        },
        tips: function(msg, fn) {
            var $tips = $('#global-tips');
            $tips.html(msg).addClass('show');
            setTimeout(function() {
                $tips.removeClass('show');
                fn && fn();
            }, 2000);
        },
        loading: function(show) {
            if (show) {
                $('.preloader-indicator-modal').show();
            } else {
                $('.preloader-indicator-modal').hide();
            }
        },
        setstorage: function(key, value) {
            if (localStorage) {
                try {
                    if (value) {
                        localStorage.setItem(key, value);
                    } else {
                        localStorage.removeItem(key);
                    }
                } catch (e) {
                    Common.setcookie(key, value);
                }
            } else {
                Common.setcookie(key, value);
            }
        },
        getstorage: function(key) {
            if (localStorage) {
                try {
                    return localStorage.getItem(key);
                } catch (e) {
                    return Common.getcookie(key);
                }
            } else {
                return Common.getcookie(key);
            }
        },
        setcookie: function(key, value) {
            $.fn.cookie(key, value);
        },
        getcookie: function(key) {
            return $.fn.cookie(key);
        },
        bindlink: function(selector){
            $('.app-link').off(Common.event.tap).on(Common.event.tap, function(e){
                var target = $(this).data("target"),
                    args = $(this).data("target-args");
                if(args){
                    args = JSON.parse(args);
                }
                Common.go(target, args);
            });
        },
        getlocation: function (callback){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    callback&&callback({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                });
                return;
            }
            callback&&callback({
                lat: 0,
                lng: 0
            });
        },
        viewimgs: function(photos, curr) {
            var html1 = [],
                html2 = [];

            for (var i = 0, len = photos.length; i < len; i++) {
                html1.push('<div style="width:' + $(window).width() + 'px;height:' + $(window).height() + 'px;margin-left:' + (i * 105) + '%;"><img src="' + photos[i] + '" /></div>');
                html2.push('<i></i>');
            }

            $('#img-views-main').html(html1.join(''));
            $('#img-views-points').html(html2.join(''));
            $('#img-views').show();
            Common.viewimgs_switch(curr || 0);
        },
        viewimgs_init: function() {
            Common.viewimgs_curr = 0;
            $('#img-views').off('swipeLeft').on('swipeLeft', function() {
                Common.viewimgs_next();
            }).off('swipeRight').on('swipeRight', function() {
                Common.viewimgs_prev();
            }).off('click').on('click', function() {
                $(this).hide();
            });
            if ($.os.pc) {
                $('#img-views-prev,#img-views-next').show();

                $('#img-views-next').off('click').on('click', function(e) {
                    e.stopPropagation();
                    Common.viewimgs_next();
                });

                $('#img-views-prev').off('click').on('click', function(e) {
                    e.stopPropagation();
                    Common.viewimgs_prev();
                })
            }
        },
        viewimgs_next: function() {
            var curr = Common.viewimgs_curr;
            var count = $('#img-views').find('img').length;
            if (curr >= count - 1) return;
            curr++;
            Common.viewimgs_switch(curr);
        },
        viewimgs_prev: function() {
            var curr = Common.viewimgs_curr;
            if (curr == 0) return;
            curr--;
            Common.viewimgs_switch(curr);
        },
        viewimgs_switch: function(curr) {
            Common.viewimgs_curr = curr;
            if (curr == 0) {
                $('#img-views-prev').hide();
            } else if ($.os.pc) {
                $('#img-views-prev').show();
            }
            var count = $('#img-views').find('img').length;
            if (curr == count - 1) {
                $('#img-views-next').hide();
            } else if ($.os.pc) {
                $('#img-views-next').show();
            }
            $('#img-views-main').css('transform', 'translate3d(-' + (curr * 105) + '%, 0, 0)');
            $('#img-views-points i').removeClass('on').each(function(i) {
                if (i == curr) {
                    $(this).addClass('on');
                }
            });
        },
        checkLogin: function(callback){
            var result = false;
            if(this.getcookie('uid')){
                result = true;
            }
            callback&&callback(result);
        },
        inputFocus: function () {
            var agent = navigator.userAgent.toLowerCase();
            setTimeout(function () {
                if (agent.indexOf('safari') != -1 && agent.indexOf('mqqbrowser') == -1
                    && agent.indexOf('coast') == -1 && agent.indexOf('android') == -1
                    && agent.indexOf('linux') == -1 && agent.indexOf('firefox') == -1) {//safra浏览器
                    window.scrollTo(0, 1000000);//先滚动到最底部，再用scrollY得到当前的值，必须延迟 否则拿到的就是1000000
                    setTimeout(function(){
                        window.scrollTo(0, window.scrollY - 45);//45像素 所有浏览器都是这么高
                    }, 50)
                } else {//其他浏览器
                    window.scrollTo(0, 1000000);
                }
            }, 200);
        },
        go: function(url, data){
            if(url.indexOf('.html')!=-1){
                document.location = url;
            }else{
                App.load(url, data);
            }
        },
        /**
         * 获取url参数
         */
        getparam: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        },
        /**
         * 时间格式化
         */
        formatTime: function(date, fmt) {
            date = new Date(date);
            var o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        },
        /**
         * 获取json数据
         */
        json: function(url, data, success, fail, type) {
            if (url.indexOf('http://') == -1) {
                url = 'http://yingdian.xiaoniu.io' + url;
            }
            return this.getdata(url, data, success, fail, type, 'json');
        },
        /**
         * 获取jsonp数据
         */
        jsonp: function(url, data, success, fail, type) {
            if (url.indexOf('http://') == -1) {
                url = 'http://yingdian.xiaoniu.io' + url;
            }
            return this.getdata(url, data, success, fail, type, 'jsonp');
        },
        /**
         * 异步加载脚本
         */
        script: function(url, data, type) {
            var d = $.Deferred();
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (script.readyState) {
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        d.resolve();
                    }
                }
            } else {
                script.onload = function() {
                    d.resolve();
                }
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
            return d;
        },
        /**
         * ajax请求
         */
        getdata: function(url, data, success, fail, type, datatype) {
            data = data||{};
            data.mock = 1;
            $.ajaxSettings.beforeSend = function(xhr) {
                // see https://github.com/madrobby/zepto/issues/274
                xhr.withCredentials = true;  // TODO(elsigh): Do this in zepto w/ xhrFields.
            };
            $.ajax({
                url: url,
                data: data,
                type: type || 'get',
                contentType: 'application/json',
                xhrFields: {
                  withCredentials: true
                },
                crossDomain: true,
                dataType: datatype || 'json',
                success: function(data) {
                    Common.loading(false);
                    if (data.status == '-699') {
                        parent.location = 'login.html?game=' + Common.getparam('game') + '&channel=' + Common.getparam('channel');
                        return false;
                    }
                    success && success(data);
                },
                error: function() {
                    $('.preloader-indicator-modal').hide();
                    Common.alert('网络异常，请稍候重试');
                    fail && fail();
                }
            });
        },
        completed: function() {
            $('.loading').hide();
        }
    });

    window.Common = new common();
}(Zepto);;
; + function($) {
    var clipboard = function(selector) {
        this.init(selector);
    };

    clipboard.prototype = {
        select: function(element) {
            var selectedText;

            if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                element.focus();
                element.setSelectionRange(0, element.value.length);

                selectedText = element.value;
            } else {
                if (element.hasAttribute('contenteditable')) {
                    element.focus();
                }

                var selection = window.getSelection();
                var range = document.createRange();

                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);

                selectedText = selection.toString();
            }

            return selectedText;
        },
        init: function(selector) {
            var self = this;
            $(selector).off('click').on('click', function() {
                self.select(this);
                document.execCommand('copy');
                Common.tips('已复制到剪切板');
                this.blur();
            });
        }
    };

    window.Clipboard = clipboard;
}(Zepto);;;
(function() {
    var iscroll = function(config) {
        this.init(config);
    };

    $.extend(iscroll.prototype, {
        init: function(config) {
            this.config = config;
            this.bindEvent();
        },
        refresh: function() {
            var self = this;
            $('.pull-down-active').removeClass('pull-loading')
                .find('span').html('下拉刷新...');
            $('.pull-up-active').removeClass('pull-loading')
                .find('span').html('上拉加载更多...');
            $('.pull-down,.pull-up').show();
            setTimeout(function() {
                self.move = '';
            }, 500);
        },
        bindEvent: function() {
            var self = this;

            $(self.config.content).off(Common.event.touchstart).on(Common.event.touchstart, function(e) {
                self.refresh();
                self.canScroll = true;
                self.move = '';
                //记录手指初始位置
                self.begin = e.touches ? e.touches[0].clientY : e.pageY;
            });

            $(document).off(Common.event.touchmove).on(Common.event.touchmove, function(e) {
                if (!self.canScroll) return;
                //记录滚动条位移
                var scrollTop = $(self.config.wrapper)[0].scrollTop;
                var clientY = e.touches ? e.touches[0].clientY : e.pageY;
                var step = clientY - self.begin;

                if (step < 0) { //向上滑
                    if ($('.pull-up-active').is('.disabled')) return;
                    var contentHeight = $(self.config.content).height();
                    var wrapperHeight = $(self.config.wrapper).height();
                    if (contentHeight - scrollTop - wrapperHeight < 50) {
                        self.move = 'up';
                        $('.pull-up-active').addClass('pull-flip')
                            .find('span').html('松手开始更新...');
                    }
                } else if (step > 0) { //向下滑
                    if ($('.pull-down-active').is('.disabled')) return;
                    if (scrollTop == 0) {
                        self.move = 'down';
                        $('.pull-down-active').addClass('pull-flip')
                            .find('span').html('松手开始更新...');
                    }
                }
            });

            $(document).off(Common.event.touchend).on(Common.event.touchend, function(e) {
                if (!self.canScroll) return;
                self.canScroll = false;
                //执行刷新操作
                if (self.move == 'down') {
                    self.config.down && self.config.down();
                    $('.pull-down-active').removeClass('pull-flip').addClass('pull-loading')
                        .find('span').html('加载中...');
                    return false;
                } else if (self.move == 'up') {
                    self.config.up && self.config.up();
                    $('.pull-up-active').removeClass('pull-flip').addClass('pull-loading')
                        .find('span').html('加载中...');
                    return false;
                }
                setTimeout(function() {
                    self.move = '';
                }, 500);
            });
        }
    });

    Common.scroll = iscroll;
})();;
App.controller('city', function(page) {

    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                this.getData();
                this.initEvent();
                Common.completed();
            },
            getData: function(){
                var self = this;
                Common.loading(true);
                Common.json('/city/get', {
                    lng: 0,
                    lat: 0,
                    cityId: 0
                }, function(d){
                    Common.loading(false);
                    window.City_Data = d.data;
                    self.renderPage();
                });
            },
            renderPage: function(){
                var self = this;
                var data = window.City_Data;
                self.getCityContent(data);
            },
            getCityContent: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h3>当前城市</h3>\n<ul>\n    <li data-id="'+
((__t=(data.current.cityId))==null?'':__t)+
'">'+
((__t=(data.current.name))==null?'':__t)+
'</li>\n</ul>\n<h3>开通的城市</h3>\n<ul>\n    ';
for(var i=0,item;item=data.cityList[i];i++){
__p+='\n    <li data-id="'+
((__t=(item.cityId))==null?'':__t)+
'">'+
((__t=(item.name))==null?'':__t)+
'</li>\n    ';
}
__p+='\n</ul>\n<div class="tips">\n    <label>目前已开通'+
((__t=(data.cityList.length))==null?'':__t)+
'个城市，更多城市正在开通中...</label>\n</div>';
}
return __p;
};
                var html = template({data: data||{}});
                $('#city-content').html(html);
            },
            initEvent: function() {
                var self = this;
                $('#city-content').on(Common.event.tap, 'li', function() {
                    var city = $(this).text();
                    App.load('index', { 'city': city });
                });
            }
        });

        new initPage();
    });
});;
App.controller('brand', function(page) {
    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                this.getData();
                this.initEvent();
                Common.completed();
            },
            getData: function(){
                var self = this;
                if(window.Brand_Data){
                    self.renderPage();
                }else{
                    Common.json('/brand/list', {}, function(d){
                        window.Brand_Data = d.data;
                        self.renderPage();
                    });
                }
            },
            renderPage: function(){
                var self = this;
                var data = window.Brand_Data;
                self.getAllBrand(data);
            },
            getAllBrand: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';

    var item,len=list.length;

__p+='\n';
for(var i=0;i<len;i++){
__p+='\n    ';

        item=list[i];
    
__p+='\n<li class="'+
((__t=(item.open?'app-link':'noliving'))==null?'':__t)+
'" data-target="shop" data-target-args=\'{"id":"'+
((__t=(item.brandId))==null?'':__t)+
'","name":"'+
((__t=(item.name))==null?'':__t)+
'"}\'>\n    <div class="img"><img src="'+
((__t=(item.logo))==null?'':__t)+
'" /></div>\n    <p>'+
((__t=(item.name))==null?'':__t)+
'</p>\n</li>\n';
}
__p+='';
}
return __p;
};
                var html = template({list: data||[]});
                $('#all-brand').html(html);
            },
            initEvent: function() {
                var self = this;
                $('#brand-content').on(Common.event.tap, '.noliving', function() {
                    Common.tips('品牌正在开通中...');
                    return false;
                });
            }
        });

        new initPage();
    });
});;
App.controller('shop', function(page, param) {

    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                this.id = 0;
                this.name = '';
                if(param){
                    this.id = param.id||0;
                    this.name = param.name||'';
                }
                $('#brand-name').html(this.name);
                this.getData();
                this.initEvent();
                Common.completed();
            },
            getData: function(){
                var self = this;
                if(window.Shop_Data){
                    self.renderPage();
                }else{
                    Common.json('/shop/list', {
                        brandId: self.id,
                        lng: 0,
                        lat: 0
                    }, function(d){
                        window.Shop_Data = d.data;
                        self.renderPage();
                    });
                }
            },
            renderPage: function(){
                var self = this;
                var data = window.Shop_Data;
                self.getBrandShopList(data.list);
            },
            getBrandShopList: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
for(var i=0,item;item=list[i];i++){
__p+='\n<li>\n    <a href="shop.html?id='+
((__t=(item.shopId))==null?'':__t)+
'">\n        <span>'+
((__t=(item.distance))==null?'':__t)+
'</span>\n        <p>\n            <strong>'+
((__t=(item.name))==null?'':__t)+
'</strong><br />\n            <label>'+
((__t=(item.address))==null?'':__t)+
'</label>\n        </p>\n    </a>\n</li>\n';
}
__p+='';
}
return __p;
};
                var html = template({list: data||[]});
                $('#brand-shop-list').html(html);
            },
            initEvent: function() {
                var self = this;
            }
        });

        new initPage();
    });
});;
App.controller('search', function(page, param) {
    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                this.keyword = '';
                if(param){
                    this.keyword = param.keyword||'';
                }
                $('#txt-search-input').val(this.keyword);
                this.getData();
                this.initEvent();
                Common.completed();
            },
            getData: function(){
                var self = this;
                Common.loading(true);
                Common.json('/shop/search', {
                    keyword: self.keyword,
                    lng: 0,
                    lat: 0
                }, function(d){
                    Common.loading(false);
                    window.Search_Data = d.data;
                    self.renderPage();
                });
            },
            renderPage: function(){
                var self = this;
                var data = window.Search_Data;
                self.getSearchList(data.list);
            },
            getSearchList: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
if(list.length==0){
__p+='\n<div class="empty">\n    <div class="icon icon-search"></div>\n    <p>暂时找不到数据</p>\n</div>\n';
}else{
__p+='\n<ul>\n';
for(var i=0,item;item=list[i];i++){
__p+='\n    <li>\n        <a href="shop.html?id='+
((__t=(item.shopId))==null?'':__t)+
'">\n            <span>'+
((__t=(item.distance))==null?'':__t)+
'</span>\n            <p>\n                <strong>'+
((__t=(item.name))==null?'':__t)+
'</strong><br />\n                <label>'+
((__t=(item.address))==null?'':__t)+
'</label>\n            </p>\n        </a>\n    </li>\n';
}
__p+='\n</ul>\n';
}
__p+='';
}
return __p;
};
                var html = template({list: data||[]});
                $('#search-list').html(html);
            },
            initEvent: function() {
                var self = this;
                $('#search-shop')
                    .off(Common.event.tap)
                    .on(Common.event.tap, function(){
                        self.keyword = $('#txt-search-input').val();
                        self.getData();
                    });
            }
        });

        new initPage();
    });
});;
App.controller('login', function(page) {

    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                this.initEvent();
                Common.completed();
            },
            initEvent: function() {
                var self = this;
                $('#get-validate').off(Common.event.tap).on(Common.event.tap, function(){
                    var mobile = $('#login-phone').val();
                    if(mobile.length==0){
                        Common.alert('请输入手机号码');
                        return;
                    }
                    Common.json('/login/getSecurityCode', {
                        mobile: mobile
                    }, function(d){
                    });
                });

                $('#login-btn').off(Common.event.tap).on(Common.event.tap, function(){
                    var mobile = $('#login-phone').val();
                    var securityCode = $('#login-validate').val();
                    var nickname = $('#login-name').val();
                    if(mobile.length==0){
                        Common.alert('请输入手机号码');
                        return;
                    }
                    if(securityCode.length==0){
                        Common.alert('请输入验证码');
                        return;
                    }
                    Common.loading(true);
                    Common.json('/login', {
                        mobile: mobile,
                        securityCode: securityCode,
                        nickname: nickname
                    }, function(d){
                        Common.loading(false);
                        Common.go('index');
                    });
                });
            }
        });

        new initPage();
    });
});;
App.controller('loginlive', function(page) {

    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                this.initEvent();
                this.getData();
                Common.completed();
            },
            getData: function(){
                var self = this;
                if(window.LoginLive_Data){
                    self.renderPage();
                }else{
                    Common.json('/city/list', {}, function(d){
                        window.LoginLive_Data = d.data;
                        self.renderPage();
                    });
                }
            },
            renderPage: function(){
                var self = this;
                var data = window.LoginLive_Data;
                self.getCityList(data);
            },
            getCityList: function(data){
                console.log(data);
            },
            initEvent: function() {
                var self = this;
            }
        });

        new initPage();
    });
});;
App.controller('index', function(page, param) {

    $(page).on('appShow', function() {
        var initPage = function() {
            this.init();
        };

        $.extend(initPage.prototype, {
            init: function() {
                if (param&&param.city) {
                    $('#sel-city').html(param.city);
                }
                Common.checkLogin(function(isLogin){
                    $('#link-login').off(Common.event.tap).on(Common.event.tap, function(){
                        if(isLogin){
                            Common.go('center.html');
                        }else{
                            Common.go('login');
                        }
                    });
                });
                this.getData();
                this.initEvent();
                Common.completed();
            },
            getData: function(){
                var self = this;
                if(window.Index_Data){
                    self.renderPage();
                }else{
                    Common.loading(true);
                    Common.json('/homepage/get', {}, function(d){
                        Common.loading(false);
                        window.Index_Data = d.data;
                        self.renderPage();
                    });
                }
            },
            renderPage: function(){
                var self = this;
                var data = window.Index_Data;
                self.getBannerList(data.bannerList);
                self.getBrandList(data.brandList);
                self.getShopList(data.shopList);
                self.getActivityList(data.activityList);
                Common.bindlink();
            },
            getBannerList: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';

    var item,len=list.length;

__p+='\n<div class="banner-imgs" style="width: '+
((__t=(len*100))==null?'':__t)+
'%;">\n    ';
for(var i=0,item;item=list[i];i++){
__p+='\n    <div class="img app-link" style="width:'+
((__t=(100/len))==null?'':__t)+
'%" \n        data-target="shop" \n        data-target-args=\'{"id":1}\'><img src="'+
((__t=(item.imageUrl))==null?'':__t)+
'" /></div>\n    ';
}
__p+='\n</div>\n<div class="banner-switch">\n    ';
for(var i=0;i<len;i++){
__p+='\n    <i class="'+
((__t=(i==0?'on':''))==null?'':__t)+
'"></i>\n    ';
}
__p+='\n</div>';
}
return __p;
};
                var html = template({list: data||[]});
                $('#banner-list').html(html);
                self.initScroll();
            },
            getBrandList: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
for(var i=0,item;item=list[i];i++){
__p+='\n<li>\n    <div class="app-link" data-target="shop" data-target-args=\'{"id":"'+
((__t=(item.bannerId))==null?'':__t)+
'","name":"'+
((__t=(item.name))==null?'':__t)+
'"}\'>\n        <div class="img"><img src="'+
((__t=(item.imageUrl))==null?'':__t)+
'" /></div>\n        <span>'+
((__t=(item.name))==null?'':__t)+
'</span>\n    </div>\n</li>\n';
}
__p+='';
}
return __p;
};
                var html = template({list: data||[]});
                $('#brand-list').html(html);
            },
            getShopList: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
for(var i=0,item;item=list[i];i++){
__p+='\n<li>\n    <a href="shop.html?id='+
((__t=(item.shopId))==null?'':__t)+
'">\n        <div class="img"><img src="'+
((__t=(item.roomImageUrl))==null?'':__t)+
'" /></div>\n        <div class="info">\n            <strong>'+
((__t=(item.name))==null?'':__t)+
'</strong><br />\n            <span>地址：'+
((__t=(item.address))==null?'':__t)+
'</span>\n        </div>\n    </a>\n</li>\n';
}
__p+='';
}
return __p;
};
                var html = template({list: data||[]});
                $('#shop-list').html(html);
            },
            getActivityList: function(data){
                var self = this;
                var template = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
for(var i=0,item;item=list[i];i++){
__p+='\n<li>\n    <a href="shop.html?id='+
((__t=(item.activityId))==null?'':__t)+
'">\n        <div class="img"><img src="'+
((__t=(item.roomImageUrl))==null?'':__t)+
'" /><span class="play"></span></div>\n        <div class="info">\n            <strong>'+
((__t=(item.name))==null?'':__t)+
'</strong>\n        </div>\n    </a>\n</li>\n';
}
__p+='';
}
return __p;
};
                var html = template({list: data||[]});
                $('#activity-list').html(html);
            },
            initScroll: function() {
                var self = this;
                var $imgObj = $('.banner-imgs'),
                    count = $imgObj.find('.img').length,
                    $switchObj = $('.banner-switch');
                self.scrollTime = 5000;
                self.scrollTimeObj = setTimeout(function() {
                    self.beginScroll($imgObj, $switchObj, count, 1);
                }, self.scrollTime);

                $('.banner').off('swipeLeft').on('swipeLeft', function() {
                    if (self.scrollIndex < count - 1) {
                        self.scrollIndex++;
                        self.beginScroll($imgObj, $switchObj, count, self.scrollIndex);
                    }
                }).off('swipeRight').on('swipeRight', function() {
                    if (self.scrollIndex > 0) {
                        self.scrollIndex--;
                        self.beginScroll($imgObj, $switchObj, count, self.scrollIndex);
                    }
                });
            },
            beginScroll: function($imgObj, $switchObj, count, idx) {
                var self = this;
                if (self.scrollTimeObj) {
                    clearTimeout(self.scrollTimeObj);
                }

                if (idx > count - 1) {
                    idx = count - 1;
                } else if (idx < 0) {
                    idx = 0;
                }
                $imgObj.css('margin-left', -idx * 100 + '%');
                $switchObj.find('i').each(function(index) {
                    if (index == idx) {
                        $(this).addClass('on');
                    } else {
                        $(this).removeClass('on');
                    }
                });
                self.scrollIndex = idx;
                self.scrollTimeObj = setTimeout(function() {
                    if (idx >= count - 1) {
                        idx = 0;
                    } else {
                        idx++;
                    }
                    self.beginScroll($imgObj, $switchObj, count, idx);
                }, self.scrollTime);
            },
            initEvent: function() {
                var self = this;

                $('#form-search').off('submit').on('submit', function(e){
                    Common.go('search', {
                        keyword: $('#txt-search').val()
                    });
                    return false;
                });
            }
        });

        new initPage();
    });
});;

App.load('index');