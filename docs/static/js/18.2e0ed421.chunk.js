(this.webpackJsonpvaccinations=this.webpackJsonpvaccinations||[]).push([[18,44],{113:function(t,n,r){"use strict";var e=r(2),a=r(90),i=a.a?e.useLayoutEffect:e.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=a.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(e.useState)(null),n=t[0],r=t[1],a=Object(e.useState)(o),c=a[0],u=a[1],s=Object(e.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,r=n.x,e=n.y,a=n.width,i=n.height,o=n.top,c=n.left,s=n.bottom,f=n.right;u({x:r,y:e,width:a,height:i,top:o,left:c,bottom:s,right:f})}}))}),[]);return i((function(){if(n)return s.observe(n),function(){s.disconnect()}}),[n]),[r,c]}:function(){return[a.b,o]}},140:function(t,n,r){"use strict";r.d(n,"b",(function(){return l})),r.d(n,"a",(function(){return d}));var e=function(t){return t},a=1e-6;function i(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function c(t){return function(n){return+t(n)}}function u(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}function s(){return!this.__axis}function f(t,n){var r=[],f=null,l=null,d=6,h=6,b=3,g="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,m=1===t||4===t?-1:1,v=4===t||2===t?"x":"y",p=1===t||3===t?i:o;function O(i){var o=null==f?n.ticks?n.ticks.apply(n,r):n.domain():f,O=null==l?n.tickFormat?n.tickFormat.apply(n,r):e:l,j=Math.max(d,0)+b,y=n.range(),x=+y[0]+g,M=+y[y.length-1]+g,k=(n.bandwidth?u:c)(n.copy(),g),w=i.selection?i.selection():i,A=w.selectAll(".domain").data([null]),S=w.selectAll(".tick").data(o,n).order(),R=S.exit(),z=S.enter().append("g").attr("class","tick"),C=S.select("line"),F=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(z),C=C.merge(z.append("line").attr("stroke","currentColor").attr(v+"2",m*d)),F=F.merge(z.append("text").attr("fill","currentColor").attr(v,m*j).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),i!==w&&(A=A.transition(i),S=S.transition(i),C=C.transition(i),F=F.transition(i),R=R.transition(i).attr("opacity",a).attr("transform",(function(t){return isFinite(t=k(t))?p(t+g):this.getAttribute("transform")})),z.attr("opacity",a).attr("transform",(function(t){var n=this.parentNode.__axis;return p((n&&isFinite(n=n(t))?n:k(t))+g)}))),R.remove(),A.attr("d",4===t||2===t?h?"M"+m*h+","+x+"H"+g+"V"+M+"H"+m*h:"M"+g+","+x+"V"+M:h?"M"+x+","+m*h+"V"+g+"H"+M+"V"+m*h:"M"+x+","+g+"H"+M),S.attr("opacity",1).attr("transform",(function(t){return p(k(t)+g)})),C.attr(v+"2",m*d),F.attr(v,m*j).text(O),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=k}))}return O.scale=function(t){return arguments.length?(n=t,O):n},O.ticks=function(){return r=Array.from(arguments),O},O.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),O):r.slice()},O.tickValues=function(t){return arguments.length?(f=null==t?null:Array.from(t),O):f&&f.slice()},O.tickFormat=function(t){return arguments.length?(l=t,O):l},O.tickSize=function(t){return arguments.length?(d=h=+t,O):d},O.tickSizeInner=function(t){return arguments.length?(d=+t,O):d},O.tickSizeOuter=function(t){return arguments.length?(h=+t,O):h},O.tickPadding=function(t){return arguments.length?(b=+t,O):b},O.offset=function(t){return arguments.length?(g=+t,O):g},O}function l(t){return f(2,t)}function d(t){return f(3,t)}},163:function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r(25);function a(t,n){var r,a;if(void 0===n){var i,o=Object(e.a)(t);try{for(o.s();!(i=o.n()).done;){var c=i.value;null!=c&&(void 0===r?c>=c&&(r=a=c):(r>c&&(r=c),a<c&&(a=c)))}}catch(d){o.e(d)}finally{o.f()}}else{var u,s=-1,f=Object(e.a)(t);try{for(f.s();!(u=f.n()).done;){var l=u.value;null!=(l=n(l,++s,t))&&(void 0===r?l>=l&&(r=a=l):(r>l&&(r=l),a<l&&(a=l)))}}catch(d){f.e(d)}finally{f.f()}}return[r,a]}},205:function(t,n,r){"use strict";r.r(n);var e=r(45),a=r(11),i=r(24),o=r(163),c=r(140),u=r(206),s=r(138),f=r(244),l=(r(101),r(91)),d=r.n(l),h=r(2),b=r(113),g=r(19),m=50,v=0,p=50,O=0;function j(t){var n=t.timeseries,r=t.statistic,l=t.lookback,d=Object(h.useRef)(),j=Object(b.a)(),y=Object(e.a)(j,2),M=y[0],k=y[1],w=k.width,A=k.height,S=Object.keys(n||{}).filter((function(t){return t<=Object(i.h)()})).slice(-l),R=Object(h.useCallback)((function(t,r){return Object(i.i)(null===n||void 0===n?void 0:n[t],"delta",r)}),[n]);return Object(h.useEffect)((function(){if(w){var t=Object(f.a)(d.current),n=w-v,l=A-p,h=Object(u.a)().domain(S).range([O,n]).paddingInner(w/1e3),b=Object(o.a)(S,(function(t){return R(t,r)})),g=Object(e.a)(b,2),j=g[0],y=g[1],M=Object(s.a)().domain([Math.min(0,j||0),Math.max(1,y||0)]).range([l,m]),k=Object(c.a)(h).tickSize(0).tickFormat((function(t){return Object(i.c)(t,"dd MMM")})),z=t.transition().duration(a.d),C=a.z[r];t.select(".x-axis").transition(z).style("transform","translate3d(0, ".concat(M(0),"px, 0)")).call(k).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,n){return R(t,r)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",C.color),t.selectAll(".bar").data(S).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return x(h(t),M(0),h.bandwidth(),0,5)}))})).transition(z).attr("d",(function(t){return x(h(t),M(0),h.bandwidth(),M(0)-M(R(t,r)),5)})).attr("fill",(function(t,n){return n<S.length-1?C.color+"90":C.color}));var F=t.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t){return Object(i.f)(R(t,r),(null===C||void 0===C?void 0:C.showDelta)||(null===C||void 0===C?void 0:C.nonLinear)?C.format:"short")}));F.transition(z).attr("fill",C.color).attr("y",(function(t){var n=R(t,r);return M(n)+(n<0?15:-6)})),F.append("tspan").attr("dy",(function(t){return"".concat(R(t,r)<0?1.2:-1.2,"em")})).attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t,n){if(0===n)return"";var e=R(S[n-1],r);if(!e)return"";var a=R(t,r)-e;return"".concat(a>0?"+":"").concat(Object(i.f)(100*a/Math.abs(e),"%"))})).transition(z).attr("fill",C.color+"90")}}),[S,A,r,w,R]),Object(g.jsx)("div",{className:"DeltaBarGraph",ref:M,children:Object(g.jsxs)("svg",{ref:d,width:w,height:250,viewBox:"0 0 ".concat(w," ").concat(A),preserveAspectRatio:"xMidYMid meet",children:[Object(g.jsx)("g",{className:"x-axis"}),Object(g.jsx)("g",{className:"y-axis"})]})})}var y=function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!d()(t.stateCode,n.stateCode)&&(!!d()(t.lookback,n.lookback)&&!!d()(t.statistic,n.statistic))))};function x(t,n,r,e,a){return a=Math.sign(e)*Math.min(Math.abs(e),a),["M ".concat(t," ").concat(n),"v ".concat(-e+a),"q 0 ".concat(-a," ").concat(Math.abs(a)," ").concat(-a),"h ".concat(r-2*Math.abs(a)),"q ".concat(Math.abs(a)," 0 ").concat(Math.abs(a)," ").concat(a),"v ".concat(e-a),"Z"].join(" ")}n.default=Object(h.memo)(j,y)},206:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r(45),a=r(207),i=r(46),o=r(69);function c(){var t,n,r=Object(o.a)().unknown(void 0),u=r.domain,s=r.range,f=0,l=1,d=!1,h=0,b=0,g=.5;function m(){var r=u().length,e=l<f,i=e?l:f,o=e?f:l;t=(o-i)/Math.max(1,r-h+2*b),d&&(t=Math.floor(t)),i+=(o-i-t*(r-h))*g,n=t*(1-h),d&&(i=Math.round(i),n=Math.round(n));var c=Object(a.a)(r).map((function(n){return i+t*n}));return s(e?c.reverse():c)}return delete r.unknown,r.domain=function(t){return arguments.length?(u(t),m()):u()},r.range=function(t){var n,r;return arguments.length?(n=t,r=Object(e.a)(n,2),f=r[0],l=r[1],f=+f,l=+l,m()):[f,l]},r.rangeRound=function(t){var n,r;return n=t,r=Object(e.a)(n,2),f=r[0],l=r[1],f=+f,l=+l,d=!0,m()},r.bandwidth=function(){return n},r.step=function(){return t},r.round=function(t){return arguments.length?(d=!!t,m()):d},r.padding=function(t){return arguments.length?(h=Math.min(1,b=+t),m()):h},r.paddingInner=function(t){return arguments.length?(h=Math.min(1,t),m()):h},r.paddingOuter=function(t){return arguments.length?(b=+t,m()):b},r.align=function(t){return arguments.length?(g=Math.max(0,Math.min(1,t)),m()):g},r.copy=function(){return c(u(),[f,l]).round(d).paddingInner(h).paddingOuter(b).align(g)},i.b.apply(m(),arguments)}},207:function(t,n,r){"use strict";function e(t,n,r){t=+t,n=+n,r=(a=arguments.length)<2?(n=t,t=0,1):a<3?1:+r;for(var e=-1,a=0|Math.max(0,Math.ceil((n-t)/r)),i=new Array(a);++e<a;)i[e]=t+e*r;return i}r.d(n,"a",(function(){return e}))},91:function(t,n,r){"use strict";t.exports=function t(n,r){if(n===r)return!0;if(n&&r&&"object"==typeof n&&"object"==typeof r){if(n.constructor!==r.constructor)return!1;var e,a,i;if(Array.isArray(n)){if((e=n.length)!=r.length)return!1;for(a=e;0!==a--;)if(!t(n[a],r[a]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if((e=(i=Object.keys(n)).length)!==Object.keys(r).length)return!1;for(a=e;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=e;0!==a--;){var o=i[a];if(!t(n[o],r[o]))return!1}return!0}return n!==n&&r!==r}}}]);
//# sourceMappingURL=18.2e0ed421.chunk.js.map