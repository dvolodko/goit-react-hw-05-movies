"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[782],{5872:function(n,t,r){r.d(t,{Df:function(){return i},TP:function(){return s},oW:function(){return l},tx:function(){return f},zv:function(){return p}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),o="ed6f703d0e9f91008dbdcbc89334b381";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/trending/movie/day?api_key=".concat(o),n.abrupt("return",d(t));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"),n.abrupt("return",d(r));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.abrupt("return",d(r));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.abrupt("return",d(r));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&include_adult=true"),n.abrupt("return",d(r));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get(t);case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log("Request to ".concat(t," threw an error")),console.log("Error: ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},7782:function(n,t,r){r.r(t),r.d(t,{default:function(){return j}});var e,a,c,u,o,i=r(5861),s=r(9439),p=r(4687),f=r.n(p),l=r(2791),d=r(7689),v=r(5872),h=r(168),x=r(7402),m=r(1087),g=x.Z.main(e||(e=(0,h.Z)(["\n  padding-top: 96px;\n"]))),w=x.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  list-style: none;\n"]))),b=x.Z.li(c||(c=(0,h.Z)(["\n  flex-basis: calc((100% - 3 * 30px) / 4);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  text-align: center;\n"]))),Z=(0,x.Z)(m.rU)(u||(u=(0,h.Z)(["\n  text-decoration: none;\n  color: #000;\n  font-size: 18px;\n  font-weight: 600;\n"]))),k=x.Z.h1(o||(o=(0,h.Z)(["\n  margin-bottom: 30px;\n"]))),y=r(184),_=function(){var n=(0,l.useState)([]),t=(0,s.Z)(n,2),r=t[0],e=t[1],a=(0,d.TH)();return(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.Df)();case 2:t=n.sent,e(t.results.map((function(n){return{title:n.title,id:n.id,poster_path:n.poster_path}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,y.jsxs)(g,{children:[(0,y.jsx)(k,{children:"Trending today"}),(0,y.jsx)(w,{children:r.map((function(n){return(0,y.jsx)(b,{children:(0,y.jsxs)(Z,{to:"movies/".concat(n.id),state:{from:a},children:[(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title}),n.title]})},n.id)}))})]})};function j(){return(0,y.jsx)(_,{})}}}]);
//# sourceMappingURL=782.8d701c84.chunk.js.map