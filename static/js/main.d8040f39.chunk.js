(this.webpackJsonpah=this.webpackJsonpah||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(4),r=(n(7),n(5)),i=n.n(r),o=(n(12),n(13),n(1)),l=n.n(o),d=(n(14),n(15),n(0)),b=function(){return Object(d.jsx)("section",{id:"section__contact",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"content__find-me",children:[Object(d.jsx)("h4",{children:"Find me online"}),Object(d.jsxs)("div",{className:"find-me__social",children:[Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:"http://twitter.com/alihsn12r",children:" "}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",title:"facebook",href:"https://www.facebook.com/alihsn12r",children:" "}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",title:"linkedin",href:"https://www.linkedin.com/in/ali-hassan-b6b4b5198/",children:" "}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:"https://github.com/alihassan12r",children:" "})]}),Object(d.jsx)("h4",{children:"Send a message"}),Object(d.jsx)("div",{className:"find-me__social",children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",title:"sarahah",href:"https://www.sarahah.com/messages/send/user/ahss12",children:Object(d.jsx)("div",{className:"img-cnt"})})})]})})})},u=(n(17),function(){return Object(d.jsx)("section",{id:"section__aboutme",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"content__aboutme",children:[Object(d.jsx)("h1",{children:"Hi! I'm Ali \ud83d\udc4b"}),Object(d.jsxs)("p",{children:["I'm a Web Developer from Iraq living in baghdad.",Object(d.jsx)("br",{}),"A long time ago, I like programs like 3D Max, Photoshop, etc.",Object(d.jsx)("br",{}),Object(d.jsx)("b",{children:"Now"})," I'm diving into the sea of programming from years ago.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Good to know about me is that I love photography./videography \ud83d\udcf8 I love to travel anywhere, at the same time i like to stay at home.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]}),Object(d.jsxs)("div",{className:"content__graduated",children:[Object(d.jsx)("div",{className:"graduated__img"}),Object(d.jsxs)("p",{children:["I graduated from the University of Baghdad",Object(d.jsx)("br",{}),"With a B.Sc. in Computer Science"]})]})]})})}),j=function(){return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsx)("div",{id:"tab__aboutme",className:"tab",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{id:"tab__contact",className:"tab",children:Object(d.jsx)(b,{})})]})},h=(n(18),function(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{children:Object(d.jsx)("div",{className:"footer-content",children:Object(d.jsxs)("p",{className:"container",children:[e," \xa9 Ali Hassan"]})})})});n(19),n(20);function m(){return window.outerWidth<568}var f=null,v=function(){!function(){f&&clearTimeout(f);var e=document.documentElement;e.classList.add("transition"),f=setTimeout((function(){return e.classList.remove("transition")}),1e3)}(),document.documentElement.classList.toggle("dark")},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getHours();return e<=4||e>=18},O=function(){var e=null,t=null,n=null,c=null,a=!1,s=function(){t.classList.toggle("option_menu--active"),e.classList.toggle("options__btn--clicked"),m()&&c.classList.toggle("html--noscroll"),a=!a};return l.a.useEffect((function(){e=document.getElementById("btn-show-option"),t=document.querySelector(".option .option_menu"),n=document.getElementById("chk-dar"),c=document.documentElement,e.onclick=function(){return s()},n.onchange=function(){return v()},n.checked=x()}),[]),l.a.useEffect((function(){window.onresize=function(){m()&&a?c.classList.add("ah-content--noscroll"):(c.classList.remove("ah-content--noscroll"),a&&s())}}),[]),Object(d.jsx)("div",{className:"options-container",children:Object(d.jsxs)("div",{className:"option",children:[Object(d.jsx)("button",{type:"button",className:"btn options__btn options__btn--show-option",id:"btn-show-option",children:Object(d.jsx)("span",{})}),Object(d.jsxs)("div",{className:"option_menu",children:[Object(d.jsx)("div",{className:"option_title",children:"Dark mode"}),Object(d.jsx)("div",{className:"option_body",children:Object(d.jsx)("input",{type:"checkbox",className:"checkbox-input",id:"chk-dar"})})]})]})})},_=function(){var e=null,t="navbar__item--active",n=function(e,t){document.querySelectorAll(".".concat(t)).forEach((function(e){return e.classList.remove(t)})),e.classList.add(t)},c=function(){!function(){var t=e.offsetLeft,n=e.offsetWidth-4,c=document.querySelector(".navbar .navbar__hero-slider");Object.assign(c.style,{left:"".concat(t,"px"),width:"".concat(n,"px")})}(),function(){var c=e.parentElement;c.classList.contains(t)||n(c,t)}(),function(){var c=e,a=c.parentElement,s="#".concat(c.getAttribute("go-id"));a.classList.contains(t)&&n(document.querySelector(s),"tab--active")}()},a=function(){document.querySelectorAll(".navbar__menu .navbar__items .navbar__item button").forEach((function(t){t.onclick=function(t){return n=t.currentTarget,e=n,void c();var n}}))};return l.a.useEffect((function(){!function(){var n=document.querySelector(".".concat(t)),a=n&&n.querySelector("button");a&&(e=a,c())}(),a()}),[]),Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"navbar",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"navbar__img"}),Object(d.jsxs)("div",{className:"navbar__logo",children:[Object(d.jsx)("h2",{children:"Ali Hassan"}),Object(d.jsx)("p",{children:"Web Developer \ud83d\ude19"}),Object(d.jsx)("a",{title:"twitter",target:"_blank",rel:"noreferrer",href:"http://twitter.com/alihsn12r",children:"@alihsn12r"})]}),Object(d.jsxs)("div",{className:"navbar__menu",children:[Object(d.jsxs)("ul",{className:"navbar__items",children:[Object(d.jsx)("li",{className:"navbar__item navbar__item--active",children:Object(d.jsxs)("button",{className:"btn btn--link",type:"button","go-id":"tab__aboutme",children:[Object(d.jsx)("b",{children:"About"}),"\ud83e\udd13"]})}),Object(d.jsx)("li",{className:"navbar__item",children:Object(d.jsxs)("button",{className:"btn btn--link",type:"button","go-id":"tab__contact",children:[Object(d.jsx)("b",{children:"Contact"}),"\ud83d\ude4b\u200d\u2642\ufe0f"]})})]}),Object(d.jsx)("span",{className:"navbar__hero-slider"})]}),Object(d.jsx)("div",{className:"navbar__options",children:Object(d.jsx)(O,{})})]})})})},p=function(e){var t=e.onLoaded;return l.a.useEffect(t,[]),Object(d.jsxs)("div",{className:"ah-content",children:[Object(d.jsx)(_,{}),Object(d.jsx)(j,{}),Object(d.jsx)(h,{})]})},g=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){document.addEventListener("readystatechange",(function(){switch(document.readyState){case"loading":case"interactive":break;case"complete":e();break;default:console.log("def")}}))}));case 2:x()&&v();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){document.querySelector(".loading").classList.add("loading--close"),setTimeout(e,2e3)}));case 2:document.querySelector(".loading").remove();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();g().then((function(){return e=w,void i.a.render(Object(d.jsx)(p,{onLoaded:e}),document.getElementById("ah-root"));var e}))}],[[21,1,2]]]);
//# sourceMappingURL=main.d8040f39.chunk.js.map