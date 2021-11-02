---
sidebar_position: 7
---

# React Native

## Screen Component

```jsx
import React from "react";
import {
  View,
  StyleSheet,
  PlatformConstants,
  SafeAreaView,
} from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Screen;
```
