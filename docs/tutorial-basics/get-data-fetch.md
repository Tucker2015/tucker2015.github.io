---
sidebar_position: 1
---

# Get Data from JSON Server using Fetch

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

### Sorting Data by ID

```jsx

data={data.sort((obj1, obj2) => obj2.id - obj1.id)}

```
