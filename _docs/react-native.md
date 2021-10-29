---
title: React Native
tags:
  - jekyll
  - github
description: React Native Code
---

## React Native Example

### Navigation

```javascript
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayerScreen from "./src/player/Player";

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
