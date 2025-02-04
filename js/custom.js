/*!
 * Modernizr v2.6.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = (function(t, e, c) {
 var A = '2.6.1',
  r = {},
  P = !0,
  l = e.documentElement,
  a = 'modernizr',
  M = e.createElement(a),
  u = M.style,
  o = e.createElement('input'),
  E = ':)',
  j = {}.toString,
  v = ' -webkit- -moz- -o- -ms- '.split(' '),
  N = 'Webkit Moz O ms',
  z = N.split(' '),
  D = N.toLowerCase().split(' '),
  p = {
   'svg': 'http://www.w3.org/2000/svg'
  },
  n = {},
  T = {},
  g = {},
  x = [],
  y = x.slice,
  h, d = function(t, n, r, f) {
   var u, d, s, i = e.createElement('div'),
    c = e.body,
    o = c ? c : e.createElement('body');
   if (parseInt(r, 10)) {
    while (r--) {
     s = e.createElement('div');
     s.id = f ? f[r] : a + (r + 1);
     i.appendChild(s)
    }
   };
   u = ['&#173;', '<style id="s', a, '">', t, '</style>'].join('');
   i.id = a;
   (c ? i : o).innerHTML += u;
   o.appendChild(i);
   if (!c) {
    o.style.background = '';
    l.appendChild(o)
   };
   d = n(i, t);
   !c ? o.parentNode.removeChild(o) : i.parentNode.removeChild(i);
   return !!d
  },
  I = function(e) {
   var n = t.matchMedia || t.msMatchMedia;
   if (n) {
    return n(e).matches
   };
   var r;
   d('@media ' + e + ' { #' + a + ' { position: absolute; } }', function(e) {
    r = (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle)['position'] == 'absolute'
   });
   return r
  },
  k = (function() {
   var n = {
    'select': 'input',
    'change': 'input',
    'submit': 'form',
    'reset': 'form',
    'error': 'img',
    'load': 'img',
    'abort': 'img'
   };

   function t(t, r) {
    r = r || e.createElement(n[t] || 'div');
    t = 'on' + t;
    var i = t in r;
    if (!i) {
     if (!r.setAttribute) {
      r = e.createElement('div')
     };
     if (r.setAttribute && r.removeAttribute) {
      r.setAttribute(t, '');
      i = s(r[t], 'function');
      if (!s(r[t], 'undefined')) {
       r[t] = c
      };
      r.removeAttribute(t)
     }
    };
    r = null;
    return i
   };
   return t
  })(),
  w = ({}).hasOwnProperty,
  b;
 if (!s(w, 'undefined') && !s(w.call, 'undefined')) {
  b = function(e, t) {
   return w.call(e, t)
  }
 } else {
  b = function(e, t) {
   return ((t in e) && s(e.constructor.prototype[t], 'undefined'))
  }
 };
 if (!Function.prototype.bind) {
  Function.prototype.bind = function(e) {
   var t = this;
   if (typeof t != 'function') {
    throw new TypeError()
   };
   var r = y.call(arguments, 1),
    n = function() {
     if (this instanceof n) {
      var o = function() {};
      o.prototype = t.prototype;
      var a = new o(),
       i = t.apply(a, r.concat(y.call(arguments)));
      if (Object(i) === i) {
       return i
      };
      return a
     } else {
      return t.apply(e, r.concat(y.call(arguments)))
     }
    };
   return n
  }
 };

 function f(e) {
  u.cssText = e
 };

 function H(e, t) {
  return f(v.join(e + ';') + (t || ''))
 };

 function s(e, t) {
  return typeof e === t
 };

 function m(e, t) {
  return !!~('' + e).indexOf(t)
 };

 function C(e, t) {
  for (var r in e) {
   var n = e[r];
   if (!m(n, '-') && u[n] !== c) {
    return t == 'pfx' ? n : !0
   }
  };
  return !1
 };

 function F(e, t, n) {
  for (var i in e) {
   var r = t[e[i]];
   if (r !== c) {
    if (n === !1) return e[i];
    if (s(r, 'function')) {
     return r.bind(n || t)
    };
    return r
   }
  };
  return !1
 };

 function i(e, t, n) {
  var r = e.charAt(0).toUpperCase() + e.slice(1),
   i = (e + ' ' + z.join(r + ' ') + r).split(' ');
  if (s(t, 'string') || s(t, 'undefined')) {
   return C(i, t)
  } else {
   i = (e + ' ' + (D).join(r + ' ') + r).split(' ');
   return F(i, t, n)
  }
 };
 n['flexbox'] = function() {
  return i('flexWrap')
 };
 n['flexboxlegacy'] = function() {
  return i('boxDirection')
 };
 n['canvas'] = function() {
  var t = e.createElement('canvas');
  return !!(t.getContext && t.getContext('2d'))
 };
 n['canvastext'] = function() {
  return !!(r['canvas'] && s(e.createElement('canvas').getContext('2d').fillText, 'function'))
 };
 n['webgl'] = function() {
  return !!t.WebGLRenderingContext
 };
 n['touch'] = function() {
  var n;
  if (('ontouchstart' in t) || t.DocumentTouch && e instanceof DocumentTouch) {
   n = !0
  } else {
   d(['@media (', v.join('touch-enabled),('), a, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function(e) {
    n = e.offsetTop === 9
   })
  };
  return n
 };
 n['geolocation'] = function() {
  return 'geolocation' in navigator
 };
 n['postmessage'] = function() {
  return !!t.postMessage
 };
 n['websqldatabase'] = function() {
  return !!t.openDatabase
 };
 n['indexedDB'] = function() {
  return !!i('indexedDB', t)
 };
 n['hashchange'] = function() {
  return k('hashchange', t) && (e.documentMode === c || e.documentMode > 7)
 };
 n['history'] = function() {
  return !!(t.history && history.pushState)
 };
 n['draganddrop'] = function() {
  var t = e.createElement('div');
  return ('draggable' in t) || ('ondragstart' in t && 'ondrop' in t)
 };
 n['websockets'] = function() {
  return 'WebSocket' in t || 'MozWebSocket' in t
 };
 n['rgba'] = function() {
  f('background-color:rgba(150,255,150,.5)');
  return m(u.backgroundColor, 'rgba')
 };
 n['hsla'] = function() {
  f('background-color:hsla(120,40%,100%,.5)');
  return m(u.backgroundColor, 'rgba') || m(u.backgroundColor, 'hsla')
 };
 n['multiplebgs'] = function() {
  f('background:url(https://),url(https://),red url(https://)');
  return (/(url\s*\(.*?){3}/).test(u.background)
 };
 n['backgroundsize'] = function() {
  return i('backgroundSize')
 };
 n['borderimage'] = function() {
  return i('borderImage')
 };
 n['borderradius'] = function() {
  return i('borderRadius')
 };
 n['boxshadow'] = function() {
  return i('boxShadow')
 };
 n['textshadow'] = function() {
  return e.createElement('div').style.textShadow === ''
 };
 n['opacity'] = function() {
  H('opacity:.55');
  return (/^0.55$/).test(u.opacity)
 };
 n['cssanimations'] = function() {
  return i('animationName')
 };
 n['csscolumns'] = function() {
  return i('columnCount')
 };
 n['cssgradients'] = function() {
  var e = 'background-image:',
   n = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
   t = 'linear-gradient(left top,#9f9, white);';
  f((e + '-webkit- '.split(' ').join(n + e) + v.join(t + e)).slice(0, -e.length));
  return m(u.backgroundImage, 'gradient')
 };
 n['cssreflections'] = function() {
  return i('boxReflect')
 };
 n['csstransforms'] = function() {
  return !!i('transform')
 };
 n['csstransforms3d'] = function() {
  var e = !!i('perspective');
  if (e && 'webkitPerspective' in l.style) {
   d('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function(t, n) {
    e = t.offsetLeft === 9 && t.offsetHeight === 3
   })
  };
  return e
 };
 n['csstransitions'] = function() {
  return i('transition')
 };
 n['fontface'] = function() {
  var t;
  d('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
   var a = e.getElementById('smodernizr'),
    i = a.sheet || a.styleSheet,
    o = i ? (i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || '') : '';
   t = /src/i.test(o) && o.indexOf(r.split(' ')[0]) === 0
  });
  return t
 };
 n['generatedcontent'] = function() {
  var e;
  d(['#modernizr:after{content:"', E, '";visibility:hidden}'].join(''), function(t) {
   e = t.offsetHeight >= 1
  });
  return e
 };
 n['video'] = function() {
  var r = e.createElement('video'),
   t = !1;
  try {
   if (t = !!r.canPlayType) {
    t = new Boolean(t);
    t.ogg = r.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
    t.h264 = r.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
    t.webm = r.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '')
   }
  } catch (n) {};
  return t
 };
 n['audio'] = function() {
  var n = e.createElement('audio'),
   t = !1;
  try {
   if (t = !!n.canPlayType) {
    t = new Boolean(t);
    t.ogg = n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
    t.mp3 = n.canPlayType('audio/mpeg;').replace(/^no$/, '');
    t.wav = n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
    t.m4a = (n.canPlayType('audio/x-m4a;') || n.canPlayType('audio/aac;')).replace(/^no$/, '')
   }
  } catch (r) {};
  return t
 };
 n['localstorage'] = function() {
  try {
   localStorage.setItem(a, a);
   localStorage.removeItem(a);
   return !0
  } catch (e) {
   return !1
  }
 };
 n['sessionstorage'] = function() {
  try {
   sessionStorage.setItem(a, a);
   sessionStorage.removeItem(a);
   return !0
  } catch (e) {
   return !1
  }
 };
 n['webworkers'] = function() {
  return !!t.Worker
 };
 n['applicationcache'] = function() {
  return !!t.applicationCache
 };
 n['svg'] = function() {
  return !!e.createElementNS && !!e.createElementNS(p.svg, 'svg').createSVGRect
 };
 n['inlinesvg'] = function() {
  var t = e.createElement('div');
  t.innerHTML = '<svg/>';
  return (t.firstChild && t.firstChild.namespaceURI) == p.svg
 };
 n['smil'] = function() {
  return !!e.createElementNS && /SVGAnimate/.test(j.call(e.createElementNS(p.svg, 'animate')))
 };
 n['svgclippaths'] = function() {
  return !!e.createElementNS && /SVGClipPath/.test(j.call(e.createElementNS(p.svg, 'clipPath')))
 };

 function L() {
  r['input'] = (function(n) {
   for (var r = 0, i = n.length; r < i; r++) {
    g[n[r]] = !!(n[r] in o)
   };
   if (g.list) {
    g.list = !!(e.createElement('datalist') && t.HTMLDataListElement)
   };
   return g
  })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
  r['inputtypes'] = (function(t) {
   for (var r = 0, n, i, a, s = t.length; r < s; r++) {
    o.setAttribute('type', i = t[r]);
    n = o.type !== 'text';
    if (n) {
     o.value = E;
     o.style.cssText = 'position:absolute;visibility:hidden;';
     if (/^range$/.test(i) && o.style.WebkitAppearance !== c) {
      l.appendChild(o);
      a = e.defaultView;
      n = a.getComputedStyle && a.getComputedStyle(o, null).WebkitAppearance !== 'textfield' && (o.offsetHeight !== 0);
      l.removeChild(o)
     } else if (/^(search|tel)$/.test(i)) {} else if (/^(url|email)$/.test(i)) {
      n = o.checkValidity && o.checkValidity() === !1
     } else {
      n = o.value != E
     }
    };
    T[t[r]] = !!n
   };
   return T
  })('search tel url email datetime date month week time datetime-local number range color'.split(' '))
 };
 for (var S in n) {
  if (b(n, S)) {
   h = S.toLowerCase();
   r[h] = n[S]();
   x.push((r[h] ? '' : 'no-') + h)
  }
 };
 r.input || L();
 r.addTest = function(e, t) {
  if (typeof e == 'object') {
   for (var n in e) {
    if (b(e, n)) {
     r.addTest(n, e[n])
    }
   }
  } else {
   e = e.toLowerCase();
   if (r[e] !== c) {
    return r
   };
   t = typeof t == 'function' ? t() : t;
   if (P) {
    l.className += ' ' + (t ? '' : 'no-') + e
   };
   r[e] = t
  };
  return r
 };
 f('');
 M = o = null;
 /*! HTML5 Shiv v3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
 ;
 (function(e, t) {
  var i = e.html5 || {};
  var g = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
   h = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
   c, l = '_html5shiv',
   a = 0,
   d = {};
  var n;
  (function() {
   try {
    var r = t.createElement('a');
    r.innerHTML = '<xyz></xyz>';
    c = ('hidden' in r);
    n = r.childNodes.length == 1 || (function() {
     (t.createElement)('a');
     var e = t.createDocumentFragment();
     return (typeof e.cloneNode == 'undefined' || typeof e.createDocumentFragment == 'undefined' || typeof e.createElement == 'undefined')
    }())
   } catch (e) {
    c = !0;
    n = !0
   }
  }());

  function v(e, t) {
   var r = e.createElement('p'),
    n = e.getElementsByTagName('head')[0] || e.documentElement;
   r.innerHTML = 'x<style>' + t + '</style>';
   return n.insertBefore(r.lastChild, n.firstChild)
  };

  function f() {
   var e = r.elements;
   return typeof e == 'string' ? e.split(' ') : e
  };

  function o(e) {
   var t = d[e[l]];
   if (!t) {
    t = {};
    a++;
    e[l] = a;
    d[a] = t
   };
   return t
  };

  function s(e, r, i) {
   if (!r) {
    r = t
   };
   if (n) {
    return r.createElement(e)
   };
   if (!i) {
    i = o(r)
   };
   var a;
   if (i.cache[e]) {
    a = i.cache[e].cloneNode()
   } else if (h.test(e)) {
    a = (i.cache[e] = i.createElem(e)).cloneNode()
   } else {
    a = i.createElem(e)
   };
   return a.canHaveChildren && !g.test(e) ? i.frag.appendChild(a) : a
  };

  function p(e, r) {
   if (!e) {
    e = t
   };
   if (n) {
    return e.createDocumentFragment()
   };
   r = r || o(e);
   var c = r.frag.cloneNode(),
    i = 0,
    a = f(),
    s = a.length;
   for (; i < s; i++) {
    c.createElement(a[i])
   };
   return c
  };

  function m(e, t) {
   if (!t.cache) {
    t.cache = {};
    t.createElem = e.createElement;
    t.createFrag = e.createDocumentFragment;
    t.frag = t.createFrag()
   };
   e.createElement = function(n) {
    if (!r.shivMethods) {
     return t.createElem(n)
    };
    return s(n, e, t)
   };
   e.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + f().join().replace(/\w+/g, function(e) {
    t.createElem(e);
    t.frag.createElement(e);
    return 'c("' + e + '")'
   }) + ');return n}')(r, t.frag)
  };

  function u(e) {
   if (!e) {
    e = t
   };
   var i = o(e);
   if (r.shivCSS && !c && !i.hasCSS) {
    i.hasCSS = !!v(e, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')
   };
   if (!n) {
    m(e, i)
   };
   return e
  };
  var r = {
   'elements': i.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
   'shivCSS': (i.shivCSS !== !1),
   'supportsUnknownElements': n,
   'shivMethods': (i.shivMethods !== !1),
   'type': 'default',
   'shivDocument': u,
   createElement: s,
   createDocumentFragment: p
  };
  e.html5 = r;
  u(t)
 }(this, e));
 r._version = A;
 r._prefixes = v;
 r._domPrefixes = D;
 r._cssomPrefixes = z;
 r.mq = I;
 r.hasEvent = k;
 r.testProp = function(e) {
  return C([e])
 };
 r.testAllProps = i;
 r.testStyles = d;
 r.prefixed = function(e, t, n) {
  if (!t) {
   return i(e, 'pfx')
  } else {
   return i(e, t, n)
  }
 };
 l.className = l.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (P ? ' js ' + x.join(' ') : '');
 return r
})(this, this.document);
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(t, n) {
 function dt(t) {
  var n = ne[t] = {};
  return e.each(t.split(p), function(e, t) {
   n[t] = !0
  }), n
 };

 function Te(t, r, i) {
  if (i === n && t.nodeType === 1) {
   var a = "data-" + r.replace(Et, "-$1").toLowerCase();
   i = t.getAttribute(a);
   if (typeof i == "string") {
    try {
     i = i === "true" ? !0 : i === "false" ? !1 : i === "null" ? null : +i + "" === i ? +i : kt.test(i) ? e.parseJSON(i) : i
    } catch (o) {};
    e.data(t, r, i)
   } else i = n
  };
  return i
 };

 function q(t) {
  var n;
  for (n in t) {
   if (n === "data" && e.isEmptyObject(t[n])) continue;
   if (n !== "toJSON") return !1
  };
  return !0
 };

 function g() {
  return !1
 };

 function w() {
  return !0
 };

 function x(e) {
  return !e || !e.parentNode || e.parentNode.nodeType === 11
 };

 function ce(e, t) {
  do e = e[t]; while (e && e.nodeType !== 1);
  return e
 };

 function fe(t, n, r) {
  n = n || 0;
  if (e.isFunction(n)) return e.grep(t, function(e, t) {
   var i = !!n.call(e, t, e);
   return i === r
  });
  if (n.nodeType) return e.grep(t, function(e, t) {
   return e === n === r
  });
  if (typeof n == "string") {
   var i = e.grep(t, function(e) {
    return e.nodeType === 1
   });
   if (Ot.test(n)) return e.filter(n, i, !r);
   n = e.filter(n, i)
  };
  return e.grep(t, function(t, i) {
   return e.inArray(t, n) >= 0 === r
  })
 };

 function he(e) {
  var n = Me.split("|"),
   t = e.createDocumentFragment();
  if (t.createElement)
   while (n.length) t.createElement(n.pop());
  return t
 };

 function Ue(e, t) {
  return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
 };

 function de(t, n) {
  if (n.nodeType !== 1 || !e.hasData(t)) return;
  var a, o, s, l = e._data(t),
   r = e._data(n, l),
   i = l.events;
  if (i) {
   delete r.handle, r.events = {};
   for (a in i)
    for (o = 0, s = i[a].length; o < s; o++) e.event.add(n, a, i[a][o])
  };
  r.data && (r.data = e.extend({}, r.data))
 };

 function pe(t, n) {
  var r;
  if (n.nodeType !== 1) return;
  n.clearAttributes && n.clearAttributes(), n.mergeAttributes && n.mergeAttributes(t), r = n.nodeName.toLowerCase(), r === "object" ? (n.parentNode && (n.outerHTML = t.outerHTML), e.support.html5Clone && t.innerHTML && !e.trim(n.innerHTML) && (n.innerHTML = t.innerHTML)) : r === "input" && Xe.test(t.type) ? (n.defaultChecked = n.checked = t.checked, n.value !== t.value && (n.value = t.value)) : r === "option" ? n.selected = t.defaultSelected : r === "input" || r === "textarea" ? n.defaultValue = t.defaultValue : r === "script" && n.text !== t.text && (n.text = t.text), n.removeAttribute(e.expando)
 };

 function A(e) {
  return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
 };

 function be(e) {
  Xe.test(e.type) && (e.defaultChecked = e.checked)
 };

 function ge(e, t) {
  if (t in e) return t;
  var r = t.charAt(0).toUpperCase() + t.slice(1),
   i = t,
   n = He.length;
  while (n--) {
   t = He[n] + r;
   if (t in e) return t
  };
  return i
 };

 function D(t, n) {
  return t = n || t, e.css(t, "display") === "none" || !e.contains(t.ownerDocument, t)
 };

 function xe(t, n) {
  var r, s, a = [],
   i = 0,
   l = t.length;
  for (; i < l; i++) {
   r = t[i];
   if (!r.style) continue;
   a[i] = e._data(r, "olddisplay"), n ? (!a[i] && r.style.display === "none" && (r.style.display = ""), r.style.display === "" && D(r) && (a[i] = e._data(r, "olddisplay", J(r.nodeName)))) : (s = o(r, "display"), !a[i] && s !== "none" && e._data(r, "olddisplay", s))
  };
  for (i = 0; i < l; i++) {
   r = t[i];
   if (!r.style) continue;
   if (!n || r.style.display === "none" || r.style.display === "") r.style.display = n ? a[i] || "" : "none"
  };
  return t
 };

 function ve(e, t, n) {
  var r = Je.exec(t);
  return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
 };

 function ae(t, n, r, i) {
  var a = r === (i ? "border" : "content") ? 4 : n === "width" ? 1 : 0,
   s = 0;
  for (; a < 4; a += 2) r === "margin" && (s += e.css(t, r + f[a], !0)), i ? (r === "content" && (s -= parseFloat(o(t, "padding" + f[a])) || 0), r !== "margin" && (s -= parseFloat(o(t, "border" + f[a] + "Width")) || 0)) : (s += parseFloat(o(t, "padding" + f[a])) || 0, r !== "padding" && (s += parseFloat(o(t, "border" + f[a] + "Width")) || 0));
  return s
 };

 function Ce(t, n, r) {
  var i = n === "width" ? t.offsetWidth : t.offsetHeight,
   s = !0,
   a = e.support.boxSizing && e.css(t, "boxSizing") === "border-box";
  if (i <= 0 || i == null) {
   i = o(t, n);
   if (i < 0 || i == null) i = t.style[n];
   if (j.test(i)) return i;
   s = a && (e.support.boxSizingReliable || i === t.style[n]), i = parseFloat(i) || 0
  };
  return i + ae(t, n, r || (a ? "border" : "content"), s) + "px"
 };

 function J(t) {
  if (X[t]) return X[t];
  var i = e("<" + t + ">").appendTo(r.body),
   n = i.css("display");
  i.remove();
  if (n === "none" || n === "") {
   m = r.body.appendChild(m || e.extend(r.createElement("iframe"), {
    frameBorder: 0,
    width: 0,
    height: 0
   }));
   if (!h || !m.createElement) h = (m.contentWindow || m.contentDocument).document, h.write("<!doctype html><html><body>"), h.close();
   i = h.body.appendChild(h.createElement(t)), n = o(i, "display"), r.body.removeChild(m)
  };
  return X[t] = n, n
 };

 function M(t, n, r, i) {
  var o;
  if (e.isArray(n)) e.each(n, function(e, n) {
   r || Ke.test(t) ? i(t, n) : M(t + "[" + (typeof n == "object" ? e : "") + "]", n, r, i)
  });
  else if (!r && e.type(n) === "object")
   for (o in n) M(t + "[" + o + "]", n[o], r, i);
  else i(t, n)
 };

 function Y(t) {
  return function(n, r) {
   typeof n != "string" && (r = n, n = "*");
   var i, s, o, l = n.toLowerCase().split(p),
    a = 0,
    u = l.length;
   if (e.isFunction(r))
    for (; a < u; a++) i = l[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), s = t[i] = t[i] || [], s[o ? "unshift" : "push"](r)
  }
 };

 function L(e, t, r, i, o, s) {
  o = o || t.dataTypes[0], s = s || {}, s[o] = !0;
  var a, c = e[o],
   u = 0,
   f = c ? c.length : 0,
   l = e === R;
  for (; u < f && (l || !a); u++) a = c[u](t, r, i), typeof a == "string" && (!l || s[a] ? a = n : (t.dataTypes.unshift(a), a = L(e, t, r, i, a, s)));
  return (l || !a) && !s["*"] && (a = L(e, t, r, i, "*", s)), a
 };

 function Ne(t, r) {
  var i, o, a = e.ajaxSettings.flatOptions || {};
  for (i in r) r[i] !== n && ((a[i] ? t : o || (o = {}))[i] = r[i]);
  o && e.extend(!0, t, o)
 };

 function yt(e, t, r) {
  var s, i, a, l, u = e.contents,
   o = e.dataTypes,
   c = e.responseFields;
  for (i in c) i in r && (t[c[i]] = r[i]);
  while (o[0] === "*") o.shift(), s === n && (s = e.mimeType || t.getResponseHeader("content-type"));
  if (s)
   for (i in u)
    if (u[i] && u[i].test(s)) {
     o.unshift(i);
     break
    };
  if (o[0] in r) a = o[0];
  else {
   for (i in r) {
    if (!o[0] || e.converters[i + " " + o[0]]) {
     a = i;
     break
    };
    l || (l = i)
   };
   a = a || l
  };
  if (a) return a !== o[0] && o.unshift(a), r[a]
 };

 function ft(e, t) {
  var r, u, i, s, l = e.dataTypes.slice(),
   a = l[0],
   o = {},
   c = 0;
  e.dataFilter && (t = e.dataFilter(t, e.dataType));
  if (l[1])
   for (r in e.converters) o[r.toLowerCase()] = e.converters[r];
  for (; i = l[++c];)
   if (i !== "*") {
    if (a !== "*" && a !== i) {
     r = o[a + " " + i] || o["* " + i];
     if (!r)
      for (u in o) {
       s = u.split(" ");
       if (s[1] === i) {
        r = o[a + " " + s[0]] || o["* " + s[0]];
        if (r) {
         r === !0 ? r = o[u] : o[u] !== !0 && (i = s[0], l.splice(c--, 0, i));
         break
        }
       }
      };
     if (r !== !0)
      if (r && e["throws"]) t = r(t);
      else try {
       t = r(t)
      } catch (n) {
       return {
        state: "parsererror",
        error: r ? n : "No conversion from " + a + " to " + i
       }
      }
    };
    a = i
   };
  return {
   state: "success",
   data: t
  }
 };

 function se() {
  try {
   return new t.XMLHttpRequest
  } catch (e) {}
 };

 function it() {
  try {
   return new t.ActiveXObject("Microsoft.XMLHTTP")
  } catch (e) {}
 };

 function ue() {
  return setTimeout(function() {
   v = n
  }, 0), v = e.now()
 };

 function rt(t, n) {
  e.each(n, function(e, n) {
   var i = (b[e] || []).concat(b["*"]),
    r = 0,
    o = i.length;
   for (; r < o; r++)
    if (i[r].call(t, e, n)) return
  })
 };

 function me(t, n, r) {
  var s, a = 0,
   f = 0,
   c = C.length,
   o = e.Deferred().always(function() {
    delete u.elem
   }),
   u = function() {
    var l = v || ue(),
     n = Math.max(0, i.startTime + i.duration - l),
     s = n / i.duration || 0,
     e = 1 - s,
     r = 0,
     a = i.tweens.length;
    for (; r < a; r++) i.tweens[r].run(e);
    return o.notifyWith(t, [i, e, n]), e < 1 && a ? n : (o.resolveWith(t, [i]), !1)
   },
   i = o.promise({
    elem: t,
    props: e.extend({}, n),
    opts: e.extend(!0, {
     specialEasing: {}
    }, r),
    originalProperties: n,
    originalOptions: r,
    startTime: v || ue(),
    duration: r.duration,
    tweens: [],
    createTween: function(n, r, o) {
     var a = e.Tween(t, i.opts, n, r, i.opts.specialEasing[n] || i.opts.easing);
     return i.tweens.push(a), a
    },
    stop: function(e) {
     var n = 0,
      r = e ? i.tweens.length : 0;
     for (; n < r; n++) i.tweens[n].run(1);
     return e ? o.resolveWith(t, [i, e]) : o.rejectWith(t, [i, e]), this
    }
   }),
   l = i.props;
  ot(l, i.opts.specialEasing);
  for (; a < c; a++) {
   s = C[a].call(i, t, l, i.opts);
   if (s) return s
  };
  return rt(i, l), e.isFunction(i.opts.start) && i.opts.start.call(t, i), e.fx.timer(e.extend(u, {
   anim: i,
   queue: i.opts.queue,
   elem: t
  })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
 };

 function ot(t, n) {
  var r, o, s, i, a;
  for (r in t) {
   o = e.camelCase(r), s = n[o], i = t[r], e.isArray(i) && (s = i[1], i = t[r] = i[0]), r !== o && (t[o] = i, delete t[r]), a = e.cssHooks[o];
   if (a && "expand" in a) {
    i = a.expand(i), delete t[o];
    for (r in i) r in t || (t[r] = i[r], n[r] = s)
   } else n[o] = s
  }
 };

 function at(t, n, r) {
  var l, i, p, m, s, g, f, o, y, u = this,
   a = t.style,
   h = {},
   d = [],
   c = t.nodeType && D(t);
  r.queue || (o = e._queueHooks(t, "fx"), o.unqueued == null && (o.unqueued = 0, y = o.empty.fire, o.empty.fire = function() {
   o.unqueued || y()
  }), o.unqueued++, u.always(function() {
   u.always(function() {
    o.unqueued--, e.queue(t, "fx").length || o.empty.fire()
   })
  })), t.nodeType === 1 && ("height" in n || "width" in n) && (r.overflow = [a.overflow, a.overflowX, a.overflowY], e.css(t, "display") === "inline" && e.css(t, "float") === "none" && (!e.support.inlineBlockNeedsLayout || J(t.nodeName) === "inline" ? a.display = "inline-block" : a.zoom = 1)), r.overflow && (a.overflow = "hidden", e.support.shrinkWrapBlocks || u.done(function() {
   a.overflow = r.overflow[0], a.overflowX = r.overflow[1], a.overflowY = r.overflow[2]
  }));
  for (l in n) {
   p = n[l];
   if (st.exec(p)) {
    delete n[l], g = g || p === "toggle";
    if (p === (c ? "hide" : "show")) continue;
    d.push(l)
   }
  };
  m = d.length;
  if (m) {
   s = e._data(t, "fxshow") || e._data(t, "fxshow", {}), "hidden" in s && (c = s.hidden), g && (s.hidden = !c), c ? e(t).show() : u.done(function() {
    e(t).hide()
   }), u.done(function() {
    var n;
    e.removeData(t, "fxshow", !0);
    for (n in h) e.style(t, n, h[n])
   });
   for (l = 0; l < m; l++) i = d[l], f = u.createTween(i, c ? s[i] : 0), h[i] = s[i] || e.style(t, i), i in s || (s[i] = f.start, c && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
  }
 };

 function a(e, t, n, r, i) {
  return new a.prototype.init(e, t, n, r, i)
 };

 function S(e, t) {
  var i, n = {
    height: e
   },
   r = 0;
  t = t ? 1 : 0;
  for (; r < 4; r += 2 - t) i = f[r], n["margin" + i] = n["padding" + i] = e;
  return t && (n.opacity = n.width = e), n
 };

 function te(t) {
  return e.isWindow(t) ? t : t.nodeType === 9 ? t.defaultView || t.parentWindow : !1
 };
 var oe, E, r = t.document,
  St = t.location,
  Pt = t.navigator,
  Rt = t.jQuery,
  tn = t.$,
  V = Array.prototype.push,
  l = Array.prototype.slice,
  ie = Array.prototype.indexOf,
  nn = Object.prototype.toString,
  I = Object.prototype.hasOwnProperty,
  U = String.prototype.trim,
  e = function(t, n) {
   return new e.fn.init(t, n, oe)
  },
  T = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  on = /\S/,
  p = /\s+/,
  Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  Gt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
  ye = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  Xt = /^[\],:{}\s]*$/,
  zt = /(?:^|:|,)(?:\s*\[)+/g,
  It = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  Ut = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
  wt = /^-ms-/,
  Qt = /-([\da-z])/gi,
  Jt = function(e, t) {
   return (t + "").toUpperCase()
  },
  N = function() {
   r.addEventListener ? (r.removeEventListener("DOMContentLoaded", N, !1), e.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", N), e.ready())
  },
  we = {};
 e.fn = e.prototype = {
  constructor: e,
  init: function(t, i, o) {
   var a, s, u, l;
   if (!t) return this;
   if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
   if (typeof t == "string") {
    t.charAt(0) === "<" && t.charAt(t.length - 1) === ">" && t.length >= 3 ? a = [null, t, null] : a = Gt.exec(t);
    if (a && (a[1] || !i)) {
     if (a[1]) return i = i instanceof e ? i[0] : i, l = i && i.nodeType ? i.ownerDocument || i : r, t = e.parseHTML(a[1], l, !0), ye.test(a[1]) && e.isPlainObject(i) && this.attr.call(t, i, !0), e.merge(this, t);
     s = r.getElementById(a[2]);
     if (s && s.parentNode) {
      if (s.id !== a[2]) return o.find(t);
      this.length = 1, this[0] = s
     };
     return this.context = r, this.selector = t, this
    };
    return !i || i.jquery ? (i || o).find(t) : this.constructor(i).find(t)
   };
   return e.isFunction(t) ? o.ready(t) : (t.selector !== n && (this.selector = t.selector, this.context = t.context), e.makeArray(t, this))
  },
  selector: "",
  jquery: "1.8.3",
  length: 0,
  size: function() {
   return this.length
  },
  toArray: function() {
   return l.call(this)
  },
  get: function(e) {
   return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
  },
  pushStack: function(t, n, r) {
   var i = e.merge(this.constructor(), t);
   return i.prevObject = this, i.context = this.context, n === "find" ? i.selector = this.selector + (this.selector ? " " : "") + r : n && (i.selector = this.selector + "." + n + "(" + r + ")"), i
  },
  each: function(t, n) {
   return e.each(this, t, n)
  },
  ready: function(t) {
   return e.ready.promise().done(t), this
  },
  eq: function(e) {
   return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
  },
  first: function() {
   return this.eq(0)
  },
  last: function() {
   return this.eq(-1)
  },
  slice: function() {
   return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
  },
  map: function(t) {
   return this.pushStack(e.map(this, function(e, n) {
    return t.call(e, n, e)
   }))
  },
  end: function() {
   return this.prevObject || this.constructor(null)
  },
  push: V,
  sort: [].sort,
  splice: [].splice
 }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
  var c, a, i, r, l, u, t = arguments[0] || {},
   o = 1,
   f = arguments.length,
   s = !1;
  typeof t == "boolean" && (s = t, t = arguments[1] || {}, o = 2), typeof t != "object" && !e.isFunction(t) && (t = {}), f === o && (t = this, --o);
  for (; o < f; o++)
   if ((c = arguments[o]) != null)
    for (a in c) {
     i = t[a], r = c[a];
     if (t === r) continue;
     s && r && (e.isPlainObject(r) || (l = e.isArray(r))) ? (l ? (l = !1, u = i && e.isArray(i) ? i : []) : u = i && e.isPlainObject(i) ? i : {}, t[a] = e.extend(s, u, r)) : r !== n && (t[a] = r)
    };
  return t
 }, e.extend({
  noConflict: function(n) {
   return t.$ === e && (t.$ = tn), n && t.jQuery === e && (t.jQuery = Rt), e
  },
  isReady: !1,
  readyWait: 1,
  holdReady: function(t) {
   t ? e.readyWait++ : e.ready(!0)
  },
  ready: function(t) {
   if (t === !0 ? --e.readyWait : e.isReady) return;
   if (!r.body) return setTimeout(e.ready, 1);
   e.isReady = !0;
   if (t !== !0 && --e.readyWait > 0) return;
   E.resolveWith(r, [e]), e.fn.trigger && e(r).trigger("ready").off("ready")
  },
  isFunction: function(t) {
   return e.type(t) === "function"
  },
  isArray: Array.isArray || function(t) {
   return e.type(t) === "array"
  },
  isWindow: function(e) {
   return e != null && e == e.window
  },
  isNumeric: function(e) {
   return !isNaN(parseFloat(e)) && isFinite(e)
  },
  type: function(e) {
   return e == null ? String(e) : we[nn.call(e)] || "object"
  },
  isPlainObject: function(t) {
   if (!t || e.type(t) !== "object" || t.nodeType || e.isWindow(t)) return !1;
   try {
    if (t.constructor && !I.call(t, "constructor") && !I.call(t.constructor.prototype, "isPrototypeOf")) return !1
   } catch (r) {
    return !1
   };
   var i;
   for (i in t);
   return i === n || I.call(t, i)
  },
  isEmptyObject: function(e) {
   var t;
   for (t in e) return !1;
   return !0
  },
  error: function(e) {
   throw new Error(e)
  },
  parseHTML: function(t, n, i) {
   var o;
   return !t || typeof t != "string" ? null : (typeof n == "boolean" && (i = n, n = 0), n = n || r, (o = ye.exec(t)) ? [n.createElement(o[1])] : (o = e.buildFragment([t], n, i ? null : []), e.merge([], (o.cacheable ? e.clone(o.fragment) : o.fragment).childNodes)))
  },
  parseJSON: function(n) {
   if (!n || typeof n != "string") return null;
   n = e.trim(n);
   if (t.JSON && t.JSON.parse) return t.JSON.parse(n);
   if (Xt.test(n.replace(It, "@").replace(Ut, "]").replace(zt, ""))) return (new Function("return " + n))();
   e.error("Invalid JSON: " + n)
  },
  parseXML: function(r) {
   var o, a;
   if (!r || typeof r != "string") return null;
   try {
    t.DOMParser ? (a = new DOMParser, o = a.parseFromString(r, "text/xml")) : (o = new ActiveXObject("Microsoft.XMLDOM"), o.async = "false", o.loadXML(r))
   } catch (i) {
    o = n
   };
   return (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + r), o
  },
  noop: function() {},
  globalEval: function(e) {
   e && on.test(e) && (t.execScript || function(e) {
    t.eval.call(t, e)
   })(e)
  },
  camelCase: function(e) {
   return e.replace(wt, "ms-").replace(Qt, Jt)
  },
  nodeName: function(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  },
  each: function(t, r, i) {
   var a, o = 0,
    s = t.length,
    l = s === n || e.isFunction(t);
   if (i) {
    if (l) {
     for (a in t)
      if (r.apply(t[a], i) === !1) break
    } else
     for (; o < s;)
      if (r.apply(t[o++], i) === !1) break
   } else if (l) {
    for (a in t)
     if (r.call(t[a], a, t[a]) === !1) break
   } else
    for (; o < s;)
     if (r.call(t[o], o, t[o++]) === !1) break; return t
  },
  trim: U && !U.call("\ufeff\u00a0") ? function(e) {
   return e == null ? "" : U.call(e)
  } : function(e) {
   return e == null ? "" : (e + "").replace(Kt, "")
  },
  makeArray: function(t, n) {
   var r, i = n || [];
   return t != null && (r = e.type(t), t.length == null || r === "string" || r === "function" || r === "regexp" || e.isWindow(t) ? V.call(i, t) : e.merge(i, t)), i
  },
  inArray: function(e, t, n) {
   var r;
   if (t) {
    if (ie) return ie.call(t, e, n);
    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
    for (; n < r; n++)
     if (n in t && t[n] === e) return n
   };
   return -1
  },
  merge: function(e, t) {
   var o = t.length,
    i = e.length,
    r = 0;
   if (typeof o == "number")
    for (; r < o; r++) e[i++] = t[r];
   else
    while (t[r] !== n) e[i++] = t[r++];
   return e.length = i, e
  },
  grep: function(e, t, n) {
   var i, o = [],
    r = 0,
    a = e.length;
   n = !!n;
   for (; r < a; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
   return o
  },
  map: function(t, r, i) {
   var a, u, o = [],
    l = 0,
    s = t.length,
    c = t instanceof e || s !== n && typeof s == "number" && (s > 0 && t[0] && t[s - 1] || s === 0 || e.isArray(t));
   if (c)
    for (; l < s; l++) a = r(t[l], l, i), a != null && (o[o.length] = a);
   else
    for (u in t) a = r(t[u], u, i), a != null && (o[o.length] = a);
   return o.concat.apply([], o)
  },
  guid: 1,
  proxy: function(t, r) {
   var o, a, i;
   return typeof r == "string" && (o = t[r], r = t, t = o), e.isFunction(t) ? (a = l.call(arguments, 2), i = function() {
    return t.apply(r, a.concat(l.call(arguments)))
   }, i.guid = t.guid = t.guid || e.guid++, i) : n
  },
  access: function(t, r, i, o, a, u, f) {
   var l, p = i == null,
    s = 0,
    c = t.length;
   if (i && typeof i == "object") {
    for (s in i) e.access(t, r, s, i[s], 1, u, o);
    a = 1
   } else if (o !== n) {
    l = f === n && e.isFunction(o), p && (l ? (l = r, r = function(t, n, r) {
     return l.call(e(t), r)
    }) : (r.call(t, o), r = null));
    if (r)
     for (; s < c; s++) r(t[s], i, l ? o.call(t[s], s, r(t[s], i)) : o, f);
    a = 1
   };
   return a ? t : p ? r.call(t) : c ? r(t[0], i) : u
  },
  now: function() {
   return (new Date).getTime()
  }
 }), e.ready.promise = function(n) {
  if (!E) {
   E = e.Deferred();
   if (r.readyState === "complete") setTimeout(e.ready, 1);
   else if (r.addEventListener) r.addEventListener("DOMContentLoaded", N, !1), t.addEventListener("load", e.ready, !1);
   else {
    r.attachEvent("onreadystatechange", N), t.attachEvent("onload", e.ready);
    var o = !1;
    try {
     o = t.frameElement == null && r.documentElement
    } catch (i) {};
    o && o.doScroll && function a() {
     if (!e.isReady) {
      try {
       o.doScroll("left")
      } catch (t) {
       return setTimeout(a, 50)
      };
      e.ready()
     }
    }()
   }
  };
  return E.promise(n)
 }, e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
  we["[object " + t + "]"] = t.toLowerCase()
 }), oe = e(r);
 var ne = {};
 e.Callbacks = function(t) {
  t = typeof t == "string" ? ne[t] || dt(t) : e.extend({}, t);
  var o, c, u, p, l, a, r = [],
   i = !t.once && [],
   f = function(e) {
    o = t.memory && e, c = !0, a = p || 0, p = 0, l = r.length, u = !0;
    for (; r && a < l; a++)
     if (r[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
      o = !1;
      break
     };
    u = !1, r && (i ? i.length && f(i.shift()) : o ? r = [] : s.disable())
   },
   s = {
    add: function() {
     if (r) {
      var n = r.length;
      (function i(n) {
       e.each(n, function(n, o) {
        var a = e.type(o);
        a === "function" ? (!t.unique || !s.has(o)) && r.push(o) : o && o.length && a !== "string" && i(o)
       })
      })(arguments), u ? l = r.length : o && (p = n, f(o))
     };
     return this
    },
    remove: function() {
     return r && e.each(arguments, function(t, n) {
      var i;
      while ((i = e.inArray(n, r, i)) > -1) r.splice(i, 1), u && (i <= l && l--, i <= a && a--)
     }), this
    },
    has: function(t) {
     return e.inArray(t, r) > -1
    },
    empty: function() {
     return r = [], this
    },
    disable: function() {
     return r = i = o = n, this
    },
    disabled: function() {
     return !r
    },
    lock: function() {
     return i = n, o || s.disable(), this
    },
    locked: function() {
     return !i
    },
    fireWith: function(e, t) {
     return t = t || [], t = [e, t.slice ? t.slice() : t], r && (!c || i) && (u ? i.push(t) : f(t)), this
    },
    fire: function() {
     return s.fireWith(this, arguments), this
    },
    fired: function() {
     return !!c
    }
   };
  return s
 }, e.extend({
  Deferred: function(t) {
   var i = [
     ["resolve", "done", e.Callbacks("once memory"), "resolved"],
     ["reject", "fail", e.Callbacks("once memory"), "rejected"],
     ["notify", "progress", e.Callbacks("memory")]
    ],
    o = "pending",
    r = {
     state: function() {
      return o
     },
     always: function() {
      return n.done(arguments).fail(arguments), this
     },
     then: function() {
      var t = arguments;
      return e.Deferred(function(r) {
       e.each(i, function(i, o) {
        var s = o[0],
         a = t[i];
        n[o[1]](e.isFunction(a) ? function() {
         var t = a.apply(this, arguments);
         t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[s + "With"](this === n ? r : this, [t])
        } : r[s])
       }), t = null
      }).promise()
     },
     promise: function(t) {
      return t != null ? e.extend(t, r) : r
     }
    },
    n = {};
   return r.pipe = r.then, e.each(i, function(e, t) {
    var a = t[2],
     s = t[3];
    r[t[1]] = a.add, s && a.add(function() {
     o = s
    }, i[e ^ 1][2].disable, i[2][2].lock), n[t[0]] = a.fire, n[t[0] + "With"] = a.fireWith
   }), r.promise(n), t && t.call(n, n), n
  },
  when: function(t) {
   var n = 0,
    i = l.call(arguments),
    r = i.length,
    a = r !== 1 || t && e.isFunction(t.promise) ? r : 0,
    o = a === 1 ? t : e.Deferred(),
    c = function(e, t, n) {
     return function(r) {
      t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? o.notifyWith(t, n) : --a || o.resolveWith(t, n)
     }
    },
    u, f, s;
   if (r > 1) {
    u = new Array(r), f = new Array(r), s = new Array(r);
    for (; n < r; n++) i[n] && e.isFunction(i[n].promise) ? i[n].promise().done(c(n, s, i)).fail(o.reject).progress(c(n, f, u)) : --a
   };
   return a || o.resolveWith(s, i), o.promise()
  }
 }), e.support = function() {
  var o, c, s, f, p, a, l, d, h, u, g, n = r.createElement("div");
  n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), s = n.getElementsByTagName("a")[0];
  if (!c || !s || !c.length) return {};
  f = r.createElement("select"), p = f.appendChild(r.createElement("option")), a = n.getElementsByTagName("input")[0], s.style.cssText = "top:1px;float:left;opacity:.5", o = {
   leadingWhitespace: n.firstChild.nodeType === 3,
   tbody: !n.getElementsByTagName("tbody").length,
   htmlSerialize: !!n.getElementsByTagName("link").length,
   style: /top/.test(s.getAttribute("style")),
   hrefNormalized: s.getAttribute("href") === "/a",
   opacity: /^0.5/.test(s.style.opacity),
   cssFloat: !!s.style.cssFloat,
   checkOn: a.value === "on",
   optSelected: p.selected,
   getSetAttribute: n.className !== "t",
   enctype: !!r.createElement("form").enctype,
   html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
   boxModel: r.compatMode === "CSS1Compat",
   submitBubbles: !0,
   changeBubbles: !0,
   focusinBubbles: !1,
   deleteExpando: !0,
   noCloneEvent: !0,
   inlineBlockNeedsLayout: !1,
   shrinkWrapBlocks: !1,
   reliableMarginRight: !0,
   boxSizingReliable: !0,
   pixelPosition: !1
  }, a.checked = !0, o.noCloneChecked = a.cloneNode(!0).checked, f.disabled = !0, o.optDisabled = !p.disabled;
  try {
   delete n.test
  } catch (i) {
   o.deleteExpando = !1
  };
  !n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", g = function() {
   o.noCloneEvent = !1
  }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", g)), a = r.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), o.radioValue = a.value === "t", a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), n.appendChild(a), l = r.createDocumentFragment(), l.appendChild(n.lastChild), o.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, o.appendChecked = a.checked, l.removeChild(a), l.appendChild(n);
  if (n.attachEvent)
   for (h in {
     submit: !0,
     change: !0,
     focusin: !0
    }) d = "on" + h, u = d in n, u || (n.setAttribute(d, "return;"), u = typeof n[d] == "function"), o[h + "Bubbles"] = u;
  return e(function() {
   var a, e, i, n, l = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
    s = r.getElementsByTagName("body")[0];
   if (!s) return;
   a = r.createElement("div"), a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(a, s.firstChild), e = r.createElement("div"), a.appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = e.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", o.reliableHiddenOffsets = u && i[0].offsetHeight === 0, e.innerHTML = "", e.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", o.boxSizing = e.offsetWidth === 4, o.doesNotIncludeMarginInBodyOffset = s.offsetTop !== 1, t.getComputedStyle && (o.pixelPosition = (t.getComputedStyle(e, null) || {}).top !== "1%", o.boxSizingReliable = (t.getComputedStyle(e, null) || {
    width: "4px"
   }).width === "4px", n = r.createElement("div"), n.style.cssText = e.style.cssText = l, n.style.marginRight = n.style.width = "0", e.style.width = "1px", e.appendChild(n), o.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof e.style.zoom != "undefined" && (e.innerHTML = "", e.style.cssText = l + "width:1px;padding:1px;display:inline;zoom:1", o.inlineBlockNeedsLayout = e.offsetWidth === 3, e.style.display = "block", e.style.overflow = "visible", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", o.shrinkWrapBlocks = e.offsetWidth !== 3, a.style.zoom = 1), s.removeChild(a), a = e = i = n = null
  }), l.removeChild(n), c = s = f = p = a = l = n = null, o
 }();
 var kt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  Et = /([A-Z])/g;
 e.extend({
  cache: {},
  deletedIds: [],
  uuid: 0,
  expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
  noData: {
   embed: !0,
   object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
   applet: !0
  },
  hasData: function(t) {
   return t = t.nodeType ? e.cache[t[e.expando]] : t[e.expando], !!t && !q(t)
  },
  data: function(t, r, i, o) {
   if (!e.acceptData(t)) return;
   var l, u, c = e.expando,
    p = typeof r == "string",
    f = t.nodeType,
    s = f ? e.cache : t,
    a = f ? t[c] : t[c] && c;
   if ((!a || !s[a] || !o && !s[a].data) && p && i === n) return;
   a || (f ? t[c] = a = e.deletedIds.pop() || e.guid++ : a = c), s[a] || (s[a] = {}, f || (s[a].toJSON = e.noop));
   if (typeof r == "object" || typeof r == "function") o ? s[a] = e.extend(s[a], r) : s[a].data = e.extend(s[a].data, r);
   return l = s[a], o || (l.data || (l.data = {}), l = l.data), i !== n && (l[e.camelCase(r)] = i), p ? (u = l[r], u == null && (u = l[e.camelCase(r)])) : u = l, u
  },
  removeData: function(t, n, r) {
   if (!e.acceptData(t)) return;
   var a, s, u, l = t.nodeType,
    i = l ? e.cache : t,
    o = l ? t[e.expando] : e.expando;
   if (!i[o]) return;
   if (n) {
    a = r ? i[o] : i[o].data;
    if (a) {
     e.isArray(n) || (n in a ? n = [n] : (n = e.camelCase(n), n in a ? n = [n] : n = n.split(" ")));
     for (s = 0, u = n.length; s < u; s++) delete a[n[s]];
     if (!(r ? q : e.isEmptyObject)(a)) return
    }
   };
   if (!r) {
    delete i[o].data;
    if (!q(i[o])) return
   };
   l ? e.cleanData([t], !0) : e.support.deleteExpando || i != i.window ? delete i[o] : i[o] = null
  },
  _data: function(t, n, r) {
   return e.data(t, n, r, !0)
  },
  acceptData: function(t) {
   var n = t.nodeName && e.noData[t.nodeName.toLowerCase()];
   return !n || n !== !0 && t.getAttribute("classid") === n
  }
 }), e.fn.extend({
  data: function(t, r) {
   var i, l, c, s, f, a = this[0],
    u = 0,
    o = null;
   if (t === n) {
    if (this.length) {
     o = e.data(a);
     if (a.nodeType === 1 && !e._data(a, "parsedAttrs")) {
      c = a.attributes;
      for (f = c.length; u < f; u++) s = c[u].name, s.indexOf("data-") || (s = e.camelCase(s.substring(5)), Te(a, s, o[s]));
      e._data(a, "parsedAttrs", !0)
     }
    };
    return o
   };
   return typeof t == "object" ? this.each(function() {
    e.data(this, t)
   }) : (i = t.split(".", 2), i[1] = i[1] ? "." + i[1] : "", l = i[1] + "!", e.access(this, function(r) {
    if (r === n) return o = this.triggerHandler("getData" + l, [i[0]]), o === n && a && (o = e.data(a, t), o = Te(a, t, o)), o === n && i[1] ? this.data(i[0]) : o;
    i[1] = r, this.each(function() {
     var n = e(this);
     n.triggerHandler("setData" + l, i), e.data(this, t, r), n.triggerHandler("changeData" + l, i)
    })
   }, null, r, arguments.length > 1, null, !1))
  },
  removeData: function(t) {
   return this.each(function() {
    e.removeData(this, t)
   })
  }
 }), e.extend({
  queue: function(t, n, r) {
   var i;
   if (t) return n = (n || "fx") + "queue", i = e._data(t, n), r && (!i || e.isArray(r) ? i = e._data(t, n, e.makeArray(r)) : i.push(r)), i || []
  },
  dequeue: function(t, n) {
   n = n || "fx";
   var i = e.queue(t, n),
    a = i.length,
    r = i.shift(),
    o = e._queueHooks(t, n),
    s = function() {
     e.dequeue(t, n)
    };
   r === "inprogress" && (r = i.shift(), a--), r && (n === "fx" && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !a && o && o.empty.fire()
  },
  _queueHooks: function(t, n) {
   var r = n + "queueHooks";
   return e._data(t, r) || e._data(t, r, {
    empty: e.Callbacks("once memory").add(function() {
     e.removeData(t, n + "queue", !0), e.removeData(t, r, !0)
    })
   })
  }
 }), e.fn.extend({
  queue: function(t, r) {
   var i = 2;
   return typeof t != "string" && (r = t, t = "fx", i--), arguments.length < i ? e.queue(this[0], t) : r === n ? this : this.each(function() {
    var n = e.queue(this, t, r);
    e._queueHooks(this, t), t === "fx" && n[0] !== "inprogress" && e.dequeue(this, t)
   })
  },
  dequeue: function(t) {
   return this.each(function() {
    e.dequeue(this, t)
   })
  },
  delay: function(t, n) {
   return t = e.fx ? e.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(e, n) {
    var r = setTimeout(e, t);
    n.stop = function() {
     clearTimeout(r)
    }
   })
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", [])
  },
  promise: function(t, r) {
   var i, l = 1,
    u = e.Deferred(),
    o = this,
    s = this.length,
    a = function() {
     --l || u.resolveWith(o, [o])
    };
   typeof t != "string" && (r = t, t = n), t = t || "fx";
   while (s--) i = e._data(o[s], t + "queueHooks"), i && i.empty && (l++, i.empty.add(a));
   return a(), u.promise(r)
  }
 });
 var u, K, G, ee = /[\t\r\n]/g,
  Bt = /\r/g,
  Lt = /^(?:button|input)$/i,
  Dt = /^(?:button|input|object|select|textarea)$/i,
  Ct = /^a(?:rea|)$/i,
  Q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
  re = e.support.getSetAttribute;
 e.fn.extend({
  attr: function(t, n) {
   return e.access(this, e.attr, t, n, arguments.length > 1)
  },
  removeAttr: function(t) {
   return this.each(function() {
    e.removeAttr(this, t)
   })
  },
  prop: function(t, n) {
   return e.access(this, e.prop, t, n, arguments.length > 1)
  },
  removeProp: function(t) {
   return t = e.propFix[t] || t, this.each(function() {
    try {
     this[t] = n, delete this[t]
    } catch (e) {}
   })
  },
  addClass: function(t) {
   var i, a, l, n, o, r, s;
   if (e.isFunction(t)) return this.each(function(n) {
    e(this).addClass(t.call(this, n, this.className))
   });
   if (t && typeof t == "string") {
    i = t.split(p);
    for (a = 0, l = this.length; a < l; a++) {
     n = this[a];
     if (n.nodeType === 1)
      if (!n.className && i.length === 1) n.className = t;
      else {
       o = " " + n.className + " ";
       for (r = 0, s = i.length; r < s; r++) o.indexOf(" " + i[r] + " ") < 0 && (o += i[r] + " ");
       n.className = e.trim(o)
      }
    }
   };
   return this
  },
  removeClass: function(t) {
   var s, o, i, r, u, a, l;
   if (e.isFunction(t)) return this.each(function(n) {
    e(this).removeClass(t.call(this, n, this.className))
   });
   if (t && typeof t == "string" || t === n) {
    s = (t || "").split(p);
    for (a = 0, l = this.length; a < l; a++) {
     i = this[a];
     if (i.nodeType === 1 && i.className) {
      o = (" " + i.className + " ").replace(ee, " ");
      for (r = 0, u = s.length; r < u; r++)
       while (o.indexOf(" " + s[r] + " ") >= 0) o = o.replace(" " + s[r] + " ", " ");
      i.className = t ? e.trim(o) : ""
     }
    }
   };
   return this
  },
  toggleClass: function(t, n) {
   var r = typeof t,
    i = typeof n == "boolean";
   return e.isFunction(t) ? this.each(function(r) {
    e(this).toggleClass(t.call(this, r, this.className, n), n)
   }) : this.each(function() {
    if (r === "string") {
     var a, u = 0,
      s = e(this),
      o = n,
      l = t.split(p);
     while (a = l[u++]) o = i ? o : !s.hasClass(a), s[o ? "addClass" : "removeClass"](a)
    } else if (r === "undefined" || r === "boolean") this.className && e._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : e._data(this, "__className__") || ""
   })
  },
  hasClass: function(e) {
   var r = " " + e + " ",
    t = 0,
    n = this.length;
   for (; t < n; t++)
    if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(ee, " ").indexOf(r) >= 0) return !0;
   return !1
  },
  val: function(t) {
   var r, i, a, o = this[0];
   if (!arguments.length) {
    if (o) return r = e.valHooks[o.type] || e.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (i = r.get(o, "value")) !== n ? i : (i = o.value, typeof i == "string" ? i.replace(Bt, "") : i == null ? "" : i);
    return
   };
   return a = e.isFunction(t), this.each(function(i) {
    var o, s = e(this);
    if (this.nodeType !== 1) return;
    a ? o = t.call(this, i, s.val()) : o = t, o == null ? o = "" : typeof o == "number" ? o += "" : e.isArray(o) && (o = e.map(o, function(e) {
     return e == null ? "" : e + ""
    })), r = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()];
    if (!r || !("set" in r) || r.set(this, o, "value") === n) this.value = o
   })
  }
 }), e.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = e.attributes.value;
     return !t || t.specified ? e.value : e.text
    }
   },
   select: {
    get: function(t) {
     var a, n, u = t.options,
      r = t.selectedIndex,
      o = t.type === "select-one" || r < 0,
      l = o ? null : [],
      s = o ? r + 1 : u.length,
      i = r < 0 ? s : o ? r : 0;
     for (; i < s; i++) {
      n = u[i];
      if ((n.selected || i === r) && (e.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !e.nodeName(n.parentNode, "optgroup"))) {
       a = e(n).val();
       if (o) return a;
       l.push(a)
      }
     };
     return l
    },
    set: function(t, n) {
     var r = e.makeArray(n);
     return e(t).find("option").each(function() {
      this.selected = e.inArray(e(this).val(), r) >= 0
     }), r.length || (t.selectedIndex = -1), r
    }
   }
  },
  attrFn: {},
  attr: function(t, r, i, o) {
   var a, s, c, l = t.nodeType;
   if (!t || l === 3 || l === 8 || l === 2) return;
   if (o && e.isFunction(e.fn[r])) return e(t)[r](i);
   if (typeof t.getAttribute == "undefined") return e.prop(t, r, i);
   c = l !== 1 || !e.isXMLDoc(t), c && (r = r.toLowerCase(), s = e.attrHooks[r] || (Q.test(r) ? K : u));
   if (i !== n) {
    if (i === null) {
     e.removeAttr(t, r);
     return
    };
    return s && "set" in s && c && (a = s.set(t, i, r)) !== n ? a : (t.setAttribute(r, i + ""), i)
   };
   return s && "get" in s && c && (a = s.get(t, r)) !== null ? a : (a = t.getAttribute(r), a === null ? n : a)
  },
  removeAttr: function(t, n) {
   var i, a, r, s, o = 0;
   if (n && t.nodeType === 1) {
    a = n.split(p);
    for (; o < a.length; o++) r = a[o], r && (i = e.propFix[r] || r, s = Q.test(r), s || e.attr(t, r, ""), t.removeAttribute(re ? r : i), s && i in t && (t[i] = !1))
   }
  },
  attrHooks: {
   type: {
    set: function(t, n) {
     if (Lt.test(t.nodeName) && t.parentNode) e.error("type property can't be changed");
     else if (!e.support.radioValue && n === "radio" && e.nodeName(t, "input")) {
      var r = t.value;
      return t.setAttribute("type", n), r && (t.value = r), n
     }
    }
   },
   value: {
    get: function(t, n) {
     return u && e.nodeName(t, "button") ? u.get(t, n) : n in t ? t.value : null
    },
    set: function(t, n, r) {
     if (u && e.nodeName(t, "button")) return u.set(t, n, r);
     t.value = n
    }
   }
  },
  propFix: {
   tabindex: "tabIndex",
   readonly: "readOnly",
   "for": "htmlFor",
   "class": "className",
   maxlength: "maxLength",
   cellspacing: "cellSpacing",
   cellpadding: "cellPadding",
   rowspan: "rowSpan",
   colspan: "colSpan",
   usemap: "useMap",
   frameborder: "frameBorder",
   contenteditable: "contentEditable"
  },
  prop: function(t, r, i) {
   var s, o, l, a = t.nodeType;
   if (!t || a === 3 || a === 8 || a === 2) return;
   return l = a !== 1 || !e.isXMLDoc(t), l && (r = e.propFix[r] || r, o = e.propHooks[r]), i !== n ? o && "set" in o && (s = o.set(t, i, r)) !== n ? s : t[r] = i : o && "get" in o && (s = o.get(t, r)) !== null ? s : t[r]
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var t = e.getAttributeNode("tabindex");
     return t && t.specified ? parseInt(t.value, 10) : Dt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : n
    }
   }
  }
 }), K = {
  get: function(t, r) {
   var o, i = e.prop(t, r);
   return i === !0 || typeof i != "boolean" && (o = t.getAttributeNode(r)) && o.nodeValue !== !1 ? r.toLowerCase() : n
  },
  set: function(t, n, r) {
   var i;
   return n === !1 ? e.removeAttr(t, r) : (i = e.propFix[r] || r, i in t && (t[i] = !0), t.setAttribute(r, r.toLowerCase())), r
  }
 }, re || (G = {
  name: !0,
  id: !0,
  coords: !0
 }, u = e.valHooks.button = {
  get: function(e, t) {
   var r;
   return r = e.getAttributeNode(t), r && (G[t] ? r.value !== "" : r.specified) ? r.value : n
  },
  set: function(e, t, n) {
   var i = e.getAttributeNode(n);
   return i || (i = r.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
  }
 }, e.each(["width", "height"], function(t, n) {
  e.attrHooks[n] = e.extend(e.attrHooks[n], {
   set: function(e, t) {
    if (t === "") return e.setAttribute(n, "auto"), t
   }
  })
 }), e.attrHooks.contenteditable = {
  get: u.get,
  set: function(e, t, n) {
   t === "" && (t = "false"), u.set(e, t, n)
  }
 }), e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(t, r) {
  e.attrHooks[r] = e.extend(e.attrHooks[r], {
   get: function(e) {
    var t = e.getAttribute(r, 2);
    return t === null ? n : t
   }
  })
 }), e.support.style || (e.attrHooks.style = {
  get: function(e) {
   return e.style.cssText.toLowerCase() || n
  },
  set: function(e, t) {
   return e.style.cssText = t + ""
  }
 }), e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
  get: function(e) {
   var t = e.parentNode;
   return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
  }
 })), e.support.enctype || (e.propFix.enctype = "encoding"), e.support.checkOn || e.each(["radio", "checkbox"], function() {
  e.valHooks[this] = {
   get: function(e) {
    return e.getAttribute("value") === null ? "on" : e.value
   }
  }
 }), e.each(["radio", "checkbox"], function() {
  e.valHooks[this] = e.extend(e.valHooks[this], {
   set: function(t, n) {
    if (e.isArray(n)) return t.checked = e.inArray(e(t).val(), n) >= 0
   }
  })
 });
 var P = /^(?:textarea|input|select)$/i,
  le = /^([^\.]*|)(?:\.(.+)|)$/,
  Yt = /(?:^|\s)hover(\.\S+|)\b/,
  Mt = /^key/,
  Ft = /^(?:mouse|contextmenu)|click/,
  ke = /^(?:focusinfocus|focusoutblur)$/,
  Z = function(t) {
   return e.event.special.hover ? t : t.replace(Yt, "mouseenter$1 mouseleave$1")
  };
 e.event = {
   add: function(t, r, i, o, a) {
    var d, l, p, h, m, s, y, f, g, c, u;
    if (t.nodeType === 3 || t.nodeType === 8 || !r || !i || !(d = e._data(t))) return;
    i.handler && (g = i, i = g.handler, a = g.selector), i.guid || (i.guid = e.guid++), p = d.events, p || (d.events = p = {}), l = d.handle, l || (d.handle = l = function(t) {
     return typeof e == "undefined" || !!t && e.event.triggered === t.type ? n : e.event.dispatch.apply(l.elem, arguments)
    }, l.elem = t), r = e.trim(Z(r)).split(" ");
    for (h = 0; h < r.length; h++) {
     m = le.exec(r[h]) || [], s = m[1], y = (m[2] || "").split(".").sort(), u = e.event.special[s] || {}, s = (a ? u.delegateType : u.bindType) || s, u = e.event.special[s] || {}, f = e.extend({
      type: s,
      origType: m[1],
      data: o,
      handler: i,
      guid: i.guid,
      selector: a,
      needsContext: a && e.expr.match.needsContext.test(a),
      namespace: y.join(".")
     }, g), c = p[s];
     if (!c) {
      c = p[s] = [], c.delegateCount = 0;
      if (!u.setup || u.setup.call(t, o, y, l) === !1) t.addEventListener ? t.addEventListener(s, l, !1) : t.attachEvent && t.attachEvent("on" + s, l)
     };
     u.add && (u.add.call(t, f), f.handler.guid || (f.handler.guid = i.guid)), a ? c.splice(c.delegateCount++, 0, f) : c.push(f), e.event.global[s] = !0
    };
    t = null
   },
   global: {},
   remove: function(t, n, r, i, o) {
    var h, g, a, m, c, y, d, f, u, l, s, p = e.hasData(t) && e._data(t);
    if (!p || !(f = p.events)) return;
    n = e.trim(Z(n || "")).split(" ");
    for (h = 0; h < n.length; h++) {
     g = le.exec(n[h]) || [], a = m = g[1], c = g[2];
     if (!a) {
      for (a in f) e.event.remove(t, a + n[h], r, i, !0);
      continue
     };
     u = e.event.special[a] || {}, a = (i ? u.delegateType : u.bindType) || a, l = f[a] || [], y = l.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
     for (d = 0; d < l.length; d++) s = l[d], (o || m === s.origType) && (!r || r.guid === s.guid) && (!c || c.test(s.namespace)) && (!i || i === s.selector || i === "**" && s.selector) && (l.splice(d--, 1), s.selector && l.delegateCount--, u.remove && u.remove.call(t, s));
     l.length === 0 && y !== l.length && ((!u.teardown || u.teardown.call(t, c, p.handle) === !1) && e.removeEvent(t, a, p.handle), delete f[a])
    };
    e.isEmptyObject(f) && (delete p.handle, e.removeData(t, "events", !0))
   },
   customEvent: {
    getData: !0,
    setData: !0,
    changeData: !0
   },
   trigger: function(i, o, a, s) {
    if (!a || a.nodeType !== 3 && a.nodeType !== 8) {
     var y, b, c, u, f, d, p, h, g, v, l = i.type || i,
      m = [];
     if (ke.test(l + e.event.triggered)) return;
     l.indexOf("!") >= 0 && (l = l.slice(0, -1), b = !0), l.indexOf(".") >= 0 && (m = l.split("."), l = m.shift(), m.sort());
     if ((!a || e.event.customEvent[l]) && !e.event.global[l]) return;
     i = typeof i == "object" ? i[e.expando] ? i : new e.Event(l, i) : new e.Event(l), i.type = l, i.isTrigger = !0, i.exclusive = b, i.namespace = m.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = l.indexOf(":") < 0 ? "on" + l : "";
     if (!a) {
      y = e.cache;
      for (c in y) y[c].events && y[c].events[l] && e.event.trigger(i, o, y[c].handle.elem, !0);
      return
     };
     i.result = n, i.target || (i.target = a), o = o != null ? e.makeArray(o) : [], o.unshift(i), p = e.event.special[l] || {};
     if (p.trigger && p.trigger.apply(a, o) === !1) return;
     g = [
      [a, p.bindType || l]
     ];
     if (!s && !p.noBubble && !e.isWindow(a)) {
      v = p.delegateType || l, u = ke.test(v + l) ? a : a.parentNode;
      for (f = a; u; u = u.parentNode) g.push([u, v]), f = u;
      f === (a.ownerDocument || r) && g.push([f.defaultView || f.parentWindow || t, v])
     };
     for (c = 0; c < g.length && !i.isPropagationStopped(); c++) u = g[c][0], i.type = g[c][1], h = (e._data(u, "events") || {})[i.type] && e._data(u, "handle"), h && h.apply(u, o), h = d && u[d], h && e.acceptData(u) && h.apply && h.apply(u, o) === !1 && i.preventDefault();
     return i.type = l, !s && !i.isDefaultPrevented() && (!p._default || p._default.apply(a.ownerDocument, o) === !1) && (l !== "click" || !e.nodeName(a, "a")) && e.acceptData(a) && d && a[l] && (l !== "focus" && l !== "blur" || i.target.offsetWidth !== 0) && !e.isWindow(a) && (f = a[d], f && (a[d] = null), e.event.triggered = l, a[l](), e.event.triggered = n, f && (a[d] = f)), i.result
    };
    return
   },
   dispatch: function(r) {
    r = e.event.fix(r || t.event);
    var a, g, o, m, h, u, y, i, s, x, c = (e._data(this, "events") || {})[r.type] || [],
     f = c.delegateCount,
     v = l.call(arguments),
     b = !r.exclusive && !r.namespace,
     p = e.event.special[r.type] || {},
     d = [];
    v[0] = r, r.delegateTarget = this;
    if (p.preDispatch && p.preDispatch.call(this, r) === !1) return;
    if (f && (!r.button || r.type !== "click"))
     for (o = r.target; o != this; o = o.parentNode || this)
      if (o.disabled !== !0 || r.type !== "click") {
       h = {}, y = [];
       for (a = 0; a < f; a++) i = c[a], s = i.selector, h[s] === n && (h[s] = i.needsContext ? e(s, this).index(o) >= 0 : e.find(s, this, null, [o]).length), h[s] && y.push(i);
       y.length && d.push({
        elem: o,
        matches: y
       })
      };
    c.length > f && d.push({
     elem: this,
     matches: c.slice(f)
    });
    for (a = 0; a < d.length && !r.isPropagationStopped(); a++) {
     u = d[a], r.currentTarget = u.elem;
     for (g = 0; g < u.matches.length && !r.isImmediatePropagationStopped(); g++) {
      i = u.matches[g];
      if (b || !r.namespace && !i.namespace || r.namespace_re && r.namespace_re.test(i.namespace)) r.data = i.data, r.handleObj = i, m = ((e.event.special[i.origType] || {}).handle || i.handler).apply(u.elem, v), m !== n && (r.result = m, m === !1 && (r.preventDefault(), r.stopPropagation()))
     }
    };
    return p.postDispatch && p.postDispatch.call(this, r), r.result
   },
   props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
   fixHooks: {},
   keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function(e, t) {
     return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
    }
   },
   mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function(e, t) {
     var l, o, i, a = t.button,
      s = t.fromElement;
     return e.pageX == null && t.clientX != null && (l = e.target.ownerDocument || r, o = l.documentElement, i = l.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), !e.which && a !== n && (e.which = a & 1 ? 1 : a & 2 ? 3 : a & 4 ? 2 : 0), e
    }
   },
   fix: function(t) {
    if (t[e.expando]) return t;
    var a, o, i = t,
     n = e.event.fixHooks[t.type] || {},
     s = n.props ? this.props.concat(n.props) : this.props;
    t = e.Event(i);
    for (a = s.length; a;) o = s[--a], t[o] = i[o];
    return t.target || (t.target = i.srcElement || r), t.target.nodeType === 3 && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, n.filter ? n.filter(t, i) : t
   },
   special: {
    load: {
     noBubble: !0
    },
    focus: {
     delegateType: "focusin"
    },
    blur: {
     delegateType: "focusout"
    },
    beforeunload: {
     setup: function(t, n, r) {
      e.isWindow(this) && (this.onbeforeunload = r)
     },
     teardown: function(e, t) {
      this.onbeforeunload === t && (this.onbeforeunload = null)
     }
    }
   },
   simulate: function(t, n, r, i) {
    var o = e.extend(new e.Event, r, {
     type: t,
     isSimulated: !0,
     originalEvent: {}
    });
    i ? e.event.trigger(o, null, n) : e.event.dispatch.call(n, o), o.isDefaultPrevented() && r.preventDefault()
   }
  }, e.event.handle = e.event.dispatch, e.removeEvent = r.removeEventListener ? function(e, t, n) {
   e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
   var r = "on" + t;
   e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
  }, e.Event = function(t, n) {
   if (!(this instanceof e.Event)) return new e.Event(t, n);
   t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? w : g) : this.type = t, n && e.extend(this, n), this.timeStamp = t && t.timeStamp || e.now(), this[e.expando] = !0
  }, e.Event.prototype = {
   preventDefault: function() {
    this.isDefaultPrevented = w;
    var e = this.originalEvent;
    if (!e) return;
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
   },
   stopPropagation: function() {
    this.isPropagationStopped = w;
    var e = this.originalEvent;
    if (!e) return;
    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
   },
   stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = w, this.stopPropagation()
   },
   isDefaultPrevented: g,
   isPropagationStopped: g,
   isImmediatePropagationStopped: g
  }, e.each({
   mouseenter: "mouseover",
   mouseleave: "mouseout"
  }, function(t, n) {
   e.event.special[t] = {
    delegateType: n,
    bindType: n,
    handle: function(t) {
     var a, o = this,
      i = t.relatedTarget,
      r = t.handleObj,
      s = r.selector;
     if (!i || i !== o && !e.contains(o, i)) t.type = r.origType, a = r.handler.apply(this, arguments), t.type = n;
     return a
    }
   }
  }), e.support.submitBubbles || (e.event.special.submit = {
   setup: function() {
    if (e.nodeName(this, "form")) return !1;
    e.event.add(this, "click._submit keypress._submit", function(t) {
     var i = t.target,
      r = e.nodeName(i, "input") || e.nodeName(i, "button") ? i.form : n;
     r && !e._data(r, "_submit_attached") && (e.event.add(r, "submit._submit", function(e) {
      e._submit_bubble = !0
     }), e._data(r, "_submit_attached", !0))
    })
   },
   postDispatch: function(t) {
    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && e.event.simulate("submit", this.parentNode, t, !0))
   },
   teardown: function() {
    if (e.nodeName(this, "form")) return !1;
    e.event.remove(this, "._submit")
   }
  }), e.support.changeBubbles || (e.event.special.change = {
   setup: function() {
    if (P.test(this.nodeName)) {
     if (this.type === "checkbox" || this.type === "radio") e.event.add(this, "propertychange._change", function(e) {
      e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
     }), e.event.add(this, "click._change", function(t) {
      this._just_changed && !t.isTrigger && (this._just_changed = !1), e.event.simulate("change", this, t, !0)
     });
     return !1
    };
    e.event.add(this, "beforeactivate._change", function(t) {
     var n = t.target;
     P.test(n.nodeName) && !e._data(n, "_change_attached") && (e.event.add(n, "change._change", function(t) {
      this.parentNode && !t.isSimulated && !t.isTrigger && e.event.simulate("change", this.parentNode, t, !0)
     }), e._data(n, "_change_attached", !0))
    })
   },
   handle: function(e) {
    var t = e.target;
    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
   },
   teardown: function() {
    return e.event.remove(this, "._change"), !P.test(this.nodeName)
   }
  }), e.support.focusinBubbles || e.each({
   focus: "focusin",
   blur: "focusout"
  }, function(t, n) {
   var o = 0,
    i = function(t) {
     e.event.simulate(n, t.target, e.event.fix(t), !0)
    };
   e.event.special[n] = {
    setup: function() {
     o++ === 0 && r.addEventListener(t, i, !0)
    },
    teardown: function() {
     --o === 0 && r.removeEventListener(t, i, !0)
    }
   }
  }), e.fn.extend({
   on: function(t, r, i, o, a) {
    var s, l;
    if (typeof t == "object") {
     typeof r != "string" && (i = i || r, r = n);
     for (l in t) this.on(l, r, i, t[l], a);
     return this
    };
    i == null && o == null ? (o = r, i = r = n) : o == null && (typeof r == "string" ? (o = i, i = n) : (o = i, i = r, r = n));
    if (o === !1) o = g;
    else if (!o) return this;
    return a === 1 && (s = o, o = function(t) {
     return e().off(t), s.apply(this, arguments)
    }, o.guid = s.guid || (s.guid = e.guid++)), this.each(function() {
     e.event.add(this, t, o, i, r)
    })
   },
   one: function(e, t, n, r) {
    return this.on(e, t, n, r, 1)
   },
   off: function(t, r, i) {
    var o, a;
    if (t && t.preventDefault && t.handleObj) return o = t.handleObj, e(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
    if (typeof t == "object") {
     for (a in t) this.off(a, r, t[a]);
     return this
    };
    if (r === !1 || typeof r == "function") i = r, r = n;
    return i === !1 && (i = g), this.each(function() {
     e.event.remove(this, t, i, r)
    })
   },
   bind: function(e, t, n) {
    return this.on(e, null, t, n)
   },
   unbind: function(e, t) {
    return this.off(e, null, t)
   },
   live: function(t, n, r) {
    return e(this.context).on(t, this.selector, n, r), this
   },
   die: function(t, n) {
    return e(this.context).off(t, this.selector || "**", n), this
   },
   delegate: function(e, t, n, r) {
    return this.on(t, e, n, r)
   },
   undelegate: function(e, t, n) {
    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
   },
   trigger: function(t, n) {
    return this.each(function() {
     e.event.trigger(t, n, this)
    })
   },
   triggerHandler: function(t, n) {
    if (this[0]) return e.event.trigger(t, n, this[0], !0)
   },
   toggle: function(t) {
    var r = arguments,
     o = t.guid || e.guid++,
     n = 0,
     i = function(i) {
      var o = (e._data(this, "lastToggle" + t.guid) || 0) % n;
      return e._data(this, "lastToggle" + t.guid, o + 1), i.preventDefault(), r[o].apply(this, arguments) || !1
     };
    i.guid = o;
    while (n < r.length) r[n++].guid = o;
    return this.click(i)
   },
   hover: function(e, t) {
    return this.mouseenter(e).mouseleave(t || e)
   }
  }), e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
   e.fn[n] = function(e, t) {
    return t == null && (t = e, e = null), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
   }, Mt.test(n) && (e.event.fixHooks[n] = e.event.keyHooks), Ft.test(n) && (e.event.fixHooks[n] = e.event.mouseHooks)
  }),
  function(t, n) {
   function r(e, t, n, r) {
    n = n || [], t = t || c;
    var a, i, l, o, s = t.nodeType;
    if (!e || typeof e != "string") return n;
    if (s !== 1 && s !== 9) return [];
    l = A(t);
    if (!l && !r)
     if (a = ne.exec(e))
      if (o = a[1]) {
       if (s === 9) {
        i = t.getElementById(o);
        if (!i || !i.parentNode) return n;
        if (i.id === o) return n.push(i), n
       } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(o)) && Q(t, i) && i.id === o) return n.push(i), n
      } else {
       if (a[2]) return y.apply(n, m.call(t.getElementsByTagName(e), 0)), n;
       if ((o = a[3]) && G && t.getElementsByClassName) return y.apply(n, m.call(t.getElementsByClassName(o), 0)), n
      };
    return L(e.replace(N, "$1"), t, n, r, l)
   };

   function b(e) {
    return function(t) {
     var n = t.nodeName.toLowerCase();
     return n === "input" && t.type === e
    }
   };

   function z(e) {
    return function(t) {
     var n = t.nodeName.toLowerCase();
     return (n === "input" || n === "button") && t.type === e
    }
   };

   function d(e) {
    return u(function(t) {
     return t = +t, u(function(n, r) {
      var i, a = e([], n.length, t),
       o = a.length;
      while (o--) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
     })
    })
   };

   function S(e, t, n) {
    if (e === t) return n;
    var r = e.nextSibling;
    while (r) {
     if (r === t) return -1;
     r = r.nextSibling
    };
    return 1
   };

   function C(e, t) {
    var a, o, c, l, n, f, u, p = K[s][e + " "];
    if (p) return t ? 0 : p.slice(0);
    n = e, f = [], u = i.preFilter;
    while (n) {
     if (!a || (o = oe.exec(n))) o && (n = n.slice(o[0].length) || n), f.push(c = []);
     a = !1;
     if (o = ie.exec(n)) c.push(a = new Y(o.shift())), n = n.slice(a.length), a.type = o[0].replace(N, " ");
     for (l in i.filter)(o = w[l].exec(n)) && (!u[l] || (o = u[l](o))) && (c.push(a = new Y(o.shift())), n = n.slice(a.length), a.type = l, a.matches = o);
     if (!a) break
    };
    return t ? n.length : n ? r.error(e) : K(e, f).slice(0)
   };

   function H(e, t, n) {
    var r = t.dir,
     i = n && t.dir === "parentNode",
     o = le++;
    return t.first ? function(t, n, o) {
     while (t = t[r])
      if (i || t.nodeType === 1) return e(t, n, o)
    } : function(t, n, a) {
     if (!a) {
      var l, c = E + " " + o + " ",
       u = c + R;
      while (t = t[r])
       if (i || t.nodeType === 1) {
        if ((l = t[s]) === u) return t.sizset;
        if (typeof l == "string" && l.indexOf(c) === 0) {
         if (t.sizset) return t
        } else {
         t[s] = u;
         if (e(t, n, a)) return t.sizset = !0, t;
         t.sizset = !1
        }
       }
     } else
      while (t = t[r])
       if (i || t.nodeType === 1)
        if (e(t, n, a)) return t
    }
   };

   function D(e) {
    return e.length > 1 ? function(t, n, r) {
     var i = e.length;
     while (i--)
      if (!e[i](t, n, r)) return !1;
     return !0
    } : e[0]
   };

   function x(e, t, n, r, i) {
    var a, s = [],
     o = 0,
     u = e.length,
     l = t != null;
    for (; o < u; o++)
     if (a = e[o])
      if (!n || n(a, r, i)) s.push(a), l && t.push(o);
    return s
   };

   function F(e, t, n, r, i, o) {
    return r && !r[s] && (r = F(r)), i && !i[s] && (i = F(i, o)), u(function(o, a, s, l) {
     var f, c, p, g = [],
      h = [],
      v = a.length,
      m = o || se(t || "*", s.nodeType ? [s] : s, []),
      d = e && (o || !t) ? x(m, g, e, s, l) : m,
      u = n ? i || (o ? e : v || r) ? [] : a : d;
     n && n(d, u, s, l);
     if (r) {
      f = x(u, h), r(f, [], s, l), c = f.length;
      while (c--)
       if (p = f[c]) u[h[c]] = !(d[h[c]] = p)
     };
     if (o) {
      if (i || e) {
       if (i) {
        f = [], c = u.length;
        while (c--)(p = u[c]) && f.push(d[c] = p);
        i(null, u = [], f, l)
       };
       c = u.length;
       while (c--)(p = u[c]) && (f = i ? q.call(o, p) : g[c]) > -1 && (o[f] = !(a[f] = p))
      }
     } else u = x(u === a ? u.splice(v, u.length) : u), i ? i(null, a, u, l) : y.apply(a, u)
    })
   };

   function M(e) {
    var u, r, n, a = e.length,
     l = i.relative[e[0].type],
     c = l || i.relative[" "],
     t = l ? 1 : 0,
     f = H(function(e) {
      return e === u
     }, c, !0),
     p = H(function(e) {
      return q.call(u, e) > -1
     }, c, !0),
     o = [function(e, t, n) {
      return !l && (n || t !== T) || ((u = t).nodeType ? f(e, t, n) : p(e, t, n))
     }];
    for (; t < a; t++)
     if (r = i.relative[e[t].type]) o = [H(D(o), r)];
     else {
      r = i.filter[e[t].type].apply(null, e[t].matches);
      if (r[s]) {
       n = ++t;
       for (; n < a; n++)
        if (i.relative[e[n].type]) break;
       return F(t > 1 && D(o), t > 1 && e.slice(0, t - 1).join("").replace(N, "$1"), r, t < n && M(e.slice(t, n)), n < a && M(e = e.slice(n)), n < a && e.join(""))
      };
      o.push(r)
     };
    return D(o)
   };

   function re(e, t) {
    var o = t.length > 0,
     a = e.length > 0,
     n = function(s, l, u, f, p) {
      var h, m, v, g = [],
       b = 0,
       d = "0",
       N = s && [],
       w = p != null,
       k = T,
       S = s || a && i.find.TAG("*", p && l.parentNode || l),
       C = E += k == null ? 1 : Math.E;
      w && (T = l !== c && l, R = n.el);
      for (;
       (h = S[d]) != null; d++) {
       if (a && h) {
        for (m = 0; v = e[m]; m++)
         if (v(h, l, u)) {
          f.push(h);
          break
         };
        w && (E = C, R = ++n.el)
       };
       o && ((h = !v && h) && b--, s && N.push(h))
      };
      b += d;
      if (o && d !== b) {
       for (m = 0; v = t[m]; m++) v(N, g, l, u);
       if (s) {
        if (b > 0)
         while (d--) !N[d] && !g[d] && (g[d] = me.call(f));
        g = x(g)
       };
       y.apply(f, g), w && !s && g.length > 0 && b + t.length > 1 && r.uniqueSort(f)
      };
      return w && (E = C, T = k), N
     };
    return n.el = 0, o ? u(n) : n
   };

   function se(e, t, n) {
    var i = 0,
     o = t.length;
    for (; i < o; i++) r(e, t[i], n);
    return n
   };

   function L(e, t, n, r, o) {
    var l, a, u, f, c, s = C(e),
     p = s.length;
    if (!r && s.length === 1) {
     a = s[0] = s[0].slice(0);
     if (a.length > 2 && (u = a[0]).type === "ID" && t.nodeType === 9 && !o && i.relative[a[1].type]) {
      t = i.find.ID(u.matches[0].replace(g, ""), t, o)[0];
      if (!t) return n;
      e = e.slice(a.shift().length)
     };
     for (l = w.POS.test(e) ? -1 : a.length - 1; l >= 0; l--) {
      u = a[l];
      if (i.relative[f = u.type]) break;
      if (c = i.find[f])
       if (r = c(u.matches[0].replace(g, ""), j.test(a[0].type) && t.parentNode || t, o)) {
        a.splice(l, 1), e = r.length && a.join("");
        if (!e) return y.apply(n, m.call(r, 0)), n;
        break
       }
     }
    };
    return W(e, s)(r, t, o, n, j.test(e)), n
   };

   function U() {};
   var R, I, i, k, A, Q, W, P, v, T, J = !0,
    f = "undefined",
    s = ("sizcache" + Math.random()).replace(".", ""),
    Y = String,
    c = t.document,
    l = c.documentElement,
    E = 0,
    le = 0,
    me = [].pop,
    y = [].push,
    m = [].slice,
    q = [].indexOf || function(e) {
     var t = 0,
      n = this.length;
     for (; t < n; t++)
      if (this[t] === e) return t;
     return -1
    },
    u = function(e, t) {
     return e[s] = t == null || t, e
    },
    B = function() {
     var e = {},
      t = [];
     return u(function(n, r) {
      return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
     }, e)
    },
    X = B(),
    K = B(),
    Z = B(),
    a = "[\\x20\\t\\r\\n\\f]",
    h = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
    ue = h.replace("w", "w#"),
    ae = "([*^$|!~]?=)",
    ee = "\\[" + a + "*(" + h + ")" + a + "*(?:" + ae + a + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ue + ")|)|)" + a + "*\\]",
    O = ":(" + h + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + ee + ")|[^:]|\\\\.)*|.*))\\)|)",
    V = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)",
    N = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
    oe = new RegExp("^" + a + "*," + a + "*"),
    ie = new RegExp("^" + a + "*([\\x20\\t\\r\\n\\f>+~])" + a + "*"),
    te = new RegExp(O),
    ne = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
    ve = /^:not/,
    j = /[\x20\t\r\n\f]*[+~]/,
    ye = /:not\($/,
    he = /h\d/i,
    de = /input|select|textarea|button/i,
    g = /\\(?!\\)/g,
    w = {
     ID: new RegExp("^#(" + h + ")"),
     CLASS: new RegExp("^\\.(" + h + ")"),
     NAME: new RegExp("^\\[name=['\"]?(" + h + ")['\"]?\\]"),
     TAG: new RegExp("^(" + h.replace("w", "w*") + ")"),
     ATTR: new RegExp("^" + ee),
     PSEUDO: new RegExp("^" + O),
     POS: new RegExp(V, "i"),
     CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
     needsContext: new RegExp("^" + a + "*[>+~]|" + V, "i")
    },
    p = function(e) {
     var n = c.createElement("div");
     try {
      return e(n)
     } catch (t) {
      return !1
     } finally {
      n = null
     }
    },
    ge = p(function(e) {
     return e.appendChild(c.createComment("")), !e.getElementsByTagName("*").length
    }),
    pe = p(function(e) {
     return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== f && e.firstChild.getAttribute("href") === "#"
    }),
    fe = p(function(e) {
     e.innerHTML = "<select></select>";
     var t = typeof e.lastChild.getAttribute("multiple");
     return t !== "boolean" && t !== "string"
    }),
    G = p(function(e) {
     return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
    }),
    ce = p(function(e) {
     e.id = s + 0, e.innerHTML = "<a name='" + s + "'></a><div name='" + s + "'></div>", l.insertBefore(e, l.firstChild);
     var t = c.getElementsByName && c.getElementsByName(s).length === 2 + c.getElementsByName(s + 0).length;
     return I = !c.getElementById(s), l.removeChild(e), t
    });
   try {
    m.call(l.childNodes, 0)[0].nodeType
   } catch (o) {
    m = function(e) {
     var n, t = [];
     for (; n = this[e]; e++) t.push(n);
     return t
    }
   };
   r.matches = function(e, t) {
    return r(e, null, null, t)
   }, r.matchesSelector = function(e, t) {
    return r(t, null, null, [e]).length > 0
   }, k = r.getText = function(e) {
    var r, n = "",
     i = 0,
     t = e.nodeType;
    if (t) {
     if (t === 1 || t === 9 || t === 11) {
      if (typeof e.textContent == "string") return e.textContent;
      for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
     } else if (t === 3 || t === 4) return e.nodeValue
    } else
     for (; r = e[i]; i++) n += k(r);
    return n
   }, A = r.isXML = function(e) {
    var t = e && (e.ownerDocument || e).documentElement;
    return t ? t.nodeName !== "HTML" : !1
   }, Q = r.contains = l.contains ? function(e, t) {
    var r = e.nodeType === 9 ? e.documentElement : e,
     n = t && t.parentNode;
    return e === n || !!(n && n.nodeType === 1 && r.contains && r.contains(n))
   } : l.compareDocumentPosition ? function(e, t) {
    return t && !!(e.compareDocumentPosition(t) & 16)
   } : function(e, t) {
    while (t = t.parentNode)
     if (t === e) return !0;
    return !1
   }, r.attr = function(e, t) {
    var n, r = A(e);
    return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || fe ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
   }, i = r.selectors = {
    cacheLength: 50,
    createPseudo: u,
    match: w,
    attrHandle: pe ? {} : {
     href: function(e) {
      return e.getAttribute("href", 2)
     },
     type: function(e) {
      return e.getAttribute("type")
     }
    },
    find: {
     ID: I ? function(e, t, n) {
      if (typeof t.getElementById !== f && !n) {
       var r = t.getElementById(e);
       return r && r.parentNode ? [r] : []
      }
     } : function(e, t, r) {
      if (typeof t.getElementById !== f && !r) {
       var i = t.getElementById(e);
       return i ? i.id === e || typeof i.getAttributeNode !== f && i.getAttributeNode("id").value === e ? [i] : n : []
      }
     },
     TAG: ge ? function(e, t) {
      if (typeof t.getElementsByTagName !== f) return t.getElementsByTagName(e)
     } : function(e, t) {
      var r = t.getElementsByTagName(e);
      if (e === "*") {
       var n, o = [],
        i = 0;
       for (; n = r[i]; i++) n.nodeType === 1 && o.push(n);
       return o
      };
      return r
     },
     NAME: ce && function(e, t) {
      if (typeof t.getElementsByName !== f) return t.getElementsByName(name)
     },
     CLASS: G && function(e, t, n) {
      if (typeof t.getElementsByClassName !== f && !n) return t.getElementsByClassName(e)
     }
    },
    relative: {
     ">": {
      dir: "parentNode",
      first: !0
     },
     " ": {
      dir: "parentNode"
     },
     "+": {
      dir: "previousSibling",
      first: !0
     },
     "~": {
      dir: "previousSibling"
     }
    },
    preFilter: {
     ATTR: function(e) {
      return e[1] = e[1].replace(g, ""), e[3] = (e[4] || e[5] || "").replace(g, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
     },
     CHILD: function(e) {
      return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || r.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && r.error(e[0]), e
     },
     PSEUDO: function(e) {
      var t, n;
      if (w.CHILD.test(e[0])) return null;
      if (e[3]) e[2] = e[3];
      else if (t = e[4]) te.test(t) && (n = C(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
      return e.slice(0, 3)
     }
    },
    filter: {
     ID: I ? function(e) {
      return e = e.replace(g, ""),
       function(t) {
        return t.getAttribute("id") === e
       }
     } : function(e) {
      return e = e.replace(g, ""),
       function(t) {
        var n = typeof t.getAttributeNode !== f && t.getAttributeNode("id");
        return n && n.value === e
       }
     },
     TAG: function(e) {
      return e === "*" ? function() {
       return !0
      } : (e = e.replace(g, "").toLowerCase(), function(t) {
       return t.nodeName && t.nodeName.toLowerCase() === e
      })
     },
     CLASS: function(e) {
      var t = X[s][e + " "];
      return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && X(e, function(e) {
       return t.test(e.className || typeof e.getAttribute !== f && e.getAttribute("class") || "")
      })
     },
     ATTR: function(e, t, n) {
      return function(i, o) {
       var a = r.attr(i, e);
       return a == null ? t === "!=" : t ? (a += "", t === "=" ? a === n : t === "!=" ? a !== n : t === "^=" ? n && a.indexOf(n) === 0 : t === "*=" ? n && a.indexOf(n) > -1 : t === "$=" ? n && a.substr(a.length - n.length) === n : t === "~=" ? (" " + a + " ").indexOf(n) > -1 : t === "|=" ? a === n || a.substr(0, n.length + 1) === n + "-" : !1) : !0
      }
     },
     CHILD: function(e, t, n, r) {
      return e === "nth" ? function(e) {
       var i, t, o = e.parentNode;
       if (n === 1 && r === 0) return !0;
       if (o) {
        t = 0;
        for (i = o.firstChild; i; i = i.nextSibling)
         if (i.nodeType === 1) {
          t++;
          if (e === i) break
         }
       };
       return t -= r, t === n || t % n === 0 && t / n >= 0
      } : function(t) {
       var n = t;
       switch (e) {
        case "only":
        case "first":
         while (n = n.previousSibling)
          if (n.nodeType === 1) return !1;
         if (e === "first") return !0;
         n = t;
        case "last":
         while (n = n.nextSibling)
          if (n.nodeType === 1) return !1;
         return !0
       }
      }
     },
     PSEUDO: function(e, t) {
      var o, n = i.pseudos[e] || i.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
      return n[s] ? n(t) : n.length > 1 ? (o = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, r) {
       var o, a = n(e, t),
        i = a.length;
       while (i--) o = q.call(e, a[i]), e[o] = !(r[o] = a[i])
      }) : function(e) {
       return n(e, 0, o)
      }) : n
     }
    },
    pseudos: {
     not: u(function(e) {
      var n = [],
       r = [],
       t = W(e.replace(N, "$1"));
      return t[s] ? u(function(e, n, r, i) {
       var a, s = t(e, null, i, []),
        o = e.length;
       while (o--)
        if (a = s[o]) e[o] = !(n[o] = a)
      }) : function(e, i, o) {
       return n[0] = e, t(n, null, o, r), !r.pop()
      }
     }),
     has: u(function(e) {
      return function(t) {
       return r(e, t).length > 0
      }
     }),
     contains: u(function(e) {
      return function(t) {
       return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
      }
     }),
     enabled: function(e) {
      return e.disabled === !1
     },
     disabled: function(e) {
      return e.disabled === !0
     },
     checked: function(e) {
      var t = e.nodeName.toLowerCase();
      return t === "input" && !!e.checked || t === "option" && !!e.selected
     },
     selected: function(e) {
      return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
     },
     parent: function(e) {
      return !i.pseudos.empty(e)
     },
     empty: function(e) {
      var t;
      e = e.firstChild;
      while (e) {
       if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
       e = e.nextSibling
      };
      return !0
     },
     header: function(e) {
      return he.test(e.nodeName)
     },
     text: function(e) {
      var n, t;
      return e.nodeName.toLowerCase() === "input" && (n = e.type) === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === n)
     },
     radio: b("radio"),
     checkbox: b("checkbox"),
     file: b("file"),
     password: b("password"),
     image: b("image"),
     submit: z("submit"),
     reset: z("reset"),
     button: function(e) {
      var t = e.nodeName.toLowerCase();
      return t === "input" && e.type === "button" || t === "button"
     },
     input: function(e) {
      return de.test(e.nodeName)
     },
     focus: function(e) {
      var t = e.ownerDocument;
      return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
     },
     active: function(e) {
      return e === e.ownerDocument.activeElement
     },
     first: d(function() {
      return [0]
     }),
     last: d(function(e, t) {
      return [t - 1]
     }),
     eq: d(function(e, t, n) {
      return [n < 0 ? n + t : n]
     }),
     even: d(function(e, t) {
      for (var n = 0; n < t; n += 2) e.push(n);
      return e
     }),
     odd: d(function(e, t) {
      for (var n = 1; n < t; n += 2) e.push(n);
      return e
     }),
     lt: d(function(e, t, n) {
      for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
      return e
     }),
     gt: d(function(e, t, n) {
      for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
      return e
     })
    }
   }, P = l.compareDocumentPosition ? function(e, t) {
    return e === t ? (v = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
   } : function(e, t) {
    if (e === t) return v = !0, 0;
    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
    var l, u, i = [],
     o = [],
     s = e.parentNode,
     a = t.parentNode,
     r = s;
    if (s === a) return S(e, t);
    if (!s) return -1;
    if (!a) return 1;
    while (r) i.unshift(r), r = r.parentNode;
    r = a;
    while (r) o.unshift(r), r = r.parentNode;
    l = i.length, u = o.length;
    for (var n = 0; n < l && n < u; n++)
     if (i[n] !== o[n]) return S(i[n], o[n]);
    return n === l ? S(e, o[n], -1) : S(i[n], t, 1)
   }, [0, 0].sort(P), J = !v, r.uniqueSort = function(e) {
    var i, r = [],
     t = 1,
     n = 0;
    v = J, e.sort(P);
    if (v) {
     for (; i = e[t]; t++) i === e[t - 1] && (n = r.push(t));
     while (n--) e.splice(r[n], 1)
    };
    return e
   }, r.error = function(e) {
    throw new Error("Syntax error, unrecognized expression: " + e)
   }, W = r.compile = function(e, t) {
    var r, i = [],
     o = [],
     n = Z[s][e + " "];
    if (!n) {
     t || (t = C(e)), r = t.length;
     while (r--) n = M(t[r]), n[s] ? i.push(n) : o.push(n);
     n = Z(e, re(o, i))
    };
    return n
   }, c.querySelectorAll && function() {
    var i, u = L,
     c = /'|\\/g,
     o = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
     e = [":focus"],
     t = [":active"],
     n = l.matchesSelector || l.mozMatchesSelector || l.webkitMatchesSelector || l.oMatchesSelector || l.msMatchesSelector;
    p(function(t) {
     t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || e.push("\\[" + a + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || e.push(":checked")
    }), p(function(t) {
     t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && e.push("[*^$]=" + a + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
    }), e = new RegExp(e.join("|")), L = function(t, n, r, i, a) {
     if (!i && !a && !e.test(t)) {
      var f, p, h = !0,
       l = s,
       g = n,
       d = n.nodeType === 9 && t;
      if (n.nodeType === 1 && n.nodeName.toLowerCase() !== "object") {
       f = C(t), (h = n.getAttribute("id")) ? l = h.replace(c, "\\$&") : n.setAttribute("id", l), l = "[id='" + l + "'] ", p = f.length;
       while (p--) f[p] = l + f[p].join("");
       g = j.test(t) && n.parentNode || n, d = f.join(",")
      };
      if (d) try {
       return y.apply(r, m.call(g.querySelectorAll(d), 0)), r
      } catch (o) {} finally {
       h || n.removeAttribute("id")
      }
     };
     return u(t, n, r, i, a)
    }, n && (p(function(e) {
     i = n.call(e, "div");
     try {
      n.call(e, "[test!='']:sizzle"), t.push("!=", O)
     } catch (r) {}
    }), t = new RegExp(t.join("|")), r.matchesSelector = function(a, s) {
     s = s.replace(o, "='$1']");
     if (!A(a) && !t.test(s) && !e.test(s)) try {
      var u = n.call(a, s);
      if (u || i || a.document && a.document.nodeType !== 11) return u
     } catch (l) {};
     return r(s, null, null, [a]).length > 0
    })
   }(), i.pseudos.nth = i.pseudos.eq, i.filters = U.prototype = i.pseudos, i.setFilters = new U, r.attr = e.attr, e.find = r, e.expr = r.selectors, e.expr[":"] = e.expr.pseudos, e.unique = r.uniqueSort, e.text = r.getText, e.isXMLDoc = r.isXML, e.contains = r.contains
  }(t);
 var Wt = /Until$/,
  qt = /^(?:parents|prev(?:Until|All))/,
  Ot = /^.[^:#\[\.,]*$/,
  Pe = e.expr.match.needsContext,
  Ht = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };
 e.fn.extend({
  find: function(t) {
   var n, a, s, i, o, r, l = this;
   if (typeof t != "string") return e(t).filter(function() {
    for (n = 0, a = l.length; n < a; n++)
     if (e.contains(l[n], this)) return !0
   });
   r = this.pushStack("", "find", t);
   for (n = 0, a = this.length; n < a; n++) {
    s = r.length, e.find(t, this[n], r);
    if (n > 0)
     for (i = s; i < r.length; i++)
      for (o = 0; o < s; o++)
       if (r[o] === r[i]) {
        r.splice(i--, 1);
        break
       }
   };
   return r
  },
  has: function(t) {
   var n, r = e(t, this),
    i = r.length;
   return this.filter(function() {
    for (n = 0; n < i; n++)
     if (e.contains(this, r[n])) return !0
   })
  },
  not: function(e) {
   return this.pushStack(fe(this, e, !1), "not", e)
  },
  filter: function(e) {
   return this.pushStack(fe(this, e, !0), "filter", e)
  },
  is: function(t) {
   return !!t && (typeof t == "string" ? Pe.test(t) ? e(t, this.context).index(this[0]) >= 0 : e.filter(t, this).length > 0 : this.filter(t).length > 0)
  },
  closest: function(t, n) {
   var r, o = 0,
    s = this.length,
    i = [],
    a = Pe.test(t) || typeof t != "string" ? e(t, n || this.context) : 0;
   for (; o < s; o++) {
    r = this[o];
    while (r && r.ownerDocument && r !== n && r.nodeType !== 11) {
     if (a ? a.index(r) > -1 : e.find.matchesSelector(r, t)) {
      i.push(r);
      break
     };
     r = r.parentNode
    }
   };
   return i = i.length > 1 ? e.unique(i) : i, this.pushStack(i, "closest", t)
  },
  index: function(t) {
   return t ? typeof t == "string" ? e.inArray(this[0], e(t)) : e.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
  },
  add: function(t, n) {
   var i = typeof t == "string" ? e(t, n) : e.makeArray(t && t.nodeType ? [t] : t),
    r = e.merge(this.get(), i);
   return this.pushStack(x(i[0]) || x(r[0]) ? r : e.unique(r))
  },
  addBack: function(e) {
   return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
  }
 }), e.fn.andSelf = e.fn.addBack, e.each({
  parent: function(e) {
   var t = e.parentNode;
   return t && t.nodeType !== 11 ? t : null
  },
  parents: function(t) {
   return e.dir(t, "parentNode")
  },
  parentsUntil: function(t, n, r) {
   return e.dir(t, "parentNode", r)
  },
  next: function(e) {
   return ce(e, "nextSibling")
  },
  prev: function(e) {
   return ce(e, "previousSibling")
  },
  nextAll: function(t) {
   return e.dir(t, "nextSibling")
  },
  prevAll: function(t) {
   return e.dir(t, "previousSibling")
  },
  nextUntil: function(t, n, r) {
   return e.dir(t, "nextSibling", r)
  },
  prevUntil: function(t, n, r) {
   return e.dir(t, "previousSibling", r)
  },
  siblings: function(t) {
   return e.sibling((t.parentNode || {}).firstChild, t)
  },
  children: function(t) {
   return e.sibling(t.firstChild)
  },
  contents: function(t) {
   return e.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : e.merge([], t.childNodes)
  }
 }, function(t, n) {
  e.fn[t] = function(r, i) {
   var o = e.map(this, n, r);
   return Wt.test(t) || (i = r), i && typeof i == "string" && (o = e.filter(i, o)), o = this.length > 1 && !Ht[t] ? e.unique(o) : o, this.length > 1 && qt.test(t) && (o = o.reverse()), this.pushStack(o, t, l.call(arguments).join(","))
  }
 }), e.extend({
  filter: function(t, n, r) {
   return r && (t = ":not(" + t + ")"), n.length === 1 ? e.find.matchesSelector(n[0], t) ? [n[0]] : [] : e.find.matches(t, n)
  },
  dir: function(t, r, i) {
   var a = [],
    o = t[r];
   while (o && o.nodeType !== 9 && (i === n || o.nodeType !== 1 || !e(o).is(i))) o.nodeType === 1 && a.push(o), o = o[r];
   return a
  },
  sibling: function(e, t) {
   var n = [];
   for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
   return n
  }
 });
 var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  rn = / jQuery\d+="(?:null|\d+)"/g,
  z = /^\s+/,
  Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  je = /<([\w:]+)/,
  Zt = /<tbody/i,
  en = /<|&#?\w+;/,
  At = /<(?:script|style|link)/i,
  jt = /<(?:script|object|embed|option|style)/i,
  F = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
  Xe = /^(?:checkbox|radio)$/,
  Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
  Tt = /\/(java|ecma)script/i,
  Nt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
  s = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   legend: [1, "<fieldset>", "</fieldset>"],
   thead: [1, "<table>", "</table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
   area: [1, "<map>", "</map>"],
   _default: [0, "", ""]
  },
  Oe = he(r),
  W = Oe.appendChild(r.createElement("div"));
 s.optgroup = s.option, s.tbody = s.tfoot = s.colgroup = s.caption = s.thead, s.th = s.td, e.support.htmlSerialize || (s._default = [1, "X<div>", "</div>"]), e.fn.extend({
   text: function(t) {
    return e.access(this, function(t) {
     return t === n ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(t))
    }, null, t, arguments.length)
   },
   wrapAll: function(t) {
    if (e.isFunction(t)) return this.each(function(n) {
     e(this).wrapAll(t.call(this, n))
    });
    if (this[0]) {
     var n = e(t, this[0].ownerDocument).eq(0).clone(!0);
     this[0].parentNode && n.insertBefore(this[0]), n.map(function() {
      var e = this;
      while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
      return e
     }).append(this)
    };
    return this
   },
   wrapInner: function(t) {
    return e.isFunction(t) ? this.each(function(n) {
     e(this).wrapInner(t.call(this, n))
    }) : this.each(function() {
     var r = e(this),
      n = r.contents();
     n.length ? n.wrapAll(t) : r.append(t)
    })
   },
   wrap: function(t) {
    var n = e.isFunction(t);
    return this.each(function(r) {
     e(this).wrapAll(n ? t.call(this, r) : t)
    })
   },
   unwrap: function() {
    return this.parent().each(function() {
     e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
    }).end()
   },
   append: function() {
    return this.domManip(arguments, !0, function(e) {
     (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
    })
   },
   prepend: function() {
    return this.domManip(arguments, !0, function(e) {
     (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
    })
   },
   before: function() {
    if (!x(this[0])) return this.domManip(arguments, !1, function(e) {
     this.parentNode.insertBefore(e, this)
    });
    if (arguments.length) {
     var t = e.clean(arguments);
     return this.pushStack(e.merge(t, this), "before", this.selector)
    }
   },
   after: function() {
    if (!x(this[0])) return this.domManip(arguments, !1, function(e) {
     this.parentNode.insertBefore(e, this.nextSibling)
    });
    if (arguments.length) {
     var t = e.clean(arguments);
     return this.pushStack(e.merge(this, t), "after", this.selector)
    }
   },
   remove: function(t, n) {
    var r, i = 0;
    for (;
     (r = this[i]) != null; i++)
     if (!t || e.filter(t, [r]).length) !n && r.nodeType === 1 && (e.cleanData(r.getElementsByTagName("*")), e.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
    return this
   },
   empty: function() {
    var t, n = 0;
    for (;
     (t = this[n]) != null; n++) {
     t.nodeType === 1 && e.cleanData(t.getElementsByTagName("*"));
     while (t.firstChild) t.removeChild(t.firstChild)
    };
    return this
   },
   clone: function(t, n) {
    return t = t == null ? !1 : t, n = n == null ? t : n, this.map(function() {
     return e.clone(this, t, n)
    })
   },
   html: function(t) {
    return e.access(this, function(t) {
     var i = this[0] || {},
      o = 0,
      a = this.length;
     if (t === n) return i.nodeType === 1 ? i.innerHTML.replace(rn, "") : n;
     if (typeof t == "string" && !At.test(t) && (e.support.htmlSerialize || !F.test(t)) && (e.support.leadingWhitespace || !z.test(t)) && !s[(je.exec(t) || ["", ""])[1].toLowerCase()]) {
      t = t.replace(Re, "<$1></$2>");
      try {
       for (; o < a; o++) i = this[o] || {}, i.nodeType === 1 && (e.cleanData(i.getElementsByTagName("*")), i.innerHTML = t);
       i = 0
      } catch (r) {}
     };
     i && this.empty().append(t)
    }, null, t, arguments.length)
   },
   replaceWith: function(t) {
    return x(this[0]) ? this.length ? this.pushStack(e(e.isFunction(t) ? t() : t), "replaceWith", t) : this : e.isFunction(t) ? this.each(function(n) {
     var r = e(this),
      i = r.html();
     r.replaceWith(t.call(this, n, i))
    }) : (typeof t != "string" && (t = e(t).detach()), this.each(function() {
     var n = this.nextSibling,
      r = this.parentNode;
     e(this).remove(), n ? e(n).before(t) : e(r).append(t)
    }))
   },
   detach: function(e) {
    return this.remove(e, !0)
   },
   domManip: function(t, r, i) {
    t = [].concat.apply([], t);
    var c, s, o, p, a = 0,
     l = t[0],
     u = [],
     f = this.length;
    if (!e.support.checkClone && f > 1 && typeof l == "string" && Le.test(l)) return this.each(function() {
     e(this).domManip(t, r, i)
    });
    if (e.isFunction(l)) return this.each(function(o) {
     var a = e(this);
     t[0] = l.call(this, o, r ? a.html() : n), a.domManip(t, r, i)
    });
    if (this[0]) {
     c = e.buildFragment(t, this, u), o = c.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
     if (s) {
      r = r && e.nodeName(s, "tr");
      for (p = c.cacheable || f - 1; a < f; a++) i.call(r && e.nodeName(this[a], "table") ? Ue(this[a], "tbody") : this[a], a === p ? o : e.clone(o, !0, !0))
     };
     o = s = null, u.length && e.each(u, function(t, n) {
      n.src ? e.ajax ? e.ajax({
       url: n.src,
       type: "GET",
       dataType: "script",
       async: !1,
       global: !1,
       "throws": !0
      }) : e.error("no ajax") : e.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Nt, "")), n.parentNode && n.parentNode.removeChild(n)
     })
    };
    return this
   }
  }), e.buildFragment = function(t, i, o) {
   var s, l, u, a = t[0];
   return i = i || r, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, t.length === 1 && typeof a == "string" && a.length < 512 && i === r && a.charAt(0) === "<" && !jt.test(a) && (e.support.checkClone || !Le.test(a)) && (e.support.html5Clone || !F.test(a)) && (l = !0, s = e.fragments[a], u = s !== n), s || (s = i.createDocumentFragment(), e.clean(t, i, s, o), l && (e.fragments[a] = u && s)), {
    fragment: s,
    cacheable: l
   }
  }, e.fragments = {}, e.each({
   appendTo: "append",
   prependTo: "prepend",
   insertBefore: "before",
   insertAfter: "after",
   replaceAll: "replaceWith"
  }, function(t, n) {
   e.fn[t] = function(r) {
    var l, i = 0,
     s = [],
     a = e(r),
     u = a.length,
     o = this.length === 1 && this[0].parentNode;
    if ((o == null || o && o.nodeType === 11 && o.childNodes.length === 1) && u === 1) return a[n](this[0]), this;
    for (; i < u; i++) l = (i > 0 ? this.clone(!0) : this).get(), e(a[i])[n](l), s = s.concat(l);
    return this.pushStack(s, t, a.selector)
   }
  }), e.extend({
   clone: function(t, n, r) {
    var a, s, i, o;
    e.support.html5Clone || e.isXMLDoc(t) || !F.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (W.innerHTML = t.outerHTML, W.removeChild(o = W.firstChild));
    if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (t.nodeType === 1 || t.nodeType === 11) && !e.isXMLDoc(t)) {
     pe(t, o), a = A(t), s = A(o);
     for (i = 0; a[i]; ++i) s[i] && pe(a[i], s[i])
    };
    if (n) {
     de(t, o);
     if (r) {
      a = A(t), s = A(o);
      for (i = 0; a[i]; ++i) de(a[i], s[i])
     }
    };
    return a = s = null, o
   },
   clean: function(t, n, i, o) {
    var u, f, a, g, d, b, l, v, p, x, y, m, h = n === r && Oe,
     c = [];
    if (!n || typeof n.createDocumentFragment == "undefined") n = r;
    for (u = 0;
     (a = t[u]) != null; u++) {
     typeof a == "number" && (a += "");
     if (!a) continue;
     if (typeof a == "string")
      if (!en.test(a)) a = n.createTextNode(a);
      else {
       h = h || he(n), l = n.createElement("div"), h.appendChild(l), a = a.replace(Re, "<$1></$2>"), g = (je.exec(a) || ["", ""])[1].toLowerCase(), d = s[g] || s._default, b = d[0], l.innerHTML = d[1] + a + d[2];
       while (b--) l = l.lastChild;
       if (!e.support.tbody) {
        v = Zt.test(a), p = g === "table" && !v ? l.firstChild && l.firstChild.childNodes : d[1] === "<table>" && !v ? l.childNodes : [];
        for (f = p.length - 1; f >= 0; --f) e.nodeName(p[f], "tbody") && !p[f].childNodes.length && p[f].parentNode.removeChild(p[f])
       };
       !e.support.leadingWhitespace && z.test(a) && l.insertBefore(n.createTextNode(z.exec(a)[0]), l.firstChild), a = l.childNodes, l.parentNode.removeChild(l)
      };
     a.nodeType ? c.push(a) : e.merge(c, a)
    };
    l && (a = l = h = null);
    if (!e.support.appendChecked)
     for (u = 0;
      (a = c[u]) != null; u++) e.nodeName(a, "input") ? be(a) : typeof a.getElementsByTagName != "undefined" && e.grep(a.getElementsByTagName("input"), be);
    if (i) {
     y = function(e) {
      if (!e.type || Tt.test(e.type)) return o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e)
     };
     for (u = 0;
      (a = c[u]) != null; u++)
      if (!e.nodeName(a, "script") || !y(a)) i.appendChild(a), typeof a.getElementsByTagName != "undefined" && (m = e.grep(e.merge([], a.getElementsByTagName("script")), y), c.splice.apply(c, [u + 1, 0].concat(m)), u += m.length)
    };
    return c
   },
   cleanData: function(t, n) {
    var o, i, r, s, u = 0,
     a = e.expando,
     l = e.cache,
     f = e.support.deleteExpando,
     c = e.event.special;
    for (;
     (r = t[u]) != null; u++)
     if (n || e.acceptData(r)) {
      i = r[a], o = i && l[i];
      if (o) {
       if (o.events)
        for (s in o.events) c[s] ? e.event.remove(r, s) : e.removeEvent(r, s, o.handle);
       l[i] && (delete l[i], f ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null, e.deletedIds.push(i))
      }
     }
   }
  }),
  function() {
   var n, t;
   e.uaMatch = function(e) {
    e = e.toLowerCase();
    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {
     browser: t[1] || "",
     version: t[2] || "0"
    }
   }, n = e.uaMatch(Pt.userAgent), t = {}, n.browser && (t[n.browser] = !0, t.version = n.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), e.browser = t, e.sub = function() {
    function t(e, n) {
     return new t.fn.init(e, n)
    };
    e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, i) {
     return i && i instanceof e && !(i instanceof t) && (i = t(i)), e.fn.init.call(this, r, i, n)
    }, t.fn.init.prototype = t.fn;
    var n = t(r);
    return t
   }
  }();
 var o, m, h, B = /alpha\([^)]*\)/i,
  Qe = /opacity=([^)]*)/,
  Ye = /^(top|right|bottom|left)$/,
  Ve = /^(none|table(?!-c[ea]).+)/,
  qe = /^margin/,
  Je = new RegExp("^(" + T + ")(.*)$", "i"),
  j = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
  sn = new RegExp("^([-+])=(" + T + ")", "i"),
  X = {
   BODY: "block"
  },
  Vt = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  De = {
   letterSpacing: 0,
   fontWeight: 400
  },
  f = ["Top", "Right", "Bottom", "Left"],
  He = ["Webkit", "O", "Moz", "ms"],
  an = e.fn.toggle;
 e.fn.extend({
  css: function(t, r) {
   return e.access(this, function(t, r, i) {
    return i !== n ? e.style(t, r, i) : e.css(t, r)
   }, t, r, arguments.length > 1)
  },
  show: function() {
   return xe(this, !0)
  },
  hide: function() {
   return xe(this)
  },
  toggle: function(t, n) {
   var r = typeof t == "boolean";
   return e.isFunction(t) && e.isFunction(n) ? an.apply(this, arguments) : this.each(function() {
    (r ? t : D(this)) ? e(this).show(): e(this).hide()
   })
  }
 }), e.extend({
  cssHooks: {
   opacity: {
    get: function(e, t) {
     if (t) {
      var n = o(e, "opacity");
      return n === "" ? "1" : n
     }
    }
   }
  },
  cssNumber: {
   fillOpacity: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
  },
  style: function(t, r, i, o) {
   if (!t || t.nodeType === 3 || t.nodeType === 8 || !t.style) return;
   var u, c, s, l = e.camelCase(r),
    f = t.style;
   r = e.cssProps[l] || (e.cssProps[l] = ge(f, l)), s = e.cssHooks[r] || e.cssHooks[l];
   if (i === n) return s && "get" in s && (u = s.get(t, !1, o)) !== n ? u : f[r];
   c = typeof i, c === "string" && (u = sn.exec(i)) && (i = (u[1] + 1) * u[2] + parseFloat(e.css(t, r)), c = "number");
   if (i == null || c === "number" && isNaN(i)) return;
   c === "number" && !e.cssNumber[l] && (i += "px");
   if (!s || !("set" in s) || (i = s.set(t, i, o)) !== n) try {
    f[r] = i
   } catch (a) {}
  },
  css: function(t, r, i, a) {
   var s, c, l, u = e.camelCase(r);
   return r = e.cssProps[u] || (e.cssProps[u] = ge(t.style, u)), l = e.cssHooks[r] || e.cssHooks[u], l && "get" in l && (s = l.get(t, !0, a)), s === n && (s = o(t, r)), s === "normal" && r in De && (s = De[r]), i || a !== n ? (c = parseFloat(s), i || e.isNumeric(c) ? c || 0 : s) : s
  },
  swap: function(e, t, n) {
   var o, r, i = {};
   for (r in t) i[r] = e.style[r], e.style[r] = t[r];
   o = n.call(e);
   for (r in t) e.style[r] = i[r];
   return o
  }
 }), t.getComputedStyle ? o = function(n, r) {
  var o, s, l, u, a = t.getComputedStyle(n, null),
   i = n.style;
  return a && (o = a.getPropertyValue(r) || a[r], o === "" && !e.contains(n.ownerDocument, n) && (o = e.style(n, r)), j.test(o) && qe.test(r) && (s = i.width, l = i.minWidth, u = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = a.width, i.width = s, i.minWidth = l, i.maxWidth = u)), o
 } : r.documentElement.currentStyle && (o = function(e, t) {
  var o, i, n = e.currentStyle && e.currentStyle[t],
   r = e.style;
  return n == null && r && r[t] && (n = r[t]), j.test(n) && !Ye.test(t) && (o = r.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), r.left = t === "fontSize" ? "1em" : n, n = r.pixelLeft + "px", r.left = o, i && (e.runtimeStyle.left = i)), n === "" ? "auto" : n
 }), e.each(["height", "width"], function(t, n) {
  e.cssHooks[n] = {
   get: function(t, r, i) {
    if (r) return t.offsetWidth === 0 && Ve.test(o(t, "display")) ? e.swap(t, Vt, function() {
     return Ce(t, n, i)
    }) : Ce(t, n, i)
   },
   set: function(t, r, i) {
    return ve(t, r, i ? ae(t, n, i, e.support.boxSizing && e.css(t, "boxSizing") === "border-box") : 0)
   }
  }
 }), e.support.opacity || (e.cssHooks.opacity = {
  get: function(e, t) {
   return Qe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
  },
  set: function(t, n) {
   var r = t.style,
    i = t.currentStyle,
    a = e.isNumeric(n) ? "alpha(opacity=" + n * 100 + ")" : "",
    o = i && i.filter || r.filter || "";
   r.zoom = 1;
   if (n >= 1 && e.trim(o.replace(B, "")) === "" && r.removeAttribute) {
    r.removeAttribute("filter");
    if (i && !i.filter) return
   };
   r.filter = B.test(o) ? o.replace(B, a) : o + " " + a
  }
 }), e(function() {
  e.support.reliableMarginRight || (e.cssHooks.marginRight = {
   get: function(t, n) {
    return e.swap(t, {
     display: "inline-block"
    }, function() {
     if (n) return o(t, "marginRight")
    })
   }
  }), !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(t, n) {
   e.cssHooks[n] = {
    get: function(t, r) {
     if (r) {
      var i = o(t, n);
      return j.test(i) ? e(t).position()[n] + "px" : i
     }
    }
   }
  })
 }), e.expr && e.expr.filters && (e.expr.filters.hidden = function(t) {
  return t.offsetWidth === 0 && t.offsetHeight === 0 || !e.support.reliableHiddenOffsets && (t.style && t.style.display || o(t, "display")) === "none"
 }, e.expr.filters.visible = function(t) {
  return !e.expr.filters.hidden(t)
 }), e.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(t, n) {
  e.cssHooks[t + n] = {
   expand: function(e) {
    var r, i = typeof e == "string" ? e.split(" ") : [e],
     o = {};
    for (r = 0; r < 4; r++) o[t + f[r] + n] = i[r] || i[r - 2] || i[0];
    return o
   }
  }, qe.test(t) || (e.cssHooks[t + n].set = ve)
 });
 var et = /%20/g,
  Ke = /\[\]$/,
  Ee = /\r?\n/g,
  Ze = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
  Ge = /^(?:select|textarea)/i;
 e.fn.extend({
  serialize: function() {
   return e.param(this.serializeArray())
  },
  serializeArray: function() {
   return this.map(function() {
    return this.elements ? e.makeArray(this.elements) : this
   }).filter(function() {
    return this.name && !this.disabled && (this.checked || Ge.test(this.nodeName) || Ze.test(this.type))
   }).map(function(t, n) {
    var r = e(this).val();
    return r == null ? null : e.isArray(r) ? e.map(r, function(e, t) {
     return {
      name: n.name,
      value: e.replace(Ee, "\r\n")
     }
    }) : {
     name: n.name,
     value: r.replace(Ee, "\r\n")
    }
   }).get()
  }
 }), e.param = function(t, r) {
  var o, i = [],
   a = function(t, n) {
    n = e.isFunction(n) ? n() : n == null ? "" : n, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(n)
   };
  r === n && (r = e.ajaxSettings && e.ajaxSettings.traditional);
  if (e.isArray(t) || t.jquery && !e.isPlainObject(t)) e.each(t, function() {
   a(this.name, this.value)
  });
  else
   for (o in t) M(o, t[o], r, a);
  return i.join("&").replace(et, "+")
 };
 var d, c, bt = /#.*$/,
  mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
  gt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
  pt = /^(?:GET|HEAD)$/,
  tt = /^\/\//,
  ze = /\?/,
  ht = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  xt = /([?&])_=[^&]*/,
  Be = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
  Ie = e.fn.load,
  R = {},
  Ae = {},
  Fe = ["*/"] + ["*"];
 try {
  c = St.href
 } catch (i) {
  c = r.createElement("a"), c.href = "", c = c.href
 };
 d = Be.exec(c.toLowerCase()) || [], e.fn.load = function(t, r, i) {
  if (typeof t != "string" && Ie) return Ie.apply(this, arguments);
  if (!this.length) return this;
  var a, s, u, l = this,
   o = t.indexOf(" ");
  return o >= 0 && (a = t.slice(o, t.length), t = t.slice(0, o)), e.isFunction(r) ? (i = r, r = n) : r && typeof r == "object" && (s = "POST"), e.ajax({
   url: t,
   type: s,
   dataType: "html",
   data: r,
   complete: function(e, t) {
    i && l.each(i, u || [e.responseText, t, e])
   }
  }).done(function(t) {
   u = arguments, l.html(a ? e("<div>").append(t.replace(ht, "")).find(a) : t)
  }), this
 }, e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, n) {
  e.fn[n] = function(e) {
   return this.on(n, e)
  }
 }), e.each(["get", "post"], function(t, r) {
  e[r] = function(t, i, o, a) {
   return e.isFunction(i) && (a = a || o, o = i, i = n), e.ajax({
    type: r,
    url: t,
    data: i,
    success: o,
    dataType: a
   })
  }
 }), e.extend({
  getScript: function(t, r) {
   return e.get(t, n, r, "script")
  },
  getJSON: function(t, n, r) {
   return e.get(t, n, r, "json")
  },
  ajaxSetup: function(t, n) {
   return n ? Ne(t, e.ajaxSettings) : (n = t, t = e.ajaxSettings), Ne(t, n), t
  },
  ajaxSettings: {
   url: c,
   isLocal: gt.test(d[1]),
   global: !0,
   type: "GET",
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   processData: !0,
   async: !0,
   accepts: {
    xml: "application/xml, text/xml",
    html: "text/html",
    text: "text/plain",
    json: "application/json, text/javascript",
    "*": Fe
   },
   contents: {
    xml: /xml/,
    html: /html/,
    json: /json/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText"
   },
   converters: {
    "* text": t.String,
    "text html": !0,
    "text json": e.parseJSON,
    "text xml": e.parseXML
   },
   flatOptions: {
    context: !0,
    url: !0
   }
  },
  ajaxPrefilter: Y(R),
  ajaxTransport: Y(Ae),
  ajax: function(t, r) {
   function v(t, r, a, f) {
    var d, v, y, N, h, p = r;
    if (s === 2) return;
    s = 2, T && clearTimeout(T), c = n, b = f || "", o.readyState = t > 0 ? 4 : 0, a && (N = yt(i, o, a));
    if (t >= 200 && t < 300 || t === 304) i.ifModified && (h = o.getResponseHeader("Last-Modified"), h && (e.lastModified[l] = h), h = o.getResponseHeader("Etag"), h && (e.etag[l] = h)), t === 304 ? (p = "notmodified", d = !0) : (d = ft(i, N), p = d.state, v = d.data, y = d.error, d = !y);
    else {
     y = p;
     if (!p || t) p = "error", t < 0 && (t = 0)
    };
    o.status = t, o.statusText = (r || p) + "", d ? x.resolveWith(u, [v, p, o]) : x.rejectWith(u, [o, p, y]), o.statusCode(m), m = n, g && w.trigger("ajax" + (d ? "Success" : "Error"), [o, i, d ? v : y]), C.fireWith(u, [o, p]), g && (w.trigger("ajaxComplete", [o, i]), --e.active || e.event.trigger("ajaxStop"))
   };
   typeof t == "object" && (r = t, t = n), r = r || {};
   var l, b, y, c, T, f, g, h, i = e.ajaxSetup({}, r),
    u = i.context || i,
    w = u !== i && (u.nodeType || u instanceof e) ? e(u) : e.event,
    x = e.Deferred(),
    C = e.Callbacks("once memory"),
    m = i.statusCode || {},
    S = {},
    A = {},
    s = 0,
    N = "canceled",
    o = {
     readyState: 0,
     setRequestHeader: function(e, t) {
      if (!s) {
       var n = e.toLowerCase();
       e = A[n] = A[n] || e, S[e] = t
      };
      return this
     },
     getAllResponseHeaders: function() {
      return s === 2 ? b : null
     },
     getResponseHeader: function(e) {
      var t;
      if (s === 2) {
       if (!y) {
        y = {};
        while (t = mt.exec(b)) y[t[1].toLowerCase()] = t[2]
       };
       t = y[e.toLowerCase()]
      };
      return t === n ? null : t
     },
     overrideMimeType: function(e) {
      return s || (i.mimeType = e), this
     },
     abort: function(e) {
      return e = e || N, c && c.abort(e), v(0, e), this
     }
    };
   x.promise(o), o.success = o.done, o.error = o.fail, o.complete = C.add, o.statusCode = function(e) {
    if (e) {
     var t;
     if (s < 2)
      for (t in e) m[t] = [m[t], e[t]];
     else t = e[o.status], o.always(t)
    };
    return this
   }, i.url = ((t || i.url) + "").replace(bt, "").replace(tt, d[1] + "//"), i.dataTypes = e.trim(i.dataType || "*").toLowerCase().split(p), i.crossDomain == null && (f = Be.exec(i.url.toLowerCase()), i.crossDomain = !(!f || f[1] === d[1] && f[2] === d[2] && (f[3] || (f[1] === "http:" ? 80 : 443)) == (d[3] || (d[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = e.param(i.data, i.traditional)), L(R, i, r, o);
   if (s === 2) return o;
   g = i.global, i.type = i.type.toUpperCase(), i.hasContent = !pt.test(i.type), g && e.active++ === 0 && e.event.trigger("ajaxStart");
   if (!i.hasContent) {
    i.data && (i.url += (ze.test(i.url) ? "&" : "?") + i.data, delete i.data), l = i.url;
    if (i.cache === !1) {
     var k = e.now(),
      E = i.url.replace(xt, "$1_=" + k);
     i.url = E + (E === i.url ? (ze.test(i.url) ? "&" : "?") + "_=" + k : "")
    }
   }(i.data && i.hasContent && i.contentType !== !1 || r.contentType) && o.setRequestHeader("Content-Type", i.contentType), i.ifModified && (l = l || i.url, e.lastModified[l] && o.setRequestHeader("If-Modified-Since", e.lastModified[l]), e.etag[l] && o.setRequestHeader("If-None-Match", e.etag[l])), o.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + Fe + "; q=0.01" : "") : i.accepts["*"]);
   for (h in i.headers) o.setRequestHeader(h, i.headers[h]);
   if (!i.beforeSend || i.beforeSend.call(u, o, i) !== !1 && s !== 2) {
    N = "abort";
    for (h in {
      success: 1,
      error: 1,
      complete: 1
     }) o[h](i[h]);
    c = L(Ae, i, r, o);
    if (!c) v(-1, "No Transport");
    else {
     o.readyState = 1, g && w.trigger("ajaxSend", [o, i]), i.async && i.timeout > 0 && (T = setTimeout(function() {
      o.abort("timeout")
     }, i.timeout));
     try {
      s = 1, c.send(S, v)
     } catch (a) {
      if (!(s < 2)) throw a;
      v(-1, a)
     }
    };
    return o
   };
   return o.abort()
  },
  active: 0,
  lastModified: {},
  etag: {}
 });
 var Se = [],
  ct = /\?/,
  H = /(=)\?(?=&|$)|\?\?/,
  vt = e.now();
 e.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var t = Se.pop() || e.expando + "_" + vt++;
   return this[t] = !0, t
  }
 }), e.ajaxPrefilter("json jsonp", function(r, i, o) {
  var a, l, s, p = r.data,
   f = r.url,
   c = r.jsonp !== !1,
   u = c && H.test(f),
   d = c && !u && typeof p == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && H.test(p);
  if (r.dataTypes[0] === "jsonp" || u || d) return a = r.jsonpCallback = e.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, l = t[a], u ? r.url = f.replace(H, "$1" + a) : d ? r.data = p.replace(H, "$1" + a) : c && (r.url += (ct.test(f) ? "&" : "?") + r.jsonp + "=" + a), r.converters["script json"] = function() {
   return s || e.error(a + " was not called"), s[0]
  }, r.dataTypes[0] = "json", t[a] = function() {
   s = arguments
  }, o.always(function() {
   t[a] = l, r[a] && (r.jsonpCallback = i.jsonpCallback, Se.push(a)), s && e.isFunction(l) && l(s[0]), s = l = n
  }), "script"
 }), e.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /javascript|ecmascript/
  },
  converters: {
   "text script": function(t) {
    return e.globalEval(t), t
   }
  }
 }), e.ajaxPrefilter("script", function(e) {
  e.cache === n && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
 }), e.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var t, i = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
   return {
    send: function(o, a) {
     t = r.createElement("script"), t.async = "async", e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, r) {
      if (r || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, i && t.parentNode && i.removeChild(t), t = n, r || a(200, "success")
     }, i.insertBefore(t, i.firstChild)
    },
    abort: function() {
     t && t.onload(0, 1)
    }
   }
  }
 });
 var y, O = t.ActiveXObject ? function() {
   for (var e in y) y[e](0, 1)
  } : !1,
  nt = 0;
 e.ajaxSettings.xhr = t.ActiveXObject ? function() {
   return !this.isLocal && se() || it()
  } : se,
  function(t) {
   e.extend(e.support, {
    ajax: !!t,
    cors: !!t && "withCredentials" in t
   })
  }(e.ajaxSettings.xhr()), e.support.ajax && e.ajaxTransport(function(r) {
   if (!r.crossDomain || e.support.cors) {
    var i;
    return {
     send: function(o, a) {
      var c, u, l = r.xhr();
      r.username ? l.open(r.type, r.url, r.async, r.username, r.password) : l.open(r.type, r.url, r.async);
      if (r.xhrFields)
       for (u in r.xhrFields) l[u] = r.xhrFields[u];
      r.mimeType && l.overrideMimeType && l.overrideMimeType(r.mimeType), !r.crossDomain && !o["X-Requested-With"] && (o["X-Requested-With"] = "XMLHttpRequest");
      try {
       for (u in o) l.setRequestHeader(u, o[u])
      } catch (s) {};
      l.send(r.hasContent && r.data || null), i = function(t, o) {
       var f, d, h, u, p;
       try {
        if (i && (o || l.readyState === 4)) {
         i = n, c && (l.onreadystatechange = e.noop, O && delete y[c]);
         if (o) l.readyState !== 4 && l.abort();
         else {
          f = l.status, h = l.getAllResponseHeaders(), u = {}, p = l.responseXML, p && p.documentElement && (u.xml = p);
          try {
           u.text = l.responseText
          } catch (s) {};
          try {
           d = l.statusText
          } catch (s) {
           d = ""
          };
          !f && r.isLocal && !r.crossDomain ? f = u.text ? 200 : 404 : f === 1223 && (f = 204)
         }
        }
       } catch (s) {
        o || a(-1, s)
       };
       u && a(f, d, u, h)
      }, r.async ? l.readyState === 4 ? setTimeout(i, 0) : (c = ++nt, O && (y || (y = {}, e(t).unload(O)), y[c] = i), l.onreadystatechange = i) : i()
     },
     abort: function() {
      i && i(0, 1)
     }
    }
   }
  });
 var v, k, st = /^(?:toggle|show|hide)$/,
  lt = new RegExp("^(?:([-+])=|)(" + T + ")([a-z%]*)$", "i"),
  ut = /queueHooks$/,
  C = [at],
  b = {
   "*": [function(t, n) {
    var s, l, r = this.createTween(t, n),
     a = lt.exec(n),
     u = r.cur(),
     i = +u || 0,
     o = 1,
     c = 20;
    if (a) {
     s = +a[2], l = a[3] || (e.cssNumber[t] ? "" : "px");
     if (l !== "px" && i) {
      i = e.css(r.elem, t, !0) || s || 1;
      do o = o || ".5", i /= o, e.style(r.elem, t, i + l); while (o !== (o = r.cur() / u) && o !== 1 && --c)
     };
     r.unit = l, r.start = i, r.end = a[1] ? i + (a[1] + 1) * s : s
    };
    return r
   }]
  };
 e.Animation = e.extend(me, {
  tweener: function(t, n) {
   e.isFunction(t) ? (n = t, t = ["*"]) : t = t.split(" ");
   var r, i = 0,
    o = t.length;
   for (; i < o; i++) r = t[i], b[r] = b[r] || [], b[r].unshift(n)
  },
  prefilter: function(e, t) {
   t ? C.unshift(e) : C.push(e)
  }
 }), e.Tween = a, a.prototype = {
  constructor: a,
  init: function(t, n, r, i, o, a) {
   this.elem = t, this.prop = r, this.easing = o || "swing", this.options = n, this.start = this.now = this.cur(), this.end = i, this.unit = a || (e.cssNumber[r] ? "" : "px")
  },
  cur: function() {
   var e = a.propHooks[this.prop];
   return e && e.get ? e.get(this) : a.propHooks._default.get(this)
  },
  run: function(t) {
   var r, n = a.propHooks[this.prop];
   return this.options.duration ? this.pos = r = e.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = r = t, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : a.propHooks._default.set(this), this
  }
 }, a.prototype.init.prototype = a.prototype, a.propHooks = {
  _default: {
   get: function(t) {
    var n;
    return t.elem[t.prop] == null || !!t.elem.style && t.elem.style[t.prop] != null ? (n = e.css(t.elem, t.prop, !1, ""), !n || n === "auto" ? 0 : n) : t.elem[t.prop]
   },
   set: function(t) {
    e.fx.step[t.prop] ? e.fx.step[t.prop](t) : t.elem.style && (t.elem.style[e.cssProps[t.prop]] != null || e.cssHooks[t.prop]) ? e.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
   }
  }
 }, a.propHooks.scrollTop = a.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
  }
 }, e.each(["toggle", "show", "hide"], function(t, n) {
  var r = e.fn[n];
  e.fn[n] = function(i, o, a) {
   return i == null || typeof i == "boolean" || !t && e.isFunction(i) && e.isFunction(o) ? r.apply(this, arguments) : this.animate(S(n, !0), i, o, a)
  }
 }), e.fn.extend({
  fadeTo: function(e, t, n, r) {
   return this.filter(D).css("opacity", 0).show().end().animate({
    opacity: t
   }, e, n, r)
  },
  animate: function(t, n, r, i) {
   var s = e.isEmptyObject(t),
    o = e.speed(n, r, i),
    a = function() {
     var n = me(this, e.extend({}, t), o);
     s && n.stop(!0)
    };
   return s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
  },
  stop: function(t, r, i) {
   var o = function(e) {
    var t = e.stop;
    delete e.stop, t(i)
   };
   return typeof t != "string" && (i = r, r = t, t = n), r && t !== !1 && this.queue(t || "fx", []), this.each(function() {
    var s = !0,
     n = t != null && t + "queueHooks",
     a = e.timers,
     r = e._data(this);
    if (n) r[n] && r[n].stop && o(r[n]);
    else
     for (n in r) r[n] && r[n].stop && ut.test(n) && o(r[n]);
    for (n = a.length; n--;) a[n].elem === this && (t == null || a[n].queue === t) && (a[n].anim.stop(i), s = !1, a.splice(n, 1));
    (s || !i) && e.dequeue(this, t)
   })
  }
 }), e.each({
  slideDown: S("show"),
  slideUp: S("hide"),
  slideToggle: S("toggle"),
  fadeIn: {
   opacity: "show"
  },
  fadeOut: {
   opacity: "hide"
  },
  fadeToggle: {
   opacity: "toggle"
  }
 }, function(t, n) {
  e.fn[t] = function(e, t, r) {
   return this.animate(n, e, t, r)
  }
 }), e.speed = function(t, n, r) {
  var i = t && typeof t == "object" ? e.extend({}, t) : {
   complete: r || !r && n || e.isFunction(t) && t,
   duration: t,
   easing: r && n || n && !e.isFunction(n) && n
  };
  i.duration = e.fx.off ? 0 : typeof i.duration == "number" ? i.duration : i.duration in e.fx.speeds ? e.fx.speeds[i.duration] : e.fx.speeds._default;
  if (i.queue == null || i.queue === !0) i.queue = "fx";
  return i.old = i.complete, i.complete = function() {
   e.isFunction(i.old) && i.old.call(this), i.queue && e.dequeue(this, i.queue)
  }, i
 }, e.easing = {
  linear: function(e) {
   return e
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2
  }
 }, e.timers = [], e.fx = a.prototype.init, e.fx.tick = function() {
  var i, r = e.timers,
   t = 0;
  v = e.now();
  for (; t < r.length; t++) i = r[t], !i() && r[t] === i && r.splice(t--, 1);
  r.length || e.fx.stop(), v = n
 }, e.fx.timer = function(t) {
  t() && e.timers.push(t) && !k && (k = setInterval(e.fx.tick, e.fx.interval))
 }, e.fx.interval = 13, e.fx.stop = function() {
  clearInterval(k), k = null
 }, e.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, e.fx.step = {}, e.expr && e.expr.filters && (e.expr.filters.animated = function(t) {
  return e.grep(e.timers, function(e) {
   return t === e.elem
  }).length
 });
 var We = /^(?:body|html)$/i;
 e.fn.offset = function(t) {
  if (arguments.length) return t === n ? this : this.each(function(n) {
   e.offset.setOffset(this, t, n)
  });
  var i, l, s, c, u, f, p, a = {
    top: 0,
    left: 0
   },
   r = this[0],
   o = r && r.ownerDocument;
  if (!o) return;
  return (l = o.body) === r ? e.offset.bodyOffset(r) : (i = o.documentElement, e.contains(i, r) ? (typeof r.getBoundingClientRect != "undefined" && (a = r.getBoundingClientRect()), s = te(o), c = i.clientTop || l.clientTop || 0, u = i.clientLeft || l.clientLeft || 0, f = s.pageYOffset || i.scrollTop, p = s.pageXOffset || i.scrollLeft, {
   top: a.top + f - c,
   left: a.left + p - u
  }) : a)
 }, e.offset = {
  bodyOffset: function(t) {
   var r = t.offsetTop,
    n = t.offsetLeft;
   return e.support.doesNotIncludeMarginInBodyOffset && (r += parseFloat(e.css(t, "marginTop")) || 0, n += parseFloat(e.css(t, "marginLeft")) || 0), {
    top: r,
    left: n
   }
  },
  setOffset: function(t, n, r) {
   var c = e.css(t, "position");
   c === "static" && (t.style.position = "relative");
   var l = e(t),
    s = l.offset(),
    p = e.css(t, "top"),
    f = e.css(t, "left"),
    d = (c === "absolute" || c === "fixed") && e.inArray("auto", [p, f]) > -1,
    i = {},
    a = {},
    u, o;
   d ? (a = l.position(), u = a.top, o = a.left) : (u = parseFloat(p) || 0, o = parseFloat(f) || 0), e.isFunction(n) && (n = n.call(t, r, s)), n.top != null && (i.top = n.top - s.top + u), n.left != null && (i.left = n.left - s.left + o), "using" in n ? n.using.call(t, i) : l.css(i)
  }
 }, e.fn.extend({
  position: function() {
   if (!this[0]) return;
   var i = this[0],
    r = this.offsetParent(),
    n = this.offset(),
    t = We.test(r[0].nodeName) ? {
     top: 0,
     left: 0
    } : r.offset();
   return n.top -= parseFloat(e.css(i, "marginTop")) || 0, n.left -= parseFloat(e.css(i, "marginLeft")) || 0, t.top += parseFloat(e.css(r[0], "borderTopWidth")) || 0, t.left += parseFloat(e.css(r[0], "borderLeftWidth")) || 0, {
    top: n.top - t.top,
    left: n.left - t.left
   }
  },
  offsetParent: function() {
   return this.map(function() {
    var t = this.offsetParent || r.body;
    while (t && !We.test(t.nodeName) && e.css(t, "position") === "static") t = t.offsetParent;
    return t || r.body
   })
  }
 }), e.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(t, r) {
  var i = /Y/.test(r);
  e.fn[t] = function(o) {
   return e.access(this, function(t, o, a) {
    var s = te(t);
    if (a === n) return s ? r in s ? s[r] : s.document.documentElement[o] : t[o];
    s ? s.scrollTo(i ? e(s).scrollLeft() : a, i ? a : e(s).scrollTop()) : t[o] = a
   }, t, o, arguments.length, null)
  }
 }), e.each({
  Height: "height",
  Width: "width"
 }, function(t, r) {
  e.each({
   padding: "inner" + t,
   content: r,
   "": "outer" + t
  }, function(i, o) {
   e.fn[o] = function(o, a) {
    var l = arguments.length && (i || typeof o != "boolean"),
     s = i || (o === !0 || a === !0 ? "margin" : "border");
    return e.access(this, function(r, i, o) {
     var a;
     return e.isWindow(r) ? r.document.documentElement["client" + t] : r.nodeType === 9 ? (a = r.documentElement, Math.max(r.body["scroll" + t], a["scroll" + t], r.body["offset" + t], a["offset" + t], a["client" + t])) : o === n ? e.css(r, i, o, s) : e.style(r, i, o, s)
    }, r, l ? o : n, l, null)
   }
  })
 }), t.jQuery = t.$ = e, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
  return e
 })
})(window);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(e) {
 var t = ['DOMMouseScroll', 'mousewheel'];
 if (e.event.fixHooks) {
  for (var i = t.length; i;) {
   e.event.fixHooks[t[--i]] = e.event.mouseHooks
  }
 };
 e.event.special.mousewheel = {
  setup: function() {
   if (this.addEventListener) {
    for (var e = t.length; e;) {
     this.addEventListener(t[--e], n, !1)
    }
   } else {
    this.onmousewheel = n
   }
  },
  teardown: function() {
   if (this.removeEventListener) {
    for (var e = t.length; e;) {
     this.removeEventListener(t[--e], n, !1)
    }
   } else {
    this.onmousewheel = null
   }
  }
 };
 e.fn.extend({
  mousewheel: function(e) {
   return e ? this.bind('mousewheel', e) : this.trigger('mousewheel')
  },
  unmousewheel: function(e) {
   return this.unbind('mousewheel', e)
  }
 });

 function n(n) {
  var t = n || window.event,
   a = [].slice.call(arguments, 1),
   i = 0,
   h = !0,
   o = 0,
   s = 0;
  n = e.event.fix(t);
  n.type = 'mousewheel';
  if (t.wheelDelta) {
   i = t.wheelDelta / 120
  };
  if (t.detail) {
   i = -t.detail / 3
  };
  s = i;
  if (t.axis !== undefined && t.axis === t.HORIZONTAL_AXIS) {
   s = 0;
   o = -1 * i
  };
  if (t.wheelDeltaY !== undefined) {
   s = t.wheelDeltaY / 120
  };
  if (t.wheelDeltaX !== undefined) {
   o = -1 * t.wheelDeltaX / 120
  };
  a.unshift(n, i, o, s);
  return (e.event.dispatch || e.event.handle).apply(this, a)
 }
})(jQuery);
(function(e, t, i) {
 e.fn.jScrollPane = function(n) {
  function o(n, s) {
   var o, p = this,
    a, c, l, r, h, d, se, q, m, v, g, w, u, j, D, f, U, b, ie, X, B, I, F, K, k, P, y, z, L, W, ae, x, re, N = !0,
    E = !0,
    G = !1,
    V = !1,
    Q = n.clone(!1, !1).empty(),
    ne = e.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';
   ae = n.css('paddingTop') + ' ' + n.css('paddingRight') + ' ' + n.css('paddingBottom') + ' ' + n.css('paddingLeft');
   x = (parseInt(n.css('paddingLeft'), 10) || 0) + (parseInt(n.css('paddingRight'), 10) || 0);

   function oe(t) {
    var g, y, k, j, s, p, w = !1,
     b = !1;
    o = t;
    if (a === i) {
     s = n.scrollTop();
     p = n.scrollLeft();
     n.css({
      overflow: 'hidden',
      padding: 0
     });
     c = n.innerWidth() + x;
     l = n.innerHeight();
     n.width(c);
     a = e('<div class="jspPane" />').css('padding', ae).append(n.children());
     r = e('<div class="jspContainer" />').css({
      width: c + 'px',
      height: l + 'px'
     }).append(a).appendTo(n)
    } else {
     n.css('width', '');
     w = o.stickToBottom && Pe();
     b = o.stickToRight && He();
     j = n.innerWidth() + x != c || n.outerHeight() != l;
     if (j) {
      c = n.innerWidth() + x;
      l = n.innerHeight();
      r.css({
       width: c + 'px',
       height: l + 'px'
      })
     };
     if (!j && re == h && a.outerHeight() == d) {
      n.width(c);
      return
     };
     re = h;
     a.css('width', '');
     n.width(c);
     r.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end()
    };
    a.css('overflow', 'auto');
    if (t.contentWidth) {
     h = t.contentWidth
    } else {
     h = a[0].scrollWidth
    };
    d = a[0].scrollHeight;
    a.css('overflow', '');
    se = h / c;
    q = d / l;
    m = q > 1;
    v = se > 1;
    if (!(v || m)) {
     n.removeClass('jspScrollable');
     a.css({
      top: 0,
      width: r.width() - x
     });
     ke();
     ge();
     me();
     ue()
    } else {
     n.addClass('jspScrollable');
     g = o.maintainPosition && (u || f);
     if (g) {
      y = H();
      k = S()
     };
     Be();
     Te();
     Ce();
     if (g) {
      R(b ? (h - c) : y, !1);
      C(w ? (d - l) : k, !1)
     };
     de();
     Ae();
     je();
     if (o.enableKeyboardNavigation) {
      we()
     };
     if (o.clickOnTrack) {
      Se()
     };
     be();
     if (o.hijackInternalLinks) {
      ve()
     }
    };
    if (o.autoReinitialise && !W) {
     W = setInterval(function() {
      oe(o)
     }, o.autoReinitialiseDelay)
    } else {
     if (!o.autoReinitialise && W) {
      clearInterval(W)
     }
    };
    s && n.scrollTop(0) && C(s, !1);
    p && n.scrollLeft(0) && R(p, !1);
    n.trigger('jsp-initialised', [v || m])
   };

   function Be() {
    if (m) {
     r.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />')));
     U = r.find('>.jspVerticalBar');
     b = U.find('>.jspTrack');
     g = b.find('>.jspDrag');
     if (o.showArrows) {
      I = e('<a class="jspArrow jspArrowUp" />').bind('mousedown.jsp', T(0, -1)).bind('click.jsp', M);
      F = e('<a class="jspArrow jspArrowDown" />').bind('mousedown.jsp', T(0, 1)).bind('click.jsp', M);
      if (o.arrowScrollOnHover) {
       I.bind('mouseover.jsp', T(0, -1, I));
       F.bind('mouseover.jsp', T(0, 1, F))
      };
      fe(b, o.verticalArrowPositions, I, F)
     };
     X = l;
     r.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(function() {
      X -= e(this).outerHeight()
     });
     g.hover(function() {
      g.addClass('jspHover')
     }, function() {
      g.removeClass('jspHover')
     }).bind('mousedown.jsp', function(t) {
      e('html').bind('dragstart.jsp selectstart.jsp', M);
      g.addClass('jspActive');
      var i = t.pageY - g.position().top;
      e('html').bind('mousemove.jsp', function(e) {
       A(e.pageY - i, !1)
      }).bind('mouseup.jsp mouseleave.jsp', le);
      return !1
     });
     ce()
    }
   };

   function ce() {
    b.height(X + 'px');
    u = 0;
    ie = o.verticalGutter + b.outerWidth();
    a.width(c - ie - x);
    try {
     if (U.position().left === 0) {
      a.css('margin-left', ie + 'px')
     }
    } catch (e) {}
   };

   function Te() {
    if (v) {
     r.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />')));
     K = r.find('>.jspHorizontalBar');
     k = K.find('>.jspTrack');
     j = k.find('>.jspDrag');
     if (o.showArrows) {
      z = e('<a class="jspArrow jspArrowLeft" />').bind('mousedown.jsp', T(-1, 0)).bind('click.jsp', M);
      L = e('<a class="jspArrow jspArrowRight" />').bind('mousedown.jsp', T(1, 0)).bind('click.jsp', M);
      if (o.arrowScrollOnHover) {
       z.bind('mouseover.jsp', T(-1, 0, z));
       L.bind('mouseover.jsp', T(1, 0, L))
      };
      fe(k, o.horizontalArrowPositions, z, L)
     };
     j.hover(function() {
      j.addClass('jspHover')
     }, function() {
      j.removeClass('jspHover')
     }).bind('mousedown.jsp', function(t) {
      e('html').bind('dragstart.jsp selectstart.jsp', M);
      j.addClass('jspActive');
      var i = t.pageX - j.position().left;
      e('html').bind('mousemove.jsp', function(e) {
       Y(e.pageX - i, !1)
      }).bind('mouseup.jsp mouseleave.jsp', le);
      return !1
     });
     P = r.innerWidth();
     pe()
    }
   };

   function pe() {
    r.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(function() {
     P -= e(this).outerWidth()
    });
    k.width(P + 'px');
    f = 0
   };

   function Ce() {
    if (v && m) {
     var t = k.outerHeight(),
      i = b.outerWidth();
     X -= t;
     e(K).find('>.jspCap:visible,>.jspArrow').each(function() {
      P += e(this).outerWidth()
     });
     P -= i;
     l -= i;
     c -= t;
     k.parent().append(e('<div class="jspCorner" />').css('width', t + 'px'));
     ce();
     pe()
    };
    if (v) {
     a.width((r.outerWidth() - x) + 'px')
    };
    d = a.outerHeight();
    q = d / l;
    if (v) {
     y = Math.ceil(1 / se * P);
     if (y > o.horizontalDragMaxWidth) {
      y = o.horizontalDragMaxWidth
     } else {
      if (y < o.horizontalDragMinWidth) {
       y = o.horizontalDragMinWidth
      }
     };
     j.width(y + 'px');
     D = P - y;
     te(f)
    };
    if (m) {
     B = Math.ceil(1 / q * X);
     if (B > o.verticalDragMaxHeight) {
      B = o.verticalDragMaxHeight
     } else {
      if (B < o.verticalDragMinHeight) {
       B = o.verticalDragMinHeight
      }
     };
     g.height(B + 'px');
     w = X - B;
     ee(u)
    }
   };

   function fe(e, t, i, n) {
    var o = 'before',
     s = 'after',
     r;
    if (t == 'os') {
     t = /Mac/.test(navigator.platform) ? 'after' : 'split'
    };
    if (t == o) {
     s = t
    } else {
     if (t == s) {
      o = t;
      r = i;
      i = n;
      n = r
     }
    };
    e[o](i)[s](n)
   };

   function T(e, t, i) {
    return function() {
     De(e, t, this, i);
     this.blur();
     return !1
    }
   };

   function De(t, i, n, s) {
    n = e(n).addClass('jspActive');
    var a, r, c = !0,
     l = function() {
      if (t !== 0) {
       p.scrollByX(t * o.arrowButtonSpeed)
      };
      if (i !== 0) {
       p.scrollByY(i * o.arrowButtonSpeed)
      };
      r = setTimeout(l, c ? o.initialDelay : o.arrowRepeatFreq);
      c = !1
     };
    l();
    a = s ? 'mouseout.jsp' : 'mouseup.jsp';
    s = s || e('html');
    s.bind(a, function() {
     n.removeClass('jspActive');
     r && clearTimeout(r);
     r = null;
     s.unbind(a)
    })
   };

   function Se() {
    ue();
    if (m) {
     b.bind('mousedown.jsp', function(t) {
      if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
       var f = e(this),
        h = f.offset(),
        c = t.pageY - h.top - u,
        n, a = !0,
        r = function() {
         var j = f.offset(),
          e = t.pageY - j.top - B / 2,
          i = l * o.scrollPagePercent,
          h = w * i / (d - l);
         if (c < 0) {
          if (u - h > e) {
           p.scrollByY(-i)
          } else {
           A(e)
          }
         } else {
          if (c > 0) {
           if (u + h < e) {
            p.scrollByY(i)
           } else {
            A(e)
           }
          } else {
           s();
           return
          }
         };
         n = setTimeout(r, a ? o.initialDelay : o.trackClickRepeatFreq);
         a = !1
        },
        s = function() {
         n && clearTimeout(n);
         n = null;
         e(document).unbind('mouseup.jsp', s)
        };
       r();
       e(document).bind('mouseup.jsp', s);
       return !1
      }
     })
    };
    if (v) {
     k.bind('mousedown.jsp', function(t) {
      if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
       var u = e(this),
        d = u.offset(),
        l = t.pageX - d.left - f,
        n, a = !0,
        r = function() {
         var j = u.offset(),
          e = t.pageX - j.left - y / 2,
          i = c * o.scrollPagePercent,
          d = D * i / (h - c);
         if (l < 0) {
          if (f - d > e) {
           p.scrollByX(-i)
          } else {
           Y(e)
          }
         } else {
          if (l > 0) {
           if (f + d < e) {
            p.scrollByX(i)
           } else {
            Y(e)
           }
          } else {
           s();
           return
          }
         };
         n = setTimeout(r, a ? o.initialDelay : o.trackClickRepeatFreq);
         a = !1
        },
        s = function() {
         n && clearTimeout(n);
         n = null;
         e(document).unbind('mouseup.jsp', s)
        };
       r();
       e(document).bind('mouseup.jsp', s);
       return !1
      }
     })
    }
   };

   function ue() {
    if (k) {
     k.unbind('mousedown.jsp')
    };
    if (b) {
     b.unbind('mousedown.jsp')
    }
   };

   function le() {
    e('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');
    if (g) {
     g.removeClass('jspActive')
    };
    if (j) {
     j.removeClass('jspActive')
    }
   };

   function A(e, t) {
    if (!m) {
     return
    };
    if (e < 0) {
     e = 0
    } else {
     if (e > w) {
      e = w
     }
    };
    if (t === i) {
     t = o.animateScroll
    };
    if (t) {
     p.animate(g, 'top', e, ee)
    } else {
     g.css('top', e);
     ee(e)
    }
   };

   function ee(e) {
    if (e === i) {
     e = g.position().top
    };
    r.scrollTop(0);
    u = e;
    var o = u === 0,
     t = u == w,
     c = e / w,
     s = -c * (d - l);
    if (N != o || G != t) {
     N = o;
     G = t;
     n.trigger('jsp-arrow-change', [N, G, E, V])
    };
    ye(o, t);
    a.css('top', s);
    n.trigger('jsp-scroll-y', [-s, o, t]).trigger('scroll')
   };

   function Y(e, t) {
    if (!v) {
     return
    };
    if (e < 0) {
     e = 0
    } else {
     if (e > D) {
      e = D
     }
    };
    if (t === i) {
     t = o.animateScroll
    };
    if (t) {
     p.animate(j, 'left', e, te)
    } else {
     j.css('left', e);
     te(e)
    }
   };

   function te(e) {
    if (e === i) {
     e = j.position().left
    };
    r.scrollTop(0);
    f = e;
    var o = f === 0,
     t = f == D,
     l = e / D,
     s = -l * (h - c);
    if (E != o || V != t) {
     E = o;
     V = t;
     n.trigger('jsp-arrow-change', [N, G, E, V])
    };
    xe(o, t);
    a.css('left', s);
    n.trigger('jsp-scroll-x', [-s, o, t]).trigger('scroll')
   };

   function ye(e, t) {
    if (o.showArrows) {
     I[e ? 'addClass' : 'removeClass']('jspDisabled');
     F[t ? 'addClass' : 'removeClass']('jspDisabled')
    }
   };

   function xe(e, t) {
    if (o.showArrows) {
     z[e ? 'addClass' : 'removeClass']('jspDisabled');
     L[t ? 'addClass' : 'removeClass']('jspDisabled')
    }
   };

   function C(e, t) {
    var i = e / (d - l);
    A(i * w, t)
   };

   function R(e, t) {
    var i = e / (h - c);
    Y(i * D, t)
   };

   function O(t, i, n) {
    var s, g, d, a = 0,
     p = 0,
     v, j, m, b, f, u;
    try {
     s = e(t)
    } catch (h) {
     return
    };
    g = s.outerHeight();
    d = s.outerWidth();
    r.scrollTop(0);
    r.scrollLeft(0);
    while (!s.is('.jspPane')) {
     a += s.position().top;
     p += s.position().left;
     s = s.offsetParent();
     if (/^body|html$/i.test(s[0].nodeName)) {
      return
     }
    };
    v = S();
    m = v + l;
    if (a < v || i) {
     f = a - o.verticalGutter
    } else {
     if (a + g > m) {
      f = a - l + g + o.verticalGutter
     }
    };
    if (f) {
     C(f, n)
    };
    j = H();
    b = j + c;
    if (p < j || i) {
     u = p - o.horizontalGutter
    } else {
     if (p + d > b) {
      u = p - c + d + o.horizontalGutter
     }
    };
    if (u) {
     R(u, n)
    }
   };

   function H() {
    return -a.position().left
   };

   function S() {
    return -a.position().top
   };

   function Pe() {
    var e = d - l;
    return (e > 20) && (e - S() < 10)
   };

   function He() {
    var e = h - c;
    return (e > 20) && (e - H() < 10)
   };

   function Ae() {
    r.unbind(ne).bind(ne, function(e, t, i, n) {
     var r = f,
      s = u;
     p.scrollBy(i * o.mouseWheelSpeed, -n * o.mouseWheelSpeed, !1);
     return r == f && s == u
    })
   };

   function ke() {
    r.unbind(ne)
   };

   function M() {
    return !1
   };

   function de() {
    a.find(':input,a').unbind('focus.jsp').bind('focus.jsp', function(e) {
     O(e.target, !1)
    })
   };

   function ge() {
    a.find(':input,a').unbind('focus.jsp')
   };

   function we() {
    var t, i, s = [];
    v && s.push(K[0]);
    m && s.push(U[0]);
    a.focus(function() {
     n.focus()
    });
    n.attr('tabindex', 0).unbind('keydown.jsp keypress.jsp').bind('keydown.jsp', function(n) {
     if (n.target !== this && !(s.length && e(n.target).closest(s).length)) {
      return
     };
     var r = f,
      o = u;
     switch (n.keyCode) {
      case 40:
      case 38:
      case 34:
      case 32:
      case 33:
      case 39:
      case 37:
       t = n.keyCode;
       c();
       break;
      case 35:
       C(d - l);
       t = null;
       break;
      case 36:
       C(0);
       t = null;
       break
     };
     i = n.keyCode == t && r != f || o != u;
     return !i
    }).bind('keypress.jsp', function(e) {
     if (e.keyCode == t) {
      c()
     };
     return !i
    });
    if (o.hideFocus) {
     n.css('outline', 'none');
     if ('hideFocus' in r[0]) {
      n.attr('hideFocus', !0)
     }
    } else {
     n.css('outline', '');
     if ('hideFocus' in r[0]) {
      n.attr('hideFocus', !1)
     }
    };

    function c() {
     var n = f,
      e = u;
     switch (t) {
      case 40:
       p.scrollByY(o.keyboardSpeed, !1);
       break;
      case 38:
       p.scrollByY(-o.keyboardSpeed, !1);
       break;
      case 34:
      case 32:
       p.scrollByY(l * o.scrollPagePercent, !1);
       break;
      case 33:
       p.scrollByY(-l * o.scrollPagePercent, !1);
       break;
      case 39:
       p.scrollByX(o.keyboardSpeed, !1);
       break;
      case 37:
       p.scrollByX(-o.keyboardSpeed, !1);
       break
     };
     i = n != f || e != u;
     return i
    }
   };

   function me() {
    n.attr('tabindex', '-1').removeAttr('tabindex').unbind('keydown.jsp keypress.jsp')
   };

   function be() {
    if (location.hash && location.hash.length > 1) {
     var t, o, i = escape(location.hash.substr(1));
     try {
      t = e('#' + i + ', a[name="' + i + '"]')
     } catch (n) {
      return
     };
     if (t.length && a.find(i)) {
      if (r.scrollTop() === 0) {
       o = setInterval(function() {
        if (r.scrollTop() > 0) {
         O(t, !0);
         e(document).scrollTop(r.position().top);
         clearInterval(o)
        }
       }, 50)
      } else {
       O(t, !0);
       e(document).scrollTop(r.position().top)
      }
     }
    }
   };

   function ve() {
    if (e(document.body).data('jspHijack')) {
     return
    };
    e(document.body).data('jspHijack', !0);
    e(document.body).delegate('a[href*=#]', 'click', function(i) {
     var u = this.href.substr(0, this.href.indexOf('#')),
      p = location.href,
      s, n, o, c, l, r;
     if (location.href.indexOf('#') !== -1) {
      p = location.href.substr(0, location.href.indexOf('#'))
     };
     if (u !== p) {
      return
     };
     s = escape(this.href.substr(this.href.indexOf('#') + 1));
     n;
     try {
      n = e('#' + s + ', a[name="' + s + '"]')
     } catch (a) {
      return
     };
     if (!n.length) {
      return
     };
     o = n.closest('.jspScrollable');
     c = o.data('jsp');
     c.scrollToElement(n, !0);
     if (o[0].scrollIntoView) {
      l = e(t).scrollTop();
      r = n.offset().top;
      if (r < l || r > l + e(t).height()) {
       o[0].scrollIntoView()
      }
     };
     i.preventDefault()
    })
   };

   function je() {
    var s, o, n, i, e, t = !1;
    r.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind('touchstart.jsp', function(r) {
     var a = r.originalEvent.touches[0];
     s = H();
     o = S();
     n = a.pageX;
     i = a.pageY;
     e = !1;
     t = !0
    }).bind('touchmove.jsp', function(r) {
     if (!t) {
      return
     };
     var a = r.originalEvent.touches[0],
      c = f,
      l = u;
     p.scrollTo(s + n - a.pageX, o + i - a.pageY);
     e = e || Math.abs(n - a.pageX) > 5 || Math.abs(i - a.pageY) > 5;
     return c == f && l == u
    }).bind('touchend.jsp', function(e) {
     t = !1
    }).bind('click.jsp-touchclick', function(t) {
     if (e) {
      e = !1;
      return !1
     }
    })
   };

   function he() {
    var t = S(),
     e = H();
    n.removeClass('jspScrollable').unbind('.jsp');
    n.replaceWith(Q.append(a.children()));
    Q.scrollTop(t);
    Q.scrollLeft(e);
    if (W) {
     clearInterval(W)
    }
   };
   e.extend(p, {
    reinitialise: function(t) {
     t = e.extend({}, o, t);
     oe(t)
    },
    scrollToElement: function(e, t, i) {
     O(e, t, i)
    },
    scrollTo: function(e, t, i) {
     R(e, i);
     C(t, i)
    },
    scrollToX: function(e, t) {
     R(e, t)
    },
    scrollToY: function(e, t) {
     C(e, t)
    },
    scrollToPercentX: function(e, t) {
     R(e * (h - c), t)
    },
    scrollToPercentY: function(e, t) {
     C(e * (d - l), t)
    },
    scrollBy: function(e, t, i) {
     p.scrollByX(e, i);
     p.scrollByY(t, i)
    },
    scrollByX: function(e, t) {
     var n = H() + Math[e < 0 ? 'floor' : 'ceil'](e),
      i = n / (h - c);
     Y(i * D, t)
    },
    scrollByY: function(e, t) {
     var n = S() + Math[e < 0 ? 'floor' : 'ceil'](e),
      i = n / (d - l);
     A(i * w, t)
    },
    positionDragX: function(e, t) {
     Y(e, t)
    },
    positionDragY: function(e, t) {
     A(e, t)
    },
    animate: function(e, t, i, n) {
     var s = {};
     s[t] = i;
     e.animate(s, {
      duration: o.animateDuration,
      easing: o.animateEase,
      queue: !1,
      step: n
     })
    },
    getContentPositionX: function() {
     return H()
    },
    getContentPositionY: function() {
     return S()
    },
    getContentWidth: function() {
     return h
    },
    getContentHeight: function() {
     return d
    },
    getPercentScrolledX: function() {
     return H() / (h - c)
    },
    getPercentScrolledY: function() {
     return S() / (d - l)
    },
    getIsScrollableH: function() {
     return v
    },
    getIsScrollableV: function() {
     return m
    },
    getContentPane: function() {
     return a
    },
    scrollToBottom: function(e) {
     A(w, e)
    },
    hijackInternalLinks: e.noop,
    destroy: function() {
     he()
    }
   });
   oe(s)
  };
  n = e.extend({}, e.fn.jScrollPane.defaults, n);
  e.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
   n[this] = n[this] || n.speed
  });
  return this.each(function() {
   var i = e(this),
    t = i.data('jsp');
   if (t) {
    t.reinitialise(n)
   } else {
    e('script', i).filter('[type="text/javascript"],:not([type])').remove();
    t = new o(i, n);
    i.data('jsp', t)
   }
  })
 };
 e.fn.jScrollPane.defaults = {
  showArrows: !1,
  maintainPosition: !0,
  stickToBottom: !1,
  stickToRight: !1,
  clickOnTrack: !0,
  autoReinitialise: !1,
  autoReinitialiseDelay: 500,
  verticalDragMinHeight: 0,
  verticalDragMaxHeight: 99999,
  horizontalDragMinWidth: 0,
  horizontalDragMaxWidth: 99999,
  contentWidth: i,
  animateScroll: !1,
  animateDuration: 300,
  animateEase: 'linear',
  hijackInternalLinks: !1,
  verticalGutter: 4,
  horizontalGutter: 4,
  mouseWheelSpeed: 0,
  arrowButtonSpeed: 0,
  arrowRepeatFreq: 50,
  arrowScrollOnHover: !1,
  trackClickSpeed: 0,
  trackClickRepeatFreq: 70,
  verticalArrowPositions: 'split',
  horizontalArrowPositions: 'split',
  enableKeyboardNavigation: !0,
  hideFocus: !1,
  keyboardSpeed: 0,
  initialDelay: 300,
  speed: 30,
  scrollPagePercent: 0.8
 }
})(jQuery, this);
(function(t) {
 t.extend(t.fn, {
  validate: function(e) {
   if (this.length) {
    var i = t.data(this[0], "validator");
    if (i) return i;
    this.attr("novalidate", "novalidate");
    i = new t.validator(e, this[0]);
    t.data(this[0], "validator", i);
    if (i.settings.onsubmit) {
     e = this.find("input, button");
     e.filter(".cancel").click(function() {
      i.cancelSubmit = !0
     });
     i.settings.submitHandler && e.filter(":submit").click(function() {
      i.submitButton = this
     });
     this.submit(function(e) {
      function s() {
       if (i.settings.submitHandler) {
        if (i.submitButton) var e = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
        i.settings.submitHandler.call(i, i.currentForm);
        i.submitButton && e.remove();
        return !1
       };
       return !0
      };
      i.settings.debug && e.preventDefault();
      if (i.cancelSubmit) {
       i.cancelSubmit = !1;
       return s()
      };
      if (i.form()) {
       if (i.pendingRequest) {
        i.formSubmitted = !0;
        return !1
       };
       return s()
      } else {
       i.focusInvalid();
       return !1
      }
     })
    };
    return i
   } else e && e.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
  },
  valid: function() {
   if (t(this[0]).is("form")) return this.validate().form();
   else {
    var e = !0,
     i = t(this[0].form).validate();
    this.each(function() {
     e &= i.element(this)
    });
    return e
   }
  },
  removeAttrs: function(e) {
   var s = {},
    i = this;
   t.each(e.split(/\s/), function(t, e) {
    s[e] = i.attr(e);
    i.removeAttr(e)
   });
   return s
  },
  rules: function(e, i) {
   var s = this[0];
   if (e) {
    var r = t.data(s.form, "validator").settings,
     u = r.rules,
     n = t.validator.staticRules(s);
    switch (e) {
     case "add":
      t.extend(n, t.validator.normalizeRule(i));
      u[s.name] = n;
      if (i.messages) r.messages[s.name] = t.extend(r.messages[s.name], i.messages);
      break;
     case "remove":
      if (!i) {
       delete u[s.name];
       return n
      };
      var a = {};
      t.each(i.split(/\s/), function(t, e) {
       a[e] = n[e];
       delete n[e]
      });
      return a
    }
   };
   s = t.validator.normalizeRules(t.extend({}, t.validator.metadataRules(s), t.validator.classRules(s), t.validator.attributeRules(s), t.validator.staticRules(s)), s);
   if (s.required) {
    r = s.required;
    delete s.required;
    s = t.extend({
     required: r
    }, s)
   };
   return s
  }
 });
 t.extend(t.expr[":"], {
  blank: function(e) {
   return !t.trim("" + e.value)
  },
  filled: function(e) {
   return !!t.trim("" + e.value)
  },
  unchecked: function(t) {
   return !t.checked
  }
 });
 t.validator = function(e, i) {
  this.settings = t.extend(!0, {}, t.validator.defaults, e);
  this.currentForm = i;
  this.init()
 };
 t.validator.format = function(e, i) {
  if (arguments.length == 1) return function() {
   var i = t.makeArray(arguments);
   i.unshift(e);
   return t.validator.format.apply(this, i)
  };
  if (arguments.length > 2 && i.constructor != Array) i = t.makeArray(arguments).slice(1);
  if (i.constructor != Array) i = [i];
  t.each(i, function(t, i) {
   e = e.replace(RegExp("\\{" + t + "\\}", "g"), i)
  });
  return e
 };
 t.extend(t.validator, {
  defaults: {
   messages: {},
   groups: {},
   rules: {},
   errorClass: "error",
   validClass: "valid",
   errorElement: "label",
   focusInvalid: !0,
   errorContainer: t([]),
   errorLabelContainer: t([]),
   onsubmit: !0,
   ignore: ":hidden",
   ignoreTitle: !1,
   onfocusin: function(t) {
    this.lastActive = t;
    if (this.settings.focusCleanup && !this.blockFocusCleanup) {
     this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass);
     this.addWrapper(this.errorsFor(t)).hide()
    }
   },
   onfocusout: function(t) {
    if (!this.checkable(t) && (t.name in this.submitted || !this.optional(t))) this.element(t)
   },
   onkeyup: function(t) {
    if (t.name in this.submitted || t == this.lastElement) this.element(t)
   },
   onclick: function(t) {
    if (t.name in this.submitted) this.element(t);
    else t.parentNode.name in this.submitted && this.element(t.parentNode)
   },
   highlight: function(e, i, s) {
    e.type === "radio" ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
   },
   unhighlight: function(e, i, s) {
    e.type === "radio" ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
   }
  },
  setDefaults: function(e) {
   t.extend(t.validator.defaults, e)
  },
  messages: {
   required: "This field is required.",
   remote: "Please fix this field.",
   email: "Please enter a valid email address.",
   url: "Please enter a valid URL.",
   date: "Please enter a valid date.",
   dateISO: "Please enter a valid date (ISO).",
   number: "Please enter a valid number.",
   digits: "Please enter only digits.",
   creditcard: "Please enter a valid credit card number.",
   equalTo: "Please enter the same value again.",
   accept: "Please enter a value with a valid extension.",
   maxlength: t.validator.format("Please enter no more than {0} characters."),
   minlength: t.validator.format("Please enter at least {0} characters."),
   rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
   range: t.validator.format("Please enter a value between {0} and {1}."),
   max: t.validator.format("Please enter a value less than or equal to {0}."),
   min: t.validator.format("Please enter a value greater than or equal to {0}.")
  },
  autoCreateRanges: !1,
  prototype: {
   init: function() {
    function i(e) {
     var i = t.data(this[0].form, "validator"),
      s = "on" + e.type.replace(/^validate/, "");
     i.settings[s] && i.settings[s].call(i, this[0], e)
    };
    this.labelContainer = t(this.settings.errorLabelContainer);
    this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm);
    this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer);
    this.submitted = {};
    this.valueCache = {};
    this.pendingRequest = 0;
    this.pending = {};
    this.invalid = {};
    this.reset();
    var s = this.groups = {};
    t.each(this.settings.groups, function(e, i) {
     t.each(i.split(/\s/), function(t, i) {
      s[i] = e
     })
    });
    var e = this.settings.rules;
    t.each(e, function(i, s) {
     e[i] = t.validator.normalizeRule(s)
    });
    t(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);
    this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
   },
   form: function() {
    this.checkForm();
    t.extend(this.submitted, this.errorMap);
    this.invalid = t.extend({}, this.errorMap);
    this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]);
    this.showErrors();
    return this.valid()
   },
   checkForm: function() {
    this.prepareForm();
    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
    return this.valid()
   },
   element: function(e) {
    this.lastElement = e = this.validationTargetFor(this.clean(e));
    this.prepareElement(e);
    this.currentElements = t(e);
    var i = this.check(e);
    if (i) delete this.invalid[e.name];
    else this.invalid[e.name] = !0;
    if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);
    this.showErrors();
    return i
   },
   showErrors: function(e) {
    if (e) {
     t.extend(this.errorMap, e);
     this.errorList = [];
     for (var i in e) this.errorList.push({
      message: e[i],
      element: this.findByName(i)[0]
     });
     this.successList = t.grep(this.successList, function(t) {
      return !(t.name in e)
     })
    };
    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
   },
   resetForm: function() {
    t.fn.resetForm && t(this.currentForm).resetForm();
    this.submitted = {};
    this.lastElement = null;
    this.prepareForm();
    this.hideErrors();
    this.elements().removeClass(this.settings.errorClass)
   },
   numberOfInvalids: function() {
    return this.objectLength(this.invalid)
   },
   objectLength: function(t) {
    var e = 0,
     i;
    for (i in t) e++;
    return e
   },
   hideErrors: function() {
    this.addWrapper(this.toHide).hide()
   },
   valid: function() {
    return this.size() == 0
   },
   size: function() {
    return this.errorList.length
   },
   focusInvalid: function() {
    if (this.settings.focusInvalid) try {
     t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
    } catch (e) {}
   },
   findLastActive: function() {
    var e = this.lastActive;
    return e && t.grep(this.errorList, function(t) {
     return t.element.name == e.name
    }).length == 1 && e
   },
   elements: function() {
    var i = this,
     e = {};
    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
     !this.name && i.settings.debug && window.console && console.error("%o has no name assigned", this);
     if (this.name in e || !i.objectLength(t(this).rules())) return !1;
     return e[this.name] = !0
    })
   },
   clean: function(e) {
    return t(e)[0]
   },
   errors: function() {
    return t(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
   },
   reset: function() {
    this.successList = [];
    this.errorList = [];
    this.errorMap = {};
    this.toShow = t([]);
    this.toHide = t([]);
    this.currentElements = t([])
   },
   prepareForm: function() {
    this.reset();
    this.toHide = this.errors().add(this.containers)
   },
   prepareElement: function(t) {
    this.reset();
    this.toHide = this.errorsFor(t)
   },
   check: function(e) {
    e = this.validationTargetFor(this.clean(e));
    var r = t(e).rules(),
     n = !1,
     i;
    for (i in r) {
     var u = {
      method: i,
      parameters: r[i]
     };
     try {
      var a = t.validator.methods[i].call(this, e.value.replace(/\r/g, ""), e, u.parameters);
      if (a == "dependency-mismatch") n = !0;
      else {
       n = !1;
       if (a == "pending") {
        this.toHide = this.toHide.not(this.errorsFor(e));
        return
       };
       if (!a) {
        this.formatAndAdd(e, u);
        return !1
       }
      }
     } catch (s) {
      this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + u.method + "' method", s);
      throw s
     }
    };
    if (!n) {
     this.objectLength(r) && this.successList.push(e);
     return !0
    }
   },
   customMetaMessage: function(e, i) {
    if (t.metadata) {
     var s = this.settings.meta ? t(e).metadata()[this.settings.meta] : t(e).metadata();
     return s && s.messages && s.messages[i]
    }
   },
   customMessage: function(t, e) {
    var i = this.settings.messages[t];
    return i && (i.constructor == String ? i : i[e])
   },
   findDefined: function() {
    for (var t = 0; t < arguments.length; t++)
     if (arguments[t] !== undefined) return arguments[t]
   },
   defaultMessage: function(e, i) {
    return this.findDefined(this.customMessage(e.name, i), this.customMetaMessage(e, i), !this.settings.ignoreTitle && e.title || undefined, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
   },
   formatAndAdd: function(t, e) {
    var i = this.defaultMessage(t, e.method),
     s = /\$?\{(\d+)\}/g;
    if (typeof i == "function") i = i.call(this, e.parameters, t);
    else if (s.test(i)) i = jQuery.format(i.replace(s, "{$1}"), e.parameters);
    this.errorList.push({
     message: i,
     element: t
    });
    this.errorMap[t.name] = i;
    this.submitted[t.name] = i
   },
   addWrapper: function(t) {
    if (this.settings.wrapper) t = t.add(t.parent(this.settings.wrapper));
    return t
   },
   defaultShowErrors: function() {
    for (var t = 0; this.errorList[t]; t++) {
     var e = this.errorList[t];
     this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass);
     this.showLabel(e.element, e.message)
    };
    if (this.errorList.length) this.toShow = this.toShow.add(this.containers);
    if (this.settings.success)
     for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
    if (this.settings.unhighlight) {
     t = 0;
     for (e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass)
    };
    this.toHide = this.toHide.not(this.toShow);
    this.hideErrors();
    this.addWrapper(this.toShow).show()
   },
   validElements: function() {
    return this.currentElements.not(this.invalidElements())
   },
   invalidElements: function() {
    return t(this.errorList).map(function() {
     return this.element
    })
   },
   showLabel: function(e, i) {
    var s = this.errorsFor(e);
    if (s.length) {
     s.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
     s.attr("generated") && s.html(i)
    } else {
     s = t("<" + this.settings.errorElement + "/>").attr({
      "for": this.idOrName(e),
      generated: !0
     }).addClass(this.settings.errorClass).html(i || "");
     if (this.settings.wrapper) s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
     this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))
    };
    if (!i && this.settings.success) {
     s.text("");
     typeof this.settings.success == "string" ? s.addClass(this.settings.success) : this.settings.success(s)
    };
    this.toShow = this.toShow.add(s)
   },
   errorsFor: function(e) {
    var i = this.idOrName(e);
    return this.errors().filter(function() {
     return t(this).attr("for") == i
    })
   },
   idOrName: function(t) {
    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
   },
   validationTargetFor: function(t) {
    if (this.checkable(t)) t = this.findByName(t.name).not(this.settings.ignore)[0];
    return t
   },
   checkable: function(t) {
    return /radio|checkbox/i.test(t.type)
   },
   findByName: function(e) {
    var i = this.currentForm;
    return t(document.getElementsByName(e)).map(function(t, s) {
     return s.form == i && s.name == e && s || null
    })
   },
   getLength: function(e, i) {
    switch (i.nodeName.toLowerCase()) {
     case "select":
      return t("option:selected", i).length;
     case "input":
      if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
    };
    return e.length
   },
   depend: function(t, e) {
    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
   },
   dependTypes: {
    "boolean": function(t) {
     return t
    },
    string: function(e, i) {
     return !!t(e, i.form).length
    },
    "function": function(t, e) {
     return t(e)
    }
   },
   optional: function(e) {
    return !t.validator.methods.required.call(this, t.trim(e.value), e) && "dependency-mismatch"
   },
   startRequest: function(t) {
    if (!this.pending[t.name]) {
     this.pendingRequest++;
     this.pending[t.name] = !0
    }
   },
   stopRequest: function(e, i) {
    this.pendingRequest--;
    if (this.pendingRequest < 0) this.pendingRequest = 0;
    delete this.pending[e.name];
    if (i && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
     t(this.currentForm).submit();
     this.formSubmitted = !1
    } else if (!i && this.pendingRequest == 0 && this.formSubmitted) {
     t(this.currentForm).triggerHandler("invalid-form", [this]);
     this.formSubmitted = !1
    }
   },
   previousValue: function(e) {
    return t.data(e, "previousValue") || t.data(e, "previousValue", {
     old: null,
     valid: !0,
     message: this.defaultMessage(e, "remote")
    })
   }
  },
  classRuleSettings: {
   required: {
    required: !0
   },
   email: {
    email: !0
   },
   url: {
    url: !0
   },
   date: {
    date: !0
   },
   dateISO: {
    dateISO: !0
   },
   dateDE: {
    dateDE: !0
   },
   number: {
    number: !0
   },
   numberDE: {
    numberDE: !0
   },
   digits: {
    digits: !0
   },
   creditcard: {
    creditcard: !0
   }
  },
  addClassRules: function(e, i) {
   e.constructor == String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
  },
  classRules: function(e) {
   var i = {};
   (e = t(e).attr("class")) && t.each(e.split(" "), function() {
    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
   });
   return i
  },
  attributeRules: function(e) {
   var s = {};
   e = t(e);
   for (var i in t.validator.methods) {
    var n;
    if (n = i === "required" && typeof t.fn.prop === "function" ? e.prop(i) : e.attr(i)) s[i] = n;
    else if (e[0].getAttribute("type") === i) s[i] = !0
   };
   s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength;
   return s
  },
  metadataRules: function(e) {
   if (!t.metadata) return {};
   var i = t.data(e.form, "validator").settings.meta;
   return i ? t(e).metadata()[i] : t(e).metadata()
  },
  staticRules: function(e) {
   var s = {},
    i = t.data(e.form, "validator");
   if (i.settings.rules) s = t.validator.normalizeRule(i.settings.rules[e.name]) || {};
   return s
  },
  normalizeRules: function(e, i) {
   t.each(e, function(s, n) {
    if (n === !1) delete e[s];
    else if (n.param || n.depends) {
     var r = !0;
     switch (typeof n.depends) {
      case "string":
       r = !!t(n.depends, i.form).length;
       break;
      case "function":
       r = n.depends.call(i, i)
     };
     if (r) e[s] = n.param !== undefined ? n.param : !0;
     else delete e[s]
    }
   });
   t.each(e, function(s, n) {
    e[s] = t.isFunction(n) ? n(i) : n
   });
   t.each(["minlength", "maxlength", "min", "max"], function() {
    if (e[this]) e[this] = Number(e[this])
   });
   t.each(["rangelength", "range"], function() {
    if (e[this]) e[this] = [Number(e[this][0]), Number(e[this][1])]
   });
   if (t.validator.autoCreateRanges) {
    if (e.min && e.max) {
     e.range = [e.min, e.max];
     delete e.min;
     delete e.max
    };
    if (e.minlength && e.maxlength) {
     e.rangelength = [e.minlength, e.maxlength];
     delete e.minlength;
     delete e.maxlength
    }
   };
   e.messages && delete e.messages;
   return e
  },
  normalizeRule: function(e) {
   if (typeof e == "string") {
    var i = {};
    t.each(e.split(/\s/), function() {
     i[this] = !0
    });
    e = i
   };
   return e
  },
  addMethod: function(e, i, s) {
   t.validator.methods[e] = i;
   t.validator.messages[e] = s != undefined ? s : t.validator.messages[e];
   i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
  },
  methods: {
   required: function(e, i, s) {
    if (!this.depend(s, i)) return "dependency-mismatch";
    switch (i.nodeName.toLowerCase()) {
     case "select":
      return (e = t(i).val()) && e.length > 0;
     case "input":
      if (this.checkable(i)) return this.getLength(e, i) > 0;
     default:
      return t.trim(e).length > 0
    }
   },
   remote: function(e, i, s) {
    if (this.optional(i)) return "dependency-mismatch";
    var r = this.previousValue(i);
    this.settings.messages[i.name] || (this.settings.messages[i.name] = {});
    r.originalMessage = this.settings.messages[i.name].remote;
    this.settings.messages[i.name].remote = r.message;
    s = typeof s == "string" && {
     url: s
    } || s;
    if (this.pending[i.name]) return "pending";
    if (r.old === e) return r.valid;
    r.old = e;
    var n = this;
    this.startRequest(i);
    var a = {};
    a[i.name] = e;
    t.ajax(t.extend(!0, {
     url: s,
     mode: "abort",
     port: "validate" + i.name,
     dataType: "json",
     data: a,
     success: function(s) {
      n.settings.messages[i.name].remote = r.originalMessage;
      var u = s === !0;
      if (u) {
       var a = n.formSubmitted;
       n.prepareElement(i);
       n.formSubmitted = a;
       n.successList.push(i);
       n.showErrors()
      } else {
       a = {};
       s = s || n.defaultMessage(i, "remote");
       a[i.name] = r.message = t.isFunction(s) ? s(e) : s;
       n.showErrors(a)
      };
      r.valid = u;
      n.stopRequest(i, u)
     }
    }, s));
    return "pending"
   },
   minlength: function(e, i, s) {
    return this.optional(i) || this.getLength(t.trim(e), i) >= s
   },
   maxlength: function(e, i, s) {
    return this.optional(i) || this.getLength(t.trim(e), i) <= s
   },
   rangelength: function(e, i, s) {
    e = this.getLength(t.trim(e), i);
    return this.optional(i) || e >= s[0] && e <= s[1]
   },
   min: function(t, e, i) {
    return this.optional(e) || t >= i
   },
   max: function(t, e, i) {
    return this.optional(e) || t <= i
   },
   range: function(t, e, i) {
    return this.optional(e) || t >= i[0] && t <= i[1]
   },
   email: function(t, e) {
    return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
   },
   url: function(t, e) {
    return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
   },
   date: function(t, e) {
    return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
   },
   dateISO: function(t, e) {
    return this.optional(e) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(t)
   },
   number: function(t, e) {
    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(t)
   },
   digits: function(t, e) {
    return this.optional(e) || /^\d+$/.test(t)
   },
   creditcard: function(t, e) {
    if (this.optional(e)) return "dependency-mismatch";
    if (/[^0-9 -]+/.test(t)) return !1;
    var r = 0,
     i = 0,
     s = !1;
    t = t.replace(/\D/g, "");
    for (var n = t.length - 1; n >= 0; n--) {
     i = t.charAt(n);
     i = parseInt(i, 10);
     if (s)
      if ((i *= 2) > 9) i -= 9;
     r += i;
     s = !s
    };
    return r % 10 == 0
   },
   accept: function(t, e, i) {
    i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif";
    return this.optional(e) || t.match(RegExp(".(" + i + ")$", "i"))
   },
   equalTo: function(e, i, s) {
    s = t(s).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
     t(i).valid()
    });
    return e == s.val()
   }
  }
 });
 t.format = t.validator.format
})(jQuery);
(function(t) {
 var e = {};
 if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
  i = t.port;
  if (t.mode == "abort") {
   e[i] && e[i].abort();
   e[i] = s
  }
 });
 else {
  var i = t.ajax;
  t.ajax = function(s) {
   var n = ("port" in s ? s : t.ajaxSettings).port;
   if (("mode" in s ? s : t.ajaxSettings).mode == "abort") {
    e[n] && e[n].abort();
    return e[n] = i.apply(this, arguments)
   };
   return i.apply(this, arguments)
  }
 }
})(jQuery);
(function(t) {
 !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && t.each({
  focus: "focusin",
  blur: "focusout"
 }, function(e, i) {
  function s(e) {
   e = t.event.fix(e);
   e.type = i;
   return t.event.handle.call(this, e)
  };
  t.event.special[i] = {
   setup: function() {
    this.addEventListener(e, s, !0)
   },
   teardown: function() {
    this.removeEventListener(e, s, !0)
   },
   handler: function(e) {
    arguments[0] = t.event.fix(e);
    arguments[0].type = i;
    return t.event.handle.apply(this, arguments)
   }
  }
 });
 t.extend(t.fn, {
  validateDelegate: function(e, i, s) {
   return this.bind(i, function(i) {
    var n = t(i.target);
    if (n.is(e)) return s.apply(n, arguments)
   })
  }
 })
})(jQuery);
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t, e) {
 var n = 0,
  o = /^ui-id-\d+$/;
 t.ui = t.ui || {};
 t.extend(t.ui, {
  version: "1.10.2",
  keyCode: {
   BACKSPACE: 8,
   COMMA: 188,
   DELETE: 46,
   DOWN: 40,
   END: 35,
   ENTER: 13,
   ESCAPE: 27,
   HOME: 36,
   LEFT: 37,
   NUMPAD_ADD: 107,
   NUMPAD_DECIMAL: 110,
   NUMPAD_DIVIDE: 111,
   NUMPAD_ENTER: 108,
   NUMPAD_MULTIPLY: 106,
   NUMPAD_SUBTRACT: 109,
   PAGE_DOWN: 34,
   PAGE_UP: 33,
   PERIOD: 190,
   RIGHT: 39,
   SPACE: 32,
   TAB: 9,
   UP: 38
  }
 });
 t.fn.extend({
  focus: (function(e) {
   return function(i, s) {
    return typeof i === "number" ? this.each(function() {
     var e = this;
     setTimeout(function() {
      t(e).focus();
      if (s) {
       s.call(e)
      }
     }, i)
    }) : e.apply(this, arguments)
   }
  })(t.fn.focus),
  scrollParent: function() {
   var e;
   if ((t.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
    e = this.parents().filter(function() {
     return (/(relative|absolute|fixed)/).test(t.css(this, "position")) && (/(auto|scroll)/).test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
    }).eq(0)
   } else {
    e = this.parents().filter(function() {
     return (/(auto|scroll)/).test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
    }).eq(0)
   };
   return (/fixed/).test(this.css("position")) || !e.length ? t(document) : e
  },
  zIndex: function(i) {
   if (i !== e) {
    return this.css("zIndex", i)
   };
   if (this.length) {
    var s = t(this[0]),
     o, n;
    while (s.length && s[0] !== document) {
     o = s.css("position");
     if (o === "absolute" || o === "relative" || o === "fixed") {
      n = parseInt(s.css("zIndex"), 10);
      if (!isNaN(n) && n !== 0) {
       return n
      }
     };
     s = s.parent()
    }
   };
   return 0
  },
  uniqueId: function() {
   return this.each(function() {
    if (!this.id) {
     this.id = "ui-id-" + (++n)
    }
   })
  },
  removeUniqueId: function() {
   return this.each(function() {
    if (o.test(this.id)) {
     t(this).removeAttr("id")
    }
   })
  }
 });

 function s(e, s) {
  var a, r, o, n = e.nodeName.toLowerCase();
  if ("area" === n) {
   a = e.parentNode;
   r = a.name;
   if (!e.href || !r || a.nodeName.toLowerCase() !== "map") {
    return !1
   };
   o = t("img[usemap=#" + r + "]")[0];
   return !!o && i(o)
  };
  return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || s : s) && i(e)
 };

 function i(e) {
  return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
   return t.css(this, "visibility") === "hidden"
  }).length
 };
 t.extend(t.expr[":"], {
  data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
   return function(i) {
    return !!t.data(i, e)
   }
  }) : function(e, i, s) {
   return !!t.data(e, s[3])
  },
  focusable: function(e) {
   return s(e, !isNaN(t.attr(e, "tabindex")))
  },
  tabbable: function(e) {
   var n = t.attr(e, "tabindex"),
    i = isNaN(n);
   return (i || n >= 0) && s(e, !i)
  }
 });
 if (!t("<a>").outerWidth(1).jquery) {
  t.each(["Width", "Height"], function(i, s) {
   var r = s === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
    a = s.toLowerCase(),
    n = {
     innerWidth: t.fn.innerWidth,
     innerHeight: t.fn.innerHeight,
     outerWidth: t.fn.outerWidth,
     outerHeight: t.fn.outerHeight
    };

   function o(e, i, s, n) {
    t.each(r, function() {
     i -= parseFloat(t.css(e, "padding" + this)) || 0;
     if (s) {
      i -= parseFloat(t.css(e, "border" + this + "Width")) || 0
     };
     if (n) {
      i -= parseFloat(t.css(e, "margin" + this)) || 0
     }
    });
    return i
   };
   t.fn["inner" + s] = function(i) {
    if (i === e) {
     return n["inner" + s].call(this)
    };
    return this.each(function() {
     t(this).css(a, o(this, i) + "px")
    })
   };
   t.fn["outer" + s] = function(e, i) {
    if (typeof e !== "number") {
     return n["outer" + s].call(this, e)
    };
    return this.each(function() {
     t(this).css(a, o(this, e, !0, i) + "px")
    })
   }
  })
 };
 if (!t.fn.addBack) {
  t.fn.addBack = function(t) {
   return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
  }
 };
 if (t("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
  t.fn.removeData = (function(e) {
   return function(i) {
    if (arguments.length) {
     return e.call(this, t.camelCase(i))
    } else {
     return e.call(this)
    }
   }
  })(t.fn.removeData)
 };
 t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
 t.support.selectstart = "onselectstart" in document.createElement("div");
 t.fn.extend({
  disableSelection: function() {
   return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
    t.preventDefault()
   })
  },
  enableSelection: function() {
   return this.unbind(".ui-disableSelection")
  }
 });
 t.extend(t.ui, {
  plugin: {
   add: function(e, i, s) {
    var n, o = t.ui[e].prototype;
    for (n in s) {
     o.plugins[n] = o.plugins[n] || [];
     o.plugins[n].push([i, s[n]])
    }
   },
   call: function(t, e, i) {
    var s, n = t.plugins[e];
    if (!n || !t.element[0].parentNode || t.element[0].parentNode.nodeType === 11) {
     return
    };
    for (s = 0; s < n.length; s++) {
     if (t.options[n[s][0]]) {
      n[s][1].apply(t.element, i)
     }
    }
   }
  },
  hasScroll: function(e, i) {
   if (t(e).css("overflow") === "hidden") {
    return !1
   };
   var s = (i && i === "left") ? "scrollLeft" : "scrollTop",
    n = !1;
   if (e[s] > 0) {
    return !0
   };
   e[s] = 1;
   n = (e[s] > 0);
   e[s] = 0;
   return n
  }
 })
})(jQuery);
(function(t, e) {
 var n = 0,
  i = Array.prototype.slice,
  s = t.cleanData;
 t.cleanData = function(e) {
  for (var n = 0, o;
   (o = e[n]) != null; n++) {
   try {
    t(o).triggerHandler("remove")
   } catch (i) {}
  };
  s(e)
 };
 t.widget = function(e, i, s) {
  var l, a, n, r, h = {},
   o = e.split(".")[0];
  e = e.split(".")[1];
  l = o + "-" + e;
  if (!s) {
   s = i;
   i = t.Widget
  };
  t.expr[":"][l.toLowerCase()] = function(e) {
   return !!t.data(e, l)
  };
  t[o] = t[o] || {};
  a = t[o][e];
  n = t[o][e] = function(t, e) {
   if (!this._createWidget) {
    return new n(t, e)
   };
   if (arguments.length) {
    this._createWidget(t, e)
   }
  };
  t.extend(n, a, {
   version: s.version,
   _proto: t.extend({}, s),
   _childConstructors: []
  });
  r = new i();
  r.options = t.widget.extend({}, r.options);
  t.each(s, function(e, s) {
   if (!t.isFunction(s)) {
    h[e] = s;
    return
   };
   h[e] = (function() {
    var n = function() {
      return i.prototype[e].apply(this, arguments)
     },
     t = function(t) {
      return i.prototype[e].apply(this, t)
     };
    return function() {
     var o = this._super,
      i = this._superApply,
      e;
     this._super = n;
     this._superApply = t;
     e = s.apply(this, arguments);
     this._super = o;
     this._superApply = i;
     return e
    }
   })()
  });
  n.prototype = t.widget.extend(r, {
   widgetEventPrefix: a ? r.widgetEventPrefix : e
  }, h, {
   constructor: n,
   namespace: o,
   widgetName: e,
   widgetFullName: l
  });
  if (a) {
   t.each(a._childConstructors, function(e, i) {
    var s = i.prototype;
    t.widget(s.namespace + "." + s.widgetName, n, i._proto)
   });
   delete a._childConstructors
  } else {
   i._childConstructors.push(n)
  };
  t.widget.bridge(e, n)
 };
 t.widget.extend = function(s) {
  var r = i.call(arguments, 1),
   a = 0,
   l = r.length,
   n, o;
  for (; a < l; a++) {
   for (n in r[a]) {
    o = r[a][n];
    if (r[a].hasOwnProperty(n) && o !== e) {
     if (t.isPlainObject(o)) {
      s[n] = t.isPlainObject(s[n]) ? t.widget.extend({}, s[n], o) : t.widget.extend({}, o)
     } else {
      s[n] = o
     }
    }
   }
  };
  return s
 };
 t.widget.bridge = function(s, n) {
  var o = n.prototype.widgetFullName || s;
  t.fn[s] = function(a) {
   var h = typeof a === "string",
    r = i.call(arguments, 1),
    l = this;
   a = !h && r.length ? t.widget.extend.apply(null, [a].concat(r)) : a;
   if (h) {
    this.each(function() {
     var i, n = t.data(this, o);
     if (!n) {
      return t.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + a + "'")
     };
     if (!t.isFunction(n[a]) || a.charAt(0) === "_") {
      return t.error("no such method '" + a + "' for " + s + " widget instance")
     };
     i = n[a].apply(n, r);
     if (i !== n && i !== e) {
      l = i && i.jquery ? l.pushStack(i.get()) : i;
      return !1
     }
    })
   } else {
    this.each(function() {
     var e = t.data(this, o);
     if (e) {
      e.option(a || {})._init()
     } else {
      t.data(this, o, new n(a, this))
     }
    })
   };
   return l
  }
 };
 t.Widget = function() {};
 t.Widget._childConstructors = [];
 t.Widget.prototype = {
  widgetName: "widget",
  widgetEventPrefix: "",
  defaultElement: "<div>",
  options: {
   disabled: !1,
   create: null
  },
  _createWidget: function(e, i) {
   i = t(i || this.defaultElement || this)[0];
   this.element = t(i);
   this.uuid = n++;
   this.eventNamespace = "." + this.widgetName + this.uuid;
   this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e);
   this.bindings = t();
   this.hoverable = t();
   this.focusable = t();
   if (i !== this) {
    t.data(i, this.widgetFullName, this);
    this._on(!0, this.element, {
     remove: function(t) {
      if (t.target === i) {
       this.destroy()
      }
     }
    });
    this.document = t(i.style ? i.ownerDocument : i.document || i);
    this.window = t(this.document[0].defaultView || this.document[0].parentWindow)
   };
   this._create();
   this._trigger("create", null, this._getCreateEventData());
   this._init()
  },
  _getCreateOptions: t.noop,
  _getCreateEventData: t.noop,
  _create: t.noop,
  _init: t.noop,
  destroy: function() {
   this._destroy();
   this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName));
   this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
   this.bindings.unbind(this.eventNamespace);
   this.hoverable.removeClass("ui-state-hover");
   this.focusable.removeClass("ui-state-focus")
  },
  _destroy: t.noop,
  widget: function() {
   return this.element
  },
  option: function(i, s) {
   var r = i,
    n, o, a;
   if (arguments.length === 0) {
    return t.widget.extend({}, this.options)
   };
   if (typeof i === "string") {
    r = {};
    n = i.split(".");
    i = n.shift();
    if (n.length) {
     o = r[i] = t.widget.extend({}, this.options[i]);
     for (a = 0; a < n.length - 1; a++) {
      o[n[a]] = o[n[a]] || {};
      o = o[n[a]]
     };
     i = n.pop();
     if (s === e) {
      return o[i] === e ? null : o[i]
     };
     o[i] = s
    } else {
     if (s === e) {
      return this.options[i] === e ? null : this.options[i]
     };
     r[i] = s
    }
   };
   this._setOptions(r);
   return this
  },
  _setOptions: function(t) {
   var e;
   for (e in t) {
    this._setOption(e, t[e])
   };
   return this
  },
  _setOption: function(t, e) {
   this.options[t] = e;
   if (t === "disabled") {
    this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e);
    this.hoverable.removeClass("ui-state-hover");
    this.focusable.removeClass("ui-state-focus")
   };
   return this
  },
  enable: function() {
   return this._setOption("disabled", !1)
  },
  disable: function() {
   return this._setOption("disabled", !0)
  },
  _on: function(e, i, s) {
   var o, n = this;
   if (typeof e !== "boolean") {
    s = i;
    i = e;
    e = !1
   };
   if (!s) {
    s = i;
    i = this.element;
    o = this.widget()
   } else {
    i = o = t(i);
    this.bindings = this.bindings.add(i)
   };
   t.each(s, function(s, a) {
    function r() {
     if (!e && (n.options.disabled === !0 || t(this).hasClass("ui-state-disabled"))) {
      return
     };
     return (typeof a === "string" ? n[a] : a).apply(n, arguments)
    };
    if (typeof a !== "string") {
     r.guid = a.guid = a.guid || r.guid || t.guid++
    };
    var h = s.match(/^(\w+)\s*(.*)$/),
     u = h[1] + n.eventNamespace,
     l = h[2];
    if (l) {
     o.delegate(l, u, r)
    } else {
     i.bind(u, r)
    }
   })
  },
  _off: function(t, e) {
   e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
   t.unbind(e).undelegate(e)
  },
  _delay: function(t, e) {
   function s() {
    return (typeof t === "string" ? i[t] : t).apply(i, arguments)
   };
   var i = this;
   return setTimeout(s, e || 0)
  },
  _hoverable: function(e) {
   this.hoverable = this.hoverable.add(e);
   this._on(e, {
    mouseenter: function(e) {
     t(e.currentTarget).addClass("ui-state-hover")
    },
    mouseleave: function(e) {
     t(e.currentTarget).removeClass("ui-state-hover")
    }
   })
  },
  _focusable: function(e) {
   this.focusable = this.focusable.add(e);
   this._on(e, {
    focusin: function(e) {
     t(e.currentTarget).addClass("ui-state-focus")
    },
    focusout: function(e) {
     t(e.currentTarget).removeClass("ui-state-focus")
    }
   })
  },
  _trigger: function(e, i, s) {
   var n, o, a = this.options[e];
   s = s || {};
   i = t.Event(i);
   i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase();
   i.target = this.element[0];
   o = i.originalEvent;
   if (o) {
    for (n in o) {
     if (!(n in i)) {
      i[n] = o[n]
     }
    }
   };
   this.element.trigger(i, s);
   return !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
  }
 };
 t.each({
  show: "fadeIn",
  hide: "fadeOut"
 }, function(e, i) {
  t.Widget.prototype["_" + e] = function(s, n, o) {
   if (typeof n === "string") {
    n = {
     effect: n
    }
   };
   var r, a = !n ? e : n === !0 || typeof n === "number" ? i : n.effect || i;
   n = n || {};
   if (typeof n === "number") {
    n = {
     duration: n
    }
   };
   r = !t.isEmptyObject(n);
   n.complete = o;
   if (n.delay) {
    s.delay(n.delay)
   };
   if (r && t.effects && t.effects.effect[a]) {
    s[e](n)
   } else if (a !== e && s[a]) {
    s[a](n.duration, n.easing, o)
   } else {
    s.queue(function(i) {
     t(this)[e]();
     if (o) {
      o.call(s[0])
     };
     i()
    })
   }
  }
 })
})(jQuery);
(function(t, e) {
 var i = !1;
 t(document).mouseup(function() {
  i = !1
 });
 t.widget("ui.mouse", {
  version: "1.10.2",
  options: {
   cancel: "input,textarea,button,select,option",
   distance: 1,
   delay: 0
  },
  _mouseInit: function() {
   var e = this;
   this.element.bind("mousedown." + this.widgetName, function(t) {
    return e._mouseDown(t)
   }).bind("click." + this.widgetName, function(i) {
    if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) {
     t.removeData(i.target, e.widgetName + ".preventClickEvent");
     i.stopImmediatePropagation();
     return !1
    }
   });
   this.started = !1
  },
  _mouseDestroy: function() {
   this.element.unbind("." + this.widgetName);
   if (this._mouseMoveDelegate) {
    t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
   }
  },
  _mouseDown: function(e) {
   if (i) {
    return
   }(this._mouseStarted && this._mouseUp(e));
   this._mouseDownEvent = e;
   var s = this,
    o = (e.which === 1),
    n = (typeof this.options.cancel === "string" && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1);
   if (!o || n || !this._mouseCapture(e)) {
    return !0
   };
   this.mouseDelayMet = !this.options.delay;
   if (!this.mouseDelayMet) {
    this._mouseDelayTimer = setTimeout(function() {
     s.mouseDelayMet = !0
    }, this.options.delay)
   };
   if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
    this._mouseStarted = (this._mouseStart(e) !== !1);
    if (!this._mouseStarted) {
     e.preventDefault();
     return !0
    }
   };
   if (!0 === t.data(e.target, this.widgetName + ".preventClickEvent")) {
    t.removeData(e.target, this.widgetName + ".preventClickEvent")
   };
   this._mouseMoveDelegate = function(t) {
    return s._mouseMove(t)
   };
   this._mouseUpDelegate = function(t) {
    return s._mouseUp(t)
   };
   t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
   e.preventDefault();
   i = !0;
   return !0
  },
  _mouseMove: function(e) {
   if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) {
    return this._mouseUp(e)
   };
   if (this._mouseStarted) {
    this._mouseDrag(e);
    return e.preventDefault()
   };
   if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
    this._mouseStarted = (this._mouseStart(this._mouseDownEvent, e) !== !1);
    (this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e))
   };
   return !this._mouseStarted
  },
  _mouseUp: function(e) {
   t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
   if (this._mouseStarted) {
    this._mouseStarted = !1;
    if (e.target === this._mouseDownEvent.target) {
     t.data(e.target, this.widgetName + ".preventClickEvent", !0)
    };
    this._mouseStop(e)
   };
   return !1
  },
  _mouseDistanceMet: function(t) {
   return (Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance)
  },
  _mouseDelayMet: function() {
   return this.mouseDelayMet
  },
  _mouseStart: function() {},
  _mouseDrag: function() {},
  _mouseStop: function() {},
  _mouseCapture: function() {
   return !0
  }
 })
})(jQuery);
(function(t, e) {
 t.widget("ui.draggable", t.ui.mouse, {
  version: "1.10.2",
  widgetEventPrefix: "drag",
  options: {
   addClasses: !0,
   appendTo: "parent",
   axis: !1,
   connectToSortable: !1,
   containment: !1,
   cursor: "auto",
   cursorAt: !1,
   grid: !1,
   handle: !1,
   helper: "original",
   iframeFix: !1,
   opacity: !1,
   refreshPositions: !1,
   revert: !1,
   revertDuration: 500,
   scope: "default",
   scroll: !0,
   scrollSensitivity: 20,
   scrollSpeed: 20,
   snap: !1,
   snapMode: "both",
   snapTolerance: 20,
   stack: !1,
   zIndex: !1,
   drag: null,
   start: null,
   stop: null
  },
  _create: function() {
   if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
    this.element[0].style.position = "relative"
   };
   if (this.options.addClasses) {
    this.element.addClass("ui-draggable")
   };
   if (this.options.disabled) {
    this.element.addClass("ui-draggable-disabled")
   };
   this._mouseInit()
  },
  _destroy: function() {
   this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
   this._mouseDestroy()
  },
  _mouseCapture: function(e) {
   var i = this.options;
   if (this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) {
    return !1
   };
   this.handle = this._getHandle(e);
   if (!this.handle) {
    return !1
   };
   t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
    t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
     width: this.offsetWidth + "px",
     height: this.offsetHeight + "px",
     position: "absolute",
     opacity: "0.001",
     zIndex: 1000
    }).css(t(this).offset()).appendTo("body")
   });
   return !0
  },
  _mouseStart: function(e) {
   var i = this.options;
   this.helper = this._createHelper(e);
   this.helper.addClass("ui-draggable-dragging");
   this._cacheHelperProportions();
   if (t.ui.ddmanager) {
    t.ui.ddmanager.current = this
   };
   this._cacheMargins();
   this.cssPosition = this.helper.css("position");
   this.scrollParent = this.helper.scrollParent();
   this.offset = this.positionAbs = this.element.offset();
   this.offset = {
    top: this.offset.top - this.margins.top,
    left: this.offset.left - this.margins.left
   };
   t.extend(this.offset, {
    click: {
     left: e.pageX - this.offset.left,
     top: e.pageY - this.offset.top
    },
    parent: this._getParentOffset(),
    relative: this._getRelativeOffset()
   });
   this.originalPosition = this.position = this._generatePosition(e);
   this.originalPageX = e.pageX;
   this.originalPageY = e.pageY;
   (i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt));
   if (i.containment) {
    this._setContainment()
   };
   if (this._trigger("start", e) === !1) {
    this._clear();
    return !1
   };
   this._cacheHelperProportions();
   if (t.ui.ddmanager && !i.dropBehaviour) {
    t.ui.ddmanager.prepareOffsets(this, e)
   };
   this._mouseDrag(e, !0);
   if (t.ui.ddmanager) {
    t.ui.ddmanager.dragStart(this, e)
   };
   return !0
  },
  _mouseDrag: function(e, i) {
   this.position = this._generatePosition(e);
   this.positionAbs = this._convertPositionTo("absolute");
   if (!i) {
    var s = this._uiHash();
    if (this._trigger("drag", e, s) === !1) {
     this._mouseUp({});
     return !1
    };
    this.position = s.position
   };
   if (!this.options.axis || this.options.axis !== "y") {
    this.helper[0].style.left = this.position.left + "px"
   };
   if (!this.options.axis || this.options.axis !== "x") {
    this.helper[0].style.top = this.position.top + "px"
   };
   if (t.ui.ddmanager) {
    t.ui.ddmanager.drag(this, e)
   };
   return !1
  },
  _mouseStop: function(e) {
   var i, n = this,
    o = !1,
    s = !1;
   if (t.ui.ddmanager && !this.options.dropBehaviour) {
    s = t.ui.ddmanager.drop(this, e)
   };
   if (this.dropped) {
    s = this.dropped;
    this.dropped = !1
   };
   i = this.element[0];
   while (i && (i = i.parentNode)) {
    if (i === document) {
     o = !0
    }
   };
   if (!o && this.options.helper === "original") {
    return !1
   };
   if ((this.options.revert === "invalid" && !s) || (this.options.revert === "valid" && s) || this.options.revert === !0 || (t.isFunction(this.options.revert) && this.options.revert.call(this.element, s))) {
    t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
     if (n._trigger("stop", e) !== !1) {
      n._clear()
     }
    })
   } else {
    if (this._trigger("stop", e) !== !1) {
     this._clear()
    }
   };
   return !1
  },
  _mouseUp: function(e) {
   t("div.ui-draggable-iframeFix").each(function() {
    this.parentNode.removeChild(this)
   });
   if (t.ui.ddmanager) {
    t.ui.ddmanager.dragStop(this, e)
   };
   return t.ui.mouse.prototype._mouseUp.call(this, e)
  },
  cancel: function() {
   if (this.helper.is(".ui-draggable-dragging")) {
    this._mouseUp({})
   } else {
    this._clear()
   };
   return this
  },
  _getHandle: function(e) {
   return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
  },
  _createHelper: function(e) {
   var s = this.options,
    i = t.isFunction(s.helper) ? t(s.helper.apply(this.element[0], [e])) : (s.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
   if (!i.parents("body").length) {
    i.appendTo((s.appendTo === "parent" ? this.element[0].parentNode : s.appendTo))
   };
   if (i[0] !== this.element[0] && !(/(fixed|absolute)/).test(i.css("position"))) {
    i.css("position", "absolute")
   };
   return i
  },
  _adjustOffsetFromHelper: function(e) {
   if (typeof e === "string") {
    e = e.split(" ")
   };
   if (t.isArray(e)) {
    e = {
     left: +e[0],
     top: +e[1] || 0
    }
   };
   if ("left" in e) {
    this.offset.click.left = e.left + this.margins.left
   };
   if ("right" in e) {
    this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
   };
   if ("top" in e) {
    this.offset.click.top = e.top + this.margins.top
   };
   if ("bottom" in e) {
    this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
   }
  },
  _getParentOffset: function() {
   this.offsetParent = this.helper.offsetParent();
   var e = this.offsetParent.offset();
   if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])) {
    e.left += this.scrollParent.scrollLeft();
    e.top += this.scrollParent.scrollTop()
   };
   if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && t.ui.ie)) {
    e = {
     top: 0,
     left: 0
    }
   };
   return {
    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
   }
  },
  _getRelativeOffset: function() {
   if (this.cssPosition === "relative") {
    var t = this.element.position();
    return {
     top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
     left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
    }
   } else {
    return {
     top: 0,
     left: 0
    }
   }
  },
  _cacheMargins: function() {
   this.margins = {
    left: (parseInt(this.element.css("marginLeft"), 10) || 0),
    top: (parseInt(this.element.css("marginTop"), 10) || 0),
    right: (parseInt(this.element.css("marginRight"), 10) || 0),
    bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
   }
  },
  _cacheHelperProportions: function() {
   this.helperProportions = {
    width: this.helper.outerWidth(),
    height: this.helper.outerHeight()
   }
  },
  _setContainment: function() {
   var n, s, e, i = this.options;
   if (i.containment === "parent") {
    i.containment = this.helper[0].parentNode
   };
   if (i.containment === "document" || i.containment === "window") {
    this.containment = [i.containment === "document" ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : t(window).scrollLeft()) + t(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : t(window).scrollTop()) + (t(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
   };
   if (!(/^(document|window|parent)$/).test(i.containment) && i.containment.constructor !== Array) {
    s = t(i.containment);
    e = s[0];
    if (!e) {
     return
    };
    n = (t(e).css("overflow") !== "hidden");
    this.containment = [(parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0), (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0), (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderRightWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderBottomWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
    this.relative_container = s
   } else if (i.containment.constructor === Array) {
    this.containment = i.containment
   }
  },
  _convertPositionTo: function(e, i) {
   if (!i) {
    i = this.position
   };
   var s = e === "absolute" ? 1 : -1,
    n = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
    o = (/(html|body)/i).test(n[0].tagName);
   return {
    top: (i.top + this.offset.relative.top * s + this.offset.parent.top * s - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (o ? 0 : n.scrollTop())) * s)),
    left: (i.left + this.offset.relative.left * s + this.offset.parent.left * s - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s))
   }
  },
  _generatePosition: function(e) {
   var i, r, o, n, s = this.options,
    h = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
    u = (/(html|body)/i).test(h[0].tagName),
    l = e.pageX,
    a = e.pageY;
   if (this.originalPosition) {
    if (this.containment) {
     if (this.relative_container) {
      r = this.relative_container.offset();
      i = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]
     } else {
      i = this.containment
     };
     if (e.pageX - this.offset.click.left < i[0]) {
      l = i[0] + this.offset.click.left
     };
     if (e.pageY - this.offset.click.top < i[1]) {
      a = i[1] + this.offset.click.top
     };
     if (e.pageX - this.offset.click.left > i[2]) {
      l = i[2] + this.offset.click.left
     };
     if (e.pageY - this.offset.click.top > i[3]) {
      a = i[3] + this.offset.click.top
     }
    };
    if (s.grid) {
     o = s.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY;
     a = i ? ((o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3]) ? o : ((o - this.offset.click.top >= i[1]) ? o - s.grid[1] : o + s.grid[1])) : o;
     n = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX;
     l = i ? ((n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2]) ? n : ((n - this.offset.click.left >= i[0]) ? n - s.grid[0] : n + s.grid[0])) : n
    }
   };
   return {
    top: (a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (u ? 0 : h.scrollTop())))),
    left: (l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : u ? 0 : h.scrollLeft())))
   }
  },
  _clear: function() {
   this.helper.removeClass("ui-draggable-dragging");
   if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
    this.helper.remove()
   };
   this.helper = null;
   this.cancelHelperRemoval = !1
  },
  _trigger: function(e, i, s) {
   s = s || this._uiHash();
   t.ui.plugin.call(this, e, [i, s]);
   if (e === "drag") {
    this.positionAbs = this._convertPositionTo("absolute")
   };
   return t.Widget.prototype._trigger.call(this, e, i, s)
  },
  plugins: {},
  _uiHash: function() {
   return {
    helper: this.helper,
    position: this.position,
    originalPosition: this.originalPosition,
    offset: this.positionAbs
   }
  }
 });
 t.ui.plugin.add("draggable", "connectToSortable", {
  start: function(e, i) {
   var s = t(this).data("ui-draggable"),
    o = s.options,
    n = t.extend({}, i, {
     item: s.element
    });
   s.sortables = [];
   t(o.connectToSortable).each(function() {
    var i = t.data(this, "ui-sortable");
    if (i && !i.options.disabled) {
     s.sortables.push({
      instance: i,
      shouldRevert: i.options.revert
     });
     i.refreshPositions();
     i._trigger("activate", e, n)
    }
   })
  },
  stop: function(e, i) {
   var s = t(this).data("ui-draggable"),
    n = t.extend({}, i, {
     item: s.element
    });
   t.each(s.sortables, function() {
    if (this.instance.isOver) {
     this.instance.isOver = 0;
     s.cancelHelperRemoval = !0;
     this.instance.cancelHelperRemoval = !1;
     if (this.shouldRevert) {
      this.instance.options.revert = this.shouldRevert
     };
     this.instance._mouseStop(e);
     this.instance.options.helper = this.instance.options._helper;
     if (s.options.helper === "original") {
      this.instance.currentItem.css({
       top: "auto",
       left: "auto"
      })
     }
    } else {
     this.instance.cancelHelperRemoval = !1;
     this.instance._trigger("deactivate", e, n)
    }
   })
  },
  drag: function(e, i) {
   var s = t(this).data("ui-draggable"),
    n = this;
   t.each(s.sortables, function() {
    var o = !1,
     a = this;
    this.instance.positionAbs = s.positionAbs;
    this.instance.helperProportions = s.helperProportions;
    this.instance.offset.click = s.offset.click;
    if (this.instance._intersectsWith(this.instance.containerCache)) {
     o = !0;
     t.each(s.sortables, function() {
      this.instance.positionAbs = s.positionAbs;
      this.instance.helperProportions = s.helperProportions;
      this.instance.offset.click = s.offset.click;
      if (this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0])) {
       o = !1
      };
      return o
     })
    };
    if (o) {
     if (!this.instance.isOver) {
      this.instance.isOver = 1;
      this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0);
      this.instance.options._helper = this.instance.options.helper;
      this.instance.options.helper = function() {
       return i.helper[0]
      };
      e.target = this.instance.currentItem[0];
      this.instance._mouseCapture(e, !0);
      this.instance._mouseStart(e, !0, !0);
      this.instance.offset.click.top = s.offset.click.top;
      this.instance.offset.click.left = s.offset.click.left;
      this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left;
      this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top;
      s._trigger("toSortable", e);
      s.dropped = this.instance.element;
      s.currentItem = s.element;
      this.instance.fromOutside = s
     };
     if (this.instance.currentItem) {
      this.instance._mouseDrag(e)
     }
    } else {
     if (this.instance.isOver) {
      this.instance.isOver = 0;
      this.instance.cancelHelperRemoval = !0;
      this.instance.options.revert = !1;
      this.instance._trigger("out", e, this.instance._uiHash(this.instance));
      this.instance._mouseStop(e, !0);
      this.instance.options.helper = this.instance.options._helper;
      this.instance.currentItem.remove();
      if (this.instance.placeholder) {
       this.instance.placeholder.remove()
      };
      s._trigger("fromSortable", e);
      s.dropped = !1
     }
    }
   })
  }
 });
 t.ui.plugin.add("draggable", "cursor", {
  start: function() {
   var e = t("body"),
    i = t(this).data("ui-draggable").options;
   if (e.css("cursor")) {
    i._cursor = e.css("cursor")
   };
   e.css("cursor", i.cursor)
  },
  stop: function() {
   var e = t(this).data("ui-draggable").options;
   if (e._cursor) {
    t("body").css("cursor", e._cursor)
   }
  }
 });
 t.ui.plugin.add("draggable", "opacity", {
  start: function(e, i) {
   var s = t(i.helper),
    n = t(this).data("ui-draggable").options;
   if (s.css("opacity")) {
    n._opacity = s.css("opacity")
   };
   s.css("opacity", n.opacity)
  },
  stop: function(e, i) {
   var s = t(this).data("ui-draggable").options;
   if (s._opacity) {
    t(i.helper).css("opacity", s._opacity)
   }
  }
 });
 t.ui.plugin.add("draggable", "scroll", {
  start: function() {
   var e = t(this).data("ui-draggable");
   if (e.scrollParent[0] !== document && e.scrollParent[0].tagName !== "HTML") {
    e.overflowOffset = e.scrollParent.offset()
   }
  },
  drag: function(e) {
   var s = t(this).data("ui-draggable"),
    i = s.options,
    n = !1;
   if (s.scrollParent[0] !== document && s.scrollParent[0].tagName !== "HTML") {
    if (!i.axis || i.axis !== "x") {
     if ((s.overflowOffset.top + s.scrollParent[0].offsetHeight) - e.pageY < i.scrollSensitivity) {
      s.scrollParent[0].scrollTop = n = s.scrollParent[0].scrollTop + i.scrollSpeed
     } else if (e.pageY - s.overflowOffset.top < i.scrollSensitivity) {
      s.scrollParent[0].scrollTop = n = s.scrollParent[0].scrollTop - i.scrollSpeed
     }
    };
    if (!i.axis || i.axis !== "y") {
     if ((s.overflowOffset.left + s.scrollParent[0].offsetWidth) - e.pageX < i.scrollSensitivity) {
      s.scrollParent[0].scrollLeft = n = s.scrollParent[0].scrollLeft + i.scrollSpeed
     } else if (e.pageX - s.overflowOffset.left < i.scrollSensitivity) {
      s.scrollParent[0].scrollLeft = n = s.scrollParent[0].scrollLeft - i.scrollSpeed
     }
    }
   } else {
    if (!i.axis || i.axis !== "x") {
     if (e.pageY - t(document).scrollTop() < i.scrollSensitivity) {
      n = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed)
     } else if (t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity) {
      n = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)
     }
    };
    if (!i.axis || i.axis !== "y") {
     if (e.pageX - t(document).scrollLeft() < i.scrollSensitivity) {
      n = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed)
     } else if (t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity) {
      n = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed)
     }
    }
   };
   if (n !== !1 && t.ui.ddmanager && !i.dropBehaviour) {
    t.ui.ddmanager.prepareOffsets(s, e)
   }
  }
 });
 t.ui.plugin.add("draggable", "snap", {
  start: function() {
   var e = t(this).data("ui-draggable"),
    i = e.options;
   e.snapElements = [];
   t(i.snap.constructor !== String ? (i.snap.items || ":data(ui-draggable)") : i.snap).each(function() {
    var i = t(this),
     s = i.offset();
    if (this !== e.element[0]) {
     e.snapElements.push({
      item: this,
      width: i.outerWidth(),
      height: i.outerHeight(),
      top: s.top,
      left: s.left
     })
    }
   })
  },
  drag: function(e, i) {
   var u, d, g, p, a, h, r, l, o, y, s = t(this).data("ui-draggable"),
    b = s.options,
    n = b.snapTolerance,
    c = i.offset.left,
    m = c + s.helperProportions.width,
    f = i.offset.top,
    v = f + s.helperProportions.height;
   for (o = s.snapElements.length - 1; o >= 0; o--) {
    a = s.snapElements[o].left;
    h = a + s.snapElements[o].width;
    r = s.snapElements[o].top;
    l = r + s.snapElements[o].height;
    if (!((a - n < c && c < h + n && r - n < f && f < l + n) || (a - n < c && c < h + n && r - n < v && v < l + n) || (a - n < m && m < h + n && r - n < f && f < l + n) || (a - n < m && m < h + n && r - n < v && v < l + n))) {
     if (s.snapElements[o].snapping) {
      (s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
       snapItem: s.snapElements[o].item
      })))
     };
     s.snapElements[o].snapping = !1;
     continue
    };
    if (b.snapMode !== "inner") {
     u = Math.abs(r - v) <= n;
     d = Math.abs(l - f) <= n;
     g = Math.abs(a - m) <= n;
     p = Math.abs(h - c) <= n;
     if (u) {
      i.position.top = s._convertPositionTo("relative", {
       top: r - s.helperProportions.height,
       left: 0
      }).top - s.margins.top
     };
     if (d) {
      i.position.top = s._convertPositionTo("relative", {
       top: l,
       left: 0
      }).top - s.margins.top
     };
     if (g) {
      i.position.left = s._convertPositionTo("relative", {
       top: 0,
       left: a - s.helperProportions.width
      }).left - s.margins.left
     };
     if (p) {
      i.position.left = s._convertPositionTo("relative", {
       top: 0,
       left: h
      }).left - s.margins.left
     }
    };
    y = (u || d || g || p);
    if (b.snapMode !== "outer") {
     u = Math.abs(r - f) <= n;
     d = Math.abs(l - v) <= n;
     g = Math.abs(a - c) <= n;
     p = Math.abs(h - m) <= n;
     if (u) {
      i.position.top = s._convertPositionTo("relative", {
       top: r,
       left: 0
      }).top - s.margins.top
     };
     if (d) {
      i.position.top = s._convertPositionTo("relative", {
       top: l - s.helperProportions.height,
       left: 0
      }).top - s.margins.top
     };
     if (g) {
      i.position.left = s._convertPositionTo("relative", {
       top: 0,
       left: a
      }).left - s.margins.left
     };
     if (p) {
      i.position.left = s._convertPositionTo("relative", {
       top: 0,
       left: h - s.helperProportions.width
      }).left - s.margins.left
     }
    };
    if (!s.snapElements[o].snapping && (u || d || g || p || y)) {
     (s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
      snapItem: s.snapElements[o].item
     })))
    };
    s.snapElements[o].snapping = (u || d || g || p || y)
   }
  }
 });
 t.ui.plugin.add("draggable", "stack", {
  start: function() {
   var i, s = this.data("ui-draggable").options,
    e = t.makeArray(t(s.stack)).sort(function(e, i) {
     return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
    });
   if (!e.length) {
    return
   };
   i = parseInt(t(e[0]).css("zIndex"), 10) || 0;
   t(e).each(function(e) {
    t(this).css("zIndex", i + e)
   });
   this.css("zIndex", (i + e.length))
  }
 });
 t.ui.plugin.add("draggable", "zIndex", {
  start: function(e, i) {
   var s = t(i.helper),
    n = t(this).data("ui-draggable").options;
   if (s.css("zIndex")) {
    n._zIndex = s.css("zIndex")
   };
   s.css("zIndex", n.zIndex)
  },
  stop: function(e, i) {
   var s = t(this).data("ui-draggable").options;
   if (s._zIndex) {
    t(i.helper).css("zIndex", s._zIndex)
   }
  }
 })
})(jQuery);
(function(t, e) {
 function i(t, e, i) {
  return (t > e) && (t < (e + i))
 };
 t.widget("ui.droppable", {
  version: "1.10.2",
  widgetEventPrefix: "drop",
  options: {
   accept: "*",
   activeClass: !1,
   addClasses: !0,
   greedy: !1,
   hoverClass: !1,
   scope: "default",
   tolerance: "intersect",
   activate: null,
   deactivate: null,
   drop: null,
   out: null,
   over: null
  },
  _create: function() {
   var e = this.options,
    i = e.accept;
   this.isover = !1;
   this.isout = !0;
   this.accept = t.isFunction(i) ? i : function(t) {
    return t.is(i)
   };
   this.proportions = {
    width: this.element[0].offsetWidth,
    height: this.element[0].offsetHeight
   };
   t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [];
   t.ui.ddmanager.droppables[e.scope].push(this);
   (e.addClasses && this.element.addClass("ui-droppable"))
  },
  _destroy: function() {
   var e = 0,
    i = t.ui.ddmanager.droppables[this.options.scope];
   for (; e < i.length; e++) {
    if (i[e] === this) {
     i.splice(e, 1)
    }
   };
   this.element.removeClass("ui-droppable ui-droppable-disabled")
  },
  _setOption: function(e, i) {
   if (e === "accept") {
    this.accept = t.isFunction(i) ? i : function(t) {
     return t.is(i)
    }
   };
   t.Widget.prototype._setOption.apply(this, arguments)
  },
  _activate: function(e) {
   var i = t.ui.ddmanager.current;
   if (this.options.activeClass) {
    this.element.addClass(this.options.activeClass)
   };
   if (i) {
    this._trigger("activate", e, this.ui(i))
   }
  },
  _deactivate: function(e) {
   var i = t.ui.ddmanager.current;
   if (this.options.activeClass) {
    this.element.removeClass(this.options.activeClass)
   };
   if (i) {
    this._trigger("deactivate", e, this.ui(i))
   }
  },
  _over: function(e) {
   var i = t.ui.ddmanager.current;
   if (!i || (i.currentItem || i.element)[0] === this.element[0]) {
    return
   };
   if (this.accept.call(this.element[0], (i.currentItem || i.element))) {
    if (this.options.hoverClass) {
     this.element.addClass(this.options.hoverClass)
    };
    this._trigger("over", e, this.ui(i))
   }
  },
  _out: function(e) {
   var i = t.ui.ddmanager.current;
   if (!i || (i.currentItem || i.element)[0] === this.element[0]) {
    return
   };
   if (this.accept.call(this.element[0], (i.currentItem || i.element))) {
    if (this.options.hoverClass) {
     this.element.removeClass(this.options.hoverClass)
    };
    this._trigger("out", e, this.ui(i))
   }
  },
  _drop: function(e, i) {
   var s = i || t.ui.ddmanager.current,
    n = !1;
   if (!s || (s.currentItem || s.element)[0] === this.element[0]) {
    return !1
   };
   this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
    var e = t.data(this, "ui-droppable");
    if (e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], (s.currentItem || s.element)) && t.ui.intersect(s, t.extend(e, {
      offset: e.element.offset()
     }), e.options.tolerance)) {
     n = !0;
     return !1
    }
   });
   if (n) {
    return !1
   };
   if (this.accept.call(this.element[0], (s.currentItem || s.element))) {
    if (this.options.activeClass) {
     this.element.removeClass(this.options.activeClass)
    };
    if (this.options.hoverClass) {
     this.element.removeClass(this.options.hoverClass)
    };
    this._trigger("drop", e, this.ui(s));
    return this.element
   };
   return !1
  },
  ui: function(t) {
   return {
    draggable: (t.currentItem || t.element),
    helper: t.helper,
    position: t.position,
    offset: t.positionAbs
   }
  }
 });
 t.ui.intersect = function(t, e, s) {
  if (!e.offset) {
   return !1
  };
  var f, d, r = (t.positionAbs || t.position.absolute).left,
   u = r + t.helperProportions.width,
   a = (t.positionAbs || t.position.absolute).top,
   c = a + t.helperProportions.height,
   n = e.offset.left,
   l = n + e.proportions.width,
   o = e.offset.top,
   h = o + e.proportions.height;
  switch (s) {
   case "fit":
    return (n <= r && u <= l && o <= a && c <= h);
   case "intersect":
    return (n < r + (t.helperProportions.width / 2) && u - (t.helperProportions.width / 2) < l && o < a + (t.helperProportions.height / 2) && c - (t.helperProportions.height / 2) < h);
   case "pointer":
    f = ((t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left);
    d = ((t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top);
    return i(d, o, e.proportions.height) && i(f, n, e.proportions.width);
   case "touch":
    return ((a >= o && a <= h) || (c >= o && c <= h) || (a < o && c > h)) && ((r >= n && r <= l) || (u >= n && u <= l) || (r < n && u > l));
   default:
    return !1
  }
 };
 t.ui.ddmanager = {
  current: null,
  droppables: {
   "default": []
  },
  prepareOffsets: function(e, i) {
   var s, o, n = t.ui.ddmanager.droppables[e.options.scope] || [],
    r = i ? i.type : null,
    a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
   droppablesLoop: for (s = 0; s < n.length; s++) {
    if (n[s].options.disabled || (e && !n[s].accept.call(n[s].element[0], (e.currentItem || e.element)))) {
     continue
    };
    for (o = 0; o < a.length; o++) {
     if (a[o] === n[s].element[0]) {
      n[s].proportions.height = 0;
      continue;
      droppablesLoop
     }
    };
    n[s].visible = n[s].element.css("display") !== "none";
    if (!n[s].visible) {
     continue
    };
    if (r === "mousedown") {
     n[s]._activate.call(n[s], i)
    };
    n[s].offset = n[s].element.offset();
    n[s].proportions = {
     width: n[s].element[0].offsetWidth,
     height: n[s].element[0].offsetHeight
    }
   }
  },
  drop: function(e, i) {
   var s = !1;
   t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
    if (!this.options) {
     return
    };
    if (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance)) {
     s = this._drop.call(this, i) || s
    };
    if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (e.currentItem || e.element))) {
     this.isout = !0;
     this.isover = !1;
     this._deactivate.call(this, i)
    }
   });
   return s
  },
  dragStart: function(e, i) {
   e.element.parentsUntil("body").bind("scroll.droppable", function() {
    if (!e.options.refreshPositions) {
     t.ui.ddmanager.prepareOffsets(e, i)
    }
   })
  },
  drag: function(e, i) {
   if (e.options.refreshPositions) {
    t.ui.ddmanager.prepareOffsets(e, i)
   };
   t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
    if (this.options.disabled || this.greedyChild || !this.visible) {
     return
    };
    var s, a, o, r = t.ui.intersect(e, this, this.options.tolerance),
     n = !r && this.isover ? "isout" : (r && !this.isover ? "isover" : null);
    if (!n) {
     return
    };
    if (this.options.greedy) {
     a = this.options.scope;
     o = this.element.parents(":data(ui-droppable)").filter(function() {
      return t.data(this, "ui-droppable").options.scope === a
     });
     if (o.length) {
      s = t.data(o[0], "ui-droppable");
      s.greedyChild = (n === "isover")
     }
    };
    if (s && n === "isover") {
     s.isover = !1;
     s.isout = !0;
     s._out.call(s, i)
    };
    this[n] = !0;
    this[n === "isout" ? "isover" : "isout"] = !1;
    this[n === "isover" ? "_over" : "_out"].call(this, i);
    if (s && n === "isout") {
     s.isout = !1;
     s.isover = !0;
     s._over.call(s, i)
    }
   })
  },
  dragStop: function(e, i) {
   e.element.parentsUntil("body").unbind("scroll.droppable");
   if (!e.options.refreshPositions) {
    t.ui.ddmanager.prepareOffsets(e, i)
   }
  }
 }
})(jQuery);
(function(t, e) {
 function s(t) {
  return parseInt(t, 10) || 0
 };

 function i(t) {
  return !isNaN(parseInt(t, 10))
 };
 t.widget("ui.resizable", t.ui.mouse, {
  version: "1.10.2",
  widgetEventPrefix: "resize",
  options: {
   alsoResize: !1,
   animate: !1,
   animateDuration: "slow",
   animateEasing: "swing",
   aspectRatio: !1,
   autoHide: !1,
   containment: !1,
   ghost: !1,
   grid: !1,
   handles: "e,s,se",
   helper: !1,
   maxHeight: null,
   maxWidth: null,
   minHeight: 10,
   minWidth: 10,
   zIndex: 90,
   resize: null,
   start: null,
   stop: null
  },
  _create: function() {
   var a, o, n, i, r, s = this,
    e = this.options;
   this.element.addClass("ui-resizable");
   t.extend(this, {
    _aspectRatio: !!(e.aspectRatio),
    aspectRatio: e.aspectRatio,
    originalElement: this.element,
    _proportionallyResizeElements: [],
    _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
   });
   if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
    this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
     position: this.element.css("position"),
     width: this.element.outerWidth(),
     height: this.element.outerHeight(),
     top: this.element.css("top"),
     left: this.element.css("left")
    }));
    this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
    this.elementIsWrapper = !0;
    this.element.css({
     marginLeft: this.originalElement.css("marginLeft"),
     marginTop: this.originalElement.css("marginTop"),
     marginRight: this.originalElement.css("marginRight"),
     marginBottom: this.originalElement.css("marginBottom")
    });
    this.originalElement.css({
     marginLeft: 0,
     marginTop: 0,
     marginRight: 0,
     marginBottom: 0
    });
    this.originalResizeStyle = this.originalElement.css("resize");
    this.originalElement.css("resize", "none");
    this._proportionallyResizeElements.push(this.originalElement.css({
     position: "static",
     zoom: 1,
     display: "block"
    }));
    this.originalElement.css({
     margin: this.originalElement.css("margin")
    });
    this._proportionallyResize()
   };
   this.handles = e.handles || (!t(".ui-resizable-handle", this.element).length ? "e,s,se" : {
    n: ".ui-resizable-n",
    e: ".ui-resizable-e",
    s: ".ui-resizable-s",
    w: ".ui-resizable-w",
    se: ".ui-resizable-se",
    sw: ".ui-resizable-sw",
    ne: ".ui-resizable-ne",
    nw: ".ui-resizable-nw"
   });
   if (this.handles.constructor === String) {
    if (this.handles === "all") {
     this.handles = "n,e,s,w,se,sw,ne,nw"
    };
    a = this.handles.split(",");
    this.handles = {};
    for (o = 0; o < a.length; o++) {
     n = t.trim(a[o]);
     r = "ui-resizable-" + n;
     i = t("<div class='ui-resizable-handle " + r + "'></div>");
     i.css({
      zIndex: e.zIndex
     });
     if ("se" === n) {
      i.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
     };
     this.handles[n] = ".ui-resizable-" + n;
     this.element.append(i)
    }
   };
   this._renderAxis = function(e) {
    var i, s, o, n;
    e = e || this.element;
    for (i in this.handles) {
     if (this.handles[i].constructor === String) {
      this.handles[i] = t(this.handles[i], this.element).show()
     };
     if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
      s = t(this.handles[i], this.element);
      n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth();
      o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
      e.css(o, n);
      this._proportionallyResize()
     };
     if (!t(this.handles[i]).length) {
      continue
     }
    }
   };
   this._renderAxis(this.element);
   this._handles = t(".ui-resizable-handle", this.element).disableSelection();
   this._handles.mouseover(function() {
    if (!s.resizing) {
     if (this.className) {
      i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
     };
     s.axis = i && i[1] ? i[1] : "se"
    }
   });
   if (e.autoHide) {
    this._handles.hide();
    t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
     if (e.disabled) {
      return
     };
     t(this).removeClass("ui-resizable-autohide");
     s._handles.show()
    }).mouseleave(function() {
     if (e.disabled) {
      return
     };
     if (!s.resizing) {
      t(this).addClass("ui-resizable-autohide");
      s._handles.hide()
     }
    })
   };
   this._mouseInit()
  },
  _destroy: function() {
   this._mouseDestroy();
   var e, i = function(e) {
    t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
   };
   if (this.elementIsWrapper) {
    i(this.element);
    e = this.element;
    this.originalElement.css({
     position: e.css("position"),
     width: e.outerWidth(),
     height: e.outerHeight(),
     top: e.css("top"),
     left: e.css("left")
    }).insertAfter(e);
    e.remove()
   };
   this.originalElement.css("resize", this.originalResizeStyle);
   i(this.originalElement);
   return this
  },
  _mouseCapture: function(e) {
   var n, i, s = !1;
   for (n in this.handles) {
    i = t(this.handles[n])[0];
    if (i === e.target || t.contains(i, e.target)) {
     s = !0
    }
   };
   return !this.options.disabled && s
  },
  _mouseStart: function(e) {
   var a, o, r, n = this.options,
    l = this.element.position(),
    i = this.element;
   this.resizing = !0;
   if ((/absolute/).test(i.css("position"))) {
    i.css({
     position: "absolute",
     top: i.css("top"),
     left: i.css("left")
    })
   } else if (i.is(".ui-draggable")) {
    i.css({
     position: "absolute",
     top: l.top,
     left: l.left
    })
   };
   this._renderProxy();
   a = s(this.helper.css("left"));
   o = s(this.helper.css("top"));
   if (n.containment) {
    a += t(n.containment).scrollLeft() || 0;
    o += t(n.containment).scrollTop() || 0
   };
   this.offset = this.helper.offset();
   this.position = {
    left: a,
    top: o
   };
   this.size = this._helper ? {
    width: i.outerWidth(),
    height: i.outerHeight()
   } : {
    width: i.width(),
    height: i.height()
   };
   this.originalSize = this._helper ? {
    width: i.outerWidth(),
    height: i.outerHeight()
   } : {
    width: i.width(),
    height: i.height()
   };
   this.originalPosition = {
    left: a,
    top: o
   };
   this.sizeDiff = {
    width: i.outerWidth() - i.width(),
    height: i.outerHeight() - i.height()
   };
   this.originalMousePosition = {
    left: e.pageX,
    top: e.pageY
   };
   this.aspectRatio = (typeof n.aspectRatio === "number") ? n.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
   r = t(".ui-resizable-" + this.axis).css("cursor");
   t("body").css("cursor", r === "auto" ? this.axis + "-resize" : r);
   i.addClass("ui-resizable-resizing");
   this._propagate("start", e);
   return !0
  },
  _mouseDrag: function(e) {
   var s, u = this.helper,
    i = {},
    o = this.originalMousePosition,
    c = this.axis,
    h = this.position.top,
    f = this.position.left,
    d = this.size.width,
    r = this.size.height,
    a = (e.pageX - o.left) || 0,
    l = (e.pageY - o.top) || 0,
    n = this._change[c];
   if (!n) {
    return !1
   };
   s = n.apply(this, [e, a, l]);
   this._updateVirtualBoundaries(e.shiftKey);
   if (this._aspectRatio || e.shiftKey) {
    s = this._updateRatio(s, e)
   };
   s = this._respectSize(s, e);
   this._updateCache(s);
   this._propagate("resize", e);
   if (this.position.top !== h) {
    i.top = this.position.top + "px"
   };
   if (this.position.left !== f) {
    i.left = this.position.left + "px"
   };
   if (this.size.width !== d) {
    i.width = this.size.width + "px"
   };
   if (this.size.height !== r) {
    i.height = this.size.height + "px"
   };
   u.css(i);
   if (!this._helper && this._proportionallyResizeElements.length) {
    this._proportionallyResize()
   };
   if (!t.isEmptyObject(i)) {
    this._trigger("resize", e, this.ui())
   };
   return !1
  },
  _mouseStop: function(e) {
   this.resizing = !1;
   var s, n, l, r, h, u, a, o = this.options,
    i = this;
   if (this._helper) {
    s = this._proportionallyResizeElements;
    n = s.length && (/textarea/i).test(s[0].nodeName);
    l = n && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height;
    r = n ? 0 : i.sizeDiff.width;
    h = {
     width: (i.helper.width() - r),
     height: (i.helper.height() - l)
    };
    u = (parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left)) || null;
    a = (parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top)) || null;
    if (!o.animate) {
     this.element.css(t.extend(h, {
      top: a,
      left: u
     }))
    };
    i.helper.height(i.size.height);
    i.helper.width(i.size.width);
    if (this._helper && !o.animate) {
     this._proportionallyResize()
    }
   };
   t("body").css("cursor", "auto");
   this.element.removeClass("ui-resizable-resizing");
   this._propagate("stop", e);
   if (this._helper) {
    this.helper.remove()
   };
   return !1
  },
  _updateVirtualBoundaries: function(t) {
   var a, r, o, n, e, s = this.options;
   e = {
    minWidth: i(s.minWidth) ? s.minWidth : 0,
    maxWidth: i(s.maxWidth) ? s.maxWidth : Infinity,
    minHeight: i(s.minHeight) ? s.minHeight : 0,
    maxHeight: i(s.maxHeight) ? s.maxHeight : Infinity
   };
   if (this._aspectRatio || t) {
    a = e.minHeight * this.aspectRatio;
    o = e.minWidth / this.aspectRatio;
    r = e.maxHeight * this.aspectRatio;
    n = e.maxWidth / this.aspectRatio;
    if (a > e.minWidth) {
     e.minWidth = a
    };
    if (o > e.minHeight) {
     e.minHeight = o
    };
    if (r < e.maxWidth) {
     e.maxWidth = r
    };
    if (n < e.maxHeight) {
     e.maxHeight = n
    }
   };
   this._vBoundaries = e
  },
  _updateCache: function(t) {
   this.offset = this.helper.offset();
   if (i(t.left)) {
    this.position.left = t.left
   };
   if (i(t.top)) {
    this.position.top = t.top
   };
   if (i(t.height)) {
    this.size.height = t.height
   };
   if (i(t.width)) {
    this.size.width = t.width
   }
  },
  _updateRatio: function(t) {
   var s = this.position,
    e = this.size,
    n = this.axis;
   if (i(t.height)) {
    t.width = (t.height * this.aspectRatio)
   } else if (i(t.width)) {
    t.height = (t.width / this.aspectRatio)
   };
   if (n === "sw") {
    t.left = s.left + (e.width - t.width);
    t.top = null
   };
   if (n === "nw") {
    t.top = s.top + (e.height - t.height);
    t.left = s.left + (e.width - t.width)
   };
   return t
  },
  _respectSize: function(t) {
   var e = this._vBoundaries,
    l = this.axis,
    h = i(t.width) && e.maxWidth && (e.maxWidth < t.width),
    u = i(t.height) && e.maxHeight && (e.maxHeight < t.height),
    r = i(t.width) && e.minWidth && (e.minWidth > t.width),
    c = i(t.height) && e.minHeight && (e.minHeight > t.height),
    o = this.originalPosition.left + this.originalSize.width,
    s = this.position.top + this.size.height,
    a = /sw|nw|w/.test(l),
    n = /nw|ne|n/.test(l);
   if (r) {
    t.width = e.minWidth
   };
   if (c) {
    t.height = e.minHeight
   };
   if (h) {
    t.width = e.maxWidth
   };
   if (u) {
    t.height = e.maxHeight
   };
   if (r && a) {
    t.left = o - e.minWidth
   };
   if (h && a) {
    t.left = o - e.maxWidth
   };
   if (c && n) {
    t.top = s - e.minHeight
   };
   if (u && n) {
    t.top = s - e.maxHeight
   };
   if (!t.width && !t.height && !t.left && t.top) {
    t.top = null
   } else if (!t.width && !t.height && !t.top && t.left) {
    t.left = null
   };
   return t
  },
  _proportionallyResize: function() {
   if (!this._proportionallyResizeElements.length) {
    return
   };
   var i, e, s, o, t, n = this.helper || this.element;
   for (i = 0; i < this._proportionallyResizeElements.length; i++) {
    t = this._proportionallyResizeElements[i];
    if (!this.borderDif) {
     this.borderDif = [];
     s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")];
     o = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")];
     for (e = 0; e < s.length; e++) {
      this.borderDif[e] = (parseInt(s[e], 10) || 0) + (parseInt(o[e], 10) || 0)
     }
    };
    t.css({
     height: (n.height() - this.borderDif[0] - this.borderDif[2]) || 0,
     width: (n.width() - this.borderDif[1] - this.borderDif[3]) || 0
    })
   }
  },
  _renderProxy: function() {
   var i = this.element,
    e = this.options;
   this.elementOffset = i.offset();
   if (this._helper) {
    this.helper = this.helper || t("<div style='overflow:hidden;'></div>");
    this.helper.addClass(this._helper).css({
     width: this.element.outerWidth() - 1,
     height: this.element.outerHeight() - 1,
     position: "absolute",
     left: this.elementOffset.left + "px",
     top: this.elementOffset.top + "px",
     zIndex: ++e.zIndex
    });
    this.helper.appendTo("body").disableSelection()
   } else {
    this.helper = this.element
   }
  },
  _change: {
   e: function(t, e) {
    return {
     width: this.originalSize.width + e
    }
   },
   w: function(t, e) {
    var s = this.originalSize,
     i = this.originalPosition;
    return {
     left: i.left + e,
     width: s.width - e
    }
   },
   n: function(t, e, i) {
    var n = this.originalSize,
     s = this.originalPosition;
    return {
     top: s.top + i,
     height: n.height - i
    }
   },
   s: function(t, e, i) {
    return {
     height: this.originalSize.height + i
    }
   },
   se: function(e, i, s) {
    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
   },
   sw: function(e, i, s) {
    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
   },
   ne: function(e, i, s) {
    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
   },
   nw: function(e, i, s) {
    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
   }
  },
  _propagate: function(e, i) {
   t.ui.plugin.call(this, e, [i, this.ui()]);
   (e !== "resize" && this._trigger(e, i, this.ui()))
  },
  plugins: {},
  ui: function() {
   return {
    originalElement: this.originalElement,
    element: this.element,
    helper: this.helper,
    position: this.position,
    size: this.size,
    originalSize: this.originalSize,
    originalPosition: this.originalPosition
   }
  }
 });
 t.ui.plugin.add("resizable", "animate", {
  stop: function(e) {
   var i = t(this).data("ui-resizable"),
    r = i.options,
    s = i._proportionallyResizeElements,
    a = s.length && (/textarea/i).test(s[0].nodeName),
    l = a && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
    u = a ? 0 : i.sizeDiff.width,
    h = {
     width: (i.size.width - u),
     height: (i.size.height - l)
    },
    o = (parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left)) || null,
    n = (parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top)) || null;
   i.element.animate(t.extend(h, n && o ? {
    top: n,
    left: o
   } : {}), {
    duration: r.animateDuration,
    easing: r.animateEasing,
    step: function() {
     var n = {
      width: parseInt(i.element.css("width"), 10),
      height: parseInt(i.element.css("height"), 10),
      top: parseInt(i.element.css("top"), 10),
      left: parseInt(i.element.css("left"), 10)
     };
     if (s && s.length) {
      t(s[0]).css({
       width: n.width,
       height: n.height
      })
     };
     i._updateCache(n);
     i._propagate("resize", e)
    }
   })
  }
 });
 t.ui.plugin.add("resizable", "containment", {
  start: function() {
   var o, a, r, u, c, l, h, e = t(this).data("ui-resizable"),
    d = e.options,
    f = e.element,
    n = d.containment,
    i = (n instanceof t) ? n.get(0) : (/parent/.test(n)) ? f.parent().get(0) : n;
   if (!i) {
    return
   };
   e.containerElement = t(i);
   if (/document/.test(n) || n === document) {
    e.containerOffset = {
     left: 0,
     top: 0
    };
    e.containerPosition = {
     left: 0,
     top: 0
    };
    e.parentData = {
     element: t(document),
     left: 0,
     top: 0,
     width: t(document).width(),
     height: t(document).height() || document.body.parentNode.scrollHeight
    }
   } else {
    o = t(i);
    a = [];
    t(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
     a[t] = s(o.css("padding" + e))
    });
    e.containerOffset = o.offset();
    e.containerPosition = o.position();
    e.containerSize = {
     height: (o.innerHeight() - a[3]),
     width: (o.innerWidth() - a[1])
    };
    r = e.containerOffset;
    u = e.containerSize.height;
    c = e.containerSize.width;
    l = (t.ui.hasScroll(i, "left") ? i.scrollWidth : c);
    h = (t.ui.hasScroll(i) ? i.scrollHeight : u);
    e.parentData = {
     element: i,
     left: r.left,
     top: r.top,
     width: l,
     height: h
    }
   }
  },
  resize: function(e) {
   var o, r, l, h, i = t(this).data("ui-resizable"),
    f = i.options,
    s = i.containerOffset,
    u = i.position,
    a = i._aspectRatio || e.shiftKey,
    n = {
     top: 0,
     left: 0
    },
    c = i.containerElement;
   if (c[0] !== document && (/static/).test(c.css("position"))) {
    n = s
   };
   if (u.left < (i._helper ? s.left : 0)) {
    i.size.width = i.size.width + (i._helper ? (i.position.left - s.left) : (i.position.left - n.left));
    if (a) {
     i.size.height = i.size.width / i.aspectRatio
    };
    i.position.left = f.helper ? s.left : 0
   };
   if (u.top < (i._helper ? s.top : 0)) {
    i.size.height = i.size.height + (i._helper ? (i.position.top - s.top) : i.position.top);
    if (a) {
     i.size.width = i.size.height * i.aspectRatio
    };
    i.position.top = i._helper ? s.top : 0
   };
   i.offset.left = i.parentData.left + i.position.left;
   i.offset.top = i.parentData.top + i.position.top;
   o = Math.abs((i._helper ? i.offset.left - n.left : (i.offset.left - n.left)) + i.sizeDiff.width);
   r = Math.abs((i._helper ? i.offset.top - n.top : (i.offset.top - s.top)) + i.sizeDiff.height);
   l = i.containerElement.get(0) === i.element.parent().get(0);
   h = /relative|absolute/.test(i.containerElement.css("position"));
   if (l && h) {
    o -= i.parentData.left
   };
   if (o + i.size.width >= i.parentData.width) {
    i.size.width = i.parentData.width - o;
    if (a) {
     i.size.height = i.size.width / i.aspectRatio
    }
   };
   if (r + i.size.height >= i.parentData.height) {
    i.size.height = i.parentData.height - r;
    if (a) {
     i.size.width = i.size.height * i.aspectRatio
    }
   }
  },
  stop: function() {
   var e = t(this).data("ui-resizable"),
    r = e.options,
    l = e.containerOffset,
    h = e.containerPosition,
    a = e.containerElement,
    i = t(e.helper),
    s = i.offset(),
    n = i.outerWidth() - e.sizeDiff.width,
    o = i.outerHeight() - e.sizeDiff.height;
   if (e._helper && !r.animate && (/relative/).test(a.css("position"))) {
    t(this).css({
     left: s.left - h.left - l.left,
     width: n,
     height: o
    })
   };
   if (e._helper && !r.animate && (/static/).test(a.css("position"))) {
    t(this).css({
     left: s.left - h.left - l.left,
     width: n,
     height: o
    })
   }
  }
 });
 t.ui.plugin.add("resizable", "alsoResize", {
  start: function() {
   var s = t(this).data("ui-resizable"),
    e = s.options,
    i = function(e) {
     t(e).each(function() {
      var e = t(this);
      e.data("ui-resizable-alsoresize", {
       width: parseInt(e.width(), 10),
       height: parseInt(e.height(), 10),
       left: parseInt(e.css("left"), 10),
       top: parseInt(e.css("top"), 10)
      })
     })
    };
   if (typeof(e.alsoResize) === "object" && !e.alsoResize.parentNode) {
    if (e.alsoResize.length) {
     e.alsoResize = e.alsoResize[0];
     i(e.alsoResize)
    } else {
     t.each(e.alsoResize, function(t) {
      i(t)
     })
    }
   } else {
    i(e.alsoResize)
   }
  },
  resize: function(e, i) {
   var s = t(this).data("ui-resizable"),
    n = s.options,
    r = s.originalSize,
    a = s.originalPosition,
    l = {
     height: (s.size.height - r.height) || 0,
     width: (s.size.width - r.width) || 0,
     top: (s.position.top - a.top) || 0,
     left: (s.position.left - a.left) || 0
    },
    o = function(e, s) {
     t(e).each(function() {
      var n = t(this),
       a = t(this).data("ui-resizable-alsoresize"),
       e = {},
       o = s && s.length ? s : n.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
      t.each(o, function(t, i) {
       var s = (a[i] || 0) + (l[i] || 0);
       if (s && s >= 0) {
        e[i] = s || null
       }
      });
      n.css(e)
     })
    };
   if (typeof(n.alsoResize) === "object" && !n.alsoResize.nodeType) {
    t.each(n.alsoResize, function(t, e) {
     o(t, e)
    })
   } else {
    o(n.alsoResize)
   }
  },
  stop: function() {
   t(this).removeData("resizable-alsoresize")
  }
 });
 t.ui.plugin.add("resizable", "ghost", {
  start: function() {
   var e = t(this).data("ui-resizable"),
    s = e.options,
    i = e.size;
   e.ghost = e.originalElement.clone();
   e.ghost.css({
    opacity: 0.25,
    display: "block",
    position: "relative",
    height: i.height,
    width: i.width,
    margin: 0,
    left: 0,
    top: 0
   }).addClass("ui-resizable-ghost").addClass(typeof s.ghost === "string" ? s.ghost : "");
   e.ghost.appendTo(e.helper)
  },
  resize: function() {
   var e = t(this).data("ui-resizable");
   if (e.ghost) {
    e.ghost.css({
     position: "relative",
     height: e.size.height,
     width: e.size.width
    })
   }
  },
  stop: function() {
   var e = t(this).data("ui-resizable");
   if (e.ghost && e.helper) {
    e.helper.get(0).removeChild(e.ghost.get(0))
   }
  }
 });
 t.ui.plugin.add("resizable", "grid", {
  resize: function() {
   var e = t(this).data("ui-resizable"),
    i = e.options,
    d = e.size,
    l = e.originalSize,
    r = e.originalPosition,
    f = e.axis,
    h = typeof i.grid === "number" ? [i.grid, i.grid] : i.grid,
    o = (h[0] || 1),
    a = (h[1] || 1),
    c = Math.round((d.width - l.width) / o) * o,
    u = Math.round((d.height - l.height) / a) * a,
    s = l.width + c,
    n = l.height + u,
    v = i.maxWidth && (i.maxWidth < s),
    m = i.maxHeight && (i.maxHeight < n),
    g = i.minWidth && (i.minWidth > s),
    p = i.minHeight && (i.minHeight > n);
   i.grid = h;
   if (g) {
    s = s + o
   };
   if (p) {
    n = n + a
   };
   if (v) {
    s = s - o
   };
   if (m) {
    n = n - a
   };
   if (/^(se|s|e)$/.test(f)) {
    e.size.width = s;
    e.size.height = n
   } else if (/^(ne)$/.test(f)) {
    e.size.width = s;
    e.size.height = n;
    e.position.top = r.top - u
   } else if (/^(sw)$/.test(f)) {
    e.size.width = s;
    e.size.height = n;
    e.position.left = r.left - c
   } else {
    e.size.width = s;
    e.size.height = n;
    e.position.top = r.top - u;
    e.position.left = r.left - c
   }
  }
 })
})(jQuery);
(function(t, e) {
 t.widget("ui.selectable", t.ui.mouse, {
  version: "1.10.2",
  options: {
   appendTo: "body",
   autoRefresh: !0,
   distance: 0,
   filter: "*",
   tolerance: "touch",
   selected: null,
   selecting: null,
   start: null,
   stop: null,
   unselected: null,
   unselecting: null
  },
  _create: function() {
   var e, i = this;
   this.element.addClass("ui-selectable");
   this.dragged = !1;
   this.refresh = function() {
    e = t(i.options.filter, i.element[0]);
    e.addClass("ui-selectee");
    e.each(function() {
     var e = t(this),
      i = e.offset();
     t.data(this, "selectable-item", {
      element: this,
      $element: e,
      left: i.left,
      top: i.top,
      right: i.left + e.outerWidth(),
      bottom: i.top + e.outerHeight(),
      startselected: !1,
      selected: e.hasClass("ui-selected"),
      selecting: e.hasClass("ui-selecting"),
      unselecting: e.hasClass("ui-unselecting")
     })
    })
   };
   this.refresh();
   this.selectees = e.addClass("ui-selectee");
   this._mouseInit();
   this.helper = t("<div class='ui-selectable-helper'></div>")
  },
  _destroy: function() {
   this.selectees.removeClass("ui-selectee").removeData("selectable-item");
   this.element.removeClass("ui-selectable ui-selectable-disabled");
   this._mouseDestroy()
  },
  _mouseStart: function(e) {
   var s = this,
    i = this.options;
   this.opos = [e.pageX, e.pageY];
   if (this.options.disabled) {
    return
   };
   this.selectees = t(i.filter, this.element[0]);
   this._trigger("start", e);
   t(i.appendTo).append(this.helper);
   this.helper.css({
    "left": e.pageX,
    "top": e.pageY,
    "width": 0,
    "height": 0
   });
   if (i.autoRefresh) {
    this.refresh()
   };
   this.selectees.filter(".ui-selected").each(function() {
    var i = t.data(this, "selectable-item");
    i.startselected = !0;
    if (!e.metaKey && !e.ctrlKey) {
     i.$element.removeClass("ui-selected");
     i.selected = !1;
     i.$element.addClass("ui-unselecting");
     i.unselecting = !0;
     s._trigger("unselecting", e, {
      unselecting: i.element
     })
    }
   });
   t(e.target).parents().addBack().each(function() {
    var n, i = t.data(this, "selectable-item");
    if (i) {
     n = (!e.metaKey && !e.ctrlKey) || !i.$element.hasClass("ui-selected");
     i.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting");
     i.unselecting = !n;
     i.selecting = n;
     i.selected = n;
     if (n) {
      s._trigger("selecting", e, {
       selecting: i.element
      })
     } else {
      s._trigger("unselecting", e, {
       unselecting: i.element
      })
     };
     return !1
    }
   })
  },
  _mouseDrag: function(e) {
   this.dragged = !0;
   if (this.options.disabled) {
    return
   };
   var r, a = this,
    l = this.options,
    i = this.opos[0],
    s = this.opos[1],
    n = e.pageX,
    o = e.pageY;
   if (i > n) {
    r = n;
    n = i;
    i = r
   };
   if (s > o) {
    r = o;
    o = s;
    s = r
   };
   this.helper.css({
    left: i,
    top: s,
    width: n - i,
    height: o - s
   });
   this.selectees.each(function() {
    var r = t.data(this, "selectable-item"),
     h = !1;
    if (!r || r.element === a.element[0]) {
     return
    };
    if (l.tolerance === "touch") {
     h = (!(r.left > n || r.right < i || r.top > o || r.bottom < s))
    } else if (l.tolerance === "fit") {
     h = (r.left > i && r.right < n && r.top > s && r.bottom < o)
    };
    if (h) {
     if (r.selected) {
      r.$element.removeClass("ui-selected");
      r.selected = !1
     };
     if (r.unselecting) {
      r.$element.removeClass("ui-unselecting");
      r.unselecting = !1
     };
     if (!r.selecting) {
      r.$element.addClass("ui-selecting");
      r.selecting = !0;
      a._trigger("selecting", e, {
       selecting: r.element
      })
     }
    } else {
     if (r.selecting) {
      if ((e.metaKey || e.ctrlKey) && r.startselected) {
       r.$element.removeClass("ui-selecting");
       r.selecting = !1;
       r.$element.addClass("ui-selected");
       r.selected = !0
      } else {
       r.$element.removeClass("ui-selecting");
       r.selecting = !1;
       if (r.startselected) {
        r.$element.addClass("ui-unselecting");
        r.unselecting = !0
       };
       a._trigger("unselecting", e, {
        unselecting: r.element
       })
      }
     };
     if (r.selected) {
      if (!e.metaKey && !e.ctrlKey && !r.startselected) {
       r.$element.removeClass("ui-selected");
       r.selected = !1;
       r.$element.addClass("ui-unselecting");
       r.unselecting = !0;
       a._trigger("unselecting", e, {
        unselecting: r.element
       })
      }
     }
    }
   });
   return !1
  },
  _mouseStop: function(e) {
   var i = this;
   this.dragged = !1;
   t(".ui-unselecting", this.element[0]).each(function() {
    var s = t.data(this, "selectable-item");
    s.$element.removeClass("ui-unselecting");
    s.unselecting = !1;
    s.startselected = !1;
    i._trigger("unselected", e, {
     unselected: s.element
    })
   });
   t(".ui-selecting", this.element[0]).each(function() {
    var s = t.data(this, "selectable-item");
    s.$element.removeClass("ui-selecting").addClass("ui-selected");
    s.selecting = !1;
    s.selected = !0;
    s.startselected = !0;
    i._trigger("selected", e, {
     selected: s.element
    })
   });
   this._trigger("stop", e);
   this.helper.remove();
   return !1
  }
 })
})(jQuery);
(function(t, e) {
 function i(t, e, i) {
  return (t > e) && (t < (e + i))
 };

 function s(t) {
  return (/left|right/).test(t.css("float")) || (/inline|table-cell/).test(t.css("display"))
 };
 t.widget("ui.sortable", t.ui.mouse, {
  version: "1.10.2",
  widgetEventPrefix: "sort",
  ready: !1,
  options: {
   appendTo: "parent",
   axis: !1,
   connectWith: !1,
   containment: !1,
   cursor: "auto",
   cursorAt: !1,
   dropOnEmpty: !0,
   forcePlaceholderSize: !1,
   forceHelperSize: !1,
   grid: !1,
   handle: !1,
   helper: "original",
   items: "> *",
   opacity: !1,
   placeholder: !1,
   revert: !1,
   scroll: !0,
   scrollSensitivity: 20,
   scrollSpeed: 20,
   scope: "default",
   tolerance: "intersect",
   zIndex: 1000,
   activate: null,
   beforeStop: null,
   change: null,
   deactivate: null,
   out: null,
   over: null,
   receive: null,
   remove: null,
   sort: null,
   start: null,
   stop: null,
   update: null
  },
  _create: function() {
   var t = this.options;
   this.containerCache = {};
   this.element.addClass("ui-sortable");
   this.refresh();
   this.floating = this.items.length ? t.axis === "x" || s(this.items[0].item) : !1;
   this.offset = this.element.offset();
   this._mouseInit();
   this.ready = !0
  },
  _destroy: function() {
   this.element.removeClass("ui-sortable ui-sortable-disabled");
   this._mouseDestroy();
   for (var t = this.items.length - 1; t >= 0; t--) {
    this.items[t].item.removeData(this.widgetName + "-item")
   };
   return this
  },
  _setOption: function(e, i) {
   if (e === "disabled") {
    this.options[e] = i;
    this.widget().toggleClass("ui-sortable-disabled", !!i)
   } else {
    t.Widget.prototype._setOption.apply(this, arguments)
   }
  },
  _mouseCapture: function(e, i) {
   var s = null,
    o = !1,
    n = this;
   if (this.reverting) {
    return !1
   };
   if (this.options.disabled || this.options.type === "static") {
    return !1
   };
   this._refreshItems(e);
   t(e.target).parents().each(function() {
    if (t.data(this, n.widgetName + "-item") === n) {
     s = t(this);
     return !1
    }
   });
   if (t.data(e.target, n.widgetName + "-item") === n) {
    s = t(e.target)
   };
   if (!s) {
    return !1
   };
   if (this.options.handle && !i) {
    t(this.options.handle, s).find("*").addBack().each(function() {
     if (this === e.target) {
      o = !0
     }
    });
    if (!o) {
     return !1
    }
   };
   this.currentItem = s;
   this._removeCurrentsFromItems();
   return !0
  },
  _mouseStart: function(e, i, s) {
   var a, o, n = this.options;
   this.currentContainer = this;
   this.refreshPositions();
   this.helper = this._createHelper(e);
   this._cacheHelperProportions();
   this._cacheMargins();
   this.scrollParent = this.helper.scrollParent();
   this.offset = this.currentItem.offset();
   this.offset = {
    top: this.offset.top - this.margins.top,
    left: this.offset.left - this.margins.left
   };
   t.extend(this.offset, {
    click: {
     left: e.pageX - this.offset.left,
     top: e.pageY - this.offset.top
    },
    parent: this._getParentOffset(),
    relative: this._getRelativeOffset()
   });
   this.helper.css("position", "absolute");
   this.cssPosition = this.helper.css("position");
   this.originalPosition = this._generatePosition(e);
   this.originalPageX = e.pageX;
   this.originalPageY = e.pageY;
   (n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt));
   this.domPosition = {
    prev: this.currentItem.prev()[0],
    parent: this.currentItem.parent()[0]
   };
   if (this.helper[0] !== this.currentItem[0]) {
    this.currentItem.hide()
   };
   this._createPlaceholder();
   if (n.containment) {
    this._setContainment()
   };
   if (n.cursor && n.cursor !== "auto") {
    o = this.document.find("body");
    this.storedCursor = o.css("cursor");
    o.css("cursor", n.cursor);
    this.storedStylesheet = t("<style>*{ cursor: " + n.cursor + " !important; }</style>").appendTo(o)
   };
   if (n.opacity) {
    if (this.helper.css("opacity")) {
     this._storedOpacity = this.helper.css("opacity")
    };
    this.helper.css("opacity", n.opacity)
   };
   if (n.zIndex) {
    if (this.helper.css("zIndex")) {
     this._storedZIndex = this.helper.css("zIndex")
    };
    this.helper.css("zIndex", n.zIndex)
   };
   if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
    this.overflowOffset = this.scrollParent.offset()
   };
   this._trigger("start", e, this._uiHash());
   if (!this._preserveHelperProportions) {
    this._cacheHelperProportions()
   };
   if (!s) {
    for (a = this.containers.length - 1; a >= 0; a--) {
     this.containers[a]._trigger("activate", e, this._uiHash(this))
    }
   };
   if (t.ui.ddmanager) {
    t.ui.ddmanager.current = this
   };
   if (t.ui.ddmanager && !n.dropBehaviour) {
    t.ui.ddmanager.prepareOffsets(this, e)
   };
   this.dragging = !0;
   this.helper.addClass("ui-sortable-helper");
   this._mouseDrag(e);
   return !0
  },
  _mouseDrag: function(e) {
   var a, n, o, r, i = this.options,
    s = !1;
   this.position = this._generatePosition(e);
   this.positionAbs = this._convertPositionTo("absolute");
   if (!this.lastPositionAbs) {
    this.lastPositionAbs = this.positionAbs
   };
   if (this.options.scroll) {
    if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
     if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - e.pageY < i.scrollSensitivity) {
      this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed
     } else if (e.pageY - this.overflowOffset.top < i.scrollSensitivity) {
      this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed
     };
     if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - e.pageX < i.scrollSensitivity) {
      this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed
     } else if (e.pageX - this.overflowOffset.left < i.scrollSensitivity) {
      this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed
     }
    } else {
     if (e.pageY - t(document).scrollTop() < i.scrollSensitivity) {
      s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed)
     } else if (t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity) {
      s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)
     };
     if (e.pageX - t(document).scrollLeft() < i.scrollSensitivity) {
      s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed)
     } else if (t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity) {
      s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed)
     }
    };
    if (s !== !1 && t.ui.ddmanager && !i.dropBehaviour) {
     t.ui.ddmanager.prepareOffsets(this, e)
    }
   };
   this.positionAbs = this._convertPositionTo("absolute");
   if (!this.options.axis || this.options.axis !== "y") {
    this.helper[0].style.left = this.position.left + "px"
   };
   if (!this.options.axis || this.options.axis !== "x") {
    this.helper[0].style.top = this.position.top + "px"
   };
   for (a = this.items.length - 1; a >= 0; a--) {
    n = this.items[a];
    o = n.item[0];
    r = this._intersectsWithPointer(n);
    if (!r) {
     continue
    };
    if (n.instance !== this.currentContainer) {
     continue
    };
    if (o !== this.currentItem[0] && this.placeholder[r === 1 ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && (this.options.type === "semi-dynamic" ? !t.contains(this.element[0], o) : !0)) {
     this.direction = r === 1 ? "down" : "up";
     if (this.options.tolerance === "pointer" || this._intersectsWithSides(n)) {
      this._rearrange(e, n)
     } else {
      break
     };
     this._trigger("change", e, this._uiHash());
     break
    }
   };
   this._contactContainers(e);
   if (t.ui.ddmanager) {
    t.ui.ddmanager.drag(this, e)
   };
   this._trigger("sort", e, this._uiHash());
   this.lastPositionAbs = this.positionAbs;
   return !1
  },
  _mouseStop: function(e, i) {
   if (!e) {
    return
   };
   if (t.ui.ddmanager && !this.options.dropBehaviour) {
    t.ui.ddmanager.drop(this, e)
   };
   if (this.options.revert) {
    var a = this,
     o = this.placeholder.offset(),
     s = this.options.axis,
     n = {};
    if (!s || s === "x") {
     n.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
    };
    if (!s || s === "y") {
     n.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
    };
    this.reverting = !0;
    t(this.helper).animate(n, parseInt(this.options.revert, 10) || 500, function() {
     a._clear(e)
    })
   } else {
    this._clear(e, i)
   };
   return !1
  },
  cancel: function() {
   if (this.dragging) {
    this._mouseUp({
     target: null
    });
    if (this.options.helper === "original") {
     this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
    } else {
     this.currentItem.show()
    };
    for (var e = this.containers.length - 1; e >= 0; e--) {
     this.containers[e]._trigger("deactivate", null, this._uiHash(this));
     if (this.containers[e].containerCache.over) {
      this.containers[e]._trigger("out", null, this._uiHash(this));
      this.containers[e].containerCache.over = 0
     }
    }
   };
   if (this.placeholder) {
    if (this.placeholder[0].parentNode) {
     this.placeholder[0].parentNode.removeChild(this.placeholder[0])
    };
    if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
     this.helper.remove()
    };
    t.extend(this, {
     helper: null,
     dragging: !1,
     reverting: !1,
     _noFinalSort: null
    });
    if (this.domPosition.prev) {
     t(this.domPosition.prev).after(this.currentItem)
    } else {
     t(this.domPosition.parent).prepend(this.currentItem)
    }
   };
   return this
  },
  serialize: function(e) {
   var s = this._getItemsAsjQuery(e && e.connected),
    i = [];
   e = e || {};
   t(s).each(function() {
    var s = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || (/(.+)[\-=_](.+)/));
    if (s) {
     i.push((e.key || s[1] + "[]") + "=" + (e.key && e.expression ? s[1] : s[2]))
    }
   });
   if (!i.length && e.key) {
    i.push(e.key + "=")
   };
   return i.join("&")
  },
  toArray: function(e) {
   var s = this._getItemsAsjQuery(e && e.connected),
    i = [];
   e = e || {};
   s.each(function() {
    i.push(t(e.item || this).attr(e.attribute || "id") || "")
   });
   return i
  },
  _intersectsWith: function(t) {
   var i = this.positionAbs.left,
    u = i + this.helperProportions.width,
    e = this.positionAbs.top,
    c = e + this.helperProportions.height,
    n = t.left,
    l = n + t.width,
    s = t.top,
    r = s + t.height,
    a = this.offset.click.top,
    o = this.offset.click.left,
    h = (e + a) > s && (e + a) < r && (i + o) > n && (i + o) < l;
   if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"])) {
    return h
   } else {
    return (n < i + (this.helperProportions.width / 2) && u - (this.helperProportions.width / 2) < l && s < e + (this.helperProportions.height / 2) && c - (this.helperProportions.height / 2) < r)
   }
  },
  _intersectsWithPointer: function(t) {
   var o = (this.options.axis === "x") || i(this.positionAbs.top + this.offset.click.top, t.top, t.height),
    n = (this.options.axis === "y") || i(this.positionAbs.left + this.offset.click.left, t.left, t.width),
    a = o && n,
    e = this._getDragVerticalDirection(),
    s = this._getDragHorizontalDirection();
   if (!a) {
    return !1
   };
   return this.floating ? (((s && s === "right") || e === "down") ? 2 : 1) : (e && (e === "down" ? 2 : 1))
  },
  _intersectsWithSides: function(t) {
   var o = i(this.positionAbs.top + this.offset.click.top, t.top + (t.height / 2), t.height),
    n = i(this.positionAbs.left + this.offset.click.left, t.left + (t.width / 2), t.width),
    s = this._getDragVerticalDirection(),
    e = this._getDragHorizontalDirection();
   if (this.floating && e) {
    return ((e === "right" && n) || (e === "left" && !n))
   } else {
    return s && ((s === "down" && o) || (s === "up" && !o))
   }
  },
  _getDragVerticalDirection: function() {
   var t = this.positionAbs.top - this.lastPositionAbs.top;
   return t !== 0 && (t > 0 ? "down" : "up")
  },
  _getDragHorizontalDirection: function() {
   var t = this.positionAbs.left - this.lastPositionAbs.left;
   return t !== 0 && (t > 0 ? "right" : "left")
  },
  refresh: function(t) {
   this._refreshItems(t);
   this.refreshPositions();
   return this
  },
  _connectWith: function() {
   var t = this.options;
   return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
  },
  _getItemsAsjQuery: function(e) {
   var s, n, r, i, l = [],
    o = [],
    a = this._connectWith();
   if (a && e) {
    for (s = a.length - 1; s >= 0; s--) {
     r = t(a[s]);
     for (n = r.length - 1; n >= 0; n--) {
      i = t.data(r[n], this.widgetFullName);
      if (i && i !== this && !i.options.disabled) {
       o.push([t.isFunction(i.options.items) ? i.options.items.call(i.element) : t(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i])
      }
     }
    }
   };
   o.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
    options: this.options,
    item: this.currentItem
   }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
   for (s = o.length - 1; s >= 0; s--) {
    o[s][0].each(function() {
     l.push(this)
    })
   };
   return t(l)
  },
  _removeCurrentsFromItems: function() {
   var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
   this.items = t.grep(this.items, function(t) {
    for (var i = 0; i < e.length; i++) {
     if (e[i] === t.item[0]) {
      return !1
     }
    };
    return !0
   })
  },
  _refreshItems: function(e) {
   this.items = [];
   this.containers = [this];
   var s, n, h, i, l, u, r, c, f = this.items,
    o = [
     [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
      item: this.currentItem
     }) : t(this.options.items, this.element), this]
    ],
    a = this._connectWith();
   if (a && this.ready) {
    for (s = a.length - 1; s >= 0; s--) {
     h = t(a[s]);
     for (n = h.length - 1; n >= 0; n--) {
      i = t.data(h[n], this.widgetFullName);
      if (i && i !== this && !i.options.disabled) {
       o.push([t.isFunction(i.options.items) ? i.options.items.call(i.element[0], e, {
        item: this.currentItem
       }) : t(i.options.items, i.element), i]);
       this.containers.push(i)
      }
     }
    }
   };
   for (s = o.length - 1; s >= 0; s--) {
    l = o[s][1];
    u = o[s][0];
    for (n = 0, c = u.length; n < c; n++) {
     r = t(u[n]);
     r.data(this.widgetName + "-item", l);
     f.push({
      item: r,
      instance: l,
      width: 0,
      height: 0,
      left: 0,
      top: 0
     })
    }
   }
  },
  refreshPositions: function(e) {
   if (this.offsetParent && this.helper) {
    this.offset.parent = this._getParentOffset()
   };
   var i, s, o, n;
   for (i = this.items.length - 1; i >= 0; i--) {
    s = this.items[i];
    if (s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0]) {
     continue
    };
    o = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
    if (!e) {
     s.width = o.outerWidth();
     s.height = o.outerHeight()
    };
    n = o.offset();
    s.left = n.left;
    s.top = n.top
   };
   if (this.options.custom && this.options.custom.refreshContainers) {
    this.options.custom.refreshContainers.call(this)
   } else {
    for (i = this.containers.length - 1; i >= 0; i--) {
     n = this.containers[i].element.offset();
     this.containers[i].containerCache.left = n.left;
     this.containers[i].containerCache.top = n.top;
     this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
     this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
    }
   };
   return this
  },
  _createPlaceholder: function(e) {
   e = e || this;
   var s, i = e.options;
   if (!i.placeholder || i.placeholder.constructor === String) {
    s = i.placeholder;
    i.placeholder = {
     element: function() {
      var n = e.currentItem[0].nodeName.toLowerCase(),
       i = t(e.document[0].createElement(n)).addClass(s || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
      if (n === "tr") {
       i.append("<td colspan='99'>&#160;</td>")
      } else if (n === "img") {
       i.attr("src", e.currentItem.attr("src"))
      };
      if (!s) {
       i.css("visibility", "hidden")
      };
      return i
     },
     update: function(t, n) {
      if (s && !i.forcePlaceholderSize) {
       return
      };
      if (!n.height()) {
       n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10))
      };
      if (!n.width()) {
       n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))
      }
     }
    }
   };
   e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem));
   e.currentItem.after(e.placeholder);
   i.placeholder.update(e, e.placeholder)
  },
  _contactContainers: function(e) {
   var a, n, p, u, f, d, h, r, g, c, l = null,
    o = null;
   for (a = this.containers.length - 1; a >= 0; a--) {
    if (t.contains(this.currentItem[0], this.containers[a].element[0])) {
     continue
    };
    if (this._intersectsWith(this.containers[a].containerCache)) {
     if (l && t.contains(this.containers[a].element[0], l.element[0])) {
      continue
     };
     l = this.containers[a];
     o = a
    } else {
     if (this.containers[a].containerCache.over) {
      this.containers[a]._trigger("out", e, this._uiHash(this));
      this.containers[a].containerCache.over = 0
     }
    }
   };
   if (!l) {
    return
   };
   if (this.containers.length === 1) {
    if (!this.containers[o].containerCache.over) {
     this.containers[o]._trigger("over", e, this._uiHash(this));
     this.containers[o].containerCache.over = 1
    }
   } else {
    p = 10000;
    u = null;
    c = l.floating || s(this.currentItem);
    f = c ? "left" : "top";
    d = c ? "width" : "height";
    h = this.positionAbs[f] + this.offset.click[f];
    for (n = this.items.length - 1; n >= 0; n--) {
     if (!t.contains(this.containers[o].element[0], this.items[n].item[0])) {
      continue
     };
     if (this.items[n].item[0] === this.currentItem[0]) {
      continue
     };
     if (c && !i(this.positionAbs.top + this.offset.click.top, this.items[n].top, this.items[n].height)) {
      continue
     };
     r = this.items[n].item.offset()[f];
     g = !1;
     if (Math.abs(r - h) > Math.abs(r + this.items[n][d] - h)) {
      g = !0;
      r += this.items[n][d]
     };
     if (Math.abs(r - h) < p) {
      p = Math.abs(r - h);
      u = this.items[n];
      this.direction = g ? "up" : "down"
     }
    };
    if (!u && !this.options.dropOnEmpty) {
     return
    };
    if (this.currentContainer === this.containers[o]) {
     return
    };
    u ? this._rearrange(e, u, null, !0) : this._rearrange(e, null, this.containers[o].element, !0);
    this._trigger("change", e, this._uiHash());
    this.containers[o]._trigger("change", e, this._uiHash(this));
    this.currentContainer = this.containers[o];
    this.options.placeholder.update(this.currentContainer, this.placeholder);
    this.containers[o]._trigger("over", e, this._uiHash(this));
    this.containers[o].containerCache.over = 1
   }
  },
  _createHelper: function(e) {
   var s = this.options,
    i = t.isFunction(s.helper) ? t(s.helper.apply(this.element[0], [e, this.currentItem])) : (s.helper === "clone" ? this.currentItem.clone() : this.currentItem);
   if (!i.parents("body").length) {
    t(s.appendTo !== "parent" ? s.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0])
   };
   if (i[0] === this.currentItem[0]) {
    this._storedCSS = {
     width: this.currentItem[0].style.width,
     height: this.currentItem[0].style.height,
     position: this.currentItem.css("position"),
     top: this.currentItem.css("top"),
     left: this.currentItem.css("left")
    }
   };
   if (!i[0].style.width || s.forceHelperSize) {
    i.width(this.currentItem.width())
   };
   if (!i[0].style.height || s.forceHelperSize) {
    i.height(this.currentItem.height())
   };
   return i
  },
  _adjustOffsetFromHelper: function(e) {
   if (typeof e === "string") {
    e = e.split(" ")
   };
   if (t.isArray(e)) {
    e = {
     left: +e[0],
     top: +e[1] || 0
    }
   };
   if ("left" in e) {
    this.offset.click.left = e.left + this.margins.left
   };
   if ("right" in e) {
    this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
   };
   if ("top" in e) {
    this.offset.click.top = e.top + this.margins.top
   };
   if ("bottom" in e) {
    this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
   }
  },
  _getParentOffset: function() {
   this.offsetParent = this.helper.offsetParent();
   var e = this.offsetParent.offset();
   if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])) {
    e.left += this.scrollParent.scrollLeft();
    e.top += this.scrollParent.scrollTop()
   };
   if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && t.ui.ie)) {
    e = {
     top: 0,
     left: 0
    }
   };
   return {
    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
   }
  },
  _getRelativeOffset: function() {
   if (this.cssPosition === "relative") {
    var t = this.currentItem.position();
    return {
     top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
     left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
    }
   } else {
    return {
     top: 0,
     left: 0
    }
   }
  },
  _cacheMargins: function() {
   this.margins = {
    left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
    top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
   }
  },
  _cacheHelperProportions: function() {
   this.helperProportions = {
    width: this.helper.outerWidth(),
    height: this.helper.outerHeight()
   }
  },
  _setContainment: function() {
   var e, s, n, i = this.options;
   if (i.containment === "parent") {
    i.containment = this.helper[0].parentNode
   };
   if (i.containment === "document" || i.containment === "window") {
    this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
   };
   if (!(/^(document|window|parent)$/).test(i.containment)) {
    e = t(i.containment)[0];
    s = t(i.containment).offset();
    n = (t(e).css("overflow") !== "hidden");
    this.containment = [s.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
   }
  },
  _convertPositionTo: function(e, i) {
   if (!i) {
    i = this.position
   };
   var s = e === "absolute" ? 1 : -1,
    n = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
    o = (/(html|body)/i).test(n[0].tagName);
   return {
    top: (i.top + this.offset.relative.top * s + this.offset.parent.top * s - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (o ? 0 : n.scrollTop())) * s)),
    left: (i.left + this.offset.relative.left * s + this.offset.parent.left * s - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s))
   }
  },
  _generatePosition: function(e) {
   var n, s, i = this.options,
    a = e.pageX,
    o = e.pageY,
    r = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
    l = (/(html|body)/i).test(r[0].tagName);
   if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
    this.offset.relative = this._getRelativeOffset()
   };
   if (this.originalPosition) {
    if (this.containment) {
     if (e.pageX - this.offset.click.left < this.containment[0]) {
      a = this.containment[0] + this.offset.click.left
     };
     if (e.pageY - this.offset.click.top < this.containment[1]) {
      o = this.containment[1] + this.offset.click.top
     };
     if (e.pageX - this.offset.click.left > this.containment[2]) {
      a = this.containment[2] + this.offset.click.left
     };
     if (e.pageY - this.offset.click.top > this.containment[3]) {
      o = this.containment[3] + this.offset.click.top
     }
    };
    if (i.grid) {
     n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1];
     o = this.containment ? ((n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3]) ? n : ((n - this.offset.click.top >= this.containment[1]) ? n - i.grid[1] : n + i.grid[1])) : n;
     s = this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0];
     a = this.containment ? ((s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2]) ? s : ((s - this.offset.click.left >= this.containment[0]) ? s - i.grid[0] : s + i.grid[0])) : s
    }
   };
   return {
    top: (o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (l ? 0 : r.scrollTop())))),
    left: (a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())))
   }
  },
  _rearrange: function(t, e, i, s) {
   i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? e.item[0] : e.item[0].nextSibling));
   this.counter = this.counter ? ++this.counter : 1;
   var n = this.counter;
   this._delay(function() {
    if (n === this.counter) {
     this.refreshPositions(!s)
    }
   })
  },
  _clear: function(t, e) {
   this.reverting = !1;
   var i, s = [];
   if (!this._noFinalSort && this.currentItem.parent().length) {
    this.placeholder.before(this.currentItem)
   };
   this._noFinalSort = null;
   if (this.helper[0] === this.currentItem[0]) {
    for (i in this._storedCSS) {
     if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
      this._storedCSS[i] = ""
     }
    };
    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
   } else {
    this.currentItem.show()
   };
   if (this.fromOutside && !e) {
    s.push(function(t) {
     this._trigger("receive", t, this._uiHash(this.fromOutside))
    })
   };
   if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !e) {
    s.push(function(t) {
     this._trigger("update", t, this._uiHash())
    })
   };
   if (this !== this.currentContainer) {
    if (!e) {
     s.push(function(t) {
      this._trigger("remove", t, this._uiHash())
     });
     s.push((function(t) {
      return function(e) {
       t._trigger("receive", e, this._uiHash(this))
      }
     }).call(this, this.currentContainer));
     s.push((function(t) {
      return function(e) {
       t._trigger("update", e, this._uiHash(this))
      }
     }).call(this, this.currentContainer))
    }
   };
   for (i = this.containers.length - 1; i >= 0; i--) {
    if (!e) {
     s.push((function(t) {
      return function(e) {
       t._trigger("deactivate", e, this._uiHash(this))
      }
     }).call(this, this.containers[i]))
    };
    if (this.containers[i].containerCache.over) {
     s.push((function(t) {
      return function(e) {
       t._trigger("out", e, this._uiHash(this))
      }
     }).call(this, this.containers[i]));
     this.containers[i].containerCache.over = 0
    }
   };
   if (this.storedCursor) {
    this.document.find("body").css("cursor", this.storedCursor);
    this.storedStylesheet.remove()
   };
   if (this._storedOpacity) {
    this.helper.css("opacity", this._storedOpacity)
   };
   if (this._storedZIndex) {
    this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
   };
   this.dragging = !1;
   if (this.cancelHelperRemoval) {
    if (!e) {
     this._trigger("beforeStop", t, this._uiHash());
     for (i = 0; i < s.length; i++) {
      s[i].call(this, t)
     };
     this._trigger("stop", t, this._uiHash())
    };
    this.fromOutside = !1;
    return !1
   };
   if (!e) {
    this._trigger("beforeStop", t, this._uiHash())
   };
   this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
   if (this.helper[0] !== this.currentItem[0]) {
    this.helper.remove()
   };
   this.helper = null;
   if (!e) {
    for (i = 0; i < s.length; i++) {
     s[i].call(this, t)
    };
    this._trigger("stop", t, this._uiHash())
   };
   this.fromOutside = !1;
   return !0
  },
  _trigger: function() {
   if (t.Widget.prototype._trigger.apply(this, arguments) === !1) {
    this.cancel()
   }
  },
  _uiHash: function(e) {
   var i = e || this;
   return {
    helper: i.helper,
    placeholder: i.placeholder || t([]),
    position: i.position,
    originalPosition: i.originalPosition,
    offset: i.positionAbs,
    item: i.currentItem,
    sender: e ? e.element : null
   }
  }
 })
})(jQuery);
(function(t, e) {
 var i = "ui-effects-";
 t.effects = {
  effect: {}
 };
 /*!
  * jQuery Color Animations v2.1.2
  * https://github.com/jquery/jquery-color
  *
  * Copyright 2013 jQuery Foundation and other contributors
  * Released under the MIT license.
  * http://jquery.org/license
  *
  * Date: Wed Jan 16 08:47:09 2013 -0600
  */
 (function(t, e) {
  var f = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
   p = /^([\-+])=\s*(\d+\.?\d*)/,
   d = [{
    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function(t) {
     return [t[1], t[2], t[3], t[4]]
    }
   }, {
    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function(t) {
     return [t[1] * 2.55, t[2] * 2.55, t[3] * 2.55, t[4]]
    }
   }, {
    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
    parse: function(t) {
     return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
    }
   }, {
    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
    parse: function(t) {
     return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
    }
   }, {
    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    space: "hsla",
    parse: function(t) {
     return [t[1], t[2] / 100, t[3] / 100, t[4]]
    }
   }],
   i = t.Color = function(e, i, s, n) {
    return new t.Color.fn.parse(e, i, s, n)
   },
   n = {
    rgba: {
     props: {
      red: {
       idx: 0,
       type: "byte"
      },
      green: {
       idx: 1,
       type: "byte"
      },
      blue: {
       idx: 2,
       type: "byte"
      }
     }
    },
    hsla: {
     props: {
      hue: {
       idx: 0,
       type: "degrees"
      },
      saturation: {
       idx: 1,
       type: "percent"
      },
      lightness: {
       idx: 2,
       type: "percent"
      }
     }
    }
   },
   h = {
    "byte": {
     floor: !0,
     max: 255
    },
    "percent": {
     max: 1
    },
    "degrees": {
     mod: 360,
     floor: !0
    }
   },
   c = i.support = {},
   u = t("<p>")[0],
   a, s = t.each;
  u.style.cssText = "background-color:rgba(1,1,1,.5)";
  c.rgba = u.style.backgroundColor.indexOf("rgba") > -1;
  s(n, function(t, e) {
   e.cache = "_" + t;
   e.props.alpha = {
    idx: 3,
    type: "percent",
    def: 1
   }
  });

  function o(t, e, i) {
   var s = h[e.type] || {};
   if (t == null) {
    return (i || !e.def) ? null : e.def
   };
   t = s.floor ? ~~t : parseFloat(t);
   if (isNaN(t)) {
    return e.def
   };
   if (s.mod) {
    return (t + s.mod) % s.mod
   };
   return 0 > t ? 0 : s.max < t ? s.max : t
  };

  function l(e) {
   var o = i(),
    r = o._rgba = [];
   e = e.toLowerCase();
   s(d, function(t, i) {
    var a, l = i.re.exec(e),
     h = l && i.parse(l),
     s = i.space || "rgba";
    if (h) {
     a = o[s](h);
     o[n[s].cache] = a[n[s].cache];
     r = o._rgba = a._rgba;
     return !1
    }
   });
   if (r.length) {
    if (r.join() === "0,0,0,0") {
     t.extend(r, a.transparent)
    };
    return o
   };
   return a[e]
  };
  i.fn = t.extend(i.prototype, {
   parse: function(r, h, u, c) {
    if (r === e) {
     this._rgba = [null, null, null, null];
     return this
    };
    if (r.jquery || r.nodeType) {
     r = t(r).css(h);
     h = e
    };
    var f = this,
     d = t.type(r),
     p = this._rgba = [];
    if (h !== e) {
     r = [r, h, u, c];
     d = "array"
    };
    if (d === "string") {
     return this.parse(l(r) || a._default)
    };
    if (d === "array") {
     s(n.rgba.props, function(t, e) {
      p[e.idx] = o(r[e.idx], e)
     });
     return this
    };
    if (d === "object") {
     if (r instanceof i) {
      s(n, function(t, e) {
       if (r[e.cache]) {
        f[e.cache] = r[e.cache].slice()
       }
      })
     } else {
      s(n, function(e, i) {
       var n = i.cache;
       s(i.props, function(t, e) {
        if (!f[n] && i.to) {
         if (t === "alpha" || r[t] == null) {
          return
         };
         f[n] = i.to(f._rgba)
        };
        f[n][e.idx] = o(r[t], e, !0)
       });
       if (f[n] && t.inArray(null, f[n].slice(0, 3)) < 0) {
        f[n][3] = 1;
        if (i.from) {
         f._rgba = i.from(f[n])
        }
       }
      })
     };
     return this
    }
   },
   is: function(t) {
    var a = i(t),
     e = !0,
     o = this;
    s(n, function(t, i) {
     var r, n = a[i.cache];
     if (n) {
      r = o[i.cache] || i.to && i.to(o._rgba) || [];
      s(i.props, function(t, i) {
       if (n[i.idx] != null) {
        e = (n[i.idx] === r[i.idx]);
        return e
       }
      })
     };
     return e
    });
    return e
   },
   _space: function() {
    var t = [],
     e = this;
    s(n, function(i, s) {
     if (e[s.cache]) {
      t.push(i)
     }
    });
    return t.pop()
   },
   transition: function(t, e) {
    var r = i(t),
     c = r._space(),
     a = n[c],
     f = this.alpha() === 0 ? i("transparent") : this,
     u = f[a.cache] || a.to(f._rgba),
     l = u.slice();
    r = r[a.cache];
    s(a.props, function(t, i) {
     var c = i.idx,
      s = u[c],
      n = r[c],
      a = h[i.type] || {};
     if (n === null) {
      return
     };
     if (s === null) {
      l[c] = n
     } else {
      if (a.mod) {
       if (n - s > a.mod / 2) {
        s += a.mod
       } else if (s - n > a.mod / 2) {
        s -= a.mod
       }
      };
      l[c] = o((n - s) * e + s, i)
     }
    });
    return this[c](l)
   },
   blend: function(e) {
    if (this._rgba[3] === 1) {
     return this
    };
    var n = this._rgba.slice(),
     s = n.pop(),
     o = i(e)._rgba;
    return i(t.map(n, function(t, e) {
     return (1 - s) * o[e] + s * t
    }))
   },
   toRgbaString: function() {
    var i = "rgba(",
     e = t.map(this._rgba, function(t, e) {
      return t == null ? (e > 2 ? 1 : 0) : t
     });
    if (e[3] === 1) {
     e.pop();
     i = "rgb("
    };
    return i + e.join() + ")"
   },
   toHslaString: function() {
    var i = "hsla(",
     e = t.map(this.hsla(), function(t, e) {
      if (t == null) {
       t = e > 2 ? 1 : 0
      };
      if (e && e < 3) {
       t = Math.round(t * 100) + "%"
      };
      return t
     });
    if (e[3] === 1) {
     e.pop();
     i = "hsl("
    };
    return i + e.join() + ")"
   },
   toHexString: function(e) {
    var i = this._rgba.slice(),
     s = i.pop();
    if (e) {
     i.push(~~(s * 255))
    };
    return "#" + t.map(i, function(t) {
     t = (t || 0).toString(16);
     return t.length === 1 ? "0" + t : t
    }).join("")
   },
   toString: function() {
    return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
   }
  });
  i.fn.parse.prototype = i.fn;

  function r(t, e, i) {
   i = (i + 1) % 1;
   if (i * 6 < 1) {
    return t + (e - t) * i * 6
   };
   if (i * 2 < 1) {
    return e
   };
   if (i * 3 < 2) {
    return t + (e - t) * ((2 / 3) - i) * 6
   };
   return t
  };
  n.hsla.to = function(t) {
   if (t[0] == null || t[1] == null || t[2] == null) {
    return [null, null, null, t[3]]
   };
   var n = t[0] / 255,
    o = t[1] / 255,
    r = t[2] / 255,
    u = t[3],
    s = Math.max(n, o, r),
    h = Math.min(n, o, r),
    e = s - h,
    l = s + h,
    c = l * 0.5,
    i, a;
   if (h === s) {
    i = 0
   } else if (n === s) {
    i = (60 * (o - r) / e) + 360
   } else if (o === s) {
    i = (60 * (r - n) / e) + 120
   } else {
    i = (60 * (n - o) / e) + 240
   };
   if (e === 0) {
    a = 0
   } else if (c <= 0.5) {
    a = e / l
   } else {
    a = e / (2 - l)
   };
   return [Math.round(i) % 360, a, c, u == null ? 1 : u]
  };
  n.hsla.from = function(t) {
   if (t[0] == null || t[1] == null || t[2] == null) {
    return [null, null, null, t[3]]
   };
   var n = t[0] / 360,
    s = t[1],
    e = t[2],
    a = t[3],
    i = e <= 0.5 ? e * (1 + s) : e + s - e * s,
    o = 2 * e - i;
   return [Math.round(r(o, i, n + (1 / 3)) * 255), Math.round(r(o, i, n) * 255), Math.round(r(o, i, n - (1 / 3)) * 255), a]
  };
  s(n, function(n, a) {
   var h = a.props,
    r = a.cache,
    u = a.to,
    l = a.from;
   i.fn[n] = function(n) {
    if (u && !this[r]) {
     this[r] = u(this._rgba)
    };
    if (n === e) {
     return this[r].slice()
    };
    var f, c = t.type(n),
     d = (c === "array" || c === "object") ? n : arguments,
     a = this[r].slice();
    s(h, function(t, e) {
     var i = d[c === "object" ? t : e.idx];
     if (i == null) {
      i = a[e.idx]
     };
     a[e.idx] = o(i, e)
    });
    if (l) {
     f = i(l(a));
     f[r] = a;
     return f
    } else {
     return i(a)
    }
   };
   s(h, function(e, s) {
    if (i.fn[e]) {
     return
    };
    i.fn[e] = function(i) {
     var o = t.type(i),
      h = (e === "alpha" ? (this._hsla ? "hsla" : "rgba") : n),
      l = this[h](),
      r = l[s.idx],
      a;
     if (o === "undefined") {
      return r
     };
     if (o === "function") {
      i = i.call(this, r);
      o = t.type(i)
     };
     if (i == null && s.empty) {
      return this
     };
     if (o === "string") {
      a = p.exec(i);
      if (a) {
       i = r + parseFloat(a[2]) * (a[1] === "+" ? 1 : -1)
      }
     };
     l[s.idx] = i;
     return this[h](l)
    }
   })
  });
  i.hook = function(e) {
   var n = e.split(" ");
   s(n, function(e, s) {
    t.cssHooks[s] = {
     set: function(e, n) {
      var h, r, a = "";
      if (n !== "transparent" && (t.type(n) !== "string" || (h = l(n)))) {
       n = i(h || n);
       if (!c.rgba && n._rgba[3] !== 1) {
        r = s === "backgroundColor" ? e.parentNode : e;
        while ((a === "" || a === "transparent") && r && r.style) {
         try {
          a = t.css(r, "backgroundColor");
          r = r.parentNode
         } catch (o) {}
        };
        n = n.blend(a && a !== "transparent" ? a : "_default")
       };
       n = n.toRgbaString()
      };
      try {
       e.style[s] = n
      } catch (o) {}
     }
    };
    t.fx.step[s] = function(e) {
     if (!e.colorInit) {
      e.start = i(e.elem, s);
      e.end = i(e.end);
      e.colorInit = !0
     };
     t.cssHooks[s].set(e.elem, e.start.transition(e.end, e.pos))
    }
   })
  };
  i.hook(f);
  t.cssHooks.borderColor = {
   expand: function(t) {
    var e = {};
    s(["Top", "Right", "Bottom", "Left"], function(i, s) {
     e["border" + s + "Color"] = t
    });
    return e
   }
  };
  a = t.Color.names = {
   aqua: "#00ffff",
   black: "#000000",
   blue: "#0000ff",
   fuchsia: "#ff00ff",
   gray: "#808080",
   green: "#008000",
   lime: "#00ff00",
   maroon: "#800000",
   navy: "#000080",
   olive: "#808000",
   purple: "#800080",
   red: "#ff0000",
   silver: "#c0c0c0",
   teal: "#008080",
   white: "#ffffff",
   yellow: "#ffff00",
   transparent: [null, null, null, 0],
   _default: "#ffffff"
  }
 })(jQuery);
 (function() {
  var o = ["add", "remove", "toggle"],
   n = {
    border: 1,
    borderBottom: 1,
    borderColor: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderWidth: 1,
    margin: 1,
    padding: 1
   };
  t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
   t.fx.step[i] = function(t) {
    if (t.end !== "none" && !t.setAttr || t.pos === 1 && !t.setAttr) {
     jQuery.style(t.elem, i, t.end);
     t.setAttr = !0
    }
   }
  });

  function i(e) {
   var s, o, i = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
    n = {};
   if (i && i.length && i[0] && i[i[0]]) {
    o = i.length;
    while (o--) {
     s = i[o];
     if (typeof i[s] === "string") {
      n[t.camelCase(s)] = i[s]
     }
    }
   } else {
    for (s in i) {
     if (typeof i[s] === "string") {
      n[s] = i[s]
     }
    }
   };
   return n
  };

  function s(e, i) {
   var a = {},
    s, o;
   for (s in i) {
    o = i[s];
    if (e[s] !== o) {
     if (!n[s]) {
      if (t.fx.step[s] || !isNaN(parseFloat(o))) {
       a[s] = o
      }
     }
    }
   };
   return a
  };
  if (!t.fn.addBack) {
   t.fn.addBack = function(t) {
    return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
   }
  };
  t.effects.animateClass = function(e, n, a, r) {
   var l = t.speed(n, a, r);
   return this.queue(function() {
    var a = t(this),
     h = a.attr("class") || "",
     r, n = l.children ? a.find("*").addBack() : a;
    n = n.map(function() {
     var e = t(this);
     return {
      el: e,
      start: i(this)
     }
    });
    r = function() {
     t.each(o, function(t, i) {
      if (e[i]) {
       a[i + "Class"](e[i])
      }
     })
    };
    r();
    n = n.map(function() {
     this.end = i(this.el[0]);
     this.diff = s(this.start, this.end);
     return this
    });
    a.attr("class", h);
    n = n.map(function() {
     var s = this,
      e = t.Deferred(),
      i = t.extend({}, l, {
       queue: !1,
       complete: function() {
        e.resolve(s)
       }
      });
     this.el.animate(this.diff, i);
     return e.promise()
    });
    t.when.apply(t, n.get()).done(function() {
     r();
     t.each(arguments, function() {
      var e = this.el;
      t.each(this.diff, function(t) {
       e.css(t, "")
      })
     });
     l.complete.call(a[0])
    })
   })
  };
  t.fn.extend({
   addClass: (function(e) {
    return function(i, s, n, o) {
     return s ? t.effects.animateClass.call(this, {
      add: i
     }, s, n, o) : e.apply(this, arguments)
    }
   })(t.fn.addClass),
   removeClass: (function(e) {
    return function(i, s, n, o) {
     return arguments.length > 1 ? t.effects.animateClass.call(this, {
      remove: i
     }, s, n, o) : e.apply(this, arguments)
    }
   })(t.fn.removeClass),
   toggleClass: (function(i) {
    return function(s, n, o, a, r) {
     if (typeof n === "boolean" || n === e) {
      if (!o) {
       return i.apply(this, arguments)
      } else {
       return t.effects.animateClass.call(this, (n ? {
        add: s
       } : {
        remove: s
       }), o, a, r)
      }
     } else {
      return t.effects.animateClass.call(this, {
       toggle: s
      }, n, o, a)
     }
    }
   })(t.fn.toggleClass),
   switchClass: function(e, i, s, n, o) {
    return t.effects.animateClass.call(this, {
     add: i,
     remove: e
    }, s, n, o)
   }
  })
 })();
 (function() {
  t.extend(t.effects, {
   version: "1.10.2",
   save: function(t, e) {
    for (var s = 0; s < e.length; s++) {
     if (e[s] !== null) {
      t.data(i + e[s], t[0].style[e[s]])
     }
    }
   },
   restore: function(t, s) {
    var o, n;
    for (n = 0; n < s.length; n++) {
     if (s[n] !== null) {
      o = t.data(i + s[n]);
      if (o === e) {
       o = ""
      };
      t.css(s[n], o)
     }
    }
   },
   setMode: function(t, e) {
    if (e === "toggle") {
     e = t.is(":hidden") ? "show" : "hide"
    };
    return e
   },
   getBaseline: function(t, e) {
    var s, i;
    switch (t[0]) {
     case "top":
      s = 0;
      break;
     case "middle":
      s = 0.5;
      break;
     case "bottom":
      s = 1;
      break;
     default:
      s = t[0] / e.height
    };
    switch (t[1]) {
     case "left":
      i = 0;
      break;
     case "center":
      i = 0.5;
      break;
     case "right":
      i = 1;
      break;
     default:
      i = t[1] / e.width
    };
    return {
     x: i,
     y: s
    }
   },
   createWrapper: function(e) {
    if (e.parent().is(".ui-effects-wrapper")) {
     return e.parent()
    };
    var s = {
      width: e.outerWidth(!0),
      height: e.outerHeight(!0),
      "float": e.css("float")
     },
     o = t("<div></div>").addClass("ui-effects-wrapper").css({
      fontSize: "100%",
      background: "transparent",
      border: "none",
      margin: 0,
      padding: 0
     }),
     a = {
      width: e.width(),
      height: e.height()
     },
     n = document.activeElement;
    try {
     n.id
    } catch (i) {
     n = document.body
    };
    e.wrap(o);
    if (e[0] === n || t.contains(e[0], n)) {
     t(n).focus()
    };
    o = e.parent();
    if (e.css("position") === "static") {
     o.css({
      position: "relative"
     });
     e.css({
      position: "relative"
     })
    } else {
     t.extend(s, {
      position: e.css("position"),
      zIndex: e.css("z-index")
     });
     t.each(["top", "left", "bottom", "right"], function(t, i) {
      s[i] = e.css(i);
      if (isNaN(parseInt(s[i], 10))) {
       s[i] = "auto"
      }
     });
     e.css({
      position: "relative",
      top: 0,
      left: 0,
      right: "auto",
      bottom: "auto"
     })
    };
    e.css(a);
    return o.css(s).show()
   },
   removeWrapper: function(e) {
    var i = document.activeElement;
    if (e.parent().is(".ui-effects-wrapper")) {
     e.parent().replaceWith(e);
     if (e[0] === i || t.contains(e[0], i)) {
      t(i).focus()
     }
    };
    return e
   },
   setTransition: function(e, i, s, n) {
    n = n || {};
    t.each(i, function(t, i) {
     var o = e.cssUnit(i);
     if (o[0] > 0) {
      n[i] = o[0] * s + o[1]
     }
    });
    return n
   }
  });

  function s(e, i, s, n) {
   if (t.isPlainObject(e)) {
    i = e;
    e = e.effect
   };
   e = {
    effect: e
   };
   if (i == null) {
    i = {}
   };
   if (t.isFunction(i)) {
    n = i;
    s = null;
    i = {}
   };
   if (typeof i === "number" || t.fx.speeds[i]) {
    n = s;
    s = i;
    i = {}
   };
   if (t.isFunction(s)) {
    n = s;
    s = null
   };
   if (i) {
    t.extend(e, i)
   };
   s = s || i.duration;
   e.duration = t.fx.off ? 0 : typeof s === "number" ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default;
   e.complete = n || i.complete;
   return e
  };

  function n(e) {
   if (!e || typeof e === "number" || t.fx.speeds[e]) {
    return !0
   };
   if (typeof e === "string" && !t.effects.effect[e]) {
    return !0
   };
   if (t.isFunction(e)) {
    return !0
   };
   if (typeof e === "object" && !e.effect) {
    return !0
   };
   return !1
  };
  t.fn.extend({
   effect: function() {
    var e = s.apply(this, arguments),
     a = e.mode,
     o = e.queue,
     n = t.effects.effect[e.effect];
    if (t.fx.off || !n) {
     if (a) {
      return this[a](e.duration, e.complete)
     } else {
      return this.each(function() {
       if (e.complete) {
        e.complete.call(this)
       }
      })
     }
    };

    function i(i) {
     var s = t(this),
      r = e.complete,
      o = e.mode;

     function a() {
      if (t.isFunction(r)) {
       r.call(s[0])
      };
      if (t.isFunction(i)) {
       i()
      }
     };
     if (s.is(":hidden") ? o === "hide" : o === "show") {
      s[o]();
      a()
     } else {
      n.call(s[0], e, a)
     }
    };
    return o === !1 ? this.each(i) : this.queue(o || "fx", i)
   },
   show: (function(t) {
    return function(e) {
     if (n(e)) {
      return t.apply(this, arguments)
     } else {
      var i = s.apply(this, arguments);
      i.mode = "show";
      return this.effect.call(this, i)
     }
    }
   })(t.fn.show),
   hide: (function(t) {
    return function(e) {
     if (n(e)) {
      return t.apply(this, arguments)
     } else {
      var i = s.apply(this, arguments);
      i.mode = "hide";
      return this.effect.call(this, i)
     }
    }
   })(t.fn.hide),
   toggle: (function(t) {
    return function(e) {
     if (n(e) || typeof e === "boolean") {
      return t.apply(this, arguments)
     } else {
      var i = s.apply(this, arguments);
      i.mode = "toggle";
      return this.effect.call(this, i)
     }
    }
   })(t.fn.toggle),
   cssUnit: function(e) {
    var s = this.css(e),
     i = [];
    t.each(["em", "px", "%", "pt"], function(t, e) {
     if (s.indexOf(e) > 0) {
      i = [parseFloat(s), e]
     }
    });
    return i
   }
  })
 })();
 (function() {
  var e = {};
  t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
   e[i] = function(e) {
    return Math.pow(e, t + 2)
   }
  });
  t.extend(e, {
   Sine: function(t) {
    return 1 - Math.cos(t * Math.PI / 2)
   },
   Circ: function(t) {
    return 1 - Math.sqrt(1 - t * t)
   },
   Elastic: function(t) {
    return t === 0 || t === 1 ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((t - 1) * 80 - 7.5) * Math.PI / 15)
   },
   Back: function(t) {
    return t * t * (3 * t - 2)
   },
   Bounce: function(t) {
    var i, e = 4;
    while (t < ((i = Math.pow(2, --e)) - 1) / 11) {};
    return 1 / Math.pow(4, 3 - e) - 7.5625 * Math.pow((i * 3 - 2) / 22 - t, 2)
   }
  });
  t.each(e, function(e, i) {
   t.easing["easeIn" + e] = i;
   t.easing["easeOut" + e] = function(t) {
    return 1 - i(1 - t)
   };
   t.easing["easeInOut" + e] = function(t) {
    return t < 0.5 ? i(t * 2) / 2 : 1 - i(t * -2 + 2) / 2
   }
  })
 })()
})(jQuery);
(function(t, e) {
 var n = 0,
  i = {},
  s = {};
 i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide";
 s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show";
 t.widget("ui.accordion", {
  version: "1.10.2",
  options: {
   active: 0,
   animate: {},
   collapsible: !1,
   event: "click",
   header: "> li > :first-child,> :not(li):even",
   heightStyle: "auto",
   icons: {
    activeHeader: "ui-icon-triangle-1-s",
    header: "ui-icon-triangle-1-e"
   },
   activate: null,
   beforeActivate: null
  },
  _create: function() {
   var e = this.options;
   this.prevShow = this.prevHide = t();
   this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
   if (!e.collapsible && (e.active === !1 || e.active == null)) {
    e.active = 0
   };
   this._processPanels();
   if (e.active < 0) {
    e.active += this.headers.length
   };
   this._refresh()
  },
  _getCreateEventData: function() {
   return {
    header: this.active,
    panel: !this.active.length ? t() : this.active.next(),
    content: !this.active.length ? t() : this.active.next()
   }
  },
  _createIcons: function() {
   var e = this.options.icons;
   if (e) {
    t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers);
    this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader);
    this.headers.addClass("ui-accordion-icons")
   }
  },
  _destroyIcons: function() {
   this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
  },
  _destroy: function() {
   var t;
   this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
   this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
    if (/^ui-accordion/.test(this.id)) {
     this.removeAttribute("id")
    }
   });
   this._destroyIcons();
   t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
    if (/^ui-accordion/.test(this.id)) {
     this.removeAttribute("id")
    }
   });
   if (this.options.heightStyle !== "content") {
    t.css("height", "")
   }
  },
  _setOption: function(t, e) {
   if (t === "active") {
    this._activate(e);
    return
   };
   if (t === "event") {
    if (this.options.event) {
     this._off(this.headers, this.options.event)
    };
    this._setupEvents(e)
   };
   this._super(t, e);
   if (t === "collapsible" && !e && this.options.active === !1) {
    this._activate(0)
   };
   if (t === "icons") {
    this._destroyIcons();
    if (e) {
     this._createIcons()
    }
   };
   if (t === "disabled") {
    this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)
   }
  },
  _keydown: function(e) {
   if (e.altKey || e.ctrlKey) {
    return
   };
   var i = t.ui.keyCode,
    n = this.headers.length,
    o = this.headers.index(e.target),
    s = !1;
   switch (e.keyCode) {
    case i.RIGHT:
    case i.DOWN:
     s = this.headers[(o + 1) % n];
     break;
    case i.LEFT:
    case i.UP:
     s = this.headers[(o - 1 + n) % n];
     break;
    case i.SPACE:
    case i.ENTER:
     this._eventHandler(e);
     break;
    case i.HOME:
     s = this.headers[0];
     break;
    case i.END:
     s = this.headers[n - 1];
     break
   };
   if (s) {
    t(e.target).attr("tabIndex", -1);
    t(s).attr("tabIndex", 0);
    s.focus();
    e.preventDefault()
   }
  },
  _panelKeyDown: function(e) {
   if (e.keyCode === t.ui.keyCode.UP && e.ctrlKey) {
    t(e.currentTarget).prev().focus()
   }
  },
  refresh: function() {
   var e = this.options;
   this._processPanels();
   if ((e.active === !1 && e.collapsible === !0) || !this.headers.length) {
    e.active = !1;
    this.active = t()
   };
   if (e.active === !1) {
    this._activate(0)
   } else if (this.active.length && !t.contains(this.element[0], this.active[0])) {
    if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
     e.active = !1;
     this.active = t()
    } else {
     this._activate(Math.max(0, e.active - 1))
    }
   } else {
    e.active = this.headers.index(this.active)
   };
   this._destroyIcons();
   this._refresh()
  },
  _processPanels: function() {
   this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
   this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
  },
  _refresh: function() {
   var e, i = this.options,
    o = i.heightStyle,
    a = this.element.parent(),
    s = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n);
   this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
   this.active.next().addClass("ui-accordion-content-active").show();
   this.headers.attr("role", "tab").each(function(e) {
    var o = t(this),
     n = o.attr("id"),
     a = o.next(),
     i = a.attr("id");
    if (!n) {
     n = s + "-header-" + e;
     o.attr("id", n)
    };
    if (!i) {
     i = s + "-panel-" + e;
     a.attr("id", i)
    };
    o.attr("aria-controls", i);
    a.attr("aria-labelledby", n)
   }).next().attr("role", "tabpanel");
   this.headers.not(this.active).attr({
    "aria-selected": "false",
    tabIndex: -1
   }).next().attr({
    "aria-expanded": "false",
    "aria-hidden": "true"
   }).hide();
   if (!this.active.length) {
    this.headers.eq(0).attr("tabIndex", 0)
   } else {
    this.active.attr({
     "aria-selected": "true",
     tabIndex: 0
    }).next().attr({
     "aria-expanded": "true",
     "aria-hidden": "false"
    })
   };
   this._createIcons();
   this._setupEvents(i.event);
   if (o === "fill") {
    e = a.height();
    this.element.siblings(":visible").each(function() {
     var s = t(this),
      i = s.css("position");
     if (i === "absolute" || i === "fixed") {
      return
     };
     e -= s.outerHeight(!0)
    });
    this.headers.each(function() {
     e -= t(this).outerHeight(!0)
    });
    this.headers.next().each(function() {
     t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
    }).css("overflow", "auto")
   } else if (o === "auto") {
    e = 0;
    this.headers.next().each(function() {
     e = Math.max(e, t(this).css("height", "").height())
    }).height(e)
   }
  },
  _activate: function(e) {
   var i = this._findActive(e)[0];
   if (i === this.active[0]) {
    return
   };
   i = i || this.active[0];
   this._eventHandler({
    target: i,
    currentTarget: i,
    preventDefault: t.noop
   })
  },
  _findActive: function(e) {
   return typeof e === "number" ? this.headers.eq(e) : t()
  },
  _setupEvents: function(e) {
   var i = {
    keydown: "_keydown"
   };
   if (e) {
    t.each(e.split(" "), function(t, e) {
     i[e] = "_eventHandler"
    })
   };
   this._off(this.headers.add(this.headers.next()));
   this._on(this.headers, i);
   this._on(this.headers.next(), {
    keydown: "_panelKeyDown"
   });
   this._hoverable(this.headers);
   this._focusable(this.headers)
  },
  _eventHandler: function(e) {
   var i = this.options,
    n = this.active,
    s = t(e.currentTarget),
    o = s[0] === n[0],
    a = o && i.collapsible,
    l = a ? t() : s.next(),
    h = n.next(),
    r = {
     oldHeader: n,
     oldPanel: h,
     newHeader: a ? t() : s,
     newPanel: l
    };
   e.preventDefault();
   if ((o && !i.collapsible) || (this._trigger("beforeActivate", e, r) === !1)) {
    return
   };
   i.active = a ? !1 : this.headers.index(s);
   this.active = o ? t() : s;
   this._toggle(r);
   n.removeClass("ui-accordion-header-active ui-state-active");
   if (i.icons) {
    n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header)
   };
   if (!o) {
    s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
    if (i.icons) {
     s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader)
    };
    s.next().addClass("ui-accordion-content-active")
   }
  },
  _toggle: function(e) {
   var s = e.newPanel,
    i = this.prevShow.length ? this.prevShow : e.oldPanel;
   this.prevShow.add(this.prevHide).stop(!0, !0);
   this.prevShow = s;
   this.prevHide = i;
   if (this.options.animate) {
    this._animate(s, i, e)
   } else {
    i.hide();
    s.show();
    this._toggleComplete(e)
   };
   i.attr({
    "aria-expanded": "false",
    "aria-hidden": "true"
   });
   i.prev().attr("aria-selected", "false");
   if (s.length && i.length) {
    i.prev().attr("tabIndex", -1)
   } else if (s.length) {
    this.headers.filter(function() {
     return t(this).attr("tabIndex") === 0
    }).attr("tabIndex", -1)
   };
   s.attr({
    "aria-expanded": "true",
    "aria-hidden": "false"
   }).prev().attr({
    "aria-selected": "true",
    tabIndex: 0
   })
  },
  _animate: function(t, e, n) {
   var f, o, a, c = this,
    h = 0,
    d = t.length && (!e.length || (t.index() < e.index())),
    l = this.options.animate || {},
    r = d && l.down || l,
    u = function() {
     c._toggleComplete(n)
    };
   if (typeof r === "number") {
    a = r
   };
   if (typeof r === "string") {
    o = r
   };
   o = o || r.easing || l.easing;
   a = a || r.duration || l.duration;
   if (!e.length) {
    return t.animate(s, a, o, u)
   };
   if (!t.length) {
    return e.animate(i, a, o, u)
   };
   f = t.show().outerHeight();
   e.animate(i, {
    duration: a,
    easing: o,
    step: function(t, e) {
     e.now = Math.round(t)
    }
   });
   t.hide().animate(s, {
    duration: a,
    easing: o,
    complete: u,
    step: function(t, i) {
     i.now = Math.round(t);
     if (i.prop !== "height") {
      h += i.now
     } else if (c.options.heightStyle !== "content") {
      i.now = Math.round(f - e.outerHeight() - h);
      h = 0
     }
    }
   })
  },
  _toggleComplete: function(t) {
   var e = t.oldPanel;
   e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
   if (e.length) {
    e.parent()[0].className = e.parent()[0].className
   };
   this._trigger("activate", null, t)
  }
 })
})(jQuery);
(function(t, e) {
 var i = 0;
 t.widget("ui.autocomplete", {
  version: "1.10.2",
  defaultElement: "<input>",
  options: {
   appendTo: null,
   autoFocus: !1,
   delay: 300,
   minLength: 1,
   position: {
    my: "left top",
    at: "left bottom",
    collision: "none"
   },
   source: null,
   change: null,
   close: null,
   focus: null,
   open: null,
   response: null,
   search: null,
   select: null
  },
  pending: 0,
  _create: function() {
   var e, s, i, o = this.element[0].nodeName.toLowerCase(),
    a = o === "textarea",
    n = o === "input";
   this.isMultiLine = a ? !0 : n ? !1 : this.element.prop("isContentEditable");
   this.valueMethod = this.element[a || n ? "val" : "text"];
   this.isNewMenu = !0;
   this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
   this._on(this.element, {
    keydown: function(n) {
     if (this.element.prop("readOnly")) {
      e = !0;
      i = !0;
      s = !0;
      return
     };
     e = !1;
     i = !1;
     s = !1;
     var o = t.ui.keyCode;
     switch (n.keyCode) {
      case o.PAGE_UP:
       e = !0;
       this._move("previousPage", n);
       break;
      case o.PAGE_DOWN:
       e = !0;
       this._move("nextPage", n);
       break;
      case o.UP:
       e = !0;
       this._keyEvent("previous", n);
       break;
      case o.DOWN:
       e = !0;
       this._keyEvent("next", n);
       break;
      case o.ENTER:
      case o.NUMPAD_ENTER:
       if (this.menu.active) {
        e = !0;
        n.preventDefault();
        this.menu.select(n)
       };
       break;
      case o.TAB:
       if (this.menu.active) {
        this.menu.select(n)
       };
       break;
      case o.ESCAPE:
       if (this.menu.element.is(":visible")) {
        this._value(this.term);
        this.close(n);
        n.preventDefault()
       };
       break;
      default:
       s = !0;
       this._searchTimeout(n);
       break
     }
    },
    keypress: function(i) {
     if (e) {
      e = !1;
      i.preventDefault();
      return
     };
     if (s) {
      return
     };
     var n = t.ui.keyCode;
     switch (i.keyCode) {
      case n.PAGE_UP:
       this._move("previousPage", i);
       break;
      case n.PAGE_DOWN:
       this._move("nextPage", i);
       break;
      case n.UP:
       this._keyEvent("previous", i);
       break;
      case n.DOWN:
       this._keyEvent("next", i);
       break
     }
    },
    input: function(t) {
     if (i) {
      i = !1;
      t.preventDefault();
      return
     };
     this._searchTimeout(t)
    },
    focus: function() {
     this.selectedItem = null;
     this.previous = this._value()
    },
    blur: function(t) {
     if (this.cancelBlur) {
      delete this.cancelBlur;
      return
     };
     clearTimeout(this.searching);
     this.close(t);
     this._change(t)
    }
   });
   this._initSource();
   this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
    input: t(),
    role: null
   }).hide().data("ui-menu");
   this._on(this.menu.element, {
    mousedown: function(e) {
     e.preventDefault();
     this.cancelBlur = !0;
     this._delay(function() {
      delete this.cancelBlur
     });
     var i = this.menu.element[0];
     if (!t(e.target).closest(".ui-menu-item").length) {
      this._delay(function() {
       var e = this;
       this.document.one("mousedown", function(s) {
        if (s.target !== e.element[0] && s.target !== i && !t.contains(i, s.target)) {
         e.close()
        }
       })
      })
     }
    },
    menufocus: function(e, i) {
     if (this.isNewMenu) {
      this.isNewMenu = !1;
      if (e.originalEvent && /^mouse/.test(e.originalEvent.type)) {
       this.menu.blur();
       this.document.one("mousemove", function() {
        t(e.target).trigger(e.originalEvent)
       });
       return
      }
     };
     var s = i.item.data("ui-autocomplete-item");
     if (!1 !== this._trigger("focus", e, {
       item: s
      })) {
      if (e.originalEvent && /^key/.test(e.originalEvent.type)) {
       this._value(s.value)
      }
     } else {
      this.liveRegion.text(s.value)
     }
    },
    menuselect: function(t, e) {
     var i = e.item.data("ui-autocomplete-item"),
      s = this.previous;
     if (this.element[0] !== this.document[0].activeElement) {
      this.element.focus();
      this.previous = s;
      this._delay(function() {
       this.previous = s;
       this.selectedItem = i
      })
     };
     if (!1 !== this._trigger("select", t, {
       item: i
      })) {
      this._value(i.value)
     };
     this.term = this._value();
     this.close(t);
     this.selectedItem = i
    }
   });
   this.liveRegion = t("<span>", {
    role: "status",
    "aria-live": "polite"
   }).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
   this._on(this.window, {
    beforeunload: function() {
     this.element.removeAttr("autocomplete")
    }
   })
  },
  _destroy: function() {
   clearTimeout(this.searching);
   this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
   this.menu.element.remove();
   this.liveRegion.remove()
  },
  _setOption: function(t, e) {
   this._super(t, e);
   if (t === "source") {
    this._initSource()
   };
   if (t === "appendTo") {
    this.menu.element.appendTo(this._appendTo())
   };
   if (t === "disabled" && e && this.xhr) {
    this.xhr.abort()
   }
  },
  _appendTo: function() {
   var e = this.options.appendTo;
   if (e) {
    e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)
   };
   if (!e) {
    e = this.element.closest(".ui-front")
   };
   if (!e.length) {
    e = this.document[0].body
   };
   return e
  },
  _initSource: function() {
   var s, i, e = this;
   if (t.isArray(this.options.source)) {
    s = this.options.source;
    this.source = function(e, i) {
     i(t.ui.autocomplete.filter(s, e.term))
    }
   } else if (typeof this.options.source === "string") {
    i = this.options.source;
    this.source = function(s, n) {
     if (e.xhr) {
      e.xhr.abort()
     };
     e.xhr = t.ajax({
      url: i,
      data: s,
      dataType: "json",
      success: function(t) {
       n(t)
      },
      error: function() {
       n([])
      }
     })
    }
   } else {
    this.source = this.options.source
   }
  },
  _searchTimeout: function(t) {
   clearTimeout(this.searching);
   this.searching = this._delay(function() {
    if (this.term !== this._value()) {
     this.selectedItem = null;
     this.search(null, t)
    }
   }, this.options.delay)
  },
  search: function(t, e) {
   t = t != null ? t : this._value();
   this.term = this._value();
   if (t.length < this.options.minLength) {
    return this.close(e)
   };
   if (this._trigger("search", e) === !1) {
    return
   };
   return this._search(t)
  },
  _search: function(t) {
   this.pending++;
   this.element.addClass("ui-autocomplete-loading");
   this.cancelSearch = !1;
   this.source({
    term: t
   }, this._response())
  },
  _response: function() {
   var t = this,
    e = ++i;
   return function(s) {
    if (e === i) {
     t.__response(s)
    };
    t.pending--;
    if (!t.pending) {
     t.element.removeClass("ui-autocomplete-loading")
    }
   }
  },
  __response: function(t) {
   if (t) {
    t = this._normalize(t)
   };
   this._trigger("response", null, {
    content: t
   });
   if (!this.options.disabled && t && t.length && !this.cancelSearch) {
    this._suggest(t);
    this._trigger("open")
   } else {
    this._close()
   }
  },
  close: function(t) {
   this.cancelSearch = !0;
   this._close(t)
  },
  _close: function(t) {
   if (this.menu.element.is(":visible")) {
    this.menu.element.hide();
    this.menu.blur();
    this.isNewMenu = !0;
    this._trigger("close", t)
   }
  },
  _change: function(t) {
   if (this.previous !== this._value()) {
    this._trigger("change", t, {
     item: this.selectedItem
    })
   }
  },
  _normalize: function(e) {
   if (e.length && e[0].label && e[0].value) {
    return e
   };
   return t.map(e, function(e) {
    if (typeof e === "string") {
     return {
      label: e,
      value: e
     }
    };
    return t.extend({
     label: e.label || e.value,
     value: e.value || e.label
    }, e)
   })
  },
  _suggest: function(e) {
   var i = this.menu.element.empty();
   this._renderMenu(i, e);
   this.isNewMenu = !0;
   this.menu.refresh();
   i.show();
   this._resizeMenu();
   i.position(t.extend({
    of: this.element
   }, this.options.position));
   if (this.options.autoFocus) {
    this.menu.next()
   }
  },
  _resizeMenu: function() {
   var t = this.menu.element;
   t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
  },
  _renderMenu: function(e, i) {
   var s = this;
   t.each(i, function(t, i) {
    s._renderItemData(e, i)
   })
  },
  _renderItemData: function(t, e) {
   return this._renderItem(t, e).data("ui-autocomplete-item", e)
  },
  _renderItem: function(e, i) {
   return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
  },
  _move: function(t, e) {
   if (!this.menu.element.is(":visible")) {
    this.search(null, e);
    return
   };
   if (this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t)) {
    this._value(this.term);
    this.menu.blur();
    return
   };
   this.menu[t](e)
  },
  widget: function() {
   return this.menu.element
  },
  _value: function() {
   return this.valueMethod.apply(this.element, arguments)
  },
  _keyEvent: function(t, e) {
   if (!this.isMultiLine || this.menu.element.is(":visible")) {
    this._move(t, e);
    e.preventDefault()
   }
  }
 });
 t.extend(t.ui.autocomplete, {
  escapeRegex: function(t) {
   return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
  },
  filter: function(e, i) {
   var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
   return t.grep(e, function(t) {
    return s.test(t.label || t.value || t)
   })
  }
 });
 t.widget("ui.autocomplete", t.ui.autocomplete, {
  options: {
   messages: {
    noResults: "No search results.",
    results: function(t) {
     return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }
   }
  },
  __response: function(t) {
   var e;
   this._superApply(arguments);
   if (this.options.disabled || this.cancelSearch) {
    return
   };
   if (t && t.length) {
    e = this.options.messages.results(t.length)
   } else {
    e = this.options.messages.noResults
   };
   this.liveRegion.text(e)
  }
 })
}(jQuery));
(function(t, e) {
 var s, l, r, i, a = "ui-button ui-widget ui-state-default ui-corner-all",
  h = "ui-state-hover ui-state-active ",
  o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
  u = function() {
   var e = t(this).find(":ui-button");
   setTimeout(function() {
    e.button("refresh")
   }, 1)
  },
  n = function(e) {
   var i = e.name,
    n = e.form,
    s = t([]);
   if (i) {
    i = i.replace(/'/g, "\\'");
    if (n) {
     s = t(n).find("[name='" + i + "']")
    } else {
     s = t("[name='" + i + "']", e.ownerDocument).filter(function() {
      return !this.form
     })
    }
   };
   return s
  };
 t.widget("ui.button", {
  version: "1.10.2",
  defaultElement: "<button>",
  options: {
   disabled: null,
   text: !0,
   label: null,
   icons: {
    primary: null,
    secondary: null
   }
  },
  _create: function() {
   this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, u);
   if (typeof this.options.disabled !== "boolean") {
    this.options.disabled = !!this.element.prop("disabled")
   } else {
    this.element.prop("disabled", this.options.disabled)
   };
   this._determineButtonType();
   this.hasTitle = !!this.buttonElement.attr("title");
   var o = this,
    e = this.options,
    c = this.type === "checkbox" || this.type === "radio",
    f = !c ? "ui-state-active" : "",
    h = "ui-state-focus";
   if (e.label === null) {
    e.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
   };
   this._hoverable(this.buttonElement);
   this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
    if (e.disabled) {
     return
    };
    if (this === s) {
     t(this).addClass("ui-state-active")
    }
   }).bind("mouseleave" + this.eventNamespace, function() {
    if (e.disabled) {
     return
    };
    t(this).removeClass(f)
   }).bind("click" + this.eventNamespace, function(t) {
    if (e.disabled) {
     t.preventDefault();
     t.stopImmediatePropagation()
    }
   });
   this.element.bind("focus" + this.eventNamespace, function() {
    o.buttonElement.addClass(h)
   }).bind("blur" + this.eventNamespace, function() {
    o.buttonElement.removeClass(h)
   });
   if (c) {
    this.element.bind("change" + this.eventNamespace, function() {
     if (i) {
      return
     };
     o.refresh()
    });
    this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
     if (e.disabled) {
      return
     };
     i = !1;
     l = t.pageX;
     r = t.pageY
    }).bind("mouseup" + this.eventNamespace, function(t) {
     if (e.disabled) {
      return
     };
     if (l !== t.pageX || r !== t.pageY) {
      i = !0
     }
    })
   };
   if (this.type === "checkbox") {
    this.buttonElement.bind("click" + this.eventNamespace, function() {
     if (e.disabled || i) {
      return !1
     }
    })
   } else if (this.type === "radio") {
    this.buttonElement.bind("click" + this.eventNamespace, function() {
     if (e.disabled || i) {
      return !1
     };
     t(this).addClass("ui-state-active");
     o.buttonElement.attr("aria-pressed", "true");
     var s = o.element[0];
     n(s).not(s).map(function() {
      return t(this).button("widget")[0]
     }).removeClass("ui-state-active").attr("aria-pressed", "false")
    })
   } else {
    this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
     if (e.disabled) {
      return !1
     };
     t(this).addClass("ui-state-active");
     s = this;
     o.document.one("mouseup", function() {
      s = null
     })
    }).bind("mouseup" + this.eventNamespace, function() {
     if (e.disabled) {
      return !1
     };
     t(this).removeClass("ui-state-active")
    }).bind("keydown" + this.eventNamespace, function(i) {
     if (e.disabled) {
      return !1
     };
     if (i.keyCode === t.ui.keyCode.SPACE || i.keyCode === t.ui.keyCode.ENTER) {
      t(this).addClass("ui-state-active")
     }
    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
     t(this).removeClass("ui-state-active")
    });
    if (this.buttonElement.is("a")) {
     this.buttonElement.keyup(function(e) {
      if (e.keyCode === t.ui.keyCode.SPACE) {
       t(this).click()
      }
     })
    }
   };
   this._setOption("disabled", e.disabled);
   this._resetButton()
  },
  _determineButtonType: function() {
   var t, e, i;
   if (this.element.is("[type=checkbox]")) {
    this.type = "checkbox"
   } else if (this.element.is("[type=radio]")) {
    this.type = "radio"
   } else if (this.element.is("input")) {
    this.type = "input"
   } else {
    this.type = "button"
   };
   if (this.type === "checkbox" || this.type === "radio") {
    t = this.element.parents().last();
    e = "label[for='" + this.element.attr("id") + "']";
    this.buttonElement = t.find(e);
    if (!this.buttonElement.length) {
     t = t.length ? t.siblings() : this.element.siblings();
     this.buttonElement = t.filter(e);
     if (!this.buttonElement.length) {
      this.buttonElement = t.find(e)
     }
    };
    this.element.addClass("ui-helper-hidden-accessible");
    i = this.element.is(":checked");
    if (i) {
     this.buttonElement.addClass("ui-state-active")
    };
    this.buttonElement.prop("aria-pressed", i)
   } else {
    this.buttonElement = this.element
   }
  },
  widget: function() {
   return this.buttonElement
  },
  _destroy: function() {
   this.element.removeClass("ui-helper-hidden-accessible");
   this.buttonElement.removeClass(a + " " + h + " " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
   if (!this.hasTitle) {
    this.buttonElement.removeAttr("title")
   }
  },
  _setOption: function(t, e) {
   this._super(t, e);
   if (t === "disabled") {
    if (e) {
     this.element.prop("disabled", !0)
    } else {
     this.element.prop("disabled", !1)
    };
    return
   };
   this._resetButton()
  },
  refresh: function() {
   var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
   if (e !== this.options.disabled) {
    this._setOption("disabled", e)
   };
   if (this.type === "radio") {
    n(this.element[0]).each(function() {
     if (t(this).is(":checked")) {
      t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
     } else {
      t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
     }
    })
   } else if (this.type === "checkbox") {
    if (this.element.is(":checked")) {
     this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
    } else {
     this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
    }
   }
  },
  _resetButton: function() {
   if (this.type === "input") {
    if (this.options.label) {
     this.element.val(this.options.label)
    };
    return
   };
   var i = this.buttonElement.removeClass(o),
    a = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
    e = this.options.icons,
    n = e.primary && e.secondary,
    s = [];
   if (e.primary || e.secondary) {
    if (this.options.text) {
     s.push("ui-button-text-icon" + (n ? "s" : (e.primary ? "-primary" : "-secondary")))
    };
    if (e.primary) {
     i.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>")
    };
    if (e.secondary) {
     i.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>")
    };
    if (!this.options.text) {
     s.push(n ? "ui-button-icons-only" : "ui-button-icon-only");
     if (!this.hasTitle) {
      i.attr("title", t.trim(a))
     }
    }
   } else {
    s.push("ui-button-text-only")
   };
   i.addClass(s.join(" "))
  }
 });
 t.widget("ui.buttonset", {
  version: "1.10.2",
  options: {
   items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
  },
  _create: function() {
   this.element.addClass("ui-buttonset")
  },
  _init: function() {
   this.refresh()
  },
  _setOption: function(t, e) {
   if (t === "disabled") {
    this.buttons.button("option", t, e)
   };
   this._super(t, e)
  },
  refresh: function() {
   var e = this.element.css("direction") === "rtl";
   this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
    return t(this).button("widget")[0]
   }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
  },
  _destroy: function() {
   this.element.removeClass("ui-buttonset");
   this.buttons.map(function() {
    return t(this).button("widget")[0]
   }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
  }
 })
}(jQuery));
(function(t, e) {
 t.extend(t.ui, {
  datepicker: {
   version: "1.10.2"
  }
 });
 var i = "datepicker",
  s = new Date().getTime(),
  o;

 function a() {
  this._curInst = null;
  this._keyEvent = !1;
  this._disabledInputs = [];
  this._datepickerShowing = !1;
  this._inDialog = !1;
  this._mainDivId = "ui-datepicker-div";
  this._inlineClass = "ui-datepicker-inline";
  this._appendClass = "ui-datepicker-append";
  this._triggerClass = "ui-datepicker-trigger";
  this._dialogClass = "ui-datepicker-dialog";
  this._disableClass = "ui-datepicker-disabled";
  this._unselectableClass = "ui-datepicker-unselectable";
  this._currentClass = "ui-datepicker-current-day";
  this._dayOverClass = "ui-datepicker-days-cell-over";
  this.regional = [];
  this.regional[""] = {
   closeText: "Done",
   prevText: "Prev",
   nextText: "Next",
   currentText: "Today",
   monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
   monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
   dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
   dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
   weekHeader: "Wk",
   dateFormat: "mm/dd/yy",
   firstDay: 0,
   isRTL: !1,
   showMonthAfterYear: !1,
   yearSuffix: ""
  };
  this._defaults = {
   showOn: "focus",
   showAnim: "fadeIn",
   showOptions: {},
   defaultDate: null,
   appendText: "",
   buttonText: "...",
   buttonImage: "",
   buttonImageOnly: !1,
   hideIfNoPrevNext: !1,
   navigationAsDateFormat: !1,
   gotoCurrent: !1,
   changeMonth: !1,
   changeYear: !1,
   yearRange: "c-10:c+10",
   showOtherMonths: !1,
   selectOtherMonths: !1,
   showWeek: !1,
   calculateWeek: this.iso8601Week,
   shortYearCutoff: "+10",
   minDate: null,
   maxDate: null,
   duration: "fast",
   beforeShowDay: null,
   beforeShow: null,
   onSelect: null,
   onChangeMonthYear: null,
   onClose: null,
   numberOfMonths: 1,
   showCurrentAtPos: 0,
   stepMonths: 1,
   stepBigMonths: 12,
   altField: "",
   altFormat: "",
   constrainInput: !0,
   showButtonPanel: !1,
   autoSize: !1,
   disabled: !1
  };
  t.extend(this._defaults, this.regional[""]);
  this.dpDiv = r(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
 };
 t.extend(a.prototype, {
  markerClassName: "hasDatepicker",
  maxRows: 4,
  _widgetDatepicker: function() {
   return this.dpDiv
  },
  setDefaults: function(t) {
   n(this._defaults, t || {});
   return this
  },
  _attachDatepicker: function(e, i) {
   var n, o, s;
   n = e.nodeName.toLowerCase();
   o = (n === "div" || n === "span");
   if (!e.id) {
    this.uuid += 1;
    e.id = "dp" + this.uuid
   };
   s = this._newInst(t(e), o);
   s.settings = t.extend({}, i || {});
   if (n === "input") {
    this._connectDatepicker(e, s)
   } else if (o) {
    this._inlineDatepicker(e, s)
   }
  },
  _newInst: function(e, i) {
   var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
   return {
    id: s,
    input: e,
    selectedDay: 0,
    selectedMonth: 0,
    selectedYear: 0,
    drawMonth: 0,
    drawYear: 0,
    inline: i,
    dpDiv: (!i ? this.dpDiv : r(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
   }
  },
  _connectDatepicker: function(e, s) {
   var n = t(e);
   s.append = t([]);
   s.trigger = t([]);
   if (n.hasClass(this.markerClassName)) {
    return
   };
   this._attachments(n, s);
   n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
   this._autoSize(s);
   t.data(e, i, s);
   if (s.settings.disabled) {
    this._disableDatepicker(e)
   }
  },
  _attachments: function(e, i) {
   var n, s, o, r = this._get(i, "appendText"),
    a = this._get(i, "isRTL");
   if (i.append) {
    i.append.remove()
   };
   if (r) {
    i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>");
    e[a ? "before" : "after"](i.append)
   };
   e.unbind("focus", this._showDatepicker);
   if (i.trigger) {
    i.trigger.remove()
   };
   n = this._get(i, "showOn");
   if (n === "focus" || n === "both") {
    e.focus(this._showDatepicker)
   };
   if (n === "button" || n === "both") {
    s = this._get(i, "buttonText");
    o = this._get(i, "buttonImage");
    i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
     src: o,
     alt: s,
     title: s
    }) : t("<button type='button'></button>").addClass(this._triggerClass).html(!o ? s : t("<img/>").attr({
     src: o,
     alt: s,
     title: s
    })));
    e[a ? "before" : "after"](i.trigger);
    i.trigger.click(function() {
     if (t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0]) {
      t.datepicker._hideDatepicker()
     } else if (t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0]) {
      t.datepicker._hideDatepicker();
      t.datepicker._showDatepicker(e[0])
     } else {
      t.datepicker._showDatepicker(e[0])
     };
     return !1
    })
   }
  },
  _autoSize: function(t) {
   if (this._get(t, "autoSize") && !t.inline) {
    var o, a, n, e, i = new Date(2009, 12 - 1, 20),
     s = this._get(t, "dateFormat");
    if (s.match(/[DM]/)) {
     o = function(t) {
      a = 0;
      n = 0;
      for (e = 0; e < t.length; e++) {
       if (t[e].length > a) {
        a = t[e].length;
        n = e
       }
      };
      return n
     };
     i.setMonth(o(this._get(t, (s.match(/MM/) ? "monthNames" : "monthNamesShort"))));
     i.setDate(o(this._get(t, (s.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - i.getDay())
    };
    t.input.attr("size", this._formatDate(t, i).length)
   }
  },
  _inlineDatepicker: function(e, s) {
   var n = t(e);
   if (n.hasClass(this.markerClassName)) {
    return
   };
   n.addClass(this.markerClassName).append(s.dpDiv);
   t.data(e, i, s);
   this._setDate(s, this._getDefaultDate(s), !0);
   this._updateDatepicker(s);
   this._updateAlternate(s);
   if (s.settings.disabled) {
    this._disableDatepicker(e)
   };
   s.dpDiv.css("display", "block")
  },
  _dialogDatepicker: function(e, s, o, a, l) {
   var c, f, d, u, h, r = this._dialogInst;
   if (!r) {
    this.uuid += 1;
    c = "dp" + this.uuid;
    this._dialogInput = t("<input type='text' id='" + c + "' style='position: absolute; top: -100px; width: 0px;'/>");
    this._dialogInput.keydown(this._doKeyDown);
    t("body").append(this._dialogInput);
    r = this._dialogInst = this._newInst(this._dialogInput, !1);
    r.settings = {};
    t.data(this._dialogInput[0], i, r)
   };
   n(r.settings, a || {});
   s = (s && s.constructor === Date ? this._formatDate(r, s) : s);
   this._dialogInput.val(s);
   this._pos = (l ? (l.length ? l : [l.pageX, l.pageY]) : null);
   if (!this._pos) {
    f = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    u = document.documentElement.scrollLeft || document.body.scrollLeft;
    h = document.documentElement.scrollTop || document.body.scrollTop;
    this._pos = [(f / 2) - 100 + u, (d / 2) - 150 + h]
   };
   this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
   r.settings.onSelect = o;
   this._inDialog = !0;
   this.dpDiv.addClass(this._dialogClass);
   this._showDatepicker(this._dialogInput[0]);
   if (t.blockUI) {
    t.blockUI(this.dpDiv)
   };
   t.data(this._dialogInput[0], i, r);
   return this
  },
  _destroyDatepicker: function(e) {
   var s, n = t(e),
    o = t.data(e, i);
   if (!n.hasClass(this.markerClassName)) {
    return
   };
   s = e.nodeName.toLowerCase();
   t.removeData(e, i);
   if (s === "input") {
    o.append.remove();
    o.trigger.remove();
    n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
   } else if (s === "div" || s === "span") {
    n.removeClass(this.markerClassName).empty()
   }
  },
  _enableDatepicker: function(e) {
   var s, n, o = t(e),
    a = t.data(e, i);
   if (!o.hasClass(this.markerClassName)) {
    return
   };
   s = e.nodeName.toLowerCase();
   if (s === "input") {
    e.disabled = !1;
    a.trigger.filter("button").each(function() {
     this.disabled = !1
    }).end().filter("img").css({
     opacity: "1.0",
     cursor: ""
    })
   } else if (s === "div" || s === "span") {
    n = o.children("." + this._inlineClass);
    n.children().removeClass("ui-state-disabled");
    n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
   };
   this._disabledInputs = t.map(this._disabledInputs, function(t) {
    return (t === e ? null : t)
   })
  },
  _disableDatepicker: function(e) {
   var s, n, o = t(e),
    a = t.data(e, i);
   if (!o.hasClass(this.markerClassName)) {
    return
   };
   s = e.nodeName.toLowerCase();
   if (s === "input") {
    e.disabled = !0;
    a.trigger.filter("button").each(function() {
     this.disabled = !0
    }).end().filter("img").css({
     opacity: "0.5",
     cursor: "default"
    })
   } else if (s === "div" || s === "span") {
    n = o.children("." + this._inlineClass);
    n.children().addClass("ui-state-disabled");
    n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
   };
   this._disabledInputs = t.map(this._disabledInputs, function(t) {
    return (t === e ? null : t)
   });
   this._disabledInputs[this._disabledInputs.length] = e
  },
  _isDisabledDatepicker: function(t) {
   if (!t) {
    return !1
   };
   for (var e = 0; e < this._disabledInputs.length; e++) {
    if (this._disabledInputs[e] === t) {
     return !0
    }
   };
   return !1
  },
  _getInst: function(e) {
   try {
    return t.data(e, i)
   } catch (s) {
    throw "Missing instance data for this datepicker"
   }
  },
  _optionDatepicker: function(i, s, o) {
   var r, u, l, h, a = this._getInst(i);
   if (arguments.length === 2 && typeof s === "string") {
    return (s === "defaults" ? t.extend({}, t.datepicker._defaults) : (a ? (s === "all" ? t.extend({}, a.settings) : this._get(a, s)) : null))
   };
   r = s || {};
   if (typeof s === "string") {
    r = {};
    r[s] = o
   };
   if (a) {
    if (this._curInst === a) {
     this._hideDatepicker()
    };
    u = this._getDateDatepicker(i, !0);
    l = this._getMinMaxDate(a, "min");
    h = this._getMinMaxDate(a, "max");
    n(a.settings, r);
    if (l !== null && r.dateFormat !== e && r.minDate === e) {
     a.settings.minDate = this._formatDate(a, l)
    };
    if (h !== null && r.dateFormat !== e && r.maxDate === e) {
     a.settings.maxDate = this._formatDate(a, h)
    };
    if ("disabled" in r) {
     if (r.disabled) {
      this._disableDatepicker(i)
     } else {
      this._enableDatepicker(i)
     }
    };
    this._attachments(t(i), a);
    this._autoSize(a);
    this._setDate(a, u);
    this._updateAlternate(a);
    this._updateDatepicker(a)
   }
  },
  _changeDatepicker: function(t, e, i) {
   this._optionDatepicker(t, e, i)
  },
  _refreshDatepicker: function(t) {
   var e = this._getInst(t);
   if (e) {
    this._updateDatepicker(e)
   }
  },
  _setDateDatepicker: function(t, e) {
   var i = this._getInst(t);
   if (i) {
    this._setDate(i, e);
    this._updateDatepicker(i);
    this._updateAlternate(i)
   }
  },
  _getDateDatepicker: function(t, e) {
   var i = this._getInst(t);
   if (i && !i.inline) {
    this._setDateFromField(i, e)
   };
   return (i ? this._getDate(i) : null)
  },
  _doKeyDown: function(e) {
   var o, r, n, i = t.datepicker._getInst(e.target),
    s = !0,
    a = i.dpDiv.is(".ui-datepicker-rtl");
   i._keyEvent = !0;
   if (t.datepicker._datepickerShowing) {
    switch (e.keyCode) {
     case 9:
      t.datepicker._hideDatepicker();
      s = !1;
      break;
     case 13:
      n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", i.dpDiv);
      if (n[0]) {
       t.datepicker._selectDay(e.target, i.selectedMonth, i.selectedYear, n[0])
      };
      o = t.datepicker._get(i, "onSelect");
      if (o) {
       r = t.datepicker._formatDate(i);
       o.apply((i.input ? i.input[0] : null), [r, i])
      } else {
       t.datepicker._hideDatepicker()
      };
      return !1;
     case 27:
      t.datepicker._hideDatepicker();
      break;
     case 33:
      t.datepicker._adjustDate(e.target, (e.ctrlKey ? -t.datepicker._get(i, "stepBigMonths") : -t.datepicker._get(i, "stepMonths")), "M");
      break;
     case 34:
      t.datepicker._adjustDate(e.target, (e.ctrlKey ? +t.datepicker._get(i, "stepBigMonths") : +t.datepicker._get(i, "stepMonths")), "M");
      break;
     case 35:
      if (e.ctrlKey || e.metaKey) {
       t.datepicker._clearDate(e.target)
      };
      s = e.ctrlKey || e.metaKey;
      break;
     case 36:
      if (e.ctrlKey || e.metaKey) {
       t.datepicker._gotoToday(e.target)
      };
      s = e.ctrlKey || e.metaKey;
      break;
     case 37:
      if (e.ctrlKey || e.metaKey) {
       t.datepicker._adjustDate(e.target, (a ? +1 : -1), "D")
      };
      s = e.ctrlKey || e.metaKey;
      if (e.originalEvent.altKey) {
       t.datepicker._adjustDate(e.target, (e.ctrlKey ? -t.datepicker._get(i, "stepBigMonths") : -t.datepicker._get(i, "stepMonths")), "M")
      };
      break;
     case 38:
      if (e.ctrlKey || e.metaKey) {
       t.datepicker._adjustDate(e.target, -7, "D")
      };
      s = e.ctrlKey || e.metaKey;
      break;
     case 39:
      if (e.ctrlKey || e.metaKey) {
       t.datepicker._adjustDate(e.target, (a ? -1 : +1), "D")
      };
      s = e.ctrlKey || e.metaKey;
      if (e.originalEvent.altKey) {
       t.datepicker._adjustDate(e.target, (e.ctrlKey ? +t.datepicker._get(i, "stepBigMonths") : +t.datepicker._get(i, "stepMonths")), "M")
      };
      break;
     case 40:
      if (e.ctrlKey || e.metaKey) {
       t.datepicker._adjustDate(e.target, +7, "D")
      };
      s = e.ctrlKey || e.metaKey;
      break;
     default:
      s = !1
    }
   } else if (e.keyCode === 36 && e.ctrlKey) {
    t.datepicker._showDatepicker(this)
   } else {
    s = !1
   };
   if (s) {
    e.preventDefault();
    e.stopPropagation()
   }
  },
  _doKeyPress: function(e) {
   var s, i, n = t.datepicker._getInst(e.target);
   if (t.datepicker._get(n, "constrainInput")) {
    s = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat"));
    i = String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode);
    return e.ctrlKey || e.metaKey || (i < " " || !s || s.indexOf(i) > -1)
   }
  },
  _doKeyUp: function(e) {
   var n, i = t.datepicker._getInst(e.target);
   if (i.input.val() !== i.lastVal) {
    try {
     n = t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), (i.input ? i.input.val() : null), t.datepicker._getFormatConfig(i));
     if (n) {
      t.datepicker._setDateFromField(i);
      t.datepicker._updateAlternate(i);
      t.datepicker._updateDatepicker(i)
     }
    } catch (s) {}
   };
   return !0
  },
  _showDatepicker: function(e) {
   e = e.target || e;
   if (e.nodeName.toLowerCase() !== "input") {
    e = t("input", e.parentNode)[0]
   };
   if (t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) {
    return
   };
   var i, h, l, s, a, o, r;
   i = t.datepicker._getInst(e);
   if (t.datepicker._curInst && t.datepicker._curInst !== i) {
    t.datepicker._curInst.dpDiv.stop(!0, !0);
    if (i && t.datepicker._datepickerShowing) {
     t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])
    }
   };
   h = t.datepicker._get(i, "beforeShow");
   l = h ? h.apply(e, [e, i]) : {};
   if (l === !1) {
    return
   };
   n(i.settings, l);
   i.lastVal = null;
   t.datepicker._lastInput = e;
   t.datepicker._setDateFromField(i);
   if (t.datepicker._inDialog) {
    e.value = ""
   };
   if (!t.datepicker._pos) {
    t.datepicker._pos = t.datepicker._findPos(e);
    t.datepicker._pos[1] += e.offsetHeight
   };
   s = !1;
   t(e).parents().each(function() {
    s |= t(this).css("position") === "fixed";
    return !s
   });
   a = {
    left: t.datepicker._pos[0],
    top: t.datepicker._pos[1]
   };
   t.datepicker._pos = null;
   i.dpDiv.empty();
   i.dpDiv.css({
    position: "absolute",
    display: "block",
    top: "-1000px"
   });
   t.datepicker._updateDatepicker(i);
   a = t.datepicker._checkOffset(i, a, s);
   i.dpDiv.css({
    position: (t.datepicker._inDialog && t.blockUI ? "static" : (s ? "fixed" : "absolute")),
    display: "none",
    left: a.left + "px",
    top: a.top + "px"
   });
   if (!i.inline) {
    o = t.datepicker._get(i, "showAnim");
    r = t.datepicker._get(i, "duration");
    i.dpDiv.zIndex(t(e).zIndex() + 1);
    t.datepicker._datepickerShowing = !0;
    if (t.effects && t.effects.effect[o]) {
     i.dpDiv.show(o, t.datepicker._get(i, "showOptions"), r)
    } else {
     i.dpDiv[o || "show"](o ? r : null)
    };
    if (i.input.is(":visible") && !i.input.is(":disabled")) {
     i.input.focus()
    };
    t.datepicker._curInst = i
   }
  },
  _updateDatepicker: function(e) {
   this.maxRows = 4;
   o = e;
   e.dpDiv.empty().append(this._generateHTML(e));
   this._attachHandlers(e);
   e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
   var n, s = this._getNumberOfMonths(e),
    i = s[1],
    a = 17;
   e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
   if (i > 1) {
    e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", (a * i) + "em")
   };
   e.dpDiv[(s[0] !== 1 || s[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
   e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
   if (e === t.datepicker._curInst && t.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] !== document.activeElement) {
    e.input.focus()
   };
   if (e.yearshtml) {
    n = e.yearshtml;
    setTimeout(function() {
     if (n === e.yearshtml && e.yearshtml) {
      e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml)
     };
     n = e.yearshtml = null
    }, 0)
   }
  },
  _getBorders: function(t) {
   var e = function(t) {
    return {
     thin: 1,
     medium: 2,
     thick: 3
    }[t] || t
   };
   return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
  },
  _checkOffset: function(e, i, s) {
   var n = e.dpDiv.outerWidth(),
    a = e.dpDiv.outerHeight(),
    h = e.input ? e.input.outerWidth() : 0,
    r = e.input ? e.input.outerHeight() : 0,
    o = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
    l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
   i.left -= (this._get(e, "isRTL") ? (n - h) : 0);
   i.left -= (s && i.left === e.input.offset().left) ? t(document).scrollLeft() : 0;
   i.top -= (s && i.top === (e.input.offset().top + r)) ? t(document).scrollTop() : 0;
   i.left -= Math.min(i.left, (i.left + n > o && o > n) ? Math.abs(i.left + n - o) : 0);
   i.top -= Math.min(i.top, (i.top + a > l && l > a) ? Math.abs(a + r) : 0);
   return i
  },
  _findPos: function(e) {
   var i, n = this._getInst(e),
    s = this._get(n, "isRTL");
   while (e && (e.type === "hidden" || e.nodeType !== 1 || t.expr.filters.hidden(e))) {
    e = e[s ? "previousSibling" : "nextSibling"]
   };
   i = t(e).offset();
   return [i.left, i.top]
  },
  _hideDatepicker: function(e) {
   var n, a, o, r, s = this._curInst;
   if (!s || (e && s !== t.data(e, i))) {
    return
   };
   if (this._datepickerShowing) {
    n = this._get(s, "showAnim");
    a = this._get(s, "duration");
    o = function() {
     t.datepicker._tidyDialog(s)
    };
    if (t.effects && (t.effects.effect[n] || t.effects[n])) {
     s.dpDiv.hide(n, t.datepicker._get(s, "showOptions"), a, o)
    } else {
     s.dpDiv[(n === "slideDown" ? "slideUp" : (n === "fadeIn" ? "fadeOut" : "hide"))]((n ? a : null), o)
    };
    if (!n) {
     o()
    };
    this._datepickerShowing = !1;
    r = this._get(s, "onClose");
    if (r) {
     r.apply((s.input ? s.input[0] : null), [(s.input ? s.input.val() : ""), s])
    };
    this._lastInput = null;
    if (this._inDialog) {
     this._dialogInput.css({
      position: "absolute",
      left: "0",
      top: "-100px"
     });
     if (t.blockUI) {
      t.unblockUI();
      t("body").append(this.dpDiv)
     }
    };
    this._inDialog = !1
   }
  },
  _tidyDialog: function(t) {
   t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
  },
  _checkExternalClick: function(e) {
   if (!t.datepicker._curInst) {
    return
   };
   var i = t(e.target),
    s = t.datepicker._getInst(i[0]);
   if (((i[0].id !== t.datepicker._mainDivId && i.parents("#" + t.datepicker._mainDivId).length === 0 && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && !(t.datepicker._inDialog && t.blockUI))) || (i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s)) {
    t.datepicker._hideDatepicker()
   }
  },
  _adjustDate: function(e, i, s) {
   var o = t(e),
    n = this._getInst(o[0]);
   if (this._isDisabledDatepicker(o[0])) {
    return
   };
   this._adjustInstDate(n, i + (s === "M" ? this._get(n, "showCurrentAtPos") : 0), s);
   this._updateDatepicker(n)
  },
  _gotoToday: function(e) {
   var s, n = t(e),
    i = this._getInst(n[0]);
   if (this._get(i, "gotoCurrent") && i.currentDay) {
    i.selectedDay = i.currentDay;
    i.drawMonth = i.selectedMonth = i.currentMonth;
    i.drawYear = i.selectedYear = i.currentYear
   } else {
    s = new Date();
    i.selectedDay = s.getDate();
    i.drawMonth = i.selectedMonth = s.getMonth();
    i.drawYear = i.selectedYear = s.getFullYear()
   };
   this._notifyChange(i);
   this._adjustDate(n)
  },
  _selectMonthYear: function(e, i, s) {
   var o = t(e),
    n = this._getInst(o[0]);
   n["selected" + (s === "M" ? "Month" : "Year")] = n["draw" + (s === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
   this._notifyChange(n);
   this._adjustDate(o)
  },
  _selectDay: function(e, i, s, n) {
   var o, a = t(e);
   if (t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0])) {
    return
   };
   o = this._getInst(a[0]);
   o.selectedDay = o.currentDay = t("a", n).html();
   o.selectedMonth = o.currentMonth = i;
   o.selectedYear = o.currentYear = s;
   this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
  },
  _clearDate: function(e) {
   var i = t(e);
   this._selectDate(i, "")
  },
  _selectDate: function(e, i) {
   var n, o = t(e),
    s = this._getInst(o[0]);
   i = (i != null ? i : this._formatDate(s));
   if (s.input) {
    s.input.val(i)
   };
   this._updateAlternate(s);
   n = this._get(s, "onSelect");
   if (n) {
    n.apply((s.input ? s.input[0] : null), [i, s])
   } else if (s.input) {
    s.input.trigger("change")
   };
   if (s.inline) {
    this._updateDatepicker(s)
   } else {
    this._hideDatepicker();
    this._lastInput = s.input[0];
    if (typeof(s.input[0]) !== "object") {
     s.input.focus()
    };
    this._lastInput = null
   }
  },
  _updateAlternate: function(e) {
   var o, n, s, i = this._get(e, "altField");
   if (i) {
    o = this._get(e, "altFormat") || this._get(e, "dateFormat");
    n = this._getDate(e);
    s = this.formatDate(o, n, this._getFormatConfig(e));
    t(i).each(function() {
     t(this).val(s)
    })
   }
  },
  noWeekends: function(t) {
   var e = t.getDay();
   return [(e > 0 && e < 6), ""]
  },
  iso8601Week: function(t) {
   var i, e = new Date(t.getTime());
   e.setDate(e.getDate() + 4 - (e.getDay() || 7));
   i = e.getTime();
   e.setMonth(0);
   e.setDate(1);
   return Math.floor(Math.round((i - e) / 86400000) / 7) + 1
  },
  parseDate: function(e, i, s) {
   if (e == null || i == null) {
    throw "Invalid arguments"
   };
   i = (typeof i === "object" ? i.toString() : i + "");
   if (i === "") {
    return null
   };
   var r, g, m, a = 0,
    v = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
    w = (typeof v !== "string" ? v : new Date().getFullYear() % 100 + parseInt(v, 10)),
    k = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
    x = (s ? s.dayNames : null) || this._defaults.dayNames,
    y = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
    D = (s ? s.monthNames : null) || this._defaults.monthNames,
    o = -1,
    l = -1,
    h = -1,
    f = -1,
    d = !1,
    n, c = function(t) {
     var i = (r + 1 < e.length && e.charAt(r + 1) === t);
     if (i) {
      r++
     };
     return i
    },
    u = function(t) {
     var o = c(t),
      n = (t === "@" ? 14 : (t === "!" ? 20 : (t === "y" && o ? 4 : (t === "o" ? 3 : 2)))),
      s = new RegExp("^\\d{1," + n + "}"),
      e = i.substring(a).match(s);
     if (!e) {
      throw "Missing number at position " + a
     };
     a += e[0].length;
     return parseInt(e[0], 10)
    },
    b = function(e, s, n) {
     var o = -1,
      r = t.map(c(e) ? n : s, function(t, e) {
       return [
        [e, t]
       ]
      }).sort(function(t, e) {
       return -(t[1].length - e[1].length)
      });
     t.each(r, function(t, e) {
      var s = e[1];
      if (i.substr(a, s.length).toLowerCase() === s.toLowerCase()) {
       o = e[0];
       a += s.length;
       return !1
      }
     });
     if (o !== -1) {
      return o + 1
     } else {
      throw "Unknown name at position " + a
     }
    },
    p = function() {
     if (i.charAt(a) !== e.charAt(r)) {
      throw "Unexpected literal at position " + a
     };
     a++
    };
   for (r = 0; r < e.length; r++) {
    if (d) {
     if (e.charAt(r) === "'" && !c("'")) {
      d = !1
     } else {
      p()
     }
    } else {
     switch (e.charAt(r)) {
      case "d":
       h = u("d");
       break;
      case "D":
       b("D", k, x);
       break;
      case "o":
       f = u("o");
       break;
      case "m":
       l = u("m");
       break;
      case "M":
       l = b("M", y, D);
       break;
      case "y":
       o = u("y");
       break;
      case "@":
       n = new Date(u("@"));
       o = n.getFullYear();
       l = n.getMonth() + 1;
       h = n.getDate();
       break;
      case "!":
       n = new Date((u("!") - this._ticksTo1970) / 10000);
       o = n.getFullYear();
       l = n.getMonth() + 1;
       h = n.getDate();
       break;
      case "'":
       if (c("'")) {
        p()
       } else {
        d = !0
       };
       break;
      default:
       p()
     }
    }
   };
   if (a < i.length) {
    m = i.substr(a);
    if (!/^\s+/.test(m)) {
     throw "Extra/unparsed characters found in date: " + m
    }
   };
   if (o === -1) {
    o = new Date().getFullYear()
   } else if (o < 100) {
    o += new Date().getFullYear() - new Date().getFullYear() % 100 + (o <= w ? 0 : -100)
   };
   if (f > -1) {
    l = 1;
    h = f;
    do {
     g = this._getDaysInMonth(o, l - 1);
     if (h <= g) {
      break
     };
     l++;
     h -= g
    }
    while (!0);
   };
   n = this._daylightSavingAdjust(new Date(o, l - 1, h));
   if (n.getFullYear() !== o || n.getMonth() + 1 !== l || n.getDate() !== h) {
    throw "Invalid date"
   };
   return n
  },
  ATOM: "yy-mm-dd",
  COOKIE: "D, dd M yy",
  ISO_8601: "yy-mm-dd",
  RFC_822: "D, d M y",
  RFC_850: "DD, dd-M-y",
  RFC_1036: "D, d M y",
  RFC_1123: "D, d M yy",
  RFC_2822: "D, d M yy",
  RSS: "D, d M y",
  TICKS: "!",
  TIMESTAMP: "@",
  W3C: "yy-mm-dd",
  _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
  formatDate: function(t, e, i) {
   if (!e) {
    return ""
   };
   var n, u = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
    c = (i ? i.dayNames : null) || this._defaults.dayNames,
    h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
    f = (i ? i.monthNames : null) || this._defaults.monthNames,
    o = function(e) {
     var i = (n + 1 < t.length && t.charAt(n + 1) === e);
     if (i) {
      n++
     };
     return i
    },
    r = function(t, e, i) {
     var s = "" + e;
     if (o(t)) {
      while (s.length < i) {
       s = "0" + s
      }
     };
     return s
    },
    l = function(t, e, i, s) {
     return (o(t) ? s[e] : i[e])
    },
    s = "",
    a = !1;
   if (e) {
    for (n = 0; n < t.length; n++) {
     if (a) {
      if (t.charAt(n) === "'" && !o("'")) {
       a = !1
      } else {
       s += t.charAt(n)
      }
     } else {
      switch (t.charAt(n)) {
       case "d":
        s += r("d", e.getDate(), 2);
        break;
       case "D":
        s += l("D", e.getDay(), u, c);
        break;
       case "o":
        s += r("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 86400000), 3);
        break;
       case "m":
        s += r("m", e.getMonth() + 1, 2);
        break;
       case "M":
        s += l("M", e.getMonth(), h, f);
        break;
       case "y":
        s += (o("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100);
        break;
       case "@":
        s += e.getTime();
        break;
       case "!":
        s += e.getTime() * 10000 + this._ticksTo1970;
        break;
       case "'":
        if (o("'")) {
         s += "'"
        } else {
         a = !0
        };
        break;
       default:
        s += t.charAt(n)
      }
     }
    }
   };
   return s
  },
  _possibleChars: function(t) {
   var e, i = "",
    s = !1,
    n = function(i) {
     var s = (e + 1 < t.length && t.charAt(e + 1) === i);
     if (s) {
      e++
     };
     return s
    };
   for (e = 0; e < t.length; e++) {
    if (s) {
     if (t.charAt(e) === "'" && !n("'")) {
      s = !1
     } else {
      i += t.charAt(e)
     }
    } else {
     switch (t.charAt(e)) {
      case "d":
      case "m":
      case "y":
      case "@":
       i += "0123456789";
       break;
      case "D":
      case "M":
       return null;
      case "'":
       if (n("'")) {
        i += "'"
       } else {
        s = !0
       };
       break;
      default:
       i += t.charAt(e)
     }
    }
   };
   return i
  },
  _get: function(t, i) {
   return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
  },
  _setDateFromField: function(t, e) {
   if (t.input.val() === t.lastVal) {
    return
   };
   var a = this._get(t, "dateFormat"),
    n = t.lastVal = t.input ? t.input.val() : null,
    o = this._getDefaultDate(t),
    i = o,
    r = this._getFormatConfig(t);
   try {
    i = this.parseDate(a, n, r) || o
   } catch (s) {
    n = (e ? "" : n)
   };
   t.selectedDay = i.getDate();
   t.drawMonth = t.selectedMonth = i.getMonth();
   t.drawYear = t.selectedYear = i.getFullYear();
   t.currentDay = (n ? i.getDate() : 0);
   t.currentMonth = (n ? i.getMonth() : 0);
   t.currentYear = (n ? i.getFullYear() : 0);
   this._adjustInstDate(t)
  },
  _getDefaultDate: function(t) {
   return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()))
  },
  _determineDate: function(e, i, s) {
   var a = function(t) {
     var e = new Date();
     e.setDate(e.getDate() + t);
     return e
    },
    o = function(i) {
     try {
      return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
     } catch (n) {};
     var l = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(),
      r = l.getFullYear(),
      a = l.getMonth(),
      o = l.getDate(),
      h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
      s = h.exec(i);
     while (s) {
      switch (s[2] || "d") {
       case "d":
       case "D":
        o += parseInt(s[1], 10);
        break;
       case "w":
       case "W":
        o += parseInt(s[1], 10) * 7;
        break;
       case "m":
       case "M":
        a += parseInt(s[1], 10);
        o = Math.min(o, t.datepicker._getDaysInMonth(r, a));
        break;
       case "y":
       case "Y":
        r += parseInt(s[1], 10);
        o = Math.min(o, t.datepicker._getDaysInMonth(r, a));
        break
      };
      s = h.exec(i)
     };
     return new Date(r, a, o)
    },
    n = (i == null || i === "" ? s : (typeof i === "string" ? o(i) : (typeof i === "number" ? (isNaN(i) ? s : a(i)) : new Date(i.getTime()))));
   n = (n && n.toString() === "Invalid Date" ? s : n);
   if (n) {
    n.setHours(0);
    n.setMinutes(0);
    n.setSeconds(0);
    n.setMilliseconds(0)
   };
   return this._daylightSavingAdjust(n)
  },
  _daylightSavingAdjust: function(t) {
   if (!t) {
    return null
   };
   t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0);
   return t
  },
  _setDate: function(t, e, i) {
   var o = !e,
    a = t.selectedMonth,
    n = t.selectedYear,
    s = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
   t.selectedDay = t.currentDay = s.getDate();
   t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth();
   t.drawYear = t.selectedYear = t.currentYear = s.getFullYear();
   if ((a !== t.selectedMonth || n !== t.selectedYear) && !i) {
    this._notifyChange(t)
   };
   this._adjustInstDate(t);
   if (t.input) {
    t.input.val(o ? "" : this._formatDate(t))
   }
  },
  _getDate: function(t) {
   var e = (!t.currentYear || (t.input && t.input.val() === "") ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)));
   return e
  },
  _attachHandlers: function(e) {
   var n = this._get(e, "stepMonths"),
    i = "#" + e.id.replace(/\\\\/g, "\\");
   e.dpDiv.find("[data-handler]").map(function() {
    var e = {
     prev: function() {
      window["DP_jQuery_" + s].datepicker._adjustDate(i, -n, "M")
     },
     next: function() {
      window["DP_jQuery_" + s].datepicker._adjustDate(i, +n, "M")
     },
     hide: function() {
      window["DP_jQuery_" + s].datepicker._hideDatepicker()
     },
     today: function() {
      window["DP_jQuery_" + s].datepicker._gotoToday(i)
     },
     selectDay: function() {
      window["DP_jQuery_" + s].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
      return !1
     },
     selectMonth: function() {
      window["DP_jQuery_" + s].datepicker._selectMonthYear(i, this, "M");
      return !1
     },
     selectYear: function() {
      window["DP_jQuery_" + s].datepicker._selectMonthYear(i, this, "Y");
      return !1
     }
    };
    t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
   })
  },
  _generateHTML: function(t) {
   var b, l, I, u, Y, y, F, E, V, h, j, U, Q, Z, J, N, k, G, R, D, o, p, B, g, K, f, n, q, W, L, O, x, A, i, C, P, v, c, w, H = new Date(),
    T = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
    a = this._get(t, "isRTL"),
    it = this._get(t, "showButtonPanel"),
    X = this._get(t, "hideIfNoPrevNext"),
    z = this._get(t, "navigationAsDateFormat"),
    r = this._getNumberOfMonths(t),
    et = this._get(t, "showCurrentAtPos"),
    tt = this._get(t, "stepMonths"),
    S = (r[0] !== 1 || r[1] !== 1),
    M = this._daylightSavingAdjust((!t.currentDay ? new Date(9999, 9, 9) : new Date(t.currentYear, t.currentMonth, t.currentDay))),
    m = this._getMinMaxDate(t, "min"),
    d = this._getMinMaxDate(t, "max"),
    e = t.drawMonth - et,
    s = t.drawYear;
   if (e < 0) {
    e += 12;
    s--
   };
   if (d) {
    b = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - (r[0] * r[1]) + 1, d.getDate()));
    b = (m && b < m ? m : b);
    while (this._daylightSavingAdjust(new Date(s, e, 1)) > b) {
     e--;
     if (e < 0) {
      e = 11;
      s--
     }
    }
   };
   t.drawMonth = e;
   t.drawYear = s;
   l = this._get(t, "prevText");
   l = (!z ? l : this.formatDate(l, this._daylightSavingAdjust(new Date(s, e - tt, 1)), this._getFormatConfig(t)));
   I = (this._canAdjustMonth(t, -1, s, e) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + l + "'><span class='ui-icon ui-icon-circle-triangle-" + (a ? "e" : "w") + "'>" + l + "</span></a>" : (X ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + l + "'><span class='ui-icon ui-icon-circle-triangle-" + (a ? "e" : "w") + "'>" + l + "</span></a>"));
   u = this._get(t, "nextText");
   u = (!z ? u : this.formatDate(u, this._daylightSavingAdjust(new Date(s, e + tt, 1)), this._getFormatConfig(t)));
   Y = (this._canAdjustMonth(t, +1, s, e) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + u + "'><span class='ui-icon ui-icon-circle-triangle-" + (a ? "w" : "e") + "'>" + u + "</span></a>" : (X ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + u + "'><span class='ui-icon ui-icon-circle-triangle-" + (a ? "w" : "e") + "'>" + u + "</span></a>"));
   y = this._get(t, "currentText");
   F = (this._get(t, "gotoCurrent") && t.currentDay ? M : T);
   y = (!z ? y : this.formatDate(y, F, this._getFormatConfig(t)));
   E = (!t.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>" : "");
   V = (it) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (a ? E : "") + (this._isInRange(t, F) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + y + "</button>" : "") + (a ? "" : E) + "</div>" : "";
   h = parseInt(this._get(t, "firstDay"), 10);
   h = (isNaN(h) ? 0 : h);
   j = this._get(t, "showWeek");
   U = this._get(t, "dayNames");
   Q = this._get(t, "dayNamesMin");
   Z = this._get(t, "monthNames");
   J = this._get(t, "monthNamesShort");
   N = this._get(t, "beforeShowDay");
   k = this._get(t, "showOtherMonths");
   G = this._get(t, "selectOtherMonths");
   R = this._getDefaultDate(t);
   D = "";
   o;
   for (p = 0; p < r[0]; p++) {
    B = "";
    this.maxRows = 4;
    for (g = 0; g < r[1]; g++) {
     K = this._daylightSavingAdjust(new Date(s, e, t.selectedDay));
     f = " ui-corner-all";
     n = "";
     if (S) {
      n += "<div class='ui-datepicker-group";
      if (r[1] > 1) {
       switch (g) {
        case 0:
         n += " ui-datepicker-group-first";
         f = " ui-corner-" + (a ? "right" : "left");
         break;
        case r[1] - 1:
         n += " ui-datepicker-group-last";
         f = " ui-corner-" + (a ? "left" : "right");
         break;
        default:
         n += " ui-datepicker-group-middle";
         f = "";
         break
       }
      };
      n += "'>"
     };
     n += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + f + "'>" + (/all|left/.test(f) && p === 0 ? (a ? Y : I) : "") + (/all|right/.test(f) && p === 0 ? (a ? I : Y) : "") + this._generateMonthYearHeader(t, e, s, m, d, p > 0 || g > 0, Z, J) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
     q = (j ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "");
     for (o = 0; o < 7; o++) {
      W = (o + h) % 7;
      q += "<th" + ((o + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + U[W] + "'>" + Q[W] + "</span></th>"
     };
     n += q + "</tr></thead><tbody>";
     L = this._getDaysInMonth(s, e);
     if (s === t.selectedYear && e === t.selectedMonth) {
      t.selectedDay = Math.min(t.selectedDay, L)
     };
     O = (this._getFirstDayOfMonth(s, e) - h + 7) % 7;
     x = Math.ceil((O + L) / 7);
     A = (S ? this.maxRows > x ? this.maxRows : x : x);
     this.maxRows = A;
     i = this._daylightSavingAdjust(new Date(s, e, 1 - O));
     for (C = 0; C < A; C++) {
      n += "<tr>";
      P = (!j ? "" : "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(i) + "</td>");
      for (o = 0; o < 7; o++) {
       v = (N ? N.apply((t.input ? t.input[0] : null), [i]) : [!0, ""]);
       c = (i.getMonth() !== e);
       w = (c && !G) || !v[0] || (m && i < m) || (d && i > d);
       P += "<td class='" + ((o + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (c ? " ui-datepicker-other-month" : "") + ((i.getTime() === K.getTime() && e === t.selectedMonth && t._keyEvent) || (R.getTime() === i.getTime() && R.getTime() === K.getTime()) ? " " + this._dayOverClass : "") + (w ? " " + this._unselectableClass + " ui-state-disabled" : "") + (c && !k ? "" : " " + v[1] + (i.getTime() === M.getTime() ? " " + this._currentClass : "") + (i.getTime() === T.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!c || k) && v[2] ? " title='" + v[2].replace(/'/g, "&#39;") + "'" : "") + (w ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (c && !k ? "&#xa0;" : (w ? "<span class='ui-state-default'>" + i.getDate() + "</span>" : "<a class='ui-state-default" + (i.getTime() === T.getTime() ? " ui-state-highlight" : "") + (i.getTime() === M.getTime() ? " ui-state-active" : "") + (c ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "</a>")) + "</td>";
       i.setDate(i.getDate() + 1);
       i = this._daylightSavingAdjust(i)
      };
      n += P + "</tr>"
     };
     e++;
     if (e > 11) {
      e = 0;
      s++
     };
     n += "</tbody></table>" + (S ? "</div>" + ((r[0] > 0 && g === r[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
     B += n
    };
    D += B
   };
   D += V;
   t._keyEvent = !1;
   return D
  },
  _generateMonthYearHeader: function(t, e, i, s, a, u, w, y) {
   var m, b, o, p, g, d, n, h, f = this._get(t, "changeMonth"),
    c = this._get(t, "changeYear"),
    v = this._get(t, "showMonthAfterYear"),
    r = "<div class='ui-datepicker-title'>",
    l = "";
   if (u || !f) {
    l += "<span class='ui-datepicker-month'>" + w[e] + "</span>"
   } else {
    m = (s && s.getFullYear() === i);
    b = (a && a.getFullYear() === i);
    l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
    for (o = 0; o < 12; o++) {
     if ((!m || o >= s.getMonth()) && (!b || o <= a.getMonth())) {
      l += "<option value='" + o + "'" + (o === e ? " selected='selected'" : "") + ">" + y[o] + "</option>"
     }
    };
    l += "</select>"
   };
   if (!v) {
    r += l + (u || !(f && c) ? "&#xa0;" : "")
   };
   if (!t.yearshtml) {
    t.yearshtml = "";
    if (u || !c) {
     r += "<span class='ui-datepicker-year'>" + i + "</span>"
    } else {
     p = this._get(t, "yearRange").split(":");
     g = new Date().getFullYear();
     d = function(t) {
      var e = (t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : (t.match(/[+\-].*/) ? g + parseInt(t, 10) : parseInt(t, 10)));
      return (isNaN(e) ? g : e)
     };
     n = d(p[0]);
     h = Math.max(n, d(p[1] || ""));
     n = (s ? Math.max(n, s.getFullYear()) : n);
     h = (a ? Math.min(h, a.getFullYear()) : h);
     t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
     for (; n <= h; n++) {
      t.yearshtml += "<option value='" + n + "'" + (n === i ? " selected='selected'" : "") + ">" + n + "</option>"
     };
     t.yearshtml += "</select>";
     r += t.yearshtml;
     t.yearshtml = null
    }
   };
   r += this._get(t, "yearSuffix");
   if (v) {
    r += (u || !(f && c) ? "&#xa0;" : "") + l
   };
   r += "</div>";
   return r
  },
  _adjustInstDate: function(t, e, i) {
   var n = t.drawYear + (i === "Y" ? e : 0),
    o = t.drawMonth + (i === "M" ? e : 0),
    a = Math.min(t.selectedDay, this._getDaysInMonth(n, o)) + (i === "D" ? e : 0),
    s = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, o, a)));
   t.selectedDay = s.getDate();
   t.drawMonth = t.selectedMonth = s.getMonth();
   t.drawYear = t.selectedYear = s.getFullYear();
   if (i === "M" || i === "Y") {
    this._notifyChange(t)
   }
  },
  _restrictMinMax: function(t, e) {
   var s = this._getMinMaxDate(t, "min"),
    i = this._getMinMaxDate(t, "max"),
    n = (s && e < s ? s : e);
   return (i && n > i ? i : n)
  },
  _notifyChange: function(t) {
   var e = this._get(t, "onChangeMonthYear");
   if (e) {
    e.apply((t.input ? t.input[0] : null), [t.selectedYear, t.selectedMonth + 1, t])
   }
  },
  _getNumberOfMonths: function(t) {
   var e = this._get(t, "numberOfMonths");
   return (e == null ? [1, 1] : (typeof e === "number" ? [1, e] : e))
  },
  _getMinMaxDate: function(t, e) {
   return this._determineDate(t, this._get(t, e + "Date"), null)
  },
  _getDaysInMonth: function(t, e) {
   return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
  },
  _getFirstDayOfMonth: function(t, e) {
   return new Date(t, e, 1).getDay()
  },
  _canAdjustMonth: function(t, e, i, s) {
   var o = this._getNumberOfMonths(t),
    n = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : o[0] * o[1]), 1));
   if (e < 0) {
    n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth()))
   };
   return this._isInRange(t, n)
  },
  _isInRange: function(t, e) {
   var i, o, r = this._getMinMaxDate(t, "min"),
    l = this._getMinMaxDate(t, "max"),
    s = null,
    n = null,
    a = this._get(t, "yearRange");
   if (a) {
    i = a.split(":");
    o = new Date().getFullYear();
    s = parseInt(i[0], 10);
    n = parseInt(i[1], 10);
    if (i[0].match(/[+\-].*/)) {
     s += o
    };
    if (i[1].match(/[+\-].*/)) {
     n += o
    }
   };
   return ((!r || e.getTime() >= r.getTime()) && (!l || e.getTime() <= l.getTime()) && (!s || e.getFullYear() >= s) && (!n || e.getFullYear() <= n))
  },
  _getFormatConfig: function(t) {
   var e = this._get(t, "shortYearCutoff");
   e = (typeof e !== "string" ? e : new Date().getFullYear() % 100 + parseInt(e, 10));
   return {
    shortYearCutoff: e,
    dayNamesShort: this._get(t, "dayNamesShort"),
    dayNames: this._get(t, "dayNames"),
    monthNamesShort: this._get(t, "monthNamesShort"),
    monthNames: this._get(t, "monthNames")
   }
  },
  _formatDate: function(t, e, i, s) {
   if (!e) {
    t.currentDay = t.selectedDay;
    t.currentMonth = t.selectedMonth;
    t.currentYear = t.selectedYear
   };
   var n = (e ? (typeof e === "object" ? e : this._daylightSavingAdjust(new Date(s, i, e))) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)));
   return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
  }
 });

 function r(e) {
  var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
  return e.delegate(i, "mouseout", function() {
   t(this).removeClass("ui-state-hover");
   if (this.className.indexOf("ui-datepicker-prev") !== -1) {
    t(this).removeClass("ui-datepicker-prev-hover")
   };
   if (this.className.indexOf("ui-datepicker-next") !== -1) {
    t(this).removeClass("ui-datepicker-next-hover")
   }
  }).delegate(i, "mouseover", function() {
   if (!t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0])) {
    t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
    t(this).addClass("ui-state-hover");
    if (this.className.indexOf("ui-datepicker-prev") !== -1) {
     t(this).addClass("ui-datepicker-prev-hover")
    };
    if (this.className.indexOf("ui-datepicker-next") !== -1) {
     t(this).addClass("ui-datepicker-next-hover")
    }
   }
  })
 };

 function n(e, i) {
  t.extend(e, i);
  for (var s in i) {
   if (i[s] == null) {
    e[s] = i[s]
   }
  };
  return e
 };
 t.fn.datepicker = function(e) {
  if (!this.length) {
   return this
  };
  if (!t.datepicker.initialized) {
   t(document).mousedown(t.datepicker._checkExternalClick);
   t.datepicker.initialized = !0
  };
  if (t("#" + t.datepicker._mainDivId).length === 0) {
   t("body").append(t.datepicker.dpDiv)
  };
  var i = Array.prototype.slice.call(arguments, 1);
  if (typeof e === "string" && (e === "isDisabled" || e === "getDate" || e === "widget")) {
   return t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  };
  if (e === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
   return t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  };
  return this.each(function() {
   typeof e === "string" ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
  })
 };
 t.datepicker = new a();
 t.datepicker.initialized = !1;
 t.datepicker.uuid = new Date().getTime();
 t.datepicker.version = "1.10.2";
 window["DP_jQuery_" + s] = t
})(jQuery);
(function(t, e) {
 var s = {
   buttons: !0,
   height: !0,
   maxHeight: !0,
   maxWidth: !0,
   minHeight: !0,
   minWidth: !0,
   width: !0
  },
  i = {
   maxHeight: !0,
   maxWidth: !0,
   minHeight: !0,
   minWidth: !0
  };
 t.widget("ui.dialog", {
  version: "1.10.2",
  options: {
   appendTo: "body",
   autoOpen: !0,
   buttons: [],
   closeOnEscape: !0,
   closeText: "close",
   dialogClass: "",
   draggable: !0,
   hide: null,
   height: "auto",
   maxHeight: null,
   maxWidth: null,
   minHeight: 150,
   minWidth: 150,
   modal: !1,
   position: {
    my: "center",
    at: "center",
    of: window,
    collision: "fit",
    using: function(e) {
     var i = t(this).css(e).offset().top;
     if (i < 0) {
      t(this).css("top", e.top - i)
     }
    }
   },
   resizable: !0,
   show: null,
   title: null,
   width: 300,
   beforeClose: null,
   close: null,
   drag: null,
   dragStart: null,
   dragStop: null,
   focus: null,
   open: null,
   resize: null,
   resizeStart: null,
   resizeStop: null
  },
  _create: function() {
   this.originalCss = {
    display: this.element[0].style.display,
    width: this.element[0].style.width,
    minHeight: this.element[0].style.minHeight,
    maxHeight: this.element[0].style.maxHeight,
    height: this.element[0].style.height
   };
   this.originalPosition = {
    parent: this.element.parent(),
    index: this.element.parent().children().index(this.element)
   };
   this.originalTitle = this.element.attr("title");
   this.options.title = this.options.title || this.originalTitle;
   this._createWrapper();
   this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
   this._createTitlebar();
   this._createButtonPane();
   if (this.options.draggable && t.fn.draggable) {
    this._makeDraggable()
   };
   if (this.options.resizable && t.fn.resizable) {
    this._makeResizable()
   };
   this._isOpen = !1
  },
  _init: function() {
   if (this.options.autoOpen) {
    this.open()
   }
  },
  _appendTo: function() {
   var e = this.options.appendTo;
   if (e && (e.jquery || e.nodeType)) {
    return t(e)
   };
   return this.document.find(e || "body").eq(0)
  },
  _destroy: function() {
   var t, e = this.originalPosition;
   this._destroyOverlay();
   this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
   this.uiDialog.stop(!0, !0).remove();
   if (this.originalTitle) {
    this.element.attr("title", this.originalTitle)
   };
   t = e.parent.children().eq(e.index);
   if (t.length && t[0] !== this.element[0]) {
    t.before(this.element)
   } else {
    e.parent.append(this.element)
   }
  },
  widget: function() {
   return this.uiDialog
  },
  disable: t.noop,
  enable: t.noop,
  close: function(e) {
   var i = this;
   if (!this._isOpen || this._trigger("beforeClose", e) === !1) {
    return
   };
   this._isOpen = !1;
   this._destroyOverlay();
   if (!this.opener.filter(":focusable").focus().length) {
    t(this.document[0].activeElement).blur()
   };
   this._hide(this.uiDialog, this.options.hide, function() {
    i._trigger("close", e)
   })
  },
  isOpen: function() {
   return this._isOpen
  },
  moveToTop: function() {
   this._moveToTop()
  },
  _moveToTop: function(t, e) {
   var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
   if (i && !e) {
    this._trigger("focus", t)
   };
   return i
  },
  open: function() {
   var e = this;
   if (this._isOpen) {
    if (this._moveToTop()) {
     this._focusTabbable()
    };
    return
   };
   this._isOpen = !0;
   this.opener = t(this.document[0].activeElement);
   this._size();
   this._position();
   this._createOverlay();
   this._moveToTop(null, !0);
   this._show(this.uiDialog, this.options.show, function() {
    e._focusTabbable();
    e._trigger("focus")
   });
   this._trigger("open")
  },
  _focusTabbable: function() {
   var t = this.element.find("[autofocus]");
   if (!t.length) {
    t = this.element.find(":tabbable")
   };
   if (!t.length) {
    t = this.uiDialogButtonPane.find(":tabbable")
   };
   if (!t.length) {
    t = this.uiDialogTitlebarClose.filter(":tabbable")
   };
   if (!t.length) {
    t = this.uiDialog
   };
   t.eq(0).focus()
  },
  _keepFocus: function(e) {
   function i() {
    var e = this.document[0].activeElement,
     i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
    if (!i) {
     this._focusTabbable()
    }
   };
   e.preventDefault();
   i.call(this);
   this._delay(i)
  },
  _createWrapper: function() {
   this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
    tabIndex: -1,
    role: "dialog"
   }).appendTo(this._appendTo());
   this._on(this.uiDialog, {
    keydown: function(e) {
     if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) {
      e.preventDefault();
      this.close(e);
      return
     };
     if (e.keyCode !== t.ui.keyCode.TAB) {
      return
     };
     var s = this.uiDialog.find(":tabbable"),
      n = s.filter(":first"),
      i = s.filter(":last");
     if ((e.target === i[0] || e.target === this.uiDialog[0]) && !e.shiftKey) {
      n.focus(1);
      e.preventDefault()
     } else if ((e.target === n[0] || e.target === this.uiDialog[0]) && e.shiftKey) {
      i.focus(1);
      e.preventDefault()
     }
    },
    mousedown: function(t) {
     if (this._moveToTop(t)) {
      this._focusTabbable()
     }
    }
   });
   if (!this.element.find("[aria-describedby]").length) {
    this.uiDialog.attr({
     "aria-describedby": this.element.uniqueId().attr("id")
    })
   }
  },
  _createTitlebar: function() {
   var e;
   this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
   this._on(this.uiDialogTitlebar, {
    mousedown: function(e) {
     if (!t(e.target).closest(".ui-dialog-titlebar-close")) {
      this.uiDialog.focus()
     }
    }
   });
   this.uiDialogTitlebarClose = t("<button></button>").button({
    label: this.options.closeText,
    icons: {
     primary: "ui-icon-closethick"
    },
    text: !1
   }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
   this._on(this.uiDialogTitlebarClose, {
    click: function(t) {
     t.preventDefault();
     this.close(t)
    }
   });
   e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
   this._title(e);
   this.uiDialog.attr({
    "aria-labelledby": e.attr("id")
   })
  },
  _title: function(t) {
   if (!this.options.title) {
    t.html("&#160;")
   };
   t.text(this.options.title)
  },
  _createButtonPane: function() {
   this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
   this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
   this._createButtons()
  },
  _createButtons: function() {
   var i = this,
    e = this.options.buttons;
   this.uiDialogButtonPane.remove();
   this.uiButtonSet.empty();
   if (t.isEmptyObject(e) || (t.isArray(e) && !e.length)) {
    this.uiDialog.removeClass("ui-dialog-buttons");
    return
   };
   t.each(e, function(e, s) {
    var o, n;
    s = t.isFunction(s) ? {
     click: s,
     text: e
    } : s;
    s = t.extend({
     type: "button"
    }, s);
    o = s.click;
    s.click = function() {
     o.apply(i.element[0], arguments)
    };
    n = {
     icons: s.icons,
     text: s.showText
    };
    delete s.icons;
    delete s.showText;
    t("<button></button>", s).button(n).appendTo(i.uiButtonSet)
   });
   this.uiDialog.addClass("ui-dialog-buttons");
   this.uiDialogButtonPane.appendTo(this.uiDialog)
  },
  _makeDraggable: function() {
   var e = this,
    s = this.options;

   function i(t) {
    return {
     position: t.position,
     offset: t.offset
    }
   };
   this.uiDialog.draggable({
    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
    handle: ".ui-dialog-titlebar",
    containment: "document",
    start: function(s, n) {
     t(this).addClass("ui-dialog-dragging");
     e._blockFrames();
     e._trigger("dragStart", s, i(n))
    },
    drag: function(t, s) {
     e._trigger("drag", t, i(s))
    },
    stop: function(n, o) {
     s.position = [o.position.left - e.document.scrollLeft(), o.position.top - e.document.scrollTop()];
     t(this).removeClass("ui-dialog-dragging");
     e._unblockFrames();
     e._trigger("dragStop", n, i(o))
    }
   })
  },
  _makeResizable: function() {
   var i = this,
    e = this.options,
    n = e.resizable,
    o = this.uiDialog.css("position"),
    a = typeof n === "string" ? n : "n,e,s,w,se,sw,ne,nw";

   function s(t) {
    return {
     originalPosition: t.originalPosition,
     originalSize: t.originalSize,
     position: t.position,
     size: t.size
    }
   };
   this.uiDialog.resizable({
    cancel: ".ui-dialog-content",
    containment: "document",
    alsoResize: this.element,
    maxWidth: e.maxWidth,
    maxHeight: e.maxHeight,
    minWidth: e.minWidth,
    minHeight: this._minHeight(),
    handles: a,
    start: function(e, n) {
     t(this).addClass("ui-dialog-resizing");
     i._blockFrames();
     i._trigger("resizeStart", e, s(n))
    },
    resize: function(t, e) {
     i._trigger("resize", t, s(e))
    },
    stop: function(n, o) {
     e.height = t(this).height();
     e.width = t(this).width();
     t(this).removeClass("ui-dialog-resizing");
     i._unblockFrames();
     i._trigger("resizeStop", n, s(o))
    }
   }).css("position", o)
  },
  _minHeight: function() {
   var t = this.options;
   return t.height === "auto" ? t.minHeight : Math.min(t.minHeight, t.height)
  },
  _position: function() {
   var t = this.uiDialog.is(":visible");
   if (!t) {
    this.uiDialog.show()
   };
   this.uiDialog.position(this.options.position);
   if (!t) {
    this.uiDialog.hide()
   }
  },
  _setOptions: function(e) {
   var a = this,
    n = !1,
    o = {};
   t.each(e, function(t, e) {
    a._setOption(t, e);
    if (t in s) {
     n = !0
    };
    if (t in i) {
     o[t] = e
    }
   });
   if (n) {
    this._size();
    this._position()
   };
   if (this.uiDialog.is(":data(ui-resizable)")) {
    this.uiDialog.resizable("option", o)
   }
  },
  _setOption: function(t, e) {
   var n, s, i = this.uiDialog;
   if (t === "dialogClass") {
    i.removeClass(this.options.dialogClass).addClass(e)
   };
   if (t === "disabled") {
    return
   };
   this._super(t, e);
   if (t === "appendTo") {
    this.uiDialog.appendTo(this._appendTo())
   };
   if (t === "buttons") {
    this._createButtons()
   };
   if (t === "closeText") {
    this.uiDialogTitlebarClose.button({
     label: "" + e
    })
   };
   if (t === "draggable") {
    n = i.is(":data(ui-draggable)");
    if (n && !e) {
     i.draggable("destroy")
    };
    if (!n && e) {
     this._makeDraggable()
    }
   };
   if (t === "position") {
    this._position()
   };
   if (t === "resizable") {
    s = i.is(":data(ui-resizable)");
    if (s && !e) {
     i.resizable("destroy")
    };
    if (s && typeof e === "string") {
     i.resizable("option", "handles", e)
    };
    if (!s && e !== !1) {
     this._makeResizable()
    }
   };
   if (t === "title") {
    this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
   }
  },
  _size: function() {
   var e, i, s, t = this.options;
   this.element.show().css({
    width: "auto",
    minHeight: 0,
    maxHeight: "none",
    height: 0
   });
   if (t.minWidth > t.width) {
    t.width = t.minWidth
   };
   e = this.uiDialog.css({
    height: "auto",
    width: t.width
   }).outerHeight();
   i = Math.max(0, t.minHeight - e);
   s = typeof t.maxHeight === "number" ? Math.max(0, t.maxHeight - e) : "none";
   if (t.height === "auto") {
    this.element.css({
     minHeight: i,
     maxHeight: s,
     height: "auto"
    })
   } else {
    this.element.height(Math.max(0, t.height - e))
   };
   if (this.uiDialog.is(":data(ui-resizable)")) {
    this.uiDialog.resizable("option", "minHeight", this._minHeight())
   }
  },
  _blockFrames: function() {
   this.iframeBlocks = this.document.find("iframe").map(function() {
    var e = t(this);
    return t("<div>").css({
     position: "absolute",
     width: e.outerWidth(),
     height: e.outerHeight()
    }).appendTo(e.parent()).offset(e.offset())[0]
   })
  },
  _unblockFrames: function() {
   if (this.iframeBlocks) {
    this.iframeBlocks.remove();
    delete this.iframeBlocks
   }
  },
  _allowInteraction: function(e) {
   if (t(e.target).closest(".ui-dialog").length) {
    return !0
   };
   return !!t(e.target).closest(".ui-datepicker").length
  },
  _createOverlay: function() {
   if (!this.options.modal) {
    return
   };
   var i = this,
    e = this.widgetFullName;
   if (!t.ui.dialog.overlayInstances) {
    this._delay(function() {
     if (t.ui.dialog.overlayInstances) {
      this.document.bind("focusin.dialog", function(s) {
       if (!i._allowInteraction(s)) {
        s.preventDefault();
        t(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()
       }
      })
     }
    })
   };
   this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
   this._on(this.overlay, {
    mousedown: "_keepFocus"
   });
   t.ui.dialog.overlayInstances++
  },
  _destroyOverlay: function() {
   if (!this.options.modal) {
    return
   };
   if (this.overlay) {
    t.ui.dialog.overlayInstances--;
    if (!t.ui.dialog.overlayInstances) {
     this.document.unbind("focusin.dialog")
    };
    this.overlay.remove();
    this.overlay = null
   }
  }
 });
 t.ui.dialog.overlayInstances = 0;
 if (t.uiBackCompat !== !1) {
  t.widget("ui.dialog", t.ui.dialog, {
   _position: function() {
    var e = this.options.position,
     i = [],
     s = [0, 0],
     n;
    if (e) {
     if (typeof e === "string" || (typeof e === "object" && "0" in e)) {
      i = e.split ? e.split(" ") : [e[0], e[1]];
      if (i.length === 1) {
       i[1] = i[0]
      };
      t.each(["left", "top"], function(t, e) {
       if (+i[t] === i[t]) {
        s[t] = i[t];
        i[t] = e
       }
      });
      e = {
       my: i[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + i[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
       at: i.join(" ")
      }
     };
     e = t.extend({}, t.ui.dialog.prototype.options.position, e)
    } else {
     e = t.ui.dialog.prototype.options.position
    };
    n = this.uiDialog.is(":visible");
    if (!n) {
     this.uiDialog.show()
    };
    this.uiDialog.position(e);
    if (!n) {
     this.uiDialog.hide()
    }
   }
  })
 }
}(jQuery));
(function(t, e) {
 var s = /up|down|vertical/,
  i = /up|left|vertical|horizontal/;
 t.effects.effect.blind = function(e, n) {
  var o = t(this),
   d = ["position", "top", "bottom", "left", "right", "height", "width"],
   g = t.effects.setMode(o, e.mode || "hide"),
   m = e.direction || "up",
   r = s.test(m),
   f = r ? "height" : "width",
   p = r ? "top" : "left",
   v = i.test(m),
   c = {},
   u = g === "show",
   a, l, h;
  if (o.parent().is(".ui-effects-wrapper")) {
   t.effects.save(o.parent(), d)
  } else {
   t.effects.save(o, d)
  };
  o.show();
  a = t.effects.createWrapper(o).css({
   overflow: "hidden"
  });
  l = a[f]();
  h = parseFloat(a.css(p)) || 0;
  c[f] = u ? l : 0;
  if (!v) {
   o.css(r ? "bottom" : "right", 0).css(r ? "top" : "left", "auto").css({
    position: "absolute"
   });
   c[p] = u ? h : l + h
  };
  if (u) {
   a.css(f, 0);
   if (!v) {
    a.css(p, h + l)
   }
  };
  a.animate(c, {
   duration: e.duration,
   easing: e.easing,
   queue: !1,
   complete: function() {
    if (g === "hide") {
     o.hide()
    };
    t.effects.restore(o, d);
    t.effects.removeWrapper(o);
    n()
   }
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.bounce = function(e, i) {
  var s = t(this),
   m = ["position", "top", "bottom", "left", "right", "height", "width"],
   y = t.effects.setMode(s, e.mode || "effect"),
   r = y === "hide",
   v = y === "show",
   u = e.direction || "up",
   n = e.distance,
   g = e.times || 5,
   w = g * 2 + (v || r ? 1 : 0),
   h = e.duration / w,
   f = e.easing,
   o = (u === "up" || u === "down") ? "top" : "left",
   p = (u === "up" || u === "left"),
   d, a, l, c = s.queue(),
   b = c.length;
  if (v || r) {
   m.push("opacity")
  };
  t.effects.save(s, m);
  s.show();
  t.effects.createWrapper(s);
  if (!n) {
   n = s[o === "top" ? "outerHeight" : "outerWidth"]() / 3
  };
  if (v) {
   l = {
    opacity: 1
   };
   l[o] = 0;
   s.css("opacity", 0).css(o, p ? -n * 2 : n * 2).animate(l, h, f)
  };
  if (r) {
   n = n / Math.pow(2, g - 1)
  };
  l = {};
  l[o] = 0;
  for (d = 0; d < g; d++) {
   a = {};
   a[o] = (p ? "-=" : "+=") + n;
   s.animate(a, h, f).animate(l, h, f);
   n = r ? n * 2 : n / 2
  };
  if (r) {
   a = {
    opacity: 0
   };
   a[o] = (p ? "-=" : "+=") + n;
   s.animate(a, h, f)
  };
  s.queue(function() {
   if (r) {
    s.hide()
   };
   t.effects.restore(s, m);
   t.effects.removeWrapper(s);
   i()
  });
  if (b > 1) {
   c.splice.apply(c, [1, 0].concat(c.splice(b, w + 1)))
  };
  s.dequeue()
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.clip = function(e, i) {
  var s = t(this),
   u = ["position", "top", "bottom", "left", "right", "height", "width"],
   p = t.effects.setMode(s, e.mode || "hide"),
   o = p === "show",
   d = e.direction || "vertical",
   f = d === "vertical",
   l = f ? "height" : "width",
   c = f ? "top" : "left",
   r = {},
   h, n, a;
  t.effects.save(s, u);
  s.show();
  h = t.effects.createWrapper(s).css({
   overflow: "hidden"
  });
  n = (s[0].tagName === "IMG") ? h : s;
  a = n[l]();
  if (o) {
   n.css(l, 0);
   n.css(c, a / 2)
  };
  r[l] = o ? a : 0;
  r[c] = o ? 0 : a / 2;
  n.animate(r, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: function() {
    if (!o) {
     s.hide()
    };
    t.effects.restore(s, u);
    t.effects.removeWrapper(s);
    i()
   }
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.drop = function(e, i) {
  var s = t(this),
   h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
   c = t.effects.setMode(s, e.mode || "hide"),
   l = c === "show",
   n = e.direction || "left",
   a = (n === "up" || n === "down") ? "top" : "left",
   r = (n === "up" || n === "left") ? "pos" : "neg",
   u = {
    opacity: l ? 1 : 0
   },
   o;
  t.effects.save(s, h);
  s.show();
  t.effects.createWrapper(s);
  o = e.distance || s[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
  if (l) {
   s.css("opacity", 0).css(a, r === "pos" ? -o : o)
  };
  u[a] = (l ? (r === "pos" ? "+=" : "-=") : (r === "pos" ? "-=" : "+=")) + o;
  s.animate(u, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: function() {
    if (c === "hide") {
     s.hide()
    };
    t.effects.restore(s, h);
    t.effects.removeWrapper(s);
    i()
   }
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.explode = function(e, i) {
  var h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
   u = h,
   s = t(this),
   b = t.effects.setMode(s, e.mode || "hide"),
   n = b === "show",
   m = s.show().css("visibility", "hidden").offset(),
   r = Math.ceil(s.outerWidth() / u),
   l = Math.ceil(s.outerHeight() / h),
   g = [],
   o, a, p, d, c, f;

  function y() {
   g.push(this);
   if (g.length === h * u) {
    v()
   }
  };
  for (o = 0; o < h; o++) {
   d = m.top + o * l;
   f = o - (h - 1) / 2;
   for (a = 0; a < u; a++) {
    p = m.left + a * r;
    c = a - (u - 1) / 2;
    s.clone().appendTo("body").wrap("<div></div>").css({
     position: "absolute",
     visibility: "visible",
     left: -a * r,
     top: -o * l
    }).parent().addClass("ui-effects-explode").css({
     position: "absolute",
     overflow: "hidden",
     width: r,
     height: l,
     left: p + (n ? c * r : 0),
     top: d + (n ? f * l : 0),
     opacity: n ? 0 : 1
    }).animate({
     left: p + (n ? 0 : c * r),
     top: d + (n ? 0 : f * l),
     opacity: n ? 1 : 0
    }, e.duration || 500, e.easing, y)
   }
  };

  function v() {
   s.css({
    visibility: "visible"
   });
   t(g).remove();
   if (!n) {
    s.hide()
   };
   i()
  }
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.fade = function(e, i) {
  var s = t(this),
   n = t.effects.setMode(s, e.mode || "toggle");
  s.animate({
   opacity: n
  }, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.fold = function(e, i) {
  var n = t(this),
   d = ["position", "top", "bottom", "left", "right", "height", "width"],
   p = t.effects.setMode(n, e.mode || "hide"),
   r = p === "show",
   g = p === "hide",
   o = e.size || 15,
   f = /([0-9]+)%/.exec(o),
   m = !!e.horizFirst,
   v = r !== m,
   c = v ? ["width", "height"] : ["height", "width"],
   l = e.duration / 2,
   s, a, u = {},
   h = {};
  t.effects.save(n, d);
  n.show();
  s = t.effects.createWrapper(n).css({
   overflow: "hidden"
  });
  a = v ? [s.width(), s.height()] : [s.height(), s.width()];
  if (f) {
   o = parseInt(f[1], 10) / 100 * a[g ? 0 : 1]
  };
  if (r) {
   s.css(m ? {
    height: 0,
    width: o
   } : {
    height: o,
    width: 0
   })
  };
  u[c[0]] = r ? a[0] : o;
  h[c[1]] = r ? a[1] : 0;
  s.animate(u, l, e.easing).animate(h, l, e.easing, function() {
   if (g) {
    n.hide()
   };
   t.effects.restore(n, d);
   t.effects.removeWrapper(n);
   i()
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.highlight = function(e, i) {
  var s = t(this),
   a = ["backgroundImage", "backgroundColor", "opacity"],
   o = t.effects.setMode(s, e.mode || "show"),
   n = {
    backgroundColor: s.css("backgroundColor")
   };
  if (o === "hide") {
   n.opacity = 0
  };
  t.effects.save(s, a);
  s.show().css({
   backgroundImage: "none",
   backgroundColor: e.color || "#ffff99"
  }).animate(n, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: function() {
    if (o === "hide") {
     s.hide()
    };
    t.effects.restore(s, a);
    i()
   }
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.pulsate = function(e, i) {
  var s = t(this),
   l = t.effects.setMode(s, e.mode || "show"),
   h = l === "show",
   d = l === "hide",
   f = (h || l === "hide"),
   a = ((e.times || 5) * 2) + (f ? 1 : 0),
   u = e.duration / a,
   n = 0,
   o = s.queue(),
   c = o.length,
   r;
  if (h || !s.is(":visible")) {
   s.css("opacity", 0).show();
   n = 1
  };
  for (r = 1; r < a; r++) {
   s.animate({
    opacity: n
   }, u, e.easing);
   n = 1 - n
  };
  s.animate({
   opacity: n
  }, u, e.easing);
  s.queue(function() {
   if (d) {
    s.hide()
   };
   i()
  });
  if (c > 1) {
   o.splice.apply(o, [1, 0].concat(o.splice(c, a + 1)))
  };
  s.dequeue()
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.puff = function(e, i) {
  var s = t(this),
   a = t.effects.setMode(s, e.mode || "hide"),
   r = a === "hide",
   l = parseInt(e.percent, 10) || 150,
   o = l / 100,
   n = {
    height: s.height(),
    width: s.width(),
    outerHeight: s.outerHeight(),
    outerWidth: s.outerWidth()
   };
  t.extend(e, {
   effect: "scale",
   queue: !1,
   fade: !0,
   mode: a,
   complete: i,
   percent: r ? l : 100,
   from: r ? n : {
    height: n.height * o,
    width: n.width * o,
    outerHeight: n.outerHeight * o,
    outerWidth: n.outerWidth * o
   }
  });
  s.effect(e)
 };
 t.effects.effect.scale = function(e, i) {
  var n = t(this),
   s = t.extend(!0, {}, e),
   a = t.effects.setMode(n, e.mode || "effect"),
   l = parseInt(e.percent, 10) || (parseInt(e.percent, 10) === 0 ? 0 : (a === "hide" ? 0 : 100)),
   h = e.direction || "both",
   u = e.origin,
   o = {
    height: n.height(),
    width: n.width(),
    outerHeight: n.outerHeight(),
    outerWidth: n.outerWidth()
   },
   r = {
    y: h !== "horizontal" ? (l / 100) : 1,
    x: h !== "vertical" ? (l / 100) : 1
   };
  s.effect = "size";
  s.queue = !1;
  s.complete = i;
  if (a !== "effect") {
   s.origin = u || ["middle", "center"];
   s.restore = !0
  };
  s.from = e.from || (a === "show" ? {
   height: 0,
   width: 0,
   outerHeight: 0,
   outerWidth: 0
  } : o);
  s.to = {
   height: o.height * r.y,
   width: o.width * r.x,
   outerHeight: o.outerHeight * r.y,
   outerWidth: o.outerWidth * r.x
  };
  if (s.fade) {
   if (a === "show") {
    s.from.opacity = 0;
    s.to.opacity = 1
   };
   if (a === "hide") {
    s.from.opacity = 1;
    s.to.opacity = 0
   }
  };
  n.effect(s)
 };
 t.effects.effect.size = function(e, i) {
  var o, c, n, s = t(this),
   m = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
   b = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
   p = ["width", "height", "overflow"],
   d = ["fontSize"],
   a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
   r = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
   u = t.effects.setMode(s, e.mode || "effect"),
   f = e.restore || u !== "effect",
   h = e.scale || "both",
   v = e.origin || ["middle", "center"],
   y = s.css("position"),
   l = f ? m : b,
   g = {
    height: 0,
    width: 0,
    outerHeight: 0,
    outerWidth: 0
   };
  if (u === "show") {
   s.show()
  };
  o = {
   height: s.height(),
   width: s.width(),
   outerHeight: s.outerHeight(),
   outerWidth: s.outerWidth()
  };
  if (e.mode === "toggle" && u === "show") {
   s.from = e.to || g;
   s.to = e.from || o
  } else {
   s.from = e.from || (u === "show" ? g : o);
   s.to = e.to || (u === "hide" ? g : o)
  };
  n = {
   from: {
    y: s.from.height / o.height,
    x: s.from.width / o.width
   },
   to: {
    y: s.to.height / o.height,
    x: s.to.width / o.width
   }
  };
  if (h === "box" || h === "both") {
   if (n.from.y !== n.to.y) {
    l = l.concat(a);
    s.from = t.effects.setTransition(s, a, n.from.y, s.from);
    s.to = t.effects.setTransition(s, a, n.to.y, s.to)
   };
   if (n.from.x !== n.to.x) {
    l = l.concat(r);
    s.from = t.effects.setTransition(s, r, n.from.x, s.from);
    s.to = t.effects.setTransition(s, r, n.to.x, s.to)
   }
  };
  if (h === "content" || h === "both") {
   if (n.from.y !== n.to.y) {
    l = l.concat(d).concat(p);
    s.from = t.effects.setTransition(s, d, n.from.y, s.from);
    s.to = t.effects.setTransition(s, d, n.to.y, s.to)
   }
  };
  t.effects.save(s, l);
  s.show();
  t.effects.createWrapper(s);
  s.css("overflow", "hidden").css(s.from);
  if (v) {
   c = t.effects.getBaseline(v, o);
   s.from.top = (o.outerHeight - s.outerHeight()) * c.y;
   s.from.left = (o.outerWidth - s.outerWidth()) * c.x;
   s.to.top = (o.outerHeight - s.to.outerHeight) * c.y;
   s.to.left = (o.outerWidth - s.to.outerWidth) * c.x
  };
  s.css(s.from);
  if (h === "content" || h === "both") {
   a = a.concat(["marginTop", "marginBottom"]).concat(d);
   r = r.concat(["marginLeft", "marginRight"]);
   p = m.concat(a).concat(r);
   s.find("*[width]").each(function() {
    var i = t(this),
     s = {
      height: i.height(),
      width: i.width(),
      outerHeight: i.outerHeight(),
      outerWidth: i.outerWidth()
     };
    if (f) {
     t.effects.save(i, p)
    };
    i.from = {
     height: s.height * n.from.y,
     width: s.width * n.from.x,
     outerHeight: s.outerHeight * n.from.y,
     outerWidth: s.outerWidth * n.from.x
    };
    i.to = {
     height: s.height * n.to.y,
     width: s.width * n.to.x,
     outerHeight: s.height * n.to.y,
     outerWidth: s.width * n.to.x
    };
    if (n.from.y !== n.to.y) {
     i.from = t.effects.setTransition(i, a, n.from.y, i.from);
     i.to = t.effects.setTransition(i, a, n.to.y, i.to)
    };
    if (n.from.x !== n.to.x) {
     i.from = t.effects.setTransition(i, r, n.from.x, i.from);
     i.to = t.effects.setTransition(i, r, n.to.x, i.to)
    };
    i.css(i.from);
    i.animate(i.to, e.duration, e.easing, function() {
     if (f) {
      t.effects.restore(i, p)
     }
    })
   })
  };
  s.animate(s.to, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: function() {
    if (s.to.opacity === 0) {
     s.css("opacity", s.from.opacity)
    };
    if (u === "hide") {
     s.hide()
    };
    t.effects.restore(s, l);
    if (!f) {
     if (y === "static") {
      s.css({
       position: "relative",
       top: s.to.top,
       left: s.to.left
      })
     } else {
      t.each(["top", "left"], function(t, e) {
       s.css(e, function(e, i) {
        var o = parseInt(i, 10),
         n = t ? s.to.left : s.to.top;
        if (i === "auto") {
         return n + "px"
        };
        return o + n + "px"
       })
      })
     }
    };
    t.effects.removeWrapper(s);
    i()
   }
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.shake = function(e, i) {
  var s = t(this),
   v = ["position", "top", "bottom", "left", "right", "height", "width"],
   b = t.effects.setMode(s, e.mode || "effect"),
   o = e.direction || "left",
   c = e.distance || 20,
   m = e.times || 3,
   g = m * 2 + 1,
   n = Math.round(e.duration / g),
   l = (o === "up" || o === "down") ? "top" : "left",
   h = (o === "up" || o === "left"),
   u = {},
   r = {},
   p = {},
   f, a = s.queue(),
   d = a.length;
  t.effects.save(s, v);
  s.show();
  t.effects.createWrapper(s);
  u[l] = (h ? "-=" : "+=") + c;
  r[l] = (h ? "+=" : "-=") + c * 2;
  p[l] = (h ? "-=" : "+=") + c * 2;
  s.animate(u, n, e.easing);
  for (f = 1; f < m; f++) {
   s.animate(r, n, e.easing).animate(p, n, e.easing)
  };
  s.animate(r, n, e.easing).animate(u, n / 2, e.easing).queue(function() {
   if (b === "hide") {
    s.hide()
   };
   t.effects.restore(s, v);
   t.effects.removeWrapper(s);
   i()
  });
  if (d > 1) {
   a.splice.apply(a, [1, 0].concat(a.splice(d, g + 1)))
  };
  s.dequeue()
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.slide = function(e, i) {
  var s = t(this),
   u = ["position", "top", "bottom", "left", "right", "width", "height"],
   c = t.effects.setMode(s, e.mode || "show"),
   h = c === "show",
   o = e.direction || "left",
   r = (o === "up" || o === "down") ? "top" : "left",
   a = (o === "up" || o === "left"),
   n, l = {};
  t.effects.save(s, u);
  s.show();
  n = e.distance || s[r === "top" ? "outerHeight" : "outerWidth"](!0);
  t.effects.createWrapper(s).css({
   overflow: "hidden"
  });
  if (h) {
   s.css(r, a ? (isNaN(n) ? "-" + n : -n) : n)
  };
  l[r] = (h ? (a ? "+=" : "-=") : (a ? "-=" : "+=")) + n;
  s.animate(l, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: function() {
    if (c === "hide") {
     s.hide()
    };
    t.effects.restore(s, u);
    t.effects.removeWrapper(s);
    i()
   }
  })
 }
})(jQuery);
(function(t, e) {
 t.effects.effect.transfer = function(e, i) {
  var n = t(this),
   s = t(e.to),
   o = s.css("position") === "fixed",
   l = t("body"),
   h = o ? l.scrollTop() : 0,
   u = o ? l.scrollLeft() : 0,
   r = s.offset(),
   f = {
    top: r.top - h,
    left: r.left - u,
    height: s.innerHeight(),
    width: s.innerWidth()
   },
   a = n.offset(),
   c = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
    top: a.top - h,
    left: a.left - u,
    height: n.innerHeight(),
    width: n.innerWidth(),
    position: o ? "fixed" : "absolute"
   }).animate(f, e.duration, e.easing, function() {
    c.remove();
    i()
   })
 }
})(jQuery);
(function(t, e) {
 t.widget("ui.menu", {
  version: "1.10.2",
  defaultElement: "<ul>",
  delay: 300,
  options: {
   icons: {
    submenu: "ui-icon-carat-1-e"
   },
   menus: "ul",
   position: {
    my: "left top",
    at: "right top"
   },
   role: "menu",
   blur: null,
   focus: null,
   select: null
  },
  _create: function() {
   this.activeMenu = this.element;
   this.mouseHandled = !1;
   this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
    role: this.options.role,
    tabIndex: 0
   }).bind("click" + this.eventNamespace, t.proxy(function(t) {
    if (this.options.disabled) {
     t.preventDefault()
    }
   }, this));
   if (this.options.disabled) {
    this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
   };
   this._on({
    "mousedown .ui-menu-item > a": function(t) {
     t.preventDefault()
    },
    "click .ui-state-disabled > a": function(t) {
     t.preventDefault()
    },
    "click .ui-menu-item:has(a)": function(e) {
     var i = t(e.target).closest(".ui-menu-item");
     if (!this.mouseHandled && i.not(".ui-state-disabled").length) {
      this.mouseHandled = !0;
      this.select(e);
      if (i.has(".ui-menu").length) {
       this.expand(e)
      } else if (!this.element.is(":focus")) {
       this.element.trigger("focus", [!0]);
       if (this.active && this.active.parents(".ui-menu").length === 1) {
        clearTimeout(this.timer)
       }
      }
     }
    },
    "mouseenter .ui-menu-item": function(e) {
     var i = t(e.currentTarget);
     i.siblings().children(".ui-state-active").removeClass("ui-state-active");
     this.focus(e, i)
    },
    mouseleave: "collapseAll",
    "mouseleave .ui-menu": "collapseAll",
    focus: function(t, e) {
     var i = this.active || this.element.children(".ui-menu-item").eq(0);
     if (!e) {
      this.focus(t, i)
     }
    },
    blur: function(e) {
     this._delay(function() {
      if (!t.contains(this.element[0], this.document[0].activeElement)) {
       this.collapseAll(e)
      }
     })
    },
    keydown: "_keydown"
   });
   this.refresh();
   this._on(this.document, {
    click: function(e) {
     if (!t(e.target).closest(".ui-menu").length) {
      this.collapseAll(e)
     };
     this.mouseHandled = !1
    }
   })
  },
  _destroy: function() {
   this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
   this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
    var e = t(this);
    if (e.data("ui-menu-submenu-carat")) {
     e.remove()
    }
   });
   this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
  },
  _keydown: function(e) {
   var i, a, s, o, n, l = !0;

   function r(t) {
    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
   };
   switch (e.keyCode) {
    case t.ui.keyCode.PAGE_UP:
     this.previousPage(e);
     break;
    case t.ui.keyCode.PAGE_DOWN:
     this.nextPage(e);
     break;
    case t.ui.keyCode.HOME:
     this._move("first", "first", e);
     break;
    case t.ui.keyCode.END:
     this._move("last", "last", e);
     break;
    case t.ui.keyCode.UP:
     this.previous(e);
     break;
    case t.ui.keyCode.DOWN:
     this.next(e);
     break;
    case t.ui.keyCode.LEFT:
     this.collapse(e);
     break;
    case t.ui.keyCode.RIGHT:
     if (this.active && !this.active.is(".ui-state-disabled")) {
      this.expand(e)
     };
     break;
    case t.ui.keyCode.ENTER:
    case t.ui.keyCode.SPACE:
     this._activate(e);
     break;
    case t.ui.keyCode.ESCAPE:
     this.collapse(e);
     break;
    default:
     l = !1;
     a = this.previousFilter || "";
     s = String.fromCharCode(e.keyCode);
     o = !1;
     clearTimeout(this.filterTimer);
     if (s === a) {
      o = !0
     } else {
      s = a + s
     };
     n = new RegExp("^" + r(s), "i");
     i = this.activeMenu.children(".ui-menu-item").filter(function() {
      return n.test(t(this).children("a").text())
     });
     i = o && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
     if (!i.length) {
      s = String.fromCharCode(e.keyCode);
      n = new RegExp("^" + r(s), "i");
      i = this.activeMenu.children(".ui-menu-item").filter(function() {
       return n.test(t(this).children("a").text())
      })
     };
     if (i.length) {
      this.focus(e, i);
      if (i.length > 1) {
       this.previousFilter = s;
       this.filterTimer = this._delay(function() {
        delete this.previousFilter
       }, 1000)
      } else {
       delete this.previousFilter
      }
     } else {
      delete this.previousFilter
     }
   };
   if (l) {
    e.preventDefault()
   }
  },
  _activate: function(t) {
   if (!this.active.is(".ui-state-disabled")) {
    if (this.active.children("a[aria-haspopup='true']").length) {
     this.expand(t)
    } else {
     this.select(t)
    }
   }
  },
  refresh: function() {
   var e, s = this.options.icons.submenu,
    i = this.element.find(this.options.menus);
   i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
    role: this.options.role,
    "aria-hidden": "true",
    "aria-expanded": "false"
   }).each(function() {
    var e = t(this),
     i = e.prev("a"),
     n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
    i.attr("aria-haspopup", "true").prepend(n);
    e.attr("aria-labelledby", i.attr("id"))
   });
   e = i.add(this.element);
   e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
    tabIndex: -1,
    role: this._itemRole()
   });
   e.children(":not(.ui-menu-item)").each(function() {
    var e = t(this);
    if (!/[^\-\u2014\u2013\s]/.test(e.text())) {
     e.addClass("ui-widget-content ui-menu-divider")
    }
   });
   e.children(".ui-state-disabled").attr("aria-disabled", "true");
   if (this.active && !t.contains(this.element[0], this.active[0])) {
    this.blur()
   }
  },
  _itemRole: function() {
   return {
    menu: "menuitem",
    listbox: "option"
   }[this.options.role]
  },
  _setOption: function(t, e) {
   if (t === "icons") {
    this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu)
   };
   this._super(t, e)
  },
  focus: function(t, e) {
   var i, s;
   this.blur(t, t && t.type === "focus");
   this._scrollIntoView(e);
   this.active = e.first();
   s = this.active.children("a").addClass("ui-state-focus");
   if (this.options.role) {
    this.element.attr("aria-activedescendant", s.attr("id"))
   };
   this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
   if (t && t.type === "keydown") {
    this._close()
   } else {
    this.timer = this._delay(function() {
     this._close()
    }, this.delay)
   };
   i = e.children(".ui-menu");
   if (i.length && (/^mouse/.test(t.type))) {
    this._startOpening(i)
   };
   this.activeMenu = e.parent();
   this._trigger("focus", t, {
    item: e
   })
  },
  _scrollIntoView: function(e) {
   var a, r, i, o, n, s;
   if (this._hasScroll()) {
    a = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0;
    r = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0;
    i = e.offset().top - this.activeMenu.offset().top - a - r;
    o = this.activeMenu.scrollTop();
    n = this.activeMenu.height();
    s = e.height();
    if (i < 0) {
     this.activeMenu.scrollTop(o + i)
    } else if (i + s > n) {
     this.activeMenu.scrollTop(o + i - n + s)
    }
   }
  },
  blur: function(t, e) {
   if (!e) {
    clearTimeout(this.timer)
   };
   if (!this.active) {
    return
   };
   this.active.children("a").removeClass("ui-state-focus");
   this.active = null;
   this._trigger("blur", t, {
    item: this.active
   })
  },
  _startOpening: function(t) {
   clearTimeout(this.timer);
   if (t.attr("aria-hidden") !== "true") {
    return
   };
   this.timer = this._delay(function() {
    this._close();
    this._open(t)
   }, this.delay)
  },
  _open: function(e) {
   var i = t.extend({
    of: this.active
   }, this.options.position);
   clearTimeout(this.timer);
   this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true");
   e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
  },
  collapseAll: function(e, i) {
   clearTimeout(this.timer);
   this.timer = this._delay(function() {
    var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
    if (!s.length) {
     s = this.element
    };
    this._close(s);
    this.blur(e);
    this.activeMenu = s
   }, this.delay)
  },
  _close: function(t) {
   if (!t) {
    t = this.active ? this.active.parent() : this.element
   };
   t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
  },
  collapse: function(t) {
   var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
   if (e && e.length) {
    this._close();
    this.focus(t, e)
   }
  },
  expand: function(t) {
   var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
   if (e && e.length) {
    this._open(e.parent());
    this._delay(function() {
     this.focus(t, e)
    })
   }
  },
  next: function(t) {
   this._move("next", "first", t)
  },
  previous: function(t) {
   this._move("prev", "last", t)
  },
  isFirstItem: function() {
   return this.active && !this.active.prevAll(".ui-menu-item").length
  },
  isLastItem: function() {
   return this.active && !this.active.nextAll(".ui-menu-item").length
  },
  _move: function(t, e, i) {
   var s;
   if (this.active) {
    if (t === "first" || t === "last") {
     s = this.active[t === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
    } else {
     s = this.active[t + "All"](".ui-menu-item").eq(0)
    }
   };
   if (!s || !s.length || !this.active) {
    s = this.activeMenu.children(".ui-menu-item")[e]()
   };
   this.focus(i, s)
  },
  nextPage: function(e) {
   var i, n, s;
   if (!this.active) {
    this.next(e);
    return
   };
   if (this.isLastItem()) {
    return
   };
   if (this._hasScroll()) {
    n = this.active.offset().top;
    s = this.element.height();
    this.active.nextAll(".ui-menu-item").each(function() {
     i = t(this);
     return i.offset().top - n - s < 0
    });
    this.focus(e, i)
   } else {
    this.focus(e, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
   }
  },
  previousPage: function(e) {
   var i, n, s;
   if (!this.active) {
    this.next(e);
    return
   };
   if (this.isFirstItem()) {
    return
   };
   if (this._hasScroll()) {
    n = this.active.offset().top;
    s = this.element.height();
    this.active.prevAll(".ui-menu-item").each(function() {
     i = t(this);
     return i.offset().top - n + s > 0
    });
    this.focus(e, i)
   } else {
    this.focus(e, this.activeMenu.children(".ui-menu-item").first())
   }
  },
  _hasScroll: function() {
   return this.element.outerHeight() < this.element.prop("scrollHeight")
  },
  select: function(e) {
   this.active = this.active || t(e.target).closest(".ui-menu-item");
   var i = {
    item: this.active
   };
   if (!this.active.has(".ui-menu").length) {
    this.collapseAll(e, !0)
   };
   this._trigger("select", e, i)
  }
 })
}(jQuery));
(function(t, e) {
 t.ui = t.ui || {};
 var o, s = Math.max,
  i = Math.abs,
  u = Math.round,
  f = /left|center|right/,
  h = /top|center|bottom/,
  c = /[\+\-]\d+(\.[\d]+)?%?/,
  l = /^\w+/,
  a = /%$/,
  p = t.fn.position;

 function r(t, e, i) {
  return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
 };

 function n(e, i) {
  return parseInt(t.css(e, i), 10) || 0
 };

 function d(e) {
  var i = e[0];
  if (i.nodeType === 9) {
   return {
    width: e.width(),
    height: e.height(),
    offset: {
     top: 0,
     left: 0
    }
   }
  };
  if (t.isWindow(i)) {
   return {
    width: e.width(),
    height: e.height(),
    offset: {
     top: e.scrollTop(),
     left: e.scrollLeft()
    }
   }
  };
  if (i.preventDefault) {
   return {
    width: 0,
    height: 0,
    offset: {
     top: i.pageY,
     left: i.pageX
    }
   }
  };
  return {
   width: e.outerWidth(),
   height: e.outerHeight(),
   offset: e.offset()
  }
 };
 t.position = {
  scrollbarWidth: function() {
   if (o !== e) {
    return o
   };
   var n, s, i = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
    a = i.children()[0];
   t("body").append(i);
   n = a.offsetWidth;
   i.css("overflow", "scroll");
   s = a.offsetWidth;
   if (n === s) {
    s = i[0].clientWidth
   };
   i.remove();
   return (o = n - s)
  },
  getScrollInfo: function(e) {
   var s = e.isWindow ? "" : e.element.css("overflow-x"),
    i = e.isWindow ? "" : e.element.css("overflow-y"),
    o = s === "scroll" || (s === "auto" && e.width < e.element[0].scrollWidth),
    n = i === "scroll" || (i === "auto" && e.height < e.element[0].scrollHeight);
   return {
    width: n ? t.position.scrollbarWidth() : 0,
    height: o ? t.position.scrollbarWidth() : 0
   }
  },
  getWithinInfo: function(e) {
   var i = t(e || window),
    s = t.isWindow(i[0]);
   return {
    element: i,
    isWindow: s,
    offset: i.offset() || {
     left: 0,
     top: 0
    },
    scrollLeft: i.scrollLeft(),
    scrollTop: i.scrollTop(),
    width: s ? i.width() : i.outerWidth(),
    height: s ? i.height() : i.outerHeight()
   }
  }
 };
 t.fn.position = function(e) {
  if (!e || !e.of) {
   return p.apply(this, arguments)
  };
  e = t.extend({}, e);
  var b, o, a, m, g, y, k = t(e.of),
   x = t.position.getWithinInfo(e.within),
   D = t.position.getScrollInfo(x),
   v = (e.collision || "flip").split(" "),
   w = {};
  y = d(k);
  if (k[0].preventDefault) {
   e.at = "left top"
  };
  o = y.width;
  a = y.height;
  m = y.offset;
  g = t.extend({}, m);
  t.each(["my", "at"], function() {
   var t = (e[this] || "").split(" "),
    s, i;
   if (t.length === 1) {
    t = f.test(t[0]) ? t.concat(["center"]) : h.test(t[0]) ? ["center"].concat(t) : ["center", "center"]
   };
   t[0] = f.test(t[0]) ? t[0] : "center";
   t[1] = h.test(t[1]) ? t[1] : "center";
   s = c.exec(t[0]);
   i = c.exec(t[1]);
   w[this] = [s ? s[0] : 0, i ? i[0] : 0];
   e[this] = [l.exec(t[0])[0], l.exec(t[1])[0]]
  });
  if (v.length === 1) {
   v[1] = v[0]
  };
  if (e.at[0] === "right") {
   g.left += o
  } else if (e.at[0] === "center") {
   g.left += o / 2
  };
  if (e.at[1] === "bottom") {
   g.top += a
  } else if (e.at[1] === "center") {
   g.top += a / 2
  };
  b = r(w.at, o, a);
  g.left += b[0];
  g.top += b[1];
  return this.each(function() {
   var I, C, f = t(this),
    c = f.outerWidth(),
    h = f.outerHeight(),
    y = n(this, "marginLeft"),
    p = n(this, "marginTop"),
    T = c + y + n(this, "marginRight") + D.width,
    P = h + p + n(this, "marginBottom") + D.height,
    l = t.extend({}, g),
    d = r(w.my, f.outerWidth(), f.outerHeight());
   if (e.my[0] === "right") {
    l.left -= c
   } else if (e.my[0] === "center") {
    l.left -= c / 2
   };
   if (e.my[1] === "bottom") {
    l.top -= h
   } else if (e.my[1] === "center") {
    l.top -= h / 2
   };
   l.left += d[0];
   l.top += d[1];
   if (!t.support.offsetFractions) {
    l.left = u(l.left);
    l.top = u(l.top)
   };
   I = {
    marginLeft: y,
    marginTop: p
   };
   t.each(["left", "top"], function(i, s) {
    if (t.ui.position[v[i]]) {
     t.ui.position[v[i]][s](l, {
      targetWidth: o,
      targetHeight: a,
      elemWidth: c,
      elemHeight: h,
      collisionPosition: I,
      collisionWidth: T,
      collisionHeight: P,
      offset: [b[0] + d[0], b[1] + d[1]],
      my: e.my,
      at: e.at,
      within: x,
      elem: f
     })
    }
   });
   if (e.using) {
    C = function(t) {
     var u = m.left - l.left,
      d = u + o - c,
      r = m.top - l.top,
      p = r + a - h,
      n = {
       target: {
        element: k,
        left: m.left,
        top: m.top,
        width: o,
        height: a
       },
       element: {
        element: f,
        left: l.left,
        top: l.top,
        width: c,
        height: h
       },
       horizontal: d < 0 ? "left" : u > 0 ? "right" : "center",
       vertical: p < 0 ? "top" : r > 0 ? "bottom" : "middle"
      };
     if (o < c && i(u + d) < o) {
      n.horizontal = "center"
     };
     if (a < h && i(r + p) < a) {
      n.vertical = "middle"
     };
     if (s(i(u), i(d)) > s(i(r), i(p))) {
      n.important = "horizontal"
     } else {
      n.important = "vertical"
     };
     e.using.call(this, t, n)
    }
   };
   f.offset(t.extend(l, {
    using: C
   }))
  })
 };
 t.ui.position = {
  fit: {
   left: function(t, e) {
    var r = e.within,
     n = r.isWindow ? r.scrollLeft : r.offset.left,
     a = r.width,
     l = t.left - e.collisionPosition.marginLeft,
     i = n - l,
     o = l + e.collisionWidth - a - n,
     h;
    if (e.collisionWidth > a) {
     if (i > 0 && o <= 0) {
      h = t.left + i + e.collisionWidth - a - n;
      t.left += i - h
     } else if (o > 0 && i <= 0) {
      t.left = n
     } else {
      if (i > o) {
       t.left = n + a - e.collisionWidth
      } else {
       t.left = n
      }
     }
    } else if (i > 0) {
     t.left += i
    } else if (o > 0) {
     t.left -= o
    } else {
     t.left = s(t.left - l, t.left)
    }
   },
   top: function(t, e) {
    var l = e.within,
     n = l.isWindow ? l.scrollTop : l.offset.top,
     a = e.within.height,
     r = t.top - e.collisionPosition.marginTop,
     i = n - r,
     o = r + e.collisionHeight - a - n,
     h;
    if (e.collisionHeight > a) {
     if (i > 0 && o <= 0) {
      h = t.top + i + e.collisionHeight - a - n;
      t.top += i - h
     } else if (o > 0 && i <= 0) {
      t.top = n
     } else {
      if (i > o) {
       t.top = n + a - e.collisionHeight
      } else {
       t.top = n
      }
     }
    } else if (i > 0) {
     t.top += i
    } else if (o > 0) {
     t.top -= o
    } else {
     t.top = s(t.top - r, t.top)
    }
   }
  },
  flip: {
   left: function(t, e) {
    var s = e.within,
     p = s.offset.left + s.scrollLeft,
     c = s.width,
     h = s.isWindow ? s.scrollLeft : s.offset.left,
     u = t.left - e.collisionPosition.marginLeft,
     f = u - h,
     d = u + e.collisionWidth - c - h,
     o = e.my[0] === "left" ? -e.elemWidth : e.my[0] === "right" ? e.elemWidth : 0,
     a = e.at[0] === "left" ? e.targetWidth : e.at[0] === "right" ? -e.targetWidth : 0,
     n = -2 * e.offset[0],
     r, l;
    if (f < 0) {
     r = t.left + o + a + n + e.collisionWidth - c - p;
     if (r < 0 || r < i(f)) {
      t.left += o + a + n
     }
    } else if (d > 0) {
     l = t.left - e.collisionPosition.marginLeft + o + a + n - h;
     if (l > 0 || i(l) < d) {
      t.left += o + a + n
     }
    }
   },
   top: function(t, e) {
    var n = e.within,
     p = n.offset.top + n.scrollTop,
     f = n.height,
     u = n.isWindow ? n.scrollTop : n.offset.top,
     d = t.top - e.collisionPosition.marginTop,
     h = d - u,
     c = d + e.collisionHeight - f - u,
     g = e.my[1] === "top",
     a = g ? -e.elemHeight : e.my[1] === "bottom" ? e.elemHeight : 0,
     o = e.at[1] === "top" ? e.targetHeight : e.at[1] === "bottom" ? -e.targetHeight : 0,
     s = -2 * e.offset[1],
     l, r;
    if (h < 0) {
     r = t.top + a + o + s + e.collisionHeight - f - p;
     if ((t.top + a + o + s) > h && (r < 0 || r < i(h))) {
      t.top += a + o + s
     }
    } else if (c > 0) {
     l = t.top - e.collisionPosition.marginTop + a + o + s - u;
     if ((t.top + a + o + s) > c && (l > 0 || i(l) < c)) {
      t.top += a + o + s
     }
    }
   }
  },
  flipfit: {
   left: function() {
    t.ui.position.flip.left.apply(this, arguments);
    t.ui.position.fit.left.apply(this, arguments)
   },
   top: function() {
    t.ui.position.flip.top.apply(this, arguments);
    t.ui.position.fit.top.apply(this, arguments)
   }
  }
 };
 (function() {
  var e, s, i, a, r, o = document.getElementsByTagName("body")[0],
   n = document.createElement("div");
  e = document.createElement(o ? "div" : "body");
  i = {
   visibility: "hidden",
   width: 0,
   height: 0,
   border: 0,
   margin: 0,
   background: "none"
  };
  if (o) {
   t.extend(i, {
    position: "absolute",
    left: "-1000px",
    top: "-1000px"
   })
  };
  for (r in i) {
   e.style[r] = i[r]
  };
  e.appendChild(n);
  s = o || document.documentElement;
  s.insertBefore(e, s.firstChild);
  n.style.cssText = "position: absolute; left: 10.7432222px;";
  a = t(n).offset().left;
  t.support.offsetFractions = a > 10 && a < 11;
  e.innerHTML = "";
  s.removeChild(e)
 })()
}(jQuery));
(function(t, e) {
 t.widget("ui.progressbar", {
  version: "1.10.2",
  options: {
   max: 100,
   value: 0,
   change: null,
   complete: null
  },
  min: 0,
  _create: function() {
   this.oldValue = this.options.value = this._constrainedValue();
   this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
    role: "progressbar",
    "aria-valuemin": this.min
   });
   this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
   this._refreshValue()
  },
  _destroy: function() {
   this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
   this.valueDiv.remove()
  },
  value: function(t) {
   if (t === e) {
    return this.options.value
   };
   this.options.value = this._constrainedValue(t);
   this._refreshValue()
  },
  _constrainedValue: function(t) {
   if (t === e) {
    t = this.options.value
   };
   this.indeterminate = t === !1;
   if (typeof t !== "number") {
    t = 0
   };
   return this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
  },
  _setOptions: function(t) {
   var e = t.value;
   delete t.value;
   this._super(t);
   this.options.value = this._constrainedValue(e);
   this._refreshValue()
  },
  _setOption: function(t, e) {
   if (t === "max") {
    e = Math.max(this.min, e)
   };
   this._super(t, e)
  },
  _percentage: function() {
   return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
  },
  _refreshValue: function() {
   var e = this.options.value,
    i = this._percentage();
   this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%");
   this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
   if (this.indeterminate) {
    this.element.removeAttr("aria-valuenow");
    if (!this.overlayDiv) {
     this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
    }
   } else {
    this.element.attr({
     "aria-valuemax": this.options.max,
     "aria-valuenow": e
    });
    if (this.overlayDiv) {
     this.overlayDiv.remove();
     this.overlayDiv = null
    }
   };
   if (this.oldValue !== e) {
    this.oldValue = e;
    this._trigger("change")
   };
   if (e === this.options.max) {
    this._trigger("complete")
   }
  }
 })
})(jQuery);
(function(t, e) {
 var i = 5;
 t.widget("ui.slider", t.ui.mouse, {
  version: "1.10.2",
  widgetEventPrefix: "slide",
  options: {
   animate: !1,
   distance: 0,
   max: 100,
   min: 0,
   orientation: "horizontal",
   range: !1,
   step: 1,
   value: 0,
   values: null,
   change: null,
   slide: null,
   start: null,
   stop: null
  },
  _create: function() {
   this._keySliding = !1;
   this._mouseSliding = !1;
   this._animateOff = !0;
   this._handleIndex = null;
   this._detectOrientation();
   this._mouseInit();
   this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
   this._refresh();
   this._setOption("disabled", this.options.disabled);
   this._animateOff = !1
  },
  _refresh: function() {
   this._createRange();
   this._createHandles();
   this._setupEvents();
   this._refreshValue()
  },
  _createHandles: function() {
   var s, i, o = this.options,
    e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
    a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
    n = [];
   i = (o.values && o.values.length) || 1;
   if (e.length > i) {
    e.slice(i).remove();
    e = e.slice(0, i)
   };
   for (s = e.length; s < i; s++) {
    n.push(a)
   };
   this.handles = e.add(t(n.join("")).appendTo(this.element));
   this.handle = this.handles.eq(0);
   this.handles.each(function(e) {
    t(this).data("ui-slider-handle-index", e)
   })
  },
  _createRange: function() {
   var e = this.options,
    i = "";
   if (e.range) {
    if (e.range === !0) {
     if (!e.values) {
      e.values = [this._valueMin(), this._valueMin()]
     } else if (e.values.length && e.values.length !== 2) {
      e.values = [e.values[0], e.values[0]]
     } else if (t.isArray(e.values)) {
      e.values = e.values.slice(0)
     }
    };
    if (!this.range || !this.range.length) {
     this.range = t("<div></div>").appendTo(this.element);
     i = "ui-slider-range ui-widget-header ui-corner-all"
    } else {
     this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
      "left": "",
      "bottom": ""
     })
    };
    this.range.addClass(i + ((e.range === "min" || e.range === "max") ? " ui-slider-range-" + e.range : ""))
   } else {
    this.range = t([])
   }
  },
  _setupEvents: function() {
   var t = this.handles.add(this.range).filter("a");
   this._off(t);
   this._on(t, this._handleEvents);
   this._hoverable(t);
   this._focusable(t)
  },
  _destroy: function() {
   this.handles.remove();
   this.range.remove();
   this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
   this._mouseDestroy()
  },
  _mouseCapture: function(e) {
   var h, a, s, i, n, c, r, u, o = this,
    l = this.options;
   if (l.disabled) {
    return !1
   };
   this.elementSize = {
    width: this.element.outerWidth(),
    height: this.element.outerHeight()
   };
   this.elementOffset = this.element.offset();
   h = {
    x: e.pageX,
    y: e.pageY
   };
   a = this._normValueFromMouse(h);
   s = this._valueMax() - this._valueMin() + 1;
   this.handles.each(function(e) {
    var r = Math.abs(a - o.values(e));
    if ((s > r) || (s === r && (e === o._lastChangedValue || o.values(e) === l.min))) {
     s = r;
     i = t(this);
     n = e
    }
   });
   c = this._start(e, n);
   if (c === !1) {
    return !1
   };
   this._mouseSliding = !0;
   this._handleIndex = n;
   i.addClass("ui-state-active").focus();
   r = i.offset();
   u = !t(e.target).parents().addBack().is(".ui-slider-handle");
   this._clickOffset = u ? {
    left: 0,
    top: 0
   } : {
    left: e.pageX - r.left - (i.width() / 2),
    top: e.pageY - r.top - (i.height() / 2) - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
   };
   if (!this.handles.hasClass("ui-state-hover")) {
    this._slide(e, n, a)
   };
   this._animateOff = !0;
   return !0
  },
  _mouseStart: function() {
   return !0
  },
  _mouseDrag: function(t) {
   var i = {
     x: t.pageX,
     y: t.pageY
    },
    e = this._normValueFromMouse(i);
   this._slide(t, this._handleIndex, e);
   return !1
  },
  _mouseStop: function(t) {
   this.handles.removeClass("ui-state-active");
   this._mouseSliding = !1;
   this._stop(t, this._handleIndex);
   this._change(t, this._handleIndex);
   this._handleIndex = null;
   this._clickOffset = null;
   this._animateOff = !1;
   return !1
  },
  _detectOrientation: function() {
   this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
  },
  _normValueFromMouse: function(t) {
   var s, i, e, o, n;
   if (this.orientation === "horizontal") {
    s = this.elementSize.width;
    i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
   } else {
    s = this.elementSize.height;
    i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
   };
   e = (i / s);
   if (e > 1) {
    e = 1
   };
   if (e < 0) {
    e = 0
   };
   if (this.orientation === "vertical") {
    e = 1 - e
   };
   o = this._valueMax() - this._valueMin();
   n = this._valueMin() + e * o;
   return this._trimAlignValue(n)
  },
  _start: function(t, e) {
   var i = {
    handle: this.handles[e],
    value: this.value()
   };
   if (this.options.values && this.options.values.length) {
    i.value = this.values(e);
    i.values = this.values()
   };
   return this._trigger("start", t, i)
  },
  _slide: function(t, e, i) {
   var s, o, n;
   if (this.options.values && this.options.values.length) {
    s = this.values(e ? 0 : 1);
    if ((this.options.values.length === 2 && this.options.range === !0) && ((e === 0 && i > s) || (e === 1 && i < s))) {
     i = s
    };
    if (i !== this.values(e)) {
     o = this.values();
     o[e] = i;
     n = this._trigger("slide", t, {
      handle: this.handles[e],
      value: i,
      values: o
     });
     s = this.values(e ? 0 : 1);
     if (n !== !1) {
      this.values(e, i, !0)
     }
    }
   } else {
    if (i !== this.value()) {
     n = this._trigger("slide", t, {
      handle: this.handles[e],
      value: i
     });
     if (n !== !1) {
      this.value(i)
     }
    }
   }
  },
  _stop: function(t, e) {
   var i = {
    handle: this.handles[e],
    value: this.value()
   };
   if (this.options.values && this.options.values.length) {
    i.value = this.values(e);
    i.values = this.values()
   };
   this._trigger("stop", t, i)
  },
  _change: function(t, e) {
   if (!this._keySliding && !this._mouseSliding) {
    var i = {
     handle: this.handles[e],
     value: this.value()
    };
    if (this.options.values && this.options.values.length) {
     i.value = this.values(e);
     i.values = this.values()
    };
    this._lastChangedValue = e;
    this._trigger("change", t, i)
   }
  },
  value: function(t) {
   if (arguments.length) {
    this.options.value = this._trimAlignValue(t);
    this._refreshValue();
    this._change(null, 0);
    return
   };
   return this._value()
  },
  values: function(e, i) {
   var n, o, s;
   if (arguments.length > 1) {
    this.options.values[e] = this._trimAlignValue(i);
    this._refreshValue();
    this._change(null, e);
    return
   };
   if (arguments.length) {
    if (t.isArray(arguments[0])) {
     n = this.options.values;
     o = arguments[0];
     for (s = 0; s < n.length; s += 1) {
      n[s] = this._trimAlignValue(o[s]);
      this._change(null, s)
     };
     this._refreshValue()
    } else {
     if (this.options.values && this.options.values.length) {
      return this._values(e)
     } else {
      return this.value()
     }
    }
   } else {
    return this._values()
   }
  },
  _setOption: function(e, i) {
   var s, n = 0;
   if (e === "range" && this.options.range === !0) {
    if (i === "min") {
     this.options.value = this._values(0);
     this.options.values = null
    } else if (i === "max") {
     this.options.value = this._values(this.options.values.length - 1);
     this.options.values = null
    }
   };
   if (t.isArray(this.options.values)) {
    n = this.options.values.length
   };
   t.Widget.prototype._setOption.apply(this, arguments);
   switch (e) {
    case "orientation":
     this._detectOrientation();
     this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
     this._refreshValue();
     break;
    case "value":
     this._animateOff = !0;
     this._refreshValue();
     this._change(null, 0);
     this._animateOff = !1;
     break;
    case "values":
     this._animateOff = !0;
     this._refreshValue();
     for (s = 0; s < n; s += 1) {
      this._change(null, s)
     };
     this._animateOff = !1;
     break;
    case "min":
    case "max":
     this._animateOff = !0;
     this._refreshValue();
     this._animateOff = !1;
     break;
    case "range":
     this._animateOff = !0;
     this._refresh();
     this._animateOff = !1;
     break
   }
  },
  _value: function() {
   var t = this.options.value;
   t = this._trimAlignValue(t);
   return t
  },
  _values: function(t) {
   var s, e, i;
   if (arguments.length) {
    s = this.options.values[t];
    s = this._trimAlignValue(s);
    return s
   } else if (this.options.values && this.options.values.length) {
    e = this.options.values.slice();
    for (i = 0; i < e.length; i += 1) {
     e[i] = this._trimAlignValue(e[i])
    };
    return e
   } else {
    return []
   }
  },
  _trimAlignValue: function(t) {
   if (t <= this._valueMin()) {
    return this._valueMin()
   };
   if (t >= this._valueMax()) {
    return this._valueMax()
   };
   var e = (this.options.step > 0) ? this.options.step : 1,
    i = (t - this._valueMin()) % e,
    s = t - i;
   if (Math.abs(i) * 2 >= e) {
    s += (i > 0) ? e : (-e)
   };
   return parseFloat(s.toFixed(5))
  },
  _valueMin: function() {
   return this.options.min
  },
  _valueMax: function() {
   return this.options.max
  },
  _refreshValue: function() {
   var h, e, u, a, l, o = this.options.range,
    s = this.options,
    i = this,
    n = (!this._animateOff) ? s.animate : !1,
    r = {};
   if (this.options.values && this.options.values.length) {
    this.handles.each(function(o) {
     e = (i.values(o) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100;
     r[i.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
     t(this).stop(1, 1)[n ? "animate" : "css"](r, s.animate);
     if (i.options.range === !0) {
      if (i.orientation === "horizontal") {
       if (o === 0) {
        i.range.stop(1, 1)[n ? "animate" : "css"]({
         left: e + "%"
        }, s.animate)
       };
       if (o === 1) {
        i.range[n ? "animate" : "css"]({
         width: (e - h) + "%"
        }, {
         queue: !1,
         duration: s.animate
        })
       }
      } else {
       if (o === 0) {
        i.range.stop(1, 1)[n ? "animate" : "css"]({
         bottom: (e) + "%"
        }, s.animate)
       };
       if (o === 1) {
        i.range[n ? "animate" : "css"]({
         height: (e - h) + "%"
        }, {
         queue: !1,
         duration: s.animate
        })
       }
      }
     };
     h = e
    })
   } else {
    u = this.value();
    a = this._valueMin();
    l = this._valueMax();
    e = (l !== a) ? (u - a) / (l - a) * 100 : 0;
    r[this.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
    this.handle.stop(1, 1)[n ? "animate" : "css"](r, s.animate);
    if (o === "min" && this.orientation === "horizontal") {
     this.range.stop(1, 1)[n ? "animate" : "css"]({
      width: e + "%"
     }, s.animate)
    };
    if (o === "max" && this.orientation === "horizontal") {
     this.range[n ? "animate" : "css"]({
      width: (100 - e) + "%"
     }, {
      queue: !1,
      duration: s.animate
     })
    };
    if (o === "min" && this.orientation === "vertical") {
     this.range.stop(1, 1)[n ? "animate" : "css"]({
      height: e + "%"
     }, s.animate)
    };
    if (o === "max" && this.orientation === "vertical") {
     this.range[n ? "animate" : "css"]({
      height: (100 - e) + "%"
     }, {
      queue: !1,
      duration: s.animate
     })
    }
   }
  },
  _handleEvents: {
   keydown: function(e) {
    var r, n, s, a, o = t(e.target).data("ui-slider-handle-index");
    switch (e.keyCode) {
     case t.ui.keyCode.HOME:
     case t.ui.keyCode.END:
     case t.ui.keyCode.PAGE_UP:
     case t.ui.keyCode.PAGE_DOWN:
     case t.ui.keyCode.UP:
     case t.ui.keyCode.RIGHT:
     case t.ui.keyCode.DOWN:
     case t.ui.keyCode.LEFT:
      e.preventDefault();
      if (!this._keySliding) {
       this._keySliding = !0;
       t(e.target).addClass("ui-state-active");
       r = this._start(e, o);
       if (r === !1) {
        return
       }
      };
      break
    };
    a = this.options.step;
    if (this.options.values && this.options.values.length) {
     n = s = this.values(o)
    } else {
     n = s = this.value()
    };
    switch (e.keyCode) {
     case t.ui.keyCode.HOME:
      s = this._valueMin();
      break;
     case t.ui.keyCode.END:
      s = this._valueMax();
      break;
     case t.ui.keyCode.PAGE_UP:
      s = this._trimAlignValue(n + ((this._valueMax() - this._valueMin()) / i));
      break;
     case t.ui.keyCode.PAGE_DOWN:
      s = this._trimAlignValue(n - ((this._valueMax() - this._valueMin()) / i));
      break;
     case t.ui.keyCode.UP:
     case t.ui.keyCode.RIGHT:
      if (n === this._valueMax()) {
       return
      };
      s = this._trimAlignValue(n + a);
      break;
     case t.ui.keyCode.DOWN:
     case t.ui.keyCode.LEFT:
      if (n === this._valueMin()) {
       return
      };
      s = this._trimAlignValue(n - a);
      break
    };
    this._slide(e, o, s)
   },
   click: function(t) {
    t.preventDefault()
   },
   keyup: function(e) {
    var i = t(e.target).data("ui-slider-handle-index");
    if (this._keySliding) {
     this._keySliding = !1;
     this._stop(e, i);
     this._change(e, i);
     t(e.target).removeClass("ui-state-active")
    }
   }
  }
 })
}(jQuery));
(function(t) {
 function e(t) {
  return function() {
   var e = this.element.val();
   t.apply(this, arguments);
   this._refresh();
   if (e !== this.element.val()) {
    this._trigger("change")
   }
  }
 };
 t.widget("ui.spinner", {
  version: "1.10.2",
  defaultElement: "<input>",
  widgetEventPrefix: "spin",
  options: {
   culture: null,
   icons: {
    down: "ui-icon-triangle-1-s",
    up: "ui-icon-triangle-1-n"
   },
   incremental: !0,
   max: null,
   min: null,
   numberFormat: null,
   page: 10,
   step: 1,
   change: null,
   spin: null,
   start: null,
   stop: null
  },
  _create: function() {
   this._setOption("max", this.options.max);
   this._setOption("min", this.options.min);
   this._setOption("step", this.options.step);
   this._value(this.element.val(), !0);
   this._draw();
   this._on(this._events);
   this._refresh();
   this._on(this.window, {
    beforeunload: function() {
     this.element.removeAttr("autocomplete")
    }
   })
  },
  _getCreateOptions: function() {
   var e = {},
    i = this.element;
   t.each(["min", "max", "step"], function(t, s) {
    var n = i.attr(s);
    if (n !== undefined && n.length) {
     e[s] = n
    }
   });
   return e
  },
  _events: {
   keydown: function(t) {
    if (this._start(t) && this._keydown(t)) {
     t.preventDefault()
    }
   },
   keyup: "_stop",
   focus: function() {
    this.previous = this.element.val()
   },
   blur: function(t) {
    if (this.cancelBlur) {
     delete this.cancelBlur;
     return
    };
    this._stop();
    this._refresh();
    if (this.previous !== this.element.val()) {
     this._trigger("change", t)
    }
   },
   mousewheel: function(t, e) {
    if (!e) {
     return
    };
    if (!this.spinning && !this._start(t)) {
     return !1
    };
    this._spin((e > 0 ? 1 : -1) * this.options.step, t);
    clearTimeout(this.mousewheelTimer);
    this.mousewheelTimer = this._delay(function() {
     if (this.spinning) {
      this._stop(t)
     }
    }, 100);
    t.preventDefault()
   },
   "mousedown .ui-spinner-button": function(e) {
    var i;
    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();

    function s() {
     var t = this.element[0] === this.document[0].activeElement;
     if (!t) {
      this.element.focus();
      this.previous = i;
      this._delay(function() {
       this.previous = i
      })
     }
    };
    e.preventDefault();
    s.call(this);
    this.cancelBlur = !0;
    this._delay(function() {
     delete this.cancelBlur;
     s.call(this)
    });
    if (this._start(e) === !1) {
     return
    };
    this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
   },
   "mouseup .ui-spinner-button": "_stop",
   "mouseenter .ui-spinner-button": function(e) {
    if (!t(e.currentTarget).hasClass("ui-state-active")) {
     return
    };
    if (this._start(e) === !1) {
     return !1
    };
    this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
   },
   "mouseleave .ui-spinner-button": "_stop"
  },
  _draw: function() {
   var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
   this.element.attr("role", "spinbutton");
   this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
   if (this.buttons.height() > Math.ceil(t.height() * 0.5) && t.height() > 0) {
    t.height(t.height())
   };
   if (this.options.disabled) {
    this.disable()
   }
  },
  _keydown: function(e) {
   var s = this.options,
    i = t.ui.keyCode;
   switch (e.keyCode) {
    case i.UP:
     this._repeat(null, 1, e);
     return !0;
    case i.DOWN:
     this._repeat(null, -1, e);
     return !0;
    case i.PAGE_UP:
     this._repeat(null, s.page, e);
     return !0;
    case i.PAGE_DOWN:
     this._repeat(null, -s.page, e);
     return !0
   };
   return !1
  },
  _uiSpinnerHtml: function() {
   return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
  },
  _buttonHtml: function() {
   return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
  },
  _start: function(t) {
   if (!this.spinning && this._trigger("start", t) === !1) {
    return !1
   };
   if (!this.counter) {
    this.counter = 1
   };
   this.spinning = !0;
   return !0
  },
  _repeat: function(t, e, i) {
   t = t || 500;
   clearTimeout(this.timer);
   this.timer = this._delay(function() {
    this._repeat(40, e, i)
   }, t);
   this._spin(e * this.options.step, i)
  },
  _spin: function(t, e) {
   var i = this.value() || 0;
   if (!this.counter) {
    this.counter = 1
   };
   i = this._adjustValue(i + t * this._increment(this.counter));
   if (!this.spinning || this._trigger("spin", e, {
     value: i
    }) !== !1) {
    this._value(i);
    this.counter++
   }
  },
  _increment: function(e) {
   var i = this.options.incremental;
   if (i) {
    return t.isFunction(i) ? i(e) : Math.floor(e * e * e / 50000 - e * e / 500 + 17 * e / 200 + 1)
   };
   return 1
  },
  _precision: function() {
   var t = this._precisionOf(this.options.step);
   if (this.options.min !== null) {
    t = Math.max(t, this._precisionOf(this.options.min))
   };
   return t
  },
  _precisionOf: function(t) {
   var i = t.toString(),
    e = i.indexOf(".");
   return e === -1 ? 0 : i.length - e - 1
  },
  _adjustValue: function(t) {
   var s, i, e = this.options;
   s = e.min !== null ? e.min : 0;
   i = t - s;
   i = Math.round(i / e.step) * e.step;
   t = s + i;
   t = parseFloat(t.toFixed(this._precision()));
   if (e.max !== null && t > e.max) {
    return e.max
   };
   if (e.min !== null && t < e.min) {
    return e.min
   };
   return t
  },
  _stop: function(t) {
   if (!this.spinning) {
    return
   };
   clearTimeout(this.timer);
   clearTimeout(this.mousewheelTimer);
   this.counter = 0;
   this.spinning = !1;
   this._trigger("stop", t)
  },
  _setOption: function(t, e) {
   if (t === "culture" || t === "numberFormat") {
    var i = this._parse(this.element.val());
    this.options[t] = e;
    this.element.val(this._format(i));
    return
   };
   if (t === "max" || t === "min" || t === "step") {
    if (typeof e === "string") {
     e = this._parse(e)
    }
   };
   if (t === "icons") {
    this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up);
    this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)
   };
   this._super(t, e);
   if (t === "disabled") {
    if (e) {
     this.element.prop("disabled", !0);
     this.buttons.button("disable")
    } else {
     this.element.prop("disabled", !1);
     this.buttons.button("enable")
    }
   }
  },
  _setOptions: e(function(t) {
   this._super(t);
   this._value(this.element.val())
  }),
  _parse: function(t) {
   if (typeof t === "string" && t !== "") {
    t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t
   };
   return t === "" || isNaN(t) ? null : t
  },
  _format: function(t) {
   if (t === "") {
    return ""
   };
   return window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
  },
  _refresh: function() {
   this.element.attr({
    "aria-valuemin": this.options.min,
    "aria-valuemax": this.options.max,
    "aria-valuenow": this._parse(this.element.val())
   })
  },
  _value: function(t, e) {
   var i;
   if (t !== "") {
    i = this._parse(t);
    if (i !== null) {
     if (!e) {
      i = this._adjustValue(i)
     };
     t = this._format(i)
    }
   };
   this.element.val(t);
   this._refresh()
  },
  _destroy: function() {
   this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
   this.uiSpinner.replaceWith(this.element)
  },
  stepUp: e(function(t) {
   this._stepUp(t)
  }),
  _stepUp: function(t) {
   if (this._start()) {
    this._spin((t || 1) * this.options.step);
    this._stop()
   }
  },
  stepDown: e(function(t) {
   this._stepDown(t)
  }),
  _stepDown: function(t) {
   if (this._start()) {
    this._spin((t || 1) * -this.options.step);
    this._stop()
   }
  },
  pageUp: e(function(t) {
   this._stepUp((t || 1) * this.options.page)
  }),
  pageDown: e(function(t) {
   this._stepDown((t || 1) * this.options.page)
  }),
  value: function(t) {
   if (!arguments.length) {
    return this._parse(this.element.val())
   };
   e(this._value).call(this, t)
  },
  widget: function() {
   return this.uiSpinner
  }
 })
}(jQuery));
(function(t, e) {
 var n = 0,
  i = /#.*$/;

 function o() {
  return ++n
 };

 function s(t) {
  return t.hash.length > 1 && decodeURIComponent(t.href.replace(i, "")) === decodeURIComponent(location.href.replace(i, ""))
 };
 t.widget("ui.tabs", {
  version: "1.10.2",
  delay: 300,
  options: {
   active: null,
   collapsible: !1,
   event: "click",
   heightStyle: "content",
   hide: null,
   show: null,
   activate: null,
   beforeActivate: null,
   beforeLoad: null,
   load: null
  },
  _create: function() {
   var i = this,
    e = this.options;
   this.running = !1;
   this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
    if (t(this).is(".ui-state-disabled")) {
     e.preventDefault()
    }
   }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
    if (t(this).closest("li").is(".ui-state-disabled")) {
     this.blur()
    }
   });
   this._processTabs();
   e.active = this._initialActive();
   if (t.isArray(e.disabled)) {
    e.disabled = t.unique(e.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
     return i.tabs.index(t)
    }))).sort()
   };
   if (this.options.active !== !1 && this.anchors.length) {
    this.active = this._findActive(e.active)
   } else {
    this.active = t()
   };
   this._refresh();
   if (this.active.length) {
    this.load(e.active)
   }
  },
  _initialActive: function() {
   var e = this.options.active,
    s = this.options.collapsible,
    i = location.hash.substring(1);
   if (e === null) {
    if (i) {
     this.tabs.each(function(s, n) {
      if (t(n).attr("aria-controls") === i) {
       e = s;
       return !1
      }
     })
    };
    if (e === null) {
     e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
    };
    if (e === null || e === -1) {
     e = this.tabs.length ? 0 : !1
    }
   };
   if (e !== !1) {
    e = this.tabs.index(this.tabs.eq(e));
    if (e === -1) {
     e = s ? !1 : 0
    }
   };
   if (!s && e === !1 && this.anchors.length) {
    e = 0
   };
   return e
  },
  _getCreateEventData: function() {
   return {
    tab: this.active,
    panel: !this.active.length ? t() : this._getPanelForTab(this.active)
   }
  },
  _tabKeydown: function(e) {
   var n = t(this.document[0].activeElement).closest("li"),
    i = this.tabs.index(n),
    s = !0;
   if (this._handlePageNav(e)) {
    return
   };
   switch (e.keyCode) {
    case t.ui.keyCode.RIGHT:
    case t.ui.keyCode.DOWN:
     i++;
     break;
    case t.ui.keyCode.UP:
    case t.ui.keyCode.LEFT:
     s = !1;
     i--;
     break;
    case t.ui.keyCode.END:
     i = this.anchors.length - 1;
     break;
    case t.ui.keyCode.HOME:
     i = 0;
     break;
    case t.ui.keyCode.SPACE:
     e.preventDefault();
     clearTimeout(this.activating);
     this._activate(i);
     return;
    case t.ui.keyCode.ENTER:
     e.preventDefault();
     clearTimeout(this.activating);
     this._activate(i === this.options.active ? !1 : i);
     return;
    default:
     return
   };
   e.preventDefault();
   clearTimeout(this.activating);
   i = this._focusNextTab(i, s);
   if (!e.ctrlKey) {
    n.attr("aria-selected", "false");
    this.tabs.eq(i).attr("aria-selected", "true");
    this.activating = this._delay(function() {
     this.option("active", i)
    }, this.delay)
   }
  },
  _panelKeydown: function(e) {
   if (this._handlePageNav(e)) {
    return
   };
   if (e.ctrlKey && e.keyCode === t.ui.keyCode.UP) {
    e.preventDefault();
    this.active.focus()
   }
  },
  _handlePageNav: function(e) {
   if (e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP) {
    this._activate(this._focusNextTab(this.options.active - 1, !1));
    return !0
   };
   if (e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN) {
    this._activate(this._focusNextTab(this.options.active + 1, !0));
    return !0
   }
  },
  _findNextTab: function(e, i) {
   var s = this.tabs.length - 1;

   function n() {
    if (e > s) {
     e = 0
    };
    if (e < 0) {
     e = s
    };
    return e
   }
   while (t.inArray(n(), this.options.disabled) !== -1) {
    e = i ? e + 1 : e - 1
   };
   return e
  },
  _focusNextTab: function(t, e) {
   t = this._findNextTab(t, e);
   this.tabs.eq(t).focus();
   return t
  },
  _setOption: function(t, e) {
   if (t === "active") {
    this._activate(e);
    return
   };
   if (t === "disabled") {
    this._setupDisabled(e);
    return
   };
   this._super(t, e);
   if (t === "collapsible") {
    this.element.toggleClass("ui-tabs-collapsible", e);
    if (!e && this.options.active === !1) {
     this._activate(0)
    }
   };
   if (t === "event") {
    this._setupEvents(e)
   };
   if (t === "heightStyle") {
    this._setupHeightStyle(e)
   }
  },
  _tabId: function(t) {
   return t.attr("aria-controls") || "ui-tabs-" + o()
  },
  _sanitizeSelector: function(t) {
   return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
  },
  refresh: function() {
   var e = this.options,
    i = this.tablist.children(":has(a[href])");
   e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
    return i.index(t)
   });
   this._processTabs();
   if (e.active === !1 || !this.anchors.length) {
    e.active = !1;
    this.active = t()
   } else if (this.active.length && !t.contains(this.tablist[0], this.active[0])) {
    if (this.tabs.length === e.disabled.length) {
     e.active = !1;
     this.active = t()
    } else {
     this._activate(this._findNextTab(Math.max(0, e.active - 1), !1))
    }
   } else {
    e.active = this.tabs.index(this.active)
   };
   this._refresh()
  },
  _refresh: function() {
   this._setupDisabled(this.options.disabled);
   this._setupEvents(this.options.event);
   this._setupHeightStyle(this.options.heightStyle);
   this.tabs.not(this.active).attr({
    "aria-selected": "false",
    tabIndex: -1
   });
   this.panels.not(this._getPanelForTab(this.active)).hide().attr({
    "aria-expanded": "false",
    "aria-hidden": "true"
   });
   if (!this.active.length) {
    this.tabs.eq(0).attr("tabIndex", 0)
   } else {
    this.active.addClass("ui-tabs-active ui-state-active").attr({
     "aria-selected": "true",
     tabIndex: 0
    });
    this._getPanelForTab(this.active).show().attr({
     "aria-expanded": "true",
     "aria-hidden": "false"
    })
   }
  },
  _processTabs: function() {
   var e = this;
   this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
   this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
    role: "tab",
    tabIndex: -1
   });
   this.anchors = this.tabs.map(function() {
    return t("a", this)[0]
   }).addClass("ui-tabs-anchor").attr({
    role: "presentation",
    tabIndex: -1
   });
   this.panels = t();
   this.anchors.each(function(i, n) {
    var a, o, l, u = t(n).uniqueId().attr("id"),
     r = t(n).closest("li"),
     h = r.attr("aria-controls");
    if (s(n)) {
     a = n.hash;
     o = e.element.find(e._sanitizeSelector(a))
    } else {
     l = e._tabId(r);
     a = "#" + l;
     o = e.element.find(a);
     if (!o.length) {
      o = e._createPanel(l);
      o.insertAfter(e.panels[i - 1] || e.tablist)
     };
     o.attr("aria-live", "polite")
    };
    if (o.length) {
     e.panels = e.panels.add(o)
    };
    if (h) {
     r.data("ui-tabs-aria-controls", h)
    };
    r.attr({
     "aria-controls": a.substring(1),
     "aria-labelledby": u
    });
    o.attr("aria-labelledby", u)
   });
   this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
  },
  _getList: function() {
   return this.element.find("ol,ul").eq(0)
  },
  _createPanel: function(e) {
   return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
  },
  _setupDisabled: function(e) {
   if (t.isArray(e)) {
    if (!e.length) {
     e = !1
    } else if (e.length === this.anchors.length) {
     e = !0
    }
   };
   for (var s = 0, i;
    (i = this.tabs[s]); s++) {
    if (e === !0 || t.inArray(s, e) !== -1) {
     t(i).addClass("ui-state-disabled").attr("aria-disabled", "true")
    } else {
     t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled")
    }
   };
   this.options.disabled = e
  },
  _setupEvents: function(e) {
   var i = {
    click: function(t) {
     t.preventDefault()
    }
   };
   if (e) {
    t.each(e.split(" "), function(t, e) {
     i[e] = "_eventHandler"
    })
   };
   this._off(this.anchors.add(this.tabs).add(this.panels));
   this._on(this.anchors, i);
   this._on(this.tabs, {
    keydown: "_tabKeydown"
   });
   this._on(this.panels, {
    keydown: "_panelKeydown"
   });
   this._focusable(this.tabs);
   this._hoverable(this.tabs)
  },
  _setupHeightStyle: function(e) {
   var i, s = this.element.parent();
   if (e === "fill") {
    i = s.height();
    i -= this.element.outerHeight() - this.element.height();
    this.element.siblings(":visible").each(function() {
     var s = t(this),
      e = s.css("position");
     if (e === "absolute" || e === "fixed") {
      return
     };
     i -= s.outerHeight(!0)
    });
    this.element.children().not(this.panels).each(function() {
     i -= t(this).outerHeight(!0)
    });
    this.panels.each(function() {
     t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
    }).css("overflow", "auto")
   } else if (e === "auto") {
    i = 0;
    this.panels.each(function() {
     i = Math.max(i, t(this).height("").height())
    }).height(i)
   }
  },
  _eventHandler: function(e) {
   var r = this.options,
    s = this.active,
    u = t(e.currentTarget),
    i = u.closest("li"),
    a = i[0] === s[0],
    n = a && r.collapsible,
    o = n ? t() : this._getPanelForTab(i),
    l = !s.length ? t() : this._getPanelForTab(s),
    h = {
     oldTab: s,
     oldPanel: l,
     newTab: n ? t() : i,
     newPanel: o
    };
   e.preventDefault();
   if (i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || (a && !r.collapsible) || (this._trigger("beforeActivate", e, h) === !1)) {
    return
   };
   r.active = n ? !1 : this.tabs.index(i);
   this.active = a ? t() : i;
   if (this.xhr) {
    this.xhr.abort()
   };
   if (!l.length && !o.length) {
    t.error("jQuery UI Tabs: Mismatching fragment identifier.")
   };
   if (o.length) {
    this.load(this.tabs.index(i), e)
   };
   this._toggle(e, h)
  },
  _toggle: function(e, i) {
   var n = this,
    s = i.newPanel,
    o = i.oldPanel;
   this.running = !0;

   function r() {
    n.running = !1;
    n._trigger("activate", e, i)
   };

   function a() {
    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
    if (s.length && n.options.show) {
     n._show(s, n.options.show, r)
    } else {
     s.show();
     r()
    }
   };
   if (o.length && this.options.hide) {
    this._hide(o, this.options.hide, function() {
     i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
     a()
    })
   } else {
    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
    o.hide();
    a()
   };
   o.attr({
    "aria-expanded": "false",
    "aria-hidden": "true"
   });
   i.oldTab.attr("aria-selected", "false");
   if (s.length && o.length) {
    i.oldTab.attr("tabIndex", -1)
   } else if (s.length) {
    this.tabs.filter(function() {
     return t(this).attr("tabIndex") === 0
    }).attr("tabIndex", -1)
   };
   s.attr({
    "aria-expanded": "true",
    "aria-hidden": "false"
   });
   i.newTab.attr({
    "aria-selected": "true",
    tabIndex: 0
   })
  },
  _activate: function(e) {
   var s, i = this._findActive(e);
   if (i[0] === this.active[0]) {
    return
   };
   if (!i.length) {
    i = this.active
   };
   s = i.find(".ui-tabs-anchor")[0];
   this._eventHandler({
    target: s,
    currentTarget: s,
    preventDefault: t.noop
   })
  },
  _findActive: function(e) {
   return e === !1 ? t() : this.tabs.eq(e)
  },
  _getIndex: function(t) {
   if (typeof t === "string") {
    t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))
   };
   return t
  },
  _destroy: function() {
   if (this.xhr) {
    this.xhr.abort()
   };
   this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
   this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
   this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
   this.tabs.add(this.panels).each(function() {
    if (t.data(this, "ui-tabs-destroy")) {
     t(this).remove()
    } else {
     t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
    }
   });
   this.tabs.each(function() {
    var e = t(this),
     i = e.data("ui-tabs-aria-controls");
    if (i) {
     e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
    } else {
     e.removeAttr("aria-controls")
    }
   });
   this.panels.show();
   if (this.options.heightStyle !== "content") {
    this.panels.css("height", "")
   }
  },
  enable: function(i) {
   var s = this.options.disabled;
   if (s === !1) {
    return
   };
   if (i === e) {
    s = !1
   } else {
    i = this._getIndex(i);
    if (t.isArray(s)) {
     s = t.map(s, function(t) {
      return t !== i ? t : null
     })
    } else {
     s = t.map(this.tabs, function(t, e) {
      return e !== i ? e : null
     })
    }
   };
   this._setupDisabled(s)
  },
  disable: function(i) {
   var s = this.options.disabled;
   if (s === !0) {
    return
   };
   if (i === e) {
    s = !0
   } else {
    i = this._getIndex(i);
    if (t.inArray(i, s) !== -1) {
     return
    };
    if (t.isArray(s)) {
     s = t.merge([i], s).sort()
    } else {
     s = [i]
    }
   };
   this._setupDisabled(s)
  },
  load: function(e, i) {
   e = this._getIndex(e);
   var a = this,
    n = this.tabs.eq(e),
    l = n.find(".ui-tabs-anchor"),
    o = this._getPanelForTab(n),
    r = {
     tab: n,
     panel: o
    };
   if (s(l[0])) {
    return
   };
   this.xhr = t.ajax(this._ajaxSettings(l, i, r));
   if (this.xhr && this.xhr.statusText !== "canceled") {
    n.addClass("ui-tabs-loading");
    o.attr("aria-busy", "true");
    this.xhr.success(function(t) {
     setTimeout(function() {
      o.html(t);
      a._trigger("load", i, r)
     }, 1)
    }).complete(function(t, e) {
     setTimeout(function() {
      if (e === "abort") {
       a.panels.stop(!1, !0)
      };
      n.removeClass("ui-tabs-loading");
      o.removeAttr("aria-busy");
      if (t === a.xhr) {
       delete a.xhr
      }
     }, 1)
    })
   }
  },
  _ajaxSettings: function(e, i, s) {
   var n = this;
   return {
    url: e.attr("href"),
    beforeSend: function(e, o) {
     return n._trigger("beforeLoad", i, t.extend({
      jqXHR: e,
      ajaxSettings: o
     }, s))
    }
   }
  },
  _getPanelForTab: function(e) {
   var i = t(e).attr("aria-controls");
   return this.element.find(this._sanitizeSelector("#" + i))
  }
 })
})(jQuery);
(function(t) {
 var i = 0;

 function s(e, i) {
  var s = (e.attr("aria-describedby") || "").split(/\s+/);
  s.push(i);
  e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
 };

 function e(e) {
  var n = e.data("ui-tooltip-id"),
   i = (e.attr("aria-describedby") || "").split(/\s+/),
   s = t.inArray(n, i);
  if (s !== -1) {
   i.splice(s, 1)
  };
  e.removeData("ui-tooltip-id");
  i = t.trim(i.join(" "));
  if (i) {
   e.attr("aria-describedby", i)
  } else {
   e.removeAttr("aria-describedby")
  }
 };
 t.widget("ui.tooltip", {
  version: "1.10.2",
  options: {
   content: function() {
    var e = t(this).attr("title") || "";
    return t("<a>").text(e).html()
   },
   hide: !0,
   items: "[title]:not([disabled])",
   position: {
    my: "left top+15",
    at: "left bottom",
    collision: "flipfit flip"
   },
   show: !0,
   tooltipClass: null,
   track: !1,
   close: null,
   open: null
  },
  _create: function() {
   this._on({
    mouseover: "open",
    focusin: "open"
   });
   this.tooltips = {};
   this.parents = {};
   if (this.options.disabled) {
    this._disable()
   }
  },
  _setOption: function(e, i) {
   var s = this;
   if (e === "disabled") {
    this[i ? "_disable" : "_enable"]();
    this.options[e] = i;
    return
   };
   this._super(e, i);
   if (e === "content") {
    t.each(this.tooltips, function(t, e) {
     s._updateContent(e)
    })
   }
  },
  _disable: function() {
   var e = this;
   t.each(this.tooltips, function(i, s) {
    var n = t.Event("blur");
    n.target = n.currentTarget = s[0];
    e.close(n, !0)
   });
   this.element.find(this.options.items).addBack().each(function() {
    var e = t(this);
    if (e.is("[title]")) {
     e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
    }
   })
  },
  _enable: function() {
   this.element.find(this.options.items).addBack().each(function() {
    var e = t(this);
    if (e.data("ui-tooltip-title")) {
     e.attr("title", e.data("ui-tooltip-title"))
    }
   })
  },
  open: function(e) {
   var s = this,
    i = t(e ? e.target : this.element).closest(this.options.items);
   if (!i.length || i.data("ui-tooltip-id")) {
    return
   };
   if (i.attr("title")) {
    i.data("ui-tooltip-title", i.attr("title"))
   };
   i.data("ui-tooltip-open", !0);
   if (e && e.type === "mouseover") {
    i.parents().each(function() {
     var e = t(this),
      i;
     if (e.data("ui-tooltip-open")) {
      i = t.Event("blur");
      i.target = i.currentTarget = this;
      s.close(i, !0)
     };
     if (e.attr("title")) {
      e.uniqueId();
      s.parents[this.id] = {
       element: this,
       title: e.attr("title")
      };
      e.attr("title", "")
     }
    })
   };
   this._updateContent(i, e)
  },
  _updateContent: function(t, e) {
   var s, i = this.options.content,
    o = this,
    n = e ? e.type : null;
   if (typeof i === "string") {
    return this._open(e, t, i)
   };
   s = i.call(t[0], function(i) {
    if (!t.data("ui-tooltip-open")) {
     return
    };
    o._delay(function() {
     if (e) {
      e.type = n
     };
     this._open(e, t, i)
    })
   });
   if (s) {
    this._open(e, t, s)
   }
  },
  _open: function(e, i, n) {
   var o, a, h, r = t.extend({}, this.options.position);
   if (!n) {
    return
   };
   o = this._find(i);
   if (o.length) {
    o.find(".ui-tooltip-content").html(n);
    return
   };
   if (i.is("[title]")) {
    if (e && e.type === "mouseover") {
     i.attr("title", "")
    } else {
     i.removeAttr("title")
    }
   };
   o = this._tooltip(i);
   s(i, o.attr("id"));
   o.find(".ui-tooltip-content").html(n);

   function l(t) {
    r.of = t;
    if (o.is(":hidden")) {
     return
    };
    o.position(r)
   };
   if (this.options.track && e && /^mouse/.test(e.type)) {
    this._on(this.document, {
     mousemove: l
    });
    l(e)
   } else {
    o.position(t.extend({
     of: i
    }, this.options.position))
   };
   o.hide();
   this._show(o, this.options.show);
   if (this.options.show && this.options.show.delay) {
    h = this.delayedShow = setInterval(function() {
     if (o.is(":visible")) {
      l(r.of);
      clearInterval(h)
     }
    }, t.fx.interval)
   };
   this._trigger("open", e, {
    tooltip: o
   });
   a = {
    keyup: function(e) {
     if (e.keyCode === t.ui.keyCode.ESCAPE) {
      var s = t.Event(e);
      s.currentTarget = i[0];
      this.close(s, !0)
     }
    },
    remove: function() {
     this._removeTooltip(o)
    }
   };
   if (!e || e.type === "mouseover") {
    a.mouseleave = "close"
   };
   if (!e || e.type === "focusin") {
    a.focusout = "close"
   };
   this._on(!0, i, a)
  },
  close: function(i) {
   var o = this,
    s = t(i ? i.currentTarget : this.element),
    n = this._find(s);
   if (this.closing) {
    return
   };
   clearInterval(this.delayedShow);
   if (s.data("ui-tooltip-title")) {
    s.attr("title", s.data("ui-tooltip-title"))
   };
   e(s);
   n.stop(!0);
   this._hide(n, this.options.hide, function() {
    o._removeTooltip(t(this))
   });
   s.removeData("ui-tooltip-open");
   this._off(s, "mouseleave focusout keyup");
   if (s[0] !== this.element[0]) {
    this._off(s, "remove")
   };
   this._off(this.document, "mousemove");
   if (i && i.type === "mouseleave") {
    t.each(this.parents, function(e, i) {
     t(i.element).attr("title", i.title);
     delete o.parents[e]
    })
   };
   this.closing = !0;
   this._trigger("close", i, {
    tooltip: n
   });
   this.closing = !1
  },
  _tooltip: function(e) {
   var n = "ui-tooltip-" + i++,
    s = t("<div>").attr({
     id: n,
     role: "tooltip"
    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
   t("<div>").addClass("ui-tooltip-content").appendTo(s);
   s.appendTo(this.document[0].body);
   this.tooltips[n] = e;
   return s
  },
  _find: function(e) {
   var i = e.data("ui-tooltip-id");
   return i ? t("#" + i) : t()
  },
  _removeTooltip: function(t) {
   t.remove();
   delete this.tooltips[t.attr("id")]
  },
  _destroy: function() {
   var e = this;
   t.each(this.tooltips, function(i, s) {
    var n = t.Event("blur");
    n.target = n.currentTarget = s[0];
    e.close(n, !0);
    t("#" + i).remove();
    if (s.data("ui-tooltip-title")) {
     s.attr("title", s.data("ui-tooltip-title"));
     s.removeData("ui-tooltip-title")
    }
   })
  }
 })
}(jQuery));;
$(document).ready(function() {
 if ($('.alarm').length) {
  $('#header').css({
   'margin-bottom': '40px'
  });
  $('.alarm .close').click(function() {
   $(this).parents('.alarm').css({
    'display': 'none'
   });
   $('#header').css({
    'margin-bottom': '0px'
   })
  })
 };
 if ($('.time_date_left').length > 0) {
  function s() {
   var t = new Date(),
    e = t.getTime();
   $('.time_date_left').each(function() {
    var c = $(this).attr('val'),
     i = e - c,
     d = i / 1000,
     l = i / 1000 / 60,
     n = i / 1000 / 60 / 60,
     a = i / 1000 / 60 / 60 / 24,
     o = i / 1000 / 60 / 60 / 24 / 7,
     s = i / 1000 / 60 / 60 / 24 / 31,
     r = i / 1000 / 60 / 60 / 24 / 366;
    if (r > 1) {
     r = Math.round(r);
     var t = r + ' year';
     if (r > 1) {
      t += 's'
     }
    } else if (s > 1) {
     s = Math.round(s);
     var t = s + ' month';
     if (s > 1) {
      t += 'es'
     }
    } else if (o > 1) {
     o = Math.round(o);
     var t = o + ' week';
     if (o > 1) {
      t += 's'
     }
    } else if (a > 1) {
     a = Math.round(a);
     var t = a + ' day';
     if (a > 1) {
      t += 's'
     }
    } else if (n > 1) {
     n = Math.round(n);
     var t = n + ' hour';
     if (n > 1) {
      t += 's'
     }
    } else if (l > 1) {
     l = Math.round(l);
     var t = l + ' minut';
     if (l > 1) {
      t += 's'
     }
    } else {
     d = Math.round(d);
     var t = d + ' second';
     if (d > 1) {
      t += 's'
     }
    };
    var m = 'about ' + t + ' ago';
    $(this).text(m)
   })
  };
  setInterval(function() {
   s()
  }, 60000);
  s()
 };
 if ($('#top_link').length) {
  function o() {
   var e = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
   if (e > 250) {
    $('#top_link').css({
     'display': 'block'
    }).attr('class', '')
   } else {
    $('#top_link').css({
     'display': 'none'
    })
   }
  };
  $('#top_link').bind('click', function() {
   if (this.className == '') {
    bzTop = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    $('html, body').animate({
     scrollTop: '0px'
    }, 100, function() {
     setTimeout(function() {
      $('#top_link').css({
       'display': 'block'
      }).attr('val', bzTop).attr('class', 'top_cr')
     }, 10)
    })
   } else {
    var e = $('#top_link').attr('val');
    $('html, body').animate({
     scrollTop: bzTop + 'px'
    }, 100);
    $('#top_link').attr('val', '0');
    this.className = ''
   };
   return !1
  });
  o();
  $(window).scroll(function() {
   o()
  })
 };
// $('#logo').mousedown(function() {
//  $(this).css({
//   'marginTop': '2px'
//  })
// });
// $('#logo').mouseup(function() {
//  $(this).css({
//   'marginTop': '0'
//  })
// });
// $('#logo').mouseout(function() {
//  $(this).css({
//   'marginTop': '0'
//  })
// });
 if (screen.width < 1024) {
  $('#coments_block .main_level, .massages_table table').addClass('mob_site')
 };
 if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || navigator.userAgent.match(/iPad/i)) {
  $('#coments_block .main_level, .massages_table table').addClass('mob_site')
 };
 if (window.location.hash != '') {
  $(window).load(function() {
   location.replace(window.location.hash)
  })
 };
 if ($('#method_conclusion_select').length) {
  $('#method_conclusion_select').live('change', function() {
   $('.method_conclusion').css({
    'display': 'none'
   });
   $(this.value).css({
    'display': 'block'
   })
  })
 };
 $('#pay_choice_form').submit(function() {
  if ($('#method_conclusion_select').val() == '#mc_webmoney') {
   function o() {
    $('#mc_webmoney input[type="text"]').addClass('error');
    return !1
   };
   var e = $('#mc_webmoney input[type="text"]').val(),
    t = e.split(''),
    i = e.substring(0, 3);
   if (t[0] == 'u' || t[0] == 'U' || t[0] == 'z' || t[0] == 'Z' || t[0] == 'r' || t[0] == 'R') {
    e = e.replace(t[0], '');
    var s = /[a-zA-Zа-яА-Я]/;
    if (s.test(e)) {
     return o()
    };
    if (e.length != 12) {
     return o()
    }
   } else if (i == 'wmr' || i == 'WMR' || i == 'wmz' || i == 'WMZ' || i == 'wmu' || i == 'WMU') {
    e = e.replace(i, '');
    var s = /[a-zA-Zа-яА-Я]/;
    if (s.test(e)) {
     return o()
    };
    if (e.length != 12) {
     return o()
    }
   } else {
    return o()
   }
  } else if ($('#method_conclusion_select').val() == '#mc_paypal') {
   var r = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if (!r.test($('#mc_paypal input[type="text"]').val())) {
    $('#mc_paypal input[type="text"]').addClass('error');
    return !1
   }
  } else if ($('#method_conclusion_select').val() == '#mob_balance') {
   var e = $('#mob_balance input[type="text"]').val(),
    t = e.split(''),
    s = /[a-zA-Zа-яА-Я]/;
   e = e.replace(t[0], '');
   if (t[0] != '+' || s.test(e)) {
    $('#mob_balance input[type="text"]').addClass('error');
    return !1
   }
  } else {}
 });

 function r() {
  return $.browser.opera ? window.innerWidth : $(window).width()
 };
 $('#model_list_block .model_list .item a.link').mousemove(function(e) {
  $('.popup_big_foto').css({
   'display': 'block',
   'top': '-1000px',
   'left': '-1000px'
  });
  var t = e.pageY - 10,
   i = e.pageX + 20,
   d = r(),
   a = $(self).height(),
   l = getClientSTop(),
   c = i - $('#wrap').offset().left,
   s = $('.popup_big_foto').width(),
   o = $('.popup_big_foto').height(),
   n = t - l;
  if (e.pageX + 32 + s > d) {
   var i = e.pageX - s - 20
  };
  if (n + o > a) {
   t = l + a - o - 15
  };
  $('.popup_big_foto').css({
   'top': t,
   'left': i
  })
 });
 $('#model_list_block .model_list .item a.link').hover(function(e) {
  var i = $(this).next().find('#model_status').text();
  $('.popup_big_foto .name > div').removeClass();
  $('.popup_big_foto .name > div').attr('class', 'icon ' + i);
  $('.popup_big_foto .name > div').text(i);
  $('.popup_big_foto .foto img').remove();
  $('.popup_big_foto .name .txt').text($(this).attr('rel'));
  var t = new Image();
  if ($.browser.msie && $.browser.version < 9) {
   t.src = $(this).attr('rev') + '?' + new Date().getTime()
  } else {
   t.src = $(this).attr('rev')
  };
  $('.popup_big_foto .foto').prepend(t);
  $(t).hide();
  $(t).load(function() {
   $('.popup_big_foto .foto img:first').css({
    'display': 'block'
   }, 500)
  });
  return !1
 }, function() {
  $('.popup_big_foto').css({
   'display': 'none'
  })
 });
 var i = '<div class="incorrect_text"><div class="close"><span></span></div>',
  e = i + 'This field is required</div>',
  t = i + 'Must be completed at least 4 characters</div>';
 if ($('#registration_form').length) {
  $('#registration_form').validate({
   rules: {
    login_inp: {
     required: !0,
     minlength: 4
    },
    pswd_1: {
     required: !0,
     minlength: 4
    },
    pswd_2: {
     required: !0,
     minlength: 4,
     equalTo: '#password_inp_1'
    },
    email_inp: {
     required: !0,
     email: !0
    },
    bots_inp: {
     required: !0
    },
    agree_inp: {
     required: !0
    }
   },
   messages: {
    login_inp: {
     required: e,
     minlength: t
    },
    pswd_1: {
     required: e,
     minlength: t
    },
    pswd_2: {
     required: e,
     minlength: t,
     equalTo: i + 'Passwords must match</div>'
    },
    email_inp: {
     required: e,
     email: i + 'Please enter a valid email</div>'
    },
    bots_inp: {
     required: e
    },
    agree_inp: {
     required: i + 'Accept the agreement</div>'
    }
   }
  })
 };
 if ($('#add_works_form').length) {
  $('#add_works_form').validate({
   submitHandler: function(e) {
    e.submit()
   },
   rules: {
    work_title: {
     required: !0,
     minlength: 4
    },
    work_foto: {
     required: function() {
      if (!$('#work_foto').val()) {
       $('#work_foto').parents('.input_file').addClass('error')
      } else {
       $('#work_foto').parents('.input_file').removeClass('error')
      }
     }
    },
    work_description: {
     required: !0,
     minlength: 4
    },
    work_tags: {
     required: !0,
     minlength: 4
    }
   },
   messages: {
    work_title: {
     required: e,
     minlength: t
    },
    work_foto: {
     required: i + 'Select the file</div>'
    },
    work_description: {
     required: e,
     minlength: t
    },
    work_tags: {
     required: e,
     minlength: t
    }
   }
  })
 };
 if ($('#load_model_form').length) {
  $('#load_model_form').validate({
   submitHandler: function(e) {
    e.submit()
   },
   rules: {
    model_name: {
     required: !0,
     minlength: 4
    },
    model_file: {
     required: function() {
      if (!$('#model_file').val()) {
       $('#model_file').parents('.input_file').addClass('error')
      } else {
       $('#model_file').parents('.input_file').removeClass('error')
      }
     }
    },
    f3d_file: {
     required: function() {
      if (!$('#f3d_file').val()) {
       $('#f3d_file').parents('.input_file').addClass('error')
      } else {
       $('#f3d_file').parents('.input_file').removeClass('error')
      }
     }
    },
    model_description: {
     required: !0,
     minlength: 4
    },
    agree_inp: {
     required: !0
    },
    model_chapter: {
     required: function() {
      if (!$('#model_chapter').val()) {
       $('#model_chapter').parents('.select_block').addClass('error')
      } else {
       $('#model_chapter').parents('.select_block').removeClass('error')
      }
     }
    },
    model_style: {
     required: function() {
      if (!$('#model_style').val()) {
       $('#model_style').parents('.select_block').addClass('error')
      } else {
       $('#model_style').parents('.select_block').removeClass('error')
      }
     }
    },
    model_platforma: {
     required: function() {
      if (!$('#model_platforma').val()) {
       $('#model_platforma').parents('.select_block').addClass('error')
      } else {
       $('#model_platforma').parents('.select_block').removeClass('error')
      }
     }
    },
    model_tags: {
     required: !0,
     minlength: 4
    }
   },
   messages: {
    model_name: {
     required: e,
     minlength: t
    },
    model_file: {
     required: i + 'Select the file</div>'
    },
    f3d_file: {
     required: i + 'Select the file</div>'
    },
    model_description: {
     required: e,
     minlength: t
    },
    agree_inp: {
     required: i + 'Accept the agreement</div>'
    },
    model_chapter: {
     required: i + 'Select from the list</div>'
    },
    model_style: {
     required: i + 'Select from the list</div>'
    },
    model_platforma: {
     required: i + 'Select from the list</div>'
    },
    model_tags: {
     required: e,
     minlength: t
    }
   }
  })
 };
 if ($('#autorisation_form').length) {
  $('#autorisation_form').validate({
   rules: {
    aut_login: {
     required: !0,
     minlength: 4
    },
    aut_password: {
     required: !0,
     minlength: 4
    },
    aut_bots: {
     required: !0
    }
   },
   messages: {
    aut_login: {
     required: e,
     minlength: t
    },
    aut_password: {
     required: e,
     minlength: t
    },
    aut_bots: {
     required: e
    }
   }
  })
 };
 if ($('#create_article_form').length) {
  $('#create_article_form').validate({
   rules: {
    message_title: {
     required: !0,
     minlength: 4
    },
    message_text: {
     required: !0,
     minlength: 4
    },
    message_tags: {
     required: !0,
     minlength: 4
    }
   },
   messages: {
    message_title: {
     required: e,
     minlength: t
    },
    message_text: {
     required: e,
     minlength: t
    },
    message_tags: {
     required: e,
     minlength: t
    }
   }
  })
 };
 if ($('#write_message_form').length) {
  $('#write_message_form').validate({
   rules: {
    message_text: {
     required: !0,
     minlength: 4
    }
   },
   messages: {
    message_text: {
     required: e,
     minlength: t
    }
   }
  })
 };
 $('#messages_block .sales_statistics_table input.checkbox').live('click', function() {
  var e = this,
   t = 0;
  $(e).parents('.sales_statistics_table').find('input.checkbox').each(function() {
   if ($(this).attr('checked') == 'checked' || $(this).attr('checked') == !0) {
    t = 1
   }
  });
  if (t == 1) {
   $(e).parents('.message_section').find('.button_grey').removeClass('unactive').addClass('active').removeAttr('disabled')
  } else {
   $(e).parents('.message_section').find('.button_grey').removeClass('active').addClass('unactive').attr('disabled', !0)
  }
 });
 $('.delete_models_from_zakl .checkbox').live('click', function() {
  var e = this,
   t = 0;
  $(e).parents('form').find('input.checkbox').each(function() {
   if ($(this).attr('checked') == 'checked' || $(this).attr('checked') == !0) {
    t = 1
   }
  });
  if (t == 1) {
   $(e).parents('form').find('.button_grey').removeClass('unactive').addClass('active').removeAttr('disabled')
  } else {
   $(e).parents('form').find('.button_grey').removeClass('active').addClass('unactive').attr('disabled', !0)
  }
 });
 $('#messages_block .sales_statistics_table th input.checkbox.all').live('click', function() {
  var e = this,
   t = 1;
  if ($(e).attr('checked') == 'checked' || $(this).attr('checked') == !0) {
   t = 1;
   $(e).parents('.message_section').find('.button_grey').removeClass('unactive').addClass('active').removeAttr('disabled')
  } else {
   t = 0;
   $(e).parents('.message_section').find('.button_grey').removeClass('active').addClass('unactive').attr('disabled', !0)
  };
  $(e).parents('.sales_statistics_table').find('input.checkbox').each(function() {
   if (t == 1) {
    $(this).attr('checked', 'checked');
    $(this).attr('checked', !0)
   } else {
    $(this).removeAttr('checked')
   }
  })
 });
 $('#unfolded_chat_block .form_block .textarea textarea, #coments_block .form textarea').live('focus', function() {
  $(this).parents('label').find('.placeholder').hide()
 });
 $('#unfolded_chat_block .form_block .textarea textarea, #coments_block .form textarea').live('blur', function() {
  if ($(this).val() == '') {
   $(this).parents('label').find('.placeholder').show()
  }
 });
 if ($('.scroll-pane').length) {
  $('.scroll-pane').jScrollPane()
 };
 $('.input_file input').live('change', function() {
  $(this).parents('.input_file').find('.val').text(this.value);
  $(this).blur()
 });
 $('.select_block select').live('change', function() {
  var e = $(this).val();
  $(this.parentNode).find('.val').html($(this).find('option[value=' + e + ']').html())
 });
 $('.select_block select').live('keypress', function() {
  $(this).change()
 });
 $('#autorisation_form').submit(function() {
  if (form_validate('#autorisation_form') != !0) {
   return !1
  }
 });
 $('#autorisation_form .incorrect').live('change', function() {
  form_validate('#autorisation_form')
 });
 $('.incorrect_text .close').live('mouseup', function() {
  $(this).parents('.incorrect_text').hide();
  $(this).parents('label.error').remove()
 });
 if ($.browser.msie && $.browser.version < 9) {
  if ($('#unfolded_chat_block').length) {
   $('#unfolded_chat_block .conversations_block .item:even').addClass('odd')
  };
  if ($('.sales_statistics_table').length) {
   $('.sales_statistics_table tr:not(#messages_block .sales_statistics_table tr):even').addClass('odd');
   $('.sales_statistics_table tr').find('td:last').addClass('last')
  };
  if ($('#funds_table .sales_statistics_table').length) {
   $('#funds_table .sales_statistics_table tr:even').addClass('odd')
  }
 };
 $('#popup_bg').live('click', function() {
  close_popup('.popup_window')
 });
 if ($('#go_top_button').length) {
  $(window).scroll(function() {
   if (getClientSTop() > 0) {
    var e = $(window).height() + getClientSTop();
    if (e >= $('#footer').offset().top) {
     e = $('#footer').offset().top
    };
    $('#go_top_button').show().css({
     'top': e
    })
   } else {
    $('#go_top_button').hide()
   }
  });
  $(window).scroll();
  $('#go_top_button').live('click', function() {
   $('html, body').animate({
    scrollTop: '0px'
   });
   return !1
  })
 };
 $('#model_card_block .little_fotos a').live('click', function() {
  $('#model_card_block .little_fotos li.active').removeClass('active');
  $(this.parentNode).addClass('active');
  var e = new Image();
  if ($.browser.msie && $.browser.version < 9) {
   e.src = $(this).attr('href') + '?' + new Date().getTime()
  } else {
   e.src = $(this).attr('href')
  };
  $('#model_card_block .big_foto').prepend(e);
  $(e).hide();
  $(e).load(function() {
   $('#model_card_block .big_foto img').eq(1).remove();
   $('#model_card_block .big_foto img').eq(0).animate({
    'opacity': 'show'
   }, 500)
  });
  return !1
 });
 if ($('.forum_table').length) {
  $('.forum_table').each(function() {
   var e = $(this).find('thead').find('th:eq(0)').height() - 5;
   $(this).find('.border').css({
    'height': e
   })
  })
 };
 if ($('.sales_statistics_table').length) {
  $('.sales_statistics_table').each(function() {
   var e = $(this).find('thead').find('th:eq(0)').height() - 5;
   $(this).find('.border').css({
    'height': e
   })
  })
 };
 if ($('#feed_back_form').length) {
  $('#feed_back_form').validate({
   rules: {
    login_inp: {
     required: !0,
     minlength: 4
    },
    email_inp: {
     required: !0,
     email: !0
    },
    thema_1: {
     required: !0
    },
    textarea_1: {
     required: !0
    }
   },
   messages: {
    login_inp: {
     required: e,
     minlength: t
    },
    email_inp: {
     required: e,
     email: i + 'Введите корректный email</div>'
    },
    thema_1: {
     required: e
    },
    textarea_1: {
     required: e
    }
   }
  })
 };
 $('.list, #model_card_block.model-card1 .add-block  .add-to').live('click', function() {
  if ($(this).parents('.btn-block').hasClass('open')) {
   $(this).parents('.btn-block').removeClass('open').removeClass('ctop')
  } else {
   $(this).parents('.btn-block').addClass('open');
   if ($(this).parents('.btn-block').find('.down-list').height() + $(this).parents('.btn-block').find('.down-list').offset().top > $('#footer').offset().top) {
    $(this).parents('.btn-block').addClass('ctop')
   }
  }
 });
 if ($('#edit_form_block_form').length) {
  $('#edit_form_block_form').validate({
   rules: {
    login_inp: {
     required: !0,
     minlength: 4
    },
    email_inp: {
     required: !0,
     email: !0
    },
    text_inp: {
     required: !0
    },
    specialty_inp: {
     required: !0
    },
    adress_inp: {
     required: !0
    },
    adress_site_inp: {
     required: !0
    },
    birthday_inp: {
     required: !0
    },
    signature_inp: {
     required: !0
    }
   },
   messages: {
    login_inp: {
     required: e,
     minlength: t
    },
    email_inp: {
     required: e,
     email: i + 'Please enter a valid email</div>'
    },
    text_inp: {
     required: e
    },
    specialty_inp: {
     required: e
    },
    adress_inp: {
     required: e
    },
    adress_site_inp: {
     required: e
    },
    birthday_inp: {
     required: e
    },
    signature_inp: {
     required: e
    }
   }
  })
 };
 if ($('.tab_block').length) {
  $('.tab_block ul.tabs li a').click(function() {
   $('.tab_block ul.tabs li.active').removeClass('active');
   $(this.parentNode).addClass('active');
   $('.tab_block .tab_content').hide();
   $($(this).attr('href')).show();
   return !1
  })
 }
});

function close_popup(e) {
 $('#popup_bg, ' + e).css({
  'display': 'none'
 })
};

function open_popup(e) {
 $('#popup_bg, ' + e).css({
  'display': 'block'
 })
};

function open_window(e, i, o) {
 var t = 'width=' + i + ',height=' + o + ',toolbar=0,scrollbars=0,location=0,directories=0,status=0,menubar=0,resizable=no,border=thin,help=0';
 newWin = window.open(e, 'newWin', t);
 newWin.focus()
};

function getClientSTop() {
 return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)
};;
$(document).ready(function() {
 $('.list').live('click', function() {
  if ($('.btn-block').hasClass('open')) {
   $('.btn-block').removeClass('open')
  } else {
   $('.btn-block').addClass('open')
  }
 });
 $('.list, #model_card_block.model-card1 .add-block  .add-to').live('click', function() {
  if ($(this).parents('.btn-block').hasClass('open')) {
   $(this).parents('.btn-block').removeClass('open').removeClass('ctop')
  } else {
   $(this).parents('.btn-block').addClass('open');
   if ($(this).parents('.btn-block').find('.down-list').height() + $(this).parents('.btn-block').find('.down-list').offset().top > $('#footer').offset().top) {
    $(this).parents('.btn-block').addClass('ctop')
   }
  }
 })
});;
$(document).ready(function() {
 $('.del').live('click', function() {
  s($(this));
  return !1
 });
 $('.ok').live('click', function() {
  s($(this));
  return !1
 });
 $('.star').live('click', function() {
  var t = $(this);
  t.parent().find('.star').each(function() {
   $(this).removeClass('active')
  });
  t.addClass('active');
  $.get(t.attr('href'), function(e) {
   var i = $.parseJSON(e);
   t.closest('.card_raiting').find('.number').html(i.rating + ' / ' + i.count)
  });
  return !1
 });
 $('.reiting_error').live('click', function() {
  n()
 });

 function n() {
  $('.reiting_error').each(function(t, e) {
   $(this).remove()
  })
 };

 function s(t) {
  n();
  $.get(t.attr('href'), function(e) {
   var r = $.parseJSON(e),
    i = parseInt(r.rating),
    a = r.error_message;
   if (i > 0) {
    t.parent().removeClass('reputation_null');
    t.parent().removeClass('null');
    t.parent().find('.reiting').html('+' + i);
    t.parent().find('.reiting').removeClass('minus');
    t.parent().find('.reiting').removeClass('null');
    t.parent().find('.reiting').addClass('plus')
   } else {
    if (i < 0) {
     t.parent().removeClass('reputation_null');
     t.parent().removeClass('null');
     t.parent().find('.reiting').html(i);
     t.parent().find('.reiting').removeClass('plus');
     t.parent().find('.reiting').removeClass('null');
     t.parent().find('.reiting').addClass('minus')
    } else {
     t.parent().addClass('reputation_null');
     t.parent().find('.reiting').html(i);
     t.parent().find('.reiting').removeClass('plus');
     t.parent().find('.reiting').removeClass('minus');
     t.parent().find('.reiting').addClass('null')
    }
   };
   if (a.length > 0) {
    t.parent().append('<div class="reiting_error">' + a + '</div>')
   }
  })
 };
 $('.ajax_form_submit').click(function() {
  if ($(this).hasClass('disabled')) {
   return !1
  };
  if ($(this).hasClass('ajax_form_submit_confirm') || $(this).attr('message')) {
   var t;
   if ($(this).attr('message')) {
    t = confirm($(this).attr('message'))
   } else {
    t = confirm('Удалить?')
   };
   if (t == !1) {
    return !1
   }
  };
  $(this).parent().find('.ajax_form').submit();
  return !1
 });
 $('.jq_confirm_link').click(function() {
  if ($(this).attr('message')) {
   r = confirm($(this).attr('message'))
  };
  if (r == !1) {
   return !1
  }
 });
 $('.ajax_link').click(function() {
  if ($(this).hasClass('ajax_link_confirm')) {
   r = confirm($(this).attr('message'))
  };
  if (r == !1) {
   return !1
  };
  var t = $(this);
  $.get($(this).attr('href'), function(e) {
   if (e == 'error') {
    alert('Error')
   };
   if (e == 'ok') {
    eval(t.attr('on_success'))
   }
  });
  return !1
 });
 $('.delete_overlay').parent().hover(function() {
  $(this).find('.delete_overlay').show()
 }, function() {
  $(this).find('.delete_overlay').hide()
 });
 $('.delete_overlay').click(function(t) {
  t.preventDefault();
  $(this).closest('.gallery_item').each(function(t, e) {
   $(e).addClass('disable_popup')
  });
  context = $(this);
  var e = !1;
  if ($(this).attr('confirm')) {
   var i = confirm($(this).attr('confirm'));
   if (i) {
    e = !0
   }
  } else {
   e = !0
  };
  if (e) {
   if ($(this).attr('wl') == 'true') {
    window.location = $(this).attr('url')
   } else {
    $.get($(this).attr('url'), function(t) {
     if (t == 'ok') {
      context.after('<div class="delete_fader"></div>');
      context.remove()
     }
    })
   }
  }
 });
 $('.model_image_holder input').change(function() {
  $(this).closest('dd').next().show();
  $(this).closest('dd').next().next().show()
 });
 $('#rss_popup_holder').click(function() {
  if ($('#rss_popup').css('display') == 'none') {
   $('#rss_popup').show()
  } else {
   $('#rss_popup').hide()
  }
 });
 var o = 0;
 // $('#search_inp').keyup(function(t) {
 //  a(t, $(this).val(), $(this))
 // });
 // $('#search_inp_top').keyup(function(t) {
 //  a(t, $(this).val(), $(this))
 // });

 function a(t, e, a) {
  var i = (t.keyCode ? t.keyCode : t.which);
  if (e.length >= 3 && i > 40) {
   $.get('/search/hint', {
    query: e
   }, function(t) {
    $('#hints').remove();
    a.after(t)
   })
  };
  if ($('#hints:visible').length > 0) {
   var i = (t.keyCode ? t.keyCode : t.which);
   if (i == 13) {
    $('#hints .hint.act').click()
   };
   if (i == 40) {
    if ($('#hints .hint.act').length) {
     if ($('#hints .hint.act').next('.hint').length) {
      $('#hints .hint.act').removeClass('act').next('.hint').addClass('act')
     } else {
      $('#hints .hint.act').removeClass('act');
      $('#hints .hint:first').addClass('act')
     }
    } else {
     $('#hints .hint:first').addClass('act')
    }
   };
   if (i == 38) {
    if ($('#hints .hint.act').length) {
     if ($('#hints .hint.act').prev('.hint').length) {
      $('#hints .hint.act').removeClass('act').prev('.hint').addClass('act')
     } else {
      $('#hints .hint.act').removeClass('act');
      $('#hints .hint:last').addClass('act')
     }
    } else {
     $('#hints .hint:last').addClass('act')
    }
   }
  }
 };
 $('.hint').live('click', function() {
  $(this).closest('.js_hint_search_container').find('.js_hint_input').val($(this).text());
  $('#hints').remove();
  $(this).closest('.js_hint_search_container').find('form').submit()
 });
 $('.user_finance_moderation_toggle').click(function() {
  var t = $(this);
  $.get($(this).attr('href'), function(e) {
   if (e == 'ok') {
    t.closest('tr').remove()
   } else {
    alert('Произошла ошибка')
   }
  });
  return !1
 });
 $('.moderator_user_pro_clean_demote').click(function() {
  var t = $(this);
  $.get($(this).attr('href'), function(e) {
   if (e == 'ok') {
    t.closest('tr').remove()
   } else {
    alert('Произошла ошибка')
   }
  });
  return !1
 });
 $('.moderator_user_pro_clean_zero').click(function() {
  var t = $(this);
  $.get($(this).attr('href'), function(e) {
   if (e == 'ok') {
    t.closest('tr').find('.user_acc').html('0')
   } else {
    alert('Произошла ошибка')
   }
  });
  return !1
 });
 $('.user_finance_moderation_edit').live('click', function() {
  var n = {
   mc_webmoney: 'Webmoney',
   mc_paypal: 'Paypal',
   mob_balance: 'Mobile'
  };
  var t = '<select class="select_withdraw_method">',
   r = '',
   i = '',
   a = $(this).closest('tr').find('.withdraw_method').text(),
   l = $(this).closest('tr').find('.withdraw_wallet').text();
  $.each(n, function(e, s) {
   if (e == a) {
    i = 'selected="selected"'
   } else {
    i = ''
   };
   r = '<option value="' + e + '" ' + i + '>' + s + '</option>';
   t = t + r
  });
  t = t + '</select>';
  $(this).closest('tr').find('.withdraw_method').html(t);
  var e = '<input type="text" value="' + l + '">';
  if (a == 'mob_balance') {
   e = e + $('#mob_operatos_list').html()
  };
  $(this).closest('tr').find('.withdraw_wallet').html(e);
  var s = $(this).closest('.user_finance_moderate_actions').html('');
  s.html('<a href="' + s.attr('save_link') + '" class="user_finance_moderation_save">сохранить</a>, <a href="" class="user_finance_moderation_cancel">отменить</a>');
  return !1
 });
 $('.select_withdraw_method').live('change', function() {
  if ($(this).val() == 'mob_balance') {
   $(this).closest('tr').find('.withdraw_wallet').append($('#mob_operatos_list').html())
  } else {
   $(this).closest('tr').find('.withdraw_wallet').find('.select_mobile_operators').remove()
  }
 });
 $('.user_finance_moderation_save').live('click', function() {
  var t = $(this).closest('tr').find('.withdraw_method select').val(),
   e = $(this).closest('tr').find('.withdraw_wallet input').val();
  if (t == 'mob_balance') {
   var r = $(this).closest('tr').find('.withdraw_wallet select').val(),
    n = {
     'mobile_id_operator': r
    };
   var a = JSON.stringify(n)
  } else {
   var a = ''
  };
  var s = $(this).closest('.user_finance_moderate_actions'),
   i = $(this);
  $.post($(this).attr('href'), {
   method: t,
   wallet: e,
   extra: a
  }, function(a) {
   if (a == 'ok') {
    i.closest('tr').find('.withdraw_method').html(t);
    i.closest('tr').find('.withdraw_wallet').html(e);
    s.html('<a href="" class="user_finance_moderation_edit">редактировать</a>')
   } else {
    alert('Произошла ошибка')
   }
  });
  return !1
 });
 $('.user_finance_moderation_cancel').live('click', function() {
  var e = $(this).closest('tr').find('.withdraw_method select').val(),
   t = $(this).closest('tr').find('.withdraw_wallet input').val();
  $(this).closest('tr').find('.withdraw_method').html(e);
  $(this).closest('tr').find('.withdraw_wallet').html(t);
  $(this).closest('.user_finance_moderate_actions').html('<a href="" class="user_finance_moderation_edit">редактировать</a>');
  return !1
 });
 $('.link_untie').click(function() {
  var t = $(this);
  $.get($(this).attr('href'), function(e) {
   if (e != 'error') {
    t.closest('tr').find('.evercookie_hash').html(e);
    t.remove()
   } else {
    alert('Error')
   }
  });
  return !1
 });
 $('#withdraw_method_save').click(function() {
  if ($('#method_conclusion_select').val() == '#mc_webmoney') {
   function r() {
    $('#mc_webmoney input[type="text"]').addClass('error');
    return !1
   };
   var t = $('#mc_webmoney input[type="text"]').val(),
    i = t.split(''),
    h = t.substring(0, 3);
   if (i[0] == 'U' || i[0] == 'Z' || i[0] == 'R') {
    t = t.replace(i[0], '');
    var n = /[a-zA-Zа-яА-Я]/;
    if (n.test(t)) {
     return r()
    };
    if (t.length != 12) {
     return r()
    }
   } else {
    return r()
   }
  } else if ($('#method_conclusion_select').val() == '#mc_paypal') {
   var o = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if (!o.test($('#mc_paypal input[type="text"]').val())) {
    $('#mc_paypal input[type="text"]').addClass('error');
    return !1
   }
  } else if ($('#method_conclusion_select').val() == '#mob_balance') {
   var t = $('#mob_balance input[type="text"]').val(),
    i = t.split(''),
    n = /[a-zA-Zа-яА-Я]/,
    c = /^\+?((70|71|72|74|75|76|78|79)\d{9}|38\d{10})$/;
   if (!c.test(t)) {
    $('#mob_balance input[type="text"]').addClass('error');
    return !1
   };
   if (!$('#operator_select').val()) {
    $('#operator_select').addClass('error');
    return !1
   };
   t = t.replace('+', '');
   $('#mob_balance input[type="text"]').val(t)
  } else {};
  var e = $('#method_conclusion_select').val();
  if (e == '') {
   $('#method_conclusion_select').addClass('error');
   return !1
  };
  var s = $(e).find('.text_button').val();
  if (s == '') {
   $(e).find('.text_button').addClass('error');
   return !1
  };
  var l = $('#operator_select').val();
  e = e.replace('#', '');
  var a = $(this).attr('href');
  a = a + '?method=' + e + '&wallet=' + s + '&extra=' + l;
  $(this).attr('href', a);
  return !0
 });

 function c(t, e, a) {
  var i = t.indexOf(e, a);
  return i >= 0 ? i : !1
 };
 $('.tags_moderation_toggle').change(function() {
  var t = $(this);
  $.get($(this).attr('href'), function(e) {
   if (e == 'ok_on') {
    t.prop('checked', !0)
   } else {
    if (e == 'ok_off') {
     t.prop('checked', !1)
    } else {
     alert('Произошла ошибка')
    }
   }
  });
  return !1
 });
 $('.tags_moderation_edit').live('click', function() {
  var i = $(this).closest('tr').find('.tag_title').text(),
   e = '<input type="text" value="' + i + '">';
  $(this).closest('tr').find('.tag_title').html(e);
  var t = $(this).closest('.tags_moderate_actions').html('');
  t.html('<a href="' + t.attr('save_link') + '" class="tags_moderation_save">сохранить</a>, <a href="" class="tags_moderation_cancel">отменить</a>');
  return !1
 });
 $('.tags_moderation_save').live('click', function() {
  var t = $(this).closest('tr').find('.tag_title input').val(),
   i = $(this).closest('.tags_moderate_actions'),
   e = $(this);
  $.post($(this).attr('href'), {
   title: t
  }, function(a) {
   if (a == 'ok') {
    e.closest('tr').find('.tag_title').html(t);
    i.html('<a href="" class="tags_moderation_edit">Изменить</a>')
   } else {
    if (a == 'ok_reload') {
     window.location.reload()
    } else {
     alert('Произошла ошибка')
    }
   }
  });
  return !1
 });
 $('.tags_moderation_cancel').live('click', function() {
  var t = $(this).closest('tr').find('.tag_title input').val();
  $(this).closest('tr').find('.tag_title').html(t);
  $(this).closest('.tags_moderate_actions').html('<a href="" class="tags_moderation_edit">Изменить</a>');
  return !1
 });
 $('.un_ban_warn_link').click(function() {
  var t = confirm('Наказание будет снято!!!');
  if (t == !0) {
   return !0
  } else {
   return !1
  }
 });
 $('#sections_list .cat_checkbox').change(function() {
  var i = [],
   e = 0;
  $('#sections_list .cat_checkbox').each(function(t, a) {
   if ($(a).is(':checked')) {
    i[e] = $(this).attr('slug');
    e++
   }
  });
  var t = $(this).closest('ul').attr('href');
  t = t.replace('{cats_paceholder}', i.join(','));
  window.location = t
 });
 $('#main_comment_form_holder button[type=submit]').click(function() {
  $('#main_comment_form_holder form').submit();
  $(this).attr('disabled', 'disabled')
 });
 $('#avtorisation_popup input[type=text]').focusin(function() {
  show_captcha()
 });
 $('#sky_bundle_modelsbundle_modeltype_platform').change(function() {
  var t = [22, 23, 24];
  if (t.indexOf(parseInt($(this).val())) > 0) {
   $('#sky_bundle_modelsbundle_modeltype_render').val('');
   $('#sky_bundle_modelsbundle_modeltype_render').parent().find('.val').text('');
   $('#sky_bundle_modelsbundle_modeltype_render').attr('disabled', 'disabled');
   $('#sky_bundle_modelsbundle_modeltype_render').removeAttr('required')
  } else {
   $('#sky_bundle_modelsbundle_modeltype_render').attr('required', 'required');
   $('#sky_bundle_modelsbundle_modeltype_render').removeAttr('disabled')
  }
 });
 if ($('#gals_block').length) {
  var i = $('#gals_block').attr('data-page-url');
  $('.gallery_item').live('click', function() {
   if ($(this).hasClass('disable_popup')) {
    return !1
   };
   var t = $(this).attr('gallery_slug');
   e(t);
   return !1
  });
  $('#popup_bg').click(function() {
   window.history.pushState('', '', i);
   close_popup('#gallery_popup')
  });
  $('.close_gallery_popup').live('click', function() {
   window.history.pushState('', '', i);
   close_popup('#gallery_popup')
  });
  $('.gallery_slide').live('click', function() {
   var t = $(this).attr('gallery_slug');
   e(t);
   return !1
  });
  $(window).mousewheel(function(e, i) {
   if (t('#gallery_popup')) {
    e.stopPropagation();
    e.preventDefault();
    var a = $('#gallery_popup').position(),
     n = $('#gallery_popup').outerHeight(),
     r = $(window).scrollTop(),
     s = $(window).height();
    if (((a.top + n) - (r + s) > -50 || i > 0) && (a.top - r < 50 || i < 0)) {
     var l = a.top + i * 50;
     $('#gallery_popup').css('top', l + 'px')
    }
   }
  });
  $('.comment_form').live('submit', function(e) {
   if (t('#gallery_popup')) {
    var i = $(this).attr('action');
    $.ajax({
     type: 'POST',
     url: i,
     data: $(this).serialize(),
     success: function(t) {
      $('#coments_block').replaceWith(t)
     }
    });
    e.preventDefault()
   }
  });

  function e(e) {
   $.ajax({
    url: '/galleries/gallery_popup/' + e,
    method: 'GET',
    success: function(i) {
     window.history.pushState('', '', '/galleries/gallery/' + e);
     l('#gallery_popup');
     if (!t('#gallery_popup')) {
      open_popup('#gallery_popup')
     };
     $('#gallery_popup').html(i)
    }
   })
  };

  function l(t) {
   var e = window.pageYOffset + 40;
   $(t).css('top', e + 'px')
  };

  function t(t) {
   if ($(t).css('display') == 'block') {
    return !0
   } else {
    return !1
   }
  }
 };
 $('.bookmark_link').live('click', function(t) {
  var e = $(this).attr('href');
  $.ajax({
   type: 'GET',
   url: e,
   success: function(t) {
    if ($('.add_to_bookmarks').css('display') == 'none') {
     $('.remove_from_bookmarks').hide();
     $('.add_to_bookmarks').show()
    } else {
     $('.add_to_bookmarks').hide();
     $('.remove_from_bookmarks').show()
    }
   }
  });
  t.preventDefault()
 });
 $('.bookmark_toggle_link').click(function(t) {
  t.preventDefault();
  var i = $(this).attr('href'),
   e = $(this);
  $.ajax({
   type: 'GET',
   url: i,
   success: function(t) {
    var i = $.parseJSON(t);
    if (i && i.result == 'added') {
     if (e.hasClass('icon_heart')) {
      e.removeClass('icon_heart');
      e.addClass('icon_heart_red')
     } else if (e.hasClass('icon_heart_small')) {
      e.removeClass('icon_heart_small');
      e.addClass('icon_heart_red_small')
     }
    };
    if (i && i.result == 'removed') {
     if (e.hasClass('icon_heart_red')) {
      e.removeClass('icon_heart_red');
      e.addClass('icon_heart')
     } else if (e.hasClass('icon_heart_red_small')) {
      e.removeClass('icon_heart_red_small');
      e.addClass('icon_heart_small')
     }
    }
   }
  })
 });
 $('.bookmark_form').submit(function(t) {
  t.preventDefault();
  var i = $(this).attr('action'),
   a = $(this).serialize(),
   e = $(this);
  $('.collections_placeholder').hide();
  $('.collections_placeholder_clock').show();
  $.ajax({
   type: 'POST',
   url: i,
   data: a,
   success: function(t) {
    var i = $.parseJSON(t);
    if (i && i.result == 'added') {
     var a = e.data('prototype');
     a = a.replace(/__collection.id__/g, i.collection_id);
     a = a.replace(/__collection.title__/g, i.collection_title);
     $('.collections_placeholder').each(function(t, i) {
      if ($(i).closest('form').attr('entity_id') == e.attr('entity_id')) {
       $(i).append(a)
      } else {
       $(i).append(a.replace(/checked/g, ''))
      }
     });
     $('.new-cat').val('')
    } else if (i && i.result == 'removed') {} else if (i && i.result == 'error') {};
    $('.collections_placeholder_clock').hide();
    $('.collections_placeholder').show()
   },
   error: function() {
    $('.collections_placeholder_clock').hide();
    $('.collections_placeholder').show()
   }
  })
 });
 $('.collection_checkbox').live('change', function(t) {
  t.preventDefault();
  var a = $(this).closest('.bookmark_form').attr('action'),
   i = {
    'f[collection]': $(this).data('collectionid'),
   };
  var e = $(this);
  $.ajax({
   type: 'POST',
   url: a,
   data: i,
   success: function(t) {
    var i = $.parseJSON(t);
    if (i && i.result == 'added') {
     e.attr('checked', 'checked')
    };
    if (i && i.result == 'removed') {
     e.removeAttr('checked')
    }
   }
  })
 });
 $('#feedback_submit').mouseup(function() {
  if ($('#feed_back_form').valid()) {
   //$('#feed_back_form').prop('disabled', !0);
   
 //  $('#feed_back_form').submit()
  }
 });
 $('.cards .card').click(function() {
  $(this).find('.card_message').show()
 });
 $('.card_message').live('click', function() {
  $(this).hide()
 });
 $('#in_book_marks_heart .add-to').click(function() {
  if ($('#in_book_marks_heart .down-list').is(':visible') == !1) {
   $('#down-list_bg').show();
   $('#in_book_marks_heart .down-list').show()
  } else {
   $('#in_book_marks_heart .down-list').hide();
   $('#down-list_bg').hide()
  }
 });
 $('#down-list_bg').click(function() {
  $('#in_book_marks_heart .down-list').hide();
  $('#down-list_bg').hide()
 });
 $('.model_list .item').hover(function() {
  $(this).find('.btn-block').show()
 }, function() {
  $(this).find('.btn-block').hide()
 });
 $('.bookmark_collection_line').click(function(t) {
  if ($(t.target).is('input')) {
   return
  };
  var e = $(this).find('input[type=checkbox]');
  e.prop('checked', !e.prop('checked'));
  e.trigger('change');
  return !1
 });
 $('#show-contacts').click(function() {
  $('#author-contacts').toggle();
  $(this).css('display', 'none')
 });
 $('.small_preview').click(function() {
  $(this).closest('.corected').find('.big_preview').attr('src', $(this).attr('big_image'))
 })
});

function show_captcha() {
 var t = $('#captcha_image_url_container').attr('captcha_url');
 $('.captcha_image').attr('src', t)
};;
$(document).ready(function() {
 var s = 1;
 $('.card_raiting .number, .card_raiting .list_hint').hover(function() {
  $('.card_raiting .list_hint').css({
   'display': 'block'
  });
  clearTimeout(s)
 }, function() {
  s = setTimeout(function() {
   $('.card_raiting .list_hint').css({
    'display': 'none'
   })
  }, 500)
 });
 if ($('#slider-range-max').length) {
  $('#slider-range-max').slider({
   range: 'max',
   min: 0,
   max: 12,
   value: 0,
   slide: function(a, s) {
    $('#amount').val(s.value);
    get_total_price()
   }
  });
  $('#amount').val($('#slider-range-max').slider('value'))
 };
 $('.payment_method .payment_list input[type="radio"]').live('click', function() {
  $('.payment_method .label_inset').css('display', 'none');
  $($(this).attr('title')).css('display', 'block')
 });
 if ($('#models_buy_form').length) {
  get_total_price();
  $('#quontity_inp').live('keyup', function() {
   this.value = this.value.replace(/[^\d,]/g, '');
   $(this.parentNode).find('label.error').remove();
   if (this.value > 200) {
    this.value = 200;
    $(this.parentNode).append('<label class="error" for="quontity_inp"><div class="incorrect_text"><div class="close"><span></span></div> maximum quantity to buy is 200 PRO</div></label>')
   } else if (this.value == '') {
    this.value = 0
   } else if (this.value < 2) {
    $(this.parentNode).append('<label class="error" for="quontity_inp"><div class="incorrect_text"><div class="close"><span></span></div> minimum quantity to buy is 2 PRO</div></label>')
   } else {};
   get_total_price()
  });
  $('#quontity_inp').live('blur', function() {
   if (this.value == 0) {
    $(this.parentNode).find('label.error').remove()
   }
  })
 }
});

function get_total_price() {
 var i = 0,
  a = $('#amount').val() - 0,
  s = $('#quontity_inp').val() - 0,
  t = $('#config_price_sky_pro_usd').attr('value') - 0,
  l = $('#config_price_sky_free_usd').attr('value') - 0;
 if (s < 3) {
  $('#for_paypal_payment').css({
   'display': 'block'
  })
 } else if (a != 0 && s < 3) {
  $('#for_paypal_payment').css({
   'display': 'block'
  })
 };
 i = a * l + s * t;
 $('#models_buy_form input[name="total_price_inp"]').val(i);
 $('.purchase_block .amount .amount_number').html('Amount to pay:<span>' + i + ' $</span>');
 if (a > 0 || s > 1) {
  $('.purchase_block .amount .blue_button').removeAttr('disabled').removeClass('button_grey unactive')
 } else {
  $('.purchase_block .amount .blue_button').addClass('button_grey unactive').attr('disabled', 'disabled')
 };
 if (($('#amount').val() - 0) > 0 && ($('#quontity_inp').val() - 0) <= 0) {
  $('#amount_box').attr('class', 'box grey long').css({
   'display': 'block'
  }).html('<div class="big">30 FREE</div><div class="small">models per day during ' + a + ' months renewed at 00:00 GMT +4</div>');
  $('#quontity_box').css({
   'display': 'none'
  });
  $('.purchase_block .your_choise .plus').css({
   'display': 'none'
  })
 } else if (($('#amount').val() - 0) <= 0 && ($('#quontity_inp').val() - 0) > 0) {
  $('#quontity_box').attr('class', 'box long').css({
   'display': 'block'
  }).html('<div class="big">' + s + ' PRO</div><div class="small">one off</div>');
  $('#amount_box').css({
   'display': 'none'
  });
  $('.purchase_block .your_choise .plus').css({
   'display': 'none'
  })
 } else if (($('#amount').val() - 0) > 0 && ($('#quontity_inp').val() - 0) > 0) {
  $('#quontity_box').attr('class', 'box').css({
   'display': 'block'
  }).html('<div class="big">' + s + ' PRO</div><div class="small">one off</div>');
  $('#amount_box').attr('class', 'box grey').css({
   'display': 'block'
  }).html('<div class="big">30 FREE</div><div class="small">models per day during ' + a + ' months renewed at 00:00 GMT +4</div>');
  $('.purchase_block .your_choise .plus').css({
   'display': 'block'
  })
 } else {
  $('.purchase_block .your_choise .plus').css({
   'display': 'block'
  });
  $('#quontity_box').attr('class', 'box').css({
   'display': 'block'
  }).html('<div class="big null">0 PRO</div>');
  $('#amount_box').attr('class', 'box grey').css({
   'display': 'block'
  }).html('<div class="big null">0 FREE</div>')
 }
};;
if ($('#feedbacks_form').length) {
 $('#feedbacks_form').validate({
  submitHandler: function(e) {
   e.submit()
  },
  rules: {
   'sky_bundle_feedbacksbundle_feedbackstype[name]': {
    required: !0
   },
   'sky_bundle_feedbacksbundle_feedbackstype[email]': {
    required: !0
   },
   'sky_bundle_feedbacksbundle_feedbackstype[theme]': {
    required: !0
   },
   'sky_bundle_feedbacksbundle_feedbackstype_text': {
    required: !0
   }
  },
  messages: {
   'sky_bundle_feedbacksbundle_feedbackstype[name]': {
    required: required_div
   },
   'sky_bundle_feedbacksbundle_feedbackstype[email]': {
    required: required_div
   },
   'sky_bundle_feedbacksbundle_feedbackstype[theme]': {
    required: required_div
   },
   'sky_bundle_feedbacksbundle_feedbackstype_text': {
    required: required_div
   }
  }
 })
};;
var is_sidebar_chat = !1;
$(document).ready(function() {
 if ($('#unfolded_chat_block').length) {
  if ($('#sidebar #unfolded_chat_block').length) {
   is_sidebar_chat = !0;
   getAllMessages(!0);
   setInterval(refreshSidebarChat, 180000)
  } else if ($('#unfolded_chat_block').length) {
   getAllMessages(!1);
   getUsersOnline();
   setInterval(refreshChat, 20000)
  };
  $('#chat_message_form').submit(function() {
   formSubmit();
   return !1
  });
  $('#sidebar #unfolded_chat_block a.refresh').click(function() {
   refreshSidebarChat();
   return !1
  });
  $('#content #unfolded_chat_block a.refresh').click(function() {
   refreshChat();
   return !1
  });
  $('#daturon_chatbundle_message_text').keydown(function(e) {
   if (e.ctrlKey && e.keyCode == 13) {
    formSubmit();
    return !1
   }
  })
 }
});

function formSubmit() {
 var e = $('#chat_message_form #daturon_chatbundle_message_text').val();
 if (e.length == 0) {
  return
 };
 $('#chat_message_form button[type="submit"]').attr('disabled', 'disabled');
 var a = linkifyStr(e),
  s = $.emotions(a);
 $('#chat_message_form #daturon_chatbundle_message_text').val(s);
 var t = $('#chat_message_form').serialize();
 sendMessage(t, is_sidebar_chat)
};

function refreshChat() {
 var e = getLastMessageId();
 getMessages(e);
 getUsersOnline();
 trimMessagesList(!1)
};

function refreshSidebarChat() {
 var e = getLastMessageId();
 getMessages(e, !0);
 trimMessagesList(!0)
};

function getAllMessages(e) {
 $.ajax({
  url: '/live-chat/get-messages',
  type: 'POST',
  async: !1,
  success: function(s) {
   if (s.result !== 'error') {
    printMessages(s, !0, e);
    var a = $('.scroll-pane').jScrollPane().data('jsp');
    a.scrollToBottom();
    a.reinitialise()
   } else if (s.access === !1) {
    location.reload()
   }
  }
 })
};

function getMessages(e, s) {
 $.ajax({
  url: '/live-chat/get-messages',
  type: 'POST',
  dataType: 'json',
  async: !1,
  data: JSON.stringify({
   last_message_id: e
  }),
  success: function(e) {
   if (e && e.result !== 'error') {
    printMessages(e, !1, s);
    var a = $('.scroll-pane').jScrollPane().data('jsp');
    a.scrollToBottom();
    a.reinitialise()
   } else if (e.access === !1) {
    location.reload()
   }
  }
 })
};

function getUsersOnline() {
 $.ajax({
  url: '/live-chat/get-online-users',
  type: 'POST',
  dataType: 'json',
  data: {},
  async: !1,
  success: function(e) {
   if (e.result !== 'error') {
    printUsersOnline(e)
   } else if (e.access === !1) {
    location.reload()
   }
  }
 })
};

function sendMessage(e, s) {
 var a = getLastMessageId();
 $.ajax({
  url: '/live-chat/send',
  type: 'POST',
  data: (e + '&' + $.param({
   'last_message_id': a
  })),
  async: !1,
  success: function(e) {
   if (e.result !== 'error') {
    $('#daturon_chatbundle_message_text').val('');
    if (e.messages) {
     printMessages(e.messages, !1, s);
     var a = $('.scroll-pane').jScrollPane().data('jsp');
     a.scrollToBottom();
     a.reinitialise()
    };
    $('#chat_message_form button[type="submit"]').removeAttr('disabled')
   } else if (e.access === !1) {
    location.reload()
   }
  }
 })
};

function printUsersOnline(e) {
 var s = $('#unfolded_chat_block').attr('data-resourse');
 $('#friend_list').html('');
 $(e).each(function(e, a) {
  if (a.userId !== undefined) {
   $('#friend_list').append('<li class="item">   <a target="_blank" href="/users/' + a.slug + '">       <img src="' + s + '/media/cache/sky_user_avatar_profile/avatar/users/' + a.avatar + '" alt="" width="35" height="35" class="avatar">   </a>   <div class="name">       <a target="_blank" href="/users/' + a.slug + '">' + a.username + '</a>   </div></li>')
  } else {
   return !1
  }
 })
};

function printMessages(e, s, a) {
 if (s) {
  $('#conversations_block').html('')
 };
 $(e).each(function(e, s) {
  printMessage(s, a)
 })
};

function printMessage(e, a) {
 var s = Date.createFromMysql(e.created_at.date),
  t = $('#unfolded_chat_block').attr('data-resourse');
 if (!a) {
  $('#conversations_block').append('<article class="item" message_id="' + e.id + '">   <div class="presence_time">       <time class="time" datetime="' + e.created_at.date + '">' + zp(s.getHours()) + ':' + zp(s.getMinutes()) + ':' + zp(s.getSeconds()) + '</time>   </div>   <a href="#">       <img src="' + t + '/media/cache/sky_user_avatar_profile/avatar/users/' + e.avatar + '" alt="" width="80" height="80" class="avatar"></a>    <div class="name"><a target="_blank" href="/users/' + e.slug + '">' + e.username + '</a></div>    <div class="message">' + e.text + '</div></article>')
 } else {
  $('#conversations_block').append('<article class="item" message_id="' + e.id + '"><div class="name"><a target="_blank" href="/users/' + e.slug + '">' + e.username + '</a><time class="time" datetime="' + e.created_at.date + '"> ' + zp(s.getHours()) + ':' + zp(s.getMinutes()) + ':' + zp(s.getSeconds()) + '</time></div><div class="message">' + e.text + '</div></article>')
 }
};
var zp = function(e) {
 e = parseInt(e);
 return (e <= 9 ? '0' + e : '' + e)
};

function getLastMessageId() {
 return $('#conversations_block article').last().attr('message_id')
};

function trimMessagesList(e) {
 if (!e) {
  var s = $('#conversations_block article').slice(-500)
 } else {
  var s = $('#conversations_block article').slice(-100)
 };
 $('#conversations_block').html('');
 $('#conversations_block').html(s);
 var a = $('.scroll-pane').jScrollPane().data('jsp');
 a.scrollToBottom();
 a.reinitialise()
};
Date.createFromMysql = function(e) {
 if (typeof e === 'string') {
  var s = e.split(/[- :]/);
  return new Date(s[0], s[1] - 1, s[2], s[3] || 0, s[4] || 0, s[5] || 0)
 };
 return null
};;
$(document).ready(function() {
 var s = $('#chat_message_form #smilesChoose'),
  e = $('#daturon_chatbundle_message_text'),
  o = $('#chat_message_form .smiles'),
  t = $('#chat_message_form #conversations_block');
 $('#chat_message_form #conversations_block div.message').emotions();
 s.emotions();
 $('#smilesChoose span').click(function() {
  var o = $.emotions.shortcode($(this).attr('title'));
  e.val(e.val() + ' ' + o + ' ');
  s.toggle();
  e.focus()
 });
 o.click(function() {
  s.toggle()
 })
});
(function(e) {
 e.emotions = function(n) {
  return e.emotions.parse(n)
 };
 var n = e.emotions;
 e.extend(e.emotions, {
  settings: {
   replacement: '<span title="{eId}" class="emotions emo-{eId}"></span>',
   map: {
    'o:)': 'angel',
    'o.O': 'confused',
    '3:)': 'devil',
    '<3': 'heart',
    ':*': 'kiss',
    ':-)': 'smile',
    ':]': 'smile',
    '8|': 'sunglasses',
    ':-/': 'unsure',
    ';)': 'wink',
    ':\'(': 'cry',
    '>:(': 'grumpy',
    ':(': 'frown',
    '8)': 'glasses',
    ':p': 'tongue',
    ':)': 'smile',
    '=)': 'smile',
    ':D': 'grin'
   }
  },
  shortcode: function(e) {
   var t = n.settings;
   for (var r in t.map) {
    if (t.map[r] == e) return r
   };
   return ''
  },
  parse: function(e) {
   var r = n.settings;
   for (var t in r.map) {
    var o = n.encode(t);
    if (e.indexOf(t) < 0 && e.indexOf(o) < 0) {
     continue
    };
    var s = r.replacement.replace(/\{eId\}/g, r.map[t]);
    e = e.replace(new RegExp(n.quote(t), 'g'), s).replace(new RegExp(n.quote(o), 'g'), s)
   };
   return e
  },
  encode: function(e) {
   return (e + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  },
  quote: function(e) {
   return (e + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
  }
 });
 e.fn.emotions = function(n, t) {
  this.each(function() {
   var n = e(this);
   n.html(e.emotions(n.html()))
  })
 }
})(jQuery);
(function() {
 'use strict';
 var I = {
  __esModule: !0
 };

 function kt(t, n) {
  if ('function' !== typeof n && null !== n) {
   throw new TypeError('Super expression must either be null or a function, not ' + typeof n)
  };
  t.prototype = Object.create(n && n.prototype, {
   constructor: {
    value: t,
    enumerable: !1,
    writable: !0,
    configurable: !0
   }
  });
  n && (t.__proto__ = n)
 };

 function rt(t, n) {
  if (!(t instanceof n)) {
   throw new TypeError('Cannot call a class as a function')
  }
 };
 var mt = function() {
   function t(n) {
    rt(this, t);
    this.j = [];
    this.T = n || null
   };
   t.prototype.on = function(t, n) {
    if (t instanceof Array) {
     for (var e = 0; e < t.length; e++) {
      this.j.push([t[e], n])
     }
    } else {
     this.j.push([t, n])
    }
   };
   t.prototype.next = function(t) {
    for (var n = 0; n < this.j.length; n++) {
     var e = this.j[n],
      o = e[1];
     if (this.test(t, e[0])) {
      return o
     }
    };
    return !1
   };
   t.prototype.accepts = function() {
    return !!this.T
   };
   t.prototype.test = function(t, n) {
    return t === n
   };
   t.prototype.emit = function() {
    return this.T
   };
   return t
  }(),
  st = function(t) {
   function n() {
    rt(this, n);
    null != t && t.apply(this, arguments)
   };
   kt(n, t);
   n.prototype.test = function(t, n) {
    return t === n || n instanceof RegExp && n.test(t)
   };
   return n
  }(mt),
  mn = function(t) {
   function n() {
    rt(this, n);
    null != t && t.apply(this, arguments)
   };
   kt(n, t);
   n.prototype.test = function(t, n) {
    return t instanceof n
   };
   return n
  }(mt);

 function sn(t, n, s, a) {
  for (var o = 0, r = t.length, i = [], e = void 0; o < r && (e = n.next(t[o]));) {
   n = e, o++
  };
  if (o >= r) {
   return []
  };
  for (; o < r - 1;) {
   e = new st(a), i.push(e), n.on(t[o], e), n = e, o++
  };
  e = new st(s);
  i.push(e);
  n.on(t[r - 1], e);
  return i
 };
 I.CharacterState = st;
 I.TokenState = mn;
 I.stateify = sn;
 var W = {
  __esModule: !0
 };

 function o(t, n) {
  if ('function' !== typeof n && null !== n) {
   throw new TypeError('Super expression must either be null or a function, not ' + typeof n)
  };
  t.prototype = Object.create(n && n.prototype, {
   constructor: {
    value: t,
    enumerable: !1,
    writable: !0,
    configurable: !0
   }
  });
  n && (t.__proto__ = n)
 };

 function n(t, n) {
  if (!(t instanceof n)) {
   throw new TypeError('Cannot call a class as a function')
  }
 };
 var s = function() {
   function t(e) {
    n(this, t);
    this.v = e
   };
   t.prototype.toString = function() {
    return this.v + ''
   };
   return t
  }(),
  St = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  kn = function(t) {
   function e() {
    n(this, e);
    t.call(this, '@')
   };
   o(e, t);
   return e
  }(s),
  qn = function(t) {
   function e() {
    n(this, e);
    t.call(this, ':')
   };
   o(e, t);
   return e
  }(s),
  Pn = function(t) {
   function e() {
    n(this, e);
    t.call(this, '.')
   };
   o(e, t);
   return e
  }(s),
  En = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  Dn = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  Hn = function(t) {
   function e() {
    n(this, e);
    t.call(this, '\n')
   };
   o(e, t);
   return e
  }(s),
  Wn = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  gn = function(t) {
   function e() {
    n(this, e);
    t.call(this, '+')
   };
   o(e, t);
   return e
  }(s),
  nn = function(t) {
   function e() {
    n(this, e);
    t.call(this, '#')
   };
   o(e, t);
   return e
  }(s),
  at = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  Kt = function(t) {
   function e() {
    n(this, e);
    t.call(this, '?')
   };
   o(e, t);
   return e
  }(s),
  xt = function(t) {
   function e() {
    n(this, e);
    t.call(this, '/')
   };
   o(e, t);
   return e
  }(s),
  rn = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  vt = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  Bt = function(t) {
   function e() {
    n(this, e);
    null != t && t.apply(this, arguments)
   };
   o(e, t);
   return e
  }(s),
  Xt = {
   Base: s,
   DOMAIN: St,
   AT: kn,
   COLON: qn,
   DOT: Pn,
   PUNCTUATION: En,
   LOCALHOST: Dn,
   NL: Hn,
   NUM: Wn,
   PLUS: gn,
   POUND: nn,
   QUERY: Kt,
   PROTOCOL: at,
   SLASH: xt,
   SYM: rn,
   TLD: vt,
   WS: Bt
  };

 function un(t) {
  return t instanceof St || t instanceof vt
 };
 var P = function() {
   function t(e) {
    n(this, t);
    this.v = e;
    this.type = 'token';
    this.isLink = !1
   };
   t.prototype.toString = function() {
    for (var n = [], t = 0; t < this.v.length; t++) {
     n.push(this.v[t].toString())
    };
    return n.join('')
   };
   t.prototype.toHref = function() {
    return this.toString()
   };
   t.prototype.toObject = function(t) {
    return {
     type: this.type,
     value: this.toString(),
     href: this.toHref(void 0 === t ? 'http' : t)
    }
   };
   return t
  }(),
  Mn = function(t) {
   function e(o) {
    n(this, e);
    t.call(this, o);
    this.type = 'email';
    this.isLink = !0
   };
   o(e, t);
   e.prototype.toHref = function() {
    return 'mailto:' + this.toString()
   };
   return e
  }(P),
  In = function(t) {
   function e(o) {
    n(this, e);
    t.call(this, o);
    this.type = 'text'
   };
   o(e, t);
   return e
  }(P),
  Yn = function(t) {
   function e(o) {
    n(this, e);
    t.call(this, o);
    this.type = 'nl'
   };
   o(e, t);
   return e
  }(P),
  Qn = function(t) {
   function e(o) {
    n(this, e);
    t.call(this, o);
    this.type = 'url';
    this.isLink = !0
   };
   o(e, t);
   e.prototype.toHref = function(t) {
    t = void 0 === t ? 'http' : t;
    for (var i = !1, r = !1, o = this.v, e = [], n = 0; o[n] instanceof at;) {
     i = !0, e.push(o[n].toString().toLowerCase()), n++
    };
    for (; o[n] instanceof xt;) {
     r = !0, e.push(o[n].toString()), n++
    };
    for (; un(o[n]);) {
     e.push(o[n].toString().toLowerCase()), n++
    };
    for (; n < o.length; n++) {
     e.push(o[n].toString())
    };
    e = e.join('');
    i || r || (e = t + '://' + e);
    return e
   };
   e.prototype.hasProtocol = function() {
    return this.v[0] instanceof at
   };
   return e
  }(P),
  Bn = {
   Base: P,
   EMAIL: Mn,
   NL: Yn,
   TEXT: In,
   URL: Qn
  };
 W.text = Xt;
 W.multi = Bn;
 var R = {
   __esModule: !0
  },
  e = W,
  Pt = I,
  t = function(t) {
   return new Pt.TokenState(t)
  },
  v = e.text.DOMAIN,
  Q = e.text.AT,
  nt = e.text.COLON,
  y = e.text.DOT,
  Tn = e.text.PUNCTUATION,
  k = e.text.LOCALHOST,
  zn = e.text.NL,
  c = e.text.NUM,
  jt = e.text.PLUS,
  Nt = e.text.POUND,
  At = e.text.PROTOCOL,
  Dt = e.text.QUERY,
  m = e.text.SLASH,
  Yt = e.text.SYM,
  b = e.text.TLD,
  Qt = e.multi.EMAIL,
  Nn = e.multi.NL,
  Ht = e.multi.TEXT,
  E = e.multi.URL,
  p = t(),
  Et = t(),
  ut = t(),
  M = t(),
  f = t(),
  T = t(),
  O = t(E),
  dt = t(),
  ht = t(E),
  L = t(),
  C = t(),
  H = t(E),
  Tt = t(),
  Lt = t(E),
  g = t(E),
  tt = t(),
  A = t(),
  N = t(),
  B = t(Qt),
  bt = t(),
  On = t(Qt),
  h = t(),
  j = t(),
  wt = t(),
  Un = t(Nn);
 p.on(zn, Un);
 p.on(At, Et);
 p.on(m, ut);
 Et.on(m, ut);
 ut.on(m, M);
 p.on(b, f);
 p.on(v, f);
 p.on(k, O);
 p.on(c, f);
 M.on(b, L);
 M.on(v, L);
 M.on(c, L);
 M.on(k, H);
 f.on(y, T);
 L.on(y, C);
 A.on(y, N);
 T.on(b, O);
 T.on(v, f);
 T.on(c, f);
 T.on(k, f);
 C.on(b, H);
 C.on(v, L);
 C.on(c, L);
 C.on(k, L);
 N.on(b, B);
 N.on(v, A);
 N.on(c, A);
 N.on(k, A);
 O.on(y, T);
 H.on(y, C);
 B.on(y, N);
 O.on(nt, dt);
 O.on(m, g);
 dt.on(c, ht);
 ht.on(m, g);
 H.on(nt, Tt);
 H.on(m, g);
 Tt.on(c, Lt);
 Lt.on(m, g);
 B.on(nt, bt);
 bt.on(c, On);
 var Mt = [v, Q, k, c, jt, Nt, At, m, b, Yt],
  It = [nt, y, Dt, Tn];
 g.on(Mt, g);
 tt.on(Mt, g);
 g.on(It, tt);
 tt.on(It, tt);
 var U = [v, c, jt, Nt, Dt, Yt, b];
 f.on(U, h);
 f.on(Q, j);
 T.on(U, h);
 O.on(U, h);
 O.on(Q, j);
 h.on(U, h);
 h.on(Q, j);
 h.on(y, wt);
 wt.on(U, h);
 j.on(b, A);
 j.on(v, A);
 j.on(k, B);
 var an = function(t) {
   for (var u = t.length, n = 0, a = [], o = []; n < u;) {
    for (var r = p, s = null, c = null, e = 0, l = null, i = -1; n < u && !(s = r.next(t[n]));) {
     o.push(t[n++])
    };
    for (; n < u && (c = s || r.next(t[n]));) {
     s = null, r = c, r.accepts() ? (i = 0, l = r) : 0 <= i && i++, n++, e++
    };
    if (0 > i) {
     for (e = n - e; e < n; e++) {
      o.push(t[e])
     }
    } else {
     0 < o.length && (a.push(new Ht(o)), o = []), n -= i, e -= i, r = l.emit(), a.push(new r(t.slice(n - e, n)))
    }
   };
   0 < o.length && a.push(new Ht(o));
   return a
  },
  on = e.multi,
  tn = p;
 R.State = Pt.TokenState;
 R.TOKENS = on;
 R.run = an;
 R.start = tn;
 var D = {
   __esModule: !0
  },
  a = W,
  z = I,
  ft = 'abogado ac academy accountants active actor ad adult ae aero af ag agency ai airforce al allfinanz alsace am an android ao aq aquarelle ar archi army arpa as asia associates at attorney au auction audio autos aw ax axa az ba band bar bargains bayern bb bd be beer berlin best bf bg bh bi bid bike bio biz bj black blackfriday bloomberg blue bm bmw bn bnpparibas bo boo boutique br brussels bs bt budapest build builders business buzz bv bw by bz bzh ca cab cal camera camp cancerresearch capetown capital caravan cards care career careers casa cash cat catering cc cd center ceo cern cf cg ch channel cheap christmas chrome church ci citic city ck cl claims cleaning click clinic clothing club cm cn co coach codes coffee college cologne com community company computer condos construction consulting contractors cooking cool coop country cr credit creditcard cricket crs cruises cu cuisinella cv cw cx cy cymru cz dad dance dating day de deals degree delivery democrat dental dentist desi diamonds diet digital direct directory discount dj dk dm dnp do domains durban dvag dz eat ec edu education ee eg email emerck energy engineer engineering enterprises equipment er es esq estate et eu eurovision eus events everbank exchange expert exposed fail farm fashion feedback fi finance financial firmdale fish fishing fitness fj fk flights florist flsmidth fly fm fo foo forsale foundation fr frl frogans fund furniture futbol ga gal gallery gb gbiz gd ge gent gf gg gh gi gift gifts gives gl glass gle global globo gm gmail gmo gmx gn google gop gov gp gq gr graphics gratis green gripe gs gt gu guide guitars guru gw gy hamburg haus healthcare help here hiphop hiv hk hm hn holdings holiday homes horse host hosting house how hr ht hu ibm id ie il im immo immobilien in industries info ing ink institute insure int international investments io iq ir irish is it je jetzt jm jo jobs joburg jp juegos kaufen ke kg kh ki kim kitchen kiwi km kn koeln kp kr krd kred kw ky kz la lacaixa land latrobe lawyer lb lc lds lease legal lgbt li life lighting limited limo link lk loans london lotto lr ls lt ltda lu luxe luxury lv ly ma madrid maison management mango market marketing mc md me media meet melbourne meme memorial menu mg mh miami mil mini mk ml mm mn mo mobi moda moe monash money mormon mortgage moscow motorcycles mov mp mq mr ms mt mu museum mv mw mx my mz na nagoya name navy nc ne net network neustar new nexus nf ng ngo nhk ni ninja nl no np nr nra nrw nu nyc nz okinawa om ong onl ooo org organic otsuka ovh pa paris partners parts party pe pf pg ph pharmacy photo photography photos physio pics pictures pink pizza pk pl place plumbing pm pn pohl poker porn post pr praxi press pro prod productions prof properties property ps pt pub pw py qa qpon quebec re realtor recipes red rehab reise reisen reit ren rentals repair report republican rest restaurant reviews rich rio rip ro rocks rodeo rs rsvp ru ruhr rw ryukyu sa saarland sarl sb sc sca scb schmidt schule science scot sd se services sexy sg sh shiksha shoes si singles sj sk sl sm sn so social software sohu solar solutions soy space spiegel sr st su supplies supply support surf surgery suzuki sv sx sy sydney systems sz taipei tatar tattoo tax tc td technology tel tf tg th tienda tips tirol tj tk tl tm tn to today tokyo tools top town toys tp tr trade training travel trust tt tui tv tw tz ua ug uk university uno uol us uy uz va vacations vc ve vegas ventures versicherung vet vg vi viajes villas vision vlaanderen vn vodka vote voting voto voyage vu wales wang watch webcam website wed wedding wf whoswho wien wiki williamhill wme work works world ws wtc wtf xxx xyz yachts yandex ye yoga yokohama youtube yt za zip zm zone zw'.split(' '),
  lt = /[0-9]/,
  K = /[a-z0-9]/,
  Y = ':',
  u = [],
  i = function(t) {
   return new z.CharacterState(t)
  },
  l = a.text.DOMAIN,
  vn = a.text.LOCALHOST,
  dn = a.text.NUM,
  yn = a.text.PROTOCOL,
  bn = a.text.TLD,
  en = a.text.WS,
  r = i(),
  q = i(dn),
  S = i(l),
  w = i(),
  ct = i(en);
 r.on('@', i(a.text.AT));
 r.on('.', i(a.text.DOT));
 r.on('+', i(a.text.PLUS));
 r.on('#', i(a.text.POUND));
 r.on('?', i(a.text.QUERY));
 r.on('/', i(a.text.SLASH));
 r.on(Y, i(a.text.COLON));
 r.on(/[,;!]/, i(a.text.PUNCTUATION));
 r.on(/\n/, i(a.text.NL));
 r.on(/\s/, ct);
 ct.on(/[^\S\n]/, ct);
 for (var d = 0; d < ft.length; d++) {
  var An = (0, z.stateify)(ft[d], r, bn, l);
  u.push.apply(u, An)
 };
 var Ct = (0, z.stateify)('file', r, l, l),
  gt = (0, z.stateify)('ftp', r, l, l),
  zt = (0, z.stateify)('http', r, l, l);
 u.push.apply(u, Ct);
 u.push.apply(u, gt);
 u.push.apply(u, zt);
 var Wt = Ct.pop(),
  Ut = gt.pop(),
  qt = zt.pop(),
  X = i(l),
  et = i(yn);
 Ut.on('s', X);
 qt.on('s', X);
 u.push(X);
 Wt.on(Y, et);
 Ut.on(Y, et);
 qt.on(Y, et);
 X.on(Y, et);
 var Sn = (0, z.stateify)('localhost', r, vn, l);
 u.push.apply(u, Sn);
 r.on(lt, q);
 q.on('-', w);
 q.on(lt, q);
 q.on(K, S);
 S.on('-', w);
 S.on(K, S);
 for (d = 0; d < u.length; d++) {
  u[d].on('-', w), u[d].on(K, S)
 };
 w.on('-', w);
 w.on(lt, S);
 w.on(K, S);
 r.on(/./, i(a.text.SYM));
 var xn = function(t) {
   for (var c = t.toLowerCase(), s = t.length, o = 0, a = []; o < s;) {
    for (var e = r, l = null, i = 0, u = null, n = -1; o < s && (l = e.next(c[o]));) {
     e = l, e.accepts() ? (n = 0, u = e) : 0 <= n && n++, i++, o++
    };
    0 > n || (o -= n, i -= n, e = u.emit(), a.push(new e(t.substr(o - i, i))))
   };
   return a
  },
  wn = r;
 D.State = z.CharacterState;
 D.TOKENS = a.text;
 D.run = xn;
 D.start = wn;
 var ot = {
  __esModule: !0
 };

 function Ot(t) {
  return t
 };

 function cn(t, n) {
  return 'url' === n ? '_blank' : null
 };

 function pn(t) {
  t = t || {};
  return {
   attributes: t.linkAttributes || null,
   defaultProtocol: t.defaultProtocol || 'http',
   events: t.events || null,
   format: t.format || Ot,
   formatHref: t.formatHref || Ot,
   newLine: t.newLine || !1,
   nl2br: !!t.newLine || t.nl2br || !1,
   tagName: t.tagName || 'a',
   target: t.target || cn,
   linkClass: t.linkClass || 'linkified'
  }
 };

 function fn(t) {
  for (var e = arguments.length, o = Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) {
   o[n - 1] = arguments[n]
  };
  return 'function' === typeof t ? t.apply(void 0, o) : t
 };
 ot.normalize = pn;
 ot.resolve = fn;
 var x = {
  __esModule: !0
 };

 function it(t) {
  if (t && t.__esModule) {
   return t
  };
  var n = {};
  if (null != t) {
   for (var e in t) {
    Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e])
   }
  };
  n['default'] = t;
  return n
 };
 var Rn = ot,
  Ln = it(Rn),
  Cn = D,
  yt = it(Cn),
  jn = R,
  Rt = it(jn);
 Array.isArray || (Array.isArray = function(t) {
  return '[object Array]' === Object.prototype.toString.call(t)
 });
 var pt = function(t) {
   return Rt.run(yt.run(t))
  },
  ln = function(t, n) {
   for (var r = void 0 === n ? null : n, o = pt(t), i = [], e = 0; e < o.length; e++) {
    !o[e].isLink || r && o[e].type !== r || i.push(o[e].toObject())
   };
   return i
  },
  hn = function(t, n) {
   var o = void 0 === n ? null : n,
    e = pt(t);
   return 1 === e.length && e[0].isLink && (!o || e[0].type === o)
  };
 x.find = ln;
 x.options = Ln;
 x.parser = Rt;
 x.scanner = yt;
 x.test = hn;
 x.tokenize = pt;
 window.linkify = x
})();
(function(t, n) {
 'use strict';
 var d = n.tokenize,
  e = n.options;
 'use strict';
 var l = 1,
  u = 3;

 function s(e, n, t) {
  var r = t[t.length - 1];
  e.replaceChild(r, n);
  for (var i = t.length - 2; i >= 0; i--) {
   e.insertBefore(t[i], r);
   r = t[i]
  }
 };

 function c(r, t, a) {
  var l = [];
  for (var u = 0; u < r.length; u++) {
   var n = r[u];
   if (n.isLink) {
    var o = n.toHref(t.defaultProtocol),
     y = e.resolve(t.format, n.toString(), n.type),
     k = e.resolve(t.formatHref, o, n.type),
     d = e.resolve(t.attributes, o, n.type),
     h = e.resolve(t.tagName, o, n.type),
     v = e.resolve(t.linkClass, o, n.type),
     c = e.resolve(t.target, o, n.type),
     s = e.resolve(t.events, o, n.type),
     i = a.createElement(h);
    i.setAttribute('href', k);
    i.setAttribute('class', v);
    if (c) {
     i.setAttribute('target', c)
    };
    if (d) {
     for (var m in d) {
      i.setAttribute(m, d[m])
     }
    };
    if (s) {
     for (var f in s) {
      if (i.addEventListener) {
       i.addEventListener(f, s[f])
      } else if (i.attachEvent) {
       i.attachEvent('on' + f, s[f])
      }
     }
    };
    i.appendChild(a.createTextNode(y));
    l.push(i)
   } else if (n.type === 'nl' && t.nl2br) {
    l.push(a.createElement('br'))
   } else {
    l.push(a.createTextNode(n.toString()))
   }
  };
  return l
 };

 function o(e, n, i) {
  if (!e || typeof e !== 'object' || e.nodeType !== l) {
   throw new Error('Cannot linkify ' + e + ' - Invalid DOM Node type')
  };
  if (e.tagName === 'A') {
   return e
  };
  var t = e.firstChild;
  while (t) {
   switch (t.nodeType) {
    case l:
     o(t, n, i);
     break;
    case u:
     var a = t.nodeValue,
      f = d(a),
      r = c(f, n, i);
     s(e, t, r);
     t = r[r.length - 1];
     break
   };
   t = t.nextSibling
  };
  return e
 };

 function i(t, n) {
  var i = arguments[2] === undefined ? null : arguments[2];
  try {
   i = i || window && window.document || global && global.document
  } catch (r) {};
  if (!i) {
   throw new Error('Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the third argument to linkifyElement.')
  };
  n = e.normalize(n);
  return o(t, n, i)
 };
 i.helper = o;
 i.normalize = e.normalize;
 'use strict';
 var r = undefined;
 try {
  r = document
 } catch (a) {
  r = null
 };

 function f(e) {
  var t = arguments[1] === undefined ? null : arguments[1];
  e.fn = e.fn || {};
  try {
   t = t || window && window.document || global && global.document
  } catch (n) {};
  if (!t) {
   throw new Error('Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the third argument to linkifyElement.')
  };
  if (typeof e.fn.linkify === 'function') {
   return
  };

  function r(e) {
   e = i.normalize(e);
   return this.each(function() {
    i.helper(this, e, t)
   })
  };
  e.fn.linkify = r;
  e(t).ready(function() {
   e('[data-linkify]').each(function() {
    var i = e(this),
     t = i.data(),
     r = t.linkify,
     n = t.linkifyNlbr,
     o = {
      linkAttributes: t.linkifyAttributes,
      defaultProtocol: t.linkifyDefaultProtocol,
      events: t.linkifyEvents,
      format: t.linkifyFormat,
      formatHref: t.linkifyFormatHref,
      newLine: t.linkifyNewline,
      nl2br: !!n && n !== 0 && n !== 'false',
      tagName: t.linkifyTagname,
      target: t.linkifyTarget,
      linkClass: t.linkifyLinkclass
     };
    var a = r === 'this' ? i : i.find(r);
    a.linkify(o)
   })
  })
 };
 if (typeof t !== 'undefined' && r) {
  f(t, r)
 };
 window.linkifyElement = i
})(window.jQuery, window.linkify);
(function(e) {
 'use strict';
 var o = e.tokenize,
  r = e.options;
 'use strict';

 function i(e) {
  return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
 };

 function t(e) {
  return e.replace(/"/g, '&quot;')
 };

 function a(e) {
  if (!e) return '';
  var n = [];
  for (var r in e) {
   var i = (e[r] + '').replace(/"/g, '&quot;');
   n.push('' + r + '="' + t(i) + '"')
  };
  return n.join(' ')
 };

 function n(s) {
  var e = arguments[1] === undefined ? {} : arguments[1];
  e = r.normalize(e);
  var c = o(s),
   l = [];
  for (var p = 0; p < c.length; p++) {
   var n = c[p];
   if (n.isLink) {
    var f = n.toHref(e.defaultProtocol),
     m = r.resolve(e.format, n.toString(), n.type),
     k = r.resolve(e.formatHref, f, n.type),
     v = r.resolve(e.attributes, f, n.type),
     g = r.resolve(e.tagName, f, n.type),
     h = r.resolve(e.linkClass, f, n.type),
     y = r.resolve(e.target, f, n.type),
     u = '<' + g + ' href="' + t(k) + '" class="' + t(h) + '"';
    if (y) {
     u += ' target="' + t(y) + '"'
    };
    if (v) {
     u += ' ' + a(v)
    };
    u += '>' + i(m) + '</' + g + '>';
    l.push(u)
   } else if (n.type === 'nl' && e.nl2br) {
    if (e.newLine) {
     l.push(e.newLine)
    } else {
     l.push('<br>\n')
    }
   } else {
    l.push(i(n.toString()))
   }
  };
  return l.join('')
 };
 if (!String.prototype.linkify) {
  String.prototype.linkify = function(e) {
   return n(this, e)
  }
 };
 window.linkifyStr = n
})(window.linkify);

function SendContactForm(){
     var notyf = new Notyf({
        delay:1000,
        showDuration: 150,
        elementPosition: 'bottom right',
        clickToHide: true
    });
    var name=$("#name").val();
    var email=$("#email").val();
    var subject=$("#theme").val();
    var message=$("#text").val();
     if(name=='' || email=='' || subject=='' || message==''){
        return false;
    }
    else
    if(!validateEmail(email)){
        notyf.alert('Email is empty or Format is invalid!');
    }else{
    $("#loading").show();
    $('#feedback_submit').prop('disabled', true);
    if(name!='' && email!='' && message!=''){
        $.ajax({
            url:'process/contactform.php',
            type:'post',
           data:{
               name:name,
               email:email,
               subject:subject,
               message:message
           },
           success:function(data){
               $("#loading").hide();
                $('#feedback_submit').prop('disabled', false);
               if(data=='true'){
               notyf.confirm('your message has been send successfully!');
                $("#name").val('');
               $("#email").val('');
               $("#theme").val('');
                $("#text").val('');
                $("#sucessmsg").show();
                }else{
                    notyf.alert('You message is not delivered please try again!');
                }
               
           },
           error:function(data){
              
               notyf.alert('You message is not delivered please try again!');
           }
        });
        
    }

    }    
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function deletecommentdata(primary_id,primary_column,tablename,fieldid,isadminpassrequired){
    
     //if we need admin authorization 
    if(isadminpassrequired=='true'){
  
    }
    
    //normal yes no to confirm
    swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    

    
    $.ajax({
       url:"cms/process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'deletedata',
           tablename:tablename,
           primary_id:primary_id,
           primary_coulmn_name:primary_column
       },
       success:function(data){
           if(data){
             $("#"+fieldid).hide();
             successmsg('data successfully deleted');
           }
        }
     });
   }
 })
}
function gettagssuggetion_user(currentid,fieldid){
    
  var  tag=$("#"+currentid).val();
    var pieces = tag.split(/[\s,]+/);
    tag=(pieces[pieces.length-1]); 
    $.ajax({
       url:"cms/process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'gettagssuggetion',
           tag:tag,
           fieldid:currentid,
          
       },
       success:function(data){
           if(data){
            $("#"+fieldid).show();
            }
           $("#"+fieldid).html(data);
        }
     })

}