"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,u,c,i=e(5861),s=e(9439),o=e(7757),p=e.n(o),f=e(2791),h=e(7689),l=e(2981),d=e(1616),x=e(8565),g=e(168),v=e(6444),m=v.ZP.ul(r||(r=(0,g.Z)(["\n  margin-right: 32px;\n  display: flex;\n  justify-content: space-around;\n  gap: 16px;\n  flex-wrap: wrap;\n"]))),w=v.ZP.li(a||(a=(0,g.Z)(["\n  text-align: center;\n  padding: 4px;\n  width: 140px;\n  list-style: none;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);\n"]))),Z=v.ZP.h3(u||(u=(0,g.Z)(["\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 4px;\n"]))),b=v.ZP.h4(c||(c=(0,g.Z)(["\n  color: tomato;\n  font-weight: 500;\n  margin-top: 50px;\n  margin-left: 50px;\n"]))),k=e(184),y=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),u=(0,s.Z)(a,2),c=u[0],o=u[1],g=(0,f.useState)(null),v=(0,s.Z)(g,2),y=v[0],j=v[1],_=(0,h.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,x.eg)(Number(_));case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0.massage);case 11:return n.prev=11,o(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[_]),(0,k.jsxs)("div",{children:[c&&(0,k.jsx)(l.Z,{}),y&&(0,k.jsx)(d.Z,{}),e.length>0&&!y&&(0,k.jsx)(m,{children:e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,k.jsxs)(w,{children:[(0,k.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500"+r:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",alt:e,width:120,height:148}),(0,k.jsx)(Z,{children:e}),(0,k.jsxs)("p",{children:["Character: ",a]})]},t)}))}),0===e.length&&!y&&(0,k.jsx)(b,{children:"Information about the actors of this film is not available."})]})}},1616:function(n,t,e){e.d(t,{Z:function(){return i}});var r,a=e(168),u=e(6444).ZP.p(r||(r=(0,a.Z)(["\n  color: tomato;\n  font-size: 24px;\n"]))),c=e(184),i=function(){return(0,c.jsx)(u,{children:"Oops...Something went wrong, reload the page or try again later!"})}},8565:function(n,t,e){e.d(t,{NV:function(){return s},UF:function(){return i},eg:function(){return p},fh:function(){return o},q5:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"5893f70ab3467df3407a6935d158e774",language:"en-us"}}),i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day?page=1");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews?page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.7945ec6f.chunk.js.map