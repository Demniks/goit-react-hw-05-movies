"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{1616:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(168),u=e(6444).ZP.p(r||(r=(0,a.Z)(["\n  color: tomato;\n  font-size: 24px;\n"]))),c=e(184),s=function(){return(0,c.jsx)(u,{children:"Oops...Something went wrong, reload the page or try again later!"})}},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,u,c,s=e(5861),o=e(9439),i=e(7757),p=e.n(i),f=e(2791),h=e(7689),l=e(8565),v=e(1616),d=e(2981),x=e(168),m=e(6444),g=m.ZP.ul(r||(r=(0,x.Z)(["\n  margin: 8px;\n"]))),w=m.ZP.li(a||(a=(0,x.Z)(["\n  padding: 4px;\n  list-style: none;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);\n"]))),Z=m.ZP.h3(u||(u=(0,x.Z)(["\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 4px;\n"]))),b=m.ZP.h4(c||(c=(0,x.Z)(["\n  color: tomato;\n  font-weight: 500;\n  margin-top: 50px;\n  margin-left: 50px;\n"]))),k=e(184),y=function(){var n=(0,f.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(null),u=(0,o.Z)(a,2),c=u[0],i=u[1],x=(0,f.useState)(!1),m=(0,o.Z)(x,2),y=m[0],j=m[1],_=(0,h.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,(0,l.q5)(Number(_));case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),i(n.t0.massage);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[_]),(0,k.jsxs)(k.Fragment,{children:[y&&(0,k.jsx)(d.Z,{}),c&&(0,k.jsx)(v.Z,{}),e.length>0&&(0,k.jsx)(g,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,k.jsxs)(w,{children:[(0,k.jsxs)(Z,{children:["Author: ",e]}),(0,k.jsx)("p",{children:r})]},t)}))}),0===e.length&&!c&&(0,k.jsx)(b,{children:"We don't have any reviews for this movie"})]})}},8565:function(n,t,e){e.d(t,{NV:function(){return o},UF:function(){return s},eg:function(){return p},fh:function(){return i},q5:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"5893f70ab3467df3407a6935d158e774",language:"en-us"}}),s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day?page=1");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews?page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.64d27bdf.chunk.js.map