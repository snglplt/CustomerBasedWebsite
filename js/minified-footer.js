/* https://www.vtmteknik.com/templates/porto/3.4.0/modernizr/3.6.0/modernizr.js */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-csstransitions-domprefixes-mq-prefixed-prefixes-setclasses-shiv-testallprops-teststyles !*/
!function (e, t, n) { function r(e, t) { return typeof e === t } function o() { var e, t, n, o, i, a, s; for (var l in S) if (S.hasOwnProperty(l)) { if (e = [], t = S[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase()); for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), C.push((o ? "" : "no-") + s.join("-")) } } function i(e) { var t = b.className, n = Modernizr._config.classPrefix || ""; if (x && (t = t.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(r, "$1" + n + "js$2") } Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? b.className.baseVal = t : b.className = t) } function a(e) { return e.replace(/([a-z])-([a-z])/g, function (e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") } function s() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) } function l() { var e = t.body; return e || (e = s(x ? "svg" : "body"), e.fake = !0), e } function u(e, n, r, o) { var i, a, u, c, f = "modernizr", d = s("div"), p = l(); if (parseInt(r, 10)) for (; r--;)u = s("div"), u.id = o ? o[r] : f + (r + 1), d.appendChild(u); return i = s("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : d.parentNode.removeChild(d), !!a } function c(e, t) { return !!~("" + e).indexOf(t) } function f(e, t) { return function () { return e.apply(t, arguments) } } function d(e, t, n) { var o; for (var i in e) if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? f(o, n || t) : o); return !1 } function p(e) { return e.replace(/([A-Z])/g, function (e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") } function m(t, n, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, t, n); var i = e.console; if (null !== o) r && (o = o.getPropertyValue(r)); else if (i) { var a = i.error ? "error" : "log"; i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !n && t.currentStyle && t.currentStyle[r]; return o } function h(t, r) { var o = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(p(t[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var i = []; o--;)i.push("(" + p(t[o]) + ":" + r + ")"); return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == m(e, null, "position") }) } return n } function v(e, t, o, i) { function l() { f && (delete M.style, delete M.modElem) } if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var u = h(e, o); if (!r(u, "undefined")) return u } for (var f, d, p, m, v, g = ["modernizr", "tspan", "samp"]; !M.style && g.length;)f = !0, M.modElem = s(g.shift()), M.style = M.modElem.style; for (p = e.length, d = 0; p > d; d++)if (m = e[d], v = M.style[m], c(m, "-") && (m = a(m)), M.style[m] !== n) { if (i || r(o, "undefined")) return l(), "pfx" == t ? m : !0; try { M.style[m] = o } catch (y) { } if (M.style[m] != v) return l(), "pfx" == t ? m : !0 } return l(), !1 } function g(e, t, n, o, i) { var a = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + k.join(a + " ") + a).split(" "); return r(t, "string") || r(t, "undefined") ? v(s, t, o, i) : (s = (e + " " + N.join(a + " ") + a).split(" "), d(s, t, n)) } function y(e, t, r) { return g(e, n, n, t, r) } var C = [], S = [], E = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) { var n = this; setTimeout(function () { t(n[e]) }, 0) }, addTest: function (e, t, n) { S.push({ name: e, fn: t, options: n }) }, addAsyncTest: function (e) { S.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = E, Modernizr = new Modernizr; var b = t.documentElement, x = "svg" === b.nodeName.toLowerCase(), _ = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]; E._prefixes = _; x || !function (e, t) { function n(e, t) { var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement; return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild) } function r() { var e = C.elements; return "string" == typeof e ? e.split(" ") : e } function o(e, t) { var n = C.elements; "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t) } function i(e) { var t = y[e[v]]; return t || (t = {}, g++, e[v] = g, y[g] = t), t } function a(e, n, r) { if (n || (n = t), f) return n.createElement(e); r || (r = i(n)); var o; return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o) } function s(e, n) { if (e || (e = t), f) return e.createDocumentFragment(); n = n || i(e); for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++)o.createElement(s[a]); return o } function l(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) { return C.shivMethods ? a(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(C, t.frag) } function u(e) { e || (e = t); var r = i(e); return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e } var c, f, d = "3.7.3", p = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, v = "_html5shiv", g = 0, y = {}; !function () { try { var e = t.createElement("a"); e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function () { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }() } catch (n) { c = !0, f = !0 } }(); var C = { elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: d, shivCSS: p.shivCSS !== !1, supportsUnknownElements: f, shivMethods: p.shivMethods !== !1, type: "default", shivDocument: u, createElement: a, createDocumentFragment: s, addElements: o }; e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C) }("undefined" != typeof e ? e : this, t); var w = "Moz O ms Webkit", N = E._config.usePrefixes ? w.toLowerCase().split(" ") : []; E._domPrefixes = N; var z = "CSS" in e && "supports" in e.CSS, T = "supportsCSS" in e; Modernizr.addTest("supports", z || T); var j = function () { var t = e.matchMedia || e.msMatchMedia; return t ? function (e) { var n = t(e); return n && n.matches || !1 } : function (t) { var n = !1; return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) { n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position }), n } }(); E.mq = j; var k = (E.testStyles = u, E._config.usePrefixes ? w.split(" ") : []); E._cssomPrefixes = k; var P = function (t) { var r, o = _.length, i = e.CSSRule; if ("undefined" == typeof i) return n; if (!t) return !1; if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t; for (var a = 0; o > a; a++) { var s = _[a], l = s.toUpperCase() + "_" + r; if (l in i) return "@-" + s.toLowerCase() + "-" + t } return !1 }; E.atRule = P; var F = { elem: s("modernizr") }; Modernizr._q.push(function () { delete F.elem }); var M = { style: F.elem.style }; Modernizr._q.unshift(function () { delete M.style }), E.testAllProps = g, E.testAllProps = y, Modernizr.addTest("csstransforms3d", function () { return !!y("perspective", "1px", !0) }), Modernizr.addTest("csstransitions", y("transition", "all", !0)); E.prefixed = function (e, t, n) { return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? g(e, t, n) : g(e, "pfx")) }; o(), i(C), delete E.addTest, delete E.addAsyncTest; for (var L = 0; L < Modernizr._q.length; L++)Modernizr._q[L](); e.Modernizr = Modernizr }(window, document);
/* https://www.vtmteknik.com/templates/porto/3.4.0/jquery-appear/1.0.0/jquery.appear.js */
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
	$.fn.appear = function (fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function () {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function () {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function () {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function () {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function () {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function (i, n) {
			var old = $.fn[n];
			if (old) {
				$.fn[n] = function () {
					var r = old.apply(this, arguments);
					$.fn.appear.run();
					return r;
				}
			}
		});

})(jQuery);

/* https://www.vtmteknik.com/templates/porto/3.4.0/jquery-easing/1.3.0/jquery.easing.js */
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
	{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
		}
	});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* https://www.vtmteknik.com/templates/porto/3.4.0/bootstrap/3.3.7/js/bootstrap.min.js */
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), +function (a) { "use strict"; function b() { var a = document.createElement("bootstrap"), b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] }; return !1 } a.fn.emulateTransitionEnd = function (b) { var c = !1, d = this; a(this).one("bsTransitionEnd", function () { c = !0 }); var e = function () { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function () { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function (b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var c = a(this), e = c.data("bs.alert"); e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]', d = function (b) { a(b).on("click", c, this.close) }; d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) { function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this), f = e.attr("data-target"); f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f); b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert; a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b; e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function (b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 }; c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) { var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data(); b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function () { var a = !0, b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button; a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) { var d = a(c.target).closest(".btn"); b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide; e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function (b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) { case 37: this.prev(); break; case 39: this.next(); break; default: return }a.preventDefault() } }, c.prototype.cycle = function (b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function (a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function (a, b) { var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function (a) { var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function (b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function () { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function () { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function (b, d) { var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0], k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]); l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel; a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () { return a.fn.carousel = d, this }; var e = function (c) { var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to"); h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } }; a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () { a('[data-ride="carousel"]').each(function () { var c = a(this); b.call(c, c.data()) }) }) }(jQuery), +function (a) { "use strict"; function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) } function c(b) { return this.each(function () { var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b); !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function (b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() }; d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function () { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-")); this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension(); this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function () { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function () { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) { var e = a(d); this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function (a, b) { var c = a.hasClass("in"); a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse; a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) { var e = a(this); e.attr("data-target") || d.preventDefault(); var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data(); c.call(f, h) }) }(jQuery), +function (a) { "use strict"; function b(b) { var c = b.attr("data-target"); c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() } function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function () { var d = a(this), e = b(d), f = { relatedTarget: this }; e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) } function d(b) { return this.each(function () { var c = a(this), d = c.data("bs.dropdown"); d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) { a(b).on("click.bs.dropdown", this.toggle) }; g.VERSION = "3.3.7", g.prototype.toggle = function (d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e), g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return; e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function (c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d), g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target); 38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown; a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), +function (a) { "use strict"; function b(b, d) { return this.each(function () { var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b); f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function (b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function (b) { var d = this, e = a.Event("show.bs.modal", { relatedTarget: b }); this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () { d.$element.one("mouseup.dismiss.bs.modal", function (b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function () { var e = a.support.transition && d.$element.hasClass("fade"); d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b }); e ? d.$dialog.one("bsTransitionEnd", function () { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function (b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function () { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function () { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function () { var a = this; this.$element.hide(), this.backdrop(function () { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function (b) { var d = this, e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) { return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return; f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function () { d.removeBackdrop(), b && b() }; a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function () { this.adjustDialog() }, c.prototype.adjustDialog = function () { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight; this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function () { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function () { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect(); a = b.right - Math.abs(b.left) } this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function () { var a = parseInt(this.$body.css("padding-right") || 0, 10); this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function () { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function () { var a = document.createElement("div"); a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal; a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) { var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data()); d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function () { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b; !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout"; this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.getOptions = function (b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function () { var b = {}, c = this.getDefaults(); return this._options && a.each(this._options, function (a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function () { for (var a in this.inState) if (this.inState[a]) return !0; return !1 }, c.prototype.leave = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function () { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this, f = this.tip(), g = this.getUID(this.type); this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h); j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight; if (j) { var n = h, o = this.getPosition(this.$viewport); h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m); this.applyPlacement(p, h); var q = function () { var a = e.hoverState; e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) }; a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function (b, c) { var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10); isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function (a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth, j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j); k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight"; d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function (a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(); a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function (b) { function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function () { var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function () { return this.getTitle() }, c.prototype.getPosition = function (b) { b = b || this.$element; var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect(); null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement, g = d ? { top: 0, left: 0 } : f ? null : b.offset(), h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() }, i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function (a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d; h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f, k = b.left + f + c; j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function () { var a, b = this.$element, c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function (a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function () { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function () { this.enabled = !0 }, c.prototype.disable = function () { this.enabled = !1 }, c.prototype.toggleEnabled = function () { this.enabled = !this.enabled }, c.prototype.toggle = function (b) { var c = this; b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function () { var a = this; clearTimeout(this.timeout), this.hide(function () { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip; a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () { return a.fn.tooltip = d, this } }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b; !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js"); c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(), c = this.getContent(); a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function () { return this.getTitle() || this.getContent() }, c.prototype.getContent = function () { var a = this.$element, b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover; a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () { return a.fn.popover = d, this } }(jQuery), +function (a) {
	"use strict"; function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() } function c(c) { return this.each(function () { var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c; e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) } b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function () { var b = this, c = "offset", d = 0; this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () { var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null }).sort(function (a, b) { return a[0] - b[0] }).each(function () { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function () { var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active"); d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy; a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function () { a('[data-spy="scroll"]').each(function () { var b = a(this); c.call(b, b.data()) }) })
}(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tab"); e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function (b) { this.element = a(b) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () { var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", { relatedTarget: b[0] }), g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d); this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function (b, d, e) { function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length); g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab; a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () { return a.fn.tab = d, this }; var e = function (c) { c.preventDefault(), b.call(a(this), "show") }; a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b; e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function (b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() }; c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) { var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function () { if (this.pinnedOffset) return this.pinnedOffset; this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(), b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function () { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function () { if (this.$element.is(":visible")) { var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return; this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix; a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () { return a.fn.affix = d, this }, a(window).on("load", function () { a('[data-spy="affix"]').each(function () { var c = a(this), d = c.data(); d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);
/* https://www.vtmteknik.com/custom/www.deltaservis.com.tr/js/vendor/common.js */
!function (a) { a.extend({ browserSelector: function () { !function (a) { (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) }(navigator.userAgent || navigator.vendor || window.opera); var b = navigator.userAgent, d = b.toLowerCase(), e = function (a) { return d.indexOf(a) > -1 }, f = "gecko", g = "webkit", h = "safari", i = "opera", j = document.documentElement, k = [!/opera|webtv/i.test(d) && /msie\s(\d)/.test(d) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : e("firefox/2") ? f + " ff2" : e("firefox/3.5") ? f + " ff3 ff3_5" : e("firefox/3") ? f + " ff3" : e("gecko/") ? f : e("opera") ? i + (/version\/(\d+)/.test(d) ? " " + i + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(d) ? " " + i + RegExp.jQuery2 : "") : e("konqueror") ? "konqueror" : e("chrome") ? g + " chrome" : e("iron") ? g + " iron" : e("applewebkit/") ? g + " " + h + (/version\/(\d+)/.test(d) ? " " + h + RegExp.jQuery1 : "") : e("mozilla/") ? f : "", e("j2me") ? "mobile" : e("iphone") ? "iphone" : e("ipod") ? "ipod" : e("mac") ? "mac" : e("darwin") ? "mac" : e("webtv") ? "webtv" : e("win") ? "win" : e("freebsd") ? "freebsd" : e("x11") || e("linux") ? "linux" : "", "js"]; c = k.join(" "), a.browser.mobile && (c += " mobile"), j.className += " " + c; var l = !window.ActiveXObject && "ActiveXObject" in window; return l ? void a("html").removeClass("gecko").addClass("ie ie11") : (a("body").hasClass("dark") && a("html").addClass("dark"), void (a("body").hasClass("boxed") && a("html").addClass("boxed"))) } }), a.browserSelector() }(jQuery), function (a) { var b = "waitForImages"; a.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"] }, a.expr[":"].uncached = function (b) { if (!a(b).is('img[src][src!=""]')) return !1; var c = new Image; return c.src = b.src, !c.complete }, a.fn.waitForImages = function (c, d, e) { var f = 0, g = 0; if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied."); return this.each(function () { var h = a(this), i = [], j = a.waitForImages.hasImageProperties || [], k = /url\(\s*(['"]?)(.*?)\1\s*\)/g; e ? h.find("*").addBack().each(function () { var b = a(this); b.is("img:uncached") && i.push({ src: b.attr("src"), element: b[0] }), a.each(j, function (a, c) { var d, e = b.css(c); if (!e) return !0; for (; d = k.exec(e);)i.push({ src: d[2], element: b[0] }) }) }) : h.find("img:uncached").each(function () { i.push({ src: this.src, element: this }) }), f = i.length, g = 0, 0 === f && c.call(h[0]), a.each(i, function (e, i) { var j = new Image, k = "load." + b + " error." + b; a(j).on(k, function l(b) { return g++, d.call(i.element, g, f, "load" == b.type), a(this).off(k, l), g == f ? (c.call(h[0]), !1) : void 0 }), j.src = i.src }) }) } }(jQuery), function (a) { function b(a, b) { return a.toFixed(b.decimals) } a.fn.countTo = function (b) { return b = b || {}, a(this).each(function () { function c() { k += g, j++, d(k), "function" == typeof e.onUpdate && e.onUpdate.call(h, k), j >= f && (i.removeData("countTo"), clearInterval(l.interval), k = e.to, "function" == typeof e.onComplete && e.onComplete.call(h, k)) } function d(a) { var b = e.formatter.call(h, a, e); i.html(b) } var e = a.extend({}, a.fn.countTo.defaults, { from: a(this).data("from"), to: a(this).data("to"), speed: a(this).data("speed"), refreshInterval: a(this).data("refresh-interval"), decimals: a(this).data("decimals") }, b), f = Math.ceil(e.speed / e.refreshInterval), g = (e.to - e.from) / f, h = this, i = a(this), j = 0, k = e.from, l = i.data("countTo") || {}; i.data("countTo", l), l.interval && clearInterval(l.interval), l.interval = setInterval(c, e.refreshInterval), d(k) }) }, a.fn.countTo.defaults = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: b, onUpdate: null, onComplete: null } }(jQuery), function (a) { "use strict"; var b, c = { action: function () { }, runOnLoad: !1, duration: 500 }, d = c, e = !1, f = {}; f.init = function () { for (var b = 0; b <= arguments.length; b++) { var c = arguments[b]; switch (typeof c) { case "function": d.action = c; break; case "boolean": d.runOnLoad = c; break; case "number": d.duration = c } } return this.each(function () { d.runOnLoad && d.action(), a(this).resize(function () { f.timedAction.call(this) }) }) }, f.timedAction = function (a, c) { var f = function () { var a = d.duration; if (e) { var c = new Date - b; if (a = d.duration - c, 0 >= a) return clearTimeout(e), e = !1, void d.action() } g(a) }, g = function (a) { e = setTimeout(f, a) }; b = new Date, "number" == typeof c && (d.duration = c), "function" == typeof a && (d.action = a), e || f() }, a.fn.afterResize = function (a) { return f[a] ? f[a].apply(this, Array.prototype.slice.call(arguments, 1)) : f.init.apply(this, arguments) } }(jQuery), function (a) { a.extend({ smoothScroll: function () { function a() { var a = !1; if (document.URL.indexOf("google.com/reader/view") > -1 && (a = !0), t.excluded) { var b = t.excluded.split(/[,\n] ?/); b.push("mail.google.com"); for (var c = b.length; c--;)if (document.URL.indexOf(b[c]) > -1) { r && r.disconnect(), j("mousewheel", d), a = !0, u = !0; break } } a && j("keydown", e), t.keyboardSupport && !a && i("keydown", e) } function b() { if (document.body) { var b = document.body, c = document.documentElement, d = window.innerHeight, e = b.scrollHeight; if (y = document.compatMode.indexOf("CSS") >= 0 ? c : b, q = b, a(), x = !0, top != self) v = !0; else if (e > d && (b.offsetHeight <= d || c.offsetHeight <= d)) { var f = !1, g = function () { f || c.scrollHeight == document.height || (f = !0, setTimeout(function () { c.style.height = document.height + "px", f = !1 }, 500)) }; c.style.height = "auto", setTimeout(g, 10); var h = { attributes: !0, childList: !0, characterData: !1 }; if (r = new I(g), r.observe(b, h), y.offsetHeight <= d) { var i = document.createElement("div"); i.style.clear = "both", b.appendChild(i) } } if (document.URL.indexOf("mail.google.com") > -1) { var j = document.createElement("style"); j.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || c).appendChild(j) } else if (document.URL.indexOf("www.facebook.com") > -1) { var k = document.getElementById("home_stream"); k && (k.style.webkitTransform = "translateZ(0)") } t.fixedBackground || u || (b.style.backgroundAttachment = "scroll", c.style.backgroundAttachment = "scroll") } } function c(a, b, c, d) { if (d || (d = 1e3), l(b, c), 1 != t.accelerationMax) { var e = +new Date, f = e - D; if (f < t.accelerationDelta) { var g = (1 + 30 / f) / 2; g > 1 && (g = Math.min(g, t.accelerationMax), b *= g, c *= g) } D = +new Date } if (B.push({ x: b, y: c, lastX: 0 > b ? .99 : -.99, lastY: 0 > c ? .99 : -.99, start: +new Date }), !C) { var h = a === document.body, i = function () { for (var e = +new Date, f = 0, g = 0, j = 0; j < B.length; j++) { var k = B[j], l = e - k.start, m = l >= t.animationTime, n = m ? 1 : l / t.animationTime; t.pulseAlgorithm && (n = p(n)); var o = k.x * n - k.lastX >> 0, q = k.y * n - k.lastY >> 0; f += o, g += q, k.lastX += o, k.lastY += q, m && (B.splice(j, 1), j--) } h ? window.scrollBy(f, g) : (f && (a.scrollLeft += f), g && (a.scrollTop += g)), b || c || (B = []), B.length ? H(i, a, d / t.frameRate + 1) : C = !1 }; H(i, a, 0), C = !0 } } function d(a) { x || b(); var d = a.target, e = h(d); if (!e || a.defaultPrevented || k(q, "embed") || k(d, "embed") && /\.pdf/i.test(d.src)) return !0; var f = a.wheelDeltaX || 0, g = a.wheelDeltaY || 0; return f || g || (g = a.wheelDelta || 0), !t.touchpadSupport && m(g) ? !0 : (Math.abs(f) > 1.2 && (f *= t.stepSize / 120), Math.abs(g) > 1.2 && (g *= t.stepSize / 120), c(e, -f, -g), void a.preventDefault()) } function e(a) { var b = a.target, d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== A.spacebar; if (/input|textarea|select|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || d) return !0; if (k(b, "button") && a.keyCode === A.spacebar) return !0; var e, f = 0, g = 0, i = h(q), j = i.clientHeight; switch (i == document.body && (j = window.innerHeight), a.keyCode) { case A.up: g = -t.arrowScroll; break; case A.down: g = t.arrowScroll; break; case A.spacebar: e = a.shiftKey ? 1 : -1, g = -e * j * .9; break; case A.pageup: g = .9 * -j; break; case A.pagedown: g = .9 * j; break; case A.home: g = -i.scrollTop; break; case A.end: var l = i.scrollHeight - i.scrollTop - j; g = l > 0 ? l + 10 : 0; break; case A.left: f = -t.arrowScroll; break; case A.right: f = t.arrowScroll; break; default: return !0 }c(i, f, g), a.preventDefault() } function f(a) { q = a.target } function g(a, b) { for (var c = a.length; c--;)E[G(a[c])] = b; return b } function h(a) { var b = [], c = y.scrollHeight; do { var d = E[G(a)]; if (d) return g(b, d); if (b.push(a), c === a.scrollHeight) { if (!v || y.clientHeight + 10 < c) return g(b, document.body) } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return g(b, a) } while (a = a.parentNode) } function i(a, b, c) { window.addEventListener(a, b, c || !1) } function j(a, b, c) { window.removeEventListener(a, b, c || !1) } function k(a, b) { return (a.nodeName || "").toLowerCase() === b.toLowerCase() } function l(a, b) { a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (w.x !== a || w.y !== b) && (w.x = a, w.y = b, B = [], D = 0) } function m(a) { if (a) { a = Math.abs(a), z.push(a), z.shift(), clearTimeout(F); var b = z[0] == z[1] && z[1] == z[2], c = n(z[0], 120) && n(z[1], 120) && n(z[2], 120); return !(b || c) } } function n(a, b) { return Math.floor(a / b) == a / b } function o(a) { var b, c, d; return a *= t.pulseScale, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), a -= 1, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * t.pulseNormalize } function p(a) { return a >= 1 ? 1 : 0 >= a ? 0 : (1 == t.pulseNormalize && (t.pulseNormalize /= o(1)), o(a)) } var q, r, s = { frameRate: 60, animationTime: 700, stepSize: 120, pulseAlgorithm: !0, pulseScale: 10, pulseNormalize: 1, accelerationDelta: 20, accelerationMax: 1, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !0, fixedBackground: !0, excluded: "" }, t = s, u = !1, v = !1, w = { x: 0, y: 0 }, x = !1, y = document.documentElement, z = [120, 120, 120], A = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 }, B = [], C = !1, D = +new Date, E = {}; setInterval(function () { E = {} }, 1e4); var F, G = function () { var a = 0; return function (b) { return b.uniqueID || (b.uniqueID = a++) } }(), H = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a, b, c) { window.setTimeout(a, c || 1e3 / 60) } }(), I = window.MutationObserver || window.WebKitMutationObserver; i("mousedown", f), i("mousewheel", d), i("load", b) } }), navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && a.smoothScroll() }(jQuery);
/* https://www.vtmteknik.com/templates/porto/3.4.0/jquery-validation/1.14.0/js/jquery.validate.min.js */
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function (a) { a.extend(a.fn, { validate: function (b) { if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")); var c = a.data(this[0], "validator"); return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) { c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.on("submit.validate", function (b) { function d() { var d, e; return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0 } return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1) })), c) }, valid: function () { var b, c, d; return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () { b = c.element(this) && b, d = d.concat(c.errorList) }), c.errorList = d), b }, rules: function (b, c) { var d, e, f, g, h, i, j = this[0]; if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) { case "add": a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages)); break; case "remove": return c ? (i = {}, a.each(c.split(/\s/), function (b, c) { i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required") }), i) : (delete e[j.name], f) }return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g } }), a.extend(a.expr[":"], { blank: function (b) { return !a.trim("" + a(b).val()) }, filled: function (b) { return !!a.trim("" + a(b).val()) }, unchecked: function (b) { return !a(b).prop("checked") } }), a.validator = function (b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function (b, c) { return 1 === arguments.length ? function () { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () { return c }) }), b) }, a.extend(a.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (a) { this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a))) }, onfocusout: function (a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) }, onkeyup: function (b, c) { var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]; 9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b) }, onclick: function (a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) }, highlight: function (b, c, d) { "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d) }, unhighlight: function (b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) } }, setDefaults: function (b) { a.extend(a.validator.defaults, b) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function () { function b(b) { var c = a.data(this.form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings; e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b) } this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var c, d = this.groups = {}; a.each(this.settings.groups, function (b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function (b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true") }, form: function () { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function () { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]); return this.valid() }, element: function (b) { var c = this.clean(b), d = this.validationTargetFor(c), e = !0; return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e }, showErrors: function (b) { if (b) { a.extend(this.errorMap, b), this.errorList = []; for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] }); this.successList = a.grep(this.successList, function (a) { return !(a.name in b) }) } this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function () { a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(); var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid"); if (this.settings.unhighlight) for (b = 0; c[b]; b++)this.settings.unhighlight.call(this, c[b], this.settings.errorClass, ""); else c.removeClass(this.settings.errorClass) }, numberOfInvalids: function () { return this.objectLength(this.invalid) }, objectLength: function (a) { var b, c = 0; for (b in a) c++; return c }, hideErrors: function () { this.hideThese(this.toHide) }, hideThese: function (a) { a.not(this.containers).text(""), this.addWrapper(a).hide() }, valid: function () { return 0 === this.size() }, size: function () { return this.errorList.length }, focusInvalid: function () { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (b) { } }, findLastActive: function () { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function (a) { return a.element.name === b.name }).length && b }, elements: function () { var b = this, c = {}; return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () { return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0) }) }, clean: function (b) { return a(b)[0] }, errors: function () { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) }, reset: function () { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]) }, prepareForm: function () { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function (a) { this.reset(), this.toHide = this.errorsFor(a) }, elementValue: function (b) { var c, d = a(b), e = b.type; return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c) }, check: function (b) { b = this.validationTargetFor(this.clean(b)); var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) { return b }).length, h = !1, i = this.elementValue(b); for (d in f) { e = { method: d, parameters: f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) { h = !0; continue } if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (j) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j } } if (!h) return this.objectLength(f) && this.successList.push(b), !0 }, customDataMessage: function (b, c) { return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") }, customMessage: function (a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) }, findDefined: function () { for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a]) return arguments[a]; return void 0 }, defaultMessage: function (b, c) { return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>") }, formatAndAdd: function (b, c) { var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g; "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({ message: d, element: b, method: c.method }), this.errorMap[b.name] = d, this.submitted[b.name] = d }, addWrapper: function (a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a }, defaultShowErrors: function () { var a, b, c; for (a = 0; this.errorList[a]; a++)c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message); if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]); if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass); this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function () { return this.currentElements.not(this.invalidElements()) }, invalidElements: function () { return a(this.errorList).map(function () { return this.element }) }, showLabel: function (b, c) { var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby"); g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) { c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id")) }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g) }, errorsFor: function (b) { var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *"; return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e) }, idOrName: function (a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) }, validationTargetFor: function (b) { return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0] }, checkable: function (a) { return /radio|checkbox/i.test(a.type) }, findByName: function (b) { return a(this.currentForm).find("[name='" + b + "']") }, getLength: function (b, c) { switch (c.nodeName.toLowerCase()) { case "select": return a("option:selected", c).length; case "input": if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length }return b.length }, depend: function (a, b) { return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0 }, dependTypes: { "boolean": function (a) { return a }, string: function (b, c) { return !!a(b, c.form).length }, "function": function (a, b) { return a(b) } }, optional: function (b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" }, startRequest: function (a) { this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0) }, stopRequest: function (b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function (b) { return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") }) }, destroy: function () { this.resetForm(), a(this.currentForm).off(".validate").removeData("validator") } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function (b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) }, classRules: function (b) { var c = {}, d = a(b).attr("class"); return d && a.each(d.split(" "), function () { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c }, normalizeAttributeRule: function (a, b, c, d) { /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0) }, attributeRules: function (b) { var c, d, e = {}, f = a(b), g = b.getAttribute("type"); for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d); return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e }, dataRules: function (b) { var c, d, e = {}, f = a(b), g = b.getAttribute("type"); for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d); return e }, staticRules: function (b) { var c = {}, d = a.data(b.form, "validator"); return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c }, normalizeRules: function (b, c) { return a.each(b, function (d, e) { if (e === !1) return void delete b[d]; if (e.param || e.depends) { var f = !0; switch (typeof e.depends) { case "string": f = !!a(e.depends, c.form).length; break; case "function": f = e.depends.call(c, c) }f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d] } }), a.each(b, function (d, e) { b[d] = a.isFunction(e) ? e(c) : e }), a.each(["minlength", "maxlength"], function () { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function () { var c; b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])])) }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b }, normalizeRule: function (b) { if ("string" == typeof b) { var c = {}; a.each(b.split(/\s/), function () { c[this] = !0 }), b = c } return b }, addMethod: function (b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) }, methods: { required: function (b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0 }, email: function (a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) }, url: function (a, b) { return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a) }, date: function (a, b) { return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()) }, dateISO: function (a, b) { return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a) }, number: function (a, b) { return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) }, digits: function (a, b) { return this.optional(b) || /^\d+$/.test(a) }, creditcard: function (a, b) { if (this.optional(b)) return "dependency-mismatch"; if (/[^0-9 \-]+/.test(a)) return !1; var c, d, e = 0, f = 0, g = !1; if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1; for (c = a.length - 1; c >= 0; c--)d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g; return e % 10 === 0 }, minlength: function (b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d }, maxlength: function (b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || d >= e }, rangelength: function (b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d[0] && e <= d[1] }, min: function (a, b, c) { return this.optional(b) || a >= c }, max: function (a, b, c) { return this.optional(b) || c >= a }, range: function (a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] }, equalTo: function (b, c, d) { var e = a(d); return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function () { a(c).valid() }), b === e.val() }, remote: function (b, c, d) { if (this.optional(c)) return "dependency-mismatch"; var e, f, g = this.previousValue(c); return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && { url: d } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, { mode: "abort", port: "validate" + c.name, dataType: "json", data: f, context: e.currentForm, success: function (d) { var f, h, i, j = d === !0 || "true" === d; e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j) } }, d)), "pending") } } }); var b, c = {}; a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function (d) { var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port; return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments) }) });
/* https://www.vtmteknik.com/templates/porto/3.4.0/jquery-isotope/2.1.0/jquery.isotope.js */
/*!
 * Isotope PACKAGED v2.1.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function (t) { function e() { } function i(t) { function i(e) { e.prototype.option || (e.prototype.option = function (e) { t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)) }) } function n(e, i) { t.fn[e] = function (n) { if ("string" == typeof n) { for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) { var p = this[a], h = t.data(p, e); if (h) if (t.isFunction(h[n]) && "_" !== n.charAt(0)) { var f = h[n].apply(h, s); if (void 0 !== f) return f } else r("no such method '" + n + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'") } return this } return this.each(function () { var o = t.data(this, e); o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o)) }) } } if (t) { var r = "undefined" == typeof console ? e : function (t) { console.error(t) }; return t.bridget = function (t, e) { i(e), n(t, e) }, t.bridget } } var o = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery) })(window), function (t) { function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i } var i = document.documentElement, o = function () { }; i.addEventListener ? o = function (t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (o = function (t, i, o) { t[i + o] = o.handleEvent ? function () { var i = e(t); o.handleEvent.call(o, i) } : function () { var i = e(t); o.call(t, i) }, t.attachEvent("on" + i, t[i + o]) }); var n = function () { }; i.removeEventListener ? n = function (t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (n = function (t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (o) { t[e + i] = void 0 } }); var r = { bind: o, unbind: n }; "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r }(this), function (t) { function e(t) { "function" == typeof t && (e.isReady ? t() : s.push(t)) } function i(t) { var i = "readystatechange" === t.type && "complete" !== r.readyState; e.isReady || i || o() } function o() { e.isReady = !0; for (var t = 0, i = s.length; i > t; t++) { var o = s[t]; o() } } function n(n) { return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e } var r = t.document, s = []; e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie) }(window), function () { function t() { } function e(t, e) { for (var i = t.length; i--;)if (t[i].listener === e) return i; return -1 } function i(t) { return function () { return this[t].apply(this, arguments) } } var o = t.prototype, n = this, r = n.EventEmitter; o.getListeners = function (t) { var e, i, o = this._getEvents(); if (t instanceof RegExp) { e = {}; for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]) } else e = o[t] || (o[t] = []); return e }, o.flattenListeners = function (t) { var e, i = []; for (e = 0; t.length > e; e += 1)i.push(t[e].listener); return i }, o.getListenersAsObject = function (t) { var e, i = this.getListeners(t); return i instanceof Array && (e = {}, e[t] = i), e || i }, o.addListener = function (t, i) { var o, n = this.getListenersAsObject(t), r = "object" == typeof i; for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : { listener: i, once: !1 }); return this }, o.on = i("addListener"), o.addOnceListener = function (t, e) { return this.addListener(t, { listener: e, once: !0 }) }, o.once = i("addOnceListener"), o.defineEvent = function (t) { return this.getListeners(t), this }, o.defineEvents = function (t) { for (var e = 0; t.length > e; e += 1)this.defineEvent(t[e]); return this }, o.removeListener = function (t, i) { var o, n, r = this.getListenersAsObject(t); for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1)); return this }, o.off = i("removeListener"), o.addListeners = function (t, e) { return this.manipulateListeners(!1, t, e) }, o.removeListeners = function (t, e) { return this.manipulateListeners(!0, t, e) }, o.manipulateListeners = function (t, e, i) { var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners; if ("object" != typeof e || e instanceof RegExp) for (o = i.length; o--;)r.call(this, e, i[o]); else for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n)); return this }, o.removeEvent = function (t) { var e, i = typeof t, o = this._getEvents(); if ("string" === i) delete o[t]; else if (t instanceof RegExp) for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events; return this }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) { var i, o, n, r, s = this.getListenersAsObject(t); for (n in s) if (s.hasOwnProperty(n)) for (o = s[n].length; o--;)i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener); return this }, o.trigger = i("emitEvent"), o.emit = function (t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, o.setOnceReturnValue = function (t) { return this._onceReturnValue = t, this }, o._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, o._getEvents = function () { return this._events || (this._events = {}) }, t.noConflict = function () { return n.EventEmitter = r, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return t }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t }.call(this), function (t) { function e(t) { if (t) { if ("string" == typeof o[t]) return t; t = t.charAt(0).toUpperCase() + t.slice(1); for (var e, n = 0, r = i.length; r > n; n++)if (e = i[n] + t, "string" == typeof o[e]) return e } } var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () { return e }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e }(window), function (t) { function e(t) { var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e); return i && e } function i() { } function o() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = s.length; i > e; e++) { var o = s[e]; t[o] = 0 } return t } function n(i) { function n() { if (!d) { d = !0; var o = t.getComputedStyle; if (p = function () { var t = o ? function (t) { return o(t, null) } : function (t) { return t.currentStyle }; return function (e) { var i = t(e); return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i } }(), h = i("boxSizing")) { var n = document.createElement("div"); n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box"; var s = document.body || document.documentElement; s.appendChild(n); var a = p(n); f = 200 === e(a.width), s.removeChild(n) } } } function a(t) { if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) { var i = p(t); if ("none" === i.display) return o(); var r = {}; r.width = t.offsetWidth, r.height = t.offsetHeight; for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) { var c = s[d], y = i[c]; y = u(t, y); var m = parseFloat(y); r[c] = isNaN(m) ? 0 : m } var g = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom, _ = r.marginLeft + r.marginRight, I = r.marginTop + r.marginBottom, L = r.borderLeftWidth + r.borderRightWidth, z = r.borderTopWidth + r.borderBottomWidth, b = a && f, x = e(i.width); x !== !1 && (r.width = x + (b ? 0 : g + L)); var S = e(i.height); return S !== !1 && (r.height = S + (b ? 0 : v + z)), r.innerWidth = r.width - (g + L), r.innerHeight = r.height - (v + z), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r } } function u(e, i) { if (t.getComputedStyle || -1 === i.indexOf("%")) return i; var o = e.style, n = o.left, r = e.runtimeStyle, s = r && r.left; return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i } var p, h, f, d = !1; return a } var r = "undefined" == typeof console ? i : function (t) { console.error(t) }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty) }(window), function (t) { function e(t, e) { return t[s](e) } function i(t) { if (!t.parentNode) { var e = document.createDocumentFragment(); e.appendChild(t) } } function o(t, e) { i(t); for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)if (o[n] === t) return !0; return !1 } function n(t, o) { return i(t), e(t, o) } var r, s = function () { if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) { var n = e[i], r = n + "MatchesSelector"; if (t[r]) return r } }(); if (s) { var a = document.createElement("div"), u = e(a, "div"); r = u ? e : n } else r = o; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () { return r }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r }(Element.prototype), function (t) { function e(t, e) { for (var i in e) t[i] = e[i]; return t } function i(t) { for (var e in t) return !1; return e = null, !0 } function o(t) { return t.replace(/([A-Z])/g, function (t) { return "-" + t.toLowerCase() }) } function n(t, n, r) { function a(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), d = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[u], l = ["transform", "transition", "transitionDuration", "transitionProperty"], c = function () { for (var t = {}, e = 0, i = l.length; i > e; e++) { var o = l[e], n = r(o); n && n !== o && (t[o] = n) } return t }(); e(a.prototype, t.prototype), a.prototype._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, a.prototype.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, a.prototype.getSize = function () { this.size = n(this.element) }, a.prototype.css = function (t) { var e = this.element.style; for (var i in t) { var o = c[i] || i; e[o] = t[i] } }, a.prototype.getPosition = function () { var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10); n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r; var a = this.layout.size; n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r }, a.prototype.layoutPosition = function () { var t = this.layout.size, e = this.layout.options, i = {}; e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this]) }; var y = f ? function (t, e) { return "translate3d(" + t + "px, " + e + "px, 0)" } : function (t, e) { return "translate(" + t + "px, " + e + "px)" }; a.prototype._transitionTo = function (t, e) { this.getPosition(); var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y; if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0; var a = t - i, u = e - o, p = {}, h = this.layout.options; a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, a.prototype.goTo = function (t, e) { this.setPosition(t, e), this.layoutPosition() }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, a.prototype._nonTransition = function (t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, a.prototype._transition = function (t) { if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0; var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var o = this.element.offsetHeight; o = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var m = p && o(p) + ",opacity"; a.prototype.enableTransition = function () { this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(d, this, !1)) }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) { this.ontransitionend(t) }, a.prototype.onotransitionend = function (t) { this.ontransitionend(t) }; var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" }; a.prototype.ontransitionend = function (t) { if (t.target === this.element) { var e = this._transn, o = g[t.propertyName] || t.propertyName; if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) { var n = e.onEnd[o]; n.call(this), delete e.onEnd[o] } this.emitEvent("transitionEnd", [this]) } }, a.prototype.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1 }, a.prototype._removeStyles = function (t) { var e = {}; for (var i in t) e[i] = ""; this.css(e) }; var v = { transitionProperty: "", transitionDuration: "" }; return a.prototype.removeTransitionStyles = function () { this.css(v) }, a.prototype.removeElem = function () { this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]) }, a.prototype.remove = function () { if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0; var t = this; this.on("transitionEnd", function () { return t.removeElem(), !0 }), this.hide() }, a.prototype.reveal = function () { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options; this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0 }) }, a.prototype.hide = function () { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options; this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: { opacity: function () { this.isHidden && this.css({ display: "none" }) } } }) }, a.prototype.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, a } var r = t.getComputedStyle, s = r ? function (t) { return r(t, null) } : function (t) { return t.currentStyle }; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty)) }(window), function (t) { function e(t, e) { for (var i in e) t[i] = e[i]; return t } function i(t) { return "[object Array]" === f.call(t) } function o(t) { var e = []; if (i(t)) e = t; else if (t && "number" == typeof t.length) for (var o = 0, n = t.length; n > o; o++)e.push(t[o]); else e.push(t); return e } function n(t, e) { var i = l(e, t); -1 !== i && e.splice(i, 1) } function r(t) { return t.replace(/(.)([A-Z])/g, function (t, e, i) { return e + "-" + i }).toLowerCase() } function s(i, s, f, l, c, y) { function m(t, i) { if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0; this.element = t, this.options = e({}, this.constructor.defaults), this.option(i); var o = ++g; this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout() } var g = 0, v = {}; return m.namespace = "outlayer", m.Item = y, m.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, e(m.prototype, f.prototype), m.prototype.option = function (t) { e(this.options, t) }, m.prototype._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, m.prototype.reloadItems = function () { this.items = this._itemize(this.element.children) }, m.prototype._itemize = function (t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) { var s = e[n], a = new i(s, this); o.push(a) } return o }, m.prototype._filterFindItemElements = function (t) { t = o(t); for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) { var s = t[n]; if (d(s)) if (e) { c(s, e) && i.push(s); for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)i.push(a[u]) } else i.push(s) } return i }, m.prototype.getItemElements = function () { for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e].element); return t }, m.prototype.layout = function () { this._resetLayout(), this._manageStamps(); var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; this.layoutItems(this.items, t), this._isLayoutInited = !0 }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () { this.getSize() }, m.prototype.getSize = function () { this.size = l(this.element) }, m.prototype._getMeasurement = function (t, e) { var i, o = this.options[t]; o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0 }, m.prototype.layoutItems = function (t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, m.prototype._getItemsForLayout = function (t) { for (var e = [], i = 0, o = t.length; o > i; i++) { var n = t[i]; n.isIgnored || e.push(n) } return e }, m.prototype._layoutItems = function (t, e) { function i() { o.emitEvent("layoutComplete", [o, t]) } var o = this; if (!t || !t.length) return i(), void 0; this._itemsOn(t, "layout", i); for (var n = [], r = 0, s = t.length; s > r; r++) { var a = t[r], u = this._getItemLayoutPosition(a); u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u) } this._processLayoutQueue(n) }, m.prototype._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, m.prototype._processLayoutQueue = function (t) { for (var e = 0, i = t.length; i > e; e++) { var o = t[e]; this._positionItem(o.item, o.x, o.y, o.isInstant) } }, m.prototype._positionItem = function (t, e, i, o) { o ? t.goTo(e, i) : t.moveTo(e, i) }, m.prototype._postLayout = function () { this.resizeContainer() }, m.prototype.resizeContainer = function () { if (this.options.isResizingContainer) { var t = this._getContainerSize(); t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)) } }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) { if (void 0 !== t) { var i = this.size; i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, m.prototype._itemsOn = function (t, e, i) { function o() { return n++, n === r && i.call(s), !0 } for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) { var p = t[a]; p.on(e, o) } }, m.prototype.ignore = function (t) { var e = this.getItem(t); e && (e.isIgnored = !0) }, m.prototype.unignore = function (t) { var e = this.getItem(t); e && delete e.isIgnored }, m.prototype.stamp = function (t) { if (t = this._find(t)) { this.stamps = this.stamps.concat(t); for (var e = 0, i = t.length; i > e; e++) { var o = t[e]; this.ignore(o) } } }, m.prototype.unstamp = function (t) { if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) { var o = t[e]; n(o, this.stamps), this.unignore(o) } }, m.prototype._find = function (t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0 }, m.prototype._manageStamps = function () { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var t = 0, e = this.stamps.length; e > t; t++) { var i = this.stamps[t]; this._manageStamp(i) } } }, m.prototype._getBoundingRect = function () { var t = this.element.getBoundingClientRect(), e = this.size; this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) { var e = t.getBoundingClientRect(), i = this._boundingRect, o = l(t), n = { left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom }; return n }, m.prototype.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, m.prototype.bindResize = function () { this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0) }, m.prototype.unbindResize = function () { this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1 }, m.prototype.onresize = function () { function t() { e.resize(), delete e.resizeTimeout } this.resizeTimeout && clearTimeout(this.resizeTimeout); var e = this; this.resizeTimeout = setTimeout(t, 100) }, m.prototype.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, m.prototype.needsResizeLayout = function () { var t = l(this.element), e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, m.prototype.addItems = function (t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, m.prototype.appended = function (t) { var e = this.addItems(t); e.length && (this.layoutItems(e, !0), this.reveal(e)) }, m.prototype.prepended = function (t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, m.prototype.reveal = function (t) { var e = t && t.length; if (e) for (var i = 0; e > i; i++) { var o = t[i]; o.reveal() } }, m.prototype.hide = function (t) { var e = t && t.length; if (e) for (var i = 0; e > i; i++) { var o = t[i]; o.hide() } }, m.prototype.getItem = function (t) { for (var e = 0, i = this.items.length; i > e; e++) { var o = this.items[e]; if (o.element === t) return o } }, m.prototype.getItems = function (t) { if (t && t.length) { for (var e = [], i = 0, o = t.length; o > i; i++) { var n = t[i], r = this.getItem(n); r && e.push(r) } return e } }, m.prototype.remove = function (t) { t = o(t); var e = this.getItems(t); if (e && e.length) { this._itemsOn(e, "remove", function () { this.emitEvent("removeComplete", [this, e]) }); for (var i = 0, r = e.length; r > i; i++) { var s = e[i]; s.remove(), n(s, this.items) } } }, m.prototype.destroy = function () { var t = this.element.style; t.height = "", t.position = "", t.width = ""; for (var e = 0, i = this.items.length; i > e; e++) { var o = this.items[e]; o.destroy() } this.unbindResize(); var n = this.element.outlayerGUID; delete v[n], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace) }, m.data = function (t) { var e = t && t.outlayerGUID; return e && v[e] }, m.create = function (t, i) { function o() { m.apply(this, arguments) } return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function () { y.apply(this, arguments) }, o.Item.prototype = new y, s(function () { for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) { var f, d = i[s], l = d.getAttribute(n); try { f = l && JSON.parse(l) } catch (c) { u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c); continue } var y = new o(d, f); p && p.data(d, t, y) } }), p && p.bridget && p.bridget(t, o), o }, m.Item = y, m } var a = t.document, u = t.console, p = t.jQuery, h = function () { }, f = Object.prototype.toString, d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) { return t instanceof HTMLElement } : function (t) { return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName }, l = Array.prototype.indexOf ? function (t, e) { return t.indexOf(e) } : function (t, e) { for (var i = 0, o = t.length; o > i; i++)if (t[i] === e) return i; return -1 }; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item) }(window), function (t) { function e(t) { function e() { t.Item.apply(this, arguments) } e.prototype = new t.Item, e.prototype._create = function () { this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {} }, e.prototype.updateSortData = function () { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData, e = this.layout._sorters; for (var i in t) { var o = e[i]; this.sortData[i] = o(this.element, this) } } }; var i = e.prototype.destroy; return e.prototype.destroy = function () { i.apply(this, arguments), this.css({ display: "" }) }, e } "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window), function (t) { function e(t, e) { function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } return function () { function t(t) { return function () { return e.prototype[t].apply(this.isotope, arguments) } } for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) { var s = o[n]; i.prototype[s] = t(s) } }(), i.prototype.needsVerticalResizeLayout = function () { var e = t(this.isotope.element), i = this.isotope.size && e; return i && e.innerHeight !== this.isotope.size.innerHeight }, i.prototype._getMeasurement = function () { this.isotope._getMeasurement.apply(this, arguments) }, i.prototype.getColumnWidth = function () { this.getSegmentSize("column", "Width") }, i.prototype.getRowHeight = function () { this.getSegmentSize("row", "Height") }, i.prototype.getSegmentSize = function (t, e) { var i = t + e, o = "outer" + e; if (this._getMeasurement(i, o), !this[i]) { var n = this.getFirstItemSize(); this[i] = n && n[o] || this.isotope.size["inner" + e] } }, i.prototype.getFirstItemSize = function () { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, i.prototype.layout = function () { this.isotope.layout.apply(this.isotope, arguments) }, i.prototype.getSize = function () { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function (t, e) { function o() { i.apply(this, arguments) } return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o }, i } "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window), function (t) { function e(t, e) { var o = t.create("masonry"); return o.prototype._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(); var t = this.cols; for (this.colYs = []; t--;)this.colYs.push(0); this.maxY = 0 }, o.prototype.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0], i = t && t.element; this.columnWidth = i && e(i).outerWidth || this.containerWidth } this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1) }, o.prototype.getContainerWidth = function () { var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t); this.containerWidth = i && i.innerWidth }, o.prototype._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth); n = Math.min(n, this.cols); for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)this.colYs[a + f] = p; return u }, o.prototype._getColGroup = function (t) { if (2 > t) return this.colYs; for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) { var n = this.colYs.slice(o, o + t); e[o] = Math.max.apply(Math, n) } return e }, o.prototype._manageStamp = function (t) { var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth); s = Math.max(0, s); var a = Math.floor(r / this.columnWidth); a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a); for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)this.colYs[p] = Math.max(u, this.colYs[p]) }, o.prototype._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t }, o.prototype._getContainerFitWidth = function () { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++; return (this.cols - t) * this.columnWidth - this.gutter }, o.prototype.needsResizeLayout = function () { var t = this.containerWidth; return this.getContainerWidth(), t !== this.containerWidth }, o } var i = Array.prototype.indexOf ? function (t, e) { return t.indexOf(e) } : function (t, e) { for (var i = 0, o = t.length; o > i; i++) { var n = t[i]; if (n === e) return i } return -1 }; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window), function (t) { function e(t, e) { for (var i in e) t[i] = e[i]; return t } function i(t, i) { var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement; e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s; var a = o.prototype.measureColumns; o.prototype.measureColumns = function () { this.items = this.isotope.filteredItems, a.call(this) }; var u = o.prototype._manageStamp; return o.prototype._manageStamp = function () { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments) }, o } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry) }(window), function (t) { function e(t) { var e = t.create("fitRows"); return e.prototype._resetLayout = function () { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, e.prototype._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter; 0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var o = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o }, e.prototype._getContainerSize = function () { return { height: this.maxY } }, e } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window), function (t) { function e(t) { var e = t.create("vertical", { horizontalAlignment: 0 }); return e.prototype._resetLayout = function () { this.y = 0 }, e.prototype._getItemLayoutPosition = function (t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, e.prototype._getContainerSize = function () { return { height: this.y } }, e } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window), function (t) {
	function e(t, e) { for (var i in e) t[i] = e[i]; return t } function i(t) { return "[object Array]" === h.call(t) } function o(t) { var e = []; if (i(t)) e = t; else if (t && "number" == typeof t.length) for (var o = 0, n = t.length; n > o; o++)e.push(t[o]); else e.push(t); return e } function n(t, e) { var i = f(e, t); -1 !== i && e.splice(i, 1) } function r(t, i, r, u, h) {
		function f(t, e) { return function (i, o) { for (var n = 0, r = t.length; r > n; n++) { var s = t[n], a = i.sortData[s], u = o.sortData[s]; if (a > u || u > a) { var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1; return (a > u ? 1 : -1) * h } } return 0 } } var d = t.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }); d.Item = u, d.LayoutMode = h, d.prototype._create = function () { this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var e in h.modes) this._initLayoutMode(e) }, d.prototype.reloadItems = function () { this.itemGUID = 0, t.prototype.reloadItems.call(this) }, d.prototype._itemize = function () {
			for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) { var n = e[i]; n.id = this.itemGUID++ } return this._updateItemsSortData(e), e
		}, d.prototype._initLayoutMode = function (t) { var i = h.modes[t], o = this.options[t] || {}; this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this) }, d.prototype.layout = function () { return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0) }, d.prototype._layout = function () { var t = this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, d.prototype.arrange = function (t) { this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout() }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function () { var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = t, t }, d.prototype._filter = function (t) { function e() { f.reveal(n), f.hide(r) } var i = this.options.filter; i = i || "*"; for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) { var p = t[a]; if (!p.isIgnored) { var h = s(p); h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p) } } var f = this; return this._isInstant ? this._noTransition(e) : e(), o }, d.prototype._getFilterTest = function (t) { return s && this.options.isJQueryFiltering ? function (e) { return s(e.element).is(t) } : "function" == typeof t ? function (e) { return t(e.element) } : function (e) { return r(e.element, t) } }, d.prototype.updateSortData = function (t) { var e; t ? (t = o(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, d.prototype._getSorters = function () { var t = this.options.getSortData; for (var e in t) { var i = t[e]; this._sorters[e] = l(i) } }, d.prototype._updateItemsSortData = function (t) { for (var e = t && t.length, i = 0; e && e > i; i++) { var o = t[i]; o.updateSortData() } }; var l = function () { function t(t) { if ("string" != typeof t) return t; var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), u = d.sortDataParsers[i[1]]; return t = u ? function (t) { return t && u(s(t)) } : function (t) { return t && s(t) } } function e(t, e) { var i; return i = t ? function (e) { return e.getAttribute(t) } : function (t) { var i = t.querySelector(e); return i && p(i) } } return t }(); d.sortDataParsers = { parseInt: function (t) { return parseInt(t, 10) }, parseFloat: function (t) { return parseFloat(t) } }, d.prototype._sort = function () { var t = this.options.sortBy; if (t) { var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending); this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t) } }, d.prototype._mode = function () { var t = this.options.layoutMode, e = this.modes[t]; if (!e) throw Error("No layout mode: " + t); return e.options = this.options[t], e }, d.prototype._resetLayout = function () { t.prototype._resetLayout.call(this), this._mode()._resetLayout() }, d.prototype._getItemLayoutPosition = function (t) { return this._mode()._getItemLayoutPosition(t) }, d.prototype._manageStamp = function (t) { this._mode()._manageStamp(t) }, d.prototype._getContainerSize = function () { return this._mode()._getContainerSize() }, d.prototype.needsResizeLayout = function () { return this._mode().needsResizeLayout() }, d.prototype.appended = function (t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e); this.filteredItems = this.filteredItems.concat(i) } }, d.prototype.prepended = function (t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(); var o = this._filterRevealAdded(e); this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems) } }, d.prototype._filterRevealAdded = function (t) { var e = this._noTransition(function () { return this._filter(t) }); return this.layoutItems(e, !0), this.reveal(e), t }, d.prototype.insert = function (t) { var e = this.addItems(t); if (e.length) { var i, o, n = e.length; for (i = 0; n > i; i++)o = e[i], this.element.appendChild(o.element); var r = this._filter(e); for (this._noTransition(function () { this.hide(r) }), i = 0; n > i; i++)e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; n > i; i++)delete e[i].isLayoutInstant; this.reveal(r) } }; var c = d.prototype.remove; return d.prototype.remove = function (t) { t = o(t); var e = this.getItems(t); if (c.call(this, t), e && e.length) for (var i = 0, r = e.length; r > i; i++) { var s = e[i]; n(s, this.filteredItems) } }, d.prototype.shuffle = function () { for (var t = 0, e = this.items.length; e > t; t++) { var i = this.items[t]; i.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, d.prototype._noTransition = function (t) { var e = this.options.transitionDuration; this.options.transitionDuration = 0; var i = t.call(this); return this.options.transitionDuration = e, i }, d.prototype.getFilteredItemElements = function () { for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)t.push(this.filteredItems[e].element); return t }, d
	} var s = t.jQuery, a = String.prototype.trim ? function (t) { return t.trim() } : function (t) { return t.replace(/^\s+|\s+$/g, "") }, u = document.documentElement, p = u.textContent ? function (t) { return t.textContent } : function (t) { return t.innerText }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function (t, e) { return t.indexOf(e) } : function (t, e) { for (var i = 0, o = t.length; o > i; i++)if (t[i] === e) return i; return -1 }; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
/* https://www.vtmteknik.com/templates/porto/3.4.0/owlcarousel/2.0.0/owl.carousel.min.js */
!function (a, b, c, d) { function e(b, c) { b.owlCarousel = { name: "Owl Carousel", author: "Bartosz Wojciechowski", version: "2.0.0-beta.2.1" }, this.settings = null, this.options = a.extend({}, e.Defaults, c), this.itemData = a.extend({}, l), this.dom = a.extend({}, m), this.width = a.extend({}, n), this.num = a.extend({}, o), this.drag = a.extend({}, q), this.state = a.extend({}, r), this.e = a.extend({}, s), this.plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = null, this.dom.el = b, this.dom.$el = a(b); for (var d in e.Plugins) this.plugins[d[0].toLowerCase() + d.slice(1)] = new e.Plugins[d](this); this.init() } function f(a) { var b, d, e = c.createElement("div"), f = a; for (b in f) if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b]; return [!1] } function g() { return f(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] } function h() { return f(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] } function i() { return f(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] } function j() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints } function k() { return b.navigator.msPointerEnabled } var l, m, n, o, p, q, r, s; l = { index: !1, indexAbs: !1, posLeft: !1, clone: !1, active: !1, loaded: !1, lazyLoad: !1, current: !1, width: !1, center: !1, page: !1, hasVideo: !1, playVideo: !1 }, m = { el: null, $el: null, stage: null, $stage: null, oStage: null, $oStage: null, $items: null, $oItems: null, $cItems: null, $content: null }, n = { el: 0, stage: 0, item: 0, prevWindow: 0, cloneLast: 0 }, o = { items: 0, oItems: 0, cItems: 0, active: 0, merged: [] }, q = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, r = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, s = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Plugins = {}, e.prototype.init = function () { if (this.setResponsiveOptions(), this.trigger("initialize"), this.dom.$el.hasClass(this.settings.baseClass) || this.dom.$el.addClass(this.settings.baseClass), this.dom.$el.hasClass(this.settings.themeClass) || this.dom.$el.addClass(this.settings.themeClass), this.settings.rtl && this.dom.$el.addClass("owl-rtl"), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var a, b, c; if (a = this.dom.$el.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.dom.$el.children(b).width(), a.length && 0 >= c) return this.preloadAutoWidthImages(a), !1 } this.width.prevWindow = this.viewport(), this.createStage(), this.fetchContent(), this.eventsCall(), this.internalEvents(), this.dom.$el.addClass("owl-loading"), this.refresh(!0), this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"), this.trigger("initialized"), this.addTriggerableEvents() }, e.prototype.setResponsiveOptions = function () { if (this.options.responsive) { var b = this.viewport(), c = this.options.responsive, d = -1; a.each(c, function (a) { b >= a && a > d && (d = Number(a)) }), this.settings = a.extend({}, this.options, c[d]), delete this.settings.responsive, this.settings.responsiveClass && this.dom.$el.attr("class", function (a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d) } else this.settings = a.extend({}, this.options) }, e.prototype.optionsLogic = function () { this.dom.$el.toggleClass("owl-center", this.settings.center), this.settings.loop && this.num.oItems < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.createStage = function () { var b = c.createElement("div"), d = c.createElement(this.settings.stageElement); b.className = "owl-stage-outer", d.className = "owl-stage", b.appendChild(d), this.dom.el.appendChild(b), this.dom.oStage = b, this.dom.$oStage = a(b), this.dom.stage = d, this.dom.$stage = a(d), b = null, d = null }, e.prototype.createItemContainer = function () { var b = c.createElement(this.settings.itemElement); return b.className = this.settings.itemClass, a(b) }, e.prototype.fetchContent = function (b) { this.dom.$content = b ? b instanceof jQuery ? b : a(b) : this.settings.nestedItemSelector ? this.dom.$el.find("." + this.settings.nestedItemSelector).not(".owl-stage-outer") : this.dom.$el.children().not(".owl-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure() }, e.prototype.initStructure = function () { this.createNormalStructure() }, e.prototype.createNormalStructure = function () { var a, b; for (a = 0; a < this.num.oItems; a++)b = this.createItemContainer(), this.initializeItemContainer(b, this.dom.$content[a]), this.dom.$stage.append(b); this.dom.$content = null }, e.prototype.createCustomStructure = function (a) { var b, c; for (b = 0; a > b; b++)c = this.createItemContainer(), this.createItemContainerData(c), this.dom.$stage.append(c) }, e.prototype.initializeItemContainer = function (a, b) { this.trigger("change", { property: { name: "item", value: a } }), this.createItemContainerData(a), a.append(b), this.trigger("changed", { property: { name: "item", value: a } }) }, e.prototype.createItemContainerData = function (b, c) { var d = a.extend({}, this.itemData); c && a.extend(d, c.data("owl-item")), b.data("owl-item", d) }, e.prototype.cloneItemContainer = function (a) { var b = a.clone(!0, !0).addClass("cloned"); return this.createItemContainerData(b, b), b.data("owl-item").clone = !0, b }, e.prototype.updateLocalContent = function () { var b, c; for (this.dom.$oItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function () { return a(this).data("owl-item").clone === !1 }), this.num.oItems = this.dom.$oItems.length, b = 0; b < this.num.oItems; b++)c = this.dom.$oItems.eq(b), c.data("owl-item").index = b }, e.prototype.loopClone = function () { if (!this.settings.loop || this.num.oItems < this.settings.items) return !1; var b, c, d, e = this.settings.items, f = this.num.oItems - 1; for (this.settings.stagePadding && 1 === this.settings.items && (e += 1), this.num.cItems = 2 * e, d = 0; e > d; d++)b = this.cloneItemContainer(this.dom.$oItems.eq(d)), c = this.cloneItemContainer(this.dom.$oItems.eq(f - d)), this.dom.$stage.append(b), this.dom.$stage.prepend(c); this.dom.$cItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function () { return a(this).data("owl-item").clone === !0 }) }, e.prototype.reClone = function () { null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.settings.loop && this.loopClone() }, e.prototype.calculate = function () { var a, b, c, d, e, f, g, h = 0, i = 0; for (this.width.el = this.dom.$el.width() - 2 * this.settings.stagePadding, this.width.view = this.dom.$el.width(), c = this.width.el - this.settings.margin * (1 === this.settings.items ? 0 : this.settings.items - 1), this.width.el = this.width.el + this.settings.margin, this.width.item = (c / this.settings.items + this.settings.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".owl-item"), this.num.items = this.dom.$items.length, this.settings.autoWidth && this.dom.$items.css("width", ""), this._coordinates = [], this.num.merged = [], d = this.settings.rtl ? this.settings.center ? -(this.width.el / 2) : 0 : this.settings.center ? this.width.el / 2 : 0, this.width.mergeStage = 0, a = 0; a < this.num.items; a++)this.settings.merge ? (g = this.dom.$items.eq(a).find("[data-merge]").attr("data-merge") || 1, this.settings.mergeFit && g > this.settings.items && (g = this.settings.items), this.num.merged.push(parseInt(g)), this.width.mergeStage += this.width.item * this.num.merged[a]) : this.num.merged.push(1), f = this.width.item * this.num.merged[a], this.settings.autoWidth && (f = this.dom.$items.eq(a).width() + this.settings.margin, this.settings.rtl ? this.dom.$items[a].style.marginLeft = this.settings.margin + "px" : this.dom.$items[a].style.marginRight = this.settings.margin + "px"), this._coordinates.push(d), this.dom.$items.eq(a).data("owl-item").posLeft = h, this.dom.$items.eq(a).data("owl-item").width = f, this.settings.rtl ? (d += f, h += f) : (d -= f, h -= f), i -= Math.abs(f), this.settings.center && (this._coordinates[a] = this.settings.rtl ? this._coordinates[a] + f / 2 : this._coordinates[a] - f / 2); for (this.width.stage = Math.abs(this.settings.autoWidth ? this.settings.center ? i : d : i), e = this.num.oItems + this.num.cItems, b = 0; e > b; b++)this.dom.$items.eq(b).data("owl-item").indexAbs = b; this.setSizes() }, e.prototype.setSizes = function () { this.settings.stagePadding !== !1 && (this.dom.oStage.style.paddingLeft = this.settings.stagePadding + "px", this.dom.oStage.style.paddingRight = this.settings.stagePadding + "px"), this.settings.rtl ? b.setTimeout(a.proxy(function () { this.dom.stage.style.width = this.width.stage + "px" }, this), 0) : this.dom.stage.style.width = this.width.stage + "px"; for (var c = 0; c < this.num.items; c++)this.settings.autoWidth || (this.dom.$items[c].style.width = this.width.item - this.settings.margin + "px"), this.settings.rtl ? this.dom.$items[c].style.marginLeft = this.settings.margin + "px" : this.dom.$items[c].style.marginRight = this.settings.margin + "px", 1 === this.num.merged[c] || this.settings.autoWidth || (this.dom.$items[c].style.width = this.width.item * this.num.merged[c] - this.settings.margin + "px"); this.width.stagePrev = this.width.stage }, e.prototype.responsive = function () { if (!this.num.oItems) return !1; var a = this.isElWidthChanged(); return a ? this.trigger("resize").isDefaultPrevented() ? !1 : (this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.trigger("resized")) : !1 }, e.prototype.refresh = function () { var a = this.dom.$oItems && this.dom.$oItems.eq(this.normalize(this.current(), !0)); return this.trigger("refresh"), this.setResponsiveOptions(), this.updateLocalContent(), this.optionsLogic(), 0 === this.num.oItems ? !1 : (this.dom.$stage.addClass("owl-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("owl-refresh"), a ? this.reset(a.data("owl-item").indexAbs) : (this.dom.oStage.scrollLeft = 0, this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)), this.state.orientation = b.orientation, this.watchVisibility(), void this.trigger("refreshed")) }, e.prototype.updateActiveItems = function () { this.trigger("change", { property: { name: "items", value: this.dom.$items } }); var a, b, c, d, e, f; for (a = 0; a < this.num.items; a++)this.dom.$items.eq(a).data("owl-item").active = !1, this.dom.$items.eq(a).data("owl-item").current = !1, this.dom.$items.eq(a).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass); for (this.num.active = 0, padding = 2 * this.settings.stagePadding, stageX = this.coordinates(this.current()) + padding, view = this.settings.rtl ? this.width.view : -this.width.view, b = 0; b < this.num.items; b++)c = this.dom.$items.eq(b), d = c.data("owl-item").posLeft, e = c.data("owl-item").width, f = this.settings.rtl ? d - e - padding : d - e + padding, (this.op(d, "<=", stageX) && this.op(d, ">", stageX + view) || this.op(f, "<", stageX) && this.op(f, ">", stageX + view)) && (this.num.active++, c.data("owl-item").active = !0, c.data("owl-item").current = !0, c.addClass(this.settings.activeClass), this.settings.lazyLoad || (c.data("owl-item").loaded = !0), this.settings.loop && this.updateClonedItemsState(c.data("owl-item").index)); this.settings.center && (this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center = !0), this.trigger("changed", { property: { name: "items", value: this.dom.$items } }) }, e.prototype.updateClonedItemsState = function (a) { var b, c, d; for (this.settings.center && (b = this.dom.$items.eq(this.current()).data("owl-item").index), d = 0; d < this.num.items; d++)c = this.dom.$items.eq(d), c.data("owl-item").index === a && (c.data("owl-item").current = !0, c.data("owl-item").index === b && c.addClass(this.settings.centerClass)) }, e.prototype.eventsCall = function () { this.e._onDragStart = a.proxy(function (a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function (a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function (a) { this.onDragEnd(a) }, this), this.e._transitionEnd = a.proxy(function (a) { this.transitionEnd(a) }, this), this.e._resizer = a.proxy(function () { this.responsiveTimer() }, this), this.e._responsiveCall = a.proxy(function () { this.responsive() }, this), this.e._preventClick = a.proxy(function (a) { this.preventClick(a) }, this) }, e.prototype.responsiveTimer = function () { return this.viewport() === this.width.prevWindow ? !1 : (b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._responsiveCall, this.settings.responsiveRefreshRate), void (this.width.prevWindow = this.viewport())) }, e.prototype.internalEvents = function () { var a = j(), d = k(); this.dragType = a && !d ? ["touchstart", "touchmove", "touchend", "touchcancel"] : a && d ? ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : ["mousedown", "mousemove", "mouseup"], (a || d) && this.settings.touchDrag ? this.on(c, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function () { return !1 }), this.settings.mouseDrag ? this.dom.stage.onselectstart = function () { return !1 } : this.dom.$el.addClass("owl-text-select-on")), this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", this.e._resizer, !1), this.dragEvents() }, e.prototype.dragEvents = function () { !this.settings.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.settings.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) }, e.prototype.onDragStart = function (a) { var d, e, f, g, h; if (d = a.originalEvent || a || b.event, 3 === d.which) return !1; if ("mousedown" === this.dragType[0] && this.dom.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, e = "touchstart" === d.type, f = e ? a.targetTouches[0].pageX : d.pageX || d.clientX, g = e ? a.targetTouches[0].pageY : d.pageY || d.clientY, this.drag.offsetX = this.dom.$stage.position().left - this.settings.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1; this.drag.startX = f - this.drag.offsetX, this.drag.startY = g - this.drag.offsetY, this.drag.start = f - this.drag.startX, this.drag.targetEl = d.target || d.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), this.on(c, this.dragType[1], this.e._onDragMove, !1), this.on(c, this.dragType[2], this.e._onDragEnd, !1) }, e.prototype.onDragMove = function (a) { var c, e, f, g, h, i, j; this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = "touchmove" == c.type, f = e ? c.targetTouches[0].pageX : c.pageX || c.clientX, g = e ? c.targetTouches[0].pageY : c.pageY || c.clientY, this.drag.currentX = f - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, e.prototype.onDragEnd = function () { var a, b, d; if (this.state.isTouch) { if ("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1; this.drag.endTime = (new Date).getTime(), a = this.drag.endTime - this.drag.startTime, b = Math.abs(this.drag.distance), (b > 3 || a > 300) && this.removeClick(this.drag.targetEl), d = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(d), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(d) || this.transitionEnd(), this.drag.distance = 0, this.off(c, this.dragType[1], this.e._onDragMove), this.off(c, this.dragType[2], this.e._onDragEnd) } }, e.prototype.removeClick = function (c) { this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () { a(c).off("click.preventClick") }, 300) }, e.prototype.preventClick = function (b) { b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick") }, e.prototype.getTransformProperty = function () { var a, c; return a = b.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12] }, e.prototype.closest = function (b) { var c = 0, d = 30; return this.settings.freeDrag || a.each(this.coordinates(), a.proxy(function (a, e) { b > e - d && e + d > b ? c = a : this.op(b, "<", e) && this.op(b, ">", this.coordinates(a + 1) || e - this.width.el) && (c = "left" === this.state.direction ? a + 1 : a) }, this)), this.settings.loop || (this.op(b, ">", this.coordinates(this.minimum())) ? c = b = this.minimum() : this.op(b, "<", this.coordinates(this.maximum())) && (c = b = this.maximum())), c }, e.prototype.animate = function (b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.dom.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.dom.$stage.css({ left: b + "px" }) : this.dom.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function (a) { if (a === d) return this._current; if (0 === this.num.oItems) return d; if (a = this.normalize(a), this._current === a) this.animate(this.coordinates(this._current)); else { var b = this.trigger("change", { property: { name: "position", value: a } }); b.data !== d && (a = this.normalize(b.data)), this._current = a, this.animate(this.coordinates(this._current)), this.updateActiveItems(), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.reset = function (a) { this.suppress(["change", "changed"]), this.speed(0), this.current(a), this.release(["change", "changed"]) }, e.prototype.normalize = function (a, b) { if (a === d || !this.dom.$items) return d; if (this.settings.loop) { var c = this.dom.$items.length; a = (a % c + c) % c } else a = Math.max(this.minimum(), Math.min(this.maximum(), a)); return b ? this.dom.$items.eq(a).data("owl-item").index : a }, e.prototype.maximum = function () { var b, c, d = this.settings; if (!d.loop && d.center) b = this.num.oItems - 1; else if (d.loop || d.center) if (d.loop || d.center) b = this.num.oItems + d.items; else { if (!d.autoWidth && !d.merge) throw "Can not detect maximum absolute position."; revert = d.rtl ? 1 : -1, c = this.dom.$stage.width() - this.$el.width(), a.each(this.coordinates(), function (a, d) { return d * revert >= c ? !1 : void (b = a + 1) }) } else b = this.num.oItems - d.items; return b }, e.prototype.minimum = function () { return this.dom.$oItems.eq(0).data("owl-item").indexAbs }, e.prototype.speed = function (a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function (a) { return a !== d ? this._coordinates[a] : this._coordinates }, e.prototype.duration = function (a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function (c, d) { if (this.settings.loop) { var e = c - this.normalize(this.current(), !0), f = this.current(), g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1; h < this.settings.items && i === !1 ? (f = this.num.items - (this.settings.items - g) - this.settings.items, this.reset(f)) : h >= this.num.items - this.settings.items && i === !0 && (f = g - this.num.oItems, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e) }, this), 30) } else this.speed(this.duration(this.current(), c, d)), this.current(c) }, e.prototype.next = function (a) { a = a || !1, this.to(this.normalize(this.current(), !0) + 1, a) }, e.prototype.prev = function (a) { a = a || !1, this.to(this.normalize(this.current(), !0) - 1, a) }, e.prototype.transitionEnd = function (a) { if (a !== d) { a.stopPropagation(); var b = a.target || a.srcElement || a.originalTarget; if (b !== this.dom.stage) return !1 } this.state.inMotion = !1, this.trigger("translated") }, e.prototype.isElWidthChanged = function () { var a = this.dom.$el.width() - this.settings.stagePadding, b = this.width.el + this.settings.margin; return a !== b }, e.prototype.viewport = function () { var d; if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth) d = b.innerWidth; else { if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width."; d = c.documentElement.clientWidth } return d }, e.prototype.insertContent = function (a) { this.dom.$stage.empty(), this.fetchContent(a), this.refresh() }, e.prototype.addItem = function (a, b) { var c = this.createItemContainer(); b = b || 0, this.initializeItemContainer(c, a), 0 === this.dom.$oItems.length ? this.dom.$stage.append(c) : -1 !== p ? this.dom.$oItems.eq(b).before(c) : this.dom.$oItems.eq(b).after(c), this.refresh() }, e.prototype.removeItem = function (a) { this.dom.$oItems.eq(a).remove(), this.refresh() }, e.prototype.addTriggerableEvents = function () { var b = a.proxy(function (b, c) { return a.proxy(function (a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this); a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.insertContent, add: this.addItem, remove: this.removeItem }, a.proxy(function (a, c) { this.dom.$el.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this)) }, e.prototype.watchVisibility = function () { function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 } function d() { c(this.dom.el) && (this.dom.$el.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) } c(this.dom.el) || (this.dom.$el.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)) }, e.prototype.preloadAutoWidthImages = function (b) { var c, d, e, f; c = 0, d = this, b.each(function (g, h) { e = a(h), f = new Image, f.onload = function () { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.init()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") }) }, e.prototype.destroy = function () { this.dom.$el.hasClass(this.settings.themeClass) && this.dom.$el.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && this.off(b, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd); for (var a in this.plugins) this.plugins[a].destroy(); (this.settings.mouseDrag || this.settings.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.settings.mouseDrag && this.off(c, this.dragType[3], this.e._onDragStart), this.settings.mouseDrag && (this.dom.$stage.off("dragstart", function () { return !1 }), this.dom.stage.onselectstart = function () { })), this.dom.$el.off(".owl"), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null }, e.prototype.op = function (a, b, c) { var d = this.settings.rtl; switch (b) { case "<": return d ? a > c : c > a; case ">": return d ? c > a : a > c; case ">=": return d ? c >= a : a >= c; case "<=": return d ? a >= c : c >= a } }, e.prototype.on = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function (a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function (b, c, d) { var e = { item: { count: this.num.oItems, index: this.current() } }, f = a.camelCase(a.grep(["on", b, d], function (a) { return a }).join("-").toLowerCase()), g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c)); return this._supress[g.type] || (a.each(this.plugins, function (a, b) { b.onTrigger && b.onTrigger(g) }), this.dom.$el.trigger(g), "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g }, e.prototype.suppress = function (b) { a.each(b, a.proxy(function (a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function (b) { a.each(b, a.proxy(function (a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function () { if (this.support3d = i(), this.support3d) { this.transformVendor = h(); var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"]; this.transitionEndVendor = a[g()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" } this.state.orientation = b.orientation }, a.fn.owlCarousel = function (b) { return this.each(function () { a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b)) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document), function (a, b) { LazyLoad = function (b) { this.owl = b, this.owl.options = a.extend({}, LazyLoad.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": a.proxy(function (a) { "items" == a.property.name && a.property.value && !a.property.value.is(":empty") && this.check() }, this) }, this.owl.dom.$el.on(this.handlers) }, LazyLoad.Defaults = { lazyLoad: !1 }, LazyLoad.prototype.check = function () { var a, c, d, e, f = b.devicePixelRatio > 1 ? "data-src-retina" : "data-src"; for (d = 0; d < this.owl.num.items; d++)e = this.owl.dom.$items.eq(d), e.data("owl-item").current === !0 && e.data("owl-item").loaded === !1 && (c = e.find(".owl-lazy"), a = c.attr(f), a = a || c.attr("data-src"), a && (c.css("opacity", "0"), this.preload(c, e))) }, LazyLoad.prototype.preload = function (c, d) { var e, f, g; c.each(a.proxy(function (c, h) { this.owl.trigger("load", null, "lazy"), e = a(h), f = new Image, g = e.attr(b.devicePixelRatio > 1 ? "data-src-retina" : "data-src"), g = g || e.attr("data-src"), f.onload = a.proxy(function () { d.data("owl-item").loaded = !0, e.is("img") ? e.attr("src", f.src) : e.css("background-image", "url(" + f.src + ")"), e.css("opacity", 1), this.owl.trigger("loaded", null, "lazy") }, this), f.src = g }, this)) }, LazyLoad.prototype.destroy = function () { var a, b; for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.lazyLoad = LazyLoad }(window.Zepto || window.jQuery, window, document), function (a, b) { AutoHeight = function (b) { this.owl = b, this.owl.options = a.extend({}, AutoHeight.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": a.proxy(function (a) { "position" == a.property.name && this.owl.settings.autoHeight && this.setHeight() }, this) }, this.owl.dom.$el.on(this.handlers) }, AutoHeight.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, AutoHeight.prototype.setHeight = function () { var a, c = this.owl.dom.$items.eq(this.owl.current()), d = this.owl.dom.$oStage, e = 0; this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass) || this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass), a = b.setInterval(function () { e += 1, c.data("owl-item").loaded ? (d.height(c.height() + "px"), clearInterval(a)) : 500 === e && clearInterval(a) }, 100) }, AutoHeight.prototype.destroy = function () { var a, b; for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoHeight = AutoHeight }(window.Zepto || window.jQuery, window, document), function (a, b, c) {
	Video = function (b) { this.owl = b, this.owl.options = a.extend({}, Video.Defaults, this.owl.options), this.handlers = { "resize.owl.carousel": a.proxy(function (a) { this.owl.settings.video && !this.isInFullScreen() && a.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () { this.owl.state.videoPlay && this.stopVideo() }, this), "refresh.owl.carousel refreshed.owl.carousel": a.proxy(function (a) { return this.owl.settings.video ? void (this.refreshing = "refresh" == a.type) : !1 }, this), "changed.owl.carousel": a.proxy(function (a) { this.refreshing && "items" == a.property.name && a.property.value && !a.property.value.is(":empty") && this.checkVideoLinks() }, this) }, this.owl.dom.$el.on(this.handlers), this.owl.dom.$el.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) { this.playVideo(a) }, this)) }, Video.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, Video.prototype.checkVideoLinks = function () { var a, b, c; for (c = 0; c < this.owl.num.items; c++)b = this.owl.dom.$items.eq(c), b.data("owl-item").hasVideo || (a = b.find(".owl-video"), a.length && (this.owl.state.hasVideos = !0, this.owl.dom.$items.eq(c).data("owl-item").hasVideo = !0, a.css("display", "none"), this.getVideoInfo(a, b))) }, Video.prototype.getVideoInfo = function (a, b) { var c, d, e, f, g = a.data("vimeo-id"), h = a.data("youtube-id"), i = a.data("width") || this.owl.settings.videoWidth, j = a.data("height") || this.owl.settings.videoHeight, k = a.attr("href"); if (g) d = "vimeo", e = g; else if (h) d = "youtube", e = h; else { if (!k) throw new Error("Missing video link."); e = k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), e[3].indexOf("youtu") > -1 ? d = "youtube" : e[3].indexOf("vimeo") > -1 && (d = "vimeo"), e = e[6] } b.data("owl-item").videoType = d, b.data("owl-item").videoId = e, b.data("owl-item").videoWidth = i, b.data("owl-item").videoHeight = j, c = { type: d, id: e }, f = i && j ? 'style="width:' + i + "px;height:" + j + 'px;"' : "", a.wrap('<div class="owl-video-wrapper"' + f + "></div>"), this.createVideoTn(a, c) }, Video.prototype.createVideoTn = function (b, c) { function d(a) { f = '<div class="owl-video-play-icon"></div>', e = k.settings.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(e), b.after(f) } var e, f, g, h = b.find("img"), i = "src", j = "", k = this.owl; return this.owl.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (d(h.attr(i)), h.remove(), !1) : void ("youtube" === c.type ? (g = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", d(g)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { g = a[0].thumbnail_large, d(g), k.settings.loop && k.updateActiveItems() } })) }, Video.prototype.stopVideo = function () { this.owl.trigger("stop", null, "video"); var a = this.owl.dom.$items.eq(this.owl.state.videoPlayIndex); a.find(".owl-video-frame").remove(), a.removeClass("owl-video-playing"), this.owl.state.videoPlay = !1 }, Video.prototype.playVideo = function (b) {
		this.owl.trigger("play", null, "video"), this.owl.state.videoPlay && this.stopVideo(); var c, d, e, f = a(b.target || b.srcElement), g = f.closest("." + this.owl.settings.itemClass); e = g.data("owl-item").videoType, id = g.data("owl-item").videoId, width = g.data("owl-item").videoWidth || Math.floor(g.data("owl-item").width - this.owl.settings.margin), height = g.data("owl-item").videoHeight || this.owl.dom.$stage.height(), "youtube" === e ? c = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + id + "?autoplay=1&v=" + id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === e && (c = '<iframe src="http://player.vimeo.com/video/' + id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), g.addClass("owl-video-playing"), this.owl.state.videoPlay = !0, this.owl.state.videoPlayIndex = g.data("owl-item").indexAbs, d = a('<div style="height:' + height + "px; width:" + width + 'px" class="owl-video-frame">' + c + "</div>"), f.after(d)
	}, Video.prototype.isInFullScreen = function () { var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return d && a(d.parentNode).hasClass("owl-video-frame") && (this.owl.speed(0), this.owl.state.isFullScreen = !0), d && this.owl.state.isFullScreen && this.owl.state.videoPlay ? !1 : this.owl.state.isFullScreen ? (this.owl.state.isFullScreen = !1, !1) : this.owl.state.videoPlay && this.owl.state.orientation !== b.orientation ? (this.owl.state.orientation = b.orientation, !1) : !0 }, Video.prototype.destroy = function () { var a, b; this.owl.dom.$el.off("click.owl.video"); for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.video = Video
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { Animate = function (b) { this.core = b, this.core.options = a.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function () { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.dom.$el.on(this.handlers) }, Animate.Defaults = { animateOut: !1, animateIn: !1 }, Animate.prototype.swap = function () { if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0); var b, c = a.proxy(this.clear, this), d = this.core.dom.$items.eq(this.previous), e = this.core.dom.$items.eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut; this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)) } }, Animate.prototype.clear = function (b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, Animate.prototype.destroy = function () { var a, b; for (a in this.handlers) this.core.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = Animate }(window.Zepto || window.jQuery, window, document), function (a, b, c) { Autoplay = function (b) { this.core = b, this.core.options = a.extend({}, Autoplay.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () { this.autoplay() }, this), "play.owl.autoplay": a.proxy(function (a, b, c) { this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function () { this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function () { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function () { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.dom.$el.on(this.handlers) }, Autoplay.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, Autoplay.prototype.autoplay = function () { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, Autoplay.prototype.play = function () { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, Autoplay.prototype.stop = function () { b.clearInterval(this.interval) }, Autoplay.prototype.pause = function () { b.clearInterval(this.interval) }, Autoplay.prototype.destroy = function () { var a, c; b.clearInterval(this.interval); for (a in this.handlers) this.core.dom.$el.off(a, this.handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay }(window.Zepto || window.jQuery, window, document), function (a) { "use strict"; var b = function (c) { this.core = c, this.initialized = !1, this.pages = [], this.controls = {}, this.template = null, this.$element = this.core.dom.$el, this.overrides = { next: this.core.next, prev: this.core.prev, to: this.core.to }, this.handlers = { "changed.owl.carousel": a.proxy(function (b) { "items" == b.property.name && (this.initialized || (this.initialize(), this.initialized = !0), this.update(), this.draw()), this.filling && (b.property.value.data("owl-item").dot = a(":first-child", b.property.value).find("[data-dot]").andSelf().data("dot")) }, this), "change.owl.carousel": a.proxy(function (a) { if ("position" == a.property.name && !this.core.state.revert && !this.core.settings.loop && this.core.settings.navRewind) { var b = this.core.current(), c = this.core.maximum(), d = this.core.minimum(); a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value } this.filling = this.core.settings.dotsData && "item" == a.property.name && a.property.value && a.property.value.is(":empty") }, this), "refreshed.owl.carousel": a.proxy(function () { this.initialized && (this.update(), this.draw()) }, this) }, this.core.options = a.extend({}, b.Defaults, this.core.options), this.$element.on(this.handlers) }; b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function () { var b, c, d = this.core.settings; d.dotsData || (this.template = a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")), d.navContainer && d.dotsContainer || (this.controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this.controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this.controls.$container), this.controls.$indicators.on(this.core.dragType[2], "div", a.proxy(function (b) { var c = a(b.target).parent().is(this.controls.$indicators) ? a(b.target).index() : a(b.target).parent().index(); b.preventDefault(), this.to(c, d.dotsSpeed) }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this.controls.$container), this.controls.$next = a("<" + d.navElement + ">"), this.controls.$previous = this.controls.$next.clone(), this.controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on(this.core.dragType[2], a.proxy(function () { this.prev() }, this)), this.controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on(this.core.dragType[2], a.proxy(function () { this.next() }, this)); for (c in this.overrides) this.core[c] = a.proxy(this[c], this) }, b.prototype.destroy = function () { var a, b, c, d; for (a in this.handlers) this.$element.off(a, this.handlers[a]); for (b in this.controls) this.controls[b].remove(); for (d in this.overides) this.core[d] = this.overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function () { var a, b, c, d = this.core.settings, e = this.core.num.cItems / 2, f = this.core.num.items - e, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items; if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots) for (this.pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this.pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this.core.num.merged[a] }, b.prototype.draw = function () { var b, c, d = "", e = this.core.settings, f = this.core.dom.$oItems, g = this.core.normalize(this.core.current(), !0); if (!e.nav || e.loop || e.navRewind || (this.controls.$previous.toggleClass("disabled", 0 >= g), this.controls.$next.toggleClass("disabled", g >= this.core.maximum())), this.controls.$previous.toggle(e.nav), this.controls.$next.toggle(e.nav), e.dots) { if (b = this.pages.length - this.controls.$indicators.children().length, b > 0) { for (c = 0; c < Math.abs(b); c++)d += e.dotData ? f.eq(c).data("owl-item").dot : this.template; this.controls.$indicators.append(d) } else 0 > b && this.controls.$indicators.children().slice(b).remove(); this.controls.$indicators.find(".active").removeClass("active"), this.controls.$indicators.children().eq(a.inArray(this.current(), this.pages)).addClass("active") } this.controls.$indicators.toggle(e.dots) }, b.prototype.onTrigger = function (b) { var c = this.core.settings; b.page = { index: a.inArray(this.current(), this.pages), count: this.pages.length, size: c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items } }, b.prototype.current = function () { var b = this.core.normalize(this.core.current(), !0); return a.grep(this.pages, function (a) { return a.start <= b && a.end >= b }).pop() }, b.prototype.getPosition = function (b) { var c, d, e = this.core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this.pages), d = this.pages.length, b ? ++c : --c, c = this.pages[(c % d + d) % d].start) : (c = this.core.normalize(this.core.current(), !0), d = this.core.num.oItems, b ? c += e.slideBy : c -= e.slideBy), c }, b.prototype.next = function (b) { a.proxy(this.overrides.to, this.core)(this.getPosition(!0), b) }, b.prototype.prev = function (b) { a.proxy(this.overrides.to, this.core)(this.getPosition(!1), b) }, b.prototype.to = function (b, c, d) { var e; d ? a.proxy(this.overrides.to, this.core)(b, c) : (e = this.pages.length, a.proxy(this.overrides.to, this.core)(this.pages[(b % e + e) % e].start, c)) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (c) { this.core = c, this.hashes = {}, this.$element = this.core.dom.$el, this.handlers = { "initialized.owl.carousel": a.proxy(function () { b.location.hash.substring(1) && a(b).trigger("hashchange.owl.navigation") }, this), "changed.owl.carousel": a.proxy(function (b) { this.filling && (b.property.value.data("owl-item").hash = a(":first-child", b.property.value).find("[data-hash]").andSelf().data("hash"), this.hashes[b.property.value.data("owl-item").hash] = b.property.value) }, this), "change.owl.carousel": a.proxy(function (a) { "position" == a.property.name && this.core.current() === d && "URLHash" == this.core.settings.startPosition && (a.data = this.hashes[b.location.hash.substring(1)]), this.filling = "item" == a.property.name && a.property.value && a.property.value.is(":empty") }, this) }, this.core.options = a.extend({}, e.Defaults, this.core.options), this.$element.on(this.handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () { var a = b.location.hash.substring(1), c = this.core.dom.$oItems, d = this.hashes[a] && c.index(this.hashes[a]) || 0; return a ? (this.core.dom.oStage.scrollLeft = 0, void this.core.to(d, !1, !0)) : !1 }, this)) }; e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () { var c, d; a(b).off("hashchange.owl.navigation"); for (c in this.handlers) this.owl.dom.$el.off(c, this.handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document);
/* https://www.vtmteknik.com/templates/porto/3.4.0/jquery-magnific-popup/1.0.0/jquery.magnific-popup.js */
/*! Magnific Popup - v1.0.0 - 2014-12-12
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */
; (function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module. 
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS 
		factory(require('jquery'));
	} else {
		// Browser globals 
		factory(window.jQuery || window.Zepto);
	}
}(function ($) {

	/*>>core*/
	/**
	 * 
	 * Magnific Popup Core JS file
	 * 
	 */


	/**
	 * Private static constants
	 */
	var CLOSE_EVENT = 'Close',
		BEFORE_CLOSE_EVENT = 'BeforeClose',
		AFTER_CLOSE_EVENT = 'AfterClose',
		BEFORE_APPEND_EVENT = 'BeforeAppend',
		MARKUP_PARSE_EVENT = 'MarkupParse',
		OPEN_EVENT = 'Open',
		CHANGE_EVENT = 'Change',
		NS = 'mfp',
		EVENT_NS = '.' + NS,
		READY_CLASS = 'mfp-ready',
		REMOVING_CLASS = 'mfp-removing',
		PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


	/**
	 * Private vars 
	 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
		MagnificPopup = function () { },
		_isJQ = !!(window.jQuery),
		_prevStatus,
		_window = $(window),
		_body,
		_document,
		_prevContentType,
		_wrapClasses,
		_currPopupType;


	/**
	 * Private functions
	 */
	var _mfpOn = function (name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
		_getEl = function (className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-' + className;
			if (html) {
				el.innerHTML = html;
			}
			if (!raw) {
				el = $(el);
				if (appendTo) {
					el.appendTo(appendTo);
				}
			} else if (appendTo) {
				appendTo.appendChild(el);
			}
			return el;
		},
		_mfpTrigger = function (e, data) {
			mfp.ev.triggerHandler(NS + e, data);

			if (mfp.st.callbacks) {
				// converts "mfpEventName" to "eventName" callback and triggers it if it's present
				e = e.charAt(0).toLowerCase() + e.slice(1);
				if (mfp.st.callbacks[e]) {
					mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
				}
			}
		},
		_getCloseBtn = function (type) {
			if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
				mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
				_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
		},
		// Initialize Magnific Popup only when called at least once
		_checkInstance = function () {
			if (!$.magnificPopup.instance) {
				mfp = new MagnificPopup();
				mfp.init();
				$.magnificPopup.instance = mfp;
			}
		},
		// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
		supportsTransitions = function () {
			var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
				v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

			if (s['transition'] !== undefined) {
				return true;
			}

			while (v.length) {
				if (v.pop() + 'Transition' in s) {
					return true;
				}
			}

			return false;
		};



	/**
	 * Public functions
	 */
	MagnificPopup.prototype = {

		constructor: MagnificPopup,

		/**
		 * Initializes Magnific Popup plugin. 
		 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
		 */
		init: function () {
			var appVersion = navigator.appVersion;
			mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
			mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
			mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
			mfp.isAndroid = (/android/gi).test(appVersion);
			mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
			mfp.supportsTransition = supportsTransitions();

			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
			_document = $(document);

			mfp.popupsCache = {};
		},

		/**
		 * Opens popup
		 * @param  data [description]
		 */
		open: function (data) {

			if (!_body) {
				_body = $(document.body);
			}

			var i;

			if (data.isObj === false) {
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();

				mfp.index = 0;
				var items = data.items,
					item;
				for (i = 0; i < items.length; i++) {
					item = items[i];
					if (item.parsed) {
						item = item.el[0];
					}
					if (item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = $.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}

			// if popup is already opened - we just update the content
			if (mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}

			mfp.types = [];
			_wrapClasses = '';
			if (data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}

			if (data.key) {
				if (!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}



			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

			if (mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}


			// Building markup
			// main containers are created only once
			if (!mfp.bgOverlay) {

				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
					mfp.close();
				});

				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
					if (mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});

				mfp.container = _getEl('container', mfp.wrap);
			}

			mfp.contentContainer = _getEl('content');
			if (mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}


			// Initializing modules
			var modules = $.magnificPopup.modules;
			for (i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init' + n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');


			if (mfp.st.showCloseBtn) {
				// Close button
				if (!mfp.st.closeBtnInside) {
					mfp.wrap.append(_getCloseBtn());
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}

			if (mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}



			if (mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}



			if (mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function (e) {
					if (e.keyCode === 27) {
						mfp.close();
					}
				});
			}

			_window.on('resize' + EVENT_NS, function () {
				mfp.updateSize();
			});


			if (!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}

			if (_wrapClasses)
				mfp.wrap.addClass(_wrapClasses);


			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();


			var windowStyles = {};

			if (mfp.fixedContentPos) {
				if (mfp._hasScrollBar(windowHeight)) {
					var s = mfp._getScrollbarSize();
					if (s) {
						windowStyles.marginRight = s;
					}
				}
			}

			if (mfp.fixedContentPos) {
				if (!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}



			var classesToadd = mfp.st.mainClass;
			if (mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if (classesToadd) {
				mfp._addClassToMFP(classesToadd);
			}

			// add content
			mfp.updateItemHTML();

			_mfpTrigger('BuildControls');

			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);

			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || _body);

			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;

			// Wait for next cycle to allow CSS transition
			setTimeout(function () {

				if (mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}

				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

			}, 16);

			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);

			return data;
		},

		/**
		 * Closes the popup
		 */
		close: function () {
			if (!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);

			mfp.isOpen = false;
			// for CSS3 animation
			if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function () {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},

		/**
		 * Helper for close() function
		 */
		_close: function () {
			_mfpTrigger(CLOSE_EVENT);

			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();

			if (mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}

			mfp._removeClassFromMFP(classesToRemove);

			if (mfp.fixedContentPos) {
				var windowStyles = { marginRight: '' };
				if (mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}

			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);

			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');

			// remove close button from target element
			if (mfp.st.showCloseBtn &&
				(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if (mfp.currTemplate.closeBtn)
					mfp.currTemplate.closeBtn.detach();
			}


			if (mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).focus(); // put tab focus back
			}
			mfp.currItem = null;
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;

			_mfpTrigger(AFTER_CLOSE_EVENT);
		},

		updateSize: function (winHeight) {

			if (mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if (!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}

			_mfpTrigger('Resize');

		},

		/**
		 * Set content of popup based on current index
		 */
		updateItemHTML: function () {
			var item = mfp.items[mfp.index];

			// Detach and perform modifications
			mfp.contentContainer.detach();

			if (mfp.content)
				mfp.content.detach();

			if (!item.parsed) {
				item = mfp.parseEl(mfp.index);
			}

			var type = item.type;

			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });

			mfp.currItem = item;





			if (!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;

				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);

				if (markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}

			if (_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
			}

			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);

			item.preloaded = true;

			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;

			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);

			_mfpTrigger('AfterChange');
		},


		/**
		 * Set HTML content of popup
		 */
		appendContent: function (newContent, type) {
			mfp.content = newContent;

			if (newContent) {
				if (mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
					mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if (!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}

			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-' + type + '-holder');

			mfp.contentContainer.append(mfp.content);
		},




		/**
		 * Creates Magnific Popup data object based on given data
		 * @param  {int} index Index of item to parse
		 */
		parseEl: function (index) {
			var item = mfp.items[index],
				type;

			if (item.tagName) {
				item = { el: $(item) };
			} else {
				type = item.type;
				item = { data: item, src: item.src };
			}

			if (item.el) {
				var types = mfp.types;

				// check for 'mfp-TYPE' class
				for (var i = 0; i < types.length; i++) {
					if (item.el.hasClass('mfp-' + types[i])) {
						type = types[i];
						break;
					}
				}

				item.src = item.el.attr('data-mfp-src');
				if (!item.src) {
					item.src = item.el.attr('href');
				}
			}

			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);

			return mfp.items[index];
		},


		/**
		 * Initializes single popup or a group of popups
		 */
		addGroup: function (el, options) {
			var eHandler = function (e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};

			if (!options) {
				options = {};
			}

			var eName = 'click.magnificPopup';
			options.mainEl = el;

			if (options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if (options.delegate) {
					el.off(eName).on(eName, options.delegate, eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function (e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


			if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
				return;
			}

			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if (disableOn) {
				if ($.isFunction(disableOn)) {
					if (!disableOn.call(mfp)) {
						return true;
					}
				} else { // else it's number
					if (_window.width() < disableOn) {
						return true;
					}
				}
			}

			if (e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if (mfp.isOpen) {
					e.stopPropagation();
				}
			}


			options.el = $(e.mfpEl);
			if (options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},


		/**
		 * Updates text on preloader
		 */
		updateStatus: function (status, text) {

			if (mfp.preloader) {
				if (_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-' + _prevStatus);
				}

				if (!text && status === 'loading') {
					text = mfp.st.tLoading;
				}

				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);

				status = data.status;
				text = data.text;

				mfp.preloader.html(text);

				mfp.preloader.find('a').on('click', function (e) {
					e.stopImmediatePropagation();
				});

				mfp.container.addClass('mfp-s-' + status);
				_prevStatus = status;
			}
		},


		/*
			"Private" helpers that aren't private at all
		 */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function (target) {

			if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
				return;
			}

			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;

			if (closeOnContent && closeOnBg) {
				return true;
			} else {

				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
					return true;
				}

				// if click is outside the content
				if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
					if (closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if ($.contains(document, target)) {
							return true;
						}
					}
				} else if (closeOnContent) {
					return true;
				}

			}
			return false;
		},
		_addClassToMFP: function (cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function (cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function (winHeight) {
			return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
		},
		_setFocus: function () {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
		},
		_onFocusIn: function (e) {
			if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function (template, values, item) {
			var arr;
			if (item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

			$.each(values, function (key, value) {
				if (value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if (arr.length > 1) {
					var el = template.find(EVENT_NS + '-' + arr[0]);

					if (el.length > 0) {
						var attr = arr[1];
						if (attr === 'replaceWith') {
							if (el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if (attr === 'img') {
							if (el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith('<img src="' + value + '" class="' + el.attr('class') + '" />');
							}
						} else {
							el.attr(arr[1], value);
						}
					}

				} else {
					template.find(EVENT_NS + '-' + key).html(value);
				}
			});
		},

		_getScrollbarSize: function () {
			// thx David
			if (mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}

	}; /* MagnificPopup core prototype end */




	/**
	 * Public static functions
	 */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],

		open: function (options, index) {
			_checkInstance();

			if (!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}


			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},

		close: function () {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},

		registerModule: function (name, module) {
			if (module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);
			this.modules.push(name);
		},

		defaults: {

			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

			disableOn: 0,

			key: null,

			midClick: false,

			mainClass: '',

			preloader: true,

			focus: '', // CSS selector of input to focus after popup is opened

			closeOnContentClick: false,

			closeOnBgClick: true,

			closeBtnInside: true,

			showCloseBtn: true,

			enableEscapeKey: true,

			modal: false,

			alignTop: false,

			removalDelay: 0,

			prependTo: null,

			fixedContentPos: 'auto',

			fixedBgPos: 'auto',

			overflowY: 'auto',

			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

			tClose: 'Close (Esc)',

			tLoading: 'Loading...'

		}
	};



	$.fn.magnificPopup = function (options) {
		_checkInstance();

		var jqEl = $(this);

		// We call some API method of first param is a string
		if (typeof options === "string") {

			if (options === 'open') {
				var items,
					itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
					index = parseInt(arguments[1], 10) || 0;

				if (itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if (itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq(index);
				}
				mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
			} else {
				if (mfp.isOpen)
					mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}

		} else {
			// clone options obj
			options = $.extend(true, {}, options);

			/*
			 * As Zepto doesn't support .data() method for objects 
			 * and it works only in normal browsers
			 * we assign "options" object directly to the DOM element. FTW!
			 */
			if (_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}

			mfp.addGroup(jqEl, options);

		}
		return jqEl;
	};


	//Quick benchmark
	/*
	var start = performance.now(),
		i,
		rounds = 1000;
	
	for(i = 0; i < rounds; i++) {
	
	}
	console.log('Test #1:', performance.now() - start);
	
	start = performance.now();
	for(i = 0; i < rounds; i++) {
	
	}
	console.log('Test #2:', performance.now() - start);
	*/


	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline',
		_hiddenClass,
		_inlinePlaceholder,
		_lastInlineElement,
		_putInlineElementsBack = function () {
			if (_lastInlineElement) {
				_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
				_lastInlineElement = null;
			}
		};

	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {

			initInline: function () {
				mfp.types.push(INLINE_NS);

				_mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
					_putInlineElementsBack();
				});
			},

			getInline: function (item, template) {

				_putInlineElementsBack();

				if (item.src) {
					var inlineSt = mfp.st.inline,
						el = $(item.src);

					if (el.length) {

						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if (parent && parent.tagName) {
							if (!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-' + _hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}

						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}

					item.inlineElement = el;
					return el;
				}

				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax',
		_ajaxCur,
		_removeAjaxCursor = function () {
			if (_ajaxCur) {
				_body.removeClass(_ajaxCur);
			}
		},
		_destroyAjaxRequest = function () {
			_removeAjaxCursor();
			if (mfp.req) {
				mfp.req.abort();
			}
		};

	$.magnificPopup.registerModule(AJAX_NS, {

		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},

		proto: {
			initAjax: function () {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;

				_mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function (item) {

				if (_ajaxCur)
					_body.addClass(_ajaxCur);

				mfp.updateStatus('loading');

				var opts = $.extend({
					url: item.src,
					success: function (data, textStatus, jqXHR) {
						var temp = {
							data: data,
							xhr: jqXHR
						};

						_mfpTrigger('ParseAjax', temp);

						mfp.appendContent($(temp.data), AJAX_NS);

						item.finished = true;

						_removeAjaxCursor();

						mfp._setFocus();

						setTimeout(function () {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);

						mfp.updateStatus('ready');

						_mfpTrigger('AjaxContentAdded');
					},
					error: function () {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);

				mfp.req = $.ajax(opts);

				return '';
			}
		}
	});







	/*>>ajax*/

	/*>>image*/
	var _imgInterval,
		_getTitle = function (item) {
			if (item.data && item.data.title !== undefined)
				return item.data.title;

			var src = mfp.st.image.titleSrc;

			if (src) {
				if ($.isFunction(src)) {
					return src.call(mfp, item);
				} else if (item.el) {
					return item.el.attr(src) || '';
				}
			}
			return '';
		};

	$.magnificPopup.registerModule('image', {

		options: {
			markup: '<div class="mfp-figure">' +
				'<div class="mfp-close"></div>' +
				'<figure>' +
				'<div class="mfp-img"></div>' +
				'<figcaption>' +
				'<div class="mfp-bottom-bar">' +
				'<div class="mfp-title"></div>' +
				'<div class="mfp-counter"></div>' +
				'</div>' +
				'</figcaption>' +
				'</figure>' +
				'</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},

		proto: {
			initImage: function () {
				var imgSt = mfp.st.image,
					ns = '.image';

				mfp.types.push('image');

				_mfpOn(OPEN_EVENT + ns, function () {
					if (mfp.currItem.type === 'image' && imgSt.cursor) {
						_body.addClass(imgSt.cursor);
					}
				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (imgSt.cursor) {
						_body.removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});

				_mfpOn('Resize' + ns, mfp.resizeImage);
				if (mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function () {
				var item = mfp.currItem;
				if (!item || !item.img) return;

				if (mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if (mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
					}
					item.img.css('max-height', mfp.wH - decr);
				}
			},
			_onImageHasSize: function (item) {
				if (item.img) {

					item.hasSize = true;

					if (_imgInterval) {
						clearInterval(_imgInterval);
					}

					item.isCheckingImgSize = false;

					_mfpTrigger('ImageHasSize', item);

					if (item.imgHidden) {
						if (mfp.content)
							mfp.content.removeClass('mfp-loading');

						item.imgHidden = false;
					}

				}
			},

			/**
			 * Function that loops until the image has size to display elements that rely on it asap
			 */
			findImageSize: function (item) {

				var counter = 0,
					img = item.img[0],
					mfpSetInterval = function (delay) {

						if (_imgInterval) {
							clearInterval(_imgInterval);
						}
						// decelerating interval that checks for size of an image
						_imgInterval = setInterval(function () {
							if (img.naturalWidth > 0) {
								mfp._onImageHasSize(item);
								return;
							}

							if (counter > 200) {
								clearInterval(_imgInterval);
							}

							counter++;
							if (counter === 3) {
								mfpSetInterval(10);
							} else if (counter === 40) {
								mfpSetInterval(50);
							} else if (counter === 100) {
								mfpSetInterval(500);
							}
						}, delay);
					};

				mfpSetInterval(1);
			},

			getImage: function (item, template) {

				var guard = 0,

					// image load complete handler
					onLoadComplete = function () {
						if (item) {
							if (item.img[0].complete) {
								item.img.off('.mfploader');

								if (item === mfp.currItem) {
									mfp._onImageHasSize(item);

									mfp.updateStatus('ready');
								}

								item.hasSize = true;
								item.loaded = true;

								_mfpTrigger('ImageLoadComplete');

							}
							else {
								// if image complete check fails 200 times (20 sec), we assume that there was an error.
								guard++;
								if (guard < 200) {
									setTimeout(onLoadComplete, 100);
								} else {
									onLoadError();
								}
							}
						}
					},

					// image error handler
					onLoadError = function () {
						if (item) {
							item.img.off('.mfploader');
							if (item === mfp.currItem) {
								mfp._onImageHasSize(item);
								mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
							}

							item.hasSize = true;
							item.loaded = true;
							item.loadError = true;
						}
					},
					imgSt = mfp.st.image;


				var el = template.find('.mfp-img');
				if (el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					if (item.el && item.el.find('img').length) {
						img.alt = item.el.find('img').attr('alt');
					}
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;

					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if (el.is('img')) {
						item.img = item.img.clone();
					}

					img = item.img[0];
					if (img.naturalWidth > 0) {
						item.hasSize = true;
					} else if (!img.width) {
						item.hasSize = false;
					}
				}

				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);

				mfp.resizeImage();

				if (item.hasSize) {
					if (_imgInterval) clearInterval(_imgInterval);

					if (item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}

				mfp.updateStatus('loading');
				item.loading = true;

				if (!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				}

				return template;
			}
		}
	});



	/*>>image*/

	/*>>zoom*/
	var hasMozTransform,
		getHasMozTransform = function () {
			if (hasMozTransform === undefined) {
				hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;
		};

	$.magnificPopup.registerModule('zoom', {

		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function (element) {
				return element.is('img') ? element : element.find('img');
			}
		},

		proto: {

			initZoom: function () {
				var zoomSt = mfp.st.zoom,
					ns = '.zoom',
					image;

				if (!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}

				var duration = zoomSt.duration,
					getElToAnimate = function (image) {
						var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
							transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
							cssObj = {
								position: 'fixed',
								zIndex: 9999,
								left: 0,
								top: 0,
								'-webkit-backface-visibility': 'hidden'
							},
							t = 'transition';

						cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

						newImg.css(cssObj);
						return newImg;
					},
					showMainContent = function () {
						mfp.content.css('visibility', 'visible');
					},
					openTimeout,
					animatedImg;

				_mfpOn('BuildControls' + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');

						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

						image = mfp._getItemToZoom();

						if (!image) {
							showMainContent();
							return;
						}

						animatedImg = getElToAnimate(image);

						animatedImg.css(mfp._getOffset());

						mfp.wrap.append(animatedImg);

						openTimeout = setTimeout(function () {
							animatedImg.css(mfp._getOffset(true));
							openTimeout = setTimeout(function () {

								showMainContent();

								setTimeout(function () {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images 

							}, duration); // this timeout equals animation duration

						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);

						mfp.st.removalDelay = duration;

						if (!image) {
							image = mfp._getItemToZoom();
							if (!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}


						animatedImg.css(mfp._getOffset(true));
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');

						setTimeout(function () {
							animatedImg.css(mfp._getOffset());
						}, 16);
					}

				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {
						showMainContent();
						if (animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}
				});
			},

			_allowZoom: function () {
				return mfp.currItem.type === 'image';
			},

			_getItemToZoom: function () {
				if (mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},

			// Get element postion relative to viewport
			_getOffset: function (isLarge) {
				var el;
				if (isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}

				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'), 10);
				var paddingBottom = parseInt(el.css('padding-bottom'), 10);
				offset.top -= ($(window).scrollTop() - paddingTop);


				/*
				
				Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
	
				 */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};

				// I hate to do this, but there is no another option
				if (getHasMozTransform()) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}

		}
	});



	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe',
		_emptyPage = '//about:blank',

		_fixIframeBugs = function (isShowing) {
			if (mfp.currTemplate[IFRAME_NS]) {
				var el = mfp.currTemplate[IFRAME_NS].find('iframe');
				if (el.length) {
					// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
					if (!isShowing) {
						el[0].src = _emptyPage;
					}

					// IE8 black screen bug fix
					if (mfp.isIE8) {
						el.css('display', isShowing ? 'block' : 'none');
					}
				}
			}
		};

	$.magnificPopup.registerModule(IFRAME_NS, {

		options: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
				'</div>',

			srcAction: 'iframe_src',

			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},

		proto: {
			initIframe: function () {
				mfp.types.push(IFRAME_NS);

				_mfpOn('BeforeChange', function (e, prevType, newType) {
					if (prevType !== newType) {
						if (prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if (newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						}
					}// else {
					// iframe source is switched, don't do anything
					//}
				});

				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
					_fixIframeBugs();
				});
			},

			getIframe: function (item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;

				$.each(iframeSt.patterns, function () {
					if (embedSrc.indexOf(this.index) > -1) {
						if (this.id) {
							if (typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call(this, embedSrc);
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc);
						return false; // break;
					}
				});

				var dataObj = {};
				if (iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}
				mfp._parseMarkup(template, dataObj, item);

				mfp.updateStatus('ready');

				return template;
			}
		}
	});



	/*>>iframe*/

	/*>>gallery*/
	/**
	 * Get looped index depending on number of slides
	 */
	var _getLoopedId = function (index) {
		var numSlides = mfp.items.length;
		if (index > numSlides - 1) {
			return index - numSlides;
		} else if (index < 0) {
			return numSlides + index;
		}
		return index;
	},
		_replaceCurrTotal = function (text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
		};

	$.magnificPopup.registerModule('gallery', {

		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: true,
			arrows: true,

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%'
		},

		proto: {
			initGallery: function () {

				var gSt = mfp.st.gallery,
					ns = '.mfp-gallery',
					supportsFastClick = Boolean($.fn.mfpFastClick);

				mfp.direction = true; // true - next, false - prev

				if (!gSt || !gSt.enabled) return false;

				_wrapClasses += ' mfp-gallery';

				_mfpOn(OPEN_EVENT + ns, function () {

					if (gSt.navigateByImgClick) {
						mfp.wrap.on('click' + ns, '.mfp-img', function () {
							if (mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}

					_document.on('keydown' + ns, function (e) {
						if (e.keyCode === 37) {
							mfp.prev();
						} else if (e.keyCode === 39) {
							mfp.next();
						}
					});
				});

				_mfpOn('UpdateStatus' + ns, function (e, data) {
					if (data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});

				_mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});

				_mfpOn('BuildControls' + ns, function () {
					if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
						var markup = gSt.arrowMarkup,
							arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
							arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

						var eName = supportsFastClick ? 'mfpFastClick' : 'click';
						arrowLeft[eName](function () {
							mfp.prev();
						});
						arrowRight[eName](function () {
							mfp.next();
						});

						// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
						if (mfp.isIE7) {
							_getEl('b', arrowLeft[0], false, true);
							_getEl('a', arrowLeft[0], false, true);
							_getEl('b', arrowRight[0], false, true);
							_getEl('a', arrowRight[0], false, true);
						}

						mfp.container.append(arrowLeft.add(arrowRight));
					}
				});

				_mfpOn(CHANGE_EVENT + ns, function () {
					if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

					mfp._preloadTimeout = setTimeout(function () {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);
				});


				_mfpOn(CLOSE_EVENT + ns, function () {
					_document.off(ns);
					mfp.wrap.off('click' + ns);

					if (mfp.arrowLeft && supportsFastClick) {
						mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
					}
					mfp.arrowRight = mfp.arrowLeft = null;
				});

			},
			next: function () {
				mfp.direction = true;
				mfp.index = _getLoopedId(mfp.index + 1);
				mfp.updateItemHTML();
			},
			prev: function () {
				mfp.direction = false;
				mfp.index = _getLoopedId(mfp.index - 1);
				mfp.updateItemHTML();
			},
			goTo: function (newIndex) {
				mfp.direction = (newIndex >= mfp.index);
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function () {
				var p = mfp.st.gallery.preload,
					preloadBefore = Math.min(p[0], mfp.items.length),
					preloadAfter = Math.min(p[1], mfp.items.length),
					i;

				for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index + i);
				}
				for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index - i);
				}
			},
			_preloadItem: function (index) {
				index = _getLoopedId(index);

				if (mfp.items[index].preloaded) {
					return;
				}

				var item = mfp.items[index];
				if (!item.parsed) {
					item = mfp.parseEl(index);
				}

				_mfpTrigger('LazyLoad', item);

				if (item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
						item.hasSize = true;
					}).on('error.mfploader', function () {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}


				item.preloaded = true;
			}
		}
	});

	/*
	Touch Support that might be implemented some day
	
	addSwipeGesture: function() {
		var startX,
			moved,
			multipleTouches;
	
			return;
	
		var namespace = '.mfp',
			addEventNames = function(pref, down, move, up, cancel) {
				mfp._tStart = pref + down + namespace;
				mfp._tMove = pref + move + namespace;
				mfp._tEnd = pref + up + namespace;
				mfp._tCancel = pref + cancel + namespace;
			};
	
		if(window.navigator.msPointerEnabled) {
			addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
		} else if('ontouchstart' in window) {
			addEventNames('touch', 'start', 'move', 'end', 'cancel');
		} else {
			return;
		}
		_window.on(mfp._tStart, function(e) {
			var oE = e.originalEvent;
			multipleTouches = moved = false;
			startX = oE.pageX || oE.changedTouches[0].pageX;
		}).on(mfp._tMove, function(e) {
			if(e.originalEvent.touches.length > 1) {
				multipleTouches = e.originalEvent.touches.length;
			} else {
				//e.preventDefault();
				moved = true;
			}
		}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
			if(moved && !multipleTouches) {
				var oE = e.originalEvent,
					diff = startX - (oE.pageX || oE.changedTouches[0].pageX);
	
				if(diff > 20) {
					mfp.next();
				} else if(diff < -20) {
					mfp.prev();
				}
			}
		});
	},
	*/


	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function (item) {
				return item.src.replace(/\.\w+$/, function (m) { return '@2x' + m; });
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {

					var st = mfp.st.retina,
						ratio = st.ratio;

					ratio = !isNaN(ratio) ? ratio : ratio();

					if (ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}

			}
		}
	});

	/*>>retina*/

	/*>>fastclick*/
	/**
	 * FastClick event implementation. (removes 300ms delay on touch devices)
	 * Based on https://developers.google.com/mobile/articles/fast_buttons
	 *
	 * You may use it outside the Magnific Popup by calling just:
	 *
	 * $('.your-el').mfpFastClick(function() {
	 *     console.log('Clicked!');
	 * });
	 *
	 * To unbind:
	 * $('.your-el').destroyMfpFastClick();
	 * 
	 * 
	 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
	 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
	 * 
	 */

	(function () {
		var ghostClickDelay = 1000,
			supportsTouch = 'ontouchstart' in window,
			unbindTouchMove = function () {
				_window.off('touchmove' + ns + ' touchend' + ns);
			},
			eName = 'mfpFastClick',
			ns = '.' + eName;


		// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
		$.fn.mfpFastClick = function (callback) {

			return $(this).each(function () {

				var elem = $(this),
					lock;

				if (supportsTouch) {

					var timeout,
						startX,
						startY,
						pointerMoved,
						point,
						numPointers;

					elem.on('touchstart' + ns, function (e) {
						pointerMoved = false;
						numPointers = 1;

						point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
						startX = point.clientX;
						startY = point.clientY;

						_window.on('touchmove' + ns, function (e) {
							point = e.originalEvent ? e.originalEvent.touches : e.touches;
							numPointers = point.length;
							point = point[0];
							if (Math.abs(point.clientX - startX) > 10 ||
								Math.abs(point.clientY - startY) > 10) {
								pointerMoved = true;
								unbindTouchMove();
							}
						}).on('touchend' + ns, function (e) {
							unbindTouchMove();
							if (pointerMoved || numPointers > 1) {
								return;
							}
							lock = true;
							e.preventDefault();
							clearTimeout(timeout);
							timeout = setTimeout(function () {
								lock = false;
							}, ghostClickDelay);
							callback();
						});
					});

				}

				elem.on('click' + ns, function () {
					if (!lock) {
						callback();
					}
				});
			});
		};

		$.fn.destroyMfpFastClick = function () {
			$(this).off('touchstart' + ns + ' click' + ns);
			if (supportsTouch) _window.off('touchmove' + ns + ' touchend' + ns);
		};
	})();

	/*>>fastclick*/
	_checkInstance();
}));
/* https://www.vtmteknik.com/custom/www.deltaservis.com.tr/js/vendor/vide.js */
/*
 *  Vide - v0.3.0
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!(function ($, window, document, navigator) {
	"use strict";

	/**
	 * Vide settings
	 * @private
	 */
	var pluginName = "vide",
		defaults = {
			volume: 1,
			playbackRate: 1,
			muted: true,
			loop: true,
			autoplay: true,
			position: "50% 50%",
			posterType: "detect",
			resizing: true
		},

		// is iOs?
		isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent),

		// is Android?
		isAndroid = /Android/i.test(navigator.userAgent);

	/**
	 * Parse string with options
	 * @param {String} str
	 * @returns {Object|String}
	 * @private
	 */
	function parseOptions(str) {
		var obj = {},
			delimiterIndex,
			option,
			prop, val,
			arr, len,
			i;

		// remove spaces around delimiters and split
		arr = str.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",");

		// parse string
		for (i = 0, len = arr.length; i < len; i++) {
			option = arr[i];

			// Ignore urls and string without colon delimiters
			if (option.search(/^(http|https|ftp):\/\//) !== -1 ||
				option.search(":") === -1) {
				break;
			}

			delimiterIndex = option.indexOf(":");
			prop = option.substring(0, delimiterIndex);
			val = option.substring(delimiterIndex + 1);

			// if val is an empty string, make it undefined
			if (!val) {
				val = undefined;
			}

			// convert string value if it is like a boolean
			if (typeof val === "string") {
				val = val === "true" || (val === "false" ? false : val);
			}

			// convert string value if it is like a number
			if (typeof val === "string") {
				val = !isNaN(val) ? +val : val;
			}

			obj[prop] = val;
		}

		// if nothing is parsed
		if (prop == null && val == null) {
			return str;
		}

		return obj;
	}

	/**
	 * Parse position option
	 * @param {String} str
	 * @returns {Object}
	 * @private
	 */
	function parsePosition(str) {
		str = "" + str;

		// default value is a center
		var args = str.split(/\s+/),
			x = "50%", y = "50%",
			len, arg,
			i;

		for (i = 0, len = args.length; i < len; i++) {
			arg = args[i];

			// convert values
			if (arg === "left") {
				x = "0%";
			} else if (arg === "right") {
				x = "100%";
			} else if (arg === "top") {
				y = "0%";
			} else if (arg === "bottom") {
				y = "100%";
			} else if (arg === "center") {
				if (i === 0) {
					x = "50%";
				} else {
					y = "50%";
				}
			} else {
				if (i === 0) {
					x = arg;
				} else {
					y = arg;
				}
			}
		}

		return { x: x, y: y };
	}

	/**
	 * Search poster
	 * @param {String} path
	 * @param {Function} callback
	 * @private
	 */
	function findPoster(path, callback) {
		var onLoad = function () {
			callback(this.src);
		};

		$("<img src='" + path + ".gif'>").load(onLoad);
		$("<img src='" + path + ".jpg'>").load(onLoad);
		$("<img src='" + path + ".jpeg'>").load(onLoad);
		$("<img src='" + path + ".png'>").load(onLoad);
	}

	/**
	 * Vide constructor
	 * @param {HTMLElement} element
	 * @param {Object|String} path
	 * @param {Object|String} options
	 * @constructor
	 */
	function Vide(element, path, options) {
		this.$element = $(element);

		// parse path
		if (typeof path === "string") {
			path = parseOptions(path);
		}

		// parse options
		if (!options) {
			options = {};
		} else if (typeof options === "string") {
			options = parseOptions(options);
		}

		// remove extension
		if (typeof path === "string") {
			path = path.replace(/\.\w*$/, "");
		} else if (typeof path === "object") {
			for (var i in path) {
				if (path.hasOwnProperty(i)) {
					path[i] = path[i].replace(/\.\w*$/, "");
				}
			}
		}

		this.settings = $.extend({}, defaults, options);
		this.path = path;

		this.init();
	}

	/**
	 * Initialization
	 * @public
	 */
	Vide.prototype.init = function () {
		var vide = this,
			position = parsePosition(vide.settings.position),
			sources,
			poster;

		// Set video wrapper styles
		vide.$wrapper = $("<div>").css({
			"position": "absolute",
			"z-index": -1,
			"top": 0,
			"left": 0,
			"bottom": 0,
			"right": 0,
			"overflow": "hidden",
			"-webkit-background-size": "cover",
			"-moz-background-size": "cover",
			"-o-background-size": "cover",
			"background-size": "cover",
			"background-repeat": "no-repeat",
			"background-position": position.x + " " + position.y
		});

		// Get poster path
		poster = vide.path;
		if (typeof vide.path === "object") {
			if (vide.path.poster) {
				poster = vide.path.poster;
			} else {
				if (vide.path.mp4) {
					poster = vide.path.mp4;
				} else if (vide.path.webm) {
					poster = vide.path.webm;
				} else if (vide.path.ogv) {
					poster = vide.path.ogv;
				}
			}
		}

		// Set video poster
		if (vide.settings.posterType === "detect") {
			findPoster(poster, function (url) {
				vide.$wrapper.css("background-image", "url(" + url + ")");
			});
		} else if (vide.settings.posterType !== "none") {
			vide.$wrapper
				.css("background-image", "url(" + poster + "." + vide.settings.posterType + ")");
		}

		// if parent element has a static position, make it relative
		if (vide.$element.css("position") === "static") {
			vide.$element.css("position", "relative");
		}

		vide.$element.prepend(vide.$wrapper);

		if (!isIOS && !isAndroid) {
			sources = "";

			if (typeof vide.path === "object") {
				if (vide.path.mp4) {
					sources += "<source src='" + vide.path.mp4 + ".mp4' type='video/mp4'>";
				}
				if (vide.path.webm) {
					sources += "<source src='" + vide.path.webm + ".webm' type='video/webm'>";
				}
				if (vide.path.ogv) {
					sources += "<source src='" + vide.path.ogv + ".ogv' type='video/ogv'>";
				}

				vide.$video = $("<video>" + sources + "</video>");
			} else {
				vide.$video = $("<video>" +
					"<source src='" + vide.path + ".mp4' type='video/mp4'>" +
					"<source src='" + vide.path + ".webm' type='video/webm'>" +
					"<source src='" + vide.path + ".ogv' type='video/ogg'>" +
					"</video>");
			}

			// Disable visibility, while loading
			vide.$video.css("visibility", "hidden");

			// Set video properties
			vide.$video.prop({
				autoplay: vide.settings.autoplay,
				loop: vide.settings.loop,
				volume: vide.settings.volume,
				muted: vide.settings.muted,
				playbackRate: vide.settings.playbackRate
			});

			// Append video
			vide.$wrapper.append(vide.$video);

			// Video alignment
			vide.$video.css({
				"margin": "auto",
				"position": "absolute",
				"z-index": -1,
				"top": position.y,
				"left": position.x,
				"-webkit-transform": "translate(-" + position.x + ", -" + position.y + ")",
				"-ms-transform": "translate(-" + position.x + ", -" + position.y + ")",
				"transform": "translate(-" + position.x + ", -" + position.y + ")"
			});

			// resize video, when it's loaded
			vide.$video.bind("loadedmetadata." + pluginName, function () {
				vide.$video.css("visibility", "visible");
				vide.resize();
				vide.$wrapper.css("background-image", "none");
			});

			// resize event is available only for 'window',
			// use another code solutions to detect DOM elements resizing
			vide.$element.bind("resize." + pluginName, function () {
				if (vide.settings.resizing) {
					vide.resize();
				}
			});
		}
	};

	/**
	 * Get video element of the background
	 * @returns {HTMLVideoElement|null}
	 * @public
	 */
	Vide.prototype.getVideoObject = function () {
		return this.$video ? this.$video[0] : null;
	};

	/**
	 * Resize video background
	 * @public
	 */
	Vide.prototype.resize = function () {
		if (!this.$video) {
			return;
		}

		var
			// get native video size
			videoHeight = this.$video[0].videoHeight,
			videoWidth = this.$video[0].videoWidth,

			// get wrapper size
			wrapperHeight = this.$wrapper.height(),
			wrapperWidth = this.$wrapper.width();

		if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
			this.$video.css({
				"width": wrapperWidth + 2,

				// +2 pixels to prevent empty space after transformation
				"height": "auto"
			});
		} else {
			this.$video.css({
				"width": "auto",

				// +2 pixels to prevent empty space after transformation
				"height": wrapperHeight + 2
			});
		}
	};

	/**
	 * Destroy video background
	 * @public
	 */
	Vide.prototype.destroy = function () {
		this.$element.unbind(pluginName);

		if (this.$video) {
			this.$video.unbind(pluginName);
		}

		delete $[pluginName].lookup[this.index];
		this.$element.removeData(pluginName);
		this.$wrapper.remove();
	};

	/**
	 * Special plugin object for instances.
	 * @type {Object}
	 * @public
	 */
	$[pluginName] = {
		lookup: []
	};

	/**
	 * Plugin constructor
	 * @param {Object|String} path
	 * @param {Object|String} options
	 * @returns {JQuery}
	 * @constructor
	 */
	$.fn[pluginName] = function (path, options) {
		var instance;

		this.each(function () {
			instance = $.data(this, pluginName);

			if (instance) {

				// destroy plugin instance if exists
				instance.destroy();
			}

			// create plugin instance
			instance = new Vide(this, path, options);
			instance.index = $[pluginName].lookup.push(instance) - 1;
			$.data(this, pluginName, instance);
		});

		return this;
	};

	$(document).ready(function () {

		// window resize event listener
		$(window).bind("resize." + pluginName, function () {
			for (var len = $[pluginName].lookup.length, i = 0, instance; i < len; i++) {
				instance = $[pluginName].lookup[i];

				if (instance && instance.settings.resizing) {
					instance.resize();
				}
			}
		});

		// Auto initialization.
		// Add 'data-vide-bg' attribute with a path to the video without extension.
		// Also you can pass options throw the 'data-vide-options' attribute.
		// 'data-vide-options' must be like "muted: false, volume: 0.5".
		$(document).find("[data-" + pluginName + "-bg]").each(function (i, element) {
			var $element = $(element),
				options = $element.data(pluginName + "-options"),
				path = $element.data(pluginName + "-bg");

			$element[pluginName](path, options);
		});
	});
})(window.jQuery, window, document, navigator);

/* https://www.vtmteknik.com/templates/porto/3.4.0/jquery-lazy/1.7.9/jquery.lazy.min.js */
/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t, e) { "use strict"; function r(r, a, i, u, l) { function f() { L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () { s(!0) }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) { "resize" === t.type && (w = B = -1), s(t.all) }), u.a = function (t) { t = c(t), i.push.apply(i, t) }, u.g = function () { return i = n(i).filter(function () { return !n(this).data(a.loadedName) }) }, u.f = function (t) { for (var e = 0; e < t.length; e++) { var r = i.filter(function () { return this === t[e] }); r.length && s(!1, r) } }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e)) } function c(t) { var i = a.defaultImage, o = a.placeholder, u = a.imageBase, l = a.srcsetAttribute, f = a.loaderAttribute, c = a._f || {}; t = n(t).filter(function () { var t = n(this), r = m(this); return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e) }).data("plugin_" + a.name, r); for (var s = 0, d = t.length; s < d; s++) { var A = n(t[s]), g = m(t[s]), h = A.attr(a.imageBaseAttribute) || u; g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')") } return t } function s(t, e) { if (!i.length) return void (a.autoDestroy && r.destroy()); for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)if (t || e || A(o[s])) { var g = n(o[s]), h = m(o[s]), b = g.attr(a.attribute), v = g.attr(a.imageBaseAttribute) || l, p = g.attr(a.loaderAttribute); g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p)) } u && (i = n(i).filter(function () { return !n(this).data(c) })) } function d(t, e, r, i) { ++z; var o = function () { y("onError", t), p(), o = n.noop }; y("beforeLoad", t); var u = a.attribute, l = a.srcsetAttribute, f = a.sizesAttribute, c = a.retinaAttribute, s = a.removeAttribute, d = a.loadedName, A = t.attr(c); if (i) { var g = function () { s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop }; t.off(I).one(I, o).one(D, g), y(i, t, function (e) { e ? (t.off(D), g()) : (t.off(I), o()) }) || t.trigger(I) } else { var h = n(new Image); h.one(I, o).one(D, function () { t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p() }); var m = (L && A ? A : t.attr(u)) || ""; h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D) } } function A(t) { var e = t.getBoundingClientRect(), r = a.scrollDirection, n = a.threshold, i = h() + n > e.top && -n < e.bottom, o = g() + n > e.left && -n < e.right; return "vertical" === r ? i : "horizontal" === r ? o : i && o } function g() { return w >= 0 ? w : w = n(t).width() } function h() { return B >= 0 ? B : B = n(t).height() } function m(t) { return t.tagName.toLowerCase() } function b(t, e) { if (e) { var r = t.split(","); t = ""; for (var a = 0, n = r.length; a < n; a++)t += e + r[a].trim() + (a !== n - 1 ? "," : "") } return t } function v(t, e) { var n, i = 0; return function (o, u) { function l() { i = +new Date, e.call(r, o) } var f = +new Date - i; n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f) } } function p() { --z, i.length || z || y("onFinishedAll") } function y(t, e, n) { return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0) } var z = 0, w = -1, B = -1, L = !1, T = "afterLoad", D = "load", I = "error", N = "img", E = "src", F = "srcset", C = "sizes", O = "background-image"; "event" === a.bind || o ? f() : n(t).on(D + "." + l, f) } function a(a, o) { var u = this, l = n.extend({}, u.config, o), f = {}, c = l.name + "-" + ++i; return u.config = function (t, r) { return r === e ? l[t] : (l[t] = r, u) }, u.addItems = function (t) { return f.a && f.a("string" === n.type(t) ? n(t) : t), u }, u.getItems = function () { return f.g ? f.g() : {} }, u.update = function (t) { return f.e && f.e({}, !t), u }, u.force = function (t) { return f.f && f.f("string" === n.type(t) ? n(t) : t), u }, u.loadAll = function () { return f.e && f.e({ all: !0 }, !0), u }, u.destroy = function () { return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e }, r(u, l, a, f, c), l.chainable ? a : u } var n = t.jQuery || t.Zepto, i = 0, o = !1; n.fn.Lazy = n.fn.lazy = function (t) { return new a(this, t) }, n.Lazy = n.lazy = function (t, r, i) { if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) { t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r]; for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i); for (var c = 0, s = r.length; c < s; c++)u[r[c]] = t[0] } }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP/" + "/" + "/wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function () { o = !0 }) }(window);
/* https://www.vtmteknik.com/templates/porto/3.4.0/fancybox/2.1.5/source/jquery.fancybox.js */
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply(this, arguments);
		},
		IE = navigator.userAgent.match(/msie/i),
		didUpdate = null,
		isTouch = document.createTouch !== undefined,

		isQuery = function (obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function (str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function (str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function (el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function (orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[dim] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function (value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding: 15,
			margin: 20,

			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize: true,
			autoHeight: false,
			autoWidth: false,

			autoResize: true,
			autoCenter: !isTouch,
			fitToView: true,
			aspectRatio: false,
			topRatio: 0.5,
			leftRatio: 0.5,

			scrolling: 'auto', // 'auto', 'yes' or 'no'
			wrapCSS: '',

			arrows: true,
			closeBtn: true,
			closeClick: false,
			nextClick: false,
			mouseWheel: true,
			autoPlay: false,
			playSpeed: 3000,
			preload: 3,
			modal: false,
			loop: true,

			ajax: {
				dataType: 'html',
				headers: { 'X-fancyBox': true }
			},
			iframe: {
				scrolling: 'auto',
				preload: true
			},
			swf: {
				wmode: 'transparent',
				allowfullscreen: 'true',
				allowscriptaccess: 'always'
			},

			keys: {
				next: {
					13: 'left', // enter
					34: 'up',   // page down
					39: 'left', // right arrow
					40: 'up'    // down arrow
				},
				prev: {
					8: 'right',  // backspace
					33: 'down',   // page up
					37: 'right',  // left arrow
					38: 'down'    // up arrow
				},
				close: [27], // escape key
				play: [32], // space - start/stop slideshow
				toggle: [70]  // letter "f" - toggle fullscreen
			},

			direction: {
				next: 'left',
				prev: 'right'
			},

			scrollOutside: true,

			// Override some properties
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,

			// HTML templates
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect: 'fade', // 'elastic', 'fade' or 'none'
			openSpeed: 250,
			openEasing: 'swing',
			openOpacity: true,
			openMethod: 'zoomIn',

			// Closing fancyBox
			closeEffect: 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed: 250,
			closeEasing: 'swing',
			closeOpacity: true,
			closeMethod: 'zoomOut',

			// Changing next gallery item
			nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed: 250,
			nextEasing: 'swing',
			nextMethod: 'changeIn',

			// Changing previous gallery item
			prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed: 250,
			prevEasing: 'swing',
			prevMethod: 'changeOut',

			// Enable default helpers
			helpers: {
				overlay: true,
				title: true
			},

			// Callbacks
			onCancel: $.noop, // If canceling
			beforeLoad: $.noop, // Before loading
			afterLoad: $.noop, // After loading
			beforeShow: $.noop, // Before changing in current item
			afterShow: $.noop, // After opening
			beforeChange: $.noop, // Before changing gallery item
			beforeClose: $.noop, // Before closing
			afterClose: $.noop  // After closing
		},

		//Current state
		group: {}, // Selected group
		opts: {}, // Group options
		previous: null,  // Previous element
		coming: null,  // Element being loaded
		current: null,  // Currently loaded element
		isActive: false, // Is activated
		isOpen: false, // Is currently open
		isOpened: false, // Have been fully opened at least once

		wrap: null,
		skin: null,
		outer: null,
		inner: null,

		player: {
			timer: null,
			isActive: false
		},

		// Loaders
		ajaxLoad: null,
		imgPreload: null,

		// Some collections
		transitions: {},
		helpers: {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function (i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href: element.data('fancybox-href') || element.attr('href'),
							title: element.data('fancybox-title') || element.attr('title'),
							isDom: true,
							element: element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href = opts.href || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type = content ? 'html' : (opts.type || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href = hrefParts.shift();
						selector = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href: href,
					type: type,
					content: content,
					title: title,
					selector: selector
				});

				group[i] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut(coming);
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[F.current.closeMethod]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function (action) {
			var clear = function () {
				clearTimeout(F.player.timer);
			},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player': stop,
							'onUpdate.player': set,
							'beforeLoad.player': clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function (direction) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function (direction) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function (index, direction, router) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
			F.router = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[index] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function () {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function (action) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function (e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position: 'absolute',
					top: (viewport.h * 0.5) + viewport.y,
					left: (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function (i, val) {
							if (current.group.length > 1 && val[code] !== undefined) {
								F[i](val[code]);

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[i]();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable(parent[0]);
						parent = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev(deltaY > 0 ? 'down' : 'left');

							} else if (deltaY < 0 || deltaX < 0) {
								F.next(deltaY < 0 ? 'up' : 'right');
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction(obj[event])) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar(index);
			obj = F.group[index] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn: false,
					closeClick: false,
					nextClick: false,
					arrows: false,
					mouseWheel: false,
					keys: null,
					helpers: {
						overlay: {
							closeClick: false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group = F.group;
			coming.index = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[F.router](F.direction);
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

			$.extend(coming, {
				skin: $('.fancybox-skin', coming.wrap),
				outer: $('.fancybox-outer', coming.wrap),
				inner: $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[i]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error('content');
				}

			} else if (!href) {
				return F._error('href');
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function (type) {
			$.extend(F.coming, {
				type: 'html',
				autoWidth: true,
				autoHeight: true,
				minWidth: 0,
				minHeight: 0,
				scrolling: 'no',
				hasError: type,
				content: F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error('image');
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error('ajax', jqXHR);

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function () {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) { }
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function () {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo(coming.inner);

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function () {
			var group = F.group,
				current = F.current,
				len = group.length,
				cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[(current.index + i) % len];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current = coming;
			content = coming.content;
			type = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap: current.wrap,
				skin: current.skin,
				outer: current.outer,
				inner: current.inner,
				current: current,
				previous: previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
							}
						});
					}
					break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
					break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed = '';

					$.each(current.swf, function (name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
					break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append(content);
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[previous.prevMethod]();
			}

			F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport = F.getViewport(),
				steps = 0,
				canShrink = false,
				canExpand = false,
				wrap = F.wrap,
				skin = F.skin,
				inner = F.inner,
				current = F.current,
				width = current.width,
				height = current.height,
				minWidth = current.minWidth,
				minHeight = current.minHeight,
				maxWidth = current.maxWidth,
				maxHeight = current.maxHeight,
				scrolling = current.scrolling,
				scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
				margin = current.margin,
				wMargin = getScalar(margin[1] + margin[3]),
				hMargin = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true) - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width(origWidth).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) { }
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass('fancybox-tmp');

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width(origWidth);
				}

				if (!current.autoHeight) {
					inner.height(origHeight);
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass('fancybox-tmp');
			}

			width = getScalar(origWidth);
			height = getScalar(origHeight);

			ratio = origWidth / origHeight;

			// Calculations for the content
			minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_ = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width(width);

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width(width).height(height);

				wrap.width(width + wPadding);

				// Real wrap dimensions
				width_ = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width = getScalar(height * ratio);

						if (width < minWidth) {
							width = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width(width).height(height);

						wrap.width(width + wPadding);

						width_ = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width(width).height(height);

			wrap.width(width + wPadding);

			width_ = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim: {
					width: getValue(width_),
					height: getValue(height_)
				},
				origWidth: origWidth,
				origHeight: origHeight,
				canShrink: canShrink,
				canExpand: canExpand,
				wPadding: wPadding,
				hPadding: hPadding,
				wrapSpace: height_ - skin.outerHeight(true),
				skinSpace: skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current = F.current,
				viewport = F.getViewport(),
				margin = current.margin,
				width = F.wrap.width() + margin[1] + margin[3],
				height = F.wrap.height() + margin[0] + margin[2],
				rez = {
					position: 'absolute',
					top: margin[0],
					left: margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top += viewport.y;
				rez.left += viewport.x;
			}

			rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if (current.closeClick || (current.nextClick && F.group.length > 1)) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[current.closeClick ? 'close' : 'next']();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play(false);

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function (obj) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group: {},
				opts: {},
				router: false,
				current: null,
				isActive: false,
				isOpened: false,
				isOpen: false,
				isClosing: false,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current = F.current,
				element = current.element,
				orig = current.orig,
				pos = {},
				width = 50,
				height = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top: getValue(pos.top - hPadding * current.topRatio),
				left: getValue(pos.left - wPadding * current.leftRatio),
				width: getValue(width + wPadding),
				height: getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop = fx.prop,
				current = F.current,
				wrapSpace = current.wrapSpace,
				skinSpace = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value = now - padding;

				F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
				F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
			}
		},

		zoomIn: function () {
			var current = F.current,
				startPos = current.pos,
				effect = current.openEffect,
				elastic = effect === 'elastic',
				endPos = $.extend({ opacity: 1 }, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration: effect === 'none' ? 0 : current.openSpeed,
				easing: current.openEasing,
				step: elastic ? this.step : null,
				complete: F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current = F.current,
				effect = current.closeEffect,
				elastic = effect === 'elastic',
				endPos = { opacity: 0.1 };

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration: effect === 'none' ? 0 : current.closeSpeed,
				easing: current.closeEasing,
				step: elastic ? this.step : null,
				complete: F._afterZoomOut
			});
		},

		changeIn: function () {
			var current = F.current,
				effect = current.nextEffect,
				startPos = current.pos,
				endPos = { opacity: 1 },
				direction = F.direction,
				distance = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[field] = getValue(getScalar(startPos[field]) - distance);
					endPos[field] = '+=' + distance + 'px';

				} else {
					startPos[field] = getValue(getScalar(startPos[field]) + distance);
					endPos[field] = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration: current.nextSpeed,
					easing: current.nextEasing,
					complete: F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous = F.previous,
				effect = previous.prevEffect,
				endPos = { opacity: 0.1 },
				direction = F.direction,
				distance = 200;

			if (effect === 'elastic') {
				endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration: effect === 'none' ? 0 : previous.prevSpeed,
				easing: previous.prevEasing,
				complete: function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults: {
			closeClick: true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut: 200,       // duration of fadeOut animation
			showEarly: true,      // indicates if should be opened immediately or wait until the content is ready
			css: {},        // custom CSS properties
			locked: !isTouch,  // if true, the content will be locked into overlay
			fixed: true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay: null,      // current handle
		fixed: false,     // indicates if the overlay has position "fixed"
		el: $('html'), // element that contains "the lock"

		// Public methods
		create: function (opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
			this.fixed = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open: function (opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy(this.update, this));

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function (e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css(opts.css).show();
		},

		close: function () {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop(scrollV).scrollLeft(scrollH);
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay: null,
				fixed: false
			});
		},

		// Private, callbacks

		update: function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady: function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append(obj.wrap);
				obj.fixed = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow: function (opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function () {
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop(scrollV).scrollLeft(scrollH);
			}

			this.open(opts);
		},

		onUpdate: function () {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults: {
			type: 'float', // 'float', 'inside', 'outside' or 'over',
			position: 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text = current.title,
				type = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
					break;

				case 'outside':
					target = F.wrap;
					break;

				case 'over':
					target = F.inner;
					break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width(title.width());
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
					break;
			}

			title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that = $(this),
			selector = this.selector || '',
			run = function (e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal = what.get(0)[relType];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function () {
		var w1, w2;

		if ($.scrollbarWidth === undefined) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function () {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child = parent.children(),
					width = child.innerWidth() - child.height(99).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ($.support.fixedPosition === undefined) {
			$.support.fixedPosition = (function () {
				var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth: $.scrollbarWidth(),
			fixed: $.support.fixedPosition,
			parent: $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
/* https://www.vtmteknik.com/templates/porto/3.4.0/fancybox/2.1.5/source/helpers/jquery.fancybox-buttons.js */
/*!
* Buttons helper for fancyBox
* version: 1.0.5 (Mon, 15 Oct 2012)
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         helpers : {
*             buttons: {
*                 position : 'top'
*             }
*         }
*     });
*
*/
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.buttons = {
		defaults: {
			skipSingle: false, // disables if gallery contains single image
			position: 'top', // 'top' or 'bottom'
			tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
		},

		list: null,
		buttons: null,

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items

			if (opts.skipSingle && obj.group.length < 2) {
				obj.helpers.buttons = false;
				obj.closeBtn = true;

				return;
			}

			//Increase top margin to give space for buttons
			obj.margin[opts.position === 'bottom' ? 2 : 0] += 30;
		},

		onPlayStart: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function (opts, obj) {
			var buttons = this.buttons;

			if (!buttons) {
				this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

				buttons = {
					prev: this.list.find('.btnPrev').click(F.prev),
					next: this.list.find('.btnNext').click(F.next),
					play: this.list.find('.btnPlay').click(F.play),
					toggle: this.list.find('.btnToggle').click(F.toggle),
					close: this.list.find('.btnClose').click(F.close)
				}
			}

			//Prev
			if (obj.index > 0 || obj.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			//Next / Play
			if (obj.loop || obj.index < obj.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');

			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.buttons = buttons;

			this.onUpdate(opts, obj);
		},

		onUpdate: function (opts, obj) {
			var toggle;

			if (!this.buttons) {
				return;
			}

			toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			//Size toggle button
			if (obj.canShrink) {
				toggle.addClass('btnToggleOn');

			} else if (!obj.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list = null;
			this.buttons = null;
		}
	};

}(jQuery));

/* https://www.vtmteknik.com/templates/porto/3.4.0/fancybox/2.1.5/source/helpers/jquery.fancybox-thumbs.js */
/*!
* Thumbnail helper for fancyBox
* version: 1.0.7 (Mon, 01 Oct 2012)
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         helpers : {
*             thumbs: {
*                 width  : 50,
*                 height : 50
*             }
*         }
*     });
*
*/
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		defaults: {
			width: 50,       // thumbnail width
			height: 50,       // thumbnail height
			position: 'bottom', // 'top' or 'bottom'
			source: function (item) {  // function to obtain the URL of the thumbnail image
				var href;

				if (item.element) {
					href = $(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap: null,
		list: null,
		width: 0,

		init: function (opts, obj) {
			var that = this,
				list,
				thumbWidth = opts.width,
				thumbHeight = opts.height,
				thumbSource = opts.source;

			//Build list structure
			list = '';

			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			$.each(obj.group, function (i) {
				var href = thumbSource(obj.group[i]);

				if (!href) {
					return;
				}

				$("<img />").load(function () {
					var width = this.width,
						height = this.height,
						widthRatio, heightRatio, parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width = Math.floor(width / heightRatio);
							height = thumbHeight;

						} else {
							width = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width: width,
						height: height,
						top: Math.floor(thumbHeight / 2 - height / 2),
						left: Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);

				}).attr('src', href);
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			obj.margin[opts.position === 'top' ? 0 : 2] += ((opts.height) + 15);
		},

		afterShow: function (opts, obj) {
			//Check if exists and create or update list
			if (this.list) {
				this.onUpdate(opts, obj);

			} else {
				this.init(opts, obj);
			}

			//Set active element
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},

		//Center list
		onUpdate: function (opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function () {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap = null;
			this.list = null;
			this.width = 0;
		}
	}

}(jQuery));
/* https://www.vtmteknik.com/templates/porto/3.4.0/fancybox/2.1.5/source/helpers/jquery.fancybox-media.js */
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function (url, rez, params) {
			params = params || '';

			if ($.type(params) === "object") {
				params = $.param(params, true);
			}

			$.each(rez, function (key, value) {
				url = url.replace('$' + key, value || '');
			});

			if (params.length) {
				url += (url.indexOf('?') > 0 ? '&' : '?') + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults: {
			youtube: {
				matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params: {
					autoplay: 1,
					autohide: 1,
					fs: 1,
					rel: 0,
					hd: 1,
					wmode: 'opaque',
					enablejsapi: 1
				},
				type: 'iframe',
				url: '//www.youtube.com/embed/$3'
			},
			vimeo: {
				matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params: {
					autoplay: 1,
					hd: 1,
					show_title: 1,
					show_byline: 1,
					show_portrait: 0,
					fullscreen: 1
				},
				type: 'iframe',
				url: '//player.vimeo.com/video/$1'
			},
			metacafe: {
				matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params: {
					autoPlay: 'yes'
				},
				type: 'swf',
				url: function (rez, params, obj) {
					obj.swf.flashVars = 'playerVars=' + $.param(params, true);

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion: {
				matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
				params: {
					additionalInfos: 0,
					autoStart: 1
				},
				type: 'swf',
				url: '//www.dailymotion.com/swf/video/$1'
			},
			twitvid: {
				matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params: {
					autoplay: 0
				},
				type: 'iframe',
				url: '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic: {
				matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type: 'image',
				url: '//twitpic.com/show/full/$1/'
			},
			instagram: {
				matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type: 'image',
				url: '//$1/p/$2/media/?size=l'
			},
			google_maps: {
				matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type: 'iframe',
				url: function (rez) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad: function (opts, obj) {
			var url = obj.href || '',
				type = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[what];
					rez = url.match(item.matcher);

					if (rez) {
						type = item.type;
						params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));

						url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));
/* https://www.vtmteknik.com/templates/porto/3.4.0/rs-plugin/4.1.0/js/jquery.themepunch.tools.min.js */


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 17.11.2014
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.6
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function (a) { if (typeof define === "function" && define.amd && define.amd.jQuery) { define(["jquery"], a) } else { a(jQuery) } }(function (f) { var p = "left", o = "right", e = "up", x = "down", c = "in", z = "out", m = "none", s = "auto", l = "swipe", t = "pinch", A = "tap", j = "doubletap", b = "longtap", y = "hold", D = "horizontal", u = "vertical", i = "all", r = 10, g = "start", k = "move", h = "end", q = "cancel", a = "ontouchstart" in window, v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, B = "TouchSwipe"; var n = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: true, triggerOnTouchLeave: false, allowPageScroll: "auto", fallbackToMouseEvents: true, excludedElements: "label, button, input, select, textarea, a, .noSwipe" }; f.fn.swipe = function (G) { var F = f(this), E = F.data(B); if (E && typeof G === "string") { if (E[G]) { return E[G].apply(this, Array.prototype.slice.call(arguments, 1)) } else { f.error("Method " + G + " does not exist on jQuery.swipe") } } else { if (!E && (typeof G === "object" || !G)) { return w.apply(this, arguments) } } return F }; f.fn.swipe.defaults = n; f.fn.swipe.phases = { PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q }; f.fn.swipe.directions = { LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: z }; f.fn.swipe.pageScroll = { NONE: m, HORIZONTAL: D, VERTICAL: u, AUTO: s }; f.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: i }; function w(E) { if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) { E.allowPageScroll = m } if (E.click !== undefined && E.tap === undefined) { E.tap = E.click } if (!E) { E = {} } E = f.extend({}, f.fn.swipe.defaults, E); return this.each(function () { var G = f(this); var F = G.data(B); if (!F) { F = new C(this, E); G.data(B, F) } }) } function C(a4, av) { var az = (a || d || !av.fallbackToMouseEvents), J = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown", ay = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove", U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup", S = az ? null : "mouseleave", aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel"); var ag = 0, aP = null, ab = 0, a1 = 0, aZ = 0, G = 1, aq = 0, aJ = 0, M = null; var aR = f(a4); var Z = "start"; var W = 0; var aQ = null; var T = 0, a2 = 0, a5 = 0, ad = 0, N = 0; var aW = null, af = null; try { aR.bind(J, aN); aR.bind(aD, a9) } catch (ak) { f.error("events not supported " + J + "," + aD + " on jQuery.swipe") } this.enable = function () { aR.bind(J, aN); aR.bind(aD, a9); return aR }; this.disable = function () { aK(); return aR }; this.destroy = function () { aK(); aR.data(B, null); return aR }; this.option = function (bc, bb) { if (av[bc] !== undefined) { if (bb === undefined) { return av[bc] } else { av[bc] = bb } } else { f.error("Option " + bc + " does not exist on jQuery.swipe.options") } return null }; function aN(bd) { if (aB()) { return } if (f(bd.target).closest(av.excludedElements, aR).length > 0) { return } var be = bd.originalEvent ? bd.originalEvent : bd; var bc, bb = a ? be.touches[0] : be; Z = g; if (a) { W = be.touches.length } else { bd.preventDefault() } ag = 0; aP = null; aJ = null; ab = 0; a1 = 0; aZ = 0; G = 1; aq = 0; aQ = aj(); M = aa(); R(); if (!a || (W === av.fingers || av.fingers === i) || aX()) { ai(0, bb); T = at(); if (W == 2) { ai(1, be.touches[1]); a1 = aZ = au(aQ[0].start, aQ[1].start) } if (av.swipeStatus || av.pinchStatus) { bc = O(be, Z) } } else { bc = false } if (bc === false) { Z = q; O(be, Z); return bc } else { if (av.hold) { af = setTimeout(f.proxy(function () { aR.trigger("hold", [be.target]); if (av.hold) { bc = av.hold.call(aR, be, be.target) } }, this), av.longTapThreshold) } ao(true) } return null } function a3(be) { var bh = be.originalEvent ? be.originalEvent : be; if (Z === h || Z === q || am()) { return } var bd, bc = a ? bh.touches[0] : bh; var bf = aH(bc); a2 = at(); if (a) { W = bh.touches.length } if (av.hold) { clearTimeout(af) } Z = k; if (W == 2) { if (a1 == 0) { ai(1, bh.touches[1]); a1 = aZ = au(aQ[0].start, aQ[1].start) } else { aH(bh.touches[1]); aZ = au(aQ[0].end, aQ[1].end); aJ = ar(aQ[0].end, aQ[1].end) } G = a7(a1, aZ); aq = Math.abs(a1 - aZ) } if ((W === av.fingers || av.fingers === i) || !a || aX()) { aP = aL(bf.start, bf.end); al(be, aP); ag = aS(bf.start, bf.end); ab = aM(); aI(aP, ag); if (av.swipeStatus || av.pinchStatus) { bd = O(bh, Z) } if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) { var bb = true; if (av.triggerOnTouchLeave) { var bg = aY(this); bb = E(bf.end, bg) } if (!av.triggerOnTouchEnd && bb) { Z = aC(k) } else { if (av.triggerOnTouchLeave && !bb) { Z = aC(h) } } if (Z == q || Z == h) { O(bh, Z) } } } else { Z = q; O(bh, Z) } if (bd === false) { Z = q; O(bh, Z) } } function L(bb) { var bc = bb.originalEvent; if (a) { if (bc.touches.length > 0) { F(); return true } } if (am()) { W = ad } a2 = at(); ab = aM(); if (ba() || !an()) { Z = q; O(bc, Z) } else { if (av.triggerOnTouchEnd || (av.triggerOnTouchEnd == false && Z === k)) { bb.preventDefault(); Z = h; O(bc, Z) } else { if (!av.triggerOnTouchEnd && a6()) { Z = h; aF(bc, Z, A) } else { if (Z === k) { Z = q; O(bc, Z) } } } } ao(false); return null } function a9() { W = 0; a2 = 0; T = 0; a1 = 0; aZ = 0; G = 1; R(); ao(false) } function K(bb) { var bc = bb.originalEvent; if (av.triggerOnTouchLeave) { Z = aC(h); O(bc, Z) } } function aK() { aR.unbind(J, aN); aR.unbind(aD, a9); aR.unbind(ay, a3); aR.unbind(U, L); if (S) { aR.unbind(S, K) } ao(false) } function aC(bf) { var be = bf; var bd = aA(); var bc = an(); var bb = ba(); if (!bd || bb) { be = q } else { if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) { be = h } else { if (!bc && bf == h && av.triggerOnTouchLeave) { be = q } } } return be } function O(bd, bb) { var bc = undefined; if (I() || V()) { bc = aF(bd, bb, l) } else { if ((P() || aX()) && bc !== false) { bc = aF(bd, bb, t) } } if (aG() && bc !== false) { bc = aF(bd, bb, j) } else { if (ap() && bc !== false) { bc = aF(bd, bb, b) } else { if (ah() && bc !== false) { bc = aF(bd, bb, A) } } } if (bb === q) { a9(bd) } if (bb === h) { if (a) { if (bd.touches.length == 0) { a9(bd) } } else { a9(bd) } } return bc } function aF(be, bb, bd) { var bc = undefined; if (bd == l) { aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]); if (av.swipeStatus) { bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ); if (bc === false) { return false } } if (bb == h && aV()) { aR.trigger("swipe", [aP, ag, ab, W, aQ]); if (av.swipe) { bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ); if (bc === false) { return false } } switch (aP) { case p: aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]); if (av.swipeLeft) { bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ) } break; case o: aR.trigger("swipeRight", [aP, ag, ab, W, aQ]); if (av.swipeRight) { bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ) } break; case e: aR.trigger("swipeUp", [aP, ag, ab, W, aQ]); if (av.swipeUp) { bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ) } break; case x: aR.trigger("swipeDown", [aP, ag, ab, W, aQ]); if (av.swipeDown) { bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ) } break } } } if (bd == t) { aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]); if (av.pinchStatus) { bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ); if (bc === false) { return false } } if (bb == h && a8()) { switch (aJ) { case c: aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]); if (av.pinchIn) { bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ) } break; case z: aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]); if (av.pinchOut) { bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ) } break } } } if (bd == A) { if (bb === q || bb === h) { clearTimeout(aW); clearTimeout(af); if (Y() && !H()) { N = at(); aW = setTimeout(f.proxy(function () { N = null; aR.trigger("tap", [be.target]); if (av.tap) { bc = av.tap.call(aR, be, be.target) } }, this), av.doubleTapThreshold) } else { N = null; aR.trigger("tap", [be.target]); if (av.tap) { bc = av.tap.call(aR, be, be.target) } } } } else { if (bd == j) { if (bb === q || bb === h) { clearTimeout(aW); N = null; aR.trigger("doubletap", [be.target]); if (av.doubleTap) { bc = av.doubleTap.call(aR, be, be.target) } } } else { if (bd == b) { if (bb === q || bb === h) { clearTimeout(aW); N = null; aR.trigger("longtap", [be.target]); if (av.longTap) { bc = av.longTap.call(aR, be, be.target) } } } } } return bc } function an() { var bb = true; if (av.threshold !== null) { bb = ag >= av.threshold } return bb } function ba() { var bb = false; if (av.cancelThreshold !== null && aP !== null) { bb = (aT(aP) - ag) >= av.cancelThreshold } return bb } function ae() { if (av.pinchThreshold !== null) { return aq >= av.pinchThreshold } return true } function aA() { var bb; if (av.maxTimeThreshold) { if (ab >= av.maxTimeThreshold) { bb = false } else { bb = true } } else { bb = true } return bb } function al(bb, bc) { if (av.allowPageScroll === m || aX()) { bb.preventDefault() } else { var bd = av.allowPageScroll === s; switch (bc) { case p: if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) { bb.preventDefault() } break; case o: if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) { bb.preventDefault() } break; case e: if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) { bb.preventDefault() } break; case x: if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) { bb.preventDefault() } break } } } function a8() { var bc = aO(); var bb = X(); var bd = ae(); return bc && bb && bd } function aX() { return !!(av.pinchStatus || av.pinchIn || av.pinchOut) } function P() { return !!(a8() && aX()) } function aV() { var be = aA(); var bg = an(); var bd = aO(); var bb = X(); var bc = ba(); var bf = !bc && bb && bd && bg && be; return bf } function V() { return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown) } function I() { return !!(aV() && V()) } function aO() { return ((W === av.fingers || av.fingers === i) || !a) } function X() { return aQ[0].end.x !== 0 } function a6() { return !!(av.tap) } function Y() { return !!(av.doubleTap) } function aU() { return !!(av.longTap) } function Q() { if (N == null) { return false } var bb = at(); return (Y() && ((bb - N) <= av.doubleTapThreshold)) } function H() { return Q() } function ax() { return ((W === 1 || !a) && (isNaN(ag) || ag < av.threshold)) } function a0() { return ((ab > av.longTapThreshold) && (ag < r)) } function ah() { return !!(ax() && a6()) } function aG() { return !!(Q() && Y()) } function ap() { return !!(a0() && aU()) } function F() { a5 = at(); ad = event.touches.length + 1 } function R() { a5 = 0; ad = 0 } function am() { var bb = false; if (a5) { var bc = at() - a5; if (bc <= av.fingerReleaseThreshold) { bb = true } } return bb } function aB() { return !!(aR.data(B + "_intouch") === true) } function ao(bb) { if (bb === true) { aR.bind(ay, a3); aR.bind(U, L); if (S) { aR.bind(S, K) } } else { aR.unbind(ay, a3, false); aR.unbind(U, L, false); if (S) { aR.unbind(S, K, false) } } aR.data(B + "_intouch", bb === true) } function ai(bc, bb) { var bd = bb.identifier !== undefined ? bb.identifier : 0; aQ[bc].identifier = bd; aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX; aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY; return aQ[bc] } function aH(bb) { var bd = bb.identifier !== undefined ? bb.identifier : 0; var bc = ac(bd); bc.end.x = bb.pageX || bb.clientX; bc.end.y = bb.pageY || bb.clientY; return bc } function ac(bc) { for (var bb = 0; bb < aQ.length; bb++) { if (aQ[bb].identifier == bc) { return aQ[bb] } } } function aj() { var bb = []; for (var bc = 0; bc <= 5; bc++) { bb.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 }) } return bb } function aI(bb, bc) { bc = Math.max(bc, aT(bb)); M[bb].distance = bc } function aT(bb) { if (M[bb]) { return M[bb].distance } return undefined } function aa() { var bb = {}; bb[p] = aw(p); bb[o] = aw(o); bb[e] = aw(e); bb[x] = aw(x); return bb } function aw(bb) { return { direction: bb, distance: 0 } } function aM() { return a2 - T } function au(be, bd) { var bc = Math.abs(be.x - bd.x); var bb = Math.abs(be.y - bd.y); return Math.round(Math.sqrt(bc * bc + bb * bb)) } function a7(bb, bc) { var bd = (bc / bb) * 1; return bd.toFixed(2) } function ar() { if (G < 1) { return z } else { return c } } function aS(bc, bb) { return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2))) } function aE(be, bc) { var bb = be.x - bc.x; var bg = bc.y - be.y; var bd = Math.atan2(bg, bb); var bf = Math.round(bd * 180 / Math.PI); if (bf < 0) { bf = 360 - Math.abs(bf) } return bf } function aL(bc, bb) { var bd = aE(bc, bb); if ((bd <= 45) && (bd >= 0)) { return p } else { if ((bd <= 360) && (bd >= 315)) { return p } else { if ((bd >= 135) && (bd <= 225)) { return o } else { if ((bd > 45) && (bd < 135)) { return x } else { return e } } } } } function at() { var bb = new Date(); return bb.getTime() } function aY(bb) { bb = f(bb); var bd = bb.offset(); var bc = { left: bd.left, right: bd.left + bb.outerWidth(), top: bd.top, bottom: bd.top + bb.outerHeight() }; return bc } function E(bb, bc) { return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom) } } }));



if (typeof (console) === 'undefined') {
	var console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function () { };
}

if (window.tplogs == true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch (e) { }


var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;

var punchgs = window.GreenSockGlobals = {};

if (window.tplogs == true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch (e) { }

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function (t, e) { "use strict"; var i = t.GreenSockGlobals = t.GreenSockGlobals || t; if (!i.TweenLite) { var s, r, n, a, o, l = function (t) { var e, s = t.split("."), r = i; for (e = 0; s.length > e; e++)r[s[e]] = r = r[s[e]] || {}; return r }, h = l("com.greensock"), _ = 1e-10, u = function (t) { var e, i = [], s = t.length; for (e = 0; e !== s; i.push(t[e++])); return i }, m = function () { }, f = function () { var t = Object.prototype.toString, e = t.call([]); return function (i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) } }(), c = {}, p = function (s, r, n, a) { this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = n; var o = []; this.check = function (h) { for (var _, u, m, f, d = r.length, v = d; --d > -1;)(_ = c[r[d]] || new p(r[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this); if (0 === v && n) for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = n.apply(n, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () { return f }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++)this.sc[d].check() }, this.check(!0) }, d = t._gsDefine = function (t, e, i, s) { return new p(t, e, i, s) }, v = h._class = function (t, e, i) { return e = e || function () { }, d(t, [], function () { return e }, i), e }; d.globals = i; var g = [0, 0, 1, 1], T = [], y = v("easing.Ease", function (t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g }, !0), w = y.map = {}, P = y.register = function (t, e, i, s) { for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)for (n = l[_], r = s ? v("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;)o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t }; for (n = y.prototype, n._calcEnd = !1, n.getRatio = function (t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t); return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2 }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;)n = s[r] + ",Power" + r, P(new y(null, null, 1, r), n, "easeOut", !0), P(new y(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), P(new y(null, null, 3, r), n, "easeInOut"); w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut; var b = v("events.EventDispatcher", function (t) { this._listeners = {}, this._eventTarget = t || this }); n = b.prototype, n.addEventListener = function (t, e, i, s, r) { r = r || 0; var n, l, h = this._listeners[t], _ = 0; for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;)n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1); h.splice(_, 0, { c: e, s: i, up: s, pr: r }), this !== a || o || a.wake() }, n.removeEventListener = function (t, e) { var i, s = this._listeners[t]; if (s) for (i = s.length; --i > -1;)if (s[i].c === e) return s.splice(i, 1), void 0 }, n.dispatchEvent = function (t) { var e, i, s, r = this._listeners[t]; if (r) for (e = r.length, i = this._eventTarget; --e > -1;)s = r[e], s && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i)) }; var k = t.requestAnimationFrame, A = t.cancelAnimationFrame, S = Date.now || function () { return (new Date).getTime() }, x = S(); for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !k;)k = t[s[r] + "RequestAnimationFrame"], A = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"]; v("Ticker", function (t, e) { var i, s, r, n, l, h = this, u = S(), f = e !== !1 && k, c = 500, p = 33, d = function (t) { var e, a, o = S() - x; o > c && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(d)), a && h.dispatchEvent("tick") }; b.call(h), h.time = h.frame = 0, h.tick = function () { d(!0) }, h.lagSmoothing = function (t, e) { c = t || 1 / _, p = Math.min(e, c, 0) }, h.sleep = function () { null != r && (f && A ? A(r) : clearTimeout(r), s = m, r = null, h === a && (o = !1)) }, h.wake = function () { null !== r ? h.sleep() : h.frame > 10 && (x = S() - c + 5), s = 0 === i ? m : f && k ? k : function (t) { return setTimeout(t, 0 | 1e3 * (l - h.time) + 1) }, h === a && (o = !0), d(2) }, h.fps = function (t) { return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i }, h.useRAF = function (t) { return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f }, h.fps(t), setTimeout(function () { f && (!r || 5 > h.frame) && h.useRAF(!1) }, 1500) }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker; var R = v("core.Animation", function (t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) { o || a.wake(); var i = this.vars.useFrames ? q : B; i.add(this, i._time), this.vars.paused && this.paused(!0) } }); a = R.ticker = new h.Ticker, n = R.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1; var C = function () { o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3) }; C(), n.play = function (t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, n.pause = function (t, e) { return null != t && this.seek(t, e), this.paused(!0) }, n.resume = function (t, e) { return null != t && this.seek(t, e), this.paused(!1) }, n.seek = function (t, e) { return this.totalTime(Number(t), e !== !1) }, n.restart = function (t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, n.reverse = function (t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, n.render = function () { }, n.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, n.isActive = function () { var t, e = this._timeline, i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t }, n._enabled = function (t, e) { return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, n._kill = function () { return this._enabled(!1, !1) }, n.kill = function (t, e) { return this._kill(t, e), this }, n._uncache = function (t) { for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline; return this }, n._swapSelfInParams = function (t) { for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this); return i }, n.eventCallback = function (t, e, i, s) { if ("on" === (t || "").substr(0, 2)) { var r = this.vars; if (1 === arguments.length) return r[t]; null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e) } return this }, n.delay = function (t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, n.duration = function (t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, n.totalDuration = function (t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, n.time = function (t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, n.totalTime = function (t, e, i) { if (o || a.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var s = this._totalDuration, r = this._timeline; if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline } this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && M()) } return this }, n.progress = n.totalProgress = function (t, e) { return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration() }, n.startTime = function (t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, n.endTime = function (t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, n.timeScale = function (t) { if (!arguments.length) return this._timeScale; if (t = t || _, this._timeline && this._timeline.smoothChildTiming) { var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(); this._startTime = i - (i - this._startTime) * this._timeScale / t } return this._timeScale = t, this._uncache(!1) }, n.reversed = function (t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, n.paused = function (t) { if (!arguments.length) return this._paused; if (t != this._paused && this._timeline) { o || t || a.wake(); var e = this._timeline, i = e.rawTime(), s = i - this._pauseTime; !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0) } return this._gc && !t && this._enabled(!0, !1), this }; var D = v("core.SimpleTimeline", function (t) { R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 }); n = D.prototype = new R, n.constructor = D, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) { var i, s; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;)i = i._prev; return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this }, n._remove = function (t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, n.render = function (t, e, i) { var s, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;)s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s }, n.rawTime = function () { return o || a.wake(), this._totalTime }; var I = v("TweenLite", function (e, i, s) { if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target."; this.target = e = "string" != typeof e ? e : I.selector(e) || e; var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite; if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && H(n, this, null, 1, this._siblings[r])) : (n = a[r--] = I.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1); else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && H(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay)) }, !0), E = function (e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) }, O = function (t, e) { var i, s = {}; for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]); t.css = s }; n = I.prototype = new R, n.constructor = I, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, I.version = "1.14.2", I.defaultEase = n._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = !0, I.lagSmoothing = function (t, e) { a.lagSmoothing(t, e) }, I.selector = t.$ || t.jQuery || function (e) { var i = t.$ || t.jQuery; return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) }; var z = [], L = {}, N = I._internals = { isArray: f, isSelector: E, lazyTweens: z }, U = I._plugins = {}, F = N.tweenLookup = {}, j = 0, G = N.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1 }, Q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, q = R._rootFramesTimeline = new D, B = R._rootTimeline = new D, M = N.lazyRender = function () { var t, e = z.length; for (L = {}; --e > -1;)t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1); z.length = 0 }; B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(M, 1), R._updateRoot = I.render = function () { var t, e, i; if (z.length && M(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && M(), !(a.frame % 120)) { for (i in F) { for (e = F[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1); 0 === e.length && delete F[i] } if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) { for (; i && i._paused;)i = i._next; i || a.sleep() } } }, a.addEventListener("tick", R._updateRoot); var $ = function (t, e, i) { var s, r, n = t._gsTweenID; if (F[n || (t._gsTweenID = n = "t" + j++)] || (F[n] = { target: t, tweens: [] }), e && (s = F[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;)s[r] === e && s.splice(r, 1); return F[n].tweens }, K = function (t, e, i, s) { var r, n, a = t.vars.onOverwrite; return a && (r = a(t, e, i, s)), a = I.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1 }, H = function (t, e, i, s, r) { var n, a, o, l; if (1 === s || s >= 4) { for (l = r.length, n = 0; l > n; n++)if ((o = r[n]) !== e) o._gc || K(o, e) && o._enabled(!1, !1) && (a = !0); else if (5 === s) break; return a } var h, u = e._startTime + _, m = [], f = 0, c = 0 === e._duration; for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, c), 0 === J(o, h, c) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o))); for (n = f; --n > -1;)if (o = m[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) { if (2 !== s && !K(o, e)) continue; o._enabled(!1, !1) && (a = !0) } return a }, J = function (t, e, i) { for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) { if (n += s._startTime, r *= s._timeScale, s._paused) return -100; s = s._timeline } return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _ }; n._init = function () { var t, e, i, s, r, n = this.vars, a = this._overwrittenProps, o = this._duration, l = !!n.immediateRender, h = n.ease; if (n.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}; for (s in n.startAt) r[s] = n.startAt[s]; if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null; else if (0 !== o) return } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else { 0 !== this._time && (l = !1), i = {}; for (s in n) G[s] && "autoCSS" !== s || (i[s] = n[s]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) } if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, n.easeParams) : w[h] || I.defaultEase : I.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, a); if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next; this._onUpdate = n.onUpdate, this._initted = !0 }, n._initProps = function (e, i, s, r) { var n, a, o, l, h, _; if (null == e) return !1; L[e._gsTweenID] && M(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && O(this.vars, e); for (n in this.vars) { if (_ = this.vars[n], G[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this)); else if (U[n] && (l = new U[n])._onInitTween(e, this.vars[n], this)) { for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: l._priority }, a = l._overwriteProps.length; --a > -1;)i[l._overwriteProps[a]] = this._firstPT; (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0) } else this._firstPT = i[n] = h = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0; h && h._next && (h._next._prev = h) } return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && H(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o) }, n.render = function (t, e, i) { var s, r, n, a, o = this._time, l = this._duration, h = this._rawPrevTime; if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _); else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) { var u = t / l, m = this._easeType, f = this._easePower; (1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2 } else this.ratio = this._ease.getRatio(t / l); if (this._time !== o || i) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0; this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next; this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0)) } }, n._kill = function (t, e, i) { if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1); e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e; var s, r, n, a, o, l, h, _, u; if ((f(e) || E(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;)this._kill(t, e[s]) && (l = !0); else { if (this._targets) { for (s = this._targets.length; --s > -1;)if (e === this._targets[s]) { o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all"; break } } else { if (e !== this.target) return !1; o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" } if (o) { if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) { for (n in h) o[n] && (u || (u = []), u.push(n)); if (!K(this, i, e, u)) return !1 } for (n in h) (a = o[n]) && (a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1); !this._firstPT && this._initted && this._enabled(!1, !1) } } return l }, n.invalidate = function () { return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this }, n._enabled = function (t, e) { if (o || a.wake(), t && this._gc) { var i, s = this._targets; if (s) for (i = s.length; --i > -1;)this._siblings[i] = $(s[i], this, !0); else this._siblings = $(this.target, this, !0) } return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1 }, I.to = function (t, e, i) { return new I(t, e, i) }, I.from = function (t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i) }, I.fromTo = function (t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s) }, I.delayedCall = function (t, e, i, s, r) { return new I(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: r, overwrite: 0 }) }, I.set = function (t, e) { return new I(t, 0, e) }, I.getTweensOf = function (t, e) { if (null == t) return []; t = "string" != typeof t ? t : I.selector(t) || t; var i, s, r, n; if ((f(t) || E(t)) && "number" != typeof t[0]) { for (i = t.length, s = []; --i > -1;)s = s.concat(I.getTweensOf(t[i], e)); for (i = s.length; --i > -1;)for (n = s[i], r = i; --r > -1;)n === s[r] && s.splice(i, 1) } else for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1); return s }, I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = I.getTweensOf(t, e), r = s.length; --r > -1;)s[r]._kill(i, t) }; var V = v("plugins.TweenPlugin", function (t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype }, !0); if (n = V.prototype, V.version = "1.10.1", V.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) { var a, o; return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n }, o._next && (o._next._prev = o), o) : void 0 }, n.setRatio = function (t) { for (var e, i = this._firstPT, s = 1e-6; i;)e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next }, n._kill = function (t) { var e, i = this._overwriteProps, s = this._firstPT; if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1); for (; s;)null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next; return !1 }, n._roundProps = function (t, e) { for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, I._onPluginEvent = function (t, e) { var i, s, r, n, a, o = e._firstPT; if ("_onInitAllProps" === t) { for (; o;) { for (a = o._next, s = r; s && s.pr > o.pr;)s = s._next; (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a } o = e._firstPT = r } for (; o;)o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next; return i }, V.activate = function (t) { for (var e = t.length; --e > -1;)t[e].API === V.API && (U[(new t[e])._propName] = t[e]); return !0 }, d.plugin = function (t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () { V.call(this, i, s), this._overwriteProps = r || [] }, t.global === !0), o = a.prototype = new V(i); o.constructor = a, a.API = t.API; for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]); return a.version = t.version, V.activate([a]), a }, s = t._gsQueue) { for (r = 0; s.length > r; r++)s[r](); for (n in c) c[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n) } o = !1 } })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () { "use strict"; _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) { var s = function (t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var i, s, r = this.vars; for (s in r) i = r[s], o(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i)); o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger) }, r = 1e-10, n = i._internals, a = n.isSelector, o = n.isArray, h = n.lazyTweens, l = n.lazyRender, _ = [], u = _gsScope._gsDefine.globals, c = function (t) { var e, i = {}; for (e in t) i[e] = t[e]; return i }, p = function (t, e, i, s) { var r = t._timeline._totalTime; (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || _), this._forcingPlayhead && t._timeline.seek(r)) }, f = function (t) { var e, i = [], s = t.length; for (e = 0; e !== s; i.push(t[e++])); return i }, m = s.prototype = new e; return s.version = "1.14.2", m.constructor = s, m.kill()._gc = m._forcingPlayhead = !1, m.to = function (t, e, s, r) { var n = s.repeat && u.TweenMax || i; return e ? this.add(new n(t, e, s), r) : this.set(t, s, r) }, m.from = function (t, e, s, r) { return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r) }, m.fromTo = function (t, e, s, r, n) { var a = r.repeat && u.TweenMax || i; return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n) }, m.staggerTo = function (t, e, r, n, o, h, l, _) { var u, p = new s({ onComplete: h, onCompleteParams: l, onCompleteScope: _, smoothChildTiming: this.smoothChildTiming }); for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = f(t)), n = n || 0, 0 > n && (t = f(t), t.reverse(), n *= -1), u = 0; t.length > u; u++)r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n); return this.add(p, o) }, m.staggerFrom = function (t, e, i, s, r, n, a, o) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o) }, m.staggerFromTo = function (t, e, i, s, r, n, a, o, h) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h) }, m.call = function (t, e, s, r) { return this.add(i.delayedCall(0, t, e, s), r) }, m.set = function (t, e, s) { return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function (t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0); var r, n, a = new s(t), o = a._timeline; for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;)n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n; return o.add(a, 0), a }, m.add = function (r, n, a, h) { var l, _, u, c, p, f; if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) { if (r instanceof Array || r && r.push && o(r)) { for (a = a || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++)o(c = r[u]) && (c = new s({ tweens: c })), this.add(c, l), "string" != typeof c && "function" != typeof c && ("sequence" === a ? l = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), l += h; return this._uncache(!0) } if ("string" == typeof r) return this.addLabel(r, n); if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string."; r = i.delayedCall(0, r) } if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, f = p.rawTime() > r._startTime; p._timeline;)f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline; return this }, m.remove = function (e) { if (e instanceof t) return this._remove(e, !1); if (e instanceof Array || e && e.push && o(e)) { for (var i = e.length; --i > -1;)this.remove(e[i]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function (t, i) { e.prototype._remove.call(this, t, i); var s = this._last; return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function (t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function (t, e, i, s) { return this.add(t, e || 0, i, s) }, m.appendMultiple = function (t, e, i, s) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, m.addLabel = function (t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function (t, e, i, s) { return this.call(p, ["{self}", e, i, s], this, t) }, m.removeLabel = function (t) { return delete this._labels[t], this }, m.getLabelTime = function (t) { return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function (e, i, s, r) { var n; if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && o(r))) for (n = r.length; --n > -1;)r[n] instanceof t && r[n].timeline === this && this.remove(r[n]); if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s); if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else { if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i; i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration() } return Number(e) + i }, m.seek = function (t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1) }, m.stop = function () { return this.paused(!0) }, m.gotoAndPlay = function (t, e) { return this.play(t, e) }, m.gotoAndStop = function (t, e) { return this.pause(t, e) }, m.render = function (t, e, i) { this._gc && this._enabled(!0, !1); var s, n, a, o, u, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._startTime, m = this._timeScale, d = this._paused; if (t >= c ? (this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || u) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= p) for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a; else for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a; this._onUpdate && (e || (h.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _))) } }, m._hasPausedChild = function () { for (var t = this._first; t;) { if (t._paused || t instanceof s && t._hasPausedChild()) return !0; t = t._next } return !1 }, m.getChildren = function (t, e, s, r) { r = r || -9999999999; for (var n = [], a = this._first, o = 0; a;)r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next; return n }, m.getTweensOf = function (t, e) { var s, r, n = this._gc, a = [], o = 0; for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]); return n && this._enabled(!1, !0), a }, m.recent = function () { return this._recent }, m._contains = function (t) { for (var e = t.timeline; e;) { if (e === this) return !0; e = e.timeline } return !1 }, m.shiftChildren = function (t, e, i) { i = i || 0; for (var s, r = this._first, n = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next; if (e) for (s in n) n[s] >= i && (n[s] += t); return this._uncache(!0) }, m._kill = function (t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;)i[s]._kill(t, e) && (r = !0); return r }, m.clear = function (t) { var e = this.getChildren(!1, !0, !0), i = e.length; for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1); return t !== !1 && (this._labels = {}), this._uncache(!0) }, m.invalidate = function () { for (var e = this._first; e;)e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, m._enabled = function (t, i) { if (t === this._gc) for (var s = this._first; s;)s._enabled(t, !0), s = s._next; return e.prototype._enabled.call(this, t, i) }, m.totalTime = function () { this._forcingPlayhead = !0; var e = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, m.duration = function (t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function (t) { if (!arguments.length) { if (this._dirty) { for (var e, i, s = 0, r = this._last, n = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e; this._duration = this._totalDuration = s, this._dirty = !1 } return this._totalDuration } return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this }, m.usesFrames = function () { for (var e = this._timeline; e._timeline;)e = e._timeline; return e === t._rootFramesTimeline }, m.rawTime = function () { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, s }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) { "use strict"; var e = function () { return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e()) }("TimelineLite");

/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () { "use strict"; _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) { var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function (e, i) { var s = h("easing." + e, function () { }, !0), r = s.prototype = new t; return r.constructor = s, r.getRatio = i, s }, _ = t.register || function () { }, u = function (t, e, i, s) { var r = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0); return _(r, t), r }, c = function (t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) }, p = function (e, i) { var s = h("easing." + e, function (t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0), r = s.prototype = new t; return r.constructor = s, r.getRatio = i, r.config = function (t) { return new s(t) }, s }, f = u("Back", p("BackOut", function (t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), p("BackIn", function (t) { return t * t * ((this._p1 + 1) * t - this._p1) }), p("BackInOut", function (t) { return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })), m = h("easing.SlowMo", function (t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0), d = m.prototype = new t; return d.constructor = m, d.getRatio = function (t) { var e = t + (.5 - t) * this._p; return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) { return new m(t, e, i) }, e = h("easing.SteppedEase", function (t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function (t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, d.config = e.config = function (t) { return new e(t) }, i = h("easing.RoughEase", function (e) { e = e || {}; for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;)i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = { x: i, y: s }; for (l.sort(function (t, e) { return t.x - e.x }), o = new c(1, 1, null), p = u; --p > -1;)a = l[p], o = new c(a.x, a.y, o); this._prev = new c(0, 0, 0 !== o.t ? o : o.next) }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function (t) { var e = this._prev; if (t > e.t) { for (; e.next && t >= e.t;)e = e.next; e = e.prev } else for (; e.prev && e.t >= t;)e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, d.config = function (t) { return new i(t) }, i.ease = new i, u("Bounce", l("BounceOut", function (t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), l("BounceIn", function (t) { return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), l("BounceInOut", function (t) { var e = .5 > t; return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", l("CircOut", function (t) { return Math.sqrt(1 - (t -= 1) * t) }), l("CircIn", function (t) { return -(Math.sqrt(1 - t * t) - 1) }), l("CircInOut", function (t) { return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), s = function (e, i, s) { var r = h("easing." + e, function (t, e) { this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0) }, !0), n = r.prototype = new t; return n.constructor = r, n.getRatio = i, n.config = function (t, e) { return new r(t, e) }, r }, u("Elastic", s("ElasticOut", function (t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .3), s("ElasticIn", function (t) { return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2)) }, .3), s("ElasticInOut", function (t) { return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .45)), u("Expo", l("ExpoOut", function (t) { return 1 - Math.pow(2, -10 * t) }), l("ExpoIn", function (t) { return Math.pow(2, 10 * (t - 1)) - .001 }), l("ExpoInOut", function (t) { return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", l("SineOut", function (t) { return Math.sin(t * o) }), l("SineIn", function (t) { return -Math.cos(t * o) + 1 }), l("SineInOut", function (t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function (e) { return t.map[e] } }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	"use strict"; _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
		var i, r, s, n, a = function () { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio }, o = {}, l = a.prototype = new t("css"); l.constructor = a, a.version = "1.14.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l, lineHeight: "" }; var h, u, f, p, _, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g, m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, T = /opacity:([^;]*)/i, w = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, P = /([A-Z])/g, S = /-([a-z])/gi, R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function (t, e) { return e.toUpperCase() }, k = /(?:Left|Right|Width)/i, O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, L = 180 / Math.PI, N = {}, z = document, X = z.createElement("div"), I = z.createElement("img"), E = a._internals = { _specialProps: o }, F = navigator.userAgent, Y = function () { var t, e = F.indexOf("Android"), i = z.createElement("div"); return f = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), _ = f && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (c = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1 }(), B = function (t) { return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 }, U = function (t) { window.console && console.log(t) }, j = "", W = "", V = function (t, e) { e = e || X; var i, r, s = e.style; if (void 0 !== s[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];); return r >= 0 ? (W = 3 === r ? "ms" : i[r], j = "-" + W.toLowerCase() + "-", W + t) : null }, q = z.defaultView ? z.defaultView.getComputedStyle : function () { }, H = a.getStyle = function (t, e, i, r, s) { var n; return Y || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || q(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : B(t) }, G = E.convertToPixels = function (t, i, r, s, n) { if ("px" === s || !s) return r; if ("auto" === s || !r) return 0; var o, l, h, u = k.test(i), f = t, p = X.style, _ = 0 > r; if (_ && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight); else { if (p.cssText = "border:0 solid red;position:" + H(t, "position") + ";line-height:0;", "%" !== s && f.appendChild) p[u ? "borderLeftWidth" : "borderTopWidth"] = r + s; else { if (f = t.parentNode || z.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100; p[u ? "width" : "height"] = r + s } f.appendChild(X), o = parseFloat(X[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(X), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = G(t, i, r, s, !0)) } return _ ? -o : o }, Q = E.calculateOffset = function (t, e, i) { if ("absolute" !== H(t, "position", i)) return 0; var r = "left" === e ? "Left" : "Top", s = H(t, "margin" + r, i); return t["offset" + r] - (G(t, e, parseFloat(s), s.replace(y, "")) || 0) }, Z = function (t, e) { var i, r, s = {}; if (e = e || q(t, null)) if (i = e.length) for (; --i > -1;)s[e[i].replace(S, C)] = e.getPropertyValue(e[i]); else for (i in e) s[i] = e[i]; else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, C)] = e[i]); return Y || (s.opacity = B(t)), r = Ae(t, e, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, be && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s }, $ = function (t, e, i, r, s) { var n, a, o, l = {}, h = t.style; for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a), void 0 !== h[a] && (o = new fe(h, a, h[a], o))); if (r) for (a in r) "className" !== a && (l[a] = r[a]); return { difs: l, firstMPT: o } }, K = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function (t, e, i) { var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), s = K[e], n = s.length; for (i = i || q(t, null); --n > -1;)r -= parseFloat(H(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(H(t, "border" + s[n] + "Width", i, !0)) || 0; return r }, ee = function (t, e) { (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0"); var i = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1]; return null == s ? s = "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(v, "")), e.oy = parseFloat(s.replace(v, ""))), r + " " + s + (i.length > 2 ? " " + i[2] : "") }, ie = function (t, e) { return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) }, re = function (t, e) { return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) }, se = function (t, e, i, r) { var s, n, a, o, l = 1e-6; return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : L) - ("=" === t.charAt(1) ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), l > o && o > -l && (o = 0), o }, ne = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] }, ae = function (t, e, i) { return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 }, oe = a.parseColor = function (t) { var e, i, r, s, n, a; return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(s + 1 / 3, e, i), t[1] = ae(s, e, i), t[2] = ae(s - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black }, le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"; for (l in ne) le += "|" + l + "\\b"; le = RegExp(le + ")", "gi"); var he = function (t, e, i, r) { if (null == t) return function (t) { return t }; var s, n = e ? (t.match(le) || [""])[0] : "", a = t.split(n).join("").match(g) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", u = a.length, f = u > 0 ? a[0].replace(d, "") : ""; return u ? s = e ? function (t) { var e, p, _, c; if ("number" == typeof t) t += f; else if (r && D.test(t)) { for (c = t.replace(D, "|").split("|"), _ = 0; c.length > _; _++)c[_] = s(c[_]); return c.join(",") } if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], _ = p.length, u > _--) for (; u > ++_;)p[_] = i ? p[0 | (_ - 1) / 2] : a[_]; return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "") } : function (t) { var e, n, p; if ("number" == typeof t) t += f; else if (r && D.test(t)) { for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++)n[p] = s(n[p]); return n.join(",") } if (e = t.match(g) || [], p = e.length, u > p--) for (; u > ++p;)e[p] = i ? e[0 | (p - 1) / 2] : a[p]; return o + e.join(h) + l } : function (t) { return t } }, ue = function (t) { return t = t.split(","), function (e, i, r, s, n, a, o) { var l, h = (i + "").split(" "); for (o = {}, l = 0; 4 > l; l++)o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return s.parse(e, o, n, a) } }, fe = (E._setPluginRatio = function (t) { this.plugin.setRatio(t); for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;)e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next; if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) { if (i = o.t, i.type) { if (1 === i.type) { for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++)s += i["xn" + r] + i["xs" + (r + 1)]; i.e = s } } else i.e = i.s + i.xs0; o = o._next } }, function (t, e, i, r, s) { this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r) }), pe = (E._parseToProxy = function (t, e, i, r, s, n) { var a, o, l, h, u, f = r, p = {}, _ = {}, c = i._transform, d = N; for (i._transform = null, N = e, r = u = i.parse(t, e, r, s), N = d, n && (i._transform = c, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) { if (1 >= r.type && (o = r.p, _[o] = r.s + r.c, p[o] = r.s, n || (h = new fe(r, "s", o, h, r.r), r.c = 0), 1 === r.type)) for (a = r.l; --a > 0;)l = "xn" + a, o = r.p + "_" + l, _[o] = r.data[l], p[o] = r[l], n || (h = new fe(r, l, o, h, r.rxp[l])); r = r._next } return { proxy: p, end: _, firstMPT: h, pt: u } }, E.CSSPropTween = function (t, e, r, s, a, o, l, h, u, f, p) { this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof pe || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === p ? r + s : p, a && (this._next = a, a._prev = this) }), _e = a.parseComplex = function (t, e, i, r, s, n, a, o, l, u) { i = i || n || "", a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, r), r += ""; var f, p, _, c, g, v, y, x, T, w, P, S, R = i.split(", ").join(",").split(" "), C = r.split(", ").join(",").split(" "), k = R.length, O = h !== !1; for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), C = C.join(" ").replace(D, ", ").split(" "), k = R.length), k !== C.length && (R = (n || "").split(" "), k = R.length), a.plugin = l, a.setRatio = u, f = 0; k > f; f++)if (c = R[f], g = C[f], x = parseFloat(c), x || 0 === x) a.appendXtra("", x, ie(g, x), g.replace(m, ""), O && -1 !== g.indexOf("px"), !0); else if (s && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), T = c.length + g.length > 6, T && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(C[f]).join("transparent")) : (Y || (T = !1), a.appendXtra(T ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], T ? "," : S, !0), T && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1))); else if (v = c.match(d)) { if (y = g.match(m), !y || y.length !== v.length) return a; for (_ = 0, p = 0; v.length > p; p++)P = v[p], w = c.indexOf(P, _), a.appendXtra(c.substr(_, w - _), Number(P), ie(y[p], P), "", O && "px" === c.substr(w + P.length, 2), 0 === p), _ = w + P.length; a["xs" + a.l] += c.substr(_) } else a["xs" + a.l] += a.l ? " " + c : c; if (-1 !== r.indexOf("=") && a.data) { for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++)S += a["xs" + f] + a.data["xn" + f]; a.e = S + a["xs" + f] } return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a }, ce = 9; for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;)l["xn" + ce] = 0, l["xs" + ce] = ""; l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, r, s, n) { var a = this, o = a.l; return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a) }; var de = function (t, e) { e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 }, me = E._registerComplexSpecialProp = function (t, e, i) { "object" != typeof e && (e = { parser: i }); var r, s, n = t.split(","), a = e.defaultValue; for (i = i || [a], r = 0; n.length > r; r++)e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new de(n[r], e) }, ge = function (t) { if (!o[t]) { var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin"; me(t, { parser: function (t, i, r, s, n, a, l) { var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e]; return h ? (h._cssRegister(), o[r].parse(t, i, r, s, n, a, l)) : (U("Error: " + e + " js file not loaded."), n) } }) } }; l = de.prototype, l.parseComplex = function (t, e, i, r, s, n) { var a, o, l, h, u, f, p = this.keyword; if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) { for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++)e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), f = i.indexOf(p), u !== f && (i = -1 === f ? l : o, i[a] += " " + p)); e = o.join(", "), i = l.join(", ") } return _e(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n) }, l.parse = function (t, e, i, r, n, a) { return this.parseComplex(t.style, this.format(H(t, this.p, s, !1, this.dflt)), this.format(e), n, a) }, a.registerSpecialProp = function (t, e, i) { me(t, { parser: function (t, r, s, n, a, o) { var l = new pe(t, s, 0, 0, a, 2, s, !1, i); return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l }, priority: i }) }; var ve, ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), xe = V("transform"), Te = j + "transform", we = V("transformOrigin"), be = null !== V("perspective"), Pe = E.Transform = function () { this.skewY = 0 }, Se = window.SVGElement, Re = function (t, e, i) { var r, s = z.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g; for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]); return e.appendChild(s), s }, Ce = document.documentElement, ke = function () { var t, e, i, r = c || /Android/i.test(F) && !window.chrome; return z.createElementNS && !r && (t = Re("svg", Ce), e = Re("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().left, e.style[we] = "50% 50%", e.style[xe] = "scale(0.5,0.5)", r = i === e.getBoundingClientRect().left, Ce.removeChild(t)), r }(), Oe = function (t, e, i) { var r = t.getBBox(); e = ee(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y }, Ae = E.getTransform = function (t, e, i, r) { if (t._gsTransform && i && !r) return t._gsTransform; var n, o, l, h, u, f, p, _, c, d, m, g, v, y = i ? t._gsTransform || new Pe : new Pe, x = 0 > y.scaleX, T = 2e-5, w = 1e5, b = 179.99, P = b * M, S = be ? parseFloat(H(t, we, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0, R = parseFloat(a.defaultTransformPerspective) || 0; if (xe ? n = H(t, Te, e, !0) : t.currentStyle && (n = t.currentStyle.filter.match(O), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), n && "none" !== n && "matrix(1, 0, 0, 1, 0, 0)" !== n) { for (o = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = o.length; --l > -1;)h = Number(o[l]), o[l] = (u = h - (h |= 0)) ? (0 | u * w + (0 > u ? -.5 : .5)) / w + h : h; if (16 === o.length) { var C = o[8], k = o[9], A = o[10], D = o[12], N = o[13], z = o[14]; if (y.zOrigin && (z = -y.zOrigin, D = C * z - o[12], N = k * z - o[13], z = A * z + y.zOrigin - o[14]), !i || r || null == y.rotationX) { var X, I, E, F, Y, B, U, j = o[0], W = o[1], V = o[2], q = o[3], G = o[4], Q = o[5], Z = o[6], $ = o[7], K = o[11], J = Math.atan2(Z, A), te = -P > J || J > P; y.rotationX = J * L, J && (F = Math.cos(-J), Y = Math.sin(-J), X = G * F + C * Y, I = Q * F + k * Y, E = Z * F + A * Y, C = G * -Y + C * F, k = Q * -Y + k * F, A = Z * -Y + A * F, K = $ * -Y + K * F, G = X, Q = I, Z = E), J = Math.atan2(C, j), y.rotationY = J * L, J && (B = -P > J || J > P, F = Math.cos(-J), Y = Math.sin(-J), X = j * F - C * Y, I = W * F - k * Y, E = V * F - A * Y, k = W * Y + k * F, A = V * Y + A * F, K = q * Y + K * F, j = X, W = I, V = E), J = Math.atan2(W, Q), y.rotation = J * L, J && (U = -P > J || J > P, F = Math.cos(-J), Y = Math.sin(-J), j = j * F + G * Y, I = W * F + Q * Y, Q = W * -Y + Q * F, Z = V * -Y + Z * F, W = I), U && te ? y.rotation = y.rotationX = 0 : U && B ? y.rotation = y.rotationY = 0 : B && te && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(j * j + W * W) * w + .5) / w, y.scaleY = (0 | Math.sqrt(Q * Q + k * k) * w + .5) / w, y.scaleZ = (0 | Math.sqrt(Z * Z + A * A) * w + .5) / w, y.skewX = 0, y.perspective = K ? 1 / (0 > K ? -K : K) : 0, y.x = D, y.y = N, y.z = z } } else if (!(be && !r && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === H(t, "display", e))) { var ee = o.length >= 6, ie = ee ? o[0] : 1, re = o[1] || 0, se = o[2] || 0, ne = ee ? o[3] : 1; y.x = o[4] || 0, y.y = o[5] || 0, f = Math.sqrt(ie * ie + re * re), p = Math.sqrt(ne * ne + se * se), _ = ie || re ? Math.atan2(re, ie) * L : y.rotation || 0, c = se || ne ? Math.atan2(se, ne) * L + _ : y.skewX || 0, d = f - Math.abs(y.scaleX || 0), m = p - Math.abs(y.scaleY || 0), Math.abs(c) > 90 && 270 > Math.abs(c) && (x ? (f *= -1, c += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (p *= -1, c += 0 >= c ? 180 : -180)), g = (_ - y.rotation) % 180, v = (c - y.skewX) % 180, (void 0 === y.skewX || d > T || -T > d || m > T || -T > m || g > -b && b > g && false | g * w || v > -b && b > v && false | v * w) && (y.scaleX = f, y.scaleY = p, y.rotation = _, y.skewX = c), be && (y.rotationX = y.rotationY = y.z = 0, y.perspective = R, y.scaleZ = 1) } y.zOrigin = S; for (l in y) T > y[l] && y[l] > -T && (y[l] = 0) } else y = { x: 0, y: 0, z: 0, scaleX: 1, scaleY: 1, scaleZ: 1, skewX: 0, skewY: 0, perspective: R, rotation: 0, rotationX: 0, rotationY: 0, zOrigin: 0 }; return i && (t._gsTransform = y), y.svg = Se && t instanceof Se && t.parentNode instanceof Se, y.svg && (Oe(t, H(t, we, s, !1, "50% 50%") + "", y), ve = a.useSVGTransformAttr || ke), y.xPercent = y.yPercent = 0, y }, De = function (t) { var e, i, r = this.data, s = -r.rotation * M, n = s + r.skewX * M, a = 1e5, o = (0 | Math.cos(s) * r.scaleX * a) / a, l = (0 | Math.sin(s) * r.scaleX * a) / a, h = (0 | Math.sin(n) * -r.scaleY * a) / a, u = (0 | Math.cos(n) * r.scaleY * a) / a, f = this.t.style, p = this.t.currentStyle; if (p) { i = l, l = -h, h = -i, e = p.filter, f.filter = ""; var _, d, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, T = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u, w = r.x + m * r.xPercent / 100, b = r.y + g * r.yPercent / 100; if (null != r.ox && (_ = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, d = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += _ - (_ * o + d * l), b += d - (_ * h + d * u)), v ? (_ = m / 2, d = g / 2, T += ", Dx=" + (_ - (_ * o + d * l) + w) + ", Dy=" + (d - (_ * h + d * u) + b) + ")") : T += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, T) : T + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === T.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) { var P, S, R, C = 8 > c ? 1 : -1; for (_ = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ce = 0; 4 > ce; ce++)S = J[ce], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : G(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== r[S] ? 2 > ce ? -r.ieOffsetX : -r.ieOffsetY : 2 > ce ? _ - r.ieOffsetX : d - r.ieOffsetY, f[S] = (r[S] = Math.round(i - R * (0 === ce || 2 === ce ? 1 : C))) + "px" } } }, Me = E.set3DTransformRatio = function (t) { var e, i, r, s, n, a, o, l, h, u, f, _, c, d, m, g, v, y, x, T, w, b, P, S = this.data, R = this.t.style, C = S.rotation * M, k = S.scaleX, O = S.scaleY, A = S.scaleZ, D = S.x, L = S.y, N = S.z, z = S.perspective; if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== A || z || N)) return Le.call(this, t), void 0; if (p) { var X = 1e-4; X > k && k > -X && (k = A = 2e-5), X > O && O > -X && (O = A = 2e-5), !z || S.z || S.rotationX || S.rotationY || (z = 0) } if (C || S.skewX) y = Math.cos(C), x = Math.sin(C), e = y, n = x, S.skewX && (C -= S.skewX * M, y = Math.cos(C), x = Math.sin(C), "simple" === S.skewType && (T = Math.tan(S.skewX * M), T = Math.sqrt(1 + T * T), y *= T, x *= T)), i = -x, a = y; else { if (!(S.rotationY || S.rotationX || 1 !== A || z || S.svg)) return R[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + N + "px)" + (1 !== k || 1 !== O ? " scale(" + k + "," + O + ")" : ""), void 0; e = a = 1, i = n = 0 } f = 1, r = s = o = l = h = u = _ = c = d = 0, m = z ? -1 / z : 0, g = S.zOrigin, v = 1e5, C = S.rotationY * M, C && (y = Math.cos(C), x = Math.sin(C), h = f * -x, c = m * -x, r = e * x, o = n * x, f *= y, m *= y, e *= y, n *= y), C = S.rotationX * M, C && (y = Math.cos(C), x = Math.sin(C), T = i * y + r * x, w = a * y + o * x, b = u * y + f * x, P = d * y + m * x, r = i * -x + r * y, o = a * -x + o * y, f = u * -x + f * y, m = d * -x + m * y, i = T, a = w, u = b, d = P), 1 !== A && (r *= A, o *= A, f *= A, m *= A), 1 !== O && (i *= O, a *= O, u *= O, d *= O), 1 !== k && (e *= k, n *= k, h *= k, c *= k), g && (_ -= g, s = r * _, l = o * _, _ = f * _ + g), S.svg && (s += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), l += S.yOrigin - (S.xOrigin * n + S.yOrigin * a)), s = (T = (s += D) - (s |= 0)) ? (0 | T * v + (0 > T ? -.5 : .5)) / v + s : s, l = (T = (l += L) - (l |= 0)) ? (0 | T * v + (0 > T ? -.5 : .5)) / v + l : l, _ = (T = (_ += N) - (_ |= 0)) ? (0 | T * v + (0 > T ? -.5 : .5)) / v + _ : _, R[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | n * v) / v, (0 | h * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | u * v) / v, (0 | d * v) / v, (0 | r * v) / v, (0 | o * v) / v, (0 | f * v) / v, (0 | m * v) / v, s, l, _, z ? 1 + -_ / z : 1].join(",") + ")" }, Le = E.set2DTransformRatio = function (t) { var e, i, r, s, n, a, o, l, h, u, f, p = this.data, _ = this.t, c = _.style, d = p.x, m = p.y; return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && ve || !be ? (s = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * M, i = e - p.skewX * M, r = 1e5, a = Math.cos(e) * s, o = Math.sin(e) * s, l = Math.sin(i) * -n, h = Math.cos(i) * n, p.svg && (d += p.xOrigin - (p.xOrigin * a + p.yOrigin * l), m += p.yOrigin - (p.xOrigin * o + p.yOrigin * h), f = 1e-6, f > d && d > -f && (d = 0), f > m && m > -f && (m = 0)), u = (0 | a * r) / r + "," + (0 | o * r) / r + "," + (0 | l * r) / r + "," + (0 | h * r) / r + "," + d + "," + m + ")", p.svg && ve ? _.setAttribute("transform", "matrix(" + u) : c[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + u) : c[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + s + ",0,0," + n + "," + d + "," + m + ")", void 0) : (this.setRatio = Me, Me.call(this, t), void 0) }; me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", { parser: function (t, e, i, r, n, o, l) { if (r._transform) return n; var h, u, f, p, _, c, d, m = r._transform = Ae(t, s, !0, l.parseTransform), g = t.style, v = 1e-6, y = ye.length, x = l, T = {}; if ("string" == typeof x.transform && xe) f = X.style, f[xe] = x.transform, f.display = "block", f.position = "absolute", z.body.appendChild(X), h = Ae(X, null, !1), z.body.removeChild(X); else if ("object" == typeof x) { if (h = { scaleX: re(null != x.scaleX ? x.scaleX : x.scale, m.scaleX), scaleY: re(null != x.scaleY ? x.scaleY : x.scale, m.scaleY), scaleZ: re(x.scaleZ, m.scaleZ), x: re(x.x, m.x), y: re(x.y, m.y), z: re(x.z, m.z), xPercent: re(x.xPercent, m.xPercent), yPercent: re(x.yPercent, m.yPercent), perspective: re(x.transformPerspective, m.perspective) }, d = x.directionalRotation, null != d) if ("object" == typeof d) for (f in d) x[f] = d[f]; else x.rotation = d; "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0, h.xPercent = re(x.x, m.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0, h.yPercent = re(x.y, m.yPercent)), h.rotation = se("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : m.rotation, m.rotation, "rotation", T), be && (h.rotationX = se("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", T), h.rotationY = se("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", T)), h.skewX = null == x.skewX ? m.skewX : se(x.skewX, m.skewX), h.skewY = null == x.skewY ? m.skewY : se(x.skewY, m.skewY), (u = h.skewY - m.skewY) && (h.skewX += u, h.rotation += u) } for (be && null != x.force3D && (m.force3D = x.force3D, c = !0), m.skewType = x.skewType || m.skewType || a.defaultSkewType, _ = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, _ || null == x.scale || (h.scaleZ = 1); --y > -1;)i = ye[y], p = h[i] - m[i], (p > v || -v > p || null != x[i] || null != N[i]) && (c = !0, n = new pe(m, i, m[i], p, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n)); return p = x.transformOrigin, p && m.svg && (Oe(t, p, h), n = new pe(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, n, -1, "transformOrigin"), n.b = m.xOrigin, n.e = n.xs0 = h.xOrigin, n = new pe(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, n, -1, "transformOrigin"), n.b = m.yOrigin, n.e = n.xs0 = h.yOrigin, p = "0px 0px"), (p || be && _ && m.zOrigin) && (xe ? (c = !0, i = we, p = (p || H(t, i, s, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, be ? (f = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = p) : ee(p + "", m)), c && (r._transformType = m.svg && ve || !_ && 3 !== this._transformType ? 2 : 3), n }, prefix: !0 }), me("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), me("borderRadius", { defaultValue: "0px", parser: function (t, e, i, n, a) { e = this.format(e); var o, l, h, u, f, p, _, c, d, m, g, v, y, x, T, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style; for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++)this.p.indexOf("border") && (b[l] = V(b[l])), f = u = H(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), p = h = o[l], _ = parseFloat(f), v = f.substr((_ + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = r[i] || v), g !== v && (x = G(t, "borderLeft", _, v), T = G(t, "borderTop", _, v), "%" === g ? (f = 100 * (x / d) + "%", u = 100 * (T / m) + "%") : "em" === g ? (w = G(t, "borderLeft", 1, "em"), f = x / w + "em", u = T / w + "em") : (f = x + "px", u = T + "px"), y && (p = parseFloat(f) + c + g, h = parseFloat(u) + c + g)), a = _e(P, b[l], f + " " + u, p + " " + h, !1, "0px", a); return a }, prefix: !0, formatter: he("0px 0px 0px 0px", !1, !0) }), me("backgroundPosition", { defaultValue: "0 0", parser: function (t, e, i, r, n, a) { var o, l, h, u, f, p, _ = "background-position", d = s || q(t, null), m = this.format((d ? c ? d.getPropertyValue(_ + "-x") + " " + d.getPropertyValue(_ + "-y") : d.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e); if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (p = H(t, "backgroundImage").replace(R, ""), p && "none" !== p)) { for (o = m.split(" "), l = g.split(" "), I.setAttribute("src", p), h = 2; --h > -1;)m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%"); m = o.join(" ") } return this.parseComplex(t.style, m, g, n, a) }, formatter: ee }), me("backgroundSize", { defaultValue: "0 0", formatter: ee }), me("perspective", { defaultValue: "0px", prefix: !0 }), me("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), me("transformStyle", { prefix: !0 }), me("backfaceVisibility", { prefix: !0 }), me("userSelect", { prefix: !0 }), me("margin", { parser: ue("marginTop,marginRight,marginBottom,marginLeft") }), me("padding", { parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft") }), me("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function (t, e, i, r, n, a) { var o, l, h; return 9 > c ? (l = t.currentStyle, h = 8 > c ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(H(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a) } }), me("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), me("autoRound,strictUnits", { parser: function (t, e, i, r, s) { return s } }), me("border", { defaultValue: "0px solid #000", parser: function (t, e, i, r, n, a) { return this.parseComplex(t.style, this.format(H(t, "borderTopWidth", s, !1, "0px") + " " + H(t, "borderTopStyle", s, !1, "solid") + " " + H(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a) }, color: !0, formatter: function (t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0] } }), me("borderWidth", { parser: ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), me("float,cssFloat,styleFloat", { parser: function (t, e, i, r, s) { var n = t.style, a = "cssFloat" in n ? "cssFloat" : "styleFloat"; return new pe(n, a, 0, 0, s, -1, i, !1, 0, n[a], e) } }); var Ne = function (t) { var e, i = this.t, r = i.filter || H(this.data, "filter") || "", s = 0 | this.s + this.c * t; 100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !H(this.data, "filter")) : (i.filter = r.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(x, "opacity=" + s)) }; me("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function (t, e, i, r, n, a) { var o = parseFloat(H(t, "opacity", s, !1, "1")), l = t.style, h = "autoAlpha" === i; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === H(t, "visibility", s) && 0 !== e && (o = 0), Y ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ne), h && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n } }); var ze = function (t, e) { e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e)) }, Xe = function (t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : ze(i, e.p), e = e._next; 1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) }; me("className", { parser: function (t, e, r, n, a, o, l) { var h, u, f, p, _, c = t.getAttribute("class") || "", d = t.style.cssText; if (a = n._classNamePT = new pe(t, r, 0, 0, a, 2), a.setRatio = Xe, a.pr = -11, i = !0, a.b = c, u = Z(t, s), f = t._gsClassPT) { for (p = {}, _ = f.data; _;)p[_.p] = 1, _ = _._next; f.setRatio(1) } return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), h = $(t, u, Z(t), l, p), t.setAttribute("class", c), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a } }); var Ie = function (t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, i, r, s, n = this.t.style, a = o.transform.parse; if ("all" === this.e) n.cssText = "", s = !0; else for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;)i = e[r], o[i] && (o[i].parse === a ? s = !0 : i = "transformOrigin" === i ? we : o[i].p), ze(n, i); s && (ze(n, xe), this.t._gsTransform && delete this.t._gsTransform) } }; for (me("clearProps", { parser: function (t, e, r, s, n) { return n = new pe(t, r, 0, 0, n, 2), n.setRatio = Ie, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n } }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length; ce--;)ge(l[ce]); l = a.prototype, l._firstPT = null, l._onInitTween = function (t, e, o) { if (!t.nodeType) return !1; this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = q(t, ""), n = this._overwriteProps; var l, p, c, d, m, g, v, y, x, w = t.style; if (u && "" === w.zIndex && (l = H(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (d = w.cssText, l = Z(t, s), w.cssText = d + ";" + e, l = $(t, l, Z(t)).difs, !Y && T.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) { for (x = 3 === this._transformType, xe ? f && (u = !0, "" === w.zIndex && (v = H(t, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), _ && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;)c = c._next; y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = x && be ? Me : xe ? Le : De, y.data = this._transform || Ae(t, s, !0), n.pop() } if (i) { for (; p;) { for (g = p._next, c = d; c && c.pr > p.pr;)c = c._next; (p._prev = c ? c._prev : m) ? p._prev._next = p : d = p, (p._next = c) ? c._prev = p : m = p, p = g } this._firstPT = d } return !0 }, l.parse = function (t, e, i, n) {
			var a, l, u, f, p, _, c, d, m, g, v = t.style; for (a in e) _ = e[a], l = o[a], l ? i = l.parse(t, _, a, this, i, n, e) : (p = H(t, a, s) + "", m = "string" == typeof _, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && b.test(_) ? (m || (_ = oe(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = _e(v, a, p, _, !0, "transparent", i, 0, n)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, s), c = "px") : "left" === a || "top" === a ? (u = Q(t, a, s), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === _.charAt(1), g ? (f = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), f *= parseFloat(_), d = _.replace(y, "")) : (f = parseFloat(_), d = m ? _.substr((f + "").length) || "" : ""), "" === d && (d = a in r ? r[a] : c), _ = f || 0 === f ? (g ? f + u : f) + d : e[a], c !== d && "" !== d && (f || 0 === f) && u && (u = G(t, a, u, c), "%" === d ? (u /= G(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = u + "%")) : "em" === d ? u /= G(t, a, 1, "em") : "px" !== d && (f = G(t, a, f, d), d = "px"), g && (f || 0 === f) && (_ = f + u + d)), g && (f += u), !u && 0 !== u || !f && 0 !== f ? void 0 !== v[a] && (_ || "NaN" != _ + "" && null != _) ? (i = new pe(v, a, f || u || 0, 0, i, -1, a, !1, 0, p, _), i.xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : p) : U("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, f - u, i, 0, a, h !== !1 && ("px" === d || "zIndex" === a), 0, p, _), i.xs0 = d)) : i = _e(v, a, p, _, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
			return i
		}, l.setRatio = function (t) { var e, i, r, s = this._firstPT, n = 1e-6; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; s;) { if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type) if (1 === s.type) if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2; else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3; else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4; else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5; else { for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++)i += s["xn" + r] + s["xs" + (r + 1)]; s.t[s.p] = i } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t); else s.t[s.p] = e + s.xs0; s = s._next } else for (; s;)2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next; else for (; s;)2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next }, l._enableTransforms = function (t) { this._transform = this._transform || Ae(this._target, s, !0), this._transformType = this._transform.svg && ve || !t && 3 !== this._transformType ? 2 : 3 }; var Ee = function () { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) }; l._addLazySet = function (t, e, i) { var r = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2); r.e = i, r.setRatio = Ee, r.data = this }, l._linkCSSP = function (t, e, i, r) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, l._kill = function (e) { var i, r, s, n = e; if (e.autoAlpha || e.alpha) { n = {}; for (r in e) n[r] = e[r]; n.opacity = 1, n.autoAlpha && (n.visibility = 1) } return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n) }; var Fe = function (t, e, i) { var r, s, n, a; if (t.slice) for (s = t.length; --s > -1;)Fe(t[s], e, i); else for (r = t.childNodes, s = r.length; --s > -1;)n = r[s], a = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Fe(n, e, i) }; return a.cascadeTo = function (t, i, r) { var s, n, a, o = e.to(t, i, r), l = [o], h = [], u = [], f = [], p = e._internals.reservedProps; for (t = o._targets || o.target, Fe(t, h, f), o.render(i, !0), Fe(t, u), o.render(0, !0), o._enabled(!0), s = f.length; --s > -1;)if (n = $(f[s], h[s], u[s]), n.firstMPT) { n = n.difs; for (a in r) p[a] && (n[a] = r[a]); l.push(e.to(f[s], i, n)) } return l }, t.activate([a]), a
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) { "use strict"; var e = function () { return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e()) }("CSSPlugin");

/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (function (t) { "use strict"; var e = t.GreenSockGlobals || t, i = function (t) { var i, s = t.split("."), r = e; for (i = 0; s.length > i; i++)r[s[i]] = r = r[s[i]] || {}; return r }, s = i("com.greensock.utils"), r = function (t) { var e = t.nodeType, i = ""; if (1 === e || 9 === e || 11 === e) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling)i += r(t) } else if (3 === e || 4 === e) return t.nodeValue; return i }, n = document, a = n.defaultView ? n.defaultView.getComputedStyle : function () { }, o = /([A-Z])/g, h = function (t, e, i, s) { var r; return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0 }, l = function (t) { return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1 }, _ = function (t) { var e, i, s, r = [], n = t.length; for (e = 0; n > e; e++)if (i = t[e], l(i)) for (s = i.length, s = 0; i.length > s; s++)r.push(i[s]); else r.push(i); return r }, u = ")eefec303079ad17405c", c = /(?:<br>|<br\/>|<br \/>)/gi, p = n.all && !n.addEventListener, f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"), m = function (t) { t = t || ""; var e = -1 !== t.indexOf("++"), i = 1; return e && (t = t.split("++").join("")), function () { return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">") } }, d = s.SplitText = e.SplitText = function (t, e) { if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element."; this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e) }, g = function (t, e, i) { var s = t.nodeType; if (1 === s || 9 === s || 11 === s) for (t = t.firstChild; t; t = t.nextSibling)g(t, e, i); else (3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i)) }, v = function (t, e) { for (var i = e.length; --i > -1;)t.push(e[i]) }, y = function (t, e, i, s, o) { c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u)); var l, _, p, f, d, y, T, w, b, x, P, S, C, k, R = r(t), A = e.type || e.split || "chars,words,lines", O = -1 !== A.indexOf("lines") ? [] : null, D = -1 !== A.indexOf("words"), M = -1 !== A.indexOf("chars"), L = "absolute" === e.position || e.absolute === !0, z = L ? "&#173; " : " ", I = -999, E = a(t), N = h(t, "paddingLeft", E), F = h(t, "borderBottomWidth", E) + h(t, "borderTopWidth", E), X = h(t, "borderLeftWidth", E) + h(t, "borderRightWidth", E), U = h(t, "paddingTop", E) + h(t, "paddingBottom", E), B = h(t, "paddingLeft", E) + h(t, "paddingRight", E), j = h(t, "textAlign", E, !0), Y = t.clientHeight, q = t.clientWidth, G = "</div>", V = m(e.wordsClass), Q = m(e.charsClass), W = -1 !== (e.linesClass || "").indexOf("++"), H = e.linesClass, Z = -1 !== R.indexOf("<"), $ = !0, K = [], J = [], te = []; for (W && (H = H.split("++").join("")), Z && (R = R.split("<").join("{{LT}}")), l = R.length, f = V(), d = 0; l > d; d++)if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) f += ($ ? G : "") + "<BR/>", $ = !1, d !== l - 20 && R.substr(d + 20, 20) !== u && (f += " " + V(), $ = !0), d += 19; else if (" " === T && " " !== R.charAt(d - 1) && d !== l - 1 && R.substr(d - 20, 20) !== u) { for (f += $ ? G : "", $ = !1; " " === R.charAt(d + 1);)f += z, d++; (")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (f += z + V(), $ = !0) } else f += M && " " !== T ? Q() + T + "</div>" : T; for (t.innerHTML = f + ($ ? G : ""), Z && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), l = y.length, w = [], d = 0; l > d; d++)w[d] = y[d]; if (O || L) for (d = 0; l > d; d++)b = w[d], p = b.parentNode === t, (p || L || M && !D) && (x = b.offsetTop, O && p && x !== I && "BR" !== b.nodeName && (_ = [], O.push(_), I = x), L && (b._x = b.offsetLeft, b._y = x, b._w = b.offsetWidth, b._h = b.offsetHeight), O && (D !== p && M || (_.push(b), b._x -= N), p && d && (w[d - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && O.push([]))); for (d = 0; l > d; d++)b = w[d], p = b.parentNode === t, "BR" !== b.nodeName ? (L && (S = b.style, D || p || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), D ? p && "" !== b.innerHTML ? J.push(b) : M && K.push(b) : p ? (t.removeChild(b), w.splice(d--, 1), l--) : !p && M && (x = !O && !L && b.nextSibling, t.appendChild(b), x || t.appendChild(n.createTextNode(" ")), K.push(b))) : O || L ? (t.removeChild(b), w.splice(d--, 1), l--) : D || t.appendChild(b); if (O) { for (L && (P = n.createElement("div"), t.appendChild(P), C = P.offsetWidth + "px", x = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;)t.removeChild(t.firstChild); for (k = !L || !D && !M, d = 0; O.length > d; d++) { for (_ = O[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + j + ";position:" + (L ? "absolute;" : "relative;"), H && (P.className = H + (W ? d + 1 : "")), te.push(P), l = _.length, y = 0; l > y; y++)"BR" !== _[y].nodeName && (b = _[y], P.appendChild(b), k && (b._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = b._y + "px", P.style.left = N + x + "px"), b.style.top = "0px", x && (b.style.left = b._x - x + "px"))); 0 === l && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = C, P.style.height = b._h + "px"), t.appendChild(P) } t.style.cssText = S } L && (Y > t.clientHeight && (t.style.height = Y - U + "px", Y > t.clientHeight && (t.style.height = Y + F + "px")), q > t.clientWidth && (t.style.width = q - B + "px", q > t.clientWidth && (t.style.width = q + X + "px"))), v(i, K), v(s, J), v(o, te) }, T = d.prototype; T.split = function (t) { this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0; for (var e = this.elements.length; --e > -1;)this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines); return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, T.revert = function () { if (!this._originals) throw "revert() call wasn't scoped properly."; for (var t = this._originals.length; --t > -1;)this.elements[t].innerHTML = this._originals[t]; return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, d.selector = t.$ || t.jQuery || function (e) { var i = t.$ || t.jQuery; return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) }, d.version = "0.3.3" })(_gsScope), function (t) { "use strict"; var e = function () { return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e()) }("SplitText");


try {
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete (window.GreenSockGlobals);
	delete (window._gsQueue);
	delete (window._gsDefine);
} catch (e) { }

try {
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
} catch (e) { }

if (window.tplogs == true)
	try {
		console.groupEnd();
	} catch (e) { }





(function (e, t) {
	e.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"] }; e.expr[":"].uncached = function (t) { var n = document.createElement("img"); n.src = t.src; return e(t).is('img[src!=""]') && !n.complete }; e.fn.waitForImages = function (t, n, r) { if (e.isPlainObject(arguments[0])) { n = t.each; r = t.waitForAll; t = t.finished } t = t || e.noop; n = n || e.noop; r = !!r; if (!e.isFunction(t) || !e.isFunction(n)) { throw new TypeError("An invalid callback was supplied.") } return this.each(function () { var i = e(this), s = []; if (r) { var o = e.waitForImages.hasImageProperties || [], u = /url\((['"]?)(.*?)\1\)/g; i.find("*").each(function () { var t = e(this); if (t.is("img:uncached")) { s.push({ src: t.attr("src"), element: t[0] }) } e.each(o, function (e, n) { var r = t.css(n); if (!r) { return true } var i; while (i = u.exec(r)) { s.push({ src: i[2], element: t[0] }) } }) }) } else { i.find("img:uncached").each(function () { s.push({ src: this.src, element: this }) }) } var f = s.length, l = 0; if (f == 0) { t.call(i[0]) } e.each(s, function (r, s) { var o = new Image; e(o).bind("load error", function (e) { l++; n.call(s.element, l, f, e.type == "load"); if (l == f) { t.call(i[0]); return false } }); o.src = s.src }) }) };
})(jQuery)

/* https://www.vtmteknik.com/templates/porto/3.4.0/rs-plugin/4.1.0/js/jquery.themepunch.revolution.min.js */
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.4 (26.11.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


function revslider_showDoubleJqueryError(e) { var t = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include."; t += "<br> This includes make eliminates the revolution slider libraries, and make it not work."; t += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true."; t += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it."; t = "<span style='font-size:16px;color:#BC0C06;'>" + t + "</span>"; jQuery(e).show().html(t) } (function (e, t) { function n() { var e = false; if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) { if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) { e = true } } else { e = false } return e } function r(r, i) { if (r == t) return false; if (r.data("aimg") != t) { if (r.data("aie8") == "enabled" && a(8) || r.data("amobile") == "enabled" && J()) r.html('<img class="tp-slider-alternative-image" src="' + r.data("aimg") + '">') } if (i.navigationStyle == "preview1" || i.navigationStyle == "preview3" || i.navigationStyle == "preview4") { i.soloArrowLeftHalign = "left"; i.soloArrowLeftValign = "center"; i.soloArrowLeftHOffset = 0; i.soloArrowLeftVOffset = 0; i.soloArrowRightHalign = "right"; i.soloArrowRightValign = "center"; i.soloArrowRightHOffset = 0; i.soloArrowRightVOffset = 0; i.navigationArrows = "solo" } if (i.simplifyAll == "on" && (a(8) || n())) { r.find(".tp-caption").each(function () { var t = e(this); t.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"); t.data("splitin", ""); t.data("speed", 400) }); r.find(">ul>li").each(function () { var t = e(this); t.data("transition", "fade"); t.data("masterspeed", 500); t.data("slotamount", 1); var n = t.find(">img").first(); n.data("kenburns", "off") }) } i.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i); if (i.fullWidth != "on" && i.fullScreen != "on") i.autoHeight = "off"; if (i.fullScreen == "on") i.autoHeight = "on"; if (i.fullWidth != "on" && i.fullScreen != "on") forceFulWidth = "off"; if (i.fullWidth == "on" && i.autoHeight == "off") r.css({ maxHeight: i.startheight + "px" }); if (J() && i.hideThumbsOnMobile == "on" && i.navigationType == "thumb") i.navigationType = "none"; if (J() && i.hideBulletsOnMobile == "on" && i.navigationType == "bullet") i.navigationType = "none"; if (J() && i.hideBulletsOnMobile == "on" && i.navigationType == "both") i.navigationType = "none"; if (J() && i.hideArrowsOnMobile == "on") i.navigationArrows = "none"; if (i.forceFullWidth == "on" && r.closest(".forcefullwidth_wrapper_tp_banner").length == 0) { var f = r.parent().offset().left; var v = r.parent().css("marginBottom"); var m = r.parent().css("marginTop"); if (v == t) v = 0; if (m == t) m = 0; r.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + m + ";margin-bottom:" + v + '" class="forcefullwidth_wrapper_tp_banner"></div>'); r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + r.height() + 'px"></div>'); r.css({ backgroundColor: r.parent().css("backgroundColor"), backgroundImage: r.parent().css("backgroundImage") }); r.parent().css({ left: 0 - f + "px", position: "absolute", width: e(window).width() }); i.width = e(window).width() } try { if (i.hideThumbsUnderResolution > e(window).width() && i.hideThumbsUnderResolution != 0) { r.parent().find(".tp-bullets.tp-thumbs").css({ display: "none" }) } else { r.parent().find(".tp-bullets.tp-thumbs").css({ display: "block" }) } } catch (g) { } if (!r.hasClass("revslider-initialised")) { r.addClass("revslider-initialised"); if (r.attr("id") == t) r.attr("id", "revslider-" + Math.round(Math.random() * 1e3 + 5)); i.firefox13 = false; i.ie = !e.support.opacity; i.ie9 = document.documentMode == 9; i.origcd = i.delay; var b = e.fn.jquery.split("."), w = parseFloat(b[0]), E = parseFloat(b[1]), S = parseFloat(b[2] || "0"); if (w == 1 && E < 7) { r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>") } if (w > 1) i.ie = false; if (!e.support.transition) e.fn.transition = e.fn.animate; r.find(".caption").each(function () { e(this).addClass("tp-caption") }); if (J()) { r.find(".tp-caption").each(function () { var t = e(this); if (t.data("autoplayonlyfirsttime") == true || t.data("autoplayonlyfirsttime") == "true") t.data("autoplayonlyfirsttime", "false"); if (t.data("autoplay") == true || t.data("autoplay") == "true") t.data("autoplay", false) }) } var x = 0; var T = 0; var C = 0; var k = "http"; if (location.protocol === "https:") { k = "https" } r.find(".tp-caption").each(function (n) { try { if ((e(this).data("ytid") != t || e(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && x == 0) { x = 1; var r = document.createElement("script"); var i = "https"; r.src = i + "://www.youtube.com/iframe_api"; var s = document.getElementsByTagName("script")[0]; var o = true; e("head").find("*").each(function () { if (e(this).attr("src") == i + "://www.youtube.com/iframe_api") o = false }); if (o) { s.parentNode.insertBefore(r, s) } } } catch (u) { } try { if ((e(this).data("vimeoid") != t || e(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && T == 0) { T = 1; var a = document.createElement("script"); a.src = k + "://a.vimeocdn.com/js/froogaloop2.min.js"; var s = document.getElementsByTagName("script")[0]; var o = true; e("head").find("*").each(function () { if (e(this).attr("src") == k + "://a.vimeocdn.com/js/froogaloop2.min.js") o = false }); if (o) s.parentNode.insertBefore(a, s) } } catch (u) { } try { if (e(this).data("videomp4") != t || e(this).data("videowebm") != t) { } } catch (u) { } }); r.find(".tp-caption video").each(function (t) { e(this).removeClass("video-js").removeClass("vjs-default-skin"); e(this).attr("preload", ""); e(this).css({ display: "none" }) }); r.find(">ul:first-child >li").each(function () { var t = e(this); t.data("origindex", t.index()) }); if (i.shuffle == "on") { var L = new Object, A = r.find(">ul:first-child >li:first-child"); L.fstransition = A.data("fstransition"); L.fsmasterspeed = A.data("fsmasterspeed"); L.fsslotamount = A.data("fsslotamount"); for (var O = 0; O < r.find(">ul:first-child >li").length; O++) { var M = Math.round(Math.random() * r.find(">ul:first-child >li").length); r.find(">ul:first-child >li:eq(" + M + ")").prependTo(r.find(">ul:first-child")) } var _ = r.find(">ul:first-child >li:first-child"); _.data("fstransition", L.fstransition); _.data("fsmasterspeed", L.fsmasterspeed); _.data("fsslotamount", L.fsslotamount) } i.slots = 4; i.act = -1; i.next = 0; if (i.startWithSlide != t) i.next = i.startWithSlide; var D = o("#")[0]; if (D.length < 9) { if (D.split("slide").length > 1) { var P = parseInt(D.split("slide")[1], 0); if (P < 1) P = 1; if (P > r.find(">ul:first >li").length) P = r.find(">ul:first >li").length; i.next = P - 1 } } i.firststart = 1; if (i.navigationHOffset == t) i.navOffsetHorizontal = 0; if (i.navigationVOffset == t) i.navOffsetVertical = 0; r.append('<div class="tp-loader ' + i.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + "</div>"); if (r.find(".tp-bannertimer").length == 0) r.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'); var H = r.find(".tp-bannertimer"); if (H.length > 0) { H.css({ width: "0%" }) } r.addClass("tp-simpleresponsive"); i.container = r; i.slideamount = r.find(">ul:first >li").length; if (r.height() == 0) r.height(i.startheight); if (i.startwidth == t || i.startwidth == 0) i.startwidth = r.width(); if (i.startheight == t || i.startheight == 0) i.startheight = r.height(); i.width = r.width(); i.height = r.height(); i.bw = i.startwidth / r.width(); i.bh = i.startheight / r.height(); if (i.width != i.startwidth) { i.height = Math.round(i.startheight * (i.width / i.startwidth)); r.height(i.height) } if (i.shadow != 0) { r.parent().append('<div class="tp-bannershadow tp-shadow' + i.shadow + '"></div>'); var f = 0; if (i.forceFullWidth == "on") f = 0 - i.container.parent().offset().left; r.parent().find(".tp-bannershadow").css({ width: i.width, left: f }) } r.find("ul").css({ display: "none" }); var B = r; r.find("ul").css({ display: "block" }); y(r, i); if (i.parallax != "off") et(r, i); if (i.slideamount > 1) l(r, i); if (i.slideamount > 1 && i.navigationType == "thumb") nt(r, i); if (i.slideamount > 1) c(r, i); if (i.keyboardNavigation == "on") h(r, i); p(r, i); if (i.hideThumbs > 0) d(r, i); setTimeout(function () { N(r, i) }, i.startDelay); i.startDelay = 0; if (i.slideamount > 1) $(r, i); setTimeout(function () { r.trigger("revolution.slide.onloaded") }, 500); e("body").data("rs-fullScreenMode", false); e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function () { e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")); if (e("body").data("rs-fullScreenMode")) { setTimeout(function () { e(window).trigger("resize") }, 200) } }); var j = "resize.revslider-" + r.attr("id"); e(window).on(j, function () { if (r == t) return false; if (e("body").find(r) != 0) if (i.forceFullWidth == "on") { var n = i.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left; i.container.parent().css({ left: 0 - n + "px", width: e(window).width() }) } if (r.outerWidth(true) != i.width || r.is(":hidden")) { u(r, i) } }); try { if (i.hideThumbsUnderResoluition != 0 && i.navigationType == "thumb") { if (i.hideThumbsUnderResoluition > e(window).width()) e(".tp-bullets").css({ display: "none" }); else e(".tp-bullets").css({ display: "block" }) } } catch (g) { } r.find(".tp-scrollbelowslider").on("click", function () { var t = 0; try { t = e("body").find(i.fullScreenOffsetContainer).height() } catch (n) { } try { t = t - parseInt(e(this).data("scrolloffset"), 0) } catch (n) { } e("body,html").animate({ scrollTop: r.offset().top + r.find(">ul >li").height() - t + "px" }, { duration: 400 }) }); var F = r.parent(); if (e(window).width() < i.hideSliderAtLimit) { r.trigger("stoptimer"); if (F.css("display") != "none") F.data("olddisplay", F.css("display")); F.css({ display: "none" }) } s(r, i) } } e.fn.extend({ revolution: function (n) { var i = { delay: 9e3, startheight: 500, startwidth: 960, fullScreenAlignForce: "off", autoHeight: "off", hideTimerBar: "off", hideThumbs: 200, hideNavDelayOnMobile: 1500, thumbWidth: 100, thumbHeight: 50, thumbAmount: 3, navigationType: "bullet", navigationArrows: "solo", navigationInGrid: "off", hideThumbsOnMobile: "off", hideBulletsOnMobile: "off", hideArrowsOnMobile: "off", hideThumbsUnderResoluition: 0, navigationStyle: "round", navigationHAlign: "center", navigationVAlign: "bottom", navigationHOffset: 0, navigationVOffset: 20, soloArrowLeftHalign: "left", soloArrowLeftValign: "center", soloArrowLeftHOffset: 20, soloArrowLeftVOffset: 0, soloArrowRightHalign: "right", soloArrowRightValign: "center", soloArrowRightHOffset: 20, soloArrowRightVOffset: 0, keyboardNavigation: "on", touchenabled: "on", onHoverStop: "on", stopAtSlide: -1, stopAfterLoops: -1, hideCaptionAtLimit: 0, hideAllCaptionAtLimit: 0, hideSliderAtLimit: 0, shadow: 0, fullWidth: "off", fullScreen: "off", minFullScreenHeight: 0, fullScreenOffsetContainer: "", fullScreenOffset: "0", dottedOverlay: "none", forceFullWidth: "off", spinner: "spinner0", swipe_treshold: 75, swipe_min_touches: 1, drag_block_vertical: false, isJoomla: false, parallax: "off", parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85], parallaxBgFreeze: "off", parallaxOpacity: "on", parallaxDisableOnMobile: "off", panZoomDisableOnMobile: "off", simplifyAll: "on", minHeight: 0, nextSlideOnWindowFocus: "off", startDelay: 0 }; n = e.extend({}, i, n); return this.each(function () { if (window.tplogs == true) try { console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + e(this).attr("id")); console.groupCollapsed("Used Options:"); console.info(n); console.groupEnd(); console.groupCollapsed("Tween Engine:") } catch (i) { } if (punchgs.TweenLite == t) { if (window.tplogs == true) try { console.error("GreenSock Engine Does not Exist!") } catch (i) { } return false } punchgs.force3D = true; if (window.tplogs == true) try { console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version) } catch (i) { } if (n.simplifyAll == "on") { } else { punchgs.TweenLite.lagSmoothing(1e3, 16); punchgs.force3D = "true" } if (window.tplogs == true) try { console.groupEnd(); console.groupEnd() } catch (i) { } r(e(this), n) }) }, revscroll: function (n) { return this.each(function () { var r = e(this); if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) e("body,html").animate({ scrollTop: r.offset().top + r.find(">ul >li").height() - n + "px" }, { duration: 400 }) }) }, revredraw: function (n) { return this.each(function () { var n = e(this); if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) { var r = n.parent().find(".tp-bannertimer"); var i = r.data("opt"); u(n, i) } }) }, revkill: function (n) { var r = this, i = e(this); if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) { i.data("conthover", 1); i.data("conthover-changed", 1); i.trigger("revolution.slide.onpause"); var s = i.parent().find(".tp-bannertimer"); var o = s.data("opt"); o.bannertimeronpause = true; i.trigger("stoptimer"); punchgs.TweenLite.killTweensOf(i.find("*"), false); punchgs.TweenLite.killTweensOf(i, false); i.unbind("hover, mouseover, mouseenter,mouseleave, resize"); var u = "resize.revslider-" + i.attr("id"); e(window).off(u); i.find("*").each(function () { var n = e(this); n.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"); n.off("on, hover, mouseenter,mouseleave,mouseover, resize"); n.data("mySplitText", null); n.data("ctl", null); if (n.data("tween") != t) n.data("tween").kill(); if (n.data("kenburn") != t) n.data("kenburn").kill(); n.remove(); n.empty(); n = null }); punchgs.TweenLite.killTweensOf(i.find("*"), false); punchgs.TweenLite.killTweensOf(i, false); s.remove(); try { i.closest(".forcefullwidth_wrapper_tp_banner").remove() } catch (a) { } try { i.closest(".rev_slider_wrapper").remove() } catch (a) { } try { i.remove() } catch (a) { } i.empty(); i.html(); i = null; o = null; delete r.container; delete r.opt; return true } else { return false } }, revpause: function (n) { return this.each(function () { var n = e(this); if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) { n.data("conthover", 1); n.data("conthover-changed", 1); n.trigger("revolution.slide.onpause"); var r = n.parent().find(".tp-bannertimer"); var i = r.data("opt"); i.bannertimeronpause = true; n.trigger("stoptimer") } }) }, revresume: function (n) { return this.each(function () { var n = e(this); if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) { n.data("conthover", 0); n.data("conthover-changed", 1); n.trigger("revolution.slide.onresume"); var r = n.parent().find(".tp-bannertimer"); var i = r.data("opt"); i.bannertimeronpause = false; n.trigger("starttimer") } }) }, revnext: function (n) { return this.each(function () { var n = e(this); if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) n.parent().find(".tp-rightarrow").click() }) }, revprev: function (n) { return this.each(function () { var n = e(this); if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) n.parent().find(".tp-leftarrow").click() }) }, revmaxslide: function (t) { return e(this).find(">ul:first-child >li").length }, revcurrentslide: function (n) { var r = e(this); if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) { var i = r.parent().find(".tp-bannertimer"); var s = i.data("opt"); return s.act } }, revlastslide: function (n) { var r = e(this); if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) { var i = r.parent().find(".tp-bannertimer"); var s = i.data("opt"); return s.lastslide } }, revshowslide: function (n) { return this.each(function () { var r = e(this); if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) { r.data("showus", n); r.parent().find(".tp-rightarrow").click() } }) } }); var i = function () { var e, t, n = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" }; for (e in n) { if (e in document) { t = n[e]; break } } return function (n) { if (n) document.addEventListener(t, n); return !document[e] } }(); var s = function (n, r) { var i = document.documentMode === t, s = window.chrome; if (i && !s) { e(window).on("focusin", function () { if (n == t) return false; setTimeout(function () { if (r.nextSlideOnWindowFocus == "on") n.revnext(); n.revredraw() }, 300) }).on("focusout", function () { }) } else { if (window.addEventListener) { window.addEventListener("focus", function (e) { if (n == t) return false; setTimeout(function () { if (r.nextSlideOnWindowFocus == "on") n.revnext(); n.revredraw() }, 300) }, false); window.addEventListener("blur", function (e) { }, false) } else { window.attachEvent("focus", function (e) { setTimeout(function () { if (n == t) return false; if (r.nextSlideOnWindowFocus == "on") n.revnext(); n.revredraw() }, 300) }); window.attachEvent("blur", function (e) { }) } } }; var o = function (e) { var t = [], n; var r = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"); for (var i = 0; i < r.length; i++) { r[i] = r[i].replace("%3D", "="); n = r[i].split("="); t.push(n[0]); t[n[0]] = n[1] } return t }; var u = function (n, r) { if (n == t) return false; try { if (r.hideThumbsUnderResoluition != 0 && r.navigationType == "thumb") { if (r.hideThumbsUnderResoluition > e(window).width()) e(".tp-bullets").css({ display: "none" }); else e(".tp-bullets").css({ display: "block" }) } } catch (i) { } n.find(".defaultimg").each(function (t) { g(e(this), r) }); var s = n.parent(); if (e(window).width() < r.hideSliderAtLimit) { n.trigger("stoptimer"); if (s.css("display") != "none") s.data("olddisplay", s.css("display")); s.css({ display: "none" }) } else { if (n.is(":hidden")) { if (s.data("olddisplay") != t && s.data("olddisplay") != "undefined" && s.data("olddisplay") != "none") s.css({ display: s.data("olddisplay") }); else s.css({ display: "block" }); n.trigger("restarttimer"); setTimeout(function () { u(n, r) }, 150) } } var o = 0; if (r.forceFullWidth == "on") o = 0 - r.container.parent().offset().left; try { n.parent().find(".tp-bannershadow").css({ width: r.width, left: o }) } catch (i) { } var a = n.find(">ul >li:eq(" + r.act + ") .slotholder"); var f = n.find(">ul >li:eq(" + r.next + ") .slotholder"); E(n, r, n); punchgs.TweenLite.set(f.find(".defaultimg"), { opacity: 0 }); a.find(".defaultimg").css({ opacity: 1 }); f.find(".defaultimg").each(function () { var i = e(this); if (r.panZoomDisableOnMobile == "on") { } else { if (i.data("kenburn") != t) { i.data("kenburn").restart(); Q(n, r, true) } } }); var l = n.find(">ul >li:eq(" + r.next + ")"); var c = n.parent().find(".tparrows"); if (c.hasClass("preview2")) c.css({ width: parseInt(c.css("minWidth"), 0) }); j(l, r, true); v(n, r) }; var a = function (t, n) { var r = e('<div style="display:none;"/>').appendTo(e("body")); r.html("<!--[if " + (n || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->"); var i = r.find("a").length; r.remove(); return i }; var f = function (e, t) { if (e.next == t.find(">ul >li").length - 1) { e.looptogo = e.looptogo - 1; if (e.looptogo <= 0) e.stopLoop = "on" } N(t, e) }; var l = function (t, n) { var r = "hidebullets"; if (n.hideThumbs == 0) r = ""; if (n.navigationType == "bullet" || n.navigationType == "both") { t.parent().append('<div class="tp-bullets ' + r + " simplebullets " + n.navigationStyle + '"></div>') } var i = t.parent().find(".tp-bullets"); t.find(">ul:first >li").each(function (e) { var n = t.find(">ul:first >li:eq(" + e + ") img:first").attr("src"); i.append('<div class="bullet"></div>'); var r = i.find(".bullet:first") }); i.find(".bullet").each(function (r) { var i = e(this); if (r == n.slideamount - 1) i.addClass("last"); if (r == 0) i.addClass("first"); i.click(function () { var e = false, r = i.index(); if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") r = i.index() - 1; if (r == n.act) e = true; if (n.transition == 0 && !e) { n.next = r; f(n, t) } }) }); i.append('<div class="tpclear"></div>'); v(t, n) }; var c = function (e, n) { function u(t) { e.parent().append('<div style="' + i + '" class="tp-' + t + "arrow " + s + " tparrows " + o + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>') } var r = e.find(".tp-bullets"), i = "", s = "hidearrows", o = n.navigationStyle; if (n.hideThumbs == 0) s = ""; if (n.navigationArrows == "none") i = "visibility:hidden;display:none"; n.soloArrowStyle = "default" + " " + n.navigationStyle; if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") o = n.soloArrowStyle; u("left"); u("right"); e.parent().find(".tp-rightarrow").click(function () { if (n.transition == 0) { if (e.data("showus") != t && e.data("showus") != -1) n.next = e.data("showus") - 1; else n.next = n.next + 1; e.data("showus", -1); if (n.next >= n.slideamount) n.next = 0; if (n.next < 0) n.next = 0; if (n.act != n.next) f(n, e) } }); e.parent().find(".tp-leftarrow").click(function () { if (n.transition == 0) { n.next = n.next - 1; n.leftarrowpressed = 1; if (n.next < 0) n.next = n.slideamount - 1; f(n, e) } }); v(e, n) }; var h = function (n, r) { e(document).keydown(function (e) { if (r.transition == 0 && e.keyCode == 39) { if (n.data("showus") != t && n.data("showus") != -1) r.next = n.data("showus") - 1; else r.next = r.next + 1; n.data("showus", -1); if (r.next >= r.slideamount) r.next = 0; if (r.next < 0) r.next = 0; if (r.act != r.next) f(r, n) } if (r.transition == 0 && e.keyCode == 37) { r.next = r.next - 1; r.leftarrowpressed = 1; if (r.next < 0) r.next = r.slideamount - 1; f(r, n) } }); v(n, r) }; var p = function (t, n) { var r = "vertical"; if (n.touchenabled == "on") { if (n.drag_block_vertical == true) r = "none"; t.swipe({ allowPageScroll: r, fingers: n.swipe_min_touches, treshold: n.swipe_treshold, swipe: function (i, s, o, u, a, l) { switch (s) { case "left": if (n.transition == 0) { n.next = n.next + 1; if (n.next == n.slideamount) n.next = 0; f(n, t) } break; case "right": if (n.transition == 0) { n.next = n.next - 1; n.leftarrowpressed = 1; if (n.next < 0) n.next = n.slideamount - 1; f(n, t) } break; case "up": if (r == "none") e("html, body").animate({ scrollTop: t.offset().top + t.height() + "px" }); break; case "down": if (r == "none") e("html, body").animate({ scrollTop: t.offset().top - e(window).height() + "px" }); break } } }) } }; var d = function (e, t) { var n = e.parent().find(".tp-bullets"), r = e.parent().find(".tparrows"); if (n == null) { e.append('<div class=".tp-bullets"></div>'); var n = e.parent().find(".tp-bullets") } if (r == null) { e.append('<div class=".tparrows"></div>'); var r = e.parent().find(".tparrows") } e.data("hideThumbs", t.hideThumbs); n.addClass("hidebullets"); r.addClass("hidearrows"); if (J()) { try { e.hammer().on("touch", function () { e.addClass("hovered"); if (t.onHoverStop == "on") e.trigger("stoptimer"); clearTimeout(e.data("hideThumbs")); n.removeClass("hidebullets"); r.removeClass("hidearrows") }); e.hammer().on("release", function () { e.removeClass("hovered"); e.trigger("starttimer"); if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hideThumbs", setTimeout(function () { n.addClass("hidebullets"); r.addClass("hidearrows"); e.trigger("starttimer") }, t.hideNavDelayOnMobile)) }) } catch (i) { } } else { n.hover(function () { t.overnav = true; if (t.onHoverStop == "on") e.trigger("stoptimer"); n.addClass("hovered"); clearTimeout(e.data("hideThumbs")); n.removeClass("hidebullets"); r.removeClass("hidearrows") }, function () { t.overnav = false; e.trigger("starttimer"); n.removeClass("hovered"); if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hideThumbs", setTimeout(function () { n.addClass("hidebullets"); r.addClass("hidearrows") }, t.hideThumbs)) }); r.hover(function () { t.overnav = true; if (t.onHoverStop == "on") e.trigger("stoptimer"); n.addClass("hovered"); clearTimeout(e.data("hideThumbs")); n.removeClass("hidebullets"); r.removeClass("hidearrows") }, function () { t.overnav = false; e.trigger("starttimer"); n.removeClass("hovered") }); e.on("mouseenter", function () { e.addClass("hovered"); if (t.onHoverStop == "on") e.trigger("stoptimer"); clearTimeout(e.data("hideThumbs")); n.removeClass("hidebullets"); r.removeClass("hidearrows") }); e.on("mouseleave", function () { e.removeClass("hovered"); e.trigger("starttimer"); if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hideThumbs", setTimeout(function () { n.addClass("hidebullets"); r.addClass("hidearrows") }, t.hideThumbs)) }) } }; var v = function (t, n) { var r = t.parent(); var i = r.find(".tp-bullets"); if (n.navigationType == "thumb") { i.find(".thumb").each(function (t) { var r = e(this); r.css({ width: n.thumbWidth * n.bw + "px", height: n.thumbHeight * n.bh + "px" }) }); var s = i.find(".tp-mask"); s.width(n.thumbWidth * n.thumbAmount * n.bw); s.height(n.thumbHeight * n.bh); s.parent().width(n.thumbWidth * n.thumbAmount * n.bw); s.parent().height(n.thumbHeight * n.bh) } var o = r.find(".tp-leftarrow"); var u = r.find(".tp-rightarrow"); if (n.navigationType == "thumb" && n.navigationArrows == "nexttobullets") n.navigationArrows = "solo"; if (n.navigationArrows == "nexttobullets") { o.prependTo(i).css({ "float": "left" }); u.insertBefore(i.find(".tpclear")).css({ "float": "left" }) } var a = 0; if (n.forceFullWidth == "on") a = 0 - n.container.parent().offset().left; var f = 0, l = 0; if (n.navigationInGrid == "on") { f = t.width() > n.startwidth ? (t.width() - n.startwidth) / 2 : 0, l = t.height() > n.startheight ? (t.height() - n.startheight) / 2 : 0 } if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") { var c = n.soloArrowLeftValign, h = n.soloArrowLeftHalign, p = n.soloArrowRightValign, d = n.soloArrowRightHalign, v = n.soloArrowLeftVOffset, m = n.soloArrowLeftHOffset, g = n.soloArrowRightVOffset, y = n.soloArrowRightHOffset; o.css({ position: "absolute" }); u.css({ position: "absolute" }); if (c == "center") o.css({ top: "50%", marginTop: v - Math.round(o.innerHeight() / 2) + "px" }); else if (c == "bottom") o.css({ top: "auto", bottom: 0 + v + "px" }); else if (c == "top") o.css({ bottom: "auto", top: 0 + v + "px" }); if (h == "center") o.css({ left: "50%", marginLeft: a + m - Math.round(o.innerWidth() / 2) + "px" }); else if (h == "left") o.css({ left: f + m + a + "px" }); else if (h == "right") o.css({ right: f + m - a + "px" }); if (p == "center") u.css({ top: "50%", marginTop: g - Math.round(u.innerHeight() / 2) + "px" }); else if (p == "bottom") u.css({ top: "auto", bottom: 0 + g + "px" }); else if (p == "top") u.css({ bottom: "auto", top: 0 + g + "px" }); if (d == "center") u.css({ left: "50%", marginLeft: a + y - Math.round(u.innerWidth() / 2) + "px" }); else if (d == "left") u.css({ left: f + y + a + "px" }); else if (d == "right") u.css({ right: f + y - a + "px" }); if (o.position() != null) o.css({ top: Math.round(parseInt(o.position().top, 0)) + "px" }); if (u.position() != null) u.css({ top: Math.round(parseInt(u.position().top, 0)) + "px" }) } if (n.navigationArrows == "none") { o.css({ visibility: "hidden" }); u.css({ visibility: "hidden" }) } var b = n.navigationVAlign, w = n.navigationHAlign, E = n.navigationVOffset * n.bh, S = n.navigationHOffset * n.bw; if (b == "center") i.css({ top: "50%", marginTop: E - Math.round(i.innerHeight() / 2) + "px" }); if (b == "bottom") i.css({ bottom: 0 + E + "px" }); if (b == "top") i.css({ top: 0 + E + "px" }); if (w == "center") i.css({ left: "50%", marginLeft: a + S - Math.round(i.innerWidth() / 2) + "px" }); if (w == "left") i.css({ left: 0 + S + a + "px" }); if (w == "right") i.css({ right: 0 + S - a + "px" }) }; var m = function (n) { var r = n.container; n.beforli = n.next - 1; n.comingli = n.next + 1; if (n.beforli < 0) n.beforli = n.slideamount - 1; if (n.comingli >= n.slideamount) n.comingli = 0; var i = r.find(">ul:first-child >li:eq(" + n.comingli + ")"), s = r.find(">ul:first-child >li:eq(" + n.beforli + ")"), o = s.find(".defaultimg").attr("src"), u = i.find(".defaultimg").attr("src"); if (n.arr == t) { n.arr = r.parent().find(".tparrows"), n.rar = r.parent().find(".tp-rightarrow"), n.lar = r.parent().find(".tp-leftarrow"), n.raimg = n.rar.find(".tp-arr-imgholder"), n.laimg = n.lar.find(".tp-arr-imgholder"), n.raimg_b = n.rar.find(".tp-arr-imgholder2"), n.laimg_b = n.lar.find(".tp-arr-imgholder2"), n.ratit = n.rar.find(".tp-arr-titleholder"), n.latit = n.lar.find(".tp-arr-titleholder") } var a = n.arr, f = n.rar, l = n.lar, c = n.raimg, h = n.laimg, p = n.raimg_b, d = n.laimg_b, v = n.ratit, m = n.latit; if (i.data("title") != t) v.html(i.data("title")); if (s.data("title") != t) m.html(s.data("title")); if (f.hasClass("itishovered")) { f.width(v.outerWidth(true) + parseInt(f.css("minWidth"), 0)) } if (l.hasClass("itishovered")) { l.width(m.outerWidth(true) + parseInt(l.css("minWidth"), 0)) } if (a.hasClass("preview2") && !a.hasClass("hashoveralready")) { a.addClass("hashoveralready"); if (!J()) a.hover(function () { var t = e(this), n = t.find(".tp-arr-titleholder"); if (e(window).width() > 767) t.width(n.outerWidth(true) + parseInt(t.css("minWidth"), 0)); t.addClass("itishovered") }, function () { var t = e(this), n = t.find(".tp-arr-titleholder"); t.css({ width: parseInt(t.css("minWidth"), 0) }); t.removeClass("itishovered") }); else { var a = e(this), g = a.find(".tp-arr-titleholder"); g.addClass("alwayshidden"); punchgs.TweenLite.set(g, { autoAlpha: 0 }) } } if (s.data("thumb") != t) o = s.data("thumb"); if (i.data("thumb") != t) u = i.data("thumb"); if (!a.hasClass("preview4")) { punchgs.TweenLite.to(c, .5, { autoAlpha: 0, onComplete: function () { c.css({ backgroundImage: "url(" + u + ")" }); h.css({ backgroundImage: "url(" + o + ")" }) } }); punchgs.TweenLite.to(h, .5, { autoAlpha: 0, onComplete: function () { punchgs.TweenLite.to(c, .5, { autoAlpha: 1, delay: .2 }); punchgs.TweenLite.to(h, .5, { autoAlpha: 1, delay: .2 }) } }) } else { p.css({ backgroundImage: "url(" + u + ")" }); d.css({ backgroundImage: "url(" + o + ")" }); punchgs.TweenLite.fromTo(p, .8, { force3D: punchgs.force3d, x: 0 }, { x: -c.width(), ease: punchgs.Power3.easeOut, delay: 1, onComplete: function () { c.css({ backgroundImage: "url(" + u + ")" }); punchgs.TweenLite.set(p, { x: 0 }) } }); punchgs.TweenLite.fromTo(d, .8, { force3D: punchgs.force3d, x: 0 }, { x: c.width(), ease: punchgs.Power3.easeOut, delay: 1, onComplete: function () { h.css({ backgroundImage: "url(" + o + ")" }); punchgs.TweenLite.set(d, { x: 0 }) } }); punchgs.TweenLite.fromTo(c, .8, { x: 0 }, { force3D: punchgs.force3d, x: -c.width(), ease: punchgs.Power3.easeOut, delay: 1, onComplete: function () { punchgs.TweenLite.set(c, { x: 0 }) } }); punchgs.TweenLite.fromTo(h, .8, { x: 0 }, { force3D: punchgs.force3d, x: c.width(), ease: punchgs.Power3.easeOut, delay: 1, onComplete: function () { punchgs.TweenLite.set(h, { x: 0 }) } }) } if (f.hasClass("preview4") && !f.hasClass("hashoveralready")) { f.addClass("hashoveralready"); f.hover(function () { var t = e(this).find(".tp-arr-iwrapper"); var n = e(this).find(".tp-arr-allwrapper"); punchgs.TweenLite.fromTo(t, .4, { x: t.width() }, { x: 0, delay: .3, ease: punchgs.Power3.easeOut, overwrite: "all" }); punchgs.TweenLite.to(n, .2, { autoAlpha: 1, overwrite: "all" }) }, function () { var t = e(this).find(".tp-arr-iwrapper"); var n = e(this).find(".tp-arr-allwrapper"); punchgs.TweenLite.to(t, .4, { x: t.width(), ease: punchgs.Power3.easeOut, delay: .2, overwrite: "all" }); punchgs.TweenLite.to(n, .2, { delay: .6, autoAlpha: 0, overwrite: "all" }) }); l.hover(function () { var t = e(this).find(".tp-arr-iwrapper"); var n = e(this).find(".tp-arr-allwrapper"); punchgs.TweenLite.fromTo(t, .4, { x: 0 - t.width() }, { x: 0, delay: .3, ease: punchgs.Power3.easeOut, overwrite: "all" }); punchgs.TweenLite.to(n, .2, { autoAlpha: 1, overwrite: "all" }) }, function () { var t = e(this).find(".tp-arr-iwrapper"); var n = e(this).find(".tp-arr-allwrapper"); punchgs.TweenLite.to(t, .4, { x: 0 - t.width(), ease: punchgs.Power3.easeOut, delay: .2, overwrite: "all" }); punchgs.TweenLite.to(n, .2, { delay: .6, autoAlpha: 0, overwrite: "all" }) }) } }; var g = function (n, r) { r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({ height: r.container.height() }); r.container.closest(".rev_slider_wrapper").css({ height: r.container.height() }); r.width = parseInt(r.container.width(), 0); r.height = parseInt(r.container.height(), 0); r.bw = r.width / r.startwidth; r.bh = r.height / r.startheight; if (r.bh > r.bw) r.bh = r.bw; if (r.bh < r.bw) r.bw = r.bh; if (r.bw < r.bh) r.bh = r.bw; if (r.bh > 1) { r.bw = 1; r.bh = 1 } if (r.bw > 1) { r.bw = 1; r.bh = 1 } r.height = Math.round(r.startheight * (r.width / r.startwidth)); if (r.height > r.startheight && r.autoHeight != "on") r.height = r.startheight; if (r.fullScreen == "on") { r.height = r.bw * r.startheight; var i = r.container.parent().width(); var s = e(window).height(); if (r.fullScreenOffsetContainer != t) { try { var o = r.fullScreenOffsetContainer.split(","); e.each(o, function (t, n) { s = s - e(n).outerHeight(true); if (s < r.minFullScreenHeight) s = r.minFullScreenHeight }) } catch (u) { } try { if (r.fullScreenOffset.split("%").length > 1 && r.fullScreenOffset != t && r.fullScreenOffset.length > 0) { s = s - e(window).height() * parseInt(r.fullScreenOffset, 0) / 100 } else { if (r.fullScreenOffset != t && r.fullScreenOffset.length > 0) s = s - parseInt(r.fullScreenOffset, 0) } if (s < r.minFullScreenHeight) s = r.minFullScreenHeight } catch (u) { } } r.container.parent().height(s); r.container.closest(".rev_slider_wrapper").height(s); r.container.css({ height: "100%" }); r.height = s; if (r.minHeight != t && r.height < r.minHeight) r.height = r.minHeight } else { if (r.minHeight != t && r.height < r.minHeight) r.height = r.minHeight; r.container.height(r.height) } r.slotw = Math.ceil(r.width / r.slots); if (r.fullScreen == "on") r.sloth = Math.ceil(e(window).height() / r.slots); else r.sloth = Math.ceil(r.height / r.slots); if (r.autoHeight == "on") r.sloth = Math.ceil(n.height() / r.slots) }; var y = function (n, r) { n.find(".tp-caption").each(function () { e(this).addClass(e(this).data("transition")); e(this).addClass("start") }); n.find(">ul:first").css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: n.parent().css("maxHeight") }).addClass("tp-revslider-mainul"); if (r.autoHeight == "on") { n.find(">ul:first").css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: "none" }); n.css({ maxHeight: "none" }); n.parent().css({ maxHeight: "none" }) } n.find(">ul:first >li").each(function (r) { var i = e(this); i.addClass("tp-revslider-slidesli"); i.css({ width: "100%", height: "100%", overflow: "hidden" }); if (i.data("link") != t) { var s = i.data("link"); var o = "_self"; var u = 60; if (i.data("slideindex") == "back") u = 0; var a = checksl = i.data("linktoslide"); if (a != t) { if (a != "next" && a != "prev") n.find(">ul:first-child >li").each(function () { var t = e(this); if (t.data("origindex") + 1 == checksl) a = t.index() + 1 }) } if (i.data("target") != t) o = i.data("target"); if (s != "slide") a = "no"; var f = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + u + ';" data-x="center" data-y="center" data-linktoslide="' + a + '" data-start="0"><a style="width:100%;height:100%;display:block"'; if (s != "slide") f = f + ' target="' + o + '" href="' + s + '"'; f = f + '><span style="width:100%;height:100%;display:block"></span></a></div>'; i.append(f) } }); n.parent().css({ overflow: "visible" }); n.find(">ul:first >li >img").each(function (n) { var i = e(this); i.addClass("defaultimg"); if (i.data("lazyload") != t && i.data("lazydone") != 1) { } else { g(i, r) } if (a(8)) { i.data("kenburns", "off") } if (r.panZoomDisableOnMobile == "on" && J()) { i.data("kenburns", "off"); i.data("bgfit", "cover") } i.wrap('<div class="slotholder" style="width:100%;height:100%;"' + 'data-duration="' + i.data("duration") + '"' + 'data-zoomstart="' + i.data("zoomstart") + '"' + 'data-zoomend="' + i.data("zoomend") + '"' + 'data-rotationstart="' + i.data("rotationstart") + '"' + 'data-rotationend="' + i.data("rotationend") + '"' + 'data-ease="' + i.data("ease") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-bgpositionend="' + i.data("bgpositionend") + '"' + 'data-bgposition="' + i.data("bgposition") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-kenburns="' + i.data("kenburns") + '"' + 'data-easeme="' + i.data("ease") + '"' + 'data-bgfit="' + i.data("bgfit") + '"' + 'data-bgfitend="' + i.data("bgfitend") + '"' + 'data-owidth="' + i.data("owidth") + '"' + 'data-oheight="' + i.data("oheight") + '"' + "></div>"); if (r.dottedOverlay != "none" && r.dottedOverlay != t) i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>'); var s = i.attr("src"), o = i.data("lazyload"), u = i.data("bgfit"), f = i.data("bgrepeat"), l = i.data("bgposition"); if (u == t) u = "cover"; if (f == t) f = "no-repeat"; if (l == t) l = "center center"; var c = i.closest(".slotholder"); i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + i.data("lazyload") + '" data-bgfit="' + u + '"data-bgposition="' + l + '" data-bgrepeat="' + f + '" data-lazydone="' + i.data("lazydone") + '" src="' + s + '" data-src="' + s + '" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + f + ";background-image:url(" + s + ");background-size:" + u + ";background-position:" + l + ';width:100%;height:100%;"></div>'); if (a(8)) { c.find(".tp-bgimg").css({ backgroundImage: "none", "background-image": "none" }); c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + s + '" style="width:100%">') } i.css({ opacity: 0 }); i.data("li-id", n) }) }; var b = function (e, n, r, i) { var s = e, o = s.find(".defaultimg"), u = s.data("zoomstart"), f = s.data("rotationstart"); if (o.data("currotate") != t) f = o.data("currotate"); if (o.data("curscale") != t && i == "box") u = o.data("curscale") * 100; else if (o.data("curscale") != t) u = o.data("curscale"); g(o, n); var l = o.data("src"), c = o.css("backgroundColor"), h = n.width, p = n.height, d = o.data("fxof"), v = 0; if (n.autoHeight == "on") p = n.container.height(); if (d == t) d = 0; var m = 0, y = o.data("bgfit"), b = o.data("bgrepeat"), E = o.data("bgposition"); if (y == t) y = "cover"; if (b == t) b = "no-repeat"; if (E == t) E = "center center"; if (a(8)) { s.data("kenburns", "off"); var S = l; l = "" } switch (i) { case "box": var x = 0, T = 0, N = 0; if (n.sloth > n.slotw) x = n.sloth; else x = n.slotw; if (!r) { var m = 0 - x } n.slotw = x; n.sloth = x; var T = 0; var N = 0; if (s.data("kenburns") == "on") { y = u; if (y.toString().length < 4) y = K(y, s, n) } for (var C = 0; C < n.slots; C++) { N = 0; for (var k = 0; k < n.slots; k++) { s.append('<div class="slot" ' + 'style="position:absolute;' + "top:" + (v + N) + "px;" + "left:" + (d + T) + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + T + '" data-y="' + N + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div style="position:absolute;' + "top:" + (0 - N) + "px;" + "left:" + (0 - T) + "px;" + "width:" + h + "px;" + "height:" + p + "px;" + "background-color:" + c + ";" + "background-image:url(" + l + ");" + "background-repeat:" + b + ";" + "background-size:" + y + ";background-position:" + E + ';">' + "</div></div></div>"); N = N + x; if (a(8)) { s.find(".slot ").last().find(".slotslide").append('<img src="' + S + '">'); w(s, n) } if (u != t && f != t) punchgs.TweenLite.set(s.find(".slot").last(), { rotationZ: f }) } T = T + x } break; case "vertical": case "horizontal": if (s.data("kenburns") == "on") { y = u; if (y.toString().length < 4) y = K(y, s, n) } if (i == "horizontal") { if (!r) var m = 0 - n.slotw; for (var k = 0; k < n.slots; k++) { s.append('<div class="slot" style="position:absolute;' + "top:" + (0 + v) + "px;" + "left:" + (d + k * n.slotw) + "px;" + "overflow:hidden;width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:0px;left:" + m + "px;" + "width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px;overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;top:0px;" + "left:" + (0 - k * n.slotw) + "px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + b + ";" + "background-size:" + y + ";background-position:" + E + ';">' + "</div></div></div>"); if (u != t && f != t) punchgs.TweenLite.set(s.find(".slot").last(), { rotationZ: f }); if (a(8)) { s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + S + '" style="width:100%;height:auto">'); w(s, n) } } } else { if (!r) var m = 0 - n.sloth; for (var k = 0; k < n.slots + 2; k++) { s.append('<div class="slot" style="position:absolute;' + "top:" + (v + k * n.sloth) + "px;" + "left:" + d + "px;" + "overflow:hidden;" + "width:" + h + "px;" + "height:" + n.sloth + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:" + m + "px;" + "left:0px;width:" + h + "px;" + "height:" + n.sloth + "px;" + 'overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;" + "top:" + (0 - k * n.sloth) + "px;" + "left:0px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + b + ";" + "background-size:" + y + ";background-position:" + E + ';">' + "</div></div></div>"); if (u != t && f != t) punchgs.TweenLite.set(s.find(".slot").last(), { rotationZ: f }); if (a(8)) { s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + S + '" style="width:100%;height:auto;">'); w(s, n) } } } break } }; var w = function (e, t) { if (a(8)) { var n = e.find(".ieeightfallbackimage"); var r = n.width(), i = n.height(); if (t.startwidth / t.startheight < e.data("owidth") / e.data("oheight")) n.css({ width: "auto", height: "100%" }); else n.css({ width: "100%", height: "auto" }); setTimeout(function () { var r = n.width(), i = n.height(), s = e.data("bgposition"); if (s == "center center") n.css({ position: "absolute", top: t.height / 2 - i / 2 + "px", left: t.width / 2 - r / 2 + "px" }); if (s == "center top" || s == "top center") n.css({ position: "absolute", top: "0px", left: t.width / 2 - r / 2 + "px" }); if (s == "center bottom" || s == "bottom center") n.css({ position: "absolute", bottom: "0px", left: t.width / 2 - r / 2 + "px" }); if (s == "right top" || s == "top right") n.css({ position: "absolute", top: "0px", right: "0px" }); if (s == "right bottom" || s == "bottom right") n.css({ position: "absolute", bottom: "0px", right: "0px" }); if (s == "right center" || s == "center right") n.css({ position: "absolute", top: t.height / 2 - i / 2 + "px", right: "0px" }); if (s == "left bottom" || s == "bottom left") n.css({ position: "absolute", bottom: "0px", left: "0px" }); if (s == "left center" || s == "center left") n.css({ position: "absolute", top: t.height / 2 - i / 2 + "px", left: "0px" }) }, 20) } }; var E = function (t, n, r) { r.find(".slot").each(function () { e(this).remove() }); n.transition = 0 }; var S = function (n, r) { n.find("img, .defaultimg").each(function (n) { var i = e(this), s = i.data("lazyload"); if (s != i.attr("src") && r < 3 && s != t && s != "undefined") { if (s != t && s != "undefined") { i.attr("src", s); var o = new Image; o.onload = function (e) { i.data("lazydone", 1); if (i.hasClass("defaultimg")) x(i, o) }; o.error = function () { i.data("lazydone", 1) }; o.src = i.attr("src"); if (o.complete) { if (i.hasClass("defaultimg")) x(i, o); i.data("lazydone", 1) } } } else { if ((s === t || s === "undefined") && i.data("lazydone") != 1) { var o = new Image; o.onload = function () { if (i.hasClass("defaultimg")) x(i, o); i.data("lazydone", 1) }; o.error = function () { i.data("lazydone", 1) }; if (i.attr("src") != t && i.attr("src") != "undefined") { o.src = i.attr("src") } else o.src = i.data("src"); if (o.complete) { if (i.hasClass("defaultimg")) { x(i, o) } i.data("lazydone", 1) } } } }) }; var x = function (e, t) { var n = e.closest("li"), r = t.width, i = t.height; n.data("owidth", r); n.data("oheight", i); n.find(".slotholder").data("owidth", r); n.find(".slotholder").data("oheight", i); n.data("loadeddone", 1) }; var T = function (n, r, i) { S(n, 0); var s = setInterval(function () { i.bannertimeronpause = true; i.container.trigger("stoptimer"); i.cd = 0; var o = 0; n.find("img, .defaultimg").each(function (t) { if (e(this).data("lazydone") != 1) { o++ } }); if (o > 0) S(n, o); else { clearInterval(s); if (r != t) r() } }, 100) }; var N = function (e, n) { try { var r = e.find(">ul:first-child >li:eq(" + n.act + ")") } catch (i) { var r = e.find(">ul:first-child >li:eq(1)") } n.lastslide = n.act; var s = e.find(">ul:first-child >li:eq(" + n.next + ")"); var o = s.find(".defaultimg"); n.bannertimeronpause = true; e.trigger("stoptimer"); n.cd = 0; if (o.data("lazyload") != t && o.data("lazyload") != "undefined" && o.data("lazydone") != 1) { if (!a(8)) o.css({ backgroundImage: 'url("' + s.find(".defaultimg").data("lazyload") + '")' }); else { o.attr("src", s.find(".defaultimg").data("lazyload")) } o.data("src", s.find(".defaultimg").data("lazyload")); o.data("lazydone", 1); o.data("orgw", 0); s.data("loadeddone", 1); e.find(".tp-loader").css({ display: "block" }); T(e.find(".tp-static-layers"), function () { T(s, function () { var t = s.find(".slotholder"); if (t.data("kenburns") == "on") { var r = setInterval(function () { var i = t.data("owidth"); if (i >= 0) { clearInterval(r); C(n, o, e) } }, 10) } else C(n, o, e) }, n) }, n) } else { if (s.data("loadeddone") === t) { s.data("loadeddone", 1); T(s, function () { C(n, o, e) }, n) } else C(n, o, e) } }; var C = function (e, t, n) { e.bannertimeronpause = false; e.cd = 0; n.trigger("nulltimer"); n.find(".tp-loader").css({ display: "none" }); g(t, e); v(n, e); g(t, e); k(n, e) }; var k = function (e, n) { e.trigger("revolution.slide.onbeforeswap"); n.transition = 1; n.videoplaying = false; try { var r = e.find(">ul:first-child >li:eq(" + n.act + ")") } catch (i) { var r = e.find(">ul:first-child >li:eq(1)") } n.lastslide = n.act; var s = e.find(">ul:first-child >li:eq(" + n.next + ")"); setTimeout(function () { m(n) }, 200); var o = r.find(".slotholder"), u = s.find(".slotholder"); if (u.data("kenburns") == "on" || o.data("kenburns") == "on") { Z(e, n); e.find(".kenburnimg").remove() } if (s.data("delay") != t) { n.cd = 0; n.delay = s.data("delay") } else { n.delay = n.origcd } if (n.firststart == 1) punchgs.TweenLite.set(r, { autoAlpha: 0 }); punchgs.TweenLite.set(r, { zIndex: 18 }); punchgs.TweenLite.set(s, { autoAlpha: 0, zIndex: 20 }); var a = 0; if (r.index() != s.index() && n.firststart != 1) { a = z(r, n) } if (r.data("saveperformance") != "on") a = 0; setTimeout(function () { e.trigger("restarttimer"); L(e, n, s, r, o, u) }, a) }; var L = function (n, r, i, s, o, u) { function x() { e.each(d, function (e, t) { if (t[0] == h || t[8] == h) { f = t[1]; p = t[2]; g = y } y = y + 1 }) } if (i.data("differentissplayed") == "prepared") { i.data("differentissplayed", "done"); i.data("transition", i.data("savedtransition")); i.data("slotamount", i.data("savedslotamount")); i.data("masterspeed", i.data("savedmasterspeed")) } if (i.data("fstransition") != t && i.data("differentissplayed") != "done") { i.data("savedtransition", i.data("transition")); i.data("savedslotamount", i.data("slotamount")); i.data("savedmasterspeed", i.data("masterspeed")); i.data("transition", i.data("fstransition")); i.data("slotamount", i.data("fsslotamount")); i.data("masterspeed", i.data("fsmasterspeed")); i.data("differentissplayed", "prepared") } n.find(".active-revslide").removeClass(".active-revslide"); i.addClass("active-revslide"); if (i.data("transition") == t) i.data("transition", "random"); var f = 0, l = i.data("transition").split(","), c = i.data("nexttransid") == t ? -1 : i.data("nexttransid"); if (i.data("randomtransition") == "on") c = Math.round(Math.random() * l.length); else c = c + 1; if (c == l.length) c = 0; i.data("nexttransid", c); var h = l[c]; if (r.ie) { if (h == "boxfade") h = "boxslide"; if (h == "slotfade-vertical") h = "slotzoom-vertical"; if (h == "slotfade-horizontal") h = "slotzoom-horizontal" } if (a(8)) { h = 11 } var p = 0; if (r.parallax == "scroll" && r.parallaxFirstGo == t) { r.parallaxFirstGo = true; tt(n, r); setTimeout(function () { tt(n, r) }, 210); setTimeout(function () { tt(n, r) }, 420) } if (h == "slidehorizontal") { h = "slideleft"; if (r.leftarrowpressed == 1) h = "slideright" } if (h == "slidevertical") { h = "slideup"; if (r.leftarrowpressed == 1) h = "slidedown" } if (h == "parallaxhorizontal") { h = "parallaxtoleft"; if (r.leftarrowpressed == 1) h = "parallaxtoright" } if (h == "parallaxvertical") { h = "parallaxtotop"; if (r.leftarrowpressed == 1) h = "parallaxtobottom" } var d = [["boxslide", 0, 1, 10, 0, "box", false, null, 0], ["boxfade", 1, 0, 10, 0, "box", false, null, 1], ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", true, false, 2], ["slotslide-vertical", 3, 0, 0, 200, "vertical", true, false, 3], ["curtain-1", 4, 3, 0, 0, "horizontal", true, true, 4], ["curtain-2", 5, 3, 0, 0, "horizontal", true, true, 5], ["curtain-3", 6, 3, 25, 0, "horizontal", true, true, 6], ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", true, true, 7], ["slotzoom-vertical", 8, 0, 0, 0, "vertical", true, true, 8], ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", true, null, 9], ["slotfade-vertical", 10, 0, 0, 500, "vertical", true, null, 10], ["fade", 11, 0, 1, 300, "horizontal", true, null, 11], ["slideleft", 12, 0, 1, 0, "horizontal", true, true, 12], ["slideup", 13, 0, 1, 0, "horizontal", true, true, 13], ["slidedown", 14, 0, 1, 0, "horizontal", true, true, 14], ["slideright", 15, 0, 1, 0, "horizontal", true, true, 15], ["papercut", 16, 0, 0, 600, "", null, null, 16], ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", false, true, 17], ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", false, true, 18], ["cubic", 19, 0, 20, 600, "horizontal", false, true, 19], ["cube", 19, 0, 20, 600, "horizontal", false, true, 20], ["flyin", 20, 0, 4, 600, "vertical", false, true, 21], ["turnoff", 21, 0, 1, 1600, "horizontal", false, true, 22], ["incube", 22, 0, 20, 200, "horizontal", false, true, 23], ["cubic-horizontal", 23, 0, 20, 500, "vertical", false, true, 24], ["cube-horizontal", 23, 0, 20, 500, "vertical", false, true, 25], ["incube-horizontal", 24, 0, 20, 500, "vertical", false, true, 26], ["turnoff-vertical", 25, 0, 1, 200, "horizontal", false, true, 27], ["fadefromright", 12, 1, 1, 0, "horizontal", true, true, 28], ["fadefromleft", 15, 1, 1, 0, "horizontal", true, true, 29], ["fadefromtop", 14, 1, 1, 0, "horizontal", true, true, 30], ["fadefrombottom", 13, 1, 1, 0, "horizontal", true, true, 31], ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", true, true, 32], ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", true, true, 33], ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", true, true, 34], ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", true, true, 35], ["parallaxtoright", 12, 3, 1, 0, "horizontal", true, true, 36], ["parallaxtoleft", 15, 3, 1, 0, "horizontal", true, true, 37], ["parallaxtotop", 14, 3, 1, 0, "horizontal", true, true, 38], ["parallaxtobottom", 13, 3, 1, 0, "horizontal", true, true, 39], ["scaledownfromright", 12, 4, 1, 0, "horizontal", true, true, 40], ["scaledownfromleft", 15, 4, 1, 0, "horizontal", true, true, 41], ["scaledownfromtop", 14, 4, 1, 0, "horizontal", true, true, 42], ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", true, true, 43], ["zoomout", 13, 5, 1, 0, "horizontal", true, true, 44], ["zoomin", 13, 6, 1, 0, "horizontal", true, true, 45], ["notransition", 26, 0, 1, 0, "horizontal", true, null, 46]]; var v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]; var m = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]; var f = 0; var p = 1; var g = 0; var y = 0; var w = new Array; if (u.data("kenburns") == "on") { if (h == "boxslide" || h == 0 || h == "boxfade" || h == 1 || h == "papercut" || h == 16) h = 11; Q(n, r, true, true) } if (h == "random") { h = Math.round(Math.random() * d.length - 1); if (h > d.length - 1) h = d.length - 1 } if (h == "random-static") { h = Math.round(Math.random() * v.length - 1); if (h > v.length - 1) h = v.length - 1; h = v[h] } if (h == "random-premium") { h = Math.round(Math.random() * m.length - 1); if (h > m.length - 1) h = m.length - 1; h = m[h] } var E = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]; if (r.isJoomla == true && window.MooTools != t && E.indexOf(h) != -1) { var S = Math.round(Math.random() * (m.length - 2)) + 1; if (S > m.length - 1) S = m.length - 1; if (S == 0) S = 1; h = m[S] } x(); if (a(8) && f > 15 && f < 28) { h = Math.round(Math.random() * v.length - 1); if (h > v.length - 1) h = v.length - 1; h = v[h]; y = 0; x() } var T = -1; if (r.leftarrowpressed == 1 || r.act > r.next) T = 1; r.leftarrowpressed = 0; if (f > 26) f = 26; if (f < 0) f = 0; var N = 300; if (i.data("masterspeed") != t && i.data("masterspeed") > 99 && i.data("masterspeed") < r.delay) N = i.data("masterspeed"); if (i.data("masterspeed") != t && i.data("masterspeed") > r.delay) N = r.delay; w = d[g]; n.parent().find(".bullet").each(function () { var t = e(this), n = t.index(); t.removeClass("selected"); if (r.navigationArrows == "withbullet" || r.navigationArrows == "nexttobullets") n = t.index() - 1; if (n == r.next) t.addClass("selected") }); var C = new punchgs.TimelineLite({ onComplete: function () { A(n, r, u, o, i, s, C) } }); C.add(punchgs.TweenLite.set(u.find(".defaultimg"), { opacity: 0 })); C.pause(); if (i.data("slotamount") == t || i.data("slotamount") < 1) { r.slots = Math.round(Math.random() * 12 + 4); if (h == "boxslide") r.slots = Math.round(Math.random() * 6 + 3); else if (h == "flyin") r.slots = Math.round(Math.random() * 4 + 1) } else { r.slots = i.data("slotamount") } if (i.data("rotate") == t) r.rotate = 0; else if (i.data("rotate") == 999) r.rotate = Math.round(Math.random() * 360); else r.rotate = i.data("rotate"); if (!e.support.transition || r.ie || r.ie9) r.rotate = 0; if (r.firststart == 1) r.firststart = 0; N = N + w[4]; if ((f == 4 || f == 5 || f == 6) && r.slots < 3) r.slots = 3; if (w[3] != 0) r.slots = Math.min(r.slots, w[3]); if (f == 9) r.slots = r.width / 20; if (f == 10) r.slots = r.height / 20; if (w[7] != null) b(o, r, w[7], w[5]); if (w[6] != null) b(u, r, w[6], w[5]); if (f == 0) { var k = Math.ceil(r.height / r.sloth); var L = 0; u.find(".slotslide").each(function (t) { var n = e(this); L = L + 1; if (L == k) L = 0; C.add(punchgs.TweenLite.from(n, N / 600, { opacity: 0, top: 0 - r.sloth, left: 0 - r.slotw, rotation: r.rotate, force3D: "auto", ease: punchgs.Power2.easeOut }), (t * 15 + L * 30) / 1500) }) } if (f == 1) { var O, M = 0; u.find(".slotslide").each(function (t) { var n = e(this), i = Math.random() * N + 300, s = Math.random() * 500 + 200; if (i + s > O) { O = s + s; M = t } C.add(punchgs.TweenLite.from(n, i / 1e3, { autoAlpha: 0, force3D: "auto", rotation: r.rotate, ease: punchgs.Power2.easeInOut }), s / 1e3) }) } if (f == 2) { var _ = new punchgs.TimelineLite; o.find(".slotslide").each(function () { var t = e(this); _.add(punchgs.TweenLite.to(t, N / 1e3, { left: r.slotw, force3D: "auto", rotation: 0 - r.rotate }), 0); C.add(_, 0) }); u.find(".slotslide").each(function () { var t = e(this); _.add(punchgs.TweenLite.from(t, N / 1e3, { left: 0 - r.slotw, force3D: "auto", rotation: r.rotate }), 0); C.add(_, 0) }) } if (f == 3) { var _ = new punchgs.TimelineLite; o.find(".slotslide").each(function () { var t = e(this); _.add(punchgs.TweenLite.to(t, N / 1e3, { top: r.sloth, rotation: r.rotate, force3D: "auto", transformPerspective: 600 }), 0); C.add(_, 0) }); u.find(".slotslide").each(function () { var t = e(this); _.add(punchgs.TweenLite.from(t, N / 1e3, { top: 0 - r.sloth, rotation: r.rotate, ease: punchgs.Power2.easeOut, force3D: "auto", transformPerspective: 600 }), 0); C.add(_, 0) }) } if (f == 4 || f == 5) { setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); var D = N / 1e3, P = D, _ = new punchgs.TimelineLite; o.find(".slotslide").each(function (t) { var n = e(this); var i = t * D / r.slots; if (f == 5) i = (r.slots - t - 1) * D / r.slots / 1.5; _.add(punchgs.TweenLite.to(n, D * 3, { transformPerspective: 600, force3D: "auto", top: 0 + r.height, opacity: .5, rotation: r.rotate, ease: punchgs.Power2.easeInOut, delay: i }), 0); C.add(_, 0) }); u.find(".slotslide").each(function (t) { var n = e(this); var i = t * D / r.slots; if (f == 5) i = (r.slots - t - 1) * D / r.slots / 1.5; _.add(punchgs.TweenLite.from(n, D * 3, { top: 0 - r.height, opacity: .5, rotation: r.rotate, force3D: "auto", ease: punchgs.Power2.easeInOut, delay: i }), 0); C.add(_, 0) }) } if (f == 6) { if (r.slots < 2) r.slots = 2; if (r.slots % 2) r.slots = r.slots + 1; var _ = new punchgs.TimelineLite; setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); o.find(".slotslide").each(function (t) { var n = e(this); if (t + 1 < r.slots / 2) var i = (t + 2) * 90; else var i = (2 + r.slots - t) * 90; _.add(punchgs.TweenLite.to(n, (N + i) / 1e3, { top: 0 + r.height, opacity: 1, force3D: "auto", rotation: r.rotate, ease: punchgs.Power2.easeInOut }), 0); C.add(_, 0) }); u.find(".slotslide").each(function (t) { var n = e(this); if (t + 1 < r.slots / 2) var i = (t + 2) * 90; else var i = (2 + r.slots - t) * 90; _.add(punchgs.TweenLite.from(n, (N + i) / 1e3, { top: 0 - r.height, opacity: 1, force3D: "auto", rotation: r.rotate, ease: punchgs.Power2.easeInOut }), 0); C.add(_, 0) }) } if (f == 7) { N = N * 2; if (N > r.delay) N = r.delay; var _ = new punchgs.TimelineLite; setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); o.find(".slotslide").each(function () { var t = e(this).find("div"); _.add(punchgs.TweenLite.to(t, N / 1e3, { left: 0 - r.slotw / 2 + "px", top: 0 - r.height / 2 + "px", width: r.slotw * 2 + "px", height: r.height * 2 + "px", opacity: 0, rotation: r.rotate, force3D: "auto", ease: punchgs.Power2.easeOut }), 0); C.add(_, 0) }); u.find(".slotslide").each(function (t) { var n = e(this).find("div"); _.add(punchgs.TweenLite.fromTo(n, N / 1e3, { left: 0, top: 0, opacity: 0, transformPerspective: 600 }, { left: 0 - t * r.slotw + "px", ease: punchgs.Power2.easeOut, force3D: "auto", top: 0 + "px", width: r.width, height: r.height, opacity: 1, rotation: 0, delay: .1 }), 0); C.add(_, 0) }) } if (f == 8) { N = N * 3; if (N > r.delay) N = r.delay; var _ = new punchgs.TimelineLite; o.find(".slotslide").each(function () { var t = e(this).find("div"); _.add(punchgs.TweenLite.to(t, N / 1e3, { left: 0 - r.width / 2 + "px", top: 0 - r.sloth / 2 + "px", width: r.width * 2 + "px", height: r.sloth * 2 + "px", force3D: "auto", opacity: 0, rotation: r.rotate }), 0); C.add(_, 0) }); u.find(".slotslide").each(function (t) { var n = e(this).find("div"); _.add(punchgs.TweenLite.fromTo(n, N / 1e3, { left: 0, top: 0, opacity: 0, force3D: "auto" }, { left: 0 + "px", top: 0 - t * r.sloth + "px", width: u.find(".defaultimg").data("neww") + "px", height: u.find(".defaultimg").data("newh") + "px", opacity: 1, rotation: 0 }), 0); C.add(_, 0) }) } if (f == 9 || f == 10) { var H = 0; u.find(".slotslide").each(function (t) { var n = e(this); H++; C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { autoAlpha: 0, force3D: "auto", transformPerspective: 600 }, { autoAlpha: 1, ease: punchgs.Power2.easeInOut, delay: t * 5 / 1e3 }), 0) }) } if (f == 11 || f == 26) { var H = 0; if (f == 26) N = 0; u.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.from(n, N / 1e3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power2.easeInOut }), 0) }) } if (f == 12 || f == 13 || f == 14 || f == 15) { N = N; if (N > r.delay) N = r.delay; setTimeout(function () { punchgs.TweenLite.set(o.find(".defaultimg"), { autoAlpha: 0 }) }, 100); var B = r.width, F = r.height, I = u.find(".slotslide"), q = 0, R = 0, U = 1, z = 1, W = 1, X = punchgs.Power2.easeInOut, V = punchgs.Power2.easeInOut, $ = N / 1e3, J = $; if (r.fullWidth == "on" || r.fullScreen == "on") { B = I.width(); F = I.height() } if (f == 12) q = B; else if (f == 15) q = 0 - B; else if (f == 13) R = F; else if (f == 14) R = 0 - F; if (p == 1) U = 0; if (p == 2) U = 0; if (p == 3) { X = punchgs.Power2.easeInOut; V = punchgs.Power1.easeInOut; $ = N / 1200 } if (p == 4 || p == 5) z = .6; if (p == 6) z = 1.4; if (p == 5 || p == 6) { W = 1.4; U = 0; B = 0; F = 0; q = 0; R = 0 } if (p == 6) W = .6; var K = 0; C.add(punchgs.TweenLite.from(I, $, { left: q, top: R, scale: W, opacity: U, rotation: r.rotate, ease: V, force3D: "auto" }), 0); var G = o.find(".slotslide"); if (p == 4 || p == 5) { B = 0; F = 0 } if (p != 1) switch (f) { case 12: C.add(punchgs.TweenLite.to(G, J, { left: 0 - B + "px", force3D: "auto", scale: z, opacity: U, rotation: r.rotate, ease: X }), 0); break; case 15: C.add(punchgs.TweenLite.to(G, J, { left: B + "px", force3D: "auto", scale: z, opacity: U, rotation: r.rotate, ease: X }), 0); break; case 13: C.add(punchgs.TweenLite.to(G, J, { top: 0 - F + "px", force3D: "auto", scale: z, opacity: U, rotation: r.rotate, ease: X }), 0); break; case 14: C.add(punchgs.TweenLite.to(G, J, { top: F + "px", force3D: "auto", scale: z, opacity: U, rotation: r.rotate, ease: X }), 0); break } } if (f == 16) { var _ = new punchgs.TimelineLite; C.add(punchgs.TweenLite.set(s, { position: "absolute", "z-index": 20 }), 0); C.add(punchgs.TweenLite.set(i, { position: "absolute", "z-index": 15 }), 0); s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'); s.find(".tp-half-one").clone(true).appendTo(s).addClass("tp-half-two"); s.find(".tp-half-two").removeClass("tp-half-one"); var B = r.width, F = r.height; if (r.autoHeight == "on") F = n.height(); s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + B + "px;height:" + F + 'px;"></div>'); s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + B + "px;height:" + F + 'px;"></div>'); s.find(".tp-half-two .defaultimg").css({ position: "absolute", top: "-50%" }); s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'); C.add(punchgs.TweenLite.set(s.find(".tp-half-two"), { width: B, height: F, overflow: "hidden", zIndex: 15, position: "absolute", top: F / 2, left: "0px", transformPerspective: 600, transformOrigin: "center bottom" }), 0); C.add(punchgs.TweenLite.set(s.find(".tp-half-one"), { width: B, height: F / 2, overflow: "visible", zIndex: 10, position: "absolute", top: "0px", left: "0px", transformPerspective: 600, transformOrigin: "center top" }), 0); var Y = s.find(".defaultimg"), Z = Math.round(Math.random() * 20 - 10), et = Math.round(Math.random() * 20 - 10), nt = Math.round(Math.random() * 20 - 10), rt = Math.random() * .4 - .2, it = Math.random() * .4 - .2, st = Math.random() * 1 + 1, ot = Math.random() * 1 + 1, ut = Math.random() * .3 + .3; C.add(punchgs.TweenLite.set(s.find(".tp-half-one"), { overflow: "hidden" }), 0); C.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"), N / 800, { width: B, height: F / 2, position: "absolute", top: "0px", left: "0px", force3D: "auto", transformOrigin: "center top" }, { scale: st, rotation: Z, y: 0 - F - F / 4, autoAlpha: 0, ease: punchgs.Power2.easeInOut }), 0); C.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"), N / 800, { width: B, height: F, overflow: "hidden", position: "absolute", top: F / 2, left: "0px", force3D: "auto", transformOrigin: "center bottom" }, { scale: ot, rotation: et, y: F + F / 4, ease: punchgs.Power2.easeInOut, autoAlpha: 0, onComplete: function () { punchgs.TweenLite.set(s, { position: "absolute", "z-index": 15 }); punchgs.TweenLite.set(i, { position: "absolute", "z-index": 20 }); if (s.find(".tp-half-one").length > 0) { s.find(".tp-half-one .defaultimg").unwrap(); s.find(".tp-half-one .slotholder").unwrap() } s.find(".tp-half-two").remove() } }), 0); _.add(punchgs.TweenLite.set(u.find(".defaultimg"), { autoAlpha: 1 }), 0); if (s.html() != null) C.add(punchgs.TweenLite.fromTo(i, (N - 200) / 1e3, { scale: ut, x: r.width / 4 * rt, y: F / 4 * it, rotation: nt, force3D: "auto", transformOrigin: "center center", ease: punchgs.Power2.easeOut }, { autoAlpha: 1, scale: 1, x: 0, y: 0, rotation: 0 }), 0); C.add(_, 0) } if (f == 17) { u.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 800, { opacity: 0, rotationY: 0, scale: .9, rotationX: -110, force3D: "auto", transformPerspective: 600, transformOrigin: "center center" }, { opacity: 1, top: 0, left: 0, scale: 1, rotation: 0, rotationX: 0, force3D: "auto", rotationY: 0, ease: punchgs.Power3.easeOut, delay: t * .06 }), 0) }) } if (f == 18) { u.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 500, { autoAlpha: 0, rotationY: 310, scale: .9, rotationX: 10, force3D: "auto", transformPerspective: 600, transformOrigin: "center center" }, { autoAlpha: 1, top: 0, left: 0, scale: 1, rotation: 0, rotationX: 0, force3D: "auto", rotationY: 0, ease: punchgs.Power3.easeOut, delay: t * .06 }), 0) }) } if (f == 19 || f == 22) { var _ = new punchgs.TimelineLite; C.add(punchgs.TweenLite.set(s, { zIndex: 20 }), 0); C.add(punchgs.TweenLite.set(i, { zIndex: 20 }), 0); setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); var at = i.css("z-index"), ft = s.css("z-index"), lt = 90, U = 1, ct = "center center "; if (T == 1) lt = -90; if (f == 19) { ct = ct + "-" + r.height / 2; U = 0 } else { ct = ct + r.height / 2 } punchgs.TweenLite.set(n, { transformStyle: "flat", backfaceVisibility: "hidden", transformPerspective: 600 }); u.find(".slotslide").each(function (t) { var n = e(this); _.add(punchgs.TweenLite.fromTo(n, N / 1e3, { transformStyle: "flat", backfaceVisibility: "hidden", left: 0, rotationY: r.rotate, z: 10, top: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationX: lt }, { left: 0, rotationY: 0, top: 0, z: 0, scale: 1, force3D: "auto", rotationX: 0, delay: t * 50 / 1e3, ease: punchgs.Power2.easeInOut }), 0); _.add(punchgs.TweenLite.to(n, .1, { autoAlpha: 1, delay: t * 50 / 1e3 }), 0); C.add(_) }); o.find(".slotslide").each(function (t) { var n = e(this); var i = -90; if (T == 1) i = 90; _.add(punchgs.TweenLite.fromTo(n, N / 1e3, { transformStyle: "flat", backfaceVisibility: "hidden", autoAlpha: 1, rotationY: 0, top: 0, z: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationX: 0 }, { autoAlpha: 1, rotationY: r.rotate, top: 0, z: 10, scale: 1, rotationX: i, delay: t * 50 / 1e3, force3D: "auto", ease: punchgs.Power2.easeInOut }), 0); C.add(_) }) } if (f == 20) { setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); var at = i.css("z-index"), ft = s.css("z-index"); if (T == 1) { var ht = -r.width; var lt = 70; var ct = "left center -" + r.height / 2 } else { var ht = r.width; var lt = -70; var ct = "right center -" + r.height / 2 } u.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 1500, { left: ht, rotationX: 40, z: -600, opacity: U, top: 0, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationY: lt }, { left: 0, delay: t * 50 / 1e3, ease: punchgs.Power2.easeInOut }), 0); C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { rotationX: 40, z: -600, opacity: U, top: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationY: lt }, { rotationX: 0, opacity: 1, top: 0, z: 0, scale: 1, rotationY: 0, delay: t * 50 / 1e3, ease: punchgs.Power2.easeInOut }), 0); C.add(punchgs.TweenLite.to(n, .1, { opacity: 1, force3D: "auto", delay: t * 50 / 1e3 + N / 2e3 }), 0) }); o.find(".slotslide").each(function (t) { var n = e(this); if (T != 1) { var i = -r.width; var s = 70; var o = "left center -" + r.height / 2 } else { var i = r.width; var s = -70; var o = "right center -" + r.height / 2 } C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { opacity: 1, rotationX: 0, top: 0, z: 0, scale: 1, left: 0, force3D: "auto", transformPerspective: 600, transformOrigin: o, rotationY: 0 }, { opacity: 1, rotationX: 40, top: 0, z: -600, left: i, force3D: "auto", scale: .8, rotationY: s, delay: t * 50 / 1e3, ease: punchgs.Power2.easeInOut }), 0); C.add(punchgs.TweenLite.to(n, .1, { force3D: "auto", opacity: 0, delay: t * 50 / 1e3 + (N / 1e3 - N / 1e4) }), 0) }) } if (f == 21 || f == 25) { setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); var at = i.css("z-index"), ft = s.css("z-index"), lt = 90, ht = -r.width, pt = -lt; if (T == 1) { if (f == 25) { var ct = "center top 0"; lt = r.rotate } else { var ct = "left center 0"; pt = r.rotate } } else { ht = r.width; lt = -90; if (f == 25) { var ct = "center bottom 0"; pt = -lt; lt = r.rotate } else { var ct = "right center 0"; pt = r.rotate } } u.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { left: 0, transformStyle: "flat", rotationX: pt, z: 0, autoAlpha: 0, top: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationY: lt }, { left: 0, rotationX: 0, top: 0, z: 0, autoAlpha: 1, scale: 1, rotationY: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }), 0) }); if (T != 1) { ht = -r.width; lt = 90; if (f == 25) { ct = "center top 0"; pt = -lt; lt = r.rotate } else { ct = "left center 0"; pt = r.rotate } } else { ht = r.width; lt = -90; if (f == 25) { ct = "center bottom 0"; pt = -lt; lt = r.rotate } else { ct = "right center 0"; pt = r.rotate } } o.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { left: 0, transformStyle: "flat", rotationX: 0, z: 0, autoAlpha: 1, top: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationY: 0 }, { left: 0, rotationX: pt, top: 0, z: 0, autoAlpha: 1, force3D: "auto", scale: 1, rotationY: lt, ease: punchgs.Power1.easeInOut }), 0) }) } if (f == 23 || f == 24) { setTimeout(function () { o.find(".defaultimg").css({ opacity: 0 }) }, 100); var at = i.css("z-index"), ft = s.css("z-index"), lt = -90, U = 1, dt = 0; if (T == 1) lt = 90; if (f == 23) { var ct = "center center -" + r.width / 2; U = 0 } else var ct = "center center " + r.width / 2; punchgs.TweenLite.set(n, { transformStyle: "preserve-3d", backfaceVisibility: "hidden", perspective: 2500 }); u.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { left: dt, rotationX: r.rotate, force3D: "auto", opacity: U, top: 0, scale: 1, transformPerspective: 600, transformOrigin: ct, rotationY: lt }, { left: 0, rotationX: 0, autoAlpha: 1, top: 0, z: 0, scale: 1, rotationY: 0, delay: t * 50 / 500, ease: punchgs.Power2.easeInOut }), 0) }); lt = 90; if (T == 1) lt = -90; o.find(".slotslide").each(function (t) { var n = e(this); C.add(punchgs.TweenLite.fromTo(n, N / 1e3, { left: 0, autoAlpha: 1, rotationX: 0, top: 0, z: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: ct, rotationY: 0 }, { left: dt, autoAlpha: 1, rotationX: r.rotate, top: 0, scale: 1, rotationY: lt, delay: t * 50 / 500, ease: punchgs.Power2.easeInOut }), 0) }) } C.pause(); j(i, r, null, C); punchgs.TweenLite.to(i, .001, { autoAlpha: 1 }); var vt = {}; vt.slideIndex = r.next + 1; vt.slide = i; n.trigger("revolution.slide.onchange", vt); setTimeout(function () { n.trigger("revolution.slide.onafterswap") }, N); n.trigger("revolution.slide.onvideostop") }; var A = function (e, t, n, r, i, s, o) { punchgs.TweenLite.to(n.find(".defaultimg"), .001, { autoAlpha: 1, onComplete: function () { E(e, t, i) } }); if (i.index() != s.index()) { punchgs.TweenLite.to(s, .2, { autoAlpha: 0, onComplete: function () { E(e, t, s) } }) } t.act = t.next; if (t.navigationType == "thumb") rt(e); if (n.data("kenburns") == "on") { Q(e, t) } e.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"); i.addClass("current-sr-slide-visible"); if (t.parallax == "scroll" || t.parallax == "scroll+mouse" || t.parallax == "mouse+scroll") { tt(e, t) } o.clear() }; var O = function (t) { var n = t.target.getVideoEmbedCode(); var r = e("#" + n.split('id="')[1].split('"')[0]); var i = r.closest(".tp-simpleresponsive"); var s = r.parent().data("player"); if (t.data == YT.PlayerState.PLAYING) { var o = i.find(".tp-bannertimer"); var u = o.data("opt"); if (r.closest(".tp-caption").data("volume") == "mute") s.mute(); u.videoplaying = true; i.trigger("stoptimer"); i.trigger("revolution.slide.onvideoplay") } else { var o = i.find(".tp-bannertimer"); var u = o.data("opt"); if (t.data != -1 && t.data != 3) { u.videoplaying = false; i.trigger("starttimer"); i.trigger("revolution.slide.onvideostop") } if (t.data == 0 && u.nextslideatend == true) u.container.revnext(); else { u.videoplaying = false; i.trigger("starttimer"); i.trigger("revolution.slide.onvideostop") } } }; var M = function (e, t, n) { if (e.addEventListener) e.addEventListener(t, n, false); else e.attachEvent(t, n, false) }; var _ = function (t, n) { var r = $f(t), i = e("#" + t), s = i.closest(".tp-simpleresponsive"), o = i.closest(".tp-caption"); setTimeout(function () { r.addEvent("ready", function (t) { if (n) r.api("play"); r.addEvent("play", function (e) { var t = s.find(".tp-bannertimer"); var n = t.data("opt"); n.videoplaying = true; s.trigger("stoptimer"); if (o.data("volume") == "mute") r.api("setVolume", "0") }); r.addEvent("finish", function (e) { var t = s.find(".tp-bannertimer"); var n = t.data("opt"); n.videoplaying = false; s.trigger("starttimer"); s.trigger("revolution.slide.onvideoplay"); if (n.nextslideatend == true) n.container.revnext() }); r.addEvent("pause", function (e) { var t = s.find(".tp-bannertimer"); var n = t.data("opt"); n.videoplaying = false; s.trigger("starttimer"); s.trigger("revolution.slide.onvideostop") }); o.find(".tp-thumb-image").click(function () { punchgs.TweenLite.to(e(this), .3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }); r.api("play") }) }) }, 150) }; var D = function (e, n) { var r = n.width(); var i = n.height(); var s = e.data("mediaAspect"); if (s == t) s = 1; var o = r / i; e.css({ position: "absolute" }); var u = e.find("video"); if (o < s) { punchgs.TweenLite.to(e, 1e-4, { width: i * s, force3D: "auto", top: 0, left: 0 - (i * s - r) / 2, height: i }) } else { punchgs.TweenLite.to(e, 1e-4, { width: r, force3D: "auto", top: 0 - (r / s - i) / 2, left: 0, height: r / s }) } }; var P = function () { var e = new Object; e.x = 0; e.y = 0; e.rotationX = 0; e.rotationY = 0; e.rotationZ = 0; e.scale = 1; e.scaleX = 1; e.scaleY = 1; e.skewX = 0; e.skewY = 0; e.opacity = 0; e.transformOrigin = "center, center"; e.transformPerspective = 400; e.rotation = 0; return e }; var H = function (t, n) { var r = n.split(";"); e.each(r, function (e, n) { n = n.split(":"); var r = n[0], i = n[1]; if (r == "rotationX") t.rotationX = parseInt(i, 0); if (r == "rotationY") t.rotationY = parseInt(i, 0); if (r == "rotationZ") t.rotationZ = parseInt(i, 0); if (r == "rotationZ") t.rotation = parseInt(i, 0); if (r == "scaleX") t.scaleX = parseFloat(i); if (r == "scaleY") t.scaleY = parseFloat(i); if (r == "opacity") t.opacity = parseFloat(i); if (r == "skewX") t.skewX = parseInt(i, 0); if (r == "skewY") t.skewY = parseInt(i, 0); if (r == "x") t.x = parseInt(i, 0); if (r == "y") t.y = parseInt(i, 0); if (r == "z") t.z = parseInt(i, 0); if (r == "transformOrigin") t.transformOrigin = i.toString(); if (r == "transformPerspective") t.transformPerspective = parseInt(i, 0) }); return t }; var B = function (t) { var n = t.split("animation:"); var r = new Object; r.animation = H(P(), n[1]); var i = n[0].split(";"); e.each(i, function (e, t) { t = t.split(":"); var n = t[0], i = t[1]; if (n == "typ") r.typ = i; if (n == "speed") r.speed = parseInt(i, 0) / 1e3; if (n == "start") r.start = parseInt(i, 0) / 1e3; if (n == "elementdelay") r.elementdelay = parseFloat(i); if (n == "ease") r.ease = i }); return r }; var j = function (n, r, i, s) { function o() { } function u() { } if (n.data("ctl") == t) { n.data("ctl", new punchgs.TimelineLite) } var f = n.data("ctl"), l = 0, c = 0, h = n.find(".tp-caption"), p = r.container.find(".tp-static-layers").find(".tp-caption"); f.pause(); e.each(p, function (e, t) { h.push(t) }); h.each(function (n) { var s = i, f = -1, h = e(this); if (h.hasClass("tp-static-layer")) { var p = h.data("startslide"), d = h.data("endslide"); if (p == -1 || p == "-1") h.data("startslide", 0); if (d == -1 || d == "-1") h.data("endslide", r.slideamount); if (p == 0 && d == r.slideamount - 1) h.data("endslide", r.slideamount + 1); p = h.data("startslide"), d = h.data("endslide"); if (!h.hasClass("tp-is-shown")) { if (p <= r.next && d >= r.next || p == r.next || d == r.next) { h.addClass("tp-is-shown"); f = 1 } else { f = 0 } } else { if (d == r.next || p > r.next || d < r.next) { f = 2 } else { f = 0 } } } l = r.width / 2 - r.startwidth * r.bw / 2; var v = r.bw; var m = r.bh; if (r.fullScreen == "on") c = r.height / 2 - r.startheight * r.bh / 2; if (r.autoHeight == "on" || r.minHeight != t && r.minHeight > 0) c = r.container.height() / 2 - r.startheight * r.bh / 2; if (c < 0) c = 0; var g = 0; if (r.width < r.hideCaptionAtLimit && h.data("captionhidden") == "on") { h.addClass("tp-hidden-caption"); g = 1 } else { if (r.width < r.hideAllCaptionAtLimit || r.width < r.hideAllCaptionAtLilmit) { h.addClass("tp-hidden-caption"); g = 1 } else { h.removeClass("tp-hidden-caption") } } if (g == 0) { if (h.data("linktoslide") != t && !h.hasClass("hasclicklistener")) { h.addClass("hasclicklistener"); h.css({ cursor: "pointer" }); if (h.data("linktoslide") != "no") { h.click(function () { var t = e(this); var n = t.data("linktoslide"); if (n != "next" && n != "prev") { r.container.data("showus", n); r.container.parent().find(".tp-rightarrow").click() } else if (n == "next") r.container.parent().find(".tp-rightarrow").click(); else if (n == "prev") r.container.parent().find(".tp-leftarrow").click() }) } } if (l < 0) l = 0; if (h.hasClass("tp-videolayer") || h.find("iframe").length > 0 || h.find("video").length > 0) { var y = "iframe" + Math.round(Math.random() * 1e5 + 1), b = h.data("videowidth"), w = h.data("videoheight"), E = h.data("videoattributes"), S = h.data("ytid"), x = h.data("vimeoid"), T = h.data("videpreload"), N = h.data("videomp4"), C = h.data("videowebm"), k = h.data("videoogv"), L = h.data("videocontrols"), A = "http", j = h.data("videoloop") == "loop" ? "loop" : h.data("videoloop") == "loopandnoslidestop" ? "loop" : ""; if (h.data("thumbimage") != t && h.data("videoposter") == t) h.data("videoposter", h.data("thumbimage")); if (S != t && String(S).length > 1 && h.find("iframe").length == 0) { A = "https"; if (L == "none") { E = E.replace("controls=1", "controls=0"); if (E.toLowerCase().indexOf("controls") == -1) E = E + "&controls=0" } h.append('<iframe style="visible:hidden" src="' + A + "://www.youtube.com/embed/" + S + "?" + E + '" width="' + b + '" height="' + w + '" style="width:' + b + "px;height:" + w + 'px"></iframe>') } if (x != t && String(x).length > 1 && h.find("iframe").length == 0) { if (location.protocol === "https:") A = "https"; h.append('<iframe style="visible:hidden" src="' + A + "://player.vimeo.com/video/" + x + "?" + E + '" width="' + b + '" height="' + w + '" style="width:' + b + "px;height:" + w + 'px"></iframe>') } if ((N != t || C != t) && h.find("video").length == 0) { if (L != "controls") L = ""; var I = '<video style="visible:hidden" class="" ' + j + ' preload="' + T + '" width="' + b + '" height="' + w + '"'; if (h.data("videoposter") != t) if (h.data("videoposter") != t) I = I + 'poster="' + h.data("videoposter") + '">'; if (C != t && F().toLowerCase() == "firefox") I = I + '<source src="' + C + '" type="video/webm" />'; if (N != t) I = I + '<source src="' + N + '" type="video/mp4" />'; if (k != t) I = I + '<source src="' + k + '" type="video/ogg" />'; I = I + "</video>"; h.append(I); if (L == "controls") h.append('<div class="tp-video-controls">' + '<div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div>' + '<div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div>' + '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div>' + '<div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' + '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>' + "</div>") } var z = false; if (h.data("autoplayonlyfirsttime") == true || h.data("autoplayonlyfirsttime") == "true" || h.data("autoplay") == true) { h.data("autoplay", true); z = true } h.find("iframe").each(function () { var n = e(this); punchgs.TweenLite.to(n, .1, { autoAlpha: 1, zIndex: 0, transformStyle: "preserve-3d", z: 0, rotationX: 0, force3D: "auto" }); if (J()) { var o = n.attr("src"); n.attr("src", ""); n.attr("src", o) } r.nextslideatend = h.data("nextslideatend"); if (h.data("videoposter") != t && h.data("videoposter").length > 2 && h.data("autoplay") != true && !s) { if (h.find(".tp-thumb-image").length == 0) h.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + h.data("videoposter") + '); background-size:cover"></div>'); else punchgs.TweenLite.set(h.find(".tp-thumb-image"), { autoAlpha: 1 }) } if (n.attr("src").toLowerCase().indexOf("youtube") >= 0) { if (!n.hasClass("HasListener")) { try { n.attr("id", y); var u; var a = setInterval(function () { if (YT != t) if (typeof YT.Player != t && typeof YT.Player != "undefined") { u = new YT.Player(y, { events: { onStateChange: O, onReady: function (n) { var r = n.target.getVideoEmbedCode(), i = e("#" + r.split('id="')[1].split('"')[0]), s = i.closest(".tp-caption"), o = s.data("videorate"), a = s.data("videostart"); if (o != t) n.target.setPlaybackRate(parseFloat(o)); if (!J() && s.data("autoplay") == true || z) { s.data("timerplay", setTimeout(function () { n.target.playVideo() }, s.data("start"))) } s.find(".tp-thumb-image").click(function () { punchgs.TweenLite.to(e(this), .3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }); if (!J()) { u.playVideo() } }) } } }) } n.addClass("HasListener"); h.data("player", u); clearInterval(a) }, 100) } catch (f) { } } else { if (!i) { var u = h.data("player"); if (h.data("forcerewind") == "on" && !J()) u.seekTo(0); if (!J() && h.data("autoplay") == true || z) { h.data("timerplay", setTimeout(function () { u.playVideo() }, h.data("start"))) } } } } else if (n.attr("src").toLowerCase().indexOf("vimeo") >= 0) { if (!n.hasClass("HasListener")) { n.addClass("HasListener"); n.attr("id", y); var l = n.attr("src"); var c = {}, p = l, d = /([^&=]+)=([^&]*)/g, v; while (v = d.exec(p)) { c[decodeURIComponent(v[1])] = decodeURIComponent(v[2]) } if (c["player_id"] != t) l = l.replace(c["player_id"], y); else l = l + "&player_id=" + y; try { l = l.replace("api=0", "api=1") } catch (f) { } l = l + "&api=1"; n.attr("src", l); var u = h.find("iframe")[0]; var m = setInterval(function () { if ($f != t) { if (typeof $f(y).api != t && typeof $f(y).api != "undefined") { $f(u).addEvent("ready", function () { _(y, z) }); clearInterval(m) } } }, 100) } else { if (!i) { if (!J() && (h.data("autoplay") == true || h.data("forcerewind") == "on")) { var n = h.find("iframe"); var g = n.attr("id"); var b = $f(g); if (h.data("forcerewind") == "on") b.api("seekTo", 0); h.data("timerplay", setTimeout(function () { if (h.data("autoplay") == true) b.api("play") }, h.data("start"))) } } } } }); if (J() && h.data("disablevideoonmobile") == 1 || a(8)) h.find("video").remove(); if (h.find("video").length > 0) { h.find("video").each(function (n) { var i = this, s = e(this); if (!s.parent().hasClass("html5vid")) s.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>'); var o = s.parent(); M(i, "loadedmetadata", function (e) { e.data("metaloaded", 1) }(o)); clearInterval(o.data("interval")); o.data("interval", setInterval(function () { if (o.data("metaloaded") == 1 || i.duration != NaN) { clearInterval(o.data("interval")); if (!o.hasClass("HasListener")) { o.addClass("HasListener"); if (h.data("dottedoverlay") != "none" && h.data("dottedoverlay") != t) if (h.find(".tp-dottedoverlay").length != 1) o.append('<div class="tp-dottedoverlay ' + h.data("dottedoverlay") + '"></div>'); if (s.attr("control") == t) { if (o.find(".tp-video-play-button").length == 0) o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'); o.find("video, .tp-poster, .tp-video-play-button").click(function () { if (o.hasClass("videoisplaying")) i.pause(); else i.play() }) } if (h.data("forcecover") == 1 || h.hasClass("fullscreenvideo")) { if (h.data("forcecover") == 1) { D(o, r.container); o.addClass("fullcoveredvideo"); h.addClass("fullcoveredvideo") } o.css({ width: "100%", height: "100%" }) } var e = h.find(".tp-vid-play-pause")[0], n = h.find(".tp-vid-mute")[0], u = h.find(".tp-vid-full-screen")[0], a = h.find(".tp-seek-bar")[0], f = h.find(".tp-volume-bar")[0]; if (e != t) { M(e, "click", function () { if (i.paused == true) i.play(); else i.pause() }); M(n, "click", function () { if (i.muted == false) { i.muted = true; n.innerHTML = "Unmute" } else { i.muted = false; n.innerHTML = "Mute" } }); M(u, "click", function () { if (i.requestFullscreen) { i.requestFullscreen() } else if (i.mozRequestFullScreen) { i.mozRequestFullScreen() } else if (i.webkitRequestFullscreen) { i.webkitRequestFullscreen() } }); M(a, "change", function () { var e = i.duration * (a.value / 100); i.currentTime = e }); M(i, "timeupdate", function () { var e = 100 / i.duration * i.currentTime; a.value = e }); M(a, "mousedown", function () { i.pause() }); M(a, "mouseup", function () { i.play() }); M(f, "change", function () { i.volume = f.value }) } M(i, "play", function () { if (h.data("volume") == "mute") i.muted = true; o.addClass("videoisplaying"); if (h.data("videoloop") == "loopandnoslidestop") { r.videoplaying = false; r.container.trigger("starttimer"); r.container.trigger("revolution.slide.onvideostop") } else { r.videoplaying = true; r.container.trigger("stoptimer"); r.container.trigger("revolution.slide.onvideoplay") } var e = h.find(".tp-vid-play-pause")[0], n = h.find(".tp-vid-mute")[0]; if (e != t) e.innerHTML = "Pause"; if (n != t && i.muted) n.innerHTML = "Unmute" }); M(i, "pause", function () { o.removeClass("videoisplaying"); r.videoplaying = false; r.container.trigger("starttimer"); r.container.trigger("revolution.slide.onvideostop"); var e = h.find(".tp-vid-play-pause")[0]; if (e != t) e.innerHTML = "Play" }); M(i, "ended", function () { o.removeClass("videoisplaying"); r.videoplaying = false; r.container.trigger("starttimer"); r.container.trigger("revolution.slide.onvideostop"); if (r.nextslideatend == true) r.container.revnext() }) } var l = false; if (h.data("autoplayonlyfirsttime") == true || h.data("autoplayonlyfirsttime") == "true") l = true; var c = 16 / 9; if (h.data("aspectratio") == "4:3") c = 4 / 3; o.data("mediaAspect", c); if (o.closest(".tp-caption").data("forcecover") == 1) { D(o, r.container); o.addClass("fullcoveredvideo") } s.css({ display: "block" }); r.nextslideatend = h.data("nextslideatend"); if (h.data("autoplay") == true || l == true) { if (h.data("videoloop") == "loopandnoslidestop") { r.videoplaying = false; r.container.trigger("starttimer"); r.container.trigger("revolution.slide.onvideostop") } else { r.videoplaying = true; r.container.trigger("stoptimer"); r.container.trigger("revolution.slide.onvideoplay") } if (h.data("forcerewind") == "on" && !o.hasClass("videoisplaying")) if (i.currentTime > 0) i.currentTime = 0; if (h.data("volume") == "mute") i.muted = true; o.data("timerplay", setTimeout(function () { if (h.data("forcerewind") == "on" && !o.hasClass("videoisplaying")) if (i.currentTime > 0) i.currentTime = 0; if (h.data("volume") == "mute") i.muted = true; i.play() }, 10 + h.data("start"))) } if (o.data("ww") == t) o.data("ww", s.attr("width")); if (o.data("hh") == t) o.data("hh", s.attr("height")); if (!h.hasClass("fullscreenvideo") && h.data("forcecover") == 1) { try { o.width(o.data("ww") * r.bw); o.height(o.data("hh") * r.bh) } catch (p) { } } clearInterval(o.data("interval")) } }), 100) }) } if (h.data("autoplay") == true) { setTimeout(function () { if (h.data("videoloop") != "loopandnoslidestop") { r.videoplaying = true; r.container.trigger("stoptimer") } }, 200); if (h.data("videoloop") != "loopandnoslidestop") { r.videoplaying = true; r.container.trigger("stoptimer") } if (h.data("autoplayonlyfirsttime") == true || h.data("autoplayonlyfirsttime") == "true") { h.data("autoplay", false); h.data("autoplayonlyfirsttime", false) } } } var V = 0; var $ = 0; if (h.find("img").length > 0) { var K = h.find("img"); if (K.width() == 0) K.css({ width: "auto" }); if (K.height() == 0) K.css({ height: "auto" }); if (K.data("ww") == t && K.width() > 0) K.data("ww", K.width()); if (K.data("hh") == t && K.height() > 0) K.data("hh", K.height()); var Q = K.data("ww"); var G = K.data("hh"); if (Q == t) Q = 0; if (G == t) G = 0; K.width(Q * r.bw); K.height(G * r.bh); V = K.width(); $ = K.height() } else { if (h.find("iframe").length > 0 || h.find("video").length > 0) { var Y = false, K = h.find("iframe"); if (K.length == 0) { K = h.find("video"); Y = true } K.css({ display: "block" }); if (h.data("ww") == t) h.data("ww", K.width()); if (h.data("hh") == t) h.data("hh", K.height()); var Q = h.data("ww"), G = h.data("hh"); var Z = h; if (Z.data("fsize") == t) Z.data("fsize", parseInt(Z.css("font-size"), 0) || 0); if (Z.data("pt") == t) Z.data("pt", parseInt(Z.css("paddingTop"), 0) || 0); if (Z.data("pb") == t) Z.data("pb", parseInt(Z.css("paddingBottom"), 0) || 0); if (Z.data("pl") == t) Z.data("pl", parseInt(Z.css("paddingLeft"), 0) || 0); if (Z.data("pr") == t) Z.data("pr", parseInt(Z.css("paddingRight"), 0) || 0); if (Z.data("mt") == t) Z.data("mt", parseInt(Z.css("marginTop"), 0) || 0); if (Z.data("mb") == t) Z.data("mb", parseInt(Z.css("marginBottom"), 0) || 0); if (Z.data("ml") == t) Z.data("ml", parseInt(Z.css("marginLeft"), 0) || 0); if (Z.data("mr") == t) Z.data("mr", parseInt(Z.css("marginRight"), 0) || 0); if (Z.data("bt") == t) Z.data("bt", parseInt(Z.css("borderTop"), 0) || 0); if (Z.data("bb") == t) Z.data("bb", parseInt(Z.css("borderBottom"), 0) || 0); if (Z.data("bl") == t) Z.data("bl", parseInt(Z.css("borderLeft"), 0) || 0); if (Z.data("br") == t) Z.data("br", parseInt(Z.css("borderRight"), 0) || 0); if (Z.data("lh") == t) Z.data("lh", parseInt(Z.css("lineHeight"), 0) || 0); if (Z.data("lh") == "auto") Z.data("lh", Z.data("fsize") + 4); var et = r.width, tt = r.height; if (et > r.startwidth) et = r.startwidth; if (tt > r.startheight) tt = r.startheight; if (!h.hasClass("fullscreenvideo")) h.css({ "font-size": Z.data("fsize") * r.bw + "px", "padding-top": Z.data("pt") * r.bh + "px", "padding-bottom": Z.data("pb") * r.bh + "px", "padding-left": Z.data("pl") * r.bw + "px", "padding-right": Z.data("pr") * r.bw + "px", "margin-top": Z.data("mt") * r.bh + "px", "margin-bottom": Z.data("mb") * r.bh + "px", "margin-left": Z.data("ml") * r.bw + "px", "margin-right": Z.data("mr") * r.bw + "px", "border-top": Z.data("bt") * r.bh + "px", "border-bottom": Z.data("bb") * r.bh + "px", "border-left": Z.data("bl") * r.bw + "px", "border-right": Z.data("br") * r.bw + "px", "line-height": Z.data("lh") * r.bh + "px", height: G * r.bh + "px" }); else { l = 0; c = 0; h.data("x", 0); h.data("y", 0); var nt = r.height; if (r.autoHeight == "on") nt = r.container.height(); h.css({ width: r.width, height: nt }) } if (Y == false) { K.width(Q * r.bw); K.height(G * r.bh) } else if (h.data("forcecover") != 1 && !h.hasClass("fullscreenvideo")) { K.width(Q * r.bw); K.height(G * r.bh) } V = K.width(); $ = K.height() } else { h.find(".tp-resizeme, .tp-resizeme *").each(function () { q(e(this), r) }); if (h.hasClass("tp-resizeme")) { h.find("*").each(function () { q(e(this), r) }) } q(h, r); $ = h.outerHeight(true); V = h.outerWidth(true); var rt = h.outerHeight(); var it = h.css("backgroundColor"); h.find(".frontcorner").css({ borderWidth: rt + "px", left: 0 - rt + "px", borderRight: "0px solid transparent", borderTopColor: it }); h.find(".frontcornertop").css({ borderWidth: rt + "px", left: 0 - rt + "px", borderRight: "0px solid transparent", borderBottomColor: it }); h.find(".backcorner").css({ borderWidth: rt + "px", right: 0 - rt + "px", borderLeft: "0px solid transparent", borderBottomColor: it }); h.find(".backcornertop").css({ borderWidth: rt + "px", right: 0 - rt + "px", borderLeft: "0px solid transparent", borderTopColor: it }) } } if (r.fullScreenAlignForce == "on") { l = 0; c = 0 } if (h.data("voffset") == t) h.data("voffset", 0); if (h.data("hoffset") == t) h.data("hoffset", 0); var st = h.data("voffset") * v; var ot = h.data("hoffset") * v; var ut = r.startwidth * v; var at = r.startheight * v; if (r.fullScreenAlignForce == "on") { ut = r.container.width(); at = r.container.height() } if (h.data("x") == "center" || h.data("xcenter") == "center") { h.data("xcenter", "center"); h.data("x", ut / 2 - h.outerWidth(true) / 2 + ot) } if (h.data("x") == "left" || h.data("xleft") == "left") { h.data("xleft", "left"); h.data("x", 0 / v + ot) } if (h.data("x") == "right" || h.data("xright") == "right") { h.data("xright", "right"); h.data("x", (ut - h.outerWidth(true) + ot) / v) } if (h.data("y") == "center" || h.data("ycenter") == "center") { h.data("ycenter", "center"); h.data("y", at / 2 - h.outerHeight(true) / 2 + st) } if (h.data("y") == "top" || h.data("ytop") == "top") { h.data("ytop", "top"); h.data("y", 0 / r.bh + st) } if (h.data("y") == "bottom" || h.data("ybottom") == "bottom") { h.data("ybottom", "bottom"); h.data("y", (at - h.outerHeight(true) + st) / v) } if (h.data("start") == t) h.data("start", 1e3); var ft = h.data("easing"); if (ft == t) ft = "punchgs.Power1.easeOut"; var lt = h.data("start") / 1e3, ct = h.data("speed") / 1e3; if (h.data("x") == "center" || h.data("xcenter") == "center") var ht = h.data("x") + l; else { var ht = v * h.data("x") + l } if (h.data("y") == "center" || h.data("ycenter") == "center") var pt = h.data("y") + c; else { var pt = r.bh * h.data("y") + c } punchgs.TweenLite.set(h, { top: pt, left: ht, overwrite: "auto" }); if (f == 0) s = true; if (h.data("timeline") != t && !s) { if (f != 2) h.data("timeline").gotoAndPlay(0); s = true } if (!s) { if (h.data("timeline") != t) { } var dt = new punchgs.TimelineLite({ smoothChildTiming: true, onStart: u }); dt.pause(); if (r.fullScreenAlignForce == "on") { } var vt = h; if (h.data("mySplitText") != t) h.data("mySplitText").revert(); if (h.data("splitin") == "chars" || h.data("splitin") == "words" || h.data("splitin") == "lines" || h.data("splitout") == "chars" || h.data("splitout") == "words" || h.data("splitout") == "lines") { if (h.find("a").length > 0) h.data("mySplitText", new punchgs.SplitText(h.find("a"), { type: "lines,words,chars", charsClass: "tp-splitted", wordsClass: "tp-splitted", linesClass: "tp-splitted" })); else if (h.find(".tp-layer-inner-rotation").length > 0) h.data("mySplitText", new punchgs.SplitText(h.find(".tp-layer-inner-rotation"), { type: "lines,words,chars", charsClass: "tp-splitted", wordsClass: "tp-splitted", linesClass: "tp-splitted" })); else h.data("mySplitText", new punchgs.SplitText(h, { type: "lines,words,chars", charsClass: "tp-splitted", wordsClass: "tp-splitted", linesClass: "tp-splitted" })); h.addClass("splitted") } if (h.data("splitin") == "chars") vt = h.data("mySplitText").chars; if (h.data("splitin") == "words") vt = h.data("mySplitText").words; if (h.data("splitin") == "lines") vt = h.data("mySplitText").lines; var mt = P(); var gt = P(); if (h.data("repeat") != t) repeatV = h.data("repeat"); if (h.data("yoyo") != t) yoyoV = h.data("yoyo"); if (h.data("repeatdelay") != t) repeatdelayV = h.data("repeatdelay"); var yt = h.attr("class"); if (yt.match("customin")) mt = H(mt, h.data("customin")); else if (yt.match("randomrotate")) { mt.scale = Math.random() * 3 + 1; mt.rotation = Math.round(Math.random() * 200 - 100); mt.x = Math.round(Math.random() * 200 - 100); mt.y = Math.round(Math.random() * 200 - 100) } else if (yt.match("lfr") || yt.match("skewfromright")) mt.x = 15 + r.width; else if (yt.match("lfl") || yt.match("skewfromleft")) mt.x = -15 - V; else if (yt.match("sfl") || yt.match("skewfromleftshort")) mt.x = -50; else if (yt.match("sfr") || yt.match("skewfromrightshort")) mt.x = 50; else if (yt.match("lft")) mt.y = -25 - $; else if (yt.match("lfb")) mt.y = 25 + r.height; else if (yt.match("sft")) mt.y = -50; else if (yt.match("sfb")) mt.y = 50; if (yt.match("skewfromright") || h.hasClass("skewfromrightshort")) mt.skewX = -85; else if (yt.match("skewfromleft") || h.hasClass("skewfromleftshort")) mt.skewX = 85; if (yt.match("fade") || yt.match("sft") || yt.match("sfl") || yt.match("sfb") || yt.match("skewfromleftshort") || yt.match("sfr") || yt.match("skewfromrightshort")) mt.opacity = 0; if (F().toLowerCase() == "safari") { } var bt = h.data("elementdelay") == t ? 0 : h.data("elementdelay"); gt.ease = mt.ease = h.data("easing") == t ? punchgs.Power1.easeInOut : h.data("easing"); mt.data = new Object; mt.data.oldx = mt.x; mt.data.oldy = mt.y; gt.data = new Object; gt.data.oldx = gt.x; gt.data.oldy = gt.y; mt.x = mt.x * v; mt.y = mt.y * v; var wt = new punchgs.TimelineLite; if (f != 2) { if (yt.match("customin")) { if (vt != h) dt.add(punchgs.TweenLite.set(h, { force3D: "auto", opacity: 1, scaleX: 1, scaleY: 1, rotationX: 0, rotationY: 0, rotationZ: 0, skewX: 0, skewY: 0, z: 0, x: 0, y: 0, visibility: "visible", delay: 0, overwrite: "all" })); mt.visibility = "hidden"; gt.visibility = "visible"; gt.overwrite = "all"; gt.opacity = 1; gt.onComplete = o(); gt.delay = lt; gt.force3D = "auto"; dt.add(wt.staggerFromTo(vt, ct, mt, gt, bt), "frame0") } else { mt.visibility = "visible"; mt.transformPerspective = 600; if (vt != h) dt.add(punchgs.TweenLite.set(h, { force3D: "auto", opacity: 1, scaleX: 1, scaleY: 1, rotationX: 0, rotationY: 0, rotationZ: 0, skewX: 0, skewY: 0, z: 0, x: 0, y: 0, visibility: "visible", delay: 0, overwrite: "all" })); gt.visibility = "visible"; gt.delay = lt; gt.onComplete = o(); gt.opacity = 1; gt.force3D = "auto"; if (yt.match("randomrotate") && vt != h) { for (var n = 0; n < vt.length; n++) { var Et = new Object; var St = new Object; e.extend(Et, mt); e.extend(St, gt); mt.scale = Math.random() * 3 + 1; mt.rotation = Math.round(Math.random() * 200 - 100); mt.x = Math.round(Math.random() * 200 - 100); mt.y = Math.round(Math.random() * 200 - 100); if (n != 0) St.delay = lt + n * bt; dt.append(punchgs.TweenLite.fromTo(vt[n], ct, Et, St), "frame0") } } else dt.add(wt.staggerFromTo(vt, ct, mt, gt, bt), "frame0") } } h.data("timeline", dt); var xt = new Array; if (h.data("frames") != t) { var Tt = h.data("frames"); Tt = Tt.replace(/\s+/g, ""); Tt = Tt.replace("{", ""); var Nt = Tt.split("}"); e.each(Nt, function (e, t) { if (t.length > 0) { var n = B(t); W(h, r, n, "frame" + (e + 10), v) } }) } dt = h.data("timeline"); if (h.data("end") != t && (f == -1 || f == 2)) { X(h, r, h.data("end") / 1e3, mt, "frame99", v) } else { if (f == -1 || f == 2) X(h, r, 999999, mt, "frame99", v); else X(h, r, 200, mt, "frame99", v) } dt = h.data("timeline"); h.data("timeline", dt); R(h, v); dt.resume() } } if (s) { U(h); R(h, v); if (h.data("timeline") != t) { var Ct = h.data("timeline").getTweensOf(); e.each(Ct, function (e, n) { if (n.vars.data != t) { var r = n.vars.data.oldx * v; var i = n.vars.data.oldy * v; if (n.progress() != 1 && n.progress() != 0) { try { n.vars.x = r; n.vary.y = i } catch (s) { } } else { if (n.progress() == 1) { punchgs.TweenLite.set(n.target, { x: r, y: i }) } } } }) } } }); var d = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer"); d.data("opt", r); if (s != t) setTimeout(function () { s.resume() }, 30) }; var F = function () { var e = navigator.appName, t = navigator.userAgent, n; var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i); if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1]; r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"]; return r[0] }; var I = function () { var e = navigator.appName, t = navigator.userAgent, n; var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i); if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1]; r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"]; return r[1] }; var q = function (e, n) { if (e.data("fsize") == t) e.data("fsize", parseInt(e.css("font-size"), 0) || 0); if (e.data("pt") == t) e.data("pt", parseInt(e.css("paddingTop"), 0) || 0); if (e.data("pb") == t) e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0); if (e.data("pl") == t) e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0); if (e.data("pr") == t) e.data("pr", parseInt(e.css("paddingRight"), 0) || 0); if (e.data("mt") == t) e.data("mt", parseInt(e.css("marginTop"), 0) || 0); if (e.data("mb") == t) e.data("mb", parseInt(e.css("marginBottom"), 0) || 0); if (e.data("ml") == t) e.data("ml", parseInt(e.css("marginLeft"), 0) || 0); if (e.data("mr") == t) e.data("mr", parseInt(e.css("marginRight"), 0) || 0); if (e.data("bt") == t) e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0); if (e.data("bb") == t) e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0); if (e.data("bl") == t) e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0); if (e.data("br") == t) e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0); if (e.data("ls") == t) e.data("ls", parseInt(e.css("letterSpacing"), 0) || 0); if (e.data("lh") == t) e.data("lh", parseInt(e.css("lineHeight"), 0) || "auto"); if (e.data("minwidth") == t) e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0); if (e.data("minheight") == t) e.data("minheight", parseInt(e.css("minHeight"), 0) || 0); if (e.data("maxwidth") == t) e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none"); if (e.data("maxheight") == t) e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none"); if (e.data("wii") == t) e.data("wii", parseInt(e.css("width"), 0) || 0); if (e.data("hii") == t) e.data("hii", parseInt(e.css("height"), 0) || 0); if (e.data("wan") == t) e.data("wan", e.css("-webkit-transition")); if (e.data("moan") == t) e.data("moan", e.css("-moz-animation-transition")); if (e.data("man") == t) e.data("man", e.css("-ms-animation-transition")); if (e.data("ani") == t) e.data("ani", e.css("transition")); if (e.data("lh") == "auto") e.data("lh", e.data("fsize") + 4); if (!e.hasClass("tp-splitted")) { e.css("-webkit-transition", "none"); e.css("-moz-transition", "none"); e.css("-ms-transition", "none"); e.css("transition", "none"); punchgs.TweenLite.set(e, { fontSize: Math.round(e.data("fsize") * n.bw) + "px", letterSpacing: Math.floor(e.data("ls") * n.bw) + "px", paddingTop: Math.round(e.data("pt") * n.bh) + "px", paddingBottom: Math.round(e.data("pb") * n.bh) + "px", paddingLeft: Math.round(e.data("pl") * n.bw) + "px", paddingRight: Math.round(e.data("pr") * n.bw) + "px", marginTop: e.data("mt") * n.bh + "px", marginBottom: e.data("mb") * n.bh + "px", marginLeft: e.data("ml") * n.bw + "px", marginRight: e.data("mr") * n.bw + "px", borderTopWidth: Math.round(e.data("bt") * n.bh) + "px", borderBottomWidth: Math.round(e.data("bb") * n.bh) + "px", borderLeftWidth: Math.round(e.data("bl") * n.bw) + "px", borderRightWidth: Math.round(e.data("br") * n.bw) + "px", lineHeight: Math.round(e.data("lh") * n.bh) + "px", minWidth: e.data("minwidth") * n.bw + "px", minHeight: e.data("minheight") * n.bh + "px", overwrite: "auto" }); setTimeout(function () { e.css("-webkit-transition", e.data("wan")); e.css("-moz-transition", e.data("moan")); e.css("-ms-transition", e.data("man")); e.css("transition", e.data("ani")) }, 30); if (e.data("maxheight") != "none") e.css({ maxHeight: e.data("maxheight") * n.bh + "px" }); if (e.data("maxwidth") != "none") e.css({ maxWidth: e.data("maxwidth") * n.bw + "px" }) } }; var R = function (n, r) { n.find(".rs-pendulum").each(function () { var n = e(this); if (n.data("timeline") == t) { n.data("timeline", new punchgs.TimelineLite); var i = n.data("startdeg") == t ? -20 : n.data("startdeg"), s = n.data("enddeg") == t ? 20 : n.data("enddeg"), o = n.data("speed") == t ? 2 : n.data("speed"), u = n.data("origin") == t ? "50% 50%" : n.data("origin"), a = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("ease"); i = i * r; s = s * r; n.data("timeline").append(new punchgs.TweenLite.fromTo(n, o, { force3D: "auto", rotation: i, transformOrigin: u }, { rotation: s, ease: a })); n.data("timeline").append(new punchgs.TweenLite.fromTo(n, o, { force3D: "auto", rotation: s, transformOrigin: u }, { rotation: i, ease: a, onComplete: function () { n.data("timeline").restart() } })) } }); n.find(".rs-rotate").each(function () { var n = e(this); if (n.data("timeline") == t) { n.data("timeline", new punchgs.TimelineLite); var i = n.data("startdeg") == t ? 0 : n.data("startdeg"), s = n.data("enddeg") == t ? 360 : n.data("enddeg"); speed = n.data("speed") == t ? 2 : n.data("speed"), origin = n.data("origin") == t ? "50% 50%" : n.data("origin"), easing = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("easing"); i = i * r; s = s * r; n.data("timeline").append(new punchgs.TweenLite.fromTo(n, speed, { force3D: "auto", rotation: i, transformOrigin: origin }, { rotation: s, ease: easing, onComplete: function () { n.data("timeline").restart() } })) } }); n.find(".rs-slideloop").each(function () { var n = e(this); if (n.data("timeline") == t) { n.data("timeline", new punchgs.TimelineLite); var i = n.data("xs") == t ? 0 : n.data("xs"), s = n.data("ys") == t ? 0 : n.data("ys"), o = n.data("xe") == t ? 0 : n.data("xe"), u = n.data("ye") == t ? 0 : n.data("ye"), a = n.data("speed") == t ? 2 : n.data("speed"), f = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("easing"); i = i * r; s = s * r; o = o * r; u = u * r; n.data("timeline").append(new punchgs.TweenLite.fromTo(n, a, { force3D: "auto", x: i, y: s }, { x: o, y: u, ease: f })); n.data("timeline").append(new punchgs.TweenLite.fromTo(n, a, { force3D: "auto", x: o, y: u }, { x: i, y: s, onComplete: function () { n.data("timeline").restart() } })) } }); n.find(".rs-pulse").each(function () { var n = e(this); if (n.data("timeline") == t) { n.data("timeline", new punchgs.TimelineLite); var r = n.data("zoomstart") == t ? 0 : n.data("zoomstart"), i = n.data("zoomend") == t ? 0 : n.data("zoomend"), s = n.data("speed") == t ? 2 : n.data("speed"), o = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("easing"); n.data("timeline").append(new punchgs.TweenLite.fromTo(n, s, { force3D: "auto", scale: r }, { scale: i, ease: o })); n.data("timeline").append(new punchgs.TweenLite.fromTo(n, s, { force3D: "auto", scale: i }, { scale: r, onComplete: function () { n.data("timeline").restart() } })) } }); n.find(".rs-wave").each(function () { var n = e(this); if (n.data("timeline") == t) { n.data("timeline", new punchgs.TimelineLite); var i = n.data("angle") == t ? 10 : n.data("angle"), s = n.data("radius") == t ? 10 : n.data("radius"), o = n.data("speed") == t ? -20 : n.data("speed"), u = n.data("origin") == t ? -20 : n.data("origin"); i = i * r; s = s * r; var a = { a: 0, ang: i, element: n, unit: s }; n.data("timeline").append(new punchgs.TweenLite.fromTo(a, o, { a: 360 }, { a: 0, force3D: "auto", ease: punchgs.Linear.easeNone, onUpdate: function () { var e = a.a * (Math.PI / 180); punchgs.TweenLite.to(a.element, .1, { force3D: "auto", x: Math.cos(e) * a.unit, y: a.unit * (1 - Math.sin(e)) }) }, onComplete: function () { n.data("timeline").restart() } })) } }) }; var U = function (n) { n.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function () { var n = e(this); if (n.data("timeline") != t) { n.data("timeline").pause(); n.data("timeline", null) } }) }; var z = function (n, r) { var i = 0; var s = n.find(".tp-caption"), o = r.container.find(".tp-static-layers").find(".tp-caption"); e.each(o, function (e, t) { s.push(t) }); s.each(function (n) { var s = -1; var o = e(this); if (o.hasClass("tp-static-layer")) { if (o.data("startslide") == -1 || o.data("startslide") == "-1") o.data("startslide", 0); if (o.data("endslide") == -1 || o.data("endslide") == "-1") o.data("endslide", r.slideamount); if (o.hasClass("tp-is-shown")) { if (o.data("startslide") > r.next || o.data("endslide") < r.next) { s = 2; o.removeClass("tp-is-shown") } else { s = 0 } } else { s = 2 } } if (s != 0) { U(o); if (o.find("iframe").length > 0) { punchgs.TweenLite.to(o.find("iframe"), .2, { autoAlpha: 0 }); if (J()) o.find("iframe").remove(); try { var u = o.find("iframe"); var a = u.attr("id"); var f = $f(a); f.api("pause"); clearTimeout(o.data("timerplay")) } catch (l) { } try { var c = o.data("player"); c.stopVideo(); clearTimeout(o.data("timerplay")) } catch (l) { } } if (o.find("video").length > 0) { try { o.find("video").each(function (t) { var n = e(this).parent(); var r = n.attr("id"); clearTimeout(n.data("timerplay")); var i = this; i.pause() }) } catch (l) { } } try { var h = o.data("timeline"); var p = h.getLabelTime("frame99"); var d = h.time(); if (p > d) { var v = h.getTweensOf(o); e.each(v, function (e, t) { if (e != 0) t.pause() }); if (o.css("opacity") != 0) { var m = o.data("endspeed") == t ? o.data("speed") : o.data("endspeed"); if (m > i) i = m; h.play("frame99") } else h.progress(1, false) } } catch (l) { } } }); return i }; var W = function (e, n, r, i, s) { var o = e.data("timeline"); var u = new punchgs.TimelineLite; var a = e; if (r.typ == "chars") a = e.data("mySplitText").chars; else if (r.typ == "words") a = e.data("mySplitText").words; else if (r.typ == "lines") a = e.data("mySplitText").lines; r.animation.ease = r.ease; if (r.animation.rotationZ != t) r.animation.rotation = r.animation.rotationZ; r.animation.data = new Object; r.animation.data.oldx = r.animation.x; r.animation.data.oldy = r.animation.y; r.animation.x = r.animation.x * s; r.animation.y = r.animation.y * s; o.add(u.staggerTo(a, r.speed, r.animation, r.elementdelay), r.start); o.addLabel(i, r.start); e.data("timeline", o) }; var X = function (e, n, r, i, s, o) { var u = e.data("timeline"), a = new punchgs.TimelineLite; var f = P(), l = e.data("endspeed") == t ? e.data("speed") : e.data("endspeed"), c = e.attr("class"); f.ease = e.data("endeasing") == t ? punchgs.Power1.easeInOut : e.data("endeasing"); l = l / 1e3; if (c.match("ltr") || c.match("ltl") || c.match("str") || c.match("stl") || c.match("ltt") || c.match("ltb") || c.match("stt") || c.match("stb") || c.match("skewtoright") || c.match("skewtorightshort") || c.match("skewtoleft") || c.match("skewtoleftshort") || c.match("fadeout") || c.match("randomrotateout")) { if (c.match("skewtoright") || c.match("skewtorightshort")) f.skewX = 35; else if (c.match("skewtoleft") || c.match("skewtoleftshort")) f.skewX = -35; if (c.match("ltr") || c.match("skewtoright")) f.x = n.width + 60; else if (c.match("ltl") || c.match("skewtoleft")) f.x = 0 - (n.width + 60); else if (c.match("ltt")) f.y = 0 - (n.height + 60); else if (c.match("ltb")) f.y = n.height + 60; else if (c.match("str") || c.match("skewtorightshort")) { f.x = 50; f.opacity = 0 } else if (c.match("stl") || c.match("skewtoleftshort")) { f.x = -50; f.opacity = 0 } else if (c.match("stt")) { f.y = -50; f.opacity = 0 } else if (c.match("stb")) { f.y = 50; f.opacity = 0 } else if (c.match("randomrotateout")) { f.x = Math.random() * n.width; f.y = Math.random() * n.height; f.scale = Math.random() * 2 + .3; f.rotation = Math.random() * 360 - 180; f.opacity = 0 } else if (c.match("fadeout")) { f.opacity = 0 } if (c.match("skewtorightshort")) f.x = 270; else if (c.match("skewtoleftshort")) f.x = -270; f.data = new Object; f.data.oldx = f.x; f.data.oldy = f.y; f.x = f.x * o; f.y = f.y * o; f.overwrite = "auto"; var h = e; var h = e; if (e.data("splitout") == "chars") h = e.data("mySplitText").chars; else if (e.data("splitout") == "words") h = e.data("mySplitText").words; else if (e.data("splitout") == "lines") h = e.data("mySplitText").lines; var p = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay"); u.add(a.staggerTo(h, l, f, p), r) } else if (e.hasClass("customout")) { f = H(f, e.data("customout")); var h = e; if (e.data("splitout") == "chars") h = e.data("mySplitText").chars; else if (e.data("splitout") == "words") h = e.data("mySplitText").words; else if (e.data("splitout") == "lines") h = e.data("mySplitText").lines; var p = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay"); f.onStart = function () { punchgs.TweenLite.set(e, { transformPerspective: f.transformPerspective, transformOrigin: f.transformOrigin, overwrite: "auto" }) }; f.data = new Object; f.data.oldx = f.x; f.data.oldy = f.y; f.x = f.x * o; f.y = f.y * o; u.add(a.staggerTo(h, l, f, p), r) } else { i.delay = 0; u.add(punchgs.TweenLite.to(e, l, i), r) } u.addLabel(s, r); e.data("timeline", u) }; var V = function (t, n) { t.children().each(function () { try { e(this).die("click") } catch (t) { } try { e(this).die("mouseenter") } catch (t) { } try { e(this).die("mouseleave") } catch (t) { } try { e(this).unbind("hover") } catch (t) { } }); try { t.die("click", "mouseenter", "mouseleave") } catch (r) { } clearInterval(n.cdint); t = null }; var $ = function (n, r) { r.cd = 0; r.loop = 0; if (r.stopAfterLoops != t && r.stopAfterLoops > -1) r.looptogo = r.stopAfterLoops; else r.looptogo = 9999999; if (r.stopAtSlide != t && r.stopAtSlide > -1) r.lastslidetoshow = r.stopAtSlide; else r.lastslidetoshow = 999; r.stopLoop = "off"; if (r.looptogo == 0) r.stopLoop = "on"; if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide == 1)) { var i = n.find(".tp-bannertimer"); n.on("stoptimer", function () { var t = e(this).find(".tp-bannertimer"); t.data("tween").pause(); if (r.hideTimerBar == "on") t.css({ visibility: "hidden" }) }); n.on("starttimer", function () { if (r.conthover != 1 && r.videoplaying != true && r.width > r.hideSliderAtLimit && r.bannertimeronpause != true && r.overnav != true) if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1 || r.noloopanymore == 1) r.noloopanymore = 1; else { i.css({ visibility: "visible" }); i.data("tween").resume() } if (r.hideTimerBar == "on") i.css({ visibility: "hidden" }) }); n.on("restarttimer", function () { var t = e(this).find(".tp-bannertimer"); if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1 || r.noloopanymore == 1) r.noloopanymore = 1; else { t.css({ visibility: "visible" }); t.data("tween").kill(); t.data("tween", punchgs.TweenLite.fromTo(t, r.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: s, delay: 1 })) } if (r.hideTimerBar == "on") t.css({ visibility: "hidden" }) }); n.on("nulltimer", function () { i.data("tween").pause(0); if (r.hideTimerBar == "on") i.css({ visibility: "hidden" }) }); var s = function () { if (e("body").find(n).length == 0) { V(n, r); clearInterval(r.cdint) } n.trigger("revolution.slide.slideatend"); if (n.data("conthover-changed") == 1) { r.conthover = n.data("conthover"); n.data("conthover-changed", 0) } r.act = r.next; r.next = r.next + 1; if (r.next > n.find(">ul >li").length - 1) { r.next = 0; r.looptogo = r.looptogo - 1; if (r.looptogo <= 0) { r.stopLoop = "on" } } if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) { n.find(".tp-bannertimer").css({ visibility: "hidden" }); n.trigger("revolution.slide.onstop"); r.noloopanymore = 1 } else { i.data("tween").restart() } N(n, r) }; i.data("tween", punchgs.TweenLite.fromTo(i, r.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: s, delay: 1 })); i.data("opt", r); n.hover(function () { if (r.onHoverStop == "on" && !J()) { n.trigger("stoptimer"); n.trigger("revolution.slide.onpause"); var i = n.find(">ul >li:eq(" + r.next + ") .slotholder"); i.find(".defaultimg").each(function () { var n = e(this); if (n.data("kenburn") != t) { n.data("kenburn").pause() } }) } }, function () { if (n.data("conthover") != 1) { n.trigger("revolution.slide.onresume"); n.trigger("starttimer"); var i = n.find(">ul >li:eq(" + r.next + ") .slotholder"); i.find(".defaultimg").each(function () { var n = e(this); if (n.data("kenburn") != t) { n.data("kenburn").play() } }) } }) } }; var J = function () { var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"]; var t = false; for (var n in e) { if (navigator.userAgent.split(e[n]).length > 1) { t = true } } return t }; var K = function (e, t, n) { var r = t.data("owidth"); var i = t.data("oheight"); if (r / i > n.width / n.height) { var s = n.container.width() / r; var o = i * s; var u = o / n.container.height() * e; e = e * (100 / u); u = 100; e = e; return e + "% " + u + "%" + " 1" } else { var s = n.container.width() / r; var o = i * s; var u = o / n.container.height() * e; return e + "% " + u + "%" } }; var Q = function (n, r, i, s) { try { var o = n.find(">ul:first-child >li:eq(" + r.act + ")") } catch (u) { var o = n.find(">ul:first-child >li:eq(1)") } r.lastslide = r.act; var f = n.find(">ul:first-child >li:eq(" + r.next + ")"), l = f.find(".slotholder"), c = l.data("bgposition"), h = l.data("bgpositionend"), p = l.data("zoomstart") / 100, d = l.data("zoomend") / 100, v = l.data("rotationstart"), m = l.data("rotationend"), g = l.data("bgfit"), y = l.data("bgfitend"), b = l.data("easeme"), w = l.data("duration") / 1e3, E = 100; if (g == t) g = 100; if (y == t) y = 100; var S = g, x = y; g = K(g, l, r); y = K(y, l, r); E = K(100, l, r); if (p == t) p = 1; if (d == t) d = 1; if (v == t) v = 0; if (m == t) m = 0; if (p < 1) p = 1; if (d < 1) d = 1; var T = new Object; T.w = parseInt(E.split(" ")[0], 0), T.h = parseInt(E.split(" ")[1], 0); var N = false; if (E.split(" ")[2] == "1") { N = true } l.find(".defaultimg").each(function () { var t = e(this); if (l.find(".kenburnimg").length == 0) l.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + t.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + T.w + "%;height:" + T.h + '%;"></div>'); else { l.find(".kenburnimg img").css({ width: T.w + "%", height: T.h + "%" }) } var n = l.find(".kenburnimg img"); var i = G(r, c, g, n, N), o = G(r, h, y, n, N); if (N) { i.w = S / 100; o.w = x / 100 } if (s) { punchgs.TweenLite.set(n, { autoAlpha: 0, transformPerspective: 1200, transformOrigin: "0% 0%", top: 0, left: 0, scale: i.w, x: i.x, y: i.y }); var u = i.w, f = u * n.width() - r.width, p = u * n.height() - r.height, d = Math.abs(i.x / f * 100), v = Math.abs(i.y / p * 100); if (p == 0) v = 0; if (f == 0) d = 0; t.data("bgposition", d + "% " + v + "%"); if (!a(8)) t.data("currotate", Y(n)); if (!a(8)) t.data("curscale", T.w * u + "%  " + (T.h * u + "%")); l.find(".kenburnimg").remove() } else t.data("kenburn", punchgs.TweenLite.fromTo(n, w, { autoAlpha: 1, force3D: punchgs.force3d, transformOrigin: "0% 0%", top: 0, left: 0, scale: i.w, x: i.x, y: i.y }, { autoAlpha: 1, rotationZ: m, ease: b, x: o.x, y: o.y, scale: o.w, onUpdate: function () { var e = n[0]._gsTransform.scaleX; var i = e * n.width() - r.width, s = e * n.height() - r.height, o = Math.abs(n[0]._gsTransform.x / i * 100), u = Math.abs(n[0]._gsTransform.y / s * 100); if (s == 0) u = 0; if (i == 0) o = 0; t.data("bgposition", o + "% " + u + "%"); if (!a(8)) t.data("currotate", Y(n)); if (!a(8)) t.data("curscale", T.w * e + "%  " + (T.h * e + "%")) } })) }) }; var G = function (e, t, n, r, i) { var s = new Object; if (!i) s.w = parseInt(n.split(" ")[0], 0) / 100; else s.w = parseInt(n.split(" ")[1], 0) / 100; switch (t) { case "left top": case "top left": s.x = 0; s.y = 0; break; case "center top": case "top center": s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) / 2; s.y = 0; break; case "top right": case "right top": s.x = (0 - r.width()) * s.w + parseInt(e.width, 0); s.y = 0; break; case "center left": case "left center": s.x = 0; s.y = ((0 - r.height()) * s.w + parseInt(e.height, 0)) / 2; break; case "center center": s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) / 2; s.y = ((0 - r.height()) * s.w + parseInt(e.height, 0)) / 2; break; case "center right": case "right center": s.x = (0 - r.width()) * s.w + parseInt(e.width, 0); s.y = ((0 - r.height()) * s.w + parseInt(e.height, 0)) / 2; break; case "bottom left": case "left bottom": s.x = 0; s.y = (0 - r.height()) * s.w + parseInt(e.height, 0); break; case "bottom center": case "center bottom": s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) / 2; s.y = (0 - r.height()) * s.w + parseInt(e.height, 0); break; case "bottom right": case "right bottom": s.x = (0 - r.width()) * s.w + parseInt(e.width, 0); s.y = (0 - r.height()) * s.w + parseInt(e.height, 0); break }return s }; var Y = function (e) { var t = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform"); if (t !== "none") { var n = t.split("(")[1].split(")")[0].split(","); var r = n[0]; var i = n[1]; var s = Math.round(Math.atan2(i, r) * (180 / Math.PI)) } else { var s = 0 } return s < 0 ? s += 360 : s }; var Z = function (n, r) { try { var i = n.find(">ul:first-child >li:eq(" + r.act + ")") } catch (s) { var i = n.find(">ul:first-child >li:eq(1)") } r.lastslide = r.act; var o = n.find(">ul:first-child >li:eq(" + r.next + ")"); var u = i.find(".slotholder"); var a = o.find(".slotholder"); n.find(".defaultimg").each(function () { var n = e(this); punchgs.TweenLite.killTweensOf(n, false); punchgs.TweenLite.set(n, { scale: 1, rotationZ: 0 }); punchgs.TweenLite.killTweensOf(n.data("kenburn img"), false); if (n.data("kenburn") != t) { n.data("kenburn").pause() } if (n.data("currotate") != t && n.data("bgposition") != t && n.data("curscale") != t) punchgs.TweenLite.set(n, { rotation: n.data("currotate"), backgroundPosition: n.data("bgposition"), backgroundSize: n.data("curscale") }); if (n != t && n.data("kenburn img") != t && n.data("kenburn img").length > 0) punchgs.TweenLite.set(n.data("kenburn img"), { autoAlpha: 0 }) }) }; var et = function (t, n) { if (J() && n.parallaxDisableOnMobile == "on") return false; t.find(">ul:first-child >li").each(function () { var t = e(this); for (var r = 1; r <= 10; r++)t.find(".rs-parallaxlevel-" + r).each(function () { var t = e(this); t.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + t.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + n.parallaxLevels[r - 1] + '"></div>') }) }); if (n.parallax == "mouse" || n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") { t.mouseenter(function (e) { var n = t.find(".current-sr-slide-visible"); var r = t.offset().top, i = t.offset().left, s = e.pageX - i, o = e.pageY - r; n.data("enterx", s); n.data("entery", o) }); t.on("mousemove.hoverdir, mouseleave.hoverdir", function (r) { var i = t.find(".current-sr-slide-visible"); switch (r.type) { case "mousemove": var s = t.offset().top, o = t.offset().left, u = i.data("enterx"), a = i.data("entery"), f = u - (r.pageX - o), l = a - (r.pageY - s); i.find(".tp-parallax-container").each(function () { var t = e(this), r = parseInt(t.data("parallaxlevel"), 0) / 100, i = f * r, s = l * r; if (n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") punchgs.TweenLite.to(t, .4, { force3D: "auto", x: i, ease: punchgs.Power3.easeOut, overwrite: "all" }); else punchgs.TweenLite.to(t, .4, { force3D: "auto", x: i, y: s, ease: punchgs.Power3.easeOut, overwrite: "all" }) }); break; case "mouseleave": i.find(".tp-parallax-container").each(function () { var t = e(this); if (n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") punchgs.TweenLite.to(t, 1.5, { force3D: "auto", x: 0, ease: punchgs.Power3.easeOut }); else punchgs.TweenLite.to(t, 1.5, { force3D: "auto", x: 0, y: 0, ease: punchgs.Power3.easeOut }) }); break } }); if (J()) window.ondeviceorientation = function (n) { var r = Math.round(n.beta || 0), i = Math.round(n.gamma || 0); var s = t.find(".current-sr-slide-visible"); if (e(window).width() > e(window).height()) { var o = i; i = r; r = o } var u = 360 / t.width() * i, a = 180 / t.height() * r; s.find(".tp-parallax-container").each(function () { var t = e(this), n = parseInt(t.data("parallaxlevel"), 0) / 100, r = u * n, i = a * n; punchgs.TweenLite.to(t, .2, { force3D: "auto", x: r, y: i, ease: punchgs.Power3.easeOut }) }) } } if (n.parallax == "scroll" || n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") { e(window).on("scroll", function (e) { tt(t, n) }) } }; var tt = function (t, n) { if (J() && n.parallaxDisableOnMobile == "on") return false; var r = t.offset().top, i = e(window).scrollTop(), s = r + t.height() / 2, o = r + t.height() / 2 - i, u = e(window).height() / 2, a = u - o; if (s < u) a = a - (u - s); var f = t.find(".current-sr-slide-visible"); t.find(".tp-parallax-container").each(function (t) { var n = e(this), r = parseInt(n.data("parallaxlevel"), 0) / 100, i = a * r; n.data("parallaxoffset", i); punchgs.TweenLite.to(n, .2, { force3D: "auto", y: i, ease: punchgs.Power3.easeOut }) }); if (n.parallaxBgFreeze != "on") { var l = n.parallaxLevels[0] / 100, c = a * l; punchgs.TweenLite.to(t, .2, { force3D: "auto", y: c, ease: punchgs.Power3.easeOut }) } }; var nt = function (n, r) { var i = n.parent(); if (r.navigationType == "thumb" || r.navsecond == "both") { i.append('<div class="tp-bullets tp-thumbs ' + r.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>') } var s = i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"); var o = s.parent(); o.width(r.thumbWidth * r.thumbAmount); o.height(r.thumbHeight); o.parent().width(r.thumbWidth * r.thumbAmount); o.parent().height(r.thumbHeight); n.find(">ul:first >li").each(function (e) { var i = n.find(">ul:first >li:eq(" + e + ")"); var o = i.find(".defaultimg").css("backgroundColor"); if (i.data("thumb") != t) var u = i.data("thumb"); else var u = i.find("img:first").attr("src"); s.append('<div class="bullet thumb" style="background-color:' + o + ";position:relative;width:" + r.thumbWidth + "px;height:" + r.thumbHeight + "px;background-image:url(" + u + ') !important;background-size:cover;background-position:center center;"></div>'); var a = s.find(".bullet:first") }); var u = 10; s.find(".bullet").each(function (t) { var i = e(this); if (t == r.slideamount - 1) i.addClass("last"); if (t == 0) i.addClass("first"); i.width(r.thumbWidth); i.height(r.thumbHeight); if (u < i.outerWidth(true)) u = i.outerWidth(true); i.click(function () { if (r.transition == 0 && i.index() != r.act) { r.next = i.index(); f(r, n) } }) }); var a = u * n.find(">ul:first >li").length; var l = s.parent().width(); r.thumbWidth = u; if (l < a) { e(document).mousemove(function (t) { e("body").data("mousex", t.pageX) }); s.parent().mouseenter(function () { var t = e(this); var r = t.offset(), i = e("body").data("mousex") - r.left, s = t.width(), o = t.find(".bullet:first").outerWidth(true), u = o * n.find(">ul:first >li").length, a = u - s + 15, f = a / s; t.addClass("over"); i = i - 30; var l = 0 - i * f; if (l > 0) l = 0; if (l < 0 - u + s) l = 0 - u + s; it(t, l, 200) }); s.parent().mousemove(function () { var t = e(this), r = t.offset(), i = e("body").data("mousex") - r.left, s = t.width(), o = t.find(".bullet:first").outerWidth(true), u = o * n.find(">ul:first >li").length - 1, a = u - s + 15, f = a / s; i = i - 3; if (i < 6) i = 0; if (i + 3 > s - 6) i = s; var l = 0 - i * f; if (l > 0) l = 0; if (l < 0 - u + s) l = 0 - u + s; it(t, l, 0) }); s.parent().mouseleave(function () { var t = e(this); t.removeClass("over"); rt(n) }) } }; var rt = function (e) { var t = e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"), n = t.parent(), r = n.offset(), i = n.find(".bullet:first").outerWidth(true), s = n.find(".bullet.selected").index() * i, o = n.width(), i = n.find(".bullet:first").outerWidth(true), u = i * e.find(">ul:first >li").length, a = u - o, f = a / o, l = 0 - s; if (l > 0) l = 0; if (l < 0 - u + o) l = 0 - u + o; if (!n.hasClass("over")) { it(n, l, 200) } }; var it = function (e, t, n) { punchgs.TweenLite.to(e.find(".tp-thumbcontainer"), .2, { force3D: "auto", left: t, ease: punchgs.Power3.easeOut, overwrite: "auto" }) } })(jQuery)
	/* https://www.vtmteknik.com/templates/porto/3.4.0/circle-flip-slideshow/1.0.0/js/jquery.flipshow.js */
	/**
	 * jquery.flipshow.js v1.0.0
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 *
	 * Copyright 2013, Codrops
	 * http://www.codrops.com
	 */
	; (function ($, window, undefined) {

		'use strict';

		// ======================= imagesLoaded Plugin ===============================
		// https://github.com/desandro/imagesloaded

		// $('#my-container').imagesLoaded(myFunction)
		// execute a callback when all images have loaded.
		// needed because .load() doesn't work on cached images

		// callback function gets image collection as argument
		//  this is the container

		// original: mit license. paul irish. 2010.
		// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

		// blank image data-uri bypasses webkit log warning (thx doug jones)
		// blank image data-uri bypasses webkit log warning (thx doug jones)
		var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP/' + '/' + '/ywAAAAAAQABAAACAUwAOw==';

		$.fn.imagesLoaded = function (callback) {
			var $this = this,
				deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
				hasNotify = $.isFunction(deferred.notify),
				$images = $this.find('img').add($this.filter('img')),
				loaded = [],
				proper = [],
				broken = [];

			// Register deferred callbacks
			if ($.isPlainObject(callback)) {
				$.each(callback, function (key, value) {
					if (key === 'callback') {
						callback = value;
					} else if (deferred) {
						deferred[key](value);
					}
				});
			}

			function doneLoading() {
				var $proper = $(proper),
					$broken = $(broken);

				if (deferred) {
					if (broken.length) {
						deferred.reject($images, $proper, $broken);
					} else {
						deferred.resolve($images);
					}
				}

				if ($.isFunction(callback)) {
					callback.call($this, $images, $proper, $broken);
				}
			}

			function imgLoadedHandler(event) {
				imgLoaded(event.target, event.type === 'error');
			}

			function imgLoaded(img, isBroken) {
				// don't proceed if BLANK image, or image is already loaded
				if (img.src === BLANK || $.inArray(img, loaded) !== -1) {
					return;
				}

				// store element in loaded images array
				loaded.push(img);

				// keep track of broken and properly loaded images
				if (isBroken) {
					broken.push(img);
				} else {
					proper.push(img);
				}

				// cache image and its state for future calls
				$.data(img, 'imagesLoaded', { isBroken: isBroken, src: img.src });

				// trigger deferred progress method if present
				if (hasNotify) {
					deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
				}

				// call doneLoading and clean listeners if all images are loaded
				if ($images.length === loaded.length) {
					setTimeout(doneLoading);
					$images.unbind('.imagesLoaded', imgLoadedHandler);
				}
			}

			// if no images, trigger immediately
			if (!$images.length) {
				doneLoading();
			} else {
				$images.bind('load.imagesLoaded error.imagesLoaded', imgLoadedHandler)
					.each(function (i, el) {
						var src = el.src;

						// find out if this image has been already checked for status
						// if it was, and src has not changed, call imgLoaded on it
						var cached = $.data(el, 'imagesLoaded');
						if (cached && cached.src === src) {
							imgLoaded(el, cached.isBroken);
							return;
						}

						// if complete is true and browser supports natural sizes, try
						// to check for image status manually
						if (el.complete && el.naturalWidth !== undefined) {
							imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
							return;
						}

						// cached images don't fire load sometimes, so we reset src, but only when
						// dealing with IE, or image is complete (loaded) and failed manual check
						// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
						if (el.readyState || el.complete) {
							el.src = BLANK;
							el.src = src;
						}
					});
			}

			return deferred ? deferred.promise($this) : $this;
		};

		// global
		var Modernizr = window.Modernizr;

		$.Flipshow = function (options, element) {
			this.$el = $(element);
			this._init(options);
		};

		// the options
		$.Flipshow.defaults = {
			// default transition speed (ms)
			speed: 700,
			// default transition easing
			easing: 'ease-out'
		};

		$.Flipshow.prototype = {
			_init: function (options) {

				// options
				this.options = $.extend(true, {}, $.Flipshow.defaults, options);
				// support for CSS Transitions & 3D transforms
				this.support = Modernizr.csstransitions && Modernizr.csstransforms3d && !(/MSIE (\d+\.\d+);/.test(navigator.userAgent));
				// transition end event name and transform name
				var transEndEventNames = {
					'WebkitTransition': 'webkitTransitionEnd',
					'MozTransition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'msTransition': 'MSTransitionEnd',
					'transition': 'transitionend'
				},
					transformNames = {
						'WebkitTransform': '-webkit-transform',
						'MozTransform': '-moz-transform',
						'OTransform': '-o-transform',
						'msTransform': '-ms-transform',
						'transform': 'transform'
					};

				if (this.support) {
					this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.cbpFWSlider';
					this.transformName = transformNames[Modernizr.prefixed('transform')];
				}
				this.transitionProperties = this.transformName + ' ' + this.options.speed + 'ms ' + this.options.easing;

				// the list of items
				this.$listItems = this.$el.children('ul.fc-slides');
				// the items
				this.$items = this.$listItems.children('li').hide();
				// total number of items
				this.itemsCount = this.$items.length;
				// current item´s index
				this.current = 0;
				this.$listItems.imagesLoaded($.proxy(function () {
					// show first item
					this.$items.eq(this.current).show();
					// add navigation and flipping structure
					if (this.itemsCount > 0) {
						this._addNav();
						if (this.support) {
							this._layout();
						}
					}
				}, this));

			},
			_addNav: function () {

				var self = this,
					$navLeft = $('<div class="fc-left"><span></span><span></span><span></span><i class="fa fa-arrow-left"></i></div>'),
					$navRight = $('<div class="fc-right"><span></span><span></span><span></span><i class="fa fa-arrow-right"></i></div>');

				$('<nav></nav>').append($navLeft, $navRight).appendTo(this.$el);

				$navLeft.find('span').on('click.flipshow touchstart.flipshow', function () {
					self._navigate($(this), 'left');
				});

				$navRight.find('span').on('click.flipshow touchstart.flipshow', function () {
					self._navigate($(this), 'right');
				});

			},
			_layout: function ($current, $next) {

				this.$flipFront = $('<div class="fc-front"><div></div></div>');
				this.$frontContent = this.$flipFront.children('div:first');
				this.$flipBack = $('<div class="fc-back"><div></div></div>');
				this.$backContent = this.$flipBack.children('div:first');
				this.$flipEl = $('<div class="fc-flip"></div>').append(this.$flipFront, this.$flipBack).hide().appendTo(this.$el);

			},
			_navigate: function ($nav, dir) {

				if (this.isAnimating && this.support) {
					return false;
				}
				this.isAnimating = true;

				var $currentItem = this.$items.eq(this.current).hide();

				if (dir === 'right') {
					this.current < this.itemsCount - 1 ? ++this.current : this.current = 0;
				}
				else if (dir === 'left') {
					this.current > 0 ? --this.current : this.current = this.itemsCount - 1;
				}

				var $nextItem = this.$items.eq(this.current);

				if (this.support) {
					this._flip($currentItem, $nextItem, dir, $nav.index());
				}
				else {
					$nextItem.show();
				}

			},
			_flip: function ($currentItem, $nextItem, dir, angle) {

				var transformProperties = '',
					// overlays
					$overlayLight = $('<div class="fc-overlay-light"></div>'),
					$overlayDark = $('<div class="fc-overlay-dark"></div>');

				this.$flipEl.css('transition', this.transitionProperties);

				this.$flipFront.find('div.fc-overlay-light, div.fc-overlay-dark').remove();
				this.$flipBack.find('div.fc-overlay-light, div.fc-overlay-dark').remove();

				if (dir === 'right') {
					this.$flipFront.append($overlayLight);
					this.$flipBack.append($overlayDark);
					$overlayDark.css('opacity', 1);
				}
				else if (dir === 'left') {
					this.$flipFront.append($overlayDark);
					this.$flipBack.append($overlayLight);
					$overlayLight.css('opacity', 1);
				}
				var overlayStyle = { transition: 'opacity ' + (this.options.speed / 1.3) + 'ms' };
				$overlayLight.css(overlayStyle);
				$overlayDark.css(overlayStyle);

				switch (angle) {
					case 0:
						transformProperties = dir === 'left' ? 'rotate3d(-1,1,0,-179deg) rotate3d(-1,1,0,-1deg)' : 'rotate3d(1,1,0,180deg)';
						break;
					case 1:
						transformProperties = dir === 'left' ? 'rotate3d(0,1,0,-179deg) rotate3d(0,1,0,-1deg)' : 'rotate3d(0,1,0,180deg)';
						break;
					case 2:
						transformProperties = dir === 'left' ? 'rotate3d(1,1,0,-179deg) rotate3d(1,1,0,-1deg)' : 'rotate3d(-1,1,0,179deg) rotate3d(-1,1,0,1deg)';
						break;
				}

				this.$flipBack.css('transform', transformProperties);

				this.$frontContent.empty().html($currentItem.html());
				this.$backContent.empty().html($nextItem.html());
				this.$flipEl.show();

				var self = this;
				setTimeout(function () {

					self.$flipEl.css('transform', transformProperties);
					$overlayLight.css('opacity', dir === 'right' ? 1 : 0);
					$overlayDark.css('opacity', dir === 'right' ? 0 : 1);
					self.$flipEl.on(self.transEndEventName, function (event) {
						if (event.target.className === 'fc-overlay-light' || event.target.className === 'fc-overlay-dark') return;
						self._ontransitionend($nextItem);
					});

				}, 25);

			},
			_ontransitionend: function ($nextItem) {
				$nextItem.show();
				this.$flipEl.off(this.transEndEventName).css({
					transition: 'none',
					transform: 'none'
				}).hide();
				this.isAnimating = false;
			}
		};

		var logError = function (message) {
			if (window.console) {
				window.console.error(message);
			}
		};

		$.fn.flipshow = function (options) {
			if (typeof options === 'string') {
				var args = Array.prototype.slice.call(arguments, 1);
				this.each(function () {
					var instance = $.data(this, 'flipshow');
					if (!instance) {
						logError("cannot call methods on flipshow prior to initialization; " +
							"attempted to call method '" + options + "'");
						return;
					}
					if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
						logError("no such method '" + options + "' for flipshow instance");
						return;
					}
					instance[options].apply(instance, args);
				});
			}
			else {
				this.each(function () {
					var instance = $.data(this, 'flipshow');
					if (instance) {
						instance._init();
					}
					else {
						instance = $.data(this, 'flipshow', new $.Flipshow(options, this));
					}
				});
			}
			return this;
		};

	})(jQuery, window);
/* https://www.vtmteknik.com/custom/www.deltaservis.com.tr/js/theme.js */
/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	3.7.0
*/

// Theme
window.theme = {};

// Animate
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__animate';

	var PluginAnimate = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginAnimate.defaults = {
		accX: 0,
		accY: -150,
		delay: 1
	};

	PluginAnimate.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			var self = this,
				$el = this.options.wrapper,
				delay = 0;

			$el.addClass('appear-animation');

			if (!$('html').hasClass('no-csstransitions') && $(window).width() > 767) {

				$el.appear(function () {

					delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

					if (delay > 1) {
						$el.css('animation-delay', delay + 'ms');
					}

					$el.addClass($el.attr('data-appear-animation'));

					setTimeout(function () {
						$el.addClass('appear-animation-visible');
					}, delay);

				}, {
					accX: self.options.accX,
					accY: self.options.accY
				});

			} else {

				$el.addClass('appear-animation-visible');

			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginAnimate: PluginAnimate
	});

	// jquery plugin
	$.fn.themePluginAnimate = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginAnimate($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Carousel
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__carousel';

	var PluginCarousel = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCarousel.defaults = {
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 2
			},
			979: {
				items: 3
			},
			1199: {
				items: 4
			}
		}
	};

	PluginCarousel.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.owlCarousel))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				activeItemHeight = 0;

			// Force RTL according to HTML dir attribute
			if ($('html').attr('dir') == 'rtl') {
				this.options = $.extend(true, {}, this.options, {
					rtl: true
				});
			}

			if (this.options.items == 1) {
				this.options.responsive = {}
			}

			if (this.options.items > 4) {
				this.options = $.extend(true, {}, this.options, {
					responsive: {
						1199: {
							items: this.options.items
						}
					}
				});
			}

			// Auto Height
			$(window).afterResize(function () {
				activeItemHeight = $el.find('.owl-item.active').height();
				$el.find('.owl-stage-outer').height(activeItemHeight);
			});

			this.options.wrapper.owlCarousel(this.options).addClass("owl-carousel-init");

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCarousel: PluginCarousel
	});

	// jquery plugin
	$.fn.themePluginCarousel = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCarousel($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Chart Circular
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__chartCircular';

	var PluginChartCircular = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginChartCircular.defaults = {
		accX: 0,
		accY: -150,
		delay: 1,
		barColor: '#0088CC',
		trackColor: '#f2f2f2',
		scaleColor: false,
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 13,
		size: 175,
		rotate: 0,
		animate: ({
			duration: 2500,
			enabled: true
		})
	};

	PluginChartCircular.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.appear)) || !($.isFunction($.fn.easyPieChart))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
				percentEl = $el.find('.percent');

			$.extend(true, self.options, {
				onStep: function (from, to, currentValue) {
					percentEl.html(parseInt(currentValue));
				}
			});

			$el.attr('data-percent', 0);

			$el.appear(function () {

				$el.easyPieChart(self.options);

				setTimeout(function () {

					$el.data('easyPieChart').update(value);
					$el.attr('data-percent', value);

				}, self.options.delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginChartCircular: PluginChartCircular
	});

	// jquery plugin
	$.fn.themePluginChartCircular = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginChartCircular($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Counter
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__counter';

	var PluginCounter = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCounter.defaults = {
		accX: 0,
		accY: 0,
		speed: 3000,
		refreshInterval: 100,
		decimals: 0,
		onUpdate: null,
		onComplete: null
	};

	PluginCounter.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.countTo))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			$.extend(self.options, {
				onComplete: function () {
					if ($el.data('append')) {
						$el.html($el.html() + $el.data('append'));
					}

					if ($el.data('prepend')) {
						$el.html($el.data('prepend') + $el.html());
					}
				}
			});

			$el.appear(function () {

				$el.countTo(self.options);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCounter: PluginCounter
	});

	// jquery plugin
	$.fn.themePluginCounter = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCounter($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Flickr
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__flickr';

	var PluginFlickr = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginFlickr.defaults = {
		flickrbase: 'http://api.flickr.com/services/feeds/',
		feedapi: 'photos_public.gne',
		limit: 6,
		qstrings: {
			lang: 'en-us',
			format: 'json',
			jsoncallback: '?'
		},
		cleanDescription: true,
		useTemplate: true,
		itemTemplate: '<li><a href="{{image_b}}" title="{{title}}"><span class="thumbnail"><img src="{{image_s}}" /></span></a></li>',
		itemCallback: function () { }
	};

	PluginFlickr.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginFlickr.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.jflickrfeed)) || !($.isFunction($.fn.magnificPopup))) {
				return this;
			}

			var self = this;

			self.options.wrapper.jflickrfeed(this.options, function (data) {

				self.options.wrapper.magnificPopup({
					delegate: 'a',
					type: 'image',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0, 1]
					},
					zoom: {
						enabled: true,
						duration: 300,
						opener: function (element) {
							return element.find('img');
						}
					}
				});

			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginFlickr: PluginFlickr
	});

	// jquery plugin
	$.fn.themePluginFlickr = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginFlickr($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Lightbox
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__lightbox';

	var PluginLightbox = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLightbox.defaults = {
		tClose: 'Close (Esc)', // Alt text on close button
		tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
		gallery: {
			tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
			tNext: 'Next (Right arrow key)', // Alt text on right arrow
			tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
		},
		image: {
			tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
		},
		ajax: {
			tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
		}
	};

	PluginLightbox.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.magnificPopup))) {
				return this;
			}

			this.options.wrapper.magnificPopup(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLightbox: PluginLightbox
	});

	// jquery plugin
	$.fn.themePluginLightbox = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLightbox($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Masonry
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__masonry';

	var PluginMasonry = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMasonry.defaults = {
		itemSelector: 'li',
		layoutMode: 'fitRows'
	};

	PluginMasonry.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			this.options.wrapper.isotope(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginMasonry: PluginMasonry
	});

	// jquery plugin
	$.fn.themePluginMasonry = function (opts) {
		return this.map(function () {
			var $this = $(this);

			$this.waitForImages(function () {
				if ($this.data(instanceName)) {
					return $this.data(instanceName);
				} else {
					return new PluginMasonry($this, opts);
				}
			});

		});
	}

}).apply(this, [window.theme, jQuery]);

// Parallax
(function (theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginParallax: {

			defaults: {
				itemsSelector: '.parallax',
				horizontalScrolling: false
			},

			initialize: function (opts) {

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function () {
				if (!($.isFunction($.fn.stellar)) || typeof (Modernizr.touch) == 'undefined') {
					return this;
				}

				var self = this;

				$(window).load(function () {

					if (!Modernizr.touch) {
						$.stellar(self.options).addClass('parallax-ready');
					} else {
						$(self.options.itemsSelector).addClass('parallax-disabled');
					}

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Progress Bar
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__progressBar';

	var PluginProgressBar = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginProgressBar.defaults = {
		accX: 0,
		accY: -50,
		delay: 1
	};

	PluginProgressBar.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.appear))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				delay = 1;

			$el.appear(function () {

				delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

				$el.addClass($el.attr('data-appear-animation'));

				setTimeout(function () {

					$el.animate({
						width: $el.attr('data-appear-progress-animation')
					}, 1500, 'easeOutQuad', function () {
						$el.find('.progress-bar-tooltip').animate({
							opacity: 1
						}, 500, 'easeOutQuad');
					});

				}, delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginProgressBar: PluginProgressBar
	});

	// jquery plugin
	$.fn.themePluginProgressBar = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginProgressBar($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Revolution Slider
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__revolution';

	var PluginRevolutionSlider = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginRevolutionSlider.defaults = {
		dottedOverlay: 'none',
		delay: 9000,
		startwidth: 1170,
		startheight: 500,
		hideThumbs: 200,

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 3,

		navigationType: 'none',
		navigationArrows: 'solo',
		navigationStyle: 'round',

		touchenabled: 'on',
		onHoverStop: 'on',

		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,

		keyboardNavigation: 'on',

		navigationHAlign: 'center',
		navigationVAlign: 'bottom',
		navigationHOffset: 0,
		navigationVOffset: 20,

		soloArrowLeftHalign: 'left',
		soloArrowLeftValign: 'center',
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: 'right',
		soloArrowRightValign: 'center',
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,

		shadow: 0,
		fullWidth: 'on',
		fullScreen: 'off',

		spinner: 'spinner0',

		stopLoop: 'off',
		stopAfterLoops: -1,
		stopAtSlide: -1,

		shuffle: 'off',

		autoHeight: 'off',
		forceFullWidth: 'off',

		hideThumbsOnMobile: 'off',
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: 'off',
		hideArrowsOnMobile: 'off',
		hideThumbsUnderResolution: 0,

		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		startWithSlide: 0
	};

	PluginRevolutionSlider.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.revolution))) {
				return this;
			}

			this.options.wrapper.revolution(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginRevolutionSlider: PluginRevolutionSlider
	});

	// jquery plugin
	$.fn.themePluginRevolutionSlider = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginRevolutionSlider($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function (theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginScrollToTop: {

			defaults: {
				wrapper: $('body'),
				offset: 150,
				buttonClass: 'scroll-to-top',
				iconClass: 'fa fa-chevron-up',
				delay: 500,
				visibleMobile: false,
				label: false
			},

			initialize: function (opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function () {
				var self = this,
					$el;

				// Base HTML Markup
				$el = $('<a />')
					.addClass(self.options.buttonClass)
					.attr({
						'href': '#',
					})
					.append(
						$('<i />')
							.addClass(self.options.iconClass)
					);

				// Visible Mobile
				if (!self.options.visibleMobile) {
					$el.addClass('hidden-mobile');
				}

				// Label
				if (self.options.label) {
					$el.append(
						$('<span />').html(self.options.label)
					);
				}

				this.options.wrapper.append($el);

				this.$el = $el;

				return this;
			},

			events: function () {
				var self = this,
					_isScrolling = false;

				// Click Element Action
				self.$el.on('click', function (e) {
					e.preventDefault();
					$('body, html').animate({
						scrollTop: 0
					}, self.options.delay);
					return false;
				});

				// Show/Hide Button on Window Scroll event.
				$(window).scroll(function () {

					if (!_isScrolling) {

						_isScrolling = true;

						if ($(window).scrollTop() > self.options.offset) {

							self.$el.stop(true, true).addClass('visible');
							_isScrolling = false;

						} else {

							self.$el.stop(true, true).removeClass('visible');
							_isScrolling = false;

						}

					}

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Sort
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__sort';

	var PluginSort = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSort.defaults = {
		useHash: true,
		itemSelector: 'li',
		layoutMode: 'masonry',
		filter: '*'
	};

	PluginSort.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginSort.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			var self = this,
				$source = this.options.wrapper,
				$destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]');

			if ($destination.get(0)) {

				self.$source = $source;
				self.$destination = $destination;

				self.setParagraphHeight($destination);

				$(window).load(function () {

					$destination.isotope(self.options).isotope('layout');

					self.$destination.isotope('on', 'layoutComplete', function (isoInstance, laidOutItems) {
						if (self.options.useHash || typeof (isoInstance.options.filter != 'undefined')) {
							if (window.location.hash != '' || isoInstance.options.filter.replace('.', '') != '*') {
								window.location.hash = isoInstance.options.filter.replace('.', '');
							}
						}
					});

					self.events();

				});

			}

			return this;
		},

		events: function () {
			var self = this,
				filter = null;

			self.$source.find('a').click(function (e) {
				e.preventDefault();

				filter = $(this).parent().attr('data-option-value');

				self.setFilter(filter);

				return this;
			});

			if (self.options.useHash) {
				self.hashEvents();
			}

			return this;
		},

		setFilter: function (filter) {
			var self = this;

			if (self.filter == filter) {
				return this;
			}

			self.$source.find('li.active').removeClass('active');
			self.$source.find('li[data-option-value="' + filter + '"]').addClass('active');

			self.$destination.isotope({
				filter: filter
			});

			self.filter = filter;

			return this;
		},

		hashEvents: function () {
			var self = this,
				hash = null,
				hashFilter = null,
				initHashFilter = '.' + location.hash.replace('#', '');

			if (initHashFilter != '.' && initHashFilter != '.*') {
				self.setFilter(initHashFilter);
			}

			$(window).bind('hashchange', function (e) {

				hashFilter = '.' + location.hash.replace('#', '');
				hash = (hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter);

				self.setFilter(hash);

			});

			return this;
		},

		setParagraphHeight: function () {
			var self = this,
				minParagraphHeight = 0,
				paragraphs = $('span.thumb-info-caption p', self.$destination);

			paragraphs.each(function () {
				if ($(this).height() > minParagraphHeight) {
					minParagraphHeight = ($(this).height() + 10);
				}
			});

			paragraphs.height(minParagraphHeight);

			return this;
		}

	};

	// expose to scope
	$.extend(theme, {
		PluginSort: PluginSort
	});

	// jquery plugin
	$.fn.themePluginSort = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSort($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Toggle
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__toggle';

	var PluginToggle = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginToggle.defaults = {
		duration: 350,
		isAccordion: false
	};

	PluginToggle.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			var self = this,
				$wrapper = this.options.wrapper,
				$items = $wrapper.find('.toggle'),
				$el = null;

			$items.each(function () {
				$el = $(this);

				if ($el.hasClass('active')) {
					$el.find('> p').addClass('preview-active');
					$el.find('> .toggle-content').slideDown(self.options.duration);
				}

				self.events($el);
			});

			if (self.options.isAccordion) {
				self.options.duration = self.options.duration / 2;
			}

			return this;
		},

		events: function ($el) {
			var self = this,
				previewParCurrentHeight = 0,
				previewParAnimateHeight = 0,
				toggleContent = null;

			$el.find('> label').click(function (e) {

				var $this = $(this),
					parentSection = $this.parent(),
					parentWrapper = $this.parents('.toggle'),
					previewPar = null,
					closeElement = null;

				if (self.options.isAccordion && typeof (e.originalEvent) != 'undefined') {
					closeElement = parentWrapper.find('.toggle.active > label');

					if (closeElement[0] == $this[0]) {
						return;
					}
				}

				parentSection.toggleClass('active');

				// Preview Paragraph
				if (parentSection.find('> p').get(0)) {

					previewPar = parentSection.find('> p');
					previewParCurrentHeight = previewPar.css('height');
					previewPar.css('height', 'auto');
					previewParAnimateHeight = previewPar.css('height');
					previewPar.css('height', previewParCurrentHeight);

				}

				// Content
				toggleContent = parentSection.find('> .toggle-content');

				if (parentSection.hasClass('active')) {

					$(previewPar).animate({
						height: previewParAnimateHeight
					}, self.options.duration, function () {
						$(this).addClass('preview-active');
					});

					toggleContent.slideDown(self.options.duration, function () {
						if (closeElement) {
							closeElement.trigger('click');
						}
					});

				} else {

					$(previewPar).animate({
						height: 0
					}, self.options.duration, function () {
						$(this).removeClass('preview-active');
					});

					toggleContent.slideUp(self.options.duration);

				}

			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginToggle: PluginToggle
	});

	// jquery plugin
	$.fn.themePluginToggle = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginToggle($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Tweets
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__tweets';

	var PluginTweets = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginTweets.defaults = {
		username: null,
		count: 2,
		URL: 'php/twitter-feed.php'
	};

	PluginTweets.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			if (this.options.username == null || this.options.username == '') {
				return this;
			}

			var self = this,
				$wrapper = this.options.wrapper;

			$.ajax({
				type: 'GET',
				data: {
					twitter_screen_name: self.options.username,
					tweets_to_display: self.options.count
				},
				url: self.options.URL,
			}).done(function (html) {
				$wrapper.html(html);
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginTweets: PluginTweets
	});

	// jquery plugin
	$.fn.themePluginTweets = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginTweets($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Validation
(function (theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginValidation: {

			defaults: {
				validator: {
					highlight: function (element) {
						$(element)
							.parent()
							.removeClass('has-success')
							.addClass('has-error');
					},
					success: function (element) {
						$(element)
							.parent()
							.removeClass('has-error')
							.addClass('has-success')
							.find('label.error')
							.remove();
					},
					errorPlacement: function (error, element) {
						if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
							error.appendTo(element.parent().parent());
						} else {
							error.insertAfter(element);
						}
					}
				},
				validateCaptchaURL: 'php/contact-form-verify-captcha.php',
				refreshCaptchaURL: 'php/contact-form-refresh-captcha.php'
			},

			initialize: function (opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function () {
				var self = this;

				if (!($.isFunction($.validator))) {
					return this;
				}

				self.addMethods();
				self.setMessageGroups();

				$.validator.setDefaults(self.options.validator);

				return this;
			},

			addMethods: function () {
				var self = this;

				$.validator.addMethod('captcha', function (value, element, params) {
					var captchaValid = false;

					$.ajax({
						url: self.options.validateCaptchaURL,
						type: 'POST',
						async: false,
						dataType: 'json',
						data: {
							captcha: $.trim(value)
						},
						success: function (data) {
							if (data.response == 'success') {
								captchaValid = true;
							}
						}
					});

					if (captchaValid) {
						return true;
					}

				}, '');

				// Refresh Captcha
				$('#refreshCaptcha').on('click', function (e) {
					e.preventDefault();
					$.get(self.options.refreshCaptchaURL, function (url) {
						$('#captcha-image').attr('src', url);
					});
				});

			},

			setMessageGroups: function () {

				$('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function () {
					var message = $(this).data('msg-required');
					$(this).find('input').attr('data-msg-required', message);
				});

			}

		}

	});

	// initialize
	theme.PluginValidation.initialize();

}).apply(this, [window.theme, jQuery]);

// Video Background
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__videobackground';

	var PluginVideoBackground = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginVideoBackground.defaults = {
		overlay: true,
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect'
	};

	PluginVideoBackground.prototype = {
		initialize: function ($el, opts) {
			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
				path: this.$el.data('video-path'),
				wrapper: this.$el
			});

			return this;
		},

		build: function () {

			if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
				return this;
			}

			if (this.options.overlay) {
				this.options.wrapper.prepend(
					$('<div />').addClass('video-overlay')
				);
			}

			this.options.wrapper.vide(this.options.path, this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginVideoBackground: PluginVideoBackground
	});

	// jquery plugin
	$.fn.themePluginVideoBackground = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginVideoBackground($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Word Rotate
(function (theme, $) {

	theme = theme || {};

	var instanceName = '__wordRotate';

	var PluginWordRotate = function ($el, opts) {
		return this.initialize($el, opts);
	};

	PluginWordRotate.defaults = {
		delay: 2000,
		animDelay: 300
	};

	PluginWordRotate.prototype = {
		initialize: function ($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function () {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function (opts) {
			this.options = $.extend(true, {}, PluginWordRotate.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function () {
			var self = this,
				$el = this.options.wrapper,
				itemsWrapper = $el.find(".word-rotate-items"),
				items = itemsWrapper.find("> span"),
				firstItem = items.eq(0),
				firstItemClone = firstItem.clone(),
				currentItem = 1,
				currentTop = 0,
				itemWidth = 0;

			itemsWrapper
				.width(firstItem.width() + "px")
				.append(firstItemClone);

			$el
				.addClass("active");

			setInterval(function () {

				currentTop = (currentItem * $el.height());
				currentItem++;

				if (currentItem <= items.length) {
					itemWidth = items.eq(currentItem - 1).width();
				} else {
					itemWidth = items.eq(0).width();
				}

				itemsWrapper.animate({
					top: -(currentTop) + "px",
					width: itemWidth + "px"
				}, self.options.animDelay, "easeOutQuad", function () {

					if (currentItem > items.length) {

						itemsWrapper.css("top", 0);
						currentItem = 1;

					}

				});

			}, self.options.delay);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginWordRotate: PluginWordRotate
	});

	// jquery plugin
	$.fn.themePluginWordRotate = function (opts) {
		return this.map(function () {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginWordRotate($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Account
(function (theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Account: {

			defaults: {
				wrapper: $('#headerAccount')
			},

			initialize: function ($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.events();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			events: function () {
				var self = this;

				self.$wrapper.find('input').on('focus', function () {
					self.$wrapper.addClass('open');

					$(document).mouseup(function (e) {
						if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
							self.$wrapper.removeClass('open');
						}
					});
				});

				$('#headerSignUp').on('click', function (e) {
					e.preventDefault();
					self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
					self.$wrapper.find('.signup-form input:first').focus();
				});

				$('#headerSignIn').on('click', function (e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});

				$('#headerRecover').on('click', function (e) {
					e.preventDefault();
					self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
					self.$wrapper.find('.recover-form input:first').focus();
				});

				$('#headerRecoverCancel').on('click', function (e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Nav
(function (theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Nav: {

			defaults: {
				wrapper: $('#mainMenu'),
				mobileMenuScroll: true,
				fixParentItems: true,
				scrollDelay: 600,
				scrollAnimation: 'easeOutQuad'
			},

			initialize: function ($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function () {
				// Responsive Menu Events
				this.responsiveNavFixes();

				// Mega Menu
				this.megaMenu();

				// Mobile Menu Scroll to Current Item
				this.mobileMenuScroll();

				// Fix/Remove Dropdown Class if it doesn't Have Submenu
				this.fixParentItems();

				return this;
			},

			events: function () {
				var self = this;

				// Mobile Redirect - (Ignores the Dropdown from Bootstrap)
				$('.mobile-redirect').on('click', function () {
					if ($(window).width() < 991) {
						self.location = $(this).attr('href');
					}
				});

				// Anchors Position
				$('[data-hash]').on('click', function (e) {
					e.preventDefault();

					$('body').addClass('scrolling');
					var target = $(this).attr('href');
					delay = 0;

					if ($(document).scrollTop() == 0) {
						$(document).scrollTop($('#header').height());
						delay = 200;
					}

					setTimeout(function () {

						if ($(window).width() < 991 && $('.nav-main-collapse').hasClass('in')) {
							$('.nav-main-collapse').collapse('hide');
							self.scrollToTarget(target);
							return this;
						}

						self.scrollToTarget(target);

					}, 200);

					return this;
				});

				return this;
			},

			scrollToTarget: function (target) {
				var self = this,
					header = $('#header'),
					headerHeight = header.height(),
					topGap = headerHeight;

				$('html, body').animate({
					scrollTop: $(target).offset().top - topGap
				}, self.options.scrollDelay, self.options.scrollAnimation, function () {
					$('body').removeClass('scrolling');
				});

				return this;
			},

			responsiveNavFixes: function () {
				var self = this,
					addActiveClass = false;

				self.$wrapper.find('.dropdown-toggle[href]:not([href=#])').each(function () {
					$(this)
						.addClass('disabled')
						.parent()
						.prepend(
							$('<a />')
								.addClass('dropdown-toggle extra')
								.attr('href', '#')
								.append(
									$('<i />')
										.addClass('fa fa-angle-down')
								)
						);
				});

				self.$wrapper.find('li.dropdown > a:not(.disabled), li.dropdown-submenu > a:not(.disabled)').on('click', function (e) {

					e.preventDefault();

					if ($(window).width() > 991) {
						return this;
					}

					addActiveClass = $(this).parent().hasClass('resp-active');

					self.$wrapper.find('.resp-active').removeClass('resp-active');

					if (!addActiveClass) {
						$(this).parents('li').addClass('resp-active');
					}

					return this;

				});
			},

			megaMenu: function () {
				$(document).on('click', '.mega-menu .dropdown-menu', function (e) {
					e.stopPropagation()
				});
			},

			mobileMenuScroll: function () {
				var self = this;

				this.$wrapper.find('> li > a:not(.disabled)').on('click', function () {
					if ($(window).width() < 991 && self.options.mobileMenuScroll && !$('body').hasClass('sticky-menu-active') && !$('#header').hasClass('fixed')) {
						$('html, body').animate({
							scrollTop: $(this).offset().top
						}, 600, 'easeOutQuad');
					}
				});
			},

			fixParentItems: function () {
				if (!this.options.fixParentItems) {
					return this;
				}

				this.$wrapper.find('> li.dropdown').each(function () {
					if (!$(this).find('ul').get(0)) {
						$(this).removeClass('dropdown');
						$(this).find('.dropdown-toggle').removeClass('dropdown-toggle');
					}
				});
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Newsletter
(function (theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Newsletter: {

			defaults: {
				wrapper: $('#newsletterForm')
			},

			initialize: function ($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function () {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				var self = this,
					$email = self.$wrapper.find('#newsletterEmail'),
					$success = $('#newsletterSuccess'),
					$error = $('#newsletterError');

				self.$wrapper.validate({
					submitHandler: function (form) {

						$.ajax({
							type: 'POST',
							url: self.$wrapper.attr('action'),
							data: {
								'email': $email.val()
							},
							dataType: 'json',
							success: function (data) {
								if (data.response == 'success') {

									$success.removeClass('hidden');
									$error.addClass('hidden');

									$email
										.val('')
										.blur()
										.closest('.control-group')
										.removeClass('success')
										.removeClass('error');

								} else {

									$error.html(data.message);
									$error.removeClass('hidden');
									$success.addClass('hidden');

									$email
										.blur()
										.closest('.control-group')
										.removeClass('success')
										.addClass('error');

								}
							}
						});

					},
					rules: {
						newsletterEmail: {
							required: true,
							email: true
						}
					},
					errorPlacement: function (error, element) {

					}
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Search
(function (theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Search: {

			defaults: {
				wrapper: $('#searchForm')
			},

			initialize: function ($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function () {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				this.$wrapper.validate({
					errorPlacement: function (error, element) { }
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Sticky Menu
(function (theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		StickyMenu: {

			defaults: {
				wrapper: $('#header'),
				stickyEnabled: true,
				stickyEnableOnBoxed: true,
				stickyEnableOnMobile: true,
				stickyWithGap: true,
				stickyChangeLogoSize: true,
				stickyBodyPadding: true,
				menuAfterHeader: false,
				alwaysStickyEnabled: false,
				logoPaddingTop: 28,
				logoSmallWidth: 82,
				logoSmallHeight: 40
			},

			initialize: function ($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function (opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function () {
				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				var self = this,
					$body = $('body'),
					$header = self.$wrapper,
					$headerContainer = $header.parent(),
					$headerNavItems = $header.find('ul.nav-main > li > a'),
					$logoWrapper = $header.find('.logo'),
					$logo = $logoWrapper.find('img'),
					logoWidth = $logo.attr('width'),
					logoHeight = $logo.attr('height'),
					logoPaddingTop = parseInt($logo.attr('data-sticky-padding') ? $logo.attr('data-sticky-padding') : self.options.logoPaddingTop),
					logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : self.options.logoSmallWidth),
					logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : self.options.logoSmallHeight),
					headerHeight = $header.height(),
					stickyGap = 0;

				if (this.options.menuAfterHeader) {
					$headerContainer.css('min-height', $header.height());
				}

				$(window).afterResize(function () {
					$headerContainer.css('min-height', $header.height());
				});

				self.checkStickyMenu = function () {

					if ((!self.options.stickyEnableOnBoxed && $body.hasClass('boxed')) || ($(window).width() < 991 && !self.options.stickyEnableOnMobile)) {
						self.stickyMenuDeactivate();
						$header.removeClass('fixed');
						return false;
					}

					if (self.options.stickyWithGap) {
						stickyGap = ((headerHeight - 15) - logoSmallHeight);
					} else {
						stickyGap = 0;
					}

					// Menu After Header
					if (!this.options.menuAfterHeader) {

						if ($(window).scrollTop() > stickyGap) {
							self.stickyMenuActivate();
						} else {
							self.stickyMenuDeactivate();
						}

					} else {

						if ($(window).scrollTop() > $headerContainer.offset().top) {
							$header.addClass('fixed');
						} else {
							$header.removeClass('fixed');
						}

					}

				};

				self.stickyMenuActivate = function () {

					if ($body.hasClass('sticky-menu-active')) {
						return false;
					}

					$logo.stop(true, true);

					$body.addClass('sticky-menu-active').removeClass('sticky-menu-deactive');

					if (self.options.stickyBodyPadding) {
						$body.css('padding-top', headerHeight);
					}

					// Flat Menu Items
					if ($header.hasClass('flat-menu')) {
						$headerNavItems.addClass('sticky-menu-active');
					}

					if (self.options.stickyChangeLogoSize) {

						$logoWrapper.addClass('logo-sticky-active');

						$logo.animate({
							width: logoSmallWidth,
							height: logoSmallHeight,
							top: logoPaddingTop + 'px'
						}, 200, function () {
							$.event.trigger({
								type: "stickyMenu.active"
							});
						});

					}

				};

				self.stickyMenuDeactivate = function () {

					if ($body.hasClass('sticky-menu-active')) {

						$body.removeClass('sticky-menu-active').addClass('sticky-menu-deactive');

						if (self.options.stickyBodyPadding) {
							$body.css('padding-top', 0);
						}

						// Flat Menu Items
						if ($header.hasClass('flat-menu')) {
							$headerNavItems.removeClass('sticky-menu-active');
						}

						if (self.options.stickyChangeLogoSize) {

							$logoWrapper.removeClass('logo-sticky-active');

							$logo.animate({
								width: logoWidth,
								height: logoHeight,
								top: '0px'
							}, 200, function () {
								$.event.trigger({
									type: "stickyMenu.deactive"
								});
							});

						}

					}

				};

				if (!self.options.alwaysStickyEnabled) {

					$body.addClass('sticky-menu-deactive');

					self.checkStickyMenu();

				} else {

					$body.addClass('sticky-menu-active always-sticky').removeClass('sticky-menu-deactive');

					if (self.options.stickyBodyPadding) {
						$body.css('padding-top', headerHeight);
					}

				}

				return this;
			},

			events: function () {
				var self = this;

				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				if (!self.options.alwaysStickyEnabled) {
					$(window).on('scroll resize', function () {
						self.checkStickyMenu();
					});
				}

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);
/* https://www.vtmteknik.com/custom/www.deltaservis.com.tr/js/views/view.home.js */
/*
Name: 			View - Home
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		3.7.0
*/

(function ($) {

	'use strict';

	/*
	Circle Slider
	*/
	if ($.isFunction($.fn.flipshow)) {
		var circleContainer = $('#fcSlideshow');

		if (circleContainer.get(0)) {
			circleContainer.flipshow();

			setTimeout(function circleFlip() {
				circleContainer.data().flipshow._navigate(circleContainer.find('div.fc-right span:first'), 'right');
				setTimeout(circleFlip, 3000);
			}, 3000);
		}
	}

	/*
	Move Cloud
	*/
	if ($('.cloud').get(0)) {
		var moveCloud = function () {
			$('.cloud').animate({
				'top': '+=20px'
			}, 3000, 'linear', function () {
				$('.cloud').animate({
					'top': '-=20px'
				}, 3000, 'linear', function () {
					moveCloud();
				});
			});
		};

		moveCloud();
	}

	/*
	Nivo Slider
	*/
	if ($.isFunction($.fn.nivoSlider)) {
		$('#nivoSlider').nivoSlider({
			effect: 'random',
			slices: 15,
			boxCols: 8,
			boxRows: 4,
			animSpeed: 500,
			pauseTime: 3000,
			startSlide: 0,
			directionNav: true,
			controlNav: true,
			controlNavThumbs: false,
			pauseOnHover: true,
			manualAdvance: false,
			prevText: 'Prev',
			nextText: 'Next',
			randomStart: false
		});
	}

}).apply(this, [jQuery]);
/* https://www.vtmteknik.com/custom/www.deltaservis.com.tr/js/custom.js */
// Add here all your JS customizations
$(document).ready(function () {
	/*
	 *  Simple image gallery. Uses default settings
	 */

	$('.fancybox').fancybox();

	/*
	 *  Different effects
	 */

	// Change title type, overlay closing speed
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title: {
				type: 'outside'
			},
			overlay: {
				speedOut: 0
			}
		}
	});

	// Disable opening and closing animations, change title type
	$(".fancybox-effects-b").fancybox({
		openEffect: 'none',
		closeEffect: 'none',

		helpers: {
			title: {
				type: 'over'
			}
		}
	});

	// Set custom style, close if clicked, change title type and overlay color
	$(".fancybox-effects-c").fancybox({
		wrapCSS: 'fancybox-custom',
		closeClick: true,

		openEffect: 'none',

		helpers: {
			title: {
				type: 'inside'
			},
			overlay: {
				css: {
					'background': 'rgba(238,238,238,0.85)'
				}
			}
		}
	});

	// Remove padding, set opening and closing animations, close if clicked and disable overlay
	$(".fancybox-effects-d").fancybox({
		padding: 0,

		openEffect: 'elastic',
		openSpeed: 150,

		closeEffect: 'elastic',
		closeSpeed: 150,

		closeClick: true,

		helpers: {
			overlay: null
		}
	});

	/*
	 *  Button helper. Disable animations, hide close button, change title type and content
	 */

	$('.fancybox-buttons').fancybox({
		openEffect: 'none',
		closeEffect: 'none',

		prevEffect: 'none',
		nextEffect: 'none',

		closeBtn: false,

		helpers: {
			title: {
				type: 'inside'
			},
			buttons: {}
		},

		afterLoad: function () {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});


	/*
	 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
	 */

	$('.fancybox-thumbs').fancybox({
		prevEffect: 'none',
		nextEffect: 'none',

		closeBtn: false,
		arrows: false,
		nextClick: true,

		helpers: {
			thumbs: {
				width: 50,
				height: 50
			}
		}
	});

	/*
	 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
	*/
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect: 'none',
			closeEffect: 'none',
			prevEffect: 'none',
			nextEffect: 'none',

			arrows: false,
			helpers: {
				media: {},
				buttons: {}
			}
		});

	/*
	 *  Open manually
	 */

	$("#fancybox-manual-a").click(function () {
		$.fancybox.open('1_b.jpg');
	});

	$("#fancybox-manual-b").click(function () {
		$.fancybox.open({
			href: 'iframe.html',
			type: 'iframe',
			padding: 5
		});
	});

	$("#fancybox-manual-c").click(function () {
		$.fancybox.open([
			{
				href: '1_b.jpg',
				title: 'My title'
			}, {
				href: '2_b.jpg',
				title: '2nd title'
			}, {
				href: '3_b.jpg'
			}
		], {
			helpers: {
				thumbs: {
					width: 75,
					height: 50
				}
			}
		});
	});
});
/* https://www.vtmteknik.com/custom/www.deltaservis.com.tr/js/theme.init.js */
// Commom Plugins
(function ($) {

	'use strict';

	// Scroll to Top Button.
	if (typeof theme.PluginScrollToTop !== 'undefined') {
		theme.PluginScrollToTop.initialize();
	}

	// Parallax
	if (typeof theme.PluginParallax !== 'undefined') {
		theme.PluginParallax.initialize();
	}

	// Tooltips
	if ($.isFunction($.fn['tooltip'])) {
		$('[data-tooltip]').tooltip();
	}

}).apply(this, [jQuery]);

// Animate
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginAnimate'])) {

		$(function () {
			$('[data-plugin-animate], [data-appear-animation]').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginAnimate(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Carousel
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCarousel'])) {

		$(function () {
			$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCarousel(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Chart.Circular
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginChartCircular'])) {

		$(function () {
			$('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginChartCircular(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Counter
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCounter'])) {

		$(function () {
			$('[data-plugin-counter]:not(.manual), .counters [data-to]').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCounter(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Flickr
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginFlickr'])) {

		$(function () {
			$('[data-plugin-flickr]:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginFlickr(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Lightbox
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLightbox'])) {

		$(function () {
			$('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLightbox(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Masonry
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMasonry'])) {

		$(function () {
			$('[data-plugin-masonry]:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Progress Bar
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginProgressBar'])) {

		$(function () {
			$('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginProgressBar(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Revolution Slider
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginRevolutionSlider'])) {

		$(function () {
			$('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginRevolutionSlider(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sort
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSort'])) {

		$(function () {
			$('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSort(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Toggle
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginToggle'])) {

		$(function () {
			$('[data-plugin-toggle]:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginToggle(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Tweets
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginTweets'])) {

		$(function () {
			$('[data-plugin-tweets]:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginTweets(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Video Background
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginVideoBackground'])) {

		$(function () {
			$('[data-plugin-video-background]:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginVideoBackground(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Word Rotate
(function ($) {

	'use strict';

	if ($.isFunction($.fn['themePluginWordRotate'])) {

		$(function () {
			$('[data-plugin-word-rotate]:not(.manual), .word-rotate:not(.manual)').each(function () {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginWordRotate(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Commom Partials
(function ($) {

	'use strict';

	// Sticky Menu
	if (typeof theme.StickyMenu !== 'undefined') {
		theme.StickyMenu.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	// Search
	if (typeof theme.Search !== 'undefined') {
		theme.Search.initialize();
	}

	// Newsletter
	if (typeof theme.Newsletter !== 'undefined') {
		theme.Newsletter.initialize();
	}

	// Account
	if (typeof theme.Account !== 'undefined') {
		theme.Account.initialize();
	}

}).apply(this, [jQuery]);