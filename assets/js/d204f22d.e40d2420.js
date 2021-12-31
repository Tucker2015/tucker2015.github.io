"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2926],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=l(n),f=a,g=y["".concat(i,".").concat(f)]||y[f]||p[f]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return y}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_position:7},i="Saving Values in Async Storage",l={unversionedId:"tutorial-basics/asyncStorage",id:"tutorial-basics/asyncStorage",isDocsHomePage:!1,title:"Saving Values in Async Storage",description:"First install AsyncStorage from GitHub :",source:"@site/docs/tutorial-basics/asyncStorage.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/asyncStorage",permalink:"/docs/tutorial-basics/asyncStorage",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Xcode info.plist Permissions",permalink:"/docs/tutorial-basics/Xcode Permissions"},next:{title:"Boolean Values",permalink:"/docs/tutorial-basics/boolean"}},u=[],p={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"saving-values-in-async-storage"},"Saving Values in Async Storage"),(0,o.kt)("p",null,"First install AsyncStorage from GitHub :"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-async-storage/async-storage"},"https://github.com/react-native-async-storage/async-storage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-async-storage/async-storage\n")),(0,o.kt)("p",null,"Pod Install :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx pod-install\n")),(0,o.kt)("p",null,"Create the following code :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'},'import React, { useEffect, useState } from "react";\nimport AsyncStorage from "@react-native-async-storage/async-storage";\n\nconst App = () => {\n  const [textInputValue, setTextInputValue] = React.useState("");\n  const [value, setValue] = React.useState("");\n\n  const saveValue = () => {\n    if (textInputValue) {\n      AsyncStorage.setItem("any_value", textInputValue);\n      setTextInputValue("");\n      alert("Value saved");\n    } else {\n      alert("Please enter a value");\n    }\n  };\n\n  const getValue = async () => {\n    const value = await AsyncStorage.getItem("any_value");\n    setValue(value);\n  };\n  return (\n    <Screen style={styles.screen}>\n      <Text>Welcome</Text>\n      <TextInput\n        style={styles.textInput}\n        placeholder="Enter Some Text"\n        placeholderTextColor="darkgray"\n        value={textInputValue}\n        onChangeText={(data) => setTextInputValue(data)}\n      />\n      <Button size="50%" onPress={() => saveValue()} title="Save Data" />\n      <Button size="50%" onPress={() => getValue()} title="Get Data" />\n      <Text>{value}</Text>\n    </Screen>\n  );\n};\n\nexport default App;\n')))}y.isMDXComponent=!0}}]);