(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),l=(a(12),a(2)),i=a.n(l),o=a(5),u=a(1),m=a(6);var b=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),l=Object(u.a)(s,2),b=l[0],p=l[1],E=Object(n.useState)(0),d=Object(u.a)(E,2),f=d[0],j=d[1],v=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,p(a),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){v()}),[]),a)return c.a.createElement("section",{className:"section loading"},c.a.createElement("h1",null,"Loading ..."));var h=b[f],N=h.company,O=h.title,k=h.dates,y=h.duties;return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"Experience"),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"jobs-center"},c.a.createElement("div",{className:"btn-container"},b.map((function(e,t){return c.a.createElement("button",{key:e.id,onClick:function(){j(t)},className:"job-btn ".concat(t===f&&"active-btn")},e.company)}))),c.a.createElement("article",{className:"job-info"},c.a.createElement("h3",null,O),c.a.createElement("h4",null,N),c.a.createElement("p",{className:"job-date"},k),y.map((function(e,t){return c.a.createElement("div",{className:"job-desc",key:t},c.a.createElement(m.a,{className:"job-icon"}),c.a.createElement("p",null,e))})))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.9244f03c.chunk.js.map