---
title: React Native
tags:
  - jekyll
  - github
description: React Native Code
---

## React Native Example

### index.js for React Native Track Player

```javascript
import { AppRegistry } from "react-native";
import App from "./App";
import TrackPlayer from "react-native-track-player";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require("./service.js"));
```

### service.js for React Native Track Player

```javascript
import TrackPlayer from "react-native-track-player";

module.exports = async function () {
  TrackPlayer.addEventListener("remote-play", () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener("remote-pause", () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener("remote-next", () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener("remote-previous", () => {
    TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener("remote-stop", () => {
    TrackPlayer.destroy();
  });
};
```
