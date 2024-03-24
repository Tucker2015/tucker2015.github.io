"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2336],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},g),{},{components:t})):r.createElement(f,i({ref:n},g))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6508:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return g},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},s="Logger",c={unversionedId:"react-native/logger",id:"react-native/logger",isDocsHomePage:!1,title:"Logger",description:"Add Logger to React Native",source:"@site/docs/react-native/logger.md",sourceDirName:"react-native",slug:"/react-native/logger",permalink:"/docs/react-native/logger",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tailwind",permalink:"/docs/tailwind/tailwindFonts"},next:{title:"Saving Values in Async Storage",permalink:"/docs/react-native/asyncStorage"}},g=[{value:"Add Logger to React Native",id:"add-logger-to-react-native",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:g};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logger"},"Logger"),(0,a.kt)("h2",{id:"add-logger-to-react-native"},"Add Logger to React Native"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a global.d.ts file in /src")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// global.d.ts\nexport {};\n\ndeclare global {\n  function logInfo(message: string): void;\n  function logWarning(message: string): void;\n  function logError(message: string): void;\n}\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add a logger.tx file in /src/utils")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// logger.ts\nconst LOG_SERVER_URL = "http://10.0.0.150:4000/log";\nconst APP_NAME = "MBR Radio"; // You can make this dynamic if needed\n\nfunction sendLog(level: String, message: String) {\n  fetch(LOG_SERVER_URL, {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({ level, message, appName: APP_NAME }),\n  })\n    .then((response) => response.json())\n    .then((data) => console.log("Log sent to server:", data))\n    .catch((error) => console.error("Error sending log to server:", error));\n}\n\nglobal.logError = (message: String) => {\n  sendLog("error", message);\n};\n\nglobal.logWarning = (message: String) => {\n  sendLog("warn", message);\n};\n\nglobal.logInfo = (message: String) => {\n  sendLog("info", message);\n};\n\nexport {};\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"In index.js, add the following line:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import "./src/utils/logger";\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"For example, in any component, you can now use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'logInfo("This is an info message");\nlogWarning("This is a warning message");\nlogError("This is an error message");\n')))}u.isMDXComponent=!0}}]);