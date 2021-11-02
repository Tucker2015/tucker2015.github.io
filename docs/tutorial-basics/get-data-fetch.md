---
<<<<<<< HEAD:docs/tutorial-basics/get-data-fetch.md
sidebar_position: 1
---

# Get Data using Fetch
=======
title: Get Data from JSON using FETCH
tags:
  - jekyll
  - github
description: Get Data from JSON Server using FETCH
---

### Get Data from JSON Server using Fetch
>>>>>>> c394b640afd72ee3b50bb63813b54a53cbc9eb7b:_docs/react-native/getdata.md

### Get Data from JSON Server using Fetch

```jsx
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

<<<<<<< HEAD:docs/tutorial-basics/get-data-fetch.md
### Sorting Data by ID

```jsx

data={data.sort((obj1, obj2) => obj2.id - obj1.id)}

=======
### Sort Data by ID

```javascript
data={data.sort((obj1, obj2) => obj2.id - obj1.id)}
>>>>>>> c394b640afd72ee3b50bb63813b54a53cbc9eb7b:_docs/react-native/getdata.md
```
