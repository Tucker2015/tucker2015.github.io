"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4024],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=l(r),m=a,k=y["".concat(s,".").concat(m)]||y[m]||u[m]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8336:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return y}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:2},s="Setup React Native Track Player",l={unversionedId:"tutorial-basics/track-player",id:"tutorial-basics/track-player",isDocsHomePage:!1,title:"Setup React Native Track Player",description:"index.js",source:"@site/docs/tutorial-basics/track-player.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/track-player",permalink:"/docs/tutorial-basics/track-player",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Saving Values in Async Storage",permalink:"/docs/tutorial-basics/asyncStorage"},next:{title:"Screen Component",permalink:"/docs/tutorial-basics/screencomp"}},p=[{value:"index.js",id:"indexjs",children:[],level:3},{value:"service.js",id:"servicejs",children:[],level:3},{value:"Player.js",id:"playerjs",children:[],level:3}],u={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-react-native-track-player"},"Setup React Native Track Player"),(0,i.kt)("h3",{id:"indexjs"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},'import { AppRegistry } from "react-native";\nimport App from "./App";\nimport TrackPlayer from "react-native-track-player";\nimport { name as appName } from "./app.json";\n\nAppRegistry.registerComponent(appName, () => App);\nTrackPlayer.registerPlaybackService(() => require("./service.js"));\n')),(0,i.kt)("h3",{id:"servicejs"},"service.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="service.js"',title:'"service.js"'},'import TrackPlayer from "react-native-track-player";\n\nmodule.exports = async function () {\n  TrackPlayer.addEventListener("remote-play", () => {\n    TrackPlayer.play();\n  });\n\n  TrackPlayer.addEventListener("remote-pause", () => {\n    TrackPlayer.pause();\n  });\n\n  TrackPlayer.addEventListener("remote-next", () => {\n    TrackPlayer.skipToNext();\n  });\n\n  TrackPlayer.addEventListener("remote-previous", () => {\n    TrackPlayer.skipToPrevious();\n  });\n\n  TrackPlayer.addEventListener("remote-stop", () => {\n    TrackPlayer.destroy();\n  });\n};\n')),(0,i.kt)("h3",{id:"playerjs"},"Player.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="player.js"',title:'"player.js"'},"\nimport React, { useState, useEffect } from 'react';\nimport { StyleSheet, Image, View, Pressable, ActivityIndicator } from 'react-native';\n\nimport Icon from 'react-native-vector-icons/MaterialCommunityIcons';\nimport Screen from '../components/Screen';\nimport Text from '../components/Text';\nimport { colors } from '../config';\nimport LinearGradient from 'react-native-linear-gradient';\nimport TrackPlayer, {\n    Capability,\n    Event,\n    State,\n    usePlaybackState,\n    useTrackPlayerEvents,\n} from 'react-native-track-player';\n\nconst Player = () => {\n\n    const playbackState = usePlaybackState();\n    const [trackName, setTrackName] = useState('RadioPlayer');\n    const [artistName, setArtistName] = useState('');\n    const [albumCover, setAlbumCover] = useState('');\n    const imageUrl = { uri: 'https://ktinternet.net/radio-logos/pcr_logo.jpg' };\n\n    useEffect(() => {\n        setup();\n        console.log(playbackState)\n    }, []);\n\n    const setup = async () => {\n        await TrackPlayer.reset()\n        await TrackPlayer.setupPlayer({\n            waitForBuffer: true,\n        });\n        await TrackPlayer.updateOptions({\n            stopWithApp: true,\n            alwaysPauseOnInterruption: true,\n            capabilities: [\n                Capability.Play,\n                Capability.Pause,\n                Capability.Stop,\n            ],\n            compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],\n        });\n    };\n\n    const togglePlayback = async (playbackState) => {\n        const currentTrack = await TrackPlayer.getCurrentTrack();\n        if (currentTrack == null) {\n            await TrackPlayer.reset();\n            await TrackPlayer.setupPlayer().then(async () => {\n                TrackPlayer.add({\n                    url: 'https://streams.ktinternet.net:8012/a',\n                    // http://192.111.140.11:8205/stream\n                    // https://streaming.live365.com/a68269\n                    title: 'Radio Player',\n                    artist: '',\n                });\n            });\n            await TrackPlayer.play();\n        } else {\n            if (playbackState === State.Paused) {\n\n                await TrackPlayer.play();\n            } else {\n                await TrackPlayer.pause();\n            }\n        }\n    };\n    useTrackPlayerEvents(\n        [\n            Event.RemotePlay,\n            Event.RemotePause,\n            Event.PlaybackMetadataReceived,\n            Event.PlaybackError\n        ],\n        async event => {\n            if (\n                event.type === Event.PlaybackMetadataReceived\n            ) {\n                const currentTrack = await TrackPlayer.getCurrentTrack();\n                setTrackName(event.title);\n                setArtistName(event.artist);\n                setAlbumCover(albumCover);\n                console.log(event.title, event.artist);\n                fetch(`https://itunes.apple.com/search?term=?${event.artist}+${event.title}&limit=2`)\n                    .then((res) => res.json())\n                    .then((body) => {\n                        // console.log(body);\n                        //checking if we parsed invalid artist and track, if so I set album cover to \"\" so you will se default one and I return so other part of the code won't run\n                        if (body.error != null) {\n                            setAlbumCover('');\n                            TrackPlayer.updateMetadataForTrack(currentTrack, {\n                                title: event.title,\n                                artist: event.artist,\n                                artwork: imageUrl,\n                            });\n                            return;\n                        }\n                        const img = body.results[0]['artworkUrl100'].replace(\n                            '100x100',\n                            '600x600',\n                        );\n                        //I set the image using useState\n                        setAlbumCover(img);\n                        // Reset the Image Thumbnail Url from Notification Screen\n                        if (Platform.OS === 'ios') {\n                            TrackPlayer.clearNowPlayingMetadata();\n                        }\n                        TrackPlayer.updateMetadataForTrack(currentTrack, {\n                            title: event.title,\n                            artist: event.artist,\n                            artwork: img === '' ? imageUrl : img,\n                        });\n                    })\n                    .catch((error) => {\n                        setAlbumCover('');\n                        TrackPlayer.updateMetadataForTrack(currentTrack, {\n                            title: event.title,\n                            artist: event.artist,\n                            artwork: imageUrl,\n                        });\n                    });\n            } else if (event.type === Event.RemotePause) {\n                TrackPlayer.pause();\n            } else if (event.type === Event.RemotePlay) {\n                TrackPlayer.play();\n            };\n        });\n\n\n")))}y.isMDXComponent=!0}}]);