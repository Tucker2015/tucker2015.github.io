---
sidebar_position: 7
---

# Saving Values in Async Storage

First install AsyncStorage from GitHub :

https://github.com/react-native-async-storage/async-storage

```bash
yarn add @react-native-async-storage/async-storage
```

Pod Install :

```bash
npx pod-install
```

Create the following code :

```jsx title="app.js"
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [textInputValue, setTextInputValue] = React.useState("");
  const [value, setValue] = React.useState("");

  const saveValue = () => {
    if (textInputValue) {
      AsyncStorage.setItem("any_value", textInputValue);
      setTextInputValue("");
      alert("Value saved");
    } else {
      alert("Please enter a value");
    }
  };

  const getValue = async () => {
    const value = await AsyncStorage.getItem("any_value");
    setValue(value);
  };
  return (
    <Screen style={styles.screen}>
      <Text>Welcome</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Some Text"
        placeholderTextColor="darkgray"
        value={textInputValue}
        onChangeText={(data) => setTextInputValue(data)}
      />
      <Button size="50%" onPress={() => saveValue()} title="Save Data" />
      <Button size="50%" onPress={() => getValue()} title="Get Data" />
      <Text>{value}</Text>
    </Screen>
  );
};

export default App;
```
