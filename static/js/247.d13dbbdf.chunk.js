"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[247],{9613:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t.p+"static/media/error.42292aa12b6bc303ce99.gif",c=t(184),a=function(){return(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},4124:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(885),c=t(2791),a=t(1523),i=t(8931),o=t(6557),s=t(3394),u=t(9613),l=t(184),p=function(e){var n=e.comic,t=n.name,r=n.description,c=n.thumbnail,i=n.pageCount,o=n.language,s=n.price,u={objectFit:"cover"};return u={objectFit:"contain"},(0,l.jsxs)("div",{className:"single-comic",children:[(0,l.jsx)("img",{src:c,alt:t,className:"single-comic__img",style:u}),(0,l.jsxs)("div",{className:"single-comic__info",children:[(0,l.jsx)("h2",{className:"single-comic__name",children:"name"}),(0,l.jsx)("p",{className:"single-comic__descr",children:r}),(0,l.jsx)("p",{className:"single-comic__descr",children:i}),(0,l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",o]}),(0,l.jsx)("div",{className:"single-comic__price",children:s})]}),(0,l.jsx)(a.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},m=function(){var e=(0,c.useState)(null),n=(0,r.Z)(e,2),t=n[0],a=n[1],m=(0,o.Z)(),d=m.loading,f=m.error,h=m.getComic,g=m.clearError,v=(0,i.UO)().comicId;(0,c.useEffect)((function(){b()}),[v]);var b=function(){v&&(g(),h(v).then(x))},x=function(e){a(e)},j=f?(0,l.jsx)(u.Z,{}):null,w=d?(0,l.jsx)(s.Z,{}):null,k=d||f||!t?null:(0,l.jsx)(p,{comic:t});return(0,l.jsxs)(l.Fragment,{children:[j,w,k]})}},6557:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(5861),c=t(7757),a=t.n(c),i=t(1391),o=t.n(i),s=t(885),u=t(2791),l=function(){var e=(0,u.useState)(!1),n=(0,s.Z)(e,2),t=n[0],c=n[1],i=(0,u.useState)(null),o=(0,s.Z)(i,2),l=o[0],p=o[1],m=(0,u.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,i,o,s,u=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},c(!0),e.prev=4,e.next=7,fetch(n,{metod:t,body:r,heders:i});case 7:if((o=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(o.status));case 10:return e.next=12,o.json();case 12:return s=e.sent,c(!1),e.abrupt("return",s);case 17:throw e.prev=17,e.t0=e.catch(4),c(!1),p(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:t,error:l,request:m,clearError:(0,u.useCallback)((function(){return p(null)}),[])}},p=function(){var e=l(),n=e.loading,t=e.error,c=e.request,i=e.clearError,s="https://gateway.marvel.com:443/v1/public/",u=function(e){var n="a9dcaf209e3c49588cbeb95ff8a3d22f",t=(new Date).getTime(),r=t+"de082d9e54b29d6c0eeac4c444e874dd23358748"+n,c=o()(r),a=-1===e.indexOf("?")?"?":"&";return"".concat(a,"ts=").concat(t,"&apikey=").concat(n,"&hash=").concat(c)},p=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r,i,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:210,t="characters?orderBy=name&limit=".concat(9,"&offset=").concat(n),r=u(t),e.next=5,c("".concat(s).concat(t).concat(r));case 5:return i=e.sent,e.abrupt("return",i.data.results.map(h));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="characters/".concat(n),r=u(t),e.next=4,c("".concat(s).concat(t).concat(r));case 4:return i=e.sent,e.abrupt("return",h(i.data.results[0]));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r,i,o,l=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:0,t=l.length>1&&void 0!==l[1]?l[1]:8,r="comics?limit=".concat(t,"&offset=").concat(n),i=u(r),e.next=6,c("".concat(s).concat(r).concat(i));case 6:return o=e.sent,e.abrupt("return",o.data.results.map(g));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="comics/".concat(n),r=u(t),e.next=4,c("".concat(s).concat(t).concat(r));case 4:return i=e.sent,e.abrupt("return",g(i.data.results[0]));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},g=function(e,n){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{loading:n,error:t,getAllCharacters:p,getCharacter:m,clearError:i,getAllComics:d,getComic:f}}}}]);
//# sourceMappingURL=247.d13dbbdf.chunk.js.map