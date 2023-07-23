var or=Object.defineProperty;var ir=(t,e,r)=>e in t?or(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Ye=(t,e,r)=>(ir(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function R(){}function Dt(t){return t()}function gt(){return Object.create(null)}function $e(t){t.forEach(Dt)}function Rt(t){return typeof t=="function"}function He(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ar(t){return Object.keys(t).length===0}function F(t,e){t.appendChild(e)}function V(t,e,r){t.insertBefore(e,r||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function Bt(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function D(t){return document.createElement(t)}function De(t){return document.createTextNode(t)}function le(){return De(" ")}function sr(){return De("")}function T(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function lr(t){return Array.from(t.childNodes)}function yt(t,e){e=""+e,t.data!==e&&(t.data=e)}let we;function ge(t){we=t}function Mt(){if(!we)throw new Error("Function called outside component initialization");return we}function Nt(t){Mt().$$.on_mount.push(t)}function fr(t){Mt().$$.on_destroy.push(t)}const se=[],bt=[];let fe=[];const wt=[],cr=Promise.resolve();let Ke=!1;function ur(){Ke||(Ke=!0,cr.then(Ht))}function Ge(t){fe.push(t)}const ze=new Set;let ae=0;function Ht(){if(ae!==0)return;const t=we;do{try{for(;ae<se.length;){const e=se[ae];ae++,ge(e),pr(e.$$)}}catch(e){throw se.length=0,ae=0,e}for(ge(null),se.length=0,ae=0;bt.length;)bt.pop()();for(let e=0;e<fe.length;e+=1){const r=fe[e];ze.has(r)||(ze.add(r),r())}fe.length=0}while(se.length);for(;wt.length;)wt.pop()();Ke=!1,ze.clear(),ge(t)}function pr(t){if(t.fragment!==null){t.update(),$e(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ge)}}function dr(t){const e=[],r=[];fe.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),fe=e}const ke=new Set;let te;function Wt(){te={r:0,c:[],p:te}}function It(){te.r||$e(te.c),te=te.p}function U(t,e){t&&t.i&&(ke.delete(t),t.i(e))}function ne(t,e,r,n){if(t&&t.o){if(ke.has(t))return;ke.add(t),te.c.push(()=>{ke.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function Re(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Je(t){t&&t.c()}function Be(t,e,r){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,r),Ge(()=>{const i=t.$$.on_mount.map(Dt).filter(Rt);t.$$.on_destroy?t.$$.on_destroy.push(...i):$e(i),t.$$.on_mount=[]}),o.forEach(Ge)}function Me(t,e){const r=t.$$;r.fragment!==null&&(dr(r.after_update),$e(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function vr(t,e){t.$$.dirty[0]===-1&&(se.push(t),ur(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function We(t,e,r,n,o,i,a,l=[-1]){const s=we;ge(t);const f=t.$$={fragment:null,ctx:[],props:i,update:R,not_equal:o,bound:gt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:gt(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};a&&a(f.root);let c=!1;if(f.ctx=r?r(t,e.props||{},(u,d,...p)=>{const v=p.length?p[0]:d;return f.ctx&&o(f.ctx[u],f.ctx[u]=v)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](v),c&&vr(t,u)),d}):[],f.update(),c=!0,$e(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const u=lr(e.target);f.fragment&&f.fragment.l(u),u.forEach(B)}else f.fragment&&f.fragment.c();e.intro&&U(t.$$.fragment),Be(t,e.target,e.anchor),Ht()}ge(s)}class Ie{constructor(){Ye(this,"$$");Ye(this,"$$set")}$destroy(){Me(this,1),this.$destroy=R}$on(e,r){if(!Rt(r))return R;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!ar(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hr="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hr);var S="top",N="bottom",H="right",j="left",tt="auto",Ee=[S,N,H,j],ce="start",xe="end",mr="clippingParents",Vt="viewport",me="popper",gr="reference",xt=Ee.reduce(function(t,e){return t.concat([e+"-"+ce,e+"-"+xe])},[]),Ft=[].concat(Ee,[tt]).reduce(function(t,e){return t.concat([e,e+"-"+ce,e+"-"+xe])},[]),yr="beforeRead",br="read",wr="afterRead",xr="beforeMain",Or="main",$r="afterMain",Er="beforeWrite",_r="write",Ar="afterWrite",Tr=[yr,br,wr,xr,Or,$r,Er,_r,Ar];function X(t){return t?(t.nodeName||"").toLowerCase():null}function C(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function oe(t){var e=C(t).Element;return t instanceof e||t instanceof Element}function M(t){var e=C(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function rt(t){if(typeof ShadowRoot>"u")return!1;var e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Lr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},i=e.elements[r];!M(i)||!X(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(a){var l=o[a];l===!1?i.removeAttribute(a):i.setAttribute(a,l===!0?"":l)}))})}function Pr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],i=e.attributes[n]||{},a=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),l=a.reduce(function(s,f){return s[f]="",s},{});!M(o)||!X(o)||(Object.assign(o.style,l),Object.keys(i).forEach(function(s){o.removeAttribute(s)}))})}}const Sr={name:"applyStyles",enabled:!0,phase:"write",fn:Lr,effect:Pr,requires:["computeStyles"]};function q(t){return t.split("-")[0]}var re=Math.max,Ne=Math.min,ue=Math.round;function Qe(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function qt(){return!/^((?!chrome|android).)*safari/i.test(Qe())}function pe(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,i=1;e&&M(t)&&(o=t.offsetWidth>0&&ue(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&ue(n.height)/t.offsetHeight||1);var a=oe(t)?C(t):window,l=a.visualViewport,s=!qt()&&r,f=(n.left+(s&&l?l.offsetLeft:0))/o,c=(n.top+(s&&l?l.offsetTop:0))/i,u=n.width/o,d=n.height/i;return{width:u,height:d,top:c,right:f+u,bottom:c+d,left:f,x:f,y:c}}function nt(t){var e=pe(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function Xt(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&rt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Y(t){return C(t).getComputedStyle(t)}function jr(t){return["table","td","th"].indexOf(X(t))>=0}function K(t){return((oe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ve(t){return X(t)==="html"?t:t.assignedSlot||t.parentNode||(rt(t)?t.host:null)||K(t)}function Ot(t){return!M(t)||Y(t).position==="fixed"?null:t.offsetParent}function kr(t){var e=/firefox/i.test(Qe()),r=/Trident/i.test(Qe());if(r&&M(t)){var n=Y(t);if(n.position==="fixed")return null}var o=Ve(t);for(rt(o)&&(o=o.host);M(o)&&["html","body"].indexOf(X(o))<0;){var i=Y(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function _e(t){for(var e=C(t),r=Ot(t);r&&jr(r)&&Y(r).position==="static";)r=Ot(r);return r&&(X(r)==="html"||X(r)==="body"&&Y(r).position==="static")?e:r||kr(t)||e}function ot(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ye(t,e,r){return re(t,Ne(e,r))}function Cr(t,e,r){var n=ye(t,e,r);return n>r?r:n}function Ut(){return{top:0,right:0,bottom:0,left:0}}function Yt(t){return Object.assign({},Ut(),t)}function zt(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Dr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Yt(typeof e!="number"?e:zt(e,Ee))};function Rr(t){var e,r=t.state,n=t.name,o=t.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,l=q(r.placement),s=ot(l),f=[j,H].indexOf(l)>=0,c=f?"height":"width";if(!(!i||!a)){var u=Dr(o.padding,r),d=nt(i),p=s==="y"?S:j,v=s==="y"?N:H,h=r.rects.reference[c]+r.rects.reference[s]-a[s]-r.rects.popper[c],g=a[s]-r.rects.reference[s],w=_e(i),O=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,$=h/2-g/2,m=u[p],y=O-d[c]-u[v],b=O/2-d[c]/2+$,x=ye(m,b,y),A=s;r.modifiersData[n]=(e={},e[A]=x,e.centerOffset=x-b,e)}}function Br(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||Xt(e.elements.popper,o)&&(e.elements.arrow=o))}const Mr={name:"arrow",enabled:!0,phase:"main",fn:Rr,effect:Br,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(t){return t.split("-")[1]}var Nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Hr(t,e){var r=t.x,n=t.y,o=e.devicePixelRatio||1;return{x:ue(r*o)/o||0,y:ue(n*o)/o||0}}function $t(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,a=t.offsets,l=t.position,s=t.gpuAcceleration,f=t.adaptive,c=t.roundOffsets,u=t.isFixed,d=a.x,p=d===void 0?0:d,v=a.y,h=v===void 0?0:v,g=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var w=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),$=j,m=S,y=window;if(f){var b=_e(r),x="clientHeight",A="clientWidth";if(b===C(r)&&(b=K(r),Y(b).position!=="static"&&l==="absolute"&&(x="scrollHeight",A="scrollWidth")),b=b,o===S||(o===j||o===H)&&i===xe){m=N;var _=u&&b===y&&y.visualViewport?y.visualViewport.height:b[x];h-=_-n.height,h*=s?1:-1}if(o===j||(o===S||o===N)&&i===xe){$=H;var E=u&&b===y&&y.visualViewport?y.visualViewport.width:b[A];p-=E-n.width,p*=s?1:-1}}var L=Object.assign({position:l},f&&Nr),W=c===!0?Hr({x:p,y:h},C(r)):{x:p,y:h};if(p=W.x,h=W.y,s){var P;return Object.assign({},L,(P={},P[m]=O?"0":"",P[$]=w?"0":"",P.transform=(y.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",P))}return Object.assign({},L,(e={},e[m]=O?h+"px":"",e[$]=w?p+"px":"",e.transform="",e))}function Wr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,a=i===void 0?!0:i,l=r.roundOffsets,s=l===void 0?!0:l,f={placement:q(e.placement),variation:de(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,$t(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,$t(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ir={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Wr,data:{}};var je={passive:!0};function Vr(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=o===void 0?!0:o,a=n.resize,l=a===void 0?!0:a,s=C(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&f.forEach(function(c){c.addEventListener("scroll",r.update,je)}),l&&s.addEventListener("resize",r.update,je),function(){i&&f.forEach(function(c){c.removeEventListener("scroll",r.update,je)}),l&&s.removeEventListener("resize",r.update,je)}}const Fr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vr,data:{}};var qr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ce(t){return t.replace(/left|right|bottom|top/g,function(e){return qr[e]})}var Xr={start:"end",end:"start"};function Et(t){return t.replace(/start|end/g,function(e){return Xr[e]})}function it(t){var e=C(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function at(t){return pe(K(t)).left+it(t).scrollLeft}function Ur(t,e){var r=C(t),n=K(t),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;var f=qt();(f||!f&&e==="fixed")&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l+at(t),y:s}}function Yr(t){var e,r=K(t),n=it(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=re(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=re(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-n.scrollLeft+at(t),s=-n.scrollTop;return Y(o||r).direction==="rtl"&&(l+=re(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:l,y:s}}function st(t){var e=Y(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Kt(t){return["html","body","#document"].indexOf(X(t))>=0?t.ownerDocument.body:M(t)&&st(t)?t:Kt(Ve(t))}function be(t,e){var r;e===void 0&&(e=[]);var n=Kt(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),i=C(n),a=o?[i].concat(i.visualViewport||[],st(n)?n:[]):n,l=e.concat(a);return o?l:l.concat(be(Ve(a)))}function Ze(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function zr(t,e){var r=pe(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function _t(t,e,r){return e===Vt?Ze(Ur(t,r)):oe(e)?zr(e,r):Ze(Yr(K(t)))}function Kr(t){var e=be(Ve(t)),r=["absolute","fixed"].indexOf(Y(t).position)>=0,n=r&&M(t)?_e(t):t;return oe(n)?e.filter(function(o){return oe(o)&&Xt(o,n)&&X(o)!=="body"}):[]}function Gr(t,e,r,n){var o=e==="clippingParents"?Kr(t):[].concat(e),i=[].concat(o,[r]),a=i[0],l=i.reduce(function(s,f){var c=_t(t,f,n);return s.top=re(c.top,s.top),s.right=Ne(c.right,s.right),s.bottom=Ne(c.bottom,s.bottom),s.left=re(c.left,s.left),s},_t(t,a,n));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Gt(t){var e=t.reference,r=t.element,n=t.placement,o=n?q(n):null,i=n?de(n):null,a=e.x+e.width/2-r.width/2,l=e.y+e.height/2-r.height/2,s;switch(o){case S:s={x:a,y:e.y-r.height};break;case N:s={x:a,y:e.y+e.height};break;case H:s={x:e.x+e.width,y:l};break;case j:s={x:e.x-r.width,y:l};break;default:s={x:e.x,y:e.y}}var f=o?ot(o):null;if(f!=null){var c=f==="y"?"height":"width";switch(i){case ce:s[f]=s[f]-(e[c]/2-r[c]/2);break;case xe:s[f]=s[f]+(e[c]/2-r[c]/2);break}}return s}function Oe(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,i=r.strategy,a=i===void 0?t.strategy:i,l=r.boundary,s=l===void 0?mr:l,f=r.rootBoundary,c=f===void 0?Vt:f,u=r.elementContext,d=u===void 0?me:u,p=r.altBoundary,v=p===void 0?!1:p,h=r.padding,g=h===void 0?0:h,w=Yt(typeof g!="number"?g:zt(g,Ee)),O=d===me?gr:me,$=t.rects.popper,m=t.elements[v?O:d],y=Gr(oe(m)?m:m.contextElement||K(t.elements.popper),s,c,a),b=pe(t.elements.reference),x=Gt({reference:b,element:$,strategy:"absolute",placement:o}),A=Ze(Object.assign({},$,x)),_=d===me?A:b,E={top:y.top-_.top+w.top,bottom:_.bottom-y.bottom+w.bottom,left:y.left-_.left+w.left,right:_.right-y.right+w.right},L=t.modifiersData.offset;if(d===me&&L){var W=L[o];Object.keys(E).forEach(function(P){var G=[H,N].indexOf(P)>=0?1:-1,J=[S,N].indexOf(P)>=0?"y":"x";E[P]+=W[J]*G})}return E}function Jr(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,l=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?Ft:s,c=de(n),u=c?l?xt:xt.filter(function(v){return de(v)===c}):Ee,d=u.filter(function(v){return f.indexOf(v)>=0});d.length===0&&(d=u);var p=d.reduce(function(v,h){return v[h]=Oe(t,{placement:h,boundary:o,rootBoundary:i,padding:a})[q(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function Qr(t){if(q(t)===tt)return[];var e=Ce(t);return[Et(t),e,Et(e)]}function Zr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,l=a===void 0?!0:a,s=r.fallbackPlacements,f=r.padding,c=r.boundary,u=r.rootBoundary,d=r.altBoundary,p=r.flipVariations,v=p===void 0?!0:p,h=r.allowedAutoPlacements,g=e.options.placement,w=q(g),O=w===g,$=s||(O||!v?[Ce(g)]:Qr(g)),m=[g].concat($).reduce(function(ie,z){return ie.concat(q(z)===tt?Jr(e,{placement:z,boundary:c,rootBoundary:u,padding:f,flipVariations:v,allowedAutoPlacements:h}):z)},[]),y=e.rects.reference,b=e.rects.popper,x=new Map,A=!0,_=m[0],E=0;E<m.length;E++){var L=m[E],W=q(L),P=de(L)===ce,G=[S,N].indexOf(W)>=0,J=G?"width":"height",k=Oe(e,{placement:L,boundary:c,rootBoundary:u,altBoundary:d,padding:f}),I=G?P?H:j:P?N:S;y[J]>b[J]&&(I=Ce(I));var Ae=Ce(I),Q=[];if(i&&Q.push(k[W]<=0),l&&Q.push(k[I]<=0,k[Ae]<=0),Q.every(function(ie){return ie})){_=L,A=!1;break}x.set(L,Q)}if(A)for(var Te=v?3:1,Fe=function(z){var he=m.find(function(Pe){var Z=x.get(Pe);if(Z)return Z.slice(0,z).every(function(qe){return qe})});if(he)return _=he,"break"},ve=Te;ve>0;ve--){var Le=Fe(ve);if(Le==="break")break}e.placement!==_&&(e.modifiersData[n]._skip=!0,e.placement=_,e.reset=!0)}}const en={name:"flip",enabled:!0,phase:"main",fn:Zr,requiresIfExists:["offset"],data:{_skip:!1}};function At(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Tt(t){return[S,H,N,j].some(function(e){return t[e]>=0})}function tn(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=Oe(e,{elementContext:"reference"}),l=Oe(e,{altBoundary:!0}),s=At(a,n),f=At(l,o,i),c=Tt(s),u=Tt(f);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}const rn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:tn};function nn(t,e,r){var n=q(t),o=[j,S].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,a=i[0],l=i[1];return a=a||0,l=(l||0)*o,[j,H].indexOf(n)>=0?{x:l,y:a}:{x:a,y:l}}function on(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=o===void 0?[0,0]:o,a=Ft.reduce(function(c,u){return c[u]=nn(u,e.rects,i),c},{}),l=a[e.placement],s=l.x,f=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=f),e.modifiersData[n]=a}const an={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:on};function sn(t){var e=t.state,r=t.name;e.modifiersData[r]=Gt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const ln={name:"popperOffsets",enabled:!0,phase:"read",fn:sn,data:{}};function fn(t){return t==="x"?"y":"x"}function cn(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,l=a===void 0?!1:a,s=r.boundary,f=r.rootBoundary,c=r.altBoundary,u=r.padding,d=r.tether,p=d===void 0?!0:d,v=r.tetherOffset,h=v===void 0?0:v,g=Oe(e,{boundary:s,rootBoundary:f,padding:u,altBoundary:c}),w=q(e.placement),O=de(e.placement),$=!O,m=ot(w),y=fn(m),b=e.modifiersData.popperOffsets,x=e.rects.reference,A=e.rects.popper,_=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,E=typeof _=="number"?{mainAxis:_,altAxis:_}:Object.assign({mainAxis:0,altAxis:0},_),L=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,W={x:0,y:0};if(b){if(i){var P,G=m==="y"?S:j,J=m==="y"?N:H,k=m==="y"?"height":"width",I=b[m],Ae=I+g[G],Q=I-g[J],Te=p?-A[k]/2:0,Fe=O===ce?x[k]:A[k],ve=O===ce?-A[k]:-x[k],Le=e.elements.arrow,ie=p&&Le?nt(Le):{width:0,height:0},z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ut(),he=z[G],Pe=z[J],Z=ye(0,x[k],ie[k]),qe=$?x[k]/2-Te-Z-he-E.mainAxis:Fe-Z-he-E.mainAxis,Qt=$?-x[k]/2+Te+Z+Pe+E.mainAxis:ve+Z+Pe+E.mainAxis,Xe=e.elements.arrow&&_e(e.elements.arrow),Zt=Xe?m==="y"?Xe.clientTop||0:Xe.clientLeft||0:0,lt=(P=L==null?void 0:L[m])!=null?P:0,er=I+qe-lt-Zt,tr=I+Qt-lt,ft=ye(p?Ne(Ae,er):Ae,I,p?re(Q,tr):Q);b[m]=ft,W[m]=ft-I}if(l){var ct,rr=m==="x"?S:j,nr=m==="x"?N:H,ee=b[y],Se=y==="y"?"height":"width",ut=ee+g[rr],pt=ee-g[nr],Ue=[S,j].indexOf(w)!==-1,dt=(ct=L==null?void 0:L[y])!=null?ct:0,vt=Ue?ut:ee-x[Se]-A[Se]-dt+E.altAxis,ht=Ue?ee+x[Se]+A[Se]-dt-E.altAxis:pt,mt=p&&Ue?Cr(vt,ee,ht):ye(p?vt:ut,ee,p?ht:pt);b[y]=mt,W[y]=mt-ee}e.modifiersData[n]=W}}const un={name:"preventOverflow",enabled:!0,phase:"main",fn:cn,requiresIfExists:["offset"]};function pn(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function dn(t){return t===C(t)||!M(t)?it(t):pn(t)}function vn(t){var e=t.getBoundingClientRect(),r=ue(e.width)/t.offsetWidth||1,n=ue(e.height)/t.offsetHeight||1;return r!==1||n!==1}function hn(t,e,r){r===void 0&&(r=!1);var n=M(e),o=M(e)&&vn(e),i=K(e),a=pe(t,o,r),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((X(e)!=="body"||st(i))&&(l=dn(e)),M(e)?(s=pe(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=at(i))),{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function mn(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function o(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(l){if(!r.has(l)){var s=e.get(l);s&&o(s)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||o(i)}),n}function gn(t){var e=mn(t);return Tr.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function yn(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function bn(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Lt={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function wn(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,i=o===void 0?Lt:o;return function(l,s,f){f===void 0&&(f=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lt,i),modifiersData:{},elements:{reference:l,popper:s},attributes:{},styles:{}},u=[],d=!1,p={state:c,setOptions:function(w){var O=typeof w=="function"?w(c.options):w;h(),c.options=Object.assign({},i,c.options,O),c.scrollParents={reference:oe(l)?be(l):l.contextElement?be(l.contextElement):[],popper:be(s)};var $=gn(bn([].concat(n,c.options.modifiers)));return c.orderedModifiers=$.filter(function(m){return m.enabled}),v(),p.update()},forceUpdate:function(){if(!d){var w=c.elements,O=w.reference,$=w.popper;if(Pt(O,$)){c.rects={reference:hn(O,_e($),c.options.strategy==="fixed"),popper:nt($)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(E){return c.modifiersData[E.name]=Object.assign({},E.data)});for(var m=0;m<c.orderedModifiers.length;m++){if(c.reset===!0){c.reset=!1,m=-1;continue}var y=c.orderedModifiers[m],b=y.fn,x=y.options,A=x===void 0?{}:x,_=y.name;typeof b=="function"&&(c=b({state:c,options:A,name:_,instance:p})||c)}}}},update:yn(function(){return new Promise(function(g){p.forceUpdate(),g(c)})}),destroy:function(){h(),d=!0}};if(!Pt(l,s))return p;p.setOptions(f).then(function(g){!d&&f.onFirstUpdate&&f.onFirstUpdate(g)});function v(){c.orderedModifiers.forEach(function(g){var w=g.name,O=g.options,$=O===void 0?{}:O,m=g.effect;if(typeof m=="function"){var y=m({state:c,name:w,instance:p,options:$}),b=function(){};u.push(y||b)}})}function h(){u.forEach(function(g){return g()}),u=[]}return p}}var xn=[Fr,ln,Ir,Sr,an,en,un,Mr,rn],On=wn({defaultModifiers:xn});const et={"unknown-word":"Kata tidak dikenali.",misspelling:"Kata salah eja.","extra-space":"Terdapat spasi berlebih."};class Jt extends HTMLElement{constructor(){super()}showTooltip(){this.tooltipEl.classList.add("show")}hideTooltip(){this.tooltipEl.classList.remove("show")}connectedCallback(){this.tooltipEl=document.createElement("div"),this.tooltipEl.className="u-x-tooltip",this.tooltipEl.innerHTML=`${et[this.getAttribute("data-type")]}
        <br>Sugesti: <b>${this.getAttribute("data-suggestion")||"?"}</b>`,document.body.appendChild(this.tooltipEl),this.addEventListener("mouseenter",this.showTooltip),this.addEventListener("mouseleave",this.hideTooltip),this.addEventListener("focus",this.showTooltip),this.addEventListener("blur",this.hideTooltip),this.popper=On(this,this.tooltipEl,{placement:"bottom"})}disconnectedCallback(){this.removeEventListener("mouseenter",this.showTooltip),this.removeEventListener("mouseleave",this.hideTooltip),this.removeEventListener("focus",this.showTooltip),this.removeEventListener("blur",this.hideTooltip),this.tooltipEl.remove(),this.popper.destroy()}}function $n(t){var e=window.getSelection().getRangeAt(0),r=e.cloneRange();r.selectNodeContents(t),r.setEnd(e.startContainer,e.startOffset);var n=r.toString().length;return{start:n,end:n+e.toString().length}}function En(t,e){var r=0,n=document.createRange();n.setStart(t,0),n.collapse(!0);for(var o=[t],i,a=!1,l=!1;!l&&(i=o.pop());)if(i.nodeType==3){var s=r+i.length;!a&&e.start>=r&&e.start<=s&&(n.setStart(i,e.start-r),a=!0),a&&e.end>=r&&e.end<=s&&(n.setEnd(i,e.end-r),l=!0),r=s}else for(var f=i.childNodes.length;f--;)o.push(i.childNodes[f]);l||(console.log("Selection not found",e,r-1,a),n.setEnd(t,t.childNodes.length),n.setStart(n.endContainer,n.endOffset));var c=window.getSelection();c.removeAllRanges(),c.addRange(n)}function St(t,e,r){const n=t.slice();return n[3]=e[r],n}function jt(t){var p;let e,r,n=t[1](t[3].start_lexeme,t[3].end_lexeme).map(t[2]).join("")+"",o,i,a,l,s,f=((p=t[3].suggestion)==null?void 0:p.term)+"",c,u,d;return{c(){e=D("button"),r=D("pre"),o=De(n),i=le(),a=D("span"),a.textContent=" ➡️ ",l=le(),s=D("pre"),c=De(f),u=le(),T(r,"class","badge-secondary inline"),T(a,"class","mx-2"),T(s,"class","badge-primary inline"),T(e,"class","btn-neutral py-2"),T(e,"type","button"),T(e,"title",d=et[t[3].type])},m(v,h){V(v,e,h),F(e,r),F(r,o),F(e,i),F(e,a),F(e,l),F(e,s),F(s,c),F(e,u)},p(v,h){var g;h&1&&n!==(n=v[1](v[3].start_lexeme,v[3].end_lexeme).map(v[2]).join("")+"")&&yt(o,n),h&1&&f!==(f=((g=v[3].suggestion)==null?void 0:g.term)+"")&&yt(c,f),h&1&&d!==(d=et[v[3].type])&&T(e,"title",d)},d(v){v&&B(e)}}}function _n(t){let e,r=Re(t[0].corrections),n=[];for(let o=0;o<r.length;o+=1)n[o]=jt(St(t,r,o));return{c(){e=D("div");for(let o=0;o<n.length;o+=1)n[o].c();T(e,"class","text-center flex-col flex my-2")},m(o,i){V(o,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(o,[i]){if(i&3){r=Re(o[0].corrections);let a;for(a=0;a<r.length;a+=1){const l=St(o,r,a);n[a]?n[a].p(l,i):(n[a]=jt(l),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=r.length}},i:R,o:R,d(o){o&&B(e),Bt(n,o)}}}function An(t,e,r){let{lexicon:n={}}=e;Nt(()=>{});const o=(a,l,s=1)=>Array(Math.ceil((l-a+1)/s)).fill(a).map((f,c)=>f+c*s),i=a=>n.lexemes[a].word+n.lexemes[a].suffix;return t.$$set=a=>{"lexicon"in a&&r(0,n=a.lexicon)},[n,o,i]}class Tn extends Ie{constructor(e){super(),We(this,e,An,_n,He,{lexicon:0})}}function kt(t,e,r){const n=t.slice();return n[7]=e[r],n}function Ln(t){let e,r,n,o,i=Re(t[3].structure),a=[];for(let s=0;s<i.length;s+=1)a[s]=Ct(kt(t,i,s));const l=s=>ne(a[s],1,1,()=>{a[s]=null});return{c(){e=D("div"),e.innerHTML="<i>Correction lists:</i>",r=le();for(let s=0;s<a.length;s+=1)a[s].c();n=sr(),T(e,"class","text-center text-gray-500")},m(s,f){V(s,e,f),V(s,r,f);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(s,f);V(s,n,f),o=!0},p(s,f){if(f&8){i=Re(s[3].structure);let c;for(c=0;c<i.length;c+=1){const u=kt(s,i,c);a[c]?(a[c].p(u,f),U(a[c],1)):(a[c]=Ct(u),a[c].c(),U(a[c],1),a[c].m(n.parentNode,n))}for(Wt(),c=i.length;c<a.length;c+=1)l(c);It()}},i(s){if(!o){for(let f=0;f<i.length;f+=1)U(a[f]);o=!0}},o(s){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)ne(a[f]);o=!1},d(s){s&&(B(e),B(r),B(n)),Bt(a,s)}}}function Pn(t){let e;return{c(){e=D("div"),e.innerHTML="<i>Wait for update...</i>",T(e,"class","text-center text-gray-500")},m(r,n){V(r,e,n)},p:R,i:R,o:R,d(r){r&&B(e)}}}function Ct(t){let e,r;return e=new Tn({props:{lexicon:t[7]}}),{c(){Je(e.$$.fragment)},m(n,o){Be(e,n,o),r=!0},p(n,o){const i={};o&8&&(i.lexicon=n[7]),e.$set(i)},i(n){r||(U(e.$$.fragment,n),r=!0)},o(n){ne(e.$$.fragment,n),r=!1},d(n){Me(e,n)}}}function Sn(t){let e,r,n,o,i,a,l;const s=[Pn,Ln],f=[];function c(u,d){return u[0]!==u[2]?0:u[3]&&u[3].structure?1:-1}return~(i=c(t))&&(a=f[i]=s[i](t)),{c(){e=D("div"),n=le(),o=D("div"),a&&a.c(),T(e,"class","editor svelte-x0jou2"),T(e,"contenteditable",""),T(e,"data-gramm","false"),T(e,"placeholder",r=t[1]?"":"Ketik konten")},m(u,d){V(u,e,d),V(u,n,d),V(u,o,d),~i&&f[i].m(o,null),l=!0},p(u,[d]){(!l||d&2&&r!==(r=u[1]?"":"Ketik konten"))&&T(e,"placeholder",r);let p=i;i=c(u),i===p?~i&&f[i].p(u,d):(a&&(Wt(),ne(f[p],1,1,()=>{f[p]=null}),It()),~i?(a=f[i],a?a.p(u,d):(a=f[i]=s[i](u),a.c()),U(a,1),a.m(o,null)):a=null)},i(u){l||(U(a),l=!0)},o(u){ne(a),l=!1},d(u){u&&(B(e),B(n),B(o)),~i&&f[i].d()}}}function jn(t,e,r){let n=1,o="",i=Date.now(),a=1,l=null,s=null;return Nt(()=>{const f=document.querySelector(".editor");sessionStorage.getItem("text")&&(f.innerHTML=sessionStorage.getItem("text"),r(1,o=f.innerText)),l=setInterval(()=>{n!==a&&Date.now()-i>200&&(r(2,a=n),fetch("https://api.benerin.co/v1/check?text="+encodeURIComponent(o),{method:"GET"}).then(c=>c.json()).then(c=>{var u=$n(f);f.innerHTML=c.rendered,r(3,s=c),document.querySelectorAll("u-x").forEach(p=>{var v=new Jt;v.setAttribute("data-type",p.getAttribute("data-type")),v.setAttribute("data-suggestion",p.getAttribute("data-suggestion")),v.innerText=p.innerText,p.parentNode.replaceChild(v,p)}),setTimeout(()=>{f.focus(),En(f,u),sessionStorage.setItem("text",f.innerHTML)},10)}))},100),f.addEventListener("input",c=>{r(1,o=f.innerText),r(0,n++,n),i=Date.now()})}),fr(()=>{clearInterval(l)}),[n,o,a,s]}class kn extends Ie{constructor(e){super(),We(this,e,jn,Sn,He,{})}}function Cn(t){let e;return{c(){e=D("div"),e.innerHTML='<h1 class="text-5xl my-3"><u class="bg-red-600">benerin</u><span class="bg-green-600">.co</span></h1> <p><i>Spell-proofing API untuk Bahasa Indonesia</i></p>',T(e,"class","p-5 text-center text-white")},m(r,n){V(r,e,n)},p:R,i:R,o:R,d(r){r&&B(e)}}}class Dn extends Ie{constructor(e){super(),We(this,e,null,Cn,He,{})}}function Rn(t){let e,r,n,o,i,a;return n=new Dn({}),i=new kn({}),{c(){e=D("main"),r=D("div"),Je(n.$$.fragment),o=le(),Je(i.$$.fragment),T(r,"class","container mx-auto")},m(l,s){V(l,e,s),F(e,r),Be(n,r,null),F(r,o),Be(i,r,null),a=!0},p:R,i(l){a||(U(n.$$.fragment,l),U(i.$$.fragment,l),a=!0)},o(l){ne(n.$$.fragment,l),ne(i.$$.fragment,l),a=!1},d(l){l&&B(e),Me(n),Me(i)}}}class Bn extends Ie{constructor(e){super(),We(this,e,null,Rn,He,{})}}new Bn({target:document.getElementById("app")});window.customElements&&customElements.define("u-x",Jt);