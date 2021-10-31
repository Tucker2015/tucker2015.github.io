---
title: Get Data from JSON using FETCH
tags:
  - jekyll
  - github
description: Get Data from JSON Server using FETCH
---

### Get Data from JSON Server using Fetch

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
