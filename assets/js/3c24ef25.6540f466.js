"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3489],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?t.createElement(m,p(p({ref:r},s),{},{components:n})):t.createElement(m,p({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4337:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={},c="spawnPed",l={unversionedId:"api/ped/server/spawnPed",id:"api/ped/server/spawnPed",title:"spawnPed",description:"Spawn a simple ped in the world.",source:"@site/framework/api/ped/server/spawnPed.md",sourceDirName:"api/ped/server",slug:"/api/ped/server/spawnPed",permalink:"/ncs_documentation/framework/api/ped/server/spawnPed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"deletePed",permalink:"/ncs_documentation/framework/api/ped/server/deletePed"},next:{title:"freeze",permalink:"/ncs_documentation/framework/api/player/client/freeze"}},s={},u=[{value:"Examples",id:"examples",level:3}],d={toc:u};function f(e){var r=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spawnped"},"spawnPed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Ped:spawnPed(modelName, x, y, z, heading)\n")),(0,o.kt)("p",null,"Spawn a simple ped in the world."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Ped:spawnPed('cs_bankman', 178.14, 158.21, 56.21, 90.0)\n")),(0,o.kt)("p",null,"List of ped models name ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fivem.net/docs/game-references/ped-models/"},"here")))}f.isMDXComponent=!0}}]);