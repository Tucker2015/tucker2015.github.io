---
sidebar_position: 7
---

# Get Data from Firebase REST API

```jsx
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Text, View } from "react-native";

const FirebaseApi = () => {
  const [data, setData] = React.useState([]);

  const getDataFromFirestore = async () => {
    const response = await axios
      .get(
        "https://firestore.googleapis.com/v1/projects/spartan-ppv/databases/(default)/documents/users/EgyXOFxm8dPL0caNiXuzi7fmZkr2"
      )
      .then((response) => {
        setData(response.data.fields);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect = () => {
    getDataFromFirestore();
  }; []);

  console.log(data);

  return (
    <View>
      <Text>{data?.name?.stringValue}</Text>
      <Text>{data?.email?.stringValue}</Text>
    </View>
  );

}
export default FirebaseApi;

```
