(()=>{"use strict";var n={917:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}",""]);const c=i},426:(n,r,e)=>{e.d(r,{Z:()=>f});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),c=e(667),s=e.n(c),d=new URL(e(915),e.b),l=new URL(e(262),e.b),p=i()(o()),u=s()(d),m=s()(l);p.push([n.id,"@font-face {\r\n    font-family: 'Langdon';\r\n    src: url("+u+");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'HappyEnding';\r\n    src: url("+m+");\r\n}\r\n\r\nbody {\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: white;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: black;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #7e7d7d;\r\n    border-radius: 10px;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 60px;\r\n    position: relative;\r\n    top: 30px;\r\n}\r\n\r\n.header div.nav-container {\r\n    display: flex;\r\n    width: 60%;\r\n    gap: 30px;\r\n    justify-content: center;\r\n}\r\n\r\ndiv.nav-container>.nav:hover {\r\n    transform: translateY(-10px);\r\n}\r\n\r\ndiv.nav-container>.nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.8em;\r\n    font-family: 'Langdon';\r\n    transform: translateY(0);\r\n    transition: transform 0.4s;\r\n}\r\n\r\ndiv.nav-container>p {\r\n    text-align: center;\r\n}\r\n\r\ndiv.nav-container>.nav {\r\n    height: 40px;\r\n    width: 150px;\r\n    align-self: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    /* border: 2px solid red; */\r\n}\r\n\r\ndiv#content {\r\n    display: grid;\r\n    grid-template: repeat(auto-fill, 1fr) / 1fr;\r\n    padding-top: 80px;\r\n}\r\n\r\ndiv#content>* {\r\n    font-family: 'HappyEnding';\r\n    margin: auto;\r\n}\r\n\r\ndiv.homepage-container {\r\n    background-color: rgba(110, 110, 110, 0.55);\r\n    width: 650px;\r\n    padding: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\ndiv.homepage-container .restaurant-name {\r\n    font-family: 'Langdon';\r\n    font-size: 4.5em;\r\n    text-shadow: 4px 4px 2px black;\r\n}\r\n\r\ndiv.homepage-container img.logo {\r\n    width: 400px;\r\n}\r\n\r\ndiv.homepage-container .restaurant-description {\r\n    font-size: 3.2em;\r\n}\r\n\r\n.restaurant-description #best{\r\n    text-decoration: underline;   \r\n}\r\n\r\n.restaurant-description .best-burgers-sentence{\r\n    font-size: 1.5em;\r\n    text-shadow: 4px 4px 2px rgb(0, 0, 0);\r\n}\r\n\r\n.restaurant-description p {\r\n    text-align: center;\r\n}\r\n\r\n.restaurant-description p.warning {\r\n    padding-top: 20px;\r\n    font-weight: 600;\r\n    text-shadow: 3px 3px 2px black;\r\n    color: #ea4949\r\n}\r\n\r\ndiv.homepage-container .opening-hours {\r\n    padding: 20px;\r\n}\r\n\r\n.opening-hours table {\r\n    text-align: center;\r\n    font-size: 2.5em;\r\n}\r\n\r\n.opening-hours table {\r\n    border-spacing: 0 100px;\r\n}\r\n\r\n.opening-hours table td {\r\n    padding: 7px 40px;\r\n}\r\n\r\n/* Menu */\r\ndiv.menu-container {\r\n    width: 650px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 100px;\r\n    background-color: rgba(110, 110, 110, 0.55);\r\n    padding: 50px;\r\n}\r\n\r\ndiv.item-container {\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 1fr;\r\n    margin: auto;\r\n    width: 600px;\r\n    text-align: center;\r\n    column-gap: 50px;\r\n}\r\n\r\ndiv.item-container .dish-description {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 2em;\r\n}\r\n\r\ndiv.item-container>img {\r\n    width: 300px;\r\n    border: 10px solid black;\r\n    box-shadow: inset 0px 0px 0px 5px black;\r\n}\r\n\r\n/* About Us */\r\ndiv.about-us-container {\r\n    background-color: rgba(110, 110, 110, 0.55);\r\n    width: 650px;\r\n    padding: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n    text-align: center;\r\n}\r\n\r\ndiv.title-container>p {\r\n    font-size: 5em;\r\n    text-shadow: 3px 3px 2px black;\r\n}\r\n\r\ndiv.desc-container {\r\n    width: 550px;\r\n    font-size: 2.5em;\r\n}\r\n\r\n/* animation for added elements */\r\ndiv#content>* {\r\n    -webkit-animation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;\r\n    animation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;\r\n    opacity: 0;\r\n    transform: rotateX(-90deg);\r\n    transform-origin: top center;\r\n}\r\n\r\n@keyframes show {\r\n    100% {\r\n        opacity: 1;\r\n        transform: none;\r\n    }\r\n}",""]);const f=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var f=o(m,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},915:(n,r,e)=>{n.exports=e.p+"assets/fonts/0d98b572f3cf14c635bc.otf"},262:(n,r,e)=>{n.exports=e.p+"assets/fonts/fbdfde41ee7004ca780b.ttf"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{const n=e.p+"assets/images/040e476f7d27bf4ac10f.png";function r(){document.getElementById("content").innerHTML="",document.querySelector("#content").appendChild(function(){const r=document.createElement("div");return r.className="homepage-container",r.appendChild(function(){const n=document.createElement("div");return n.className="restaurant-name",n.innerHTML="Zach's Burger Shack",n}()),r.appendChild(function(){const r=document.createElement("img");return r.className="logo",r.src=n,r.alt="restaurant logo",r}()),r.appendChild(function(){const n=document.createElement("div");n.className="restaurant-description";const r=document.createElement("p");r.className="best-burgers-sentence",r.innerHTML='The <span id="best">best</span> burgers in town!';const e=document.createElement("p");return e.className="warning",e.innerHTML="Warning: our burgers are highly addictive.",n.append(r,e),n}()),r.appendChild(function(){const n=document.createElement("div");return n.className="opening-hours",n.innerHTML="<table>\n<tbody>\n    <tr>\n        <td>Monday</td>\n        <td>09:00 - 17:00</td>\n    </tr>\n    <tr>\n        <td>Tuesday</td>\n        <td>09:00 - 17:00</td>\n    </tr>\n    <tr>\n        <td>Wednesday</td>\n        <td>09:00 - 17:00</td>\n    </tr>\n    <tr>\n        <td>Thursday</td>\n        <td>09:00 - 17:00</td>\n    </tr>\n    <tr>\n        <td>Friday</td>\n        <td>09:00 - 17:00</td>\n    </tr>\n    <tr>\n        <td>Saturday</td>\n        <td>13:00 - 17:00</td>\n    </tr>\n    <tr>\n        <td>Sunday</td>\n        <td>Closed, sorry</td>\n    </tr>\n</tbody>\n</table>",n}()),r}())}const t=e.p+"assets/images/f9254f9d5d581528348d.jpg",o=e.p+"assets/images/54d7ca3f4107c6610f42.jpg",a=e.p+"assets/images/d714b86d4fed0dcde241.jpg",i=(n,r)=>function(){const e=function(){const n=document.createElement("div");return n.className="item-container",n}();return e.appendChild(function(){const n=document.createElement("div");n.className="dish-description";const e=document.createElement("p");return e.innerHTML=r,n.appendChild(e),n}()),e.appendChild(function(){const r=document.createElement("img");return r.src=n,r}()),e}();const c=e.p+"assets/images/23062a982295605ede38.jpg";var s=e(379),d=e.n(s),l=e(795),p=e.n(l),u=e(569),m=e.n(u),f=e(565),g=e.n(f),h=e(216),b=e.n(h),v=e(589),y=e.n(v),x=e(426),w={};w.styleTagTransform=y(),w.setAttributes=g(),w.insert=m().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=b(),d()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;var k=e(917),E={};function T(n){n.style.borderBottom="2px solid white"}function C(...n){n.forEach((n=>{n.style.borderBottom="none"}))}E.styleTagTransform=y(),E.setAttributes=g(),E.insert=m().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=b(),d()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals,document.body.style.backgroundImage=`url(${c})`;const L=document.querySelector(".homepage"),M=document.querySelector(".menu"),S=document.querySelector(".about-us");L.addEventListener("click",(()=>{r(),T(L),C(M,S)})),M.addEventListener("click",(()=>{(function(){const n=i(t,"Classic burger and fries. <br> <br> It can never go wrong with this one. <br> <br> CHF 18.00"),r=i(o,"Burger deluxe with our finest Wagyu beef. <br> <br> Burger patty topped with cheddar cheese and truffles. <br> <br> CHF 28.00"),e=i(a,"A cheese mania! Perfect for cheese lovers (like me). <br> <br> CHF 22.00"),c=(()=>{const n=document.createElement("div");return n.className="menu-container",n})();c.append(n,r,e),document.getElementById("content").innerHTML="",document.getElementById("content").append(c)})(),T(M),C(L,S)})),S.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",document.getElementById("content").append(function(){const n=document.createElement("div");return n.appendChild(function(){const n=document.createElement("div");n.className="title-container";const r=document.createElement("p");return r.innerHTML="About Us",n.appendChild(r),n}()),n.appendChild(function(){const n=document.createElement("div");n.className="desc-container";const r=document.createElement("p");return r.innerHTML="Welcome to Zach's Burger Shack where we make every burger with sheer care and absolute passion. \n       <br><br>\n        We ensure you that every bite will be so delightful, that it makes you want to take another one.",n.appendChild(r),n}()),n.className="about-us-container",n}()),T(S),C(M,L)})),r(),T(L)})()})();