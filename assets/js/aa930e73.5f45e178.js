"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5235],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,b=l["".concat(s,".").concat(m)]||l[m]||f[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3781:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:6},s="Get Data with Firebase App",p={unversionedId:"react-native/firebaseGetData",id:"react-native/firebaseGetData",isDocsHomePage:!1,title:"Get Data with Firebase App",description:"",source:"@site/docs/react-native/firebaseGetData.md",sourceDirName:"react-native",slug:"/react-native/firebaseGetData",permalink:"/docs/react-native/firebaseGetData",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Function for Apple Sign In with Firebase",permalink:"/docs/react-native/firebase-apple-auth"},next:{title:"Xcode info.plist Permissions",permalink:"/docs/react-native/Xcode Permissions"}},u=[],f={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-data-with-firebase-app"},"Get Data with Firebase App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport firestore from "@react-native-firebase/firestore";\n\nconst FirebaseApp = () => {\n  const [data, setData] = React.useState([]);\n\n  const getDataFromFirestore = async () => {\n    const response = await firestore()\n      .collection("users")\n      .doc("EgyXOFxm8dPL0caNiXuzi7fmZkr2")\n      .get();\n    setData(response.data());\n  };\n\n  useEffect = () => {\n    getDataFromFirestore();\n  }; []);\n\n  console.log(data);\n\n  return (\n    <View>\n      <Text>{data?.name}</Text>\n      <Text>{data?.email}</Text>\n    </View>\n  );\n};\n')))}l.isMDXComponent=!0}}]);