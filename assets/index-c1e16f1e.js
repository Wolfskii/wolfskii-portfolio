var ke=Object.defineProperty;var je=(t,e,n)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Z=(t,e,n)=>(je(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function b(){}function _e(t){return t()}function re(){return Object.create(null)}function Y(t){t.forEach(_e)}function ye(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let U;function K(t,e){return U||(U=document.createElement("a")),U.href=e,t===U.href}function Se(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function _(){return W(" ")}function I(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function we(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function te(t,e,n){t.classList[n?"add":"remove"](e)}let N;function O(t){N=t}function Ce(){if(!N)throw new Error("Function called outside component initialization");return N}function Ae(t){Ce().$$.on_mount.push(t)}const q=[],ae=[];let z=[];const ce=[],De=Promise.resolve();let ne=!1;function Ie(){ne||(ne=!0,De.then(xe))}function oe(t){z.push(t)}const ee=new Set;let L=0;function xe(){if(L!==0)return;const t=N;do{try{for(;L<q.length;){const e=q[L];L++,O(e),Ee(e.$$)}}catch(e){throw q.length=0,L=0,e}for(O(null),q.length=0,L=0;ae.length;)ae.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];ee.has(n)||(ee.add(n),n())}z.length=0}while(q.length);for(;ce.length;)ce.pop()();ne=!1,ee.clear(),O(t)}function Ee(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function He(t){const e=[],n=[];z.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),z=e}const V=new Set;let Le;function S(t,e){t&&t.i&&(V.delete(t),t.i(e))}function B(t,e,n,l){if(t&&t.o){if(V.has(t))return;V.add(t),Le.c.push(()=>{V.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const Be=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Be];function T(t){t&&t.c()}function M(t,e,n,l){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),l||oe(()=>{const r=t.$$.on_mount.map(_e).filter(ye);t.$$.on_destroy?t.$$.on_destroy.push(...r):Y(r),t.$$.on_mount=[]}),i.forEach(oe)}function C(t,e){const n=t.$$;n.fragment!==null&&(He(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(q.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(t,e,n,l,o,i,r,s=[-1]){const a=N;O(t);const c=t.$$={fragment:null,ctx:[],props:i,update:b,not_equal:o,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:re(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(g,m,...v)=>{const u=v.length?v[0]:m;return c.ctx&&o(c.ctx[g],c.ctx[g]=u)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](u),h&&Te(t,g)),m}):[],c.update(),h=!0,Y(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const g=Me(e.target);c.fragment&&c.fragment.l(g),g.forEach($)}else c.fragment&&c.fragment.c();e.intro&&S(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),xe()}O(a)}class H{$destroy(){C(this,1),this.$destroy=b}$on(e,n){if(!ye(n))return b;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qe="/assets/sparkles-0843a6fe.svg",de="/assets/clickcomp-38c755f5.mp3";class We{constructor(){Z(this,"clickSound",de);Z(this,"clickAudio",new Audio(de))}click(){this.clickAudio.play()}}const A=new We;function ze(t){let e,n,l,o,i,r,s,a,c,h,g,m,v;return{c(){e=p("section"),n=p("div"),l=p("div"),o=p("img"),r=_(),s=p("h1"),s.textContent="Knock, knock!",a=_(),c=p("h2"),c.textContent="Who's there? A full-stack web developer!",h=_(),g=p("button"),g.textContent="Click me",K(o.src,i=qe)||f(o,"src",i),f(o,"alt","sparkles"),f(o,"class","svelte-v03p6n"),f(l,"class","hero-heading-image svelte-v03p6n"),f(s,"class","hero-heading svelte-v03p6n"),f(c,"class","hero-subheading svelte-v03p6n"),f(g,"class","shadow wobble"),f(n,"class","hero-container svelte-v03p6n"),f(e,"class","hero border-bottom svelte-v03p6n")},m(u,x){k(u,e,x),d(e,n),d(n,l),d(l,o),d(n,r),d(n,s),d(n,a),d(n,c),d(n,h),d(n,g),m||(v=I(g,"click",t[0]),m=!0)},p:b,i:b,o:b,d(u){u&&$(e),m=!1,v()}}}function Pe(t){return[()=>A.click()]}class Ge extends H{constructor(e){super(),E(this,e,Pe,ze,D,{})}}const Fe="/assets/svelte-a39f39b7.svg";function fe(t,e,n){const l=t.slice();return l[6]=e[n],l}function Oe(t){let e,n,l,o;return{c(){e=p("img"),K(e.src,n=Fe)||f(e,"src",n),f(e,"alt","Logo"),f(e,"class","svelte-1lz6fr")},m(i,r){k(i,e,r),l||(o=I(e,"click",t[4]),l=!0)},p:b,d(i){i&&$(e),l=!1,o()}}}function ue(t){let e,n,l=t[6].label+"",o,i,r,s;return{c(){e=p("li"),n=p("a"),o=W(l),i=_(),f(n,"href",t[6].href),f(n,"class","svelte-1lz6fr"),f(e,"class","svelte-1lz6fr")},m(a,c){k(a,e,c),d(e,n),d(n,o),d(e,i),r||(s=I(e,"click",t[5]),r=!0)},p:b,d(a){a&&$(e),r=!1,s()}}}function Ne(t){let e,n,l;return{c(){e=p("button"),e.textContent=`${Ue}`,f(e,"class","action-button svelte-1lz6fr")},m(o,i){k(o,e,i),n||(l=I(e,"click",t[3]),n=!0)},p:b,d(o){o&&$(e),n=!1,l()}}}function Re(t){let e,n,l,o,i,r,s,a,c,h,g,m=Oe(t),v=t[1],u=[];for(let y=0;y<v.length;y+=1)u[y]=ue(fe(t,v,y));let x=t[3]&&window.innerWidth>=768&&Ne(t);return{c(){e=p("header"),n=p("div"),m&&m.c(),l=_(),o=p("nav"),i=p("ul");for(let y=0;y<u.length;y+=1)u[y].c();r=_(),s=p("button"),s.innerHTML=`<span class="svelte-1lz6fr"></span> 
			<span class="svelte-1lz6fr"></span> 
			<span class="svelte-1lz6fr"></span>`,a=_(),c=p("div"),x&&x.c(),f(n,"class","header-left svelte-1lz6fr"),f(i,"class","svelte-1lz6fr"),te(i,"open",t[0]),f(s,"class","menu-toggle svelte-1lz6fr"),f(o,"class","header-center svelte-1lz6fr"),f(c,"class","header-right svelte-1lz6fr"),f(e,"class","border-bottom svelte-1lz6fr")},m(y,j){k(y,e,j),d(e,n),m&&m.m(n,null),d(e,l),d(e,o),d(o,i);for(let w=0;w<u.length;w+=1)u[w]&&u[w].m(i,null);d(o,r),d(o,s),d(e,a),d(e,c),x&&x.m(c,null),h||(g=I(s,"click",t[2]),h=!0)},p(y,[j]){if(j&2){v=y[1];let w;for(w=0;w<v.length;w+=1){const R=fe(y,v,w);u[w]?u[w].p(R,j):(u[w]=ue(R),u[w].c(),u[w].m(i,null))}for(;w<u.length;w+=1)u[w].d(1);u.length=v.length}j&1&&te(i,"open",y[0]),y[3]&&window.innerWidth>=768&&x.p(y,j)},i:b,o:b,d(y){y&&$(e),m&&m.d(),J(u,y),x&&x.d(),h=!1,g()}}}let Ue="Kontakt";function Ve(t,e,n){let l=[{label:"Start",href:"#"},{label:"Om mig",href:"#"},{label:"Projekt",href:"#"},{label:"Erfarenheter",href:"#"},{label:"Färdigheter",href:"#"},{label:"Kontakta mig",href:"#"}],o=!1;function i(){A.click(),console.log("Toggle menu clicked"),n(0,o=!o)}function r(c){A.click(),console.log("Action button clicked",c)}return[o,l,i,r,()=>A.click(),()=>A.click()]}class Ye extends H{constructor(e){super(),E(this,e,Ve,Re,D,{})}}const G="/assets/spotify-6235a031.png",F="/assets/dell-d53c8859.png";function pe(t,e,n){const l=t.slice();return l[7]=e[n],l}function he(t){let e,n,l,o;return{c(){e=p("div"),n=p("img"),o=_(),K(n.src,l=t[7].logo)||f(n,"src",l),f(n,"alt",t[7].name),f(n,"class","svelte-2y45t2"),f(e,"class","client-logo svelte-2y45t2")},m(i,r){k(i,e,r),d(e,n),d(e,o)},p:b,d(i){i&&$(e)}}}function Ke(t){let e,n,l=t[0],o=[];for(let i=0;i<l.length;i+=1)o[i]=he(pe(t,l,i));return{c(){e=p("div"),n=p("div");for(let i=0;i<o.length;i+=1)o[i].c();f(n,"class","client-logos-container svelte-2y45t2"),f(e,"class","client-logos border-bottom svelte-2y45t2")},m(i,r){k(i,e,r),d(e,n);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(n,null)},p(i,[r]){if(r&1){l=i[0];let s;for(s=0;s<l.length;s+=1){const a=pe(i,l,s);o[s]?o[s].p(a,r):(o[s]=he(a),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}},i:b,o:b,d(i){i&&$(e),J(o,i)}}}function Je(t){const e=[{name:"Company A",logo:G},{name:"Company B",logo:F},{name:"Company C",logo:G},{name:"Company D",logo:F},{name:"Company E",logo:G},{name:"Company F",logo:F},{name:"Company G",logo:G},{name:"Company H",logo:F},{name:"Company I",logo:G},{name:"Company J",logo:F}];let n=0,l=null;function o(){n++;const s=document.querySelector(".client-logos-container"),a=document.querySelector(".client-logo");if(a instanceof HTMLElement){const c=(a==null?void 0:a.offsetWidth)||0,h=c*e.length;n>=h?(n=0,e.push(e.shift())):n<-c&&(n=h-c,e.unshift(e.pop()))}s instanceof HTMLElement&&(s.style.transform=`translateX(-${n}px)`),l=requestAnimationFrame(o)}function i(){cancelAnimationFrame(l)}function r(){o()}return Ae(()=>{const s=document.querySelector(".client-logos-container"),a=document.querySelector(".client-logo");s instanceof HTMLElement&&a instanceof HTMLElement&&(s.style.width=`${a.offsetWidth*e.length}px`,n=window.innerWidth-s.offsetWidth),s instanceof HTMLElement&&(s.addEventListener("mouseenter",i),s.addEventListener("mouseleave",r)),o()}),[e]}class Xe extends H{constructor(e){super(),E(this,e,Je,Ke,D,{})}}const Qe="/assets/selfie-2bdbe02d.jpg";function Ze(t){let e,n,l,o,i,r,s;return{c(){e=p("div"),n=p("div"),l=p("div"),o=p("img"),r=_(),s=p("div"),s.innerHTML=`<h2 class="svelte-129v437">Who am I?</h2> 
      <p class="svelte-129v437">As a full-stack developer, I am passionate about creating beautiful and functional web applications that not only meet my clients&#39; needs, but also leave a lasting impact on their users. I believe in the power of design and innovation to connect people across the world, and I am dedicated to using my skills to help make that vision a reality.</p>`,K(o.src,i=Qe)||f(o,"src",i),f(o,"alt","Portrait Selfie"),f(o,"class","svelte-129v437"),f(l,"class","about-me-image shadow wobble svelte-129v437"),f(s,"class","about-me-text svelte-129v437"),f(n,"class","about-me-content svelte-129v437"),f(e,"class","about-me border-bottom svelte-129v437")},m(a,c){k(a,e,c),d(e,n),d(n,l),d(l,o),d(n,r),d(n,s)},p:b,i:b,o:b,d(a){a&&$(e)}}}class et extends H{constructor(e){super(),E(this,e,null,Ze,D,{})}}function me(t,e,n){const l=t.slice();return l[2]=e[n],l}function ge(t){let e,n,l,o,i,r=t[2].name+"",s,a,c,h,g,m,v;return{c(){e=p("div"),n=p("a"),l=p("div"),o=p("div"),i=p("span"),s=W(r),a=_(),c=p("a"),h=p("div"),h.textContent="GitHub",g=_(),f(i,"class","project-name svelte-864y04"),f(h,"class","project-repo svelte-864y04"),f(c,"href",t[2].repo),f(o,"class","project-footer svelte-864y04"),f(l,"class","project-img svelte-864y04"),we(l,"background-image","url('"+t[2].img+"')"),f(n,"href",t[2].link),f(e,"class","project shadow wobble svelte-864y04")},m(u,x){k(u,e,x),d(e,n),d(n,l),d(l,o),d(o,i),d(i,s),d(o,a),d(o,c),d(c,h),d(e,g),m||(v=I(e,"click",t[1]),m=!0)},p:b,d(u){u&&$(e),m=!1,v()}}}function tt(t){let e,n,l,o,i=t[0],r=[];for(let s=0;s<i.length;s+=1)r[s]=ge(me(t,i,s));return{c(){e=p("div"),n=p("h2"),n.textContent="My projects",l=_(),o=p("div");for(let s=0;s<r.length;s+=1)r[s].c();f(o,"class","projects svelte-864y04"),f(e,"class","projects-container border-bottom svelte-864y04")},m(s,a){k(s,e,a),d(e,n),d(e,l),d(e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(o,null)},p(s,[a]){if(a&1){i=s[0];let c;for(c=0;c<i.length;c+=1){const h=me(s,i,c);r[c]?r[c].p(h,a):(r[c]=ge(h),r[c].c(),r[c].m(o,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}},i:b,o:b,d(s){s&&$(e),J(r,s)}}}function nt(t){return[[{name:"Project 1",img:"https://images.unsplash.com/photo-1683016390026-b5087a17e21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project1",repo:"https://github.com/example/project1"},{name:"Project 2",img:"https://images.unsplash.com/photo-1682862516196-0ed3cb7d8f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",link:"https://example.com/project2",repo:"https://github.com/example/project2"},{name:"Project 3",img:"https://images.unsplash.com/photo-1682861941586-f90d0ea62cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project3",repo:"https://github.com/example/project3"},{name:"Project 4",img:"https://images.unsplash.com/photo-1683016390026-b5087a17e21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project1",repo:"https://github.com/example/project1"},{name:"Project 5",img:"https://images.unsplash.com/photo-1682862516196-0ed3cb7d8f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",link:"https://example.com/project2",repo:"https://github.com/example/project2"},{name:"Project 6",img:"https://images.unsplash.com/photo-1682861941586-f90d0ea62cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project3",repo:"https://github.com/example/project3"}],()=>A.click()]}class ot extends H{constructor(e){super(),E(this,e,nt,tt,D,{})}}function ve(t,e,n){const l=t.slice();return l[2]=e[n],l}function be(t){let e,n,l,o,i=t[2].company+"",r,s,a,c=t[2].title+"",h,g,m,v,u=t[2].year+"",x,y,j,w,R=t[2].description.replace(/\n/g,"<br>")+"",le,P,ie,X,se;return{c(){e=p("div"),n=p("div"),l=p("div"),o=p("h6"),r=W(i),s=_(),a=p("h5"),h=W(c),g=_(),m=p("div"),v=p("p"),x=W(u),y=_(),j=p("div"),w=p("p"),le=_(),P=p("button"),P.textContent="Read more",ie=_(),f(o,"class","experience-company svelte-1581qho"),f(a,"class","experience-title svelte-1581qho"),f(l,"class","experience-header-left"),f(v,"class","experience-year svelte-1581qho"),f(m,"class","experience-header-right"),f(n,"class","experience-header svelte-1581qho"),f(w,"class","experience-description svelte-1581qho"),f(j,"class","experience-description-wrapper svelte-1581qho"),te(j,"expanded",!1),f(P,"class","expand-btn"),f(e,"class","experience-item shadow svelte-1581qho")},m(Q,$e){k(Q,e,$e),d(e,n),d(n,l),d(l,o),d(o,r),d(l,s),d(l,a),d(a,h),d(n,g),d(n,m),d(m,v),d(v,x),d(e,y),d(e,j),d(j,w),w.innerHTML=R,d(e,le),d(e,P),d(e,ie),X||(se=I(P,"click",t[1]),X=!0)},p:b,d(Q){Q&&$(e),X=!1,se()}}}function lt(t){let e,n,l,o=t[0],i=[];for(let r=0;r<o.length;r+=1)i[r]=be(ve(t,o,r));return{c(){e=p("div"),n=p("h2"),n.textContent="Work Experience",l=_();for(let r=0;r<i.length;r+=1)i[r].c();f(n,"class","svelte-1581qho"),f(e,"class","work-experience svelte-1581qho"),we(e,"background-color","#CEEADD")},m(r,s){k(r,e,s),d(e,n),d(e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(r,[s]){if(s&3){o=r[0];let a;for(a=0;a<o.length;a+=1){const c=ve(r,o,a);i[a]?i[a].p(c,s):(i[a]=be(c),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=o.length}},i:b,o:b,d(r){r&&$(e),J(i,r)}}}function it(t,e,n){const l=[{company:"Telia Company, Sweden",title:"Development of Web Application and Flowchart GUI",year:"2022-2023",description:`As a team member of the UTURN-team in the NTS project for Telia, a leading telecommunications company in Sweden, I collaborated with a group of developers to create an application designed for managing companies, phone numbers, and their simple or complex configurations. The frontend was built using Angular, TypeScript, SCSS, MaterialUI, and I18, while the backend utilized Java and SpringBoot for a REST API, which interfaced with Telia's TCAS backend.
      
During the project, I took the initiative to develop the visual Complex Configuration feature, enabling users to create complex configurations for a phone number using custom flowcharts through an intuitive, drag-and-drop GUI canvas. This innovative feature offered a variety of advanced modules with unique options, inputs, and logic for users to connect and customize their configurations.
      
Throughout the project, our team followed the SCRUM methodology, conducting standups and operating in two-week sprints. My contributions to the frontend development and the Complex Configuration feature were instrumental in the overall success of the NTS project, ultimately elevating the user experience.`},{company:"Ramax Mekaniska Verkstad AB, Sweden",title:"Development and design of Website and Logo",year:"2019-2021",description:`As a freelance developer and designer, I was hired by Ramax AB, an industrial workshop that specializes in custom-made mechanical parts for clients such as the Swedish army and space companies. The company needed a complete overhaul of their outdated website, which was not responsive for mobile devices and did not meet their modern requirements.
      
To meet the client's tight two-week deadline and their need for a user-friendly portal, I chose to use Wordpress CMS for the project. I created the website design and logo from scratch, incorporating Ramax's brand colors and design language from previous decades.
      
In addition to the new design, I developed a user-friendly portal that allowed the client to update the website and add new information, such as news, machines, and employees, without external assistance. The project was successfully completed in time for the company's ISO certification deadline.
      
I am proud to have provided Ramax AB with a modern, responsive website that improved their online presence and streamlined their operations.`},{company:"Frigga Salong, Sweden",title:"Development and design of Website, Booking System and logo",year:"2018-2020",description:`As a freelance developer and designer, I collaborated with Frigga Salong, a hair salon located in central Gothenburg, to rebrand and enhance their online presence. By creating a new website design and logo, I successfully increased their customer base by over 40% within a year.
      
Utilizing Wordpress CMS, I enabled Frigga Salong to update their website with news and holiday hours seamlessly. Additionally, I developed a user-friendly booking system with calendar synchronization, allowing customers to conveniently schedule appointments and select their preferred employee. Both customers and assigned employees received email or SMS notifications upon booking confirmation.
      
To further optimize operations, I designed a login portal for the owner and employees to manage their schedules and appointments, synchronized with their Google calendars. I also focused on improving their SEO ranking, which led to Frigga Salong becoming the top-ranked search result for hair salons near Svingeln and Odinsplatsen, where they are located. This further contributed to their increased customer base and visibility.
      
My work with Frigga Salong not only modernized and professionalized their online presence, but also significantly improved their scheduling and booking processes.`},{company:"BDDance, China",title:"Development and Design of Web Shop for DanceSport Footwear",year:"2018",description:`As one of the largest and fastest-growing dance sport footwear manufacturers in the world, based in China, BDDance needed an efficient and professional online platform to expand their reach and facilitate sales to international customers. Previously relying on instant messaging applications and social media for sales, they sought a more streamlined and sophisticated solution for their global clientele.
      
To ensure that BDDance could independently manage and update their web shop, I leveraged my prior experience with the Wordpress CMS to build the online store using WooCommerce, complete with a MySQL database. As BDDance already had an established design profile and logotype, I incorporated these elements into the website design, while also adding various forms of visual media, such as videos and photographs of renowned athletes using their shoes in action. This multimedia approach aimed to captivate potential customers and showcase the performance of BDDance's products.
      
By developing and designing a comprehensive and visually engaging web shop for BDDance, I provided them with a professional and user-friendly platform, enabling them to reach a broader international audience and streamline their sales process outside of China.`}];function o(i){A.click();const r=i.target.parentNode.querySelector(".experience-description-wrapper"),s=i.target;r.classList.toggle("expanded")?s.textContent="Minimize":s.textContent="Read more"}return[l,o]}class st extends H{constructor(e){super(),E(this,e,it,lt,D,{experiences:0})}get experiences(){return this.$$.ctx[0]}}function rt(t){let e,n,l,o,i,r,s,a,c,h,g,m,v;return e=new Ye({}),o=new Ge({}),r=new Xe({}),a=new et({}),h=new ot({}),m=new st({}),{c(){T(e.$$.fragment),n=_(),l=p("main"),T(o.$$.fragment),i=_(),T(r.$$.fragment),s=_(),T(a.$$.fragment),c=_(),T(h.$$.fragment),g=_(),T(m.$$.fragment)},m(u,x){M(e,u,x),k(u,n,x),k(u,l,x),M(o,l,null),d(l,i),M(r,l,null),d(l,s),M(a,l,null),d(l,c),M(h,l,null),d(l,g),M(m,l,null),v=!0},p:b,i(u){v||(S(e.$$.fragment,u),S(o.$$.fragment,u),S(r.$$.fragment,u),S(a.$$.fragment,u),S(h.$$.fragment,u),S(m.$$.fragment,u),v=!0)},o(u){B(e.$$.fragment,u),B(o.$$.fragment,u),B(r.$$.fragment,u),B(a.$$.fragment,u),B(h.$$.fragment,u),B(m.$$.fragment,u),v=!1},d(u){C(e,u),u&&$(n),u&&$(l),C(o),C(r),C(a),C(h),C(m)}}}class at extends H{constructor(e){super(),E(this,e,null,rt,D,{})}}new at({target:document.getElementById("app")});