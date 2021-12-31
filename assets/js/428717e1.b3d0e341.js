"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4894],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},242:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},s="Get Data from JSON Server using Fetch",u={unversionedId:"tutorial-basics/get-data-fetch",id:"tutorial-basics/get-data-fetch",isDocsHomePage:!1,title:"Get Data from JSON Server using Fetch",description:"Get Data from JSON Server using Fetch",source:"@site/docs/tutorial-basics/get-data-fetch.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/get-data-fetch",permalink:"/docs/tutorial-basics/get-data-fetch",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kevin's Documents",permalink:"/docs/intro"},next:{title:"Setup React Native Track Player",permalink:"/docs/tutorial-basics/track-player"}},l=[{value:"Get Data from JSON Server using Fetch",id:"get-data-from-json-server-using-fetch-1",children:[],level:3},{value:"Sorting Data by ID",id:"sorting-data-by-id",children:[],level:3}],f={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-data-from-json-server-using-fetch"},"Get Data from JSON Server using Fetch"),(0,o.kt)("h3",{id:"get-data-from-json-server-using-fetch-1"},"Get Data from JSON Server using Fetch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const [data, setData] = useState([]);\n\nconst getPosts = () => {\n  fetch("https://stations.kevtucker.com/podcasts")\n    .then((res) => res.json())\n    .then((resJson) => {\n      console.log(resJson);\n      setData(resJson);\n    })\n    .catch((e) => {\n      console.log(e);\n    });\n};\n\nuseEffect(() => {\n  getPosts();\n}, []);\n')),(0,o.kt)("h3",{id:"sorting-data-by-id"},"Sorting Data by ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"\ndata={data.sort((obj1, obj2) => obj2.id - obj1.id)}\n\n")))}p.isMDXComponent=!0}}]);