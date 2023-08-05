---
sidebar_position: 7
---

# Get Data with Firebase App

```jsx
import React from "react";
import firestore from "@react-native-firebase/firestore";

const FirebaseApp = () => {
  const [data, setData] = React.useState([]);

  const getDataFromFirestore = async () => {
    const response = await firestore()
      .collection("users")
      .doc("EgyXOFxm8dPL0caNiXuzi7fmZkr2")
      .get();
    setData(response.data());
  };

  useEffect = () => {
    getDataFromFirestore();
  }; []);

  console.log(data);

  return (
    <View>
      <Text>{data?.name}</Text>
      <Text>{data?.email}</Text>
    </View>
  );
};
```
