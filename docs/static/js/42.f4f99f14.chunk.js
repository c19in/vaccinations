(this.webpackJsonpvaccinations=this.webpackJsonpvaccinations||[]).push([[42],{261:function(e,t,a){"use strict";a.r(t);var n=a(45),c=a(11),r=a(24),i=a(92),s=a.n(i),o=a(138),l=a(118),u=a(141),b=a(219),j=a(116),d=a(267),O=a(139),h=a(247),f=a(262),m=a(278),v=a(214),x=a(249),p=(a(100),a(67)),g=a(55),k=a(82),y=a(90),M=a.n(y),N=a(2),w=a(54),E=a.n(w),C=a(113),S=a(19),B=0,D=35,H=20,I=25;function P(e){var t=e.timeseries,a=e.dates,i=e.currentBrushSelection,y=e.endDate,M=e.lookback,w=e.setBrushSelectionEnd,P=e.setLookback,z=e.animationIndex,A=Object(N.useRef)(),J=Object(C.a)(),R=Object(n.a)(J,2),T=R[0],U=R[1],X=U.width,L=U.height,W=null!==M?Object(o.a)([Object(p.a)(Object(g.a)(Object(r.k)(a[0]),M),{representation:"date"}),y]):y,Y=Object(N.useMemo)((function(){var e=a.length,t=X-D;return Object(d.a)().clamp(!0).domain([Object(r.k)(a[0]||y),Object(r.k)(a[e-1]||y)]).range([I,t])}),[X,y,a]);Object(N.useEffect)((function(){if(X&&L){var e=L-H,i=Object(m.a)().keys(c.c).value((function(e,a){return Math.max(0,Object(r.i)(t[e],"delta",a))}))(a),s=Object(O.a)().clamp(!0).domain([0,Object(l.a)(i[i.length-1],(function(e){return 1.2*Object(n.a)(e,2)[1]}))]).range([e,B]),o=Object(h.a)(A.current),b=o.transition().duration(c.d);o.select(".x-axis").attr("pointer-events","none").style("transform","translate3d(0, ".concat(e,"px, 0)")).transition(b).call((function(e){return e.attr("class","x-axis").call(Object(u.a)(Y).ticks(function(e){return e<480?4:6}(X)))}));var d=Object(v.a)().curve(x.a).x((function(e){return Y(Object(r.k)(e.data))})).y0((function(e){return s(e[0])})).y1((function(e){return s(e[1])}));o.select(".trend-areas").selectAll(".trend-area").data(i).join((function(e){return e.append("path").attr("class","trend-area").attr("fill",(function(e){var t=e.key;return c.z[t].color})).attr("fill-opacity",.4).attr("stroke",(function(e){var t=e.key;return c.z[t].color})).attr("d",d).attr("pointer-events","none")}),(function(e){return e.transition(b).attrTween("d",(function(e){var t=Object(h.a)(this).attr("d"),a=d(e);return Object(j.a)(t,a)})).selection()}))}}),[a,X,L,Y,t]);var _=i.map((function(e){return Y(Object(r.k)(e))})),q=Object(N.useMemo)((function(){if(X&&L){var e=X-D,t=L-H;return Object(b.b)().extent([[I,B],[e,t]]).handleSize(20)}}),[X,L]),F=Object(N.useCallback)((function(e){var t=e.sourceEvent,a=e.selection;if(t){var c=a.map(Y.invert),r=Object(n.a)(c,2),i=r[0],s=r[1];E.a.unstable_batchedUpdates((function(){w(Object(p.a)(s,{representation:"date"})),P(Object(k.a)(s,i))}))}}),[Y,w,P]),G=Object(N.useCallback)((function(e){var t=Object(h.a)(A.current),a=Object(b.a)(t.select(".brush").node());if(a){var c=a[1]-a[0],r=Object(f.a)(e),i=Object(n.a)(r,1),s=Object(n.a)(i[0],1)[0],o=s-c/2,l=s+c/2,u=Y.range(),j=Object(n.a)(u,2),d=j[0],O=j[1];t.select(".brush").call(q.move,l>O?[O-c,O]:o<d?[d,d+c]:[o,l])}}),[q,Y]),K=Object(N.useCallback)((function(e){var t=e.sourceEvent,a=e.selection;if(t&&a){var n=a.map(Y.invert).map((function(e){return Object(p.a)(e,{representation:"date"})}));Object(h.a)(A.current).select(".brush").call(q.move,n.map((function(e){return Y(Object(r.k)(e))}))).call((function(e){return e.select(".overlay").attr("cursor","pointer")}))}}),[q,Y]);Object(N.useEffect)((function(){q&&(q.on("start brush",F).on("end",K),Object(h.a)(A.current).select(".brush").call(q).call((function(e){return e.select(".overlay").attr("cursor","pointer").datum({type:"selection"}).on("mousedown touchstart",G)})))}),[q,F,K,G]),Object(N.useEffect)((function(){q&&Object(h.a)(A.current).select(".brush").call(q.move,_)}),[q,_]);return Object(S.jsx)("div",{className:"Timeseries",children:Object(S.jsx)("div",{className:s()("svg-parent is-brush fadeInUp"),ref:T,onWheel:function(e){e.deltaX&&w(Object(l.a)([W,a[Math.max(0,Math.min(a.length-1,a.indexOf(i[1])+10*Math.sign(e.deltaX)))]]))},style:{animationDelay:"".concat(250*z,"ms")},children:Object(S.jsxs)("svg",{ref:A,preserveAspectRatio:"xMidYMid meet",children:[Object(S.jsxs)("defs",{children:[Object(S.jsx)("clipPath",{id:"clipPath",children:Object(S.jsx)("rect",{x:0,y:"".concat(B),width:X,height:"".concat(Math.max(0,L-H))})}),Object(S.jsxs)("mask",{id:"mask",children:[Object(S.jsx)("rect",{x:0,y:"".concat(B),width:X,height:"".concat(Math.max(0,L-H)),fill:"hsl(0, 0%, 40%)"}),Object(S.jsx)("use",{href:"#selection",fill:"white"})]})]}),Object(S.jsx)("g",{className:"brush",clipPath:"url(#clipPath)",children:Object(S.jsxs)("g",{mask:"url(#mask)",children:[Object(S.jsx)("rect",{className:"overlay"}),Object(S.jsx)("g",{className:"trend-areas"}),Object(S.jsx)("rect",{className:"selection",id:"selection"})]})}),Object(S.jsx)("g",{className:"x-axis"})]})})})}var z=function(e,t){return!!M()(t.currentBrushSelection,e.currentBrushSelection)&&(!!M()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!M()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!M()(t.endDate,e.endDate)&&(!!M()(t.lookback,e.lookback)&&(!!M()(t.animationIndex,e.animationIndex)&&!!M()(t.dates,e.dates))))))};t.default=Object(N.memo)(P,z)}}]);
//# sourceMappingURL=42.f4f99f14.chunk.js.map