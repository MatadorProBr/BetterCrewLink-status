function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function L(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:A(t,r,e[r])}function N(t){return Array.from(t.childNodes)}function C(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,r,s=!1){C(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,e,n,r){return I(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function O(t,e,n){return P(t,e,n,_)}function R(t,e,n){return P(t,e,n,$)}function M(t,e){return I(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function H(t){return M(t," ")}function U(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function B(t){const e=U(t,"HTML_TAG_START",0),n=U(t,"HTML_TAG_END",e);if(e===n)return new V;C(t);const r=t.splice(e,n-e+1);w(r[0]),w(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(s)}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function D(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=D();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=L(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=L(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),w(n)}}function z(t,e=document.body){return Array.from(e.querySelectorAll(t))}class V extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=_(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(w)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function W(t){h=t}function K(){if(!h)throw new Error("Function called outside component initialization");return h}function J(t){K().$$.on_mount.push(t)}function F(t){K().$$.after_update.push(t)}function Y(t){K().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function rt(t){Z.push(t)}const st=new Set;let ot=0;function it(){const t=h;do{for(;ot<X.length;){const t=X[ot];ot++,W(t),at(t.$$)}for(W(null),X.length=0,ot=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];st.has(e)||(st.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,st.clear(),W(t)}function at(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function dt(){lt.r||s(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function ht(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function pt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||rt((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(rt)}function wt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(e,n,o,i,a,c,l,u=[-1]){const d=h;W(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),m&&yt(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const t=N(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),p=!1,it()}W(d)}class $t{$destroy(){wt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!Et.length;for(const t of s)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xt={};var Lt={owner:"MatadorProBr",repo:"BetterCrewLink-status",sites:[{name:"Voice Server",url:"https://bettercrewl.ink/",icon:"https://raw.githubusercontent.com/OhMyGuus/BetterCrewLink/nightly/src/renderer/logos/BCL-Logo-shadow.svg"},{name:"Web Version",url:"https://web.bettercrewl.ink/",icon:"https://raw.githubusercontent.com/OhMyGuus/BetterCrewlink-mobile/master/src/assets/icon/favicon.png"},{name:"OBS Overlay",url:"https://obs.bettercrewlink.app/",icon:"https://raw.githubusercontent.com/ottomated/CrewLink/master/resources/icon.png"},{name:"Mirror",url:"https://mirror.bettercrewl.ink/"},{name:"Short URL",url:"https://bettercrewlink.app/",icon:"https://cdn-icons-png.flaticon.com/512/25/25231.png"},{name:"Auto-Updater (GitHub)",url:"https://api.github.com/repos/OhMyGuus/BetterCrewLink/releases"},{name:"Hats (GitHub)",url:"https://api.github.com/repos/OhMyGuus/BetterCrewLink-Hats"}],assignees:["OhMyGuus"],"status-website":{cname:"bettercrewlink-status.netlify.app",theme:"night",logoUrl:"https://github.com/OhMyGuus/BetterCrewLink/raw/nightly/src/renderer/logos/BCL-AppIcon.png",favicon:"https://github.com/OhMyGuus/BetterCrewLink/raw/nightly/src/renderer/logos/BCL-AppIcon.png",faviconSvg:"https://github.com/OhMyGuus/BetterCrewLink/raw/nightly/src/renderer/logos/BCL-AppIcon.svg",name:"BetterCrewLink Status",introTitle:"[BetterCrewLink](https://github.com/OhMyGuus/BetterCrewLink)'s status site for our services",introMessage:"A status site for our services, some important and mod-needed ([Voice Server](/history/voice-server), [Web](/history/web-version), [Overlay](/history/obs-overlay) and [Mirror](/history/mirror)) and some vanity / non-important ([Short URL](/history/short-url))",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"},{title:"BetterCrewLink GitHub",href:"https://github.com/OhMyGuus/BetterCrewLink"}]},notification:[{type:"discord"}],skipDescriptionUpdate:!0,skipTopicsUpdate:!0,skipHomepageUpdate:!0,i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"Made with ❤️ by [MatadorProBr](https://github.com/MatadorProBr) and [BetterCrewLink](https://github.com/OhMyGuus/BetterCrewLink), 🔌 by [Upptime](https://github.com/upptime/upptime).",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},workflowSchedule:{responseTime:"*/5 * * * *",staticSite:"*/5 * * * *",summary:"*/5 * * * *",updates:"*/60 * * * *",uptime:"*/1 * * * *"},path:"https://bettercrewlink-status.netlify.app"};function Tt(t,e,n){const r=t.slice();return r[1]=e[n],r}function At(e){let n,r,s,o,i=Lt["status-website"]&&!Lt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=_("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,r=Lt["status-website"].logoUrl)||A(n,"src",r),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}(),a=Lt["status-website"]&&!Lt["status-website"].hideNavTitle&&function(e){let n,r,s=Lt["status-website"].name+"";return{c(){n=_("div"),r=E(s)},l(t){n=O(t,"DIV",{});var e=N(n);r=M(e,s),e.forEach(w)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&w(n)}}}();return{c(){n=_("div"),r=_("a"),i&&i.c(),s=S(),a&&a.c(),this.h()},l(t){n=O(t,"DIV",{});var e=N(n);r=O(e,"A",{href:!0,class:!0});var o=N(r);i&&i.l(o),s=H(o),a&&a.l(o),o.forEach(w),e.forEach(w),this.h()},h(){A(r,"href",o=Lt["status-website"].logoHref||Lt.path),A(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),i&&i.m(r,null),g(r,s),a&&a.m(r,null)},p(t,e){Lt["status-website"]&&!Lt["status-website"].hideNavLogo&&i.p(t,e),Lt["status-website"]&&!Lt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&w(n),i&&i.d(),a&&a.d()}}}function kt(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=_("li"),n=_("a"),r=E(a),i=S(),this.h()},l(t){e=O(t,"LI",{});var s=N(e);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=N(n);r=M(o,a),o.forEach(w),i=H(s),s.forEach(w),this.h()},h(){A(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",o=t[1].href.replace("$OWNER",Lt.owner).replace("$REPO",Lt.repo)),A(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",s)},d(t){t&&w(e)}}}function Nt(e){let n,r,s,o,i,a=Lt["status-website"]&&Lt["status-website"].logoUrl&&At(),c=Lt["status-website"]&&Lt["status-website"].navbar&&function(t){let e,n=Lt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=kt(Tt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=Lt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);r[o]?r[o].p(i,s):(r[o]=kt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){y(r,t),t&&w(e)}}}(e),l=Lt["status-website"]&&Lt["status-website"].navbarGitHub&&!Lt["status-website"].navbar&&function(e){let n,r,s,o,i=Lt.i18n.navGitHub+"";return{c(){n=_("li"),r=_("a"),s=E(i),this.h()},l(t){n=O(t,"LI",{});var e=N(n);r=O(e,"A",{href:!0,class:!0});var o=N(r);s=M(o,i),o.forEach(w),e.forEach(w),this.h()},h(){A(r,"href",o=`https://github.com/${Lt.owner}/${Lt.repo}`),A(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&w(n)}}}();return{c(){n=_("nav"),r=_("div"),a&&a.c(),s=S(),o=_("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=N(n);r=O(e,"DIV",{class:!0});var u=N(r);a&&a.l(u),s=H(u),o=O(u,"UL",{class:!0});var d=N(o);c&&c.l(d),i=H(d),l&&l.l(d),d.forEach(w),u.forEach(w),e.forEach(w),this.h()},h(){A(o,"class","svelte-a08hsz"),A(r,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Lt["status-website"]&&Lt["status-website"].logoUrl&&a.p(t,e),Lt["status-website"]&&Lt["status-website"].navbar&&c.p(t,e),Lt["status-website"]&&Lt["status-website"].navbarGitHub&&!Lt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&w(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ct(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class It extends $t{constructor(t){super(),_t(this,t,Ct,Nt,i,{segment:0})}}var Pt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Rt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Pt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ot(Rt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Mt(Ot(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Rt(s[8])+'" alt="'+Rt(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Rt(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Mt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Rt(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ht(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ut(t,e,n){const r=t.slice();return r[3]=e[n],r}function Bt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Gt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Lt.path}/themes/${(Lt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function jt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Lt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Dt(e){let n,r;return{c(){n=_("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),N(n).forEach(w),this.h()},h(){c(n.src,r=e[8].src)||A(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function qt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function zt(e){let n;return{c(){n=_("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Vt(e){let n,r,s,o,i,a,c,u,d,f,h,p,m,b,$,E,L,T,k=Mt(Lt.i18n.footer.replace(/\$REPO/,`https://github.com/${Lt.owner}/${Lt.repo}`))+"",C=(Lt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(Lt["status-website"]||{}).customHeadHtml+"";return{c(){n=new V,r=x(),this.h()},l(t){n=B(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}();let I=((Lt["status-website"]||{}).themeUrl?jt:Gt)(e),P=(Lt["status-website"]||{}).scripts&&function(t){let e,n=(Lt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Dt(Bt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(Lt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Bt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Dt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){y(r,t),t&&w(e)}}}(e),R=(Lt["status-website"]||{}).links&&function(t){let e,n=(Lt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(Lt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){y(r,t),t&&w(e)}}}(e),M=(Lt["status-website"]||{}).metaTags&&function(t){let e,n=(Lt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Ht(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(Lt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ht(t,n,o);r[o]?r[o].p(i,s):(r[o]=zt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){y(r,t),t&&w(e)}}}(e),U=Lt["status-website"].css&&function(e){let n,r,s=`<style>${Lt["status-website"].css}</style>`;return{c(){n=new V,r=x(),this.h()},l(t){n=B(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}(),G=Lt["status-website"].js&&function(e){let n,r,s=`<script>${Lt["status-website"].js}<\/script>`;return{c(){n=new V,r=x(),this.h()},l(t){n=B(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}(),j=(Lt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(Lt["status-website"]||{}).customBodyHtml+"";return{c(){n=new V,r=x(),this.h()},l(t){n=B(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}();p=new It({props:{segment:e[0]}});const D=e[2].default,q=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(D,e,e[1],null);return{c(){C&&C.c(),n=x(),I.c(),r=_("link"),s=_("link"),o=_("link"),P&&P.c(),i=x(),R&&R.c(),a=x(),M&&M.c(),c=x(),U&&U.c(),u=x(),G&&G.c(),d=x(),f=S(),j&&j.c(),h=S(),gt(p.$$.fragment),m=S(),b=_("main"),q&&q.c(),$=S(),E=_("footer"),L=_("p"),this.h()},l(t){const e=z('[data-svelte="svelte-ri9y7q"]',document.head);C&&C.l(e),n=x(),I.l(e),r=O(e,"LINK",{rel:!0,href:!0}),s=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),P&&P.l(e),i=x(),R&&R.l(e),a=x(),M&&M.l(e),c=x(),U&&U.l(e),u=x(),G&&G.l(e),d=x(),e.forEach(w),f=H(t),j&&j.l(t),h=H(t),bt(p.$$.fragment,t),m=H(t),b=O(t,"MAIN",{class:!0});var l=N(b);q&&q.l(l),l.forEach(w),$=H(t),E=O(t,"FOOTER",{class:!0});var g=N(E);L=O(g,"P",{}),N(L).forEach(w),g.forEach(w),this.h()},h(){A(r,"rel","stylesheet"),A(r,"href",`${Lt.path}/global.css`),A(s,"rel","icon"),A(s,"type","image/svg"),A(s,"href",(Lt["status-website"]||{}).faviconSvg||(Lt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Lt["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){C&&C.m(document.head,null),g(document.head,n),I.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),P&&P.m(document.head,null),g(document.head,i),R&&R.m(document.head,null),g(document.head,a),M&&M.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),G&&G.m(document.head,null),g(document.head,d),v(t,f,e),j&&j.m(t,e),v(t,h,e),vt(p,t,e),v(t,m,e),v(t,b,e),q&&q.m(b,null),v(t,$,e),v(t,E,e),g(E,L),L.innerHTML=k,T=!0},p(t,[e]){(Lt["status-website"]||{}).customHeadHtml&&C.p(t,e),I.p(t,e),(Lt["status-website"]||{}).scripts&&P.p(t,e),(Lt["status-website"]||{}).links&&R.p(t,e),(Lt["status-website"]||{}).metaTags&&M.p(t,e),Lt["status-website"].css&&U.p(t,e),Lt["status-website"].js&&G.p(t,e),(Lt["status-website"]||{}).customBodyHtml&&j.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!T||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(q,D,t,t[1],T?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(D,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ft(p.$$.fragment,t),ft(q,t),T=!0)},o(t){ht(p.$$.fragment,t),ht(q,t),T=!1},d(t){C&&C.d(t),w(n),I.d(t),w(r),w(s),w(o),P&&P.d(t),w(i),R&&R.d(t),w(a),M&&M.d(t),w(c),U&&U.d(t),w(u),G&&G.d(t),w(d),t&&w(f),j&&j.d(t),t&&w(h),wt(p,t),t&&w(m),t&&w(b),q&&q.d(t),t&&w($),t&&w(E)}}}function Wt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Kt extends $t{constructor(t){super(),_t(this,t,Wt,Vt,i,{segment:0})}}function Jt(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=E(r)},l(t){e=O(t,"PRE",{});var s=N(e);n=M(s,r),s.forEach(w)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&G(n,r)},d(t){t&&w(e)}}}function Ft(e){let n,r,s,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Jt(e);return{c(){r=S(),s=_("h1"),o=E(e[0]),i=S(),a=_("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){z('[data-svelte="svelte-1moakz"]',document.head).forEach(w),r=H(t),s=O(t,"H1",{class:!0});var n=N(s);o=M(n,e[0]),n.forEach(w),i=H(t),a=O(t,"P",{class:!0});var h=N(a);c=M(h,d),h.forEach(w),l=H(t),f&&f.l(t),u=x(),this.h()},h(){A(s,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&G(o,t[0]),2&e&&d!==(d=t[1].message+"")&&G(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Jt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&w(r),t&&w(s),t&&w(i),t&&w(a),t&&w(l),f&&f.d(t),t&&w(u)}}}function Yt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Xt extends $t{constructor(t){super(),_t(this,t,Yt,Ft,i,{status:0,error:1})}}function Qt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),r=x()},l(t){n&&bt(n.$$.fragment,t),r=x()},m(t,e){n&&vt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?pt(o,[mt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{wt(t,1)})),dt()}i?(n=new i(a()),gt(n.$$.fragment),ft(n.$$.fragment,1),vt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ft(n.$$.fragment,t),s=!0)},o(t){n&&ht(n.$$.fragment,t),s=!1},d(t){t&&w(r),n&&wt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){vt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){wt(e,t)}}}function te(t){let e,n,r,s;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ut(),ht(i[c],1,1,(()=>{i[c]=null})),dt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){ht(n),s=!1},d(t){i[e].d(t),t&&w(r)}}}function ee(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Kt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){vt(n,t,e),r=!0},p(t,[e]){const r=12&e?pt(s,[4&e&&{segment:t[2][0]},8&e&&mt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ft(n.$$.fragment,t),r=!0)},o(t){ht(n.$$.fragment,t),r=!1},d(t){wt(n,t)}}}function ne(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return F(l),u=xt,d=r,K().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class re extends $t{constructor(t){super(),_t(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],oe=[{js:()=>Promise.all([import("./index.77463ae0.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.7011b17c.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.448409ed.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.f4e16d1a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.7c681b50.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,de=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let pe,me;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=ge(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=be(s);if(o){_e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),fe.pushState({id:ue},"",s.href)}}function we(){return{x:pageXOffset,y:pageYOffset}}function ye(t){if(he[ue]=we(),t.state){const e=be(new URL(location.href));e?_e(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){ue=t}(de),fe.replaceState({id:ue},"",location.href)}function _e(t,e,n,r){return ce(this,void 0,void 0,(function*(){const s=!!e;if(s)ue=e;else{const t=we();he[ue]=t,ue=e=++de,he[ue]=n?t:{x:0,y:0}}if(yield me(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function $e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,$e(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:De(e)}),Se.promise}(e.href)}function Le(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,$e(document)));if(n){const r=_e(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),r}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let ke,Ne,Ce,Ie=!1,Pe=[],Oe="{}";const Re={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:St(null),session:St(Ae&&Ae.session)};let Me,He,Ue;function Be(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ge(t){return ce(this,void 0,void 0,(function*(){ke&&Re.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:De(t)}(t),n=Ne={},r=yield e,{redirect:s}=r;if(n===Ne)if(s)yield Te(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield je(n,e,Be(e,t.page))}}))}function je(t,e,n){return ce(this,void 0,void 0,(function*(){Re.page.set(n),Re.preloading.set(!1),ke?ke.$set(e):(e.stores={page:{subscribe:Re.page.subscribe},preloading:{subscribe:Re.preloading.subscribe},session:Re.session},e.level0={props:yield Ce},e.notify=Re.page.notify,ke=new re({target:Ue,props:e,hydrate:!0})),Pe=t,Oe=JSON.stringify(n.query),Ie=!0,He=!1}))}function De(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ce){const t=()=>({});Ce=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Me)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ce(this,void 0,void 0,(function*(){const d=r[a];if(function(t,e,n,r){if(r!==Oe)return!0;const s=Pe[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:d};const f=c++;let h;if(He||u||!Pe[a]||Pe[a].part!==e.i){u=!1;const{default:r,preload:s}=yield oe[e.i].js();let o;o=Ie||!Ae.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Me):{}:Ae.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:e.i}}else h=Pe[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var qe,ze,Ve;Re.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(Me=t,!Ie)return;He=!0;const e=be(new URL(location.href)),n=Ne={},{redirect:r,props:s,branch:o}=yield De(e);n===Ne&&(r?yield Te(r.location,{replaceState:!0}):yield je(o,s,Be(s,e.page)))})))),qe={target:document.querySelector("#sapper")},ze=qe.target,Ue=ze,Ve=Ae.baseUrl,pe=Ve,me=Ge,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",ye),addEventListener("touchstart",xe),addEventListener("mousemove",Le),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ae;Ce||(Ce=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ce},level1:{props:{status:o,error:i},component:Xt},segments:s},c=ge(n);je([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:de},"",e);const n=be(new URL(location.href));if(n)return _e(n,de,!0,t)}));export{wt as A,L as B,s as C,Q as D,B as E,c as F,d as G,V as H,z as I,Mt as J,$ as K,R as L,Te as M,j as N,T as O,e as P,k as Q,pt as R,$t as S,F as T,Y as U,u as V,mt as W,rt as X,q as Y,N as a,M as b,O as c,w as d,_ as e,A as f,v as g,g as h,_t as i,S as j,H as k,ut as l,ht as m,t as n,dt as o,ft as p,J as q,Lt as r,i as s,E as t,G as u,x as v,y as w,gt as x,bt as y,vt as z};

import __inject_styles from './inject_styles.803b7e80.js';