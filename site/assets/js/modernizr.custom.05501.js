window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(x.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function l(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),l(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)z[n[r]]=n[r]in E;return z.list&&(z.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),z}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)E.setAttribute("type",o=e[a]),r="text"!==E.type,r&&(E.value=w,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=w)),M[e[a]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),w=":)",x=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),S="Webkit Moz O ms",T=S.split(" "),C=S.toLowerCase().split(" "),k={},M={},z={},$=[],j=$.slice,N=function(e,n,r,o){var i,a,c,l,s=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),s.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),s.id=v,(u?s:d).innerHTML+=i,d.appendChild(s),u||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(s,e),u?s.parentNode.removeChild(s):(d.parentNode.removeChild(d),g.style.overflow=l),!!a},P=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return N("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},D=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),A={}.hasOwnProperty;f=i(A,"undefined")||i(A.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),k.flexbox=function(){return s("flexWrap")},k.flexboxlegacy=function(){return s("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!s("indexedDB",e)},k.hashchange=function(){return D("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},k.backgroundsize=function(){return s("backgroundSize")},k.borderimage=function(){return s("borderImage")},k.borderradius=function(){return s("borderRadius")},k.boxshadow=function(){return s("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},k.cssanimations=function(){return s("animationName")},k.csscolumns=function(){return s("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},k.cssreflections=function(){return s("boxReflect")},k.csstransforms=function(){return!!s("transform")},k.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in g.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return s("transition")},k.generatedcontent=function(){var e;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},k.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache};for(var B in k)f(k,B)&&(d=B.toLowerCase(),m[d]=k[B](),$.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,h!==void 0&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),y=E=null,m._version=p,m._prefixes=x,m._domPrefixes=C,m._cssomPrefixes=T,m.mq=P,m.hasEvent=D,m.testProp=function(e){return c([e])},m.testAllProps=s,m.testStyles=N,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),m}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=x[e[E]];return t||(t={},w++,e[E]=w,x[w]=t),t}function i(e,n,r){if(n||(n=t),h)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||y.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),h)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;l>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function l(e){e||(e=t);var r=o(e);return S.shivCSS&&!m&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||c(e,r),e}function s(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(C+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+C+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function p(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),c=e.namespaces,l=e.parentWindow;return!k||e.printShived?e:(c[C]===void 0&&c.add(C),l.attachEvent("onbeforeprint",function(){t();for(var o,a,c,l=e.styleSheets,u=[],f=l.length,p=Array(f);f--;)p[f]=l[f];for(;c=p.pop();)if(!c.disabled&&T.test(c.media)){try{o=c.imports,a=o.length}catch(m){a=0}for(f=0;a>f;f++)p.push(o[f]);try{u.push(c.cssText)}catch(m){}}u=d(u.reverse().join("")),i=s(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){f(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m,h,g="3.7.0",v=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E="_html5shiv",w=0,x={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===void 0||e.createDocumentFragment===void 0||e.createElement===void 0}()}catch(n){m=!0,h=!0}})();var S={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:v.shivCSS!==!1,supportsUnknownElements:h,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=S,l(t);var T=/^$|\b(?:all|print)\b/,C="html5shiv",k=!h&&function(){var n=t.documentElement;return t.namespaces!==void 0&&t.parentWindow!==void 0&&n.applyElement!==void 0&&n.removeNode!==void 0&&e.attachEvent!==void 0}();S.type+=" print",S.shivPrint=p,p(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,o,i,l,s){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(d)},50);for(var r in k[n])k[n].hasOwnProperty(r)&&k[n][r].onload()}}var s=s||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:l,x:s};1===k[n]&&(g=1,k[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===k[n]?(w.insertBefore(d,E?null:h),m(u,s)):k[n].push(d))}function s(e,t,n,r,i){return y=0,t=t||"j",o(e)?l("c"==t?S:x,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:s,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,w=E?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,x=b?"object":p?"script":"img",S=p?"script":x,T=Array.isArray||function(e){return"[object Array]"==g.call(e)},C=[],k={},M={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=C.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=M[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=C[n](i);return i}function a(e,o,i,a,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(k[l.url]?l.noexec=!0:k[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(l.origUrl,c,a),s&&s(l.origUrl,c,a),k[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[l])),a(e[l],d,t,l,s))}else!n&&p()}var c,l,s=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(T(e))for(l=0;e.length>l;l++)s=e[l],o(s)?a(s,0,d,0):T(s)?f(s):Object(s)===s&&c(s,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){M[e]=t},f.addFilter=function(e){C.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=s?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),l?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s,o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("bgpositionxy",function(){return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}",function(e){var t=window.getComputedStyle?getComputedStyle(e,null):e.currentStyle,n="3px"==t.backgroundPositionX||"3px"==t["background-position-x"],r="5px"==t.backgroundPositionY||"5px"==t["background-position-y"];return n&&r})}),function(){var e=document.createElement("a"),t=e.style,n="right 10px bottom 10px";Modernizr.addTest("bgpositionshorthand",function(){return t.cssText="background-position: "+n+";",t.backgroundPosition===n})}(),function(){function e(e){return window.getComputedStyle?getComputedStyle(e,null).getPropertyValue("background"):e.currentStyle.background}Modernizr.testStyles(" #modernizr { background-repeat: round; } ",function(t){Modernizr.addTest("bgrepeatround","round"==e(t))}),Modernizr.testStyles(" #modernizr { background-repeat: space; } ",function(t){Modernizr.addTest("bgrepeatspace","space"==e(t))})}(),Modernizr.testStyles("#modernizr{background-size:cover}",function(e){var t=window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle;Modernizr.addTest("bgsizecover","cover"==t.backgroundSize)}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=document.createElement("div");return n.style.cssText=e+Modernizr._prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)}),Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))}),function(e,t){t.formvalidationapi=!1,t.formvalidationmessage=!1,t.addTest("formvalidation",function(){var n=e.createElement("form");if("checkValidity"in n&&"addEventListener"in n){if("reportValidity"in n)return!0;var r,o=!1;return t.formvalidationapi=!0,n.addEventListener("submit",function(e){window.opera||e.preventDefault(),e.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',t.testStyles("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(n),r=n.getElementsByTagName("input")[0],r.addEventListener("invalid",function(e){o=!0,e.preventDefault(),e.stopPropagation()},!1),t.formvalidationmessage=!!r.validationMessage,n.getElementsByTagName("button")[0].click()}),o}return!1})}(document,window.Modernizr),Modernizr.addTest("fileinput",function(){var e=document.createElement("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,t=document.createElement("form"),n=document.createElement("input"),r=document.createElement("div"),o="formtest"+(new Date).getTime(),i=!1;return t.id=o,document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=o,n.setAttributeNode(e),r.appendChild(t),r.appendChild(n),document.documentElement.appendChild(r),i=1===t.elements.length&&n.form==t,r.parentNode.removeChild(r)),i});