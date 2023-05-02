(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function g(){}function ve(t){return t()}function se(){return Object.create(null)}function U(t){t.forEach(ve)}function be(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function te(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function xe(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function w(){return T(" ")}function ne(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $e(t){return Array.from(t.childNodes)}function _e(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function X(t,e,n){t.classList[n?"add":"remove"](e)}let F;function O(t){F=t}function ke(){if(!F)throw new Error("Function called outside component initialization");return F}function je(t){ke().$$.on_mount.push(t)}const B=[],ae=[];let W=[];const re=[],Me=Promise.resolve();let Q=!1;function Se(){Q||(Q=!0,Me.then(ye))}function Z(t){W.push(t)}const J=new Set;let E=0;function ye(){if(E!==0)return;const t=F;do{try{for(;E<B.length;){const e=B[E];E++,O(e),Ce(e.$$)}}catch(e){throw B.length=0,E=0,e}for(O(null),B.length=0,E=0;ae.length;)ae.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];J.has(n)||(J.add(n),n())}W.length=0}while(B.length);for(;re.length;)re.pop()();Q=!1,J.clear(),O(t)}function Ce(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ae(t){const e=[],n=[];W.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),W=e}const R=new Set;let De;function M(t,e){t&&t.i&&(R.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),De.c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}const He=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...He];function L(t){t&&t.c()}function S(t,e,n,o){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),o||Z(()=>{const s=t.$$.on_mount.map(ve).filter(be);t.$$.on_destroy?t.$$.on_destroy.push(...s):U(s),t.$$.on_mount=[]}),l.forEach(Z)}function C(t,e){const n=t.$$;n.fragment!==null&&(Ae(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(t,e){t.$$.dirty[0]===-1&&(B.push(t),Se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,o,i,l,s,a=[-1]){const r=F;O(t);const c=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:i,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:se(),dirty:a,skip_bound:!1,root:e.target||r.$$.root};s&&s(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(y,m,...b)=>{const p=b.length?b[0]:m;return c.ctx&&i(c.ctx[y],c.ctx[y]=p)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](p),h&&Ee(t,y)),m}):[],c.update(),h=!0,U(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const y=$e(e.target);c.fragment&&c.fragment.l(y),y.forEach(x)}else c.fragment&&c.fragment.c();e.intro&&M(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),ye()}O(r)}class H{$destroy(){C(this,1),this.$destroy=g}$on(e,n){if(!be(n))return g;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ie(t){let e;return{c(){e=u("section"),e.innerHTML=`<div class="hero-container svelte-1711abm"><h1 class="hero-heading svelte-1711abm">Knock, knock!</h1> 
    <h2 class="hero-subheading svelte-1711abm">Who&#39;s there? A full-stack web developer!</h2> 
    <button class="shadow wobble">Click me</button></div>`,f(e,"class","hero border-bottom svelte-1711abm")},m(n,o){k(n,e,o)},p:g,i:g,o:g,d(n){n&&x(e)}}}class Le extends H{constructor(e){super(),D(this,e,null,Ie,A,{})}}const Be="/assets/svelte-a39f39b7.svg";function ce(t,e,n){const o=t.slice();return o[3]=e[n],o}function Te(t){let e,n;return{c(){e=u("img"),te(e.src,n=Be)||f(e,"src",n),f(e,"alt","Logo"),f(e,"class","svelte-1kvddkx")},m(o,i){k(o,e,i)},p:g,d(o){o&&x(e)}}}function de(t){let e,n,o=t[3].label+"",i,l;return{c(){e=u("li"),n=u("a"),i=T(o),l=w(),f(n,"href",t[3].href),f(n,"class","svelte-1kvddkx"),f(e,"class","svelte-1kvddkx")},m(s,a){k(s,e,a),d(e,n),d(n,i),d(e,l)},p:g,d(s){s&&x(e)}}}function We(t){let e,n,o;return{c(){e=u("button"),e.textContent=`${Pe}`,f(e,"class","action-button svelte-1kvddkx")},m(i,l){k(i,e,l),n||(o=ne(e,"click",ee),n=!0)},p:g,d(i){i&&x(e),n=!1,o()}}}function qe(t){let e,n,o,i,l,s,a,r,c,h,y,m=Te(),b=t[1],p=[];for(let _=0;_<b.length;_+=1)p[_]=de(ce(t,b,_));let $=ee&&window.innerWidth>=768&&We();return{c(){e=u("header"),n=u("div"),m&&m.c(),o=w(),i=u("nav"),l=u("ul");for(let _=0;_<p.length;_+=1)p[_].c();s=w(),a=u("button"),a.innerHTML=`<span class="svelte-1kvddkx"></span> 
      <span class="svelte-1kvddkx"></span> 
      <span class="svelte-1kvddkx"></span>`,r=w(),c=u("div"),$&&$.c(),f(n,"class","header-left svelte-1kvddkx"),f(l,"class","svelte-1kvddkx"),X(l,"open",t[0]),f(a,"class","menu-toggle svelte-1kvddkx"),f(i,"class","header-center svelte-1kvddkx"),f(c,"class","header-right svelte-1kvddkx"),f(e,"class","border-bottom svelte-1kvddkx")},m(_,j){k(_,e,j),d(e,n),m&&m.m(n,null),d(e,o),d(e,i),d(i,l);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(l,null);d(i,s),d(i,a),d(e,r),d(e,c),$&&$.m(c,null),h||(y=ne(a,"click",t[2]),h=!0)},p(_,[j]){if(j&2){b=_[1];let v;for(v=0;v<b.length;v+=1){const z=ce(_,b,v);p[v]?p[v].p(z,j):(p[v]=de(z),p[v].c(),p[v].m(l,null))}for(;v<p.length;v+=1)p[v].d(1);p.length=b.length}j&1&&X(l,"open",_[0]),ee&&window.innerWidth>=768&&$.p(_,j)},i:g,o:g,d(_){_&&x(e),m&&m.d(),V(p,_),$&&$.d(),h=!1,y()}}}let Pe="Kontakt";function ee(t){console.log("Action button clicked",t)}function Ge(t,e,n){let o=[{label:"Start",href:"#"},{label:"Om mig",href:"#"},{label:"Projekt",href:"#"},{label:"Erfarenheter",href:"#"},{label:"Färdigheter",href:"#"},{label:"Kontakta mig",href:"#"}],i=!1;function l(){console.log("Toggle menu clicked"),n(0,i=!i)}return[i,o,l]}class Oe extends H{constructor(e){super(),D(this,e,Ge,qe,A,{})}}const P="/assets/spotify-6235a031.png",G="/assets/dell-d53c8859.png";function fe(t,e,n){const o=t.slice();return o[7]=e[n],o}function ue(t){let e,n,o,i;return{c(){e=u("div"),n=u("img"),i=w(),te(n.src,o=t[7].logo)||f(n,"src",o),f(n,"alt",t[7].name),f(n,"class","svelte-2y45t2"),f(e,"class","client-logo svelte-2y45t2")},m(l,s){k(l,e,s),d(e,n),d(e,i)},p:g,d(l){l&&x(e)}}}function Fe(t){let e,n,o=t[0],i=[];for(let l=0;l<o.length;l+=1)i[l]=ue(fe(t,o,l));return{c(){e=u("div"),n=u("div");for(let l=0;l<i.length;l+=1)i[l].c();f(n,"class","client-logos-container svelte-2y45t2"),f(e,"class","client-logos border-bottom svelte-2y45t2")},m(l,s){k(l,e,s),d(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null)},p(l,[s]){if(s&1){o=l[0];let a;for(a=0;a<o.length;a+=1){const r=fe(l,o,a);i[a]?i[a].p(r,s):(i[a]=ue(r),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=o.length}},i:g,o:g,d(l){l&&x(e),V(i,l)}}}function ze(t){const e=[{name:"Company A",logo:P},{name:"Company B",logo:G},{name:"Company C",logo:P},{name:"Company D",logo:G},{name:"Company E",logo:P},{name:"Company F",logo:G},{name:"Company G",logo:P},{name:"Company H",logo:G},{name:"Company I",logo:P},{name:"Company J",logo:G}];let n=0,o=null;function i(){n++;const a=document.querySelector(".client-logos-container"),r=document.querySelector(".client-logo");if(r instanceof HTMLElement){const c=(r==null?void 0:r.offsetWidth)||0,h=c*e.length;n>=h?(n=0,e.push(e.shift())):n<-c&&(n=h-c,e.unshift(e.pop()))}a instanceof HTMLElement&&(a.style.transform=`translateX(-${n}px)`),o=requestAnimationFrame(i)}function l(){cancelAnimationFrame(o)}function s(){i()}return je(()=>{const a=document.querySelector(".client-logos-container"),r=document.querySelector(".client-logo");a instanceof HTMLElement&&r instanceof HTMLElement&&(a.style.width=`${r.offsetWidth*e.length}px`,n=window.innerWidth-a.offsetWidth),a instanceof HTMLElement&&(a.addEventListener("mouseenter",l),a.addEventListener("mouseleave",s)),i()}),[e]}class Ne extends H{constructor(e){super(),D(this,e,ze,Fe,A,{})}}const Re="/assets/selfie-2bdbe02d.jpg";function Ue(t){let e,n,o,i,l,s,a;return{c(){e=u("div"),n=u("div"),o=u("div"),i=u("img"),s=w(),a=u("div"),a.innerHTML=`<h2 class="svelte-129v437">Who am I?</h2> 
      <p class="svelte-129v437">As a full-stack developer, I am passionate about creating beautiful and functional web applications that not only meet my clients&#39; needs, but also leave a lasting impact on their users. I believe in the power of design and innovation to connect people across the world, and I am dedicated to using my skills to help make that vision a reality.</p>`,te(i.src,l=Re)||f(i,"src",l),f(i,"alt","Portrait Selfie"),f(i,"class","svelte-129v437"),f(o,"class","about-me-image shadow wobble svelte-129v437"),f(a,"class","about-me-text svelte-129v437"),f(n,"class","about-me-content svelte-129v437"),f(e,"class","about-me border-bottom svelte-129v437")},m(r,c){k(r,e,c),d(e,n),d(n,o),d(o,i),d(n,s),d(n,a)},p:g,i:g,o:g,d(r){r&&x(e)}}}class Ve extends H{constructor(e){super(),D(this,e,null,Ue,A,{})}}function pe(t,e,n){const o=t.slice();return o[1]=e[n],o}function he(t){let e,n,o,i,l,s=t[1].name+"",a,r,c,h,y;return{c(){e=u("div"),n=u("a"),o=u("div"),i=u("div"),l=u("span"),a=T(s),r=w(),c=u("a"),h=u("div"),h.textContent="GitHub",y=w(),f(l,"class","project-name svelte-1bo6kfe"),f(h,"class","project-repo svelte-1bo6kfe"),f(c,"href",t[1].repo),f(i,"class","project-footer svelte-1bo6kfe"),f(o,"class","project-img svelte-1bo6kfe"),_e(o,"background-image","url('"+t[1].img+"')"),f(n,"href",t[1].link),f(e,"class","project shadow wobble svelte-1bo6kfe")},m(m,b){k(m,e,b),d(e,n),d(n,o),d(o,i),d(i,l),d(l,a),d(i,r),d(i,c),d(c,h),d(e,y)},p:g,d(m){m&&x(e)}}}function Ye(t){let e,n,o,i,l=t[0],s=[];for(let a=0;a<l.length;a+=1)s[a]=he(pe(t,l,a));return{c(){e=u("div"),n=u("h2"),n.textContent="My projects",o=w(),i=u("div");for(let a=0;a<s.length;a+=1)s[a].c();f(i,"class","projects svelte-1bo6kfe"),f(e,"class","projects-container border-bottom svelte-1bo6kfe")},m(a,r){k(a,e,r),d(e,n),d(e,o),d(e,i);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(i,null)},p(a,[r]){if(r&1){l=a[0];let c;for(c=0;c<l.length;c+=1){const h=pe(a,l,c);s[c]?s[c].p(h,r):(s[c]=he(h),s[c].c(),s[c].m(i,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=l.length}},i:g,o:g,d(a){a&&x(e),V(s,a)}}}function Ke(t){return[[{name:"Project 1",img:"https://images.unsplash.com/photo-1683016390026-b5087a17e21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project1",repo:"https://github.com/example/project1"},{name:"Project 2",img:"https://images.unsplash.com/photo-1682862516196-0ed3cb7d8f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",link:"https://example.com/project2",repo:"https://github.com/example/project2"},{name:"Project 3",img:"https://images.unsplash.com/photo-1682861941586-f90d0ea62cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project3",repo:"https://github.com/example/project3"},{name:"Project 4",img:"https://images.unsplash.com/photo-1683016390026-b5087a17e21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project1",repo:"https://github.com/example/project1"},{name:"Project 5",img:"https://images.unsplash.com/photo-1682862516196-0ed3cb7d8f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",link:"https://example.com/project2",repo:"https://github.com/example/project2"},{name:"Project 6",img:"https://images.unsplash.com/photo-1682861941586-f90d0ea62cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",link:"https://example.com/project3",repo:"https://github.com/example/project3"}]]}class Je extends H{constructor(e){super(),D(this,e,Ke,Ye,A,{})}}function me(t,e,n){const o=t.slice();return o[1]=e[n],o}function ge(t){let e,n,o,i,l=t[1].company+"",s,a,r,c=t[1].title+"",h,y,m,b,p=t[1].year+"",$,_,j,v,z=t[1].description.replace(/\n/g,"<br>")+"",oe,q,ie,Y,le;return{c(){e=u("div"),n=u("div"),o=u("div"),i=u("h6"),s=T(l),a=w(),r=u("h5"),h=T(c),y=w(),m=u("div"),b=u("p"),$=T(p),_=w(),j=u("div"),v=u("p"),oe=w(),q=u("button"),q.textContent="Read more",ie=w(),f(i,"class","experience-company svelte-ggidj6"),f(r,"class","experience-title svelte-ggidj6"),f(o,"class","experience-header-left"),f(b,"class","experience-year svelte-ggidj6"),f(m,"class","experience-header-right"),f(n,"class","experience-header svelte-ggidj6"),f(v,"class","experience-description svelte-ggidj6"),f(j,"class","experience-description-wrapper svelte-ggidj6"),X(j,"expanded",!1),f(q,"class","expand-btn"),f(e,"class","experience-item shadow svelte-ggidj6")},m(K,we){k(K,e,we),d(e,n),d(n,o),d(o,i),d(i,s),d(o,a),d(o,r),d(r,h),d(n,y),d(n,m),d(m,b),d(b,$),d(e,_),d(e,j),d(j,v),v.innerHTML=z,d(e,oe),d(e,q),d(e,ie),Y||(le=ne(q,"click",Qe),Y=!0)},p:g,d(K){K&&x(e),Y=!1,le()}}}function Xe(t){let e,n,o,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ge(me(t,i,s));return{c(){e=u("div"),n=u("h2"),n.textContent="Work Experience",o=w();for(let s=0;s<l.length;s+=1)l[s].c();f(n,"class","svelte-ggidj6"),f(e,"class","work-experience svelte-ggidj6"),_e(e,"background-color","#CEEADD")},m(s,a){k(s,e,a),d(e,n),d(e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(s,[a]){if(a&1){i=s[0];let r;for(r=0;r<i.length;r+=1){const c=me(s,i,r);l[r]?l[r].p(c,a):(l[r]=ge(c),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=i.length}},i:g,o:g,d(s){s&&x(e),V(l,s)}}}function Qe(t){const e=t.target.parentNode.querySelector(".experience-description-wrapper"),n=t.target;e.classList.toggle("expanded")?n.textContent="Minimize":n.textContent="Read more"}function Ze(t,e,n){return[[{company:"Telia Company, Sweden",title:"Development of Web Application and Flowchart GUI",year:"2022-2023",description:`As a team member of the UTURN-team in the NTS project for Telia, a leading telecommunications company in Sweden, I collaborated with a group of developers to create an application designed for managing companies, phone numbers, and their simple or complex configurations. The frontend was built using Angular, TypeScript, SCSS, MaterialUI, and I18, while the backend utilized Java and SpringBoot for a REST API, which interfaced with Telia's TCAS backend.
      
During the project, I took the initiative to develop the visual Complex Configuration feature, enabling users to create complex configurations for a phone number using custom flowcharts through an intuitive, drag-and-drop GUI canvas. This innovative feature offered a variety of advanced modules with unique options, inputs, and logic for users to connect and customize their configurations.
      
Throughout the project, our team followed the SCRUM methodology, conducting standups and operating in two-week sprints. My contributions to the frontend development and the Complex Configuration feature were instrumental in the overall success of the NTS project, ultimately elevating the user experience.`},{company:"Ramax Mekaniska Verkstad AB, Sweden",title:"Development and design of Website and Logo",year:"2019-2021",description:`As a freelance developer and designer, I was hired by Ramax AB, an industrial workshop that specializes in custom-made mechanical parts for clients such as the Swedish army and space companies. The company needed a complete overhaul of their outdated website, which was not responsive for mobile devices and did not meet their modern requirements.
      
To meet the client's tight two-week deadline and their need for a user-friendly portal, I chose to use Wordpress CMS for the project. I created the website design and logo from scratch, incorporating Ramax's brand colors and design language from previous decades.
      
In addition to the new design, I developed a user-friendly portal that allowed the client to update the website and add new information, such as news, machines, and employees, without external assistance. The project was successfully completed in time for the company's ISO certification deadline.
      
I am proud to have provided Ramax AB with a modern, responsive website that improved their online presence and streamlined their operations.`},{company:"Frigga Salong, Sweden",title:"Development and design of Website, Booking System and logo",year:"2018-2020",description:`As a freelance developer and designer, I collaborated with Frigga Salong, a hair salon located in central Gothenburg, to rebrand and enhance their online presence. By creating a new website design and logo, I successfully increased their customer base by over 40% within a year.
      
Utilizing Wordpress CMS, I enabled Frigga Salong to update their website with news and holiday hours seamlessly. Additionally, I developed a user-friendly booking system with calendar synchronization, allowing customers to conveniently schedule appointments and select their preferred employee. Both customers and assigned employees received email or SMS notifications upon booking confirmation.
      
To further optimize operations, I designed a login portal for the owner and employees to manage their schedules and appointments, synchronized with their Google calendars. I also focused on improving their SEO ranking, which led to Frigga Salong becoming the top-ranked search result for hair salons near Svingeln and Odinsplatsen, where they are located. This further contributed to their increased customer base and visibility.
      
My work with Frigga Salong not only modernized and professionalized their online presence, but also significantly improved their scheduling and booking processes.`},{company:"BDDance, China",title:"Development and Design of Web Shop for DanceSport Footwear",year:"2018",description:`As one of the largest and fastest-growing dance sport footwear manufacturers in the world, based in China, BDDance needed an efficient and professional online platform to expand their reach and facilitate sales to international customers. Previously relying on instant messaging applications and social media for sales, they sought a more streamlined and sophisticated solution for their global clientele.
      
To ensure that BDDance could independently manage and update their web shop, I leveraged my prior experience with the Wordpress CMS to build the online store using WooCommerce, complete with a MySQL database. As BDDance already had an established design profile and logotype, I incorporated these elements into the website design, while also adding various forms of visual media, such as videos and photographs of renowned athletes using their shoes in action. This multimedia approach aimed to captivate potential customers and showcase the performance of BDDance's products.
      
By developing and designing a comprehensive and visually engaging web shop for BDDance, I provided them with a professional and user-friendly platform, enabling them to reach a broader international audience and streamline their sales process outside of China.`}]]}class et extends H{constructor(e){super(),D(this,e,Ze,Xe,A,{experiences:0})}get experiences(){return this.$$.ctx[0]}}function tt(t){let e,n,o,i,l,s,a,r,c,h,y,m,b;return e=new Oe({}),i=new Le({}),s=new Ne({}),r=new Ve({}),h=new Je({}),m=new et({}),{c(){L(e.$$.fragment),n=w(),o=u("main"),L(i.$$.fragment),l=w(),L(s.$$.fragment),a=w(),L(r.$$.fragment),c=w(),L(h.$$.fragment),y=w(),L(m.$$.fragment)},m(p,$){S(e,p,$),k(p,n,$),k(p,o,$),S(i,o,null),d(o,l),S(s,o,null),d(o,a),S(r,o,null),d(o,c),S(h,o,null),d(o,y),S(m,o,null),b=!0},p:g,i(p){b||(M(e.$$.fragment,p),M(i.$$.fragment,p),M(s.$$.fragment,p),M(r.$$.fragment,p),M(h.$$.fragment,p),M(m.$$.fragment,p),b=!0)},o(p){I(e.$$.fragment,p),I(i.$$.fragment,p),I(s.$$.fragment,p),I(r.$$.fragment,p),I(h.$$.fragment,p),I(m.$$.fragment,p),b=!1},d(p){C(e,p),p&&x(n),p&&x(o),C(i),C(s),C(r),C(h),C(m)}}}class nt extends H{constructor(e){super(),D(this,e,null,tt,A,{})}}new nt({target:document.getElementById("app")});
