---
title: Get Data from JSON
tags:
  - jekyll
  - github
description: Get Data from JSON Server
---

### Get Data from JSON Server

```javascript
const [data, setData] = useState([]);

const getPosts = () => {
  fetch("https://stations.kevtucker.com/podcasts")
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      setData(resJson);
    })
    .catch((e) => {
      console.log(e);
    });
};

useEffect(() => {
  getPosts();
}, []);
```

### Sort Data by ID

```javascript
data={data.sort((obj1, obj2) => obj2.id - obj1.id)}
```
