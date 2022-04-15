import{i as B,c as Ee,e as Se,a as Le,b as Te,d as Ae,f as fe,h as de,g as Pe,j as Re,k as ke,l as he,m as Ne,s as De,n as S,o as pe,r as _e,p as I,t as me,w as He,u as x,v as z,x as f,y as d,z as l,F as E,A as k,B as _,C as M,D as A,E as v,G as T,H as Y,I as N,J as C,K as X,L as G,M as Oe,N as q,O as V}from"./framework.05cfc0c7.js";const Be="http://www.w3.org/2000/svg",R=typeof document!="undefined"?document:null,ee=R&&R.createElement("template"),Me={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e?R.createElementNS(Be,t):R.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>R.createTextNode(t),createComment:t=>R.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>R.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,o,a){const i=n?n.previousSibling:e.lastChild;if(o&&(o===a||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{ee.innerHTML=s?`<svg>${t}</svg>`:t;const c=ee.content;if(s){const r=c.firstChild;for(;r.firstChild;)c.appendChild(r.firstChild);c.removeChild(r)}e.insertBefore(c,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function je(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ie(t,e,n){const s=t.style,o=B(n);if(n&&!o){for(const a in n)K(s,a,n[a]);if(e&&!B(e))for(const a in e)n[a]==null&&K(s,a,"")}else{const a=s.display;o?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=a)}}const te=/\s*!important$/;function K(t,e,n){if(fe(n))n.forEach(s=>K(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=qe(t,e);te.test(n)?t.setProperty(de(s),n.replace(te,""),"important"):t[s]=n}}const ne=["Webkit","Moz","ms"],F={};function qe(t,e){const n=F[e];if(n)return n;let s=Pe(e);if(s!=="filter"&&s in t)return F[e]=s;s=Re(s);for(let o=0;o<ne.length;o++){const a=ne[o]+s;if(a in t)return F[e]=a}return e}const se="http://www.w3.org/1999/xlink";function Fe(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(se,e.slice(6,e.length)):t.setAttributeNS(se,e,n);else{const a=ke(e);n==null||a&&!he(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function We(t,e,n,s,o,a,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,o,a),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const r=n==null?"":n;(t.value!==r||t.tagName==="OPTION")&&(t.value=r),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const r=typeof t[e];r==="boolean"?n=he(n):n==null&&r==="string"?(n="",c=!0):r==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[ge,Ue]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let J=0;const ze=Promise.resolve(),Ve=()=>{J=0},Ke=()=>J||(ze.then(Ve),J=ge());function Je(t,e,n,s){t.addEventListener(e,n,s)}function Ye(t,e,n,s){t.removeEventListener(e,n,s)}function Xe(t,e,n,s,o=null){const a=t._vei||(t._vei={}),i=a[e];if(s&&i)i.value=s;else{const[c,r]=Ge(e);if(s){const u=a[e]=Qe(s,o);Je(t,c,u,r)}else i&&(Ye(t,c,i,r),a[e]=void 0)}}const oe=/(?:Once|Passive|Capture)$/;function Ge(t){let e;if(oe.test(t)){e={};let n;for(;n=t.match(oe);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[de(t.slice(2)),e]}function Qe(t,e){const n=s=>{const o=s.timeStamp||ge();(Ue||o>=n.attached-1)&&Ne(Ze(s,n.value),e,5,[s])};return n.value=t,n.attached=Ke(),n}function Ze(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const ae=/^on[a-z]/,et=(t,e,n,s,o=!1,a,i,c,r)=>{e==="class"?je(t,s,o):e==="style"?Ie(t,n,s):Le(e)?Te(e)||Xe(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tt(t,e,s,o))?We(t,e,s,a,i,c,r):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fe(t,e,s,o))};function tt(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ae.test(e)&&Ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ae.test(e)&&B(n)?!1:e in t}const nt=Se({patchProp:et},Me);let W,ie=!1;function st(){return W=ie?W:Ee(nt),ie=!0,W}const ot=(...t)=>{const e=st().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=at(s);if(o)return n(o,!0,o instanceof SVGElement)},e};function at(t){return B(t)?document.querySelector(t):t}var it='{"lang":"zh-CN","title":"VitePress","description":"A VitePress site","base":"/vitepress-theme-sakura/","head":[],"themeConfig":{"name":"flaribbit","cover":"https://tva3.sinaimg.cn/large/0072Vf1pgy1foxk6pmjkjj31kw0w0b0v.jpg","social":[{"icon":"fa-github","url":"github.com"},{"icon":"fa-twitter","url":"twitter.com"},{"icon":"fa-weibo","url":"weibo.com"}],"waline":"https://blog-waline-e7jqcxb9s-flaribbit.vercel.app/"},"locales":{},"langs":{},"scrollOffset":90}';const rt=/^https?:/i,y=typeof window!="undefined";function lt(t,e){e.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of e)if(t.startsWith(n))return n}function re(t,e){const n=lt(e,Object.keys(t));return n?t[n]:void 0}function ct(t){const{locales:e}=t.themeConfig||{},n=t.locales;return e&&n?Object.keys(e).reduce((s,o)=>(s[o]={label:e[o].label,lang:n[o].lang},s),{}):{}}function ut(t,e){e=ft(t,e);const n=re(t.locales||{},e),s=re(t.themeConfig.locales||{},e);return Object.assign({},t,n,{themeConfig:Object.assign({},t.themeConfig,s,{locales:{}}),lang:(n||t).lang,locales:{},langs:ct(t)})}function ft(t,e){if(!y)return e;const n=t.base,s=n.endsWith("/")?n.slice(0,-1):n;return e.slice(s.length)}const ve=Symbol(),Q=De(dt(it));function dt(t){return JSON.parse(t)}function ht(t){const e=S(()=>ut(Q.value,t.path));return{site:e,theme:S(()=>e.value.themeConfig),page:S(()=>t.data),frontmatter:S(()=>t.data.frontmatter),lang:S(()=>e.value.lang),localePath:S(()=>{const{langs:n,lang:s}=e.value,o=Object.keys(n).find(a=>n[a].lang===s);return _t(o||"/")}),title:S(()=>t.data.title?t.data.title+" | "+e.value.title:e.value.title),description:S(()=>t.data.description||e.value.description)}}function D(){const t=pe(ve);if(!t)throw new Error("vitepress data not properly injected in app");return t}function pt(t,e){return`${t}${e}`.replace(/\/+/g,"/")}function _t(t){return rt.test(t)?t:pt(Q.value.base,t)}function we(t){let e=t.replace(/\.html$/,"");if(e=decodeURIComponent(e),e.endsWith("/")&&(e+="index"),y){const n="/vitepress-theme-sakura/";e=e.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[e.toLowerCase()];e=`${n}assets/${e}.${s}.js`}else e=`./${e.slice(1).replace(/\//g,"_")}.md.js`;return e}const be=Symbol(),le="http://a.com",mt=()=>({path:"/",component:null,data:{frontmatter:{}}});function gt(t,e){const n=_e(mt());function s(i=y?location.href:"/"){const c=new URL(i,le);return!c.pathname.endsWith("/")&&!c.pathname.endsWith(".html")&&(c.pathname+=".html",i=c.pathname+c.search+c.hash),y&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",i)),a(i)}let o=null;async function a(i,c=0){const r=new URL(i,le),u=o=r.pathname;try{let g=t(u);if("then"in g&&typeof g.then=="function"&&(g=await g),o===u){o=null;const{default:h,__pageData:w}=g;if(!h)throw new Error(`Invalid route component: ${h}`);n.path=u,n.component=I(h),n.data=I(JSON.parse(w)),y&&me(()=>{if(r.hash&&!c){let m=null;try{m=document.querySelector(decodeURIComponent(r.hash))}catch(b){console.warn(b)}if(m){ce(m,r.hash);return}}window.scrollTo(0,c)})}}catch(g){g.message.match(/fetch/)||console.error(g),o===u&&(o=null,n.path=u,n.component=e?I(e):null)}}return y&&(window.addEventListener("click",i=>{const c=i.target.closest("a");if(c){const{href:r,protocol:u,hostname:g,pathname:h,hash:w,target:m}=c,b=window.location,H=h.match(/\.\w+$/);!i.ctrlKey&&!i.shiftKey&&!i.altKey&&!i.metaKey&&m!=="_blank"&&u===b.protocol&&g===b.hostname&&!(H&&H[0]!==".html")&&(i.preventDefault(),h===b.pathname?w&&w!==b.hash&&(history.pushState(null,"",w),window.dispatchEvent(new Event("hashchange")),ce(c,w,c.classList.contains("header-anchor"))):s(r))}},{capture:!0}),window.addEventListener("popstate",i=>{a(location.href,i.state&&i.state.scrollPosition||0)}),window.addEventListener("hashchange",i=>{i.preventDefault()})),{route:n,go:s}}function vt(){const t=pe(be);if(!t)throw new Error("useRouter() is called without provider.");return t}function j(){return vt().route}function ce(t,e,n=!1){let s=null;try{s=t.classList.contains(".header-anchor")?t:document.querySelector(decodeURIComponent(e))}catch(o){console.warn(o)}if(s){let o=Q.value.scrollOffset;typeof o=="string"&&(o=document.querySelector(o).getBoundingClientRect().bottom+24);const a=parseInt(window.getComputedStyle(s).paddingTop,10),i=window.scrollY+s.getBoundingClientRect().top-o+a;!n||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({left:0,top:i,behavior:"smooth"})}}function wt(t,e){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const i=[],c=Math.min(n.length,a.length);for(let r=0;r<c;r++){let u=n[r];const[g,h,w=""]=a[r];if(u.tagName.toLocaleLowerCase()===g){for(const m in h)u.getAttribute(m)!==h[m]&&u.setAttribute(m,h[m]);for(let m=0;m<u.attributes.length;m++){const b=u.attributes[m].name;b in h||u.removeAttribute(b)}u.innerHTML!==w&&(u.innerHTML=w)}else document.head.removeChild(u),u=ue(a[r]),document.head.append(u);i.push(u)}n.slice(c).forEach(r=>document.head.removeChild(r)),a.slice(c).forEach(r=>{const u=ue(r);document.head.appendChild(u),i.push(u)}),n=i};He(()=>{const a=t.data,i=e.value,c=a&&a.title,r=a&&a.description,u=a&&a.frontmatter.head;document.title=(c?c+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",r||i.description),o([...u?yt(u):[]])})}function ue([t,e,n]){const s=document.createElement(t);for(const o in e)s.setAttribute(o,e[o]);return n&&(s.innerHTML=n),s}function bt(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function yt(t){return t.filter(e=>!bt(e))}const xt=x({name:"VitePressContent",setup(){const t=j();return()=>z("div",{style:{position:"relative"}},[t.component?z(t.component):null])}});const $t=l("span",{class:"brand"},null,-1),Ct={class:"container"},Et=l("span",{class:"nav"},null,-1),St={class:"menu"},Lt=["href"],Tt=l("span",null,[l("span",{class:"search"},[l("i",{class:"fa fa-search"})])],-1),At=x({setup(t){const e=D().site.value.base,n=[{icon:"fa-home",name:"\u9996\u9875",url:""},{icon:"fa-tag",name:"\u6807\u7B7E",url:"tags/"},{icon:"fa-leaf",name:"\u5173\u4E8E",url:"readme.html"}];return(s,o)=>(f(),d("header",null,[$t,l("span",Ct,[Et,l("span",St,[l("ul",null,[(f(),d(E,null,k(n,a=>l("li",null,[l("a",{href:_(e)+a.url},[l("span",null,[l("i",{class:M(["fa",a.icon])},null,2),A(" "+v(a.name),1)])],8,Lt)])),64))])])]),Tt]))}});const Pt=["data-text"],Rt=x({props:{text:null},setup(t){return(e,n)=>(f(),d("div",{class:"glitch","data-text":t.text},v(t.text),9,Pt))}});const kt=l("div",{class:"wave1"},null,-1),Nt=l("div",{class:"wave2"},null,-1),Dt={class:"info"},Ht={class:"box"},Ot={class:"text"},Bt=l("i",{class:"fa fa-quote-left"},null,-1),Mt=l("i",{class:"fa fa-quote-right"},null,-1),jt={class:"contact"},It=["href"],qt=x({setup(t){const e=D().theme.value,n=e.hello||"Hello, sakura",s=e.motto||"You got to put the past behind you before you can move on.",o=e.social||[],a=e.cover;return(i,c)=>(f(),d("div",{class:"banner",style:Y(`background-image: url(${_(a)})`)},[kt,Nt,l("div",Dt,[T(Rt,{text:_(n)},null,8,["text"]),l("span",Ht,[l("p",Ot,[Bt,A(" "+v(_(s))+" ",1),Mt]),l("div",jt,[(f(!0),d(E,null,k(_(o),r=>(f(),d("a",{href:r.url,"aria-label":"icon"},[l("i",{class:M(["fab",r.icon])},null,2)],8,It))),256))])])])],4))}}),L=JSON.parse(`[{"title":"\u672C\u9875\u9762\u7684 github \u4ED3\u5E93\u94FE\u63A5","href":"posts/comming-soon.html","date":"2022-02-11","excerpt":"<p><a href=\\"https://github.com/flaribbit/vitepress-theme-sakura\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">\u70B9\u51FB\u8FD9\u91CC</a></p>\\n<p>\u8FD8\u5728\u6478\u9C7C\u4E2D\uFF0C\u5F53\u524D\u9884\u89C8\u4E0D\u4EE3\u8868\u6700\u7EC8\u6548\u679C</p>\\n"},{"title":"What is VitePress?","href":"posts/doc1.html","date":"2022-01-01","tags":["vue","vue3","vitepress"],"excerpt":"<p>VitePress is <a href=\\"https://vuepress.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">VuePress</a>' little brother, built on top of <a href=\\"https://github.com/vitejs/vite\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vite</a>.</p>\\n"},{"title":"\u6D4B\u8BD5\u6587\u6863","href":"posts/doc2.html","date":"2022-04-15","tags":["\u6D4B\u8BD5","\u7B97\u6CD5"],"cover":"https://tva2.sinaimg.cn/large/0060lm7Tly1fpx1skrabaj31hc0u01kx.jpg","excerpt":""}]`);function Ft(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),s=!0,setTimeout(()=>{s=!1},e))}}const Wt={id:"waline"},Ut=x({setup(t,{expose:e}){let n=null;return N(()=>{const o=D().site.value.themeConfig.waline;if(!o){console.error("\u672A\u914D\u7F6Ewaline\u670D\u52A1\u7AEF\u5730\u5740");return}n=Waline({el:"#waline",serverURL:o})}),e({update:()=>{n&&n.update()}}),(o,a)=>(f(),d("div",Wt))}});const zt={class:"toc"},Vt=["href"],Kt=x({props:{data:null,active:null},setup(t){return(e,n)=>(f(),d("div",zt,[l("ol",null,[(f(!0),d(E,null,k(t.data,(s,o)=>(f(),d("li",{class:M(["h"+s.level,{active:t.active===o}])},[l("a",{href:"#"+s.slug},v(s.title),9,Vt)],2))),256))])]))}});const Jt={class:"titlebox"},Yt={class:"title"},Xt={class:"info"},Gt={class:"article"},Qt={class:"content nav"},Zt=["href"],en=l("i",{class:"fa fa-angle-left"},null,-1),tn=["href"],nn=l("i",{class:"fa fa-angle-right"},null,-1),sn=x({setup(t){const e=D(),n=e.site.value.base,s=j(),o=C(""),a=e.theme.value.name,i=C(""),c=C(0),r=C(""),u=C(0),g=C(),h=_e([{href:"",text:"",show:!0},{href:"",text:"",show:!0}]),w=C(0),m=()=>{var $;w.value=L.findIndex(P=>P.href==s.path.replace(n,"")),o.value=e.page.value.title,r.value=`background-image: url(${e.page.value.frontmatter.cover||"https://tva4.sinaimg.cn/large/0060lm7Tly1ftg6omnqa4j31hc0u010z.jpg"})`,i.value=new Date(e.page.value.lastUpdated).toLocaleDateString("sv-SE"),($=g.value)==null||$.update();let p=w.value;p-1>=0?(h[0].href=n+L[p-1].href,h[0].text=L[p-1].title,h[0].show=!0):h[0].show=!1,p+1<L.length?(h[1].href=n+L[p+1].href,h[1].text=L[p+1].title,h[1].show=!0):h[1].show=!1,typeof window!="undefined"&&me().then(()=>{Ce()})};m(),X(s,m);const b=()=>{const p=e.page.value.headers;if(p.length!=0){for(let $=0;$<p.length;$++){const P=document.getElementById(p[$].slug);if((P==null?void 0:P.getBoundingClientRect()).top>200){let Z=" ";$>0&&(u.value=$-1,Z="#"+p[$-1].slug),history.replaceState(null,document.title,Z);return}}u.value=p.length-1,history.replaceState(null,document.title,"#"+p[p.length-1].slug)}},H=Ft(b,300),Ce=()=>{if(!renderMathInElement)return;const p=document.querySelector(".article .content");!p||renderMathInElement(p,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})};return N(()=>{b(),window.addEventListener("scroll",H)}),G(()=>{window.removeEventListener("scroll",H)}),(p,$)=>{const P=Oe("Content");return f(),d(E,null,[l("div",{class:"abanner",style:Y(r.value)},[l("div",Jt,[l("h1",Yt,v(o.value),1),l("div",Xt,v(_(a))+" \xB7 \u66F4\u65B0\u4E8E "+v(i.value)+" \xB7 "+v(c.value)+" \u6B21\u9605\u8BFB",1)])],4),l("div",Gt,[T(P,{class:"content"}),l("div",Qt,[l("span",null,[_(h)[0].show?(f(),d("a",{key:0,href:_(h)[0].href},[en,A(" "+v(_(h)[0].text),1)],8,Zt)):q("",!0)]),l("span",null,[_(h)[1].show?(f(),d("a",{key:0,href:_(h)[1].href},[A(v(_(h)[1].text)+" ",1),nn],8,tn)):q("",!0)])]),w.value!=-1?(f(),V(Ut,{key:0,ref_key:"waline",ref:g},null,512)):q("",!0),T(Kt,{data:_(e).page.value.headers,active:u.value},null,8,["data","active"])])],64)}}});const on={class:"bloglist"},an=l("div",{class:"section"},[l("i",{class:"fa-solid fa-book"}),A(" \u6587\u7AE0\u5217\u8868 "),l("hr")],-1),rn={class:"card"},ln=l("div",{class:"image"},null,-1),cn={class:"info"},un={class:"date"},fn=l("i",{class:"fa fa-clock"},null,-1),dn=["href"],hn={class:"title"},pn=["innerHTML"],_n={key:0,class:"tags"},mn=["onClick"],gn=l("i",{class:"fa fa-tag"},null,-1),vn={key:1,class:"tags"},wn=["href"],bn=l("i",{class:"fa fa-tag"},null,-1),ye=x({props:{posts:null,click:null},setup(t){const e=D().site.value.base;return(n,s)=>(f(),d("div",on,[an,(f(!0),d(E,null,k(t.posts,o=>(f(),d("div",rn,[ln,l("div",cn,[l("div",un,[fn,A(" \u53D1\u5E03\u4E8E "+v(o.date),1)]),l("a",{href:_(e)+o.href},[l("div",hn,v(o.title),1)],8,dn),l("div",{class:"content",innerHTML:o.excerpt},null,8,pn),t.click?(f(),d("div",_n,[(f(!0),d(E,null,k(o.tags,a=>(f(),d("a",{href:"#",onClick:i=>t.click(a)},[gn,A(" "+v(a),1)],8,mn))),256))])):(f(),d("div",vn,[(f(!0),d(E,null,k(o.tags,a=>(f(),d("a",{href:_(e)+"tags/?q="+a},[bn,A(" "+v(a),1)],8,wn))),256))]))])]))),256))]))}});const yn={class:"tag"},xn={class:"article"},$n=["onClick"],Cn=x({setup(t){const e=C(null),n={},s=o=>{e.value=o,history.replaceState(null,document.title,"?q="+o)};for(const o of L)if(!!o.tags)for(const a of o.tags)n[a]||(n[a]=[]),n[a].push(o);return N(()=>{e.value=new URLSearchParams(location.search).get("q")}),(o,a)=>(f(),d("div",yn,[l("div",xn,[(f(),d(E,null,k(n,(i,c)=>l("a",{class:M(["item",{active:e.value===c}]),href:"#",onClick:r=>s(c)},[l("span",null,v(c),1)],10,$n)),64))]),T(ye,{posts:e.value?n[e.value]:[],click:s},null,8,["posts"])]))}});const En=x({setup(t){const e="top: -900px",n=C(e),s=()=>{window.scrollY>200?window.innerWidth>720?n.value=`top: ${Math.min(window.innerHeight-968,0)}px`:n.value="top: -640px":n.value=e},o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return N(()=>{window.addEventListener("scroll",s),s()}),G(()=>{window.removeEventListener("scroll",s)}),(a,i)=>(f(),d("a",{href:"#",class:"totop",onClick:o,style:Y(n.value),"aria-label":"to-top"},null,4))}});const Sn=l("aside",null,null,-1),Ln=x({setup(t){const e=D().site.value.base,n=j();n.path.startsWith(e)||(n.path=e.slice(0,-1)+n.path);const s=S(()=>n.path.replace(e,"").replace("index.html",""));return(o,a)=>(f(),d(E,null,[T(At),Sn,l("main",null,[T(En),_(s)===""?(f(),d(E,{key:0},[T(qt),T(ye,{posts:_(L)},null,8,["posts"])],64)):_(s)==="tags/"?(f(),V(Cn,{key:1})):(f(),V(sn,{key:2}))])],64))}});var xe={Layout:Ln,NotFound:()=>"custom 404",enhanceApp({app:t,router:e,siteData:n}){}};const U=new Set,$e=()=>document.createElement("link"),Tn=t=>{const e=$e();e.rel="prefetch",e.href=t,document.head.appendChild(e)},An=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let O;const Pn=y&&(O=$e())&&O.relList&&O.relList.supports&&O.relList.supports("prefetch")?Tn:An;function Rn(){if(!y||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const c=i.target;n.unobserve(c);const{pathname:r}=c;if(!U.has(r)){U.add(r);const u=we(r);Pn(u)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:i,hostname:c,pathname:r}=a,u=r.match(/\.\w+$/);u&&u[0]!==".html"||i!=="_blank"&&c===location.hostname&&(r!==location.pathname?n.observe(a):U.add(r))})})};N(s);const o=j();X(()=>o.path,s),G(()=>{n&&n.disconnect()})}const kn=x({setup(t,{slots:e}){const n=C(!1);return N(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Nn=xe.NotFound||(()=>"404 Not Found"),Dn={name:"VitePressApp",setup(){const{site:t}=D();return N(()=>{X(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),Rn(),()=>z(xe.Layout)}};function Hn(){const t=Bn(),e=On();e.provide(be,t);const n=ht(t.route);return e.provide(ve,n),y&&wt(t.route,n.site),e.component("Content",xt),e.component("ClientOnly",kn),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),{app:e,router:t}}function On(){return ot(Dn)}function Bn(){let t=y,e;return gt(n=>{let s=we(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),y?(t=!1,import(s)):require(s)},Nn)}if(y){const{app:t,router:e}=Hn();e.go().then(()=>{t.mount("#app")})}export{Hn as createApp};
