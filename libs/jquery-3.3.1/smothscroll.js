(function(){var ac={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:true,arrowScroll:50,fixedBackground:true,excluded:""};var I=ac;var G=false;var B=false;var l={x:0,y:0};var b=false;var K=document.documentElement;var g;var R;var s;var ai=[];var h;var ad=/^Mac/.test(navigator.platform);var A={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var T={37:1,38:1,39:1,40:1};function am(){if(I.keyboardSupport){j("keydown",H)}}function af(){if(b||!document.body){return}b=true;var e=document.body;var ar=document.documentElement;var au=window.innerHeight;var at=e.scrollHeight;K=(document.compatMode.indexOf("CSS")>=0)?ar:e;g=e;am();if(top!=self){B=true}else{if(X&&at>au&&(e.offsetHeight<=au||ar.offsetHeight<=au)){var ap=document.createElement("div");ap.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+K.scrollHeight+"px";document.body.appendChild(ap);var an;s=function(){if(an){return}an=setTimeout(function(){if(G){return}ap.style.height="0";ap.style.height=K.scrollHeight+"px";an=null},500)};setTimeout(s,10);j("resize",s);var aq={attributes:true,childList:true,characterData:false};R=new L(s);R.observe(e,aq);if(K.offsetHeight<=au){var ao=document.createElement("div");ao.style.clear="both";e.appendChild(ao)}}}if(!I.fixedBackground&&!G){e.style.backgroundAttachment="scroll";ar.style.backgroundAttachment="scroll"}}function c(){R&&R.disconnect();a(S,t);a("mousedown",v);a("keydown",H);a("resize",s);a("load",af)}var V=[];var k=false;var u=Date.now();function ag(ap,ao,at){M(ao,at);if(I.accelerationMax!=1){var e=Date.now();var av=e-u;if(av<I.accelerationDelta){var ar=(1+(50/av))/2;if(ar>1){ar=Math.min(ar,I.accelerationMax);ao*=ar;at*=ar}}u=Date.now()}V.push({x:ao,y:at,lastX:(ao<0)?0.99:-0.99,lastY:(at<0)?0.99:-0.99,start:Date.now()});if(k){return}var au=D();var aq=(ap===au||ap===document.body);if(ap.$scrollBehavior==null&&O(ap)){ap.$scrollBehavior=ap.style.scrollBehavior;ap.style.scrollBehavior="auto"}var an=function(ax){var aw=Date.now();var aE=0;var aD=0;for(var az=0;az<V.length;az++){var aG=V[az];var aF=aw-aG.start;var ay=(aF>=I.animationTime);var aA=(ay)?1:aF/I.animationTime;if(I.pulseAlgorithm){aA=o(aA)}var aC=(aG.x*aA-aG.lastX)>>0;var aB=(aG.y*aA-aG.lastY)>>0;aE+=aC;aD+=aB;aG.lastX+=aC;aG.lastY+=aB;if(ay){V.splice(az,1);az--}}if(aq){window.scrollBy(aE,aD)}else{if(aE){ap.scrollLeft+=aE}if(aD){ap.scrollTop+=aD}}if(!ao&&!at){V=[]}if(V.length){U(an,ap,(1000/I.frameRate+1))}else{k=false;if(ap.$scrollBehavior!=null){ap.style.scrollBehavior=ap.$scrollBehavior;ap.$scrollBehavior=null}}};U(an,ap,0);k=true}function t(ap){if(!b){af()}var aq=ap.target;if(ap.defaultPrevented||ap.ctrlKey){return true}if(r(g,"embed")||(r(aq,"embed")&&/\.pdf/i.test(aq.src))||r(g,"object")||aq.shadowRoot){return true}var an=-ap.wheelDeltaX||ap.deltaX||0;var e=-ap.wheelDeltaY||ap.deltaY||0;if(ad){if(ap.wheelDeltaX&&z(ap.wheelDeltaX,120)){an=-120*(ap.wheelDeltaX/Math.abs(ap.wheelDeltaX))}if(ap.wheelDeltaY&&z(ap.wheelDeltaY,120)){e=-120*(ap.wheelDeltaY/Math.abs(ap.wheelDeltaY))}}if(!an&&!e){e=-ap.wheelDelta||0}if(ap.deltaMode===1){an*=40;e*=40}var ao=Y(aq);if(!ao){if(B&&ah){Object.defineProperty(ap,"target",{value:window.frameElement});return parent.wheel(ap)}return true}if(ak(e)){return true}if(Math.abs(an)>1.2){an*=I.stepSize/120}if(Math.abs(e)>1.2){e*=I.stepSize/120}ag(ao,an,e);ap.preventDefault();q()}function H(e){var au=e.target;var aq=e.ctrlKey||e.altKey||e.metaKey||(e.shiftKey&&e.keyCode!==A.spacebar);if(!document.body.contains(g)){g=document.activeElement}var an=/^(textarea|select|embed|object)$/i;var ao=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||an.test(au.nodeName)||r(au,"input")&&!ao.test(au.type)||r(g,"video")||y(e)||au.isContentEditable||aq){return true}if((r(au,"button")||r(au,"input")&&ao.test(au.type))&&e.keyCode===A.spacebar){return true}if(r(au,"input")&&au.type=="radio"&&T[e.keyCode]){return true}var ap,ay=0,aw=0;var at=Y(g);if(!at){return(B&&ah)?parent.keydown(e):true}var ar=at.clientHeight;if(at==document.body){ar=window.innerHeight}switch(e.keyCode){case A.up:aw=-I.arrowScroll;break;case A.down:aw=I.arrowScroll;break;case A.spacebar:ap=e.shiftKey?1:-1;aw=-ap*ar*0.9;break;case A.pageup:aw=-ar*0.9;break;case A.pagedown:aw=ar*0.9;break;case A.home:if(at==document.body&&document.scrollingElement){at=document.scrollingElement}aw=-at.scrollTop;break;case A.end:var ax=at.scrollHeight-at.scrollTop;var av=ax-ar;aw=(av>0)?av+10:0;break;case A.left:ay=-I.arrowScroll;break;case A.right:ay=I.arrowScroll;break;default:return true}ag(at,ay,aw);e.preventDefault();q()}function v(e){g=e.target}var J=(function(){var e=0;return function(an){return an.uniqueID||(an.uniqueID=e++)}})();var n={};var m={};var ae;var al={};function q(){clearTimeout(ae);ae=setInterval(function(){n=m=al={}},1*1000)}function f(ap,ao,e){var an=e?n:m;for(var aq=ap.length;aq--;){an[J(ap[aq])]=ao}return ao}function i(an,e){return(e?n:m)[J(an)]}function Y(ar){var ao=[];var e=document.body;var an=K.scrollHeight;do{var aq=i(ar,false);if(aq){return f(ao,aq)}ao.push(ar);if(an===ar.scrollHeight){var at=W(K)&&W(e);var ap=at||N(K);if(B&&Z(K)||!B&&ap){return f(ao,D())}}else{if(Z(ar)&&N(ar)){return f(ao,ar)}}}while((ar=ar.parentElement))}function Z(e){return(e.clientHeight+10<e.scrollHeight)}function W(e){var an=getComputedStyle(e,"").getPropertyValue("overflow-y");return(an!=="hidden")}function N(e){var an=getComputedStyle(e,"").getPropertyValue("overflow-y");return(an==="scroll"||an==="auto")}function O(e){var ao=J(e);if(al[ao]==null){var an=getComputedStyle(e,"")["scroll-behavior"];al[ao]=("smooth"==an)}return al[ao]}function j(ao,an,e){window.addEventListener(ao,an,e||false)}function a(ao,an,e){window.removeEventListener(ao,an,e||false)}function r(an,e){return an&&(an.nodeName||"").toLowerCase()===e.toLowerCase()}function M(e,an){e=(e>0)?1:-1;an=(an>0)?1:-1;if(l.x!==e||l.y!==an){l.x=e;l.y=an;V=[];u=0}}if(window.localStorage&&localStorage.SS_deltaBuffer){try{ai=localStorage.SS_deltaBuffer.split(",")}catch(aj){}}function ak(e){if(!e){return}if(!ai.length){ai=[e,e,e]}e=Math.abs(e);ai.push(e);ai.shift();clearTimeout(h);h=setTimeout(function(){try{localStorage.SS_deltaBuffer=ai.join(",")}catch(ap){}},1000);var an=e>120&&F(e);var ao=!F(120)&&!F(100)&&!an;if(e<50){return true}return ao}function z(an,e){return(Math.floor(an/e)==an/e)}function F(e){return(z(ai[0],e)&&z(ai[1],e)&&z(ai[2],e))}function y(ao){var an=ao.target;var e=false;if(document.URL.indexOf("www.youtube.com/watch")!=-1){do{e=(an.classList&&an.classList.contains("html5-video-controls"));if(e){break}}while((an=an.parentNode))}return e}var U=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(ao,an,e){window.setTimeout(ao,e||(1000/60))})})();var L=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var D=(function(){var e=document.scrollingElement;return function(){if(!e){var ap=document.createElement("div");ap.style.cssText="height:10000px;width:1px;";document.body.appendChild(ap);var ao=document.body.scrollTop;var an=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=ao){(e=document.body)}else{(e=document.documentElement)}window.scrollBy(0,-3);document.body.removeChild(ap)}return e}})();function ab(e){var ao,ap,an;e=e*I.pulseScale;if(e<1){ao=e-(1-Math.exp(-e))}else{ap=Math.exp(-1);e-=1;an=1-Math.exp(-e);ao=ap+(an*(1-ap))}return ao*I.pulseNormalize}function o(e){if(e>=1){return 1}if(e<=0){return 0}if(I.pulseNormalize==1){I.pulseNormalize/=ab(1)}return ab(e)}var Q=window.navigator.userAgent;var aa=/Edge/.test(Q);var ah=/chrome/i.test(Q)&&!aa;var d=/safari/i.test(Q)&&!aa;var P=/mobile/i.test(Q);var x=/Windows NT 6.1/i.test(Q)&&/rv:11/i.test(Q);var X=d&&(/Version\/8/i.test(Q)||/Version\/9/i.test(Q));var C=(ah||d||x)&&!P;var w=false;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){w=true}}))}catch(aj){}var E=w?{passive:false}:false;var S="onwheel" in document.createElement("div")?"wheel":"mousewheel";if(S&&C){j(S,t,E);j("mousedown",v);j("load",af)}function p(an){for(var e in an){if(ac.hasOwnProperty(e)){I[e]=an[e]}}}p.destroy=c;if(window.SmoothScrollOptions){p(window.SmoothScrollOptions)}if(typeof define==="function"&&define.amd){define(function(){return p})}else{if("object"==typeof exports){module.exports=p}else{window.SmoothScroll=p}}})();