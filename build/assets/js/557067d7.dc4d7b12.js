"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8801],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,p=u["".concat(m,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(p,i(i({ref:t},l),{},{components:n})):r.createElement(p,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},m="Dark Mode Theme",c={unversionedId:"tutorial-basics/themeSwitch",id:"tutorial-basics/themeSwitch",isDocsHomePage:!1,title:"Dark Mode Theme",description:"Used for Switching Theme to Dark mode with AsyncStorage",source:"@site/docs/tutorial-basics/themeSwitch.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/themeSwitch",permalink:"/docs/tutorial-basics/themeSwitch",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/docs/tutorial-basics/test"},next:{title:"Jekyll Docker Compose",permalink:"/docs/docker/jekyllDocker"}},l=[{value:"Used for Switching Theme to Dark mode with AsyncStorage",id:"used-for-switching-theme-to-dark-mode-with-asyncstorage",children:[],level:3},{value:"Theme Provider",id:"theme-provider",children:[],level:3},{value:"Theme Wrapper",id:"theme-wrapper",children:[],level:3},{value:"Theme StyleSheet",id:"theme-stylesheet",children:[],level:3},{value:"Then Wrap your App with :",id:"then-wrap-your-app-with-",children:[],level:3}],h={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dark-mode-theme"},"Dark Mode Theme"),(0,a.kt)("h3",{id:"used-for-switching-theme-to-dark-mode-with-asyncstorage"},"Used for Switching Theme to Dark mode with AsyncStorage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="themeSwitch.js"',title:'"themeSwitch.js"'},'import React, { useState, useEffect } from "react";\nimport { View, StyleSheet, Text, Switch } from "react-native";\nimport { useTheme } from "./ThemeProvider";\n\nconst ThemeSwitch = () => {\n  const { theme, updateTheme } = useTheme();\n  const changeTheme = () => updateTheme(theme.themeMode);\n  const [isEnabled, setIsEnabled] = useState(false);\n\n  useEffect(() => {\n    setIsEnabled(theme.themeMode === "default" ? false : true);\n  }, [theme.themeMode]);\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ ...styles.text, color: theme.textColor }}>Dark Mode</Text>\n      <Switch\n        trackColor={{ false: "#767577", true: "#81b0ff" }}\n        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}\n        ios_backgroundColor="#3e3e3e"\n        onValueChange={changeTheme}\n        value={isEnabled}\n      />\n    </View>\n  );\n};\nconst styles = StyleSheet.create({\n  container: {\n    margin: 10,\n    flexDirection: "row",\n    alignItems: "center",\n  },\n  text: {\n    fontSize: 14,\n    marginRight: 10,\n  },\n});\nexport default ThemeSwitch;\n')),(0,a.kt)("h3",{id:"theme-provider"},"Theme Provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ThemeProvider.js"',title:'"ThemeProvider.js"'},'import React, { useContext, createContext, useState, useEffect } from "react";\nimport { darkTheme, defaultTheme } from "./Theme";\nimport AsyncStorage from "@react-native-async-storage/async-storage";\n\nexport const ThemeContext = createContext();\n\nconst ThemeProvider = ({ children }) => {\n  const [theme, setTheme] = useState(defaultTheme);\n  const [isLoadingTheme, setIsLoadingTheme] = useState(true);\n  const findOldTheme = async () => {\n    const themeMode = await AsyncStorage.getItem("themeMode");\n    if (themeMode !== null) {\n      themeMode === "default" ? setTheme(defaultTheme) : setTheme(darkTheme);\n      setIsLoadingTheme(false);\n    }\n    setIsLoadingTheme(false);\n  };\n\n  useEffect(() => {\n    findOldTheme();\n  }, []);\n\n  const updateTheme = (currentThemeMode) => {\n    const newTheme = currentThemeMode === "default" ? darkTheme : defaultTheme;\n    setTheme(newTheme);\n    AsyncStorage.setItem("themeMode", newTheme.themeMode);\n  };\n  return (\n    <ThemeContext.Provider value={{ theme, isLoadingTheme, updateTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n};\n\nexport const useTheme = () => useContext(ThemeContext);\n\nexport default ThemeProvider;\n')),(0,a.kt)("h3",{id:"theme-wrapper"},"Theme Wrapper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ThemeWrapper.js"',title:'"ThemeWrapper.js"'},'import { useTheme } from "./ThemeProvider";\n\nconst ThemeWrapper = ({ children }) => {\n  const { isLoadingTheme } = useTheme();\n  if (isLoadingTheme) return null;\n  return children;\n};\nexport default ThemeWrapper;\n')),(0,a.kt)("h3",{id:"theme-stylesheet"},"Theme StyleSheet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Theme.js"',title:'"Theme.js"'},'export const defaultTheme = {\n  backgroundColor: "#efefef",\n  playButton: "#000",\n  textColor: "#000",\n  nav: {\n    backgroundColor: "#fff",\n    activeTintColor: "hsl(204, 69%, 54%)",\n    inActiveTintColor: "hsl(204, 69%, 20%)",\n  },\n  themeMode: "default",\n  button: {\n    textColor: "#fff",\n    backgroundColor: "#444",\n  },\n  volIcon: "hsl(204, 69%, 54%)",\n  icon: "moon",\n  headerColor: "#efefef",\n  headerText: "#000",\n  shadowColor: "#aaa",\n  blurType: "light",\n  titleText: "#000",\n  statusBar: "#efefef",\n};\nexport const darkTheme = {\n  themeMode: "dark",\n  backgroundColor: "#212121",\n  playButton: "#000",\n  textColor: "#fff",\n  nav: {\n    backgroundColor: "#000",\n    activeTintColor: "hsl(204, 69%, 54%)",\n    inActiveTintColor: "hsl(204, 69%, 20%)",\n  },\n  button: {\n    textColor: "#e3df0e",\n    backgroundColor: "#447",\n  },\n  volIcon: "#fff",\n  icon: "sun",\n  size: "40",\n  headerColor: "#000",\n  headerText: "#000",\n  shadowColor: "#666",\n  blurType: "dark",\n  titleText: "#fff",\n  statusBar: "#212121",\n};\n\nexport const mainTheme = {\n  header: {\n    fontSize: 20,\n    fontWeight: "700",\n    margin: 10,\n  },\n};\n')),(0,a.kt)("h3",{id:"then-wrap-your-app-with-"},"Then Wrap your App with :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import * as React from "react";\nimport { NavigationContainer } from "@react-navigation/native";\nimport AppNavigator from "./src/navigation/AppNavigator";\nimport ThemeProvider from "./src/theme/ThemeProvider";\nimport ThemeWrapper from "./src/theme/ThemeWrapper";\n\nexport default function App() {\n  return (\n    <ThemeProvider>\n      <ThemeWrapper>\n        <NavigationContainer>\n          <AppNavigator />\n        </NavigationContainer>\n      </ThemeWrapper>\n    </ThemeProvider>\n  );\n}\n')))}u.isMDXComponent=!0}}]);