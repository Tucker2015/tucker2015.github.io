"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6425],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),l=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=l(n.components);return o.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(f,a(a({ref:e},u),{},{components:t})):o.createElement(f,a({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5976:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:7},c="Mapview",l={unversionedId:"tutorial-basics/mapview",id:"tutorial-basics/mapview",isDocsHomePage:!1,title:"Mapview",description:"Resource Links",source:"@site/docs/tutorial-basics/mapview.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/mapview",permalink:"/docs/tutorial-basics/mapview",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Get Data from Api with useCallback",permalink:"/docs/tutorial-basics/getApi"},next:{title:"Parsing Data from API",permalink:"/docs/tutorial-basics/parse-data"}},u=[{value:"Resource Links",id:"resource-links",children:[],level:3}],p={toc:u};function d(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mapview"},"Mapview"),(0,i.kt)("h3",{id:"resource-links"},"Resource Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-geolocation/react-native-geolocation"},"https://github.com/react-native-geolocation/react-native-geolocation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MapView.js"',title:'"MapView.js"'},'import React from "react";\nimport { StyleSheet } from "react-native";\nimport { Screen, Text } from "../components";\nimport MapView from "react-native-maps";\nimport useUserLocation from "../hooks/useUserLocation";\n\nconst MapViewer = () => {\n  const location = useUserLocation();\n  console.log(location);\n\n  return (\n    <Screen style={styles.container}>\n      <Text>Map View</Text>\n      <Text>\n        {location?.coords?.latitude} + {location?.coords?.longitude}\n      </Text>\n      {location?.coords?.latitude && location?.coords?.longitude && (\n        <MapView\n          style={styles.mapStyle}\n          initialCamera={{\n            altitude: 10000,\n            center: {\n              latitude: location?.coords?.latitude,\n              longitude: location?.coords?.longitude,\n            },\n            heading: 0,\n            pitch: 0,\n            zoom: 11,\n          }}\n        >\n          <MapView.Marker\n            coordinate={{\n              latitude: location?.coords?.latitude,\n              longitude: location?.coords?.longitude,\n            }}\n          />\n        </MapView>\n      )}\n    </Screen>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  mapStyle: {\n    borderRadius: 20,\n    padding: 10,\n    width: "100%",\n    height: 300,\n  },\n});\n\nexport default MapViewer;\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="useUserLocation.js"',title:'"useUserLocation.js"'},'import React, { useEffect, useState } from "react";\nimport { Alert, Platform, PermissionsAndroid } from "react-native";\nimport Geolocation from "react-native-geolocation-service";\n\nconst getUserLocation = (props) => {\n  const [forceLocation, setForceLocation] = useState(true);\n  const [highAccuracy, setHighAccuracy] = useState(true);\n  const [locationDialog, setLocationDialog] = useState(true);\n  const [significantChanges, setSignificantChanges] = useState(false);\n  const [observing, setObserving] = useState(false);\n  const [foregroundService, setForegroundService] = useState(false);\n  const [useLocationManager, setUseLocationManager] = useState(false);\n  const [location, setLocation] = useState(null);\n\n  // useEffect(() => {\n  //     return () => {\n  //         removeLocationUpdates();\n  //     };\n  // }, [removeLocationUpdates]);\n\n  const hasPermissionIOS = async () => {\n    const openSetting = () => {\n      Linking.openSettings().catch(() => {\n        Alert.alert("Unable to open settings");\n      });\n    };\n    const status = await Geolocation.requestAuthorization("whenInUse");\n\n    if (status === "granted") {\n      return true;\n    }\n\n    if (status === "denied") {\n      Alert.alert("Location permission denied");\n    }\n\n    if (status === "disabled") {\n      Alert.alert(\n        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,\n        "",\n        [\n          { text: "Go to Settings", onPress: openSetting },\n          { text: "Don\'t Use Location", onPress: () => {} },\n        ]\n      );\n    }\n\n    return false;\n  };\n\n  const hasLocationPermission = async () => {\n    if (Platform.OS === "ios") {\n      const hasPermission = await hasPermissionIOS();\n      return hasPermission;\n    }\n\n    if (Platform.OS === "android" && Platform.Version < 23) {\n      return true;\n    }\n\n    const hasPermission = await PermissionsAndroid.check(\n      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION\n    );\n\n    if (hasPermission) {\n      return true;\n    }\n\n    const status = await PermissionsAndroid.request(\n      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION\n    );\n\n    if (status === PermissionsAndroid.RESULTS.GRANTED) {\n      return true;\n    }\n\n    if (status === PermissionsAndroid.RESULTS.DENIED) {\n      ToastAndroid.show(\n        "Location permission denied by user.",\n        ToastAndroid.LONG\n      );\n    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {\n      ToastAndroid.show(\n        "Location permission revoked by user.",\n        ToastAndroid.LONG\n      );\n    }\n\n    return false;\n  };\n\n  const getLocation = async () => {\n    const hasPermission = await hasLocationPermission();\n\n    if (!hasPermission) {\n      return;\n    }\n\n    Geolocation.getCurrentPosition(\n      (position) => {\n        setLocation(position);\n      },\n      (error) => {\n        Alert.alert(`Code ${error.code}`, error.message);\n        setLocation(null);\n        console.log(error);\n      },\n      {\n        accuracy: {\n          android: "high",\n          ios: "best",\n        },\n        enableHighAccuracy: highAccuracy,\n        timeout: 15000,\n        maximumAge: 10000,\n        distanceFilter: 0,\n        forceRequestLocation: forceLocation,\n        forceLocationManager: useLocationManager,\n        showLocationDialog: locationDialog,\n      }\n    );\n  };\n\n  useEffect(() => {\n    getLocation();\n  }, []);\n\n  const getLocationUpdates = async () => {\n    const hasPermission = await hasLocationPermission();\n\n    if (!hasPermission) {\n      return;\n    }\n\n    if (Platform.OS === "android" && foregroundService) {\n      await startForegroundService();\n    }\n\n    setObserving(true);\n\n    watchId.current = Geolocation.watchPosition(\n      (position) => {\n        setLocation(position);\n        console.log(position);\n      },\n      (error) => {\n        setLocation(null);\n        console.log(error);\n      },\n      {\n        accuracy: {\n          android: "high",\n          ios: "best",\n        },\n        enableHighAccuracy: highAccuracy,\n        distanceFilter: 0,\n        interval: 5000,\n        fastestInterval: 2000,\n        forceRequestLocation: forceLocation,\n        forceLocationManager: useLocationManager,\n        showLocationDialog: locationDialog,\n        useSignificantChanges: significantChanges,\n      }\n    );\n  };\n\n  return location;\n};\n\nexport default getUserLocation;\n')))}d.isMDXComponent=!0}}]);