"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7402],{1440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(3117),a=(r(7294),r(3905));const i={title:"Example",description:"Short description",tags:["content-manager"]},l="Example doc",o={unversionedId:"example",id:"example",title:"Example",description:"Short description",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/example",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/example.md",tags:[{label:"content-manager",permalink:"/tags/content-manager"}],version:"current",frontMatter:{title:"Example",description:"Short description",tags:["content-manager"]}},p={},m=[{value:"Summary",id:"summary",level:2},{value:"Detailed design",id:"detailed-design",level:2},{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Resources",id:"resources",level:2}],s={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-doc"},"Example doc"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Description of the software system / component.")),(0,a.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Explaining the software design and reasoning.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Api specifications.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Benchmarks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Add necessary diagrams and code examples.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Think about edge-cases and include examples."))),(0,a.kt)("h2",{id:"tradeoffs"},"Tradeoffs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What potential tradeoffs are involved with this system/implementation.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Complexity.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Limitations of the feature itself.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"How does this proposal integrate with the current features implemented."))),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What other approaches did we consider?")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Link to product documents.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Link to user documentation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Any useful research used for it"))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);