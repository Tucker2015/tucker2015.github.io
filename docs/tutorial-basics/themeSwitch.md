---
sidebar_position: 7
---

# Dark Mode Theme

### Used for Switching Theme to Dark mode with AsyncStorage

```jsx title="themeSwitch.js"
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { useTheme } from "./ThemeProvider";

const ThemeSwitch = () => {
  const { theme, updateTheme } = useTheme();
  const changeTheme = () => updateTheme(theme.themeMode);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(theme.themeMode === "default" ? false : true);
  }, [theme.themeMode]);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: theme.textColor }}>Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={changeTheme}
        value={isEnabled}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    marginRight: 10,
  },
});
export default ThemeSwitch;
```

### Theme Provider

```jsx title="ThemeProvider.js"
import React, { useContext, createContext, useState, useEffect } from "react";
import { darkTheme, defaultTheme } from "./Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);
  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem("themeMode");
    if (themeMode !== null) {
      themeMode === "default" ? setTheme(defaultTheme) : setTheme(darkTheme);
      setIsLoadingTheme(false);
    }
    setIsLoadingTheme(false);
  };

  useEffect(() => {
    findOldTheme();
  }, []);

  const updateTheme = (currentThemeMode) => {
    const newTheme = currentThemeMode === "default" ? darkTheme : defaultTheme;
    setTheme(newTheme);
    AsyncStorage.setItem("themeMode", newTheme.themeMode);
  };
  return (
    <ThemeContext.Provider value={{ theme, isLoadingTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
```

### Theme Wrapper

```jsx title="ThemeWrapper.js"
import { useTheme } from "./ThemeProvider";

const ThemeWrapper = ({ children }) => {
  const { isLoadingTheme } = useTheme();
  if (isLoadingTheme) return null;
  return children;
};
export default ThemeWrapper;
```

### Theme StyleSheet

```jsx title="Theme.js"
export const defaultTheme = {
  backgroundColor: "#efefef",
  playButton: "#000",
  textColor: "#000",
  nav: {
    backgroundColor: "#fff",
    activeTintColor: "hsl(204, 69%, 54%)",
    inActiveTintColor: "hsl(204, 69%, 20%)",
  },
  themeMode: "default",
  button: {
    textColor: "#fff",
    backgroundColor: "#444",
  },
  volIcon: "hsl(204, 69%, 54%)",
  icon: "moon",
  headerColor: "#efefef",
  headerText: "#000",
  shadowColor: "#aaa",
  blurType: "light",
  titleText: "#000",
  statusBar: "#efefef",
};
export const darkTheme = {
  themeMode: "dark",
  backgroundColor: "#212121",
  playButton: "#000",
  textColor: "#fff",
  nav: {
    backgroundColor: "#000",
    activeTintColor: "hsl(204, 69%, 54%)",
    inActiveTintColor: "hsl(204, 69%, 20%)",
  },
  button: {
    textColor: "#e3df0e",
    backgroundColor: "#447",
  },
  volIcon: "#fff",
  icon: "sun",
  size: "40",
  headerColor: "#000",
  headerText: "#000",
  shadowColor: "#666",
  blurType: "dark",
  titleText: "#fff",
  statusBar: "#212121",
};

export const mainTheme = {
  header: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
};
```

### Then Wrap your App with :

```jsx title="App.js"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import ThemeProvider from "./src/theme/ThemeProvider";
import ThemeWrapper from "./src/theme/ThemeWrapper";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
```
