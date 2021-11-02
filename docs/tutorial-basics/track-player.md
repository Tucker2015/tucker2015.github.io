---
sidebar_position: 2
---

# Setup React Native Track Player

### index.js

```jsx title="index.js"
import { AppRegistry } from "react-native";
import App from "./App";
import TrackPlayer from "react-native-track-player";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require("./service.js"));
```

### service.js

```jsx title="service.js"
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

### Player.js

```jsx title="player.js"

import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Pressable, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from '../components/Screen';
import Text from '../components/Text';
import { colors } from '../config';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer, {
    Capability,
    Event,
    State,
    usePlaybackState,
    useTrackPlayerEvents,
} from 'react-native-track-player';

const Player = () => {

    const playbackState = usePlaybackState();
    const [trackName, setTrackName] = useState('RadioPlayer');
    const [artistName, setArtistName] = useState('');
    const [albumCover, setAlbumCover] = useState('');
    const imageUrl = { uri: 'https://ktinternet.net/radio-logos/pcr_logo.jpg' };

    useEffect(() => {
        setup();
        console.log(playbackState)
    }, []);

    const setup = async () => {
        await TrackPlayer.reset()
        await TrackPlayer.setupPlayer({
            waitForBuffer: true,
        });
        await TrackPlayer.updateOptions({
            stopWithApp: true,
            alwaysPauseOnInterruption: true,
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.Stop,
            ],
            compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        });
    };

    const togglePlayback = async (playbackState) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack == null) {
            await TrackPlayer.reset();
            await TrackPlayer.setupPlayer().then(async () => {
                TrackPlayer.add({
                    url: 'https://streams.ktinternet.net:8012/a',
                    // http://192.111.140.11:8205/stream
                    // https://streaming.live365.com/a68269
                    title: 'Radio Player',
                    artist: '',
                });
            });
            await TrackPlayer.play();
        } else {
            if (playbackState === State.Paused) {

                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };
    useTrackPlayerEvents(
        [
            Event.RemotePlay,
            Event.RemotePause,
            Event.PlaybackMetadataReceived,
            Event.PlaybackError
        ],
        async event => {
            if (
                event.type === Event.PlaybackMetadataReceived
            ) {
                const currentTrack = await TrackPlayer.getCurrentTrack();
                setTrackName(event.title);
                setArtistName(event.artist);
                setAlbumCover(albumCover);
                console.log(event.title, event.artist);
                fetch(`https://itunes.apple.com/search?term=?${event.artist}+${event.title}&limit=2`)
                    .then((res) => res.json())
                    .then((body) => {
                        // console.log(body);
                        //checking if we parsed invalid artist and track, if so I set album cover to "" so you will se default one and I return so other part of the code won't run
                        if (body.error != null) {
                            setAlbumCover('');
                            TrackPlayer.updateMetadataForTrack(currentTrack, {
                                title: event.title,
                                artist: event.artist,
                                artwork: imageUrl,
                            });
                            return;
                        }
                        const img = body.results[0]['artworkUrl100'].replace(
                            '100x100',
                            '600x600',
                        );
                        //I set the image using useState
                        setAlbumCover(img);
                        // Reset the Image Thumbnail Url from Notification Screen
                        if (Platform.OS === 'ios') {
                            TrackPlayer.clearNowPlayingMetadata();
                        }
                        TrackPlayer.updateMetadataForTrack(currentTrack, {
                            title: event.title,
                            artist: event.artist,
                            artwork: img === '' ? imageUrl : img,
                        });
                    })
                    .catch((error) => {
                        setAlbumCover('');
                        TrackPlayer.updateMetadataForTrack(currentTrack, {
                            title: event.title,
                            artist: event.artist,
                            artwork: imageUrl,
                        });
                    });
            } else if (event.type === Event.RemotePause) {
                TrackPlayer.pause();
            } else if (event.type === Event.RemotePlay) {
                TrackPlayer.play();
            };
        });


```
