(function(){var h={},mt={},c={id:"84cf3e27ee8e5085bf7def1af953d74c",dm:["m.huxiu.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,aet:'',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,d){var g;d.Y&&(g=new Date,g.setTime(g.getTime()+d.Y));document.cookie=b+"="+a+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(g?"; expires="+g.toGMTString():"")+(d.Vb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};
mt.lang.wa=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.ea=function(){return mt.lang.d(c.aet,"String")};mt.lang.i=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.F=function(b,a){var d=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return d;if(Array.prototype.indexOf)d=-1!==b.indexOf(a);else for(var g=0;g<b.length;g++)if(b[g]===a){d=s;break}return d};
(function(){var b=mt.lang;mt.e={};mt.e.Wa=function(a){return document.getElementById(a)};mt.e.ba=function(a,b){var g=[],k=[];if(!a)return k;for(;a.parentNode!=t;){for(var n=0,l=0,p=a.parentNode.childNodes.length,f=0;f<p;f++){var e=a.parentNode.childNodes[f];if(e.nodeName===a.nodeName&&(n++,e===a&&(l=n),0<l&&1<n))break}if((p=""!==a.id)&&b){g.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<g.length?p+">"+g.join(">"):p,k.push(p)),g.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<n?"["+l+"]":""));a=a.parentNode}k.push(g.join(">"));return k};mt.e.ta=function(a){return(a=mt.e.ba(a,s))&&a.length?String(a[0]):""};mt.e.Rb=function(a){return mt.e.ba(a,u)};mt.e.Xa=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Za=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.eb=function(a){var b={top:0,left:0};if(!a)return b;var g=mt.e.Za(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||g.scrollTop)-(g.clientTop||0),left:b.left+(window.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};mt.e.getAttribute=function(a,b){var g=a.getAttribute&&a.getAttribute(b)||t;if(!g&&a.attributes&&a.attributes.length)for(var k=a.attributes,n=k.length,l=0;l<n;l++)k[l].nodeName===b&&(g=k[l].nodeValue);return g};mt.e.M=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.hb=function(a){var d="";a.textContent?d=b.trim(a.textContent):
a.innerText&&(d=b.trim(a.innerText));d&&(d=d.replace(/\s+/g," ").substring(0,255));return d};mt.e.$a=function(a){var b=mt.e.M(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.hb(a);return String(a).substring(0,255)};(function(){(mt.e.zb=function(){function a(){if(!a.O){a.O=s;for(var b=0,g=k.length;b<g;b++)k[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(g){setTimeout(b,
1);return}a()}var g=u,k=[],n;document.addEventListener?n=function(){document.removeEventListener("DOMContentLoaded",n,u);a()}:document.attachEvent&&(n=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",n),a())});(function(){if(!g)if(g=s,"complete"===document.readyState)a.O=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
n);window.attachEvent("onload",a);var k=u;try{k=window.frameElement==t}catch(p){}document.documentElement.doScroll&&k&&b()}})();return function(b){a.O?b():k.push(b)}}()).O=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,d){b.attachEvent?b.attachEvent("on"+a,function(a){d.call(b,a)}):b.addEventListener&&b.addEventListener(a,d,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.rb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Bb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.D=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.z=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var k=["["],n=d.length,l,p,f;for(p=0;p<n;p++)switch(f=d[p],typeof f){case "undefined":case "function":case "unknown":break;default:l&&k.push(","),k.push(mt.l.stringify(f)),l=1}k.push("]");return k.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';l=["{"];p=mt.l.stringify;for(n in d)if(Object.prototype.hasOwnProperty.call(d,n))switch(f=
d[n],typeof f){case "undefined":case "unknown":case "function":break;default:k&&l.push(","),k=1,l.push(p(n)+":"+p(f))}l.push("}");return l.join("")}}}();mt.localStorage={};mt.localStorage.T=function(){if(!mt.localStorage.j)try{mt.localStorage.j=document.createElement("input"),mt.localStorage.j.type="hidden",mt.localStorage.j.style.display="none",mt.localStorage.j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,d){var g=new Date;g.setTime(g.getTime()+d||31536E6);try{window.localStorage?(a=g.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.T()&&(mt.localStorage.j.expires=g.toUTCString(),mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.setAttribute(b,a),mt.localStorage.j.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),d=b.substring(0,a)-0;if(d&&d>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.T())try{return mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.getAttribute(b)}catch(g){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.T())try{mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.removeAttribute(b),mt.localStorage.j.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(d){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Aa={};mt.Aa.log=function(b,a){var d=new Image,g="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[g]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[g]=t;a&&a(b)};d.src=b};mt.la={};
mt.la.ib=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return b};
mt.la.Qb=function(b,a,d,g,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+d+'" height="'+g+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+d+'" height="'+g+'" src="'+a+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var d=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.Sb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.bb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.aa=function(b){return(b=mt.url.bb(b))?b.replace(/:\d+$/,""):b};mt.url.ba=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),g=b.length,g=100<g?100:g,k=0;k<g;k++){var n=b[k].src;if(n&&0===n.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.Va=b})();var A=h.Va;
h.m={Tb:"http://tongji.baidu.com/hm-web/welcome/ico",ia:"hm.baidu.com/hm.gif",Ha:"tongji.baidu.com",ob:"hmmd",pb:"hmpl",Mb:"utm_medium",nb:"hmkw",Ob:"utm_term",lb:"hmci",Lb:"utm_content",qb:"hmsr",Nb:"utm_source",mb:"hmcu",Kb:"utm_campaign",A:0,o:Math.round(+new Date/1E3),C:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",P:A()||"https:"===document.location.protocol?"https:":"http:",Ub:0,Na:6E5,ub:6E5,Cb:5E3,Oa:5,B:1024,Ma:1,I:2147483647,Ba:"kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" "),
G:s,qa:["a","input","button"],Ja:{id:"data-hm-id",W:"data-hm-class",na:"data-hm-xpath",content:"data-hm-content",S:"data-hm-tag",link:"data-hm-link"},pa:"data-hm-enabled",oa:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},L:function(a,b){this.r[a]=this.r[a]||[];for(var g=this.r[a].length,k=0;k<g;k++)this.r[a][k](b)}};return h.w=b})();
(function(){function b(b,g){var k=document.createElement("script");k.charset="utf-8";a.d(g,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=t,g()}:k.onload=function(){g()});k.src=b;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(k,n)}var a=mt.lang;return h.load=b})();
(function(){var b=mt.e,a=mt.lang,d=mt.event,g=mt.g,k=h.m,n=h.w,l=[],p={Ca:function(){c.ctrk&&(d.c(document,"mouseup",p.La()),d.c(window,"unload",function(){p.Q()}),setInterval(function(){p.Q()},k.Na))},La:function(){return function(e){e=p.Ya(e);if(""!==e){var a=(k.P+"//"+k.ia+"?"+h.a.za().replace(/ep=[^&]*/,"ep="+encodeURIComponent(e))).length;a+(k.I+"").length>k.B||(a+encodeURIComponent(l.join("!")+(l.length?"!":"")).length+(k.I+"").length>k.B&&p.Q(),l.push(e),(l.length>=k.Oa||/\*a\*/.test(e))&&
p.Q())}}},Ya:function(e){var d=e.target||e.srcElement;if(0===k.Ma){var m=(d.tagName||"").toLowerCase();if("embed"==m||"object"==m)return""}var q;g.da?(q=Math.max(document.documentElement.scrollTop,document.body.scrollTop),m=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),m=e.clientX+m,q=e.clientY+q):(m=e.pageX,q=e.pageY);e=p.cb(e,d,m,q);var f=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:m-=f/2;break;case 2:m-=f}f=
[];f.push(m);f.push(q);f.push(e.vb);f.push(e.wb);f.push(e.yb);f.push(a.i(e.xb));f.push(e.Pb);f.push(e.jb);(d="a"===(d.tagName||"").toLowerCase()?d:b.Xa(d))?(f.push("a"),f.push(a.i(encodeURIComponent(d.href)))):f.push("b");return f.join("*")},cb:function(e,d,m,q){e=b.ta(d);var f=0,k=0,n=0,l=0;if(d&&(f=d.offsetWidth||d.clientWidth,k=d.offsetHeight||d.clientHeight,l=b.eb(d),n=l.left,l=l.top,a.d(d.getBBox,"Function")&&(k=d.getBBox(),f=k.width,k=k.height),"html"===(d.tagName||"").toLowerCase()))f=Math.max(f,
d.clientWidth),k=Math.max(k,d.clientHeight);return{vb:Math.round(100*((m-n)/f)),wb:Math.round(100*((q-l)/k)),yb:g.orientation,xb:e,Pb:f,jb:k}},Q:function(){0!==l.length&&(h.a.b.et=2,h.a.b.ep=l.join("!"),h.a.h(),l=[])}},f={Fa:function(){c.ctrk&&setInterval(f.Db,k.Cb)},Db:function(){var e=g.D()+g.z();0<e-h.a.b.vl&&(h.a.b.vl=e)}};n.c("pv-b",p.Ca);n.c("pv-b",f.Fa);return p})();
(function(){var b=mt.lang,a=mt.e,d=mt.event,g=mt.g,k=h.m,n=h.w,l=+new Date,p=[],f={ra:function(){return function(e){if(h.a&&h.a.G&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var m=h.a.qa,q=a.getAttribute(d,k.pa)!=t?s:u;if(a.getAttribute(d,k.oa)==t)if(q)f.U(f.$(d,e));else{var g=a.M(d);if(b.F(m,"*")||b.F(m,g))f.U(f.$(d,e));else for(;d.parentNode!=t;){var q=d.parentNode,g=a.M(q),n="a"===g&&b.F(m,"a")?s:u,g="button"===g&&b.F(m,"button")?s:u,l=a.getAttribute(q,k.pa)!=t?s:u;if(a.getAttribute(q,
k.oa)==t&&(n||g||l)){f.U(f.$(q,e));break}d=d.parentNode}}}}}},$:function(e,d){var m={},q=k.Ja;m.id=a.getAttribute(e,q.id)||a.getAttribute(e,"id")||"";m.W=a.getAttribute(e,q.W)||a.getAttribute(e,"class")||"";m.na=a.getAttribute(e,q.na)||a.ta(e);m.content=a.getAttribute(e,q.content)||a.$a(e);m.S=a.getAttribute(e,q.S)||a.M(e);m.link=a.getAttribute(e,q.link)||a.getAttribute(e,"href")||"";m.type=d.type||"click";q=b.wa(e.offsetTop)?e.offsetTop:0;"click"===d.type?q=g.da?d.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):d.pageY:"touchend"===d.type&&(d.ga&&b.d(d.ga.changedTouches,"Array")&&d.ga.changedTouches.length)&&(q=d.ga.changedTouches[0].pageY);m.Jb=q;return m},U:function(e){var a=b.i,a=[+new Date-(h.a.s!==r?h.a.s:l),a(e.id),a(e.W),a(e.S),a(e.na),a(e.link),a(e.content),e.type,e.Jb].join("*");f.V(a);b.F(["a"],e.S)&&b.d(this.J(),"Function")&&this.J()()},V:function(e){e.length>k.B||(encodeURIComponent(p.join("!")+e).length>k.B&&(f.K(p.join("!")),p=[]),p.push(e))},K:function(e){h.a.b.et=
5;h.a.b.ep=e;h.a.h()},J:function(){return function(){p&&p.length&&(f.K(p.join("!")),p=[])}}};b.ea()&&""!==c.aet&&n.c("pv-b",function(){d.c(document,"click",f.ra());"ontouchend"in document&&d.c(window,"touchend",f.ra());d.c(window,"unload",f.J())});return f})();
(function(){var b=mt.event,a=mt.g,d=h.m,g=h.w,k=+new Date,n=[],l=t,p={Ra:function(){return function(){h.a&&(h.a.G&&c.aet&&c.aet.length)&&(window.clearTimeout(l),l=window.setTimeout(function(){p.Ea(a.D()+a.z())},150))}},Ea:function(a){p.V([+new Date-(h.a.s!==r?h.a.s:k),a].join("*"))},V:function(a){if(encodeURIComponent(n.join("!")+a).length>d.B||5<n.length)p.K(n.join("!")),n=[];n.push(a)},K:function(b){h.a.b.et=6;h.a.b.vh=a.z();h.a.b.ep=b;h.a.h()},J:function(){return function(){n&&n.length&&(p.K(n.join("!")),
n=[])}}};mt.lang.ea()&&""!==c.aet&&g.c("pv-b",function(){b.c(window,"scroll",p.Ra());b.c(window,"unload",p.J())});return p})();
(function(){function b(){return function(){h.a.b.nv=0;h.a.b.st=4;h.a.b.et=3;h.a.b.ep=h.X.fb()+","+h.X.ab();h.a.h()}}function a(){clearTimeout(z);var b;w&&(b="visible"==document[w]);y&&(b=!document[y]);p="undefined"==typeof b?s:b;if((!l||!f)&&p&&e)x=s,m=+new Date;else if(l&&f&&(!p||!e))x=u,q+=+new Date-m;l=p;f=e;z=setTimeout(a,100)}function d(e){var a=document,b="";if(e in a)b=e;else for(var m=["webkit","ms","moz","o"],d=0;d<m.length;d++){var q=m[d]+e.charAt(0).toUpperCase()+e.slice(1);if(q in a){b=
q;break}}return b}function g(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))e="focus"==b.type||"focusin"==b.type?s:u,a()}var k=mt.event,n=h.w,l=s,p=s,f=s,e=s,v=+new Date,m=v,q=0,x=s,w=d("visibilityState"),y=d("hidden"),z;a();(function(){var e=w.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,e,a);k.c(window,"pageshow",a);k.c(window,"pagehide",a);"object"==typeof document.onfocusin?(k.c(document,"focusin",g),k.c(document,"focusout",g)):(k.c(window,"focus",g),
k.c(window,"blur",g))})();h.X={fb:function(){return+new Date-v},ab:function(){return x?+new Date-m+q:q}};n.c("pv-b",function(){k.c(window,"unload",b())});return h.X})();
(function(){var b=mt.lang,a=h.m,d=h.load,g={tb:function(k){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.a){var g=h.a.Z();d([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(g)].join(""),k)}},Ib:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Pa=g})();
(function(){function b(e,a,b,d){if(!(e===r||a===r||d===r)){if(""===e)return[a,b,d].join("*");e=String(e).split("!");for(var f,k=u,g=0;g<e.length;g++)if(f=e[g].split("*"),String(a)===f[0]){f[1]=b;f[2]=d;e[g]=f.join("*");k=s;break}k||e.push([a,b,d].join("*"));return e.join("!")}}function a(e){for(var b in e)if({}.hasOwnProperty.call(e,b)){var m=e[b];d.d(m,"Object")||d.d(m,"Array")?a(m):e[b]=String(m)}}var d=mt.lang,g=mt.l,k=mt.g,n=h.m,l=h.w,p=h.Pa,f={H:[],R:0,xa:u,p:{ma:"",page:""},init:function(){f.f=
0;l.c("pv-b",function(){f.Qa();f.Ta()});l.c("pv-d",function(){f.Ua();f.p.page=""});l.c("stag-b",function(){h.a.b.api=f.f||f.R?f.f+"_"+f.R:"";h.a.b.ct=[decodeURIComponent(h.a.getData("Hm_ct_"+c.id)||""),f.p.ma,f.p.page].join("!")});l.c("stag-d",function(){h.a.b.api=0;f.f=0;f.R=0})},Qa:function(){var e=window._hmt||[];if(!e||d.d(e,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var e=window._hmt,a=0;a<arguments.length;a++){var b=arguments[a];d.d(b,"Array")&&(e.cmd[e.id].push(b),"_setAccount"===
b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],e.id=b,e.cmd[b]=e.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,e)},Ta:function(){var e=window._hmt;if(e&&e.cmd&&e.cmd[c.id])for(var a=e.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,k=a.length;d<k;d++){var g=a[d];b.test(g[0])?f.H.push(g):f.ha(g)}e.cmd[c.id]={push:f.ha}},Ua:function(){if(0<f.H.length)for(var e=0,a=f.H.length;e<a;e++)f.ha(f.H[e]);f.H=t},ha:function(a){var b=a[0];if(f.hasOwnProperty(b)&&
d.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))f.f|=2,h.a.ua=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.f|=4;h.a.b.et=0;h.a.b.ep="";h.a.b.vl=k.D()+k.z();h.a.b.kb=0;h.a.ca?(h.a.b.nv=0,h.a.b.st=4):h.a.ca=s;var b=h.a.b.u,d=h.a.b.su;h.a.b.u=n.protocol+"//"+document.location.host+a[1];f.xa||(h.a.b.su=document.location.href);h.a.h();h.a.b.u=b;
h.a.b.su=d;h.a.s=+new Date}},_trackEvent:function(a){2<a.length&&(f.f|=8,h.a.b.nv=0,h.a.b.st=4,h.a.b.et=4,h.a.b.ep=d.i(a[1])+"*"+d.i(a[2])+(a[3]?"*"+d.i(a[3]):"")+(a[4]?"*"+d.i(a[4]):""),h.a.h())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],m=a[4]||3;if(0<b&&6>b&&0<m&&4>m){f.R++;for(var q=(h.a.b.cv||"*").split("!"),g=q.length;g<b-1;g++)q.push("*");q[b-1]=m+"*"+d.i(a[2])+"*"+d.i(a[3]);h.a.b.cv=q.join("!");a=h.a.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.a.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.a.Ab("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var f=d.i(a[1]);a=d.i(a[2]);if(f!==r&&a!==r){var m=decodeURIComponent(h.a.getData("Hm_ct_"+c.id)||""),m=b(m,f,1,a);h.a.setData("Hm_ct_"+c.id,encodeURIComponent(m),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var g=d.i(a[1]);a=d.i(a[2]);if(g!==r&&a!==r){var m=f.p.ma,m=b(m,g,2,a);f.p.ma=m}}},_setPageTag:function(a){if(!(3>a.length)){var g=d.i(a[1]);a=d.i(a[2]);if(g!==r&&a!==r){var m=f.p.page,
m=b(m,g,3,a);f.p.page=m}}},_setReferrerOverride:function(a){1<a.length&&(h.a.b.su=a[1].charAt&&"/"===a[1].charAt(0)?n.protocol+"//"+window.location.host+a[1]:a[1],f.xa=s)},_trackOrder:function(b){b=b[1];d.d(b,"Object")&&(a(b),f.f|=16,h.a.b.nv=0,h.a.b.st=4,h.a.b.et=94,h.a.b.ep=g.stringify(b),h.a.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.f|=32,h.a.b.et=93,h.a.b.ep=a,h.a.h()},_trackRTPageview:function(b){b=b[1];d.d(b,"Object")&&(a(b),b=g.stringify(b),
512>=encodeURIComponent(b).length&&(f.f|=64,h.a.b.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.d(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var k=function(a){var b=h.a.b.rt;f.f|=128;h.a.b.et=90;h.a.b.rt=a;h.a.h();h.a.b.rt=b},m=b.length;if(900>=m)k.call(this,b);else for(var m=Math.ceil(m/900),q="block|"+Math.round(Math.random()*n.I).toString(16)+"|"+m+"|",l=[],w=0;w<m;w++)l.push(w),l.push(b.substring(900*w,900*w+900)),k.call(this,q+l.join("|")),l=[]}},_setUserId:function(a){a=a[1];p.tb();
p.Ib(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.a.va=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.a.G=a}};f.init();h.Ia=f;return h.Ia})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.b={},this.va=this.ua=s,this.G=e.G,this.qa=k.ea()&&0<c.aet.length?c.aet.split(","):"",this.ca=u,this.init())}var a=mt.url,d=mt.Aa,g=mt.la,k=mt.lang,n=mt.cookie,l=mt.g,p=mt.localStorage,f=mt.sessionStorage,e=h.m,v=h.w;b.prototype={fa:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ya:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},N:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ya(b,c.dm[d]))return s}else{var e=a.aa(b);if(e&&this.fa(e,c.dm[d]))return s}return u},Z:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.fa(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},sa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ya(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,
"$1")+"/"}return"/"},gb:function(){if(!document.referrer)return e.o-e.A>c.vdur?1:4;var b=u;this.N(document.referrer)&&this.N(document.location.href)?b=s:(b=a.aa(document.referrer),b=this.fa(b||"",document.location.hostname));return b?e.o-e.A>c.vdur?1:4:3},getData:function(a){try{return n.get(a)||f.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{n.set(a,b,{domain:this.Z(),path:this.sa(),Y:d}),d?p.set(a,b,d):f.set(a,b)}catch(e){}},Ab:function(a){try{n.set(a,"",{domain:this.Z(),path:this.sa(),
Y:-1}),f.remove(a),p.remove(a)}catch(b){}},Gb:function(){var a,b,d,f,g;e.A=this.getData("Hm_lpvt_"+c.id)||0;13===e.A.length&&(e.A=Math.round(e.A/1E3));b=this.gb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<e.o-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(e.o);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=e.o,f="",g=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+
c.id,e.o);d=e.o===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.N(document.location.href)&&(""===document.referrer||this.N(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=f;this.b.lv=g},za:function(){for(var a=[],b=this.b.et,d=+new Date,f=0,g=e.Ba.length;f<g;f++){var k=e.Ba[f],l=this.b[k];"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+
e.C);this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 3:a.push("sn="+e.C);break;case 5:a.push("sn="+e.C);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+e.C);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+e.C);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},Hb:function(){this.Gb();this.b.si=c.id;this.b.su=document.referrer;this.b.ds=l.Bb;this.b.cl=l.colorDepth+"-bit";this.b.ln=String(l.language).toLowerCase();this.b.ja=l.javaEnabled?
1:0;this.b.ck=l.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=g.ib();this.b.v="1.2.38";this.b.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=l.D()+l.z();var b=document.location.href;this.b.cm=a.k(b,e.ob)||"";this.b.cp=a.k(b,e.pb)||a.k(b,e.Mb)||"";this.b.cw=a.k(b,e.nb)||a.k(b,e.Ob)||"";this.b.ci=a.k(b,e.lb)||a.k(b,e.Lb)||"";this.b.cf=a.k(b,e.qb)||a.k(b,e.Nb)||"";this.b.cu=a.k(b,e.mb)||a.k(b,e.Kb)||""},init:function(){try{this.Hb(),
0===this.b.nv?this.Fb():this.ka(".*"),h.a=this,this.Ka(),v.L("pv-b"),this.Eb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(e.P+"//"+e.ia+"?"+b.join("&"))}},Eb:function(){function a(){v.L("pv-d")}this.ua?(this.ca=s,this.b.et=0,this.b.ep="",this.b.vl=l.D()+l.z(),this.h(a)):a();this.s=+new Date},h:function(a){if(this.va){var b=this;b.b.rnd=Math.round(Math.random()*e.I);
v.L("stag-b");var f=e.P+"//"+e.ia+"?"+b.za();v.L("stag-d");b.Ga(f);d.log(f,function(d){b.ka(d);k.d(a,"Function")&&a.call(b)})}},Ka:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),f=a.aa(document.referrer)===e.Ha?1:0,g=a.k(b,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(g);b&&(d.test(b)&&f&&k)&&(this.b.rnd=Math.round(Math.random()*e.I),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",e.protocol+"//"+
c.js+g+".js?"+this.b.rnd),g=document.getElementsByTagName("script")[0],g.parentNode.insertBefore(b,g))},Ga:function(a){var b=f.get("Hm_unsent_"+c.id)||"",d=this.b.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");f.set("Hm_unsent_"+c.id,b)},ka:function(a){var b=f.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,
""))?f.set("Hm_unsent_"+c.id,b):f.remove("Hm_unsent_"+c.id))},Fb:function(){var a=this,b=f.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),g=function(b){d.log(e.P+"//"+decodeURIComponent(b),function(b){a.ka(b)})},k=0,l=b.length;k<l;k++)g(b[k])}};return new b})();
(function(){var b=mt.event,a=mt.lang,d=h.m;if(c.kbtrk&&"undefined"!==typeof h.a){h.a.b.kb=a.wa(h.a.b.kb)?h.a.b.kb:0;var g=function(){h.a.b.et=85;h.a.b.ep=h.a.b.kb;h.a.h()};b.c(document,"keyup",function(){h.a.b.kb++});b.c(window,"unload",function(){g()});setInterval(g,d.ub)}})();var B=h.m,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.event,a=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.a){var d=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},g=function(){var b;b=d("navigation");var g=d("request");b={netAll:g.start-b.start,netDns:d("domainLookup").value,netTcp:d("connect").value,srv:d("response").start-g.start,dom:performance.timing.domInteractive-performance.timing.fetchStart,loadEvent:d("loadEvent").end-
b.start};h.a.b.et=87;h.a.b.ep=a.stringify(b);h.a.h()};b.c(window,"load",function(){setTimeout(g,500)})}}catch(k){}})();
(function(){var b=mt.g,a=mt.lang,d=mt.event,g=mt.l;if("undefined"!==typeof h.a&&(c.med||(!b.da||7<b.rb)&&c.cvcc)){var k,n,l,p,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},e=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},v=function(b,d){var e={};e.n=k;e.t="clk";e.v=b;if(d){var f=d.getAttribute("href"),n=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,m=d.getAttribute("id")||"";l.test(f)?(e.sn="mediate",
e.snv=f):a.d(n,"String")&&l.test(n)&&(e.sn="wrap",e.snv=n);e.id=m}h.a.b.et=86;h.a.b.ep=g.stringify(e);h.a.h();for(e=+new Date;400>=+new Date-e;);};if(c.med)n="/zoosnet",k="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){n="/other-comm";k="other";l=c.cvcc.q||r;var m=c.cvcc.id||r;p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,n=b.length;k<n;k++)d=b[k],l!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),m?(d=d.getAttribute("id"),(l.test(e)||l.test(g)||m.test(d))&&
a.push(b[k])):(l.test(e)||l.test(g))&&a.push(b[k])):m!==r&&(d=d.getAttribute("id"),m.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof l){var q;n+=/\/$/.test(n)?"":"/";var x=function(b,d){if(q===d)return v(n+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return v(n+b+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(e(p,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&e(d,x)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,d=mt.event,g=mt.l;if("undefined"!==typeof h.a&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={Da:function(){for(var a=c.cvcf.length,g,p=0;p<a;p++)(g=b.Wa(decodeURIComponent(c.cvcf[p])))&&d.c(g,"click",k.Sa())},Sa:function(){return function(){h.a.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.a.b.ep=g.stringify(a);h.a.h()}}};b.zb(function(){k.Da()})}})();
(function(){var b=mt.event,a=mt.l;if(c.med&&"undefined"!==typeof h.a){var d=+new Date,g={n:"anti",sb:0,kb:0,clk:0},k=function(){h.a.b.et=86;h.a.b.ep=a.stringify(g);h.a.h()};b.c(document,"click",function(){g.clk++});b.c(document,"keyup",function(){g.kb=1});b.c(window,"scroll",function(){g.sb++});b.c(window,"unload",function(){g.t=+new Date-d;k()});b.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
