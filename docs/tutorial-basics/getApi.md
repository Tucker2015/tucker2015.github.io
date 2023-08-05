---
sidebar_position: 7
---

# Get Data from Api with useCallback

## For Firebase

```jsx
import firestore from "@react-native-firebase/firestore";
import React, { useState, useEffect, useCallback } from "react";

const getSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);

  const getScheduleData = useCallback(async () => {
    setIsLoading(true);
    const schedRef = firestore().collection("clubReady");
    const schedData = await schedRef.get();
    const schedDataArray = schedData.docs.map((doc) => doc.data());
    setScheduleData(schedDataArray);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    getScheduleData();
  }, [getScheduleData]);

  console.log(scheduleData);
  return { scheduleData, isLoading, index };
};

export default getSchedule;
```

## For Axios

```jsx
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(url);
    const data = response.data;
    setData(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    loadData();
  }, [url, loadData]);

  return { data, isLoading };
};

export default useApi;
```
