(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function W(){}function $e(t){return t()}function fe(){return Object.create(null)}function _t(t){t.forEach($e)}function Ae(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Xe(t){return Object.keys(t).length===0}function ce(t,e){t.appendChild(e)}function Z(t,e,r){t.insertBefore(e,r||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function ze(t){return document.createTextNode(t)}function Te(){return ze(" ")}function pt(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Ye(t){return Array.from(t.childNodes)}let dt;function ct(t){dt=t}function Le(){if(!dt)throw new Error("Function called outside component initialization");return dt}function Ue(t){Le().$$.on_mount.push(t)}function Ge(t){Le().$$.on_destroy.push(t)}const ft=[],ue=[],At=[],le=[],Ke=Promise.resolve();let Bt=!1;function Je(){Bt||(Bt=!0,Ke.then(Pe))}function Mt(t){At.push(t)}const kt=new Set;let Et=0;function Pe(){const t=dt;do{for(;Et<ft.length;){const e=ft[Et];Et++,ct(e),Qe(e.$$)}for(ct(null),ft.length=0,Et=0;ue.length;)ue.pop()();for(let e=0;e<At.length;e+=1){const r=At[e];kt.has(r)||(kt.add(r),r())}At.length=0}while(ft.length);for(;le.length;)le.pop()();Bt=!1,kt.clear(),ct(t)}function Qe(t){if(t.fragment!==null){t.update(),_t(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Mt)}}const Tt=new Set;let Ze;function Ht(t,e){t&&t.i&&(Tt.delete(t),t.i(e))}function pe(t,e,r,n){if(t&&t.o){if(Tt.has(t))return;Tt.add(t),Ze.c.push(()=>{Tt.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function de(t){t&&t.c()}function Nt(t,e,r,n){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,r),n||Mt(()=>{const f=t.$$.on_mount.map($e).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...f):_t(f),t.$$.on_mount=[]}),i.forEach(Mt)}function Wt(t,e){const r=t.$$;r.fragment!==null&&(_t(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function tr(t,e){t.$$.dirty[0]===-1&&(ft.push(t),Je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qt(t,e,r,n,o,i,f,s=[-1]){const a=dt;ct(t);const u=t.$$={fragment:null,ctx:[],props:i,update:W,not_equal:o,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:fe(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};f&&f(u.root);let c=!1;if(u.ctx=r?r(t,e.props||{},(p,v,...l)=>{const b=l.length?l[0]:v;return u.ctx&&o(u.ctx[p],u.ctx[p]=b)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](b),c&&tr(t,p)),v}):[],u.update(),c=!0,_t(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const p=Ye(e.target);u.fragment&&u.fragment.l(p),p.forEach(G)}else u.fragment&&u.fragment.c();e.intro&&Ht(t.$$.fragment),Nt(t,e.target,e.anchor,e.customElement),Pe()}ct(a)}class Xt{$destroy(){Wt(this,1),this.$destroy=W}$on(e,r){if(!Ae(r))return W;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!Xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var _="top",C="bottom",j="right",D="left",zt="auto",mt=[_,C,j,D],et="start",vt="end",er="clippingParents",_e="viewport",st="popper",rr="reference",ve=mt.reduce(function(t,e){return t.concat([e+"-"+et,e+"-"+vt])},[]),De=[].concat(mt,[zt]).reduce(function(t,e){return t.concat([e,e+"-"+et,e+"-"+vt])},[]),nr="beforeRead",or="read",ir="afterRead",ar="beforeMain",sr="main",fr="afterMain",cr="beforeWrite",ur="write",lr="afterWrite",pr=[nr,or,ir,ar,sr,fr,cr,ur,lr];function N(t){return t?(t.nodeName||"").toLowerCase():null}function k(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=k(t).Element;return t instanceof e||t instanceof Element}function S(t){var e=k(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Yt(t){if(typeof ShadowRoot>"u")return!1;var e=k(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function dr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},i=e.elements[r];!S(i)||!N(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(f){var s=o[f];s===!1?i.removeAttribute(f):i.setAttribute(f,s===!0?"":s)}))})}function vr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],i=e.attributes[n]||{},f=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=f.reduce(function(a,u){return a[u]="",a},{});!S(o)||!N(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(a){o.removeAttribute(a)}))})}}const hr={name:"applyStyles",enabled:!0,phase:"write",fn:dr,effect:vr,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var K=Math.max,Pt=Math.min,rt=Math.round;function Vt(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Re(){return!/^((?!chrome|android).)*safari/i.test(Vt())}function nt(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,i=1;e&&S(t)&&(o=t.offsetWidth>0&&rt(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&rt(n.height)/t.offsetHeight||1);var f=J(t)?k(t):window,s=f.visualViewport,a=!Re()&&r,u=(n.left+(a&&s?s.offsetLeft:0))/o,c=(n.top+(a&&s?s.offsetTop:0))/i,p=n.width/o,v=n.height/i;return{width:p,height:v,top:c,right:u+p,bottom:c+v,left:u,x:u,y:c}}function Ut(t){var e=nt(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function Se(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Yt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(t){return k(t).getComputedStyle(t)}function mr(t){return["table","td","th"].indexOf(N(t))>=0}function F(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function Dt(t){return N(t)==="html"?t:t.assignedSlot||t.parentNode||(Yt(t)?t.host:null)||F(t)}function he(t){return!S(t)||V(t).position==="fixed"?null:t.offsetParent}function gr(t){var e=/firefox/i.test(Vt()),r=/Trident/i.test(Vt());if(r&&S(t)){var n=V(t);if(n.position==="fixed")return null}var o=Dt(t);for(Yt(o)&&(o=o.host);S(o)&&["html","body"].indexOf(N(o))<0;){var i=V(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function gt(t){for(var e=k(t),r=he(t);r&&mr(r)&&V(r).position==="static";)r=he(r);return r&&(N(r)==="html"||N(r)==="body"&&V(r).position==="static")?e:r||gr(t)||e}function Gt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ut(t,e,r){return K(t,Pt(e,r))}function yr(t,e,r){var n=ut(t,e,r);return n>r?r:n}function Ce(){return{top:0,right:0,bottom:0,left:0}}function je(t){return Object.assign({},Ce(),t)}function ke(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var br=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,je(typeof e!="number"?e:ke(e,mt))};function wr(t){var e,r=t.state,n=t.name,o=t.options,i=r.elements.arrow,f=r.modifiersData.popperOffsets,s=H(r.placement),a=Gt(s),u=[D,j].indexOf(s)>=0,c=u?"height":"width";if(!(!i||!f)){var p=br(o.padding,r),v=Ut(i),l=a==="y"?_:D,b=a==="y"?C:j,m=r.rects.reference[c]+r.rects.reference[a]-f[a]-r.rects.popper[c],h=f[a]-r.rects.reference[a],w=gt(i),O=w?a==="y"?w.clientHeight||0:w.clientWidth||0:0,E=m/2-h/2,d=p[l],g=O-v[c]-p[b],y=O/2-v[c]/2+E,x=ut(d,y,g),T=a;r.modifiersData[n]=(e={},e[T]=x,e.centerOffset=x-y,e)}}function xr(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!Se(e.elements.popper,o)||(e.elements.arrow=o))}const Or={name:"arrow",enabled:!0,phase:"main",fn:wr,effect:xr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ot(t){return t.split("-")[1]}var Er={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $r(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:rt(e*o)/o||0,y:rt(r*o)/o||0}}function me(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,f=t.offsets,s=t.position,a=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,p=t.isFixed,v=f.x,l=v===void 0?0:v,b=f.y,m=b===void 0?0:b,h=typeof c=="function"?c({x:l,y:m}):{x:l,y:m};l=h.x,m=h.y;var w=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),E=D,d=_,g=window;if(u){var y=gt(r),x="clientHeight",T="clientWidth";if(y===k(r)&&(y=F(r),V(y).position!=="static"&&s==="absolute"&&(x="scrollHeight",T="scrollWidth")),y=y,o===_||(o===D||o===j)&&i===vt){d=C;var A=p&&y===g&&g.visualViewport?g.visualViewport.height:y[x];m-=A-n.height,m*=a?1:-1}if(o===D||(o===_||o===C)&&i===vt){E=j;var $=p&&y===g&&g.visualViewport?g.visualViewport.width:y[T];l-=$-n.width,l*=a?1:-1}}var L=Object.assign({position:s},u&&Er),B=c===!0?$r({x:l,y:m}):{x:l,y:m};if(l=B.x,m=B.y,a){var P;return Object.assign({},L,(P={},P[d]=O?"0":"",P[E]=w?"0":"",P.transform=(g.devicePixelRatio||1)<=1?"translate("+l+"px, "+m+"px)":"translate3d("+l+"px, "+m+"px, 0)",P))}return Object.assign({},L,(e={},e[d]=O?m+"px":"",e[E]=w?l+"px":"",e.transform="",e))}function Ar(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,f=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,u={placement:H(e.placement),variation:ot(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,me(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:a})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,me(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Tr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ar,data:{}};var $t={passive:!0};function Lr(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=o===void 0?!0:o,f=n.resize,s=f===void 0?!0:f,a=k(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",r.update,$t)}),s&&a.addEventListener("resize",r.update,$t),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",r.update,$t)}),s&&a.removeEventListener("resize",r.update,$t)}}const Pr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Lr,data:{}};var _r={left:"right",right:"left",bottom:"top",top:"bottom"};function Lt(t){return t.replace(/left|right|bottom|top/g,function(e){return _r[e]})}var Dr={start:"end",end:"start"};function ge(t){return t.replace(/start|end/g,function(e){return Dr[e]})}function Kt(t){var e=k(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Jt(t){return nt(F(t)).left+Kt(t).scrollLeft}function Rr(t,e){var r=k(t),n=F(t),o=r.visualViewport,i=n.clientWidth,f=n.clientHeight,s=0,a=0;if(o){i=o.width,f=o.height;var u=Re();(u||!u&&e==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:f,x:s+Jt(t),y:a}}function Sr(t){var e,r=F(t),n=Kt(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=K(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Jt(t),a=-n.scrollTop;return V(o||r).direction==="rtl"&&(s+=K(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:f,x:s,y:a}}function Qt(t){var e=V(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Be(t){return["html","body","#document"].indexOf(N(t))>=0?t.ownerDocument.body:S(t)&&Qt(t)?t:Be(Dt(t))}function lt(t,e){var r;e===void 0&&(e=[]);var n=Be(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),i=k(n),f=o?[i].concat(i.visualViewport||[],Qt(n)?n:[]):n,s=e.concat(f);return o?s:s.concat(lt(Dt(f)))}function It(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Cr(t,e){var r=nt(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ye(t,e,r){return e===_e?It(Rr(t,r)):J(e)?Cr(e,r):It(Sr(F(t)))}function jr(t){var e=lt(Dt(t)),r=["absolute","fixed"].indexOf(V(t).position)>=0,n=r&&S(t)?gt(t):t;return J(n)?e.filter(function(o){return J(o)&&Se(o,n)&&N(o)!=="body"}):[]}function kr(t,e,r,n){var o=e==="clippingParents"?jr(t):[].concat(e),i=[].concat(o,[r]),f=i[0],s=i.reduce(function(a,u){var c=ye(t,u,n);return a.top=K(c.top,a.top),a.right=Pt(c.right,a.right),a.bottom=Pt(c.bottom,a.bottom),a.left=K(c.left,a.left),a},ye(t,f,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Me(t){var e=t.reference,r=t.element,n=t.placement,o=n?H(n):null,i=n?ot(n):null,f=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,a;switch(o){case _:a={x:f,y:e.y-r.height};break;case C:a={x:f,y:e.y+e.height};break;case j:a={x:e.x+e.width,y:s};break;case D:a={x:e.x-r.width,y:s};break;default:a={x:e.x,y:e.y}}var u=o?Gt(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case et:a[u]=a[u]-(e[c]/2-r[c]/2);break;case vt:a[u]=a[u]+(e[c]/2-r[c]/2);break}}return a}function ht(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,i=r.strategy,f=i===void 0?t.strategy:i,s=r.boundary,a=s===void 0?er:s,u=r.rootBoundary,c=u===void 0?_e:u,p=r.elementContext,v=p===void 0?st:p,l=r.altBoundary,b=l===void 0?!1:l,m=r.padding,h=m===void 0?0:m,w=je(typeof h!="number"?h:ke(h,mt)),O=v===st?rr:st,E=t.rects.popper,d=t.elements[b?O:v],g=kr(J(d)?d:d.contextElement||F(t.elements.popper),a,c,f),y=nt(t.elements.reference),x=Me({reference:y,element:E,strategy:"absolute",placement:o}),T=It(Object.assign({},E,x)),A=v===st?T:y,$={top:g.top-A.top+w.top,bottom:A.bottom-g.bottom+w.bottom,left:g.left-A.left+w.left,right:A.right-g.right+w.right},L=t.modifiersData.offset;if(v===st&&L){var B=L[o];Object.keys($).forEach(function(P){var q=[j,C].indexOf(P)>=0?1:-1,X=[_,C].indexOf(P)>=0?"y":"x";$[P]+=B[X]*q})}return $}function Br(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,f=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,u=a===void 0?De:a,c=ot(n),p=c?s?ve:ve.filter(function(b){return ot(b)===c}):mt,v=p.filter(function(b){return u.indexOf(b)>=0});v.length===0&&(v=p);var l=v.reduce(function(b,m){return b[m]=ht(t,{placement:m,boundary:o,rootBoundary:i,padding:f})[H(m)],b},{});return Object.keys(l).sort(function(b,m){return l[b]-l[m]})}function Mr(t){if(H(t)===zt)return[];var e=Lt(t);return[ge(t),e,ge(e)]}function Hr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!0:f,a=r.fallbackPlacements,u=r.padding,c=r.boundary,p=r.rootBoundary,v=r.altBoundary,l=r.flipVariations,b=l===void 0?!0:l,m=r.allowedAutoPlacements,h=e.options.placement,w=H(h),O=w===h,E=a||(O||!b?[Lt(h)]:Mr(h)),d=[h].concat(E).reduce(function(Q,I){return Q.concat(H(I)===zt?Br(e,{placement:I,boundary:c,rootBoundary:p,padding:u,flipVariations:b,allowedAutoPlacements:m}):I)},[]),g=e.rects.reference,y=e.rects.popper,x=new Map,T=!0,A=d[0],$=0;$<d.length;$++){var L=d[$],B=H(L),P=ot(L)===et,q=[_,C].indexOf(B)>=0,X=q?"width":"height",R=ht(e,{placement:L,boundary:c,rootBoundary:p,altBoundary:v,padding:u}),M=q?P?j:D:P?C:_;g[X]>y[X]&&(M=Lt(M));var yt=Lt(M),z=[];if(i&&z.push(R[B]<=0),s&&z.push(R[M]<=0,R[yt]<=0),z.every(function(Q){return Q})){A=L,T=!1;break}x.set(L,z)}if(T)for(var bt=b?3:1,Rt=function(I){var at=d.find(function(xt){var Y=x.get(xt);if(Y)return Y.slice(0,I).every(function(St){return St})});if(at)return A=at,"break"},it=bt;it>0;it--){var wt=Rt(it);if(wt==="break")break}e.placement!==A&&(e.modifiersData[n]._skip=!0,e.placement=A,e.reset=!0)}}const Nr={name:"flip",enabled:!0,phase:"main",fn:Hr,requiresIfExists:["offset"],data:{_skip:!1}};function be(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function we(t){return[_,j,C,D].some(function(e){return t[e]>=0})}function Wr(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,f=ht(e,{elementContext:"reference"}),s=ht(e,{altBoundary:!0}),a=be(f,n),u=be(s,o,i),c=we(a),p=we(u);e.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}const Vr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Wr};function Ir(t,e,r){var n=H(t),o=[D,_].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,f=i[0],s=i[1];return f=f||0,s=(s||0)*o,[D,j].indexOf(n)>=0?{x:s,y:f}:{x:f,y:s}}function Fr(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=o===void 0?[0,0]:o,f=De.reduce(function(c,p){return c[p]=Ir(p,e.rects,i),c},{}),s=f[e.placement],a=s.x,u=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=a,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=f}const qr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Fr};function Xr(t){var e=t.state,r=t.name;e.modifiersData[r]=Me({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const zr={name:"popperOffsets",enabled:!0,phase:"read",fn:Xr,data:{}};function Yr(t){return t==="x"?"y":"x"}function Ur(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!1:f,a=r.boundary,u=r.rootBoundary,c=r.altBoundary,p=r.padding,v=r.tether,l=v===void 0?!0:v,b=r.tetherOffset,m=b===void 0?0:b,h=ht(e,{boundary:a,rootBoundary:u,padding:p,altBoundary:c}),w=H(e.placement),O=ot(e.placement),E=!O,d=Gt(w),g=Yr(d),y=e.modifiersData.popperOffsets,x=e.rects.reference,T=e.rects.popper,A=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,$=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),L=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,B={x:0,y:0};if(!!y){if(i){var P,q=d==="y"?_:D,X=d==="y"?C:j,R=d==="y"?"height":"width",M=y[d],yt=M+h[q],z=M-h[X],bt=l?-T[R]/2:0,Rt=O===et?x[R]:T[R],it=O===et?-T[R]:-x[R],wt=e.elements.arrow,Q=l&&wt?Ut(wt):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ce(),at=I[q],xt=I[X],Y=ut(0,x[R],Q[R]),St=E?x[R]/2-bt-Y-at-$.mainAxis:Rt-Y-at-$.mainAxis,Ne=E?-x[R]/2+bt+Y+xt+$.mainAxis:it+Y+xt+$.mainAxis,Ct=e.elements.arrow&&gt(e.elements.arrow),We=Ct?d==="y"?Ct.clientTop||0:Ct.clientLeft||0:0,Zt=(P=L==null?void 0:L[d])!=null?P:0,Ve=M+St-Zt-We,Ie=M+Ne-Zt,te=ut(l?Pt(yt,Ve):yt,M,l?K(z,Ie):z);y[d]=te,B[d]=te-M}if(s){var ee,Fe=d==="x"?_:D,qe=d==="x"?C:j,U=y[g],Ot=g==="y"?"height":"width",re=U+h[Fe],ne=U-h[qe],jt=[_,D].indexOf(w)!==-1,oe=(ee=L==null?void 0:L[g])!=null?ee:0,ie=jt?re:U-x[Ot]-T[Ot]-oe+$.altAxis,ae=jt?U+x[Ot]+T[Ot]-oe-$.altAxis:ne,se=l&&jt?yr(ie,U,ae):ut(l?ie:re,U,l?ae:ne);y[g]=se,B[g]=se-U}e.modifiersData[n]=B}}const Gr={name:"preventOverflow",enabled:!0,phase:"main",fn:Ur,requiresIfExists:["offset"]};function Kr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Jr(t){return t===k(t)||!S(t)?Kt(t):Kr(t)}function Qr(t){var e=t.getBoundingClientRect(),r=rt(e.width)/t.offsetWidth||1,n=rt(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Zr(t,e,r){r===void 0&&(r=!1);var n=S(e),o=S(e)&&Qr(e),i=F(e),f=nt(t,o,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((N(e)!=="body"||Qt(i))&&(s=Jr(e)),S(e)?(a=nt(e,!0),a.x+=e.clientLeft,a.y+=e.clientTop):i&&(a.x=Jt(i))),{x:f.left+s.scrollLeft-a.x,y:f.top+s.scrollTop-a.y,width:f.width,height:f.height}}function tn(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function o(i){r.add(i.name);var f=[].concat(i.requires||[],i.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var a=e.get(s);a&&o(a)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||o(i)}),n}function en(t){var e=tn(t);return pr.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function rn(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function nn(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var xe={placement:"bottom",modifiers:[],strategy:"absolute"};function Oe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function on(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,i=o===void 0?xe:o;return function(s,a,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},xe,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},p=[],v=!1,l={state:c,setOptions:function(w){var O=typeof w=="function"?w(c.options):w;m(),c.options=Object.assign({},i,c.options,O),c.scrollParents={reference:J(s)?lt(s):s.contextElement?lt(s.contextElement):[],popper:lt(a)};var E=en(nn([].concat(n,c.options.modifiers)));return c.orderedModifiers=E.filter(function(d){return d.enabled}),b(),l.update()},forceUpdate:function(){if(!v){var w=c.elements,O=w.reference,E=w.popper;if(!!Oe(O,E)){c.rects={reference:Zr(O,gt(E),c.options.strategy==="fixed"),popper:Ut(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function($){return c.modifiersData[$.name]=Object.assign({},$.data)});for(var d=0;d<c.orderedModifiers.length;d++){if(c.reset===!0){c.reset=!1,d=-1;continue}var g=c.orderedModifiers[d],y=g.fn,x=g.options,T=x===void 0?{}:x,A=g.name;typeof y=="function"&&(c=y({state:c,options:T,name:A,instance:l})||c)}}}},update:rn(function(){return new Promise(function(h){l.forceUpdate(),h(c)})}),destroy:function(){m(),v=!0}};if(!Oe(s,a))return l;l.setOptions(u).then(function(h){!v&&u.onFirstUpdate&&u.onFirstUpdate(h)});function b(){c.orderedModifiers.forEach(function(h){var w=h.name,O=h.options,E=O===void 0?{}:O,d=h.effect;if(typeof d=="function"){var g=d({state:c,name:w,instance:l,options:E}),y=function(){};p.push(g||y)}})}function m(){p.forEach(function(h){return h()}),p=[]}return l}}var an=[Pr,zr,Tr,hr,qr,Nr,Gr,Or,Vr],sn=on({defaultModifiers:an});const fn={"unknown-word":"Kata tidak dikenali.","extra-space":"Terdapat spasi berlebih."};class He extends HTMLElement{constructor(){super()}showTooltip(){this.tooltipEl.classList.add("show")}hideTooltip(){this.tooltipEl.classList.remove("show")}connectedCallback(){this.tooltipEl=document.createElement("div"),this.tooltipEl.className="u-x-tooltip",this.tooltipEl.innerHTML=`${fn[this.getAttribute("data-type")]}
        <br>Sugesti: <b>${this.getAttribute("data-suggestion")||"?"}</b>`,document.body.appendChild(this.tooltipEl),this.addEventListener("mouseenter",this.showTooltip),this.addEventListener("mouseleave",this.hideTooltip),this.addEventListener("focus",this.showTooltip),this.addEventListener("blur",this.hideTooltip),this.popper=sn(this,this.tooltipEl,{placement:"bottom"})}disconnectedCallback(){this.removeEventListener("mouseenter",this.showTooltip),this.removeEventListener("mouseleave",this.hideTooltip),this.removeEventListener("focus",this.showTooltip),this.removeEventListener("blur",this.hideTooltip),this.tooltipEl.remove(),this.popper.destroy()}}function cn(t){var e=window.getSelection().getRangeAt(0),r=e.cloneRange();r.selectNodeContents(t),r.setEnd(e.startContainer,e.startOffset);var n=r.toString().length;return{start:n,end:n+e.toString().length}}function un(t,e){var r=0,n=document.createRange();n.setStart(t,0),n.collapse(!0);for(var o=[t],i,f=!1,s=!1;!s&&(i=o.pop());)if(i.nodeType==3){var a=r+i.length;!f&&e.start>=r&&e.start<=a&&(n.setStart(i,e.start-r),f=!0),f&&e.end>=r&&e.end<=a&&(n.setEnd(i,e.end-r),s=!0),r=a}else for(var u=i.childNodes.length;u--;)o.push(i.childNodes[u]);s||(console.log("Selection not found",e,r-1,f),n.setEnd(t,t.childNodes.length),n.setStart(n.endContainer,n.endOffset));var c=window.getSelection();c.removeAllRanges(),c.addRange(n)}function Ee(t){let e;return{c(){e=tt("div"),e.innerHTML="<i>Wait for update...</i>",pt(e,"class","text-center text-gray-500")},m(r,n){Z(r,e,n)},d(r){r&&G(e)}}}function ln(t){let e,r,n,o=t[0]!==t[1]&&Ee();return{c(){e=tt("div"),r=Te(),n=tt("div"),o&&o.c(),pt(e,"class","editor svelte-11lizg1"),pt(e,"contenteditable","")},m(i,f){Z(i,e,f),Z(i,r,f),Z(i,n,f),o&&o.m(n,null)},p(i,[f]){i[0]!==i[1]?o||(o=Ee(),o.c(),o.m(n,null)):o&&(o.d(1),o=null)},i:W,o:W,d(i){i&&G(e),i&&G(r),i&&G(n),o&&o.d()}}}function pn(t,e,r){let n=1,o="",i=Date.now(),f=1,s=null;return Ue(()=>{const a=document.querySelector(".editor");sessionStorage.getItem("text")&&(a.innerHTML=sessionStorage.getItem("text")),s=setInterval(()=>{n!==f&&Date.now()-i>1e3&&(r(1,f=n),fetch("https://api.benerin.co/v1/check?text="+encodeURIComponent(o),{method:"GET"}).then(u=>u.json()).then(u=>{var c=cn(a);a.innerHTML=u.rendered,document.querySelectorAll("u-x").forEach(v=>{var l=new He;l.setAttribute("data-type",v.getAttribute("data-type")),l.setAttribute("data-suggestion",v.getAttribute("data-suggestion")),l.innerText=v.innerText,v.parentNode.replaceChild(l,v)}),setTimeout(()=>{a.focus(),un(a,c),sessionStorage.setItem("text",a.innerHTML)},10)}))},1e3),a.addEventListener("input",u=>{o=a.innerText,r(0,n++,n),i=Date.now()})}),Ge(()=>{clearInterval(s)}),[n,f]}class dn extends Xt{constructor(e){super(),qt(this,e,pn,ln,Ft,{})}}function vn(t){let e;return{c(){e=tt("div"),e.innerHTML=`<h1 class="text-4xl my-3"><u class="bg-red-600">benerin</u><span class="bg-green-600">.co</span></h1> 
    <p><i>WIP</i></p>`,pt(e,"class","p-5 text-center text-white")},m(r,n){Z(r,e,n)},p:W,i:W,o:W,d(r){r&&G(e)}}}class hn extends Xt{constructor(e){super(),qt(this,e,null,vn,Ft,{})}}function mn(t){let e,r,n,o,i,f;return n=new hn({}),i=new dn({}),{c(){e=tt("main"),r=tt("div"),de(n.$$.fragment),o=Te(),de(i.$$.fragment),pt(r,"class","container")},m(s,a){Z(s,e,a),ce(e,r),Nt(n,r,null),ce(r,o),Nt(i,r,null),f=!0},p:W,i(s){f||(Ht(n.$$.fragment,s),Ht(i.$$.fragment,s),f=!0)},o(s){pe(n.$$.fragment,s),pe(i.$$.fragment,s),f=!1},d(s){s&&G(e),Wt(n),Wt(i)}}}class gn extends Xt{constructor(e){super(),qt(this,e,null,mn,Ft,{})}}new gn({target:document.getElementById("app")});window.customElements&&customElements.define("u-x",He);