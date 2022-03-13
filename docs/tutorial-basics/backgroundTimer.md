---
sidebar_position: 1
---

# React Native Background Timer

1. Install React Native Background Timer from GitHub :

https://github.com/ocetnik/react-native-background-timer

```bash
yarn add react-native-background-timer
```

2. Pod Install :

```bash
npx pod-install
```

### Usage

```jsx title="timer.js"
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import BackgroundTimer from "react-native-background-timer";
import { Button } from "react-native-paper";
import TrackPlayer from "react-native-track-player";

const Timer = () => {
  const [secondsLeft, setSecondsLeft] = React.useState(600);
  const [timerOn, setTimerOn] = React.useState(false);

  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(() => {
    if (secondsLeft === 0) {
      BackgroundTimer.stopBackgroundTimer();
      TrackPlayer.pause();
      setTimerOn(false);
      resetTimer();
    }
  }, [secondsLeft]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft((secs) => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  const resetTimer = () => {
    setSecondsLeft(30);
    setTimerOn(false);
  };

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;

    return `${displayHours}:${displayMins}:${displaySecs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "black" }}>{clockify()}</Text>
      <Button
        mode="contained"
        onPress={() => setTimerOn((current) => !current)}
      >
        {timerOn ? "Stop" : "Start"}
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          setSecondsLeft(10);
          setTimerOn((current) => !current);
        }}
      >
        15 Min
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default Timer;
```
