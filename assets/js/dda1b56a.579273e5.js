"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5744],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},c="Get Data from Api with useCallback",l={unversionedId:"react-native/getApi",id:"react-native/getApi",isDocsHomePage:!1,title:"Get Data from Api with useCallback",description:"For Firebase",source:"@site/docs/react-native/getApi.md",sourceDirName:"react-native",slug:"/react-native/getApi",permalink:"/docs/react-native/getApi",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Xcode info.plist Permissions",permalink:"/docs/react-native/Xcode Permissions"},next:{title:"Mapview",permalink:"/docs/react-native/mapview"}},u=[{value:"For Firebase",id:"for-firebase",children:[],level:2},{value:"For Axios",id:"for-axios",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-data-from-api-with-usecallback"},"Get Data from Api with useCallback"),(0,o.kt)("h2",{id:"for-firebase"},"For Firebase"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import firestore from "@react-native-firebase/firestore";\nimport React, { useState, useEffect, useCallback } from "react";\n\nconst getSchedule = () => {\n  const [scheduleData, setScheduleData] = useState([]);\n  const [isLoading, setIsLoading] = useState(false);\n  const [index, setIndex] = useState(0);\n\n  const getScheduleData = useCallback(async () => {\n    setIsLoading(true);\n    const schedRef = firestore().collection("clubReady");\n    const schedData = await schedRef.get();\n    const schedDataArray = schedData.docs.map((doc) => doc.data());\n    setScheduleData(schedDataArray);\n    setIsLoading(false);\n  }, []);\n  useEffect(() => {\n    getScheduleData();\n  }, [getScheduleData]);\n\n  console.log(scheduleData);\n  return { scheduleData, isLoading, index };\n};\n\nexport default getSchedule;\n')),(0,o.kt)("h2",{id:"for-axios"},"For Axios"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useEffect, useState, useCallback } from "react";\nimport axios from "axios";\n\nconst useApi = (url) => {\n  const [data, setData] = useState([]);\n  const [isLoading, setIsLoading] = useState(false);\n\n  const loadData = useCallback(async () => {\n    setIsLoading(true);\n    const response = await axios.get(url);\n    const data = response.data;\n    setData(data);\n    setIsLoading(false);\n  }, [url]);\n\n  useEffect(() => {\n    loadData();\n  }, [url, loadData]);\n\n  return { data, isLoading };\n};\n\nexport default useApi;\n')))}d.isMDXComponent=!0}}]);