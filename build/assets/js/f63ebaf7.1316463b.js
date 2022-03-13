"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5201],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3626:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:7},p="Function for Apple Sign In with Firebase",u={unversionedId:"tutorial-basics/firebase-apple-auth",id:"tutorial-basics/firebase-apple-auth",isDocsHomePage:!1,title:"Function for Apple Sign In with Firebase",description:"",source:"@site/docs/tutorial-basics/firebase-apple-auth.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/firebase-apple-auth",permalink:"/docs/tutorial-basics/firebase-apple-auth",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Boolean Values",permalink:"/docs/tutorial-basics/boolean"},next:{title:"Mapview",permalink:"/docs/tutorial-basics/mapview"}},c=[],l={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-for-apple-sign-in-with-firebase"},"Function for Apple Sign In with Firebase"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"}," appleSignIn: async () => {\n          try {\n            const appleAuthRequestResponse = await appleAuth.performRequest({\n              requestedOperation: appleAuth.Operation.LOGIN,\n              requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],\n            });\n\n\n            if (!appleAuthRequestResponse.identityToken) {\n              throw 'Apple Sign-In failed - no identify token returned';\n            }\n            const { identityToken, nonce } = appleAuthRequestResponse;\n            const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);\n            await auth().signInWithCredential(appleCredential);\n            const existingUserDoc = await firestore().collection('users').doc(auth().currentUser.uid).get();\n\n            showToast();\n            if (!existingUserDoc && !existingUserDoc.exists) {\n              firestore().collection('users').doc(auth().currentUser.uid)\n                .set({\n                  fname: appleAuthRequestResponse.fullName.givenName,\n                  lname: appleAuthRequestResponse.fullName.familyName,\n                  email: appleAuthRequestResponse.email,\n                  createdAt: firestore.Timestamp.fromDate(new Date()),\n                  userImg: null,\n                });\n            }\n\n          } catch (e) {\n            console.log(e);\n          }\n        },\n")))}f.isMDXComponent=!0}}]);