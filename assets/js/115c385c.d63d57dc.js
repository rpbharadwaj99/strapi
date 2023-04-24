"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6950],{1981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const a={title:"Async utils functions",tags:["utils"]},l="Async utils",o={unversionedId:"core/utils/async",id:"core/utils/async",title:"Async utils functions",description:"Summary",source:"@site/docs/core/utils/async.md",sourceDirName:"core/utils",slug:"/core/utils/async",permalink:"/core/utils/async",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/utils/async.md",tags:[{label:"utils",permalink:"/tags/utils"}],version:"current",frontMatter:{title:"Async utils functions",tags:["utils"]},sidebar:"docs",previous:{title:"Review Workflows",permalink:"/settings/review-workflows"},next:{title:"Event Hub",permalink:"/core/utils/event-hub"}},s={},c=[{value:"Summary",id:"summary",level:2},{value:"Detailed design",id:"detailed-design",level:2},{value:"When to use",id:"when-to-use",level:3},{value:"Should I add my function here ?",id:"should-i-add-my-function-here-",level:3},{value:"Potential improvements",id:"potential-improvements",level:2},{value:"Resources",id:"resources",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"async-utils"},"Async utils"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Async utils are grouping all function that interact with async stuff like Promises."),(0,i.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,i.kt)("p",null,"Available functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pipeAsync"),(0,i.kt)("li",{parentName:"ul"},"mapAsync"),(0,i.kt)("li",{parentName:"ul"},"reduceAsync")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../api/Utils"},"See API reference")," (TODO)"),(0,i.kt)("h3",{id:"when-to-use"},"When to use"),(0,i.kt)("p",null,"Everytime the code has to act with promises and iterate other them, an async utils function should be used."),(0,i.kt)("h3",{id:"should-i-add-my-function-here-"},"Should I add my function here ?"),(0,i.kt)("p",null,"Any util function that manipulates promises can be included in this utils section."),(0,i.kt)("p",null,"Please consider the next point if a lots of functions are available in the async section."),(0,i.kt)("h2",{id:"potential-improvements"},"Potential improvements"),(0,i.kt)("p",null,"If we begin to use lots of async utils function, we may consider to migrate to a specialized library like ",(0,i.kt)("a",{parentName:"p",href:"http://caolan.github.io/async/v3/"},"asyncjs")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi/blob/9b36c3b10adaa00fd3596853abc63122632c36fe/packages/core/utils/lib/async.js"},"Async file in Strapi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://caolan.github.io/async/v3/"},"http://caolan.github.io/async/v3/"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);