"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[277],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:7},s="Parsing Data from API",l={unversionedId:"tutorial-basics/parse-data",id:"tutorial-basics/parse-data",isDocsHomePage:!1,title:"Parsing Data from API",description:"Parse Date",source:"@site/docs/tutorial-basics/parse-data.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/parse-data",permalink:"/docs/tutorial-basics/parse-data",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Screen Component",permalink:"/docs/tutorial-basics/screencomp"},next:{title:"React Native",permalink:"/docs/tutorial-basics/test"}},u=[{value:"Parse Date",id:"parse-date",children:[],level:3},{value:"Split Content",id:"split-content",children:[],level:3},{value:"This goes under",id:"this-goes-under",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parsing-data-from-api"},"Parsing Data from API"),(0,i.kt)("h3",{id:"parse-date"},"Parse Date"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"var mydate = new Date(item.publishedAt);\n  {...}\nsubTitle={mydate.toDateString()}\n\n")),(0,i.kt)("h3",{id:"split-content"},"Split Content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"var contentSplit = [item.content.split('[')[0]]\n  {...}\n{contentSplit}\n\n")),(0,i.kt)("h3",{id:"this-goes-under"},"This goes under"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"  renderItem={({ item }) => {\n                    var mydate = new Date(item.publishedAt);\n                    var contentSplit = [item.content.split('[')[0]]\n\n                }}\n")),(0,i.kt)("p",null,"constant."))}d.isMDXComponent=!0}}]);