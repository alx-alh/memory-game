(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{48:function(e,t,a){e.exports=a(93)},53:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),o=a.n(c),s=a(9),i=r.a.createContext({}),d=r.a.createContext({}),u=d.Provider,l=i.Provider,m=(a(53),function(){var e=Object(n.useContext)(i),t=e.victory,a=e.turns;return r.a.createElement("header",null,r.a.createElement("h1",null,"Memory Game"),r.a.createElement("h3",null,"Turns: ",a),r.a.createElement("h2",{className:"victoryMessage".concat(t?"":" victoryMessage--hidden")},"You Win!"))}),f=a(15),v=a.n(f),b=a(32),h=a(47),C=a.n(h),p=a(1),y=a(14),j=function(e){return new Promise((function(t,a){e%2!==0&&a(new Error("must request even number of cards"));for(var n=e/2,r=[],c=0;c<n;c++)r[c]={label:c+1};t(r=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}return e}(r=(r=[].concat(Object(y.a)(r),Object(y.a)(r))).map((function(e){return Object(p.a)({},e)}))))}))},O=function(e,t){switch(t.type){case"setFirstCard":return Object(p.a)(Object(p.a)({},e),{},{firstCard:t.payload});case"setSecondCard":return Object(p.a)(Object(p.a)({},e),{},{secondCard:t.payload});case"matchSelected":return Object(p.a)(Object(p.a)({},e),{},{matchedCards:[].concat(Object(y.a)(e.matchedCards),[e.firstCard,e.secondCard]),firstCard:void 0,secondCard:void 0});case"resetSelection":return Object(p.a)(Object(p.a)({},e),{},{firstCard:void 0,secondCard:void 0});case"resetMatches":return Object(p.a)(Object(p.a)({},e),{},{firstCard:void 0,secondCard:void 0,matchedCards:[]});default:throw new Error("unrecognized action")}},E=(a(90),function(e){var t=e.label,a=e.index,n=e.selectCard,c=e.isSelected,o=e.isMatched,s=function(){!c&&n()};return r.a.createElement("div",{onClick:function(){s()},onKeyDown:function(e){13!==e.keyCode&&32!==e.keyCode||s()},className:"card".concat(c?" card--selected":"").concat(o?" card--matched":""),"aria-hidden":o,role:"button",tabIndex:"0","aria-label":"card-".concat(a+1)},r.a.createElement("div",{className:"card__inner"},r.a.createElement("div",{className:"card__back"},"\u2660"),r.a.createElement("div",{className:"card__front"},r.a.createElement("span",null,t))))}),w=(a(91),function(){var e={firstCard:void 0,secondCard:void 0,matchedCards:[]},t=Object(n.useContext)(i),a=t.turns,c=t.victory,o=Object(n.useContext)(d),u=o.setVictory,l=o.setTurns,m=Object(n.useReducer)(O,e),f=Object(s.a)(m,2),h=f[0],p=f[1],y=h.matchedCards,w=h.firstCard,g=h.secondCard,x=Object(n.useState)([]),S=Object(s.a)(x,2),k=S[0],M=S[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(24);case 2:t=e.sent,M(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){24!==y.length||c||u(!0)}),[y,c,u]);var N=function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({type:"resetMatches"}),M([]),u(!1),l(0),e.next=6,j(24);case 6:t=e.sent,M(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"resetContainer"},c&&r.a.createElement("button",{className:"btn".concat(c?" btn--hidden":""),disabled:!c,onClick:function(){return N()}},"Play Again")),r.a.createElement("div",{className:"cardGrid"},k.map((function(e,t){return r.a.createElement(E,Object.assign({},e,{index:t,key:C()(e),isMatched:y.includes(e),isSelected:w===e||g===e,selectCard:function(){return function(e){w!==e&&void 0===g&&(void 0===w?p({type:"setFirstCard",payload:e}):w.label===e.label?(l(a+1),p({type:"setSecondCard",payload:e}),setTimeout((function(){p({type:"matchSelected"})}),500)):(l(a+1),p({type:"setSecondCard",payload:e}),setTimeout((function(){p({type:"resetSelection"})}),500)))}(e)}}))}))))});a(92);var g=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),i=Object(s.a)(o,2),d=i[0],f=i[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u,{value:{setVictory:c,setTurns:f}},r.a.createElement(l,{value:{victory:a,turns:d}},r.a.createElement(m,null),r.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.3335f8ff.chunk.js.map